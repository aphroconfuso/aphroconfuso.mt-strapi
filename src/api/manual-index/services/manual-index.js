'use strict';

/**
 * manual-index service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::manual-index.manual-index');
