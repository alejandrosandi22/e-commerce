import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartType } from 'types';

interface UserState {
  id: string;
  name: string;
  email: string;
  cart: CartType;
}

const initialState = null as UserState | null;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser(_state: UserState | null, action: PayloadAction<UserState | null>) {
      return action.payload;
    },
  },
});

export const { setUser } = counterSlice.actions;
export default counterSlice.reducer;
