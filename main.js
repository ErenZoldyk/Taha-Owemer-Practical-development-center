// Main JavaScript File - Core Functionality

// Tab switching functionality
function switchTab(tabName) {
    // Hide all tab contents
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all nav tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
        
        // Load content dynamically based on tab
        if (tabName === 'languages' && !selectedTab.hasChildNodes()) {
            loadLanguagesContent();
        } else if (tabName === 'encryption' && !selectedTab.hasChildNodes()) {
            loadEncryptionContent();
        } else if (tabName === 'networking' && !selectedTab.hasChildNodes()) {
            loadNetworkingContent();
        } else if (tabName === 'networks-guide' && !selectedTab.hasChildNodes()) {
            loadNetworksGuideContent();
        } else if (tabName === 'password-security' && !selectedTab.hasChildNodes()) {
            loadPasswordSecurityContent();
        } else if (tabName === 'cybersecurity' && !selectedTab.hasChildNodes()) {
            loadCybersecurityContent();
        } else if (tabName === 'protection-guide' && !selectedTab.hasChildNodes()) {
            loadProtectionGuideContent();
        }
    }
    
    // Update nav tab active state
    navTabs.forEach(tab => {
        if (tab.textContent.includes(getTabTitle(tabName))) {
            tab.classList.add('active');
        }
    });
}

// Get tab title in Arabic
function getTabTitle(tabName) {
    const titles = {
        'dashboard': 'لوحة التحكم',
        'languages': 'لغات البرمجة',
        'encryption': 'التشفير',
        'networking': 'الشبكات',
        'networks-guide': 'دليل الشبكات',
        'password-security': 'كلمات المرور',
        'cybersecurity': 'الأمان السيبراني',
        'protection-guide': 'دليل الحماية'
    };
    return titles[tabName] || '';
}

// Utility function for console logging
function logToConsole(elementId, message) {
    const console = document.getElementById(elementId);
    if (console) {
        const time = new Date().toLocaleTimeString('ar-EG');
        console.innerHTML = `[${time}] > ${message}\n` + console.innerHTML;
        
        // Limit console output to prevent memory issues
        const lines = console.innerHTML.split('\n');
        if (lines.length > 100) {
            console.innerHTML = lines.slice(0, 100).join('\n');
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial tab
    const hash = window.location.hash.substring(1);
    const validTabs = ['dashboard', 'languages', 'encryption', 'networking', 'networks-guide', 'password-security', 'cybersecurity', 'protection-guide'];
    if (hash && validTabs.includes(hash)) {
        switchTab(hash);
    }
    
    // Update URL hash when switching tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.onclick.toString().match(/switchTab\('(\w+)'\)/)[1];
            window.location.hash = tabName;
        });
    });
});

// Export functions for use in other modules
window.switchTab = switchTab;
window.logToConsole = logToConsole;