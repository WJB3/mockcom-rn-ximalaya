/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconIndex: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.092672 768a76.8 76.8 0 0 1 76.8 76.8v179.2h-153.6v-179.2a76.8 76.8 0 0 1 76.8-76.8z"
        fill={getIconColor(color, 0, '#9299EA')}
      />
      <Path
        d="M570.051072 21.2992a82.1504 82.1504 0 0 0-110.336 0L13.404672 444.9792a41.1648 41.1648 0 0 0 55.1424 61.1328l7.0912-6.7328V941.568A82.304 82.304 0 0 0 157.967872 1024h239.616v-247.8336a57.9584 57.9584 0 0 1 58.0096-58.0352h112.7424a57.984 57.984 0 0 1 58.0096 58.0352V1024h245.2992a82.3808 82.3808 0 0 0 82.3808-82.432V504.7808c18.2784 16.5376 44.2368 15.2832 59.4432-1.664a41.1648 41.1648 0 0 0-2.9696-58.1376L570.051072 21.2992z"
        fill={getIconColor(color, 1, '#2C3167')}
      />
    </Svg>
  );
};

IconIndex.defaultProps = {
  size: 18,
};

IconIndex = React.memo ? React.memo(IconIndex) : IconIndex;

export default IconIndex;
