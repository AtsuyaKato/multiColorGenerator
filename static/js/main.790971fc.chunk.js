(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{47:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),s=(a(47),a(37)),l=a(5),u=a(75),o=a(13),j=a(80),b=a(77),d=a(78),h=a(81),m=a(79),p=a(2),x=Object(u.a)({root:{width:250},input:{width:42}});function O(e){var t=x(),a=r.a.useState(e.value),n=Object(o.a)(a,2),c=n[0],i=n[1];return Object(p.jsx)("div",{className:t.root,children:Object(p.jsxs)(b.a,{container:!0,spacing:2,alignItems:"center",children:[Object(p.jsx)(b.a,{item:!0,children:Object(p.jsx)(d.a,{id:"input-slider",gutterBottom:!0,children:e.valueName})}),Object(p.jsx)(b.a,{item:!0,xs:!0,children:Object(p.jsx)(h.a,{value:"number"===typeof c?c:0,onChange:function(t,a){i(a),e.onChange(a)},"aria-labelledby":"input-slider"})}),Object(p.jsx)(b.a,{item:!0,children:Object(p.jsx)(m.a,{className:t.input,value:c,margin:"dense",onChange:function(t){i(""===t.target.value?"":Number(t.target.value)),e.onChange(""===t.target.value?"":Number(t.target.value))},onBlur:function(){c<0?i(0):c>100&&i(100)},inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]})})}var g=Object(u.a)({root:{width:250,fontWeight:"bold"},input:{width:42}});function v(e){var t=g(),a=r.a.useState(e.value),n=Object(o.a)(a,2),c=n[0],i=n[1];return Object(p.jsx)("div",{className:t.root,children:Object(p.jsxs)(b.a,{container:!0,spacing:2,alignItems:"center",children:[Object(p.jsx)(b.a,{item:!0,children:Object(p.jsx)(d.a,{id:"input-slider",gutterBottom:!0,children:Object(p.jsx)("p",{children:e.valueName})})}),Object(p.jsx)(b.a,{item:!0,children:Object(p.jsx)(m.a,{className:t.input,value:c,margin:"dense",onChange:function(t){i(""===t.target.value?"":Number(t.target.value)),e.onChange(""===t.target.value?"":Number(t.target.value))},onBlur:function(){c<2?i(2):c>100&&i(100)},inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]})})}var N=Object(u.a)({root:{width:250,margin:"auto",marginTop:30}});function f(e){var t=N(),a=r.a.useState(20),n=Object(o.a)(a,2),c=n[0],i=n[1],s=r.a.useState(100),l=Object(o.a)(s,2),u=l[0],b=l[1],d=r.a.useState(2),h=Object(o.a)(d,2),m=h[0],x=h[1],g=r.a.useState([]),f=Object(o.a)(g,2),w=f[0],S=f[1];var C=function(){var e=w.map((function(e){return Object(p.jsx)("li",{children:e})}));return Object(p.jsx)("ul",{children:e})};return Object(p.jsxs)("div",{className:t.root,children:[Object(p.jsx)(O,{valueName:"S",value:c,onChange:i}),Object(p.jsx)(O,{valueName:"V",value:u,onChange:b}),Object(p.jsx)(v,{valueName:"N",value:m,onChange:x}),Object(p.jsx)(j.a,{variant:"contained",onClick:function(){S([]);for(var e=function(e){var t=parseInt(360/m*e,10);S((function(e){return e.concat(function(e,t,a){var n,r,c,i=a*=2.55,s=i-(t*=2.55)/255*i;switch(parseInt(e/60,10)){case 0:n=i,r=e/60*(i-s)+s,c=s;break;case 1:n=(120-e)/60*(i-s)+s,r=i,c=s;break;case 2:n=s,r=i,c=(e-120)/60*(i-s)+s;break;case 3:n=s,r=(240-e)/60*(i-s)+s,c=i;break;case 4:n=(e-240)/60*(i-s)+s,r=s,c=i;break;case 5:n=i,r=s,c=(360-e)/60*(i-s)+s}n=parseInt(n,10),r=parseInt(r,10),c=parseInt(c,10);return n.toString(16)+r.toString(16)+c.toString(16)}(t,c,u))}))},t=0;t<m;t++)e(t)},children:"\u8a08\u7b97\u3059\u308b"}),Object(p.jsx)("p",{children:"\u8a08\u7b97\u7d50\u679c Results"}),Object(p.jsx)(C,{})]})}var w=Object(u.a)({root:{width:500,margin:"auto"},title:{width:500,margin:"auto",paddingTop:"20px",textAlign:"center"},subtitle:{width:500,margin:"auto",borderBottom:"solid 1px",textAlign:"center",paddingTop:"20px"},text:{width:500,margin:"auto",textAlign:"center"}});i.a.render(Object(p.jsx)(s.a,{children:Object(p.jsx)(l.a,{exact:!0,path:"/",component:function(){var e=w();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:e.title,children:"MultiColorGenerator"}),Object(p.jsx)("h3",{className:e.subtitle,children:"\u6982\u8981 About"}),Object(p.jsx)("p",{className:e.text,children:"\u5165\u529b\u306b\u5fdc\u3058\u3066\u30ab\u30e9\u30fc\u30b3\u30fc\u30c9\u3092\u25cb\u500b\u51fa\u529b\u3057\u307e\u3059\uff0e\u300c\u30c7\u30b6\u30a4\u30f3\u306e\u305f\u3081\u306b\u25cb\u8272\u6b32\u3057\u3044\u306a\u3041\u300d\u3068\u8a00\u3046\u3068\u304d\u306b\u4f7f\u3063\u3066\u307f\u3066\u304f\u3060\u3055\u3044\uff0e"}),Object(p.jsx)("h3",{className:e.subtitle,children:"\u4f7f\u3044\u65b9 How to Use"}),Object(p.jsx)("p",{className:e.text,children:"\u5f69\u5ea6 S\u3068\u660e\u5ea6 V\uff0c\u305d\u3057\u3066\u6b32\u3057\u3044\u8272\u306e\u6570 N\u3092\u305d\u308c\u305e\u308c\u5165\u529b\u3057\uff0c\u300c\u8a08\u7b97\u3059\u308b\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\uff0eS\u3068V\u306f0~100%\u306e\u30ec\u30f3\u30b8\u306b\u306a\u3063\u3066\u3044\u307e\u3059\uff0e"}),Object(p.jsx)(f,{})]})}})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.790971fc.chunk.js.map