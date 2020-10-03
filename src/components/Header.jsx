import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const user = useSelector(state => state.user);
  const hasuser = Object.keys(user).length > 0;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT_REQUEST',
      payload: {},
    });
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasuser ?
            <img src={gravatar(user.email)} alt='' /> :
            <img src={userIcon} alt='' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {hasuser ?
            <li><a href='/'>{user.name}</a></li> :
            null
          }
          {hasuser ? (
            <li>
              <a href='#logout' onClick={handleLogout}>
              Cerrar Sesión
              </a>
            </li>
          ) : (
            <Link to='/login'>
          Iniciar Sesiòn
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};
export default Header;
