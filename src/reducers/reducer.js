const initialState = {
  past: [],
  present: null,
  future: [],
  history: []
}

export default function undoRedoHandler(state = initialState, action) {
  console.log(action.payload)
  const { past, present, future } = state;

  switch (action.type) {
    case 'UNDO':
      const previous = past[past.length - 1]
      const newPast = past.slice(0, past.length - 1)
      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      }
    case 'ADD':
    return {
      ...state,
      history: [...state.history, action.payload]
    }
    case 'REDO':
      const next = future[0]
      const newFuture = future.slice(1)
      return {
        past: [...past, present],
        present: next,
        future: newFuture
      }
    default:
      return state
  }
}

export  function usedColours(state = [], action) {
  // console.log(action,"dsdsdsdds")
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