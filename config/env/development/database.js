module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5437),
			database: env('DATABASE_NAME', 'aphroconfusodb'),
			user: env('DATABASE_USERNAME', 'strapi'),
			password: env('DATABASE_PASSWORD', 'dfgg34535jdfgoiuuyyyTTREEasdfaskdnkasjd'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
