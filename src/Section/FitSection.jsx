function FitSection({ children, className = "" }) {
  return (
    <section
      className={`relative min-h-[100dvh] w-full snap-start snap-always overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}

export default FitSection;
