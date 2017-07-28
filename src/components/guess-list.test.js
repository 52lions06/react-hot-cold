import React from 'react'

import GuessList from './guess-list'

import {shallow} from 'enzyme'

describe('Guess list component', () => {
  it('smoke test for guess list component', () => {
    shallow (<GuessList guesses={[]}/>) 
  })
})

//testing room 

//shallow render needs to look "exactly" the same as the component 
//to render