import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    expect(false).toBeTruthy(); // Implement this test and remove this expect!
    const props = { exampleProp: true };
    const component = shallow(<Button {...props} />);
    expect(component).toMatchSnapshot();
  });
});
