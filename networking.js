// Networking Section JavaScript

// Global variables for networking
let selectedDevice = 'router';
let networkDevices = [];
let networkConnections = [];
let packetCount = 0;
let deviceIdCounter = 1;
let canvas, ctx;
let animationFrameId = null;
let selectedDevicesForConnection = [];

// Device configurations
const deviceConfigs = {
    router: { icon: '🌐', color: '#3498db', size: 40, name: 'Router' },
    switch: { icon: '🔀', color: '#2ecc71', size: 35, name: 'Switch' },
    computer: { icon: '💻', color: '#9b59b6', size: 35, name: 'Computer' },
    server: { icon: '🖥️', color: '#e67e22', size: 40, name: 'Server' },
    firewall: { icon: '🛡️', color: '#e74c3c', size: 35, name: 'Firewall' },
    wireless: { icon: '📡', color: '#f39c12', size: 35, name: 'Wireless AP' }
};

// Load networking content
function loadNetworkingContent() {
    const container = document.getElementById('networking');
    
    let html = `
        <h2>محاكي الشبكات المتقدم</h2>
        
        <div class="info-box">
            <h4>بناء شبكتك التفاعلية</h4>
            <p>استخدم الأجهزة المختلفة لبناء شبكة متكاملة ومراقبة تدفق البيانات</p>
        </div>

        <div class="device-selector">
            <div class="device-btn active" onclick="selectDevice('router', this)">
                🌐 Router
            </div>
            <div class="device-btn" onclick="selectDevice('switch', this)">
                🔀 Switch
            </div>
            <div class="device-btn" onclick="selectDevice('computer', this)">
                💻 Computer
            </div>
            <div class="device-btn" onclick="selectDevice('server', this)">
                🖥️ Server
            </div>
            <div class="device-btn" onclick="selectDevice('firewall', this)">
                🛡️ Firewall
            </div>
            <div class="device-btn" onclick="selectDevice('wireless', this)">
                📡 Wireless AP
            </div>
        </div>

        <div class="controls">
            <button class="btn" onclick="addNetworkDevice()">إضافة جهاز</button>
            <button class="btn" onclick="connectDevices()">ربط أجهزة</button>
            <button class="btn btn-success" onclick="sendNetworkPacket()">إرسال حزمة</button>
            <button class="btn" onclick="scanNetwork()">مسح الشبكة</button>
            <button class="btn btn-danger" onclick="clearNetwork()">مسح الكل</button>
        </div>

        <canvas id="network-canvas" class="network-canvas" width="800" height="500"></canvas>

        <div class="network-info">
            <h4>معلومات الشبكة:</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin: 10px 0;">
                <div><strong>الأجهزة:</strong> <span id="device-count">0</span></div>
                <div><strong>الاتصالات:</strong> <span id="connection-count">0</span></div>
                <div><strong>الحزم:</strong> <span id="packet-count">0</span></div>
                <div><strong>النطاق:</strong> <span id="bandwidth-usage">0%</span></div>
            </div>
            <div id="network-topology" class="console-output" style="height: 100px;"></div>
        </div>

        <div class="info-box">
            <h4>سيناريوهات الشبكة الجاهزة:</h4>
            <div class="controls">
                <button class="btn" onclick="loadScenario('home-network')">🏠 شبكة منزلية</button>
                <button class="btn" onclick="loadScenario('office-network')">🏢 شبكة مكتب</button>
                <button class="btn" onclick="loadScenario('data-center')">🔥 مركز البيانات</button>
            </div>
        </div>

        <div class="info-box">
            <h4>أنواع الأجهزة:</h4>
            <p><strong>Router:</strong> يربط الشبكات المختلفة ويوجه البيانات</p>
            <p><strong>Switch:</strong> يربط الأجهزة في نفس الشبكة المحلية</p>
            <p><strong>Firewall:</strong> يحمي الشبكة من التهديدات الخارجية</p>
            <p><strong>Server:</strong> يقدم الخدمات للأجهزة الأخرى</p>
            <p><strong>Computer:</strong> جهاز المستخدم النهائي</p>
            <p><strong>Wireless AP:</strong> نقطة وصول لاسلكية</p>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Initialize canvas after content is loaded
    setTimeout(() => {
        initializeNetworkCanvas();
    }, 100);
}

// Initialize network canvas
function initializeNetworkCanvas() {
    canvas = document.getElementById('network-canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        canvas.addEventListener('click', handleCanvasClick);
        drawNetwork();
        updateNetworkInfo();
    }
}

// Device selection
function selectDevice(deviceType, button) {
    selectedDevice = deviceType;
    document.querySelectorAll('.device-btn').forEach(btn => btn.classList.remove('active'));
    if (button) button.classList.add('active');
}

// Add device to network
function addNetworkDevice() {
    if (!canvas) return;
    
    const x = Math.random() * (canvas.width - 100) + 50;
    const y = Math.random() * (canvas.height - 100) + 50;
    
    const device = {
        id: deviceIdCounter++,
        type: selectedDevice,
        x: x,
        y: y,
        config: deviceConfigs[selectedDevice],
        selected: false,
        ip: `192.168.1.${deviceIdCounter}`
    };
    
    networkDevices.push(device);
    drawNetwork();
    updateNetworkInfo();
    logToNetworkConsole(`✅ تمت إضافة ${device.config.name} #${device.id} - IP: ${device.ip}`);
}

