import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import RemoveIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, IsList } = props;
  const dispatch = useDispatch();
  const handleSetFavorite = (idselect) => {
    dispatch({
      type: 'SET_FAVORITE',
      payload: idselect,
    });
  };
  const handleDeleteFavorite = (idselect) => {
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: idselect,
    });
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={playIcon}
            alt='Play Icon'
          />
          {IsList ? (
            <img
              className='carousel-item__details--img'
              src={RemoveIcon}
              alt='Remove Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={() => handleSetFavorite(id)}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
