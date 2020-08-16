import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Bar from "./Bar";

import { FONTS } from "../utils/const";
import { createNumText } from "../utils";

const STYLE = StyleSheet.create({
   container: {
       marginBottom: 10,
   },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    barContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    valueText: {
        fontFamily: FONTS.BASE,
        fontSize: 14,
    },
    nameText: {
        fontFamily: FONTS.BASE,
        marginHorizontal: 30,
        fontSize: 20,
    },
});

const StatBar = ({
    name,
    maxValue,
    homeValue,
    awayValue,
    type
                 }) => {
    const homeValueText = createNumText(type, homeValue);
    const awayValueText = createNumText(type, awayValue);

    const createBarValue = (type, value) => {
        const isPercentage = type === 'percentage';
        if(isPercentage) return (parseFloat(value) * 100).toFixed(1)
        else return (parseFloat(value) / parseFloat(maxValue) * 100).toFixed(1)
    }

    return(
        <View style={STYLE.container}>
            <View style={STYLE.textContainer}>
                <Text style={STYLE.valueText}>{homeValueText}</Text>
                <Text style={STYLE.nameText}>{name}</Text>
                <Text style={STYLE.valueText}>{awayValueText}</Text>
            </View>
            <View style={STYLE.barContainer}>
                <Bar value={createBarValue(type, homeValue)} invert />
                <Bar value={createBarValue(type, awayValue)} />
            </View>
        </View>
    )
};

export default StatBar;
