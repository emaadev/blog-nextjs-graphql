interface SectionTitleProps {
  title: string;
  children: React.ReactNode;
}

const SectionTitle = ({ title, children }: SectionTitleProps) => {
  return (
    <div className="section-title__container">
      <div className="section-title__line" />
      <h2 className="section-title__title">{title}</h2>
      {children}
    </div>
  );
};

export default SectionTitle;
