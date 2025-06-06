// DOM 載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    
    // 導航選單功能
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 漢堡選單點擊事件
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 導航連結點擊事件（關閉手機選單）
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 商品分類篩選功能 - 重寫版本
    function initializeProductFilter() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const productItems = document.querySelectorAll('.product-item');

        console.log('=== 商品分類功能初始化 ===');
        console.log('找到分類按鈕數量:', categoryBtns.length);
        console.log('找到商品數量:', productItems.length);
        
        // 如果沒有找到元素，退出函數
        if (categoryBtns.length === 0 || productItems.length === 0) {
            console.log('警告：未找到分類按鈕或商品項目');
            return;
        }
        
        // 檢查每個分類按鈕的屬性
        categoryBtns.forEach((btn, index) => {
            const category = btn.getAttribute('data-category');
            const text = btn.textContent.trim();
            console.log(`按鈕 ${index + 1}: category="${category}", text="${text}"`);
        });
        
        // 檢查每個商品項目的屬性
        productItems.forEach((item, index) => {
            const category = item.getAttribute('data-category');
            const productName = item.querySelector('h3') ? item.querySelector('h3').textContent.trim() : '未找到商品名稱';
            console.log(`商品 ${index + 1}: category="${category}", name="${productName}"`);
        });

        // 初始化：顯示所有商品
        productItems.forEach((item, index) => {
            item.classList.remove('hide');
            item.style.display = 'block';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.style.pointerEvents = 'auto';
            console.log(`初始化商品 ${index + 1}: 顯示`);
        });

        // 為每個分類按鈕添加點擊事件
        categoryBtns.forEach((btn, index) => {
            console.log(`設置按鈕 ${index + 1} 事件監聽器:`, btn.textContent.trim());
            
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const category = this.getAttribute('data-category');
                
                console.log('=== 分類按鈕點擊事件 ===');
                console.log('點擊分類:', category);
                console.log('按鈕文字:', this.textContent.trim());
                console.log('按鈕元素:', this);
                
                // 更新按鈕樣式
                categoryBtns.forEach((b, i) => {
                    b.classList.remove('active');
                    console.log(`移除按鈕 ${i + 1} 的 active 類`);
                });
                this.classList.add('active');
                console.log('添加當前按鈕的 active 類');
                
                // 篩選商品
                let visibleCount = 0;
                let hiddenCount = 0;
                
                productItems.forEach((item, i) => {
                    const itemCategory = item.getAttribute('data-category');
                    const shouldShow = category === 'all' || itemCategory === category;
                    
                    console.log(`商品 ${i + 1}: category="${itemCategory}", shouldShow=${shouldShow}`);
                    
                    if (shouldShow) {
                        // 顯示商品
                        console.log(`顯示商品 ${i + 1}`);
                        item.classList.remove('hide');
                        item.style.display = 'block';
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                        item.style.pointerEvents = 'auto';
                        
                        visibleCount++;
                    } else {
                        // 隱藏商品
                        console.log(`隱藏商品 ${i + 1}`);
                        item.classList.add('hide');
                        item.style.display = 'none';
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.9)';
                        item.style.pointerEvents = 'none';
                        
                        hiddenCount++;
                    }
                });
                
                console.log(`=== 篩選結果 ===`);
                console.log('顯示商品數量:', visibleCount);
                console.log('隱藏商品數量:', hiddenCount);
                console.log('=== 分類按鈕點擊事件結束 ===');
            });
        });
        
        console.log('商品分類功能初始化完成');
    }
    
    // 延遲初始化以確保所有元素都已載入
    setTimeout(initializeProductFilter, 100);

    // 平滑滾動到指定區域
    function smoothScrollTo(target) {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 70; // 扣除導航列高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // 導航連結平滑滾動
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });

    // CTA 按鈕平滑滾動
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo('#products');
        });
    }

    // 滾動時導航列樣式變化
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 254, 247, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(139, 69, 19, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 254, 247, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(139, 69, 19, 0.1)';
        }
    });

    // 滾動動畫觀察器
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 觀察需要動畫的元素
    const animateElements = document.querySelectorAll('.featured-item, .product-item, .contact-item, .about-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 圖片懶加載
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    // 觀察所有圖片
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        imageObserver.observe(img);
    });

    // 錯誤處理：圖片載入失敗時的替代圖片
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjRFNEMxIi8+CjxwYXRoIGQ9Ik0xNTAgMTAwQzE2MS4wNDYgMTAwIDE3MCA5MS4wNDU3IDE3MCA4MEMxNzAgNjguOTU0MyAxNjEuMDQ2IDYwIDE1MCA2MEM4OC45NTQzIDYwIDgwIDY4Ljk1NDMgODAgODBDODAgOTEuMDQ1NyA4OC45NTQzIDEwMCAxNTAgMTAwWiIgZmlsbD0iI0Q0QTU3NCIvPgo8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOEI0NTEzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lnJbniYflvIXlhaU8L3RleHQ+Cjwvc3ZnPgo=';
            this.alt = '圖片載入失敗';
        });
    });

    // 表單驗證（如果有聯絡表單）
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 簡單的表單驗證
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (isValid) {
                // 模擬表單提交
                alert('感謝您的訊息！我們會盡快回覆您。');
                this.reset();
            } else {
                alert('請填寫所有必填欄位');
            }
        });
    }

    // 回到頂部按鈕
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        z-index: 1000;
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(212, 165, 116, 0.3);
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // 顯示/隱藏回到頂部按鈕
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.transform = 'translateY(100px)';
        }
    });
    
    // 回到頂部功能
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 鼠標懸停效果增強
    const cards = document.querySelectorAll('.featured-item, .product-item, .contact-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 載入進度動畫
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // 漸進式顯示內容
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

    // 鍵盤導航支援
    document.addEventListener('keydown', function(e) {
        // ESC 鍵關閉手機選單
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // 觸控手勢支援（基本版本）
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchStartY - touchEndY;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // 向上滑動
                console.log('向上滑動');
            } else {
                // 向下滑動
                console.log('向下滑動');
            }
        }
    }

    console.log('漫漫咬一口網站已載入完成！');
}); 