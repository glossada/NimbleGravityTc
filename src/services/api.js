import { BASE_URL } from '../config'

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }))
    throw new Error(error.message || 'Something went wrong')
  }
  return response.json()
}

export async function fetchCandidateByEmail(email) {
  const response = await fetch(`${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`)
  return handleResponse(response)
}

export async function fetchJobs() {
  const response = await fetch(`${BASE_URL}/api/jobs/get-list`)
  return handleResponse(response)
}

export async function applyToJob({ uuid, jobId, candidateId, applicationId, repoUrl }) {
  const response = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ uuid, jobId, candidateId, applicationId, repoUrl }),
  })
  return handleResponse(response)
}
