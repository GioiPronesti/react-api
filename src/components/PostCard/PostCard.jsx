import Button from '../Button/Button.jsx';
import style from './PostCard.module.css';
import placeholder from '../../assets/not-available.jpg';
import Tags from '../tags/Tags.jsx';
import TrashIcon from '../trash-icon.jsx';

export default function PostCard({ onDelete = () => {}, post = {} }) {

  const { 
    title,
    image,
    content,
    tags,
    // published 
  } = post

  // console.log(id, title, image, tags, content, published)


  // function callback () {
  //   console.log('elimina questo post')
  // }

  return (
    <div className={style.card}>
      <img className={style.image} src={image || placeholder} alt="" />
      <div className={style.card_body}>
        <h3 className={style.card_title}>{title}</h3>
        <Tags tags={tags} />
        <p className={style.card_description}>{ content }</p>
        <div className={style.card_footer}>
          <Button />
          <button onClick={onDelete} className={style.icon}>
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  )
}