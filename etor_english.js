// Chinese to English translation dictionary - UI elements
const translations = {
  // App name
  '易火': 'ETor',
  
  // Navigation
  '总览': 'Overview',
  '物品': 'Items',
  '价格库': 'Price Database',
  '历史记录': 'History',
  '策略分析': 'Strategy Analysis',
  '排行榜': 'Leaderboard',
  '小窗模式': 'Mini Window',
  
  // Status
  '正在记录': 'Active',
  '记录中': 'Recording',
  '等待进入': 'Waiting',
  
  // Stats cards
  '背包价值': 'Backpack Value',
  '总收益(扣税)': 'Total Profit (After Tax)',
  '总收益': 'Total Profit',
  '扣税': 'After Tax',
  '每分钟收益': 'Profit/Min',
  '火/分钟': '🔥/min',
  '实际': 'Actual',
  
  // Time section
  '图内时长': 'In-Map Time',
  '实际时长': 'Actual Time',
  '地图次数': 'Map Runs',
  '地图内时长累加': 'Total time spent in maps',
  '从进第一张图到最后出图之间总时长': 'Total time from first map entry to last exit',
  
  // Map log
  '地图日志': 'Map Log',
  '地图记录': 'Map Records',
  '地图 / 时间': 'Map / Time',
  '拾取': 'Loot',
  '成本': 'Cost',
  '收益': 'Profit',
  '效率': 'Efficiency',
  '时长': 'Duration',
  '暂无记录': 'No records yet',
  '暂无拾取记录': 'No loot records',
  '跟随地图': 'Follow Map',
  
  // Actions
  '重置': 'Reset',
  '清除数据': 'Clear Data',
  '切换显示': 'Toggle Display',
  '最小化': 'Minimize',
  '最大化': 'Maximize',
  '关闭': 'Close',
  '点击': 'Click',
  '清空': 'Clear',
  
  // Items page - Tabs
  '背包': 'Backpack',
  '仓库': 'Storage',
  'Loot历史': 'Loot History',
  
  // Items page - Filters
  '主类型': 'Main Type',
  '子类型': 'Sub Type',
  '全部': 'All',
  '技能': 'Skills',
  '渴饮症': 'Thirst',
  '其他': 'Other',
  '通货': 'Currency',
  '请选择主类型': 'Select main type',
  '价格过滤': 'Price Filter',
  '未设置': 'Not set',
  '搜索物品': 'Search items',
  
  // Items page - Labels
  '总价值': 'Total Value',
  '单价': 'Unit Price',
  '件Items': 'Items',
  '件': ' pcs',
  '条': ' entries',
  
  // Pagination
  '上一页': 'Previous',
  '下一页': 'Next',
  '分页': 'Pagination',
  
  // Price Database page
  '装备': 'Equipment',
  '列表': 'List',
  '查看波动图': 'View price chart',
  '价格高': 'Price High',
  '价格低': 'Price Low',
  '高': 'High',
  '低': 'Low',
  '更新时间': 'Updated',
  '新': 'New',
  '旧': 'Old',
  
  // Item categories
  '传奇装备': 'Legendary Equipment',
  '通用道具': 'General Items',
  '装备蓝图': 'Equipment Blueprint',
  '蓝图': 'Blueprint',
  '辅助': 'Support',
  '触媒': 'Catalyst',
  '精密': 'Precision',
  '极武': 'Ultimate',
  
  // History page
  '角色': 'Character',
  '选择角色': 'Select Character',
  '轮次模式': 'Round Mode',
  '仅最新版本': 'Latest only',
  '轮次': 'Round',
  '已选': 'Selected',
  '天': ' days',
  '轮': ' rounds',
  '日期选择': 'Date Selection',
  '今日': 'Today',
  '近': 'Recent',
  '暂无历史日期': 'No history dates',
  '暂无': 'None',
  '总': 'Total',
  '平均': 'Average',
  '分钟': 'min',
  '火': '🔥',
  
  // Misc
  '注：传奇均为未鉴定价格': 'Note: Legendary items priced as unidentified',
  '赛季': 'Season',
};

