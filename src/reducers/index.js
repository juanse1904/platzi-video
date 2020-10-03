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
    case 'DELETE_FAVORITE': {
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    }
    default:
      return state;
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'SEND_REGISTRER':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE': {

      return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) ||
         state.originals.find(item => item.id === Number(action.payload)) ||
         [],
      };
      console.log('llave', state.playing);
    }
  }
};

export default reducer;
