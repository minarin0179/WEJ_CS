import { copyToClipboard } from "../modules/copyToClipboard";
import { objToJson } from "../modules/objToJson";
import Button from '@mui/material/Button';

export const Character = ({ character }) => {

    const handleButtonClick = () => {
        const json = objToJson(character);
        copyToClipboard(json);
    };

    return (
        <div>
            <h1>{character.name}</h1>
            <p>技術:{character.params?.tech}</p>
            <p>生存:{character.params?.surv}</p>
            <p>戦闘:{character.params?.conv}</p>
            <Button
                variant="outlined"
                color="inherit"
                onClick={handleButtonClick}
            >
                クリップボードに出力
            </Button>
        </div>
    );
}