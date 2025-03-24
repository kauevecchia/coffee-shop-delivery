import { Header } from "../components/Header"
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
    return (
        <div className="flex flex-col gap-24 items-center min-h-screen font-roboto bg-my-background leading-snug pb-32">
            <Header />
            <Outlet />
        </div>
    )
}