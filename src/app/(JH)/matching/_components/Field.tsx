import MatchingContainer from '@/components/(JH)/matching/MatchingContainer';
import * as Tabs from '@radix-ui/react-tabs';
import { level } from '@/constant/region';

export default function Field({ interest, onClickLevel, Level }: any) {
  return (
    <div className="w-full px-[1.4rem]">
      <section className="py-[2rem] ">
        <h1 className="font-black text-headline-3">관심 분야에 대한</h1>
        <h1 className="font-black text-headline-3">
          나의 직업 수준을 선택해 주세요.
        </h1>
      </section>
      <section className="mt-[4rem] w-full">
        <Tabs.Root defaultValue={`${interest[0]}`}>
          <Tabs.List className="flex">
            {interest.map((field: string) => {
              return (
                <Tabs.Trigger
                  value={`${field}`}
                  className="flex-1 minitab-trigger"
                >
                  {field}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          <div className="py-5 ">
            {interest.map((field: string) => {
              return (
                <Tabs.Content value={`${field}`}>
                  <div className="m-auto flex flex-col gap-3">
                    {Object.keys(level).map((key) => {
                      return (
                        <MatchingContainer key={key}>
                          <div
                            className="flex gap-5"
                            onClick={() => {
                              onClickLevel(field, key);
                            }}
                          >
                            <p>{key}</p>
                            <p>{level[key]}</p>
                          </div>
                        </MatchingContainer>
                      );
                    })}
                  </div>
                </Tabs.Content>
              );
            })}
          </div>
        </Tabs.Root>
      </section>
    </div>
  );
}
