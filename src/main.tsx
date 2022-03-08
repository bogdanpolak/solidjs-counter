import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);
  const [increment, setIncrement] = createSignal(1);

  const increments = [-10, -1, 1, 10];

  return (
    <>
      <h1>Counter: {count()}</h1>
      <div>
        <button type="button" onClick={() => setCount(count() + increment())}>
          Increment by {increment()}
        </button>
      </div>
      <input
        type="number"
        id="incrementInput"
        name="incValue"
        value={increment()}
        min="-10"
        max="10"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setIncrement(e.target.value)
        }
      />
      {increments.map((incValue, idx) => (
        <>
          <span></span>
          <button
            type="button"
            style={{ marginLeft: "0.5em", width: "40px" }}
            onClick={() => setIncrement(increments[idx])}
          >
            {incValue}
          </button>
        </>
      ))}
    </>
  );
}

render(() => <Counter />, document.getElementById("app"));
