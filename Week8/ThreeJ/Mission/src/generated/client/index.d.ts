
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Terms
 * 
 */
export type Terms = $Result.DefaultSelection<Prisma.$TermsPayload>
/**
 * Model PreferCategory
 * 
 */
export type PreferCategory = $Result.DefaultSelection<Prisma.$PreferCategoryPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model UserPrefer
 * 
 */
export type UserPrefer = $Result.DefaultSelection<Prisma.$UserPreferPayload>
/**
 * Model UserRegion
 * 
 */
export type UserRegion = $Result.DefaultSelection<Prisma.$UserRegionPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model StoreImage
 * 
 */
export type StoreImage = $Result.DefaultSelection<Prisma.$StoreImagePayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model UserMission
 * 
 */
export type UserMission = $Result.DefaultSelection<Prisma.$UserMissionPayload>
/**
 * Model StoreReview
 * 
 */
export type StoreReview = $Result.DefaultSelection<Prisma.$StoreReviewPayload>
/**
 * Model ReviewImage
 * 
 */
export type ReviewImage = $Result.DefaultSelection<Prisma.$ReviewImagePayload>
/**
 * Model ReviewAnswer
 * 
 */
export type ReviewAnswer = $Result.DefaultSelection<Prisma.$ReviewAnswerPayload>
/**
 * Model Inquiry
 * 
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>
/**
 * Model InquiryImage
 * 
 */
export type InquiryImage = $Result.DefaultSelection<Prisma.$InquiryImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  NONE: 'NONE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Provider: {
  KAKAO: 'KAKAO',
  GOOGLE: 'GOOGLE',
  NAVER: 'NAVER'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const Role: {
  USER: 'USER',
  OWNER: 'OWNER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DELETED: 'DELETED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const UserMissionStatus: {
  CHALLENGING: 'CHALLENGING',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type UserMissionStatus = (typeof UserMissionStatus)[keyof typeof UserMissionStatus]


export const InquiryType: {
  ACCOUNT: 'ACCOUNT',
  SERVICE_ERROR: 'SERVICE_ERROR',
  PROPOSAL: 'PROPOSAL'
};

export type InquiryType = (typeof InquiryType)[keyof typeof InquiryType]


export const InquiryStatus: {
  PENDING: 'PENDING',
  ANSWERED: 'ANSWERED'
};

export type InquiryStatus = (typeof InquiryStatus)[keyof typeof InquiryStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type UserMissionStatus = $Enums.UserMissionStatus

export const UserMissionStatus: typeof $Enums.UserMissionStatus

export type InquiryType = $Enums.InquiryType

export const InquiryType: typeof $Enums.InquiryType

export type InquiryStatus = $Enums.InquiryStatus

export const InquiryStatus: typeof $Enums.InquiryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.terms`: Exposes CRUD operations for the **Terms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Terms
    * const terms = await prisma.terms.findMany()
    * ```
    */
  get terms(): Prisma.TermsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preferCategory`: Exposes CRUD operations for the **PreferCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreferCategories
    * const preferCategories = await prisma.preferCategory.findMany()
    * ```
    */
  get preferCategory(): Prisma.PreferCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPrefer`: Exposes CRUD operations for the **UserPrefer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPrefers
    * const userPrefers = await prisma.userPrefer.findMany()
    * ```
    */
  get userPrefer(): Prisma.UserPreferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRegion`: Exposes CRUD operations for the **UserRegion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRegions
    * const userRegions = await prisma.userRegion.findMany()
    * ```
    */
  get userRegion(): Prisma.UserRegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeImage`: Exposes CRUD operations for the **StoreImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreImages
    * const storeImages = await prisma.storeImage.findMany()
    * ```
    */
  get storeImage(): Prisma.StoreImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMission`: Exposes CRUD operations for the **UserMission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMissions
    * const userMissions = await prisma.userMission.findMany()
    * ```
    */
  get userMission(): Prisma.UserMissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeReview`: Exposes CRUD operations for the **StoreReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreReviews
    * const storeReviews = await prisma.storeReview.findMany()
    * ```
    */
  get storeReview(): Prisma.StoreReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewImage`: Exposes CRUD operations for the **ReviewImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewImages
    * const reviewImages = await prisma.reviewImage.findMany()
    * ```
    */
  get reviewImage(): Prisma.ReviewImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewAnswer`: Exposes CRUD operations for the **ReviewAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewAnswers
    * const reviewAnswers = await prisma.reviewAnswer.findMany()
    * ```
    */
  get reviewAnswer(): Prisma.ReviewAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiryImage`: Exposes CRUD operations for the **InquiryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InquiryImages
    * const inquiryImages = await prisma.inquiryImage.findMany()
    * ```
    */
  get inquiryImage(): Prisma.InquiryImageDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    Terms: 'Terms',
    PreferCategory: 'PreferCategory',
    Region: 'Region',
    UserPrefer: 'UserPrefer',
    UserRegion: 'UserRegion',
    Store: 'Store',
    StoreImage: 'StoreImage',
    Mission: 'Mission',
    UserMission: 'UserMission',
    StoreReview: 'StoreReview',
    ReviewImage: 'ReviewImage',
    ReviewAnswer: 'ReviewAnswer',
    Inquiry: 'Inquiry',
    InquiryImage: 'InquiryImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "terms" | "preferCategory" | "region" | "userPrefer" | "userRegion" | "store" | "storeImage" | "mission" | "userMission" | "storeReview" | "reviewImage" | "reviewAnswer" | "inquiry" | "inquiryImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Terms: {
        payload: Prisma.$TermsPayload<ExtArgs>
        fields: Prisma.TermsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsPayload>
          }
          findFirst: {
            args: Prisma.TermsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsPayload>
          }
          findMany: {
            args: Prisma.TermsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsPayload>[]
          }
          create: {
            args: Prisma.TermsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsPayload>
          }
          createMany: {
            args: Prisma.TermsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TermsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsPayload>
          }
          update: {
            args: Prisma.TermsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsPayload>
          }
          deleteMany: {
            args: Prisma.TermsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TermsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsPayload>
          }
          aggregate: {
            args: Prisma.TermsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerms>
          }
          groupBy: {
            args: Prisma.TermsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermsCountArgs<ExtArgs>
            result: $Utils.Optional<TermsCountAggregateOutputType> | number
          }
        }
      }
      PreferCategory: {
        payload: Prisma.$PreferCategoryPayload<ExtArgs>
        fields: Prisma.PreferCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferCategoryPayload>
          }
          findFirst: {
            args: Prisma.PreferCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferCategoryPayload>
          }
          findMany: {
            args: Prisma.PreferCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferCategoryPayload>[]
          }
          create: {
            args: Prisma.PreferCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferCategoryPayload>
          }
          createMany: {
            args: Prisma.PreferCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PreferCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferCategoryPayload>
          }
          update: {
            args: Prisma.PreferCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PreferCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PreferCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferCategoryPayload>
          }
          aggregate: {
            args: Prisma.PreferCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreferCategory>
          }
          groupBy: {
            args: Prisma.PreferCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PreferCategoryCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      UserPrefer: {
        payload: Prisma.$UserPreferPayload<ExtArgs>
        fields: Prisma.UserPreferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferPayload>
          }
          findFirst: {
            args: Prisma.UserPreferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferPayload>
          }
          findMany: {
            args: Prisma.UserPreferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferPayload>[]
          }
          create: {
            args: Prisma.UserPreferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferPayload>
          }
          createMany: {
            args: Prisma.UserPreferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserPreferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferPayload>
          }
          update: {
            args: Prisma.UserPreferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPreferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferPayload>
          }
          aggregate: {
            args: Prisma.UserPreferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPrefer>
          }
          groupBy: {
            args: Prisma.UserPreferGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferCountAggregateOutputType> | number
          }
        }
      }
      UserRegion: {
        payload: Prisma.$UserRegionPayload<ExtArgs>
        fields: Prisma.UserRegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionPayload>
          }
          findFirst: {
            args: Prisma.UserRegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionPayload>
          }
          findMany: {
            args: Prisma.UserRegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionPayload>[]
          }
          create: {
            args: Prisma.UserRegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionPayload>
          }
          createMany: {
            args: Prisma.UserRegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionPayload>
          }
          update: {
            args: Prisma.UserRegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionPayload>
          }
          deleteMany: {
            args: Prisma.UserRegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionPayload>
          }
          aggregate: {
            args: Prisma.UserRegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRegion>
          }
          groupBy: {
            args: Prisma.UserRegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRegionCountArgs<ExtArgs>
            result: $Utils.Optional<UserRegionCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      StoreImage: {
        payload: Prisma.$StoreImagePayload<ExtArgs>
        fields: Prisma.StoreImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          findFirst: {
            args: Prisma.StoreImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          findMany: {
            args: Prisma.StoreImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>[]
          }
          create: {
            args: Prisma.StoreImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          createMany: {
            args: Prisma.StoreImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          update: {
            args: Prisma.StoreImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          deleteMany: {
            args: Prisma.StoreImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          aggregate: {
            args: Prisma.StoreImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreImage>
          }
          groupBy: {
            args: Prisma.StoreImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreImageCountArgs<ExtArgs>
            result: $Utils.Optional<StoreImageCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      UserMission: {
        payload: Prisma.$UserMissionPayload<ExtArgs>
        fields: Prisma.UserMissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          findFirst: {
            args: Prisma.UserMissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          findMany: {
            args: Prisma.UserMissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>[]
          }
          create: {
            args: Prisma.UserMissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          createMany: {
            args: Prisma.UserMissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserMissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          update: {
            args: Prisma.UserMissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          deleteMany: {
            args: Prisma.UserMissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserMissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          aggregate: {
            args: Prisma.UserMissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMission>
          }
          groupBy: {
            args: Prisma.UserMissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMissionCountArgs<ExtArgs>
            result: $Utils.Optional<UserMissionCountAggregateOutputType> | number
          }
        }
      }
      StoreReview: {
        payload: Prisma.$StoreReviewPayload<ExtArgs>
        fields: Prisma.StoreReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreReviewPayload>
          }
          findFirst: {
            args: Prisma.StoreReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreReviewPayload>
          }
          findMany: {
            args: Prisma.StoreReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreReviewPayload>[]
          }
          create: {
            args: Prisma.StoreReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreReviewPayload>
          }
          createMany: {
            args: Prisma.StoreReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreReviewPayload>
          }
          update: {
            args: Prisma.StoreReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreReviewPayload>
          }
          deleteMany: {
            args: Prisma.StoreReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreReviewPayload>
          }
          aggregate: {
            args: Prisma.StoreReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreReview>
          }
          groupBy: {
            args: Prisma.StoreReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreReviewCountArgs<ExtArgs>
            result: $Utils.Optional<StoreReviewCountAggregateOutputType> | number
          }
        }
      }
      ReviewImage: {
        payload: Prisma.$ReviewImagePayload<ExtArgs>
        fields: Prisma.ReviewImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          findFirst: {
            args: Prisma.ReviewImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          findMany: {
            args: Prisma.ReviewImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>[]
          }
          create: {
            args: Prisma.ReviewImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          createMany: {
            args: Prisma.ReviewImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          update: {
            args: Prisma.ReviewImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          deleteMany: {
            args: Prisma.ReviewImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          aggregate: {
            args: Prisma.ReviewImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewImage>
          }
          groupBy: {
            args: Prisma.ReviewImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewImageCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewImageCountAggregateOutputType> | number
          }
        }
      }
      ReviewAnswer: {
        payload: Prisma.$ReviewAnswerPayload<ExtArgs>
        fields: Prisma.ReviewAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewAnswerPayload>
          }
          findFirst: {
            args: Prisma.ReviewAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewAnswerPayload>
          }
          findMany: {
            args: Prisma.ReviewAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewAnswerPayload>[]
          }
          create: {
            args: Prisma.ReviewAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewAnswerPayload>
          }
          createMany: {
            args: Prisma.ReviewAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewAnswerPayload>
          }
          update: {
            args: Prisma.ReviewAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewAnswerPayload>
          }
          deleteMany: {
            args: Prisma.ReviewAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewAnswerPayload>
          }
          aggregate: {
            args: Prisma.ReviewAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewAnswer>
          }
          groupBy: {
            args: Prisma.ReviewAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewAnswerCountAggregateOutputType> | number
          }
        }
      }
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>
        fields: Prisma.InquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      InquiryImage: {
        payload: Prisma.$InquiryImagePayload<ExtArgs>
        fields: Prisma.InquiryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          findFirst: {
            args: Prisma.InquiryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          findMany: {
            args: Prisma.InquiryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>[]
          }
          create: {
            args: Prisma.InquiryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          createMany: {
            args: Prisma.InquiryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InquiryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          update: {
            args: Prisma.InquiryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          deleteMany: {
            args: Prisma.InquiryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InquiryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          aggregate: {
            args: Prisma.InquiryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiryImage>
          }
          groupBy: {
            args: Prisma.InquiryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryImageCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryImageCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    terms?: TermsOmit
    preferCategory?: PreferCategoryOmit
    region?: RegionOmit
    userPrefer?: UserPreferOmit
    userRegion?: UserRegionOmit
    store?: StoreOmit
    storeImage?: StoreImageOmit
    mission?: MissionOmit
    userMission?: UserMissionOmit
    storeReview?: StoreReviewOmit
    reviewImage?: ReviewImageOmit
    reviewAnswer?: ReviewAnswerOmit
    inquiry?: InquiryOmit
    inquiryImage?: InquiryImageOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Terms: number
    UserPrefer: number
    UserRegion: number
    Store: number
    UserMission: number
    StoreReview: number
    Inquiry: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Terms?: boolean | UserCountOutputTypeCountTermsArgs
    UserPrefer?: boolean | UserCountOutputTypeCountUserPreferArgs
    UserRegion?: boolean | UserCountOutputTypeCountUserRegionArgs
    Store?: boolean | UserCountOutputTypeCountStoreArgs
    UserMission?: boolean | UserCountOutputTypeCountUserMissionArgs
    StoreReview?: boolean | UserCountOutputTypeCountStoreReviewArgs
    Inquiry?: boolean | UserCountOutputTypeCountInquiryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTermsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPreferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRegionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserMissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoreReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
  }


  /**
   * Count Type PreferCategoryCountOutputType
   */

  export type PreferCategoryCountOutputType = {
    UserPrefer: number
  }

  export type PreferCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPrefer?: boolean | PreferCategoryCountOutputTypeCountUserPreferArgs
  }

  // Custom InputTypes
  /**
   * PreferCategoryCountOutputType without action
   */
  export type PreferCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategoryCountOutputType
     */
    select?: PreferCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PreferCategoryCountOutputType without action
   */
  export type PreferCategoryCountOutputTypeCountUserPreferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    UserRegion: number
    Mission: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRegion?: boolean | RegionCountOutputTypeCountUserRegionArgs
    Mission?: boolean | RegionCountOutputTypeCountMissionArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountUserRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRegionWhereInput
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountMissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    StoreImage: number
    Mission: number
    StoreReview: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StoreImage?: boolean | StoreCountOutputTypeCountStoreImageArgs
    Mission?: boolean | StoreCountOutputTypeCountMissionArgs
    StoreReview?: boolean | StoreCountOutputTypeCountStoreReviewArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountStoreImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreImageWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountMissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountStoreReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreReviewWhereInput
  }


  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    UserMission: number
  }

  export type MissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserMission?: boolean | MissionCountOutputTypeCountUserMissionArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountUserMissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMissionWhereInput
  }


  /**
   * Count Type StoreReviewCountOutputType
   */

  export type StoreReviewCountOutputType = {
    ReviewImage: number
    ReviewAnswer: number
  }

  export type StoreReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReviewImage?: boolean | StoreReviewCountOutputTypeCountReviewImageArgs
    ReviewAnswer?: boolean | StoreReviewCountOutputTypeCountReviewAnswerArgs
  }

  // Custom InputTypes
  /**
   * StoreReviewCountOutputType without action
   */
  export type StoreReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReviewCountOutputType
     */
    select?: StoreReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreReviewCountOutputType without action
   */
  export type StoreReviewCountOutputTypeCountReviewImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewImageWhereInput
  }

  /**
   * StoreReviewCountOutputType without action
   */
  export type StoreReviewCountOutputTypeCountReviewAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewAnswerWhereInput
  }


  /**
   * Count Type InquiryCountOutputType
   */

  export type InquiryCountOutputType = {
    InquiryImage: number
  }

  export type InquiryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InquiryImage?: boolean | InquiryCountOutputTypeCountInquiryImageArgs
  }

  // Custom InputTypes
  /**
   * InquiryCountOutputType without action
   */
  export type InquiryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryCountOutputType
     */
    select?: InquiryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InquiryCountOutputType without action
   */
  export type InquiryCountOutputTypeCountInquiryImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    points: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    gender: $Enums.Gender | null
    birth: Date | null
    address: string | null
    detailAddress: string | null
    nickname: string | null
    email: string | null
    phone: string | null
    isPhoneVerified: boolean | null
    points: bigint | null
    provider: $Enums.Provider | null
    providerId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
    inactiveDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    gender: $Enums.Gender | null
    birth: Date | null
    address: string | null
    detailAddress: string | null
    nickname: string | null
    email: string | null
    phone: string | null
    isPhoneVerified: boolean | null
    points: bigint | null
    provider: $Enums.Provider | null
    providerId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
    inactiveDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    birth: number
    address: number
    detailAddress: number
    nickname: number
    email: number
    phone: number
    isPhoneVerified: number
    points: number
    provider: number
    providerId: number
    role: number
    createdAt: number
    updatedAt: number
    status: number
    inactiveDate: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    points?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    detailAddress?: true
    nickname?: true
    email?: true
    phone?: true
    isPhoneVerified?: true
    points?: true
    provider?: true
    providerId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    inactiveDate?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    detailAddress?: true
    nickname?: true
    email?: true
    phone?: true
    isPhoneVerified?: true
    points?: true
    provider?: true
    providerId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    inactiveDate?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    detailAddress?: true
    nickname?: true
    email?: true
    phone?: true
    isPhoneVerified?: true
    points?: true
    provider?: true
    providerId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    inactiveDate?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    name: string
    gender: $Enums.Gender
    birth: Date
    address: string
    detailAddress: string | null
    nickname: string | null
    email: string
    phone: string
    isPhoneVerified: boolean
    points: bigint
    provider: $Enums.Provider
    providerId: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    status: $Enums.Status
    inactiveDate: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    birth?: boolean
    address?: boolean
    detailAddress?: boolean
    nickname?: boolean
    email?: boolean
    phone?: boolean
    isPhoneVerified?: boolean
    points?: boolean
    provider?: boolean
    providerId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    inactiveDate?: boolean
    Terms?: boolean | User$TermsArgs<ExtArgs>
    UserPrefer?: boolean | User$UserPreferArgs<ExtArgs>
    UserRegion?: boolean | User$UserRegionArgs<ExtArgs>
    Store?: boolean | User$StoreArgs<ExtArgs>
    UserMission?: boolean | User$UserMissionArgs<ExtArgs>
    StoreReview?: boolean | User$StoreReviewArgs<ExtArgs>
    Inquiry?: boolean | User$InquiryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    birth?: boolean
    address?: boolean
    detailAddress?: boolean
    nickname?: boolean
    email?: boolean
    phone?: boolean
    isPhoneVerified?: boolean
    points?: boolean
    provider?: boolean
    providerId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    inactiveDate?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "birth" | "address" | "detailAddress" | "nickname" | "email" | "phone" | "isPhoneVerified" | "points" | "provider" | "providerId" | "role" | "createdAt" | "updatedAt" | "status" | "inactiveDate", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Terms?: boolean | User$TermsArgs<ExtArgs>
    UserPrefer?: boolean | User$UserPreferArgs<ExtArgs>
    UserRegion?: boolean | User$UserRegionArgs<ExtArgs>
    Store?: boolean | User$StoreArgs<ExtArgs>
    UserMission?: boolean | User$UserMissionArgs<ExtArgs>
    StoreReview?: boolean | User$StoreReviewArgs<ExtArgs>
    Inquiry?: boolean | User$InquiryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Terms: Prisma.$TermsPayload<ExtArgs>[]
      UserPrefer: Prisma.$UserPreferPayload<ExtArgs>[]
      UserRegion: Prisma.$UserRegionPayload<ExtArgs>[]
      Store: Prisma.$StorePayload<ExtArgs>[]
      UserMission: Prisma.$UserMissionPayload<ExtArgs>[]
      StoreReview: Prisma.$StoreReviewPayload<ExtArgs>[]
      Inquiry: Prisma.$InquiryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      gender: $Enums.Gender
      birth: Date
      address: string
      detailAddress: string | null
      nickname: string | null
      email: string
      phone: string
      isPhoneVerified: boolean
      points: bigint
      provider: $Enums.Provider
      providerId: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      status: $Enums.Status
      inactiveDate: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Terms<T extends User$TermsArgs<ExtArgs> = {}>(args?: Subset<T, User$TermsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserPrefer<T extends User$UserPreferArgs<ExtArgs> = {}>(args?: Subset<T, User$UserPreferArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserRegion<T extends User$UserRegionArgs<ExtArgs> = {}>(args?: Subset<T, User$UserRegionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Store<T extends User$StoreArgs<ExtArgs> = {}>(args?: Subset<T, User$StoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserMission<T extends User$UserMissionArgs<ExtArgs> = {}>(args?: Subset<T, User$UserMissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StoreReview<T extends User$StoreReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$StoreReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Inquiry<T extends User$InquiryArgs<ExtArgs> = {}>(args?: Subset<T, User$InquiryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly name: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly birth: FieldRef<"User", 'DateTime'>
    readonly address: FieldRef<"User", 'String'>
    readonly detailAddress: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly isPhoneVerified: FieldRef<"User", 'Boolean'>
    readonly points: FieldRef<"User", 'BigInt'>
    readonly provider: FieldRef<"User", 'Provider'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'Status'>
    readonly inactiveDate: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Terms
   */
  export type User$TermsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
    where?: TermsWhereInput
    orderBy?: TermsOrderByWithRelationInput | TermsOrderByWithRelationInput[]
    cursor?: TermsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TermsScalarFieldEnum | TermsScalarFieldEnum[]
  }

  /**
   * User.UserPrefer
   */
  export type User$UserPreferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    where?: UserPreferWhereInput
    orderBy?: UserPreferOrderByWithRelationInput | UserPreferOrderByWithRelationInput[]
    cursor?: UserPreferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPreferScalarFieldEnum | UserPreferScalarFieldEnum[]
  }

  /**
   * User.UserRegion
   */
  export type User$UserRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    where?: UserRegionWhereInput
    orderBy?: UserRegionOrderByWithRelationInput | UserRegionOrderByWithRelationInput[]
    cursor?: UserRegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRegionScalarFieldEnum | UserRegionScalarFieldEnum[]
  }

  /**
   * User.Store
   */
  export type User$StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * User.UserMission
   */
  export type User$UserMissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    where?: UserMissionWhereInput
    orderBy?: UserMissionOrderByWithRelationInput | UserMissionOrderByWithRelationInput[]
    cursor?: UserMissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMissionScalarFieldEnum | UserMissionScalarFieldEnum[]
  }

  /**
   * User.StoreReview
   */
  export type User$StoreReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    where?: StoreReviewWhereInput
    orderBy?: StoreReviewOrderByWithRelationInput | StoreReviewOrderByWithRelationInput[]
    cursor?: StoreReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreReviewScalarFieldEnum | StoreReviewScalarFieldEnum[]
  }

  /**
   * User.Inquiry
   */
  export type User$InquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    cursor?: InquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Terms
   */

  export type AggregateTerms = {
    _count: TermsCountAggregateOutputType | null
    _avg: TermsAvgAggregateOutputType | null
    _sum: TermsSumAggregateOutputType | null
    _min: TermsMinAggregateOutputType | null
    _max: TermsMaxAggregateOutputType | null
  }

  export type TermsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TermsSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type TermsMinAggregateOutputType = {
    id: bigint | null
    isOverFourteen: boolean | null
    agreedToTermsOfService: boolean | null
    agreedToPrivacyPolicy: boolean | null
    agreedToLocationServices: boolean | null
    agreedToMarketingEmails: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: bigint | null
  }

  export type TermsMaxAggregateOutputType = {
    id: bigint | null
    isOverFourteen: boolean | null
    agreedToTermsOfService: boolean | null
    agreedToPrivacyPolicy: boolean | null
    agreedToLocationServices: boolean | null
    agreedToMarketingEmails: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: bigint | null
  }

  export type TermsCountAggregateOutputType = {
    id: number
    isOverFourteen: number
    agreedToTermsOfService: number
    agreedToPrivacyPolicy: number
    agreedToLocationServices: number
    agreedToMarketingEmails: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type TermsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TermsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TermsMinAggregateInputType = {
    id?: true
    isOverFourteen?: true
    agreedToTermsOfService?: true
    agreedToPrivacyPolicy?: true
    agreedToLocationServices?: true
    agreedToMarketingEmails?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TermsMaxAggregateInputType = {
    id?: true
    isOverFourteen?: true
    agreedToTermsOfService?: true
    agreedToPrivacyPolicy?: true
    agreedToLocationServices?: true
    agreedToMarketingEmails?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TermsCountAggregateInputType = {
    id?: true
    isOverFourteen?: true
    agreedToTermsOfService?: true
    agreedToPrivacyPolicy?: true
    agreedToLocationServices?: true
    agreedToMarketingEmails?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type TermsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terms to aggregate.
     */
    where?: TermsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermsOrderByWithRelationInput | TermsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Terms
    **/
    _count?: true | TermsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TermsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TermsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermsMaxAggregateInputType
  }

  export type GetTermsAggregateType<T extends TermsAggregateArgs> = {
        [P in keyof T & keyof AggregateTerms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerms[P]>
      : GetScalarType<T[P], AggregateTerms[P]>
  }




  export type TermsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermsWhereInput
    orderBy?: TermsOrderByWithAggregationInput | TermsOrderByWithAggregationInput[]
    by: TermsScalarFieldEnum[] | TermsScalarFieldEnum
    having?: TermsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermsCountAggregateInputType | true
    _avg?: TermsAvgAggregateInputType
    _sum?: TermsSumAggregateInputType
    _min?: TermsMinAggregateInputType
    _max?: TermsMaxAggregateInputType
  }

  export type TermsGroupByOutputType = {
    id: bigint
    isOverFourteen: boolean
    agreedToTermsOfService: boolean
    agreedToPrivacyPolicy: boolean
    agreedToLocationServices: boolean
    agreedToMarketingEmails: boolean
    createdAt: Date
    updatedAt: Date
    userId: bigint
    _count: TermsCountAggregateOutputType | null
    _avg: TermsAvgAggregateOutputType | null
    _sum: TermsSumAggregateOutputType | null
    _min: TermsMinAggregateOutputType | null
    _max: TermsMaxAggregateOutputType | null
  }

  type GetTermsGroupByPayload<T extends TermsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermsGroupByOutputType[P]>
            : GetScalarType<T[P], TermsGroupByOutputType[P]>
        }
      >
    >


  export type TermsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isOverFourteen?: boolean
    agreedToTermsOfService?: boolean
    agreedToPrivacyPolicy?: boolean
    agreedToLocationServices?: boolean
    agreedToMarketingEmails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["terms"]>



  export type TermsSelectScalar = {
    id?: boolean
    isOverFourteen?: boolean
    agreedToTermsOfService?: boolean
    agreedToPrivacyPolicy?: boolean
    agreedToLocationServices?: boolean
    agreedToMarketingEmails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type TermsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isOverFourteen" | "agreedToTermsOfService" | "agreedToPrivacyPolicy" | "agreedToLocationServices" | "agreedToMarketingEmails" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["terms"]>
  export type TermsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TermsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Terms"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      isOverFourteen: boolean
      agreedToTermsOfService: boolean
      agreedToPrivacyPolicy: boolean
      agreedToLocationServices: boolean
      agreedToMarketingEmails: boolean
      createdAt: Date
      updatedAt: Date
      userId: bigint
    }, ExtArgs["result"]["terms"]>
    composites: {}
  }

  type TermsGetPayload<S extends boolean | null | undefined | TermsDefaultArgs> = $Result.GetResult<Prisma.$TermsPayload, S>

  type TermsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TermsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TermsCountAggregateInputType | true
    }

  export interface TermsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Terms'], meta: { name: 'Terms' } }
    /**
     * Find zero or one Terms that matches the filter.
     * @param {TermsFindUniqueArgs} args - Arguments to find a Terms
     * @example
     * // Get one Terms
     * const terms = await prisma.terms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermsFindUniqueArgs>(args: SelectSubset<T, TermsFindUniqueArgs<ExtArgs>>): Prisma__TermsClient<$Result.GetResult<Prisma.$TermsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Terms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TermsFindUniqueOrThrowArgs} args - Arguments to find a Terms
     * @example
     * // Get one Terms
     * const terms = await prisma.terms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermsFindUniqueOrThrowArgs>(args: SelectSubset<T, TermsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermsClient<$Result.GetResult<Prisma.$TermsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Terms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsFindFirstArgs} args - Arguments to find a Terms
     * @example
     * // Get one Terms
     * const terms = await prisma.terms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermsFindFirstArgs>(args?: SelectSubset<T, TermsFindFirstArgs<ExtArgs>>): Prisma__TermsClient<$Result.GetResult<Prisma.$TermsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Terms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsFindFirstOrThrowArgs} args - Arguments to find a Terms
     * @example
     * // Get one Terms
     * const terms = await prisma.terms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermsFindFirstOrThrowArgs>(args?: SelectSubset<T, TermsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermsClient<$Result.GetResult<Prisma.$TermsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Terms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Terms
     * const terms = await prisma.terms.findMany()
     * 
     * // Get first 10 Terms
     * const terms = await prisma.terms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termsWithIdOnly = await prisma.terms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermsFindManyArgs>(args?: SelectSubset<T, TermsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Terms.
     * @param {TermsCreateArgs} args - Arguments to create a Terms.
     * @example
     * // Create one Terms
     * const Terms = await prisma.terms.create({
     *   data: {
     *     // ... data to create a Terms
     *   }
     * })
     * 
     */
    create<T extends TermsCreateArgs>(args: SelectSubset<T, TermsCreateArgs<ExtArgs>>): Prisma__TermsClient<$Result.GetResult<Prisma.$TermsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Terms.
     * @param {TermsCreateManyArgs} args - Arguments to create many Terms.
     * @example
     * // Create many Terms
     * const terms = await prisma.terms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermsCreateManyArgs>(args?: SelectSubset<T, TermsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Terms.
     * @param {TermsDeleteArgs} args - Arguments to delete one Terms.
     * @example
     * // Delete one Terms
     * const Terms = await prisma.terms.delete({
     *   where: {
     *     // ... filter to delete one Terms
     *   }
     * })
     * 
     */
    delete<T extends TermsDeleteArgs>(args: SelectSubset<T, TermsDeleteArgs<ExtArgs>>): Prisma__TermsClient<$Result.GetResult<Prisma.$TermsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Terms.
     * @param {TermsUpdateArgs} args - Arguments to update one Terms.
     * @example
     * // Update one Terms
     * const terms = await prisma.terms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermsUpdateArgs>(args: SelectSubset<T, TermsUpdateArgs<ExtArgs>>): Prisma__TermsClient<$Result.GetResult<Prisma.$TermsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Terms.
     * @param {TermsDeleteManyArgs} args - Arguments to filter Terms to delete.
     * @example
     * // Delete a few Terms
     * const { count } = await prisma.terms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermsDeleteManyArgs>(args?: SelectSubset<T, TermsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Terms
     * const terms = await prisma.terms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermsUpdateManyArgs>(args: SelectSubset<T, TermsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Terms.
     * @param {TermsUpsertArgs} args - Arguments to update or create a Terms.
     * @example
     * // Update or create a Terms
     * const terms = await prisma.terms.upsert({
     *   create: {
     *     // ... data to create a Terms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Terms we want to update
     *   }
     * })
     */
    upsert<T extends TermsUpsertArgs>(args: SelectSubset<T, TermsUpsertArgs<ExtArgs>>): Prisma__TermsClient<$Result.GetResult<Prisma.$TermsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsCountArgs} args - Arguments to filter Terms to count.
     * @example
     * // Count the number of Terms
     * const count = await prisma.terms.count({
     *   where: {
     *     // ... the filter for the Terms we want to count
     *   }
     * })
    **/
    count<T extends TermsCountArgs>(
      args?: Subset<T, TermsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TermsAggregateArgs>(args: Subset<T, TermsAggregateArgs>): Prisma.PrismaPromise<GetTermsAggregateType<T>>

    /**
     * Group by Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsGroupByArgs} args - Group by arguments.
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
      T extends TermsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermsGroupByArgs['orderBy'] }
        : { orderBy?: TermsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TermsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Terms model
   */
  readonly fields: TermsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Terms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Terms model
   */
  interface TermsFieldRefs {
    readonly id: FieldRef<"Terms", 'BigInt'>
    readonly isOverFourteen: FieldRef<"Terms", 'Boolean'>
    readonly agreedToTermsOfService: FieldRef<"Terms", 'Boolean'>
    readonly agreedToPrivacyPolicy: FieldRef<"Terms", 'Boolean'>
    readonly agreedToLocationServices: FieldRef<"Terms", 'Boolean'>
    readonly agreedToMarketingEmails: FieldRef<"Terms", 'Boolean'>
    readonly createdAt: FieldRef<"Terms", 'DateTime'>
    readonly updatedAt: FieldRef<"Terms", 'DateTime'>
    readonly userId: FieldRef<"Terms", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Terms findUnique
   */
  export type TermsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
    /**
     * Filter, which Terms to fetch.
     */
    where: TermsWhereUniqueInput
  }

  /**
   * Terms findUniqueOrThrow
   */
  export type TermsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
    /**
     * Filter, which Terms to fetch.
     */
    where: TermsWhereUniqueInput
  }

  /**
   * Terms findFirst
   */
  export type TermsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
    /**
     * Filter, which Terms to fetch.
     */
    where?: TermsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermsOrderByWithRelationInput | TermsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terms.
     */
    cursor?: TermsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terms.
     */
    distinct?: TermsScalarFieldEnum | TermsScalarFieldEnum[]
  }

  /**
   * Terms findFirstOrThrow
   */
  export type TermsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
    /**
     * Filter, which Terms to fetch.
     */
    where?: TermsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermsOrderByWithRelationInput | TermsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terms.
     */
    cursor?: TermsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terms.
     */
    distinct?: TermsScalarFieldEnum | TermsScalarFieldEnum[]
  }

  /**
   * Terms findMany
   */
  export type TermsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
    /**
     * Filter, which Terms to fetch.
     */
    where?: TermsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermsOrderByWithRelationInput | TermsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Terms.
     */
    cursor?: TermsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    distinct?: TermsScalarFieldEnum | TermsScalarFieldEnum[]
  }

  /**
   * Terms create
   */
  export type TermsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
    /**
     * The data needed to create a Terms.
     */
    data: XOR<TermsCreateInput, TermsUncheckedCreateInput>
  }

  /**
   * Terms createMany
   */
  export type TermsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Terms.
     */
    data: TermsCreateManyInput | TermsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Terms update
   */
  export type TermsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
    /**
     * The data needed to update a Terms.
     */
    data: XOR<TermsUpdateInput, TermsUncheckedUpdateInput>
    /**
     * Choose, which Terms to update.
     */
    where: TermsWhereUniqueInput
  }

  /**
   * Terms updateMany
   */
  export type TermsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Terms.
     */
    data: XOR<TermsUpdateManyMutationInput, TermsUncheckedUpdateManyInput>
    /**
     * Filter which Terms to update
     */
    where?: TermsWhereInput
    /**
     * Limit how many Terms to update.
     */
    limit?: number
  }

  /**
   * Terms upsert
   */
  export type TermsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
    /**
     * The filter to search for the Terms to update in case it exists.
     */
    where: TermsWhereUniqueInput
    /**
     * In case the Terms found by the `where` argument doesn't exist, create a new Terms with this data.
     */
    create: XOR<TermsCreateInput, TermsUncheckedCreateInput>
    /**
     * In case the Terms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermsUpdateInput, TermsUncheckedUpdateInput>
  }

  /**
   * Terms delete
   */
  export type TermsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
    /**
     * Filter which Terms to delete.
     */
    where: TermsWhereUniqueInput
  }

  /**
   * Terms deleteMany
   */
  export type TermsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terms to delete
     */
    where?: TermsWhereInput
    /**
     * Limit how many Terms to delete.
     */
    limit?: number
  }

  /**
   * Terms without action
   */
  export type TermsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terms
     */
    select?: TermsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terms
     */
    omit?: TermsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsInclude<ExtArgs> | null
  }


  /**
   * Model PreferCategory
   */

  export type AggregatePreferCategory = {
    _count: PreferCategoryCountAggregateOutputType | null
    _avg: PreferCategoryAvgAggregateOutputType | null
    _sum: PreferCategorySumAggregateOutputType | null
    _min: PreferCategoryMinAggregateOutputType | null
    _max: PreferCategoryMaxAggregateOutputType | null
  }

  export type PreferCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type PreferCategorySumAggregateOutputType = {
    id: bigint | null
  }

  export type PreferCategoryMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type PreferCategoryMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type PreferCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PreferCategoryAvgAggregateInputType = {
    id?: true
  }

  export type PreferCategorySumAggregateInputType = {
    id?: true
  }

  export type PreferCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PreferCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PreferCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PreferCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreferCategory to aggregate.
     */
    where?: PreferCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferCategories to fetch.
     */
    orderBy?: PreferCategoryOrderByWithRelationInput | PreferCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PreferCategories
    **/
    _count?: true | PreferCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreferCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreferCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferCategoryMaxAggregateInputType
  }

  export type GetPreferCategoryAggregateType<T extends PreferCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePreferCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreferCategory[P]>
      : GetScalarType<T[P], AggregatePreferCategory[P]>
  }




  export type PreferCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferCategoryWhereInput
    orderBy?: PreferCategoryOrderByWithAggregationInput | PreferCategoryOrderByWithAggregationInput[]
    by: PreferCategoryScalarFieldEnum[] | PreferCategoryScalarFieldEnum
    having?: PreferCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferCategoryCountAggregateInputType | true
    _avg?: PreferCategoryAvgAggregateInputType
    _sum?: PreferCategorySumAggregateInputType
    _min?: PreferCategoryMinAggregateInputType
    _max?: PreferCategoryMaxAggregateInputType
  }

  export type PreferCategoryGroupByOutputType = {
    id: bigint
    name: string
    _count: PreferCategoryCountAggregateOutputType | null
    _avg: PreferCategoryAvgAggregateOutputType | null
    _sum: PreferCategorySumAggregateOutputType | null
    _min: PreferCategoryMinAggregateOutputType | null
    _max: PreferCategoryMaxAggregateOutputType | null
  }

  type GetPreferCategoryGroupByPayload<T extends PreferCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PreferCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PreferCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    UserPrefer?: boolean | PreferCategory$UserPreferArgs<ExtArgs>
    _count?: boolean | PreferCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferCategory"]>



  export type PreferCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PreferCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["preferCategory"]>
  export type PreferCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPrefer?: boolean | PreferCategory$UserPreferArgs<ExtArgs>
    _count?: boolean | PreferCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PreferCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PreferCategory"
    objects: {
      UserPrefer: Prisma.$UserPreferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["preferCategory"]>
    composites: {}
  }

  type PreferCategoryGetPayload<S extends boolean | null | undefined | PreferCategoryDefaultArgs> = $Result.GetResult<Prisma.$PreferCategoryPayload, S>

  type PreferCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferCategoryCountAggregateInputType | true
    }

  export interface PreferCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PreferCategory'], meta: { name: 'PreferCategory' } }
    /**
     * Find zero or one PreferCategory that matches the filter.
     * @param {PreferCategoryFindUniqueArgs} args - Arguments to find a PreferCategory
     * @example
     * // Get one PreferCategory
     * const preferCategory = await prisma.preferCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferCategoryFindUniqueArgs>(args: SelectSubset<T, PreferCategoryFindUniqueArgs<ExtArgs>>): Prisma__PreferCategoryClient<$Result.GetResult<Prisma.$PreferCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PreferCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferCategoryFindUniqueOrThrowArgs} args - Arguments to find a PreferCategory
     * @example
     * // Get one PreferCategory
     * const preferCategory = await prisma.preferCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferCategoryClient<$Result.GetResult<Prisma.$PreferCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreferCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferCategoryFindFirstArgs} args - Arguments to find a PreferCategory
     * @example
     * // Get one PreferCategory
     * const preferCategory = await prisma.preferCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferCategoryFindFirstArgs>(args?: SelectSubset<T, PreferCategoryFindFirstArgs<ExtArgs>>): Prisma__PreferCategoryClient<$Result.GetResult<Prisma.$PreferCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreferCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferCategoryFindFirstOrThrowArgs} args - Arguments to find a PreferCategory
     * @example
     * // Get one PreferCategory
     * const preferCategory = await prisma.preferCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferCategoryClient<$Result.GetResult<Prisma.$PreferCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PreferCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreferCategories
     * const preferCategories = await prisma.preferCategory.findMany()
     * 
     * // Get first 10 PreferCategories
     * const preferCategories = await prisma.preferCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferCategoryWithIdOnly = await prisma.preferCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferCategoryFindManyArgs>(args?: SelectSubset<T, PreferCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PreferCategory.
     * @param {PreferCategoryCreateArgs} args - Arguments to create a PreferCategory.
     * @example
     * // Create one PreferCategory
     * const PreferCategory = await prisma.preferCategory.create({
     *   data: {
     *     // ... data to create a PreferCategory
     *   }
     * })
     * 
     */
    create<T extends PreferCategoryCreateArgs>(args: SelectSubset<T, PreferCategoryCreateArgs<ExtArgs>>): Prisma__PreferCategoryClient<$Result.GetResult<Prisma.$PreferCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PreferCategories.
     * @param {PreferCategoryCreateManyArgs} args - Arguments to create many PreferCategories.
     * @example
     * // Create many PreferCategories
     * const preferCategory = await prisma.preferCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferCategoryCreateManyArgs>(args?: SelectSubset<T, PreferCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PreferCategory.
     * @param {PreferCategoryDeleteArgs} args - Arguments to delete one PreferCategory.
     * @example
     * // Delete one PreferCategory
     * const PreferCategory = await prisma.preferCategory.delete({
     *   where: {
     *     // ... filter to delete one PreferCategory
     *   }
     * })
     * 
     */
    delete<T extends PreferCategoryDeleteArgs>(args: SelectSubset<T, PreferCategoryDeleteArgs<ExtArgs>>): Prisma__PreferCategoryClient<$Result.GetResult<Prisma.$PreferCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PreferCategory.
     * @param {PreferCategoryUpdateArgs} args - Arguments to update one PreferCategory.
     * @example
     * // Update one PreferCategory
     * const preferCategory = await prisma.preferCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferCategoryUpdateArgs>(args: SelectSubset<T, PreferCategoryUpdateArgs<ExtArgs>>): Prisma__PreferCategoryClient<$Result.GetResult<Prisma.$PreferCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PreferCategories.
     * @param {PreferCategoryDeleteManyArgs} args - Arguments to filter PreferCategories to delete.
     * @example
     * // Delete a few PreferCategories
     * const { count } = await prisma.preferCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferCategoryDeleteManyArgs>(args?: SelectSubset<T, PreferCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreferCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreferCategories
     * const preferCategory = await prisma.preferCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferCategoryUpdateManyArgs>(args: SelectSubset<T, PreferCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PreferCategory.
     * @param {PreferCategoryUpsertArgs} args - Arguments to update or create a PreferCategory.
     * @example
     * // Update or create a PreferCategory
     * const preferCategory = await prisma.preferCategory.upsert({
     *   create: {
     *     // ... data to create a PreferCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreferCategory we want to update
     *   }
     * })
     */
    upsert<T extends PreferCategoryUpsertArgs>(args: SelectSubset<T, PreferCategoryUpsertArgs<ExtArgs>>): Prisma__PreferCategoryClient<$Result.GetResult<Prisma.$PreferCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PreferCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferCategoryCountArgs} args - Arguments to filter PreferCategories to count.
     * @example
     * // Count the number of PreferCategories
     * const count = await prisma.preferCategory.count({
     *   where: {
     *     // ... the filter for the PreferCategories we want to count
     *   }
     * })
    **/
    count<T extends PreferCategoryCountArgs>(
      args?: Subset<T, PreferCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreferCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreferCategoryAggregateArgs>(args: Subset<T, PreferCategoryAggregateArgs>): Prisma.PrismaPromise<GetPreferCategoryAggregateType<T>>

    /**
     * Group by PreferCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferCategoryGroupByArgs} args - Group by arguments.
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
      T extends PreferCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PreferCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PreferCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PreferCategory model
   */
  readonly fields: PreferCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PreferCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserPrefer<T extends PreferCategory$UserPreferArgs<ExtArgs> = {}>(args?: Subset<T, PreferCategory$UserPreferArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PreferCategory model
   */
  interface PreferCategoryFieldRefs {
    readonly id: FieldRef<"PreferCategory", 'BigInt'>
    readonly name: FieldRef<"PreferCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PreferCategory findUnique
   */
  export type PreferCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategory
     */
    select?: PreferCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferCategory
     */
    omit?: PreferCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PreferCategory to fetch.
     */
    where: PreferCategoryWhereUniqueInput
  }

  /**
   * PreferCategory findUniqueOrThrow
   */
  export type PreferCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategory
     */
    select?: PreferCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferCategory
     */
    omit?: PreferCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PreferCategory to fetch.
     */
    where: PreferCategoryWhereUniqueInput
  }

  /**
   * PreferCategory findFirst
   */
  export type PreferCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategory
     */
    select?: PreferCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferCategory
     */
    omit?: PreferCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PreferCategory to fetch.
     */
    where?: PreferCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferCategories to fetch.
     */
    orderBy?: PreferCategoryOrderByWithRelationInput | PreferCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreferCategories.
     */
    cursor?: PreferCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferCategories.
     */
    distinct?: PreferCategoryScalarFieldEnum | PreferCategoryScalarFieldEnum[]
  }

  /**
   * PreferCategory findFirstOrThrow
   */
  export type PreferCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategory
     */
    select?: PreferCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferCategory
     */
    omit?: PreferCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PreferCategory to fetch.
     */
    where?: PreferCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferCategories to fetch.
     */
    orderBy?: PreferCategoryOrderByWithRelationInput | PreferCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreferCategories.
     */
    cursor?: PreferCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferCategories.
     */
    distinct?: PreferCategoryScalarFieldEnum | PreferCategoryScalarFieldEnum[]
  }

  /**
   * PreferCategory findMany
   */
  export type PreferCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategory
     */
    select?: PreferCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferCategory
     */
    omit?: PreferCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PreferCategories to fetch.
     */
    where?: PreferCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferCategories to fetch.
     */
    orderBy?: PreferCategoryOrderByWithRelationInput | PreferCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PreferCategories.
     */
    cursor?: PreferCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferCategories.
     */
    skip?: number
    distinct?: PreferCategoryScalarFieldEnum | PreferCategoryScalarFieldEnum[]
  }

  /**
   * PreferCategory create
   */
  export type PreferCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategory
     */
    select?: PreferCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferCategory
     */
    omit?: PreferCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PreferCategory.
     */
    data: XOR<PreferCategoryCreateInput, PreferCategoryUncheckedCreateInput>
  }

  /**
   * PreferCategory createMany
   */
  export type PreferCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreferCategories.
     */
    data: PreferCategoryCreateManyInput | PreferCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PreferCategory update
   */
  export type PreferCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategory
     */
    select?: PreferCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferCategory
     */
    omit?: PreferCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PreferCategory.
     */
    data: XOR<PreferCategoryUpdateInput, PreferCategoryUncheckedUpdateInput>
    /**
     * Choose, which PreferCategory to update.
     */
    where: PreferCategoryWhereUniqueInput
  }

  /**
   * PreferCategory updateMany
   */
  export type PreferCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PreferCategories.
     */
    data: XOR<PreferCategoryUpdateManyMutationInput, PreferCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PreferCategories to update
     */
    where?: PreferCategoryWhereInput
    /**
     * Limit how many PreferCategories to update.
     */
    limit?: number
  }

  /**
   * PreferCategory upsert
   */
  export type PreferCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategory
     */
    select?: PreferCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferCategory
     */
    omit?: PreferCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PreferCategory to update in case it exists.
     */
    where: PreferCategoryWhereUniqueInput
    /**
     * In case the PreferCategory found by the `where` argument doesn't exist, create a new PreferCategory with this data.
     */
    create: XOR<PreferCategoryCreateInput, PreferCategoryUncheckedCreateInput>
    /**
     * In case the PreferCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferCategoryUpdateInput, PreferCategoryUncheckedUpdateInput>
  }

  /**
   * PreferCategory delete
   */
  export type PreferCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategory
     */
    select?: PreferCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferCategory
     */
    omit?: PreferCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferCategoryInclude<ExtArgs> | null
    /**
     * Filter which PreferCategory to delete.
     */
    where: PreferCategoryWhereUniqueInput
  }

  /**
   * PreferCategory deleteMany
   */
  export type PreferCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreferCategories to delete
     */
    where?: PreferCategoryWhereInput
    /**
     * Limit how many PreferCategories to delete.
     */
    limit?: number
  }

  /**
   * PreferCategory.UserPrefer
   */
  export type PreferCategory$UserPreferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    where?: UserPreferWhereInput
    orderBy?: UserPreferOrderByWithRelationInput | UserPreferOrderByWithRelationInput[]
    cursor?: UserPreferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPreferScalarFieldEnum | UserPreferScalarFieldEnum[]
  }

  /**
   * PreferCategory without action
   */
  export type PreferCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferCategory
     */
    select?: PreferCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferCategory
     */
    omit?: PreferCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionSumAggregateOutputType = {
    id: bigint | null
  }

  export type RegionMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: bigint
    name: string
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    UserRegion?: boolean | Region$UserRegionArgs<ExtArgs>
    Mission?: boolean | Region$MissionArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>



  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRegion?: boolean | Region$UserRegionArgs<ExtArgs>
    Mission?: boolean | Region$MissionArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      UserRegion: Prisma.$UserRegionPayload<ExtArgs>[]
      Mission: Prisma.$MissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
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
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserRegion<T extends Region$UserRegionArgs<ExtArgs> = {}>(args?: Subset<T, Region$UserRegionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Mission<T extends Region$MissionArgs<ExtArgs> = {}>(args?: Subset<T, Region$MissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'BigInt'>
    readonly name: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.UserRegion
   */
  export type Region$UserRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    where?: UserRegionWhereInput
    orderBy?: UserRegionOrderByWithRelationInput | UserRegionOrderByWithRelationInput[]
    cursor?: UserRegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRegionScalarFieldEnum | UserRegionScalarFieldEnum[]
  }

  /**
   * Region.Mission
   */
  export type Region$MissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model UserPrefer
   */

  export type AggregateUserPrefer = {
    _count: UserPreferCountAggregateOutputType | null
    _avg: UserPreferAvgAggregateOutputType | null
    _sum: UserPreferSumAggregateOutputType | null
    _min: UserPreferMinAggregateOutputType | null
    _max: UserPreferMaxAggregateOutputType | null
  }

  export type UserPreferAvgAggregateOutputType = {
    userId: number | null
    preferCategoryId: number | null
  }

  export type UserPreferSumAggregateOutputType = {
    userId: bigint | null
    preferCategoryId: bigint | null
  }

  export type UserPreferMinAggregateOutputType = {
    userId: bigint | null
    preferCategoryId: bigint | null
  }

  export type UserPreferMaxAggregateOutputType = {
    userId: bigint | null
    preferCategoryId: bigint | null
  }

  export type UserPreferCountAggregateOutputType = {
    userId: number
    preferCategoryId: number
    _all: number
  }


  export type UserPreferAvgAggregateInputType = {
    userId?: true
    preferCategoryId?: true
  }

  export type UserPreferSumAggregateInputType = {
    userId?: true
    preferCategoryId?: true
  }

  export type UserPreferMinAggregateInputType = {
    userId?: true
    preferCategoryId?: true
  }

  export type UserPreferMaxAggregateInputType = {
    userId?: true
    preferCategoryId?: true
  }

  export type UserPreferCountAggregateInputType = {
    userId?: true
    preferCategoryId?: true
    _all?: true
  }

  export type UserPreferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPrefer to aggregate.
     */
    where?: UserPreferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrefers to fetch.
     */
    orderBy?: UserPreferOrderByWithRelationInput | UserPreferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrefers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPrefers
    **/
    _count?: true | UserPreferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferMaxAggregateInputType
  }

  export type GetUserPreferAggregateType<T extends UserPreferAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPrefer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPrefer[P]>
      : GetScalarType<T[P], AggregateUserPrefer[P]>
  }




  export type UserPreferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferWhereInput
    orderBy?: UserPreferOrderByWithAggregationInput | UserPreferOrderByWithAggregationInput[]
    by: UserPreferScalarFieldEnum[] | UserPreferScalarFieldEnum
    having?: UserPreferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferCountAggregateInputType | true
    _avg?: UserPreferAvgAggregateInputType
    _sum?: UserPreferSumAggregateInputType
    _min?: UserPreferMinAggregateInputType
    _max?: UserPreferMaxAggregateInputType
  }

  export type UserPreferGroupByOutputType = {
    userId: bigint
    preferCategoryId: bigint
    _count: UserPreferCountAggregateOutputType | null
    _avg: UserPreferAvgAggregateOutputType | null
    _sum: UserPreferSumAggregateOutputType | null
    _min: UserPreferMinAggregateOutputType | null
    _max: UserPreferMaxAggregateOutputType | null
  }

  type GetUserPreferGroupByPayload<T extends UserPreferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    preferCategoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    preferCategory?: boolean | PreferCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPrefer"]>



  export type UserPreferSelectScalar = {
    userId?: boolean
    preferCategoryId?: boolean
  }

  export type UserPreferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "preferCategoryId", ExtArgs["result"]["userPrefer"]>
  export type UserPreferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    preferCategory?: boolean | PreferCategoryDefaultArgs<ExtArgs>
  }

  export type $UserPreferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPrefer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      preferCategory: Prisma.$PreferCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: bigint
      preferCategoryId: bigint
    }, ExtArgs["result"]["userPrefer"]>
    composites: {}
  }

  type UserPreferGetPayload<S extends boolean | null | undefined | UserPreferDefaultArgs> = $Result.GetResult<Prisma.$UserPreferPayload, S>

  type UserPreferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferCountAggregateInputType | true
    }

  export interface UserPreferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPrefer'], meta: { name: 'UserPrefer' } }
    /**
     * Find zero or one UserPrefer that matches the filter.
     * @param {UserPreferFindUniqueArgs} args - Arguments to find a UserPrefer
     * @example
     * // Get one UserPrefer
     * const userPrefer = await prisma.userPrefer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferFindUniqueArgs>(args: SelectSubset<T, UserPreferFindUniqueArgs<ExtArgs>>): Prisma__UserPreferClient<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPrefer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferFindUniqueOrThrowArgs} args - Arguments to find a UserPrefer
     * @example
     * // Get one UserPrefer
     * const userPrefer = await prisma.userPrefer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferClient<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPrefer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferFindFirstArgs} args - Arguments to find a UserPrefer
     * @example
     * // Get one UserPrefer
     * const userPrefer = await prisma.userPrefer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferFindFirstArgs>(args?: SelectSubset<T, UserPreferFindFirstArgs<ExtArgs>>): Prisma__UserPreferClient<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPrefer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferFindFirstOrThrowArgs} args - Arguments to find a UserPrefer
     * @example
     * // Get one UserPrefer
     * const userPrefer = await prisma.userPrefer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferClient<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPrefers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPrefers
     * const userPrefers = await prisma.userPrefer.findMany()
     * 
     * // Get first 10 UserPrefers
     * const userPrefers = await prisma.userPrefer.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userPreferWithUserIdOnly = await prisma.userPrefer.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserPreferFindManyArgs>(args?: SelectSubset<T, UserPreferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPrefer.
     * @param {UserPreferCreateArgs} args - Arguments to create a UserPrefer.
     * @example
     * // Create one UserPrefer
     * const UserPrefer = await prisma.userPrefer.create({
     *   data: {
     *     // ... data to create a UserPrefer
     *   }
     * })
     * 
     */
    create<T extends UserPreferCreateArgs>(args: SelectSubset<T, UserPreferCreateArgs<ExtArgs>>): Prisma__UserPreferClient<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPrefers.
     * @param {UserPreferCreateManyArgs} args - Arguments to create many UserPrefers.
     * @example
     * // Create many UserPrefers
     * const userPrefer = await prisma.userPrefer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferCreateManyArgs>(args?: SelectSubset<T, UserPreferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserPrefer.
     * @param {UserPreferDeleteArgs} args - Arguments to delete one UserPrefer.
     * @example
     * // Delete one UserPrefer
     * const UserPrefer = await prisma.userPrefer.delete({
     *   where: {
     *     // ... filter to delete one UserPrefer
     *   }
     * })
     * 
     */
    delete<T extends UserPreferDeleteArgs>(args: SelectSubset<T, UserPreferDeleteArgs<ExtArgs>>): Prisma__UserPreferClient<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPrefer.
     * @param {UserPreferUpdateArgs} args - Arguments to update one UserPrefer.
     * @example
     * // Update one UserPrefer
     * const userPrefer = await prisma.userPrefer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferUpdateArgs>(args: SelectSubset<T, UserPreferUpdateArgs<ExtArgs>>): Prisma__UserPreferClient<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPrefers.
     * @param {UserPreferDeleteManyArgs} args - Arguments to filter UserPrefers to delete.
     * @example
     * // Delete a few UserPrefers
     * const { count } = await prisma.userPrefer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferDeleteManyArgs>(args?: SelectSubset<T, UserPreferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPrefers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPrefers
     * const userPrefer = await prisma.userPrefer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferUpdateManyArgs>(args: SelectSubset<T, UserPreferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPrefer.
     * @param {UserPreferUpsertArgs} args - Arguments to update or create a UserPrefer.
     * @example
     * // Update or create a UserPrefer
     * const userPrefer = await prisma.userPrefer.upsert({
     *   create: {
     *     // ... data to create a UserPrefer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPrefer we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferUpsertArgs>(args: SelectSubset<T, UserPreferUpsertArgs<ExtArgs>>): Prisma__UserPreferClient<$Result.GetResult<Prisma.$UserPreferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPrefers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferCountArgs} args - Arguments to filter UserPrefers to count.
     * @example
     * // Count the number of UserPrefers
     * const count = await prisma.userPrefer.count({
     *   where: {
     *     // ... the filter for the UserPrefers we want to count
     *   }
     * })
    **/
    count<T extends UserPreferCountArgs>(
      args?: Subset<T, UserPreferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPrefer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferAggregateArgs>(args: Subset<T, UserPreferAggregateArgs>): Prisma.PrismaPromise<GetUserPreferAggregateType<T>>

    /**
     * Group by UserPrefer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferGroupByArgs} args - Group by arguments.
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
      T extends UserPreferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPrefer model
   */
  readonly fields: UserPreferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPrefer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    preferCategory<T extends PreferCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PreferCategoryDefaultArgs<ExtArgs>>): Prisma__PreferCategoryClient<$Result.GetResult<Prisma.$PreferCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserPrefer model
   */
  interface UserPreferFieldRefs {
    readonly userId: FieldRef<"UserPrefer", 'BigInt'>
    readonly preferCategoryId: FieldRef<"UserPrefer", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * UserPrefer findUnique
   */
  export type UserPreferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    /**
     * Filter, which UserPrefer to fetch.
     */
    where: UserPreferWhereUniqueInput
  }

  /**
   * UserPrefer findUniqueOrThrow
   */
  export type UserPreferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    /**
     * Filter, which UserPrefer to fetch.
     */
    where: UserPreferWhereUniqueInput
  }

  /**
   * UserPrefer findFirst
   */
  export type UserPreferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    /**
     * Filter, which UserPrefer to fetch.
     */
    where?: UserPreferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrefers to fetch.
     */
    orderBy?: UserPreferOrderByWithRelationInput | UserPreferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPrefers.
     */
    cursor?: UserPreferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrefers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPrefers.
     */
    distinct?: UserPreferScalarFieldEnum | UserPreferScalarFieldEnum[]
  }

  /**
   * UserPrefer findFirstOrThrow
   */
  export type UserPreferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    /**
     * Filter, which UserPrefer to fetch.
     */
    where?: UserPreferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrefers to fetch.
     */
    orderBy?: UserPreferOrderByWithRelationInput | UserPreferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPrefers.
     */
    cursor?: UserPreferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrefers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPrefers.
     */
    distinct?: UserPreferScalarFieldEnum | UserPreferScalarFieldEnum[]
  }

  /**
   * UserPrefer findMany
   */
  export type UserPreferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    /**
     * Filter, which UserPrefers to fetch.
     */
    where?: UserPreferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrefers to fetch.
     */
    orderBy?: UserPreferOrderByWithRelationInput | UserPreferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPrefers.
     */
    cursor?: UserPreferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrefers.
     */
    skip?: number
    distinct?: UserPreferScalarFieldEnum | UserPreferScalarFieldEnum[]
  }

  /**
   * UserPrefer create
   */
  export type UserPreferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPrefer.
     */
    data: XOR<UserPreferCreateInput, UserPreferUncheckedCreateInput>
  }

  /**
   * UserPrefer createMany
   */
  export type UserPreferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPrefers.
     */
    data: UserPreferCreateManyInput | UserPreferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPrefer update
   */
  export type UserPreferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPrefer.
     */
    data: XOR<UserPreferUpdateInput, UserPreferUncheckedUpdateInput>
    /**
     * Choose, which UserPrefer to update.
     */
    where: UserPreferWhereUniqueInput
  }

  /**
   * UserPrefer updateMany
   */
  export type UserPreferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPrefers.
     */
    data: XOR<UserPreferUpdateManyMutationInput, UserPreferUncheckedUpdateManyInput>
    /**
     * Filter which UserPrefers to update
     */
    where?: UserPreferWhereInput
    /**
     * Limit how many UserPrefers to update.
     */
    limit?: number
  }

  /**
   * UserPrefer upsert
   */
  export type UserPreferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPrefer to update in case it exists.
     */
    where: UserPreferWhereUniqueInput
    /**
     * In case the UserPrefer found by the `where` argument doesn't exist, create a new UserPrefer with this data.
     */
    create: XOR<UserPreferCreateInput, UserPreferUncheckedCreateInput>
    /**
     * In case the UserPrefer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferUpdateInput, UserPreferUncheckedUpdateInput>
  }

  /**
   * UserPrefer delete
   */
  export type UserPreferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
    /**
     * Filter which UserPrefer to delete.
     */
    where: UserPreferWhereUniqueInput
  }

  /**
   * UserPrefer deleteMany
   */
  export type UserPreferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPrefers to delete
     */
    where?: UserPreferWhereInput
    /**
     * Limit how many UserPrefers to delete.
     */
    limit?: number
  }

  /**
   * UserPrefer without action
   */
  export type UserPreferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrefer
     */
    select?: UserPreferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrefer
     */
    omit?: UserPreferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferInclude<ExtArgs> | null
  }


  /**
   * Model UserRegion
   */

  export type AggregateUserRegion = {
    _count: UserRegionCountAggregateOutputType | null
    _avg: UserRegionAvgAggregateOutputType | null
    _sum: UserRegionSumAggregateOutputType | null
    _min: UserRegionMinAggregateOutputType | null
    _max: UserRegionMaxAggregateOutputType | null
  }

  export type UserRegionAvgAggregateOutputType = {
    userId: number | null
    regionId: number | null
    successCount: number | null
  }

  export type UserRegionSumAggregateOutputType = {
    userId: bigint | null
    regionId: bigint | null
    successCount: bigint | null
  }

  export type UserRegionMinAggregateOutputType = {
    userId: bigint | null
    regionId: bigint | null
    successCount: bigint | null
    hasBonus: boolean | null
  }

  export type UserRegionMaxAggregateOutputType = {
    userId: bigint | null
    regionId: bigint | null
    successCount: bigint | null
    hasBonus: boolean | null
  }

  export type UserRegionCountAggregateOutputType = {
    userId: number
    regionId: number
    successCount: number
    hasBonus: number
    _all: number
  }


  export type UserRegionAvgAggregateInputType = {
    userId?: true
    regionId?: true
    successCount?: true
  }

  export type UserRegionSumAggregateInputType = {
    userId?: true
    regionId?: true
    successCount?: true
  }

  export type UserRegionMinAggregateInputType = {
    userId?: true
    regionId?: true
    successCount?: true
    hasBonus?: true
  }

  export type UserRegionMaxAggregateInputType = {
    userId?: true
    regionId?: true
    successCount?: true
    hasBonus?: true
  }

  export type UserRegionCountAggregateInputType = {
    userId?: true
    regionId?: true
    successCount?: true
    hasBonus?: true
    _all?: true
  }

  export type UserRegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRegion to aggregate.
     */
    where?: UserRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegions to fetch.
     */
    orderBy?: UserRegionOrderByWithRelationInput | UserRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRegions
    **/
    _count?: true | UserRegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRegionMaxAggregateInputType
  }

  export type GetUserRegionAggregateType<T extends UserRegionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRegion[P]>
      : GetScalarType<T[P], AggregateUserRegion[P]>
  }




  export type UserRegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRegionWhereInput
    orderBy?: UserRegionOrderByWithAggregationInput | UserRegionOrderByWithAggregationInput[]
    by: UserRegionScalarFieldEnum[] | UserRegionScalarFieldEnum
    having?: UserRegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRegionCountAggregateInputType | true
    _avg?: UserRegionAvgAggregateInputType
    _sum?: UserRegionSumAggregateInputType
    _min?: UserRegionMinAggregateInputType
    _max?: UserRegionMaxAggregateInputType
  }

  export type UserRegionGroupByOutputType = {
    userId: bigint
    regionId: bigint
    successCount: bigint
    hasBonus: boolean
    _count: UserRegionCountAggregateOutputType | null
    _avg: UserRegionAvgAggregateOutputType | null
    _sum: UserRegionSumAggregateOutputType | null
    _min: UserRegionMinAggregateOutputType | null
    _max: UserRegionMaxAggregateOutputType | null
  }

  type GetUserRegionGroupByPayload<T extends UserRegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRegionGroupByOutputType[P]>
            : GetScalarType<T[P], UserRegionGroupByOutputType[P]>
        }
      >
    >


  export type UserRegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    regionId?: boolean
    successCount?: boolean
    hasBonus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRegion"]>



  export type UserRegionSelectScalar = {
    userId?: boolean
    regionId?: boolean
    successCount?: boolean
    hasBonus?: boolean
  }

  export type UserRegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "regionId" | "successCount" | "hasBonus", ExtArgs["result"]["userRegion"]>
  export type UserRegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }

  export type $UserRegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRegion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      region: Prisma.$RegionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: bigint
      regionId: bigint
      successCount: bigint
      hasBonus: boolean
    }, ExtArgs["result"]["userRegion"]>
    composites: {}
  }

  type UserRegionGetPayload<S extends boolean | null | undefined | UserRegionDefaultArgs> = $Result.GetResult<Prisma.$UserRegionPayload, S>

  type UserRegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRegionCountAggregateInputType | true
    }

  export interface UserRegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRegion'], meta: { name: 'UserRegion' } }
    /**
     * Find zero or one UserRegion that matches the filter.
     * @param {UserRegionFindUniqueArgs} args - Arguments to find a UserRegion
     * @example
     * // Get one UserRegion
     * const userRegion = await prisma.userRegion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRegionFindUniqueArgs>(args: SelectSubset<T, UserRegionFindUniqueArgs<ExtArgs>>): Prisma__UserRegionClient<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRegion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRegionFindUniqueOrThrowArgs} args - Arguments to find a UserRegion
     * @example
     * // Get one UserRegion
     * const userRegion = await prisma.userRegion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRegionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRegionClient<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRegion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionFindFirstArgs} args - Arguments to find a UserRegion
     * @example
     * // Get one UserRegion
     * const userRegion = await prisma.userRegion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRegionFindFirstArgs>(args?: SelectSubset<T, UserRegionFindFirstArgs<ExtArgs>>): Prisma__UserRegionClient<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRegion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionFindFirstOrThrowArgs} args - Arguments to find a UserRegion
     * @example
     * // Get one UserRegion
     * const userRegion = await prisma.userRegion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRegionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRegionClient<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRegions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRegions
     * const userRegions = await prisma.userRegion.findMany()
     * 
     * // Get first 10 UserRegions
     * const userRegions = await prisma.userRegion.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRegionWithUserIdOnly = await prisma.userRegion.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRegionFindManyArgs>(args?: SelectSubset<T, UserRegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRegion.
     * @param {UserRegionCreateArgs} args - Arguments to create a UserRegion.
     * @example
     * // Create one UserRegion
     * const UserRegion = await prisma.userRegion.create({
     *   data: {
     *     // ... data to create a UserRegion
     *   }
     * })
     * 
     */
    create<T extends UserRegionCreateArgs>(args: SelectSubset<T, UserRegionCreateArgs<ExtArgs>>): Prisma__UserRegionClient<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRegions.
     * @param {UserRegionCreateManyArgs} args - Arguments to create many UserRegions.
     * @example
     * // Create many UserRegions
     * const userRegion = await prisma.userRegion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRegionCreateManyArgs>(args?: SelectSubset<T, UserRegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRegion.
     * @param {UserRegionDeleteArgs} args - Arguments to delete one UserRegion.
     * @example
     * // Delete one UserRegion
     * const UserRegion = await prisma.userRegion.delete({
     *   where: {
     *     // ... filter to delete one UserRegion
     *   }
     * })
     * 
     */
    delete<T extends UserRegionDeleteArgs>(args: SelectSubset<T, UserRegionDeleteArgs<ExtArgs>>): Prisma__UserRegionClient<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRegion.
     * @param {UserRegionUpdateArgs} args - Arguments to update one UserRegion.
     * @example
     * // Update one UserRegion
     * const userRegion = await prisma.userRegion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRegionUpdateArgs>(args: SelectSubset<T, UserRegionUpdateArgs<ExtArgs>>): Prisma__UserRegionClient<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRegions.
     * @param {UserRegionDeleteManyArgs} args - Arguments to filter UserRegions to delete.
     * @example
     * // Delete a few UserRegions
     * const { count } = await prisma.userRegion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRegionDeleteManyArgs>(args?: SelectSubset<T, UserRegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRegions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRegions
     * const userRegion = await prisma.userRegion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRegionUpdateManyArgs>(args: SelectSubset<T, UserRegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRegion.
     * @param {UserRegionUpsertArgs} args - Arguments to update or create a UserRegion.
     * @example
     * // Update or create a UserRegion
     * const userRegion = await prisma.userRegion.upsert({
     *   create: {
     *     // ... data to create a UserRegion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRegion we want to update
     *   }
     * })
     */
    upsert<T extends UserRegionUpsertArgs>(args: SelectSubset<T, UserRegionUpsertArgs<ExtArgs>>): Prisma__UserRegionClient<$Result.GetResult<Prisma.$UserRegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRegions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionCountArgs} args - Arguments to filter UserRegions to count.
     * @example
     * // Count the number of UserRegions
     * const count = await prisma.userRegion.count({
     *   where: {
     *     // ... the filter for the UserRegions we want to count
     *   }
     * })
    **/
    count<T extends UserRegionCountArgs>(
      args?: Subset<T, UserRegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRegion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRegionAggregateArgs>(args: Subset<T, UserRegionAggregateArgs>): Prisma.PrismaPromise<GetUserRegionAggregateType<T>>

    /**
     * Group by UserRegion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionGroupByArgs} args - Group by arguments.
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
      T extends UserRegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRegionGroupByArgs['orderBy'] }
        : { orderBy?: UserRegionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRegion model
   */
  readonly fields: UserRegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRegion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserRegion model
   */
  interface UserRegionFieldRefs {
    readonly userId: FieldRef<"UserRegion", 'BigInt'>
    readonly regionId: FieldRef<"UserRegion", 'BigInt'>
    readonly successCount: FieldRef<"UserRegion", 'BigInt'>
    readonly hasBonus: FieldRef<"UserRegion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserRegion findUnique
   */
  export type UserRegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    /**
     * Filter, which UserRegion to fetch.
     */
    where: UserRegionWhereUniqueInput
  }

  /**
   * UserRegion findUniqueOrThrow
   */
  export type UserRegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    /**
     * Filter, which UserRegion to fetch.
     */
    where: UserRegionWhereUniqueInput
  }

  /**
   * UserRegion findFirst
   */
  export type UserRegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    /**
     * Filter, which UserRegion to fetch.
     */
    where?: UserRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegions to fetch.
     */
    orderBy?: UserRegionOrderByWithRelationInput | UserRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRegions.
     */
    cursor?: UserRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRegions.
     */
    distinct?: UserRegionScalarFieldEnum | UserRegionScalarFieldEnum[]
  }

  /**
   * UserRegion findFirstOrThrow
   */
  export type UserRegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    /**
     * Filter, which UserRegion to fetch.
     */
    where?: UserRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegions to fetch.
     */
    orderBy?: UserRegionOrderByWithRelationInput | UserRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRegions.
     */
    cursor?: UserRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRegions.
     */
    distinct?: UserRegionScalarFieldEnum | UserRegionScalarFieldEnum[]
  }

  /**
   * UserRegion findMany
   */
  export type UserRegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    /**
     * Filter, which UserRegions to fetch.
     */
    where?: UserRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegions to fetch.
     */
    orderBy?: UserRegionOrderByWithRelationInput | UserRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRegions.
     */
    cursor?: UserRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegions.
     */
    skip?: number
    distinct?: UserRegionScalarFieldEnum | UserRegionScalarFieldEnum[]
  }

  /**
   * UserRegion create
   */
  export type UserRegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRegion.
     */
    data: XOR<UserRegionCreateInput, UserRegionUncheckedCreateInput>
  }

  /**
   * UserRegion createMany
   */
  export type UserRegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRegions.
     */
    data: UserRegionCreateManyInput | UserRegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRegion update
   */
  export type UserRegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRegion.
     */
    data: XOR<UserRegionUpdateInput, UserRegionUncheckedUpdateInput>
    /**
     * Choose, which UserRegion to update.
     */
    where: UserRegionWhereUniqueInput
  }

  /**
   * UserRegion updateMany
   */
  export type UserRegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRegions.
     */
    data: XOR<UserRegionUpdateManyMutationInput, UserRegionUncheckedUpdateManyInput>
    /**
     * Filter which UserRegions to update
     */
    where?: UserRegionWhereInput
    /**
     * Limit how many UserRegions to update.
     */
    limit?: number
  }

  /**
   * UserRegion upsert
   */
  export type UserRegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRegion to update in case it exists.
     */
    where: UserRegionWhereUniqueInput
    /**
     * In case the UserRegion found by the `where` argument doesn't exist, create a new UserRegion with this data.
     */
    create: XOR<UserRegionCreateInput, UserRegionUncheckedCreateInput>
    /**
     * In case the UserRegion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRegionUpdateInput, UserRegionUncheckedUpdateInput>
  }

  /**
   * UserRegion delete
   */
  export type UserRegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
    /**
     * Filter which UserRegion to delete.
     */
    where: UserRegionWhereUniqueInput
  }

  /**
   * UserRegion deleteMany
   */
  export type UserRegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRegions to delete
     */
    where?: UserRegionWhereInput
    /**
     * Limit how many UserRegions to delete.
     */
    limit?: number
  }

  /**
   * UserRegion without action
   */
  export type UserRegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegion
     */
    select?: UserRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegion
     */
    omit?: UserRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRegionInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
    total: Decimal | null
    count: number | null
    ownerId: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: bigint | null
    total: Decimal | null
    count: bigint | null
    ownerId: bigint | null
  }

  export type StoreMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    address: string | null
    stype: string | null
    total: Decimal | null
    count: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: bigint | null
  }

  export type StoreMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    address: string | null
    stype: string | null
    total: Decimal | null
    count: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: bigint | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    address: number
    stype: number
    total: number
    count: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
    total?: true
    count?: true
    ownerId?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
    total?: true
    count?: true
    ownerId?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    stype?: true
    total?: true
    count?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    stype?: true
    total?: true
    count?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    stype?: true
    total?: true
    count?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: bigint
    name: string
    address: string
    stype: string
    total: Decimal
    count: bigint
    createdAt: Date
    updatedAt: Date
    ownerId: bigint
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    stype?: boolean
    total?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    StoreImage?: boolean | Store$StoreImageArgs<ExtArgs>
    Mission?: boolean | Store$MissionArgs<ExtArgs>
    StoreReview?: boolean | Store$StoreReviewArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>



  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    stype?: boolean
    total?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "stype" | "total" | "count" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    StoreImage?: boolean | Store$StoreImageArgs<ExtArgs>
    Mission?: boolean | Store$MissionArgs<ExtArgs>
    StoreReview?: boolean | Store$StoreReviewArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      StoreImage: Prisma.$StoreImagePayload<ExtArgs>[]
      Mission: Prisma.$MissionPayload<ExtArgs>[]
      StoreReview: Prisma.$StoreReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      address: string
      stype: string
      total: Prisma.Decimal
      count: bigint
      createdAt: Date
      updatedAt: Date
      ownerId: bigint
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    StoreImage<T extends Store$StoreImageArgs<ExtArgs> = {}>(args?: Subset<T, Store$StoreImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Mission<T extends Store$MissionArgs<ExtArgs> = {}>(args?: Subset<T, Store$MissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StoreReview<T extends Store$StoreReviewArgs<ExtArgs> = {}>(args?: Subset<T, Store$StoreReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'BigInt'>
    readonly name: FieldRef<"Store", 'String'>
    readonly address: FieldRef<"Store", 'String'>
    readonly stype: FieldRef<"Store", 'String'>
    readonly total: FieldRef<"Store", 'Decimal'>
    readonly count: FieldRef<"Store", 'BigInt'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
    readonly ownerId: FieldRef<"Store", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.StoreImage
   */
  export type Store$StoreImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    where?: StoreImageWhereInput
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    cursor?: StoreImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * Store.Mission
   */
  export type Store$MissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Store.StoreReview
   */
  export type Store$StoreReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    where?: StoreReviewWhereInput
    orderBy?: StoreReviewOrderByWithRelationInput | StoreReviewOrderByWithRelationInput[]
    cursor?: StoreReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreReviewScalarFieldEnum | StoreReviewScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model StoreImage
   */

  export type AggregateStoreImage = {
    _count: StoreImageCountAggregateOutputType | null
    _avg: StoreImageAvgAggregateOutputType | null
    _sum: StoreImageSumAggregateOutputType | null
    _min: StoreImageMinAggregateOutputType | null
    _max: StoreImageMaxAggregateOutputType | null
  }

  export type StoreImageAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
  }

  export type StoreImageSumAggregateOutputType = {
    id: bigint | null
    storeId: bigint | null
  }

  export type StoreImageMinAggregateOutputType = {
    id: bigint | null
    img: string | null
    storeId: bigint | null
  }

  export type StoreImageMaxAggregateOutputType = {
    id: bigint | null
    img: string | null
    storeId: bigint | null
  }

  export type StoreImageCountAggregateOutputType = {
    id: number
    img: number
    storeId: number
    _all: number
  }


  export type StoreImageAvgAggregateInputType = {
    id?: true
    storeId?: true
  }

  export type StoreImageSumAggregateInputType = {
    id?: true
    storeId?: true
  }

  export type StoreImageMinAggregateInputType = {
    id?: true
    img?: true
    storeId?: true
  }

  export type StoreImageMaxAggregateInputType = {
    id?: true
    img?: true
    storeId?: true
  }

  export type StoreImageCountAggregateInputType = {
    id?: true
    img?: true
    storeId?: true
    _all?: true
  }

  export type StoreImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreImage to aggregate.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreImages
    **/
    _count?: true | StoreImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreImageMaxAggregateInputType
  }

  export type GetStoreImageAggregateType<T extends StoreImageAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreImage[P]>
      : GetScalarType<T[P], AggregateStoreImage[P]>
  }




  export type StoreImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreImageWhereInput
    orderBy?: StoreImageOrderByWithAggregationInput | StoreImageOrderByWithAggregationInput[]
    by: StoreImageScalarFieldEnum[] | StoreImageScalarFieldEnum
    having?: StoreImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreImageCountAggregateInputType | true
    _avg?: StoreImageAvgAggregateInputType
    _sum?: StoreImageSumAggregateInputType
    _min?: StoreImageMinAggregateInputType
    _max?: StoreImageMaxAggregateInputType
  }

  export type StoreImageGroupByOutputType = {
    id: bigint
    img: string | null
    storeId: bigint
    _count: StoreImageCountAggregateOutputType | null
    _avg: StoreImageAvgAggregateOutputType | null
    _sum: StoreImageSumAggregateOutputType | null
    _min: StoreImageMinAggregateOutputType | null
    _max: StoreImageMaxAggregateOutputType | null
  }

  type GetStoreImageGroupByPayload<T extends StoreImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreImageGroupByOutputType[P]>
            : GetScalarType<T[P], StoreImageGroupByOutputType[P]>
        }
      >
    >


  export type StoreImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img?: boolean
    storeId?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeImage"]>



  export type StoreImageSelectScalar = {
    id?: boolean
    img?: boolean
    storeId?: boolean
  }

  export type StoreImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "img" | "storeId", ExtArgs["result"]["storeImage"]>
  export type StoreImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $StoreImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreImage"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      img: string | null
      storeId: bigint
    }, ExtArgs["result"]["storeImage"]>
    composites: {}
  }

  type StoreImageGetPayload<S extends boolean | null | undefined | StoreImageDefaultArgs> = $Result.GetResult<Prisma.$StoreImagePayload, S>

  type StoreImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreImageCountAggregateInputType | true
    }

  export interface StoreImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreImage'], meta: { name: 'StoreImage' } }
    /**
     * Find zero or one StoreImage that matches the filter.
     * @param {StoreImageFindUniqueArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreImageFindUniqueArgs>(args: SelectSubset<T, StoreImageFindUniqueArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreImageFindUniqueOrThrowArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreImageFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageFindFirstArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreImageFindFirstArgs>(args?: SelectSubset<T, StoreImageFindFirstArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageFindFirstOrThrowArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreImageFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreImages
     * const storeImages = await prisma.storeImage.findMany()
     * 
     * // Get first 10 StoreImages
     * const storeImages = await prisma.storeImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeImageWithIdOnly = await prisma.storeImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreImageFindManyArgs>(args?: SelectSubset<T, StoreImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreImage.
     * @param {StoreImageCreateArgs} args - Arguments to create a StoreImage.
     * @example
     * // Create one StoreImage
     * const StoreImage = await prisma.storeImage.create({
     *   data: {
     *     // ... data to create a StoreImage
     *   }
     * })
     * 
     */
    create<T extends StoreImageCreateArgs>(args: SelectSubset<T, StoreImageCreateArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreImages.
     * @param {StoreImageCreateManyArgs} args - Arguments to create many StoreImages.
     * @example
     * // Create many StoreImages
     * const storeImage = await prisma.storeImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreImageCreateManyArgs>(args?: SelectSubset<T, StoreImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreImage.
     * @param {StoreImageDeleteArgs} args - Arguments to delete one StoreImage.
     * @example
     * // Delete one StoreImage
     * const StoreImage = await prisma.storeImage.delete({
     *   where: {
     *     // ... filter to delete one StoreImage
     *   }
     * })
     * 
     */
    delete<T extends StoreImageDeleteArgs>(args: SelectSubset<T, StoreImageDeleteArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreImage.
     * @param {StoreImageUpdateArgs} args - Arguments to update one StoreImage.
     * @example
     * // Update one StoreImage
     * const storeImage = await prisma.storeImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreImageUpdateArgs>(args: SelectSubset<T, StoreImageUpdateArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreImages.
     * @param {StoreImageDeleteManyArgs} args - Arguments to filter StoreImages to delete.
     * @example
     * // Delete a few StoreImages
     * const { count } = await prisma.storeImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreImageDeleteManyArgs>(args?: SelectSubset<T, StoreImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreImages
     * const storeImage = await prisma.storeImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreImageUpdateManyArgs>(args: SelectSubset<T, StoreImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreImage.
     * @param {StoreImageUpsertArgs} args - Arguments to update or create a StoreImage.
     * @example
     * // Update or create a StoreImage
     * const storeImage = await prisma.storeImage.upsert({
     *   create: {
     *     // ... data to create a StoreImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreImage we want to update
     *   }
     * })
     */
    upsert<T extends StoreImageUpsertArgs>(args: SelectSubset<T, StoreImageUpsertArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageCountArgs} args - Arguments to filter StoreImages to count.
     * @example
     * // Count the number of StoreImages
     * const count = await prisma.storeImage.count({
     *   where: {
     *     // ... the filter for the StoreImages we want to count
     *   }
     * })
    **/
    count<T extends StoreImageCountArgs>(
      args?: Subset<T, StoreImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreImageAggregateArgs>(args: Subset<T, StoreImageAggregateArgs>): Prisma.PrismaPromise<GetStoreImageAggregateType<T>>

    /**
     * Group by StoreImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageGroupByArgs} args - Group by arguments.
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
      T extends StoreImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreImageGroupByArgs['orderBy'] }
        : { orderBy?: StoreImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreImage model
   */
  readonly fields: StoreImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StoreImage model
   */
  interface StoreImageFieldRefs {
    readonly id: FieldRef<"StoreImage", 'BigInt'>
    readonly img: FieldRef<"StoreImage", 'String'>
    readonly storeId: FieldRef<"StoreImage", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * StoreImage findUnique
   */
  export type StoreImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage findUniqueOrThrow
   */
  export type StoreImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage findFirst
   */
  export type StoreImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreImages.
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreImages.
     */
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * StoreImage findFirstOrThrow
   */
  export type StoreImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreImages.
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreImages.
     */
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * StoreImage findMany
   */
  export type StoreImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter, which StoreImages to fetch.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreImages.
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * StoreImage create
   */
  export type StoreImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreImage.
     */
    data: XOR<StoreImageCreateInput, StoreImageUncheckedCreateInput>
  }

  /**
   * StoreImage createMany
   */
  export type StoreImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreImages.
     */
    data: StoreImageCreateManyInput | StoreImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreImage update
   */
  export type StoreImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreImage.
     */
    data: XOR<StoreImageUpdateInput, StoreImageUncheckedUpdateInput>
    /**
     * Choose, which StoreImage to update.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage updateMany
   */
  export type StoreImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreImages.
     */
    data: XOR<StoreImageUpdateManyMutationInput, StoreImageUncheckedUpdateManyInput>
    /**
     * Filter which StoreImages to update
     */
    where?: StoreImageWhereInput
    /**
     * Limit how many StoreImages to update.
     */
    limit?: number
  }

  /**
   * StoreImage upsert
   */
  export type StoreImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreImage to update in case it exists.
     */
    where: StoreImageWhereUniqueInput
    /**
     * In case the StoreImage found by the `where` argument doesn't exist, create a new StoreImage with this data.
     */
    create: XOR<StoreImageCreateInput, StoreImageUncheckedCreateInput>
    /**
     * In case the StoreImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreImageUpdateInput, StoreImageUncheckedUpdateInput>
  }

  /**
   * StoreImage delete
   */
  export type StoreImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter which StoreImage to delete.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage deleteMany
   */
  export type StoreImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreImages to delete
     */
    where?: StoreImageWhereInput
    /**
     * Limit how many StoreImages to delete.
     */
    limit?: number
  }

  /**
   * StoreImage without action
   */
  export type StoreImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    id: number | null
    money: number | null
    points: number | null
    storeId: number | null
    regionId: number | null
  }

  export type MissionSumAggregateOutputType = {
    id: bigint | null
    money: bigint | null
    points: bigint | null
    storeId: bigint | null
    regionId: bigint | null
  }

  export type MissionMinAggregateOutputType = {
    id: bigint | null
    startDate: Date | null
    endDate: Date | null
    money: bigint | null
    points: bigint | null
    storeId: bigint | null
    regionId: bigint | null
  }

  export type MissionMaxAggregateOutputType = {
    id: bigint | null
    startDate: Date | null
    endDate: Date | null
    money: bigint | null
    points: bigint | null
    storeId: bigint | null
    regionId: bigint | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    money: number
    points: number
    storeId: number
    regionId: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    id?: true
    money?: true
    points?: true
    storeId?: true
    regionId?: true
  }

  export type MissionSumAggregateInputType = {
    id?: true
    money?: true
    points?: true
    storeId?: true
    regionId?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    money?: true
    points?: true
    storeId?: true
    regionId?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    money?: true
    points?: true
    storeId?: true
    regionId?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    money?: true
    points?: true
    storeId?: true
    regionId?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: bigint
    startDate: Date
    endDate: Date
    money: bigint
    points: bigint
    storeId: bigint
    regionId: bigint
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    money?: boolean
    points?: boolean
    storeId?: boolean
    regionId?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
    UserMission?: boolean | Mission$UserMissionArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>



  export type MissionSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    money?: boolean
    points?: boolean
    storeId?: boolean
    regionId?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "money" | "points" | "storeId" | "regionId", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
    UserMission?: boolean | Mission$UserMissionArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      region: Prisma.$RegionPayload<ExtArgs>
      UserMission: Prisma.$UserMissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      startDate: Date
      endDate: Date
      money: bigint
      points: bigint
      storeId: bigint
      regionId: bigint
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
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
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UserMission<T extends Mission$UserMissionArgs<ExtArgs> = {}>(args?: Subset<T, Mission$UserMissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'BigInt'>
    readonly startDate: FieldRef<"Mission", 'DateTime'>
    readonly endDate: FieldRef<"Mission", 'DateTime'>
    readonly money: FieldRef<"Mission", 'BigInt'>
    readonly points: FieldRef<"Mission", 'BigInt'>
    readonly storeId: FieldRef<"Mission", 'BigInt'>
    readonly regionId: FieldRef<"Mission", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission.UserMission
   */
  export type Mission$UserMissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    where?: UserMissionWhereInput
    orderBy?: UserMissionOrderByWithRelationInput | UserMissionOrderByWithRelationInput[]
    cursor?: UserMissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMissionScalarFieldEnum | UserMissionScalarFieldEnum[]
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model UserMission
   */

  export type AggregateUserMission = {
    _count: UserMissionCountAggregateOutputType | null
    _avg: UserMissionAvgAggregateOutputType | null
    _sum: UserMissionSumAggregateOutputType | null
    _min: UserMissionMinAggregateOutputType | null
    _max: UserMissionMaxAggregateOutputType | null
  }

  export type UserMissionAvgAggregateOutputType = {
    userId: number | null
    missionId: number | null
  }

  export type UserMissionSumAggregateOutputType = {
    userId: bigint | null
    missionId: bigint | null
  }

  export type UserMissionMinAggregateOutputType = {
    userId: bigint | null
    missionId: bigint | null
    status: $Enums.UserMissionStatus | null
    acceptedAt: Date | null
    completedAt: Date | null
  }

  export type UserMissionMaxAggregateOutputType = {
    userId: bigint | null
    missionId: bigint | null
    status: $Enums.UserMissionStatus | null
    acceptedAt: Date | null
    completedAt: Date | null
  }

  export type UserMissionCountAggregateOutputType = {
    userId: number
    missionId: number
    status: number
    acceptedAt: number
    completedAt: number
    _all: number
  }


  export type UserMissionAvgAggregateInputType = {
    userId?: true
    missionId?: true
  }

  export type UserMissionSumAggregateInputType = {
    userId?: true
    missionId?: true
  }

  export type UserMissionMinAggregateInputType = {
    userId?: true
    missionId?: true
    status?: true
    acceptedAt?: true
    completedAt?: true
  }

  export type UserMissionMaxAggregateInputType = {
    userId?: true
    missionId?: true
    status?: true
    acceptedAt?: true
    completedAt?: true
  }

  export type UserMissionCountAggregateInputType = {
    userId?: true
    missionId?: true
    status?: true
    acceptedAt?: true
    completedAt?: true
    _all?: true
  }

  export type UserMissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMission to aggregate.
     */
    where?: UserMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissions to fetch.
     */
    orderBy?: UserMissionOrderByWithRelationInput | UserMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMissions
    **/
    _count?: true | UserMissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMissionMaxAggregateInputType
  }

  export type GetUserMissionAggregateType<T extends UserMissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMission[P]>
      : GetScalarType<T[P], AggregateUserMission[P]>
  }




  export type UserMissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMissionWhereInput
    orderBy?: UserMissionOrderByWithAggregationInput | UserMissionOrderByWithAggregationInput[]
    by: UserMissionScalarFieldEnum[] | UserMissionScalarFieldEnum
    having?: UserMissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMissionCountAggregateInputType | true
    _avg?: UserMissionAvgAggregateInputType
    _sum?: UserMissionSumAggregateInputType
    _min?: UserMissionMinAggregateInputType
    _max?: UserMissionMaxAggregateInputType
  }

  export type UserMissionGroupByOutputType = {
    userId: bigint
    missionId: bigint
    status: $Enums.UserMissionStatus
    acceptedAt: Date
    completedAt: Date | null
    _count: UserMissionCountAggregateOutputType | null
    _avg: UserMissionAvgAggregateOutputType | null
    _sum: UserMissionSumAggregateOutputType | null
    _min: UserMissionMinAggregateOutputType | null
    _max: UserMissionMaxAggregateOutputType | null
  }

  type GetUserMissionGroupByPayload<T extends UserMissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMissionGroupByOutputType[P]>
            : GetScalarType<T[P], UserMissionGroupByOutputType[P]>
        }
      >
    >


  export type UserMissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    missionId?: boolean
    status?: boolean
    acceptedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMission"]>



  export type UserMissionSelectScalar = {
    userId?: boolean
    missionId?: boolean
    status?: boolean
    acceptedAt?: boolean
    completedAt?: boolean
  }

  export type UserMissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "missionId" | "status" | "acceptedAt" | "completedAt", ExtArgs["result"]["userMission"]>
  export type UserMissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $UserMissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mission: Prisma.$MissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: bigint
      missionId: bigint
      status: $Enums.UserMissionStatus
      acceptedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["userMission"]>
    composites: {}
  }

  type UserMissionGetPayload<S extends boolean | null | undefined | UserMissionDefaultArgs> = $Result.GetResult<Prisma.$UserMissionPayload, S>

  type UserMissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMissionCountAggregateInputType | true
    }

  export interface UserMissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMission'], meta: { name: 'UserMission' } }
    /**
     * Find zero or one UserMission that matches the filter.
     * @param {UserMissionFindUniqueArgs} args - Arguments to find a UserMission
     * @example
     * // Get one UserMission
     * const userMission = await prisma.userMission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMissionFindUniqueArgs>(args: SelectSubset<T, UserMissionFindUniqueArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMissionFindUniqueOrThrowArgs} args - Arguments to find a UserMission
     * @example
     * // Get one UserMission
     * const userMission = await prisma.userMission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMissionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionFindFirstArgs} args - Arguments to find a UserMission
     * @example
     * // Get one UserMission
     * const userMission = await prisma.userMission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMissionFindFirstArgs>(args?: SelectSubset<T, UserMissionFindFirstArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionFindFirstOrThrowArgs} args - Arguments to find a UserMission
     * @example
     * // Get one UserMission
     * const userMission = await prisma.userMission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMissionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMissions
     * const userMissions = await prisma.userMission.findMany()
     * 
     * // Get first 10 UserMissions
     * const userMissions = await prisma.userMission.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userMissionWithUserIdOnly = await prisma.userMission.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserMissionFindManyArgs>(args?: SelectSubset<T, UserMissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMission.
     * @param {UserMissionCreateArgs} args - Arguments to create a UserMission.
     * @example
     * // Create one UserMission
     * const UserMission = await prisma.userMission.create({
     *   data: {
     *     // ... data to create a UserMission
     *   }
     * })
     * 
     */
    create<T extends UserMissionCreateArgs>(args: SelectSubset<T, UserMissionCreateArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMissions.
     * @param {UserMissionCreateManyArgs} args - Arguments to create many UserMissions.
     * @example
     * // Create many UserMissions
     * const userMission = await prisma.userMission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMissionCreateManyArgs>(args?: SelectSubset<T, UserMissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserMission.
     * @param {UserMissionDeleteArgs} args - Arguments to delete one UserMission.
     * @example
     * // Delete one UserMission
     * const UserMission = await prisma.userMission.delete({
     *   where: {
     *     // ... filter to delete one UserMission
     *   }
     * })
     * 
     */
    delete<T extends UserMissionDeleteArgs>(args: SelectSubset<T, UserMissionDeleteArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMission.
     * @param {UserMissionUpdateArgs} args - Arguments to update one UserMission.
     * @example
     * // Update one UserMission
     * const userMission = await prisma.userMission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMissionUpdateArgs>(args: SelectSubset<T, UserMissionUpdateArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMissions.
     * @param {UserMissionDeleteManyArgs} args - Arguments to filter UserMissions to delete.
     * @example
     * // Delete a few UserMissions
     * const { count } = await prisma.userMission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMissionDeleteManyArgs>(args?: SelectSubset<T, UserMissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMissions
     * const userMission = await prisma.userMission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMissionUpdateManyArgs>(args: SelectSubset<T, UserMissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMission.
     * @param {UserMissionUpsertArgs} args - Arguments to update or create a UserMission.
     * @example
     * // Update or create a UserMission
     * const userMission = await prisma.userMission.upsert({
     *   create: {
     *     // ... data to create a UserMission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMission we want to update
     *   }
     * })
     */
    upsert<T extends UserMissionUpsertArgs>(args: SelectSubset<T, UserMissionUpsertArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionCountArgs} args - Arguments to filter UserMissions to count.
     * @example
     * // Count the number of UserMissions
     * const count = await prisma.userMission.count({
     *   where: {
     *     // ... the filter for the UserMissions we want to count
     *   }
     * })
    **/
    count<T extends UserMissionCountArgs>(
      args?: Subset<T, UserMissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserMissionAggregateArgs>(args: Subset<T, UserMissionAggregateArgs>): Prisma.PrismaPromise<GetUserMissionAggregateType<T>>

    /**
     * Group by UserMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionGroupByArgs} args - Group by arguments.
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
      T extends UserMissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMissionGroupByArgs['orderBy'] }
        : { orderBy?: UserMissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserMissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMission model
   */
  readonly fields: UserMissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserMission model
   */
  interface UserMissionFieldRefs {
    readonly userId: FieldRef<"UserMission", 'BigInt'>
    readonly missionId: FieldRef<"UserMission", 'BigInt'>
    readonly status: FieldRef<"UserMission", 'UserMissionStatus'>
    readonly acceptedAt: FieldRef<"UserMission", 'DateTime'>
    readonly completedAt: FieldRef<"UserMission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserMission findUnique
   */
  export type UserMissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    /**
     * Filter, which UserMission to fetch.
     */
    where: UserMissionWhereUniqueInput
  }

  /**
   * UserMission findUniqueOrThrow
   */
  export type UserMissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    /**
     * Filter, which UserMission to fetch.
     */
    where: UserMissionWhereUniqueInput
  }

  /**
   * UserMission findFirst
   */
  export type UserMissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    /**
     * Filter, which UserMission to fetch.
     */
    where?: UserMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissions to fetch.
     */
    orderBy?: UserMissionOrderByWithRelationInput | UserMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMissions.
     */
    cursor?: UserMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMissions.
     */
    distinct?: UserMissionScalarFieldEnum | UserMissionScalarFieldEnum[]
  }

  /**
   * UserMission findFirstOrThrow
   */
  export type UserMissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    /**
     * Filter, which UserMission to fetch.
     */
    where?: UserMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissions to fetch.
     */
    orderBy?: UserMissionOrderByWithRelationInput | UserMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMissions.
     */
    cursor?: UserMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMissions.
     */
    distinct?: UserMissionScalarFieldEnum | UserMissionScalarFieldEnum[]
  }

  /**
   * UserMission findMany
   */
  export type UserMissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    /**
     * Filter, which UserMissions to fetch.
     */
    where?: UserMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissions to fetch.
     */
    orderBy?: UserMissionOrderByWithRelationInput | UserMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMissions.
     */
    cursor?: UserMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissions.
     */
    skip?: number
    distinct?: UserMissionScalarFieldEnum | UserMissionScalarFieldEnum[]
  }

  /**
   * UserMission create
   */
  export type UserMissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMission.
     */
    data: XOR<UserMissionCreateInput, UserMissionUncheckedCreateInput>
  }

  /**
   * UserMission createMany
   */
  export type UserMissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMissions.
     */
    data: UserMissionCreateManyInput | UserMissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMission update
   */
  export type UserMissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMission.
     */
    data: XOR<UserMissionUpdateInput, UserMissionUncheckedUpdateInput>
    /**
     * Choose, which UserMission to update.
     */
    where: UserMissionWhereUniqueInput
  }

  /**
   * UserMission updateMany
   */
  export type UserMissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMissions.
     */
    data: XOR<UserMissionUpdateManyMutationInput, UserMissionUncheckedUpdateManyInput>
    /**
     * Filter which UserMissions to update
     */
    where?: UserMissionWhereInput
    /**
     * Limit how many UserMissions to update.
     */
    limit?: number
  }

  /**
   * UserMission upsert
   */
  export type UserMissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMission to update in case it exists.
     */
    where: UserMissionWhereUniqueInput
    /**
     * In case the UserMission found by the `where` argument doesn't exist, create a new UserMission with this data.
     */
    create: XOR<UserMissionCreateInput, UserMissionUncheckedCreateInput>
    /**
     * In case the UserMission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMissionUpdateInput, UserMissionUncheckedUpdateInput>
  }

  /**
   * UserMission delete
   */
  export type UserMissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
    /**
     * Filter which UserMission to delete.
     */
    where: UserMissionWhereUniqueInput
  }

  /**
   * UserMission deleteMany
   */
  export type UserMissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMissions to delete
     */
    where?: UserMissionWhereInput
    /**
     * Limit how many UserMissions to delete.
     */
    limit?: number
  }

  /**
   * UserMission without action
   */
  export type UserMissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionInclude<ExtArgs> | null
  }


  /**
   * Model StoreReview
   */

  export type AggregateStoreReview = {
    _count: StoreReviewCountAggregateOutputType | null
    _avg: StoreReviewAvgAggregateOutputType | null
    _sum: StoreReviewSumAggregateOutputType | null
    _min: StoreReviewMinAggregateOutputType | null
    _max: StoreReviewMaxAggregateOutputType | null
  }

  export type StoreReviewAvgAggregateOutputType = {
    id: number | null
    score: Decimal | null
    writerId: number | null
    storeId: number | null
  }

  export type StoreReviewSumAggregateOutputType = {
    id: bigint | null
    score: Decimal | null
    writerId: bigint | null
    storeId: bigint | null
  }

  export type StoreReviewMinAggregateOutputType = {
    id: bigint | null
    content: string | null
    score: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    writerId: bigint | null
    storeId: bigint | null
  }

  export type StoreReviewMaxAggregateOutputType = {
    id: bigint | null
    content: string | null
    score: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    writerId: bigint | null
    storeId: bigint | null
  }

  export type StoreReviewCountAggregateOutputType = {
    id: number
    content: number
    score: number
    createdAt: number
    updatedAt: number
    writerId: number
    storeId: number
    _all: number
  }


  export type StoreReviewAvgAggregateInputType = {
    id?: true
    score?: true
    writerId?: true
    storeId?: true
  }

  export type StoreReviewSumAggregateInputType = {
    id?: true
    score?: true
    writerId?: true
    storeId?: true
  }

  export type StoreReviewMinAggregateInputType = {
    id?: true
    content?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    writerId?: true
    storeId?: true
  }

  export type StoreReviewMaxAggregateInputType = {
    id?: true
    content?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    writerId?: true
    storeId?: true
  }

  export type StoreReviewCountAggregateInputType = {
    id?: true
    content?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    writerId?: true
    storeId?: true
    _all?: true
  }

  export type StoreReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreReview to aggregate.
     */
    where?: StoreReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreReviews to fetch.
     */
    orderBy?: StoreReviewOrderByWithRelationInput | StoreReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreReviews
    **/
    _count?: true | StoreReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreReviewMaxAggregateInputType
  }

  export type GetStoreReviewAggregateType<T extends StoreReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreReview[P]>
      : GetScalarType<T[P], AggregateStoreReview[P]>
  }




  export type StoreReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreReviewWhereInput
    orderBy?: StoreReviewOrderByWithAggregationInput | StoreReviewOrderByWithAggregationInput[]
    by: StoreReviewScalarFieldEnum[] | StoreReviewScalarFieldEnum
    having?: StoreReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreReviewCountAggregateInputType | true
    _avg?: StoreReviewAvgAggregateInputType
    _sum?: StoreReviewSumAggregateInputType
    _min?: StoreReviewMinAggregateInputType
    _max?: StoreReviewMaxAggregateInputType
  }

  export type StoreReviewGroupByOutputType = {
    id: bigint
    content: string | null
    score: Decimal | null
    createdAt: Date
    updatedAt: Date
    writerId: bigint
    storeId: bigint
    _count: StoreReviewCountAggregateOutputType | null
    _avg: StoreReviewAvgAggregateOutputType | null
    _sum: StoreReviewSumAggregateOutputType | null
    _min: StoreReviewMinAggregateOutputType | null
    _max: StoreReviewMaxAggregateOutputType | null
  }

  type GetStoreReviewGroupByPayload<T extends StoreReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreReviewGroupByOutputType[P]>
            : GetScalarType<T[P], StoreReviewGroupByOutputType[P]>
        }
      >
    >


  export type StoreReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    writerId?: boolean
    storeId?: boolean
    writer?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    ReviewImage?: boolean | StoreReview$ReviewImageArgs<ExtArgs>
    ReviewAnswer?: boolean | StoreReview$ReviewAnswerArgs<ExtArgs>
    _count?: boolean | StoreReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeReview"]>



  export type StoreReviewSelectScalar = {
    id?: boolean
    content?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    writerId?: boolean
    storeId?: boolean
  }

  export type StoreReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "score" | "createdAt" | "updatedAt" | "writerId" | "storeId", ExtArgs["result"]["storeReview"]>
  export type StoreReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    writer?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    ReviewImage?: boolean | StoreReview$ReviewImageArgs<ExtArgs>
    ReviewAnswer?: boolean | StoreReview$ReviewAnswerArgs<ExtArgs>
    _count?: boolean | StoreReviewCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StoreReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreReview"
    objects: {
      writer: Prisma.$UserPayload<ExtArgs>
      store: Prisma.$StorePayload<ExtArgs>
      ReviewImage: Prisma.$ReviewImagePayload<ExtArgs>[]
      ReviewAnswer: Prisma.$ReviewAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      content: string | null
      score: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
      writerId: bigint
      storeId: bigint
    }, ExtArgs["result"]["storeReview"]>
    composites: {}
  }

  type StoreReviewGetPayload<S extends boolean | null | undefined | StoreReviewDefaultArgs> = $Result.GetResult<Prisma.$StoreReviewPayload, S>

  type StoreReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreReviewCountAggregateInputType | true
    }

  export interface StoreReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreReview'], meta: { name: 'StoreReview' } }
    /**
     * Find zero or one StoreReview that matches the filter.
     * @param {StoreReviewFindUniqueArgs} args - Arguments to find a StoreReview
     * @example
     * // Get one StoreReview
     * const storeReview = await prisma.storeReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreReviewFindUniqueArgs>(args: SelectSubset<T, StoreReviewFindUniqueArgs<ExtArgs>>): Prisma__StoreReviewClient<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreReviewFindUniqueOrThrowArgs} args - Arguments to find a StoreReview
     * @example
     * // Get one StoreReview
     * const storeReview = await prisma.storeReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreReviewClient<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreReviewFindFirstArgs} args - Arguments to find a StoreReview
     * @example
     * // Get one StoreReview
     * const storeReview = await prisma.storeReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreReviewFindFirstArgs>(args?: SelectSubset<T, StoreReviewFindFirstArgs<ExtArgs>>): Prisma__StoreReviewClient<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreReviewFindFirstOrThrowArgs} args - Arguments to find a StoreReview
     * @example
     * // Get one StoreReview
     * const storeReview = await prisma.storeReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreReviewClient<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreReviews
     * const storeReviews = await prisma.storeReview.findMany()
     * 
     * // Get first 10 StoreReviews
     * const storeReviews = await prisma.storeReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeReviewWithIdOnly = await prisma.storeReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreReviewFindManyArgs>(args?: SelectSubset<T, StoreReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreReview.
     * @param {StoreReviewCreateArgs} args - Arguments to create a StoreReview.
     * @example
     * // Create one StoreReview
     * const StoreReview = await prisma.storeReview.create({
     *   data: {
     *     // ... data to create a StoreReview
     *   }
     * })
     * 
     */
    create<T extends StoreReviewCreateArgs>(args: SelectSubset<T, StoreReviewCreateArgs<ExtArgs>>): Prisma__StoreReviewClient<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreReviews.
     * @param {StoreReviewCreateManyArgs} args - Arguments to create many StoreReviews.
     * @example
     * // Create many StoreReviews
     * const storeReview = await prisma.storeReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreReviewCreateManyArgs>(args?: SelectSubset<T, StoreReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreReview.
     * @param {StoreReviewDeleteArgs} args - Arguments to delete one StoreReview.
     * @example
     * // Delete one StoreReview
     * const StoreReview = await prisma.storeReview.delete({
     *   where: {
     *     // ... filter to delete one StoreReview
     *   }
     * })
     * 
     */
    delete<T extends StoreReviewDeleteArgs>(args: SelectSubset<T, StoreReviewDeleteArgs<ExtArgs>>): Prisma__StoreReviewClient<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreReview.
     * @param {StoreReviewUpdateArgs} args - Arguments to update one StoreReview.
     * @example
     * // Update one StoreReview
     * const storeReview = await prisma.storeReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreReviewUpdateArgs>(args: SelectSubset<T, StoreReviewUpdateArgs<ExtArgs>>): Prisma__StoreReviewClient<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreReviews.
     * @param {StoreReviewDeleteManyArgs} args - Arguments to filter StoreReviews to delete.
     * @example
     * // Delete a few StoreReviews
     * const { count } = await prisma.storeReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreReviewDeleteManyArgs>(args?: SelectSubset<T, StoreReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreReviews
     * const storeReview = await prisma.storeReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreReviewUpdateManyArgs>(args: SelectSubset<T, StoreReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreReview.
     * @param {StoreReviewUpsertArgs} args - Arguments to update or create a StoreReview.
     * @example
     * // Update or create a StoreReview
     * const storeReview = await prisma.storeReview.upsert({
     *   create: {
     *     // ... data to create a StoreReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreReview we want to update
     *   }
     * })
     */
    upsert<T extends StoreReviewUpsertArgs>(args: SelectSubset<T, StoreReviewUpsertArgs<ExtArgs>>): Prisma__StoreReviewClient<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreReviewCountArgs} args - Arguments to filter StoreReviews to count.
     * @example
     * // Count the number of StoreReviews
     * const count = await prisma.storeReview.count({
     *   where: {
     *     // ... the filter for the StoreReviews we want to count
     *   }
     * })
    **/
    count<T extends StoreReviewCountArgs>(
      args?: Subset<T, StoreReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreReviewAggregateArgs>(args: Subset<T, StoreReviewAggregateArgs>): Prisma.PrismaPromise<GetStoreReviewAggregateType<T>>

    /**
     * Group by StoreReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreReviewGroupByArgs} args - Group by arguments.
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
      T extends StoreReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreReviewGroupByArgs['orderBy'] }
        : { orderBy?: StoreReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreReview model
   */
  readonly fields: StoreReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    writer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ReviewImage<T extends StoreReview$ReviewImageArgs<ExtArgs> = {}>(args?: Subset<T, StoreReview$ReviewImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReviewAnswer<T extends StoreReview$ReviewAnswerArgs<ExtArgs> = {}>(args?: Subset<T, StoreReview$ReviewAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StoreReview model
   */
  interface StoreReviewFieldRefs {
    readonly id: FieldRef<"StoreReview", 'BigInt'>
    readonly content: FieldRef<"StoreReview", 'String'>
    readonly score: FieldRef<"StoreReview", 'Decimal'>
    readonly createdAt: FieldRef<"StoreReview", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreReview", 'DateTime'>
    readonly writerId: FieldRef<"StoreReview", 'BigInt'>
    readonly storeId: FieldRef<"StoreReview", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * StoreReview findUnique
   */
  export type StoreReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    /**
     * Filter, which StoreReview to fetch.
     */
    where: StoreReviewWhereUniqueInput
  }

  /**
   * StoreReview findUniqueOrThrow
   */
  export type StoreReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    /**
     * Filter, which StoreReview to fetch.
     */
    where: StoreReviewWhereUniqueInput
  }

  /**
   * StoreReview findFirst
   */
  export type StoreReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    /**
     * Filter, which StoreReview to fetch.
     */
    where?: StoreReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreReviews to fetch.
     */
    orderBy?: StoreReviewOrderByWithRelationInput | StoreReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreReviews.
     */
    cursor?: StoreReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreReviews.
     */
    distinct?: StoreReviewScalarFieldEnum | StoreReviewScalarFieldEnum[]
  }

  /**
   * StoreReview findFirstOrThrow
   */
  export type StoreReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    /**
     * Filter, which StoreReview to fetch.
     */
    where?: StoreReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreReviews to fetch.
     */
    orderBy?: StoreReviewOrderByWithRelationInput | StoreReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreReviews.
     */
    cursor?: StoreReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreReviews.
     */
    distinct?: StoreReviewScalarFieldEnum | StoreReviewScalarFieldEnum[]
  }

  /**
   * StoreReview findMany
   */
  export type StoreReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    /**
     * Filter, which StoreReviews to fetch.
     */
    where?: StoreReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreReviews to fetch.
     */
    orderBy?: StoreReviewOrderByWithRelationInput | StoreReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreReviews.
     */
    cursor?: StoreReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreReviews.
     */
    skip?: number
    distinct?: StoreReviewScalarFieldEnum | StoreReviewScalarFieldEnum[]
  }

  /**
   * StoreReview create
   */
  export type StoreReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreReview.
     */
    data: XOR<StoreReviewCreateInput, StoreReviewUncheckedCreateInput>
  }

  /**
   * StoreReview createMany
   */
  export type StoreReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreReviews.
     */
    data: StoreReviewCreateManyInput | StoreReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreReview update
   */
  export type StoreReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreReview.
     */
    data: XOR<StoreReviewUpdateInput, StoreReviewUncheckedUpdateInput>
    /**
     * Choose, which StoreReview to update.
     */
    where: StoreReviewWhereUniqueInput
  }

  /**
   * StoreReview updateMany
   */
  export type StoreReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreReviews.
     */
    data: XOR<StoreReviewUpdateManyMutationInput, StoreReviewUncheckedUpdateManyInput>
    /**
     * Filter which StoreReviews to update
     */
    where?: StoreReviewWhereInput
    /**
     * Limit how many StoreReviews to update.
     */
    limit?: number
  }

  /**
   * StoreReview upsert
   */
  export type StoreReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreReview to update in case it exists.
     */
    where: StoreReviewWhereUniqueInput
    /**
     * In case the StoreReview found by the `where` argument doesn't exist, create a new StoreReview with this data.
     */
    create: XOR<StoreReviewCreateInput, StoreReviewUncheckedCreateInput>
    /**
     * In case the StoreReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreReviewUpdateInput, StoreReviewUncheckedUpdateInput>
  }

  /**
   * StoreReview delete
   */
  export type StoreReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
    /**
     * Filter which StoreReview to delete.
     */
    where: StoreReviewWhereUniqueInput
  }

  /**
   * StoreReview deleteMany
   */
  export type StoreReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreReviews to delete
     */
    where?: StoreReviewWhereInput
    /**
     * Limit how many StoreReviews to delete.
     */
    limit?: number
  }

  /**
   * StoreReview.ReviewImage
   */
  export type StoreReview$ReviewImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    where?: ReviewImageWhereInput
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    cursor?: ReviewImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * StoreReview.ReviewAnswer
   */
  export type StoreReview$ReviewAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
    where?: ReviewAnswerWhereInput
    orderBy?: ReviewAnswerOrderByWithRelationInput | ReviewAnswerOrderByWithRelationInput[]
    cursor?: ReviewAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewAnswerScalarFieldEnum | ReviewAnswerScalarFieldEnum[]
  }

  /**
   * StoreReview without action
   */
  export type StoreReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreReview
     */
    select?: StoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreReview
     */
    omit?: StoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreReviewInclude<ExtArgs> | null
  }


  /**
   * Model ReviewImage
   */

  export type AggregateReviewImage = {
    _count: ReviewImageCountAggregateOutputType | null
    _avg: ReviewImageAvgAggregateOutputType | null
    _sum: ReviewImageSumAggregateOutputType | null
    _min: ReviewImageMinAggregateOutputType | null
    _max: ReviewImageMaxAggregateOutputType | null
  }

  export type ReviewImageAvgAggregateOutputType = {
    id: number | null
    reviewId: number | null
  }

  export type ReviewImageSumAggregateOutputType = {
    id: bigint | null
    reviewId: bigint | null
  }

  export type ReviewImageMinAggregateOutputType = {
    id: bigint | null
    img: string | null
    reviewId: bigint | null
  }

  export type ReviewImageMaxAggregateOutputType = {
    id: bigint | null
    img: string | null
    reviewId: bigint | null
  }

  export type ReviewImageCountAggregateOutputType = {
    id: number
    img: number
    reviewId: number
    _all: number
  }


  export type ReviewImageAvgAggregateInputType = {
    id?: true
    reviewId?: true
  }

  export type ReviewImageSumAggregateInputType = {
    id?: true
    reviewId?: true
  }

  export type ReviewImageMinAggregateInputType = {
    id?: true
    img?: true
    reviewId?: true
  }

  export type ReviewImageMaxAggregateInputType = {
    id?: true
    img?: true
    reviewId?: true
  }

  export type ReviewImageCountAggregateInputType = {
    id?: true
    img?: true
    reviewId?: true
    _all?: true
  }

  export type ReviewImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewImage to aggregate.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewImages
    **/
    _count?: true | ReviewImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewImageMaxAggregateInputType
  }

  export type GetReviewImageAggregateType<T extends ReviewImageAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewImage[P]>
      : GetScalarType<T[P], AggregateReviewImage[P]>
  }




  export type ReviewImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewImageWhereInput
    orderBy?: ReviewImageOrderByWithAggregationInput | ReviewImageOrderByWithAggregationInput[]
    by: ReviewImageScalarFieldEnum[] | ReviewImageScalarFieldEnum
    having?: ReviewImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewImageCountAggregateInputType | true
    _avg?: ReviewImageAvgAggregateInputType
    _sum?: ReviewImageSumAggregateInputType
    _min?: ReviewImageMinAggregateInputType
    _max?: ReviewImageMaxAggregateInputType
  }

  export type ReviewImageGroupByOutputType = {
    id: bigint
    img: string
    reviewId: bigint
    _count: ReviewImageCountAggregateOutputType | null
    _avg: ReviewImageAvgAggregateOutputType | null
    _sum: ReviewImageSumAggregateOutputType | null
    _min: ReviewImageMinAggregateOutputType | null
    _max: ReviewImageMaxAggregateOutputType | null
  }

  type GetReviewImageGroupByPayload<T extends ReviewImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewImageGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewImageGroupByOutputType[P]>
        }
      >
    >


  export type ReviewImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img?: boolean
    reviewId?: boolean
    review?: boolean | StoreReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewImage"]>



  export type ReviewImageSelectScalar = {
    id?: boolean
    img?: boolean
    reviewId?: boolean
  }

  export type ReviewImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "img" | "reviewId", ExtArgs["result"]["reviewImage"]>
  export type ReviewImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | StoreReviewDefaultArgs<ExtArgs>
  }

  export type $ReviewImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewImage"
    objects: {
      review: Prisma.$StoreReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      img: string
      reviewId: bigint
    }, ExtArgs["result"]["reviewImage"]>
    composites: {}
  }

  type ReviewImageGetPayload<S extends boolean | null | undefined | ReviewImageDefaultArgs> = $Result.GetResult<Prisma.$ReviewImagePayload, S>

  type ReviewImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewImageCountAggregateInputType | true
    }

  export interface ReviewImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewImage'], meta: { name: 'ReviewImage' } }
    /**
     * Find zero or one ReviewImage that matches the filter.
     * @param {ReviewImageFindUniqueArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewImageFindUniqueArgs>(args: SelectSubset<T, ReviewImageFindUniqueArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewImageFindUniqueOrThrowArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageFindFirstArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewImageFindFirstArgs>(args?: SelectSubset<T, ReviewImageFindFirstArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageFindFirstOrThrowArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewImages
     * const reviewImages = await prisma.reviewImage.findMany()
     * 
     * // Get first 10 ReviewImages
     * const reviewImages = await prisma.reviewImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewImageWithIdOnly = await prisma.reviewImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewImageFindManyArgs>(args?: SelectSubset<T, ReviewImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewImage.
     * @param {ReviewImageCreateArgs} args - Arguments to create a ReviewImage.
     * @example
     * // Create one ReviewImage
     * const ReviewImage = await prisma.reviewImage.create({
     *   data: {
     *     // ... data to create a ReviewImage
     *   }
     * })
     * 
     */
    create<T extends ReviewImageCreateArgs>(args: SelectSubset<T, ReviewImageCreateArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewImages.
     * @param {ReviewImageCreateManyArgs} args - Arguments to create many ReviewImages.
     * @example
     * // Create many ReviewImages
     * const reviewImage = await prisma.reviewImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewImageCreateManyArgs>(args?: SelectSubset<T, ReviewImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewImage.
     * @param {ReviewImageDeleteArgs} args - Arguments to delete one ReviewImage.
     * @example
     * // Delete one ReviewImage
     * const ReviewImage = await prisma.reviewImage.delete({
     *   where: {
     *     // ... filter to delete one ReviewImage
     *   }
     * })
     * 
     */
    delete<T extends ReviewImageDeleteArgs>(args: SelectSubset<T, ReviewImageDeleteArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewImage.
     * @param {ReviewImageUpdateArgs} args - Arguments to update one ReviewImage.
     * @example
     * // Update one ReviewImage
     * const reviewImage = await prisma.reviewImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewImageUpdateArgs>(args: SelectSubset<T, ReviewImageUpdateArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewImages.
     * @param {ReviewImageDeleteManyArgs} args - Arguments to filter ReviewImages to delete.
     * @example
     * // Delete a few ReviewImages
     * const { count } = await prisma.reviewImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewImageDeleteManyArgs>(args?: SelectSubset<T, ReviewImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewImages
     * const reviewImage = await prisma.reviewImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewImageUpdateManyArgs>(args: SelectSubset<T, ReviewImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewImage.
     * @param {ReviewImageUpsertArgs} args - Arguments to update or create a ReviewImage.
     * @example
     * // Update or create a ReviewImage
     * const reviewImage = await prisma.reviewImage.upsert({
     *   create: {
     *     // ... data to create a ReviewImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewImage we want to update
     *   }
     * })
     */
    upsert<T extends ReviewImageUpsertArgs>(args: SelectSubset<T, ReviewImageUpsertArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageCountArgs} args - Arguments to filter ReviewImages to count.
     * @example
     * // Count the number of ReviewImages
     * const count = await prisma.reviewImage.count({
     *   where: {
     *     // ... the filter for the ReviewImages we want to count
     *   }
     * })
    **/
    count<T extends ReviewImageCountArgs>(
      args?: Subset<T, ReviewImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewImageAggregateArgs>(args: Subset<T, ReviewImageAggregateArgs>): Prisma.PrismaPromise<GetReviewImageAggregateType<T>>

    /**
     * Group by ReviewImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageGroupByArgs} args - Group by arguments.
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
      T extends ReviewImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewImageGroupByArgs['orderBy'] }
        : { orderBy?: ReviewImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewImage model
   */
  readonly fields: ReviewImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends StoreReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreReviewDefaultArgs<ExtArgs>>): Prisma__StoreReviewClient<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewImage model
   */
  interface ReviewImageFieldRefs {
    readonly id: FieldRef<"ReviewImage", 'BigInt'>
    readonly img: FieldRef<"ReviewImage", 'String'>
    readonly reviewId: FieldRef<"ReviewImage", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ReviewImage findUnique
   */
  export type ReviewImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage findUniqueOrThrow
   */
  export type ReviewImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage findFirst
   */
  export type ReviewImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewImages.
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewImages.
     */
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * ReviewImage findFirstOrThrow
   */
  export type ReviewImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewImages.
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewImages.
     */
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * ReviewImage findMany
   */
  export type ReviewImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ReviewImages to fetch.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewImages.
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * ReviewImage create
   */
  export type ReviewImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewImage.
     */
    data: XOR<ReviewImageCreateInput, ReviewImageUncheckedCreateInput>
  }

  /**
   * ReviewImage createMany
   */
  export type ReviewImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewImages.
     */
    data: ReviewImageCreateManyInput | ReviewImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewImage update
   */
  export type ReviewImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewImage.
     */
    data: XOR<ReviewImageUpdateInput, ReviewImageUncheckedUpdateInput>
    /**
     * Choose, which ReviewImage to update.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage updateMany
   */
  export type ReviewImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewImages.
     */
    data: XOR<ReviewImageUpdateManyMutationInput, ReviewImageUncheckedUpdateManyInput>
    /**
     * Filter which ReviewImages to update
     */
    where?: ReviewImageWhereInput
    /**
     * Limit how many ReviewImages to update.
     */
    limit?: number
  }

  /**
   * ReviewImage upsert
   */
  export type ReviewImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewImage to update in case it exists.
     */
    where: ReviewImageWhereUniqueInput
    /**
     * In case the ReviewImage found by the `where` argument doesn't exist, create a new ReviewImage with this data.
     */
    create: XOR<ReviewImageCreateInput, ReviewImageUncheckedCreateInput>
    /**
     * In case the ReviewImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewImageUpdateInput, ReviewImageUncheckedUpdateInput>
  }

  /**
   * ReviewImage delete
   */
  export type ReviewImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter which ReviewImage to delete.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage deleteMany
   */
  export type ReviewImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewImages to delete
     */
    where?: ReviewImageWhereInput
    /**
     * Limit how many ReviewImages to delete.
     */
    limit?: number
  }

  /**
   * ReviewImage without action
   */
  export type ReviewImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
  }


  /**
   * Model ReviewAnswer
   */

  export type AggregateReviewAnswer = {
    _count: ReviewAnswerCountAggregateOutputType | null
    _avg: ReviewAnswerAvgAggregateOutputType | null
    _sum: ReviewAnswerSumAggregateOutputType | null
    _min: ReviewAnswerMinAggregateOutputType | null
    _max: ReviewAnswerMaxAggregateOutputType | null
  }

  export type ReviewAnswerAvgAggregateOutputType = {
    reviewId: number | null
  }

  export type ReviewAnswerSumAggregateOutputType = {
    reviewId: bigint | null
  }

  export type ReviewAnswerMinAggregateOutputType = {
    reviewId: bigint | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewAnswerMaxAggregateOutputType = {
    reviewId: bigint | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewAnswerCountAggregateOutputType = {
    reviewId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAnswerAvgAggregateInputType = {
    reviewId?: true
  }

  export type ReviewAnswerSumAggregateInputType = {
    reviewId?: true
  }

  export type ReviewAnswerMinAggregateInputType = {
    reviewId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewAnswerMaxAggregateInputType = {
    reviewId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewAnswerCountAggregateInputType = {
    reviewId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewAnswer to aggregate.
     */
    where?: ReviewAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewAnswers to fetch.
     */
    orderBy?: ReviewAnswerOrderByWithRelationInput | ReviewAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewAnswers
    **/
    _count?: true | ReviewAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewAnswerMaxAggregateInputType
  }

  export type GetReviewAnswerAggregateType<T extends ReviewAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewAnswer[P]>
      : GetScalarType<T[P], AggregateReviewAnswer[P]>
  }




  export type ReviewAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewAnswerWhereInput
    orderBy?: ReviewAnswerOrderByWithAggregationInput | ReviewAnswerOrderByWithAggregationInput[]
    by: ReviewAnswerScalarFieldEnum[] | ReviewAnswerScalarFieldEnum
    having?: ReviewAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewAnswerCountAggregateInputType | true
    _avg?: ReviewAnswerAvgAggregateInputType
    _sum?: ReviewAnswerSumAggregateInputType
    _min?: ReviewAnswerMinAggregateInputType
    _max?: ReviewAnswerMaxAggregateInputType
  }

  export type ReviewAnswerGroupByOutputType = {
    reviewId: bigint
    content: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewAnswerCountAggregateOutputType | null
    _avg: ReviewAnswerAvgAggregateOutputType | null
    _sum: ReviewAnswerSumAggregateOutputType | null
    _min: ReviewAnswerMinAggregateOutputType | null
    _max: ReviewAnswerMaxAggregateOutputType | null
  }

  type GetReviewAnswerGroupByPayload<T extends ReviewAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewAnswerGroupByOutputType[P]>
        }
      >
    >


  export type ReviewAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reviewId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | StoreReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewAnswer"]>



  export type ReviewAnswerSelectScalar = {
    reviewId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reviewId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["reviewAnswer"]>
  export type ReviewAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | StoreReviewDefaultArgs<ExtArgs>
  }

  export type $ReviewAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewAnswer"
    objects: {
      review: Prisma.$StoreReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reviewId: bigint
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reviewAnswer"]>
    composites: {}
  }

  type ReviewAnswerGetPayload<S extends boolean | null | undefined | ReviewAnswerDefaultArgs> = $Result.GetResult<Prisma.$ReviewAnswerPayload, S>

  type ReviewAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewAnswerCountAggregateInputType | true
    }

  export interface ReviewAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewAnswer'], meta: { name: 'ReviewAnswer' } }
    /**
     * Find zero or one ReviewAnswer that matches the filter.
     * @param {ReviewAnswerFindUniqueArgs} args - Arguments to find a ReviewAnswer
     * @example
     * // Get one ReviewAnswer
     * const reviewAnswer = await prisma.reviewAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewAnswerFindUniqueArgs>(args: SelectSubset<T, ReviewAnswerFindUniqueArgs<ExtArgs>>): Prisma__ReviewAnswerClient<$Result.GetResult<Prisma.$ReviewAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewAnswerFindUniqueOrThrowArgs} args - Arguments to find a ReviewAnswer
     * @example
     * // Get one ReviewAnswer
     * const reviewAnswer = await prisma.reviewAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewAnswerClient<$Result.GetResult<Prisma.$ReviewAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAnswerFindFirstArgs} args - Arguments to find a ReviewAnswer
     * @example
     * // Get one ReviewAnswer
     * const reviewAnswer = await prisma.reviewAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewAnswerFindFirstArgs>(args?: SelectSubset<T, ReviewAnswerFindFirstArgs<ExtArgs>>): Prisma__ReviewAnswerClient<$Result.GetResult<Prisma.$ReviewAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAnswerFindFirstOrThrowArgs} args - Arguments to find a ReviewAnswer
     * @example
     * // Get one ReviewAnswer
     * const reviewAnswer = await prisma.reviewAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewAnswerClient<$Result.GetResult<Prisma.$ReviewAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewAnswers
     * const reviewAnswers = await prisma.reviewAnswer.findMany()
     * 
     * // Get first 10 ReviewAnswers
     * const reviewAnswers = await prisma.reviewAnswer.findMany({ take: 10 })
     * 
     * // Only select the `reviewId`
     * const reviewAnswerWithReviewIdOnly = await prisma.reviewAnswer.findMany({ select: { reviewId: true } })
     * 
     */
    findMany<T extends ReviewAnswerFindManyArgs>(args?: SelectSubset<T, ReviewAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewAnswer.
     * @param {ReviewAnswerCreateArgs} args - Arguments to create a ReviewAnswer.
     * @example
     * // Create one ReviewAnswer
     * const ReviewAnswer = await prisma.reviewAnswer.create({
     *   data: {
     *     // ... data to create a ReviewAnswer
     *   }
     * })
     * 
     */
    create<T extends ReviewAnswerCreateArgs>(args: SelectSubset<T, ReviewAnswerCreateArgs<ExtArgs>>): Prisma__ReviewAnswerClient<$Result.GetResult<Prisma.$ReviewAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewAnswers.
     * @param {ReviewAnswerCreateManyArgs} args - Arguments to create many ReviewAnswers.
     * @example
     * // Create many ReviewAnswers
     * const reviewAnswer = await prisma.reviewAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewAnswerCreateManyArgs>(args?: SelectSubset<T, ReviewAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewAnswer.
     * @param {ReviewAnswerDeleteArgs} args - Arguments to delete one ReviewAnswer.
     * @example
     * // Delete one ReviewAnswer
     * const ReviewAnswer = await prisma.reviewAnswer.delete({
     *   where: {
     *     // ... filter to delete one ReviewAnswer
     *   }
     * })
     * 
     */
    delete<T extends ReviewAnswerDeleteArgs>(args: SelectSubset<T, ReviewAnswerDeleteArgs<ExtArgs>>): Prisma__ReviewAnswerClient<$Result.GetResult<Prisma.$ReviewAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewAnswer.
     * @param {ReviewAnswerUpdateArgs} args - Arguments to update one ReviewAnswer.
     * @example
     * // Update one ReviewAnswer
     * const reviewAnswer = await prisma.reviewAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewAnswerUpdateArgs>(args: SelectSubset<T, ReviewAnswerUpdateArgs<ExtArgs>>): Prisma__ReviewAnswerClient<$Result.GetResult<Prisma.$ReviewAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewAnswers.
     * @param {ReviewAnswerDeleteManyArgs} args - Arguments to filter ReviewAnswers to delete.
     * @example
     * // Delete a few ReviewAnswers
     * const { count } = await prisma.reviewAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewAnswerDeleteManyArgs>(args?: SelectSubset<T, ReviewAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewAnswers
     * const reviewAnswer = await prisma.reviewAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewAnswerUpdateManyArgs>(args: SelectSubset<T, ReviewAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewAnswer.
     * @param {ReviewAnswerUpsertArgs} args - Arguments to update or create a ReviewAnswer.
     * @example
     * // Update or create a ReviewAnswer
     * const reviewAnswer = await prisma.reviewAnswer.upsert({
     *   create: {
     *     // ... data to create a ReviewAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewAnswer we want to update
     *   }
     * })
     */
    upsert<T extends ReviewAnswerUpsertArgs>(args: SelectSubset<T, ReviewAnswerUpsertArgs<ExtArgs>>): Prisma__ReviewAnswerClient<$Result.GetResult<Prisma.$ReviewAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAnswerCountArgs} args - Arguments to filter ReviewAnswers to count.
     * @example
     * // Count the number of ReviewAnswers
     * const count = await prisma.reviewAnswer.count({
     *   where: {
     *     // ... the filter for the ReviewAnswers we want to count
     *   }
     * })
    **/
    count<T extends ReviewAnswerCountArgs>(
      args?: Subset<T, ReviewAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAnswerAggregateArgs>(args: Subset<T, ReviewAnswerAggregateArgs>): Prisma.PrismaPromise<GetReviewAnswerAggregateType<T>>

    /**
     * Group by ReviewAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAnswerGroupByArgs} args - Group by arguments.
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
      T extends ReviewAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewAnswerGroupByArgs['orderBy'] }
        : { orderBy?: ReviewAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewAnswer model
   */
  readonly fields: ReviewAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends StoreReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreReviewDefaultArgs<ExtArgs>>): Prisma__StoreReviewClient<$Result.GetResult<Prisma.$StoreReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewAnswer model
   */
  interface ReviewAnswerFieldRefs {
    readonly reviewId: FieldRef<"ReviewAnswer", 'BigInt'>
    readonly content: FieldRef<"ReviewAnswer", 'String'>
    readonly createdAt: FieldRef<"ReviewAnswer", 'DateTime'>
    readonly updatedAt: FieldRef<"ReviewAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewAnswer findUnique
   */
  export type ReviewAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ReviewAnswer to fetch.
     */
    where: ReviewAnswerWhereUniqueInput
  }

  /**
   * ReviewAnswer findUniqueOrThrow
   */
  export type ReviewAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ReviewAnswer to fetch.
     */
    where: ReviewAnswerWhereUniqueInput
  }

  /**
   * ReviewAnswer findFirst
   */
  export type ReviewAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ReviewAnswer to fetch.
     */
    where?: ReviewAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewAnswers to fetch.
     */
    orderBy?: ReviewAnswerOrderByWithRelationInput | ReviewAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewAnswers.
     */
    cursor?: ReviewAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewAnswers.
     */
    distinct?: ReviewAnswerScalarFieldEnum | ReviewAnswerScalarFieldEnum[]
  }

  /**
   * ReviewAnswer findFirstOrThrow
   */
  export type ReviewAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ReviewAnswer to fetch.
     */
    where?: ReviewAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewAnswers to fetch.
     */
    orderBy?: ReviewAnswerOrderByWithRelationInput | ReviewAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewAnswers.
     */
    cursor?: ReviewAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewAnswers.
     */
    distinct?: ReviewAnswerScalarFieldEnum | ReviewAnswerScalarFieldEnum[]
  }

  /**
   * ReviewAnswer findMany
   */
  export type ReviewAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ReviewAnswers to fetch.
     */
    where?: ReviewAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewAnswers to fetch.
     */
    orderBy?: ReviewAnswerOrderByWithRelationInput | ReviewAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewAnswers.
     */
    cursor?: ReviewAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewAnswers.
     */
    skip?: number
    distinct?: ReviewAnswerScalarFieldEnum | ReviewAnswerScalarFieldEnum[]
  }

  /**
   * ReviewAnswer create
   */
  export type ReviewAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewAnswer.
     */
    data: XOR<ReviewAnswerCreateInput, ReviewAnswerUncheckedCreateInput>
  }

  /**
   * ReviewAnswer createMany
   */
  export type ReviewAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewAnswers.
     */
    data: ReviewAnswerCreateManyInput | ReviewAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewAnswer update
   */
  export type ReviewAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewAnswer.
     */
    data: XOR<ReviewAnswerUpdateInput, ReviewAnswerUncheckedUpdateInput>
    /**
     * Choose, which ReviewAnswer to update.
     */
    where: ReviewAnswerWhereUniqueInput
  }

  /**
   * ReviewAnswer updateMany
   */
  export type ReviewAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewAnswers.
     */
    data: XOR<ReviewAnswerUpdateManyMutationInput, ReviewAnswerUncheckedUpdateManyInput>
    /**
     * Filter which ReviewAnswers to update
     */
    where?: ReviewAnswerWhereInput
    /**
     * Limit how many ReviewAnswers to update.
     */
    limit?: number
  }

  /**
   * ReviewAnswer upsert
   */
  export type ReviewAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewAnswer to update in case it exists.
     */
    where: ReviewAnswerWhereUniqueInput
    /**
     * In case the ReviewAnswer found by the `where` argument doesn't exist, create a new ReviewAnswer with this data.
     */
    create: XOR<ReviewAnswerCreateInput, ReviewAnswerUncheckedCreateInput>
    /**
     * In case the ReviewAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewAnswerUpdateInput, ReviewAnswerUncheckedUpdateInput>
  }

  /**
   * ReviewAnswer delete
   */
  export type ReviewAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
    /**
     * Filter which ReviewAnswer to delete.
     */
    where: ReviewAnswerWhereUniqueInput
  }

  /**
   * ReviewAnswer deleteMany
   */
  export type ReviewAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewAnswers to delete
     */
    where?: ReviewAnswerWhereInput
    /**
     * Limit how many ReviewAnswers to delete.
     */
    limit?: number
  }

  /**
   * ReviewAnswer without action
   */
  export type ReviewAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewAnswer
     */
    select?: ReviewAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewAnswer
     */
    omit?: ReviewAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewAnswerInclude<ExtArgs> | null
  }


  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type InquirySumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type InquiryMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    content: string | null
    itype: $Enums.InquiryType | null
    status: $Enums.InquiryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: bigint | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    content: string | null
    itype: $Enums.InquiryType | null
    status: $Enums.InquiryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: bigint | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    title: number
    content: number
    itype: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type InquiryAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InquirySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InquiryMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    itype?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    itype?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    itype?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type InquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: InquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _avg?: InquiryAvgAggregateInputType
    _sum?: InquirySumAggregateInputType
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: bigint
    title: string
    content: string
    itype: $Enums.InquiryType
    status: $Enums.InquiryStatus
    createdAt: Date
    updatedAt: Date
    userId: bigint
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    itype?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    InquiryImage?: boolean | Inquiry$InquiryImageArgs<ExtArgs>
    _count?: boolean | InquiryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>



  export type InquirySelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    itype?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type InquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "itype" | "status" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["inquiry"]>
  export type InquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    InquiryImage?: boolean | Inquiry$InquiryImageArgs<ExtArgs>
    _count?: boolean | InquiryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquiry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      InquiryImage: Prisma.$InquiryImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      content: string
      itype: $Enums.InquiryType
      status: $Enums.InquiryStatus
      createdAt: Date
      updatedAt: Date
      userId: bigint
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> = $Result.GetResult<Prisma.$InquiryPayload, S>

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface InquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry'], meta: { name: 'Inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryFindManyArgs>(args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends InquiryCreateArgs>(args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryCreateManyArgs>(args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends InquiryDeleteArgs>(args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryUpdateArgs>(args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryDeleteManyArgs>(args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryUpdateManyArgs>(args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
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
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquiry model
   */
  readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    InquiryImage<T extends Inquiry$InquiryImageArgs<ExtArgs> = {}>(args?: Subset<T, Inquiry$InquiryImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Inquiry model
   */
  interface InquiryFieldRefs {
    readonly id: FieldRef<"Inquiry", 'BigInt'>
    readonly title: FieldRef<"Inquiry", 'String'>
    readonly content: FieldRef<"Inquiry", 'String'>
    readonly itype: FieldRef<"Inquiry", 'InquiryType'>
    readonly status: FieldRef<"Inquiry", 'InquiryStatus'>
    readonly createdAt: FieldRef<"Inquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"Inquiry", 'DateTime'>
    readonly userId: FieldRef<"Inquiry", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
  }

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
  }

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to delete.
     */
    limit?: number
  }

  /**
   * Inquiry.InquiryImage
   */
  export type Inquiry$InquiryImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
    where?: InquiryImageWhereInput
    orderBy?: InquiryImageOrderByWithRelationInput | InquiryImageOrderByWithRelationInput[]
    cursor?: InquiryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryImageScalarFieldEnum | InquiryImageScalarFieldEnum[]
  }

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
  }


  /**
   * Model InquiryImage
   */

  export type AggregateInquiryImage = {
    _count: InquiryImageCountAggregateOutputType | null
    _avg: InquiryImageAvgAggregateOutputType | null
    _sum: InquiryImageSumAggregateOutputType | null
    _min: InquiryImageMinAggregateOutputType | null
    _max: InquiryImageMaxAggregateOutputType | null
  }

  export type InquiryImageAvgAggregateOutputType = {
    id: number | null
    inquiryId: number | null
  }

  export type InquiryImageSumAggregateOutputType = {
    id: bigint | null
    inquiryId: bigint | null
  }

  export type InquiryImageMinAggregateOutputType = {
    id: bigint | null
    img: string | null
    inquiryId: bigint | null
  }

  export type InquiryImageMaxAggregateOutputType = {
    id: bigint | null
    img: string | null
    inquiryId: bigint | null
  }

  export type InquiryImageCountAggregateOutputType = {
    id: number
    img: number
    inquiryId: number
    _all: number
  }


  export type InquiryImageAvgAggregateInputType = {
    id?: true
    inquiryId?: true
  }

  export type InquiryImageSumAggregateInputType = {
    id?: true
    inquiryId?: true
  }

  export type InquiryImageMinAggregateInputType = {
    id?: true
    img?: true
    inquiryId?: true
  }

  export type InquiryImageMaxAggregateInputType = {
    id?: true
    img?: true
    inquiryId?: true
  }

  export type InquiryImageCountAggregateInputType = {
    id?: true
    img?: true
    inquiryId?: true
    _all?: true
  }

  export type InquiryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InquiryImage to aggregate.
     */
    where?: InquiryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryImages to fetch.
     */
    orderBy?: InquiryImageOrderByWithRelationInput | InquiryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InquiryImages
    **/
    _count?: true | InquiryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InquiryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InquiryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryImageMaxAggregateInputType
  }

  export type GetInquiryImageAggregateType<T extends InquiryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiryImage[P]>
      : GetScalarType<T[P], AggregateInquiryImage[P]>
  }




  export type InquiryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryImageWhereInput
    orderBy?: InquiryImageOrderByWithAggregationInput | InquiryImageOrderByWithAggregationInput[]
    by: InquiryImageScalarFieldEnum[] | InquiryImageScalarFieldEnum
    having?: InquiryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryImageCountAggregateInputType | true
    _avg?: InquiryImageAvgAggregateInputType
    _sum?: InquiryImageSumAggregateInputType
    _min?: InquiryImageMinAggregateInputType
    _max?: InquiryImageMaxAggregateInputType
  }

  export type InquiryImageGroupByOutputType = {
    id: bigint
    img: string
    inquiryId: bigint
    _count: InquiryImageCountAggregateOutputType | null
    _avg: InquiryImageAvgAggregateOutputType | null
    _sum: InquiryImageSumAggregateOutputType | null
    _min: InquiryImageMinAggregateOutputType | null
    _max: InquiryImageMaxAggregateOutputType | null
  }

  type GetInquiryImageGroupByPayload<T extends InquiryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryImageGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryImageGroupByOutputType[P]>
        }
      >
    >


  export type InquiryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img?: boolean
    inquiryId?: boolean
    inquiry?: boolean | InquiryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiryImage"]>



  export type InquiryImageSelectScalar = {
    id?: boolean
    img?: boolean
    inquiryId?: boolean
  }

  export type InquiryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "img" | "inquiryId", ExtArgs["result"]["inquiryImage"]>
  export type InquiryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inquiry?: boolean | InquiryDefaultArgs<ExtArgs>
  }

  export type $InquiryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InquiryImage"
    objects: {
      inquiry: Prisma.$InquiryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      img: string
      inquiryId: bigint
    }, ExtArgs["result"]["inquiryImage"]>
    composites: {}
  }

  type InquiryImageGetPayload<S extends boolean | null | undefined | InquiryImageDefaultArgs> = $Result.GetResult<Prisma.$InquiryImagePayload, S>

  type InquiryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryImageCountAggregateInputType | true
    }

  export interface InquiryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InquiryImage'], meta: { name: 'InquiryImage' } }
    /**
     * Find zero or one InquiryImage that matches the filter.
     * @param {InquiryImageFindUniqueArgs} args - Arguments to find a InquiryImage
     * @example
     * // Get one InquiryImage
     * const inquiryImage = await prisma.inquiryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryImageFindUniqueArgs>(args: SelectSubset<T, InquiryImageFindUniqueArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InquiryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryImageFindUniqueOrThrowArgs} args - Arguments to find a InquiryImage
     * @example
     * // Get one InquiryImage
     * const inquiryImage = await prisma.inquiryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InquiryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageFindFirstArgs} args - Arguments to find a InquiryImage
     * @example
     * // Get one InquiryImage
     * const inquiryImage = await prisma.inquiryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryImageFindFirstArgs>(args?: SelectSubset<T, InquiryImageFindFirstArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InquiryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageFindFirstOrThrowArgs} args - Arguments to find a InquiryImage
     * @example
     * // Get one InquiryImage
     * const inquiryImage = await prisma.inquiryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InquiryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InquiryImages
     * const inquiryImages = await prisma.inquiryImage.findMany()
     * 
     * // Get first 10 InquiryImages
     * const inquiryImages = await prisma.inquiryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryImageWithIdOnly = await prisma.inquiryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryImageFindManyArgs>(args?: SelectSubset<T, InquiryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InquiryImage.
     * @param {InquiryImageCreateArgs} args - Arguments to create a InquiryImage.
     * @example
     * // Create one InquiryImage
     * const InquiryImage = await prisma.inquiryImage.create({
     *   data: {
     *     // ... data to create a InquiryImage
     *   }
     * })
     * 
     */
    create<T extends InquiryImageCreateArgs>(args: SelectSubset<T, InquiryImageCreateArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InquiryImages.
     * @param {InquiryImageCreateManyArgs} args - Arguments to create many InquiryImages.
     * @example
     * // Create many InquiryImages
     * const inquiryImage = await prisma.inquiryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryImageCreateManyArgs>(args?: SelectSubset<T, InquiryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InquiryImage.
     * @param {InquiryImageDeleteArgs} args - Arguments to delete one InquiryImage.
     * @example
     * // Delete one InquiryImage
     * const InquiryImage = await prisma.inquiryImage.delete({
     *   where: {
     *     // ... filter to delete one InquiryImage
     *   }
     * })
     * 
     */
    delete<T extends InquiryImageDeleteArgs>(args: SelectSubset<T, InquiryImageDeleteArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InquiryImage.
     * @param {InquiryImageUpdateArgs} args - Arguments to update one InquiryImage.
     * @example
     * // Update one InquiryImage
     * const inquiryImage = await prisma.inquiryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryImageUpdateArgs>(args: SelectSubset<T, InquiryImageUpdateArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InquiryImages.
     * @param {InquiryImageDeleteManyArgs} args - Arguments to filter InquiryImages to delete.
     * @example
     * // Delete a few InquiryImages
     * const { count } = await prisma.inquiryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryImageDeleteManyArgs>(args?: SelectSubset<T, InquiryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InquiryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InquiryImages
     * const inquiryImage = await prisma.inquiryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryImageUpdateManyArgs>(args: SelectSubset<T, InquiryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InquiryImage.
     * @param {InquiryImageUpsertArgs} args - Arguments to update or create a InquiryImage.
     * @example
     * // Update or create a InquiryImage
     * const inquiryImage = await prisma.inquiryImage.upsert({
     *   create: {
     *     // ... data to create a InquiryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InquiryImage we want to update
     *   }
     * })
     */
    upsert<T extends InquiryImageUpsertArgs>(args: SelectSubset<T, InquiryImageUpsertArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InquiryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageCountArgs} args - Arguments to filter InquiryImages to count.
     * @example
     * // Count the number of InquiryImages
     * const count = await prisma.inquiryImage.count({
     *   where: {
     *     // ... the filter for the InquiryImages we want to count
     *   }
     * })
    **/
    count<T extends InquiryImageCountArgs>(
      args?: Subset<T, InquiryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InquiryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryImageAggregateArgs>(args: Subset<T, InquiryImageAggregateArgs>): Prisma.PrismaPromise<GetInquiryImageAggregateType<T>>

    /**
     * Group by InquiryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageGroupByArgs} args - Group by arguments.
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
      T extends InquiryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryImageGroupByArgs['orderBy'] }
        : { orderBy?: InquiryImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InquiryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InquiryImage model
   */
  readonly fields: InquiryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InquiryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inquiry<T extends InquiryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InquiryDefaultArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InquiryImage model
   */
  interface InquiryImageFieldRefs {
    readonly id: FieldRef<"InquiryImage", 'BigInt'>
    readonly img: FieldRef<"InquiryImage", 'String'>
    readonly inquiryId: FieldRef<"InquiryImage", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * InquiryImage findUnique
   */
  export type InquiryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
    /**
     * Filter, which InquiryImage to fetch.
     */
    where: InquiryImageWhereUniqueInput
  }

  /**
   * InquiryImage findUniqueOrThrow
   */
  export type InquiryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
    /**
     * Filter, which InquiryImage to fetch.
     */
    where: InquiryImageWhereUniqueInput
  }

  /**
   * InquiryImage findFirst
   */
  export type InquiryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
    /**
     * Filter, which InquiryImage to fetch.
     */
    where?: InquiryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryImages to fetch.
     */
    orderBy?: InquiryImageOrderByWithRelationInput | InquiryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InquiryImages.
     */
    cursor?: InquiryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InquiryImages.
     */
    distinct?: InquiryImageScalarFieldEnum | InquiryImageScalarFieldEnum[]
  }

  /**
   * InquiryImage findFirstOrThrow
   */
  export type InquiryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
    /**
     * Filter, which InquiryImage to fetch.
     */
    where?: InquiryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryImages to fetch.
     */
    orderBy?: InquiryImageOrderByWithRelationInput | InquiryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InquiryImages.
     */
    cursor?: InquiryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InquiryImages.
     */
    distinct?: InquiryImageScalarFieldEnum | InquiryImageScalarFieldEnum[]
  }

  /**
   * InquiryImage findMany
   */
  export type InquiryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
    /**
     * Filter, which InquiryImages to fetch.
     */
    where?: InquiryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryImages to fetch.
     */
    orderBy?: InquiryImageOrderByWithRelationInput | InquiryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InquiryImages.
     */
    cursor?: InquiryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryImages.
     */
    skip?: number
    distinct?: InquiryImageScalarFieldEnum | InquiryImageScalarFieldEnum[]
  }

  /**
   * InquiryImage create
   */
  export type InquiryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a InquiryImage.
     */
    data: XOR<InquiryImageCreateInput, InquiryImageUncheckedCreateInput>
  }

  /**
   * InquiryImage createMany
   */
  export type InquiryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InquiryImages.
     */
    data: InquiryImageCreateManyInput | InquiryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InquiryImage update
   */
  export type InquiryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a InquiryImage.
     */
    data: XOR<InquiryImageUpdateInput, InquiryImageUncheckedUpdateInput>
    /**
     * Choose, which InquiryImage to update.
     */
    where: InquiryImageWhereUniqueInput
  }

  /**
   * InquiryImage updateMany
   */
  export type InquiryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InquiryImages.
     */
    data: XOR<InquiryImageUpdateManyMutationInput, InquiryImageUncheckedUpdateManyInput>
    /**
     * Filter which InquiryImages to update
     */
    where?: InquiryImageWhereInput
    /**
     * Limit how many InquiryImages to update.
     */
    limit?: number
  }

  /**
   * InquiryImage upsert
   */
  export type InquiryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the InquiryImage to update in case it exists.
     */
    where: InquiryImageWhereUniqueInput
    /**
     * In case the InquiryImage found by the `where` argument doesn't exist, create a new InquiryImage with this data.
     */
    create: XOR<InquiryImageCreateInput, InquiryImageUncheckedCreateInput>
    /**
     * In case the InquiryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryImageUpdateInput, InquiryImageUncheckedUpdateInput>
  }

  /**
   * InquiryImage delete
   */
  export type InquiryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
    /**
     * Filter which InquiryImage to delete.
     */
    where: InquiryImageWhereUniqueInput
  }

  /**
   * InquiryImage deleteMany
   */
  export type InquiryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InquiryImages to delete
     */
    where?: InquiryImageWhereInput
    /**
     * Limit how many InquiryImages to delete.
     */
    limit?: number
  }

  /**
   * InquiryImage without action
   */
  export type InquiryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryImageInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    birth: 'birth',
    address: 'address',
    detailAddress: 'detailAddress',
    nickname: 'nickname',
    email: 'email',
    phone: 'phone',
    isPhoneVerified: 'isPhoneVerified',
    points: 'points',
    provider: 'provider',
    providerId: 'providerId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    inactiveDate: 'inactiveDate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TermsScalarFieldEnum: {
    id: 'id',
    isOverFourteen: 'isOverFourteen',
    agreedToTermsOfService: 'agreedToTermsOfService',
    agreedToPrivacyPolicy: 'agreedToPrivacyPolicy',
    agreedToLocationServices: 'agreedToLocationServices',
    agreedToMarketingEmails: 'agreedToMarketingEmails',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type TermsScalarFieldEnum = (typeof TermsScalarFieldEnum)[keyof typeof TermsScalarFieldEnum]


  export const PreferCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PreferCategoryScalarFieldEnum = (typeof PreferCategoryScalarFieldEnum)[keyof typeof PreferCategoryScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const UserPreferScalarFieldEnum: {
    userId: 'userId',
    preferCategoryId: 'preferCategoryId'
  };

  export type UserPreferScalarFieldEnum = (typeof UserPreferScalarFieldEnum)[keyof typeof UserPreferScalarFieldEnum]


  export const UserRegionScalarFieldEnum: {
    userId: 'userId',
    regionId: 'regionId',
    successCount: 'successCount',
    hasBonus: 'hasBonus'
  };

  export type UserRegionScalarFieldEnum = (typeof UserRegionScalarFieldEnum)[keyof typeof UserRegionScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    stype: 'stype',
    total: 'total',
    count: 'count',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const StoreImageScalarFieldEnum: {
    id: 'id',
    img: 'img',
    storeId: 'storeId'
  };

  export type StoreImageScalarFieldEnum = (typeof StoreImageScalarFieldEnum)[keyof typeof StoreImageScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    money: 'money',
    points: 'points',
    storeId: 'storeId',
    regionId: 'regionId'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const UserMissionScalarFieldEnum: {
    userId: 'userId',
    missionId: 'missionId',
    status: 'status',
    acceptedAt: 'acceptedAt',
    completedAt: 'completedAt'
  };

  export type UserMissionScalarFieldEnum = (typeof UserMissionScalarFieldEnum)[keyof typeof UserMissionScalarFieldEnum]


  export const StoreReviewScalarFieldEnum: {
    id: 'id',
    content: 'content',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    writerId: 'writerId',
    storeId: 'storeId'
  };

  export type StoreReviewScalarFieldEnum = (typeof StoreReviewScalarFieldEnum)[keyof typeof StoreReviewScalarFieldEnum]


  export const ReviewImageScalarFieldEnum: {
    id: 'id',
    img: 'img',
    reviewId: 'reviewId'
  };

  export type ReviewImageScalarFieldEnum = (typeof ReviewImageScalarFieldEnum)[keyof typeof ReviewImageScalarFieldEnum]


  export const ReviewAnswerScalarFieldEnum: {
    reviewId: 'reviewId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewAnswerScalarFieldEnum = (typeof ReviewAnswerScalarFieldEnum)[keyof typeof ReviewAnswerScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    itype: 'itype',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const InquiryImageScalarFieldEnum: {
    id: 'id',
    img: 'img',
    inquiryId: 'inquiryId'
  };

  export type InquiryImageScalarFieldEnum = (typeof InquiryImageScalarFieldEnum)[keyof typeof InquiryImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address',
    detailAddress: 'detailAddress',
    nickname: 'nickname',
    email: 'email',
    phone: 'phone',
    providerId: 'providerId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PreferCategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type PreferCategoryOrderByRelevanceFieldEnum = (typeof PreferCategoryOrderByRelevanceFieldEnum)[keyof typeof PreferCategoryOrderByRelevanceFieldEnum]


  export const RegionOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RegionOrderByRelevanceFieldEnum = (typeof RegionOrderByRelevanceFieldEnum)[keyof typeof RegionOrderByRelevanceFieldEnum]


  export const StoreOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address',
    stype: 'stype'
  };

  export type StoreOrderByRelevanceFieldEnum = (typeof StoreOrderByRelevanceFieldEnum)[keyof typeof StoreOrderByRelevanceFieldEnum]


  export const StoreImageOrderByRelevanceFieldEnum: {
    img: 'img'
  };

  export type StoreImageOrderByRelevanceFieldEnum = (typeof StoreImageOrderByRelevanceFieldEnum)[keyof typeof StoreImageOrderByRelevanceFieldEnum]


  export const StoreReviewOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type StoreReviewOrderByRelevanceFieldEnum = (typeof StoreReviewOrderByRelevanceFieldEnum)[keyof typeof StoreReviewOrderByRelevanceFieldEnum]


  export const ReviewImageOrderByRelevanceFieldEnum: {
    img: 'img'
  };

  export type ReviewImageOrderByRelevanceFieldEnum = (typeof ReviewImageOrderByRelevanceFieldEnum)[keyof typeof ReviewImageOrderByRelevanceFieldEnum]


  export const ReviewAnswerOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type ReviewAnswerOrderByRelevanceFieldEnum = (typeof ReviewAnswerOrderByRelevanceFieldEnum)[keyof typeof ReviewAnswerOrderByRelevanceFieldEnum]


  export const InquiryOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type InquiryOrderByRelevanceFieldEnum = (typeof InquiryOrderByRelevanceFieldEnum)[keyof typeof InquiryOrderByRelevanceFieldEnum]


  export const InquiryImageOrderByRelevanceFieldEnum: {
    img: 'img'
  };

  export type InquiryImageOrderByRelevanceFieldEnum = (typeof InquiryImageOrderByRelevanceFieldEnum)[keyof typeof InquiryImageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'UserMissionStatus'
   */
  export type EnumUserMissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserMissionStatus'>
    


  /**
   * Reference to a field of type 'InquiryType'
   */
  export type EnumInquiryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryType'>
    


  /**
   * Reference to a field of type 'InquiryStatus'
   */
  export type EnumInquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    name?: StringFilter<"User"> | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    birth?: DateTimeFilter<"User"> | Date | string
    address?: StringFilter<"User"> | string
    detailAddress?: StringNullableFilter<"User"> | string | null
    nickname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    isPhoneVerified?: BoolFilter<"User"> | boolean
    points?: BigIntFilter<"User"> | bigint | number
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    providerId?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumStatusFilter<"User"> | $Enums.Status
    inactiveDate?: DateTimeNullableFilter<"User"> | Date | string | null
    Terms?: TermsListRelationFilter
    UserPrefer?: UserPreferListRelationFilter
    UserRegion?: UserRegionListRelationFilter
    Store?: StoreListRelationFilter
    UserMission?: UserMissionListRelationFilter
    StoreReview?: StoreReviewListRelationFilter
    Inquiry?: InquiryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    isPhoneVerified?: SortOrder
    points?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    inactiveDate?: SortOrderInput | SortOrder
    Terms?: TermsOrderByRelationAggregateInput
    UserPrefer?: UserPreferOrderByRelationAggregateInput
    UserRegion?: UserRegionOrderByRelationAggregateInput
    Store?: StoreOrderByRelationAggregateInput
    UserMission?: UserMissionOrderByRelationAggregateInput
    StoreReview?: StoreReviewOrderByRelationAggregateInput
    Inquiry?: InquiryOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    phone?: string
    provider_providerId?: UserProviderProviderIdCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    birth?: DateTimeFilter<"User"> | Date | string
    address?: StringFilter<"User"> | string
    detailAddress?: StringNullableFilter<"User"> | string | null
    nickname?: StringNullableFilter<"User"> | string | null
    isPhoneVerified?: BoolFilter<"User"> | boolean
    points?: BigIntFilter<"User"> | bigint | number
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    providerId?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumStatusFilter<"User"> | $Enums.Status
    inactiveDate?: DateTimeNullableFilter<"User"> | Date | string | null
    Terms?: TermsListRelationFilter
    UserPrefer?: UserPreferListRelationFilter
    UserRegion?: UserRegionListRelationFilter
    Store?: StoreListRelationFilter
    UserMission?: UserMissionListRelationFilter
    StoreReview?: StoreReviewListRelationFilter
    Inquiry?: InquiryListRelationFilter
  }, "id" | "email" | "phone" | "provider_providerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    isPhoneVerified?: SortOrder
    points?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    inactiveDate?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    name?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    address?: StringWithAggregatesFilter<"User"> | string
    detailAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    isPhoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    points?: BigIntWithAggregatesFilter<"User"> | bigint | number
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
    providerId?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    inactiveDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type TermsWhereInput = {
    AND?: TermsWhereInput | TermsWhereInput[]
    OR?: TermsWhereInput[]
    NOT?: TermsWhereInput | TermsWhereInput[]
    id?: BigIntFilter<"Terms"> | bigint | number
    isOverFourteen?: BoolFilter<"Terms"> | boolean
    agreedToTermsOfService?: BoolFilter<"Terms"> | boolean
    agreedToPrivacyPolicy?: BoolFilter<"Terms"> | boolean
    agreedToLocationServices?: BoolFilter<"Terms"> | boolean
    agreedToMarketingEmails?: BoolFilter<"Terms"> | boolean
    createdAt?: DateTimeFilter<"Terms"> | Date | string
    updatedAt?: DateTimeFilter<"Terms"> | Date | string
    userId?: BigIntFilter<"Terms"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TermsOrderByWithRelationInput = {
    id?: SortOrder
    isOverFourteen?: SortOrder
    agreedToTermsOfService?: SortOrder
    agreedToPrivacyPolicy?: SortOrder
    agreedToLocationServices?: SortOrder
    agreedToMarketingEmails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TermsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: TermsWhereInput | TermsWhereInput[]
    OR?: TermsWhereInput[]
    NOT?: TermsWhereInput | TermsWhereInput[]
    isOverFourteen?: BoolFilter<"Terms"> | boolean
    agreedToTermsOfService?: BoolFilter<"Terms"> | boolean
    agreedToPrivacyPolicy?: BoolFilter<"Terms"> | boolean
    agreedToLocationServices?: BoolFilter<"Terms"> | boolean
    agreedToMarketingEmails?: BoolFilter<"Terms"> | boolean
    createdAt?: DateTimeFilter<"Terms"> | Date | string
    updatedAt?: DateTimeFilter<"Terms"> | Date | string
    userId?: BigIntFilter<"Terms"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TermsOrderByWithAggregationInput = {
    id?: SortOrder
    isOverFourteen?: SortOrder
    agreedToTermsOfService?: SortOrder
    agreedToPrivacyPolicy?: SortOrder
    agreedToLocationServices?: SortOrder
    agreedToMarketingEmails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: TermsCountOrderByAggregateInput
    _avg?: TermsAvgOrderByAggregateInput
    _max?: TermsMaxOrderByAggregateInput
    _min?: TermsMinOrderByAggregateInput
    _sum?: TermsSumOrderByAggregateInput
  }

  export type TermsScalarWhereWithAggregatesInput = {
    AND?: TermsScalarWhereWithAggregatesInput | TermsScalarWhereWithAggregatesInput[]
    OR?: TermsScalarWhereWithAggregatesInput[]
    NOT?: TermsScalarWhereWithAggregatesInput | TermsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Terms"> | bigint | number
    isOverFourteen?: BoolWithAggregatesFilter<"Terms"> | boolean
    agreedToTermsOfService?: BoolWithAggregatesFilter<"Terms"> | boolean
    agreedToPrivacyPolicy?: BoolWithAggregatesFilter<"Terms"> | boolean
    agreedToLocationServices?: BoolWithAggregatesFilter<"Terms"> | boolean
    agreedToMarketingEmails?: BoolWithAggregatesFilter<"Terms"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Terms"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Terms"> | Date | string
    userId?: BigIntWithAggregatesFilter<"Terms"> | bigint | number
  }

  export type PreferCategoryWhereInput = {
    AND?: PreferCategoryWhereInput | PreferCategoryWhereInput[]
    OR?: PreferCategoryWhereInput[]
    NOT?: PreferCategoryWhereInput | PreferCategoryWhereInput[]
    id?: BigIntFilter<"PreferCategory"> | bigint | number
    name?: StringFilter<"PreferCategory"> | string
    UserPrefer?: UserPreferListRelationFilter
  }

  export type PreferCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    UserPrefer?: UserPreferOrderByRelationAggregateInput
    _relevance?: PreferCategoryOrderByRelevanceInput
  }

  export type PreferCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    name?: string
    AND?: PreferCategoryWhereInput | PreferCategoryWhereInput[]
    OR?: PreferCategoryWhereInput[]
    NOT?: PreferCategoryWhereInput | PreferCategoryWhereInput[]
    UserPrefer?: UserPreferListRelationFilter
  }, "id" | "name">

  export type PreferCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PreferCategoryCountOrderByAggregateInput
    _avg?: PreferCategoryAvgOrderByAggregateInput
    _max?: PreferCategoryMaxOrderByAggregateInput
    _min?: PreferCategoryMinOrderByAggregateInput
    _sum?: PreferCategorySumOrderByAggregateInput
  }

  export type PreferCategoryScalarWhereWithAggregatesInput = {
    AND?: PreferCategoryScalarWhereWithAggregatesInput | PreferCategoryScalarWhereWithAggregatesInput[]
    OR?: PreferCategoryScalarWhereWithAggregatesInput[]
    NOT?: PreferCategoryScalarWhereWithAggregatesInput | PreferCategoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"PreferCategory"> | bigint | number
    name?: StringWithAggregatesFilter<"PreferCategory"> | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: BigIntFilter<"Region"> | bigint | number
    name?: StringFilter<"Region"> | string
    UserRegion?: UserRegionListRelationFilter
    Mission?: MissionListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    UserRegion?: UserRegionOrderByRelationAggregateInput
    Mission?: MissionOrderByRelationAggregateInput
    _relevance?: RegionOrderByRelevanceInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    name?: string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    UserRegion?: UserRegionListRelationFilter
    Mission?: MissionListRelationFilter
  }, "id" | "name">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Region"> | bigint | number
    name?: StringWithAggregatesFilter<"Region"> | string
  }

  export type UserPreferWhereInput = {
    AND?: UserPreferWhereInput | UserPreferWhereInput[]
    OR?: UserPreferWhereInput[]
    NOT?: UserPreferWhereInput | UserPreferWhereInput[]
    userId?: BigIntFilter<"UserPrefer"> | bigint | number
    preferCategoryId?: BigIntFilter<"UserPrefer"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    preferCategory?: XOR<PreferCategoryScalarRelationFilter, PreferCategoryWhereInput>
  }

  export type UserPreferOrderByWithRelationInput = {
    userId?: SortOrder
    preferCategoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    preferCategory?: PreferCategoryOrderByWithRelationInput
  }

  export type UserPreferWhereUniqueInput = Prisma.AtLeast<{
    userId_preferCategoryId?: UserPreferUserIdPreferCategoryIdCompoundUniqueInput
    AND?: UserPreferWhereInput | UserPreferWhereInput[]
    OR?: UserPreferWhereInput[]
    NOT?: UserPreferWhereInput | UserPreferWhereInput[]
    userId?: BigIntFilter<"UserPrefer"> | bigint | number
    preferCategoryId?: BigIntFilter<"UserPrefer"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    preferCategory?: XOR<PreferCategoryScalarRelationFilter, PreferCategoryWhereInput>
  }, "userId_preferCategoryId">

  export type UserPreferOrderByWithAggregationInput = {
    userId?: SortOrder
    preferCategoryId?: SortOrder
    _count?: UserPreferCountOrderByAggregateInput
    _avg?: UserPreferAvgOrderByAggregateInput
    _max?: UserPreferMaxOrderByAggregateInput
    _min?: UserPreferMinOrderByAggregateInput
    _sum?: UserPreferSumOrderByAggregateInput
  }

  export type UserPreferScalarWhereWithAggregatesInput = {
    AND?: UserPreferScalarWhereWithAggregatesInput | UserPreferScalarWhereWithAggregatesInput[]
    OR?: UserPreferScalarWhereWithAggregatesInput[]
    NOT?: UserPreferScalarWhereWithAggregatesInput | UserPreferScalarWhereWithAggregatesInput[]
    userId?: BigIntWithAggregatesFilter<"UserPrefer"> | bigint | number
    preferCategoryId?: BigIntWithAggregatesFilter<"UserPrefer"> | bigint | number
  }

  export type UserRegionWhereInput = {
    AND?: UserRegionWhereInput | UserRegionWhereInput[]
    OR?: UserRegionWhereInput[]
    NOT?: UserRegionWhereInput | UserRegionWhereInput[]
    userId?: BigIntFilter<"UserRegion"> | bigint | number
    regionId?: BigIntFilter<"UserRegion"> | bigint | number
    successCount?: BigIntFilter<"UserRegion"> | bigint | number
    hasBonus?: BoolFilter<"UserRegion"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
  }

  export type UserRegionOrderByWithRelationInput = {
    userId?: SortOrder
    regionId?: SortOrder
    successCount?: SortOrder
    hasBonus?: SortOrder
    user?: UserOrderByWithRelationInput
    region?: RegionOrderByWithRelationInput
  }

  export type UserRegionWhereUniqueInput = Prisma.AtLeast<{
    userId_regionId?: UserRegionUserIdRegionIdCompoundUniqueInput
    AND?: UserRegionWhereInput | UserRegionWhereInput[]
    OR?: UserRegionWhereInput[]
    NOT?: UserRegionWhereInput | UserRegionWhereInput[]
    userId?: BigIntFilter<"UserRegion"> | bigint | number
    regionId?: BigIntFilter<"UserRegion"> | bigint | number
    successCount?: BigIntFilter<"UserRegion"> | bigint | number
    hasBonus?: BoolFilter<"UserRegion"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
  }, "userId_regionId">

  export type UserRegionOrderByWithAggregationInput = {
    userId?: SortOrder
    regionId?: SortOrder
    successCount?: SortOrder
    hasBonus?: SortOrder
    _count?: UserRegionCountOrderByAggregateInput
    _avg?: UserRegionAvgOrderByAggregateInput
    _max?: UserRegionMaxOrderByAggregateInput
    _min?: UserRegionMinOrderByAggregateInput
    _sum?: UserRegionSumOrderByAggregateInput
  }

  export type UserRegionScalarWhereWithAggregatesInput = {
    AND?: UserRegionScalarWhereWithAggregatesInput | UserRegionScalarWhereWithAggregatesInput[]
    OR?: UserRegionScalarWhereWithAggregatesInput[]
    NOT?: UserRegionScalarWhereWithAggregatesInput | UserRegionScalarWhereWithAggregatesInput[]
    userId?: BigIntWithAggregatesFilter<"UserRegion"> | bigint | number
    regionId?: BigIntWithAggregatesFilter<"UserRegion"> | bigint | number
    successCount?: BigIntWithAggregatesFilter<"UserRegion"> | bigint | number
    hasBonus?: BoolWithAggregatesFilter<"UserRegion"> | boolean
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: BigIntFilter<"Store"> | bigint | number
    name?: StringFilter<"Store"> | string
    address?: StringFilter<"Store"> | string
    stype?: StringFilter<"Store"> | string
    total?: DecimalFilter<"Store"> | Decimal | DecimalJsLike | number | string
    count?: BigIntFilter<"Store"> | bigint | number
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    ownerId?: BigIntFilter<"Store"> | bigint | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    StoreImage?: StoreImageListRelationFilter
    Mission?: MissionListRelationFilter
    StoreReview?: StoreReviewListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    stype?: SortOrder
    total?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    StoreImage?: StoreImageOrderByRelationAggregateInput
    Mission?: MissionOrderByRelationAggregateInput
    StoreReview?: StoreReviewOrderByRelationAggregateInput
    _relevance?: StoreOrderByRelevanceInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    address?: StringFilter<"Store"> | string
    stype?: StringFilter<"Store"> | string
    total?: DecimalFilter<"Store"> | Decimal | DecimalJsLike | number | string
    count?: BigIntFilter<"Store"> | bigint | number
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    ownerId?: BigIntFilter<"Store"> | bigint | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    StoreImage?: StoreImageListRelationFilter
    Mission?: MissionListRelationFilter
    StoreReview?: StoreReviewListRelationFilter
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    stype?: SortOrder
    total?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Store"> | bigint | number
    name?: StringWithAggregatesFilter<"Store"> | string
    address?: StringWithAggregatesFilter<"Store"> | string
    stype?: StringWithAggregatesFilter<"Store"> | string
    total?: DecimalWithAggregatesFilter<"Store"> | Decimal | DecimalJsLike | number | string
    count?: BigIntWithAggregatesFilter<"Store"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    ownerId?: BigIntWithAggregatesFilter<"Store"> | bigint | number
  }

  export type StoreImageWhereInput = {
    AND?: StoreImageWhereInput | StoreImageWhereInput[]
    OR?: StoreImageWhereInput[]
    NOT?: StoreImageWhereInput | StoreImageWhereInput[]
    id?: BigIntFilter<"StoreImage"> | bigint | number
    img?: StringNullableFilter<"StoreImage"> | string | null
    storeId?: BigIntFilter<"StoreImage"> | bigint | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type StoreImageOrderByWithRelationInput = {
    id?: SortOrder
    img?: SortOrderInput | SortOrder
    storeId?: SortOrder
    store?: StoreOrderByWithRelationInput
    _relevance?: StoreImageOrderByRelevanceInput
  }

  export type StoreImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: StoreImageWhereInput | StoreImageWhereInput[]
    OR?: StoreImageWhereInput[]
    NOT?: StoreImageWhereInput | StoreImageWhereInput[]
    img?: StringNullableFilter<"StoreImage"> | string | null
    storeId?: BigIntFilter<"StoreImage"> | bigint | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id">

  export type StoreImageOrderByWithAggregationInput = {
    id?: SortOrder
    img?: SortOrderInput | SortOrder
    storeId?: SortOrder
    _count?: StoreImageCountOrderByAggregateInput
    _avg?: StoreImageAvgOrderByAggregateInput
    _max?: StoreImageMaxOrderByAggregateInput
    _min?: StoreImageMinOrderByAggregateInput
    _sum?: StoreImageSumOrderByAggregateInput
  }

  export type StoreImageScalarWhereWithAggregatesInput = {
    AND?: StoreImageScalarWhereWithAggregatesInput | StoreImageScalarWhereWithAggregatesInput[]
    OR?: StoreImageScalarWhereWithAggregatesInput[]
    NOT?: StoreImageScalarWhereWithAggregatesInput | StoreImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"StoreImage"> | bigint | number
    img?: StringNullableWithAggregatesFilter<"StoreImage"> | string | null
    storeId?: BigIntWithAggregatesFilter<"StoreImage"> | bigint | number
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: BigIntFilter<"Mission"> | bigint | number
    startDate?: DateTimeFilter<"Mission"> | Date | string
    endDate?: DateTimeFilter<"Mission"> | Date | string
    money?: BigIntFilter<"Mission"> | bigint | number
    points?: BigIntFilter<"Mission"> | bigint | number
    storeId?: BigIntFilter<"Mission"> | bigint | number
    regionId?: BigIntFilter<"Mission"> | bigint | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    UserMission?: UserMissionListRelationFilter
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    money?: SortOrder
    points?: SortOrder
    storeId?: SortOrder
    regionId?: SortOrder
    store?: StoreOrderByWithRelationInput
    region?: RegionOrderByWithRelationInput
    UserMission?: UserMissionOrderByRelationAggregateInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    startDate?: DateTimeFilter<"Mission"> | Date | string
    endDate?: DateTimeFilter<"Mission"> | Date | string
    money?: BigIntFilter<"Mission"> | bigint | number
    points?: BigIntFilter<"Mission"> | bigint | number
    storeId?: BigIntFilter<"Mission"> | bigint | number
    regionId?: BigIntFilter<"Mission"> | bigint | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    UserMission?: UserMissionListRelationFilter
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    money?: SortOrder
    points?: SortOrder
    storeId?: SortOrder
    regionId?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
    startDate?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    money?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
    points?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
    storeId?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
    regionId?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
  }

  export type UserMissionWhereInput = {
    AND?: UserMissionWhereInput | UserMissionWhereInput[]
    OR?: UserMissionWhereInput[]
    NOT?: UserMissionWhereInput | UserMissionWhereInput[]
    userId?: BigIntFilter<"UserMission"> | bigint | number
    missionId?: BigIntFilter<"UserMission"> | bigint | number
    status?: EnumUserMissionStatusFilter<"UserMission"> | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFilter<"UserMission"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserMission"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }

  export type UserMissionOrderByWithRelationInput = {
    userId?: SortOrder
    missionId?: SortOrder
    status?: SortOrder
    acceptedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    mission?: MissionOrderByWithRelationInput
  }

  export type UserMissionWhereUniqueInput = Prisma.AtLeast<{
    userId_missionId?: UserMissionUserIdMissionIdCompoundUniqueInput
    AND?: UserMissionWhereInput | UserMissionWhereInput[]
    OR?: UserMissionWhereInput[]
    NOT?: UserMissionWhereInput | UserMissionWhereInput[]
    userId?: BigIntFilter<"UserMission"> | bigint | number
    missionId?: BigIntFilter<"UserMission"> | bigint | number
    status?: EnumUserMissionStatusFilter<"UserMission"> | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFilter<"UserMission"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserMission"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }, "userId_missionId">

  export type UserMissionOrderByWithAggregationInput = {
    userId?: SortOrder
    missionId?: SortOrder
    status?: SortOrder
    acceptedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: UserMissionCountOrderByAggregateInput
    _avg?: UserMissionAvgOrderByAggregateInput
    _max?: UserMissionMaxOrderByAggregateInput
    _min?: UserMissionMinOrderByAggregateInput
    _sum?: UserMissionSumOrderByAggregateInput
  }

  export type UserMissionScalarWhereWithAggregatesInput = {
    AND?: UserMissionScalarWhereWithAggregatesInput | UserMissionScalarWhereWithAggregatesInput[]
    OR?: UserMissionScalarWhereWithAggregatesInput[]
    NOT?: UserMissionScalarWhereWithAggregatesInput | UserMissionScalarWhereWithAggregatesInput[]
    userId?: BigIntWithAggregatesFilter<"UserMission"> | bigint | number
    missionId?: BigIntWithAggregatesFilter<"UserMission"> | bigint | number
    status?: EnumUserMissionStatusWithAggregatesFilter<"UserMission"> | $Enums.UserMissionStatus
    acceptedAt?: DateTimeWithAggregatesFilter<"UserMission"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserMission"> | Date | string | null
  }

  export type StoreReviewWhereInput = {
    AND?: StoreReviewWhereInput | StoreReviewWhereInput[]
    OR?: StoreReviewWhereInput[]
    NOT?: StoreReviewWhereInput | StoreReviewWhereInput[]
    id?: BigIntFilter<"StoreReview"> | bigint | number
    content?: StringNullableFilter<"StoreReview"> | string | null
    score?: DecimalNullableFilter<"StoreReview"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"StoreReview"> | Date | string
    updatedAt?: DateTimeFilter<"StoreReview"> | Date | string
    writerId?: BigIntFilter<"StoreReview"> | bigint | number
    storeId?: BigIntFilter<"StoreReview"> | bigint | number
    writer?: XOR<UserScalarRelationFilter, UserWhereInput>
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    ReviewImage?: ReviewImageListRelationFilter
    ReviewAnswer?: ReviewAnswerListRelationFilter
  }

  export type StoreReviewOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    writerId?: SortOrder
    storeId?: SortOrder
    writer?: UserOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
    ReviewImage?: ReviewImageOrderByRelationAggregateInput
    ReviewAnswer?: ReviewAnswerOrderByRelationAggregateInput
    _relevance?: StoreReviewOrderByRelevanceInput
  }

  export type StoreReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: StoreReviewWhereInput | StoreReviewWhereInput[]
    OR?: StoreReviewWhereInput[]
    NOT?: StoreReviewWhereInput | StoreReviewWhereInput[]
    content?: StringNullableFilter<"StoreReview"> | string | null
    score?: DecimalNullableFilter<"StoreReview"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"StoreReview"> | Date | string
    updatedAt?: DateTimeFilter<"StoreReview"> | Date | string
    writerId?: BigIntFilter<"StoreReview"> | bigint | number
    storeId?: BigIntFilter<"StoreReview"> | bigint | number
    writer?: XOR<UserScalarRelationFilter, UserWhereInput>
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    ReviewImage?: ReviewImageListRelationFilter
    ReviewAnswer?: ReviewAnswerListRelationFilter
  }, "id">

  export type StoreReviewOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    writerId?: SortOrder
    storeId?: SortOrder
    _count?: StoreReviewCountOrderByAggregateInput
    _avg?: StoreReviewAvgOrderByAggregateInput
    _max?: StoreReviewMaxOrderByAggregateInput
    _min?: StoreReviewMinOrderByAggregateInput
    _sum?: StoreReviewSumOrderByAggregateInput
  }

  export type StoreReviewScalarWhereWithAggregatesInput = {
    AND?: StoreReviewScalarWhereWithAggregatesInput | StoreReviewScalarWhereWithAggregatesInput[]
    OR?: StoreReviewScalarWhereWithAggregatesInput[]
    NOT?: StoreReviewScalarWhereWithAggregatesInput | StoreReviewScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"StoreReview"> | bigint | number
    content?: StringNullableWithAggregatesFilter<"StoreReview"> | string | null
    score?: DecimalNullableWithAggregatesFilter<"StoreReview"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StoreReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoreReview"> | Date | string
    writerId?: BigIntWithAggregatesFilter<"StoreReview"> | bigint | number
    storeId?: BigIntWithAggregatesFilter<"StoreReview"> | bigint | number
  }

  export type ReviewImageWhereInput = {
    AND?: ReviewImageWhereInput | ReviewImageWhereInput[]
    OR?: ReviewImageWhereInput[]
    NOT?: ReviewImageWhereInput | ReviewImageWhereInput[]
    id?: BigIntFilter<"ReviewImage"> | bigint | number
    img?: StringFilter<"ReviewImage"> | string
    reviewId?: BigIntFilter<"ReviewImage"> | bigint | number
    review?: XOR<StoreReviewScalarRelationFilter, StoreReviewWhereInput>
  }

  export type ReviewImageOrderByWithRelationInput = {
    id?: SortOrder
    img?: SortOrder
    reviewId?: SortOrder
    review?: StoreReviewOrderByWithRelationInput
    _relevance?: ReviewImageOrderByRelevanceInput
  }

  export type ReviewImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReviewImageWhereInput | ReviewImageWhereInput[]
    OR?: ReviewImageWhereInput[]
    NOT?: ReviewImageWhereInput | ReviewImageWhereInput[]
    img?: StringFilter<"ReviewImage"> | string
    reviewId?: BigIntFilter<"ReviewImage"> | bigint | number
    review?: XOR<StoreReviewScalarRelationFilter, StoreReviewWhereInput>
  }, "id">

  export type ReviewImageOrderByWithAggregationInput = {
    id?: SortOrder
    img?: SortOrder
    reviewId?: SortOrder
    _count?: ReviewImageCountOrderByAggregateInput
    _avg?: ReviewImageAvgOrderByAggregateInput
    _max?: ReviewImageMaxOrderByAggregateInput
    _min?: ReviewImageMinOrderByAggregateInput
    _sum?: ReviewImageSumOrderByAggregateInput
  }

  export type ReviewImageScalarWhereWithAggregatesInput = {
    AND?: ReviewImageScalarWhereWithAggregatesInput | ReviewImageScalarWhereWithAggregatesInput[]
    OR?: ReviewImageScalarWhereWithAggregatesInput[]
    NOT?: ReviewImageScalarWhereWithAggregatesInput | ReviewImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ReviewImage"> | bigint | number
    img?: StringWithAggregatesFilter<"ReviewImage"> | string
    reviewId?: BigIntWithAggregatesFilter<"ReviewImage"> | bigint | number
  }

  export type ReviewAnswerWhereInput = {
    AND?: ReviewAnswerWhereInput | ReviewAnswerWhereInput[]
    OR?: ReviewAnswerWhereInput[]
    NOT?: ReviewAnswerWhereInput | ReviewAnswerWhereInput[]
    reviewId?: BigIntFilter<"ReviewAnswer"> | bigint | number
    content?: StringFilter<"ReviewAnswer"> | string
    createdAt?: DateTimeFilter<"ReviewAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewAnswer"> | Date | string
    review?: XOR<StoreReviewScalarRelationFilter, StoreReviewWhereInput>
  }

  export type ReviewAnswerOrderByWithRelationInput = {
    reviewId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    review?: StoreReviewOrderByWithRelationInput
    _relevance?: ReviewAnswerOrderByRelevanceInput
  }

  export type ReviewAnswerWhereUniqueInput = Prisma.AtLeast<{
    reviewId?: bigint | number
    AND?: ReviewAnswerWhereInput | ReviewAnswerWhereInput[]
    OR?: ReviewAnswerWhereInput[]
    NOT?: ReviewAnswerWhereInput | ReviewAnswerWhereInput[]
    content?: StringFilter<"ReviewAnswer"> | string
    createdAt?: DateTimeFilter<"ReviewAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewAnswer"> | Date | string
    review?: XOR<StoreReviewScalarRelationFilter, StoreReviewWhereInput>
  }, "reviewId">

  export type ReviewAnswerOrderByWithAggregationInput = {
    reviewId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewAnswerCountOrderByAggregateInput
    _avg?: ReviewAnswerAvgOrderByAggregateInput
    _max?: ReviewAnswerMaxOrderByAggregateInput
    _min?: ReviewAnswerMinOrderByAggregateInput
    _sum?: ReviewAnswerSumOrderByAggregateInput
  }

  export type ReviewAnswerScalarWhereWithAggregatesInput = {
    AND?: ReviewAnswerScalarWhereWithAggregatesInput | ReviewAnswerScalarWhereWithAggregatesInput[]
    OR?: ReviewAnswerScalarWhereWithAggregatesInput[]
    NOT?: ReviewAnswerScalarWhereWithAggregatesInput | ReviewAnswerScalarWhereWithAggregatesInput[]
    reviewId?: BigIntWithAggregatesFilter<"ReviewAnswer"> | bigint | number
    content?: StringWithAggregatesFilter<"ReviewAnswer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReviewAnswer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReviewAnswer"> | Date | string
  }

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    id?: BigIntFilter<"Inquiry"> | bigint | number
    title?: StringFilter<"Inquiry"> | string
    content?: StringFilter<"Inquiry"> | string
    itype?: EnumInquiryTypeFilter<"Inquiry"> | $Enums.InquiryType
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
    userId?: BigIntFilter<"Inquiry"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    InquiryImage?: InquiryImageListRelationFilter
  }

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    itype?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    InquiryImage?: InquiryImageOrderByRelationAggregateInput
    _relevance?: InquiryOrderByRelevanceInput
  }

  export type InquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    title?: StringFilter<"Inquiry"> | string
    content?: StringFilter<"Inquiry"> | string
    itype?: EnumInquiryTypeFilter<"Inquiry"> | $Enums.InquiryType
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
    userId?: BigIntFilter<"Inquiry"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    InquiryImage?: InquiryImageListRelationFilter
  }, "id">

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    itype?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: InquiryCountOrderByAggregateInput
    _avg?: InquiryAvgOrderByAggregateInput
    _max?: InquiryMaxOrderByAggregateInput
    _min?: InquiryMinOrderByAggregateInput
    _sum?: InquirySumOrderByAggregateInput
  }

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    OR?: InquiryScalarWhereWithAggregatesInput[]
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Inquiry"> | bigint | number
    title?: StringWithAggregatesFilter<"Inquiry"> | string
    content?: StringWithAggregatesFilter<"Inquiry"> | string
    itype?: EnumInquiryTypeWithAggregatesFilter<"Inquiry"> | $Enums.InquiryType
    status?: EnumInquiryStatusWithAggregatesFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    userId?: BigIntWithAggregatesFilter<"Inquiry"> | bigint | number
  }

  export type InquiryImageWhereInput = {
    AND?: InquiryImageWhereInput | InquiryImageWhereInput[]
    OR?: InquiryImageWhereInput[]
    NOT?: InquiryImageWhereInput | InquiryImageWhereInput[]
    id?: BigIntFilter<"InquiryImage"> | bigint | number
    img?: StringFilter<"InquiryImage"> | string
    inquiryId?: BigIntFilter<"InquiryImage"> | bigint | number
    inquiry?: XOR<InquiryScalarRelationFilter, InquiryWhereInput>
  }

  export type InquiryImageOrderByWithRelationInput = {
    id?: SortOrder
    img?: SortOrder
    inquiryId?: SortOrder
    inquiry?: InquiryOrderByWithRelationInput
    _relevance?: InquiryImageOrderByRelevanceInput
  }

  export type InquiryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: InquiryImageWhereInput | InquiryImageWhereInput[]
    OR?: InquiryImageWhereInput[]
    NOT?: InquiryImageWhereInput | InquiryImageWhereInput[]
    img?: StringFilter<"InquiryImage"> | string
    inquiryId?: BigIntFilter<"InquiryImage"> | bigint | number
    inquiry?: XOR<InquiryScalarRelationFilter, InquiryWhereInput>
  }, "id">

  export type InquiryImageOrderByWithAggregationInput = {
    id?: SortOrder
    img?: SortOrder
    inquiryId?: SortOrder
    _count?: InquiryImageCountOrderByAggregateInput
    _avg?: InquiryImageAvgOrderByAggregateInput
    _max?: InquiryImageMaxOrderByAggregateInput
    _min?: InquiryImageMinOrderByAggregateInput
    _sum?: InquiryImageSumOrderByAggregateInput
  }

  export type InquiryImageScalarWhereWithAggregatesInput = {
    AND?: InquiryImageScalarWhereWithAggregatesInput | InquiryImageScalarWhereWithAggregatesInput[]
    OR?: InquiryImageScalarWhereWithAggregatesInput[]
    NOT?: InquiryImageScalarWhereWithAggregatesInput | InquiryImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"InquiryImage"> | bigint | number
    img?: StringWithAggregatesFilter<"InquiryImage"> | string
    inquiryId?: BigIntWithAggregatesFilter<"InquiryImage"> | bigint | number
  }

  export type UserCreateInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsUncheckedCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferUncheckedCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionUncheckedCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUncheckedUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUncheckedUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUncheckedUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TermsCreateInput = {
    id?: bigint | number
    isOverFourteen?: boolean
    agreedToTermsOfService?: boolean
    agreedToPrivacyPolicy?: boolean
    agreedToLocationServices?: boolean
    agreedToMarketingEmails?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTermsInput
  }

  export type TermsUncheckedCreateInput = {
    id?: bigint | number
    isOverFourteen?: boolean
    agreedToTermsOfService?: boolean
    agreedToPrivacyPolicy?: boolean
    agreedToLocationServices?: boolean
    agreedToMarketingEmails?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: bigint | number
  }

  export type TermsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isOverFourteen?: BoolFieldUpdateOperationsInput | boolean
    agreedToTermsOfService?: BoolFieldUpdateOperationsInput | boolean
    agreedToPrivacyPolicy?: BoolFieldUpdateOperationsInput | boolean
    agreedToLocationServices?: BoolFieldUpdateOperationsInput | boolean
    agreedToMarketingEmails?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTermsNestedInput
  }

  export type TermsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isOverFourteen?: BoolFieldUpdateOperationsInput | boolean
    agreedToTermsOfService?: BoolFieldUpdateOperationsInput | boolean
    agreedToPrivacyPolicy?: BoolFieldUpdateOperationsInput | boolean
    agreedToLocationServices?: BoolFieldUpdateOperationsInput | boolean
    agreedToMarketingEmails?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type TermsCreateManyInput = {
    id?: bigint | number
    isOverFourteen?: boolean
    agreedToTermsOfService?: boolean
    agreedToPrivacyPolicy?: boolean
    agreedToLocationServices?: boolean
    agreedToMarketingEmails?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: bigint | number
  }

  export type TermsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isOverFourteen?: BoolFieldUpdateOperationsInput | boolean
    agreedToTermsOfService?: BoolFieldUpdateOperationsInput | boolean
    agreedToPrivacyPolicy?: BoolFieldUpdateOperationsInput | boolean
    agreedToLocationServices?: BoolFieldUpdateOperationsInput | boolean
    agreedToMarketingEmails?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isOverFourteen?: BoolFieldUpdateOperationsInput | boolean
    agreedToTermsOfService?: BoolFieldUpdateOperationsInput | boolean
    agreedToPrivacyPolicy?: BoolFieldUpdateOperationsInput | boolean
    agreedToLocationServices?: BoolFieldUpdateOperationsInput | boolean
    agreedToMarketingEmails?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PreferCategoryCreateInput = {
    id?: bigint | number
    name: string
    UserPrefer?: UserPreferCreateNestedManyWithoutPreferCategoryInput
  }

  export type PreferCategoryUncheckedCreateInput = {
    id?: bigint | number
    name: string
    UserPrefer?: UserPreferUncheckedCreateNestedManyWithoutPreferCategoryInput
  }

  export type PreferCategoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    UserPrefer?: UserPreferUpdateManyWithoutPreferCategoryNestedInput
  }

  export type PreferCategoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    UserPrefer?: UserPreferUncheckedUpdateManyWithoutPreferCategoryNestedInput
  }

  export type PreferCategoryCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type PreferCategoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PreferCategoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionCreateInput = {
    id?: bigint | number
    name: string
    UserRegion?: UserRegionCreateNestedManyWithoutRegionInput
    Mission?: MissionCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: bigint | number
    name: string
    UserRegion?: UserRegionUncheckedCreateNestedManyWithoutRegionInput
    Mission?: MissionUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    UserRegion?: UserRegionUpdateManyWithoutRegionNestedInput
    Mission?: MissionUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    UserRegion?: UserRegionUncheckedUpdateManyWithoutRegionNestedInput
    Mission?: MissionUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type RegionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferCreateInput = {
    user: UserCreateNestedOneWithoutUserPreferInput
    preferCategory: PreferCategoryCreateNestedOneWithoutUserPreferInput
  }

  export type UserPreferUncheckedCreateInput = {
    userId: bigint | number
    preferCategoryId: bigint | number
  }

  export type UserPreferUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserPreferNestedInput
    preferCategory?: PreferCategoryUpdateOneRequiredWithoutUserPreferNestedInput
  }

  export type UserPreferUncheckedUpdateInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    preferCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserPreferCreateManyInput = {
    userId: bigint | number
    preferCategoryId: bigint | number
  }

  export type UserPreferUpdateManyMutationInput = {

  }

  export type UserPreferUncheckedUpdateManyInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    preferCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserRegionCreateInput = {
    successCount?: bigint | number
    hasBonus?: boolean
    user: UserCreateNestedOneWithoutUserRegionInput
    region: RegionCreateNestedOneWithoutUserRegionInput
  }

  export type UserRegionUncheckedCreateInput = {
    userId: bigint | number
    regionId: bigint | number
    successCount?: bigint | number
    hasBonus?: boolean
  }

  export type UserRegionUpdateInput = {
    successCount?: BigIntFieldUpdateOperationsInput | bigint | number
    hasBonus?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserRegionNestedInput
    region?: RegionUpdateOneRequiredWithoutUserRegionNestedInput
  }

  export type UserRegionUncheckedUpdateInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    successCount?: BigIntFieldUpdateOperationsInput | bigint | number
    hasBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserRegionCreateManyInput = {
    userId: bigint | number
    regionId: bigint | number
    successCount?: bigint | number
    hasBonus?: boolean
  }

  export type UserRegionUpdateManyMutationInput = {
    successCount?: BigIntFieldUpdateOperationsInput | bigint | number
    hasBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserRegionUncheckedUpdateManyInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    successCount?: BigIntFieldUpdateOperationsInput | bigint | number
    hasBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StoreCreateInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutStoreInput
    StoreImage?: StoreImageCreateNestedManyWithoutStoreInput
    Mission?: MissionCreateNestedManyWithoutStoreInput
    StoreReview?: StoreReviewCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: bigint | number
    StoreImage?: StoreImageUncheckedCreateNestedManyWithoutStoreInput
    Mission?: MissionUncheckedCreateNestedManyWithoutStoreInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoreNestedInput
    StoreImage?: StoreImageUpdateManyWithoutStoreNestedInput
    Mission?: MissionUpdateManyWithoutStoreNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: BigIntFieldUpdateOperationsInput | bigint | number
    StoreImage?: StoreImageUncheckedUpdateManyWithoutStoreNestedInput
    Mission?: MissionUncheckedUpdateManyWithoutStoreNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: bigint | number
  }

  export type StoreUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StoreImageCreateInput = {
    id?: bigint | number
    img?: string | null
    store: StoreCreateNestedOneWithoutStoreImageInput
  }

  export type StoreImageUncheckedCreateInput = {
    id?: bigint | number
    img?: string | null
    storeId: bigint | number
  }

  export type StoreImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
    store?: StoreUpdateOneRequiredWithoutStoreImageNestedInput
  }

  export type StoreImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StoreImageCreateManyInput = {
    id?: bigint | number
    img?: string | null
    storeId: bigint | number
  }

  export type StoreImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MissionCreateInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    store: StoreCreateNestedOneWithoutMissionInput
    region: RegionCreateNestedOneWithoutMissionInput
    UserMission?: UserMissionCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    storeId: bigint | number
    regionId: bigint | number
    UserMission?: UserMissionUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneRequiredWithoutMissionNestedInput
    region?: RegionUpdateOneRequiredWithoutMissionNestedInput
    UserMission?: UserMissionUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    UserMission?: UserMissionUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateManyInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    storeId: bigint | number
    regionId: bigint | number
  }

  export type MissionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserMissionCreateInput = {
    status?: $Enums.UserMissionStatus
    acceptedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserMissionInput
    mission: MissionCreateNestedOneWithoutUserMissionInput
  }

  export type UserMissionUncheckedCreateInput = {
    userId: bigint | number
    missionId: bigint | number
    status?: $Enums.UserMissionStatus
    acceptedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserMissionUpdateInput = {
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserMissionNestedInput
    mission?: MissionUpdateOneRequiredWithoutUserMissionNestedInput
  }

  export type UserMissionUncheckedUpdateInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMissionCreateManyInput = {
    userId: bigint | number
    missionId: bigint | number
    status?: $Enums.UserMissionStatus
    acceptedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserMissionUpdateManyMutationInput = {
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMissionUncheckedUpdateManyInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreReviewCreateInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    writer: UserCreateNestedOneWithoutStoreReviewInput
    store: StoreCreateNestedOneWithoutStoreReviewInput
    ReviewImage?: ReviewImageCreateNestedManyWithoutReviewInput
    ReviewAnswer?: ReviewAnswerCreateNestedManyWithoutReviewInput
  }

  export type StoreReviewUncheckedCreateInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    writerId: bigint | number
    storeId: bigint | number
    ReviewImage?: ReviewImageUncheckedCreateNestedManyWithoutReviewInput
    ReviewAnswer?: ReviewAnswerUncheckedCreateNestedManyWithoutReviewInput
  }

  export type StoreReviewUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    writer?: UserUpdateOneRequiredWithoutStoreReviewNestedInput
    store?: StoreUpdateOneRequiredWithoutStoreReviewNestedInput
    ReviewImage?: ReviewImageUpdateManyWithoutReviewNestedInput
    ReviewAnswer?: ReviewAnswerUpdateManyWithoutReviewNestedInput
  }

  export type StoreReviewUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    writerId?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    ReviewImage?: ReviewImageUncheckedUpdateManyWithoutReviewNestedInput
    ReviewAnswer?: ReviewAnswerUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type StoreReviewCreateManyInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    writerId: bigint | number
    storeId: bigint | number
  }

  export type StoreReviewUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreReviewUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    writerId?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReviewImageCreateInput = {
    id?: bigint | number
    img: string
    review: StoreReviewCreateNestedOneWithoutReviewImageInput
  }

  export type ReviewImageUncheckedCreateInput = {
    id?: bigint | number
    img: string
    reviewId: bigint | number
  }

  export type ReviewImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
    review?: StoreReviewUpdateOneRequiredWithoutReviewImageNestedInput
  }

  export type ReviewImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReviewImageCreateManyInput = {
    id?: bigint | number
    img: string
    reviewId: bigint | number
  }

  export type ReviewImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReviewAnswerCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    review: StoreReviewCreateNestedOneWithoutReviewAnswerInput
  }

  export type ReviewAnswerUncheckedCreateInput = {
    reviewId: bigint | number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewAnswerUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: StoreReviewUpdateOneRequiredWithoutReviewAnswerNestedInput
  }

  export type ReviewAnswerUncheckedUpdateInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewAnswerCreateManyInput = {
    reviewId: bigint | number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewAnswerUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewAnswerUncheckedUpdateManyInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateInput = {
    id?: bigint | number
    title: string
    content: string
    itype: $Enums.InquiryType
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInquiryInput
    InquiryImage?: InquiryImageCreateNestedManyWithoutInquiryInput
  }

  export type InquiryUncheckedCreateInput = {
    id?: bigint | number
    title: string
    content: string
    itype: $Enums.InquiryType
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: bigint | number
    InquiryImage?: InquiryImageUncheckedCreateNestedManyWithoutInquiryInput
  }

  export type InquiryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    itype?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInquiryNestedInput
    InquiryImage?: InquiryImageUpdateManyWithoutInquiryNestedInput
  }

  export type InquiryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    itype?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    InquiryImage?: InquiryImageUncheckedUpdateManyWithoutInquiryNestedInput
  }

  export type InquiryCreateManyInput = {
    id?: bigint | number
    title: string
    content: string
    itype: $Enums.InquiryType
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: bigint | number
  }

  export type InquiryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    itype?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    itype?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type InquiryImageCreateInput = {
    id?: bigint | number
    img: string
    inquiry: InquiryCreateNestedOneWithoutInquiryImageInput
  }

  export type InquiryImageUncheckedCreateInput = {
    id?: bigint | number
    img: string
    inquiryId: bigint | number
  }

  export type InquiryImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
    inquiry?: InquiryUpdateOneRequiredWithoutInquiryImageNestedInput
  }

  export type InquiryImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
    inquiryId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type InquiryImageCreateManyInput = {
    id?: bigint | number
    img: string
    inquiryId: bigint | number
  }

  export type InquiryImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type InquiryImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
    inquiryId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TermsListRelationFilter = {
    every?: TermsWhereInput
    some?: TermsWhereInput
    none?: TermsWhereInput
  }

  export type UserPreferListRelationFilter = {
    every?: UserPreferWhereInput
    some?: UserPreferWhereInput
    none?: UserPreferWhereInput
  }

  export type UserRegionListRelationFilter = {
    every?: UserRegionWhereInput
    some?: UserRegionWhereInput
    none?: UserRegionWhereInput
  }

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type UserMissionListRelationFilter = {
    every?: UserMissionWhereInput
    some?: UserMissionWhereInput
    none?: UserMissionWhereInput
  }

  export type StoreReviewListRelationFilter = {
    every?: StoreReviewWhereInput
    some?: StoreReviewWhereInput
    none?: StoreReviewWhereInput
  }

  export type InquiryListRelationFilter = {
    every?: InquiryWhereInput
    some?: InquiryWhereInput
    none?: InquiryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TermsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPreferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRegionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserProviderProviderIdCompoundUniqueInput = {
    provider: $Enums.Provider
    providerId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isPhoneVerified?: SortOrder
    points?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    inactiveDate?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isPhoneVerified?: SortOrder
    points?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    inactiveDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isPhoneVerified?: SortOrder
    points?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    inactiveDate?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TermsCountOrderByAggregateInput = {
    id?: SortOrder
    isOverFourteen?: SortOrder
    agreedToTermsOfService?: SortOrder
    agreedToPrivacyPolicy?: SortOrder
    agreedToLocationServices?: SortOrder
    agreedToMarketingEmails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TermsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TermsMaxOrderByAggregateInput = {
    id?: SortOrder
    isOverFourteen?: SortOrder
    agreedToTermsOfService?: SortOrder
    agreedToPrivacyPolicy?: SortOrder
    agreedToLocationServices?: SortOrder
    agreedToMarketingEmails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TermsMinOrderByAggregateInput = {
    id?: SortOrder
    isOverFourteen?: SortOrder
    agreedToTermsOfService?: SortOrder
    agreedToPrivacyPolicy?: SortOrder
    agreedToLocationServices?: SortOrder
    agreedToMarketingEmails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TermsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PreferCategoryOrderByRelevanceInput = {
    fields: PreferCategoryOrderByRelevanceFieldEnum | PreferCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PreferCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PreferCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PreferCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PreferCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PreferCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MissionListRelationFilter = {
    every?: MissionWhereInput
    some?: MissionWhereInput
    none?: MissionWhereInput
  }

  export type MissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionOrderByRelevanceInput = {
    fields: RegionOrderByRelevanceFieldEnum | RegionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PreferCategoryScalarRelationFilter = {
    is?: PreferCategoryWhereInput
    isNot?: PreferCategoryWhereInput
  }

  export type UserPreferUserIdPreferCategoryIdCompoundUniqueInput = {
    userId: bigint | number
    preferCategoryId: bigint | number
  }

  export type UserPreferCountOrderByAggregateInput = {
    userId?: SortOrder
    preferCategoryId?: SortOrder
  }

  export type UserPreferAvgOrderByAggregateInput = {
    userId?: SortOrder
    preferCategoryId?: SortOrder
  }

  export type UserPreferMaxOrderByAggregateInput = {
    userId?: SortOrder
    preferCategoryId?: SortOrder
  }

  export type UserPreferMinOrderByAggregateInput = {
    userId?: SortOrder
    preferCategoryId?: SortOrder
  }

  export type UserPreferSumOrderByAggregateInput = {
    userId?: SortOrder
    preferCategoryId?: SortOrder
  }

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type UserRegionUserIdRegionIdCompoundUniqueInput = {
    userId: bigint | number
    regionId: bigint | number
  }

  export type UserRegionCountOrderByAggregateInput = {
    userId?: SortOrder
    regionId?: SortOrder
    successCount?: SortOrder
    hasBonus?: SortOrder
  }

  export type UserRegionAvgOrderByAggregateInput = {
    userId?: SortOrder
    regionId?: SortOrder
    successCount?: SortOrder
  }

  export type UserRegionMaxOrderByAggregateInput = {
    userId?: SortOrder
    regionId?: SortOrder
    successCount?: SortOrder
    hasBonus?: SortOrder
  }

  export type UserRegionMinOrderByAggregateInput = {
    userId?: SortOrder
    regionId?: SortOrder
    successCount?: SortOrder
    hasBonus?: SortOrder
  }

  export type UserRegionSumOrderByAggregateInput = {
    userId?: SortOrder
    regionId?: SortOrder
    successCount?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StoreImageListRelationFilter = {
    every?: StoreImageWhereInput
    some?: StoreImageWhereInput
    none?: StoreImageWhereInput
  }

  export type StoreImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreOrderByRelevanceInput = {
    fields: StoreOrderByRelevanceFieldEnum | StoreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    stype?: SortOrder
    total?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    count?: SortOrder
    ownerId?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    stype?: SortOrder
    total?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    stype?: SortOrder
    total?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    count?: SortOrder
    ownerId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type StoreImageOrderByRelevanceInput = {
    fields: StoreImageOrderByRelevanceFieldEnum | StoreImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreImageCountOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    storeId?: SortOrder
  }

  export type StoreImageAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
  }

  export type StoreImageMaxOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    storeId?: SortOrder
  }

  export type StoreImageMinOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    storeId?: SortOrder
  }

  export type StoreImageSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    money?: SortOrder
    points?: SortOrder
    storeId?: SortOrder
    regionId?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    id?: SortOrder
    money?: SortOrder
    points?: SortOrder
    storeId?: SortOrder
    regionId?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    money?: SortOrder
    points?: SortOrder
    storeId?: SortOrder
    regionId?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    money?: SortOrder
    points?: SortOrder
    storeId?: SortOrder
    regionId?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    id?: SortOrder
    money?: SortOrder
    points?: SortOrder
    storeId?: SortOrder
    regionId?: SortOrder
  }

  export type EnumUserMissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMissionStatus | EnumUserMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserMissionStatus[]
    notIn?: $Enums.UserMissionStatus[]
    not?: NestedEnumUserMissionStatusFilter<$PrismaModel> | $Enums.UserMissionStatus
  }

  export type MissionScalarRelationFilter = {
    is?: MissionWhereInput
    isNot?: MissionWhereInput
  }

  export type UserMissionUserIdMissionIdCompoundUniqueInput = {
    userId: bigint | number
    missionId: bigint | number
  }

  export type UserMissionCountOrderByAggregateInput = {
    userId?: SortOrder
    missionId?: SortOrder
    status?: SortOrder
    acceptedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserMissionAvgOrderByAggregateInput = {
    userId?: SortOrder
    missionId?: SortOrder
  }

  export type UserMissionMaxOrderByAggregateInput = {
    userId?: SortOrder
    missionId?: SortOrder
    status?: SortOrder
    acceptedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserMissionMinOrderByAggregateInput = {
    userId?: SortOrder
    missionId?: SortOrder
    status?: SortOrder
    acceptedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserMissionSumOrderByAggregateInput = {
    userId?: SortOrder
    missionId?: SortOrder
  }

  export type EnumUserMissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMissionStatus | EnumUserMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserMissionStatus[]
    notIn?: $Enums.UserMissionStatus[]
    not?: NestedEnumUserMissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserMissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserMissionStatusFilter<$PrismaModel>
    _max?: NestedEnumUserMissionStatusFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewImageListRelationFilter = {
    every?: ReviewImageWhereInput
    some?: ReviewImageWhereInput
    none?: ReviewImageWhereInput
  }

  export type ReviewAnswerListRelationFilter = {
    every?: ReviewAnswerWhereInput
    some?: ReviewAnswerWhereInput
    none?: ReviewAnswerWhereInput
  }

  export type ReviewImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreReviewOrderByRelevanceInput = {
    fields: StoreReviewOrderByRelevanceFieldEnum | StoreReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreReviewCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    writerId?: SortOrder
    storeId?: SortOrder
  }

  export type StoreReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    writerId?: SortOrder
    storeId?: SortOrder
  }

  export type StoreReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    writerId?: SortOrder
    storeId?: SortOrder
  }

  export type StoreReviewMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    writerId?: SortOrder
    storeId?: SortOrder
  }

  export type StoreReviewSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    writerId?: SortOrder
    storeId?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StoreReviewScalarRelationFilter = {
    is?: StoreReviewWhereInput
    isNot?: StoreReviewWhereInput
  }

  export type ReviewImageOrderByRelevanceInput = {
    fields: ReviewImageOrderByRelevanceFieldEnum | ReviewImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewImageCountOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewImageAvgOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewImageMaxOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewImageMinOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewImageSumOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewAnswerOrderByRelevanceInput = {
    fields: ReviewAnswerOrderByRelevanceFieldEnum | ReviewAnswerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewAnswerCountOrderByAggregateInput = {
    reviewId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAnswerAvgOrderByAggregateInput = {
    reviewId?: SortOrder
  }

  export type ReviewAnswerMaxOrderByAggregateInput = {
    reviewId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAnswerMinOrderByAggregateInput = {
    reviewId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAnswerSumOrderByAggregateInput = {
    reviewId?: SortOrder
  }

  export type EnumInquiryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryType | EnumInquiryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryType[]
    notIn?: $Enums.InquiryType[]
    not?: NestedEnumInquiryTypeFilter<$PrismaModel> | $Enums.InquiryType
  }

  export type EnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type InquiryImageListRelationFilter = {
    every?: InquiryImageWhereInput
    some?: InquiryImageWhereInput
    none?: InquiryImageWhereInput
  }

  export type InquiryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InquiryOrderByRelevanceInput = {
    fields: InquiryOrderByRelevanceFieldEnum | InquiryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    itype?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type InquiryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    itype?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    itype?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type InquirySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumInquiryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryType | EnumInquiryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryType[]
    notIn?: $Enums.InquiryType[]
    not?: NestedEnumInquiryTypeWithAggregatesFilter<$PrismaModel> | $Enums.InquiryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryTypeFilter<$PrismaModel>
    _max?: NestedEnumInquiryTypeFilter<$PrismaModel>
  }

  export type EnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type InquiryScalarRelationFilter = {
    is?: InquiryWhereInput
    isNot?: InquiryWhereInput
  }

  export type InquiryImageOrderByRelevanceInput = {
    fields: InquiryImageOrderByRelevanceFieldEnum | InquiryImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InquiryImageCountOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    inquiryId?: SortOrder
  }

  export type InquiryImageAvgOrderByAggregateInput = {
    id?: SortOrder
    inquiryId?: SortOrder
  }

  export type InquiryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    inquiryId?: SortOrder
  }

  export type InquiryImageMinOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    inquiryId?: SortOrder
  }

  export type InquiryImageSumOrderByAggregateInput = {
    id?: SortOrder
    inquiryId?: SortOrder
  }

  export type TermsCreateNestedManyWithoutUserInput = {
    create?: XOR<TermsCreateWithoutUserInput, TermsUncheckedCreateWithoutUserInput> | TermsCreateWithoutUserInput[] | TermsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TermsCreateOrConnectWithoutUserInput | TermsCreateOrConnectWithoutUserInput[]
    createMany?: TermsCreateManyUserInputEnvelope
    connect?: TermsWhereUniqueInput | TermsWhereUniqueInput[]
  }

  export type UserPreferCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferCreateWithoutUserInput, UserPreferUncheckedCreateWithoutUserInput> | UserPreferCreateWithoutUserInput[] | UserPreferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferCreateOrConnectWithoutUserInput | UserPreferCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferCreateManyUserInputEnvelope
    connect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
  }

  export type UserRegionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRegionCreateWithoutUserInput, UserRegionUncheckedCreateWithoutUserInput> | UserRegionCreateWithoutUserInput[] | UserRegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRegionCreateOrConnectWithoutUserInput | UserRegionCreateOrConnectWithoutUserInput[]
    createMany?: UserRegionCreateManyUserInputEnvelope
    connect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
  }

  export type StoreCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type UserMissionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMissionCreateWithoutUserInput, UserMissionUncheckedCreateWithoutUserInput> | UserMissionCreateWithoutUserInput[] | UserMissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMissionCreateOrConnectWithoutUserInput | UserMissionCreateOrConnectWithoutUserInput[]
    createMany?: UserMissionCreateManyUserInputEnvelope
    connect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
  }

  export type StoreReviewCreateNestedManyWithoutWriterInput = {
    create?: XOR<StoreReviewCreateWithoutWriterInput, StoreReviewUncheckedCreateWithoutWriterInput> | StoreReviewCreateWithoutWriterInput[] | StoreReviewUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: StoreReviewCreateOrConnectWithoutWriterInput | StoreReviewCreateOrConnectWithoutWriterInput[]
    createMany?: StoreReviewCreateManyWriterInputEnvelope
    connect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
  }

  export type InquiryCreateNestedManyWithoutUserInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type TermsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TermsCreateWithoutUserInput, TermsUncheckedCreateWithoutUserInput> | TermsCreateWithoutUserInput[] | TermsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TermsCreateOrConnectWithoutUserInput | TermsCreateOrConnectWithoutUserInput[]
    createMany?: TermsCreateManyUserInputEnvelope
    connect?: TermsWhereUniqueInput | TermsWhereUniqueInput[]
  }

  export type UserPreferUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferCreateWithoutUserInput, UserPreferUncheckedCreateWithoutUserInput> | UserPreferCreateWithoutUserInput[] | UserPreferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferCreateOrConnectWithoutUserInput | UserPreferCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferCreateManyUserInputEnvelope
    connect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
  }

  export type UserRegionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRegionCreateWithoutUserInput, UserRegionUncheckedCreateWithoutUserInput> | UserRegionCreateWithoutUserInput[] | UserRegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRegionCreateOrConnectWithoutUserInput | UserRegionCreateOrConnectWithoutUserInput[]
    createMany?: UserRegionCreateManyUserInputEnvelope
    connect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type UserMissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMissionCreateWithoutUserInput, UserMissionUncheckedCreateWithoutUserInput> | UserMissionCreateWithoutUserInput[] | UserMissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMissionCreateOrConnectWithoutUserInput | UserMissionCreateOrConnectWithoutUserInput[]
    createMany?: UserMissionCreateManyUserInputEnvelope
    connect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
  }

  export type StoreReviewUncheckedCreateNestedManyWithoutWriterInput = {
    create?: XOR<StoreReviewCreateWithoutWriterInput, StoreReviewUncheckedCreateWithoutWriterInput> | StoreReviewCreateWithoutWriterInput[] | StoreReviewUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: StoreReviewCreateOrConnectWithoutWriterInput | StoreReviewCreateOrConnectWithoutWriterInput[]
    createMany?: StoreReviewCreateManyWriterInputEnvelope
    connect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
  }

  export type InquiryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TermsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TermsCreateWithoutUserInput, TermsUncheckedCreateWithoutUserInput> | TermsCreateWithoutUserInput[] | TermsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TermsCreateOrConnectWithoutUserInput | TermsCreateOrConnectWithoutUserInput[]
    upsert?: TermsUpsertWithWhereUniqueWithoutUserInput | TermsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TermsCreateManyUserInputEnvelope
    set?: TermsWhereUniqueInput | TermsWhereUniqueInput[]
    disconnect?: TermsWhereUniqueInput | TermsWhereUniqueInput[]
    delete?: TermsWhereUniqueInput | TermsWhereUniqueInput[]
    connect?: TermsWhereUniqueInput | TermsWhereUniqueInput[]
    update?: TermsUpdateWithWhereUniqueWithoutUserInput | TermsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TermsUpdateManyWithWhereWithoutUserInput | TermsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TermsScalarWhereInput | TermsScalarWhereInput[]
  }

  export type UserPreferUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferCreateWithoutUserInput, UserPreferUncheckedCreateWithoutUserInput> | UserPreferCreateWithoutUserInput[] | UserPreferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferCreateOrConnectWithoutUserInput | UserPreferCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferUpsertWithWhereUniqueWithoutUserInput | UserPreferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferCreateManyUserInputEnvelope
    set?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    disconnect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    delete?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    connect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    update?: UserPreferUpdateWithWhereUniqueWithoutUserInput | UserPreferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferUpdateManyWithWhereWithoutUserInput | UserPreferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferScalarWhereInput | UserPreferScalarWhereInput[]
  }

  export type UserRegionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRegionCreateWithoutUserInput, UserRegionUncheckedCreateWithoutUserInput> | UserRegionCreateWithoutUserInput[] | UserRegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRegionCreateOrConnectWithoutUserInput | UserRegionCreateOrConnectWithoutUserInput[]
    upsert?: UserRegionUpsertWithWhereUniqueWithoutUserInput | UserRegionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRegionCreateManyUserInputEnvelope
    set?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    disconnect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    delete?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    connect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    update?: UserRegionUpdateWithWhereUniqueWithoutUserInput | UserRegionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRegionUpdateManyWithWhereWithoutUserInput | UserRegionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRegionScalarWhereInput | UserRegionScalarWhereInput[]
  }

  export type StoreUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutOwnerInput | StoreUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutOwnerInput | StoreUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutOwnerInput | StoreUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type UserMissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMissionCreateWithoutUserInput, UserMissionUncheckedCreateWithoutUserInput> | UserMissionCreateWithoutUserInput[] | UserMissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMissionCreateOrConnectWithoutUserInput | UserMissionCreateOrConnectWithoutUserInput[]
    upsert?: UserMissionUpsertWithWhereUniqueWithoutUserInput | UserMissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMissionCreateManyUserInputEnvelope
    set?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    disconnect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    delete?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    connect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    update?: UserMissionUpdateWithWhereUniqueWithoutUserInput | UserMissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMissionUpdateManyWithWhereWithoutUserInput | UserMissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMissionScalarWhereInput | UserMissionScalarWhereInput[]
  }

  export type StoreReviewUpdateManyWithoutWriterNestedInput = {
    create?: XOR<StoreReviewCreateWithoutWriterInput, StoreReviewUncheckedCreateWithoutWriterInput> | StoreReviewCreateWithoutWriterInput[] | StoreReviewUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: StoreReviewCreateOrConnectWithoutWriterInput | StoreReviewCreateOrConnectWithoutWriterInput[]
    upsert?: StoreReviewUpsertWithWhereUniqueWithoutWriterInput | StoreReviewUpsertWithWhereUniqueWithoutWriterInput[]
    createMany?: StoreReviewCreateManyWriterInputEnvelope
    set?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    disconnect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    delete?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    connect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    update?: StoreReviewUpdateWithWhereUniqueWithoutWriterInput | StoreReviewUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: StoreReviewUpdateManyWithWhereWithoutWriterInput | StoreReviewUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: StoreReviewScalarWhereInput | StoreReviewScalarWhereInput[]
  }

  export type InquiryUpdateManyWithoutUserNestedInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutUserInput | InquiryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutUserInput | InquiryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutUserInput | InquiryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type TermsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TermsCreateWithoutUserInput, TermsUncheckedCreateWithoutUserInput> | TermsCreateWithoutUserInput[] | TermsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TermsCreateOrConnectWithoutUserInput | TermsCreateOrConnectWithoutUserInput[]
    upsert?: TermsUpsertWithWhereUniqueWithoutUserInput | TermsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TermsCreateManyUserInputEnvelope
    set?: TermsWhereUniqueInput | TermsWhereUniqueInput[]
    disconnect?: TermsWhereUniqueInput | TermsWhereUniqueInput[]
    delete?: TermsWhereUniqueInput | TermsWhereUniqueInput[]
    connect?: TermsWhereUniqueInput | TermsWhereUniqueInput[]
    update?: TermsUpdateWithWhereUniqueWithoutUserInput | TermsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TermsUpdateManyWithWhereWithoutUserInput | TermsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TermsScalarWhereInput | TermsScalarWhereInput[]
  }

  export type UserPreferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferCreateWithoutUserInput, UserPreferUncheckedCreateWithoutUserInput> | UserPreferCreateWithoutUserInput[] | UserPreferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferCreateOrConnectWithoutUserInput | UserPreferCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferUpsertWithWhereUniqueWithoutUserInput | UserPreferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferCreateManyUserInputEnvelope
    set?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    disconnect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    delete?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    connect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    update?: UserPreferUpdateWithWhereUniqueWithoutUserInput | UserPreferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferUpdateManyWithWhereWithoutUserInput | UserPreferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferScalarWhereInput | UserPreferScalarWhereInput[]
  }

  export type UserRegionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRegionCreateWithoutUserInput, UserRegionUncheckedCreateWithoutUserInput> | UserRegionCreateWithoutUserInput[] | UserRegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRegionCreateOrConnectWithoutUserInput | UserRegionCreateOrConnectWithoutUserInput[]
    upsert?: UserRegionUpsertWithWhereUniqueWithoutUserInput | UserRegionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRegionCreateManyUserInputEnvelope
    set?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    disconnect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    delete?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    connect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    update?: UserRegionUpdateWithWhereUniqueWithoutUserInput | UserRegionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRegionUpdateManyWithWhereWithoutUserInput | UserRegionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRegionScalarWhereInput | UserRegionScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutOwnerInput | StoreUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutOwnerInput | StoreUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutOwnerInput | StoreUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type UserMissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMissionCreateWithoutUserInput, UserMissionUncheckedCreateWithoutUserInput> | UserMissionCreateWithoutUserInput[] | UserMissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMissionCreateOrConnectWithoutUserInput | UserMissionCreateOrConnectWithoutUserInput[]
    upsert?: UserMissionUpsertWithWhereUniqueWithoutUserInput | UserMissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMissionCreateManyUserInputEnvelope
    set?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    disconnect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    delete?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    connect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    update?: UserMissionUpdateWithWhereUniqueWithoutUserInput | UserMissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMissionUpdateManyWithWhereWithoutUserInput | UserMissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMissionScalarWhereInput | UserMissionScalarWhereInput[]
  }

  export type StoreReviewUncheckedUpdateManyWithoutWriterNestedInput = {
    create?: XOR<StoreReviewCreateWithoutWriterInput, StoreReviewUncheckedCreateWithoutWriterInput> | StoreReviewCreateWithoutWriterInput[] | StoreReviewUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: StoreReviewCreateOrConnectWithoutWriterInput | StoreReviewCreateOrConnectWithoutWriterInput[]
    upsert?: StoreReviewUpsertWithWhereUniqueWithoutWriterInput | StoreReviewUpsertWithWhereUniqueWithoutWriterInput[]
    createMany?: StoreReviewCreateManyWriterInputEnvelope
    set?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    disconnect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    delete?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    connect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    update?: StoreReviewUpdateWithWhereUniqueWithoutWriterInput | StoreReviewUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: StoreReviewUpdateManyWithWhereWithoutWriterInput | StoreReviewUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: StoreReviewScalarWhereInput | StoreReviewScalarWhereInput[]
  }

  export type InquiryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutUserInput | InquiryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutUserInput | InquiryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutUserInput | InquiryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTermsInput = {
    create?: XOR<UserCreateWithoutTermsInput, UserUncheckedCreateWithoutTermsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTermsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTermsNestedInput = {
    create?: XOR<UserCreateWithoutTermsInput, UserUncheckedCreateWithoutTermsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTermsInput
    upsert?: UserUpsertWithoutTermsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTermsInput, UserUpdateWithoutTermsInput>, UserUncheckedUpdateWithoutTermsInput>
  }

  export type UserPreferCreateNestedManyWithoutPreferCategoryInput = {
    create?: XOR<UserPreferCreateWithoutPreferCategoryInput, UserPreferUncheckedCreateWithoutPreferCategoryInput> | UserPreferCreateWithoutPreferCategoryInput[] | UserPreferUncheckedCreateWithoutPreferCategoryInput[]
    connectOrCreate?: UserPreferCreateOrConnectWithoutPreferCategoryInput | UserPreferCreateOrConnectWithoutPreferCategoryInput[]
    createMany?: UserPreferCreateManyPreferCategoryInputEnvelope
    connect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
  }

  export type UserPreferUncheckedCreateNestedManyWithoutPreferCategoryInput = {
    create?: XOR<UserPreferCreateWithoutPreferCategoryInput, UserPreferUncheckedCreateWithoutPreferCategoryInput> | UserPreferCreateWithoutPreferCategoryInput[] | UserPreferUncheckedCreateWithoutPreferCategoryInput[]
    connectOrCreate?: UserPreferCreateOrConnectWithoutPreferCategoryInput | UserPreferCreateOrConnectWithoutPreferCategoryInput[]
    createMany?: UserPreferCreateManyPreferCategoryInputEnvelope
    connect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
  }

  export type UserPreferUpdateManyWithoutPreferCategoryNestedInput = {
    create?: XOR<UserPreferCreateWithoutPreferCategoryInput, UserPreferUncheckedCreateWithoutPreferCategoryInput> | UserPreferCreateWithoutPreferCategoryInput[] | UserPreferUncheckedCreateWithoutPreferCategoryInput[]
    connectOrCreate?: UserPreferCreateOrConnectWithoutPreferCategoryInput | UserPreferCreateOrConnectWithoutPreferCategoryInput[]
    upsert?: UserPreferUpsertWithWhereUniqueWithoutPreferCategoryInput | UserPreferUpsertWithWhereUniqueWithoutPreferCategoryInput[]
    createMany?: UserPreferCreateManyPreferCategoryInputEnvelope
    set?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    disconnect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    delete?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    connect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    update?: UserPreferUpdateWithWhereUniqueWithoutPreferCategoryInput | UserPreferUpdateWithWhereUniqueWithoutPreferCategoryInput[]
    updateMany?: UserPreferUpdateManyWithWhereWithoutPreferCategoryInput | UserPreferUpdateManyWithWhereWithoutPreferCategoryInput[]
    deleteMany?: UserPreferScalarWhereInput | UserPreferScalarWhereInput[]
  }

  export type UserPreferUncheckedUpdateManyWithoutPreferCategoryNestedInput = {
    create?: XOR<UserPreferCreateWithoutPreferCategoryInput, UserPreferUncheckedCreateWithoutPreferCategoryInput> | UserPreferCreateWithoutPreferCategoryInput[] | UserPreferUncheckedCreateWithoutPreferCategoryInput[]
    connectOrCreate?: UserPreferCreateOrConnectWithoutPreferCategoryInput | UserPreferCreateOrConnectWithoutPreferCategoryInput[]
    upsert?: UserPreferUpsertWithWhereUniqueWithoutPreferCategoryInput | UserPreferUpsertWithWhereUniqueWithoutPreferCategoryInput[]
    createMany?: UserPreferCreateManyPreferCategoryInputEnvelope
    set?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    disconnect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    delete?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    connect?: UserPreferWhereUniqueInput | UserPreferWhereUniqueInput[]
    update?: UserPreferUpdateWithWhereUniqueWithoutPreferCategoryInput | UserPreferUpdateWithWhereUniqueWithoutPreferCategoryInput[]
    updateMany?: UserPreferUpdateManyWithWhereWithoutPreferCategoryInput | UserPreferUpdateManyWithWhereWithoutPreferCategoryInput[]
    deleteMany?: UserPreferScalarWhereInput | UserPreferScalarWhereInput[]
  }

  export type UserRegionCreateNestedManyWithoutRegionInput = {
    create?: XOR<UserRegionCreateWithoutRegionInput, UserRegionUncheckedCreateWithoutRegionInput> | UserRegionCreateWithoutRegionInput[] | UserRegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserRegionCreateOrConnectWithoutRegionInput | UserRegionCreateOrConnectWithoutRegionInput[]
    createMany?: UserRegionCreateManyRegionInputEnvelope
    connect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
  }

  export type MissionCreateNestedManyWithoutRegionInput = {
    create?: XOR<MissionCreateWithoutRegionInput, MissionUncheckedCreateWithoutRegionInput> | MissionCreateWithoutRegionInput[] | MissionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutRegionInput | MissionCreateOrConnectWithoutRegionInput[]
    createMany?: MissionCreateManyRegionInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type UserRegionUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<UserRegionCreateWithoutRegionInput, UserRegionUncheckedCreateWithoutRegionInput> | UserRegionCreateWithoutRegionInput[] | UserRegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserRegionCreateOrConnectWithoutRegionInput | UserRegionCreateOrConnectWithoutRegionInput[]
    createMany?: UserRegionCreateManyRegionInputEnvelope
    connect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<MissionCreateWithoutRegionInput, MissionUncheckedCreateWithoutRegionInput> | MissionCreateWithoutRegionInput[] | MissionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutRegionInput | MissionCreateOrConnectWithoutRegionInput[]
    createMany?: MissionCreateManyRegionInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type UserRegionUpdateManyWithoutRegionNestedInput = {
    create?: XOR<UserRegionCreateWithoutRegionInput, UserRegionUncheckedCreateWithoutRegionInput> | UserRegionCreateWithoutRegionInput[] | UserRegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserRegionCreateOrConnectWithoutRegionInput | UserRegionCreateOrConnectWithoutRegionInput[]
    upsert?: UserRegionUpsertWithWhereUniqueWithoutRegionInput | UserRegionUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: UserRegionCreateManyRegionInputEnvelope
    set?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    disconnect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    delete?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    connect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    update?: UserRegionUpdateWithWhereUniqueWithoutRegionInput | UserRegionUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: UserRegionUpdateManyWithWhereWithoutRegionInput | UserRegionUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: UserRegionScalarWhereInput | UserRegionScalarWhereInput[]
  }

  export type MissionUpdateManyWithoutRegionNestedInput = {
    create?: XOR<MissionCreateWithoutRegionInput, MissionUncheckedCreateWithoutRegionInput> | MissionCreateWithoutRegionInput[] | MissionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutRegionInput | MissionCreateOrConnectWithoutRegionInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutRegionInput | MissionUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: MissionCreateManyRegionInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutRegionInput | MissionUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutRegionInput | MissionUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type UserRegionUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<UserRegionCreateWithoutRegionInput, UserRegionUncheckedCreateWithoutRegionInput> | UserRegionCreateWithoutRegionInput[] | UserRegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserRegionCreateOrConnectWithoutRegionInput | UserRegionCreateOrConnectWithoutRegionInput[]
    upsert?: UserRegionUpsertWithWhereUniqueWithoutRegionInput | UserRegionUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: UserRegionCreateManyRegionInputEnvelope
    set?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    disconnect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    delete?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    connect?: UserRegionWhereUniqueInput | UserRegionWhereUniqueInput[]
    update?: UserRegionUpdateWithWhereUniqueWithoutRegionInput | UserRegionUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: UserRegionUpdateManyWithWhereWithoutRegionInput | UserRegionUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: UserRegionScalarWhereInput | UserRegionScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<MissionCreateWithoutRegionInput, MissionUncheckedCreateWithoutRegionInput> | MissionCreateWithoutRegionInput[] | MissionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutRegionInput | MissionCreateOrConnectWithoutRegionInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutRegionInput | MissionUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: MissionCreateManyRegionInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutRegionInput | MissionUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutRegionInput | MissionUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserPreferInput = {
    create?: XOR<UserCreateWithoutUserPreferInput, UserUncheckedCreateWithoutUserPreferInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPreferInput
    connect?: UserWhereUniqueInput
  }

  export type PreferCategoryCreateNestedOneWithoutUserPreferInput = {
    create?: XOR<PreferCategoryCreateWithoutUserPreferInput, PreferCategoryUncheckedCreateWithoutUserPreferInput>
    connectOrCreate?: PreferCategoryCreateOrConnectWithoutUserPreferInput
    connect?: PreferCategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserPreferNestedInput = {
    create?: XOR<UserCreateWithoutUserPreferInput, UserUncheckedCreateWithoutUserPreferInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPreferInput
    upsert?: UserUpsertWithoutUserPreferInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPreferInput, UserUpdateWithoutUserPreferInput>, UserUncheckedUpdateWithoutUserPreferInput>
  }

  export type PreferCategoryUpdateOneRequiredWithoutUserPreferNestedInput = {
    create?: XOR<PreferCategoryCreateWithoutUserPreferInput, PreferCategoryUncheckedCreateWithoutUserPreferInput>
    connectOrCreate?: PreferCategoryCreateOrConnectWithoutUserPreferInput
    upsert?: PreferCategoryUpsertWithoutUserPreferInput
    connect?: PreferCategoryWhereUniqueInput
    update?: XOR<XOR<PreferCategoryUpdateToOneWithWhereWithoutUserPreferInput, PreferCategoryUpdateWithoutUserPreferInput>, PreferCategoryUncheckedUpdateWithoutUserPreferInput>
  }

  export type UserCreateNestedOneWithoutUserRegionInput = {
    create?: XOR<UserCreateWithoutUserRegionInput, UserUncheckedCreateWithoutUserRegionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRegionInput
    connect?: UserWhereUniqueInput
  }

  export type RegionCreateNestedOneWithoutUserRegionInput = {
    create?: XOR<RegionCreateWithoutUserRegionInput, RegionUncheckedCreateWithoutUserRegionInput>
    connectOrCreate?: RegionCreateOrConnectWithoutUserRegionInput
    connect?: RegionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRegionNestedInput = {
    create?: XOR<UserCreateWithoutUserRegionInput, UserUncheckedCreateWithoutUserRegionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRegionInput
    upsert?: UserUpsertWithoutUserRegionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRegionInput, UserUpdateWithoutUserRegionInput>, UserUncheckedUpdateWithoutUserRegionInput>
  }

  export type RegionUpdateOneRequiredWithoutUserRegionNestedInput = {
    create?: XOR<RegionCreateWithoutUserRegionInput, RegionUncheckedCreateWithoutUserRegionInput>
    connectOrCreate?: RegionCreateOrConnectWithoutUserRegionInput
    upsert?: RegionUpsertWithoutUserRegionInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutUserRegionInput, RegionUpdateWithoutUserRegionInput>, RegionUncheckedUpdateWithoutUserRegionInput>
  }

  export type UserCreateNestedOneWithoutStoreInput = {
    create?: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreInput
    connect?: UserWhereUniqueInput
  }

  export type StoreImageCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput> | StoreImageCreateWithoutStoreInput[] | StoreImageUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreImageCreateOrConnectWithoutStoreInput | StoreImageCreateOrConnectWithoutStoreInput[]
    createMany?: StoreImageCreateManyStoreInputEnvelope
    connect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
  }

  export type MissionCreateNestedManyWithoutStoreInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type StoreReviewCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreReviewCreateWithoutStoreInput, StoreReviewUncheckedCreateWithoutStoreInput> | StoreReviewCreateWithoutStoreInput[] | StoreReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreReviewCreateOrConnectWithoutStoreInput | StoreReviewCreateOrConnectWithoutStoreInput[]
    createMany?: StoreReviewCreateManyStoreInputEnvelope
    connect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
  }

  export type StoreImageUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput> | StoreImageCreateWithoutStoreInput[] | StoreImageUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreImageCreateOrConnectWithoutStoreInput | StoreImageCreateOrConnectWithoutStoreInput[]
    createMany?: StoreImageCreateManyStoreInputEnvelope
    connect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type StoreReviewUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreReviewCreateWithoutStoreInput, StoreReviewUncheckedCreateWithoutStoreInput> | StoreReviewCreateWithoutStoreInput[] | StoreReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreReviewCreateOrConnectWithoutStoreInput | StoreReviewCreateOrConnectWithoutStoreInput[]
    createMany?: StoreReviewCreateManyStoreInputEnvelope
    connect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutStoreNestedInput = {
    create?: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreInput
    upsert?: UserUpsertWithoutStoreInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoreInput, UserUpdateWithoutStoreInput>, UserUncheckedUpdateWithoutStoreInput>
  }

  export type StoreImageUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput> | StoreImageCreateWithoutStoreInput[] | StoreImageUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreImageCreateOrConnectWithoutStoreInput | StoreImageCreateOrConnectWithoutStoreInput[]
    upsert?: StoreImageUpsertWithWhereUniqueWithoutStoreInput | StoreImageUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreImageCreateManyStoreInputEnvelope
    set?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    disconnect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    delete?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    connect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    update?: StoreImageUpdateWithWhereUniqueWithoutStoreInput | StoreImageUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreImageUpdateManyWithWhereWithoutStoreInput | StoreImageUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreImageScalarWhereInput | StoreImageScalarWhereInput[]
  }

  export type MissionUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutStoreInput | MissionUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutStoreInput | MissionUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutStoreInput | MissionUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type StoreReviewUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreReviewCreateWithoutStoreInput, StoreReviewUncheckedCreateWithoutStoreInput> | StoreReviewCreateWithoutStoreInput[] | StoreReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreReviewCreateOrConnectWithoutStoreInput | StoreReviewCreateOrConnectWithoutStoreInput[]
    upsert?: StoreReviewUpsertWithWhereUniqueWithoutStoreInput | StoreReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreReviewCreateManyStoreInputEnvelope
    set?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    disconnect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    delete?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    connect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    update?: StoreReviewUpdateWithWhereUniqueWithoutStoreInput | StoreReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreReviewUpdateManyWithWhereWithoutStoreInput | StoreReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreReviewScalarWhereInput | StoreReviewScalarWhereInput[]
  }

  export type StoreImageUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput> | StoreImageCreateWithoutStoreInput[] | StoreImageUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreImageCreateOrConnectWithoutStoreInput | StoreImageCreateOrConnectWithoutStoreInput[]
    upsert?: StoreImageUpsertWithWhereUniqueWithoutStoreInput | StoreImageUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreImageCreateManyStoreInputEnvelope
    set?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    disconnect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    delete?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    connect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    update?: StoreImageUpdateWithWhereUniqueWithoutStoreInput | StoreImageUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreImageUpdateManyWithWhereWithoutStoreInput | StoreImageUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreImageScalarWhereInput | StoreImageScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutStoreInput | MissionUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutStoreInput | MissionUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutStoreInput | MissionUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type StoreReviewUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreReviewCreateWithoutStoreInput, StoreReviewUncheckedCreateWithoutStoreInput> | StoreReviewCreateWithoutStoreInput[] | StoreReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreReviewCreateOrConnectWithoutStoreInput | StoreReviewCreateOrConnectWithoutStoreInput[]
    upsert?: StoreReviewUpsertWithWhereUniqueWithoutStoreInput | StoreReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreReviewCreateManyStoreInputEnvelope
    set?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    disconnect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    delete?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    connect?: StoreReviewWhereUniqueInput | StoreReviewWhereUniqueInput[]
    update?: StoreReviewUpdateWithWhereUniqueWithoutStoreInput | StoreReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreReviewUpdateManyWithWhereWithoutStoreInput | StoreReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreReviewScalarWhereInput | StoreReviewScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutStoreImageInput = {
    create?: XOR<StoreCreateWithoutStoreImageInput, StoreUncheckedCreateWithoutStoreImageInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStoreImageInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutStoreImageNestedInput = {
    create?: XOR<StoreCreateWithoutStoreImageInput, StoreUncheckedCreateWithoutStoreImageInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStoreImageInput
    upsert?: StoreUpsertWithoutStoreImageInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutStoreImageInput, StoreUpdateWithoutStoreImageInput>, StoreUncheckedUpdateWithoutStoreImageInput>
  }

  export type StoreCreateNestedOneWithoutMissionInput = {
    create?: XOR<StoreCreateWithoutMissionInput, StoreUncheckedCreateWithoutMissionInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMissionInput
    connect?: StoreWhereUniqueInput
  }

  export type RegionCreateNestedOneWithoutMissionInput = {
    create?: XOR<RegionCreateWithoutMissionInput, RegionUncheckedCreateWithoutMissionInput>
    connectOrCreate?: RegionCreateOrConnectWithoutMissionInput
    connect?: RegionWhereUniqueInput
  }

  export type UserMissionCreateNestedManyWithoutMissionInput = {
    create?: XOR<UserMissionCreateWithoutMissionInput, UserMissionUncheckedCreateWithoutMissionInput> | UserMissionCreateWithoutMissionInput[] | UserMissionUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserMissionCreateOrConnectWithoutMissionInput | UserMissionCreateOrConnectWithoutMissionInput[]
    createMany?: UserMissionCreateManyMissionInputEnvelope
    connect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
  }

  export type UserMissionUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<UserMissionCreateWithoutMissionInput, UserMissionUncheckedCreateWithoutMissionInput> | UserMissionCreateWithoutMissionInput[] | UserMissionUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserMissionCreateOrConnectWithoutMissionInput | UserMissionCreateOrConnectWithoutMissionInput[]
    createMany?: UserMissionCreateManyMissionInputEnvelope
    connect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
  }

  export type StoreUpdateOneRequiredWithoutMissionNestedInput = {
    create?: XOR<StoreCreateWithoutMissionInput, StoreUncheckedCreateWithoutMissionInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMissionInput
    upsert?: StoreUpsertWithoutMissionInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutMissionInput, StoreUpdateWithoutMissionInput>, StoreUncheckedUpdateWithoutMissionInput>
  }

  export type RegionUpdateOneRequiredWithoutMissionNestedInput = {
    create?: XOR<RegionCreateWithoutMissionInput, RegionUncheckedCreateWithoutMissionInput>
    connectOrCreate?: RegionCreateOrConnectWithoutMissionInput
    upsert?: RegionUpsertWithoutMissionInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutMissionInput, RegionUpdateWithoutMissionInput>, RegionUncheckedUpdateWithoutMissionInput>
  }

  export type UserMissionUpdateManyWithoutMissionNestedInput = {
    create?: XOR<UserMissionCreateWithoutMissionInput, UserMissionUncheckedCreateWithoutMissionInput> | UserMissionCreateWithoutMissionInput[] | UserMissionUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserMissionCreateOrConnectWithoutMissionInput | UserMissionCreateOrConnectWithoutMissionInput[]
    upsert?: UserMissionUpsertWithWhereUniqueWithoutMissionInput | UserMissionUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: UserMissionCreateManyMissionInputEnvelope
    set?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    disconnect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    delete?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    connect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    update?: UserMissionUpdateWithWhereUniqueWithoutMissionInput | UserMissionUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: UserMissionUpdateManyWithWhereWithoutMissionInput | UserMissionUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: UserMissionScalarWhereInput | UserMissionScalarWhereInput[]
  }

  export type UserMissionUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<UserMissionCreateWithoutMissionInput, UserMissionUncheckedCreateWithoutMissionInput> | UserMissionCreateWithoutMissionInput[] | UserMissionUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserMissionCreateOrConnectWithoutMissionInput | UserMissionCreateOrConnectWithoutMissionInput[]
    upsert?: UserMissionUpsertWithWhereUniqueWithoutMissionInput | UserMissionUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: UserMissionCreateManyMissionInputEnvelope
    set?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    disconnect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    delete?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    connect?: UserMissionWhereUniqueInput | UserMissionWhereUniqueInput[]
    update?: UserMissionUpdateWithWhereUniqueWithoutMissionInput | UserMissionUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: UserMissionUpdateManyWithWhereWithoutMissionInput | UserMissionUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: UserMissionScalarWhereInput | UserMissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserMissionInput = {
    create?: XOR<UserCreateWithoutUserMissionInput, UserUncheckedCreateWithoutUserMissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMissionInput
    connect?: UserWhereUniqueInput
  }

  export type MissionCreateNestedOneWithoutUserMissionInput = {
    create?: XOR<MissionCreateWithoutUserMissionInput, MissionUncheckedCreateWithoutUserMissionInput>
    connectOrCreate?: MissionCreateOrConnectWithoutUserMissionInput
    connect?: MissionWhereUniqueInput
  }

  export type EnumUserMissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserMissionStatus
  }

  export type UserUpdateOneRequiredWithoutUserMissionNestedInput = {
    create?: XOR<UserCreateWithoutUserMissionInput, UserUncheckedCreateWithoutUserMissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMissionInput
    upsert?: UserUpsertWithoutUserMissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserMissionInput, UserUpdateWithoutUserMissionInput>, UserUncheckedUpdateWithoutUserMissionInput>
  }

  export type MissionUpdateOneRequiredWithoutUserMissionNestedInput = {
    create?: XOR<MissionCreateWithoutUserMissionInput, MissionUncheckedCreateWithoutUserMissionInput>
    connectOrCreate?: MissionCreateOrConnectWithoutUserMissionInput
    upsert?: MissionUpsertWithoutUserMissionInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutUserMissionInput, MissionUpdateWithoutUserMissionInput>, MissionUncheckedUpdateWithoutUserMissionInput>
  }

  export type UserCreateNestedOneWithoutStoreReviewInput = {
    create?: XOR<UserCreateWithoutStoreReviewInput, UserUncheckedCreateWithoutStoreReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreReviewInput
    connect?: UserWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutStoreReviewInput = {
    create?: XOR<StoreCreateWithoutStoreReviewInput, StoreUncheckedCreateWithoutStoreReviewInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStoreReviewInput
    connect?: StoreWhereUniqueInput
  }

  export type ReviewImageCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewImageCreateWithoutReviewInput, ReviewImageUncheckedCreateWithoutReviewInput> | ReviewImageCreateWithoutReviewInput[] | ReviewImageUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewImageCreateOrConnectWithoutReviewInput | ReviewImageCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewImageCreateManyReviewInputEnvelope
    connect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
  }

  export type ReviewAnswerCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewAnswerCreateWithoutReviewInput, ReviewAnswerUncheckedCreateWithoutReviewInput> | ReviewAnswerCreateWithoutReviewInput[] | ReviewAnswerUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewAnswerCreateOrConnectWithoutReviewInput | ReviewAnswerCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewAnswerCreateManyReviewInputEnvelope
    connect?: ReviewAnswerWhereUniqueInput | ReviewAnswerWhereUniqueInput[]
  }

  export type ReviewImageUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewImageCreateWithoutReviewInput, ReviewImageUncheckedCreateWithoutReviewInput> | ReviewImageCreateWithoutReviewInput[] | ReviewImageUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewImageCreateOrConnectWithoutReviewInput | ReviewImageCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewImageCreateManyReviewInputEnvelope
    connect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
  }

  export type ReviewAnswerUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewAnswerCreateWithoutReviewInput, ReviewAnswerUncheckedCreateWithoutReviewInput> | ReviewAnswerCreateWithoutReviewInput[] | ReviewAnswerUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewAnswerCreateOrConnectWithoutReviewInput | ReviewAnswerCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewAnswerCreateManyReviewInputEnvelope
    connect?: ReviewAnswerWhereUniqueInput | ReviewAnswerWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutStoreReviewNestedInput = {
    create?: XOR<UserCreateWithoutStoreReviewInput, UserUncheckedCreateWithoutStoreReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreReviewInput
    upsert?: UserUpsertWithoutStoreReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoreReviewInput, UserUpdateWithoutStoreReviewInput>, UserUncheckedUpdateWithoutStoreReviewInput>
  }

  export type StoreUpdateOneRequiredWithoutStoreReviewNestedInput = {
    create?: XOR<StoreCreateWithoutStoreReviewInput, StoreUncheckedCreateWithoutStoreReviewInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStoreReviewInput
    upsert?: StoreUpsertWithoutStoreReviewInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutStoreReviewInput, StoreUpdateWithoutStoreReviewInput>, StoreUncheckedUpdateWithoutStoreReviewInput>
  }

  export type ReviewImageUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewImageCreateWithoutReviewInput, ReviewImageUncheckedCreateWithoutReviewInput> | ReviewImageCreateWithoutReviewInput[] | ReviewImageUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewImageCreateOrConnectWithoutReviewInput | ReviewImageCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewImageUpsertWithWhereUniqueWithoutReviewInput | ReviewImageUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewImageCreateManyReviewInputEnvelope
    set?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    disconnect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    delete?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    connect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    update?: ReviewImageUpdateWithWhereUniqueWithoutReviewInput | ReviewImageUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewImageUpdateManyWithWhereWithoutReviewInput | ReviewImageUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewImageScalarWhereInput | ReviewImageScalarWhereInput[]
  }

  export type ReviewAnswerUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewAnswerCreateWithoutReviewInput, ReviewAnswerUncheckedCreateWithoutReviewInput> | ReviewAnswerCreateWithoutReviewInput[] | ReviewAnswerUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewAnswerCreateOrConnectWithoutReviewInput | ReviewAnswerCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewAnswerUpsertWithWhereUniqueWithoutReviewInput | ReviewAnswerUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewAnswerCreateManyReviewInputEnvelope
    set?: ReviewAnswerWhereUniqueInput | ReviewAnswerWhereUniqueInput[]
    disconnect?: ReviewAnswerWhereUniqueInput | ReviewAnswerWhereUniqueInput[]
    delete?: ReviewAnswerWhereUniqueInput | ReviewAnswerWhereUniqueInput[]
    connect?: ReviewAnswerWhereUniqueInput | ReviewAnswerWhereUniqueInput[]
    update?: ReviewAnswerUpdateWithWhereUniqueWithoutReviewInput | ReviewAnswerUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewAnswerUpdateManyWithWhereWithoutReviewInput | ReviewAnswerUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewAnswerScalarWhereInput | ReviewAnswerScalarWhereInput[]
  }

  export type ReviewImageUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewImageCreateWithoutReviewInput, ReviewImageUncheckedCreateWithoutReviewInput> | ReviewImageCreateWithoutReviewInput[] | ReviewImageUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewImageCreateOrConnectWithoutReviewInput | ReviewImageCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewImageUpsertWithWhereUniqueWithoutReviewInput | ReviewImageUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewImageCreateManyReviewInputEnvelope
    set?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    disconnect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    delete?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    connect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    update?: ReviewImageUpdateWithWhereUniqueWithoutReviewInput | ReviewImageUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewImageUpdateManyWithWhereWithoutReviewInput | ReviewImageUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewImageScalarWhereInput | ReviewImageScalarWhereInput[]
  }

  export type ReviewAnswerUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewAnswerCreateWithoutReviewInput, ReviewAnswerUncheckedCreateWithoutReviewInput> | ReviewAnswerCreateWithoutReviewInput[] | ReviewAnswerUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewAnswerCreateOrConnectWithoutReviewInput | ReviewAnswerCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewAnswerUpsertWithWhereUniqueWithoutReviewInput | ReviewAnswerUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewAnswerCreateManyReviewInputEnvelope
    set?: ReviewAnswerWhereUniqueInput | ReviewAnswerWhereUniqueInput[]
    disconnect?: ReviewAnswerWhereUniqueInput | ReviewAnswerWhereUniqueInput[]
    delete?: ReviewAnswerWhereUniqueInput | ReviewAnswerWhereUniqueInput[]
    connect?: ReviewAnswerWhereUniqueInput | ReviewAnswerWhereUniqueInput[]
    update?: ReviewAnswerUpdateWithWhereUniqueWithoutReviewInput | ReviewAnswerUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewAnswerUpdateManyWithWhereWithoutReviewInput | ReviewAnswerUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewAnswerScalarWhereInput | ReviewAnswerScalarWhereInput[]
  }

  export type StoreReviewCreateNestedOneWithoutReviewImageInput = {
    create?: XOR<StoreReviewCreateWithoutReviewImageInput, StoreReviewUncheckedCreateWithoutReviewImageInput>
    connectOrCreate?: StoreReviewCreateOrConnectWithoutReviewImageInput
    connect?: StoreReviewWhereUniqueInput
  }

  export type StoreReviewUpdateOneRequiredWithoutReviewImageNestedInput = {
    create?: XOR<StoreReviewCreateWithoutReviewImageInput, StoreReviewUncheckedCreateWithoutReviewImageInput>
    connectOrCreate?: StoreReviewCreateOrConnectWithoutReviewImageInput
    upsert?: StoreReviewUpsertWithoutReviewImageInput
    connect?: StoreReviewWhereUniqueInput
    update?: XOR<XOR<StoreReviewUpdateToOneWithWhereWithoutReviewImageInput, StoreReviewUpdateWithoutReviewImageInput>, StoreReviewUncheckedUpdateWithoutReviewImageInput>
  }

  export type StoreReviewCreateNestedOneWithoutReviewAnswerInput = {
    create?: XOR<StoreReviewCreateWithoutReviewAnswerInput, StoreReviewUncheckedCreateWithoutReviewAnswerInput>
    connectOrCreate?: StoreReviewCreateOrConnectWithoutReviewAnswerInput
    connect?: StoreReviewWhereUniqueInput
  }

  export type StoreReviewUpdateOneRequiredWithoutReviewAnswerNestedInput = {
    create?: XOR<StoreReviewCreateWithoutReviewAnswerInput, StoreReviewUncheckedCreateWithoutReviewAnswerInput>
    connectOrCreate?: StoreReviewCreateOrConnectWithoutReviewAnswerInput
    upsert?: StoreReviewUpsertWithoutReviewAnswerInput
    connect?: StoreReviewWhereUniqueInput
    update?: XOR<XOR<StoreReviewUpdateToOneWithWhereWithoutReviewAnswerInput, StoreReviewUpdateWithoutReviewAnswerInput>, StoreReviewUncheckedUpdateWithoutReviewAnswerInput>
  }

  export type UserCreateNestedOneWithoutInquiryInput = {
    create?: XOR<UserCreateWithoutInquiryInput, UserUncheckedCreateWithoutInquiryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInquiryInput
    connect?: UserWhereUniqueInput
  }

  export type InquiryImageCreateNestedManyWithoutInquiryInput = {
    create?: XOR<InquiryImageCreateWithoutInquiryInput, InquiryImageUncheckedCreateWithoutInquiryInput> | InquiryImageCreateWithoutInquiryInput[] | InquiryImageUncheckedCreateWithoutInquiryInput[]
    connectOrCreate?: InquiryImageCreateOrConnectWithoutInquiryInput | InquiryImageCreateOrConnectWithoutInquiryInput[]
    createMany?: InquiryImageCreateManyInquiryInputEnvelope
    connect?: InquiryImageWhereUniqueInput | InquiryImageWhereUniqueInput[]
  }

  export type InquiryImageUncheckedCreateNestedManyWithoutInquiryInput = {
    create?: XOR<InquiryImageCreateWithoutInquiryInput, InquiryImageUncheckedCreateWithoutInquiryInput> | InquiryImageCreateWithoutInquiryInput[] | InquiryImageUncheckedCreateWithoutInquiryInput[]
    connectOrCreate?: InquiryImageCreateOrConnectWithoutInquiryInput | InquiryImageCreateOrConnectWithoutInquiryInput[]
    createMany?: InquiryImageCreateManyInquiryInputEnvelope
    connect?: InquiryImageWhereUniqueInput | InquiryImageWhereUniqueInput[]
  }

  export type EnumInquiryTypeFieldUpdateOperationsInput = {
    set?: $Enums.InquiryType
  }

  export type EnumInquiryStatusFieldUpdateOperationsInput = {
    set?: $Enums.InquiryStatus
  }

  export type UserUpdateOneRequiredWithoutInquiryNestedInput = {
    create?: XOR<UserCreateWithoutInquiryInput, UserUncheckedCreateWithoutInquiryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInquiryInput
    upsert?: UserUpsertWithoutInquiryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInquiryInput, UserUpdateWithoutInquiryInput>, UserUncheckedUpdateWithoutInquiryInput>
  }

  export type InquiryImageUpdateManyWithoutInquiryNestedInput = {
    create?: XOR<InquiryImageCreateWithoutInquiryInput, InquiryImageUncheckedCreateWithoutInquiryInput> | InquiryImageCreateWithoutInquiryInput[] | InquiryImageUncheckedCreateWithoutInquiryInput[]
    connectOrCreate?: InquiryImageCreateOrConnectWithoutInquiryInput | InquiryImageCreateOrConnectWithoutInquiryInput[]
    upsert?: InquiryImageUpsertWithWhereUniqueWithoutInquiryInput | InquiryImageUpsertWithWhereUniqueWithoutInquiryInput[]
    createMany?: InquiryImageCreateManyInquiryInputEnvelope
    set?: InquiryImageWhereUniqueInput | InquiryImageWhereUniqueInput[]
    disconnect?: InquiryImageWhereUniqueInput | InquiryImageWhereUniqueInput[]
    delete?: InquiryImageWhereUniqueInput | InquiryImageWhereUniqueInput[]
    connect?: InquiryImageWhereUniqueInput | InquiryImageWhereUniqueInput[]
    update?: InquiryImageUpdateWithWhereUniqueWithoutInquiryInput | InquiryImageUpdateWithWhereUniqueWithoutInquiryInput[]
    updateMany?: InquiryImageUpdateManyWithWhereWithoutInquiryInput | InquiryImageUpdateManyWithWhereWithoutInquiryInput[]
    deleteMany?: InquiryImageScalarWhereInput | InquiryImageScalarWhereInput[]
  }

  export type InquiryImageUncheckedUpdateManyWithoutInquiryNestedInput = {
    create?: XOR<InquiryImageCreateWithoutInquiryInput, InquiryImageUncheckedCreateWithoutInquiryInput> | InquiryImageCreateWithoutInquiryInput[] | InquiryImageUncheckedCreateWithoutInquiryInput[]
    connectOrCreate?: InquiryImageCreateOrConnectWithoutInquiryInput | InquiryImageCreateOrConnectWithoutInquiryInput[]
    upsert?: InquiryImageUpsertWithWhereUniqueWithoutInquiryInput | InquiryImageUpsertWithWhereUniqueWithoutInquiryInput[]
    createMany?: InquiryImageCreateManyInquiryInputEnvelope
    set?: InquiryImageWhereUniqueInput | InquiryImageWhereUniqueInput[]
    disconnect?: InquiryImageWhereUniqueInput | InquiryImageWhereUniqueInput[]
    delete?: InquiryImageWhereUniqueInput | InquiryImageWhereUniqueInput[]
    connect?: InquiryImageWhereUniqueInput | InquiryImageWhereUniqueInput[]
    update?: InquiryImageUpdateWithWhereUniqueWithoutInquiryInput | InquiryImageUpdateWithWhereUniqueWithoutInquiryInput[]
    updateMany?: InquiryImageUpdateManyWithWhereWithoutInquiryInput | InquiryImageUpdateManyWithWhereWithoutInquiryInput[]
    deleteMany?: InquiryImageScalarWhereInput | InquiryImageScalarWhereInput[]
  }

  export type InquiryCreateNestedOneWithoutInquiryImageInput = {
    create?: XOR<InquiryCreateWithoutInquiryImageInput, InquiryUncheckedCreateWithoutInquiryImageInput>
    connectOrCreate?: InquiryCreateOrConnectWithoutInquiryImageInput
    connect?: InquiryWhereUniqueInput
  }

  export type InquiryUpdateOneRequiredWithoutInquiryImageNestedInput = {
    create?: XOR<InquiryCreateWithoutInquiryImageInput, InquiryUncheckedCreateWithoutInquiryImageInput>
    connectOrCreate?: InquiryCreateOrConnectWithoutInquiryImageInput
    upsert?: InquiryUpsertWithoutInquiryImageInput
    connect?: InquiryWhereUniqueInput
    update?: XOR<XOR<InquiryUpdateToOneWithWhereWithoutInquiryImageInput, InquiryUpdateWithoutInquiryImageInput>, InquiryUncheckedUpdateWithoutInquiryImageInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumUserMissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMissionStatus | EnumUserMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserMissionStatus[]
    notIn?: $Enums.UserMissionStatus[]
    not?: NestedEnumUserMissionStatusFilter<$PrismaModel> | $Enums.UserMissionStatus
  }

  export type NestedEnumUserMissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMissionStatus | EnumUserMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserMissionStatus[]
    notIn?: $Enums.UserMissionStatus[]
    not?: NestedEnumUserMissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserMissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserMissionStatusFilter<$PrismaModel>
    _max?: NestedEnumUserMissionStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumInquiryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryType | EnumInquiryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryType[]
    notIn?: $Enums.InquiryType[]
    not?: NestedEnumInquiryTypeFilter<$PrismaModel> | $Enums.InquiryType
  }

  export type NestedEnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type NestedEnumInquiryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryType | EnumInquiryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryType[]
    notIn?: $Enums.InquiryType[]
    not?: NestedEnumInquiryTypeWithAggregatesFilter<$PrismaModel> | $Enums.InquiryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryTypeFilter<$PrismaModel>
    _max?: NestedEnumInquiryTypeFilter<$PrismaModel>
  }

  export type NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type TermsCreateWithoutUserInput = {
    id?: bigint | number
    isOverFourteen?: boolean
    agreedToTermsOfService?: boolean
    agreedToPrivacyPolicy?: boolean
    agreedToLocationServices?: boolean
    agreedToMarketingEmails?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    isOverFourteen?: boolean
    agreedToTermsOfService?: boolean
    agreedToPrivacyPolicy?: boolean
    agreedToLocationServices?: boolean
    agreedToMarketingEmails?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermsCreateOrConnectWithoutUserInput = {
    where: TermsWhereUniqueInput
    create: XOR<TermsCreateWithoutUserInput, TermsUncheckedCreateWithoutUserInput>
  }

  export type TermsCreateManyUserInputEnvelope = {
    data: TermsCreateManyUserInput | TermsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferCreateWithoutUserInput = {
    preferCategory: PreferCategoryCreateNestedOneWithoutUserPreferInput
  }

  export type UserPreferUncheckedCreateWithoutUserInput = {
    preferCategoryId: bigint | number
  }

  export type UserPreferCreateOrConnectWithoutUserInput = {
    where: UserPreferWhereUniqueInput
    create: XOR<UserPreferCreateWithoutUserInput, UserPreferUncheckedCreateWithoutUserInput>
  }

  export type UserPreferCreateManyUserInputEnvelope = {
    data: UserPreferCreateManyUserInput | UserPreferCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRegionCreateWithoutUserInput = {
    successCount?: bigint | number
    hasBonus?: boolean
    region: RegionCreateNestedOneWithoutUserRegionInput
  }

  export type UserRegionUncheckedCreateWithoutUserInput = {
    regionId: bigint | number
    successCount?: bigint | number
    hasBonus?: boolean
  }

  export type UserRegionCreateOrConnectWithoutUserInput = {
    where: UserRegionWhereUniqueInput
    create: XOR<UserRegionCreateWithoutUserInput, UserRegionUncheckedCreateWithoutUserInput>
  }

  export type UserRegionCreateManyUserInputEnvelope = {
    data: UserRegionCreateManyUserInput | UserRegionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreCreateWithoutOwnerInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    StoreImage?: StoreImageCreateNestedManyWithoutStoreInput
    Mission?: MissionCreateNestedManyWithoutStoreInput
    StoreReview?: StoreReviewCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutOwnerInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    StoreImage?: StoreImageUncheckedCreateNestedManyWithoutStoreInput
    Mission?: MissionUncheckedCreateNestedManyWithoutStoreInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutOwnerInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput>
  }

  export type StoreCreateManyOwnerInputEnvelope = {
    data: StoreCreateManyOwnerInput | StoreCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserMissionCreateWithoutUserInput = {
    status?: $Enums.UserMissionStatus
    acceptedAt?: Date | string
    completedAt?: Date | string | null
    mission: MissionCreateNestedOneWithoutUserMissionInput
  }

  export type UserMissionUncheckedCreateWithoutUserInput = {
    missionId: bigint | number
    status?: $Enums.UserMissionStatus
    acceptedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserMissionCreateOrConnectWithoutUserInput = {
    where: UserMissionWhereUniqueInput
    create: XOR<UserMissionCreateWithoutUserInput, UserMissionUncheckedCreateWithoutUserInput>
  }

  export type UserMissionCreateManyUserInputEnvelope = {
    data: UserMissionCreateManyUserInput | UserMissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreReviewCreateWithoutWriterInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutStoreReviewInput
    ReviewImage?: ReviewImageCreateNestedManyWithoutReviewInput
    ReviewAnswer?: ReviewAnswerCreateNestedManyWithoutReviewInput
  }

  export type StoreReviewUncheckedCreateWithoutWriterInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    storeId: bigint | number
    ReviewImage?: ReviewImageUncheckedCreateNestedManyWithoutReviewInput
    ReviewAnswer?: ReviewAnswerUncheckedCreateNestedManyWithoutReviewInput
  }

  export type StoreReviewCreateOrConnectWithoutWriterInput = {
    where: StoreReviewWhereUniqueInput
    create: XOR<StoreReviewCreateWithoutWriterInput, StoreReviewUncheckedCreateWithoutWriterInput>
  }

  export type StoreReviewCreateManyWriterInputEnvelope = {
    data: StoreReviewCreateManyWriterInput | StoreReviewCreateManyWriterInput[]
    skipDuplicates?: boolean
  }

  export type InquiryCreateWithoutUserInput = {
    id?: bigint | number
    title: string
    content: string
    itype: $Enums.InquiryType
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    InquiryImage?: InquiryImageCreateNestedManyWithoutInquiryInput
  }

  export type InquiryUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    title: string
    content: string
    itype: $Enums.InquiryType
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    InquiryImage?: InquiryImageUncheckedCreateNestedManyWithoutInquiryInput
  }

  export type InquiryCreateOrConnectWithoutUserInput = {
    where: InquiryWhereUniqueInput
    create: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput>
  }

  export type InquiryCreateManyUserInputEnvelope = {
    data: InquiryCreateManyUserInput | InquiryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TermsUpsertWithWhereUniqueWithoutUserInput = {
    where: TermsWhereUniqueInput
    update: XOR<TermsUpdateWithoutUserInput, TermsUncheckedUpdateWithoutUserInput>
    create: XOR<TermsCreateWithoutUserInput, TermsUncheckedCreateWithoutUserInput>
  }

  export type TermsUpdateWithWhereUniqueWithoutUserInput = {
    where: TermsWhereUniqueInput
    data: XOR<TermsUpdateWithoutUserInput, TermsUncheckedUpdateWithoutUserInput>
  }

  export type TermsUpdateManyWithWhereWithoutUserInput = {
    where: TermsScalarWhereInput
    data: XOR<TermsUpdateManyMutationInput, TermsUncheckedUpdateManyWithoutUserInput>
  }

  export type TermsScalarWhereInput = {
    AND?: TermsScalarWhereInput | TermsScalarWhereInput[]
    OR?: TermsScalarWhereInput[]
    NOT?: TermsScalarWhereInput | TermsScalarWhereInput[]
    id?: BigIntFilter<"Terms"> | bigint | number
    isOverFourteen?: BoolFilter<"Terms"> | boolean
    agreedToTermsOfService?: BoolFilter<"Terms"> | boolean
    agreedToPrivacyPolicy?: BoolFilter<"Terms"> | boolean
    agreedToLocationServices?: BoolFilter<"Terms"> | boolean
    agreedToMarketingEmails?: BoolFilter<"Terms"> | boolean
    createdAt?: DateTimeFilter<"Terms"> | Date | string
    updatedAt?: DateTimeFilter<"Terms"> | Date | string
    userId?: BigIntFilter<"Terms"> | bigint | number
  }

  export type UserPreferUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPreferWhereUniqueInput
    update: XOR<UserPreferUpdateWithoutUserInput, UserPreferUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferCreateWithoutUserInput, UserPreferUncheckedCreateWithoutUserInput>
  }

  export type UserPreferUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPreferWhereUniqueInput
    data: XOR<UserPreferUpdateWithoutUserInput, UserPreferUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferUpdateManyWithWhereWithoutUserInput = {
    where: UserPreferScalarWhereInput
    data: XOR<UserPreferUpdateManyMutationInput, UserPreferUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPreferScalarWhereInput = {
    AND?: UserPreferScalarWhereInput | UserPreferScalarWhereInput[]
    OR?: UserPreferScalarWhereInput[]
    NOT?: UserPreferScalarWhereInput | UserPreferScalarWhereInput[]
    userId?: BigIntFilter<"UserPrefer"> | bigint | number
    preferCategoryId?: BigIntFilter<"UserPrefer"> | bigint | number
  }

  export type UserRegionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRegionWhereUniqueInput
    update: XOR<UserRegionUpdateWithoutUserInput, UserRegionUncheckedUpdateWithoutUserInput>
    create: XOR<UserRegionCreateWithoutUserInput, UserRegionUncheckedCreateWithoutUserInput>
  }

  export type UserRegionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRegionWhereUniqueInput
    data: XOR<UserRegionUpdateWithoutUserInput, UserRegionUncheckedUpdateWithoutUserInput>
  }

  export type UserRegionUpdateManyWithWhereWithoutUserInput = {
    where: UserRegionScalarWhereInput
    data: XOR<UserRegionUpdateManyMutationInput, UserRegionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRegionScalarWhereInput = {
    AND?: UserRegionScalarWhereInput | UserRegionScalarWhereInput[]
    OR?: UserRegionScalarWhereInput[]
    NOT?: UserRegionScalarWhereInput | UserRegionScalarWhereInput[]
    userId?: BigIntFilter<"UserRegion"> | bigint | number
    regionId?: BigIntFilter<"UserRegion"> | bigint | number
    successCount?: BigIntFilter<"UserRegion"> | bigint | number
    hasBonus?: BoolFilter<"UserRegion"> | boolean
  }

  export type StoreUpsertWithWhereUniqueWithoutOwnerInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutOwnerInput, StoreUncheckedUpdateWithoutOwnerInput>
    create: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutOwnerInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutOwnerInput, StoreUncheckedUpdateWithoutOwnerInput>
  }

  export type StoreUpdateManyWithWhereWithoutOwnerInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutOwnerInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    id?: BigIntFilter<"Store"> | bigint | number
    name?: StringFilter<"Store"> | string
    address?: StringFilter<"Store"> | string
    stype?: StringFilter<"Store"> | string
    total?: DecimalFilter<"Store"> | Decimal | DecimalJsLike | number | string
    count?: BigIntFilter<"Store"> | bigint | number
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    ownerId?: BigIntFilter<"Store"> | bigint | number
  }

  export type UserMissionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMissionWhereUniqueInput
    update: XOR<UserMissionUpdateWithoutUserInput, UserMissionUncheckedUpdateWithoutUserInput>
    create: XOR<UserMissionCreateWithoutUserInput, UserMissionUncheckedCreateWithoutUserInput>
  }

  export type UserMissionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMissionWhereUniqueInput
    data: XOR<UserMissionUpdateWithoutUserInput, UserMissionUncheckedUpdateWithoutUserInput>
  }

  export type UserMissionUpdateManyWithWhereWithoutUserInput = {
    where: UserMissionScalarWhereInput
    data: XOR<UserMissionUpdateManyMutationInput, UserMissionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMissionScalarWhereInput = {
    AND?: UserMissionScalarWhereInput | UserMissionScalarWhereInput[]
    OR?: UserMissionScalarWhereInput[]
    NOT?: UserMissionScalarWhereInput | UserMissionScalarWhereInput[]
    userId?: BigIntFilter<"UserMission"> | bigint | number
    missionId?: BigIntFilter<"UserMission"> | bigint | number
    status?: EnumUserMissionStatusFilter<"UserMission"> | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFilter<"UserMission"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserMission"> | Date | string | null
  }

  export type StoreReviewUpsertWithWhereUniqueWithoutWriterInput = {
    where: StoreReviewWhereUniqueInput
    update: XOR<StoreReviewUpdateWithoutWriterInput, StoreReviewUncheckedUpdateWithoutWriterInput>
    create: XOR<StoreReviewCreateWithoutWriterInput, StoreReviewUncheckedCreateWithoutWriterInput>
  }

  export type StoreReviewUpdateWithWhereUniqueWithoutWriterInput = {
    where: StoreReviewWhereUniqueInput
    data: XOR<StoreReviewUpdateWithoutWriterInput, StoreReviewUncheckedUpdateWithoutWriterInput>
  }

  export type StoreReviewUpdateManyWithWhereWithoutWriterInput = {
    where: StoreReviewScalarWhereInput
    data: XOR<StoreReviewUpdateManyMutationInput, StoreReviewUncheckedUpdateManyWithoutWriterInput>
  }

  export type StoreReviewScalarWhereInput = {
    AND?: StoreReviewScalarWhereInput | StoreReviewScalarWhereInput[]
    OR?: StoreReviewScalarWhereInput[]
    NOT?: StoreReviewScalarWhereInput | StoreReviewScalarWhereInput[]
    id?: BigIntFilter<"StoreReview"> | bigint | number
    content?: StringNullableFilter<"StoreReview"> | string | null
    score?: DecimalNullableFilter<"StoreReview"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"StoreReview"> | Date | string
    updatedAt?: DateTimeFilter<"StoreReview"> | Date | string
    writerId?: BigIntFilter<"StoreReview"> | bigint | number
    storeId?: BigIntFilter<"StoreReview"> | bigint | number
  }

  export type InquiryUpsertWithWhereUniqueWithoutUserInput = {
    where: InquiryWhereUniqueInput
    update: XOR<InquiryUpdateWithoutUserInput, InquiryUncheckedUpdateWithoutUserInput>
    create: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput>
  }

  export type InquiryUpdateWithWhereUniqueWithoutUserInput = {
    where: InquiryWhereUniqueInput
    data: XOR<InquiryUpdateWithoutUserInput, InquiryUncheckedUpdateWithoutUserInput>
  }

  export type InquiryUpdateManyWithWhereWithoutUserInput = {
    where: InquiryScalarWhereInput
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyWithoutUserInput>
  }

  export type InquiryScalarWhereInput = {
    AND?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    OR?: InquiryScalarWhereInput[]
    NOT?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    id?: BigIntFilter<"Inquiry"> | bigint | number
    title?: StringFilter<"Inquiry"> | string
    content?: StringFilter<"Inquiry"> | string
    itype?: EnumInquiryTypeFilter<"Inquiry"> | $Enums.InquiryType
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
    userId?: BigIntFilter<"Inquiry"> | bigint | number
  }

  export type UserCreateWithoutTermsInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    UserPrefer?: UserPreferCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTermsInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    UserPrefer?: UserPreferUncheckedCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionUncheckedCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTermsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTermsInput, UserUncheckedCreateWithoutTermsInput>
  }

  export type UserUpsertWithoutTermsInput = {
    update: XOR<UserUpdateWithoutTermsInput, UserUncheckedUpdateWithoutTermsInput>
    create: XOR<UserCreateWithoutTermsInput, UserUncheckedCreateWithoutTermsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTermsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTermsInput, UserUncheckedUpdateWithoutTermsInput>
  }

  export type UserUpdateWithoutTermsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserPrefer?: UserPreferUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTermsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserPrefer?: UserPreferUncheckedUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUncheckedUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserPreferCreateWithoutPreferCategoryInput = {
    user: UserCreateNestedOneWithoutUserPreferInput
  }

  export type UserPreferUncheckedCreateWithoutPreferCategoryInput = {
    userId: bigint | number
  }

  export type UserPreferCreateOrConnectWithoutPreferCategoryInput = {
    where: UserPreferWhereUniqueInput
    create: XOR<UserPreferCreateWithoutPreferCategoryInput, UserPreferUncheckedCreateWithoutPreferCategoryInput>
  }

  export type UserPreferCreateManyPreferCategoryInputEnvelope = {
    data: UserPreferCreateManyPreferCategoryInput | UserPreferCreateManyPreferCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferUpsertWithWhereUniqueWithoutPreferCategoryInput = {
    where: UserPreferWhereUniqueInput
    update: XOR<UserPreferUpdateWithoutPreferCategoryInput, UserPreferUncheckedUpdateWithoutPreferCategoryInput>
    create: XOR<UserPreferCreateWithoutPreferCategoryInput, UserPreferUncheckedCreateWithoutPreferCategoryInput>
  }

  export type UserPreferUpdateWithWhereUniqueWithoutPreferCategoryInput = {
    where: UserPreferWhereUniqueInput
    data: XOR<UserPreferUpdateWithoutPreferCategoryInput, UserPreferUncheckedUpdateWithoutPreferCategoryInput>
  }

  export type UserPreferUpdateManyWithWhereWithoutPreferCategoryInput = {
    where: UserPreferScalarWhereInput
    data: XOR<UserPreferUpdateManyMutationInput, UserPreferUncheckedUpdateManyWithoutPreferCategoryInput>
  }

  export type UserRegionCreateWithoutRegionInput = {
    successCount?: bigint | number
    hasBonus?: boolean
    user: UserCreateNestedOneWithoutUserRegionInput
  }

  export type UserRegionUncheckedCreateWithoutRegionInput = {
    userId: bigint | number
    successCount?: bigint | number
    hasBonus?: boolean
  }

  export type UserRegionCreateOrConnectWithoutRegionInput = {
    where: UserRegionWhereUniqueInput
    create: XOR<UserRegionCreateWithoutRegionInput, UserRegionUncheckedCreateWithoutRegionInput>
  }

  export type UserRegionCreateManyRegionInputEnvelope = {
    data: UserRegionCreateManyRegionInput | UserRegionCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type MissionCreateWithoutRegionInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    store: StoreCreateNestedOneWithoutMissionInput
    UserMission?: UserMissionCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutRegionInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    storeId: bigint | number
    UserMission?: UserMissionUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutRegionInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutRegionInput, MissionUncheckedCreateWithoutRegionInput>
  }

  export type MissionCreateManyRegionInputEnvelope = {
    data: MissionCreateManyRegionInput | MissionCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type UserRegionUpsertWithWhereUniqueWithoutRegionInput = {
    where: UserRegionWhereUniqueInput
    update: XOR<UserRegionUpdateWithoutRegionInput, UserRegionUncheckedUpdateWithoutRegionInput>
    create: XOR<UserRegionCreateWithoutRegionInput, UserRegionUncheckedCreateWithoutRegionInput>
  }

  export type UserRegionUpdateWithWhereUniqueWithoutRegionInput = {
    where: UserRegionWhereUniqueInput
    data: XOR<UserRegionUpdateWithoutRegionInput, UserRegionUncheckedUpdateWithoutRegionInput>
  }

  export type UserRegionUpdateManyWithWhereWithoutRegionInput = {
    where: UserRegionScalarWhereInput
    data: XOR<UserRegionUpdateManyMutationInput, UserRegionUncheckedUpdateManyWithoutRegionInput>
  }

  export type MissionUpsertWithWhereUniqueWithoutRegionInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutRegionInput, MissionUncheckedUpdateWithoutRegionInput>
    create: XOR<MissionCreateWithoutRegionInput, MissionUncheckedCreateWithoutRegionInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutRegionInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutRegionInput, MissionUncheckedUpdateWithoutRegionInput>
  }

  export type MissionUpdateManyWithWhereWithoutRegionInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutRegionInput>
  }

  export type MissionScalarWhereInput = {
    AND?: MissionScalarWhereInput | MissionScalarWhereInput[]
    OR?: MissionScalarWhereInput[]
    NOT?: MissionScalarWhereInput | MissionScalarWhereInput[]
    id?: BigIntFilter<"Mission"> | bigint | number
    startDate?: DateTimeFilter<"Mission"> | Date | string
    endDate?: DateTimeFilter<"Mission"> | Date | string
    money?: BigIntFilter<"Mission"> | bigint | number
    points?: BigIntFilter<"Mission"> | bigint | number
    storeId?: BigIntFilter<"Mission"> | bigint | number
    regionId?: BigIntFilter<"Mission"> | bigint | number
  }

  export type UserCreateWithoutUserPreferInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPreferInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsUncheckedCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionUncheckedCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPreferInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPreferInput, UserUncheckedCreateWithoutUserPreferInput>
  }

  export type PreferCategoryCreateWithoutUserPreferInput = {
    id?: bigint | number
    name: string
  }

  export type PreferCategoryUncheckedCreateWithoutUserPreferInput = {
    id?: bigint | number
    name: string
  }

  export type PreferCategoryCreateOrConnectWithoutUserPreferInput = {
    where: PreferCategoryWhereUniqueInput
    create: XOR<PreferCategoryCreateWithoutUserPreferInput, PreferCategoryUncheckedCreateWithoutUserPreferInput>
  }

  export type UserUpsertWithoutUserPreferInput = {
    update: XOR<UserUpdateWithoutUserPreferInput, UserUncheckedUpdateWithoutUserPreferInput>
    create: XOR<UserCreateWithoutUserPreferInput, UserUncheckedCreateWithoutUserPreferInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPreferInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPreferInput, UserUncheckedUpdateWithoutUserPreferInput>
  }

  export type UserUpdateWithoutUserPreferInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPreferInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUncheckedUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUncheckedUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PreferCategoryUpsertWithoutUserPreferInput = {
    update: XOR<PreferCategoryUpdateWithoutUserPreferInput, PreferCategoryUncheckedUpdateWithoutUserPreferInput>
    create: XOR<PreferCategoryCreateWithoutUserPreferInput, PreferCategoryUncheckedCreateWithoutUserPreferInput>
    where?: PreferCategoryWhereInput
  }

  export type PreferCategoryUpdateToOneWithWhereWithoutUserPreferInput = {
    where?: PreferCategoryWhereInput
    data: XOR<PreferCategoryUpdateWithoutUserPreferInput, PreferCategoryUncheckedUpdateWithoutUserPreferInput>
  }

  export type PreferCategoryUpdateWithoutUserPreferInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PreferCategoryUncheckedUpdateWithoutUserPreferInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutUserRegionInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserRegionInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsUncheckedCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionUncheckedCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserRegionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRegionInput, UserUncheckedCreateWithoutUserRegionInput>
  }

  export type RegionCreateWithoutUserRegionInput = {
    id?: bigint | number
    name: string
    Mission?: MissionCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutUserRegionInput = {
    id?: bigint | number
    name: string
    Mission?: MissionUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutUserRegionInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutUserRegionInput, RegionUncheckedCreateWithoutUserRegionInput>
  }

  export type UserUpsertWithoutUserRegionInput = {
    update: XOR<UserUpdateWithoutUserRegionInput, UserUncheckedUpdateWithoutUserRegionInput>
    create: XOR<UserCreateWithoutUserRegionInput, UserUncheckedCreateWithoutUserRegionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRegionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRegionInput, UserUncheckedUpdateWithoutUserRegionInput>
  }

  export type UserUpdateWithoutUserRegionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRegionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUncheckedUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUncheckedUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RegionUpsertWithoutUserRegionInput = {
    update: XOR<RegionUpdateWithoutUserRegionInput, RegionUncheckedUpdateWithoutUserRegionInput>
    create: XOR<RegionCreateWithoutUserRegionInput, RegionUncheckedCreateWithoutUserRegionInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutUserRegionInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutUserRegionInput, RegionUncheckedUpdateWithoutUserRegionInput>
  }

  export type RegionUpdateWithoutUserRegionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    Mission?: MissionUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutUserRegionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    Mission?: MissionUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type UserCreateWithoutStoreInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionCreateNestedManyWithoutUserInput
    UserMission?: UserMissionCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoreInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsUncheckedCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferUncheckedCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionUncheckedCreateNestedManyWithoutUserInput
    UserMission?: UserMissionUncheckedCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoreInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
  }

  export type StoreImageCreateWithoutStoreInput = {
    id?: bigint | number
    img?: string | null
  }

  export type StoreImageUncheckedCreateWithoutStoreInput = {
    id?: bigint | number
    img?: string | null
  }

  export type StoreImageCreateOrConnectWithoutStoreInput = {
    where: StoreImageWhereUniqueInput
    create: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput>
  }

  export type StoreImageCreateManyStoreInputEnvelope = {
    data: StoreImageCreateManyStoreInput | StoreImageCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type MissionCreateWithoutStoreInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    region: RegionCreateNestedOneWithoutMissionInput
    UserMission?: UserMissionCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutStoreInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    regionId: bigint | number
    UserMission?: UserMissionUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutStoreInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput>
  }

  export type MissionCreateManyStoreInputEnvelope = {
    data: MissionCreateManyStoreInput | MissionCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type StoreReviewCreateWithoutStoreInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    writer: UserCreateNestedOneWithoutStoreReviewInput
    ReviewImage?: ReviewImageCreateNestedManyWithoutReviewInput
    ReviewAnswer?: ReviewAnswerCreateNestedManyWithoutReviewInput
  }

  export type StoreReviewUncheckedCreateWithoutStoreInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    writerId: bigint | number
    ReviewImage?: ReviewImageUncheckedCreateNestedManyWithoutReviewInput
    ReviewAnswer?: ReviewAnswerUncheckedCreateNestedManyWithoutReviewInput
  }

  export type StoreReviewCreateOrConnectWithoutStoreInput = {
    where: StoreReviewWhereUniqueInput
    create: XOR<StoreReviewCreateWithoutStoreInput, StoreReviewUncheckedCreateWithoutStoreInput>
  }

  export type StoreReviewCreateManyStoreInputEnvelope = {
    data: StoreReviewCreateManyStoreInput | StoreReviewCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStoreInput = {
    update: XOR<UserUpdateWithoutStoreInput, UserUncheckedUpdateWithoutStoreInput>
    create: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoreInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoreInput, UserUncheckedUpdateWithoutStoreInput>
  }

  export type UserUpdateWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUpdateManyWithoutUserNestedInput
    UserMission?: UserMissionUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUncheckedUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUncheckedUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUncheckedUpdateManyWithoutUserNestedInput
    UserMission?: UserMissionUncheckedUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoreImageUpsertWithWhereUniqueWithoutStoreInput = {
    where: StoreImageWhereUniqueInput
    update: XOR<StoreImageUpdateWithoutStoreInput, StoreImageUncheckedUpdateWithoutStoreInput>
    create: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput>
  }

  export type StoreImageUpdateWithWhereUniqueWithoutStoreInput = {
    where: StoreImageWhereUniqueInput
    data: XOR<StoreImageUpdateWithoutStoreInput, StoreImageUncheckedUpdateWithoutStoreInput>
  }

  export type StoreImageUpdateManyWithWhereWithoutStoreInput = {
    where: StoreImageScalarWhereInput
    data: XOR<StoreImageUpdateManyMutationInput, StoreImageUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreImageScalarWhereInput = {
    AND?: StoreImageScalarWhereInput | StoreImageScalarWhereInput[]
    OR?: StoreImageScalarWhereInput[]
    NOT?: StoreImageScalarWhereInput | StoreImageScalarWhereInput[]
    id?: BigIntFilter<"StoreImage"> | bigint | number
    img?: StringNullableFilter<"StoreImage"> | string | null
    storeId?: BigIntFilter<"StoreImage"> | bigint | number
  }

  export type MissionUpsertWithWhereUniqueWithoutStoreInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutStoreInput, MissionUncheckedUpdateWithoutStoreInput>
    create: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutStoreInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutStoreInput, MissionUncheckedUpdateWithoutStoreInput>
  }

  export type MissionUpdateManyWithWhereWithoutStoreInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreReviewUpsertWithWhereUniqueWithoutStoreInput = {
    where: StoreReviewWhereUniqueInput
    update: XOR<StoreReviewUpdateWithoutStoreInput, StoreReviewUncheckedUpdateWithoutStoreInput>
    create: XOR<StoreReviewCreateWithoutStoreInput, StoreReviewUncheckedCreateWithoutStoreInput>
  }

  export type StoreReviewUpdateWithWhereUniqueWithoutStoreInput = {
    where: StoreReviewWhereUniqueInput
    data: XOR<StoreReviewUpdateWithoutStoreInput, StoreReviewUncheckedUpdateWithoutStoreInput>
  }

  export type StoreReviewUpdateManyWithWhereWithoutStoreInput = {
    where: StoreReviewScalarWhereInput
    data: XOR<StoreReviewUpdateManyMutationInput, StoreReviewUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreCreateWithoutStoreImageInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutStoreInput
    Mission?: MissionCreateNestedManyWithoutStoreInput
    StoreReview?: StoreReviewCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutStoreImageInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: bigint | number
    Mission?: MissionUncheckedCreateNestedManyWithoutStoreInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutStoreImageInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutStoreImageInput, StoreUncheckedCreateWithoutStoreImageInput>
  }

  export type StoreUpsertWithoutStoreImageInput = {
    update: XOR<StoreUpdateWithoutStoreImageInput, StoreUncheckedUpdateWithoutStoreImageInput>
    create: XOR<StoreCreateWithoutStoreImageInput, StoreUncheckedCreateWithoutStoreImageInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutStoreImageInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutStoreImageInput, StoreUncheckedUpdateWithoutStoreImageInput>
  }

  export type StoreUpdateWithoutStoreImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoreNestedInput
    Mission?: MissionUpdateManyWithoutStoreNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutStoreImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: BigIntFieldUpdateOperationsInput | bigint | number
    Mission?: MissionUncheckedUpdateManyWithoutStoreNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateWithoutMissionInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutStoreInput
    StoreImage?: StoreImageCreateNestedManyWithoutStoreInput
    StoreReview?: StoreReviewCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutMissionInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: bigint | number
    StoreImage?: StoreImageUncheckedCreateNestedManyWithoutStoreInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutMissionInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutMissionInput, StoreUncheckedCreateWithoutMissionInput>
  }

  export type RegionCreateWithoutMissionInput = {
    id?: bigint | number
    name: string
    UserRegion?: UserRegionCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutMissionInput = {
    id?: bigint | number
    name: string
    UserRegion?: UserRegionUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutMissionInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutMissionInput, RegionUncheckedCreateWithoutMissionInput>
  }

  export type UserMissionCreateWithoutMissionInput = {
    status?: $Enums.UserMissionStatus
    acceptedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserMissionInput
  }

  export type UserMissionUncheckedCreateWithoutMissionInput = {
    userId: bigint | number
    status?: $Enums.UserMissionStatus
    acceptedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserMissionCreateOrConnectWithoutMissionInput = {
    where: UserMissionWhereUniqueInput
    create: XOR<UserMissionCreateWithoutMissionInput, UserMissionUncheckedCreateWithoutMissionInput>
  }

  export type UserMissionCreateManyMissionInputEnvelope = {
    data: UserMissionCreateManyMissionInput | UserMissionCreateManyMissionInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutMissionInput = {
    update: XOR<StoreUpdateWithoutMissionInput, StoreUncheckedUpdateWithoutMissionInput>
    create: XOR<StoreCreateWithoutMissionInput, StoreUncheckedCreateWithoutMissionInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutMissionInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutMissionInput, StoreUncheckedUpdateWithoutMissionInput>
  }

  export type StoreUpdateWithoutMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoreNestedInput
    StoreImage?: StoreImageUpdateManyWithoutStoreNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: BigIntFieldUpdateOperationsInput | bigint | number
    StoreImage?: StoreImageUncheckedUpdateManyWithoutStoreNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type RegionUpsertWithoutMissionInput = {
    update: XOR<RegionUpdateWithoutMissionInput, RegionUncheckedUpdateWithoutMissionInput>
    create: XOR<RegionCreateWithoutMissionInput, RegionUncheckedCreateWithoutMissionInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutMissionInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutMissionInput, RegionUncheckedUpdateWithoutMissionInput>
  }

  export type RegionUpdateWithoutMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    UserRegion?: UserRegionUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    UserRegion?: UserRegionUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type UserMissionUpsertWithWhereUniqueWithoutMissionInput = {
    where: UserMissionWhereUniqueInput
    update: XOR<UserMissionUpdateWithoutMissionInput, UserMissionUncheckedUpdateWithoutMissionInput>
    create: XOR<UserMissionCreateWithoutMissionInput, UserMissionUncheckedCreateWithoutMissionInput>
  }

  export type UserMissionUpdateWithWhereUniqueWithoutMissionInput = {
    where: UserMissionWhereUniqueInput
    data: XOR<UserMissionUpdateWithoutMissionInput, UserMissionUncheckedUpdateWithoutMissionInput>
  }

  export type UserMissionUpdateManyWithWhereWithoutMissionInput = {
    where: UserMissionScalarWhereInput
    data: XOR<UserMissionUpdateManyMutationInput, UserMissionUncheckedUpdateManyWithoutMissionInput>
  }

  export type UserCreateWithoutUserMissionInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutOwnerInput
    StoreReview?: StoreReviewCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserMissionInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsUncheckedCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferUncheckedCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutOwnerInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutWriterInput
    Inquiry?: InquiryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserMissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserMissionInput, UserUncheckedCreateWithoutUserMissionInput>
  }

  export type MissionCreateWithoutUserMissionInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    store: StoreCreateNestedOneWithoutMissionInput
    region: RegionCreateNestedOneWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutUserMissionInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    storeId: bigint | number
    regionId: bigint | number
  }

  export type MissionCreateOrConnectWithoutUserMissionInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutUserMissionInput, MissionUncheckedCreateWithoutUserMissionInput>
  }

  export type UserUpsertWithoutUserMissionInput = {
    update: XOR<UserUpdateWithoutUserMissionInput, UserUncheckedUpdateWithoutUserMissionInput>
    create: XOR<UserCreateWithoutUserMissionInput, UserUncheckedCreateWithoutUserMissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserMissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserMissionInput, UserUncheckedUpdateWithoutUserMissionInput>
  }

  export type UserUpdateWithoutUserMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutOwnerNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUncheckedUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUncheckedUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutWriterNestedInput
    Inquiry?: InquiryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MissionUpsertWithoutUserMissionInput = {
    update: XOR<MissionUpdateWithoutUserMissionInput, MissionUncheckedUpdateWithoutUserMissionInput>
    create: XOR<MissionCreateWithoutUserMissionInput, MissionUncheckedCreateWithoutUserMissionInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutUserMissionInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutUserMissionInput, MissionUncheckedUpdateWithoutUserMissionInput>
  }

  export type MissionUpdateWithoutUserMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneRequiredWithoutMissionNestedInput
    region?: RegionUpdateOneRequiredWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutUserMissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCreateWithoutStoreReviewInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionCreateNestedManyWithoutUserInput
    Inquiry?: InquiryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoreReviewInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsUncheckedCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferUncheckedCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionUncheckedCreateNestedManyWithoutUserInput
    Inquiry?: InquiryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoreReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoreReviewInput, UserUncheckedCreateWithoutStoreReviewInput>
  }

  export type StoreCreateWithoutStoreReviewInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutStoreInput
    StoreImage?: StoreImageCreateNestedManyWithoutStoreInput
    Mission?: MissionCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutStoreReviewInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: bigint | number
    StoreImage?: StoreImageUncheckedCreateNestedManyWithoutStoreInput
    Mission?: MissionUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutStoreReviewInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutStoreReviewInput, StoreUncheckedCreateWithoutStoreReviewInput>
  }

  export type ReviewImageCreateWithoutReviewInput = {
    id?: bigint | number
    img: string
  }

  export type ReviewImageUncheckedCreateWithoutReviewInput = {
    id?: bigint | number
    img: string
  }

  export type ReviewImageCreateOrConnectWithoutReviewInput = {
    where: ReviewImageWhereUniqueInput
    create: XOR<ReviewImageCreateWithoutReviewInput, ReviewImageUncheckedCreateWithoutReviewInput>
  }

  export type ReviewImageCreateManyReviewInputEnvelope = {
    data: ReviewImageCreateManyReviewInput | ReviewImageCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type ReviewAnswerCreateWithoutReviewInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewAnswerUncheckedCreateWithoutReviewInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewAnswerCreateOrConnectWithoutReviewInput = {
    where: ReviewAnswerWhereUniqueInput
    create: XOR<ReviewAnswerCreateWithoutReviewInput, ReviewAnswerUncheckedCreateWithoutReviewInput>
  }

  export type ReviewAnswerCreateManyReviewInputEnvelope = {
    data: ReviewAnswerCreateManyReviewInput | ReviewAnswerCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStoreReviewInput = {
    update: XOR<UserUpdateWithoutStoreReviewInput, UserUncheckedUpdateWithoutStoreReviewInput>
    create: XOR<UserCreateWithoutStoreReviewInput, UserUncheckedCreateWithoutStoreReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoreReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoreReviewInput, UserUncheckedUpdateWithoutStoreReviewInput>
  }

  export type UserUpdateWithoutStoreReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUpdateManyWithoutUserNestedInput
    Inquiry?: InquiryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoreReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUncheckedUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUncheckedUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUncheckedUpdateManyWithoutUserNestedInput
    Inquiry?: InquiryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoreUpsertWithoutStoreReviewInput = {
    update: XOR<StoreUpdateWithoutStoreReviewInput, StoreUncheckedUpdateWithoutStoreReviewInput>
    create: XOR<StoreCreateWithoutStoreReviewInput, StoreUncheckedCreateWithoutStoreReviewInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutStoreReviewInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutStoreReviewInput, StoreUncheckedUpdateWithoutStoreReviewInput>
  }

  export type StoreUpdateWithoutStoreReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoreNestedInput
    StoreImage?: StoreImageUpdateManyWithoutStoreNestedInput
    Mission?: MissionUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutStoreReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: BigIntFieldUpdateOperationsInput | bigint | number
    StoreImage?: StoreImageUncheckedUpdateManyWithoutStoreNestedInput
    Mission?: MissionUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ReviewImageUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReviewImageWhereUniqueInput
    update: XOR<ReviewImageUpdateWithoutReviewInput, ReviewImageUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewImageCreateWithoutReviewInput, ReviewImageUncheckedCreateWithoutReviewInput>
  }

  export type ReviewImageUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReviewImageWhereUniqueInput
    data: XOR<ReviewImageUpdateWithoutReviewInput, ReviewImageUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewImageUpdateManyWithWhereWithoutReviewInput = {
    where: ReviewImageScalarWhereInput
    data: XOR<ReviewImageUpdateManyMutationInput, ReviewImageUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewImageScalarWhereInput = {
    AND?: ReviewImageScalarWhereInput | ReviewImageScalarWhereInput[]
    OR?: ReviewImageScalarWhereInput[]
    NOT?: ReviewImageScalarWhereInput | ReviewImageScalarWhereInput[]
    id?: BigIntFilter<"ReviewImage"> | bigint | number
    img?: StringFilter<"ReviewImage"> | string
    reviewId?: BigIntFilter<"ReviewImage"> | bigint | number
  }

  export type ReviewAnswerUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReviewAnswerWhereUniqueInput
    update: XOR<ReviewAnswerUpdateWithoutReviewInput, ReviewAnswerUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewAnswerCreateWithoutReviewInput, ReviewAnswerUncheckedCreateWithoutReviewInput>
  }

  export type ReviewAnswerUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReviewAnswerWhereUniqueInput
    data: XOR<ReviewAnswerUpdateWithoutReviewInput, ReviewAnswerUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewAnswerUpdateManyWithWhereWithoutReviewInput = {
    where: ReviewAnswerScalarWhereInput
    data: XOR<ReviewAnswerUpdateManyMutationInput, ReviewAnswerUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewAnswerScalarWhereInput = {
    AND?: ReviewAnswerScalarWhereInput | ReviewAnswerScalarWhereInput[]
    OR?: ReviewAnswerScalarWhereInput[]
    NOT?: ReviewAnswerScalarWhereInput | ReviewAnswerScalarWhereInput[]
    reviewId?: BigIntFilter<"ReviewAnswer"> | bigint | number
    content?: StringFilter<"ReviewAnswer"> | string
    createdAt?: DateTimeFilter<"ReviewAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewAnswer"> | Date | string
  }

  export type StoreReviewCreateWithoutReviewImageInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    writer: UserCreateNestedOneWithoutStoreReviewInput
    store: StoreCreateNestedOneWithoutStoreReviewInput
    ReviewAnswer?: ReviewAnswerCreateNestedManyWithoutReviewInput
  }

  export type StoreReviewUncheckedCreateWithoutReviewImageInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    writerId: bigint | number
    storeId: bigint | number
    ReviewAnswer?: ReviewAnswerUncheckedCreateNestedManyWithoutReviewInput
  }

  export type StoreReviewCreateOrConnectWithoutReviewImageInput = {
    where: StoreReviewWhereUniqueInput
    create: XOR<StoreReviewCreateWithoutReviewImageInput, StoreReviewUncheckedCreateWithoutReviewImageInput>
  }

  export type StoreReviewUpsertWithoutReviewImageInput = {
    update: XOR<StoreReviewUpdateWithoutReviewImageInput, StoreReviewUncheckedUpdateWithoutReviewImageInput>
    create: XOR<StoreReviewCreateWithoutReviewImageInput, StoreReviewUncheckedCreateWithoutReviewImageInput>
    where?: StoreReviewWhereInput
  }

  export type StoreReviewUpdateToOneWithWhereWithoutReviewImageInput = {
    where?: StoreReviewWhereInput
    data: XOR<StoreReviewUpdateWithoutReviewImageInput, StoreReviewUncheckedUpdateWithoutReviewImageInput>
  }

  export type StoreReviewUpdateWithoutReviewImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    writer?: UserUpdateOneRequiredWithoutStoreReviewNestedInput
    store?: StoreUpdateOneRequiredWithoutStoreReviewNestedInput
    ReviewAnswer?: ReviewAnswerUpdateManyWithoutReviewNestedInput
  }

  export type StoreReviewUncheckedUpdateWithoutReviewImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    writerId?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    ReviewAnswer?: ReviewAnswerUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type StoreReviewCreateWithoutReviewAnswerInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    writer: UserCreateNestedOneWithoutStoreReviewInput
    store: StoreCreateNestedOneWithoutStoreReviewInput
    ReviewImage?: ReviewImageCreateNestedManyWithoutReviewInput
  }

  export type StoreReviewUncheckedCreateWithoutReviewAnswerInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    writerId: bigint | number
    storeId: bigint | number
    ReviewImage?: ReviewImageUncheckedCreateNestedManyWithoutReviewInput
  }

  export type StoreReviewCreateOrConnectWithoutReviewAnswerInput = {
    where: StoreReviewWhereUniqueInput
    create: XOR<StoreReviewCreateWithoutReviewAnswerInput, StoreReviewUncheckedCreateWithoutReviewAnswerInput>
  }

  export type StoreReviewUpsertWithoutReviewAnswerInput = {
    update: XOR<StoreReviewUpdateWithoutReviewAnswerInput, StoreReviewUncheckedUpdateWithoutReviewAnswerInput>
    create: XOR<StoreReviewCreateWithoutReviewAnswerInput, StoreReviewUncheckedCreateWithoutReviewAnswerInput>
    where?: StoreReviewWhereInput
  }

  export type StoreReviewUpdateToOneWithWhereWithoutReviewAnswerInput = {
    where?: StoreReviewWhereInput
    data: XOR<StoreReviewUpdateWithoutReviewAnswerInput, StoreReviewUncheckedUpdateWithoutReviewAnswerInput>
  }

  export type StoreReviewUpdateWithoutReviewAnswerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    writer?: UserUpdateOneRequiredWithoutStoreReviewNestedInput
    store?: StoreUpdateOneRequiredWithoutStoreReviewNestedInput
    ReviewImage?: ReviewImageUpdateManyWithoutReviewNestedInput
  }

  export type StoreReviewUncheckedUpdateWithoutReviewAnswerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    writerId?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    ReviewImage?: ReviewImageUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type UserCreateWithoutInquiryInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewCreateNestedManyWithoutWriterInput
  }

  export type UserUncheckedCreateWithoutInquiryInput = {
    id?: bigint | number
    name: string
    gender?: $Enums.Gender
    birth: Date | string
    address: string
    detailAddress?: string | null
    nickname?: string | null
    email: string
    phone: string
    isPhoneVerified?: boolean
    points?: bigint | number
    provider: $Enums.Provider
    providerId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    inactiveDate?: Date | string | null
    Terms?: TermsUncheckedCreateNestedManyWithoutUserInput
    UserPrefer?: UserPreferUncheckedCreateNestedManyWithoutUserInput
    UserRegion?: UserRegionUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutOwnerInput
    UserMission?: UserMissionUncheckedCreateNestedManyWithoutUserInput
    StoreReview?: StoreReviewUncheckedCreateNestedManyWithoutWriterInput
  }

  export type UserCreateOrConnectWithoutInquiryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInquiryInput, UserUncheckedCreateWithoutInquiryInput>
  }

  export type InquiryImageCreateWithoutInquiryInput = {
    id?: bigint | number
    img: string
  }

  export type InquiryImageUncheckedCreateWithoutInquiryInput = {
    id?: bigint | number
    img: string
  }

  export type InquiryImageCreateOrConnectWithoutInquiryInput = {
    where: InquiryImageWhereUniqueInput
    create: XOR<InquiryImageCreateWithoutInquiryInput, InquiryImageUncheckedCreateWithoutInquiryInput>
  }

  export type InquiryImageCreateManyInquiryInputEnvelope = {
    data: InquiryImageCreateManyInquiryInput | InquiryImageCreateManyInquiryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInquiryInput = {
    update: XOR<UserUpdateWithoutInquiryInput, UserUncheckedUpdateWithoutInquiryInput>
    create: XOR<UserCreateWithoutInquiryInput, UserUncheckedCreateWithoutInquiryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInquiryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInquiryInput, UserUncheckedUpdateWithoutInquiryInput>
  }

  export type UserUpdateWithoutInquiryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutWriterNestedInput
  }

  export type UserUncheckedUpdateWithoutInquiryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    inactiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Terms?: TermsUncheckedUpdateManyWithoutUserNestedInput
    UserPrefer?: UserPreferUncheckedUpdateManyWithoutUserNestedInput
    UserRegion?: UserRegionUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
    UserMission?: UserMissionUncheckedUpdateManyWithoutUserNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutWriterNestedInput
  }

  export type InquiryImageUpsertWithWhereUniqueWithoutInquiryInput = {
    where: InquiryImageWhereUniqueInput
    update: XOR<InquiryImageUpdateWithoutInquiryInput, InquiryImageUncheckedUpdateWithoutInquiryInput>
    create: XOR<InquiryImageCreateWithoutInquiryInput, InquiryImageUncheckedCreateWithoutInquiryInput>
  }

  export type InquiryImageUpdateWithWhereUniqueWithoutInquiryInput = {
    where: InquiryImageWhereUniqueInput
    data: XOR<InquiryImageUpdateWithoutInquiryInput, InquiryImageUncheckedUpdateWithoutInquiryInput>
  }

  export type InquiryImageUpdateManyWithWhereWithoutInquiryInput = {
    where: InquiryImageScalarWhereInput
    data: XOR<InquiryImageUpdateManyMutationInput, InquiryImageUncheckedUpdateManyWithoutInquiryInput>
  }

  export type InquiryImageScalarWhereInput = {
    AND?: InquiryImageScalarWhereInput | InquiryImageScalarWhereInput[]
    OR?: InquiryImageScalarWhereInput[]
    NOT?: InquiryImageScalarWhereInput | InquiryImageScalarWhereInput[]
    id?: BigIntFilter<"InquiryImage"> | bigint | number
    img?: StringFilter<"InquiryImage"> | string
    inquiryId?: BigIntFilter<"InquiryImage"> | bigint | number
  }

  export type InquiryCreateWithoutInquiryImageInput = {
    id?: bigint | number
    title: string
    content: string
    itype: $Enums.InquiryType
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInquiryInput
  }

  export type InquiryUncheckedCreateWithoutInquiryImageInput = {
    id?: bigint | number
    title: string
    content: string
    itype: $Enums.InquiryType
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: bigint | number
  }

  export type InquiryCreateOrConnectWithoutInquiryImageInput = {
    where: InquiryWhereUniqueInput
    create: XOR<InquiryCreateWithoutInquiryImageInput, InquiryUncheckedCreateWithoutInquiryImageInput>
  }

  export type InquiryUpsertWithoutInquiryImageInput = {
    update: XOR<InquiryUpdateWithoutInquiryImageInput, InquiryUncheckedUpdateWithoutInquiryImageInput>
    create: XOR<InquiryCreateWithoutInquiryImageInput, InquiryUncheckedCreateWithoutInquiryImageInput>
    where?: InquiryWhereInput
  }

  export type InquiryUpdateToOneWithWhereWithoutInquiryImageInput = {
    where?: InquiryWhereInput
    data: XOR<InquiryUpdateWithoutInquiryImageInput, InquiryUncheckedUpdateWithoutInquiryImageInput>
  }

  export type InquiryUpdateWithoutInquiryImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    itype?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInquiryNestedInput
  }

  export type InquiryUncheckedUpdateWithoutInquiryImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    itype?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type TermsCreateManyUserInput = {
    id?: bigint | number
    isOverFourteen?: boolean
    agreedToTermsOfService?: boolean
    agreedToPrivacyPolicy?: boolean
    agreedToLocationServices?: boolean
    agreedToMarketingEmails?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferCreateManyUserInput = {
    preferCategoryId: bigint | number
  }

  export type UserRegionCreateManyUserInput = {
    regionId: bigint | number
    successCount?: bigint | number
    hasBonus?: boolean
  }

  export type StoreCreateManyOwnerInput = {
    id?: bigint | number
    name: string
    address: string
    stype: string
    total?: Decimal | DecimalJsLike | number | string
    count?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMissionCreateManyUserInput = {
    missionId: bigint | number
    status?: $Enums.UserMissionStatus
    acceptedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type StoreReviewCreateManyWriterInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    storeId: bigint | number
  }

  export type InquiryCreateManyUserInput = {
    id?: bigint | number
    title: string
    content: string
    itype: $Enums.InquiryType
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isOverFourteen?: BoolFieldUpdateOperationsInput | boolean
    agreedToTermsOfService?: BoolFieldUpdateOperationsInput | boolean
    agreedToPrivacyPolicy?: BoolFieldUpdateOperationsInput | boolean
    agreedToLocationServices?: BoolFieldUpdateOperationsInput | boolean
    agreedToMarketingEmails?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isOverFourteen?: BoolFieldUpdateOperationsInput | boolean
    agreedToTermsOfService?: BoolFieldUpdateOperationsInput | boolean
    agreedToPrivacyPolicy?: BoolFieldUpdateOperationsInput | boolean
    agreedToLocationServices?: BoolFieldUpdateOperationsInput | boolean
    agreedToMarketingEmails?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isOverFourteen?: BoolFieldUpdateOperationsInput | boolean
    agreedToTermsOfService?: BoolFieldUpdateOperationsInput | boolean
    agreedToPrivacyPolicy?: BoolFieldUpdateOperationsInput | boolean
    agreedToLocationServices?: BoolFieldUpdateOperationsInput | boolean
    agreedToMarketingEmails?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferUpdateWithoutUserInput = {
    preferCategory?: PreferCategoryUpdateOneRequiredWithoutUserPreferNestedInput
  }

  export type UserPreferUncheckedUpdateWithoutUserInput = {
    preferCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserPreferUncheckedUpdateManyWithoutUserInput = {
    preferCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserRegionUpdateWithoutUserInput = {
    successCount?: BigIntFieldUpdateOperationsInput | bigint | number
    hasBonus?: BoolFieldUpdateOperationsInput | boolean
    region?: RegionUpdateOneRequiredWithoutUserRegionNestedInput
  }

  export type UserRegionUncheckedUpdateWithoutUserInput = {
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    successCount?: BigIntFieldUpdateOperationsInput | bigint | number
    hasBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserRegionUncheckedUpdateManyWithoutUserInput = {
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    successCount?: BigIntFieldUpdateOperationsInput | bigint | number
    hasBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StoreUpdateWithoutOwnerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StoreImage?: StoreImageUpdateManyWithoutStoreNestedInput
    Mission?: MissionUpdateManyWithoutStoreNestedInput
    StoreReview?: StoreReviewUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutOwnerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StoreImage?: StoreImageUncheckedUpdateManyWithoutStoreNestedInput
    Mission?: MissionUncheckedUpdateManyWithoutStoreNestedInput
    StoreReview?: StoreReviewUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutOwnerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    stype?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMissionUpdateWithoutUserInput = {
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mission?: MissionUpdateOneRequiredWithoutUserMissionNestedInput
  }

  export type UserMissionUncheckedUpdateWithoutUserInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMissionUncheckedUpdateManyWithoutUserInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreReviewUpdateWithoutWriterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutStoreReviewNestedInput
    ReviewImage?: ReviewImageUpdateManyWithoutReviewNestedInput
    ReviewAnswer?: ReviewAnswerUpdateManyWithoutReviewNestedInput
  }

  export type StoreReviewUncheckedUpdateWithoutWriterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    ReviewImage?: ReviewImageUncheckedUpdateManyWithoutReviewNestedInput
    ReviewAnswer?: ReviewAnswerUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type StoreReviewUncheckedUpdateManyWithoutWriterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type InquiryUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    itype?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InquiryImage?: InquiryImageUpdateManyWithoutInquiryNestedInput
  }

  export type InquiryUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    itype?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InquiryImage?: InquiryImageUncheckedUpdateManyWithoutInquiryNestedInput
  }

  export type InquiryUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    itype?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferCreateManyPreferCategoryInput = {
    userId: bigint | number
  }

  export type UserPreferUpdateWithoutPreferCategoryInput = {
    user?: UserUpdateOneRequiredWithoutUserPreferNestedInput
  }

  export type UserPreferUncheckedUpdateWithoutPreferCategoryInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserPreferUncheckedUpdateManyWithoutPreferCategoryInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserRegionCreateManyRegionInput = {
    userId: bigint | number
    successCount?: bigint | number
    hasBonus?: boolean
  }

  export type MissionCreateManyRegionInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    storeId: bigint | number
  }

  export type UserRegionUpdateWithoutRegionInput = {
    successCount?: BigIntFieldUpdateOperationsInput | bigint | number
    hasBonus?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserRegionNestedInput
  }

  export type UserRegionUncheckedUpdateWithoutRegionInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    successCount?: BigIntFieldUpdateOperationsInput | bigint | number
    hasBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserRegionUncheckedUpdateManyWithoutRegionInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    successCount?: BigIntFieldUpdateOperationsInput | bigint | number
    hasBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MissionUpdateWithoutRegionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneRequiredWithoutMissionNestedInput
    UserMission?: UserMissionUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutRegionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    UserMission?: UserMissionUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutRegionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StoreImageCreateManyStoreInput = {
    id?: bigint | number
    img?: string | null
  }

  export type MissionCreateManyStoreInput = {
    id?: bigint | number
    startDate?: Date | string
    endDate: Date | string
    money?: bigint | number
    points?: bigint | number
    regionId: bigint | number
  }

  export type StoreReviewCreateManyStoreInput = {
    id?: bigint | number
    content?: string | null
    score?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    writerId: bigint | number
  }

  export type StoreImageUpdateWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreImageUncheckedUpdateWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreImageUncheckedUpdateManyWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissionUpdateWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    region?: RegionUpdateOneRequiredWithoutMissionNestedInput
    UserMission?: UserMissionUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    UserMission?: UserMissionUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StoreReviewUpdateWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    writer?: UserUpdateOneRequiredWithoutStoreReviewNestedInput
    ReviewImage?: ReviewImageUpdateManyWithoutReviewNestedInput
    ReviewAnswer?: ReviewAnswerUpdateManyWithoutReviewNestedInput
  }

  export type StoreReviewUncheckedUpdateWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    writerId?: BigIntFieldUpdateOperationsInput | bigint | number
    ReviewImage?: ReviewImageUncheckedUpdateManyWithoutReviewNestedInput
    ReviewAnswer?: ReviewAnswerUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type StoreReviewUncheckedUpdateManyWithoutStoreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    writerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserMissionCreateManyMissionInput = {
    userId: bigint | number
    status?: $Enums.UserMissionStatus
    acceptedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type UserMissionUpdateWithoutMissionInput = {
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserMissionNestedInput
  }

  export type UserMissionUncheckedUpdateWithoutMissionInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMissionUncheckedUpdateManyWithoutMissionInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewImageCreateManyReviewInput = {
    id?: bigint | number
    img: string
  }

  export type ReviewAnswerCreateManyReviewInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewImageUpdateWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewImageUncheckedUpdateWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewImageUncheckedUpdateManyWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewAnswerUpdateWithoutReviewInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewAnswerUncheckedUpdateWithoutReviewInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewAnswerUncheckedUpdateManyWithoutReviewInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryImageCreateManyInquiryInput = {
    id?: bigint | number
    img: string
  }

  export type InquiryImageUpdateWithoutInquiryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type InquiryImageUncheckedUpdateWithoutInquiryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type InquiryImageUncheckedUpdateManyWithoutInquiryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    img?: StringFieldUpdateOperationsInput | string
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