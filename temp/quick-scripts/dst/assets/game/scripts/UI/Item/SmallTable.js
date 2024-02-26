
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/SmallTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFNtYWxsVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBRzlFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBcURDO1FBbkRXLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxjQUFRLEdBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELGNBQVEsR0FBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsY0FBUSxHQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxZQUFNLEdBQWlCLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFB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LENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEo7SUFDTCxDQUFDO0lBbEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2dCO0lBRmpCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FxRDlCO0lBQUQsaUJBQUM7Q0FyREQsQUFxREMsQ0FyRHVDLEVBQUUsQ0FBQyxTQUFTLEdBcURuRDtrQkFyRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFsbFRhYmxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBibG9ja05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcmVzdWx0XzE6IG51bWJlcltdW10gPSBbWzYsIDddLCBbNCwgNV0sIFszLCA0XSwgWzIsIDNdXTtcclxuICAgIHByaXZhdGUgcmVzdWx0XzI6IG51bWJlcltdW10gPSBbWzYsIDZdLCBbNCwgNF0sIFszLCAzXSwgWzIsIDJdXTtcclxuICAgIHByaXZhdGUgcmVzdWx0XzM6IG51bWJlcltdW10gPSBbWzYsIDVdLCBbNCwgM10sIFszLCAyXSwgWzIsIDFdXTtcclxuICAgIHByaXZhdGUgcmVzdWx0XzQ6IG51bWJlcltdW10gPSBbWzYsIDZdLCBbNCwgNF0sIFszLCAzXSwgWzIsIDJdXTtcclxuICAgIHByaXZhdGUgcmVzdWx0OiBudW1iZXJbXVtdW10gPSBbdGhpcy5yZXN1bHRfMSwgdGhpcy5yZXN1bHRfMiwgdGhpcy5yZXN1bHRfMywgdGhpcy5yZXN1bHRfNF07XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJMZXZlbCA9IDA7XHJcbiAgICBwcml2YXRlIGdhbWVUeXBlID0gMTtcclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuY3VyTGV2ZWwgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJMZXZlbDtcclxuICAgICAgICB0aGlzLmdhbWVUeXBlID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZ2FtZVR5cGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ibG9ja05vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tOb2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5jdXJMZXZlbCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIxXzFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIxXzFcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIxXzFcIikuZ2V0Q2hpbGRCeU5hbWUoXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnJlc3VsdFt0aGlzLmdhbWVUeXBlIC0gMV1bMF1bMF0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIxXzJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIxXzJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIxXzJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnJlc3VsdFt0aGlzLmdhbWVUeXBlIC0gMV1bMF1bMV0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyTGV2ZWwgPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tOb2RlLmdldENoaWxkQnlOYW1lKFwiMl8xXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tOb2RlLmdldENoaWxkQnlOYW1lKFwiMl8xXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tOb2RlLmdldENoaWxkQnlOYW1lKFwiMl8xXCIpLmdldENoaWxkQnlOYW1lKFwiTmV3IExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5yZXN1bHRbdGhpcy5nYW1lVHlwZSAtIDFdWzFdWzBdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tOb2RlLmdldENoaWxkQnlOYW1lKFwiMl8yXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tOb2RlLmdldENoaWxkQnlOYW1lKFwiMl8yXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tOb2RlLmdldENoaWxkQnlOYW1lKFwiMl8yXCIpLmdldENoaWxkQnlOYW1lKFwiTmV3IExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5yZXN1bHRbdGhpcy5nYW1lVHlwZSAtIDFdWzFdWzFdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1ckxldmVsID4gMikge1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrTm9kZS5nZXRDaGlsZEJ5TmFtZShcIjNfMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrTm9kZS5nZXRDaGlsZEJ5TmFtZShcIjNfMVwiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrTm9kZS5nZXRDaGlsZEJ5TmFtZShcIjNfMVwiKS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucmVzdWx0W3RoaXMuZ2FtZVR5cGUgLSAxXVsyXVswXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrTm9kZS5nZXRDaGlsZEJ5TmFtZShcIjNfMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrTm9kZS5nZXRDaGlsZEJ5TmFtZShcIjNfMlwiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrTm9kZS5nZXRDaGlsZEJ5TmFtZShcIjNfMlwiKS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucmVzdWx0W3RoaXMuZ2FtZVR5cGUgLSAxXVsyXVsxXS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXJMZXZlbCA+IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI0XzFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI0XzFcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI0XzFcIikuZ2V0Q2hpbGRCeU5hbWUoXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnJlc3VsdFt0aGlzLmdhbWVUeXBlIC0gMV1bM11bMF0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI0XzJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI0XzJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCI0XzJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnJlc3VsdFt0aGlzLmdhbWVUeXBlIC0gMV1bM11bMV0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19