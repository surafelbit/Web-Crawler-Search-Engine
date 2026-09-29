import test from "node:test";
import assert from "node:assert/strict";

import { normalizeSearchQuery } from "../src/utils/searchQuery.js";

test("normalizeSearchQuery trims and unwraps search inputs", () => {
  assert.equal(normalizeSearchQuery("   React hooks  "), "React hooks");
  assert.equal(normalizeSearchQuery("React   hooks"), "React hooks");
  assert.equal(normalizeSearchQuery(["  useState  "]), "useState");
  assert.equal(normalizeSearchQuery(123), "123");
});

test("normalizeSearchQuery rejects empty values", () => {
  assert.equal(normalizeSearchQuery("   "), "");
  assert.equal(normalizeSearchQuery(undefined), "");
  assert.equal(normalizeSearchQuery(null), "");
});
