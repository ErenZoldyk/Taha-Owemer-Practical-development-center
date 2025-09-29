// Cybersecurity - Comprehensive Cybersecurity Guide

const cybersecurityDomains = {
    fundamentals: {
        title: "أساسيات الأمن السيبراني",
        topics: [
            {
                name: "CIA Triad",
                arabic: "ثلاثية الأمان",
                description: "الأسس الثلاثة للأمن السيبراني",
                components: [
                    {
                        name: "Confidentiality",
                        arabic: "السرية",
                        description: "حماية المعلومات من الوصول غير المصرح به",
                        examples: ["التشفير", "التحكم في الوصول", "كلمات المرور القوية"]
                    },
                    {
                        name: "Integrity", 
                        arabic: "سلامة البيانات",
                        description: "ضمان عدم تغيير البيانات بطريقة غير مصرح بها",
                        examples: ["التوقيع الرقمي", "المجاميع الاختبارية", "نسخ احتياطية"]
                    },
                    {
                        name: "Availability",
                        arabic: "التوفر", 
                        description: "ضمان وصول المستخدمين المصرح لهم للمعلومات عند الحاجة",
                        examples: ["النسخ المتطابق", "خطط الاستمرارية", "مراقبة النظام"]
                    }
                ]
            },
            {
                name: "Defense in Depth",
                arabic: "الدفاع المتعدد الطبقات",
                description: "استراتيجية أمنية تستخدم عدة طبقات من الحماية",
                layers: [
                    "الطبقة الفيزيائية - حماية الأجهزة والمرافق",
                    "طبقة الشبكة - جدران الحماية وأنظمة كشف التسلل",
                    "طبقة التطبيقات - حماية البرمجيات والخدمات",
                    "طبقة البيانات - تشفير وحماية قواعد البيانات",
                    "طبقة المستخدم - التدريب والسياسات الأمنية"
                ]
            }
        ]
    },
    threats: {
        title: "التهديدات السيبرانية",
        categories: [
            {
                type: "Malware",
                arabic: "البرمجيات الخبيثة", 
                description: "برامج مصممة للإضرار بالأنظمة أو سرقة المعلومات",
                variants: [
                    {
                        name: "Virus",
                        arabic: "الفيروسات",
                        description: "برامج تتكاثر بإرفاق نفسها بملفات أخرى",
                        impact: "تدمير الملفات، بطء النظام"
                    },
                    {
                        name: "Worm", 
                        arabic: "الديدان",
                        description: "برامج تنتشر عبر الشبكة بدون تدخل المستخدم",
                        impact: "استهلاك عرض النطاق، انتشار سريع"
                    },
                    {
                        name: "Trojan",
                        arabic: "حصان طروادة",
                        description: "برامج تبدو مفيدة لكنها تخفي نشاطاً ضاراً",
                        impact: "سرقة المعلومات، التحكم عن بعد"
                    },
                    {
                        name: "Ransomware",
                        arabic: "برامج الفدية",
                        description: "تشفير ملفات الضحية والمطالبة بفدية",
                        impact: "فقدان الوصول للبيانات، خسائر مالية"
                    },
                    {
                        name: "Spyware",
                        arabic: "برامج التجسس",
                        description: "مراقبة وجمع معلومات المستخدم سراً",
                        impact: "انتهاك الخصوصية، سرقة الهوية"
                    }
                ]
            },
            {
                type: "Social Engineering",
                arabic: "الهندسة الاجتماعية",
                description: "استغلال العنصر البشري للحصول على معلومات أو وصول غير مصرح به",
                techniques: [
                    {
                        name: "Phishing",
                        arabic: "التصيد الإلكتروني",
                        description: "إرسال رسائل مزيفة لسرقة معلومات شخصية",
                        examples: ["إيميلات بنكية مزيفة", "مواقع تسجيل دخول مقلدة"]
                    },
                    {
                        name: "Pretexting",
                        arabic: "انتحال الشخصية",
                        description: "ادعاء هوية مزيفة لكسب الثقة",
                        examples: ["الاتصال كموظف دعم فني", "ادعاء كونه من البنك"]
                    },
                    {
                        name: "Baiting",
                        arabic: "الطُعم",
                        description: "ترك أجهزة مصابة لإغراء الضحايا",
                        examples: ["فلاش ميموري مصاب", "أقراص مجانية"]
                    }
                ]
            },
            {
                type: "Network Attacks",
                arabic: "هجمات الشبكة",
                description: "هجمات تستهدف البنية التحتية للشبكة",
                attacks: [
                    {
                        name: "DDoS",
                        arabic: "رفض الخدمة الموزع",
                        description: "إغراق الخدمة بطلبات كثيرة لجعلها غير متاحة",
                        impact: "توقف الخدمة، خسائر مالية"
                    },
                    {
                        name: "Man-in-the-Middle",
                        arabic: "الرجل في المنتصف",
                        description: "اعتراض الاتصالات بين طرفين",
                        impact: "سرقة البيانات، تعديل الاتصالات"
                    },
                    {
                        name: "SQL Injection",
                        arabic: "حقن SQL",
                        description: "استغلال نقاط الضعف في قواعد البيانات",
                        impact: "الوصول غير المصرح لقاعدة البيانات"
                    }
                ]
            }
        ]
    },
    frameworks: {
        title: "أطر العمل الأمنية",
        standards: [
            {
                name: "NIST Cybersecurity Framework",
                organization: "المعهد الوطني للمعايير والتكنولوجيا الأمريكي",
                functions: [
                    { name: "Identify", arabic: "التحديد", description: "فهم المخاطر وإدارة الأصول" },
                    { name: "Protect", arabic: "الحماية", description: "تطبيق الضوابط الأمنية" },
                    { name: "Detect", arabic: "الكشف", description: "مراقبة الأنشطة المشبوهة" },
                    { name: "Respond", arabic: "الاستجابة", description: "التعامل مع الحوادث الأمنية" },
                    { name: "Recover", arabic: "التعافي", description: "استعادة العمليات الطبيعية" }
                ]
            },
            {
                name: "ISO 27001",
                organization: "المنظمة الدولية للمعايير",
                description: "معيار دولي لأنظمة إدارة أمن المعلومات",
                domains: [
                    "سياسة الأمن",
                    "تنظيم أمن المعلومات", 
                    "أمن الموارد البشرية",
                    "إدارة الأصول",
                    "التحكم في الوصول",
                    "التشفير",
                    "الأمن الفيزيائي",
                    "أمن العمليات",
                    "أمن الاتصالات",
                    "أمن التطوير"
                ]
            }
        ]
    },
    tools: {
        title: "أدوات الأمن السيبراني",
        categories: [
            {
                type: "Network Security",
                arabic: "أمن الشبكات",
                tools: [
                    {
                        name: "Wireshark",
                        type: "محلل البروتوكولات",
                        description: "تحليل حركة مرور الشبكة",
                        use: "كشف الأنشطة المشبوهة، تشخيص مشاكل الشبكة"
                    },
                    {
                        name: "Nmap", 
                        type: "ماسح الشبكة",
                        description: "اكتشاف الأجهزة والخدمات على الشبكة",
                        use: "تقييم أمن الشبكة، جرد الأصول"
                    }
                ]
            },
            {
                type: "Vulnerability Assessment",
                arabic: "تقييم الثغرات",
                tools: [
                    {
                        name: "Nessus",
                        type: "ماسح الثغرات",
                        description: "البحث عن نقاط الضعف في الأنظمة",
                        use: "تقييم الأمان الدوري، إدارة المخاطر"
                    },
                    {
                        name: "OpenVAS",
                        type: "ماسح ثغرات مفتوح المصدر",
                        description: "كشف وتقييم الثغرات الأمنية",
                        use: "فحص شامل للأنظمة، تقارير الأمان"
                    }
                ]
            },
            {
                type: "Incident Response",
                arabic: "الاستجابة للحوادث",
                tools: [
                    {
                        name: "Volatility",
                        type: "تحليل الذاكرة",
                        description: "تحليل صور الذاكرة من الأنظمة المصابة",
                        use: "التحليل الجنائي، كشف البرمجيات الخبيثة"
                    },
                    {
                        name: "Autopsy",
                        type: "تحليل جنائي رقمي",
                        description: "تحليل الأقراص الصلبة والملفات",
                        use: "التحقيق في الحوادث، استعادة الأدلة"
                    }
                ]
            }
        ]
    },
    careers: {
        title: "المهن في الأمن السيبراني",
        roles: [
            {
                title: "Security Analyst",
                arabic: "محلل أمني",
                description: "مراقبة وتحليل التهديدات الأمنية",
                skills: ["SIEM", "تحليل السجلات", "كشف الحوادث"],
                salary: "$50,000 - $80,000 سنوياً"
            },
            {
                title: "Penetration Tester",
                arabic: "مختبر الاختراق",
                description: "اختبار أمان الأنظمة بطرق الهجوم الأخلاقي",
                skills: ["Kali Linux", "البرمجة", "هندسة الشبكات"],
                salary: "$70,000 - $120,000 سنوياً"
            },
            {
                title: "Security Architect",
                arabic: "مهندس الأمان",
                description: "تصميم وتطبيق الأنظمة الأمنية",
                skills: ["تصميم الأنظمة", "إدارة المخاطر", "الامتثال"],
                salary: "$100,000 - $150,000 سنوياً"
            },
            {
                title: "Incident Response Specialist",
                arabic: "أخصائي الاستجابة للحوادث",
                description: "التعامل مع الحوادث الأمنية والتعافي منها",
                skills: ["التحليل الجنائي", "إدارة الأزمات", "التواصل"],
                salary: "$60,000 - $100,000 سنوياً"
            }
        ]
    }
};

