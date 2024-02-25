// 1
type Users = {
  name: string;
  age: number;
  occupation?: string;
}[];

let users: Users = [
  { name: 'John Smith', age: 30, occupation: 'Software engineer' },
  { name: 'Kate Müller', age: 28 },
  { name: 'Kvn', age: 25, occupation: 'Software Engineer' },
];

//2
type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Name = {
  name: string;
};

type Pet = Bird | Fish;

let pet: Pet = {
  fly: () => {
    console.log('fly');
  },
};

//3
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
