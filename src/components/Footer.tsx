export default function Footer() {
    return (

        <footer className="p-4 bg-white shadow md:flex md:items-center w-screen justify-between md:p-6 dark:bg-slate-900">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="www.linkedin.com/in/gustavo-de-almeida-bazan" className="hover:underline" target="_blank">Gustavo de Almeida Bazan</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                <li>
                    <a href="/#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Início</a>
                </li>
                <li>
                    <a href="/#/#about" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Habilidades</a>
                </li>
                <li>
                    <a href="/#/#projects" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Projetos</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/gustavo-de-almeida-bazan" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contato</a>
                </li>
            </ul>
        </footer>
    )
}