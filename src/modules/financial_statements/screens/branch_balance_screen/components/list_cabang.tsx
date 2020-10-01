import React from 'react';
import {Box} from '@core/components';
import {ItemCabang, ItemCabangInterface} from './item_cabang';

interface ListCabangProps {
  navigate: ({id, name}: {id: string; name: string}) => void;
}

const data: ItemCabangInterface[] = [
  {
    id: 'PST',
    title: 'Pusat',
    value: 5673500,
  },
  {
    id: 'PDN',
    title: 'Pandaan',
    value: 514000,
  },
];

export const ListCabang = ({navigate}: ListCabangProps): JSX.Element => {
  return (
    <Box>
      {data.map((item) => (
        <ItemCabang
          key={item.title}
          {...{item}}
          onPress={() => navigate({id: item.id, name: item.title})}
        />
      ))}
    </Box>
  );
};
