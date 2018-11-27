
 // src/components/Hello.test.tsx

import * as React from 'react';
import * as enzyme from 'enzyme';
import { Hello2 } from './hello2'

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello2 name='Daniel' />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello2 name='Daniel' level={1}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello2 name='Daniel' level={5} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello2 name='Daniel' level={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello2 name='Daniel' level={-1} />);
  }).toThrow();
});