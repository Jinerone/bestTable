import AnswerRow from "../AnswerRow";

export default function AnswerGrid(ten: number): JSX.Element {
    return (<>
        {[...Array(10)].map((i) =>
            <AnswerRow number={ten * 10 + i} />
          )}
    </>)
} 