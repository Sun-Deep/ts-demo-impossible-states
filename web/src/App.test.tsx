import React from 'react'
import { render } from '@testing-library/react'
import { expect } from 'chai'
import { App } from './App'

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />)
    const btnEl = getByText(/Load data/i)
    expect(document.body.contains(btnEl))
  })
})
