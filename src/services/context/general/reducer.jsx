export const methods = {
  UPDATE_PAGE: `UPDATE_PAGE`,
};

export const Reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_PAGE:
      return {
        ...state,
        word: payload,
      };
  }
};
