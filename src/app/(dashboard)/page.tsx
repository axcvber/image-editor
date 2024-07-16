import { protectServer } from '@/features/auth/utils'

import { Banner } from './_components/banner'
import { ProjectsSection } from './_components/projects-section'
import { TemplatesSection } from './_components/templates-section'

export default async function Home() {
  await protectServer()

  return (
    <div className='flex flex-col space-y-6 max-w-screen-xl mx-auto pb-10'>
      <Banner />
      <TemplatesSection />
      <ProjectsSection />
    </div>
  )
}
