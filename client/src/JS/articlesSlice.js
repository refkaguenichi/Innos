import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your API base URL

// Async thunk to fetch articles
export const fetchArticles = createAsyncThunk('articles', async (query) => {
   console.log('Fetch articles', query);
  const headers= {
    authorization: localStorage.getItem("token"),
  }
  const response = await axios.get(`${API_BASE_URL}/api/articles`, { params: query, headers });
  return response.data;
});

// Slice
const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    query:{type: 'nytimes'}
  },
  reducers: {
    updateQuery: (state, action) => {
      let query={ ...state.query, ...action.payload }
      state.query = Object.fromEntries(
        Object.entries(query).filter(([_, value]) => (value !== null) && (value !== ''))
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
// Export actions and reducer
export const { actions: articlesActions } = articlesSlice;
export const { updateQuery } = articlesSlice.actions;
export default articlesSlice.reducer;
