import React, {createContext, ReactNode, useContext, useEffect} from 'react';
import {useProduct} from '@core/hooks';
import {productCartInterface, productItemInterface} from '@core/interfaces';

interface ProductContextInterface {
  product: productCartInterface[];
  setProduct: (product: productCartInterface[]) => void;
  productTotal: number;
  setProductTotal: (params: number) => void;
  addToProduct: (item: productItemInterface) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  removeItem: (id: string) => void;
  getItem: (id: string) => productCartInterface | undefined;
}

const ProductContext = createContext<ProductContextInterface | undefined>(
  undefined,
);

interface productProps {
  children: ReactNode;
}

const ProductProvider = ({children}: productProps): JSX.Element => {
  const {product, setProduct, productTotal, setProductTotal} = useProduct();

  useEffect(() => {
    getTotal();
  }, [product]);

  const getTotal = () => {
    let total = 0;
    product.map((item) => (total += item.total));
    setProductTotal(total);
  };

  const increment = (id: string) => {
    let tempProduct = [...product];
    const selectedProduct = getItem(id);

    if (selectedProduct) {
      if (selectedProduct.stock == selectedProduct.qty) {
        console.log('Stok tidak cukup');
      } else {
        selectedProduct.qty = selectedProduct.qty + 1;
        selectedProduct.total = selectedProduct.price * selectedProduct.qty;
        setProduct([...tempProduct]);
      }
    }
  };

  const decrement = (id: string) => {
    let tempProduct = [...product];
    const selectedProduct = getItem(id);
    if (selectedProduct) {
      if (selectedProduct.qty === 1) {
        removeItem(id);
      } else {
        selectedProduct.qty = selectedProduct.qty - 1;
        selectedProduct.total = selectedProduct.price * selectedProduct.qty;
        setProduct([...tempProduct]);
      }
    }
  };

  const removeItem = (id: string) => {
    let tempProduct = [...product];
    tempProduct = tempProduct.filter((item) => item.id !== id);
    setProduct([...tempProduct]);
  };

  const getItem = (id: string): productCartInterface | undefined => {
    let tempProduct = [...product];
    const selectedProduct = tempProduct.find((item) => item.id == id);
    return selectedProduct;
  };

  const addToProduct = (item: productItemInterface) => {
    let tempProduct = [...product];
    const {code, name, price, uom, id, stock} = item;
    let tempItem: productCartInterface = {
      id,
      uom,
      price,
      name,
      code,
      stock,
      qty: 0,
      total: 0,
    };
    const isExist = getItem(tempItem.id);
    if (isExist) {
      increment(item.id);
    } else {
      tempItem.total = tempItem.price;
      tempItem.qty = 1;
      setProduct([...tempProduct, tempItem]);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        setProductTotal,
        productTotal,
        addToProduct,
        increment,
        decrement,
        removeItem,
        getItem,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductConsumer = () =>
  useContext(ProductContext) as ProductContextInterface;
export {ProductProvider, useProductConsumer};
