const defaultState = { searchNotes: [] };

export const searchReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'FIND_NOTES':
         return { ...state, searchNotes: action.payload };
      default:
         return state;
   }
};
