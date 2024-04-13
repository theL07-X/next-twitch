import { cn } from '@/lib/utils'

interface LiveBadgeProps {
  className?: string
}
const LiveBadge = ({ className }: LiveBadgeProps) => {
  return (
    <div
      className={cn(
        'ronde-md border border-background bg-rose-500 p-0.5 px-1.5 text-center text-[10px] font-semibold tracking-wide',
        className,
      )}
    >
      Live
    </div>
  )
}

export default LiveBadge
