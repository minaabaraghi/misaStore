// src/components/layout/MobileLayout.tsx

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-4 pb-16">
      {/* <Header /> */}
      <main>{children}</main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around p-2 border-t">
        <button>خانه</button>
        <button>دسته‌بندی</button>
        <button>سبد</button>
        <button>پروفایل</button>
      </nav>
    </div>
  );
}
