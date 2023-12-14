import AuthorAvatar from 'src/components/AuthorAvatar'
import CoverImage from 'src/components/CoverImage'
import Date from 'src/components/PostDate'
import type { Post } from 'src/lib/sanity.queries'
import Link from 'next/link'

export default function HeroPost(
  props: Pick<
    Post,
    'seo' | 'author' | 'slug' | '_updatedAt'
  >,
) {
  const { seo, _updatedAt, author, slug } = props
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={seo.title} image={seo.image} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {seo.title || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={_updatedAt} />
          </div>
        </div>
        <div>
          {seo.description && <p className="mb-4 text-lg leading-relaxed">{seo.description}</p>}
          {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )}
        </div>
      </div>
    </section>
  )
}
