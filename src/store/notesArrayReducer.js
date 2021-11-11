const defaultState = { notes: [] };

export const notesArrayReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'ADD_NOTE':
         return { ...state, notes: [...state.notes, action.payload] };
      case 'REMOVE_NOTE':
         return {
            ...state,
            notes: state.notes.filter((note) => note.id !== action.payload),
         };
      case 'CHANGE_NOTE':
         return {
            ...state,
            notes: [
               ...state.notes.map((item) => {
                  if (item.id === action.payload.content.id) {
                     return {
                        ...item,
                        header: action.payload.content.header,
                        text: action.payload.content.text,
                     };
                  } else return item;
               }),
            ],
         };
      case 'SET_NOTES':
         return { ...state, notes: action.payload };
      default:
         return state;
   }
};