// Handle canvas click
function handleCanvasClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Check if clicked on a device
    networkDevices.forEach(device => {
        const dx = x - device.x;
        const dy = y - device.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 30) {
            device.selected = !device.selected;
            drawNetwork();
        }
    });
}

// Connect selected devices
function connectDevices() {
    const selected = networkDevices.filter(d => d.selected);
    
    if (selected.length === 2) {
        // Check if connection already exists
        const exists = networkConnections.some(conn => 
            (conn.from.id === selected[0].id && conn.to.id === selected[1].id) ||
            (conn.from.id === selected[1].id && conn.to.id === selected[0].id)
        );
        
        if (!exists) {
            const connection = {
                from: selected[0],
                to: selected[1],
                id: networkConnections.length + 1
            };
            networkConnections.push(connection);
            
            selected.forEach(d => d.selected = false);
            drawNetwork();
            updateNetworkInfo();
            logToNetworkConsole(`🔗 تم ربط ${selected[0].config.name} #${selected[0].id} مع ${selected[1].config.name} #${selected[1].id}`);
        } else {
            alert('الاتصال موجود بالفعل!');
        }
    } else {
        alert('الرجاء اختيار جهازين بالضبط للربط بينهما');
    }
}

// Send network packet
function sendNetworkPacket() {
    if (networkDevices.length < 2 || networkConnections.length < 1) {
        alert('يجب وجود جهازين متصلين على الأقل');
        return;
    }
    
    packetCount++;
    updateNetworkInfo();
    
    const connection = networkConnections[Math.floor(Math.random() * networkConnections.length)];
    animatePacket(connection);
    
    logToNetworkConsole(`📦 حزمة #${packetCount} من ${connection.from.config.name} إلى ${connection.to.config.name}`);
}

// Animate packet transmission
function animatePacket(connection) {
    let progress = 0;
    const animate = () => {
        progress += 0.02;
        if (progress <= 1) {
            drawNetwork();
            
            // Draw packet
            const x = connection.from.x + (connection.to.x - connection.from.x) * progress;
            const y = connection.from.y + (connection.to.y - connection.from.y) * progress;
            
            ctx.fillStyle = '#e74c3c';
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
            
            animationFrameId = requestAnimationFrame(animate);
        } else {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        }
    };
    animate();
}

// Scan network
function scanNetwork() {
    logToNetworkConsole('🔍 جاري مسح الشبكة...');
    
    setTimeout(() => {
        networkDevices.forEach(device => {
            logToNetworkConsole(`📍 ${device.config.name} #${device.id} - IP: ${device.ip}`);
        });
        
        if (networkDevices.length > 0) {
            logToNetworkConsole(`✅ تم العثور على ${networkDevices.length} جهاز`);
        } else {
            logToNetworkConsole('❌ لم يتم العثور على أجهزة');
        }
    }, 500);
}