const securityMetrics = {
    global: {
        title: "إحصائيات الأمن السيبراني العالمية",
        stats: [
            { metric: "تكلفة الهجمات السيبرانية عالمياً", value: "10.5 تريليون دولار بحلول 2025" },
            { metric: "عدد الهجمات يومياً", value: "أكثر من 4000 هجوم" },
            { metric: "متوسط تكلفة خرق البيانات", value: "4.45 مليون دولار" },
            { metric: "وقت اكتشاف الخرق", value: "287 يوماً في المتوسط" },
            { metric: "نقص المواهب في الأمن السيبراني", value: "3.5 مليون منصب شاغر" }
        ]
    }
};

function loadCybersecurityContent() {
    const container = document.getElementById('cybersecurity');
    
    let html = `
        <div class="section-header">
            <h2><i class="fas fa-shield-virus"></i> الأمان السيبراني الشامل</h2>
            <p>دليل كامل للحماية من التهديدات الرقمية وبناء دفاعات قوية</p>
        </div>

        <!-- Global Statistics -->
        <div class="stats-section">
            <h3><i class="fas fa-chart-line"></i> إحصائيات عالمية</h3>
            <div class="stats-grid">`;
    
    securityMetrics.global.stats.forEach(stat => {
        html += `
                <div class="stat-card">
                    <div class="stat-number">${stat.value}</div>
                    <div>${stat.metric}</div>
                </div>`;
    });
    
    html += `
            </div>
        </div>

        <!-- Navigation -->
        <div class="cybersec-navigation">
            <button class="btn" onclick="showCybersecDomain('fundamentals')">الأساسيات</button>
            <button class="btn" onclick="showCybersecDomain('threats')">التهديدات</button>
            <button class="btn" onclick="showCybersecDomain('frameworks')">أطر العمل</button>
            <button class="btn" onclick="showCybersecDomain('tools')">الأدوات</button>
            <button class="btn" onclick="showCybersecDomain('careers')">المهن</button>
        </div>

        <div id="cybersec-content" class="cybersec-domain-content">
            <!-- المحتوى سيتم تحميله هنا -->
        </div>

        <!-- Threat Simulator -->
        <div class="simulator-section">
            <h3><i class="fas fa-bug"></i> محاكي التهديدات</h3>
            <div class="info-box">
                <p>تعلم كيفية التعرف على التهديدات المختلفة من خلال المحاكاة التفاعلية</p>
            </div>
            
            <div class="threat-scenarios">
                <button class="btn btn-warning" onclick="simulatePhishing()">محاكاة تصيد إلكتروني</button>
                <button class="btn btn-warning" onclick="simulatePasswordAttack()">محاكاة هجوم كلمات مرور</button>
                <button class="btn btn-warning" onclick="simulateMalware()">محاكاة برمجية خبيثة</button>
            </div>
            
            <div id="threat-simulation" class="simulation-output" style="display: none;">
                <!-- نتائج المحاكاة -->
            </div>
        </div>

        <!-- Security Assessment Tool -->
        <div class="assessment-section">
            <h3><i class="fas fa-clipboard-check"></i> أداة تقييم الأمان</h3>
            <p>قم بتقييم مستوى الأمان لديك</p>
            
            <div class="assessment-form">
                <button class="btn btn-success" onclick="startSecurityAssessment()">بدء التقييم</button>
            </div>
            
            <div id="security-assessment" style="display: none;">
                <div id="assessment-questions"></div>
                <div id="assessment-results"></div>
            </div>
        </div>

        <!-- Latest Threats Alert -->
        <div class="alerts-section">
            <h3><i class="fas fa-exclamation-triangle"></i> تنبيهات أمنية حديثة</h3>
            <div id="security-alerts" class="alerts-container">
                <!-- التنبيهات الأمنية -->
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // تحميل المحتوى الافتراضي
    showCybersecDomain('fundamentals');
    loadSecurityAlerts();
    addCybersecurityStyles();
}

function addCybersecurityStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .cybersec-navigation {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
            margin: 20px 0;
        }
        
        .threat-scenarios {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
            margin: 20px 0;
        }
        
        .simulation-output {
            background: #1a1a1a;
            color: #00ff00;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            margin: 20px 0;
            min-height: 200px;
            max-height: 400px;
            overflow-y: auto;
        }
        
        .cia-triad {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .cia-component {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
        }
        
        .threat-category {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        
        .malware-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 15px;
            margin: 15px 0;
        }
        
        .malware-card {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 3px solid #e74c3c;
        }
        
        .framework-card {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            margin: 20px 0;
            border-top: 4px solid #667eea;
        }
        
        .tools-category {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
        }
        
        .tool-item {
            background: white;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            border-left: 3px solid #27ae60;
        }
        
        .career-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .career-card {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        
        .career-card:hover {
            transform: translateY(-5px);
        }
        
        .alerts-container {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 20px;
            border-radius: 10px;
            border-right: 4px solid #f39c12;
        }
        
        .alert-item {
            background: white;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .assessment-form {
            background: #e8f4fd;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin: 20px 0;
        }
        
        .question-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .results-summary {
            background: linear-gradient(135deg, #27ae60, #2ecc71);
            color: white;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            margin: 20px 0;
        }
    `;
    document.head.appendChild(style);
}

