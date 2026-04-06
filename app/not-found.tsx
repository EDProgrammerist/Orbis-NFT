import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#010828]">
      <div className="text-center">
        <h1 className="font-grotesk text-cream text-[120px] leading-none">404</h1>
        <p className="font-grotesk text-cream/60 text-[20px] uppercase tracking-widest mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="font-grotesk text-neon uppercase text-[14px] tracking-wider border-b border-neon pb-1 hover:opacity-70 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
