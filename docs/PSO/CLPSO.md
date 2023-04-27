## CLPSO中对比于PSO的学习策略改进

1. 粒子不再使用自身的 $pbest$ 和 $gbest$ 来规划飞行速度，所有粒子的 $pbest$ 都可能被用作指导粒子飞行的粒子样本；

2. CLPSO用 $pbest(fi(d))$ 作为寻优策略；
3. 每个粒子都可以从不同粒子的对应维度的pbest进行学习，不必学习某粒子的全部维度（但会向相同粒子学习所有维度）；
4. 与PSO中每个粒子同时学习 $pbest$ 和 $gbest$ 两个范例不同，CLPSO中一个粒子的每一个维度都只会向一个范例学习。

## 算法核心公式

1. 加入 $fi(d)$ 的速度更新公式

$$
V_i^d \leftarrow \omega * V_i^d + c*rand_i^d * (pbest_{fi(d)}^d - X_i^d)
$$



2. 关于 $f(i)$ 的定义

原文：defines which particles'pbest the particle i shoud follow. （详细解释已经在代码中注释）

$$
f_i=[f_i(1), f_i(2), ..., f_i(D)]
$$
定义了第 $i$ 个粒子维度 $d$ 应该学习哪个粒子的 $pbest$ ， $pbest(fi(d) d)$ 可以是包括自己在内的任何粒子相应维度 $(d)$ 的 $pbest$ 值。

## 如何确定 $pbest(fi(d) d) $ ，如何求 $fi(d)$ 

对于粒子 $i$ 的 $d$ 个维度，算法提供 $d$ 个随机值，如果这个随机值大于粒子 $i$ 在该维度的 $Pc$ （交叉概率或学习概率）值，则向自身的 $pbest$ 学习；若随机值小于 $Pc$ 值，则向其他粒子的 $pbest$ 学习。在向其他粒子学习时，根据以下条件判断学习对象：

1. 从种群中速度没更新的粒子中随机寻找两个粒子；
2. 对比两个粒子的 $pbest$ 的适应度值，并选择更好的那个粒子的 $pbest$ 。在CLPSO中，定义的适应度值越大越好，所以求极小化问题时，使用负函数值作为适应度值；
3. 将更好的那个粒子的 $pbest$ 作为该维度（即 $fi$ 对应的值）的学习粒子，如果是全学习自己的维度，则随机找一个维度，再随机找一个其他粒子在该维度的 $pbest$ 学习；
4. 为了粒子更好的学习，减少浪费的时间，当粒子对一个 $pbest$ 学习，在一定代数内停止改进时，我们为粒子重新分配另一个粒子供学习。

 **$fi(d)$ 选择流程图**

![fi(d)选择流程图](https://raw.githubusercontent.com/Minghaoox/pics/main/PSO/CLPSO/fi(d)选择流程图.png)

## 学习概率 $Pc$ （或交叉概率）

**$Pc$ 作用**

$Pc$ 用于在判断粒子是否需要选择其他粒子学习时使用

**$Pc$ 定义式**
$$
Pc_i=0.05+0.45*\frac{(exp(\frac{10(i-1)}{ps-1})-1)}{(exp(10)-1)}
$$
**$Pc$ 图像$(0, 0.5)$**

![Pc图像(0,0.5)](https://raw.githubusercontent.com/Minghaoox/pics/main/PSO/CLPSO/Pc图像(0%2C0.5).png)

## **CLPSO算法流程图**

![算法流程图](https://raw.githubusercontent.com/Minghaoox/pics/main/PSO/CLPSO/算法流程图.png)

 **参数解释**

![参数解释](https://raw.githubusercontent.com/Minghaoox/pics/main/PSO/CLPSO/参数解释.png)

## **学习策略**

PSO使用 $pbest$ 和 $gbest$ 学习， $pbest$ 为个体历史最优， $gbest$ 为当前全局历史最优；

CLPSO使用 $pbest(fi(d) d)$ 学习，可以向包括自己在内的所有粒子学习，由 $Pc$ 值决定。，

## **可搜索范围**

![可搜索范围](https://raw.githubusercontent.com/Minghaoox/pics/main/PSO/CLPSO/可搜索范围.png)

**PSO**
$$
r_{ld}^d=L_{li}^d+L_{2i}^d=|gbest^d-X_i^d|+|pbest_i^d-X_i^d|
$$


**CLPSO**
$$
r_{2i}^d=max(pbest_j^d,X_i^d)-min(pbest_j^d,X_i^d)
$$


PSO搜索范围就是粒子的位置和 $gbest$ ， $pbest$ 差的和；

CLPSO的搜索范围是所有粒子的历史最优位置和该粒子当前位置中，绝对值最大的差

## **跳出局部最优的能力**

CLPSO因为在停止进化几代后，会主动的随机向其他粒子的 $pbest$ 学习，可能借助这个变量跳出局部最优；

PSO由于同时受 $gbest$ 和 $pbest$ 的影响，当 $gbest$ 和 $pbest$ 位置接近时，粒子陷入局部最优，且很难跳出局部最优区域。