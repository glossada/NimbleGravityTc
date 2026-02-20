import { createSlice } from '@reduxjs/toolkit'
import { getJobs } from './jobsActions'

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    list: [],        
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default jobsSlice.reducer
