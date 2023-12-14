import IndexPage from 'src/components/IndexPage'
import PreviewIndexPage from 'src/components/PreviewIndexPage'
import { readToken } from 'src/lib/sanity.api'
import { getAllPosts, getClient, getSettings } from 'src/lib/sanity.client'
import { Post, Settings } from 'src/lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'src/pages/_app'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { posts, settings, draftMode } = props

  if (draftMode) {
    return <PreviewIndexPage posts={posts} settings={settings} />
  }

  return <IndexPage posts={posts} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ])

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
