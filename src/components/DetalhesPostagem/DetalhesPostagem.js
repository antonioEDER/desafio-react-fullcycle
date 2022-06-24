import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function DetalhesPostagem() {

  const { id } = useParams()

  const [post, setPost] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        if (dados) {
          setPost({
            id: dados.id,
            title: dados.title,
            userId: dados.userId,
            body: dados.body
          })
        }
      })
  }, [id])

  if (post.id !== undefined) {
    return <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/postagens">Voltar</Link>
    </>
  }

  return <>
    <h1>Usuário não encontrado!</h1>
    <Link to="/postagens">Voltar</Link>
  </>
}

export default DetalhesPostagem