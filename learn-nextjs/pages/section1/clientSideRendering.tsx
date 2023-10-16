import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import NoSSR from "@/components/section1/NoSSR";
/**Server Error
 * ReferenceError: window is not defined
  This error happened while generating the page. 
  Any console logs will be displayed in the terminal window.
**/

/** NoSSR 페이지가 서버에러가 나는 이유
 * NoSSR은 window.innerwidth렌더링하는 파일.
 * 기본적으로 페이지에 포함되는 컴포넌트(NoSSR)은 서버에서 렌더링 되어야 한다
 * 서버에서는 window라는 객체를 알 수 없다
 * window는 브라우저에서만 객체에 접근할 수 있기 때문
 * Next에서 window나 document같은 속성을 useEffect밖에서 사용했을 때 에러 발생.
 * SSR에서 렌더링하고 싶지 않은 컴포넌트가 있을 경우 
 * 일반적인 import가 아니라 next/dynamic api, ssr: false를 사용하여 import
 * window 값은 서버에서 알 수 없으므로, pre-rendering된 html파일에서도 완전히 제거됨
 * */ 

const NoSSR = dynamic(() => import('../../components/section1/NoSSR'), {
  ssr: false,
})
/**dynamic
 * https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading
 */

const Example: NextPage = () => {
  const [data, setData] = useState(0);
  // 처음에 pre-rendering시 값을 0으로 HTML 렌더링
  // 이후에 자바스크립트 코드로 상태가 업데이트 되면서 DOM도 바뀜
  useEffect(() => {
    const delayInSeconds = 2;
    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    ).then((result) => setData(result));
  }, []);
  return (
    <main>
      <h1>Client-side data fetching</h1>
      <p>값: {data}</p>
      
      <h1>no SSR</h1>
      <NoSSR />
    </main>
  );
};

export default Example;