// Clear network
function clearNetwork() {
    if (confirm('هل تريد مسح الشبكة بالكامل؟')) {
        networkDevices = [];
        networkConnections = [];
        packetCount = 0;
        deviceIdCounter = 1;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        drawNetwork();
        updateNetworkInfo();
        logToNetworkConsole('🗑️ تم مسح الشبكة بالكامل');
    }
}

// Draw network on canvas
function drawNetwork() {
    if (!ctx || !canvas) return;
    
    // Clear canvas
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
    
    // Draw connections
    networkConnections.forEach(conn => {
        ctx.strokeStyle = '#95a5a6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.stroke();
    });
    
    // Draw devices
    networkDevices.forEach(device => {
        // Draw device icon
        ctx.font = `${device.config.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(device.config.icon, device.x, device.y);
        
        // Draw selection indicator
        if (device.selected) {
            ctx.strokeStyle = '#3498db';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(device.x, device.y, 35, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // Draw device ID
        ctx.font = '12px Arial';
        ctx.fillStyle = '#2c3e50';
        ctx.fillText(`#${device.id}`, device.x, device.y + 30);
    });
}

// Update network information
function updateNetworkInfo() {
    const deviceCount = document.getElementById('device-count');
    const connectionCount = document.getElementById('connection-count');
    const packetCountElement = document.getElementById('packet-count');
    const bandwidthUsage = document.getElementById('bandwidth-usage');
    
    if (deviceCount) deviceCount.textContent = networkDevices.length;
    if (connectionCount) connectionCount.textContent = networkConnections.length;
    if (packetCountElement) packetCountElement.textContent = packetCount;
    
    const bandwidth = Math.min(100, (packetCount * 5) % 100);
    if (bandwidthUsage) bandwidthUsage.textContent = bandwidth + '%';
}

// Log to network console
function logToNetworkConsole(message) {
    window.logToConsole('network-topology', message);
}

// Load network scenarios
function loadScenario(scenario) {
    clearNetwork();
    deviceIdCounter = 1;
    
    switch(scenario) {
        case 'home-network':
            createHomeNetwork();
            break;
        case 'office-network':
            createOfficeNetwork();
            break;
        case 'data-center':
            createDataCenter();
            break;
    }
    
    logToNetworkConsole(`✅ تم تحميل سيناريو: ${scenario}`);
}

// Create home network scenario
function createHomeNetwork() {
    // Router
    networkDevices.push({
        id: deviceIdCounter++,
        type: 'router',
        x: 400,
        y: 100,
        config: deviceConfigs.router,
        ip: `192.168.1.1`
    });
    
    // Wireless AP
    networkDevices.push({
        id: deviceIdCounter++,
        type: 'wireless',
        x: 400,
        y: 250,
        config: deviceConfigs.wireless,
        ip: `192.168.1.2`
    });
    
    // Computers
    for(let i = 0; i < 3; i++) {
        networkDevices.push({
            id: deviceIdCounter++,
            type: 'computer',
            x: 200 + i * 200,
            y: 400,
            config: deviceConfigs.computer,
            ip: `192.168.1.${deviceIdCounter}`
        });
    }
    
    // Connect devices
    networkConnections.push(
        { from: networkDevices[0], to: networkDevices[1], id: 1 },
        { from: networkDevices[1], to: networkDevices[2], id: 2 },
        { from: networkDevices[1], to: networkDevices[3], id: 3 },
        { from: networkDevices[1], to: networkDevices[4], id: 4 }
    );
    
    drawNetwork();
    updateNetworkInfo();
}

