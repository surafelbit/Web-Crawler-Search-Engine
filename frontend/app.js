/**
 * DocuTrace Frontend Engine
 * Interacts with express search API (http://localhost:5000/api/search)
 * Provides instant live search, keyword highlighting, fallback demo data, and UI state management.
 */

const API_BASE_URL = "http://localhost:5000";

// Mock dataset for fallback/demo mode when backend API is starting up or has no records
const DEMO_DATABASE = [
  {
    id: 1,
    url: "https://react.dev/reference/react/useState",
    title: "useState – React Docs Reference",
    content: "useState is a React Hook that lets you add a state variable to your component. Call useState at the top level of your component to declare one or more state variables. State persistence across renders.",
    crawledAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: 2,
    url: "https://www.prisma.io/docs/concepts/components/prisma-client",
    title: "Prisma Client Documentation - Query Engine & Typesafe DB",
    content: "Prisma Client is an auto-generated, type-safe query builder for Node.js and TypeScript tailored to your database schema. Query postgres, mysql, and sqlite effortlessly.",
    crawledAt: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: 3,
    url: "https://expressjs.com/en/starter/basic-routing.html",
    title: "Express Basic Routing Guide & Middleware",
    content: "Routing refers to how an application's endpoints (URIs) respond to client requests. You define routing using methods of the Express app object corresponding to HTTP methods: app.get(), app.post().",
    crawledAt: new Date(Date.now() - 3600000 * 12).toISOString()
  },
  {
    id: 4,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    title: "JavaScript Guide - MDN Web Docs",
    content: "The JavaScript Guide shows you how to use JavaScript and gives an overview of the language including control flow, functions, objects, async promises, loops, and DOM manipulation.",
    crawledAt: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    id: 5,
    url: "https://github.com/topics/web-crawler",
    title: "Web Crawler Repositories & Search Indexers",
    content: "A web crawler (also known as a web spider or web robot) is a program or automated script that browses the World Wide Web in a methodical, automated manner to index content.",
    crawledAt: new Date(Date.now() - 3600000 * 48).toISOString()
  }
];

// DOM Elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-btn");
const resultsToolbar = document.getElementById("results-toolbar");
const resultsCountEl = document.getElementById("results-count");
const searchTimeEl = document.getElementById("search-time");
const resultsContainer = document.getElementById("results-container");
const skeletonContainer = document.getElementById("skeleton-container");
const emptyState = document.getElementById("empty-state");
const apiStatusBadge = document.getElementById("api-status");
const themeToggleBtn = document.getElementById("theme-toggle");
const viewDetailedBtn = document.getElementById("view-detailed");
const viewCompactBtn = document.getElementById("view-compact");
const toastEl = document.getElementById("toast");
const logoHome = document.getElementById("logo-home");

// State
let isBackendLive = false;
let currentViewMode = "list"; // "list" | "compact"

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  checkApiConnection();
  setupEventListeners();
  setupKeyboardShortcuts();
  loadSavedTheme();
});

// Check API Status
async function checkApiConnection() {
  const statusText = apiStatusBadge.querySelector(".status-text");
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    
    // Quick probe search query to backend
    const res = await fetch(`${API_BASE_URL}/api/search?q=test`, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (res.ok) {
      isBackendLive = true;
      apiStatusBadge.classList.remove("demo");
      statusText.textContent = "API Live (Port 5000)";
      apiStatusBadge.title = "Connected to Express Search API";
      return;
    }
  } catch (err) {
    // API server unreachable or offline
  }

  isBackendLive = false;
  apiStatusBadge.classList.add("demo");
  statusText.textContent = "Demo Mode (Mock DB)";
  apiStatusBadge.title = "Backend API offline or database empty. Using dynamic mock search engine mode.";
}

// Event Listeners
function setupEventListeners() {
  // Input change
  searchInput.addEventListener("input", () => {
    clearBtn.style.display = searchInput.value.length > 0 ? "block" : "none";
  });

  // Clear button
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    searchInput.focus();
  });

  // Form Submit
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      performSearch(query);
    }
  });

  // Tag Chips
  document.querySelectorAll(".tag-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const query = chip.dataset.query;
      searchInput.value = query;
      clearBtn.style.display = "block";
      performSearch(query);
    });
  });

  // View Switchers
  viewDetailedBtn.addEventListener("click", () => setViewMode("list"));
  viewCompactBtn.addEventListener("click", () => setViewMode("compact"));

  // Theme Toggle
  themeToggleBtn.addEventListener("click", toggleTheme);

  // Logo Reset
  logoHome.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    resultsToolbar.style.display = "none";
    resultsContainer.innerHTML = "";
    emptyState.style.display = "none";
  });
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Press "/" to focus search box
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    // Press "Escape" to clear
    if (e.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = "";
      clearBtn.style.display = "none";
    }
  });
}

