import type { Attribute, Schema } from '@strapi/strapi';

export interface BookInfoBook extends Schema.Component {
  collectionName: 'components_book_info_books';
  info: {
    description: '';
    displayName: 'book';
  };
  attributes: {
    inShops: Attribute.Boolean & Attribute.DefaultTo<false>;
    isbn: Attribute.String;
    orderable: Attribute.Boolean & Attribute.DefaultTo<false>;
    pages: Attribute.Integer;
    price: Attribute.Integer;
    published: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BookPromoBookPromotion extends Schema.Component {
  collectionName: 'components_book_promo_book_promotions';
  info: {
    description: '';
    displayName: 'Book promotion';
  };
  attributes: {
    story: Attribute.Relation<
      'book-promo.book-promotion',
      'oneToOne',
      'api::story.story'
    >;
    text: Attribute.Text;
  };
}

export interface DefinitionsStyleGuideItem extends Schema.Component {
  collectionName: 'components_definitions_style_guide_items';
  info: {
    description: '';
    displayName: 'StyleGuideItem';
  };
  attributes: {
    definition: Attribute.RichText & Attribute.Required;
    term: Attribute.String & Attribute.Required & Attribute.Unique;
  };
}

export interface PromotionsAudio extends Schema.Component {
  collectionName: 'components_promotions_audio';
  info: {
    description: '';
    displayName: 'AudioPromo';
    icon: 'volumeUp';
  };
  attributes: {
    audioLengthMinutes: Attribute.String;
    audioUrl: Attribute.String;
    blurbLines: Attribute.Integer;
    highlight: Attribute.Boolean & Attribute.DefaultTo<false>;
    interfaceLabel: Attribute.String & Attribute.Required;
    note: Attribute.RichText;
    putAfterThisText: Attribute.String;
    story: Attribute.Relation<
      'promotions.audio',
      'oneToOne',
      'api::story.story'
    >;
  };
}

export interface PromotionsStoryImagePromo extends Schema.Component {
  collectionName: 'components_promotions_story_image_promos';
  info: {
    description: '';
    displayName: 'StoryImagePromo';
  };
  attributes: {
    blurbLines: Attribute.Integer;
    image: Attribute.Media<'images', true>;
    imageCrop: Attribute.Enumeration<['landscape', 'square', 'uncropped']> &
      Attribute.DefaultTo<'landscape'>;
    interfaceLabel: Attribute.String & Attribute.Required & Attribute.Private;
    mobileImage: Attribute.Media<'images'>;
    mobilePriority: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<9>;
    quotation: Attribute.Boolean & Attribute.DefaultTo<true>;
    story: Attribute.Relation<
      'promotions.story-image-promo',
      'oneToOne',
      'api::story.story'
    >;
    text: Attribute.Text;
  };
}

export interface PromotionsStoryPoemPromo extends Schema.Component {
  collectionName: 'components_promotions_story_poem_promos';
  info: {
    description: '';
    displayName: 'StoryPoemPromo';
  };
  attributes: {
    blurbLines: Attribute.Integer;
    interfaceLabel: Attribute.String & Attribute.Required & Attribute.Private;
    mobilePriority: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<9>;
    quotation: Attribute.Boolean & Attribute.DefaultTo<true>;
    story: Attribute.Relation<
      'promotions.story-poem-promo',
      'oneToOne',
      'api::story.story'
    >;
    text: Attribute.RichText;
  };
}

export interface PromotionsStoryPromo extends Schema.Component {
  collectionName: 'components_promotions_story_promos';
  info: {
    description: '';
    displayName: 'StoryPromo';
  };
  attributes: {
    blurbLines: Attribute.Integer;
    interfaceLabel: Attribute.String & Attribute.Required & Attribute.Private;
    letter: Attribute.Relation<
      'promotions.story-promo',
      'oneToOne',
      'api::letter.letter'
    >;
    quotation: Attribute.Boolean & Attribute.DefaultTo<true>;
    story: Attribute.Relation<
      'promotions.story-promo',
      'oneToOne',
      'api::story.story'
    >;
    text: Attribute.Text;
  };
}

export interface QuotesEpigraphs extends Schema.Component {
  collectionName: 'components_quotes_epigraphs';
  info: {
    description: '';
    displayName: 'Epigraphs';
  };
  attributes: {
    attribution: Attribute.String;
    quotation: Attribute.Text & Attribute.Required;
    top: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SummariesSummaries extends Schema.Component {
  collectionName: 'components_summaries_summaries';
  info: {
    displayName: 'summaries';
  };
  attributes: {
    body: Attribute.Text;
    download: Attribute.Media<'files', true>;
    story: Attribute.Relation<
      'summaries.summaries',
      'oneToOne',
      'api::story.story'
    >;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'book-info.book': BookInfoBook;
      'book-promo.book-promotion': BookPromoBookPromotion;
      'definitions.style-guide-item': DefinitionsStyleGuideItem;
      'promotions.audio': PromotionsAudio;
      'promotions.story-image-promo': PromotionsStoryImagePromo;
      'promotions.story-poem-promo': PromotionsStoryPoemPromo;
      'promotions.story-promo': PromotionsStoryPromo;
      'quotes.epigraphs': QuotesEpigraphs;
      'summaries.summaries': SummariesSummaries;
    }
  }
}
