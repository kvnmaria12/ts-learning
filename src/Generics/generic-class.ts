class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

const pair = new KeyValuePair(1, 'Kevin');

// creating a generic class
class KeyValuePairG<K, V> {
  constructor(public key: K, public vlaue: V) {}
}

const pairG = new KeyValuePairG<number, string>(1, 'Kevin');
// or
const pariG2 = new KeyValuePairG('2', 'Daniel');

// Example 2
class myMothersAge<T> {
  constructor(public age: T) {}
}

const motherAge = new myMothersAge<string>('23');
