import AvatarIcon from 'components/elements/Icons/Avatar/avatar';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          alt="Next.js logo"
          className="dark:invert"
          height={38}
          priority
          src="/next.svg"
          width={180}
        />
        <AvatarIcon />
      </main>
    </div>
  );
}