function showCybersecDomain(domain) {
    const content = document.getElementById('cybersec-content');
    const domainData = cybersecurityDomains[domain];
    
    let html = `<div class="domain-section">
        <h3><i class="fas fa-shield-alt"></i> ${domainData.title}</h3>`;
    
    if (domain === 'fundamentals') {
        domainData.topics.forEach(topic => {
            if (topic.name === 'CIA Triad') {
                html += `
                    <div class="topic-section">
                        <h4>${topic.arabic} (${topic.name})</h4>
                        <p>${topic.description}</p>
                        <div class="cia-triad">`;
                topic.components.forEach(comp => {
                    html += `
                            <div class="cia-component">
                                <h5>${comp.arabic} (${comp.name})</h5>
                                <p>${comp.description}</p>
                                <ul>`;
                    comp.examples.forEach(example => {
                        html += `<li>${example}</li>`;
                    });
                    html += `</ul></div>`;
                });
                html += `</div></div>`;
            } else {
                html += `
                    <div class="language-card">
                        <h4>${topic.arabic} (${topic.name})</h4>
                        <p>${topic.description}</p>
                        <ul>`;
                topic.layers.forEach(layer => {
                    html += `<li>${layer}</li>`;
                });
                html += `</ul></div>`;
            }
        });
    }
    
    else if (domain === 'threats') {
        domainData.categories.forEach(category => {
            html += `
                <div class="threat-category">
                    <h4>${category.arabic} (${category.type})</h4>
                    <p>${category.description}</p>`;
            
            if (category.variants) {
                html += `<div class="malware-grid">`;
                category.variants.forEach(variant => {
                    html += `
                        <div class="malware-card">
                            <h5>${variant.arabic} (${variant.name})</h5>
                            <p><strong>الوصف:</strong> ${variant.description}</p>
                            <p><strong>التأثير:</strong> ${variant.impact}</p>
                        </div>`;
                });
                html += `</div>`;
            }
            
            if (category.techniques) {
                html += `<div class="techniques-list">`;
                category.techniques.forEach(tech => {
                    html += `
                        <div class="technique-item">
                            <h5>${tech.arabic} (${tech.name})</h5>
                            <p>${tech.description}</p>`;
                    if (tech.examples) {
                        html += `<ul>`;
                        tech.examples.forEach(ex => {
                            html += `<li>${ex}</li>`;
                        });
                        html += `</ul>`;
                    }
                    html += `</div>`;
                });
                html += `</div>`;
            }
            
            if (category.attacks) {
                html += `<div class="attacks-list">`;
                category.attacks.forEach(attack => {
                    html += `
                        <div class="attack-item">
                            <h5>${attack.arabic} (${attack.name})</h5>
                            <p><strong>الوصف:</strong> ${attack.description}</p>
                            <p><strong>التأثير:</strong> ${attack.impact}</p>
                        </div>`;
                });
                html += `</div>`;
            }
            
            html += `</div>`;
        });
    }
    
    else if (domain === 'frameworks') {
        domainData.standards.forEach(standard => {
            html += `
                <div class="framework-card">
                    <h4>${standard.name}</h4>
                    <p><strong>المنظمة:</strong> ${standard.organization}</p>`;
            
            if (standard.functions) {
                html += `
                    <h5>الوظائف الأساسية:</h5>
                    <div class="functions-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 15px 0;">`;
                standard.functions.forEach(func => {
                    html += `
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                            <h6>${func.arabic} (${func.name})</h6>
                            <p style="font-size: 0.9em;">${func.description}</p>
                        </div>`;
                });
                html += `</div>`;
            }
            
            if (standard.domains) {
                html += `
                    <h5>مجالات التطبيق:</h5>
                    <div class="domains-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin: 15px 0;">`;
                standard.domains.forEach(domain => {
                    html += `<div style="background: #e8f4fd; padding: 10px; border-radius: 5px; text-align: center;">${domain}</div>`;
                });
                html += `</div>`;
            }
            
            html += `</div>`;
        });
    }
    
    else if (domain === 'tools') {
        domainData.categories.forEach(category => {
            html += `
                <div class="tools-category">
                    <h4>${category.arabic} (${category.type})</h4>
                    <div class="tools-list">`;
            category.tools.forEach(tool => {
                html += `
                        <div class="tool-item">
                            <h5>${tool.name} - ${tool.type}</h5>
                            <p><strong>الوصف:</strong> ${tool.description}</p>
                            <p><strong>الاستخدام:</strong> ${tool.use}</p>
                        </div>`;
            });
            html += `</div></div>`;
        });
    }
    
    else if (domain === 'careers') {
        html += `<div class="career-grid">`;
        domainData.roles.forEach(role => {
            html += `
                <div class="career-card">
                    <h4>${role.arabic} (${role.title})</h4>
                    <p>${role.description}</p>
                    <div class="skills-section">
                        <h5>المهارات المطلوبة:</h5>
                        <ul>`;
            role.skills.forEach(skill => {
                html += `<li>${skill}</li>`;
            });
            html += `</ul>
                    </div>
                    <p><strong>الراتب المتوقع:</strong> ${role.salary}</p>
                </div>`;
        });
        html += `</div>`;
    }
    
    html += `</div>`;
    content.innerHTML = html;
}

