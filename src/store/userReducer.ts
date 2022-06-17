/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

type State = {
  name: string;
  email: string;
  cart: {
    items: [
      {
        productId: string;
        quantity: number;
      }
    ];
  };
};

type Action = {
  type: string;
  payload: State;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    cart: {
      items: [
        {
          productId: '',
          quantity: 0,
        },
      ],
    },
  },
  reducers: {
    setUser: (state: any, action: Action) => {
      console.log(state);
      console.log(action);
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
