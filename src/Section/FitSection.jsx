function FitSection({ children, className = "" }) {
  return (
    <section
      className={`relative h-[100dvh] w-full snap-start snap-always overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}

export default FitSection;