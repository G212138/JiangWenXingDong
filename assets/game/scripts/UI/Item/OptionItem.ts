import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { EventType } from "../../Data/EventType";
import FillArea from "./FillArea";
import { SoundConfig } from "./SoundConfig";


const {ccclass, property} = cc._decorator;

@ccclass
export default class OptionItem extends cc.Component {
    @property(cc.Node)
    private optionParent: cc.Node = null;
    @property(cc.Node)
    private fillArea: cc.Node = null;

    private onDragStart(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager.dispatch(EventType.DRAG_OPTION_START, pos);
    }

    private onDragMove(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager.dispatch(EventType.DRAG_OPTION, pos);
    }

    private onDragEnd(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        let isInRect: boolean = false;
        this.fillArea.children.forEach((area) => {
            if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), area) && area.getComponent(FillArea)) {
                isInRect = true;
                area.getComponent(FillArea).fill(this.node);
            }
        });

        if (!isInRect) {
            SoundManager.playEffect(SoundConfig.soudlist["错误反馈"], false, false, false);
            this.reset();
        }
        ListenerManager.dispatch(EventType.DRAG_OPTION_END);
    }

    public reset() {
        this.node.parent = this.optionParent;
        this.node.position = cc.v3(0, 0);
    }
}
