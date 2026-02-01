import { Footer } from "@/components/layouts/Footer"
import { Navbar } from "@/components/layouts/Navbar"

const layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default layout