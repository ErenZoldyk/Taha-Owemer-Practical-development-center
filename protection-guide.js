// Personal Protection Guide - Comprehensive Personal Security and Device Protection

const protectionGuide = {
    deviceSecurity: {
        title: "تأمين الأجهزة",
        categories: [
            {
                device: "الحاسوب الشخصي",
                icon: "fas fa-laptop",
                protections: [
                    {
                        title: "نظام التشغيل",
                        steps: [
                            "تفعيل التحديثات التلقائية لنظام التشغيل",
                            "استخدام حسابات مستخدم محدودة الصلاحيات", 
                            "تشفير القرص الصلب (BitLocker في ويندوز، FileVault في ماك)",
                            "إعداد كلمة مرور قوية لتسجيل الدخول",
                            "تفعيل قفل الشاشة التلقائي"
                        ]
                    },
                    {
                        title: "برامج الحماية",
                        steps: [
                            "تثبيت برنامج مكافحة فيروسات موثوق",
                            "تفعيل جدار الحماية المدمج",
                            "استخدام برامج مكافحة البرمجيات الخبيثة",
                            "تحديث جميع البرامج بانتظام",
                            "تجنب البرامج المقرصنة"
                        ]
                    },
                    {
                        title: "النسخ الاحتياطية",
                        steps: [
                            "إعداد نسخ احتياطية تلقائية (كل يوم أو أسبوع)",
                            "استخدام خدمات التخزين السحابي المشفرة",
                            "الاحتفاظ بنسخة احتياطية محلية منفصلة",
                            "اختبار استعادة النسخ الاحتياطية دورياً",
                            "تشفير النسخ الاحتياطية الخارجية"
                        ]
                    }
                ]
            },
            {
                device: "الهاتف الذكي",
                icon: "fas fa-mobile-alt",
                protections: [
                    {
                        title: "الإعدادات الأساسية",
                        steps: [
                            "إعداد قفل شاشة قوي (PIN، كلمة مرور، أو بصمة)",
                            "تفعيل تشفير الهاتف",
                            "تحديث النظام والتطبيقات باستمرار",
                            "مراجعة أذونات التطبيقات بانتظام",
                            "تفعيل المحو عن بعد في حالة الضياع"
                        ]
                    },
                    {
                        title: "أمان التطبيقات",
                        steps: [
                            "تحميل التطبيقات من المتاجر الرسمية فقط",
                            "قراءة تقييمات وتعليقات التطبيقات قبل التحميل",
                            "تجنب منح أذونات غير ضرورية للتطبيقات",
                            "حذف التطبيقات غير المستخدمة",
                            "استخدام تطبيقات أمان موثوقة"
                        ]
                    }
                ]
            },
            {
                device: "الأجهزة المنزلية الذكية",
                icon: "fas fa-home",
                protections: [
                    {
                        title: "شبكة WiFi المنزلية",
                        steps: [
                            "تغيير كلمة المرور الافتراضية للراوتر",
                            "استخدام تشفير WPA3 أو WPA2",
                            "إخفاء اسم الشبكة (SSID)",
                            "تحديث فيرم وير الراوتر بانتظام",
                            "إنشاء شبكة ضيوف منفصلة"
                        ]
                    },
                    {
                        title: "الأجهزة الذكية (IoT)",
                        steps: [
                            "تغيير كلمات المرور الافتراضية لجميع الأجهزة",
                            "ربط الأجهزة بشبكة منفصلة عن الأجهزة الرئيسية",
                            "مراقبة حركة البيانات للأجهزة الذكية",
                            "إيقاف تشغيل المكروفونات والكاميرات عند عدم الحاجة",
                            "مراجعة إعدادات الخصوصية بانتظام"
                        ]
                    }
                ]
            }
        ]
    },
    emailSecurity: {
        title: "تأمين البريد الإلكتروني",
        sections: [
            {
                category: "الإعدادات الأساسية",
                practices: [
                    {
                        title: "كلمة مرور قوية",
                        description: "استخدم كلمة مرور فريدة وقوية لحساب البريد الإلكتروني",
                        tips: [
                            "12+ حرف مع مزيج من الأحرف والأرقام والرموز",
                            "عدم استخدام نفس كلمة المرور في حسابات أخرى",
                            "تغيير كلمة المرور كل 3-6 أشهر"
                        ]
                    },
                    {
                        title: "المصادقة الثنائية (2FA)",
                        description: "طبقة حماية إضافية تتطلب رمز ثاني للدخول",
                        tips: [
                            "استخدم تطبيقات المصادقة مثل Google Authenticator",
                            "تجنب الرسائل النصية كوسيلة 2FA إذا أمكن",
                            "احتفظ برموز الاسترداد في مكان آمن"
                        ]
                    }
                ]
            },
            {
                category: "التعامل مع الرسائل",
                practices: [
                    {
                        title: "التعرف على رسائل التصيد",
                        description: "كيفية اكتشاف الرسائل المشبوهة والتعامل معها",
                        signs: [
                            "أخطاء إملائية ونحوية واضحة",
                            "طلب معلومات شخصية أو مالية حساسة",
                            "روابط مشبوهة أو مختصرة",
                            "لغة تحفيزية أو تهديدية",
                            "مرسل غير معروف أو عنوان مشبوه"
                        ],
                        actions: [
                            "عدم النقر على أي روابط في الرسائل المشبوهة",
                            "التحقق من المرسل عبر قناة اتصال منفصلة",
                            "الإبلاغ عن الرسائل المشبوهة كـ spam",
                            "حذف الرسائل المشبوهة فوراً"
                        ]
                    }
                ]
            }
        ]
    },
    onlineBehavior: {
        title: "السلوك الآمن على الإنترنت",
        guidelines: [
            {
                category: "التصفح الآمن",
                icon: "fas fa-globe",
                rules: [
                    {
                        rule: "تحقق من صحة المواقع",
                        details: [
                            "تأكد من وجود رمز القفل (HTTPS) في شريط العناوين",
                            "تحقق من تطابق عنوان الموقع مع الموقع المقصود",
                            "تجنب النقر على الإعلانات المشبوهة",
                            "استخدم محركات البحث الموثوقة"
                        ]
                    },
                    {
                        rule: "حماية البيانات الشخصية",
                        details: [
                            "لا تشارك معلومات شخصية على مواقع غير موثوقة",
                            "اقرأ سياسات الخصوصية قبل التسجيل",
                            "استخدم أسماء مستخدم لا تكشف هويتك الحقيقية",
                            "تجنب النشر العام للمعلومات الحساسة"
                        ]
                    }
                ]
            },
            {
                category: "التسوق الإلكتروني الآمن",
                icon: "fas fa-shopping-cart",
                rules: [
                    {
                        rule: "اختيار المواقع الموثوقة",
                        details: [
                            "تسوق من مواقع معروفة وموثوقة",
                            "تحقق من تقييمات المتجر والبائع",
                            "تأكد من وجود تشفير SSL في صفحة الدفع",
                            "اقرأ سياسات الإرجاع والاستبدال"
                        ]
                    },
                    {
                        rule: "طرق الدفع الآمنة",
                        details: [
                            "استخدم بطاقات ائتمان بدلاً من بطاقات الخصم",
                            "تجنب استخدام WiFi العام للمعاملات المالية",
                            "استخدم خدمات الدفع الآمنة مثل PayPal",
                            "راقب كشوف الحساب بانتظام"
                        ]
                    }
                ]
            }
        ]
    },
    socialMedia: {
        title: "أمان وسائل التواصل الاجتماعي",
        platforms: [
            {
                platform: "Facebook",
                settings: [
                    "مراجعة إعدادات الخصوصية شهرياً",
                    "تحديد من يمكنه رؤية منشوراتك",
                    "إيقاف تتبع الموقع الجغرافي",
                    "مراجعة التطبيقات المربوطة بحسابك",
                    "تفعيل إشعارات تسجيل الدخول"
                ]
            },
            {
                platform: "Instagram", 
                settings: [
                    "جعل الحساب خاص",
                    "إيقاف ظهور نشاطك للآخرين",
                    "تحديد من يمكنه إرسال رسائل مباشرة",
                    "مراجعة قائمة المتابعين بانتظام",
                    "تجنب مشاركة الموقع في الصور"
                ]
            },
            {
                platform: "Twitter",
                settings: [
                    "حماية تغريداتك (جعل الحساب خاص)",
                    "تفعيل المصادقة الثنائية",
                    "مراجعة التطبيقات المصرح لها",
                    "إيقاف تتبع الموقع في التغريدات",
                    "تخصيص إعدادات البحث والاكتشاف"
                ]
            }
        ]
    },
    emergencyResponse: {
        title: "الاستجابة للطوارئ الأمنية",
        scenarios: [
            {
                scenario: "اختراق الحساب",
                icon: "fas fa-user-lock",
                steps: [
                    "تغيير كلمة المرور فوراً من جهاز آمن",
                    "تفحص جميع أجهزتك بحثاً عن برمجيات خبيثة",
                    "مراجعة نشاط الحساب والتسجيلات الأخيرة",
                    "إلغاء جميع جلسات تسجيل الدخول النشطة",
                    "تفعيل المصادقة الثنائية إذا لم تكن مفعلة",
                    "إبلاغ الأصدقاء عن الاختراق المحتمل"
                ]
            },
            {
                scenario: "الإصابة ببرمجية خبيثة",
                icon: "fas fa-virus",
                steps: [
                    "قطع الاتصال بالإنترنت فوراً",
                    "إجراء فحص شامل بأكثر من برنامج مكافحة فيروسات",
                    "تشغيل النظام من قرص إنقاذ خارجي",
                    "تغيير جميع كلمات المرور من جهاز آخر آمن",
                    "استعادة النظام من نسخة احتياطية نظيفة",
                    "مراقبة الحسابات المالية عن قرب"
                ]
            },
            {
                scenario: "سرقة أو فقدان الجهاز",
                icon: "fas fa-mobile-alt",
                steps: [
                    "استخدام خدمة تتبع الجهاز (Find My Device)",
                    "تفعيل المحو عن بعد للبيانات الحساسة",
                    "تغيير كلمات المرور لجميع الحسابات",
                    "إلغاء تفويض الجهاز من جميع الخدمات",
                    "الاتصال بمزود الخدمة لإيقاف الرقم",
                    "تقديم بلاغ للشرطة إذا لزم الأمر"
                ]
            }
        ]
    }
};

