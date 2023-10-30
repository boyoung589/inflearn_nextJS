import { Fragment, useEffect } from "react";
import Header from "../components/common/Header";
import styles from '../styles/header.module.scss';
import Link from "next/link";
import { VscFeedback } from 'react-icons/vsc';
import { AiOutlineShareAlt } from 'react-icons/ai';
import MapSection from "../components/home/MapSection"; //`@/components/home/MapSection`주소로 import하면 지도안나옴
import { Store } from "../types/store";
import useStores from "../hooks/useStores";

interface Props {
  stores: Store[]
}
export default function Home({ stores }: Props) {
  const { initializeStores } = useStores();
  console.log(stores)
  useEffect(() => {
    //새로운 매장 데이터가 들어왔을  때 매장 데이터를 전역 상태로 업데이트
    initializeStores(stores);
  }, [initializeStores, stores]);
  return (
    <Fragment>
      <Header
        rightElements={[
          <button
            onClick={() => {
              alert('복사!')
            }}
            className={styles.box}
            style={{ marginRight: 8 }}
            key="button"
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link
            href="/feedback"
            className={styles.box}
            key="link"
          >
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const stores = (await import('../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
