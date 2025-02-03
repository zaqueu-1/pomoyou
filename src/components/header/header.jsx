import React from "react"
import { useTranslation } from "react-i18next"
import "./header.css"
import { VscGithub } from "react-icons/vsc"
import { BsInstagram } from "react-icons/bs"
import { AiOutlineLinkedin } from "react-icons/ai"

function Header() {
  const { t } = useTranslation()

  const takeMeTo = (link) => {
    if (link === "github") {
      window.open("https://github.com/zaqueu-1")
    } else if (link === "insta") {
      window.open("https://www.instagram.com/zaqueu.tech/")
    } else if (link === "linkedin") {
      window.open("https://www.linkedin.com/in/zaqueu1")
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className='header-container'>
        <div className='title'>
          <h1>{t("header.title")}</h1>
          <h4>{t("header.subtitle")}</h4>
        </div>
        <div className='social'>
          <button onClick={() => takeMeTo("github")} className='social-btn'>
            <VscGithub />
          </button>
          <button onClick={() => takeMeTo("insta")} className='social-btn'>
            <BsInstagram />
          </button>
          <button
            onClick={() => takeMeTo("linkedin")}
            className='social-btn linkedin'
          >
            <AiOutlineLinkedin />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
