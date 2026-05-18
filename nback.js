/************** 
 * Nback *
 **************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// ===== BROWSER-COMPATIBLE SHUFFLE (Fisher-Yates) =====
function shuffleArray(array) {
    // Создаём копию массива, чтобы не менять оригинал
    const shuffled = array.slice();
    
    // Алгоритм тасования Фишера-Йейтса
    for (let i = shuffled.length - 1; i > 0; i--) {
        // Генерируем случайный индекс от 0 до i (включительно)
        const j = Math.floor(Math.random() * (i + 1));
        
        // Меняем элементы местами
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}
// =====================================================

// store info about the experiment session:
let expName = 'nback';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'group': '1',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code_2

let stimuli = [
  ["рыба", "kef"], ["мясо", "lim"], ["каша", "luz"],
  ["миндаль", "nux"], ["пирог", "vem"], ["блины", "lem"],
  ["вафля", "xoz"], ["пряник", "moz"], ["чеснок", "zaf"], ["зефир", "bex"],
  ["халва", "dor"], ["банан", "fum"], ["укроп", "toz"],
  ["персик", "sup"], ["салат", "sul"], ["грибы", "vim"], ["багет", "rel"],
  ["морковь", "kof"], ["перец", "zix"], ["лаваш", "bik"], ["киви", "caf"],
  ["сырник", "siz"], ["манго", "fex"], ["пудинг", "loz"], ["суфле", "niv"],
  ["желе", "pox"], ["кисель", "kix"], ["компот", "raz"], ["чизкейк", "seb"], ["смузи", "tuz"],
  ["масло", "bev"], ["сливки", "zir"], ["творог", "buk"], ["кефир", "kaf"],
  ["йогурт", "dof"], ["ваниль", "hez"], ["арбуз", "put"], ["рагу", "rix"], ["сало", "soz"],
  ["гуляш", "tez"], ["слива", "ved"], ["пюре", "xof"], ["попкорн", "boz"], ["шницель", "cuz"],
  ["свекла", "ral"], ["дыня", "gom"], ["паста", "miz"], ["фасоль", "rex"], ["вишня", "sot"],
  ["глазурь", "hiz"], ["икра", "baz"], ["сахар", "tep"], ["груша", "tob"], ["лимон", "kos"],
  ["тунец", "har"], ["горох", "bet"], ["бублик", "pem"], ["шпроты", "poz"], ["мята", "kam"],
  ["зелень", "gez"]
];

stimuli = shuffleArray(stimuli);
const blocks = Array.from({ length: 15 }, (_, i) => stimuli.slice(i * 4, (i + 1) * 4));
let fb_conditions = Array(5).fill('immediate').concat(Array(5).fill('delayed')).concat(Array(5).fill('none'));
fb_conditions = shuffleArray(fb_conditions);
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(nameRoutineBegin());
flowScheduler.add(nameRoutineEachFrame());
flowScheduler.add(nameRoutineEnd());
flowScheduler.add(demogrRoutineBegin());
flowScheduler.add(demogrRoutineEachFrame());
flowScheduler.add(demogrRoutineEnd());
flowScheduler.add(genderRoutineBegin());
flowScheduler.add(genderRoutineEachFrame());
flowScheduler.add(genderRoutineEnd());
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
flowScheduler.add(motivationRoutineBegin());
flowScheduler.add(motivationRoutineEachFrame());
flowScheduler.add(motivationRoutineEnd());
const BlockLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BlockLoopLoopBegin(BlockLoopLoopScheduler));
flowScheduler.add(BlockLoopLoopScheduler);
flowScheduler.add(BlockLoopLoopEnd);





flowScheduler.add(Final_MetricsRoutineBegin());
flowScheduler.add(Final_MetricsRoutineEachFrame());
flowScheduler.add(Final_MetricsRoutineEnd());
flowScheduler.add(postoprosRoutineBegin());
flowScheduler.add(postoprosRoutineEachFrame());
flowScheduler.add(postoprosRoutineEnd());
flowScheduler.add(NASA_TLX_instrRoutineBegin());
flowScheduler.add(NASA_TLX_instrRoutineEachFrame());
flowScheduler.add(NASA_TLX_instrRoutineEnd());
flowScheduler.add(NASA_TLX_um_nRoutineBegin());
flowScheduler.add(NASA_TLX_um_nRoutineEachFrame());
flowScheduler.add(NASA_TLX_um_nRoutineEnd());
flowScheduler.add(NASA_TLX_timeRoutineBegin());
flowScheduler.add(NASA_TLX_timeRoutineEachFrame());
flowScheduler.add(NASA_TLX_timeRoutineEnd());
flowScheduler.add(NASA_TLX_successRoutineBegin());
flowScheduler.add(NASA_TLX_successRoutineEachFrame());
flowScheduler.add(NASA_TLX_successRoutineEnd());
flowScheduler.add(NASA_TLX_effortsRoutineBegin());
flowScheduler.add(NASA_TLX_effortsRoutineEachFrame());
flowScheduler.add(NASA_TLX_effortsRoutineEnd());
flowScheduler.add(NASA_TLX_fruRoutineBegin());
flowScheduler.add(NASA_TLX_fruRoutineEachFrame());
flowScheduler.add(NASA_TLX_fruRoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(OSFRoutineBegin());
flowScheduler.add(OSFRoutineEachFrame());
flowScheduler.add(OSFRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
var fb_stats;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var nameClock;
var text_5;
var textbox_2;
var key_resp_5;
var demogrClock;
var textbox;
var key_resp_4;
var text_4;
var genderClock;
var text_6;
var textbox_3;
var key_resp_6;
var instrClock;
var text;
var key_resp_2;
var motivationClock;
var slider_mot_beg;
var text_3;
var key_resp;
var EncodeClock;
var encodeText;
var blankScreen;
var Recall_PageClock;
var recall_header;
var recall_body;
var key_recall;
var Final_MetricsClock;
var postoprosClock;
var slider_mot_end;
var slider_emot;
var slider_complex;
var mot_text;
var emot_text;
var complex_text;
var key_resp_3;
var NASA_TLX_instrClock;
var text_7;
var key_resp_7;
var NASA_TLX_um_nClock;
var slider_um_n;
var text_8;
var key_resp_8;
var text_10;
var NASA_TLX_timeClock;
var slider_time;
var text_9;
var key_resp_9;
var text_11;
var NASA_TLX_successClock;
var key_resp_10;
var text_12;
var slider_success;
var text_13;
var NASA_TLX_effortsClock;
var text_14;
var key_resp_11;
var slider_efforts;
var text_15;
var NASA_TLX_fruClock;
var text_16;
var key_resp_12;
var slider_fru;
var text_17;
var thanksClock;
var text_2;
var OSFClock;
var text_18;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "name"
  nameClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Введите Ваше ФИО.\n\nДля перехода к следующему шагу нажмите Enter.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "demogr"
  demogrClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Введите Ваш возраст.\n\nДля перехода к следующему шагу нажмите Enter.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "gender"
  genderClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Укажите Ваш пол.\n\nм - мужчина\nж - женщина\nн - не хочу указывать',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_3',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Инструкция.\n\nЭксперимент содержит 15 блоков. В каждом блоке перед Вами будут поочередно появляться 4 слова искусственного языка с их переводом на русский язык. Вам нужно их запомнить и ввести в поля рядом с их переводом на русский. Порядок слов в предъявлении и в полях для ответа может отличаться. Для перехода к следующему полю для ответа нажимайте Enter. Возвращаться к предыдущим ответам нельзя.\n\nВам будет дано две попытки. После первой попытки иногда может появляться обратная связь. Если вы не можете запомнить все слова - это нормально, однако постарайтесь запомнить и ввести правильно как можно больше слов в обеих попытках. Порядок слов в попытках тоже может отличаться. Поле пустым оставлять нельзя - введите хоть что-то перед переходом к следующему.\n\nДля перехода к следующему шагу нажмите Enter',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_2
  let fb_buffer = [];
  
  let all_diffs = [];
  let all_times_1 = [];
  let all_times_total = [];
  // Initialize components for Routine "motivation"
  motivationClock = new util.Clock();
  slider_mot_beg = new visual.Slider({
    win: psychoJS.window, name: 'slider_mot_beg',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Оцените уровень вашей мотивации выполнить задание.\n Для этого при оценке шкалы воспользуйтесь мышью.\n Далее для перехода к основной части эксперимента нажмите Enter и Вам начнут показывать слова для запоминания.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Encode"
  EncodeClock = new util.Clock();
  encodeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'encodeText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  blankScreen = new visual.TextStim({
    win: psychoJS.window,
    name: 'blankScreen',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Recall_Page"
  Recall_PageClock = new util.Clock();
  recall_header = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_header',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  recall_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_body',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_recall = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_recall
  fb_stats = {
      immediate: { diff_sum: 0, rt1_sum: 0, rt_total_sum: 0, n: 0 },
      delayed: { diff_sum: 0, rt1_sum: 0, rt_total_sum: 0, n: 0 },
      none: { diff_sum: 0, rt1_sum: 0, rt_total_sum: 0, n: 0 }
  };
  // Initialize components for Routine "Final_Metrics"
  Final_MetricsClock = new util.Clock();
  // Initialize components for Routine "postopros"
  postoprosClock = new util.Clock();
  slider_mot_end = new visual.Slider({
    win: psychoJS.window, name: 'slider_mot_end',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, 0.25], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5], fontSize: 0.04, ticks: [1, 2, 3, 4, 5],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color([0.9216, 0.9216, 0.9216]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  slider_emot = new visual.Slider({
    win: psychoJS.window, name: 'slider_emot',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.15)], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.04, ticks: [1, 2, 3, 4, 5],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color([0.9216, 0.9216, 0.9216]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  slider_complex = new visual.Slider({
    win: psychoJS.window, name: 'slider_complex',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.4)], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.04, ticks: [1, 2, 3, 4, 5],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color([0.9216, 0.9216, 0.9216]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  mot_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'mot_text',
    text: 'Еще раз оцените вашу текущую мотивацию выполнять задание.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  emot_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'emot_text',
    text: 'Оцените ваше эмоциональное состояние. Где левый конец (-2) - очень негативное, середина (0) - нейтральное, правый конец (2) - очень положительное.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.0], draggable: false, height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  complex_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'complex_text',
    text: 'Оцените сложность задач в эксперименте. После этого нажмите Enter  для перехода к следующему шагу',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.33)], draggable: false, height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "NASA_TLX_instr"
  NASA_TLX_instrClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Остался последний этап!\n\nНужно пройти короткий опросник, поставив отметку на 5 шкалах, похожих на тех, что были на предыдущей странице.\n\nОпишите те субъективные ощущения, которые Вы получили при выполнении задания. Поставьте отметку на каждой из шести шкал в той точке, которая наиболее точно соответствует Вашим субъективным ощущениям.\n\nДля перехода к следующему шагу нажмие Enter.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.0], draggable: false, height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "NASA_TLX_um_n"
  NASA_TLX_um_nClock = new util.Clock();
  slider_um_n = new visual.Slider({
    win: psychoJS.window, name: 'slider_um_n',
    startValue: undefined,
    size: [1.2, 0.05], pos: [0, (- 0.15)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u041d\u0438\u0437\u043a\u0430\u044f", "|", "\u0412\u044b\u0441\u043e\u043a\u0430\u044f"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color([0.9216, 0.9216, 0.9216]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Как много умственных усилий, как Вам показалось на первый взгляд, требовалось для выполнения задания?\n\nШКАЛА УМСТВЕННАЯ НАГРУЗКА',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Для перехода к следующей шкале нажмите Enter',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "NASA_TLX_time"
  NASA_TLX_timeClock = new util.Clock();
  slider_time = new visual.Slider({
    win: psychoJS.window, name: 'slider_time',
    startValue: undefined,
    size: [1.2, 0.05], pos: [0, (- 0.15)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0421\u043b\u0430\u0431\u043e\u0435", "|", "\u0421\u0438\u043b\u044c\u043d\u043e\u0435"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color([0.9216, 0.9216, 0.9216]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Нужно было торопиться, чтобы выполнить задание, или можно было работать в своём темпе?\n\nШКАЛА ДАВЛЕНИЕ ВРЕМЕНИ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Для перехода к следующей шкале нажмите Enter',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "NASA_TLX_success"
  NASA_TLX_successClock = new util.Clock();
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Для перехода к следующей шкале нажмите Enter',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  slider_success = new visual.Slider({
    win: psychoJS.window, name: 'slider_success',
    startValue: undefined,
    size: [1.2, 0.05], pos: [0, (- 0.15)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0421\u043b\u0430\u0431\u043e\u0435", "|", "\u0421\u0438\u043b\u044c\u043d\u043e\u0435"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color([0.9216, 0.9216, 0.9216]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Как Вы думаете, насколько успешно было выполнено задание?\n\nШКАЛА УСПЕШНОСТЬ ВЫПОЛНЕНИЯ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "NASA_TLX_efforts"
  NASA_TLX_effortsClock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Для перехода к следующей шкале нажмите Enter',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider_efforts = new visual.Slider({
    win: psychoJS.window, name: 'slider_efforts',
    startValue: undefined,
    size: [1.2, 0.05], pos: [0, (- 0.15)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0421\u043b\u0430\u0431\u043e\u0435", "|", "\u0421\u0438\u043b\u044c\u043d\u043e\u0435"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color([0.9216, 0.9216, 0.9216]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Сколько усилий Вы на самом деле приложили для выполнения задания?\n\nШКАЛА УСИЛИЯ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "NASA_TLX_fru"
  NASA_TLX_fruClock = new util.Clock();
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: 'Для перехода к следующей шкале нажмите Enter',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider_fru = new visual.Slider({
    win: psychoJS.window, name: 'slider_fru',
    startValue: undefined,
    size: [1.2, 0.05], pos: [0, (- 0.15)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0421\u043b\u0430\u0431\u043e\u0435", "|", "\u0421\u0438\u043b\u044c\u043d\u043e\u0435"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color([0.9216, 0.9216, 0.9216]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Насколько напряженным и раздражающим было задание?\n\nШКАЛА УРОВЕНЬ ФРУСТРАЦИИ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Спасибо!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "OSF"
  OSFClock = new util.Clock();
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'Подождите, не закрывайте окно!\nИдет запись данных эксперимента',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var nameMaxDurationReached;
var _key_resp_5_allKeys;
var nameMaxDuration;
var nameComponents;
function nameRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'name' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    nameClock.reset();
    routineTimer.reset();
    nameMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_2.setText('');
    textbox_2.refresh();
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('name.started', globalClock.getTime());
    nameMaxDuration = null
    // keep track of which components have finished
    nameComponents = [];
    nameComponents.push(text_5);
    nameComponents.push(textbox_2);
    nameComponents.push(key_resp_5);
    
    for (const thisComponent of nameComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function nameRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'name' ---
    // get current time
    t = nameClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of nameComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nameRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'name' ---
    for (const thisComponent of nameComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('name.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_2.text',textbox_2.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "name" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demogrMaxDurationReached;
var _key_resp_4_allKeys;
var demogrMaxDuration;
var demogrComponents;
function demogrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demogr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    demogrClock.reset();
    routineTimer.reset();
    demogrMaxDurationReached = false;
    // update component parameters for each repeat
    textbox.setText('');
    textbox.refresh();
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('demogr.started', globalClock.getTime());
    demogrMaxDuration = null
    // keep track of which components have finished
    demogrComponents = [];
    demogrComponents.push(textbox);
    demogrComponents.push(key_resp_4);
    demogrComponents.push(text_4);
    
    for (const thisComponent of demogrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demogrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demogr' ---
    // get current time
    t = demogrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demogrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demogrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demogr' ---
    for (const thisComponent of demogrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demogr.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox.text',textbox.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "demogr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var genderMaxDurationReached;
var _key_resp_6_allKeys;
var genderMaxDuration;
var genderComponents;
function genderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'gender' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    genderClock.reset();
    routineTimer.reset();
    genderMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_3.setText('');
    textbox_3.refresh();
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    psychoJS.experiment.addData('gender.started', globalClock.getTime());
    genderMaxDuration = null
    // keep track of which components have finished
    genderComponents = [];
    genderComponents.push(text_6);
    genderComponents.push(textbox_3);
    genderComponents.push(key_resp_6);
    
    for (const thisComponent of genderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function genderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'gender' ---
    // get current time
    t = genderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // *textbox_3* updates
    if (t >= 0.0 && textbox_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_3.tStart = t;  // (not accounting for frame time here)
      textbox_3.frameNStart = frameN;  // exact frame index
      
      textbox_3.setAutoDraw(true);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of genderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function genderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'gender' ---
    for (const thisComponent of genderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('gender.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_3.text',textbox_3.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "gender" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instrMaxDurationReached;
var _key_resp_2_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(text);
    instrComponents.push(key_resp_2);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var motivationMaxDurationReached;
var _key_resp_allKeys;
var motivationMaxDuration;
var motivationComponents;
function motivationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'motivation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    motivationClock.reset();
    routineTimer.reset();
    motivationMaxDurationReached = false;
    // update component parameters for each repeat
    slider_mot_beg.reset()
    // Run 'Begin Routine' code from code_4
    // slider_mot_beg.marker.size = [0.05, 0.05];
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('motivation.started', globalClock.getTime());
    motivationMaxDuration = null
    // keep track of which components have finished
    motivationComponents = [];
    motivationComponents.push(slider_mot_beg);
    motivationComponents.push(text_3);
    motivationComponents.push(key_resp);
    
    for (const thisComponent of motivationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function motivationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'motivation' ---
    // get current time
    t = motivationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_mot_beg* updates
    if (t >= 0.0 && slider_mot_beg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_mot_beg.tStart = t;  // (not accounting for frame time here)
      slider_mot_beg.frameNStart = frameN;  // exact frame index
      
      slider_mot_beg.setAutoDraw(true);
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of motivationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function motivationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'motivation' ---
    for (const thisComponent of motivationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('motivation.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_mot_beg.response', slider_mot_beg.getRating());
    psychoJS.experiment.addData('slider_mot_beg.rt', slider_mot_beg.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "motivation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BlockLoop;
function BlockLoopLoopBegin(BlockLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    BlockLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 15, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'BlockLoop'
    });
    psychoJS.experiment.addLoop(BlockLoop); // add the loop to the experiment
    currentLoop = BlockLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlockLoop of BlockLoop) {
      snapshot = BlockLoop.getSnapshot();
      BlockLoopLoopScheduler.add(importConditions(snapshot));
      const EncodeLoopLoopScheduler = new Scheduler(psychoJS);
      BlockLoopLoopScheduler.add(EncodeLoopLoopBegin(EncodeLoopLoopScheduler, snapshot));
      BlockLoopLoopScheduler.add(EncodeLoopLoopScheduler);
      BlockLoopLoopScheduler.add(EncodeLoopLoopEnd);
      BlockLoopLoopScheduler.add(Recall_PageRoutineBegin(snapshot));
      BlockLoopLoopScheduler.add(Recall_PageRoutineEachFrame());
      BlockLoopLoopScheduler.add(Recall_PageRoutineEnd(snapshot));
      BlockLoopLoopScheduler.add(BlockLoopLoopEndIteration(BlockLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var EncodeLoop;
function EncodeLoopLoopBegin(EncodeLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    EncodeLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'EncodeLoop'
    });
    psychoJS.experiment.addLoop(EncodeLoop); // add the loop to the experiment
    currentLoop = EncodeLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEncodeLoop of EncodeLoop) {
      snapshot = EncodeLoop.getSnapshot();
      EncodeLoopLoopScheduler.add(importConditions(snapshot));
      EncodeLoopLoopScheduler.add(EncodeRoutineBegin(snapshot));
      EncodeLoopLoopScheduler.add(EncodeRoutineEachFrame());
      EncodeLoopLoopScheduler.add(EncodeRoutineEnd(snapshot));
      EncodeLoopLoopScheduler.add(EncodeLoopLoopEndIteration(EncodeLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function EncodeLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(EncodeLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function EncodeLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function BlockLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(BlockLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function BlockLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var EncodeMaxDurationReached;
var EncodeMaxDuration;
var EncodeComponents;
function EncodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Encode' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    EncodeClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    EncodeMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    const currentBlock = blocks[BlockLoop.thisN];
    const [art, trans] = currentBlock[EncodeLoop.thisN];
    
    // Передаем текст на экран
    encodeText.text = `${art.trim()} → ${trans.trim()}`;
    psychoJS.experiment.addData('Encode.started', globalClock.getTime());
    EncodeMaxDuration = null
    // keep track of which components have finished
    EncodeComponents = [];
    EncodeComponents.push(encodeText);
    EncodeComponents.push(blankScreen);
    
    for (const thisComponent of EncodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function EncodeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Encode' ---
    // get current time
    t = EncodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *encodeText* updates
    if (t >= 0.0 && encodeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      encodeText.tStart = t;  // (not accounting for frame time here)
      encodeText.frameNStart = frameN;  // exact frame index
      
      encodeText.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (encodeText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      encodeText.setAutoDraw(false);
    }
    
    
    // *blankScreen* updates
    if (t >= 3.0 && blankScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blankScreen.tStart = t;  // (not accounting for frame time here)
      blankScreen.frameNStart = frameN;  // exact frame index
      
      blankScreen.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blankScreen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blankScreen.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EncodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EncodeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Encode' ---
    for (const thisComponent of EncodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Encode.stopped', globalClock.getTime());
    if (EncodeMaxDurationReached) {
        EncodeClock.add(EncodeMaxDuration);
    } else {
        EncodeClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Recall_PageMaxDurationReached;
var _key_recall_allKeys;
var current_block;
var current_fb;
var recall_pairs;
var responses;
var locked;
var fb_inline;
var active_idx;
var cursor_visible;
var last_cursor_toggle;
var update_display;
var attempt;
var phase;
var t_block_start;
var t_attempt1_end;
var correct_1;
var Recall_PageMaxDuration;
var Recall_PageComponents;
function Recall_PageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Recall_Page' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Recall_PageClock.reset();
    routineTimer.reset();
    Recall_PageMaxDurationReached = false;
    // update component parameters for each repeat
    key_recall.keys = undefined;
    key_recall.rt = undefined;
    _key_recall_allKeys = [];
    // Run 'Begin Routine' code from code_recall
    
            // add-on: list(s: string): string[]
            function list(s) {
                // if s is a string, we return a list of its characters
                if (typeof s === 'string')
                    return s.split('');
                else
                    // otherwise we return s:
                    return s;
            }
    
            textbox_2.text = "";
    textbox.text = "";
    textbox_3.text = "";
    psychoJS.eventManager.clearEvents({"eventType": "keyboard"});
    key_recall.clearEvents();
    current_block = blocks[BlockLoop.thisN];
    current_fb = fb_conditions[BlockLoop.thisN];
    recall_pairs = list(current_block);
    recall_pairs = shuffleArray(recall_pairs);
    responses = Array(4).fill(" ");
    locked = Array(4).fill(false);
    fb_inline = Array(4).fill(null);
    active_idx = 0;
    cursor_visible = true;
    last_cursor_toggle = globalClock.getTime();
    update_display = true;
    attempt = 1;
    phase = "input";
    t_block_start = globalClock.getTime();
    t_attempt1_end = null;
    correct_1 = 0;
    recall_header.setAutoDraw(false);
    recall_body.setAutoDraw(false);
    recall_header.pos = [0, 0.35];
    recall_body.pos = [0, (- 0.1)];
    
    psychoJS.experiment.addData('Recall_Page.started', globalClock.getTime());
    Recall_PageMaxDuration = null
    // keep track of which components have finished
    Recall_PageComponents = [];
    Recall_PageComponents.push(recall_header);
    Recall_PageComponents.push(recall_body);
    Recall_PageComponents.push(key_recall);
    
    for (const thisComponent of Recall_PageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var header_text;
var body_text;
var keys;
var header;
var lines;
function Recall_PageRoutineEachFrame() {
  return async function () {
// Объявляем все переменные
// Объявляем все переменные
var art, ans, correct, lines, header, header_text, body_text, keys, resp, is_corr, trans, status, line, user;
    //--- Loop for each frame of Routine 'Recall_Page' ---
    // get current time
    t = Recall_PageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recall_header* updates
    if (t >= 0.0 && recall_header.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_header.tStart = t;  // (not accounting for frame time here)
      recall_header.frameNStart = frameN;  // exact frame index
      
      recall_header.setAutoDraw(true);
    }
    
    
    // *recall_body* updates
    if (t >= 0.0 && recall_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_body.tStart = t;  // (not accounting for frame time here)
      recall_body.frameNStart = frameN;  // exact frame index
      
      recall_body.setAutoDraw(true);
    }
    
    
    // *key_recall* updates
    if (t >= 0.0 && key_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_recall.tStart = t;  // (not accounting for frame time here)
      key_recall.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_recall.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_recall.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_recall.clearEvents(); });
    }
    
    if (key_recall.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_recall.getKeys({keyList: ['return', 'space', 'tab', 'up', 'down', 'backspace'], waitRelease: false});
      _key_recall_allKeys = _key_recall_allKeys.concat(theseKeys);
      if (_key_recall_allKeys.length > 0) {
        key_recall.keys = _key_recall_allKeys[_key_recall_allKeys.length - 1].name;  // just the last key pressed
        key_recall.rt = _key_recall_allKeys[_key_recall_allKeys.length - 1].rt;
        key_recall.duration = _key_recall_allKeys[_key_recall_allKeys.length - 1].duration;
      }
    }
    
    // Run 'Each Frame' code from code_recall
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((phase === "transition")) {
        if ((current_fb === "none")) {
            header_text = "\u041f\u043e\u043f\u044b\u0442\u043a\u0430 1 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430.\n\n\u041d\u0430\u0436\u043c\u0438\u0442\u0435 ENTER \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u043f\u044b\u0442\u043a\u0438 2";
            recall_header.setText(header_text);
            recall_header.setAutoDraw(true);
            body_text = "\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c: \u0432 \u044d\u0442\u043e\u0439 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043d\u0435\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438";
            recall_body.setText(body_text);
            recall_body.setAutoDraw(true);
        } else {
            header_text = "\u041f\u043e\u043f\u044b\u0442\u043a\u0430 1 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430. \u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c:";
            recall_header.setText(header_text);
            recall_header.setAutoDraw(true);
            lines = [];
            for (var i, _pj_c = 0, _pj_a = util.range(4), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                art = recall_pairs[i][0].trim();
                ans = responses[i].trim();
                correct = recall_pairs[i][1].trim();
                if ((current_fb === "immediate")) {
                    if (fb_inline[i]) {
                        lines.push(((((art + " -> ") + ans) + "   ") + fb_inline[i]));
                    } else {
                        lines.push(((art + " -> ") + ans));
                    }
                } else {
                    if ((current_fb === "delayed")) {
                        if ((ans.toLowerCase() === correct.toLowerCase())) {
                            lines.push((((art + " -> ") + ans) + " \u0412\u0435\u0440\u043d\u043e. "));
                        } else {
                            lines.push(((((art + " -> ") + ans) + " \u041d\u0435\u0432\u0435\u0440\u043d\u043e. \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 - ") + correct));
                        }
                    } else {
                        lines.push(((art + " -> ") + ans));
                    }
                }
            }
            recall_body.setText(lines.join("\n"));
            recall_body.setAutoDraw(true);
        }
        keys = psychoJS.eventManager.getKeys();
        for (var key, _pj_c = 0, _pj_a = keys, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            key = _pj_a[_pj_c];
            if (_pj.in_es6(key, ["return", "enter"])) {
                t_attempt1_end = globalClock.getTime();
                correct_1 = 0;
                for (var i, _pj_f = 0, _pj_d = util.range(4), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                    i = _pj_d[_pj_f];
                    if ((responses[i].trim().toLowerCase() === recall_pairs[i][1].trim().toLowerCase())) {
                        correct_1 += 1;
                    }
                }
                attempt = 2;
                recall_pairs = shuffleArray(recall_pairs);
                responses = Array(4).fill("   ");
                locked = Array(4).fill(false);
                fb_inline = Array(4).fill(null);
                active_idx = 0;
                phase = "input";
                update_display = true;
                break;
            }
        }
    }
    if ((phase === "input")) {
        recall_header.setAutoDraw(false);
        if (((globalClock.getTime() - last_cursor_toggle) > 0.5)) {
            cursor_visible = (! cursor_visible);
            last_cursor_toggle = globalClock.getTime();
            update_display = true;
        }
        if (update_display) {
            header = (("\u041f\u043e\u043f\u044b\u0442\u043a\u0430   " + attempt.toString()) + "/2  ");
            lines = [header];
            for (var i, _pj_c = 0, _pj_a = util.range(4), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                art = recall_pairs[i][0].trim();
                ans = responses[i].trim();
                line = ((art + " -> ") + ans);
                if ((((attempt === 1) && (current_fb === "immediate")) && fb_inline[i])) {
                    line = ((line + "   ") + fb_inline[i]);
                } else {
                    if ((((i === active_idx) && cursor_visible) && (! locked[i]))) {
                        line = (line + "_ ");
                    }
                }
                lines.push(line);
            }
            recall_body.setText(lines.join("\n"));
            recall_body.setAutoDraw(true);
            update_display = false;
        }
        keys = psychoJS.eventManager.getKeys();
        for (var key, _pj_c = 0, _pj_a = keys, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            key = _pj_a[_pj_c];
            if (locked[active_idx]) {
                continue;
            }
            if (_pj.in_es6(key, ["return", "enter"])) {
                if ((! responses[active_idx].trim())) {
                    continue;
                }
                correct = recall_pairs[active_idx][1].trim().toLowerCase();
                user = responses[active_idx].trim().toLowerCase();
                is_corr = (user === correct);
                locked[active_idx] = true;
                if (((attempt === 1) && (current_fb === "immediate"))) {
                    if (is_corr) {
                        fb_inline[active_idx] = "\n \u0412\u0435\u0440\u043d\u043e. ";
                    } else {
                        fb_inline[active_idx] = ("\n \u041d\u0435\u0432\u0435\u0440\u043d\u043e. \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 - " + recall_pairs[active_idx][1].trim());
                    }
                }
                if ((active_idx < 3)) {
                    active_idx += 1;
                } else {
                    if ((attempt === 1)) {
                        phase = "transition";
                    } else {
                        phase = "end_block";
                    }
                }
                update_display = true;
                continue;
            } else {
                if (_pj.in_es6(key, ["tab", "right", "down"])) {
                    if ((active_idx < 3)) {
                        active_idx += 1;
                        update_display = true;
                    }
                } else {
                    if ((key === "up")) {
                        if ((active_idx > 0)) {
                            active_idx -= 1;
                            update_display = true;
                        }
                    } else {
                        if ((key === "backspace")) {
                            responses[active_idx] = responses[active_idx].slice(0, (- 1));
                            update_display = true;
                        } else {
                            if ((key.length === 1)) {
                                responses[active_idx] = (responses[active_idx] + key);
                                update_display = true;
                            }
                        }
                    }
                }
            }
        }
    }
    if ((phase === "end_block")) {
        recall_body.setAutoDraw(false);
        recall_header.pos = [0, 0];
        recall_header.setText("\u0414\u043b\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u0431\u043b\u043e\u043a\u0443 \u0441\u043b\u043e\u0432\n\u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f \u043d\u0430\u0436\u043c\u0438\u0442\u0435 Enter");
        recall_header.setAutoDraw(true);
        keys = psychoJS.eventManager.getKeys();
        for (var key, _pj_c = 0, _pj_a = keys, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            key = _pj_a[_pj_c];
            if (_pj.in_es6(key, ["return", "enter"])) {
                continueRoutine = false;
                break;
            }
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Recall_PageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var t_block_end;
var rt_attempt1;
var rt_total;
var correct_2;
var diff_correct;
var stats;
var fb_lines;
var fb_summary;
function Recall_PageRoutineEnd(snapshot) {
  return async function () {
// Объявляем переменные
var art, trans, resp, is_corr, fb_lines, fb_summary, stats, rt_attempt1, rt_total, correct_2, diff_correct, line;
    //--- Ending Routine 'Recall_Page' ---
    for (const thisComponent of Recall_PageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Recall_Page.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_recall.corr, level);
    }
    psychoJS.experiment.addData('key_recall.keys', key_recall.keys);
    if (typeof key_recall.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_recall.rt', key_recall.rt);
        psychoJS.experiment.addData('key_recall.duration', key_recall.duration);
        }
    
    key_recall.stop();
    // Run 'End Routine' code from code_recall
    t_block_end = globalClock.getTime();
    rt_attempt1 = (t_attempt1_end ? (t_attempt1_end - t_block_start) : 0.0);
    rt_total = (t_block_end - t_block_start);
    correct_2 = 0;
    for (var i, _pj_c = 0, _pj_a = util.range(4), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((responses[i].trim().toLowerCase() === recall_pairs[i][1].trim().toLowerCase())) {
            correct_2 += 1;
        }
    }
    diff_correct = (correct_2 - correct_1);
    stats = fb_stats[current_fb];
    stats["diff_sum"] += diff_correct;
    stats["rt1_sum"] += rt_attempt1;
    stats["rt_total_sum"] += rt_total;
    stats["n"] += 1;
    psychoJS.experiment.addData("diff_correct_block", diff_correct);
    psychoJS.experiment.addData("rt_attempt1_block", rt_attempt1);
    psychoJS.experiment.addData("rt_total_block", rt_total);
    psychoJS.experiment.addData(`sum_diff_${current_fb}`, stats["diff_sum"]);
    psychoJS.experiment.addData(`avg_rt1_${current_fb}`, (stats["rt1_sum"] / stats["n"]));
    psychoJS.experiment.addData(`avg_rt_total_${current_fb}`, (stats["rt_total_sum"] / stats["n"]));
    psychoJS.experiment.addData("final_attempt", attempt);
    psychoJS.experiment.addData("fb_condition", current_fb);
    for (var i, _pj_c = 0, _pj_a = util.range(4), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        [art, trans] = recall_pairs[i];
        resp = responses[i].trim();
        is_corr = (resp.toLowerCase() === trans.toLowerCase().trim());
        psychoJS.experiment.addData(`block_${(BlockLoop.thisN + 1)}_word_${(i + 1)}_art`, art);
        psychoJS.experiment.addData(`block_${(BlockLoop.thisN + 1)}_word_${(i + 1)}_trans`, trans);
        psychoJS.experiment.addData(`block_${(BlockLoop.thisN + 1)}_word_${(i + 1)}_resp`, resp);
        psychoJS.experiment.addData(`block_${(BlockLoop.thisN + 1)}_word_${(i + 1)}_correct`, (is_corr ? 1 : 0));
    }
    fb_lines = [];
    for (var i, _pj_c = 0, _pj_a = util.range(4), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        [art, trans] = recall_pairs[i];
        resp = responses[i].trim();
        status = ((resp.toLowerCase() === trans.toLowerCase().trim()) ? "\u2705 \u0412\u0435\u0440\u043d\u043e " : `❌ Неверно (правильно: ${trans}) `);
        fb_lines.push(`${art.trim()} → ${status} `);
    }
    fb_summary = fb_lines.join("\n");
    
    // the Routine "Recall_Page" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Final_MetricsMaxDurationReached;
var Final_MetricsMaxDuration;
var Final_MetricsComponents;
function Final_MetricsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Final_Metrics' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Final_MetricsClock.reset();
    routineTimer.reset();
    Final_MetricsMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    for (const cond of ['immediate', 'delayed', 'none']) {
        const s = fb_stats[cond];
        let avg_rt1, avg_rt_total;
    
        if (s.n > 0) {
            avg_rt1 = s.rt1_sum / s.n;
            avg_rt_total = s.rt_total_sum / s.n;
        } else {
            avg_rt1 = 0.0;
            avg_rt_total = 0.0;
        }
    
        psychoJS.experiment.addData(`sum_diff_${cond}`, s.diff_sum);
        psychoJS.experiment.addData(`avg_rt1_${cond}`, avg_rt1);
        psychoJS.experiment.addData(`avg_rt_total_${cond}`, avg_rt_total);
    }
    
    continueRoutine = false;
    psychoJS.experiment.addData('Final_Metrics.started', globalClock.getTime());
    Final_MetricsMaxDuration = null
    // keep track of which components have finished
    Final_MetricsComponents = [];
    
    for (const thisComponent of Final_MetricsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Final_MetricsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Final_Metrics' ---
    // get current time
    t = Final_MetricsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Final_MetricsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Final_MetricsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Final_Metrics' ---
    for (const thisComponent of Final_MetricsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Final_Metrics.stopped', globalClock.getTime());
    // the Routine "Final_Metrics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var postoprosMaxDurationReached;
var _key_resp_3_allKeys;
var postoprosMaxDuration;
var postoprosComponents;
function postoprosRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'postopros' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    postoprosClock.reset();
    routineTimer.reset();
    postoprosMaxDurationReached = false;
    // update component parameters for each repeat
    slider_mot_end.reset()
    slider_emot.reset()
    slider_complex.reset()
    // Run 'Begin Routine' code from code_5
    // slider_mot_end.marker.size = [0.05, 0.05];
    // slider_emot.marker.size = [0.05, 0.05];
    
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('postopros.started', globalClock.getTime());
    postoprosMaxDuration = null
    // keep track of which components have finished
    postoprosComponents = [];
    postoprosComponents.push(slider_mot_end);
    postoprosComponents.push(slider_emot);
    postoprosComponents.push(slider_complex);
    postoprosComponents.push(mot_text);
    postoprosComponents.push(emot_text);
    postoprosComponents.push(complex_text);
    postoprosComponents.push(key_resp_3);
    
    for (const thisComponent of postoprosComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function postoprosRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'postopros' ---
    // get current time
    t = postoprosClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_mot_end* updates
    if (t >= 0.0 && slider_mot_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_mot_end.tStart = t;  // (not accounting for frame time here)
      slider_mot_end.frameNStart = frameN;  // exact frame index
      
      slider_mot_end.setAutoDraw(true);
    }
    
    
    // *slider_emot* updates
    if (t >= 0.0 && slider_emot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_emot.tStart = t;  // (not accounting for frame time here)
      slider_emot.frameNStart = frameN;  // exact frame index
      
      slider_emot.setAutoDraw(true);
    }
    
    
    // *slider_complex* updates
    if (t >= 0.0 && slider_complex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_complex.tStart = t;  // (not accounting for frame time here)
      slider_complex.frameNStart = frameN;  // exact frame index
      
      slider_complex.setAutoDraw(true);
    }
    
    
    // *mot_text* updates
    if (t >= 0.0 && mot_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mot_text.tStart = t;  // (not accounting for frame time here)
      mot_text.frameNStart = frameN;  // exact frame index
      
      mot_text.setAutoDraw(true);
    }
    
    
    // *emot_text* updates
    if (t >= 0.0 && emot_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      emot_text.tStart = t;  // (not accounting for frame time here)
      emot_text.frameNStart = frameN;  // exact frame index
      
      emot_text.setAutoDraw(true);
    }
    
    
    // *complex_text* updates
    if (t >= 0.0 && complex_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      complex_text.tStart = t;  // (not accounting for frame time here)
      complex_text.frameNStart = frameN;  // exact frame index
      
      complex_text.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of postoprosComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function postoprosRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'postopros' ---
    for (const thisComponent of postoprosComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('postopros.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_mot_end.response', slider_mot_end.getRating());
    psychoJS.experiment.addData('slider_mot_end.rt', slider_mot_end.getRT());
    psychoJS.experiment.addData('slider_emot.response', slider_emot.getRating());
    psychoJS.experiment.addData('slider_emot.rt', slider_emot.getRT());
    psychoJS.experiment.addData('slider_complex.response', slider_complex.getRating());
    psychoJS.experiment.addData('slider_complex.rt', slider_complex.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "postopros" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var NASA_TLX_instrMaxDurationReached;
var _key_resp_7_allKeys;
var NASA_TLX_instrMaxDuration;
var NASA_TLX_instrComponents;
function NASA_TLX_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NASA_TLX_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    NASA_TLX_instrClock.reset();
    routineTimer.reset();
    NASA_TLX_instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    psychoJS.experiment.addData('NASA_TLX_instr.started', globalClock.getTime());
    NASA_TLX_instrMaxDuration = null
    // keep track of which components have finished
    NASA_TLX_instrComponents = [];
    NASA_TLX_instrComponents.push(text_7);
    NASA_TLX_instrComponents.push(key_resp_7);
    
    for (const thisComponent of NASA_TLX_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NASA_TLX_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NASA_TLX_instr' ---
    // get current time
    t = NASA_TLX_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NASA_TLX_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NASA_TLX_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NASA_TLX_instr' ---
    for (const thisComponent of NASA_TLX_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('NASA_TLX_instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "NASA_TLX_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var NASA_TLX_um_nMaxDurationReached;
var _key_resp_8_allKeys;
var NASA_TLX_um_nMaxDuration;
var NASA_TLX_um_nComponents;
function NASA_TLX_um_nRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NASA_TLX_um_n' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    NASA_TLX_um_nClock.reset();
    routineTimer.reset();
    NASA_TLX_um_nMaxDurationReached = false;
    // update component parameters for each repeat
    slider_um_n.reset()
    // Run 'Begin Routine' code from code_6
    slider_um_n = new visual.Slider({"win": psychoJS.window, "name": "slider_um_n", "startValue": null, "size": [1.3, 0.05], "pos": [0, (- 0.15)], "units": psychoJS.window.units, "labels": ["\u041d\u0438\u0437\u043a\u0430\u044f", "|", "\u0412\u044b\u0441\u043e\u043a\u0430\u044f"], "ticks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "granularity": 0.1, "style": ["rating"], "styleTweaks": [], "opacity": null, "labelColor": [0.9216, 0.9216, 0.9216], "markerColor": "Red", "lineColor": "White", "colorSpace": "rgb", "font": "Open Sans", "labelHeight": 0.04, "labelWrapWidth": 2000, "flip": false, "ori": 0.0, "depth": 0, "readOnly": false});
    
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    psychoJS.experiment.addData('NASA_TLX_um_n.started', globalClock.getTime());
    NASA_TLX_um_nMaxDuration = null
    // keep track of which components have finished
    NASA_TLX_um_nComponents = [];
    NASA_TLX_um_nComponents.push(slider_um_n);
    NASA_TLX_um_nComponents.push(text_8);
    NASA_TLX_um_nComponents.push(key_resp_8);
    NASA_TLX_um_nComponents.push(text_10);
    
    for (const thisComponent of NASA_TLX_um_nComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NASA_TLX_um_nRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NASA_TLX_um_n' ---
    // get current time
    t = NASA_TLX_um_nClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_um_n* updates
    if (t >= 0.0 && slider_um_n.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_um_n.tStart = t;  // (not accounting for frame time here)
      slider_um_n.frameNStart = frameN;  // exact frame index
      
      slider_um_n.setAutoDraw(true);
    }
    
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NASA_TLX_um_nComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NASA_TLX_um_nRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NASA_TLX_um_n' ---
    for (const thisComponent of NASA_TLX_um_nComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('NASA_TLX_um_n.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_um_n.response', slider_um_n.getRating());
    psychoJS.experiment.addData('slider_um_n.rt', slider_um_n.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "NASA_TLX_um_n" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var NASA_TLX_timeMaxDurationReached;
var _key_resp_9_allKeys;
var NASA_TLX_timeMaxDuration;
var NASA_TLX_timeComponents;
function NASA_TLX_timeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NASA_TLX_time' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    NASA_TLX_timeClock.reset();
    routineTimer.reset();
    NASA_TLX_timeMaxDurationReached = false;
    // update component parameters for each repeat
    slider_time.reset()
    // Run 'Begin Routine' code from code_7
    slider_um_n.setAutoDraw(false);
    slider_time = new visual.Slider({"win": psychoJS.window, "name": "slider_time", "startValue": null, "size": [1.3, 0.05], "pos": [0, (- 0.15)], "units": psychoJS.window.units, "labels": ["\u0421\u043b\u0430\u0431\u043e\u0435", "|", "\u0421\u0438\u043b\u044c\u043d\u043e\u0435"], "ticks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "granularity": 0.1, "style": ["rating"], "styleTweaks": [], "opacity": null, "labelColor": [0.9216, 0.9216, 0.9216], "markerColor": "Red", "lineColor": "White", "colorSpace": "rgb", "font": "Open Sans", "labelHeight": 0.04, "labelWrapWidth": 2000, "flip": false, "ori": 0.0, "depth": 0, "readOnly": false});
    
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    psychoJS.experiment.addData('NASA_TLX_time.started', globalClock.getTime());
    NASA_TLX_timeMaxDuration = null
    // keep track of which components have finished
    NASA_TLX_timeComponents = [];
    NASA_TLX_timeComponents.push(slider_time);
    NASA_TLX_timeComponents.push(text_9);
    NASA_TLX_timeComponents.push(key_resp_9);
    NASA_TLX_timeComponents.push(text_11);
    
    for (const thisComponent of NASA_TLX_timeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NASA_TLX_timeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NASA_TLX_time' ---
    // get current time
    t = NASA_TLX_timeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_time* updates
    if (t >= 0.0 && slider_time.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_time.tStart = t;  // (not accounting for frame time here)
      slider_time.frameNStart = frameN;  // exact frame index
      
      slider_time.setAutoDraw(true);
    }
    
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NASA_TLX_timeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NASA_TLX_timeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NASA_TLX_time' ---
    for (const thisComponent of NASA_TLX_timeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('NASA_TLX_time.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_time.response', slider_time.getRating());
    psychoJS.experiment.addData('slider_time.rt', slider_time.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "NASA_TLX_time" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var NASA_TLX_successMaxDurationReached;
var _key_resp_10_allKeys;
var NASA_TLX_successMaxDuration;
var NASA_TLX_successComponents;
function NASA_TLX_successRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NASA_TLX_success' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    NASA_TLX_successClock.reset();
    routineTimer.reset();
    NASA_TLX_successMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    slider_success.reset()
    // Run 'Begin Routine' code from code_8
    slider_time.setAutoDraw(false);
    slider_success = new visual.Slider({"win": psychoJS.window, "name": "slider_time", "startValue": null, "size": [1.3, 0.05], "pos": [0, (- 0.15)], "units": psychoJS.window.units, "labels": ["\u0423\u0436\u0430\u0441\u043d\u043e", "|", "\u041e\u0442\u043b\u0438\u0447\u043d\u043e"], "ticks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "granularity": 0.1, "style": ["rating"], "styleTweaks": [], "opacity": null, "labelColor": [0.9216, 0.9216, 0.9216], "markerColor": "Red", "lineColor": "White", "colorSpace": "rgb", "font": "Open Sans", "labelHeight": 0.04, "labelWrapWidth": 2000, "flip": false, "ori": 0.0, "depth": 0, "readOnly": false});
    
    psychoJS.experiment.addData('NASA_TLX_success.started', globalClock.getTime());
    NASA_TLX_successMaxDuration = null
    // keep track of which components have finished
    NASA_TLX_successComponents = [];
    NASA_TLX_successComponents.push(key_resp_10);
    NASA_TLX_successComponents.push(text_12);
    NASA_TLX_successComponents.push(slider_success);
    NASA_TLX_successComponents.push(text_13);
    
    for (const thisComponent of NASA_TLX_successComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NASA_TLX_successRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NASA_TLX_success' ---
    // get current time
    t = NASA_TLX_successClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    
    // *slider_success* updates
    if (t >= 0.0 && slider_success.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_success.tStart = t;  // (not accounting for frame time here)
      slider_success.frameNStart = frameN;  // exact frame index
      
      slider_success.setAutoDraw(true);
    }
    
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NASA_TLX_successComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NASA_TLX_successRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NASA_TLX_success' ---
    for (const thisComponent of NASA_TLX_successComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('NASA_TLX_success.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    psychoJS.experiment.addData('slider_success.response', slider_success.getRating());
    psychoJS.experiment.addData('slider_success.rt', slider_success.getRT());
    // the Routine "NASA_TLX_success" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var NASA_TLX_effortsMaxDurationReached;
var _key_resp_11_allKeys;
var NASA_TLX_effortsMaxDuration;
var NASA_TLX_effortsComponents;
function NASA_TLX_effortsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NASA_TLX_efforts' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    NASA_TLX_effortsClock.reset();
    routineTimer.reset();
    NASA_TLX_effortsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    slider_efforts.reset()
    // Run 'Begin Routine' code from code_9
    slider_success.setAutoDraw(false);
    slider_efforts = new visual.Slider({"win": psychoJS.window, "name": "slider_time", "startValue": null, "size": [1.3, 0.05], "pos": [0, (- 0.15)], "units": psychoJS.window.units, "labels": ["\u041d\u0438\u0437\u043a\u0438\u0435", "|", "\u0412\u044b\u0441\u043e\u043a\u0438\u0435"], "ticks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "granularity": 0.1, "style": ["rating"], "styleTweaks": [], "opacity": null, "labelColor": [0.9216, 0.9216, 0.9216], "markerColor": "Red", "lineColor": "White", "colorSpace": "rgb", "font": "Open Sans", "labelHeight": 0.04, "labelWrapWidth": 2000, "flip": false, "ori": 0.0, "depth": 0, "readOnly": false});
    
    psychoJS.experiment.addData('NASA_TLX_efforts.started', globalClock.getTime());
    NASA_TLX_effortsMaxDuration = null
    // keep track of which components have finished
    NASA_TLX_effortsComponents = [];
    NASA_TLX_effortsComponents.push(text_14);
    NASA_TLX_effortsComponents.push(key_resp_11);
    NASA_TLX_effortsComponents.push(slider_efforts);
    NASA_TLX_effortsComponents.push(text_15);
    
    for (const thisComponent of NASA_TLX_effortsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NASA_TLX_effortsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NASA_TLX_efforts' ---
    // get current time
    t = NASA_TLX_effortsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }
    
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }
    
    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *slider_efforts* updates
    if (t >= 0.0 && slider_efforts.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_efforts.tStart = t;  // (not accounting for frame time here)
      slider_efforts.frameNStart = frameN;  // exact frame index
      
      slider_efforts.setAutoDraw(true);
    }
    
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NASA_TLX_effortsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NASA_TLX_effortsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NASA_TLX_efforts' ---
    for (const thisComponent of NASA_TLX_effortsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('NASA_TLX_efforts.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        psychoJS.experiment.addData('key_resp_11.duration', key_resp_11.duration);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    psychoJS.experiment.addData('slider_efforts.response', slider_efforts.getRating());
    psychoJS.experiment.addData('slider_efforts.rt', slider_efforts.getRT());
    // the Routine "NASA_TLX_efforts" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var NASA_TLX_fruMaxDurationReached;
var _key_resp_12_allKeys;
var NASA_TLX_fruMaxDuration;
var NASA_TLX_fruComponents;
function NASA_TLX_fruRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NASA_TLX_fru' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    NASA_TLX_fruClock.reset();
    routineTimer.reset();
    NASA_TLX_fruMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    slider_fru.reset()
    // Run 'Begin Routine' code from code_10
    slider_efforts.setAutoDraw(false);
    slider_fru = new visual.Slider({"win": psychoJS.window, "name": "slider_time", "startValue": null, "size": [1.3, 0.05], "pos": [0, (- 0.15)], "units": psychoJS.window.units, "labels": ["\u041d\u0438\u0437\u043a\u0438q", "|", "\u0412\u044b\u0441\u043e\u043a\u0438\u0439"], "ticks": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "granularity": 0.1, "style": ["rating"], "styleTweaks": [], "opacity": null, "labelColor": [0.9216, 0.9216, 0.9216], "markerColor": "Red", "lineColor": "White", "colorSpace": "rgb", "font": "Open Sans", "labelHeight": 0.04, "labelWrapWidth": 2000, "flip": false, "ori": 0.0, "depth": 0, "readOnly": false});
    
    psychoJS.experiment.addData('NASA_TLX_fru.started', globalClock.getTime());
    NASA_TLX_fruMaxDuration = null
    // keep track of which components have finished
    NASA_TLX_fruComponents = [];
    NASA_TLX_fruComponents.push(text_16);
    NASA_TLX_fruComponents.push(key_resp_12);
    NASA_TLX_fruComponents.push(slider_fru);
    NASA_TLX_fruComponents.push(text_17);
    
    for (const thisComponent of NASA_TLX_fruComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NASA_TLX_fruRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NASA_TLX_fru' ---
    // get current time
    t = NASA_TLX_fruClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }
    
    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }
    
    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        key_resp_12.duration = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *slider_fru* updates
    if (t >= 0.0 && slider_fru.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_fru.tStart = t;  // (not accounting for frame time here)
      slider_fru.frameNStart = frameN;  // exact frame index
      
      slider_fru.setAutoDraw(true);
    }
    
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NASA_TLX_fruComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NASA_TLX_fruRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NASA_TLX_fru' ---
    for (const thisComponent of NASA_TLX_fruComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('NASA_TLX_fru.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_12.corr, level);
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        psychoJS.experiment.addData('key_resp_12.duration', key_resp_12.duration);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    psychoJS.experiment.addData('slider_fru.response', slider_fru.getRating());
    psychoJS.experiment.addData('slider_fru.rt', slider_fru.getRT());
    // the Routine "NASA_TLX_fru" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    thanksClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_11
    slider_fru.setAutoDraw(false);
    
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(text_2);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    if (thanksMaxDurationReached) {
        thanksClock.add(thanksMaxDuration);
    } else {
        thanksClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var OSFMaxDurationReached;
var OSFMaxDuration;
var OSFComponents;
function OSFRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'OSF' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    OSFClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    OSFMaxDurationReached = false;
    // update component parameters for each repeat
    // Отключаем скачивание через браузер
    psychoJS._saveResults = 0;
    
    // Именуем файлы
    let filename = psychoJS.experiment._participant +  '_' + psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    // Достаем дата обджект из эксперимента
    let dataObj = psychoJS._experiment._trialsData;
    // Конвертируем в csv
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    // Отправляем на OSF через DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
         },   
         body: JSON.stringify({
            experimentID: 'RNtqOO6cbXEq', // * DATAPIPE EXP ID*
            filename: filename, 
            data: data,
         }),
    }).then(response => response.json()).then(data => {
    // Кидаем в консоль результат и выходим из эксперимента
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('OSF.started', globalClock.getTime());
    OSFMaxDuration = null
    // keep track of which components have finished
    OSFComponents = [];
    OSFComponents.push(text_18);
    
    for (const thisComponent of OSFComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function OSFRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'OSF' ---
    // get current time
    t = OSFClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_18.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of OSFComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function OSFRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'OSF' ---
    for (const thisComponent of OSFComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('OSF.stopped', globalClock.getTime());
    if (OSFMaxDurationReached) {
        OSFClock.add(OSFMaxDuration);
    } else {
        OSFClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
