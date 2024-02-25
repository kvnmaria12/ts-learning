interface ProductInfo {
  id: number;
  price: number;
}

function echooo<T>(value: T): T {
  return value;
}

echooo<ProductInfo>({ id: 1, price: 22 });
