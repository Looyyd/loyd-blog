import {  getAllPosts } from '../../lib/api'
import type PostType from '../../interfaces/post'
import { Navbar } from "../components/NavBar";
import Link from "next/link";
import { Main } from "../components/Main";
import { Body } from "../components/Body";
import { MainHeader } from "../components/MainHeader";
import { Paragraph } from "../components/Paragraph";


type Props = {
  allPosts: PostType[]
}

export default function Blog({ allPosts }: Props) {
  const blogList =  allPosts.map(post => {
      return (
        <li key={post.slug}>
          <Paragraph>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </Paragraph>
        </li>
      )
    }
  )

  return (
    <>

      <Body>
        <Navbar></Navbar>
        <Main>
          <div>
          <MainHeader title={"Blog"}/>
            <ul>
              {
                allPosts.length===0 ? "Nothin here yet." : blogList
              }
            </ul>
          </div>
        </Main>
      </Body>

    </>
  )
}

export const getStaticProps =  () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}