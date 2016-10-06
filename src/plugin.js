'use strict';

module.exports = function() {
  return {
    name:    'babel-plugin-devcode',
    visitor: {
      Conditional(path) {
        if (path.node.test.type == 'Identifier' && path.node.test.name === 'DEVCODE') {
          path.remove();
        }
      },
    },
  };
};
