import Image from "next/image";
import styles from "@/styles/pages/page.module.scss";
import { BiHeartCircle } from "react-icons/bi";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>
        이스트소프트 프론트엔드 부트캠프
        <BiHeartCircle />
      </h1>

      <Image
        className={styles.logo}
        src={`${process.env.ASSET_PREFIX}/images/cat.jpg`}
        alt="cat"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
