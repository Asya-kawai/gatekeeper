"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[835],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),b=i,m=d["".concat(l,".").concat(b)]||d[b]||c[b]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={id:"pubsub",title:"Consuming violations using Pubsub"},l=void 0,p={unversionedId:"pubsub",id:"version-v3.13.x/pubsub",title:"Consuming violations using Pubsub",description:"Feature State: Gatekeeper version v3.13+ (alpha)",source:"@site/versioned_docs/version-v3.13.x/pubsub.md",sourceDirName:".",slug:"/pubsub",permalink:"/gatekeeper/website/docs/pubsub",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.13.x/pubsub.md",tags:[],version:"v3.13.x",frontMatter:{id:"pubsub",title:"Consuming violations using Pubsub"},sidebar:"docs",previous:{title:"Working with Workload Resources",permalink:"/gatekeeper/website/docs/workload-resources"},next:{title:"Integration with Kubernetes Validating Admission Policy",permalink:"/gatekeeper/website/docs/validating-admission-policy"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Enabling Gatekeeper to export audit violations",id:"enabling-gatekeeper-to-export-audit-violations",level:2},{value:"Setting up audit with pubsub enabled",id:"setting-up-audit-with-pubsub-enabled",level:3},{value:"Available Pubsub drivers",id:"available-pubsub-drivers",level:4},{value:"Violations",id:"violations",level:3},{value:"Quick start with publishing violations using Dapr and Redis",id:"quick-start-with-publishing-violations-using-dapr-and-redis",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Configure a sample subscriber to receive violations",id:"configure-a-sample-subscriber-to-receive-violations",level:4},{value:"Configure Gatekeeper with Pubsub enabled",id:"configure-gatekeeper-with-pubsub-enabled",level:4}],d={toc:c};function b(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Feature State"),": Gatekeeper version v3.13+ (alpha)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2757 This feature is alpha, subject to change (feedback is welcome!).")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This feature pushes audit violations to a pubsub service. Users can subscribe to pubsub service to consume violations."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To gain insights into different methods of obtaining audit violations and the respective trade-offs for each approach, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/audit#reading-audit-results"},"Reading Audit Results"),".")),(0,r.kt)("h2",{id:"enabling-gatekeeper-to-export-audit-violations"},"Enabling Gatekeeper to export audit violations"),(0,r.kt)("p",null,"Install prerequisites such as a pubsub tool, a message broker etc."),(0,r.kt)("h3",{id:"setting-up-audit-with-pubsub-enabled"},"Setting up audit with pubsub enabled"),(0,r.kt)("p",null,"In the audit deployment, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"--enable-pub-sub")," flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to publish audit violations. Additionally, ",(0,r.kt)("inlineCode",{parentName:"p"},"--audit-connection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--audit-channel")," flags must be set to allow audit to publish violations. ",(0,r.kt)("inlineCode",{parentName:"p"},"--audit-connection")," must be set to the name of the connection config, and ",(0,r.kt)("inlineCode",{parentName:"p"},"--audit-channel")," must be set to name of the channel where violations should get published."),(0,r.kt)("p",null,"Create a connection configMap that supplies ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/pubsub-driver#how-to-use-different-providers"},"a provider-specific configuration")," for a connection to get established. For instance, to establish a connection that uses Dapr to publish messages this configMap is appropriate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: audit-pubsub-connection\n  namespace: gatekeeper-system\ndata:\n  provider: "dapr"\n  config: |\n    {\n      "component": "pubsub"\n    }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"provider")," field determines which tool/driver should be used to establish a connection. Valid values are: ",(0,r.kt)("inlineCode",{parentName:"li"},"dapr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config")," field is a json object that configures how the connection is made. E.g. which queue messages should be sent to.")),(0,r.kt)("h4",{id:"available-pubsub-drivers"},"Available Pubsub drivers"),(0,r.kt)("p",null,"Dapr: ",(0,r.kt)("a",{parentName:"p",href:"https://dapr.io/"},"https://dapr.io/")),(0,r.kt)("h3",{id:"violations"},"Violations"),(0,r.kt)("p",null,"The audit pod publishes violations in following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2023-07-18T21:21:52Z",\n  "details": {\n    "missing_labels": [\n      "test"\n    ]\n  },\n  "eventType": "violation_audited",\n  "group": "constraints.gatekeeper.sh",\n  "version": "v1beta1",\n  "kind": "K8sRequiredLabels",\n  "name": "pod-must-have-test",\n  "message": "you must provide labels: {\\"test\\"}",\n  "enforcementAction": "deny",\n  "resourceAPIVersion": "v1",\n  "resourceKind": "Pod",\n  "resourceNamespace": "nginx",\n  "resourceName": "nginx-deployment-cd55c47f5-2b84x",\n  "resourceLabels": {\n    "app": "nginx",\n    "pod-template-hash": "cd55c47f5"\n  }\n}\n')),(0,r.kt)("h3",{id:"quick-start-with-publishing-violations-using-dapr-and-redis"},"Quick start with publishing violations using Dapr and Redis"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Redis is used for example purposes only. Dapr supports ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/reference/components-reference/supported-state-stores/"},"many different state store options"),".")),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Dapr"),(0,r.kt)("p",{parentName:"li"},"To install Dapr with specific requirements and configuration, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-deploy/"},"Dapr docs"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Dapr is installed with mtls enabled by default, for more details on the same plaase refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/operations/security/mtls/#setting-up-mtls-with-the-configuration-resource"},"Dapr security"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Redis"),(0,r.kt)("p",{parentName:"li"},"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/getting-started/tutorials/configure-state-pubsub/#step-1-create-a-redis-store"},"this")," guide to install Redis."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"To install Redis with TLS, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bitnami.com/kubernetes/infrastructure/redis-cluster/administration/enable-tls/"},"this")," doc.")))),(0,r.kt)("h4",{id:"configure-a-sample-subscriber-to-receive-violations"},"Configure a sample subscriber to receive violations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"fake-subscriber")," namespace and redis secret")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns fake-subscriber\nkubectl get secret redis --namespace=default -o yaml | sed 's/namespace: .*/namespace: fake-subscriber/' | kubectl apply -f - # creating redis secret in subscriber namespace to allow dapr sidecar to connect to redis instance\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create Dapr pubsub component")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f <<EOF\napiVersion: dapr.io/v1alpha1\nkind: Component\nmetadata:\n  name: pubsub\n  namespace: fake-subscriber\nspec:\n  type: pubsub.redis\n  version: v1\n  metadata:\n  - name: redisHost\n    value: redis-master.default.svc.cluster.local:6379\n  - name: redisPassword\n    secretKeyRef: \n      name: redis\n      key: redis-password\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/reference/components-reference/supported-state-stores/setup-redis/"},"this guide")," to properly configure Redis pubsub component for Dapr.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Deploy subscriber application")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sub\n  namespace: fake-subscriber\n  labels:\n    app: sub\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: sub\n  template:\n    metadata:\n      labels:\n        app: sub\n      annotations:\n        dapr.io/enabled: "true"\n        dapr.io/app-id: "subscriber"\n        dapr.io/enable-api-logging: "true"\n        dapr.io/app-port: "6002"\n    spec:\n      containers:\n      - name: go-sub\n        image: fake-subscriber:latest\n        imagePullPolicy: Never\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Dockerfile to build image for fake-subscriber is under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/test/pubsub/fake-subscriber"},"gatekeeper/test/fake-subscriber"),". You can find make rule to build and deploy subscriber in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/master/Makefile"},"Makefile")," under name ",(0,r.kt)("inlineCode",{parentName:"p"},"e2e-subscriber-build-load-image")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"e2e-subscriber-deploy"),"."),(0,r.kt)("h4",{id:"configure-gatekeeper-with-pubsub-enabled"},"Configure Gatekeeper with Pubsub enabled"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create Dapr pubsub component and Redis secret in Gatekeeper's namespace (",(0,r.kt)("inlineCode",{parentName:"li"},"gatekeeper-system")," by default). Please make sure to update ",(0,r.kt)("inlineCode",{parentName:"li"},"gatekeeper-system")," namespace for the next steps if your cluster's Gatekeeper namespace is different.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret redis --namespace=default -o yaml | sed 's/namespace: .*/namespace: gatekeeper-system/' | kubectl apply -f -\nkubectl apply -f - <<EOF\napiVersion: dapr.io/v1alpha1\nkind: Component\nmetadata:\n  name: pubsub\n  namespace: gatekeeper-system\nspec:\n  type: pubsub.redis\n  version: v1\n  metadata:\n  - name: redisHost\n    value: redis-master.default.svc.cluster.local:6379\n  - name: redisPassword\n    secretKeyRef:\n      name: redis\n      key: redis-password\nEOF\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install Gatekeeper with ",(0,r.kt)("inlineCode",{parentName:"li"},"--enable-pub-sub")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-connection")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"audit-pubsub-connection"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-channel")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"audit")," on audit pod.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo \'auditPodAnnotations: {dapr.io/enabled: "true", dapr.io/app-id: "audit", dapr.io/metrics-port: "9999"}\' > .tmp/annotations.yaml # auditPodAnnotations is used to add annotations required by Dapr to inject sidecar to audit pod\nhelm install gatekeeper/gatekeeper --name-template=gatekeeper --namespace gatekeeper-system \\\n--set audit.enablePubsub=true \\\n--set audit.connection=audit-pubsub-connection \\\n--set audit.channel=audit \\\n--values .tmp/annotations.yaml\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Verify that after the audit pod is running there is a dapr sidecar injected and running along side ",(0,r.kt)("inlineCode",{parentName:"p"},"manager")," container."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create connection config to establish a connection.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -f - <<EOF\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: audit-pubsub-connection\n  namespace: gatekeeper-system\ndata:\n  provider: "dapr"\n  config: |\n    {\n      "component": "pubsub"\n    }\nEOF\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Name of the connection configMap must match the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"--audit-connection")," for it to be used by audit to publish violation. At the moment, now only one connection config can exists for audit."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create the constraint templates and constraints, and make sure audit ran by checking constraints. If constaint status is updated with information such as ",(0,r.kt)("inlineCode",{parentName:"li"},"auditTimeStamp")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"totalViolations"),", then audit has ran atleast once. Additionally, populated ",(0,r.kt)("inlineCode",{parentName:"li"},"TOTAL-VIOLATIONS")," field for all constraints while lising constraints also indicates that audit has ran at least once.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"kubctl get constraint\nNAME                 ENFORCEMENT-ACTION   TOTAL-VIOLATIONS\npod-must-have-test                        0\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Finally, check the subscriber logs to see the violations received.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'kubectl logs pod/sub-57bd5d694-7lvzf -c go-sub -n fake-subscriber \n2023/07/18 20:16:41 Listening...\n2023/07/18 20:37:20 main.PubsubMsg{ID:"2023-07-18T20:37:19Z", Details:map[string]interface {}{"missing_labels":[]interface {}{"test"}}, EventType:"violation_audited", Group:"constraints.gatekeeper.sh", Version:"v1beta1", Kind:"K8sRequiredLabels", Name:"pod-must-have-test", Namespace:"", Message:"you must provide labels: {\\"test\\"}", EnforcementAction:"deny", ConstraintAnnotations:map[string]string(nil), ResourceGroup:"", ResourceAPIVersion:"v1", ResourceKind:"Pod", ResourceNamespace:"nginx", ResourceName:"nginx-deployment-58899467f5-j85bs", ResourceLabels:map[string]string{"app":"nginx", "owner":"admin", "pod-template-hash":"58899467f5"}}\n')))}b.isMDXComponent=!0}}]);