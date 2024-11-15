import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createHashRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Resume from "./pages/Resume.jsx";

// Define the accessible routes, and which components respond to which URL
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/Work",
        element: <Work />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
