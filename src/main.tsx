import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app"
import { Toaster } from "sonner" /*  seria a biblioteca que lanza mensagens de alerta legais (npm install sonner)*/
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster richColors/>
  </React.StrictMode>
)
