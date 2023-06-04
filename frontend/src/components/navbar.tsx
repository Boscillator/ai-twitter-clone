export default function Navbar() {
    return (
        <nav className="font-sans flex flex-row py-4 px-6 mb-4 bg-white shadow w-full text-left justify-between items-baseline">
            <div className="mb-2">
                <a href="/" className="text-2xl no-underline text-blue-500 hover:text-gray-500">AI Twitter Clone</a>
            </div>
            <div>
                <a href="/login" className="text-lg no-underline ml-2 text-gray-500 hover:text-blue-400">Login</a>
            </div>
        </nav>
    )
}