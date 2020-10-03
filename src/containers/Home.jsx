import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = () => {
  const myList = useSelector(state => state.myList);
  const trends = useSelector(state => state.trends);
  const originals = useSelector(state => state.originals);
  return (
    <div className='App'>

      <Search />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map(item => <CarouselItem key={item.id} {...item} IsList />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

    </div>
  );
};

export default Home;
