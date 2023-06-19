"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2178],{6029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},l=void 0,i={unversionedId:"api/nativeMethods/scrollTo",id:"version-2.x/api/nativeMethods/scrollTo",title:"scrollTo",description:"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags (which might have otherwise occured when it was asynchronous and based on lots of events).",source:"@site/versioned_docs/version-2.x/api/nativeMethods/scrollTo.md",sourceDirName:"api/nativeMethods",slug:"/api/nativeMethods/scrollTo",permalink:"/react-native-reanimated/docs/2.x/api/nativeMethods/scrollTo",draft:!1,tags:[],version:"2.x",frontMatter:{id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},sidebar:"docs",previous:{title:"measure",permalink:"/react-native-reanimated/docs/2.x/api/nativeMethods/measure"},next:{title:"getRelativeCoords",permalink:"/react-native-reanimated/docs/2.x/api/miscellaneous/getRelativeCoords"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>animatedRef</code>",id:"animatedref",level:4},{value:"<code>x</code> Float",id:"x-float",level:4},{value:"<code>y</code> Float",id:"y-float",level:4},{value:"<code>animated</code> Boolean",id:"animated-boolean",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags (which might have otherwise occured when it was asynchronous and based on lots of events)."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"animatedref"},(0,o.kt)("inlineCode",{parentName:"h4"},"animatedRef")),(0,o.kt)("p",null,"The product of ",(0,o.kt)("a",{parentName:"p",href:"../hooks/useAnimatedRef"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedRef"))," which is Reanimated's extension of a standard React ref (delivers the view tag on the UI thread)."),(0,o.kt)("h4",{id:"x-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"x")," ","[Float]"),(0,o.kt)("p",null,"Corresponds to the pixel along the horizontal axis of the element that you want displayed in the upper left."),(0,o.kt)("h4",{id:"y-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"y")," ","[Float]"),(0,o.kt)("p",null,"Corresponds to the pixel along the vertical axis of the element that you want displayed in the upper left."),(0,o.kt)("h4",{id:"animated-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"animated")," ","[Boolean]"),(0,o.kt)("p",null,"Indicates whether the scroll should be smooth (",(0,o.kt)("inlineCode",{parentName:"p"},"true"),") or instant (",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { TouchableOpacity, View, Text, ScrollView } from 'react-native'\nimport { useAnimatedRef, useDerivedValue, useSharedValue, scrollTo } from 'react-native-reanimated'\n\nconst ITEM_COUNT = 10\nconst ITEM_SIZE = 100\nconst ITEM_MARGIN = 10\n\nexport const Comp = () => {\n  const aref = useAnimatedRef()\n  const scroll = useSharedValue(0)\n\n  useDerivedValue(() => {\n    scrollTo(aref, 0, scroll.value * (ITEM_SIZE + 2 * ITEM_MARGIN), true)\n  })\n\n  const items = Array.from(Array(ITEM_COUNT).keys())\n\n  const Incrementor = ({ increment }) => (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <TouchableOpacity\n        onPress={() => {\n          scroll.value =\n            scroll.value + increment > 0 ? scroll.value + increment : ITEM_COUNT - 1 + increment\n\n          if (scroll.value >= ITEM_COUNT - 2) scroll.value = 0\n        }}>\n        <Text>{`Scroll ${Math.abs(increment)} ${increment > 0 ? 'down' : 'up'}`}</Text>\n      </TouchableOpacity>\n    </View>\n  )\n\n  return (\n    <View style={{ flex: 1, flexDirection: 'column' }}>\n      <Incrementor increment={1} />\n      <View style={{ width: '100%', height: (ITEM_SIZE + 2 * ITEM_MARGIN) * 2 }}>\n        <ScrollView ref={aref} style={{ backgroundColor: 'orange' }}>\n          {items.map((_, i) => (\n            <View\n              key={i}\n              style={{\n                backgroundColor: 'white',\n                aspectRatio: 1,\n                width: ITEM_SIZE,\n                margin: ITEM_MARGIN,\n                justifyContent: 'center',\n                alignContent: 'center',\n              }}>\n              <Text style={{ textAlign: 'center' }}>{i}</Text>\n            </View>\n          ))}\n        </ScrollView>\n      </View>\n\n      <Incrementor increment={-1} />\n    </View>\n  )\n}\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);