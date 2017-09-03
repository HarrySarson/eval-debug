let debug = require('debug');

debug.formatters.e = fn => fn();

module.exports = debug;