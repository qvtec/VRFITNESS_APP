// This is just an example,
// so you can safely delete all default props below

export default {
  pages: {
    login: {
      title: 'ログイン',
      submit: 'Login',
      success: 'ログインに成功しました',
      invalid: 'ログインに失敗しました'
    },
    menu: {
      top: 'Top',
      home: 'Home',
      create: '新規登録',
      list: '一覧',
      logout: 'ログアウト',
      contact: 'お問合せ',
      sitepolicy: 'サイトポリシー',
      terms: '利用規約',
      privacy: 'プライバシーポリシー'
    }
  },
  errors: {
    required: '入力してください',
    maxLen: '{0}文字以下にしてください',
    minLen: '{0}文字以上にしてください',
    max: '{0}以下にしてください',
    min: '{0}以上にしてください',
    model_invalid: 'バリデーションに失敗しました: {errors}'
  },
  buttons: {
    prompt: '選択してください',
    create: '登録する',
    update: '更新する'
  }
}
