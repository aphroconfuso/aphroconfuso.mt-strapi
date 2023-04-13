'use strict';

/**
 * appointment-index service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appointment-index.appointment-index');
