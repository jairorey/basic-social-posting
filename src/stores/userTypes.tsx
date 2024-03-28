export type User = {
  id: number
  name: string
  username: string
  email: string
  address?: object
  suite?: string
  city?: string
  geo?: string
  lng?: string
  phone?: string
  website?: string
  company?: object
}

export type Post = {
  userId: string | number
  id: string | number
  title: string
  body: string
}

export type State = {
  users: User[]
  userDetail: User | undefined
  userPosts: Post[]
  fetch: () => void
  fetchDetails: (userId: string) => void
  fetchPosts: (userId: string) => void
  isLoading?: boolean
}
