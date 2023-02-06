'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import { GlobalStyle } from './globalStyle';

import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

const Description = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  p {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
  }

  @media (max-width: 1023px) {
    font-size: 0.8rem;

    & a {
      padding: 1rem;
    }

    & p,
    & div {
      display: flex;
      justify-content: center;
      position: fixed;
      width: 100%;
    }

    & p {
      align-items: center;
      inset: 0 0 auto;
      padding: 2rem 1rem 1.4rem;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
      background: linear-gradient(
        to bottom,
        rgba(var(--background-start-rgb), 1),
        rgba(var(--callout-rgb), 0.5)
      );
      background-clip: padding-box;
      backdrop-filter: blur(24px);
    }

    & div {
      align-items: flex-end;
      pointer-events: none;
      inset: auto 0 0;
      padding: 2rem;
      height: 200px;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgb(var(--background-end-rgb)) 40%
      );
      z-index: 1;
    }
  }
`;

const Code = styled.code`
  font-weight: 700;
  font-family: var(--font-mono);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(33%, auto));
  width: var(--max-width);
  max-width: 100%;

  /* Mobile and Tablet */
  @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      margin-bottom: 120px;
      max-width: 320px;
      text-align: center;
    }
`;

const Card = styled.a`
  padding: 1rem 1.2rem;
  border-radius: var(--border-radius);
  background: rgba(var(--card-rgb), 0);
  border: 1px solid rgba(var(--card-border-rgb), 0);
  transition: background 200ms, border 200ms;

  @media (max-width: 1023px) {
    padding: 1rem 2.5rem;
  }

  span {
    display: inline-block;
    transition: transform 200ms;
  }

  h2 {
    font-weight: 600;
    margin-bottom: 0.7rem;
    @media (max-width: 1023px) {
      margin-bottom: 0.5rem;
    }
  }

  p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 34ch;
  }

  /* Enable hover only on non-touch devices */
@media (hover: hover) and (pointer: fine) {
  &:hover {
    background: rgba(var(--card-rgb), 0.1);
    border: 1px solid rgba(var(--card-border-rgb), 0.15);
  }

  &:hover span {
    transform: translateX(4px);
  }
}

@media (prefers-reduced-motion) {
  &:hover span {
    transform: none;
  }
}
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;

  ::before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }

  ::after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
  }

  ::before,
  ::after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }

  @media (max-width: 1023px) {
    padding: 8rem 0 6rem;

    &::before {
      transform: none;
      height: 300px;
    }
  }
`;

const Logo = styled(Image)`
  position: relative;

  @media (prefers-color-scheme: dark) {
    filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
  }
`;

const VercelLogo = styled(Image)`

  @media (prefers-color-scheme: dark) {
    filter: invert(1);
  }
`;

const Thirteen = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  padding: 25px 10px;
  margin-left: 16px;
  transform: translateZ(0);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0px 2px 8px -1px #0000001a;

  @media (prefers-color-scheme: dark) {
    & img {
      filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    }
  }

  ::before,
  ::after {
    content: '';
    position: absolute;
    z-index: -1;
  }

  /* Conic Gradient Animation */
  ::before {
    animation: 6s ${rotate} linear infinite;
    width: 200%;
    height: 200%;
    background: var(--tile-border);
  }

  /* Inner Square */
  ::after {
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius);
    background: linear-gradient(
      to bottom right,
      rgba(var(--tile-start-rgb), 1),
      rgba(var(--tile-end-rgb), 1)
    );
    background-clip: content-box;
  }

  @media (prefers-reduced-motion) {
    &::before {
      animation: none;
    }
  }
`;

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <GlobalStyle />
    <Main>
      <Description>
        <p>
          Get started by editing&nbsp;
          <Code>app/page.tsx</Code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <VercelLogo
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </Description>

      <Center>
        <Logo
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Thirteen>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </Thirteen>
      </Center>

      <Grid>
        <Card
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </Card>

        <Card
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </Card>

        <Card
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Card>
      </Grid>
    </Main>
    </>
  )
}
