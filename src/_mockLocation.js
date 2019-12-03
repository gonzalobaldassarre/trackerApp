const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed:0,
            heading:0,
            accuracy: 5,
            altitudeAccuracy:5,
            altitude: 5,
            longitude: -58.37723 + increment * tenMetersWithDegrees,
            latitude: -34.61315 + increment * tenMetersWithDegrees
        }
    };
};

let counter = 0;
setInterval( () => {
    Location.EventEmitter
}, 1000);