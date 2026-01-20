// Translation Dictionary
const translations = {
    "en-IN": { 
        daily: "Daily", weekly: "Weekly", monthly: "Monthly", 
        listening: "Listening...", tap: "Tap to speak", saved: "Saved", total: "Total Expense",
        home: "Home", history: "History", analytics: "Analytics", settings: "Settings",
        todays_tx: "Today's Transactions", categories: "Categories",
        search: "Search transactions...", refresh: "Refresh",
        trend: "Monthly Trend", breakdown: "Category Breakdown",
        change_lang: "Change Language", clear_data: "Clear Data",
        confirm_clear: "Are you sure you want to delete all data?"
    },
    "hi-IN": { 
        daily: "दैनिक", weekly: "साप्ताहिक", monthly: "मासिक", 
        listening: "सुन रहा हूँ...", tap: "बोलने के लिए टैप करें", saved: "सहेज लिया गया", total: "कुल खर्च",
        home: "होम", history: "इतिहास", analytics: "विश्लेषण", settings: "सेटिंग्स",
        todays_tx: "आज का लेनदेन", categories: "श्रेणियाँ",
        search: "लेनदेन खोजें...", refresh: "ताज़ा करें",
        trend: "मासिक रुझान", breakdown: "श्रेणी विवरण",
        change_lang: "भाषा बदलें", clear_data: "डेटा साफ़ करें",
        confirm_clear: "क्या आप वाकई सारा डेटा हटाना चाहते हैं?"
    }
};

// Categories Configuration
const categories = [
    { 
        id: 'food', icon: '🍔', 
        name: { 'en-IN': 'Food', 'hi-IN': 'खाना' }, 
        keywords: ['food', 'khana', 'khaya', 'lunch', 'dinner', 'breakfast', 'tea', 'coffee', 'chai', 'bhojan', 'nashta', 'roti', 'sabji', 'burger', 'pizza', 'khabar', 'jevan'] 
    },
    { 
        id: 'shopping', icon: '🛍️', 
        name: { 'en-IN': 'Shopping', 'hi-IN': 'खरीदारी' }, 
        keywords: ['shopping', 'kharida', 'buy', 'bought', 'shirt', 'pant', 'kapde', 'shoes', 'bajar', 'market', 'mall', 'cloth', 'dress', 'jeans'] 
    },
    { 
        id: 'travel', icon: '🚕', 
        name: { 'en-IN': 'Travel', 'hi-IN': 'यात्रा' }, 
        keywords: ['travel', 'taxi', 'bus', 'train', 'ticket', 'petrol', 'diesel', 'yatra', 'auto', 'cab', 'rickshaw', 'uber', 'ola', 'fare', 'kiraya', 'pravas'] 
    },
    { 
        id: 'recharge', icon: '📱', 
        name: { 'en-IN': 'Recharge', 'hi-IN': 'रिचार्ज' }, 
        keywords: ['recharge', 'topup', 'data', 'plan', 'phone', 'mobile', 'net', 'jio', 'airtel', 'vi', 'bsnl', 'wifi', 'broadband', 'dth', 'dish', 'tv', 'cable', 'tatasky'] 
    },
    { 
        id: 'emi', icon: '🗓️', 
        name: { 'en-IN': 'EMI/Loan', 'hi-IN': 'किस्त/EMI' }, 
        keywords: ['emi', 'loan', 'kist', 'installment', 'finance', 'gadi', 'car', 'bike', 'motorcycle', 'downpayment', 'interest', 'biyaj'] 
    },
    { 
        id: 'entertainment', icon: '🎬', 
        name: { 'en-IN': 'Entertainment', 'hi-IN': 'मनोरंजन' }, 
        keywords: ['movie', 'cinema', 'film', 'netflix', 'prime', 'hotstar', 'subscription', 'game', 'fun', 'picnic', 'tv', 'television', 'cable', 'ott'] 
    },
    { 
        id: 'bills', icon: '💡', 
        name: { 'en-IN': 'Bills', 'hi-IN': 'बिल' }, 
        keywords: ['bill', 'electricity', 'water', 'gas', 'bijli', 'paani', 'light', 'maintenance', 'trash', 'garbage'] 
    },
    { 
        id: 'health', icon: '💊', 
        name: { 'en-IN': 'Health', 'hi-IN': 'सेहत' }, 
        keywords: ['health', 'medicine', 'doctor', 'dawai', 'hospital', 'medical', 'clinic', 'checkup', 'test', 'arogya', 'tablet'] 
    },
    { 
        id: 'investment', icon: '📈', 
        name: { 'en-IN': 'Invest', 'hi-IN': 'निवेश' }, 
        keywords: ['invest', 'stock', 'mutual fund', 'sip', 'gold', 'nivesh', 'fd', 'rd', 'share', 'market'] 
    },
    { 
        id: 'rent', icon: '🏠', 
        name: { 'en-IN': 'Rent', 'hi-IN': 'किराया' }, 
        keywords: ['rent', 'kiraya', 'bhada', 'room', 'house', 'flat'] 
    },
    { 
        id: 'bank', icon: '🏦', 
        name: { 'en-IN': 'Bank', 'hi-IN': 'बैंक' }, 
        keywords: ['bank', 'transfer', 'deposit', 'atm', 'cash', 'upi', 'gpay', 'phonepe', 'paytm', 'withdrawal'] 
    },
    { 
        id: 'other', icon: '📝', 
        name: { 'en-IN': 'Other', 'hi-IN': 'अन्य' }, 
        keywords: [] 
    }
];

