import { useDispatch } from "react-redux";
import { deleteEntry } from "../actions/Actions";

const Entry = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between mt-2">
      <div className="">{props.entry.item}</div>
      <div className="">{props.entry.calories} kcal</div>
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
