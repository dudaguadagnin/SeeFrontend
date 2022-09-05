import React from 'react';
import CardTitle from '../../atoms/CardTitle';
import GenericText from '../../atoms/GenericText';
import CardImage from '../../atoms/CardImage';
import Star from '../../atoms/Star';
import './index.css'
import { useNavigation } from '@react-navigation/native';


export const Card = (props) => {

  console.log('card', props)
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
      title: 'serie titulo',
      duration: '2h, 30min',
      cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74'
    },
    {
      title: 'serie titulo',
      duration: '2h, 30min',
      cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQtwsxsHgdgWIND4fSpPITza0IkQHiqZDXdeVicRWtG9JhFAws01znsKfW8XeqW_2WWBmJpqpnmdN9b7uOy3ePJ2P0Rb30PJsTNGWkXTV0aFZDawHX8kIN3Z.jpg?r=cc9'
    },
    {
      title: 'serie titulo',
      duration: '2h, 30min',
      cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfvDB1xGZuh-SkB7WccIvvvpGTvyOaoYqtePmpAV3pfCbB01RJbg2srq_yIL9UXu-tvyPH9oHIPbiXRfUsL8P7d7LLHxwZeSGpen3Bwyw7gCzFO0XYaBPOku.jpg?r=8da'
    }
  ]
  //const RedirectTo = () => {
  //  console.log('clicou',props.item.title)
    // navigation.navigate('Home')
  //  navigation.navigate('InfoMidia')
  //}


  //const navigation = useNavigation();  onClick={() => navigation.navigate('InfoMidia')}
  return (
    <div className='card' >
      <div className='card-body-image'>
        <CardImage cartaz={props.item.cartaz} size="medium" />
      </div>
      <div className='card-body-title'>
        <CardTitle>{props.item.title}</CardTitle>
      </div>
      <div className='card-body-info'>
        <div className='card-info-avaliate'>
          <Star size="pequena" />
          <GenericText size="small" color="gray">{props.item.evaluation}</GenericText>
        </div>
        <div className='card-body-time'>
        </div>
        <GenericText size="small" color="gray">{props.item.duration}</GenericText>
      </div>
    </div>
  );
}

export default Card;