// Initialize
const selectedLang = JSON.parse(localStorage.getItem('selectedLang')) || { code: 'en-IN', name: 'English' };
// Helper to safely get translation
const t = (key) => {
    const langObj = translations[selectedLang.code] || translations['en-IN'];
    return langObj[key] || translations['en-IN'][key] || key;
};

// DOM Elements
const btnDaily = document.getElementById('btnDaily');
const btnWeekly = document.getElementById('btnWeekly');
const btnMonthly = document.getElementById('btnMonthly');
const statusText = document.getElementById('statusText');
const micBtn = document.getElementById('micBtn');
const micPulse = document.getElementById('micPulse');
const categoryGrid = document.getElementById('categoryGrid');
const totalLabel = document.getElementById('totalLabel');
const totalAmount = document.getElementById('totalAmount');
const transactionsList = document.getElementById('transactionsList');
const txTitle = document.getElementById('txTitle');

// Chart Instances
let expenseChart = null;
let trendChart = null;
let categoryPieChart = null;

// State
let currentView = 'daily'; // daily, weekly, monthly

// Apply Translations
function applyTranslations() {
    if(btnDaily) btnDaily.textContent = t('daily');
    if(btnWeekly) btnWeekly.textContent = t('weekly');
    if(btnMonthly) btnMonthly.textContent = t('monthly');
    if(statusText) statusText.textContent = t('tap');
    if(totalLabel) totalLabel.textContent = t('total');
    if(txTitle) txTitle.textContent = t('todays_tx');
    
    document.querySelectorAll('.nav-item span').forEach(el => {
        const key = el.innerText.toLowerCase();
        if(translations['en-IN'][key]) el.innerText = t(key);
    });

    const catHeader = document.querySelector('.categories-header h3');
    if(catHeader) catHeader.textContent = t('categories');
}

applyTranslations();

// Web Speech API Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = selectedLang.code;
    recognition.interimResults = false;

    recognition.onstart = () => {
        statusText.textContent = t('listening');
        micPulse.style.display = 'block';
    };

    recognition.onend = () => {
        statusText.textContent = t('tap');
        micPulse.style.display = 'none';
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        processSpeech(transcript);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        statusText.textContent = "Error: " + event.error;
        micPulse.style.display = 'none';
    };
} else {
    statusText.textContent = "Browser not supported";
    micBtn.disabled = true;
}

if(micBtn) {
    micBtn.addEventListener('click', () => {
        if (recognition) {
            try {
                recognition.start();
            } catch (e) {
                recognition.stop();
            }
        }
    });
}

// Logic
function processSpeech(text) {
    const amountMatch = text.match(/(\d+(\.\d+)?)/);
    
    if (!amountMatch) {
        statusText.textContent = "No amount found!";
        return;
    }

    const amount = parseFloat(amountMatch[0]);
    let detectedCategory = 'other';
    const lowerText = text.toLowerCase();

    for (const cat of categories) {
        if (cat.id === 'other') continue;
        const keywords = [...cat.keywords];
        const nameEn = cat.name['en-IN'];
        const nameLoc = cat.name[selectedLang.code];
        if (nameEn) keywords.push(nameEn.toLowerCase());
        if (nameLoc) keywords.push(nameLoc.toLowerCase());

        if (keywords.some(k => lowerText.includes(k))) {
            detectedCategory = cat.id;
            break;
        }
    }

    saveTransaction(amount, detectedCategory, text);
}

