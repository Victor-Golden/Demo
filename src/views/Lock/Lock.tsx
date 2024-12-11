import React from "react";

import TokenLock from "../TokenLock/TokenLock";
import LiqudityLock from "../LiquidityLock/LiquidityLock";

function Lock() {
  return (
    <div className="">
      <LiqudityLock />
      <TokenLock />
    </div>
  );
}

export default Lock;
