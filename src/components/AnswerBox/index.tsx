import { Button } from 'antd';

export default function AnswerCase(number: number): JSX.Element {
  return (
    <>
      <Button type="primary" shape="circle" size="large">
        {number}
      </Button>
    </>
  );
}
