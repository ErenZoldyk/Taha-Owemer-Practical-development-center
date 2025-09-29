// Password Security - Comprehensive Password Analysis and Security Guide

const passwordCriteria = {
    length: { min: 8, recommended: 12, excellent: 16 },
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    numbers: /[0-9]/,
    symbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\?]/,
    commonPatterns: /(.)\1{2,}|123456|password|qwerty|abc123|admin|letmein/i
};

const passwordTips = [
    {
        title: "طول كلمة المرور",
        description: "كلما كانت كلمة المرور أطول، كانت أكثر أماناً",
        tips: [
            "استخدم 12 حرف على الأقل",
            "الأفضل 16 حرف أو أكثر",
            "كل حرف إضافي يضاعف الأمان"
        ]
    },
    {
        title: "التنوع في الأحرف",
        description: "امزج بين أنواع الأحرف المختلفة",
        tips: [
            "أحرف كبيرة (A-Z)",
            "أحرف صغيرة (a-z)",
            "أرقام (0-9)",
            "رموز خاصة (!@#$%^&*)"
        ]
    },
    {
        title: "تجنب الأنماط الشائعة",
        description: "لا تستخدم كلمات أو أنماط يمكن تخمينها",
        avoid: [
            "123456, password, qwerty",
            "معلومات شخصية (اسم، تاريخ ميلاد)",
            "كلمات من القاموس",
            "تسلسل لوحة المفاتيح"
        ]
    }
];

const securityThreats = [
    {
        threat: "Brute Force Attack",
        arabic: "هجوم القوة الغاشمة",
        description: "محاولة تجربة جميع التركيبات الممكنة",
        protection: [
            "كلمات مرور طويلة ومعقدة",
            "تفعيل المصادقة الثنائية",
            "حد محاولات تسجيل الدخول"
        ]
    },
    {
        threat: "Dictionary Attack",
        arabic: "هجوم القاموس",
        description: "استخدام قاموس من كلمات المرور الشائعة",
        protection: [
            "تجنب الكلمات المعروفة",
            "استخدام عبارات مرور",
            "إضافة أرقام ورموز"
        ]
    },
    {
        threat: "Social Engineering",
        arabic: "الهندسة الاجتماعية",
        description: "خداع المستخدمين للكشف عن معلوماتهم",
        protection: [
            "عدم مشاركة كلمات المرور",
            "الحذر من رسائل التصيد",
            "التحقق من هوية طالب المعلومات"
        ]
    },
    {
        threat: "Phishing",
        arabic: "التصيد الإلكتروني",
        description: "مواقع مزيفة لسرقة بيانات الدخول",
        protection: [
            "التحقق من عنوان الموقع",
            "استخدام مدير كلمات المرور",
            "عدم النقر على روابط مشبوهة"
        ]
    }
];

const passwordManagers = [
    {
        name: "1Password",
        platform: "متعدد المنصات",
        features: ["تشفير قوي", "مزامنة آمنة", "مراقبة اختراق"],
        price: "مدفوع",
        rating: 5
    },
    {
        name: "LastPass",
        platform: "متعدد المنصات",
        features: ["إصدار مجاني", "مشاركة آمنة", "مولد كلمات مرور"],
        price: "مجاني/مدفوع",
        rating: 4
    },
    {
        name: "Bitwarden",
        platform: "مفتوح المصدر",
        features: ["مجاني بالكامل", "شفافية عالية", "خوادم ذاتية"],
        price: "مجاني",
        rating: 5
    },
    {
        name: "Dashlane",
        platform: "متعدد المنصات",
        features: ["مراقبة الهوية", "VPN مدمج", "واجهة سهلة"],
        price: "مدفوع",
        rating: 4
    }
];

