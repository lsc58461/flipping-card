interface IFlippingCardProps {
  isFlipped: boolean;
  flipCard: () => void;
}

function FlippingCard({ flipCard, isFlipped }: IFlippingCardProps) {
  const flippedClassName = isFlipped ? "flipped" : "";

  return (
    <div
      className={`${flippedClassName} mobile:h-300pxr mobile:w-220pxr h-400pxr w-300pxr rotate-0 cursor-pointer rounded-2xl border-2 border-gray-400 p-0pxr transition-all duration-500 ease-in-out`}
      onClick={flipCard}
    >
      <div
        className={`flex h-full w-full select-none flex-col justify-between rounded-2xl bg-white p-20pxr shadow-2xl`}
      >
        <div>
          <h1 className="mobile:text-20pxr text-center text-28pxr">
            Flipping Card
          </h1>
          <hr />
        </div>
        <p className="mobile:text-24pxr text-center text-32pxr font-semibold">
          Click me to flip
        </p>
        <div className="border-t pt-8pxr">
          <div>
            <p className="text-12pxr font-medium">Lee JeongYun</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlippingCard;
