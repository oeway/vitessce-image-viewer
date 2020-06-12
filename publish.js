var ghpages = require('gh-pages')
ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    dotfiles: true,
    message: 'Manually deployed.',
    repo: 'git@github.com:oeway/vitessce-image-viewer.git',
  },
  function(err) {
    if (err) {
      console.error(err)
    } else {
      console.log('deployed successfully.')
    }
  }
)
