---
title: QWS_安妮案供词链试问台
note_type: query
status: running
query_type: workspace
writeback_status: not-started
evidence_gap: graphrag-close-reading-examples
archive_ready: false
tools:
  - NotebookLM
  - GraphRAG
tags:
  - wolfhall
  - query
  - workspace
  - anne-boleyn
  - confession
---

# QWS_安妮案供词链试问台

> [!abstract] 工作台定位
> 这张页不是正式 `QCase`，而是为 `Anne Boleyn` 一案中的“供词如何闭合案件”专门搭建的中间试问台。  
> 它的目标是为正式页补足更近距离的英文场景例子，尤其是 `Mark Smeaton`、同案男性节点、起诉书措辞和“真相被生产”的程序链。

## 问题界定

- `Mark Smeaton` 的供词究竟在案件链中承担什么功能？
- 同案男性节点是如何被并案、并置并压缩成一张可执行的国家叙事网？
- 哪些英文微观场景最适合回写到：
  - [[07 Queries/07.3_Case_Studies/QCase_安妮·博林的倒台]]
  - [[07 Queries/07.4_Cross_Matrices/QCross_安妮案同案人物比较]]
  - [[07 Queries/07.4_Cross_Matrices/QCross_誓言、供词、沉默三种话语装置比较]]

## 当前输入材料

### 相关正式页

- [[07 Queries/07.3_Case_Studies/QCase_安妮·博林的倒台]]
- [[07 Queries/07.4_Cross_Matrices/QCross_安妮案同案人物比较]]
- [[07 Queries/07.4_Cross_Matrices/QCross_誓言、供词、沉默三种话语装置比较]]

### 相关对象页

- [[02 People/安妮·博林]]
- [[02 People/马克·斯密顿]]
- [[02 People/托马斯·克伦威尔]]
- [[03 Events/安妮·博林倒台]]
- [[04 Institutions/法律与司法体系]]

### 相关来源

- `Bring Up the Bodies`
- `NotebookLM / 数字人文`
- `GraphRAG global`

## 当前已知稳定判断

- 安妮案不能被压缩成“失宠王后”的私人故事，而应理解为通过供词、并案、合法语言与继承焦虑缝成的国家案件。
- `Mark Smeaton` 的价值不在网络中心性，而在作为低位可被击穿、可被转写的供词节点。
- 同案男性网络一旦被并置，就会制造出“足以令人相信”的整体外观。
- `Cromwell` 的危险能力在于把宫廷怀疑压缩成可归档、可起诉、可执行的法理与程序。

## 本工作台当前要追的材料

### A. 供词节点

- `Mark Smeaton confessed`
- `confessed everything`
- `who would think Mark would confess`
- 供词前后的心理与程序转折

### B. 并案网络

- `Norris`
- `Weston`
- `Brereton`
- `George Boleyn`
- 这些名字如何在同一叙事框架中被缝合

### C. 起诉书与法理措辞

- 起诉书中时间扩展或模糊化的措辞
- `and several days before and after`
- 高叛国、通奸、婚姻无效化之间的接口

### D. 真相生产装置

- “不是发现真相，而是生产真相”的场景证据
- 流言如何转成案卷
- 关系如何转成指控
- 供词如何转成国家版本

## 工具试问记录

### NotebookLM

- 第一轮已完成：
  - 当前已确认 `Mark Smeaton` 供词是案件的突破口。
  - 已确认案件依赖 `供词 + 同案网络 + 叛国法理 + 继承焦虑` 的缝合。
  - 已确认 `Cromwell` 是文书转写者与程序架构师。

### GraphRAG

- 第一轮已执行：
  - 运行方式已确认：
    - `conda activate Graph`
    - `cd H:\graphrag-0.5.0\ragtest`
    - `python query_ollama.py --root . --method global "..."`
  - 本轮实际试问：
    - `How did Thomas Cromwell rise from a blacksmith's son to become the King's chief minister? What specific strategies did he use?`
  - 返回结果：
    - `Global Search Response: I am sorry but I am unable to answer this question given the provided data.`
    - `All map responses have score 0`
  - 当前判断：
    - 命令链本身可用，问题不够贴合当前索引数据。
    - 对 `Anne Boleyn` 供词链工作台来说，下一轮不应继续问 `Cromwell` 总体上升史，而应改问 `Mark Smeaton / confession / Norris / Weston / indictment language` 这类更贴近现有工作台目标的全球或局部问题。

