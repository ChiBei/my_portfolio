import React from "react";

export default function PortfolioWebsite() {
  const orgs = {
    dlut: { name: "大连理工大学", logo: "/images/dlut_logo.png", padding: "p-1", fit: "object-contain" },
    scu: { name: "四川大学", logo: "/images/scu_logo.png", padding: "p-1", fit: "object-contain" },
    zili: { name: "深圳字立科技有限公司", logo: "/images/zili_logo.jpg", padding: "p-1", fit: "object-contain" },
  };

  const educations = [
    { org: orgs.dlut, title: "计算机科学与技术 · 第二学士", time: "2020.09 — 2022.06" },
    { org: orgs.dlut, title: "应用化学 · 本科", time: "2016.09 — 2020.06" },
  ];

  const experiences = [
    {
      org: orgs.scu,
      company: "四川大学机械学院智能制造实验室",
      title: "部署工程师 / 研发工程师",
      time: "2023.08 — 2025.03",
    },
    {
      org: orgs.zili,
      company: "深圳字立科技有限公司",
      title: "后台开发工程师",
      time: "2022.07 — 2023.02",
    },
  ];

  const coreTags = [
    { text: "工业AI现场部署", className: "border-blue-200 bg-blue-50 text-blue-800" },
    { text: "软硬件集成与调试", className: "border-teal-200 bg-teal-50 text-teal-800" },
    { text: "端到端交付", className: "border-violet-200 bg-violet-50 text-violet-800" },
    { text: "后端开发背景", className: "border-amber-200 bg-amber-50 text-amber-800" },
  ];

  const stages = [
    {
      no: "01",
      title: "现场约束与范围",
      headline: "在高温油污、纯内网、停机窗口条件下界定首版范围",
      points: [
        "在高温、高油污、纯内网、仅停机窗口可施工的化工厂产线开展现场调研。",
        "识别布料瑕疵、储布架姿态异常两类核心失效模式。",
        "将模糊痛点收敛为首版可部署的检测范围，明确检测项与非目标。",
      ],
      images: [
        { src: "/images/imu_install.jpg", title: "现场部署环境", desc: "储布架实际安装条件：高温、油污、空间受限。" },
        { src: "/images/factory_procedure.png", title: "生产流程梳理", desc: "定位在线监测实际业务环节。" },
      ],
    },
    {
      no: "02",
      title: "选型、集成与调试",
      headline: "完成软硬件选型，并亲手把系统接起来、调通",
      points: [
        "在检测精度、安装条件与单线成本约束下，选型“工业面阵相机阵列 + STM32-IMU”。",
        "完成 GigE 多相机同步取图、IMU 经 MQTT 上报、边缘节点采集并集中传输至工控机。",
        "完成工控机服务部署、开机自启与日志，现场调试后单条产线成本较原方案降低约 40%。",
      ],
      images: [
        { src: "/images/mr_project_data.jpg", title: "数据链路示意", desc: "相机 → 边缘节点 → 工控机 → 看板/PLC。" },
        { src: "/images/cam.png", title: "视觉检测硬件组装", desc: "工业相机方案现场部署示意。" },
      ],
    },
    {
      no: "03",
      title: "配置化与复用",
      headline: "用配置文件和部署脚本把第二条产线压到 2 周",
      points: [
        "将设备管理、异常监测、数据看板抽为标准化模块。",
        "通过配置文件适配相机数量、检测区域与阈值等配置项；编写部署脚本，维护 Git 配置管理。",
        "第二条产线复用后部署周期由 2 个月缩短至 2 周，主要节省在模块调用与配置调整。",
      ],
      images: [
        { src: "/images/project_all.jpg", title: "模块拆分示意", desc: "将定制化项目拆分为可复用模块。" },
        { src: "/images/fabric_detect.png", title: "检测能力标准化", desc: "将布料外观检测抽象为可配置的规则流程。" },
      ],
    },
    {
      no: "04",
      title: "现场适配与迭代",
      headline: "不同点位不同工况，一套代码覆盖多条产线",
      points: [
        "针对不同点位安装空间与遮挡差异调整检测规则，并增强程序扩展性。",
        "完成 4 轮点位扩展部署，每轮负责故障定位、方案调整与上线验证。",
        "对接客户 PLC，将监测数据传递至其控制系统；告警采用人工复核、只记录不停机。",
      ],
      images: [
        { src: "/images/cam_install.jpg", title: "现场部署", desc: "视觉系统现场安装与调试。" },
        { src: "/images/mr_project_all.jpg", title: "系统架构", desc: "工业产线在线监测系统整体架构。" },
      ],
    },
    {
      no: "05",
      title: "结果与边界",
      headline: "如实说明做到了什么，也说明还没做什么",
      points: [
        "系统已运行于 8 条产线，客户验收以精度数据为准。",
        "以固定规则保障产线运行，持续采集异常图像，为后续模型训练储备数据。",
        "尚未做远程升级与多产线统一运维；现阶段以现场部署与人工复核闭环为主。",
      ],
      images: [
        { src: "/images/patent.jpg", title: "项目成果", desc: "项目衍生知识产权成果。" },
        { src: "/images/factory_procedure.png", title: "产线运行示意", desc: "系统在真实产线中的运行位置。" },
      ],
    },
  ];

  const deploymentValues = [
    { title: "配置化适配", desc: "不同产线的相机数量、检测区域、阈值通过配置文件适配，不改代码。", tone: "blue" },
    { title: "部署加速", desc: "模块复用 + 部署脚本，第二条产线部署周期从 2 个月压缩至 2 周。", tone: "teal" },
    { title: "现场适配", desc: "针对点位安装空间与遮挡差异调整检测规则，增强程序扩展性。", tone: "violet" },
    { title: "数据储备", desc: "持续采集异常图像，为后续模型训练储备现场数据。", tone: "amber" },
  ];

  const products = [
    {
      title: "游戏IP衍生品",
      period: "2025.03 — 至今",
      featured: true,
      description:
        "独立完成需求调研、3D 建模、3D 打印制作与后处理，依靠真实用户复购实现盈利，并通过差评反推需求改进。",
      stats: [
        ["盈利", "产品已实现盈利"],
        ["复购", "客户好评及复购"],
      ],
      tags: [
        { text: "需求调研", className: "border-blue-200 bg-blue-50 text-blue-800" },
        { text: "3D建模", className: "border-teal-200 bg-teal-50 text-teal-800" },
        { text: "3D打印", className: "border-violet-200 bg-violet-50 text-violet-800" },
        { text: "后处理", className: "border-amber-200 bg-amber-50 text-amber-800" },
      ],
      images: [
        { src: "/images/print1.jpg", title: "产品设计" },
        { src: "/images/print2.jpg", title: "产品制作" },
        { src: "/images/print3.jpg", title: "产品反馈-1" },
        { src: "/images/print4.jpg", title: "产品反馈-2" },
      ],
    },
    {
      title: "Android应用",
      period: "2017 — 至今",
      featured: false,
      description:
        "独立完成 4 款 Android 应用的产品定位、功能设计、开发上线及运营，根据用户反馈优化功能。",
      stats: [
        ["5万+", "累计下载"],
        ["9.6", "最高评分"],
      ],
      tags: [
        { text: "Java / Kotlin", className: "border-blue-200 bg-blue-50 text-blue-800" },
        { text: "Jetpack", className: "border-teal-200 bg-teal-50 text-teal-800" },
        { text: "MySQL", className: "border-violet-200 bg-violet-50 text-violet-800" },
        { text: "用户反馈迭代", className: "border-amber-200 bg-amber-50 text-amber-800" },
      ],
      images: [
        { src: "/images/app1.jpg", title: "应用界面" },
        { src: "/images/app2.jpg", title: "功能迭代" },
        { src: "/images/app3.jpg", title: "应用管理" },
      ],
    },
  ];

  const skillGroups = [
    {
      title: "工程与现场部署",
      className: "border-blue-200 bg-blue-50",
      titleClass: "text-blue-950",
      dotClass: "bg-blue-600",
      items: [
        "Python / Django、C++",
        "OpenCV、工业面阵 GigE 相机 SDK",
        "STM32 / IMU + MQTT",
        "PLC 对接",
        "MySQL、Linux、Git",
        "配置文件化部署、部署脚本",
        "Android",
      ],
    },
    {
      title: "AI 与数据",
      className: "border-teal-200 bg-teal-50",
      titleClass: "text-teal-950",
      dotClass: "bg-teal-600",
      items: [
        "OpenCV 规则检测",
        "异常图像采集与人工复核",
        "PoC 试运行验证",
        "CNN / YOLO / PINN",
        "Pandas / Matplotlib",
      ],
    },
    {
      title: "协作与表达",
      className: "border-violet-200 bg-violet-50",
      titleClass: "text-violet-950",
      dotClass: "bg-violet-600",
      items: ["Drawio、Xmind", "Worktile、Notion", "Blender、Bambu Studio", "Plasticity"],
    },
    {
      title: "语言与其他",
      className: "border-amber-200 bg-amber-50",
      titleClass: "text-amber-950",
      dotClass: "bg-amber-600",
      items: ["英语 CET-6", "可阅读英文技术文档", "可进行英文技术对接", "应用化学背景，理解化工现场约束"],
    },
  ];

  type Org = { name: string; logo: string; padding: string; fit: string };
  type ImageData = { src: string; title: string; desc?: string };

  const Logo = ({ org }: { org: Org }) => (
    <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white ${org.padding}`}>
      <img src={org.logo} alt={org.name} className={`h-full w-full ${org.fit}`} />
    </div>
  );

  const SectionPill = ({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "teal" | "violet" | "amber" }) => {
    const styles = {
      blue: { box: "border-blue-200 bg-blue-50", dot: "bg-blue-600", text: "text-blue-800" },
      teal: { box: "border-teal-200 bg-teal-50", dot: "bg-teal-600", text: "text-teal-800" },
      violet: { box: "border-violet-200 bg-violet-50", dot: "bg-violet-600", text: "text-violet-800" },
      amber: { box: "border-amber-200 bg-amber-50", dot: "bg-amber-600", text: "text-amber-800" },
    };
    const style = styles[tone];
    return (
      <div className={`mb-4 inline-flex items-center rounded-full border px-3.5 py-1.5 ${style.box}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
        <span className={`ml-2 text-xs font-bold ${style.text}`}>{children}</span>
      </div>
    );
  };

  const ImageCard = ({ image, className = "" }: { image: ImageData; className?: string }) => (
    <div className={`flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white ${className}`}>
      <div className="flex min-h-0 flex-1 items-center justify-center p-2.5">
        <img src={image.src} alt={image.title} className="block max-h-full w-full object-contain" />
      </div>
      <div className="border-t border-slate-200 px-3 py-2.5">
        <p className="text-xs font-bold text-slate-700">{image.title}</p>
        {image.desc && <p className="mt-0.5 text-[11px] leading-4.5 text-slate-500">{image.desc}</p>}
      </div>
    </div>
  );

  const valueToneMap: Record<string, string> = {
    blue: "border-blue-200 bg-blue-50 text-blue-900",
    teal: "border-teal-200 bg-teal-50 text-teal-900",
    violet: "border-violet-200 bg-violet-50 text-violet-900",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
  };

  return (
    <div className="min-h-screen bg-[#f5f9fd] text-slate-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(37,99,235,0.035),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(20,184,166,0.025),transparent_24%),radial-gradient(circle_at_78%_75%,rgba(139,92,246,0.02),transparent_25%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#hero" className="text-sm font-bold tracking-wide text-[#102a43]">陈钢</a>
          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-500 md:flex">
            <a href="#project" className="transition-colors hover:text-[#102a43]">核心项目</a>
            <a href="#deployment" className="transition-colors hover:text-[#102a43]">部署与复用</a>
            <a href="#practice" className="transition-colors hover:text-[#102a43]">独立构建</a>
            <a href="#skills" className="transition-colors hover:text-[#102a43]">专业技能</a>
            <a href="#contact" className="transition-colors hover:text-[#102a43]">联系方式</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="mx-auto max-w-6xl px-5 pb-6 pt-18 sm:px-6 sm:pb-7">
        <h1 className="max-w-5xl text-[40px] font-black leading-[1.04] tracking-[-0.045em] text-[#102a43] sm:text-[56px]">
          把系统装进现场
          <br />
          <span className="text-slate-600">让它真正跑起来</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          在化工厂高温油污、纯内网、停机窗口施工条件下，端到端完成在线监测系统从选型集成到多产线部署；系统运行于 8 条产线，第二条产线复用后部署周期由 2 个月缩短至 2 周。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {coreTags.map((tag) => (
            <span key={tag.text} className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${tag.className}`}>{tag.text}</span>
          ))}
        </div>
      </section>

      <section id="project" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="blue">核心项目</SectionPill>

          <div className="grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-[34px] font-black leading-[1.05] tracking-[-0.035em] text-[#102a43] sm:text-[38px]">
                化工厂AI
                <br />
                产线在线监测系统
              </h2>
              <p className="mt-3 text-[14px] font-semibold leading-5 text-[#315d82]">
                端到端负责系统从现场问题发现、软硬件选型集成到多产线部署。
              </p>
              <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
                  <p className="text-[25px] font-black text-[#12395b]">40%</p>
                  <p className="mt-1 text-[11px] font-medium text-slate-600">单条产线成本降低</p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
                  <p className="text-[21px] font-black text-[#12395b]">2月 → 2周</p>
                  <p className="mt-1 text-[11px] font-medium leading-4 text-slate-600">第二条产线部署周期</p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50 p-3">
                  <p className="text-[25px] font-black text-[#17645f]">4轮</p>
                  <p className="mt-1 text-[11px] font-medium text-slate-600">现场迭代部署</p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50 p-3">
                  <p className="text-[25px] font-black text-[#17645f]">8条</p>
                  <p className="mt-1 text-[11px] font-medium text-slate-600">产线运行</p>
                </div>
              </div>
            </div>

            <ImageCard
              image={{ src: "/images/mr_project_all.jpg", title: "系统架构示意", desc: "工业产线在线监测系统整体架构。" }}
              className="min-h-[340px]"
            />
          </div>

          <div className="mt-3 space-y-2">
            {stages.map((stage) => (
              <article key={stage.no} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3 sm:px-5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#102a43]">
                    <span className="text-xs font-black text-white">{stage.no}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-black text-slate-900 sm:text-xl">{stage.title}</h3>
                    <p className="mt-0.5 text-xs font-medium text-slate-500">{stage.headline}</p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-[350px_minmax(0,1fr)]">
                  <div className="border-b border-slate-200 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                    <div className="space-y-2.5">
                      {stage.points.map((point, index) => (
                        <div key={index} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                          <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#f6faff] p-3 sm:p-4">
                    <div className="grid grid-cols-2 gap-2.5">
                      <ImageCard image={stage.images[0]} className="min-h-[220px]" />
                      <ImageCard image={stage.images[1]} className="min-h-[220px]" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="deployment" className="border-t border-slate-200 bg-[#f3f8fc]">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="teal">部署与复用</SectionPill>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {deploymentValues.map((v) => (
              <article key={v.title} className={`rounded-2xl border p-4 sm:p-5 ${valueToneMap[v.tone]}`}>
                <h3 className="text-base font-black">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 opacity-80">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="practice" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="violet">独立构建</SectionPill>

          {products.filter((p) => p.featured).map((product) => (
            <article key={product.title} className="overflow-hidden rounded-2xl border border-teal-200 bg-white">
              <div className="grid lg:grid-cols-[340px_minmax(0,1fr)]">
                <div className="border-b border-slate-200 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-teal-600 px-3 py-1 text-[11px] font-bold text-white">独立构建</span>
                    <span className="text-xs text-slate-500">{product.period}</span>
                  </div>
                  <h2 className="mt-3 text-[30px] font-black tracking-tight text-[#102a43] sm:text-[32px]">{product.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {product.stats.map(([value, label]) => (
                      <div key={label} className="rounded-xl border border-teal-100 bg-teal-50 p-3">
                        <p className="text-lg font-black text-[#17645f]">{value}</p>
                        <p className="mt-0.5 text-[11px] leading-4 text-slate-600">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.tags.map((tag) => (
                      <span key={tag.text} className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${tag.className}`}>{tag.text}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#f8fcfd] p-3 sm:p-4">
                  <div className="space-y-2.5">
                    <ImageCard image={product.images[0]} className="min-h-[210px]" />
                    <ImageCard image={product.images[1]} className="min-h-[210px]" />
                    <div className="grid grid-cols-2 gap-2.5">
                      <ImageCard image={product.images[2]} className="min-h-[145px]" />
                      <ImageCard image={product.images[3]} className="min-h-[145px]" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {products.filter((p) => !p.featured).map((product) => (
            <article key={product.title} className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid lg:grid-cols-[340px_minmax(0,1fr)]">
                <div className="border-b border-slate-200 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-[30px] font-black text-[#102a43]">{product.title}</h2>
                      <p className="mt-1 text-xs text-slate-500">{product.period}</p>
                    </div>
                    <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[11px] font-medium text-violet-800">独立构建</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {product.stats.map(([value, label]) => (
                      <div key={label} className="rounded-xl border border-blue-100 bg-blue-50 p-3">
                        <p className="text-lg font-black text-[#174a78]">{value}</p>
                        <p className="mt-0.5 text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.tags.map((tag) => (
                      <span key={tag.text} className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${tag.className}`}>{tag.text}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#f7faff] p-3 sm:p-4">
                  <ImageCard image={product.images[0]} className="min-h-[270px]" />
                  <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                    <ImageCard image={product.images[1]} className="min-h-[150px]" />
                    <ImageCard image={product.images[2]} className="min-h-[150px]" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f3f8fc]">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="violet">教育与工作经历</SectionPill>
          <div className="grid gap-2.5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <h3 className="text-base font-black text-[#102a43]">教育经历</h3>
              <div className="mt-3 space-y-1.5">
                {educations.map((edu) => (
                  <div key={edu.title} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#f7faff] p-2.5">
                    <Logo org={edu.org} />
                    <div>
                      <p className="text-sm font-bold text-slate-800">{edu.title}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">{edu.org.name} · {edu.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <h3 className="text-base font-black text-[#102a43]">工作经历</h3>
              <div className="mt-3 space-y-1.5">
                {experiences.map((exp) => (
                  <div key={exp.company} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#f7faff] p-2.5">
                    <Logo org={exp.org} />
                    <div>
                      <p className="text-sm font-bold text-slate-800">{exp.company}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">{exp.title} · {exp.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="blue">专业技能</SectionPill>
          <div className="grid gap-2.5 md:grid-cols-4">
            {skillGroups.map((group) => (
              <article key={group.title} className={`rounded-2xl border p-4 sm:p-5 ${group.className}`}>
                <h3 className={`text-base font-black ${group.titleClass}`}>{group.title}</h3>
                <div className="my-3 h-px bg-black/10" />
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700">
                      <span className={`mt-[8px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${group.dotClass}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-[#f3f8fc]">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="teal">联系方式</SectionPill>
          <div className="grid grid-cols-2 gap-2.5 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-bold text-slate-500">邮箱</p>
              <p className="mt-1.5 text-sm font-bold text-slate-800">chiibeii@163.com</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500">电话</p>
              <p className="mt-1.5 text-sm font-bold text-slate-800">+86 173 6026 8450</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500">所在地</p>
              <p className="mt-1.5 text-sm font-bold text-slate-800">四川省 · 成都市</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-6">
          <p className="text-[11px] text-slate-400">© 2026 陈钢</p>
        </div>
      </footer>
    </div>
  );
}