function simulatePhishing() {
    const output = document.getElementById('threat-simulation');
    output.style.display = 'block';
    
    const scenarios = [
        "محاكاة إيميل تصيد مصرفي...",
        "تم اكتشاف محاولة تصيد تحتوي على:",
        "- رابط مشبوه: http://bankk-security.com (لاحظ الخطأ الإملائي)",
        "- طلب تحديث معلومات شخصية",
        "- لغة تحفز على الإسراع والخوف",
        "",
        "علامات التحذير:",
        "❌ عنوان المرسل مزيف",
        "❌ أخطاء إملائية ونحوية",
        "❌ رابط لا يطابق الموقع الرسمي",
        "❌ طلب معلومات حساسة عبر الإيميل",
        "",
        "الإجراء الصحيح:",
        "✅ عدم النقر على الروابط",
        "✅ التحقق مباشرة من الموقع الرسمي",
        "✅ الاتصال بالبنك للتأكد",
        "",
        "محاكاة مكتملة ✅"
    ];
    
    animateText(output, scenarios, 0);
}

function simulatePasswordAttack() {
    const output = document.getElementById('threat-simulation');
    output.style.display = 'block';
    
    const scenarios = [
        "محاكاة هجوم قاموس على كلمة مرور ضعيفة...",
        "",
        "كلمة المرور المستهدفة: password123",
        "",
        "بدء الهجوم:",
        "جاري تجربة: password... ❌",
        "جاري تجربة: 123456... ❌", 
        "جاري تجربة: password1... ❌",
        "جاري تجربة: password12... ❌",
        "جاري تجربة: password123... ✅ تم الاختراق!",
        "",
        "الوقت المستغرق: 0.003 ثانية",
        "عدد المحاولات: 5",
        "",
        "تحليل النتيجة:",
        "❌ كلمة مرور ضعيفة جداً",
        "❌ تحتوي على كلمة من القاموس",
        "❌ نمط متوقع (كلمة + أرقام)",
        "",
        "توصيات الحماية:",
        "✅ استخدم كلمة مرور من 12+ حرف",
        "✅ امزج أحرف كبيرة وصغيرة ورموز",
        "✅ تجنب كلمات القاموس",
        "✅ استخدم مدير كلمات مرور"
    ];
    
    animateText(output, scenarios, 0);
}

