---
title: QBatch_核心人物第二组批处理
note_type: query
status: active
query_type: batch-task
writeback_status: partial
evidence_gap: graphrag-examples-thin
archive_ready: false
target_entities:
  - Thomas Wolsey
  - Jane Seymour
  - Stephen Gardiner
  - Thomas Howard
applied_theory:
  - 叙事学
  - 情感研究
  - 历史小说理论与新历史主义
tools:
  - NotebookLM
  - GraphRAG
tags:
  - wolfhall
  - query
  - batch
  - people
---

# QBatch_核心人物第二组批处理

> [!abstract] 核心问题
> 这张页不是分析某一个人物，而是统一推进第二组关键人物卡。  
> 它的任务是把同一套提问流程批量施加到多个高价值人物上，并把结果压回人物页。

> [!info] 当前批次
> [[02 People/托马斯·沃尔西]]  
> [[02 People/简·西摩]]  
> [[02 People/斯蒂芬·加德纳]]  
> [[02 People/托马斯·霍华德]]

## 问题界定

### 本批处理要回答的问题

- 第二组关键人物最适合用哪些人物研究方法切入？
- 这些人物分别在《Wolf Hall》三部曲中承担什么结构功能？
- 哪些人物适合优先补“社会网络分析”，哪些更适合补“情感结构”或“人格画像”？
- 如何把 `NotebookLM` 与 `GraphRAG` 的结果统一压缩回人物卡，而不是分散在临时记录里？

### 本批处理的目标

- 统一人物研究问法。
- 统一人物卡回写栏目。
- 为后续人物批处理建立标准样例。

## 适用对象与输入来源

### 目标人物

- [[02 People/托马斯·沃尔西]]
- [[02 People/简·西摩]]
- [[02 People/斯蒂芬·加德纳]]
- [[02 People/托马斯·霍华德]]

### 输入来源

- `Wolf Hall`
- `Bring Up the Bodies`
- `The Mirror and the Light`
- `NotebookLM`
- `GraphRAG`

## 提问记录与工具调用

### 共用执行顺序

1. 先用 `NotebookLM` 问方法与研究切入点。
2. 再用 `GraphRAG` 逐条问文本结构与人物特征。
3. 把结果压缩回人物卡。
4. 在本页更新执行状态。

### 共用准备命令

```powershell
$env:NOTEBOOKLM_HOME = "$env:USERPROFILE\.notebooklm-clean-home"
notebooklm use 99341476-8713-40c0-ae12-70f59cfd24e8
```

```powershell
conda activate Graph
cd H:\graphrag-0.5.0\ragtest
```

## 结构判断

### 当前这批人物的共同价值

- 他们都不是“主角级中心人物”，但都在关键转折点上承担结构重量。
- 这四人分别覆盖了：
  - 旧秩序中心人物
  - 替代性稳定方案
  - 保守派政治对手
  - 贵族门第政治代表
- 因此，这一批最适合用来测试：人物卡是否能从“基础介绍”升级为“结构功能页”。

### 当前最合理的回写栏目

- `基于小说文本问答的补充`
- `可直接用于论文的压缩判断`
- `社会网络分析 / 人格画像 / 话语与聚焦` 三选一

## 例子与印证

### 一、托马斯·沃尔西

状态：

- [x] NotebookLM 方法问答
- [x] GraphRAG 问题 1
- [x] GraphRAG 问题 2
- [x] GraphRAG 问题 3
- [x] GraphRAG 问题 4
- [x] GraphRAG 问题 5
- [x] 回写人物卡

目标人物卡：

- [[02 People/托马斯·沃尔西]]

#### NotebookLM

```text
如果要把托马斯·沃尔西作为《狼厅》三部曲中的人物分析案例，请说明最适合使用哪些数字人文人物研究方法。请围绕人物社会网络分析、情感弧线分析、人格画像、叙事聚焦/视角分析四种方法，说明：
1. 哪些方法最适合沃尔西
2. 分别能回答什么问题
3. 对《狼厅》三部曲中的沃尔西研究有什么价值
```

#### GraphRAG

```powershell
python query_ollama.py --root . --method global "托马斯·沃尔西在《狼厅》三部曲中是如何被塑造成一个旧秩序的中心人物的？他为什么不只是失势的大臣，而是都铎权力结构转折的关键节点？"
```

```powershell
python query_ollama.py --root . --method local "托马斯·沃尔西与托马斯·克伦威尔的关系是如何建立的？沃尔西在政治风格、权力观和情感结构上对克伦威尔产生了哪些具体影响？"
```