const privacyTools = [
    {
        category: "متصفحات آمنة",
        tools: [
            { name: "Firefox", description: "متصفح مفتوح المصدر مع إعدادات خصوصية قوية", privacy: 4 },
            { name: "Brave", description: "متصفح يحجب الإعلانات والمتتبعات افتراضياً", privacy: 5 },
            { name: "Tor Browser", description: "للتصفح المجهول عبر شبكة Tor", privacy: 5 }
        ]
    },
    {
        category: "خدمات VPN",
        tools: [
            { name: "NordVPN", description: "خدمة VPN موثوقة مع سياسة عدم حفظ السجلات", privacy: 4 },
            { name: "ExpressVPN", description: "VPN سريع مع تشفير قوي", privacy: 4 },
            { name: "ProtonVPN", description: "VPN مجاني ومدفوع من صناع ProtonMail", privacy: 5 }
        ]
    },
    {
        category: "تطبيقات المراسلة الآمنة",
        tools: [
            { name: "Signal", description: "تشفير من النهاية إلى النهاية مع كود مفتوح المصدر", privacy: 5 },
            { name: "WhatsApp", description: "تشفير من النهاية إلى النهاية (مع مخاوف الخصوصية)", privacy: 3 },
            { name: "Telegram", description: "مراسلة آمنة مع دردشات سرية", privacy: 4 }
        ]
    },
    {
        category: "محركات البحث الآمنة",
        tools: [
            { name: "DuckDuckGo", description: "لا يتتبع المستخدمين أو يحفظ بياناتهم", privacy: 5 },
            { name: "Startpage", description: "نتائج Google بدون تتبع", privacy: 4 },
            { name: "Searx", description: "محرك بحث مفتوح المصدر", privacy: 5 }
        ]
    }
];

