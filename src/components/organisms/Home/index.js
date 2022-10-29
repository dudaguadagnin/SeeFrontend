import React from 'react';
import CardSlider from '../../molecules/CardSlider'
import NavBar from '../../molecules/NavBar'
import GenericText from '../../atoms/GenericText';
import './index.css'
import axios from 'axios';
import { addMidia } from "../../../store/midias.js";
import { useSelector, useDispatch } from 'react-redux'
import Load from '../../atoms/Loader/index.js'
import Erro from '../Erro/index.js'
export const Home = (props) => {

  const dispatch = useDispatch()
  const [Err, setErr] = React.useState(false)
  const [filmes, setFilmes] = React.useState([])
  const [series, setSeries] = React.useState([])

  React.useEffect(() => {
    const asyncFn = async () => {
      await Promise.all([
        axios.get(`http://localhost:3000/filmes`),
        axios.get(`http://localhost:3000/series`),
        axios.get(`http://localhost:3000/episodios`)
      ])
        .then((res) => {
          setFilmes(res[0].data);
          setSeries(res[1].data);
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
        ? Err === true
          ? <Erro />
          : <div className='home-loading'>
            <Load />
          </div>
        : <div>
          <NavBar
            activeClassName="active-link"
            onClick={() => closeMenu()}
            filmes={filmes}
            series={series}
          >
          </NavBar>
          <div className='home-destaques'>
            <div className='home-space-text'>
              <GenericText size="subtitlebold">Destaques</GenericText>
            </div>
            {midia.filmes[0].map((film, inx) => {
              return (
                <div className='home-space-carrossel'>
                  <CardSlider midia={film} />
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
                  <CardSlider midia={ser} />
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
