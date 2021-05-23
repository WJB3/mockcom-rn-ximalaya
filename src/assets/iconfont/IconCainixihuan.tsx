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

let IconCainixihuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1129 1024" width={size} height={size} {...rest}>
      <Path
        d="M902.10453333 629.68533333a36.92266667 36.92266667 0 0 1 59.00266667 44.2592l-2.28906667 3.02826667-246.1536 295.38453333a36.92266667 36.92266667 0 0 1-59.00266666-44.2592l2.28906666-3.0272 246.15466667-295.38453333z m106.48533334-134.5472a36.92266667 36.92266667 0 0 1 60.23466666 42.53546667l-2.16533333 3.07733333-45.6128 58.09173334a36.92266667 36.92266667 0 0 1-60.2592-42.56l2.1664-3.07626667 45.63733333-58.0928z m-67.84-113.8208l41.10933333 27.07626667c-101.41653333 153.99466667-217.3792 154.70826667-344.07466667 74.43733333-163.54453333-88.56533333-290.78186667-63.50826667-390.89173333 76.28266667l-4.9728 7.08906667-40.51733333-27.9872c115.4464-167.13813333 271.9264-200.44266667 461.2928-97.82186667 106.26453333 67.27466667 191.36 67.9392 273.64906666-52.50453333l4.40533334-6.57173334z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M654.37546667 76.70186667L534.08 233.40266667a12.3072 12.3072 0 0 1-19.54453333 0L394.24 76.70186667a86.15466667 86.15466667 0 0 0-134.64533333-2.53546667L54.34986667 321.6a86.15466667 86.15466667 0 0 0 0.22186666 110.2528L458.19093333 914.88a86.15466667 86.15466667 0 0 0 132.23466667 0l403.61706667-483.0272a86.15466667 86.15466667 0 0 0 0.22186666-110.2528L789.02186667 74.16533333a86.15466667 86.15466667 0 0 0-134.6464 2.53653334zM333.78453333 119.68a12.3072 12.3072 0 0 1 1.89546667 1.96906667l120.32 156.72533333a86.15466667 86.15466667 0 0 0 136.66453333 0l120.32-156.7008a12.3072 12.3072 0 0 1 19.22453334-0.36906667l205.24373333 247.43466667a12.3072 12.3072 0 0 1-0.05013333 15.7536L533.76 867.52a12.3072 12.3072 0 0 1-18.90453333 0l-403.59466667-483.0272a12.3072 12.3072 0 0 1-0.048-15.75466667l205.24266667-247.4336a12.3072 12.3072 0 0 1 15.5072-2.88l1.82186666 1.25546667z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCainixihuan.defaultProps = {
  size: 18,
};

IconCainixihuan = React.memo ? React.memo(IconCainixihuan) : IconCainixihuan;

export default IconCainixihuan;