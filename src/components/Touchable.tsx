import React, { FunctionComponent } from 'react';

import { TouchableOpacity, TouchableOpacityProps } from 'react-native';


const Touchable: React.FC<TouchableOpacityProps> = (props: TouchableOpacityProps) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            {...props}
        />
    )

}

export default React.memo<any>(Touchable);