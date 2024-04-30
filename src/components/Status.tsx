interface IStatusProps {
  isFlipped: boolean;
}

function Status({ isFlipped }: IStatusProps) {
  const status = isFlipped ? " Flipped" : " Not Flipped";

  return (
    <p className="text-28pxr">
      Status:
      <span className="text-48pxr">{status}</span>
    </p>
  );
}

export default Status;
