import { Card, Space } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

interface BadPointsBarProps {
  badNumber: number;
}
export default function BadPointsBar(props: BadPointsBarProps): JSX.Element {
  return (
    <>
      <Card style={{ width: 300 }}>
        <Space direction="horizontal">
          {[...Array(props.badNumber)].map((index, key) => {
            return (
              <CloseCircleFilled key={key} style={{ fontSize: "24px", color: "red" }} />
            ); 
          })}
        </Space>
      </Card>
    </>
  );
}
