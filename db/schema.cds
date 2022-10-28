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
    T3
}

entity Activity : managed {
    key uuid            : UUID;
        datetime        : Date;
        description     : String;
        participantRate : Integer;
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
    key userUUID     : UUID;
    key activityUUID : UUID;
        toUser       : Association to User
                           on toUser.uuid = $self.userUUID;
        toActivity   : Association to Activity
                           on toActivity.uuid = $self.activityUUID;
}

entity UserOwnedShipModel : managed {
    key uuid      : UUID;
        userUUID  : UUID;
        modelUUID : UUID;
}

entity ShipModel : managed {
    key uuid      : UUID;
        name      : String;
        flag      : String;
        shipRank  : ShipRank;
        picture   : Binary;
        subModels : Composition of many ShipSubModel
                        on subModels.parentModelUUID = $self.uuid;
}

entity ShipSubModel : managed {
    key uuid            : UUID;
        parentModelUUID : UUID;
        name            : String;
        flag            : String;
        picture         : Binary;
        shipRank        : ShipRank;
}