// Item names - separate for easy maintenance
const itemNames = {
  // Beacons (信标)
  '冰封寒渊的信标（时刻 8）': 'Beacon of Frozen Abyss (Moment 8)',
  '幽夜暗域的信标（时刻 8）': 'Beacon of Dark Night (Moment 8)',
  '钢铁炼境的信标（时刻 8）': 'Beacon of Steel Forge (Moment 8)',
  '沸涌炎海的信标（时刻 8）': 'Beacon of Boiling Flame Sea (Moment 8)',
  '雷鸣废土的信标（时刻 8）': 'Beacon of Thunder Wasteland (Moment 8)',
  
  // Skills/Abilities
  '异界回响': 'Otherworld Echo',
  '第二重神格': 'Second Divinity',
  '百倍横财': 'Hundredfold Fortune',
  '明日的航向': 'Tomorrow\'s Heading',
  '万神的回声': 'Echo of the Pantheon',
  '乌鸦的悲鸣': 'Raven\'s Lament',
  '森罗行迹': 'Forest Path',
  '孪生倒影': 'Twin Reflection',
  '双生天命': 'Twin Destiny',
  '池中鸟': 'Bird in the Pool',
  '笼中鱼': 'Fish in a Cage',
  '异度棱镜': 'Dimensional Prism',
  '动若脱兔': 'Swift as a Hare',
  '刑求之触': 'Touch of Torture',
  '魔灵之友': 'Friend of Spirits',
  '窥伺着倒影的双瞳': 'Eyes Gazing at Reflections',
  '激活迸发': 'Activation Burst',
  '无声剖白': 'Silent Confession',
  '束缚圣女': 'Bound Saint',
  '命运的背叛': 'Betrayal of Fate',
  '饮冰者的樊笼': 'Ice Drinker\'s Cage',
  '节流': 'Throttle',
  '亵渎星群': 'Profane Constellation',
  '记忆荧光': 'Memory Glow',
  '命运': 'Destiny',
  '真理': 'Truth',
  '永恒': 'Eternal',
  
  // Equipment
  '独行者之靴': 'Lone Walker\'s Boots',
  '荣升之': 'Ascended ',
  
  // Currency/Materials
  '初火源质': 'Primordial Ember',
  '真理化石': 'Fossil of Truth',
  '追忆碎絮': 'Memory Fragments',
  '遗忘之水': 'Water of Oblivion',
  
  // Tools/Equipment
  '纯银手术刀': 'Silver Scalpel',
  '粗铁手术刀': 'Iron Scalpel',
  '黄道星盘': 'Zodiac Astrolabe',
  '浩瀚之黄道星盘': 'Grand Zodiac Astrolabe',
  '机械罗盘': 'Mechanical Compass',
};

// Script comments (can be ignored, but adding for completeness)
const ignoreList = [
  '禁用浏览器缩放功能',
  '滚轮',
  '和',
  '中键点击',
  '禁用',
  '滚轮缩放',
  '禁用中键点击',
  '禁用中键点击的辅助方法',
  '防止某些浏览器的事冒泡',
  '禁用键盘缩放快捷键',
  '触摸板缩放手势禁用',
];

// Merge translations for processing
function getAllTranslations() {
  return { ...translations, ...itemNames };
}

function translateText(text) {
  let result = text;
  const allTranslations = getAllTranslations();
  // Sort by length descending to match longer phrases first
  const sortedEntries = Object.entries(allTranslations).sort((a, b) => b[0].length - a[0].length);
  for (const [chinese, english] of sortedEntries) {
    result = result.replace(new RegExp(chinese, 'g'), english);
  }
  return result;
}

function translateElement(element) {
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  
  textNodes.forEach(node => {
    const original = node.textContent;
    const translated = translateText(original);
    if (original !== translated) {
      node.textContent = translated;
    }
  });
  
  element.querySelectorAll('[title]').forEach(el => {
    const original = el.title;
    const translated = translateText(original);
    if (original !== translated) {
      el.title = translated;
    }
  });
  
  element.querySelectorAll('[placeholder]').forEach(el => {
    const original = el.placeholder;
    const translated = translateText(original);
    if (original !== translated) {
      el.placeholder = translated;
    }
  });
}

// Initial translation
translateElement(document.body);

// MutationObserver for dynamic content
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        translateElement(node);
      } else if (node.nodeType === Node.TEXT_NODE) {
        const translated = translateText(node.textContent);
        if (node.textContent !== translated) {
          node.textContent = translated;
        }
      }
    });
    
    if (mutation.type === 'characterData') {
      const translated = translateText(mutation.target.textContent);
      if (mutation.target.textContent !== translated) {
        mutation.target.textContent = translated;
      }
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});

function findUntranslated() {
  const chineseRegex = /[\u4e00-\u9fff]+/g;
  const found = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  while (walker.nextNode()) {
    const matches = walker.currentNode.textContent.match(chineseRegex);
    if (matches) matches.forEach(m => {
      if (!ignoreList.includes(m)) {
        found.add(m);
      }
    });
  }
  console.log('Untranslated Chinese:', [...found]);
  return [...found];
}

console.log('💡 Run findUntranslated() to find missing translations');