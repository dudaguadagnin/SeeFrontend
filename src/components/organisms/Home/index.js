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
import Load from '../../atoms/Loader/index.js'
import Erro from '../Erro/index.js'


export const Home = (props) => {

  const dispatch = useDispatch()
  const [Err, setErr] = React.useState(false)
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
        .catch((err) => {
          setErr(true)
        })
    }
    asyncFn()
  }, [])



  const midia = useSelector((state) => state.midia)

  return (
    <div className='home'>
      {midia.filmes.length === 0
        ?
        Err === true ?
        <Erro />
        :
        <div className='home-loading'>
          <Load />
          </div>
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
