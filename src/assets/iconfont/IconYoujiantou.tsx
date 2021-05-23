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

let IconYoujiantou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M333 1005.9c-11.2 11.2-25.8 16.7-40.5 16.7-14.6 0-29.3-5.5-40.5-16.7-22.3-22.3-22.3-58.5 0-80.8l413.8-413.8L252.3 97.6c-22.3-22.3-22.3-58.5 0-80.8 22.3-22.3 58.5-22.3 80.8 0L763 446.7c17.3 17.3 26.7 40.2 26.7 64.7s-9.5 47.4-26.7 64.7l-430 429.8z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconYoujiantou.defaultProps = {
  size: 18,
};

IconYoujiantou = React.memo ? React.memo(IconYoujiantou) : IconYoujiantou;

export default IconYoujiantou;
