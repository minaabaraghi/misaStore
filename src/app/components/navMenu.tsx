"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaShoppingCart, FaBox, FaUser } from "react-icons/fa";

const menuItems = [
  { href: "/", label: "خانه", icon: <FaHome /> },
  { href: "/products", label: "محصولات", icon: <FaBox /> },
  { href: "/cart", label: "سبد خرید", icon: <FaShoppingCart /> },
  { href: "/profile", label: "پروفایل", icon: <FaUser /> },
];

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex md:justify-center justify-around gap-6 p-4 md:flex-row md:items-center md:static fixed bottom-0 left-0 right-0 bg-white md:bg-transparent">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex flex-col md:flex-row items-center gap-2 p-2 rounded-lg transition-colors duration-200 ${
                pathname === item.href
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm md:text-base">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
