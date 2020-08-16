import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
} from 'react-native';

import StatCard  from './StatCard'
import { FONTS } from '../utils/const'

const { width } = Dimensions.get('window');

const STYLE = StyleSheet.create({
    container: {
        width,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 0.3,
        borderColor: 'gray',
        margin: 20,
    },
    headerTextContainer: {
        marginVertical: 10,
    },
    teamNameContainer: {
        flexDirection: 'row',
        paddingHorizontal: 40,
        justifyContent: 'space-between'
    },
    leagueText: {
        fontFamily: FONTS.BASE,
        fontSize: 15,
        marginBottom: 10,
    },
    teamText: {
        fontFamily: FONTS.BASE,
        fontSize: 25,
        marginBottom: 10,
    },
    dateText: {
        fontFamily: FONTS.BASE,
        fontSize: 12,
    },
});

const HitCard = ({
    leagueName,
    homeTeam,
    awayTeam,
    homeTeamId,
    awayTeamId,
    date,
                 }) => {

    const createDateText = date => {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString();
    };

    return(
        <View style={STYLE.container}>
            <View style={STYLE.headerTextContainer}>
                <Text style={STYLE.leagueText}>{leagueName}</Text>
                <View style={STYLE.teamNameContainer}>
                    <Text style={STYLE.teamText}>{homeTeam}</Text>
                    <Text style={STYLE.teamText}> - </Text>
                    <Text style={STYLE.teamText}>{awayTeam}</Text>
                </View>
                <Text style={STYLE.dateText}>{createDateText(date)}</Text>
            </View>
            <StatCard awayTeamId={awayTeamId} homeTeamId={homeTeamId} />
        </View>
    );
};

export default HitCard;
