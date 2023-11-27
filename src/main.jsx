import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route.jsx";
import Provider from "./Auth/Provider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Provider>
          <RouterProvider router={router} />
        </Provider>
      </HelmetProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