function loadProtectionGuideContent() {
    const container = document.getElementById('protection-guide');
    
    let html = `
        <div class="section-header">
            <h2><i class="fas fa-user-shield"></i> دليل الحماية الشخصية الشامل</h2>
            <p>كل ما تحتاج معرفته لحماية نفسك وأجهزتك وبياناتك في العصر الرقمي</p>
        </div>

        <!-- Quick Security Check -->
        <div class="quick-check-section">
            <h3><i class="fas fa-check-circle"></i> فحص الأمان السريع</h3>
            <div class="info-box">
                <p>تحقق من مستوى الحماية الحالي لديك</p>
            </div>
            
            <div class="quick-checks">
                <div class="check-item" onclick="toggleCheck(this)">
                    <i class="fas fa-square-check check-icon"></i>
                    <span>كلمة مرور قوية لجميع الحسابات المهمة</span>
                </div>
                <div class="check-item" onclick="toggleCheck(this)">
                    <i class="fas fa-square-check check-icon"></i>
                    <span>المصادقة الثنائية مفعلة في الحسابات الرئيسية</span>
                </div>
                <div class="check-item" onclick="toggleCheck(this)">
                    <i class="fas fa-square-check check-icon"></i>
                    <span>تحديثات النظام والبرامج مفعلة</span>
                </div>
                <div class="check-item" onclick="toggleCheck(this)">
                    <i class="fas fa-square-check check-icon"></i>
                    <span>برنامج مكافحة فيروسات محدث ونشط</span>
                </div>
                <div class="check-item" onclick="toggleCheck(this)">
                    <i class="fas fa-square-check check-icon"></i>
                    <span>نسخ احتياطية منتظمة للبيانات المهمة</span>
                </div>
            </div>
            
            <div id="security-score" class="security-score">
                <strong>النتيجة: <span id="score-value">0</span>/5</strong>
                <div class="score-bar">
                    <div id="score-progress" class="score-progress"></div>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div class="protection-navigation">
            <button class="btn" onclick="showProtectionSection('devices')">تأمين الأجهزة</button>
            <button class="btn" onclick="showProtectionSection('email')">أمان الإيميل</button>
            <button class="btn" onclick="showProtectionSection('browsing')">التصفح الآمن</button>
            <button class="btn" onclick="showProtectionSection('social')">وسائل التواصل</button>
            <button class="btn" onclick="showProtectionSection('emergency')">الطوارئ</button>
        </div>

        <div id="protection-content" class="protection-section-content">
            <!-- المحتوى سيتم تحميله هنا -->
        </div>

        <!-- Privacy Tools Section -->
        <div class="privacy-tools-section">
            <h3><i class="fas fa-tools"></i> أدوات الحماية والخصوصية</h3>
            <div class="tools-grid">`;
    
    privacyTools.forEach(category => {
        html += `
                <div class="tools-category-card">
                    <h4>${category.category}</h4>
                    <div class="tools-list">`;
        category.tools.forEach(tool => {
            const stars = '★'.repeat(tool.privacy) + '☆'.repeat(5 - tool.privacy);
            html += `
                        <div class="tool-item">
                            <h5>${tool.name}</h5>
                            <p>${tool.description}</p>
                            <div class="privacy-rating">
                                <span>مستوى الخصوصية: ${stars}</span>
                            </div>
                        </div>`;
        });
        html += `
                    </div>
                </div>`;
    });
    
    html += `
            </div>
        </div>

        <!-- Personal Security Plan Generator -->
        <div class="security-plan-section">
            <h3><i class="fas fa-clipboard-list"></i> مولد خطة الحماية الشخصية</h3>
            <div class="plan-generator">
                <p>احصل على خطة حماية مخصصة بناءً على احتياجاتك</p>
                
                <div class="user-profile">
                    <h4>معلومات الاستخدام:</h4>
                    <div class="profile-options">
                        <label>
                            <input type="checkbox" id="work-from-home"> أعمل من المنزل
                        </label>
                        <label>
                            <input type="checkbox" id="online-banking"> أستخدم الخدمات المصرفية الإلكترونية
                        </label>
                        <label>
                            <input type="checkbox" id="social-media"> أستخدم وسائل التواصل الاجتماعي بكثرة
                        </label>
                        <label>
                            <input type="checkbox" id="online-shopping"> أتسوق عبر الإنترنت بانتظام
                        </label>
                        <label>
                            <input type="checkbox" id="sensitive-data"> أحفظ بيانات حساسة على أجهزتي
                        </label>
                    </div>
                    
                    <button class="btn btn-success" onclick="generateSecurityPlan()">إنشاء خطة الحماية</button>
                </div>
                
                <div id="security-plan-output" style="display: none;">
                    <!-- خطة الحماية المخصصة -->
                </div>
            </div>
        </div>

        <!-- Security Tips of the Day -->
        <div class="daily-tips-section">
            <h3><i class="fas fa-lightbulb"></i> نصيحة اليوم الأمنية</h3>
            <div id="daily-tip" class="daily-tip-card">
                <!-- نصيحة اليوم -->
            </div>
            <button class="btn" onclick="getNewTip()">نصيحة جديدة</button>
        </div>

        <!-- Incident Report Form -->
        <div class="incident-report-section">
            <h3><i class="fas fa-exclamation-triangle"></i> الإبلاغ عن حادث أمني</h3>
            <div class="report-form">
                <p>إذا كنت تشك في تعرضك لحادث أمني، املأ هذا النموذج للحصول على إرشادات سريعة</p>
                
                <form id="incident-form">
                    <div class="form-group">
                        <label>نوع الحادث:</label>
                        <select id="incident-type" class="lab-input">
                            <option value="">اختر نوع الحادث</option>
                            <option value="account-hack">اختراق حساب</option>
                            <option value="malware">إصابة ببرمجية خبيثة</option>
                            <option value="phishing">رسالة تصيد مشبوهة</option>
                            <option value="device-theft">سرقة أو فقدان جهاز</option>
                            <option value="data-breach">تسريب بيانات شخصية</option>
                            <option value="financial-fraud">احتيال مالي</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>وصف الحادث:</label>
                        <textarea id="incident-description" class="lab-input" rows="4" placeholder="صف ما حدث بالتفصيل..."></textarea>
                    </div>
                    
                    <button type="button" class="btn btn-danger" onclick="processIncidentReport()">
                        الحصول على المساعدة الفورية
                    </button>
                </form>
                
                <div id="incident-guidance" style="display: none;">
                    <!-- إرشادات الاستجابة للحادث -->
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // تحميل المحتوى الافتراضي
    showProtectionSection('devices');
    loadDailyTip();
    addProtectionGuideStyles();
}

function addProtectionGuideStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .protection-navigation {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
            margin: 20px 0;
        }
        
        .quick-checks {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 20px 0;
        }
        
        .check-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            background: white;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-left: 4px solid #ddd;
        }
        
        .check-item:hover {
            transform: translateX(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .check-item.checked {
            background: #d4edda;
            border-left-color: #27ae60;
        }
        
        .check-item.checked .check-icon {
            color: #27ae60;
        }
        
        .check-icon {
            font-size: 1.2em;
            color: #ddd;
            transition: color 0.3s ease;
        }
        
        .security-score {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin: 20px 0;
        }
        
        .score-bar {
            width: 100%;
            height: 10px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 5px;
            margin: 10px 0;
            overflow: hidden;
        }
        
        .score-progress {
            height: 100%;
            background: #27ae60;
            border-radius: 5px;
            width: 0%;
            transition: width 0.5s ease;
        }
        
        .device-categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin: 25px 0;
        }
        
        .device-card {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            border-top: 4px solid #667eea;
        }
        
        .device-card h4 {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            color: #2c3e50;
        }
        
        .protection-steps {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }
        
        .protection-steps h5 {
            color: #667eea;
            margin-bottom: 10px;
        }
        
        .protection-steps ul {
            list-style: none;
            padding: 0;
        }
        
        .protection-steps li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 25px;
        }
        
        .protection-steps li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #27ae60;
            font-weight: bold;
        }
        
        .tools-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .tools-category-card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }
        
        .tools-category-card h4 {
            color: #2c3e50;
            margin-bottom: 15px;
            text-align: center;
        }
        
        .tool-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            border-left: 3px solid #667eea;
        }
        
        .privacy-rating {
            margin-top: 8px;
            font-size: 0.9em;
        }
        
        .privacy-rating span {
            color: #f39c12;
        }
        
        .plan-generator {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 12px;
            margin: 20px 0;
        }
        
        .profile-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .profile-options label {
            display: flex;
            align-items: center;
            gap: 10px;
            background: white;
            padding: 15px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .profile-options label:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .daily-tip-card {
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
            padding: 25px;
            border-radius: 12px;
            margin: 20px 0;
            text-align: center;
        }
        
        .report-form {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 25px;
            border-radius: 12px;
            border-right: 4px solid #f39c12;
        }
        
        .form-group {
            margin: 15px 0;
        }
        
        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 8px;
            color: #2c3e50;
        }
        
        .emergency-steps {
            background: #f8d7da;
            border: 1px solid #f5c6cb;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            border-right: 4px solid #e74c3c;
        }
        
        .emergency-steps h4 {
            color: #721c24;
            margin-bottom: 15px;
        }
        
        .emergency-steps ol {
            color: #721c24;
        }
        
        .emergency-steps li {
            margin: 8px 0;
            font-weight: 500;
        }
        
        .scenario-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            border-left: 4px solid #e74c3c;
        }
        
        .scenario-card h4 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #e74c3c;
            margin-bottom: 15px;
        }
    `;
    document.head.appendChild(style);
}

