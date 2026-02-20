import { useState } from 'react'
import { useSelector } from 'react-redux'
import JobItem from './JobItem'

const PAGE_SIZE = 5

function JobList() {
  const { list, loading, error } = useSelector((state) => state.jobs)
  const [currentPage, setCurrentPage] = useState(1)

  if (loading) return <p className="status-message">Loading positions...</p>
  if (error) return <p className="status-message error">Error: {error}</p>
  if (list.length === 0) return <p className="status-message">No open positions found.</p>

  const totalPages = Math.ceil(list.length / PAGE_SIZE)
  const start = (currentPage - 1) * PAGE_SIZE
  const paginated = list.slice(start, start + PAGE_SIZE)

  return (
    <div className="job-list">
      <h2 className="job-list-title">Open Positions</h2>

      {paginated.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
          >
            ← Prev
          </button>

          <span className="page-info">
            {currentPage} / {totalPages}
          </span>

          <button
            className="page-btn"
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}

export default JobList
