export default function Timeline() {
    return (
        <>
            <MessageBox />
        </>
    )
}

function MessageBox() {
    return (
        <div className="max-width-lg m-auto shadow p-4 rounded-lg">
            <textarea rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 rounded-lg resize-none" placeholder="Whats on your mind?"></textarea>
            <div className="w-full flex items-baseline justify-end mt-2">
                <button className="w-20 bg-blue-500 hover:bg-blue-400 active:bg-blue-100 border border-blue-700 hover:border-blue-600 text-center p-2 rounded-md text-sm text-white">Post</button>
            </div>
        </div>
    )
}
