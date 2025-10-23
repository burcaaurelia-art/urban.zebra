import React from 'react'
import { Link } from 'react-router-dom'
import blogPosts from '../blogData'

export default function BlogList() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        <span className="text-white">Urban</span><span className="gold">.Zebra</span>
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="card rounded-2xl overflow-hidden hover:shadow-[0_0_0_1px_rgba(212,175,55,0.3)] transition">
            {post.image ? (
  <img
    src={post.image}
    alt={post.title}
    className="w-full h-48 object-cover bg-black"
    loading="lazy"
    onError={(e) => {
      e.target.src = 'https://source.unsplash.com/600x400/?city,romania';
    }}
  />
) : (
  <div className="w-full h-48 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white/50 text-sm">
    Fără imagine
  </div>
)}
            <div className="p-5">
              <h2 className="font-semibold text-lg mb-1 gold">{post.title}</h2>
              <p className="text-white/60 text-sm mb-2">{post.date}</p>
              <p className="text-white/80 text-sm">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
