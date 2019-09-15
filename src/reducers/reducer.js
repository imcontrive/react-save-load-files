export default function usedColours(state = [], action) {
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
