import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// NextUIProvider Initialization
import { NextUIProvider } from "@nextui-org/react";

// Import Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
      {/* Add Vercel Analytics */}
      <Analytics />
    </NextUIProvider>
  </React.StrictMode>
);