- 第二轮已执行：
  - 实际试问：
    - `How did Mark Smeaton's confession help turn rumors about Anne Boleyn into a treason case? What role did confession, indictment language, and the network of male courtiers play?`
  - 返回特征：
    - 这一轮已不再是 `score 0`，说明问题开始命中当前索引主题。
    - 结果能稳定产出三条主轴：`confession`、`indictment language`、`male courtiers network`。
  - 当前可保留的中间判断：
    - `Mark Smeaton` 被识别为把流言压成可起诉文本的关键突破口。
    - `indictment language` 被明确识别为把通奸指控升级为高叛国语言的中介。
    - 同案男性网络被识别为帮助案件形成整体可信外观的结构条件。
  - 当前需要谨慎对待的点：
    - 回答明显带有概括性史学口吻，还不是足够近距离的英文场景例子。
    - 其中“George Boleyn / Francis Weston confession”这类说法不宜直接写回正式页，必须先用更贴近文本的下一轮问题复核。
    - 这一轮更像拿到了方向性确认，而不是拿到了可直接引用的微观证据。

- 第三轮已执行：
  - 实际试问：
    - `What exactly does the dataset say about Mark Smeaton confessing in Anne Boleyn's case? Focus on concrete wording, immediate narrative consequences, and how his confession changes the case from rumor to prosecution.`
  - 返回特征：
    - 命中继续有效，答案更集中在 `Mark Smeaton` 一条线上。
    - 结果明确指出：数据集并没有提供供词原文措辞，但稳定强调其“turning point”功能。
  - 当前可保留的中间判断：
    - `Mark Smeaton` 的供词被稳定识别为把猜疑推进为正式起诉的第一块可用文本支点。
    - 这一供词的即时后果包括：为逮捕、审判和并案提供表面上的合法入口。
    - 其核心作用不是证明真相，而是让案件第一次拥有从 rumor 进入 prosecution 的程序接口。
  - 当前新增限制：
    - 这轮仍未拿到真正可回写的英文原句或近距离场景描写。
    - 说明当前全局问法更擅长产出分析摘要，不擅长抽微观文本细部。
    - 下一轮应改问更明确的“场景 / 节点 / bundled names / indictment wording”，而不是继续要求 confession wording。

- 第四轮已执行：
  - 实际试问：
    - `What wording in the indictment broadens the charges against Anne Boleyn beyond a single occasion? Focus on how dates, repetition, and multiple male courtiers are bundled into one prosecutable case.`
  - 返回特征：
    - 这一轮继续稳定命中，并且比前一轮更集中在 `indictment strategy`。
    - 回答没有给出可直接摘录的具体条文原句，但反复强调了三个结构动作：`unspecified dates`、`repetition over time`、`multiple male courtiers bundled together`。
  - 当前可保留的中间判断：
    - 起诉书的关键技术不是逐条坐实单次事件，而是把指控扩展成“持续发生的模式”。
    - 日期模糊化和时间范围扩展，能够削弱逐条反驳的可能性，使案件更难被拆解。
    - 多名男性节点被并置，不只是扩充名单，而是在制造“多点互证”的整体外观。
    - 这一轮终于把 `confession -> indictment -> prosecutable case` 这条链条压得更清楚了。
  - 当前仍需保留的限制：
    - 回答依旧是分析性摘要，不是可直接写回正式页的英文近距离场景原句。
    - 因此这轮更适合固化“起诉书如何工作”的中层判断，还不能替代真正的 close reading 细例。
    - 下一轮最应该继续追的，不是再问日期模糊化本身，而是追问 `Norris / Weston / Brereton / George Boleyn / Smeaton` 如何被叙事性地并案。

