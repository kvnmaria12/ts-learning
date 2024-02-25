"use strict";
class BikeRide {
    static start() {
        BikeRide._activeRides++;
    }
    repairBike() {
        BikeRide.stop();
    }
    static stop() {
        BikeRide._activeRides--;
    }
    get activeRides() {
        return BikeRide._activeRides;
    }
    set activeRides(value) {
        BikeRide._activeRides = value;
    }
}
BikeRide._activeRides = 0;
const bikeRide = new BikeRide();
bikeRide.activeRides = 23;
console.log(bikeRide.activeRides);
class SmallRide extends BikeRide {
    constructor() {
        super();
    }
    bikePit() {
        super.repairBike();
        BikeRide.start();
    }
}
//# sourceMappingURL=inheritance.js.map