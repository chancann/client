const { atom } = require('recoil')

const authenticatedUser = atom({
  key: 'authenticated',
  default: {
    check: false,
    user:{name:'Chancan'}
  }
})

export {authenticatedUser}
