//at api/parse.js
import Parse from "parse";

//checking if env is browser
if (typeof window !== "undefined") {
  Parse.initialize(
    process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID,
    process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY
  );
  Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL;
  console.log(Parse);
}

export default Parse;
