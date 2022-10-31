using UserService as service from '../../srv/user-service';

annotate service.UserEntity with @(UI.LineItem : [
  {
    $Type : 'UI.DataField',
    Label : '姓名',
    Value : name,
  },
  {
    $Type : 'UI.DataField',
    Label : '介绍',
    Value : description,
  },
  {
    $Type : 'UI.DataField',
    Label : '历史用名',
    Value : historyNames,
  },
  {
    $Type : 'UI.DataField',
    Label : '在盟',
    Value : isActive,
  },
  {
    $Type : 'UI.DataField',
    Label : '退盟时间',
    Value : leaveDate,
  },
]);

annotate service.UserEntity with @(
  UI.FieldGroup #UserFacet : {
    $Type : 'UI.FieldGroupType',
    Data  : [
      {
        $Type : 'UI.DataField',
        Label : '姓名',
        Value : name,
      },
      {
        $Type : 'UI.DataField',
        Label : '介绍',
        Value : description,
      },
      {
        $Type : 'UI.DataField',
        Label : '历史用名字',
        Value : historyNames,
      },
      {
        $Type : 'UI.DataField',
        Label : '在盟',
        Value : isActive,
      },
      {
        $Type : 'UI.DataField',
        Label : '退盟时间',
        Value : leaveDate,
      },
      {
        $Type : 'UI.DataField',
        Label : '用户类型',
        Value : role,
      },
      {
        $Type : 'UI.DataField',
        Label : '密码',
        Value : password,
      },
    ],
  },
  UI.Facets                : [{
    $Type  : 'UI.ReferenceFacet',
    ID     : 'UserFacet',
    Label  : '详细信息',
    Target : '@UI.FieldGroup#UserFacet',
  }, ]
);
