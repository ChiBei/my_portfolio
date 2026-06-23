import React from 'react';

export default function PortfolioWebsite() {

  // 1. 统一管理所有组织（学校/实验室/公司）的视觉修正参数与资产配置
  const orgs = {
    dlut: {
      name: "大连理工大学",
      logo: "/images/dlut_logo.png",
      padding: "p-1",
      fit: "object-contain"
    },
    scu: {
      name: "四川大学",
      logo: "/images/scu_logo.png",
      padding: "p-1",
      fit: "object-contain"
    },
    haiyang: {
      name: "江苏海阳化纤有限公司",
      logo: "/images/haiyang_logo.png",
      padding: "p-0",
      fit: "object-cover"
    },
    zili: {
      name: "深圳字立科技有限公司",
      logo: "/images/zili_logo.jpg",
      padding: "p-1",
      fit: "object-contain"
    },
  };

  // 2. 抽离教育经历数据
  const educations = [
    { org: orgs.dlut, degree: "计算机科学与技术 · 第二学士", time: "2020.09 - 2022.06" },
    { org: orgs.dlut, degree: "应用化学 · 本科", time: "2016.09 - 2020.06" }
  ];

  // 3. 抽离工作经历数据
  const experiences = [
    {
      org: orgs.scu,
      title: "智能制造实验室 · 研发工程师",
      time: "2023.08 - 2025.03",
      badge: "工业智能"
    },
    {
      org: orgs.zili,
      title: "后台开发工程师",
      time: "2022.07 - 2023.02",
      badge: "微服务/CGI"
    }
  ];

  const projects = [
    {
      title: "化工厂 智能改造升级项目",
      image: "/images/project_all.jpg",
      partners: [orgs.scu, orgs.haiyang],
      desc: "四川大学机械工程学院智能制造实验室 · 校企合作",
      details: [
        "核心项目：独立负责储布架水平检测和布料视觉检测两大系统，从需求调研到现场部署全流程。",
        "技术成果：完成多轮迭代，部署多条生产线；抽离通用模块库，支撑后续项目复用。",
        "项目对接：负责与合作企业的全流程沟通，涵盖现场需求调研、技术方案对接、进度汇报及交付验收管理。",
      ],
      tags: ["Python", "Django", "Linux", "嵌入式", "OpenCV"],
      modules: [
        {
          name: "前期现场实况调研测试系统部署图。",
          img: "/images/imu_install.jpg"
        },
        {
          name: "视觉检测系统现场部署图。",
          img: "/images/cam_install.jpg"
        },
        {
          name: "智能传感平台的多源硬件采集与数据处理系统分层架构拓扑图",
          img: "/images/mr_project_all.jpg"
        },
        {
          name: "智能传感平台的完整数据流拓扑：\n分布式采集 ➔ 现场调试 ➔ 骨干传输 ➔ 服务器与多端",
          img: "/images/mr_project_data.jpg"
        },
        {
          name: "江苏海阳化纤工厂的锦纶浸胶全流程\n前道放卷与储备段 ➔ 核心浸胶与热定型段 ➔ 后道质检与全自动收卷",
          img: "/images/factory_procedure.png"
        },
        {
          name: "布料视觉检测系统一种现场部署方案示意图。\n该检测点位采用正面工业光源与海康威视面阵相机阵列进行布料表面图像采集。",
          img: "/images/cam.png"
        },
        {
          name: "基于二维快速傅里叶变换（FFT）的布料视觉检测算法流程图。\n图像经频域特征提取后完成缺陷识别、定位及结果输出。",
          img: "/images/fabric_detect.png"
        },
        {
          name: "核心参与并独立撰写该项目衍生发明专利。\n在实际申请中，前两位发明人为实验室指导老师，本人为第三发明人（实际撰写人）。",
          img: "/images/patent.jpg"
        },
        {
          name: "面向工业无损检测场景，融合红外热成像与智能算法，实现钢轨内部缺陷的精准检测。",
          img: "/images/patent_abstract.png"
        },
        
      ]
    },
  ];

  const products = [
    {
      title: "Android 软件开发",
      desc: "独立开发并运营 4 款 Android 应用（累计 5w+ 下载 / 独立全栈产品运营）",
      points: [
        "从 0 到 1 完成产品设计、视觉设计与客户端开发实现",
        "熟练掌握 Kotlin / Jetpack 现代 Android 核心技术栈体系",
        "基于用户真实反馈与酷安等渠道评价持续优化体验与留存",
      ],
      tags: ["Android", "Kotlin", "Java", "Jetpack", "Illustrator", "Figma"],
      images: [
        { src: "/images/app1.jpg", wide: true },
        { src: "/images/app2.jpg", wide: false },
        { src: "/images/app3.jpg", wide: false },
      ],
    },
    {
      title: "3D 打印产品实践",
      desc: "通过线上网店验证真实产品需求，打通工程软硬件闭环并实现稳定正向现金流",
      points: [
        "全链路交付：概念设计 ➔ Blender/SolidWorks 建模 ➔ 切片调参 ➔ 实体产品后处理",
        "核心攻关：针对结构件进行材料与工艺参数优化，极限提升强度、精度与打印成功率",
        "敏捷迭代：基于用户使用反馈与工业级装配需求，快速迭代机械结构模型",
      ],
      tags: ["3D Printing", "Blender", "Plasticity", "SolidWorks", "Bambu Studio"],
      images: [
        { src: "/images/print1.jpg", wide: true },
        { src: "/images/print2.jpg", wide: true },
        { src: "/images/print3.jpg", wide: false },
        { src: "/images/print4.jpg", wide: false },
      ],
    },
  ];

  type Org = {
  name: string;
  logo: string;
  padding: string;
  fit: string;
};

type LogoContainerProps = {
  org: Org;
};

  // 💡 提炼出的通用 Logo 容器：干脆利落地直接渲染图片资产
  const LogoContainer = ({ org }: LogoContainerProps) => (
    <div className={`w-9 h-9 flex-shrink-0 overflow-hidden rounded-lg bg-white flex items-center justify-center shadow shadow-black/10 ${org.padding}`}>
      <img src={org.logo} alt={org.name} className={`w-full h-full ${org.fit}`} />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden scroll-smooth">

      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.10),transparent_35%)]" />
      <div className="fixed inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px]" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold tracking-wide">陈钢</h1>
            <p className="text-[11px] text-zinc-400">
              智能制造与产品方向
            </p>
          </div>
          <nav className="hidden md:flex gap-6 text-xs text-zinc-300">
            <a href="#hero" className="hover:text-white transition-colors">首页</a>
            <a href="#projects" className="hover:text-white transition-colors">项目展示</a>
            <a href="#products" className="hover:text-white transition-colors">产品实践</a>
            <a href="#contact" className="hover:text-white transition-colors">联系方式</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="max-w-6xl mx-auto px-6 pt-28 pb-14">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">

          {/* 左侧主内容 */}
          <div className="max-w-3xl">
            <div className="text-xs px-3 py-1 border border-white/10 bg-white/5 rounded-full mb-5 text-zinc-300 inline-block tracking-wide">
              一名懂技术落地、具备完整闭环的产品型研发
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              产品驱动工程开发
              <br />
              智能制造与全栈实践
            </h2>
            <p className="mt-6 text-zinc-400 leading-7 text-sm max-w-xl">
              用技术构建可落地的软硬件实体。深谙 Vibe Coding 时代的开发者进化论，善用数据、算法与全栈工具链实现高效工业改造与敏捷产品交付。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md border-t border-white/5 pt-6 text-xs text-zinc-400">
              <div>
                <p className="text-zinc-600 mb-0.5">现居住地</p>
                <p className="font-medium text-zinc-300">四川省成都市</p>
              </div>
              <div>
                <p className="text-zinc-600 mb-0.5">工作经验</p>
                <p className="font-medium text-zinc-300">2 年+ 研发交付经验</p>
              </div>
            </div>
          </div>

          {/* 右侧综合简历信息卡片 */}
          <div className="border border-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur space-y-5 shadow-2xl shadow-black/50">

            {/* 教育经历 */}
            <div>
              <h3 className="text-xs font-bold text-zinc-500 mb-3 tracking-wider uppercase">教育经历</h3>
              <div className="space-y-2.5 text-xs">
                {educations.map((edu, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/[0.01] border border-white/5 p-2 rounded-xl">
                    <LogoContainer org={edu.org} />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <p className="font-bold text-zinc-200 text-[11px] truncate">{edu.org.name}</p>
                        <span className="text-[9px] text-zinc-500 font-mono flex-shrink-0">{edu.time}</span>
                      </div>
                      <p className="text-[10px] text-zinc-400 mt-0.5 truncate">{edu.degree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5" />

            {/* 工作经历 */}
            <div>
              <h3 className="text-xs font-bold text-zinc-500 mb-3 tracking-wider uppercase">工作经历</h3>
              <div className="space-y-2.5 text-xs">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/[0.01] border border-white/5 p-2 rounded-xl">
                    <LogoContainer org={exp.org} />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <p className="font-bold text-zinc-200 text-[11px] truncate">{exp.org.name}</p>
                        <span className="text-[9px] text-zinc-500 font-mono flex-shrink-0">{exp.time}</span>
                      </div>
                      <div className="flex items-center justify-between mt-0.5">
                        <p className="text-[10px] text-zinc-400 truncate">{exp.title}</p>
                        <span className="text-[8px] bg-zinc-800 text-zinc-400 px-1 py-0.5 rounded border border-white/5 flex-shrink-0 font-mono">{exp.badge}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <div className="mb-10">
          <p className="text-[10px] text-zinc-500 tracking-[0.25em]">PROJECT SHOWCASE</p>
          <h3 className="text-3xl font-black mt-1">核心项目成果展示</h3>
          <p className="mt-3 text-sm text-zinc-400 max-w-xl">
            提供简历纸面文字之外的硬核现场部署方案、算法图纸与衍生发明专利支撑。
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <div key={project.title} className="space-y-8">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
                  <img src={project.image} className="w-full h-full object-cover min-h-[400px]" alt="项目主图" />
                </div>

                <div className="border border-white/10 rounded-xl p-6 flex flex-col bg-white/5">
                  <div className="inline-flex px-3 py-1 text-[11px] border border-white/10 bg-white/5 rounded-full mb-3 text-zinc-400 w-fit">
                    校企深度合作
                  </div>
                  <h4 className="text-2xl font-black leading-tight text-zinc-100">{project.title}</h4>
                  <p className="mt-3 text-xs text-zinc-400">{project.desc}</p>

                  <div className="my-4 border-t border-white/10" />

                  {/* 项目合作单位：优雅复用 Logo 容器组件 */}
                  <div className="mb-5">
                    <p className="text-zinc-500 mb-2 text-xs">联合研发与交付单位</p>
                    <div className="flex flex-wrap gap-2">
                      {project.partners.map((partner, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 p-1.5 rounded-xl shadow-inner">
                          <LogoContainer org={partner} />
                          <span className="font-bold text-zinc-300 text-[11px] pr-1.5">{partner.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-300">
                    <p className="text-zinc-500 mb-1">攻关核心职责</p>
                    {project.details.map((item) => (
                      <div key={item} className="leading-5">• {item}</div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <p className="text-zinc-500 mb-2 text-xs">核心技术栈</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="columns-1 md:columns-2 gap-4 space-y-4 [column-fill:_balance]">
                {project.modules && project.modules.map((module, index) => (
                  <div key={index} className="break-inside-avoid border border-white/10 rounded-lg overflow-hidden bg-white/5 flex flex-col">
                    <img src={module.img} alt="模块技术图" className="w-full h-auto block bg-zinc-900/50" />
                    <div className="p-3 border-t border-white/10">
                      <p className="text-xs font-medium text-zinc-300 whitespace-pre-line leading-relaxed">
                        {module.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 产品实践 */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <div className="mb-8">
          <p className="text-[10px] text-zinc-500 tracking-[0.25em]">PRODUCT PRACTICE</p>
          <h3 className="text-3xl font-bold mt-1">独立全栈产品实践</h3>
          <p className="mt-2 text-sm text-zinc-400">
            拒绝纯代码纸上谈兵，实现“想法 ➔ 数字化软件 ➔ 工业级实体”的敏捷闭环验证。
          </p>
        </div>

        <div className="space-y-12">
          {products.map((p) => (
            <div key={p.title} className="grid lg:grid-cols-[300px_minmax(0,1fr)] gap-8 items-start">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <h4 className="text-xl font-bold text-zinc-100">{p.title}</h4>
                <p className="mt-3 text-xs text-zinc-400 leading-5">{p.desc}</p>

                <div className="my-4 border-t border-white/10" />

                <div className="space-y-2 text-xs text-zinc-300 mb-5">
                  {p.points.map((pt, ptIdx) => (
                    <div key={ptIdx} className="leading-5">• {pt}</div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] rounded-full border border-white/10 bg-white/5 text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {p.images.map((img, idx) => (
                  <div key={idx} className={img.wide ? "col-span-2" : ""}>
                    <img
                      src={img.src}
                      alt="产品成果真实截图"
                      className="w-full h-auto block rounded-xl border border-white/10 bg-zinc-950 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 技术体系纵览 */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <div className="mb-6">
          <p className="text-[10px] text-zinc-500 tracking-[0.25em]">SKILLS MATRIX</p>
          <h3 className="text-3xl font-bold mt-1 tracking-wide">全链路工程与设计工具体系</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            ["后端与算法开发", "Python / Django / Java / C++"],
            ["现代全栈与工程", "Android / Kotlin / Linux / Docker / Shell"],
            ["人工智能与工程", "CNN / OpenCV / Python 数据分析 / Vibe Coding"],
            ["三维造型与工业设计", "Blender / Plasticity / SolidWorks / Illustrator / Figma"],
          ].map(([t, c]) => (
            <div key={t} className="border border-white/10 rounded-xl p-5 bg-white/5 flex flex-col justify-between hover:border-white/20 transition-colors">
              <p className="text-zinc-400 mb-3 font-bold tracking-wide">{t}</p>
              <p className="text-zinc-300 leading-relaxed font-mono">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🛠️ Contact 联系方式*/}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">

        {/* 抽离到卡片上方的头部说明 */}
        <div className="mb-8">
          <p className="text-[10px] text-zinc-500 tracking-[0.25em] mb-1">CONNECT</p>
          <h3 className="text-3xl font-black mt-1 text-zinc-100">联系沟通</h3>
          <p className="mt-3 text-sm text-zinc-400 max-w-xl">
            欢迎通过以下方式交流，成都本地或线上均可快速对接业务合作。
          </p>
        </div>

        {/* 纯净的信息联络底座大卡片 */}
        <div className="border border-white/10 bg-white/5 rounded-2xl p-8 lg:p-10 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 text-xs text-left">
            <div>
              <p className="text-zinc-500 mb-1.5 font-medium">电子邮箱</p>
              <p className="font-bold text-zinc-200 tracking-wide text-[13px] font-mono">chiibeii@163.com</p>
            </div>
            <div>
              <p className="text-zinc-500 mb-1.5 font-medium">联系电话</p>
              <p className="font-bold text-zinc-200 tracking-wide text-[13px] font-mono">+86 1XXXXXX</p>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-[10px] text-zinc-600 border-t border-white/5">
        © 2026 陈钢 · Built with React & Tailwind CSS
      </footer>

    </div>
  );
}