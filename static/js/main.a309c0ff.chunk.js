(this["webpackJsonpgithub-actions-stats"]=this["webpackJsonpgithub-actions-stats"]||[]).push([[0],{382:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(34),c=n(20),s=n(0),o=n.n(s),i=n(46),l=n.n(i),u=n(162),j=n(207),d=n(163),b=n(105),f=n(209),x=n(67),h=n(36),p=n(127),O=n(397),m=n(399),g=n(400),w=n(204),v=n(398),y=n(395),k=n(159),R=n(9),S=function(e){var t=e.data;return Object(R.jsx)(k.b,{children:Object(R.jsxs)(k.a,{variant:"simple",children:[Object(R.jsx)(k.f,{children:Object(R.jsxs)(k.g,{children:[Object(R.jsx)(k.e,{children:"User"}),Object(R.jsx)(k.e,{children:"Branch"}),Object(R.jsx)(k.e,{children:"Link"})]})}),Object(R.jsx)(k.c,{children:t.map((function(e){var t=e.user,n=e.url,a=e.branch;return Object(R.jsxs)(k.g,{children:[Object(R.jsx)(k.d,{children:t}),Object(R.jsx)(k.d,{children:a}),Object(R.jsx)(k.d,{children:Object(R.jsx)(u.g,{href:n,isExternal:!0,children:"Action"})})]})}))})]})})},_=new p.a({auth:"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"}),D=["success","failure","cancelled","startup_failure"],C={success:"green",failure:"red",cancelled:"yellow",startup_failure:"facebook"},z=function(e){var t=e.owner,n=e.repo,a=e.workflowId,r=Object(s.useState)({}),o=Object(c.a)(r,2),i=o[0],l=o[1],j=Object(s.useState)("success"),f=Object(c.a)(j,2),x=f[0],p=f[1],k=Object(s.useState)(null),z=Object(c.a)(k,2),T=z[0],W=z[1],E=Object(s.useState)(!0),I=Object(c.a)(E,2),L=I[0],M=I[1];Object(s.useEffect)((function(){l({}),M(!0),_.actions.listWorkflowRuns({owner:t,repo:n,workflow_id:a,per_page:100}).then((function(e){var t,n=e.data,a={totalRuns:n.total_count,conclusion:{success:0,failure:0,cancelled:0,startup_failure:0},durations:{success:[],failure:[],cancelled:[],startup_failure:[]},earliestRun:new Date(864e13).getTime(),latestRun:new Date(-864e13).getTime()},r=Object(h.a)(n.workflow_runs);try{for(r.s();!(t=r.n()).done;){var c=t.value;if(c.conclusion&&"completed"===c.status){a.conclusion[c.conclusion]+=1;var s=Date.parse(c.created_at);c.run_started_at&&(s=Date.parse(c.run_started_at));var o=Date.parse(c.updated_at)-s;a.durations[c.conclusion].push({duration:o/1e3,details:{user:c.actor.login,url:c.html_url,branch:c.head_branch}}),a.earliestRun=Math.min(a.earliestRun,s),a.latestRun=Math.max(a.latestRun,s)}}}catch(i){r.e(i)}finally{r.f()}console.log("stats",a),M(!1),l(a)})).catch((function(e){M(!1),console.error("error while getting runs in a workflow from github",e)}))}),[t,n,a]);var N=function(e){p(e)};return Object(R.jsxs)(R.Fragment,{children:[L&&Object(R.jsx)(u.b,{pt:150,children:Object(R.jsx)(b.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})}),!L&&!(null===i||void 0===i||!i.durations)&&Object(R.jsxs)(u.a,{display:"flex",maxW:"1840px",mx:"auto",pt:50,justifyContent:"center",flexDirection:"column",children:[Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(u.c,{justifyContent:"space-evenly",pt:10,children:[Object(R.jsxs)(u.c,{children:["Total Runs: ",i.totalRuns]}),Object(R.jsx)(u.f,{spacing:4,children:D.map((function(e){return Object(R.jsxs)(d.a,{size:"lg",borderRadius:"full",colorScheme:C[e],onClick:N.bind(null,e),children:[i.conclusion[e]," ",(t=e,t&&t[0].toUpperCase()+t.slice(1))]});var t}))})]}),Object(R.jsx)("br",{}),"Latest Run: ",new Date(i.latestRun).toLocaleDateString()," ",Object(R.jsx)("br",{}),"Earliest Run: ",new Date(i.earliestRun).toLocaleDateString()," ",Object(R.jsx)("br",{})]}),Object(R.jsx)(u.c,{children:Object(R.jsxs)(O.a,{domainPadding:10,width:1e3,height:300,containerComponent:Object(R.jsx)(m.a,{labels:function(e){var t=e.datum;return"".concat(t.y," (").concat(t.x.toFixed(1)," minutes)")},labelComponent:Object(R.jsx)(g.a,{cornerRadius:3,flyoutStyle:{fill:"white",stroke:"#999"}})}),children:[Object(R.jsx)(w.a,{x:500,y:25,textAnchor:"middle",text:"Duration of ".concat(x," runs")}),Object(R.jsx)(v.a,{dependentAxis:!0,label:"Total number of runs"}),Object(R.jsx)(v.a,{label:"Time (minutes)"}),Object(R.jsx)(y.a,{style:{data:{fill:"var(--chakra-colors-".concat(C[x],"-500)"),strokeWidth:0}},binSpacing:5,bins:50,data:i.durations[x].map((function(e){return{x:e.duration/60,details:e.details}})),events:[{target:"data",eventHandlers:{onClick:function(){return[{target:"data",mutation:function(e){var t,n=Object(h.a)(e.datum.binnedData);try{for(n.s();!(t=n.n()).done;){var a=t.value;console.log(a.details.url,a.details)}}catch(r){n.e(r)}finally{n.f()}return W(e.datum.binnedData.map((function(e){return e.details}))),null}}]}}}]})]})}),Object(R.jsx)(u.c,{children:T&&Object(R.jsx)(S,{data:T})})]})]})},T=n(208),W=(n(381),Object(x.b)({colors:{brand:{activeBlue:"#0566d6",900:"#1a365d",800:"#153e75",700:"#2a69ac"}}})),E={borderRadius:"5px",justifyContent:"left"},I={color:"white",bg:"brand.activeBlue",borderRadius:"5px",justifyContent:"left"},L=new p.a({auth:"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"}),M=function(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(s.useState)(""),l=Object(c.a)(i,2),x=l[0],h=l[1],p=Object(s.useState)([]),O=Object(c.a)(p,2),m=O[0],g=O[1],w=Object(s.useState)(!1),v=Object(c.a)(w,2),y=v[0],k=v[1],S=Object(T.a)(),_=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,k(!0),e.next=5,L.actions.listRepoWorkflows({owner:t.target.owner.value,repo:t.target.repo.value});case 5:n=e.sent,r=n.data,o(t.target.owner.value),h(t.target.repo.value),g(r.workflows),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error("error while getting list of repo workflows from github",e.t0),S({title:"Retrieval of workflows list failed.",description:e.t0.toString(),status:"error",duration:9e3,isClosable:!0});case 16:return e.prev=16,k(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(u.a,{display:"flex",maxW:"1840px",mx:"auto",pt:50,justifyContent:"center",flexDirection:"column",children:[Object(R.jsx)(u.c,{direction:"row",justifyContent:"center",children:Object(R.jsx)("form",{onSubmit:_,children:Object(R.jsxs)(u.f,{spacing:"30px",children:[Object(R.jsx)(j.a,{placeholder:"Repo owner (organisation)",name:"owner"}),Object(R.jsx)(j.a,{placeholder:"Name of the repo",name:"repo"}),Object(R.jsx)(d.a,{w:350,type:"submit",children:"Visualize!"})]})})}),y&&Object(R.jsx)(u.b,{pt:150,children:Object(R.jsx)(b.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})}),!y&&!!m&&Object(R.jsx)(f.e,{isLazy:!0,orientation:"vertical",variant:"solid-rounded",align:"center",sx:{textAlign:"left"},children:Object(R.jsxs)(u.d,{templateRows:"repeat(2, 1fr)",templateColumns:"repeat(5, 1fr)",gap:4,children:[Object(R.jsx)(u.e,{colSpan:1,children:Object(R.jsx)(f.b,{children:m.map((function(e){return Object(R.jsx)(f.a,{sx:E,_hover:{bg:"gray.100",color:"gray.600"},_selected:I,children:e.name})}))})}),Object(R.jsx)(u.e,{colSpan:3,children:Object(R.jsx)(f.d,{children:m.map((function(e){return Object(R.jsx)(f.c,{children:Object(R.jsx)(z,{workflowId:e.id,owner:n,repo:x})})}))})})]})})]})})};l.a.render(Object(R.jsx)(o.a.StrictMode,{children:Object(R.jsx)(x.a,{theme:W,resetCSS:!0,children:Object(R.jsx)(M,{})})}),document.getElementById("root"))}},[[382,1,2]]]);
//# sourceMappingURL=main.a309c0ff.chunk.js.map