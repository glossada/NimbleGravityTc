import { createSlice } from '@reduxjs/toolkit'
import { getCandidate, submitApplication } from './candidateActions'

const candidateSlice = createSlice({
  name: 'candidate',
  initialState: {
    data: null,
    loading: false,
    error: null,
    apply: {
      loading: false,
      error: null,
      errorJobId: null,
      successJobId: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCandidate.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCandidate.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(getCandidate.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(submitApplication.pending, (state) => {
        state.apply.loading = true
        state.apply.error = null
        state.apply.errorJobId = null
        state.apply.successJobId = null
      })
      .addCase(submitApplication.fulfilled, (state, action) => {
        state.apply.loading = false
        state.apply.successJobId = action.meta.arg.jobId
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.apply.loading = false
        state.apply.error = action.payload
        state.apply.errorJobId = action.meta.arg.jobId
      })
  },
})

export default candidateSlice.reducer
