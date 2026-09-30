import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  redirects: {
    '/departments': '/use-cases/',
    '/departments/banking': '/use-cases/?department=banking',
    '/departments/hr': '/use-cases/?department=hr',
    '/departments/sales': '/use-cases/?department=sales',
    '/en/departments': '/en/use-cases/',
    '/en/departments/banking': '/en/use-cases/?department=banking',
    '/en/departments/hr': '/en/use-cases/?department=hr',
    '/en/departments/sales': '/en/use-cases/?department=sales',
  },
  integrations: [
    starlight({
      title: {
        vi: 'SoftwareOne Learning M365 Copilot',
        en: 'SoftwareOne Learning M365 Copilot',
      },
      description: 'SoftwareOne Learning M365 Copilot use cases, prompts, and guidance.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Tiếng Việt', lang: 'vi' },
        en: { label: 'English', lang: 'en' },
      },
      tableOfContents: false,
      pagination: false,
      components: {
        Footer: './src/components/SoftwareOneFooter.astro',
      },
      sidebar: [
        {
          label: 'Khám phá',
          translations: { en: 'Explore' },
          items: [
            { label: 'Tổng quan', translations: { en: 'Overview' }, link: '/' },
            { label: 'Use Case thực tế & phòng ban', translations: { en: 'Use cases & departments' }, link: '/use-cases/' },
            { label: 'Top 10 Quick Wins', translations: { en: 'Top 10 Quick Wins' }, link: '/quick-wins/' },
            { label: 'Copilot Chat', translations: { en: 'Copilot Chat' }, link: '/copilot-chat/' },
          ],
        },
        {
          label: 'Agents',
          translations: { en: 'Agents' },
          items: [
            { label: 'Researcher', link: '/agents/researcher/' },
            { label: 'Analyst', link: '/agents/analyst/' },
            { label: 'Cowork', link: '/agents/cowork/' },
            { label: 'Agent Builder', link: '/agents/agent-builder/' },
          ],
        },
        {
          label: 'Copilot trong ứng dụng',
          translations: { en: 'Copilot in apps' },
          items: [
            { label: 'Teams', translations: { en: 'Teams' }, link: '/apps/teams/' },
            { label: 'Outlook', translations: { en: 'Outlook' }, link: '/apps/outlook/' },
            { label: 'Excel', translations: { en: 'Excel' }, link: '/apps/excel/' },
            { label: 'PowerPoint', translations: { en: 'PowerPoint' }, link: '/apps/powerpoint/' },
            { label: 'Word', translations: { en: 'Word' }, link: '/apps/word/' },
            { label: 'OneNote', translations: { en: 'OneNote' }, link: '/apps/onenote/' },
            { label: 'Forms', translations: { en: 'Forms' }, link: '/apps/forms/' },
            { label: 'Whiteboard', translations: { en: 'Whiteboard' }, link: '/apps/whiteboard/' },
            { label: 'OneDrive', translations: { en: 'OneDrive' }, link: '/apps/onedrive/' },
            { label: 'Planner', translations: { en: 'Planner' }, link: '/apps/planner/' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      markdown: {
        processedDirs: ['./content'],
      },
      pagefind: true,
    }),
  ],
});