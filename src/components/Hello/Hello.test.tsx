import * as React from 'react'
import { shallow } from 'enzyme'
import Hello from './Hello'

describe('Hello.tsx', () => {
  test('renders correct contents', () => {
    const result = shallow(<Hello/>).contains(<h1>Hello world!</h1>)
    expect(result).toBeTruthy()
  })
})
