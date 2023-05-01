import { configureStore } from "@reduxjs/toolkit";
import pengeluaranSlic from "./pengeluaran";

const store = configureStore({
  reducer: {
    pengeluaran: pengeluaranSlic,
  },
});

export default store;
