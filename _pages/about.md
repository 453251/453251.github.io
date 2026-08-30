---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a PhD student in [ZJUNLP](https://zjunlp.github.io/) at Zhejiang University, advised by Prof. [Huajun Chen](https://person.zju.edu.cn/en/huajun) and Prof. [Ningyu Zhang](https://person.zju.edu.cn/en/ningyu). During my undergraduate studies, I was fortunate to work with and learn from Prof. [Pei Lv](https://www7.zzu.edu.cn/csai/info/1207/3294.htm), Prof. [Chaochao Li](https://www7.zzu.edu.cn/csai/info/1232/1879.htm), Prof. [Xiaoheng Jiang](https://www7.zzu.edu.cn/csai/info/1232/3608.htm), Prof. [Xiaofei Nan](https://www7.zzu.edu.cn/csai/info/1234/3325.htm), and Prof. [Hongying Zan](https://www7.zzu.edu.cn/csai/info/1234/3326.htm).

My research focuses on **Streaming Video LLMs** and **Multimodal Agents**, particularly on long-horizon perception, memory, and reasoning.

📌 My long-term goal is to build **visual intelligence for embodied agents**. I am interested in enabling models to continuously perceive and reason over potentially unbounded visual streams under bounded memory, compute, and latency. A central question in my research is how an agent can maintain a compact, evolving understanding of its visual experience and use it for effective online reasoning. Ultimately, I hope to develop agents that can truly **think while watching**.

✨ I am always happy to discuss Streaming Video LLMs, Multimodal Agents, Embodied Intelligence, and long-horizon memory and reasoning. I am also open to collaborations — feel free to reach out!


# 🔥 News
- *2026.08:* &nbsp;🎉🎉 Two papers have been accepted by EMNLP 2026. See you in Budapest, Hungary!
- *2026.04*: &nbsp;🎉🎉 One paper has been accepted by ACL 2026.



**\* Equal Contribution**

# 📝 Technical Reports
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/mobilemem.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MobileMem: Learning from a Year of Mobile Experiences](https://arxiv.org/abs/2608.13606)

Xinle Deng, Yida Xue, Xiangyuan Ru, **Yijun Chen**, Buqiang Xu, Mingjun Mao, Xinjie Liu, Haoming Xu, Shuofei Qiao, Mengru Wang, Chen Jiang, Yuchen Eleanor Jiang, Lizhong Wang, Jason Wang, Li Zeng, Haofen Wang, Guilin Qi, Huajun Chen, Ningyu Zhang

[**Project Page**](https://github.com/zjunlp/MobileMem) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

- TL;DR: MobileMem is built from **multiple heterogeneous sources** to enable comprehensive on-device memory modeling.
- Github Stars: [![](https://img.shields.io/github/stars/zjunlp/MobileMem)](https://github.com/zjunlp/MobileMem) 🌟
</div>
</div>


# 📝 Selected Publications
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2026</div><img src='images/em2mem.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[EM²Mem: Event-Centric Multimodal Memory for Large Language Models](https://openreview.net/forum?id=SQwZkPrt6n)

**Yijun Chen**, Yaqi Zheng, Yanya Li, Boyi Xiao, Buqiang Xu, Shuofei Qiao, Jizhan Fang, Xinle Deng, Yunzhi Yao, Xuehai Wang, Liuxin ZHANG, Hui Li, Huajun Chen, Shumin Deng 

[**Project Page**](https://github.com/zjunlp/LightMem) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

- TL;DR: An event-centric multimodal memory framework that organizes long videos into grounded event cells and temporal graphs for efficient, evidence-based question answering.
- Github Stars: [![](https://img.shields.io/github/stars/zjunlp/LightMem)](https://github.com/zjunlp/LightMem) 🌟
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/lightmemego.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


[LightMem-Ego: Your AI Memory for Everyday Life](https://arxiv.org/abs/2607.11487)

**Yijun Chen**, Boyi Xiao, Yixian Zhao, Haoting Xia, Buqiang Xu, Jizhan Fang, Yanya Li, Yaqi Zheng, Xuehai Wang, Zirui Xue, Liuxin Zhang, Hui Li, Ningyu Zhang

[**Project Page**](https://github.com/zjunlp/LightMem-Ego) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

- TL;DR: A lightweight streaming memory system that continuously organizes egocentric audio-visual experiences into hierarchical memories for personalized everyday-life assistance.
- Github Stars: [![](https://img.shields.io/github/stars/zjunlp/LightMem-Ego)](https://github.com/zjunlp/LightMem-Ego) 🌟
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026</div><img src='images/structmem.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[StructMem: Structured Memory for Long-Horizon Behavior in LLMs](https://arxiv.org/abs/2604.21748)

Buqiang Xu*, **Yijun Chen\***, Jizhan Fang, Ruobin Zhong, Yunzhi Yao, Yuqi Zhu, Lun Du, Shumin Deng

[**Project Page**](https://github.com/zjunlp/LightMem) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

- TL;DR: A structure-enriched hierarchical memory framework that preserves event-level bindings and cross-event connections to improve temporal reasoning and multi-hop question answering.
- Github Stars: [![](https://img.shields.io/github/stars/zjunlp/LightMem)](https://github.com/zjunlp/LightMem) 🌟
</div>
</div>

- `EMNLP 2026` [TokenPilot: Cache-Efficient Context Management for LLM Agents](https://arxiv.org/abs/2606.17016). Buqiang Xu, Zirui Xue, Dianmou Chen, Chenyang Fu, Chiyu Wu, Caiying Huang, Chen Jiang, Jizhan Fang, Xinle Deng, **Yijun Chen**, Yunzhi Yao, Xuehai Wang, Jin Shang, Gong Yu, Ningyu Zhang.
- `ICLR 2026 Workshop & NLPCC 2026` [MobileMem: Evaluating Long-Horizon Memory for Language Agents in Real-World Mobile Environments](https://openreview.net/forum?id=6dxXXEi729). Xinle Deng, Yida Xue, **Yijun Chen**, Mingjun Mao, Ruobin Zhong, Buqiang Xu, Jizhan Fang, Haoming Xu, Tingwei Wu, Yajing Xu, Shumin Deng, Haofen Wang, Huajun Chen, Ningyu Zhang
- `ACML 2025` [ReSa2: A Two-Stage Retrieval-Sampling Algorithm for Negative Sampling in Dense Retrieval](https://openreview.net/forum?id=E7FEUyRSTF). Muyang Li, Zihan Wang, Sijia Chen, **Yijun Chen**, Jiayu Li, Xinyi Li, Ji Bo.
- `SMC 2025` [A Loss Weighting Algorithm Based on In-batch Positive Passage Rankings for Dense Retrievers](https://ieeexplore.ieee.org/abstract/document/11342524/). Zihan Wang, Muyang Li, **Yijun Chen**, Zhihao Yang, Yiming Qiao, Xinyi Li, Sijia Chen, Bo Ji.
- `ICIC 2025` [CLIP-DSA: A CLIP-Based Discriminative and Self-supervised Framework for Few-Shot Anomaly Detection](https://link.springer.com/chapter/10.1007/978-981-96-9891-2_3). Shenglin Zeng*, **Yijun Chen\***, Muya ng Li, Yuqi Wu, Jizhou Tian.
- `CVIP 2025` [B-H-deformable-DETR: H-deformable-DETR model based on Bayesian neural network optimization in few-shot object detection](https://doi.org/10.1117/12.3058015). **Yijun Chen**, Shenglin Zeng, Muyang Li, Yizhe Guo, Fayang Zhao.

# 🔧Projects

- `arXiv 2026` [MobileMem: Learning from a Year of Mobile Experiences](https://github.com/zjunlp/MobileMem). Github Stars: [![](https://img.shields.io/github/stars/zjunlp/MobileMem)](https://github.com/zjunlp/MobileMem) 🌟
- `arXiv 2026` [LightMem-Ego: Your AI Memory for Everyday Life](https://github.com/zjunlp/LightMem-Ego). Github Stars: [![](https://img.shields.io/github/stars/zjunlp/LightMem-Ego)](https://github.com/zjunlp/LightMem-Ego) 🌟
- ``ICLR 2026`` [LightMem: Lightweight and Efficient Memory-Augmented Generation](https://github.com/zjunlp/LightMem). Github Stars: [![](https://img.shields.io/github/stars/zjunlp/LightMem)](https://github.com/zjunlp/LightMem) 🌟

# 🎖 Honors and Awards

- *2023.12* National Scholarship for Undergraduate Students (本科生国家奖学金). 

# 📖 Educations
- *2026.09 - 2031.06*, PhD Student, Zhejiang University.
- *2022.09 - 2026.06*, Undergraduate Student, Zhengzhou University.

# 💻 Internships
- *2026.07 - 2027.07,* Ant Group, China.

# ✍️ Academic Service
- Conference Reviewer: NLPCC, ACML.


<div class="visitor-map-widget" style="max-width: 500px; margin: 2em auto 0; text-align: center;">
  <script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=TEuJJPWz_Cz4ctozAYTXa87I-Y7bkSy9InIFf549T9Y&cl=ffffff&w=a"></script>
</div>
