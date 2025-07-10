
document.getElementById('visit-date').addEventListener('change', function () {
    const visitDate = new Date(this.value);
    if (isNaN(visitDate)) return;

    // 2か月前抽選：3か月前～2か月前の前日
    const threeMonthsBefore = new Date(visitDate);
    threeMonthsBefore.setMonth(threeMonthsBefore.getMonth() - 3);

    const twoMonthsBefore = new Date(visitDate);
    twoMonthsBefore.setMonth(twoMonthsBefore.getMonth() - 2);
    const endTwoMonthsBefore = new Date(twoMonthsBefore);
    endTwoMonthsBefore.setDate(endTwoMonthsBefore.getDate() - 1);

    // 7日前抽選：1か月前～8日前、通知：7日前
    const oneMonthBefore = new Date(visitDate);
    oneMonthBefore.setMonth(oneMonthBefore.getMonth() - 1);

    const eightDaysBefore = new Date(visitDate);
    eightDaysBefore.setDate(eightDaysBefore.getDate() - 8);

    const sevenDaysBefore = new Date(visitDate);
    sevenDaysBefore.setDate(sevenDaysBefore.getDate() - 7);

    const formatDate = (date) => {
        return date.getFullYear() + '-' +
               String(date.getMonth() + 1).padStart(2, '0') + '-' +
               String(date.getDate()).padStart(2, '0');
    };

    document.getElementById('lottery2').textContent =
        "▶ 2か月前抽選申込期間：" + formatDate(threeMonthsBefore) + " ～ " + formatDate(endTwoMonthsBefore);

    document.getElementById('lottery7').textContent =
        "▶ 7日前抽選申込期間：" + formatDate(oneMonthBefore) + " ～ " + formatDate(eightDaysBefore);

    document.getElementById('notification7').textContent =
        "▶ 7日前抽選 当選通知日：" + formatDate(sevenDaysBefore);
});
