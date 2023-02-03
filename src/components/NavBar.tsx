import Link from "next/link";
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useRouter } from "next/router";






const Logo = () => {
  return(
    <div>

    </div>
  )
}

const navItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'about',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/blog': {
    name: 'blog',
    x: 127,
    y: 69,
    w: '56px',
  },
};

interface NavButtonProps {
  name: string
  x: number
  y: number
  w: string
}

type pathType = '/' | '/blog' | '/about'


interface NavButtonsProps {
  '/': NavButtonProps
  '/about': NavButtonProps
  '/blog': NavButtonProps
}

const NavButtons = (props:NavButtonsProps) => {
  const { asPath } = useRouter()
  console.log(asPath)

  let path : pathType = '/'

  if(asPath.startsWith('/blog')){
    path = '/blog'
  }
  else if(asPath.startsWith('/about')){
    path = '/about'
  }


  return (
    <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">

      {Object.entries(navItems).map(([path, { name }]) => {
        const isActive = path === asPath;

        return (
          <Link
            key={path}
            href={path}
            className={clsx(
              'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]',
              {
                'text-neutral-500': !isActive,
                'font-bold': isActive,
              }
            )}
          >
            {name}
          </Link>
        );
      })}
    </div>
  )
}

//Inspired by https://leerob.io/blog

export const Navbar = () => {


  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <NavButtons {...navItems} />

        </nav>
      </div>
    </aside>
  )
}

