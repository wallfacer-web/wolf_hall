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
      { label: "MVKS 总览", slug: "01-MOCs/1.07-MVKS-总览" },
      { label: "案例验证总览", slug: "01-MOCs/1.12-案例验证总览" },
      { label: "文学理论入口", slug: "06-Theory/6.00-文学理论入口" },
      { label: "数字人文问答", slug: "11-Appendix/11.00-数字人文问答" },
    ],
  },
  {
    title: "五层结构",
    items: [
      { label: "人物总览", slug: "01-MOCs/1.01-人物总览" },
      { label: "事件总览", slug: "01-MOCs/1.02-事件总览" },
      { label: "制度总览", slug: "01-MOCs/1.03-制度总览" },
      { label: "概念总览", slug: "01-MOCs/1.04-概念总览" },
      { label: "理论总览", slug: "06-Theory/6.06-混合方法与LLM协同" },
    ],
  },
  {
    title: "代表案例",
    items: [
      { label: "国王大事与脱离罗马", slug: "07-Queries/07.3_Case_Studies/7.3.03-QCase_国王大事与英格兰脱离罗马" },
      { label: "安妮·博林的倒台", slug: "07-Queries/07.3_Case_Studies/7.3.01-QCase_安妮·博林的倒台" },
      { label: "摩尔审讯中的誓言、良知与沉默", slug: "07-Queries/07.3_Case_Studies/7.3.04-QCase_摩尔审讯中的“誓言、良知与沉默”话语博弈" },
      { label: "铁与血 vs 纸与墨", slug: "07-Queries/07.4_Cross_Matrices/7.4.07-QCross_“铁与血”vs“纸与墨”的物质意象对峙" },
      { label: "宫廷空间与接近权", slug: "07-Queries/07.3_Case_Studies/7.3.05-QCase_宫廷空间拓扑与“接近权”的情感映射" },
      { label: "记忆剧场与创伤触发", slug: "07-Queries/07.3_Case_Studies/7.3.06-QCase_记忆剧场与创伤闪回的感官触发机制" },
    ],
  },
]

function prettyHref(currentSlug: string, targetSlug: string) {
  const relative = resolveRelative(currentSlug as never, targetSlug as never)
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
  padding: 0.9rem;
  border-top: 1px solid var(--lightgray);
  border-radius: 20px;
  border: 1px solid var(--lightgray);
  background:
    linear-gradient(180deg, rgba(255, 248, 238, 0.96), rgba(244, 236, 225, 0.92));
  box-shadow: var(--wolf-shadow);
  max-height: calc(100dvh - 13rem);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}

.project-nav h2 {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  color: var(--dark);
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
  padding-left: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.55rem;
}

.project-nav-section li {
  margin: 0;
}

.project-nav-section a {
  display: block;
  padding: 0.55rem 0.65rem;
  border: 1px solid var(--lightgray);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--darkgray);
  text-decoration: none;
  line-height: 1.45;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease;
}

.project-nav-section a:hover,
.project-nav-section a.active {
  color: var(--secondary);
  text-decoration: underline;
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(53, 44, 35, 0.08);
  background: rgba(255, 255, 255, 0.95);
}

@media all and (max-width: 1100px) {
  .project-nav {
    max-height: none;
    overflow: visible;
  }
}

@media all and (max-width: 800px) {
  .project-nav-section ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.55rem 0.65rem;
  }
}

@media all and (max-width: 520px) {
  .project-nav-section ul {
    grid-template-columns: 1fr;
  }
}
`

export default (() => ProjectNav) satisfies QuartzComponentConstructor
