import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import LottieView from 'lottie-react-native';

import {statFieldInfo, statTeam} from "../dev/ResponseSamples";
import {makeFinalStatList, makeSliderList} from "../utils";
import StatBar from "./StatBar";

const STYLE = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 20,
        marginBottom: 10,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const fields = makeSliderList(statFieldInfo);

const StatCard = ({
    homeTeamId,
    awayTeamId,
                  }) => {

    const [loading, setLoading] = useState(true);
    const [teamStats, setTeamStats] = useState([]);

    useEffect( () => {
        // fetch
        const homeStat = statTeam;
        const awayStat = statTeam;
        setTeamStats(makeFinalStatList(fields, homeStat, awayStat));
        setTimeout(()=> setLoading(false), 1000);
    }, []);

    return(
        <ScrollView contentContainerStyle={STYLE.container}>
            {loading ?
                <LottieView
                    style={{ flex: 1 }}
                    source={require('../../res/lottie/loading-unicorn.json')} autoPlay loop />
                : teamStats.map(item =>
                <StatBar
                    name={item.name}
                    maxValue={item.maxValue}
                    homeValue={item.homeValue}
                    awayValue={item.awayValue}
                    type={item.type}
                    />
            )}
        </ScrollView>
    )
};

export default StatCard;
