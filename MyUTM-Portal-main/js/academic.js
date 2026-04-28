function toggleYear(yearNum) {
    const block = document.getElementById(`year-${yearNum}-block`);
    const content = block.querySelector('.year-content');
    const icon = block.querySelector('.year-header i');
    
    // Close other years
    document.querySelectorAll('.year-block').forEach(b => {
        if (b.id !== `year-${yearNum}-block`) {
            b.querySelector('.year-content').classList.add('hidden');
            const otherIcon = b.querySelector('.year-header i');
            if (otherIcon) {
                otherIcon.className = 'fa-solid fa-chevron-right';
            }
        }
    });

    // Toggle current
    const isHidden = content.classList.contains('hidden');
    if (isHidden) {
        content.classList.remove('hidden');
        icon.className = 'fa-solid fa-chevron-down';
    } else {
        content.classList.add('hidden');
        icon.className = 'fa-solid fa-chevron-right';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // DOM ELEMENTS
    const steps = document.querySelectorAll('.step');
    const sections = document.querySelectorAll('.tab-section');
    const modal = document.getElementById('processing-modal');

    // 4) HIERARCHICAL NAVIGATION LOGIC
    const showLoading = (callback) => {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.style.display = 'none';
            if (callback) callback();
        }, 600);
    };

    // 5) ADVISOR TABLE LOGIC
    const advisorData = [
        { id: 1, session: '20252026', programme: 'SETNH', semNo: '4', staffNo: '16287', name: 'DR. KHAIRUL NAZMI BIN JAMALUDDIN', faculty: 'FKT', contact: 'khairulnadzmi@utm.my' },
        { id: 2, session: '20252026', programme: 'SETNH', semNo: '3', staffNo: '16287', name: 'DR. KHAIRUL NAZMI BIN JAMALUDDIN', faculty: 'FKT', contact: 'khairulnadzmi@utm.my' },
        { id: 3, session: '20242025', programme: 'SETNH', semNo: '2', staffNo: '16287', name: 'DR. KHAIRUL NAZMI BIN JAMALUDDIN', faculty: 'FKT', contact: 'khairulnadzmi@utm.my' },
        { id: 4, session: '20242025', programme: 'SETNH', semNo: '1', staffNo: '16287', name: 'DR. KHAIRUL NAZMI BIN JAMALUDDIN', faculty: 'FKT', contact: 'khairulnadzmi@utm.my' }
    ];

    const renderAdvisorTable = () => {
        const tbody = document.querySelector('#advisor-table tbody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        advisorData.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.session}</td>
                <td>${row.programme}</td>
                <td>${row.semNo}</td>
                <td>${row.staffNo}</td>
                <td>${row.name}</td>
                <td>${row.faculty}</td>
                <td><a href="mailto:${row.contact}">${row.contact}</a></td>
            `;
            tbody.appendChild(tr);
        });

        const info = document.getElementById('advisor-table-info');
        if (info) info.textContent = `Showing 1 to ${advisorData.length} of ${advisorData.length} entries`;
    };

    // 6) TAB SWITCHING (STEPPER)
    steps.forEach(step => {
        step.addEventListener('click', () => {
            const targetTab = step.getAttribute('data-tab');
            const targetSection = document.getElementById(`${targetTab}-section`);

            if (!targetSection) return;

            showLoading(() => {
                steps.forEach(s => s.classList.remove('active'));
                sections.forEach(sec => sec.classList.remove('active'));
                step.classList.add('active');
                targetSection.classList.add('active');
                if (targetTab === 'advisor') {
                    renderAdvisorTable();
                }
            });
        });
    });

    // 6.1) QUALIFICATION SUB-TABS LOGIC
    const subTabs = document.querySelectorAll('.sub-tab');
    const spmContent = document.getElementById('spm-content');
    const otherContent = document.getElementById('other-qualification-content');

    subTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const subType = tab.getAttribute('data-sub');
            
            showLoading(() => {
                subTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                if (subType === 'spm') {
                    spmContent.classList.add('active');
                    otherContent.classList.remove('active');
                } else {
                    spmContent.classList.remove('active');
                    otherContent.classList.add('active');
                }
            });
        });
    });
});
