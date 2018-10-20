import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

describe('Gallery', () => {
  it('renders correctly', () => {
    expect(false).toBeTruthy(); // Implement this test and remove this expect!
    const props = { exampleProp: true };
    const component = shallow(<Gallery {...props} />);
    expect(component).toMatchSnapshot();
  });
});
