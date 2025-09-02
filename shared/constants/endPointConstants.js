const API = "api";
const AUTH = "auth";
const VERSION = "v1";

const endPointConstants = {
  auth: {
    baseRoute: `/${API}/${VERSION}/${AUTH}`,
    logIn: "/login",
    token: "/token",
    signUp: "/signup",
  },
};

module.exports = endPointConstants;
