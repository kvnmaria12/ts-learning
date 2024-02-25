function printName2<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

function printAge<T extends number | string>(value: T) {
  console.log(value);
}
