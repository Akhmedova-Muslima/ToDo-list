
import { createRoot } from 'react-dom/client'
import "./assets/styles/style.scss"
import App from './App.js'
import "./i18n.js"
import { NotesContextProvider } from "./context/notes.context.js"
import './practice.js'

createRoot(document.getElementById('root')).render(

  <NotesContextProvider>

    <App />

  </NotesContextProvider>

)
