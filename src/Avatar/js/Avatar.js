/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/

import classNames from 'classnames';
import filterDOMProps from '../../utils/filterDOMProps';
import PropTypes from 'prop-types';
import React from 'react';

importSpectrumCSS('avatar');

export default function Avatar({src, alt, disabled, className, ...otherProps}) {
  className = classNames('spectrum-Avatar', {
    'is-disabled': disabled
  }, className);

  return (
    <img
      {...filterDOMProps(otherProps)}
      src={src}
      alt={alt}
      className={className} />
  );
}

Avatar.propTypes = {
  /**
   * url of image to load, same that any html <img> tag would accept
   */
  src: PropTypes.string,

  /**
   * alt text to display for screen readers or if the image doesn't load
   */
  alt: PropTypes.string,

  /**
   * Greys out the avatar
   */
  disabled: PropTypes.bool,

  /**
   * String of custom class names to add to the top level dom element of Avatar
   */
  className: PropTypes.string
};

Avatar.defaultProps = {
  alt: ''
};