function loadPasswordSecurityContent() {
    const container = document.getElementById('password-security');
    
    let html = `
        <div class="section-header">
            <h2><i class="fas fa-key"></i> أمان كلمات المرور</h2>
            <p>تعلم كيفية إنشاء واستخدام كلمات مرور قوية وآمنة</p>
        </div>

        <!-- Password Strength Checker -->
        <div class="demo-panel">
            <h3><i class="fas fa-shield-alt"></i> فاحص قوة كلمة المرور</h3>
            <div class="password-input-container">
                <input type="password" id="password-input" placeholder="أدخل كلمة المرور للفحص..." class="lab-input" oninput="checkPasswordStrength()">
                <button type="button" class="btn" onclick="togglePasswordVisibility()" style="margin: 10px 0;">
                    <i id="eye-icon" class="fas fa-eye"></i> إظهار/إخفاء
                </button>
            </div>
            
            <div class="password-strength-container">
                <div class="password-strength-meter">
                    <div id="strength-bar" class="strength-bar"></div>
                </div>
                <div id="strength-text" class="strength-text">أدخل كلمة مرور للتحليل</div>
            </div>

            <div id="password-analysis" class="password-analysis">
                <!-- تحليل كلمة المرور -->
            </div>
            
            <div class="crack-time-info">
                <h4>وقت الكسر المقدر:</h4>
                <div id="crack-time" class="console-output" style="min-height: 40px;">
                    سيظهر هنا الوقت المقدر لكسر كلمة المرور
                </div>
            </div>
        </div>

        <!-- Password Generator -->
        <div class="demo-panel">
            <h3><i class="fas fa-random"></i> مولد كلمات المرور</h3>
            <div class="generator-options">
                <div class="controls">
                    <label>
                        طول كلمة المرور:
                        <input type="range" id="length-slider" min="8" max="50" value="16" oninput="updateLengthDisplay(this.value)">
                        <span id="length-display">16</span>
                    </label>
                </div>
                
                <div class="checkbox-options">
                    <label><input type="checkbox" id="include-uppercase" checked> أحرف كبيرة (A-Z)</label>
                    <label><input type="checkbox" id="include-lowercase" checked> أحرف صغيرة (a-z)</label>
                    <label><input type="checkbox" id="include-numbers" checked> أرقام (0-9)</label>
                    <label><input type="checkbox" id="include-symbols" checked> رموز (!@#$%^&*)</label>
                    <label><input type="checkbox" id="exclude-ambiguous"> استبعاد الرموز المتشابهة (0, O, l, I)</label>
                </div>
                
                <button class="btn btn-success" onclick="generateSecurePassword()">توليد كلمة مرور</button>
            </div>
            
            <div class="generated-password">
                <input type="text" id="generated-password" readonly class="lab-input" placeholder="كلمة المرور المولدة ستظهر هنا...">
                <button class="btn" onclick="copyToClipboard('generated-password')">
                    <i class="fas fa-copy"></i> نسخ
                </button>
            </div>
        </div>

        <!-- Password Security Tips -->
        <div class="security-tips-section">
            <h3><i class="fas fa-lightbulb"></i> نصائح أمان كلمات المرور</h3>
            <div class="feature-grid">`;
    
    passwordTips.forEach(tip => {
        html += `
                <div class="feature-card">
                    <h4>${tip.title}</h4>
                    <p>${tip.description}</p>
                    <ul>`;
        if (tip.tips) {
            tip.tips.forEach(t => {
                html += `<li>${t}</li>`;
            });
        } else if (tip.avoid) {
            tip.avoid.forEach(avoid => {
                html += `<li style="color: #e74c3c;">${avoid}</li>`;
            });
        }
        html += `</ul>
                </div>`;
    });
    
    html += `
            </div>
        </div>

        <!-- Security Threats -->
        <div class="threats-section">
            <h3><i class="fas fa-exclamation-triangle"></i> التهديدات الأمنية الشائعة</h3>
            <div class="threats-grid">`;
    
    securityThreats.forEach(threat => {
        html += `
                <div class="language-card">
                    <h4>${threat.arabic} (${threat.threat})</h4>
                    <p><strong>الوصف:</strong> ${threat.description}</p>
                    <div class="protection-methods">
                        <h5 style="color: #27ae60;">طرق الحماية:</h5>
                        <ul>`;
        threat.protection.forEach(method => {
            html += `<li>${method}</li>`;
        });
        html += `</ul>
                    </div>
                </div>`;
    });
    
    html += `
            </div>
        </div>

        <!-- Password Managers -->
        <div class="managers-section">
            <h3><i class="fas fa-vault"></i> مديرو كلمات المرور المُوصى بهم</h3>
            <div class="info-box">
                <p><strong>لماذا تستخدم مدير كلمات المرور؟</strong></p>
                <ul>
                    <li>إنشاء كلمات مرور قوية وفريدة لكل حساب</li>
                    <li>حفظ كلمات المرور بشكل آمن ومشفر</li>
                    <li>ملء تلقائي للحسابات</li>
                    <li>مراقبة اختراق الحسابات</li>
                </ul>
            </div>
            
            <div class="managers-grid">`;
    
    passwordManagers.forEach(manager => {
        const stars = '★'.repeat(manager.rating) + '☆'.repeat(5 - manager.rating);
        html += `
                <div class="manager-card">
                    <h4>${manager.name}</h4>
                    <p><strong>المنصة:</strong> ${manager.platform}</p>
                    <p><strong>السعر:</strong> ${manager.price}</p>
                    <p><strong>التقييم:</strong> ${stars}</p>
                    <ul>`;
        manager.features.forEach(feature => {
            html += `<li>${feature}</li>`;
        });
        html += `</ul>
                </div>`;
    });
    
    html += `
            </div>
        </div>

        <!-- Password Best Practices -->
        <div class="best-practices">
            <h3><i class="fas fa-check-circle"></i> أفضل الممارسات</h3>
            <div class="practices-grid">
                <div class="practice-card">
                    <i class="fas fa-users"></i>
                    <h4>كلمة مرور فريدة لكل حساب</h4>
                    <p>لا تعيد استخدام نفس كلمة المرور في عدة مواقع</p>
                </div>
                <div class="practice-card">
                    <i class="fas fa-mobile-alt"></i>
                    <h4>المصادقة الثنائية (2FA)</h4>
                    <p>فعّل المصادقة الثنائية في جميع الحسابات المهمة</p>
                </div>
                <div class="practice-card">
                    <i class="fas fa-sync-alt"></i>
                    <h4>تحديث دوري</h4>
                    <p>غيّر كلمات المرور بانتظام، خاصة للحسابات المهمة</p>
                </div>
                <div class="practice-card">
                    <i class="fas fa-eye-slash"></i>
                    <h4>السرية التامة</h4>
                    <p>لا تشارك كلمات المرور مع أي شخص آخر</p>
                </div>
            </div>
        </div>

        <!-- Password Security Quiz -->
        <div class="quiz-section">
            <h3><i class="fas fa-question-circle"></i> اختبار معلومات الأمان</h3>
            <button class="btn btn-warning" onclick="startPasswordQuiz()">بدء الاختبار</button>
            <div id="password-quiz" style="display: none;">
                <div id="quiz-question"></div>
                <div id="quiz-options"></div>
                <div id="quiz-result"></div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // إضافة CSS للعناصر الجديدة
    addPasswordSecurityStyles();
}

function addPasswordSecurityStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .password-input-container {
            position: relative;
        }
        
        .password-strength-container {
            margin: 15px 0;
        }
        
        .strength-text {
            text-align: center;
            font-weight: bold;
            margin-top: 10px;
        }
        
        .password-analysis {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }
        
        .analysis-item {
            display: flex;
            align-items: center;
            margin: 8px 0;
            padding: 5px;
            border-radius: 5px;
        }
        
        .analysis-item.pass {
            background: #d4edda;
            color: #155724;
        }
        
        .analysis-item.fail {
            background: #f8d7da;
            color: #721c24;
        }
        
        .generator-options {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
        }
        
        .checkbox-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 10px;
            margin: 15px 0;
        }
        
        .checkbox-options label {
            display: flex;
            align-items: center;
            margin: 5px 0;
        }
        
        .checkbox-options input[type="checkbox"] {
            margin-left: 10px;
        }
        
        .generated-password {
            display: flex;
            gap: 10px;
            align-items: center;
            margin: 15px 0;
        }
        
        .threats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .managers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .manager-card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            border-left: 4px solid #667eea;
        }
        
        .practices-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .practice-card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .practice-card:hover {
            transform: translateY(-5px);
        }
        
        .practice-card i {
            font-size: 2.5em;
            margin-bottom: 15px;
            color: #667eea;
        }
        
        .crack-time-info {
            margin: 20px 0;
        }
        
        .crack-time-info h4 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
    `;
    document.head.appendChild(style);
}