let checkedItems = 0;

function toggleCheck(element) {
    element.classList.toggle('checked');
    
    // حساب عدد العناصر المحددة
    checkedItems = document.querySelectorAll('.check-item.checked').length;
    document.getElementById('score-value').textContent = checkedItems;
    
    // تحديث شريط النتيجة
    const progress = (checkedItems / 5) * 100;
    document.getElementById('score-progress').style.width = progress + '%';
    
    // تغيير لون الشريط حسب النتيجة
    const progressBar = document.getElementById('score-progress');
    if (checkedItems <= 2) {
        progressBar.style.background = '#e74c3c';
    } else if (checkedItems <= 3) {
        progressBar.style.background = '#f39c12';
    } else {
        progressBar.style.background = '#27ae60';
    }
}

function showProtectionSection(section) {
    const content = document.getElementById('protection-content');
    
    let html = '';
    
    if (section === 'devices') {
        html = `<div class="section">
            <h3><i class="fas fa-laptop"></i> تأمين الأجهزة</h3>
            <div class="device-categories">`;
        
        protectionGuide.deviceSecurity.categories.forEach(category => {
            html += `
                <div class="device-card">
                    <h4><i class="${category.icon}"></i> ${category.device}</h4>`;
            
            category.protections.forEach(protection => {
                html += `
                    <div class="protection-steps">
                        <h5>${protection.title}</h5>
                        <ul>`;
                protection.steps.forEach(step => {
                    html += `<li>${step}</li>`;
                });
                html += `</ul></div>`;
            });
            
            html += `</div>`;
        });
        
        html += `</div></div>`;
    }
    
    else if (section === 'email') {
        html = `<div class="section">
            <h3><i class="fas fa-envelope"></i> ${protectionGuide.emailSecurity.title}</h3>`;
        
        protectionGuide.emailSecurity.sections.forEach(section => {
            html += `<h4>${section.category}</h4>`;
            
            section.practices.forEach(practice => {
                html += `
                    <div class="language-card">
                        <h5>${practice.title}</h5>
                        <p>${practice.description}</p>`;
                
                if (practice.tips) {
                    html += `<ul>`;
                    practice.tips.forEach(tip => {
                        html += `<li>${tip}</li>`;
                    });
                    html += `</ul>`;
                }
                
                if (practice.signs) {
                    html += `
                        <h6>علامات التحذير:</h6>
                        <ul style="color: #e74c3c;">`;
                    practice.signs.forEach(sign => {
                        html += `<li>❌ ${sign}</li>`;
                    });
                    html += `</ul>`;
                }
                
                if (practice.actions) {
                    html += `
                        <h6>الإجراءات المطلوبة:</h6>
                        <ul style="color: #27ae60;">`;
                    practice.actions.forEach(action => {
                        html += `<li>✅ ${action}</li>`;
                    });
                    html += `</ul>`;
                }
                
                html += `</div>`;
            });
        });
        
        html += `</div>`;
    }
    
    else if (section === 'browsing') {
        html = `<div class="section">
            <h3><i class="fas fa-globe"></i> ${protectionGuide.onlineBehavior.title}</h3>`;
        
        protectionGuide.onlineBehavior.guidelines.forEach(guideline => {
            html += `
                <div class="language-card">
                    <h4><i class="${guideline.icon}"></i> ${guideline.category}</h4>`;
            
            guideline.rules.forEach(rule => {
                html += `
                    <div class="protection-steps">
                        <h5>${rule.rule}</h5>
                        <ul>`;
                rule.details.forEach(detail => {
                    html += `<li>${detail}</li>`;
                });
                html += `</ul></div>`;
            });
            
            html += `</div>`;
        });
        
        html += `</div>`;
    }
    
    else if (section === 'social') {
        html = `<div class="section">
            <h3><i class="fas fa-users"></i> ${protectionGuide.socialMedia.title}</h3>
            <div class="social-platforms">`;
        
        protectionGuide.socialMedia.platforms.forEach(platform => {
            html += `
                <div class="language-card">
                    <h4>${platform.platform}</h4>
                    <div class="protection-steps">
                        <h5>الإعدادات الموصى بها:</h5>
                        <ul>`;
            platform.settings.forEach(setting => {
                html += `<li>${setting}</li>`;
            });
            html += `</ul></div></div>`;
        });
        
        html += `</div></div>`;
    }
    
    else if (section === 'emergency') {
        html = `<div class="section">
            <h3><i class="fas fa-ambulance"></i> ${protectionGuide.emergencyResponse.title}</h3>`;
        
        protectionGuide.emergencyResponse.scenarios.forEach(scenario => {
            html += `
                <div class="scenario-card">
                    <h4><i class="${scenario.icon}"></i> ${scenario.scenario}</h4>
                    <div class="emergency-steps">
                        <h5>الخطوات الواجب اتباعها:</h5>
                        <ol>`;
            scenario.steps.forEach(step => {
                html += `<li>${step}</li>`;
            });
            html += `</ol></div></div>`;
        });
        
        html += `</div>`;
    }
    
    content.innerHTML = html;
}

