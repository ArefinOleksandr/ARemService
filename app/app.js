'use strict'

console.log('Hello world')

const problems = {
    tvSect : {
        titleGroup : 'your-problem-button-tv',
        parrentButtonGroup : $('#your-problem-button-tv'),
        proplems: [
            {
                titleProblem : 'Нет изображения',
                idButton : 'your-problem-section-not-image-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Наши опытные техники проведут анализ неисправности в системе видео и осуществят ремонт неисправных компонентов, чтобы восстановить яркое и четкое изображение.',
                paragraphPrevent : 'Проверяйте кабели подключения и обновляйте программное обеспечение телевизора. Избегайте перегрева устройства, обеспечивая достаточную вентиляцию.'
            },
            {
                titleProblem : 'Проблемы со звуком',
                idButton : 'your-problem-section-not-voice-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем аудиодиагностику и устраним неисправности в звуковой системе телевизора, восстановив прекрасный звук вашего развлекательного центра.',
                paragraphPrevent : 'Регулярно чистите динамики от пыли и проверяйте настройки звука. Удостоверьтесь, что аудиокабели надежно подключены.'
            },
            {
                titleProblem : 'Неисправности с пультом дистанционного управления',
                idButton : 'your-problem-section-remote-controller-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем проверку батареек, антенны и сенсоров пульта, устраняя проблемы, мешающие комфортному управлению телевизором.',
                paragraphPrevent : 'Заменяйте батарейки своевременно, избегайте попадания влаги на пульт, и храните его в месте, где он не подвергается механическим воздействиям.'
            },
            {
                titleProblem : 'Периодические отключения и включения',
                idButton : 'your-problem-section-on-off-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы выявим и устраним причины аварийных отключений, проведя комплексную диагностику и замену неисправных элементов.',
                paragraphPrevent : 'Проверяйте качество электропитания, используйте стабилизаторы напряжения и избегайте перегрева телевизионного блока. Обновляйте программное обеспечение для устранения возможных ошибок.'
            }
        ]
    },
    phoneSect : {
        titleGroup: 'your-problem-button-phone',
        parrentButtonGroup : $('#your-problem-button-phone'),
        proplems : [
            {
                titleProblem : 'Разбитый экран',
                idButton : 'your-problem-section-broken-glass-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Наши специалисты проведут замену поврежденного экрана вашего телефона, используя только оригинальные запчасти для максимальной производительности и качества.',
                paragraphPrevent : 'Используйте защитные стекла и чехлы для предотвращения повреждений экрана. Будьте осторожны, не допускайте падений устройства.'
            },
            {
                titleProblem : 'Слабая батарея',
                idButton : 'your-problem-section-battery-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы предлагаем замену аккумулятора вашего телефона, чтобы вернуть ему полную производительность и продлить срок службы.',
                paragraphPrevent : 'Избегайте переразрядки и перегрева устройства. Следите за зарядом и используйте оригинальное зарядное устройство.'
            }, 
            {
                titleProblem : 'Проблемы с камерой',
                idButton : 'your-problem-section-camera-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем диагностику камеры и выполним необходимые ремонтные работы, чтобы ваш телефон снова делал отличные фотографии и видео.',
                paragraphPrevent : 'Избегайте попадания пыли и грязи на камеру. Обращайте внимание на обновления программного обеспечения, которые могут улучшить работу камеры.'
            },
            {
                titleProblem : 'Неисправности звука',
                idButton : 'your-problem-section-voice-phone-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Наши мастера проведут тщательную диагностику звуковой системы вашего телефона и выполнат необходимые ремонтные работы для восстановления звука.',
                paragraphPrevent : 'Избегайте попадания влаги в динамики. Проверяйте настройки звука и обновляйте программное обеспечение для исправления возможных ошибок.'
            },
        ]
    },
    pcSect : {
        titleGroup: 'your-problem-button-pc',
        parrentButtonGroup : $('#your-problem-button-pc'),
        proplems : [
            {
                titleProblem : 'Медленная работа',
                idButton : 'your-problem-section-slow-work-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Наши специалисты проведут анализ системы, устранив причины замедления, включая вирусы, фрагментацию диска и проблемы с оперативной памятью.',
                paragraphPrevent : 'Регулярно проверяйте систему на вирусы, чистите жесткий диск от ненужных файлов, установите дополнительную оперативную память при необходимости.'
            },
            {
                titleProblem : 'Частые вылеты программ',
                idButton : 'your-problem-broken-program-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем анализ причин вылетов программ, обновим драйвера и программное обеспечение, а также устраним конфликты между приложениями.',
                paragraphPrevent : 'Регулярно обновляйте программы и драйвера. Проверяйте наличие конфликтов при установке новых приложений.'
            }, 
            {
                titleProblem : 'Проблемы с подключением к Интернету',
                idButton : 'your-problem-section-camera-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проверим состояние сетевого оборудования, настроим сетевые параметры и устраним проблемы с драйверами сетевых устройств.',
                paragraphPrevent : 'Регулярно обновляйте драйвера для сетевых адаптеров. Проверяйте наличие вирусов и шифруйте вашу домашнюю сеть для повышения безопасности.'
            },
            {
                titleProblem : 'Загрязнение и перегрев',
                idButton : 'your-problem-section-voice-phone-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем чистку вентиляторов, замену термопасты и обеспечим нормальное охлаждение системы, чтобы предотвратить перегрев компонента.',
                paragraphPrevent : 'Регулярно чистите системный блок от пыли, убедитесь, что вентиляторы функционируют исправно, и контролируйте температуру компонентов.'
            },
        ]
    },
    appleSect : {
        titleGroup: 'your-problem-button-apple',
        parrentButtonGroup : $('#your-problem-button-apple'),
        proplems : [
            {
                titleProblem : 'Экран iPhone не реагирует на касания',
                idButton : 'your-problem-section-apple-glass-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Наши мастера проведут диагностику сенсорного экрана и выполнят замену поврежденных компонентов для восстановления функциональности.',
                paragraphPrevent : 'Избегайте ударов и падений, используйте защитные стекла, и не допускайте попадания влаги на экран.'
            },
            {
                titleProblem : 'Проблемы с зарядкой MacBook',
                idButton : 'your-problem-battery-apple-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем проверку зарядного кабеля и коннектора, а также заменим неисправные элементы для восстановления зарядки MacBook.',
                paragraphPrevent : 'Пользуйтесь оригинальными зарядными устройствами, избегайте перекручивания кабеля, и чистите разъем от пыли.'
            }, 
            {
                titleProblem : 'Проблемы с звуком в устройствах Apple',
                idButton : 'your-problem-voice-apple-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем диагностику звуковой системы, обновим программное обеспечение и заменим неисправные динамики для восстановления качественного звучания.',
                paragraphPrevent : 'Регулярно проверяйте настройки звука, используйте оригинальные наушники, и избегайте попадания влаги в аудиовыходы.'
            },
            {
                titleProblem : 'Проблемы с системой iOS',
                idButton : 'your-problem-section-ios-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем анализ программного обеспечения, устраним ошибки в системе iOS и обновим операционную систему для стабильной работы устройства.',
                paragraphPrevent : 'Регулярно обновляйте iOS до последней версии, резервируйте данные перед обновлениями, и избегайте установки неофициальных приложений.'
            },
        ]
    },
    laptopSect : {
        titleGroup: 'your-problem-button-laptop',
        parrentButtonGroup : $('#your-problem-button-laptop'),
        proplems : [
            {
                titleProblem : 'Проблемы с зарядкой',
                idButton : 'your-problem-section-battery-laptop-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Наши техники проведут диагностику зарядного устройства и заменят неисправные компоненты, чтобы восстановить правильное зарядное напряжение.',
                paragraphPrevent : 'Избегайте изгибов и перекручивания кабеля зарядки, храните ноутбук в сухом месте, и регулярно проверяйте состояние разъема.'
            },
            {
                titleProblem : 'Перегрев и автоматическое выключение',
                idButton : 'your-problem-hight-temperature-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем чистку системы охлаждения, замену термопасты и устраним причины перегрева, чтобы ваш ноутбук работал стабильно.',
                paragraphPrevent : 'Регулярно чистите вентиляторы, не блокируйте вентиляционные отверстия, и используйте подставку для ноутбука с встроенным вентилятором.'
            }, 
            {
                titleProblem : 'Блокировка системы',
                idButton : 'your-problem-blocked-system-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем анализ программного обеспечения, удалим вредоносные программы и обновим драйвера для устранения причин блокировок системы.',
                paragraphPrevent : 'Регулярно обновляйте антивирусное программное обеспечение, избегайте посещения подозрительных веб-сайтов, и проверяйте систему на наличие вредоносных программ.'
            },
            {
                titleProblem : 'Проблемы с клавиатурой и тачпадом',
                idButton : 'your-problem-section-touchpad-child',
                childButtonProblem : $(`#${this.idButton}`),
                paragraphRepair: 'Мы проведем детальную диагностику клавиатуры и тачпада, заменим поврежденные клавиши и устраним проблемы с чувствительностью тачпада.',
                paragraphPrevent : 'Избегайте попадания жидкости на клавиатуру, регулярно чистите клавиши от пыли, и обращайте внимание на установку обновлений драйверов.'
            },
        ]
    }
}

