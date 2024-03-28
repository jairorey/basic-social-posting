import React from 'react'
import { User } from '../stores/userTypes'
import { useNavigate } from 'react-router-dom'

//export default React.memo(function UserItem({
const UserItem = React.memo(({ id, name, username, email, phone }: User) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/user-detail/${id}`)
  }
  return (
    <article key={id} onClick={handleClick}>
      <header>{username}</header>
      <main>
        <label>{name}</label>
        <label>{phone}</label>
        <label>{email}</label>
      </main>
    </article>
  )
})

UserItem.displayName = 'UserItem'
export default UserItem
