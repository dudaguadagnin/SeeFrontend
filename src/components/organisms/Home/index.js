import React from 'react';
import CardSlider from '../../molecules/CardSlider'
import NavBar from '../../molecules/NavBar'
import GenericText from '../../atoms/GenericText';
import './index.css'

export const Home = (props) => {
  //console.log(props)
  const filmes = [
    {
      title: 'Aquaman',
      description: 'A cidade de Atlantis, que já foi lar de uma das mais avançadas civilizações do mundo, agora é um reino submerso dominado pelo ganancioso Rei Orm. Com um vasto exército a seu dispor, Orm planeja conquistar tanto os demais reinos do oceano, quanto o mundo da superfície. Em seu caminho está Aquaman, meio-humano e meio-atlante, e verdadeiro herdeiro do trono. Com a ajuda da princesa Mera, Aquaman precisa recuperar o lendário Tridente de Atlan e aceitar seu destino como protetor das profundezas.',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '2h, 24min',
      year: 2018,
      cartaz: 'https://musicart.xboxlive.com/7/3cf35000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
    },
    {
      title: 'Corpo Fechado',
      description: 'Um espantoso desastre de trem deixa os Estados Unidos em choque. Todos os passageiros das locomotivas acabam mortos, exceto David Dunne, que sai completamente ileso do acidente, deixando todos, inclusive os médicos e ele próprio, em choque. Enquanto busca explicações sobre o que poderia ter salvado sua vida, David encontra Elijah Price, um desconhecido que apresenta uma explicação no mínimo bizarra para o fato.',
      genre: 'Mistério',
      evaluation: '4.5',
      duration: '1h, 47min',
      year: 2001,
      cartaz: 'https://br.web.img3.acsta.net/medias/nmedia/18/87/26/09/19873656.jpg'
    },
    {
      title: 'Moonwalker',
      description: 'Mr. Big é um poderoso traficante de drogas que oferece um grande perigo às crianças. Para defendê-las, surge Michael na pele de um herói extraterrestre com poderes mágicos.',
      genre: 'Musical',
      evaluation: '4.5',
      duration: '2h, 30min',
      year: 1989,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/f/f9/Moonwalker.jpg'
    },
    {
      title: 'Animais Fantásticos: Os Crimes de Grindel',
      description: 'Newt Scamander reencontra os queridos amigos Tina Goldstein, Queenie Goldstein e Jacob Kowalski. Ele é recrutado pelo seu antigo professor em Hogwarts, Alvo Dumbledore, para enfrentar o terrível bruxo das trevas Gellert Grindelwald, que escapou da custódia da Macusa (Congresso Mágico dos EUA) e reúne seguidores, dividindo o mundo entre seres de magos sangue puro e seres não-mágicos.',
      genre: 'Fantasia',
      evaluation: '4.5',
      duration: '2h, 14min',
      year: 2018,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/25/Fantastic_Beasts_The_Crimes_of_Grindelwald.jpg/250px-Fantastic_Beasts_The_Crimes_of_Grindelwald.jpg'
    },
    {
      title: 'Thor',
      description: 'Como filho de Odin, rei dos deuses nórdicos, Thor logo herdará o trono de Asgard de seu idoso pai. Porém, no dia de sua coroação, Thor reage com brutalidade quando os inimigos dos deuses entram no palácio violando o tratado. Como punição, Odin manda Thor para a Terra. Enquanto seu irmão Loki conspira em Asgard, Thor, agora sem seus poderes, enfrenta sua maior ameaça.',
      genre: 'Ação',
      evaluation: '4.5',
      duration: '1h, 54min',
      year: 2011,
      cartaz: 'https://br.web.img3.acsta.net/pictures/22/05/24/16/24/4837466.jpg'
    },
  ]
  const series = [
    {
      title: 'ksdkfdskfdsf',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      year: 2020,
      seasonQuantity: 5,
      seasonNumber: 5,
      episodes: 10,
      episodesTitle: 'esse é um episodio',
      episodeDuration: '20min',
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
      ],
      cartaz: 'https://img.travessa.com.br/livro/BA/06/065b06ff-ada9-42ed-9dc7-426f1b0fe8b1.jpg'
    },
    {
      title: 'dklfndfbfd',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      year: 2020,
      seasonQuantity: 5,
      seasonNumber: 5,
      episodes: 10,
      episodesTitle: 'esse é um episodio',
      episodeDuration: '20min',
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
      ],
      cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
    },
    {
      title: 'kdsfkgf',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      year: 2020,
      seasonQuantity: 5,
      seasonNumber: 5,
      episodes: 10,
      episodesTitle: 'esse é um episodio',
      episodeDuration: '20min',
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
      ],
      cartaz: 'https://img.travessa.com.br/livro/BA/06/065b06ff-ada9-42ed-9dc7-426f1b0fe8b1.jpg'
    },
    {
      title: 'dfkkgopogre',
      description: 'é um filme bacana',
      genre: 'Ação',
      evaluation: '4.5',
      year: 2020,
      seasonQuantity: 5,
      seasonNumber: 5,
      episodes: 10,
      episodesTitle: 'esse é um episodio',
      episodeDuration: '20min',
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
      ],
      cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
    },
  ]

  return (
    <div className='home'>
      <NavBar
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
      >
      </NavBar>
      <div className='home-destaques'>
        <div className='home-space-text'>
          <GenericText size="subtitlebold">Destaques</GenericText>
        </div>
        <div className='home-space-carrossel'>
          <CardSlider midia={filmes} />
        </div>
        <div className='home-space-carrossel'>
          <CardSlider midia={filmes} />
        </div>
        <div className='home-space-carrossel'>
          <CardSlider midia={filmes} />
        </div>
      </div>
      <div>
        <div className='home-space-text'>
        <GenericText size="subtitlebold">Séries</GenericText>
        </div>
        <div className='home-space-carrossel'>
          <CardSlider midia={series} />
        </div>
        <div className='home-space-carrossel'>
          <CardSlider midia={series} />
        </div>
      </div>
    </div>
  );
}

export default Home;
/*
<Button
          title="Add some friends"
          onPress={() =>
            props.navigation.navigate('Player')
          }
        />

*/
