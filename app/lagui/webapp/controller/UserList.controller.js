sap.ui.define([
  "./BaseController",
  "sap/ui/model/json/JSONModel",
  "../model/formatter",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
  "use strict";

  return BaseController.extend("lag.lagui.controller.UserList", {

    onInit: async function () {
      const oModel = this.getOwnerComponent().getModel();
      this.getView().setModel(oModel);
    },

    onItemPress : function (oEvent) {
      const sPath = oEvent.getSource().getBindingContext().getPath();
			const oUserEntity = this.getView().getModel().getProperty(sPath);
			if (oUserEntity && oUserEntity.uuid) {
				this._navToDetail(oUserEntity.uuid);
			}
    },
		_navToDetail: function (sUUID) {
      this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter?.navTo("user", {
				uuid: sUUID
			});
		},
  });
});
