import{getAlignImage}from'../../image-alignment';export default function(a){let b,c='top',d='middle',e='bottom',f='left',g='right',h=function(a){return function(){a.hide();for(let b=0,c=a._.gridElem&&a._.gridElem.length;b<c;b++)a._.gridElem[b].remove();a._.gridElem=[],a._attr({src:a._._src}),setTimeout(()=>{a.show()},100)}},i=function(a,c,d){return function(){let e,f,g,h=j(a._.imageGridAttr,c),i=1,k=1,l=1;if(h.tileInfo&&(i=h.tileInfo.xCount,k=l=h.tileInfo.yCount,g=h.y,delete h.tileInfo),a._.gridElem){for(f=0;f<a._.gridElem.length;f++)a._.gridElem[f].remove();a._.gridElem.length=0}for(f=0;i&&h.width&&h.height;)l--,0===f?a.attr(d?Object.assign(h,{applysrc:a._._src}):h):(e=a.clone().attr({x:h.x,y:h.y}),a._.gridElem.push(e.follow(a,b,'after'))),h.y+=h.height,0===l&&(l=k,i--,h.x+=h.width,h.y=g),f++}},j=function(a,b){let c;if(a){let{displayMode:d,vAlign:e,hAlign:f,scale:g,canvasBorderWidth:h,canvasWidth:i,canvasHeight:j}=a,k=b.width*(g/100),l=b.height*(g/100);c=getAlignImage(e,f,d,k,l,i,j,h,i-2*h,j-2*h)}return c||{x:0,y:0,width:b.width,height:b.height}};a.define&&a.define([{name:'imagegrid',imagegrid:function(){let c,d,e=this,f=arguments,g=f.length-1,j=f[g];return j&&j.constructor===a.el.constructor?f[g]=b:j=b,c=new Image,d=e.image(j),d._.gridElem=[],d._.refImage=c,d._attr=d.attr,d.attr=function(a,c){let e=Array.isArray(a),f=!e&&'object'==typeof a,g='string'==typeof a;if(e&&(a=a[0],f='object'==typeof a),f){let b=Object.assign({},a),c=b&&b.src,e=b&&b.applysrc;delete b.src,delete b.applysrc,c&&delete d._._src,d._attr(b),c&&d._attr({_src:c}),e&&d._attr({src:e})}else{if(a===b&&c===b)return this.attrs;if(c===b)return this.attrs[a];g&&c&&('src'===a?d._attr({_src:c}):'applysrc'===a?d._attr({src:c}):d._attr({name:c}))}return this},c.onload=i(d,c,!0),c.onerror=h(d),d},ca:{imagegrid:function(a,b,h,j=100,k=0,l=0,m=0){let n=this;a==='tile'||a==='fill'||a==='fit'?(b!==c&&b!==d&&b!==e&&(b=d),h!==f&&h!==d&&h!==g&&(h=d)):(b!==c&&b!==d&&b!==e&&(b=c),h!==f&&h!==d&&h!==g&&(h=f)),n._.imageGridAttr={displayMode:a,vAlign:b,hAlign:h,scale:j,canvasBorderWidth:k,canvasWidth:l,canvasHeight:m},this._._src&&i(n,n._.refImage)()},_src:function(a){return this._.refImage.src=a,this._._src=a,{_src:a}}}}])}