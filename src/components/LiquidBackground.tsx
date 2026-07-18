export default function LiquidBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="blob-a absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full opacity-40 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--color-liquid-1), transparent 70%)",
        }}
      />
      <div
        className="blob-b absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, var(--color-liquid-2), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 20%, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}