function generateSecurityPlan() {
    const workFromHome = document.getElementById('work-from-home').checked;
    const onlineBanking = document.getElementById('online-banking').checked;
    const socialMedia = document.getElementById('social-media').checked;
    const onlineShopping = document.getElementById('online-shopping').checked;
    const sensitiveData = document.getElementById('sensitive-data').checked;
    
    const output = document.getElementById('security-plan-output');
    output.style.display = 'block';
    
    let recommendations = [];
    
    if (workFromHome) {
        recommendations.push({
            priority: 'عالي',
            title: 'تأمين شبكة WiFi المنزلية',
            details: ['استخدام تشفير WPA3', 'تغيير كلمة المرور الافتراضية', 'إنشاء شبكة ضيوف منفصلة']
        });
        recommendations.push({
            priority: 'عالي',
            title: 'VPN للعمل عن بعد',
            details: ['استخدام VPN موثوق', 'تجنب WiFi العام للعمل', 'تشفير جميع الاتصالات']
        });
    }
    
    if (onlineBanking) {
        recommendations.push({
            priority: 'عالي جداً',
            title: 'حماية العمليات المصرفية',
            details: ['المصادقة الثنائية في جميع الحسابات المصرفية', 'فحص كشوف الحساب أسبوعياً', 'استخدام تطبيقات البنك الرسمية فقط']
        });
    }
    
    if (socialMedia) {
        recommendations.push({
            priority: 'متوسط',
            title: 'إعدادات الخصوصية لوسائل التواصل',
            details: ['مراجعة إعدادات الخصوصية شهرياً', 'تجنب نشر المعلومات الشخصية', 'التحقق من التطبيقات المربوطة']
        });
    }
    
    if (onlineShopping) {
        recommendations.push({
            priority: 'متوسط',
            title: 'التسوق الآمن عبر الإنترنت',
            details: ['التسوق من مواقع موثوقة فقط', 'استخدام بطاقات ائتمان منفصلة', 'تجنب حفظ معلومات الدفع في المتاجر']
        });
    }
    
    if (sensitiveData) {
        recommendations.push({
            priority: 'عالي جداً',
            title: 'حماية البيانات الحساسة',
            details: ['تشفير القرص الصلب', 'نسخ احتياطية مشفرة منتظمة', 'استخدام مدير كلمات مرور']
        });
    }
    
    // إضافة توصيات عامة
    recommendations.push({
        priority: 'عالي',
        title: 'الأساسيات الأمنية',
        details: ['تحديث النظام والبرامج تلقائياً', 'برنامج مكافحة فيروسات محدث', 'المصادقة الثنائية في الحسابات الرئيسية']
    });
    
    let html = `
        <div class="security-plan">
            <h4><i class="fas fa-clipboard-check"></i> خطة الحماية المخصصة</h4>
            <p>بناءً على احتياجاتك، إليك خطة الحماية الموصى بها:</p>
    `;
    
    recommendations.forEach((rec, index) => {
        const priorityColor = rec.priority === 'عالي جداً' ? '#e74c3c' : 
                            rec.priority === 'عالي' ? '#f39c12' : '#3498db';
        
        html += `
            <div class="recommendation-card" style="background: white; padding: 20px; border-radius: 10px; margin: 15px 0; border-left: 4px solid ${priorityColor};">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h5 style="margin: 0;">${index + 1}. ${rec.title}</h5>
                    <span style="background: ${priorityColor}; color: white; padding: 4px 12px; border-radius: 15px; font-size: 0.8em;">
                        ${rec.priority}
                    </span>
                </div>
                <ul>`;
        
        rec.details.forEach(detail => {
            html += `<li>${detail}</li>`;
        });
        
        html += `</ul></div>`;
    });
    
    html += `
        <div class="plan-actions" style="background: #d4edda; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center;">
            <h5 style="color: #155724;">الخطوات التالية:</h5>
            <p style="color: #155724;">ابدأ بالتوصيات عالية الأولوية، ثم انتقل تدريجياً للباقي</p>
            <button class="btn btn-success" onclick="downloadSecurityPlan()">تحميل الخطة كـ PDF</button>
        </div>
        </div>
    `;
    
    output.innerHTML = html;
}

