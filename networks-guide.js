// Networks Guide - Comprehensive Networking Tutorial

const networkingTopics = {
    basics: {
        title: "أساسيات الشبكات",
        content: [
            {
                topic: "ما هي الشبكة؟",
                description: "الشبكة هي مجموعة من الأجهزة المترابطة التي يمكنها تبادل البيانات والموارد",
                details: [
                    "تسمح بمشاركة الملفات والطابعات",
                    "تمكن الاتصال بالإنترنت",
                    "توفر خدمات مثل البريد الإلكتروني",
                    "تسهل العمل الجماعي والتعاون"
                ]
            },
            {
                topic: "أنواع الشبكات",
                description: "تصنف الشبكات حسب الحجم والمدى الجغرافي",
                details: [
                    "PAN (Personal Area Network) - شبكة شخصية",
                    "LAN (Local Area Network) - شبكة محلية",
                    "MAN (Metropolitan Area Network) - شبكة حضرية",
                    "WAN (Wide Area Network) - شبكة واسعة"
                ]
            }
        ]
    },
    protocols: {
        title: "بروتوكولات الشبكة",
        content: [
            {
                topic: "OSI Model",
                description: "نموذج OSI يتكون من 7 طبقات لتنظيم عمليات الشبكة",
                layers: [
                    { layer: "Physical Layer", arabic: "الطبقة الفيزيائية", function: "نقل البتات عبر الوسائط الفيزيائية" },
                    { layer: "Data Link Layer", arabic: "طبقة ربط البيانات", function: "التحكم في الوصول للوسائط وكشف الأخطاء" },
                    { layer: "Network Layer", arabic: "طبقة الشبكة", function: "التوجيه وعنونة IP" },
                    { layer: "Transport Layer", arabic: "طبقة النقل", function: "ضمان التسليم الموثوق للبيانات" },
                    { layer: "Session Layer", arabic: "طبقة الجلسة", function: "إدارة الاتصالات بين التطبيقات" },
                    { layer: "Presentation Layer", arabic: "طبقة العرض", function: "تشفير وضغط البيانات" },
                    { layer: "Application Layer", arabic: "طبقة التطبيق", function: "واجهة المستخدم والتطبيقات" }
                ]
            },
            {
                topic: "TCP/IP Suite",
                description: "مجموعة بروتوكولات TCP/IP الأساسية للإنترنت",
                protocols: [
                    { name: "TCP", description: "بروتوكول التحكم في النقل - موثوق ومرتب" },
                    { name: "UDP", description: "بروتوكول بيانات المستخدم - سريع وغير موثوق" },
                    { name: "IP", description: "بروتوكول الإنترنت - عنونة وتوجيه" },
                    { name: "HTTP/HTTPS", description: "بروتوكول نقل النصوص الفائقة" },
                    { name: "FTP", description: "بروتوكول نقل الملفات" },
                    { name: "DNS", description: "نظام أسماء النطاقات" },
                    { name: "DHCP", description: "بروتوكول تكوين المضيف الديناميكي" }
                ]
            }
        ]
    },
    devices: {
        title: "أجهزة الشبكة",
        content: [
            {
                device: "Router",
                arabic: "الموجه",
                function: "توجيه البيانات بين الشبكات المختلفة",
                features: [
                    "يعمل في الطبقة الثالثة (Network Layer)",
                    "يحدد أفضل مسار للبيانات",
                    "يربط بين شبكات مختلفة",
                    "يوفر خدمات NAT و DHCP"
                ]
            },
            {
                device: "Switch",
                arabic: "المحول",
                function: "ربط الأجهزة في نفس الشبكة المحلية",
                features: [
                    "يعمل في الطبقة الثانية (Data Link Layer)",
                    "يتعلم عناوين MAC",
                    "يقلل من تصادم البيانات",
                    "يوفر full-duplex communication"
                ]
            },
            {
                device: "Hub",
                arabic: "المجمع",
                function: "ربط متعدد الأجهزة (تقنية قديمة)",
                features: [
                    "يعمل في الطبقة الأولى (Physical Layer)",
                    "يكرر الإشارة لجميع المنافذ",
                    "مشاركة عرض النطاق",
                    "collision domain واحد"
                ]
            },
            {
                device: "Firewall",
                arabic: "جدار الحماية",
                function: "حماية الشبكة من التهديدات",
                features: [
                    "فلترة حركة المرور",
                    "منع الهجمات الضارة",
                    "مراقبة الاتصالات",
                    "تطبيق سياسات الأمان"
                ]
            }
        ]
    },
    topologies: {
        title: "طوبولوجيات الشبكة",
        content: [
            {
                topology: "Star",
                arabic: "النجمة",
                description: "جميع الأجهزة متصلة بجهاز مركزي",
                advantages: ["سهولة الإدارة", "عطل جهاز واحد لا يؤثر على الباقي", "سهولة اكتشاف الأعطال"],
                disadvantages: ["فشل الجهاز المركزي يعطل الشبكة", "استهلاك أكبر للكابلات", "التكلفة أعلى"]
            },
            {
                topology: "Bus",
                arabic: "الناقل",
                description: "جميع الأجهزة متصلة بكابل واحد مشترك",
                advantages: ["توفير في الكابلات", "سهولة التركيب", "تكلفة أقل"],
                disadvantages: ["تصادم البيانات", "صعوبة اكتشاف الأعطال", "عطل الكابل الرئيسي يعطل الشبكة"]
            },
            {
                topology: "Ring",
                arabic: "الحلقة",
                description: "الأجهزة متصلة في شكل دائري",
                advantages: ["لا توجد تصادمات", "أداء ثابت", "عدالة في الوصول"],
                disadvantages: ["عطل جهاز واحد يعطل الشبكة", "صعوبة الصيانة", "بطء في إضافة أجهزة جديدة"]
            },
            {
                topology: "Mesh",
                arabic: "الشبكة",
                description: "كل جهاز متصل بعدة أجهزة أخرى",
                advantages: ["موثوقية عالية", "عدة مسارات للبيانات", "لا توجد نقطة فشل واحدة"],
                disadvantages: ["تعقيد في التركيب", "تكلفة عالية", "صعوبة الإدارة"]
            }
        ]
    },
    addressing: {
        title: "عنونة الشبكات",
        content: [
            {
                topic: "IP Addressing",
                description: "نظام عنونة بروتوكول الإنترنت",
                types: [
                    {
                        version: "IPv4",
                        format: "32 بت (4 أوكتات)",
                        example: "192.168.1.1",
                        classes: [
                            "Class A: 1-126 (للشبكات الكبيرة)",
                            "Class B: 128-191 (للشبكات المتوسطة)",
                            "Class C: 192-223 (للشبكات الصغيرة)"
                        ]
                    },
                    {
                        version: "IPv6",
                        format: "128 بت (8 مجموعات hex)",
                        example: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
                        features: ["مساحة عناوين أكبر", "أمان محسن", "تكوين تلقائي"]
                    }
                ]
            },
            {
                topic: "Subnetting",
                description: "تقسيم الشبكات إلى شبكات فرعية",
                benefits: [
                    "تحسين الأداء",
                    "تقليل حركة المرور",
                    "تعزيز الأمان",
                    "سهولة الإدارة"
                ],
                masks: [
                    "/24 = 255.255.255.0 (256 عنوان)",
                    "/25 = 255.255.255.128 (128 عنوان)",
                    "/26 = 255.255.255.192 (64 عنوان)",
                    "/27 = 255.255.255.224 (32 عنوان)"
                ]
            }
        ]
    }
};

