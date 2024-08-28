import Image from "next/image";
import { Inter } from "next/font/google";
import ItemCard from "@/components/ItemCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      // className={`${inter.className}`}
    >
      <ItemCard
        title="پیتزا استیک آمریکایی"
        caption="رپ نیم کیلویی با خورشت چیلی کان کارنه (گوشت و فلفل) در نان تورتیای دست ساز، برنج مکزیکی یا سیب زمینی سرخ کرده، کاهو، ریفراید بینز، خامه ترش، سالسا"
        price="۴۵۰"
      />
    </main>
  );
}
