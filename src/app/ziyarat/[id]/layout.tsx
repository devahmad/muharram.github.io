import { ziyarats } from "@/data/ziyarats";

export function generateStaticParams() {
  return ziyarats.map((ziyarat) => ({
    id: ziyarat.id,
  }));
}

export default function ZiyaratLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
