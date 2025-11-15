import searchImg from "../assets/img/search.svg"
import back from "../assets/img/back.svg"
import clear from "../assets/img/clear.svg"
import { useContext } from "react"
import { NotesContext } from "../context/context"

import { useTranslation } from "react-i18next"


export default function Navbar() {

  const { show, setSearchText, searchText, changeNavbar } = useContext(NotesContext)

  const { i18n, t } = useTranslation()

  const changeLang = () => {

    const newLang = i18n.language === 'ru' ? 'en' : 'ru'

    i18n.changeLanguage(newLang)
    localStorage.setItem('lang', newLang)
  }

  return (
    <>

      {
        show && <nav className="nav">
          <button className="nav__lang" onClick={changeLang}>{i18n.language}</button>

          <h1 className="nav__title">{t('Notes')}</h1>

          <button className="nav__search" onClick={changeNavbar}><img src={searchImg} alt="" /></button>
        </nav>
      }


      {!show &&
        <nav className="nav">
          <button className="nav__lang" onClick={changeNavbar}><img src={back} alt="" /></button>
          <input type="text" placeholder={t('search')}
            onChange={(e) => setSearchText(e.target.value)} value={searchText} />

          <button className="nav__search" onClick={() => setSearchText('')}><img src={clear} alt="" /></button>
        </nav>
      }

    </>
  )
}
