import React from 'react';

// useSelector lets you read data from the Redux store
import { useSelector, useDispatch } from 'react-redux';

// These are our actions from the slice
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

function App() {
  // useSelector lets us read the 'value' from the counter state
  const count = useSelector((state) => state.counter.value);

  // useDispatch lets us send actions to update the state
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🧠 Redux Toolkit Counter</h1>

      {/* Show current counter value */}
      <h2>Count: {count}</h2>

      {/* Dispatch actions when buttons are clicked */}
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>➕ Add 5</button>
    </div>
  );
}

export default App;

// Explanation:
// - `useSelector()` is like reading from the global notebook (Redux store).
// - `useDispatch()` is like sending a message to the notebook to update data.
// - We dispatch actions (increment, decrement) and Redux Toolkit handles the update.
