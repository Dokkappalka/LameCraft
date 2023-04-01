import { useRef } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MainState {
  isModalOpened: boolean
  isDarkTheme: boolean
  mapEndRef: HTMLDivElement | null
  donateEndRef: HTMLDivElement | null
  mainEndRef: HTMLDivElement | null
}

const initialState: MainState = {
  isModalOpened: false,
  isDarkTheme: false,
  mapEndRef: null,
  donateEndRef: null,
  mainEndRef: null,
}

export const MainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeModalMode(state, action: PayloadAction<boolean>) {
      state.isModalOpened = action.payload
    },
    changeDarkTheme(state, action: PayloadAction<boolean>) {
      state.isDarkTheme = action.payload
    },
    setMapEndRef(state, action: PayloadAction<any>) {
      state.mapEndRef = action.payload
    },
    setDonateEndRef(state, action: PayloadAction<any>) {
      state.donateEndRef = action.payload
    },
    setMainEndRef(state, action: PayloadAction<any>) {
      state.mainEndRef = action.payload
    },
  },
})

export default MainSlice.reducer