function simulateMalware() {
    const output = document.getElementById('threat-simulation');
    output.style.display = 'block';
    
    const scenarios = [
        "محاكاة اكتشاف برمجية خبيثة...",
        "",
        "فحص النظام...",
        "████████████████████████████████████████ 100%",
        "",
        "⚠️ تم اكتشاف تهديد!",
        "",
        "نوع التهديد: Trojan.Generic",
        "المسار: C:\\Users\\Downloads\\game_crack.exe",
        "مستوى الخطورة: عالي",
        "",
        "السلوكيات المشبوهة المكتشفة:",
        "- محاولة الاتصال بخادم مجهول",
        "- قراءة ملفات كلمات المرور المحفوظة",
        "- تعديل إعدادات جدار الحماية",
        "- إنشاء مهام مجدولة مخفية",
        "",
        "الإجراءات المتخذة:",
        "✅ تم عزل الملف",
        "✅ تم إيقاف العمليات الضارة",
        "✅ تم تنظيف السجل",
        "✅ تم تحديث قواعد الكشف",
        "",
        "نصائح الوقاية:",
        "- تجنب تحميل برامج من مصادر غير موثوقة",
        "- فحص الملفات قبل التشغيل",
        "- تحديث نظام مكافحة الفيروسات",
        "- تفعيل جدار الحماية"
    ];
    
    animateText(output, scenarios, 0);
}

