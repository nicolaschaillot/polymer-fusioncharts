import UtcYearInterval from'./time-interval-utcYear.js';var utcYear=new UtcYearInterval('year',a=>{a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0)},(a,b)=>a.setUTCFullYear(a.getUTCFullYear()+b),(a,b)=>b.getUTCFullYear()-a.getUTCFullYear(),a=>a.getUTCFullYear());export default utcYear;