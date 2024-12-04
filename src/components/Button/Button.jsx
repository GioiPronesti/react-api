import style from './Button.module.css'

export default function Button({ text = 'Scopri di più' }) {
  return (
    <button className={style.button}>{text}</button>
  )
}