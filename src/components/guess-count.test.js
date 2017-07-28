import React from 'react'

import GuessCount from './guess-count'

import {shallow} from 'enzyme'

describe('Guess count component', () => {
  it('smoke test for guess component', () => {
    shallow (<GuessCount />) 
  })
})