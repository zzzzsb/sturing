'use client';
import BookmarkBtnNavigationBar from '@/components/(jisubin)/lectureStudyDetail/BookmarkBtnNavigationBar';
import DetailTabBar from '@/components/(jisubin)/lectureStudyDetail/DetailTabBar';
import CourseLink from '@/components/common/CourseLink';
import Label from '@/components/common/label/Label';
import { useRouter } from 'next/navigation';
export default function StudyDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <html lang="ko">
      <body className="w-full m-auto">
        <div className="bg-[url('/images/study-preview-img.png')] text-white">
          <div className="h-[5.4rem] flex flex-row items-center justify-center">
            <button
              onClick={() => router.back()}
              className="ml-[1.6rem] mr-auto"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19L8 11.5L15 4"
                  stroke="white"
                  stroke-width="1.7"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <button className="mr-[1.6rem]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1093_10946)">
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1093_10946">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          <div className="mt-[3.8rem] pb-[4rem] flex flex-col items-center justify-center">
            <div>
              <Label isBlue={true}>{'오프라인'}</Label>
              <Label isBlue={false}>{'디자인'}</Label>
            </div>
            <div className="w-[30rem] h-[5.4rem] mt-[1.8rem]">
              <h1 className="text-center font-semibold">
                AI 활용 UXUI 포트폴리오 스터디 모집
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center text-content-2">
              <span>약 4주 진행</span>
              <div className="h-[1.2rem] leading-[1.2rem] border-l border-gray-400 mx-[1rem]"></div>
              <span>06.21(일) ~ 07.07(일)</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="mx-[1.6rem] py-[2rem]">
            <CourseLink
              courseTitle="UXUI 디자이너가 피그마를 활용해 포트폴리오를 쌓는 법 A to Z"
              courseLink="/"
            />
          </div>
          <div className="mx-[1.6rem]">
            <DetailTabBar
              text1="정보"
              text1Link="/studyDetail/lecture"
              text2="팀원"
              text2Link="/studyDetail/lecture/teamMembers"
              text3="댓글"
              text3Link="/studyDetail/lecture/comment"
            />
          </div>

          {children}
        </div>

        <BookmarkBtnNavigationBar text="스터디 지원하기" link="/apply" />
      </body>
    </html>
  );
}