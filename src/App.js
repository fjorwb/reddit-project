import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import navbarItems from './assets/others/navbarItems'

import './App.css';

import {Home, Feature} from './pages/index'


function App() {

	const {idp} = useSelector((store) => store.page)
    const pageData = navbarItems.filter((item) => item.id === idp)
	const {url} = pageData[0]

	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />}/>
				<Route path={url} element={<Feature />}/>
			</Routes>
		</Router>
	);
}

export default App;
