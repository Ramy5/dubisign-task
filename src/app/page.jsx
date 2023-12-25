import Cards from "@/components/Cards";
import Main from "@/components/Main";
import NeedMore from "@/components/NeedMore";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Main />

      <Cards /> 

      <NeedMore />
    </div>
  );
}
