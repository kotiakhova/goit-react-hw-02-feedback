(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),o=a(3),u=a(4),i=a(5),s=a(7),d=a(6);function m(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,c=e.positivePercentage;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Good: ",t),l.a.createElement("p",null,"Neutral: ",a),l.a.createElement("p",null,"Bad: ",n),l.a.createElement("p",null,"Total: ",r),l.a.createElement("p",null,"Positive Feedback: ",c,"%"))}function b(e){var t=e.onLeaveFeedback;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{name:"good",onClick:t},"Good"),l.a.createElement("button",{name:"neutral",onClick:t},"Neutral"),l.a.createElement("button",{name:"bad",onClick:t},"Bad"))}function k(e){var t=e.title,a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,t),a)}function v(e){e.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"No feedback given"))}var g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={good:0,neutral:0,bad:0,total:0,positiveFeedback:0},e.handleClick=function(t){var a=t.target.name;e.setState((function(e){return Object(o.a)({},a,e[a]+1)})),e.countTotalFeedback(),e.countPositiveFeedbackPercentage()},e}return Object(i.a)(a,[{key:"countTotalFeedback",value:function(){this.setState((function(e){return{total:e.good+e.neutral+e.bad}}))}},{key:"countPositiveFeedbackPercentage",value:function(){this.setState((function(e){return{positiveFeedback:Math.round(e.good/e.total*100)}}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{title:"Please leave feedback"},l.a.createElement(b,{onLeaveFeedback:this.handleClick})),l.a.createElement(k,{title:"Statistics"},this.state.total>0?l.a.createElement(m,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,positivePercentage:this.state.positiveFeedback}):l.a.createElement(v,null)))}}]),a}(n.Component);g.defaultProps={},c.a.render(l.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.fe9ab79e.chunk.js.map