// Encryption Section JavaScript

const encryptionAlgorithms = [
    {
        category: "التشفير المتماثل (Symmetric)",
        algorithms: [
            {
                name: "AES (Advanced Encryption Standard) 🔐",
                type: "تشفير متماثل حديث - Block Cipher",
                description: "المعيار العالمي للتشفير، يستخدم مفتاح واحد للتشفير وفك التشفير",
                keySize: "128، 192، 256 بت",
                blockSize: "128 بت",
                uses: "تشفير الملفات، VPN، SSL/TLS، البنوك، WiFi (WPA2/3)",
                strength: "غير قابل للكسر عملياً مع 256 بت",
                speed: "سريع جداً مع تسريع Hardware"
            },
            {
                name: "DES (Data Encryption Standard) 🔓",
                type: "تشفير متماثل قديم",
                keySize: "56 بت (ضعيف الآن)",
                description: "كان المعيار السابق، تم استبداله بـ AES",
                status: "❌ غير آمن - يمكن كسره في ساعات"
            },
            {
                name: "3DES (Triple DES) 🔒",
                type: "تشفير متماثل",
                keySize: "168 بت فعلياً",
                description: "يطبق DES ثلاث مرات",
                status: "⚠️ قديم - يتم استبداله بـ AES",
                uses: "بعض الأنظمة المصرفية القديمة"
            },
            {
                name: "ChaCha20 ⚡",
                type: "Stream Cipher حديث",
                description: "بديل حديث وسريع لـ AES من Google",
                keySize: "256 بت",
                uses: "TLS 1.3، VPN، Google Chrome، WhatsApp",
                features: "أسرع من AES على الأجهزة بدون تسريع Hardware",
                security: "✅ آمن جداً"
            },
            {
                name: "Blowfish 🐡",
                type: "تشفير متماثل",
                keySize: "32-448 بت",
                description: "سريع وآمن، بديل مجاني لـ DES",
                uses: "Password Hashing، bcrypt"
            },
            {
                name: "Twofish 🐟",
                type: "تشفير متماثل",
                keySize: "128، 192، 256 بت",
                description: "خليفة Blowfish، كان منافساً لـ AES",
                features: "آمن جداً، سريع على Software"
            },
            {
                name: "RC4 (Rivest Cipher 4) ⚠️",
                type: "Stream Cipher",
                description: "كان شائعاً في SSL/TLS",
                status: "❌ غير آمن - تم حظره",
                problem: "ثغرات أمنية عديدة"
            },
            {
                name: "Salsa20 🌶️",
                type: "Stream Cipher",
                description: "سلف ChaCha20",
                uses: "بعض أنظمة التشفير",
                features: "سريع جداً، آمن"
            }
        ]
    },
    {
        category: "التشفير غير المتماثل (Asymmetric)",
        algorithms: [
            {
                name: "RSA (Rivest-Shamir-Adleman) 🔑",
                type: "تشفير غير متماثل",
                description: "مفتاحان: عام (للتشفير) وخاص (لفك التشفير)",
                keySize: "2048-4096 بت موصى به",
                uses: "SSL/TLS، التوقيع الرقمي، SSH، PGP",
                basis: "صعوبة تحليل الأعداد الكبيرة إلى عواملها الأولية",
                speed: "بطيء مقارنة بالتشفير المتماثل"
            },
            {
                name: "ECC (Elliptic Curve Cryptography) 📈",
                type: "تشفير غير متماثل",
                description: "يستخدم المنحنيات الإهليلجية",
                advantage: "256 بت ECC = أمان 3072 بت RSA",
                uses: "Bitcoin، TLS، الهواتف الذكية، IoT",
                curves: "P-256، Curve25519",
                features: "مفاتيح أصغر، أسرع، أكثر كفاءة"
            },
            {
                name: "Diffie-Hellman (DH) 🤝",
                type: "تبادل المفاتيح",
                description: "يسمح لطرفين بإنشاء مفتاح سري مشترك عبر قناة غير آمنة",
                uses: "TLS، VPN، SSH",
                basis: "مسألة اللوغاريتم المنفصل"
            },
            {
                name: "DSA (Digital Signature Algorithm) ✍️",
                type: "التوقيع الرقمي",
                description: "للتحقق من صحة الرسائل",
                uses: "SSH، SSL Certificates",
                keySize: "1024-3072 بت"
            },
            {
                name: "ElGamal 🎰",
                type: "تشفير غير متماثل",
                description: "يعتمد على مسألة اللوغاريتم المنفصل",
                uses: "PGP، GNU Privacy Guard"
            }
        ]
    },
    {
        category: "دوال التجزئة (Hash Functions)",
        algorithms: [
            {
                name: "SHA-256 (Secure Hash Algorithm) #️⃣",
                type: "دالة تجزئة",
                description: "تحول أي بيانات إلى 256 بت فريد",
                uses: "Bitcoin، التوقيع الرقمي، التحقق من الملفات",
                features: "لا يمكن عكسه، collision-resistant",
                security: "✅ آمن جداً"
            },
            {
                name: "SHA-3 🔱",
                type: "دالة تجزئة حديثة",
                description: "أحدث معيار SHA",
                sizes: "SHA3-224، 256، 384، 512",
                basis: "Keccak Algorithm"
            },
            {
                name: "MD5 (Message Digest 5) ❌",
                type: "دالة تجزئة قديمة",
                size: "128 بت",
                status: "❌ غير آمن تماماً - تم كسره",
                currentUse: "فقط لفحص سلامة الملفات (checksums)"
            },
            {
                name: "SHA-1 ⚠️",
                type: "دالة تجزئة",
                size: "160 بت",
                status: "❌ غير آمن - تم حظره",
                problem: "إمكانية Collision Attacks"
            },
            {
                name: "BLAKE2 🌠",
                type: "دالة تجزئة حديثة",
                description: "أسرع من SHA-256 وأكثر أماناً من MD5",
                uses: "Password Hashing، التحقق من البيانات"
            },
            {
                name: "bcrypt 🔐",
                type: "Password Hashing",
                description: "مصمم خصيصاً لتخزين كلمات المرور",
                features: "بطيء عمداً، Salt مدمج",
                uses: "تخزين كلمات مرور المستخدمين"
            },
            {
                name: "Argon2 🏆",
                type: "Password Hashing",
                description: "فائز مسابقة Password Hashing (2015)",
                features: "مقاوم لهجمات GPU/ASIC",
                types: "Argon2i، Argon2d، Argon2id"
            }
        ]
    },
    {
        category: "التشفير الكمي والمتقدم",
        algorithms: [
            {
                name: "Quantum Cryptography 🔬",
                type: "تشفير كمي",
                description: "يستخدم مبادئ ميكانيكا الكم",
                advantage: "لا يمكن اختراقه نظرياً",
                status: "قيد التطوير والبحث"
            },
            {
                name: "Post-Quantum Cryptography 🚀",
                type: "تشفير مقاوم للكم",
                description: "خوارزميات مصممة لمقاومة الحواسيب الكمية",
                examples: "CRYSTALS-Kyber، CRYSTALS-Dilithium",
                importance: "الاستعداد لعصر الحوسبة الكمية"
            }
        ]
    },
    {
        category: "التشفير الكلاسيكي (تاريخي)",
        algorithms: [
            {
                name: "Caesar Cipher 🏛️",
                type: "تشفير إزاحة",
                description: "إزاحة كل حرف بعدد ثابت",
                example: "A → D (إزاحة 3)",
                status: "❌ للتعليم فقط - سهل الكسر"
            },
            {
                name: "Vigenère Cipher 📜",
                type: "تشفير متعدد الأبجدية",
                description: "يستخدم كلمة مفتاح",
                status: "❌ للتعليم فقط - يمكن كسره"
            },
            {
                name: "ROT13 🔄",
                type: "تشفير إزاحة بسيط",
                description: "إزاحة 13 حرف (نصف الأبجدية)",
                use: "إخفاء Spoilers، نكات"
            },
            {
                name: "Atbash Cipher 🔁",
                type: "تشفير استبدال",
                description: "عكس ترتيب الأبجدية",
                example: "A ↔ Z, B ↔ Y"
            }
        ]
    }
];

