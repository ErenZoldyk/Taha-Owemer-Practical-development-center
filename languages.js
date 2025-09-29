// Languages Section JavaScript

const programmingLanguages = [
    {
        category: "لغات المستوى العالي",
        languages: [
            {
                name: "Python 🐍",
                level: "beginner",
                description: "لغة عالية المستوى، سهلة التعلم، متعددة الاستخدامات",
                uses: "تطوير الويب (Django, Flask)، الذكاء الاصطناعي، Machine Learning، علم البيانات، الأتمتة",
                features: "بناء جملة بسيط، مكتبات ضخمة (NumPy, Pandas, TensorFlow)، مجتمع نشط",
                companies: "Google, Instagram, Spotify, Netflix, Dropbox",
                salary: "$95,000 - $130,000 سنوياً"
            },
            {
                name: "JavaScript 💛",
                level: "beginner",
                description: "لغة البرمجة الأساسية للويب",
                uses: "تطوير الويب Frontend (React, Vue, Angular)، Backend (Node.js)، تطبيقات الموبايل (React Native)",
                features: "تعمل في جميع المتصفحات، نظام بيئي ضخم (NPM)، Asynchronous Programming",
                companies: "Facebook, LinkedIn, Netflix, PayPal",
                salary: "$85,000 - $120,000 سنوياً"
            },
            {
                name: "Java ☕",
                level: "intermediate",
                description: "لغة قوية موجهة للكائنات (OOP)",
                uses: "تطبيقات المؤسسات، Android، الأنظمة الموزعة، Big Data (Hadoop)",
                features: "Write Once Run Anywhere (WORA)، أداء عالي، JVM",
                companies: "Amazon, Google, IBM, Oracle",
                salary: "$90,000 - $135,000 سنوياً"
            },
            {
                name: "C++ ⚡",
                level: "advanced",
                description: "لغة عالية الأداء مع تحكم كامل في الذاكرة",
                uses: "أنظمة التشغيل، محركات الألعاب (Unreal Engine)، الأنظمة المدمجة، التطبيقات عالية الأداء",
                features: "سرعة فائقة، تحكم دقيق بالذاكرة، OOP + Procedural",
                companies: "Microsoft, Adobe, Google Chrome, Game Studios",
                salary: "$95,000 - $145,000 سنوياً"
            },
            {
                name: "C# 🎮",
                level: "intermediate",
                description: "لغة Microsoft الحديثة",
                uses: "Unity (ألعاب)، تطبيقات Windows، ASP.NET، تطبيقات سطح المكتب",
                features: "قوية مثل C++ وسهلة مثل Java، LINQ، Async/Await",
                companies: "Microsoft, Unity Technologies, Stack Overflow",
                salary: "$88,000 - $125,000 سنوياً"
            },
            {
                name: "Go (Golang) 🐹",
                level: "intermediate",
                description: "لغة Google للأنظمة الموزعة",
                uses: "Microservices، Cloud Computing، APIs، DevOps Tools",
                features: "Concurrency سهلة (Goroutines)، سرعة عالية، بساطة",
                companies: "Google, Uber, Docker, Kubernetes",
                salary: "$100,000 - $140,000 سنوياً"
            },
            {
                name: "Rust 🦀",
                level: "advanced",
                description: "لغة آمنة بدون Garbage Collector",
                uses: "أنظمة التشغيل، Blockchain، WebAssembly، البرمجة النظامية",
                features: "Memory Safety، أداء C++، Ownership System",
                companies: "Mozilla, Dropbox, Microsoft, Discord",
                salary: "$110,000 - $155,000 سنوياً"
            },
            {
                name: "PHP 🐘",
                level: "beginner",
                description: "لغة Server-Side للويب",
                uses: "تطوير الويب (WordPress, Laravel)، CMS، E-commerce",
                features: "سهلة التعلم، استضافة رخيصة، مجتمع كبير",
                companies: "Facebook (بداية)، WordPress، Wikipedia",
                salary: "$70,000 - $100,000 سنوياً"
            },
            {
                name: "Swift 🍎",
                level: "intermediate",
                description: "لغة Apple الرسمية",
                uses: "تطبيقات iOS، macOS، watchOS، tvOS",
                features: "حديثة، آمنة، سريعة، مدعومة من Apple",
                companies: "Apple، Uber، Airbnb، LinkedIn",
                salary: "$95,000 - $135,000 سنوياً"
            },
            {
                name: "Kotlin 🚀",
                level: "intermediate",
                description: "اللغة الرسمية لـ Android",
                uses: "تطبيقات Android، Backend (Spring)، Multiplatform",
                features: "متوافقة مع Java، أقل كود، Null Safety",
                companies: "Google، Pinterest، Trello، Netflix",
                salary: "$90,000 - $130,000 سنوياً"
            },
            {
                name: "TypeScript 📘",
                level: "intermediate",
                description: "JavaScript مع Type System",
                uses: "تطبيقات ويب كبيرة، Angular، React، Node.js",
                features: "Type Safety، أدوات تطوير أفضل، أخطاء أقل",
                companies: "Microsoft، Google، Airbnb، Slack",
                salary: "$90,000 - $130,000 سنوياً"
            },
            {
                name: "Ruby 💎",
                level: "beginner",
                description: "لغة أنيقة للويب",
                uses: "تطوير الويب (Ruby on Rails)، Scripting، Prototyping",
                features: "بناء جملة جميل، Rails Framework، Developer Happiness",
                companies: "GitHub، Shopify، Airbnb، Hulu",
                salary: "$85,000 - $120,000 سنوياً"
            }
        ]
    },
    {
        category: "لغات النظم والأداء",
        languages: [
            {
                name: "C ⚙️",
                level: "advanced",
                description: "أم لغات البرمجة",
                uses: "أنظمة التشغيل (Linux)، Embedded Systems، Drivers",
                features: "السرعة القصوى، تحكم كامل، معيار الصناعة",
                companies: "جميع شركات أنظمة التشغيل",
                salary: "$90,000 - $140,000 سنوياً"
            },
            {
                name: "Assembly 🔧",
                level: "advanced",
                description: "لغة منخفضة المستوى",
                uses: "تحسين الأداء، Reverse Engineering، Embedded Systems",
                features: "تحكم مطلق، أقصى أداء",
                companies: "Intel، AMD، شركات Hardware",
                salary: "$95,000 - $150,000 سنوياً"
            }
        ]
    },
    {
        category: "لغات علم البيانات",
        languages: [
            {
                name: "R 📊",
                level: "intermediate",
                description: "لغة التحليل الإحصائي",
                uses: "Data Science، Statistical Analysis، Data Visualization",
                features: "مكتبات إحصائية قوية، Visualization Tools",
                companies: "شركات البحث العلمي، البنوك، التأمين",
                salary: "$85,000 - $125,000 سنوياً"
            },
            {
                name: "MATLAB 🔢",
                level: "intermediate",
                description: "لغة الحسابات الرياضية",
                uses: "الهندسة، البحث العلمي، Simulation، Signal Processing",
                features: "أدوات رياضية متقدمة، Toolboxes متخصصة",
                companies: "NASA، الجامعات، شركات الهندسة",
                salary: "$80,000 - $120,000 سنوياً"
            },
            {
                name: "Julia 🔬",
                level: "intermediate",
                description: "لغة الحوسبة العلمية السريعة",
                uses: "Data Science، Machine Learning، Numerical Computing",
                features: "سرعة C مع سهولة Python",
                companies: "شركات البحث، Federal Reserve، NASA",
                salary: "$95,000 - $135,000 سنوياً"
            }
        ]
    },
    {
        category: "لغات قواعد البيانات",
        languages: [
            {
                name: "SQL 🗄️",
                level: "beginner",
                description: "لغة استعلام قواعد البيانات",
                uses: "إدارة البيانات، MySQL، PostgreSQL، Oracle",
                features: "معيار صناعي، سهلة التعلم، قوية",
                companies: "جميع الشركات تقريباً",
                salary: "$75,000 - $110,000 سنوياً"
            }
        ]
    },
    {
        category: "لغات الويب والتطوير",
        languages: [
            {
                name: "HTML 🌐",
                level: "beginner",
                description: "لغة بناء صفحات الويب",
                uses: "هيكلة صفحات الويب، SEO، Accessibility",
                features: "أساسية لأي مطور ويب، سهلة جداً"
            },
            {
                name: "CSS 🎨",
                level: "beginner",
                description: "لغة تنسيق صفحات الويب",
                uses: "تصميم الواجهات، Responsive Design، Animations",
                features: "Flexbox، Grid، CSS Variables"
            }
        ]
    },
    {
        category: "لغات متقدمة أخرى",
        languages: [
            {
                name: "Scala 🎭",
                level: "advanced",
                description: "لغة Functional + OOP",
                uses: "Big Data (Apache Spark)، Backend Systems",
                companies: "Twitter، LinkedIn، Netflix",
                salary: "$105,000 - $150,000 سنوياً"
            },
            {
                name: "Dart 🎯",
                level: "intermediate",
                description: "لغة Google لتطبيقات الموبايل",
                uses: "Flutter، تطبيقات Cross-Platform",
                companies: "Google، Alibaba، BMW",
                salary: "$85,000 - $125,000 سنوياً"
            },
            {
                name: "Perl 🐪",
                level: "intermediate",
                description: "لغة معالجة النصوص",
                uses: "System Administration، Web Development، Text Processing",
                features: "Regular Expressions قوية، CPAN",
                salary: "$80,000 - $115,000 سنوياً"
            },
            {
                name: "Lua 🌙",
                level: "beginner",
                description: "لغة خفيفة للألعاب",
                uses: "Game Scripting (Roblox)، Embedded Systems",
                features: "خفيفة جداً، سريعة، سهلة التضمين",
                salary: "$70,000 - $105,000 سنوياً"
            },
            {
                name: "Haskell 🔮",
                level: "advanced",
                description: "لغة Functional خالصة",
                uses: "Compilers، Financial Systems، Research",
                features: "Type Safety، Lazy Evaluation",
                salary: "$100,000 - $145,000 سنوياً"
            },
            {
                name: "Elixir 💧",
                level: "intermediate",
                description: "لغة Functional للأنظمة الموزعة",
                uses: "Web Apps (Phoenix)، Real-Time Systems",
                features: "Concurrency ممتازة، Fault Tolerance",
                salary: "$95,000 - $135,000 سنوياً"
            },
            {
                name: "Objective-C 🍏",
                level: "intermediate",
                description: "لغة Apple القديمة",
                uses: "تطبيقات iOS/macOS القديمة، Legacy Code",
                salary: "$85,000 - $120,000 سنوياً"
            },
            {
                name: "Clojure 🔄",
                level: "advanced",
                description: "Lisp حديثة على JVM",
                uses: "Data Processing، Web Development",
                features: "Immutable Data، REPL-driven Development",
                salary: "$105,000 - $145,000 سنوياً"
            },
            {
                name: "Visual Basic .NET 📱",
                level: "beginner",
                description: "لغة Microsoft للمبتدئين",
                uses: "تطبيقات Windows، Business Applications",
                salary: "$70,000 - $100,000 سنوياً"
            },
            {
                name: "Solidity 🔗",
                level: "intermediate",
                description: "لغة العقود الذكية",
                uses: "Ethereum، Smart Contracts، DeFi، NFTs",
                features: "Blockchain Native، مطلوبة جداً",
                salary: "$120,000 - $180,000 سنوياً"
            },
            {
                name: "COBOL 🏛️",
                level: "intermediate",
                description: "لغة الأنظمة القديمة",
                uses: "البنوك، الحكومة، Legacy Systems",
                features: "رواتب عالية لقلة المبرمجين",
                salary: "$85,000 - $130,000 سنوياً"
            },
            {
                name: "Fortran 🚀",
                level: "intermediate",
                description: "لغة الحوسبة العلمية",
                uses: "Numerical Computing، Weather Simulation، Physics",
                companies: "NASA، مراكز الأبحاث",
                salary: "$80,000 - $125,000 سنوياً"
            },
            {
                name: "Groovy 🎵",
                level: "intermediate",
                description: "لغة ديناميكية على JVM",
                uses: "Gradle (Build Tool)، Testing، Scripting",
                salary: "$85,000 - $120,000 سنوياً"
            },
            {
                name: "F# 📐",
                level: "advanced",
                description: "لغة Functional على .NET",
                uses: "Data Science، Financial Modeling، Web Development",
                salary: "$95,000 - $135,000 سنوياً"
            },
            {
                name: "Racket 🎪",
                level: "advanced",
                description: "لغة Lisp للتعليم والبحث",
                uses: "Programming Language Research، Education",
                features: "Macros قوية، DSL Creation"
            }
        ]
    }
];

