'use strict';

/**
 * manual-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::manual-page.manual-page');
