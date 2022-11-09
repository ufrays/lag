namespace lag.entities;

using {
  managed,
  cuid,
  cds,
} from '@sap/cds/common';


type ShipRank : String enum {
  T0;
  T1;
  T2;
  T3;
  NONE;
}


type ParticipantType : String enum {
  WD    = '未到';
  YD    = '已到';
  GJ    = '挂机';
  QJ    = '请假';
  OTHER = '其他';
}

type ActivityType : String enum {
  GC = '攻城';
  TZ = '团战';
  QT = '其他';
}

entity Activity : managed {
  key uuid                    : UUID;
      datetime                : Date;
      description             : String;
      activityType            : ActivityType;
      virtual participantRate : Double;
      attendedUsers           : Association to many UserParticipantActivity
                                  on attendedUsers.activityUUID = $self.uuid;
      availableUsers          : Integer;
}


entity User : managed {
  key uuid                : UUID;
      name                : String;
      description         : String;
      historyNames        : String;
      isActive            : Boolean;
      leaveDate           : Date;
      ownedShipModels     : Association to many UserOwnedShipModel
                              on ownedShipModels.userUUID = $self.uuid;
      participantActivies : Association to many UserParticipantActivity
                              on participantActivies.userUUID = $self.uuid;
      role                : String;
      password            : String;
}

entity UserParticipantActivity : managed {
  key userUUID        : UUID;
  key activityUUID    : UUID;
      participantType : ParticipantType;
      toUser          : Association to User
                          on toUser.uuid = $self.userUUID;
      toActivity      : Association to Activity
                          on toActivity.uuid = $self.activityUUID;
}

entity UserOwnedShipModel : managed {
  key userUUID  : UUID;
  key modelUUID : UUID;
      toUser    : Association to User
                    on toUser.uuid = $self.userUUID;
      toModel   : Association to ShipModel
                    on toModel.uuid = $self.modelUUID;
}

entity ShipModel : managed {
  key uuid            : UUID;
      name            : String;
      flag            : String;
      shipRank        : ShipRank;
      picture         : Binary;
      parentModelUUID : UUID;
      subModels       : Association to many ShipModel
                          on subModels.parentModelUUID = $self.uuid;
      toParentModel   : Association to one ShipModel
                          on toParentModel.uuid = $self.parentModelUUID;
}
