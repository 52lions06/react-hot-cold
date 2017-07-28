import React from 'react'

import GuessSection from './guess-section'

import {shallow} from 'enzyme'

describe('Guess section component', () => {
  it('smoke test for guess section component', () => {
    shallow (<GuessSection />) 
  })
})