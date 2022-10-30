import { createSlice } from '@reduxjs/toolkit'



export const filmesSlice = createSlice({
  name: 'filmes',
  initialState: {
    filmes: [],
    series: [],
    episodios: [],
    busca: [],
    acao: [],
    aventura: [],
    comedia: [],
    drama: [],
    espionagem: [],
    fantasia: [],
    ficcao: [],
    guerra: [],
    romance: [],
    suspense: [],
    terror: []
  },
  reducers: {
    addMidia: (state, action) => {
      // filmes
      if (action.payload[0].data.length >= 8) {
        let novoArray = []
        for (let w = 0; w < action.payload[0].data.length; w = w + 8) {
          novoArray.push(action.payload[0].data.slice(w, w + 8));
        }
        for (let i = 0; i < action.payload[0].data.length; i++) {
          state.busca.push(action.payload[0].data[i])
          if (action.payload[0].data[i].genre_id === 1) {
            state.acao.push(action.payload[0].data[i])
          }
          if (action.payload[0].data[i].genre_id === 2) {
            state.aventura.push(action.payload[0].data[i])
          }
          if (action.payload[0].data[i].genre_id === 3) {
            state.comedia.push(action.payload[0].data[i])
          }
          if (action.payload[0].data[i].genre_id === 4) {
            state.drama.push(action.payload[0].data[i])
          }
          if (action.payload[0].data[i].genre_id === 5) {
            state.espionagem.push(action.payload[0].data[i])
          }
          if (action.payload[0].data[i].genre_id === 6) {
            state.fantasia.push(action.payload[0].data[i])
          }
          if (action.payload[0].data[i].genre_id === 7) {
            state.ficcao.push(action.payload[0].data[i])
          }
          if (action.payload[0].data[i].genre_id === 8) {
            state.guerra.push(action.payload[0].data[i])
          }
          if (action.payload[0].data[i].genre_id === 9) {
            state.romance.push(action.payload[0].data[i])
          }
          if (action.payload[0].data[i].genre_id === 10) {
            state.suspense.push(action.payload[0].data[i])
          }
          if (action.payload[0].data[i].genre_id === 11) {
            state.terror.push(action.payload[0].data[i])
          }
        }
        state.filmes.push(novoArray)
        
      }
      else {
        state.filmes.push(action.payload[0].data)
        state.busca.push(action.payload[0].data)
      }

      // series
      if (action.payload[1].data.length >= 8) {
        let novoArray = []
        for (let i = 0; i < action.payload[1].data.length; i++) {
          state.busca.push(action.payload[1].data[i])
          if (action.payload[1].data[i].genre_id === 1) {
            state.acao.push(action.payload[1].data[i])
          }
          if (action.payload[1].data[i].genre_id === 2) {
            state.aventura.push(action.payload[1].data[i])
          }
          if (action.payload[1].data[i].genre_id === 3) {
            state.comedia.push(action.payload[1].data[i])
          }
          if (action.payload[1].data[i].genre_id === 4) {
            state.drama.push(action.payload[1].data[i])
          }
          if (action.payload[1].data[i].genre_id === 5) {
            state.espionagem.push(action.payload[1].data[i])
          }
          if (action.payload[1].data[i].genre_id === 6) {
            state.fantasia.push(action.payload[1].data[i])
          }
          if (action.payload[1].data[i].genre_id === 7) {
            state.ficcao.push(action.payload[1].data[i])
          }
          if (action.payload[1].data[i].genre_id === 8) {
            state.guerra.push(action.payload[1].data[i])
          }
          if (action.payload[1].data[i].genre_id === 9) {
            state.romance.push(action.payload[1].data[i])
          }
          if (action.payload[1].data[i].genre_id === 10) {
            state.suspense.push(action.payload[1].data[i])
          }
          if (action.payload[1].data[i].genre_id === 11) {
            state.terror.push(action.payload[1].data[i])
          }
        }

        for (let q = 0; q < action.payload[1].data.length; q = q + 5) {
          novoArray.push(action.payload[1].data.slice(q, q + 5));
        }

        state.series.push(novoArray);
      }
      else {
        state.series.push(action.payload[1].data)
        state.busca.push(action.payload[1].data)
      }

      // episodios
      if (action.payload[2].data.length >= 8) {
        let novoArray = []
        for (let i = 0; i < action.payload[2].data.length; i = i + 10) {
          novoArray.push(action.payload[2].data.slice(i, i + 10))
        }
        state.episodios.push(novoArray);
      }
      else {
        state.episodios.push(action.payload[2].data)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addMidia } = filmesSlice.actions

export default filmesSlice.reducer