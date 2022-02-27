import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEntry } from "../actions/action";
import { edit } from "../actions/action";
import { editval } from "../actions/action";

const Entry = (props) => {
  const [item, setItem] = useState(props.entry.item);
  const [calories, setCalories] = useState(props.entry.calories);
  const { entry } = props;
  const dispatch = useDispatch();
  const editHandler = () => {
    if (props.entry.editstatus) dispatch(edit(props.entry.id));
    else {
      dispatch(editval(props.entry.id, item, calories));
    }
  };

  console.log(props.entry.editstatus);
  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between mt-2">
      <input
        type="text"
        value={item}
        readOnly={props.entry.editstatus}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="text"
        value={calories}
        readOnly={props.entry.editstatus}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button onClick={editHandler}>Edit</button>
      <button
        onClick={() => {
          dispatch(deleteEntry(props.entry.id));
        }}
        className="btn-close"
      ></button>
    </div>
  );
};
export default Entry;
// const handleSubmit = (e) => {
//   e.preventDefault();

//   setItem("");
//   setCalories(0);
// };
