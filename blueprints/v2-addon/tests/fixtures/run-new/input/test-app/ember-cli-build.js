'use strict';

const sideWatch = require('@embroider/broccoli-side-watch');
const { maybeEmbroider } = require('@embroider/test-setup');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: [],
    },

    'ember-cli-babel': {
      enableTypeScriptTransform: true,
    },

    trees: {
      app: sideWatch('app', {
        watching: [],
      }),
    },

    // Add options here
  });

  return maybeEmbroider(app);
};