function checkPasswordStrength() {
    const password = document.getElementById('password-input').value;
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
    const analysisDiv = document.getElementById('password-analysis');
    const crackTimeDiv = document.getElementById('crack-time');
    
    if (!password) {
        strengthBar.className = 'strength-bar';
        strengthText.textContent = 'أدخل كلمة مرور للتحليل';
        analysisDiv.innerHTML = '';
        crackTimeDiv.innerHTML = 'سيظهر هنا الوقت المقدر لكسر كلمة المرور';
        return;
    }
    
    const analysis = analyzePassword(password);
    const strength = calculateStrength(analysis);
    
    // تحديث شريط القوة
    updateStrengthBar(strengthBar, strengthText, strength);
    
    // عرض تحليل مفصل
    displayPasswordAnalysis(analysisDiv, analysis);
    
    // حساب وقت الكسر
    displayCrackTime(crackTimeDiv, password, strength);
}

function analyzePassword(password) {
    const analysis = {
        length: password.length,
        hasUppercase: passwordCriteria.uppercase.test(password),
        hasLowercase: passwordCriteria.lowercase.test(password),
        hasNumbers: passwordCriteria.numbers.test(password),
        hasSymbols: passwordCriteria.symbols.test(password),
        hasCommonPatterns: passwordCriteria.commonPatterns.test(password),
        repeatedChars: /(.)\1{2,}/.test(password),
        entropy: calculateEntropy(password)
    };
    
    return analysis;
}

