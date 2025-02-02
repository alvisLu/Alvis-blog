import { experience } from '@/data/experience'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Experience' })

export default function Page() {
  return (
    <>
      <div className="text-right">
        <Link
          href={experience.pdfLink}
          className="text-lg font-bold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Download PDF`}
        >
          點此下載 PDF
        </Link>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2  pt-6 md:space-y-5">
          <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            EMPLOYMENT
          </h2>
        </div>
        <div className="space-y-2 pt-6 md:space-y-5">
          {experience.employment.map((e) => (
            <div key={e.company}>
              <div className="flex grid-cols-3 items-center justify-between">
                <p className="text-lg font-bold leading-7 ">{e.position}</p>
                <div className="flex space-x-2">
                  <a
                    href={e.link}
                    className="text-lg font-extrabold leading-9 tracking-tight text-blue-500 dark:text-blue-300 sm:text-xl sm:leading-10 md:text-2xl md:leading-14"
                  >
                    {e.company}
                  </a>
                  <p className="text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-2xl md:leading-14">
                    {e.companyZh}
                  </p>
                </div>
                <p className="text-lg font-bold leading-7 text-gray-500 dark:text-gray-400">
                  {e.date}
                </p>
              </div>

              {e.tasks.map((t) => (
                <div key={t.title}>
                  <p className="text-lg font-bold leading-7 text-gray-500 dark:text-gray-400">
                    {`${t.title}: `}
                  </p>
                  <ul className="list-disc pl-8">
                    {t.descriptions.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2  pt-6 md:space-y-5">
          <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            EDUCATION
          </h2>
        </div>

        <div className="space-y-2 pt-6 md:space-y-5">
          <div className="flex grid-cols-3 items-center justify-between">
            <p className="text-lg font-bold leading-7 ">{experience.education.degree}</p>
            <div className="flex space-x-2">
              <p className="text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-2xl md:leading-14">
                {experience.education.school}
              </p>
            </div>
            <p className="text-lg font-bold leading-7 text-gray-500 dark:text-gray-400">
              {experience.education.date}
            </p>
          </div>

          <ul className="list-disc pl-8">
            {experience.education.details.map((d) => (
              <li key={d.content}>
                {d.content} (
                <a href={d.link} className="text-blue-500 dark:text-blue-300 ">
                  {d.link}
                </a>
                )
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2  pt-6 md:space-y-5">
          <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            SKILLS
          </h2>
        </div>

        <div className="space-y-2 pt-6 md:space-y-5">
          <div className="flex grid-cols-3  justify-between">
            {experience.skills.map((s) => (
              <div key={s.type}>
                <p className="text-lg font-bold leading-7 ">{s.type}</p>
                <ul className="list-disc pl-8">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
