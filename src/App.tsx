import { stat } from 'fs';
import React from 'react';
import './App.css';
import {Store} from './GlobalState/store';

interface IEpisode {
  airdate: string
airstamp: string
airtime: string
id: number
image:{
  medium: string
  original: string
}

name: string
number: number
runtime: number
season: number
summary: string
type: string
url: string
}

function App() {

const {state, dispatch} = React.useContext(Store);

React.useEffect(()=>{
  state.episodes.length === 0 && fetchData()
})


const fetchData = async () => {
  const URL = 'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const data = await fetch(URL);
  const resData = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: resData._embedded.episodes
  })
}

return (
    <div className="App">
      <h1>Rick N Morty : </h1>
      <p>PickYour Favourite Episode !</p>
      <section>
        {
          state.episodes.map(({id, image, name, season, number}: IEpisode) => {
            return (
              <section key={id}>
                <img src={image.medium} alt="." />
            <h4>{name}</h4>
            <section>
              Season: {season} - Episode {number}
            </section>
              </section>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
