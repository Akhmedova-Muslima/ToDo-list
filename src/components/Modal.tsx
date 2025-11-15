import clsx from "clsx"
import { AnimatePresence, motion } from "motion/react"
import { useContext, useState } from 'react'
import { NotesContext } from "../context/context"


export default function Modal() {


  const { openModal, setOpenModal, add, changeText, changedNote }
    = useContext(NotesContext)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)

  const titleInput = clsx('modal__input', { hasTitle: title.trim() })
  const textInput = clsx('modal__input', { hasText: content.trim() })
  const errorSpan = clsx('error', { isError: error })

  const descModal =
    changeText ? { title: 'Изменить Заметку', btn: 'Изменить' } : { title: 'Добавить Заметку', btn: 'Добавить' }

  const close = () => {
    setOpenModal(false)
    setTitle('')
    setContent('')
  }

  const stop = (e) => {
    e.stopPropagation()
  }

  const addNotes = () => {
    if (title.length > 3 && content.length > 3) {

      const note = {
        id: changedNote ? changedNote.id : crypto.randomUUID(),
        title,
        text: content,
        date: new Date().toLocaleDateString(),
      }

      add(note)
      close()
    }
  }

  const isValidate = () => {

    if (title.length > 3 && content.length > 3) {
      setError(false)
    } else {
      setError(true)
    }
  }


  return (
    <>
      <AnimatePresence>
        {
          openModal &&
          <div className="modal" onClick={close}>
            <motion.div
              className="modal__block"
              onClick={stop}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <h2 className="modal__title">{descModal.title}</h2>


              <label className="modal__label">
                <input
                  type="text"
                  className={titleInput}
                  onChange={(e) => { setTitle(e.target.value), isValidate() }}
                  value={title}
                />
                <span className="modal__span">Title</span>
              </label>
              <span className={errorSpan}>Небходимо ввести больше 3 символов</span>

              <label className="modal__label">

                <input
                  type="text"
                  className={textInput}
                  onChange={(e) => { setContent(e.target.value), isValidate() }}
                  value={content}
                />

                <span className="modal__span">Content</span>
              </label>
              <span className={errorSpan}>Небходимо ввести больше 3 символов</span>

              <div className="modal__btns">
                <button className="modal__btn btn del" onClick={close}>Отмена</button>
                <button className="modal__btn btn edit" onClick={addNotes}> {descModal.btn} </button>
              </div>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </>
  )
}
