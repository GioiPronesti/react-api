import PostCard from '../PostCard/PostCard'
import style from './Main.module.css'
//import { starterPosts } from '../../posts.js'
import Tags from '../tags/Tags.jsx'
import {  useEffect, useState } from 'react'
import Button from '../Button/Button.jsx'
import axios from 'axios'


/*Ampliare l’esercizio precedente aggiungendo, nel form, i campi per immagine, contenuto, categoria (select), tags (lista di checkbox) e uno stato per pubblicare o meno l’articolo. Utilizzare un unico oggetto per gestire tutti i dati del form.
BONUS:
Aggiungere uno useEffect che mostri un alert quando l’utente clicca sull’apposita checkbox per pubblicare un articolo.*/ 

/*integriamo le API che abbiamo sviluppato durante il modulo su ExpressJS.
Al caricamento dell’applicazione, sfruttando l’hook useEffect, recuperiamo la lista dei post dal backend e la mostriamo nella tabella.
Durante il submit del form, assicuriamoci che questi dati vengano inviati al backend e correttamente salvati.
ATTENZIONE
il nostro server express non è in grado di gestire le richieste che arrivano da un origine diversa. Per farlo bisogna abilitare le CORS sulle rotte. installata la libreria cors con npm e aggiungete il middleware come visto in classe e come è indicato in documentazione.
*/


 const initialFormData = {
    title: "",
    image: "",
    content: "",
    tags : "",
    category: "",
    published: true
  }

  export const API_BASE_URI= "http://localhost:3000/"
export default function Main() {

  // dichiaro le mie variabili di stato, reattive 
  const [posts,setPosts] = useState(starterPosts)             // post
  const [publishedPosts, setPublishedPosts ] = useState([])   // published post
  const [tags,setTags] = useState([])                         // tags 

  // variabile di stato, formData variabile reattiva
  const [formData,setFormData] = useState(initialFormData)

  useEffect(() => {
   setPublishedPosts(posts.filter((post) => post.published === true ))


  
   const tagsItems = []

     posts.forEach(post => {

       const postTags = post.tags
       console.log(postTags)

       postTags.forEach((tag) => {

        if(!tagsItems.includes(tag)) {
           tagsItems.push(tag)
        }
          // !tags.includes(tag) && tags.push(tag)
      })
    })
    setTags(tagsItems)

  },[posts])
  

  useEffect(() => {
    console.log(`Stai creando un post ${formData.published ? 'pubblico' : 'non pubblico'}`) 
  },[formData.published])
  //const [title,setTitle] = useState('')

  function addPost(e) {
    e.preventDefault()

    //const newTitle = title.trim()
    //if(formData.title.trim() === '') return

    const post = {
      id: Date.now(),
      ...formData,
      
    //  image: undefined /* compila questo campo */,
     // content:
     //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: formData.tags.split(',').map((tag) => tag.trim())
     // published: true,
    }

    setPosts([...posts,post])
    setFormData(initialFormData) // resetto il form
    //setTitle('')
     
  }

  function deletePost(id) {

    setPublishedPosts(publishedPosts.filter(post => post.id !== id ))

  }

  function handleFormData(e){

    // ottengo i valori delle chiavi e loro rispettivi valori
    //const key = e.target.name
    //const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

    const { name, value, type, checked } = e.target

    // duplico l'oggetto,  che mi serve per aggiornare le proprietà di Initial Form Data e far reagire formData
    
    //const newFormData = {...formData}
    //newFormData[key] = value
    
    // aggiorno la mia variabile di stato

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })

  }
    



  // console.log('tags',tags)

  return (
    <main>
      <section className={style.section}>
        <div className="container">
          <form onSubmit={addPost} action="" className='form'>
            <div>
              <label htmlFor="title">Titolo</label>
              <input onChange={handleFormData} id='title' name='title' value={formData.title} type="text" placeholder='Titolo del post' />
            </div>
            <div>
              <label htmlFor="image">Immagine (src)</label>
              <input onChange={handleFormData} type='text' name="image" id="image" value={formData.image} placeholder='Immagine del post'/>
            </div>
            <div>
              <label htmlFor="category">Categoria</label>
              <select value={formData.category} onChange={handleFormData} name="category" id="category">
                <option value="">Seleziona categoria</option>
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
                <option value="express">Express</option>
                <option value="react">React</option>
              </select>
            </div>
            <div>
              <label htmlFor="content">Contenuto</label>
              <textarea onChange={handleFormData} value={formData.value} name="content" id="content" placeholder='Contenuto del post'></textarea>
            </div>
            <div>
              <label htmlFor="tags">Tags</label>
              <input onChange={handleFormData} id='tags' type="text" value={formData.tags} name='tags' placeholder='Tag del post' />
            </div>
            <div>
              <input onChange={handleFormData} type="checkbox" checked={formData.published} id='published' name='published' />
              <label htmlFor="published">Pubblicato</label>
            </div>
            <Button text='Salva' /> 
          </form>
        </div>
        <div className="container">
          <h1 className={style.section_title}>Il mio blog</h1>
        </div>
        <div className="container">
          <Tags className={style.tags_centered } tags={tags} />
        </div>
        <div className="container">
          <div className="row">
            { publishedPosts.map((el) => (
              <div key={el.id} className="col-4">
                <PostCard onDelete={() => deletePost(el.id)} post={el} />
              </div>
            ))}          
          </div>
        </div>
      </section>
    </main>
  )
}