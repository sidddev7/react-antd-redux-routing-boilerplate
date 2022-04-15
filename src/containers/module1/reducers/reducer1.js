const initialValue = {
  // state variables
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialValue, action) => {
  switch (action.type) {
    case "VALUE1":
      return { ...state };

    default:
      return { ...state };
  }
};
