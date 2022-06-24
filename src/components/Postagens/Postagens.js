import React, { useState, useEffect } from 'react'

import Postagem from '../Postagem/Postagem'

function Postagens() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resposta => resposta.json())
    .then(dados => {
      const posts = dados.map(post => ({
        id: post.id,
        title: post.title,
        userId: post.userId,
        body: post.body
      }))

      setPosts(posts)
    })
  }, [])

  return (
    <>
      {posts.map(post => (
        <Postagem key={post.id} post={post} />
      ))}
    </>
  )
}

export default Postagens