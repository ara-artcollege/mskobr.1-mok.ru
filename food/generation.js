let days = moment().daysInMonth(),
    firstDay = moment.localeData().firstDayOfWeek(),
    month = moment().month() + 1;

function weeksMonth(gDays, gFirstDay) {
    let daysWeeks = 0;
    let iDays = gDays;
    let gfirst = true;
    while (iDays > 0) {
        if (gfirst) {
            iDays = iDays - (8 - gFirstDay)
            gfirst = false;
            daysWeeks++;
        }
        daysWeeks++;
        iDays -= 7;
        if (iDays <= 0) {
            break;
        }
    }
    return daysWeeks;
};
 
let weeks = weeksMonth(days, firstDay);

class MenuPmok {
    constructor(subD, tableId) {
        this.subD = subD;
        this.tableId = tableId;
        this.getTable = document.getElementById(tableId).innerHTML += `
            <tbody class="t431__tbody">
            ${thRender()}
            ${tdRender(this.subD)}
            </tbody>
            `;
    }
}
MenuPmok.daysWeek = 'Пн Вт Ср Чт Пт Сб Вс'.split(' ');

function thRender() {
    let result = '<thead class="t431__thead"><tr class="t431__evenrow" style="background: #eeeeee">';
    for (let i = 0; i < 7; i++) {
        result += `<th class="t431__th" style="width:10vw;font-size: inherit; background: ; border-width: 1px 1px 1px 1px; border-color: #000000; color: ; font-size: ; font-family: ; font-weight: ;">${MenuPmok.daysWeek[i]}</th>`;
    }
    return result += '</tr></thead>';
}

function tdRender(url) {
    let result = '';
    let g = 1;
    let d = 1;
    for (let i = 0; i < weeks; i++) {
        result += '<tr class="t431__oddrow" style="background: #ffffff">'
        for (let i = 0; i < 7; i++) {
            if (g < firstDay) {
                g++;
                result += `<td class="t431__td" style="width:10vw;font-size: inherit; border-width: 1px 1px 1px 1px; border-color: #8c8c8c; color: #4d4c4c;border-top: 0 !important;">&nbsp;</td>`;
            } else if (g < days + 1) {
                if (i === 5 || i === 6) {
                    if (d <= days) {
                        result += `<td class="t431__td" style="width:10vw;font-size: inherit; border-width: 1px 1px 1px 1px; border-color: #8c8c8c; color: #4d4c4c;border-top: 0 !important;">${access = (d < 10) ? 0 : ''}${d++}.${access = (month < 10) ? 0 : ''}${month}</td>`;
                    } else {
                        result += `<td class="t431__td" style="width:10vw;font-size: inherit; border-width: 1px 1px 1px 1px; border-color: #8c8c8c; color: #4d4c4c;border-top: 0 !important;">&nbsp;</td>`;
                    }
                } else {
                    if (d <= days) {
                        result += `<td class="t431__td" style="width:10vw;font-size: inherit; border-width: 1px 1px 1px 1px; border-color: #8c8c8c; color: #4d4c4c;border-top: 0 !important;"><a href="http://files.1-mok.ru/volan/${url}-${access = (d < 10) ? 0 : ''}${d}.${access = (month < 10) ? 0 : ''}${month}.pdf?v=${moment().get('date')}.${moment().get('month') + 1}.${moment().get('year')}" target="_blank"><b>${access = (d < 10) ? 0 : ''}${d++}.${access = (month < 10) ? 0 : ''}${month}</b></a></td>`;
                    } else {
                        result += `<td class="t431__td" style="width:10vw;font-size: inherit; border-width: 1px 1px 1px 1px; border-color: #8c8c8c; color: #4d4c4c;border-top: 0 !important;">&nbsp;</td>`;
                    }
                }
            }
        }
        result += '</tr>'
    }

    return result;
}

window.onload = () => {

    let dsTable = new MenuPmok('ds', 'pmok-ds');
    let soshTable = new MenuPmok('sosh', 'pmok-sosh');
    let kTable = new MenuPmok('k', 'pmok-k');

    let pmokH = document.getElementById('pmok-h2');
    pmokH.innerText = pmokH.textContent.replace(/{{year}}/g, `${moment().get('year')}`);



};