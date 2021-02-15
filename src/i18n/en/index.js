// This is just an example,
// so you can safely delete all default props below

export default {
  pages: {
    login: {
      title: 'Login',
      submit: 'Login',
      success: 'login success',
      invalid: 'Invalid Login'
    },
    menu: {
      top: 'Top',
      home: 'Home',
      create: 'Add',
      list: 'List',
      logout: 'Sign Out',
      contact: 'Contact',
      sitepolicy: 'Policy',
      terms: 'Terms',
      privacy: 'Privacy'
    }
  },
  errors: {
    required: 'can\'t be blank',
    maxLen: 'text length can\'t exceed {value} bits',
    minLen: 'text length can\'t be less than {value} bits',
    max: 'no more than {value}',
    min: 'can\'t be less than {value}',
    model_invalid: 'Validation failed: {errors}'
  },
  buttons: {
    prompt: 'Please select',
    create: 'Create',
    update: 'Update'
  }
}
