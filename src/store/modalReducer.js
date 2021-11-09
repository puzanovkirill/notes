const defaultState = false;

export const modalReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'CHANGE_OPENED':
         return action.payload;
      default:
         return state;
   }
};
