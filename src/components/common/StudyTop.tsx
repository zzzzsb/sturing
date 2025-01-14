'use client';

import { useRouter } from 'next/navigation';

type TStudyTopProps = {
  content?: string;
};

export default function StudyTop(props: TStudyTopProps) {
  const { content } = props;
  const router = useRouter();
  return (
    <div className="flex justify-between py-[1.4rem] px-[1.6rem]">
      <button onClick={() => router.back()} type="button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L8 11.5L15 4"
            stroke="#4D4D4D"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <h1 className="text-headline-3 font-medium">{content}</h1>
      <span className="w-[2.4rem]"></span>
    </div>
  );
}
