sap.ui.define([
  "./BaseController",
  "sap/ui/model/json/JSONModel",
  "../model/formatter",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
  "use strict";

  return BaseController.extend("lag.lagui.controller.User", {

    onInit: async function () {
      this.oRouter = this.getOwnerComponent().getRouter();
			this.getView().setModel(this.getOwnerComponent().getModel());

			this.oRouter.getRoute("user").attachPatternMatched(this._onRouteMatched, this);
      this.userModel = this.getOwnerComponent().getModel();
      this.getView().setModel(this.userModel);
      
    },
    onBeforeRebindTable : function(oEvent){
      var oBindingParams = oEvent.getParameter("bindingParams");
      oBindingParams.filters.push(new Filter("userUUID", FilterOperator.EQ, this.sUserUUID));
      // oBindingParams.parameters = {
      //   expand: 'ActivityEntity'
      // };
    },
    loadData: function () {
      this.userModel.read(`/UserEntity(guid'${this.sUserUUID}')`, {
        success: (oData, response) => {
          if (oData) {
            this.getView().bindElement(`/UserEntity(guid'${this.sUserUUID}')`);
            this.byId("ActivityItemsSmartTable").rebindTable(true);
          } 
        },
        error: (oError) => {
          // TODO:
          console.log(oError);
        }
      });
      this.userModel.read(`/`)
    },
    _onRouteMatched: function (oEvent) {
      const sUserUUID = oEvent.getParameter("arguments").uuid;
      this.sUserUUID = sUserUUID;
      this.loadData();
		},
  });
});
