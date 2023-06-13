'use client';
import { useSelectedLayoutSegments } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Fragment } from 'react';
import Link from 'next/link';

const Logo = () => (
  <svg
    width="258"
    height="199"
    viewBox="0 0 258 199"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-10 fill-primary stroke-primary"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M165.735 25.0701L188.947 0.972412H0.465994V25.0701H165.735Z"
    />
    <path d="M163.981 96.3239L254.022 3.68314L221.206 3.68295L145.617 80.7609L163.981 96.3239Z" />
    <path d="M233.658 131.418C233.658 155.075 214.48 174.254 190.823 174.254C171.715 174.254 155.513 161.738 150 144.439L146.625 133.848L127.329 153.143L129.092 157.336C139.215 181.421 163.034 198.354 190.823 198.354C227.791 198.354 257.759 168.386 257.759 131.418C257.759 106.937 244.399 85.7396 224.956 74.0905L220.395 71.3582L202.727 89.2528L210.788 93.5083C224.403 100.696 233.658 114.981 233.658 131.418Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M88.2625 192.669L88.2626 45.6459H64.1648L64.1648 192.669H88.2625Z"
    />
  </svg>
);

const Header = () => {
  const segments = useSelectedLayoutSegments();

  return (
    <nav className="flex h-16 items-center justify-between border-b-base-300 bg-base-100">
      <div className="flex items-center gap-x-4">
        <Link href="/" className="ml-4 flex">
          <Logo />
          <span className="my-auto ml-1 text-2xl font-bold text-secondary">
            ddit
          </span>
        </Link>
        {segments.map((segment, i) => (
          <Fragment key={`url-segment-${i}`}>
            <span className="text-2xl text-gray-400">/</span>
            <Link
              className="font-bold"
              href={`/${segments.slice(0, i + 1).join('/')}`}
            >
              {segment}
            </Link>
          </Fragment>
        ))}
      </div>

      <div className="pr-4">
        <SignedIn>
          <UserButton
            showName={true}
            appearance={{
              variables: {
                colorText: '#BB33FF',
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </nav>
  );
};

export default Header;
