import { db } from './db'

export const getRecommended = async () => {
  const users = await db.user.findMany({
    /**降序排列 */
    orderBy: {
      createAt: 'desc',
    },
  })
  return users
}
