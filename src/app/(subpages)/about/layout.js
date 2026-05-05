import HomeBtn from "@/app/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-18 px-18">
      <HomeBtn/>
      {children}
    </main>
  );
}