function saveTransaction(amount, categoryId, originalText) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    const newTx = {
        id: Date.now(),
        amount: amount,
        category: categoryId,
        date: new Date().toISOString(),
        originalText: originalText
    };

    transactions.unshift(newTx);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    statusText.textContent = t('saved');
    updateUI();

    setTimeout(() => {
        statusText.textContent = t('tap');
    }, 2000);
}

function getCategoryName(id) {
    const cat = categories.find(c => c.id === id);
    if (!cat) return id;
    return cat.name[selectedLang.code] || cat.name['en-IN'] || id;
}

function getCategoryIcon(id) {
    const cat = categories.find(c => c.id === id);
    return cat ? cat.icon : '📝';
}

function updateUI() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const now = new Date();
    
    const filteredTx = transactions.filter(tx => {
        const txDate = new Date(tx.date);
        
        if (currentView === 'daily') {
            return txDate.getDate() === now.getDate() &&
                   txDate.getMonth() === now.getMonth() &&
                   txDate.getFullYear() === now.getFullYear();
        } else if (currentView === 'weekly') {
            const diffTime = Math.abs(now - txDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            return diffDays <= 7;
        } else if (currentView === 'monthly') {
            return txDate.getMonth() === now.getMonth() &&
                   txDate.getFullYear() === now.getFullYear();
        }
        return false;
    });

    // Aggregate Totals
    const catTotals = {};
    let grandTotal = 0;

    categories.forEach(c => catTotals[c.id] = 0);

    filteredTx.forEach(tx => {
        if (catTotals[tx.category] !== undefined) {
            catTotals[tx.category] += tx.amount;
        } else {
            catTotals['other'] = (catTotals['other'] || 0) + tx.amount;
        }
        grandTotal += tx.amount;
    });

    totalAmount.textContent = `₹${grandTotal}`;

    // Render Categories
    categoryGrid.innerHTML = '';
    categories.forEach(cat => {
        const amount = catTotals[cat.id] || 0;
        const catName = getCategoryName(cat.id);
        
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-name">${catName}</span>
            <span class="cat-amount">₹${amount}</span>
        `;
        
        categoryGrid.appendChild(card);
    });

    // Render Transactions List (Home Page)
    transactionsList.innerHTML = '';
    filteredTx.slice(0, 10).forEach(tx => { // Show top 10
        const item = document.createElement('div');
        item.className = 'transaction-item';
        
        const catName = getCategoryName(tx.category);
        const icon = getCategoryIcon(tx.category);
        const time = new Date(tx.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        item.innerHTML = `
            <div class="tx-icon">${icon}</div>
            <div class="tx-details">
                <span class="tx-category">${catName}</span>
                <span class="tx-time">${time}</span>
            </div>
            <div class="tx-amount">₹${tx.amount}</div>
        `;
        transactionsList.appendChild(item);
    });

    // Update Chart
    renderChart(catTotals);
}

function renderChart(data) {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    const labels = [];
    const values = [];
    
    categories.forEach(cat => {
        if (data[cat.id] > 0) {
            labels.push(getCategoryName(cat.id));
            values.push(data[cat.id]);
        }
    });

    if (expenseChart) expenseChart.destroy();

    expenseChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED', '#76A346'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: 'white' } }
            }
        }
    });
}

function filterView(type) {
    currentView = type;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(type === 'daily') document.getElementById('btnDaily').classList.add('active');
    if(type === 'weekly') document.getElementById('btnWeekly').classList.add('active');
    if(type === 'monthly') document.getElementById('btnMonthly').classList.add('active');
    
    updateUI();
}

// --- Navigation Logic ---

function switchSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.view-section').forEach(el => el.style.display = 'none');
    
    // Show selected section
    const target = document.getElementById(`section-${sectionId}`);
    if (target) {
        target.style.display = 'block';
        target.style.animation = 'none'; // reset animation
        target.offsetHeight; /* trigger reflow */
        target.style.animation = 'fadeIn 0.4s ease-out';
    }

    // Update Sidebar Active State
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const navId = 'nav' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    const navEl = document.getElementById(navId);
    if(navEl) navEl.classList.add('active');

    // Trigger Renderers
    if (sectionId === 'history') renderHistory();
    if (sectionId === 'analytics') renderAnalytics();
}

// --- History Logic ---

function renderHistory() {
    const list = document.getElementById('fullHistoryList');
    const searchVal = document.getElementById('historySearch').value.toLowerCase();
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    list.innerHTML = '';

    const filtered = transactions.filter(tx => {
        const catName = getCategoryName(tx.category).toLowerCase();
        const original = (tx.originalText || '').toLowerCase();
        return catName.includes(searchVal) || original.includes(searchVal);
    });

    if(filtered.length === 0) {
        list.innerHTML = '<p style="text-align:center; opacity:0.5;">No transactions found</p>';
        return;
    }

    filtered.forEach(tx => {
        const item = document.createElement('div');
        item.className = 'transaction-item';
        
        const catName = getCategoryName(tx.category);
        const icon = getCategoryIcon(tx.category);
        const date = new Date(tx.date).toLocaleDateString();
        const time = new Date(tx.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        item.innerHTML = `
            <div class="tx-icon">${icon}</div>
            <div class="tx-details">
                <span class="tx-category">${catName}</span>
                <span class="tx-time">${date} • ${time}</span>
                <small style="opacity:0.6; display:block;">"${tx.originalText || ''}"</small>
            </div>
            <div class="tx-amount" style="margin-right: 15px;">₹${tx.amount}</div>
            <button class="action-btn danger" style="padding: 5px 10px; font-size: 0.8rem;" onclick="deleteTransaction(${tx.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        list.appendChild(item);
    });
}

