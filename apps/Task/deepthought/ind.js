
///////////////////////////////////////////////////////////~~~Str ::: SideNav
class SideNav extends HTMLElement {#nvd;#ass;#sls=false;
constructor(){super();
let s=this.attachShadow({mode: "closed"});
let tbr=document.createElement("div");
let nvd=document.createElement("span");
let tsn=document.createElement("div");
let ass=document.createElement("div");
let sld=document.createElement("span");
let mn=document.createElement("div");
//let img=document.createElement("img");
////////////////////
nvd.innerText="Title";
tsn.innerText="Task Name";
sld.innerText="≡"
//img.src="imgs/tln.png"
////////////////////
nvd.style.cssText="display:inline-block;background-color:#000;color:#fff;padding:5px;text-align:center;width:70%";
tbr.style.cssText="width:100%;background:#000";
sld.style.cssText="width:calc(30% - 10px);display:inline-block;text-align:center;font-size:1.3em;color:#fff;cursor:pointer";
tsn.style.cssText="text-align:center;font-weight:600;padding:10px;";
ass.style.cssText="padding:0px 20px;";
mn.style.cssText="width:20%;background:#fff;border-radius:3px;box-shadow:5px 5px 5px #7555;background-color:#fff;z-index:2";
///////////////////
tbr.appendChild(nvd);
tbr.appendChild(sld);
///////////////////
mn.appendChild(tbr);
mn.appendChild(tsn);
mn.appendChild(ass);
s.appendChild(mn);
////////////////////
this.#nvd=nvd;
this.#ass=ass;
///////////////////
sld.onclick=()=>{if(this.#sls)this.slideOn();else this.slideOf();}
}
slideOn(){this.#sls=false;this.style.left="-14%"; }
slideOf(){this.#sls=true;this.style.left="5px"; }

connectedCallback(){this.slideOn();this.style.position="absolute";this.style.width="100%";this.style.transition="0.7s";
this.#nvd.innerText=this.getAttribute("title")||"Title";

}

addAsset=(a,c)=>{let b=document.createElement("div");b.assetId=c;
b.addEventListener("click",function(){window.location.hash="assetId_"+this.assetId; });
b.style.cssText="border-top:2px solid #ccc;text-align:center;padding:5px 0;cursor:pointer;background:#fff";b.innerHTML="&#8226; "+a;
this.#ass.appendChild(b); }

};


///////////////////////////////////////////////////////////~~~End ::: SideNav
///////////////////////////////////////////////////////////~~~Str ::: Assets
class Assets extends HTMLElement{#twn;#bsu;#cnt;#mcn;#sls=false;#cnt_height;#asid=null;
constructor(){super();
let s=this.attachShadow({mode:"open"});

let twn=document.createElement("div");
let cnt=document.createElement("div");
let bsu=document.createElement("div");
let mcn=document.createElement("div");
let mw=document.createElement("div");
//////////////////////////////////
twn.innerText="Hi";
cnt.innerText="How are you\n Yes";
mcn.innerText="Main Content";
//bsu.innerText=">";
//////////////////////////////////
twn.style.cssText="background:#000;color:#fff;padding:5px;text-align:center;border-radius:7px 7px 0 0;";
bsu.style.cssText="float:right;margin:10px;border: solid black;border-width: 0 3px 3px 0;display: inline-block;padding: 3px;transform: rotate(45deg);-webkit-transform: rotate(45deg);cursor:pointer;transition:all 0.7s ease-in-out";
cnt.style.cssText="overflow:hidden;padding:1px 20px";
//mcn.style.cssText="max-height:617px;";
mw.style.cssText="border-radius:7px;width:40%;display:inline-block;box-shadow:0 0 15px #555;margin-top:30px";
//////////////////////////////////
bsu.onclick=()=>{if(this.#sls)this.slideUp();else this.slideDw(); }
/////////////////////////////////
mw.appendChild(twn);
mw.appendChild(mcn);
mw.appendChild(cnt);
mw.appendChild(bsu);
s.appendChild(mw);
//////////////////////////////////
this.#bsu=bsu;this.#cnt=cnt;this.#twn=twn;this.#mcn=mcn;
}

connectedCallback(){this.#cnt_height=this.#cnt.offsetHeight+10;this.slideUp();
if(this.hasAttribute("title"))this.#twn.innerText=this.getAttribute("title");
if(this.hasAttribute("description"))this.#cnt.innerText=this.getAttribute("description");
if(this.hasAttribute("content"))this.#mcn.innerHTML=this.getAttribute("content");
}

set content(a){this.#mcn.innerHTML=a; }
set appendContent(a){this.#mcn.appendChild(a); }
set replaceContent(a){this.#mcn.innerText="";this.#mcn.appendChild(a); }
set title(a){this.#twn.innerText=a; }
set description(a){this.#cnt.innerText=a; }
set assetId(a){this.#asid=a; }

get content(){return this.#mcn.innerHTML=a; }
get title(){return this.#twn.innerText; }
get description(){return this.#cnt.innerText; }
get assetId(){return this.#asid;}

slideUp(){this.#sls=false;this.#cnt_height=this.#cnt.offsetHeight;this.#cnt.style.height="0px";
this.#cnt.style.transition="all 0.7s ease-in-out";
this.#bsu.style.transform="rotate(45deg)";this.#bsu.style.webkitTransform="rotate(45deg)"; }
slideDw(){this.#sls=true;this.#cnt.style.height="auto";let h=this.#cnt.offsetHeight;this.#cnt.style.height="0px";
this.#cnt.offsetHeight;this.#cnt.style.transition="all 0.7s ease-in-out";this.#cnt.style.height=h+"px";
this.#bsu.style.transform="rotate(-135deg)";this.#bsu.style.webkitTransform="rotate(-135deg)"; }


//////////////////////////


//////////////////////////

}
///////////////////////////////////////////////////////////~~~End ::: Assets
///////////////////////////////////////////////////////////~~~Str ::: TogMenu
class TogMenu extends HTMLElement{#twn;#bsu;#cnt;#mcn;#ttl;#sls=false;#cnt_height;
constructor(){super();
let s=this.attachShadow({mode:"open"});

let twn=document.createElement("div");
let ttl=document.createElement("span");
let bsu=document.createElement("span");
let mcn=document.createElement("div");
let mw=document.createElement("div");
//////////////////////////////////
ttl.innerText="Title";
mcn.innerHTML="wait";
//bsu.innerText=">";
//////////////////////////////////
twn.style.cssText="background:#fff;color:#000;padding:5px;border-radius:7px 7px 0 0;";
bsu.style.cssText="float:right;margin-right:5px;margin-top:5px;border: solid black;border-width: 0 3px 3px 0;display: inline-block;padding: 3px;transform: rotate(45deg);-webkit-transform: rotate(45deg);cursor:pointer;transition:all 0.7s ease-in-out";
mcn.style.cssText="overflow:hidden;";
mw.style.cssText="border-radius:7px;height:inherit;width:inherit;margin:inherit;padding:inherit;box-shadow:0 0 5px #555;";
ttl.style.cssText="display:inline-block";
//////////////////////////////////
bsu.onclick=()=>{if(this.#sls)this.slideUp();else this.slideDw(); }
/////////////////////////////////
mw.appendChild(twn);
mw.appendChild(mcn);
twn.appendChild(ttl);
twn.appendChild(bsu);
s.appendChild(mw);
//////////////////////////////////
this.#bsu=bsu;this.#cnt=mcn;this.#twn=twn;this.#mcn=mcn;this.#ttl=ttl;
}

connectedCallback(){this.#cnt_height=this.#cnt.offsetHeight+10;
if(this.hasAttribute("state"))this.getAttribute("state")=="up"?this.slideUp():this.slideDw();else this.slideUp();
if(this.hasAttribute("title"))this.#ttl.innerText=this.getAttribute("title");
if(this.hasAttribute("content"))this.#mcn.innerHTML=this.getAttribute("content");
}

set content(a){this.#mcn.innerHTML=a; }
set appendContent(a){this.#mcn.appendChild(a); }
set replaceContent(a){this.#mcn.innerText="";this.#mcn.appendChild(a); }
set title(a){this.#ttl.innerText=a; }
set contentPosition(a){this.#mcn.style.position=a; }

get content(){return this.#mcn.innerHTML=a; }
get title(){return this.#ttl.innerText; }

slideUp(){this.#sls=false;this.#cnt_height=this.#cnt.offsetHeight;this.#cnt.style.height="0px";
this.#cnt.style.transition="all 0.7s ease-in-out";
this.#bsu.style.transform="rotate(45deg)";this.#bsu.style.webkitTransform="rotate(45deg)"; }
slideDw(){this.#sls=true;this.#cnt.style.height="auto";let h=this.#cnt.offsetHeight;this.#cnt.style.height="0px";
this.#cnt.offsetHeight;this.#cnt.style.transition="all 0.7s ease-in-out";this.#cnt.style.height=h+"px";
this.#bsu.style.transform="rotate(-135deg)";this.#bsu.style.webkitTransform="rotate(-135deg)"; }


//////////////////////////


//////////////////////////

}

///////////////////////////////////////////////////////////~~~End ::: TogMenu
///////////////////////////////////////////////////////////~~~Str ::: Assets_Input

class Inp_Asset extends HTMLElement{#inp;
constructor(){super();
let s=this.attachShadow({mode:"closed"});
let inp=document.createElement("textarea");
let mw=document.createElement("div");
//////////////////////////////
inp.style.cssText="box-radius:4px;box-shadow:0 0 15px #555;width:100%;height:inherit; resize: none;border-radius:10px; ";
mw.style.cssText="width:inherit;padding:inherit;margin:inherit;height:inherit;";
//////////////////////////////
inp.placeholder="Reflect as per given gideline";
/////////////////////////////
this.#inp=inp;
/////////////////////////////
mw.appendChild(inp);
s.appendChild(mw);
} 

connectedCallback(){if(this.hasAttribute("placeholder"))this.#inp.placeholder=this.getAttribute("placeholder"); }

set placeholder(a){this.#inp.placeholder=a; }
get placeholder(){return this.#inp.placeholder; }

}
///////////////////////////////////////////////////////////~~~End ::: Assets_Input
///////////////////////////////////////////////////////////~~~Str ::: Assets_Input_with_window

class Inp_AssetWT extends HTMLElement{#ttl;#inp;constructor(){super();
let s=this.attachShadow({mode:"closed"});
let ttl=document.createElement("div");
let mw=document.createElement("div");
let inp=document.createElement("inp-asset");
////////////////////////////////
mw.style.cssText="border:solid #e0e0e0 2px;background-color:#eee;border-radius:4px;margin:0px;padding:0px 3px;height:inherit;";
ttl.style.cssText="display:block;padding:3px;height:25px";
inp.style.cssText="width:auto;width:calc(100% - 5px);height:calc(100% - 20px);margin:0px";
////////////////////////////////
ttl.innerText="Title";
inp.placeholder="Ent text her";
////////////////////////////////
this.#ttl=ttl;this.#inp=inp;
////////////////////////////////
mw.appendChild(ttl);
mw.appendChild(inp);
s.appendChild(mw);

} 

connectedCallback(){if(this.hasAttribute("title"))this.#ttl.innerText=this.getAttribute("title");
if(this.hasAttribute("placeholder"))this.#inp.placeholder=this.getAttribute("placeholder");
}

get title(){return this.#ttl.innerText; }
set title(a){this.#ttl.innerText=a; }

}
///////////////////////////////////////////////////////////~~~End ::: Assets_Input_with_window
///////////////////////////////////////////////////////////~~~Str ::: Assets_Input_Tab
class Inp_AssetTab extends HTMLElement{
constructor(){super();let s=this.attachShadow({mode:"closed"});
//////////////////////////
//let mw=document.createElement("img");
//mw.src="/imgs/thread_a.png";
//mw.style.cssText="width:100%;display:block;margin:inherit;padding:inherit;height:inherit";
//s.appendChild(mw);
//////////////////////////
let trt=document.createElement("inp-assetwt");
let si1=document.createElement("inp-assetwt");
let trd=document.createElement("div");
let trc=document.createElement("tog-menu");
let slc=document.createElement("tog-menu");
let slp=document.createElement("tog-menu");
let slcn=document.createElement("div");
let str=document.createElement("div");
let smt=document.createElement("inp-assetwt");
let tcr=document.createElement("div");
let mw=document.createElement("div");

//////////////////////////
trc.content='';
trc.title="Thread A";
smt.title="Summary for Thread A";
slc.title="select cateogary";
slp.title="select process";
trt.title="sub thread 1";
tcr.innerText="=Thread Credit";
//////////////////////////
trc.setAttribute("state","dw");
//slc.contentPosition="absolute";
//slp.contentPosition="absolute";
//////////////////////////
trd.style.cssText="border:solid #bbb 2px;background:#f0f0f0;padding:3px";
trt.style.cssText="display:inline-block;width:40%;height:90px;margin-left:10%";
si1.style.cssText="display:inline-block;width:40%;height:90px;margin-left:5%";
trc.style.cssText="margin-top:1px;display:flex;padding:10px;width:calc(100% - 20px);position:sticky;";
slc.style.cssText="display:inline-block;width:131.5px;margin:0;padding:0;";
slp.style.cssText="display:inline-block;width:120px;margin-left:3.5px;padding:0;left:0px";
slcn.style.cssText="width:255px;padding:3px;margin-top:5px;";
//smt.style.cssText="display:block";
mw.style.cssText="height:100%;";
//////////////////////////
/////////////////////////
trc.appendContent=si1;
trc.appendContent=trt;
slcn.appendChild(slc);
slcn.appendChild(slp);
trc.appendContent=slcn;
trc.appendContent=smt;
//trc.appendContent=slp;

mw.appendChild(trd);
mw.appendChild(str);
mw.appendChild(trc);
//mw.appendChild(trd);
s.appendChild(mw);
}

};

///////////////////////////////////////////////////////////~~~End ::: Assets_Input_Tab
///////////////////////////////////////////////////////////~~~Str ::: Assets_Manager
class AssetManager extends HTMLElement{#ttl;#ast;
#left="";#rigt="";#mid="";#lastHolded=null;#AssetCounter=0;
constructor(){super();
let s=this.attachShadow({mode:"open"});
let mw=document.createElement("div");
let ttl=document.createElement("div");
let ast=document.createElement("div");
///////////////////////////////////////////
ttl.innerText="Title";
///////////////////////////////////////////
ttl.style.cssText="font-weight:700;text-align:center";
ast.style.cssText="width:100%;height:100%;padding:30px 0px;";
//mw.style.cssText="display:table;";
///////////////////////////////////////////
///////////////////////////////////////////
mw.appendChild(ttl);
mw.appendChild(ast);
s.appendChild(mw);
///////////////////////////////////////////
this.#ttl=ttl;this.#ast=ast;

}

addAsset(a,ai){this.#AssetCounter++;a.style.cssText="width:40%;margin-left:30%;padding:0; top:0;vertical-align: top;";
if(this.#lastHolded!=null)this.#lastHolded.style.marginLeft="6.7%";
this.#lastHolded=a;//a.assetId=ai;a.setAttribute("id","assetid_"+ai);
//a.classList.add("assetId_"+ai);alert(document.getElementsByClassName("assetId_6234").length);
this.#ast.appendChild(a); }

connectedCallback(){
if(this.hasAttribute("title"))this.#ttl.innerText=this.getAttribute("title");
}

set title(a){this.#ttl.innerText=a; }
get title(){return this.innerText; }

}
///////////////////////////////////////////////////////////~~~End ::: Assets_Manager


customElements.define("side-nav",SideNav);
customElements.define("assets-m",Assets);
customElements.define("inp-asset",Inp_Asset);
customElements.define("inp-assetwt",Inp_AssetWT);
customElements.define("inp-assettab",Inp_AssetTab);
customElements.define("tog-menu",TogMenu);
customElements.define("asset-manager",AssetManager);