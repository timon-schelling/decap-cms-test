import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import theme from '../theme';

const Notif = styled.a`
  background-color: ${theme.colors.darkerGray};
  color: white;
  display: block;
  padding: ${theme.space[2]} ${theme.space[3]};
  margin-bottom: ${theme.space[3]};
  text-align: center;

  /* prettier-ignore */
  ${p =>
    p.loud &&
    css`
      background-color: ${theme.colors.primaryDark};
      color: ${theme.colors.darkerGray};
    `}

  em {
    font-style: normal;
    color: #8b8b8b;
    padding: 0 8px;
  }

  sup,
  sub {
    font-size: initial;
    vertical-align: initial;
  }

  .text-link {
    text-decoration: underline;
    color: ${theme.colors.primaryDark};
  }
`;

function Notification({ url, loud, children }) {
  return (
    <Notif href={url} loud={loud} target="_blank" rel="noopener noreferrer">
      {children}
    </Notif>
  );
}

export default Notification;
