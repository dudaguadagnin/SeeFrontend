import React from 'react';
import CardImage from '../../atoms/CardImage';
import GenericText from '../../atoms/GenericText'
import Star from '../../atoms/Star'
import GenreIcon from '../../atoms/GenreIcon'
import CardSlider from '../../molecules/CardSlider'
import Videoks from '../../molecules/Videoks';
import NavBar from '../../molecules/NavBar'
import Play from '../../../../assets/play.png'
import Arrow from '../../../../assets/arrow.png'
import './index.css'

export const InfoMidia = (props) => {
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
        <div className='InfoMidia'>
            <NavBar
                to={'Player'}
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
            ></NavBar>
            <div className='info-header'>
                <div><CardImage size="small" cartaz="https://upload.wikimedia.org/wikipedia/pt/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg" /></div>
                <div className="info-header-inicial-info">
                    <GenericText size="large">Agente Oculto</GenericText>
                    <div className='info-avalitate inf-flex'>
                        <div className='info-header-avaliate inf-flex'>
                            <div className='info-header-avaliate'><Star pequena /></div> <GenericText size="small" className="info-avaliate-padd">4.5</GenericText>
                        </div>
                        <div className='info-header-genre'>
                            <GenreIcon />
                        </div>
                    </div>
                    <div className='info-header-text inf-flex'>
                        <div className='info-header-text-padd'>
                            <GenericText size="small">Duração:</GenericText>
                        </div>
                        <GenericText size="small" color="gray">2h, 30min</GenericText>
                    </div>
                    <div className='info-header-text inf-flex'>
                        <div className='info-header-text-padd'>
                            <GenericText size="small">Ano:</GenericText>
                        </div>
                        <GenericText size="small" color="gray">2021</GenericText>
                    </div>
                    <div className='info-header-text inf-flex'>
                        <div className='info-header-text-padd'>
                            <GenericText size="small">Classificação:</GenericText>
                        </div>
                        <GenericText size="small" color="gray">+14</GenericText>
                    </div>
                    <div className='info-header-button'>
                        <img className='info-play-button' src={Play} />
                        <span className='info-header-assistir'>Assistir agora</span>
                    </div>

                </div>
            </div>
            <div className='info-sinopse'>
                <GenericText>Sinopse:</GenericText>
                <div className='info-sinopse-description'>
                    <GenericText color="gray">Agente Oculto segue Gentry, um dos melhores e mais letais mercenários da CIA - que ninguém sabe a real identidade. Ele embarca em uma missão pela Europa para resgatar seu contratante, Sir Donald Fitzroy, e sua família, de Lloyd, membro de uma gigantesca corporação francesa e ex-oficial da CIA. Porém, o mercenário acaba</GenericText>
                </div>
                <div className='info-sinopse-ler'>
                    <div className='info-sinopse-ler-mais'>
                        <img src={Arrow} className='info-sinopse-arrow-ler' />
                        <GenericText>Ler mais</GenericText>
                    </div>
                    <div className='info-sinopse-ler-menos'>
                        <img src={Arrow} className='info-sinopse-arrow-ler-menos' />
                        <GenericText>Ler menos</GenericText>
                    </div>
                </div>
            </div>
            <div className='info-avaliate'>
                <GenericText>Gostou do filme? Deixe sua avaliação:</GenericText>
            </div>
            <div className='info-read-comment'>
                <GenericText>Comentarios:</GenericText>
                <div></div>
                <div className='info-read-comment-mais'>
                    <img src={Arrow} className='info-sinopse-arrow-ver-mais' />
                    <GenericText>Ver mais</GenericText>
                </div>
                <div className='info-read-comment-menos'>
                    <img src={Arrow} className='info-sinopse-arrow-ver-menos' />
                    <GenericText>Ver menos</GenericText>
                </div>
            </div>
            <div className='Info-write-comment'></div>
            <div className='Info-footer'>
                <GenericText>Também pode gostar de:</GenericText>
            </div>
        </div>
    );
}

export default InfoMidia;
/*
<Button
          title="Add some friends"
          onPress={() =>
            props.navigation.navigate('Player')
          }
        />

*/
