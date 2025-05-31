document.addEventListener("DOMContentLoaded", function () {
    const statuses = [
        {cls: 'on-duty-dot', title: 'На линия'},
        {cls: 'on-case-dot', title: 'На случай'},
        {cls: 'off-duty-dot', title: 'Отсъства'}
    ];
 
    document.querySelectorAll('.team-member').forEach(member => {
        if (!member.querySelector('.status-btn')) {
            const btn = document.createElement('button');
            btn.className = 'status-btn';
            btn.textContent = 'Смени статус';
            btn.style.marginTop = '10px';
            member.appendChild(btn);
        }
        const btn = member.querySelector('.status-btn');
        btn.addEventListener('click', () => {
            let dot = member.querySelector('.on-duty-dot, .on-case-dot, .off-duty-dot');
            let current = statuses.findIndex(s => dot.classList.contains(s.cls));
            let next = (current + 1) % statuses.length;
            dot.className = statuses[next].cls;
            dot.title = statuses[next].title;
        });
    });
});