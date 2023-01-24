import { Card } from "antd";
import { useEffect, useState } from "react";

interface TimerProps {
  refreshNumber: number;
}

export default function Timer(props: TimerProps): JSX.Element {
  let [answerTime, setAnswerTime] = useState<number>(0);
  let [refreshNumber, setRefreshNumber] = useState<number>(props.refreshNumber);

  function setTimer() {
    if (refreshNumber < props.refreshNumber) {
      setRefreshNumber(props.refreshNumber);
      return setInterval(() => setAnswerTime(0));
    } else {
      return setInterval(() => setAnswerTime((s) => s + 1), 1000);
    }
  }
  useEffect(() => {
    const timer = setTimer();
    return () => clearInterval(timer);
  }, [answerTime, props.refreshNumber]);

  return (
    <Card>
      <div style={{ fontSize: "60px" }}>{answerTime}</div>
    </Card>
  );
}
