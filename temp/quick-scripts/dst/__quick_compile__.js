
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/CustomSyncData":1,"./assets/frame/scripts/Data/FrameMsgType":3,"./assets/game/scripts/SkeletonExt":4,"./assets/game/scripts/Data/ConstValue":5,"./assets/frame/scripts/Manager/ListenerManager":12,"./assets/frame/scripts/SDK/GameMsg":16,"./assets/frame/scripts/UI/AdaptiveScreen":18,"./assets/frame/scripts/UI/BindNode":19,"./assets/frame/scripts/UI/Item/Tip":23,"./assets/frame/scripts/Utils/MathUtils":31,"./assets/frame/scripts/Utils/HitTest":36,"./assets/frame/scripts/Utils/Tools":37,"./assets/frame/scripts/Utils/BoundingBoxHelp":38,"./assets/frame/scripts/Data/FrameSyncData":39,"./assets/frame/scripts/Data/FrameConstValue":42,"./assets/game/scripts/Manager/GameManager":45,"./assets/game/scripts/Data/EventType":47,"./assets/game/scripts/Manager/EditorManager":48,"./assets/game/scripts/UI/Item/SoundConfig":52,"./assets/frame/scripts/UI/Item/TitleNode":2,"./assets/frame/scripts/Manager/SyncDataManager":6,"./assets/frame/scripts/SDK/T2M":7,"./assets/frame/scripts/Http/NetWork":8,"./assets/frame/scripts/Utils/AudioPlayExtension":10,"./assets/frame/scripts/Manager/UIManager":13,"./assets/frame/scripts/Manager/ReportManager":11,"./assets/frame/scripts/UI/BaseUI":14,"./assets/frame/scripts/Manager/SoundManager":15,"./assets/frame/scripts/UI/BaseFrameUI":17,"./assets/frame/scripts/UI/GameMain":22,"./assets/frame/scripts/UI/Panel/BaseGamePanel":9,"./assets/frame/scripts/Utils/UIHelp":40,"./assets/frame/scripts/Utils/BoundingBoxDemo":41,"./assets/frame/scripts/UI/Item/MaskRecover":20,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":21,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":24,"./assets/frame/scripts/UI/Item/replayBtn":26,"./assets/frame/scripts/UI/Item/MaskGlobal":25,"./assets/frame/scripts/UI/Panel/LoadingUI":27,"./assets/frame/scripts/UI/Panel/ErrorPanel":28,"./assets/frame/scripts/UI/Panel/StarCount":29,"./assets/frame/scripts/UI/Panel/TipUI":30,"./assets/frame/scripts/UI/Panel/OverTips":32,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":33,"./assets/frame/scripts/UI/Panel/SubmissionPanel":34,"./assets/frame/scripts/UI/Panel/AffirmTips":35,"./assets/game/scripts/UI/Item/FillArea":43,"./assets/game/scripts/UI/Components/ButtonSync":44,"./assets/game/scripts/UI/panel/TeacherPanel":46,"./assets/game/scripts/UI/Item/SmallTable":49,"./assets/game/scripts/UI/Item/GameLayer":50,"./assets/game/scripts/UI/Components/DragSync":53,"./assets/game/scripts/UI/Item/BigTable":51,"./assets/game/scripts/UI/Item/OptionItem":54,"./assets/game/scripts/UI/panel/GamePanel":55},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../../Manager/ListenerManager":12,"../../Data/FrameMsgType":3},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":39,"../../../game/scripts/Data/CustomSyncData":1,"../../../frame/scripts/Manager/ReportManager":11},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../Http/NetWork":8,"../Data/FrameMsgType":3,"../Manager/ListenerManager":12,"../Manager/SyncDataManager":6,"../Utils/UIHelp":40,"./GameMsg":16},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../../game/scripts/Data/ConstValue":5,"../Manager/UIManager":13,"../SDK/GameMsg":16,"../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":5,"../../Data/FrameMsgType":3,"../../Http/NetWork":8,"../../../../game/scripts/Manager/EditorManager":48,"../../Manager/ListenerManager":12,"../../Manager/UIManager":13,"../../Manager/SyncDataManager":6,"../../Manager/SoundManager":15,"../../Manager/ReportManager":11,"../../SDK/GameMsg":16,"../../Utils/UIHelp":40,"../../SDK/T2M":7,"../BaseUI":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"./../Manager/SoundManager":15},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../../../game/scripts/Data/ConstValue":5,"../SDK/GameMsg":16,"../../../game/scripts/Manager/EditorManager":48},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../UI/BaseUI":14},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../Data/FrameConstValue":42,"../Manager/ListenerManager":12,"./BindNode":19},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../Data/FrameConstValue":42,"../Http/NetWork":8,"../Data/FrameMsgType":3,"../SDK/GameMsg":16,"./UIManager":13,"./ListenerManager":12},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../Data/FrameConstValue":42,"./BaseUI":14},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../Manager/ListenerManager":12,"../../Data/FrameMsgType":3,"../BindNode":19,"../../Manager/UIManager":13},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"../../Data/FrameMsgType":3,"../BindNode":19,"../../Manager/ListenerManager":12},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":48,"../Data/FrameMsgType":3,"../Http/NetWork":8,"../Manager/ListenerManager":12,"../Manager/ReportManager":11,"../Manager/SoundManager":15,"../Manager/SyncDataManager":6,"../SDK/T2M":7,"../Utils/UIHelp":40,"../SDK/GameMsg":16,"../Manager/UIManager":13},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":5,"../../Http/NetWork":8,"../../Utils/UIHelp":40,"../../../../game/scripts/Manager/EditorManager":48,"../BaseUI":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"../../Data/FrameMsgType":3,"../../Manager/ListenerManager":12,"../../Manager/UIManager":13,"../../Utils/UIHelp":40,"../BindNode":19},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../Data/FrameMsgType":3,"../../SDK/T2M":7},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":5,"../../../../game/scripts/UI/panel/GamePanel":55,"../../../../game/scripts/UI/panel/TeacherPanel":46,"../../Manager/SoundManager":15,"../../Manager/UIManager":13,"../../Http/NetWork":8,"../../SDK/GameMsg":16,"../BaseFrameUI":17},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../../Utils/UIHelp":40,"./../../Manager/SoundManager":15,"./../../SDK/GameMsg":16,"./../BaseFrameUI":17},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":48,"./../../Manager/SoundManager":15,"../BaseFrameUI":17,"../../Utils/Tools":37,"../../Utils/UIHelp":40,"../../../../game/scripts/Data/ConstValue":5,"../../Manager/ReportManager":11},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../BaseFrameUI":17,"../Item/Tip":23},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"./../../Manager/SoundManager":15,"../../Utils/UIHelp":40,"../../Manager/UIManager":13,"../BaseFrameUI":17,"../../Utils/Tools":37,"../../SDK/T2M":7,"../../Data/FrameMsgType":3,"../../../../game/scripts/Data/ConstValue":5},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"./../../Manager/ListenerManager":12,"../BaseFrameUI":17,"../../Manager/SoundManager":15,"../../Utils/UIHelp":40,"../../SDK/T2M":7,"../../Manager/ReportManager":11,"../../Data/FrameMsgType":3},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":5,"../../Utils/UIHelp":40,"../../Http/NetWork":8,"../../../../game/scripts/Manager/EditorManager":48,"../BaseFrameUI":17},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../../Data/FrameMsgType":3,"../../SDK/T2M":7,"../BaseFrameUI":17,"../../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{"../Data/FrameMsgType":3,"../../../game/scripts/UI/panel/TeacherPanel":46,"../../../game/scripts/UI/panel/GamePanel":55,"../Manager/ListenerManager":12,"../Manager/UIManager":13,"../UI/Panel/AffirmTips":35,"../UI/Panel/ErrorPanel":28,"../UI/Panel/OverTips":32,"../UI/Panel/StarCount":29,"../UI/Panel/TipUI":30,"../UI/Panel/SubmissionPanel":34,"../UI/Panel/UploadAndReturnPanel":33},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{"./BoundingBoxHelp":38},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Manager/SoundManager":15,"../../../../frame/scripts/Manager/SyncDataManager":6,"../../../../frame/scripts/Utils/HitTest":36,"../../Data/EventType":47,"./SoundConfig":52},"path":"preview-scripts/assets/game/scripts/UI/Item/FillArea.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Data/FrameMsgType":3,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":24,"../../../../frame/scripts/Utils/UIHelp":40,"../../../../frame/scripts/Manager/UIManager":13,"../../Manager/EditorManager":48,"./GamePanel":55},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"../../../../frame/scripts/Manager/SyncDataManager":6},"path":"preview-scripts/assets/game/scripts/UI/Item/SmallTable.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":15,"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Utils/Tools":37,"./BigTable":51,"./FillArea":43,"../../../../frame/scripts/Manager/SyncDataManager":6,"../../Data/EventType":47,"./OptionItem":54,"./SmallTable":49,"./SoundConfig":52},"path":"preview-scripts/assets/game/scripts/UI/Item/GameLayer.js"},{"deps":{"../../../../frame/scripts/Manager/SyncDataManager":6,"../../../../frame/scripts/Manager/SoundManager":15,"../../../../frame/scripts/Manager/ListenerManager":12,"./SoundConfig":52,"../../Data/EventType":47},"path":"preview-scripts/assets/game/scripts/UI/Item/BigTable.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":15,"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Utils/HitTest":36,"./SoundConfig":52,"../../Data/EventType":47,"./FillArea":43},"path":"preview-scripts/assets/game/scripts/UI/Item/OptionItem.js"},{"deps":{"../../../../frame/scripts/Manager/SyncDataManager":6,"../../../../frame/scripts/UI/Panel/BaseGamePanel":9,"../../../../frame/scripts/Manager/ListenerManager":12,"../../Data/EventType":47},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"}];
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
    