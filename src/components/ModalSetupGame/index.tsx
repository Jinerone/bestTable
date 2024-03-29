import {Input, Modal, Radio, RadioChangeEvent} from 'antd';
import { useState } from 'react';
import { useStore } from '../../business';
import { HelpLevel, ShuffleType } from '../../business/domain/enum';
import LevelConfig from '../../business/domain/LevelConfig';
import { UserOutlined } from '@ant-design/icons';

interface ModalSetupGameProps {
    onValidate: (levelConfig: LevelConfig, userName: string) => void;
}

export default function ModalSetupGame(props: ModalSetupGameProps): JSX.Element {
    const { isVisible } = useStore((state) => ({
        isVisible: state.isModalSetupVisible
    }));

    const options = [
        {label: "Facile", value: "easy"},
        {label: "Moyen", value: "medium"},
        {label: "Difficile", value: "hard"},
        {label: "Impossible?", value: "perfect"}
    ]

    const [selectedLevel, setSelectedLevel] = useState('easy');

  const onChangeLevel = ({ target: { value } }: RadioChangeEvent) => {
    setSelectedLevel(value);
  };

    function handleOk() {
        switch (selectedLevel) {
            case "easy":
                props.onValidate(new LevelConfig(ShuffleType.None, HelpLevel.Easy), "username");
            break;
            case "medium":
                props.onValidate(new LevelConfig(ShuffleType.ByTripleTable, HelpLevel.Medium), "username");
            break;
            case "hard":
                props.onValidate(new LevelConfig(ShuffleType.All, HelpLevel.Hard), "username");
            break;
            default:
                props.onValidate(new LevelConfig(ShuffleType.All, HelpLevel.None), "username");
            break;
        }
    }

  return (
    <>
      <Modal
        title="Configuration de la partie"
        open={isVisible}
        onOk={handleOk}
      >
        <Input
          size="large"
          placeholder="Pseudonyme"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Radio.Group
          options={options}
          onChange={onChangeLevel}
          value={selectedLevel}
          optionType="button"
          buttonStyle="solid"
        />
      </Modal>
    </>
  );
}
