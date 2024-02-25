function echo<T extends number | string>(value: T): T {
  return value;
}

echo('Kvn');

// in the above case we have used number  | string
// in the below case we can give a shape of an object

interface Echo2 {
  id: number;
  name: string;
  isEchoSound: boolean;
}

class PersonE {
  constructor(public name: string) {}
}

class CustomerE extends PersonE {}

function echo3<T extends PersonE>(value: T): T {
  return value;
}

echo3(new PersonE('daniel'));
echo3(new CustomerE('Viji'));

function echo2<T extends Echo2>(value: T): T {
  return value;
}

echo2({ id: 1, name: 'kevin', isEchoSound: false });

type Point = { x: number; y: number };
type P = keyof Point;
