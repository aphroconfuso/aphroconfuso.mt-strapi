import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    description: '';
    displayName: 'About';
    pluralName: 'abouts';
    singularName: 'about';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAccessibilityAccessibility extends Schema.SingleType {
  collectionName: 'accessibilities';
  info: {
    description: '';
    displayName: 'Accessibility';
    pluralName: 'accessibilities';
    singularName: 'accessibility';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::accessibility.accessibility',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::accessibility.accessibility',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAppointmentIndexAppointmentIndex extends Schema.SingleType {
  collectionName: 'appointment_indices';
  info: {
    description: '';
    displayName: 'AppointmentIndex';
    pluralName: 'appointment-indices';
    singularName: 'appointment-index';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::appointment-index.appointment-index',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::appointment-index.appointment-index',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAppointmentAppointment extends Schema.CollectionType {
  collectionName: 'appointments';
  info: {
    description: '';
    displayName: 'Appointments';
    pluralName: 'appointments';
    singularName: 'appointment';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::appointment.appointment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    dateTimePublication: Attribute.DateTime & Attribute.Required;
    editorial: Attribute.Text & Attribute.Required;
    moreToCome: Attribute.Text;
    publishedAt: Attribute.DateTime;
    stories: Attribute.Relation<
      'api::appointment.appointment',
      'oneToMany',
      'api::story.story'
    >;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::appointment.appointment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBookBook extends Schema.CollectionType {
  collectionName: 'books';
  info: {
    description: '';
    displayName: 'Book';
    pluralName: 'books';
    singularName: 'book';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    authors: Attribute.Relation<
      'api::book.book',
      'manyToMany',
      'api::person.person'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::book.book', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    editors: Attribute.Relation<
      'api::book.book',
      'manyToMany',
      'api::person.person'
    >;
    language: Attribute.Enumeration<
      [
        '\u0627\u0644\u0639\u0631\u0628\u064A\u0629',
        'Catal\u00E0',
        'Deutsch',
        'English',
        'Espa\u00F1ol',
        'Euskara',
        'Fran\u00E7ais',
        'Hrvatski',
        'Italiano',
        'Malti'
      ]
    > &
      Attribute.DefaultTo<'Malti'>;
    mentions: Attribute.Relation<
      'api::book.book',
      'manyToMany',
      'api::story.story'
    >;
    originalLanguage: Attribute.Enumeration<
      [
        '\u0627\u0644\u0639\u0631\u0628\u064A\u0629',
        'Catal\u00E0',
        'Deutsch',
        'English',
        'Espa\u00F1ol',
        'Euskara',
        'Fran\u00E7ais',
        'Hrvatski',
        'Italiano',
        'Malti'
      ]
    > &
      Attribute.DefaultTo<'Malti'>;
    publicationDate: Attribute.Date & Attribute.Required;
    publishedAt: Attribute.DateTime;
    publishers: Attribute.Relation<
      'api::book.book',
      'manyToMany',
      'api::publisher.publisher'
    >;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
    translators: Attribute.Relation<
      'api::book.book',
      'manyToMany',
      'api::person.person'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::book.book', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBookmarkBookmark extends Schema.SingleType {
  collectionName: 'bookmarks';
  info: {
    displayName: 'Bookmark';
    pluralName: 'bookmarks';
    singularName: 'bookmark';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bookmark.bookmark',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::bookmark.bookmark',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollectionCollection extends Schema.CollectionType {
  collectionName: 'collections';
  info: {
    description: '';
    displayName: 'Collection';
    pluralName: 'collections';
    singularName: 'collection';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text;
    continuity: Attribute.Text;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::collection.collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 350;
      }>;
    moreToCome: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    promoImage: Attribute.Media<'images'> & Attribute.Required;
    promoImageMobile: Attribute.Media<'images'>;
    publishedAt: Attribute.DateTime;
    sequences: Attribute.Relation<
      'api::collection.collection',
      'manyToMany',
      'api::sequence.sequence'
    >;
    sortStories: Attribute.Enumeration<['Data', 'Titlu']>;
    stories: Attribute.Relation<
      'api::collection.collection',
      'manyToMany',
      'api::story.story'
    >;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::collection.collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColophonColophon extends Schema.SingleType {
  collectionName: 'colophons';
  info: {
    description: '';
    displayName: 'Colophon';
    pluralName: 'colophons';
    singularName: 'colophon';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::colophon.colophon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::colophon.colophon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCookiePolicyCookiePolicy extends Schema.SingleType {
  collectionName: 'cookie_policies';
  info: {
    description: '';
    displayName: 'CookiePolicy';
    pluralName: 'cookie-policies';
    singularName: 'cookie-policy';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cookie-policy.cookie-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cookie-policy.cookie-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCopyrightCopyright extends Schema.SingleType {
  collectionName: 'copyrights';
  info: {
    displayName: 'Copyright';
    pluralName: 'copyrights';
    singularName: 'copyright';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::copyright.copyright',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::copyright.copyright',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events';
  info: {
    displayName: 'Event';
    pluralName: 'events';
    singularName: 'event';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    dateClosed: Attribute.Date;
    dateOpened: Attribute.Date;
    name: Attribute.String & Attribute.Required;
    organisations: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::organisation.organisation'
    >;
    people: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::person.person'
    >;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    venues: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::venue.venue'
    >;
  };
}

export interface ApiGenericGeneric extends Schema.CollectionType {
  collectionName: 'generics';
  info: {
    description: '';
    displayName: 'Generic';
    pluralName: 'generics';
    singularName: 'generic';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::generic.generic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    key: Attribute.String;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::generic.generic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages';
  info: {
    description: '';
    displayName: 'Homepage';
    pluralName: 'homepages';
    singularName: 'homepage';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    appointment: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'api::appointment.appointment'
    >;
    audioPromos: Attribute.Component<'promotions.audio', true>;
    collections: Attribute.Relation<
      'api::homepage.homepage',
      'oneToMany',
      'api::collection.collection'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    imagePromos: Attribute.Component<'promotions.story-image-promo', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 24;
          min: 0;
        },
        number
      >;
    layout: Attribute.Enumeration<
      [
        'Layout 1',
        'Layout 2',
        'Layout 3',
        'Layout 4',
        'Layout 5',
        'Layout 6',
        'Layout 7',
        'Layout 8',
        'Layout 9'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Layout 1'>;
    poetryPromos: Attribute.Component<'promotions.story-poem-promo', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 24;
          min: 0;
        },
        number
      >;
    promos: Attribute.Component<'promotions.story-promo', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 24;
          min: 6;
        },
        number
      >;
    publishedAt: Attribute.DateTime;
    showBooks: Attribute.Boolean & Attribute.DefaultTo<true>;
    showNewsletter: Attribute.Boolean & Attribute.DefaultTo<true>;
    showPodcastPromo: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.DefaultTo<true>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInternationalMediaInternationalMedia
  extends Schema.CollectionType {
  collectionName: 'international_medias';
  info: {
    description: '';
    displayName: 'InternationalMedia';
    pluralName: 'international-medias';
    singularName: 'international-media';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::international-media.international-media',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    language: Attribute.Enumeration<
      [
        '\u0627\u0644\u0639\u0631\u0628\u064A\u0629',
        'Catal\u00E0',
        'Deutsch',
        'English',
        'Espa\u00F1ol',
        'Euskara',
        'Fran\u00E7ais',
        'Hrvatski',
        'Italiano',
        'Malti',
        'Nederlands',
        'Polski',
        'Rom\u00E2n\u0103'
      ]
    > &
      Attribute.Required;
    publishedAt: Attribute.DateTime;
    summaries: Attribute.Component<'summaries.summaries', true>;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::international-media.international-media',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLetterLetter extends Schema.CollectionType {
  collectionName: 'letters';
  info: {
    description: '';
    displayName: 'Letter';
    pluralName: 'letters';
    singularName: 'letter';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    authors: Attribute.Relation<
      'api::letter.letter',
      'manyToMany',
      'api::person.person'
    >;
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::letter.letter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Date & Attribute.Required;
    publishedAt: Attribute.DateTime;
    stories: Attribute.Relation<
      'api::letter.letter',
      'manyToMany',
      'api::story.story'
    >;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::letter.letter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLettersPageLettersPage extends Schema.SingleType {
  collectionName: 'letters_pages';
  info: {
    description: '';
    displayName: 'LettersPage';
    pluralName: 'letters-pages';
    singularName: 'letters-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::letters-page.letters-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::letters-page.letters-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsletterPageNewsletterPage extends Schema.SingleType {
  collectionName: 'newsletter_pages';
  info: {
    description: '';
    displayName: 'NewsletterPage';
    pluralName: 'newsletter-pages';
    singularName: 'newsletter-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.RichText & Attribute.Required;
    body2: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::newsletter-page.newsletter-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::newsletter-page.newsletter-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganisationOrganisation extends Schema.CollectionType {
  collectionName: 'organisations';
  info: {
    description: '';
    displayName: 'Organisation';
    pluralName: 'organisations';
    singularName: 'organisation';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    city: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    events: Attribute.Relation<
      'api::organisation.organisation',
      'manyToMany',
      'api::event.event'
    >;
    name: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPersonPerson extends Schema.CollectionType {
  collectionName: 'people';
  info: {
    description: '';
    displayName: 'Person';
    pluralName: 'people';
    singularName: 'person';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    affiliation: Attribute.String;
    bioNote: Attribute.Text;
    booksAuthored: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::book.book'
    >;
    booksEdited: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::book.book'
    >;
    booksTranslated: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::book.book'
    >;
    city: Attribute.String;
    contributor: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    displayName: Attribute.String;
    events: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::event.event'
    >;
    forename: Attribute.String & Attribute.Required;
    initials: Attribute.String;
    lettersAuthored: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::letter.letter'
    >;
    position: Attribute.String;
    pronoun: Attribute.Enumeration<['hi', 'hu', 'hi/hu', 'huma']> &
      Attribute.Required;
    publishedAt: Attribute.DateTime;
    storiesAuthored: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::story.story'
    >;
    storiesIllustrated: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::story.story'
    >;
    storiesPhotographed: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::story.story'
    >;
    storiesRead: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::story.story'
    >;
    storiesTranslated: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::story.story'
    >;
    surname: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPodcastPagePodcastPage extends Schema.SingleType {
  collectionName: 'podcast_pages';
  info: {
    description: '';
    displayName: 'PodcastPage';
    pluralName: 'podcast-pages';
    singularName: 'podcast-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::podcast-page.podcast-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::podcast-page.podcast-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Schema.SingleType {
  collectionName: 'privacy_policies';
  info: {
    description: '';
    displayName: 'PrivacyPolicy';
    pluralName: 'privacy-policies';
    singularName: 'privacy-policy';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProcessProcess extends Schema.SingleType {
  collectionName: 'processes';
  info: {
    description: '';
    displayName: 'Process';
    pluralName: 'processes';
    singularName: 'process';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::process.process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::process.process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPublisherPublisher extends Schema.CollectionType {
  collectionName: 'publishers';
  info: {
    description: '';
    displayName: 'Publisher';
    pluralName: 'publishers';
    singularName: 'publisher';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    books: Attribute.Relation<
      'api::publisher.publisher',
      'manyToMany',
      'api::book.book'
    >;
    city: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::publisher.publisher',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::publisher.publisher',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSequenceSequence extends Schema.CollectionType {
  collectionName: 'sequences';
  info: {
    description: '';
    displayName: 'Sequence';
    pluralName: 'sequences';
    singularName: 'sequence';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    bookPromos: Attribute.Component<'book-promo.book-promotion', true>;
    collections: Attribute.Relation<
      'api::sequence.sequence',
      'manyToMany',
      'api::collection.collection'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sequence.sequence',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    moreToCome: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    promoImage: Attribute.Media<'images'> & Attribute.Required;
    promoImageMobile: Attribute.Media<'images'>;
    publishedAt: Attribute.DateTime;
    stories: Attribute.Relation<
      'api::sequence.sequence',
      'oneToMany',
      'api::story.story'
    >;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::sequence.sequence',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStoryStory extends Schema.CollectionType {
  collectionName: 'stories';
  info: {
    description: '';
    displayName: 'Story';
    pluralName: 'stories';
    singularName: 'story';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    appointment: Attribute.Boolean & Attribute.DefaultTo<false>;
    audio: Attribute.Component<'promotions.audio', true>;
    authors: Attribute.Relation<
      'api::story.story',
      'manyToMany',
      'api::person.person'
    >;
    authorsType: Attribute.Enumeration<
      [
        'solo: A',
        'kollaborazzjoni: A, B, C u D',
        'kollettiva: X [A, B, C, D]',
        'assistita: A ma B, C u D'
      ]
    > &
      Attribute.DefaultTo<'solo: A'>;
    body: Attribute.Text & Attribute.Required;
    bookPromos: Attribute.Component<'book-promo.book-promotion', true>;
    booksMentioned: Attribute.Relation<
      'api::story.story',
      'manyToMany',
      'api::book.book'
    >;
    coda: Attribute.Text;
    collections: Attribute.Relation<
      'api::story.story',
      'manyToMany',
      'api::collection.collection'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::story.story',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    dateTimePublication: Attribute.DateTime & Attribute.Required;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 350;
      }>;
    diaryDate: Attribute.Date &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    dontUseDropCaps: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.DefaultTo<false>;
    endnote: Attribute.Text;
    endPromos: Attribute.Component<'promotions.story-promo', true> &
      Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    epigraphs: Attribute.Component<'quotes.epigraphs', true>;
    illustrators: Attribute.Relation<
      'api::story.story',
      'manyToMany',
      'api::person.person'
    >;
    imageBorderColour: Attribute.String &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 7;
      }>;
    images: Attribute.Media<'images', true>;
    imagesPositionText: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    imagesType: Attribute.Enumeration<
      [
        'Wisg\u0127a tat-test',
        'Wisg\u0127a tat-test 16:9',
        'Wisg\u0127a tal-pa\u0121na 16:9'
      ]
    > &
      Attribute.DefaultTo<'Wisg\u0127a tat-test 16:9'>;
    introduction: Attribute.Text;
    isBook: Attribute.Component<'book-info.book'>;
    language: Attribute.Enumeration<
      [
        '\u0627\u0644\u0639\u0631\u0628\u064A\u0629',
        'Catal\u00E0',
        'Deutsch',
        'English',
        'Espa\u00F1ol',
        'Euskara',
        'Fran\u00E7ais',
        'Hrvatski',
        'Italiano',
        'Malti'
      ]
    > &
      Attribute.DefaultTo<'Malti'>;
    letters: Attribute.Relation<
      'api::story.story',
      'manyToMany',
      'api::letter.letter'
    >;
    moreToCome: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.DefaultTo<false>;
    originalLanguage: Attribute.Enumeration<
      [
        '\u0627\u0644\u0639\u0631\u0628\u064A\u0629',
        'Catal\u00E0',
        'Deutsch',
        'English',
        'Espa\u00F1ol',
        'Euskara',
        'Fran\u00E7ais',
        'Hrvatski',
        'Italiano',
        'Malti'
      ]
    > &
      Attribute.DefaultTo<'Malti'>;
    pageUrl: Attribute.String &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
        minLength: 3;
      }>;
    photographers: Attribute.Relation<
      'api::story.story',
      'manyToMany',
      'api::person.person'
    >;
    podcastDate: Attribute.Date;
    podcastLengthMinutes: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    podcastNote: Attribute.Text;
    podcastUrl: Attribute.String &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
        minLength: 11;
      }>;
    postscript: Attribute.Text;
    prominentMentions: Attribute.Integer & Attribute.DefaultTo<0>;
    promoImage: Attribute.Media<'images'> & Attribute.Required;
    promoImageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publicationHistory: Attribute.Text & Attribute.Required;
    publishedAt: Attribute.DateTime;
    readers: Attribute.Relation<
      'api::story.story',
      'manyToMany',
      'api::person.person'
    >;
    sequence: Attribute.Relation<
      'api::story.story',
      'manyToOne',
      'api::sequence.sequence'
    >;
    sequenceEpisodeNumber: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    showImagePromo: Attribute.Boolean & Attribute.DefaultTo<true>;
    snippets: Attribute.Component<'quotes.snippet', true> &
      Attribute.SetMinMax<
        {
          max: 99;
          min: 0;
        },
        number
      >;
    title: Attribute.String & Attribute.Required;
    translators: Attribute.Relation<
      'api::story.story',
      'manyToMany',
      'api::person.person'
    >;
    triggerWarning: Attribute.Text;
    type: Attribute.Enumeration<
      [
        'Avveniment',
        'Djarju',
        'Esej',
        'Ktieb stampat',
        'Memoir',
        'Poddata',
        'Poe\u017Cija',
        'Re\u010Bensjoni',
        'Storja',
        'Terminu',
        'Xi\u0127a\u0121a o\u0127ra'
      ]
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::story.story',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    useDefaultPodcastMessage: Attribute.Boolean & Attribute.DefaultTo<true>;
    useProseStyling: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.DefaultTo<false>;
    useSeparators: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.DefaultTo<false>;
    useSquareOnMobile: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ApiStyleGuideEntryStyleGuideEntry
  extends Schema.CollectionType {
  collectionName: 'style_guide_entries';
  info: {
    description: '';
    displayName: 'StyleGuideEntry';
    pluralName: 'style-guide-entries';
    singularName: 'style-guide-entry';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::style-guide-entry.style-guide-entry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    definition: Attribute.Text & Attribute.Required;
    notWords: Attribute.String;
    Public: Attribute.Boolean & Attribute.DefaultTo<false>;
    publishedAt: Attribute.DateTime;
    term: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::style-guide-entry.style-guide-entry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStyleGuideStyleGuide extends Schema.SingleType {
  collectionName: 'style_guides';
  info: {
    description: '';
    displayName: 'StyleGuide';
    pluralName: 'style-guides';
    singularName: 'style-guide';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::style-guide.style-guide',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::style-guide.style-guide',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVenueVenue extends Schema.CollectionType {
  collectionName: 'venues';
  info: {
    description: '';
    displayName: 'Venue';
    pluralName: 'venues';
    singularName: 'venue';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    city: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::venue.venue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    events: Attribute.Relation<
      'api::venue.venue',
      'manyToMany',
      'api::event.event'
    >;
    name: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::venue.venue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about.about': ApiAboutAbout;
      'api::accessibility.accessibility': ApiAccessibilityAccessibility;
      'api::appointment-index.appointment-index': ApiAppointmentIndexAppointmentIndex;
      'api::appointment.appointment': ApiAppointmentAppointment;
      'api::book.book': ApiBookBook;
      'api::bookmark.bookmark': ApiBookmarkBookmark;
      'api::collection.collection': ApiCollectionCollection;
      'api::colophon.colophon': ApiColophonColophon;
      'api::cookie-policy.cookie-policy': ApiCookiePolicyCookiePolicy;
      'api::copyright.copyright': ApiCopyrightCopyright;
      'api::event.event': ApiEventEvent;
      'api::generic.generic': ApiGenericGeneric;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::international-media.international-media': ApiInternationalMediaInternationalMedia;
      'api::letter.letter': ApiLetterLetter;
      'api::letters-page.letters-page': ApiLettersPageLettersPage;
      'api::newsletter-page.newsletter-page': ApiNewsletterPageNewsletterPage;
      'api::organisation.organisation': ApiOrganisationOrganisation;
      'api::person.person': ApiPersonPerson;
      'api::podcast-page.podcast-page': ApiPodcastPagePodcastPage;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::process.process': ApiProcessProcess;
      'api::publisher.publisher': ApiPublisherPublisher;
      'api::sequence.sequence': ApiSequenceSequence;
      'api::story.story': ApiStoryStory;
      'api::style-guide-entry.style-guide-entry': ApiStyleGuideEntryStyleGuideEntry;
      'api::style-guide.style-guide': ApiStyleGuideStyleGuide;
      'api::venue.venue': ApiVenueVenue;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
