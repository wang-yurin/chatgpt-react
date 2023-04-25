import theme from '../../styles/theme';

const layoutStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const contentStyles = {
  overflowY: 'scroll',
  padding: '2rem',
};

const siderStyles = {
  padding: '1rem',
};

const footerStyles = {
  color: theme.colors.GREY500,
  textAlign: 'center',
  textDecoration: 'underline',
  backgroundColor: theme.colors.GREY200,
  padding: '1rem 0 2rem',
};

export { layoutStyles, contentStyles, siderStyles, footerStyles };
