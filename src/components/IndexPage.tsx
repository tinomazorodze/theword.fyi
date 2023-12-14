import Container from 'src/components/BlogContainer'
import BlogHeader from 'src/components/BlogHeader'
import Layout from 'src/components/BlogLayout'
import HeroPost from 'src/components/HeroPost'
import IndexPageHead from 'src/components/IndexPageHead'
import MoreStories from 'src/components/MoreStories'
import type { Post, Settings } from 'src/lib/sanity.queries'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title, description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
          {heroPost && (
            <HeroPost
              _updatedAt={heroPost._updatedAt}
              seo={heroPost.seo}
              author={heroPost.author}
              slug={heroPost.slug}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
