import {useState, useMemo} from 'react';
import {productCartInterface} from '@core/interfaces';

export const useProduct = (): {
  product: productCartInterface[];
  setProduct: (product: productCartInterface[]) => void;
  productTotal: number;
  setProductTotal: (params: number) => void;
} => {
  const [product, setProduct] = useState<productCartInterface[]>([]);
  const [productTotal, setProductTotal] = useState<number>(0);
  const productState = useMemo(
    () => ({product, setProduct, productTotal, setProductTotal}),
    [product, productTotal],
  );
  return productState;
};
