!function(v,C,F){function w(e){var t=G(e),a=t.split("."),i=a.length;return 2<i&&(t=a[i-2]+"."+a[i-1],2==a[i-1].length&&2==a[i-1].length&&(t=a[i-3]+"."+t)),t}var G=function(e){return(-1<e.indexOf("://")?e.split("/")[2]:e.split("/")[0]).split(":")[0].split("?")[0].replace(/^www\./,"")},Z=setInterval(function(){var h,e,t,a,o,n,r,c,d,b,l,m,s,p,g,L,u,Y,y,f=F.getElementById("LTF_counter_href");f&&(h="livetrafficfeed.com",f.parentNode&&(f.innerHTML="",(e=F.createElement("img")).style="width:30px;",e.src="//"+h+"/images/loadingfeed.gif",f.appendChild(e)),t=f.getAttribute("rel"),a=f.getAttribute("href"),o=f.getAttribute("data-root"),n=f.getAttribute("data-time"),0!=parseInt(o)&&(o=1),200<(r=encodeURIComponent(C.location.href)).length&&(r=C.location.href.split("?")[0]),b=G(decodeURIComponent(r)),c=encodeURIComponent(F.title.replace(/[\s\r\n\t]+/g," ").substring(0,50)),200<(d=encodeURIComponent(F.referrer)).length&&(d=F.referrer.split("?")[0]),new RegExp(".blogspot.(?:com|[a-z]{2,3}|[a-z]{2,3}.[a-z]{2})","g").test(b)?(b=(b=b.split("."))[0]+".blogspot.com",Y=c,1==(y=(Y=decodeURIComponent(Y)).split(":")).length||(Y="",y.forEach(function(e,t){0<parseInt(t)&&(1==parseInt(t)?Y+=e:Y+=": "+e)}),Y=Y.trim()),c=encodeURIComponent(Y)):1==o&&(b=w(decodeURIComponent(r))),"nofollow"!=t&&w(a)==h?(l="//"+h+"/static/static-counter/check.v2.js?link="+r+"&title="+c+"&referrer="+d+"&timezone="+n+"&root="+o,m=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<50;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}(),p=m,g=l,L=function(){var e=F.getElementById("LTFcounter");e&&e.parentNode.removeChild(e),f.innerHTML="";var t='<img id="LTFcounter" src="data:image/jpeg;base64,'+LTF_i+'">';f.innerHTML+=t,0==LTF_p?f.href="//"+h+"/live/"+b:f.href="//"+h+"/website-counter",f.target="_blank",clearInterval(Z);var a,o,n,r=LTF_c;1!=function(e){for(var t=e+"=",a=F.cookie.split(";"),i=0;i<a.length;i++){for(var o=a[i];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}("LTF_approve")&&("AT"!=r&&"BE"!=r&&"BG"!=r&&"CY"!=r&&"CZ"!=r&&"DE"!=r&&"DK"!=r&&"EE"!=r&&"EL"!=r&&"ES"!=r&&"FI"!=r&&"FR"!=r&&"GB"!=r&&"HR"!=r&&"HU"!=r&&"IE"!=r&&"IT"!=r&&"LT"!=r&&"LU"!=r&&"LV"!=r&&"MT"!=r&&"NL"!=r&&"PL"!=r&&"PT"!=r&&"RO"!=r&&"SE"!=r&&"SI"!=r&&"SK"!=r||(0<F.getElementsByTagName("body").length&&null==F.getElementById("LTF_GDPR_Compliant")&&((a=new Date).setTime(a.getTime()+31536e6),(o=F.createElement("div")).id="LTF_GDPR_Compliant",o.style="padding:0 !important;max-width:24em;flex-direction:column;color:#FFFFFF;background-color:#252E39;bottom:1em;right:1em;position:fixed;overflow:hidden;box-sizing:border-box;font-family:Helvetica,Calibri,Arial,sans-serif;font-size:16px;line-height:1.5em;flex-wrap:nowrap;z-index:9999;opacity:1;transition:opacity 1s ease;",F.getElementsByTagName("body")[0].appendChild(o),o.innerHTML='<span style="margin:2em 2em 1.5em;display:block;margin-bottom:1em;">This website use different technologies such as cookies, IP, geo location and device information to deliver its services and analyze traffic. Infomation about your use of this site is shared public. By using our site, you acknowledge that you have read and understand our Cookie Policy, Privacy Policy, and our Terms of Service.<a style="color:#FFFFFF !important;opacity:.8;display:inline-block;padding:.2em;cursor:pointer;text-decoration:underline;" href="http://livetrafficfeed.com/gdpr" target="_blank">Learn more</a></span><div style="flex:1;display:flex;align-items:center;align-content:space-between;color:#FFFFFF;"><input type="hidden" id="LTF_GDPR" value="0"><a onclick="document.getElementById(\'LTF_GDPR\').value=1;this.parentNode.parentNode.style.display=\'none\';document.cookie=\'LTF_approve=1; expires='+a.toUTCString()+'; path=/;SameSite=None; Secure\';" style="width:100%;color:#FFFFFF;background-color:#14A7CD;border-color:transparent;display:block;padding:.4em .8em;font-size:.9em;font-weight:700;border-width:2px;border-style:solid;text-align:center;white-space:nowrap;cursor:pointer;">Got it!</a></div>'),n=setInterval(function(){0<parseInt(F.getElementById("LTF_GDPR").value)&&(clearInterval(n),F.getElementById("LTF_GDPR_Compliant").style.display="none")},500)));var c,d,l=v.cookieEnabled,m=v.userAgent||v.vendor||C.opera,s=Math.floor(100*Math.random()),p=LTF_d;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(m)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(m.substr(0,4)))&&(p=LTF_m),1==LTF_s&&(c=function(e,t){var l={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decode:function(e){var t,a,i,o,n,r,c="",d=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<e.length;)t=this._keyStr.indexOf(e.charAt(d++))<<2|(o=this._keyStr.indexOf(e.charAt(d++)))>>4,a=(15&o)<<4|(n=this._keyStr.indexOf(e.charAt(d++)))>>2,i=(3&n)<<6|(r=this._keyStr.indexOf(e.charAt(d++))),c+=String.fromCharCode(t),64!=n&&(c+=String.fromCharCode(a)),64!=r&&(c+=String.fromCharCode(i));return l._utf8_decode(c)},_utf8_decode:function(e){for(var t="",a=0,i=c1=c2=0;a<e.length;)(i=e.charCodeAt(a))<128?(t+=String.fromCharCode(i),a++):191<i&&i<224?(c2=e.charCodeAt(a+1),t+=String.fromCharCode((31&i)<<6|63&c2),a+=2):(c2=e.charCodeAt(a+1),c3=e.charCodeAt(a+2),t+=String.fromCharCode((15&i)<<12|(63&c2)<<6|63&c3),a+=3);return t}},a=["YmFyZQ==","bmFrZWQ=","bnVkZQ==","b3JhbA==","c2V4","YW5hbA==","YmFiZQ==","YmhhcmF0aA==","Ym9vYg==","YnJlYXN0","YnVzZW4=","YnVzdHk=","Y2xpdA==","Y3VudA==","ZGljaw==","ZmV0aXNo","ZnVjaw==","aG9vdGVy","bHVzdA==","b3JneQ==","cGVuaXM=","cG9ybg==","cG9ybm8=","cHVwcGVy","cHVzc3k=","cm90dGVu","c2hpdA==","c211dHB1bXA=","dGVlbg==","eHh4","aGVudGFp","cHJldGVlbg==","Yml0Y2g=","ZW5zZXN0","YWxjb2hvbA==","dG9iYWNjbw==","YWR1bHQ=","aGVyb2lu","a2lsbA==","Y2FzaW5v","bnVkaQ==","eHZpZGVv","Z2F5","eG54eA==","YXNz","YW51cw==","YXJzZQ==","YmFzdGFyZA==","Ym9vbmc=","c3Vjaw==","Y29vbg==","Y3JhcA==","ZGFtbg==","ZGFybg==","ZGljaw==","ZGlydHk=","ZG91Y2hl","ZHVtbXk=","ZXJlY3Q=","ZXJvdGlj","ZXNjb3J0","aG9tb2Vyb3RpYw==","bGVzYmlhbg==","bmVncm8=","bmlnZ2Vy","b3JnYXM=","cGlzcw==","cmV0YXJk","c2FkaXN0","c2x1dA==","dGl0cw==","dmlhZ3Jh","d2hvcmU=","eGhhbXM=","amF2","YnV0dA==","dmFnaW5h","czN4","cmVkdHViZQ==","Y29uZG9t","cG9ybmh1Yg==","c2Vrcw==","4YuI4Yiy4Yml","2KzZhtiz","2YjYp9mCINiw2YPYsdmK","1b3VpdaE1b3VqA==","Y2luc2k=","0YHRjdC60YE=","0L/RgNGN0LfQtdGA0LLQsNGC0YvRng==","4Kay4Ka/4KaZ4KeN4KaX","0L/RgNC10LfQtdGA0LLQsNGC0LjQsg==","cHJlc2VydmF0aXU=","a3Vnb25hbmE=","a29uZG9tdQ==","6YG/5a2V5aWX","6Zi06YOo","6Zi06YGT","6Zi06IyO","6Zi05q+b","6Zi05oi3","6Ziz5YW3","5aW4","6LWj5oKo5aiY","6IKb5Lqk","6IKP","57K+5a2Q","5oOF6Imy","5oCn5Lqk","5by65aW4","5Lmz","5bGM","5bGE","5bGB6IKh","5bGB55y8","5bCE57K+","5aem","5aW4","5YGa54ix","5Lqk6YWN","5oCn5Yir","c2Vzc28=","a8O4bg==","Y29uZG9vbQ==","bGVzYmlhbmFz","ZXh0cmVtYSBzdW1pc2nDs24=","dGV0YXM=","c2V4bw==","ZXLDs3RpY29z","Y29uZMOzbg==","c3VndQ==","a2FzYXJpYW4=","c3VrdXB1b2xp","cHLDqXNlcnZhdGlm","a29uZG9taQ==","4YOh4YOU4YOl4YOh4YOY","z4bPjc67zr8=","4Kq44KuH4KqV4KuN4Kq4","c8Ooa3M=","amltYSdp","d2FoaW5l","16HXp9eh","4KSy4KS/4KSC4KSX","4KSV4KSC4KSh4KWL4KSu","c3pleA==","a3lubMOtZg==","bW1la+G7jWFo4bul","Ym9rZXA=","YmVyY2ludGE=","bmdlbnRvdA==","bWVtZWs=","ZGV3YXNh","cGVya29zYQ==","dG9rZXQ=","a29udG9s","YnVnaWw=","Z27DqWFz","6Iaj","6IKb6ZaA","6KO4","5YuD","5aOy5pil","57K+5ray","55Sf5q6W5Zmo","5oCn5Lqk","5bCE57K+","5by35aem","6Zmw5q+b","44Ko44Ot","44Os44Kk44OX","44Od44Or44OO","44Oa44OL44K5","6KO444Gu","6Zmw6IyO","44Kv44Oq44OI44Oq44K5","44OV44Kh44OD44Kv","5oCn5Yil","5aCA5Y2a5pit","44Kz44Oz44OJ44O844Og","amluaXM=","4LKy4LOI4LKC4LKX4LK/4LKV4LKk4LOG","0YHQtdC60YE=","4Z6a4Z694Z6Y4Z6X4Z+B4Z6R","7IS57Iqk","7L2Y64+U","Y2luc8OueWV0","0LbRi9C90YvRgQ==","4LuA4Lqe4LqU","ZHppbXVtcw==","R2VzY2hsZWNodA==","ZmlyYWlzYW5hIGFyYS1ub2Zv","a29uZG9t","4LSy4LS/4LSC4LSX4LSC","4LSV4LWL4LSj4LWN4LSf4LSC","d2FoaW5l","4KSy4KS/4KSC4KSX","0YXSr9C50YE=","0JHRjdC70LPRjdCy0Yc=","4YCc4YCt4YCE4YC6","4YCA4YC94YCU4YC64YCS4YCv4YC24YC4","4KS44KWH4KSV4KWN4KS4","a2rDuG5u","2KzZhtiz24zYqg==","2KfYsdiq2KjYp9i3INis2YbYs9uM","cHJlc2VydmF0aXZv","4Ki44KmI4KiV4Ki4","ZmV1c3VhaWdh","ZmVpc2U=","0YHQtdC6","dGhvYmFsYW5v","enZlcGFib25kZQ==","2KzZhtiz2Yo=","4La94LeS4LaC4Lac4LeS4Laa","c3BvbA==","amluc2k=","ZXLDs3RpY2E=","ZXLDs3RpY29z","YWR1bHRvcw==","c3RyaXBwZXJz","bmdvbm8=","0rfQuNC90YE=","4K6a4K+G4K6V4K+N4K644K+N","4LC44LGG4LCV4LGN4LC44LGN","4LiC4Li14LmJ","4LiI4Li04LmL4Lih","4LmA4Lie4Lio","4LiI4Li54LmL","4LiU4Lit4LiB4LiX4Lit4LiH","4LiV4Li54LiU","4LmA4Lii4LmH4LiU","4Lir4Lil4Lix4LmI4LiH","4Lir4LmI4Liy","4Lir4Li1","4LiW4Li44LiH4Lii4Liy4LiH","cHJlemVydmF0aWY=","2KzZhtiz","amlucw==","xJHhu4t0","eG/huqFj","aGnhur9wIGTDom0=","aMOjbSBoaeG6v3A=","Z2nhur90","a2jhu49hIHRow6Ju","ZMawxqFuZyB24bqtdA==","w6JtIHbhuq10","xJHDrXQ=","dsO6","bmjFqSBob2E=","YmFvIGNhbyBzdQ==","Z2lhbyBj4bqldQ==","cmh5dw==","bmdlc29uZG8=","15LXotep15zXoteb15g=","aWJhbG9wbw==","dWJ1bGlsaQ=="],t=t.trim().toLowerCase();for(i=0;i<a.length;i++)a[i]=l.decode(a[i]).toString();var o=new RegExp(a.join("|"),"gi");return!!o.test(e)||!!o.test(t)}(C.location.href,F.title),b!=h&&0==c&&l&&(s<p&&((d=F.createElement("script")).src="https://"+h+"/static/static-counter/main.js",d.id="LTF_st2",d.onload=function(){LTF_ads()},0<F.getElementsByTagName("head").length&&F.getElementsByTagName("head")[0].appendChild(d)),b!=h&&1==c&&l&&s<p&&((d=F.createElement("script")).src="https://"+h+"/static/static-counter/app.js",d.id="LTF_st2",d.onload=function(){LTF_ads()},0<F.getElementsByTagName("head").length&&F.getElementsByTagName("head")[0].appendChild(d)))),2==LTF_s&&b!=h&&l&&s<p&&((d=F.createElement("script")).src="https://"+h+"/static/static-counter/core.js",d.id="LTF_st2",d.onload=function(){LTF_ads()},0<F.getElementsByTagName("head").length&&F.getElementsByTagName("head")[0].appendChild(d))},(u=F.createElement("script")).type="text/javascript",u.id="LTF_"+p,u.readyState?u.onreadystatechange=function(){"loaded"!=u.readyState&&"complete"!=u.readyState||(u.onreadystatechange=null,L())}:u.onload=function(){L()},u.src=g,F.getElementsByTagName("head")[0].appendChild(u),(s=F.getElementById("LTF_"+m)).parentNode.removeChild(s)):console.log("LTF code fixed"))},500)}(navigator,window,document);