import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/PostBody'
import { getPostBySlug, getAllPosts } from '../../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../../lib/constants'
import markdownToHtml from '../../../lib/markdownToHtml'
import type PostType from '../../../interfaces/post'
import { Navbar } from "../../components/NavBar";

type Props = {
  post: PostType

}

export default function Post({ post }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
        { router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <Navbar></Navbar>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Filip Niedzielski
                </title>
                {/*<meta property="og:image" content={post.ogImage.url} />*/}
              </Head>

              <PostBody content={post.content} />
            </article>
          </>
        )}
    </div>

  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}