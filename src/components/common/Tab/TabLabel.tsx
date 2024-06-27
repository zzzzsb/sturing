export default function TabLabel({
  children,
  onUnSelectContent,
}: {
  children: React.ReactNode;
  onUnSelectContent: any;
}) {
  return (
    <div className=" flex  gap-4 bg-main-100 text-main-600 border border-main-600 py-[0.9rem] px-[1.4rem] rounded-[8px]  h-[3.9rem] overflow-hidden ">
      <div>{children}</div>
      <button onClick={onUnSelectContent}>X</button>
    </div>
  );
}