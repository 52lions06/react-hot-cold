import React from 'react'

import GuessForm from './guess-form'

import {shallow} from 'enzyme'

describe('Guess form component', () => {
  it('smoke test for guess form component', () => {
    shallow (<GuessForm />) 
  })
})