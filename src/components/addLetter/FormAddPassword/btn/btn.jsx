import React from "react";
import Btn from "@/components/global/btn";

export default function Btnx({
  style,
  ContinueAnyPassword,
  ContinueWithPassword,
}) {
  return (
    <div className={style}>
      <Btn
        value="guardar y jugar"
        action={ContinueWithPassword}
        type="active"
        width=""
        height=""
      />
      <Btn
        value="jugar sin guardar"
        action={ContinueAnyPassword}
        type="in"
        width=""
        height=""
      />
    </div>
  );
}
