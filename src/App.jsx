import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex flex-col">
      <Header />
      <Section className=" bg-green-100 grow px-2">
        <CardList />
      </Section>
      <Footer />
    </div>
  );
};
export default App;
