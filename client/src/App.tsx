import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieAction } from './Redux/action';


function App() {
  // const state = useSelector<any>(state => state.MovieReducer.movieState)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMovieAction());
  // }, [])
  console.log(111);
  return (
    <div className="App">
      hello world！
      {/* {state ? 1 : 0} */}
    </div>
  );
}

export default App;
