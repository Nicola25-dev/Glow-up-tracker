const routine = {
  morning: [
    "Wake up early (6:00–7:00 AM)",
    "Brush teeth + scrape tongue",
    "Wash face (cold water)",
    "Clean armpits, privates, feet",
    "Fix posture",
    "Open window for light and air",
    "Pick up clothes, shake bed, hang towel outside",
    "20 jumping jacks",
    "30-sec arm circles",
    "10 bodyweight squats",
    "5 deep breaths",
    "Workout (based on day)",
  ],
  midday: [
    "Change shirt if sweaty",
    "Wipe face + armpits if needed",
    "Comb hair",
    "Drink water",
    "No junk food",
    "Learn one new word or skill",
    "Read one page of something useful",
    "Fix or clean something in room",
    "Write down goals",
    "Splash water on face",
    "20 jumping jacks",
    "Repeat: 'Still going. I don’t quit.'",
  ],
  evening: [
    "Optional: 2nd calisthenics or skill session",
    "Push-ups, core circuit (sit-ups, plank, twists)",
    "Shower: clean full body, dry fully",
    "Comb hair / trim nails",
    "Wear clean sleep clothes",
  ],
  night: [
    "Pick up clothes, clear floor",
    "Open window 5 min",
    "Place lemon peel or charcoal",
    "Check shoes for smell",
    "Wash face with cold water",
    "Apply lemon/salt water to armpits (weekly)",
    "Write: What I did right today",
    "Plan one goal for tomorrow",
    "Stretch 5–10 mins",
    "No scrolling, lights out by 10:00 PM",
  ],
};

// Load saved data from localStorage
const loadCompleted = () => {
  const saved = localStorage.getItem("glowUpCompleted");
  return saved ? JSON.parse(saved) : {};
};

// Save data to localStorage
const saveCompleted = (data) => {
  localStorage.setItem("glowUpCompleted", JSON.stringify(data));
};

const container = document.getElementById("routine-container");

const completedTasks = loadCompleted();

function createTaskItem(task) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completedTasks[task] || false;
  checkbox.id = `task-${task}`;

  const label = document.createElement("label");
  label.htmlFor = task-${task};
  label.textContent = task;

  if (checkbox.checked) {
    label.classList.add("task-done");
  }

  checkbox.addEventListener("change", () => {
    completedTasks[task] = checkbox.checked;
    if (checkbox.checked) {
      label.classList.add("task-done");
    } else {
      label.classList.remove("task-done");
    }
    saveCompleted(completedTasks);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  return li;
}

function buildRoutine() {
  container.innerHTML = "";

  for (const [section, tasks] of Object.entries(routine)) {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section");

    const heading = document.createElement("h2");
    heading.textContent = section + " Routine";
    sectionDiv.appendChild(heading);

    const ul = document.createElement("ul");
    ul.classList.add("task-list");

    tasks.forEach((task) => {
      ul.appendChild(createTaskItem(task));
    });

    sectionDiv.appendChild(ul);
    container.appendChild(sectionDiv);
  }
}

buildRoutine();
