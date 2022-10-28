export namespace lag.entities {
  export enum ShipRank {
    T0,
    T1,
    T2,
    T3,
  }

  export interface IActivity {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    uuid: string;
    datetime: Date;
    description: string;
    participantRate: number;
  }

  export interface IUser {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    uuid: string;
    name: string;
    description: string;
    historyNames: string[];
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
    toUser?: IUser;
    toActivity?: IActivity;
  }

  export interface IUserOwnedShipModel {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    uuid: string;
    userUUID: string;
    modelUUID: string;
  }

  export interface IShipModel {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    uuid: string;
    name: string;
    flag: string;
    rank: ShipRank;
    picture: string;
    subModels: IShipSubModel[];
  }

  export interface IShipSubModel {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    uuid: string;
    parentModelUUID: string;
    name: string;
    flag: string;
    picture: string;
    rank: ShipRank;
  }

  export enum Entity {
    Activity = "lag.entities.Activity",
    User = "lag.entities.User",
    UserParticipantActivity = "lag.entities.UserParticipantActivity",
    UserOwnedShipModel = "lag.entities.UserOwnedShipModel",
    ShipModel = "lag.entities.ShipModel",
    ShipSubModel = "lag.entities.ShipSubModel",
  }

  export enum SanitizedEntity {
    Activity = "Activity",
    User = "User",
    UserParticipantActivity = "UserParticipantActivity",
    UserOwnedShipModel = "UserOwnedShipModel",
    ShipModel = "ShipModel",
    ShipSubModel = "ShipSubModel",
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

export type User = string;

export enum Entity {}

export enum SanitizedEntity {}
