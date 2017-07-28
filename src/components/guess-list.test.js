import React from 'react'

import GuessList from './guess-list'

import {shallow} from 'enzyme'

describe('Guess list component', () => {
  it('smoke test for guess list component', () => {
    shallow (<GuessList />) 
  })
})