import { useDispatch, useSelector } from "react-redux";
import { addValue, decrement, increment, reload } from "./store/counterSlice";
import { useState } from "react";
import { addNote, selectNotes } from "./store/notesSlice";


function App() {
  const count = useSelector(state => state.counterValue.count);
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [textValue, setTextValue] = useState(0);

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

  const onAddTextHandler = () => {
    // const number = Number(value)
    dispatch(addNote(textValue));
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


      <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
      <button onClick={onAddTextHandler}>Add Value to Array</button>

      <ul>
        {notes.map((note, idx) => {
          return <li key={idx}>{note}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
