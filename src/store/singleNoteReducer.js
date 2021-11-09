const defaultState = { id: '', header: '', text: '', date: '' };

export const singleNoteReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'CREATE_NEW_NOTE':
         return { ...state, content: action.payload };
      case 'RESET_NOTE':
         return { ...defaultState };
      default:
         return state;
   }
};
