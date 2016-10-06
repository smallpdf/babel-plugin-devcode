var babel  = require('babel-core');
var plugin = require('../');
var assert = require('assert');

function compile(code) {
  return babel.transform(code, {
    plugins: [plugin]
  }).code;
}

describe('dev condition', function() {
  var condition = 'if (DEVCODE) {}';
  it('should get removed', function() {
    assert(compile(condition) === '');
  });
});

describe('other condition', function() {
  var condition = 'if (EXAMPLE) {}';
  it('should not get removed', function() {
    assert(compile(condition) === condition);
  });
});

