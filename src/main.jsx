import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Onboarding from "./components/Onboarding/Onboarding.jsx";
import Review from "./components/Review/Review.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import store, { persistor } from "./redux/index.js";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { decryptData } from "./encryption.js";
import FeedbackView from "./components/FeedbackView/FeedbackView.jsx";

const ProtectedRoute = ({ children }) => {
  const LoggedInUser = useSelector((state) => state.loggedInUser.data);
  if (!LoggedInUser) {
    return <Navigate to="/" replace />;
  }
  const decryptedUser = decryptData(LoggedInUser);
  if (!decryptedUser || !decryptedUser.email) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Onboarding /> },
      { path: "/:id", element: <Review /> },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/feedback-view/:id",
        element: (
          <ProtectedRoute>
            <FeedbackView />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
