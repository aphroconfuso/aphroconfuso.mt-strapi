'use strict';

/**
 * generic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::generic.generic');
