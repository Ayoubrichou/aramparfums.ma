// ==========================================
// 0. إعدادات عامة
// ==========================================
const PACK_PRICE = 50;               // ثمن العطر الواحد داخل الـ Pack
const WHATSAPP_NUMBER = "212634867129";

// ==========================================
// 1. عطور نسائية (20 عطر بـ 50 DH)
// ==========================================
const womenProducts = [
    { id: 'w21', title: 'PACK ARAM', price: 200, img: 'https://www.image2url.com/r2/default/images/1790278140970-5f35ac14-69e6-4ff0-9546-4ad09de3dd75.jpeg' },
    { id: 'w1', title: 'STYLE DELINA', price: 50, img: 'https://www.image2url.com/r2/default/images/1786271023368-69a541e8-a400-4dd6-857f-6783f3a1f313.jpeg' },
    { id: 'w2', title: "STYLE J'ADORE", price: 50, img: 'https://www.image2url.com/r2/default/images/1786271619679-de5d2245-583d-4a3c-a2af-d2e9b7f399e4.jpeg' },
    { id: 'w3', title: 'STYLE MY WAY', price: 50, img: 'https://www.image2url.com/r2/default/images/1786272027217-746b8df6-835e-4514-97a5-ae7cb0663b82.jpeg' },
    { id: 'w4', title: "STYLE L'INTERDIT GIVENCHY", price: 50, img: 'https://www.image2url.com/r2/default/images/1786272076342-ebbdb50f-8087-487b-b1f3-9a9a47f68703.jpeg' },
    { id: 'w5', title: 'STYLE COCO CHANEL', price: 50, img: 'https://www.image2url.com/r2/default/images/1790274604857-c768f1f1-9780-4ef5-be67-7eb3446dc823.jpeg' },
    { id: 'w6', title: 'STYLE KAYALI 28', price: 50, img: 'https://www.image2url.com/r2/default/images/1786272155334-eee741bb-0815-4a63-be6f-fb81d67e959e.jpeg' },
    { id: 'w7', title: 'STYLE MISS DIOR', price: 50, img: 'https://www.image2url.com/r2/default/images/1786272199199-167f1de7-59e5-4ed0-addb-bfa05106aa86.jpeg' },
    { id: 'w8', title: 'STYLE BURBERRY HER', price: 50, img: 'https://www.image2url.com/r2/default/images/1790276114693-c57b2cdf-40db-49b7-965d-1c491794bd16.jpeg' },
    { id: 'w9', title: 'STYLE ARAM', price: 50, img: 'https://www.image2url.com/r2/default/images/1786272270320-02381a8c-1193-4ee2-8cd6-3478a3cb19b5.jpeg' },
    { id: 'w10', title: 'STYLE SCANDAL', price: 50, img: 'https://www.image2url.com/r2/default/images/1790274107640-b3fa91d3-e23a-4e07-a959-ab643078481c.jpeg' },
    { id: 'w11', title: 'STYLE LIBRE INTENSE', price: 50, img: 'https://www.image2url.com/r2/default/images/1786272882646-5e6424fc-f34d-4f20-a9a6-29330729a7b2.jpeg' },
    { id: 'w12', title: 'STYLE VALENTINO DONNA', price: 50, img: 'https://www.image2url.com/r2/default/images/1786272945017-b5774680-137d-485e-942f-899f42689104.jpeg' },
    { id: 'w13', title: 'STYLE SI ARMANI', price: 50, img: 'https://www.image2url.com/r2/default/images/1786272975026-eb4d4c44-e999-4f02-a09d-930f97d0fde4.jpeg' },
    { id: 'w14', title: 'STYLE ESCADA TAJ', price: 50, img: 'https://www.image2url.com/r2/default/images/1786273012780-12fd7352-43ff-446e-bd2e-740fe0893be3.jpeg' },
    { id: 'w15', title: 'STYLE BACCARAT ROUGE', price: 50, img: 'https://www.image2url.com/r2/default/images/1786273044829-df915b0b-7736-463d-b1b4-17e4e26a1ca7.jpeg' },
    { id: 'w16', title: "STYLE L'INTERDIT ROUGE", price: 50, img: 'https://www.image2url.com/r2/default/images/1790175677916-60ad0506-c89f-4f27-ac46-a4002eaf4510.jpeg' },
    { id: 'w17', title: 'STYLE LGHTE BLEU', price: 50, img: 'https://www.image2url.com/r2/default/images/1790277362563-4760b984-aec3-41a4-887f-d9e9d8dffac9.jfif' },
    { id: 'w18', title: 'STYLE THE ONE FEMME', price: 50, img: 'https://www.image2url.com/r2/default/images/1786273185775-c6c6096a-e117-4da6-a0ce-cacbf61dd022.jpeg' },
    { id: 'w19', title: 'STYLE FLORA GUCCI', price: 50, img: 'https://www.image2url.com/r2/default/images/1790175442783-be605e53-0a54-4a4b-8f02-444eddcd6d88.jpeg' },
    { id: 'w20', title: 'STYLE PRADA PARADOXE', price: 50, img: 'https://www.image2url.com/r2/default/images/1790274744448-5f92ec23-bc24-433b-a311-2b0e8fc39a27.jpeg' },
    // FIX: كان id = 'm17' (مكرر مع الرجالي) => تبدّل ل 'w21'
];

