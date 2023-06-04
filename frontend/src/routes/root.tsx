import Navbar from '../components/navbar.tsx'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <>
            <Navbar />
            <main className='max-w-screen-lg m-auto'>
                <Outlet />
            </main>
        </>
    )
}