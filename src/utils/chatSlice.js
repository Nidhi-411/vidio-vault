import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length >= LIVE_CHAT_COUNT) {
        state.messages.shift(); // Remove the first element
      }
      state.messages.push(action.payload); // Add the new message at the end
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
