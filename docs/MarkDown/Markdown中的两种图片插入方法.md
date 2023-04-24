# 目前找到两种插入方法

**为方便图片可以随时被访问到，直接访问GitHub库获取图片**

库url：https://github.com/Minghaoox/pics，访问时需要点开图片，点击download，获取raw链接

------

- **使用md自带的图片插入方法（似乎不能自定义图片样式）：**

```
![alt文本](图片链接 "可选标题")
```

其中，`alt文本`是当图片无法显示时显示的替代文本；`图片链接`是图片的URL地址；`可选标题`是当鼠标悬停在图片上时显示的文本，可以省略。

例如，以下代码将插入一个名为`boy.png`的图片：

```markdown
![小男孩](https://raw.githubusercontent.com/Minghaoox/pics/main/boy.png "小男孩")
```

效果为：

![小男孩](https://raw.githubusercontent.com/Minghaoox/pics/main/boy.png "小男孩")

请注意，在使用Markdown语法时，需要确保图片的URL地址是有效的，并且可以在用户所在的网络环境中访问到。



- **使用HTML的`<img>`标签和CSS样式来实现（可以自定义图片样式）：**

```css
<img src="your_image_url" alt="image_description" style="border: 1px solid black;">
```

其中，`src`属性是图片的URL地址，`alt`属性是图片的描述信息，`style`属性可以设置CSS样式，这里设置了`border`样式为1像素的黑色实线边框。

可以根据需要修改`border`属性的值，调整边框的样式和宽度。

以下代码插入跟上面一样的图片：

```css
<img src="https://raw.githubusercontent.com/Minghaoox/pics/main/boy.png" alt="小男孩" style="border: 1px solid black;">
```

（具体效果可以在Markdown编辑器中查看，在网页中无法显示）

**注意：Markdown支持HTML语法，但不是所有的Markdown编辑器都支持HTML标签，因此在使用时请注意测试和兼容性。**

