module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Fitnesshub - find a place to workout',
        pageHeader: {
            title: 'Fitnesshub',
            strapline: 'Find places to workout near you!'
        },
        sidebar: "Looking for exercise and a bodybuild? Loc8r helps you find places to workout.",
        locations: [{
            name: 'Melvin Fitness Studio',
            rating: 3,
            facilities: ['protein drinks', 'workout equipment', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Rana Gym',
            address: '125 low Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['protein drinks', 'workout equipment', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Cult Fit',
            address: '125  Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['protein drinks', 'workout equipment', 'Premium wifi'],
            distance: '250m'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};
