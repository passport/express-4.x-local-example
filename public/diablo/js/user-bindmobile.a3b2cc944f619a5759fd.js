webpackJsonp([23],{401:function(n,e,t){t(644);var o=t(0)(t(532),t(754),"data-v-11369162",null);n.exports=o.exports},431:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{closeModal:function(){$bus.$emit("closeAgreementModal")}}}},446:function(n,e,t){e=n.exports=t(360)(),e.push([n.i,'/* thin border */\n.bar.bar-header[data-v-cd819178] {\n  position: fixed;\n  background: #F5F5F5 !important;\n  height: 50px;\n  text-align: center;\n  box-shadow: none;\n}\n.bar.bar-header h1[data-v-cd819178] {\n    font-size: 17px;\n    height: 22px;\n    line-height: 22px;\n    color: #3a3a3a;\n    margin-top: 9px;\n    margin-left: 15px;\n    font-family: "PingFangSC-Semibold", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n}\n.bar.bar-header .button-bg[data-v-cd819178] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 60px;\n    height: 50px;\n    background-color: #f0f0f0;\n}\n.bar.bar-header .close[data-v-cd819178] {\n    position: absolute;\n    right: 21px;\n    top: 16px;\n}\n.bar.bar-header .close img[data-v-cd819178] {\n      width: 18px;\n      height: 18px;\n}\n.bar.bar-header .button-back[data-v-cd819178] {\n    position: absolute;\n    top: 16px;\n    right: 10px;\n    width: 25px;\n    height: 25px;\n    z-index: 100px;\n    background-image: url(//qianka.b0.upaiyun.com/images/24c28298410595e40dd7cd3caa9b2fbb.png);\n    background-size: 13px 13px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.page-content[data-v-cd819178] {\n  padding: 0 20px;\n  text-align: justify;\n  background-color: #fff;\n}\n.page-content h5[data-v-cd819178] {\n    font-size: 14px;\n    color: #484746;\n    line-height: 20px;\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.page-content h6[data-v-cd819178] {\n    font-size: 13px;\n    color: #888;\n    line-height: 18px;\n    margin-bottom: 10px;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.page-content p[data-v-cd819178] {\n    font-size: 13px;\n    color: #888;\n    line-height: 22px;\n    margin-bottom: 30px;\n    letter-spacing: 1px;\n}\n',"",{version:3,sources:["/Users/wumin/diablo/src/components/Agreement.vue"],names:[],mappings:"AAAA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,aAAa;EACb,mBAAmB;EACnB,iBAAiB;CAClB;AACD;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,wGAAwG;CAC3G;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,OAAO;IACP,YAAY;IACZ,aAAa;IACb,0BAA0B;CAC7B;AACD;IACI,mBAAmB;IACnB,YAAY;IACZ,UAAU;CACb;AACD;MACM,YAAY;MACZ,aAAa;CAClB;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;IACf,2FAA2F;IAC3F,2BAA2B;IAC3B,6BAA6B;IAC7B,4BAA4B;CAC/B;AACD;EACE,gBAAgB;EAChB,oBAAoB;EACpB,uBAAuB;CACxB;AACD;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,cAAc;IACd,oBAAoB;IACpB,uGAAuG;IACvG,iBAAiB;CACpB;AACD;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,uGAAuG;IACvG,iBAAiB;CACpB;AACD;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,oBAAoB;CACvB",file:"Agreement.vue",sourcesContent:['/* thin border */\n.bar.bar-header[data-v-cd819178] {\n  position: fixed;\n  background: #F5F5F5 !important;\n  height: 50px;\n  text-align: center;\n  box-shadow: none;\n}\n.bar.bar-header h1[data-v-cd819178] {\n    font-size: 17px;\n    height: 22px;\n    line-height: 22px;\n    color: #3a3a3a;\n    margin-top: 9px;\n    margin-left: 15px;\n    font-family: "PingFangSC-Semibold", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n}\n.bar.bar-header .button-bg[data-v-cd819178] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 60px;\n    height: 50px;\n    background-color: #f0f0f0;\n}\n.bar.bar-header .close[data-v-cd819178] {\n    position: absolute;\n    right: 21px;\n    top: 16px;\n}\n.bar.bar-header .close img[data-v-cd819178] {\n      width: 18px;\n      height: 18px;\n}\n.bar.bar-header .button-back[data-v-cd819178] {\n    position: absolute;\n    top: 16px;\n    right: 10px;\n    width: 25px;\n    height: 25px;\n    z-index: 100px;\n    background-image: url(//qianka.b0.upaiyun.com/images/24c28298410595e40dd7cd3caa9b2fbb.png);\n    background-size: 13px 13px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.page-content[data-v-cd819178] {\n  padding: 0 20px;\n  text-align: justify;\n  background-color: #fff;\n}\n.page-content h5[data-v-cd819178] {\n    font-size: 14px;\n    color: #484746;\n    line-height: 20px;\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.page-content h6[data-v-cd819178] {\n    font-size: 13px;\n    color: #888;\n    line-height: 18px;\n    margin-bottom: 10px;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.page-content p[data-v-cd819178] {\n    font-size: 13px;\n    color: #888;\n    line-height: 22px;\n    margin-bottom: 30px;\n    letter-spacing: 1px;\n}\n'],sourceRoot:""}])},453:function(n,e,t){var o=t(446);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(361)("7cd77537",o,!0)},456:function(n,e,t){t(453);var o=t(0)(t(431),t(460),"data-v-cd819178",null);n.exports=o.exports},460:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"page"},[t("div",{staticClass:"bar bar-header"},[t("h1",[n._v("用户服务协议")]),n._v(" "),t("div",{staticClass:"button-bg"}),n._v(" "),t("div",{staticClass:"close",on:{click:function(e){n.closeModal()}}},[t("img",{attrs:{src:"//assets.qkcdn.com/images/d04626874955af7ce9fc4a974a4b76ab.png"}})])]),n._v(" "),n._m(0)])},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"page-content"},[t("div",{staticStyle:{height:"80px"}}),n._v(" "),t("h5",[n._v("前言")]),n._v(" "),t("p",[n._v("\n      协议是由用户（以下简称为“您”）与钱咖网络平台（以下简称为“我们”）就我们所提供的产品和服务（包括我们的网站以及我们现在正在提供和将来可能向您提供的网络服务，以下统称为“产品和服务”）所订立的协议。"),t("br"),n._v("\n      为保障您的权益，请于注册使用本公司所提供的产品和服务前，务必审慎阅读、充分理解条款的各项内容、特别是限制或免除责任的相应条款，并选择接受或不接受，限制或免除责任条款可能以加粗形式提示您注意。如您获得并使用我们所提供的产品和服务（包括但不仅限于下载、登陆、查看等行为），即视为您已经详细阅读并同意受本协议的约束。钱咖有权在必要时修改本协议条款。您可以在相关页面中查阅最新的协议条款。本协议条款变更后，如您继续使用本服务，即视为您已接受修改后的条款。如您不接受修改后的协议，应当立即停止使用本产品及服务。\n    ")]),n._v(" "),t("h5",[n._v("一、关于服务内容")]),n._v(" "),t("p",[n._v("\n      （1）我们服务的具体内容由我们根据实际情况提供。保留随时变更、中断或终止部分或全部网络服务的权利。"),t("br"),n._v("\n      （2）我们在提供网络服务时，可能会对部分使用网络服务的用户收取适当的费用。在此情况下，会在相关页面上做明确的提示。如用户不同意支付该等费用，则无权使用此网络服务。"),t("br"),n._v("\n      （3）用户理解：仅提供相关的网络服务，除此之外与相关网络服务有关的设备(如电脑、调制解调器及其他与接入互联网有关的装置)及所需的费用(如为接入互联网而支付的电话费及上网费)均应由用户自行负担。"),t("br"),n._v("\n      （4）用户应使用正版软件接受网络服务。"),t("br"),n._v("\n      （5）您在钱咖下载第三方应用或体验第三方服务前，应充分了解第三方产品及服务可能带来的风险，您下载第三方应用、体验第三方服务均属您个人行为，由您个人行为造成的危害、损失需要您自行承担责任。"),t("br")]),n._v(" "),t("h5",[n._v("二、有关个人资料")]),n._v(" "),t("h6",[n._v("1.提供个人资料")]),n._v(" "),t("p",[n._v("\n      （1）在填写资料时，请保持这些信息的及时更新，以便我们向您提供帮助，或更好地为您提供服务。若国家法律法规有特殊规定的，您需要填写真实的身份信息。若您填写的信息不完整或不准确，则可能无法使用服务或者在使用过程中受到限制。"),t("br"),n._v("\n      （2）所有由您提供的个人资料将被我们用来作为识别您和其他用户的依据；"),t("br"),n._v("\n      （3）如果您所提供的个人资料与事实不符，或已变更而未及时更新，或有任何误导之嫌，导致我们无法为您提供或进一步提供产品和服务等情况时，我们将不承担任何责任。"),t("br")]),n._v(" "),t("h6",[n._v("2.修改资料")]),n._v(" "),t("p",[n._v("\n      您可以在任何时候，通过我们官方网站提供的产品和服务或我们公布的其他途径，更新或修改您所提供的资料。"),t("br")]),n._v(" "),t("h6",[n._v("3.个人资料的披露")]),n._v(" "),t("p",[n._v("\n      为了向您提供产品和服务，您同意授权我们以我们认为适当的方式向第三方透露您的资料。但是，我们不会公开您的姓名、住址、通讯地址、电子邮箱、账号、密码等个人资料。除非："),t("br"),n._v("\n      （1）您允许我们披露这些个人资料；"),t("br"),n._v("\n      （2）部分服务需要将资料提供第三方进行比对确认；"),t("br"),n._v("\n      （3）有关法律法规或行政规章要求我们披露您的个人资料；"),t("br"),n._v("\n      （4）司法机关或行政机关基于法定程序要求我们披露您的个人资料；"),t("br"),n._v("\n      （5）为保护我们的知识产权和其他财产权益，需要披露您的个人资料；"),t("br"),n._v("\n      （6）在紧急情况下为保护其他用户和社会大众的人身安全，需要披露您的个人资料。"),t("br"),n._v("\n      我们将采取商业上合理的方式以保护您的个人资料的安全。我们将使用通常可以获得的安全技术和程序来保护您的个人资料不被未经授权的访问、使用或泄漏。对于非因我们的疏忽而造成您账号的丢失或您个人资料的泄密，我们不承担任何责任。\n    ")]),n._v(" "),t("h5",[n._v("三、关于账号")]),n._v(" "),t("p",[n._v("\n      此处指的是您注册成功的账号。请了解账号在注册之后不可变更。您对于您的账号的保管以及使用该账号所进行的一切行动负有完全的责任。请不要将账号转让或出借给他人使用。因为您的保管疏忽或其他任何个人行为导致您的账号遭他人非法使用及因此所衍生的任何后果，我们不承担任何责任。"),t("br"),n._v(" "),t("br"),n._v(" "),t("b",[n._v("为促进平台健康发展，当您的钱咖账户超过（含）90自然日未登录时，我们有权在不通知您的情况下清空您钱咖账户上的全部信息，包含但不限于账户及余额。")])]),n._v(" "),t("h5",[n._v("四、您的权利")]),n._v(" "),t("p",[n._v("\n      1.您可以根据本协议以及我们不时更新和公布的其他规则使用我们提供的产品和服务。"),t("br"),n._v("\n      2.您有权在使用我们提供的产品和服务期间监督我们及我们的工作人员是否按照我们所公布的标准向您提供产品和服务，也可以随时向我们提出与我们的产品和服务有关的意见和建议。"),t("br"),n._v("\n      3.如果您不同意本协议条款，或对我们后来更新的条款有异议，或对我们所提供的产品和服务不满意，您可以选择停止使用我们的产品和服务。如果您选择停止使用我们的产品和服务，则我们即不再对您承担任何义务和责任。\n    ")]),n._v(" "),t("h5",[n._v("五、您的义务")]),n._v(" "),t("p",[n._v("\n      1.您同意按照我们不时发布、变更和修改的本协议条款及其他规则接受并使用我们的产品和服务，您不得通过不正当的手段或其他不公平的手段使用我们的产品和服务或参与我们活动。"),t("br"),n._v("\n      2.您不得干扰我们正常地提供产品和服务，包括但不限于："),t("br"),n._v("\n      （1）攻击、侵入我们的网站服务器或使网站服务器过载；"),t("br"),n._v("\n      （2）破解、修改我们提供的网页或客户端等程序；"),t("br"),n._v("\n      （3）攻击、侵入我们的平台服务器或服务器端程序或使服务器过载；"),t("br"),n._v("\n      （4）制作、使用、发布、传播任何形式的妨碍平台公平性的辅助工具或程序（外挂）；"),t("br"),n._v("\n      （5）利用程序的漏洞和错误（Bug）破坏平台的正常进行或传播该漏洞或错误（Bug)，包括但不仅限于："),t("br"),n._v(" "),t("ul",{staticStyle:{"margin-left":"40px","list-style-type":"disc"}},[t("li",[n._v("\n              使用苹果共享账号、兑换码和第三方市场下载付费任务的\n          ")]),n._v(" "),t("li",[n._v("\n              一台设备刷机或利用漏洞生成超过1个钱咖账号的\n          ")]),n._v(" "),t("li",[n._v('\n              同一人多台设备使用多个钱咖账号的（"多个"的定义需根据情节严重性而具体判断）\n          ')]),n._v(" "),t("li",[n._v("\n              苹果设备越狱或使用第三方助手多开程序的\n          ")]),n._v(" "),t("li",[n._v("\n            利用规则漏洞反复刷取奖励及各类优惠券的\n          ")])]),n._v(" "),t("br"),n._v("\n      （6）不合理地干扰或阻碍他人使用我们所提供的产品和服务。"),t("br"),n._v("\n      违规的账号将全部冻结、禁止提现且不允许解冻。我们将视情况的严重程度决定是否以法律途径进行追责 "),t("br"),n._v("\n      3.您必须独立保管好自己的账号信息，由于您的原因导致账号泄密而造成的后果均将由您自行承担。"),t("br"),n._v("\n      4.您仅能以一个单独的个人的身份使用我们所提供的产品和服务，您不能利用我们所提供的产品和服务从事商业目的的活动，也不能利用我们的产品和服务进行销售或其他商业目的的活动。"),t("br"),n._v("\n      5.您需对自己账号中的所有活动和事件负责。您须遵守有关互联网信息发布的有关法律、法规及通常适用的互联网一般道德和礼仪的规范，您将自行承担您所发布的信息内容的责任。特别的，您不得发布下列内容："),t("br"),n._v("\n      （1）反对宪法所确定的基本原则的；"),t("br"),n._v("\n      （2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；"),t("br"),n._v("\n      （3）损害国家荣誉和利益的；"),t("br"),n._v("\n      （4）煽动民族仇恨、民族歧视，破坏民族团结的；"),t("br"),n._v("\n      （5）破坏国家宗教政策，宣扬邪教和封建迷信的；"),t("br"),n._v("\n      （6）散布谣言，扰乱社会秩序，破坏社会稳定的；"),t("br"),n._v("\n      （7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；"),t("br"),n._v("\n      （8）侮辱或者诽谤他人，侵害他人合法权益的；"),t("br"),n._v("\n      （9）含有法律、行政法规禁止的其他内容的。"),t("br"),n._v("\n      （10）侵犯任何第三者的知识产权，版权或公众/私人权利的。"),t("br"),n._v("\n      （11）违反人文道德、风俗习惯的。\n    ")]),n._v(" "),t("h5",[n._v("六、隐私保护")]),n._v(" "),t("p",[n._v("\n      1.保护用户（特别是未成年人）的隐私是我们的一项基本政策，因此，若父母（监护人）希望未成年人（尤其是十岁以下子女）得以使用本服务，必须以父母（监 护人）名义申请注册，在接受本服务时，应以法定监护人身份加以判断本服务是否符合于未成年人。 我们保证不对外公开或向第三方 （本协议第六条第2款所列情况除外）提供用户注册资料及用户在使用网络服务时存储在的非公开内容，但下列情况除外："),t("br"),n._v("\n      （1）事先获得用户的明确授权；"),t("br"),n._v("\n      （2）根据有关的法律法规要求；"),t("br"),n._v("\n      （3）按照相关政府主管部门的要求；"),t("br"),n._v("\n      （4）为维护社会公众的利益；"),t("br"),n._v("\n      （5）为维护我们的合法权益。"),t("br"),n._v("\n      2.在不透露单个用户隐私资料的前提下，有权对整个用户数据库进行技术分析并对已进行分析、整理后的用户数据库进行商业上的利用。 尽管对用户的隐私权保护做了极大的努力，但是仍然不能保证现有的安全技术措施使用户的技术信息等不受任何形式的损失。\n    ")]),n._v(" "),t("h5",[n._v("七、免责声明")]),n._v(" "),t("p",[n._v("\n      1.钱咖网络平台不保证以下事宜："),t("br"),n._v("\n      (1) 本服务将完全符合您的要求；"),t("br"),n._v("\n      (2) 本服务将不受干扰、及时提供、安全可靠或不会出错。"),t("br"),n._v("\n      2.用户明确同意其使用网络服务所存在的风险将完全由其自己承担；因其使用网络服务而产生的一切后果也由其自己承担，对用户不承担任何责任。\n    ")]),n._v(" "),t("h5",[n._v("八、服务变更、中断或终止")]),n._v(" "),t("p",[n._v("\n      1.如因系统维护或升级的需要而需暂停网络服务，将尽可能事先进行通告。"),t("br"),n._v("\n      2.如发生下列任何一种情形，有权随时中断或终止向用户提供本协议项下的网络服务而无需通知用户："),t("br"),n._v("\n      (a) 用户提供的个人资料不真实；"),t("br"),n._v("\n      (b) 用户违反本协议中规定的使用规则。"),t("br"),n._v("\n      3.除前款所述情形外，同时保留在不事先通知用户的情况下随时中断或终止部分或全部网络服务的权利，对于所有服务的中断或终止而造成的任何损失，无需对用户或任何第三方承担任何责任。\n    ")]),n._v(" "),t("h5",[n._v("九、服务中断、停止和变更的说明")]),n._v(" "),t("p",[n._v("\n      发生下列情形之一时，我们有权中断、停止或变更我们提供的服务，对于因此而产生的困扰、不便或损失，我们不承担任何责任："),t("br"),n._v("\n      1.定期检查或施工，软硬件更新等，即暂停服务，我们将尽快完成维修、维护工作。"),t("br"),n._v("\n      2.服务器遭到任何形式的破坏，无法正常运作。"),t("br"),n._v("\n      3.网络线路或其它导致用户通过Internet连接至我们服务器的动作发生滞碍等情形。"),t("br"),n._v("\n      4.自然灾害等不可抗力的因素。"),t("br"),n._v("\n      5.在紧急情况之下为维护国家安全或其它会员及第三者人身安全时。"),t("br"),n._v("\n      6.发生突发性软硬件设备与电子通信设备故障时。\n    ")]),n._v(" "),t("h5",[n._v("十、个人资料的转移和服务方式的转变")]),n._v(" "),t("p",[n._v("\n      我们将尽力持续地向您提供产品和服务，但是我们并不排除我们可能会停止提供该产品和服务的可能性，也不排除任何改变服务方式的可能性。如果我们停止或改变提供产品和服务，我们将会事先通知您，并尽力寻找适当的服务提供者或方式以代替我们继续提供产品和服务。在这种情况下，我们可能会将您的个人资料（包括有 关的账号和密码信息及个人资料）转移给该继续提供服务的一方，也可能根据需要永久封存原有资料以推行新的服务方式。您在此同意我们有权做此转移和改变，并 且同意在我们完成转移和改变之后，我们即不再对您原有资料承担任何义务和责任。但是，我们并不在此保证我们届时肯定能够找到适当的服务提供者或服务方式以 代替我们继续提供产品和服务，也不保证我们找到的服务提供者所提供的产品和服务以及改变的服务方式能够满足您的要求。\n    ")]),n._v(" "),t("h5",[n._v("十一、资费政策")]),n._v(" "),t("p",[n._v("\n      我们将有权决定我们所提供的产品和服务的资费标准和收费方式，我们可能会就不同的产品和服务制定不同的资费标准和收费方式，也可能按照我们所提供的产品和服务的不同阶段确定不同的资费标准和收费方式。另外，我们也可能不时地修改我们的资费政策。我们会将有关产品和服务的收费信息以及与该产品和服务有关的资 费标准、收费方式、购买方式或其他有关资费政策的信息放置在该产品和服务相关网页的显著位置。"),t("br"),n._v("\n      对于我们的收费产品和服务，您应该按照我们确定的资费政策购买我们的产品和服务。如果您未按我们确定的资费政策购买我们的产品和服务，我们可以立即停止向您提供该产品和服务。"),t("br"),n._v("\n      您在使用淘宝返利业务时获得的集分宝，由第三方发放至您的账户。第三方的发放行为不由我们控制，并且我们也不对第三方发放集分宝的时间、数目或任何条款更改和更新负责。我们仅为了提供便利而向您展示集分宝的数目及提现入口。您需要自行检查并遵守该第三方的相关规定。\n    ")]),n._v(" "),t("h5",[n._v("十二、版本更新变动的说明")]),n._v(" "),t("p",[n._v("\n      为增加并丰富产品的内容，我们在运行时会不定期更新并调整改变产品内所有的功能。在产品更新后，一切产品内的操作、内容、设定将以产品中的公告设定为准。\n    ")]),n._v(" "),t("h5",[n._v("十三、有限保证及责任限制")]),n._v(" "),t("p",[n._v("\n      对于我们的产品和服务，我们仅作下述有限保证，该有限保证取代任何文档、包装、或其他资料中的任何其他明示或默示的保证（如果有）。"),t("br"),n._v("\n      我们仅以“现有状况且包含所有错误”的形式提供相关的产品、软件或程序及任何支持服务，并仅保证："),t("br"),n._v("\n      （1）我们所提供的产品和服务能基本符合我们正式公布的要求；"),t("br"),n._v("\n      （2）我们所提供的相关产品和服务基本与我们正式公布的服务承诺相符；"),t("br"),n._v("\n      （3）我们仅在商业上允许的合理范围内尽力解决我们在提供产品和服务过程中所遇到的任何问题。"),t("br"),n._v("\n      在适用法律允许的最大范围内，我们明确表示不提供任何其他类型的保证，不论是明示的或默示的，包括但不限于适销性、适用性、可靠性、准确性、完整性、无病毒以及无错误的任何默示保证和责任。 另外，在适用法律允许的最大范围内，我们并不担保我们所提供的产品和服务一定能满足您的要求，也不担保提供的产品和服务不会被中断，并且对产品和服务的及 时性，安全性，出错发生以及信息是否能准确、及时、顺利地传送均不作任何担保。"),t("br"),n._v("\n      在适用法律允许的最大范围内，我们不就因您使用我们的产品和服务引起的，或在任何方面与我们的产品和服务有关的任何意外的、非直接的、特殊的、或间接的损 害或请求（包括但不限于因人身伤害、因隐私泄漏、因未能履行包括诚信或合理谨慎在内的任何责任、因过失和因任何其他金钱上的损失或其他损失而造成的损害赔 偿）承担任何责任。\n    ")]),n._v(" "),t("h5",[n._v("十四、平台管理")]),n._v(" "),t("p",[n._v("\n      1. 用户守则"),t("br"),n._v("\n      （1）遵守国家法律法规；"),t("br"),n._v("\n      （2）严禁修改、破译或进行任何影响程序和网络数据传输封包的行为；"),t("br"),n._v("\n      （3）严禁使用任何方法对服务器进行恶意入侵、攻击，或任何破坏网络服务正常运行的行为；"),t("br"),n._v("\n      （4）禁止利用Bug和第三方外挂程序进行获利、破坏平台公平性及造成服务器负担加重的行为；"),t("br"),n._v("\n      （5）禁止公开或私下传播任何存在并可利用的Bug，请在发现该类问题时立即向我们反映；"),t("br"),n._v("\n      （6）禁止使用含有人身攻击、淫秽、辱骂、反动及其他危害本产品及平台形象、扰乱正常服务秩序以及国家利益和社会公德性质的昵称名；"),t("br"),n._v("\n      （7）任何侵犯以上条款的违规行为，钱咖有权根据情节轻重对违规者进行警告、禁闭、改名、直至删除账号的处罚，情节尤其严重者，将进一步追究法律责任，由于违规造成的损失和后果，由当事的钱咖使用者自行承担；\n    ")]),n._v(" "),t("h5",[n._v("十五、用户管理")]),n._v(" "),t("p",[n._v("\n      用户独立承担其发布内容的责任。用户对服务的使用必须遵守所有适用于服务的地方法律、国家法律和国际法律。用户承诺："),t("br"),n._v("\n      1、用户在我们的网页上及其他平台中发布信息或者利用我们提供的服务时必须符合中国有关法规，不得在我们的网页或者其他网页及平台中利用我们提供的服务制作、复制、发布、传播以下信息："),t("br"),n._v("\n      （1）反对宪法所确定的基本原则的;"),t("br"),n._v("\n      （2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的;"),t("br"),n._v("\n      （3）损害国家荣誉和利益的;"),t("br"),n._v("\n      （4）煽动民族仇恨、民族歧视，破坏民族团结的;"),t("br"),n._v("\n      （5）破坏国家宗教政策，宣扬邪教和封建迷信的;"),t("br"),n._v("\n      （6）散布谣言，扰乱社会秩序，破坏社会稳定的;"),t("br"),n._v("\n      （7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的;"),t("br"),n._v("\n      （8）散步广告、垃圾信息，影响平台秩序的。"),t("br"),n._v("\n      （9）侮辱或者诽谤他人，侵害他人合法权益的;"),t("br"),n._v("\n      （10）煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的;"),t("br"),n._v("\n      （11）以非法民间组织名义活动的;"),t("br"),n._v("\n      （12）含有法律、行政法规禁止的其他内容的。"),t("br"),n._v("\n      （13）侵犯任何第三者的知识产权，版权或公众/私人权利的。"),t("br"),n._v("\n      （14）违反人文道德、风俗习惯的。"),t("br"),n._v("\n      2、用户不得利用我们提供的服务从事以下活动："),t("br"),n._v("\n      （1）未经允许，进入计算机信息网络或者使用计算机信息网络资源的;"),t("br"),n._v("\n      （2）未经允许，对计算机信息网络功能进行删除、修改或者增加的;"),t("br"),n._v("\n      （3）未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的;"),t("br"),n._v("\n      （4）故意制作、传播计算机病毒等破坏性程序的;"),t("br"),n._v("\n      （5）其他危害计算机信息网络安全的行为。"),t("br"),n._v("\n      3、用户不得以任何方式干扰我们提供的服务。"),t("br"),n._v("\n      4、用户应遵守我们的所有其他规定和程序。"),t("br"),n._v("\n      用户须对自己在使用我们提供的服务过程中的行为承担法律责任。用户承担法律责任的形式包括但不限于：对受到侵害者进行赔偿，以及在我们首先承担了因用户行 为导致的行政处罚或侵权损害赔偿责任后，用户应给予我们等额的赔偿。用户理解，如果我们发现其网站传输的信息明显属于上段第1条所列内容之一，依据中国法 律，我们有义务立即停止传输，保存有关记录，向国家有关机关报告，并且删除含有该内容的地址、目录或关闭服务器。"),t("br"),n._v("\n      5、保障"),t("br"),n._v("\n      用户同意保障和维护我们全体成员的利益，负责支付由用户使用超出服务范围引起的律师费用，违反服务条款的损害补偿费用，其它人使用用户的手机、账号而产生 的费用。用户或者使用用户账号的其他人在使用钱咖提供的产品和服务过程中侵犯第三方知识产权及其他权利而导致被侵权人索赔的，由用户承担责任。\n    ")]),n._v(" "),t("h5",[n._v("十六、风险承担")]),n._v(" "),t("p",[n._v("\n      您同意使用我们提供的产品及服务是出于您的个人意愿，并愿自负任何风险，包括但不限于您因执行我们所提供的服务程序或自行由官方网站下载软件而导致您或您所使用的计算机系统受到损害或发生任何资料的流失等。"),t("br"),n._v("\n      注意：玩家个人操作导致出错的任何结果，由玩家自行负责，官方不给予任何形式的赔偿！\n    ")]),n._v(" "),t("h5",[n._v("十七、损害赔偿")]),n._v(" "),t("p",[n._v("\n      您若违反本协议或相关法令，导致我们的母公司、子公司、附属公司、关系企业、受雇人、代理人及其他一切相关履行辅助人员因此受到损害或支出一切衍生费用 （包括但不限于支付上述人士须就您的违反行为所进行的一切辩护或索偿诉讼及相关和解之法律费用），您应负担损害赔偿及费用承担责任。\n    ")]),n._v(" "),t("h5",[n._v("十八、公司拥有终止权")]),n._v(" "),t("p",[n._v("\n      您应确实遵守本协议及有关法律命令的规定。我们对于您是否违反本协议拥有最终决定权。若我们认定您违反本协议或任何法令，我们有权在无需向您进行事先通知 的情况之下，立即暂停及终止或删除您账号与您账号中的所有相关资料、档案及任何记录，以及取消、停止、限制您的用户资格。"),t("br"),n._v("\n      为了向您提供产品和服务，我们可能会需要定期或不定期地对有关的网站服务器或我们所提供的产品和服务的相关官方网站进行维护，该维护可能造成服务的中断，并且该中断可能没有事先的通知，对于由此引起的中断我们不承担任何责任。"),t("br"),n._v("\n      您已经了解并同意对于因我们、我们的合作方或电信网络系统软硬件设备的故障、失灵或人为操作的疏失而全部或部分中断、暂时无法使用、迟延并造成我们提供产 品和服务的停止或中断的，我们不承担任何责任；对于因他人侵入我们的网络或系统，篡改、删改或伪造、变造网站和资料或数据而造成我们的产品和服务 的停止或中断，我们也不承担任何责任。\n    ")]),n._v(" "),t("h5",[n._v("十九、关于广告")]),n._v(" "),t("p",[n._v("\n      我们的线上软件可能刊登商业广告或其它活动促销的广告。这些内容系广告商或商品服务提供者所为，我们仅提供刊登内容的媒介。您通过我们或我们所链接的网站所购买的服务或商品，其交易行为仅存于您与该商品或服务的提供者之间，与我们无关。\n    ")]),n._v(" "),t("h5",[n._v("二十、至第三方站点的链接")]),n._v(" "),t("p",[n._v("\n      您可能在使用我们的产品和服务过程中链接到第三方的站点。第三方的站点不由我们控制，并且我们也不对任何第三方站点的内容、第三方站点包含的任何链接、或第三方站点的任何更改或更新负责。我们仅为了提供便利的目的而向您提供这些到第三方站点的链接，我们所提供的这些链接并不意味着我们认可该第三方站点。您需要自行检查并遵守该第三方站点的相关规定。\n    ")]),n._v(" "),t("h5",[n._v("二十一、与法律的冲突")]),n._v(" "),t("p",[n._v("\n      本协议的解释、效力及适用以中华人民共和国大陆地区法律为依据。如果本协议的任何内容与法律相抵触，应以法律规定为准。\n    ")]),n._v(" "),t("h5",[n._v("二十二、个别条款的效力")]),n._v(" "),t("p",[n._v("\n      本协议所定的任何条款的一部或全部无效者，不影响其它条款的效力。\n    ")]),n._v(" "),t("h5",{staticStyle:{"margin-bottom":"30px"}},[n._v("二十三、本协议的签订地点为中华人民共和国上海市黄浦区。")]),n._v(" "),t("h5",[n._v("二十四、修改和解释权")]),n._v(" "),t("p",[n._v("\n      基于对我们本身、用户及市场状况不断变化的考虑，我们保留随时修改、新增、删除本协议条款的权利，修改、新增、删除本协议条款时，我们将于官方网站首页公 告修改、新增、删除的事实，而不另行对您进行个别通知。若您不同意我们所修改、新增、删除的内容，可停止使用我们所提供的服务。若您继续使用我们提供的服 务，则视同您同意并接受本协议条款修改、新增、删除后之一切内容，且不得因此而要求任何补偿或赔偿。"),t("br"),n._v("\n      我们保留对本协议条款、产品和服务以及我们所提供的产品和服务的相关官方网站的最终解释权。\n    ")]),n._v(" "),t("h5",{staticStyle:{"text-align":"right"}},[n._v("钱咖网络科技(上海)有限公司")]),n._v(" "),t("div",{staticStyle:{height:"70px"}})])}]}},532:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(2),i=t.n(o),a=t(20),r=t.n(a),s=t(58),A=(t.n(s),t(456)),p=t.n(A),v=t(1),c=!1;e.default={components:{AnimateHeader:r.a},data:function(){return{title:"0"===this.$route.params.status?"绑定手机":"修改绑定",form:{phone:"",code:""},getCodeLock:!1,getCodeText:"获取验证码",sec:0,submitLock:!1,phoneOK:!1,codeOK:!1,agreement:void 0,voiceVerify:!1}},watch:{"form.phone":function(n){if(!c){c=!0;var e=n.replace(/\s/g,"");this.form.phone=_.filter([e.substr(0,3),e.substr(3,4),e.substr(7,4)],function(n){return""!==n}).join(" "),c=!1,/^1[23456789][\d]{9}$/.test(n.replace(/\s/g,""))?this.phoneOK=!0:this.phoneOK=!1,n.length>13&&(this.form.phone=n.substr(0,13))}},"form.code":function(n){n&&/^[\d]{4}$/.test(n)?this.codeOK=!0:this.codeOK=!1,n.length>4&&(this.form.code=n.substr(0,4))}},mounted:function(){var n=this;$modal.fromComponent(p.a,{}).then(function(e){n.agreement=e}),$bus.$on("closeAgreementModal",function(){n.agreement.hide()})},destroyed:function(){this.agreement&&$modal.destroy(this.agreement)},methods:i()({sendCode:function(){this.voiceVerify?this.popCodeType():this.getCode(1)},getCode:function(n){var e=this;if(!(this.getCodeLock||(this.getCodeLock=!0,this.sec>0))){var t=this.form.phone.replace(/\s/g,""),o="";if(t?/^1[23456789][\d]{9}$/.test(t)||(o="手机号格式不正确"):o="手机号不能为空",o)return setTimeout(function(){e.getCodeLock=!1},1e3),void $toast.show(o);this.voiceVerify=!0,this.bindMobileSendCode({phone:t,type:n}).then(function(n){return n.data&&n.data.err_code}).then(function(n){if(40003===n){$popup.fromTemplate(s.popup_has_bind_mobile.template,s.popup_has_bind_mobile.options).show().then(function(n){if(1===n){var t={path:"/login",query:{backroute:"/user/bindMobile/"+e.$route.params.status}};$router.forward(t)}else e.getCodeLock=!1})}else e.sec=60,e.countDown()}).catch(function(){e.getCodeLock=!1})}},check_input:function(){var n=this.form.phone.replace(/\s/g,""),e=this.form.code,t="";return n?/^1[23456789][\d]{9}$/.test(n)?e?/^[\d]{4}$/.test(e)||(t="验证码格式不正确"):t="验证码不能为空":t="手机号格式不正确":t="手机号不能为空",t},submit:function(){var n=this;if(!this.submitLock&&(this.submitLock=!0,setTimeout(function(){n.submitLock=!1},1e3),this.phoneOK&&this.codeOK)){var e=this.check_input();if(e)return void $toast.show(e);c=!0;var t=this.form.phone.replace(/\s/g,""),o=this.form.code;this.bindMobile({phone:t,code:o}).then(function(){c=!1})}},countDown:function(){var n=this;this.sec?(this.sec--,this.getCodeText=this.sec?this.sec+"s":"发送验证码",setTimeout(function(){n.countDown()},1e3)):this.getCodeLock=!1},showAgreement:function(){this.agreement.show()},popCodeType:function(){var n=this;$popup.fromTemplate(s.popup_choose_verify_code_type.template,s.popup_choose_verify_code_type.options).show().then(function(e){0===e&&n.getCode(1),1===e&&n.getCode(2)})},back:function(){var n=_.get(this.$route.query,"backroute","/user/profile");$router.back({path:n})}},t.i(v.c)("user",["bindMobileSendCode","bindMobile"]))}},564:function(n,e,t){e=n.exports=t(360)(),e.push([n.i,'/* thin border */\n.change-nickname[data-v-11369162] {\n  background: #FFFFFF;\n  padding-top: 75px;\n  padding-left: 30px;\n  color: #b5b5b5;\n  font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n  font-weight: 400;\n}\n.change-nickname .title[data-v-11369162] {\n    font-size: 12px;\n    height: 17px;\n    line-height: 17px;\n}\n.change-nickname .input[data-v-11369162] {\n    width: 200px;\n    height: 33px;\n    font-size: 24px;\n    line-height: 33px;\n    margin-bottom: 3px;\n    display: inline-block;\n    padding: 0;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.change-nickname .input[data-v-11369162]::-webkit-input-placeholder {\n      line-height: 33px;\n      height: 33px;\n      color: #DDDDDD;\n      font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n      font-weight: 400;\n}\n.change-nickname .division[data-v-11369162] {\n    position: absolute;\n    top: 100px;\n    right: 116px;\n    width: 1px;\n    height: 17px;\n    background: #DDDDDD;\n}\n.change-nickname .btn-get-code[data-v-11369162] {\n    position: absolute;\n    padding: 0;\n    height: 20px;\n    font-size: 14px;\n    line-height: 20px;\n    min-height: 20px;\n    top: 98px;\n    right: 30px;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.change-nickname .bottom-line[data-v-11369162] {\n    width: 200px;\n    height: 1px;\n    background: #DDDDDD;\n    margin-bottom: 30px;\n}\n.change-nickname .bottom-line.last[data-v-11369162] {\n      margin-bottom: 60px;\n}\n.change-nickname .button-submit[data-v-11369162] {\n    width: 172px;\n    height: 40px;\n    min-height: 40px;\n    line-height: 40px;\n    font-size: 13px;\n    font-weight: 500;\n    color: #FFFFFF;\n    margin-bottom: 206px;\n    border-radius: 2px;\n    font-family: "PingFangSC-Semibold", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n}\n.change-nickname .button-submit.button-disabled[data-v-11369162] {\n      background: #DDDDDD;\n}\n.change-nickname .button-submit.can-submit[data-v-11369162] {\n      background-color: #ef502b;\n}\n.change-nickname .link-agreement[data-v-11369162] {\n    height: 20px;\n    font-size: 14px;\n    color: #b5b5b5;\n}\n.change-nickname .link-agreement span[data-v-11369162] {\n      color: #4a90e2;\n}\n',"",{version:3,sources:["/Users/wumin/diablo/src/components/user_center/user/UserBindMobile.vue"],names:[],mappings:"AAAA,iBAAiB;AACjB;EACE,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,uGAAuG;EACvG,iBAAiB;CAClB;AACD;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;CACrB;AACD;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,WAAW;IACX,uGAAuG;IACvG,iBAAiB;CACpB;AACD;MACM,kBAAkB;MAClB,aAAa;MACb,eAAe;MACf,uGAAuG;MACvG,iBAAiB;CACtB;AACD;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,WAAW;IACX,aAAa;IACb,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,UAAU;IACV,YAAY;IACZ,uGAAuG;IACvG,iBAAiB;CACpB;AACD;IACI,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,oBAAoB;CACvB;AACD;MACM,oBAAoB;CACzB;AACD;IACI,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,qBAAqB;IACrB,mBAAmB;IACnB,wGAAwG;CAC3G;AACD;MACM,oBAAoB;CACzB;AACD;MACM,0BAA0B;CAC/B;AACD;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;CAClB;AACD;MACM,eAAe;CACpB",file:"UserBindMobile.vue",sourcesContent:['/* thin border */\n.change-nickname[data-v-11369162] {\n  background: #FFFFFF;\n  padding-top: 75px;\n  padding-left: 30px;\n  color: #b5b5b5;\n  font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n  font-weight: 400;\n}\n.change-nickname .title[data-v-11369162] {\n    font-size: 12px;\n    height: 17px;\n    line-height: 17px;\n}\n.change-nickname .input[data-v-11369162] {\n    width: 200px;\n    height: 33px;\n    font-size: 24px;\n    line-height: 33px;\n    margin-bottom: 3px;\n    display: inline-block;\n    padding: 0;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.change-nickname .input[data-v-11369162]::-webkit-input-placeholder {\n      line-height: 33px;\n      height: 33px;\n      color: #DDDDDD;\n      font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n      font-weight: 400;\n}\n.change-nickname .division[data-v-11369162] {\n    position: absolute;\n    top: 100px;\n    right: 116px;\n    width: 1px;\n    height: 17px;\n    background: #DDDDDD;\n}\n.change-nickname .btn-get-code[data-v-11369162] {\n    position: absolute;\n    padding: 0;\n    height: 20px;\n    font-size: 14px;\n    line-height: 20px;\n    min-height: 20px;\n    top: 98px;\n    right: 30px;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.change-nickname .bottom-line[data-v-11369162] {\n    width: 200px;\n    height: 1px;\n    background: #DDDDDD;\n    margin-bottom: 30px;\n}\n.change-nickname .bottom-line.last[data-v-11369162] {\n      margin-bottom: 60px;\n}\n.change-nickname .button-submit[data-v-11369162] {\n    width: 172px;\n    height: 40px;\n    min-height: 40px;\n    line-height: 40px;\n    font-size: 13px;\n    font-weight: 500;\n    color: #FFFFFF;\n    margin-bottom: 206px;\n    border-radius: 2px;\n    font-family: "PingFangSC-Semibold", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n}\n.change-nickname .button-submit.button-disabled[data-v-11369162] {\n      background: #DDDDDD;\n}\n.change-nickname .button-submit.can-submit[data-v-11369162] {\n      background-color: #ef502b;\n}\n.change-nickname .link-agreement[data-v-11369162] {\n    height: 20px;\n    font-size: 14px;\n    color: #b5b5b5;\n}\n.change-nickname .link-agreement span[data-v-11369162] {\n      color: #4a90e2;\n}\n'],sourceRoot:""}])},644:function(n,e,t){var o=t(564);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(361)("f9ebbdf6",o,!0)},754:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"page"},[t("AnimateHeader",{attrs:{"bg-color":"#f5f5f5","menu-bg-color":"#f0f0f0",color:"#3A3A3A",title:n.title,"on-back-button-click":n.back,expanded:!1,animate:!1}}),n._v(" "),t("div",{staticClass:"page-content change-nickname"},[t("label",{attrs:{for:"phone"}},[t("div",{staticClass:"title"},[n._v("手机号")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.form.phone,expression:"form.phone"}],staticClass:"input",attrs:{type:"tel",id:"phone",placeholder:"输入手机号码"},domProps:{value:n.form.phone},on:{input:function(e){e.target.composing||(n.form.phone=e.target.value)}}})]),n._v(" "),t("div",{staticClass:"division"}),n._v(" "),t("button",{staticClass:"button button-clear btn-get-code",class:{"button-royal disabled":n.getCodeLock,"button-dark":!n.getCodeLock},domProps:{textContent:n._s(n.getCodeText)},on:{click:function(e){n.sendCode()}}}),n._v(" "),t("div",{staticClass:"bottom-line"}),n._v(" "),t("label",{attrs:{for:"code"}},[t("div",{staticClass:"title"},[n._v("验证码")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.form.code,expression:"form.code"}],staticClass:"input",attrs:{type:"tel",id:"code",placeholder:"输入验证码"},domProps:{value:n.form.code},on:{input:function(e){e.target.composing||(n.form.code=e.target.value)}}}),n._v(" "),t("div",{staticClass:"bottom-line last"})]),n._v(" "),t("button",{staticClass:"button button-submit",class:{"can-submit":n.phoneOK&&n.codeOK,"button-disabled":!n.phoneOK||!n.codeOK},on:{click:function(e){n.submit()}}},[n._v("提交")]),n._v(" "),"0"==n.$route.params.status?t("p",{staticClass:"link-agreement",on:{click:function(e){n.showAgreement()}}},[n._v("\n      绑定手机视为您已同意"),t("span",[n._v("《用户服务协议》")])]):n._e()])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=user-bindmobile.a3b2cc944f619a5759fd.js.map