```powershell
python query_ollama.py --root . --method local "托马斯·沃尔西在言谈、气质、出场方式和权力表现上有哪些鲜明特征？这些特征如何体现他的威仪、控制力与脆弱性？"
```

```powershell
python query_ollama.py --root . --method global "托马斯·沃尔西的崛起依赖了哪些条件？他的失势又是由哪些力量共同造成的？请结合国王大事、宫廷政治和教会权力结构进行分析。"
```

```powershell
python query_ollama.py --root . --method global "《狼厅》三部曲是如何重新塑造托马斯·沃尔西形象的？小说在哪些方面突破了对他作为腐败红衣主教或失败政客的传统刻板印象？"
```

回写栏目：

- `基于小说文本问答的补充`
- `可直接用于论文的压缩判断`
- `社会网络分析`

本轮执行备注：

- `NotebookLM` 已完成方法问答，当前最适合沃尔西的主方法是：
  - `人物社会网络分析`
  - `叙事聚焦 / 视角分析`
- `GraphRAG` 目前已完成 1 条 `global` + 2 条 `local`
- `GraphRAG` 目前已完成 2 条 `global` + 2 条 `local`
  - 英文问法明显优于中文问法；中文全局问法曾发生人物串答，英文问法后结果恢复稳定
  - 当前已稳定补出：
    - `old ecclesiastical order`
    - `turning point in Tudor power structure`
    - `pragmatism / administrative skill / caution through downfall`
    - `eloquence / adaptability / ambition / opulence / regal bearing`
    - `exceptional administrative skills / strategic alliances / structural limits of church power`
    - `reformer and administrator / visionary leadership / political vulnerability`

### 二、简·西摩

状态：

- [ ] NotebookLM 方法问答
- [ ] GraphRAG 问题 1
- [ ] GraphRAG 问题 2
- [ ] GraphRAG 问题 3
- [ ] GraphRAG 问题 4
- [ ] GraphRAG 问题 5
- [ ] 回写人物卡

目标人物卡：

- [[02 People/简·西摩]]

#### NotebookLM

```text
如果要把简·西摩作为《狼厅》三部曲中的人物分析案例，请说明最适合使用哪些数字人文人物研究方法。请特别说明她为什么适合用社会网络分析、情感弧线分析和话语与聚焦分析来研究。
```

#### GraphRAG

```powershell
python query_ollama.py --root . --method global "简·西摩在《狼厅》三部曲中是如何被塑造成一个替代性稳定方案的？她为什么不只是温顺的新王后，而是宫廷权力重排中的关键节点？"
```

```powershell
python query_ollama.py --root . --method local "简·西摩与亨利八世、托马斯·克伦威尔以及爱德华·西摩的关系是如何建立的？这些关系如何推动她进入王权中心？"
```

```powershell
python query_ollama.py --root . --method local "简·西摩在言谈、气质、姿态和出场方式上有哪些鲜明特征？这些特征如何体现她的低调、顺从、谨慎与政治可用性？"
```

```powershell
python query_ollama.py --root . --method global "简·西摩的上升依赖了哪些条件？她的意义又是如何由安妮·博林倒台、王朝继承压力和西摩家族上升共同塑造的？"
```

```powershell
python query_ollama.py --root . --method global "《狼厅》三部曲是如何重新塑造简·西摩形象的？小说如何把她写成一个看似安静、实则嵌入宫廷权力结构的复杂人物？"
```

回写栏目：

- `基于小说文本问答的补充`
- `可直接用于论文的压缩判断`
- `话语与聚焦`

### 三、斯蒂芬·加德纳

状态：

- [ ] NotebookLM 方法问答
- [ ] GraphRAG 问题 1
- [ ] GraphRAG 问题 2
- [ ] GraphRAG 问题 3
- [ ] GraphRAG 问题 4
- [ ] GraphRAG 问题 5
- [ ] 回写人物卡

目标人物卡：

- [[02 People/斯蒂芬·加德纳]]

#### NotebookLM

```text
如果要把斯蒂芬·加德纳作为《狼厅》三部曲中的人物分析案例，请说明最适合使用哪些数字人文人物研究方法。请特别说明他为什么适合用社会网络分析、人格画像和话语与聚焦分析来研究。
```

#### GraphRAG

```powershell
python query_ollama.py --root . --method global "斯蒂芬·加德纳在《狼厅》三部曲中是如何被塑造成一个保守派关键政治人物的？他为什么不只是克伦威尔的对手，而是另一种都铎政治逻辑的代表？"
```

