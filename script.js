
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

    // 計算：この日付を基準にして、いつが最終申込日か？
    const lastApply2Month = new Date(endTwoMonthsBefore);
    const lastApply7Day = new Date(eightDaysBefore);

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

    document.getElementById('max-2month').textContent =
        "▶ その日基準で予約できる最大の来場日（2か月前抽選）：" + formatDate(new Date(lastApply2Month.setDate(lastApply2Month.getDate() + 1)));

    document.getElementById('max-7day').textContent =
        "▶ その日基準で予約できる最大の来場日（7日前抽選）：" + formatDate(new Date(lastApply7Day.setDate(lastApply7Day.getDate() + 1)));
});

// 日付の選択 or 再計算ボタンで実行する関数
function calculateReservationDates() {
    const dateInput = document.getElementById('visit-date');
    const visitDate = new Date(dateInput.value);
    if (isNaN(visitDate)) return;

    // 2か月前抽選
    const threeMonthsBefore = new Date(visitDate);
    threeMonthsBefore.setMonth(threeMonthsBefore.getMonth() - 3);

    const twoMonthsBefore = new Date(visitDate);
    twoMonthsBefore.setMonth(twoMonthsBefore.getMonth() - 2);
    const endTwoMonthsBefore = new Date(twoMonthsBefore);
    endTwoMonthsBefore.setDate(endTwoMonthsBefore.getDate() - 1);

    // 7日前抽選
    const oneMonthBefore = new Date(visitDate);
    oneMonthBefore.setMonth(oneMonthBefore.getMonth() - 1);

    const eightDaysBefore = new Date(visitDate);
    eightDaysBefore.setDate(eightDaysBefore.getDate() - 8);

    const sevenDaysBefore = new Date(visitDate);
    sevenDaysBefore.setDate(sevenDaysBefore.getDate() - 7);

    // 逆計算
    const lastApply2Month = new Date(endTwoMonthsBefore);
    const lastApply7Day = new Date(eightDaysBefore);

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

    document.getElementById('max-2month').textContent =
        "▶ この日予約するなら、2か月前抽選で申し込める最大の来場日：" +
        formatDate(new Date(lastApply2Month.setDate(lastApply2Month.getDate() + 1)));

    document.getElementById('max-7day').textContent =
        "▶ この日予約するなら、7日前抽選で申し込める最大の来場日：" +
        formatDate(new Date(lastApply7Day.setDate(lastApply7Day.getDate() + 1)));
}

// イベント登録
document.getElementById('visit-date').addEventListener('change', calculateReservationDates);
document.getElementById('recalculate').addEventListener('click', calculateReservationDates);
