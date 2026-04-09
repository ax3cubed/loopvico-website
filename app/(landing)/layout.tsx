import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="pt-16 lg:pt-20">{children}</div>
      <Footer />
    </>
  );
}
