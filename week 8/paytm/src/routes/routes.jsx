import React, { Suspense } from "react";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

// Lazy-loaded components
const Home = React.lazy(() => import("../Pages/Home"));
const About = React.lazy(() => import("../Pages/About"));
const Contact = React.lazy(() => import("../Pages/Contact"));
const NotFound = React.lazy(() => import("../components/NotFound"));

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Home />
      </Suspense>
    ),
  },

  {
    path: "/signUp",
    element: (
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/signIn",
    element: (
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <SignIn />
      </Suspense>
    ),
  },

  {
    path: "/about",
    element: (
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <NotFound />
      </Suspense>
    ),
  },
];

export default routes;
