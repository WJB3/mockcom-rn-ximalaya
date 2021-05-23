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

let IconKefu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M510.257495 178.265522c-139.235408 0-252.099739 110.566324-252.099739 246.948723 0 136.3784 112.864331 246.944723 252.099739 246.944723 139.231408 0 252.095739-110.566324 252.095739-246.944723C762.298233 288.831846 649.488903 178.265522 510.257495 178.265522L510.257495 178.265522 510.257495 178.265522zM219.135642 520.048524 219.135642 292.026856c-3.191009 0-6.381019 0.111-9.462028 0.389001C261.347766 180.221528 376.395103 102.070299 510.257495 102.070299c133.858392 0 248.959729 78.151229 300.577881 190.345558-3.135009-0.222001-6.270018-0.389001-9.461028-0.389001l0 228.022668c64.270188 0 116.448341-51.05815 116.448341-113.983334 0-42.772125-24.072071-80.001234-59.622175-99.542292C808.149368 165.387485 671.489967 64.055188 510.257495 64.055188c-161.236472 0-297.840873 101.332297-347.948019 242.46771-35.550104 19.485057-59.623175 56.770166-59.623175 99.486291C102.686301 468.990374 154.809454 520.048524 219.135642 520.048524L219.135642 520.048524 219.135642 520.048524zM761.794232 650.771907c-65.893193 60.242176-154.292452 97.133285-251.535737 97.133285-97.077284 0-185.365543-36.724108-251.203736-96.795284C141.261414 710.454081 63.891187 816.207391 63.891187 959.807812l895.752624 0C959.643811 815.92939 880.872581 710.06208 761.794232 650.771907L761.794232 650.771907 761.794232 650.771907zM761.794232 650.771907"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconKefu.defaultProps = {
  size: 18,
};

IconKefu = React.memo ? React.memo(IconKefu) : IconKefu;

export default IconKefu;
