const { atom } = require('recoil')

const authenticatedUser = atom({
  key: 'authenticated',
  default: {
    check: false,
    user:{name:'Chancan Yadi'}
  }
})

export {authenticatedUser}
