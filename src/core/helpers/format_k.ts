export const formatK = (x: number) => {
  if (isNaN(x)) return x;

  if (x < 9999) {
    return `Rp ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  }

  if (x < 1000000) {
    return Math.round(x / 1000) + 'Rb';
  }
  if (x < 10000000) {
    return (x / 1000000).toFixed(2) + 'Jt';
  }

  if (x < 1000000000) {
    return Math.round(x / 1000000) + 'M';
  }

  if (x < 1000000000000) {
    return Math.round(x / 1000000000) + 'T';
  }

  return '1T+';
};

export const formatRp = (x: number) => {
  if (isNaN(x)) return x;

  return `Rp ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};
