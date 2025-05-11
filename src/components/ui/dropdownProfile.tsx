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
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{<User />}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 rtl">
          <DropdownMenuLabel>سارا عزیز</DropdownMenuLabel>
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
          <DropdownMenuItem>
            <LogOut />
            <span>خروج از حساب کاربری</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
