import { PropsWithChildren } from "react";

export default function ErrorLabel({ children }: PropsWithChildren) {
  return (
    <p className=" bg-red-500 text-sm text-center my-4 uppercase">{children}</p>
  );
}
