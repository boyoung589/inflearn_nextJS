import React, { useCallback } from 'react';
import { Store } from '../types/store';
import { mutate } from 'swr';

export const STORE_KEY = '/stores';

const useStores = () => {
  const initializeStores = useCallback((stores: Store[]) => {
    mutate(STORE_KEY, stores);
    //mutate: swr의 함수로, storeKey라는 문자열을 키로 하는 공간에 stores라는 데이터를 전역으로 저장하는 함수
  }, []);
  /**useCallback
   * 특정함수를 새로 만들지 않고 재사용하고 싶을 때
   * useMemo: 특정 결과값을 재사용하고 싶을 때
   **/
  return {
    initializeStores,
  };
};

export default useStores;
