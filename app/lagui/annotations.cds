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

  }

]);
