(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a(267)},130:function(e,t,a){},164:function(e,t){},166:function(e,t){},173:function(e,t){},175:function(e,t){},208:function(e,t){},209:function(e,t){},211:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=211},267:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(117),s=a.n(r),o=a(4),c=a(5),i=a(8),m=a(6),u=a(7),d=a(122),p=a(28);var h=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:"images/logo.png",alt:"homepage",width:"100",height:"30"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"}),l.a.createElement("button",{className:"btn btn-success ml-3","data-toggle":"modal","data-target":"#signUpBtn"},"Sign Up"),l.a.createElement("button",{className:"btn btn-outline-primary ml-3","data-toggle":"modal","data-target":"#loginBtn"},"Log In"))};a(130);var f=function(){return l.a.createElement("div",{className:"jumbotron background jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-1 text-center text-white mt-3"},l.a.createElement("strong",null,"Bucket List")),l.a.createElement("p",{className:"lead text-center text-white"},"A Platform to create your bucket list and share it with others.")))},g=a(2),b=a.n(g),E=a(78),v=a(118),w=a(119),y=function(e){e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization},N=a(120),j=a.n(N),k=function(e){return b.a.post("/api/user/register",e)},I=function(e){return b.a.post("/api/user/login",e).then(function(e){var t=e.data.token;localStorage.setItem("jwtToken",t),y(t),O(t),window.location.replace("/user")})},O=function(e){return{payload:j()(e)}},S=function(){window.location.replace("/"),localStorage.removeItem("jwtToken"),y(!1)};if(localStorage.getItem("jwtToken"))var C=O(localStorage.getItem("jwtToken")).payload;var x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={likes:[],items:[]},a.handleLikeBtn=function(e){b.a.put("/api/items/likes/".concat(e),{id:C.id}).then(function(e){a.setState({likes:e.data.likes})}).catch(function(e){return console.log(e)})},a.handleDislikeBtn=function(e){b.a.put("/api/items/removelikes/".concat(e),{id:C.id}).then(function(e){a.setState({likes:e.data.likes})}).catch(function(e){return console.log(e)})},a.saveItem=function(e){b.a.put("/api/user/add/".concat(C.id),{id:e}).then(function(e){a.setState({items:e.data.items})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;C&&(this.setState({likes:this.props.likes}),b.a.get("/api/user/".concat(C.id)).then(function(t){e.setState({items:t.data.items})}).catch(function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-md-3 mt-3"},l.a.createElement("div",{className:"card",style:{width:"18rem"}},l.a.createElement("img",{src:this.props.image,className:"card-img-top",alt:this.props.title}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},this.props.title," ",this.props.user&&!this.props.profile?l.a.createElement("button",{onClick:this.state.likes.includes(C.id)?function(){return e.handleDislikeBtn(e.props._id)}:function(){return e.handleLikeBtn(e.props._id)},className:"btn btn-sm btn-primary"},this.state.likes.includes(C.id)?l.a.createElement(E.a,{icon:w.a}):l.a.createElement(E.a,{icon:v.a})," ",this.state.likes?this.state.likes.length:0):" "),!this.props.user||this.props.profile||this.state.items.includes(this.props._id)?" ":l.a.createElement("button",{onClick:function(){return e.saveItem(e.props._id)},className:"btn btn-primary"},"Add"),this.props.user&&this.props.profile?l.a.createElement("button",{onClick:function(){return e.props.removeItem(e.props._id)},className:"btn btn-danger"},"Remove"):" ",this.props.user&&!this.props.isDone.includes(C.id)&&this.props.profile?l.a.createElement("button",{onClick:function(){return e.props.itemDone(e.props._id)},className:"btn btn-success ml-3"},"Done"):" ")))}}]),t}(l.a.Component),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={recentItems:[],userExist:!1},a.getRecentItems=function(){b.a.get("/api/items").then(function(e){a.setState({recentItems:e.data})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({userExist:!!localStorage.getItem("jwtToken")})}},{key:"componentDidMount",value:function(){this.getRecentItems()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},this.state.recentItems.map(function(t){return l.a.createElement(x,Object.assign({saveItem:e.saveItem,handleDislikeBtn:e.handleDislikeBtn,handleLikeBtn:e.handleLikeBtn,key:t.id,user:e.state.userExist},t))})))}}]),t}(l.a.Component);var P=function(){return l.a.createElement("footer",{className:"footer bg-primary py-3 mt-3"},l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"lead text-center"},"Copyright 2019")))},B=a(34);var T=function(e){return l.a.createElement("div",{className:"alert alert-danger",role:"alert"},e.message)},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:"",errors:!1},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(B.a)({},n,l))},a.handleFormSubmit=function(e){if(e.preventDefault(),a.state.email&&a.state.password){var t={email:a.state.email,password:a.state.password};I(t).catch(function(e){a.setState({errors:e.response.data}),localStorage.removeItem("jwtToken")})}a.setState({email:"",password:""})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"modal",id:"loginBtn",tabindex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("h4",{className:"text-center"},l.a.createElement("i",{class:"fas fa-sign-in-alt"})," Login"),l.a.createElement("hr",null),this.state.errors?Object.values(this.state.errors).map(function(e){return l.a.createElement(T,{message:e})}):"",l.a.createElement("form",null,l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{value:this.state.email,name:"email",onChange:this.handleInputChange,type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Password"),l.a.createElement("input",{value:this.state.password,name:"password",onChange:this.handleInputChange,type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),l.a.createElement("button",{onClick:this.handleFormSubmit,type:"submit",class:"btn btn-primary col-12 text-center"},l.a.createElement("i",{class:"fas fa-sign-in-alt"})," Log In")),l.a.createElement("p",{className:"text-center"},"Don't you have an account yet?  ",l.a.createElement("a",{href:"","data-dismiss":"modal","data-toggle":"modal","data-target":"#signUpBtn"},"Create an Account"))))))}}]),t}(l.a.Component),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",email:"",password:"",confirm:"",errors:!1},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(B.a)({},n,l))},a.handleFormSubmit=function(e){if(e.preventDefault(),a.state.password===a.state.confirm&&a.state.password.length>5&&a.state.name&&a.state.email){var t={name:a.state.name,email:a.state.email,password:a.state.password};k(t).then(function(e){var n={email:e.data.email,password:t.password};I(n),a.setState({name:"",email:"",password:"",confirm:""})}).catch(function(e){return a.setState({errors:e.response.data})})}else{var n;a.state.name?a.state.email?a.state.password.length<6?n="Password should be at least 6 characters":a.state.password!==a.state.confirm&&(n="Passwords do not match"):n="Enter Your Email":n="Enter Your Name",a.setState({errors:{errorFe:n}})}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"modal",id:"signUpBtn",tabindex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("h4",{className:"text-center"},l.a.createElement("i",{className:"fas fa-user-plus"})," Sign Up"),l.a.createElement("hr",null),this.state.errors?Object.values(this.state.errors).map(function(e){return l.a.createElement(T,{message:e})}):"",l.a.createElement("form",null,l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"name"},"Full Name"),l.a.createElement("input",{value:this.state.name,name:"name",onChange:this.handleInputChange,type:"text",class:"form-control",id:"name","aria-describedby":"name",placeholder:"Enter Your Name"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{value:this.state.email,name:"email",onChange:this.handleInputChange,type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),l.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Password"),l.a.createElement("input",{value:this.state.password,name:"password",onChange:this.handleInputChange,type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"confirmPass"},"Confirm Password"),l.a.createElement("input",{value:this.state.confirm,name:"confirm",onChange:this.handleInputChange,type:"password",class:"form-control",id:"confirmPass",placeholder:"Confirm Password"})),l.a.createElement("button",{onClick:this.handleFormSubmit,type:"submit",class:"btn btn-primary col-12"},l.a.createElement("i",{className:"fas fa-user-plus"})," Sign Up")),l.a.createElement("p",{className:"text-center"},"Already have an account? ",l.a.createElement("a",{href:"","data-dismiss":"modal","data-toggle":"modal","data-target":"#loginBtn"},"Log In"))))))}}]),t}(l.a.Component);var F=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null),l.a.createElement(A,e),l.a.createElement(h,null),l.a.createElement(f,null),l.a.createElement(D,null),l.a.createElement(P,null))};var L,R=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:"images/logo.png",alt:"homepage",width:"100",height:"30"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/user"},"Account"))),l.a.createElement("button",{onClick:S,className:"btn btn-danger ml-3"},"Logout")))},_=a(121),M=a.n(_),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",image:""},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(B.a)({},n,l))},a.handleFormSubmit=function(e){var t;e.preventDefault(),b.a.get("/api/user/env/getInfo").then(function(e){t=new M.a(e.data.pexels);var n=O(localStorage.getItem("jwtToken")).payload.id;if(a.state.title){var l={title:a.state.title,image:""};t.search(l.title,1,1).then(function(e){l.image=e.photos[0].src.medium,b.a.post("/api/items/".concat(n),l).then(function(e){return window.location.reload()}).catch(function(e){return console.log(e)})}).catch(function(e){console.log(e)}),a.setState({title:""})}})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"modal",id:"postItemBtn",tabindex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("h4",{className:"text-center"},l.a.createElement("i",{class:"far fa-plus-square"})," Post an Item"),l.a.createElement("hr",null),l.a.createElement("form",null,l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"name"},"Title"),l.a.createElement("input",{value:this.state.title,name:"title",onChange:this.handleInputChange,type:"text",class:"form-control",id:"title","aria-describedby":"title",placeholder:"Enter a Bucketlist Item"})),l.a.createElement("button",{onClick:this.handleFormSubmit,type:"submit",class:"btn btn-primary col-12"},l.a.createElement("i",{class:"far fa-plus-square"})," Post"))))))}}]),t}(l.a.Component),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",image:"",items:[],userId:""},a.setUserInfo=function(){var e=O(localStorage.getItem("jwtToken")).payload;a.setState({userId:e.id}),a.setState({name:e.name}),b.a.get("/api/user/populatedUser/".concat(e.id)).then(function(e){a.setState({items:e.data.items,image:e.data.image})}).catch(function(e){return console.log(e)})},a.removeItem=function(e){var t=O(localStorage.getItem("jwtToken")).payload.id;b.a.put("/api/user/isRemoved/".concat(t),{id:e}).then(function(e){window.location.reload()}).catch(function(e){return console.log(e)})},a.itemDone=function(e){b.a.put("/api/user/isDone/".concat(e),{id:a.state.userId}).then(function(e){window.location.reload()}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){if(!localStorage.getItem("jwtToken"))return window.location.replace("/");this.setUserInfo()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"jumbotron bg-transparent text-center"},l.a.createElement("img",{style:{width:"18rem"},src:this.state.image,alt:this.state.name,className:"rounded-circle"}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary btn-lg mt-3","data-toggle":"modal","data-target":"#profilePicture"},"Upload Profile Picture"),l.a.createElement("h1",{className:"display-4"},"Hello, ",this.state.name,"!"),l.a.createElement("button",{className:"btn btn-outline-success btn-lg","data-toggle":"modal","data-target":"#postItemBtn"},"Post a Bucketlist Item"),l.a.createElement("button",{className:"btn btn-danger ml-3 btn-lg","data-toggle":"modal","data-target":"#delete-modal"},"Delete Account")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h3",null,"Bucketlist Items"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},this.state.items.filter(function(t){return!t.isDone.includes(e.state.userId)&&!t.isRemoved}).map(function(t){return l.a.createElement(x,Object.assign({profile:!0,user:!0,itemDone:e.itemDone,removeItem:e.removeItem},t))})),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col bg-success text-white"},l.a.createElement("h3",{className:""},"Completed Items"))),l.a.createElement("div",{className:"row"},this.state.items.filter(function(t){return t.isDone.includes(e.state.userId)&&!t.isRemoved}).map(function(t){return l.a.createElement(x,Object.assign({user:!0,profile:!0,isDone:e.isDone,removeItem:e.removeItem},t))}))))}}]),t}(l.a.Component),Y=a(44),z=a(55),q=a.n(z);a(268);b.a.get("/api/user/apiKeys").then(function(e){return L=e.data.firebase});var J={apiKey:L,authDomain:"bucketlist-c3666.firebaseapp.com",databaseURL:"https://bucketlist-c3666.firebaseio.com",projectId:"bucketlist-c3666",storageBucket:"bucketlist-c3666.appspot.com",messagingSenderId:"1077501426212"};q.a.initializeApp(J);var K=q.a.storage(),G=["jpg","png","jpeg"],Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t,n=a.fileInput.current.files[0],l=n.name.split(".").pop();G.includes(l)?((t=K.ref("bucketlist/"+n.name)).put(n),t.put(n).on("state_changed",function(e){var t=e.bytesTransferred/e.totalBytes*100;(a.setState({valuenow:t,width:"".concat(t,"%"),text:"".concat(Math.round(t),"%")}),100===t)&&K.ref("bucketlist/"+n.name).getDownloadURL().then(function(e){var t=O(localStorage.getItem("jwtToken")).payload.id;b.a.put("api/user/profilePicture/".concat(t),{image:e}).then(function(e){return window.location.reload()}).catch(function(e){return console.log(e)})}).catch(function(e){})})):a.setState({errors:{image:"Please choose a valid image file(jpeg, png, jpg)"}})},a.state={valuenow:"",width:"",text:"",errors:!1},a.handleSubmit=a.handleSubmit.bind(Object(Y.a)(Object(Y.a)(a))),a.fileInput=l.a.createRef(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"modal",id:"profilePicture",tabindex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Upload a Profile Photo"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-body justify-content-center"},l.a.createElement("h5",{className:"card-title"},"Upload a Profile Photo"),l.a.createElement("label",{className:"btn btn-secondary",id:"upload-btn",for:"fileButton"},"Upload"),l.a.createElement("input",{type:"file",ref:this.fileInput,id:"fileButton",style:{display:"none"}}),l.a.createElement("div",{id:"warningImg"}),l.a.createElement("br",null),this.state.errors?Object.values(this.state.errors).map(function(e){return l.a.createElement(T,{message:e})}):"",l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated bg-secondary",role:"progressbar","aria-valuenow":this.state.valuenow,"aria-valuemin":"0","aria-valuemax":"100",style:{width:this.state.width}},this.state.text)),l.a.createElement("div",{id:"uploadBttn"}),l.a.createElement("div",{id:"warningImg"}))),l.a.createElement("br",null))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{id:"pic-btn",type:"submit",onClick:this.handleSubmit,className:"btn btn-primary "},"Submit")))))}}]),t}(l.a.Component),V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleDelete=function(){var e=O(localStorage.getItem("jwtToken")).payload.id;b.a.delete("/api/user/deleteAccount/".concat(e)).then(function(e){S()}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"delete-modal",className:"modal",tabindex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Delete Account"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,"Do you want to delete your account?")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"No"),l.a.createElement("button",{id:"delete-confirm",onClick:this.handleDelete,type:"button",className:"btn btn-primary"},"Yes")))))}}]),t}(l.a.Component);var X=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,null),l.a.createElement(Q,null),l.a.createElement(R,null),l.a.createElement(W,null),l.a.createElement(P,null))};var Z=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(R,null),l.a.createElement(f,null),l.a.createElement(D,null),l.a.createElement(P,null))};if(localStorage.getItem("jwtToken")){O(localStorage.getItem("jwtToken")).payload;b.a.get().then().catch()}var $=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:localStorage.getItem("jwtToken")?Z:F}),l.a.createElement(p.a,{exact:!0,path:"/user",component:localStorage.getItem("jwtToken")?X:function(){return window.location.replace("/")}}))))}}]),t}(n.Component);s.a.render(l.a.createElement($,null),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.7e7021f8.chunk.js.map