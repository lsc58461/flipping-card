import FlippingCard from "./components/FlippingCard";
import Status from "./components/Status";
import useFlippingCard from "./hooks/useFlippingCard";

function App() {
  const { flipCard, isFlipped } = useFlippingCard();

  return (
    <div className="App">
      <main className="pt-40pxr">
        <section>
          <div className="text-center">
            <Status isFlipped={isFlipped} />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <FlippingCard flipCard={flipCard} isFlipped={isFlipped} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
