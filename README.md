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

### 1. What is JSX, and why is it used?

JSX lets us write HTML-like code inside JavaScript. It makes React code easier to write and understand.

### 2. What is the difference between State and Props?

Props are used to send data from one component to another. State is used to store data that can change.

### 3. What is the useState hook, and how does it work?

useState is used to store data in a React component. It gives us a value and a function to change that value.

### 4. How can you share state between components?

We can keep the state in a common parent component and pass it to other components using props.

### 5. How is event handling done in React?

We can handle events using things like `onClick`, `onChange`, and `onSubmit`. We give a function to these events.

### 6. What is conditional rendering in React?

Conditional rendering means showing something based on a condition. For example, we can show one message if something is true and another message if it is false.

### 7. How do you render lists in React?

We can use the `map()` method to show a list of items in React. Each item should have a unique `key`.