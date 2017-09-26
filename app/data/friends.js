// ===============================================================================
// DATA
// Below data will hold all of the friends info. This is hardcoded to provide a list
// to compare survey answers with.
// ===============================================================================

var friendsData = [{
        "name": "Steph",
        "photo": "https://espnfivethirtyeight.files.wordpress.com/2017/04/mvp-curry-4x3.png?w=1200",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "LeBron",
        "photo": "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
        "scores": [
            3,
            2,
            4,
            5,
            1,
            3,
            3,
            3,
            4,
            2
        ]
    },
    {
        "name": "Donnie",
        "photo": "http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg",
        "scores": [
            4,
            3,
            2,
            1,
            5,
            2,
            3,
            1,
            1,
            4
        ]
    },
    {
        "name": "Hillary",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Official_Portrait_of_U.S._Secretary_of_State_Hillary_Rodham_Clinton_%283328305563%29.jpg/220px-Official_Portrait_of_U.S._Secretary_of_State_Hillary_Rodham_Clinton_%283328305563%29.jpg",
        "scores": [
            4,
            2,
            4,
            4,
            3,
            4,
            3,
            5,
            5,
            2
        ]
    }
];



// Note how we export the arrays. This makes it accessible to other files using require.
module.exports = friendsData;