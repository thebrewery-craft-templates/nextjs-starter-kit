//at api/parse.js
import Parse from "parse";

//checking if env is browser
if (typeof window !== "undefined") {
  Parse.initialize(process.env.PARSE_APP_ID, process.env.PARSE_JS_KEY);
  Parse.serverURL = process.env.PARSE_SERVER_URL;
}

export default Parse;
