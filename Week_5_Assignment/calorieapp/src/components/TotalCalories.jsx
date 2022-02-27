import { useDispatch, useSelector } from "react-redux";

const TotalCalories = () => {
  const entries = useSelector((state) => state.calorie);
  const total = entries.reduce((prev, current) => {
    return (prev += 1 * current.calories);
  }, 0);
  return <div className="display-5 text-center">Total :{total}</div>;
};
export default TotalCalories;
