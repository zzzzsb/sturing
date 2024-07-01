export default function SelectInput({ type }: { type: string }) {
  return (
    <>
      {type === 'time' ? (
        <select
          name="time-zones"
          id="time-zones"
          className="border-gray-300 border py-[1.3rem] px-[1.6rem] flex-1 rounded-md "
        >
          <option value="00:00">오전 12:00</option>
          <option value="01:00">오전 1:00</option>
          <option value="02:00">오전 2:00</option>
          <option value="03:00">오전 3:00</option>
          <option value="04:00">오전 4:00</option>
          <option value="05:00">오전 5:00</option>
          <option value="06:00">오전 6:00</option>
          <option value="07:00">오전 7:00</option>
          <option value="08:00">오전 8:00</option>
          <option value="09:00">오전 9:00</option>
          <option value="10:00">오전 10:00</option>
          <option value="11:00">오전 11:00</option>
          <option value="12:00">오후 12:00</option>
          <option value="13:00">오후 1:00</option>
          <option value="14:00">오후 2:00</option>
          <option value="15:00">오후 3:00</option>
          <option value="16:00">오후 4:00</option>
          <option value="17:00">오후 5:00</option>
          <option value="18:00">오후 6:00</option>
          <option value="19:00">오후 7:00</option>
          <option value="20:00">오후 8:00</option>
          <option value="21:00">오후 9:00</option>
          <option value="22:00">오후 10:00</option>
          <option value="23:00">오후 11:00</option>
        </select>
      ) : (
        <select
          name="days-of-the-week"
          id="days-of-the-week "
          className="border-gray-300 border py-[1.3rem] px-[1.6rem] flex-1 rounded-md"
        >
          <option value="monday">월요일</option>
          <option value="tuesday">화요일</option>
          <option value="wednesday">수요일</option>
          <option value="thursday">목요일</option>
          <option value="friday">금요일</option>
          <option value="saturday">토요일</option>
          <option value="sunday">일요일</option>
        </select>
      )}
    </>
  );
}