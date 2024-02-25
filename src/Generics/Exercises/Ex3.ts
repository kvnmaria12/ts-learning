class Entity<T> {
  constructor(public id: T) {}
}

class KeyValue<K, V> {
  constructor(public key: K, public value: V) {}
}

let keyValue = new KeyValue<string, number>('key', 23);
