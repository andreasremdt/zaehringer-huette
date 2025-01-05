export default function canUseDOM() {
  return Boolean(
    typeof window !== "undefined" &&
      window.document &&
      window.document.createElement,
  );
}
