'use strict';

/**
 * manual-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::manual-page.manual-page');
