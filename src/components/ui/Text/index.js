import React from 'react';
import {Text as NativeText} from 'react-native';

import {PropTypes} from 'prop-types';

const index = ({fontWeightAndStyle, size, style, children}) => {
  return <NativeText>{children}</NativeText>;
};

index.propTypes = {
  fontWeightAndStyle: PropTypes.oneOf([
    'bold',
    'extraBold',
    'regular',
    'semiBold',
  ]),
  size: PropTypes.oneOf([14, 15, 16, 17, 20, 22, 24, 28]),
  style: PropTypes.ViewStyle,
  children: PropTypes.any,
};

// index.defaultProps = {
//   fontWeightAndStyle: 'regular',
//   size: 16,
// };

export default React.memo(index);