// ==========================================
// 2. عطور رجالية (+ Pack ARAM)
// ==========================================
const menProducts = [
    { id: 'm17', title: 'PACK ARAM', price: 200, img: 'https://cdn.phototourl.com/member/2026-08-09-337b1b58-d47f-40c4-ba44-536a281cc26e.jpg' },
    { id: 'm2', title: 'STYLE ONE MILLION', price: 50, img: 'https://cdn.phototourl.com/free/2026-08-09-ff19f58b-4c57-4734-83b5-d69a61934d1d.jpg' },
    { id: 'm3', title: 'STYLE TOM FORD', price: 50, img: 'https://cdn.phototourl.com/free/2026-08-09-c4186fff-b08e-490b-a976-511426f7fb6b.jpg' },
    { id: 'm4', title: 'STYLE THE ONE', price: 50, img: 'https://cdn.phototourl.com/free/2026-08-09-006c237d-bb26-4784-899d-e97880bfc0b4.jpg' },
    { id: 'm5', title: 'STYLE LA NUIT HOMME', price: 50, img: 'https://cdn.phototourl.com/free/2026-08-09-03383a83-a71f-4e3e-8cd8-d354dbb3068d.jpg' },
    { id: 'm6', title: 'STYLE CREED AVENTS', price: 50, img: 'https://www.image2url.com/r2/default/images/1790275442762-810d12db-2f44-4db9-b18d-ef9bedf27ea6.jpeg' },
    { id: 'm7', title: 'STYLE STRONGER WTHE YOU INTENSELY', price: 50, img: 'https://cdn.phototourl.com/free/2026-08-09-4927265b-98d3-46ed-8db0-ef54399f9087.jpg' },
    { id: 'm8', title: 'STYLE STRONGER WTHE YOU TABACCO', price: 50, img: 'https://cdn.phototourl.com/free/2026-08-09-6a87836d-5060-46b6-80fa-e47d5e6c3984.jpg' },
    { id: 'm9', title: 'STYLE STRONGER WTHE YOU ABSOLUTELY', price: 50, img: 'https://cdn.phototourl.com/free/2026-08-09-bfbf98f9-9a9f-41df-9ad0-e5c8e02b4503.jpg' },
    { id: 'm10', title: 'STYLE LE MALE', price: 50, img: 'https://www.image2url.com/r2/default/images/1790275301370-6da4236c-24ed-4429-9869-eb2d6400d377.jpeg' },
    { id: 'm11', title: 'STYLE THE MOSTE WANTED AZZARO', price: 50, img: 'https://cdn.phototourl.com/member/2026-08-09-6eeeeb89-cb4e-4ee2-9935-44f87902dcaa.jpg' },
    { id: 'm12', title: 'STYLE ULTRA MALE', price: 50, img: 'https://cdn.phototourl.com/member/2026-08-09-9f994700-f177-4be7-a06e-659c276115c7.jpg' },
    { id: 'm13', title: 'STYLE IMAGINATION 2', price: 50, img: 'https://cdn.phototourl.com/member/2026-08-09-743bd746-d0be-4069-8a79-ea9b548f8dc3.jpg' },
    { id: 'm14', title: 'STYLE ACQU DI GIO', price: 50, img: 'https://cdn.phototourl.com/member/2026-08-09-70765ae3-c138-478a-9594-87946737aa5e.jpg' },
    { id: 'm15', title: 'STYLE YVES SANT', price: 50, img: 'https://cdn.phototourl.com/member/2026-08-09-ccf7d6ce-8f97-4f59-833a-c1d68b8d964e.jpg' },
    { id: 'm16', title: 'STYLE BLUE CHANEL', price: 50, img: 'https://www.image2url.com/r2/default/images/1790275044500-b8aaef14-36a9-4224-9b33-f5157b08efcb.jpeg' },
];

// عطور تدخل في الـ Pack (فقط اللي ثمنها 50)
function getPackPerfumes() {
    return [...womenProducts, ...menProducts].filter(p => p.price === PACK_PRICE);
}

// العناصر الأساسية
const womenGrid = document.getElementById('womenGrid');
const menGrid = document.getElementById('menGrid');

