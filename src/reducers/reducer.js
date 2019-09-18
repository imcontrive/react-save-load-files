const initialState = {
  history: {
    project__1: { currentIndex: 0, data: [] },
    project__2: { currentIndex: 0, data: [] },
    project__3: { currentIndex: 0, data: [] },
    project__4: { currentIndex: 0, data: [] }
  },
  activeProject: "project__1",
  currentData: {}
};

export default function undoRedoHandler(state = initialState, action) {
  switch (action.type) {
    case "UNDO":
      return {
        ...state,
        history: {
          ...state.history,
          [state.activeProject]: {
            ...state.history[state.activeProject],
            currentIndex: state.history[state.activeProject].currentIndex - 1
          }
        }
      };
    case "ADD":
      const data = [...state.history[state.activeProject].data, action.payload];
      var modifiedData = data.length > 3 ? data.slice(data.length - 3) : data;
      return {
        ...state,
        history: {
          ...state.history,
          [state.activeProject]: {
            data: [...modifiedData],
            currentIndex: modifiedData.length - 1
          }
        },
        currentData: state.history[state.activeProject]
      };
    case "CHANGE_PROJECT_TAB":
      return {
        ...state,
        activeProject: action.payload,
        currentData: state.history[action.payload]
      };

    case "REDO":
      return {
        ...state,
        history: {
          ...state.history,
          [state.activeProject]: {
            ...state.history[state.activeProject],
            currentIndex: state.history[state.activeProject].currentIndex + 1
          }
        }
      };
    default:
      return state;
  }
}
