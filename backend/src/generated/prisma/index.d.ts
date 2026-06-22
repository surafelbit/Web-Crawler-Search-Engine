
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model Word
 * 
 */
export type Word = $Result.DefaultSelection<Prisma.$WordPayload>
/**
 * Model PageIndex
 * 
 */
export type PageIndex = $Result.DefaultSelection<Prisma.$PageIndexPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CrawlStatus: {
  PENDING: 'PENDING',
  CRAWLED: 'CRAWLED',
  ERROR: 'ERROR'
};

export type CrawlStatus = (typeof CrawlStatus)[keyof typeof CrawlStatus]

}

export type CrawlStatus = $Enums.CrawlStatus

export const CrawlStatus: typeof $Enums.CrawlStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Pages
 * const pages = await prisma.page.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Pages
   * const pages = await prisma.page.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageIndex`: Exposes CRUD operations for the **PageIndex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageIndices
    * const pageIndices = await prisma.pageIndex.findMany()
    * ```
    */
  get pageIndex(): Prisma.PageIndexDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Page: 'Page',
    Link: 'Link',
    Word: 'Word',
    PageIndex: 'PageIndex'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "page" | "link" | "word" | "pageIndex"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      Word: {
        payload: Prisma.$WordPayload<ExtArgs>
        fields: Prisma.WordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findFirst: {
            args: Prisma.WordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findMany: {
            args: Prisma.WordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          create: {
            args: Prisma.WordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          createMany: {
            args: Prisma.WordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          delete: {
            args: Prisma.WordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          update: {
            args: Prisma.WordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          deleteMany: {
            args: Prisma.WordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          upsert: {
            args: Prisma.WordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          aggregate: {
            args: Prisma.WordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWord>
          }
          groupBy: {
            args: Prisma.WordGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordCountArgs<ExtArgs>
            result: $Utils.Optional<WordCountAggregateOutputType> | number
          }
        }
      }
      PageIndex: {
        payload: Prisma.$PageIndexPayload<ExtArgs>
        fields: Prisma.PageIndexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageIndexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageIndexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload>
          }
          findFirst: {
            args: Prisma.PageIndexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageIndexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload>
          }
          findMany: {
            args: Prisma.PageIndexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload>[]
          }
          create: {
            args: Prisma.PageIndexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload>
          }
          createMany: {
            args: Prisma.PageIndexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageIndexCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload>[]
          }
          delete: {
            args: Prisma.PageIndexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload>
          }
          update: {
            args: Prisma.PageIndexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload>
          }
          deleteMany: {
            args: Prisma.PageIndexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageIndexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageIndexUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload>[]
          }
          upsert: {
            args: Prisma.PageIndexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageIndexPayload>
          }
          aggregate: {
            args: Prisma.PageIndexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageIndex>
          }
          groupBy: {
            args: Prisma.PageIndexGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageIndexGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageIndexCountArgs<ExtArgs>
            result: $Utils.Optional<PageIndexCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    page?: PageOmit
    link?: LinkOmit
    word?: WordOmit
    pageIndex?: PageIndexOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    linksOut: number
    linksIn: number
    wordIndices: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linksOut?: boolean | PageCountOutputTypeCountLinksOutArgs
    linksIn?: boolean | PageCountOutputTypeCountLinksInArgs
    wordIndices?: boolean | PageCountOutputTypeCountWordIndicesArgs
  }

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountLinksOutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountLinksInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountWordIndicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageIndexWhereInput
  }


  /**
   * Count Type WordCountOutputType
   */

  export type WordCountOutputType = {
    pageIndices: number
  }

  export type WordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageIndices?: boolean | WordCountOutputTypeCountPageIndicesArgs
  }

  // Custom InputTypes
  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountPageIndicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageIndexWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    content: string | null
    status: $Enums.CrawlStatus | null
    isIndexed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    content: string | null
    status: $Enums.CrawlStatus | null
    isIndexed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    url: number
    title: number
    content: number
    status: number
    isIndexed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    content?: true
    status?: true
    isIndexed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    content?: true
    status?: true
    isIndexed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    content?: true
    status?: true
    isIndexed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: string
    url: string
    title: string | null
    content: string | null
    status: $Enums.CrawlStatus
    isIndexed: boolean
    createdAt: Date
    updatedAt: Date
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    isIndexed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    linksOut?: boolean | Page$linksOutArgs<ExtArgs>
    linksIn?: boolean | Page$linksInArgs<ExtArgs>
    wordIndices?: boolean | Page$wordIndicesArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    isIndexed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    isIndexed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    isIndexed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "content" | "status" | "isIndexed" | "createdAt" | "updatedAt", ExtArgs["result"]["page"]>
  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linksOut?: boolean | Page$linksOutArgs<ExtArgs>
    linksIn?: boolean | Page$linksInArgs<ExtArgs>
    wordIndices?: boolean | Page$wordIndicesArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      linksOut: Prisma.$LinkPayload<ExtArgs>[]
      linksIn: Prisma.$LinkPayload<ExtArgs>[]
      wordIndices: Prisma.$PageIndexPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      title: string | null
      content: string | null
      status: $Enums.CrawlStatus
      isIndexed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    linksOut<T extends Page$linksOutArgs<ExtArgs> = {}>(args?: Subset<T, Page$linksOutArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linksIn<T extends Page$linksInArgs<ExtArgs> = {}>(args?: Subset<T, Page$linksInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wordIndices<T extends Page$wordIndicesArgs<ExtArgs> = {}>(args?: Subset<T, Page$wordIndicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'String'>
    readonly url: FieldRef<"Page", 'String'>
    readonly title: FieldRef<"Page", 'String'>
    readonly content: FieldRef<"Page", 'String'>
    readonly status: FieldRef<"Page", 'CrawlStatus'>
    readonly isIndexed: FieldRef<"Page", 'Boolean'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page.linksOut
   */
  export type Page$linksOutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Page.linksIn
   */
  export type Page$linksInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Page.wordIndices
   */
  export type Page$wordIndicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    where?: PageIndexWhereInput
    orderBy?: PageIndexOrderByWithRelationInput | PageIndexOrderByWithRelationInput[]
    cursor?: PageIndexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageIndexScalarFieldEnum | PageIndexScalarFieldEnum[]
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkMinAggregateOutputType = {
    id: string | null
    sourceId: string | null
    targetId: string | null
    createdAt: Date | null
  }

  export type LinkMaxAggregateOutputType = {
    id: string | null
    sourceId: string | null
    targetId: string | null
    createdAt: Date | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    sourceId: number
    targetId: number
    createdAt: number
    _all: number
  }


  export type LinkMinAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    createdAt?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    createdAt?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    createdAt?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: string
    sourceId: string
    targetId: string
    createdAt: Date
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    createdAt?: boolean
    source?: boolean | PageDefaultArgs<ExtArgs>
    target?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    createdAt?: boolean
    source?: boolean | PageDefaultArgs<ExtArgs>
    target?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    createdAt?: boolean
    source?: boolean | PageDefaultArgs<ExtArgs>
    target?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    createdAt?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceId" | "targetId" | "createdAt", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | PageDefaultArgs<ExtArgs>
    target?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type LinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | PageDefaultArgs<ExtArgs>
    target?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type LinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | PageDefaultArgs<ExtArgs>
    target?: boolean | PageDefaultArgs<ExtArgs>
  }

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      source: Prisma.$PagePayload<ExtArgs>
      target: Prisma.$PagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceId: string
      targetId: string
      createdAt: Date
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    source<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    target<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'String'>
    readonly sourceId: FieldRef<"Link", 'String'>
    readonly targetId: FieldRef<"Link", 'String'>
    readonly createdAt: FieldRef<"Link", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model Word
   */

  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordMinAggregateOutputType = {
    id: string | null
    text: string | null
  }

  export type WordMaxAggregateOutputType = {
    id: string | null
    text: string | null
  }

  export type WordCountAggregateOutputType = {
    id: number
    text: number
    _all: number
  }


  export type WordMinAggregateInputType = {
    id?: true
    text?: true
  }

  export type WordMaxAggregateInputType = {
    id?: true
    text?: true
  }

  export type WordCountAggregateInputType = {
    id?: true
    text?: true
    _all?: true
  }

  export type WordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
    orderBy?: WordOrderByWithAggregationInput | WordOrderByWithAggregationInput[]
    by: WordScalarFieldEnum[] | WordScalarFieldEnum
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }

  export type WordGroupByOutputType = {
    id: string
    text: string
    _count: WordCountAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    pageIndices?: boolean | Word$pageIndicesArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["word"]>

  export type WordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["word"]>

  export type WordSelectScalar = {
    id?: boolean
    text?: boolean
  }

  export type WordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text", ExtArgs["result"]["word"]>
  export type WordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageIndices?: boolean | Word$pageIndicesArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Word"
    objects: {
      pageIndices: Prisma.$PageIndexPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
    }, ExtArgs["result"]["word"]>
    composites: {}
  }

  type WordGetPayload<S extends boolean | null | undefined | WordDefaultArgs> = $Result.GetResult<Prisma.$WordPayload, S>

  type WordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Word'], meta: { name: 'Word' } }
    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordFindUniqueArgs>(args: SelectSubset<T, WordFindUniqueArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Word that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs>(args: SelectSubset<T, WordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordFindFirstArgs>(args?: SelectSubset<T, WordFindFirstArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs>(args?: SelectSubset<T, WordFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordWithIdOnly = await prisma.word.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordFindManyArgs>(args?: SelectSubset<T, WordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
     */
    create<T extends WordCreateArgs>(args: SelectSubset<T, WordCreateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Words.
     * @param {WordCreateManyArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordCreateManyArgs>(args?: SelectSubset<T, WordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Words and returns the data saved in the database.
     * @param {WordCreateManyAndReturnArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordCreateManyAndReturnArgs>(args?: SelectSubset<T, WordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
     */
    delete<T extends WordDeleteArgs>(args: SelectSubset<T, WordDeleteArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordUpdateArgs>(args: SelectSubset<T, WordUpdateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordDeleteManyArgs>(args?: SelectSubset<T, WordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordUpdateManyArgs>(args: SelectSubset<T, WordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words and returns the data updated in the database.
     * @param {WordUpdateManyAndReturnArgs} args - Arguments to update many Words.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordUpdateManyAndReturnArgs>(args: SelectSubset<T, WordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
     */
    upsert<T extends WordUpsertArgs>(args: SelectSubset<T, WordUpsertArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Word model
   */
  readonly fields: WordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pageIndices<T extends Word$pageIndicesArgs<ExtArgs> = {}>(args?: Subset<T, Word$pageIndicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Word model
   */
  interface WordFieldRefs {
    readonly id: FieldRef<"Word", 'String'>
    readonly text: FieldRef<"Word", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Word findUnique
   */
  export type WordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findFirst
   */
  export type WordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findMany
   */
  export type WordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word create
   */
  export type WordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }

  /**
   * Word createMany
   */
  export type WordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Word createManyAndReturn
   */
  export type WordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Word update
   */
  export type WordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word updateManyAndReturn
   */
  export type WordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word upsert
   */
  export type WordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }

  /**
   * Word delete
   */
  export type WordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to delete.
     */
    limit?: number
  }

  /**
   * Word.pageIndices
   */
  export type Word$pageIndicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    where?: PageIndexWhereInput
    orderBy?: PageIndexOrderByWithRelationInput | PageIndexOrderByWithRelationInput[]
    cursor?: PageIndexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageIndexScalarFieldEnum | PageIndexScalarFieldEnum[]
  }

  /**
   * Word without action
   */
  export type WordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
  }


  /**
   * Model PageIndex
   */

  export type AggregatePageIndex = {
    _count: PageIndexCountAggregateOutputType | null
    _avg: PageIndexAvgAggregateOutputType | null
    _sum: PageIndexSumAggregateOutputType | null
    _min: PageIndexMinAggregateOutputType | null
    _max: PageIndexMaxAggregateOutputType | null
  }

  export type PageIndexAvgAggregateOutputType = {
    count: number | null
  }

  export type PageIndexSumAggregateOutputType = {
    count: number | null
  }

  export type PageIndexMinAggregateOutputType = {
    id: string | null
    wordId: string | null
    pageId: string | null
    count: number | null
  }

  export type PageIndexMaxAggregateOutputType = {
    id: string | null
    wordId: string | null
    pageId: string | null
    count: number | null
  }

  export type PageIndexCountAggregateOutputType = {
    id: number
    wordId: number
    pageId: number
    count: number
    _all: number
  }


  export type PageIndexAvgAggregateInputType = {
    count?: true
  }

  export type PageIndexSumAggregateInputType = {
    count?: true
  }

  export type PageIndexMinAggregateInputType = {
    id?: true
    wordId?: true
    pageId?: true
    count?: true
  }

  export type PageIndexMaxAggregateInputType = {
    id?: true
    wordId?: true
    pageId?: true
    count?: true
  }

  export type PageIndexCountAggregateInputType = {
    id?: true
    wordId?: true
    pageId?: true
    count?: true
    _all?: true
  }

  export type PageIndexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageIndex to aggregate.
     */
    where?: PageIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageIndices to fetch.
     */
    orderBy?: PageIndexOrderByWithRelationInput | PageIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageIndices
    **/
    _count?: true | PageIndexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageIndexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageIndexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageIndexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageIndexMaxAggregateInputType
  }

  export type GetPageIndexAggregateType<T extends PageIndexAggregateArgs> = {
        [P in keyof T & keyof AggregatePageIndex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageIndex[P]>
      : GetScalarType<T[P], AggregatePageIndex[P]>
  }




  export type PageIndexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageIndexWhereInput
    orderBy?: PageIndexOrderByWithAggregationInput | PageIndexOrderByWithAggregationInput[]
    by: PageIndexScalarFieldEnum[] | PageIndexScalarFieldEnum
    having?: PageIndexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageIndexCountAggregateInputType | true
    _avg?: PageIndexAvgAggregateInputType
    _sum?: PageIndexSumAggregateInputType
    _min?: PageIndexMinAggregateInputType
    _max?: PageIndexMaxAggregateInputType
  }

  export type PageIndexGroupByOutputType = {
    id: string
    wordId: string
    pageId: string
    count: number
    _count: PageIndexCountAggregateOutputType | null
    _avg: PageIndexAvgAggregateOutputType | null
    _sum: PageIndexSumAggregateOutputType | null
    _min: PageIndexMinAggregateOutputType | null
    _max: PageIndexMaxAggregateOutputType | null
  }

  type GetPageIndexGroupByPayload<T extends PageIndexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageIndexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageIndexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageIndexGroupByOutputType[P]>
            : GetScalarType<T[P], PageIndexGroupByOutputType[P]>
        }
      >
    >


  export type PageIndexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    pageId?: boolean
    count?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageIndex"]>

  export type PageIndexSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    pageId?: boolean
    count?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageIndex"]>

  export type PageIndexSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    pageId?: boolean
    count?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageIndex"]>

  export type PageIndexSelectScalar = {
    id?: boolean
    wordId?: boolean
    pageId?: boolean
    count?: boolean
  }

  export type PageIndexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wordId" | "pageId" | "count", ExtArgs["result"]["pageIndex"]>
  export type PageIndexInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type PageIndexIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type PageIndexIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    page?: boolean | PageDefaultArgs<ExtArgs>
  }

  export type $PageIndexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageIndex"
    objects: {
      word: Prisma.$WordPayload<ExtArgs>
      page: Prisma.$PagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wordId: string
      pageId: string
      count: number
    }, ExtArgs["result"]["pageIndex"]>
    composites: {}
  }

  type PageIndexGetPayload<S extends boolean | null | undefined | PageIndexDefaultArgs> = $Result.GetResult<Prisma.$PageIndexPayload, S>

  type PageIndexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageIndexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageIndexCountAggregateInputType | true
    }

  export interface PageIndexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageIndex'], meta: { name: 'PageIndex' } }
    /**
     * Find zero or one PageIndex that matches the filter.
     * @param {PageIndexFindUniqueArgs} args - Arguments to find a PageIndex
     * @example
     * // Get one PageIndex
     * const pageIndex = await prisma.pageIndex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageIndexFindUniqueArgs>(args: SelectSubset<T, PageIndexFindUniqueArgs<ExtArgs>>): Prisma__PageIndexClient<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageIndex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageIndexFindUniqueOrThrowArgs} args - Arguments to find a PageIndex
     * @example
     * // Get one PageIndex
     * const pageIndex = await prisma.pageIndex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageIndexFindUniqueOrThrowArgs>(args: SelectSubset<T, PageIndexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageIndexClient<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageIndex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageIndexFindFirstArgs} args - Arguments to find a PageIndex
     * @example
     * // Get one PageIndex
     * const pageIndex = await prisma.pageIndex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageIndexFindFirstArgs>(args?: SelectSubset<T, PageIndexFindFirstArgs<ExtArgs>>): Prisma__PageIndexClient<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageIndex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageIndexFindFirstOrThrowArgs} args - Arguments to find a PageIndex
     * @example
     * // Get one PageIndex
     * const pageIndex = await prisma.pageIndex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageIndexFindFirstOrThrowArgs>(args?: SelectSubset<T, PageIndexFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageIndexClient<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageIndices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageIndexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageIndices
     * const pageIndices = await prisma.pageIndex.findMany()
     * 
     * // Get first 10 PageIndices
     * const pageIndices = await prisma.pageIndex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageIndexWithIdOnly = await prisma.pageIndex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageIndexFindManyArgs>(args?: SelectSubset<T, PageIndexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageIndex.
     * @param {PageIndexCreateArgs} args - Arguments to create a PageIndex.
     * @example
     * // Create one PageIndex
     * const PageIndex = await prisma.pageIndex.create({
     *   data: {
     *     // ... data to create a PageIndex
     *   }
     * })
     * 
     */
    create<T extends PageIndexCreateArgs>(args: SelectSubset<T, PageIndexCreateArgs<ExtArgs>>): Prisma__PageIndexClient<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageIndices.
     * @param {PageIndexCreateManyArgs} args - Arguments to create many PageIndices.
     * @example
     * // Create many PageIndices
     * const pageIndex = await prisma.pageIndex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageIndexCreateManyArgs>(args?: SelectSubset<T, PageIndexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageIndices and returns the data saved in the database.
     * @param {PageIndexCreateManyAndReturnArgs} args - Arguments to create many PageIndices.
     * @example
     * // Create many PageIndices
     * const pageIndex = await prisma.pageIndex.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageIndices and only return the `id`
     * const pageIndexWithIdOnly = await prisma.pageIndex.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageIndexCreateManyAndReturnArgs>(args?: SelectSubset<T, PageIndexCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageIndex.
     * @param {PageIndexDeleteArgs} args - Arguments to delete one PageIndex.
     * @example
     * // Delete one PageIndex
     * const PageIndex = await prisma.pageIndex.delete({
     *   where: {
     *     // ... filter to delete one PageIndex
     *   }
     * })
     * 
     */
    delete<T extends PageIndexDeleteArgs>(args: SelectSubset<T, PageIndexDeleteArgs<ExtArgs>>): Prisma__PageIndexClient<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageIndex.
     * @param {PageIndexUpdateArgs} args - Arguments to update one PageIndex.
     * @example
     * // Update one PageIndex
     * const pageIndex = await prisma.pageIndex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageIndexUpdateArgs>(args: SelectSubset<T, PageIndexUpdateArgs<ExtArgs>>): Prisma__PageIndexClient<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageIndices.
     * @param {PageIndexDeleteManyArgs} args - Arguments to filter PageIndices to delete.
     * @example
     * // Delete a few PageIndices
     * const { count } = await prisma.pageIndex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageIndexDeleteManyArgs>(args?: SelectSubset<T, PageIndexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageIndexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageIndices
     * const pageIndex = await prisma.pageIndex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageIndexUpdateManyArgs>(args: SelectSubset<T, PageIndexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageIndices and returns the data updated in the database.
     * @param {PageIndexUpdateManyAndReturnArgs} args - Arguments to update many PageIndices.
     * @example
     * // Update many PageIndices
     * const pageIndex = await prisma.pageIndex.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageIndices and only return the `id`
     * const pageIndexWithIdOnly = await prisma.pageIndex.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageIndexUpdateManyAndReturnArgs>(args: SelectSubset<T, PageIndexUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageIndex.
     * @param {PageIndexUpsertArgs} args - Arguments to update or create a PageIndex.
     * @example
     * // Update or create a PageIndex
     * const pageIndex = await prisma.pageIndex.upsert({
     *   create: {
     *     // ... data to create a PageIndex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageIndex we want to update
     *   }
     * })
     */
    upsert<T extends PageIndexUpsertArgs>(args: SelectSubset<T, PageIndexUpsertArgs<ExtArgs>>): Prisma__PageIndexClient<$Result.GetResult<Prisma.$PageIndexPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageIndexCountArgs} args - Arguments to filter PageIndices to count.
     * @example
     * // Count the number of PageIndices
     * const count = await prisma.pageIndex.count({
     *   where: {
     *     // ... the filter for the PageIndices we want to count
     *   }
     * })
    **/
    count<T extends PageIndexCountArgs>(
      args?: Subset<T, PageIndexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageIndexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageIndex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageIndexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageIndexAggregateArgs>(args: Subset<T, PageIndexAggregateArgs>): Prisma.PrismaPromise<GetPageIndexAggregateType<T>>

    /**
     * Group by PageIndex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageIndexGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageIndexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageIndexGroupByArgs['orderBy'] }
        : { orderBy?: PageIndexGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageIndexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageIndexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageIndex model
   */
  readonly fields: PageIndexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageIndex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageIndexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    page<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageIndex model
   */
  interface PageIndexFieldRefs {
    readonly id: FieldRef<"PageIndex", 'String'>
    readonly wordId: FieldRef<"PageIndex", 'String'>
    readonly pageId: FieldRef<"PageIndex", 'String'>
    readonly count: FieldRef<"PageIndex", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PageIndex findUnique
   */
  export type PageIndexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    /**
     * Filter, which PageIndex to fetch.
     */
    where: PageIndexWhereUniqueInput
  }

  /**
   * PageIndex findUniqueOrThrow
   */
  export type PageIndexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    /**
     * Filter, which PageIndex to fetch.
     */
    where: PageIndexWhereUniqueInput
  }

  /**
   * PageIndex findFirst
   */
  export type PageIndexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    /**
     * Filter, which PageIndex to fetch.
     */
    where?: PageIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageIndices to fetch.
     */
    orderBy?: PageIndexOrderByWithRelationInput | PageIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageIndices.
     */
    cursor?: PageIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageIndices.
     */
    distinct?: PageIndexScalarFieldEnum | PageIndexScalarFieldEnum[]
  }

  /**
   * PageIndex findFirstOrThrow
   */
  export type PageIndexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    /**
     * Filter, which PageIndex to fetch.
     */
    where?: PageIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageIndices to fetch.
     */
    orderBy?: PageIndexOrderByWithRelationInput | PageIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageIndices.
     */
    cursor?: PageIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageIndices.
     */
    distinct?: PageIndexScalarFieldEnum | PageIndexScalarFieldEnum[]
  }

  /**
   * PageIndex findMany
   */
  export type PageIndexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    /**
     * Filter, which PageIndices to fetch.
     */
    where?: PageIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageIndices to fetch.
     */
    orderBy?: PageIndexOrderByWithRelationInput | PageIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageIndices.
     */
    cursor?: PageIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageIndices.
     */
    distinct?: PageIndexScalarFieldEnum | PageIndexScalarFieldEnum[]
  }

  /**
   * PageIndex create
   */
  export type PageIndexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    /**
     * The data needed to create a PageIndex.
     */
    data: XOR<PageIndexCreateInput, PageIndexUncheckedCreateInput>
  }

  /**
   * PageIndex createMany
   */
  export type PageIndexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageIndices.
     */
    data: PageIndexCreateManyInput | PageIndexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageIndex createManyAndReturn
   */
  export type PageIndexCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * The data used to create many PageIndices.
     */
    data: PageIndexCreateManyInput | PageIndexCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageIndex update
   */
  export type PageIndexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    /**
     * The data needed to update a PageIndex.
     */
    data: XOR<PageIndexUpdateInput, PageIndexUncheckedUpdateInput>
    /**
     * Choose, which PageIndex to update.
     */
    where: PageIndexWhereUniqueInput
  }

  /**
   * PageIndex updateMany
   */
  export type PageIndexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageIndices.
     */
    data: XOR<PageIndexUpdateManyMutationInput, PageIndexUncheckedUpdateManyInput>
    /**
     * Filter which PageIndices to update
     */
    where?: PageIndexWhereInput
    /**
     * Limit how many PageIndices to update.
     */
    limit?: number
  }

  /**
   * PageIndex updateManyAndReturn
   */
  export type PageIndexUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * The data used to update PageIndices.
     */
    data: XOR<PageIndexUpdateManyMutationInput, PageIndexUncheckedUpdateManyInput>
    /**
     * Filter which PageIndices to update
     */
    where?: PageIndexWhereInput
    /**
     * Limit how many PageIndices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageIndex upsert
   */
  export type PageIndexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    /**
     * The filter to search for the PageIndex to update in case it exists.
     */
    where: PageIndexWhereUniqueInput
    /**
     * In case the PageIndex found by the `where` argument doesn't exist, create a new PageIndex with this data.
     */
    create: XOR<PageIndexCreateInput, PageIndexUncheckedCreateInput>
    /**
     * In case the PageIndex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageIndexUpdateInput, PageIndexUncheckedUpdateInput>
  }

  /**
   * PageIndex delete
   */
  export type PageIndexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
    /**
     * Filter which PageIndex to delete.
     */
    where: PageIndexWhereUniqueInput
  }

  /**
   * PageIndex deleteMany
   */
  export type PageIndexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageIndices to delete
     */
    where?: PageIndexWhereInput
    /**
     * Limit how many PageIndices to delete.
     */
    limit?: number
  }

  /**
   * PageIndex without action
   */
  export type PageIndexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageIndex
     */
    select?: PageIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageIndex
     */
    omit?: PageIndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIndexInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    content: 'content',
    status: 'status',
    isIndexed: 'isIndexed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    sourceId: 'sourceId',
    targetId: 'targetId',
    createdAt: 'createdAt'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const WordScalarFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  export const PageIndexScalarFieldEnum: {
    id: 'id',
    wordId: 'wordId',
    pageId: 'pageId',
    count: 'count'
  };

  export type PageIndexScalarFieldEnum = (typeof PageIndexScalarFieldEnum)[keyof typeof PageIndexScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'CrawlStatus'
   */
  export type EnumCrawlStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CrawlStatus'>
    


  /**
   * Reference to a field of type 'CrawlStatus[]'
   */
  export type ListEnumCrawlStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CrawlStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: StringFilter<"Page"> | string
    url?: StringFilter<"Page"> | string
    title?: StringNullableFilter<"Page"> | string | null
    content?: StringNullableFilter<"Page"> | string | null
    status?: EnumCrawlStatusFilter<"Page"> | $Enums.CrawlStatus
    isIndexed?: BoolFilter<"Page"> | boolean
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    linksOut?: LinkListRelationFilter
    linksIn?: LinkListRelationFilter
    wordIndices?: PageIndexListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    status?: SortOrder
    isIndexed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    linksOut?: LinkOrderByRelationAggregateInput
    linksIn?: LinkOrderByRelationAggregateInput
    wordIndices?: PageIndexOrderByRelationAggregateInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    title?: StringNullableFilter<"Page"> | string | null
    content?: StringNullableFilter<"Page"> | string | null
    status?: EnumCrawlStatusFilter<"Page"> | $Enums.CrawlStatus
    isIndexed?: BoolFilter<"Page"> | boolean
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    linksOut?: LinkListRelationFilter
    linksIn?: LinkListRelationFilter
    wordIndices?: PageIndexListRelationFilter
  }, "id" | "url">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    status?: SortOrder
    isIndexed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page"> | string
    url?: StringWithAggregatesFilter<"Page"> | string
    title?: StringNullableWithAggregatesFilter<"Page"> | string | null
    content?: StringNullableWithAggregatesFilter<"Page"> | string | null
    status?: EnumCrawlStatusWithAggregatesFilter<"Page"> | $Enums.CrawlStatus
    isIndexed?: BoolWithAggregatesFilter<"Page"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: StringFilter<"Link"> | string
    sourceId?: StringFilter<"Link"> | string
    targetId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    source?: XOR<PageScalarRelationFilter, PageWhereInput>
    target?: XOR<PageScalarRelationFilter, PageWhereInput>
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
    source?: PageOrderByWithRelationInput
    target?: PageOrderByWithRelationInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceId_targetId?: LinkSourceIdTargetIdCompoundUniqueInput
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    sourceId?: StringFilter<"Link"> | string
    targetId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    source?: XOR<PageScalarRelationFilter, PageWhereInput>
    target?: XOR<PageScalarRelationFilter, PageWhereInput>
  }, "id" | "sourceId_targetId">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Link"> | string
    sourceId?: StringWithAggregatesFilter<"Link"> | string
    targetId?: StringWithAggregatesFilter<"Link"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
  }

  export type WordWhereInput = {
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    id?: StringFilter<"Word"> | string
    text?: StringFilter<"Word"> | string
    pageIndices?: PageIndexListRelationFilter
  }

  export type WordOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    pageIndices?: PageIndexOrderByRelationAggregateInput
  }

  export type WordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    text?: string
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    pageIndices?: PageIndexListRelationFilter
  }, "id" | "text">

  export type WordOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    _count?: WordCountOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    OR?: WordScalarWhereWithAggregatesInput[]
    NOT?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Word"> | string
    text?: StringWithAggregatesFilter<"Word"> | string
  }

  export type PageIndexWhereInput = {
    AND?: PageIndexWhereInput | PageIndexWhereInput[]
    OR?: PageIndexWhereInput[]
    NOT?: PageIndexWhereInput | PageIndexWhereInput[]
    id?: StringFilter<"PageIndex"> | string
    wordId?: StringFilter<"PageIndex"> | string
    pageId?: StringFilter<"PageIndex"> | string
    count?: IntFilter<"PageIndex"> | number
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }

  export type PageIndexOrderByWithRelationInput = {
    id?: SortOrder
    wordId?: SortOrder
    pageId?: SortOrder
    count?: SortOrder
    word?: WordOrderByWithRelationInput
    page?: PageOrderByWithRelationInput
  }

  export type PageIndexWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    wordId_pageId?: PageIndexWordIdPageIdCompoundUniqueInput
    AND?: PageIndexWhereInput | PageIndexWhereInput[]
    OR?: PageIndexWhereInput[]
    NOT?: PageIndexWhereInput | PageIndexWhereInput[]
    wordId?: StringFilter<"PageIndex"> | string
    pageId?: StringFilter<"PageIndex"> | string
    count?: IntFilter<"PageIndex"> | number
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }, "id" | "wordId_pageId">

  export type PageIndexOrderByWithAggregationInput = {
    id?: SortOrder
    wordId?: SortOrder
    pageId?: SortOrder
    count?: SortOrder
    _count?: PageIndexCountOrderByAggregateInput
    _avg?: PageIndexAvgOrderByAggregateInput
    _max?: PageIndexMaxOrderByAggregateInput
    _min?: PageIndexMinOrderByAggregateInput
    _sum?: PageIndexSumOrderByAggregateInput
  }

  export type PageIndexScalarWhereWithAggregatesInput = {
    AND?: PageIndexScalarWhereWithAggregatesInput | PageIndexScalarWhereWithAggregatesInput[]
    OR?: PageIndexScalarWhereWithAggregatesInput[]
    NOT?: PageIndexScalarWhereWithAggregatesInput | PageIndexScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageIndex"> | string
    wordId?: StringWithAggregatesFilter<"PageIndex"> | string
    pageId?: StringWithAggregatesFilter<"PageIndex"> | string
    count?: IntWithAggregatesFilter<"PageIndex"> | number
  }

  export type PageCreateInput = {
    id?: string
    url: string
    title?: string | null
    content?: string | null
    status?: $Enums.CrawlStatus
    isIndexed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    linksOut?: LinkCreateNestedManyWithoutSourceInput
    linksIn?: LinkCreateNestedManyWithoutTargetInput
    wordIndices?: PageIndexCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: string
    url: string
    title?: string | null
    content?: string | null
    status?: $Enums.CrawlStatus
    isIndexed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    linksOut?: LinkUncheckedCreateNestedManyWithoutSourceInput
    linksIn?: LinkUncheckedCreateNestedManyWithoutTargetInput
    wordIndices?: PageIndexUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCrawlStatusFieldUpdateOperationsInput | $Enums.CrawlStatus
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linksOut?: LinkUpdateManyWithoutSourceNestedInput
    linksIn?: LinkUpdateManyWithoutTargetNestedInput
    wordIndices?: PageIndexUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCrawlStatusFieldUpdateOperationsInput | $Enums.CrawlStatus
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linksOut?: LinkUncheckedUpdateManyWithoutSourceNestedInput
    linksIn?: LinkUncheckedUpdateManyWithoutTargetNestedInput
    wordIndices?: PageIndexUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageCreateManyInput = {
    id?: string
    url: string
    title?: string | null
    content?: string | null
    status?: $Enums.CrawlStatus
    isIndexed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCrawlStatusFieldUpdateOperationsInput | $Enums.CrawlStatus
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCrawlStatusFieldUpdateOperationsInput | $Enums.CrawlStatus
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateInput = {
    id?: string
    createdAt?: Date | string
    source: PageCreateNestedOneWithoutLinksOutInput
    target: PageCreateNestedOneWithoutLinksInInput
  }

  export type LinkUncheckedCreateInput = {
    id?: string
    sourceId: string
    targetId: string
    createdAt?: Date | string
  }

  export type LinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: PageUpdateOneRequiredWithoutLinksOutNestedInput
    target?: PageUpdateOneRequiredWithoutLinksInNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateManyInput = {
    id?: string
    sourceId: string
    targetId: string
    createdAt?: Date | string
  }

  export type LinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCreateInput = {
    id?: string
    text: string
    pageIndices?: PageIndexCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateInput = {
    id?: string
    text: string
    pageIndices?: PageIndexUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    pageIndices?: PageIndexUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    pageIndices?: PageIndexUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateManyInput = {
    id?: string
    text: string
  }

  export type WordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type WordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PageIndexCreateInput = {
    id?: string
    count: number
    word: WordCreateNestedOneWithoutPageIndicesInput
    page: PageCreateNestedOneWithoutWordIndicesInput
  }

  export type PageIndexUncheckedCreateInput = {
    id?: string
    wordId: string
    pageId: string
    count: number
  }

  export type PageIndexUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    word?: WordUpdateOneRequiredWithoutPageIndicesNestedInput
    page?: PageUpdateOneRequiredWithoutWordIndicesNestedInput
  }

  export type PageIndexUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type PageIndexCreateManyInput = {
    id?: string
    wordId: string
    pageId: string
    count: number
  }

  export type PageIndexUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type PageIndexUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCrawlStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlStatus | EnumCrawlStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlStatus[] | ListEnumCrawlStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlStatus[] | ListEnumCrawlStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlStatusFilter<$PrismaModel> | $Enums.CrawlStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type PageIndexListRelationFilter = {
    every?: PageIndexWhereInput
    some?: PageIndexWhereInput
    none?: PageIndexWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageIndexOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    isIndexed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    isIndexed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    isIndexed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCrawlStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlStatus | EnumCrawlStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlStatus[] | ListEnumCrawlStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlStatus[] | ListEnumCrawlStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlStatusWithAggregatesFilter<$PrismaModel> | $Enums.CrawlStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCrawlStatusFilter<$PrismaModel>
    _max?: NestedEnumCrawlStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PageScalarRelationFilter = {
    is?: PageWhereInput
    isNot?: PageWhereInput
  }

  export type LinkSourceIdTargetIdCompoundUniqueInput = {
    sourceId: string
    targetId: string
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type WordCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WordScalarRelationFilter = {
    is?: WordWhereInput
    isNot?: WordWhereInput
  }

  export type PageIndexWordIdPageIdCompoundUniqueInput = {
    wordId: string
    pageId: string
  }

  export type PageIndexCountOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    pageId?: SortOrder
    count?: SortOrder
  }

  export type PageIndexAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type PageIndexMaxOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    pageId?: SortOrder
    count?: SortOrder
  }

  export type PageIndexMinOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    pageId?: SortOrder
    count?: SortOrder
  }

  export type PageIndexSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LinkCreateNestedManyWithoutSourceInput = {
    create?: XOR<LinkCreateWithoutSourceInput, LinkUncheckedCreateWithoutSourceInput> | LinkCreateWithoutSourceInput[] | LinkUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSourceInput | LinkCreateOrConnectWithoutSourceInput[]
    createMany?: LinkCreateManySourceInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type LinkCreateNestedManyWithoutTargetInput = {
    create?: XOR<LinkCreateWithoutTargetInput, LinkUncheckedCreateWithoutTargetInput> | LinkCreateWithoutTargetInput[] | LinkUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTargetInput | LinkCreateOrConnectWithoutTargetInput[]
    createMany?: LinkCreateManyTargetInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type PageIndexCreateNestedManyWithoutPageInput = {
    create?: XOR<PageIndexCreateWithoutPageInput, PageIndexUncheckedCreateWithoutPageInput> | PageIndexCreateWithoutPageInput[] | PageIndexUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageIndexCreateOrConnectWithoutPageInput | PageIndexCreateOrConnectWithoutPageInput[]
    createMany?: PageIndexCreateManyPageInputEnvelope
    connect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<LinkCreateWithoutSourceInput, LinkUncheckedCreateWithoutSourceInput> | LinkCreateWithoutSourceInput[] | LinkUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSourceInput | LinkCreateOrConnectWithoutSourceInput[]
    createMany?: LinkCreateManySourceInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutTargetInput = {
    create?: XOR<LinkCreateWithoutTargetInput, LinkUncheckedCreateWithoutTargetInput> | LinkCreateWithoutTargetInput[] | LinkUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTargetInput | LinkCreateOrConnectWithoutTargetInput[]
    createMany?: LinkCreateManyTargetInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type PageIndexUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<PageIndexCreateWithoutPageInput, PageIndexUncheckedCreateWithoutPageInput> | PageIndexCreateWithoutPageInput[] | PageIndexUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageIndexCreateOrConnectWithoutPageInput | PageIndexCreateOrConnectWithoutPageInput[]
    createMany?: PageIndexCreateManyPageInputEnvelope
    connect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCrawlStatusFieldUpdateOperationsInput = {
    set?: $Enums.CrawlStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LinkUpdateManyWithoutSourceNestedInput = {
    create?: XOR<LinkCreateWithoutSourceInput, LinkUncheckedCreateWithoutSourceInput> | LinkCreateWithoutSourceInput[] | LinkUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSourceInput | LinkCreateOrConnectWithoutSourceInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutSourceInput | LinkUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: LinkCreateManySourceInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutSourceInput | LinkUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutSourceInput | LinkUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type LinkUpdateManyWithoutTargetNestedInput = {
    create?: XOR<LinkCreateWithoutTargetInput, LinkUncheckedCreateWithoutTargetInput> | LinkCreateWithoutTargetInput[] | LinkUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTargetInput | LinkCreateOrConnectWithoutTargetInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutTargetInput | LinkUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: LinkCreateManyTargetInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutTargetInput | LinkUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutTargetInput | LinkUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type PageIndexUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageIndexCreateWithoutPageInput, PageIndexUncheckedCreateWithoutPageInput> | PageIndexCreateWithoutPageInput[] | PageIndexUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageIndexCreateOrConnectWithoutPageInput | PageIndexCreateOrConnectWithoutPageInput[]
    upsert?: PageIndexUpsertWithWhereUniqueWithoutPageInput | PageIndexUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageIndexCreateManyPageInputEnvelope
    set?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    disconnect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    delete?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    connect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    update?: PageIndexUpdateWithWhereUniqueWithoutPageInput | PageIndexUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageIndexUpdateManyWithWhereWithoutPageInput | PageIndexUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageIndexScalarWhereInput | PageIndexScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<LinkCreateWithoutSourceInput, LinkUncheckedCreateWithoutSourceInput> | LinkCreateWithoutSourceInput[] | LinkUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSourceInput | LinkCreateOrConnectWithoutSourceInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutSourceInput | LinkUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: LinkCreateManySourceInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutSourceInput | LinkUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutSourceInput | LinkUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutTargetNestedInput = {
    create?: XOR<LinkCreateWithoutTargetInput, LinkUncheckedCreateWithoutTargetInput> | LinkCreateWithoutTargetInput[] | LinkUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTargetInput | LinkCreateOrConnectWithoutTargetInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutTargetInput | LinkUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: LinkCreateManyTargetInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutTargetInput | LinkUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutTargetInput | LinkUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type PageIndexUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageIndexCreateWithoutPageInput, PageIndexUncheckedCreateWithoutPageInput> | PageIndexCreateWithoutPageInput[] | PageIndexUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageIndexCreateOrConnectWithoutPageInput | PageIndexCreateOrConnectWithoutPageInput[]
    upsert?: PageIndexUpsertWithWhereUniqueWithoutPageInput | PageIndexUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageIndexCreateManyPageInputEnvelope
    set?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    disconnect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    delete?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    connect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    update?: PageIndexUpdateWithWhereUniqueWithoutPageInput | PageIndexUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageIndexUpdateManyWithWhereWithoutPageInput | PageIndexUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageIndexScalarWhereInput | PageIndexScalarWhereInput[]
  }

  export type PageCreateNestedOneWithoutLinksOutInput = {
    create?: XOR<PageCreateWithoutLinksOutInput, PageUncheckedCreateWithoutLinksOutInput>
    connectOrCreate?: PageCreateOrConnectWithoutLinksOutInput
    connect?: PageWhereUniqueInput
  }

  export type PageCreateNestedOneWithoutLinksInInput = {
    create?: XOR<PageCreateWithoutLinksInInput, PageUncheckedCreateWithoutLinksInInput>
    connectOrCreate?: PageCreateOrConnectWithoutLinksInInput
    connect?: PageWhereUniqueInput
  }

  export type PageUpdateOneRequiredWithoutLinksOutNestedInput = {
    create?: XOR<PageCreateWithoutLinksOutInput, PageUncheckedCreateWithoutLinksOutInput>
    connectOrCreate?: PageCreateOrConnectWithoutLinksOutInput
    upsert?: PageUpsertWithoutLinksOutInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutLinksOutInput, PageUpdateWithoutLinksOutInput>, PageUncheckedUpdateWithoutLinksOutInput>
  }

  export type PageUpdateOneRequiredWithoutLinksInNestedInput = {
    create?: XOR<PageCreateWithoutLinksInInput, PageUncheckedCreateWithoutLinksInInput>
    connectOrCreate?: PageCreateOrConnectWithoutLinksInInput
    upsert?: PageUpsertWithoutLinksInInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutLinksInInput, PageUpdateWithoutLinksInInput>, PageUncheckedUpdateWithoutLinksInInput>
  }

  export type PageIndexCreateNestedManyWithoutWordInput = {
    create?: XOR<PageIndexCreateWithoutWordInput, PageIndexUncheckedCreateWithoutWordInput> | PageIndexCreateWithoutWordInput[] | PageIndexUncheckedCreateWithoutWordInput[]
    connectOrCreate?: PageIndexCreateOrConnectWithoutWordInput | PageIndexCreateOrConnectWithoutWordInput[]
    createMany?: PageIndexCreateManyWordInputEnvelope
    connect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
  }

  export type PageIndexUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<PageIndexCreateWithoutWordInput, PageIndexUncheckedCreateWithoutWordInput> | PageIndexCreateWithoutWordInput[] | PageIndexUncheckedCreateWithoutWordInput[]
    connectOrCreate?: PageIndexCreateOrConnectWithoutWordInput | PageIndexCreateOrConnectWithoutWordInput[]
    createMany?: PageIndexCreateManyWordInputEnvelope
    connect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
  }

  export type PageIndexUpdateManyWithoutWordNestedInput = {
    create?: XOR<PageIndexCreateWithoutWordInput, PageIndexUncheckedCreateWithoutWordInput> | PageIndexCreateWithoutWordInput[] | PageIndexUncheckedCreateWithoutWordInput[]
    connectOrCreate?: PageIndexCreateOrConnectWithoutWordInput | PageIndexCreateOrConnectWithoutWordInput[]
    upsert?: PageIndexUpsertWithWhereUniqueWithoutWordInput | PageIndexUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: PageIndexCreateManyWordInputEnvelope
    set?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    disconnect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    delete?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    connect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    update?: PageIndexUpdateWithWhereUniqueWithoutWordInput | PageIndexUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: PageIndexUpdateManyWithWhereWithoutWordInput | PageIndexUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: PageIndexScalarWhereInput | PageIndexScalarWhereInput[]
  }

  export type PageIndexUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<PageIndexCreateWithoutWordInput, PageIndexUncheckedCreateWithoutWordInput> | PageIndexCreateWithoutWordInput[] | PageIndexUncheckedCreateWithoutWordInput[]
    connectOrCreate?: PageIndexCreateOrConnectWithoutWordInput | PageIndexCreateOrConnectWithoutWordInput[]
    upsert?: PageIndexUpsertWithWhereUniqueWithoutWordInput | PageIndexUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: PageIndexCreateManyWordInputEnvelope
    set?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    disconnect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    delete?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    connect?: PageIndexWhereUniqueInput | PageIndexWhereUniqueInput[]
    update?: PageIndexUpdateWithWhereUniqueWithoutWordInput | PageIndexUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: PageIndexUpdateManyWithWhereWithoutWordInput | PageIndexUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: PageIndexScalarWhereInput | PageIndexScalarWhereInput[]
  }

  export type WordCreateNestedOneWithoutPageIndicesInput = {
    create?: XOR<WordCreateWithoutPageIndicesInput, WordUncheckedCreateWithoutPageIndicesInput>
    connectOrCreate?: WordCreateOrConnectWithoutPageIndicesInput
    connect?: WordWhereUniqueInput
  }

  export type PageCreateNestedOneWithoutWordIndicesInput = {
    create?: XOR<PageCreateWithoutWordIndicesInput, PageUncheckedCreateWithoutWordIndicesInput>
    connectOrCreate?: PageCreateOrConnectWithoutWordIndicesInput
    connect?: PageWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WordUpdateOneRequiredWithoutPageIndicesNestedInput = {
    create?: XOR<WordCreateWithoutPageIndicesInput, WordUncheckedCreateWithoutPageIndicesInput>
    connectOrCreate?: WordCreateOrConnectWithoutPageIndicesInput
    upsert?: WordUpsertWithoutPageIndicesInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutPageIndicesInput, WordUpdateWithoutPageIndicesInput>, WordUncheckedUpdateWithoutPageIndicesInput>
  }

  export type PageUpdateOneRequiredWithoutWordIndicesNestedInput = {
    create?: XOR<PageCreateWithoutWordIndicesInput, PageUncheckedCreateWithoutWordIndicesInput>
    connectOrCreate?: PageCreateOrConnectWithoutWordIndicesInput
    upsert?: PageUpsertWithoutWordIndicesInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutWordIndicesInput, PageUpdateWithoutWordIndicesInput>, PageUncheckedUpdateWithoutWordIndicesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCrawlStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlStatus | EnumCrawlStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlStatus[] | ListEnumCrawlStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlStatus[] | ListEnumCrawlStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlStatusFilter<$PrismaModel> | $Enums.CrawlStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCrawlStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlStatus | EnumCrawlStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlStatus[] | ListEnumCrawlStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlStatus[] | ListEnumCrawlStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlStatusWithAggregatesFilter<$PrismaModel> | $Enums.CrawlStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCrawlStatusFilter<$PrismaModel>
    _max?: NestedEnumCrawlStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LinkCreateWithoutSourceInput = {
    id?: string
    createdAt?: Date | string
    target: PageCreateNestedOneWithoutLinksInInput
  }

  export type LinkUncheckedCreateWithoutSourceInput = {
    id?: string
    targetId: string
    createdAt?: Date | string
  }

  export type LinkCreateOrConnectWithoutSourceInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutSourceInput, LinkUncheckedCreateWithoutSourceInput>
  }

  export type LinkCreateManySourceInputEnvelope = {
    data: LinkCreateManySourceInput | LinkCreateManySourceInput[]
    skipDuplicates?: boolean
  }

  export type LinkCreateWithoutTargetInput = {
    id?: string
    createdAt?: Date | string
    source: PageCreateNestedOneWithoutLinksOutInput
  }

  export type LinkUncheckedCreateWithoutTargetInput = {
    id?: string
    sourceId: string
    createdAt?: Date | string
  }

  export type LinkCreateOrConnectWithoutTargetInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutTargetInput, LinkUncheckedCreateWithoutTargetInput>
  }

  export type LinkCreateManyTargetInputEnvelope = {
    data: LinkCreateManyTargetInput | LinkCreateManyTargetInput[]
    skipDuplicates?: boolean
  }

  export type PageIndexCreateWithoutPageInput = {
    id?: string
    count: number
    word: WordCreateNestedOneWithoutPageIndicesInput
  }

  export type PageIndexUncheckedCreateWithoutPageInput = {
    id?: string
    wordId: string
    count: number
  }

  export type PageIndexCreateOrConnectWithoutPageInput = {
    where: PageIndexWhereUniqueInput
    create: XOR<PageIndexCreateWithoutPageInput, PageIndexUncheckedCreateWithoutPageInput>
  }

  export type PageIndexCreateManyPageInputEnvelope = {
    data: PageIndexCreateManyPageInput | PageIndexCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type LinkUpsertWithWhereUniqueWithoutSourceInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutSourceInput, LinkUncheckedUpdateWithoutSourceInput>
    create: XOR<LinkCreateWithoutSourceInput, LinkUncheckedCreateWithoutSourceInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutSourceInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutSourceInput, LinkUncheckedUpdateWithoutSourceInput>
  }

  export type LinkUpdateManyWithWhereWithoutSourceInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutSourceInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    id?: StringFilter<"Link"> | string
    sourceId?: StringFilter<"Link"> | string
    targetId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
  }

  export type LinkUpsertWithWhereUniqueWithoutTargetInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutTargetInput, LinkUncheckedUpdateWithoutTargetInput>
    create: XOR<LinkCreateWithoutTargetInput, LinkUncheckedCreateWithoutTargetInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutTargetInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutTargetInput, LinkUncheckedUpdateWithoutTargetInput>
  }

  export type LinkUpdateManyWithWhereWithoutTargetInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutTargetInput>
  }

  export type PageIndexUpsertWithWhereUniqueWithoutPageInput = {
    where: PageIndexWhereUniqueInput
    update: XOR<PageIndexUpdateWithoutPageInput, PageIndexUncheckedUpdateWithoutPageInput>
    create: XOR<PageIndexCreateWithoutPageInput, PageIndexUncheckedCreateWithoutPageInput>
  }

  export type PageIndexUpdateWithWhereUniqueWithoutPageInput = {
    where: PageIndexWhereUniqueInput
    data: XOR<PageIndexUpdateWithoutPageInput, PageIndexUncheckedUpdateWithoutPageInput>
  }

  export type PageIndexUpdateManyWithWhereWithoutPageInput = {
    where: PageIndexScalarWhereInput
    data: XOR<PageIndexUpdateManyMutationInput, PageIndexUncheckedUpdateManyWithoutPageInput>
  }

  export type PageIndexScalarWhereInput = {
    AND?: PageIndexScalarWhereInput | PageIndexScalarWhereInput[]
    OR?: PageIndexScalarWhereInput[]
    NOT?: PageIndexScalarWhereInput | PageIndexScalarWhereInput[]
    id?: StringFilter<"PageIndex"> | string
    wordId?: StringFilter<"PageIndex"> | string
    pageId?: StringFilter<"PageIndex"> | string
    count?: IntFilter<"PageIndex"> | number
  }

  export type PageCreateWithoutLinksOutInput = {
    id?: string
    url: string
    title?: string | null
    content?: string | null
    status?: $Enums.CrawlStatus
    isIndexed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    linksIn?: LinkCreateNestedManyWithoutTargetInput
    wordIndices?: PageIndexCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutLinksOutInput = {
    id?: string
    url: string
    title?: string | null
    content?: string | null
    status?: $Enums.CrawlStatus
    isIndexed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    linksIn?: LinkUncheckedCreateNestedManyWithoutTargetInput
    wordIndices?: PageIndexUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutLinksOutInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutLinksOutInput, PageUncheckedCreateWithoutLinksOutInput>
  }

  export type PageCreateWithoutLinksInInput = {
    id?: string
    url: string
    title?: string | null
    content?: string | null
    status?: $Enums.CrawlStatus
    isIndexed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    linksOut?: LinkCreateNestedManyWithoutSourceInput
    wordIndices?: PageIndexCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutLinksInInput = {
    id?: string
    url: string
    title?: string | null
    content?: string | null
    status?: $Enums.CrawlStatus
    isIndexed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    linksOut?: LinkUncheckedCreateNestedManyWithoutSourceInput
    wordIndices?: PageIndexUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutLinksInInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutLinksInInput, PageUncheckedCreateWithoutLinksInInput>
  }

  export type PageUpsertWithoutLinksOutInput = {
    update: XOR<PageUpdateWithoutLinksOutInput, PageUncheckedUpdateWithoutLinksOutInput>
    create: XOR<PageCreateWithoutLinksOutInput, PageUncheckedCreateWithoutLinksOutInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutLinksOutInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutLinksOutInput, PageUncheckedUpdateWithoutLinksOutInput>
  }

  export type PageUpdateWithoutLinksOutInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCrawlStatusFieldUpdateOperationsInput | $Enums.CrawlStatus
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linksIn?: LinkUpdateManyWithoutTargetNestedInput
    wordIndices?: PageIndexUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutLinksOutInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCrawlStatusFieldUpdateOperationsInput | $Enums.CrawlStatus
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linksIn?: LinkUncheckedUpdateManyWithoutTargetNestedInput
    wordIndices?: PageIndexUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageUpsertWithoutLinksInInput = {
    update: XOR<PageUpdateWithoutLinksInInput, PageUncheckedUpdateWithoutLinksInInput>
    create: XOR<PageCreateWithoutLinksInInput, PageUncheckedCreateWithoutLinksInInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutLinksInInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutLinksInInput, PageUncheckedUpdateWithoutLinksInInput>
  }

  export type PageUpdateWithoutLinksInInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCrawlStatusFieldUpdateOperationsInput | $Enums.CrawlStatus
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linksOut?: LinkUpdateManyWithoutSourceNestedInput
    wordIndices?: PageIndexUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutLinksInInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCrawlStatusFieldUpdateOperationsInput | $Enums.CrawlStatus
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linksOut?: LinkUncheckedUpdateManyWithoutSourceNestedInput
    wordIndices?: PageIndexUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageIndexCreateWithoutWordInput = {
    id?: string
    count: number
    page: PageCreateNestedOneWithoutWordIndicesInput
  }

  export type PageIndexUncheckedCreateWithoutWordInput = {
    id?: string
    pageId: string
    count: number
  }

  export type PageIndexCreateOrConnectWithoutWordInput = {
    where: PageIndexWhereUniqueInput
    create: XOR<PageIndexCreateWithoutWordInput, PageIndexUncheckedCreateWithoutWordInput>
  }

  export type PageIndexCreateManyWordInputEnvelope = {
    data: PageIndexCreateManyWordInput | PageIndexCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type PageIndexUpsertWithWhereUniqueWithoutWordInput = {
    where: PageIndexWhereUniqueInput
    update: XOR<PageIndexUpdateWithoutWordInput, PageIndexUncheckedUpdateWithoutWordInput>
    create: XOR<PageIndexCreateWithoutWordInput, PageIndexUncheckedCreateWithoutWordInput>
  }

  export type PageIndexUpdateWithWhereUniqueWithoutWordInput = {
    where: PageIndexWhereUniqueInput
    data: XOR<PageIndexUpdateWithoutWordInput, PageIndexUncheckedUpdateWithoutWordInput>
  }

  export type PageIndexUpdateManyWithWhereWithoutWordInput = {
    where: PageIndexScalarWhereInput
    data: XOR<PageIndexUpdateManyMutationInput, PageIndexUncheckedUpdateManyWithoutWordInput>
  }

  export type WordCreateWithoutPageIndicesInput = {
    id?: string
    text: string
  }

  export type WordUncheckedCreateWithoutPageIndicesInput = {
    id?: string
    text: string
  }

  export type WordCreateOrConnectWithoutPageIndicesInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutPageIndicesInput, WordUncheckedCreateWithoutPageIndicesInput>
  }

  export type PageCreateWithoutWordIndicesInput = {
    id?: string
    url: string
    title?: string | null
    content?: string | null
    status?: $Enums.CrawlStatus
    isIndexed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    linksOut?: LinkCreateNestedManyWithoutSourceInput
    linksIn?: LinkCreateNestedManyWithoutTargetInput
  }

  export type PageUncheckedCreateWithoutWordIndicesInput = {
    id?: string
    url: string
    title?: string | null
    content?: string | null
    status?: $Enums.CrawlStatus
    isIndexed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    linksOut?: LinkUncheckedCreateNestedManyWithoutSourceInput
    linksIn?: LinkUncheckedCreateNestedManyWithoutTargetInput
  }

  export type PageCreateOrConnectWithoutWordIndicesInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutWordIndicesInput, PageUncheckedCreateWithoutWordIndicesInput>
  }

  export type WordUpsertWithoutPageIndicesInput = {
    update: XOR<WordUpdateWithoutPageIndicesInput, WordUncheckedUpdateWithoutPageIndicesInput>
    create: XOR<WordCreateWithoutPageIndicesInput, WordUncheckedCreateWithoutPageIndicesInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutPageIndicesInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutPageIndicesInput, WordUncheckedUpdateWithoutPageIndicesInput>
  }

  export type WordUpdateWithoutPageIndicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type WordUncheckedUpdateWithoutPageIndicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PageUpsertWithoutWordIndicesInput = {
    update: XOR<PageUpdateWithoutWordIndicesInput, PageUncheckedUpdateWithoutWordIndicesInput>
    create: XOR<PageCreateWithoutWordIndicesInput, PageUncheckedCreateWithoutWordIndicesInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutWordIndicesInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutWordIndicesInput, PageUncheckedUpdateWithoutWordIndicesInput>
  }

  export type PageUpdateWithoutWordIndicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCrawlStatusFieldUpdateOperationsInput | $Enums.CrawlStatus
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linksOut?: LinkUpdateManyWithoutSourceNestedInput
    linksIn?: LinkUpdateManyWithoutTargetNestedInput
  }

  export type PageUncheckedUpdateWithoutWordIndicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCrawlStatusFieldUpdateOperationsInput | $Enums.CrawlStatus
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linksOut?: LinkUncheckedUpdateManyWithoutSourceNestedInput
    linksIn?: LinkUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type LinkCreateManySourceInput = {
    id?: string
    targetId: string
    createdAt?: Date | string
  }

  export type LinkCreateManyTargetInput = {
    id?: string
    sourceId: string
    createdAt?: Date | string
  }

  export type PageIndexCreateManyPageInput = {
    id?: string
    wordId: string
    count: number
  }

  export type LinkUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: PageUpdateOneRequiredWithoutLinksInNestedInput
  }

  export type LinkUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: PageUpdateOneRequiredWithoutLinksOutNestedInput
  }

  export type LinkUncheckedUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageIndexUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    word?: WordUpdateOneRequiredWithoutPageIndicesNestedInput
  }

  export type PageIndexUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type PageIndexUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type PageIndexCreateManyWordInput = {
    id?: string
    pageId: string
    count: number
  }

  export type PageIndexUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    page?: PageUpdateOneRequiredWithoutWordIndicesNestedInput
  }

  export type PageIndexUncheckedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type PageIndexUncheckedUpdateManyWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}