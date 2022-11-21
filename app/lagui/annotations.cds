using LagService as service from '../../srv/LagService';

annotate service.UserEntity with @(UI.SelectionFields : [
  name,
  isActive,
]);

annotate service.UserEntity with @(UI.LineItem : [
  {
    $Type             : 'UI.DataField',
    Value             : name,
    Label             : '昵称',
    ![@UI.Importance] : #High,
  },
  {
    $Type : 'UI.DataField',
    Value : description,
    Label : '简介',
  },
  {
    $Type : 'UI.DataField',
    Value : historyNames,
    Label : '历史用名',
  },
  {
    $Type : 'UI.DataField',
    Value : isActive,
    Label : '在盟',
  },
  {
    $Type : 'UI.DataField',
    Value : leaveDate,
    Label : '退盟时间',

  },
  {
    $Type : 'UI.DataField',
    Value : createdAt,
    Label : '创建时间',
  }

]);

annotate service.UserParticipantActivityEntity with @(UI.LineItem : [
  {
    $Type : 'UI.DataField',
    Value : activityDesc,
    Label : '活动名称',
  },
  {
    $Type : 'UI.DataField',
    Value : activityDate,
    Label : '活动时间',
  },
  {
    $Type : 'UI.DataField',
    Value : participantType,
    Label : '状态',
  },
  {
    $Type : 'UI.DataField',
    Value : participantRate,
    Label : '整体参与率',
  },

]);

annotate service.UserOwnedShipModelEntity with @(UI.LineItem : [
  {
    $Type : 'UI.DataField',
    Value : name,
    Label : '蓝图名称',
  },
  {
    $Type : 'UI.DataField',
    Value : shipRank,
    Label : '评级'
  },
  {
    $Type : 'UI.DataField',
    Value : flag,
    Label : '标签'
  },
]);
