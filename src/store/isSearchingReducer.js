const defaultState = { isSearching: false };

export const isSearchingReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'CHANGE_IS_SEARCHING':
         return { ...state, isSearching: action.payload };
      default:
         return state;
   }
};
