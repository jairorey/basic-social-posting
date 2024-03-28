import { useEffect } from 'react'
import { useUserStore } from '../stores/userStore'
import UserItem from '../components/UserItem'

const Home: React.FC<object> = () => {
  const { users, fetch } = useUserStore()

  useEffect(() => {
    fetch()
  }, [fetch])

  const renderUsers = (): undefined | JSX.Element[] => {
    if (users && users.length) {
      return users.map((user, index) => <UserItem key={index} {...user} />)
    }
    return
  }

  return (
    <div>
      <h1>Users</h1>
      {renderUsers()}
    </div>
  )
}

export default Home
