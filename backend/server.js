const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Serve React build files
app.use(express.static(path.join(__dirname, "public")));

// In-memory demo data
let jobs = [
  { id: 1, title: "Frontend Developer", company: "Google", status: "Applied" },
  { id: 2, title: "Backend Developer", company: "Amazon", status: "Interview" },
  { id: 3, title: "Full Stack Developer", company: "Microsoft", status: "Offer" },
];

// API routes
app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

app.post("/api/jobs", (req, res) => {
  const newJob = { id: Date.now(), ...req.body };
  jobs.push(newJob);
  res.json(newJob);
});

app.delete("/api/jobs/:id", (req, res) => {
  jobs = jobs.filter((job) => job.id != req.params.id);
  res.json({ success: true });
});

// React fallback
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});