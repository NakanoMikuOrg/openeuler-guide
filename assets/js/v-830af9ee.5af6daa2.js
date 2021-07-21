(self.webpackChunkopeneuler_guide=self.webpackChunkopeneuler_guide||[]).push([[927],{9346:(e,l,n)=>{"use strict";n.r(l),n.d(l,{data:()=>a});const a={key:"v-830af9ee",path:"/rookie/pre-install.html",title:"安装前的准备",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"🧭 凡事预则立，不预则废",slug:"🧭-凡事预则立-不预则废",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"1. 下载安装镜像",slug:"_1-下载安装镜像",children:[]},{level:2,title:"2. 刻录安装 U 盘",slug:"_2-刻录安装-u-盘",children:[{level:3,title:"2-1. Windows",slug:"_2-1-windows",children:[]},{level:3,title:"2-2. Linux",slug:"_2-2-linux",children:[]}]},{level:2,title:"3. 为 openEuler 分出硬盘空间（可选）",slug:"_3-为-openeuler-分出硬盘空间-可选",children:[]},{level:2,title:"4. 获取 Bitlocker 恢复密钥",slug:"_4-获取-bitlocker-恢复密钥",children:[]},{level:2,title:"5. 进入主板 BIOS 进行设置",slug:"_5-进入主板-bios-进行设置",children:[]},{level:2,title:"6. 关闭 BIOS 设置中的 Secure Boot",slug:"_6-关闭-bios-设置中的-secure-boot",children:[]},{level:2,title:"7. 调整启动方式为 UEFI（可能不需要）",slug:"_7-调整启动方式为-uefi-可能不需要",children:[]},{level:2,title:"8. 调整硬盘启动顺序",slug:"_8-调整硬盘启动顺序",children:[]},{level:2,title:"9. 保存 BIOS 设置",slug:"_9-保存-bios-设置",children:[]},{level:2,title:"10. 准备安装",slug:"_10-准备安装",children:[]}],filePathRelative:"rookie/pre-install.md",git:{updatedTime:1626704577e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:3}]}}},1728:(e,l,n)=>{"use strict";n.r(l),n.d(l,{default:()=>Il});var a=n(6252);const m=n.p+"assets/img/download-1.9a16264a.png",i=n.p+"assets/img/download-2.75565bda.png",t=n.p+"assets/img/download-3.41d43e29.png",r=n.p+"assets/img/download-4.8fe68989.png",u=n.p+"assets/img/ethcer.6bb06431.png",s=n.p+"assets/img/disk-1.0ecefadf.png",o=n.p+"assets/img/disk-2.d3d60385.png",d=n.p+"assets/img/disk-3.6b907f9d.png",W=n.p+"assets/img/uefi-2.5da0023d.png",c=n.p+"assets/img/uefi-3.91d270e1.png",p=n.p+"assets/img/uefi-4.2cb2b186.png",k=n.p+"assets/img/uefi-5.eee13844.png",h=n.p+"assets/img/uefi-6.873f11bd.png",U=n.p+"assets/img/uefi-7.1637ff05.png",g=n.p+"assets/img/uefi-8.154e4969.png",f=n.p+"assets/img/uefi-9.ebd8a6b9.png";var b=n(2569);const _=(0,a.Wm)("h1",{id:"安装前的准备",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#安装前的准备","aria-hidden":"true"},"#"),(0,a.Uk)(" 安装前的准备")],-1),w=(0,a.Wm)("blockquote",null,[(0,a.Wm)("h3",{id:"🧭-凡事预则立-不预则废",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#🧭-凡事预则立-不预则废","aria-hidden":"true"},"#"),(0,a.Uk)(" 🧭 凡事预则立，不预则废")]),(0,a.Wm)("p",null,"这一章开始，我们正式开始安装 openEuler。但是我们首先要做一些准备工作。")],-1),E=(0,a.Wm)("h3",{id:"🔖-这一节将会讨论",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论","aria-hidden":"true"},"#"),(0,a.Uk)(" 🔖 这一节将会讨论：")],-1),v={class:"custom-container details"},B=(0,a.Wm)("summary",null,"目录",-1),x={class:"table-of-contents"},I=(0,a.Uk)("🧭 凡事预则立，不预则废"),S=(0,a.Uk)("🔖 这一节将会讨论："),y=(0,a.Uk)("1. 下载安装镜像"),O=(0,a.Uk)("2. 刻录安装 U 盘"),F=(0,a.Uk)("2-1. Windows"),A=(0,a.Uk)("2-2. Linux"),L=(0,a.Uk)("3. 为 openEuler 分出硬盘空间（可选）"),G=(0,a.Uk)("4. 获取 Bitlocker 恢复密钥"),C=(0,a.Uk)("5. 进入主板 BIOS 进行设置"),D=(0,a.Uk)("6. 关闭 BIOS 设置中的 Secure Boot"),M=(0,a.Uk)("7. 调整启动方式为 UEFI（可能不需要）"),z=(0,a.Uk)("8. 调整硬盘启动顺序"),N=(0,a.Uk)("9. 保存 BIOS 设置"),P=(0,a.Uk)("10. 准备安装"),R=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,[(0,a.Uk)("由于当前 UEFI 已普及十余年，（除了虚拟机）安装将全部以 "),(0,a.Wm)("code",null,"UEFI + GPT"),(0,a.Uk)(" 的形式进行，传统 "),(0,a.Wm)("code",null,"BIOS"),(0,a.Uk)(" 方式不再赘述。")])],-1),V=(0,a.Wm)("h2",{id:"_1-下载安装镜像",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_1-下载安装镜像","aria-hidden":"true"},"#"),(0,a.Uk)(" 1. 下载安装镜像")],-1),q=(0,a.Uk)("打开 "),H={href:"https://openeuler.org/zh/mirror/list/",target:"_blank",rel:"noopener noreferrer"},T=(0,a.Uk)("openEuler 镜像列表"),X=(0,a.Uk)(" > 选择一个合适的镜像源（一般来说地理位置越近下载速度越快，此处以 "),Z={href:"https://repo.huaweicloud.com/openeuler/",target:"_blank",rel:"noopener noreferrer"},j=(0,a.Uk)("华为云"),K=(0,a.Uk)(" 为例）："),Y=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:m,alt:"download-1"})],-1),J=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"选择合适版本，此处以 openEuler 21.03 为例："),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:i,alt:"download-2"})])],-1),Q=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("依次进入 "),(0,a.Wm)("code",null,"ISO"),(0,a.Uk)(" > "),(0,a.Wm)("code",null,"x86_64"),(0,a.Uk)(" > 点击相关文件以将安装镜像 "),(0,a.Wm)("code",null,"openEuler-21.03-aarch64-dvd.iso"),(0,a.Uk)(" 和校验文件 "),(0,a.Wm)("code",null,"openEuler-21.03-aarch64-dvd.iso.sha256sum"),(0,a.Uk)(" 下载到本地：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:t,alt:"download-3"})])],-1),$=(0,a.Wm)("p",null,"在下载位置打开终端，进行安装镜像完整性校验（可选）：",-1),ee=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,"使用以下命令依次查看校验文件中的 sha256 校验值：")],-1),le=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"cat"),(0,a.Uk)(" openEuler-21.03-x86_64-dvd.iso.sha256sum\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),ne=(0,a.Wm)("div",{class:"language-bat ext-bat line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bat"},[(0,a.Wm)("code",null,"type openEuler-21.03-x86_64-dvd.iso.sha256sum\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),ae=(0,a.Wm)("ol",{start:"2"},[(0,a.Wm)("li",null,"计算安装镜像的 sha256 校验值：")],-1),me=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"sha256sum openEuler-21.03-x86_64-dvd.iso\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),ie=(0,a.Wm)("div",{class:"language-bat ext-bat line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bat"},[(0,a.Wm)("code",null,"certutil -hashfile openEuler-21.03-x86_64-dvd.iso SHA256\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),te=(0,a.Wm)("ol",{start:"3"},[(0,a.Wm)("li",null,"检查两者是否一致。若不一致，请尝试重新下载安装镜像或检查镜像源可信度：")],-1),re=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:r,alt:"download-4"})],-1),ue=(0,a.Wm)("h2",{id:"_2-刻录安装-u-盘",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_2-刻录安装-u-盘","aria-hidden":"true"},"#"),(0,a.Uk)(" 2. 刻录安装 U 盘")],-1),se=(0,a.Wm)("p",null,"准备一个 8G 以上的 U 盘，刻录一个安装盘。",-1),oe=(0,a.Wm)("h3",{id:"_2-1-windows",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_2-1-windows","aria-hidden":"true"},"#"),(0,a.Uk)(" 2-1. Windows")],-1),de=(0,a.Uk)("Windows 下推荐使用 "),We={href:"https://www.ventoy.net/cn/doc_start.html",target:"_blank",rel:"noopener noreferrer"},ce=(0,a.Uk)("Ventoy"),pe=(0,a.Uk)("、"),ke={href:"https://rufus.ie/",target:"_blank",rel:"noopener noreferrer"},he=(0,a.Uk)("Rufus"),Ue=(0,a.Uk)(" 或者 "),ge={href:"https://www.poweriso.com/download.php",target:"_blank",rel:"noopener noreferrer"},fe=(0,a.Uk)("Power ISO"),be=(0,a.Wm)("sup",null,"EULA",-1),_e=(0,a.Uk)(" 进行 U 盘刻录。三者皆为免费使用的软件。具体操作请自行查阅，都非常简单。"),we=(0,a.Uk)("除此之外，如果你还嫌麻烦，还可以使用更为简单的安装盘制作工具 "),Ee={href:"https://www.balena.io/etcher/",target:"_blank",rel:"noopener noreferrer"},ve=(0,a.Uk)("balenaEtcher"),Be=(0,a.Uk)("："),xe=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:u,alt:"ethcer"})],-1),Ie={class:"custom-container tip"},Se=(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),ye=(0,a.Uk)("使用 balenaEtcher 制作完成的安装盘若要重新作为普通 U 盘使用，需要用磁盘分区管理工具（如 "),Oe={href:"https://apps.kde.org/partitionmanager/",target:"_blank",rel:"noopener noreferrer"},Fe=(0,a.Uk)("KDE 分区管理器"),Ae=(0,a.Uk)("、"),Le={href:"https://www.diskgenius.cn/",target:"_blank",rel:"noopener noreferrer"},Ge=(0,a.Uk)("DiskGenius"),Ce=(0,a.Wm)("sup",null,"EULA",-1),De=(0,a.Uk)("）重建分区表才能正常格式化。"),Me=(0,a.Wm)("h3",{id:"_2-2-linux",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_2-2-linux","aria-hidden":"true"},"#"),(0,a.Uk)(" 2-2. Linux")],-1),ze=(0,a.Uk)("Linux 下同样可以使用 Ventoy 和 balenaEtcher。以 Arch Linux 为例，具体步骤可参阅 "),Ne={href:"https://arch.icekylin.online/advanced/make-install-disk.html#ventoy-%E6%8E%A8%E8%8D%90",target:"_blank",rel:"noopener noreferrer"},Pe=(0,a.Uk)("Ventoy（推荐）"),Re=(0,a.Uk)("以及 "),Ve={href:"https://arch.icekylin.online/advanced/make-install-disk.html#balenaetcher",target:"_blank",rel:"noopener noreferrer"},qe=(0,a.Uk)("balenaEtcher"),He=(0,a.Uk)("。"),Te=(0,a.Uk)("也可以直接用 "),Xe=(0,a.Wm)("code",null,"dd",-1),Ze=(0,a.Uk)(" 命令进行刻录，具体步骤可参阅 "),je={href:"https://arch.icekylin.online/advanced/make-install-disk.html#dd-%E5%91%BD%E4%BB%A4",target:"_blank",rel:"noopener noreferrer"},Ke=(0,a.Uk)("dd 命令"),Ye=(0,a.Uk)("。"),Je=(0,a.Wm)("h2",{id:"_3-为-openeuler-分出硬盘空间-可选",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_3-为-openeuler-分出硬盘空间-可选","aria-hidden":"true"},"#"),(0,a.Uk)(" 3. 为 openEuler 分出硬盘空间（可选）")],-1),Qe=(0,a.Wm)("p",null,[(0,a.Uk)("如果目标是双系统（win10 + openEuler），并且 win10 和 openEuler 将要共存在一个硬盘上的话，往往要在 win10 使用的分区上分出空闲硬盘空间给 openEuler。这里建议"),(0,a.Wm)("strong",null,[(0,a.Uk)("至少分 "),(0,a.Wm)("code",null,"128GB"),(0,a.Uk)(" 给 openEuler")]),(0,a.Uk)("。")],-1),$e=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("右键点击 "),(0,a.Wm)("code",null,"开始菜单"),(0,a.Uk)(" > 点击 "),(0,a.Wm)("code",null,"磁盘管理"),(0,a.Uk)("：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:s,alt:"disk-step_1"})])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("右键点击 "),(0,a.Wm)("code",null,"需要压缩的分区"),(0,a.Uk)(" > 点击 "),(0,a.Wm)("code",null,"压缩卷"),(0,a.Uk)("：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:o,alt:"disk-step_2"})])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("在 "),(0,a.Wm)("code",null,"输入压缩空间量(MB)"),(0,a.Uk)(" 输入需要分给 openEuler 的空闲硬盘空间大小。假设分配 "),(0,a.Wm)("code",null,"128GiB"),(0,a.Uk)(" 则输入 "),(0,a.Wm)("code",null,"131072"),(0,a.Uk)("（1GiB = 1024MiB，128GiB = 128 * 1024MiB = 131072MiB）：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:d,alt:"disk-step_3"})])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("点击 "),(0,a.Wm)("code",null,"压缩"),(0,a.Uk)(" > 完成之后关闭磁盘管理即可")]),(0,a.Wm)("div",{class:"custom-container warning"},[(0,a.Wm)("p",{class:"custom-container-title"},"⚠️ 注意"),(0,a.Wm)("p",null,"请不要做多余的动作！不要在这里为分出的硬盘空间创建分区！")])])],-1),el=(0,a.Wm)("h2",{id:"_4-获取-bitlocker-恢复密钥",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_4-获取-bitlocker-恢复密钥","aria-hidden":"true"},"#"),(0,a.Uk)(" 4. 获取 Bitlocker 恢复密钥")],-1),ll=(0,a.Wm)("p",null,"若 win10 分区使用了 🔐 Bitlocker 加密，请提前获取恢复密钥。",-1),nl=(0,a.Uk)("关于解锁密钥的查找请参阅 "),al={href:"https://support.microsoft.com/zh-cn/windows/%E5%9C%A8-windows-10-%E4%B8%AD%E6%9F%A5%E6%89%BE-bitlocker-%E6%81%A2%E5%A4%8D%E5%AF%86%E9%92%A5-6b71ad27-0b89-ea08-f143-056f5ab347d6",target:"_blank",rel:"noopener noreferrer"},ml=(0,a.Uk)("Mircosoft 相关页面"),il=(0,a.Uk)("。"),tl=(0,a.Wm)("p",null,[(0,a.Uk)("一般来说使用与 win10 相同的微软帐号登录 "),(0,a.Wm)("a",{href:"aka.ms/myrecoverykey"},"aka.ms 相关页面"),(0,a.Uk)(" 即可获取。")],-1),rl=(0,a.Wm)("h2",{id:"_5-进入主板-bios-进行设置",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_5-进入主板-bios-进行设置","aria-hidden":"true"},"#"),(0,a.Uk)(" 5. 进入主板 BIOS 进行设置")],-1),ul=(0,a.Wm)("p",null,[(0,a.Wm)("strong",null,"插入优盘并开机"),(0,a.Uk)("。在开机的时候，按下 "),(0,a.Wm)("code",null,"F2"),(0,a.Uk)(" / "),(0,a.Wm)("code",null,"F8"),(0,a.Uk)(" / "),(0,a.Wm)("code",null,"F10"),(0,a.Uk)(" / "),(0,a.Wm)("code",null,"DEL"),(0,a.Uk)(" 等（取决与你的主板型号，具体请查阅你主板的相关信息）按键，进入主板的 BIOS 设置界面。")],-1),sl=(0,a.Wm)("p",null,"除此之外，如果你还嫌麻烦，还可以使用以下方法进入 BIOS：",-1),ol=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("在 win10 下 按住 "),(0,a.Wm)("code",null,"Shift"),(0,a.Uk)(" 键同时点击 "),(0,a.Wm)("code",null,"重启"),(0,a.Uk)("：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:W,alt:"uefi-step_1"})])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("保持按住 "),(0,a.Wm)("code",null,"Shift"),(0,a.Uk)(" 键直到进入如图所示界面：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:c,alt:"uefi-step_2"})])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("选择 "),(0,a.Wm)("code",null,"疑难解答"),(0,a.Uk)(" 并回车 "),(0,a.Wm)("code",null,"Enter")])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("选择 "),(0,a.Wm)("code",null,"UEFI 固件设置"),(0,a.Uk)(" 并回车 "),(0,a.Wm)("code",null,"Enter"),(0,a.Uk)("：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:p,alt:"uefi-step_3"})])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("按下 "),(0,a.Wm)("code",null,"Enter"),(0,a.Uk)(" 重启，此时应该已经进入了 BIOS：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:k,alt:"uefi-step_4"})])])],-1),dl=(0,a.Wm)("h2",{id:"_6-关闭-bios-设置中的-secure-boot",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_6-关闭-bios-设置中的-secure-boot","aria-hidden":"true"},"#"),(0,a.Uk)(" 6. 关闭 BIOS 设置中的 Secure Boot")],-1),Wl=(0,a.Wm)("p",null,[(0,a.Uk)("在类似名为 "),(0,a.Wm)("code",null,"security"),(0,a.Uk)("（安全） 的选项卡中，找到一项名为 "),(0,a.Wm)("code",null,"Secure Boot"),(0,a.Uk)("（安全启动，名称可能略有差异）的选项，选择 "),(0,a.Wm)("code",null,"Disable"),(0,a.Uk)(" 将其禁用：")],-1),cl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:h,alt:"uefi-step_5"})],-1),pl=(0,a.Wm)("h2",{id:"_7-调整启动方式为-uefi-可能不需要",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_7-调整启动方式为-uefi-可能不需要","aria-hidden":"true"},"#"),(0,a.Uk)(" 7. 调整启动方式为 UEFI（可能不需要）")],-1),kl=(0,a.Wm)("p",null,[(0,a.Uk)("在某些旧的主板里，需要调整启动模式为 "),(0,a.Wm)("code",null,"UEFI"),(0,a.Uk)("，而非传统的 "),(0,a.Wm)("code",null,"BIOS/CSM"),(0,a.Uk)("。在类似名为 "),(0,a.Wm)("code",null,"boot"),(0,a.Uk)(" 的选项卡中，找到类似名为 "),(0,a.Wm)("code",null,"Boot Mode"),(0,a.Uk)(" 的选项，确保将其调整为 "),(0,a.Wm)("code",null,"UEFI only"),(0,a.Uk)("，而非 "),(0,a.Wm)("code",null,"Legacy/CSM"),(0,a.Uk)("。")],-1),hl=(0,a.Wm)("h2",{id:"_8-调整硬盘启动顺序",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_8-调整硬盘启动顺序","aria-hidden":"true"},"#"),(0,a.Uk)(" 8. 调整硬盘启动顺序")],-1),Ul=(0,a.Wm)("p",null,[(0,a.Uk)("在类似名为 "),(0,a.Wm)("code",null,"boot"),(0,a.Uk)(" 的选项卡中，找到类似名为 "),(0,a.Wm)("code",null,"Boot Options"),(0,a.Uk)("（名称可能略有差异）的设置选项，将优盘的启动顺序调至首位：")],-1),gl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:U,alt:"uefi-step_6"})],-1),fl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:g,alt:"uefi-step_7"})],-1),bl=(0,a.Wm)("h2",{id:"_9-保存-bios-设置",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_9-保存-bios-设置","aria-hidden":"true"},"#"),(0,a.Uk)(" 9. 保存 BIOS 设置")],-1),_l=(0,a.Wm)("p",null,[(0,a.Uk)("最后保存 BIOS 设置并退出，一般的按键是 "),(0,a.Wm)("code",null,"F10"),(0,a.Uk)("：")],-1),wl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:f,alt:"uefi-step_8"})],-1),El=(0,a.Wm)("h2",{id:"_10-准备安装",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_10-准备安装","aria-hidden":"true"},"#"),(0,a.Uk)(" 10. 准备安装")],-1),vl=(0,a.Wm)("p",null,"此时电脑重启，不出意外的话根据提示你应该可以顺利进入 openEuler 的安装界面了：",-1),Bl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:b.Z,alt:"test-2"})],-1),xl=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,"openEuler 安装盘应该一直插在 🖥️ 电脑上")],-1),Il={render:function(e,l){const n=(0,a.up)("RouterLink"),m=(0,a.up)("OutboundLink"),i=(0,a.up)("CodeGroupItem"),t=(0,a.up)("CodeGroup");return(0,a.wg)(),(0,a.j4)(a.HY,null,[_,w,(0,a.Wm)("blockquote",null,[E,(0,a.Wm)("details",v,[B,(0,a.Wm)("nav",x,[(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#🧭-凡事预则立-不预则废"},{default:(0,a.w5)((()=>[I])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#🔖-这一节将会讨论"},{default:(0,a.w5)((()=>[S])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_1-下载安装镜像"},{default:(0,a.w5)((()=>[y])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_2-刻录安装-u-盘"},{default:(0,a.w5)((()=>[O])),_:1}),(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_2-1-windows"},{default:(0,a.w5)((()=>[F])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_2-2-linux"},{default:(0,a.w5)((()=>[A])),_:1})])])]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_3-为-openeuler-分出硬盘空间-可选"},{default:(0,a.w5)((()=>[L])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_4-获取-bitlocker-恢复密钥"},{default:(0,a.w5)((()=>[G])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_5-进入主板-bios-进行设置"},{default:(0,a.w5)((()=>[C])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_6-关闭-bios-设置中的-secure-boot"},{default:(0,a.w5)((()=>[D])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_7-调整启动方式为-uefi-可能不需要"},{default:(0,a.w5)((()=>[M])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_8-调整硬盘启动顺序"},{default:(0,a.w5)((()=>[z])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_9-保存-bios-设置"},{default:(0,a.w5)((()=>[N])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#_10-准备安装"},{default:(0,a.w5)((()=>[P])),_:1})])])])])]),R,V,(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[q,(0,a.Wm)("a",H,[T,(0,a.Wm)(m)]),X,(0,a.Wm)("a",Z,[j,(0,a.Wm)(m)]),K]),Y]),J,Q,(0,a.Wm)("li",null,[$,ee,(0,a.Wm)(t,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{title:"UNIX like"},{default:(0,a.w5)((()=>[le])),_:1}),(0,a.Wm)(i,{title:"Windows"},{default:(0,a.w5)((()=>[ne])),_:1})])),_:1}),ae,(0,a.Wm)(t,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{title:"UNIX like"},{default:(0,a.w5)((()=>[me])),_:1}),(0,a.Wm)(i,{title:"Windows"},{default:(0,a.w5)((()=>[ie])),_:1})])),_:1}),te,re])]),ue,se,oe,(0,a.Wm)("p",null,[de,(0,a.Wm)("a",We,[ce,(0,a.Wm)(m)]),pe,(0,a.Wm)("a",ke,[he,(0,a.Wm)(m)]),Ue,(0,a.Wm)("a",ge,[fe,(0,a.Wm)(m)]),be,_e]),(0,a.Wm)("p",null,[we,(0,a.Wm)("a",Ee,[ve,(0,a.Wm)(m)]),Be]),xe,(0,a.Wm)("div",Ie,[Se,(0,a.Wm)("p",null,[ye,(0,a.Wm)("a",Oe,[Fe,(0,a.Wm)(m)]),Ae,(0,a.Wm)("a",Le,[Ge,(0,a.Wm)(m)]),Ce,De])]),Me,(0,a.Wm)("p",null,[ze,(0,a.Wm)("a",Ne,[Pe,(0,a.Wm)(m)]),Re,(0,a.Wm)("a",Ve,[qe,(0,a.Wm)(m)]),He]),(0,a.Wm)("p",null,[Te,Xe,Ze,(0,a.Wm)("a",je,[Ke,(0,a.Wm)(m)]),Ye]),Je,Qe,$e,el,ll,(0,a.Wm)("p",null,[nl,(0,a.Wm)("a",al,[ml,(0,a.Wm)(m)]),il]),tl,rl,ul,sl,ol,dl,Wl,cl,pl,kl,hl,Ul,gl,fl,bl,_l,wl,El,vl,Bl,xl],64)}}},2569:(e,l,n)=>{"use strict";n.d(l,{Z:()=>a});const a=n.p+"assets/img/test-2.9d030ce9.png"}}]);