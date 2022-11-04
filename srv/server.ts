import proxy from "@sap/cds-odata-v2-adapter-proxy";
import cds from "@sap/cds";
cds.on("bootstrap", (app: any) => {
  app.use(proxy());

});
export = cds.server;
