import React from 'react';
import { shallow } from 'enzyme';
import ComponentTemplate from './ComponentTemplate';

describe('ComponentTemplate', () => {
  it('renders correctly', () => {
    expect(false).toBeTruthy(); // Implement this test and remove this expect!
    const props = { exampleProp: true };
    const component = shallow(<ComponentTemplate {...props} />);
    expect(component).toMatchSnapshot();
  });
});
