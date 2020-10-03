const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE': {
      const exist = state.myList.find(item => item.id === action.payload);
      if (exist) return { ...state };
      const videotrends = state.trends.find(item => item.id === action.payload);
      const videoriginals = state.originals.find(item => item.id === action.payload);
      if (videotrends) {
        console.log('agregando video de trends', videotrends);
        return {
          ...state,
          myList: [...state.myList, videotrends],

        };
      }
      console.log('agregando video de originals', action.payload);
      return {
        ...state,
        myList: [...state.myList, videoriginals],

      };

    };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
