import React from 'react';
import {ItemCabang, dataCabang} from './item_cabang';
import {Box} from '@core/components';

const data: dataCabang[] = [
  {
    id: 'pusat',
    namaCabang: 'Pusat',
    totalOmset: 2456000,
    presentase_cabang: 30,
    presentase_pusat: 60,
    total_cabang: 100000,
    total_pusat: 150000,
    tranksaksi: 145,
    hpp: 200000,
    mrsp: 150000,
    ws: 150000,
  },
  {
    id: 'pandaan',
    namaCabang: 'Pandaan',
    totalOmset: 172600,
    presentase_cabang: 30,
    presentase_pusat: 60,
    total_cabang: 100000,
    total_pusat: 150000,
    tranksaksi: 145,
    hpp: 200000,
    mrsp: 150000,
    ws: 150000,
  },
];

interface ListCabangProps {
  navigate: ({id,name}: {id: string,name:string}) => void;
}

export const ListCabang = ({navigate}: ListCabangProps): JSX.Element => {
  return (
    <Box>
      {data.map((item) => {
        return (
          <ItemCabang
            data={item}
            key={item.id}
            onPress={() => navigate({id: item.id,name:item.namaCabang})}
          />
        );
      })}
    </Box>
  );
};
