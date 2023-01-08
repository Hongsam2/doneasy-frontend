function Footer() {
    return (
        <>
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src="/img/logo.png" className="mr-3 h-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <div>
                <a className="mr-4 md:mr-6 ">a sponsoring</a>
            </div>
            <li>
                <a href="https://www.samsung.com/sec/" className="mr-4 hover:underline md:mr-6 ">SAMSUNG</a>
            </li>
            <li>
                <a href="https://www.lg.co.kr/" className="mr-4 hover:underline md:mr-6">LG</a>
            </li>
            <li>
                <a href="https://www.apple.com/kr/" className="mr-4 hover:underline md:mr-6 ">APPLE</a>
            </li>
            <li>
                <a href="https://www.kinder.com/kr/ko/" className="hover:underline">KINDER</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">@ Doneasy Corp.
    </span>
</footer>
        </>
    )
}
export default Footer