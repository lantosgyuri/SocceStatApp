export const statFieldInfo = {
    types : {
        num: {
            minValue: 0,
            maxValue: 10,
        },
        percentage: {
            minValue: 0,
            maxValue: 1,
        }
    },
    fields: [
        {
            name: 'Average goals for',
            dbColumnName: 'avg_goals_for',
            type: 'num',
        },
        {
            name: 'Clean sheets',
            dbColumnName: 'clean_sheets',
            type: 'percentage',
        },
        {
            name: 'Won to nil',
            dbColumnName: 'won_to_nil',
            type: 'percentage',
        },
        {
            name: 'Scoring rate',
            dbColumnName: 'scoring_rate',
            type: 'percentage',
        },
        {
            name: 'Scored in both halves',
            dbColumnName: 'scored_in_both_halves',
            type: 'percentage',
        },
        {
            name: 'Team scored first',
            dbColumnName: 'team_scored_first',
            type: 'percentage',
        },
        {
            name: 'Leading at halftime',
            dbColumnName: 'leading_at_halftime',
            type: 'percentage',
        },
        {
            name: 'Average goals against',
            dbColumnName: 'avg_goals_against',
            type: 'num',
        },
        {
            name: 'Failed to score',
            dbColumnName: 'failed_to_score',
            type: 'percentage',
        },
        {
            name: 'Lost to nil',
            dbColumnName: 'lost_to_nil',
            type: 'percentage',
        },
        {
            name: 'Conceding rate',
            dbColumnName: 'conceding_rate',
            type: 'percentage',
        },
        {
            name: 'Conceded in both halves',
            dbColumnName: 'conceded_in_both_halves',
            type: 'percentage',
        },
        {
            name: 'Opponent scored first',
            dbColumnName: 'opponent_scored_first',
            type: 'percentage',
        },
        {
            name: 'Losing at halftime',
            dbColumnName: 'losing_at_halftime',
            type: 'percentage',
        },
    ]
};
export const filteredGames = {
    "length": 46,
    "games": [
        {
            "league": "Switzerland - Super League",
            "home_team": "BSC Young Boys",
            "away_team": "FC Zurich",
            "home_team_id": 4,
            "away_team_id": 450,
            "date": "2020-06-19T00:00:00.000Z"
        },
        {
            "league": "Switzerland - Super League",
            "home_team": "Luzern",
            "away_team": "FC Basel",
            "home_team_id": 455,
            "away_team_id": 456,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Switzerland - Super League",
            "home_team": "Servette",
            "away_team": "Lugano",
            "home_team_id": 2,
            "away_team_id": 1,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie A",
            "home_team": "Hellas Verona",
            "away_team": "Cagliari",
            "home_team_id": 539,
            "away_team_id": 540,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie A",
            "home_team": "Atalanta",
            "away_team": "Sassuolo",
            "home_team_id": 541,
            "away_team_id": 542,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie A",
            "home_team": "Inter Milan",
            "away_team": "Sampdoria",
            "home_team_id": 543,
            "away_team_id": 544,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie A",
            "home_team": "Fiorentina",
            "away_team": "Brescia",
            "home_team_id": 545,
            "away_team_id": 546,
            "date": "2020-06-22T00:00:00.000Z"
        },
        {
            "league": "Poland - Ekstraklasa",
            "home_team": "Pogon Szczecin",
            "away_team": "Lechia Gdansk",
            "home_team_id": 87,
            "away_team_id": 97,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Russia - Premier League",
            "home_team": "Krylya Sovetov",
            "away_team": "Akhmat Grozny",
            "home_team_id": 189,
            "away_team_id": 190,
            "date": "2020-06-19T00:00:00.000Z"
        },
        {
            "league": "Russia - Premier League",
            "home_team": "Krylya Sovetov",
            "away_team": "Akhmat Grozny",
            "home_team_id": 189,
            "away_team_id": 190,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Russia - Premier League",
            "home_team": "Arsenal Tula",
            "away_team": "Spartak Moscow",
            "home_team_id": 195,
            "away_team_id": 196,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Russia - Premier League",
            "home_team": "Arsenal Tula",
            "away_team": "Spartak Moscow",
            "home_team_id": 195,
            "away_team_id": 196,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Russia - Premier League",
            "home_team": "CSKA Moscow",
            "away_team": "Zenit",
            "home_team_id": 197,
            "away_team_id": 198,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Russia - Premier League",
            "home_team": "CSKA Moscow",
            "away_team": "Zenit",
            "home_team_id": 197,
            "away_team_id": 198,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Russia - Premier League",
            "home_team": "Ufa",
            "away_team": "FC Tambov",
            "home_team_id": 191,
            "away_team_id": 192,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Russia - Premier League",
            "home_team": "FC Krasnodar",
            "away_team": "Dinamo Moscow",
            "home_team_id": 199,
            "away_team_id": 200,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Premier League",
            "home_team": "Norwich City",
            "away_team": "Southampton",
            "home_team_id": 659,
            "away_team_id": 660,
            "date": "2020-06-19T00:00:00.000Z"
        },
        {
            "league": "Premier League",
            "home_team": "Tottenham",
            "away_team": "Manchester Utd",
            "home_team_id": 661,
            "away_team_id": 662,
            "date": "2020-06-19T00:00:00.000Z"
        },
        {
            "league": "Premier League",
            "home_team": "Watford",
            "away_team": "Leicester City",
            "home_team_id": 663,
            "away_team_id": 664,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Premier League",
            "home_team": "Brighton",
            "away_team": "Arsenal",
            "home_team_id": 665,
            "away_team_id": 658,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Premier League",
            "home_team": "West Ham Utd",
            "away_team": "Wolverhampton",
            "home_team_id": 667,
            "away_team_id": 668,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Poland - Ekstraklasa",
            "home_team": "Gornik Zabrze",
            "away_team": "Korona Kielce",
            "home_team_id": 90,
            "away_team_id": 184,
            "date": "2020-06-19T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie B",
            "home_team": "Ascoli",
            "away_team": "Perugia",
            "home_team_id": 929,
            "away_team_id": 932,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie B",
            "home_team": "Cosenza",
            "away_team": "Virtus Entella",
            "home_team_id": 933,
            "away_team_id": 934,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie B",
            "home_team": "Cremonese",
            "away_team": "Benevento",
            "home_team_id": 930,
            "away_team_id": 936,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie B",
            "home_team": "Crotone",
            "away_team": "Chievo",
            "home_team_id": 937,
            "away_team_id": 938,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie B",
            "home_team": "Pescara",
            "away_team": "Juve Stabia",
            "home_team_id": 941,
            "away_team_id": 942,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie B",
            "home_team": "Pordenone",
            "away_team": "Venezia",
            "home_team_id": 943,
            "away_team_id": 944,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie B",
            "home_team": "Salernitana",
            "away_team": "Pisa",
            "home_team_id": 945,
            "away_team_id": 946,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Italy - Serie B",
            "home_team": "Spezia",
            "away_team": "Empoli",
            "home_team_id": 947,
            "away_team_id": 948,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Poland - Ekstraklasa",
            "home_team": "Legia Warsaw",
            "away_team": "Slask Wroclaw",
            "home_team_id": 94,
            "away_team_id": 85,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Poland - Ekstraklasa",
            "home_team": "KS Cracovia",
            "away_team": "Jagiellonia",
            "home_team_id": 95,
            "away_team_id": 96,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Poland - Ekstraklasa",
            "home_team": "Rakow Czest.",
            "away_team": "Wisla Krakow",
            "home_team_id": 86,
            "away_team_id": 92,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Fulham",
            "away_team": "Brentford",
            "home_team_id": 865,
            "away_team_id": 866,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Blackburn",
            "away_team": "Bristol City",
            "home_team_id": 861,
            "away_team_id": 862,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Huddersfield",
            "away_team": "Wigan Athletic",
            "home_team_id": 867,
            "away_team_id": 868,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Hull City",
            "away_team": "Charlton",
            "home_team_id": 869,
            "away_team_id": 870,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Luton Town",
            "away_team": "Preston",
            "home_team_id": 871,
            "away_team_id": 872,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Middlesbrough",
            "away_team": "Swansea City",
            "home_team_id": 873,
            "away_team_id": 874,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Millwall",
            "away_team": "Derby County",
            "home_team_id": 875,
            "away_team_id": 876,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "QP Rangers",
            "away_team": "Barnsley",
            "home_team_id": 877,
            "away_team_id": 878,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Reading",
            "away_team": "Stoke City",
            "home_team_id": 879,
            "away_team_id": 880,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Sheffield Wed",
            "away_team": "Nottm Forest",
            "home_team_id": 881,
            "away_team_id": 882,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "West Brom",
            "away_team": "Birmingham City",
            "home_team_id": 883,
            "away_team_id": 884,
            "date": "2020-06-20T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Cardiff City",
            "away_team": "Leeds Utd",
            "home_team_id": 863,
            "away_team_id": 864,
            "date": "2020-06-21T00:00:00.000Z"
        },
        {
            "league": "Championship",
            "home_team": "Cardiff City",
            "away_team": "Leeds Utd",
            "home_team_id": 863,
            "away_team_id": 864,
            "date": "2020-06-20T00:00:00.000Z"
        }
    ]
};

export const statTeam = {
    "teamID": "194",
    "state": "away",
    "stats": [
        {
            "id": 201,
            "stat_available": true,
            "team_id": 194,
            "avg_goals_for": "0.58",
            "clean_sheets": "0.42",
            "won_to_nil": "0.17",
            "scoring_rate": "0.58",
            "scored_in_both_halves": "0.00",
            "team_scored_first": "0.25",
            "leading_at_halftime": "0.08",
            "avg_goals_against": "1.08",
            "failed_to_score": "0.42",
            "lost_to_nil": "0.17",
            "conceding_rate": "0.58",
            "conceded_in_both_halves": "0.08",
            "opponent_scored_first": "0.50",
            "losing_at_halftime": "0.25",
            "created_at": "2020-06-05T09:53:58.483Z",
            "updated_at": "2020-06-05T09:53:58.483Z",
            "deleted_at": null
        }
    ]
};
