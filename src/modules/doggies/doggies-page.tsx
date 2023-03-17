import React from 'react';
import './doggies-page.scss';
import { doggieApiSlice, useFetchBreedsQuery } from 'src/modules/doggies/doggies-slice';

export function DoggiesPage() {
  const { data = [], isFetching } = useFetchBreedsQuery();
  console.log(doggieApiSlice);
  return (
    <div className='doggies-page'>
      <div>Amount: {data.length}</div>
      <div>Is fetching: {isFetching ? '+' : '-'}</div>
      <div className='doggies-page__content'>
        {data.map((breed) => {
          return (
            <div key={breed.id}>
              <div>
                {breed.name}, {breed.id}
              </div>
              <img src={breed.image.url} alt={breed.name} height={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
