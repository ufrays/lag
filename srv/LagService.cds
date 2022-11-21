using {
  lag.entities.User,
  lag.entities.UserOwnedShipModel,
  lag.entities.UserParticipantActivity,
  lag.entities.Activity,
  lag.entities.ShipModel,
  lag.entities.ShipRank
} from '../db/schema';


service LagService {
  entity UserEntity                    as projection on User {
    uuid,
    ![name],
    description,
    historyNames,
    isActive,
    leaveDate,
    createdAt,
  };

  entity UserOwnedShipModelEntity      as projection on UserOwnedShipModel {
    *,
    toModel.name     as name,
    toModel.shipRank as shipRank,
    toModel.flag     as flag,
    
  };

  entity UserParticipantActivityEntity as projection on UserParticipantActivity {
    *,
    toActivity.description     as activityDesc,
    toActivity.participantRate as participantRate,
    toActivity.datetime        as activityDate,
    toActivity.activityType    as activityType
  };

  entity ActivityEntity                as projection on Activity;
  entity ShipModelEntity               as projection on ShipModel;
  function getDummyData() returns String;
}
