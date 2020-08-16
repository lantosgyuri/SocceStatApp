import React from 'react';
import { View, StyleSheet } from 'react-native';

const Bar = ({
                 value,
                 invert
             }) => {

    const STYLE = StyleSheet.create({
        container: {
            flex: 1,
            marginHorizontal: 5,
        },
        invertedContainer: {
            flex: 1,
            marginHorizontal: 5,
            alignItems: 'flex-end',
        },
        bar: {
            marginVertical: 2,
            backgroundColor: 'black',
            height: 10,
            width: `${value}%`,
            minWidth: '0.5%',
            borderTopEndRadius: 10,
            borderBottomEndRadius: 10,
        },
        invertedBar: {
            marginVertical: 2,
            backgroundColor: 'black',
            height: 10,
            width: `${value}%`,
            minWidth: '0.5%',
            borderTopStartRadius: 10,
            borderBottomStartRadius: 10,
        }
    });

    return(
        <View style={invert ? STYLE.invertedContainer : STYLE.container}>
            <View style={invert ? STYLE.invertedBar : STYLE.bar} />
        </View>
    )
}

export default Bar;
