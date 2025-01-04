import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import FeedbacksProvider from "./contexts/feedbacks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FeedbacksProvider>
      <App />
    </FeedbacksProvider>
  </React.StrictMode>
);
