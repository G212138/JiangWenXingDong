"use strict";
cc._RF.push(module, 'f6665ym0IlJNYKq4da/THmw', 'CustomSyncData');
// game/scripts/Data/CustomSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSyncData = void 0;
/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
var CustomSyncData = /** @class */ (function () {
    function CustomSyncData() {
        this.curLevel = 0; // 当前关卡(第一关为0)
        // TODO 自定义
        this.gameType = 0; //0: 未选 1：两端都不中 2：一端种一端不种 3：两端都不种 4：环形道路
        this.curFillResult = [false, false, false, false, false, false, false, false, false, false, false, false, false]; //当前填充结果
        this.curTableValue = ["", ""];
        this.curBlockIndex = "";
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

cc._RF.pop();