// Load encryption content
function loadEncryptionContent() {
    const container = document.getElementById('encryption');
    
    let html = `
        <h2>موسوعة خوارزميات التشفير</h2>
        
        <input type="text" class="search-box" id="encrypt-search" placeholder="ابحث عن خوارزمية تشفير..." onkeyup="searchEncryption()">
        
        <div class="info-box">
            <h4>ما هو التشفير؟</h4>
            <p>التشفير هو علم حماية المعلومات عن طريق تحويلها لصيغة غير مقروءة باستخدام خوارزميات رياضية.</p>
        </div>

        <div id="encryption-container">
    `;

    let algorithmNumber = 1;
    
    encryptionAlgorithms.forEach(category => {
        html += `<h3 style="color: #2c3e50; margin: 30px 0 20px;">${category.category}</h3>`;
        
        category.algorithms.forEach(algo => {
            html += `
                <div class="language-card">
                    <h4>${algorithmNumber}. ${algo.name}</h4>
                    <p><strong>النوع:</strong> ${algo.type}</p>
                    <p><strong>الوصف:</strong> ${algo.description}</p>
                    ${algo.keySize ? `<p><strong>حجم المفتاح:</strong> ${algo.keySize}</p>` : ''}
                    ${algo.blockSize ? `<p><strong>حجم البلوك:</strong> ${algo.blockSize}</p>` : ''}
                    ${algo.uses ? `<p><strong>الاستخدامات:</strong> ${algo.uses}</p>` : ''}
                    ${algo.features ? `<p><strong>المميزات:</strong> ${algo.features}</p>` : ''}
                    ${algo.status ? `<p><strong>الحالة:</strong> ${algo.status}</p>` : ''}
                    ${algo.security ? `<p><strong>الأمان:</strong> ${algo.security}</p>` : ''}
                    ${algo.speed ? `<p><strong>السرعة:</strong> ${algo.speed}</p>` : ''}
                    ${algo.problem ? `<p><strong>المشكلة:</strong> ${algo.problem}</p>` : ''}
                    ${algo.basis ? `<p><strong>الأساس:</strong> ${algo.basis}</p>` : ''}
                    ${algo.advantage ? `<p><strong>المميزة:</strong> ${algo.advantage}</p>` : ''}
                    ${algo.example ? `<p><strong>مثال:</strong> ${algo.example}</p>` : ''}
                </div>
            `;
            algorithmNumber++;
        });
    });
    
    html += `
        </div>

        <h3 style="color: #2c3e50; margin: 30px 0 20px;">المحاكي التفاعلي</h3>

        <div class="encryption-demo">
            <div class="demo-panel">
                <h4>النص الأصلي</h4>
                <textarea id="plain-text" class="lab-input" style="height: 100px;" placeholder="أدخل النص (بالإنجليزية)">Hello World</textarea>
                <input type="text" id="encryption-key" class="lab-input" placeholder="مفتاح التشفير (رقم للإزاحة)" value="3">
                <div class="controls">
                    <select id="encryption-method" style="padding: 10px; border-radius: 8px; border: 1px solid #ddd; margin-left: 10px;">
                        <option value="caesar">Caesar Cipher</option>
                        <option value="rot13">ROT13</option>
                        <option value="base64">Base64</option>
                        <option value="reverse">عكس النص</option>
                        <option value="atbash">Atbash Cipher</option>
                        <option value="vigenere">Vigenère Cipher</option>
                    </select>
                    <button class="btn" onclick="encryptText()">تشفير</button>
                </div>
            </div>
            
            <div class="demo-panel">
                <h4>النص المشفر</h4>
                <textarea id="encrypted-text" class="lab-input" style="height: 100px;" readonly></textarea>
                <button class="btn btn-success" onclick="decryptText()">فك التشفير</button>
                <div id="decryption-result" class="console-output"></div>
            </div>
        </div>

        <div class="info-box" style="border-right-color: #e74c3c;">
            <h4>⚠️ تحذير أمني</h4>
            <p>هذا المحاكي للأغراض التعليمية فقط! لا تستخدمه لتشفير بيانات حقيقية حساسة. استخدم مكتبات تشفير معتمدة في الإنتاج.</p>
        </div>
    `;
    
    container.innerHTML = html;
}

