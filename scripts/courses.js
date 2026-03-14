const courses = [
  { subject: "CSE", number: 110, title: "Introduction to Programming", credits: 2, completed: true },
  { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, completed: true },
  { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: true },
  { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, completed: true },
  { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 2, completed: true },
  { subject: "WDD", number: 231, title: "Web Frontend Development I", credits: 2, completed: false }
];

const coursesContainer = document.querySelector("#courses-container");
const creditsTotal = document.querySelector("#credits-total");
const allButton = document.querySelector("#all-btn");
const wddButton = document.querySelector("#wdd-btn");
const cseButton = document.querySelector("#cse-btn");

function displayCourses(courseList) {
  coursesContainer.innerHTML = "";

  courseList.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    if (course.completed) {
      courseCard.classList.add("completed");
    }

    courseCard.textContent = `${course.subject} ${course.number}`;
    coursesContainer.appendChild(courseCard);
  });

  const totalCredits = courseList.reduce((total, course) => total + course.credits, 0);
  creditsTotal.textContent = `Total Credits: ${totalCredits}`;
}

allButton.addEventListener("click", () => {
  displayCourses(courses);
});

wddButton.addEventListener("click", () => {
  const wddCourses = courses.filter((course) => course.subject === "WDD");
  displayCourses(wddCourses);
});

cseButton.addEventListener("click", () => {
  const cseCourses = courses.filter((course) => course.subject === "CSE");
  displayCourses(cseCourses);
});

displayCourses(courses);