```powershell
python query_ollama.py --root . --method local "斯蒂芬·加德纳与托马斯·克伦威尔的关系是如何发展并逐渐恶化的？他们在哪些宗教、政治和权力判断上存在根本分歧？"
```

```powershell
python query_ollama.py --root . --method local "斯蒂芬·加德纳在言谈、气质、姿态和出场方式上有哪些鲜明特征？这些特征如何体现他的克制、敌意、警觉与政治耐心？"
```

```powershell
python query_ollama.py --root . --method global "斯蒂芬·加德纳的政治力量依赖了哪些条件？他在三部曲后段为什么会逐渐成为克伦威尔失势的重要压力来源？"
```

```powershell
python query_ollama.py --root . --method global "《狼厅》三部曲是如何重新塑造斯蒂芬·加德纳形象的？小说如何突破把他写成单一反派的传统印象，并显示其复杂的政治理性？"
```

回写栏目：

- `基于小说文本问答的补充`
- `可直接用于论文的压缩判断`
- `人格画像`

### 四、托马斯·霍华德

状态：

- [ ] NotebookLM 方法问答
- [ ] GraphRAG 问题 1
- [ ] GraphRAG 问题 2
- [ ] GraphRAG 问题 3
- [ ] GraphRAG 问题 4
- [ ] GraphRAG 问题 5
- [ ] 回写人物卡

目标人物卡：

- [[02 People/托马斯·霍华德]]

#### NotebookLM

```text
如果要把托马斯·霍华德作为《狼厅》三部曲中的人物分析案例，请说明最适合使用哪些数字人文人物研究方法。请特别说明他为什么适合用社会网络分析、人格画像和人物关系研究来处理。
```

#### GraphRAG

```powershell
python query_ollama.py --root . --method global "托马斯·霍华德在《狼厅》三部曲中是如何被塑造成保守贵族政治的代表人物的？他为什么不只是一个家族长辈，而是宫廷权力结构中的关键参与者？"
```

```powershell
python query_ollama.py --root . --method local "托马斯·霍华德与安妮·博林、亨利八世以及托马斯·克伦威尔的关系是如何变化的？这些关系如何体现他在派系政治中的位置？"
```

```powershell
python query_ollama.py --root . --method local "托马斯·霍华德在言谈、气质、姿态和出场方式上有哪些鲜明特征？这些特征如何体现他的门第意识、威压感、老练与危险性？"
```

```powershell
python query_ollama.py --root . --method global "托马斯·霍华德的政治影响力依赖了哪些条件？他如何在都铎王权、家族利益和宫廷派系之间维持自己的位置？"
```

```powershell
python query_ollama.py --root . --method global "《狼厅》三部曲是如何重新塑造托马斯·霍华德形象的？小说在哪些方面突破了对他作为单一保守贵族的刻板印象？"
```

回写栏目：

- `基于小说文本问答的补充`
- `可直接用于论文的压缩判断`
- `社会网络分析`

## 回写去向与执行

### 建议回写去向

- 人物页：[[02 People/托马斯·沃尔西]]、[[02 People/简·西摩]]、[[02 People/斯蒂芬·加德纳]]、[[02 People/托马斯·霍华德]]
- 查询层：后续可拆分为更细的 `QCase` 或 `QCross`
- 理论页：视结果强度决定是否反向支撑 [[06 Theory/03 情感研究]]、[[06 Theory/05 历史小说理论与新历史主义]]

### 当前执行状态

- [ ] 已完成沃尔西批次
- [ ] 已完成简·西摩批次
- [ ] 已完成加德纳批次
- [ ] 已完成霍华德批次
- [ ] 已统一回写四张人物页

## 残留问题

- 是否需要把这一批人物再拆成 `保守派/改革派/替代者` 三种子批次？
- 哪些人物最适合继续升级成单独 `QCase` 页？
- 哪些人物更适合补 `GraphRAG local` 细例，而不是再跑新的 `global`？

## 批处理备注

- 如果某条 `global` 返回空答案，改用 `local` 重跑一次。
- 不要把模型原答案整段贴进人物卡。
- 回写时优先压缩成：
  - 3 到 5 条可用结论
  - 1 段论文可用判断

## 相关页面

- [[07 Queries/07.2_Batch_Tasks/07.2_Batch_Tasks总览]]
- [[07 Queries/07 Queries执行看板]]
- [[01 MOCs/人物研究提问指南]]
- [[01 MOCs/人物总览]]
