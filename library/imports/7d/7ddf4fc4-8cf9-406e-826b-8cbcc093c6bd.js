"use strict";
cc._RF.push(module, '7ddf4/EjPlAboJrjLzAk8a9', 'OptionItem');
// game/scripts/UI/Item/OptionItem.ts

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
var HitTest_1 = require("../../../../frame/scripts/Utils/HitTest");
var EventType_1 = require("../../Data/EventType");
var FillArea_1 = require("./FillArea");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OptionItem = /** @class */ (function (_super) {
    __extends(OptionItem, _super);
    function OptionItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionParent = null;
        _this.fillArea = null;
        return _this;
    }
    OptionItem.prototype.onDragStart = function (event) {
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_OPTION_START, pos);
    };
    OptionItem.prototype.onDragMove = function (event) {
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_OPTION, pos);
    };
    OptionItem.prototype.onDragEnd = function (event) {
        var _this = this;
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        var isInRect = false;
        this.fillArea.children.forEach(function (area) {
            if (HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), area) && area.getComponent(FillArea_1.default)) {
                isInRect = true;
                area.getComponent(FillArea_1.default).fill(_this.node);
            }
        });
        if (!isInRect) {
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误反馈"], false, false, false);
            this.reset();
        }
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_OPTION_END);
    };
    OptionItem.prototype.reset = function () {
        this.node.parent = this.optionParent;
        this.node.position = cc.v3(0, 0);
    };
    __decorate([
        property(cc.Node)
    ], OptionItem.prototype, "optionParent", void 0);
    __decorate([
        property(cc.Node)
    ], OptionItem.prototype, "fillArea", void 0);
    OptionItem = __decorate([
        ccclass
    ], OptionItem);
    return OptionItem;
}(cc.Component));
exports.default = OptionItem;

cc._RF.pop();