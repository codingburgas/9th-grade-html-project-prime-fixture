document.addEventListener("DOMContentLoaded", function () {
    const statuses = [
        {cls: 'onDutyDot', title: 'На линия'},
        {cls: 'onCaseDot', title: 'На случай'},
        {cls: 'offDutyDot', title: 'Отсъства'}
    ];
 
    document.querySelectorAll('.teamMember').forEach(member => {
        if (!member.querySelector('.statusBtn')) {
            const btn = document.createElement('button');
            btn.className = 'statusBtn';
            btn.textContent = 'Смени статус';
            btn.style.marginTop = '10px';
            member.appendChild(btn);
        }
        const btn = member.querySelector('.statusBtn');
        btn.addEventListener('click', () => {
            let dot = member.querySelector('.onDutyDot, .onCaseDot, .offDutyDot');
            let current = statuses.findIndex(s => dot.classList.contains(s.cls));
            let next = (current + 1) % statuses.length;
            dot.className = statuses[next].cls;
            dot.title = statuses[next].title;
        });
    });
});