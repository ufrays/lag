sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/odata/v2/ODataModel"
  ],
  function (BaseController, JSONModel, formatter, Filter, FilterOperator, ODataModel) {
    "use strict";

    return BaseController.extend("lag.lagui.controller.User", {
      onInit: async function () {
        this.oRouter = this.getOwnerComponent().getRouter();
        this.getView().setModel(this.getOwnerComponent().getModel());

        this.oRouter.getRoute("user").attachPatternMatched(this._onRouteMatched, this);
        this.mainModel = this.getOwnerComponent().getModel();
        this.getView().setModel(this.mainModel);
      },

      onPTRRefresh: function (oEvent) {
        this.mainModel.refresh(true);
      },
      onBeforeRebindActivityTable: function (oEvent) {
        var oBindingParams = oEvent.getParameter("bindingParams");
        oBindingParams.filters.push(new Filter("userUUID", FilterOperator.EQ, this.sUserUUID));
        // oBindingParams.parameters = {
        //   expand: 'ActivityEntity'
        // };
      },
      onBeforeRebindBlueprintsTable: function (oEvent) {
        var oBindingParams = oEvent.getParameter("bindingParams");
        oBindingParams.filters.push(new Filter("userUUID", FilterOperator.EQ, this.sUserUUID));
        // oBindingParams.parameters = {
        //   expand: "toModel"
        // };
      },
      loadData: function () {

       this.mainModel.callFunction("/getUserOwnedShips", {
          urlParameters: {
            userUUID: this.sUserUUID;
          },
          success: (oData,response) => {
            const jsModel = new sap.ui.json.JSONModel(oData);
            this.byId("stBlueprints").setModel(jsModel);
          },
          error:  ()=>{
            console.error("not able to load user owned ships")
        });

        this.mainModel.read(`/UserEntity(guid'${this.sUserUUID}')`, {
          success: (oData, response) => {
            if (oData) {
              this.getView().bindElement(`/UserEntity(guid'${this.sUserUUID}')`);
              this.byId("stActivities").rebindTable(true);
              this.byId("stBlueprints").rebindTable(true);
            }
          },
          error: (oError) => {
            // TODO:
            console.log(oError);
          }
        });
      },
      _onRouteMatched: function (oEvent) {
        const sUserUUID = oEvent.getParameter("arguments").uuid;
        this.sUserUUID = sUserUUID;
        this.loadData();
      }
    });
  }
);
