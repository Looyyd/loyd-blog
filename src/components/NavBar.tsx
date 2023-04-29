import Link from "next/link";
import clsx from 'clsx';
import { useRouter } from "next/router";



const navItems = {
  '/': {
    name: 'Home',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'About',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/blog': {
    name: 'Blog',
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

// type pathType = '/' | '/blog' | '/about'

interface NavButtonsProps {
  '/': NavButtonProps
  '/about': NavButtonProps
  '/blog': NavButtonProps
}

const NavButtons = (navItems:NavButtonsProps) => {
  const { asPath } = useRouter()
  console.log(asPath)


  return (
    <aside className="flex float-left relative flex-row md:fixed md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">

      <a style={{fontFamily: "Nordic"}} className="text-3xl  mt-0 py-[8px] px-[12px]">F</a>

      {Object.entries(navItems).map(([path, { name }]) => {
        const isActive = path === asPath;

        return (
          <Link
            key={path}
            href={path}
            className={clsx(
              'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] mt-2',
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
    </aside>
  )
}

//Inspired by https://leerob.io/blog

export const Navbar = () => {


  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row md:flex-col items-start relative overflow-hidden px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <NavButtons {...navItems} />

        </nav>
      </div>
    </aside>
  )
}

