const defaultState = {
  movieState: false,
  movieList: {}
};

export default function  MovieReducer(state: object = defaultState, action: any) {
  switch (action.type) {
    case "getMovie":
      return {
        ...state,
        movieState: action.payload
      }

    default:
      return state;
  }
}