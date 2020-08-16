import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider'

import { FONTS } from '../utils/const'
import { createNumText} from "../utils";

const { width } = Dimensions.get('window')

const STYLE = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    slider: {
        width: width / 2.2,
    },
    sliderContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    text: {
        fontFamily: FONTS.BASE,
        fontSize: 15,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: width / 1.2
    },
    textNumberLeft: {
        fontFamily: FONTS.BASE,
        fontSize: 13,
        position: 'absolute',
        left: 5,
    },
    textNumberRight: {
        fontFamily: FONTS.BASE,
        fontSize: 13,
        position: 'absolute',
        right: 5,
    },
});

const StatSlider = ({
    name,
    dbColumnName,
    minValue,
    maxValue,
    type
                    }) => {
    const [homeValue, setHomeValue] = useState(minValue);
    const [awayValue, setAwayValue] = useState(minValue);
    const isPercentageType = type === 'percentage';

    return(
     <View style={STYLE.container}>
         <View style={STYLE.textContainer}>
             <Text style={STYLE.textNumberLeft}>{createNumText(type, homeValue)}</Text>
             <Text style={STYLE.text}>{name}</Text>
             <Text style={STYLE.textNumberRight}>{createNumText(type, awayValue)}</Text>
         </View>
         <View style={STYLE.sliderContainer}>
             <Slider
                inverted
                step={isPercentageType ? 0.005 : 0.1}
                thumbTintColor="black"
                minimumTrackTintColor="black"
                style={STYLE.slider}
                minimumValue={minValue}
                maximumValue={maxValue}
                onValueChange={value => setHomeValue(value)}
             />
             <Slider
                 thumbTintColor="black"
                 minimumTrackTintColor="black"
                 style={STYLE.slider}
                 step={isPercentageType ? 0.005 : 0.1}
                 minimumValue={minValue}
                 maximumValue={maxValue}
                 onValueChange={value => setAwayValue(value)}
             />
         </View>
     </View>
  )
};

export default StatSlider;