const securityTips = [
    "استخدم كلمة مرور مختلفة لكل حساب، حتى لو كان صغيراً",
    "فعّل المصادقة الثنائية في جميع الحسابات التي تدعمها",
    "لا تنقر على روابط في رسائل لم تطلبها، حتى لو بدت رسمية",
    "راجع أذونات التطبيقات على هاتفك مرة كل شهر",
    "احتفظ بنسخة احتياطية من بياناتك المهمة في مكانين مختلفين",
    "تحديث البرامج ونظام التشغيل فور توفر التحديثات",
    "استخدم شبكة VPN عند الاتصال بـ WiFi عام",
    "لا تحفظ كلمات المرور في المتصفح للحسابات المهمة",
    "راجع نشاط حساباتك المالية أسبوعياً على الأقل",
    "احذر من الرسائل التي تطلب إجراءً عاجلاً أو تهدد بإغلاق حسابك"
];

function loadDailyTip() {
    const tipElement = document.getElementById('daily-tip');
    const randomTip = securityTips[Math.floor(Math.random() * securityTips.length)];
    
    tipElement.innerHTML = `
        <h4><i class="fas fa-lightbulb"></i> نصيحة أمنية</h4>
        <p>${randomTip}</p>
    `;
}

function getNewTip() {
    loadDailyTip();
}

