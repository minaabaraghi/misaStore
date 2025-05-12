// import MobileLayout from "./components/layout/mobileLayout";
// import DesktopLayout from "./components/layout/desktopLayout";
// import { headers } from "next/headers";
import NavMenu from "./components/navMenu";

export default async function Home() {
  // const device = (await headers()).get("x-device-type"); // باید await کنی
  // const isMobile = device === "mobile";

  return <NavMenu />;
}
