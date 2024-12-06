module.exports = [
	'strapi::logger',
  'strapi::errors',
 	{
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "https:", 'https://cdn.ckeditor.com'],
          "connect-src": ["'self'", "blob:", 'https://proxy-event.ckeditor.com'],
          "img-src": [
            "'self'",
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
						"*aphroconfuso.mt",
          ],
          "font-src": ["'self'", "*aphroconfuso.mt", "data:"],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
	'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
