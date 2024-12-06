module.exports = ({env}) => ({
	graphql: {
		enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 10,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
	},
	'update-static-content': {
		enabled: true,
		config: {
			githubToken: env('GITHUB_TOKEN'),
			owner: 'aphroconfuso',
			repo: 'aphroconfuso.mt-eleventy',
			workflowId: 'ci-provi-content.yml',
			branch: 'main',
		},
	},
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor"
  },
});
