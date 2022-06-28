'use strict';

/**
 * main-feature service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-feature.main-feature');
