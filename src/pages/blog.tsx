import { getPostBySlug, getAllPosts } from '../../lib/api'
import type PostType from '../../interfaces/post'
import { NextPage } from "next";
import { Navbar } from "../components/NavBar";
import Link from "next/link";


type Props = {
  allPosts: PostType[]
}

export default function Blog({ allPosts }: Props) {
  return (
    <>

      <Navbar></Navbar>
      {allPosts.map(post => {
          return (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </div>
              )
      })
      }

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