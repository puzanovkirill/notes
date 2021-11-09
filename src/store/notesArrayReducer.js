const defaultState = { notes: [] };

export const notesArrayReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'ADD_NOTE':
         return { ...state, notes: [...state.notes, action.payload] };
      default:
         return state;
   }
};
