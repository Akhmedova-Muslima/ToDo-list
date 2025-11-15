import { useContext, useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import Modal from "./components/Modal"
import addImg from "./assets/img/edit.svg"
import { NotesContext } from "./context/context"

export default function App() {

  const { openModal, open } = useContext(NotesContext)

  return (
    <>

      <Navbar />
      <Notes />
      <Modal />

      {
        !openModal &&
        <button className="addNote" onClick={open}>
          <img src={addImg} alt="" />
        </button>
      }


    </>
  )
}