function calculateStrength(analysis) {
    let score = 0;
    let maxScore = 100;
    
    // طول كلمة المرور (40 نقطة كحد أقصى)
    if (analysis.length >= passwordCriteria.length.excellent) score += 40;
    else if (analysis.length >= passwordCriteria.length.recommended) score += 30;
    else if (analysis.length >= passwordCriteria.length.min) score += 20;
    else score += analysis.length * 2;
    
    // تنوع الأحرف (40 نقطة كحد أقصى)
    if (analysis.hasUppercase) score += 10;
    if (analysis.hasLowercase) score += 10;
    if (analysis.hasNumbers) score += 10;
    if (analysis.hasSymbols) score += 10;
    
    // الإنتروبيا (20 نقطة كحد أقصى)
    score += Math.min(analysis.entropy / 3, 20);
    
    // خصم النقاط للأنماط الضعيفة
    if (analysis.hasCommonPatterns) score -= 30;
    if (analysis.repeatedChars) score -= 20;
    
    return Math.max(0, Math.min(score, maxScore));
}

function calculateEntropy(password) {
    let charSet = 0;
    if (/[a-z]/.test(password)) charSet += 26;
    if (/[A-Z]/.test(password)) charSet += 26;
    if (/[0-9]/.test(password)) charSet += 10;
    if (/[^a-zA-Z0-9]/.test(password)) charSet += 32;
    
    return Math.log2(Math.pow(charSet, password.length));
}

function updateStrengthBar(strengthBar, strengthText, strength) {
    strengthBar.style.width = strength + '%';
    
    if (strength < 30) {
        strengthBar.className = 'strength-bar strength-weak';
        strengthText.textContent = 'ضعيف جداً';
        strengthText.style.color = '#e74c3c';
    } else if (strength < 50) {
        strengthBar.className = 'strength-bar strength-fair';
        strengthText.textContent = 'ضعيف';
        strengthText.style.color = '#f39c12';
    } else if (strength < 75) {
        strengthBar.className = 'strength-bar strength-good';
        strengthText.textContent = 'متوسط';
        strengthText.style.color = '#3498db';
    } else {
        strengthBar.className = 'strength-bar strength-strong';
        strengthText.textContent = 'قوي';
        strengthText.style.color = '#27ae60';
    }
}

