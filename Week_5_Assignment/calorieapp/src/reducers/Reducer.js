import { combineReducers } from "redux";

const initState = [];
console.log(initState);
export const calorieReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return [
        ...state,
        {
          ...action.entry,
          id: Math.floor(Math.random() * 99),
          editstatus: true,
        },
      ];
    case "DELETE_ENTRY":
      const arr1 = state.filter((item) => {
        return item.id !== action.id;
      });
      return arr1;
    case "EDIT":
      state.forEach((item) => {
        if (item.id === action.id) {
          item.editstatus = false;
        }
      });
      const arr2 = [...state];
      return arr2;
    case "EDITVAL":
      state.forEach((item) => {
        if (item.id === action.id) {
          item.editstatus = true;
          item.item = action.itemval;
          item.calories = action.calorieval;
        }
      });
      const arr3 = [...state];
      return arr3;

    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  calorie: calorieReducer,
});
