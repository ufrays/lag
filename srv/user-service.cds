using {
  lag.entities.User,
  lag.entities.UserOwnedShipModel,
  lag.entities.UserParticipantActivity,
} from '../db/schema';


service UserService {
  entity UserEntity                    as projection on User;
  entity UserOwnedShipModelEntity      as projection on UserOwnedShipModel;
  entity UserParticipantActivityEntity as projection on UserParticipantActivity;

}
