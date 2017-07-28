import React from 'react'

import Game from './game'

import {shallow} from 'enzyme'

describe('Game component', () => {
  it('smoke test for new game', () => {
    shallow (<Game />) 
  })
})



