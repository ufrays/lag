import cds from "@sap/cds";
import proxy from "@sap/cds-odata-v2-adapter-proxy";
cds.on("bootstrap", (app: any) => {
  app.use(proxy());

});
module.exports = cds.server;
