"use strict";
cc._RF.push(module, '6ccf33n53pKnoq2HSpJmN89', 'SmallTable');
// game/scripts/UI/Item/SmallTable.ts

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
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SmallTable = /** @class */ (function (_super) {
    __extends(SmallTable, _super);
    function SmallTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockNode = null;
        _this.result_1 = [[6, 7], [4, 5], [3, 4], [2, 3]];
        _this.result_2 = [[6, 6], [4, 4], [3, 3], [2, 2]];
        _this.result_3 = [[6, 5], [4, 3], [3, 2], [2, 1]];
        _this.result_4 = [[6, 6], [4, 4], [3, 3], [2, 2]];
        _this.result = [_this.result_1, _this.result_2, _this.result_3, _this.result_4];
        _this.curLevel = 0;
        _this.gameType = 1;
        return _this;
    }
    SmallTable.prototype.init = function () {
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
    };
    __decorate([
        property(cc.Node)
    ], SmallTable.prototype, "blockNode", void 0);
    SmallTable = __decorate([
        ccclass
    ], SmallTable);
    return SmallTable;
}(cc.Component));
exports.default = SmallTable;

cc._RF.pop();