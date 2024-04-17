'use server'

import { revalidatePath } from 'next/cache'

import { followUser, unFollowUser } from '@/lib/follow-service'

export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUser(id)
    revalidatePath('/')
    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`)
    }
    return followedUser
  } catch (err) {
    throw err
  }
}

export const unFollow = async (id: string) => {
  try {
    const unFollowedUser = await unFollowUser(id)
    revalidatePath('/')
    if (unFollowedUser) {
      revalidatePath(`/${unFollowedUser.following.username}`)
    }
    return unFollowedUser
  } catch (err) {
    throw err
  }
}
