import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { StatSlider } from '../components'
import { statFieldInfo } from "../dev/ResponseSamples";
import { makeSliderList } from "../utils";
import { FONTS } from '../utils/const'

const STYLE = StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    sliderContainer: {
        flex: 1,
        padding: 5,
        margin: 10,
        borderRadius: 30,
        borderWidth: 0.3,
        borderColor: 'gray',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 30,
        fontFamily: FONTS.BASE,
    },
    button: {
        borderRadius: 40,
        borderWidth: 0.1,
        borderColor: 'gray',
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 30,
        fontFamily: FONTS.BASE,
    },
});

const SearchScreen = () => {
    const sliderList = makeSliderList(statFieldInfo);
    return (
        <ScrollView>
           <View style={STYLE.textContainer}>
                <Text style={STYLE.titleText}>Home | Away</Text>
            </View>
            <View style={STYLE.sliderContainer}>
                {sliderList
                    .map(item => <StatSlider
                        name={item.name}
                        dbColumnName={item.dbColumnName}
                        minValue={item.minValue}
                        maxValue={item.maxValue}
                        type={item.type}
                        />
                )}
                <TouchableOpacity style={STYLE.button}>
                    <Text style={STYLE.buttonText}>Make me rich</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SearchScreen;
