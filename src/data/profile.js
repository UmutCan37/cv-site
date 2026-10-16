export const profile = {
  name: "Umut Can Yavru",
  title: ".NET Backend Developer",
  currentRole: "Bilgisayar Mühendisi",
  location: "İstanbul",
  email: "umutcanyavru@gmail.com",
  photoUrl: "/profile.jpg",
  cvUrl: "/Umut_Can_Yavru_CV.pdf",
  cvFileName: "Umut_Can_Yavru_CV.pdf",
  links: {
    github: "https://github.com/UmutCan37",
    linkedin: "https://www.linkedin.com/in/umut-can-yavru-792b5723a",
  },
  intro:
    "Bilgisayar Mühendisiyim. C#, ASP.NET Core ve SQL Server ile çalışıyor; Clean Architecture, CQRS ve DDD ile sürdürülebilir sistemler kuruyorum.",
  about: [
    "2025’te Tekirdağ Namık Kemal Üniversitesi Bilgisayar Mühendisliği’nden mezun oldum. Şu anda BS Bizim Servis’te ERP platformu üzerinde iş süreçleri, formlar, SSRS raporları ve SOAP entegrasyonları üzerinde çalışıyorum.",
    "M&Y Yazılım Akademi’deki .NET Full Stack bootcamp’inde N-katmanlı mimariden Clean Architecture, CQRS ve DDD’ye uzanan 10 vaka projesi geliştirdim.",
  ],
};

// end: null → hâlâ devam ediyor
export const experiences = [
  {
    id: "bs-bizim-servis",
    role: "Yazılım Geliştirme Asistanı",
    company: "BS Bizim Servis",
    start: "2026-04",
    end: null,
    summary:
      "ERP üzerinde iş süreçleri, formlar ve otomasyonlar; SQL Server, XML/XPath ve JavaScript ile veri işlemleri; SSRS/Report Builder raporları ve SOAP entegrasyon süreçleri.",
  },
  {
    id: "dorak-holding",
    role: "Python Developer Stajyeri",
    company: "Dorak Holding",
    start: "2025-02",
    end: "2025-06",
    summary:
      "Odoo ERP’de modül özelleştirme ve yeni modül geliştirme; XML ve Python ile form, rapor ve iş akışı düzenlemeleri.",
  },
  {
    id: "tiryaki-agro",
    role: "Full-Stack Developer Stajyeri",
    company: "Tiryaki Agro",
    start: "2024-07",
    end: "2024-09",
    summary:
      "ASP.NET ile RESTful API, Entity Framework ile veri modeli tasarımı, entegre backend servislerde bakım.",
  },
  {
    id: "iett",
    role: "Full-Stack Developer Stajyeri",
    company: "İETT",
    start: "2023-07",
    end: "2023-09",
    summary:
      "ASP.NET ile web uygulaması geliştirme, SQL sorguları ve Entity Framework ile CRUD işlemleri.",
  },
];

// repoUrl: null → kartta GitHub linki gösterilmez
export const projects = [
  {
    id: "melodia",
    name: "Melodia",
    description:
      "Paket tabanlı müzik dinleme platformu. Refresh token rotation’lı JWT, pakete göre erişimi yöneten domain servisi ve HMAC imzalı streaming URL.",
    tags: [".NET 9", "DDD", "CQRS", "Angular 21", "PrimeNG"],
        repoUrl: "https://github.com/UmutCan37/Melodia",
  },
  {
    id: "organica-commerce",
    name: "OrganicaCommerce",
    description:
      "Clean Architecture e-ticaret platformu. 7 tasarım deseni, MediatR pipeline behavior’ları ve domain event’lerle sipariş/stok bildirimleri.",
    tags: [".NET 9", "MVC + Web API", "EF Core", "MSSQL"],
    repoUrl: "https://github.com/UmutCan37/OrganicaCommerce",
  },
  {
    id: "carola-rent-a-car",
    name: "CarolaRentACar",
    description:
      "Araç kiralama uygulaması. OpenAI ile sohbet asistanı ve GPT-4o Vision ile kimlik/ehliyet okuma (OCR).",
    tags: ["ASP.NET Core", "OpenAI API", "FluentValidation", "MailKit"],
        repoUrl: "https://github.com/UmutCan37/CarolaRentACar",
  },
  {
    id: "dapper-big-data",
    name: "DapperBigData",
    description:
      "1M+ kayıt üzerinde analitik dashboard. Sunucu taraflı sayfalama, index optimizasyonu, paralel async sorgular, Excel/PDF dışa aktarma.",
    tags: ["Dapper", "SQL Server", "Chart.js"],
        repoUrl: "https://github.com/UmutCan37/DapperBigData",
  },
];

export const skillGroups = [
  {
    id: "backend",
    title: "backend",
    items: ["C#", "ASP.NET Core", "EF Core", "Dapper", "MediatR", "FluentValidation", "Serilog", "REST", "JWT"],
  },
  {
    id: "frontend-data",
    title: "frontend & data",
    items: ["Angular", "PrimeNG", "React", "JavaScript", "SQL Server", "MongoDB", "SSRS", "Report Builder"],
  },
  {
    id: "architecture-tools",
    title: "mimari & araçlar",
    items: ["Clean Architecture", "DDD", "CQRS", "SOLID", "Tasarım Desenleri", "SOAP", "Git", "Agile/Scrum"],
  },
];

export const education = [
  {
    id: "nku",
    school: "Tekirdağ Namık Kemal Üniversitesi",
    program: "Bilgisayar Mühendisliği",
    period: "2021 – 2025",
    note: "GNO 3.44",
  },
  {
    id: "anadolu",
    school: "Anadolu Üniversitesi",
    program: "Yönetim Bilişim Sistemleri",
    period: "2024 – Devam",
    note: null,
  },
  {
    id: "my-akademi",
    school: "M&Y Yazılım Akademi",
    program: ".NET Full Stack Developer Bootcamp",
    period: "2025 – 2026",
    note: null,
  },
];