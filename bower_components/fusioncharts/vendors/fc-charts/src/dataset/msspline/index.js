import LineDataset from'../line';import{toRaphaelColor}from'../../../../fc-core/src/lib';import _calculateMaxMin from'../_internal/spline.helper';import{addDep}from'../../../../fc-core/src/dependency-manager';import{getSplinePath}from'../_internal/msspline-path';import mssplineAnimation from'./index.animation';var UNDEF;addDep({name:'mssplineAnimation',type:'animationRule',extension:mssplineAnimation});class MSSplineDataset extends LineDataset{getType(){return'dataset'}getName(){return'spline'}configureAttributes(a){super.configureAttributes&&super.configureAttributes(a),_calculateMaxMin.call(this)}getDataLimits(){return{max:this.config.maxValue,min:this.config.minValue}}drawCommonElements(){var a,b,c,d,e,f,g,h=this,j=h.components.data,k=h.config,l=+h.getFromEnv('chartConfig').connectnulldata,m=h.getFromEnv('xAxis'),n=h.getFromEnv('yAxis'),o=k.lineDashStyle,p=k.linethickness,q=[],r=null,s={color:k.linecolor,alpha:k.alpha},t={x:m.getLimit(),y:n.getLimit()},u=h.getState('visible')?j.length:0,v=k.lineOb||{},w=[],x=this.getFromEnv('chart'),y=/area/ig.test(x.defaultDatasetType);for(t.x.minPixel=m.getPixel(t.x.min),t.x.maxPixel=m.getPixel(t.x.max),t.y.minPixel=n.getPixel(t.y.min),t.y.maxPixel=n.getPixel(t.y.max),t.y.base=n.getPixel(0),t.x.base=m.getPixel(0),c=0;c<u;++c)if(d=j[c],!!d){if(e=d.config||{},f=e.setValue,e._Pbx=UNDEF,e._Pby=UNDEF,w[c]={config:{_Px:e._Px,_Py:e._Py,setValue:e.setValue}},null===f||f===UNDEF){l||(r=null);continue}q.push({x:e._Px,y:e._Py,lastYPos:r,lastXPos:a}),r=e._Py,a=e._Px}k.pathStartIndex=0,k.pathEndIndex=g,b='default',v[b]=v[b]||{},v[b].used=!0,v[b].path=[{pathArr:getSplinePath(q,n.getPixel(n.getAxisBase()),x.config.minimizetendency,y).closedPath,path2Arr:[],getPathArr:function(){var a=this,b=a.pathArr,c=a.path2Arr;return b.length||c.length?b.concat(c):[]}}],v[b].attr={"stroke-dasharray":o,"stroke-width":p,stroke:toRaphaelColor(s),"stroke-linecap":'round'},h._drawCommonElementsHelper(v),h.config.lineOb=v,k.prevLim=t,k.prevDataStore=w}}export default MSSplineDataset;