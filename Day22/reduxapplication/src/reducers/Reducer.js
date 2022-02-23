import { combineReducers } from "redux";

const initState = [];
console.log(initState);
export const calorieReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return [
        ...state,
        { ...action.entry, id: Math.floor(Math.random() * 99) }
      ];
    case "DELETE_ENTRY":
      const arr = state.filter((item) => {
        return item.id !== action.id;
      });
      return arr;
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  calorie: calorieReducer
});
