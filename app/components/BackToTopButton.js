export default function BackToTopButton({ showBackToTop }) {
  return (
    <button
      className={`back-to-top ${showBackToTop ? "visible" : ""}`}
      aria-label="Back to top"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
