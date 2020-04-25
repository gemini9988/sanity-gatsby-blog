export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea4245e3ea0091bfd4ef755',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zpp3x7de',
                  apiId: '85b4e905-bf41-421d-9827-cdbeb9542eae'
                },
                {
                  buildHookId: '5ea4245f2e556c239da8eecc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7owpceyh',
                  apiId: '43aea94d-252a-410e-b86e-1f00dbd97173'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gemini9988/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7owpceyh.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
