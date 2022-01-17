import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Aside} from './Components/aside';
import {Main} from './Components/main';
import { useDispatch } from 'react-redux';
import {FetchNews} from './redux/ducks/news/actionCreators';
import { FetchPerson } from './redux/ducks/person/actionCreators';
import { FetchUser } from './redux/ducks/user/actionCreators';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(FetchNews());
        dispatch(FetchPerson());
        dispatch(FetchUser('1'));
    },[]);
  return (
      <div className="App">
          <Header />
          <div className={'App-content'}>
              <Aside />
              <Main />
          </div>
      </div>
  );
}

export default App;
