/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Container from '../src/components/Container';
import { YearProvider } from '../src/contexts/YearContext';
import db from '../db.json';
import '../src/fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Tomorrow", sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: ${({ theme }) => theme.colors.link};
  }
`;

const App = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { value } = useDarkMode();

  useEffect(() => setIsMounted(true));

  return (
    <ThemeProvider theme={value ? db.theme.dark : db.theme.light}>
      <Head>
        <title>{db.title}</title>
        <meta name="title" content={db.title} />
        <meta name="description" content={db.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tipos-br.caducarvalho.vercel.app/" />
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content="https://tipos-br.caducarvalho.vercel.app/card.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tipos-br.caducarvalho.vercel.app/" />
        <meta property="twitter:title" content={db.title} />
        <meta property="twitter:description" content={db.description} />
        <meta property="twitter:image" content="https://tipos-br.caducarvalho.vercel.app/card.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <GlobalStyle />

      <YearProvider>
        {isMounted
          && (
            <Container>
              <Header />
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Component {...pageProps} />
              <Footer />
            </Container>
          )}
      </YearProvider>
    </ThemeProvider>
  );
};

export default App;
