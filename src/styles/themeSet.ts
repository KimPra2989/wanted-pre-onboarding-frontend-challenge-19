const themeSet = {
  loid: {
    background: "#758b7f",
    card: "#cec7ab",
    list: '#f4f3ee',
    button: '#e8e2d6'
  },
  anya: {
    background: '#f5ddbb',
    card: "#f6b2a9",
    list: '#fbe9db',
    button: '#e8e1d4'
  },
  piplup: {
    background: '#5db9ca',
    card: "#eacf60",
    list: '#fff1d5',
    button: '#e8e1d4'
  }
}
export type ThemeSet = keyof typeof themeSet
export default themeSet
