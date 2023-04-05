class Subject {
  constructor(title, points = []) {
    this.title = title;
    this.points = points;
  }
}

function createSubjects() {
  const template = {
    Candidates: new Subject("Кандидаты"),
    Experience: new Subject("Опыт", [
      { grade: 10, skills: [{ id: 0, skill: "Годы работы", noValue: true }] },
    ]),
    TaskLevel: new Subject("Уровень решаемых задач", [
      {
        grade: 3,
        skills: [
          {
            id: 0,
            skill: "Для выполнения задачи нужна четкая и детальная постановка",
          },
          { id: 1, skill: "Не укладывается в рамки своих оценок" },
          { id: 2, skill: "Фиксит баги или делает совсем небольшие задачи" },
          { id: 3, skill: "Задает много вопросов" },
        ],
      },
      {
        grade: 5,
        skills: [
          { id: 0, skill: "Укладывается в свои оценки" },
          {
            id: 1,
            skill: "Реализует задачи средней и более высокой степени сложности",
          },
          {
            id: 2,
            skill:
              "Может рассказать про особенности реализации и что можно было сделать лучше",
          },
          {
            id: 3,
            skill:
              "Может разобраться в постановке, в технологиях, выявить неверную постановку задачи, связаться для уточнения требований, предложить свой вариант решения.",
          },
          { id: 4, skill: "Может делать код ревью." },
          {
            id: 5,
            skill:
              "Может подсказать специалистам команды по коду, процессам, методологиям",
          },
          {
            id: 6,
            skill:
              "Привносит в проект что-то новое по техническим и организационным вопросам",
          },
          {
            id: 7,
            skill:
              "Уверенно делает код ревью (знает, что такое чистый и поддерживаемый код)",
          },
          { id: 8, skill: "Знает основные паттерны проектирования" },
          { id: 9, skill: "Пишет тесты" },
        ],
      },
      {
        grade: 8,
        skills: [
          {
            id: 0,
            skill:
              "Проектировал и реализовывал архитектуру общих механизмов, подсистем(модулей), целиком проекта",
          },
          {
            id: 1,
            skill:
              "Знает чем монолит отличается от микросервисов (другие архитектуры), их плюсы и минусы Когда стоит применять ту или иную технологию.",
          },
          { id: 2, skill: "Быстро и без ошибок реализует задачи" },
          {
            id: 3,
            skill:
              "Ориентируется в методологиях agile, процессах, взаимодействии внутри команды, умеет хитрые команды в гите, знает инфраструктурные вещи (docker, горизонтальное и вертикальное масштабирование)",
          },
          {
            id: 4,
            skill:
              "Заботится о производительности, поддерживаемости, читабельности кода",
          },
        ],
      },
    ]),
    CSharp: new Subject("NET - C#", [
      {
        grade: 0,
        skills: [{ id: 0, skill: "Знание ООП" }],
      },
      {
        grade: 1,
        skills: [{ id: 1, skill: "Конструкции языка" }],
      },
      {
        grade: 3,
        skills: [
          { id: 0, skill: "Классы и объекты" },
          { id: 1, skill: "Свойства, поля" },
          { id: 2, skill: "Вирутальные" },
          { id: 3, skill: "Статические" },
          { id: 4, skill: "Абстрактные" },
          { id: 9, skill: "Интерфейсы" },
          { id: 5, skill: "Делегаты" },
          { id: 6, skill: "Action, Predicate, Func" },
          { id: 7, skill: "Лямбда" },
          { id: 8, skill: "Модификаторы доступа" },
        ],
      },
      {
        grade: 5,
        skills: [
          { id: 0, skill: "IDisposable" },
          { id: 1, skill: "IEnumerator" },
          { id: 2, skill: "IClonable" },
          { id: 3, skill: "IEnumerable" },
          { id: 4, skill: "стек и куча" },
          { id: 5, skill: "using" },
          { id: 6, skill: "boxing unboxing" },
          { id: 7, skill: "Дженерики" },
          { id: 8, skill: "ref, in, out" },
          { id: 9, skill: "StringBuilder" },
          { id: 10, skill: "Dictionary, List" },
        ],
      },
      {
        grade: 7,
        skills: [
          { id: 0, skill: "Какие в LINQ есть операции" },
          {
            id: 1,
            skill: "Глубокие знания о GC",
            how: "очередь для финализации? Паттерн Dispose. Поколения",
          },
          {
            id: 2,
            skill:
              "Многопоточность (контекст синхронизации, выполнения. дедлоки)",
          },
          {
            id: 9,
            skill:
              "Монитор, индекс блока синхронизации (блокировки уровня ядра)",
          },
          {
            id: 4,
            skill: "Мьютекс, семафор",
          },
          {
            id: 10,
            skill: "Autoreset event, manualresetevent,",
          },
          { id: 11, skill: "PLINQ" },
          {
            id: 12,
            skill: "Concurrent collections",
          },
          { id: 5, skill: "Связность кода, связанность" },
          { id: 6, skill: "async/await (контекст синхронизации)" },
          { id: 13, skill: "Task.Run, IO/CPU Bound" },
          { id: 14, skill: "When all" },
          { id: 7, skill: "утечки памяти, weak reference" },
          { id: 8, skill: "IObservable" },
          { id: 3, skill: "Профайлинг и оптимизация кода" },
        ],
      },
      {
        grade: 10,
        skills: [
          {
            id: 0,
            skill:
              "Пишет для себя библиотеки и переиспользует их в своих проектах",
          },
          { id: 1, skill: "IL" },
          {
            id: 2,
            skill: "Участвует в разработке одного из популярных фреймворка",
          },
          { id: 3, skill: "unsafe" },
          { id: 4, skill: "span" },
        ],
      },
    ]),
    MVC: new Subject("ASP.NET MVC", [
      {
        grade: 0,
        skills: [{ id: 0, skill: "Не использовал" }],
      },
      {
        grade: 1,
        skills: [
          {
            id: 0,
            skill: "есть простой пет проект с использованием фреймворка",
          },
        ],
      },
      {
        grade: 3,
        skills: [{ id: 0, skill: "Базовые знания о фреймворке" }],
      },
      {
        grade: 5,
        skills: [
          {
            id: 0,
            skill: "HttpModule, HttpHandler, Аннотации данных DisplayName",
          },
          {
            id: 1,
            skill: "Filters",
            how: `Фильтры авторизации: определяют, авторизован ли пользователь для выполнения текущего запроса. Если пользователь не авторизован для доступа к ресурсу, то фильтр завершает обработку запроса.
Фильтры ресурсов: выполняются после фильтров авторизации. Его метод OnResourceExecuting() выполняется до всех остальных фильтров и до привязки модели, а его метод OnResourceExecuted() выполняется после всех остальных фильтров
Фильтры действий
Фильтры RazorPages
Фильтры исключений
Фильтры результатов действий`,
          },
          {
            id: 2,
            skill: "Cache, Coockie, Session",
          },
          {
            id: 3,
            skill: "MVC",
          },
          {
            id: 4,
            skill: "ViewBag, ViewData, Способ передачи данных",
          },
          {
            id: 5,
            skill: "Razor, _ViewImports, _Layout",
          },
          {
            id: 6,
            skill: "Http Methods",
          },
          {
            id: 7,
            skill: "Model Validator, Model Binding",
          },
          {
            id: 8,
            skill: "Antiforgery, CORS",
          },
          { id: 9, skill: "T4MVC" },
          { id: 10, skill: "Routing" },
        ],
      },
      {
        grade: 7,
        skills: [
          {
            id: 0,
            skill:
              "создавал кастомные фильтры, Html хелперы, имеет опыт проектирования MVC приложения с нуля. Знает альтернативы фреймворку, их плюсы и минусы",
          },
        ],
      },
      {
        grade: 10,
        skills: [
          {
            id: 0,
            skill:
              "Знает всю подноготную MVC, решал проблемы производительности. Работал с альтернативными фреймворками. Знает их плюсы и минусы",
          },
        ],
      },
    ]),
    WebApi: new Subject("ASP.NET Web API", [
      {
        grade: 0,
        skills: [{ id: 0, skill: "Не использовал" }],
      },
      {
        grade: 1,
        skills: [
          {
            id: 0,
            skill: "Есть простой пет проект с использованием фреймворка",
          },
        ],
      },
      {
        grade: 3,
        skills: [{ id: 0, skill: "Есть базовые знания о фреймворке" }],
      },
      {
        grade: 5,
        skills: [
          {
            id: 4,
            skill: "Коды ответов",
          },
          {
            id: 0,
            skill: "POST/GET",
          },
          {
            id: 1,
            skill: "Как обрабатываются исключения в контроллерах",
          },
          {
            id: 2,
            skill: "Чем отличается Core",
          },
          {
            id: 3,
            skill: "Чем отличается HttpHandler от HttpModule",
          },
        ],
      },
      {
        grade: 7,
        skills: [
          {
            id: 0,
            skill:
              "Создавал кастомные фильтры, имеет опыт проектирования приложения с нуля. Знает альтернативы фреймворку, их плюсы и минусы",
          },
          {
            id: 1,
            skill: "REST",
          },
        ],
      },
      {
        grade: 10,
        skills: [
          {
            id: 0,
            skill:
              "Знает всю подноготную Web API, решал проблемы производительности. Работал с альтернативными фреймворками",
          },
        ],
      },
    ]),
    AspNetCore: new Subject("ASP.NET Core", [
      {
        grade: 0,
        skills: [{ id: 0, skill: "Не использовал" }],
      },
      {
        grade: 1,
        skills: [
          {
            id: 0,
            skill: "Есть простой пет проект с использованием фреймворка",
          },
        ],
      },
      {
        grade: 3,
        skills: [{ id: 0, skill: "Есть базовые знания о фреймворке" }],
      },
      {
        grade: 5,
        skills: [
          {
            id: 7,
            skill: "Состав HTTP",
          },
          {
            id: 0,
            skill: "Знает отличия .NET Framework и .NET Core. ",
          },
          { id: 1, skill: "Middleware" },
          {
            id: 2,
            skill: "DI",
            how: "Способы внедрения",
          },
          { id: 3, skill: "Lifecycle" },
          { id: 4, skill: "Partial" },
          { id: 5, skill: "ViewComponent" },
          {
            id: 6,
            skill: "Знает и правильно применяет Http Methods.",
          },
        ],
      },
      {
        grade: 7,
        skills: [
          {
            id: 0,
            skill:
              "Имеет опыт проектирования приложения с нуля. Знает плюсы и минусы платформы",
          },
        ],
      },
      {
        grade: 10,
        skills: [
          {
            id: 0,
            skill:
              "Знает всю подноготную, решал проблемы производительности, знает плюсы и минусы. Аргументированно может обосновать выбор платформы",
          },
        ],
      },
    ]),
    Wpf: new Subject("WPF", [
      {
        grade: 0,
        skills: [{ id: 0, skill: "Не использовал" }],
      },
      {
        grade: 1,
        skills: [
          {
            id: 0,
            skill: "Есть простой пет проект с использованием фреймворка",
          },
        ],
      },
      {
        grade: 3,
        skills: [{ id: 0, skill: "Есть базовые знания о фреймворке" }],
      },
      {
        grade: 5,
        skills: [
          { id: 0, skill: "MVVM" },
          {
            id: 1,
            skill: "DependencyObject",
            how: "Регистрация свойства. Обычное свойство .NET  - обертка над свойством зависимостей",
          },
          {
            id: 2,
            skill:
              "PropertyChangedCallback: хранит ссылку на метод, который вызывается при изменении значения свойства",
          },
          {
            id: 3,
            skill:
              "CoerceValueCallback: хранит ссылку на метод, который применяется для проверки допустимости значения до его валидации. Если значение не допустимо, то оно может корректироваться, чтобы соответствовать допустимым диапазонам.",
          },
          { id: 4, skill: "Commands" },
          { id: 5, skill: "INotifyPropertyChanged" },
          { id: 6, skill: "IValueConverter" },
          { id: 7, skill: "Bindings" },
        ],
      },
      {
        grade: 7,
        skills: [
          { id: 0, skill: "DataTemplate, ControlTemplate, DependancyProperty" },
          { id: 1, skill: "DevExpress" },
          { id: 2, skill: "DI" },
          { id: 3, skill: "Многопоточность" },
          { id: 4, skill: "ObservableCollection" },
          {
            id: 5,
            skill: "Триггеры",
            how: `Триггеры свойств: вызываются в ответ на изменения свойствами зависимостей своего значения <br />
Триггеры данных: вызываются в ответ на изменения значений любых свойств (они необязательно должны быть свойствами зависимостей)<br />
Триггеры событий: вызываются в ответ на генерацию событий<br />
Мультитриггеры: вызываются при выполнении ряда условий`,
          },
        ],
      },
      {
        grade: 10,
        skills: [
          { id: 0, skill: "IoC, RxExtensions" },
          { id: 1, skill: "Логическое и визуальное Дерево" },
          { id: 2, skill: "События" },
        ],
      },
    ]),
    Orm: new Subject("ORM", [
      {
        grade: 0,
        skills: [{ id: 0, skill: "Не использовал" }],
      },
      {
        grade: 1,
        skills: [
          {
            id: 0,
            skill: "Есть простой пет проект с использованием фреймворка",
          },
        ],
      },
      {
        grade: 3,
        skills: [{ id: 0, skill: "Есть базовые знания о фреймворке" }],
      },
      {
        grade: 5,
        skills: [
          {
            id: 0,
            skill: "Lazy, Lager loading",
          },
          {
            id: 1,
            skill: "Change tracking",
          },
          {
            id: 2,
            skill: "IQueryable",
          },
          {
            id: 3,
            skill: "Code first, DB first, Model first, ",
          },
          {
            id: 4,
            skill: "Context, Transactions",
          },
          { id: 5, skill: "Migration, Fuent Api" },
        ],
      },
      {
        grade: 7,
        skills: [
          {
            id: 4,
            skill: "Проблемы многопоточной работы. Timestamp",
          },
          {
            id: 0,
            skill:
              "Знает об альтернативных ORM, есть несколько проектов, использующих EF, написанных с нуля",
          },
          {
            id: 1,
            skill: "Репозиторий",
          },
          {
            id: 2,
            skill: "UnitOfWork",
          },
          {
            id: 3,
            skill: "CQRS",
          },
        ],
      },
      {
        grade: 10,
        skills: [
          {
            id: 0,
            skill:
              "Решал проблемы производительности, писал кастомные экстеншены, оптимизировал запросы.",
          },
          {
            id: 1,
            skill: "Работал с NHibirnate / Dapper",
          },
        ],
      },
    ]),
    DB: new Subject("Базы данных", [
      {
        grade: 0,
        skills: [{ id: 0, skill: "Не знает SQL" }],
      },
      {
        grade: 1,
        skills: [
          {
            id: 0,
            skill:
              "Знание основного синтаксиса (select, insert, update, delete).",
          },
        ],
      },
      {
        grade: 2,
        skills: [
          {
            id: 0,
            skill:
              "Имеет опыт с CRUD операциями (select, insert, update, delete, order by)",
          },
          {
            id: 1,
            skill: "Владеет агрегациями (group by, having)",
          },
        ],
      },
      {
        grade: 3,
        skills: [
          {
            id: 0,
            skill: "Знает что такое первичный, внешний, составной ключи",
          },
          {
            id: 8,
            skill: "Join",
          },
          {
            id: 9,
            skill: "Типы связей в реляционных базах данных",
          },
          {
            id: 1,
            skill: "Умеет читать/разбираться в скриптах создания таблиц и схем",
          },
          {
            id: 2,
            skill: "Вложенные запросы",
          },
          {
            id: 3,
            skill: "Создание удаление, обновление сущностей в БД",
          },
          {
            id: 4,
            skill: "Вьюшки",
          },
          {
            id: 5,
            skill: "Простые индексы (бинарное дерево), зачем нужны индексы",
          },
          {
            id: 6,
            skill: "Нормализация / денормализация",
          },
          { id: 7, skill: "Union" },
        ],
      },
      {
        grade: 4,
        skills: [
          {
            id: 0,
            skill: "Копирование данных из таблицы в таблицу (insert select).",
          },
          {
            id: 1,
            skill: "Обновление данных на основе другой таблицы (update from).",
          },
          {
            id: 2,
            skill: "Ограничения (constraint).",
          },
          {
            id: 3,
            skill: "Разные типы индексов (деревья, карты, хэш).",
          },
          {
            id: 4,
            skill: "Транзакции (ACID, изоляции)",
          },
          {
            id: 5,
            skill: "Пользуется планом выполнения запроса (explain plan)",
          },
        ],
      },
      {
        grade: 5,
        skills: [
          {
            id: 0,
            skill: "Триггеры",
          },
          {
            id: 1,
            skill: "Курсоры",
          },
          {
            id: 2,
            skill: "Понимает, что такое хранимая процедура и как ее запустить",
          },
          {
            id: 3,
            skill: "Каскадные операции",
          },
          {
            id: 4,
            skill: "Генерация ключей (sequence).",
          },
          {
            id: 5,
            skill: "Умеет делать резервные копии и восстанавливать данные",
          },
          {
            id: 6,
            skill: "Рекурсивные и условные запросы",
          },
        ],
      },
      {
        grade: 6,
        skills: [
          {
            id: 0,
            skill: "Гранты, роли.",
          },
          {
            id: 1,
            skill: "Может написать хранимую процедуру и юнит-тест к ней.",
          },
          {
            id: 2,
            skill: "Оперирует с materialized view.",
          },
          {
            id: 3,
            skill:
              "Знает все объекты БД - дб-линки, типы, джобы, синонимы, пакеты и т.д.",
          },
        ],
      },
      {
        grade: 7,
        skills: [
          {
            id: 0,
            skill: "Решает проблемы с конкурентным выполнением.",
          },
          {
            id: 1,
            skill: "Партицирование.",
          },
          {
            id: 2,
            skill: "Оконные функции",
          },
          {
            id: 3,
            skill:
              "Хранимки по генерации отчетов (JasperReport, FastReport, Report services).",
          },
        ],
      },
      {
        grade: 8,
        skills: [
          {
            id: 0,
            skill: "Генерация исключений",
          },
          {
            id: 1,
            skill: "Временные таблицы",
          },
          {
            id: 2,
            skill: "Глобальные переменные",
          },
          {
            id: 3,
            skill:
              "Уверенная работа в различных БД, включая NoSQL (разработка, минимальное администрирование).",
          },
        ],
      },
      {
        grade: 9,
        skills: [
          {
            id: 0,
            skill: "Транзакции в хранимых процедурах",
          },
          {
            id: 1,
            skill: "Оптимизация производительности, поиск узких мест.",
          },
          {
            id: 2,
            skill: "Репликации.",
          },
          {
            id: 3,
            skill: "Работа с СУБД из консоли.",
          },
        ],
      },
      {
        grade: 10,
        skills: [
          {
            id: 0,
            skill:
              "Умеет обосновать выбор конкретной СУБД и решения в рамках СУБД с технической стороны",
          },
          {
            id: 1,
            skill: "Кластеризация.",
          },
          {
            id: 2,
            skill: "Технический анализ проблем.",
          },
        ],
      },
    ]),
    Architecture: new Subject("Архитектура и Чистый код", [
      {
        grade: 10,
        skills: [
          { id: 0, skill: "Паттерны" },
          { id: 1, skill: "SOLID" },
          { id: 2, skill: "GOF" },
          { id: 3, skill: "DRY" },
          { id: 4, skill: "3-звенная архитектура, onion" },
          { id: 5, skill: "Чистая архитектура" },
          { id: 6, skill: "микросервисная архитектура" },
          {
            id: 7,
            skill:
              "Аутентификация вроде openId-connect(как примерно реализуется, знает ли flows, спросить про identityServer)",
          },
          { id: 8, skill: "Очереди вроде RabbitMq" },
          {
            id: 9,
            skill:
              "Circuit Braker? (Какие реализации в asp (polly))Какие еще клауд паттерны знает (retry)",
          },
          { id: 10, skill: "Saga паттерн/Compensating transactions" },
          { id: 11, skill: "Шардинг /партиционирование? Что такое репликация" },
          { id: 12, skill: "Кэши использовал? Зачем они?(Например Redis)" },
          { id: 13, skill: "ssl termination" },
          { id: 14, skill: "Оркестраторами" },
          { id: 15, skill: "green blue deployment" },
          { id: 16, skill: "NOSQL" },
        ],
      },
    ]),
    Other: new Subject("Кругозор", [
      {
        grade: 10,
        skills: [
          {
            id: 0,
            noValue: true,
            skill:
              "Docker, git, Администрирование, Front, BigData, фигма, фотошоп, 3d",
          },
        ],
      },
    ]),
    SoftSkills: new Subject("SoftSkills", [
      {
        grade: 10,
        skills: [
          {
            id: 0,
            skill: "Коммуникабельность",
          },
          {
            id: 1,
            skill: "Общительность",
            how: "Легко ли человек идет на контакт? Приятно ли с ним общаться? Хоте ли бы вы с ним сидеть в одном кабинете? ",
          },
          {
            id: 2,
            skill: "Ответственность",
            how: "Признает ли свои ошибки во время собеседования? Был ли подготовлен к собеседованию?",
          },
          {
            id: 3,
            skill: "Живость ума",
            how: "Как глубоко копает вопрос? Может ли сделать вывод и ответить правильно, после подсказки?",
          },
          { id: 4, skill: "Самообучаемость", how: "" },
        ],
      },
    ]),
  };

  Object.keys(template).forEach((id) => {
    template[id].id = id;
  });

  return template;
}

export default {
  createSubjects,
};
