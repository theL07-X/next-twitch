'use client'

import { useSidebar } from '@/store/use-sidebar'
import { useIsClient } from 'usehooks-ts'

import { cn } from '@/lib/utils'

import { FollowingSkeleton } from './following'
import { RecommendedSkeleton } from './recommended'
import { ToggleSkeleton } from './toggle'

interface WrapperProps {
  children: React.ReactNode
}
export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state)
  const isClient = useIsClient()
  if (!isClient) {
    // 服务端渲染时使用骨架屏
    return (
      <aside className="fixed left-0 z-50 flex h-full w-[70px] flex-col border-r border-[#2d2e35] bg-background lg:w-60">
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    )
  }
  return (
    <aside
      className={cn(
        'fixed left-0 z-50 flex h-full w-60 flex-col border-r border-[#2d2e35] bg-background',
        collapsed && 'w-[70px]',
      )}
    >
      {children}
    </aside>
  )
}
