import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import JobForm from "./components/JobForm";
import DashboardStats from "./components/DashboardStats";

function App() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("Applied");

  useEffect(() => {
    fetch("https://job-dashboard-project1.onrender.com/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const addJob = (e) => {
    e.preventDefault();

    const newJob = { title, company, status };

    fetch("https://job-dashboard-project1.onrender.com/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        setJobs([...jobs, data]);
        setTitle("");
        setCompany("");
        setStatus("Applied");
      });
  };

  const deleteJob = (id) => {
  fetch(`https://job-dashboard-project1.onrender.com/jobs/${id}`, {
    method: "DELETE",
  }).then(() => {
    setJobs(jobs.filter((job) => job.id !== id));
  });
};

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Application Dashboard</h1>

        <DashboardStats jobs={jobs} />

        <JobForm
          title={title}
          company={company}
          status={status}
          setTitle={setTitle}
          setCompany={setCompany}
          setStatus={setStatus}
          onSubmit={addJob}
        />

        <div className="job-list">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onDelete={deleteJob} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;