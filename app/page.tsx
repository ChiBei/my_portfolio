import React from "react";

export default function PortfolioWebsite() {
  /* =========================================================
   * 基础数据
   * ======================================================= */

  const orgs = {
    dlut: {
      name: "大连理工大学",
      logo: "/images/dlut_logo.png",
      padding: "p-1",
      fit: "object-contain",
    },
    scu: {
      name: "四川大学",
      logo: "/images/scu_logo.png",
      padding: "p-1",
      fit: "object-contain",
    },
    zili: {
      name: "深圳字立科技有限公司",
      logo: "/images/zili_logo.jpg",
      padding: "p-1",
      fit: "object-contain",
    },
  };

  const educations = [
    {
      org: orgs.dlut,
      title: "计算机科学与技术 · 第二学士",
      time: "2020.09 — 2022.06",
    },
    {
      org: orgs.dlut,
      title: "应用化学 · 本科",
      time: "2016.09 — 2020.06",
    },
  ];

  const experiences = [
    {
      org: orgs.scu,
      company: "四川大学机械学院智能制造实验室",
      title: "产品 / 项目 / 技术负责人",
      time: "2023.08 — 2025.03",
    },
    {
      org: orgs.zili,
      company: "深圳字立科技有限公司",
      title: "后台开发工程师",
      time: "2022.07 — 2023.02",
    },
  ];

  /* =========================================================
   * 人物核心标签
   * ======================================================= */

  const coreTags = [
    {
      text: "B端产品方向",
      className: "border-blue-200 bg-blue-50 text-blue-800",
    },
    {
      text: "工业智能制造产品实践",
      className: "border-teal-200 bg-teal-50 text-teal-800",
    },
    {
      text: "0 → 1产品落地",
      className: "border-violet-200 bg-violet-50 text-violet-800",
    },
    {
      text: "技术背景",
      className: "border-amber-200 bg-amber-50 text-amber-800",
    },
  ];

  /* =========================================================
   * 核心项目四阶段
   *
   * 产品定义：
   *   imu_install
   *   factory_procedure
   *
   * 方案评估：
   *   project_all
   *   mr_project_data
   *
   * 产品化：
   *   fabric_detect
   *   cam
   *
   * 交付：
   *   cam_install
   *   patent
   * ======================================================= */

  const stages = [
    {
      no: "01",
      title: "产品定义",
      headline: "从现场问题出发，明确产品方向",
      points: [
        "深入化工厂产线开展现场调研，识别产线核心痛点。",
        "将不同问题整合为统一监测系统产品，明确产品方向与核心功能。",
        "输出产品路线文档，形成后续方案设计。",
      ],
      images: [
        {
          src: "/images/imu_install.jpg",
          title: "现场调研",
          desc: "储布架实际部署环境。",
        },
        {
          src: "/images/factory_procedure.png",
          title: "生产流程梳理示意图",
          desc: "定位在线监测实际业务环节。",
        },
      ],
    },

    {
      no: "02",
      title: "方案评估",
      headline: "在精度、部署与成本之间做取舍",
      points: [
        "围绕检测精度、部署条件与成本目标，完成软硬件方案选型与评估。",
        "自主决策采用“工业面阵相机阵列 + STM32-IMU”方案。",
        "单条产线成本降低约40%。",
      ],
      images: [
        {
          src: "/images/mr_project_data.jpg",
          title: "数据流拓扑示意图",
          desc: "系统采集、传输与服务端数据链路。",
        },
        {
          src: "/images/cam.png",
          title: "视觉检测硬件组装示意图",
          desc: "工业相机方案现场部署示意图。",
        },
      ],
    },

    {
      no: "03",
      title: "产品化",
      headline: "从定制化项目转向可复用产品套件",
      points: [
        "梳理多条产线共性需求，将通用能力抽离为标准化模块，推动产品由“定制化项目”向“可复用产品套件”转型。",
        "第二条产线部署周期由2个月缩短至2周。",
        "预留数据积累与数字孪生场景的扩展空间。",
      ],
      images: [
        {
          src: "/images/project_all.jpg",
          title: "产品模块拆分示意图",
          desc: "将定制化项目拆分为可复用模块。",
        },
        {
          src: "/images/fabric_detect.png",
          title: "视觉检测能力标准化",
          desc: "将布料外观检测能力抽象为标准化算法流程。",
        },


      ],
    },

    {
      no: "04",
      title: "交付",
      headline: "持续迭代，推动产品进入真实产线",
      points: [
        "协调企业、导师及供应商等多方资源，推进现场部署与项目交付。",
        "完成4轮现场迭代部署吗, 根据产线反馈持续优化方案。",
        "产品已稳定运行于8条产线。",
      ],
      images: [
        {
          src: "/images/cam_install.jpg",
          title: "现场部署",
          desc: "视觉系统现场部署。",
        },
        {
          src: "/images/patent.jpg",
          title: "项目成果",
          desc: "项目衍生知识产权成果。",
        },
      ],
    },
  ];

  /* =========================================================
   * 独立产品实践
   * ======================================================= */

  const products = [
    {
      title: "游戏周边产品",
      period: "2025.03 — 至今",
      featured: true,
      description:
        "针对热门游戏IP进行玩家需求调研, 挖掘实体周边产品机会, 独立完成产品构思、3D建模设计、制作及后处理等全流程。",
      stats: [
        ["盈利", "产品已实现盈利"],
        ["复购", "客户好评及复购"],
      ],
      tags: [
        {
          text: "需求调研",
          className: "border-blue-200 bg-blue-50 text-blue-800",
        },
        {
          text: "产品构思",
          className: "border-teal-200 bg-teal-50 text-teal-800",
        },
        {
          text: "3D建模设计",
          className: "border-violet-200 bg-violet-50 text-violet-800",
        },
        {
          text: "制作及后处理",
          className: "border-amber-200 bg-amber-50 text-amber-800",
        },
      ],
      images: [
        {
          src: "/images/print1.jpg",
          title: "产品设计",
        },
        {
          src: "/images/print2.jpg",
          title: "产品制作",
        },
        {
          src: "/images/print3.jpg",
          title: "产品反馈-1",
        },
        {
          src: "/images/print4.jpg",
          title: "产品反馈-2",
        },
      ],
    },
    {
      title: "Android应用",
      period: "2017 — 至今",
      featured: false,
      description:
        "独立完成4款 Android 应用的产品定位、功能设计、开发上线及运营，根据用户反馈优化产品功能。",
      stats: [
        ["5万+", "累计下载"],
        ["9.6", "最高评分"],
      ],
      tags: [
        {
          text: "产品定位",
          className: "border-blue-200 bg-blue-50 text-blue-800",
        },
        {
          text: "功能设计",
          className: "border-teal-200 bg-teal-50 text-teal-800",
        },
        {
          text: "开发上线",
          className: "border-violet-200 bg-violet-50 text-violet-800",
        },
        {
          text: "运营",
          className: "border-amber-200 bg-amber-50 text-amber-800",
        },
      ],
      images: [
        {
          src: "/images/app1.jpg",
          title: "应用管理后台界面",
        },
        {
          src: "/images/app2.jpg",
          title: "应用持续迭代功能",
        },
        {
          src: "/images/app3.jpg",
          title: "应用界面",
        },
      ],
    },
  ];

  /* =========================================================
   * 专业技能
   * ======================================================= */

  const skillGroups = [
    {
      title: "产品与项目管理",
      className: "border-blue-200 bg-blue-50",
      titleClass: "text-blue-950",
      dotClass: "bg-blue-600",
      items: [
        "需求调研与用户访谈",
        "需求分析与优先级排期",
        "产品功能规划",
        "原型设计 (Axure / Figma)",
        "架构流程梳理 (Drawio / Xmind)",
        "敏捷迭代管理 (Worktile)",
      ],
    },
    {
      title: "技术理解",
      className: "border-teal-200 bg-teal-50",
      titleClass: "text-teal-950",
      dotClass: "bg-teal-600",
      items: [
        "后端研发与数据库设计",
        "微服务架构与接口逻辑",
        "技术方案与开发工作量评估",
      ],
    },
    {
      title: "开发基础",
      className: "border-violet-200 bg-violet-50",
      titleClass: "text-violet-950",
      dotClass: "bg-violet-600",
      items: [
        "后端：Python、Django、C++",
        "移动端：Android、Java、Kotlin、Jetpack",
        "人工智能：CNN / YOLO / PINN、Pandas / Matplotlib",
        "数据库：MySQL、Navicat",
        "其他：Git、Linux、Postman、Docker、Shell",
      ],
    },
    {
      title: "其他技能",

      className: "border-amber-200 bg-amber-50",
      titleClass: "text-amber-950",
      dotClass: "bg-amber-600",
      items: [
        "英语：CET-6",
        "工具：Notion、Trello",
        "设计建模：Blender、Bambu Studio、Plasticity",
      ],
    },
  ];

  /* =========================================================
   * 通用组件
   * ======================================================= */

  type Org = {
    name: string;
    logo: string;
    padding: string;
    fit: string;
  };

  type ImageData = {
    src: string;
    title: string;
    desc?: string;
  };

  const Logo = ({ org }: { org: Org }) => (
    <div
      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white ${org.padding}`}
    >
      <img
        src={org.logo}
        alt={org.name}
        className={`h-full w-full ${org.fit}`}
      />
    </div>
  );

  const SectionPill = ({
    children,
    tone = "blue",
  }: {
    children: React.ReactNode;
    tone?: "blue" | "teal" | "violet";
  }) => {
    const styles = {
      blue: {
        box: "border-blue-200 bg-blue-50",
        dot: "bg-blue-600",
        text: "text-blue-800",
      },
      teal: {
        box: "border-teal-200 bg-teal-50",
        dot: "bg-teal-600",
        text: "text-teal-800",
      },
      violet: {
        box: "border-violet-200 bg-violet-50",
        dot: "bg-violet-600",
        text: "text-violet-800",
      },
    };

    const style = styles[tone];

    return (
      <div
        className={`mb-4 inline-flex items-center rounded-full border px-3.5 py-1.5 ${style.box}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />

        <span className={`ml-2 text-xs font-bold ${style.text}`}>
          {children}
        </span>
      </div>
    );
  };

  const ImageCard = ({
    image,
    className = "",
  }: {
    image: ImageData;
    className?: string;
  }) => (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white ${className}`}
    >
      <div className="flex min-h-0 flex-1 items-center justify-center p-2.5">
        <img
          src={image.src}
          alt={image.title}
          className="block max-h-full w-full object-contain"
        />
      </div>

      <div className="border-t border-slate-200 px-3 py-2.5">
        <p className="text-xs font-bold text-slate-700">
          {image.title}
        </p>

        {image.desc && (
          <p className="mt-0.5 text-[11px] leading-4.5 text-slate-500">
            {image.desc}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f9fd] text-slate-900">
      {/* =====================================================
       * 背景
       * =================================================== */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(37,99,235,0.035),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(20,184,166,0.025),transparent_24%),radial-gradient(circle_at_78%_75%,rgba(139,92,246,0.02),transparent_25%)]" />

      {/* =====================================================
       * 导航
       * =================================================== */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a
            href="#hero"
            className="text-sm font-bold tracking-wide text-[#102a43]"
          >
            陈钢
          </a>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-500 md:flex">
            <a
              href="#project"
              className="transition-colors hover:text-[#102a43]"
            >
              核心项目
            </a>

            <a
              href="#practice"
              className="transition-colors hover:text-[#102a43]"
            >
              独立产品
            </a>

            <a
              href="#skills"
              className="transition-colors hover:text-[#102a43]"
            >
              专业技能
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-[#102a43]"
            >
              联系方式
            </a>
          </nav>
        </div>
      </header>

      {/* =====================================================
       * Hero
       * =================================================== */}
      <section
        id="hero"
        className="mx-auto max-w-6xl px-5 pb-6 pt-18 sm:px-6 sm:pb-7"
      >
        <h1 className="max-w-5xl text-[40px] font-black leading-[1.04] tracking-[-0.045em] text-[#102a43] sm:text-[56px]">
          把真实问题
          <br />
          <span className="text-slate-600">
            做成真正落地的产品
          </span>
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {coreTags.map((tag) => (
            <span
              key={tag.text}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${tag.className}`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </section>

      {/* =====================================================
       * 核心项目
       * =================================================== */}
      <section
        id="project"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="blue">核心项目</SectionPill>

          {/* =================================================
           * 项目总览
           * ================================================= */}
          <div className="grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
            {/* 左：项目名称、工作、成果 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-[34px] font-black leading-[1.05] tracking-[-0.035em] text-[#102a43] sm:text-[38px]">
                化工厂智能
                <br />
                产线在线监测系统
              </h2>

              <p className="mt-3 text-[14px] font-semibold leading-5 text-[#315d82]">
                主导系统从需求调研、方案设计到规模化部署的全流程落地。
              </p>

              <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
                  <p className="text-[25px] font-black text-[#12395b]">
                    40%
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-slate-600">
                    单条产线成本降低
                  </p>
                </div>

                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
                  <p className="text-[21px] font-black text-[#12395b]">
                    2月 → 2周
                  </p>

                  <p className="mt-1 text-[11px] font-medium leading-4 text-slate-600">
                    第二条产线部署周期
                  </p>
                </div>

                <div className="rounded-xl border border-teal-200 bg-teal-50 p-3">
                  <p className="text-[25px] font-black text-[#17645f]">
                    4轮
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-slate-600">
                    现场迭代部署
                  </p>
                </div>

                <div className="rounded-xl border border-teal-200 bg-teal-50 p-3">
                  <p className="text-[25px] font-black text-[#17645f]">
                    8条
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-slate-600">
                    稳定运行产线
                  </p>
                </div>
              </div>
            </div>

            {/* 右：系统架构图 */}
            <ImageCard
              image={{
                src: "/images/mr_project_all.jpg",
                title: "系统架构示意图",
                desc: "工业产线在线监测系统整体架构。",
              }}
              className="min-h-[340px]"
            />
          </div>

          {/* =================================================
           * 四阶段
           * ================================================= */}
          <div className="mt-3 space-y-2">
            {stages.map((stage) => (
              <article
                key={stage.no}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                {/* 阶段标题 */}
                <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3 sm:px-5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#102a43]">
                    <span className="text-xs font-black text-white">
                      {stage.no}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-black text-slate-900 sm:text-xl">
                      {stage.title}
                    </h3>

                    <p className="mt-0.5 text-xs font-medium text-slate-500">
                      {stage.headline}
                    </p>
                  </div>
                </div>

                {/* 内容 */}
                <div className="grid lg:grid-cols-[350px_minmax(0,1fr)]">
                  {/* 左文字 */}

                  <div className="border-b border-slate-200 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                    <div className="space-y-2.5">
                      {stage.points.map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />

                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 右侧两张图并排 */}
                  <div className="bg-[#f6faff] p-3 sm:p-4">
                    <div className="grid grid-cols-2 gap-2.5">
                      <ImageCard
                        image={stage.images[0]}
                        className="min-h-[220px]"
                      />

                      <ImageCard
                        image={stage.images[1]}
                        className="min-h-[220px]"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
       * 独立产品
       * =================================================== */}
      <section
        id="practice"
        className="border-t border-slate-200 bg-[#f3f8fc]"
      >
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="teal">独立产品实践</SectionPill>

          {/* =================================================
           * 游戏周边
           * 左文字 / 右图片
           * 横向大图
           * 横向大图
           * 竖向小图 | 竖向小图
           * ================================================= */}
          {products
            .filter((product) => product.featured)
            .map((product) => (
              <article
                key={product.title}
                className="overflow-hidden rounded-2xl border border-teal-200 bg-white"
              >
                <div className="grid lg:grid-cols-[340px_minmax(0,1fr)]">
                  {/* 左文字 */}
                  <div className="border-b border-slate-200 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-teal-600 px-3 py-1 text-[11px] font-bold text-white">
                        重点产品
                      </span>

                      <span className="text-xs text-slate-500">
                        {product.period}
                      </span>
                    </div>

                    <h2 className="mt-3 text-[30px] font-black tracking-tight text-[#102a43] sm:text-[32px]">
                      {product.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {product.stats.map(([value, label]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-teal-100 bg-teal-50 p-3"
                        >
                          <p className="text-lg font-black text-[#17645f]">
                            {value}
                          </p>

                          <p className="mt-0.5 text-[11px] leading-4 text-slate-600">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.tags.map((tag) => (
                        <span
                          key={tag.text}
                          className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${tag.className}`}
                        >
                          {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 右图片 */}
                  <div className="bg-[#f8fcfd] p-3 sm:p-4">
                    <div className="space-y-2.5">
                      {/* 横向大图 */}
                      <ImageCard
                        image={product.images[0]}
                        className="min-h-[210px]"
                      />

                      {/* 横向大图 */}
                      <ImageCard
                        image={product.images[1]}
                        className="min-h-[210px]"
                      />

                      {/* 竖向小图 | 竖向小图 */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <ImageCard
                          image={product.images[2]}
                          className="min-h-[145px]"
                        />

                        <ImageCard
                          image={product.images[3]}
                          className="min-h-[145px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}

          {/* =================================================
           * Android
           * 左文字 / 右图片
           * 主图
           * 小图 | 小图
           * ================================================= */}
          {products
            .filter((product) => !product.featured)
            .map((product) => (
              <article
                key={product.title}
                className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="grid lg:grid-cols-[340px_minmax(0,1fr)]">
                  {/* 左文字 */}
                  <div className="border-b border-slate-200 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-[30px] font-black text-[#102a43]">
                          {product.title}
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                          {product.period}
                        </p>
                      </div>

                      <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[11px] font-medium text-violet-800">
                        独立产品
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {product.stats.map(([value, label]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-blue-100 bg-blue-50 p-3"
                        >
                          <p className="text-lg font-black text-[#174a78]">
                            {value}
                          </p>

                          <p className="mt-0.5 text-[11px] text-slate-500">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.tags.map((tag) => (
                        <span
                          key={tag.text}
                          className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${tag.className}`}
                        >
                          {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 右侧图片：
                      主图
                      小图 | 小图
                  */}
                  <div className="bg-[#f7faff] p-3 sm:p-4">
                    <ImageCard
                      image={product.images[0]}
                      className="min-h-[270px]"
                    />

                    <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                      <ImageCard
                        image={product.images[1]}
                        className="min-h-[150px]"
                      />

                      <ImageCard
                        image={product.images[2]}
                        className="min-h-[150px]"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>

      {/* =====================================================
       * 教育与工作经历
       * =================================================== */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="violet">
            教育与工作经历
          </SectionPill>

          <div className="grid gap-2.5 lg:grid-cols-2">
            {/* 教育 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <h3 className="text-base font-black text-[#102a43]">
                教育经历
              </h3>

              <div className="mt-3 space-y-1.5">
                {educations.map((edu) => (
                  <div
                    key={edu.title}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#f7faff] p-2.5"
                  >
                    <Logo org={edu.org} />

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {edu.title}
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-500">
                        {edu.org.name} · {edu.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 工作 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <h3 className="text-base font-black text-[#102a43]">
                工作经历
              </h3>

              <div className="mt-3 space-y-1.5">
                {experiences.map((exp) => (
                  <div
                    key={exp.company}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#f7faff] p-2.5"
                  >
                    <Logo org={exp.org} />

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {exp.company}
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-500">
                        {exp.title} · {exp.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
       * 专业技能
       * =================================================== */}
      <section
        id="skills"
        className="border-t border-slate-200 bg-[#f3f8fc]"
      >
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="blue">专业技能</SectionPill>

          <div className="grid gap-2.5 md:grid-cols-4">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className={`rounded-2xl border p-4 sm:p-5 ${group.className}`}
              >
                <h3
                  className={`text-base font-black ${group.titleClass}`}
                >
                  {group.title}
                </h3>

                <div className="my-3 h-px bg-black/10" />

                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                    >
                      <span
                        className={`mt-[8px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${group.dotClass}`}
                      />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
       * 联系方式
       * =================================================== */}
      <section
        id="contact"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <SectionPill tone="teal">联系方式</SectionPill>

          <div className="grid grid-cols-2 gap-2.5 rounded-2xl border border-slate-200 bg-[#f7faff] p-4 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-bold text-slate-500">
                邮箱
              </p>

              <p className="mt-1.5 text-sm font-bold text-slate-800">
                chiibeii@163.com
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold text-slate-500">
                电话
              </p>

              <p className="mt-1.5 text-sm font-bold text-slate-800">
                +86 173 6026 8450
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold text-slate-500">
                所在地
              </p>

              <p className="mt-1.5 text-sm font-bold text-slate-800">
                四川省 · 成都市
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
       * Footer
       * =================================================== */}
      <footer className="border-t border-slate-200 bg-[#f3f8fc]">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-6">
          <p className="text-[11px] text-slate-400">
            © 2026 陈钢
          </p>
        </div>
      </footer>
    </div>
  );
}