import Avatar from 'src/components/AuthorAvatar'
import CoverImage from 'src/components/CoverImage'
import Date from 'src/components/PostDate'
import type { Post } from 'src/lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  author,
  seo,
  _updatedAt,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={seo.title}
          image={seo.image}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {seo.title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={_updatedAt} />
      </div>
      {seo.description && <p className="mb-4 text-lg leading-relaxed">{seo.description}</p>}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
