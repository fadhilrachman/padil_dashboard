import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const pemasukanSlice = createSlice({
  name: "pemasukan",
  initialState: {
    name: "padil",
  },
  reducers: {
    incremen: (state) => {
      state.name = "padil";
    },
  },
});

export default pemasukanSlice.reducer;
