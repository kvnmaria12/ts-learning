// let person = {};
// person.name = 'Kevin';

// Index Signature - To create dynamic properties

class SeatAssignment {
  // A1, A2, ...
  // Kvn, Daniel,...
  //   A1: string;
  //   A2: string;
  // index signature to create properties dynamically
  [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.A1 = 'Kvn';
seats.A2 = 'Daniel';

console.log(seats);
