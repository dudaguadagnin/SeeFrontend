import React from 'react';
import Card from '../../molecules/Card'
import CardSlider from '../../molecules/CardSlider'
import Videoks from '../../molecules/Videoks';
// import Star from './src/components/atoms/Star';
//import { CardImage } from './src/components/atoms/CardImage';
//import GenreIcon from './src/components/atoms/GenreIcon';

export const Home = (props) => {
  const filmes = [
    {
      title: 'Filme titulo',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '2h, 30min',
      year: 2020,
      cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
    },
    {
      title: 'Filme titulo',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '2h, 30min',
      year: 2020,
      cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
    },
    {
      title: 'Filme titulo',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '2h, 30min',
      year: 2020,
      cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
    },
    {
      title: 'Filme titulo',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '2h, 30min',
      year: 2020,
      cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
    },
    {
      title: 'Filme titulo',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '2h, 30min',
      year: 2020,
      cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
    },
  ]
  const series = [
    {
      title: 'ksdkfdskfdsf',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '2h, 30min',
      year: 2020,
      seasonQuantity: 5,
      seasonNumber: 5,
      episodes: 10,
      episodesTitle: 'esse é um episodio',
      episodeDuration: '20min',
      cartaz: 'https://img.travessa.com.br/livro/BA/06/065b06ff-ada9-42ed-9dc7-426f1b0fe8b1.jpg'
    },
    {
      title: 'dklfndfbfd',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '2h, 30min',
      year: 2020,
      seasonQuantity: 5,
      seasonNumber: 5,
      episodes: 10,
      episodesTitle: 'esse é um episodio',
      episodeDuration: '20min',
      cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
    },
    {
      title: 'kdsfkgf',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '2h, 30min',
      year: 2020,
      seasonQuantity: 5,
      seasonNumber: 5,
      episodes: 10,
      episodesTitle: 'esse é um episodio',
      episodeDuration: '20min',
      cartaz: 'https://img.travessa.com.br/livro/BA/06/065b06ff-ada9-42ed-9dc7-426f1b0fe8b1.jpg'
    },
    {
      title: 'dfkkgopogre',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '2h, 30min',
      year: 2020,
      seasonQuantity: 5,
      seasonNumber: 5,
      episodes: 10,
      episodesTitle: 'esse é um episodio',
      episodeDuration: '20min',
      cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
    },
  ]



  return (
    <div className='home'>
      <CardSlider midia={filmes}/>
      <CardSlider midia={series}/>
    </div>
  );
}

export default Home;