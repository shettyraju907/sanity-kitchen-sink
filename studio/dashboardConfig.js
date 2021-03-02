export default {
  widgets: [
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
                  buildHookId: '603e7cdfdbb732008258818d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hmmqxfdz',
                  apiId: '2cbb8b98-e7e7-486d-a164-ed3f0ef54c65'
                },
                {
                  buildHookId: '603e7ce06bfd88008145964c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-goxofk7b',
                  apiId: '5d0f8ec2-1ca1-43e4-9b6d-28c74bfe0e3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shettyraju907/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-goxofk7b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
