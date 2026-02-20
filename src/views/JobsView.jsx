import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import JobList from '../components/JobList'
import Footer from '../components/Footer'
import { getJobs } from '../features/jobs/jobsActions'
import { getCandidate } from '../features/candidate/candidateActions'
import { CANDIDATE_EMAIL } from '../config'

function JobsView() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobs())
    dispatch(getCandidate(CANDIDATE_EMAIL))
  }, [dispatch])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Job Application Portal <br /><span>by Gabriel Lossada</span></h1>
        <p>Select a position and submit your GitHub repository URL</p>
      </header>
      <main className="app-main">
        <JobList />
      </main>
      <Footer />
    </div>
  )
}

export default JobsView
