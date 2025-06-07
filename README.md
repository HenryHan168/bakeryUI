# 漫漫咬一口 烘焙工作室官網

## 📝 專案簡介
這是為「漫漫咬一口」烘焙工作室設計的官方網站，提供商品展示、線上瀏覽和聯絡資訊。

## ✨ 主要功能

### 🎯 商品分類篩選 (已修正優化)
- **全部商品** - 顯示所有產品
- **蛋糕系列** - 檸檬老奶奶蛋糕、巴斯客蛋糕、古早味蛋糕等
- **餅乾系列** - 杏仁片餅、京都楓糖燒、蔓越莓核桃燕麥餅
- **其他商品** - 鮮奶生乳卷、鮮奶酪、法芙娜可可蛋糕卷

#### 技術改進 (v2.0)
- 重寫分類篩選邏輯，提升穩定性
- 增加詳細調試功能，便於問題排查
- 優化CSS動畫效果和隱藏機制
- 改善事件處理和DOM操作

### 🖥️ 響應式設計
- **桌面版** (1200px+) - 完整功能展示
- **平板版** (768px-1199px) - 優化佈局
- **手機版** (<768px) - 簡潔易用介面

### 🎨 用戶體驗
- 平滑滾動導航
- 圖片懶加載
- 載入動畫效果
- 漢堡選單 (手機版)
- 回到頂部按鈕

## 🛠️ 技術架構

### 前端技術
- **HTML5** - 語義化結構
- **CSS3** - Flexbox + Grid 佈局、CSS 變數
- **JavaScript (ES6+)** - 原生 JS，無依賴框架
- **響應式設計** - Mobile-first 方法

### 圖片資源
- **Logo** - `icon.png` (用戶提供)
- **產品圖片** - 高品質免費圖庫 (Unsplash)
- **用戶原始圖片** - `kyoto-maple.jpg`

### 外部資源
- **字體** - Google Fonts (Noto Sans TC)
- **圖標** - Font Awesome 6.0
- **圖片** - Unsplash (免費商用授權)

## 📁 檔案結構

```
bakeryUI/
├── index.html              # 主網頁
├── styles.css              # 主樣式表
├── script.js               # 互動功能腳本
├── icon.png               # 網站 Logo
├── README.md              # 專案說明
├── image-mapping.md       # 圖片對應清單
├── debug-categories.html  # 分類功能調試頁面
├── test-categories.html   # 簡單測試頁面
└── 產品圖片files:
    ├── lemon-grandma-cake.jpg
    ├── basque-cake.jpg
    ├── classic-sponge-cake.jpg
    ├── classic-cocoa-cake.jpg
    ├── almond-cookies.jpg
    ├── kyoto-maple.jpg
    ├── cranberry-oat-cookies.jpg
    ├── milk-roll.jpg
    ├── panna-cotta.jpg
    └── cocoa-roll.jpg
```

## 🚀 使用方法

### 本地開發
```bash
# 進入專案目錄
cd bakeryUI

# 啟動本地伺服器
python3 -m http.server 8000

# 瀏覽器訪問
http://localhost:8000
```

### 調試功能
```bash
# 測試分類功能
http://localhost:8000/debug-categories.html

# 簡單測試頁面
http://localhost:8000/test-categories.html
```

## 📋 商品清單

### 🍰 蛋糕系列
1. **檸檬老奶奶蛋糕** - 6吋 NT$600 / 8吋 NT$800 / 片裝 NT$140
2. **巴斯客蛋糕** - 6吋 NT$520
3. **古早味原味蛋糕** - 6吋 NT$180
4. **古早味可可蛋糕** - 6吋 NT$200

### 🍪 餅乾系列
1. **杏仁片餅** - NT$15/片
2. **京都楓糖燒** - NT$35 (紅豆/芋頭)
3. **蔓越莓核桃燕麥餅** - NT$20/片

### 🥛 其他商品
1. **鮮奶生乳卷** - NT$300
2. **鮮奶酪** - NT$65/杯
3. **法芙娜可可蛋糕卷** - NT$300

## 🔧 問題排解

### 分類功能不工作
1. 檢查瀏覽器控制台是否有錯誤
2. 確認 JavaScript 是否已載入
3. 訪問調試頁面: `debug-categories.html`
4. 查看控制台調試信息

### 圖片載入失敗
1. 確認圖片檔案存在於根目錄
2. 檢查檔案名稱大小寫
3. 查看伺服器 404 錯誤日誌

## 📱 瀏覽器支援
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📈 效能優化
- 圖片懶加載
- CSS 優化
- JavaScript 異步載入
- 最小化 HTTP 請求

## 🎯 SEO 優化
- 語義化 HTML
- Meta 標籤設定
- 結構化資料
- 響應式設計

## 📄 更新日誌

### v2.0 (2025-01-06)
- ✅ 修正商品分類篩選功能
- ✅ 重寫 JavaScript 分類邏輯
- ✅ 優化 CSS 隱藏效果
- ✅ 增加調試功能
- ✅ 改善事件處理

### v1.0 (2025-01-06)
- ✅ 完成基礎網站建置
- ✅ 實現響應式設計
- ✅ 完成產品圖片對應
- ✅ 建立完整商品資訊

## 📞 聯絡資訊
- **工作室**: 漫漫咬一口烘焙工作室
- **營業時間**: 週一至週日 9:00 - 20:00
- **訂購方式**: 電話/LINE 私訊

---

*此網站使用現代網頁技術建置，確保在各種設備上都能提供最佳的瀏覽體驗。* 