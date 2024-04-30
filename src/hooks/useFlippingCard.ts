import { useState } from "react";

function useFlippingCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped((prev) => !prev);

  return { isFlipped, flipCard };
}

export default useFlippingCard;
