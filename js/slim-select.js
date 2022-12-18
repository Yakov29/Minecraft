!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SlimSelect=t():e.SlimSelect=t()}(window,(function(){return i={},e.m=t=[function(e,t,i){"use strict";function n(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}t.__esModule=!0,t.kebabCase=t.highlight=t.isValueInArrayOfObjects=t.debounce=t.putContent=t.ensureElementInView=t.hasClassInTree=void 0,t.hasClassInTree=function(e,t){function i(e,t){return t&&e&&e.classList&&e.classList.contains(t)?e:null}return i(e,t)||function e(t,n){return t&&t!==document?i(t,n)?t:e(t.parentNode,n):null}(e,t)},t.ensureElementInView=function(e,t){var i=e.scrollTop+e.offsetTop,n=i+e.clientHeight,s=t.offsetTop;t=s+t.clientHeight;s<i?e.scrollTop-=i-s:n<t&&(e.scrollTop+=t-n)},t.putContent=function(e,t,i){var n=e.offsetHeight,s=e.getBoundingClientRect();e=i?s.top:s.top-n,n=i?s.bottom:s.bottom+n;return e<=0?"below":n>=window.innerHeight?"above":i?t:"below"},t.debounce=function(e,t,i){var n;return void 0===t&&(t=100),void 0===i&&(i=!1),function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var o=self,l=i&&!n;clearTimeout(n),n=setTimeout((function(){n=null,i||e.apply(o,s)}),t),l&&e.apply(o,s)}},t.isValueInArrayOfObjects=function(e,t,i){if(!Array.isArray(e))return e[t]===i;for(var n=0,s=e;n<s.length;n++){var a=s[n];if(a&&a[t]&&a[t]===i)return!0}return!1},t.highlight=function(e,t,i){var n=e,s=new RegExp("("+t.trim()+")(?![^<]*>[^<>]*</)","i");if(!e.match(s))return e;var a=e.match(s).index;t=a+e.match(s)[0].toString().length,t=e.substring(a,t);return n.replace(s,'<mark class="'.concat(i,'">').concat(t,"</mark>"))},t.kebabCase=function(e){var t=e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,(function(e){return"-"+e.toLowerCase()}));return e[0]===e[0].toUpperCase()?t.substring(1):t},"function"!=typeof(t=window).CustomEvent&&(n.prototype=t.Event.prototype,t.CustomEvent=n)},function(e,t,i){"use strict";t.__esModule=!0,t.validateOption=t.validateData=t.Data=void 0;var n=(s.prototype.newOption=function(e){return{id:e.id||String(Math.floor(1e8*Math.random())),value:e.value||"",text:e.text||"",innerHTML:e.innerHTML||"",selected:e.selected||!1,display:void 0===e.display||e.display,disabled:e.disabled||!1,placeholder:e.placeholder||!1,class:e.class||void 0,data:e.data||{},mandatory:e.mandatory||!1}},s.prototype.add=function(e){this.data.push({id:String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,innerHTML:"",selected:!1,display:!0,disabled:!1,placeholder:!1,class:void 0,mandatory:e.mandatory,data:{}})},s.prototype.parseSelectData=function(){this.data=[];for(var e=0,t=this.main.select.element.childNodes;e<t.length;e++){var i=t[e];if("OPTGROUP"===i.nodeName){for(var n={label:i.label,options:[]},s=0,a=i.childNodes;s<a.length;s++){var o,l=a[s];"OPTION"===l.nodeName&&(o=this.pullOptionData(l),n.options.push(o),o.placeholder&&""!==o.text.trim()&&(this.main.config.placeholderText=o.text))}this.data.push(n)}else"OPTION"===i.nodeName&&(o=this.pullOptionData(i),this.data.push(o),o.placeholder&&""!==o.text.trim()&&(this.main.config.placeholderText=o.text))}},s.prototype.pullOptionData=function(e){return{id:!!e.dataset&&e.dataset.id||String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,innerHTML:e.innerHTML,selected:e.selected,disabled:e.disabled,placeholder:"true"===e.dataset.placeholder,class:e.className,style:e.style.cssText,data:e.dataset,mandatory:!!e.dataset&&"true"===e.dataset.mandatory}},s.prototype.setSelectedFromSelect=function(){if(this.main.config.isMultiple){for(var e=[],t=0,i=this.main.select.element.options;t<i.length;t++){var n=i[t];!n.selected||(n=this.getObjectFromData(n.value,"value"))&&n.id&&e.push(n.id)}this.setSelected(e,"id")}else{var s=this.main.select.element;-1!==s.selectedIndex&&(s=s.options[s.selectedIndex].value,this.setSelected(s,"value"))}},s.prototype.setSelected=function(e,t){void 0===t&&(t="id");for(var i=0,n=this.data;i<n.length;i++){var s=n[i];if(s.hasOwnProperty("label")){if(s.hasOwnProperty("options")){var a=s.options;if(a)for(var o=0,l=a;o<l.length;o++){var r=l[o];r.placeholder||(r.selected=this.shouldBeSelected(r,e,t))}}}else s.selected=this.shouldBeSelected(s,e,t)}},s.prototype.shouldBeSelected=function(e,t,i){if(void 0===i&&(i="id"),Array.isArray(t))for(var n=0,s=t;n<s.length;n++){var a=s[n];if(i in e&&String(e[i])===String(a))return!0}else if(i in e&&String(e[i])===String(t))return!0;return!1},s.prototype.getSelected=function(){for(var e={text:"",placeholder:this.main.config.placeholderText},t=[],i=0,n=this.data;i<n.length;i++){var s=n[i];if(s.hasOwnProperty("label")){if(s.hasOwnProperty("options")){var a=s.options;if(a)for(var o=0,l=a;o<l.length;o++){var r=l[o];r.selected&&(this.main.config.isMultiple?t.push(r):e=r)}}}else s.selected&&(this.main.config.isMultiple?t.push(s):e=s)}return this.main.config.isMultiple?t:e},s.prototype.addToSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){var i=[],n=this.getSelected();if(Array.isArray(n))for(var s=0,a=n;s<a.length;s++){var o=a[s];i.push(o[t])}i.push(e),this.setSelected(i,t)}},s.prototype.removeFromSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){for(var i=[],n=0,s=this.getSelected();n<s.length;n++){var a=s[n];String(a[t])!==String(e)&&i.push(a[t])}this.setSelected(i,t)}},s.prototype.onDataChange=function(){this.main.onChange&&this.isOnChangeEnabled&&this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())))},s.prototype.getObjectFromData=function(e,t){void 0===t&&(t="id");for(var i=0,n=this.data;i<n.length;i++){var s=n[i];if(t in s&&String(s[t])===String(e))return s;if(s.hasOwnProperty("options")&&s.options)for(var a=0,o=s.options;a<o.length;a++){var l=o[a];if(String(l[t])===String(e))return l}}return null},s.prototype.search=function(e){var t,i;""!==(this.searchValue=e).trim()?(t=this.main.config.searchFilter,i=this.data.slice(0),e=e.trim(),i=i.map((function(i){if(i.hasOwnProperty("options")){var n=i,s=[];if(0!==(s=n.options?n.options.filter((function(i){return t(i,e)})):s).length)return(n=Object.assign({},n)).options=s,n}return i.hasOwnProperty("text")&&t(i,e)?i:null})),this.filtered=i.filter((function(e){return e}))):this.filtered=null},s);function s(e){this.contentOpen=!1,this.contentPosition="below",this.isOnChangeEnabled=!0,this.main=e.main,this.searchValue="",this.data=[],this.filtered=null,this.parseSelectData(),this.setSelectedFromSelect()}function a(e){return void 0!==e.text||(console.error("Data object option must have at least have a text value. Check object: "+JSON.stringify(e)),!1)}t.Data=n,t.validateData=function(e){if(!e)return console.error("Data must be an array of objects"),!1;for(var t=0,i=0,n=e;i<n.length;i++){var s=n[i];if(s.hasOwnProperty("label")){if(s.hasOwnProperty("options")){var o=s.options;if(o)for(var l=0,r=o;l<r.length;l++)a(r[l])||t++}}else a(s)||t++}return 0===t},t.validateOption=a},function(e,t,i){"use strict";t.__esModule=!0;var n=i(3),s=i(4),a=i(5),o=i(1),l=i(0);r.prototype.validate=function(e){if(!(e="string"==typeof e.select?document.querySelector(e.select):e.select))throw new Error("Could not find select element");if("SELECT"!==e.tagName)throw new Error("Element isnt of type select");return e},r.prototype.selected=function(){if(this.config.isMultiple){for(var e=[],t=0,i=s=this.data.getSelected();t<i.length;t++){var n=i[t];e.push(n.value)}return e}var s;return(s=this.data.getSelected())?s.value:""},r.prototype.set=function(e,t,i,n){void 0===t&&(t="value"),void 0===i&&(i=!0),void 0===n&&(n=!0),this.config.isMultiple&&!Array.isArray(e)?this.data.addToSelected(e,t):this.data.setSelected(e,t),this.select.setValue(),this.data.onDataChange(),this.render(),(i=!(!this.config.hideSelectedOption||!this.config.isMultiple||this.data.getSelected().length!==this.data.data.length)||i)&&this.close()},r.prototype.setSelected=function(e,t,i,n){this.set(e,t=void 0===t?"value":t,i=void 0===i||i,n=void 0===n||n)},r.prototype.setData=function(e){if((0,o.validateData)(e)){for(var t=JSON.parse(JSON.stringify(e)),i=this.data.getSelected(),n=0;n<t.length;n++)t[n].value||t[n].placeholder||(t[n].value=t[n].text);if(this.config.isAjax&&i)if(this.config.isMultiple)for(var s=0,a=i.reverse();s<a.length;s++){var l=a[s];t.unshift(l)}else{for(t.unshift(i),n=0;n<t.length;n++)t[n].placeholder||t[n].value!==i.value||t[n].text!==i.text||t.splice(n,1);var r=!1;for(n=0;n<t.length;n++)t[n].placeholder&&(r=!0);r||t.unshift({text:"",placeholder:!0})}this.select.create(t),this.data.parseSelectData(),this.data.setSelectedFromSelect()}else console.error("Validation problem on: #"+this.select.element.id)},r.prototype.addData=function(e){(0,o.validateData)([e])?(this.data.add(this.data.newOption(e)),this.select.create(this.data.data),this.data.parseSelectData(),this.data.setSelectedFromSelect(),this.render()):console.error("Validation problem on: #"+this.select.element.id)},r.prototype.open=function(){var e,t=this;this.config.isEnabled&&(this.data.contentOpen||this.config.hideSelectedOption&&this.config.isMultiple&&this.data.getSelected().length===this.data.data.length||(this.beforeOpen&&this.beforeOpen(),this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.plus.classList.add("ss-cross"):this.slim.singleSelected&&(this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up")),this.slim[this.config.isMultiple?"multiSelected":"singleSelected"].container.classList.add("above"===this.data.contentPosition?this.config.openAbove:this.config.openBelow),this.config.addToBody&&(e=this.slim.container.getBoundingClientRect(),this.slim.content.style.top=e.top+e.height+window.scrollY+"px",this.slim.content.style.left=e.left+window.scrollX+"px",this.slim.content.style.width=e.width+"px"),this.slim.content.classList.add(this.config.open),"up"===this.config.showContent.toLowerCase()||"down"!==this.config.showContent.toLowerCase()&&"above"===(0,l.putContent)(this.slim.content,this.data.contentPosition,this.data.contentOpen)?this.moveContentAbove():this.moveContentBelow(),this.config.isMultiple||(e=this.data.getSelected())&&(e=e.id,(e=this.slim.list.querySelector('[data-id="'+e+'"]'))&&(0,l.ensureElementInView)(this.slim.list,e)),setTimeout((function(){t.data.contentOpen=!0,t.config.searchFocus&&t.slim.search.input.focus(),t.afterOpen&&t.afterOpen()}),this.config.timeoutDelay)))},r.prototype.close=function(){var e=this;this.data.contentOpen&&(this.beforeClose&&this.beforeClose(),this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.plus.classList.remove("ss-cross")):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up")),this.slim.content.classList.remove(this.config.open),this.data.contentOpen=!1,this.search(""),setTimeout((function(){e.slim.content.removeAttribute("style"),e.data.contentPosition="below",e.config.isMultiple&&e.slim.multiSelected?(e.slim.multiSelected.container.classList.remove(e.config.openAbove),e.slim.multiSelected.container.classList.remove(e.config.openBelow)):e.slim.singleSelected&&(e.slim.singleSelected.container.classList.remove(e.config.openAbove),e.slim.singleSelected.container.classList.remove(e.config.openBelow)),e.slim.search.input.blur(),e.afterClose&&e.afterClose()}),this.config.timeoutDelay))},r.prototype.moveContentAbove=function(){var e=0;this.config.isMultiple&&this.slim.multiSelected?e=this.slim.multiSelected.container.offsetHeight:this.slim.singleSelected&&(e=this.slim.singleSelected.container.offsetHeight);var t=e+this.slim.content.offsetHeight-1;this.slim.content.style.margin="-"+t+"px 0 0 0",this.slim.content.style.height=t-e+1+"px",this.slim.content.style.transformOrigin="center bottom",this.data.contentPosition="above",this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.container.classList.add(this.config.openAbove)):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.container.classList.add(this.config.openAbove))},r.prototype.moveContentBelow=function(){this.data.contentPosition="below",this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.add(this.config.openBelow)):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.add(this.config.openBelow))},r.prototype.enable=function(){this.config.isEnabled=!0,this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.container.classList.remove(this.config.disabled):this.slim.singleSelected&&this.slim.singleSelected.container.classList.remove(this.config.disabled),this.select.triggerMutationObserver=!1,this.select.element.disabled=!1,this.slim.search.input.disabled=!1,this.select.triggerMutationObserver=!0},r.prototype.disable=function(){this.config.isEnabled=!1,this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.container.classList.add(this.config.disabled):this.slim.singleSelected&&this.slim.singleSelected.container.classList.add(this.config.disabled),this.select.triggerMutationObserver=!1,this.select.element.disabled=!0,this.slim.search.input.disabled=!0,this.select.triggerMutationObserver=!0},r.prototype.search=function(e){var t;this.data.searchValue!==e&&(this.slim.search.input.value=e,this.config.isAjax?((t=this).config.isSearching=!0,this.render(),this.ajax&&this.ajax(e,(function(i){t.config.isSearching=!1,Array.isArray(i)?(i.unshift({text:"",placeholder:!0}),t.setData(i),t.data.search(e),t.render()):"string"==typeof i?t.slim.options(i):t.render()}))):(this.data.search(e),this.render()))},r.prototype.setSearchText=function(e){this.config.searchText=e},r.prototype.render=function(){this.config.isMultiple?this.slim.values():(this.slim.placeholder(),this.slim.deselect()),this.slim.options()},r.prototype.destroy=function(e){var t=(e=void 0===e?null:e)?document.querySelector("."+e+".ss-main"):this.slim.container,i=e?document.querySelector("[data-ssid=".concat(e,"]")):this.select.element;t&&i&&(document.removeEventListener("click",this.documentClick),"auto"===this.config.showContent&&window.removeEventListener("scroll",this.windowScroll,!1),i.style.display="",delete i.dataset.ssid,i.slim=null,t.parentElement&&t.parentElement.removeChild(t),!this.config.addToBody||(e=e?document.querySelector("."+e+".ss-content"):this.slim.content)&&document.body.removeChild(e))},i=r;function r(e){var t=this;this.ajax=null,this.addable=null,this.beforeOnChange=null,this.onChange=null,this.beforeOpen=null,this.afterOpen=null,this.beforeClose=null,this.afterClose=null,this.windowScroll=(0,l.debounce)((function(e){t.data.contentOpen&&("above"===(0,l.putContent)(t.slim.content,t.data.contentPosition,t.data.contentOpen)?t.moveContentAbove():t.moveContentBelow())})),this.documentClick=function(e){e.target&&!(0,l.hasClassInTree)(e.target,t.config.id)&&t.close()};var i=this.validate(e);i.dataset.ssid&&this.destroy(i.dataset.ssid),e.ajax&&(this.ajax=e.ajax),e.addable&&(this.addable=e.addable),this.config=new n.Config({select:i,isAjax:!!e.ajax,showSearch:e.showSearch,searchPlaceholder:e.searchPlaceholder,searchText:e.searchText,searchingText:e.searchingText,searchFocus:e.searchFocus,searchHighlight:e.searchHighlight,searchFilter:e.searchFilter,closeOnSelect:e.closeOnSelect,showContent:e.showContent,placeholderText:e.placeholder,allowDeselect:e.allowDeselect,allowDeselectOption:e.allowDeselectOption,hideSelectedOption:e.hideSelectedOption,deselectLabel:e.deselectLabel,isEnabled:e.isEnabled,valuesUseText:e.valuesUseText,showOptionTooltips:e.showOptionTooltips,selectByGroup:e.selectByGroup,limit:e.limit,timeoutDelay:e.timeoutDelay,addToBody:e.addToBody}),this.select=new s.Select({select:i,main:this}),this.data=new o.Data({main:this}),this.slim=new a.Slim({main:this}),this.select.element.parentNode&&this.select.element.parentNode.insertBefore(this.slim.container,this.select.element.nextSibling),e.data?this.setData(e.data):this.render(),document.addEventListener("click",this.documentClick),"auto"===this.config.showContent&&window.addEventListener("scroll",this.windowScroll,!1),e.beforeOnChange&&(this.beforeOnChange=e.beforeOnChange),e.onChange&&(this.onChange=e.onChange),e.beforeOpen&&(this.beforeOpen=e.beforeOpen),e.afterOpen&&(this.afterOpen=e.afterOpen),e.beforeClose&&(this.beforeClose=e.beforeClose),e.afterClose&&(this.afterClose=e.afterClose),this.config.isEnabled||this.disable()}t.default=i},function(e,t,i){"use strict";t.__esModule=!0,t.Config=void 0;var n=(s.prototype.searchFilter=function(e,t){return-1!==e.text.toLowerCase().indexOf(t.toLowerCase())},s);function s(e){this.id="",this.isMultiple=!1,this.isAjax=!1,this.isSearching=!1,this.showSearch=!0,this.searchFocus=!0,this.searchHighlight=!1,this.closeOnSelect=!0,this.showContent="auto",this.searchPlaceholder="Search",this.searchText="No Results",this.searchingText="Searching...",this.placeholderText="Select Value",this.allowDeselect=!1,this.allowDeselectOption=!1,this.hideSelectedOption=!1,this.deselectLabel="x",this.isEnabled=!0,this.valuesUseText=!1,this.showOptionTooltips=!1,this.selectByGroup=!1,this.limit=0,this.timeoutDelay=200,this.addToBody=!1,this.main="ss-main",this.singleSelected="ss-single-selected",this.arrow="ss-arrow",this.multiSelected="ss-multi-selected",this.add="ss-add",this.plus="ss-plus",this.values="ss-values",this.value="ss-value",this.valueText="ss-value-text",this.valueDelete="ss-value-delete",this.content="ss-content",this.open="ss-open",this.openAbove="ss-open-above",this.openBelow="ss-open-below",this.search="ss-search",this.searchHighlighter="ss-search-highlight",this.addable="ss-addable",this.list="ss-list",this.optgroup="ss-optgroup",this.optgroupLabel="ss-optgroup-label",this.optgroupLabelSelectable="ss-optgroup-label-selectable",this.option="ss-option",this.optionSelected="ss-option-selected",this.highlighted="ss-highlighted",this.disabled="ss-disabled",this.hide="ss-hide",this.id="ss-"+Math.floor(1e5*Math.random()),this.style=e.select.style.cssText,this.class=e.select.className.split(" "),this.isMultiple=e.select.multiple,this.isAjax=e.isAjax,this.showSearch=!1!==e.showSearch,this.searchFocus=!1!==e.searchFocus,this.searchHighlight=!0===e.searchHighlight,this.closeOnSelect=!1!==e.closeOnSelect,e.showContent&&(this.showContent=e.showContent),this.isEnabled=!1!==e.isEnabled,e.searchPlaceholder&&(this.searchPlaceholder=e.searchPlaceholder),e.searchText&&(this.searchText=e.searchText),e.searchingText&&(this.searchingText=e.searchingText),e.placeholderText&&(this.placeholderText=e.placeholderText),this.allowDeselect=!0===e.allowDeselect,this.allowDeselectOption=!0===e.allowDeselectOption,this.hideSelectedOption=!0===e.hideSelectedOption,e.deselectLabel&&(this.deselectLabel=e.deselectLabel),e.valuesUseText&&(this.valuesUseText=e.valuesUseText),e.showOptionTooltips&&(this.showOptionTooltips=e.showOptionTooltips),e.selectByGroup&&(this.selectByGroup=e.selectByGroup),e.limit&&(this.limit=e.limit),e.searchFilter&&(this.searchFilter=e.searchFilter),null!=e.timeoutDelay&&(this.timeoutDelay=e.timeoutDelay),this.addToBody=!0===e.addToBody}t.Config=n},function(e,t,i){"use strict";t.__esModule=!0,t.Select=void 0;var n=i(0);s.prototype.setValue=function(){if(this.main.data.getSelected()){if(this.main.config.isMultiple)for(var e=this.main.data.getSelected(),t=0,i=this.element.options;t<i.length;t++){var n=i[t];n.selected=!1;for(var s=0,a=e;s<a.length;s++)a[s].value===n.value&&(n.selected=!0)}else e=this.main.data.getSelected(),this.element.value=e?e.value:"";this.main.data.isOnChangeEnabled=!1,this.element.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.main.data.isOnChangeEnabled=!0}},s.prototype.addAttributes=function(){this.element.tabIndex=-1,this.element.style.display="none",this.element.dataset.ssid=this.main.config.id,this.element.setAttribute("aria-hidden","true")},s.prototype.addEventListeners=function(){var e=this;this.element.addEventListener("change",(function(t){e.main.data.setSelectedFromSelect(),e.main.render()}))},s.prototype.addMutationObserver=function(){var e=this;this.main.config.isAjax||(this.mutationObserver=new MutationObserver((function(t){e.triggerMutationObserver&&(e.main.data.parseSelectData(),e.main.data.setSelectedFromSelect(),e.main.render(),t.forEach((function(t){"class"===t.attributeName&&e.main.slim.updateContainerDivClass(e.main.slim.container)})))})),this.observeMutationObserver())},s.prototype.observeMutationObserver=function(){this.mutationObserver&&this.mutationObserver.observe(this.element,{attributes:!0,childList:!0,characterData:!0})},s.prototype.disconnectMutationObserver=function(){this.mutationObserver&&this.mutationObserver.disconnect()},s.prototype.create=function(e){this.element.innerHTML="";for(var t=0,i=e;t<i.length;t++){var n=i[t];if(n.hasOwnProperty("options")){var s=n,a=document.createElement("optgroup");if(a.label=s.label,s.options)for(var o=0,l=s.options;o<l.length;o++){var r=l[o];a.appendChild(this.createOption(r))}this.element.appendChild(a)}else this.element.appendChild(this.createOption(n))}},s.prototype.createOption=function(e){var t=document.createElement("option");return t.value=""!==e.value?e.value:e.text,t.innerHTML=e.innerHTML||e.text,e.selected&&(t.selected=e.selected),!1===e.display&&(t.style.display="none"),e.disabled&&(t.disabled=!0),e.placeholder&&t.setAttribute("data-placeholder","true"),e.mandatory&&t.setAttribute("data-mandatory","true"),e.class&&e.class.split(" ").forEach((function(e){t.classList.add(e)})),e.data&&"object"==typeof e.data&&Object.keys(e.data).forEach((function(i){t.setAttribute("data-"+(0,n.kebabCase)(i),e.data[i])})),t},i=s;function s(e){this.triggerMutationObserver=!0,this.element=e.select,this.main=e.main,this.element.disabled&&(this.main.config.isEnabled=!1),this.addAttributes(),this.addEventListeners(),this.mutationObserver=null,this.addMutationObserver(),this.element.slim=e.main}t.Select=i},function(e,t,i){"use strict";t.__esModule=!0,t.Slim=void 0;var n=i(0),s=i(1);a.prototype.containerDiv=function(){var e=document.createElement("div");return e.style.cssText=this.main.config.style,this.updateContainerDivClass(e),e},a.prototype.updateContainerDivClass=function(e){this.main.config.class=this.main.select.element.className.split(" "),e.className="",e.classList.add(this.main.config.id),e.classList.add(this.main.config.main);for(var t=0,i=this.main.config.class;t<i.length;t++){var n=i[t];""!==n.trim()&&e.classList.add(n)}},a.prototype.singleSelectedDiv=function(){var e=this,t=document.createElement("div");t.classList.add(this.main.config.singleSelected);var i=document.createElement("span");i.classList.add("placeholder"),t.appendChild(i);var n=document.createElement("span");n.innerHTML=this.main.config.deselectLabel,n.classList.add("ss-deselect"),n.onclick=function(t){t.stopPropagation(),e.main.config.isEnabled&&e.main.set("")},t.appendChild(n);var s=document.createElement("span");s.classList.add(this.main.config.arrow);var a=document.createElement("span");return a.classList.add("arrow-down"),s.appendChild(a),t.appendChild(s),t.onclick=function(){e.main.config.isEnabled&&(e.main.data.contentOpen?e.main.close():e.main.open())},{container:t,placeholder:i,deselect:n,arrowIcon:{container:s,arrow:a}}},a.prototype.placeholder=function(){var e,t=this.main.data.getSelected();null===t||t&&t.placeholder?((e=document.createElement("span")).classList.add(this.main.config.disabled),e.innerHTML=this.main.config.placeholderText,this.singleSelected&&(this.singleSelected.placeholder.innerHTML=e.outerHTML)):(e="",t&&(e=t.innerHTML&&!0!==this.main.config.valuesUseText?t.innerHTML:t.text),this.singleSelected&&(this.singleSelected.placeholder.innerHTML=t?e:""))},a.prototype.deselect=function(){this.singleSelected&&(this.main.config.allowDeselect&&""!==this.main.selected()?this.singleSelected.deselect.classList.remove("ss-hide"):this.singleSelected.deselect.classList.add("ss-hide"))},a.prototype.multiSelectedDiv=function(){var e=this,t=document.createElement("div");t.classList.add(this.main.config.multiSelected);var i=document.createElement("div");i.classList.add(this.main.config.values),t.appendChild(i);var n=document.createElement("div");n.classList.add(this.main.config.add);var s=document.createElement("span");return s.classList.add(this.main.config.plus),s.onclick=function(t){e.main.data.contentOpen&&(e.main.close(),t.stopPropagation())},n.appendChild(s),t.appendChild(n),t.onclick=function(t){e.main.config.isEnabled&&(t.target.classList.contains(e.main.config.valueDelete)||(e.main.data.contentOpen?e.main.close():e.main.open()))},{container:t,values:i,add:n,plus:s}},a.prototype.values=function(){if(this.multiSelected){for(var e=this.multiSelected.values.childNodes,t=this.main.data.getSelected(),i=[],n=0,s=e;n<s.length;n++){for(var a=s[n],o=!0,l=0,r=t;l<r.length;l++){var c=r[l];String(c.id)===String(a.dataset.id)&&(o=!1)}o&&i.push(a)}for(var d=0,h=i;d<h.length;d++){var u=h[d];u.classList.add("ss-out"),this.multiSelected.values.removeChild(u)}var p;for(e=this.multiSelected.values.childNodes,c=0;c<t.length;c++){o=!1;for(var m=0,f=e;m<f.length;m++)a=f[m],String(t[c].id)===String(a.dataset.id)&&(o=!0);o||(0!==e.length&&HTMLElement.prototype.insertAdjacentElement?0===c?this.multiSelected.values.insertBefore(this.valueDiv(t[c]),e[c]):e[c-1].insertAdjacentElement("afterend",this.valueDiv(t[c])):this.multiSelected.values.appendChild(this.valueDiv(t[c])))}0===t.length&&((p=document.createElement("span")).classList.add(this.main.config.disabled),p.innerHTML=this.main.config.placeholderText,this.multiSelected.values.innerHTML=p.outerHTML)}},a.prototype.valueDiv=function(e){var t=this,i=document.createElement("div");i.classList.add(this.main.config.value),i.dataset.id=e.id;var n=document.createElement("span");return n.classList.add(this.main.config.valueText),n.innerHTML=e.innerHTML&&!0!==this.main.config.valuesUseText?e.innerHTML:e.text,i.appendChild(n),e.mandatory||((n=document.createElement("span")).classList.add(this.main.config.valueDelete),n.innerHTML=this.main.config.deselectLabel,n.onclick=function(i){i.preventDefault(),i.stopPropagation();var n=!1;if(t.main.beforeOnChange||(n=!0),t.main.beforeOnChange){i=t.main.data.getSelected();for(var s=JSON.parse(JSON.stringify(i)),a=0;a<s.length;a++)s[a].id===e.id&&s.splice(a,1);!1!==t.main.beforeOnChange(s)&&(n=!0)}n&&(t.main.data.removeFromSelected(e.id,"id"),t.main.render(),t.main.select.setValue(),t.main.data.onDataChange())},i.appendChild(n)),i},a.prototype.contentDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.content),e},a.prototype.searchDiv=function(){var e=this,t=document.createElement("div"),i=document.createElement("input"),n=document.createElement("div");t.classList.add(this.main.config.search);var a={container:t,input:i};return this.main.config.showSearch||(t.classList.add(this.main.config.hide),i.readOnly=!0),i.type="search",i.placeholder=this.main.config.searchPlaceholder,i.tabIndex=0,i.setAttribute("aria-label",this.main.config.searchPlaceholder),i.setAttribute("autocapitalize","off"),i.setAttribute("autocomplete","off"),i.setAttribute("autocorrect","off"),i.onclick=function(t){setTimeout((function(){""===t.target.value&&e.main.search("")}),10)},i.onkeydown=function(t){"ArrowUp"===t.key?(e.main.open(),e.highlightUp(),t.preventDefault()):"ArrowDown"===t.key?(e.main.open(),e.highlightDown(),t.preventDefault()):"Tab"===t.key?e.main.data.contentOpen?e.main.close():setTimeout((function(){e.main.close()}),e.main.config.timeoutDelay):"Enter"===t.key&&t.preventDefault()},i.onkeyup=function(t){var s=t.target;if("Enter"===t.key){if(e.main.addable&&t.ctrlKey)return n.click(),t.preventDefault(),void t.stopPropagation();var a=e.list.querySelector("."+e.main.config.highlighted);a&&a.click()}else"ArrowUp"===t.key||"ArrowDown"===t.key||("Escape"===t.key?e.main.close():e.main.config.showSearch&&e.main.data.contentOpen?e.main.search(s.value):i.value="");t.preventDefault(),t.stopPropagation()},i.onfocus=function(){e.main.open()},t.appendChild(i),this.main.addable&&(n.classList.add(this.main.config.addable),n.innerHTML="+",n.onclick=function(t){var i;e.main.addable&&(t.preventDefault(),t.stopPropagation(),""!==(t=e.search.input.value).trim()?(t=e.main.addable(t),i="",t&&("object"==typeof t?(0,s.validateOption)(t)&&(e.main.addData(t),i=t.value||t.text):(e.main.addData(e.main.data.newOption({text:t,value:t})),i=t),e.main.search(""),setTimeout((function(){e.main.set(i,"value",!1,!1)}),100),e.main.config.closeOnSelect&&setTimeout((function(){e.main.close()}),100))):e.search.input.focus())},t.appendChild(n),a.addable=n),a},a.prototype.highlightUp=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=null;if(e)for(t=e.previousSibling;null!==t&&t.classList.contains(this.main.config.disabled);)t=t.previousSibling;else{var i=this.list.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");t=i[i.length-1]}null!==(t=t&&t.classList.contains(this.main.config.optgroupLabel)?null:t)||(i=e.parentNode).classList.contains(this.main.config.optgroup)&&(!i.previousSibling||(i=i.previousSibling.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")")).length&&(t=i[i.length-1])),t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),(0,n.ensureElementInView)(this.list,t))},a.prototype.highlightDown=function(){var e,t=this.list.querySelector("."+this.main.config.highlighted),i=null;if(t)for(i=t.nextSibling;null!==i&&i.classList.contains(this.main.config.disabled);)i=i.nextSibling;else i=this.list.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")");null!==i||null===t||(e=t.parentNode).classList.contains(this.main.config.optgroup)&&e.nextSibling&&(i=e.nextSibling.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")")),i&&(t&&t.classList.remove(this.main.config.highlighted),i.classList.add(this.main.config.highlighted),(0,n.ensureElementInView)(this.list,i))},a.prototype.listDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.list),e.setAttribute("role","listbox"),e},a.prototype.options=function(e){void 0===e&&(e="");var t=this.main.data.filtered||this.main.data.data;if((this.list.innerHTML="")!==e)return(i=document.createElement("div")).classList.add(this.main.config.option),i.classList.add(this.main.config.disabled),i.innerHTML=e,void this.list.appendChild(i);if(this.main.config.isAjax&&this.main.config.isSearching)return(i=document.createElement("div")).classList.add(this.main.config.option),i.classList.add(this.main.config.disabled),i.innerHTML=this.main.config.searchingText,void this.list.appendChild(i);if(0===t.length){var i=document.createElement("div");return i.classList.add(this.main.config.option),i.classList.add(this.main.config.disabled),i.innerHTML=this.main.config.searchText,void this.list.appendChild(i)}for(var n=this,s=0,a=t;s<a.length;s++)!function(e){if(e.hasOwnProperty("label")){var t=e,i=document.createElement("div");i.classList.add(n.main.config.optgroup);var s=document.createElement("div");if(s.classList.add(n.main.config.optgroupLabel),n.main.config.selectByGroup&&n.main.config.isMultiple&&s.classList.add(n.main.config.optgroupLabelSelectable),s.innerHTML=t.label,i.appendChild(s),t=t.options){for(var a,o=0,l=t;o<l.length;o++){var r=l[o];i.appendChild(n.option(r))}n.main.config.selectByGroup&&n.main.config.isMultiple&&(a=n,s.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation();for(var t=0,n=i.children;t<n.length;t++){var s=n[t];-1!==s.className.indexOf(a.main.config.option)&&s.click()}})))}n.list.appendChild(i)}else n.list.appendChild(n.option(e))}(a[s])},a.prototype.option=function(e){if(e.placeholder){var t=document.createElement("div");return t.classList.add(this.main.config.option),t.classList.add(this.main.config.hide),t}var i=document.createElement("div");i.classList.add(this.main.config.option),i.setAttribute("role","option"),e.class&&e.class.split(" ").forEach((function(e){i.classList.add(e)})),e.style&&(i.style.cssText=e.style);var s=this.main.data.getSelected();i.dataset.id=e.id,this.main.config.searchHighlight&&this.main.slim&&e.innerHTML&&""!==this.main.slim.search.input.value.trim()?i.innerHTML=(0,n.highlight)(e.innerHTML,this.main.slim.search.input.value,this.main.config.searchHighlighter):e.innerHTML&&(i.innerHTML=e.innerHTML),this.main.config.showOptionTooltips&&i.textContent&&i.setAttribute("title",i.textContent);var a=this;return i.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation();var i=this.dataset.id;if(!0===e.selected&&a.main.config.allowDeselectOption){var n=!1;if(a.main.beforeOnChange&&a.main.config.isMultiple||(n=!0),a.main.beforeOnChange&&a.main.config.isMultiple){for(var o=a.main.data.getSelected(),l=JSON.parse(JSON.stringify(o)),r=0;r<l.length;r++)l[r].id===i&&l.splice(r,1);!1!==a.main.beforeOnChange(l)&&(n=!0)}n&&(a.main.config.isMultiple?(a.main.data.removeFromSelected(i,"id"),a.main.render(),a.main.select.setValue(),a.main.data.onDataChange()):a.main.set(""))}else e.disabled||e.selected||a.main.config.limit&&Array.isArray(s)&&a.main.config.limit<=s.length||(a.main.beforeOnChange?(o=void 0,(n=JSON.parse(JSON.stringify(a.main.data.getObjectFromData(i)))).selected=!0,a.main.config.isMultiple?(o=JSON.parse(JSON.stringify(s))).push(n):o=JSON.parse(JSON.stringify(n)),!1!==a.main.beforeOnChange(o)&&a.main.set(i,"id",a.main.config.closeOnSelect)):a.main.set(i,"id",a.main.config.closeOnSelect))})),t=s&&(0,n.isValueInArrayOfObjects)(s,"id",e.id),(e.disabled||t)&&(i.onclick=null,a.main.config.allowDeselectOption||i.classList.add(this.main.config.disabled),a.main.config.hideSelectedOption&&i.classList.add(this.main.config.hide)),t?i.classList.add(this.main.config.optionSelected):i.classList.remove(this.main.config.optionSelected),i},i=a;function a(e){this.main=e.main,this.container=this.containerDiv(),this.content=this.contentDiv(),this.search=this.searchDiv(),this.list=this.listDiv(),this.options(),this.singleSelected=null,this.multiSelected=null,this.main.config.isMultiple?(this.multiSelected=this.multiSelectedDiv(),this.multiSelected&&this.container.appendChild(this.multiSelected.container)):(this.singleSelected=this.singleSelectedDiv(),this.container.appendChild(this.singleSelected.container)),this.main.config.addToBody?(this.content.classList.add(this.main.config.id),document.body.appendChild(this.content)):this.container.appendChild(this.content),this.content.appendChild(this.search.container),this.content.appendChild(this.list)}t.Slim=i}],e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)e.d(n,s,function(e){return t[e]}.bind(null,s));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.p="",e(e.s=2).default;function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var t,i}));