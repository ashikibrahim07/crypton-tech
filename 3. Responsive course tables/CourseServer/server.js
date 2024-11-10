import express from "express";
import cors from "cors";
const app = express();
const port = 3001;

app.use(cors());

const courses = [
  {
    name: "Basic Algorithm",
    lessons: 25,
    startDate: "27 Jan, 2023",
    lessonsCompleted: 10,
    percentage: 48,
    duration: "14h 38m 56s",
    icon: "layers",
  },
  {
    name: "Web Development",
    lessons: 45,
    startDate: "23 Feb, 2023",
    lessonsCompleted: 40,
    percentage: 97,
    duration: "36h 30m 00s",
    icon: "code",
  },
  {
    name: "Basic Data Science",
    lessons: 37,
    startDate: "14 Jan, 2023",
    lessonsCompleted: 9,
    percentage: 40,
    duration: "37h 00m 00s",
    icon: "grid_on",
  },
  {
    name: "UI/UX Design",
    lessons: 32,
    startDate: "19 Feb, 2023",
    lessonsCompleted: 26,
    percentage: 84,
    duration: "16h 40m 50s",
    icon: "computer",
  },
  {
    name: "Project Management",
    lessons: 19,
    startDate: "27 Jan, 2023",
    lessonsCompleted: 14,
    percentage: 89,
    duration: "13h 20m 00s",
    icon: "view_week",
  },
];

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
