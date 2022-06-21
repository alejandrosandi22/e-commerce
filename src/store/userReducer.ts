/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { CartType } from 'types';

type State = {
  id: string;
  name: string;
  email: string;
  cart: CartType;
};

type Action = {
  type: string;
  payload: State;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: null as State | null,
  reducers: {
    setUser: (state: State | null, action: Action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
