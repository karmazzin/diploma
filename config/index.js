
'use strict';

const path = require('path');
const convict = require('convict');

// Define the schema.
const config = convict({
    env: {
        doc: 'The applicaton environment.',
        format: ['production', 'development', 'test'],
        env: 'NODE_ENV',
        default: 'development'
    }
});

// Load environment dependent configuration.
const env = config.get('env');
config.loadFile(path.resolve(__dirname, `./${env}.json`));

// Perform validation.
config.validate();

module.exports = config;