import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ReactQueryProvider } from "@/components/providers/ReactQueryProvider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <Header />
      <div className="bg-gray-200 p-6 lg:px-35.5 lg:pt-7 lg:pb-21">
        {children}
        <Footer />
      </div>
    </ReactQueryProvider>
  );
}
