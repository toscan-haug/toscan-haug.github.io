import { ReactNode } from 'react';

type SectionProps = {
  title?: string;
  children?: ReactNode;
};
const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="portfolio-section">
      {title && <h2>{title}</h2>}
      <div className="section-container">{children}</div>
    </section>
  );
};

export default Section;
