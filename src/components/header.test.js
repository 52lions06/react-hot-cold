import React from 'react'

import Header from './header'

import {shallow} from 'enzyme'

describe('Header component', () => {
  it('smoke test for header component', () => {
    shallow (<Header />) 
  })
})