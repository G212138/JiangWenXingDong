import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { EventType } from "../../Data/EventType";
import { SoundConfig } from "./SoundConfig";


const { ccclass, property } = cc._decorator;

@ccclass
export default class BigTable extends cc.Component {
    @property(cc.Node)
    private blockNode: cc.Node = null;
    @property(cc.Node)
    private cursor: cc.Node = null;

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

        SyncDataManager.getSyncData().customSyncData.curBlockIndex = (this.curLevel + 1).toString() + "_1";

        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").active = true;
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = false;
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("New Label").getComponent(cc.Label).string = "";
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").active = true;
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").active = false;
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("New Label").getComponent(cc.Label).string = "";

        this.cursor.position = this.blockNode.getChildByName(SyncDataManager.getSyncData().customSyncData.curBlockIndex).position;
        //光标闪烁
        this.cursor.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(0.5), cc.fadeIn(0.5))));
    }

    private onClickBlock(event: cc.Event.EventTouch, index: string) {
        let indexArr = index.split("_");
        if (Number(indexArr[0]) != this.curLevel + 1) {
            return;
        }
        SoundManager.playEffect(SoundConfig.soudlist["点击格子"], false, false, false);
        SyncDataManager.getSyncData().customSyncData.curBlockIndex = index;
        for (let i = 0; i < this.blockNode.childrenCount; i++) {
            this.blockNode.children[i].getChildByName("bg").active = false;
        }
        this.cursor.position = this.blockNode.getChildByName(SyncDataManager.getSyncData().customSyncData.curBlockIndex).position;
        if (this.blockNode.getChildByName(SyncDataManager.getSyncData().customSyncData.curBlockIndex).getChildByName("New Label").getComponent(cc.Label).string != "") {
            this.cursor.x = this.blockNode.getChildByName(SyncDataManager.getSyncData().customSyncData.curBlockIndex).x + 30;
        }
    }

    private onClickNum(event: cc.Event.EventTouch, num: string) {
        SoundManager.playEffect(SoundConfig.soudlist["点击格子"], false, false, false);
        if (SyncDataManager.getSyncData().customSyncData.curBlockIndex == "") {
            return;
        }
        this.blockNode.getChildByName(SyncDataManager.getSyncData().customSyncData.curBlockIndex).getChildByName("New Label").getComponent(cc.Label).string = num;

        let index = Number(SyncDataManager.getSyncData().customSyncData.curBlockIndex.split("_")[1]);
        if (index == 1 && this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("New Label").getComponent(cc.Label).string == "") {
            SyncDataManager.getSyncData().customSyncData.curBlockIndex = (this.curLevel + 1).toString() + "_2";
            this.cursor.position = this.blockNode.getChildByName(SyncDataManager.getSyncData().customSyncData.curBlockIndex).position;
        } else {
            this.cursor.x = this.blockNode.getChildByName(SyncDataManager.getSyncData().customSyncData.curBlockIndex).x + 30;
        }
        SyncDataManager.getSyncData().customSyncData.curTableValue[0] = this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("New Label").getComponent(cc.Label).string;
        SyncDataManager.getSyncData().customSyncData.curTableValue[1] = this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("New Label").getComponent(cc.Label).string;
    }

    private onClickReset() {
        SoundManager.playEffect(SoundConfig.soudlist["点击格子"], false, false, false);
        this.blockNode.getChildByName(SyncDataManager.getSyncData().customSyncData.curBlockIndex).getChildByName("New Label").getComponent(cc.Label).string = "";
        SyncDataManager.getSyncData().customSyncData.curTableValue[Number(SyncDataManager.getSyncData().customSyncData.curBlockIndex.split("_")[0]) - 1] = "";
    }

    private onClickSubmit() {
        let curTableValue = SyncDataManager.getSyncData().customSyncData.curTableValue;
        if (curTableValue[0] == "" || curTableValue[1] == "") {
            SoundManager.playEffect(SoundConfig.soudlist["请填写记录"], false, false, false);
            if (curTableValue[0] == "") {
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = true;
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").color = cc.Color.RED;
                cc.tween(this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg"))
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .call(() => {
                        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = false;
                    })
                    .start();
            }
            if (curTableValue[1] == "") {
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").active = true;
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").color = cc.Color.RED;
                cc.tween(this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg"))
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .call(() => {
                        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").active = false;
                    })
                    .start();
            }
            return;
        } else {
            if (Number(curTableValue[0]) == this.result[this.gameType - 1][this.curLevel][0] && Number(curTableValue[1]) == this.result[this.gameType - 1][this.curLevel][1]) {
                if (this.curLevel == 3) {
                    SoundManager.playEffect(SoundConfig.soudlist["都对啦，你太棒了！"], false, false, false);
                } else {
                    SoundManager.playEffect(SoundConfig.soudlist["答对啦"], false, false, false);
                }
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = true;
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").color = cc.Color.GREEN;
                cc.tween(this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg"))
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .call(() => {
                        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = false;
                    })
                    .start();

                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").active = true;
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").color = cc.Color.GREEN;
                cc.tween(this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg"))
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .call(() => {
                        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").active = false;
                        ListenerManager.dispatch(EventType.NEXT_LEVEL, this.curLevel);
                    })
                    .start();
            } else {
                SoundManager.playEffect(SoundConfig.soudlist["这里有问题哦，再尝试一下吧"], false, false, false);
                if (Number(curTableValue[0]) != this.result[this.gameType - 1][this.curLevel][0]) {
                    this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = true;
                    this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").color = cc.Color.RED;
                    cc.tween(this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg"))
                        .to(0.5, { opacity: 255 })
                        .to(0.5, { opacity: 0 })
                        .to(0.5, { opacity: 255 })
                        .to(0.5, { opacity: 0 })
                        .call(() => {
                            this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = false;
                        })
                        .start();
                }
                if (Number(curTableValue[1]) != this.result[this.gameType - 1][this.curLevel][1]) {
                    this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").active = true;
                    this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").color = cc.Color.RED;
                    cc.tween(this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg"))
                        .to(0.5, { opacity: 255 })
                        .to(0.5, { opacity: 0 })
                        .to(0.5, { opacity: 255 })
                        .to(0.5, { opacity: 0 })
                        .call(() => {
                            this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").active = false;
                        })
                        .start();
                }
            }
        }
    }
}
