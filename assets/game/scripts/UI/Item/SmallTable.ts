import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SmallTable extends cc.Component {
    @property(cc.Node)
    private blockNode: cc.Node = null;

    private result_1: number[][] = [[6, 7], [4, 5], [3, 4], [2, 3]];
    private result_2: number[][] = [[6, 6], [4, 4], [3, 3], [2, 2]];
    private result_3: number[][] = [[6, 5], [4, 3], [3, 2], [2, 1]];
    private result_4: number[][] = [[6, 6], [4, 4], [3, 3], [2, 2]];
    private result: number[][][] = [this.result_1, this.result_2, this.result_3, this.result_4];

    private curLevel = 0;
    private gameType = 1;
    public init() {
        this.curLevel = SyncDataManager.getSyncData().customSyncData.curLevel;
        this.gameType = SyncDataManager.getSyncData().customSyncData.gameType;

        for (let i = 0; i < this.blockNode.childrenCount; i++) {
            this.blockNode.children[i].active = false;
        }
        
        if (this.curLevel > 0) {
            this.blockNode.getChildByName("1_1").active = true;
            this.blockNode.getChildByName("1_1").getChildByName("bg").active = false;
            this.blockNode.getChildByName("1_1").getChildByName("New Label").getComponent(cc.Label).string = this.result[this.gameType - 1][0][0].toString();
            this.blockNode.getChildByName("1_2").active = true;
            this.blockNode.getChildByName("1_2").getChildByName("bg").active = false;
            this.blockNode.getChildByName("1_2").getChildByName("New Label").getComponent(cc.Label).string = this.result[this.gameType - 1][0][1].toString();
        }
        if (this.curLevel > 1) {
            this.blockNode.getChildByName("2_1").active = true;
            this.blockNode.getChildByName("2_1").getChildByName("bg").active = false;
            this.blockNode.getChildByName("2_1").getChildByName("New Label").getComponent(cc.Label).string = this.result[this.gameType - 1][1][0].toString();
            this.blockNode.getChildByName("2_2").active = true;
            this.blockNode.getChildByName("2_2").getChildByName("bg").active = false;
            this.blockNode.getChildByName("2_2").getChildByName("New Label").getComponent(cc.Label).string = this.result[this.gameType - 1][1][1].toString();
        }
        if (this.curLevel > 2) {
            this.blockNode.getChildByName("3_1").active = true;
            this.blockNode.getChildByName("3_1").getChildByName("bg").active = false;
            this.blockNode.getChildByName("3_1").getChildByName("New Label").getComponent(cc.Label).string = this.result[this.gameType - 1][2][0].toString();
            this.blockNode.getChildByName("3_2").active = true;
            this.blockNode.getChildByName("3_2").getChildByName("bg").active = false;
            this.blockNode.getChildByName("3_2").getChildByName("New Label").getComponent(cc.Label).string = this.result[this.gameType - 1][2][1].toString();
        }
        if (this.curLevel > 3) {
            this.blockNode.getChildByName("4_1").active = true;
            this.blockNode.getChildByName("4_1").getChildByName("bg").active = false;
            this.blockNode.getChildByName("4_1").getChildByName("New Label").getComponent(cc.Label).string = this.result[this.gameType - 1][3][0].toString();
            this.blockNode.getChildByName("4_2").active = true;
            this.blockNode.getChildByName("4_2").getChildByName("bg").active = false;
            this.blockNode.getChildByName("4_2").getChildByName("New Label").getComponent(cc.Label).string = this.result[this.gameType - 1][3][1].toString();
        }
    }
}
