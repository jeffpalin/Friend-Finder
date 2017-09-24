// ===============================================================================
// DATA
// Below data will hold all of the friends info.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = {
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
};

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;