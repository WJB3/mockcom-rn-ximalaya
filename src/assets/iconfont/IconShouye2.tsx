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

let IconShouye2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 611.05664c36.70016 0 66.56 29.85984 66.56 66.56s-29.85984 66.56-66.56 66.56-66.56-29.85984-66.56-66.56 29.85984-66.56 66.56-66.56m0-71.68c-76.34944 0-138.24 61.89056-138.24 138.24s61.89056 138.24 138.24 138.24 138.24-61.89056 138.24-138.24-61.89056-138.24-138.24-138.24z"
        fill={getIconColor(color, 0, '#666666')}
      />
      <Path
        d="M512 144.97792l329.71264 292.66432H775.8848v441.4976a10.15808 10.15808 0 0 1-10.14784 10.14784H258.26304a10.15808 10.15808 0 0 1-10.14784-10.14784v-441.4976H182.28736L512 144.97792m0-81.31584a40.50432 40.50432 0 0 0-26.95168 10.23488l-409.8816 363.8272c-27.9296 24.79104-10.3936 70.95808 26.95168 70.95808h74.94656v370.45248c0 44.84096 36.352 81.19296 81.19296 81.19296h507.47392c44.84096 0 81.19296-36.352 81.19296-81.19296V508.68736h74.94656c37.34528 0 54.88128-46.16704 26.95168-70.95808l-409.8816-363.8272a40.46848 40.46848 0 0 0-26.94144-10.24z"
        fill={getIconColor(color, 1, '#666666')}
      />
    </Svg>
  );
};

IconShouye2.defaultProps = {
  size: 18,
};

IconShouye2 = React.memo ? React.memo(IconShouye2) : IconShouye2;

export default IconShouye2;
