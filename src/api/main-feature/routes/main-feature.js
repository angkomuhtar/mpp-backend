'use strict';

/**
 * main-feature router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::main-feature.main-feature');
