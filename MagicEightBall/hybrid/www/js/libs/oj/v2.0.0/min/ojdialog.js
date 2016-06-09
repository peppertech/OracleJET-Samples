/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojpopupcore","jqueryui-amd/draggable","jqueryui-amd/mouse"],function(b,f){(function(){b.ya("oj.ojResizable",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,resize:null,start:null,
stop:null},MK:function(a){return parseInt(a,10)||0},Fe:function(a){return!isNaN(parseInt(a,10))},DX:function(a,b){if("hidden"===f(a).css("overflow"))return!1;var c=b&&"left"===b?"scrollLeft":"scrollTop",e=!1;if(0<a[c])return!0;a[c]=1;e=0<a[c];a[c]=0;return e},_ComponentCreate:function(){this._super();var a,b,c,e,g,h=this;a=this.options;b=this.element.mouse.bind(this.element);b();this.Am=b("instance");this.Am._mouseCapture=function(a){return h.Tha(a)};this.Am._mouseStart=function(a){return h.Wha(a)};
this.Am._mouseDrag=function(a){return h.Uha(a)};this.Am._mouseStop=function(a){return h.lx(a)};this.element.addClass("oj-resizable");f.extend(this,{BE:this.element,KC:[],wk:null});this.handles=a.handles||(f(".oj-resizable-handle",this.element).length?{csa:".oj-resizable-n",Rra:".oj-resizable-e",lsa:".oj-resizable-s",Rf:".oj-resizable-w",nsa:".oj-resizable-se",psa:".oj-resizable-sw",dsa:".oj-resizable-ne",fsa:".oj-resizable-nw"}:"e,s,se");if(this.handles.constructor===String)for("all"===this.handles&&
(this.handles="n,e,s,w,se,sw,ne,nw"),a=this.handles.split(","),this.handles={},b=0;b<a.length;b++)c=f.trim(a[b]),g="oj-resizable-"+c,e=f("\x3cdiv class\x3d'oj-resizable-handle "+g+"'\x3e\x3c/div\x3e"),this.handles[c]=".oj-resizable-"+c,this.element.append(e);this.Wja=function(){for(var a in this.handles)this.handles[a].constructor===String&&(this.handles[a]=this.element.children(this.handles[a]).first().show())};this.Wja();this.Vfa=f(".oj-resizable-handle",this.element);this.Vfa.mouseover(function(){h.W4||
(this.className&&(e=this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=e&&e[1]?e[1]:"se")});this.Am._mouseInit()},_destroy:function(){this.Am&&this.Am._mouseDestroy();try{this.Am.destroy(),this.Am=null}catch(a){}f(this.BE).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();return this},Tha:function(a){var b,c,e=!1;for(b in this.handles)if(c=f(this.handles[b])[0],
c===a.target||f.contains(c,a.target))e=!0;return!this.options.disabled&&e},Wha:function(a){var b,c,e;e=this.options;b=this.element.position();var g=this.element;this.W4=!0;/absolute/.test(g.css("position"))?g.css({position:"absolute",top:g.css("top"),left:g.css("left")}):g.is(".oj-draggable")&&g.css({position:"absolute",top:b.top,left:b.left});this.Xja();b=this.MK(this.helper.css("left"));c=this.MK(this.helper.css("top"));e.containment&&(b+=f(e.containment).scrollLeft()||0,c+=f(e.containment).scrollTop()||
0);this.offset=this.helper.offset();this.position={left:b,top:c};this.size={width:g.width(),height:g.height()};this.Qj={width:g.width(),height:g.height()};this.Xo={left:b,top:c};this.OE={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()};this.tpa={left:a.pageX,top:a.pageY};this.Kk=this.Qj.width/this.Qj.height||1;e=f(".oj-resizable-"+this.axis).css("cursor");f("body").css("cursor","auto"===e?this.axis+"-resize":e);g.addClass("oj-resizable-resizing");this.fL("start",a);this.q$(a);this.Maa(a);
return!0},Uha:function(a){var b,c=this.helper,e={},g=this.tpa;b=a.pageX-g.left||0;var g=a.pageY-g.top||0,h=this.Dh[this.axis];this.Ou={top:this.position.top,left:this.position.left};this.Pu={width:this.size.width,height:this.size.height};if(!h)return!1;b=h.apply(this,[a,b,g]);this.sma(a.shiftKey);a.shiftKey&&(b=this.rma(b,a));b=this.jka(b,a);this.kma(b);this.fL("resize",a);this.p$(a,this.ui());this.Laa(a,this.ui());this.position.top!==this.Ou.top&&(e.top=this.position.top+"px");this.position.left!==
this.Ou.left&&(e.left=this.position.left+"px");this.size.width!==this.Pu.width&&(e.width=this.size.width+"px");this.size.height!==this.Pu.height&&(e.height=this.size.height+"px");c.css(e);!this.wk&&this.KC.length&&this.Uia();f.isEmptyObject(e)||this._trigger("resize",a,this.ui());return!1},lx:function(a){this.W4=!1;f("body").css("cursor","auto");this.element.removeClass("oj-resizable-resizing");this.fL("stop",a);this.r$(a);this.Naa(a);return!1},sma:function(a){var b,c,e,f;f=this.options;f={minWidth:this.Fe(f.minWidth)?
f.minWidth:0,maxWidth:this.Fe(f.maxWidth)?f.maxWidth:Infinity,minHeight:this.Fe(f.minHeight)?f.minHeight:0,maxHeight:this.Fe(f.maxHeight)?f.maxHeight:Infinity};a&&(a=f.minHeight*this.Kk,c=f.minWidth/this.Kk,b=f.maxHeight*this.Kk,e=f.maxWidth/this.Kk,a>f.minWidth&&(f.minWidth=a),c>f.minHeight&&(f.minHeight=c),b<f.maxWidth&&(f.maxWidth=b),e<f.maxHeight&&(f.maxHeight=e));this.vma=f},kma:function(a){this.offset=this.helper.offset();this.Fe(a.left)&&(this.position.left=a.left);this.Fe(a.top)&&(this.position.top=
a.top);this.Fe(a.height)&&(this.size.height=a.height);this.Fe(a.width)&&(this.size.width=a.width)},rma:function(a){var b=this.position,c=this.size,e=this.axis;this.Fe(a.height)?a.width=a.height*this.Kk:this.Fe(a.width)&&(a.height=a.width/this.Kk);"sw"===e&&(a.left=b.left+(c.width-a.width),a.top=null);"nw"===e&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width));return a},jka:function(a){var b=this.vma,c=this.axis,e=this.Fe(a.width)&&b.maxWidth&&b.maxWidth<a.width,f=this.Fe(a.height)&&
b.maxHeight&&b.maxHeight<a.height,h=this.Fe(a.width)&&b.minWidth&&b.minWidth>a.width,k=this.Fe(a.height)&&b.minHeight&&b.minHeight>a.height,l=this.Xo.left+this.Qj.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(c),c=/nw|ne|n/.test(c);h&&(a.width=b.minWidth);k&&(a.height=b.minHeight);e&&(a.width=b.maxWidth);f&&(a.height=b.maxHeight);h&&n&&(a.left=l-b.minWidth);e&&n&&(a.left=l-b.maxWidth);k&&c&&(a.top=m-b.minHeight);f&&c&&(a.top=m-b.maxHeight);a.width||a.height||a.left||!a.top?a.width||
a.height||a.top||!a.left||(a.left=null):a.top=null;return a},Uia:function(){if(this.KC.length){var a,b,c,e,f,h=this.helper||this.element;for(a=0;a<this.KC.length;a++){f=this.KC[a];if(!this.qu)for(this.qu=[],c=[f.css("borderTopWidth"),f.css("borderRightWidth"),f.css("borderBottomWidth"),f.css("borderLeftWidth")],e=[f.css("paddingTop"),f.css("paddingRight"),f.css("paddingBottom"),f.css("paddingLeft")],b=0;b<c.length;b++)this.qu[b]=(parseInt(c[b],10)||0)+(parseInt(e[b],10)||0);f.css({height:h.height()-
this.qu[0]-this.qu[2]||0,width:h.width()-this.qu[1]-this.qu[3]||0})}}},Xja:function(){this.element.offset();this.helper=this.element},Dh:{e:function(a,b){return{width:this.Qj.width+b}},w:function(a,b){return{left:this.Xo.left+b,width:this.Qj.width-b}},n:function(a,b,c){return{top:this.Xo.top+c,height:this.Qj.height-c}},s:function(a,b,c){return{height:this.Qj.height+c}},se:function(a,b,c){return f.extend(this.Dh.s.apply(this,arguments),this.Dh.e.apply(this,[a,b,c]))},sw:function(a,b,c){return f.extend(this.Dh.s.apply(this,
arguments),this.Dh.w.apply(this,[a,b,c]))},ne:function(a,b,c){return f.extend(this.Dh.n.apply(this,arguments),this.Dh.e.apply(this,[a,b,c]))},nw:function(a,b,c){return f.extend(this.Dh.n.apply(this,arguments),this.Dh.w.apply(this,[a,b,c]))}},fL:function(a,b){"resize"!==a&&this._trigger(a,b,this.ui())},q$:function(){function a(a){f(a).each(function(){var a=f(this);a.data("oj-resizable-alsoresize",{width:parseInt(a.width(),10),height:parseInt(a.height(),10),left:parseInt(a.css("left"),10),top:parseInt(a.css("top"),
10)})})}var b=this.options;"object"!==typeof b.alsoResize||b.alsoResize.parentNode?a(b.alsoResize):b.alsoResize.length?(b.alsoResize=b.alsoResize[0],a(b.alsoResize)):f.each(b.alsoResize,function(b){a(b)})},p$:function(a,b){function c(a,c){f(a).each(function(){var a=f(this),e=f(this).data("oj-resizable-alsoresize"),g={};f.each(c&&c.length?c:a.parents(b.BE[0]).length?["width","height"]:["width","height","top","left"],function(a,b){var c=(e[b]||0)+(k[b]||0);c&&0<=c&&(g[b]=c||null)});a.css(g)})}var e=
this.options,g=this.Qj,h=this.Xo,k={height:this.size.height-g.height||0,width:this.size.width-g.width||0,top:this.position.top-h.top||0,left:this.position.left-h.left||0};"object"!==typeof e.alsoResize||e.alsoResize.nodeType?c(e.alsoResize,null):f.each(e.alsoResize,function(a,b){c(a,b)})},r$:function(){f(this).removeData("oj-resizable-alsoresize")},Maa:function(){var a,b,c,e,g,h=this,k=h.element;c=h.options.containment;if(k=c instanceof f?c.get(0):/parent/.test(c)?k.parent().get(0):c)h.OD=f(k),/document/.test(c)||
c===document?(h.PD={left:0,top:0},h.X1={left:0,top:0},h.Yo={element:f(document),left:0,top:0,width:f(document).width(),height:f(document).height()||document.body.parentNode.scrollHeight}):(a=f(k),b=[],f(["Top","Right","Left","Bottom"]).each(function(c,e){b[c]=h.MK(a.css("padding"+e))}),h.PD=a.offset(),h.X1=a.position(),h.Y1={height:a.innerHeight()-b[3],width:a.innerWidth()-b[1]},c=h.PD,e=h.Y1.height,g=h.Y1.width,g=h.DX(k,"left")?k.scrollWidth:g,e=h.DX(k)?k.scrollHeight:e,h.Yo={element:k,left:c.left,
top:c.top,width:g,height:e})},Laa:function(a,b){var c,e,f,h;c=this.options;e=this.PD;h=this.position;var k=a.shiftKey;f={top:0,left:0};var l=this.OD,m=!0;l[0]!==document&&/static/.test(l.css("position"))&&(f=e);h.left<(this.wk?e.left:0)&&(this.size.width+=this.wk?this.position.left-e.left:this.position.left-f.left,k&&(this.size.height=this.size.width/this.Kk,m=!1),this.position.left=c.helper?e.left:0);h.top<(this.wk?e.top:0)&&(this.size.height+=this.wk?this.position.top-e.top:this.position.top,k&&
(this.size.width=this.size.height*this.Kk,m=!1),this.position.top=this.wk?e.top:0);this.offset.left=this.Yo.left+this.position.left;this.offset.top=this.Yo.top+this.position.top;c=Math.abs((this.wk?this.offset.left-f.left:this.offset.left-e.left)+this.OE.width);e=Math.abs((this.wk?this.offset.top-f.top:this.offset.top-e.top)+this.OE.height);f=this.OD.get(0)===this.element.parent().get(0);h=/relative|absolute/.test(this.OD.css("position"));f&&h&&(c-=Math.abs(this.Yo.left));c+this.size.width>=this.Yo.width&&
(this.size.width=this.Yo.width-c,k&&(this.size.height=this.size.width/this.Kk,m=!1));e+this.size.height>=this.Yo.height&&(this.size.height=this.Yo.height-e,k&&(this.size.width=this.size.height*this.Kk,m=!1));m||(this.position.left=b.Ou.left,this.position.top=b.Ou.top,this.size.width=b.Pu.width,this.size.height=b.Pu.height)},Naa:function(){var a=this.options,b=this.PD,c=this.X1,e=this.OD,g=f(this.helper),h=g.offset(),k=g.outerWidth()-this.OE.width,g=g.outerHeight()-this.OE.height;this.wk&&!a.animate&&
/relative/.test(e.css("position"))&&f(this).css({left:h.left-c.left-b.left,width:k,height:g});this.wk&&!a.animate&&/static/.test(e.css("position"))&&f(this).css({left:h.left-c.left-b.left,width:k,height:g})},ui:function(){return{BE:this.BE,element:this.element,helper:this.helper,position:this.position,size:this.size,Qj:this.Qj,Xo:this.Xo,Pu:this.Pu,Ou:this.Ou}}})})();(function(){b.ya("oj.ojDialog",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancelBehavior:"icon",dragAffordance:"title-bar",
initialVisibility:"hide",modality:"modal",position:{my:"center",at:"center",of:window,collision:"fit",ssa:function(a){var b=f(this).css(a).offset().top;0>b&&f(this).css("top",a.top-b)}},resizeBehavior:"resizable",role:"dialog",title:null,beforeClose:null,beforeOpen:null,close:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_ComponentCreate:function(){this._super();this.spa={display:this.element[0].style.display,width:this.element[0].style.width,height:this.element[0].style.height};
this.Xo={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.JO=this.element.attr("title");this.options.title=this.options.title||this.JO;this.Dba();this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.Pb);this.oz=!1;if(this.element.find(".oj-dialog").length){var a=this;this.element.find(".oj-dialog-header").each(function(b,c){var e=f(c);if(!e.closest(".oj-dialog-body").length)return a.xo=e,a.oz=!0,
!1})}else this.xo=this.element.find(".oj-dialog-header"),this.xo.length&&(this.oz=!0);this.oz?(this.sba(this.xo),this.xo.prependTo(this.Pb),"icon"===this.options.cancelBehavior&&(this.SA(this.xo),this.gy=this.xo.find(".oj-dialog-title"),this.gy.length&&this.gy.insertAfter(this.fp))):this.Cba();this.Om=this.element.children(".oj-dialog-footer");this.rba(this.Om);this.Om.length&&(this.Om.addClass("oj-helper-clearfix"),this.Om.appendTo(this.Pb));"title-bar"===this.options.dragAffordance&&f.fn.draggable&&
this.Lt();this.Zn=!1},EQ:function(){"show"===this.options.initialVisibility&&this.open()},_destroy:function(){this.Nba&&window.clearTimeout(this.Nba);this.isOpen()&&this.Vp();this.$l&&(this.$l("instance")&&this.$l("destroy"),this.$l=null);this.Om.length&&(this.Om.removeClass("oj-helper-clearfix"),f("#"+this.rZ).replaceWith(this.Om));this.aB();if(this.oz){var a=this.Pb.find(".oj-dialog-header");a&&f("#"+this.sZ).replaceWith(a)}this.O5&&(this.O5.remove(),this.O5=null);this.element.removeUniqueId().removeClass("oj-dialog-content oj-dialog-default-content").css(this.spa);
this.Pb&&this.Pb.stop(!0,!0);this.element.unwrap();this.JO&&this.element.attr("title",this.JO);this.Pm&&(this.Pm.remove(),this.Pm=null);delete this.wj;delete this.Zn;this._super()},widget:function(){return this.Pb},disable:f.noop,enable:f.noop,close:function(a){if(this.isOpen()&&(!1!==this._trigger("beforeClose",a)||this.Vw)){this.Zn=!1;this.Qca=null;this.opener.filter(":focusable").focus().length||f(this.document[0].activeElement).blur();var d={};d[b.N.Qa.ff]=this.Pb;b.N.pe().close(d);this._trigger("close",
a)}},isOpen:function(){return this.Zn},open:function(a){if(!1!==this._trigger("beforeOpen",a)){if(!this.isOpen()){this.Zn=!0;this.opener=f(this.document[0].activeElement);"resizable"===this.options.resizeBehavior&&this.TY();a="rtl"===this.bc();a=b.oc.Dg(this.options.position,a);var d={};d[b.N.Qa.ff]=this.Pb;d[b.N.Qa.gv]=this.opener;d[b.N.Qa.kv]=a;d[b.N.Qa.Zh]=this.options.modality;d[b.N.Qa.kp]=this.nt();d[b.N.Qa.Ym]="oj-dialog-layer";d[b.N.Qa.Xm]=b.N.Xm.GF;b.N.pe().open(d);this._trigger("open")}this.GV()}},
refresh:function(){this._super()},GV:function(){var a=this.Qca;a&&0<a.length&&b.v.No(this.Pb[0],a[0])||(a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||this.Om.length&&(a=this.Om.find(":tabbable")),a.length||this.nP&&(a=this.nP.filter(":tabbable")),a.length||(a=this.Pb),a.eq(0).focus(),this._trigger("focus"))},_keepFocus:function(a){a.preventDefault();a=this.document[0].activeElement;this.Pb[0]===a||f.contains(this.Pb[0],a)||this.GV()},Fe:function(a){return!isNaN(parseInt(a,
10))},Dba:function(){this.wY=!1;this.element.uniqueId();this.vI=this.element.attr("id");this.Bma="ojDialogWrapper-"+this.vI;this.Pb=f("\x3cdiv\x3e");this.Pb.addClass("oj-dialog oj-component").hide().attr({tabIndex:-1,role:this.options.role,id:this.Bma});this.Pb.insertBefore(this.element);this._on(this.Pb,{keyup:function(){},keydown:function(a){if("none"!=this.options.cancelBehavior&&!a.isDefaultPrevented()&&a.keyCode&&a.keyCode===f.ui.keyCode.ESCAPE)a.preventDefault(),a.stopImmediatePropagation(),
this.close(a);else if(a.keyCode===f.ui.keyCode.TAB&&"modeless"!==this.options.modality){var b=this.Pb.find(":tabbable"),c=b.filter(":first"),e=b.filter(":last");a.shiftKey?a.shiftKey&&(a.target===c[0]||a.target===this.Pb[0]?(e.focus(),a.preventDefault()):(c=b.index(document.activeElement),1==c&&b[0]&&(b[0].focus(),a.preventDefault()))):a.target===e[0]||a.target===this.Pb[0]?(c.focus(),a.preventDefault()):(c=b.index(document.activeElement),0==c&&b[1]&&(b[1].focus(),a.preventDefault()))}}});this.element.find("[aria-describedby]").length||
this.Pb.attr({"aria-describedby":this.element.uniqueId().attr("id")})},aB:function(){this.fp&&(this.fp.remove(),this.nP=this.fp=null)},SA:function(a){this.fp=f("\x3cdiv\x3e").addClass("oj-dialog-header-close-wrapper").attr("tabindex","1").attr("aria-label","close").attr("role","button").appendTo(a);this.nP=f("\x3cspan\x3e").addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon").attr("alt","close icon").prependTo(this.fp);this._on(this.fp,{click:function(a){a.preventDefault();a.stopImmediatePropagation();
this.close(a)},mousedown:function(a){f(a.currentTarget).addClass("oj-active")},mouseup:function(a){f(a.currentTarget).removeClass("oj-active")},mouseenter:function(a){f(a.currentTarget).addClass("oj-hover")},mouseleave:function(a){a=a.currentTarget;f(a).removeClass("oj-hover");f(a).removeClass("oj-active")},keyup:function(a){if(a.keyCode&&a.keyCode===f.ui.keyCode.SPACE||a.keyCode===f.ui.keyCode.ENTER)a.preventDefault(),a.stopImmediatePropagation(),this.close(a)}})},Cba:function(){var a;this.Pm=f("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.Pb);
this._on(this.Pm,{mousedown:function(a){f(a.target).closest(".oj-dialog-close-icon")||this.Pb.focus()}});"icon"===this.options.cancelBehavior&&this.SA(this.Pm);a=f("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").appendTo(this.Pm);this.b1(a);this.Pb.attr({"aria-labelledby":a.attr("id")})},b1:function(a){this.options.title||a.html("\x26#160;");a.text(this.options.title)},Lt:function(){function a(a){return{position:a.position,offset:a.offset}}var b=this,c=this.options;this.Pb.draggable({Lra:!1,
cancel:".oj-dialog-content, .oj-dialog-header-close",handle:".oj-dialog-header",containment:"document",start:function(c,g){f(this).addClass("oj-dialog-dragging");b.oT();b._trigger("dragStart",c,a(g))},drag:function(c,f){b._trigger("drag",c,a(f))},stop:function(e,g){c.position=[g.position.left-b.document.scrollLeft(),g.position.top-b.document.scrollTop()];f(this).removeClass("oj-dialog-dragging");b.j1();b._trigger("dragStop",e,a(g))}});this.Pb.addClass("oj-draggable")},TY:function(){function a(a){return{originalPosition:a.Xo,
originalSize:a.Qj,position:a.position,size:a.size}}var b=this;this.Pb.css("position");this.$l=this.Pb.ojResizable.bind(this.Pb);this.$l({cancel:".oj-dialog-content",containment:"document",handles:"n,e,s,w,se,sw,ne,nw",start:function(c,e){b.wY=!0;f(this).addClass("oj-dialog-resizing");b.oT();b._trigger("resizeStart",c,a(e))},resize:function(c,e){b._trigger("resize",c,a(e))},stop:function(c,e){b.wY=!1;f(this).removeClass("oj-dialog-resizing");b.j1();b._trigger("resizeStop",c,a(e))}})},YK:function(){var a=
"rtl"===this.bc(),a=b.oc.Dg(this.options.position,a);this.Pb.position(a);this.tZ()},tZ:function(){b.N.pe().mP(this.Pb,b.N.Ac.$m)},_setOption:function(a,d,c){var e;e=this.Pb;if("disabled"!==a)switch(this._super(a,d,c),a){case "dragAffordance":(a=e.hasClass("oj-draggable"))&&"none"===d&&(e.draggable("destroy"),this.Pb.removeClass("oj-draggable"));a||"title-bar"!==d||this.Lt();break;case "position":this.YK();break;case "resizeBehavior":e=!1;this.$l&&(e=!0);e&&"resizable"!=d&&(this.$l("instance")&&this.$l("destroy"),
this.$l=null);e||"resizable"!==d||this.TY();break;case "title":this.b1(this.Pm.find(".oj-dialog-title"));break;case "role":e.attr("role",d);break;case "modality":this.isOpen()&&(e={},e[b.N.Qa.ff]=this.Pb,e[b.N.Qa.Zh]=d,b.N.pe().su(e));break;case "cancelBehavior":"none"===d||"escape"===d?this.aB():"icon"===d&&(this.oz?(this.aB(),this.SA(this.xo),this.gy=this.xo.find(".oj-dialog-title"),this.gy.length&&this.gy.insertAfter(this.fp)):(this.aB(),this.SA(this.Pm),this.u5=this.Pm.find(".oj-dialog-title"),
this.u5.length&&this.u5.insertAfter(this.fp)))}},oT:function(){this.WN=this.document.find("iframe").map(function(){var a=f(this),b=a.offset();return f("\x3cdiv\x3e").css({width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(b)[0]})},j1:function(){this.WN&&(this.WN.remove(),delete this.WN)},rba:function(a){this.rZ="ojDialogPlaceHolderFooter-"+this.vI;this.xia=f("\x3cdiv\x3e").hide().attr({id:this.rZ});this.xia.insertBefore(a)},sba:function(a){this.sZ="ojDialogPlaceHolderHeader-"+
this.vI;this.yia=f("\x3cdiv\x3e").hide().attr({id:this.sZ});this.yia.insertBefore(a)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;switch(a){case "oj-dialog-header":case "oj-dialog-body":case "oj-dialog-footer":case "oj-dialog-content":case "oj-dialog-header-close-wrapper":case "oj-resizable-n":case "oj-resizable-e":case "oj-resizable-s":case "oj-resizable-w":case "oj-resizable-se":case "oj-resizable-sw":case "oj-resizable-ne":case "oj-resizable-nw":a="."+
a;if(!this.widget().find(a))break;return this.widget().find(a)[0];case "oj-dialog-close-icon":case "oj-dialog-close":if(!this.widget().find(".oj-dialog-close-icon"))break;return this.widget().find(".oj-dialog-close-icon")[0]}return null},getSubIdByNode:function(a){if(null!=a){a=f(a);if(a.hasClass("oj-dialog-header"))return{subId:"oj-dialog-header"};if(a.hasClass("oj-dialog-footer"))return{subId:"oj-dialog-footer"};if(a.hasClass("oj-dialog-content"))return{subId:"oj-dialog-content"};if(a.hasClass("oj-dialog-header-close-wrapper"))return{subId:"oj-dialog-header-close-wrapper"};
if(a.hasClass("oj-dialog-close-icon"))return{subId:"oj-dialog-close"};if(a.hasClass("oj-resizable-n"))return{subId:"oj-resizable-n"};if(a.hasClass("oj-resizable-e"))return{subId:"oj-resizable-e"};if(a.hasClass("oj-resizable-s"))return{subId:"oj-resizable-s"};if(a.hasClass("oj-resizable-w"))return{subId:"oj-resizable-w"};if(a.hasClass("oj-resizable-se"))return{subId:"oj-resizable-se"};if(a.hasClass("oj-resizable-sw"))return{subId:"oj-resizable-sw"};if(a.hasClass("oj-resizable-ne"))return{subId:"oj-resizable-ne"};
if(a.hasClass("oj-resizable-nw"))return{subId:"oj-resizable-nw"}}return null},Rq:function(){this.element.remove()},nt:function(){if(!this.wj){var a=this.wj={};a[b.N.Ac.Wr]=f.proxy(this.Vp,this);a[b.N.Ac.Xr]=f.proxy(this.Rq,this);a[b.N.Ac.$m]=f.proxy(this.tZ,this)}return this.wj},Vp:function(){this.Vw=!0;this.close();delete this.Vw}})})()});