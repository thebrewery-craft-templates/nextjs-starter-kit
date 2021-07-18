import Parse from "parse";
import config from "../../../parse-config";

console.log(config);
console.log(process.env.NEXT_PUBLIC_PARSE_APP_ID);

Parse.initialize(
  process.env.NEXT_PUBLIC_PARSE_APP_ID,
  process.env.NEXT_PUBLIC_PARSE_JS_KEY
);
Parse.serverURL = config.serverURL;

export default Parse;
