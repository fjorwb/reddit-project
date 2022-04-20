import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './App.css';

import {Navbar, SearchBar, RedditCards, SubReddits} from './components/index'

import reducer from './reducer';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


function App() {
	return (
		<Provider store={store}>
      <section className='NavBar'>
        <SearchBar/>
			  <Navbar />
      </section>
      <section className='reddit'>
        <RedditCards />
        <SubReddits />
      </section>
		</Provider>
	);
}

export default App;
