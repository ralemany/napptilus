# napptilus
Technical assesment - Basic Mobile shop
Application create with Javascript
Libraries used:
- Normalize.css
- Primeflex
- Sass
- FontAwesome
- Jest

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Testing
Added JEST for testing cases

# Scripts
To run the app we will use the command "npm run start"
We have this scripts:

start - Run React dev mode with vite
dev - Run React dev mode with vite
build - Compile the app for server deployment
lint - Run linter to check good practices and discover potential issues
test - Run Jest tests
preview - Run the app in preview mode

# Aditional info related the assesment
POST REQUEST
I couldn't retrieve the correct data from the POST request when I add new cart item.
I tried with axios and fetch but always returns {content: 1}.
Doing with POSTMAN and curl it return the correct data, but may be I missing any header
in the request (I tried all except HOST header because I don't know how to do it).