const toggleSection = (button, paragraph) => {
    if (paragraph.is(':visible')) {
        button.css('backgroundColor', '#3187DF20').css('color', '#34618F');
        paragraph.slideUp();
    } else {
        button.css('backgroundColor', '#3187DF').css('color', '#fff');
        paragraph.slideToggle();
    }
};

const renderProblemSection = (e) => {
    const innerHtml = `<section class="your-problem-section-not-image uk-animation-slide-top uk-text-center">
        <button id="${e.idButton}">
            ${e.titleProblem}
        </button>
        <div class="your-problem-paragraph">
            <div class="your-problem-section-repair">
                <h2 class='your-problem-h2'>Как ремонтируется?</h2>
                <p class='your-problem-p'>${e.paragraphRepair}</p>
            </div>
            <div class="your-problem-section-prevent">
                <h2 class='your-problem-h2'>Как предотвратить?</h2>
                <p class='your-problem-p'>${e.paragraphPrevent}</p>
            </div>
        </div>`;

    $('.your-problem-div').append(innerHtml);

    const button = $(`#${e.idButton}`);
    const paragraph = button.next('.your-problem-paragraph');

    button.click(() => toggleSection(button, paragraph));
};

const callback = (section) => {
    section.parrentButtonGroup.click(() => {
        $('.your-problem-button-active').removeClass('your-problem-button-active');
        section.parrentButtonGroup.addClass('your-problem-button-active');
        $('.your-problem-div').empty();
        section.proplems.forEach(renderProblemSection);
    });
};

