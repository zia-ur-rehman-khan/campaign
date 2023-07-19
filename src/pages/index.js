import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Home"));

export default function Home() {
  return <DynamicHeader />;
}
