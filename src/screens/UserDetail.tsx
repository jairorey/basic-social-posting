import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUserStore } from '../stores/userStore'
import UserPost from '../components/UserPost'
import '../styles/main.css'

function UserDetail() {
  const { userId } = useParams()

  const { userDetail, userPosts, fetchDetails, fetchPosts } = useUserStore()

  useEffect(() => {
    //getUserDetails().then(() => getUserPosts())
    userId && fetchDetails(userId)
    userId && fetchPosts(userId)
  }, [userId, fetchDetails, fetchPosts])

  const renderPost = () =>
    userPosts?.map((post) => <UserPost key={post.id} {...post} />)

  return (
    <div>
      <section className="sidebar">
        <div className="sidebar-wrap">
          <h3>{userDetail?.username}</h3>
          <label>{userDetail?.name}</label>
          <label>{userDetail?.email}</label>
          <label>{userDetail?.phone}</label>
          <label>{userDetail?.city}</label>
        </div>
      </section>
      <aside className="content">{renderPost()}</aside>
    </div>
  )
}

export default UserDetail
