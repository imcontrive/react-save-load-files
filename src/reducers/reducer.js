const initialState = {
  history: [],
  currentIndex: -1
};

export default function undoRedoHandler(state = initialState, action) {
  switch (action.type) {
    case "UNDO":
      return {
        ...state,
        currentIndex:
          state.currentIndex === -1
            ? (state.currentIndex = -1)
            : state.currentIndex - 1
      };
    case "ADD":
      const data = [...state.history, action.payload];
      var modifiedData = data.length > 3 ? data.slice(data.length - 3) : data;
      return {
        ...state,
        history: [...modifiedData],
        currentIndex: modifiedData.length - 1
      };
    case "REDO":
      return {
        ...state,
        currentIndex:
          state.currentIndex < 2 ? state.currentIndex + 1 : state.currentIndex
      };
    default:
      return state;
  }
}
