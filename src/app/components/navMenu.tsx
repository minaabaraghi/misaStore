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
    <nav className="bg-white shadow-md border-b">
      <ul className="flex justify-around md:justify-center gap-6 py-3 md:py-4">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 transition-colors duration-200 border-b-2
                ${
                  pathname === item.href
                    ? "text-blue-600 border-blue-600 font-semibold"
                    : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-400"
                }`}
            >
              <span className="block md:hidden text-lg">{item.icon}</span>
              <span className="text-sm md:text-base">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
