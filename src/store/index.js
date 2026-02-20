import { configureStore } from '@reduxjs/toolkit'
import candidateReducer from '../features/candidate/candidateSlice'
import jobsReducer from '../features/jobs/jobsSlice'

const store = configureStore({
  reducer: {
    candidate: candidateReducer,
    jobs: jobsReducer,
  },
})

export default store
