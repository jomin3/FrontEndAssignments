export const addEntry = (entry) => {
  return {
    type: "ADD_ENTRY",
    entry: entry,
  };
};

export const deleteEntry = (id) => {
  return {
    type: "DELETE_ENTRY",
    id: id,
  };
};

export const edit = (id) => {
  return {
    type: "EDIT",
    id: id,
  };
};
export const editval = (id, itemval, calorieval) => {
  return {
    type: "EDITVAL",
    id: id,
    itemval: itemval,
    calorieval: calorieval,
  };
};
