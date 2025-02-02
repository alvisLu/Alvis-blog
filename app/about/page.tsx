import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { experience } from '@/data/experience'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  const pdfLink = experience.pdfLink
  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        相了解更多關於我的經歷，請前往 <a href="/experience">Experience</a> 頁面或是下載{' '}
        <a href={pdfLink}>PDF</a>。
      </AuthorLayout>
    </>
  )
}
