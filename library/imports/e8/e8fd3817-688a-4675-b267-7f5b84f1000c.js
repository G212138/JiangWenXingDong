"use strict";
cc._RF.push(module, 'e8fd3gXaIpGdbJnf1uE8QAM', 'GameLayer');
// game/scripts/UI/Item/GameLayer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var EventType_1 = require("../../Data/EventType");
var BigTable_1 = require("./BigTable");
var FillArea_1 = require("./FillArea");
var OptionItem_1 = require("./OptionItem");
var SmallTable_1 = require("./SmallTable");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelPage = [];
        _this.shouye_option = null;
        _this.titleAudio = [];
        _this.tips = [
            "间距2格种树，可以分几段，种几颗？",
            "间距3格种树，可以分几段，种几颗？",
            "间距4格种树，可以分几段，种几颗？",
            "间距6格种树，可以分几段，种几颗？",
        ];
        _this.fillAreaResult_1 = [
            [true, false, true, false, true, false, true, false, true, false, true, false, true],
            [true, false, false, true, false, false, true, false, false, true, false, false, true],
            [true, false, false, false, true, false, false, false, true, false, false, false, true],
            [true, false, false, false, false, false, true, false, false, false, false, false, true]
        ];
        _this.fillAreaResult_2 = [
            [false, false, true, false, true, false, true, false, true, false, true, false, true],
            [false, false, false, true, false, false, true, false, false, true, false, false, true],
            [false, false, false, false, true, false, false, false, true, false, false, false, true],
            [false, false, false, false, false, false, true, false, false, false, false, false, true]
        ];
        //多种答案，校验方式不同
        _this.fillAreaResult_3_1 = [
            [false, true, false, true, false, true, false, true, false, true, false, true, false]
        ];
        _this.fillAreaResult_3_2 = [
            [false, true, false, false, true, false, false, true, false, false, true, false, false],
            [false, false, true, false, false, true, false, false, true, false, false, true, false],
        ];
        _this.fillAreaResult_3_3 = [
            [false, true, false, false, false, true, false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false, true, false, false, false, true, false],
            [false, false, true, false, false, false, true, false, false, false, true, false, false],
        ];
        _this.fillAreaResult_3_4 = [
            [false, true, false, false, false, false, false, true, false, false, false, false, false],
            [false, false, false, false, false, true, false, false, false, false, false, true, false],
            [false, false, true, false, false, false, false, false, true, false, false, false, false],
            [false, false, false, false, true, false, false, false, false, false, true, false, false],
            [false, false, false, true, false, false, false, false, false, true, false, false, false],
        ];
        _this.fillAreaResult_4_1 = [
            [true, false, true, false, true, false, true, false, true, false, true, false],
            [false, true, false, true, false, true, false, true, false, true, false, true]
        ];
        _this.fillAreaResult_4_2 = [
            [true, false, false, true, false, false, true, false, false, true, false, false],
            [false, true, false, false, true, false, false, true, false, false, true, false],
            [false, false, true, false, false, true, false, false, true, false, false, true]
        ];
        _this.fillAreaResult_4_3 = [
            [true, false, false, false, true, false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false, true, false, false, false, true],
            [false, false, true, false, false, false, true, false, false, false, true, false],
            [false, true, false, false, false, true, false, false, false, true, false, false]
        ];
        _this.fillAreaResult_4_4 = [
            [true, false, false, false, false, false, true, false, false, false, false, false],
            [false, false, false, false, false, true, false, false, false, false, false, true],
            [false, false, false, false, true, false, false, false, false, false, true, false],
            [false, false, false, true, false, false, false, false, false, true, false, false],
            [false, false, true, false, false, false, false, false, true, false, false, false],
            [false, true, false, false, false, false, false, true, false, false, false, false]
        ];
        _this.wrongIndex = [];
        return _this;
    }
    GameLayer.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.init, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_OPTION_END, this.onDragOptionEnd, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_OPTION_START, this.onDragOptionStart, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.NEXT_LEVEL, this.handleNextLevel, this);
    };
    GameLayer.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.init, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_OPTION_END, this.onDragOptionEnd, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_OPTION_START, this.onDragOptionStart, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.NEXT_LEVEL, this.handleNextLevel, this);
    };
    GameLayer.prototype.handleNextLevel = function (level) {
        if (level == 3) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel = 4;
            var inputNode = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('input_node');
            inputNode.active = false;
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["答题胜利"], false, false, false);
            var lihua_1 = this.node.getChildByName('caidai_b');
            lihua_1.active = true;
            Tools_1.Tools.playSpine(lihua_1.getComponent(sp.Skeleton), "animation", false, function () {
                lihua_1.active = false;
            });
        }
        else {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel = level + 1;
            var inputNode = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('input_node');
            inputNode.active = false;
            var gameType = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType;
            var fillNode = this.levelPage[gameType].getChildByName('fillNode');
            fillNode.children.forEach(function (node, index) {
                if (node.children.length > 0 && node.children[0].getComponent(OptionItem_1.default)) {
                    node.children[0].getComponent(OptionItem_1.default).reset();
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
        var result_node = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('result_node');
        result_node.getComponent(SmallTable_1.default).init();
    };
    GameLayer.prototype.onDragOptionEnd = function () {
        var option_node = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        option_node.getChildByName("New Label").getComponent(cc.Label).string = "x" + option_node.getChildByName("options").childrenCount.toString();
        var curFillResult = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curFillResult;
        var fillNode = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('fillNode');
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType == 4) {
            for (var i = 0; i < fillNode.childrenCount; i++) {
                var index = fillNode.children[i].getComponent(FillArea_1.default).index;
                if (fillNode.children[i].childrenCount > 0 && fillNode.children[i].children[0].getComponent(OptionItem_1.default)) {
                    curFillResult[index - 1] = true;
                }
                else {
                    curFillResult[index - 1] = false;
                }
            }
        }
        else {
            for (var i = 0; i < fillNode.childrenCount; i++) {
                if (fillNode.children[i].childrenCount > 0 && fillNode.children[i].children[0].getComponent(OptionItem_1.default)) {
                    curFillResult[i] = true;
                }
                else {
                    curFillResult[i] = false;
                }
            }
        }
        this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_reset').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_submit').active = option_node.getChildByName("options").childrenCount < 7;
    };
    GameLayer.prototype.onDragOptionStart = function () {
        var option_node = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        option_node.getChildByName("New Label").getComponent(cc.Label).string = "x" + option_node.getChildByName("options").childrenCount.toString();
    };
    GameLayer.prototype.init = function () {
        var lihua = this.node.getChildByName('caidai_b');
        lihua.active = false;
        for (var i = 0; i < this.levelPage.length; i++) {
            this.levelPage[i].active = false;
        }
        var gameType = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType;
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
    };
    GameLayer.prototype.showShouye = function () {
        this.levelPage[0].active = true;
        this.shouye_option.children.forEach(function (node, index) {
            node.scale = 0;
            cc.tween(node).delay(index * 0.1).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        });
    };
    GameLayer.prototype.onClickOption = function (event, index) {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击格子"], false, false, false);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel = 0;
        for (var i = 0; i < this.levelPage.length; i++) {
            this.levelPage[i].active = false;
        }
        var gameType = Number(index);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType = gameType;
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
    };
    GameLayer.prototype.onClickHome = function () {
        this.onClickReset();
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击格子"], false, false, false);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType = 0;
        for (var i = 0; i < this.levelPage.length; i++) {
            this.levelPage[i].active = false;
        }
        this.showShouye();
    };
    GameLayer.prototype.onShowGameType_1 = function () {
        var _this = this;
        this.levelPage[1].active = true;
        var option_node = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_reset').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_submit').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[1].getChildByName('tips').y = 666;
        this.levelPage[1].active = true;
        this.levelPage[1].getChildByName('option_node').active = false;
        this.levelPage[1].getChildByName('result_node').active = false;
        var fillNode = this.levelPage[1].getChildByName('fillNode');
        fillNode.children.forEach(function (node, index) {
            node.scale = 0;
            cc.tween(node).delay(index * 0.05).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        });
        this.scheduleOnce(function () {
            //TODO: 播放题干语音
            SoundManager_1.SoundManager.playEffect(_this.titleAudio[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel], false, false, false);
            _this.levelPage[1].getChildByName('tips').getChildByName("New Label").getComponent(cc.Label).string = _this.tips[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
            cc.tween(_this.levelPage[1].getChildByName('tips')).to(0.5, { y: 0 }, { easing: 'backOut' }).delay(3).call(function () {
                cc.tween(_this.levelPage[1].getChildByName('tips')).to(0.5, { y: 666 }, { easing: 'backOut' }).start();
            }).start();
            _this.levelPage[1].getChildByName('option_node').active = true;
            _this.levelPage[1].getChildByName('option_node').scale = 0;
            cc.tween(_this.levelPage[1].getChildByName('option_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
            _this.levelPage[1].getChildByName('result_node').active = true;
            _this.levelPage[1].getChildByName('result_node').scale = 0;
            cc.tween(_this.levelPage[1].getChildByName('result_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        }, 0.05 * 12);
    };
    GameLayer.prototype.onShowGameType_2 = function () {
        var _this = this;
        this.levelPage[2].active = true;
        var option_node = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_reset').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_submit').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[2].getChildByName('tips').y = 666;
        this.levelPage[2].active = true;
        this.levelPage[2].getChildByName('option_node').active = false;
        this.levelPage[2].getChildByName('result_node').active = false;
        var fillNode = this.levelPage[2].getChildByName('fillNode');
        fillNode.children.forEach(function (node, index) {
            node.scale = 0;
            cc.tween(node).delay(index * 0.05).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        });
        this.scheduleOnce(function () {
            //TODO: 播放题干语音
            SoundManager_1.SoundManager.playEffect(_this.titleAudio[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel], false, false, false);
            _this.levelPage[2].getChildByName('tips').getChildByName("New Label").getComponent(cc.Label).string = _this.tips[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
            cc.tween(_this.levelPage[2].getChildByName('tips')).to(0.5, { y: 0 }, { easing: 'backOut' }).delay(3).call(function () {
                cc.tween(_this.levelPage[2].getChildByName('tips')).to(0.5, { y: 666 }, { easing: 'backOut' }).start();
            }).start();
            _this.levelPage[2].getChildByName('option_node').active = true;
            _this.levelPage[2].getChildByName('option_node').scale = 0;
            cc.tween(_this.levelPage[2].getChildByName('option_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
            _this.levelPage[2].getChildByName('result_node').active = true;
            _this.levelPage[2].getChildByName('result_node').scale = 0;
            cc.tween(_this.levelPage[2].getChildByName('result_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        }, 0.05 * 12);
    };
    GameLayer.prototype.onShowGameType_3 = function () {
        var _this = this;
        this.levelPage[3].active = true;
        var option_node = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_reset').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_submit').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[3].getChildByName('tips').y = 666;
        this.levelPage[3].active = true;
        this.levelPage[3].getChildByName('option_node').active = false;
        this.levelPage[3].getChildByName('result_node').active = false;
        var fillNode = this.levelPage[2].getChildByName('fillNode');
        fillNode.children.forEach(function (node, index) {
            node.scale = 0;
            cc.tween(node).delay(index * 0.05).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        });
        this.scheduleOnce(function () {
            //TODO: 播放题干语音
            SoundManager_1.SoundManager.playEffect(_this.titleAudio[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel], false, false, false);
            _this.levelPage[3].getChildByName('tips').getChildByName("New Label").getComponent(cc.Label).string = _this.tips[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
            cc.tween(_this.levelPage[3].getChildByName('tips')).to(0.5, { y: 0 }, { easing: 'backOut' }).delay(3).call(function () {
                cc.tween(_this.levelPage[3].getChildByName('tips')).to(0.5, { y: 666 }, { easing: 'backOut' }).start();
            }).start();
            _this.levelPage[3].getChildByName('option_node').active = true;
            _this.levelPage[3].getChildByName('option_node').scale = 0;
            cc.tween(_this.levelPage[3].getChildByName('option_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
            _this.levelPage[3].getChildByName('result_node').active = true;
            _this.levelPage[3].getChildByName('result_node').scale = 0;
            cc.tween(_this.levelPage[3].getChildByName('result_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        }, 0.05 * 12);
    };
    GameLayer.prototype.onShowGameType_4 = function () {
        var _this = this;
        this.levelPage[4].active = true;
        var option_node = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('option_node');
        this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_reset').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('btn_submit').active = option_node.getChildByName("options").childrenCount < 7;
        this.levelPage[4].getChildByName('tips').y = 666;
        this.levelPage[4].active = true;
        this.levelPage[4].getChildByName('option_node').active = false;
        this.levelPage[4].getChildByName('result_node').active = false;
        var fillNode = this.levelPage[4].getChildByName('fillNode');
        fillNode.children.forEach(function (node, index) {
            node.scale = 0;
            cc.tween(node).delay(index * 0.05).to(0.5, { scale: 0.7 }, { easing: 'backOut' }).start();
        });
        this.scheduleOnce(function () {
            //TODO: 播放题干语音
            SoundManager_1.SoundManager.playEffect(_this.titleAudio[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel], false, false, false);
            _this.levelPage[4].getChildByName('tips').getChildByName("New Label").getComponent(cc.Label).string = _this.tips[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
            cc.tween(_this.levelPage[4].getChildByName('tips')).to(0.5, { y: 0 }, { easing: 'backOut' }).delay(3).call(function () {
                cc.tween(_this.levelPage[4].getChildByName('tips')).to(0.5, { y: 666 }, { easing: 'backOut' }).start();
            }).start();
            _this.levelPage[4].getChildByName('option_node').active = true;
            _this.levelPage[4].getChildByName('option_node').scale = 0;
            cc.tween(_this.levelPage[4].getChildByName('option_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
            _this.levelPage[4].getChildByName('result_node').active = true;
            _this.levelPage[4].getChildByName('result_node').scale = 0;
            cc.tween(_this.levelPage[4].getChildByName('result_node')).to(0.5, { scale: 1 }, { easing: 'backOut' }).start();
        }, 0.05 * 12);
    };
    GameLayer.prototype.onClickReset = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击格子"], false, false, false);
        var gameType = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType;
        var fillNode = this.levelPage[gameType].getChildByName('fillNode');
        fillNode.children.forEach(function (node, index) {
            if (node.children.length > 0 && node.children[0].getComponent(OptionItem_1.default)) {
                node.children[0].getComponent(OptionItem_1.default).reset();
            }
        });
        this.onDragOptionEnd();
    };
    GameLayer.prototype.onClickSubmit = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击格子"], false, false, false);
        var isTrue = this.onCheckResult();
        if (isTrue) {
            this.handleRight();
        }
        else {
            this.handleWrong();
        }
    };
    GameLayer.prototype.onCheckResult = function () {
        this.wrongIndex = [];
        var isTrue = true;
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType == 1) {
            var trueResult = this.fillAreaResult_1[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
            for (var i = 0; i < trueResult.length; i++) {
                if (trueResult[i] != SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curFillResult[i]) {
                    isTrue = false;
                    this.wrongIndex.push(i);
                }
            }
        }
        else if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType == 2) {
            var trueResult = this.fillAreaResult_2[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
            for (var i = 0; i < trueResult.length; i++) {
                if (trueResult[i] != SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curFillResult[i]) {
                    isTrue = false;
                    this.wrongIndex.push(i);
                }
            }
        }
        else if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType == 3) {
            var fillAreaResult = [this.fillAreaResult_3_1, this.fillAreaResult_3_2, this.fillAreaResult_3_3, this.fillAreaResult_3_4];
            var trueResult = fillAreaResult[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
            var curFillResult = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curFillResult;
            for (var i = 0; i < trueResult.length; i++) {
                var tempWrongIndex = [];
                for (var j = 0; j < trueResult[i].length; j++) {
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
        else if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType == 4) {
            var fillAreaResult = [this.fillAreaResult_4_1, this.fillAreaResult_4_2, this.fillAreaResult_4_3, this.fillAreaResult_4_4];
            var trueResult = fillAreaResult[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
            var curFillResult = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curFillResult;
            for (var i = 0; i < trueResult.length; i++) {
                var tempWrongIndex = [];
                for (var j = 0; j < trueResult[i].length; j++) {
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
    };
    GameLayer.prototype.handleWrong = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误反馈"], false, false, false);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["这里有问题哦，再尝试一下吧"], false, false, false);
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType == 4) {
            var _loop_1 = function (i) {
                var node = this_1.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('fillNode').getChildByName("area_" + (this_1.wrongIndex[i] + 1));
                cc.tween(node).call(function () { node.color = cc.Color.RED; }).delay(0.3).call(function () { node.color = cc.Color.WHITE; }).delay(0.3)
                    .call(function () { node.color = cc.Color.RED; }).delay(0.3).call(function () { node.color = cc.Color.WHITE; }).delay(0.3)
                    .call(function () { node.color = cc.Color.RED; }).delay(0.3).call(function () { node.color = cc.Color.WHITE; }).delay(0.3)
                    .start();
            };
            var this_1 = this;
            for (var i = 0; i < this.wrongIndex.length; i++) {
                _loop_1(i);
            }
        }
        else {
            var _loop_2 = function (i) {
                var node = this_2.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('fillNode').children[this_2.wrongIndex[i]];
                cc.tween(node).call(function () { node.color = cc.Color.RED; }).delay(0.3).call(function () { node.color = cc.Color.WHITE; }).delay(0.3)
                    .call(function () { node.color = cc.Color.RED; }).delay(0.3).call(function () { node.color = cc.Color.WHITE; }).delay(0.3)
                    .call(function () { node.color = cc.Color.RED; }).delay(0.3).call(function () { node.color = cc.Color.WHITE; }).delay(0.3)
                    .start();
            };
            var this_2 = this;
            for (var i = 0; i < this.wrongIndex.length; i++) {
                _loop_2(i);
            }
        }
    };
    GameLayer.prototype.handleRight = function () {
        var _this = this;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["答对啦"], false, false, false, function () {
            _this.showInputNode();
        });
        // let lihua = this.node.getChildByName('caidai_b');
        // lihua.active = true;
        // Tools.playSpine(lihua.getComponent(sp.Skeleton  ), "animation", false, () => {
        //     lihua.active = false;
        //     this.showInputNode();
        // });
    };
    GameLayer.prototype.showInputNode = function () {
        var inputNode = this.levelPage[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType].getChildByName('input_node');
        inputNode.active = true;
        inputNode.getComponent(BigTable_1.default).init();
    };
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "levelPage", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "shouye_option", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameLayer.prototype, "titleAudio", void 0);
    GameLayer = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(cc.Component));
exports.default = GameLayer;

cc._RF.pop();