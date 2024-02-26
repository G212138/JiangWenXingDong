/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
export class CustomSyncData {
    public curLevel: number = 0; // 当前关卡(第一关为0)
    // TODO 自定义

    public gameType: number = 0; //0: 未选 1：两端都不中 2：一端种一端不种 3：两端都不种 4：环形道路
    public curFillResult: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false]; //当前填充结果
    public curTableValue: string[] = ["", ""];
    public curBlockIndex: string = "";
}