// Search encryption algorithms
function searchEncryption() {
    const searchTerm = document.getElementById('encrypt-search').value.toLowerCase();
    const cards = document.querySelectorAll('#encryption-container .language-card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Encryption functions
function encryptText() {
    const plainText = document.getElementById('plain-text').value;
    const key = document.getElementById('encryption-key').value;
    const method = document.getElementById('encryption-method').value;
    let encrypted = '';

    try {
        switch(method) {
            case 'caesar':
                encrypted = caesarCipher(plainText, parseInt(key) || 3);
                break;
            case 'rot13':
                encrypted = rot13(plainText);
                break;
            case 'base64':
                encrypted = btoa(plainText);
                break;
            case 'reverse':
                encrypted = plainText.split('').reverse().join('');
                break;
            case 'atbash':
                encrypted = atbashCipher(plainText);
                break;
            case 'vigenere':
                encrypted = vigenereCipher(plainText, key || 'KEY');
                break;
            default:
                encrypted = plainText;
        }
        document.getElementById('encrypted-text').value = encrypted;
        window.logToConsole('decryption-result', '✅ تم التشفير بنجاح!');
    } catch(e) {
        window.logToConsole('decryption-result', '❌ خطأ في التشفير: ' + e.message);
    }
}

function decryptText() {
    const encryptedText = document.getElementById('encrypted-text').value;
    const key = document.getElementById('encryption-key').value;
    const method = document.getElementById('encryption-method').value;
    let decrypted = '';

    try {
        switch(method) {
            case 'caesar':
                decrypted = caesarCipher(encryptedText, -(parseInt(key) || 3));
                break;
            case 'rot13':
                decrypted = rot13(encryptedText);
                break;
            case 'base64':
                decrypted = atob(encryptedText);
                break;
            case 'reverse':
                decrypted = encryptedText.split('').reverse().join('');
                break;
            case 'atbash':
                decrypted = atbashCipher(encryptedText);
                break;
            case 'vigenere':
                decrypted = vigenereDecipher(encryptedText, key || 'KEY');
                break;
            default:
                decrypted = encryptedText;
        }
        window.logToConsole('decryption-result', '✅ تم فك التشفير: ' + decrypted);
    } catch(e) {
        window.logToConsole('decryption-result', '❌ خطأ في فك التشفير: ' + e.message);
    }
}

// Cipher algorithms
function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}

function rot13(text) {
    return caesarCipher(text, 13);
}

function atbashCipher(text) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(base + (25 - (code - base)));
        }
        return char;
    }).join('');
}

function vigenereCipher(text, key) {
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            const shift = key.charCodeAt(keyIndex % key.length) - 65;
            result += String.fromCharCode(((code - base + shift) % 26) + base);
            keyIndex++;
        } else {
            result += char;
        }
    }
    return result;
}

function vigenereDecipher(text, key) {
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            const shift = key.charCodeAt(keyIndex % key.length) - 65;
            result += String.fromCharCode(((code - base - shift + 26) % 26) + base);
            keyIndex++;
        } else {
            result += char;
        }
    }
    return result;
}

// Export functions
window.loadEncryptionContent = loadEncryptionContent;
window.searchEncryption = searchEncryption;
window.encryptText = encryptText;
window.decryptText = decryptText;