/* eslint-disable react/prop-types */
import React from 'react';
import { Global, css } from '@emotion/core';

const wrapPageElement = ({ element }) => (
  <>
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }

        var,
        mark {
          line-height: 1.25;
          display: inline-block;
          padding: 0.125rem;
          border-radius: 0.125rem;
        }

        var {
          font-style: normal;
          font-size: 85%;
          transition: all 0.15s ease-out;
          color: var(--color-neutrals-900);
          background: var(--color-brand-100);

          .dark-mode & {
            color: var(--color-white);
            background: var(--color-brand-600);
          }
        }

        mark {
          .dark-mode & {
            background: var(--color-yellow-100);
          }
        }

        a:hover var {
          background: var(--color-brand-200);

          .dark-mode & {
            background: var(--color-brand-500);
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          var {
            font-size: inherit;
          }
        }
      `}
    />
    {element}
  </>
);

export default wrapPageElement;
