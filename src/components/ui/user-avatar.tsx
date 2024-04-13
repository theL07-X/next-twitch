import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import LiveBadge from './live-badge'
import { Skeleton } from './skeleton'

const avatarSize = cva('', {
  variants: {
    size: {
      default: 'h-8 w-8',
      lg: 'h-14 w-14',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})
interface UserAvatarProps extends VariantProps<typeof avatarSize> {
  imageUrl: string
  username: string
  isLive?: boolean
  showBadge?: boolean
}
const UserAvatar = ({
  imageUrl,
  username,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) => {
  const canShowBadge = showBadge && isLive
  return (
    <div className="relative">
      <Avatar
        className={cn(
          isLive && 'border border-background ring-2 ring-rose-500',
          avatarSize({ size }),
        )}
      >
        <AvatarImage src={imageUrl} className="object-cover"></AvatarImage>
        <AvatarFallback>
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {canShowBadge && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 transform">
          <LiveBadge />
        </div>
      )}
    </div>
  )
}

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSize> {}
export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
  return <Skeleton className={cn('rounded-full', avatarSize({ size }))} />
}

export default UserAvatar
