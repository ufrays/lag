export namespace lag.entities {
  export enum ShipRank {
    T0,
    T1,
    T2,
    T3,
    NONE,
  }

  export enum ParticipantType {
    WD = "未到",
    YD = "已到",
    GJ = "挂机",
    QJ = "请假",
    OTHER = "其他",
  }

  export enum ActivityType {
    GC = "攻城",
    TZ = "团战",
    QT = "其他",
  }

  export interface IActivity {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    uuid: string;
    datetime: Date;
    description: string;
    activityType: ActivityType;
    participantRate?: number;
    attendedUsers?: IUserParticipantActivity[];
    availableUsers: number;
  }

  export interface IUser {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    uuid: string;
    name: string;
    description: string;
    historyNames: string;
    isActive: boolean;
    leaveDate: Date;
    ownedShipModels?: IUserOwnedShipModel[];
    participantActivies?: IUserParticipantActivity[];
    role: string;
    password: string;
  }

  export interface IUserParticipantActivity {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    userUUID: string;
    activityUUID: string;
    participantType: ParticipantType;
    toUser?: IUser;
    toActivity?: IActivity;
  }

  export interface IUserOwnedShipModel {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    userUUID: string;
    modelUUID: string;
    toUser?: IUser;
    toModel?: IShipModel;
  }

  export interface IShipModel {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    uuid: string;
    name: string;
    flag: string;
    shipRank: ShipRank;
    picture: Buffer;
    parentModelUUID: string;
    subModels?: IShipModel[];
    toParentModel?: IShipModel;
  }

  export enum Entity {
    Activity = "lag.entities.Activity",
    User = "lag.entities.User",
    UserParticipantActivity = "lag.entities.UserParticipantActivity",
    UserOwnedShipModel = "lag.entities.UserOwnedShipModel",
    ShipModel = "lag.entities.ShipModel",
  }

  export enum SanitizedEntity {
    Activity = "Activity",
    User = "User",
    UserParticipantActivity = "UserParticipantActivity",
    UserOwnedShipModel = "UserOwnedShipModel",
    ShipModel = "ShipModel",
  }
}

export namespace sap.common {
  export interface ILanguages {
    name: string;
    descr: string;
    code: string;
    texts: ITexts[];
    localized?: ITexts;
  }

  export interface ICountries {
    name: string;
    descr: string;
    code: string;
    texts: ITexts[];
    localized?: ITexts;
  }

  export interface ICurrencies {
    name: string;
    descr: string;
    code: string;
    symbol: string;
    texts: ITexts[];
    localized?: ITexts;
  }

  export interface ITexts {
    locale: string;
    name: string;
    descr: string;
    code: string;
  }

  export interface ITexts {
    locale: string;
    name: string;
    descr: string;
    code: string;
  }

  export interface ITexts {
    locale: string;
    name: string;
    descr: string;
    code: string;
  }

  export enum Entity {
    Languages = "sap.common.Languages",
    Countries = "sap.common.Countries",
    Currencies = "sap.common.Currencies",
    Texts = "sap.common.Currencies.texts",
  }

  export enum SanitizedEntity {
    Languages = "Languages",
    Countries = "Countries",
    Currencies = "Currencies",
    Texts = "Texts",
  }
}

export namespace LagService {
  export interface IUserOwnedShips {
    modelUUID: string;
    name: string;
    shipRank: lag.entities.ShipRank;
    flag: string;
    subModelNames: string[];
  }

  export interface IUserEntity {
    uuid: string;
    name: string;
    description: string;
    historyNames: string;
    isActive: boolean;
    leaveDate: Date;
    createdAt?: Date;
  }

  export interface IUserOwnedShipModelEntity {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    userUUID: string;
    modelUUID: string;
    toUser?: IUserEntity;
    toModel?: IShipModelEntity;
    name: string;
    shipRank: lag.entities.ShipRank;
    flag: string;
    parentModelUUID: string;
  }

  export interface IUserParticipantActivityEntity {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    userUUID: string;
    activityUUID: string;
    participantType: lag.entities.ParticipantType;
    toUser?: IUserEntity;
    toActivity?: IActivityEntity;
    activityDesc: string;
    participantRate?: number;
    activityDate: Date;
    activityType: lag.entities.ActivityType;
  }

  export interface IActivityEntity {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    uuid: string;
    datetime: Date;
    description: string;
    activityType: lag.entities.ActivityType;
    participantRate?: number;
    attendedUsers?: IUserParticipantActivityEntity[];
    availableUsers: number;
  }

  export interface IShipModelEntity {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    uuid: string;
    name: string;
    flag: string;
    shipRank: lag.entities.ShipRank;
    picture: Buffer;
    parentModelUUID: string;
    subModels?: IShipModelEntity[];
    toParentModel?: IShipModelEntity;
  }

  export enum FuncGetDummyData {
    name = "getDummyData",
  }

  export type FuncGetDummyDataReturn = string;

  export enum FuncGetUserOwnedShips {
    name = "getUserOwnedShips",
    paramUserUUID = "userUUID",
  }

  export interface IFuncGetUserOwnedShipsParams {
    userUUID: string;
  }

  export type FuncGetUserOwnedShipsReturn = IUserOwnedShips[];

  export enum Entity {
    UserOwnedShips = "LagService.UserOwnedShips",
    UserEntity = "LagService.UserEntity",
    UserOwnedShipModelEntity = "LagService.UserOwnedShipModelEntity",
    UserParticipantActivityEntity = "LagService.UserParticipantActivityEntity",
    ActivityEntity = "LagService.ActivityEntity",
    ShipModelEntity = "LagService.ShipModelEntity",
  }

  export enum SanitizedEntity {
    UserOwnedShips = "UserOwnedShips",
    UserEntity = "UserEntity",
    UserOwnedShipModelEntity = "UserOwnedShipModelEntity",
    UserParticipantActivityEntity = "UserParticipantActivityEntity",
    ActivityEntity = "ActivityEntity",
    ShipModelEntity = "ShipModelEntity",
  }
}

export type User = string;

export enum Entity {}

export enum SanitizedEntity {}
