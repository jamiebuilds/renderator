import React from 'react';
import { render } from 'react-dom';
import "babel-polyfill";
import renderator from '..';
import Time from './time';

const Example = renderator(function*() {
  let { time } = yield <Time/>;
  return (
    <p>Current time: {time.toLocaleString()}</p>
  );
});

render(<Example/>, document.getElementById("root"));
