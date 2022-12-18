import{Helpers,isMobileBrowser,Vector}from"../helpers.js";import{DEFAULT_FOV_NORMAL}from"../render.js";import{UIApp}from"./app.js";import{TexturePackManager}from"./texture_pack-manager.js";import{SkinManager}from"./skin-manager.js";import{GameClass}from"../game.js";import{Player}from"../player.js";import{Lang}from"../lang.js";import{KEY,MOUSE}from"../constant.js";import{BgEffect}from"./bg_effect.js";import registerTextFilter from"./angular/textfilter.js";function isSupported(){if(!("WebGL2RenderingContext"in self))return console.error("Browser not supported:","Webgl2 context is required"),!1;const e=document.createElement("canvas");try{const t=e.getContext("webgl2",{stencil:!0,failIfMajorPerformanceCaveat:!0});if(!t)return!1;t.getExtension("WEBGL_lose_context").loseContext()}catch(e){return console.error("Browser not supported:",e.message),!1}e.width=e.height=0;const t=navigator.userAgent.indexOf("Mozilla")>-1,o=navigator.userAgent.indexOf("Safari")>-1,n=navigator.userAgent.indexOf("Chrome")>-1||self.chrome;return o||n||t}globalThis.MOUSE=MOUSE,globalThis.KEY=KEY,globalThis.randomUUID=()=>crypto.randomUUID();const app=angular.module("gameApp",[]);registerTextFilter(app);let injectParams=["$scope","$timeout"],gameCtrl=async function(e,t){await Lang.init(),e.Lang=Lang,e.current_lang=null;for(let t of Lang.list)t.active&&(e.current_lang=t);e.changeLang=e=>{Lang.change(e),location.reload()},globalThis.Qubatch=new GameClass,e.App=Qubatch.App=new UIApp,e.login_tab="login",Qubatch.onControlsEnabledChanged=e=>{const t=document.querySelector("body").classList;e?t.add("controls_enabled"):t.remove("controls_enabled")},Qubatch.onStarted=()=>{document.querySelector("body").classList.add("started")},Qubatch.exit=()=>{location="/"},e.links={discord:"https://discord.gg/QQw2zadu3T",youtube:"https://www.youtube.com/channel/UCAcOZMpzYE8rk62giMgTwdw/videos"},e.App.onLogin=e=>{},e.App.onLogout=o=>{t((function(){e.current_window.show("hello"),location.reload()}))},e.App.onError=e=>{e=Lang[e],vt.error(e)},e.shareGame={visible:!1,url:"",toggle:function(){this.url=location.protocol+"//"+location.host+"/worlds/"+Qubatch.world.info.guid,this.visible=!this.visible},copy:function(){Clipboard.copy(this.url),vt.success(Lang.copied)}},e.isMobileBrowser=isMobileBrowser,e.isJoystickControl=()=>isMobileBrowser()||e.settings.form.forced_joystick_control,e.sunDir={value:new Vector(1.1493,1.0293,.6293),apply:function(){"undefined"!=typeof Qubatch&&(Qubatch.render.sunDir=[this.value.x,this.value.y,this.value.z])},getValue:function(){return[this.value.x,this.value.y,this.value.z].join(", ")}},e.isSupportedBrowser=isSupported(),e.current_window={id:"main",show:function(t){e.isSupportedBrowser||(t="not_supported_browser"),this.id=t,e.onShow[t]&&e.onShow[t]()},toggle(e){this.id!=e?this.show(e):this.show("main")},getTitle:function(){switch(this.id){case"hello":return"MadCraft";case"main":return"Welcome!";default:return this.id}}},e.login={logged:!1,loading:!1,form:{username:"",password:""},submit:function(){if(!this.form.username)return!1;if(!this.form.password)return!1;var o=this;o.loading=!0,e.App.Login(this.form,(n=>{t((()=>{o.logged=!0,o.reset(),o.onSuccess(n),e.current_window.show("main"),o.loading=!1}))}))},autoLogin:function(t){this.form.username=t.username,this.form.password=t.password,e.current_window.show("login"),this.submit()},reset:function(){this.form.username="",this.form.password=""},isValid:function(){return this.form.username&&this.form.password},init:function(){let t=e.App.getSession();if(this.logged=!!t,!this.logged)return e.current_window.show("hello"),e.loadingComplete(),!1;this.onSuccess(t)},onSuccess(t){e.mygames.load()}},e.registration={loading:!1,form:{username:"",password:""},submit:function(){if(!this.form.username)return!1;if(!this.form.password)return!1;var o=this;o.loading=!0,e.App.Registration(this.form,(n=>{t((()=>{e.login.autoLogin(o.form),o.reset()}))}))},reset:function(){this.form.username="",this.form.password=""},isValid:function(){return this.form.username&&this.form.password}},e.settings={form:{fov:DEFAULT_FOV_NORMAL,texture_pack:"base",render_distance:4,use_light:1,beautiful_leaves:!0,mipmap:!1,mobs_draw_debug_grid:!1,chunks_draw_debug_grid:!1},lightMode:{list:[{id:0,name:"No"},{id:1,name:"Smooth"},{id:2,name:"RTX"}],get current(){return this.list[e.settings.form.use_light]},set current(t){e.settings.form.use_light=t.id}},save:function(){localStorage.setItem("settings",JSON.stringify(this.form)),e.current_window.show("main")},toggle:function(){return e.current_window.toggle("settings"),!1},load:function(){const e=localStorage.getItem("settings");e&&(this.form=Object.assign(this.form,JSON.parse(e))),"render_distance"in this.form||(this.form.render_distance=4),"use_light"in this.form&&(this.form.use_light=parseInt(0|this.form.use_light)),"forced_joystick_control"in this.form||(this.form.forced_joystick_control=!1),"mouse_sensitivity"in this.form||(this.form.mouse_sensitivity=100),this.form.fov=this.form.fov||DEFAULT_FOV_NORMAL},updateSlider:function(e){const t=document.getElementById(e),o=parseInt(t.getAttribute("step")),n=(t.value-t.min)/(t.max-t.min)*100;t.style.backgroundImage="linear-gradient(to right, #FFAB00 "+n+"%, #3F51B5 "+n+"%)";const r=document.getElementById(e+"_ticks").children;Array.prototype.slice.call(r).map((function(e,n){var r=n*o;e.classList.remove("active"),e.classList.remove("passed"),r<=Math.floor(t.value)&&(e.classList.add("passed"),r==Math.round(t.value)&&e.classList.add("active"))}))}},e.boot={loading:!1,latest_save:!1,init:function(){}},e.DeleteWorld={world_guid:"",world_title:"",showModal:function(t){e.modalWindow.show("modal-delete-world"),this.world_guid=t;for(let o of e.mygames.list)if(o.guid==t){this.world_title=o.title;break}},delete:function(){var o=this.world_guid;window.event.preventDefault(),window.event.stopPropagation();let n=null;for(let t of e.mygames.list)if(t.guid==o){n=t;break}if(!n)return Qubatch.App.showError("error_world_not_found",4e3);n.hidden=!0,e.App.DeleteWorld({world_guid:o},(()=>{vt.success(Lang.success_world_deleted)}),(e=>{t((()=>{n.hidden=!1})),vt.error(e.message)})),e.modalWindow.hide("modal-delete-world")}},e.toggleMainMenu=function(){Qubatch.hud.wm.hasVisibleWindow()?Qubatch.hud.wm.closeAll():Qubatch.hud.frmMainMenu.show()},e.toggleFullscreen=function(){const e=document.getElementById("qubatch-canvas-container");document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)},e.StartWorld=function(o){window.event&&(window.event.preventDefault(),window.event.stopPropagation(),isMobileBrowser()&&e.toggleFullscreen()),console.log(`StartWorld: ${o}`);e.App.getSession()&&(e.current_window.show("world-loading"),Array.from(document.getElementsByTagName("header")).map((e=>e.remove())),document.getElementById("bg-canvas")?.remove(),document.getElementById("bg-circles_area")?.remove(),e.bg?.stop(),Qubatch.hud.draw(),t((async function(){const t=e.settings.form,n=("https:"==window.location.protocol?"wss:":"ws:")+"//"+location.hostname+(location.port?":"+location.port:"")+"/ws",r=await e.Qubatch.Start(n,o,t,(e=>{Qubatch.hud.draw(!0)}));r.info;const i=new Player(t);i.JoinToWorld(r,(()=>{Qubatch.Started(i)}))})))},e.loadingComplete=function(){document.getElementById("loading").classList.add("loading-complete")},e.mygames={list:[],shared_worlds:[],loading:!1,toMain:function(){location="/"},load:function(){if(!e.App.getSession())return o.loadingComplete();const o=this;o.loading=!0,e.App.MyWorlds({},(n=>{t((()=>{o.list=n;for(let e of n)e.game_mode_title=Lang[`gamemode_${e.game_mode}`];o.enterWorld.joinToWorldIfNeed(),o.loading=!1,e.loadingComplete()}))}))},save:function(){},add:function(e){this.list.push(e)},enterWorld:{windowMod:"off",worldInfo:null,getWorldGuid:function(){let e=window.location.pathname;return e&&e.startsWith("/worlds/")?e.substr(8):null},joinAfterApproving:function(){let o=this.getWorldGuid();e.App.JoinWorld({world_guid:this.worldInfo.guid},(()=>{t((()=>e.StartWorld(o)),(e=>this.handleNoWorldOrOtherError(e)))}))},joinToWorldIfNeed:function(){if("world-not-found"==this.windowMod)return;let t=this.getWorldGuid();if(t){for(let o of e.mygames.list)if(o.guid==t)return void e.StartWorld(t);if(this.worldInfo)return void this.showWorldInfo(this.worldInfo,"approve-join");e.App.GetWorldPublicInfo({worldGuid:t},(e=>this.showWorldInfo(e,"approve-join")),(e=>this.handleNoWorldOrOtherError(e)))}},showWorldInfo:function(t,o){this.worldInfo=t,this.windowMod=o,e.current_window.show("enter-world"),e.$apply()},handleNoWorldOrOtherError:function(t){"error_world_not_found"===t.message?(this.windowMod="world-not-found",e.current_window.show("enter-world"),e.$apply()):vt.error(message)},checkIsWorldUrl:function(){let t=this.getWorldGuid();t&&(e.App.isLogged()||e.App.GetWorldPublicInfo({worldGuid:t},(e=>this.showWorldInfo(e,"login")),(e=>this.handleNoWorldOrOtherError(e))))}}},e.newgame={loading:!1,form:{title:"",seed:"",generator:{id:null,options:null}},reset(){this.form.title="",this.form.seed=""},init(){e.App.Gamemodes({},(e=>{t((()=>{this.gamemodes.list=e;for(let e of this.gamemodes.list)e.title=Lang[`gamemode_${e.id}`]}))})),e.App.Generators({},(e=>{t((()=>{this.generators.list=e}))}))},gamemodes:{index:0,list:[],get current(){return this.list[this.index]},set current(e){for(let t in this.list){if(this.list[t].id==e.id){this.index=t;break}}},select(t){e.newgame.form.game_mode=t.id}},generators:{index:0,list:[],get current(){return this.list[this.index]},set current(e){for(let t in this.list){if(this.list[t].id==e.id){this.index=t;break}}},select(t){const o=e.newgame.form;o.generator.id=t.id;const n=this.current;"has_options"in n||(n.has_options=!!n.options),n.options_form=o.generator.options=n.options_form||{};const r=n.options;if(r)for(let e in r){const t=r[e];let n=null;switch(t.type){case"checkbox":n=t.default_value;break;case"select":n=t.default_value?t.default_value+"":t.options[0].value;break;default:console.error("Invalid generator option type")}o.generator.options[e]=n}e.initSelects("#world-generator-options .slim-select")}},submit(){var o=this;o.loading=!0;let n={...o.form};n.seed=e.App.GenerateSeed(n.seed),e.App.CreateWorld(n,(n=>{t((()=>{o.reset(),e.mygames.add(n),e.StartWorld(n.guid),o.loading=!1}))}))},open(){this.generators.select(this.generators.list[0]),this.gamemodes.select(this.gamemodes.list[0]),e.current_window.show("newgame"),this.form.seed=e.App.GenerateSeed(Helpers.getRandomInt(1e6,4e9))},close(){e.current_window.show("main")}},e.initSelects=function(e){t((()=>{document.querySelectorAll(e??".slim-select").forEach((e=>{new SlimSelect({select:e,showSearch:!1})}))}),0)},e.modalWindow={show:function(e){document.getElementById(e).style.visibility="visible",document.body.style.overflow="hidden"},hide:function(e){document.getElementById(e).style.visibility="hidden",document.body.style.overflow="unset"}},e.settings.load(),e.Qubatch=globalThis.Qubatch,e.skin=new SkinManager(e,t),e.texture_pack=new TexturePackManager(e),e.onShow={skin:()=>{e.skin.onShow()}},e.newgame.init(),e.texture_pack.init().then((()=>{t((()=>{e.boot.init(),e.login.init(),e.skin.init(),e.mygames.enterWorld.checkIsWorldUrl()}))})),e.bg=new BgEffect,e.current_window.show("main")};gameCtrl.$inject=injectParams,app.controller("gameCtrl",gameCtrl);let myEnterInjectParams=["$q"],directive=function(e){return function(e,t,o){t.bind("keydown keypress",(function(t){13===t.which&&(t.shiftKey||(e.$apply((function(){e.$eval(o.myEnter)})),t.preventDefault()))}))}};directive.$inject=myEnterInjectParams,app.directive("myEnter",directive),app.directive("ngUploadChange",(function(){return{scope:{ngUploadChange:"&"},link:function(e,t,o){t.on("change",(function(t){e.$apply((function(){e.ngUploadChange({$event:t})}))})),e.$on("$destroy",(function(){t.off()}))}}}));