// Generic Functions
function myBirthDay<T>(year: T) {
  return year;
}

myBirthDay('1999');

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numberss = ArrayUtils.wrapInArray(23);

function findMyAge<T>(age: T) {
  return age;
}

let myTodayAge = findMyAge(23);
