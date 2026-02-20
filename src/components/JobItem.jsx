import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitApplication } from '../features/candidate/candidateActions'

const GITHUB_URL_REGEX = /^https:\/\/github\.com\/[\w-]+\/[\w.-]+$/

function JobItem({ job }) {
  const dispatch = useDispatch()
  const candidate = useSelector((state) => state.candidate.data)
  const { loading, error, errorJobId, successJobId } = useSelector((state) => state.candidate.apply)

  const [repoUrl, setRepoUrl] = useState('')
  const [validationError, setValidationError] = useState(null)

  const isThisJobLoading = loading
  const isThisJobSuccess = successJobId === job.id
  const isThisJobError = errorJobId === job.id

  function handleChange(e) {
    setRepoUrl(e.target.value)
    if (validationError) setValidationError(null)
  }

  function handleSubmit() {
    if (!candidate) return

    if (!repoUrl.trim()) {
      setValidationError('Please enter your GitHub repository URL.')
      return
    }

    if (!GITHUB_URL_REGEX.test(repoUrl.trim())) {
      setValidationError('URL must follow the format: https://github.com/username/repo')
      return
    }

    dispatch(submitApplication({
      uuid: candidate.uuid,
      candidateId: candidate.candidateId,
      applicationId: candidate.applicationId,
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
          className={`repo-input${validationError ? ' repo-input--error' : ''}`}
          placeholder="https://github.com/username/repo"
          value={repoUrl}
          onChange={handleChange}
          disabled={isThisJobLoading || isThisJobSuccess}
        />
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!candidate || isThisJobLoading || isThisJobSuccess}
        >
          {isThisJobLoading ? 'Sending...' : isThisJobSuccess ? 'Sent!' : 'Submit'}
        </button>
      </div>
      {validationError && (
        <p className="apply-error">{validationError}</p>
      )}
      {isThisJobError && !validationError && (
        <p className="apply-error">Error: {error}</p>
      )}
      {isThisJobSuccess && (
        <p className="apply-success">Application submitted successfully!</p>
      )}
    </div>
  )
}

export default JobItem
