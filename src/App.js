import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import {Home, Best, Hot, New, Top, Rising} from './pages/index'

import reducer from './reducer';
import Fetch from './components/fech';

function App() {
	return (
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
	);
}

export default App;
