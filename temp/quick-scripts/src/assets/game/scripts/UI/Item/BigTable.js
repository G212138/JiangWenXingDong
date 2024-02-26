"use strict";
cc._RF.push(module, 'c9e1e0o5OdFBr222E0nl/Gp', 'BigTable');
// game/scripts/UI/Item/BigTable.ts

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
var EventType_1 = require("../../Data/EventType");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BigTable = /** @class */ (function (_super) {
    __extends(BigTable, _super);
    function BigTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockNode = null;
        _this.cursor = null;
        _this.result_1 = [[6, 7], [4, 5], [3, 4], [2, 3]];
        _this.result_2 = [[6, 6], [4, 4], [3, 3], [2, 2]];
        _this.result_3 = [[6, 5], [4, 3], [3, 2], [2, 1]];
        _this.result_4 = [[6, 6], [4, 4], [3, 3], [2, 2]];
        _this.result = [_this.result_1, _this.result_2, _this.result_3, _this.result_4];
        _this.curLevel = 0;
        _this.gameType = 1;
        return _this;
    }
    BigTable.prototype.init = function () {
        this.curLevel = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel;
        this.gameType = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.gameType;
        for (var i = 0; i < this.blockNode.childrenCount; i++) {
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
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex = (this.curLevel + 1).toString() + "_1";
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").active = true;
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = false;
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("New Label").getComponent(cc.Label).string = "";
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").active = true;
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").active = false;
        this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("New Label").getComponent(cc.Label).string = "";
        this.cursor.position = this.blockNode.getChildByName(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex).position;
        //光标闪烁
        this.cursor.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(0.5), cc.fadeIn(0.5))));
    };
    BigTable.prototype.onClickBlock = function (event, index) {
        var indexArr = index.split("_");
        if (Number(indexArr[0]) != this.curLevel + 1) {
            return;
        }
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击格子"], false, false, false);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex = index;
        for (var i = 0; i < this.blockNode.childrenCount; i++) {
            this.blockNode.children[i].getChildByName("bg").active = false;
        }
        this.cursor.position = this.blockNode.getChildByName(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex).position;
        if (this.blockNode.getChildByName(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex).getChildByName("New Label").getComponent(cc.Label).string != "") {
            this.cursor.x = this.blockNode.getChildByName(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex).x + 30;
        }
    };
    BigTable.prototype.onClickNum = function (event, num) {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击格子"], false, false, false);
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex == "") {
            return;
        }
        this.blockNode.getChildByName(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex).getChildByName("New Label").getComponent(cc.Label).string = num;
        var index = Number(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex.split("_")[1]);
        if (index == 1 && this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("New Label").getComponent(cc.Label).string == "") {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex = (this.curLevel + 1).toString() + "_2";
            this.cursor.position = this.blockNode.getChildByName(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex).position;
        }
        else {
            this.cursor.x = this.blockNode.getChildByName(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex).x + 30;
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curTableValue[0] = this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("New Label").getComponent(cc.Label).string;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curTableValue[1] = this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("New Label").getComponent(cc.Label).string;
    };
    BigTable.prototype.onClickReset = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击格子"], false, false, false);
        this.blockNode.getChildByName(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex).getChildByName("New Label").getComponent(cc.Label).string = "";
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curTableValue[Number(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curBlockIndex.split("_")[0]) - 1] = "";
    };
    BigTable.prototype.onClickSubmit = function () {
        var _this = this;
        var curTableValue = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curTableValue;
        if (curTableValue[0] == "" || curTableValue[1] == "") {
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["请填写记录"], false, false, false);
            if (curTableValue[0] == "") {
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = true;
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").color = cc.Color.RED;
                cc.tween(this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg"))
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .call(function () {
                    _this.blockNode.getChildByName((_this.curLevel + 1).toString() + "_1").getChildByName("bg").active = false;
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
                    .call(function () {
                    _this.blockNode.getChildByName((_this.curLevel + 1).toString() + "_2").getChildByName("bg").active = false;
                })
                    .start();
            }
            return;
        }
        else {
            if (Number(curTableValue[0]) == this.result[this.gameType - 1][this.curLevel][0] && Number(curTableValue[1]) == this.result[this.gameType - 1][this.curLevel][1]) {
                if (this.curLevel == 3) {
                    SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["都对啦，你太棒了！"], false, false, false);
                }
                else {
                    SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["答对啦"], false, false, false);
                }
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = true;
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").color = cc.Color.GREEN;
                cc.tween(this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg"))
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .call(function () {
                    _this.blockNode.getChildByName((_this.curLevel + 1).toString() + "_1").getChildByName("bg").active = false;
                })
                    .start();
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").active = true;
                this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg").color = cc.Color.GREEN;
                cc.tween(this.blockNode.getChildByName((this.curLevel + 1).toString() + "_2").getChildByName("bg"))
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .to(0.5, { opacity: 255 })
                    .to(0.5, { opacity: 0 })
                    .call(function () {
                    _this.blockNode.getChildByName((_this.curLevel + 1).toString() + "_2").getChildByName("bg").active = false;
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.NEXT_LEVEL, _this.curLevel);
                })
                    .start();
            }
            else {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["这里有问题哦，再尝试一下吧"], false, false, false);
                if (Number(curTableValue[0]) != this.result[this.gameType - 1][this.curLevel][0]) {
                    this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").active = true;
                    this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg").color = cc.Color.RED;
                    cc.tween(this.blockNode.getChildByName((this.curLevel + 1).toString() + "_1").getChildByName("bg"))
                        .to(0.5, { opacity: 255 })
                        .to(0.5, { opacity: 0 })
                        .to(0.5, { opacity: 255 })
                        .to(0.5, { opacity: 0 })
                        .call(function () {
                        _this.blockNode.getChildByName((_this.curLevel + 1).toString() + "_1").getChildByName("bg").active = false;
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
                        .call(function () {
                        _this.blockNode.getChildByName((_this.curLevel + 1).toString() + "_2").getChildByName("bg").active = false;
                    })
                        .start();
                }
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], BigTable.prototype, "blockNode", void 0);
    __decorate([
        property(cc.Node)
    ], BigTable.prototype, "cursor", void 0);
    BigTable = __decorate([
        ccclass
    ], BigTable);
    return BigTable;
}(cc.Component));
exports.default = BigTable;

cc._RF.pop();