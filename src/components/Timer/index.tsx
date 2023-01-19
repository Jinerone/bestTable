import { Card } from "antd";
import { useEffect, useState } from "react";

interface TimerProps {
  seconds: number;
}

export default function Timer(props: TimerProps): JSX.Element {

  return (
    <Card>
      <div style={{ fontSize: "60px" }}>{props.seconds}</div>
    </Card>
  );
}
