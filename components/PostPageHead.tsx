import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'

export interface PostPageHeadProps {
  settings: Settings
  post: Post
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
  const title = settings.title ?? demo.title
  return (
    <Head>
      <title>{post.title ? `${post.title} | ${title}` : title}</title>
      <BlogMeta />
      {post.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
      <script
        key="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `/posts/${post.slug}`,
                name: post.title,
                url: `/posts/${post.slug}`
              },
              headline: post.title,
              description: post.excerpt,
              image: {
                '@type': 'ImageObject',
                url: urlForImage(post.coverImage)
                  .width(1200)
                  .height(627)
                  .fit('crop')
                  .url(),
                height: 627,
                width: 1200,
              },
              datePublished: post._createdAt,
              dateModified: post._updatedAt,

              publisher: {
                '@type': 'Person',
                name: post.author.name,
                image: {
                  '@type': 'ImageObject',
                  url: urlForImage(post.author.picture)
                    .width(1200)
                    .height(627)
                    .fit('crop')
                    .url(),
                  width: 300,
                  height: 300,
                },
              },
            }
          )
        }}
      />
    </Head>
  )
}
