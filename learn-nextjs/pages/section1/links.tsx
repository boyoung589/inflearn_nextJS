import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Links() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/section1/getStaticProps');
  }, [router]);

  return (
    <main>
      <h1>Links</h1>
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        /getStaticProps
      </button>
      {/* <div style={{height: '200vh'}}/> */}
      {/* <a href="/section1/getStaticProps">/getStaticProps</a> */}
      {/* <Link href="/section1/getStaticProps">/getStaticProps</Link> */}
      {/* <Link href="/section1/getStaticProps" style={{color: 'red'}}>/getStaticProps</Link> */}
      {/* legacyBehavior속성을 추가하면 next12버전으로  */}
      {/* next12이전에선 link 태그 내에 직접 자식으로 a 태그를 넣는 것을 권장함 && link가 a태그가 아니므로 스타일을 link 에 입혀도 작동 안함 */}
      {/* <Link
        href="/section1/getStaticProps"
        legacyBehavior //v12
      >
        <a style={{color:'red'}}>/getStaticProps</a>
      </Link> */}
      {/* next는 모든페이지에 대한 pre-rendering을 진행해서 seo를 보장함과 동시에 next/link를 통해 csr방식으로 라우팅을 함으로서 빠른 라우팅과 적은 네트워크 요청도 가능하다 */}
    </main>
  );
}
