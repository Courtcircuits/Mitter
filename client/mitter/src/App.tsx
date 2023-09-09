import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./view/Home";
import { AlertContextProvider } from "./context/AlertContext";
import Alert from "./component/Alert";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <div>Chat</div>,
  }
]);

function App() {
  return (
    <div className="App">
      <AlertContextProvider>
        <Alert />
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </AlertContextProvider>
    </div>
  );
}

export default App;
