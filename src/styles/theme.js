export const COLORS = {
  primary: '#07272D',
  secondary: '#50A19F',
  tertiary: '#06D6A0',
  quaternary: '#118AB2',
  white: '#E5E1E6',
};

const palette = {
  primary: '#07272D',
  secondary: '#50A19F',
  tertiary: '#06D6A0',
  quaternary: '#118AB2',
  white: '#E5E1E6',
  black: '#0B0B0B',
  shadow: '#F1ABAB',
  subtitle: '#635F5F',
  error: '#FF0000',
  success: '#00FF00',
  warning: '#FFA500',
  info: '#00BFFF',
  placeholder: '#9D9FA0',
  link: '#0082CD',
};

export const theme = {
  color: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    quaternary: palette.quaternary,
    shadow: palette.shadow,
    subtitle: palette.subtitle,
    placeholder: palette.placeholder,
    error: palette.error,
    link: palette.link,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 56,
  },

  textVariants: {
    body: {
      fontSize: 18,
      fontFamily: 'Dhyana',
    },
    header: {
      fontSize: 24,
      fontFamily: 'Dhyana',
    },
    subheader: {},
    placeholder: { fontFamily: 'Dhyana', fontSize: 16 },
    button: {
      fontSize: 18,
      fontFamily: 'Dhyana',
    },
    link: {
      fontSize: 18,
    },
  },
  fontWidth: {
    light: '300',
    normal: '400',
    bold: '700',
  },
  breakpoints: {
    smallPhone: 0,
    phone: 321,
    tablet: 768,
  },
};

export const darkTheme = {
  ...theme,
  color: {
    ...theme.color,
    background: COLORS.secondary,
  },
};
