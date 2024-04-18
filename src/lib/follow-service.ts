import { getSelf } from './auth-service'
import { db } from './db'

// 获取所有粉丝(关注者)列表
export const getFollowedUsers = async () => {
  try {
    const self = await getSelf()
    return db.follow.findMany({
      where: {
        followerId: self.id,
      },
      include: {
        following: true,
      },
    })
  } catch {
    return []
  }
}

// 是否是粉丝(关注者)
export const isFollowingUser = async (id: string) => {
  try {
    const self = await getSelf()
    const otherUser = await db.user.findUnique({ where: { id } })
    if (!otherUser) {
      throw new Error('User not found')
    }
    if (otherUser.id === self.id) {
      return true
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    })
    return !!existingFollow
  } catch {
    return false
  }
}

/**关注某人 */
export const followUser = async (id: string) => {
  const self = await getSelf()
  const otherUser = await db.user.findUnique({
    where: { id },
  })
  if (!otherUser) {
    throw new Error('User not found')
  }
  if (self.id === otherUser.id) {
    throw new Error('Cannot follow yourself')
  }
  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  })
  if (existingFollow) {
    throw new Error('Already following')
  }
  const follow = await db.follow.create({
    data: {
      followerId: self.id,
      followingId: otherUser.id,
    },
    include: {
      follower: true,
      following: true,
    },
  })

  return follow
}

/**取消关注某人 */
export const unFollowUser = async (id: string) => {
  const self = await getSelf()
  const otherUser = await db.user.findUnique({
    where: { id },
  })
  if (!otherUser) {
    throw new Error('User not found')
  }
  if (otherUser.id === self.id) {
    throw new Error('Cannot unFollow yourself')
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  })
  if (!existingFollow) {
    throw new Error('Not following')
  }

  const follow = await db.follow.delete({
    where: {
      followerId_followingId: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    },
    include: {
      following: true,
      follower: true,
    },
  })
  return follow
}
