import { notFound } from 'next/navigation'

import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUsername } from '@/lib/user-service'

interface UserPageProps {
  params: {
    username: string
  }
}
const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username)
  if (!user) {
    notFound()
  }
  const isFollowing = await isFollowingUser(user.id)
  return (
    <div className="flex flex-col gap-y-2">
      <p>User: {user.username}</p>
      <p>User ID: {user.id}</p>
      <p>isFollowing: {`${isFollowing}`}</p>
    </div>
  )
}

export default UserPage
