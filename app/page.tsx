export default function Home() {
  return (
    <main className="max-w-[600px] mx-auto border-[10px] border-green-500 p-2 mt-10">
      <header className="sticky top-0 h-[50px] bg-gray-400 border-[5px] border-dashed border-red-500 p-2">
        HEADER
      </header>
      <div className="min-h-[1000px] bg-gray-400 border-[5px] border-dashed border-black p-2 mt-5">
        MAIN CONTENT
      </div>
      <footer className="bg-gray-400 border-[5px] border-dashed border-black p-2 mt-5">
        FOOTER
      </footer>
    </main>
  );
}
