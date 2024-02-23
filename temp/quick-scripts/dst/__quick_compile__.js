
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/CustomSyncData":2,"./assets/frame/scripts/Data/FrameMsgType":3,"./assets/game/scripts/SkeletonExt":4,"./assets/frame/scripts/Manager/ListenerManager":5,"./assets/frame/scripts/SDK/GameMsg":7,"./assets/frame/scripts/Data/FrameSyncData":10,"./assets/frame/scripts/Data/FrameConstValue":13,"./assets/frame/scripts/UI/BindNode":14,"./assets/frame/scripts/UI/AdaptiveScreen":19,"./assets/frame/scripts/UI/Item/Tip":20,"./assets/frame/scripts/Utils/BoundingBoxHelp":34,"./assets/frame/scripts/Utils/MathUtils":35,"./assets/frame/scripts/Utils/Tools":36,"./assets/frame/scripts/Utils/HitTest":40,"./assets/game/scripts/Manager/GameManager":43,"./assets/game/scripts/Data/EventType":46,"./assets/game/scripts/Manager/EditorManager":47,"./assets/game/scripts/Data/ConstValue":48,"./assets/game/scripts/UI/Item/SoundConfig":51,"./assets/frame/scripts/UI/Item/MaskRecover":1,"./assets/frame/scripts/Http/NetWork":6,"./assets/frame/scripts/Utils/BoundingBoxDemo":9,"./assets/frame/scripts/Manager/UIManager":11,"./assets/frame/scripts/Manager/SoundManager":12,"./assets/frame/scripts/UI/BaseUI":15,"./assets/frame/scripts/UI/BaseFrameUI":16,"./assets/frame/scripts/UI/GameMain":17,"./assets/frame/scripts/Utils/AudioPlayExtension":30,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":8,"./assets/frame/scripts/Manager/ReportManager":38,"./assets/frame/scripts/Manager/SyncDataManager":37,"./assets/frame/scripts/SDK/T2M":39,"./assets/frame/scripts/Utils/UIHelp":41,"./assets/frame/scripts/UI/Item/MaskGlobal":18,"./assets/frame/scripts/UI/Item/replayBtn":22,"./assets/frame/scripts/UI/Item/TitleNode":21,"./assets/frame/scripts/UI/Panel/BaseGamePanel":23,"./assets/frame/scripts/UI/Panel/ErrorPanel":24,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":25,"./assets/frame/scripts/UI/Panel/LoadingUI":26,"./assets/frame/scripts/UI/Panel/OverTips":27,"./assets/frame/scripts/UI/Panel/SubmissionPanel":28,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":29,"./assets/frame/scripts/UI/Panel/StarCount":31,"./assets/frame/scripts/UI/Panel/AffirmTips":32,"./assets/frame/scripts/UI/Panel/TipUI":33,"./assets/game/scripts/UI/Item/Level_2":42,"./assets/game/scripts/UI/Components/ButtonSync":44,"./assets/game/scripts/UI/panel/TeacherPanel":45,"./assets/game/scripts/UI/Item/Level_4":49,"./assets/game/scripts/UI/Item/Level_1":50,"./assets/game/scripts/UI/Item/FillArea":53,"./assets/game/scripts/UI/Item/OptionItem":52,"./assets/game/scripts/UI/Components/DragSync":54,"./assets/game/scripts/UI/Item/Level_3":55,"./assets/game/scripts/UI/panel/GamePanel":56},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Data/FrameMsgType":3,"../BindNode":14,"../../Manager/ListenerManager":5,"../../Manager/UIManager":11},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../SDK/GameMsg":7,"../../../game/scripts/Data/ConstValue":48,"../Manager/UIManager":11,"../Utils/UIHelp":41},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":48,"../../../../game/scripts/Manager/EditorManager":47,"../../Http/NetWork":6,"../../Utils/UIHelp":41,"../BaseUI":15},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"./BoundingBoxHelp":34},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{"../UI/BaseUI":15},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../Data/FrameMsgType":3,"../Data/FrameConstValue":13,"../SDK/GameMsg":7,"../Http/NetWork":6,"./ListenerManager":5,"./UIManager":11},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../Data/FrameConstValue":13,"./BindNode":14,"../Manager/ListenerManager":5},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../Data/FrameConstValue":13,"./BaseUI":15},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../Data/FrameMsgType":3,"../../../game/scripts/Manager/EditorManager":47,"../Manager/ReportManager":38,"../Http/NetWork":6,"../SDK/GameMsg":7,"../Manager/ListenerManager":5,"../Manager/SoundManager":12,"../Manager/UIManager":11,"../Manager/SyncDataManager":37,"../SDK/T2M":39,"../Utils/UIHelp":41},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../Manager/ListenerManager":5,"../../Manager/UIManager":11,"../../Data/FrameMsgType":3,"../BindNode":14,"../../Utils/UIHelp":41},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../Manager/ListenerManager":5,"../../Data/FrameMsgType":3},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../../SDK/T2M":39,"../../Data/FrameMsgType":3},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../Data/FrameMsgType":3,"../../../../game/scripts/Data/ConstValue":48,"../../../../game/scripts/Manager/EditorManager":47,"../../Http/NetWork":6,"../../Manager/ListenerManager":5,"../../Manager/SyncDataManager":37,"../../Manager/SoundManager":12,"../BaseUI":15,"../../Manager/ReportManager":38,"../../Manager/UIManager":11,"../../Utils/UIHelp":41,"../../SDK/GameMsg":7,"../../SDK/T2M":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"./../../Manager/SoundManager":12,"./../../SDK/GameMsg":7,"../../Utils/UIHelp":41,"./../BaseFrameUI":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../BindNode":14,"../../Manager/ListenerManager":5,"../../Data/FrameMsgType":3},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":48,"../../../../game/scripts/UI/panel/TeacherPanel":45,"../../../../game/scripts/UI/panel/GamePanel":56,"../../Manager/UIManager":11,"../../Http/NetWork":6,"../../Manager/SoundManager":12,"../../SDK/GameMsg":7,"../BaseFrameUI":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../../Manager/UIManager":11,"../BaseFrameUI":16,"../../Utils/Tools":36,"./../../Manager/SoundManager":12,"../../Utils/UIHelp":41,"../../SDK/T2M":39,"../../Data/FrameMsgType":3,"../../../../game/scripts/Data/ConstValue":48},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../BaseFrameUI":16,"../../Http/NetWork":6,"../../../../game/scripts/Manager/EditorManager":47,"../../Utils/UIHelp":41,"../../../../game/scripts/Data/ConstValue":48},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../BaseFrameUI":16,"./../../Manager/ListenerManager":5,"../../Data/FrameMsgType":3,"../../Manager/ReportManager":38,"../../Utils/UIHelp":41,"../../Manager/SoundManager":12,"../../SDK/T2M":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"./../Manager/SoundManager":12},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"./../../Manager/SoundManager":12,"../../Utils/Tools":36,"../../Manager/ReportManager":38,"../../Utils/UIHelp":41,"../BaseFrameUI":16,"../../../../game/scripts/Data/ConstValue":48,"../../../../game/scripts/Manager/EditorManager":47},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../../Data/FrameMsgType":3,"../../Utils/UIHelp":41,"../BaseFrameUI":16,"../../SDK/T2M":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"../BaseFrameUI":16,"../Item/Tip":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":10,"../../../frame/scripts/Manager/ReportManager":38,"../../../game/scripts/Data/CustomSyncData":2},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../SDK/GameMsg":7,"../../../game/scripts/Data/ConstValue":48,"../../../game/scripts/Manager/EditorManager":47},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../Data/FrameMsgType":3,"../Manager/ListenerManager":5,"../Utils/UIHelp":41,"../Http/NetWork":6,"../Manager/SyncDataManager":37,"./GameMsg":7},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":56,"../Data/FrameMsgType":3,"../Manager/UIManager":11,"../UI/Panel/ErrorPanel":24,"../../../game/scripts/UI/panel/TeacherPanel":45,"../Manager/ListenerManager":5,"../UI/Panel/AffirmTips":32,"../UI/Panel/OverTips":27,"../UI/Panel/TipUI":33,"../UI/Panel/StarCount":31,"../UI/Panel/SubmissionPanel":28,"../UI/Panel/UploadAndReturnPanel":29},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":12,"../../../../frame/scripts/Manager/ListenerManager":5,"./FillArea":53,"../../Manager/EditorManager":47,"../../../../frame/scripts/Manager/SyncDataManager":37,"../../Data/EventType":46,"./OptionItem":52,"./SoundConfig":51},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_2.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":39},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/Data/FrameMsgType":3,"../../../../frame/scripts/Manager/UIManager":11,"../../../../frame/scripts/Utils/UIHelp":41,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":8,"../../Manager/EditorManager":47,"./GamePanel":56},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":12,"../../../../frame/scripts/Manager/ListenerManager":5,"../../Data/EventType":46,"../../../../frame/scripts/Manager/SyncDataManager":37,"./FillArea":53,"../../Manager/EditorManager":47,"./SoundConfig":51,"./OptionItem":52},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_4.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/Manager/SoundManager":12,"../../../../frame/scripts/Manager/SyncDataManager":37,"./SoundConfig":51,"../../Data/EventType":46,"./OptionItem":52,"./FillArea":53,"../../Manager/EditorManager":47},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_1.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/Utils/HitTest":40,"../../Manager/EditorManager":47,"../../Data/EventType":46,"./FillArea":53},"path":"preview-scripts/assets/game/scripts/UI/Item/OptionItem.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/Manager/SoundManager":12,"../../Manager/EditorManager":47,"../../../../frame/scripts/Utils/HitTest":40,"./SoundConfig":51,"../../Data/EventType":46},"path":"preview-scripts/assets/game/scripts/UI/Item/FillArea.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":39},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/Manager/SoundManager":12,"../../../../frame/scripts/Manager/SyncDataManager":37,"./FillArea":53,"../../Data/EventType":46,"../../Manager/EditorManager":47,"./SoundConfig":51,"./OptionItem":52},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_3.js"},{"deps":{"../../Manager/EditorManager":47,"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/Manager/SyncDataManager":37,"../../Data/EventType":46,"../../../../frame/scripts/UI/Panel/BaseGamePanel":23},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    