import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import makeBem from '../../utils/makeBem';
import './Button.scss';
import { compose, withState } from 'recompose';

const bem = makeBem('Button');

const Button = ({ selected, setSelected, children }) => {
  const modifier = selected ? 'selected-true' : 'selected-false';
  return (
    <button
      className={classnames(bem())}
      onClick={() => setSelected(!selected)}
    >
      <span className={bem('icon', modifier)}>♥</span> {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  exampleProp: false,
};

export default Button;

export const ButtonStateful = compose(
  withState('selected', 'setSelected', false)
)(Button);
