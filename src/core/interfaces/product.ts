export interface productItemInterface {
  id: string;
  name: string;
  code: string;
  stock: number;
  price: number;
  uom: 'Pcs';
}

export interface productCartInterface extends productItemInterface {
  qty: number;
  total: number;
}
