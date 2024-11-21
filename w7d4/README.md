# W7D4 - React Developer Workflow

- Development environment review
- React Dev Tools
- Best practices for setting up a new project
- Managing inputs, mocks and design
- Component Driven Development

# Development environment review

Even though it's possible to create a React project that has a web server, JavaScript transpilation and other features from scratch, it's a lot of work to build and maintain it.

The one we will use in the bootcamp is `create-react-app`, it contains Babel, Webpack and a lot of other tools to make sure we can create a proper development environment for our future app.

However, `create-react-app` is not the only package out there, here is some other that you may see out there.

- Vite (`npm create vite@latest`)
- CRA (`npx create-react-app nameOfApp`)
- Next App (`npx create-next-app nameOfApp`)
- ...

At the end of the day, all of those options will achieve the same goal!

# React development tools

Working with a lot of components and different JavaScript files can be confusing and overwhelming sometimes, especially if we try to debug using console.log(). Since React re-renders everytime the state values changes, it can be hard to keep track of which console.log is which.

Enter React Developer Tools, a pretty cool extension that will help us debug and interact with our components.

More information here: https://react.dev/learn/react-developer-tools

# Project best practices

When building a project with a library like React, we do not have specific instructions on organization, naming, what type of function, etc.

- How should we structure our files?
- How should we name our components?
- Where do we put mock data?
- Should the frontend and the backend be in two different repos?

# Managing inputs

One of the most important steps of a project is to do proper planning, not too little, not too much.
In our case that means:

- Making a plan with the ideal shape of data
- (If we have time) Making a mockup of the app
- Building the HTML structure
- Building mock data

# Component-based development

It's possible to do a React project with one or two components, but often we will have between 5-15 components for a small project. Trying to make them all work together while integrating new ones can be a nightmare. One of the solutions that we can implement is to build components in isolation.

By running them one at a time, we can make sure that a component works by itself first, then we can integrate it in the component tree. It's possible for small projects to work in isolation without extra tools or packages, but we may see other solutions when working on future projects after the bootcamp.
