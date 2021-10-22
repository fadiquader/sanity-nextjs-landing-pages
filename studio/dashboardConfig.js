export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61722f76cbe240819c8e3cfc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-abjsg3ss',
                  apiId: '26bfda80-635e-4adb-9d88-8569804f8c6f'
                },
                {
                  buildHookId: '61722f76d9167d6ff2298e0a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e9ozpmmo',
                  apiId: '7cee53d6-ac2a-42c5-afa8-8af69c484f1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fadiquader/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e9ozpmmo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
