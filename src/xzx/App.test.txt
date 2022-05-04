import React from 'react'
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

import {render, screen, fireEvent} from '@testing-library/react'
import {Provider} from 'react-redux'
import {store} from './store'

import App from './App'

import Feature from './pages/FeaturesPage'

const mockStore = configureStore()

describe('App', () => {
    test('renders Hot react link', () => {
    // const { getByText } = render(
    //     <Provider store={store}>
    //     <App />
    //     </Provider>
    // );

    // eslint-disable-next-line no-unused-vars
    const utils = render(
        <Provider store={store}>
            <App/>
        </Provider>
    )

    expect(screen.getByText('Hot')).toBeInTheDocument()
    });

    test('Click a button', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        fireEvent.click(screen.getByText(/best/i))

        expect(screen.getByText(/best/i)).toHaveTextContent('Best')
        expect(screen.getByText(/new/i)).toHaveTextContent(/new/i)

    })



    // test('should render with given store from Redux store', () => {
    //     render(
    //         <Provider store={store}>
    //             <App />
    //         </Provider>
    //     )

    //     expect(screen.getByText.toJSON()).toMatchSnapshot();
    // })

    // test('should dispatch an action on button click', () => {

    // })

})

// describe('My connected component', () => {
//     let storeb
//     let component

//     beforeEach(() => {
//         storeb = mockStore({
//             myState: 'sample_text'
//         })

//         component = renderer.create(
//             <Provider store={storeb}>
//                 <App />
//             </Provider>
//         )
//     })
    

//     test('render with a given state', () => {
//         expect(component.toJSON()).toMatchSnapshot()
//     })

    // test('dispatch an action on button click', () => {

    // })

// })