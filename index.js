// @flow
'use strict';
var React = require('react');
var immutagen = require('immutagen')['default'];

function renderator(generator) {
  function RenderatorComponent(props) {
    generator = immutagen(generator);

    function compose(context) {
      if (!context.next) {
        return context.value;
      } else {
        return React.cloneElement(context.value, null, function(values) {
          return compose(context.next(values));
        });
      }
    }

    return compose(generator(props));
  }

  RenderatorComponent.displayName = 'renderator(' + (generator.displayName || generator.name || 'anonymous') + ')';

  return RenderatorComponent;
}

module.exports = renderator;
