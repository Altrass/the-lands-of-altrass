import * as React from 'react'
import { shallow } from 'enzyme'
import NoMatch from './NoMatch'

describe('NoMatch.tsx', () => {
  test('renders correct contents', () => {
    const result = shallow(<NoMatch/>).contains(<h1>Error 404</h1>)
    expect(result).toBeTruthy()
  })
})