function animateText(element, lines, index) {
    if (index < lines.length) {
        element.innerHTML += lines[index] + '\n';
        element.scrollTop = element.scrollHeight;
        setTimeout(() => animateText(element, lines, index + 1), 500);
    }
}

const securityAssessmentQuestions = [
    {
        question: "هل تستخدم كلمات مرور قوية وفريدة لكل حساب؟",
        options: ["نعم، دائماً", "أحياناً", "نادراً", "لا، أبداً"],
        scores: [4, 3, 1, 0]
    },
    {
        question: "هل فعلت المصادقة الثنائية (2FA) في حساباتك المهمة؟",
        options: ["في جميع الحسابات", "في معظم الحسابات", "في بعض الحسابات", "لم أفعل"],
        scores: [4, 3, 2, 0]
    },
    {
        question: "كم مرة تقوم بتحديث برامجك ونظام التشغيل؟",
        options: ["فورياً عند التوفر", "أسبوعياً", "شهرياً", "نادراً"],
        scores: [4, 3, 2, 0]
    },
    {
        question: "هل تستخدم برنامج مكافحة فيروسات محدث؟",
        options: ["نعم ومحدث دائماً", "نعم لكن أحدثه أحياناً", "نعم لكن قديم", "لا أستخدم"],
        scores: [4, 2, 1, 0]
    },
    {
        question: "كيف تتعامل مع الرسائل الإلكترونية المشبوهة؟",
        options: ["أحذفها فوراً", "أتأكد من المرسل أولاً", "أفتحها للاطلاع", "أنقر على الروابط أحياناً"],
        scores: [4, 3, 1, 0]
    }
];

