import React from 'react'
import { Post as PostProps } from '../stores/userTypes'
import '../styles/main.css'

const UserPost = React.memo(({ title, body }: PostProps) => {
  return (
    <article className="wrap">
      <header>
        <strong>{title}</strong>
      </header>
      <p>{body}</p>
    </article>
  )
})
UserPost.displayName = 'UserPost'
export default UserPost