// Load languages content
function loadLanguagesContent() {
    const container = document.getElementById('languages');
    
    let html = `
        <h2>موسوعة لغات البرمجة الشاملة</h2>
        
        <input type="text" class="search-box" id="lang-search" placeholder="ابحث عن لغة برمجة..." onkeyup="searchLanguages()">
        
        <div class="info-box">
            <h4>ما هي لغة البرمجة؟</h4>
            <p>لغة البرمجة هي مجموعة من الأوامر والقواعد التي يستخدمها المبرمج للتواصل مع الكمبيوتر وإنشاء البرامج والتطبيقات.</p>
        </div>

        <div id="languages-container">
    `;

    let languageNumber = 1;
    
    programmingLanguages.forEach(category => {
        html += `<h3 style="color: #2c3e50; margin: 30px 0 20px;">${category.category}</h3>`;
        
        category.languages.forEach(lang => {
            const levelClass = lang.level === 'beginner' ? 'level-beginner' : 
                              lang.level === 'intermediate' ? 'level-intermediate' : 'level-advanced';
            const levelText = lang.level === 'beginner' ? 'للمبتدئين' :
                             lang.level === 'intermediate' ? 'متوسط' : 'متقدم';
            
            html += `
                <div class="language-card">
                    <h4>${languageNumber}. ${lang.name}</h4>
                    <span class="level ${levelClass}">${levelText}</span>
                    <p><strong>الوصف:</strong> ${lang.description}</p>
                    ${lang.uses ? `<p><strong>الاستخدامات:</strong> ${lang.uses}</p>` : ''}
                    ${lang.features ? `<p><strong>المميزات:</strong> ${lang.features}</p>` : ''}
                    ${lang.companies ? `<p><strong>الشركات:</strong> ${lang.companies}</p>` : ''}
                    ${lang.salary ? `<p><strong>متوسط الراتب:</strong> ${lang.salary}</p>` : ''}
                </div>
            `;
            languageNumber++;
        });
    });
    
    html += `
        </div>
        
        <div class="info-box">
            <h4>كيف تختار اللغة المناسبة؟</h4>
            <p><strong>للمبتدئين:</strong> Python، JavaScript، Ruby</p>
            <p><strong>لتطوير الويب:</strong> JavaScript، Python، PHP، Ruby</p>
            <p><strong>للألعاب:</strong> C++، C#، Lua</p>
            <p><strong>للذكاء الاصطناعي:</strong> Python، R، Julia</p>
            <p><strong>للأداء العالي:</strong> C++، Rust، C، Go</p>
            <p><strong>للموبايل:</strong> Swift (iOS)، Kotlin (Android)، Dart (Flutter)</p>
            <p><strong>للبلوك تشين:</strong> Solidity، Rust، Go</p>
        </div>
    `;
    
    container.innerHTML = html;
}

// Search languages function
function searchLanguages() {
    const searchTerm = document.getElementById('lang-search').value.toLowerCase();
    const cards = document.querySelectorAll('#languages-container .language-card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Export functions
window.loadLanguagesContent = loadLanguagesContent;
window.searchLanguages = searchLanguages;