
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/CustomSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFFSixhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUMsd0NBQXdDO1FBQzlELGtCQUFhLEdBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVE7UUFDaEksa0JBQWEsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpnIDopoHlkIzmraXnmoToh6rlrprkuYnmlbDmja5cbiAqIOa4uOaIj+S4muWKoeWxguWQjOatpeaVsOaNruWcqOi/memHjOa3u+WKoFxuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3luY0RhdGEge1xuICAgIHB1YmxpYyBjdXJMZXZlbDogbnVtYmVyID0gMDsgLy8g5b2T5YmN5YWz5Y2hKOesrOS4gOWFs+S4ujApXG4gICAgLy8gVE9ETyDoh6rlrprkuYlcblxuICAgIHB1YmxpYyBnYW1lVHlwZTogbnVtYmVyID0gMDsgLy8wOiDmnKrpgIkgMe+8muS4pOerr+mDveS4jeS4rSAy77ya5LiA56uv56eN5LiA56uv5LiN56eNIDPvvJrkuKTnq6/pg73kuI3np40gNO+8mueOr+W9oumBk+i3r1xuICAgIHB1YmxpYyBjdXJGaWxsUmVzdWx0OiBib29sZWFuW10gPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdOyAvL+W9k+WJjeWhq+WFhee7k+aenFxuICAgIHB1YmxpYyBjdXJUYWJsZVZhbHVlOiBzdHJpbmdbXSA9IFtcIlwiLCBcIlwiXTtcbiAgICBwdWJsaWMgY3VyQmxvY2tJbmRleDogc3RyaW5nID0gXCJcIjtcbn1cbiJdfQ==