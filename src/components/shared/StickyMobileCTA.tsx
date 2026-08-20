import Link from "next/link";
import { Search } from "lucide-react";

/**
 * Mobile-only sticky bottom bar.
 */
export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary shadow-[0_-4px_16px_rgba(0,0,0,0.15)] flex">
      <Link
        href="/find-an-installer"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-center text-primary-foreground font-bold cursor-pointer"
      >
        <Search className="w-4 h-4" />
        Find an Installer
      </Link>
    </div>
  );
}
