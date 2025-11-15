import { useEffect, useState } from "react"
import { NotesContext } from "./context.js"


export const NotesContextProvider = ({ children }) => {

  const initialNotes = JSON.parse(localStorage.getItem('notes') || '[]')

  const [notes, setNotes] = useState(initialNotes)
  const [openModal, setOpenModal] = useState(false)
  const [changeText, setChangeText] = useState(false)
  const [changedNote, setChangedNote] = useState(null)
  const [show, setShow] = useState(true)
  const [searchText, setSearchText] = useState('')


  const filteredNote = notes.filter(
    (note) => note.title.toLowerCase().includes(searchText.toLowerCase())
  )

  const add = (note) => {
    if (changedNote) {
      setNotes(notes.map((oldNote) => oldNote.id == note.id ? note : oldNote))
    } else {
      setNotes([...notes, note])
    }
    setChangeText(false)
    setChangedNote(null)
  }

  const delNote = (id) => {
    setNotes(notes.filter((note) => id !== note.id))
  }

  const changeNotes = (note) => {
    setOpenModal(true)
    setChangeText(true)
    setChangedNote(note)

    console.log(note)
  }

  const changeNavbar = () => {
    setShow(!show)
    setSearchText('')
  }

  const open = () => {
    setOpenModal(true)
    setChangeText(false)
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  return (

    <NotesContext.Provider value={
      {
        openModal,
        changeText,
        changedNote,
        show,
        searchText,
        filteredNote,
        add,
        delNote,
        changeNotes,
        changeNavbar,
        open,
        setSearchText,
        setOpenModal
      }
    }>
      {children}
    </NotesContext.Provider>

  )
}

