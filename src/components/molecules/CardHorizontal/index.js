import React from 'react';
import CardTitle from '../../atoms/CardTitle';
import GenericText from '../../atoms/GenericText';
import CardImage from '../../atoms/CardImage';
import Star from '../../atoms/Star';
import './index.css'
//import { useNavigation } from '@react-navigation/native';

const CardHorizontal = (props) => {
  console.log('hirizontal', props)
  const series =
    {
        title: 'serie titulo',
        duration: '2h, 30min',
        cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
        temporadas: [
            [
                {
                    title: 'serie 1',
                    duration: '2h, 30min',
                    cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
                },
                {
                    title: 'serie 2',
                    duration: '2h, 30min',
                    cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
                },
                {
                    title: 'serie 3',
                    duration: '2h, 30min',
                    cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
                }
            ],
            [
                {
                    title: 'serie 1',
                    duration: '2h, 30min',
                    cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
                },
                {
                    title: 'serie 2',
                    duration: '2h, 30min',
                    cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
                },
                {
                    title: 'serie 3',
                    duration: '2h, 30min',
                    cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
                }
            ],
        ]
    }

  return (
    <div className='card-horizontal'>
      <div className='card-horizontal-body-image'>
        <CardImage cartaz={props.item.cartaz} size="horizontal"/>
      </div>
      <div className='card-horizontal-body-title'>
        <CardTitle>{props.item.title}</CardTitle>
      </div>
      <div className='card-horizontal-body-info'>
        <div className='card-horizontal-body-time'></div>
        <GenericText size="small" color="gray">{props.item.duration}</GenericText>
      </div>
    </div>
  );
}
export default CardHorizontal