// TODO: Set item in localStorage
const TASK_KEY = "tasks";
localStorage.setItem(TASK_KEY, "task1");

// TODO: Get item from localStorage
const tasksFromLocalStorage = localStorage.getItem(TASK_KEY);

// TODO: Remove item from localStorage
localStorage.removeItem(TASK_KEY);

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const task2 = {
  name: "cooking",
  duration: 2,
};

const TASK2_KEY = "task2";
localStorage.setItem(TASK2_KEY, JSON.stringify(task2));

// TODO: Get an object from localStorage
const task2FromLocalStorage = JSON.parse(localStorage.getItem(TASK2_KEY));

// TODO: Set item in sessionStorage
sessionStorage.setItem(TASK_KEY, "task3");

// TODO: Get item from sessionStorage
const tasksFromSessionStorage = sessionStorage.getItem(TASK_KEY);

// TODO: Remove item from sessionStorage
sessionStorage.removeItem(TASK_KEY);

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
const task4 = {
  name: "cleaning",
  duration: 3,
};
const TASK4_KEY = "task4";
sessionStorage.setItem(TASK4_KEY, JSON.stringify(task4));

// TODO: Get an object from sessionStorage
const task4FromSessionStorage = JSON.parse(sessionStorage.getItem(TASK4_KEY));