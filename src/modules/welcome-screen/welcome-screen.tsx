import React from 'react';
import { Link } from 'react-router-dom';

import CatImg from 'src/assets/images/cat.jpeg';
import StarSVG from 'src/assets/images/star.svg';
import { useAppDispatch } from 'src/modules/app/hooks';
import { authActions } from 'src/modules/auth/auth-slice';
import 'src/modules/welcome-screen/welcome-screen.scss';

export function WelcomeScreen() {
  const dispatch = useAppDispatch();
  return (
    <div className='welcome-screen'>
      <div className='welcome-screen__images-container'>
        <img src={CatImg} alt='Cat' className='welcome-screen__image' />
        <StarSVG className='welcome-screen__image' />
        <div className='welcome-screen__image welcome-screen__image_cat-bg' />
      </div>
      <span className='welcome-screen__title' onClick={() => dispatch(authActions.authorized())}>
        Hello!
      </span>
      <div>
        <Link to='/doggies'>doggies</Link>
      </div>
    </div>
  );
}
