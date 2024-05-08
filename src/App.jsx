const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex flex-col">
      <header className="bg-blue-100 px-2 py-4 flex justify-between">
        <div className="big-purple-100">로고</div>
        <nav className="hidden md:flex gap-4">
          <button className="button-style">메뉴1</button>
          <button className="button-style">메뉴2</button>
          <button className="button-style">로그인</button>
        </nav>
        <button className="button-style flex md:hidden">...</button>
      </header>
      <section className=" bg-green-100 grow px-2">
        section
        <ul className="bg-red-100 mt-4 grid grid-cols-2 sm:grid=cols-3 md:grid-cols-4 justify-items-center">
          <li className="bg-blue-100 w-44 h-60"> card</li>
          <li className="bg-blue-100 w-44 h-60"> card</li>
          <li className="bg-blue-100 w-44 h-60"> card</li>
          <li className="bg-blue-100 w-44 h-60"> card</li>
          <li className="bg-blue-100 w-44 h-60"> card</li>
          <li className="bg-blue-100 w-44 h-60"> card</li>
          <li className="bg-blue-100 w-44 h-60"> card</li>
          <li className="bg-blue-100 w-44 h-60"> card</li>
          <li className="bg-blue-100 w-44 h-60"> card</li>
          <li className="bg-blue-100 w-44 h-60"> card</li>
        </ul>
      </section>
      <footer classNAme="bg-yellow-100 shrink px-2">footer</footer>
    </div>
  );
};
export default App;