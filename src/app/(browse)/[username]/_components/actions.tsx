'use client'

import { useTransition } from 'react'

import { onFollow, unFollow } from '@/actions/follow'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

interface ActionsProps {
  isFollowing: boolean
  userId: string
}
export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition()

  const onClick = () => {
    startTransition(() => {
      if (!isFollowing) {
        onFollow(userId)
          .then((data) =>
            toast.success(`You are now following ${data.following.username}`),
          )
          .catch((err) => {
            toast.error(err instanceof Error ? err.message : err)
          })
      } else {
        unFollow(userId)
          .then((data) =>
            toast.success(`You are unFlowing ${data.following.username}`),
          )
          .catch((err) => {
            toast.error(err instanceof Error ? err.message : err)
          })
      }
    })
  }
  return (
    <Button disabled={isPending} onClick={onClick} variant="primary">
      {isFollowing ? 'UnFollow' : 'Follow'}
    </Button>
  )
}
