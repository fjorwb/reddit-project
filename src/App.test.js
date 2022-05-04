import React from 'react'
import '@testing-library/jest-dom';
import {render, screen, fireEvent} from '@testing-library/react'
import {Provider} from 'react-redux'
import {store} from './store'

import App from './App'

describe('App', () => {
    test('renders Hot react link', () => {

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
})