// Create office network scenario
function createOfficeNetwork() {
    // Router
    networkDevices.push({
        id: deviceIdCounter++,
        type: 'router',
        x: 400,
        y: 50,
        config: deviceConfigs.router,
        ip: `192.168.1.1`
    });
    
    // Firewall
    networkDevices.push({
        id: deviceIdCounter++,
        type: 'firewall',
        x: 400,
        y: 150,
        config: deviceConfigs.firewall,
        ip: `192.168.1.2`
    });
    
    // Switch
    networkDevices.push({
        id: deviceIdCounter++,
        type: 'switch',
        x: 400,
        y: 250,
        config: deviceConfigs.switch,
        ip: `192.168.1.3`
    });
    
    // Server
    networkDevices.push({
        id: deviceIdCounter++,
        type: 'server',
        x: 600,
        y: 250,
        config: deviceConfigs.server,
        ip: `192.168.1.10`
    });
    
    // Computers
    for(let i = 0; i < 4; i++) {
        networkDevices.push({
            id: deviceIdCounter++,
            type: 'computer',
            x: 150 + i * 150,
            y: 400,
            config: deviceConfigs.computer,
            ip: `192.168.1.${20 + i}`
        });
    }
    
    // Connections
    networkConnections.push(
        { from: networkDevices[0], to: networkDevices[1], id: 1 },
        { from: networkDevices[1], to: networkDevices[2], id: 2 },
        { from: networkDevices[2], to: networkDevices[3], id: 3 },
        { from: networkDevices[2], to: networkDevices[4], id: 4 },
        { from: networkDevices[2], to: networkDevices[5], id: 5 },
        { from: networkDevices[2], to: networkDevices[6], id: 6 },
        { from: networkDevices[2], to: networkDevices[7], id: 7 }
    );
    
    drawNetwork();
    updateNetworkInfo();
}

// Create data center scenario
function createDataCenter() {
    // Routers
    for(let i = 0; i < 2; i++) {
        networkDevices.push({
            id: deviceIdCounter++,
            type: 'router',
            x: 200 + i * 400,
            y: 50,
            config: deviceConfigs.router,
            ip: `10.0.0.${i + 1}`
        });
    }
    
    // Firewalls
    for(let i = 0; i < 2; i++) {
        networkDevices.push({
            id: deviceIdCounter++,
            type: 'firewall',
            x: 200 + i * 400,
            y: 150,
            config: deviceConfigs.firewall,
            ip: `10.0.1.${i + 1}`
        });
    }
    
    // Switches
    for(let i = 0; i < 3; i++) {
        networkDevices.push({
            id: deviceIdCounter++,
            type: 'switch',
            x: 150 + i * 250,
            y: 250,
            config: deviceConfigs.switch,
            ip: `10.0.2.${i + 1}`
        });
    }
    
    // Servers
    for(let i = 0; i < 6; i++) {
        networkDevices.push({
            id: deviceIdCounter++,
            type: 'server',
            x: 100 + i * 120,
            y: 400,
            config: deviceConfigs.server,
            ip: `10.0.10.${i + 1}`
        });
    }
    
    // Complex connections
    networkConnections.push(
        { from: networkDevices[0], to: networkDevices[2], id: 1 },
        { from: networkDevices[1], to: networkDevices[3], id: 2 },
        { from: networkDevices[2], to: networkDevices[4], id: 3 },
        { from: networkDevices[3], to: networkDevices[5], id: 4 },
        { from: networkDevices[2], to: networkDevices[5], id: 5 },
        { from: networkDevices[3], to: networkDevices[6], id: 6 },
        { from: networkDevices[4], to: networkDevices[7], id: 7 },
        { from: networkDevices[4], to: networkDevices[8], id: 8 },
        { from: networkDevices[5], to: networkDevices[9], id: 9 },
        { from: networkDevices[5], to: networkDevices[10], id: 10 },
        { from: networkDevices[6], to: networkDevices[11], id: 11 },
        { from: networkDevices[6], to: networkDevices[12], id: 12 }
    );
    
    drawNetwork();
    updateNetworkInfo();
}

// Export functions
window.loadNetworkingContent = loadNetworkingContent;
window.selectDevice = selectDevice;
window.addNetworkDevice = addNetworkDevice;
window.connectDevices = connectDevices;
window.sendNetworkPacket = sendNetworkPacket;
window.scanNetwork = scanNetwork;
window.clearNetwork = clearNetwork;
window.loadScenario = loadScenario;