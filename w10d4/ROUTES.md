# Backend

Rails (Namespacing / Resources)
Express

# Frontend

React

# Views vs. Routes

/api/v1/users
/api/v2/users

ROUTES
/api/users => Receive data
/api/users/:user_id => Receive data

/users => fetch user data, render EJS template with user data, returns html
...

VIEWS --- BAD SEO (Kinda fixable with React Helmet)
React
/home => Receive the same initial data, show the home component
/login => Receive the same initial data, show the login component

```jsx
export default function App() {
  const [view, setView] = useState("give me the path in the url");

  return (
    <main>
      {view === "HOME" && <Home />}
      {view === "LOGIN" && <Login />}
    </main>
  );
}
```
