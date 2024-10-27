import NavbarDashboard from "@/components/navbarDashboard/NavbarDashboard"

function DashboardLayout({children}: {children: React. ReactNode}) {
  return (
    <div>
        <NavbarDashboard />
        {children}
    </div>
  )
}

export default DashboardLayout