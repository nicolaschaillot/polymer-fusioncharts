function formatTrim(a){let b,c=a.length,d=1,e=-1;for(;d<c;++d)if('.'===a[d])e=b=d;else if('0'===a[d])0==e&&(e=d),b=d;else if(0<e){if(!+a[d])break;e=0}return 0<e?a.slice(0,e)+a.slice(b+1):a}export default formatTrim;