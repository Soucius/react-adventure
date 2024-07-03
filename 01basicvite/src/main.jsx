import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';

const reactELement = {
  type: "a",
  props: {
      href: "https://google.com",
      target: "_blank"
  },
  children: "Click me to visit google"
};

function MyApp() {
  return (
    <div>
      <h1>Custom React app</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
);

const AReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);