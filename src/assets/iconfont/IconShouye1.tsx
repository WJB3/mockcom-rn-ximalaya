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

let IconShouye1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1070 1024" width={size} height={size} {...rest}>
      <Path
        d="M1063.893045 518.148967c-9.367612 18.735223-29.441065 30.779296-52.190979 30.779296h-49.51452v368.013317c0 58.882131-48.176289 107.05842-107.058419 107.05842h-628.968216c-58.882131 0-107.05842-48.176289-107.058419-107.05842V548.928263H58.882131C26.764605 548.928263 0 522.163658 0 490.046132c0-12.044072 4.014691-22.749914 9.367612-32.117526L487.115809 25.680237c18.735223-26.764605 54.86744-33.455756 81.632045-16.058763 6.691151 4.014691 12.044072 9.367612 16.058763 16.058763l476.409968 430.910139c12.044072 18.735223 12.044072 42.823368 2.67646 61.558591z"
        fill={getIconColor(color, 0, '#2F77F1')}
      />
      <Path
        d="M533.953868 742.971648c58.882131 0 107.05842 48.176289 107.05842 107.05842v173.969932h-214.11684v-173.969932c0-58.882131 48.176289-107.05842 107.05842-107.05842z"
        fill={getIconColor(color, 1, '#AFFCFE')}
      />
    </Svg>
  );
};

IconShouye1.defaultProps = {
  size: 18,
};

IconShouye1 = React.memo ? React.memo(IconShouye1) : IconShouye1;

export default IconShouye1;
