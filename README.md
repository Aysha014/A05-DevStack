# Dev Stack

Dev Stack is a responsive React application that helps users explore different web technologies and build their own development stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON data

## Features

1. Browse different frontend, backend, database, language, styling, and DevOps technologies.
2. Add technologies to a personal "Your Stack" section and remove them when needed.
3. Responsive design for desktop, tablet, and mobile with toast notifications and loading state.

---

# React Questions

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

React uses JSX because it makes creating and understanding user interfaces easier.

Example:

```tsx
<h1>Hello React</h1>

```

## 2. What is the difference between props and state?

Props are values passed from a parent component to a child component.

State is data stored inside a component that can change while the application is running.

## 3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update data inside a React component.

I used it to store the technologies, selected stack items, loading state, and mobile menu state.

Example:

```tsx
const [stack, setStack] = useState<Technology[]>([]);

```
## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code when a component loads or when certain values change.

I used it to fetch the technology data from data.json when the Technologies component first loads.

Example:

```tsx
useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);

```
## 5. Why does every item in a .map() list need a unique key prop?

React needs a unique key so it can identify each item in a list.

This helps React update, add, or remove items efficiently.

Example:

```tsx
{technologies.map((technology) => (
  <div key={technology.id}>
    {technology.name}
  </div>
))}

```
## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

I used it in the Your Stack section. If no technology is selected, the application shows an empty message.

Example:

```tsx
{stack.length === 0 && (
  <p>Your stack is empty.</p>
)}

```
## 7. How do you pass data from a parent component to a child component, and how does the child send something back to the parent?

Data is passed from a parent to a child using props.

A child can communicate back to the parent by calling a function that the parent passes as a prop.

In this project, the Technologies component passes the stack and remove functions to the SelectedItems component.

Example:

```tsx
<SelectedItems
  stack={stack}
  handleRemove={handleRemove}
  handleRemoveAll={handleRemoveAll}
/>

```
The child uses the function like this:

```tsx
<button onClick={() => handleRemove(item.id)}>
  Remove
</button>