function loadNetworksGuideContent() {
    const container = document.getElementById('networks-guide');
    
    let html = `
        <div class="section-header">
            <h2><i class="fas fa-book"></i> دليل الشبكات الشامل</h2>
            <p>تعلم كل ما تحتاج معرفته عن الشبكات من الأساسيات إلى المفاهيم المتقدمة</p>
        </div>

        <div class="info-box">
            <h4><i class="fas fa-info-circle"></i> عن هذا الدليل</h4>
            <p>هذا الدليل الشامل يغطي جميع جوانب الشبكات بدءاً من الأساسيات وحتى المفاهيم المتقدمة. مصمم للمبتدئين والمحترفين على حد سواء.</p>
        </div>

        <div class="course-navigation">
            <button class="btn" onclick="showNetworkTopic('basics')">أساسيات الشبكات</button>
            <button class="btn" onclick="showNetworkTopic('protocols')">البروتوكولات</button>
            <button class="btn" onclick="showNetworkTopic('devices')">أجهزة الشبكة</button>
            <button class="btn" onclick="showNetworkTopic('topologies')">طوبولوجيات الشبكة</button>
            <button class="btn" onclick="showNetworkTopic('addressing')">عنونة الشبكات</button>
        </div>

        <div id="network-content" class="network-topic-content">
            <!-- سيتم تحميل المحتوى هنا -->
        </div>

        <div class="practice-section">
            <h3><i class="fas fa-laptop-code"></i> تمارين عملية</h3>
            <div class="feature-grid">
                <div class="feature-card" onclick="startNetworkQuiz()">
                    <i class="fas fa-question-circle"></i>
                    <h4>اختبار المعرفة</h4>
                    <p>اختبر معلوماتك في الشبكات</p>
                </div>
                <div class="feature-card" onclick="openSubnetCalculator()">
                    <i class="fas fa-calculator"></i>
                    <h4>حاسبة الشبكات الفرعية</h4>
                    <p>احسب الشبكات الفرعية والعناوين</p>
                </div>
                <div class="feature-card" onclick="showNetworkLab()">
                    <i class="fas fa-flask"></i>
                    <h4>مختبر الشبكات</h4>
                    <p>تطبيق عملي للمفاهيم</p>
                </div>
            </div>
        </div>

        <!-- Subnet Calculator -->
        <div id="subnet-calculator" class="demo-panel" style="display: none;">
            <h4>حاسبة الشبكات الفرعية</h4>
            <div class="controls">
                <input type="text" id="ip-address" placeholder="عنوان IP (مثال: 192.168.1.0)" class="lab-input">
                <input type="number" id="subnet-mask" placeholder="قناع الشبكة الفرعية (24)" min="1" max="30" class="lab-input">
                <button class="btn btn-success" onclick="calculateSubnet()">احسب</button>
            </div>
            <div id="subnet-results" class="console-output"></div>
        </div>

        <!-- Network Quiz -->
        <div id="network-quiz" class="quiz-container" style="display: none;">
            <h4>اختبار معلومات الشبكات</h4>
            <div id="quiz-content"></div>
            <div id="quiz-results"></div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // تحميل الموضوع الأول افتراضياً
    showNetworkTopic('basics');
}

function showNetworkTopic(topic) {
    const content = document.getElementById('network-content');
    const topicData = networkingTopics[topic];
    
    let html = `<div class="topic-section">
        <h3><i class="fas fa-network-wired"></i> ${topicData.title}</h3>`;
    
    if (topic === 'basics') {
        topicData.content.forEach(item => {
            html += `
                <div class="language-card">
                    <h4>${item.topic}</h4>
                    <p><strong>الوصف:</strong> ${item.description}</p>
                    <ul>`;
            item.details.forEach(detail => {
                html += `<li>${detail}</li>`;
            });
            html += `</ul></div>`;
        });
    }
    
    else if (topic === 'protocols') {
        topicData.content.forEach(item => {
            if (item.layers) {
                html += `
                    <div class="language-card">
                        <h4>${item.topic}</h4>
                        <p><strong>الوصف:</strong> ${item.description}</p>
                        <div class="osi-layers">`;
                item.layers.forEach((layer, index) => {
                    html += `
                        <div class="osi-layer" style="background: linear-gradient(45deg, hsl(${index * 50}, 70%, 85%), hsl(${index * 50 + 30}, 70%, 90%));">
                            <strong>الطبقة ${7-index}: ${layer.arabic}</strong><br>
                            <small>${layer.layer}</small><br>
                            <em>${layer.function}</em>
                        </div>`;
                });
                html += `</div></div>`;
            } else if (item.protocols) {
                html += `
                    <div class="language-card">
                        <h4>${item.topic}</h4>
                        <p><strong>الوصف:</strong> ${item.description}</p>
                        <div class="protocols-grid">`;
                item.protocols.forEach(protocol => {
                    html += `
                        <div class="protocol-card">
                            <h5>${protocol.name}</h5>
                            <p>${protocol.description}</p>
                        </div>`;
                });
                html += `</div></div>`;
            }
        });
    }
    
    else if (topic === 'devices') {
        topicData.content.forEach(device => {
            html += `
                <div class="language-card">
                    <h4>${device.device} - ${device.arabic}</h4>
                    <p><strong>الوظيفة:</strong> ${device.function}</p>
                    <ul>`;
            device.features.forEach(feature => {
                html += `<li>${feature}</li>`;
            });
            html += `</ul></div>`;
        });
    }
    
    else if (topic === 'topologies') {
        topicData.content.forEach(topo => {
            html += `
                <div class="language-card">
                    <h4>طوبولوجية ${topo.arabic} (${topo.topology})</h4>
                    <p><strong>الوصف:</strong> ${topo.description}</p>
                    <div class="topology-details">
                        <div class="advantages">
                            <h5 style="color: #27ae60;">المزايا:</h5>
                            <ul>`;
            topo.advantages.forEach(adv => {
                html += `<li>${adv}</li>`;
            });
            html += `</ul></div>
                        <div class="disadvantages">
                            <h5 style="color: #e74c3c;">العيوب:</h5>
                            <ul>`;
            topo.disadvantages.forEach(dis => {
                html += `<li>${dis}</li>`;
            });
            html += `</ul></div></div></div>`;
        });
    }
    
    else if (topic === 'addressing') {
        topicData.content.forEach(item => {
            html += `
                <div class="language-card">
                    <h4>${item.topic}</h4>
                    <p><strong>الوصف:</strong> ${item.description}</p>`;
            
            if (item.types) {
                item.types.forEach(type => {
                    html += `
                        <div class="ip-version">
                            <h5>${type.version}</h5>
                            <p><strong>التنسيق:</strong> ${type.format}</p>
                            <p><strong>مثال:</strong> <code>${type.example}</code></p>`;
                    if (type.classes) {
                        html += `<ul>`;
                        type.classes.forEach(cls => {
                            html += `<li>${cls}</li>`;
                        });
                        html += `</ul>`;
                    }
                    if (type.features) {
                        html += `<ul>`;
                        type.features.forEach(feature => {
                            html += `<li>${feature}</li>`;
                        });
                        html += `</ul>`;
                    }
                    html += `</div>`;
                });
            }
            
            if (item.benefits) {
                html += `
                    <div class="subnetting-info">
                        <h5>فوائد التقسيم الفرعي:</h5>
                        <ul>`;
                item.benefits.forEach(benefit => {
                    html += `<li>${benefit}</li>`;
                });
                html += `</ul>
                        <h5>أقنعة الشبكة الفرعية الشائعة:</h5>
                        <ul>`;
                item.masks.forEach(mask => {
                    html += `<li><code>${mask}</code></li>`;
                });
                html += `</ul></div>`;
            }
            
            html += `</div>`;
        });
    }
    
    html += `</div>`;
    
    // إضافة CSS للعناصر الجديدة
    html += `
        <style>
        .osi-layer {
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
            border-left: 4px solid #667eea;
        }
        .protocols-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin: 15px 0;
        }
        .protocol-card {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 3px solid #667eea;
        }
        .topology-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 15px 0;
        }
        .ip-version {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
        }
        .course-navigation {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin: 20px 0;
            justify-content: center;
        }
        .quiz-container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            margin: 20px 0;
        }
        </style>
    `;
    
    content.innerHTML = html;
}

function openSubnetCalculator() {
    const calculator = document.getElementById('subnet-calculator');
    calculator.style.display = calculator.style.display === 'none' ? 'block' : 'none';
}

function calculateSubnet() {
    const ipInput = document.getElementById('ip-address').value;
    const maskInput = document.getElementById('subnet-mask').value;
    const results = document.getElementById('subnet-results');
    
    if (!ipInput || !maskInput) {
        results.innerHTML = 'يرجى إدخال عنوان IP وقناع الشبكة الفرعية';
        return;
    }
    
    try {
        const subnet = parseInt(maskInput);
        const hostBits = 32 - subnet;
        const numHosts = Math.pow(2, hostBits) - 2; // -2 للشبكة والبث
        const numSubnets = Math.pow(2, subnet - 8); // افتراض Class C
        
        results.innerHTML = `
            <div style="color: #00ff00; font-family: monospace;">
            عنوان الشبكة: ${ipInput}/${subnet}
            عدد المضيفين المتاحين: ${numHosts}
            عدد الشبكات الفرعية: ${numSubnets}
            قناع الشبكة: ${getSubnetMask(subnet)}
            
            مثال على الشبكات الفرعية:
            ${ipInput.split('.').slice(0, 3).join('.')}.0/${subnet}
            ${ipInput.split('.').slice(0, 3).join('.')}.${Math.pow(2, hostBits)}/${subnet}
            ${ipInput.split('.').slice(0, 3).join('.')}.${Math.pow(2, hostBits) * 2}/${subnet}
            </div>
        `;
    } catch (error) {
        results.innerHTML = 'خطأ في الحساب - تأكد من صحة المدخلات';
    }
}

function getSubnetMask(cidr) {
    const mask = [];
    for (let i = 0; i < 4; i++) {
        const n = Math.min(cidr, 8);
        mask.push(256 - Math.pow(2, 8 - n));
        cidr -= n;
    }
    return mask.join('.');
}

const networkQuestions = [
    {
        question: "ما هو البروتوكول المستخدم لتحويل أسماء النطاقات إلى عناوين IP؟",
        options: ["DNS", "DHCP", "HTTP", "FTP"],
        correct: 0
    },
    {
        question: "في أي طبقة من طبقات OSI يعمل الروتر؟",
        options: ["الطبقة الأولى", "الطبقة الثانية", "الطبقة الثالثة", "الطبقة الرابعة"],
        correct: 2
    },
    {
        question: "ما هو المنفذ الافتراضي لبروتوكول HTTP؟",
        options: ["21", "23", "80", "443"],
        correct: 2
    },
    {
        question: "أي من هذه التوبولوجيات توفر أعلى مستوى من الموثوقية؟",
        options: ["Bus", "Star", "Ring", "Mesh"],
        correct: 3
    }
];

let currentQuestion = 0;
let userAnswers = [];

function startNetworkQuiz() {
    const quiz = document.getElementById('network-quiz');
    quiz.style.display = quiz.style.display === 'none' ? 'block' : 'none';
    currentQuestion = 0;
    userAnswers = [];
    showQuestion();
}

function showQuestion() {
    const quizContent = document.getElementById('quiz-content');
    const question = networkQuestions[currentQuestion];
    
    let html = `
        <div class="question">
            <h5>السؤال ${currentQuestion + 1} من ${networkQuestions.length}</h5>
            <p><strong>${question.question}</strong></p>
            <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <label style="display: block; margin: 10px 0; cursor: pointer;">
                <input type="radio" name="answer" value="${index}" style="margin-left: 10px;">
                ${option}
            </label>
        `;
    });
    
    html += `
            </div>
            <div class="quiz-controls" style="margin-top: 20px;">
                <button class="btn" onclick="submitAnswer()">
                    ${currentQuestion < networkQuestions.length - 1 ? 'السؤال التالي' : 'إنهاء الاختبار'}
                </button>
            </div>
        </div>
    `;
    
    quizContent.innerHTML = html;
}

function submitAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert('يرجى اختيار إجابة');
        return;
    }
    
    userAnswers.push(parseInt(selected.value));
    
    if (currentQuestion < networkQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const results = document.getElementById('quiz-results');
    let correct = 0;
    
    userAnswers.forEach((answer, index) => {
        if (answer === networkQuestions[index].correct) {
            correct++;
        }
    });
    
    const percentage = (correct / networkQuestions.length) * 100;
    let grade = '';
    
    if (percentage >= 90) grade = 'ممتاز';
    else if (percentage >= 80) grade = 'جيد جداً';
    else if (percentage >= 70) grade = 'جيد';
    else if (percentage >= 60) grade = 'مقبول';
    else grade = 'يحتاج تحسين';
    
    results.innerHTML = `
        <div class="quiz-results">
            <h4>نتائج الاختبار</h4>
            <p><strong>النتيجة:</strong> ${correct} من ${networkQuestions.length} (${percentage.toFixed(1)}%)</p>
            <p><strong>التقدير:</strong> ${grade}</p>
            <button class="btn btn-success" onclick="startNetworkQuiz()">إعادة الاختبار</button>
        </div>
    `;
    
    document.getElementById('quiz-content').innerHTML = '';
}

function showNetworkLab() {
    // الانتقال إلى تبويب محاكي الشبكات
    switchTab('networking');
}