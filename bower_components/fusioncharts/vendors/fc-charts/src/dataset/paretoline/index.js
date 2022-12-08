import LineDataset from'../line';import{extend2,pluck,pluckNumber,getValidValue,getFirstColor,parseUnsafeString,parseTooltext,getDashStyle}from'../../../../fc-core/src/lib';let UNDEF,PLOTBORDERCOLOR='plotBorderColor',SHOWSHADOW='showShadow',math=Math,mathMin=math.min,mathMax=math.max,mathAbs=math.abs,HUNDREDSTRING='100';class ParetoLineDataset extends LineDataset{configureAttributes(a){if(!a)return!1;this.trimData(a),this.config.JSONData=a;var b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t=this,u=t.getFromEnv('chart'),v=t.config,w=t.getFromEnv('xAxis'),x=v.JSONData,y=x.data,z=y&&y.length,A=z,B=t.getFromEnv('chart-attrib'),C=t.getFromEnv('color-manager'),D=pluckNumber(B.showtooltip,1),E=parseUnsafeString(B.yaxisname),F=parseUnsafeString(B.xaxisname),G=t.components.data,H=t.getFromEnv('number-formatter'),I=u.config.is3D,J=-Infinity,K=+Infinity,L=0,M=[],N=0,O=v.tootipSepChar=pluck(B.tooltipsepchar,', ');for(v.defaultPadding={left:.5,right:.5},v.enableAnimation=m=pluckNumber(B.animation,B.defaultanimation,1),v.animation=!!m&&{duration:1e3*pluckNumber(B.animationduration,1)},v.showTooltip=pluckNumber(B.showtooltip,1),v.valuePadding=pluckNumber(B.valuepadding,2),v.rotateValues=pluckNumber(B.rotatevalues)?270:0,v.showHoverEffect=pluckNumber(B.plothovereffect,B.showhovereffect,UNDEF),v.showShadow=g||I?pluckNumber(B.showshadow,1):pluckNumber(B.showshadow,C.getColor(SHOWSHADOW)),v.useDataPlotColorForLabels=pluckNumber(B.usedataplotcolorforlabels,0),v.use3dlineshift=pluckNumber(B.use3dlineshift,u.use3dlineshift),v.drawLine=1,v.linecolor=getFirstColor(pluck(B.linecolor,C.getColor(PLOTBORDERCOLOR))),v.linethickness=pluckNumber(B.linethickness,2),v.linealpha=pluck(B.linealpha,HUNDREDSTRING),v.linedashed=pluckNumber(B.linedashed,0),v.linedashlen=pluckNumber(x.linedashlen,B.linedashlen,5),v.linedashgap=pluckNumber(x.linedashgap,B.linedashgap,4),n=getDashStyle(v.linedashlen,v.linedashgap),v.lineDashStyle=v.linedashed?n:'none',v.drawanchors=pluckNumber(B.drawanchors,B.showanchors),v.anchorbgcolor=pluck(B.anchorbgcolor,C.getColor('anchorBgColor')),v.anchorbordercolor=pluck(B.anchorbordercolor,v.linecolor),v.anchorradius=pluckNumber(B.anchorradius,3),v.anchoralpha=pluck(B.anchoralpha),v.anchorbgalpha=pluck(B.anchorbgalpha,100),v.anchorborderthickness=pluck(B.anchorborderthickness,1),v.anchorsides=pluck(B.anchorsides,0),v.anchorimageurl=pluck(B.anchorimageurl),v.anchorimagealpha=pluckNumber(B.anchorimagealpha,100),v.anchorimagescale=pluckNumber(B.anchorimagescale,100),v.anchorimagepadding=pluckNumber(B.anchorimagepadding,1),v.anchorstartangle=pluckNumber(B.anchorstartangle,90),v.parentYAxis=1,v.valuePosition=pluck(B.valueposition,'auto'),v.showvalues=v.showValues=pluckNumber(B.showlinevalues,B.showvalues,1),t.setState('visible',1===pluckNumber(x.visible,1)),t.setState('dirty',!0),v.shadow={opacity:v.showShadow?v.linealpha/100:0},v.showCumulativeLine=pluckNumber(B.showcumulativeline,1),v.maxRadius=-Infinity,G||(G=t.components.data=[]),o=0;o<A;o++)q=mathAbs(H.getCleanValue(y[o].value)),L+=q,M[o]=extend2({},y[o]),M[o].value=q;for(M.sort(function(c,a){return a.value-c.value}),v.imageCount=0,o=0;o<A;o++)(h=M[o],k=G[o],k||(k=G[o]={graphics:{}}),k.config||(l=G[o].config={}),j=mathAbs(H.getCleanValue(h.value)),null!==j)&&(l=k&&k.config,r=w.getLabel(o),l.label=getValidValue(parseUnsafeString(pluck(r.label))),l.showValue=pluckNumber(h.showvalue,v.showValues),l.setValue=j,l.setLink=pluck(h.link),l.setDisplayValue=parseUnsafeString(h.displayvalue),N+=l.setValue,j=l.setValue=100*(N/L),p=H.percentValue(j),l.toolTipValue=p,l.displayValue=p,l.valuePosition=pluck(h.valueposition,v.valuePosition),l.anchorProps=this._parseAnchorProperties(o,M),l.hoverEffects=this._parseHoverEffectOptions(k),s=l.anchorProps,v.maxRadius=Math.max(v.maxRadius,s.radius+s.borderThickness/2),l._x=o,l._y=j,b=l.toolTipValue,J=mathMax(J,j),K=mathMin(K,j),D?(v.showTooltip?d==UNDEF?f=l.label?l.label+O+l.toolTipValue:'':(c={formattedValue:b,label:l.label,yaxisName:E,xaxisName:F,cumulativeValue:N,cumulativeDataValue:H.dataLabels(N),cumulativePercentValue:p,sum:H.dataLabels(L),unformattedSum:L},e=[1,2,3,5,6,7,20,21,22,23,24,25],f=parseTooltext(d,e,c,h,B)):f=!1,l.toolText=f):f=!1,l.toolText=f,l.tooltext=d,l.setTooltext=f);v.maxValue=J,v.minValue=K}}export{ParetoLineDataset};