- 第五轮已执行：
  - 实际试问：
    - `How are Norris, Weston, Brereton, George Boleyn, and Mark Smeaton narratively bundled into one case against Anne Boleyn? Focus on case construction rather than biography.`
  - 返回特征：
    - 这一轮继续命中，并且把“多人并案”稳定总结成一套案件建构逻辑：多人通奸指控、家庭丑闻、供词与证词、政治叙事闭合。
    - 但这一轮同时暴露出全局问法的另一类风险：会把结构正确的中层判断和可疑细节混在一起输出。
  - 当前可保留的中间判断：
    - 数据集倾向于把 `Norris / Weston / Brereton / George Boleyn / Smeaton` 读成一个被人为缝合出的案件群，而不是若干互不相干的独立指控。
    - 这条并案链的核心效果，是把 Anne 从单点绯闻中心改写成“多点通奸与政治危险的中心节点”。
    - `George Boleyn` 被纳入同案后，案件会额外获得“家庭内部腐败”这一放大器，从而显著提高丑闻强度。
  - 当前必须明确排除的风险点：
    - 回答出现了明显需要否决或复核的细节，例如把 `Brereton` 与 `Catherine Howard` 线混在一起。
    - `Smeaton confessed under torture` 这类说法在当前工作台中也不能直接当成稳固事实写回正式页，至少需要独立来源或更贴近文本的问题复核。
    - 因此这一轮只能用于确认“并案叙事的存在”，不能用于确认具体事实细节。

- 第六轮已执行：
  - 实际试问：
    - `Which details in Anne Boleyn's case are supported with high confidence in the dataset, and which points appear to be inferred or uncertain? Focus on confession, indictment language, and the network of accused men.`
  - 返回特征：
    - 这一轮表面上在做“高置信 / 低置信”区分，实际上暴露了当前全局问法的一个更深问题：问题只要把 `Anne Boleyn + confession` 绑得太近，模型就容易把“供词节点”错误地转移到 Anne 本人身上。
    - 回答中出现了明显不应直接接受的说法，例如把 `Anne Boleyn's confession under duress` 当成高置信细节。
  - 当前可保留的唯一价值：
    - `network of accused men` 这一项仍然被稳定识别，说明多人并案这一层是当前索引里相对稳的。
    - `indictment language as treason framing` 也继续稳定存在，说明法理加工这条线没有丢。
  - 当前新增失败模式：
    - 不能再用 `Anne Boleyn + confession` 这样的宽泛问法做校验，因为它会把 `Mark Smeaton confession` 和 `Anne's case` 混写。
    - `GraphRAG global` 当前更适合回答“案件结构如何运作”，不适合在人物指代仍然模糊时做事实甄别。
    - 后续问题必须改成更窄的 `Mark Smeaton specifically`，否则误差会继续扩散。

- 第七轮已执行：
  - 实际试问：
    - `What does the dataset say specifically about Mark Smeaton, and only Mark Smeaton, in Anne Boleyn's case? Focus on confession, immediate consequences, and links to indictment language. Do not attribute any confession to Anne Boleyn herself.`
  - 返回特征：
    - 这一轮成功排掉了 “Anne 本人供词” 的主角错配，说明把对象收窄到 `Mark Smeaton only` 是有效的。
    - 回答继续稳定保留三项结构：`Smeaton confession`、`immediate consequences`、`links to indictment language`。
  - 当前可保留的中间判断：
    - `Mark Smeaton` 仍被稳定识别为安妮案里最关键的供词节点之一。
    - 供词与起诉书之间的关系，被稳定叙述为“把通奸指控转成更具法律执行力的案件语言”。
    - 说明 `Smeaton -> indictment language -> Anne's prosecution` 这条结构链，在当前索引里是相对稳定可复现的。
  - 当前仍需排除的风险点：
    - 回答仍然会自动补出“执行是为了消灭关键证人”这类政治推断，这不能直接写回正式页。
    - 关于具体刑罚形式、程序细节、动机解释，仍然需要外部来源或更细问题复核。
    - 因此这一轮适合用来反写“供词节点的结构功能”，不适合反写“具体细节与动机”。