function processIncidentReport() {
    const incidentType = document.getElementById('incident-type').value;
    const description = document.getElementById('incident-description').value;
    
    if (!incidentType) {
        alert('يرجى اختيار نوع الحادث');
        return;
    }
    
    const guidance = document.getElementById('incident-guidance');
    guidance.style.display = 'block';
    
    let steps = [];
    
    switch (incidentType) {
        case 'account-hack':
            steps = [
                'غيّر كلمة المرور فوراً من جهاز آمن آخر',
                'فعّل المصادقة الثنائية إذا لم تكن مفعلة',
                'راجع نشاط الحساب والجلسات النشطة',
                'أغلق جميع الجلسات النشطة',
                'تحقق من إعدادات الحساب والبيانات الشخصية',
                'أبلغ الأصدقاء والمتابعين عن الاختراق'
            ];
            break;
        case 'malware':
            steps = [
                'اقطع الاتصال بالإنترنت فوراً',
                'أجري فحصاً شاملاً ببرنامج مكافحة فيروسات محدث',
                'استخدم قرص إنقاذ خارجي إذا أمكن',
                'غيّر جميع كلمات المرور من جهاز آمن',
                'تحقق من وجود ملفات غير معروفة أو برامج جديدة',
                'استعد النظام من نسخة احتياطية نظيفة إذا لزم الأمر'
            ];
            break;
        case 'phishing':
            steps = [
                'لا تنقر على أي روابط في الرسالة',
                'لا تحمّل أي مرفقات',
                'تحقق من عنوان المرسل بعناية',
                'أبلغ عن الرسالة كـ spam أو phishing',
                'احذف الرسالة نهائياً',
                'تحقق من حساباتك للتأكد من عدم تعرضها للاختراق'
            ];
            break;
        case 'device-theft':
            steps = [
                'استخدم خدمة تتبع الجهاز فوراً (Find My Device)',
                'فعّل المحو عن بعد إذا كان متاحاً',
                'غيّر كلمات مرور جميع الحسابات المحفوظة على الجهاز',
                'اتصل بمزود الخدمة لإيقاف الخط',
                'أبلغ الشرطة إذا كان الجهاز مسروقاً',
                'راقب حساباتك المالية عن قرب'
            ];
            break;
        case 'data-breach':
            steps = [
                'غيّر كلمات المرور لجميع الحسابات المتأثرة',
                'فعّل المصادقة الثنائية فوراً',
                'راقب كشوف حساباتك المصرفية',
                'ضع تنبيهات احتيال على ملفك الائتماني',
                'تحقق من تقارير الائتمان',
                'أبلغ البنك إذا كانت معلومات مالية متورطة'
            ];
            break;
        case 'financial-fraud':
            steps = [
                'اتصل بالبنك فوراً لإيقاف الحساب',
                'غيّر جميع كلمات مرور الحسابات المصرفية',
                'أبلغ الشرطة وقدم بلاغاً رسمياً',
                'اطلب كشف حساب مفصل للمعاملات المشبوهة',
                'تواصل مع شركة بطاقتك الائتمانية',
                'راجع جميع حساباتك المالية'
            ];
            break;
        default:
            steps = ['يرجى اختيار نوع محدد من الحوادث للحصول على إرشادات مفصلة'];
    }
    
    let html = `
        <div class="emergency-steps">
            <h4><i class="fas fa-exclamation-triangle"></i> الإجراءات العاجلة المطلوبة</h4>
            <ol>`;
    
    steps.forEach(step => {
        html += `<li>${step}</li>`;
    });
    
    html += `
            </ol>
            <div style="background: #d1ecf1; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <strong>ملاحظة مهمة:</strong> إذا كان الحادث يتضمن معلومات مالية، تواصل مع البنك فوراً. 
                وإذا كان جريمة، أبلغ الشرطة على الرقم المحلي للطوارئ.
            </div>
        </div>
    `;
    
    guidance.innerHTML = html;
}

function downloadSecurityPlan() {
    alert('هذه الميزة ستكون متاحة قريباً. يمكنك حفظ الصفحة أو طباعتها في الوقت الحالي.');
}