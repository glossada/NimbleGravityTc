import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchJobs } from '../../services/api'

export const getJobs = createAsyncThunk(
  'jobs/getList',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchJobs()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
