
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model InstructorProfile
 * 
 */
export type InstructorProfile = $Result.DefaultSelection<Prisma.$InstructorProfilePayload>
/**
 * Model StudentProfile
 * 
 */
export type StudentProfile = $Result.DefaultSelection<Prisma.$StudentProfilePayload>
/**
 * Model BodyMeasurement
 * 
 */
export type BodyMeasurement = $Result.DefaultSelection<Prisma.$BodyMeasurementPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model WorkoutPlan
 * 
 */
export type WorkoutPlan = $Result.DefaultSelection<Prisma.$WorkoutPlanPayload>
/**
 * Model WorkoutRoutine
 * 
 */
export type WorkoutRoutine = $Result.DefaultSelection<Prisma.$WorkoutRoutinePayload>
/**
 * Model RoutineExercise
 * 
 */
export type RoutineExercise = $Result.DefaultSelection<Prisma.$RoutineExercisePayload>
/**
 * Model WorkoutSession
 * 
 */
export type WorkoutSession = $Result.DefaultSelection<Prisma.$WorkoutSessionPayload>
/**
 * Model SessionLog
 * 
 */
export type SessionLog = $Result.DefaultSelection<Prisma.$SessionLogPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.instructorProfile`: Exposes CRUD operations for the **InstructorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstructorProfiles
    * const instructorProfiles = await prisma.instructorProfile.findMany()
    * ```
    */
  get instructorProfile(): Prisma.InstructorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bodyMeasurement`: Exposes CRUD operations for the **BodyMeasurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyMeasurements
    * const bodyMeasurements = await prisma.bodyMeasurement.findMany()
    * ```
    */
  get bodyMeasurement(): Prisma.BodyMeasurementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutPlan`: Exposes CRUD operations for the **WorkoutPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutPlans
    * const workoutPlans = await prisma.workoutPlan.findMany()
    * ```
    */
  get workoutPlan(): Prisma.WorkoutPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutRoutine`: Exposes CRUD operations for the **WorkoutRoutine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutRoutines
    * const workoutRoutines = await prisma.workoutRoutine.findMany()
    * ```
    */
  get workoutRoutine(): Prisma.WorkoutRoutineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routineExercise`: Exposes CRUD operations for the **RoutineExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutineExercises
    * const routineExercises = await prisma.routineExercise.findMany()
    * ```
    */
  get routineExercise(): Prisma.RoutineExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutSession`: Exposes CRUD operations for the **WorkoutSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutSessions
    * const workoutSessions = await prisma.workoutSession.findMany()
    * ```
    */
  get workoutSession(): Prisma.WorkoutSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionLog`: Exposes CRUD operations for the **SessionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionLogs
    * const sessionLogs = await prisma.sessionLog.findMany()
    * ```
    */
  get sessionLog(): Prisma.SessionLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
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
    User: 'User',
    InstructorProfile: 'InstructorProfile',
    StudentProfile: 'StudentProfile',
    BodyMeasurement: 'BodyMeasurement',
    Exercise: 'Exercise',
    WorkoutPlan: 'WorkoutPlan',
    WorkoutRoutine: 'WorkoutRoutine',
    RoutineExercise: 'RoutineExercise',
    WorkoutSession: 'WorkoutSession',
    SessionLog: 'SessionLog',
    Notification: 'Notification'
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
      modelProps: "user" | "instructorProfile" | "studentProfile" | "bodyMeasurement" | "exercise" | "workoutPlan" | "workoutRoutine" | "routineExercise" | "workoutSession" | "sessionLog" | "notification"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      InstructorProfile: {
        payload: Prisma.$InstructorProfilePayload<ExtArgs>
        fields: Prisma.InstructorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          findFirst: {
            args: Prisma.InstructorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          findMany: {
            args: Prisma.InstructorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>[]
          }
          create: {
            args: Prisma.InstructorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          createMany: {
            args: Prisma.InstructorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>[]
          }
          delete: {
            args: Prisma.InstructorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          update: {
            args: Prisma.InstructorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          deleteMany: {
            args: Prisma.InstructorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>[]
          }
          upsert: {
            args: Prisma.InstructorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          aggregate: {
            args: Prisma.InstructorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructorProfile>
          }
          groupBy: {
            args: Prisma.InstructorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorProfileCountAggregateOutputType> | number
          }
        }
      }
      StudentProfile: {
        payload: Prisma.$StudentProfilePayload<ExtArgs>
        fields: Prisma.StudentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findMany: {
            args: Prisma.StudentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          create: {
            args: Prisma.StudentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          createMany: {
            args: Prisma.StudentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          update: {
            args: Prisma.StudentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          upsert: {
            args: Prisma.StudentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfile>
          }
          groupBy: {
            args: Prisma.StudentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileCountAggregateOutputType> | number
          }
        }
      }
      BodyMeasurement: {
        payload: Prisma.$BodyMeasurementPayload<ExtArgs>
        fields: Prisma.BodyMeasurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BodyMeasurementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BodyMeasurementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          findFirst: {
            args: Prisma.BodyMeasurementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BodyMeasurementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          findMany: {
            args: Prisma.BodyMeasurementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          create: {
            args: Prisma.BodyMeasurementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          createMany: {
            args: Prisma.BodyMeasurementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BodyMeasurementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          delete: {
            args: Prisma.BodyMeasurementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          update: {
            args: Prisma.BodyMeasurementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          deleteMany: {
            args: Prisma.BodyMeasurementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BodyMeasurementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BodyMeasurementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          upsert: {
            args: Prisma.BodyMeasurementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          aggregate: {
            args: Prisma.BodyMeasurementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBodyMeasurement>
          }
          groupBy: {
            args: Prisma.BodyMeasurementGroupByArgs<ExtArgs>
            result: $Utils.Optional<BodyMeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.BodyMeasurementCountArgs<ExtArgs>
            result: $Utils.Optional<BodyMeasurementCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      WorkoutPlan: {
        payload: Prisma.$WorkoutPlanPayload<ExtArgs>
        fields: Prisma.WorkoutPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          findFirst: {
            args: Prisma.WorkoutPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          findMany: {
            args: Prisma.WorkoutPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          create: {
            args: Prisma.WorkoutPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          createMany: {
            args: Prisma.WorkoutPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          delete: {
            args: Prisma.WorkoutPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          update: {
            args: Prisma.WorkoutPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          aggregate: {
            args: Prisma.WorkoutPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutPlan>
          }
          groupBy: {
            args: Prisma.WorkoutPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutPlanCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutPlanCountAggregateOutputType> | number
          }
        }
      }
      WorkoutRoutine: {
        payload: Prisma.$WorkoutRoutinePayload<ExtArgs>
        fields: Prisma.WorkoutRoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutRoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutRoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          findFirst: {
            args: Prisma.WorkoutRoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutRoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          findMany: {
            args: Prisma.WorkoutRoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>[]
          }
          create: {
            args: Prisma.WorkoutRoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          createMany: {
            args: Prisma.WorkoutRoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutRoutineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>[]
          }
          delete: {
            args: Prisma.WorkoutRoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          update: {
            args: Prisma.WorkoutRoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          deleteMany: {
            args: Prisma.WorkoutRoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutRoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutRoutineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>[]
          }
          upsert: {
            args: Prisma.WorkoutRoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          aggregate: {
            args: Prisma.WorkoutRoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutRoutine>
          }
          groupBy: {
            args: Prisma.WorkoutRoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutRoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutRoutineCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutRoutineCountAggregateOutputType> | number
          }
        }
      }
      RoutineExercise: {
        payload: Prisma.$RoutineExercisePayload<ExtArgs>
        fields: Prisma.RoutineExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          findFirst: {
            args: Prisma.RoutineExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          findMany: {
            args: Prisma.RoutineExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>[]
          }
          create: {
            args: Prisma.RoutineExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          createMany: {
            args: Prisma.RoutineExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>[]
          }
          delete: {
            args: Prisma.RoutineExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          update: {
            args: Prisma.RoutineExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          deleteMany: {
            args: Prisma.RoutineExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutineExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>[]
          }
          upsert: {
            args: Prisma.RoutineExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          aggregate: {
            args: Prisma.RoutineExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutineExercise>
          }
          groupBy: {
            args: Prisma.RoutineExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineExerciseCountAggregateOutputType> | number
          }
        }
      }
      WorkoutSession: {
        payload: Prisma.$WorkoutSessionPayload<ExtArgs>
        fields: Prisma.WorkoutSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          findFirst: {
            args: Prisma.WorkoutSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          findMany: {
            args: Prisma.WorkoutSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>[]
          }
          create: {
            args: Prisma.WorkoutSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          createMany: {
            args: Prisma.WorkoutSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>[]
          }
          delete: {
            args: Prisma.WorkoutSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          update: {
            args: Prisma.WorkoutSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          aggregate: {
            args: Prisma.WorkoutSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutSession>
          }
          groupBy: {
            args: Prisma.WorkoutSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutSessionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutSessionCountAggregateOutputType> | number
          }
        }
      }
      SessionLog: {
        payload: Prisma.$SessionLogPayload<ExtArgs>
        fields: Prisma.SessionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          findFirst: {
            args: Prisma.SessionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          findMany: {
            args: Prisma.SessionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>[]
          }
          create: {
            args: Prisma.SessionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          createMany: {
            args: Prisma.SessionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>[]
          }
          delete: {
            args: Prisma.SessionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          update: {
            args: Prisma.SessionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          deleteMany: {
            args: Prisma.SessionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>[]
          }
          upsert: {
            args: Prisma.SessionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          aggregate: {
            args: Prisma.SessionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionLog>
          }
          groupBy: {
            args: Prisma.SessionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionLogCountArgs<ExtArgs>
            result: $Utils.Optional<SessionLogCountAggregateOutputType> | number
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
    user?: UserOmit
    instructorProfile?: InstructorProfileOmit
    studentProfile?: StudentProfileOmit
    bodyMeasurement?: BodyMeasurementOmit
    exercise?: ExerciseOmit
    workoutPlan?: WorkoutPlanOmit
    workoutRoutine?: WorkoutRoutineOmit
    routineExercise?: RoutineExerciseOmit
    workoutSession?: WorkoutSessionOmit
    sessionLog?: SessionLogOmit
    notification?: NotificationOmit
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
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
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
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type InstructorProfileCountOutputType
   */

  export type InstructorProfileCountOutputType = {
    students: number
    plans: number
  }

  export type InstructorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | InstructorProfileCountOutputTypeCountStudentsArgs
    plans?: boolean | InstructorProfileCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * InstructorProfileCountOutputType without action
   */
  export type InstructorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfileCountOutputType
     */
    select?: InstructorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorProfileCountOutputType without action
   */
  export type InstructorProfileCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
  }

  /**
   * InstructorProfileCountOutputType without action
   */
  export type InstructorProfileCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
  }


  /**
   * Count Type StudentProfileCountOutputType
   */

  export type StudentProfileCountOutputType = {
    plans: number
    workoutSessions: number
    bodyMeasurements: number
  }

  export type StudentProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plans?: boolean | StudentProfileCountOutputTypeCountPlansArgs
    workoutSessions?: boolean | StudentProfileCountOutputTypeCountWorkoutSessionsArgs
    bodyMeasurements?: boolean | StudentProfileCountOutputTypeCountBodyMeasurementsArgs
  }

  // Custom InputTypes
  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfileCountOutputType
     */
    select?: StudentProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountWorkoutSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutSessionWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountBodyMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMeasurementWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    routineExercises: number
    sessionLogs: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routineExercises?: boolean | ExerciseCountOutputTypeCountRoutineExercisesArgs
    sessionLogs?: boolean | ExerciseCountOutputTypeCountSessionLogsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountRoutineExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineExerciseWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountSessionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionLogWhereInput
  }


  /**
   * Count Type WorkoutPlanCountOutputType
   */

  export type WorkoutPlanCountOutputType = {
    students: number
    routines: number
  }

  export type WorkoutPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | WorkoutPlanCountOutputTypeCountStudentsArgs
    routines?: boolean | WorkoutPlanCountOutputTypeCountRoutinesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutPlanCountOutputType without action
   */
  export type WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlanCountOutputType
     */
    select?: WorkoutPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutPlanCountOutputType without action
   */
  export type WorkoutPlanCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
  }

  /**
   * WorkoutPlanCountOutputType without action
   */
  export type WorkoutPlanCountOutputTypeCountRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutRoutineWhereInput
  }


  /**
   * Count Type WorkoutRoutineCountOutputType
   */

  export type WorkoutRoutineCountOutputType = {
    exercises: number
    sessions: number
  }

  export type WorkoutRoutineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutRoutineCountOutputTypeCountExercisesArgs
    sessions?: boolean | WorkoutRoutineCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutRoutineCountOutputType without action
   */
  export type WorkoutRoutineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutineCountOutputType
     */
    select?: WorkoutRoutineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutRoutineCountOutputType without action
   */
  export type WorkoutRoutineCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineExerciseWhereInput
  }

  /**
   * WorkoutRoutineCountOutputType without action
   */
  export type WorkoutRoutineCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutSessionWhereInput
  }


  /**
   * Count Type WorkoutSessionCountOutputType
   */

  export type WorkoutSessionCountOutputType = {
    logs: number
  }

  export type WorkoutSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | WorkoutSessionCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutSessionCountOutputType without action
   */
  export type WorkoutSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSessionCountOutputType
     */
    select?: WorkoutSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutSessionCountOutputType without action
   */
  export type WorkoutSessionCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
    mustChangePassword: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
    mustChangePassword: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    mustChangePassword: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    mustChangePassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    mustChangePassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    mustChangePassword?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    role: string
    mustChangePassword: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    mustChangePassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructorProfile?: boolean | User$instructorProfileArgs<ExtArgs>
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    mustChangePassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    mustChangePassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    mustChangePassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "mustChangePassword" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructorProfile?: boolean | User$instructorProfileArgs<ExtArgs>
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      instructorProfile: Prisma.$InstructorProfilePayload<ExtArgs> | null
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      role: string
      mustChangePassword: boolean
      createdAt: Date
      updatedAt: Date
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    instructorProfile<T extends User$instructorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$instructorProfileArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    studentProfile<T extends User$studentProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$studentProfileArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly mustChangePassword: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.instructorProfile
   */
  export type User$instructorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    where?: InstructorProfileWhereInput
  }

  /**
   * User.studentProfile
   */
  export type User$studentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model InstructorProfile
   */

  export type AggregateInstructorProfile = {
    _count: InstructorProfileCountAggregateOutputType | null
    _min: InstructorProfileMinAggregateOutputType | null
    _max: InstructorProfileMaxAggregateOutputType | null
  }

  export type InstructorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type InstructorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type InstructorProfileCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type InstructorProfileMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InstructorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InstructorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type InstructorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorProfile to aggregate.
     */
    where?: InstructorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorProfiles to fetch.
     */
    orderBy?: InstructorProfileOrderByWithRelationInput | InstructorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstructorProfiles
    **/
    _count?: true | InstructorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorProfileMaxAggregateInputType
  }

  export type GetInstructorProfileAggregateType<T extends InstructorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructorProfile[P]>
      : GetScalarType<T[P], AggregateInstructorProfile[P]>
  }




  export type InstructorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorProfileWhereInput
    orderBy?: InstructorProfileOrderByWithAggregationInput | InstructorProfileOrderByWithAggregationInput[]
    by: InstructorProfileScalarFieldEnum[] | InstructorProfileScalarFieldEnum
    having?: InstructorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorProfileCountAggregateInputType | true
    _min?: InstructorProfileMinAggregateInputType
    _max?: InstructorProfileMaxAggregateInputType
  }

  export type InstructorProfileGroupByOutputType = {
    id: string
    userId: string
    _count: InstructorProfileCountAggregateOutputType | null
    _min: InstructorProfileMinAggregateOutputType | null
    _max: InstructorProfileMaxAggregateOutputType | null
  }

  type GetInstructorProfileGroupByPayload<T extends InstructorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorProfileGroupByOutputType[P]>
        }
      >
    >


  export type InstructorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    students?: boolean | InstructorProfile$studentsArgs<ExtArgs>
    plans?: boolean | InstructorProfile$plansArgs<ExtArgs>
    _count?: boolean | InstructorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorProfile"]>

  export type InstructorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorProfile"]>

  export type InstructorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorProfile"]>

  export type InstructorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type InstructorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["instructorProfile"]>
  export type InstructorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    students?: boolean | InstructorProfile$studentsArgs<ExtArgs>
    plans?: boolean | InstructorProfile$plansArgs<ExtArgs>
    _count?: boolean | InstructorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstructorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InstructorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InstructorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstructorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      students: Prisma.$StudentProfilePayload<ExtArgs>[]
      plans: Prisma.$WorkoutPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["instructorProfile"]>
    composites: {}
  }

  type InstructorProfileGetPayload<S extends boolean | null | undefined | InstructorProfileDefaultArgs> = $Result.GetResult<Prisma.$InstructorProfilePayload, S>

  type InstructorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorProfileCountAggregateInputType | true
    }

  export interface InstructorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstructorProfile'], meta: { name: 'InstructorProfile' } }
    /**
     * Find zero or one InstructorProfile that matches the filter.
     * @param {InstructorProfileFindUniqueArgs} args - Arguments to find a InstructorProfile
     * @example
     * // Get one InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorProfileFindUniqueArgs>(args: SelectSubset<T, InstructorProfileFindUniqueArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstructorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorProfileFindUniqueOrThrowArgs} args - Arguments to find a InstructorProfile
     * @example
     * // Get one InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileFindFirstArgs} args - Arguments to find a InstructorProfile
     * @example
     * // Get one InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorProfileFindFirstArgs>(args?: SelectSubset<T, InstructorProfileFindFirstArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileFindFirstOrThrowArgs} args - Arguments to find a InstructorProfile
     * @example
     * // Get one InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstructorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstructorProfiles
     * const instructorProfiles = await prisma.instructorProfile.findMany()
     * 
     * // Get first 10 InstructorProfiles
     * const instructorProfiles = await prisma.instructorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorProfileWithIdOnly = await prisma.instructorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorProfileFindManyArgs>(args?: SelectSubset<T, InstructorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstructorProfile.
     * @param {InstructorProfileCreateArgs} args - Arguments to create a InstructorProfile.
     * @example
     * // Create one InstructorProfile
     * const InstructorProfile = await prisma.instructorProfile.create({
     *   data: {
     *     // ... data to create a InstructorProfile
     *   }
     * })
     * 
     */
    create<T extends InstructorProfileCreateArgs>(args: SelectSubset<T, InstructorProfileCreateArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstructorProfiles.
     * @param {InstructorProfileCreateManyArgs} args - Arguments to create many InstructorProfiles.
     * @example
     * // Create many InstructorProfiles
     * const instructorProfile = await prisma.instructorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorProfileCreateManyArgs>(args?: SelectSubset<T, InstructorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstructorProfiles and returns the data saved in the database.
     * @param {InstructorProfileCreateManyAndReturnArgs} args - Arguments to create many InstructorProfiles.
     * @example
     * // Create many InstructorProfiles
     * const instructorProfile = await prisma.instructorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstructorProfiles and only return the `id`
     * const instructorProfileWithIdOnly = await prisma.instructorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstructorProfile.
     * @param {InstructorProfileDeleteArgs} args - Arguments to delete one InstructorProfile.
     * @example
     * // Delete one InstructorProfile
     * const InstructorProfile = await prisma.instructorProfile.delete({
     *   where: {
     *     // ... filter to delete one InstructorProfile
     *   }
     * })
     * 
     */
    delete<T extends InstructorProfileDeleteArgs>(args: SelectSubset<T, InstructorProfileDeleteArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstructorProfile.
     * @param {InstructorProfileUpdateArgs} args - Arguments to update one InstructorProfile.
     * @example
     * // Update one InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorProfileUpdateArgs>(args: SelectSubset<T, InstructorProfileUpdateArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstructorProfiles.
     * @param {InstructorProfileDeleteManyArgs} args - Arguments to filter InstructorProfiles to delete.
     * @example
     * // Delete a few InstructorProfiles
     * const { count } = await prisma.instructorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorProfileDeleteManyArgs>(args?: SelectSubset<T, InstructorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstructorProfiles
     * const instructorProfile = await prisma.instructorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorProfileUpdateManyArgs>(args: SelectSubset<T, InstructorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorProfiles and returns the data updated in the database.
     * @param {InstructorProfileUpdateManyAndReturnArgs} args - Arguments to update many InstructorProfiles.
     * @example
     * // Update many InstructorProfiles
     * const instructorProfile = await prisma.instructorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstructorProfiles and only return the `id`
     * const instructorProfileWithIdOnly = await prisma.instructorProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstructorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstructorProfile.
     * @param {InstructorProfileUpsertArgs} args - Arguments to update or create a InstructorProfile.
     * @example
     * // Update or create a InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.upsert({
     *   create: {
     *     // ... data to create a InstructorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstructorProfile we want to update
     *   }
     * })
     */
    upsert<T extends InstructorProfileUpsertArgs>(args: SelectSubset<T, InstructorProfileUpsertArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstructorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileCountArgs} args - Arguments to filter InstructorProfiles to count.
     * @example
     * // Count the number of InstructorProfiles
     * const count = await prisma.instructorProfile.count({
     *   where: {
     *     // ... the filter for the InstructorProfiles we want to count
     *   }
     * })
    **/
    count<T extends InstructorProfileCountArgs>(
      args?: Subset<T, InstructorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstructorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorProfileAggregateArgs>(args: Subset<T, InstructorProfileAggregateArgs>): Prisma.PrismaPromise<GetInstructorProfileAggregateType<T>>

    /**
     * Group by InstructorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileGroupByArgs} args - Group by arguments.
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
      T extends InstructorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorProfileGroupByArgs['orderBy'] }
        : { orderBy?: InstructorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstructorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstructorProfile model
   */
  readonly fields: InstructorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstructorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends InstructorProfile$studentsArgs<ExtArgs> = {}>(args?: Subset<T, InstructorProfile$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends InstructorProfile$plansArgs<ExtArgs> = {}>(args?: Subset<T, InstructorProfile$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InstructorProfile model
   */
  interface InstructorProfileFieldRefs {
    readonly id: FieldRef<"InstructorProfile", 'String'>
    readonly userId: FieldRef<"InstructorProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InstructorProfile findUnique
   */
  export type InstructorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstructorProfile to fetch.
     */
    where: InstructorProfileWhereUniqueInput
  }

  /**
   * InstructorProfile findUniqueOrThrow
   */
  export type InstructorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstructorProfile to fetch.
     */
    where: InstructorProfileWhereUniqueInput
  }

  /**
   * InstructorProfile findFirst
   */
  export type InstructorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstructorProfile to fetch.
     */
    where?: InstructorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorProfiles to fetch.
     */
    orderBy?: InstructorProfileOrderByWithRelationInput | InstructorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorProfiles.
     */
    cursor?: InstructorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorProfiles.
     */
    distinct?: InstructorProfileScalarFieldEnum | InstructorProfileScalarFieldEnum[]
  }

  /**
   * InstructorProfile findFirstOrThrow
   */
  export type InstructorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstructorProfile to fetch.
     */
    where?: InstructorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorProfiles to fetch.
     */
    orderBy?: InstructorProfileOrderByWithRelationInput | InstructorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorProfiles.
     */
    cursor?: InstructorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorProfiles.
     */
    distinct?: InstructorProfileScalarFieldEnum | InstructorProfileScalarFieldEnum[]
  }

  /**
   * InstructorProfile findMany
   */
  export type InstructorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstructorProfiles to fetch.
     */
    where?: InstructorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorProfiles to fetch.
     */
    orderBy?: InstructorProfileOrderByWithRelationInput | InstructorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstructorProfiles.
     */
    cursor?: InstructorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorProfiles.
     */
    skip?: number
    distinct?: InstructorProfileScalarFieldEnum | InstructorProfileScalarFieldEnum[]
  }

  /**
   * InstructorProfile create
   */
  export type InstructorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a InstructorProfile.
     */
    data: XOR<InstructorProfileCreateInput, InstructorProfileUncheckedCreateInput>
  }

  /**
   * InstructorProfile createMany
   */
  export type InstructorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstructorProfiles.
     */
    data: InstructorProfileCreateManyInput | InstructorProfileCreateManyInput[]
  }

  /**
   * InstructorProfile createManyAndReturn
   */
  export type InstructorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many InstructorProfiles.
     */
    data: InstructorProfileCreateManyInput | InstructorProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorProfile update
   */
  export type InstructorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a InstructorProfile.
     */
    data: XOR<InstructorProfileUpdateInput, InstructorProfileUncheckedUpdateInput>
    /**
     * Choose, which InstructorProfile to update.
     */
    where: InstructorProfileWhereUniqueInput
  }

  /**
   * InstructorProfile updateMany
   */
  export type InstructorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstructorProfiles.
     */
    data: XOR<InstructorProfileUpdateManyMutationInput, InstructorProfileUncheckedUpdateManyInput>
    /**
     * Filter which InstructorProfiles to update
     */
    where?: InstructorProfileWhereInput
    /**
     * Limit how many InstructorProfiles to update.
     */
    limit?: number
  }

  /**
   * InstructorProfile updateManyAndReturn
   */
  export type InstructorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * The data used to update InstructorProfiles.
     */
    data: XOR<InstructorProfileUpdateManyMutationInput, InstructorProfileUncheckedUpdateManyInput>
    /**
     * Filter which InstructorProfiles to update
     */
    where?: InstructorProfileWhereInput
    /**
     * Limit how many InstructorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorProfile upsert
   */
  export type InstructorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the InstructorProfile to update in case it exists.
     */
    where: InstructorProfileWhereUniqueInput
    /**
     * In case the InstructorProfile found by the `where` argument doesn't exist, create a new InstructorProfile with this data.
     */
    create: XOR<InstructorProfileCreateInput, InstructorProfileUncheckedCreateInput>
    /**
     * In case the InstructorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorProfileUpdateInput, InstructorProfileUncheckedUpdateInput>
  }

  /**
   * InstructorProfile delete
   */
  export type InstructorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter which InstructorProfile to delete.
     */
    where: InstructorProfileWhereUniqueInput
  }

  /**
   * InstructorProfile deleteMany
   */
  export type InstructorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorProfiles to delete
     */
    where?: InstructorProfileWhereInput
    /**
     * Limit how many InstructorProfiles to delete.
     */
    limit?: number
  }

  /**
   * InstructorProfile.students
   */
  export type InstructorProfile$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    cursor?: StudentProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * InstructorProfile.plans
   */
  export type InstructorProfile$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    cursor?: WorkoutPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * InstructorProfile without action
   */
  export type InstructorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
  }


  /**
   * Model StudentProfile
   */

  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileAvgAggregateOutputType = {
    age: number | null
    height: number | null
  }

  export type StudentProfileSumAggregateOutputType = {
    age: number | null
    height: number | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    instructorId: string | null
    preferredUnit: string | null
    age: number | null
    gender: string | null
    height: number | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    instructorId: string | null
    preferredUnit: string | null
    age: number | null
    gender: string | null
    height: number | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    userId: number
    instructorId: number
    preferredUnit: number
    age: number
    gender: number
    height: number
    _all: number
  }


  export type StudentProfileAvgAggregateInputType = {
    age?: true
    height?: true
  }

  export type StudentProfileSumAggregateInputType = {
    age?: true
    height?: true
  }

  export type StudentProfileMinAggregateInputType = {
    id?: true
    userId?: true
    instructorId?: true
    preferredUnit?: true
    age?: true
    gender?: true
    height?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    instructorId?: true
    preferredUnit?: true
    age?: true
    gender?: true
    height?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    userId?: true
    instructorId?: true
    preferredUnit?: true
    age?: true
    gender?: true
    height?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithAggregationInput | StudentProfileOrderByWithAggregationInput[]
    by: StudentProfileScalarFieldEnum[] | StudentProfileScalarFieldEnum
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _avg?: StudentProfileAvgAggregateInputType
    _sum?: StudentProfileSumAggregateInputType
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }

  export type StudentProfileGroupByOutputType = {
    id: string
    userId: string
    instructorId: string | null
    preferredUnit: string
    age: number | null
    gender: string | null
    height: number | null
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    instructorId?: boolean
    preferredUnit?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | StudentProfile$instructorArgs<ExtArgs>
    plans?: boolean | StudentProfile$plansArgs<ExtArgs>
    workoutSessions?: boolean | StudentProfile$workoutSessionsArgs<ExtArgs>
    bodyMeasurements?: boolean | StudentProfile$bodyMeasurementsArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    instructorId?: boolean
    preferredUnit?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | StudentProfile$instructorArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    instructorId?: boolean
    preferredUnit?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | StudentProfile$instructorArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    instructorId?: boolean
    preferredUnit?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
  }

  export type StudentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "instructorId" | "preferredUnit" | "age" | "gender" | "height", ExtArgs["result"]["studentProfile"]>
  export type StudentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | StudentProfile$instructorArgs<ExtArgs>
    plans?: boolean | StudentProfile$plansArgs<ExtArgs>
    workoutSessions?: boolean | StudentProfile$workoutSessionsArgs<ExtArgs>
    bodyMeasurements?: boolean | StudentProfile$bodyMeasurementsArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | StudentProfile$instructorArgs<ExtArgs>
  }
  export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | StudentProfile$instructorArgs<ExtArgs>
  }

  export type $StudentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      instructor: Prisma.$InstructorProfilePayload<ExtArgs> | null
      plans: Prisma.$WorkoutPlanPayload<ExtArgs>[]
      workoutSessions: Prisma.$WorkoutSessionPayload<ExtArgs>[]
      bodyMeasurements: Prisma.$BodyMeasurementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      instructorId: string | null
      preferredUnit: string
      age: number | null
      gender: string | null
      height: number | null
    }, ExtArgs["result"]["studentProfile"]>
    composites: {}
  }

  type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilePayload, S>

  type StudentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProfileCountAggregateInputType | true
    }

  export interface StudentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'], meta: { name: 'StudentProfile' } }
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
     */
    create<T extends StudentProfileCreateArgs>(args: SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentProfileDeleteArgs>(args: SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfileUpdateArgs>(args: SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
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
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfile model
   */
  readonly fields: StudentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructor<T extends StudentProfile$instructorArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$instructorArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    plans<T extends StudentProfile$plansArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workoutSessions<T extends StudentProfile$workoutSessionsArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$workoutSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bodyMeasurements<T extends StudentProfile$bodyMeasurementsArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$bodyMeasurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StudentProfile model
   */
  interface StudentProfileFieldRefs {
    readonly id: FieldRef<"StudentProfile", 'String'>
    readonly userId: FieldRef<"StudentProfile", 'String'>
    readonly instructorId: FieldRef<"StudentProfile", 'String'>
    readonly preferredUnit: FieldRef<"StudentProfile", 'String'>
    readonly age: FieldRef<"StudentProfile", 'Int'>
    readonly gender: FieldRef<"StudentProfile", 'String'>
    readonly height: FieldRef<"StudentProfile", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfile findUnique
   */
  export type StudentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findFirst
   */
  export type StudentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProfile.
     */
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }

  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
  }

  /**
   * StudentProfile createManyAndReturn
   */
  export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProfile.
     */
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfile updateManyAndReturn
   */
  export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }

  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter which StudentProfile to delete.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentProfile.instructor
   */
  export type StudentProfile$instructorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    where?: InstructorProfileWhereInput
  }

  /**
   * StudentProfile.plans
   */
  export type StudentProfile$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    cursor?: WorkoutPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * StudentProfile.workoutSessions
   */
  export type StudentProfile$workoutSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    where?: WorkoutSessionWhereInput
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    cursor?: WorkoutSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * StudentProfile.bodyMeasurements
   */
  export type StudentProfile$bodyMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    where?: BodyMeasurementWhereInput
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    cursor?: BodyMeasurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * StudentProfile without action
   */
  export type StudentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
  }


  /**
   * Model BodyMeasurement
   */

  export type AggregateBodyMeasurement = {
    _count: BodyMeasurementCountAggregateOutputType | null
    _avg: BodyMeasurementAvgAggregateOutputType | null
    _sum: BodyMeasurementSumAggregateOutputType | null
    _min: BodyMeasurementMinAggregateOutputType | null
    _max: BodyMeasurementMaxAggregateOutputType | null
  }

  export type BodyMeasurementAvgAggregateOutputType = {
    weight: number | null
    bmi: number | null
  }

  export type BodyMeasurementSumAggregateOutputType = {
    weight: number | null
    bmi: number | null
  }

  export type BodyMeasurementMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    date: Date | null
    weight: number | null
    bmi: number | null
  }

  export type BodyMeasurementMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    date: Date | null
    weight: number | null
    bmi: number | null
  }

  export type BodyMeasurementCountAggregateOutputType = {
    id: number
    studentId: number
    date: number
    weight: number
    bmi: number
    _all: number
  }


  export type BodyMeasurementAvgAggregateInputType = {
    weight?: true
    bmi?: true
  }

  export type BodyMeasurementSumAggregateInputType = {
    weight?: true
    bmi?: true
  }

  export type BodyMeasurementMinAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    weight?: true
    bmi?: true
  }

  export type BodyMeasurementMaxAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    weight?: true
    bmi?: true
  }

  export type BodyMeasurementCountAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    weight?: true
    bmi?: true
    _all?: true
  }

  export type BodyMeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMeasurement to aggregate.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyMeasurements
    **/
    _count?: true | BodyMeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BodyMeasurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BodyMeasurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyMeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyMeasurementMaxAggregateInputType
  }

  export type GetBodyMeasurementAggregateType<T extends BodyMeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyMeasurement[P]>
      : GetScalarType<T[P], AggregateBodyMeasurement[P]>
  }




  export type BodyMeasurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMeasurementWhereInput
    orderBy?: BodyMeasurementOrderByWithAggregationInput | BodyMeasurementOrderByWithAggregationInput[]
    by: BodyMeasurementScalarFieldEnum[] | BodyMeasurementScalarFieldEnum
    having?: BodyMeasurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyMeasurementCountAggregateInputType | true
    _avg?: BodyMeasurementAvgAggregateInputType
    _sum?: BodyMeasurementSumAggregateInputType
    _min?: BodyMeasurementMinAggregateInputType
    _max?: BodyMeasurementMaxAggregateInputType
  }

  export type BodyMeasurementGroupByOutputType = {
    id: string
    studentId: string
    date: Date
    weight: number
    bmi: number | null
    _count: BodyMeasurementCountAggregateOutputType | null
    _avg: BodyMeasurementAvgAggregateOutputType | null
    _sum: BodyMeasurementSumAggregateOutputType | null
    _min: BodyMeasurementMinAggregateOutputType | null
    _max: BodyMeasurementMaxAggregateOutputType | null
  }

  type GetBodyMeasurementGroupByPayload<T extends BodyMeasurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BodyMeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyMeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyMeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], BodyMeasurementGroupByOutputType[P]>
        }
      >
    >


  export type BodyMeasurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    weight?: boolean
    bmi?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    weight?: boolean
    bmi?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    weight?: boolean
    bmi?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectScalar = {
    id?: boolean
    studentId?: boolean
    date?: boolean
    weight?: boolean
    bmi?: boolean
  }

  export type BodyMeasurementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "date" | "weight" | "bmi", ExtArgs["result"]["bodyMeasurement"]>
  export type BodyMeasurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type BodyMeasurementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type BodyMeasurementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $BodyMeasurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BodyMeasurement"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      date: Date
      weight: number
      bmi: number | null
    }, ExtArgs["result"]["bodyMeasurement"]>
    composites: {}
  }

  type BodyMeasurementGetPayload<S extends boolean | null | undefined | BodyMeasurementDefaultArgs> = $Result.GetResult<Prisma.$BodyMeasurementPayload, S>

  type BodyMeasurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BodyMeasurementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BodyMeasurementCountAggregateInputType | true
    }

  export interface BodyMeasurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BodyMeasurement'], meta: { name: 'BodyMeasurement' } }
    /**
     * Find zero or one BodyMeasurement that matches the filter.
     * @param {BodyMeasurementFindUniqueArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BodyMeasurementFindUniqueArgs>(args: SelectSubset<T, BodyMeasurementFindUniqueArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BodyMeasurement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BodyMeasurementFindUniqueOrThrowArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BodyMeasurementFindUniqueOrThrowArgs>(args: SelectSubset<T, BodyMeasurementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyMeasurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindFirstArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BodyMeasurementFindFirstArgs>(args?: SelectSubset<T, BodyMeasurementFindFirstArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyMeasurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindFirstOrThrowArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BodyMeasurementFindFirstOrThrowArgs>(args?: SelectSubset<T, BodyMeasurementFindFirstOrThrowArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BodyMeasurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyMeasurements
     * const bodyMeasurements = await prisma.bodyMeasurement.findMany()
     * 
     * // Get first 10 BodyMeasurements
     * const bodyMeasurements = await prisma.bodyMeasurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BodyMeasurementFindManyArgs>(args?: SelectSubset<T, BodyMeasurementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BodyMeasurement.
     * @param {BodyMeasurementCreateArgs} args - Arguments to create a BodyMeasurement.
     * @example
     * // Create one BodyMeasurement
     * const BodyMeasurement = await prisma.bodyMeasurement.create({
     *   data: {
     *     // ... data to create a BodyMeasurement
     *   }
     * })
     * 
     */
    create<T extends BodyMeasurementCreateArgs>(args: SelectSubset<T, BodyMeasurementCreateArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BodyMeasurements.
     * @param {BodyMeasurementCreateManyArgs} args - Arguments to create many BodyMeasurements.
     * @example
     * // Create many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BodyMeasurementCreateManyArgs>(args?: SelectSubset<T, BodyMeasurementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BodyMeasurements and returns the data saved in the database.
     * @param {BodyMeasurementCreateManyAndReturnArgs} args - Arguments to create many BodyMeasurements.
     * @example
     * // Create many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BodyMeasurements and only return the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BodyMeasurementCreateManyAndReturnArgs>(args?: SelectSubset<T, BodyMeasurementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BodyMeasurement.
     * @param {BodyMeasurementDeleteArgs} args - Arguments to delete one BodyMeasurement.
     * @example
     * // Delete one BodyMeasurement
     * const BodyMeasurement = await prisma.bodyMeasurement.delete({
     *   where: {
     *     // ... filter to delete one BodyMeasurement
     *   }
     * })
     * 
     */
    delete<T extends BodyMeasurementDeleteArgs>(args: SelectSubset<T, BodyMeasurementDeleteArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BodyMeasurement.
     * @param {BodyMeasurementUpdateArgs} args - Arguments to update one BodyMeasurement.
     * @example
     * // Update one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BodyMeasurementUpdateArgs>(args: SelectSubset<T, BodyMeasurementUpdateArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BodyMeasurements.
     * @param {BodyMeasurementDeleteManyArgs} args - Arguments to filter BodyMeasurements to delete.
     * @example
     * // Delete a few BodyMeasurements
     * const { count } = await prisma.bodyMeasurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BodyMeasurementDeleteManyArgs>(args?: SelectSubset<T, BodyMeasurementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMeasurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BodyMeasurementUpdateManyArgs>(args: SelectSubset<T, BodyMeasurementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMeasurements and returns the data updated in the database.
     * @param {BodyMeasurementUpdateManyAndReturnArgs} args - Arguments to update many BodyMeasurements.
     * @example
     * // Update many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BodyMeasurements and only return the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.updateManyAndReturn({
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
    updateManyAndReturn<T extends BodyMeasurementUpdateManyAndReturnArgs>(args: SelectSubset<T, BodyMeasurementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BodyMeasurement.
     * @param {BodyMeasurementUpsertArgs} args - Arguments to update or create a BodyMeasurement.
     * @example
     * // Update or create a BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.upsert({
     *   create: {
     *     // ... data to create a BodyMeasurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyMeasurement we want to update
     *   }
     * })
     */
    upsert<T extends BodyMeasurementUpsertArgs>(args: SelectSubset<T, BodyMeasurementUpsertArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BodyMeasurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementCountArgs} args - Arguments to filter BodyMeasurements to count.
     * @example
     * // Count the number of BodyMeasurements
     * const count = await prisma.bodyMeasurement.count({
     *   where: {
     *     // ... the filter for the BodyMeasurements we want to count
     *   }
     * })
    **/
    count<T extends BodyMeasurementCountArgs>(
      args?: Subset<T, BodyMeasurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyMeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyMeasurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BodyMeasurementAggregateArgs>(args: Subset<T, BodyMeasurementAggregateArgs>): Prisma.PrismaPromise<GetBodyMeasurementAggregateType<T>>

    /**
     * Group by BodyMeasurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementGroupByArgs} args - Group by arguments.
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
      T extends BodyMeasurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyMeasurementGroupByArgs['orderBy'] }
        : { orderBy?: BodyMeasurementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BodyMeasurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BodyMeasurement model
   */
  readonly fields: BodyMeasurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyMeasurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BodyMeasurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BodyMeasurement model
   */
  interface BodyMeasurementFieldRefs {
    readonly id: FieldRef<"BodyMeasurement", 'String'>
    readonly studentId: FieldRef<"BodyMeasurement", 'String'>
    readonly date: FieldRef<"BodyMeasurement", 'DateTime'>
    readonly weight: FieldRef<"BodyMeasurement", 'Float'>
    readonly bmi: FieldRef<"BodyMeasurement", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * BodyMeasurement findUnique
   */
  export type BodyMeasurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement findUniqueOrThrow
   */
  export type BodyMeasurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement findFirst
   */
  export type BodyMeasurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMeasurements.
     */
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement findFirstOrThrow
   */
  export type BodyMeasurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMeasurements.
     */
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement findMany
   */
  export type BodyMeasurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurements to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement create
   */
  export type BodyMeasurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The data needed to create a BodyMeasurement.
     */
    data: XOR<BodyMeasurementCreateInput, BodyMeasurementUncheckedCreateInput>
  }

  /**
   * BodyMeasurement createMany
   */
  export type BodyMeasurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BodyMeasurements.
     */
    data: BodyMeasurementCreateManyInput | BodyMeasurementCreateManyInput[]
  }

  /**
   * BodyMeasurement createManyAndReturn
   */
  export type BodyMeasurementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * The data used to create many BodyMeasurements.
     */
    data: BodyMeasurementCreateManyInput | BodyMeasurementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyMeasurement update
   */
  export type BodyMeasurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The data needed to update a BodyMeasurement.
     */
    data: XOR<BodyMeasurementUpdateInput, BodyMeasurementUncheckedUpdateInput>
    /**
     * Choose, which BodyMeasurement to update.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement updateMany
   */
  export type BodyMeasurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BodyMeasurements.
     */
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyInput>
    /**
     * Filter which BodyMeasurements to update
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to update.
     */
    limit?: number
  }

  /**
   * BodyMeasurement updateManyAndReturn
   */
  export type BodyMeasurementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * The data used to update BodyMeasurements.
     */
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyInput>
    /**
     * Filter which BodyMeasurements to update
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyMeasurement upsert
   */
  export type BodyMeasurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The filter to search for the BodyMeasurement to update in case it exists.
     */
    where: BodyMeasurementWhereUniqueInput
    /**
     * In case the BodyMeasurement found by the `where` argument doesn't exist, create a new BodyMeasurement with this data.
     */
    create: XOR<BodyMeasurementCreateInput, BodyMeasurementUncheckedCreateInput>
    /**
     * In case the BodyMeasurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BodyMeasurementUpdateInput, BodyMeasurementUncheckedUpdateInput>
  }

  /**
   * BodyMeasurement delete
   */
  export type BodyMeasurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter which BodyMeasurement to delete.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement deleteMany
   */
  export type BodyMeasurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMeasurements to delete
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to delete.
     */
    limit?: number
  }

  /**
   * BodyMeasurement without action
   */
  export type BodyMeasurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    muscleGroup: string | null
    VideoUrl: string | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    muscleGroup: string | null
    VideoUrl: string | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    muscleGroup: number
    VideoUrl: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscleGroup?: true
    VideoUrl?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscleGroup?: true
    VideoUrl?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscleGroup?: true
    VideoUrl?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    name: string
    description: string | null
    muscleGroup: string | null
    VideoUrl: string | null
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroup?: boolean
    VideoUrl?: boolean
    routineExercises?: boolean | Exercise$routineExercisesArgs<ExtArgs>
    sessionLogs?: boolean | Exercise$sessionLogsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroup?: boolean
    VideoUrl?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroup?: boolean
    VideoUrl?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroup?: boolean
    VideoUrl?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "muscleGroup" | "VideoUrl", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routineExercises?: boolean | Exercise$routineExercisesArgs<ExtArgs>
    sessionLogs?: boolean | Exercise$sessionLogsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      routineExercises: Prisma.$RoutineExercisePayload<ExtArgs>[]
      sessionLogs: Prisma.$SessionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      muscleGroup: string | null
      VideoUrl: string | null
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routineExercises<T extends Exercise$routineExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$routineExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionLogs<T extends Exercise$sessionLogsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$sessionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly description: FieldRef<"Exercise", 'String'>
    readonly muscleGroup: FieldRef<"Exercise", 'String'>
    readonly VideoUrl: FieldRef<"Exercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.routineExercises
   */
  export type Exercise$routineExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    where?: RoutineExerciseWhereInput
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    cursor?: RoutineExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineExerciseScalarFieldEnum | RoutineExerciseScalarFieldEnum[]
  }

  /**
   * Exercise.sessionLogs
   */
  export type Exercise$sessionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    where?: SessionLogWhereInput
    orderBy?: SessionLogOrderByWithRelationInput | SessionLogOrderByWithRelationInput[]
    cursor?: SessionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionLogScalarFieldEnum | SessionLogScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutPlan
   */

  export type AggregateWorkoutPlan = {
    _count: WorkoutPlanCountAggregateOutputType | null
    _min: WorkoutPlanMinAggregateOutputType | null
    _max: WorkoutPlanMaxAggregateOutputType | null
  }

  export type WorkoutPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    instructorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    instructorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutPlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    instructorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkoutPlanMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutPlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutPlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkoutPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutPlan to aggregate.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutPlans
    **/
    _count?: true | WorkoutPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutPlanMaxAggregateInputType
  }

  export type GetWorkoutPlanAggregateType<T extends WorkoutPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutPlan[P]>
      : GetScalarType<T[P], AggregateWorkoutPlan[P]>
  }




  export type WorkoutPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithAggregationInput | WorkoutPlanOrderByWithAggregationInput[]
    by: WorkoutPlanScalarFieldEnum[] | WorkoutPlanScalarFieldEnum
    having?: WorkoutPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutPlanCountAggregateInputType | true
    _min?: WorkoutPlanMinAggregateInputType
    _max?: WorkoutPlanMaxAggregateInputType
  }

  export type WorkoutPlanGroupByOutputType = {
    id: string
    name: string
    description: string | null
    instructorId: string
    createdAt: Date
    updatedAt: Date
    _count: WorkoutPlanCountAggregateOutputType | null
    _min: WorkoutPlanMinAggregateOutputType | null
    _max: WorkoutPlanMaxAggregateOutputType | null
  }

  type GetWorkoutPlanGroupByPayload<T extends WorkoutPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutPlanGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutPlanGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorProfileDefaultArgs<ExtArgs>
    students?: boolean | WorkoutPlan$studentsArgs<ExtArgs>
    routines?: boolean | WorkoutPlan$routinesArgs<ExtArgs>
    _count?: boolean | WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkoutPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "instructorId" | "createdAt" | "updatedAt", ExtArgs["result"]["workoutPlan"]>
  export type WorkoutPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorProfileDefaultArgs<ExtArgs>
    students?: boolean | WorkoutPlan$studentsArgs<ExtArgs>
    routines?: boolean | WorkoutPlan$routinesArgs<ExtArgs>
    _count?: boolean | WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorProfileDefaultArgs<ExtArgs>
  }
  export type WorkoutPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorProfileDefaultArgs<ExtArgs>
  }

  export type $WorkoutPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutPlan"
    objects: {
      instructor: Prisma.$InstructorProfilePayload<ExtArgs>
      students: Prisma.$StudentProfilePayload<ExtArgs>[]
      routines: Prisma.$WorkoutRoutinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      instructorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workoutPlan"]>
    composites: {}
  }

  type WorkoutPlanGetPayload<S extends boolean | null | undefined | WorkoutPlanDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPlanPayload, S>

  type WorkoutPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutPlanCountAggregateInputType | true
    }

  export interface WorkoutPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutPlan'], meta: { name: 'WorkoutPlan' } }
    /**
     * Find zero or one WorkoutPlan that matches the filter.
     * @param {WorkoutPlanFindUniqueArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutPlanFindUniqueArgs>(args: SelectSubset<T, WorkoutPlanFindUniqueArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutPlanFindUniqueOrThrowArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindFirstArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutPlanFindFirstArgs>(args?: SelectSubset<T, WorkoutPlanFindFirstArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindFirstOrThrowArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutPlans
     * const workoutPlans = await prisma.workoutPlan.findMany()
     * 
     * // Get first 10 WorkoutPlans
     * const workoutPlans = await prisma.workoutPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutPlanFindManyArgs>(args?: SelectSubset<T, WorkoutPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutPlan.
     * @param {WorkoutPlanCreateArgs} args - Arguments to create a WorkoutPlan.
     * @example
     * // Create one WorkoutPlan
     * const WorkoutPlan = await prisma.workoutPlan.create({
     *   data: {
     *     // ... data to create a WorkoutPlan
     *   }
     * })
     * 
     */
    create<T extends WorkoutPlanCreateArgs>(args: SelectSubset<T, WorkoutPlanCreateArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutPlans.
     * @param {WorkoutPlanCreateManyArgs} args - Arguments to create many WorkoutPlans.
     * @example
     * // Create many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutPlanCreateManyArgs>(args?: SelectSubset<T, WorkoutPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutPlans and returns the data saved in the database.
     * @param {WorkoutPlanCreateManyAndReturnArgs} args - Arguments to create many WorkoutPlans.
     * @example
     * // Create many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutPlans and only return the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutPlan.
     * @param {WorkoutPlanDeleteArgs} args - Arguments to delete one WorkoutPlan.
     * @example
     * // Delete one WorkoutPlan
     * const WorkoutPlan = await prisma.workoutPlan.delete({
     *   where: {
     *     // ... filter to delete one WorkoutPlan
     *   }
     * })
     * 
     */
    delete<T extends WorkoutPlanDeleteArgs>(args: SelectSubset<T, WorkoutPlanDeleteArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutPlan.
     * @param {WorkoutPlanUpdateArgs} args - Arguments to update one WorkoutPlan.
     * @example
     * // Update one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutPlanUpdateArgs>(args: SelectSubset<T, WorkoutPlanUpdateArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutPlans.
     * @param {WorkoutPlanDeleteManyArgs} args - Arguments to filter WorkoutPlans to delete.
     * @example
     * // Delete a few WorkoutPlans
     * const { count } = await prisma.workoutPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutPlanDeleteManyArgs>(args?: SelectSubset<T, WorkoutPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutPlanUpdateManyArgs>(args: SelectSubset<T, WorkoutPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutPlans and returns the data updated in the database.
     * @param {WorkoutPlanUpdateManyAndReturnArgs} args - Arguments to update many WorkoutPlans.
     * @example
     * // Update many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutPlans and only return the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutPlan.
     * @param {WorkoutPlanUpsertArgs} args - Arguments to update or create a WorkoutPlan.
     * @example
     * // Update or create a WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.upsert({
     *   create: {
     *     // ... data to create a WorkoutPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutPlan we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutPlanUpsertArgs>(args: SelectSubset<T, WorkoutPlanUpsertArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanCountArgs} args - Arguments to filter WorkoutPlans to count.
     * @example
     * // Count the number of WorkoutPlans
     * const count = await prisma.workoutPlan.count({
     *   where: {
     *     // ... the filter for the WorkoutPlans we want to count
     *   }
     * })
    **/
    count<T extends WorkoutPlanCountArgs>(
      args?: Subset<T, WorkoutPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutPlanAggregateArgs>(args: Subset<T, WorkoutPlanAggregateArgs>): Prisma.PrismaPromise<GetWorkoutPlanAggregateType<T>>

    /**
     * Group by WorkoutPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanGroupByArgs} args - Group by arguments.
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
      T extends WorkoutPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutPlanGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutPlan model
   */
  readonly fields: WorkoutPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends InstructorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorProfileDefaultArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends WorkoutPlan$studentsArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutPlan$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routines<T extends WorkoutPlan$routinesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutPlan$routinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkoutPlan model
   */
  interface WorkoutPlanFieldRefs {
    readonly id: FieldRef<"WorkoutPlan", 'String'>
    readonly name: FieldRef<"WorkoutPlan", 'String'>
    readonly description: FieldRef<"WorkoutPlan", 'String'>
    readonly instructorId: FieldRef<"WorkoutPlan", 'String'>
    readonly createdAt: FieldRef<"WorkoutPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkoutPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutPlan findUnique
   */
  export type WorkoutPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan findUniqueOrThrow
   */
  export type WorkoutPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan findFirst
   */
  export type WorkoutPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutPlans.
     */
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan findFirstOrThrow
   */
  export type WorkoutPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutPlans.
     */
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan findMany
   */
  export type WorkoutPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlans to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan create
   */
  export type WorkoutPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutPlan.
     */
    data: XOR<WorkoutPlanCreateInput, WorkoutPlanUncheckedCreateInput>
  }

  /**
   * WorkoutPlan createMany
   */
  export type WorkoutPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutPlans.
     */
    data: WorkoutPlanCreateManyInput | WorkoutPlanCreateManyInput[]
  }

  /**
   * WorkoutPlan createManyAndReturn
   */
  export type WorkoutPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutPlans.
     */
    data: WorkoutPlanCreateManyInput | WorkoutPlanCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutPlan update
   */
  export type WorkoutPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutPlan.
     */
    data: XOR<WorkoutPlanUpdateInput, WorkoutPlanUncheckedUpdateInput>
    /**
     * Choose, which WorkoutPlan to update.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan updateMany
   */
  export type WorkoutPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutPlans.
     */
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutPlans to update
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to update.
     */
    limit?: number
  }

  /**
   * WorkoutPlan updateManyAndReturn
   */
  export type WorkoutPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutPlans.
     */
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutPlans to update
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutPlan upsert
   */
  export type WorkoutPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutPlan to update in case it exists.
     */
    where: WorkoutPlanWhereUniqueInput
    /**
     * In case the WorkoutPlan found by the `where` argument doesn't exist, create a new WorkoutPlan with this data.
     */
    create: XOR<WorkoutPlanCreateInput, WorkoutPlanUncheckedCreateInput>
    /**
     * In case the WorkoutPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutPlanUpdateInput, WorkoutPlanUncheckedUpdateInput>
  }

  /**
   * WorkoutPlan delete
   */
  export type WorkoutPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter which WorkoutPlan to delete.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan deleteMany
   */
  export type WorkoutPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutPlans to delete
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to delete.
     */
    limit?: number
  }

  /**
   * WorkoutPlan.students
   */
  export type WorkoutPlan$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    cursor?: StudentProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * WorkoutPlan.routines
   */
  export type WorkoutPlan$routinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    where?: WorkoutRoutineWhereInput
    orderBy?: WorkoutRoutineOrderByWithRelationInput | WorkoutRoutineOrderByWithRelationInput[]
    cursor?: WorkoutRoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutRoutineScalarFieldEnum | WorkoutRoutineScalarFieldEnum[]
  }

  /**
   * WorkoutPlan without action
   */
  export type WorkoutPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutRoutine
   */

  export type AggregateWorkoutRoutine = {
    _count: WorkoutRoutineCountAggregateOutputType | null
    _min: WorkoutRoutineMinAggregateOutputType | null
    _max: WorkoutRoutineMaxAggregateOutputType | null
  }

  export type WorkoutRoutineMinAggregateOutputType = {
    id: string | null
    planId: string | null
    name: string | null
  }

  export type WorkoutRoutineMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    name: string | null
  }

  export type WorkoutRoutineCountAggregateOutputType = {
    id: number
    planId: number
    name: number
    _all: number
  }


  export type WorkoutRoutineMinAggregateInputType = {
    id?: true
    planId?: true
    name?: true
  }

  export type WorkoutRoutineMaxAggregateInputType = {
    id?: true
    planId?: true
    name?: true
  }

  export type WorkoutRoutineCountAggregateInputType = {
    id?: true
    planId?: true
    name?: true
    _all?: true
  }

  export type WorkoutRoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutRoutine to aggregate.
     */
    where?: WorkoutRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRoutines to fetch.
     */
    orderBy?: WorkoutRoutineOrderByWithRelationInput | WorkoutRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutRoutines
    **/
    _count?: true | WorkoutRoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutRoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutRoutineMaxAggregateInputType
  }

  export type GetWorkoutRoutineAggregateType<T extends WorkoutRoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutRoutine[P]>
      : GetScalarType<T[P], AggregateWorkoutRoutine[P]>
  }




  export type WorkoutRoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutRoutineWhereInput
    orderBy?: WorkoutRoutineOrderByWithAggregationInput | WorkoutRoutineOrderByWithAggregationInput[]
    by: WorkoutRoutineScalarFieldEnum[] | WorkoutRoutineScalarFieldEnum
    having?: WorkoutRoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutRoutineCountAggregateInputType | true
    _min?: WorkoutRoutineMinAggregateInputType
    _max?: WorkoutRoutineMaxAggregateInputType
  }

  export type WorkoutRoutineGroupByOutputType = {
    id: string
    planId: string
    name: string
    _count: WorkoutRoutineCountAggregateOutputType | null
    _min: WorkoutRoutineMinAggregateOutputType | null
    _max: WorkoutRoutineMaxAggregateOutputType | null
  }

  type GetWorkoutRoutineGroupByPayload<T extends WorkoutRoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutRoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutRoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutRoutineGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutRoutineGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutRoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    name?: boolean
    plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
    exercises?: boolean | WorkoutRoutine$exercisesArgs<ExtArgs>
    sessions?: boolean | WorkoutRoutine$sessionsArgs<ExtArgs>
    _count?: boolean | WorkoutRoutineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutRoutine"]>

  export type WorkoutRoutineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    name?: boolean
    plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutRoutine"]>

  export type WorkoutRoutineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    name?: boolean
    plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutRoutine"]>

  export type WorkoutRoutineSelectScalar = {
    id?: boolean
    planId?: boolean
    name?: boolean
  }

  export type WorkoutRoutineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "name", ExtArgs["result"]["workoutRoutine"]>
  export type WorkoutRoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
    exercises?: boolean | WorkoutRoutine$exercisesArgs<ExtArgs>
    sessions?: boolean | WorkoutRoutine$sessionsArgs<ExtArgs>
    _count?: boolean | WorkoutRoutineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutRoutineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }
  export type WorkoutRoutineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }

  export type $WorkoutRoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutRoutine"
    objects: {
      plan: Prisma.$WorkoutPlanPayload<ExtArgs>
      exercises: Prisma.$RoutineExercisePayload<ExtArgs>[]
      sessions: Prisma.$WorkoutSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      name: string
    }, ExtArgs["result"]["workoutRoutine"]>
    composites: {}
  }

  type WorkoutRoutineGetPayload<S extends boolean | null | undefined | WorkoutRoutineDefaultArgs> = $Result.GetResult<Prisma.$WorkoutRoutinePayload, S>

  type WorkoutRoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutRoutineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutRoutineCountAggregateInputType | true
    }

  export interface WorkoutRoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutRoutine'], meta: { name: 'WorkoutRoutine' } }
    /**
     * Find zero or one WorkoutRoutine that matches the filter.
     * @param {WorkoutRoutineFindUniqueArgs} args - Arguments to find a WorkoutRoutine
     * @example
     * // Get one WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutRoutineFindUniqueArgs>(args: SelectSubset<T, WorkoutRoutineFindUniqueArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutRoutine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutRoutineFindUniqueOrThrowArgs} args - Arguments to find a WorkoutRoutine
     * @example
     * // Get one WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutRoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutRoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutRoutine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineFindFirstArgs} args - Arguments to find a WorkoutRoutine
     * @example
     * // Get one WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutRoutineFindFirstArgs>(args?: SelectSubset<T, WorkoutRoutineFindFirstArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutRoutine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineFindFirstOrThrowArgs} args - Arguments to find a WorkoutRoutine
     * @example
     * // Get one WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutRoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutRoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutRoutines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutRoutines
     * const workoutRoutines = await prisma.workoutRoutine.findMany()
     * 
     * // Get first 10 WorkoutRoutines
     * const workoutRoutines = await prisma.workoutRoutine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutRoutineWithIdOnly = await prisma.workoutRoutine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutRoutineFindManyArgs>(args?: SelectSubset<T, WorkoutRoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutRoutine.
     * @param {WorkoutRoutineCreateArgs} args - Arguments to create a WorkoutRoutine.
     * @example
     * // Create one WorkoutRoutine
     * const WorkoutRoutine = await prisma.workoutRoutine.create({
     *   data: {
     *     // ... data to create a WorkoutRoutine
     *   }
     * })
     * 
     */
    create<T extends WorkoutRoutineCreateArgs>(args: SelectSubset<T, WorkoutRoutineCreateArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutRoutines.
     * @param {WorkoutRoutineCreateManyArgs} args - Arguments to create many WorkoutRoutines.
     * @example
     * // Create many WorkoutRoutines
     * const workoutRoutine = await prisma.workoutRoutine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutRoutineCreateManyArgs>(args?: SelectSubset<T, WorkoutRoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutRoutines and returns the data saved in the database.
     * @param {WorkoutRoutineCreateManyAndReturnArgs} args - Arguments to create many WorkoutRoutines.
     * @example
     * // Create many WorkoutRoutines
     * const workoutRoutine = await prisma.workoutRoutine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutRoutines and only return the `id`
     * const workoutRoutineWithIdOnly = await prisma.workoutRoutine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutRoutineCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutRoutineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutRoutine.
     * @param {WorkoutRoutineDeleteArgs} args - Arguments to delete one WorkoutRoutine.
     * @example
     * // Delete one WorkoutRoutine
     * const WorkoutRoutine = await prisma.workoutRoutine.delete({
     *   where: {
     *     // ... filter to delete one WorkoutRoutine
     *   }
     * })
     * 
     */
    delete<T extends WorkoutRoutineDeleteArgs>(args: SelectSubset<T, WorkoutRoutineDeleteArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutRoutine.
     * @param {WorkoutRoutineUpdateArgs} args - Arguments to update one WorkoutRoutine.
     * @example
     * // Update one WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutRoutineUpdateArgs>(args: SelectSubset<T, WorkoutRoutineUpdateArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutRoutines.
     * @param {WorkoutRoutineDeleteManyArgs} args - Arguments to filter WorkoutRoutines to delete.
     * @example
     * // Delete a few WorkoutRoutines
     * const { count } = await prisma.workoutRoutine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutRoutineDeleteManyArgs>(args?: SelectSubset<T, WorkoutRoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutRoutines
     * const workoutRoutine = await prisma.workoutRoutine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutRoutineUpdateManyArgs>(args: SelectSubset<T, WorkoutRoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutRoutines and returns the data updated in the database.
     * @param {WorkoutRoutineUpdateManyAndReturnArgs} args - Arguments to update many WorkoutRoutines.
     * @example
     * // Update many WorkoutRoutines
     * const workoutRoutine = await prisma.workoutRoutine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutRoutines and only return the `id`
     * const workoutRoutineWithIdOnly = await prisma.workoutRoutine.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutRoutineUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutRoutineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutRoutine.
     * @param {WorkoutRoutineUpsertArgs} args - Arguments to update or create a WorkoutRoutine.
     * @example
     * // Update or create a WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.upsert({
     *   create: {
     *     // ... data to create a WorkoutRoutine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutRoutine we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutRoutineUpsertArgs>(args: SelectSubset<T, WorkoutRoutineUpsertArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineCountArgs} args - Arguments to filter WorkoutRoutines to count.
     * @example
     * // Count the number of WorkoutRoutines
     * const count = await prisma.workoutRoutine.count({
     *   where: {
     *     // ... the filter for the WorkoutRoutines we want to count
     *   }
     * })
    **/
    count<T extends WorkoutRoutineCountArgs>(
      args?: Subset<T, WorkoutRoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutRoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutRoutineAggregateArgs>(args: Subset<T, WorkoutRoutineAggregateArgs>): Prisma.PrismaPromise<GetWorkoutRoutineAggregateType<T>>

    /**
     * Group by WorkoutRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineGroupByArgs} args - Group by arguments.
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
      T extends WorkoutRoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutRoutineGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutRoutineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutRoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutRoutine model
   */
  readonly fields: WorkoutRoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutRoutine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutRoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends WorkoutPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutPlanDefaultArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends WorkoutRoutine$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutRoutine$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends WorkoutRoutine$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutRoutine$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkoutRoutine model
   */
  interface WorkoutRoutineFieldRefs {
    readonly id: FieldRef<"WorkoutRoutine", 'String'>
    readonly planId: FieldRef<"WorkoutRoutine", 'String'>
    readonly name: FieldRef<"WorkoutRoutine", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutRoutine findUnique
   */
  export type WorkoutRoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutRoutine to fetch.
     */
    where: WorkoutRoutineWhereUniqueInput
  }

  /**
   * WorkoutRoutine findUniqueOrThrow
   */
  export type WorkoutRoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutRoutine to fetch.
     */
    where: WorkoutRoutineWhereUniqueInput
  }

  /**
   * WorkoutRoutine findFirst
   */
  export type WorkoutRoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutRoutine to fetch.
     */
    where?: WorkoutRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRoutines to fetch.
     */
    orderBy?: WorkoutRoutineOrderByWithRelationInput | WorkoutRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutRoutines.
     */
    cursor?: WorkoutRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutRoutines.
     */
    distinct?: WorkoutRoutineScalarFieldEnum | WorkoutRoutineScalarFieldEnum[]
  }

  /**
   * WorkoutRoutine findFirstOrThrow
   */
  export type WorkoutRoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutRoutine to fetch.
     */
    where?: WorkoutRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRoutines to fetch.
     */
    orderBy?: WorkoutRoutineOrderByWithRelationInput | WorkoutRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutRoutines.
     */
    cursor?: WorkoutRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutRoutines.
     */
    distinct?: WorkoutRoutineScalarFieldEnum | WorkoutRoutineScalarFieldEnum[]
  }

  /**
   * WorkoutRoutine findMany
   */
  export type WorkoutRoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutRoutines to fetch.
     */
    where?: WorkoutRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRoutines to fetch.
     */
    orderBy?: WorkoutRoutineOrderByWithRelationInput | WorkoutRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutRoutines.
     */
    cursor?: WorkoutRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRoutines.
     */
    skip?: number
    distinct?: WorkoutRoutineScalarFieldEnum | WorkoutRoutineScalarFieldEnum[]
  }

  /**
   * WorkoutRoutine create
   */
  export type WorkoutRoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutRoutine.
     */
    data: XOR<WorkoutRoutineCreateInput, WorkoutRoutineUncheckedCreateInput>
  }

  /**
   * WorkoutRoutine createMany
   */
  export type WorkoutRoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutRoutines.
     */
    data: WorkoutRoutineCreateManyInput | WorkoutRoutineCreateManyInput[]
  }

  /**
   * WorkoutRoutine createManyAndReturn
   */
  export type WorkoutRoutineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutRoutines.
     */
    data: WorkoutRoutineCreateManyInput | WorkoutRoutineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutRoutine update
   */
  export type WorkoutRoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutRoutine.
     */
    data: XOR<WorkoutRoutineUpdateInput, WorkoutRoutineUncheckedUpdateInput>
    /**
     * Choose, which WorkoutRoutine to update.
     */
    where: WorkoutRoutineWhereUniqueInput
  }

  /**
   * WorkoutRoutine updateMany
   */
  export type WorkoutRoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutRoutines.
     */
    data: XOR<WorkoutRoutineUpdateManyMutationInput, WorkoutRoutineUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutRoutines to update
     */
    where?: WorkoutRoutineWhereInput
    /**
     * Limit how many WorkoutRoutines to update.
     */
    limit?: number
  }

  /**
   * WorkoutRoutine updateManyAndReturn
   */
  export type WorkoutRoutineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutRoutines.
     */
    data: XOR<WorkoutRoutineUpdateManyMutationInput, WorkoutRoutineUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutRoutines to update
     */
    where?: WorkoutRoutineWhereInput
    /**
     * Limit how many WorkoutRoutines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutRoutine upsert
   */
  export type WorkoutRoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutRoutine to update in case it exists.
     */
    where: WorkoutRoutineWhereUniqueInput
    /**
     * In case the WorkoutRoutine found by the `where` argument doesn't exist, create a new WorkoutRoutine with this data.
     */
    create: XOR<WorkoutRoutineCreateInput, WorkoutRoutineUncheckedCreateInput>
    /**
     * In case the WorkoutRoutine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutRoutineUpdateInput, WorkoutRoutineUncheckedUpdateInput>
  }

  /**
   * WorkoutRoutine delete
   */
  export type WorkoutRoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    /**
     * Filter which WorkoutRoutine to delete.
     */
    where: WorkoutRoutineWhereUniqueInput
  }

  /**
   * WorkoutRoutine deleteMany
   */
  export type WorkoutRoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutRoutines to delete
     */
    where?: WorkoutRoutineWhereInput
    /**
     * Limit how many WorkoutRoutines to delete.
     */
    limit?: number
  }

  /**
   * WorkoutRoutine.exercises
   */
  export type WorkoutRoutine$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    where?: RoutineExerciseWhereInput
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    cursor?: RoutineExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineExerciseScalarFieldEnum | RoutineExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutRoutine.sessions
   */
  export type WorkoutRoutine$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    where?: WorkoutSessionWhereInput
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    cursor?: WorkoutSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * WorkoutRoutine without action
   */
  export type WorkoutRoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
  }


  /**
   * Model RoutineExercise
   */

  export type AggregateRoutineExercise = {
    _count: RoutineExerciseCountAggregateOutputType | null
    _avg: RoutineExerciseAvgAggregateOutputType | null
    _sum: RoutineExerciseSumAggregateOutputType | null
    _min: RoutineExerciseMinAggregateOutputType | null
    _max: RoutineExerciseMaxAggregateOutputType | null
  }

  export type RoutineExerciseAvgAggregateOutputType = {
    sets: number | null
    reps: number | null
    rpe: number | null
    restTime: number | null
    order: number | null
  }

  export type RoutineExerciseSumAggregateOutputType = {
    sets: number | null
    reps: number | null
    rpe: number | null
    restTime: number | null
    order: number | null
  }

  export type RoutineExerciseMinAggregateOutputType = {
    id: string | null
    routineId: string | null
    exerciseId: string | null
    sets: number | null
    reps: number | null
    rpe: number | null
    restTime: number | null
    order: number | null
  }

  export type RoutineExerciseMaxAggregateOutputType = {
    id: string | null
    routineId: string | null
    exerciseId: string | null
    sets: number | null
    reps: number | null
    rpe: number | null
    restTime: number | null
    order: number | null
  }

  export type RoutineExerciseCountAggregateOutputType = {
    id: number
    routineId: number
    exerciseId: number
    sets: number
    reps: number
    rpe: number
    restTime: number
    order: number
    _all: number
  }


  export type RoutineExerciseAvgAggregateInputType = {
    sets?: true
    reps?: true
    rpe?: true
    restTime?: true
    order?: true
  }

  export type RoutineExerciseSumAggregateInputType = {
    sets?: true
    reps?: true
    rpe?: true
    restTime?: true
    order?: true
  }

  export type RoutineExerciseMinAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    sets?: true
    reps?: true
    rpe?: true
    restTime?: true
    order?: true
  }

  export type RoutineExerciseMaxAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    sets?: true
    reps?: true
    rpe?: true
    restTime?: true
    order?: true
  }

  export type RoutineExerciseCountAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    sets?: true
    reps?: true
    rpe?: true
    restTime?: true
    order?: true
    _all?: true
  }

  export type RoutineExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineExercise to aggregate.
     */
    where?: RoutineExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercises to fetch.
     */
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutineExercises
    **/
    _count?: true | RoutineExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutineExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutineExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineExerciseMaxAggregateInputType
  }

  export type GetRoutineExerciseAggregateType<T extends RoutineExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutineExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutineExercise[P]>
      : GetScalarType<T[P], AggregateRoutineExercise[P]>
  }




  export type RoutineExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineExerciseWhereInput
    orderBy?: RoutineExerciseOrderByWithAggregationInput | RoutineExerciseOrderByWithAggregationInput[]
    by: RoutineExerciseScalarFieldEnum[] | RoutineExerciseScalarFieldEnum
    having?: RoutineExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineExerciseCountAggregateInputType | true
    _avg?: RoutineExerciseAvgAggregateInputType
    _sum?: RoutineExerciseSumAggregateInputType
    _min?: RoutineExerciseMinAggregateInputType
    _max?: RoutineExerciseMaxAggregateInputType
  }

  export type RoutineExerciseGroupByOutputType = {
    id: string
    routineId: string
    exerciseId: string
    sets: number
    reps: number
    rpe: number | null
    restTime: number | null
    order: number
    _count: RoutineExerciseCountAggregateOutputType | null
    _avg: RoutineExerciseAvgAggregateOutputType | null
    _sum: RoutineExerciseSumAggregateOutputType | null
    _min: RoutineExerciseMinAggregateOutputType | null
    _max: RoutineExerciseMaxAggregateOutputType | null
  }

  type GetRoutineExerciseGroupByPayload<T extends RoutineExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineExerciseGroupByOutputType[P]>
        }
      >
    >


  export type RoutineExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    rpe?: boolean
    restTime?: boolean
    order?: boolean
    routine?: boolean | WorkoutRoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineExercise"]>

  export type RoutineExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    rpe?: boolean
    restTime?: boolean
    order?: boolean
    routine?: boolean | WorkoutRoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineExercise"]>

  export type RoutineExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    rpe?: boolean
    restTime?: boolean
    order?: boolean
    routine?: boolean | WorkoutRoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineExercise"]>

  export type RoutineExerciseSelectScalar = {
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    rpe?: boolean
    restTime?: boolean
    order?: boolean
  }

  export type RoutineExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routineId" | "exerciseId" | "sets" | "reps" | "rpe" | "restTime" | "order", ExtArgs["result"]["routineExercise"]>
  export type RoutineExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | WorkoutRoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type RoutineExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | WorkoutRoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type RoutineExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | WorkoutRoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $RoutineExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutineExercise"
    objects: {
      routine: Prisma.$WorkoutRoutinePayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routineId: string
      exerciseId: string
      sets: number
      reps: number
      rpe: number | null
      restTime: number | null
      order: number
    }, ExtArgs["result"]["routineExercise"]>
    composites: {}
  }

  type RoutineExerciseGetPayload<S extends boolean | null | undefined | RoutineExerciseDefaultArgs> = $Result.GetResult<Prisma.$RoutineExercisePayload, S>

  type RoutineExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineExerciseCountAggregateInputType | true
    }

  export interface RoutineExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutineExercise'], meta: { name: 'RoutineExercise' } }
    /**
     * Find zero or one RoutineExercise that matches the filter.
     * @param {RoutineExerciseFindUniqueArgs} args - Arguments to find a RoutineExercise
     * @example
     * // Get one RoutineExercise
     * const routineExercise = await prisma.routineExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineExerciseFindUniqueArgs>(args: SelectSubset<T, RoutineExerciseFindUniqueArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoutineExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineExerciseFindUniqueOrThrowArgs} args - Arguments to find a RoutineExercise
     * @example
     * // Get one RoutineExercise
     * const routineExercise = await prisma.routineExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseFindFirstArgs} args - Arguments to find a RoutineExercise
     * @example
     * // Get one RoutineExercise
     * const routineExercise = await prisma.routineExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineExerciseFindFirstArgs>(args?: SelectSubset<T, RoutineExerciseFindFirstArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseFindFirstOrThrowArgs} args - Arguments to find a RoutineExercise
     * @example
     * // Get one RoutineExercise
     * const routineExercise = await prisma.routineExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoutineExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutineExercises
     * const routineExercises = await prisma.routineExercise.findMany()
     * 
     * // Get first 10 RoutineExercises
     * const routineExercises = await prisma.routineExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineExerciseWithIdOnly = await prisma.routineExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineExerciseFindManyArgs>(args?: SelectSubset<T, RoutineExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoutineExercise.
     * @param {RoutineExerciseCreateArgs} args - Arguments to create a RoutineExercise.
     * @example
     * // Create one RoutineExercise
     * const RoutineExercise = await prisma.routineExercise.create({
     *   data: {
     *     // ... data to create a RoutineExercise
     *   }
     * })
     * 
     */
    create<T extends RoutineExerciseCreateArgs>(args: SelectSubset<T, RoutineExerciseCreateArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoutineExercises.
     * @param {RoutineExerciseCreateManyArgs} args - Arguments to create many RoutineExercises.
     * @example
     * // Create many RoutineExercises
     * const routineExercise = await prisma.routineExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineExerciseCreateManyArgs>(args?: SelectSubset<T, RoutineExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoutineExercises and returns the data saved in the database.
     * @param {RoutineExerciseCreateManyAndReturnArgs} args - Arguments to create many RoutineExercises.
     * @example
     * // Create many RoutineExercises
     * const routineExercise = await prisma.routineExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoutineExercises and only return the `id`
     * const routineExerciseWithIdOnly = await prisma.routineExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoutineExercise.
     * @param {RoutineExerciseDeleteArgs} args - Arguments to delete one RoutineExercise.
     * @example
     * // Delete one RoutineExercise
     * const RoutineExercise = await prisma.routineExercise.delete({
     *   where: {
     *     // ... filter to delete one RoutineExercise
     *   }
     * })
     * 
     */
    delete<T extends RoutineExerciseDeleteArgs>(args: SelectSubset<T, RoutineExerciseDeleteArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoutineExercise.
     * @param {RoutineExerciseUpdateArgs} args - Arguments to update one RoutineExercise.
     * @example
     * // Update one RoutineExercise
     * const routineExercise = await prisma.routineExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineExerciseUpdateArgs>(args: SelectSubset<T, RoutineExerciseUpdateArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoutineExercises.
     * @param {RoutineExerciseDeleteManyArgs} args - Arguments to filter RoutineExercises to delete.
     * @example
     * // Delete a few RoutineExercises
     * const { count } = await prisma.routineExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineExerciseDeleteManyArgs>(args?: SelectSubset<T, RoutineExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutineExercises
     * const routineExercise = await prisma.routineExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineExerciseUpdateManyArgs>(args: SelectSubset<T, RoutineExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineExercises and returns the data updated in the database.
     * @param {RoutineExerciseUpdateManyAndReturnArgs} args - Arguments to update many RoutineExercises.
     * @example
     * // Update many RoutineExercises
     * const routineExercise = await prisma.routineExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoutineExercises and only return the `id`
     * const routineExerciseWithIdOnly = await prisma.routineExercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoutineExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutineExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoutineExercise.
     * @param {RoutineExerciseUpsertArgs} args - Arguments to update or create a RoutineExercise.
     * @example
     * // Update or create a RoutineExercise
     * const routineExercise = await prisma.routineExercise.upsert({
     *   create: {
     *     // ... data to create a RoutineExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutineExercise we want to update
     *   }
     * })
     */
    upsert<T extends RoutineExerciseUpsertArgs>(args: SelectSubset<T, RoutineExerciseUpsertArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoutineExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseCountArgs} args - Arguments to filter RoutineExercises to count.
     * @example
     * // Count the number of RoutineExercises
     * const count = await prisma.routineExercise.count({
     *   where: {
     *     // ... the filter for the RoutineExercises we want to count
     *   }
     * })
    **/
    count<T extends RoutineExerciseCountArgs>(
      args?: Subset<T, RoutineExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutineExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineExerciseAggregateArgs>(args: Subset<T, RoutineExerciseAggregateArgs>): Prisma.PrismaPromise<GetRoutineExerciseAggregateType<T>>

    /**
     * Group by RoutineExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseGroupByArgs} args - Group by arguments.
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
      T extends RoutineExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineExerciseGroupByArgs['orderBy'] }
        : { orderBy?: RoutineExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutineExercise model
   */
  readonly fields: RoutineExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutineExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routine<T extends WorkoutRoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutRoutineDefaultArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoutineExercise model
   */
  interface RoutineExerciseFieldRefs {
    readonly id: FieldRef<"RoutineExercise", 'String'>
    readonly routineId: FieldRef<"RoutineExercise", 'String'>
    readonly exerciseId: FieldRef<"RoutineExercise", 'String'>
    readonly sets: FieldRef<"RoutineExercise", 'Int'>
    readonly reps: FieldRef<"RoutineExercise", 'Int'>
    readonly rpe: FieldRef<"RoutineExercise", 'Int'>
    readonly restTime: FieldRef<"RoutineExercise", 'Int'>
    readonly order: FieldRef<"RoutineExercise", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoutineExercise findUnique
   */
  export type RoutineExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercise to fetch.
     */
    where: RoutineExerciseWhereUniqueInput
  }

  /**
   * RoutineExercise findUniqueOrThrow
   */
  export type RoutineExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercise to fetch.
     */
    where: RoutineExerciseWhereUniqueInput
  }

  /**
   * RoutineExercise findFirst
   */
  export type RoutineExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercise to fetch.
     */
    where?: RoutineExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercises to fetch.
     */
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineExercises.
     */
    cursor?: RoutineExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineExercises.
     */
    distinct?: RoutineExerciseScalarFieldEnum | RoutineExerciseScalarFieldEnum[]
  }

  /**
   * RoutineExercise findFirstOrThrow
   */
  export type RoutineExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercise to fetch.
     */
    where?: RoutineExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercises to fetch.
     */
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineExercises.
     */
    cursor?: RoutineExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineExercises.
     */
    distinct?: RoutineExerciseScalarFieldEnum | RoutineExerciseScalarFieldEnum[]
  }

  /**
   * RoutineExercise findMany
   */
  export type RoutineExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercises to fetch.
     */
    where?: RoutineExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercises to fetch.
     */
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutineExercises.
     */
    cursor?: RoutineExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercises.
     */
    skip?: number
    distinct?: RoutineExerciseScalarFieldEnum | RoutineExerciseScalarFieldEnum[]
  }

  /**
   * RoutineExercise create
   */
  export type RoutineExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutineExercise.
     */
    data: XOR<RoutineExerciseCreateInput, RoutineExerciseUncheckedCreateInput>
  }

  /**
   * RoutineExercise createMany
   */
  export type RoutineExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutineExercises.
     */
    data: RoutineExerciseCreateManyInput | RoutineExerciseCreateManyInput[]
  }

  /**
   * RoutineExercise createManyAndReturn
   */
  export type RoutineExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many RoutineExercises.
     */
    data: RoutineExerciseCreateManyInput | RoutineExerciseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutineExercise update
   */
  export type RoutineExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutineExercise.
     */
    data: XOR<RoutineExerciseUpdateInput, RoutineExerciseUncheckedUpdateInput>
    /**
     * Choose, which RoutineExercise to update.
     */
    where: RoutineExerciseWhereUniqueInput
  }

  /**
   * RoutineExercise updateMany
   */
  export type RoutineExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutineExercises.
     */
    data: XOR<RoutineExerciseUpdateManyMutationInput, RoutineExerciseUncheckedUpdateManyInput>
    /**
     * Filter which RoutineExercises to update
     */
    where?: RoutineExerciseWhereInput
    /**
     * Limit how many RoutineExercises to update.
     */
    limit?: number
  }

  /**
   * RoutineExercise updateManyAndReturn
   */
  export type RoutineExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * The data used to update RoutineExercises.
     */
    data: XOR<RoutineExerciseUpdateManyMutationInput, RoutineExerciseUncheckedUpdateManyInput>
    /**
     * Filter which RoutineExercises to update
     */
    where?: RoutineExerciseWhereInput
    /**
     * Limit how many RoutineExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutineExercise upsert
   */
  export type RoutineExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutineExercise to update in case it exists.
     */
    where: RoutineExerciseWhereUniqueInput
    /**
     * In case the RoutineExercise found by the `where` argument doesn't exist, create a new RoutineExercise with this data.
     */
    create: XOR<RoutineExerciseCreateInput, RoutineExerciseUncheckedCreateInput>
    /**
     * In case the RoutineExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineExerciseUpdateInput, RoutineExerciseUncheckedUpdateInput>
  }

  /**
   * RoutineExercise delete
   */
  export type RoutineExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter which RoutineExercise to delete.
     */
    where: RoutineExerciseWhereUniqueInput
  }

  /**
   * RoutineExercise deleteMany
   */
  export type RoutineExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineExercises to delete
     */
    where?: RoutineExerciseWhereInput
    /**
     * Limit how many RoutineExercises to delete.
     */
    limit?: number
  }

  /**
   * RoutineExercise without action
   */
  export type RoutineExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutSession
   */

  export type AggregateWorkoutSession = {
    _count: WorkoutSessionCountAggregateOutputType | null
    _avg: WorkoutSessionAvgAggregateOutputType | null
    _sum: WorkoutSessionSumAggregateOutputType | null
    _min: WorkoutSessionMinAggregateOutputType | null
    _max: WorkoutSessionMaxAggregateOutputType | null
  }

  export type WorkoutSessionAvgAggregateOutputType = {
    duration: number | null
  }

  export type WorkoutSessionSumAggregateOutputType = {
    duration: number | null
  }

  export type WorkoutSessionMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    routineId: string | null
    date: Date | null
    status: string | null
    duration: number | null
  }

  export type WorkoutSessionMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    routineId: string | null
    date: Date | null
    status: string | null
    duration: number | null
  }

  export type WorkoutSessionCountAggregateOutputType = {
    id: number
    studentId: number
    routineId: number
    date: number
    status: number
    duration: number
    _all: number
  }


  export type WorkoutSessionAvgAggregateInputType = {
    duration?: true
  }

  export type WorkoutSessionSumAggregateInputType = {
    duration?: true
  }

  export type WorkoutSessionMinAggregateInputType = {
    id?: true
    studentId?: true
    routineId?: true
    date?: true
    status?: true
    duration?: true
  }

  export type WorkoutSessionMaxAggregateInputType = {
    id?: true
    studentId?: true
    routineId?: true
    date?: true
    status?: true
    duration?: true
  }

  export type WorkoutSessionCountAggregateInputType = {
    id?: true
    studentId?: true
    routineId?: true
    date?: true
    status?: true
    duration?: true
    _all?: true
  }

  export type WorkoutSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutSession to aggregate.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutSessions
    **/
    _count?: true | WorkoutSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutSessionMaxAggregateInputType
  }

  export type GetWorkoutSessionAggregateType<T extends WorkoutSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutSession[P]>
      : GetScalarType<T[P], AggregateWorkoutSession[P]>
  }




  export type WorkoutSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutSessionWhereInput
    orderBy?: WorkoutSessionOrderByWithAggregationInput | WorkoutSessionOrderByWithAggregationInput[]
    by: WorkoutSessionScalarFieldEnum[] | WorkoutSessionScalarFieldEnum
    having?: WorkoutSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutSessionCountAggregateInputType | true
    _avg?: WorkoutSessionAvgAggregateInputType
    _sum?: WorkoutSessionSumAggregateInputType
    _min?: WorkoutSessionMinAggregateInputType
    _max?: WorkoutSessionMaxAggregateInputType
  }

  export type WorkoutSessionGroupByOutputType = {
    id: string
    studentId: string
    routineId: string | null
    date: Date
    status: string
    duration: number | null
    _count: WorkoutSessionCountAggregateOutputType | null
    _avg: WorkoutSessionAvgAggregateOutputType | null
    _sum: WorkoutSessionSumAggregateOutputType | null
    _min: WorkoutSessionMinAggregateOutputType | null
    _max: WorkoutSessionMaxAggregateOutputType | null
  }

  type GetWorkoutSessionGroupByPayload<T extends WorkoutSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutSessionGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    routineId?: boolean
    date?: boolean
    status?: boolean
    duration?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    routine?: boolean | WorkoutSession$routineArgs<ExtArgs>
    logs?: boolean | WorkoutSession$logsArgs<ExtArgs>
    _count?: boolean | WorkoutSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutSession"]>

  export type WorkoutSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    routineId?: boolean
    date?: boolean
    status?: boolean
    duration?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    routine?: boolean | WorkoutSession$routineArgs<ExtArgs>
  }, ExtArgs["result"]["workoutSession"]>

  export type WorkoutSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    routineId?: boolean
    date?: boolean
    status?: boolean
    duration?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    routine?: boolean | WorkoutSession$routineArgs<ExtArgs>
  }, ExtArgs["result"]["workoutSession"]>

  export type WorkoutSessionSelectScalar = {
    id?: boolean
    studentId?: boolean
    routineId?: boolean
    date?: boolean
    status?: boolean
    duration?: boolean
  }

  export type WorkoutSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "routineId" | "date" | "status" | "duration", ExtArgs["result"]["workoutSession"]>
  export type WorkoutSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    routine?: boolean | WorkoutSession$routineArgs<ExtArgs>
    logs?: boolean | WorkoutSession$logsArgs<ExtArgs>
    _count?: boolean | WorkoutSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    routine?: boolean | WorkoutSession$routineArgs<ExtArgs>
  }
  export type WorkoutSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    routine?: boolean | WorkoutSession$routineArgs<ExtArgs>
  }

  export type $WorkoutSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutSession"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
      routine: Prisma.$WorkoutRoutinePayload<ExtArgs> | null
      logs: Prisma.$SessionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      routineId: string | null
      date: Date
      status: string
      duration: number | null
    }, ExtArgs["result"]["workoutSession"]>
    composites: {}
  }

  type WorkoutSessionGetPayload<S extends boolean | null | undefined | WorkoutSessionDefaultArgs> = $Result.GetResult<Prisma.$WorkoutSessionPayload, S>

  type WorkoutSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutSessionCountAggregateInputType | true
    }

  export interface WorkoutSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutSession'], meta: { name: 'WorkoutSession' } }
    /**
     * Find zero or one WorkoutSession that matches the filter.
     * @param {WorkoutSessionFindUniqueArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutSessionFindUniqueArgs>(args: SelectSubset<T, WorkoutSessionFindUniqueArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutSessionFindUniqueOrThrowArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionFindFirstArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutSessionFindFirstArgs>(args?: SelectSubset<T, WorkoutSessionFindFirstArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionFindFirstOrThrowArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutSessions
     * const workoutSessions = await prisma.workoutSession.findMany()
     * 
     * // Get first 10 WorkoutSessions
     * const workoutSessions = await prisma.workoutSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutSessionWithIdOnly = await prisma.workoutSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutSessionFindManyArgs>(args?: SelectSubset<T, WorkoutSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutSession.
     * @param {WorkoutSessionCreateArgs} args - Arguments to create a WorkoutSession.
     * @example
     * // Create one WorkoutSession
     * const WorkoutSession = await prisma.workoutSession.create({
     *   data: {
     *     // ... data to create a WorkoutSession
     *   }
     * })
     * 
     */
    create<T extends WorkoutSessionCreateArgs>(args: SelectSubset<T, WorkoutSessionCreateArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutSessions.
     * @param {WorkoutSessionCreateManyArgs} args - Arguments to create many WorkoutSessions.
     * @example
     * // Create many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutSessionCreateManyArgs>(args?: SelectSubset<T, WorkoutSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutSessions and returns the data saved in the database.
     * @param {WorkoutSessionCreateManyAndReturnArgs} args - Arguments to create many WorkoutSessions.
     * @example
     * // Create many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutSessions and only return the `id`
     * const workoutSessionWithIdOnly = await prisma.workoutSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutSession.
     * @param {WorkoutSessionDeleteArgs} args - Arguments to delete one WorkoutSession.
     * @example
     * // Delete one WorkoutSession
     * const WorkoutSession = await prisma.workoutSession.delete({
     *   where: {
     *     // ... filter to delete one WorkoutSession
     *   }
     * })
     * 
     */
    delete<T extends WorkoutSessionDeleteArgs>(args: SelectSubset<T, WorkoutSessionDeleteArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutSession.
     * @param {WorkoutSessionUpdateArgs} args - Arguments to update one WorkoutSession.
     * @example
     * // Update one WorkoutSession
     * const workoutSession = await prisma.workoutSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutSessionUpdateArgs>(args: SelectSubset<T, WorkoutSessionUpdateArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutSessions.
     * @param {WorkoutSessionDeleteManyArgs} args - Arguments to filter WorkoutSessions to delete.
     * @example
     * // Delete a few WorkoutSessions
     * const { count } = await prisma.workoutSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutSessionDeleteManyArgs>(args?: SelectSubset<T, WorkoutSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutSessionUpdateManyArgs>(args: SelectSubset<T, WorkoutSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutSessions and returns the data updated in the database.
     * @param {WorkoutSessionUpdateManyAndReturnArgs} args - Arguments to update many WorkoutSessions.
     * @example
     * // Update many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutSessions and only return the `id`
     * const workoutSessionWithIdOnly = await prisma.workoutSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutSession.
     * @param {WorkoutSessionUpsertArgs} args - Arguments to update or create a WorkoutSession.
     * @example
     * // Update or create a WorkoutSession
     * const workoutSession = await prisma.workoutSession.upsert({
     *   create: {
     *     // ... data to create a WorkoutSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutSession we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutSessionUpsertArgs>(args: SelectSubset<T, WorkoutSessionUpsertArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionCountArgs} args - Arguments to filter WorkoutSessions to count.
     * @example
     * // Count the number of WorkoutSessions
     * const count = await prisma.workoutSession.count({
     *   where: {
     *     // ... the filter for the WorkoutSessions we want to count
     *   }
     * })
    **/
    count<T extends WorkoutSessionCountArgs>(
      args?: Subset<T, WorkoutSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutSessionAggregateArgs>(args: Subset<T, WorkoutSessionAggregateArgs>): Prisma.PrismaPromise<GetWorkoutSessionAggregateType<T>>

    /**
     * Group by WorkoutSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionGroupByArgs} args - Group by arguments.
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
      T extends WorkoutSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutSessionGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutSession model
   */
  readonly fields: WorkoutSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    routine<T extends WorkoutSession$routineArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutSession$routineArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    logs<T extends WorkoutSession$logsArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutSession$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkoutSession model
   */
  interface WorkoutSessionFieldRefs {
    readonly id: FieldRef<"WorkoutSession", 'String'>
    readonly studentId: FieldRef<"WorkoutSession", 'String'>
    readonly routineId: FieldRef<"WorkoutSession", 'String'>
    readonly date: FieldRef<"WorkoutSession", 'DateTime'>
    readonly status: FieldRef<"WorkoutSession", 'String'>
    readonly duration: FieldRef<"WorkoutSession", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutSession findUnique
   */
  export type WorkoutSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession findUniqueOrThrow
   */
  export type WorkoutSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession findFirst
   */
  export type WorkoutSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutSessions.
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutSessions.
     */
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * WorkoutSession findFirstOrThrow
   */
  export type WorkoutSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutSessions.
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutSessions.
     */
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * WorkoutSession findMany
   */
  export type WorkoutSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSessions to fetch.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutSessions.
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * WorkoutSession create
   */
  export type WorkoutSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutSession.
     */
    data: XOR<WorkoutSessionCreateInput, WorkoutSessionUncheckedCreateInput>
  }

  /**
   * WorkoutSession createMany
   */
  export type WorkoutSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutSessions.
     */
    data: WorkoutSessionCreateManyInput | WorkoutSessionCreateManyInput[]
  }

  /**
   * WorkoutSession createManyAndReturn
   */
  export type WorkoutSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutSessions.
     */
    data: WorkoutSessionCreateManyInput | WorkoutSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutSession update
   */
  export type WorkoutSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutSession.
     */
    data: XOR<WorkoutSessionUpdateInput, WorkoutSessionUncheckedUpdateInput>
    /**
     * Choose, which WorkoutSession to update.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession updateMany
   */
  export type WorkoutSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutSessions.
     */
    data: XOR<WorkoutSessionUpdateManyMutationInput, WorkoutSessionUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutSessions to update
     */
    where?: WorkoutSessionWhereInput
    /**
     * Limit how many WorkoutSessions to update.
     */
    limit?: number
  }

  /**
   * WorkoutSession updateManyAndReturn
   */
  export type WorkoutSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutSessions.
     */
    data: XOR<WorkoutSessionUpdateManyMutationInput, WorkoutSessionUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutSessions to update
     */
    where?: WorkoutSessionWhereInput
    /**
     * Limit how many WorkoutSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutSession upsert
   */
  export type WorkoutSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutSession to update in case it exists.
     */
    where: WorkoutSessionWhereUniqueInput
    /**
     * In case the WorkoutSession found by the `where` argument doesn't exist, create a new WorkoutSession with this data.
     */
    create: XOR<WorkoutSessionCreateInput, WorkoutSessionUncheckedCreateInput>
    /**
     * In case the WorkoutSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutSessionUpdateInput, WorkoutSessionUncheckedUpdateInput>
  }

  /**
   * WorkoutSession delete
   */
  export type WorkoutSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter which WorkoutSession to delete.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession deleteMany
   */
  export type WorkoutSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutSessions to delete
     */
    where?: WorkoutSessionWhereInput
    /**
     * Limit how many WorkoutSessions to delete.
     */
    limit?: number
  }

  /**
   * WorkoutSession.routine
   */
  export type WorkoutSession$routineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRoutine
     */
    omit?: WorkoutRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutRoutineInclude<ExtArgs> | null
    where?: WorkoutRoutineWhereInput
  }

  /**
   * WorkoutSession.logs
   */
  export type WorkoutSession$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    where?: SessionLogWhereInput
    orderBy?: SessionLogOrderByWithRelationInput | SessionLogOrderByWithRelationInput[]
    cursor?: SessionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionLogScalarFieldEnum | SessionLogScalarFieldEnum[]
  }

  /**
   * WorkoutSession without action
   */
  export type WorkoutSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
  }


  /**
   * Model SessionLog
   */

  export type AggregateSessionLog = {
    _count: SessionLogCountAggregateOutputType | null
    _avg: SessionLogAvgAggregateOutputType | null
    _sum: SessionLogSumAggregateOutputType | null
    _min: SessionLogMinAggregateOutputType | null
    _max: SessionLogMaxAggregateOutputType | null
  }

  export type SessionLogAvgAggregateOutputType = {
    setNumber: number | null
    weight: number | null
    reps: number | null
    rpe: number | null
    duration: number | null
  }

  export type SessionLogSumAggregateOutputType = {
    setNumber: number | null
    weight: number | null
    reps: number | null
    rpe: number | null
    duration: number | null
  }

  export type SessionLogMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    exerciseId: string | null
    setNumber: number | null
    weight: number | null
    weightUnit: string | null
    reps: number | null
    rpe: number | null
    duration: number | null
    notes: string | null
  }

  export type SessionLogMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    exerciseId: string | null
    setNumber: number | null
    weight: number | null
    weightUnit: string | null
    reps: number | null
    rpe: number | null
    duration: number | null
    notes: string | null
  }

  export type SessionLogCountAggregateOutputType = {
    id: number
    sessionId: number
    exerciseId: number
    setNumber: number
    weight: number
    weightUnit: number
    reps: number
    rpe: number
    duration: number
    notes: number
    _all: number
  }


  export type SessionLogAvgAggregateInputType = {
    setNumber?: true
    weight?: true
    reps?: true
    rpe?: true
    duration?: true
  }

  export type SessionLogSumAggregateInputType = {
    setNumber?: true
    weight?: true
    reps?: true
    rpe?: true
    duration?: true
  }

  export type SessionLogMinAggregateInputType = {
    id?: true
    sessionId?: true
    exerciseId?: true
    setNumber?: true
    weight?: true
    weightUnit?: true
    reps?: true
    rpe?: true
    duration?: true
    notes?: true
  }

  export type SessionLogMaxAggregateInputType = {
    id?: true
    sessionId?: true
    exerciseId?: true
    setNumber?: true
    weight?: true
    weightUnit?: true
    reps?: true
    rpe?: true
    duration?: true
    notes?: true
  }

  export type SessionLogCountAggregateInputType = {
    id?: true
    sessionId?: true
    exerciseId?: true
    setNumber?: true
    weight?: true
    weightUnit?: true
    reps?: true
    rpe?: true
    duration?: true
    notes?: true
    _all?: true
  }

  export type SessionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionLog to aggregate.
     */
    where?: SessionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionLogs to fetch.
     */
    orderBy?: SessionLogOrderByWithRelationInput | SessionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionLogs
    **/
    _count?: true | SessionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionLogMaxAggregateInputType
  }

  export type GetSessionLogAggregateType<T extends SessionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionLog[P]>
      : GetScalarType<T[P], AggregateSessionLog[P]>
  }




  export type SessionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionLogWhereInput
    orderBy?: SessionLogOrderByWithAggregationInput | SessionLogOrderByWithAggregationInput[]
    by: SessionLogScalarFieldEnum[] | SessionLogScalarFieldEnum
    having?: SessionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionLogCountAggregateInputType | true
    _avg?: SessionLogAvgAggregateInputType
    _sum?: SessionLogSumAggregateInputType
    _min?: SessionLogMinAggregateInputType
    _max?: SessionLogMaxAggregateInputType
  }

  export type SessionLogGroupByOutputType = {
    id: string
    sessionId: string
    exerciseId: string
    setNumber: number
    weight: number
    weightUnit: string
    reps: number
    rpe: number | null
    duration: number | null
    notes: string | null
    _count: SessionLogCountAggregateOutputType | null
    _avg: SessionLogAvgAggregateOutputType | null
    _sum: SessionLogSumAggregateOutputType | null
    _min: SessionLogMinAggregateOutputType | null
    _max: SessionLogMaxAggregateOutputType | null
  }

  type GetSessionLogGroupByPayload<T extends SessionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionLogGroupByOutputType[P]>
            : GetScalarType<T[P], SessionLogGroupByOutputType[P]>
        }
      >
    >


  export type SessionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    exerciseId?: boolean
    setNumber?: boolean
    weight?: boolean
    weightUnit?: boolean
    reps?: boolean
    rpe?: boolean
    duration?: boolean
    notes?: boolean
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionLog"]>

  export type SessionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    exerciseId?: boolean
    setNumber?: boolean
    weight?: boolean
    weightUnit?: boolean
    reps?: boolean
    rpe?: boolean
    duration?: boolean
    notes?: boolean
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionLog"]>

  export type SessionLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    exerciseId?: boolean
    setNumber?: boolean
    weight?: boolean
    weightUnit?: boolean
    reps?: boolean
    rpe?: boolean
    duration?: boolean
    notes?: boolean
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionLog"]>

  export type SessionLogSelectScalar = {
    id?: boolean
    sessionId?: boolean
    exerciseId?: boolean
    setNumber?: boolean
    weight?: boolean
    weightUnit?: boolean
    reps?: boolean
    rpe?: boolean
    duration?: boolean
    notes?: boolean
  }

  export type SessionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "exerciseId" | "setNumber" | "weight" | "weightUnit" | "reps" | "rpe" | "duration" | "notes", ExtArgs["result"]["sessionLog"]>
  export type SessionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type SessionLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type SessionLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $SessionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionLog"
    objects: {
      session: Prisma.$WorkoutSessionPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      exerciseId: string
      setNumber: number
      weight: number
      weightUnit: string
      reps: number
      rpe: number | null
      duration: number | null
      notes: string | null
    }, ExtArgs["result"]["sessionLog"]>
    composites: {}
  }

  type SessionLogGetPayload<S extends boolean | null | undefined | SessionLogDefaultArgs> = $Result.GetResult<Prisma.$SessionLogPayload, S>

  type SessionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionLogCountAggregateInputType | true
    }

  export interface SessionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionLog'], meta: { name: 'SessionLog' } }
    /**
     * Find zero or one SessionLog that matches the filter.
     * @param {SessionLogFindUniqueArgs} args - Arguments to find a SessionLog
     * @example
     * // Get one SessionLog
     * const sessionLog = await prisma.sessionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionLogFindUniqueArgs>(args: SelectSubset<T, SessionLogFindUniqueArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionLogFindUniqueOrThrowArgs} args - Arguments to find a SessionLog
     * @example
     * // Get one SessionLog
     * const sessionLog = await prisma.sessionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogFindFirstArgs} args - Arguments to find a SessionLog
     * @example
     * // Get one SessionLog
     * const sessionLog = await prisma.sessionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionLogFindFirstArgs>(args?: SelectSubset<T, SessionLogFindFirstArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogFindFirstOrThrowArgs} args - Arguments to find a SessionLog
     * @example
     * // Get one SessionLog
     * const sessionLog = await prisma.sessionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionLogs
     * const sessionLogs = await prisma.sessionLog.findMany()
     * 
     * // Get first 10 SessionLogs
     * const sessionLogs = await prisma.sessionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionLogWithIdOnly = await prisma.sessionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionLogFindManyArgs>(args?: SelectSubset<T, SessionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionLog.
     * @param {SessionLogCreateArgs} args - Arguments to create a SessionLog.
     * @example
     * // Create one SessionLog
     * const SessionLog = await prisma.sessionLog.create({
     *   data: {
     *     // ... data to create a SessionLog
     *   }
     * })
     * 
     */
    create<T extends SessionLogCreateArgs>(args: SelectSubset<T, SessionLogCreateArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionLogs.
     * @param {SessionLogCreateManyArgs} args - Arguments to create many SessionLogs.
     * @example
     * // Create many SessionLogs
     * const sessionLog = await prisma.sessionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionLogCreateManyArgs>(args?: SelectSubset<T, SessionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionLogs and returns the data saved in the database.
     * @param {SessionLogCreateManyAndReturnArgs} args - Arguments to create many SessionLogs.
     * @example
     * // Create many SessionLogs
     * const sessionLog = await prisma.sessionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionLogs and only return the `id`
     * const sessionLogWithIdOnly = await prisma.sessionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionLog.
     * @param {SessionLogDeleteArgs} args - Arguments to delete one SessionLog.
     * @example
     * // Delete one SessionLog
     * const SessionLog = await prisma.sessionLog.delete({
     *   where: {
     *     // ... filter to delete one SessionLog
     *   }
     * })
     * 
     */
    delete<T extends SessionLogDeleteArgs>(args: SelectSubset<T, SessionLogDeleteArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionLog.
     * @param {SessionLogUpdateArgs} args - Arguments to update one SessionLog.
     * @example
     * // Update one SessionLog
     * const sessionLog = await prisma.sessionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionLogUpdateArgs>(args: SelectSubset<T, SessionLogUpdateArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionLogs.
     * @param {SessionLogDeleteManyArgs} args - Arguments to filter SessionLogs to delete.
     * @example
     * // Delete a few SessionLogs
     * const { count } = await prisma.sessionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionLogDeleteManyArgs>(args?: SelectSubset<T, SessionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionLogs
     * const sessionLog = await prisma.sessionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionLogUpdateManyArgs>(args: SelectSubset<T, SessionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionLogs and returns the data updated in the database.
     * @param {SessionLogUpdateManyAndReturnArgs} args - Arguments to update many SessionLogs.
     * @example
     * // Update many SessionLogs
     * const sessionLog = await prisma.sessionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionLogs and only return the `id`
     * const sessionLogWithIdOnly = await prisma.sessionLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionLog.
     * @param {SessionLogUpsertArgs} args - Arguments to update or create a SessionLog.
     * @example
     * // Update or create a SessionLog
     * const sessionLog = await prisma.sessionLog.upsert({
     *   create: {
     *     // ... data to create a SessionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionLog we want to update
     *   }
     * })
     */
    upsert<T extends SessionLogUpsertArgs>(args: SelectSubset<T, SessionLogUpsertArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogCountArgs} args - Arguments to filter SessionLogs to count.
     * @example
     * // Count the number of SessionLogs
     * const count = await prisma.sessionLog.count({
     *   where: {
     *     // ... the filter for the SessionLogs we want to count
     *   }
     * })
    **/
    count<T extends SessionLogCountArgs>(
      args?: Subset<T, SessionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionLogAggregateArgs>(args: Subset<T, SessionLogAggregateArgs>): Prisma.PrismaPromise<GetSessionLogAggregateType<T>>

    /**
     * Group by SessionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogGroupByArgs} args - Group by arguments.
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
      T extends SessionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionLogGroupByArgs['orderBy'] }
        : { orderBy?: SessionLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionLog model
   */
  readonly fields: SessionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends WorkoutSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutSessionDefaultArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SessionLog model
   */
  interface SessionLogFieldRefs {
    readonly id: FieldRef<"SessionLog", 'String'>
    readonly sessionId: FieldRef<"SessionLog", 'String'>
    readonly exerciseId: FieldRef<"SessionLog", 'String'>
    readonly setNumber: FieldRef<"SessionLog", 'Int'>
    readonly weight: FieldRef<"SessionLog", 'Float'>
    readonly weightUnit: FieldRef<"SessionLog", 'String'>
    readonly reps: FieldRef<"SessionLog", 'Int'>
    readonly rpe: FieldRef<"SessionLog", 'Int'>
    readonly duration: FieldRef<"SessionLog", 'Int'>
    readonly notes: FieldRef<"SessionLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SessionLog findUnique
   */
  export type SessionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    /**
     * Filter, which SessionLog to fetch.
     */
    where: SessionLogWhereUniqueInput
  }

  /**
   * SessionLog findUniqueOrThrow
   */
  export type SessionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    /**
     * Filter, which SessionLog to fetch.
     */
    where: SessionLogWhereUniqueInput
  }

  /**
   * SessionLog findFirst
   */
  export type SessionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    /**
     * Filter, which SessionLog to fetch.
     */
    where?: SessionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionLogs to fetch.
     */
    orderBy?: SessionLogOrderByWithRelationInput | SessionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionLogs.
     */
    cursor?: SessionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionLogs.
     */
    distinct?: SessionLogScalarFieldEnum | SessionLogScalarFieldEnum[]
  }

  /**
   * SessionLog findFirstOrThrow
   */
  export type SessionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    /**
     * Filter, which SessionLog to fetch.
     */
    where?: SessionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionLogs to fetch.
     */
    orderBy?: SessionLogOrderByWithRelationInput | SessionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionLogs.
     */
    cursor?: SessionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionLogs.
     */
    distinct?: SessionLogScalarFieldEnum | SessionLogScalarFieldEnum[]
  }

  /**
   * SessionLog findMany
   */
  export type SessionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    /**
     * Filter, which SessionLogs to fetch.
     */
    where?: SessionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionLogs to fetch.
     */
    orderBy?: SessionLogOrderByWithRelationInput | SessionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionLogs.
     */
    cursor?: SessionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionLogs.
     */
    skip?: number
    distinct?: SessionLogScalarFieldEnum | SessionLogScalarFieldEnum[]
  }

  /**
   * SessionLog create
   */
  export type SessionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionLog.
     */
    data: XOR<SessionLogCreateInput, SessionLogUncheckedCreateInput>
  }

  /**
   * SessionLog createMany
   */
  export type SessionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionLogs.
     */
    data: SessionLogCreateManyInput | SessionLogCreateManyInput[]
  }

  /**
   * SessionLog createManyAndReturn
   */
  export type SessionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * The data used to create many SessionLogs.
     */
    data: SessionLogCreateManyInput | SessionLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionLog update
   */
  export type SessionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionLog.
     */
    data: XOR<SessionLogUpdateInput, SessionLogUncheckedUpdateInput>
    /**
     * Choose, which SessionLog to update.
     */
    where: SessionLogWhereUniqueInput
  }

  /**
   * SessionLog updateMany
   */
  export type SessionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionLogs.
     */
    data: XOR<SessionLogUpdateManyMutationInput, SessionLogUncheckedUpdateManyInput>
    /**
     * Filter which SessionLogs to update
     */
    where?: SessionLogWhereInput
    /**
     * Limit how many SessionLogs to update.
     */
    limit?: number
  }

  /**
   * SessionLog updateManyAndReturn
   */
  export type SessionLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * The data used to update SessionLogs.
     */
    data: XOR<SessionLogUpdateManyMutationInput, SessionLogUncheckedUpdateManyInput>
    /**
     * Filter which SessionLogs to update
     */
    where?: SessionLogWhereInput
    /**
     * Limit how many SessionLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionLog upsert
   */
  export type SessionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionLog to update in case it exists.
     */
    where: SessionLogWhereUniqueInput
    /**
     * In case the SessionLog found by the `where` argument doesn't exist, create a new SessionLog with this data.
     */
    create: XOR<SessionLogCreateInput, SessionLogUncheckedCreateInput>
    /**
     * In case the SessionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionLogUpdateInput, SessionLogUncheckedUpdateInput>
  }

  /**
   * SessionLog delete
   */
  export type SessionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
    /**
     * Filter which SessionLog to delete.
     */
    where: SessionLogWhereUniqueInput
  }

  /**
   * SessionLog deleteMany
   */
  export type SessionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionLogs to delete
     */
    where?: SessionLogWhereInput
    /**
     * Limit how many SessionLogs to delete.
     */
    limit?: number
  }

  /**
   * SessionLog without action
   */
  export type SessionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionLog
     */
    omit?: SessionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionLogInclude<ExtArgs> | null
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
    userId: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    type: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
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
    userId: string
    message: string
    type: string
    isRead: boolean
    createdAt: Date
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
    userId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "type" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      message: string
      type: string
      isRead: boolean
      createdAt: Date
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    mustChangePassword: 'mustChangePassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InstructorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type InstructorProfileScalarFieldEnum = (typeof InstructorProfileScalarFieldEnum)[keyof typeof InstructorProfileScalarFieldEnum]


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    instructorId: 'instructorId',
    preferredUnit: 'preferredUnit',
    age: 'age',
    gender: 'gender',
    height: 'height'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const BodyMeasurementScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    date: 'date',
    weight: 'weight',
    bmi: 'bmi'
  };

  export type BodyMeasurementScalarFieldEnum = (typeof BodyMeasurementScalarFieldEnum)[keyof typeof BodyMeasurementScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    muscleGroup: 'muscleGroup',
    VideoUrl: 'VideoUrl'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const WorkoutPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    instructorId: 'instructorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkoutPlanScalarFieldEnum = (typeof WorkoutPlanScalarFieldEnum)[keyof typeof WorkoutPlanScalarFieldEnum]


  export const WorkoutRoutineScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    name: 'name'
  };

  export type WorkoutRoutineScalarFieldEnum = (typeof WorkoutRoutineScalarFieldEnum)[keyof typeof WorkoutRoutineScalarFieldEnum]


  export const RoutineExerciseScalarFieldEnum: {
    id: 'id',
    routineId: 'routineId',
    exerciseId: 'exerciseId',
    sets: 'sets',
    reps: 'reps',
    rpe: 'rpe',
    restTime: 'restTime',
    order: 'order'
  };

  export type RoutineExerciseScalarFieldEnum = (typeof RoutineExerciseScalarFieldEnum)[keyof typeof RoutineExerciseScalarFieldEnum]


  export const WorkoutSessionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    routineId: 'routineId',
    date: 'date',
    status: 'status',
    duration: 'duration'
  };

  export type WorkoutSessionScalarFieldEnum = (typeof WorkoutSessionScalarFieldEnum)[keyof typeof WorkoutSessionScalarFieldEnum]


  export const SessionLogScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    exerciseId: 'exerciseId',
    setNumber: 'setNumber',
    weight: 'weight',
    weightUnit: 'weightUnit',
    reps: 'reps',
    rpe: 'rpe',
    duration: 'duration',
    notes: 'notes'
  };

  export type SessionLogScalarFieldEnum = (typeof SessionLogScalarFieldEnum)[keyof typeof SessionLogScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


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
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    mustChangePassword?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    instructorProfile?: XOR<InstructorProfileNullableScalarRelationFilter, InstructorProfileWhereInput> | null
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mustChangePassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructorProfile?: InstructorProfileOrderByWithRelationInput
    studentProfile?: StudentProfileOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    mustChangePassword?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    instructorProfile?: XOR<InstructorProfileNullableScalarRelationFilter, InstructorProfileWhereInput> | null
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mustChangePassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    mustChangePassword?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InstructorProfileWhereInput = {
    AND?: InstructorProfileWhereInput | InstructorProfileWhereInput[]
    OR?: InstructorProfileWhereInput[]
    NOT?: InstructorProfileWhereInput | InstructorProfileWhereInput[]
    id?: StringFilter<"InstructorProfile"> | string
    userId?: StringFilter<"InstructorProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    students?: StudentProfileListRelationFilter
    plans?: WorkoutPlanListRelationFilter
  }

  export type InstructorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    students?: StudentProfileOrderByRelationAggregateInput
    plans?: WorkoutPlanOrderByRelationAggregateInput
  }

  export type InstructorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: InstructorProfileWhereInput | InstructorProfileWhereInput[]
    OR?: InstructorProfileWhereInput[]
    NOT?: InstructorProfileWhereInput | InstructorProfileWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    students?: StudentProfileListRelationFilter
    plans?: WorkoutPlanListRelationFilter
  }, "id" | "userId">

  export type InstructorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: InstructorProfileCountOrderByAggregateInput
    _max?: InstructorProfileMaxOrderByAggregateInput
    _min?: InstructorProfileMinOrderByAggregateInput
  }

  export type InstructorProfileScalarWhereWithAggregatesInput = {
    AND?: InstructorProfileScalarWhereWithAggregatesInput | InstructorProfileScalarWhereWithAggregatesInput[]
    OR?: InstructorProfileScalarWhereWithAggregatesInput[]
    NOT?: InstructorProfileScalarWhereWithAggregatesInput | InstructorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstructorProfile"> | string
    userId?: StringWithAggregatesFilter<"InstructorProfile"> | string
  }

  export type StudentProfileWhereInput = {
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    userId?: StringFilter<"StudentProfile"> | string
    instructorId?: StringNullableFilter<"StudentProfile"> | string | null
    preferredUnit?: StringFilter<"StudentProfile"> | string
    age?: IntNullableFilter<"StudentProfile"> | number | null
    gender?: StringNullableFilter<"StudentProfile"> | string | null
    height?: FloatNullableFilter<"StudentProfile"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    instructor?: XOR<InstructorProfileNullableScalarRelationFilter, InstructorProfileWhereInput> | null
    plans?: WorkoutPlanListRelationFilter
    workoutSessions?: WorkoutSessionListRelationFilter
    bodyMeasurements?: BodyMeasurementListRelationFilter
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    instructorId?: SortOrderInput | SortOrder
    preferredUnit?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    instructor?: InstructorProfileOrderByWithRelationInput
    plans?: WorkoutPlanOrderByRelationAggregateInput
    workoutSessions?: WorkoutSessionOrderByRelationAggregateInput
    bodyMeasurements?: BodyMeasurementOrderByRelationAggregateInput
  }

  export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    instructorId?: StringNullableFilter<"StudentProfile"> | string | null
    preferredUnit?: StringFilter<"StudentProfile"> | string
    age?: IntNullableFilter<"StudentProfile"> | number | null
    gender?: StringNullableFilter<"StudentProfile"> | string | null
    height?: FloatNullableFilter<"StudentProfile"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    instructor?: XOR<InstructorProfileNullableScalarRelationFilter, InstructorProfileWhereInput> | null
    plans?: WorkoutPlanListRelationFilter
    workoutSessions?: WorkoutSessionListRelationFilter
    bodyMeasurements?: BodyMeasurementListRelationFilter
  }, "id" | "userId">

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    instructorId?: SortOrderInput | SortOrder
    preferredUnit?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _avg?: StudentProfileAvgOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
    _sum?: StudentProfileSumOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    OR?: StudentProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentProfile"> | string
    userId?: StringWithAggregatesFilter<"StudentProfile"> | string
    instructorId?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    preferredUnit?: StringWithAggregatesFilter<"StudentProfile"> | string
    age?: IntNullableWithAggregatesFilter<"StudentProfile"> | number | null
    gender?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    height?: FloatNullableWithAggregatesFilter<"StudentProfile"> | number | null
  }

  export type BodyMeasurementWhereInput = {
    AND?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    OR?: BodyMeasurementWhereInput[]
    NOT?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    id?: StringFilter<"BodyMeasurement"> | string
    studentId?: StringFilter<"BodyMeasurement"> | string
    date?: DateTimeFilter<"BodyMeasurement"> | Date | string
    weight?: FloatFilter<"BodyMeasurement"> | number
    bmi?: FloatNullableFilter<"BodyMeasurement"> | number | null
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }

  export type BodyMeasurementOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    bmi?: SortOrderInput | SortOrder
    student?: StudentProfileOrderByWithRelationInput
  }

  export type BodyMeasurementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    OR?: BodyMeasurementWhereInput[]
    NOT?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    studentId?: StringFilter<"BodyMeasurement"> | string
    date?: DateTimeFilter<"BodyMeasurement"> | Date | string
    weight?: FloatFilter<"BodyMeasurement"> | number
    bmi?: FloatNullableFilter<"BodyMeasurement"> | number | null
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }, "id">

  export type BodyMeasurementOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    bmi?: SortOrderInput | SortOrder
    _count?: BodyMeasurementCountOrderByAggregateInput
    _avg?: BodyMeasurementAvgOrderByAggregateInput
    _max?: BodyMeasurementMaxOrderByAggregateInput
    _min?: BodyMeasurementMinOrderByAggregateInput
    _sum?: BodyMeasurementSumOrderByAggregateInput
  }

  export type BodyMeasurementScalarWhereWithAggregatesInput = {
    AND?: BodyMeasurementScalarWhereWithAggregatesInput | BodyMeasurementScalarWhereWithAggregatesInput[]
    OR?: BodyMeasurementScalarWhereWithAggregatesInput[]
    NOT?: BodyMeasurementScalarWhereWithAggregatesInput | BodyMeasurementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BodyMeasurement"> | string
    studentId?: StringWithAggregatesFilter<"BodyMeasurement"> | string
    date?: DateTimeWithAggregatesFilter<"BodyMeasurement"> | Date | string
    weight?: FloatWithAggregatesFilter<"BodyMeasurement"> | number
    bmi?: FloatNullableWithAggregatesFilter<"BodyMeasurement"> | number | null
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    muscleGroup?: StringNullableFilter<"Exercise"> | string | null
    VideoUrl?: StringNullableFilter<"Exercise"> | string | null
    routineExercises?: RoutineExerciseListRelationFilter
    sessionLogs?: SessionLogListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    muscleGroup?: SortOrderInput | SortOrder
    VideoUrl?: SortOrderInput | SortOrder
    routineExercises?: RoutineExerciseOrderByRelationAggregateInput
    sessionLogs?: SessionLogOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    muscleGroup?: StringNullableFilter<"Exercise"> | string | null
    VideoUrl?: StringNullableFilter<"Exercise"> | string | null
    routineExercises?: RoutineExerciseListRelationFilter
    sessionLogs?: SessionLogListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    muscleGroup?: SortOrderInput | SortOrder
    VideoUrl?: SortOrderInput | SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    description?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    muscleGroup?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    VideoUrl?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
  }

  export type WorkoutPlanWhereInput = {
    AND?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    OR?: WorkoutPlanWhereInput[]
    NOT?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    id?: StringFilter<"WorkoutPlan"> | string
    name?: StringFilter<"WorkoutPlan"> | string
    description?: StringNullableFilter<"WorkoutPlan"> | string | null
    instructorId?: StringFilter<"WorkoutPlan"> | string
    createdAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    instructor?: XOR<InstructorProfileScalarRelationFilter, InstructorProfileWhereInput>
    students?: StudentProfileListRelationFilter
    routines?: WorkoutRoutineListRelationFilter
  }

  export type WorkoutPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructor?: InstructorProfileOrderByWithRelationInput
    students?: StudentProfileOrderByRelationAggregateInput
    routines?: WorkoutRoutineOrderByRelationAggregateInput
  }

  export type WorkoutPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    OR?: WorkoutPlanWhereInput[]
    NOT?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    name?: StringFilter<"WorkoutPlan"> | string
    description?: StringNullableFilter<"WorkoutPlan"> | string | null
    instructorId?: StringFilter<"WorkoutPlan"> | string
    createdAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    instructor?: XOR<InstructorProfileScalarRelationFilter, InstructorProfileWhereInput>
    students?: StudentProfileListRelationFilter
    routines?: WorkoutRoutineListRelationFilter
  }, "id">

  export type WorkoutPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkoutPlanCountOrderByAggregateInput
    _max?: WorkoutPlanMaxOrderByAggregateInput
    _min?: WorkoutPlanMinOrderByAggregateInput
  }

  export type WorkoutPlanScalarWhereWithAggregatesInput = {
    AND?: WorkoutPlanScalarWhereWithAggregatesInput | WorkoutPlanScalarWhereWithAggregatesInput[]
    OR?: WorkoutPlanScalarWhereWithAggregatesInput[]
    NOT?: WorkoutPlanScalarWhereWithAggregatesInput | WorkoutPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    name?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    description?: StringNullableWithAggregatesFilter<"WorkoutPlan"> | string | null
    instructorId?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkoutPlan"> | Date | string
  }

  export type WorkoutRoutineWhereInput = {
    AND?: WorkoutRoutineWhereInput | WorkoutRoutineWhereInput[]
    OR?: WorkoutRoutineWhereInput[]
    NOT?: WorkoutRoutineWhereInput | WorkoutRoutineWhereInput[]
    id?: StringFilter<"WorkoutRoutine"> | string
    planId?: StringFilter<"WorkoutRoutine"> | string
    name?: StringFilter<"WorkoutRoutine"> | string
    plan?: XOR<WorkoutPlanScalarRelationFilter, WorkoutPlanWhereInput>
    exercises?: RoutineExerciseListRelationFilter
    sessions?: WorkoutSessionListRelationFilter
  }

  export type WorkoutRoutineOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    name?: SortOrder
    plan?: WorkoutPlanOrderByWithRelationInput
    exercises?: RoutineExerciseOrderByRelationAggregateInput
    sessions?: WorkoutSessionOrderByRelationAggregateInput
  }

  export type WorkoutRoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutRoutineWhereInput | WorkoutRoutineWhereInput[]
    OR?: WorkoutRoutineWhereInput[]
    NOT?: WorkoutRoutineWhereInput | WorkoutRoutineWhereInput[]
    planId?: StringFilter<"WorkoutRoutine"> | string
    name?: StringFilter<"WorkoutRoutine"> | string
    plan?: XOR<WorkoutPlanScalarRelationFilter, WorkoutPlanWhereInput>
    exercises?: RoutineExerciseListRelationFilter
    sessions?: WorkoutSessionListRelationFilter
  }, "id">

  export type WorkoutRoutineOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    name?: SortOrder
    _count?: WorkoutRoutineCountOrderByAggregateInput
    _max?: WorkoutRoutineMaxOrderByAggregateInput
    _min?: WorkoutRoutineMinOrderByAggregateInput
  }

  export type WorkoutRoutineScalarWhereWithAggregatesInput = {
    AND?: WorkoutRoutineScalarWhereWithAggregatesInput | WorkoutRoutineScalarWhereWithAggregatesInput[]
    OR?: WorkoutRoutineScalarWhereWithAggregatesInput[]
    NOT?: WorkoutRoutineScalarWhereWithAggregatesInput | WorkoutRoutineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutRoutine"> | string
    planId?: StringWithAggregatesFilter<"WorkoutRoutine"> | string
    name?: StringWithAggregatesFilter<"WorkoutRoutine"> | string
  }

  export type RoutineExerciseWhereInput = {
    AND?: RoutineExerciseWhereInput | RoutineExerciseWhereInput[]
    OR?: RoutineExerciseWhereInput[]
    NOT?: RoutineExerciseWhereInput | RoutineExerciseWhereInput[]
    id?: StringFilter<"RoutineExercise"> | string
    routineId?: StringFilter<"RoutineExercise"> | string
    exerciseId?: StringFilter<"RoutineExercise"> | string
    sets?: IntFilter<"RoutineExercise"> | number
    reps?: IntFilter<"RoutineExercise"> | number
    rpe?: IntNullableFilter<"RoutineExercise"> | number | null
    restTime?: IntNullableFilter<"RoutineExercise"> | number | null
    order?: IntFilter<"RoutineExercise"> | number
    routine?: XOR<WorkoutRoutineScalarRelationFilter, WorkoutRoutineWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type RoutineExerciseOrderByWithRelationInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rpe?: SortOrderInput | SortOrder
    restTime?: SortOrderInput | SortOrder
    order?: SortOrder
    routine?: WorkoutRoutineOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type RoutineExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutineExerciseWhereInput | RoutineExerciseWhereInput[]
    OR?: RoutineExerciseWhereInput[]
    NOT?: RoutineExerciseWhereInput | RoutineExerciseWhereInput[]
    routineId?: StringFilter<"RoutineExercise"> | string
    exerciseId?: StringFilter<"RoutineExercise"> | string
    sets?: IntFilter<"RoutineExercise"> | number
    reps?: IntFilter<"RoutineExercise"> | number
    rpe?: IntNullableFilter<"RoutineExercise"> | number | null
    restTime?: IntNullableFilter<"RoutineExercise"> | number | null
    order?: IntFilter<"RoutineExercise"> | number
    routine?: XOR<WorkoutRoutineScalarRelationFilter, WorkoutRoutineWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type RoutineExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rpe?: SortOrderInput | SortOrder
    restTime?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: RoutineExerciseCountOrderByAggregateInput
    _avg?: RoutineExerciseAvgOrderByAggregateInput
    _max?: RoutineExerciseMaxOrderByAggregateInput
    _min?: RoutineExerciseMinOrderByAggregateInput
    _sum?: RoutineExerciseSumOrderByAggregateInput
  }

  export type RoutineExerciseScalarWhereWithAggregatesInput = {
    AND?: RoutineExerciseScalarWhereWithAggregatesInput | RoutineExerciseScalarWhereWithAggregatesInput[]
    OR?: RoutineExerciseScalarWhereWithAggregatesInput[]
    NOT?: RoutineExerciseScalarWhereWithAggregatesInput | RoutineExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoutineExercise"> | string
    routineId?: StringWithAggregatesFilter<"RoutineExercise"> | string
    exerciseId?: StringWithAggregatesFilter<"RoutineExercise"> | string
    sets?: IntWithAggregatesFilter<"RoutineExercise"> | number
    reps?: IntWithAggregatesFilter<"RoutineExercise"> | number
    rpe?: IntNullableWithAggregatesFilter<"RoutineExercise"> | number | null
    restTime?: IntNullableWithAggregatesFilter<"RoutineExercise"> | number | null
    order?: IntWithAggregatesFilter<"RoutineExercise"> | number
  }

  export type WorkoutSessionWhereInput = {
    AND?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    OR?: WorkoutSessionWhereInput[]
    NOT?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    id?: StringFilter<"WorkoutSession"> | string
    studentId?: StringFilter<"WorkoutSession"> | string
    routineId?: StringNullableFilter<"WorkoutSession"> | string | null
    date?: DateTimeFilter<"WorkoutSession"> | Date | string
    status?: StringFilter<"WorkoutSession"> | string
    duration?: IntNullableFilter<"WorkoutSession"> | number | null
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    routine?: XOR<WorkoutRoutineNullableScalarRelationFilter, WorkoutRoutineWhereInput> | null
    logs?: SessionLogListRelationFilter
  }

  export type WorkoutSessionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    routineId?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    student?: StudentProfileOrderByWithRelationInput
    routine?: WorkoutRoutineOrderByWithRelationInput
    logs?: SessionLogOrderByRelationAggregateInput
  }

  export type WorkoutSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    OR?: WorkoutSessionWhereInput[]
    NOT?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    studentId?: StringFilter<"WorkoutSession"> | string
    routineId?: StringNullableFilter<"WorkoutSession"> | string | null
    date?: DateTimeFilter<"WorkoutSession"> | Date | string
    status?: StringFilter<"WorkoutSession"> | string
    duration?: IntNullableFilter<"WorkoutSession"> | number | null
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    routine?: XOR<WorkoutRoutineNullableScalarRelationFilter, WorkoutRoutineWhereInput> | null
    logs?: SessionLogListRelationFilter
  }, "id">

  export type WorkoutSessionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    routineId?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    _count?: WorkoutSessionCountOrderByAggregateInput
    _avg?: WorkoutSessionAvgOrderByAggregateInput
    _max?: WorkoutSessionMaxOrderByAggregateInput
    _min?: WorkoutSessionMinOrderByAggregateInput
    _sum?: WorkoutSessionSumOrderByAggregateInput
  }

  export type WorkoutSessionScalarWhereWithAggregatesInput = {
    AND?: WorkoutSessionScalarWhereWithAggregatesInput | WorkoutSessionScalarWhereWithAggregatesInput[]
    OR?: WorkoutSessionScalarWhereWithAggregatesInput[]
    NOT?: WorkoutSessionScalarWhereWithAggregatesInput | WorkoutSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutSession"> | string
    studentId?: StringWithAggregatesFilter<"WorkoutSession"> | string
    routineId?: StringNullableWithAggregatesFilter<"WorkoutSession"> | string | null
    date?: DateTimeWithAggregatesFilter<"WorkoutSession"> | Date | string
    status?: StringWithAggregatesFilter<"WorkoutSession"> | string
    duration?: IntNullableWithAggregatesFilter<"WorkoutSession"> | number | null
  }

  export type SessionLogWhereInput = {
    AND?: SessionLogWhereInput | SessionLogWhereInput[]
    OR?: SessionLogWhereInput[]
    NOT?: SessionLogWhereInput | SessionLogWhereInput[]
    id?: StringFilter<"SessionLog"> | string
    sessionId?: StringFilter<"SessionLog"> | string
    exerciseId?: StringFilter<"SessionLog"> | string
    setNumber?: IntFilter<"SessionLog"> | number
    weight?: FloatFilter<"SessionLog"> | number
    weightUnit?: StringFilter<"SessionLog"> | string
    reps?: IntFilter<"SessionLog"> | number
    rpe?: IntNullableFilter<"SessionLog"> | number | null
    duration?: IntNullableFilter<"SessionLog"> | number | null
    notes?: StringNullableFilter<"SessionLog"> | string | null
    session?: XOR<WorkoutSessionScalarRelationFilter, WorkoutSessionWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type SessionLogOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    exerciseId?: SortOrder
    setNumber?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    reps?: SortOrder
    rpe?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    session?: WorkoutSessionOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type SessionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionLogWhereInput | SessionLogWhereInput[]
    OR?: SessionLogWhereInput[]
    NOT?: SessionLogWhereInput | SessionLogWhereInput[]
    sessionId?: StringFilter<"SessionLog"> | string
    exerciseId?: StringFilter<"SessionLog"> | string
    setNumber?: IntFilter<"SessionLog"> | number
    weight?: FloatFilter<"SessionLog"> | number
    weightUnit?: StringFilter<"SessionLog"> | string
    reps?: IntFilter<"SessionLog"> | number
    rpe?: IntNullableFilter<"SessionLog"> | number | null
    duration?: IntNullableFilter<"SessionLog"> | number | null
    notes?: StringNullableFilter<"SessionLog"> | string | null
    session?: XOR<WorkoutSessionScalarRelationFilter, WorkoutSessionWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type SessionLogOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    exerciseId?: SortOrder
    setNumber?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    reps?: SortOrder
    rpe?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: SessionLogCountOrderByAggregateInput
    _avg?: SessionLogAvgOrderByAggregateInput
    _max?: SessionLogMaxOrderByAggregateInput
    _min?: SessionLogMinOrderByAggregateInput
    _sum?: SessionLogSumOrderByAggregateInput
  }

  export type SessionLogScalarWhereWithAggregatesInput = {
    AND?: SessionLogScalarWhereWithAggregatesInput | SessionLogScalarWhereWithAggregatesInput[]
    OR?: SessionLogScalarWhereWithAggregatesInput[]
    NOT?: SessionLogScalarWhereWithAggregatesInput | SessionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionLog"> | string
    sessionId?: StringWithAggregatesFilter<"SessionLog"> | string
    exerciseId?: StringWithAggregatesFilter<"SessionLog"> | string
    setNumber?: IntWithAggregatesFilter<"SessionLog"> | number
    weight?: FloatWithAggregatesFilter<"SessionLog"> | number
    weightUnit?: StringWithAggregatesFilter<"SessionLog"> | string
    reps?: IntWithAggregatesFilter<"SessionLog"> | number
    rpe?: IntNullableWithAggregatesFilter<"SessionLog"> | number | null
    duration?: IntNullableWithAggregatesFilter<"SessionLog"> | number | null
    notes?: StringNullableWithAggregatesFilter<"SessionLog"> | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorProfileCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutInstructorProfileInput
    students?: StudentProfileCreateNestedManyWithoutInstructorInput
    plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
  }

  export type InstructorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    students?: StudentProfileUncheckedCreateNestedManyWithoutInstructorInput
    plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInstructorProfileNestedInput
    students?: StudentProfileUpdateManyWithoutInstructorNestedInput
    plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    students?: StudentProfileUncheckedUpdateManyWithoutInstructorNestedInput
    plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorProfileCreateManyInput = {
    id?: string
    userId: string
  }

  export type InstructorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentProfileCreateInput = {
    id?: string
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    user: UserCreateNestedOneWithoutStudentProfileInput
    instructor?: InstructorProfileCreateNestedOneWithoutStudentsInput
    plans?: WorkoutPlanCreateNestedManyWithoutStudentsInput
    workoutSessions?: WorkoutSessionCreateNestedManyWithoutStudentInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateInput = {
    id?: string
    userId: string
    instructorId?: string | null
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    plans?: WorkoutPlanUncheckedCreateNestedManyWithoutStudentsInput
    workoutSessions?: WorkoutSessionUncheckedCreateNestedManyWithoutStudentInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    instructor?: InstructorProfileUpdateOneWithoutStudentsNestedInput
    plans?: WorkoutPlanUpdateManyWithoutStudentsNestedInput
    workoutSessions?: WorkoutSessionUpdateManyWithoutStudentNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    plans?: WorkoutPlanUncheckedUpdateManyWithoutStudentsNestedInput
    workoutSessions?: WorkoutSessionUncheckedUpdateManyWithoutStudentNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateManyInput = {
    id?: string
    userId: string
    instructorId?: string | null
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
  }

  export type StudentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BodyMeasurementCreateInput = {
    id?: string
    date?: Date | string
    weight: number
    bmi?: number | null
    student: StudentProfileCreateNestedOneWithoutBodyMeasurementsInput
  }

  export type BodyMeasurementUncheckedCreateInput = {
    id?: string
    studentId: string
    date?: Date | string
    weight: number
    bmi?: number | null
  }

  export type BodyMeasurementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    student?: StudentProfileUpdateOneRequiredWithoutBodyMeasurementsNestedInput
  }

  export type BodyMeasurementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BodyMeasurementCreateManyInput = {
    id?: string
    studentId: string
    date?: Date | string
    weight: number
    bmi?: number | null
  }

  export type BodyMeasurementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BodyMeasurementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ExerciseCreateInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup?: string | null
    VideoUrl?: string | null
    routineExercises?: RoutineExerciseCreateNestedManyWithoutExerciseInput
    sessionLogs?: SessionLogCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup?: string | null
    VideoUrl?: string | null
    routineExercises?: RoutineExerciseUncheckedCreateNestedManyWithoutExerciseInput
    sessionLogs?: SessionLogUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: NullableStringFieldUpdateOperationsInput | string | null
    VideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    routineExercises?: RoutineExerciseUpdateManyWithoutExerciseNestedInput
    sessionLogs?: SessionLogUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: NullableStringFieldUpdateOperationsInput | string | null
    VideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    routineExercises?: RoutineExerciseUncheckedUpdateManyWithoutExerciseNestedInput
    sessionLogs?: SessionLogUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup?: string | null
    VideoUrl?: string | null
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: NullableStringFieldUpdateOperationsInput | string | null
    VideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: NullableStringFieldUpdateOperationsInput | string | null
    VideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutPlanCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: InstructorProfileCreateNestedOneWithoutPlansInput
    students?: StudentProfileCreateNestedManyWithoutPlansInput
    routines?: WorkoutRoutineCreateNestedManyWithoutPlanInput
  }

  export type WorkoutPlanUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    instructorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentProfileUncheckedCreateNestedManyWithoutPlansInput
    routines?: WorkoutRoutineUncheckedCreateNestedManyWithoutPlanInput
  }

  export type WorkoutPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorProfileUpdateOneRequiredWithoutPlansNestedInput
    students?: StudentProfileUpdateManyWithoutPlansNestedInput
    routines?: WorkoutRoutineUpdateManyWithoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentProfileUncheckedUpdateManyWithoutPlansNestedInput
    routines?: WorkoutRoutineUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type WorkoutPlanCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    instructorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutRoutineCreateInput = {
    id?: string
    name: string
    plan: WorkoutPlanCreateNestedOneWithoutRoutinesInput
    exercises?: RoutineExerciseCreateNestedManyWithoutRoutineInput
    sessions?: WorkoutSessionCreateNestedManyWithoutRoutineInput
  }

  export type WorkoutRoutineUncheckedCreateInput = {
    id?: string
    planId: string
    name: string
    exercises?: RoutineExerciseUncheckedCreateNestedManyWithoutRoutineInput
    sessions?: WorkoutSessionUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type WorkoutRoutineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plan?: WorkoutPlanUpdateOneRequiredWithoutRoutinesNestedInput
    exercises?: RoutineExerciseUpdateManyWithoutRoutineNestedInput
    sessions?: WorkoutSessionUpdateManyWithoutRoutineNestedInput
  }

  export type WorkoutRoutineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exercises?: RoutineExerciseUncheckedUpdateManyWithoutRoutineNestedInput
    sessions?: WorkoutSessionUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type WorkoutRoutineCreateManyInput = {
    id?: string
    planId: string
    name: string
  }

  export type WorkoutRoutineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutRoutineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineExerciseCreateInput = {
    id?: string
    sets: number
    reps: number
    rpe?: number | null
    restTime?: number | null
    order: number
    routine: WorkoutRoutineCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutRoutineExercisesInput
  }

  export type RoutineExerciseUncheckedCreateInput = {
    id?: string
    routineId: string
    exerciseId: string
    sets: number
    reps: number
    rpe?: number | null
    restTime?: number | null
    order: number
  }

  export type RoutineExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    routine?: WorkoutRoutineUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutRoutineExercisesNestedInput
  }

  export type RoutineExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineExerciseCreateManyInput = {
    id?: string
    routineId: string
    exerciseId: string
    sets: number
    reps: number
    rpe?: number | null
    restTime?: number | null
    order: number
  }

  export type RoutineExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutSessionCreateInput = {
    id?: string
    date?: Date | string
    status?: string
    duration?: number | null
    student: StudentProfileCreateNestedOneWithoutWorkoutSessionsInput
    routine?: WorkoutRoutineCreateNestedOneWithoutSessionsInput
    logs?: SessionLogCreateNestedManyWithoutSessionInput
  }

  export type WorkoutSessionUncheckedCreateInput = {
    id?: string
    studentId: string
    routineId?: string | null
    date?: Date | string
    status?: string
    duration?: number | null
    logs?: SessionLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type WorkoutSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    student?: StudentProfileUpdateOneRequiredWithoutWorkoutSessionsNestedInput
    routine?: WorkoutRoutineUpdateOneWithoutSessionsNestedInput
    logs?: SessionLogUpdateManyWithoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    routineId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: SessionLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type WorkoutSessionCreateManyInput = {
    id?: string
    studentId: string
    routineId?: string | null
    date?: Date | string
    status?: string
    duration?: number | null
  }

  export type WorkoutSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    routineId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionLogCreateInput = {
    id?: string
    setNumber: number
    weight: number
    weightUnit?: string
    reps: number
    rpe?: number | null
    duration?: number | null
    notes?: string | null
    session: WorkoutSessionCreateNestedOneWithoutLogsInput
    exercise: ExerciseCreateNestedOneWithoutSessionLogsInput
  }

  export type SessionLogUncheckedCreateInput = {
    id?: string
    sessionId: string
    exerciseId: string
    setNumber: number
    weight: number
    weightUnit?: string
    reps: number
    rpe?: number | null
    duration?: number | null
    notes?: string | null
  }

  export type SessionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    session?: WorkoutSessionUpdateOneRequiredWithoutLogsNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutSessionLogsNestedInput
  }

  export type SessionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionLogCreateManyInput = {
    id?: string
    sessionId: string
    exerciseId: string
    setNumber: number
    weight: number
    weightUnit?: string
    reps: number
    rpe?: number | null
    duration?: number | null
    notes?: string | null
  }

  export type SessionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type InstructorProfileNullableScalarRelationFilter = {
    is?: InstructorProfileWhereInput | null
    isNot?: InstructorProfileWhereInput | null
  }

  export type StudentProfileNullableScalarRelationFilter = {
    is?: StudentProfileWhereInput | null
    isNot?: StudentProfileWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mustChangePassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mustChangePassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mustChangePassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudentProfileListRelationFilter = {
    every?: StudentProfileWhereInput
    some?: StudentProfileWhereInput
    none?: StudentProfileWhereInput
  }

  export type WorkoutPlanListRelationFilter = {
    every?: WorkoutPlanWhereInput
    some?: WorkoutPlanWhereInput
    none?: WorkoutPlanWhereInput
  }

  export type StudentProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InstructorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InstructorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type WorkoutSessionListRelationFilter = {
    every?: WorkoutSessionWhereInput
    some?: WorkoutSessionWhereInput
    none?: WorkoutSessionWhereInput
  }

  export type BodyMeasurementListRelationFilter = {
    every?: BodyMeasurementWhereInput
    some?: BodyMeasurementWhereInput
    none?: BodyMeasurementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkoutSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BodyMeasurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instructorId?: SortOrder
    preferredUnit?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
  }

  export type StudentProfileAvgOrderByAggregateInput = {
    age?: SortOrder
    height?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instructorId?: SortOrder
    preferredUnit?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instructorId?: SortOrder
    preferredUnit?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
  }

  export type StudentProfileSumOrderByAggregateInput = {
    age?: SortOrder
    height?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StudentProfileScalarRelationFilter = {
    is?: StudentProfileWhereInput
    isNot?: StudentProfileWhereInput
  }

  export type BodyMeasurementCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    bmi?: SortOrder
  }

  export type BodyMeasurementAvgOrderByAggregateInput = {
    weight?: SortOrder
    bmi?: SortOrder
  }

  export type BodyMeasurementMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    bmi?: SortOrder
  }

  export type BodyMeasurementMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    bmi?: SortOrder
  }

  export type BodyMeasurementSumOrderByAggregateInput = {
    weight?: SortOrder
    bmi?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RoutineExerciseListRelationFilter = {
    every?: RoutineExerciseWhereInput
    some?: RoutineExerciseWhereInput
    none?: RoutineExerciseWhereInput
  }

  export type SessionLogListRelationFilter = {
    every?: SessionLogWhereInput
    some?: SessionLogWhereInput
    none?: SessionLogWhereInput
  }

  export type RoutineExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscleGroup?: SortOrder
    VideoUrl?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscleGroup?: SortOrder
    VideoUrl?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscleGroup?: SortOrder
    VideoUrl?: SortOrder
  }

  export type InstructorProfileScalarRelationFilter = {
    is?: InstructorProfileWhereInput
    isNot?: InstructorProfileWhereInput
  }

  export type WorkoutRoutineListRelationFilter = {
    every?: WorkoutRoutineWhereInput
    some?: WorkoutRoutineWhereInput
    none?: WorkoutRoutineWhereInput
  }

  export type WorkoutRoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutPlanScalarRelationFilter = {
    is?: WorkoutPlanWhereInput
    isNot?: WorkoutPlanWhereInput
  }

  export type WorkoutRoutineCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    name?: SortOrder
  }

  export type WorkoutRoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    name?: SortOrder
  }

  export type WorkoutRoutineMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    name?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WorkoutRoutineScalarRelationFilter = {
    is?: WorkoutRoutineWhereInput
    isNot?: WorkoutRoutineWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type RoutineExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rpe?: SortOrder
    restTime?: SortOrder
    order?: SortOrder
  }

  export type RoutineExerciseAvgOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    rpe?: SortOrder
    restTime?: SortOrder
    order?: SortOrder
  }

  export type RoutineExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rpe?: SortOrder
    restTime?: SortOrder
    order?: SortOrder
  }

  export type RoutineExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rpe?: SortOrder
    restTime?: SortOrder
    order?: SortOrder
  }

  export type RoutineExerciseSumOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    rpe?: SortOrder
    restTime?: SortOrder
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type WorkoutRoutineNullableScalarRelationFilter = {
    is?: WorkoutRoutineWhereInput | null
    isNot?: WorkoutRoutineWhereInput | null
  }

  export type WorkoutSessionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    routineId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    duration?: SortOrder
  }

  export type WorkoutSessionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type WorkoutSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    routineId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    duration?: SortOrder
  }

  export type WorkoutSessionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    routineId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    duration?: SortOrder
  }

  export type WorkoutSessionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type WorkoutSessionScalarRelationFilter = {
    is?: WorkoutSessionWhereInput
    isNot?: WorkoutSessionWhereInput
  }

  export type SessionLogCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    exerciseId?: SortOrder
    setNumber?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    reps?: SortOrder
    rpe?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
  }

  export type SessionLogAvgOrderByAggregateInput = {
    setNumber?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    rpe?: SortOrder
    duration?: SortOrder
  }

  export type SessionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    exerciseId?: SortOrder
    setNumber?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    reps?: SortOrder
    rpe?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
  }

  export type SessionLogMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    exerciseId?: SortOrder
    setNumber?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    reps?: SortOrder
    rpe?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
  }

  export type SessionLogSumOrderByAggregateInput = {
    setNumber?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    rpe?: SortOrder
    duration?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type InstructorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutUserInput
    connect?: InstructorProfileWhereUniqueInput
  }

  export type StudentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type InstructorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutUserInput
    connect?: InstructorProfileWhereUniqueInput
  }

  export type StudentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InstructorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutUserInput
    upsert?: InstructorProfileUpsertWithoutUserInput
    disconnect?: InstructorProfileWhereInput | boolean
    delete?: InstructorProfileWhereInput | boolean
    connect?: InstructorProfileWhereUniqueInput
    update?: XOR<XOR<InstructorProfileUpdateToOneWithWhereWithoutUserInput, InstructorProfileUpdateWithoutUserInput>, InstructorProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type InstructorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutUserInput
    upsert?: InstructorProfileUpsertWithoutUserInput
    disconnect?: InstructorProfileWhereInput | boolean
    delete?: InstructorProfileWhereInput | boolean
    connect?: InstructorProfileWhereUniqueInput
    update?: XOR<XOR<InstructorProfileUpdateToOneWithWhereWithoutUserInput, InstructorProfileUpdateWithoutUserInput>, InstructorProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInstructorProfileInput = {
    create?: XOR<UserCreateWithoutInstructorProfileInput, UserUncheckedCreateWithoutInstructorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type StudentProfileCreateNestedManyWithoutInstructorInput = {
    create?: XOR<StudentProfileCreateWithoutInstructorInput, StudentProfileUncheckedCreateWithoutInstructorInput> | StudentProfileCreateWithoutInstructorInput[] | StudentProfileUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutInstructorInput | StudentProfileCreateOrConnectWithoutInstructorInput[]
    createMany?: StudentProfileCreateManyInstructorInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type WorkoutPlanCreateNestedManyWithoutInstructorInput = {
    create?: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput> | WorkoutPlanCreateWithoutInstructorInput[] | WorkoutPlanUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutInstructorInput | WorkoutPlanCreateOrConnectWithoutInstructorInput[]
    createMany?: WorkoutPlanCreateManyInstructorInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type StudentProfileUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<StudentProfileCreateWithoutInstructorInput, StudentProfileUncheckedCreateWithoutInstructorInput> | StudentProfileCreateWithoutInstructorInput[] | StudentProfileUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutInstructorInput | StudentProfileCreateOrConnectWithoutInstructorInput[]
    createMany?: StudentProfileCreateManyInstructorInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput> | WorkoutPlanCreateWithoutInstructorInput[] | WorkoutPlanUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutInstructorInput | WorkoutPlanCreateOrConnectWithoutInstructorInput[]
    createMany?: WorkoutPlanCreateManyInstructorInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutInstructorProfileNestedInput = {
    create?: XOR<UserCreateWithoutInstructorProfileInput, UserUncheckedCreateWithoutInstructorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorProfileInput
    upsert?: UserUpsertWithoutInstructorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstructorProfileInput, UserUpdateWithoutInstructorProfileInput>, UserUncheckedUpdateWithoutInstructorProfileInput>
  }

  export type StudentProfileUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<StudentProfileCreateWithoutInstructorInput, StudentProfileUncheckedCreateWithoutInstructorInput> | StudentProfileCreateWithoutInstructorInput[] | StudentProfileUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutInstructorInput | StudentProfileCreateOrConnectWithoutInstructorInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutInstructorInput | StudentProfileUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: StudentProfileCreateManyInstructorInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutInstructorInput | StudentProfileUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutInstructorInput | StudentProfileUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type WorkoutPlanUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput> | WorkoutPlanCreateWithoutInstructorInput[] | WorkoutPlanUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutInstructorInput | WorkoutPlanCreateOrConnectWithoutInstructorInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutInstructorInput | WorkoutPlanUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: WorkoutPlanCreateManyInstructorInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutInstructorInput | WorkoutPlanUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutInstructorInput | WorkoutPlanUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type StudentProfileUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<StudentProfileCreateWithoutInstructorInput, StudentProfileUncheckedCreateWithoutInstructorInput> | StudentProfileCreateWithoutInstructorInput[] | StudentProfileUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutInstructorInput | StudentProfileCreateOrConnectWithoutInstructorInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutInstructorInput | StudentProfileUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: StudentProfileCreateManyInstructorInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutInstructorInput | StudentProfileUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutInstructorInput | StudentProfileUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput> | WorkoutPlanCreateWithoutInstructorInput[] | WorkoutPlanUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutInstructorInput | WorkoutPlanCreateOrConnectWithoutInstructorInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutInstructorInput | WorkoutPlanUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: WorkoutPlanCreateManyInstructorInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutInstructorInput | WorkoutPlanUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutInstructorInput | WorkoutPlanUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentProfileInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
  }

  export type InstructorProfileCreateNestedOneWithoutStudentsInput = {
    create?: XOR<InstructorProfileCreateWithoutStudentsInput, InstructorProfileUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutStudentsInput
    connect?: InstructorProfileWhereUniqueInput
  }

  export type WorkoutPlanCreateNestedManyWithoutStudentsInput = {
    create?: XOR<WorkoutPlanCreateWithoutStudentsInput, WorkoutPlanUncheckedCreateWithoutStudentsInput> | WorkoutPlanCreateWithoutStudentsInput[] | WorkoutPlanUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutStudentsInput | WorkoutPlanCreateOrConnectWithoutStudentsInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type WorkoutSessionCreateNestedManyWithoutStudentInput = {
    create?: XOR<WorkoutSessionCreateWithoutStudentInput, WorkoutSessionUncheckedCreateWithoutStudentInput> | WorkoutSessionCreateWithoutStudentInput[] | WorkoutSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutStudentInput | WorkoutSessionCreateOrConnectWithoutStudentInput[]
    createMany?: WorkoutSessionCreateManyStudentInputEnvelope
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
  }

  export type BodyMeasurementCreateNestedManyWithoutStudentInput = {
    create?: XOR<BodyMeasurementCreateWithoutStudentInput, BodyMeasurementUncheckedCreateWithoutStudentInput> | BodyMeasurementCreateWithoutStudentInput[] | BodyMeasurementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutStudentInput | BodyMeasurementCreateOrConnectWithoutStudentInput[]
    createMany?: BodyMeasurementCreateManyStudentInputEnvelope
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
  }

  export type WorkoutPlanUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<WorkoutPlanCreateWithoutStudentsInput, WorkoutPlanUncheckedCreateWithoutStudentsInput> | WorkoutPlanCreateWithoutStudentsInput[] | WorkoutPlanUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutStudentsInput | WorkoutPlanCreateOrConnectWithoutStudentsInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type WorkoutSessionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<WorkoutSessionCreateWithoutStudentInput, WorkoutSessionUncheckedCreateWithoutStudentInput> | WorkoutSessionCreateWithoutStudentInput[] | WorkoutSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutStudentInput | WorkoutSessionCreateOrConnectWithoutStudentInput[]
    createMany?: WorkoutSessionCreateManyStudentInputEnvelope
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
  }

  export type BodyMeasurementUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<BodyMeasurementCreateWithoutStudentInput, BodyMeasurementUncheckedCreateWithoutStudentInput> | BodyMeasurementCreateWithoutStudentInput[] | BodyMeasurementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutStudentInput | BodyMeasurementCreateOrConnectWithoutStudentInput[]
    createMany?: BodyMeasurementCreateManyStudentInputEnvelope
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
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

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStudentProfileNestedInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    upsert?: UserUpsertWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentProfileInput, UserUpdateWithoutStudentProfileInput>, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type InstructorProfileUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<InstructorProfileCreateWithoutStudentsInput, InstructorProfileUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutStudentsInput
    upsert?: InstructorProfileUpsertWithoutStudentsInput
    disconnect?: InstructorProfileWhereInput | boolean
    delete?: InstructorProfileWhereInput | boolean
    connect?: InstructorProfileWhereUniqueInput
    update?: XOR<XOR<InstructorProfileUpdateToOneWithWhereWithoutStudentsInput, InstructorProfileUpdateWithoutStudentsInput>, InstructorProfileUncheckedUpdateWithoutStudentsInput>
  }

  export type WorkoutPlanUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutStudentsInput, WorkoutPlanUncheckedCreateWithoutStudentsInput> | WorkoutPlanCreateWithoutStudentsInput[] | WorkoutPlanUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutStudentsInput | WorkoutPlanCreateOrConnectWithoutStudentsInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutStudentsInput | WorkoutPlanUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutStudentsInput | WorkoutPlanUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutStudentsInput | WorkoutPlanUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type WorkoutSessionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutStudentInput, WorkoutSessionUncheckedCreateWithoutStudentInput> | WorkoutSessionCreateWithoutStudentInput[] | WorkoutSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutStudentInput | WorkoutSessionCreateOrConnectWithoutStudentInput[]
    upsert?: WorkoutSessionUpsertWithWhereUniqueWithoutStudentInput | WorkoutSessionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: WorkoutSessionCreateManyStudentInputEnvelope
    set?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    disconnect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    delete?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    update?: WorkoutSessionUpdateWithWhereUniqueWithoutStudentInput | WorkoutSessionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: WorkoutSessionUpdateManyWithWhereWithoutStudentInput | WorkoutSessionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
  }

  export type BodyMeasurementUpdateManyWithoutStudentNestedInput = {
    create?: XOR<BodyMeasurementCreateWithoutStudentInput, BodyMeasurementUncheckedCreateWithoutStudentInput> | BodyMeasurementCreateWithoutStudentInput[] | BodyMeasurementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutStudentInput | BodyMeasurementCreateOrConnectWithoutStudentInput[]
    upsert?: BodyMeasurementUpsertWithWhereUniqueWithoutStudentInput | BodyMeasurementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: BodyMeasurementCreateManyStudentInputEnvelope
    set?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    disconnect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    delete?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    update?: BodyMeasurementUpdateWithWhereUniqueWithoutStudentInput | BodyMeasurementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: BodyMeasurementUpdateManyWithWhereWithoutStudentInput | BodyMeasurementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutStudentsInput, WorkoutPlanUncheckedCreateWithoutStudentsInput> | WorkoutPlanCreateWithoutStudentsInput[] | WorkoutPlanUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutStudentsInput | WorkoutPlanCreateOrConnectWithoutStudentsInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutStudentsInput | WorkoutPlanUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutStudentsInput | WorkoutPlanUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutStudentsInput | WorkoutPlanUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type WorkoutSessionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutStudentInput, WorkoutSessionUncheckedCreateWithoutStudentInput> | WorkoutSessionCreateWithoutStudentInput[] | WorkoutSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutStudentInput | WorkoutSessionCreateOrConnectWithoutStudentInput[]
    upsert?: WorkoutSessionUpsertWithWhereUniqueWithoutStudentInput | WorkoutSessionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: WorkoutSessionCreateManyStudentInputEnvelope
    set?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    disconnect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    delete?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    update?: WorkoutSessionUpdateWithWhereUniqueWithoutStudentInput | WorkoutSessionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: WorkoutSessionUpdateManyWithWhereWithoutStudentInput | WorkoutSessionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
  }

  export type BodyMeasurementUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<BodyMeasurementCreateWithoutStudentInput, BodyMeasurementUncheckedCreateWithoutStudentInput> | BodyMeasurementCreateWithoutStudentInput[] | BodyMeasurementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutStudentInput | BodyMeasurementCreateOrConnectWithoutStudentInput[]
    upsert?: BodyMeasurementUpsertWithWhereUniqueWithoutStudentInput | BodyMeasurementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: BodyMeasurementCreateManyStudentInputEnvelope
    set?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    disconnect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    delete?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    update?: BodyMeasurementUpdateWithWhereUniqueWithoutStudentInput | BodyMeasurementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: BodyMeasurementUpdateManyWithWhereWithoutStudentInput | BodyMeasurementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
  }

  export type StudentProfileCreateNestedOneWithoutBodyMeasurementsInput = {
    create?: XOR<StudentProfileCreateWithoutBodyMeasurementsInput, StudentProfileUncheckedCreateWithoutBodyMeasurementsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutBodyMeasurementsInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentProfileUpdateOneRequiredWithoutBodyMeasurementsNestedInput = {
    create?: XOR<StudentProfileCreateWithoutBodyMeasurementsInput, StudentProfileUncheckedCreateWithoutBodyMeasurementsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutBodyMeasurementsInput
    upsert?: StudentProfileUpsertWithoutBodyMeasurementsInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutBodyMeasurementsInput, StudentProfileUpdateWithoutBodyMeasurementsInput>, StudentProfileUncheckedUpdateWithoutBodyMeasurementsInput>
  }

  export type RoutineExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput> | RoutineExerciseCreateWithoutExerciseInput[] | RoutineExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutExerciseInput | RoutineExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: RoutineExerciseCreateManyExerciseInputEnvelope
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
  }

  export type SessionLogCreateNestedManyWithoutExerciseInput = {
    create?: XOR<SessionLogCreateWithoutExerciseInput, SessionLogUncheckedCreateWithoutExerciseInput> | SessionLogCreateWithoutExerciseInput[] | SessionLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SessionLogCreateOrConnectWithoutExerciseInput | SessionLogCreateOrConnectWithoutExerciseInput[]
    createMany?: SessionLogCreateManyExerciseInputEnvelope
    connect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
  }

  export type RoutineExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput> | RoutineExerciseCreateWithoutExerciseInput[] | RoutineExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutExerciseInput | RoutineExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: RoutineExerciseCreateManyExerciseInputEnvelope
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
  }

  export type SessionLogUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<SessionLogCreateWithoutExerciseInput, SessionLogUncheckedCreateWithoutExerciseInput> | SessionLogCreateWithoutExerciseInput[] | SessionLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SessionLogCreateOrConnectWithoutExerciseInput | SessionLogCreateOrConnectWithoutExerciseInput[]
    createMany?: SessionLogCreateManyExerciseInputEnvelope
    connect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
  }

  export type RoutineExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput> | RoutineExerciseCreateWithoutExerciseInput[] | RoutineExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutExerciseInput | RoutineExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: RoutineExerciseUpsertWithWhereUniqueWithoutExerciseInput | RoutineExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: RoutineExerciseCreateManyExerciseInputEnvelope
    set?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    disconnect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    delete?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    update?: RoutineExerciseUpdateWithWhereUniqueWithoutExerciseInput | RoutineExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: RoutineExerciseUpdateManyWithWhereWithoutExerciseInput | RoutineExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
  }

  export type SessionLogUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<SessionLogCreateWithoutExerciseInput, SessionLogUncheckedCreateWithoutExerciseInput> | SessionLogCreateWithoutExerciseInput[] | SessionLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SessionLogCreateOrConnectWithoutExerciseInput | SessionLogCreateOrConnectWithoutExerciseInput[]
    upsert?: SessionLogUpsertWithWhereUniqueWithoutExerciseInput | SessionLogUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: SessionLogCreateManyExerciseInputEnvelope
    set?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    disconnect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    delete?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    connect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    update?: SessionLogUpdateWithWhereUniqueWithoutExerciseInput | SessionLogUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: SessionLogUpdateManyWithWhereWithoutExerciseInput | SessionLogUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: SessionLogScalarWhereInput | SessionLogScalarWhereInput[]
  }

  export type RoutineExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput> | RoutineExerciseCreateWithoutExerciseInput[] | RoutineExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutExerciseInput | RoutineExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: RoutineExerciseUpsertWithWhereUniqueWithoutExerciseInput | RoutineExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: RoutineExerciseCreateManyExerciseInputEnvelope
    set?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    disconnect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    delete?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    update?: RoutineExerciseUpdateWithWhereUniqueWithoutExerciseInput | RoutineExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: RoutineExerciseUpdateManyWithWhereWithoutExerciseInput | RoutineExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
  }

  export type SessionLogUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<SessionLogCreateWithoutExerciseInput, SessionLogUncheckedCreateWithoutExerciseInput> | SessionLogCreateWithoutExerciseInput[] | SessionLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SessionLogCreateOrConnectWithoutExerciseInput | SessionLogCreateOrConnectWithoutExerciseInput[]
    upsert?: SessionLogUpsertWithWhereUniqueWithoutExerciseInput | SessionLogUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: SessionLogCreateManyExerciseInputEnvelope
    set?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    disconnect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    delete?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    connect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    update?: SessionLogUpdateWithWhereUniqueWithoutExerciseInput | SessionLogUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: SessionLogUpdateManyWithWhereWithoutExerciseInput | SessionLogUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: SessionLogScalarWhereInput | SessionLogScalarWhereInput[]
  }

  export type InstructorProfileCreateNestedOneWithoutPlansInput = {
    create?: XOR<InstructorProfileCreateWithoutPlansInput, InstructorProfileUncheckedCreateWithoutPlansInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutPlansInput
    connect?: InstructorProfileWhereUniqueInput
  }

  export type StudentProfileCreateNestedManyWithoutPlansInput = {
    create?: XOR<StudentProfileCreateWithoutPlansInput, StudentProfileUncheckedCreateWithoutPlansInput> | StudentProfileCreateWithoutPlansInput[] | StudentProfileUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutPlansInput | StudentProfileCreateOrConnectWithoutPlansInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type WorkoutRoutineCreateNestedManyWithoutPlanInput = {
    create?: XOR<WorkoutRoutineCreateWithoutPlanInput, WorkoutRoutineUncheckedCreateWithoutPlanInput> | WorkoutRoutineCreateWithoutPlanInput[] | WorkoutRoutineUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: WorkoutRoutineCreateOrConnectWithoutPlanInput | WorkoutRoutineCreateOrConnectWithoutPlanInput[]
    createMany?: WorkoutRoutineCreateManyPlanInputEnvelope
    connect?: WorkoutRoutineWhereUniqueInput | WorkoutRoutineWhereUniqueInput[]
  }

  export type StudentProfileUncheckedCreateNestedManyWithoutPlansInput = {
    create?: XOR<StudentProfileCreateWithoutPlansInput, StudentProfileUncheckedCreateWithoutPlansInput> | StudentProfileCreateWithoutPlansInput[] | StudentProfileUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutPlansInput | StudentProfileCreateOrConnectWithoutPlansInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type WorkoutRoutineUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<WorkoutRoutineCreateWithoutPlanInput, WorkoutRoutineUncheckedCreateWithoutPlanInput> | WorkoutRoutineCreateWithoutPlanInput[] | WorkoutRoutineUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: WorkoutRoutineCreateOrConnectWithoutPlanInput | WorkoutRoutineCreateOrConnectWithoutPlanInput[]
    createMany?: WorkoutRoutineCreateManyPlanInputEnvelope
    connect?: WorkoutRoutineWhereUniqueInput | WorkoutRoutineWhereUniqueInput[]
  }

  export type InstructorProfileUpdateOneRequiredWithoutPlansNestedInput = {
    create?: XOR<InstructorProfileCreateWithoutPlansInput, InstructorProfileUncheckedCreateWithoutPlansInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutPlansInput
    upsert?: InstructorProfileUpsertWithoutPlansInput
    connect?: InstructorProfileWhereUniqueInput
    update?: XOR<XOR<InstructorProfileUpdateToOneWithWhereWithoutPlansInput, InstructorProfileUpdateWithoutPlansInput>, InstructorProfileUncheckedUpdateWithoutPlansInput>
  }

  export type StudentProfileUpdateManyWithoutPlansNestedInput = {
    create?: XOR<StudentProfileCreateWithoutPlansInput, StudentProfileUncheckedCreateWithoutPlansInput> | StudentProfileCreateWithoutPlansInput[] | StudentProfileUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutPlansInput | StudentProfileCreateOrConnectWithoutPlansInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutPlansInput | StudentProfileUpsertWithWhereUniqueWithoutPlansInput[]
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutPlansInput | StudentProfileUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutPlansInput | StudentProfileUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type WorkoutRoutineUpdateManyWithoutPlanNestedInput = {
    create?: XOR<WorkoutRoutineCreateWithoutPlanInput, WorkoutRoutineUncheckedCreateWithoutPlanInput> | WorkoutRoutineCreateWithoutPlanInput[] | WorkoutRoutineUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: WorkoutRoutineCreateOrConnectWithoutPlanInput | WorkoutRoutineCreateOrConnectWithoutPlanInput[]
    upsert?: WorkoutRoutineUpsertWithWhereUniqueWithoutPlanInput | WorkoutRoutineUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: WorkoutRoutineCreateManyPlanInputEnvelope
    set?: WorkoutRoutineWhereUniqueInput | WorkoutRoutineWhereUniqueInput[]
    disconnect?: WorkoutRoutineWhereUniqueInput | WorkoutRoutineWhereUniqueInput[]
    delete?: WorkoutRoutineWhereUniqueInput | WorkoutRoutineWhereUniqueInput[]
    connect?: WorkoutRoutineWhereUniqueInput | WorkoutRoutineWhereUniqueInput[]
    update?: WorkoutRoutineUpdateWithWhereUniqueWithoutPlanInput | WorkoutRoutineUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: WorkoutRoutineUpdateManyWithWhereWithoutPlanInput | WorkoutRoutineUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: WorkoutRoutineScalarWhereInput | WorkoutRoutineScalarWhereInput[]
  }

  export type StudentProfileUncheckedUpdateManyWithoutPlansNestedInput = {
    create?: XOR<StudentProfileCreateWithoutPlansInput, StudentProfileUncheckedCreateWithoutPlansInput> | StudentProfileCreateWithoutPlansInput[] | StudentProfileUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutPlansInput | StudentProfileCreateOrConnectWithoutPlansInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutPlansInput | StudentProfileUpsertWithWhereUniqueWithoutPlansInput[]
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutPlansInput | StudentProfileUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutPlansInput | StudentProfileUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type WorkoutRoutineUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<WorkoutRoutineCreateWithoutPlanInput, WorkoutRoutineUncheckedCreateWithoutPlanInput> | WorkoutRoutineCreateWithoutPlanInput[] | WorkoutRoutineUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: WorkoutRoutineCreateOrConnectWithoutPlanInput | WorkoutRoutineCreateOrConnectWithoutPlanInput[]
    upsert?: WorkoutRoutineUpsertWithWhereUniqueWithoutPlanInput | WorkoutRoutineUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: WorkoutRoutineCreateManyPlanInputEnvelope
    set?: WorkoutRoutineWhereUniqueInput | WorkoutRoutineWhereUniqueInput[]
    disconnect?: WorkoutRoutineWhereUniqueInput | WorkoutRoutineWhereUniqueInput[]
    delete?: WorkoutRoutineWhereUniqueInput | WorkoutRoutineWhereUniqueInput[]
    connect?: WorkoutRoutineWhereUniqueInput | WorkoutRoutineWhereUniqueInput[]
    update?: WorkoutRoutineUpdateWithWhereUniqueWithoutPlanInput | WorkoutRoutineUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: WorkoutRoutineUpdateManyWithWhereWithoutPlanInput | WorkoutRoutineUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: WorkoutRoutineScalarWhereInput | WorkoutRoutineScalarWhereInput[]
  }

  export type WorkoutPlanCreateNestedOneWithoutRoutinesInput = {
    create?: XOR<WorkoutPlanCreateWithoutRoutinesInput, WorkoutPlanUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutRoutinesInput
    connect?: WorkoutPlanWhereUniqueInput
  }

  export type RoutineExerciseCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput> | RoutineExerciseCreateWithoutRoutineInput[] | RoutineExerciseUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutRoutineInput | RoutineExerciseCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineExerciseCreateManyRoutineInputEnvelope
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
  }

  export type WorkoutSessionCreateNestedManyWithoutRoutineInput = {
    create?: XOR<WorkoutSessionCreateWithoutRoutineInput, WorkoutSessionUncheckedCreateWithoutRoutineInput> | WorkoutSessionCreateWithoutRoutineInput[] | WorkoutSessionUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutRoutineInput | WorkoutSessionCreateOrConnectWithoutRoutineInput[]
    createMany?: WorkoutSessionCreateManyRoutineInputEnvelope
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
  }

  export type RoutineExerciseUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput> | RoutineExerciseCreateWithoutRoutineInput[] | RoutineExerciseUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutRoutineInput | RoutineExerciseCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineExerciseCreateManyRoutineInputEnvelope
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
  }

  export type WorkoutSessionUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<WorkoutSessionCreateWithoutRoutineInput, WorkoutSessionUncheckedCreateWithoutRoutineInput> | WorkoutSessionCreateWithoutRoutineInput[] | WorkoutSessionUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutRoutineInput | WorkoutSessionCreateOrConnectWithoutRoutineInput[]
    createMany?: WorkoutSessionCreateManyRoutineInputEnvelope
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
  }

  export type WorkoutPlanUpdateOneRequiredWithoutRoutinesNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutRoutinesInput, WorkoutPlanUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutRoutinesInput
    upsert?: WorkoutPlanUpsertWithoutRoutinesInput
    connect?: WorkoutPlanWhereUniqueInput
    update?: XOR<XOR<WorkoutPlanUpdateToOneWithWhereWithoutRoutinesInput, WorkoutPlanUpdateWithoutRoutinesInput>, WorkoutPlanUncheckedUpdateWithoutRoutinesInput>
  }

  export type RoutineExerciseUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput> | RoutineExerciseCreateWithoutRoutineInput[] | RoutineExerciseUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutRoutineInput | RoutineExerciseCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineExerciseUpsertWithWhereUniqueWithoutRoutineInput | RoutineExerciseUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineExerciseCreateManyRoutineInputEnvelope
    set?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    disconnect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    delete?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    update?: RoutineExerciseUpdateWithWhereUniqueWithoutRoutineInput | RoutineExerciseUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineExerciseUpdateManyWithWhereWithoutRoutineInput | RoutineExerciseUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
  }

  export type WorkoutSessionUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutRoutineInput, WorkoutSessionUncheckedCreateWithoutRoutineInput> | WorkoutSessionCreateWithoutRoutineInput[] | WorkoutSessionUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutRoutineInput | WorkoutSessionCreateOrConnectWithoutRoutineInput[]
    upsert?: WorkoutSessionUpsertWithWhereUniqueWithoutRoutineInput | WorkoutSessionUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: WorkoutSessionCreateManyRoutineInputEnvelope
    set?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    disconnect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    delete?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    update?: WorkoutSessionUpdateWithWhereUniqueWithoutRoutineInput | WorkoutSessionUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: WorkoutSessionUpdateManyWithWhereWithoutRoutineInput | WorkoutSessionUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
  }

  export type RoutineExerciseUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput> | RoutineExerciseCreateWithoutRoutineInput[] | RoutineExerciseUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutRoutineInput | RoutineExerciseCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineExerciseUpsertWithWhereUniqueWithoutRoutineInput | RoutineExerciseUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineExerciseCreateManyRoutineInputEnvelope
    set?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    disconnect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    delete?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    update?: RoutineExerciseUpdateWithWhereUniqueWithoutRoutineInput | RoutineExerciseUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineExerciseUpdateManyWithWhereWithoutRoutineInput | RoutineExerciseUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
  }

  export type WorkoutSessionUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutRoutineInput, WorkoutSessionUncheckedCreateWithoutRoutineInput> | WorkoutSessionCreateWithoutRoutineInput[] | WorkoutSessionUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutRoutineInput | WorkoutSessionCreateOrConnectWithoutRoutineInput[]
    upsert?: WorkoutSessionUpsertWithWhereUniqueWithoutRoutineInput | WorkoutSessionUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: WorkoutSessionCreateManyRoutineInputEnvelope
    set?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    disconnect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    delete?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    update?: WorkoutSessionUpdateWithWhereUniqueWithoutRoutineInput | WorkoutSessionUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: WorkoutSessionUpdateManyWithWhereWithoutRoutineInput | WorkoutSessionUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
  }

  export type WorkoutRoutineCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutRoutineCreateWithoutExercisesInput, WorkoutRoutineUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutRoutineCreateOrConnectWithoutExercisesInput
    connect?: WorkoutRoutineWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutRoutineExercisesInput = {
    create?: XOR<ExerciseCreateWithoutRoutineExercisesInput, ExerciseUncheckedCreateWithoutRoutineExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutRoutineExercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutRoutineUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutRoutineCreateWithoutExercisesInput, WorkoutRoutineUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutRoutineCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutRoutineUpsertWithoutExercisesInput
    connect?: WorkoutRoutineWhereUniqueInput
    update?: XOR<XOR<WorkoutRoutineUpdateToOneWithWhereWithoutExercisesInput, WorkoutRoutineUpdateWithoutExercisesInput>, WorkoutRoutineUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutRoutineExercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutRoutineExercisesInput, ExerciseUncheckedCreateWithoutRoutineExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutRoutineExercisesInput
    upsert?: ExerciseUpsertWithoutRoutineExercisesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutRoutineExercisesInput, ExerciseUpdateWithoutRoutineExercisesInput>, ExerciseUncheckedUpdateWithoutRoutineExercisesInput>
  }

  export type StudentProfileCreateNestedOneWithoutWorkoutSessionsInput = {
    create?: XOR<StudentProfileCreateWithoutWorkoutSessionsInput, StudentProfileUncheckedCreateWithoutWorkoutSessionsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutWorkoutSessionsInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type WorkoutRoutineCreateNestedOneWithoutSessionsInput = {
    create?: XOR<WorkoutRoutineCreateWithoutSessionsInput, WorkoutRoutineUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: WorkoutRoutineCreateOrConnectWithoutSessionsInput
    connect?: WorkoutRoutineWhereUniqueInput
  }

  export type SessionLogCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionLogCreateWithoutSessionInput, SessionLogUncheckedCreateWithoutSessionInput> | SessionLogCreateWithoutSessionInput[] | SessionLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionLogCreateOrConnectWithoutSessionInput | SessionLogCreateOrConnectWithoutSessionInput[]
    createMany?: SessionLogCreateManySessionInputEnvelope
    connect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
  }

  export type SessionLogUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionLogCreateWithoutSessionInput, SessionLogUncheckedCreateWithoutSessionInput> | SessionLogCreateWithoutSessionInput[] | SessionLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionLogCreateOrConnectWithoutSessionInput | SessionLogCreateOrConnectWithoutSessionInput[]
    createMany?: SessionLogCreateManySessionInputEnvelope
    connect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
  }

  export type StudentProfileUpdateOneRequiredWithoutWorkoutSessionsNestedInput = {
    create?: XOR<StudentProfileCreateWithoutWorkoutSessionsInput, StudentProfileUncheckedCreateWithoutWorkoutSessionsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutWorkoutSessionsInput
    upsert?: StudentProfileUpsertWithoutWorkoutSessionsInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutWorkoutSessionsInput, StudentProfileUpdateWithoutWorkoutSessionsInput>, StudentProfileUncheckedUpdateWithoutWorkoutSessionsInput>
  }

  export type WorkoutRoutineUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<WorkoutRoutineCreateWithoutSessionsInput, WorkoutRoutineUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: WorkoutRoutineCreateOrConnectWithoutSessionsInput
    upsert?: WorkoutRoutineUpsertWithoutSessionsInput
    disconnect?: WorkoutRoutineWhereInput | boolean
    delete?: WorkoutRoutineWhereInput | boolean
    connect?: WorkoutRoutineWhereUniqueInput
    update?: XOR<XOR<WorkoutRoutineUpdateToOneWithWhereWithoutSessionsInput, WorkoutRoutineUpdateWithoutSessionsInput>, WorkoutRoutineUncheckedUpdateWithoutSessionsInput>
  }

  export type SessionLogUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionLogCreateWithoutSessionInput, SessionLogUncheckedCreateWithoutSessionInput> | SessionLogCreateWithoutSessionInput[] | SessionLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionLogCreateOrConnectWithoutSessionInput | SessionLogCreateOrConnectWithoutSessionInput[]
    upsert?: SessionLogUpsertWithWhereUniqueWithoutSessionInput | SessionLogUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionLogCreateManySessionInputEnvelope
    set?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    disconnect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    delete?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    connect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    update?: SessionLogUpdateWithWhereUniqueWithoutSessionInput | SessionLogUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionLogUpdateManyWithWhereWithoutSessionInput | SessionLogUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionLogScalarWhereInput | SessionLogScalarWhereInput[]
  }

  export type SessionLogUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionLogCreateWithoutSessionInput, SessionLogUncheckedCreateWithoutSessionInput> | SessionLogCreateWithoutSessionInput[] | SessionLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionLogCreateOrConnectWithoutSessionInput | SessionLogCreateOrConnectWithoutSessionInput[]
    upsert?: SessionLogUpsertWithWhereUniqueWithoutSessionInput | SessionLogUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionLogCreateManySessionInputEnvelope
    set?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    disconnect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    delete?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    connect?: SessionLogWhereUniqueInput | SessionLogWhereUniqueInput[]
    update?: SessionLogUpdateWithWhereUniqueWithoutSessionInput | SessionLogUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionLogUpdateManyWithWhereWithoutSessionInput | SessionLogUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionLogScalarWhereInput | SessionLogScalarWhereInput[]
  }

  export type WorkoutSessionCreateNestedOneWithoutLogsInput = {
    create?: XOR<WorkoutSessionCreateWithoutLogsInput, WorkoutSessionUncheckedCreateWithoutLogsInput>
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutLogsInput
    connect?: WorkoutSessionWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutSessionLogsInput = {
    create?: XOR<ExerciseCreateWithoutSessionLogsInput, ExerciseUncheckedCreateWithoutSessionLogsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutSessionLogsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type WorkoutSessionUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutLogsInput, WorkoutSessionUncheckedCreateWithoutLogsInput>
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutLogsInput
    upsert?: WorkoutSessionUpsertWithoutLogsInput
    connect?: WorkoutSessionWhereUniqueInput
    update?: XOR<XOR<WorkoutSessionUpdateToOneWithWhereWithoutLogsInput, WorkoutSessionUpdateWithoutLogsInput>, WorkoutSessionUncheckedUpdateWithoutLogsInput>
  }

  export type ExerciseUpdateOneRequiredWithoutSessionLogsNestedInput = {
    create?: XOR<ExerciseCreateWithoutSessionLogsInput, ExerciseUncheckedCreateWithoutSessionLogsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutSessionLogsInput
    upsert?: ExerciseUpsertWithoutSessionLogsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutSessionLogsInput, ExerciseUpdateWithoutSessionLogsInput>, ExerciseUncheckedUpdateWithoutSessionLogsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type InstructorProfileCreateWithoutUserInput = {
    id?: string
    students?: StudentProfileCreateNestedManyWithoutInstructorInput
    plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
  }

  export type InstructorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    students?: StudentProfileUncheckedCreateNestedManyWithoutInstructorInput
    plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorProfileCreateOrConnectWithoutUserInput = {
    where: InstructorProfileWhereUniqueInput
    create: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
  }

  export type StudentProfileCreateWithoutUserInput = {
    id?: string
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    instructor?: InstructorProfileCreateNestedOneWithoutStudentsInput
    plans?: WorkoutPlanCreateNestedManyWithoutStudentsInput
    workoutSessions?: WorkoutSessionCreateNestedManyWithoutStudentInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutUserInput = {
    id?: string
    instructorId?: string | null
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    plans?: WorkoutPlanUncheckedCreateNestedManyWithoutStudentsInput
    workoutSessions?: WorkoutSessionUncheckedCreateNestedManyWithoutStudentInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutUserInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type InstructorProfileUpsertWithoutUserInput = {
    update: XOR<InstructorProfileUpdateWithoutUserInput, InstructorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
    where?: InstructorProfileWhereInput
  }

  export type InstructorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: InstructorProfileWhereInput
    data: XOR<InstructorProfileUpdateWithoutUserInput, InstructorProfileUncheckedUpdateWithoutUserInput>
  }

  export type InstructorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    students?: StudentProfileUpdateManyWithoutInstructorNestedInput
    plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    students?: StudentProfileUncheckedUpdateManyWithoutInstructorNestedInput
    plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type StudentProfileUpsertWithoutUserInput = {
    update: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    instructor?: InstructorProfileUpdateOneWithoutStudentsNestedInput
    plans?: WorkoutPlanUpdateManyWithoutStudentsNestedInput
    workoutSessions?: WorkoutSessionUpdateManyWithoutStudentNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    plans?: WorkoutPlanUncheckedUpdateManyWithoutStudentsNestedInput
    workoutSessions?: WorkoutSessionUncheckedUpdateManyWithoutStudentNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutInstructorProfileInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstructorProfileInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInstructorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstructorProfileInput, UserUncheckedCreateWithoutInstructorProfileInput>
  }

  export type StudentProfileCreateWithoutInstructorInput = {
    id?: string
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    user: UserCreateNestedOneWithoutStudentProfileInput
    plans?: WorkoutPlanCreateNestedManyWithoutStudentsInput
    workoutSessions?: WorkoutSessionCreateNestedManyWithoutStudentInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutInstructorInput = {
    id?: string
    userId: string
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    plans?: WorkoutPlanUncheckedCreateNestedManyWithoutStudentsInput
    workoutSessions?: WorkoutSessionUncheckedCreateNestedManyWithoutStudentInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutInstructorInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutInstructorInput, StudentProfileUncheckedCreateWithoutInstructorInput>
  }

  export type StudentProfileCreateManyInstructorInputEnvelope = {
    data: StudentProfileCreateManyInstructorInput | StudentProfileCreateManyInstructorInput[]
  }

  export type WorkoutPlanCreateWithoutInstructorInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentProfileCreateNestedManyWithoutPlansInput
    routines?: WorkoutRoutineCreateNestedManyWithoutPlanInput
  }

  export type WorkoutPlanUncheckedCreateWithoutInstructorInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentProfileUncheckedCreateNestedManyWithoutPlansInput
    routines?: WorkoutRoutineUncheckedCreateNestedManyWithoutPlanInput
  }

  export type WorkoutPlanCreateOrConnectWithoutInstructorInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput>
  }

  export type WorkoutPlanCreateManyInstructorInputEnvelope = {
    data: WorkoutPlanCreateManyInstructorInput | WorkoutPlanCreateManyInstructorInput[]
  }

  export type UserUpsertWithoutInstructorProfileInput = {
    update: XOR<UserUpdateWithoutInstructorProfileInput, UserUncheckedUpdateWithoutInstructorProfileInput>
    create: XOR<UserCreateWithoutInstructorProfileInput, UserUncheckedCreateWithoutInstructorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstructorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstructorProfileInput, UserUncheckedUpdateWithoutInstructorProfileInput>
  }

  export type UserUpdateWithoutInstructorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstructorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentProfileUpsertWithWhereUniqueWithoutInstructorInput = {
    where: StudentProfileWhereUniqueInput
    update: XOR<StudentProfileUpdateWithoutInstructorInput, StudentProfileUncheckedUpdateWithoutInstructorInput>
    create: XOR<StudentProfileCreateWithoutInstructorInput, StudentProfileUncheckedCreateWithoutInstructorInput>
  }

  export type StudentProfileUpdateWithWhereUniqueWithoutInstructorInput = {
    where: StudentProfileWhereUniqueInput
    data: XOR<StudentProfileUpdateWithoutInstructorInput, StudentProfileUncheckedUpdateWithoutInstructorInput>
  }

  export type StudentProfileUpdateManyWithWhereWithoutInstructorInput = {
    where: StudentProfileScalarWhereInput
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyWithoutInstructorInput>
  }

  export type StudentProfileScalarWhereInput = {
    AND?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
    OR?: StudentProfileScalarWhereInput[]
    NOT?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    userId?: StringFilter<"StudentProfile"> | string
    instructorId?: StringNullableFilter<"StudentProfile"> | string | null
    preferredUnit?: StringFilter<"StudentProfile"> | string
    age?: IntNullableFilter<"StudentProfile"> | number | null
    gender?: StringNullableFilter<"StudentProfile"> | string | null
    height?: FloatNullableFilter<"StudentProfile"> | number | null
  }

  export type WorkoutPlanUpsertWithWhereUniqueWithoutInstructorInput = {
    where: WorkoutPlanWhereUniqueInput
    update: XOR<WorkoutPlanUpdateWithoutInstructorInput, WorkoutPlanUncheckedUpdateWithoutInstructorInput>
    create: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput>
  }

  export type WorkoutPlanUpdateWithWhereUniqueWithoutInstructorInput = {
    where: WorkoutPlanWhereUniqueInput
    data: XOR<WorkoutPlanUpdateWithoutInstructorInput, WorkoutPlanUncheckedUpdateWithoutInstructorInput>
  }

  export type WorkoutPlanUpdateManyWithWhereWithoutInstructorInput = {
    where: WorkoutPlanScalarWhereInput
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyWithoutInstructorInput>
  }

  export type WorkoutPlanScalarWhereInput = {
    AND?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
    OR?: WorkoutPlanScalarWhereInput[]
    NOT?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
    id?: StringFilter<"WorkoutPlan"> | string
    name?: StringFilter<"WorkoutPlan"> | string
    description?: StringNullableFilter<"WorkoutPlan"> | string | null
    instructorId?: StringFilter<"WorkoutPlan"> | string
    createdAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
  }

  export type UserCreateWithoutStudentProfileInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentProfileInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
  }

  export type InstructorProfileCreateWithoutStudentsInput = {
    id?: string
    user: UserCreateNestedOneWithoutInstructorProfileInput
    plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
  }

  export type InstructorProfileUncheckedCreateWithoutStudentsInput = {
    id?: string
    userId: string
    plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorProfileCreateOrConnectWithoutStudentsInput = {
    where: InstructorProfileWhereUniqueInput
    create: XOR<InstructorProfileCreateWithoutStudentsInput, InstructorProfileUncheckedCreateWithoutStudentsInput>
  }

  export type WorkoutPlanCreateWithoutStudentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: InstructorProfileCreateNestedOneWithoutPlansInput
    routines?: WorkoutRoutineCreateNestedManyWithoutPlanInput
  }

  export type WorkoutPlanUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    description?: string | null
    instructorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routines?: WorkoutRoutineUncheckedCreateNestedManyWithoutPlanInput
  }

  export type WorkoutPlanCreateOrConnectWithoutStudentsInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutStudentsInput, WorkoutPlanUncheckedCreateWithoutStudentsInput>
  }

  export type WorkoutSessionCreateWithoutStudentInput = {
    id?: string
    date?: Date | string
    status?: string
    duration?: number | null
    routine?: WorkoutRoutineCreateNestedOneWithoutSessionsInput
    logs?: SessionLogCreateNestedManyWithoutSessionInput
  }

  export type WorkoutSessionUncheckedCreateWithoutStudentInput = {
    id?: string
    routineId?: string | null
    date?: Date | string
    status?: string
    duration?: number | null
    logs?: SessionLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type WorkoutSessionCreateOrConnectWithoutStudentInput = {
    where: WorkoutSessionWhereUniqueInput
    create: XOR<WorkoutSessionCreateWithoutStudentInput, WorkoutSessionUncheckedCreateWithoutStudentInput>
  }

  export type WorkoutSessionCreateManyStudentInputEnvelope = {
    data: WorkoutSessionCreateManyStudentInput | WorkoutSessionCreateManyStudentInput[]
  }

  export type BodyMeasurementCreateWithoutStudentInput = {
    id?: string
    date?: Date | string
    weight: number
    bmi?: number | null
  }

  export type BodyMeasurementUncheckedCreateWithoutStudentInput = {
    id?: string
    date?: Date | string
    weight: number
    bmi?: number | null
  }

  export type BodyMeasurementCreateOrConnectWithoutStudentInput = {
    where: BodyMeasurementWhereUniqueInput
    create: XOR<BodyMeasurementCreateWithoutStudentInput, BodyMeasurementUncheckedCreateWithoutStudentInput>
  }

  export type BodyMeasurementCreateManyStudentInputEnvelope = {
    data: BodyMeasurementCreateManyStudentInput | BodyMeasurementCreateManyStudentInput[]
  }

  export type UserUpsertWithoutStudentProfileInput = {
    update: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type UserUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InstructorProfileUpsertWithoutStudentsInput = {
    update: XOR<InstructorProfileUpdateWithoutStudentsInput, InstructorProfileUncheckedUpdateWithoutStudentsInput>
    create: XOR<InstructorProfileCreateWithoutStudentsInput, InstructorProfileUncheckedCreateWithoutStudentsInput>
    where?: InstructorProfileWhereInput
  }

  export type InstructorProfileUpdateToOneWithWhereWithoutStudentsInput = {
    where?: InstructorProfileWhereInput
    data: XOR<InstructorProfileUpdateWithoutStudentsInput, InstructorProfileUncheckedUpdateWithoutStudentsInput>
  }

  export type InstructorProfileUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInstructorProfileNestedInput
    plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorProfileUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type WorkoutPlanUpsertWithWhereUniqueWithoutStudentsInput = {
    where: WorkoutPlanWhereUniqueInput
    update: XOR<WorkoutPlanUpdateWithoutStudentsInput, WorkoutPlanUncheckedUpdateWithoutStudentsInput>
    create: XOR<WorkoutPlanCreateWithoutStudentsInput, WorkoutPlanUncheckedCreateWithoutStudentsInput>
  }

  export type WorkoutPlanUpdateWithWhereUniqueWithoutStudentsInput = {
    where: WorkoutPlanWhereUniqueInput
    data: XOR<WorkoutPlanUpdateWithoutStudentsInput, WorkoutPlanUncheckedUpdateWithoutStudentsInput>
  }

  export type WorkoutPlanUpdateManyWithWhereWithoutStudentsInput = {
    where: WorkoutPlanScalarWhereInput
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyWithoutStudentsInput>
  }

  export type WorkoutSessionUpsertWithWhereUniqueWithoutStudentInput = {
    where: WorkoutSessionWhereUniqueInput
    update: XOR<WorkoutSessionUpdateWithoutStudentInput, WorkoutSessionUncheckedUpdateWithoutStudentInput>
    create: XOR<WorkoutSessionCreateWithoutStudentInput, WorkoutSessionUncheckedCreateWithoutStudentInput>
  }

  export type WorkoutSessionUpdateWithWhereUniqueWithoutStudentInput = {
    where: WorkoutSessionWhereUniqueInput
    data: XOR<WorkoutSessionUpdateWithoutStudentInput, WorkoutSessionUncheckedUpdateWithoutStudentInput>
  }

  export type WorkoutSessionUpdateManyWithWhereWithoutStudentInput = {
    where: WorkoutSessionScalarWhereInput
    data: XOR<WorkoutSessionUpdateManyMutationInput, WorkoutSessionUncheckedUpdateManyWithoutStudentInput>
  }

  export type WorkoutSessionScalarWhereInput = {
    AND?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
    OR?: WorkoutSessionScalarWhereInput[]
    NOT?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
    id?: StringFilter<"WorkoutSession"> | string
    studentId?: StringFilter<"WorkoutSession"> | string
    routineId?: StringNullableFilter<"WorkoutSession"> | string | null
    date?: DateTimeFilter<"WorkoutSession"> | Date | string
    status?: StringFilter<"WorkoutSession"> | string
    duration?: IntNullableFilter<"WorkoutSession"> | number | null
  }

  export type BodyMeasurementUpsertWithWhereUniqueWithoutStudentInput = {
    where: BodyMeasurementWhereUniqueInput
    update: XOR<BodyMeasurementUpdateWithoutStudentInput, BodyMeasurementUncheckedUpdateWithoutStudentInput>
    create: XOR<BodyMeasurementCreateWithoutStudentInput, BodyMeasurementUncheckedCreateWithoutStudentInput>
  }

  export type BodyMeasurementUpdateWithWhereUniqueWithoutStudentInput = {
    where: BodyMeasurementWhereUniqueInput
    data: XOR<BodyMeasurementUpdateWithoutStudentInput, BodyMeasurementUncheckedUpdateWithoutStudentInput>
  }

  export type BodyMeasurementUpdateManyWithWhereWithoutStudentInput = {
    where: BodyMeasurementScalarWhereInput
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyWithoutStudentInput>
  }

  export type BodyMeasurementScalarWhereInput = {
    AND?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
    OR?: BodyMeasurementScalarWhereInput[]
    NOT?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
    id?: StringFilter<"BodyMeasurement"> | string
    studentId?: StringFilter<"BodyMeasurement"> | string
    date?: DateTimeFilter<"BodyMeasurement"> | Date | string
    weight?: FloatFilter<"BodyMeasurement"> | number
    bmi?: FloatNullableFilter<"BodyMeasurement"> | number | null
  }

  export type StudentProfileCreateWithoutBodyMeasurementsInput = {
    id?: string
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    user: UserCreateNestedOneWithoutStudentProfileInput
    instructor?: InstructorProfileCreateNestedOneWithoutStudentsInput
    plans?: WorkoutPlanCreateNestedManyWithoutStudentsInput
    workoutSessions?: WorkoutSessionCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutBodyMeasurementsInput = {
    id?: string
    userId: string
    instructorId?: string | null
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    plans?: WorkoutPlanUncheckedCreateNestedManyWithoutStudentsInput
    workoutSessions?: WorkoutSessionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutBodyMeasurementsInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutBodyMeasurementsInput, StudentProfileUncheckedCreateWithoutBodyMeasurementsInput>
  }

  export type StudentProfileUpsertWithoutBodyMeasurementsInput = {
    update: XOR<StudentProfileUpdateWithoutBodyMeasurementsInput, StudentProfileUncheckedUpdateWithoutBodyMeasurementsInput>
    create: XOR<StudentProfileCreateWithoutBodyMeasurementsInput, StudentProfileUncheckedCreateWithoutBodyMeasurementsInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutBodyMeasurementsInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutBodyMeasurementsInput, StudentProfileUncheckedUpdateWithoutBodyMeasurementsInput>
  }

  export type StudentProfileUpdateWithoutBodyMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    instructor?: InstructorProfileUpdateOneWithoutStudentsNestedInput
    plans?: WorkoutPlanUpdateManyWithoutStudentsNestedInput
    workoutSessions?: WorkoutSessionUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutBodyMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    plans?: WorkoutPlanUncheckedUpdateManyWithoutStudentsNestedInput
    workoutSessions?: WorkoutSessionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type RoutineExerciseCreateWithoutExerciseInput = {
    id?: string
    sets: number
    reps: number
    rpe?: number | null
    restTime?: number | null
    order: number
    routine: WorkoutRoutineCreateNestedOneWithoutExercisesInput
  }

  export type RoutineExerciseUncheckedCreateWithoutExerciseInput = {
    id?: string
    routineId: string
    sets: number
    reps: number
    rpe?: number | null
    restTime?: number | null
    order: number
  }

  export type RoutineExerciseCreateOrConnectWithoutExerciseInput = {
    where: RoutineExerciseWhereUniqueInput
    create: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type RoutineExerciseCreateManyExerciseInputEnvelope = {
    data: RoutineExerciseCreateManyExerciseInput | RoutineExerciseCreateManyExerciseInput[]
  }

  export type SessionLogCreateWithoutExerciseInput = {
    id?: string
    setNumber: number
    weight: number
    weightUnit?: string
    reps: number
    rpe?: number | null
    duration?: number | null
    notes?: string | null
    session: WorkoutSessionCreateNestedOneWithoutLogsInput
  }

  export type SessionLogUncheckedCreateWithoutExerciseInput = {
    id?: string
    sessionId: string
    setNumber: number
    weight: number
    weightUnit?: string
    reps: number
    rpe?: number | null
    duration?: number | null
    notes?: string | null
  }

  export type SessionLogCreateOrConnectWithoutExerciseInput = {
    where: SessionLogWhereUniqueInput
    create: XOR<SessionLogCreateWithoutExerciseInput, SessionLogUncheckedCreateWithoutExerciseInput>
  }

  export type SessionLogCreateManyExerciseInputEnvelope = {
    data: SessionLogCreateManyExerciseInput | SessionLogCreateManyExerciseInput[]
  }

  export type RoutineExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: RoutineExerciseWhereUniqueInput
    update: XOR<RoutineExerciseUpdateWithoutExerciseInput, RoutineExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type RoutineExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: RoutineExerciseWhereUniqueInput
    data: XOR<RoutineExerciseUpdateWithoutExerciseInput, RoutineExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type RoutineExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: RoutineExerciseScalarWhereInput
    data: XOR<RoutineExerciseUpdateManyMutationInput, RoutineExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type RoutineExerciseScalarWhereInput = {
    AND?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
    OR?: RoutineExerciseScalarWhereInput[]
    NOT?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
    id?: StringFilter<"RoutineExercise"> | string
    routineId?: StringFilter<"RoutineExercise"> | string
    exerciseId?: StringFilter<"RoutineExercise"> | string
    sets?: IntFilter<"RoutineExercise"> | number
    reps?: IntFilter<"RoutineExercise"> | number
    rpe?: IntNullableFilter<"RoutineExercise"> | number | null
    restTime?: IntNullableFilter<"RoutineExercise"> | number | null
    order?: IntFilter<"RoutineExercise"> | number
  }

  export type SessionLogUpsertWithWhereUniqueWithoutExerciseInput = {
    where: SessionLogWhereUniqueInput
    update: XOR<SessionLogUpdateWithoutExerciseInput, SessionLogUncheckedUpdateWithoutExerciseInput>
    create: XOR<SessionLogCreateWithoutExerciseInput, SessionLogUncheckedCreateWithoutExerciseInput>
  }

  export type SessionLogUpdateWithWhereUniqueWithoutExerciseInput = {
    where: SessionLogWhereUniqueInput
    data: XOR<SessionLogUpdateWithoutExerciseInput, SessionLogUncheckedUpdateWithoutExerciseInput>
  }

  export type SessionLogUpdateManyWithWhereWithoutExerciseInput = {
    where: SessionLogScalarWhereInput
    data: XOR<SessionLogUpdateManyMutationInput, SessionLogUncheckedUpdateManyWithoutExerciseInput>
  }

  export type SessionLogScalarWhereInput = {
    AND?: SessionLogScalarWhereInput | SessionLogScalarWhereInput[]
    OR?: SessionLogScalarWhereInput[]
    NOT?: SessionLogScalarWhereInput | SessionLogScalarWhereInput[]
    id?: StringFilter<"SessionLog"> | string
    sessionId?: StringFilter<"SessionLog"> | string
    exerciseId?: StringFilter<"SessionLog"> | string
    setNumber?: IntFilter<"SessionLog"> | number
    weight?: FloatFilter<"SessionLog"> | number
    weightUnit?: StringFilter<"SessionLog"> | string
    reps?: IntFilter<"SessionLog"> | number
    rpe?: IntNullableFilter<"SessionLog"> | number | null
    duration?: IntNullableFilter<"SessionLog"> | number | null
    notes?: StringNullableFilter<"SessionLog"> | string | null
  }

  export type InstructorProfileCreateWithoutPlansInput = {
    id?: string
    user: UserCreateNestedOneWithoutInstructorProfileInput
    students?: StudentProfileCreateNestedManyWithoutInstructorInput
  }

  export type InstructorProfileUncheckedCreateWithoutPlansInput = {
    id?: string
    userId: string
    students?: StudentProfileUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorProfileCreateOrConnectWithoutPlansInput = {
    where: InstructorProfileWhereUniqueInput
    create: XOR<InstructorProfileCreateWithoutPlansInput, InstructorProfileUncheckedCreateWithoutPlansInput>
  }

  export type StudentProfileCreateWithoutPlansInput = {
    id?: string
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    user: UserCreateNestedOneWithoutStudentProfileInput
    instructor?: InstructorProfileCreateNestedOneWithoutStudentsInput
    workoutSessions?: WorkoutSessionCreateNestedManyWithoutStudentInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutPlansInput = {
    id?: string
    userId: string
    instructorId?: string | null
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    workoutSessions?: WorkoutSessionUncheckedCreateNestedManyWithoutStudentInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutPlansInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutPlansInput, StudentProfileUncheckedCreateWithoutPlansInput>
  }

  export type WorkoutRoutineCreateWithoutPlanInput = {
    id?: string
    name: string
    exercises?: RoutineExerciseCreateNestedManyWithoutRoutineInput
    sessions?: WorkoutSessionCreateNestedManyWithoutRoutineInput
  }

  export type WorkoutRoutineUncheckedCreateWithoutPlanInput = {
    id?: string
    name: string
    exercises?: RoutineExerciseUncheckedCreateNestedManyWithoutRoutineInput
    sessions?: WorkoutSessionUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type WorkoutRoutineCreateOrConnectWithoutPlanInput = {
    where: WorkoutRoutineWhereUniqueInput
    create: XOR<WorkoutRoutineCreateWithoutPlanInput, WorkoutRoutineUncheckedCreateWithoutPlanInput>
  }

  export type WorkoutRoutineCreateManyPlanInputEnvelope = {
    data: WorkoutRoutineCreateManyPlanInput | WorkoutRoutineCreateManyPlanInput[]
  }

  export type InstructorProfileUpsertWithoutPlansInput = {
    update: XOR<InstructorProfileUpdateWithoutPlansInput, InstructorProfileUncheckedUpdateWithoutPlansInput>
    create: XOR<InstructorProfileCreateWithoutPlansInput, InstructorProfileUncheckedCreateWithoutPlansInput>
    where?: InstructorProfileWhereInput
  }

  export type InstructorProfileUpdateToOneWithWhereWithoutPlansInput = {
    where?: InstructorProfileWhereInput
    data: XOR<InstructorProfileUpdateWithoutPlansInput, InstructorProfileUncheckedUpdateWithoutPlansInput>
  }

  export type InstructorProfileUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInstructorProfileNestedInput
    students?: StudentProfileUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorProfileUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    students?: StudentProfileUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type StudentProfileUpsertWithWhereUniqueWithoutPlansInput = {
    where: StudentProfileWhereUniqueInput
    update: XOR<StudentProfileUpdateWithoutPlansInput, StudentProfileUncheckedUpdateWithoutPlansInput>
    create: XOR<StudentProfileCreateWithoutPlansInput, StudentProfileUncheckedCreateWithoutPlansInput>
  }

  export type StudentProfileUpdateWithWhereUniqueWithoutPlansInput = {
    where: StudentProfileWhereUniqueInput
    data: XOR<StudentProfileUpdateWithoutPlansInput, StudentProfileUncheckedUpdateWithoutPlansInput>
  }

  export type StudentProfileUpdateManyWithWhereWithoutPlansInput = {
    where: StudentProfileScalarWhereInput
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyWithoutPlansInput>
  }

  export type WorkoutRoutineUpsertWithWhereUniqueWithoutPlanInput = {
    where: WorkoutRoutineWhereUniqueInput
    update: XOR<WorkoutRoutineUpdateWithoutPlanInput, WorkoutRoutineUncheckedUpdateWithoutPlanInput>
    create: XOR<WorkoutRoutineCreateWithoutPlanInput, WorkoutRoutineUncheckedCreateWithoutPlanInput>
  }

  export type WorkoutRoutineUpdateWithWhereUniqueWithoutPlanInput = {
    where: WorkoutRoutineWhereUniqueInput
    data: XOR<WorkoutRoutineUpdateWithoutPlanInput, WorkoutRoutineUncheckedUpdateWithoutPlanInput>
  }

  export type WorkoutRoutineUpdateManyWithWhereWithoutPlanInput = {
    where: WorkoutRoutineScalarWhereInput
    data: XOR<WorkoutRoutineUpdateManyMutationInput, WorkoutRoutineUncheckedUpdateManyWithoutPlanInput>
  }

  export type WorkoutRoutineScalarWhereInput = {
    AND?: WorkoutRoutineScalarWhereInput | WorkoutRoutineScalarWhereInput[]
    OR?: WorkoutRoutineScalarWhereInput[]
    NOT?: WorkoutRoutineScalarWhereInput | WorkoutRoutineScalarWhereInput[]
    id?: StringFilter<"WorkoutRoutine"> | string
    planId?: StringFilter<"WorkoutRoutine"> | string
    name?: StringFilter<"WorkoutRoutine"> | string
  }

  export type WorkoutPlanCreateWithoutRoutinesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: InstructorProfileCreateNestedOneWithoutPlansInput
    students?: StudentProfileCreateNestedManyWithoutPlansInput
  }

  export type WorkoutPlanUncheckedCreateWithoutRoutinesInput = {
    id?: string
    name: string
    description?: string | null
    instructorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentProfileUncheckedCreateNestedManyWithoutPlansInput
  }

  export type WorkoutPlanCreateOrConnectWithoutRoutinesInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutRoutinesInput, WorkoutPlanUncheckedCreateWithoutRoutinesInput>
  }

  export type RoutineExerciseCreateWithoutRoutineInput = {
    id?: string
    sets: number
    reps: number
    rpe?: number | null
    restTime?: number | null
    order: number
    exercise: ExerciseCreateNestedOneWithoutRoutineExercisesInput
  }

  export type RoutineExerciseUncheckedCreateWithoutRoutineInput = {
    id?: string
    exerciseId: string
    sets: number
    reps: number
    rpe?: number | null
    restTime?: number | null
    order: number
  }

  export type RoutineExerciseCreateOrConnectWithoutRoutineInput = {
    where: RoutineExerciseWhereUniqueInput
    create: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineExerciseCreateManyRoutineInputEnvelope = {
    data: RoutineExerciseCreateManyRoutineInput | RoutineExerciseCreateManyRoutineInput[]
  }

  export type WorkoutSessionCreateWithoutRoutineInput = {
    id?: string
    date?: Date | string
    status?: string
    duration?: number | null
    student: StudentProfileCreateNestedOneWithoutWorkoutSessionsInput
    logs?: SessionLogCreateNestedManyWithoutSessionInput
  }

  export type WorkoutSessionUncheckedCreateWithoutRoutineInput = {
    id?: string
    studentId: string
    date?: Date | string
    status?: string
    duration?: number | null
    logs?: SessionLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type WorkoutSessionCreateOrConnectWithoutRoutineInput = {
    where: WorkoutSessionWhereUniqueInput
    create: XOR<WorkoutSessionCreateWithoutRoutineInput, WorkoutSessionUncheckedCreateWithoutRoutineInput>
  }

  export type WorkoutSessionCreateManyRoutineInputEnvelope = {
    data: WorkoutSessionCreateManyRoutineInput | WorkoutSessionCreateManyRoutineInput[]
  }

  export type WorkoutPlanUpsertWithoutRoutinesInput = {
    update: XOR<WorkoutPlanUpdateWithoutRoutinesInput, WorkoutPlanUncheckedUpdateWithoutRoutinesInput>
    create: XOR<WorkoutPlanCreateWithoutRoutinesInput, WorkoutPlanUncheckedCreateWithoutRoutinesInput>
    where?: WorkoutPlanWhereInput
  }

  export type WorkoutPlanUpdateToOneWithWhereWithoutRoutinesInput = {
    where?: WorkoutPlanWhereInput
    data: XOR<WorkoutPlanUpdateWithoutRoutinesInput, WorkoutPlanUncheckedUpdateWithoutRoutinesInput>
  }

  export type WorkoutPlanUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorProfileUpdateOneRequiredWithoutPlansNestedInput
    students?: StudentProfileUpdateManyWithoutPlansNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentProfileUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type RoutineExerciseUpsertWithWhereUniqueWithoutRoutineInput = {
    where: RoutineExerciseWhereUniqueInput
    update: XOR<RoutineExerciseUpdateWithoutRoutineInput, RoutineExerciseUncheckedUpdateWithoutRoutineInput>
    create: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineExerciseUpdateWithWhereUniqueWithoutRoutineInput = {
    where: RoutineExerciseWhereUniqueInput
    data: XOR<RoutineExerciseUpdateWithoutRoutineInput, RoutineExerciseUncheckedUpdateWithoutRoutineInput>
  }

  export type RoutineExerciseUpdateManyWithWhereWithoutRoutineInput = {
    where: RoutineExerciseScalarWhereInput
    data: XOR<RoutineExerciseUpdateManyMutationInput, RoutineExerciseUncheckedUpdateManyWithoutRoutineInput>
  }

  export type WorkoutSessionUpsertWithWhereUniqueWithoutRoutineInput = {
    where: WorkoutSessionWhereUniqueInput
    update: XOR<WorkoutSessionUpdateWithoutRoutineInput, WorkoutSessionUncheckedUpdateWithoutRoutineInput>
    create: XOR<WorkoutSessionCreateWithoutRoutineInput, WorkoutSessionUncheckedCreateWithoutRoutineInput>
  }

  export type WorkoutSessionUpdateWithWhereUniqueWithoutRoutineInput = {
    where: WorkoutSessionWhereUniqueInput
    data: XOR<WorkoutSessionUpdateWithoutRoutineInput, WorkoutSessionUncheckedUpdateWithoutRoutineInput>
  }

  export type WorkoutSessionUpdateManyWithWhereWithoutRoutineInput = {
    where: WorkoutSessionScalarWhereInput
    data: XOR<WorkoutSessionUpdateManyMutationInput, WorkoutSessionUncheckedUpdateManyWithoutRoutineInput>
  }

  export type WorkoutRoutineCreateWithoutExercisesInput = {
    id?: string
    name: string
    plan: WorkoutPlanCreateNestedOneWithoutRoutinesInput
    sessions?: WorkoutSessionCreateNestedManyWithoutRoutineInput
  }

  export type WorkoutRoutineUncheckedCreateWithoutExercisesInput = {
    id?: string
    planId: string
    name: string
    sessions?: WorkoutSessionUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type WorkoutRoutineCreateOrConnectWithoutExercisesInput = {
    where: WorkoutRoutineWhereUniqueInput
    create: XOR<WorkoutRoutineCreateWithoutExercisesInput, WorkoutRoutineUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseCreateWithoutRoutineExercisesInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup?: string | null
    VideoUrl?: string | null
    sessionLogs?: SessionLogCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutRoutineExercisesInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup?: string | null
    VideoUrl?: string | null
    sessionLogs?: SessionLogUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutRoutineExercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutRoutineExercisesInput, ExerciseUncheckedCreateWithoutRoutineExercisesInput>
  }

  export type WorkoutRoutineUpsertWithoutExercisesInput = {
    update: XOR<WorkoutRoutineUpdateWithoutExercisesInput, WorkoutRoutineUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutRoutineCreateWithoutExercisesInput, WorkoutRoutineUncheckedCreateWithoutExercisesInput>
    where?: WorkoutRoutineWhereInput
  }

  export type WorkoutRoutineUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutRoutineWhereInput
    data: XOR<WorkoutRoutineUpdateWithoutExercisesInput, WorkoutRoutineUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutRoutineUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plan?: WorkoutPlanUpdateOneRequiredWithoutRoutinesNestedInput
    sessions?: WorkoutSessionUpdateManyWithoutRoutineNestedInput
  }

  export type WorkoutRoutineUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sessions?: WorkoutSessionUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type ExerciseUpsertWithoutRoutineExercisesInput = {
    update: XOR<ExerciseUpdateWithoutRoutineExercisesInput, ExerciseUncheckedUpdateWithoutRoutineExercisesInput>
    create: XOR<ExerciseCreateWithoutRoutineExercisesInput, ExerciseUncheckedCreateWithoutRoutineExercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutRoutineExercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutRoutineExercisesInput, ExerciseUncheckedUpdateWithoutRoutineExercisesInput>
  }

  export type ExerciseUpdateWithoutRoutineExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: NullableStringFieldUpdateOperationsInput | string | null
    VideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sessionLogs?: SessionLogUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutRoutineExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: NullableStringFieldUpdateOperationsInput | string | null
    VideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sessionLogs?: SessionLogUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type StudentProfileCreateWithoutWorkoutSessionsInput = {
    id?: string
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    user: UserCreateNestedOneWithoutStudentProfileInput
    instructor?: InstructorProfileCreateNestedOneWithoutStudentsInput
    plans?: WorkoutPlanCreateNestedManyWithoutStudentsInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutWorkoutSessionsInput = {
    id?: string
    userId: string
    instructorId?: string | null
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
    plans?: WorkoutPlanUncheckedCreateNestedManyWithoutStudentsInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutWorkoutSessionsInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutWorkoutSessionsInput, StudentProfileUncheckedCreateWithoutWorkoutSessionsInput>
  }

  export type WorkoutRoutineCreateWithoutSessionsInput = {
    id?: string
    name: string
    plan: WorkoutPlanCreateNestedOneWithoutRoutinesInput
    exercises?: RoutineExerciseCreateNestedManyWithoutRoutineInput
  }

  export type WorkoutRoutineUncheckedCreateWithoutSessionsInput = {
    id?: string
    planId: string
    name: string
    exercises?: RoutineExerciseUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type WorkoutRoutineCreateOrConnectWithoutSessionsInput = {
    where: WorkoutRoutineWhereUniqueInput
    create: XOR<WorkoutRoutineCreateWithoutSessionsInput, WorkoutRoutineUncheckedCreateWithoutSessionsInput>
  }

  export type SessionLogCreateWithoutSessionInput = {
    id?: string
    setNumber: number
    weight: number
    weightUnit?: string
    reps: number
    rpe?: number | null
    duration?: number | null
    notes?: string | null
    exercise: ExerciseCreateNestedOneWithoutSessionLogsInput
  }

  export type SessionLogUncheckedCreateWithoutSessionInput = {
    id?: string
    exerciseId: string
    setNumber: number
    weight: number
    weightUnit?: string
    reps: number
    rpe?: number | null
    duration?: number | null
    notes?: string | null
  }

  export type SessionLogCreateOrConnectWithoutSessionInput = {
    where: SessionLogWhereUniqueInput
    create: XOR<SessionLogCreateWithoutSessionInput, SessionLogUncheckedCreateWithoutSessionInput>
  }

  export type SessionLogCreateManySessionInputEnvelope = {
    data: SessionLogCreateManySessionInput | SessionLogCreateManySessionInput[]
  }

  export type StudentProfileUpsertWithoutWorkoutSessionsInput = {
    update: XOR<StudentProfileUpdateWithoutWorkoutSessionsInput, StudentProfileUncheckedUpdateWithoutWorkoutSessionsInput>
    create: XOR<StudentProfileCreateWithoutWorkoutSessionsInput, StudentProfileUncheckedCreateWithoutWorkoutSessionsInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutWorkoutSessionsInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutWorkoutSessionsInput, StudentProfileUncheckedUpdateWithoutWorkoutSessionsInput>
  }

  export type StudentProfileUpdateWithoutWorkoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    instructor?: InstructorProfileUpdateOneWithoutStudentsNestedInput
    plans?: WorkoutPlanUpdateManyWithoutStudentsNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutWorkoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    plans?: WorkoutPlanUncheckedUpdateManyWithoutStudentsNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type WorkoutRoutineUpsertWithoutSessionsInput = {
    update: XOR<WorkoutRoutineUpdateWithoutSessionsInput, WorkoutRoutineUncheckedUpdateWithoutSessionsInput>
    create: XOR<WorkoutRoutineCreateWithoutSessionsInput, WorkoutRoutineUncheckedCreateWithoutSessionsInput>
    where?: WorkoutRoutineWhereInput
  }

  export type WorkoutRoutineUpdateToOneWithWhereWithoutSessionsInput = {
    where?: WorkoutRoutineWhereInput
    data: XOR<WorkoutRoutineUpdateWithoutSessionsInput, WorkoutRoutineUncheckedUpdateWithoutSessionsInput>
  }

  export type WorkoutRoutineUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plan?: WorkoutPlanUpdateOneRequiredWithoutRoutinesNestedInput
    exercises?: RoutineExerciseUpdateManyWithoutRoutineNestedInput
  }

  export type WorkoutRoutineUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exercises?: RoutineExerciseUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type SessionLogUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionLogWhereUniqueInput
    update: XOR<SessionLogUpdateWithoutSessionInput, SessionLogUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionLogCreateWithoutSessionInput, SessionLogUncheckedCreateWithoutSessionInput>
  }

  export type SessionLogUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionLogWhereUniqueInput
    data: XOR<SessionLogUpdateWithoutSessionInput, SessionLogUncheckedUpdateWithoutSessionInput>
  }

  export type SessionLogUpdateManyWithWhereWithoutSessionInput = {
    where: SessionLogScalarWhereInput
    data: XOR<SessionLogUpdateManyMutationInput, SessionLogUncheckedUpdateManyWithoutSessionInput>
  }

  export type WorkoutSessionCreateWithoutLogsInput = {
    id?: string
    date?: Date | string
    status?: string
    duration?: number | null
    student: StudentProfileCreateNestedOneWithoutWorkoutSessionsInput
    routine?: WorkoutRoutineCreateNestedOneWithoutSessionsInput
  }

  export type WorkoutSessionUncheckedCreateWithoutLogsInput = {
    id?: string
    studentId: string
    routineId?: string | null
    date?: Date | string
    status?: string
    duration?: number | null
  }

  export type WorkoutSessionCreateOrConnectWithoutLogsInput = {
    where: WorkoutSessionWhereUniqueInput
    create: XOR<WorkoutSessionCreateWithoutLogsInput, WorkoutSessionUncheckedCreateWithoutLogsInput>
  }

  export type ExerciseCreateWithoutSessionLogsInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup?: string | null
    VideoUrl?: string | null
    routineExercises?: RoutineExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutSessionLogsInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup?: string | null
    VideoUrl?: string | null
    routineExercises?: RoutineExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutSessionLogsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutSessionLogsInput, ExerciseUncheckedCreateWithoutSessionLogsInput>
  }

  export type WorkoutSessionUpsertWithoutLogsInput = {
    update: XOR<WorkoutSessionUpdateWithoutLogsInput, WorkoutSessionUncheckedUpdateWithoutLogsInput>
    create: XOR<WorkoutSessionCreateWithoutLogsInput, WorkoutSessionUncheckedCreateWithoutLogsInput>
    where?: WorkoutSessionWhereInput
  }

  export type WorkoutSessionUpdateToOneWithWhereWithoutLogsInput = {
    where?: WorkoutSessionWhereInput
    data: XOR<WorkoutSessionUpdateWithoutLogsInput, WorkoutSessionUncheckedUpdateWithoutLogsInput>
  }

  export type WorkoutSessionUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    student?: StudentProfileUpdateOneRequiredWithoutWorkoutSessionsNestedInput
    routine?: WorkoutRoutineUpdateOneWithoutSessionsNestedInput
  }

  export type WorkoutSessionUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    routineId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExerciseUpsertWithoutSessionLogsInput = {
    update: XOR<ExerciseUpdateWithoutSessionLogsInput, ExerciseUncheckedUpdateWithoutSessionLogsInput>
    create: XOR<ExerciseCreateWithoutSessionLogsInput, ExerciseUncheckedCreateWithoutSessionLogsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutSessionLogsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutSessionLogsInput, ExerciseUncheckedUpdateWithoutSessionLogsInput>
  }

  export type ExerciseUpdateWithoutSessionLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: NullableStringFieldUpdateOperationsInput | string | null
    VideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    routineExercises?: RoutineExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutSessionLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: NullableStringFieldUpdateOperationsInput | string | null
    VideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    routineExercises?: RoutineExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateManyInstructorInput = {
    id?: string
    userId: string
    preferredUnit?: string
    age?: number | null
    gender?: string | null
    height?: number | null
  }

  export type WorkoutPlanCreateManyInstructorInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentProfileUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    plans?: WorkoutPlanUpdateManyWithoutStudentsNestedInput
    workoutSessions?: WorkoutSessionUpdateManyWithoutStudentNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    plans?: WorkoutPlanUncheckedUpdateManyWithoutStudentsNestedInput
    workoutSessions?: WorkoutSessionUncheckedUpdateManyWithoutStudentNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WorkoutPlanUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentProfileUpdateManyWithoutPlansNestedInput
    routines?: WorkoutRoutineUpdateManyWithoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentProfileUncheckedUpdateManyWithoutPlansNestedInput
    routines?: WorkoutRoutineUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutSessionCreateManyStudentInput = {
    id?: string
    routineId?: string | null
    date?: Date | string
    status?: string
    duration?: number | null
  }

  export type BodyMeasurementCreateManyStudentInput = {
    id?: string
    date?: Date | string
    weight: number
    bmi?: number | null
  }

  export type WorkoutPlanUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorProfileUpdateOneRequiredWithoutPlansNestedInput
    routines?: WorkoutRoutineUpdateManyWithoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routines?: WorkoutRoutineUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutSessionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    routine?: WorkoutRoutineUpdateOneWithoutSessionsNestedInput
    logs?: SessionLogUpdateManyWithoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: SessionLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BodyMeasurementUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BodyMeasurementUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BodyMeasurementUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RoutineExerciseCreateManyExerciseInput = {
    id?: string
    routineId: string
    sets: number
    reps: number
    rpe?: number | null
    restTime?: number | null
    order: number
  }

  export type SessionLogCreateManyExerciseInput = {
    id?: string
    sessionId: string
    setNumber: number
    weight: number
    weightUnit?: string
    reps: number
    rpe?: number | null
    duration?: number | null
    notes?: string | null
  }

  export type RoutineExerciseUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    routine?: WorkoutRoutineUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type RoutineExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SessionLogUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    session?: WorkoutSessionUpdateOneRequiredWithoutLogsNestedInput
  }

  export type SessionLogUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionLogUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutRoutineCreateManyPlanInput = {
    id?: string
    name: string
  }

  export type StudentProfileUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    instructor?: InstructorProfileUpdateOneWithoutStudentsNestedInput
    workoutSessions?: WorkoutSessionUpdateManyWithoutStudentNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutSessions?: WorkoutSessionUncheckedUpdateManyWithoutStudentNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateManyWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredUnit?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WorkoutRoutineUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exercises?: RoutineExerciseUpdateManyWithoutRoutineNestedInput
    sessions?: WorkoutSessionUpdateManyWithoutRoutineNestedInput
  }

  export type WorkoutRoutineUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exercises?: RoutineExerciseUncheckedUpdateManyWithoutRoutineNestedInput
    sessions?: WorkoutSessionUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type WorkoutRoutineUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineExerciseCreateManyRoutineInput = {
    id?: string
    exerciseId: string
    sets: number
    reps: number
    rpe?: number | null
    restTime?: number | null
    order: number
  }

  export type WorkoutSessionCreateManyRoutineInput = {
    id?: string
    studentId: string
    date?: Date | string
    status?: string
    duration?: number | null
  }

  export type RoutineExerciseUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    exercise?: ExerciseUpdateOneRequiredWithoutRoutineExercisesNestedInput
  }

  export type RoutineExerciseUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineExerciseUncheckedUpdateManyWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutSessionUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    student?: StudentProfileUpdateOneRequiredWithoutWorkoutSessionsNestedInput
    logs?: SessionLogUpdateManyWithoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: SessionLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateManyWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionLogCreateManySessionInput = {
    id?: string
    exerciseId: string
    setNumber: number
    weight: number
    weightUnit?: string
    reps: number
    rpe?: number | null
    duration?: number | null
    notes?: string | null
  }

  export type SessionLogUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: ExerciseUpdateOneRequiredWithoutSessionLogsNestedInput
  }

  export type SessionLogUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionLogUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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