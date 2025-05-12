"use client";
import { ClipboardList, LogOut, Signpost, User, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

export function DropdownProfile() {
  const [userName, setUserName] = React.useState<string | null>(null);

  const handleUserIconClick = () => {
    setUserName(localStorage.getItem("username"));
  };
  const handleExit = () => {
    setUserName("");
    localStorage.setItem("username", "");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" onPointerDown={handleUserIconClick}>
            {<User />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 rtl">
          <DropdownMenuLabel>{userName} عزیز</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User />
              <span>حساب کاربری مشتری</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ClipboardList />
              <span>سفارش ها </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Wallet />
              <span>اعتبار کیف پول</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Signpost />
              <span>آدرس ها</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          {userName ? (
            <DropdownMenuItem>
              <LogOut />
              <button
                type="submit"
                className="text-right w-full"
                onClick={handleExit}
              >
                خروج از حساب کاربری
              </button>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem>
              <LogOut />
              <form action="/login" method="get" className=" w-full">
                <button type="submit" className="text-right w-full">
                  ورود یا عضویت
                </button>
              </form>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