function deleteTransaction(id) {
    if(!confirm("Delete this transaction?")) return;
    
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions = transactions.filter(tx => tx.id !== id);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    renderHistory();
    updateUI(); // Refresh home stats if they changed
}

document.getElementById('historySearch')?.addEventListener('input', renderHistory);

// --- Analytics Logic ---

function renderAnalytics() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    // 1. Monthly Trend Data (Last 6 Months)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    const trendLabels = [];
    const trendData = [];

    for (let i = 5; i >= 0; i--) {
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const monthName = months[d.getMonth()];
        trendLabels.push(monthName);
        
        // Calculate total for this month
        const monthlyTotal = transactions.reduce((sum, tx) => {
            const txDate = new Date(tx.date);
            if (txDate.getMonth() === d.getMonth() && txDate.getFullYear() === d.getFullYear()) {
                return sum + tx.amount;
            }
            return sum;
        }, 0);
        trendData.push(monthlyTotal);
    }

    // Render Trend Chart
    const trendCtx = document.getElementById('trendChart').getContext('2d');
    if (trendChart) trendChart.destroy();

    trendChart = new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: trendLabels,
            datasets: [{
                label: 'Monthly Expense',
                data: trendData,
                borderColor: '#FFD700',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: 'white' } }
            },
            scales: {
                y: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                x: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } }
            }
        }
    });

    // 2. Category Breakdown (Pie Chart)
    const catTotals = {};
    categories.forEach(c => catTotals[c.id] = 0);
    transactions.forEach(tx => {
        if (catTotals[tx.category] !== undefined) catTotals[tx.category] += tx.amount;
        else catTotals['other'] = (catTotals['other'] || 0) + tx.amount;
    });

    const pieLabels = [];
    const pieValues = [];
    categories.forEach(cat => {
        if (catTotals[cat.id] > 0) {
            pieLabels.push(getCategoryName(cat.id));
            pieValues.push(catTotals[cat.id]);
        }
    });

    const pieCtx = document.getElementById('categoryPieChart').getContext('2d');
    if (categoryPieChart) categoryPieChart.destroy();

    categoryPieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: pieLabels,
            datasets: [{
                data: pieValues,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED', '#76A346'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { color: 'white' } }
            }
        }
    });
}

// --- Settings Logic ---

function clearAllData() {
    if(confirm(t('confirm_clear'))) {
        localStorage.removeItem('transactions');
        alert("All data cleared.");
        window.location.reload();
    }
}

// --- Profile Logic ---

const profileModal = document.getElementById('profileModal');
const userNameInput = document.getElementById('userNameInput');
const sidebarUserName = document.getElementById('sidebarUserName');

function loadProfile() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        if(sidebarUserName) sidebarUserName.textContent = savedName;
    }
}

function openProfileModal() {
    if(profileModal) {
        profileModal.style.display = 'flex';
        const savedName = localStorage.getItem('userName');
        if(savedName && userNameInput) userNameInput.value = savedName;
        if(userNameInput) userNameInput.focus();
    }
}

function closeProfileModal() {
    if(profileModal) profileModal.style.display = 'none';
}

function saveProfile() {
    const name = userNameInput.value.trim();
    if (name) {
        localStorage.setItem('userName', name);
        if(sidebarUserName) sidebarUserName.textContent = name;
        closeProfileModal();
    } else {
        alert("Please enter a valid name.");
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == profileModal) {
        closeProfileModal();
    }
}

// Initialize Profile
loadProfile();

// Initial Render
updateUI();
