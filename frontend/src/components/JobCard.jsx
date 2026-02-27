function JobCard({ job, onDelete }) {
  return (
    <div className="job-card">
      <div>
        <h3>{job.title}</h3>
        <p>{job.company}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(job.id)}>
        Delete
      </button>
    </div>
  );
}

export default JobCard;