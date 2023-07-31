import { ReactNode } from 'react'

import { Sidebar } from 'components/Sibebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-screen flex">
      <Sidebar />
      {children}
    </section>
  )
}
