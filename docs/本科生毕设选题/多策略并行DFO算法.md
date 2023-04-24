# 基于多种并行策略的分散果蝇优化算法研究与实现

## 一些关键问题的解释

### 群体智能算法

网上能查阅的资料非常多，以PSO算法为例简单解释

下图为群体智能算法中最具代表性的PSO算法的优化过程

![PSO算法优化过程](https://raw.githubusercontent.com/Minghaoox/pics/main/本科生毕设选题/多策略并行DFO算法/PSO算法优化过程.png)

### 测试函数

（什么是测试函数？，https://www.sfu.ca/~ssurjano/index.html）

![PSO算法优化过程](https://raw.githubusercontent.com/Minghaoox/pics/main/本科生毕设选题/多策略并行DFO算法/测试函数示例.png)

### DFO算法

可以简单理解为一种等同于上面所讲的PSO算法，已准备有相应的资料以供学习。

### GPU并行计算

将原本由一个人推进的大量的工作，分配个众多个人**同时**推进，现有多种并行方式（甚至脱离GPU的并行），可以按需选取。

### 本题目开始的一些前提条件

1.良好的英语能力，因为关于DFO的很多资料只在外网可以查阅到，我会提供相关的资料和途径，但知识的提炼很大程度要靠自己；

2.勤奋好学，由于我本科毕设就是围绕GPU并行，其中遇到大量问题，如果抱着随便搞一搞的心态，很难很难推进；

3.要做好面临很多困难的准备，其实这个课题的关键点也就一两个，但是要解决是比较困难的，要做好心理准备、怀有解决问题的决心。

### 关于现有代码的总结

1. DFO采用标准串行计算形式

2. N-DFO对仅对适应度值的计算采用CUDA计算（GPU计算）的方式

   N-DFO相较于DFO算法只有4倍速度的提升（仅在GPU上计算适应度值，但是这种并行方式是不同于我本科毕设的）

3. Multi-DFO使用的是多流处理技术，技术原理比较简单且常用，是一种非GPU实现并行的方式，速度达到DFO算法的7倍（并未使用GPU）

4. 在Multi-N-DFO算法中，多流+GPU并行计算，速度达到DFO算法的28倍（预期，已有思路，有可行性）

5. 将要进行的工作：在现有材料的基础上，实现“全GPU并行”，即算法中的所有计算工作均利用GPU来完成，核心技术是“共享内存的使用”，目前有少部分支撑资料，利用AI编程发现具有可行性。在此部分还可以说的一个创新点是，在Python中如何使用共享内存？

## 论文大纲

### 基于多种并行策略的分散果蝇优化算法研究与实现

#### 1 绪论

##### 	1.1 研究背景

##### 	1.2 研究现状

##### 	1.3 本文主要工作及论文组织结构

#### 2 群体智能算法与并行技术

##### 	2.1 经典群体智能算法

##### 	2.2 DFO算法（这部分资料只能从外网找到）

##### 	2.3 现代并行技术（早期围绕C语言等，现代围绕Python来讲，将3.1 朴素的并行模型、多相并联模型、全GPU并行模型、多群岛模型都涵盖进去）

##### 	2.4 本章小结

#### 3 基于多种并行策略的DFO算法

​	（如果只体现全过程GPU作为工作量感觉太少了，所以打算将前三个部分也加入进去体现工作量，但真正的难点和创新点在于3.4）

##### 	3.1 基于多流的DFO算法

##### 	3.2 基于朴素并行的DFO算法

##### 	3.3 多流与朴素并行相结合的DFO算法

##### 	3.4 全过程GPU并行的DFO算法（重点在于解决共享内存上的编程，有少许资料，但能参照的不多，甚至可能无法实现）

##### 	3.5 本章小结

#### 4 实验

##### 	4.1 实验设置（环境、测试函数、参数设置）

##### 	4.2 实验结果与分析

##### 	4.3本章小结

#### 5 总结与展望

##### 	....

## 现有资料整理

（不建议系统学习Python，可以遇到问题解决问题）

1. DFO代码：https://github.com/Minghaoox/DFO

2. GPU硬件知识和基础概念 : AI时代程序员都应该了解的GPU基础知识：https://blog.csdn.net/qq_42596142/article/details/103137560

3. Python版CUDA入门教程：https://blog.csdn.net/qq_42596142/article/details/103157468?spm=1001.2014.3001.5502

4. Python Numba | 多流和共享内存CUDA优化技术介绍和代码示例：https://blog.csdn.net/qq_42596142/article/details/103183209?spm=1001.2014.3001.5502

5. Anaconda（这是Python集成环境）安装教程：https://blog.csdn.net/JB_JIANGBIN/article/details/115679978

   一些Python可能用到的小知识点：

   Python中self用法详解：https://blog.csdn.net/CLHugh/article/details/75000104

   python中 “__name__“的实际应用：https://blog.csdn.net/wosind/article/details/90728198

   python中的单引号和双引号有什么区别：https://blog.csdn.net/weixin_32646781/article/details/113502784

   Numpy中ndim、shape、dtype、astype的用法：https://blog.csdn.net/Da_wan/article/details/80518725

   python列表转集合_python中list转换为数组：https://blog.csdn.net/weixin_39852647/article/details/110193495

可能需要了解但这里没列出且一搜就有的：Python如何求均值、方差、标准差；Python中conda和pip命令的熟练使用（可以直接问我）；Anaconda是否能直接更换Python版本（是，搜一下就有）；Anaconda如何管理Python环境；Python中如何截取；如何选取适合自己GPU的CUDA版本    以及诸多问题。

6. 常见的新算法的标准测试函数：https://blog.csdn.net/qq_40456829/article/details/92790331

看完测试函数，你需要理解：算法优化的是什么？适应度值是什么？单峰函数、多峰函数的区别是什么？测试函数（也称评价函数）在算法中充当什么角色？

7. 高并发程序需要遵守的两个定律：https://blog.csdn.net/qq_34594236/article/details/79674204

8. Python查看电脑的GPU型号：https://blog.csdn.net/weixin_40650252/article/details/119935530

9. GPU共享内存小结---pycuda：https://blog.csdn.net/fupotui7870/article/details/78359158

   注意这里是Pycuda，跟你使用的工具关系不大，但是可以参考

10. python的CUDA加速编程科普：https://briwisdom.blog.csdn.net/article/details/122161754

11. nvidia-smi 命令详解：https://blog.csdn.net/weixin_44966641/article/details/121228579