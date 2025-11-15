
import list from "../assets/img/list.svg"
import grid from "../assets/img/grid.svg"
import { useContext, useState } from "react"
import NotesItem from "./NotesItem"
import clsx from "clsx"
import { NotesContext } from "../context/context"


export default function Notes() {

  const { filteredNote } = useContext(NotesContext)

  const [view, setView] = useState(false)

  const viewOptions = view ? { img: grid, text: 'Сетка' } : { img: list, text: 'Список' }
  const changeclass = clsx('notes__list', { active: view })

  const notesTitle = filteredNote.length > 0 ? 'Все заметки' : 'Нет заметок'

  return (
    <>
      <div className="notes container">
        <div className="notes__top">
          <h2 className="notes__title">{notesTitle}</h2>

          <button className="notes__btn" onClick={() => setView(!view)}>
            <img src={viewOptions.img} alt="" />
            <span>{viewOptions.text}</span>
          </button>

        </div>

        <div className={changeclass}>

          {filteredNote.map(note => <NotesItem note={note} key={note.id} view={view} />)}

        </div>


      </div>

    </>
  )
}
