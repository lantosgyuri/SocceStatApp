import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

import { FONTS } from '../utils/const'

const { width, height } = Dimensions.get('window');

const STYLE = StyleSheet.create({
    container: {
        width: width / 2,
        height,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontFamily: FONTS.BASE,
        fontSize: 25,
        width: width / 3,
    },
});

const HitListHeader = ({
    numberOfHits
                       }) => {
    return(
        <View style={STYLE.container}>
            <Text style={STYLE.text}>You have {numberOfHits} hit. Choose your destiny</Text>
        </View>
    );
};

export default HitListHeader;
