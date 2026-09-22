function FitSection({ children, className = "" }) {
  return (
    <section
      className={`
        relative
        h-[100dvh]
        w-full
        shrink-0
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export default FitSection;