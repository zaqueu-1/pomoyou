import React, { useState, useRef } from "react"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import "./timer.css"
import { FaPause, FaPlay } from "react-icons/fa"
import click from "../../sounds/click.wav"
import pullClick from "../../sounds/pullClick.wav"
import finished from "../../sounds/finished.wav"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LanguageSwitcher from "../language-switcher/language-switcher"

function Timer() {
  const { t } = useTranslation()
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(25)
  const [start, setStart] = useState(false)
  const [chosenMode, setChosenMode] = useState("pomodoro")
  let timer
  let currentTimer =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)

  const [darkBg, setDarkBg] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode")
    const initialTheme = savedTheme === "true"
    document.body.style.backgroundColor = initialTheme
      ? "rgb(65, 65, 65)"
      : "rgb(205, 205, 215)"
    return initialTheme
  })

  useEffect(() => {
    document.title = currentTimer + " | " + t("header.title")
  }, [currentTimer, t])

  useEffect(() => {
    if (start) {
      let timer = setInterval(() => {
        setSeconds((seconds) => seconds - 1)

        if (seconds === 0 && minutes > 0) {
          setMinutes((minutes) => minutes - 1)
          setSeconds(59)
        }

        if (
          seconds === 0 &&
          minutes === 0 &&
          chosenMode !== "pomodoro" &&
          chosenMode !== "custom"
        ) {
          clearInterval(timer)
          new Audio(finished).play()
          toast.warn(t("notifications.focus"), {
            theme: darkBg ? "dark" : "light",
          })
          switchMode("pomodoro")
          if (autoMode) {
            setStart(true)
          }
        } else if (
          seconds === 0 &&
          minutes === 0 &&
          chosenMode === "pomodoro"
        ) {
          clearInterval(timer)
          new Audio(finished).play()
          toast.info(t("notifications.break"), {
            theme: darkBg ? "dark" : "light",
          })
          switchMode("short")
          if (autoMode) {
            setStart(true)
          }
        } else if (seconds === 0 && minutes === 0 && chosenMode === "custom") {
          clearInterval(timer)
          new Audio(finished).play()
          toast.success(t("notifications.completed"), {
            theme: darkBg ? "dark" : "light",
          })
          setClickSound(false)
          setMinutes(customMinutes)
          setSeconds(0)
          setStart(false)
          if (autoMode) {
            setStart(true)
          }
        }
      }, 1000)

      return () => clearInterval(timer)
    }
  })

  const [clickSound, setClickSound] = useState(false)

  const handleTimer = () => {
    setStart(true)

    if (!clickSound) {
      new Audio(click).play()
      setClickSound(true)
    } else if (clickSound) {
      new Audio(pullClick).play()
      setClickSound(false)
    }

    if (start) {
      clearInterval(timer)
      setStart(false)
    }
  }

  const switchMode = (mode) => {
    switch (mode) {
      case "pomodoro":
        clearInterval(timer)
        setChosenMode("pomodoro")
        setClickSound(false)
        setStart(false)
        setMinutes(25)
        setSeconds(0)
        break
      case "short":
        clearInterval(timer)
        setChosenMode("short")
        setClickSound(false)
        setStart(false)
        setMinutes(5)
        setSeconds(0)
        break
      case "long":
        clearInterval(timer)
        setChosenMode("long")
        setClickSound(false)
        setStart(false)
        setMinutes(15)
        setSeconds(0)
        break
      case "custom":
        clearInterval(timer)
        setChosenMode("custom")
        setClickSound(false)
        setStart(false)
        setMinutes(customMinutes)
        setSeconds(0)
        break
      default:
        break
    }
  }

  const darkModeToggle = (e) => {
    const isDark = e.target.checked
    setDarkBg(isDark)
    localStorage.setItem("darkMode", isDark)
    document.body.style.backgroundColor = isDark
      ? "rgb(65, 65, 65)"
      : "rgb(205, 205, 215)"
  }

  const [autoMode, setAutoMode] = useState(false)
  const btnRef = useRef(null)

  const autoModeToggle = (e) => {
    setAutoMode(e.target.checked)

    if (!autoMode && start) {
      btnRef.current.click()
    }
  }

  const [customMinutes, setCustomMinutes] = useState(0)

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className='container'>
        <div className='mode'>
          <button
            className={chosenMode === "pomodoro" ? "active" : "mode-btn"}
            onClick={() => switchMode("pomodoro")}
          >
            {t("modes.pomodoro")}
          </button>
          <button
            className={chosenMode === "short" ? "active" : "mode-btn"}
            onClick={() => switchMode("short")}
          >
            {t("modes.short")}
          </button>
          <button
            className={chosenMode === "long" ? "active" : "mode-btn"}
            onClick={() => switchMode("long")}
          >
            {t("modes.long")}
          </button>
        </div>

        <div className='mode' style={{ marginTop: ".5rem", marginBottom: "0" }}>
          <button
            className={chosenMode === "custom" ? "active-input" : "input-btn"}
            onClick={() => switchMode("custom")}
          >
            {t("modes.custom")}:{" "}
            <input
              className='numberInput'
              type='number'
              value={customMinutes}
              min='0'
              onChange={(e) => setCustomMinutes(e.target.value)}
            ></input>
          </button>
        </div>

        <h1 className='timer'>{currentTimer}</h1>
        <button
          ref={btnRef}
          className={start ? "pause-color" : "start-color"}
          onClick={handleTimer}
        >
          {start ? <FaPause className='icon' /> : <FaPlay className='icon' />}
          {start ? t("buttons.pause") : t("buttons.start")}
        </button>

        <div className='tools-container'>
          <div className='tool'>
            <input
              type='checkbox'
              onChange={autoModeToggle}
              checked={autoMode}
            />
            <p>{t("settings.autoMode")}</p>
          </div>
          <div className='tool'>
            <input type='checkbox' onChange={darkModeToggle} checked={darkBg} />
            <p>{t("settings.darkMode")}</p>
          </div>
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  )
}

export default Timer
