import authors from "../data";
const initialState = {
  id: 1,
  authors: authors
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add author":
      return {
        ...state,
        authors: state.authors.concat([action.payload]),
        id: state.id + 1
      };
    case "Delete author":
      return {
        ...state,
        authors: state.authors.filter(auth => auth !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
