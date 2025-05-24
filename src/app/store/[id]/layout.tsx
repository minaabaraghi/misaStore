export default function Layout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
