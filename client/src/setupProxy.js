//This file is to redirect the client to express server, when we click on localhost:3000 it will chage to 5000
//No need this is production, we are not using create-react-app in prod.
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    //To make it work for all routes, ie /api
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};