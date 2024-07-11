'use client';
import SearchInput from '@/components/common/SearchInput';
import CurrentSearch from '@/components/search/CurrentSearch';
import useLocalStorage from '@/utils/useLocalStorage';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchPart() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [recentSearches, addSearchToLocalStorage, removeFromLocal] =
    useLocalStorage('recent', []);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSearch = () => {
    if (recentSearches.includes(inputValue)) {
      setInputValue('');
      router.push(`/search/result?keyword=${inputValue}`);
      return;
    }
    if (inputValue.trim() != '') {
      addSearchToLocalStorage(inputValue);
      setInputValue('');
      router.push(`/search/result?keyword=${inputValue}`);
    }
  };

  const onRemove = (search: string) => {
    removeFromLocal(search);
  };

  if (!isClient) {
    return null; // 또는 로딩 상태를 반환
  }

  const onInputKeyword = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <section>
      <SearchInput
        placeholderText="관심 스터디 분야나 강의명을 검색해 보세요"
        value={inputValue}
        changeHandler={onInputKeyword}
        localsave={onSearch}
      />

      <CurrentSearch data={recentSearches} remove={onRemove} />
    </section>
  );
}