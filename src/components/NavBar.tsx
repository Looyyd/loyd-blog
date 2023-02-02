import Link from "next/link";



export const Navbar = () => {
  return (
    <nav className={"sidebar"}>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/blog'}>Blog</Link></li>
      </ul>
    </nav>
  )
}

