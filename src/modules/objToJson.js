
export const objToJson = (character) => {
    return JSON.stringify({
        kind: "character",
        data: {
            name: character?.name,
            memo: `特性スキル:{}\n汎用スキル:{}\n武器:${character?.arm}\nファッション:${character?.fashion}\n大事なもの:${character?.treasure}\nついでの目的:${character?.purpose}\n日々の楽しみ:${character?.hobby}\n相手への感情:${character?.feeling}\nヴィークル:${character?.vehicle}\n\n${character?.memo}`,
            externalUrl: "url",
            params: [
                {
                    "label": "技術",
                    "value": character?.params.tech
                },
                {
                    "label": "生存",
                    "value": character?.params.surv
                },
                {
                    "label": "戦闘",
                    "value": character?.params.conv
                }
            ],
            status: [
                {
                    "label": "モチベーション",
                    "value": 0,
                    "max": 3
                },
                {
                    "label": "リワード",
                    "value": 0,
                    "max": 3
                }
            ],
            commands: "{技術}B6>=5 技術判定\n{生存}B6>=5 生存判定\n{戦闘}B6>=5 戦闘判定\n1B6>=5\n2B6>=5\n3B6>=5\n4B6>=5\n5B6>=5\n10B6>=5\n\n★資源の減少チェック\nchoice[食料,健康,電力,パーツ,ヴィークル,もう１回（減少量２）]\n\n★資源の獲得(リワード＋１回)\nchoice[食料,健康,電力,パーツ,ヴィークル,任意]",
            width: 12,
            color: character?.type === 0 ? "#FC5B5B" : "#5170FF",
        }
    })
}
