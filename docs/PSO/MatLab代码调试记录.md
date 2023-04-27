## “粒子群优化算法位置更新方程的统一及简化”中的实验部分涉及代码复现

------

（记得备份原始代码，Onedrive存有原始代码以及仅改动CLPSO的代码）

## 论文中的十组实验算法

------

'SPSO_SIS_hj','S_SPSO_SIS_hj',

'SPSO_2007_hj','S_SPSO_2007_hj',

'BBPSO_IP_hj','S_BBPSO_IP_hj',

'FIPS_hj','S_FIPS_hj',

'CPSO_H_hj','S_CPSO_H_hj',

'CLPSO_hj','S_CLPSO_hj',

'OLPSO_L_hj','S_OLPSO_L_hj',

'PSO_P5_hj','S_PSO_P5_hj',

'Local_MLPSO_6L_hj','S_Local_MLPSO_6L_hj',

'QPSO_hj','S_QPSO_hj'

## 算法调试（Standard）

| 算法                                  | 调试情况                  |
| -------------------------------------| ------------------------ |
| (1) Standard PSO from IEEE Swarm Intelligence Symposium (SPSO-SIS) | 已调通SPSO_SIS_hj.m       |
| (2) Standard PSO 2007 in Particle Swarm Central (SPSO-2007)  | 已调通SPSO_2007_hj.m      |
| (3) Cooperative PSO (CPSO)                                   | 已调通CPSO_H_hj.m         |
| (4) PSO with general fitness evaluation strategy (PSO-GFES)  | 已调通PSO_P5_hj.m         |
| (5) Fully informed particle swarm (FIPS)                     | 已调通FIPS_hj.m           |
| (6) Comprehensive learning PSO (CLPSO)                       | 已调通CLPSO_hj.m          |
| (7) Orthogonal learning PSO (OLPSO)                          | 已调通OLPSO_L_hj.m        |
| (8) Multi-layer particle swarm optimization (MLPSO)          | 已调通Local_MLPSO_6L_hj.m |
| (9) Bare bones PSO (BBPSO)                                   | 已调通BBPSO_IP_hj.m       |
| (10) Quantum-behaved particle swarm optimization (QPSO)      | 已调通QPSO_hj.m           |

上表中算法最初都是以调通为目的，原为函数，被main调用，所以直接去掉了函数层变成独立算法，过程中并没有考虑main中对于特定算法的特定参数设置，这是后续需要重新检查的地方。

## 算法调试（Conv）

下一步围绕Conv文件展开，这是“统一和简化”论文中的收敛性研究内容，调试方法应该与上同。

| 算法                                                         | 调试情况                       |
| ------------------------------------------------------------ | ------------------------------ |
| (1) Standard PSO from IEEE Swarm Intelligence Symposium (SPSO-SIS) | 已调通SPSO_SIS_Conv_hj.m       |
| (2) Standard PSO 2007 in Particle Swarm Central (SPSO-2007)  | 已调通SPSO_2007_Conv_hj.m      |
| (3) Cooperative PSO (CPSO)                                   | 已调通CPSO_H_Conv_hj.m         |
| (4) PSO with general fitness evaluation strategy (PSO-GFES)  | 已调通PSO_P5_Conv_hj.m         |
| (5) Fully informed particle swarm (FIPS)                     | 已调通FIPS_Conv_hj.m           |
| (6) Comprehensive learning PSO (CLPSO)                       | 已调通CLPSO_Conv_hj.m          |
| (7) Orthogonal learning PSO (OLPSO)                          | 已调通OLPSO_L_Conv_hj.m        |
| (8) Multi-layer particle swarm optimization (MLPSO)          | 已调通Local_MLPSO_6L_Conv_hj.m |
| (9) Bare bones PSO (BBPSO)                                   | 已调通BBPSO_IP_Conv_hj.m       |
| (10) Quantum-behaved particle swarm optimization (QPSO)      | 已调通QPSO_Conv_hj.m           |

## 入口函数

| 两个整体测试函数入口    |
| ----------------------- |
| （1）main_TestC_h已调通 |
| （2）main_Conv_hj已调通 |

## 绘图函数

| （1）Plot_MeanOfTrailOfBestFitness_hj已调通 |
| ------------------------------------------- |
| （2）Plot_Conv3_hj已调通                    |
| （3）Plot_Conv6_hj未调通                    |

## 调试问题

------

以下只记录了暂未解决的问题（已解决的问题在代码相应位置有注释）

1.多次调试发现：现有代码中的错误确实来自于C值的选取，但是原代码中设置的配置种数众多，且有些已经被修改，所以没有找到能让绘图代码完整运行的配置组。