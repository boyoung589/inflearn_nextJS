import Link from "next/link";

interface Props {}
const HeaderComponent = ({ }: Props) => {
  return (
    <header>
      <div>
        <Link href="/">
          인프런 로고
          <img src='/inflearn.png' width={110} height={20} alt="인프런 로고" />
        </Link>
      </div>
    </header>
  );
}

export default HeaderComponent;