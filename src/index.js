import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PrivyProvider } from "@privy-io/react-auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="clxvfduri007h6zpe8agem4ho"
      onSuccess={(user) => console.log(`User ${user.id} logged in!`)}
      config={{
        appearance: {
          landingHeader: "CryptoMon",
          loginMessage: "Login | Sign Up",
          theme: "light",

          loginMethods: ["email", "wallet", "google", "apple", "farcaster"],
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);

reportWebVitals();
