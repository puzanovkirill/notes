const defaultState = { content: { id: '', header: '', text: '', date: '' } };

export const singleNoteReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'CREATE_NEW_NOTE':
         return { ...state, content: action.payload };
      case 'RESET_NOTE':
         return { ...defaultState };
      case 'EDIT_HEADER':
         return {
            ...state,
            content: { ...state.content, header: action.payload },
         };
      case 'EDIT_TEXT':
         return {
            ...state,
            content: { ...state.content, text: action.payload },
         };
      default:
         return state;
   }
};
