import { ReactNode } from 'react';

type PageProps = {
  className: string;
  title?: string;
  children?: ReactNode;
};

const ScrolledPage = ({className, title, children}:PageProps) => {
  return <div className={`${className} portfolio-page`}>
    { title && <h1>{title}</h1> }
    {children}
  </div>;
};

export default ScrolledPage;
