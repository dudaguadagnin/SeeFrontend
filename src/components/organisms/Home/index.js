import React from 'react';
import CardSliderFilmes from '../../molecules/Filmes/CardSliderFilmes'
import CardSliderSeries from '../../molecules/Series/CardSliderSeries'
import NavBar from '../../molecules/NavBar'
import GenericText from '../../atoms/GenericText';
import Connection from '../../../services/backend.js'
import './index.css'
import axios from 'axios';
import { addMidia } from "../../../store/midias.js";
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'


export const Home = (props) => {
  //console.log(props)
  /*
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
        genre: 'Suspense',
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
    const series2 = [
      {
        "title": "Breaking Bad",
        "description": "Um professor de química descobre que tem câncer e decide começar a produzir metanfetamina para deixar sua família bem financeiramente.",
        "genre_id": 4,
        "parental_rating": "16 anos",
        "year": 2008,
        "season_quantity": 5
      },
      {
        "title": "Game of Thrones",
        "description": "Em um mundo onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, enquanto um exército misterioso de criaturas de gelo avança sobre o Muro que protege o reino do Norte.",
        "genre_id": 4,
        "parental_rating": "16 anos",
        "year": 2011,
        "season_quantity": 7
      },
      {
        "title": "The Walking Dead",
        "description": "Após um apocalipse zumbi, um grupo de sobreviventes tenta se manter vivo em um mundo dominado por mortos-vivos.",
        "genre_id": 4,
        "parental_rating": "16 anos",
        "year": 2010,
        "season_quantity": 8
      },
      {
        "title": "The Big Bang Theory",
        "description": "Leonard e Sheldon são dois físicos que trabalham na mesma universidade. Eles são vizinhos e amigos de longa data. Eles são inteligentes, mas não têm muita habilidade social.",
        "genre_id": 4,
        "parental_rating": "10 anos",
        "year": 2007,
        "season_quantity": 11
      },
      {
        "title": "How I Met Your Mother",
        "description": "Ted Mosby conta a seus filhos como conheceu a mãe deles. A história começa quando Ted está prestes a se casar com sua namorada, Victoria. Ele conta a seus amigos que, quando ele era criança, ele ouviu uma história de seu pai sobre como ele conheceu a mãe dele. Ted então começa a contar a história de como conheceu sua esposa, Tracy.",
        "genre_id": 4,
        "parental_rating": "10 anos",
        "year": 2005,
        "season_quantity": 9
      },
      {
        "title": "The Office",
        "description": "A série se passa em uma empresa fictícia chamada Dunder Mifflin, que vende papel. A série mostra a vida de funcionários de uma empresa de papel, que trabalham em Scranton, Pensilvânia. A série é uma adaptação do programa britânico de mesmo nome.",
        "genre_id": 4,
        "parental_rating": "12 anos",
        "year": 2005,
        "season_quantity": 9
      },
      {
        "title": "The Flash",
        "description": "Após um acidente de laboratório, Barry Allen, um policial forense, ganha a habilidade de se mover a velocidades superiores à da luz. Com isso, ele passa a usar seus poderes para combater o crime, sob o codinome Flash.",
        "genre_id": 4,
        "parental_rating": "12 anos",
        "year": 2014,
        "season_quantity": 4
      },
      {
        "title": "Arrow",
        "description": "Oliver Queen é um jovem bilionário que passa cinco anos preso em uma ilha deserta. Quando ele retorna para Starling City, ele descobre que seu pai foi morto e que sua amada namorada, Laurel Lance, está prestes a se casar com seu melhor amigo, Tommy Merlyn. Oliver então decide usar o dinheiro de sua empresa para viajar pelo mundo e se tornar um herói mascarado.",
        "genre_id": 4,
        "parental_rating": "12 anos",
        "year": 2012,
        "season_quantity": 6
      },
      {
        "title": "Supernatural",
        "description": "Sam e Dean Winchester são caçadores de demônios, que viajam pelo país em um Chevrolet Impala de 1967, lutando contra todo tipo de criatura sobrenatural. Eles são filhos de John Winchester, que os treinou desde criança para caçar o que ele chama de monstros.",
        "genre_id": 4,
        "parental_rating": "12 anos",
        "year": 2005,
        "season_quantity": 13
      },
      {
        "title": "The 100",
        "description": "Após uma guerra nuclear, 100 jovens são enviados para a Terra para ver se ela é habitável novamente.",
        "genre_id": 4,
        "parental_rating": "12 anos",
        "year": 2014,
        "season_quantity": 5
      }
    ]
  */
  const dispatch = useDispatch()
  const [filmes, setFilmes] = React.useState([])
  const [series, setSeries] = React.useState([])
  const [episodios, setEpisodes] = React.useState([])
  React.useEffect(() => {
    const asyncFn = async () => {
      await Promise.all([
        axios.get(`http://localhost:3000/filmes`),
        axios.get(`http://localhost:3000/series`),
        axios.get(`http://localhost:3000/episodios`)
      ])
        .then((res) => {
          dispatch(addMidia(res))
        })
    }
    asyncFn()
  }, [])



  const midia = useSelector((state) => state.midia)
  console.log('chamada midia', midia)



  return (
    <div className='home'>
      {midia.filmes.length === 0
        ?
        <GenericText>loading</GenericText>
        :
        <div>
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
            {midia.filmes[0].map((film, inx) => {
              return (
                <div className='home-space-carrossel'>
                  <CardSliderFilmes midia={film} />
                </div>)
            })}
          </div>
          <div>
            <div className='home-space-text'>
              <GenericText size="subtitlebold">Séries</GenericText>
            </div>
            {midia.series[0].map((ser, inx) => {
              return (
                <div className='home-space-carrossel'>
                  <CardSliderSeries midia={ser}/>
                </div>)
            })}
          </div>
        </div>
      }

    </div>
  );
}


// const mapStateToProps = state => ({
//   ...state
// });
// const mapDispatchToProps = dispatch => ({
//   rotateAction: (payload) => dispatch(rotateAction(payload)),
//   startAction: () => dispatch(startAction),
//   stopAction: () => dispatch(stopAction)
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home
