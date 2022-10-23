import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/css/tailwind.output.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";
import * as serviceWorker from "./serviceWorker";
import AuthProvider from "./utils/AuthProvider";
import { MoralisProvider } from "react-moralis";
import { ThemeProvider } from "next-themes";

// if (process.env.NODE_ENV !== 'production') {
//   const axe = require('react-axe')
//   axe(React, ReactDOM, 1000)
// }

ReactDOM.render(
  // <ThemeProvider attribute="class">
  <SidebarProvider>
    <Suspense fallback={<ThemedSuspense />}>
      <Windmill usePreferences>
        <AuthProvider>
          <MoralisProvider
            appId="GQDfrdguZn6CQL9LOn80cA2qdyzGKlOJRFZlV6NU"
            serverUrl="https://3mn5ud8bskbv.usemoralis.com:2053/server"
          >
            <App />
          </MoralisProvider>
        </AuthProvider>
      </Windmill>
    </Suspense>
  </SidebarProvider>,
  // </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
