interface Products {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  get objects(): T[] {
    return this._objects;
  }

  //   T is a product
  // keyof T => 'name' | 'price'
  find2(property: keyof T, value: unknown): T | undefined {
    return this.objects.find((obj) => obj[property] == value);
  }
}

let store = new Store<Products>();
store.add({ name: 'Yuves Laurent', price: 300 });
console.log(store.objects);
store.add({ name: 'a', price: 1 });
store.find2('name', 'a');
store.find2('price', 1);

// Now we have a generic class called Store
// Let's see how we can use it in three ways

// 1. Pass on generic type parameter
/**
 * The generic type parameter that we have in the base
 * class is also gonna be used in the child class
 */
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let cStore = new CompressibleStore<Products>();
cStore.add({ name: 'Chicken Masala', price: 500 });

//Restrict generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => {
      obj.name == name;
    });
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Products> {
  filterByCategory(category: string): Products[] {
    return [];
  }
}
