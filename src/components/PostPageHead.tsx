import BlogMeta from 'src/components/BlogMeta'
import { urlForImage } from 'src/lib/sanity.image'
import { Post, Settings } from 'src/lib/sanity.queries'
import Head from 'next/head'

export interface PostPageHeadProps {
  settings: Settings
  post: Post
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
  const title = settings.title
  return (
    <Head>
      <title>{post.seo.title ? `${post.seo.title} | ${title}` : title}</title>
      <BlogMeta />
      {post.seo.image?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.seo.image)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </Head>
  )
}
