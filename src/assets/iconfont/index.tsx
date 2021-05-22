/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconWodedangxuan from './IconWodedangxuan';
import IconFaxian from './IconFaxian';
import IconShoucang from './IconShoucang';
import IconShouye from './IconShouye';
import IconShouye1 from './IconShouye1';
import IconShouye2 from './IconShouye2';
import IconIndex from './IconIndex';

export type IconNames = 'icon-wodedangxuan' | 'icon-faxian' | 'icon-shoucang' | 'icon-shouye' | 'icon-shouye1' | 'icon-shouye2' | 'icon-index';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-wodedangxuan':
      return <IconWodedangxuan key="1" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="2" {...rest} />;
    case 'icon-shoucang':
      return <IconShoucang key="3" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="4" {...rest} />;
    case 'icon-shouye1':
      return <IconShouye1 key="5" {...rest} />;
    case 'icon-shouye2':
      return <IconShouye2 key="6" {...rest} />;
    case 'icon-index':
      return <IconIndex key="7" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
