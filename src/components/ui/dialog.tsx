import React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";

export function Dialog(props: React.PropsWithChildren) {
  return (
    <>
      <RadixDialog.Dialog>
        <RadixDialog.DialogContent>
          {props.children}
          <h1>sfhsdhj</h1>
        </RadixDialog.DialogContent>
      </RadixDialog.Dialog>
    </>
  );
}
