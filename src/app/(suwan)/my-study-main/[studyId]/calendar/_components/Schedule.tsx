'use client';
import SelectInput from '@/app/(suwan)/make-study-form/_component/SelectInput';
import { useState } from 'react';

export default function Schedule() {
  const [clicked, setClicked] = useState(false);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    const place = formData.get('place') as string;
    let time;
    if (!title.trim() || !place.trim() || !start.trim()) {
      alert('입력값을 채워주세요');
      return;
    }
    // 중복제출 방지
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    try {
      if (end) {
        time = start + ' - ' + end;
      } else {
        time = start;
      }
      //post
      console.log(title, place, time);

      setStart('');
      setEnd('');
      setClicked(false);
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full rounded-[5px] mt-[2rem] px-[2rem] py-[2.4rem] bg-white border border-gray-300">
        <div className=" bg-white rounded-lg w-full ">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold">06.08(토)</h2>
            <span className="text-[1.4rem] font-semibold text-main-600 px-[1rem]">
              3
            </span>
            <img
              src="/images/studyLabel/add-square.svg"
              className="ml-auto"
              onClick={() => setClicked(!clicked)}
            />
          </div>

          <div className=" bg-white rounded-lg w-full ">
            <div className="text-[1.4rem]">
              {clicked ? (
                <form
                  action={onSubmit}
                  className="flex flex-col gap-[1rem] my-[1.2rem] border rounded-[.5rem] p-[1.6rem]"
                >
                  <div>제목</div>
                  <input
                    name="title"
                    type="text"
                    placeholder="일정을 입력하세요"
                    className="border px-[1.6rem] py-[1.2rem] w-full rounded-md"
                  />
                  <div>장소</div>
                  <input
                    name="place"
                    type="text"
                    placeholder="스터디 장소를 입력하세요"
                    className="border px-[1.6rem] py-[1.2rem] w-full rounded-md"
                  />
                  <div>시간</div>
                  <div className="flex gap-3 h-[4.5rem]">
                    <SelectInput
                      type="time"
                      onChange={setStart}
                      value={start}
                    />
                    <SelectInput type="time" onChange={setEnd} value={end} />
                  </div>
                  <button className="ml-auto text-main-600">완료</button>
                </form>
              ) : (
                ''
              )}
              <div>
                <div className="flex justify-between items-center py-[1.2rem]">
                  <div className="text-[1.6rem] font-semibold">
                    2주차 정기 스터디 모임
                  </div>
                  <div className="flex gap-[1rem]">
                    <img
                      className="h-[2rem]"
                      src="/images/studyLabel/trashcan.svg"
                    />
                  </div>
                </div>
                <div className="bg-gray-200 rounded-[.3rem] p-[.8rem] text-[1.2rem] text-gray-700">
                  <span>스타벅스 종로점</span>
                  <span> | </span>
                  <span>06.08(토) </span>
                  <span>오후 8:00 - 9:00</span>
                </div>
              </div>
              {/* <div className="flex flex-col text-[1.4rem]">
              

              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}