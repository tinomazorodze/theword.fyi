import Avatar from 'src/components/AuthorAvatar'
import CoverImage from 'src/components/CoverImage'
import Date from 'src/components/PostDate'
import PostTitle from 'src/components/PostTitle'
import type { Post } from 'src/lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'seo' | 'author' | 'slug' | '_updatedAt'>,
) {
  const { seo, author, slug, _updatedAt } = props
  return (
    <>
      <PostTitle>{seo.title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={seo.title} image={seo.image} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={_updatedAt} />
        </div>
      </div>
    </>
  )
}
