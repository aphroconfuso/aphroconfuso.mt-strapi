module.exports = ({env}) => ({
	'content-versioning': {
		enabled: true,
	},
	'duplicate-button': {
		enabled: true,
	},
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
  'preview-button': {
		enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::home.home',
          draft: {
            url: 'https://provi.aphroconfuso.mt',
          },
          published: {
            url: 'https://provi.aphroconfuso.mt',
          },
        },
        {
          uid: 'api::story.story',
          draft: {
            url: 'https://provi.aphroconfuso.mt/{title}',
          },
          published: {
            url: 'https://provi.aphroconfuso.mt/{title}',
          },
        },
      ],
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
									valid_elements: "a[href],blockquote,p[class],em,strong,h4,h5,h6,ul,ol,li,code,img,figure,figcaption",
									forced_root_block: "",
									convert_urls: false,
									entity_encoding: "raw",
									plugins:
											"advlist autolink lists link image charmap preview anchor \
											searchreplace visualblocks code fullscreen table emoticons nonbreaking \
											insertdatetime media table help wordcount directionality paste",
									toolbar:
											"undo redo | styles | paste | bold italic | \
											image visualblocks code|\
											nonbreaking bullist numlist | ltr rtl | removeformat",
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
																title: "Paragraph - enjambed",
																block: "p",
																classes: "enjambed"
															},
															{
																title: "Paragraph - right-aligned",
																block: "p",
																classes: "right-aligned"
															},
															{
																title: "Paragraph - centred",
																block: "p",
																classes: "centred"
															},
															{
																title: "Paragraph - justified",
																block: "p",
																classes: "justified"
															},
															{
																title: "Paragraph - FX 1",
																block: "p",
																classes: "fx-1"
															},
															{
																title: "Paragraph - FX 2",
																block: "p",
																classes: "fx-2"
															},
															{
																title: "Paragraph - FX 3",
																block: "p",
																classes: "fx-3"
															},
															{
																title: "Paragraph - LTR exception",
																block: "p",
																classes: "ltr"
															},
															{
																title: "Span - RTL exception",
																block: "span",
																classes: "rtl"
															},
															{
																title: "Span - LTR exception",
																block: "span",
																classes: "ltr"
															},
															{
																title: "Span - FX 100",
																block: "span",
																classes: "fx-100"
															},
															{
																title: "Span - FX 200",
																block: "span",
																classes: "fx-200"
															},
															{
																title: "Span - FX 300",
																block: "span",
																classes: "fx-300"
															},
															{ title: "Blockquote", block: "blockquote" },
													],
											},
								],
									content_css: '/tinymce.css',
							},
					},
			},
	},
});
