// lint-staged.config.js

// const micromatch = require('micromatch')

module.exports = {
  '*.{js, ts}': (files) => {
    // from `files` filter those _NOT_ matching `*test.js`
    const match = micromatch.not(files, '**/api/*')
    return `eslint ${match.join(' ')}`
  },
 
  
  // '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  // '**/*.ts?(x)': () => 'npm run build-types',
  // '*.json': ['prettier --write'],
  // "linters": {
  //   "src/**/*.js": ["formatter --write", "git add"],
  // },    
  // "ignore": ["node_modules", "dist", "package-lock.json", "api"],
};    



 