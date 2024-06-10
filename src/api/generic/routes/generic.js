'use strict';

/**
 * generic router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::generic.generic');
