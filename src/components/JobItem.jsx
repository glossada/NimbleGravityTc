import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitApplication } from '../features/candidate/candidateActions'

function JobItem({ job }) {
  const dispatch = useDispatch()
  const candidate = useSelector((state) => state.candidate.data)
  const { loading, error, successJobId } = useSelector((state) => state.candidate.apply)

  const [repoUrl, setRepoUrl] = useState('')

  const isThisJobLoading = loading
  const isThisJobSuccess = successJobId === job.id

  function handleSubmit() {
    if (!repoUrl.trim() || !candidate) return

    dispatch(submitApplication({
      uuid: candidate.uuid,
      candidateId: candidate.candidateId,
      jobId: job.id,
      repoUrl: repoUrl.trim(),
    }))
  }

  return (
    <div className="job-item">
      <h3 className="job-title">{job.title}</h3>
      <div className="job-actions">
        <input
          type="url"
          className="repo-input"
          placeholder="https://github.com/tu-usuario/tu-repo"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          disabled={isThisJobLoading || isThisJobSuccess}
        />
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!repoUrl.trim() || !candidate || isThisJobLoading || isThisJobSuccess}
        >
          {isThisJobLoading ? 'Sending...' : isThisJobSuccess ? 'Sent!' : 'Submit'}
        </button>
      </div>
      {error && successJobId !== job.id && (
        <p className="apply-error">Error: {error}</p>
      )}
      {isThisJobSuccess && (
        <p className="apply-success">Application submitted successfully!</p>
      )}
    </div>
  )
}

export default JobItem
