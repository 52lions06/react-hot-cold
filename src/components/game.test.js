import React from 'react'

import Game from './game'
import Header from './header'
import GuessCount from './guess-count'
import GuessSection from './guess-section'
import GuessList from './guess-list'

import {shallow} from 'enzyme'

describe('Game component', () => {
  it('smoke test for new game', () => {
    shallow (<Game />) 
  });

  it('Render the each section', () => {
    const wrapper = shallow (<Game />);
    const instance = wrapper.instance();
    shallow (<Header />);
  });

  it('Rendering GuessSection', () => {
    const wrapper = shallow (<Game />);
    const instance = wrapper.instance();
    shallow (<GuessSection />);

  });

  it('Render GuessCount', () => {
    const wrapper = shallow (<Game />);
    const instance = wrapper.instance();
    shallow (<GuessCount />);

  });

  it('Rendering GuessList', () => {
    const wrapper = shallow (<Game />);
    const instance = wrapper.instance();
    shallow (<GuessList guesses={[]}/>);
  });
})