function displayPasswordAnalysis(div, analysis) {
    let html = '<h4>تحليل كلمة المرور:</h4>';
    
    const checks = [
        { test: analysis.length >= 8, text: 'الطول أكثر من 8 أحرف' },
        { test: analysis.length >= 12, text: 'الطول أكثر من 12 حرف (مُوصى به)' },
        { test: analysis.hasUppercase, text: 'يحتوي على أحرف كبيرة' },
        { test: analysis.hasLowercase, text: 'يحتوي على أحرف صغيرة' },
        { test: analysis.hasNumbers, text: 'يحتوي على أرقام' },
        { test: analysis.hasSymbols, text: 'يحتوي على رموز خاصة' },
        { test: !analysis.hasCommonPatterns, text: 'لا يحتوي على أنماط شائعة' },
        { test: !analysis.repeatedChars, text: 'لا يحتوي على أحرف متكررة' }
    ];
    
    checks.forEach(check => {
        const className = check.test ? 'pass' : 'fail';
        const icon = check.test ? '✓' : '✗';
        html += `<div class="analysis-item ${className}">${icon} ${check.text}</div>`;
    });
    
    html += `<p><strong>الإنتروبيا:</strong> ${analysis.entropy.toFixed(1)} بت</p>`;
    
    div.innerHTML = html;
}

function displayCrackTime(div, password, strength) {
    const attemptsPerSecond = 1000000; // مليون محاولة في الثانية
    const entropy = calculateEntropy(password);
    const combinations = Math.pow(2, entropy);
    const secondsTocrack = combinations / (2 * attemptsPerSecond);
    
    let timeString = '';
    if (secondsTocrack < 1) {
        timeString = 'أقل من ثانية';
    } else if (secondsTocrack < 60) {
        timeString = Math.round(secondsTocrack) + ' ثانية';
    } else if (secondsTocrack < 3600) {
        timeString = Math.round(secondsTocrack / 60) + ' دقيقة';
    } else if (secondsTocrack < 86400) {
        timeString = Math.round(secondsTocrack / 3600) + ' ساعة';
    } else if (secondsTocrack < 31536000) {
        timeString = Math.round(secondsTocrack / 86400) + ' يوم';
    } else {
        const years = secondsTocrack / 31536000;
        if (years > 1e12) {
            timeString = 'تريليونات السنين';
        } else if (years > 1e9) {
            timeString = Math.round(years / 1e9) + ' مليار سنة';
        } else if (years > 1e6) {
            timeString = Math.round(years / 1e6) + ' مليون سنة';
        } else {
            timeString = Math.round(years) + ' سنة';
        }
    }
    
    div.innerHTML = `
        <span style="color: #00ff00;">
        الوقت المقدر لكسر كلمة المرور: ${timeString}
        الإنتروبيا: ${entropy.toFixed(1)} بت
        عدد التركيبات الممكنة: ${combinations.toExponential(2)}
        </span>
    `;
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password-input');
    const eyeIcon = document.getElementById('eye-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        eyeIcon.className = 'fas fa-eye';
    }
}