let currentAssessmentQuestion = 0;
let assessmentScore = 0;

function startSecurityAssessment() {
    const assessmentDiv = document.getElementById('security-assessment');
    assessmentDiv.style.display = 'block';
    currentAssessmentQuestion = 0;
    assessmentScore = 0;
    showAssessmentQuestion();
}

function showAssessmentQuestion() {
    const questionsDiv = document.getElementById('assessment-questions');
    const question = securityAssessmentQuestions[currentAssessmentQuestion];
    
    questionsDiv.innerHTML = `
        <div class="question-card">
            <h4>السؤال ${currentAssessmentQuestion + 1} من ${securityAssessmentQuestions.length}</h4>
            <p><strong>${question.question}</strong></p>
            <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        questionsDiv.innerHTML += `
                <label style="display: block; margin: 10px 0; cursor: pointer;">
                    <input type="radio" name="security-answer" value="${index}" style="margin-left: 10px;">
                    ${option}
                </label>
        `;
    });
    
    questionsDiv.innerHTML += `
            </div>
            <button class="btn btn-success" onclick="submitAssessmentAnswer()" style="margin-top: 15px;">
                ${currentAssessmentQuestion < securityAssessmentQuestions.length - 1 ? 'السؤال التالي' : 'إنهاء التقييم'}
            </button>
        </div>
    `;
}

function submitAssessmentAnswer() {
    const selected = document.querySelector('input[name="security-answer"]:checked');
    if (!selected) {
        alert('يرجى اختيار إجابة');
        return;
    }
    
    const question = securityAssessmentQuestions[currentAssessmentQuestion];
    assessmentScore += question.scores[parseInt(selected.value)];
    
    if (currentAssessmentQuestion < securityAssessmentQuestions.length - 1) {
        currentAssessmentQuestion++;
        showAssessmentQuestion();
    } else {
        showAssessmentResults();
    }
}

function showAssessmentResults() {
    const resultsDiv = document.getElementById('assessment-results');
    const maxScore = securityAssessmentQuestions.length * 4;
    const percentage = (assessmentScore / maxScore) * 100;
    
    let level = '';
    let recommendations = [];
    let color = '';
    
    if (percentage >= 90) {
        level = 'ممتاز';
        color = '#27ae60';
        recommendations = ['استمر في متابعة أفضل الممارسات الأمنية', 'شارك معرفتك مع الآخرين'];
    } else if (percentage >= 70) {
        level = 'جيد';
        color = '#3498db';
        recommendations = ['حسّن المصادقة الثنائية', 'راجع كلمات المرور بانتظام'];
    } else if (percentage >= 50) {
        level = 'متوسط';
        color = '#f39c12';
        recommendations = ['فعّل المصادقة الثنائية فوراً', 'استخدم مدير كلمات مرور', 'حدّث البرامج بانتظام'];
    } else {
        level = 'يحتاج تحسين';
        color = '#e74c3c';
        recommendations = ['غيّر جميع كلمات المرور لكلمات قوية', 'فعّل المصادقة الثنائية', 'ثبّت برنامج مكافحة فيروسات', 'تعلّم أساسيات الأمن السيبراني'];
    }
    
    resultsDiv.innerHTML = `
        <div class="results-summary" style="background-color: ${color};">
            <h3>نتيجة التقييم</h3>
            <div class="score-display">
                <div style="font-size: 2em; margin: 10px 0;">${assessmentScore}/${maxScore}</div>
                <div style="font-size: 1.5em;">${percentage.toFixed(1)}% - ${level}</div>
            </div>
        </div>
        
        <div class="recommendations">
            <h4>التوصيات:</h4>
            <ul>
    `;
    
    recommendations.forEach(rec => {
        resultsDiv.innerHTML += `<li>${rec}</li>`;
    });
    
    resultsDiv.innerHTML += `
            </ul>
        </div>
        
        <button class="btn" onclick="startSecurityAssessment()" style="margin-top: 20px;">
            إعادة التقييم
        </button>
    `;
    
    document.getElementById('assessment-questions').innerHTML = '';
}

function loadSecurityAlerts() {
    const alertsDiv = document.getElementById('security-alerts');
    
    const recentAlerts = [
        {
            title: "تحديث أمني عاجل لمتصفحات الويب",
            description: "ثغرة أمنية خطيرة تم اكتشافها في المتصفحات الرئيسية",
            severity: "عالي",
            date: "2024-01-15"
        },
        {
            title: "حملة تصيد إلكتروني جديدة",
            description: "انتشار رسائل تصيد تدعي أنها من منصات التواصل الاجتماعي",
            severity: "متوسط",
            date: "2024-01-14"
        },
        {
            title: "برمجية فدية تستهدف المؤسسات",
            description: "ظهور نوع جديد من برمجيات الفدية يستهدف الخوادم",
            severity: "عالي جداً",
            date: "2024-01-13"
        }
    ];
    
    let html = '';
    recentAlerts.forEach(alert => {
        const severityColor = alert.severity === 'عالي جداً' ? '#e74c3c' : 
                            alert.severity === 'عالي' ? '#f39c12' : '#3498db';
        
        html += `
            <div class="alert-item">
                <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 10px;">
                    <h5 style="margin: 0;">${alert.title}</h5>
                    <span style="background: ${severityColor}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8em;">
                        ${alert.severity}
                    </span>
                </div>
                <p>${alert.description}</p>
                <small style="color: #666;">تاريخ النشر: ${alert.date}</small>
            </div>
        `;
    });
    
    alertsDiv.innerHTML = html;
}