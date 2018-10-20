import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import makeBem from '../../utils/makeBem';
import './Button.scss';
import { compose, withState, lifecycle } from 'recompose';
import { Motion, spring } from 'react-motion';

const bem = makeBem('Button');

const Button = ({ selected, setSelected, target, children }) => {
  const modifier = selected ? 'selected-true' : 'selected-false';
  const scale = target === 'big' ? 1.5 : target === 'small' ? 0.75 : 1.0;
  return (
    <Motion
      // defaultStyle={{ progress: 0.0 }}
      style={{
        scale: spring(scale, {
          stiffness: 180,
          damping: 12,
          precision: 0.05,
        }),
      }}
    >
      {({ scale }) => {
        return (
          <button
            className={classnames(bem())}
            onClick={() => setSelected(!selected)}
          >
            <span
              className={bem('icon', modifier)}
              style={{
                transform: `scale(${scale})`,
              }}
            >
              ♥
            </span>{' '}
            {children}
          </button>
        );
      }}
    </Motion>
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
  withState('selected', 'setSelected', false),
  withState('target', 'setTarget', 'normal'),
  lifecycle({
    componentDidUpdate({ selected: oldSelected }) {
      const { selected, setTarget } = this.props;
      if (selected === oldSelected) {
        return;
      }
      if (this.timer) {
        clearTimeout(this.timer);
      }
      setTarget(selected ? 'big' : 'small');
      this.timer = setTimeout(() => setTarget('normal'), 200);
    },
  })
)(Button);
