// 显示指定的选项卡
function showTab(tabId) {
    // 隐藏所有选项卡内容
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // 移除所有选项卡的活跃状态
    const tabLinks = document.querySelectorAll('.tab');
    tabLinks.forEach(tabLink => {
        tabLink.classList.remove('active');
    });

    // 显示选中的选项卡内容
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';

    // 设置选中状态
    const activeTab = document.querySelector(`.tab[href="#${tabId}"]`);
    activeTab.classList.add('active');

    // 更新 MathJax 渲染数学公式
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, selectedTab]);
}

// 默认显示第一个选项卡
document.addEventListener('DOMContentLoaded', () => {
    showTab('tab1');
    loadMarkdownContent(); // 加载 Markdown 内容
});

// 切换选项卡区的显示状态
function toggleTabs() {
    const tabs = document.getElementById('tabs');
    tabs.classList.toggle('hidden');
}

// 将 Markdown 内容转换为 HTML
function markdownToHtml(markdown) {
    // 处理标题
    markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>'); // 一级标题
    markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>'); // 二级标题
    markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>'); // 三级标题
    markdown = markdown.replace(/^#### (.*$)/gim, '<h4>$1</h4>'); // 四级标题
    markdown = markdown.replace(/^##### (.*$)/gim, '<h5>$1</h5>'); // 五级标题
    markdown = markdown.replace(/^###### (.*$)/gim, '<h6>$1</h6>'); // 六级标题

    // 处理加粗
    markdown = markdown.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
    markdown = markdown.replace(/__(.*)__/gim, '<strong>$1</strong>');

    // 处理斜体
    markdown = markdown.replace(/\*(.*)\*/gim, '<em>$1</em>');
    markdown = markdown.replace(/_(.*)_/gim, '<em>$1</em>');

    // 处理无序列表
    markdown = markdown.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');
    markdown = markdown.replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>');

    // 处理有序列表
    markdown = markdown.replace(/^\d+\. (.*$)/gim, '<ol><li>$1</li></ol>');

    // 处理数学公式（LaTeX）
    markdown = markdown.replace(/\$\$(.*?)\$\$/g, '<div class="mathjax">$$$1$$</div>');
    markdown = markdown.replace(/\$(.*?)\$/g, '<span class="mathjax">$$$1$$</span>');

    // 处理换行
    markdown = markdown.replace(/\n/g, '<br />');

    // 返回处理后的 HTML 内容
    return markdown.trim();
}

// 加载并转换 Markdown 内容
function loadMarkdownContent() {
    const markdownContent1 = `
# 选项卡 1 内容
这是一个 **Markdown** 格式的文本，下面是一些常见的 Markdown 语法示例：

## 数学公式：
这是一个行内公式 $E = mc^2$ 和一个块级公式：
$$
a^2 + b^2 = c^2
$$

1. 有序列表项 1
2. 有序列表项 2
    `;

    const markdownContent2 = `
# 选项卡 2 内容
在这个选项卡里，你可以看到更多的 **Markdown** 内容。

## 数学公式：
- 行内公式： $\\alpha + \\beta = \\gamma$
- 块级公式：
$$
\\frac{1}{2} mv^2
$$
    `;

    const markdownContent3 = `
# 选项卡 3 内容
最后一个选项卡，继续展示 **Markdown** 内容。

## 图片和数学公式：
![示例图片](https://via.placeholder.com/150)

块级公式：
$$
\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
$$
    `;

    // 将 Markdown 转换为 HTML 并插入到页面中
    document.getElementById('markdownContent1').innerHTML = markdownToHtml(markdownContent1);
    document.getElementById('markdownContent2').innerHTML = markdownToHtml(markdownContent2);
    document.getElementById('markdownContent3').innerHTML = markdownToHtml(markdownContent3);
}
