
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
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>
/**
 * Model BillStage
 * 
 */
export type BillStage = $Result.DefaultSelection<Prisma.$BillStagePayload>
/**
 * Model BillSponsor
 * 
 */
export type BillSponsor = $Result.DefaultSelection<Prisma.$BillSponsorPayload>
/**
 * Model BillPublication
 * 
 */
export type BillPublication = $Result.DefaultSelection<Prisma.$BillPublicationPayload>
/**
 * Model BillSummary
 * 
 */
export type BillSummary = $Result.DefaultSelection<Prisma.$BillSummaryPayload>
/**
 * Model DeviceProfile
 * 
 */
export type DeviceProfile = $Result.DefaultSelection<Prisma.$DeviceProfilePayload>
/**
 * Model TrackedBill
 * 
 */
export type TrackedBill = $Result.DefaultSelection<Prisma.$TrackedBillPayload>
/**
 * Model PushSubscription
 * 
 */
export type PushSubscription = $Result.DefaultSelection<Prisma.$PushSubscriptionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model SyncLog
 * 
 */
export type SyncLog = $Result.DefaultSelection<Prisma.$SyncLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NotificationType: {
  STAGE_CHANGE: 'STAGE_CHANGE',
  ROYAL_ASSENT: 'ROYAL_ASSENT',
  NEW_BILL: 'NEW_BILL',
  NEW_AMENDMENT: 'NEW_AMENDMENT',
  BILL_DEFEATED: 'BILL_DEFEATED',
  BILL_WITHDRAWN: 'BILL_WITHDRAWN'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bills
 * const bills = await prisma.bill.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bills
   * const bills = await prisma.bill.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billStage`: Exposes CRUD operations for the **BillStage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillStages
    * const billStages = await prisma.billStage.findMany()
    * ```
    */
  get billStage(): Prisma.BillStageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billSponsor`: Exposes CRUD operations for the **BillSponsor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillSponsors
    * const billSponsors = await prisma.billSponsor.findMany()
    * ```
    */
  get billSponsor(): Prisma.BillSponsorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billPublication`: Exposes CRUD operations for the **BillPublication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillPublications
    * const billPublications = await prisma.billPublication.findMany()
    * ```
    */
  get billPublication(): Prisma.BillPublicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billSummary`: Exposes CRUD operations for the **BillSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillSummaries
    * const billSummaries = await prisma.billSummary.findMany()
    * ```
    */
  get billSummary(): Prisma.BillSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceProfile`: Exposes CRUD operations for the **DeviceProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceProfiles
    * const deviceProfiles = await prisma.deviceProfile.findMany()
    * ```
    */
  get deviceProfile(): Prisma.DeviceProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackedBill`: Exposes CRUD operations for the **TrackedBill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackedBills
    * const trackedBills = await prisma.trackedBill.findMany()
    * ```
    */
  get trackedBill(): Prisma.TrackedBillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pushSubscription`: Exposes CRUD operations for the **PushSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushSubscriptions
    * const pushSubscriptions = await prisma.pushSubscription.findMany()
    * ```
    */
  get pushSubscription(): Prisma.PushSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncLog`: Exposes CRUD operations for the **SyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncLogs
    * const syncLogs = await prisma.syncLog.findMany()
    * ```
    */
  get syncLog(): Prisma.SyncLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
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
    Bill: 'Bill',
    BillStage: 'BillStage',
    BillSponsor: 'BillSponsor',
    BillPublication: 'BillPublication',
    BillSummary: 'BillSummary',
    DeviceProfile: 'DeviceProfile',
    TrackedBill: 'TrackedBill',
    PushSubscription: 'PushSubscription',
    Notification: 'Notification',
    SyncLog: 'SyncLog'
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
      modelProps: "bill" | "billStage" | "billSponsor" | "billPublication" | "billSummary" | "deviceProfile" | "trackedBill" | "pushSubscription" | "notification" | "syncLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      BillStage: {
        payload: Prisma.$BillStagePayload<ExtArgs>
        fields: Prisma.BillStageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillStageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillStageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload>
          }
          findFirst: {
            args: Prisma.BillStageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillStageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload>
          }
          findMany: {
            args: Prisma.BillStageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload>[]
          }
          create: {
            args: Prisma.BillStageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload>
          }
          createMany: {
            args: Prisma.BillStageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillStageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload>[]
          }
          delete: {
            args: Prisma.BillStageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload>
          }
          update: {
            args: Prisma.BillStageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload>
          }
          deleteMany: {
            args: Prisma.BillStageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillStageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillStageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload>[]
          }
          upsert: {
            args: Prisma.BillStageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillStagePayload>
          }
          aggregate: {
            args: Prisma.BillStageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillStage>
          }
          groupBy: {
            args: Prisma.BillStageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillStageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillStageCountArgs<ExtArgs>
            result: $Utils.Optional<BillStageCountAggregateOutputType> | number
          }
        }
      }
      BillSponsor: {
        payload: Prisma.$BillSponsorPayload<ExtArgs>
        fields: Prisma.BillSponsorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillSponsorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillSponsorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload>
          }
          findFirst: {
            args: Prisma.BillSponsorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillSponsorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload>
          }
          findMany: {
            args: Prisma.BillSponsorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload>[]
          }
          create: {
            args: Prisma.BillSponsorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload>
          }
          createMany: {
            args: Prisma.BillSponsorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillSponsorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload>[]
          }
          delete: {
            args: Prisma.BillSponsorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload>
          }
          update: {
            args: Prisma.BillSponsorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload>
          }
          deleteMany: {
            args: Prisma.BillSponsorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillSponsorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillSponsorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload>[]
          }
          upsert: {
            args: Prisma.BillSponsorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSponsorPayload>
          }
          aggregate: {
            args: Prisma.BillSponsorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillSponsor>
          }
          groupBy: {
            args: Prisma.BillSponsorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillSponsorGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillSponsorCountArgs<ExtArgs>
            result: $Utils.Optional<BillSponsorCountAggregateOutputType> | number
          }
        }
      }
      BillPublication: {
        payload: Prisma.$BillPublicationPayload<ExtArgs>
        fields: Prisma.BillPublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillPublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillPublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload>
          }
          findFirst: {
            args: Prisma.BillPublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillPublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload>
          }
          findMany: {
            args: Prisma.BillPublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload>[]
          }
          create: {
            args: Prisma.BillPublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload>
          }
          createMany: {
            args: Prisma.BillPublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillPublicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload>[]
          }
          delete: {
            args: Prisma.BillPublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload>
          }
          update: {
            args: Prisma.BillPublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload>
          }
          deleteMany: {
            args: Prisma.BillPublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillPublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillPublicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload>[]
          }
          upsert: {
            args: Prisma.BillPublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPublicationPayload>
          }
          aggregate: {
            args: Prisma.BillPublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillPublication>
          }
          groupBy: {
            args: Prisma.BillPublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillPublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillPublicationCountArgs<ExtArgs>
            result: $Utils.Optional<BillPublicationCountAggregateOutputType> | number
          }
        }
      }
      BillSummary: {
        payload: Prisma.$BillSummaryPayload<ExtArgs>
        fields: Prisma.BillSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload>
          }
          findFirst: {
            args: Prisma.BillSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload>
          }
          findMany: {
            args: Prisma.BillSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload>[]
          }
          create: {
            args: Prisma.BillSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload>
          }
          createMany: {
            args: Prisma.BillSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload>[]
          }
          delete: {
            args: Prisma.BillSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload>
          }
          update: {
            args: Prisma.BillSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload>
          }
          deleteMany: {
            args: Prisma.BillSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload>[]
          }
          upsert: {
            args: Prisma.BillSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillSummaryPayload>
          }
          aggregate: {
            args: Prisma.BillSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillSummary>
          }
          groupBy: {
            args: Prisma.BillSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<BillSummaryCountAggregateOutputType> | number
          }
        }
      }
      DeviceProfile: {
        payload: Prisma.$DeviceProfilePayload<ExtArgs>
        fields: Prisma.DeviceProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload>
          }
          findFirst: {
            args: Prisma.DeviceProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload>
          }
          findMany: {
            args: Prisma.DeviceProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload>[]
          }
          create: {
            args: Prisma.DeviceProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload>
          }
          createMany: {
            args: Prisma.DeviceProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload>[]
          }
          delete: {
            args: Prisma.DeviceProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload>
          }
          update: {
            args: Prisma.DeviceProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload>
          }
          deleteMany: {
            args: Prisma.DeviceProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload>[]
          }
          upsert: {
            args: Prisma.DeviceProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceProfilePayload>
          }
          aggregate: {
            args: Prisma.DeviceProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceProfile>
          }
          groupBy: {
            args: Prisma.DeviceProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceProfileCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceProfileCountAggregateOutputType> | number
          }
        }
      }
      TrackedBill: {
        payload: Prisma.$TrackedBillPayload<ExtArgs>
        fields: Prisma.TrackedBillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackedBillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackedBillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload>
          }
          findFirst: {
            args: Prisma.TrackedBillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackedBillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload>
          }
          findMany: {
            args: Prisma.TrackedBillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload>[]
          }
          create: {
            args: Prisma.TrackedBillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload>
          }
          createMany: {
            args: Prisma.TrackedBillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackedBillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload>[]
          }
          delete: {
            args: Prisma.TrackedBillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload>
          }
          update: {
            args: Prisma.TrackedBillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload>
          }
          deleteMany: {
            args: Prisma.TrackedBillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackedBillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackedBillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload>[]
          }
          upsert: {
            args: Prisma.TrackedBillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedBillPayload>
          }
          aggregate: {
            args: Prisma.TrackedBillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackedBill>
          }
          groupBy: {
            args: Prisma.TrackedBillGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackedBillGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackedBillCountArgs<ExtArgs>
            result: $Utils.Optional<TrackedBillCountAggregateOutputType> | number
          }
        }
      }
      PushSubscription: {
        payload: Prisma.$PushSubscriptionPayload<ExtArgs>
        fields: Prisma.PushSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.PushSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findMany: {
            args: Prisma.PushSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          create: {
            args: Prisma.PushSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          createMany: {
            args: Prisma.PushSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PushSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.PushSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          update: {
            args: Prisma.PushSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.PushSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.PushSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.PushSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushSubscription>
          }
          groupBy: {
            args: Prisma.PushSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      SyncLog: {
        payload: Prisma.$SyncLogPayload<ExtArgs>
        fields: Prisma.SyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findFirst: {
            args: Prisma.SyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findMany: {
            args: Prisma.SyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          create: {
            args: Prisma.SyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          createMany: {
            args: Prisma.SyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          delete: {
            args: Prisma.SyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          update: {
            args: Prisma.SyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          deleteMany: {
            args: Prisma.SyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          upsert: {
            args: Prisma.SyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          aggregate: {
            args: Prisma.SyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncLog>
          }
          groupBy: {
            args: Prisma.SyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<SyncLogCountAggregateOutputType> | number
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
    bill?: BillOmit
    billStage?: BillStageOmit
    billSponsor?: BillSponsorOmit
    billPublication?: BillPublicationOmit
    billSummary?: BillSummaryOmit
    deviceProfile?: DeviceProfileOmit
    trackedBill?: TrackedBillOmit
    pushSubscription?: PushSubscriptionOmit
    notification?: NotificationOmit
    syncLog?: SyncLogOmit
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
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    stages: number
    sponsors: number
    publications: number
    summaries: number
    trackedBills: number
    notifications: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | BillCountOutputTypeCountStagesArgs
    sponsors?: boolean | BillCountOutputTypeCountSponsorsArgs
    publications?: boolean | BillCountOutputTypeCountPublicationsArgs
    summaries?: boolean | BillCountOutputTypeCountSummariesArgs
    trackedBills?: boolean | BillCountOutputTypeCountTrackedBillsArgs
    notifications?: boolean | BillCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillStageWhereInput
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountSponsorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillSponsorWhereInput
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountPublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillPublicationWhereInput
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillSummaryWhereInput
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountTrackedBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedBillWhereInput
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type DeviceProfileCountOutputType
   */

  export type DeviceProfileCountOutputType = {
    trackedBills: number
    pushSubscriptions: number
  }

  export type DeviceProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackedBills?: boolean | DeviceProfileCountOutputTypeCountTrackedBillsArgs
    pushSubscriptions?: boolean | DeviceProfileCountOutputTypeCountPushSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * DeviceProfileCountOutputType without action
   */
  export type DeviceProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfileCountOutputType
     */
    select?: DeviceProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceProfileCountOutputType without action
   */
  export type DeviceProfileCountOutputTypeCountTrackedBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedBillWhereInput
  }

  /**
   * DeviceProfileCountOutputType without action
   */
  export type DeviceProfileCountOutputTypeCountPushSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    parliamentId: number | null
    billTypeId: number | null
    sessionId: number | null
  }

  export type BillSumAggregateOutputType = {
    parliamentId: number | null
    billTypeId: number | null
    sessionId: number | null
  }

  export type BillMinAggregateOutputType = {
    id: string | null
    parliamentId: number | null
    shortTitle: string | null
    longTitle: string | null
    billTypeId: number | null
    billTypeName: string | null
    billTypeCategory: string | null
    currentHouse: string | null
    currentStage: string | null
    originatingHouse: string | null
    lastUpdate: Date | null
    isAct: boolean | null
    isDefeated: boolean | null
    billWithdrawn: Date | null
    sessionId: number | null
    sessionName: string | null
    legislationGovUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillMaxAggregateOutputType = {
    id: string | null
    parliamentId: number | null
    shortTitle: string | null
    longTitle: string | null
    billTypeId: number | null
    billTypeName: string | null
    billTypeCategory: string | null
    currentHouse: string | null
    currentStage: string | null
    originatingHouse: string | null
    lastUpdate: Date | null
    isAct: boolean | null
    isDefeated: boolean | null
    billWithdrawn: Date | null
    sessionId: number | null
    sessionName: string | null
    legislationGovUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    parliamentId: number
    shortTitle: number
    longTitle: number
    billTypeId: number
    billTypeName: number
    billTypeCategory: number
    currentHouse: number
    currentStage: number
    originatingHouse: number
    lastUpdate: number
    isAct: number
    isDefeated: number
    billWithdrawn: number
    sessionId: number
    sessionName: number
    policyTopics: number
    affectedGroups: number
    legislationGovUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    parliamentId?: true
    billTypeId?: true
    sessionId?: true
  }

  export type BillSumAggregateInputType = {
    parliamentId?: true
    billTypeId?: true
    sessionId?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    parliamentId?: true
    shortTitle?: true
    longTitle?: true
    billTypeId?: true
    billTypeName?: true
    billTypeCategory?: true
    currentHouse?: true
    currentStage?: true
    originatingHouse?: true
    lastUpdate?: true
    isAct?: true
    isDefeated?: true
    billWithdrawn?: true
    sessionId?: true
    sessionName?: true
    legislationGovUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    parliamentId?: true
    shortTitle?: true
    longTitle?: true
    billTypeId?: true
    billTypeName?: true
    billTypeCategory?: true
    currentHouse?: true
    currentStage?: true
    originatingHouse?: true
    lastUpdate?: true
    isAct?: true
    isDefeated?: true
    billWithdrawn?: true
    sessionId?: true
    sessionName?: true
    legislationGovUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    parliamentId?: true
    shortTitle?: true
    longTitle?: true
    billTypeId?: true
    billTypeName?: true
    billTypeCategory?: true
    currentHouse?: true
    currentStage?: true
    originatingHouse?: true
    lastUpdate?: true
    isAct?: true
    isDefeated?: true
    billWithdrawn?: true
    sessionId?: true
    sessionName?: true
    policyTopics?: true
    affectedGroups?: true
    legislationGovUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId: number | null
    billTypeName: string | null
    billTypeCategory: string | null
    currentHouse: string | null
    currentStage: string | null
    originatingHouse: string | null
    lastUpdate: Date | null
    isAct: boolean
    isDefeated: boolean
    billWithdrawn: Date | null
    sessionId: number | null
    sessionName: string | null
    policyTopics: string[]
    affectedGroups: string[]
    legislationGovUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parliamentId?: boolean
    shortTitle?: boolean
    longTitle?: boolean
    billTypeId?: boolean
    billTypeName?: boolean
    billTypeCategory?: boolean
    currentHouse?: boolean
    currentStage?: boolean
    originatingHouse?: boolean
    lastUpdate?: boolean
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: boolean
    sessionId?: boolean
    sessionName?: boolean
    policyTopics?: boolean
    affectedGroups?: boolean
    legislationGovUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stages?: boolean | Bill$stagesArgs<ExtArgs>
    sponsors?: boolean | Bill$sponsorsArgs<ExtArgs>
    publications?: boolean | Bill$publicationsArgs<ExtArgs>
    summaries?: boolean | Bill$summariesArgs<ExtArgs>
    trackedBills?: boolean | Bill$trackedBillsArgs<ExtArgs>
    notifications?: boolean | Bill$notificationsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parliamentId?: boolean
    shortTitle?: boolean
    longTitle?: boolean
    billTypeId?: boolean
    billTypeName?: boolean
    billTypeCategory?: boolean
    currentHouse?: boolean
    currentStage?: boolean
    originatingHouse?: boolean
    lastUpdate?: boolean
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: boolean
    sessionId?: boolean
    sessionName?: boolean
    policyTopics?: boolean
    affectedGroups?: boolean
    legislationGovUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bill"]>

  export type BillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parliamentId?: boolean
    shortTitle?: boolean
    longTitle?: boolean
    billTypeId?: boolean
    billTypeName?: boolean
    billTypeCategory?: boolean
    currentHouse?: boolean
    currentStage?: boolean
    originatingHouse?: boolean
    lastUpdate?: boolean
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: boolean
    sessionId?: boolean
    sessionName?: boolean
    policyTopics?: boolean
    affectedGroups?: boolean
    legislationGovUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    id?: boolean
    parliamentId?: boolean
    shortTitle?: boolean
    longTitle?: boolean
    billTypeId?: boolean
    billTypeName?: boolean
    billTypeCategory?: boolean
    currentHouse?: boolean
    currentStage?: boolean
    originatingHouse?: boolean
    lastUpdate?: boolean
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: boolean
    sessionId?: boolean
    sessionName?: boolean
    policyTopics?: boolean
    affectedGroups?: boolean
    legislationGovUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parliamentId" | "shortTitle" | "longTitle" | "billTypeId" | "billTypeName" | "billTypeCategory" | "currentHouse" | "currentStage" | "originatingHouse" | "lastUpdate" | "isAct" | "isDefeated" | "billWithdrawn" | "sessionId" | "sessionName" | "policyTopics" | "affectedGroups" | "legislationGovUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["bill"]>
  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | Bill$stagesArgs<ExtArgs>
    sponsors?: boolean | Bill$sponsorsArgs<ExtArgs>
    publications?: boolean | Bill$publicationsArgs<ExtArgs>
    summaries?: boolean | Bill$summariesArgs<ExtArgs>
    trackedBills?: boolean | Bill$trackedBillsArgs<ExtArgs>
    notifications?: boolean | Bill$notificationsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      stages: Prisma.$BillStagePayload<ExtArgs>[]
      sponsors: Prisma.$BillSponsorPayload<ExtArgs>[]
      publications: Prisma.$BillPublicationPayload<ExtArgs>[]
      summaries: Prisma.$BillSummaryPayload<ExtArgs>[]
      trackedBills: Prisma.$TrackedBillPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parliamentId: number
      shortTitle: string
      longTitle: string
      billTypeId: number | null
      billTypeName: string | null
      billTypeCategory: string | null
      currentHouse: string | null
      currentStage: string | null
      originatingHouse: string | null
      lastUpdate: Date | null
      isAct: boolean
      isDefeated: boolean
      billWithdrawn: Date | null
      sessionId: number | null
      sessionName: string | null
      policyTopics: string[]
      affectedGroups: string[]
      legislationGovUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillCreateManyAndReturnArgs>(args?: SelectSubset<T, BillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills and returns the data updated in the database.
     * @param {BillUpdateManyAndReturnArgs} args - Arguments to update many Bills.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillUpdateManyAndReturnArgs>(args: SelectSubset<T, BillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
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
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stages<T extends Bill$stagesArgs<ExtArgs> = {}>(args?: Subset<T, Bill$stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sponsors<T extends Bill$sponsorsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$sponsorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publications<T extends Bill$publicationsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$publicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    summaries<T extends Bill$summariesArgs<ExtArgs> = {}>(args?: Subset<T, Bill$summariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trackedBills<T extends Bill$trackedBillsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$trackedBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Bill$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bill model
   */
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'String'>
    readonly parliamentId: FieldRef<"Bill", 'Int'>
    readonly shortTitle: FieldRef<"Bill", 'String'>
    readonly longTitle: FieldRef<"Bill", 'String'>
    readonly billTypeId: FieldRef<"Bill", 'Int'>
    readonly billTypeName: FieldRef<"Bill", 'String'>
    readonly billTypeCategory: FieldRef<"Bill", 'String'>
    readonly currentHouse: FieldRef<"Bill", 'String'>
    readonly currentStage: FieldRef<"Bill", 'String'>
    readonly originatingHouse: FieldRef<"Bill", 'String'>
    readonly lastUpdate: FieldRef<"Bill", 'DateTime'>
    readonly isAct: FieldRef<"Bill", 'Boolean'>
    readonly isDefeated: FieldRef<"Bill", 'Boolean'>
    readonly billWithdrawn: FieldRef<"Bill", 'DateTime'>
    readonly sessionId: FieldRef<"Bill", 'Int'>
    readonly sessionName: FieldRef<"Bill", 'String'>
    readonly policyTopics: FieldRef<"Bill", 'String[]'>
    readonly affectedGroups: FieldRef<"Bill", 'String[]'>
    readonly legislationGovUrl: FieldRef<"Bill", 'String'>
    readonly createdAt: FieldRef<"Bill", 'DateTime'>
    readonly updatedAt: FieldRef<"Bill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bill createManyAndReturn
   */
  export type BillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill updateManyAndReturn
   */
  export type BillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bill.stages
   */
  export type Bill$stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
    where?: BillStageWhereInput
    orderBy?: BillStageOrderByWithRelationInput | BillStageOrderByWithRelationInput[]
    cursor?: BillStageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillStageScalarFieldEnum | BillStageScalarFieldEnum[]
  }

  /**
   * Bill.sponsors
   */
  export type Bill$sponsorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
    where?: BillSponsorWhereInput
    orderBy?: BillSponsorOrderByWithRelationInput | BillSponsorOrderByWithRelationInput[]
    cursor?: BillSponsorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillSponsorScalarFieldEnum | BillSponsorScalarFieldEnum[]
  }

  /**
   * Bill.publications
   */
  export type Bill$publicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
    where?: BillPublicationWhereInput
    orderBy?: BillPublicationOrderByWithRelationInput | BillPublicationOrderByWithRelationInput[]
    cursor?: BillPublicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillPublicationScalarFieldEnum | BillPublicationScalarFieldEnum[]
  }

  /**
   * Bill.summaries
   */
  export type Bill$summariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
    where?: BillSummaryWhereInput
    orderBy?: BillSummaryOrderByWithRelationInput | BillSummaryOrderByWithRelationInput[]
    cursor?: BillSummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillSummaryScalarFieldEnum | BillSummaryScalarFieldEnum[]
  }

  /**
   * Bill.trackedBills
   */
  export type Bill$trackedBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    where?: TrackedBillWhereInput
    orderBy?: TrackedBillOrderByWithRelationInput | TrackedBillOrderByWithRelationInput[]
    cursor?: TrackedBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackedBillScalarFieldEnum | TrackedBillScalarFieldEnum[]
  }

  /**
   * Bill.notifications
   */
  export type Bill$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Model BillStage
   */

  export type AggregateBillStage = {
    _count: BillStageCountAggregateOutputType | null
    _avg: BillStageAvgAggregateOutputType | null
    _sum: BillStageSumAggregateOutputType | null
    _min: BillStageMinAggregateOutputType | null
    _max: BillStageMaxAggregateOutputType | null
  }

  export type BillStageAvgAggregateOutputType = {
    stageId: number | null
    sortOrder: number | null
  }

  export type BillStageSumAggregateOutputType = {
    stageId: number | null
    sortOrder: number | null
  }

  export type BillStageMinAggregateOutputType = {
    id: string | null
    billId: string | null
    stageId: number | null
    stageName: string | null
    house: string | null
    sortOrder: number | null
    sittingDate: Date | null
    description: string | null
    createdAt: Date | null
  }

  export type BillStageMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    stageId: number | null
    stageName: string | null
    house: string | null
    sortOrder: number | null
    sittingDate: Date | null
    description: string | null
    createdAt: Date | null
  }

  export type BillStageCountAggregateOutputType = {
    id: number
    billId: number
    stageId: number
    stageName: number
    house: number
    sortOrder: number
    sittingDate: number
    description: number
    createdAt: number
    _all: number
  }


  export type BillStageAvgAggregateInputType = {
    stageId?: true
    sortOrder?: true
  }

  export type BillStageSumAggregateInputType = {
    stageId?: true
    sortOrder?: true
  }

  export type BillStageMinAggregateInputType = {
    id?: true
    billId?: true
    stageId?: true
    stageName?: true
    house?: true
    sortOrder?: true
    sittingDate?: true
    description?: true
    createdAt?: true
  }

  export type BillStageMaxAggregateInputType = {
    id?: true
    billId?: true
    stageId?: true
    stageName?: true
    house?: true
    sortOrder?: true
    sittingDate?: true
    description?: true
    createdAt?: true
  }

  export type BillStageCountAggregateInputType = {
    id?: true
    billId?: true
    stageId?: true
    stageName?: true
    house?: true
    sortOrder?: true
    sittingDate?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type BillStageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillStage to aggregate.
     */
    where?: BillStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillStages to fetch.
     */
    orderBy?: BillStageOrderByWithRelationInput | BillStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillStages
    **/
    _count?: true | BillStageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillStageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillStageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillStageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillStageMaxAggregateInputType
  }

  export type GetBillStageAggregateType<T extends BillStageAggregateArgs> = {
        [P in keyof T & keyof AggregateBillStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillStage[P]>
      : GetScalarType<T[P], AggregateBillStage[P]>
  }




  export type BillStageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillStageWhereInput
    orderBy?: BillStageOrderByWithAggregationInput | BillStageOrderByWithAggregationInput[]
    by: BillStageScalarFieldEnum[] | BillStageScalarFieldEnum
    having?: BillStageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillStageCountAggregateInputType | true
    _avg?: BillStageAvgAggregateInputType
    _sum?: BillStageSumAggregateInputType
    _min?: BillStageMinAggregateInputType
    _max?: BillStageMaxAggregateInputType
  }

  export type BillStageGroupByOutputType = {
    id: string
    billId: string
    stageId: number
    stageName: string
    house: string
    sortOrder: number
    sittingDate: Date | null
    description: string | null
    createdAt: Date
    _count: BillStageCountAggregateOutputType | null
    _avg: BillStageAvgAggregateOutputType | null
    _sum: BillStageSumAggregateOutputType | null
    _min: BillStageMinAggregateOutputType | null
    _max: BillStageMaxAggregateOutputType | null
  }

  type GetBillStageGroupByPayload<T extends BillStageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillStageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillStageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillStageGroupByOutputType[P]>
            : GetScalarType<T[P], BillStageGroupByOutputType[P]>
        }
      >
    >


  export type BillStageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    stageId?: boolean
    stageName?: boolean
    house?: boolean
    sortOrder?: boolean
    sittingDate?: boolean
    description?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billStage"]>

  export type BillStageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    stageId?: boolean
    stageName?: boolean
    house?: boolean
    sortOrder?: boolean
    sittingDate?: boolean
    description?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billStage"]>

  export type BillStageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    stageId?: boolean
    stageName?: boolean
    house?: boolean
    sortOrder?: boolean
    sittingDate?: boolean
    description?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billStage"]>

  export type BillStageSelectScalar = {
    id?: boolean
    billId?: boolean
    stageId?: boolean
    stageName?: boolean
    house?: boolean
    sortOrder?: boolean
    sittingDate?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type BillStageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billId" | "stageId" | "stageName" | "house" | "sortOrder" | "sittingDate" | "description" | "createdAt", ExtArgs["result"]["billStage"]>
  export type BillStageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type BillStageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type BillStageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $BillStagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillStage"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      stageId: number
      stageName: string
      house: string
      sortOrder: number
      sittingDate: Date | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["billStage"]>
    composites: {}
  }

  type BillStageGetPayload<S extends boolean | null | undefined | BillStageDefaultArgs> = $Result.GetResult<Prisma.$BillStagePayload, S>

  type BillStageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillStageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillStageCountAggregateInputType | true
    }

  export interface BillStageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillStage'], meta: { name: 'BillStage' } }
    /**
     * Find zero or one BillStage that matches the filter.
     * @param {BillStageFindUniqueArgs} args - Arguments to find a BillStage
     * @example
     * // Get one BillStage
     * const billStage = await prisma.billStage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillStageFindUniqueArgs>(args: SelectSubset<T, BillStageFindUniqueArgs<ExtArgs>>): Prisma__BillStageClient<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillStage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillStageFindUniqueOrThrowArgs} args - Arguments to find a BillStage
     * @example
     * // Get one BillStage
     * const billStage = await prisma.billStage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillStageFindUniqueOrThrowArgs>(args: SelectSubset<T, BillStageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillStageClient<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillStage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillStageFindFirstArgs} args - Arguments to find a BillStage
     * @example
     * // Get one BillStage
     * const billStage = await prisma.billStage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillStageFindFirstArgs>(args?: SelectSubset<T, BillStageFindFirstArgs<ExtArgs>>): Prisma__BillStageClient<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillStage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillStageFindFirstOrThrowArgs} args - Arguments to find a BillStage
     * @example
     * // Get one BillStage
     * const billStage = await prisma.billStage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillStageFindFirstOrThrowArgs>(args?: SelectSubset<T, BillStageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillStageClient<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillStages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillStageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillStages
     * const billStages = await prisma.billStage.findMany()
     * 
     * // Get first 10 BillStages
     * const billStages = await prisma.billStage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billStageWithIdOnly = await prisma.billStage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillStageFindManyArgs>(args?: SelectSubset<T, BillStageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillStage.
     * @param {BillStageCreateArgs} args - Arguments to create a BillStage.
     * @example
     * // Create one BillStage
     * const BillStage = await prisma.billStage.create({
     *   data: {
     *     // ... data to create a BillStage
     *   }
     * })
     * 
     */
    create<T extends BillStageCreateArgs>(args: SelectSubset<T, BillStageCreateArgs<ExtArgs>>): Prisma__BillStageClient<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillStages.
     * @param {BillStageCreateManyArgs} args - Arguments to create many BillStages.
     * @example
     * // Create many BillStages
     * const billStage = await prisma.billStage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillStageCreateManyArgs>(args?: SelectSubset<T, BillStageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillStages and returns the data saved in the database.
     * @param {BillStageCreateManyAndReturnArgs} args - Arguments to create many BillStages.
     * @example
     * // Create many BillStages
     * const billStage = await prisma.billStage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillStages and only return the `id`
     * const billStageWithIdOnly = await prisma.billStage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillStageCreateManyAndReturnArgs>(args?: SelectSubset<T, BillStageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillStage.
     * @param {BillStageDeleteArgs} args - Arguments to delete one BillStage.
     * @example
     * // Delete one BillStage
     * const BillStage = await prisma.billStage.delete({
     *   where: {
     *     // ... filter to delete one BillStage
     *   }
     * })
     * 
     */
    delete<T extends BillStageDeleteArgs>(args: SelectSubset<T, BillStageDeleteArgs<ExtArgs>>): Prisma__BillStageClient<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillStage.
     * @param {BillStageUpdateArgs} args - Arguments to update one BillStage.
     * @example
     * // Update one BillStage
     * const billStage = await prisma.billStage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillStageUpdateArgs>(args: SelectSubset<T, BillStageUpdateArgs<ExtArgs>>): Prisma__BillStageClient<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillStages.
     * @param {BillStageDeleteManyArgs} args - Arguments to filter BillStages to delete.
     * @example
     * // Delete a few BillStages
     * const { count } = await prisma.billStage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillStageDeleteManyArgs>(args?: SelectSubset<T, BillStageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillStages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillStageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillStages
     * const billStage = await prisma.billStage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillStageUpdateManyArgs>(args: SelectSubset<T, BillStageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillStages and returns the data updated in the database.
     * @param {BillStageUpdateManyAndReturnArgs} args - Arguments to update many BillStages.
     * @example
     * // Update many BillStages
     * const billStage = await prisma.billStage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillStages and only return the `id`
     * const billStageWithIdOnly = await prisma.billStage.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillStageUpdateManyAndReturnArgs>(args: SelectSubset<T, BillStageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillStage.
     * @param {BillStageUpsertArgs} args - Arguments to update or create a BillStage.
     * @example
     * // Update or create a BillStage
     * const billStage = await prisma.billStage.upsert({
     *   create: {
     *     // ... data to create a BillStage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillStage we want to update
     *   }
     * })
     */
    upsert<T extends BillStageUpsertArgs>(args: SelectSubset<T, BillStageUpsertArgs<ExtArgs>>): Prisma__BillStageClient<$Result.GetResult<Prisma.$BillStagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillStages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillStageCountArgs} args - Arguments to filter BillStages to count.
     * @example
     * // Count the number of BillStages
     * const count = await prisma.billStage.count({
     *   where: {
     *     // ... the filter for the BillStages we want to count
     *   }
     * })
    **/
    count<T extends BillStageCountArgs>(
      args?: Subset<T, BillStageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillStageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillStage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillStageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillStageAggregateArgs>(args: Subset<T, BillStageAggregateArgs>): Prisma.PrismaPromise<GetBillStageAggregateType<T>>

    /**
     * Group by BillStage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillStageGroupByArgs} args - Group by arguments.
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
      T extends BillStageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillStageGroupByArgs['orderBy'] }
        : { orderBy?: BillStageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillStageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillStage model
   */
  readonly fields: BillStageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillStage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillStageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BillStage model
   */
  interface BillStageFieldRefs {
    readonly id: FieldRef<"BillStage", 'String'>
    readonly billId: FieldRef<"BillStage", 'String'>
    readonly stageId: FieldRef<"BillStage", 'Int'>
    readonly stageName: FieldRef<"BillStage", 'String'>
    readonly house: FieldRef<"BillStage", 'String'>
    readonly sortOrder: FieldRef<"BillStage", 'Int'>
    readonly sittingDate: FieldRef<"BillStage", 'DateTime'>
    readonly description: FieldRef<"BillStage", 'String'>
    readonly createdAt: FieldRef<"BillStage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillStage findUnique
   */
  export type BillStageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
    /**
     * Filter, which BillStage to fetch.
     */
    where: BillStageWhereUniqueInput
  }

  /**
   * BillStage findUniqueOrThrow
   */
  export type BillStageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
    /**
     * Filter, which BillStage to fetch.
     */
    where: BillStageWhereUniqueInput
  }

  /**
   * BillStage findFirst
   */
  export type BillStageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
    /**
     * Filter, which BillStage to fetch.
     */
    where?: BillStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillStages to fetch.
     */
    orderBy?: BillStageOrderByWithRelationInput | BillStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillStages.
     */
    cursor?: BillStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillStages.
     */
    distinct?: BillStageScalarFieldEnum | BillStageScalarFieldEnum[]
  }

  /**
   * BillStage findFirstOrThrow
   */
  export type BillStageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
    /**
     * Filter, which BillStage to fetch.
     */
    where?: BillStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillStages to fetch.
     */
    orderBy?: BillStageOrderByWithRelationInput | BillStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillStages.
     */
    cursor?: BillStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillStages.
     */
    distinct?: BillStageScalarFieldEnum | BillStageScalarFieldEnum[]
  }

  /**
   * BillStage findMany
   */
  export type BillStageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
    /**
     * Filter, which BillStages to fetch.
     */
    where?: BillStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillStages to fetch.
     */
    orderBy?: BillStageOrderByWithRelationInput | BillStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillStages.
     */
    cursor?: BillStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillStages.
     */
    skip?: number
    distinct?: BillStageScalarFieldEnum | BillStageScalarFieldEnum[]
  }

  /**
   * BillStage create
   */
  export type BillStageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
    /**
     * The data needed to create a BillStage.
     */
    data: XOR<BillStageCreateInput, BillStageUncheckedCreateInput>
  }

  /**
   * BillStage createMany
   */
  export type BillStageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillStages.
     */
    data: BillStageCreateManyInput | BillStageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillStage createManyAndReturn
   */
  export type BillStageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * The data used to create many BillStages.
     */
    data: BillStageCreateManyInput | BillStageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillStage update
   */
  export type BillStageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
    /**
     * The data needed to update a BillStage.
     */
    data: XOR<BillStageUpdateInput, BillStageUncheckedUpdateInput>
    /**
     * Choose, which BillStage to update.
     */
    where: BillStageWhereUniqueInput
  }

  /**
   * BillStage updateMany
   */
  export type BillStageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillStages.
     */
    data: XOR<BillStageUpdateManyMutationInput, BillStageUncheckedUpdateManyInput>
    /**
     * Filter which BillStages to update
     */
    where?: BillStageWhereInput
    /**
     * Limit how many BillStages to update.
     */
    limit?: number
  }

  /**
   * BillStage updateManyAndReturn
   */
  export type BillStageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * The data used to update BillStages.
     */
    data: XOR<BillStageUpdateManyMutationInput, BillStageUncheckedUpdateManyInput>
    /**
     * Filter which BillStages to update
     */
    where?: BillStageWhereInput
    /**
     * Limit how many BillStages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillStage upsert
   */
  export type BillStageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
    /**
     * The filter to search for the BillStage to update in case it exists.
     */
    where: BillStageWhereUniqueInput
    /**
     * In case the BillStage found by the `where` argument doesn't exist, create a new BillStage with this data.
     */
    create: XOR<BillStageCreateInput, BillStageUncheckedCreateInput>
    /**
     * In case the BillStage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillStageUpdateInput, BillStageUncheckedUpdateInput>
  }

  /**
   * BillStage delete
   */
  export type BillStageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
    /**
     * Filter which BillStage to delete.
     */
    where: BillStageWhereUniqueInput
  }

  /**
   * BillStage deleteMany
   */
  export type BillStageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillStages to delete
     */
    where?: BillStageWhereInput
    /**
     * Limit how many BillStages to delete.
     */
    limit?: number
  }

  /**
   * BillStage without action
   */
  export type BillStageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillStage
     */
    select?: BillStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillStage
     */
    omit?: BillStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillStageInclude<ExtArgs> | null
  }


  /**
   * Model BillSponsor
   */

  export type AggregateBillSponsor = {
    _count: BillSponsorCountAggregateOutputType | null
    _avg: BillSponsorAvgAggregateOutputType | null
    _sum: BillSponsorSumAggregateOutputType | null
    _min: BillSponsorMinAggregateOutputType | null
    _max: BillSponsorMaxAggregateOutputType | null
  }

  export type BillSponsorAvgAggregateOutputType = {
    memberId: number | null
    sortOrder: number | null
  }

  export type BillSponsorSumAggregateOutputType = {
    memberId: number | null
    sortOrder: number | null
  }

  export type BillSponsorMinAggregateOutputType = {
    id: string | null
    billId: string | null
    memberId: number | null
    name: string | null
    party: string | null
    constituency: string | null
    photoUrl: string | null
    sortOrder: number | null
  }

  export type BillSponsorMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    memberId: number | null
    name: string | null
    party: string | null
    constituency: string | null
    photoUrl: string | null
    sortOrder: number | null
  }

  export type BillSponsorCountAggregateOutputType = {
    id: number
    billId: number
    memberId: number
    name: number
    party: number
    constituency: number
    photoUrl: number
    sortOrder: number
    _all: number
  }


  export type BillSponsorAvgAggregateInputType = {
    memberId?: true
    sortOrder?: true
  }

  export type BillSponsorSumAggregateInputType = {
    memberId?: true
    sortOrder?: true
  }

  export type BillSponsorMinAggregateInputType = {
    id?: true
    billId?: true
    memberId?: true
    name?: true
    party?: true
    constituency?: true
    photoUrl?: true
    sortOrder?: true
  }

  export type BillSponsorMaxAggregateInputType = {
    id?: true
    billId?: true
    memberId?: true
    name?: true
    party?: true
    constituency?: true
    photoUrl?: true
    sortOrder?: true
  }

  export type BillSponsorCountAggregateInputType = {
    id?: true
    billId?: true
    memberId?: true
    name?: true
    party?: true
    constituency?: true
    photoUrl?: true
    sortOrder?: true
    _all?: true
  }

  export type BillSponsorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillSponsor to aggregate.
     */
    where?: BillSponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillSponsors to fetch.
     */
    orderBy?: BillSponsorOrderByWithRelationInput | BillSponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillSponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillSponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillSponsors
    **/
    _count?: true | BillSponsorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillSponsorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSponsorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillSponsorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillSponsorMaxAggregateInputType
  }

  export type GetBillSponsorAggregateType<T extends BillSponsorAggregateArgs> = {
        [P in keyof T & keyof AggregateBillSponsor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillSponsor[P]>
      : GetScalarType<T[P], AggregateBillSponsor[P]>
  }




  export type BillSponsorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillSponsorWhereInput
    orderBy?: BillSponsorOrderByWithAggregationInput | BillSponsorOrderByWithAggregationInput[]
    by: BillSponsorScalarFieldEnum[] | BillSponsorScalarFieldEnum
    having?: BillSponsorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillSponsorCountAggregateInputType | true
    _avg?: BillSponsorAvgAggregateInputType
    _sum?: BillSponsorSumAggregateInputType
    _min?: BillSponsorMinAggregateInputType
    _max?: BillSponsorMaxAggregateInputType
  }

  export type BillSponsorGroupByOutputType = {
    id: string
    billId: string
    memberId: number | null
    name: string
    party: string | null
    constituency: string | null
    photoUrl: string | null
    sortOrder: number
    _count: BillSponsorCountAggregateOutputType | null
    _avg: BillSponsorAvgAggregateOutputType | null
    _sum: BillSponsorSumAggregateOutputType | null
    _min: BillSponsorMinAggregateOutputType | null
    _max: BillSponsorMaxAggregateOutputType | null
  }

  type GetBillSponsorGroupByPayload<T extends BillSponsorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillSponsorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillSponsorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillSponsorGroupByOutputType[P]>
            : GetScalarType<T[P], BillSponsorGroupByOutputType[P]>
        }
      >
    >


  export type BillSponsorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    memberId?: boolean
    name?: boolean
    party?: boolean
    constituency?: boolean
    photoUrl?: boolean
    sortOrder?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billSponsor"]>

  export type BillSponsorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    memberId?: boolean
    name?: boolean
    party?: boolean
    constituency?: boolean
    photoUrl?: boolean
    sortOrder?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billSponsor"]>

  export type BillSponsorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    memberId?: boolean
    name?: boolean
    party?: boolean
    constituency?: boolean
    photoUrl?: boolean
    sortOrder?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billSponsor"]>

  export type BillSponsorSelectScalar = {
    id?: boolean
    billId?: boolean
    memberId?: boolean
    name?: boolean
    party?: boolean
    constituency?: boolean
    photoUrl?: boolean
    sortOrder?: boolean
  }

  export type BillSponsorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billId" | "memberId" | "name" | "party" | "constituency" | "photoUrl" | "sortOrder", ExtArgs["result"]["billSponsor"]>
  export type BillSponsorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type BillSponsorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type BillSponsorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $BillSponsorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillSponsor"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      memberId: number | null
      name: string
      party: string | null
      constituency: string | null
      photoUrl: string | null
      sortOrder: number
    }, ExtArgs["result"]["billSponsor"]>
    composites: {}
  }

  type BillSponsorGetPayload<S extends boolean | null | undefined | BillSponsorDefaultArgs> = $Result.GetResult<Prisma.$BillSponsorPayload, S>

  type BillSponsorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillSponsorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillSponsorCountAggregateInputType | true
    }

  export interface BillSponsorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillSponsor'], meta: { name: 'BillSponsor' } }
    /**
     * Find zero or one BillSponsor that matches the filter.
     * @param {BillSponsorFindUniqueArgs} args - Arguments to find a BillSponsor
     * @example
     * // Get one BillSponsor
     * const billSponsor = await prisma.billSponsor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillSponsorFindUniqueArgs>(args: SelectSubset<T, BillSponsorFindUniqueArgs<ExtArgs>>): Prisma__BillSponsorClient<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillSponsor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillSponsorFindUniqueOrThrowArgs} args - Arguments to find a BillSponsor
     * @example
     * // Get one BillSponsor
     * const billSponsor = await prisma.billSponsor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillSponsorFindUniqueOrThrowArgs>(args: SelectSubset<T, BillSponsorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillSponsorClient<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillSponsor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSponsorFindFirstArgs} args - Arguments to find a BillSponsor
     * @example
     * // Get one BillSponsor
     * const billSponsor = await prisma.billSponsor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillSponsorFindFirstArgs>(args?: SelectSubset<T, BillSponsorFindFirstArgs<ExtArgs>>): Prisma__BillSponsorClient<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillSponsor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSponsorFindFirstOrThrowArgs} args - Arguments to find a BillSponsor
     * @example
     * // Get one BillSponsor
     * const billSponsor = await prisma.billSponsor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillSponsorFindFirstOrThrowArgs>(args?: SelectSubset<T, BillSponsorFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillSponsorClient<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillSponsors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSponsorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillSponsors
     * const billSponsors = await prisma.billSponsor.findMany()
     * 
     * // Get first 10 BillSponsors
     * const billSponsors = await prisma.billSponsor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billSponsorWithIdOnly = await prisma.billSponsor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillSponsorFindManyArgs>(args?: SelectSubset<T, BillSponsorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillSponsor.
     * @param {BillSponsorCreateArgs} args - Arguments to create a BillSponsor.
     * @example
     * // Create one BillSponsor
     * const BillSponsor = await prisma.billSponsor.create({
     *   data: {
     *     // ... data to create a BillSponsor
     *   }
     * })
     * 
     */
    create<T extends BillSponsorCreateArgs>(args: SelectSubset<T, BillSponsorCreateArgs<ExtArgs>>): Prisma__BillSponsorClient<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillSponsors.
     * @param {BillSponsorCreateManyArgs} args - Arguments to create many BillSponsors.
     * @example
     * // Create many BillSponsors
     * const billSponsor = await prisma.billSponsor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillSponsorCreateManyArgs>(args?: SelectSubset<T, BillSponsorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillSponsors and returns the data saved in the database.
     * @param {BillSponsorCreateManyAndReturnArgs} args - Arguments to create many BillSponsors.
     * @example
     * // Create many BillSponsors
     * const billSponsor = await prisma.billSponsor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillSponsors and only return the `id`
     * const billSponsorWithIdOnly = await prisma.billSponsor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillSponsorCreateManyAndReturnArgs>(args?: SelectSubset<T, BillSponsorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillSponsor.
     * @param {BillSponsorDeleteArgs} args - Arguments to delete one BillSponsor.
     * @example
     * // Delete one BillSponsor
     * const BillSponsor = await prisma.billSponsor.delete({
     *   where: {
     *     // ... filter to delete one BillSponsor
     *   }
     * })
     * 
     */
    delete<T extends BillSponsorDeleteArgs>(args: SelectSubset<T, BillSponsorDeleteArgs<ExtArgs>>): Prisma__BillSponsorClient<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillSponsor.
     * @param {BillSponsorUpdateArgs} args - Arguments to update one BillSponsor.
     * @example
     * // Update one BillSponsor
     * const billSponsor = await prisma.billSponsor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillSponsorUpdateArgs>(args: SelectSubset<T, BillSponsorUpdateArgs<ExtArgs>>): Prisma__BillSponsorClient<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillSponsors.
     * @param {BillSponsorDeleteManyArgs} args - Arguments to filter BillSponsors to delete.
     * @example
     * // Delete a few BillSponsors
     * const { count } = await prisma.billSponsor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillSponsorDeleteManyArgs>(args?: SelectSubset<T, BillSponsorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillSponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSponsorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillSponsors
     * const billSponsor = await prisma.billSponsor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillSponsorUpdateManyArgs>(args: SelectSubset<T, BillSponsorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillSponsors and returns the data updated in the database.
     * @param {BillSponsorUpdateManyAndReturnArgs} args - Arguments to update many BillSponsors.
     * @example
     * // Update many BillSponsors
     * const billSponsor = await prisma.billSponsor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillSponsors and only return the `id`
     * const billSponsorWithIdOnly = await prisma.billSponsor.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillSponsorUpdateManyAndReturnArgs>(args: SelectSubset<T, BillSponsorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillSponsor.
     * @param {BillSponsorUpsertArgs} args - Arguments to update or create a BillSponsor.
     * @example
     * // Update or create a BillSponsor
     * const billSponsor = await prisma.billSponsor.upsert({
     *   create: {
     *     // ... data to create a BillSponsor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillSponsor we want to update
     *   }
     * })
     */
    upsert<T extends BillSponsorUpsertArgs>(args: SelectSubset<T, BillSponsorUpsertArgs<ExtArgs>>): Prisma__BillSponsorClient<$Result.GetResult<Prisma.$BillSponsorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillSponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSponsorCountArgs} args - Arguments to filter BillSponsors to count.
     * @example
     * // Count the number of BillSponsors
     * const count = await prisma.billSponsor.count({
     *   where: {
     *     // ... the filter for the BillSponsors we want to count
     *   }
     * })
    **/
    count<T extends BillSponsorCountArgs>(
      args?: Subset<T, BillSponsorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillSponsorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillSponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSponsorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillSponsorAggregateArgs>(args: Subset<T, BillSponsorAggregateArgs>): Prisma.PrismaPromise<GetBillSponsorAggregateType<T>>

    /**
     * Group by BillSponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSponsorGroupByArgs} args - Group by arguments.
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
      T extends BillSponsorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillSponsorGroupByArgs['orderBy'] }
        : { orderBy?: BillSponsorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillSponsorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillSponsorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillSponsor model
   */
  readonly fields: BillSponsorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillSponsor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillSponsorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BillSponsor model
   */
  interface BillSponsorFieldRefs {
    readonly id: FieldRef<"BillSponsor", 'String'>
    readonly billId: FieldRef<"BillSponsor", 'String'>
    readonly memberId: FieldRef<"BillSponsor", 'Int'>
    readonly name: FieldRef<"BillSponsor", 'String'>
    readonly party: FieldRef<"BillSponsor", 'String'>
    readonly constituency: FieldRef<"BillSponsor", 'String'>
    readonly photoUrl: FieldRef<"BillSponsor", 'String'>
    readonly sortOrder: FieldRef<"BillSponsor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BillSponsor findUnique
   */
  export type BillSponsorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
    /**
     * Filter, which BillSponsor to fetch.
     */
    where: BillSponsorWhereUniqueInput
  }

  /**
   * BillSponsor findUniqueOrThrow
   */
  export type BillSponsorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
    /**
     * Filter, which BillSponsor to fetch.
     */
    where: BillSponsorWhereUniqueInput
  }

  /**
   * BillSponsor findFirst
   */
  export type BillSponsorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
    /**
     * Filter, which BillSponsor to fetch.
     */
    where?: BillSponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillSponsors to fetch.
     */
    orderBy?: BillSponsorOrderByWithRelationInput | BillSponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillSponsors.
     */
    cursor?: BillSponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillSponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillSponsors.
     */
    distinct?: BillSponsorScalarFieldEnum | BillSponsorScalarFieldEnum[]
  }

  /**
   * BillSponsor findFirstOrThrow
   */
  export type BillSponsorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
    /**
     * Filter, which BillSponsor to fetch.
     */
    where?: BillSponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillSponsors to fetch.
     */
    orderBy?: BillSponsorOrderByWithRelationInput | BillSponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillSponsors.
     */
    cursor?: BillSponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillSponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillSponsors.
     */
    distinct?: BillSponsorScalarFieldEnum | BillSponsorScalarFieldEnum[]
  }

  /**
   * BillSponsor findMany
   */
  export type BillSponsorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
    /**
     * Filter, which BillSponsors to fetch.
     */
    where?: BillSponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillSponsors to fetch.
     */
    orderBy?: BillSponsorOrderByWithRelationInput | BillSponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillSponsors.
     */
    cursor?: BillSponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillSponsors.
     */
    skip?: number
    distinct?: BillSponsorScalarFieldEnum | BillSponsorScalarFieldEnum[]
  }

  /**
   * BillSponsor create
   */
  export type BillSponsorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
    /**
     * The data needed to create a BillSponsor.
     */
    data: XOR<BillSponsorCreateInput, BillSponsorUncheckedCreateInput>
  }

  /**
   * BillSponsor createMany
   */
  export type BillSponsorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillSponsors.
     */
    data: BillSponsorCreateManyInput | BillSponsorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillSponsor createManyAndReturn
   */
  export type BillSponsorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * The data used to create many BillSponsors.
     */
    data: BillSponsorCreateManyInput | BillSponsorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillSponsor update
   */
  export type BillSponsorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
    /**
     * The data needed to update a BillSponsor.
     */
    data: XOR<BillSponsorUpdateInput, BillSponsorUncheckedUpdateInput>
    /**
     * Choose, which BillSponsor to update.
     */
    where: BillSponsorWhereUniqueInput
  }

  /**
   * BillSponsor updateMany
   */
  export type BillSponsorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillSponsors.
     */
    data: XOR<BillSponsorUpdateManyMutationInput, BillSponsorUncheckedUpdateManyInput>
    /**
     * Filter which BillSponsors to update
     */
    where?: BillSponsorWhereInput
    /**
     * Limit how many BillSponsors to update.
     */
    limit?: number
  }

  /**
   * BillSponsor updateManyAndReturn
   */
  export type BillSponsorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * The data used to update BillSponsors.
     */
    data: XOR<BillSponsorUpdateManyMutationInput, BillSponsorUncheckedUpdateManyInput>
    /**
     * Filter which BillSponsors to update
     */
    where?: BillSponsorWhereInput
    /**
     * Limit how many BillSponsors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillSponsor upsert
   */
  export type BillSponsorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
    /**
     * The filter to search for the BillSponsor to update in case it exists.
     */
    where: BillSponsorWhereUniqueInput
    /**
     * In case the BillSponsor found by the `where` argument doesn't exist, create a new BillSponsor with this data.
     */
    create: XOR<BillSponsorCreateInput, BillSponsorUncheckedCreateInput>
    /**
     * In case the BillSponsor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillSponsorUpdateInput, BillSponsorUncheckedUpdateInput>
  }

  /**
   * BillSponsor delete
   */
  export type BillSponsorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
    /**
     * Filter which BillSponsor to delete.
     */
    where: BillSponsorWhereUniqueInput
  }

  /**
   * BillSponsor deleteMany
   */
  export type BillSponsorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillSponsors to delete
     */
    where?: BillSponsorWhereInput
    /**
     * Limit how many BillSponsors to delete.
     */
    limit?: number
  }

  /**
   * BillSponsor without action
   */
  export type BillSponsorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSponsor
     */
    select?: BillSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSponsor
     */
    omit?: BillSponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSponsorInclude<ExtArgs> | null
  }


  /**
   * Model BillPublication
   */

  export type AggregateBillPublication = {
    _count: BillPublicationCountAggregateOutputType | null
    _min: BillPublicationMinAggregateOutputType | null
    _max: BillPublicationMaxAggregateOutputType | null
  }

  export type BillPublicationMinAggregateOutputType = {
    id: string | null
    billId: string | null
    publicationType: string | null
    title: string | null
    url: string | null
    displayDate: Date | null
    createdAt: Date | null
  }

  export type BillPublicationMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    publicationType: string | null
    title: string | null
    url: string | null
    displayDate: Date | null
    createdAt: Date | null
  }

  export type BillPublicationCountAggregateOutputType = {
    id: number
    billId: number
    publicationType: number
    title: number
    url: number
    displayDate: number
    createdAt: number
    _all: number
  }


  export type BillPublicationMinAggregateInputType = {
    id?: true
    billId?: true
    publicationType?: true
    title?: true
    url?: true
    displayDate?: true
    createdAt?: true
  }

  export type BillPublicationMaxAggregateInputType = {
    id?: true
    billId?: true
    publicationType?: true
    title?: true
    url?: true
    displayDate?: true
    createdAt?: true
  }

  export type BillPublicationCountAggregateInputType = {
    id?: true
    billId?: true
    publicationType?: true
    title?: true
    url?: true
    displayDate?: true
    createdAt?: true
    _all?: true
  }

  export type BillPublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillPublication to aggregate.
     */
    where?: BillPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillPublications to fetch.
     */
    orderBy?: BillPublicationOrderByWithRelationInput | BillPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillPublications
    **/
    _count?: true | BillPublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillPublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillPublicationMaxAggregateInputType
  }

  export type GetBillPublicationAggregateType<T extends BillPublicationAggregateArgs> = {
        [P in keyof T & keyof AggregateBillPublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillPublication[P]>
      : GetScalarType<T[P], AggregateBillPublication[P]>
  }




  export type BillPublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillPublicationWhereInput
    orderBy?: BillPublicationOrderByWithAggregationInput | BillPublicationOrderByWithAggregationInput[]
    by: BillPublicationScalarFieldEnum[] | BillPublicationScalarFieldEnum
    having?: BillPublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillPublicationCountAggregateInputType | true
    _min?: BillPublicationMinAggregateInputType
    _max?: BillPublicationMaxAggregateInputType
  }

  export type BillPublicationGroupByOutputType = {
    id: string
    billId: string
    publicationType: string
    title: string
    url: string
    displayDate: Date | null
    createdAt: Date
    _count: BillPublicationCountAggregateOutputType | null
    _min: BillPublicationMinAggregateOutputType | null
    _max: BillPublicationMaxAggregateOutputType | null
  }

  type GetBillPublicationGroupByPayload<T extends BillPublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillPublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillPublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillPublicationGroupByOutputType[P]>
            : GetScalarType<T[P], BillPublicationGroupByOutputType[P]>
        }
      >
    >


  export type BillPublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    publicationType?: boolean
    title?: boolean
    url?: boolean
    displayDate?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billPublication"]>

  export type BillPublicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    publicationType?: boolean
    title?: boolean
    url?: boolean
    displayDate?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billPublication"]>

  export type BillPublicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    publicationType?: boolean
    title?: boolean
    url?: boolean
    displayDate?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billPublication"]>

  export type BillPublicationSelectScalar = {
    id?: boolean
    billId?: boolean
    publicationType?: boolean
    title?: boolean
    url?: boolean
    displayDate?: boolean
    createdAt?: boolean
  }

  export type BillPublicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billId" | "publicationType" | "title" | "url" | "displayDate" | "createdAt", ExtArgs["result"]["billPublication"]>
  export type BillPublicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type BillPublicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type BillPublicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $BillPublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillPublication"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      publicationType: string
      title: string
      url: string
      displayDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["billPublication"]>
    composites: {}
  }

  type BillPublicationGetPayload<S extends boolean | null | undefined | BillPublicationDefaultArgs> = $Result.GetResult<Prisma.$BillPublicationPayload, S>

  type BillPublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillPublicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillPublicationCountAggregateInputType | true
    }

  export interface BillPublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillPublication'], meta: { name: 'BillPublication' } }
    /**
     * Find zero or one BillPublication that matches the filter.
     * @param {BillPublicationFindUniqueArgs} args - Arguments to find a BillPublication
     * @example
     * // Get one BillPublication
     * const billPublication = await prisma.billPublication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillPublicationFindUniqueArgs>(args: SelectSubset<T, BillPublicationFindUniqueArgs<ExtArgs>>): Prisma__BillPublicationClient<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillPublication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillPublicationFindUniqueOrThrowArgs} args - Arguments to find a BillPublication
     * @example
     * // Get one BillPublication
     * const billPublication = await prisma.billPublication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillPublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, BillPublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillPublicationClient<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillPublication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillPublicationFindFirstArgs} args - Arguments to find a BillPublication
     * @example
     * // Get one BillPublication
     * const billPublication = await prisma.billPublication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillPublicationFindFirstArgs>(args?: SelectSubset<T, BillPublicationFindFirstArgs<ExtArgs>>): Prisma__BillPublicationClient<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillPublication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillPublicationFindFirstOrThrowArgs} args - Arguments to find a BillPublication
     * @example
     * // Get one BillPublication
     * const billPublication = await prisma.billPublication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillPublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, BillPublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillPublicationClient<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillPublications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillPublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillPublications
     * const billPublications = await prisma.billPublication.findMany()
     * 
     * // Get first 10 BillPublications
     * const billPublications = await prisma.billPublication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billPublicationWithIdOnly = await prisma.billPublication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillPublicationFindManyArgs>(args?: SelectSubset<T, BillPublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillPublication.
     * @param {BillPublicationCreateArgs} args - Arguments to create a BillPublication.
     * @example
     * // Create one BillPublication
     * const BillPublication = await prisma.billPublication.create({
     *   data: {
     *     // ... data to create a BillPublication
     *   }
     * })
     * 
     */
    create<T extends BillPublicationCreateArgs>(args: SelectSubset<T, BillPublicationCreateArgs<ExtArgs>>): Prisma__BillPublicationClient<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillPublications.
     * @param {BillPublicationCreateManyArgs} args - Arguments to create many BillPublications.
     * @example
     * // Create many BillPublications
     * const billPublication = await prisma.billPublication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillPublicationCreateManyArgs>(args?: SelectSubset<T, BillPublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillPublications and returns the data saved in the database.
     * @param {BillPublicationCreateManyAndReturnArgs} args - Arguments to create many BillPublications.
     * @example
     * // Create many BillPublications
     * const billPublication = await prisma.billPublication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillPublications and only return the `id`
     * const billPublicationWithIdOnly = await prisma.billPublication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillPublicationCreateManyAndReturnArgs>(args?: SelectSubset<T, BillPublicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillPublication.
     * @param {BillPublicationDeleteArgs} args - Arguments to delete one BillPublication.
     * @example
     * // Delete one BillPublication
     * const BillPublication = await prisma.billPublication.delete({
     *   where: {
     *     // ... filter to delete one BillPublication
     *   }
     * })
     * 
     */
    delete<T extends BillPublicationDeleteArgs>(args: SelectSubset<T, BillPublicationDeleteArgs<ExtArgs>>): Prisma__BillPublicationClient<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillPublication.
     * @param {BillPublicationUpdateArgs} args - Arguments to update one BillPublication.
     * @example
     * // Update one BillPublication
     * const billPublication = await prisma.billPublication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillPublicationUpdateArgs>(args: SelectSubset<T, BillPublicationUpdateArgs<ExtArgs>>): Prisma__BillPublicationClient<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillPublications.
     * @param {BillPublicationDeleteManyArgs} args - Arguments to filter BillPublications to delete.
     * @example
     * // Delete a few BillPublications
     * const { count } = await prisma.billPublication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillPublicationDeleteManyArgs>(args?: SelectSubset<T, BillPublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillPublications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillPublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillPublications
     * const billPublication = await prisma.billPublication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillPublicationUpdateManyArgs>(args: SelectSubset<T, BillPublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillPublications and returns the data updated in the database.
     * @param {BillPublicationUpdateManyAndReturnArgs} args - Arguments to update many BillPublications.
     * @example
     * // Update many BillPublications
     * const billPublication = await prisma.billPublication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillPublications and only return the `id`
     * const billPublicationWithIdOnly = await prisma.billPublication.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillPublicationUpdateManyAndReturnArgs>(args: SelectSubset<T, BillPublicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillPublication.
     * @param {BillPublicationUpsertArgs} args - Arguments to update or create a BillPublication.
     * @example
     * // Update or create a BillPublication
     * const billPublication = await prisma.billPublication.upsert({
     *   create: {
     *     // ... data to create a BillPublication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillPublication we want to update
     *   }
     * })
     */
    upsert<T extends BillPublicationUpsertArgs>(args: SelectSubset<T, BillPublicationUpsertArgs<ExtArgs>>): Prisma__BillPublicationClient<$Result.GetResult<Prisma.$BillPublicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillPublications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillPublicationCountArgs} args - Arguments to filter BillPublications to count.
     * @example
     * // Count the number of BillPublications
     * const count = await prisma.billPublication.count({
     *   where: {
     *     // ... the filter for the BillPublications we want to count
     *   }
     * })
    **/
    count<T extends BillPublicationCountArgs>(
      args?: Subset<T, BillPublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillPublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillPublication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillPublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillPublicationAggregateArgs>(args: Subset<T, BillPublicationAggregateArgs>): Prisma.PrismaPromise<GetBillPublicationAggregateType<T>>

    /**
     * Group by BillPublication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillPublicationGroupByArgs} args - Group by arguments.
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
      T extends BillPublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillPublicationGroupByArgs['orderBy'] }
        : { orderBy?: BillPublicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillPublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillPublication model
   */
  readonly fields: BillPublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillPublication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillPublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BillPublication model
   */
  interface BillPublicationFieldRefs {
    readonly id: FieldRef<"BillPublication", 'String'>
    readonly billId: FieldRef<"BillPublication", 'String'>
    readonly publicationType: FieldRef<"BillPublication", 'String'>
    readonly title: FieldRef<"BillPublication", 'String'>
    readonly url: FieldRef<"BillPublication", 'String'>
    readonly displayDate: FieldRef<"BillPublication", 'DateTime'>
    readonly createdAt: FieldRef<"BillPublication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillPublication findUnique
   */
  export type BillPublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
    /**
     * Filter, which BillPublication to fetch.
     */
    where: BillPublicationWhereUniqueInput
  }

  /**
   * BillPublication findUniqueOrThrow
   */
  export type BillPublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
    /**
     * Filter, which BillPublication to fetch.
     */
    where: BillPublicationWhereUniqueInput
  }

  /**
   * BillPublication findFirst
   */
  export type BillPublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
    /**
     * Filter, which BillPublication to fetch.
     */
    where?: BillPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillPublications to fetch.
     */
    orderBy?: BillPublicationOrderByWithRelationInput | BillPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillPublications.
     */
    cursor?: BillPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillPublications.
     */
    distinct?: BillPublicationScalarFieldEnum | BillPublicationScalarFieldEnum[]
  }

  /**
   * BillPublication findFirstOrThrow
   */
  export type BillPublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
    /**
     * Filter, which BillPublication to fetch.
     */
    where?: BillPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillPublications to fetch.
     */
    orderBy?: BillPublicationOrderByWithRelationInput | BillPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillPublications.
     */
    cursor?: BillPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillPublications.
     */
    distinct?: BillPublicationScalarFieldEnum | BillPublicationScalarFieldEnum[]
  }

  /**
   * BillPublication findMany
   */
  export type BillPublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
    /**
     * Filter, which BillPublications to fetch.
     */
    where?: BillPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillPublications to fetch.
     */
    orderBy?: BillPublicationOrderByWithRelationInput | BillPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillPublications.
     */
    cursor?: BillPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillPublications.
     */
    skip?: number
    distinct?: BillPublicationScalarFieldEnum | BillPublicationScalarFieldEnum[]
  }

  /**
   * BillPublication create
   */
  export type BillPublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
    /**
     * The data needed to create a BillPublication.
     */
    data: XOR<BillPublicationCreateInput, BillPublicationUncheckedCreateInput>
  }

  /**
   * BillPublication createMany
   */
  export type BillPublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillPublications.
     */
    data: BillPublicationCreateManyInput | BillPublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillPublication createManyAndReturn
   */
  export type BillPublicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * The data used to create many BillPublications.
     */
    data: BillPublicationCreateManyInput | BillPublicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillPublication update
   */
  export type BillPublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
    /**
     * The data needed to update a BillPublication.
     */
    data: XOR<BillPublicationUpdateInput, BillPublicationUncheckedUpdateInput>
    /**
     * Choose, which BillPublication to update.
     */
    where: BillPublicationWhereUniqueInput
  }

  /**
   * BillPublication updateMany
   */
  export type BillPublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillPublications.
     */
    data: XOR<BillPublicationUpdateManyMutationInput, BillPublicationUncheckedUpdateManyInput>
    /**
     * Filter which BillPublications to update
     */
    where?: BillPublicationWhereInput
    /**
     * Limit how many BillPublications to update.
     */
    limit?: number
  }

  /**
   * BillPublication updateManyAndReturn
   */
  export type BillPublicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * The data used to update BillPublications.
     */
    data: XOR<BillPublicationUpdateManyMutationInput, BillPublicationUncheckedUpdateManyInput>
    /**
     * Filter which BillPublications to update
     */
    where?: BillPublicationWhereInput
    /**
     * Limit how many BillPublications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillPublication upsert
   */
  export type BillPublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
    /**
     * The filter to search for the BillPublication to update in case it exists.
     */
    where: BillPublicationWhereUniqueInput
    /**
     * In case the BillPublication found by the `where` argument doesn't exist, create a new BillPublication with this data.
     */
    create: XOR<BillPublicationCreateInput, BillPublicationUncheckedCreateInput>
    /**
     * In case the BillPublication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillPublicationUpdateInput, BillPublicationUncheckedUpdateInput>
  }

  /**
   * BillPublication delete
   */
  export type BillPublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
    /**
     * Filter which BillPublication to delete.
     */
    where: BillPublicationWhereUniqueInput
  }

  /**
   * BillPublication deleteMany
   */
  export type BillPublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillPublications to delete
     */
    where?: BillPublicationWhereInput
    /**
     * Limit how many BillPublications to delete.
     */
    limit?: number
  }

  /**
   * BillPublication without action
   */
  export type BillPublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillPublication
     */
    select?: BillPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillPublication
     */
    omit?: BillPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillPublicationInclude<ExtArgs> | null
  }


  /**
   * Model BillSummary
   */

  export type AggregateBillSummary = {
    _count: BillSummaryCountAggregateOutputType | null
    _avg: BillSummaryAvgAggregateOutputType | null
    _sum: BillSummarySumAggregateOutputType | null
    _min: BillSummaryMinAggregateOutputType | null
    _max: BillSummaryMaxAggregateOutputType | null
  }

  export type BillSummaryAvgAggregateOutputType = {
    version: number | null
    tokensUsed: number | null
  }

  export type BillSummarySumAggregateOutputType = {
    version: number | null
    tokensUsed: number | null
  }

  export type BillSummaryMinAggregateOutputType = {
    id: string | null
    billId: string | null
    language: string | null
    version: number | null
    overview: string | null
    purpose: string | null
    implementation: string | null
    tldr: string | null
    modelUsed: string | null
    tokensUsed: number | null
    generatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillSummaryMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    language: string | null
    version: number | null
    overview: string | null
    purpose: string | null
    implementation: string | null
    tldr: string | null
    modelUsed: string | null
    tokensUsed: number | null
    generatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillSummaryCountAggregateOutputType = {
    id: number
    billId: number
    language: number
    version: number
    overview: number
    purpose: number
    keyChanges: number
    impacts: number
    implementation: number
    tldr: number
    modelUsed: number
    tokensUsed: number
    generatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillSummaryAvgAggregateInputType = {
    version?: true
    tokensUsed?: true
  }

  export type BillSummarySumAggregateInputType = {
    version?: true
    tokensUsed?: true
  }

  export type BillSummaryMinAggregateInputType = {
    id?: true
    billId?: true
    language?: true
    version?: true
    overview?: true
    purpose?: true
    implementation?: true
    tldr?: true
    modelUsed?: true
    tokensUsed?: true
    generatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillSummaryMaxAggregateInputType = {
    id?: true
    billId?: true
    language?: true
    version?: true
    overview?: true
    purpose?: true
    implementation?: true
    tldr?: true
    modelUsed?: true
    tokensUsed?: true
    generatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillSummaryCountAggregateInputType = {
    id?: true
    billId?: true
    language?: true
    version?: true
    overview?: true
    purpose?: true
    keyChanges?: true
    impacts?: true
    implementation?: true
    tldr?: true
    modelUsed?: true
    tokensUsed?: true
    generatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillSummary to aggregate.
     */
    where?: BillSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillSummaries to fetch.
     */
    orderBy?: BillSummaryOrderByWithRelationInput | BillSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillSummaries
    **/
    _count?: true | BillSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillSummaryMaxAggregateInputType
  }

  export type GetBillSummaryAggregateType<T extends BillSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateBillSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillSummary[P]>
      : GetScalarType<T[P], AggregateBillSummary[P]>
  }




  export type BillSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillSummaryWhereInput
    orderBy?: BillSummaryOrderByWithAggregationInput | BillSummaryOrderByWithAggregationInput[]
    by: BillSummaryScalarFieldEnum[] | BillSummaryScalarFieldEnum
    having?: BillSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillSummaryCountAggregateInputType | true
    _avg?: BillSummaryAvgAggregateInputType
    _sum?: BillSummarySumAggregateInputType
    _min?: BillSummaryMinAggregateInputType
    _max?: BillSummaryMaxAggregateInputType
  }

  export type BillSummaryGroupByOutputType = {
    id: string
    billId: string
    language: string
    version: number
    overview: string
    purpose: string
    keyChanges: JsonValue
    impacts: JsonValue
    implementation: string | null
    tldr: string
    modelUsed: string
    tokensUsed: number | null
    generatedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: BillSummaryCountAggregateOutputType | null
    _avg: BillSummaryAvgAggregateOutputType | null
    _sum: BillSummarySumAggregateOutputType | null
    _min: BillSummaryMinAggregateOutputType | null
    _max: BillSummaryMaxAggregateOutputType | null
  }

  type GetBillSummaryGroupByPayload<T extends BillSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], BillSummaryGroupByOutputType[P]>
        }
      >
    >


  export type BillSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    language?: boolean
    version?: boolean
    overview?: boolean
    purpose?: boolean
    keyChanges?: boolean
    impacts?: boolean
    implementation?: boolean
    tldr?: boolean
    modelUsed?: boolean
    tokensUsed?: boolean
    generatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billSummary"]>

  export type BillSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    language?: boolean
    version?: boolean
    overview?: boolean
    purpose?: boolean
    keyChanges?: boolean
    impacts?: boolean
    implementation?: boolean
    tldr?: boolean
    modelUsed?: boolean
    tokensUsed?: boolean
    generatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billSummary"]>

  export type BillSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    language?: boolean
    version?: boolean
    overview?: boolean
    purpose?: boolean
    keyChanges?: boolean
    impacts?: boolean
    implementation?: boolean
    tldr?: boolean
    modelUsed?: boolean
    tokensUsed?: boolean
    generatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billSummary"]>

  export type BillSummarySelectScalar = {
    id?: boolean
    billId?: boolean
    language?: boolean
    version?: boolean
    overview?: boolean
    purpose?: boolean
    keyChanges?: boolean
    impacts?: boolean
    implementation?: boolean
    tldr?: boolean
    modelUsed?: boolean
    tokensUsed?: boolean
    generatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billId" | "language" | "version" | "overview" | "purpose" | "keyChanges" | "impacts" | "implementation" | "tldr" | "modelUsed" | "tokensUsed" | "generatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["billSummary"]>
  export type BillSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type BillSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type BillSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $BillSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillSummary"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      language: string
      version: number
      overview: string
      purpose: string
      keyChanges: Prisma.JsonValue
      impacts: Prisma.JsonValue
      implementation: string | null
      tldr: string
      modelUsed: string
      tokensUsed: number | null
      generatedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["billSummary"]>
    composites: {}
  }

  type BillSummaryGetPayload<S extends boolean | null | undefined | BillSummaryDefaultArgs> = $Result.GetResult<Prisma.$BillSummaryPayload, S>

  type BillSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillSummaryCountAggregateInputType | true
    }

  export interface BillSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillSummary'], meta: { name: 'BillSummary' } }
    /**
     * Find zero or one BillSummary that matches the filter.
     * @param {BillSummaryFindUniqueArgs} args - Arguments to find a BillSummary
     * @example
     * // Get one BillSummary
     * const billSummary = await prisma.billSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillSummaryFindUniqueArgs>(args: SelectSubset<T, BillSummaryFindUniqueArgs<ExtArgs>>): Prisma__BillSummaryClient<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillSummaryFindUniqueOrThrowArgs} args - Arguments to find a BillSummary
     * @example
     * // Get one BillSummary
     * const billSummary = await prisma.billSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, BillSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillSummaryClient<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSummaryFindFirstArgs} args - Arguments to find a BillSummary
     * @example
     * // Get one BillSummary
     * const billSummary = await prisma.billSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillSummaryFindFirstArgs>(args?: SelectSubset<T, BillSummaryFindFirstArgs<ExtArgs>>): Prisma__BillSummaryClient<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSummaryFindFirstOrThrowArgs} args - Arguments to find a BillSummary
     * @example
     * // Get one BillSummary
     * const billSummary = await prisma.billSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, BillSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillSummaryClient<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillSummaries
     * const billSummaries = await prisma.billSummary.findMany()
     * 
     * // Get first 10 BillSummaries
     * const billSummaries = await prisma.billSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billSummaryWithIdOnly = await prisma.billSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillSummaryFindManyArgs>(args?: SelectSubset<T, BillSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillSummary.
     * @param {BillSummaryCreateArgs} args - Arguments to create a BillSummary.
     * @example
     * // Create one BillSummary
     * const BillSummary = await prisma.billSummary.create({
     *   data: {
     *     // ... data to create a BillSummary
     *   }
     * })
     * 
     */
    create<T extends BillSummaryCreateArgs>(args: SelectSubset<T, BillSummaryCreateArgs<ExtArgs>>): Prisma__BillSummaryClient<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillSummaries.
     * @param {BillSummaryCreateManyArgs} args - Arguments to create many BillSummaries.
     * @example
     * // Create many BillSummaries
     * const billSummary = await prisma.billSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillSummaryCreateManyArgs>(args?: SelectSubset<T, BillSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillSummaries and returns the data saved in the database.
     * @param {BillSummaryCreateManyAndReturnArgs} args - Arguments to create many BillSummaries.
     * @example
     * // Create many BillSummaries
     * const billSummary = await prisma.billSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillSummaries and only return the `id`
     * const billSummaryWithIdOnly = await prisma.billSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, BillSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillSummary.
     * @param {BillSummaryDeleteArgs} args - Arguments to delete one BillSummary.
     * @example
     * // Delete one BillSummary
     * const BillSummary = await prisma.billSummary.delete({
     *   where: {
     *     // ... filter to delete one BillSummary
     *   }
     * })
     * 
     */
    delete<T extends BillSummaryDeleteArgs>(args: SelectSubset<T, BillSummaryDeleteArgs<ExtArgs>>): Prisma__BillSummaryClient<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillSummary.
     * @param {BillSummaryUpdateArgs} args - Arguments to update one BillSummary.
     * @example
     * // Update one BillSummary
     * const billSummary = await prisma.billSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillSummaryUpdateArgs>(args: SelectSubset<T, BillSummaryUpdateArgs<ExtArgs>>): Prisma__BillSummaryClient<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillSummaries.
     * @param {BillSummaryDeleteManyArgs} args - Arguments to filter BillSummaries to delete.
     * @example
     * // Delete a few BillSummaries
     * const { count } = await prisma.billSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillSummaryDeleteManyArgs>(args?: SelectSubset<T, BillSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillSummaries
     * const billSummary = await prisma.billSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillSummaryUpdateManyArgs>(args: SelectSubset<T, BillSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillSummaries and returns the data updated in the database.
     * @param {BillSummaryUpdateManyAndReturnArgs} args - Arguments to update many BillSummaries.
     * @example
     * // Update many BillSummaries
     * const billSummary = await prisma.billSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillSummaries and only return the `id`
     * const billSummaryWithIdOnly = await prisma.billSummary.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, BillSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillSummary.
     * @param {BillSummaryUpsertArgs} args - Arguments to update or create a BillSummary.
     * @example
     * // Update or create a BillSummary
     * const billSummary = await prisma.billSummary.upsert({
     *   create: {
     *     // ... data to create a BillSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillSummary we want to update
     *   }
     * })
     */
    upsert<T extends BillSummaryUpsertArgs>(args: SelectSubset<T, BillSummaryUpsertArgs<ExtArgs>>): Prisma__BillSummaryClient<$Result.GetResult<Prisma.$BillSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSummaryCountArgs} args - Arguments to filter BillSummaries to count.
     * @example
     * // Count the number of BillSummaries
     * const count = await prisma.billSummary.count({
     *   where: {
     *     // ... the filter for the BillSummaries we want to count
     *   }
     * })
    **/
    count<T extends BillSummaryCountArgs>(
      args?: Subset<T, BillSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillSummaryAggregateArgs>(args: Subset<T, BillSummaryAggregateArgs>): Prisma.PrismaPromise<GetBillSummaryAggregateType<T>>

    /**
     * Group by BillSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillSummaryGroupByArgs} args - Group by arguments.
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
      T extends BillSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillSummaryGroupByArgs['orderBy'] }
        : { orderBy?: BillSummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillSummary model
   */
  readonly fields: BillSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BillSummary model
   */
  interface BillSummaryFieldRefs {
    readonly id: FieldRef<"BillSummary", 'String'>
    readonly billId: FieldRef<"BillSummary", 'String'>
    readonly language: FieldRef<"BillSummary", 'String'>
    readonly version: FieldRef<"BillSummary", 'Int'>
    readonly overview: FieldRef<"BillSummary", 'String'>
    readonly purpose: FieldRef<"BillSummary", 'String'>
    readonly keyChanges: FieldRef<"BillSummary", 'Json'>
    readonly impacts: FieldRef<"BillSummary", 'Json'>
    readonly implementation: FieldRef<"BillSummary", 'String'>
    readonly tldr: FieldRef<"BillSummary", 'String'>
    readonly modelUsed: FieldRef<"BillSummary", 'String'>
    readonly tokensUsed: FieldRef<"BillSummary", 'Int'>
    readonly generatedAt: FieldRef<"BillSummary", 'DateTime'>
    readonly createdAt: FieldRef<"BillSummary", 'DateTime'>
    readonly updatedAt: FieldRef<"BillSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillSummary findUnique
   */
  export type BillSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
    /**
     * Filter, which BillSummary to fetch.
     */
    where: BillSummaryWhereUniqueInput
  }

  /**
   * BillSummary findUniqueOrThrow
   */
  export type BillSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
    /**
     * Filter, which BillSummary to fetch.
     */
    where: BillSummaryWhereUniqueInput
  }

  /**
   * BillSummary findFirst
   */
  export type BillSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
    /**
     * Filter, which BillSummary to fetch.
     */
    where?: BillSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillSummaries to fetch.
     */
    orderBy?: BillSummaryOrderByWithRelationInput | BillSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillSummaries.
     */
    cursor?: BillSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillSummaries.
     */
    distinct?: BillSummaryScalarFieldEnum | BillSummaryScalarFieldEnum[]
  }

  /**
   * BillSummary findFirstOrThrow
   */
  export type BillSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
    /**
     * Filter, which BillSummary to fetch.
     */
    where?: BillSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillSummaries to fetch.
     */
    orderBy?: BillSummaryOrderByWithRelationInput | BillSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillSummaries.
     */
    cursor?: BillSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillSummaries.
     */
    distinct?: BillSummaryScalarFieldEnum | BillSummaryScalarFieldEnum[]
  }

  /**
   * BillSummary findMany
   */
  export type BillSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
    /**
     * Filter, which BillSummaries to fetch.
     */
    where?: BillSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillSummaries to fetch.
     */
    orderBy?: BillSummaryOrderByWithRelationInput | BillSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillSummaries.
     */
    cursor?: BillSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillSummaries.
     */
    skip?: number
    distinct?: BillSummaryScalarFieldEnum | BillSummaryScalarFieldEnum[]
  }

  /**
   * BillSummary create
   */
  export type BillSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a BillSummary.
     */
    data: XOR<BillSummaryCreateInput, BillSummaryUncheckedCreateInput>
  }

  /**
   * BillSummary createMany
   */
  export type BillSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillSummaries.
     */
    data: BillSummaryCreateManyInput | BillSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillSummary createManyAndReturn
   */
  export type BillSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many BillSummaries.
     */
    data: BillSummaryCreateManyInput | BillSummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillSummary update
   */
  export type BillSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a BillSummary.
     */
    data: XOR<BillSummaryUpdateInput, BillSummaryUncheckedUpdateInput>
    /**
     * Choose, which BillSummary to update.
     */
    where: BillSummaryWhereUniqueInput
  }

  /**
   * BillSummary updateMany
   */
  export type BillSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillSummaries.
     */
    data: XOR<BillSummaryUpdateManyMutationInput, BillSummaryUncheckedUpdateManyInput>
    /**
     * Filter which BillSummaries to update
     */
    where?: BillSummaryWhereInput
    /**
     * Limit how many BillSummaries to update.
     */
    limit?: number
  }

  /**
   * BillSummary updateManyAndReturn
   */
  export type BillSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * The data used to update BillSummaries.
     */
    data: XOR<BillSummaryUpdateManyMutationInput, BillSummaryUncheckedUpdateManyInput>
    /**
     * Filter which BillSummaries to update
     */
    where?: BillSummaryWhereInput
    /**
     * Limit how many BillSummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillSummary upsert
   */
  export type BillSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the BillSummary to update in case it exists.
     */
    where: BillSummaryWhereUniqueInput
    /**
     * In case the BillSummary found by the `where` argument doesn't exist, create a new BillSummary with this data.
     */
    create: XOR<BillSummaryCreateInput, BillSummaryUncheckedCreateInput>
    /**
     * In case the BillSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillSummaryUpdateInput, BillSummaryUncheckedUpdateInput>
  }

  /**
   * BillSummary delete
   */
  export type BillSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
    /**
     * Filter which BillSummary to delete.
     */
    where: BillSummaryWhereUniqueInput
  }

  /**
   * BillSummary deleteMany
   */
  export type BillSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillSummaries to delete
     */
    where?: BillSummaryWhereInput
    /**
     * Limit how many BillSummaries to delete.
     */
    limit?: number
  }

  /**
   * BillSummary without action
   */
  export type BillSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillSummary
     */
    select?: BillSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillSummary
     */
    omit?: BillSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillSummaryInclude<ExtArgs> | null
  }


  /**
   * Model DeviceProfile
   */

  export type AggregateDeviceProfile = {
    _count: DeviceProfileCountAggregateOutputType | null
    _min: DeviceProfileMinAggregateOutputType | null
    _max: DeviceProfileMaxAggregateOutputType | null
  }

  export type DeviceProfileMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    preferredLang: string | null
    theme: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceProfileMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    preferredLang: string | null
    theme: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceProfileCountAggregateOutputType = {
    id: number
    deviceId: number
    preferredLang: number
    theme: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceProfileMinAggregateInputType = {
    id?: true
    deviceId?: true
    preferredLang?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceProfileMaxAggregateInputType = {
    id?: true
    deviceId?: true
    preferredLang?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceProfileCountAggregateInputType = {
    id?: true
    deviceId?: true
    preferredLang?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceProfile to aggregate.
     */
    where?: DeviceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceProfiles to fetch.
     */
    orderBy?: DeviceProfileOrderByWithRelationInput | DeviceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceProfiles
    **/
    _count?: true | DeviceProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceProfileMaxAggregateInputType
  }

  export type GetDeviceProfileAggregateType<T extends DeviceProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceProfile[P]>
      : GetScalarType<T[P], AggregateDeviceProfile[P]>
  }




  export type DeviceProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceProfileWhereInput
    orderBy?: DeviceProfileOrderByWithAggregationInput | DeviceProfileOrderByWithAggregationInput[]
    by: DeviceProfileScalarFieldEnum[] | DeviceProfileScalarFieldEnum
    having?: DeviceProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceProfileCountAggregateInputType | true
    _min?: DeviceProfileMinAggregateInputType
    _max?: DeviceProfileMaxAggregateInputType
  }

  export type DeviceProfileGroupByOutputType = {
    id: string
    deviceId: string
    preferredLang: string
    theme: string
    createdAt: Date
    updatedAt: Date
    _count: DeviceProfileCountAggregateOutputType | null
    _min: DeviceProfileMinAggregateOutputType | null
    _max: DeviceProfileMaxAggregateOutputType | null
  }

  type GetDeviceProfileGroupByPayload<T extends DeviceProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceProfileGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceProfileGroupByOutputType[P]>
        }
      >
    >


  export type DeviceProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    preferredLang?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trackedBills?: boolean | DeviceProfile$trackedBillsArgs<ExtArgs>
    pushSubscriptions?: boolean | DeviceProfile$pushSubscriptionsArgs<ExtArgs>
    _count?: boolean | DeviceProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceProfile"]>

  export type DeviceProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    preferredLang?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deviceProfile"]>

  export type DeviceProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    preferredLang?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deviceProfile"]>

  export type DeviceProfileSelectScalar = {
    id?: boolean
    deviceId?: boolean
    preferredLang?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "preferredLang" | "theme" | "createdAt" | "updatedAt", ExtArgs["result"]["deviceProfile"]>
  export type DeviceProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackedBills?: boolean | DeviceProfile$trackedBillsArgs<ExtArgs>
    pushSubscriptions?: boolean | DeviceProfile$pushSubscriptionsArgs<ExtArgs>
    _count?: boolean | DeviceProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeviceProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeviceProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceProfile"
    objects: {
      trackedBills: Prisma.$TrackedBillPayload<ExtArgs>[]
      pushSubscriptions: Prisma.$PushSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      preferredLang: string
      theme: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deviceProfile"]>
    composites: {}
  }

  type DeviceProfileGetPayload<S extends boolean | null | undefined | DeviceProfileDefaultArgs> = $Result.GetResult<Prisma.$DeviceProfilePayload, S>

  type DeviceProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceProfileCountAggregateInputType | true
    }

  export interface DeviceProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceProfile'], meta: { name: 'DeviceProfile' } }
    /**
     * Find zero or one DeviceProfile that matches the filter.
     * @param {DeviceProfileFindUniqueArgs} args - Arguments to find a DeviceProfile
     * @example
     * // Get one DeviceProfile
     * const deviceProfile = await prisma.deviceProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceProfileFindUniqueArgs>(args: SelectSubset<T, DeviceProfileFindUniqueArgs<ExtArgs>>): Prisma__DeviceProfileClient<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceProfileFindUniqueOrThrowArgs} args - Arguments to find a DeviceProfile
     * @example
     * // Get one DeviceProfile
     * const deviceProfile = await prisma.deviceProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceProfileClient<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceProfileFindFirstArgs} args - Arguments to find a DeviceProfile
     * @example
     * // Get one DeviceProfile
     * const deviceProfile = await prisma.deviceProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceProfileFindFirstArgs>(args?: SelectSubset<T, DeviceProfileFindFirstArgs<ExtArgs>>): Prisma__DeviceProfileClient<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceProfileFindFirstOrThrowArgs} args - Arguments to find a DeviceProfile
     * @example
     * // Get one DeviceProfile
     * const deviceProfile = await prisma.deviceProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceProfileClient<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceProfiles
     * const deviceProfiles = await prisma.deviceProfile.findMany()
     * 
     * // Get first 10 DeviceProfiles
     * const deviceProfiles = await prisma.deviceProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceProfileWithIdOnly = await prisma.deviceProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceProfileFindManyArgs>(args?: SelectSubset<T, DeviceProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceProfile.
     * @param {DeviceProfileCreateArgs} args - Arguments to create a DeviceProfile.
     * @example
     * // Create one DeviceProfile
     * const DeviceProfile = await prisma.deviceProfile.create({
     *   data: {
     *     // ... data to create a DeviceProfile
     *   }
     * })
     * 
     */
    create<T extends DeviceProfileCreateArgs>(args: SelectSubset<T, DeviceProfileCreateArgs<ExtArgs>>): Prisma__DeviceProfileClient<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceProfiles.
     * @param {DeviceProfileCreateManyArgs} args - Arguments to create many DeviceProfiles.
     * @example
     * // Create many DeviceProfiles
     * const deviceProfile = await prisma.deviceProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceProfileCreateManyArgs>(args?: SelectSubset<T, DeviceProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceProfiles and returns the data saved in the database.
     * @param {DeviceProfileCreateManyAndReturnArgs} args - Arguments to create many DeviceProfiles.
     * @example
     * // Create many DeviceProfiles
     * const deviceProfile = await prisma.deviceProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceProfiles and only return the `id`
     * const deviceProfileWithIdOnly = await prisma.deviceProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceProfile.
     * @param {DeviceProfileDeleteArgs} args - Arguments to delete one DeviceProfile.
     * @example
     * // Delete one DeviceProfile
     * const DeviceProfile = await prisma.deviceProfile.delete({
     *   where: {
     *     // ... filter to delete one DeviceProfile
     *   }
     * })
     * 
     */
    delete<T extends DeviceProfileDeleteArgs>(args: SelectSubset<T, DeviceProfileDeleteArgs<ExtArgs>>): Prisma__DeviceProfileClient<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceProfile.
     * @param {DeviceProfileUpdateArgs} args - Arguments to update one DeviceProfile.
     * @example
     * // Update one DeviceProfile
     * const deviceProfile = await prisma.deviceProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceProfileUpdateArgs>(args: SelectSubset<T, DeviceProfileUpdateArgs<ExtArgs>>): Prisma__DeviceProfileClient<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceProfiles.
     * @param {DeviceProfileDeleteManyArgs} args - Arguments to filter DeviceProfiles to delete.
     * @example
     * // Delete a few DeviceProfiles
     * const { count } = await prisma.deviceProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceProfileDeleteManyArgs>(args?: SelectSubset<T, DeviceProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceProfiles
     * const deviceProfile = await prisma.deviceProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceProfileUpdateManyArgs>(args: SelectSubset<T, DeviceProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceProfiles and returns the data updated in the database.
     * @param {DeviceProfileUpdateManyAndReturnArgs} args - Arguments to update many DeviceProfiles.
     * @example
     * // Update many DeviceProfiles
     * const deviceProfile = await prisma.deviceProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceProfiles and only return the `id`
     * const deviceProfileWithIdOnly = await prisma.deviceProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceProfile.
     * @param {DeviceProfileUpsertArgs} args - Arguments to update or create a DeviceProfile.
     * @example
     * // Update or create a DeviceProfile
     * const deviceProfile = await prisma.deviceProfile.upsert({
     *   create: {
     *     // ... data to create a DeviceProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceProfile we want to update
     *   }
     * })
     */
    upsert<T extends DeviceProfileUpsertArgs>(args: SelectSubset<T, DeviceProfileUpsertArgs<ExtArgs>>): Prisma__DeviceProfileClient<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceProfileCountArgs} args - Arguments to filter DeviceProfiles to count.
     * @example
     * // Count the number of DeviceProfiles
     * const count = await prisma.deviceProfile.count({
     *   where: {
     *     // ... the filter for the DeviceProfiles we want to count
     *   }
     * })
    **/
    count<T extends DeviceProfileCountArgs>(
      args?: Subset<T, DeviceProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceProfileAggregateArgs>(args: Subset<T, DeviceProfileAggregateArgs>): Prisma.PrismaPromise<GetDeviceProfileAggregateType<T>>

    /**
     * Group by DeviceProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceProfileGroupByArgs} args - Group by arguments.
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
      T extends DeviceProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceProfileGroupByArgs['orderBy'] }
        : { orderBy?: DeviceProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceProfile model
   */
  readonly fields: DeviceProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trackedBills<T extends DeviceProfile$trackedBillsArgs<ExtArgs> = {}>(args?: Subset<T, DeviceProfile$trackedBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pushSubscriptions<T extends DeviceProfile$pushSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, DeviceProfile$pushSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DeviceProfile model
   */
  interface DeviceProfileFieldRefs {
    readonly id: FieldRef<"DeviceProfile", 'String'>
    readonly deviceId: FieldRef<"DeviceProfile", 'String'>
    readonly preferredLang: FieldRef<"DeviceProfile", 'String'>
    readonly theme: FieldRef<"DeviceProfile", 'String'>
    readonly createdAt: FieldRef<"DeviceProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"DeviceProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceProfile findUnique
   */
  export type DeviceProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceProfileInclude<ExtArgs> | null
    /**
     * Filter, which DeviceProfile to fetch.
     */
    where: DeviceProfileWhereUniqueInput
  }

  /**
   * DeviceProfile findUniqueOrThrow
   */
  export type DeviceProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceProfileInclude<ExtArgs> | null
    /**
     * Filter, which DeviceProfile to fetch.
     */
    where: DeviceProfileWhereUniqueInput
  }

  /**
   * DeviceProfile findFirst
   */
  export type DeviceProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceProfileInclude<ExtArgs> | null
    /**
     * Filter, which DeviceProfile to fetch.
     */
    where?: DeviceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceProfiles to fetch.
     */
    orderBy?: DeviceProfileOrderByWithRelationInput | DeviceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceProfiles.
     */
    cursor?: DeviceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceProfiles.
     */
    distinct?: DeviceProfileScalarFieldEnum | DeviceProfileScalarFieldEnum[]
  }

  /**
   * DeviceProfile findFirstOrThrow
   */
  export type DeviceProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceProfileInclude<ExtArgs> | null
    /**
     * Filter, which DeviceProfile to fetch.
     */
    where?: DeviceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceProfiles to fetch.
     */
    orderBy?: DeviceProfileOrderByWithRelationInput | DeviceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceProfiles.
     */
    cursor?: DeviceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceProfiles.
     */
    distinct?: DeviceProfileScalarFieldEnum | DeviceProfileScalarFieldEnum[]
  }

  /**
   * DeviceProfile findMany
   */
  export type DeviceProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceProfileInclude<ExtArgs> | null
    /**
     * Filter, which DeviceProfiles to fetch.
     */
    where?: DeviceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceProfiles to fetch.
     */
    orderBy?: DeviceProfileOrderByWithRelationInput | DeviceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceProfiles.
     */
    cursor?: DeviceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceProfiles.
     */
    skip?: number
    distinct?: DeviceProfileScalarFieldEnum | DeviceProfileScalarFieldEnum[]
  }

  /**
   * DeviceProfile create
   */
  export type DeviceProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceProfile.
     */
    data: XOR<DeviceProfileCreateInput, DeviceProfileUncheckedCreateInput>
  }

  /**
   * DeviceProfile createMany
   */
  export type DeviceProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceProfiles.
     */
    data: DeviceProfileCreateManyInput | DeviceProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceProfile createManyAndReturn
   */
  export type DeviceProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceProfiles.
     */
    data: DeviceProfileCreateManyInput | DeviceProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceProfile update
   */
  export type DeviceProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceProfile.
     */
    data: XOR<DeviceProfileUpdateInput, DeviceProfileUncheckedUpdateInput>
    /**
     * Choose, which DeviceProfile to update.
     */
    where: DeviceProfileWhereUniqueInput
  }

  /**
   * DeviceProfile updateMany
   */
  export type DeviceProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceProfiles.
     */
    data: XOR<DeviceProfileUpdateManyMutationInput, DeviceProfileUncheckedUpdateManyInput>
    /**
     * Filter which DeviceProfiles to update
     */
    where?: DeviceProfileWhereInput
    /**
     * Limit how many DeviceProfiles to update.
     */
    limit?: number
  }

  /**
   * DeviceProfile updateManyAndReturn
   */
  export type DeviceProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * The data used to update DeviceProfiles.
     */
    data: XOR<DeviceProfileUpdateManyMutationInput, DeviceProfileUncheckedUpdateManyInput>
    /**
     * Filter which DeviceProfiles to update
     */
    where?: DeviceProfileWhereInput
    /**
     * Limit how many DeviceProfiles to update.
     */
    limit?: number
  }

  /**
   * DeviceProfile upsert
   */
  export type DeviceProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceProfile to update in case it exists.
     */
    where: DeviceProfileWhereUniqueInput
    /**
     * In case the DeviceProfile found by the `where` argument doesn't exist, create a new DeviceProfile with this data.
     */
    create: XOR<DeviceProfileCreateInput, DeviceProfileUncheckedCreateInput>
    /**
     * In case the DeviceProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceProfileUpdateInput, DeviceProfileUncheckedUpdateInput>
  }

  /**
   * DeviceProfile delete
   */
  export type DeviceProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceProfileInclude<ExtArgs> | null
    /**
     * Filter which DeviceProfile to delete.
     */
    where: DeviceProfileWhereUniqueInput
  }

  /**
   * DeviceProfile deleteMany
   */
  export type DeviceProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceProfiles to delete
     */
    where?: DeviceProfileWhereInput
    /**
     * Limit how many DeviceProfiles to delete.
     */
    limit?: number
  }

  /**
   * DeviceProfile.trackedBills
   */
  export type DeviceProfile$trackedBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    where?: TrackedBillWhereInput
    orderBy?: TrackedBillOrderByWithRelationInput | TrackedBillOrderByWithRelationInput[]
    cursor?: TrackedBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackedBillScalarFieldEnum | TrackedBillScalarFieldEnum[]
  }

  /**
   * DeviceProfile.pushSubscriptions
   */
  export type DeviceProfile$pushSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    cursor?: PushSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * DeviceProfile without action
   */
  export type DeviceProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceProfile
     */
    select?: DeviceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceProfile
     */
    omit?: DeviceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceProfileInclude<ExtArgs> | null
  }


  /**
   * Model TrackedBill
   */

  export type AggregateTrackedBill = {
    _count: TrackedBillCountAggregateOutputType | null
    _min: TrackedBillMinAggregateOutputType | null
    _max: TrackedBillMaxAggregateOutputType | null
  }

  export type TrackedBillMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    billId: string | null
    notifyStageChange: boolean | null
    notifyRoyalAssent: boolean | null
    notifyNewAmendment: boolean | null
    createdAt: Date | null
  }

  export type TrackedBillMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    billId: string | null
    notifyStageChange: boolean | null
    notifyRoyalAssent: boolean | null
    notifyNewAmendment: boolean | null
    createdAt: Date | null
  }

  export type TrackedBillCountAggregateOutputType = {
    id: number
    deviceId: number
    billId: number
    notifyStageChange: number
    notifyRoyalAssent: number
    notifyNewAmendment: number
    createdAt: number
    _all: number
  }


  export type TrackedBillMinAggregateInputType = {
    id?: true
    deviceId?: true
    billId?: true
    notifyStageChange?: true
    notifyRoyalAssent?: true
    notifyNewAmendment?: true
    createdAt?: true
  }

  export type TrackedBillMaxAggregateInputType = {
    id?: true
    deviceId?: true
    billId?: true
    notifyStageChange?: true
    notifyRoyalAssent?: true
    notifyNewAmendment?: true
    createdAt?: true
  }

  export type TrackedBillCountAggregateInputType = {
    id?: true
    deviceId?: true
    billId?: true
    notifyStageChange?: true
    notifyRoyalAssent?: true
    notifyNewAmendment?: true
    createdAt?: true
    _all?: true
  }

  export type TrackedBillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedBill to aggregate.
     */
    where?: TrackedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedBills to fetch.
     */
    orderBy?: TrackedBillOrderByWithRelationInput | TrackedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackedBills
    **/
    _count?: true | TrackedBillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackedBillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackedBillMaxAggregateInputType
  }

  export type GetTrackedBillAggregateType<T extends TrackedBillAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackedBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackedBill[P]>
      : GetScalarType<T[P], AggregateTrackedBill[P]>
  }




  export type TrackedBillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedBillWhereInput
    orderBy?: TrackedBillOrderByWithAggregationInput | TrackedBillOrderByWithAggregationInput[]
    by: TrackedBillScalarFieldEnum[] | TrackedBillScalarFieldEnum
    having?: TrackedBillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackedBillCountAggregateInputType | true
    _min?: TrackedBillMinAggregateInputType
    _max?: TrackedBillMaxAggregateInputType
  }

  export type TrackedBillGroupByOutputType = {
    id: string
    deviceId: string
    billId: string
    notifyStageChange: boolean
    notifyRoyalAssent: boolean
    notifyNewAmendment: boolean
    createdAt: Date
    _count: TrackedBillCountAggregateOutputType | null
    _min: TrackedBillMinAggregateOutputType | null
    _max: TrackedBillMaxAggregateOutputType | null
  }

  type GetTrackedBillGroupByPayload<T extends TrackedBillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackedBillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackedBillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackedBillGroupByOutputType[P]>
            : GetScalarType<T[P], TrackedBillGroupByOutputType[P]>
        }
      >
    >


  export type TrackedBillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    billId?: boolean
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: boolean
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedBill"]>

  export type TrackedBillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    billId?: boolean
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: boolean
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedBill"]>

  export type TrackedBillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    billId?: boolean
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: boolean
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedBill"]>

  export type TrackedBillSelectScalar = {
    id?: boolean
    deviceId?: boolean
    billId?: boolean
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: boolean
  }

  export type TrackedBillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "billId" | "notifyStageChange" | "notifyRoyalAssent" | "notifyNewAmendment" | "createdAt", ExtArgs["result"]["trackedBill"]>
  export type TrackedBillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type TrackedBillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type TrackedBillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $TrackedBillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackedBill"
    objects: {
      device: Prisma.$DeviceProfilePayload<ExtArgs>
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      billId: string
      notifyStageChange: boolean
      notifyRoyalAssent: boolean
      notifyNewAmendment: boolean
      createdAt: Date
    }, ExtArgs["result"]["trackedBill"]>
    composites: {}
  }

  type TrackedBillGetPayload<S extends boolean | null | undefined | TrackedBillDefaultArgs> = $Result.GetResult<Prisma.$TrackedBillPayload, S>

  type TrackedBillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackedBillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackedBillCountAggregateInputType | true
    }

  export interface TrackedBillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackedBill'], meta: { name: 'TrackedBill' } }
    /**
     * Find zero or one TrackedBill that matches the filter.
     * @param {TrackedBillFindUniqueArgs} args - Arguments to find a TrackedBill
     * @example
     * // Get one TrackedBill
     * const trackedBill = await prisma.trackedBill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackedBillFindUniqueArgs>(args: SelectSubset<T, TrackedBillFindUniqueArgs<ExtArgs>>): Prisma__TrackedBillClient<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackedBill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackedBillFindUniqueOrThrowArgs} args - Arguments to find a TrackedBill
     * @example
     * // Get one TrackedBill
     * const trackedBill = await prisma.trackedBill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackedBillFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackedBillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackedBillClient<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedBill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedBillFindFirstArgs} args - Arguments to find a TrackedBill
     * @example
     * // Get one TrackedBill
     * const trackedBill = await prisma.trackedBill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackedBillFindFirstArgs>(args?: SelectSubset<T, TrackedBillFindFirstArgs<ExtArgs>>): Prisma__TrackedBillClient<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedBill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedBillFindFirstOrThrowArgs} args - Arguments to find a TrackedBill
     * @example
     * // Get one TrackedBill
     * const trackedBill = await prisma.trackedBill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackedBillFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackedBillFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackedBillClient<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackedBills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedBillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackedBills
     * const trackedBills = await prisma.trackedBill.findMany()
     * 
     * // Get first 10 TrackedBills
     * const trackedBills = await prisma.trackedBill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackedBillWithIdOnly = await prisma.trackedBill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackedBillFindManyArgs>(args?: SelectSubset<T, TrackedBillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackedBill.
     * @param {TrackedBillCreateArgs} args - Arguments to create a TrackedBill.
     * @example
     * // Create one TrackedBill
     * const TrackedBill = await prisma.trackedBill.create({
     *   data: {
     *     // ... data to create a TrackedBill
     *   }
     * })
     * 
     */
    create<T extends TrackedBillCreateArgs>(args: SelectSubset<T, TrackedBillCreateArgs<ExtArgs>>): Prisma__TrackedBillClient<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackedBills.
     * @param {TrackedBillCreateManyArgs} args - Arguments to create many TrackedBills.
     * @example
     * // Create many TrackedBills
     * const trackedBill = await prisma.trackedBill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackedBillCreateManyArgs>(args?: SelectSubset<T, TrackedBillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackedBills and returns the data saved in the database.
     * @param {TrackedBillCreateManyAndReturnArgs} args - Arguments to create many TrackedBills.
     * @example
     * // Create many TrackedBills
     * const trackedBill = await prisma.trackedBill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackedBills and only return the `id`
     * const trackedBillWithIdOnly = await prisma.trackedBill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackedBillCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackedBillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackedBill.
     * @param {TrackedBillDeleteArgs} args - Arguments to delete one TrackedBill.
     * @example
     * // Delete one TrackedBill
     * const TrackedBill = await prisma.trackedBill.delete({
     *   where: {
     *     // ... filter to delete one TrackedBill
     *   }
     * })
     * 
     */
    delete<T extends TrackedBillDeleteArgs>(args: SelectSubset<T, TrackedBillDeleteArgs<ExtArgs>>): Prisma__TrackedBillClient<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackedBill.
     * @param {TrackedBillUpdateArgs} args - Arguments to update one TrackedBill.
     * @example
     * // Update one TrackedBill
     * const trackedBill = await prisma.trackedBill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackedBillUpdateArgs>(args: SelectSubset<T, TrackedBillUpdateArgs<ExtArgs>>): Prisma__TrackedBillClient<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackedBills.
     * @param {TrackedBillDeleteManyArgs} args - Arguments to filter TrackedBills to delete.
     * @example
     * // Delete a few TrackedBills
     * const { count } = await prisma.trackedBill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackedBillDeleteManyArgs>(args?: SelectSubset<T, TrackedBillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedBillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackedBills
     * const trackedBill = await prisma.trackedBill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackedBillUpdateManyArgs>(args: SelectSubset<T, TrackedBillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedBills and returns the data updated in the database.
     * @param {TrackedBillUpdateManyAndReturnArgs} args - Arguments to update many TrackedBills.
     * @example
     * // Update many TrackedBills
     * const trackedBill = await prisma.trackedBill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackedBills and only return the `id`
     * const trackedBillWithIdOnly = await prisma.trackedBill.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrackedBillUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackedBillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackedBill.
     * @param {TrackedBillUpsertArgs} args - Arguments to update or create a TrackedBill.
     * @example
     * // Update or create a TrackedBill
     * const trackedBill = await prisma.trackedBill.upsert({
     *   create: {
     *     // ... data to create a TrackedBill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackedBill we want to update
     *   }
     * })
     */
    upsert<T extends TrackedBillUpsertArgs>(args: SelectSubset<T, TrackedBillUpsertArgs<ExtArgs>>): Prisma__TrackedBillClient<$Result.GetResult<Prisma.$TrackedBillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackedBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedBillCountArgs} args - Arguments to filter TrackedBills to count.
     * @example
     * // Count the number of TrackedBills
     * const count = await prisma.trackedBill.count({
     *   where: {
     *     // ... the filter for the TrackedBills we want to count
     *   }
     * })
    **/
    count<T extends TrackedBillCountArgs>(
      args?: Subset<T, TrackedBillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackedBillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackedBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedBillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackedBillAggregateArgs>(args: Subset<T, TrackedBillAggregateArgs>): Prisma.PrismaPromise<GetTrackedBillAggregateType<T>>

    /**
     * Group by TrackedBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedBillGroupByArgs} args - Group by arguments.
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
      T extends TrackedBillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackedBillGroupByArgs['orderBy'] }
        : { orderBy?: TrackedBillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackedBillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackedBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackedBill model
   */
  readonly fields: TrackedBillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackedBill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackedBillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceProfileDefaultArgs<ExtArgs>>): Prisma__DeviceProfileClient<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TrackedBill model
   */
  interface TrackedBillFieldRefs {
    readonly id: FieldRef<"TrackedBill", 'String'>
    readonly deviceId: FieldRef<"TrackedBill", 'String'>
    readonly billId: FieldRef<"TrackedBill", 'String'>
    readonly notifyStageChange: FieldRef<"TrackedBill", 'Boolean'>
    readonly notifyRoyalAssent: FieldRef<"TrackedBill", 'Boolean'>
    readonly notifyNewAmendment: FieldRef<"TrackedBill", 'Boolean'>
    readonly createdAt: FieldRef<"TrackedBill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrackedBill findUnique
   */
  export type TrackedBillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    /**
     * Filter, which TrackedBill to fetch.
     */
    where: TrackedBillWhereUniqueInput
  }

  /**
   * TrackedBill findUniqueOrThrow
   */
  export type TrackedBillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    /**
     * Filter, which TrackedBill to fetch.
     */
    where: TrackedBillWhereUniqueInput
  }

  /**
   * TrackedBill findFirst
   */
  export type TrackedBillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    /**
     * Filter, which TrackedBill to fetch.
     */
    where?: TrackedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedBills to fetch.
     */
    orderBy?: TrackedBillOrderByWithRelationInput | TrackedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedBills.
     */
    cursor?: TrackedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedBills.
     */
    distinct?: TrackedBillScalarFieldEnum | TrackedBillScalarFieldEnum[]
  }

  /**
   * TrackedBill findFirstOrThrow
   */
  export type TrackedBillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    /**
     * Filter, which TrackedBill to fetch.
     */
    where?: TrackedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedBills to fetch.
     */
    orderBy?: TrackedBillOrderByWithRelationInput | TrackedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedBills.
     */
    cursor?: TrackedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedBills.
     */
    distinct?: TrackedBillScalarFieldEnum | TrackedBillScalarFieldEnum[]
  }

  /**
   * TrackedBill findMany
   */
  export type TrackedBillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    /**
     * Filter, which TrackedBills to fetch.
     */
    where?: TrackedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedBills to fetch.
     */
    orderBy?: TrackedBillOrderByWithRelationInput | TrackedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackedBills.
     */
    cursor?: TrackedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedBills.
     */
    skip?: number
    distinct?: TrackedBillScalarFieldEnum | TrackedBillScalarFieldEnum[]
  }

  /**
   * TrackedBill create
   */
  export type TrackedBillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackedBill.
     */
    data: XOR<TrackedBillCreateInput, TrackedBillUncheckedCreateInput>
  }

  /**
   * TrackedBill createMany
   */
  export type TrackedBillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackedBills.
     */
    data: TrackedBillCreateManyInput | TrackedBillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackedBill createManyAndReturn
   */
  export type TrackedBillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * The data used to create many TrackedBills.
     */
    data: TrackedBillCreateManyInput | TrackedBillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackedBill update
   */
  export type TrackedBillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackedBill.
     */
    data: XOR<TrackedBillUpdateInput, TrackedBillUncheckedUpdateInput>
    /**
     * Choose, which TrackedBill to update.
     */
    where: TrackedBillWhereUniqueInput
  }

  /**
   * TrackedBill updateMany
   */
  export type TrackedBillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackedBills.
     */
    data: XOR<TrackedBillUpdateManyMutationInput, TrackedBillUncheckedUpdateManyInput>
    /**
     * Filter which TrackedBills to update
     */
    where?: TrackedBillWhereInput
    /**
     * Limit how many TrackedBills to update.
     */
    limit?: number
  }

  /**
   * TrackedBill updateManyAndReturn
   */
  export type TrackedBillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * The data used to update TrackedBills.
     */
    data: XOR<TrackedBillUpdateManyMutationInput, TrackedBillUncheckedUpdateManyInput>
    /**
     * Filter which TrackedBills to update
     */
    where?: TrackedBillWhereInput
    /**
     * Limit how many TrackedBills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackedBill upsert
   */
  export type TrackedBillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackedBill to update in case it exists.
     */
    where: TrackedBillWhereUniqueInput
    /**
     * In case the TrackedBill found by the `where` argument doesn't exist, create a new TrackedBill with this data.
     */
    create: XOR<TrackedBillCreateInput, TrackedBillUncheckedCreateInput>
    /**
     * In case the TrackedBill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackedBillUpdateInput, TrackedBillUncheckedUpdateInput>
  }

  /**
   * TrackedBill delete
   */
  export type TrackedBillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
    /**
     * Filter which TrackedBill to delete.
     */
    where: TrackedBillWhereUniqueInput
  }

  /**
   * TrackedBill deleteMany
   */
  export type TrackedBillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedBills to delete
     */
    where?: TrackedBillWhereInput
    /**
     * Limit how many TrackedBills to delete.
     */
    limit?: number
  }

  /**
   * TrackedBill without action
   */
  export type TrackedBillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedBill
     */
    select?: TrackedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedBill
     */
    omit?: TrackedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedBillInclude<ExtArgs> | null
  }


  /**
   * Model PushSubscription
   */

  export type AggregatePushSubscription = {
    _count: PushSubscriptionCountAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  export type PushSubscriptionMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PushSubscriptionMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PushSubscriptionCountAggregateOutputType = {
    id: number
    deviceId: number
    endpoint: number
    p256dh: number
    auth: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PushSubscriptionMinAggregateInputType = {
    id?: true
    deviceId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PushSubscriptionMaxAggregateInputType = {
    id?: true
    deviceId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PushSubscriptionCountAggregateInputType = {
    id?: true
    deviceId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PushSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscription to aggregate.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushSubscriptions
    **/
    _count?: true | PushSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type GetPushSubscriptionAggregateType<T extends PushSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePushSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushSubscription[P]>
      : GetScalarType<T[P], AggregatePushSubscription[P]>
  }




  export type PushSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithAggregationInput | PushSubscriptionOrderByWithAggregationInput[]
    by: PushSubscriptionScalarFieldEnum[] | PushSubscriptionScalarFieldEnum
    having?: PushSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushSubscriptionCountAggregateInputType | true
    _min?: PushSubscriptionMinAggregateInputType
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type PushSubscriptionGroupByOutputType = {
    id: string
    deviceId: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt: Date
    updatedAt: Date
    _count: PushSubscriptionCountAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  type GetPushSubscriptionGroupByPayload<T extends PushSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type PushSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectScalar = {
    id?: boolean
    deviceId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PushSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "endpoint" | "p256dh" | "auth" | "createdAt" | "updatedAt", ExtArgs["result"]["pushSubscription"]>
  export type PushSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
  }
  export type PushSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
  }
  export type PushSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceProfileDefaultArgs<ExtArgs>
  }

  export type $PushSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushSubscription"
    objects: {
      device: Prisma.$DeviceProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      endpoint: string
      p256dh: string
      auth: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pushSubscription"]>
    composites: {}
  }

  type PushSubscriptionGetPayload<S extends boolean | null | undefined | PushSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$PushSubscriptionPayload, S>

  type PushSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PushSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PushSubscriptionCountAggregateInputType | true
    }

  export interface PushSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushSubscription'], meta: { name: 'PushSubscription' } }
    /**
     * Find zero or one PushSubscription that matches the filter.
     * @param {PushSubscriptionFindUniqueArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushSubscriptionFindUniqueArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PushSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PushSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushSubscriptionFindFirstArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PushSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany()
     * 
     * // Get first 10 PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushSubscriptionFindManyArgs>(args?: SelectSubset<T, PushSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PushSubscription.
     * @param {PushSubscriptionCreateArgs} args - Arguments to create a PushSubscription.
     * @example
     * // Create one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.create({
     *   data: {
     *     // ... data to create a PushSubscription
     *   }
     * })
     * 
     */
    create<T extends PushSubscriptionCreateArgs>(args: SelectSubset<T, PushSubscriptionCreateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PushSubscriptions.
     * @param {PushSubscriptionCreateManyArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushSubscriptionCreateManyArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PushSubscriptions and returns the data saved in the database.
     * @param {PushSubscriptionCreateManyAndReturnArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PushSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PushSubscription.
     * @param {PushSubscriptionDeleteArgs} args - Arguments to delete one PushSubscription.
     * @example
     * // Delete one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.delete({
     *   where: {
     *     // ... filter to delete one PushSubscription
     *   }
     * })
     * 
     */
    delete<T extends PushSubscriptionDeleteArgs>(args: SelectSubset<T, PushSubscriptionDeleteArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PushSubscription.
     * @param {PushSubscriptionUpdateArgs} args - Arguments to update one PushSubscription.
     * @example
     * // Update one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushSubscriptionUpdateArgs>(args: SelectSubset<T, PushSubscriptionUpdateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PushSubscriptions.
     * @param {PushSubscriptionDeleteManyArgs} args - Arguments to filter PushSubscriptions to delete.
     * @example
     * // Delete a few PushSubscriptions
     * const { count } = await prisma.pushSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushSubscriptionDeleteManyArgs>(args?: SelectSubset<T, PushSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushSubscriptionUpdateManyArgs>(args: SelectSubset<T, PushSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushSubscriptions and returns the data updated in the database.
     * @param {PushSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many PushSubscriptions.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends PushSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PushSubscription.
     * @param {PushSubscriptionUpsertArgs} args - Arguments to update or create a PushSubscription.
     * @example
     * // Update or create a PushSubscription
     * const pushSubscription = await prisma.pushSubscription.upsert({
     *   create: {
     *     // ... data to create a PushSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushSubscription we want to update
     *   }
     * })
     */
    upsert<T extends PushSubscriptionUpsertArgs>(args: SelectSubset<T, PushSubscriptionUpsertArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionCountArgs} args - Arguments to filter PushSubscriptions to count.
     * @example
     * // Count the number of PushSubscriptions
     * const count = await prisma.pushSubscription.count({
     *   where: {
     *     // ... the filter for the PushSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends PushSubscriptionCountArgs>(
      args?: Subset<T, PushSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PushSubscriptionAggregateArgs>(args: Subset<T, PushSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetPushSubscriptionAggregateType<T>>

    /**
     * Group by PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends PushSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: PushSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PushSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushSubscription model
   */
  readonly fields: PushSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceProfileDefaultArgs<ExtArgs>>): Prisma__DeviceProfileClient<$Result.GetResult<Prisma.$DeviceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PushSubscription model
   */
  interface PushSubscriptionFieldRefs {
    readonly id: FieldRef<"PushSubscription", 'String'>
    readonly deviceId: FieldRef<"PushSubscription", 'String'>
    readonly endpoint: FieldRef<"PushSubscription", 'String'>
    readonly p256dh: FieldRef<"PushSubscription", 'String'>
    readonly auth: FieldRef<"PushSubscription", 'String'>
    readonly createdAt: FieldRef<"PushSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"PushSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PushSubscription findUnique
   */
  export type PushSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findUniqueOrThrow
   */
  export type PushSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findFirst
   */
  export type PushSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findFirstOrThrow
   */
  export type PushSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findMany
   */
  export type PushSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscriptions to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription create
   */
  export type PushSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a PushSubscription.
     */
    data: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
  }

  /**
   * PushSubscription createMany
   */
  export type PushSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushSubscription createManyAndReturn
   */
  export type PushSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushSubscription update
   */
  export type PushSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a PushSubscription.
     */
    data: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which PushSubscription to update.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription updateMany
   */
  export type PushSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number
  }

  /**
   * PushSubscription updateManyAndReturn
   */
  export type PushSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushSubscription upsert
   */
  export type PushSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the PushSubscription to update in case it exists.
     */
    where: PushSubscriptionWhereUniqueInput
    /**
     * In case the PushSubscription found by the `where` argument doesn't exist, create a new PushSubscription with this data.
     */
    create: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
    /**
     * In case the PushSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
  }

  /**
   * PushSubscription delete
   */
  export type PushSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which PushSubscription to delete.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription deleteMany
   */
  export type PushSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscriptions to delete
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * PushSubscription without action
   */
  export type PushSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    billId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    body: string | null
    sentAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    body: string | null
    sentAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    billId: number
    type: number
    title: number
    body: number
    data: number
    sentAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    billId?: true
    type?: true
    title?: true
    body?: true
    sentAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    billId?: true
    type?: true
    title?: true
    body?: true
    sentAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    billId?: true
    type?: true
    title?: true
    body?: true
    data?: true
    sentAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    billId: string
    type: $Enums.NotificationType
    title: string
    body: string
    data: JsonValue | null
    sentAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    sentAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    sentAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    sentAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    billId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    sentAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billId" | "type" | "title" | "body" | "data" | "sentAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      type: $Enums.NotificationType
      title: string
      body: string
      data: Prisma.JsonValue | null
      sentAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly billId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly data: FieldRef<"Notification", 'Json'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model SyncLog
   */

  export type AggregateSyncLog = {
    _count: SyncLogCountAggregateOutputType | null
    _avg: SyncLogAvgAggregateOutputType | null
    _sum: SyncLogSumAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  export type SyncLogAvgAggregateOutputType = {
    billsFound: number | null
    billsSynced: number | null
  }

  export type SyncLogSumAggregateOutputType = {
    billsFound: number | null
    billsSynced: number | null
  }

  export type SyncLogMinAggregateOutputType = {
    id: string | null
    jobName: string | null
    status: string | null
    billsFound: number | null
    billsSynced: number | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type SyncLogMaxAggregateOutputType = {
    id: string | null
    jobName: string | null
    status: string | null
    billsFound: number | null
    billsSynced: number | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type SyncLogCountAggregateOutputType = {
    id: number
    jobName: number
    status: number
    billsFound: number
    billsSynced: number
    error: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type SyncLogAvgAggregateInputType = {
    billsFound?: true
    billsSynced?: true
  }

  export type SyncLogSumAggregateInputType = {
    billsFound?: true
    billsSynced?: true
  }

  export type SyncLogMinAggregateInputType = {
    id?: true
    jobName?: true
    status?: true
    billsFound?: true
    billsSynced?: true
    error?: true
    startedAt?: true
    completedAt?: true
  }

  export type SyncLogMaxAggregateInputType = {
    id?: true
    jobName?: true
    status?: true
    billsFound?: true
    billsSynced?: true
    error?: true
    startedAt?: true
    completedAt?: true
  }

  export type SyncLogCountAggregateInputType = {
    id?: true
    jobName?: true
    status?: true
    billsFound?: true
    billsSynced?: true
    error?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type SyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLog to aggregate.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncLogs
    **/
    _count?: true | SyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncLogMaxAggregateInputType
  }

  export type GetSyncLogAggregateType<T extends SyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncLog[P]>
      : GetScalarType<T[P], AggregateSyncLog[P]>
  }




  export type SyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncLogWhereInput
    orderBy?: SyncLogOrderByWithAggregationInput | SyncLogOrderByWithAggregationInput[]
    by: SyncLogScalarFieldEnum[] | SyncLogScalarFieldEnum
    having?: SyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncLogCountAggregateInputType | true
    _avg?: SyncLogAvgAggregateInputType
    _sum?: SyncLogSumAggregateInputType
    _min?: SyncLogMinAggregateInputType
    _max?: SyncLogMaxAggregateInputType
  }

  export type SyncLogGroupByOutputType = {
    id: string
    jobName: string
    status: string
    billsFound: number | null
    billsSynced: number | null
    error: string | null
    startedAt: Date
    completedAt: Date | null
    _count: SyncLogCountAggregateOutputType | null
    _avg: SyncLogAvgAggregateOutputType | null
    _sum: SyncLogSumAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  type GetSyncLogGroupByPayload<T extends SyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
        }
      >
    >


  export type SyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobName?: boolean
    status?: boolean
    billsFound?: boolean
    billsSynced?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobName?: boolean
    status?: boolean
    billsFound?: boolean
    billsSynced?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobName?: boolean
    status?: boolean
    billsFound?: boolean
    billsSynced?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectScalar = {
    id?: boolean
    jobName?: boolean
    status?: boolean
    billsFound?: boolean
    billsSynced?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type SyncLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobName" | "status" | "billsFound" | "billsSynced" | "error" | "startedAt" | "completedAt", ExtArgs["result"]["syncLog"]>

  export type $SyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobName: string
      status: string
      billsFound: number | null
      billsSynced: number | null
      error: string | null
      startedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["syncLog"]>
    composites: {}
  }

  type SyncLogGetPayload<S extends boolean | null | undefined | SyncLogDefaultArgs> = $Result.GetResult<Prisma.$SyncLogPayload, S>

  type SyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncLogCountAggregateInputType | true
    }

  export interface SyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncLog'], meta: { name: 'SyncLog' } }
    /**
     * Find zero or one SyncLog that matches the filter.
     * @param {SyncLogFindUniqueArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncLogFindUniqueArgs>(args: SelectSubset<T, SyncLogFindUniqueArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncLogFindUniqueOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncLogFindFirstArgs>(args?: SelectSubset<T, SyncLogFindFirstArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncLogs
     * const syncLogs = await prisma.syncLog.findMany()
     * 
     * // Get first 10 SyncLogs
     * const syncLogs = await prisma.syncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncLogFindManyArgs>(args?: SelectSubset<T, SyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncLog.
     * @param {SyncLogCreateArgs} args - Arguments to create a SyncLog.
     * @example
     * // Create one SyncLog
     * const SyncLog = await prisma.syncLog.create({
     *   data: {
     *     // ... data to create a SyncLog
     *   }
     * })
     * 
     */
    create<T extends SyncLogCreateArgs>(args: SelectSubset<T, SyncLogCreateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncLogs.
     * @param {SyncLogCreateManyArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncLogCreateManyArgs>(args?: SelectSubset<T, SyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncLogs and returns the data saved in the database.
     * @param {SyncLogCreateManyAndReturnArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncLogs and only return the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SyncLog.
     * @param {SyncLogDeleteArgs} args - Arguments to delete one SyncLog.
     * @example
     * // Delete one SyncLog
     * const SyncLog = await prisma.syncLog.delete({
     *   where: {
     *     // ... filter to delete one SyncLog
     *   }
     * })
     * 
     */
    delete<T extends SyncLogDeleteArgs>(args: SelectSubset<T, SyncLogDeleteArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncLog.
     * @param {SyncLogUpdateArgs} args - Arguments to update one SyncLog.
     * @example
     * // Update one SyncLog
     * const syncLog = await prisma.syncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncLogUpdateArgs>(args: SelectSubset<T, SyncLogUpdateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncLogs.
     * @param {SyncLogDeleteManyArgs} args - Arguments to filter SyncLogs to delete.
     * @example
     * // Delete a few SyncLogs
     * const { count } = await prisma.syncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncLogDeleteManyArgs>(args?: SelectSubset<T, SyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncLogUpdateManyArgs>(args: SelectSubset<T, SyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs and returns the data updated in the database.
     * @param {SyncLogUpdateManyAndReturnArgs} args - Arguments to update many SyncLogs.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncLogs and only return the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends SyncLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SyncLog.
     * @param {SyncLogUpsertArgs} args - Arguments to update or create a SyncLog.
     * @example
     * // Update or create a SyncLog
     * const syncLog = await prisma.syncLog.upsert({
     *   create: {
     *     // ... data to create a SyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncLog we want to update
     *   }
     * })
     */
    upsert<T extends SyncLogUpsertArgs>(args: SelectSubset<T, SyncLogUpsertArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogCountArgs} args - Arguments to filter SyncLogs to count.
     * @example
     * // Count the number of SyncLogs
     * const count = await prisma.syncLog.count({
     *   where: {
     *     // ... the filter for the SyncLogs we want to count
     *   }
     * })
    **/
    count<T extends SyncLogCountArgs>(
      args?: Subset<T, SyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncLogAggregateArgs>(args: Subset<T, SyncLogAggregateArgs>): Prisma.PrismaPromise<GetSyncLogAggregateType<T>>

    /**
     * Group by SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogGroupByArgs} args - Group by arguments.
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
      T extends SyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncLogGroupByArgs['orderBy'] }
        : { orderBy?: SyncLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncLog model
   */
  readonly fields: SyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SyncLog model
   */
  interface SyncLogFieldRefs {
    readonly id: FieldRef<"SyncLog", 'String'>
    readonly jobName: FieldRef<"SyncLog", 'String'>
    readonly status: FieldRef<"SyncLog", 'String'>
    readonly billsFound: FieldRef<"SyncLog", 'Int'>
    readonly billsSynced: FieldRef<"SyncLog", 'Int'>
    readonly error: FieldRef<"SyncLog", 'String'>
    readonly startedAt: FieldRef<"SyncLog", 'DateTime'>
    readonly completedAt: FieldRef<"SyncLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncLog findUnique
   */
  export type SyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findUniqueOrThrow
   */
  export type SyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findFirst
   */
  export type SyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findFirstOrThrow
   */
  export type SyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findMany
   */
  export type SyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLogs to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog create
   */
  export type SyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data needed to create a SyncLog.
     */
    data: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
  }

  /**
   * SyncLog createMany
   */
  export type SyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncLog createManyAndReturn
   */
  export type SyncLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncLog update
   */
  export type SyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data needed to update a SyncLog.
     */
    data: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
    /**
     * Choose, which SyncLog to update.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog updateMany
   */
  export type SyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to update.
     */
    limit?: number
  }

  /**
   * SyncLog updateManyAndReturn
   */
  export type SyncLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to update.
     */
    limit?: number
  }

  /**
   * SyncLog upsert
   */
  export type SyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The filter to search for the SyncLog to update in case it exists.
     */
    where: SyncLogWhereUniqueInput
    /**
     * In case the SyncLog found by the `where` argument doesn't exist, create a new SyncLog with this data.
     */
    create: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
    /**
     * In case the SyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
  }

  /**
   * SyncLog delete
   */
  export type SyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter which SyncLog to delete.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog deleteMany
   */
  export type SyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLogs to delete
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to delete.
     */
    limit?: number
  }

  /**
   * SyncLog without action
   */
  export type SyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
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


  export const BillScalarFieldEnum: {
    id: 'id',
    parliamentId: 'parliamentId',
    shortTitle: 'shortTitle',
    longTitle: 'longTitle',
    billTypeId: 'billTypeId',
    billTypeName: 'billTypeName',
    billTypeCategory: 'billTypeCategory',
    currentHouse: 'currentHouse',
    currentStage: 'currentStage',
    originatingHouse: 'originatingHouse',
    lastUpdate: 'lastUpdate',
    isAct: 'isAct',
    isDefeated: 'isDefeated',
    billWithdrawn: 'billWithdrawn',
    sessionId: 'sessionId',
    sessionName: 'sessionName',
    policyTopics: 'policyTopics',
    affectedGroups: 'affectedGroups',
    legislationGovUrl: 'legislationGovUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const BillStageScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    stageId: 'stageId',
    stageName: 'stageName',
    house: 'house',
    sortOrder: 'sortOrder',
    sittingDate: 'sittingDate',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type BillStageScalarFieldEnum = (typeof BillStageScalarFieldEnum)[keyof typeof BillStageScalarFieldEnum]


  export const BillSponsorScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    memberId: 'memberId',
    name: 'name',
    party: 'party',
    constituency: 'constituency',
    photoUrl: 'photoUrl',
    sortOrder: 'sortOrder'
  };

  export type BillSponsorScalarFieldEnum = (typeof BillSponsorScalarFieldEnum)[keyof typeof BillSponsorScalarFieldEnum]


  export const BillPublicationScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    publicationType: 'publicationType',
    title: 'title',
    url: 'url',
    displayDate: 'displayDate',
    createdAt: 'createdAt'
  };

  export type BillPublicationScalarFieldEnum = (typeof BillPublicationScalarFieldEnum)[keyof typeof BillPublicationScalarFieldEnum]


  export const BillSummaryScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    language: 'language',
    version: 'version',
    overview: 'overview',
    purpose: 'purpose',
    keyChanges: 'keyChanges',
    impacts: 'impacts',
    implementation: 'implementation',
    tldr: 'tldr',
    modelUsed: 'modelUsed',
    tokensUsed: 'tokensUsed',
    generatedAt: 'generatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillSummaryScalarFieldEnum = (typeof BillSummaryScalarFieldEnum)[keyof typeof BillSummaryScalarFieldEnum]


  export const DeviceProfileScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    preferredLang: 'preferredLang',
    theme: 'theme',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceProfileScalarFieldEnum = (typeof DeviceProfileScalarFieldEnum)[keyof typeof DeviceProfileScalarFieldEnum]


  export const TrackedBillScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    billId: 'billId',
    notifyStageChange: 'notifyStageChange',
    notifyRoyalAssent: 'notifyRoyalAssent',
    notifyNewAmendment: 'notifyNewAmendment',
    createdAt: 'createdAt'
  };

  export type TrackedBillScalarFieldEnum = (typeof TrackedBillScalarFieldEnum)[keyof typeof TrackedBillScalarFieldEnum]


  export const PushSubscriptionScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    endpoint: 'endpoint',
    p256dh: 'p256dh',
    auth: 'auth',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PushSubscriptionScalarFieldEnum = (typeof PushSubscriptionScalarFieldEnum)[keyof typeof PushSubscriptionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    type: 'type',
    title: 'title',
    body: 'body',
    data: 'data',
    sentAt: 'sentAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SyncLogScalarFieldEnum: {
    id: 'id',
    jobName: 'jobName',
    status: 'status',
    billsFound: 'billsFound',
    billsSynced: 'billsSynced',
    error: 'error',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type SyncLogScalarFieldEnum = (typeof SyncLogScalarFieldEnum)[keyof typeof SyncLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


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


  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: StringFilter<"Bill"> | string
    parliamentId?: IntFilter<"Bill"> | number
    shortTitle?: StringFilter<"Bill"> | string
    longTitle?: StringFilter<"Bill"> | string
    billTypeId?: IntNullableFilter<"Bill"> | number | null
    billTypeName?: StringNullableFilter<"Bill"> | string | null
    billTypeCategory?: StringNullableFilter<"Bill"> | string | null
    currentHouse?: StringNullableFilter<"Bill"> | string | null
    currentStage?: StringNullableFilter<"Bill"> | string | null
    originatingHouse?: StringNullableFilter<"Bill"> | string | null
    lastUpdate?: DateTimeNullableFilter<"Bill"> | Date | string | null
    isAct?: BoolFilter<"Bill"> | boolean
    isDefeated?: BoolFilter<"Bill"> | boolean
    billWithdrawn?: DateTimeNullableFilter<"Bill"> | Date | string | null
    sessionId?: IntNullableFilter<"Bill"> | number | null
    sessionName?: StringNullableFilter<"Bill"> | string | null
    policyTopics?: StringNullableListFilter<"Bill">
    affectedGroups?: StringNullableListFilter<"Bill">
    legislationGovUrl?: StringNullableFilter<"Bill"> | string | null
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    stages?: BillStageListRelationFilter
    sponsors?: BillSponsorListRelationFilter
    publications?: BillPublicationListRelationFilter
    summaries?: BillSummaryListRelationFilter
    trackedBills?: TrackedBillListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    parliamentId?: SortOrder
    shortTitle?: SortOrder
    longTitle?: SortOrder
    billTypeId?: SortOrderInput | SortOrder
    billTypeName?: SortOrderInput | SortOrder
    billTypeCategory?: SortOrderInput | SortOrder
    currentHouse?: SortOrderInput | SortOrder
    currentStage?: SortOrderInput | SortOrder
    originatingHouse?: SortOrderInput | SortOrder
    lastUpdate?: SortOrderInput | SortOrder
    isAct?: SortOrder
    isDefeated?: SortOrder
    billWithdrawn?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    sessionName?: SortOrderInput | SortOrder
    policyTopics?: SortOrder
    affectedGroups?: SortOrder
    legislationGovUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stages?: BillStageOrderByRelationAggregateInput
    sponsors?: BillSponsorOrderByRelationAggregateInput
    publications?: BillPublicationOrderByRelationAggregateInput
    summaries?: BillSummaryOrderByRelationAggregateInput
    trackedBills?: TrackedBillOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    parliamentId?: number
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    shortTitle?: StringFilter<"Bill"> | string
    longTitle?: StringFilter<"Bill"> | string
    billTypeId?: IntNullableFilter<"Bill"> | number | null
    billTypeName?: StringNullableFilter<"Bill"> | string | null
    billTypeCategory?: StringNullableFilter<"Bill"> | string | null
    currentHouse?: StringNullableFilter<"Bill"> | string | null
    currentStage?: StringNullableFilter<"Bill"> | string | null
    originatingHouse?: StringNullableFilter<"Bill"> | string | null
    lastUpdate?: DateTimeNullableFilter<"Bill"> | Date | string | null
    isAct?: BoolFilter<"Bill"> | boolean
    isDefeated?: BoolFilter<"Bill"> | boolean
    billWithdrawn?: DateTimeNullableFilter<"Bill"> | Date | string | null
    sessionId?: IntNullableFilter<"Bill"> | number | null
    sessionName?: StringNullableFilter<"Bill"> | string | null
    policyTopics?: StringNullableListFilter<"Bill">
    affectedGroups?: StringNullableListFilter<"Bill">
    legislationGovUrl?: StringNullableFilter<"Bill"> | string | null
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    stages?: BillStageListRelationFilter
    sponsors?: BillSponsorListRelationFilter
    publications?: BillPublicationListRelationFilter
    summaries?: BillSummaryListRelationFilter
    trackedBills?: TrackedBillListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "parliamentId">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    parliamentId?: SortOrder
    shortTitle?: SortOrder
    longTitle?: SortOrder
    billTypeId?: SortOrderInput | SortOrder
    billTypeName?: SortOrderInput | SortOrder
    billTypeCategory?: SortOrderInput | SortOrder
    currentHouse?: SortOrderInput | SortOrder
    currentStage?: SortOrderInput | SortOrder
    originatingHouse?: SortOrderInput | SortOrder
    lastUpdate?: SortOrderInput | SortOrder
    isAct?: SortOrder
    isDefeated?: SortOrder
    billWithdrawn?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    sessionName?: SortOrderInput | SortOrder
    policyTopics?: SortOrder
    affectedGroups?: SortOrder
    legislationGovUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bill"> | string
    parliamentId?: IntWithAggregatesFilter<"Bill"> | number
    shortTitle?: StringWithAggregatesFilter<"Bill"> | string
    longTitle?: StringWithAggregatesFilter<"Bill"> | string
    billTypeId?: IntNullableWithAggregatesFilter<"Bill"> | number | null
    billTypeName?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    billTypeCategory?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    currentHouse?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    currentStage?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    originatingHouse?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    lastUpdate?: DateTimeNullableWithAggregatesFilter<"Bill"> | Date | string | null
    isAct?: BoolWithAggregatesFilter<"Bill"> | boolean
    isDefeated?: BoolWithAggregatesFilter<"Bill"> | boolean
    billWithdrawn?: DateTimeNullableWithAggregatesFilter<"Bill"> | Date | string | null
    sessionId?: IntNullableWithAggregatesFilter<"Bill"> | number | null
    sessionName?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    policyTopics?: StringNullableListFilter<"Bill">
    affectedGroups?: StringNullableListFilter<"Bill">
    legislationGovUrl?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
  }

  export type BillStageWhereInput = {
    AND?: BillStageWhereInput | BillStageWhereInput[]
    OR?: BillStageWhereInput[]
    NOT?: BillStageWhereInput | BillStageWhereInput[]
    id?: StringFilter<"BillStage"> | string
    billId?: StringFilter<"BillStage"> | string
    stageId?: IntFilter<"BillStage"> | number
    stageName?: StringFilter<"BillStage"> | string
    house?: StringFilter<"BillStage"> | string
    sortOrder?: IntFilter<"BillStage"> | number
    sittingDate?: DateTimeNullableFilter<"BillStage"> | Date | string | null
    description?: StringNullableFilter<"BillStage"> | string | null
    createdAt?: DateTimeFilter<"BillStage"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type BillStageOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    stageId?: SortOrder
    stageName?: SortOrder
    house?: SortOrder
    sortOrder?: SortOrder
    sittingDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type BillStageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    billId_stageId?: BillStageBillIdStageIdCompoundUniqueInput
    AND?: BillStageWhereInput | BillStageWhereInput[]
    OR?: BillStageWhereInput[]
    NOT?: BillStageWhereInput | BillStageWhereInput[]
    billId?: StringFilter<"BillStage"> | string
    stageId?: IntFilter<"BillStage"> | number
    stageName?: StringFilter<"BillStage"> | string
    house?: StringFilter<"BillStage"> | string
    sortOrder?: IntFilter<"BillStage"> | number
    sittingDate?: DateTimeNullableFilter<"BillStage"> | Date | string | null
    description?: StringNullableFilter<"BillStage"> | string | null
    createdAt?: DateTimeFilter<"BillStage"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id" | "billId_stageId">

  export type BillStageOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    stageId?: SortOrder
    stageName?: SortOrder
    house?: SortOrder
    sortOrder?: SortOrder
    sittingDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BillStageCountOrderByAggregateInput
    _avg?: BillStageAvgOrderByAggregateInput
    _max?: BillStageMaxOrderByAggregateInput
    _min?: BillStageMinOrderByAggregateInput
    _sum?: BillStageSumOrderByAggregateInput
  }

  export type BillStageScalarWhereWithAggregatesInput = {
    AND?: BillStageScalarWhereWithAggregatesInput | BillStageScalarWhereWithAggregatesInput[]
    OR?: BillStageScalarWhereWithAggregatesInput[]
    NOT?: BillStageScalarWhereWithAggregatesInput | BillStageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillStage"> | string
    billId?: StringWithAggregatesFilter<"BillStage"> | string
    stageId?: IntWithAggregatesFilter<"BillStage"> | number
    stageName?: StringWithAggregatesFilter<"BillStage"> | string
    house?: StringWithAggregatesFilter<"BillStage"> | string
    sortOrder?: IntWithAggregatesFilter<"BillStage"> | number
    sittingDate?: DateTimeNullableWithAggregatesFilter<"BillStage"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"BillStage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BillStage"> | Date | string
  }

  export type BillSponsorWhereInput = {
    AND?: BillSponsorWhereInput | BillSponsorWhereInput[]
    OR?: BillSponsorWhereInput[]
    NOT?: BillSponsorWhereInput | BillSponsorWhereInput[]
    id?: StringFilter<"BillSponsor"> | string
    billId?: StringFilter<"BillSponsor"> | string
    memberId?: IntNullableFilter<"BillSponsor"> | number | null
    name?: StringFilter<"BillSponsor"> | string
    party?: StringNullableFilter<"BillSponsor"> | string | null
    constituency?: StringNullableFilter<"BillSponsor"> | string | null
    photoUrl?: StringNullableFilter<"BillSponsor"> | string | null
    sortOrder?: IntFilter<"BillSponsor"> | number
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type BillSponsorOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    memberId?: SortOrderInput | SortOrder
    name?: SortOrder
    party?: SortOrderInput | SortOrder
    constituency?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type BillSponsorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillSponsorWhereInput | BillSponsorWhereInput[]
    OR?: BillSponsorWhereInput[]
    NOT?: BillSponsorWhereInput | BillSponsorWhereInput[]
    billId?: StringFilter<"BillSponsor"> | string
    memberId?: IntNullableFilter<"BillSponsor"> | number | null
    name?: StringFilter<"BillSponsor"> | string
    party?: StringNullableFilter<"BillSponsor"> | string | null
    constituency?: StringNullableFilter<"BillSponsor"> | string | null
    photoUrl?: StringNullableFilter<"BillSponsor"> | string | null
    sortOrder?: IntFilter<"BillSponsor"> | number
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id">

  export type BillSponsorOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    memberId?: SortOrderInput | SortOrder
    name?: SortOrder
    party?: SortOrderInput | SortOrder
    constituency?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    _count?: BillSponsorCountOrderByAggregateInput
    _avg?: BillSponsorAvgOrderByAggregateInput
    _max?: BillSponsorMaxOrderByAggregateInput
    _min?: BillSponsorMinOrderByAggregateInput
    _sum?: BillSponsorSumOrderByAggregateInput
  }

  export type BillSponsorScalarWhereWithAggregatesInput = {
    AND?: BillSponsorScalarWhereWithAggregatesInput | BillSponsorScalarWhereWithAggregatesInput[]
    OR?: BillSponsorScalarWhereWithAggregatesInput[]
    NOT?: BillSponsorScalarWhereWithAggregatesInput | BillSponsorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillSponsor"> | string
    billId?: StringWithAggregatesFilter<"BillSponsor"> | string
    memberId?: IntNullableWithAggregatesFilter<"BillSponsor"> | number | null
    name?: StringWithAggregatesFilter<"BillSponsor"> | string
    party?: StringNullableWithAggregatesFilter<"BillSponsor"> | string | null
    constituency?: StringNullableWithAggregatesFilter<"BillSponsor"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"BillSponsor"> | string | null
    sortOrder?: IntWithAggregatesFilter<"BillSponsor"> | number
  }

  export type BillPublicationWhereInput = {
    AND?: BillPublicationWhereInput | BillPublicationWhereInput[]
    OR?: BillPublicationWhereInput[]
    NOT?: BillPublicationWhereInput | BillPublicationWhereInput[]
    id?: StringFilter<"BillPublication"> | string
    billId?: StringFilter<"BillPublication"> | string
    publicationType?: StringFilter<"BillPublication"> | string
    title?: StringFilter<"BillPublication"> | string
    url?: StringFilter<"BillPublication"> | string
    displayDate?: DateTimeNullableFilter<"BillPublication"> | Date | string | null
    createdAt?: DateTimeFilter<"BillPublication"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type BillPublicationOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    publicationType?: SortOrder
    title?: SortOrder
    url?: SortOrder
    displayDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type BillPublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillPublicationWhereInput | BillPublicationWhereInput[]
    OR?: BillPublicationWhereInput[]
    NOT?: BillPublicationWhereInput | BillPublicationWhereInput[]
    billId?: StringFilter<"BillPublication"> | string
    publicationType?: StringFilter<"BillPublication"> | string
    title?: StringFilter<"BillPublication"> | string
    url?: StringFilter<"BillPublication"> | string
    displayDate?: DateTimeNullableFilter<"BillPublication"> | Date | string | null
    createdAt?: DateTimeFilter<"BillPublication"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id">

  export type BillPublicationOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    publicationType?: SortOrder
    title?: SortOrder
    url?: SortOrder
    displayDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BillPublicationCountOrderByAggregateInput
    _max?: BillPublicationMaxOrderByAggregateInput
    _min?: BillPublicationMinOrderByAggregateInput
  }

  export type BillPublicationScalarWhereWithAggregatesInput = {
    AND?: BillPublicationScalarWhereWithAggregatesInput | BillPublicationScalarWhereWithAggregatesInput[]
    OR?: BillPublicationScalarWhereWithAggregatesInput[]
    NOT?: BillPublicationScalarWhereWithAggregatesInput | BillPublicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillPublication"> | string
    billId?: StringWithAggregatesFilter<"BillPublication"> | string
    publicationType?: StringWithAggregatesFilter<"BillPublication"> | string
    title?: StringWithAggregatesFilter<"BillPublication"> | string
    url?: StringWithAggregatesFilter<"BillPublication"> | string
    displayDate?: DateTimeNullableWithAggregatesFilter<"BillPublication"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BillPublication"> | Date | string
  }

  export type BillSummaryWhereInput = {
    AND?: BillSummaryWhereInput | BillSummaryWhereInput[]
    OR?: BillSummaryWhereInput[]
    NOT?: BillSummaryWhereInput | BillSummaryWhereInput[]
    id?: StringFilter<"BillSummary"> | string
    billId?: StringFilter<"BillSummary"> | string
    language?: StringFilter<"BillSummary"> | string
    version?: IntFilter<"BillSummary"> | number
    overview?: StringFilter<"BillSummary"> | string
    purpose?: StringFilter<"BillSummary"> | string
    keyChanges?: JsonFilter<"BillSummary">
    impacts?: JsonFilter<"BillSummary">
    implementation?: StringNullableFilter<"BillSummary"> | string | null
    tldr?: StringFilter<"BillSummary"> | string
    modelUsed?: StringFilter<"BillSummary"> | string
    tokensUsed?: IntNullableFilter<"BillSummary"> | number | null
    generatedAt?: DateTimeFilter<"BillSummary"> | Date | string
    createdAt?: DateTimeFilter<"BillSummary"> | Date | string
    updatedAt?: DateTimeFilter<"BillSummary"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type BillSummaryOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    language?: SortOrder
    version?: SortOrder
    overview?: SortOrder
    purpose?: SortOrder
    keyChanges?: SortOrder
    impacts?: SortOrder
    implementation?: SortOrderInput | SortOrder
    tldr?: SortOrder
    modelUsed?: SortOrder
    tokensUsed?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type BillSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    billId_language_version?: BillSummaryBillIdLanguageVersionCompoundUniqueInput
    AND?: BillSummaryWhereInput | BillSummaryWhereInput[]
    OR?: BillSummaryWhereInput[]
    NOT?: BillSummaryWhereInput | BillSummaryWhereInput[]
    billId?: StringFilter<"BillSummary"> | string
    language?: StringFilter<"BillSummary"> | string
    version?: IntFilter<"BillSummary"> | number
    overview?: StringFilter<"BillSummary"> | string
    purpose?: StringFilter<"BillSummary"> | string
    keyChanges?: JsonFilter<"BillSummary">
    impacts?: JsonFilter<"BillSummary">
    implementation?: StringNullableFilter<"BillSummary"> | string | null
    tldr?: StringFilter<"BillSummary"> | string
    modelUsed?: StringFilter<"BillSummary"> | string
    tokensUsed?: IntNullableFilter<"BillSummary"> | number | null
    generatedAt?: DateTimeFilter<"BillSummary"> | Date | string
    createdAt?: DateTimeFilter<"BillSummary"> | Date | string
    updatedAt?: DateTimeFilter<"BillSummary"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id" | "billId_language_version">

  export type BillSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    language?: SortOrder
    version?: SortOrder
    overview?: SortOrder
    purpose?: SortOrder
    keyChanges?: SortOrder
    impacts?: SortOrder
    implementation?: SortOrderInput | SortOrder
    tldr?: SortOrder
    modelUsed?: SortOrder
    tokensUsed?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillSummaryCountOrderByAggregateInput
    _avg?: BillSummaryAvgOrderByAggregateInput
    _max?: BillSummaryMaxOrderByAggregateInput
    _min?: BillSummaryMinOrderByAggregateInput
    _sum?: BillSummarySumOrderByAggregateInput
  }

  export type BillSummaryScalarWhereWithAggregatesInput = {
    AND?: BillSummaryScalarWhereWithAggregatesInput | BillSummaryScalarWhereWithAggregatesInput[]
    OR?: BillSummaryScalarWhereWithAggregatesInput[]
    NOT?: BillSummaryScalarWhereWithAggregatesInput | BillSummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillSummary"> | string
    billId?: StringWithAggregatesFilter<"BillSummary"> | string
    language?: StringWithAggregatesFilter<"BillSummary"> | string
    version?: IntWithAggregatesFilter<"BillSummary"> | number
    overview?: StringWithAggregatesFilter<"BillSummary"> | string
    purpose?: StringWithAggregatesFilter<"BillSummary"> | string
    keyChanges?: JsonWithAggregatesFilter<"BillSummary">
    impacts?: JsonWithAggregatesFilter<"BillSummary">
    implementation?: StringNullableWithAggregatesFilter<"BillSummary"> | string | null
    tldr?: StringWithAggregatesFilter<"BillSummary"> | string
    modelUsed?: StringWithAggregatesFilter<"BillSummary"> | string
    tokensUsed?: IntNullableWithAggregatesFilter<"BillSummary"> | number | null
    generatedAt?: DateTimeWithAggregatesFilter<"BillSummary"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"BillSummary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BillSummary"> | Date | string
  }

  export type DeviceProfileWhereInput = {
    AND?: DeviceProfileWhereInput | DeviceProfileWhereInput[]
    OR?: DeviceProfileWhereInput[]
    NOT?: DeviceProfileWhereInput | DeviceProfileWhereInput[]
    id?: StringFilter<"DeviceProfile"> | string
    deviceId?: StringFilter<"DeviceProfile"> | string
    preferredLang?: StringFilter<"DeviceProfile"> | string
    theme?: StringFilter<"DeviceProfile"> | string
    createdAt?: DateTimeFilter<"DeviceProfile"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceProfile"> | Date | string
    trackedBills?: TrackedBillListRelationFilter
    pushSubscriptions?: PushSubscriptionListRelationFilter
  }

  export type DeviceProfileOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    preferredLang?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trackedBills?: TrackedBillOrderByRelationAggregateInput
    pushSubscriptions?: PushSubscriptionOrderByRelationAggregateInput
  }

  export type DeviceProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceId?: string
    AND?: DeviceProfileWhereInput | DeviceProfileWhereInput[]
    OR?: DeviceProfileWhereInput[]
    NOT?: DeviceProfileWhereInput | DeviceProfileWhereInput[]
    preferredLang?: StringFilter<"DeviceProfile"> | string
    theme?: StringFilter<"DeviceProfile"> | string
    createdAt?: DateTimeFilter<"DeviceProfile"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceProfile"> | Date | string
    trackedBills?: TrackedBillListRelationFilter
    pushSubscriptions?: PushSubscriptionListRelationFilter
  }, "id" | "deviceId">

  export type DeviceProfileOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    preferredLang?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceProfileCountOrderByAggregateInput
    _max?: DeviceProfileMaxOrderByAggregateInput
    _min?: DeviceProfileMinOrderByAggregateInput
  }

  export type DeviceProfileScalarWhereWithAggregatesInput = {
    AND?: DeviceProfileScalarWhereWithAggregatesInput | DeviceProfileScalarWhereWithAggregatesInput[]
    OR?: DeviceProfileScalarWhereWithAggregatesInput[]
    NOT?: DeviceProfileScalarWhereWithAggregatesInput | DeviceProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceProfile"> | string
    deviceId?: StringWithAggregatesFilter<"DeviceProfile"> | string
    preferredLang?: StringWithAggregatesFilter<"DeviceProfile"> | string
    theme?: StringWithAggregatesFilter<"DeviceProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DeviceProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeviceProfile"> | Date | string
  }

  export type TrackedBillWhereInput = {
    AND?: TrackedBillWhereInput | TrackedBillWhereInput[]
    OR?: TrackedBillWhereInput[]
    NOT?: TrackedBillWhereInput | TrackedBillWhereInput[]
    id?: StringFilter<"TrackedBill"> | string
    deviceId?: StringFilter<"TrackedBill"> | string
    billId?: StringFilter<"TrackedBill"> | string
    notifyStageChange?: BoolFilter<"TrackedBill"> | boolean
    notifyRoyalAssent?: BoolFilter<"TrackedBill"> | boolean
    notifyNewAmendment?: BoolFilter<"TrackedBill"> | boolean
    createdAt?: DateTimeFilter<"TrackedBill"> | Date | string
    device?: XOR<DeviceProfileScalarRelationFilter, DeviceProfileWhereInput>
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type TrackedBillOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    billId?: SortOrder
    notifyStageChange?: SortOrder
    notifyRoyalAssent?: SortOrder
    notifyNewAmendment?: SortOrder
    createdAt?: SortOrder
    device?: DeviceProfileOrderByWithRelationInput
    bill?: BillOrderByWithRelationInput
  }

  export type TrackedBillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceId_billId?: TrackedBillDeviceIdBillIdCompoundUniqueInput
    AND?: TrackedBillWhereInput | TrackedBillWhereInput[]
    OR?: TrackedBillWhereInput[]
    NOT?: TrackedBillWhereInput | TrackedBillWhereInput[]
    deviceId?: StringFilter<"TrackedBill"> | string
    billId?: StringFilter<"TrackedBill"> | string
    notifyStageChange?: BoolFilter<"TrackedBill"> | boolean
    notifyRoyalAssent?: BoolFilter<"TrackedBill"> | boolean
    notifyNewAmendment?: BoolFilter<"TrackedBill"> | boolean
    createdAt?: DateTimeFilter<"TrackedBill"> | Date | string
    device?: XOR<DeviceProfileScalarRelationFilter, DeviceProfileWhereInput>
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id" | "deviceId_billId">

  export type TrackedBillOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    billId?: SortOrder
    notifyStageChange?: SortOrder
    notifyRoyalAssent?: SortOrder
    notifyNewAmendment?: SortOrder
    createdAt?: SortOrder
    _count?: TrackedBillCountOrderByAggregateInput
    _max?: TrackedBillMaxOrderByAggregateInput
    _min?: TrackedBillMinOrderByAggregateInput
  }

  export type TrackedBillScalarWhereWithAggregatesInput = {
    AND?: TrackedBillScalarWhereWithAggregatesInput | TrackedBillScalarWhereWithAggregatesInput[]
    OR?: TrackedBillScalarWhereWithAggregatesInput[]
    NOT?: TrackedBillScalarWhereWithAggregatesInput | TrackedBillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackedBill"> | string
    deviceId?: StringWithAggregatesFilter<"TrackedBill"> | string
    billId?: StringWithAggregatesFilter<"TrackedBill"> | string
    notifyStageChange?: BoolWithAggregatesFilter<"TrackedBill"> | boolean
    notifyRoyalAssent?: BoolWithAggregatesFilter<"TrackedBill"> | boolean
    notifyNewAmendment?: BoolWithAggregatesFilter<"TrackedBill"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TrackedBill"> | Date | string
  }

  export type PushSubscriptionWhereInput = {
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    id?: StringFilter<"PushSubscription"> | string
    deviceId?: StringFilter<"PushSubscription"> | string
    endpoint?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PushSubscription"> | Date | string
    device?: XOR<DeviceProfileScalarRelationFilter, DeviceProfileWhereInput>
  }

  export type PushSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    device?: DeviceProfileOrderByWithRelationInput
  }

  export type PushSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    endpoint?: string
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    deviceId?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PushSubscription"> | Date | string
    device?: XOR<DeviceProfileScalarRelationFilter, DeviceProfileWhereInput>
  }, "id" | "endpoint">

  export type PushSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PushSubscriptionCountOrderByAggregateInput
    _max?: PushSubscriptionMaxOrderByAggregateInput
    _min?: PushSubscriptionMinOrderByAggregateInput
  }

  export type PushSubscriptionScalarWhereWithAggregatesInput = {
    AND?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    OR?: PushSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PushSubscription"> | string
    deviceId?: StringWithAggregatesFilter<"PushSubscription"> | string
    endpoint?: StringWithAggregatesFilter<"PushSubscription"> | string
    p256dh?: StringWithAggregatesFilter<"PushSubscription"> | string
    auth?: StringWithAggregatesFilter<"PushSubscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PushSubscription"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    billId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    billId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    billId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    data?: JsonNullableWithAggregatesFilter<"Notification">
    sentAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type SyncLogWhereInput = {
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    id?: StringFilter<"SyncLog"> | string
    jobName?: StringFilter<"SyncLog"> | string
    status?: StringFilter<"SyncLog"> | string
    billsFound?: IntNullableFilter<"SyncLog"> | number | null
    billsSynced?: IntNullableFilter<"SyncLog"> | number | null
    error?: StringNullableFilter<"SyncLog"> | string | null
    startedAt?: DateTimeFilter<"SyncLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"SyncLog"> | Date | string | null
  }

  export type SyncLogOrderByWithRelationInput = {
    id?: SortOrder
    jobName?: SortOrder
    status?: SortOrder
    billsFound?: SortOrderInput | SortOrder
    billsSynced?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
  }

  export type SyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    jobName?: StringFilter<"SyncLog"> | string
    status?: StringFilter<"SyncLog"> | string
    billsFound?: IntNullableFilter<"SyncLog"> | number | null
    billsSynced?: IntNullableFilter<"SyncLog"> | number | null
    error?: StringNullableFilter<"SyncLog"> | string | null
    startedAt?: DateTimeFilter<"SyncLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"SyncLog"> | Date | string | null
  }, "id">

  export type SyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    jobName?: SortOrder
    status?: SortOrder
    billsFound?: SortOrderInput | SortOrder
    billsSynced?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: SyncLogCountOrderByAggregateInput
    _avg?: SyncLogAvgOrderByAggregateInput
    _max?: SyncLogMaxOrderByAggregateInput
    _min?: SyncLogMinOrderByAggregateInput
    _sum?: SyncLogSumOrderByAggregateInput
  }

  export type SyncLogScalarWhereWithAggregatesInput = {
    AND?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    OR?: SyncLogScalarWhereWithAggregatesInput[]
    NOT?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncLog"> | string
    jobName?: StringWithAggregatesFilter<"SyncLog"> | string
    status?: StringWithAggregatesFilter<"SyncLog"> | string
    billsFound?: IntNullableWithAggregatesFilter<"SyncLog"> | number | null
    billsSynced?: IntNullableWithAggregatesFilter<"SyncLog"> | number | null
    error?: StringNullableWithAggregatesFilter<"SyncLog"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"SyncLog"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"SyncLog"> | Date | string | null
  }

  export type BillCreateInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageCreateNestedManyWithoutBillInput
    sponsors?: BillSponsorCreateNestedManyWithoutBillInput
    publications?: BillPublicationCreateNestedManyWithoutBillInput
    summaries?: BillSummaryCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillCreateNestedManyWithoutBillInput
    notifications?: NotificationCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageUncheckedCreateNestedManyWithoutBillInput
    sponsors?: BillSponsorUncheckedCreateNestedManyWithoutBillInput
    publications?: BillPublicationUncheckedCreateNestedManyWithoutBillInput
    summaries?: BillSummaryUncheckedCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillUncheckedCreateNestedManyWithoutBillInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUpdateManyWithoutBillNestedInput
    sponsors?: BillSponsorUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUpdateManyWithoutBillNestedInput
    notifications?: NotificationUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUncheckedUpdateManyWithoutBillNestedInput
    sponsors?: BillSponsorUncheckedUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUncheckedUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUncheckedUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUncheckedUpdateManyWithoutBillNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateManyInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillStageCreateInput = {
    id?: string
    stageId: number
    stageName: string
    house: string
    sortOrder?: number
    sittingDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    bill: BillCreateNestedOneWithoutStagesInput
  }

  export type BillStageUncheckedCreateInput = {
    id?: string
    billId: string
    stageId: number
    stageName: string
    house: string
    sortOrder?: number
    sittingDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type BillStageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: IntFieldUpdateOperationsInput | number
    stageName?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sittingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutStagesNestedInput
  }

  export type BillStageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    stageId?: IntFieldUpdateOperationsInput | number
    stageName?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sittingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillStageCreateManyInput = {
    id?: string
    billId: string
    stageId: number
    stageName: string
    house: string
    sortOrder?: number
    sittingDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type BillStageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: IntFieldUpdateOperationsInput | number
    stageName?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sittingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillStageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    stageId?: IntFieldUpdateOperationsInput | number
    stageName?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sittingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillSponsorCreateInput = {
    id?: string
    memberId?: number | null
    name: string
    party?: string | null
    constituency?: string | null
    photoUrl?: string | null
    sortOrder?: number
    bill: BillCreateNestedOneWithoutSponsorsInput
  }

  export type BillSponsorUncheckedCreateInput = {
    id?: string
    billId: string
    memberId?: number | null
    name: string
    party?: string | null
    constituency?: string | null
    photoUrl?: string | null
    sortOrder?: number
  }

  export type BillSponsorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    constituency?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    bill?: BillUpdateOneRequiredWithoutSponsorsNestedInput
  }

  export type BillSponsorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    constituency?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BillSponsorCreateManyInput = {
    id?: string
    billId: string
    memberId?: number | null
    name: string
    party?: string | null
    constituency?: string | null
    photoUrl?: string | null
    sortOrder?: number
  }

  export type BillSponsorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    constituency?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BillSponsorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    constituency?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BillPublicationCreateInput = {
    id?: string
    publicationType: string
    title: string
    url: string
    displayDate?: Date | string | null
    createdAt?: Date | string
    bill: BillCreateNestedOneWithoutPublicationsInput
  }

  export type BillPublicationUncheckedCreateInput = {
    id?: string
    billId: string
    publicationType: string
    title: string
    url: string
    displayDate?: Date | string | null
    createdAt?: Date | string
  }

  export type BillPublicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutPublicationsNestedInput
  }

  export type BillPublicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    publicationType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillPublicationCreateManyInput = {
    id?: string
    billId: string
    publicationType: string
    title: string
    url: string
    displayDate?: Date | string | null
    createdAt?: Date | string
  }

  export type BillPublicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillPublicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    publicationType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillSummaryCreateInput = {
    id?: string
    language?: string
    version?: number
    overview: string
    purpose: string
    keyChanges: JsonNullValueInput | InputJsonValue
    impacts: JsonNullValueInput | InputJsonValue
    implementation?: string | null
    tldr: string
    modelUsed?: string
    tokensUsed?: number | null
    generatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bill: BillCreateNestedOneWithoutSummariesInput
  }

  export type BillSummaryUncheckedCreateInput = {
    id?: string
    billId: string
    language?: string
    version?: number
    overview: string
    purpose: string
    keyChanges: JsonNullValueInput | InputJsonValue
    impacts: JsonNullValueInput | InputJsonValue
    implementation?: string | null
    tldr: string
    modelUsed?: string
    tokensUsed?: number | null
    generatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillSummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    overview?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    keyChanges?: JsonNullValueInput | InputJsonValue
    impacts?: JsonNullValueInput | InputJsonValue
    implementation?: NullableStringFieldUpdateOperationsInput | string | null
    tldr?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutSummariesNestedInput
  }

  export type BillSummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    overview?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    keyChanges?: JsonNullValueInput | InputJsonValue
    impacts?: JsonNullValueInput | InputJsonValue
    implementation?: NullableStringFieldUpdateOperationsInput | string | null
    tldr?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillSummaryCreateManyInput = {
    id?: string
    billId: string
    language?: string
    version?: number
    overview: string
    purpose: string
    keyChanges: JsonNullValueInput | InputJsonValue
    impacts: JsonNullValueInput | InputJsonValue
    implementation?: string | null
    tldr: string
    modelUsed?: string
    tokensUsed?: number | null
    generatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillSummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    overview?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    keyChanges?: JsonNullValueInput | InputJsonValue
    impacts?: JsonNullValueInput | InputJsonValue
    implementation?: NullableStringFieldUpdateOperationsInput | string | null
    tldr?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillSummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    overview?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    keyChanges?: JsonNullValueInput | InputJsonValue
    impacts?: JsonNullValueInput | InputJsonValue
    implementation?: NullableStringFieldUpdateOperationsInput | string | null
    tldr?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceProfileCreateInput = {
    id?: string
    deviceId: string
    preferredLang?: string
    theme?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackedBills?: TrackedBillCreateNestedManyWithoutDeviceInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutDeviceInput
  }

  export type DeviceProfileUncheckedCreateInput = {
    id?: string
    deviceId: string
    preferredLang?: string
    theme?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackedBills?: TrackedBillUncheckedCreateNestedManyWithoutDeviceInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackedBills?: TrackedBillUpdateManyWithoutDeviceNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackedBills?: TrackedBillUncheckedUpdateManyWithoutDeviceNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceProfileCreateManyInput = {
    id?: string
    deviceId: string
    preferredLang?: string
    theme?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedBillCreateInput = {
    id?: string
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: Date | string
    device: DeviceProfileCreateNestedOneWithoutTrackedBillsInput
    bill: BillCreateNestedOneWithoutTrackedBillsInput
  }

  export type TrackedBillUncheckedCreateInput = {
    id?: string
    deviceId: string
    billId: string
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: Date | string
  }

  export type TrackedBillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notifyStageChange?: BoolFieldUpdateOperationsInput | boolean
    notifyRoyalAssent?: BoolFieldUpdateOperationsInput | boolean
    notifyNewAmendment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceProfileUpdateOneRequiredWithoutTrackedBillsNestedInput
    bill?: BillUpdateOneRequiredWithoutTrackedBillsNestedInput
  }

  export type TrackedBillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    notifyStageChange?: BoolFieldUpdateOperationsInput | boolean
    notifyRoyalAssent?: BoolFieldUpdateOperationsInput | boolean
    notifyNewAmendment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedBillCreateManyInput = {
    id?: string
    deviceId: string
    billId: string
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: Date | string
  }

  export type TrackedBillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    notifyStageChange?: BoolFieldUpdateOperationsInput | boolean
    notifyRoyalAssent?: BoolFieldUpdateOperationsInput | boolean
    notifyNewAmendment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedBillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    notifyStageChange?: BoolFieldUpdateOperationsInput | boolean
    notifyRoyalAssent?: BoolFieldUpdateOperationsInput | boolean
    notifyNewAmendment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionCreateInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceProfileCreateNestedOneWithoutPushSubscriptionsInput
  }

  export type PushSubscriptionUncheckedCreateInput = {
    id?: string
    deviceId: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceProfileUpdateOneRequiredWithoutPushSubscriptionsNestedInput
  }

  export type PushSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionCreateManyInput = {
    id?: string
    deviceId: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string
    bill: BillCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    billId: string
    type: $Enums.NotificationType
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    billId: string
    type: $Enums.NotificationType
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogCreateInput = {
    id?: string
    jobName: string
    status: string
    billsFound?: number | null
    billsSynced?: number | null
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type SyncLogUncheckedCreateInput = {
    id?: string
    jobName: string
    status: string
    billsFound?: number | null
    billsSynced?: number | null
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type SyncLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billsFound?: NullableIntFieldUpdateOperationsInput | number | null
    billsSynced?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SyncLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billsFound?: NullableIntFieldUpdateOperationsInput | number | null
    billsSynced?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SyncLogCreateManyInput = {
    id?: string
    jobName: string
    status: string
    billsFound?: number | null
    billsSynced?: number | null
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type SyncLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billsFound?: NullableIntFieldUpdateOperationsInput | number | null
    billsSynced?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SyncLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billsFound?: NullableIntFieldUpdateOperationsInput | number | null
    billsSynced?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BillStageListRelationFilter = {
    every?: BillStageWhereInput
    some?: BillStageWhereInput
    none?: BillStageWhereInput
  }

  export type BillSponsorListRelationFilter = {
    every?: BillSponsorWhereInput
    some?: BillSponsorWhereInput
    none?: BillSponsorWhereInput
  }

  export type BillPublicationListRelationFilter = {
    every?: BillPublicationWhereInput
    some?: BillPublicationWhereInput
    none?: BillPublicationWhereInput
  }

  export type BillSummaryListRelationFilter = {
    every?: BillSummaryWhereInput
    some?: BillSummaryWhereInput
    none?: BillSummaryWhereInput
  }

  export type TrackedBillListRelationFilter = {
    every?: TrackedBillWhereInput
    some?: TrackedBillWhereInput
    none?: TrackedBillWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BillStageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillSponsorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillPublicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillSummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackedBillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    parliamentId?: SortOrder
    shortTitle?: SortOrder
    longTitle?: SortOrder
    billTypeId?: SortOrder
    billTypeName?: SortOrder
    billTypeCategory?: SortOrder
    currentHouse?: SortOrder
    currentStage?: SortOrder
    originatingHouse?: SortOrder
    lastUpdate?: SortOrder
    isAct?: SortOrder
    isDefeated?: SortOrder
    billWithdrawn?: SortOrder
    sessionId?: SortOrder
    sessionName?: SortOrder
    policyTopics?: SortOrder
    affectedGroups?: SortOrder
    legislationGovUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    parliamentId?: SortOrder
    billTypeId?: SortOrder
    sessionId?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    parliamentId?: SortOrder
    shortTitle?: SortOrder
    longTitle?: SortOrder
    billTypeId?: SortOrder
    billTypeName?: SortOrder
    billTypeCategory?: SortOrder
    currentHouse?: SortOrder
    currentStage?: SortOrder
    originatingHouse?: SortOrder
    lastUpdate?: SortOrder
    isAct?: SortOrder
    isDefeated?: SortOrder
    billWithdrawn?: SortOrder
    sessionId?: SortOrder
    sessionName?: SortOrder
    legislationGovUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    parliamentId?: SortOrder
    shortTitle?: SortOrder
    longTitle?: SortOrder
    billTypeId?: SortOrder
    billTypeName?: SortOrder
    billTypeCategory?: SortOrder
    currentHouse?: SortOrder
    currentStage?: SortOrder
    originatingHouse?: SortOrder
    lastUpdate?: SortOrder
    isAct?: SortOrder
    isDefeated?: SortOrder
    billWithdrawn?: SortOrder
    sessionId?: SortOrder
    sessionName?: SortOrder
    legislationGovUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    parliamentId?: SortOrder
    billTypeId?: SortOrder
    sessionId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BillScalarRelationFilter = {
    is?: BillWhereInput
    isNot?: BillWhereInput
  }

  export type BillStageBillIdStageIdCompoundUniqueInput = {
    billId: string
    stageId: number
  }

  export type BillStageCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    stageId?: SortOrder
    stageName?: SortOrder
    house?: SortOrder
    sortOrder?: SortOrder
    sittingDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type BillStageAvgOrderByAggregateInput = {
    stageId?: SortOrder
    sortOrder?: SortOrder
  }

  export type BillStageMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    stageId?: SortOrder
    stageName?: SortOrder
    house?: SortOrder
    sortOrder?: SortOrder
    sittingDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type BillStageMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    stageId?: SortOrder
    stageName?: SortOrder
    house?: SortOrder
    sortOrder?: SortOrder
    sittingDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type BillStageSumOrderByAggregateInput = {
    stageId?: SortOrder
    sortOrder?: SortOrder
  }

  export type BillSponsorCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    memberId?: SortOrder
    name?: SortOrder
    party?: SortOrder
    constituency?: SortOrder
    photoUrl?: SortOrder
    sortOrder?: SortOrder
  }

  export type BillSponsorAvgOrderByAggregateInput = {
    memberId?: SortOrder
    sortOrder?: SortOrder
  }

  export type BillSponsorMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    memberId?: SortOrder
    name?: SortOrder
    party?: SortOrder
    constituency?: SortOrder
    photoUrl?: SortOrder
    sortOrder?: SortOrder
  }

  export type BillSponsorMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    memberId?: SortOrder
    name?: SortOrder
    party?: SortOrder
    constituency?: SortOrder
    photoUrl?: SortOrder
    sortOrder?: SortOrder
  }

  export type BillSponsorSumOrderByAggregateInput = {
    memberId?: SortOrder
    sortOrder?: SortOrder
  }

  export type BillPublicationCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    publicationType?: SortOrder
    title?: SortOrder
    url?: SortOrder
    displayDate?: SortOrder
    createdAt?: SortOrder
  }

  export type BillPublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    publicationType?: SortOrder
    title?: SortOrder
    url?: SortOrder
    displayDate?: SortOrder
    createdAt?: SortOrder
  }

  export type BillPublicationMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    publicationType?: SortOrder
    title?: SortOrder
    url?: SortOrder
    displayDate?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BillSummaryBillIdLanguageVersionCompoundUniqueInput = {
    billId: string
    language: string
    version: number
  }

  export type BillSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    language?: SortOrder
    version?: SortOrder
    overview?: SortOrder
    purpose?: SortOrder
    keyChanges?: SortOrder
    impacts?: SortOrder
    implementation?: SortOrder
    tldr?: SortOrder
    modelUsed?: SortOrder
    tokensUsed?: SortOrder
    generatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillSummaryAvgOrderByAggregateInput = {
    version?: SortOrder
    tokensUsed?: SortOrder
  }

  export type BillSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    language?: SortOrder
    version?: SortOrder
    overview?: SortOrder
    purpose?: SortOrder
    implementation?: SortOrder
    tldr?: SortOrder
    modelUsed?: SortOrder
    tokensUsed?: SortOrder
    generatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    language?: SortOrder
    version?: SortOrder
    overview?: SortOrder
    purpose?: SortOrder
    implementation?: SortOrder
    tldr?: SortOrder
    modelUsed?: SortOrder
    tokensUsed?: SortOrder
    generatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillSummarySumOrderByAggregateInput = {
    version?: SortOrder
    tokensUsed?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PushSubscriptionListRelationFilter = {
    every?: PushSubscriptionWhereInput
    some?: PushSubscriptionWhereInput
    none?: PushSubscriptionWhereInput
  }

  export type PushSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceProfileCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    preferredLang?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    preferredLang?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceProfileMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    preferredLang?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceProfileScalarRelationFilter = {
    is?: DeviceProfileWhereInput
    isNot?: DeviceProfileWhereInput
  }

  export type TrackedBillDeviceIdBillIdCompoundUniqueInput = {
    deviceId: string
    billId: string
  }

  export type TrackedBillCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    billId?: SortOrder
    notifyStageChange?: SortOrder
    notifyRoyalAssent?: SortOrder
    notifyNewAmendment?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackedBillMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    billId?: SortOrder
    notifyStageChange?: SortOrder
    notifyRoyalAssent?: SortOrder
    notifyNewAmendment?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackedBillMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    billId?: SortOrder
    notifyStageChange?: SortOrder
    notifyRoyalAssent?: SortOrder
    notifyNewAmendment?: SortOrder
    createdAt?: SortOrder
  }

  export type PushSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PushSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PushSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrder
    sentAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    sentAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    sentAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    jobName?: SortOrder
    status?: SortOrder
    billsFound?: SortOrder
    billsSynced?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type SyncLogAvgOrderByAggregateInput = {
    billsFound?: SortOrder
    billsSynced?: SortOrder
  }

  export type SyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    jobName?: SortOrder
    status?: SortOrder
    billsFound?: SortOrder
    billsSynced?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type SyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    jobName?: SortOrder
    status?: SortOrder
    billsFound?: SortOrder
    billsSynced?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type SyncLogSumOrderByAggregateInput = {
    billsFound?: SortOrder
    billsSynced?: SortOrder
  }

  export type BillCreatepolicyTopicsInput = {
    set: string[]
  }

  export type BillCreateaffectedGroupsInput = {
    set: string[]
  }

  export type BillStageCreateNestedManyWithoutBillInput = {
    create?: XOR<BillStageCreateWithoutBillInput, BillStageUncheckedCreateWithoutBillInput> | BillStageCreateWithoutBillInput[] | BillStageUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillStageCreateOrConnectWithoutBillInput | BillStageCreateOrConnectWithoutBillInput[]
    createMany?: BillStageCreateManyBillInputEnvelope
    connect?: BillStageWhereUniqueInput | BillStageWhereUniqueInput[]
  }

  export type BillSponsorCreateNestedManyWithoutBillInput = {
    create?: XOR<BillSponsorCreateWithoutBillInput, BillSponsorUncheckedCreateWithoutBillInput> | BillSponsorCreateWithoutBillInput[] | BillSponsorUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillSponsorCreateOrConnectWithoutBillInput | BillSponsorCreateOrConnectWithoutBillInput[]
    createMany?: BillSponsorCreateManyBillInputEnvelope
    connect?: BillSponsorWhereUniqueInput | BillSponsorWhereUniqueInput[]
  }

  export type BillPublicationCreateNestedManyWithoutBillInput = {
    create?: XOR<BillPublicationCreateWithoutBillInput, BillPublicationUncheckedCreateWithoutBillInput> | BillPublicationCreateWithoutBillInput[] | BillPublicationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillPublicationCreateOrConnectWithoutBillInput | BillPublicationCreateOrConnectWithoutBillInput[]
    createMany?: BillPublicationCreateManyBillInputEnvelope
    connect?: BillPublicationWhereUniqueInput | BillPublicationWhereUniqueInput[]
  }

  export type BillSummaryCreateNestedManyWithoutBillInput = {
    create?: XOR<BillSummaryCreateWithoutBillInput, BillSummaryUncheckedCreateWithoutBillInput> | BillSummaryCreateWithoutBillInput[] | BillSummaryUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillSummaryCreateOrConnectWithoutBillInput | BillSummaryCreateOrConnectWithoutBillInput[]
    createMany?: BillSummaryCreateManyBillInputEnvelope
    connect?: BillSummaryWhereUniqueInput | BillSummaryWhereUniqueInput[]
  }

  export type TrackedBillCreateNestedManyWithoutBillInput = {
    create?: XOR<TrackedBillCreateWithoutBillInput, TrackedBillUncheckedCreateWithoutBillInput> | TrackedBillCreateWithoutBillInput[] | TrackedBillUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TrackedBillCreateOrConnectWithoutBillInput | TrackedBillCreateOrConnectWithoutBillInput[]
    createMany?: TrackedBillCreateManyBillInputEnvelope
    connect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutBillInput = {
    create?: XOR<NotificationCreateWithoutBillInput, NotificationUncheckedCreateWithoutBillInput> | NotificationCreateWithoutBillInput[] | NotificationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBillInput | NotificationCreateOrConnectWithoutBillInput[]
    createMany?: NotificationCreateManyBillInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BillStageUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<BillStageCreateWithoutBillInput, BillStageUncheckedCreateWithoutBillInput> | BillStageCreateWithoutBillInput[] | BillStageUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillStageCreateOrConnectWithoutBillInput | BillStageCreateOrConnectWithoutBillInput[]
    createMany?: BillStageCreateManyBillInputEnvelope
    connect?: BillStageWhereUniqueInput | BillStageWhereUniqueInput[]
  }

  export type BillSponsorUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<BillSponsorCreateWithoutBillInput, BillSponsorUncheckedCreateWithoutBillInput> | BillSponsorCreateWithoutBillInput[] | BillSponsorUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillSponsorCreateOrConnectWithoutBillInput | BillSponsorCreateOrConnectWithoutBillInput[]
    createMany?: BillSponsorCreateManyBillInputEnvelope
    connect?: BillSponsorWhereUniqueInput | BillSponsorWhereUniqueInput[]
  }

  export type BillPublicationUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<BillPublicationCreateWithoutBillInput, BillPublicationUncheckedCreateWithoutBillInput> | BillPublicationCreateWithoutBillInput[] | BillPublicationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillPublicationCreateOrConnectWithoutBillInput | BillPublicationCreateOrConnectWithoutBillInput[]
    createMany?: BillPublicationCreateManyBillInputEnvelope
    connect?: BillPublicationWhereUniqueInput | BillPublicationWhereUniqueInput[]
  }

  export type BillSummaryUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<BillSummaryCreateWithoutBillInput, BillSummaryUncheckedCreateWithoutBillInput> | BillSummaryCreateWithoutBillInput[] | BillSummaryUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillSummaryCreateOrConnectWithoutBillInput | BillSummaryCreateOrConnectWithoutBillInput[]
    createMany?: BillSummaryCreateManyBillInputEnvelope
    connect?: BillSummaryWhereUniqueInput | BillSummaryWhereUniqueInput[]
  }

  export type TrackedBillUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<TrackedBillCreateWithoutBillInput, TrackedBillUncheckedCreateWithoutBillInput> | TrackedBillCreateWithoutBillInput[] | TrackedBillUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TrackedBillCreateOrConnectWithoutBillInput | TrackedBillCreateOrConnectWithoutBillInput[]
    createMany?: TrackedBillCreateManyBillInputEnvelope
    connect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<NotificationCreateWithoutBillInput, NotificationUncheckedCreateWithoutBillInput> | NotificationCreateWithoutBillInput[] | NotificationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBillInput | NotificationCreateOrConnectWithoutBillInput[]
    createMany?: NotificationCreateManyBillInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BillUpdatepolicyTopicsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BillUpdateaffectedGroupsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BillStageUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillStageCreateWithoutBillInput, BillStageUncheckedCreateWithoutBillInput> | BillStageCreateWithoutBillInput[] | BillStageUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillStageCreateOrConnectWithoutBillInput | BillStageCreateOrConnectWithoutBillInput[]
    upsert?: BillStageUpsertWithWhereUniqueWithoutBillInput | BillStageUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillStageCreateManyBillInputEnvelope
    set?: BillStageWhereUniqueInput | BillStageWhereUniqueInput[]
    disconnect?: BillStageWhereUniqueInput | BillStageWhereUniqueInput[]
    delete?: BillStageWhereUniqueInput | BillStageWhereUniqueInput[]
    connect?: BillStageWhereUniqueInput | BillStageWhereUniqueInput[]
    update?: BillStageUpdateWithWhereUniqueWithoutBillInput | BillStageUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillStageUpdateManyWithWhereWithoutBillInput | BillStageUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillStageScalarWhereInput | BillStageScalarWhereInput[]
  }

  export type BillSponsorUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillSponsorCreateWithoutBillInput, BillSponsorUncheckedCreateWithoutBillInput> | BillSponsorCreateWithoutBillInput[] | BillSponsorUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillSponsorCreateOrConnectWithoutBillInput | BillSponsorCreateOrConnectWithoutBillInput[]
    upsert?: BillSponsorUpsertWithWhereUniqueWithoutBillInput | BillSponsorUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillSponsorCreateManyBillInputEnvelope
    set?: BillSponsorWhereUniqueInput | BillSponsorWhereUniqueInput[]
    disconnect?: BillSponsorWhereUniqueInput | BillSponsorWhereUniqueInput[]
    delete?: BillSponsorWhereUniqueInput | BillSponsorWhereUniqueInput[]
    connect?: BillSponsorWhereUniqueInput | BillSponsorWhereUniqueInput[]
    update?: BillSponsorUpdateWithWhereUniqueWithoutBillInput | BillSponsorUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillSponsorUpdateManyWithWhereWithoutBillInput | BillSponsorUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillSponsorScalarWhereInput | BillSponsorScalarWhereInput[]
  }

  export type BillPublicationUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillPublicationCreateWithoutBillInput, BillPublicationUncheckedCreateWithoutBillInput> | BillPublicationCreateWithoutBillInput[] | BillPublicationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillPublicationCreateOrConnectWithoutBillInput | BillPublicationCreateOrConnectWithoutBillInput[]
    upsert?: BillPublicationUpsertWithWhereUniqueWithoutBillInput | BillPublicationUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillPublicationCreateManyBillInputEnvelope
    set?: BillPublicationWhereUniqueInput | BillPublicationWhereUniqueInput[]
    disconnect?: BillPublicationWhereUniqueInput | BillPublicationWhereUniqueInput[]
    delete?: BillPublicationWhereUniqueInput | BillPublicationWhereUniqueInput[]
    connect?: BillPublicationWhereUniqueInput | BillPublicationWhereUniqueInput[]
    update?: BillPublicationUpdateWithWhereUniqueWithoutBillInput | BillPublicationUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillPublicationUpdateManyWithWhereWithoutBillInput | BillPublicationUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillPublicationScalarWhereInput | BillPublicationScalarWhereInput[]
  }

  export type BillSummaryUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillSummaryCreateWithoutBillInput, BillSummaryUncheckedCreateWithoutBillInput> | BillSummaryCreateWithoutBillInput[] | BillSummaryUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillSummaryCreateOrConnectWithoutBillInput | BillSummaryCreateOrConnectWithoutBillInput[]
    upsert?: BillSummaryUpsertWithWhereUniqueWithoutBillInput | BillSummaryUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillSummaryCreateManyBillInputEnvelope
    set?: BillSummaryWhereUniqueInput | BillSummaryWhereUniqueInput[]
    disconnect?: BillSummaryWhereUniqueInput | BillSummaryWhereUniqueInput[]
    delete?: BillSummaryWhereUniqueInput | BillSummaryWhereUniqueInput[]
    connect?: BillSummaryWhereUniqueInput | BillSummaryWhereUniqueInput[]
    update?: BillSummaryUpdateWithWhereUniqueWithoutBillInput | BillSummaryUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillSummaryUpdateManyWithWhereWithoutBillInput | BillSummaryUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillSummaryScalarWhereInput | BillSummaryScalarWhereInput[]
  }

  export type TrackedBillUpdateManyWithoutBillNestedInput = {
    create?: XOR<TrackedBillCreateWithoutBillInput, TrackedBillUncheckedCreateWithoutBillInput> | TrackedBillCreateWithoutBillInput[] | TrackedBillUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TrackedBillCreateOrConnectWithoutBillInput | TrackedBillCreateOrConnectWithoutBillInput[]
    upsert?: TrackedBillUpsertWithWhereUniqueWithoutBillInput | TrackedBillUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: TrackedBillCreateManyBillInputEnvelope
    set?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    disconnect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    delete?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    connect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    update?: TrackedBillUpdateWithWhereUniqueWithoutBillInput | TrackedBillUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: TrackedBillUpdateManyWithWhereWithoutBillInput | TrackedBillUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: TrackedBillScalarWhereInput | TrackedBillScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutBillNestedInput = {
    create?: XOR<NotificationCreateWithoutBillInput, NotificationUncheckedCreateWithoutBillInput> | NotificationCreateWithoutBillInput[] | NotificationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBillInput | NotificationCreateOrConnectWithoutBillInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutBillInput | NotificationUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: NotificationCreateManyBillInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutBillInput | NotificationUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutBillInput | NotificationUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BillStageUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillStageCreateWithoutBillInput, BillStageUncheckedCreateWithoutBillInput> | BillStageCreateWithoutBillInput[] | BillStageUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillStageCreateOrConnectWithoutBillInput | BillStageCreateOrConnectWithoutBillInput[]
    upsert?: BillStageUpsertWithWhereUniqueWithoutBillInput | BillStageUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillStageCreateManyBillInputEnvelope
    set?: BillStageWhereUniqueInput | BillStageWhereUniqueInput[]
    disconnect?: BillStageWhereUniqueInput | BillStageWhereUniqueInput[]
    delete?: BillStageWhereUniqueInput | BillStageWhereUniqueInput[]
    connect?: BillStageWhereUniqueInput | BillStageWhereUniqueInput[]
    update?: BillStageUpdateWithWhereUniqueWithoutBillInput | BillStageUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillStageUpdateManyWithWhereWithoutBillInput | BillStageUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillStageScalarWhereInput | BillStageScalarWhereInput[]
  }

  export type BillSponsorUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillSponsorCreateWithoutBillInput, BillSponsorUncheckedCreateWithoutBillInput> | BillSponsorCreateWithoutBillInput[] | BillSponsorUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillSponsorCreateOrConnectWithoutBillInput | BillSponsorCreateOrConnectWithoutBillInput[]
    upsert?: BillSponsorUpsertWithWhereUniqueWithoutBillInput | BillSponsorUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillSponsorCreateManyBillInputEnvelope
    set?: BillSponsorWhereUniqueInput | BillSponsorWhereUniqueInput[]
    disconnect?: BillSponsorWhereUniqueInput | BillSponsorWhereUniqueInput[]
    delete?: BillSponsorWhereUniqueInput | BillSponsorWhereUniqueInput[]
    connect?: BillSponsorWhereUniqueInput | BillSponsorWhereUniqueInput[]
    update?: BillSponsorUpdateWithWhereUniqueWithoutBillInput | BillSponsorUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillSponsorUpdateManyWithWhereWithoutBillInput | BillSponsorUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillSponsorScalarWhereInput | BillSponsorScalarWhereInput[]
  }

  export type BillPublicationUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillPublicationCreateWithoutBillInput, BillPublicationUncheckedCreateWithoutBillInput> | BillPublicationCreateWithoutBillInput[] | BillPublicationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillPublicationCreateOrConnectWithoutBillInput | BillPublicationCreateOrConnectWithoutBillInput[]
    upsert?: BillPublicationUpsertWithWhereUniqueWithoutBillInput | BillPublicationUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillPublicationCreateManyBillInputEnvelope
    set?: BillPublicationWhereUniqueInput | BillPublicationWhereUniqueInput[]
    disconnect?: BillPublicationWhereUniqueInput | BillPublicationWhereUniqueInput[]
    delete?: BillPublicationWhereUniqueInput | BillPublicationWhereUniqueInput[]
    connect?: BillPublicationWhereUniqueInput | BillPublicationWhereUniqueInput[]
    update?: BillPublicationUpdateWithWhereUniqueWithoutBillInput | BillPublicationUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillPublicationUpdateManyWithWhereWithoutBillInput | BillPublicationUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillPublicationScalarWhereInput | BillPublicationScalarWhereInput[]
  }

  export type BillSummaryUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillSummaryCreateWithoutBillInput, BillSummaryUncheckedCreateWithoutBillInput> | BillSummaryCreateWithoutBillInput[] | BillSummaryUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillSummaryCreateOrConnectWithoutBillInput | BillSummaryCreateOrConnectWithoutBillInput[]
    upsert?: BillSummaryUpsertWithWhereUniqueWithoutBillInput | BillSummaryUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillSummaryCreateManyBillInputEnvelope
    set?: BillSummaryWhereUniqueInput | BillSummaryWhereUniqueInput[]
    disconnect?: BillSummaryWhereUniqueInput | BillSummaryWhereUniqueInput[]
    delete?: BillSummaryWhereUniqueInput | BillSummaryWhereUniqueInput[]
    connect?: BillSummaryWhereUniqueInput | BillSummaryWhereUniqueInput[]
    update?: BillSummaryUpdateWithWhereUniqueWithoutBillInput | BillSummaryUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillSummaryUpdateManyWithWhereWithoutBillInput | BillSummaryUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillSummaryScalarWhereInput | BillSummaryScalarWhereInput[]
  }

  export type TrackedBillUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<TrackedBillCreateWithoutBillInput, TrackedBillUncheckedCreateWithoutBillInput> | TrackedBillCreateWithoutBillInput[] | TrackedBillUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TrackedBillCreateOrConnectWithoutBillInput | TrackedBillCreateOrConnectWithoutBillInput[]
    upsert?: TrackedBillUpsertWithWhereUniqueWithoutBillInput | TrackedBillUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: TrackedBillCreateManyBillInputEnvelope
    set?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    disconnect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    delete?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    connect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    update?: TrackedBillUpdateWithWhereUniqueWithoutBillInput | TrackedBillUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: TrackedBillUpdateManyWithWhereWithoutBillInput | TrackedBillUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: TrackedBillScalarWhereInput | TrackedBillScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<NotificationCreateWithoutBillInput, NotificationUncheckedCreateWithoutBillInput> | NotificationCreateWithoutBillInput[] | NotificationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBillInput | NotificationCreateOrConnectWithoutBillInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutBillInput | NotificationUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: NotificationCreateManyBillInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutBillInput | NotificationUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutBillInput | NotificationUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BillCreateNestedOneWithoutStagesInput = {
    create?: XOR<BillCreateWithoutStagesInput, BillUncheckedCreateWithoutStagesInput>
    connectOrCreate?: BillCreateOrConnectWithoutStagesInput
    connect?: BillWhereUniqueInput
  }

  export type BillUpdateOneRequiredWithoutStagesNestedInput = {
    create?: XOR<BillCreateWithoutStagesInput, BillUncheckedCreateWithoutStagesInput>
    connectOrCreate?: BillCreateOrConnectWithoutStagesInput
    upsert?: BillUpsertWithoutStagesInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutStagesInput, BillUpdateWithoutStagesInput>, BillUncheckedUpdateWithoutStagesInput>
  }

  export type BillCreateNestedOneWithoutSponsorsInput = {
    create?: XOR<BillCreateWithoutSponsorsInput, BillUncheckedCreateWithoutSponsorsInput>
    connectOrCreate?: BillCreateOrConnectWithoutSponsorsInput
    connect?: BillWhereUniqueInput
  }

  export type BillUpdateOneRequiredWithoutSponsorsNestedInput = {
    create?: XOR<BillCreateWithoutSponsorsInput, BillUncheckedCreateWithoutSponsorsInput>
    connectOrCreate?: BillCreateOrConnectWithoutSponsorsInput
    upsert?: BillUpsertWithoutSponsorsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutSponsorsInput, BillUpdateWithoutSponsorsInput>, BillUncheckedUpdateWithoutSponsorsInput>
  }

  export type BillCreateNestedOneWithoutPublicationsInput = {
    create?: XOR<BillCreateWithoutPublicationsInput, BillUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: BillCreateOrConnectWithoutPublicationsInput
    connect?: BillWhereUniqueInput
  }

  export type BillUpdateOneRequiredWithoutPublicationsNestedInput = {
    create?: XOR<BillCreateWithoutPublicationsInput, BillUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: BillCreateOrConnectWithoutPublicationsInput
    upsert?: BillUpsertWithoutPublicationsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutPublicationsInput, BillUpdateWithoutPublicationsInput>, BillUncheckedUpdateWithoutPublicationsInput>
  }

  export type BillCreateNestedOneWithoutSummariesInput = {
    create?: XOR<BillCreateWithoutSummariesInput, BillUncheckedCreateWithoutSummariesInput>
    connectOrCreate?: BillCreateOrConnectWithoutSummariesInput
    connect?: BillWhereUniqueInput
  }

  export type BillUpdateOneRequiredWithoutSummariesNestedInput = {
    create?: XOR<BillCreateWithoutSummariesInput, BillUncheckedCreateWithoutSummariesInput>
    connectOrCreate?: BillCreateOrConnectWithoutSummariesInput
    upsert?: BillUpsertWithoutSummariesInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutSummariesInput, BillUpdateWithoutSummariesInput>, BillUncheckedUpdateWithoutSummariesInput>
  }

  export type TrackedBillCreateNestedManyWithoutDeviceInput = {
    create?: XOR<TrackedBillCreateWithoutDeviceInput, TrackedBillUncheckedCreateWithoutDeviceInput> | TrackedBillCreateWithoutDeviceInput[] | TrackedBillUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: TrackedBillCreateOrConnectWithoutDeviceInput | TrackedBillCreateOrConnectWithoutDeviceInput[]
    createMany?: TrackedBillCreateManyDeviceInputEnvelope
    connect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
  }

  export type PushSubscriptionCreateNestedManyWithoutDeviceInput = {
    create?: XOR<PushSubscriptionCreateWithoutDeviceInput, PushSubscriptionUncheckedCreateWithoutDeviceInput> | PushSubscriptionCreateWithoutDeviceInput[] | PushSubscriptionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutDeviceInput | PushSubscriptionCreateOrConnectWithoutDeviceInput[]
    createMany?: PushSubscriptionCreateManyDeviceInputEnvelope
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
  }

  export type TrackedBillUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<TrackedBillCreateWithoutDeviceInput, TrackedBillUncheckedCreateWithoutDeviceInput> | TrackedBillCreateWithoutDeviceInput[] | TrackedBillUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: TrackedBillCreateOrConnectWithoutDeviceInput | TrackedBillCreateOrConnectWithoutDeviceInput[]
    createMany?: TrackedBillCreateManyDeviceInputEnvelope
    connect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
  }

  export type PushSubscriptionUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<PushSubscriptionCreateWithoutDeviceInput, PushSubscriptionUncheckedCreateWithoutDeviceInput> | PushSubscriptionCreateWithoutDeviceInput[] | PushSubscriptionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutDeviceInput | PushSubscriptionCreateOrConnectWithoutDeviceInput[]
    createMany?: PushSubscriptionCreateManyDeviceInputEnvelope
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
  }

  export type TrackedBillUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<TrackedBillCreateWithoutDeviceInput, TrackedBillUncheckedCreateWithoutDeviceInput> | TrackedBillCreateWithoutDeviceInput[] | TrackedBillUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: TrackedBillCreateOrConnectWithoutDeviceInput | TrackedBillCreateOrConnectWithoutDeviceInput[]
    upsert?: TrackedBillUpsertWithWhereUniqueWithoutDeviceInput | TrackedBillUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: TrackedBillCreateManyDeviceInputEnvelope
    set?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    disconnect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    delete?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    connect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    update?: TrackedBillUpdateWithWhereUniqueWithoutDeviceInput | TrackedBillUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: TrackedBillUpdateManyWithWhereWithoutDeviceInput | TrackedBillUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: TrackedBillScalarWhereInput | TrackedBillScalarWhereInput[]
  }

  export type PushSubscriptionUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<PushSubscriptionCreateWithoutDeviceInput, PushSubscriptionUncheckedCreateWithoutDeviceInput> | PushSubscriptionCreateWithoutDeviceInput[] | PushSubscriptionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutDeviceInput | PushSubscriptionCreateOrConnectWithoutDeviceInput[]
    upsert?: PushSubscriptionUpsertWithWhereUniqueWithoutDeviceInput | PushSubscriptionUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: PushSubscriptionCreateManyDeviceInputEnvelope
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    disconnect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    delete?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    update?: PushSubscriptionUpdateWithWhereUniqueWithoutDeviceInput | PushSubscriptionUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: PushSubscriptionUpdateManyWithWhereWithoutDeviceInput | PushSubscriptionUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
  }

  export type TrackedBillUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<TrackedBillCreateWithoutDeviceInput, TrackedBillUncheckedCreateWithoutDeviceInput> | TrackedBillCreateWithoutDeviceInput[] | TrackedBillUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: TrackedBillCreateOrConnectWithoutDeviceInput | TrackedBillCreateOrConnectWithoutDeviceInput[]
    upsert?: TrackedBillUpsertWithWhereUniqueWithoutDeviceInput | TrackedBillUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: TrackedBillCreateManyDeviceInputEnvelope
    set?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    disconnect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    delete?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    connect?: TrackedBillWhereUniqueInput | TrackedBillWhereUniqueInput[]
    update?: TrackedBillUpdateWithWhereUniqueWithoutDeviceInput | TrackedBillUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: TrackedBillUpdateManyWithWhereWithoutDeviceInput | TrackedBillUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: TrackedBillScalarWhereInput | TrackedBillScalarWhereInput[]
  }

  export type PushSubscriptionUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<PushSubscriptionCreateWithoutDeviceInput, PushSubscriptionUncheckedCreateWithoutDeviceInput> | PushSubscriptionCreateWithoutDeviceInput[] | PushSubscriptionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutDeviceInput | PushSubscriptionCreateOrConnectWithoutDeviceInput[]
    upsert?: PushSubscriptionUpsertWithWhereUniqueWithoutDeviceInput | PushSubscriptionUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: PushSubscriptionCreateManyDeviceInputEnvelope
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    disconnect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    delete?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    update?: PushSubscriptionUpdateWithWhereUniqueWithoutDeviceInput | PushSubscriptionUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: PushSubscriptionUpdateManyWithWhereWithoutDeviceInput | PushSubscriptionUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
  }

  export type DeviceProfileCreateNestedOneWithoutTrackedBillsInput = {
    create?: XOR<DeviceProfileCreateWithoutTrackedBillsInput, DeviceProfileUncheckedCreateWithoutTrackedBillsInput>
    connectOrCreate?: DeviceProfileCreateOrConnectWithoutTrackedBillsInput
    connect?: DeviceProfileWhereUniqueInput
  }

  export type BillCreateNestedOneWithoutTrackedBillsInput = {
    create?: XOR<BillCreateWithoutTrackedBillsInput, BillUncheckedCreateWithoutTrackedBillsInput>
    connectOrCreate?: BillCreateOrConnectWithoutTrackedBillsInput
    connect?: BillWhereUniqueInput
  }

  export type DeviceProfileUpdateOneRequiredWithoutTrackedBillsNestedInput = {
    create?: XOR<DeviceProfileCreateWithoutTrackedBillsInput, DeviceProfileUncheckedCreateWithoutTrackedBillsInput>
    connectOrCreate?: DeviceProfileCreateOrConnectWithoutTrackedBillsInput
    upsert?: DeviceProfileUpsertWithoutTrackedBillsInput
    connect?: DeviceProfileWhereUniqueInput
    update?: XOR<XOR<DeviceProfileUpdateToOneWithWhereWithoutTrackedBillsInput, DeviceProfileUpdateWithoutTrackedBillsInput>, DeviceProfileUncheckedUpdateWithoutTrackedBillsInput>
  }

  export type BillUpdateOneRequiredWithoutTrackedBillsNestedInput = {
    create?: XOR<BillCreateWithoutTrackedBillsInput, BillUncheckedCreateWithoutTrackedBillsInput>
    connectOrCreate?: BillCreateOrConnectWithoutTrackedBillsInput
    upsert?: BillUpsertWithoutTrackedBillsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutTrackedBillsInput, BillUpdateWithoutTrackedBillsInput>, BillUncheckedUpdateWithoutTrackedBillsInput>
  }

  export type DeviceProfileCreateNestedOneWithoutPushSubscriptionsInput = {
    create?: XOR<DeviceProfileCreateWithoutPushSubscriptionsInput, DeviceProfileUncheckedCreateWithoutPushSubscriptionsInput>
    connectOrCreate?: DeviceProfileCreateOrConnectWithoutPushSubscriptionsInput
    connect?: DeviceProfileWhereUniqueInput
  }

  export type DeviceProfileUpdateOneRequiredWithoutPushSubscriptionsNestedInput = {
    create?: XOR<DeviceProfileCreateWithoutPushSubscriptionsInput, DeviceProfileUncheckedCreateWithoutPushSubscriptionsInput>
    connectOrCreate?: DeviceProfileCreateOrConnectWithoutPushSubscriptionsInput
    upsert?: DeviceProfileUpsertWithoutPushSubscriptionsInput
    connect?: DeviceProfileWhereUniqueInput
    update?: XOR<XOR<DeviceProfileUpdateToOneWithWhereWithoutPushSubscriptionsInput, DeviceProfileUpdateWithoutPushSubscriptionsInput>, DeviceProfileUncheckedUpdateWithoutPushSubscriptionsInput>
  }

  export type BillCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<BillCreateWithoutNotificationsInput, BillUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: BillCreateOrConnectWithoutNotificationsInput
    connect?: BillWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type BillUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<BillCreateWithoutNotificationsInput, BillUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: BillCreateOrConnectWithoutNotificationsInput
    upsert?: BillUpsertWithoutNotificationsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutNotificationsInput, BillUpdateWithoutNotificationsInput>, BillUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BillStageCreateWithoutBillInput = {
    id?: string
    stageId: number
    stageName: string
    house: string
    sortOrder?: number
    sittingDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type BillStageUncheckedCreateWithoutBillInput = {
    id?: string
    stageId: number
    stageName: string
    house: string
    sortOrder?: number
    sittingDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type BillStageCreateOrConnectWithoutBillInput = {
    where: BillStageWhereUniqueInput
    create: XOR<BillStageCreateWithoutBillInput, BillStageUncheckedCreateWithoutBillInput>
  }

  export type BillStageCreateManyBillInputEnvelope = {
    data: BillStageCreateManyBillInput | BillStageCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type BillSponsorCreateWithoutBillInput = {
    id?: string
    memberId?: number | null
    name: string
    party?: string | null
    constituency?: string | null
    photoUrl?: string | null
    sortOrder?: number
  }

  export type BillSponsorUncheckedCreateWithoutBillInput = {
    id?: string
    memberId?: number | null
    name: string
    party?: string | null
    constituency?: string | null
    photoUrl?: string | null
    sortOrder?: number
  }

  export type BillSponsorCreateOrConnectWithoutBillInput = {
    where: BillSponsorWhereUniqueInput
    create: XOR<BillSponsorCreateWithoutBillInput, BillSponsorUncheckedCreateWithoutBillInput>
  }

  export type BillSponsorCreateManyBillInputEnvelope = {
    data: BillSponsorCreateManyBillInput | BillSponsorCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type BillPublicationCreateWithoutBillInput = {
    id?: string
    publicationType: string
    title: string
    url: string
    displayDate?: Date | string | null
    createdAt?: Date | string
  }

  export type BillPublicationUncheckedCreateWithoutBillInput = {
    id?: string
    publicationType: string
    title: string
    url: string
    displayDate?: Date | string | null
    createdAt?: Date | string
  }

  export type BillPublicationCreateOrConnectWithoutBillInput = {
    where: BillPublicationWhereUniqueInput
    create: XOR<BillPublicationCreateWithoutBillInput, BillPublicationUncheckedCreateWithoutBillInput>
  }

  export type BillPublicationCreateManyBillInputEnvelope = {
    data: BillPublicationCreateManyBillInput | BillPublicationCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type BillSummaryCreateWithoutBillInput = {
    id?: string
    language?: string
    version?: number
    overview: string
    purpose: string
    keyChanges: JsonNullValueInput | InputJsonValue
    impacts: JsonNullValueInput | InputJsonValue
    implementation?: string | null
    tldr: string
    modelUsed?: string
    tokensUsed?: number | null
    generatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillSummaryUncheckedCreateWithoutBillInput = {
    id?: string
    language?: string
    version?: number
    overview: string
    purpose: string
    keyChanges: JsonNullValueInput | InputJsonValue
    impacts: JsonNullValueInput | InputJsonValue
    implementation?: string | null
    tldr: string
    modelUsed?: string
    tokensUsed?: number | null
    generatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillSummaryCreateOrConnectWithoutBillInput = {
    where: BillSummaryWhereUniqueInput
    create: XOR<BillSummaryCreateWithoutBillInput, BillSummaryUncheckedCreateWithoutBillInput>
  }

  export type BillSummaryCreateManyBillInputEnvelope = {
    data: BillSummaryCreateManyBillInput | BillSummaryCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type TrackedBillCreateWithoutBillInput = {
    id?: string
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: Date | string
    device: DeviceProfileCreateNestedOneWithoutTrackedBillsInput
  }

  export type TrackedBillUncheckedCreateWithoutBillInput = {
    id?: string
    deviceId: string
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: Date | string
  }

  export type TrackedBillCreateOrConnectWithoutBillInput = {
    where: TrackedBillWhereUniqueInput
    create: XOR<TrackedBillCreateWithoutBillInput, TrackedBillUncheckedCreateWithoutBillInput>
  }

  export type TrackedBillCreateManyBillInputEnvelope = {
    data: TrackedBillCreateManyBillInput | TrackedBillCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutBillInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutBillInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutBillInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutBillInput, NotificationUncheckedCreateWithoutBillInput>
  }

  export type NotificationCreateManyBillInputEnvelope = {
    data: NotificationCreateManyBillInput | NotificationCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type BillStageUpsertWithWhereUniqueWithoutBillInput = {
    where: BillStageWhereUniqueInput
    update: XOR<BillStageUpdateWithoutBillInput, BillStageUncheckedUpdateWithoutBillInput>
    create: XOR<BillStageCreateWithoutBillInput, BillStageUncheckedCreateWithoutBillInput>
  }

  export type BillStageUpdateWithWhereUniqueWithoutBillInput = {
    where: BillStageWhereUniqueInput
    data: XOR<BillStageUpdateWithoutBillInput, BillStageUncheckedUpdateWithoutBillInput>
  }

  export type BillStageUpdateManyWithWhereWithoutBillInput = {
    where: BillStageScalarWhereInput
    data: XOR<BillStageUpdateManyMutationInput, BillStageUncheckedUpdateManyWithoutBillInput>
  }

  export type BillStageScalarWhereInput = {
    AND?: BillStageScalarWhereInput | BillStageScalarWhereInput[]
    OR?: BillStageScalarWhereInput[]
    NOT?: BillStageScalarWhereInput | BillStageScalarWhereInput[]
    id?: StringFilter<"BillStage"> | string
    billId?: StringFilter<"BillStage"> | string
    stageId?: IntFilter<"BillStage"> | number
    stageName?: StringFilter<"BillStage"> | string
    house?: StringFilter<"BillStage"> | string
    sortOrder?: IntFilter<"BillStage"> | number
    sittingDate?: DateTimeNullableFilter<"BillStage"> | Date | string | null
    description?: StringNullableFilter<"BillStage"> | string | null
    createdAt?: DateTimeFilter<"BillStage"> | Date | string
  }

  export type BillSponsorUpsertWithWhereUniqueWithoutBillInput = {
    where: BillSponsorWhereUniqueInput
    update: XOR<BillSponsorUpdateWithoutBillInput, BillSponsorUncheckedUpdateWithoutBillInput>
    create: XOR<BillSponsorCreateWithoutBillInput, BillSponsorUncheckedCreateWithoutBillInput>
  }

  export type BillSponsorUpdateWithWhereUniqueWithoutBillInput = {
    where: BillSponsorWhereUniqueInput
    data: XOR<BillSponsorUpdateWithoutBillInput, BillSponsorUncheckedUpdateWithoutBillInput>
  }

  export type BillSponsorUpdateManyWithWhereWithoutBillInput = {
    where: BillSponsorScalarWhereInput
    data: XOR<BillSponsorUpdateManyMutationInput, BillSponsorUncheckedUpdateManyWithoutBillInput>
  }

  export type BillSponsorScalarWhereInput = {
    AND?: BillSponsorScalarWhereInput | BillSponsorScalarWhereInput[]
    OR?: BillSponsorScalarWhereInput[]
    NOT?: BillSponsorScalarWhereInput | BillSponsorScalarWhereInput[]
    id?: StringFilter<"BillSponsor"> | string
    billId?: StringFilter<"BillSponsor"> | string
    memberId?: IntNullableFilter<"BillSponsor"> | number | null
    name?: StringFilter<"BillSponsor"> | string
    party?: StringNullableFilter<"BillSponsor"> | string | null
    constituency?: StringNullableFilter<"BillSponsor"> | string | null
    photoUrl?: StringNullableFilter<"BillSponsor"> | string | null
    sortOrder?: IntFilter<"BillSponsor"> | number
  }

  export type BillPublicationUpsertWithWhereUniqueWithoutBillInput = {
    where: BillPublicationWhereUniqueInput
    update: XOR<BillPublicationUpdateWithoutBillInput, BillPublicationUncheckedUpdateWithoutBillInput>
    create: XOR<BillPublicationCreateWithoutBillInput, BillPublicationUncheckedCreateWithoutBillInput>
  }

  export type BillPublicationUpdateWithWhereUniqueWithoutBillInput = {
    where: BillPublicationWhereUniqueInput
    data: XOR<BillPublicationUpdateWithoutBillInput, BillPublicationUncheckedUpdateWithoutBillInput>
  }

  export type BillPublicationUpdateManyWithWhereWithoutBillInput = {
    where: BillPublicationScalarWhereInput
    data: XOR<BillPublicationUpdateManyMutationInput, BillPublicationUncheckedUpdateManyWithoutBillInput>
  }

  export type BillPublicationScalarWhereInput = {
    AND?: BillPublicationScalarWhereInput | BillPublicationScalarWhereInput[]
    OR?: BillPublicationScalarWhereInput[]
    NOT?: BillPublicationScalarWhereInput | BillPublicationScalarWhereInput[]
    id?: StringFilter<"BillPublication"> | string
    billId?: StringFilter<"BillPublication"> | string
    publicationType?: StringFilter<"BillPublication"> | string
    title?: StringFilter<"BillPublication"> | string
    url?: StringFilter<"BillPublication"> | string
    displayDate?: DateTimeNullableFilter<"BillPublication"> | Date | string | null
    createdAt?: DateTimeFilter<"BillPublication"> | Date | string
  }

  export type BillSummaryUpsertWithWhereUniqueWithoutBillInput = {
    where: BillSummaryWhereUniqueInput
    update: XOR<BillSummaryUpdateWithoutBillInput, BillSummaryUncheckedUpdateWithoutBillInput>
    create: XOR<BillSummaryCreateWithoutBillInput, BillSummaryUncheckedCreateWithoutBillInput>
  }

  export type BillSummaryUpdateWithWhereUniqueWithoutBillInput = {
    where: BillSummaryWhereUniqueInput
    data: XOR<BillSummaryUpdateWithoutBillInput, BillSummaryUncheckedUpdateWithoutBillInput>
  }

  export type BillSummaryUpdateManyWithWhereWithoutBillInput = {
    where: BillSummaryScalarWhereInput
    data: XOR<BillSummaryUpdateManyMutationInput, BillSummaryUncheckedUpdateManyWithoutBillInput>
  }

  export type BillSummaryScalarWhereInput = {
    AND?: BillSummaryScalarWhereInput | BillSummaryScalarWhereInput[]
    OR?: BillSummaryScalarWhereInput[]
    NOT?: BillSummaryScalarWhereInput | BillSummaryScalarWhereInput[]
    id?: StringFilter<"BillSummary"> | string
    billId?: StringFilter<"BillSummary"> | string
    language?: StringFilter<"BillSummary"> | string
    version?: IntFilter<"BillSummary"> | number
    overview?: StringFilter<"BillSummary"> | string
    purpose?: StringFilter<"BillSummary"> | string
    keyChanges?: JsonFilter<"BillSummary">
    impacts?: JsonFilter<"BillSummary">
    implementation?: StringNullableFilter<"BillSummary"> | string | null
    tldr?: StringFilter<"BillSummary"> | string
    modelUsed?: StringFilter<"BillSummary"> | string
    tokensUsed?: IntNullableFilter<"BillSummary"> | number | null
    generatedAt?: DateTimeFilter<"BillSummary"> | Date | string
    createdAt?: DateTimeFilter<"BillSummary"> | Date | string
    updatedAt?: DateTimeFilter<"BillSummary"> | Date | string
  }

  export type TrackedBillUpsertWithWhereUniqueWithoutBillInput = {
    where: TrackedBillWhereUniqueInput
    update: XOR<TrackedBillUpdateWithoutBillInput, TrackedBillUncheckedUpdateWithoutBillInput>
    create: XOR<TrackedBillCreateWithoutBillInput, TrackedBillUncheckedCreateWithoutBillInput>
  }

  export type TrackedBillUpdateWithWhereUniqueWithoutBillInput = {
    where: TrackedBillWhereUniqueInput
    data: XOR<TrackedBillUpdateWithoutBillInput, TrackedBillUncheckedUpdateWithoutBillInput>
  }

  export type TrackedBillUpdateManyWithWhereWithoutBillInput = {
    where: TrackedBillScalarWhereInput
    data: XOR<TrackedBillUpdateManyMutationInput, TrackedBillUncheckedUpdateManyWithoutBillInput>
  }

  export type TrackedBillScalarWhereInput = {
    AND?: TrackedBillScalarWhereInput | TrackedBillScalarWhereInput[]
    OR?: TrackedBillScalarWhereInput[]
    NOT?: TrackedBillScalarWhereInput | TrackedBillScalarWhereInput[]
    id?: StringFilter<"TrackedBill"> | string
    deviceId?: StringFilter<"TrackedBill"> | string
    billId?: StringFilter<"TrackedBill"> | string
    notifyStageChange?: BoolFilter<"TrackedBill"> | boolean
    notifyRoyalAssent?: BoolFilter<"TrackedBill"> | boolean
    notifyNewAmendment?: BoolFilter<"TrackedBill"> | boolean
    createdAt?: DateTimeFilter<"TrackedBill"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutBillInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutBillInput, NotificationUncheckedUpdateWithoutBillInput>
    create: XOR<NotificationCreateWithoutBillInput, NotificationUncheckedCreateWithoutBillInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutBillInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutBillInput, NotificationUncheckedUpdateWithoutBillInput>
  }

  export type NotificationUpdateManyWithWhereWithoutBillInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutBillInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    billId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    sentAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type BillCreateWithoutStagesInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sponsors?: BillSponsorCreateNestedManyWithoutBillInput
    publications?: BillPublicationCreateNestedManyWithoutBillInput
    summaries?: BillSummaryCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillCreateNestedManyWithoutBillInput
    notifications?: NotificationCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutStagesInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sponsors?: BillSponsorUncheckedCreateNestedManyWithoutBillInput
    publications?: BillPublicationUncheckedCreateNestedManyWithoutBillInput
    summaries?: BillSummaryUncheckedCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillUncheckedCreateNestedManyWithoutBillInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutStagesInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutStagesInput, BillUncheckedCreateWithoutStagesInput>
  }

  export type BillUpsertWithoutStagesInput = {
    update: XOR<BillUpdateWithoutStagesInput, BillUncheckedUpdateWithoutStagesInput>
    create: XOR<BillCreateWithoutStagesInput, BillUncheckedCreateWithoutStagesInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutStagesInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutStagesInput, BillUncheckedUpdateWithoutStagesInput>
  }

  export type BillUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sponsors?: BillSponsorUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUpdateManyWithoutBillNestedInput
    notifications?: NotificationUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sponsors?: BillSponsorUncheckedUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUncheckedUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUncheckedUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUncheckedUpdateManyWithoutBillNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateWithoutSponsorsInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageCreateNestedManyWithoutBillInput
    publications?: BillPublicationCreateNestedManyWithoutBillInput
    summaries?: BillSummaryCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillCreateNestedManyWithoutBillInput
    notifications?: NotificationCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutSponsorsInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageUncheckedCreateNestedManyWithoutBillInput
    publications?: BillPublicationUncheckedCreateNestedManyWithoutBillInput
    summaries?: BillSummaryUncheckedCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillUncheckedCreateNestedManyWithoutBillInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutSponsorsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutSponsorsInput, BillUncheckedCreateWithoutSponsorsInput>
  }

  export type BillUpsertWithoutSponsorsInput = {
    update: XOR<BillUpdateWithoutSponsorsInput, BillUncheckedUpdateWithoutSponsorsInput>
    create: XOR<BillCreateWithoutSponsorsInput, BillUncheckedCreateWithoutSponsorsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutSponsorsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutSponsorsInput, BillUncheckedUpdateWithoutSponsorsInput>
  }

  export type BillUpdateWithoutSponsorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUpdateManyWithoutBillNestedInput
    notifications?: NotificationUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutSponsorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUncheckedUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUncheckedUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUncheckedUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUncheckedUpdateManyWithoutBillNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateWithoutPublicationsInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageCreateNestedManyWithoutBillInput
    sponsors?: BillSponsorCreateNestedManyWithoutBillInput
    summaries?: BillSummaryCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillCreateNestedManyWithoutBillInput
    notifications?: NotificationCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutPublicationsInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageUncheckedCreateNestedManyWithoutBillInput
    sponsors?: BillSponsorUncheckedCreateNestedManyWithoutBillInput
    summaries?: BillSummaryUncheckedCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillUncheckedCreateNestedManyWithoutBillInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutPublicationsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutPublicationsInput, BillUncheckedCreateWithoutPublicationsInput>
  }

  export type BillUpsertWithoutPublicationsInput = {
    update: XOR<BillUpdateWithoutPublicationsInput, BillUncheckedUpdateWithoutPublicationsInput>
    create: XOR<BillCreateWithoutPublicationsInput, BillUncheckedCreateWithoutPublicationsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutPublicationsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutPublicationsInput, BillUncheckedUpdateWithoutPublicationsInput>
  }

  export type BillUpdateWithoutPublicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUpdateManyWithoutBillNestedInput
    sponsors?: BillSponsorUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUpdateManyWithoutBillNestedInput
    notifications?: NotificationUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutPublicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUncheckedUpdateManyWithoutBillNestedInput
    sponsors?: BillSponsorUncheckedUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUncheckedUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUncheckedUpdateManyWithoutBillNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateWithoutSummariesInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageCreateNestedManyWithoutBillInput
    sponsors?: BillSponsorCreateNestedManyWithoutBillInput
    publications?: BillPublicationCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillCreateNestedManyWithoutBillInput
    notifications?: NotificationCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutSummariesInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageUncheckedCreateNestedManyWithoutBillInput
    sponsors?: BillSponsorUncheckedCreateNestedManyWithoutBillInput
    publications?: BillPublicationUncheckedCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillUncheckedCreateNestedManyWithoutBillInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutSummariesInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutSummariesInput, BillUncheckedCreateWithoutSummariesInput>
  }

  export type BillUpsertWithoutSummariesInput = {
    update: XOR<BillUpdateWithoutSummariesInput, BillUncheckedUpdateWithoutSummariesInput>
    create: XOR<BillCreateWithoutSummariesInput, BillUncheckedCreateWithoutSummariesInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutSummariesInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutSummariesInput, BillUncheckedUpdateWithoutSummariesInput>
  }

  export type BillUpdateWithoutSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUpdateManyWithoutBillNestedInput
    sponsors?: BillSponsorUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUpdateManyWithoutBillNestedInput
    notifications?: NotificationUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUncheckedUpdateManyWithoutBillNestedInput
    sponsors?: BillSponsorUncheckedUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUncheckedUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUncheckedUpdateManyWithoutBillNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutBillNestedInput
  }

  export type TrackedBillCreateWithoutDeviceInput = {
    id?: string
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: Date | string
    bill: BillCreateNestedOneWithoutTrackedBillsInput
  }

  export type TrackedBillUncheckedCreateWithoutDeviceInput = {
    id?: string
    billId: string
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: Date | string
  }

  export type TrackedBillCreateOrConnectWithoutDeviceInput = {
    where: TrackedBillWhereUniqueInput
    create: XOR<TrackedBillCreateWithoutDeviceInput, TrackedBillUncheckedCreateWithoutDeviceInput>
  }

  export type TrackedBillCreateManyDeviceInputEnvelope = {
    data: TrackedBillCreateManyDeviceInput | TrackedBillCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type PushSubscriptionCreateWithoutDeviceInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushSubscriptionUncheckedCreateWithoutDeviceInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushSubscriptionCreateOrConnectWithoutDeviceInput = {
    where: PushSubscriptionWhereUniqueInput
    create: XOR<PushSubscriptionCreateWithoutDeviceInput, PushSubscriptionUncheckedCreateWithoutDeviceInput>
  }

  export type PushSubscriptionCreateManyDeviceInputEnvelope = {
    data: PushSubscriptionCreateManyDeviceInput | PushSubscriptionCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type TrackedBillUpsertWithWhereUniqueWithoutDeviceInput = {
    where: TrackedBillWhereUniqueInput
    update: XOR<TrackedBillUpdateWithoutDeviceInput, TrackedBillUncheckedUpdateWithoutDeviceInput>
    create: XOR<TrackedBillCreateWithoutDeviceInput, TrackedBillUncheckedCreateWithoutDeviceInput>
  }

  export type TrackedBillUpdateWithWhereUniqueWithoutDeviceInput = {
    where: TrackedBillWhereUniqueInput
    data: XOR<TrackedBillUpdateWithoutDeviceInput, TrackedBillUncheckedUpdateWithoutDeviceInput>
  }

  export type TrackedBillUpdateManyWithWhereWithoutDeviceInput = {
    where: TrackedBillScalarWhereInput
    data: XOR<TrackedBillUpdateManyMutationInput, TrackedBillUncheckedUpdateManyWithoutDeviceInput>
  }

  export type PushSubscriptionUpsertWithWhereUniqueWithoutDeviceInput = {
    where: PushSubscriptionWhereUniqueInput
    update: XOR<PushSubscriptionUpdateWithoutDeviceInput, PushSubscriptionUncheckedUpdateWithoutDeviceInput>
    create: XOR<PushSubscriptionCreateWithoutDeviceInput, PushSubscriptionUncheckedCreateWithoutDeviceInput>
  }

  export type PushSubscriptionUpdateWithWhereUniqueWithoutDeviceInput = {
    where: PushSubscriptionWhereUniqueInput
    data: XOR<PushSubscriptionUpdateWithoutDeviceInput, PushSubscriptionUncheckedUpdateWithoutDeviceInput>
  }

  export type PushSubscriptionUpdateManyWithWhereWithoutDeviceInput = {
    where: PushSubscriptionScalarWhereInput
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyWithoutDeviceInput>
  }

  export type PushSubscriptionScalarWhereInput = {
    AND?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
    OR?: PushSubscriptionScalarWhereInput[]
    NOT?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
    id?: StringFilter<"PushSubscription"> | string
    deviceId?: StringFilter<"PushSubscription"> | string
    endpoint?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PushSubscription"> | Date | string
  }

  export type DeviceProfileCreateWithoutTrackedBillsInput = {
    id?: string
    deviceId: string
    preferredLang?: string
    theme?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutDeviceInput
  }

  export type DeviceProfileUncheckedCreateWithoutTrackedBillsInput = {
    id?: string
    deviceId: string
    preferredLang?: string
    theme?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceProfileCreateOrConnectWithoutTrackedBillsInput = {
    where: DeviceProfileWhereUniqueInput
    create: XOR<DeviceProfileCreateWithoutTrackedBillsInput, DeviceProfileUncheckedCreateWithoutTrackedBillsInput>
  }

  export type BillCreateWithoutTrackedBillsInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageCreateNestedManyWithoutBillInput
    sponsors?: BillSponsorCreateNestedManyWithoutBillInput
    publications?: BillPublicationCreateNestedManyWithoutBillInput
    summaries?: BillSummaryCreateNestedManyWithoutBillInput
    notifications?: NotificationCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutTrackedBillsInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageUncheckedCreateNestedManyWithoutBillInput
    sponsors?: BillSponsorUncheckedCreateNestedManyWithoutBillInput
    publications?: BillPublicationUncheckedCreateNestedManyWithoutBillInput
    summaries?: BillSummaryUncheckedCreateNestedManyWithoutBillInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutTrackedBillsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutTrackedBillsInput, BillUncheckedCreateWithoutTrackedBillsInput>
  }

  export type DeviceProfileUpsertWithoutTrackedBillsInput = {
    update: XOR<DeviceProfileUpdateWithoutTrackedBillsInput, DeviceProfileUncheckedUpdateWithoutTrackedBillsInput>
    create: XOR<DeviceProfileCreateWithoutTrackedBillsInput, DeviceProfileUncheckedCreateWithoutTrackedBillsInput>
    where?: DeviceProfileWhereInput
  }

  export type DeviceProfileUpdateToOneWithWhereWithoutTrackedBillsInput = {
    where?: DeviceProfileWhereInput
    data: XOR<DeviceProfileUpdateWithoutTrackedBillsInput, DeviceProfileUncheckedUpdateWithoutTrackedBillsInput>
  }

  export type DeviceProfileUpdateWithoutTrackedBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceProfileUncheckedUpdateWithoutTrackedBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type BillUpsertWithoutTrackedBillsInput = {
    update: XOR<BillUpdateWithoutTrackedBillsInput, BillUncheckedUpdateWithoutTrackedBillsInput>
    create: XOR<BillCreateWithoutTrackedBillsInput, BillUncheckedCreateWithoutTrackedBillsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutTrackedBillsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutTrackedBillsInput, BillUncheckedUpdateWithoutTrackedBillsInput>
  }

  export type BillUpdateWithoutTrackedBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUpdateManyWithoutBillNestedInput
    sponsors?: BillSponsorUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUpdateManyWithoutBillNestedInput
    notifications?: NotificationUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutTrackedBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUncheckedUpdateManyWithoutBillNestedInput
    sponsors?: BillSponsorUncheckedUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUncheckedUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUncheckedUpdateManyWithoutBillNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutBillNestedInput
  }

  export type DeviceProfileCreateWithoutPushSubscriptionsInput = {
    id?: string
    deviceId: string
    preferredLang?: string
    theme?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackedBills?: TrackedBillCreateNestedManyWithoutDeviceInput
  }

  export type DeviceProfileUncheckedCreateWithoutPushSubscriptionsInput = {
    id?: string
    deviceId: string
    preferredLang?: string
    theme?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackedBills?: TrackedBillUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceProfileCreateOrConnectWithoutPushSubscriptionsInput = {
    where: DeviceProfileWhereUniqueInput
    create: XOR<DeviceProfileCreateWithoutPushSubscriptionsInput, DeviceProfileUncheckedCreateWithoutPushSubscriptionsInput>
  }

  export type DeviceProfileUpsertWithoutPushSubscriptionsInput = {
    update: XOR<DeviceProfileUpdateWithoutPushSubscriptionsInput, DeviceProfileUncheckedUpdateWithoutPushSubscriptionsInput>
    create: XOR<DeviceProfileCreateWithoutPushSubscriptionsInput, DeviceProfileUncheckedCreateWithoutPushSubscriptionsInput>
    where?: DeviceProfileWhereInput
  }

  export type DeviceProfileUpdateToOneWithWhereWithoutPushSubscriptionsInput = {
    where?: DeviceProfileWhereInput
    data: XOR<DeviceProfileUpdateWithoutPushSubscriptionsInput, DeviceProfileUncheckedUpdateWithoutPushSubscriptionsInput>
  }

  export type DeviceProfileUpdateWithoutPushSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackedBills?: TrackedBillUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceProfileUncheckedUpdateWithoutPushSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackedBills?: TrackedBillUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type BillCreateWithoutNotificationsInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageCreateNestedManyWithoutBillInput
    sponsors?: BillSponsorCreateNestedManyWithoutBillInput
    publications?: BillPublicationCreateNestedManyWithoutBillInput
    summaries?: BillSummaryCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutNotificationsInput = {
    id?: string
    parliamentId: number
    shortTitle: string
    longTitle: string
    billTypeId?: number | null
    billTypeName?: string | null
    billTypeCategory?: string | null
    currentHouse?: string | null
    currentStage?: string | null
    originatingHouse?: string | null
    lastUpdate?: Date | string | null
    isAct?: boolean
    isDefeated?: boolean
    billWithdrawn?: Date | string | null
    sessionId?: number | null
    sessionName?: string | null
    policyTopics?: BillCreatepolicyTopicsInput | string[]
    affectedGroups?: BillCreateaffectedGroupsInput | string[]
    legislationGovUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: BillStageUncheckedCreateNestedManyWithoutBillInput
    sponsors?: BillSponsorUncheckedCreateNestedManyWithoutBillInput
    publications?: BillPublicationUncheckedCreateNestedManyWithoutBillInput
    summaries?: BillSummaryUncheckedCreateNestedManyWithoutBillInput
    trackedBills?: TrackedBillUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutNotificationsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutNotificationsInput, BillUncheckedCreateWithoutNotificationsInput>
  }

  export type BillUpsertWithoutNotificationsInput = {
    update: XOR<BillUpdateWithoutNotificationsInput, BillUncheckedUpdateWithoutNotificationsInput>
    create: XOR<BillCreateWithoutNotificationsInput, BillUncheckedCreateWithoutNotificationsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutNotificationsInput, BillUncheckedUpdateWithoutNotificationsInput>
  }

  export type BillUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUpdateManyWithoutBillNestedInput
    sponsors?: BillSponsorUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parliamentId?: IntFieldUpdateOperationsInput | number
    shortTitle?: StringFieldUpdateOperationsInput | string
    longTitle?: StringFieldUpdateOperationsInput | string
    billTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    billTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    billTypeCategory?: NullableStringFieldUpdateOperationsInput | string | null
    currentHouse?: NullableStringFieldUpdateOperationsInput | string | null
    currentStage?: NullableStringFieldUpdateOperationsInput | string | null
    originatingHouse?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAct?: BoolFieldUpdateOperationsInput | boolean
    isDefeated?: BoolFieldUpdateOperationsInput | boolean
    billWithdrawn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionName?: NullableStringFieldUpdateOperationsInput | string | null
    policyTopics?: BillUpdatepolicyTopicsInput | string[]
    affectedGroups?: BillUpdateaffectedGroupsInput | string[]
    legislationGovUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: BillStageUncheckedUpdateManyWithoutBillNestedInput
    sponsors?: BillSponsorUncheckedUpdateManyWithoutBillNestedInput
    publications?: BillPublicationUncheckedUpdateManyWithoutBillNestedInput
    summaries?: BillSummaryUncheckedUpdateManyWithoutBillNestedInput
    trackedBills?: TrackedBillUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillStageCreateManyBillInput = {
    id?: string
    stageId: number
    stageName: string
    house: string
    sortOrder?: number
    sittingDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type BillSponsorCreateManyBillInput = {
    id?: string
    memberId?: number | null
    name: string
    party?: string | null
    constituency?: string | null
    photoUrl?: string | null
    sortOrder?: number
  }

  export type BillPublicationCreateManyBillInput = {
    id?: string
    publicationType: string
    title: string
    url: string
    displayDate?: Date | string | null
    createdAt?: Date | string
  }

  export type BillSummaryCreateManyBillInput = {
    id?: string
    language?: string
    version?: number
    overview: string
    purpose: string
    keyChanges: JsonNullValueInput | InputJsonValue
    impacts: JsonNullValueInput | InputJsonValue
    implementation?: string | null
    tldr: string
    modelUsed?: string
    tokensUsed?: number | null
    generatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackedBillCreateManyBillInput = {
    id?: string
    deviceId: string
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateManyBillInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string
  }

  export type BillStageUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: IntFieldUpdateOperationsInput | number
    stageName?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sittingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillStageUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: IntFieldUpdateOperationsInput | number
    stageName?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sittingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillStageUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: IntFieldUpdateOperationsInput | number
    stageName?: StringFieldUpdateOperationsInput | string
    house?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sittingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillSponsorUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    constituency?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BillSponsorUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    constituency?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BillSponsorUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    constituency?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BillPublicationUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillPublicationUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillPublicationUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillSummaryUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    overview?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    keyChanges?: JsonNullValueInput | InputJsonValue
    impacts?: JsonNullValueInput | InputJsonValue
    implementation?: NullableStringFieldUpdateOperationsInput | string | null
    tldr?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillSummaryUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    overview?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    keyChanges?: JsonNullValueInput | InputJsonValue
    impacts?: JsonNullValueInput | InputJsonValue
    implementation?: NullableStringFieldUpdateOperationsInput | string | null
    tldr?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillSummaryUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    overview?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    keyChanges?: JsonNullValueInput | InputJsonValue
    impacts?: JsonNullValueInput | InputJsonValue
    implementation?: NullableStringFieldUpdateOperationsInput | string | null
    tldr?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedBillUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    notifyStageChange?: BoolFieldUpdateOperationsInput | boolean
    notifyRoyalAssent?: BoolFieldUpdateOperationsInput | boolean
    notifyNewAmendment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceProfileUpdateOneRequiredWithoutTrackedBillsNestedInput
  }

  export type TrackedBillUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    notifyStageChange?: BoolFieldUpdateOperationsInput | boolean
    notifyRoyalAssent?: BoolFieldUpdateOperationsInput | boolean
    notifyNewAmendment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedBillUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    notifyStageChange?: BoolFieldUpdateOperationsInput | boolean
    notifyRoyalAssent?: BoolFieldUpdateOperationsInput | boolean
    notifyNewAmendment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedBillCreateManyDeviceInput = {
    id?: string
    billId: string
    notifyStageChange?: boolean
    notifyRoyalAssent?: boolean
    notifyNewAmendment?: boolean
    createdAt?: Date | string
  }

  export type PushSubscriptionCreateManyDeviceInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackedBillUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    notifyStageChange?: BoolFieldUpdateOperationsInput | boolean
    notifyRoyalAssent?: BoolFieldUpdateOperationsInput | boolean
    notifyNewAmendment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutTrackedBillsNestedInput
  }

  export type TrackedBillUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    notifyStageChange?: BoolFieldUpdateOperationsInput | boolean
    notifyRoyalAssent?: BoolFieldUpdateOperationsInput | boolean
    notifyNewAmendment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedBillUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    notifyStageChange?: BoolFieldUpdateOperationsInput | boolean
    notifyRoyalAssent?: BoolFieldUpdateOperationsInput | boolean
    notifyNewAmendment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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