const btnLicense = document.getElementById('btn-license');
const btnLanguage = document.getElementById('btn-language');
const abilityInfo = document.getElementById('ability-info');

const btnA = document.getElementById('btn-a');
const btnB = document.getElementById('btn-b');
const btnC = document.getElementById('btn-c');
const counselingInfo = document.getElementById('counseling-info');
const buttons = [btnA, btnB, btnC];

const programContent = document.getElementById('program-content');
const initialProgramContent = programContent.innerHTML;

const programTabs = [
    document.getElementById('program-tab-apply'),
    document.getElementById('program-tab-status'),
    document.getElementById('program-tab-proof')
];

const programData = {
    apply: initialProgramContent,
    status: `
        <div class="program-list">
            <div class="program-list-row">
                <span class="program-list-title">이수한 프로그램이 없습니다.</span>
            </div>
        </div>`,
    proof: `
        <div class="program-list">
            <div class="program-list-row">
                <span class="program-list-title">증빙 신청 내역이 없습니다.</span>
            </div>
        </div>`
};

const infoData = {
    license: '<li>자격증 취득 내역 없음</li>',
    language: '<li>어학성적 등록 내역 없음</li>'
};

const counselingData = {
    a: '<li>취업 상담 내용 없음</li>',
    b: '<li>학과 상담 내용 없음</li>',
    c: '<li>학업 상담 하고 싶습니다.</li>'
};

btnLicense.addEventListener('click', () => {
    abilityInfo.innerHTML = infoData.license;
    btnLicense.classList.add('active');
    btnLanguage.classList.remove('active');
});

btnLanguage.addEventListener('click', () => {
    abilityInfo.innerHTML = infoData.language;
    btnLanguage.classList.add('active');
    btnLicense.classList.remove('active');
});

btnA.addEventListener('click', function() {
    counselingInfo.innerHTML = counselingData.a;
    buttons.forEach(btn => btn.classList.remove('active'));
    btnA.classList.add('active');
});
btnB.addEventListener('click', function() {
    counselingInfo.innerHTML = counselingData.b;
    buttons.forEach(btn => btn.classList.remove('active'));
    btnB.classList.add('active');
});
btnC.addEventListener('click', function() {
    counselingInfo.innerHTML = counselingData.c;
    buttons.forEach(btn => btn.classList.remove('active'));
    btnC.classList.add('active');
});

programTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        programContent.innerHTML = programData[Object.keys(programData)[index]];
        programTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
