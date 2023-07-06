/////////////////////////////////////////////////~~~Str : mapview
class mapView extends HTMLElement{#imv;#ime;#conNme;#ttl;
constructor(){super(); 
let s=this.attachShadow({mode:"open"});
let imc=document.createElement("div");
let imv=document.createElement("iframe");
let ime=document.createElement("div");
let ttl=document.createElement("div");
//////////////////////////////
ttl.innerText="Map of";
ime.innerText="No Map Available";
//////////////////////////////
ttl.style.cssText="color:#018f9e;font-size:1.3em;padding:3px";
ime.style.cssText="display:block;background:#7775;color:#000;width:100%;height:100%;text-align:center;vertical-align: middle;line-height:300px";
//imv.style.cssText="display:none";
imc.style.cssText="height:300px;width:300px";
//////////////////////////////
imv.width="100%";
imv.height="100%";
//////////////////////////////
this.#imv=imv;this.#ttl=ttl;this.#ime=ime;
//////////////////////////////
imc.appendChild(imv);
imc.appendChild(ime);
s.appendChild(ttl);
s.appendChild(imc);
}

dispMbEh(){this.#ime.style.display="none";this.#imv.style.display="block"; }
dispMhEb(){this.#ime.style.display="block";this.#imv.style.display="none";this.#ttl.innerText="No Title" }

connectedCallback(){if(this.hasAttribute("countryName"))this.countryName=this.getAttribute("countryName");else this.dispMhEb();
if(this.hasAttribute("title"))this.#ttl.innerText=this.getAttribute("title");
}

set countryName(a){if(a==""){this.dispMhEb();return; };this.dispMbEh();this.#conNme=a;this.#imv.src="https://maps.google.com/maps?q="+a+"&t=&z=3&ie=UTF8&iwloc=&output=embed";this.title="Map of "+a; }
get countryName(){return this.#conNme; }

set title(a){this.#ttl.innerText=a; }
get title(){return this.innerText; }
}
/////////////////////////////////////////////////~~~End : mapview
/////////////////////////////////////////////////~~~Str : flagview

class flagView extends HTMLElement{#imv;#ime;#conFlg;#ttl;#imc;
constructor(){super(); 
let s=this.attachShadow({mode:"open"});
let imc=document.createElement("div");
let imv=document.createElement("img");
let ime=document.createElement("div");
let ttl=document.createElement("div");
//////////////////////////////
ttl.innerText="Map of";
ime.innerText="No Image Available";
//////////////////////////////
ttl.style.cssText="color:#018f9e;font-size:1.3em;padding:3px";
ime.style.cssText="display:block;background:#7775;color:#000;width:100%;height:100%;text-align:center;vertical-align: middle;line-height:200px";
//imv.style.cssText="display:none";
imc.style.cssText="height:200px;width:300px";
imv.style.cssText="width:100%;height:100%";
//////////////////////////////

//////////////////////////////
this.#imv=imv;this.#ttl=ttl;this.#ime=ime;this.#imc=imc;
//////////////////////////////
imc.appendChild(imv);
imc.appendChild(ime);
s.appendChild(ttl);
s.appendChild(imc);
}

dispMbEh(){this.#ime.style.display="none";this.#imv.style.display="block"; }
dispMhEb(){this.#ime.style.display="block";this.#imv.style.display="none";this.title="No Title" }

connectedCallback(){if(this.hasAttribute("countryFlag"))this.countryFlag=this.getAttribute("countryFlag");else this.dispMhEb();
if(this.hasAttribute("title"))this.#ttl.innerText=this.getAttribute("title");
}

set countryFlag(a){if(a==""||a==undefined){this.dispMhEb();return; };this.dispMbEh();this.#conFlg=a;this.#imv.src=a; }
get countryFlag(){return this.#conFlg; }

set title(a){this.#ttl.innerText=a; }
get title(){return this.innerText; }

set imgHeight(a){this.#imc.style.height=a; }
get imgHeight(){return this.#imc.style.height; }
}
/////////////////////////////////////////////////~~~End : flagview
/////////////////////////////////////////////////~~~Str : description

class descCon extends HTMLElement{#ttl;#dsc;
constructor(){super();
let s=this.attachShadow({mode:"open"});
let ttl=document.createElement("div");
let dsc=document.createElement("div");
//////////////////////////////////
ttl.style.cssText="color:#018f9e;padding:3px;font-size:1.3em";
dsc.style.cssText="margin:10px";
//////////////////////////////////
this.#ttl=ttl;this.#dsc=dsc;
//////////////////////////////////
s.appendChild(ttl);
s.appendChild(dsc);
}

connectedCallback(){if(this.hasAttribute("description"))this.description=this.getAttribute("description");else this.description="<span style='color:red'>No description</span>";
if(this.hasAttribute("title"))this.title=this.getAttribute("title");else this.title="No Country Description"; }

set description(a){if(a==null)this.#dsc.innerHTML="<span style='color:red'>No description</span>";else this.#dsc.innerHTML=a; }
get description(){return this.#dsc.innerHTML; }

set title(a){if(a==null)this.#ttl.innerHTML="No Title";else this.#ttl.innerText=a; }
get title(){return this.#ttl.innerText; }
}
/////////////////////////////////////////////////~~~End : description
customElements.define("map-view",mapView);
customElements.define("flag-view",flagView);
customElements.define("desc-con",descCon);