- 第八轮已执行：
  - 实际试问：
    - `How does the dataset describe the transition from Mark Smeaton's confession to the broader indictment against multiple accused men in Anne Boleyn's case? Focus on case expansion rather than political motive.`
  - 返回特征：
    - 这一轮把 `single confession -> multi-person indictment` 这条跳跃说得最顺，说明当前 `GraphRAG global` 对“案件如何扩展”这一层是有稳定回答能力的。
    - 回答明确把案件扩展描述成：`initial confession -> further interrogation -> wider arrest -> integrated accusations`。
  - 当前可保留的中间判断：
    - `Mark Smeaton` 的供词在当前索引里被稳定当作案件扩展的启动点，而不仅是孤立证词。
    - 工作台现在已经能把这条链压缩成一句可回写判断：
      - `单个低位供词节点` 为案件提供了第一块可被程序吸收的材料，随后通过审问、并案和起诉书整合，扩展成针对多名男性与 Anne 本人的整体案件。
    - 这条判断可以安全服务于正式页的“中层机制补充”。
  - 当前仍需排除的风险点：
    - 回答再次带入了 `under torture`、`others confessed under duress` 这类高风险细节，说明 `global` 仍然不适合承担事实细节甄别任务。
    - 因此这条工作台继续追问 `global` 的边际收益已经很低，不值得再用它逼近 close reading 细部。

- 待执行问题 1：
  - 抓取 `Mark Smeaton` 在 `Bring Up the Bodies` 中与供词、审讯、承认、低位证词相关的英文微观例子。
- 待执行问题 2：
  - 抓取 `Norris / Weston / Brereton / George Boleyn / Smeaton` 被并置进同一案件框架时的英文场景证据。
- 待执行问题 3：
  - 抓取起诉书、时间模糊化措辞与案件闭合机制相关的英文细例。

## 预期输出格式

- `英文场景线索`
- `一句中文压缩判断`
- `最适合回写的目标页`
- `是否足以进入正式页`

## 当前阶段性收获

- 这张工作台已经从“命令链是否可跑”推进到“问题可以命中索引”。
- 目前已经确认两条较稳的中层判断：
- 目前已经确认三条较稳的中层判断：
  - `Mark Smeaton` 的供词提供了从 rumor 进入 prosecution 的首个程序入口。
  - 起诉书通过时间模糊化、重复化和多人并案，把单点怀疑加工成可执行案件。
  - 多名男性节点被捆绑进同一案件后，会把 Anne 重新编码成一个“网络化危险源”。
- 当前最大的限制已经很清楚：
- 当前最大的限制已经更清楚了：
- 当前最大的限制已经进入可操作阶段：
  - `GraphRAG global` 能给结构性摘要，但会混入细节误差。
  - 只要问题把 `Anne Boleyn` 和 `confession` 绑得太近，就有较高概率触发“主角错配”。
  - 所以后续不能直接把全局问答产物写回正式页，必须继续收窄问题或转回外部来源复核。
- 当前最可用的部分已经可以压缩成一句工作判断：
- 当前最可用的部分已经可以压缩成两句工作判断：
  - `Mark Smeaton` 作为低位供词节点，为安妮案第一次提供了可被起诉书吸收和放大的案件接口。
  - 案件并不是凭空从“王后失宠”升级为“国家案件”，而是通过 `single confession -> procedural expansion -> multi-person indictment` 这条链被程序性地制造出来。
- 当前工作台的阶段性结论：
  - `GraphRAG global` 现在已经足够支撑正式页里的中层结构判断。
  - 但它不再适合继续追英文微观细节，因为细节误差和推断污染已经反复出现。
  - 这张 `QWS` 下一步更适合转向“从工作台反写正式页”，而不是继续全局试问。
- 只有拿到更贴近文本的英文场景线索，这张工作台才算真正进入可回写阶段。

## 暂定回写去向

- 人物页：
  - [[02 People/安妮·博林]]
  - [[02 People/马克·斯密顿]]
  - [[02 People/托马斯·克伦威尔]]
- 事件页：
  - [[03 Events/安妮·博林倒台]]
- 制度页：
  - [[04 Institutions/法律与司法体系]]
- 查询页：
  - [[07 Queries/07.3_Case_Studies/QCase_安妮·博林的倒台]]
  - [[07 Queries/07.4_Cross_Matrices/QCross_安妮案同案人物比较]]
  - [[07 Queries/07.4_Cross_Matrices/QCross_誓言、供词、沉默三种话语装置比较]]

## 升格判断

- [ ] 升格为正式 `QCase`
- [ ] 升格为正式 `QCross`
- [x] 保持为工作台继续试问
- [ ] 归档

## 当前压缩判断

- 这张页的任务不是再证明“安妮案很重要”，而是补足它最缺的英文近距离证据。
- 一旦 `Mark Smeaton`、同案网络和起诉书措辞三条线抓稳，这张工作台就可以拆回正式页并结束使命。
