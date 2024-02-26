import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { EventType } from "../../Data/EventType";
import BigTable from "./BigTable";
import FillArea from "./FillArea";
import OptionItem from "./OptionItem";
import SmallTable from "./SmallTable";
import { SoundConfig } from "./SoundConfig";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

    @property(cc.Node)
    private levelPage: cc.Node[] = [];
    @property(cc.Node)
    private shouye_option: cc.Node = null;
    @property(cc.AudioClip)
    private titleAudio: cc.AudioClip[] = [];

    private tips: string[] = [
        "间距2格种树，可以分几段，种几颗？",
        "间距3格种树，可以分几段，种几颗？",
        "间距4格种树，可以分几段，种几颗？",
        "间距6格种树，可以分几段，种几颗？",
    ]

    private fillAreaResult_1: boolean[][] = [
        [true, false, true, false, true, false, true, false, true, false, true, false, true],
        [true, false, false, true, false, false, true, false, false, true, false, false, true],
        [true, false, false, false, true, false, false, false, true, false, false, false, true],
        [true, false, false, false, false, false, true, false, false, false, false, false, true]
    ];
    private fillAreaResult_2: boolean[][] = [
        [false, false, true, false, true, false, true, false, true, false, true, false, true],
        [false, false, false, true, false, false, true, false, false, true, false, false, true],
        [false, false, false, false, true, false, false, false, true, false, false, false, true],
        [false, false, false, false, false, false, true, false, false, false, false, false, true]
    ];
    //多种答案，校验方式不同
    private fillAreaResult_3_1: boolean[][] = [
        [false, true, false, true, false, true, false, true, false, true, false, true, false]
    ];
    private fillAreaResult_3_2: boolean[][] = [
        [false, true, false, false, true, false, false, true, false, false, true, false, false],
        [false, false, true, false, false, true, false, false, true, false, false, true, false],
    ];
    private fillAreaResult_3_3: boolean[][] = [
        [false, true, false, false, false, true, false, false, false, true, false, false, false],
        [false, false, false, true, false, false, false, true, false, false, false, true, false],
        [false, false, true, false, false, false, true, false, false, false, true, false, false],
    ];
    private fillAreaResult_3_4: boolean[][] = [
        [false, true, false, false, false, false, false, true, false, false, false, false, false],
        [false, false, false, false, false, true, false, false, false, false, false, true, false],
        [false, false, true, false, false, false, false, false, true, false, false, false, false],
        [false, false, false, false, true, false, false, false, false, false, true, false, false],
        [false, false, false, true, false, false, false, false, false, true, false, false, false],
    ];

    private fillAreaResult_4_1: boolean[][] = [
        [true, false, true, false, true, false, true, false, true, false, true, false],
        [false, true, false, true, false, true, false, true, false, true, false, true]
    ];

    private fillAreaResult_4_2: boolean[][] = [
        [true, false, false, true, false, false, true, false, false, true, false, false],
        [false, true, false, false, true, false, false, true, false, false, true, false],
        [false, false, true, false, false, true, false, false, true, false, false, true]
    ];

    private fillAreaResult_4_3: boolean[][] = [
        [true, false, false, false, true, false, false, false, true, false, false, false],
        [false, false, false, true, false, false, false, true, false, false, false, true],
        [false, false, true, false, false, false, true, false, false, false, true, false],
        [false, true, false, false, false, true, false, false, false, true, false, false]
    ];

    private fillAreaResult_4_4: boolean[][] = [
        [true, false, false, false, false, false, true, false, false, false, false, false],
        [false, false, false, false, false, true, false, false, false, false, false, true],
        [false, false, false, false, true, false, false, false, false, false, true, false],
        [false, false, false, true, false, false, false, false, false, true, false, false],
        [false, false, true, false, false, false, false, false, true, false, false, false],
        [false, true, false, false, false, false, false, true, false, false, false, false]
    ];

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.init, this);
        ListenerManager.on(EventType.DRAG_OPTION_END, this.onDragOptionEnd, this);
        ListenerManager.on(EventType.DRAG_OPTION_START, this.onDragOptionStart, this);
        ListenerManager.on(EventType.NEXT_LEVEL, this.handleNextLevel, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.init, this);
        ListenerManager.off(EventType.DRAG_OPTION_END, this.onDragOptionEnd, this);
        ListenerManager.off(EventType.DRAG_OPTION_START, this.onDragOptionStart, this);
        ListenerManager.off(EventType.NEXT_LEVEL, this.handleNextLevel, this);
    }

    private handleNextLevel(level: number) {
        if (level == 3) {
            SyncDataManager.getSyncData().customSyncData.curLevel = 4;
            let inputNode = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('input_node');
            inputNode.active = false;
            SoundManager.playEffect(SoundConfig.soudlist["答题胜利"], false, false, false);
            let lihua = this.node.getChildByName('caidai_b');
            lihua.active = true;
            Tools.playSpine(lihua.getComponent(sp.Skeleton), "animation", false, () => {
                lihua.active = false;

            });
        } else {
            SyncDataManager.getSyncData().customSyncData.curLevel = level + 1;
            let inputNode = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('input_node');
            inputNode.active = false;
            let gameType = SyncDataManager.getSyncData().customSyncData.gameType;
            let fillNode = this.levelPage[gameType].getChildByName('fillNode');
            fillNode.children.forEach((node, index) => {
                if (node.children.length > 0 && node.children[0].getComponent(OptionItem)) {
                    node.children[0].getComponent(OptionItem).reset();
                }
            });
            this.onDragOptionEnd();
            switch (gameType) {
                case 1:
                    this.onShowGameType_1();
                    break;
                case 2:
                    this.onShowGameType_2();
                    break;
                case 3:
                    this.onShowGameType_3();
                    break;
                case 4:
                    this.onShowGameType_4();
                    break;
                default:
                    this.showShouye();
                    break;
            }
        }
        let result_node = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('result_node');
        result_node.getComponent(SmallTable).init();
    }

    private onDragOptionEnd() {
        let option_node = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        option_node.getChildByName("New Label").getComponent(cc.Label).string = "x" + option_node.getChildByName("options").childrenCount.toString();

        let curFillResult = SyncDataManager.getSyncData().customSyncData.curFillResult;
        let fillNode = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('fillNode');
        if (SyncDataManager.getSyncData().customSyncData.gameType == 4) {
            for (let i = 0; i < fillNode.childrenCount; i++) {
                let index = fillNode.children[i].getComponent(FillArea).index;
                if (fillNode.children[i].childrenCount > 0 && fillNode.children[i].children[0].getComponent(OptionItem)) {
                    curFillResult[index - 1] = true;
                } else {
                    curFillResult[index - 1] = false;
                }
            }
        } else {
            for (let i = 0; i < fillNode.childrenCount; i++) {
                if (fillNode.children[i].childrenCount > 0 && fillNode.children[i].children[0].getComponent(OptionItem)) {
                    curFillResult[i] = true;
                } else {
                    curFillResult[i] = false;
                }
            }
        }        

        this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_reset').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_submit').active = option_node.getChildByName("options").childrenCount < 7;
    }

    private onDragOptionStart() {
        let option_node = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        option_node.getChildByName("New Label").getComponent(cc.Label).string = "x" + option_node.getChildByName("options").childrenCount.toString();
    }

    private init() {
        let lihua = this.node.getChildByName('caidai_b');
        lihua.active = false;

        for (let i = 0; i < this.levelPage.length; i++) {
            this.levelPage[i].active = false;
        }
        let gameType = SyncDataManager.getSyncData().customSyncData.gameType;
        switch (gameType) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                this.showShouye();
                break;
        }
    }

    private showShouye() {
        this.levelPage[0].active = true;
        this.shouye_option.children.forEach((node, index) => {
            node.scale = 0;
            cc.tween(node).delay(index * 0.1).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        });
    }

    private onClickOption(event: cc.Event.EventTouch, index: string) {
        SoundManager.playEffect(SoundConfig.soudlist["点击格子"], false, false, false);
        SyncDataManager.getSyncData().customSyncData.curLevel = 0;
        for (let i = 0; i < this.levelPage.length; i++) {
            this.levelPage[i].active = false;
        }
        let gameType = Number(index);
        SyncDataManager.getSyncData().customSyncData.gameType = gameType;
        switch (gameType) {
            case 1:
                this.onShowGameType_1();
                break;
            case 2:
                this.onShowGameType_2();
                break;
            case 3:
                this.onShowGameType_3();
                break;
            case 4:
                this.onShowGameType_4();
                break;
            default:
                this.showShouye();
                break;
        }
    }

    private onClickHome() {
        this.onClickReset();
        SoundManager.playEffect(SoundConfig.soudlist["点击格子"], false, false, false);
        SyncDataManager.getSyncData().customSyncData.gameType = 0;
        for (let i = 0; i < this.levelPage.length; i++) {
            this.levelPage[i].active = false;
        }
        this.showShouye();
    }

    private onShowGameType_1() {
        this.levelPage[1].active = true;
        let option_node = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_reset').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_submit').active = option_node.getChildByName("options").childrenCount < 7;

        this.levelPage[1].getChildByName('tips').y = 666;
        this.levelPage[1].active = true;
        this.levelPage[1].getChildByName('option_node').active = false;
        this.levelPage[1].getChildByName('result_node').active = false;
        let fillNode = this.levelPage[1].getChildByName('fillNode');
        fillNode.children.forEach((node, index) => {
            node.scale = 0;
            cc.tween(node).delay(index * 0.05).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        });
        this.scheduleOnce(() => {
            //TODO: 播放题干语音
            SoundManager.playEffect(this.titleAudio[SyncDataManager.getSyncData().customSyncData.curLevel], false, false, false);
            this.levelPage[1].getChildByName('tips').getChildByName("New Label").getComponent(cc.Label).string = this.tips[SyncDataManager.getSyncData().customSyncData.curLevel];
            cc.tween(this.levelPage[1].getChildByName('tips')).to(0.5, { y: 0 }, { easing: 'backOut' }).delay(3).call(() => {
                cc.tween(this.levelPage[1].getChildByName('tips')).to(0.5, { y: 666 }, { easing: 'backOut' }).start();
            }).start();

            this.levelPage[1].getChildByName('option_node').active = true;
            this.levelPage[1].getChildByName('option_node').scale = 0;
            cc.tween(this.levelPage[1].getChildByName('option_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();

            this.levelPage[1].getChildByName('result_node').active = true;
            this.levelPage[1].getChildByName('result_node').scale = 0;
            cc.tween(this.levelPage[1].getChildByName('result_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        }, 0.05 * 12);
    }

    private onShowGameType_2() {
        this.levelPage[2].active = true;
        let option_node = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_reset').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_submit').active = option_node.getChildByName("options").childrenCount < 7;

        this.levelPage[2].getChildByName('tips').y = 666;
        this.levelPage[2].active = true;
        this.levelPage[2].getChildByName('option_node').active = false;
        this.levelPage[2].getChildByName('result_node').active = false;
        let fillNode = this.levelPage[2].getChildByName('fillNode');
        fillNode.children.forEach((node, index) => {
            node.scale = 0;
            cc.tween(node).delay(index * 0.05).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        });
        this.scheduleOnce(() => {
            //TODO: 播放题干语音
            SoundManager.playEffect(this.titleAudio[SyncDataManager.getSyncData().customSyncData.curLevel], false, false, false);
            this.levelPage[2].getChildByName('tips').getChildByName("New Label").getComponent(cc.Label).string = this.tips[SyncDataManager.getSyncData().customSyncData.curLevel];
            cc.tween(this.levelPage[2].getChildByName('tips')).to(0.5, { y: 0 }, { easing: 'backOut' }).delay(3).call(() => {
                cc.tween(this.levelPage[2].getChildByName('tips')).to(0.5, { y: 666 }, { easing: 'backOut' }).start();
            }).start();

            this.levelPage[2].getChildByName('option_node').active = true;
            this.levelPage[2].getChildByName('option_node').scale = 0;
            cc.tween(this.levelPage[2].getChildByName('option_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();

            this.levelPage[2].getChildByName('result_node').active = true;
            this.levelPage[2].getChildByName('result_node').scale = 0;
            cc.tween(this.levelPage[2].getChildByName('result_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        }, 0.05 * 12);
    }

    private onShowGameType_3() {
        this.levelPage[3].active = true;
        let option_node = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_reset').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_submit').active = option_node.getChildByName("options").childrenCount < 7;

        this.levelPage[3].getChildByName('tips').y = 666;
        this.levelPage[3].active = true;
        this.levelPage[3].getChildByName('option_node').active = false;
        this.levelPage[3].getChildByName('result_node').active = false;
        let fillNode = this.levelPage[2].getChildByName('fillNode');
        fillNode.children.forEach((node, index) => {
            node.scale = 0;
            cc.tween(node).delay(index * 0.05).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        });
        this.scheduleOnce(() => {
            //TODO: 播放题干语音
            SoundManager.playEffect(this.titleAudio[SyncDataManager.getSyncData().customSyncData.curLevel], false, false, false);
            this.levelPage[3].getChildByName('tips').getChildByName("New Label").getComponent(cc.Label).string = this.tips[SyncDataManager.getSyncData().customSyncData.curLevel];
            cc.tween(this.levelPage[3].getChildByName('tips')).to(0.5, { y: 0 }, { easing: 'backOut' }).delay(3).call(() => {
                cc.tween(this.levelPage[3].getChildByName('tips')).to(0.5, { y: 666 }, { easing: 'backOut' }).start();
            }).start();

            this.levelPage[3].getChildByName('option_node').active = true;
            this.levelPage[3].getChildByName('option_node').scale = 0;
            cc.tween(this.levelPage[3].getChildByName('option_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();

            this.levelPage[3].getChildByName('result_node').active = true;
            this.levelPage[3].getChildByName('result_node').scale = 0;
            cc.tween(this.levelPage[3].getChildByName('result_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        }, 0.05 * 12);
    }

    private onShowGameType_4() {
        this.levelPage[4].active = true;
        let option_node = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_reset').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_submit').active = option_node.getChildByName("options").childrenCount < 7;

        this.levelPage[4].getChildByName('tips').y = 666;
        this.levelPage[4].active = true;
        this.levelPage[4].getChildByName('option_node').active = false;
        this.levelPage[4].getChildByName('result_node').active = false;
        let fillNode = this.levelPage[4].getChildByName('fillNode');
        fillNode.children.forEach((node, index) => {
            node.scale = 0;
            cc.tween(node).delay(index * 0.05).to(0.5, { scale: 0.7 }, { easing: 'backOut' }).start();
        });
        this.scheduleOnce(() => {
            //TODO: 播放题干语音
            SoundManager.playEffect(this.titleAudio[SyncDataManager.getSyncData().customSyncData.curLevel], false, false, false);
            this.levelPage[4].getChildByName('tips').getChildByName("New Label").getComponent(cc.Label).string = this.tips[SyncDataManager.getSyncData().customSyncData.curLevel];
            cc.tween(this.levelPage[4].getChildByName('tips')).to(0.5, { y: 0 }, { easing: 'backOut' }).delay(3).call(() => {
                cc.tween(this.levelPage[4].getChildByName('tips')).to(0.5, { y: 666 }, { easing: 'backOut' }).start();
            }).start();

            this.levelPage[4].getChildByName('option_node').active = true;
            this.levelPage[4].getChildByName('option_node').scale = 0;
            cc.tween(this.levelPage[4].getChildByName('option_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();

            this.levelPage[4].getChildByName('result_node').active = true;
            this.levelPage[4].getChildByName('result_node').scale = 0;
            cc.tween(this.levelPage[4].getChildByName('result_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        }, 0.05 * 12);
    }

    private onClickReset() {
        SoundManager.playEffect(SoundConfig.soudlist["点击格子"], false, false, false);
        let gameType = SyncDataManager.getSyncData().customSyncData.gameType;
        let fillNode = this.levelPage[gameType].getChildByName('fillNode');
        fillNode.children.forEach((node, index) => {
            if (node.children.length > 0 && node.children[0].getComponent(OptionItem)) {
                node.children[0].getComponent(OptionItem).reset();
            }
        });
        this.onDragOptionEnd();
    }

    private onClickSubmit() {
        SoundManager.playEffect(SoundConfig.soudlist["点击格子"], false, false, false);
        let isTrue = this.onCheckResult();
        if (isTrue) {
            this.handleRight();
        } else {
            this.handleWrong();
        }
    }

    private wrongIndex: number[] = [];
    private onCheckResult(): boolean {
        this.wrongIndex = [];
        let isTrue = true;
        if (SyncDataManager.getSyncData().customSyncData.gameType == 1) {
            let trueResult = this.fillAreaResult_1[SyncDataManager.getSyncData().customSyncData.curLevel];
            for (let i = 0; i < trueResult.length; i++) {
                if (trueResult[i] != SyncDataManager.getSyncData().customSyncData.curFillResult[i]) {
                    isTrue = false;
                    this.wrongIndex.push(i);
                }
            }
        } else if (SyncDataManager.getSyncData().customSyncData.gameType == 2) {
            let trueResult = this.fillAreaResult_2[SyncDataManager.getSyncData().customSyncData.curLevel];
            for (let i = 0; i < trueResult.length; i++) {
                if (trueResult[i] != SyncDataManager.getSyncData().customSyncData.curFillResult[i]) {
                    isTrue = false;
                    this.wrongIndex.push(i);
                }
            }
        } else if (SyncDataManager.getSyncData().customSyncData.gameType == 3) {                        
            let fillAreaResult = [this.fillAreaResult_3_1, this.fillAreaResult_3_2, this.fillAreaResult_3_3, this.fillAreaResult_3_4];
            let trueResult = fillAreaResult[SyncDataManager.getSyncData().customSyncData.curLevel];
            let curFillResult = SyncDataManager.getSyncData().customSyncData.curFillResult;            
            for (let i = 0; i < trueResult.length; i++) {
                let tempWrongIndex = [];
                for (let j = 0; j < trueResult[i].length; j++) {
                    if (trueResult[i][j] != curFillResult[j]) {
                        isTrue = false;
                        tempWrongIndex.push(j);
                    }
                }
                if (this.wrongIndex.length == 0) {
                    this.wrongIndex = tempWrongIndex;
                }
                if (tempWrongIndex.length > 0 && (tempWrongIndex.length < this.wrongIndex.length)) {
                    this.wrongIndex = tempWrongIndex;
                }
                if (tempWrongIndex.length == 0) {
                    return true;
                }
            }
        } else if (SyncDataManager.getSyncData().customSyncData.gameType == 4) {                        
            let fillAreaResult = [this.fillAreaResult_4_1, this.fillAreaResult_4_2, this.fillAreaResult_4_3, this.fillAreaResult_4_4];
            let trueResult = fillAreaResult[SyncDataManager.getSyncData().customSyncData.curLevel];
            let curFillResult = SyncDataManager.getSyncData().customSyncData.curFillResult;            
            for (let i = 0; i < trueResult.length; i++) {
                let tempWrongIndex = [];
                for (let j = 0; j < trueResult[i].length; j++) {
                    if (trueResult[i][j] != curFillResult[j]) {
                        isTrue = false;
                        tempWrongIndex.push(j);
                    }
                }
                if (this.wrongIndex.length == 0) {
                    this.wrongIndex = tempWrongIndex;
                }
                if (tempWrongIndex.length > 0 && (tempWrongIndex.length < this.wrongIndex.length)) {
                    this.wrongIndex = tempWrongIndex;
                }
                if (tempWrongIndex.length == 0) {
                    return true;
                }
            }
        }
        return isTrue;
    }

    private handleWrong() {
        SoundManager.playEffect(SoundConfig.soudlist["错误反馈"], false, false, false);
        SoundManager.playEffect(SoundConfig.soudlist["这里有问题哦，再尝试一下吧"], false, false, false);
        if (SyncDataManager.getSyncData().customSyncData.gameType == 4) {
            for (let i = 0; i < this.wrongIndex.length; i++) {
                let node = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('fillNode').getChildByName("area_" + (this.wrongIndex[i] + 1));
                cc.tween(node).call(() => { node.color = cc.Color.RED }).delay(0.3).call(() => { node.color = cc.Color.WHITE }).delay(0.3)
                    .call(() => { node.color = cc.Color.RED }).delay(0.3).call(() => { node.color = cc.Color.WHITE }).delay(0.3)
                    .call(() => { node.color = cc.Color.RED }).delay(0.3).call(() => { node.color = cc.Color.WHITE }).delay(0.3)
                    .start();
            }
        } else {
            for (let i = 0; i < this.wrongIndex.length; i++) {
                let node = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('fillNode').children[this.wrongIndex[i]];
                cc.tween(node).call(() => { node.color = cc.Color.RED }).delay(0.3).call(() => { node.color = cc.Color.WHITE }).delay(0.3)
                    .call(() => { node.color = cc.Color.RED }).delay(0.3).call(() => { node.color = cc.Color.WHITE }).delay(0.3)
                    .call(() => { node.color = cc.Color.RED }).delay(0.3).call(() => { node.color = cc.Color.WHITE }).delay(0.3)
                    .start();
            }
        }        
    }

    private handleRight() {
        SoundManager.playEffect(SoundConfig.soudlist["答对啦"], false, false, false, () => {
            this.showInputNode();
        });
        // let lihua = this.node.getChildByName('caidai_b');
        // lihua.active = true;
        // Tools.playSpine(lihua.getComponent(sp.Skeleton  ), "animation", false, () => {
        //     lihua.active = false;
        //     this.showInputNode();
        // });
    }

    private showInputNode() {
        let inputNode = this.levelPage[SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('input_node');
        inputNode.active = true;
        inputNode.getComponent(BigTable).init();
    }

}
