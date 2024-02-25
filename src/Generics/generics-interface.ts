// interface Result<T> {
//   data: T | null;
//   error: string | null;
//   url: string;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null, url: url };
// }

// interface User {
//   userName: string;
// }

// interface Product {
//   title: string;
// }

// let result = fetch<User>('url');

interface Result<T> {
  data: T | null;
  error: string | null;
  url: string;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null, url: url };
}

interface User {
  userName: string;
}

interface Product {
  product: string;
}

let user = fetch<User>('url');
console.log(user.data?.userName);
console.log(user.url);
