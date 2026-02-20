import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCandidateByEmail, applyToJob } from '../../services/api'

export const getCandidate = createAsyncThunk(
  'candidate/getByEmail',
  async (email, { rejectWithValue }) => {
    try {
      return await fetchCandidateByEmail(email)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const submitApplication = createAsyncThunk(
  'candidate/applyToJob',
  async (payload, { rejectWithValue }) => {
    try {
      return await applyToJob(payload)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
