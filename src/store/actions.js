const ADD_AUTHOR = "Add author";
const DELETE_AUTHOR = "Delete author";

export const addAuthor = auth => {
  return {
    type: ADD_AUTHOR,
    payload: auth
  };
};

export const deleteAuthor = auth => {
  return {
    type: DELETE_AUTHOR,
    payload: auth
  };
};
