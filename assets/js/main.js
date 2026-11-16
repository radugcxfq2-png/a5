(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function row(a,b){return '<li><span>'+a+'</span><b>'+b+'</b></li>';}
function clock(m){m=((m%1440)+1440)%1440;var h=Math.floor(m/60),mi=Math.round(m%60);return (h<10?'0':'')+h+':'+(mi<10?'0':'')+mi;}
var th=$('tz-h');if(th){var ta=$('tz-a'),tt=$('tz-t'),offs=[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,3.5,4,4.5,5,5.5,6,7,8,9,9.5,10,11,12];
 function lab(o){var s=o<0?'−':'+',a=Math.abs(o),h=Math.floor(a),m=(a-h)*60;return s+h+(m?':'+m:'');}
 [th,ta].forEach(function(sel,i){offs.forEach(function(o){var op=document.createElement('option');op.value=o;op.textContent=lab(o);sel.appendChild(op);});sel.value=i?'1':'-5';});
 on([tt,th,ta],function(){var p=(tt.value||'09:30').split(':'),home=parseInt(p[0],10)*60+parseInt(p[1],10);if(isNaN(home))home=570;var d=(parseFloat(ta.value)-parseFloat(th.value))*60,away=home+d,shift=away<0?'the previous day':away>=1440?'the next day':'the same day';
  var gh=Math.floor(((home%1440)+1440)%1440/60),dh=d/60;
  $('tz-o').innerHTML='<strong>'+clock(away)+' away</strong><ul>'+row('Difference',(dh>0?'+':dh<0?'−':'')+Math.abs(dh)+' h')+row('Calendar day away',shift)+row('GMT hand should point to',(gh<10?'0':'')+gh+' on the 24-hour scale')+'</ul><p>'+(dh%1!==0?'This zone uses a half-hour offset. A standard GMT hand cannot show it exactly; read the nearest hour and add thirty minutes.':'Set the main hands to local time on arrival and leave the GMT hand on home time.')+'</p>';});}
var cs=$('tc-s');if(cs){var cu=$('tc-u');
 on([cs,cu],function(){var s=parseFloat(cs.value);if(isNaN(s)||s<=0)s=45;var r=3600/s,u=cu.value,unit=u==='km'?'km/h':u==='mi'?'mph':'per hour';
  $('tc-o').innerHTML='<strong>'+r.toFixed(r<100?1:0)+' '+unit+'</strong><ul>'+(u==='km'?row('In miles per hour',(r*0.6214).toFixed(1)+' mph'):u==='mi'?row('In kilometres per hour',(r*1.6093).toFixed(1)+' km/h'):row('In an 8-hour day',Math.round(r*8)))+row('On the dial',s<7.2?'Too fast for the scale':s>60?'Past one lap; most scales stop at 60':'Seconds hand points to about '+Math.round(r))+'</ul><p>A tachymeter reads directly only for events between about 7 and 60 seconds.</p>';});}
var rn=$('rp-n');if(rn){var ra=$('rp-a'),rp=$('rp-p');
 on([rn,ra,rp],function(){var n=Math.min(20,Math.max(1,parseInt(rn.value,10)||1)),a=Math.min(n,Math.max(0,parseInt(ra.value,10)||0)),pr=parseInt(rp.value,10),gap=n-1,stops=gap*24>pr;
  $('rp-o').innerHTML='<strong>Each watch every '+n+' day'+(n>1?'s':'')+'</strong><ul>'+row('Days each watch rests',gap)+row('Wears per watch a month',Math.round(30/n))+row('Mechanical watches',a)+row('Will stop between wears',a?(stops?'Yes':'No'):'Not applicable')+'</ul><p>'+(n===1?'One watch, worn daily, needs no plan at all.':a&&stops?'With a daily rotation, your mechanical watches will run down between wears. That is harmless: wind and set each one when you pick it up, or wear each for two or three days in a row instead.':a?'Your power reserve covers the gap, so the watches should still be running when their turn comes.':'Quartz watches need no winding. Check them once a month for a low battery.')+'</p>';});}
})();
