import Container from 'src/components/BlogContainer'
import BlogHeader from 'src/components/BlogHeader'
import Layout from 'src/components/BlogLayout'
import MoreStories from 'src/components/MoreStories'
import PostBody from 'src/components/PostBody'
import PostHeader from 'src/components/PostHeader'
import PostPageHead from 'src/components/PostPageHead'
import PostTitle from 'src/components/PostTitle'
import SectionSeparator from 'src/components/SectionSeparator'
import * as demo from 'src/lib/demo.data'
import type { Post, Settings } from 'src/lib/sanity.queries'
import { notFound } from 'next/navigation'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props
  const { title = demo.title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} level={2} />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}
