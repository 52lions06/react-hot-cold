import React from 'react'

import TopNav from './top-nav'

import {shallow} from 'enzyme'

describe('Top Nav component', () => {
  it('smoke test for top nav component', () => {
    shallow (<TopNav />) 
  })
})