import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Resume from "./pages/Resume.jsx";
import Education from "./components/Education/Education.jsx";


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Work",
        element: <Work />,
        action: { section: "Work" },
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
      {
        path: "/Education",
        element: <Education />,
        action: { section: "Education" },
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
