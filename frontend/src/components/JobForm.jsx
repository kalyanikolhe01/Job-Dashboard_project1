function JobForm({ title, company, status, setTitle, setCompany, setStatus, onSubmit }) {
  return (
    <form className="job-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;