import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: false,
  reducers: {
    setProfile: (_state: boolean, action: PayloadAction<boolean>) =>
      action.payload,
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