callback(problems.tvSect);
callback(problems.phoneSect);
callback(problems.pcSect);
callback(problems.appleSect);
callback(problems.laptopSect);



const nextQuestion = (id) => {
    const currentQuestion = '#question'+ (id - 1);
    const nextQuestion = '#question' + id;
    const idTextInput = $(currentQuestion+'> input:text').attr('id');
    const inputText = $(currentQuestion+'> input:text').val();

    if(idTextInput && inputText){saveToLocal(idTextInput, inputText)};
    $(currentQuestion).css('display','none');
    $(nextQuestion).css('display','block');
    console.log(getLocal());
}

$('input:radio').on('change', function(e){
    const chekboxId = $(this).attr('id');
    const textLabel = $('#'+chekboxId).next('label').text();
    const keyLocalStorage = $('#'+chekboxId).parents('.question').attr('id');
    console.log(keyLocalStorage);
    saveToLocal(keyLocalStorage, textLabel);
})

$('#f-tel-phone').on('input', () => {
    const inputLabel = $('#f-tel-phone').val();
    if(/[^0-9+]/.test(inputLabel)){
        $('#f-tel-phone').addClass('uk-form-danger');
    }
    else{
        $('#f-tel-phone').removeClass('uk-form-danger');
    }
})

const  quizEnd = async () => {
    $('#question7').css('display', 'none')
    $('#success-form').css('display', 'flex')
    $('.quiz-end').css('bottom', '0');

    await setTimeout(() => {
        $('.quiz-end').css('display', 'none');
        $('.complete').css('display', 'flex')
    }, 5000)
}


const price = {
    base : {
        'Компьютер' : 400,
        "Телевизор" : 500,
        "Телефон" : 450,
        'Ноутбук' : 500
    },
    typeRepair : {
        "Проблемы с железом" : 1.2,
        "Проблемы с программным обеспечением" : 1,
        "Механические повреждения" : 1.4,
        "Другое" : 1
    },
    fast: {
        "Срочно (в течение 24 часов)" : 1.2,
        "В течение недели" : 1,
        "Не срочно" : 1
    }
}

const viewPrice = () => {
    $('.complete').css('display', 'none');
    $('.view-price').css('display', 'flex')
    $('.quiz').css('padding', '0');

    let allPrice = 0;
    const baseStr = getLocal('question1');
    const typeRepairStr = getLocal('question2');
    const fastStr = getLocal('question5');
    console.log(baseStr)
    allPrice += price.base[baseStr];
    allPrice *= price.typeRepair[typeRepairStr];
    allPrice *= price.fast[fastStr];
    $('#span-price').text(allPrice)
    console.log(allPrice);
}

const changePhone = () =>  {
    saveToLocal('repar-form-phone-client', $('#v-p-tel-phone').val());
    $('.change-phone-access').css('display', 'block')
    console.log($('#v-p-tel-phone').val());
    console.log(getLocal())
}

const saveToLocal = (id, label) => {
    localStorage.removeItem(id);
    localStorage.setItem(id, label);
}
const getLocal = (id) => {
    if(id){
        return localStorage.getItem(id)
    }
    else{
        return localStorage;
    }
}


