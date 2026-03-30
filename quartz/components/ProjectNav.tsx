import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"

type NavItem = {
  label: string
  slug: string
}

type NavSection = {
  title: string
  items: NavItem[]
}

const sections: NavSection[] = [
  {
    title: "项目入口",
    items: [
      { label: "研究首页", slug: "index" },
      { label: "MVKS 总览", slug: "01-MOCs/MVKS-总览" },
      { label: "案例验证总览", slug: "01-MOCs/案例验证总览" },
      { label: "文学理论与阅读框架", slug: "06-Theory/文学理论与阅读框架" },
    ],
  },
  {
    title: "五层结构",
    items: [
      { label: "人物总览", slug: "01-MOCs/人物总览" },
      { label: "事件总览", slug: "01-MOCs/事件总览" },
      { label: "制度总览", slug: "01-MOCs/制度总览" },
      { label: "概念总览", slug: "01-MOCs/概念总览" },
      { label: "理论总览", slug: "06-Theory/06-混合方法与LLM协同" },
    ],
  },
  {
    title: "代表案例",
    items: [
      { label: "国王大事与脱离罗马", slug: "07-Queries/07.3_Case_Studies/QCase_国王大事与英格兰脱离罗马" },
      { label: "安妮·博林的倒台", slug: "07-Queries/07.3_Case_Studies/QCase_安妮·博林的倒台" },
      { label: "摩尔审讯中的誓言、良知与沉默", slug: "07-Queries/07.3_Case_Studies/QCase_摩尔审讯中的“誓言、良知与沉默”话语博弈" },
      { label: "铁与血 vs 纸与墨", slug: "07-Queries/07.4_Cross_Matrices/QCross_“铁与血”vs“纸与墨”的物质意象对峙" },
      { label: "宫廷空间与接近权", slug: "07-Queries/07.3_Case_Studies/QCase_宫廷空间拓扑与“接近权”的情感映射" },
      { label: "记忆剧场与创伤触发", slug: "07-Queries/07.3_Case_Studies/QCase_记忆剧场与创伤闪回的感官触发机制" },
    ],
  },
]

function prettyHref(currentSlug: string, targetSlug: string) {
  const relative = resolveRelative(currentSlug as any, targetSlug as any)
  return relative.endsWith("/") ? relative : `${relative}/`
}

const ProjectNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const currentSlug = fileData.slug ?? "index"

  return (
    <nav class="project-nav">
      <h2>导航</h2>
      {sections.map((section) => (
        <section class="project-nav-section">
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item) => (
              <li>
                <a
                  href={prettyHref(currentSlug!, item.slug)}
                  class={currentSlug === item.slug ? "active" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  )
}

ProjectNav.css = `
.project-nav {
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--lightgray);
}

.project-nav h2 {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
}

.project-nav-section + .project-nav-section {
  margin-top: 1rem;
}

.project-nav-section h3 {
  margin: 0 0 0.4rem 0;
  font-size: 0.92rem;
  color: var(--secondary);
}

.project-nav-section ul {
  margin: 0;
  padding-left: 1rem;
}

.project-nav-section li {
  margin: 0.25rem 0;
}

.project-nav-section a {
  color: var(--darkgray);
  text-decoration: none;
  line-height: 1.45;
}

.project-nav-section a:hover,
.project-nav-section a.active {
  color: var(--secondary);
  text-decoration: underline;
}
`

export default (() => ProjectNav) satisfies QuartzComponentConstructor