// ==========================================
// 3. تنبيهات أنيقة (Toast)
// ==========================================
function showToast(message, icon = 'fa-circle-check') {
    const container = document.getElementById('toastContainer');
    if (!container) { alert(message); return; }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 2600);
}

// ==========================================
// 4. دوال العرض والحسابات
// ==========================================

// بطاقة المنتج. زر الإضافة للـ Pack يظهر فقط للعطور بثمن 50 DH
function createProductCard(product, genderLabel) {
    const canAddToPack = product.price === PACK_PRICE;
    const addBtnHTML = canAddToPack
        ? `<button class="add-to-cart-btn" data-id="${product.id}" title="أضف إلى الـ Pack">
               <i class="fa-solid fa-plus"></i>
           </button>`
        : '';

    return `
        <div class="product-card">
            <div class="product-img-box">
                <img src="${product.img}" alt="${product.title}" loading="lazy"
                     onload="this.classList.add('loaded'); this.closest('.product-img-box').classList.add('img-loaded')"
                     onerror="this.closest('.product-img-box').classList.add('img-loaded')">
                <span class="badge-gender">${genderLabel}</span>
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-notes">${product.notes || ''}</p>
                <div class="product-price-row">
                    <span class="price">${product.price} DH</span>
                    <div class="product-actions">
                        ${addBtnHTML}
                        <button class="btn-order-single" data-id="${product.id}" title="طلب هذا العطر مباشرة">
                            اطلب الآن
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// البحث عن منتج عبر id
function findProductById(id) {
    return [...womenProducts, ...menProducts].find(p => p.id === id);
}

// عرض جميع المنتجات
function renderAllProducts() {
    if (womenGrid) womenGrid.innerHTML = womenProducts.map(p => createProductCard(p, 'Femme')).join('');
    if (menGrid) menGrid.innerHTML = menProducts.map(p => createProductCard(p, 'Homme')).join('');
    observeProductCards();
}

// تفويض الأحداث
function handleGridClick(e) {
    const addBtn = e.target.closest('.add-to-cart-btn');
    const orderBtn = e.target.closest('.btn-order-single');

    if (addBtn) {
        const product = findProductById(addBtn.dataset.id);
        if (!product) return;

        const added = selectForPack(product.title);
        if (added) {
            showToast(`تمت إضافة "${product.title}" إلى الـ Pack`, 'fa-circle-check');
            const icon = addBtn.querySelector('i');
            addBtn.classList.add('added');
            if (icon) icon.className = 'fa-solid fa-check';
            setTimeout(() => {
                addBtn.classList.remove('added');
                if (icon) icon.className = 'fa-solid fa-plus';
            }, 900);
        } else {
            showToast('الـ Pack ممتلئ (3 عطور)، فرّغ مكان أولا', 'fa-circle-exclamation');
        }
        return;
    }
    if (orderBtn) {
        const product = findProductById(orderBtn.dataset.id);
        if (product) orderSinglePerfume(product.title, product.price);
    }
}
womenGrid?.addEventListener('click', handleGridClick);
menGrid?.addEventListener('click', handleGridClick);

// ==========================================
// 5. ظهور تدريجي للبطاقات (Intersection Observer)
// ==========================================
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

function observeProductCards() {
    document.querySelectorAll('.product-card').forEach(card => cardObserver.observe(card));
}

// ==========================================
// 6. قائمة الجوال
// ==========================================
const navToggleBtn = document.getElementById('navToggleBtn');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.getElementById('navOverlay');

function closeMobileMenu() {
    navLinks?.classList.remove('active');
    navOverlay?.classList.remove('active');
}
navToggleBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    navOverlay?.classList.toggle('active');
});
navOverlay?.addEventListener('click', closeMobileMenu);
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));

// ==========================================
// 7. زر العودة للأعلى + هيدر
// ==========================================
const scrollTopBtn = document.getElementById('scrollTopBtn');
const siteHeader = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) scrollTopBtn?.classList.add('show');
    else scrollTopBtn?.classList.remove('show');

    if (window.scrollY > 40) siteHeader?.classList.add('scrolled');
    else siteHeader?.classList.remove('scrolled');
});
scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ظهور تدريجي لعناوين الأقسام وبطاقة "عن ARAM"
const fadeSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            fadeSectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.section-header, .about-card').forEach(el => fadeSectionObserver.observe(el));

// ==========================================
// 8. حساب سعر الـ Pack
// ==========================================
function getSelectedPackTitles() {
    return ['packPerfume1', 'packPerfume2', 'packPerfume3']
        .map(id => document.getElementById(id)?.value)
        .filter(Boolean);
}

function calculateDynamicPrice() {
    const total = getSelectedPackTitles().length * PACK_PRICE;
    const priceSpan = document.getElementById('packTotalPrice');
    if (priceSpan) priceSpan.textContent = `${total} DH`; // FIX: كان HG
}

// ملء القوائم المنسدلة (بدون PACK ARAM)
function setupPackSelects() {
    const allPerfumes = getPackPerfumes();
    const labels = ['الأول', 'الثاني', 'الثالث'];
    const selectIds = ['packPerfume1', 'packPerfume2', 'packPerfume3'];

    selectIds.forEach((id, index) => {
        const selectEl = document.getElementById(id);
        if (!selectEl) return;

        selectEl.innerHTML = `<option value="">-- اختر العطر ${labels[index]} --</option>`;

        allPerfumes.forEach(perfume => {
            const option = document.createElement('option');
            option.value = perfume.title;
            option.textContent = `${perfume.title} (${PACK_PRICE} DH)`;
            selectEl.appendChild(option);
        });

        selectEl.addEventListener('change', function () {
            updateSelectedPerfumePreview(id, this.value);
            calculateDynamicPrice();
        });
    });
}

// الاختيار من الكتالوج والانتقال للاستمارة
// يرجع true إذا تمت الإضافة، false إذا كان الـ Pack ممتلئ
// FIX: الدالة كانت مكسورة (سطر for زايد + "titl" ناقصة)
function selectForPack(title) {
    const ids = ['packPerfume1', 'packPerfume2', 'packPerfume3'];
    let added = false;

    for (const id of ids) {
        const sel = document.getElementById(id);
        if (sel && !sel.value) {
            sel.value = title;
            updateSelectedPerfumePreview(id, title);
            added = true;
            break;
        }
    }

    if (!added) return false;

    calculateDynamicPrice();
    document.getElementById('custom-pack')?.scrollIntoView({ behavior: 'smooth' });
    return true;
}

// تحديث معاينة الصورة المصغرة بجانب المنسدلة
function updateSelectedPerfumePreview(selectId, perfumeTitle) {
    const found = [...womenProducts, ...menProducts].find(p => p.title === perfumeTitle);
    const selectEl = document.getElementById(selectId);
    if (!selectEl) return;

    const wrapper = selectEl.closest('.select-box-wrapper');
    if (!wrapper) return;

    let imgTag = wrapper.querySelector('.mini-preview-img');
    if (!imgTag) {
        imgTag = document.createElement('img');
        imgTag.className = 'mini-preview-img';
        wrapper.appendChild(imgTag);
    }

    if (found) {
        imgTag.src = found.img;
        imgTag.style.display = 'block';
    } else {
        imgTag.style.display = 'none';
    }
}

// ==========================================
// 9. إرسال طلب الـ Pack عبر واتساب
// ==========================================
document.getElementById('directOrderForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const selected = getSelectedPackTitles();

    if (selected.length === 0) {
        showToast('المرجو اختيار عطر واحد على الأقل!', 'fa-circle-exclamation');
        return;
    }

    const selectedList = selected.map((t, i) => `- Parfum ${i + 1}: ${t}`).join('\n');

    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const city = document.getElementById('custCity').value;
    const address = document.getElementById('custAddress').value;

    const message = `*طلب جديد - ARAM PARFUM*\n\n` +
        `*العطور المختارة:*\n${selectedList}\n\n` +
        `*معلومات المشتري:*\n` +
        `- الاسم: ${name}\n` +
        `- الهاتف: ${phone}\n` +
        `- المدينة: ${city}\n` +
        `- العنوان: ${address}\n\n` +
        `*المجموع الكلي:* ${selected.length * PACK_PRICE} DH (توصيل مجاني)`;

    const submitBtn = document.getElementById('directSubmitBtn');
    const submitText = document.getElementById('directSubmitText');
    const originalHTML = submitText ? submitText.innerHTML : null;
    if (submitBtn) submitBtn.disabled = true;
    if (submitText) submitText.innerHTML = 'جاري التحويل إلى واتساب <span class="fa-spin-loader"></span>';

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    showToast('تم إعداد طلبك، أكمله عبر واتساب', 'fa-circle-check');

    setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
        if (submitText && originalHTML) submitText.innerHTML = originalHTML;
    }, 1500);
});

// ==========================================
// 10. طلب عطر واحد مباشرة عبر واتساب
// ==========================================
function orderSinglePerfume(title, price) {
    const message = `*طلب عطر فردي - ARAM PARFUM*\n\n` +
        `*العطر المطلوب:* ${title}\n` +
        `*الثمن:* ${price} DH\n\n` +
        `مرحباً، أود إتمام طلب هذا العطر.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    showToast(`جاري تحويلك لطلب "${title}" عبر واتساب`, 'fa-circle-check');
}

// ==========================================
// 11. تشغيل الموقع عند التحميل
// ==========================================
renderAllProducts();
setupPackSelects();
calculateDynamicPrice();