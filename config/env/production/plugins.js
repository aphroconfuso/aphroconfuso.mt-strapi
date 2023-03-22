module.exports = ({env}) => ({
	graphql: {
		enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
	tinymce: {
			enabled: true,
			config: {
					editor: {
							outputFormat: "html",
							editorConfig: {
									language: "en",
									height: 500,
									menubar: false,
									extended_valid_elements: "span, img, small",
									forced_root_block: "",
									convert_urls: false,
									entity_encoding: "raw",
									plugins:
											"advlist autolink lists link image charmap preview anchor \
											searchreplace visualblocks code fullscreen table emoticons nonbreaking \
											insertdatetime media table code help wordcount",
									toolbar:
											"undo redo | styles | bold italic | \
											alignleft aligncenter alignright | \
											table visualblocks code|\
											nonbreaking bullist numlist | removeformat",
									style_formats: [
											{
													title: "Headings",
													items: [
															{ title: "h4", block: "h4" },
															{ title: "h5", block: "h5" },
															{ title: "h6", block: "h6" },
													],
											},

											{
													title: "Text",
													items: [
															{ title: "Paragraph", block: "p" },
															{
																	title: "Paragraph with small letters",
																	block: "small",
															},
													],
											},
								],
									content_css: '/tinymce.css',
							},
					},
			},
	},
});
