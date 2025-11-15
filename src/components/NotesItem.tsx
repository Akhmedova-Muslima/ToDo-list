import edit from "../assets/img/edit.svg"
import del from "../assets/img/del.svg"
import clsx from "clsx"
import { useContext } from "react"
import { NotesContext } from "../context/context"

export default function NotesItem({ note, view }) {

  const { delNote, changeNotes } = useContext(NotesContext)
  const { title, id, text, date } = note
  const betweenClass = clsx('note__top', { active: view })


  return (

    <div className="note">

      <div className={betweenClass}>
        <h3 className="note__title">{title}</h3>
        <span className="note__date">{date}</span>
      </div>

      <p className="note__text">{text}</p>

      <div className="note__btns">

        <button className="note__btn btn edit" onClick={() => changeNotes(note)}><img src={edit} alt="" /> РЕДАКТИРОВАТЬ</button>

        <button className="note__btn btn del" onClick={() => delNote(id)}> <img src={del} alt="" /> Удалить</button>

      </div>

    </div>

  )
}
