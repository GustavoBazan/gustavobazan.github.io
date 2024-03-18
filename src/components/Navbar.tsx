import { useState, useEffect } from "react";
import ProjectsLink from "./ProjectsLink";

import HamburguerMenu from "./HamburguerMenu";


const links = [
    {
        name: 'Início',
        link: 'home'
    },
    {
        name: 'Habilidades',
        link: 'about'
    },
];





export default function Navbar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            };
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value);
    };

    const elements = {
        container: {
            base: ' w-screen h-16 flex flex-row items-center justify-between pl-8 pr-8 fixed z-50 outline outline-1 ',
            theme: ' outline-slate-300/5 font-interface ',
            scrolled: ' backdrop-blur-sm bg-slate-900/95 backdrop-brightness-110 ',
            responsive: ' lg:pl-72 lg:pr-72 lg:w-screen lg:h-16 lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-between md:fixed '
        },
        links: {
            base: ' hidden text-slate-200 text-lg hover:text-slate-400 ',
            theme: '',
            responsive: ' md:ml-1 lg:ml-5 lg:flex ',
            active: ' font-bold '
        }
    }

    const cl = {
        container: elements.container.base + elements.container.theme + (scrolled && (elements.container.scrolled)) + elements.container.responsive,
        links: elements.links.base + elements.links.theme + elements.links.responsive
    }

    return (

        <div id="NavBar" className={cl.container}>
            <div className="w-auto self-start h-full flex items-center ">
                <p className=" text-slate-200 font-bold text-2xl"><a href="/">BAZAN</a></p>
            </div>
            <div className="w-auto h-full flex flex-row items-center">
                <ul className={cl.links}>

                    {
                        links.map((link) => <li className={(activeLink === link.link && (elements.links.active)) + cl.links}><a href={'/#/#' + link.link} onClick={() => onUpdateActiveLink(link.link)}>{(link.name)}</a></li>)
                    }

                    <ProjectsLink />

                </ul>
                <HamburguerMenu />
            </div>
        </div>

    )

};