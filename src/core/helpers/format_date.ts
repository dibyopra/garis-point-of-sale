import dayjs from 'dayjs';

export const formatDate = (timestamp: number): string => {
  return dayjs.unix(timestamp).format('DD/MM/YYYY');
};