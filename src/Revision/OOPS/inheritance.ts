class BikeRide {
  private static _activeRides: number = 0;

  static start() {
    BikeRide._activeRides++;
  }

  repairBike() {
    BikeRide.stop();
  }

  static stop() {
    BikeRide._activeRides--;
  }

  get activeRides(): number {
    return BikeRide._activeRides;
  }

  set activeRides(value: number) {
    BikeRide._activeRides = value;
  }
}

const bikeRide = new BikeRide();
// console.log(BikeRide.activeRides);
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
