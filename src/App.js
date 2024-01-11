import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/counterSlice";


function App() {
  const count = useSelector(state => state.counterValue.count);
  const dispatch = useDispatch();
  console.log(count);

  const inc = () => {
    dispatch(increment());
  }

  const dec = () => {
    dispatch(decrement());
  }

  return (
    <div className="container">
      <div>
        <h3>{count}</h3>
        <button onClick={inc}>INC +</button>
        <button onClick={dec}>DEC -</button>
      </div>
    </div>
  );
}

export default App;
