'use client';
import { useClerk, useUser } from '@clerk/nextjs';

const useFuckingGithubPlz = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!user) {
    return;
  }

  const githubAuthUsed = user?.externalAccounts.some(
    (account) => account.provider === 'github'
  );

  if (!githubAuthUsed) {
    signOut();
  }
};

const Home = () => {
  useFuckingGithubPlz();
  return (
    <div className="hero h-auto">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            <span className="text-primary">t3</span>ddit
          </h1>
          <p className="py-6 text-base-content/60">Coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
