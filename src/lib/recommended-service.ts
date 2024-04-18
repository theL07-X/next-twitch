import { getSelf } from './auth-service'
import { db } from './db'

export const getRecommended = async () => {
  let userId
  try {
    const self = await getSelf()
    userId = self.id
  } catch {
    userId = undefined
  }
  let users = []
  if (userId) {
    users = await db.user.findMany({
      // 去除自己以及已经关注的用户
      where: {
        AND: [
          {
            NOT: {
              id: userId,
            },
          },
          {
            NOT: {
              followedBy: {
                some: {
                  followerId: userId,
                },
              },
            },
          },
        ],
      },
      orderBy: {
        createAt: 'desc',
      },
    })
  } else {
    users = await db.user.findMany({
      /**降序排列 */
      orderBy: {
        createAt: 'desc',
      },
    })
  }
  return users
}
