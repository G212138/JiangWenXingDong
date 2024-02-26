import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { EventType } from "../../Data/EventType";
import { SoundConfig } from "./SoundConfig";


const {ccclass, property} = cc._decorator;

@ccclass
export default class FillArea extends cc.Component {
    @property(cc.Integer)
    public index: number = 0;
    onLoad() {
        ListenerManager.on(EventType.DRAG_OPTION, this.onDragOption, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.DRAG_OPTION, this.onDragOption, this);
    }
    
    private onDragOption(pos: cc.Vec2) {
        if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            if (SyncDataManager.getSyncData().customSyncData.gameType == 4){
                this.node.scale = 0.8;
            } else {
                this.node.scale = 1.1;
            }
        } else {
            if (SyncDataManager.getSyncData().customSyncData.gameType == 4){
                this.node.scale = 0.7;
            } else {
                this.node.scale = 1;
            }
        }
    }

    public fill(item: cc.Node) {
        if (!item) return;
        if (SyncDataManager.getSyncData().customSyncData.gameType == 4){
            this.node.scale = 0.7;
        } else {
            this.node.scale = 1;
        }
        item.parent = this.node;        
        item.position = cc.v3(5, 95);
        cc.tween(item).to(0.2, {position: cc.v3(5, 65)}, { easing: 'elasticOut' }).start();
        SoundManager.playEffect(SoundConfig.soudlist["种植"], false, false, false);
    }
}
