// 显示指定的选项卡
function showTab(tabId) {
    // 隐藏所有选项卡内容
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('show');
        tab.style.display = 'none';  // 隐藏时清除 display: block
    });

    // 移除所有选项卡的活跃状态
    const tabLinks = document.querySelectorAll('.tab');
    tabLinks.forEach(tabLink => {
        tabLink.classList.remove('active');
    });

    // 显示选中的选项卡内容
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';  // 显示时设置 display: block
    setTimeout(() => {
        selectedTab.classList.add('show');  // 延迟添加 show 类，以触发动画
    }, 10);

    // 设置选中状态
    const activeTab = document.querySelector(`.tab[href="#${tabId}"]`);
    activeTab.classList.add('active');
}

// 默认显示第一个选项卡
document.addEventListener('DOMContentLoaded', () => {
    showTab('tab1');
});

// 切换选项卡区的显示状态
function toggleTabs() {
    const tabs = document.getElementById('tabs');
    tabs.classList.toggle('show'); // 切换显示/隐藏选项卡区
}
