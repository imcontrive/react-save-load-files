const initialState = {
  history: [],
  currentIndex: -1
};

export default function undoRedoHandler(state = initialState, action) {
  switch (action.type) {
    case "UNDO":
      return {
        ...state,
        currentIndex: state.currentIndex - 1
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
        currentIndex: state.currentIndex + 1
      };
    default:
      return state;
  }
}

export function usedColours(state = [], action) {
  switch (action.type) {
    case "USED_COLORS":
      return {
        ...state,
        colorsInfo: action.payload
      };
    default:
      return state;
  }
}
