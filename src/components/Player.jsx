import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';

const Player = (props) => {
  const { id } = props.match.params;
  const Hasplaying = Object.keys(useSelector(state => state.playing)).length > 0;
  const source = useSelector(state => state.playing.source);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'GET_VIDEO_SOURCE',
      payload: id,
    });
  }, []);

  return Hasplaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
            Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

export default Player;
