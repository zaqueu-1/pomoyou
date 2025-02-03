import React from "react"
import { useTranslation } from "react-i18next"
import "./language-switcher.css"

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem("i18nextLng", lng)
  }

  return (
    <div className='language-switcher'>
      <button
        className={i18n.language === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
        aria-label='Switch to English'
      >
        🇺🇸
      </button>
      <button
        className={i18n.language === "pt" ? "active" : ""}
        onClick={() => changeLanguage("pt")}
        aria-label='Mudar para Português'
      >
        🇧🇷
      </button>
    </div>
  )
}

export default LanguageSwitcher
