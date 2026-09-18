# Dev Stack Builder

A responsive React website for exploring modern web technologies and building a personalized development stack.

## Project Description

Dev Stack Builder allows users to explore different frontend, backend, database, programming language, styling, and DevOps technologies. Users can add technologies to their personal stack, remove individual technologies, or clear the entire stack.

The project loads technology information from a JSON file and provides a responsive interface for desktop, tablet, and mobile devices.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- JSON
- JavaScript ES6+

## Features

1. Browse different development technologies with their category, difficulty, rating, description, and badge.
2. Add technologies to a personal stack with duplicate prevention and toast notifications.
3. Remove individual technologies or remove all technologies from the stack.
4. Responsive design for desktop, tablet, and mobile devices.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React code easier to read and write.

### 2. What is the difference between props and state?

Props are used to pass data from a parent to a child. State is used to store data that can change in a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a component. I used it to store the technology list and the selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component loads. I used it to fetch the technology data from the JSON file when the page loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. It helps React update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition. I used it to show the empty stack message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send something back by calling a function passed through props.