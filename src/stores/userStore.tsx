import { create } from 'zustand'
import { State } from './userTypes'

export const useUserStore = create<State>()((set) => ({
  users: [],
  userDetail: undefined,
  userPosts: [],
  fetch: async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    set({ users: await result.json() })
  },
  fetchDetails: async (userId: string | number) => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )
    set({ userDetail: await result.json() })
  },
  fetchPosts: async (userId: string) => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )
    set({ userPosts: await result.json() })
  },
  isLoading: false
}))
