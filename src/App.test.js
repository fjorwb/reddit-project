import React from 'react'
import {Provider} from 'react-redux'
// import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store'
// import {render} from '@testing-library/react'
import renderer from 'react-test-renderer'
import ErrorHandler from './components/Error'
import App from './App'

// import NavBar from './components/NavBar';

const mockStore = configureStore([])

describe('App', () => {
    let store
    let component

    beforeEach(() => {
        store = mockStore({
            myState : 'sample text'
        })
    })

    // eslint-disable-next-line no-undef
    component = renderer.create(
        <Provider store={store}>
            <ErrorHandler>
                <App />
            </ErrorHandler>
        </Provider>
    )

    console.log(component);


    // test('should render with given store from Redux store', () => {
    //     expect(component.toJSON()).toMatchSnapshot();
    // })

    // test('should dispatch an action on button click', () => {

    // })

})