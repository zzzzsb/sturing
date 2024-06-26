import GitHubLoginBtn from '../common/GitHubLoginBtn';

export default function LoginModal() {
  return (
    <div className="w-[31.6rem] h-[32.6rem] bg-white rounded-[0.8rem]">
      <div className="relative">
        <button className="absolute top-0 right-0 m-[2rem]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7802 13.719C14.8499 13.7887 14.9052 13.8714 14.9429 13.9625C14.9806 14.0535 15 14.1511 15 14.2496C15 14.3482 14.9806 14.4457 14.9429 14.5368C14.9052 14.6278 14.8499 14.7105 14.7802 14.7802C14.7105 14.8499 14.6278 14.9052 14.5368 14.9429C14.4457 14.9806 14.3482 15 14.2496 15C14.1511 15 14.0535 14.9806 13.9625 14.9429C13.8714 14.9052 13.7887 14.8499 13.719 14.7802L7.5 8.56025L1.28097 14.7802C1.14025 14.9209 0.949387 15 0.750375 15C0.551363 15 0.360502 14.9209 0.21978 14.7802C0.0790571 14.6395 3.923e-09 14.4486 0 14.2496C-3.923e-09 14.0506 0.0790571 13.8598 0.21978 13.719L6.43975 7.5L0.21978 1.28097C0.0790571 1.14025 0 0.949387 0 0.750375C0 0.551363 0.0790571 0.360502 0.21978 0.21978C0.360502 0.0790571 0.551363 0 0.750375 0C0.949387 0 1.14025 0.0790571 1.28097 0.21978L7.5 6.43975L13.719 0.21978C13.8598 0.0790571 14.0506 -3.923e-09 14.2496 0C14.4486 3.923e-09 14.6395 0.0790571 14.7802 0.21978C14.9209 0.360502 15 0.551363 15 0.750375C15 0.949387 14.9209 1.14025 14.7802 1.28097L8.56025 7.5L14.7802 13.719Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="mb-[3.2rem]">
        <div className="flex flex-col justify-center items-center pt-[4.8rem] mb-[0.5rem]">
          <svg
            width="156"
            height="48"
            viewBox="0 0 156 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1093_9272)">
              <path
                d="M6.13176 34.3C4.43682 33.5302 3.09614 32.4734 2.10974 31.1507C1.12334 29.8279 0.581515 28.3582 0.491211 26.7486H7.11816C7.2432 27.7563 7.7364 28.5962 8.59776 29.261C9.45913 29.9259 10.5358 30.2548 11.8209 30.2548C13.106 30.2548 14.0508 30.0029 14.7593 29.499C15.4678 28.9951 15.8152 28.3442 15.8152 27.5604C15.8152 26.7066 15.3845 26.0697 14.5231 25.6428C13.6618 25.2159 12.2933 24.754 10.4108 24.2431C8.46578 23.7672 6.87503 23.2773 5.63856 22.7734C4.40208 22.2695 3.33233 21.4926 2.44317 20.4498C1.54708 19.407 1.1025 18.0003 1.1025 16.2367C1.1025 14.788 1.51929 13.4582 2.34592 12.2615C3.17256 11.0647 4.36735 10.1129 5.91642 9.42005C7.46549 8.72719 9.29241 8.37726 11.3903 8.37726C14.4953 8.37726 16.9683 9.1611 18.816 10.7218C20.6638 12.2825 21.685 14.389 21.8725 17.0415H15.572C15.4748 15.9987 15.0441 15.1729 14.28 14.557C13.5089 13.9411 12.4878 13.6332 11.2027 13.6332C10.0148 13.6332 9.09791 13.8572 8.45189 14.2981C7.80586 14.739 7.48633 15.3548 7.48633 16.1457C7.48633 17.0275 7.92395 17.6994 8.79921 18.1613C9.67447 18.6162 11.036 19.0851 12.8907 19.561C14.7732 20.0369 16.3223 20.5268 17.5448 21.0307C18.7674 21.5346 19.8233 22.3184 20.7194 23.3752C21.6155 24.432 22.074 25.8317 22.1087 27.5674C22.1087 29.0861 21.6919 30.4438 20.8653 31.6406C20.0317 32.8373 18.8438 33.7821 17.2948 34.461C15.7457 35.1399 13.9327 35.4828 11.8626 35.4828C9.79256 35.4828 7.81976 35.0979 6.13176 34.321V34.3Z"
                fill="black"
              />
              <path
                d="M32.3615 14.2422V26.9307C32.3615 27.8125 32.5699 28.4564 32.9937 28.8483C33.4174 29.2402 34.1259 29.4432 35.1332 29.4432H38.1896V35.028H34.0495C28.5062 35.028 25.7276 32.3126 25.7276 26.8817V14.2352H22.6226V8.79032H25.7276V2.30963H32.3546V8.79732H38.1827V14.2422H32.3546H32.3615Z"
                fill="black"
              />
              <path
                d="M64.6971 8.79724V35.035H58.0702V31.7176C57.2227 32.8514 56.1182 33.7472 54.7567 34.3911C53.3952 35.0349 51.9156 35.3639 50.3179 35.3639C48.2826 35.3639 46.4765 34.93 44.9135 34.0621C43.3436 33.1943 42.1141 31.9136 41.2249 30.2269C40.3289 28.5403 39.8843 26.5247 39.8843 24.1871V8.79724H46.4626V23.2423C46.4626 25.3279 46.9836 26.9306 48.0117 28.0504C49.0398 29.1701 50.4568 29.73 52.2421 29.73C54.0273 29.73 55.4861 29.1701 56.5211 28.0504C57.5561 26.9306 58.0702 25.3279 58.0702 23.2423V8.79724H64.6971Z"
                fill="black"
              />
              <path
                d="M98.9782 8.79724V35.0349H92.3999V8.79724H98.9782Z"
                fill="black"
              />
              <path
                d="M123.659 11.3797C125.569 13.3533 126.528 16.1108 126.528 19.645V35.0349H119.949V20.5409C119.949 18.4553 119.435 16.8526 118.4 15.7328C117.365 14.6131 115.955 14.0532 114.17 14.0532C112.385 14.0532 110.919 14.6131 109.87 15.7328C108.821 16.8526 108.293 18.4553 108.293 20.5409V35.0349H101.715V8.79724H108.293V12.0656C109.168 10.9318 110.294 10.036 111.655 9.39212C113.017 8.74825 114.517 8.41931 116.143 8.41931C119.248 8.41931 121.755 9.40611 123.666 11.3797H123.659Z"
                fill="black"
              />
              <path
                d="M145.402 9.53211C146.875 10.3089 148.035 11.3097 148.882 12.5415V8.79725H155.509V35.2239C155.509 37.6524 155.023 39.822 154.05 41.7326C153.078 43.6432 151.619 45.1549 149.681 46.2817C147.736 47.4015 145.388 47.9613 142.63 47.9613C138.935 47.9613 135.899 47.0935 133.537 45.3579C131.169 43.6222 129.835 41.2567 129.515 38.2543H136.052C136.399 39.4511 137.143 40.4099 138.282 41.1167C139.421 41.8236 140.81 42.1805 142.443 42.1805C144.353 42.1805 145.902 41.6066 147.097 40.4519C148.285 39.2971 148.882 37.5545 148.882 35.2169V31.1437C148.035 32.3755 146.868 33.4043 145.381 34.2231C143.895 35.042 142.193 35.4549 140.283 35.4549C138.087 35.4549 136.087 34.888 134.267 33.7472C132.447 32.6134 131.016 31.0108 129.967 28.9392C128.918 26.8746 128.39 24.4951 128.39 21.8146C128.39 19.1342 128.911 16.8106 129.967 14.7601C131.016 12.7095 132.44 11.1278 134.246 10.022C136.045 8.91623 138.06 8.36334 140.289 8.36334C142.234 8.36334 143.936 8.74826 145.416 9.52511L145.402 9.53211ZM147.938 17.7694C147.312 16.6147 146.465 15.7329 145.402 15.117C144.339 14.5011 143.193 14.1932 141.971 14.1932C140.748 14.1932 139.623 14.4941 138.588 15.096C137.553 15.6979 136.712 16.5727 136.073 17.7275C135.427 18.8822 135.107 20.2469 135.107 21.8216C135.107 23.3963 135.427 24.782 136.073 25.9648C136.712 27.1476 137.56 28.0574 138.608 28.6872C139.657 29.3171 140.776 29.632 141.971 29.632C143.165 29.632 144.339 29.3241 145.402 28.7082C146.465 28.0924 147.312 27.2105 147.938 26.0558C148.563 24.901 148.875 23.5223 148.875 21.9126C148.875 20.3029 148.563 18.9242 147.938 17.7694Z"
                fill="black"
              />
              <path
                d="M95.6925 6.56468C97.4918 6.56468 98.9504 5.09512 98.9504 3.28234C98.9504 1.46955 97.4918 0 95.6925 0C93.8932 0 92.4346 1.46955 92.4346 3.28234C92.4346 5.09512 93.8932 6.56468 95.6925 6.56468Z"
                fill="#4171FF"
              />
              <path
                d="M81.4804 35.0419C79.0977 35.0419 76.8471 33.7681 75.2285 31.4376C72.575 27.5954 71.6372 20.8977 74.3949 14.8789C73.0473 14.508 71.4774 14.2631 68.8794 14.2631H66.1772V8.81117H68.8794C73.3391 8.81117 75.6106 9.49003 77.6528 10.1969C79.9105 7.95034 83.0503 5.75978 86.4193 4.10112L88.8506 2.90436L91.2263 7.80337L88.795 9.00013C86.7041 10.0289 84.7035 11.3097 83.0642 12.6394C87.2946 15.7048 89.2049 21.0447 89.1423 25.5168C89.0798 30.2828 86.8431 33.8381 83.3073 34.7969C82.696 34.9649 82.0847 35.0419 81.4873 35.0419H81.4804ZM79.4867 16.8036C77.4722 20.9117 77.896 25.7547 79.6743 28.3232C80.7301 29.8489 81.6123 29.611 81.9041 29.534C83.1336 29.205 83.7032 27.2454 83.731 25.4468C83.7727 22.2764 82.3348 18.6232 79.4867 16.8036Z"
                fill="#4171FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_1093_9272">
                <rect
                  width="155.018"
                  height="47.9613"
                  fill="white"
                  transform="translate(0.491211)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center text-content-1">
          <span className="text-gray-800">
            사람과 스터디,{' '}
            <span className="font-semibold text-gray-900">
              강의를 한 고리로
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[18.6em] h-[5.8rem] bg-white rounded-[0.8rem] text-content-2 flex flex-col justify-center shadow-lg mb-[2rem] text-gray-700">
          <span className="mx-auto my-0">지금 회원가입하고</span>
          <span className="mx-auto my-0">
            <span className="text-main-600">나와 맞는 스터디에</span>{' '}
            참가해보세요!
          </span>
        </div>
        <GitHubLoginBtn />
      </div>
    </div>
  );
}
