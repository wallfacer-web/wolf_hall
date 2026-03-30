---
title: 07 Queries执行看板
note_type: query-moc
status: active
tags:
  - wolfhall
  - query
  - workflow
  - dashboard
---

# 07 Queries执行看板

> [!abstract] 当前判断
> `07 Queries` 已经从“案例堆积层”进入“可回写的中层引擎”。  
> 这一轮的重点成果，不是单纯多了几页，而是已经跑通了多条 `建页 -> NotebookLM -> 回写对象层/理论层` 的闭环。

## 一、当前结构

### 已建模板与架构页

- [[07 Queries/07 Queries架构设计]]
- [[07 Queries/07.1_Templates/QTpl_事件案例统一模板]]

### 已建 `QCase`

- [[07 Queries/07.3_Case_Studies/QCase_“他，克伦威尔”的代词黏附与叙事消歧测试]]
- [[07 Queries/07.3_Case_Studies/QCase_国王大事与英格兰脱离罗马]]
- [[07 Queries/07.3_Case_Studies/QCase_安妮·博林的倒台]]
- [[07 Queries/07.3_Case_Studies/QCase_摩尔审讯中的“誓言、良知与沉默”话语博弈]]
- [[07 Queries/07.3_Case_Studies/QCase_宫廷空间拓扑与“接近权”的情感映射]]
- [[07 Queries/07.3_Case_Studies/QCase_记忆剧场与创伤闪回的感官触发机制]]

### 已建 `QCross`

- [[07 Queries/07.4_Cross_Matrices/QCross_安妮案同案人物比较]]
- [[07 Queries/07.4_Cross_Matrices/QCross_“铁与血”vs“纸与墨”的物质意象对峙]]

## 二、完成度看板

| 页面 | 结构骨架 | NotebookLM | 已回写 | 缺口 |
|---|---|---|---|---|
| `QCase_“他，克伦威尔”...` | 是 | 是 | 是 | 仍缺 `GraphRAG` 例子 |
| `QCross_“铁与血”vs“纸与墨”` | 是 | 是 | 是 | 仍缺 `GraphRAG` 细例 |
| `QCase_摩尔审讯...` | 是 | 是 | 是 | 仍缺 `GraphRAG` 细例 |
| `QCase_宫廷空间拓扑...` | 是 | 是 | 是 | 仍缺 `GraphRAG` 空间词场 |
| `QCase_记忆剧场...` | 是 | 是 | 是 | 仍缺 `GraphRAG` 感官触发例子 |
| `QCase_安妮·博林的倒台` | 是 | 已有前序整合 | 是 | 可补 `GraphRAG` 供词细节 |
| `QCase_国王大事与英格兰脱离罗马` | 是 | 已有前序整合 | 是 | 可补 `GraphRAG` 法条例子 |
| `QCross_安妮案同案人物比较` | 是 | 已整合 | 是 | 可维持当前状态 |

## 三、这一轮已经形成闭环的主线

### 1. 微观叙事机制

- 查询页：[[07 Queries/07.3_Case_Studies/QCase_“他，克伦威尔”的代词黏附与叙事消歧测试]]
- 主要回写：
  - [[06 Theory/01 叙事学]]
  - [[02 People/托马斯·克伦威尔]]

### 2. 物质基础设施转型

- 查询页：[[07 Queries/07.4_Cross_Matrices/QCross_“铁与血”vs“纸与墨”的物质意象对峙]]
- 主要回写：
  - [[06 Theory/04 物质性与新物质主义]]
  - [[06 Theory/05 历史小说理论与新历史主义]]

### 3. 沉默、誓言与解释权

- 查询页：[[07 Queries/07.3_Case_Studies/QCase_摩尔审讯中的“誓言、良知与沉默”话语博弈]]
- 主要回写：
  - [[02 People/托马斯·莫尔]]
  - [[03 Events/托马斯·莫尔受审与处决]]
  - [[04 Institutions/法律与司法体系]]
  - [[06 Theory/05 历史小说理论与新历史主义]]

### 4. 空间拓扑与接近权

- 查询页：[[07 Queries/07.3_Case_Studies/QCase_宫廷空间拓扑与“接近权”的情感映射]]
- 主要回写：
  - [[04 Institutions/宫廷庇护体系]]
  - [[06 Theory/03 情感研究]]
  - [[06 Theory/04 物质性与新物质主义]]
  - [[02 People/托马斯·克伦威尔]]
  - [[02 People/亨利八世]]
  - [[02 People/安妮·博林]]

### 5. 记忆剧场与创伤闪回

- 查询页：[[07 Queries/07.3_Case_Studies/QCase_记忆剧场与创伤闪回的感官触发机制]]
- 主要回写：
  - [[02 People/托马斯·克伦威尔]]
  - [[02 People/托马斯·沃尔西]]
  - [[05 Concepts/记忆与档案]]
  - [[06 Theory/01 叙事学]]
  - [[06 Theory/02 文化记忆研究]]

## 四、当前最大的缺口

### 1. `GraphRAG` 细例层仍偏薄

- 现阶段大多数深度页已经有成熟中文结构判断。
- 真正还缺的是英文原典近距离例子。
- 这意味着 `07 Queries` 目前更像“意义层与结构层已成型”，但“证据密度”还没均匀补齐。

### 2. 状态管理还没有完全收口

- 多数页实际上已经从 `WIP` 进入“可稳定使用”状态。
- 但还没有统一标出哪些页已经适合归档前冻结，哪些页仍需要继续追问。

## 五、下一步最合理的顺序

### 优先级 A：给高价值页补 `GraphRAG`

1. [[07 Queries/07.3_Case_Studies/QCase_摩尔审讯中的“誓言、良知与沉默”话语博弈]]
2. [[07 Queries/07.3_Case_Studies/QCase_宫廷空间拓扑与“接近权”的情感映射]]
3. [[07 Queries/07.3_Case_Studies/QCase_记忆剧场与创伤闪回的感官触发机制]]
4. [[07 Queries/07.4_Cross_Matrices/QCross_“铁与血”vs“纸与墨”的物质意象对峙]]

### 优先级 B：统一状态标记

- 可以开始给已回写完成的页面增加：
  - `writeback_status`
  - `evidence_gap`
  - `archive_ready`

### 优先级 C：准备首批归档候选

- 首批接近“归档准备”的页：
  - [[07 Queries/07.4_Cross_Matrices/QCross_安妮案同案人物比较]]
  - [[07 Queries/07.3_Case_Studies/QCase_国王大事与英格兰脱离罗马]]
  - [[07 Queries/07.3_Case_Studies/QCase_安妮·博林的倒台]]

## 六、压缩判断

- `07 Queries` 现在最重要的成果不是页数增加，而是已经拥有一批真正可反向支撑 `02-06` 层的中层判断页。
- 当前最需要补的不是新的问题，而是让已经跑通的高价值页获得更高密度的英文例子支撑。
- 这一层现在已经足以承担“问题转写层 + 证据中转层 + 理论支撑层”的三重功能。
