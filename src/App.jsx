const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex flex-col">
      <header />
      <section className=" bg-green-100 grow px-2">
        <CardList />
      </section>
      <Footer />
    </div>
  );
};
export default App;
