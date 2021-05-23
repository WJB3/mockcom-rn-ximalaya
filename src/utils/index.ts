import { Dimensions } from 'react-native';

const {width:viewportWidth,height:viewportHeight }=Dimensions.get('window');

//根据百分比获取宽度
function wp(percentage:number){
    const value=(percentage/100)*viewportWidth;
    return Math.round(value);
}

//根据百分比获取高度
function hp(percentage:number){
    const value=(percentage/100)*viewportHeight;
    return Math.round(value);
}

console.log("viewportWidth",viewportWidth)
console.log("viewportHeight",viewportHeight)

export {
    viewportWidth,
    viewportHeight,
    wp,
    hp
} 