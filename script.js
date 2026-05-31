
document.addEventListener('DOMContentLoaded', function() {
    // Hero glow follow mouse
    const hero = document.getElementById('hero');
    const heroGlow = document.querySelector('.hero-glow');
    
    if (hero && heroGlow) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            heroGlow.style.setProperty('--glow-x', `${x}px`);
            heroGlow.style.setProperty('--glow-y', `${y}px`);
        });
    }

    // Role tabs functionality
    const roleTabs = document.querySelectorAll('.role-tab');
    const navRoleBtns = document.querySelectorAll('.nav-role-btn');
    let selectedRole = 'founder';

    // Function to update all role buttons/tabs
    const updateRoleSelection = (role) => {
        selectedRole = role;
        
        // Update hero tabs
        roleTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.role === role) {
                tab.classList.add('active');
            }
        });
        
        // Update nav buttons
        navRoleBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.role === role) {
                btn.classList.add('active');
            }
        });
    };

    // Hero tab click handlers
    roleTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            updateRoleSelection(tab.dataset.role);
        });
    });

    // Nav role button click handlers
    navRoleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateRoleSelection(btn.dataset.role);
            // Also scroll to hero section
            const hero = document.getElementById('hero');
            if (hero) {
                const navbarHeight = 80;
                const targetPosition = hero.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced smooth scroll for nav links with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // List of common disposable email domains
    const disposableEmailDomains = [
        'temp-mail.org', 'tempmail.com', 'tempmail.net', 'tempmail.io',
        'throwawayemail.com', 'throwawaymail.com', 'throwaway-email.com',
        'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org',
        '10minutemail.com', '10minutemail.net', '10minutemail.org',
        'mailinator.com', 'mailinator.net', 'mailinator.org',
        'temp-mail.ru', 'tempmail.fr', 'tempmail.de',
        'temp-mail.info', 'tempmail.xyz', 'tempmail.top',
        'getnada.com', 'getnada.net', 'getnada.org',
        'sharklasers.com', 'guerrillamailblock.com',
        'dispostable.com', 'tempemail.com', 'temp-email.com',
        'fakemailgenerator.com', 'fakemail.net', 'fakeinbox.com',
        'spamgourmet.com', 'spamgourmet.net', 'spamgourmet.org',
        'burnermail.io', 'burnermail.com',
        'anonaddy.com', 'simplelogin.io',
        'emailondeck.com', 'trashmail.com',
        'yopmail.com', 'yopmail.net', 'yopmail.fr', 'yopmail.org',
        'moakt.com', 'moakt.net',
        'tempinbox.com', 'tempmail.fr',
        'temp-mail.fr',
        'tempmail.email',
        'emailtemp.com',
        'tempr.email',
        'temp-mail.us',
        'temp-mail.uk',
        'temp-mail.ca',
        'temp-mail.de',
        'temp-mail.es',
        'temp-mail.it',
        'temp-mail.nl',
        'temp-mail.pl',
        'temp-mail.pt',
        'temp-mail.se',
        'temp-mail.no',
        'temp-mail.dk',
        'temp-mail.fi',
        'temp-mail.gr',
        'temp-mail.hu',
        'temp-mail.ro',
        'temp-mail.bg',
        'temp-mail.hr',
        'temp-mail.si',
        'temp-mail.lt',
        'temp-mail.lv',
        'temp-mail.ee',
        'temp-mail.sk',
        'temp-mail.cz',
        'temp-mail.sk',
        'temp-mail.rs',
        'temp-mail.me',
        'temp-mail.ba',
        'temp-mail.al',
        'temp-mail.mk',
        'temp-mail.ge',
        'temp-mail.am',
        'temp-mail.az',
        'temp-mail.kz',
        'temp-mail.uz',
        'temp-mail.tj',
        'temp-mail.kg',
        'temp-mail.tm',
        'temp-mail.mn',
        'temp-mail.jo',
        'temp-mail.lb',
        'temp-mail.sy',
        'temp-mail.iq',
        'temp-mail.ir',
        'temp-mail.sa',
        'temp-mail.ae',
        'temp-mail.qa',
        'temp-mail.bh',
        'temp-mail.kw',
        'temp-mail.om',
        'temp-mail.ye',
        'temp-mail.il',
        'temp-mail.ps',
        'temp-mail.eg',
        'temp-mail.ly',
        'temp-mail.tn',
        'temp-mail.dz',
        'temp-mail.ma',
        'temp-mail.mr',
        'temp-mail.sn',
        'temp-mail.gm',
        'temp-mail.sl',
        'temp-mail.lr',
        'temp-mail.ci',
        'temp-mail.gh',
        'temp-mail.tg',
        'temp-mail.bj',
        'temp-mail.ne',
        'temp-mail.ng',
        'temp-mail.cm',
        'temp-mail.ga',
        'temp-mail.cg',
        'temp-mail.cd',
        'temp-mail.ao',
        'temp-mail.mw',
        'temp-mail.mz',
        'temp-mail.zm',
        'temp-mail.zw',
        'temp-mail.bw',
        'temp-mail.na',
        'temp-mail.sz',
        'tempmail.co.uk',
        'tempmail.co.in',
        'tempmail.com.au',
        'tempmail.ca',
        'tempmail.co.nz',
        'tempmail.co.za',
        'tempmail.com.br',
        'tempmail.com.mx',
        'tempmail.com.ar',
        'tempmail.com.co',
        'tempmail.com.pe',
        'tempmail.com.ec',
        'tempmail.com.ve',
        'tempmail.com.py',
        'tempmail.com.uy',
        'tempmail.com.bo',
        'tempmail.com.cl',
        'tempmail.com.sv',
        'tempmail.com.gt',
        'tempmail.com.hn',
        'tempmail.com.ni',
        'tempmail.com.cr',
        'tempmail.com.pa',
        'tempmail.com.do',
        'tempmail.com.pr',
        'tempmail.com.vi',
        'tempmail.com.jm',
        'tempmail.com.ht',
        'tempmail.com.tt',
        'tempmail.com.bb',
        'tempmail.com.lc',
        'tempmail.com.vc',
        'tempmail.com.gd',
        'tempmail.com.ag',
        'tempmail.com.dm',
        'tempmail.com.kn',
        'tempmail.com.ai',
        'tempmail.com.ms',
        'tempmail.com.tc',
        'tempmail.com.ky',
        'tempmail.com.bm',
        'tempmail.com.gi',
        'tempmail.com.fo',
        'tempmail.com.gl',
        'tempmail.com.pm',
        'tempmail.com.re',
        'tempmail.com.mf',
        'tempmail.com.bl',
        'tempmail.com.gp',
        'tempmail.com.mq',
        'tempmail.com.gf',
        'tempmail.com.pf',
        'tempmail.com.nc',
        'tempmail.com.wf',
        'tempmail.com.pn',
        'tempmail.com.ck',
        'tempmail.com.nu',
        'tempmail.com.nf',
        'tempmail.com.cx',
        'tempmail.com.cc',
        'tempmail.com.tv',
        'tempmail.com.nr',
        'tempmail.com.fj',
        'tempmail.com.ws',
        'tempmail.com.to',
        'tempmail.com.sb',
        'tempmail.com.vu',
        'tempmail.com.pg',
        'tempmail.com.fm',
        'tempmail.com.mh',
        'tempmail.com.pw',
        'tempmail.com.gu',
        'tempmail.com.mp',
        'tempmail.com.as',
        'tempmail.com.pr',
        'tempmail.com.vi',
        'tempmail.com.mo',
        'tempmail.com.hk',
        'tempmail.com.tw',
        'tempmail.com.mn',
        'tempmail.com.kp',
        'tempmail.com.kr',
        'tempmail.com.jp',
        'tempmail.com.vn',
        'tempmail.com.la',
        'tempmail.com.kh',
        'tempmail.com.th',
        'tempmail.com.my',
        'tempmail.com.sg',
        'tempmail.com.id',
        'tempmail.com.tl',
        'tempmail.com.bn',
        'tempmail.com.ph',
        'tempmail.com.pk',
        'tempmail.com.af',
        'tempmail.com.uz',
        'tempmail.com.tj',
        'tempmail.com.kg',
        'tempmail.com.tm',
        'tempmail.com.kz',
        'tempmail.com.ge',
        'tempmail.com.am',
        'tempmail.com.az',
        'tempmail.com.iq',
        'tempmail.com.ir',
        'tempmail.com.sy',
        'tempmail.com.lb',
        'tempmail.com.jo',
        'tempmail.com.il',
        'tempmail.com.ps',
        'tempmail.com.eg',
        'tempmail.com.ly',
        'tempmail.com.tn',
        'tempmail.com.dz',
        'tempmail.com.ma',
        'tempmail.com.mr',
        'tempmail.com.sn',
        'tempmail.com.gm',
        'tempmail.com.sl',
        'tempmail.com.lr',
        'tempmail.com.ci',
        'tempmail.com.gh',
        'tempmail.com.tg',
        'tempmail.com.bj',
        'tempmail.com.ne',
        'tempmail.com.ng',
        'tempmail.com.cm',
        'tempmail.com.ga',
        'tempmail.com.cg',
        'tempmail.com.cd',
        'tempmail.com.ao',
        'tempmail.com.mw',
        'tempmail.com.mz',
        'tempmail.com.zm',
        'tempmail.com.zw',
        'tempmail.com.bw',
        'tempmail.com.na',
        'tempmail.com.sz',
        'tempmail.com.za'
    ];

    // Waitlist storage functions
    function getWaitlist() {
        const waitlist = localStorage.getItem('fovndx_waitlist');
        return waitlist ? JSON.parse(waitlist) : [];
    }

    function saveToWaitlist(email, role) {
        const waitlist = getWaitlist();
        const newEntry = {
            id: Date.now(),
            email: email,
            role: role,
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleString('en-IN')
        };
        waitlist.push(newEntry);
        localStorage.setItem('fovndx_waitlist', JSON.stringify(waitlist));
        return waitlist;
    }

    // Admin panel - secret access (double-click logo to view)
    let adminPanelVisible = false;
    
    function createAdminPanel() {
        const panel = document.createElement('div');
        panel.id = 'admin-panel';
        panel.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: rgba(10, 10, 10, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.6);
            z-index: 9999;
            max-width: 400px;
            max-height: 80vh;
            overflow-y: auto;
            display: none;
            backdrop-filter: blur(40px);
        `;
        
        panel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="font-family: 'Space Grotesk', sans-serif; margin: 0; color: white;">📊 Waitlist Admin</h3>
                <button id="close-admin" style="background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); padding: 8px 12px; border-radius: 12px; cursor: pointer; font-weight: 500;">Close</button>
            </div>
            <div id="waitlist-stats" style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.04); border-radius: 16px; border: 1px solid rgba(255,255,255,0.06);"></div>
            <div id="waitlist-entries"></div>
            <div style="margin-top: 16px; display: flex; gap: 8px;">
                <button id="clear-waitlist" style="background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2); padding: 10px 16px; border-radius: 12px; cursor: pointer; font-size: 12px; font-weight: 500;">Clear All Data</button>
                <button id="export-waitlist" style="background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2); padding: 10px 16px; border-radius: 12px; cursor: pointer; font-size: 12px; font-weight: 500;">Export CSV</button>
            </div>
        `;
        
        document.body.appendChild(panel);
        
        document.getElementById('close-admin').addEventListener('click', () => {
            panel.style.display = 'none';
            adminPanelVisible = false;
        });
        
        document.getElementById('clear-waitlist').addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all waitlist data?')) {
                localStorage.removeItem('fovndx_waitlist');
                updateAdminPanel();
            }
        });
        
        document.getElementById('export-waitlist').addEventListener('click', exportWaitlistCSV);
        
        return panel;
    }

    function updateAdminPanel() {
        const panel = document.getElementById('admin-panel');
        if (!panel) return;
        
        const waitlist = getWaitlist();
        const statsDiv = document.getElementById('waitlist-stats');
        const entriesDiv = document.getElementById('waitlist-entries');
        
        const roleCounts = waitlist.reduce((acc, entry) => {
            acc[entry.role] = (acc[entry.role] || 0) + 1;
            return acc;
        }, {});
        
        // Define role colors for better UI
        const roleStyles = {
            founder: { bg: 'rgba(22, 163, 74, 0.15)', color: '#22c55e', border: 'rgba(22, 163, 74, 0.3)' },
            builder: { bg: 'rgba(14, 165, 233, 0.15)', color: '#0ea5e9', border: 'rgba(14, 165, 233, 0.3)' },
            investor: { bg: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', border: 'rgba(168, 85, 247, 0.3)' },
            mentor: { bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)' }
        };
        
        statsDiv.innerHTML = `
            <div style="font-weight: 700; font-size: 32px; margin-bottom: 4px; color: white;">${waitlist.length}</div>
            <div style="color: #a1a1aa; font-size: 12px; margin-bottom: 16px;">Total Signups</div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                <div style="padding: 10px 12px; border-radius: 10px; background: ${roleStyles.founder.bg}; border: 1px solid ${roleStyles.founder.border};">
                    <div style="font-size: 18px; font-weight: 800; color: ${roleStyles.founder.color};">${roleCounts.founder || 0}</div>
                    <div style="font-size: 11px; color: #a1a1aa; text-transform: capitalize;">Founders</div>
                </div>
                <div style="padding: 10px 12px; border-radius: 10px; background: ${roleStyles.builder.bg}; border: 1px solid ${roleStyles.builder.border};">
                    <div style="font-size: 18px; font-weight: 800; color: ${roleStyles.builder.color};">${roleCounts.builder || 0}</div>
                    <div style="font-size: 11px; color: #a1a1aa; text-transform: capitalize;">Builders</div>
                </div>
                <div style="padding: 10px 12px; border-radius: 10px; background: ${roleStyles.investor.bg}; border: 1px solid ${roleStyles.investor.border};">
                    <div style="font-size: 18px; font-weight: 800; color: ${roleStyles.investor.color};">${roleCounts.investor || 0}</div>
                    <div style="font-size: 11px; color: #a1a1aa; text-transform: capitalize;">Investors</div>
                </div>
                <div style="padding: 10px 12px; border-radius: 10px; background: ${roleStyles.mentor.bg}; border: 1px solid ${roleStyles.mentor.border};">
                    <div style="font-size: 18px; font-weight: 800; color: ${roleStyles.mentor.color};">${roleCounts.mentor || 0}</div>
                    <div style="font-size: 11px; color: #a1a1aa; text-transform: capitalize;">Mentors</div>
                </div>
            </div>
        `;
        
        if (waitlist.length === 0) {
            entriesDiv.innerHTML = '<p style="color: #52525b; text-align: center; padding: 24px;">No signups yet</p>';
        } else {
            entriesDiv.innerHTML = waitlist.reverse().map(entry => {
                const style = roleStyles[entry.role] || roleStyles.founder;
                return `
                <div style="padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <div style="font-weight: 600; color: white;">${entry.email}</div>
                    <div style="font-size: 12px; color: #a1a1aa; margin-top: 6px; display: flex; align-items: center; gap: 12px;">
                        <span style="background: ${style.bg}; color: ${style.color}; padding: 4px 10px; border-radius: 100px; text-transform: capitalize; font-size: 11px; font-weight: 600; border: 1px solid ${style.border};">${entry.role}</span>
                        <span>${entry.date}</span>
                    </div>
                </div>
            `}).join('');
        }
    }

    function exportWaitlistCSV() {
        const waitlist = getWaitlist();
        if (waitlist.length === 0) {
            alert('No data to export');
            return;
        }
        
        const headers = ['ID', 'Email', 'Role', 'Timestamp', 'Date'];
        const csvContent = [
            headers.join(','),
            ...waitlist.map(entry => [
                entry.id,
                `"${entry.email}"`,
                entry.role,
                entry.timestamp,
                `"${entry.date}"`
            ].join(','))
        ].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `fovndx_waitlist_${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
    }

    // Create admin panel on load
    const adminPanel = createAdminPanel();

    // Logo double-click to toggle admin panel
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('dblclick', () => {
            adminPanelVisible = !adminPanelVisible;
            adminPanel.style.display = adminPanelVisible ? 'block' : 'none';
            if (adminPanelVisible) {
                updateAdminPanel();
            }
        });
    }

    // Waitlist button handler - primary button
    const btnPrimary = document.querySelector('.btn-primary');
    const emailInput = document.querySelector('.email-input');
    const microConsent = document.querySelector('.micro-consent');

    if (btnPrimary && emailInput) {
        const handleWaitlistSubmit = async () => {
            const email = emailInput.value.trim();
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

            // Reset UI state
            emailInput.classList.remove('error', 'success');
            btnPrimary.disabled = false;
            btnPrimary.textContent = 'Secure Elite Access →';
            if (microConsent) microConsent.textContent = '100% Vetted Ecosystem. Zero Vanity Noise. Coming to revolutionize the Indian startup landscape in Q3 2026.';
            if (microConsent) microConsent.style.color = '';

            if (!email) {
                emailInput.classList.add('error');
                microConsent.textContent = 'Please enter your professional email address.';
                microConsent.style.color = '#ef4444';
                return;
            }

            if (!emailRegex.test(email)) {
                emailInput.classList.add('error');
                microConsent.textContent = 'Please enter a valid professional email address.';
                microConsent.style.color = '#ef4444';
                return;
            }

            // Check for disposable email domain
            const domain = email.split('@')[1].toLowerCase();
            if (disposableEmailDomains.includes(domain)) {
                emailInput.classList.add('error');
                microConsent.textContent = 'Disposable/temporary emails are not allowed. Please use your real professional email address.';
                microConsent.style.color = '#ef4444';
                return;
            }

            // Show loading state
            btnPrimary.disabled = true;
            btnPrimary.textContent = 'Processing...';

            try {
                // Save to local storage
                saveToWaitlist(email, selectedRole);
                
                // Simulate API call (replace with actual Google Sheets webhook later)
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Success!
                emailInput.classList.add('success');
                emailInput.value = '';
                btnPrimary.textContent = 'Success!';
                microConsent.textContent = `Thank you! We'll be in touch with you at ${email} soon.`;
                microConsent.style.color = '#22c55e';

                // Reset after 5 seconds
                setTimeout(() => {
                    emailInput.classList.remove('success');
                    btnPrimary.textContent = 'Secure Elite Access →';
                    btnPrimary.disabled = false;
                    microConsent.textContent = '100% Vetted Ecosystem. Zero Vanity Noise. Coming to revolutionize the Indian startup landscape in Q3 2026.';
                    microConsent.style.color = '';
                }, 5000);

            } catch (error) {
                // Error handling
                emailInput.classList.add('error');
                microConsent.textContent = 'Something went wrong. Please try again later.';
                microConsent.style.color = '#ef4444';
                btnPrimary.textContent = 'Secure Elite Access →';
                btnPrimary.disabled = false;
            }
        };

        btnPrimary.addEventListener('click', handleWaitlistSubmit);
        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleWaitlistSubmit();
            }
        });
    }

    // Apply for Waitlist navbar button
    const btnWaitlist = document.querySelector('.btn-waitlist');
    if (btnWaitlist) {
        btnWaitlist.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Apply for Waitlist button clicked!');
            const hero = document.getElementById('hero');
            const emailInput = document.querySelector('.email-input');
            const interactionMatrix = document.querySelector('.interaction-matrix');
            
            if (hero) {
                console.log('Scrolling to hero section...');
                const navbarHeight = 80;
                const targetPosition = hero.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Focus on email input and add highlight animation
                setTimeout(() => {
                    if (emailInput) {
                        emailInput.focus();
                    }
                    if (interactionMatrix) {
                        // Add highlight animation
                        interactionMatrix.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
                        interactionMatrix.style.boxShadow = '0 0 40px rgba(34, 197, 94, 0.4)';
                        interactionMatrix.style.transform = 'scale(1.02)';
                        
                        // Remove animation after 1 second
                        setTimeout(() => {
                            interactionMatrix.style.boxShadow = '';
                            interactionMatrix.style.transform = '';
                        }, 1000);
                    }
                }, 800);
            } else {
                console.log('Hero section not found!');
            }
        });
    }

    // Enhanced navbar animations with smooth transitions
    let lastScrollTop = 0;
    let ticking = false;
    const navbar = document.querySelector('.navbar');
    
    // Initial check
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const scrollDifference = scrollTop - lastScrollTop;
                
                if (navbar) {
                    // Add scrolled class for shadow and height change
                    if (scrollTop > 10) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                    
                    // Hide/show navbar on scroll
                    if (scrollTop > lastScrollTop && scrollTop > 150 && scrollDifference > 5) {
                        // Scrolling down
                        navbar.classList.add('hidden');
                    } else if (scrollTop < lastScrollTop && scrollDifference < -5) {
                        // Scrolling up
                        navbar.classList.remove('hidden');
                    }
                }
                
                lastScrollTop = scrollTop;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add mouse follow effect to pillar cards
    const pillarCards = document.querySelectorAll('.pillar-card');
    pillarCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Add mouse follow effect to interaction matrix
    const interactionMatrix = document.querySelector('.interaction-matrix');
    if (interactionMatrix) {
        interactionMatrix.addEventListener('mousemove', (e) => {
            const rect = interactionMatrix.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            interactionMatrix.style.setProperty('--mouse-x', `${x}px`);
            interactionMatrix.style.setProperty('--mouse-y', `${y}px`);
        });
    }

    // --- Terminal Decrypt Effect ---
    const CHARS = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    class DecryptText {
        constructor(element) {
            this.element = element;
            this.originalText = element.getAttribute('data-text') || element.textContent;
            this.interval = null;
            this.queue = [];
            this.frame = 0;
            this.frameRequest = null;
            this.resolve = null;
        }

        setText(newText) {
            const oldText = this.element.textContent;
            const length = Math.max(oldText.length, newText.length);
            
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }

            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;

            return new Promise(resolve => {
                this.resolve = resolve;
                this.update();
            });
        }

        update() {
            let output = '';
            let complete = 0;

            for (let i = 0; i < this.queue.length; i++) {
                let { from, to, start, end, char } = this.queue[i];

                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span style="color: rgba(255,255,255,0.5);">${char}</span>`;
                } else {
                    output += from;
                }
            }

            this.element.innerHTML = output;

            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update.bind(this));
                this.frame++;
            }
        }

        randomChar() {
            return CHARS[Math.floor(Math.random() * CHARS.length)];
        }
    }

    // Get all headings with data-text attribute
    const decryptElements = document.querySelectorAll('[data-text]');
    const decryptInstances = [];

    decryptElements.forEach(el => {
        const instance = new DecryptText(el);
        decryptInstances.push({ el, instance, animated: false });
    });

    // Scroll animations with decrypt effect
    const decryptObserverOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const decryptObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const decryptItem = decryptInstances.find(item => item.el === entry.target);
                if (decryptItem && !decryptItem.animated) {
                    decryptItem.instance.setText(decryptItem.instance.originalText);
                    decryptItem.animated = true;
                }
            }
        });
    }, decryptObserverOptions);

    decryptElements.forEach(el => {
        decryptObserver.observe(el);
    });

    // Hero headings - animate immediately with slight delay
    setTimeout(() => {
        const heroHeadings = document.querySelectorAll('.hero-headline [data-text]');
        heroHeadings.forEach((el, index) => {
            const decryptItem = decryptInstances.find(item => item.el === el);
            if (decryptItem) {
                setTimeout(() => {
                    decryptItem.instance.setText(decryptItem.instance.originalText);
                    decryptItem.animated = true;
                }, index * 300);
            }
        });
    }, 800);

    // --- Original Scroll Animations ---
    const scrollObserverOptions = {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '0px 0px -100px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                entry.target.classList.add('visible');
            }
        });
    }, scrollObserverOptions);

    // Add staggered delays to scroll-animate elements within the same container
    const containers = document.querySelectorAll('section, .comparison-stats, .careers-benefits');
    containers.forEach(container => {
        const elements = container.querySelectorAll(':scope > .scroll-animate');
        elements.forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.12}s`;
        });
    });

    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    scrollAnimateElements.forEach(el => scrollObserver.observe(el));
});
