import React from 'react'
import { useParams, Link } from 'react-router-dom'
import blogPosts from '../blogData'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return <div className="container py-16 text-center text-white/70">Articolul nu a fost găsit.</div>
  }

  return (
    <div className="container py-8">
      <Link to="/" className="text-white/70 hover:text-white">← Înapoi la <span className="gold">Urban.Zebra</span></Link>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-2xl my-6 border border-white/10" />
      <h1 className="text-3xl font-bold mb-2 gold">{post.title}</h1>
      <p className="text-white/60 mb-6 text-sm">{post.date}</p>
      <p className="leading-relaxed whitespace-pre-line text-white/90">{post.content}</p>
    </div>
  )
}
