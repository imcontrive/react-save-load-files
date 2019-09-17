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
      return {
        ...state,
        history: [...state.history, action.payload],
        currentIndex: state.currentIndex + 1
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
