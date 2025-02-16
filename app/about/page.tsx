import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { resume } from '@/data/resume'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  const pdfLink = resume.pdfLink
  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        相了解更多關於我的經歷，請前往 <a href="/resume">Resume</a> 頁面或是下載{' '}
        <a href={pdfLink}>PDF</a>。
      </AuthorLayout>
    </>
  )
}
