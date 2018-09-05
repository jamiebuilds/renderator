Just playing around with ideas from: https://github.com/Astrocoders/regenerator


**Before:**

```js
function Example() {
  return (
    <Time>
      {({ time }) => (
        <p>Current time: {time.toLocaleString()}</p>
      )}
    </Time>
  );
}
```

**After:**

```js
const Example = renderator(function*() {
  let { time } = yield <Time/>;
  return (
    <p>Current time: {time.toLocaleString()}</p>
  );
});
```
