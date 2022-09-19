import { createSlice } from '@reduxjs/toolkit'

export const filmesSlice = createSlice({
  name: 'filmes',
  initialState: {
    filmes: [],
    series: [],
    episodios: [],
  },
  reducers: {
    addMidia: (state, action) => {
      // filmes
      if (action.payload[0].data.length >= 8) {
        let novoArray = []
        for (let i = 0; i < action.payload[0].data.length; i = i + 8) {
          novoArray.push(action.payload[0].data.slice(i, i + 8));
        }
        state.filmes.push(novoArray)
      }
      else {
        state.filmes.push(action.payload[0].data)
      }

      // series
      if (action.payload[1].data.length >= 8) {
        let novoArray = []

        for (let i = 0; i < action.payload[1].data.length; i = i + 5) {
          novoArray.push(action.payload[1].data.slice(i, i + 5));
        }
        state.series.push(novoArray);
      }
      else {
        state.series.push(action.payload[1].data)
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