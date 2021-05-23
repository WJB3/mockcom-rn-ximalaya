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

let IconShuaxin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M571.733333 227.84V151.466667c0-25.173333-19.626667-35.413333-33.706666-25.173334L327.68 272.64a21.333333 21.333333 0 0 0 0 35.413333l210.346667 146.773334a21.76 21.76 0 0 0 33.706666-17.92V386.56a21.333333 21.333333 0 0 1 23.04-21.333333 271.786667 271.786667 0 0 1 239.36 210.346666 260.266667 260.266667 0 0 0 6.4-58.026666 271.36 271.36 0 0 0-248.746666-268.8 20.906667 20.906667 0 0 1-20.053334-20.906667zM443.733333 790.613333v85.333334a21.333333 21.333333 0 0 0 33.28 17.493333l211.2-147.2a21.333333 21.333333 0 0 0 0-34.56l-211.2-147.2a20.906667 20.906667 0 0 0-33.28 17.066667v51.2a20.906667 20.906667 0 0 1-22.613333 21.333333 271.786667 271.786667 0 0 1-239.786667-210.346667 260.266667 260.266667 0 0 0-6.4 58.026667A270.506667 270.506667 0 0 0 423.68 768a21.76 21.76 0 0 1 20.053333 22.613333z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </Svg>
  );
};

IconShuaxin.defaultProps = {
  size: 18,
};

IconShuaxin = React.memo ? React.memo(IconShuaxin) : IconShuaxin;

export default IconShuaxin;
