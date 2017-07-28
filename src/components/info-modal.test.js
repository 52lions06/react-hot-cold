import React from 'react'

import InfoModal from './info-modal'

import {shallow} from 'enzyme'

describe('Info modal  component', () => {
  it('smoke test for info modal component', () => {
    shallow (<InfoModal />) 
  })
})