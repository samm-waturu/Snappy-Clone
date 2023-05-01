import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cameraImg : null
  // status: 'idle',
};

export const camSlice = createSlice({
  name: 'cam',
  initialState,
  reducers: {
    setCamImg: (state,action) => {
      state.cameraImg = action.payload;
    },
    resCamImg: (state) => {
      state.cameraImg = null;
    },
  },

});

export const { setCamImg, resCamImg } = camSlice.actions;
export const selectCamImg = (state) => state.cam.cameraImg;
export default camSlice.reducer;
