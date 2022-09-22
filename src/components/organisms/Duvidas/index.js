import React from 'react';
import GenericText from '../../atoms/GenericText/index.js'
import ListOption from '../../molecules/ListOptions';
import NavBar from '../../molecules/NavBar'
import './index.css'


export const Duvidas = (props) => {
    const [duvidas] = React.useState([
        {
            title: 'Onde consigo assistir o filme?',
            subtitle: 'Para assistir algum filme ou série se seu intreresse você pode:',
            pode: ['1 - Clicar em algum cartão que contenha o filme escolhido. Você será enviado para a tela de informações do conteudo escolhido.',
                '2- Clicar no botão que contem o texto “Assistir agora”. ',
                '3 - Pronto! Agora é so pegar a pipoca e curtir seu filme.'],
            oupode: ['1 - Abrir o menu no canto superior esquerdo.',
                '2 - Selecionar filmes, séries ou escolher um gênero.',
                '3 - Clicar em um cartão.\n',
                '4 - Clicar no botão que contem o texto “Assistir agora”. \n',
                '5 - Pronto! Agora é so pegar a pipoca e curtir seu filme']
        },
        {
            title: 'Como acesso os filmes de ação?',
            subtitle: 'Para assistir algum filme ou série se seu intreresse você pode:',
            pode: ['1 - Clicar em algum cartão que contenha o filme escolhido. Você será enviado para a tela de informações do conteudo escolhido.',
                '2- Clicar no botão que contem o texto “Assistir agora”. ',
                '3 - Pronto! Agora é so pegar a pipoca e curtir seu filme.'],
            oupode: ['1 - Abrir o menu no canto superior esquerdo.',
                '2 - Selecionar filmes, séries ou escolher um gênero.',
                '3 - Clicar em um cartão.',
                '4 - Clicar no botão que contem o texto “Assistir agora”. ',
                '5 - Pronto! Agora é so pegar a pipoca e curtir seu filme']
        },
        {
            title: 'Não estou encontrando as séries',
            subtitle: 'Para assistir algum filme ou série se seu intreresse você pode:',
            pode: ['1 - Clicar em algum cartão que contenha o filme escolhido. Você será enviado para a tela de informações do conteudo escolhido.',
                '2- Clicar no botão que contem o texto “Assistir agora”. ',
                '3 - Pronto! Agora é so pegar a pipoca e curtir seu filme.'],
            oupode: ['1 - Abrir o menu no canto superior esquerdo.',
                '2 - Selecionar filmes, séries ou escolher um gênero.',
                '3 - Clicar em um cartão.',
                '4 - Clicar no botão que contem o texto “Assistir agora”. ',
                '5 - Pronto! Agora é so pegar a pipoca e curtir seu filme']
        },
        {
            title: 'Meu filme não funciona, o que eu faço?',
            subtitle: 'Para assistir algum filme ou série se seu intreresse você pode:',
            pode: ['1 - Clicar em algum cartão que contenha o filme escolhido. Você será enviado para a tela de informações do conteudo escolhido.',
                '2- Clicar no botão que contem o texto “Assistir agora”. ',
                '3 - Pronto! Agora é so pegar a pipoca e curtir seu filme.'],
            oupode: ['1 - Abrir o menu no canto superior esquerdo.',
                '2 - Selecionar filmes, séries ou escolher um gênero.',
                '3 - Clicar em um cartão.',
                '4 - Clicar no botão que contem o texto “Assistir agora”. ',
                '5 - Pronto! Agora é so pegar a pipoca e curtir seu filme']
        }
    ])
    return (
        <div className='duvida-content'>
            <NavBar
            activeClassName="active-link"
            exact
          >
          </NavBar>
            <div className='duvida-header'>
                <GenericText size="subtitlebold">Dúvidas frequentes</GenericText>
            </div>
            <div>
                {
                    duvidas.map((duv, inx) => {
                        return(<ListOption props={duv}>{duv.title}</ListOption>)
                    })
                }
            </div>
        </div>
    );
}

export default Duvidas;
