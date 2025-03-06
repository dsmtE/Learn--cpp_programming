"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[758],{90758:(t,e,s)=>{s.d(e,{Zk:()=>l,iP:()=>Bt,q7:()=>w,tM:()=>Ft});var i=s(96474),n=s(87308),r=s(8159),o=s(10009),a=function(){var t=(0,o.K2)((function(t,e,s,i){for(s=s||{},i=t.length;i--;s[t[i]]=e);return s}),"o"),e=[1,2],s=[1,3],i=[1,4],n=[2,4],r=[1,9],a=[1,11],l=[1,16],c=[1,17],h=[1,18],d=[1,19],u=[1,32],p=[1,20],y=[1,21],g=[1,22],f=[1,23],m=[1,24],S=[1,26],_=[1,27],b=[1,28],T=[1,29],k=[1,30],E=[1,31],x=[1,34],D=[1,35],C=[1,36],$=[1,37],v=[1,33],L=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],I=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],A=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],K={trace:(0,o.K2)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"--\x3e":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"--\x3e",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:(0,o.K2)((function(t,e,s,i,n,r,o){var a=r.length-1;switch(n){case 3:return i.setRootDoc(r[a]),r[a];case 4:this.$=[];break;case 5:"nl"!=r[a]&&(r[a-1].push(r[a]),this.$=r[a-1]);break;case 6:case 7:case 12:this.$=r[a];break;case 8:this.$="nl";break;case 13:const t=r[a-1];t.description=i.trimColon(r[a]),this.$=t;break;case 14:this.$={stmt:"relation",state1:r[a-2],state2:r[a]};break;case 15:const e=i.trimColon(r[a]);this.$={stmt:"relation",state1:r[a-3],state2:r[a-1],description:e};break;case 19:this.$={stmt:"state",id:r[a-3],type:"default",description:"",doc:r[a-1]};break;case 20:var l=r[a],c=r[a-2].trim();if(r[a].match(":")){var h=r[a].split(":");l=h[0],c=[c,h[1]]}this.$={stmt:"state",id:l,type:"default",description:c};break;case 21:this.$={stmt:"state",id:r[a-3],type:"default",description:r[a-5],doc:r[a-1]};break;case 22:this.$={stmt:"state",id:r[a],type:"fork"};break;case 23:this.$={stmt:"state",id:r[a],type:"join"};break;case 24:this.$={stmt:"state",id:r[a],type:"choice"};break;case 25:this.$={stmt:"state",id:i.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:r[a-1].trim(),note:{position:r[a-2].trim(),text:r[a].trim()}};break;case 29:this.$=r[a].trim(),i.setAccTitle(this.$);break;case 30:case 31:this.$=r[a].trim(),i.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:r[a-1].trim(),classes:r[a].trim()};break;case 34:this.$={stmt:"style",id:r[a-1].trim(),styleClass:r[a].trim()};break;case 35:this.$={stmt:"applyClass",id:r[a-1].trim(),styleClass:r[a].trim()};break;case 36:i.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:i.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:i.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:i.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:r[a].trim(),type:"default",description:""};break;case 44:case 45:this.$={stmt:"state",id:r[a-2].trim(),classes:[r[a].trim()],type:"default",description:""}}}),"anonymous"),table:[{3:1,4:e,5:s,6:i},{1:[3]},{3:5,4:e,5:s,6:i},{3:6,4:e,5:s,6:i},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],n,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:r,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,22:d,24:u,25:p,26:y,27:g,28:f,29:m,32:25,33:S,35:_,37:b,38:T,42:k,45:E,48:x,49:D,50:C,51:$,54:v},t(L,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:l,17:c,19:h,22:d,24:u,25:p,26:y,27:g,28:f,29:m,32:25,33:S,35:_,37:b,38:T,42:k,45:E,48:x,49:D,50:C,51:$,54:v},t(L,[2,7]),t(L,[2,8]),t(L,[2,9]),t(L,[2,10]),t(L,[2,11]),t(L,[2,12],{14:[1,39],15:[1,40]}),t(L,[2,16]),{18:[1,41]},t(L,[2,18],{20:[1,42]}),{23:[1,43]},t(L,[2,22]),t(L,[2,23]),t(L,[2,24]),t(L,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},t(L,[2,28]),{34:[1,48]},{36:[1,49]},t(L,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},t(I,[2,42],{55:[1,54]}),t(I,[2,43],{55:[1,55]}),t(L,[2,36]),t(L,[2,37]),t(L,[2,38]),t(L,[2,39]),t(L,[2,6]),t(L,[2,13]),{13:56,24:u,54:v},t(L,[2,17]),t(A,n,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},t(L,[2,29]),t(L,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},t(L,[2,14],{14:[1,67]}),{4:r,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,21:[1,68],22:d,24:u,25:p,26:y,27:g,28:f,29:m,32:25,33:S,35:_,37:b,38:T,42:k,45:E,48:x,49:D,50:C,51:$,54:v},t(L,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},t(L,[2,32]),t(L,[2,33]),t(L,[2,34]),t(L,[2,35]),t(I,[2,44]),t(I,[2,45]),t(L,[2,15]),t(L,[2,19]),t(A,n,{7:72}),t(L,[2,26]),t(L,[2,27]),{4:r,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,21:[1,73],22:d,24:u,25:p,26:y,27:g,28:f,29:m,32:25,33:S,35:_,37:b,38:T,42:k,45:E,48:x,49:D,50:C,51:$,54:v},t(L,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:(0,o.K2)((function(t,e){if(!e.recoverable){var s=new Error(t);throw s.hash=e,s}this.trace(t)}),"parseError"),parse:(0,o.K2)((function(t){var e=this,s=[0],i=[],n=[null],r=[],a=this.table,l="",c=0,h=0,d=0,u=r.slice.call(arguments,1),p=Object.create(this.lexer),y={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(y.yy[g]=this.yy[g]);p.setInput(t,y.yy),y.yy.lexer=p,y.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var f=p.yylloc;r.push(f);var m=p.options&&p.options.ranges;function S(){var t;return"number"!=typeof(t=i.pop()||p.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,o.K2)((function(t){s.length=s.length-2*t,n.length=n.length-t,r.length=r.length-t}),"popStack"),(0,o.K2)(S,"lex");for(var _,b,T,k,E,x,D,C,$,v={};;){if(T=s[s.length-1],this.defaultActions[T]?k=this.defaultActions[T]:(null==_&&(_=S()),k=a[T]&&a[T][_]),void 0===k||!k.length||!k[0]){var L="";for(x in $=[],a[T])this.terminals_[x]&&x>2&&$.push("'"+this.terminals_[x]+"'");L=p.showPosition?"Parse error on line "+(c+1)+":\n"+p.showPosition()+"\nExpecting "+$.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==_?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(L,{text:p.match,token:this.terminals_[_]||_,line:p.yylineno,loc:f,expected:$})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+T+", token: "+_);switch(k[0]){case 1:s.push(_),n.push(p.yytext),r.push(p.yylloc),s.push(k[1]),_=null,b?(_=b,b=null):(h=p.yyleng,l=p.yytext,c=p.yylineno,f=p.yylloc,d>0&&d--);break;case 2:if(D=this.productions_[k[1]][1],v.$=n[n.length-D],v._$={first_line:r[r.length-(D||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(D||1)].first_column,last_column:r[r.length-1].last_column},m&&(v._$.range=[r[r.length-(D||1)].range[0],r[r.length-1].range[1]]),void 0!==(E=this.performAction.apply(v,[l,h,c,y.yy,k[1],n,r].concat(u))))return E;D&&(s=s.slice(0,-1*D*2),n=n.slice(0,-1*D),r=r.slice(0,-1*D)),s.push(this.productions_[k[1]][0]),n.push(v.$),r.push(v._$),C=a[s[s.length-2]][s[s.length-1]],s.push(C);break;case 3:return!0}}return!0}),"parse")},R=function(){return{EOF:1,parseError:(0,o.K2)((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:(0,o.K2)((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,o.K2)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,o.K2)((function(t){var e=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===i.length?this.yylloc.first_column:0)+i[i.length-s.length].length-s[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,o.K2)((function(){return this._more=!0,this}),"more"),reject:(0,o.K2)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,o.K2)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,o.K2)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,o.K2)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,o.K2)((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:(0,o.K2)((function(t,e){var s,i,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],s=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var r in n)this[r]=n[r];return!1}return!1}),"test_match"),next:(0,o.K2)((function(){if(this.done)return this.EOF;var t,e,s,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if((s=this._input.match(this.rules[n[r]]))&&(!e||s[0].length>e[0].length)){if(e=s,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(s,n[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,o.K2)((function(){var t=this.next();return t||this.lex()}),"lex"),begin:(0,o.K2)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,o.K2)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,o.K2)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,o.K2)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,o.K2)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,o.K2)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,o.K2)((function(t,e,s,i){switch(s){case 0:return 41;case 1:case 42:return 48;case 2:case 43:return 49;case 3:case 44:return 50;case 4:case 45:return 51;case 5:case 6:case 8:case 9:case 10:case 11:case 54:case 56:case 62:break;case 7:case 77:return 5;case 12:case 32:return this.pushState("SCALE"),17;case 13:case 33:return 18;case 14:case 20:case 34:case 49:case 52:this.popState();break;case 15:return this.begin("acc_title"),33;case 16:return this.popState(),"acc_title_value";case 17:return this.begin("acc_descr"),35;case 18:return this.popState(),"acc_descr_value";case 19:this.begin("acc_descr_multiline");break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 24:return this.popState(),this.pushState("CLASSDEFID"),39;case 25:return this.popState(),40;case 26:return this.pushState("CLASS"),45;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;case 28:return this.popState(),47;case 29:return this.pushState("STYLE"),42;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;case 31:return this.popState(),44;case 35:this.pushState("STATE");break;case 36:case 39:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 37:case 40:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),26;case 38:case 41:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),27;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";case 48:case 64:return this.popState(),"ID";case 50:return"STATE_DESCR";case 51:return 19;case 53:return this.popState(),this.pushState("struct"),20;case 55:return this.popState(),21;case 57:return this.begin("NOTE"),29;case 58:return this.popState(),this.pushState("NOTE_ID"),56;case 59:return this.popState(),this.pushState("NOTE_ID"),57;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 63:return"NOTE_TEXT";case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;case 66:return this.popState(),e.yytext=e.yytext.substr(2).trim(),31;case 67:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),31;case 68:case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return e.yytext=e.yytext.trim(),14;case 74:return 15;case 75:return 28;case 76:return 55;case 78:return"INVALID"}}),"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}}}();function w(){this.yy={}}return K.lexer=R,(0,o.K2)(w,"Parser"),w.prototype=K,K.Parser=w,new w}();a.parser=a;var l=a,c="state",h="relation",d="default",u="divider",p="fill:none",y="fill: #333",g="text",f="normal",m="rect",S="rectWithTitle",_="divider",b="roundedWithTitle",T="statediagram",k=`${T}-state`,E="transition",x=`${E} note-edge`,D=`${T}-note`,C=`${T}-cluster`,$=`${T}-cluster-alt`,v="parent",L="note",I="----",A=`${I}${L}`,K=`${I}${v}`,R=(0,o.K2)(((t,e="TB")=>{if(!t.doc)return e;let s=e;for(const i of t.doc)"dir"===i.stmt&&(s=i.value);return s}),"getDir"),w={getClasses:(0,o.K2)((function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()}),"getClasses"),draw:(0,o.K2)((async function(t,e,s,a){o.Rm.info("REF0:"),o.Rm.info("Drawing state diagram (v2)",e);const{securityLevel:l,state:c,layout:h}=(0,o.D7)();a.db.extract(a.db.getRootDocV2());const d=a.db.getData(),u=(0,i.A)(e,l);d.type=a.type,d.layoutAlgorithm=h,d.nodeSpacing=c?.nodeSpacing||50,d.rankSpacing=c?.rankSpacing||50,d.markers=["barb"],d.diagramId=e,await(0,n.XX)(d,u);r._K.insertTitle(u,"statediagramTitleText",c?.titleTopMargin??25,a.db.getDiagramTitle()),(0,i.P)(u,8,T,c?.useMaxWidth??!0)}),"draw"),getDir:R},O=new Map,N=0;function B(t="",e=0,s="",i=I){return`state-${t}${null!==s&&s.length>0?`${i}${s}`:""}-${e}`}(0,o.K2)(B,"stateDomId");var F=(0,o.K2)(((t,e,s,i,n,r,a,l)=>{o.Rm.trace("items",e),e.forEach((e=>{switch(e.stmt){case c:case d:z(t,e,s,i,n,r,a,l);break;case h:{z(t,e.state1,s,i,n,r,a,l),z(t,e.state2,s,i,n,r,a,l);const c={id:"edge"+N,start:e.state1.id,end:e.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:p,labelStyle:"",label:o.Y2.sanitizeText(e.description,(0,o.D7)()),arrowheadStyle:y,labelpos:"c",labelType:g,thickness:f,classes:E,look:a};n.push(c),N++}}}))}),"setupDoc"),P=(0,o.K2)(((t,e="TB")=>{let s=e;if(t.doc)for(const i of t.doc)"dir"===i.stmt&&(s=i.value);return s}),"getDir");function Y(t,e,s){if(!e.id||"</join></fork>"===e.id||"</choice>"===e.id)return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach((t=>{if(s.get(t)){const i=s.get(t);e.cssCompiledStyles=[...e.cssCompiledStyles,...i.styles]}})));const i=t.find((t=>t.id===e.id));i?Object.assign(i,e):t.push(e)}function G(t){return t?.classes?.join(" ")??""}function j(t){return t?.styles??[]}(0,o.K2)(Y,"insertOrUpdateNode"),(0,o.K2)(G,"getClassesFromDbInfo"),(0,o.K2)(j,"getStylesFromDbInfo");var z=(0,o.K2)(((t,e,s,i,n,r,a,l)=>{const c=e.id,h=s.get(c),T=G(h),E=j(h);if(o.Rm.info("dataFetcher parsedItem",e,h,E),"root"!==c){let s=m;!0===e.start?s="stateStart":!1===e.start&&(s="stateEnd"),e.type!==d&&(s=e.type),O.get(c)||O.set(c,{id:c,shape:s,description:o.Y2.sanitizeText(c,(0,o.D7)()),cssClasses:`${T} ${k}`,cssStyles:E});const h=O.get(c);e.description&&(Array.isArray(h.description)?(h.shape=S,h.description.push(e.description)):h.description?.length>0?(h.shape=S,h.description===c?h.description=[e.description]:h.description=[h.description,e.description]):(h.shape=m,h.description=e.description),h.description=o.Y2.sanitizeTextOrArray(h.description,(0,o.D7)())),1===h.description?.length&&h.shape===S&&("group"===h.type?h.shape=b:h.shape=m),!h.type&&e.doc&&(o.Rm.info("Setting cluster for XCX",c,P(e)),h.type="group",h.isGroup=!0,h.dir=P(e),h.shape=e.type===u?_:b,h.cssClasses=`${h.cssClasses} ${C} ${r?$:""}`);const I={labelStyle:"",shape:h.shape,label:h.description,cssClasses:h.cssClasses,cssCompiledStyles:[],cssStyles:h.cssStyles,id:c,dir:h.dir,domId:B(c,N),type:h.type,isGroup:"group"===h.type,padding:8,rx:10,ry:10,look:a};if(I.shape===_&&(I.label=""),t&&"root"!==t.id&&(o.Rm.trace("Setting node ",c," to be child of its parent ",t.id),I.parentId=t.id),I.centerLabel=!0,e.note){const t={labelStyle:"",shape:"note",label:e.note.text,cssClasses:D,cssStyles:[],cssCompilesStyles:[],id:c+A+"-"+N,domId:B(c,N,L),type:h.type,isGroup:"group"===h.type,padding:(0,o.D7)().flowchart.padding,look:a,position:e.note.position},s=c+K,r={labelStyle:"",shape:"noteGroup",label:e.note.text,cssClasses:h.cssClasses,cssStyles:[],id:c+K,domId:B(c,N,v),type:"group",isGroup:!0,padding:16,look:a,position:e.note.position};N++,r.id=s,t.parentId=s,Y(i,r,l),Y(i,t,l),Y(i,I,l);let d=c,u=t.id;"left of"===e.note.position&&(d=t.id,u=c),n.push({id:d+"-"+u,start:d,end:u,arrowhead:"none",arrowTypeEnd:"",style:p,labelStyle:"",classes:x,arrowheadStyle:y,labelpos:"c",labelType:g,thickness:f,look:a})}else Y(i,I,l)}e.doc&&(o.Rm.trace("Adding nodes children "),F(e,e.doc,s,i,n,!r,a,l))}),"dataFetcher"),U=(0,o.K2)((()=>{O.clear(),N=0}),"reset"),M="[*]",X="start",V=M,W="color",H="fill";function J(){return new Map}(0,o.K2)(J,"newClassesList");var q=[],Z=[],Q="LR",tt=[],et=J(),st=(0,o.K2)((()=>({relations:[],states:new Map,documents:{}})),"newDoc"),it={root:st()},nt=it.root,rt=0,ot=0,at=(0,o.K2)((t=>JSON.parse(JSON.stringify(t))),"clone"),lt=(0,o.K2)((t=>{o.Rm.info("Setting root doc",t),tt=t}),"setRootDoc"),ct=(0,o.K2)((()=>tt),"getRootDoc"),ht=(0,o.K2)(((t,e,s)=>{if(e.stmt===h)ht(t,e.state1,!0),ht(t,e.state2,!1);else if(e.stmt===c&&("[*]"===e.id?(e.id=s?t.id+"_start":t.id+"_end",e.start=s):e.id=e.id.trim()),e.doc){const t=[];let s,i=[];for(s=0;s<e.doc.length;s++)if(e.doc[s].type===u){const n=at(e.doc[s]);n.doc=at(i),t.push(n),i=[]}else i.push(e.doc[s]);if(t.length>0&&i.length>0){const s={stmt:c,id:(0,r.$C)(),type:"divider",doc:at(i)};t.push(at(s)),e.doc=t}e.doc.forEach((t=>ht(e,t,!0)))}}),"docTranslator"),dt=(0,o.K2)((()=>(ht({id:"root"},{id:"root",doc:tt},!0),{id:"root",doc:tt})),"getRootDocV2"),ut=(0,o.K2)((t=>{let e;e=t.doc?t.doc:t,o.Rm.info(e),yt(!0),o.Rm.info("Extract initial document:",e),e.forEach((t=>{switch(o.Rm.warn("Statement",t.stmt),t.stmt){case c:pt(t.id.trim(),t.type,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles);break;case h:xt(t.state1,t.state2,t.description);break;case"classDef":vt(t.id.trim(),t.classes);break;case"style":{const e=t.id.trim().split(","),s=t.styleClass.split(",");e.forEach((t=>{let e=gt(t);if(void 0===e){const s=t.trim();pt(s),e=gt(s)}e.styles=s.map((t=>t.replace(/;/g,"")?.trim()))}))}break;case"applyClass":It(t.id.trim(),t.styleClass)}}));const s=ft(),i=(0,o.D7)().look;U(),z(void 0,dt(),s,q,Z,!0,i,et),q.forEach((t=>{if(Array.isArray(t.label)){if(t.description=t.label.slice(1),t.isGroup&&t.description.length>0)throw new Error("Group nodes can only have label. Remove the additional description for node ["+t.id+"]");t.label=t.label[0]}}))}),"extract"),pt=(0,o.K2)((function(t,e=d,s=null,i=null,n=null,r=null,a=null,l=null){const c=t?.trim();if(nt.states.has(c)?(nt.states.get(c).doc||(nt.states.get(c).doc=s),nt.states.get(c).type||(nt.states.get(c).type=e)):(o.Rm.info("Adding state ",c,i),nt.states.set(c,{id:c,descriptions:[],type:e,doc:s,note:n,classes:[],styles:[],textStyles:[]})),i&&(o.Rm.info("Setting state description",c,i),"string"==typeof i&&Dt(c,i.trim()),"object"==typeof i&&i.forEach((t=>Dt(c,t.trim())))),n){const t=nt.states.get(c);t.note=n,t.note.text=o.Y2.sanitizeText(t.note.text,(0,o.D7)())}if(r){o.Rm.info("Setting state classes",c,r);("string"==typeof r?[r]:r).forEach((t=>It(c,t.trim())))}if(a){o.Rm.info("Setting state styles",c,a);("string"==typeof a?[a]:a).forEach((t=>At(c,t.trim())))}if(l){o.Rm.info("Setting state styles",c,a);("string"==typeof l?[l]:l).forEach((t=>Kt(c,t.trim())))}}),"addState"),yt=(0,o.K2)((function(t){q=[],Z=[],it={root:st()},nt=it.root,rt=0,et=J(),t||(0,o.IU)()}),"clear"),gt=(0,o.K2)((function(t){return nt.states.get(t)}),"getState"),ft=(0,o.K2)((function(){return nt.states}),"getStates"),mt=(0,o.K2)((function(){o.Rm.info("Documents = ",it)}),"logDocuments"),St=(0,o.K2)((function(){return nt.relations}),"getRelations");function _t(t=""){let e=t;return t===M&&(rt++,e=`${X}${rt}`),e}function bt(t="",e=d){return t===M?X:e}function Tt(t=""){let e=t;return t===V&&(e=`end${++rt}`),e}function kt(t="",e=d){return t===V?"end":e}function Et(t,e,s){let i=_t(t.id.trim()),n=bt(t.id.trim(),t.type),r=_t(e.id.trim()),a=bt(e.id.trim(),e.type);pt(i,n,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),pt(r,a,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),nt.relations.push({id1:i,id2:r,relationTitle:o.Y2.sanitizeText(s,(0,o.D7)())})}(0,o.K2)(_t,"startIdIfNeeded"),(0,o.K2)(bt,"startTypeIfNeeded"),(0,o.K2)(Tt,"endIdIfNeeded"),(0,o.K2)(kt,"endTypeIfNeeded"),(0,o.K2)(Et,"addRelationObjs");var xt=(0,o.K2)((function(t,e,s){if("object"==typeof t)Et(t,e,s);else{const i=_t(t.trim()),n=bt(t),r=Tt(e.trim()),a=kt(e);pt(i,n),pt(r,a),nt.relations.push({id1:i,id2:r,title:o.Y2.sanitizeText(s,(0,o.D7)())})}}),"addRelation"),Dt=(0,o.K2)((function(t,e){const s=nt.states.get(t),i=e.startsWith(":")?e.replace(":","").trim():e;s.descriptions.push(o.Y2.sanitizeText(i,(0,o.D7)()))}),"addDescription"),Ct=(0,o.K2)((function(t){return":"===t.substring(0,1)?t.substr(2).trim():t.trim()}),"cleanupLabel"),$t=(0,o.K2)((()=>"divider-id-"+ ++ot),"getDividerId"),vt=(0,o.K2)((function(t,e=""){et.has(t)||et.set(t,{id:t,styles:[],textStyles:[]});const s=et.get(t);null!=e&&e.split(",").forEach((t=>{const e=t.replace(/([^;]*);/,"$1").trim();if(RegExp(W).exec(t)){const t=e.replace(H,"bgFill").replace(W,H);s.textStyles.push(t)}s.styles.push(e)}))}),"addStyleClass"),Lt=(0,o.K2)((function(){return et}),"getClasses"),It=(0,o.K2)((function(t,e){t.split(",").forEach((function(t){let s=gt(t);if(void 0===s){const e=t.trim();pt(e),s=gt(e)}s.classes.push(e)}))}),"setCssClass"),At=(0,o.K2)((function(t,e){const s=gt(t);void 0!==s&&s.styles.push(e)}),"setStyle"),Kt=(0,o.K2)((function(t,e){const s=gt(t);void 0!==s&&s.textStyles.push(e)}),"setTextStyle"),Rt=(0,o.K2)((()=>Q),"getDirection"),wt=(0,o.K2)((t=>{Q=t}),"setDirection"),Ot=(0,o.K2)((t=>t&&":"===t[0]?t.substr(1).trim():t.trim()),"trimColon"),Nt=(0,o.K2)((()=>{const t=(0,o.D7)();return{nodes:q,edges:Z,other:{},config:t,direction:R(dt())}}),"getData"),Bt={getConfig:(0,o.K2)((()=>(0,o.D7)().state),"getConfig"),getData:Nt,addState:pt,clear:yt,getState:gt,getStates:ft,getRelations:St,getClasses:Lt,getDirection:Rt,addRelation:xt,getDividerId:$t,setDirection:wt,cleanupLabel:Ct,lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},logDocuments:mt,getRootDoc:ct,setRootDoc:lt,getRootDocV2:dt,extract:ut,trimColon:Ot,getAccTitle:o.iN,setAccTitle:o.SV,getAccDescription:o.m7,setAccDescription:o.EI,addStyleClass:vt,setCssClass:It,addDescription:Dt,setDiagramTitle:o.ke,getDiagramTitle:o.ab},Ft=(0,o.K2)((t=>`\ndefs #statediagram-barbEnd {\n    fill: ${t.transitionColor};\n    stroke: ${t.transitionColor};\n  }\ng.stateGroup text {\n  fill: ${t.nodeBorder};\n  stroke: none;\n  font-size: 10px;\n}\ng.stateGroup text {\n  fill: ${t.textColor};\n  stroke: none;\n  font-size: 10px;\n\n}\ng.stateGroup .state-title {\n  font-weight: bolder;\n  fill: ${t.stateLabelColor};\n}\n\ng.stateGroup rect {\n  fill: ${t.mainBkg};\n  stroke: ${t.nodeBorder};\n}\n\ng.stateGroup line {\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n}\n\n.transition {\n  stroke: ${t.transitionColor};\n  stroke-width: 1;\n  fill: none;\n}\n\n.stateGroup .composit {\n  fill: ${t.background};\n  border-bottom: 1px\n}\n\n.stateGroup .alt-composit {\n  fill: #e0e0e0;\n  border-bottom: 1px\n}\n\n.state-note {\n  stroke: ${t.noteBorderColor};\n  fill: ${t.noteBkgColor};\n\n  text {\n    fill: ${t.noteTextColor};\n    stroke: none;\n    font-size: 10px;\n  }\n}\n\n.stateLabel .box {\n  stroke: none;\n  stroke-width: 0;\n  fill: ${t.mainBkg};\n  opacity: 0.5;\n}\n\n.edgeLabel .label rect {\n  fill: ${t.labelBackgroundColor};\n  opacity: 0.5;\n}\n.edgeLabel {\n  background-color: ${t.edgeLabelBackground};\n  p {\n    background-color: ${t.edgeLabelBackground};\n  }\n  rect {\n    opacity: 0.5;\n    background-color: ${t.edgeLabelBackground};\n    fill: ${t.edgeLabelBackground};\n  }\n  text-align: center;\n}\n.edgeLabel .label text {\n  fill: ${t.transitionLabelColor||t.tertiaryTextColor};\n}\n.label div .edgeLabel {\n  color: ${t.transitionLabelColor||t.tertiaryTextColor};\n}\n\n.stateLabel text {\n  fill: ${t.stateLabelColor};\n  font-size: 10px;\n  font-weight: bold;\n}\n\n.node circle.state-start {\n  fill: ${t.specialStateColor};\n  stroke: ${t.specialStateColor};\n}\n\n.node .fork-join {\n  fill: ${t.specialStateColor};\n  stroke: ${t.specialStateColor};\n}\n\n.node circle.state-end {\n  fill: ${t.innerEndBackground};\n  stroke: ${t.background};\n  stroke-width: 1.5\n}\n.end-state-inner {\n  fill: ${t.compositeBackground||t.background};\n  // stroke: ${t.background};\n  stroke-width: 1.5\n}\n\n.node rect {\n  fill: ${t.stateBkg||t.mainBkg};\n  stroke: ${t.stateBorder||t.nodeBorder};\n  stroke-width: 1px;\n}\n.node polygon {\n  fill: ${t.mainBkg};\n  stroke: ${t.stateBorder||t.nodeBorder};;\n  stroke-width: 1px;\n}\n#statediagram-barbEnd {\n  fill: ${t.lineColor};\n}\n\n.statediagram-cluster rect {\n  fill: ${t.compositeTitleBackground};\n  stroke: ${t.stateBorder||t.nodeBorder};\n  stroke-width: 1px;\n}\n\n.cluster-label, .nodeLabel {\n  color: ${t.stateLabelColor};\n  // line-height: 1;\n}\n\n.statediagram-cluster rect.outer {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state .divider {\n  stroke: ${t.stateBorder||t.nodeBorder};\n}\n\n.statediagram-state .title-state {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-cluster.statediagram-cluster .inner {\n  fill: ${t.compositeBackground||t.background};\n}\n.statediagram-cluster.statediagram-cluster-alt .inner {\n  fill: ${t.altBackground?t.altBackground:"#efefef"};\n}\n\n.statediagram-cluster .inner {\n  rx:0;\n  ry:0;\n}\n\n.statediagram-state rect.basic {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state rect.divider {\n  stroke-dasharray: 10,10;\n  fill: ${t.altBackground?t.altBackground:"#efefef"};\n}\n\n.note-edge {\n  stroke-dasharray: 5;\n}\n\n.statediagram-note rect {\n  fill: ${t.noteBkgColor};\n  stroke: ${t.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n.statediagram-note rect {\n  fill: ${t.noteBkgColor};\n  stroke: ${t.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n\n.statediagram-note text {\n  fill: ${t.noteTextColor};\n}\n\n.statediagram-note .nodeLabel {\n  color: ${t.noteTextColor};\n}\n.statediagram .edgeLabel {\n  color: red; // ${t.noteTextColor};\n}\n\n#dependencyStart, #dependencyEnd {\n  fill: ${t.lineColor};\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n}\n\n.statediagramTitleText {\n  text-anchor: middle;\n  font-size: 18px;\n  fill: ${t.textColor};\n}\n`),"getStyles")},96474:(t,e,s)=>{s.d(e,{A:()=>r,P:()=>o});var i=s(10009),n=s(20007),r=(0,i.K2)(((t,e)=>{let s;"sandbox"===e&&(s=(0,n.Ltv)("#i"+t));return("sandbox"===e?(0,n.Ltv)(s.nodes()[0].contentDocument.body):(0,n.Ltv)("body")).select(`[id="${t}"]`)}),"getDiagramElement"),o=(0,i.K2)(((t,e,s,n)=>{t.attr("class",s);const{width:r,height:o,x:c,y:h}=a(t,e);(0,i.a$)(t,o,r,n);const d=l(c,h,r,o,e);t.attr("viewBox",d),i.Rm.debug(`viewBox configured: ${d} with padding: ${e}`)}),"setupViewPortForSVG"),a=(0,i.K2)(((t,e)=>{const s=t.node()?.getBBox()||{width:0,height:0,x:0,y:0};return{width:s.width+2*e,height:s.height+2*e,x:s.x,y:s.y}}),"calculateDimensionsWithPadding"),l=(0,i.K2)(((t,e,s,i,n)=>`${t-n} ${e-n} ${s} ${i}`),"createViewBox")}}]);