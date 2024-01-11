import { useDispatch, useSelector } from "react-redux";
import { addValue, decrement, increment, reload } from "./store/counterSlice";
import { useState } from "react";


function App() {
  const count = useSelector(state => state.counterValue.count);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const inc = () => {
    dispatch(increment());
  }

  const dec = () => {
    dispatch(decrement());
  }

  const onAddValueHandler = () => {
    const number = Number(value)
    dispatch(addValue(isNaN(number) ? 0 : number))
  }

  return (
    <div className="container">
      <div>
        <h3>{count}</h3>
        <button onClick={inc}>INC +</button>
        <button onClick={dec}>DEC -</button>
      </div>

      <div>
        <button onClick={() => dispatch(reload())}>RESET</button>
      </div>

      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={onAddValueHandler}>Add Value</button>

    </div>
  );
}

export default App;
