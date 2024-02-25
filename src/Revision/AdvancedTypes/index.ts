// Type Alias
type DogInfo = {
  id: number;
  name: string;
  age: number;
  doesBark: (isFoodGiven: boolean) => boolean;
};

const myDog: DogInfo = {
  id: 1,
  name: 'Roger',
  age: 5,
  doesBark: (isFoodGiven: boolean) => {
    if (isFoodGiven) {
      return true;
    }
    return false;
  },
};

myDog.doesBark(false);

// 2. Union Types
function myMarriageExp(years: number | string) {
  return years;
}

myDog;

// 3. Literal
type isValid = true | false;

const isTrue: isValid = true;

type ShoeSize = 'sm' | 'lg';

const shoeSize: ShoeSize = 'sm';

// Type Assertion
const phoneInput = document.getElementById('input') as HTMLInputElement;

// or

const phoneInput2 = <HTMLInputElement>document.getElementById('input');

console.log(phoneInput.value);
