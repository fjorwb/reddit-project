import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './App.css';

import {Home, Best, Hot, New, Top, Rising} from './pages/index'

import reducer from './reducer';
import Fetch from './components/fech';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />}/>
					<Route path='/best' element={<Best />}/>
					<Route path='/hot' element={<Hot />}/>
					<Route path='/new' element={<New />}/>
					<Route path='/top' element={<Top />}/>
					<Route path='/rising' element={<Rising />}/>
					<Route path='/fetch' element={<Fetch />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
