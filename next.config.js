module.exports = {
  exportPathMap: () => {
    return {
      "/": { page: "/" },
    };
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    //you need to insert BOTH KEYs in order to connect with Parse Server
    NEXT_PUBLIC_PARSE_APP_ID: "myAppId",
    NEXT_PUBLIC_PARSE_JS_KEY: "myJSKey",
  },
};
