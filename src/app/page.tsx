import { UserButton } from '@clerk/nextjs'
export default function Pag() {
  return (
    <div className="flex flex-col gay-y-4">
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
