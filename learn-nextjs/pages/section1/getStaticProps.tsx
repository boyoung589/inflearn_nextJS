import { NextPage } from "next";

interface Props {
  data: number;
}
const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getStaticProps Page</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Example;

export async function getStaticProps() {
  const delayInSeconds = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
  );

  return {
    props: { data },
    revalidate: 5
    // 5초마다(서버가 request를 받은지 5초가 지난 후 다시 request가 왔을 때마다) 이 함수를 다시 실행해서 만약 데이터가 바뀌었으면 새로운 값으로 다시 pre-rendering 하라는 뜻
    // 5초를 선언하였어도 데이터가 변하지 않으면 nextjs가 pre-rendering을 다시 수행하지 않음.
    // revalidate를 이용하면 ssg와 isr을 가장 효율적으로 사용할 수 있음.
  };
}