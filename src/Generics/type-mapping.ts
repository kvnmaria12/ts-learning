/**
 * sometime we need to based a type on another type called
 * as type mapping
 */

interface Productss {
  name: string;
  price: number;
}

type ReadOnlyProduct = {
  // Index Signature
  // keyof
  [Property in keyof Productss]: Productss[Property];
};
