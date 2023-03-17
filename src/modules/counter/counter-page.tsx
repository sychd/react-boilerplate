import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/modules/app/hooks';
import { counterActions } from 'src/modules/counter/counter-slice';
import './counter-page.scss';

export function CounterPage() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className='counter-page'>
      <span>{count}</span>
      <button onClick={() => dispatch(counterActions.incremented())}>+</button>
      <button onClick={() => dispatch(counterActions.decremented())}>-</button>
      <button onClick={() => dispatch(counterActions.amountAdded(10))}>+ 10</button>
    </div>
  );
}
