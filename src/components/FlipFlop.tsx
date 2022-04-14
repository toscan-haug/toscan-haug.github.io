import { ReactNode, useState } from 'react';

import '../styles/FlipFlop.scss';

type FlipFlopProps = {
  recto?: ReactNode;
  verso?: ReactNode;
  hover?: boolean;
};

const FlipFlop = ({ recto, verso, hover }: FlipFlopProps) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };
  const onClick = hover ? undefined : toggleFlip;

  return (
    <div
      className={`portfolio-flip-flop card-wrapper ${
        hover ? 'with-hover' : 'without-hover'
      }`}
    >
      <div className={`card ${flipped ? 'flipped-card' : 'normal-card'}`}>
        <div className="card-recto" onClick={onClick}>
          {hover ? (
            <div className="flip-icon">→</div>
          ) : (
            <div className="flip-button" onClick={onClick} title="verso">
              →
            </div>
          )}
          {recto}
        </div>
        <div className="card-verso" onClick={onClick}>
          {!hover && (
            <div className="flip-button" onClick={onClick} title="recto">
              →
            </div>
          )}
          {verso}
        </div>
      </div>
    </div>
  );
};

export default FlipFlop;
