import { css } from "styled-components";

export const style = css`
  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding-block: 0.2rem;
    font-size: 0.875rem;
  }

	@font-face {
		font-family: "Alegreya", serif;
		src: url("https://aphroconfuso.mt/fonts/Alegreya-VariableFont_wght.ttf") format("truetype");
		font-style: normal;
		font-weight: 400;
	}

	.ck-source-editing-area textarea {
		color: orange !important;
		background-color: darkslategray !important;
	}

	.ck.ck-content.ck-editor__editable {
    --ck-font-face: "Alegreya";
		border-bottom-left-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
		line-height: initial;
		min-height: 6rem;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

		i {
			font-style: italic;
		}

		strong {
			font-weight: 500;
		}

		p {
			font-size: 1.2rem;
			line-height: 1.4;
			margin-bottom: 0.9rem;
		}

		blockquote {
			font-size: 1.1rem;
			font-style: normal;
			line-height: 1.4;
			margin: 0.9rem 0;
			padding-left: 0.9rem;
			border: none;
		}

		h5 {
			font-size: 1.4rem;
			font-style: italic;
			font-weight: 600;
			margin-bottom: 0;
			margin-top: .9rem;
		}

		h6 {
			font-size: 1.2rem;
			font-weight: 700;
			margin-bottom: 0;
			margin-top: .9rem;
		}

		.enjambed {
			background-color: palegoldenrod !important;
			margin-bottom: 0;
		}

		.fx1 {
			background-color: gold !important;
		}
		.fx2 {
			background-color: lightgreen !important;
		}
		.fx3 {
			background-color: mediumvioletred !important;
		}
		.ltr {
			background-color: cornflowerblue !important;
		}
		.rtl {
			background-color: palevioletred !important;
		}
		.sc {
			font-variant: small-caps;
		  text-transform: lowercase;
			background-color: orange !important;
		}
		[style^=text-align] {
			background-color: lightcoral !important;
		}

		// unchanged
    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: .75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub
    }

    sup {
      vertical-align: super
    }

      // so it's more Strapi alike
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid rgb(73, 69, 255);
        box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        transition-property: border-color, box-shadow;
        transition-duration: 0.2s;
      }
    }
  }
`;
