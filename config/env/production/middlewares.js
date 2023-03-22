module.exports = [
  'strapi::errors',
 	{
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
          "connect-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "blob:"],
          "img-src": [
            "'self'",
            "*.tinymce.com",
            "*.tiny.cloud",
            "data:",
            "blob:",
            "cdn.jsdelivr.net",
            "strapi.io",
						"s3.amazonaws.com",
						"*aphroconfuso.mt",
          ],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "*.tinymce.com",
						"*.tiny.cloud",
						"*aphroconfuso.mt",
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "*aphroconfuso.mt"],
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