// Perform Search
async function performSearch(query) {
  const startTime = performance.now();
  showLoading();

  let results = [];
  let isFromApi = false;

  // Try live API first if available or attempt fetch
  try {
    const res = await fetch(`${API_BASE_URL}/api/search?q=${encodeURIComponent(query)}`);
    if (res.ok) {
      const data = await res.json();
      results = data.data || [];
      isFromApi = true;
      isBackendLive = true;
      apiStatusBadge.classList.remove("demo");
      apiStatusBadge.querySelector(".status-text").textContent = "API Live (Port 5000)";
    }
  } catch (e) {
    console.warn("Backend API unreachable, using client search engine engine...");
  }

  // Fallback to client mock search if API returned empty or failed
  if (!isFromApi || results.length === 0) {
    results = DEMO_DATABASE.filter(item => {
      const q = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q) ||
        item.url.toLowerCase().includes(q)
      );
    });
  }

  const duration = Math.round(performance.now() - startTime);

  hideLoading();
  renderResults(results, query, duration);
}

// Show/Hide Loading States
function showLoading() {
  resultsToolbar.style.display = "none";
  emptyState.style.display = "none";
  resultsContainer.innerHTML = "";
  skeletonContainer.style.display = "flex";
}

function hideLoading() {
  skeletonContainer.style.display = "none";
}

// Render Search Results
function renderResults(results, query, duration) {
  resultsToolbar.style.display = "flex";
  resultsCountEl.textContent = `${results.length} result${results.length === 1 ? '' : 's'}`;
  searchTimeEl.textContent = `in ${duration}ms`;

  if (results.length === 0) {
    emptyState.style.display = "block";
    resultsContainer.innerHTML = "";
    return;
  }

  emptyState.style.display = "none";
  
  const cardsHtml = results.map(item => {
    const highlightedTitle = highlightKeyword(escapeHtml(item.title), query);
    const highlightedSnippet = highlightKeyword(escapeHtml(item.content), query);
    const domain = getDomainName(item.url);
    const formattedDate = formatDate(item.crawledAt || new Date());

    return `
      <article class="result-card">
        <div class="card-header-url">
          <div class="favicon-icon"><i class="fa-solid fa-globe"></i></div>
          <span class="url-link">${escapeHtml(item.url)}</span>
        </div>
        <h2 class="card-title">
          <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="title-link">
            ${highlightedTitle}
          </a>
        </h2>
        <p class="card-snippet">${highlightedSnippet}</p>
        <div class="card-footer-meta">
          <div class="meta-badge">
            <i class="fa-regular fa-clock"></i> Indexed ${formattedDate}
          </div>
          <div class="card-actions">
            <button class="action-icon-btn copy-btn" data-url="${escapeHtml(item.url)}" title="Copy Link">
              <i class="fa-regular fa-copy"></i>
            </button>
            <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener" class="action-icon-btn" title="Open page">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  resultsContainer.innerHTML = cardsHtml;

  // Add click listeners to copy buttons
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      navigator.clipboard.writeText(url);
      showToast("Link copied to clipboard!");
    });
  });
}

// Highlight Keyword Helper
function highlightKeyword(text, query) {
  if (!query) return text;
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, "gi");
  return text.replace(regex, '<mark class="match-highlight">$1</mark>');
}

// Helper Utils
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, match => {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return map[match];
  });
}

function getDomainName(urlStr) {
  try {
    const url = new URL(urlStr);
    return url.hostname;
  } catch (e) {
    return urlStr;
  }
}

function formatDate(dateString) {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  } catch (e) {
    return "Recently";
  }
}

function setViewMode(mode) {
  currentViewMode = mode;
  if (mode === "compact") {
    resultsContainer.classList.remove("list-view");
    resultsContainer.classList.add("compact-view");
    viewCompactBtn.classList.add("active");
    viewDetailedBtn.classList.remove("active");
  } else {
    resultsContainer.classList.remove("compact-view");
    resultsContainer.classList.add("list-view");
    viewDetailedBtn.classList.add("active");
    viewCompactBtn.classList.remove("active");
  }
}

// Theme Handling
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("docutrace-theme", newTheme);
  updateThemeIcon(newTheme);
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("docutrace-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const icon = themeToggleBtn.querySelector("i");
  if (theme === "light") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2500);
}
