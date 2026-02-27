function DashboardStats({ jobs }) {
  const count = (type) =>
    jobs.filter((job) => job.status === type).length;

  return (
    <div className="stats">
      <div>Applied: {count("Applied")}</div>
      <div>Interview: {count("Interview")}</div>
      <div>Offer: {count("Offer")}</div>
      <div>Rejected: {count("Rejected")}</div>
    </div>
  );
}

export default DashboardStats;