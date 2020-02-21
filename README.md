## Introduction

This is a project for Hack the North 2020 [Frontend Developer Challenge](https://gist.github.com/alexieyizhe/e468de065a476d0882f04b9aa5d18903), with all core requirements completed.

The web app is developed using [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/). <br /> 
Component UI are styled with [styled-components](https://styled-components.com/) and [Material UI](https://material-ui.com/).

## To View

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Login Credentials

On the login page, input the following to view attendee profile.

`username: htn-challenge` <br />
`password: htn2020`

<hr>

## Design

First, I broke the project into different components and features so that I can complete them independently as smaller tasks and ensuring that each component satisfies the SOLID principle and the MVC concept. 

The main feature is handling the API call to retrieve attendee profile. This can be broken down into a service function (`useAttendeeService`), implemented with **React Hooks** which maintains the status of the call, and catches all types of errors, and the display of requested profile information (`ProfilePage`), which is further broken down into smaller reusable components, such as `ActionButtons`.

I also tried to improve reusability and scalability of the code with the limited time.

- Service types are extracted to templates [service.tsx](https://github.com/RCyn/htn-challenge/blob/master/src/types/service.tsx) so that all services can reuse the same status and value.
- A Date parsing util function [dateParser.tsx](https://github.com/RCyn/htn-challenge/blob/master/src/utils/dateParser.tsx) is refactored from the component so that it exists as a global util for all components
- Adding a new type of attendee is very simple:
  - Add the type and new actions/fields to the type definition of `AttendeeProfile`.
  - Adjust the `profileTable` to display any new fields and action buttons

The other main feature is the login authentication page. For simplicity, the login credentials are hard-coded, with user interactions handled by **React Hooks** again.

### Styles and Accessibility

To ensure the design of the app is consistent and responsive, I customized a MUI theme, and ensured that reused components are consistent in style and across different devices. At the same time, I followed basic accessibility guidelines regarding text contrast, alt text to images, native HTML tags, etc.

### Documentation

All components, pages, services, functions are accomanied with JSDoc documentation so that any developer can easily pick up the code and start implementing.

### Problems Encountered

I am still new to **React** and **Typescript**, so the solution for the features of the project didn't seem obvious to me given React's large library and numerous ways of constructing a component. As a result, I spent a lot of time reading documentation and examples to understand concepts like **React Hooks**, **Context API**, **Compound Component**, etc, and narrow down on my implementation of the components to fit the requirements. There are definitely ways to improve the current code, but I believe that my design is simple and easy to follow given the project specs.

## What's in the future?

If given additional time, I would definitely start with refactoring some of my bigger components, such as `profileTable`, to remove redundant code and further improve code reusability and scalability.

I would possibily revisit my design to see if I can further simplify the logic while maintaining functionality. In addition, the login authentication need to be implemented with corresponding API endpoints.

### Additional Functionality

With all core functionality required has been implemented, I can build the app with additional functionalities.

- Enable other `onClick` event handlers for `check in`, `attend workshop`, and `call phone` actions
- Implement `search bar` for volunteers with fuzzy search on all registered attendees from database
- Once login authentication is established with backend so that each account binds with a profile, the displayed profile is then consistent offline/across refreshes
- **Progressive Web App**: following PWA guidelines and documentation to make the web app more reliable and offline