function generateSecurePassword() {
    const length = document.getElementById('length-slider').value;
    const includeUpper = document.getElementById('include-uppercase').checked;
    const includeLower = document.getElementById('include-lowercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    const excludeAmbiguous = document.getElementById('exclude-ambiguous').checked;
    
    let charset = '';
    
    if (includeUpper) {
        charset += excludeAmbiguous ? 'ABCDEFGHJKLMNPQRSTUVWXYZ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLower) {
        charset += excludeAmbiguous ? 'abcdefghijkmnopqrstuvwxyz' : 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
        charset += excludeAmbiguous ? '23456789' : '0123456789';
    }
    if (includeSymbols) {
        charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    
    if (!charset) {
        alert('يرجى اختيار نوع واحد على الأقل من الأحرف');
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    document.getElementById('generated-password').value = password;
}

function updateLengthDisplay(length) {
    document.getElementById('length-display').textContent = length;
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    element.select();
    element.setSelectionRange(0, 99999);
    
    try {
        document.execCommand('copy');
        alert('تم نسخ كلمة المرور إلى الحافظة');
    } catch (err) {
        alert('فشل في نسخ كلمة المرور');
    }
}

const passwordQuizQuestions = [
    {
        question: "ما هو الحد الأدنى الموصى به لطول كلمة المرور؟",
        options: ["6 أحرف", "8 أحرف", "12 حرف", "16 حرف"],
        correct: 2,
        explanation: "يُنصح بأن تكون كلمة المرور 12 حرف على الأقل لضمان أمان أفضل"
    },
    {
        question: "أي من هذه كلمات المرور أكثر أماناً؟",
        options: ["Password123", "P@ssw0rd!", "MyDog'sName2021!", "Tr0ub4dor&3"],
        correct: 3,
        explanation: "كلمة المرور الأخيرة تحتوي على مزيج من الأحرف والرموز وتتجنب الكلمات الشائعة"
    },
    {
        question: "ما هو أفضل مكان لحفظ كلمات المرور؟",
        options: ["ملف نصي على الكمبيوتر", "ملاحظات على الهاتف", "مدير كلمات مرور مشفر", "ورقة مكتوبة"],
        correct: 2,
        explanation: "مدير كلمات المرور المشفر يوفر الأمان والسهولة في الاستخدام"
    }
];

let currentPasswordQuestion = 0;

function startPasswordQuiz() {
    const quizDiv = document.getElementById('password-quiz');
    quizDiv.style.display = 'block';
    currentPasswordQuestion = 0;
    showPasswordQuestion();
}

function showPasswordQuestion() {
    const question = passwordQuizQuestions[currentPasswordQuestion];
    const questionDiv = document.getElementById('quiz-question');
    const optionsDiv = document.getElementById('quiz-options');
    
    questionDiv.innerHTML = `
        <h4>السؤال ${currentPasswordQuestion + 1} من ${passwordQuizQuestions.length}</h4>
        <p><strong>${question.question}</strong></p>
    `;
    
    let optionsHtml = '';
    question.options.forEach((option, index) => {
        optionsHtml += `
            <label style="display: block; margin: 10px 0; cursor: pointer;">
                <input type="radio" name="password-answer" value="${index}" style="margin-left: 10px;">
                ${option}
            </label>
        `;
    });
    
    optionsHtml += `
        <button class="btn btn-success" onclick="checkPasswordAnswer()" style="margin-top: 15px;">
            التحقق من الإجابة
        </button>
    `;
    
    optionsDiv.innerHTML = optionsHtml;
    document.getElementById('quiz-result').innerHTML = '';
}

function checkPasswordAnswer() {
    const selected = document.querySelector('input[name="password-answer"]:checked');
    if (!selected) {
        alert('يرجى اختيار إجابة');
        return;
    }
    
    const question = passwordQuizQuestions[currentPasswordQuestion];
    const resultDiv = document.getElementById('quiz-result');
    
    if (parseInt(selected.value) === question.correct) {
        resultDiv.innerHTML = `
            <div style="color: #27ae60; background: #d4edda; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <strong>إجابة صحيحة! ✓</strong><br>
                ${question.explanation}
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div style="color: #e74c3c; background: #f8d7da; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <strong>إجابة خاطئة ✗</strong><br>
                الإجابة الصحيحة: ${question.options[question.correct]}<br>
                ${question.explanation}
            </div>
        `;
    }
    
    if (currentPasswordQuestion < passwordQuizQuestions.length - 1) {
        resultDiv.innerHTML += `
            <button class="btn" onclick="nextPasswordQuestion()" style="margin-top: 10px;">
                السؤال التالي
            </button>
        `;
    } else {
        resultDiv.innerHTML += `
            <button class="btn btn-success" onclick="startPasswordQuiz()" style="margin-top: 10px;">
                إعادة الاختبار
            </button>
        `;
    }
}

function nextPasswordQuestion() {
    currentPasswordQuestion++;
    showPasswordQuestion();
}