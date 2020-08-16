import React from 'react';
import {
    FlatList,
} from 'react-native';

import { filteredGames} from "../dev/ResponseSamples";
import { HitCard, HitListHeader } from "../components";

const ListScreen = () => {
    return (
            <FlatList
            style={{ flex: 1 }}
            data={filteredGames.games}
            horizontal
            ListHeaderComponent={() =>
                <HitListHeader numberOfHits={filteredGames.length} />}
            renderItem={game =>
                <HitCard
                    leagueName={game.item.league}
                    homeTeam={game.item.home_team}
                    awayTeam={game.item.away_team}
                    homeTeamId={game.item.home_team_id}
                    awayTeamId={game.item.away_team_id}
                    date={game.item.date}
                />
                }
            keyExtractor={item => item.index}
            />
    );
};

export default ListScreen;
