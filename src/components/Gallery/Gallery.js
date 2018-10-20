import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import makeBem from '../../utils/makeBem';
import './Gallery.scss';
import { ButtonStateful } from '../Button/Button';

const bem = makeBem('Gallery');

const Gallery = ({ ...rest }) => {
  return (
    <div className={classnames(bem())} {...rest}>
      <h2>Buttons</h2>
      <div>
        <ButtonStateful>A button</ButtonStateful>
      </div>
    </div>
  );
};

Gallery.propTypes = {};

Gallery.defaultProps = {
  exampleProp: false,
};

export default Gallery;
