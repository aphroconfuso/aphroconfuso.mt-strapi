module.exports = [
  'strapi::errors',
 	{
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "https:"],
          "connect-src": ["'self'", "blob:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "cdn.jsdelivr.net",
            "strapi.io",
						"s3.amazonaws.com",
						"aphroconfuso.mt",
          ],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
						"aphroconfuso.mt",
          ],
          "font-src": ["'self'", "aphroconfuso.mt"],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
