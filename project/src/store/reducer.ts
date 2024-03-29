import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_CITY_NAME } from '../const';
import { changeCity, setOffers } from './action';
import { Offers } from '../types/type';

const initialState = {
  cityName: INITIAL_CITY_NAME,
  offers: [] as Offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      if (action.payload === state.cityName) {
        return;
      }
      state.cityName = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
