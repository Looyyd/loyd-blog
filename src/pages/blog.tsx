import { getPostBySlug, getAllPosts } from '../../lib/api'
import type PostType from '../../interfaces/post'
import { NextPage } from "next";
import { Navbar } from "../components/NavBar";
import Link from "next/link";
import { Main } from "../components/Main";
import { Body } from "../components/Body";
import { MainHeader } from "../components/MainHeader";


type Props = {
  allPosts: PostType[]
}

export default function Blog({ allPosts }: Props) {
  return (
    <>

      <Body>
        <Navbar></Navbar>
        <Main>
          <div>
          <MainHeader title={"Blog"}/>
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