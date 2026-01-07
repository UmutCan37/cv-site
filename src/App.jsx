import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, FileText, Briefcase, GraduationCap, Code2 } from "lucide-react";

const GITHUB_USERNAME = "UmutCan37";

const CodeLine = ({ delay = 0 }) => {
  const codes = [
    "const develop = () => awesome;",
    "await api.fetch();",
    "if (bug) fix();",
    "class Backend {}",
    "deploy(build);",
    "console.log('alive');",
    "using System.Linq;",
    "from odoo import models",
    "SELECT * FROM skills;",
    "git commit -m 'feat'",
    "app.use(middleware);",
    "Entity<User>.HasKey(x => x.Id);",
    "db.collection.find();",
    "async def main():",
    "return response.json();",
    "npm install package",
    "docker build -t app .",
    "kubectl apply -f deploy.yaml",
    "CREATE TABLE users;",
    "git push origin main",
    "pip install odoo",
    "dotnet run --project",
    "var result = await query;",
    "public class Service {}",
    "app.Run();",
    "INSERT INTO logs VALUES",
    "UPDATE users SET active",
    "def process_data():",
    "return Ok(data);",
    "using Microsoft.AspNetCore;",
  ];

  const [code] = useState(codes[Math.floor(Math.random() * codes.length)]);
  const [pos] = useState({
    top: Math.random() * 100,
    left: Math.random() * 100,
  });

  const [offsetX, setOffsetX] = useState(-120);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setOffsetX((prev) => {
          if (prev > 400) {
            return -120;
          }
          return prev + 3;
        });
      }, 30);
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const getOpacity = () => {
    if (offsetX < -100 || offsetX > 350) return 0;
    if (offsetX < 0) return (offsetX + 120) / 120;
    if (offsetX > 250) return 1 - (offsetX - 250) / 100;
    return 0.6;
  };

  return (
    <div
      className="absolute text-emerald-400 text-xs font-mono whitespace-nowrap select-none pointer-events-none"
      style={{
        top: pos.top + "%",
        left: pos.left + "%",
        transform: "translateX(" + offsetX + "px)",
        opacity: getOpacity(),
      }}
    >
      {code}
    </div>
  );
};

export default function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/" + GITHUB_USERNAME + "/repos?per_page=6&sort=updated")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.filter((r) => !r.fork).slice(0, 6));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <CodeLine delay={0} />
        <CodeLine delay={0.2} />
        <CodeLine delay={0.4} />
        <CodeLine delay={0.6} />
        <CodeLine delay={0.8} />
        <CodeLine delay={1} />
        <CodeLine delay={1.2} />
        <CodeLine delay={1.4} />
        <CodeLine delay={1.6} />
        <CodeLine delay={1.8} />
        <CodeLine delay={2} />
        <CodeLine delay={2.2} />
        <CodeLine delay={2.4} />
        <CodeLine delay={2.6} />
        <CodeLine delay={2.8} />
        <CodeLine delay={3} />
        <CodeLine delay={3.2} />
        <CodeLine delay={3.4} />
        <CodeLine delay={3.6} />
        <CodeLine delay={3.8} />
        <CodeLine delay={4} />
        <CodeLine delay={4.2} />
        <CodeLine delay={4.4} />
        <CodeLine delay={4.6} />
        <CodeLine delay={4.8} />
        <CodeLine delay={5} />
        <CodeLine delay={5.2} />
        <CodeLine delay={5.4} />
        <CodeLine delay={5.6} />
        <CodeLine delay={5.8} />
        <CodeLine delay={6} />
        <CodeLine delay={6.2} />
        <CodeLine delay={6.4} />
        <CodeLine delay={6.6} />
        <CodeLine delay={6.8} />
        <CodeLine delay={7} />
        <CodeLine delay={7.2} />
        <CodeLine delay={7.4} />
        <CodeLine delay={7.6} />
        <CodeLine delay={7.8} />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px)", backgroundSize: "4rem 4rem" }}></div>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">UCY</h2>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection("home")} className="hidden md:block hover:text-emerald-400 transition">Ana Sayfa</button>
            <button onClick={() => scrollToSection("about")} className="hidden md:block hover:text-emerald-400 transition">Hakkımda</button>
            <button onClick={() => scrollToSection("skills")} className="hidden md:block hover:text-emerald-400 transition">Yetenekler</button>
            <button onClick={() => scrollToSection("education")} className="hidden md:block hover:text-emerald-400 transition">Eğitim</button>
            <button onClick={() => scrollToSection("experience")} className="hidden md:block hover:text-emerald-400 transition">Deneyim</button>
            <button onClick={() => scrollToSection("projects")} className="hidden md:block hover:text-emerald-400 transition">Projeler</button>
            <button onClick={() => scrollToSection("contact")} className="hidden md:block hover:text-emerald-400 transition">İletişim</button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">

        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">

          <div className="relative mb-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-emerald-500/50">
              <Code2 size={80} className="text-white" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-slate-950">
              <span className="text-2xl">💻</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            Umut Can <span className="text-emerald-400">Yavru</span>
          </h1>
          <p className="mt-8 text-2xl text-slate-300">Bilgisayar Mühendisi</p>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Backend geliştirme alanında uzmanlaşmış, ölçeklenebilir ve sürdürülebilir sistemler tasarlayan yazılım geliştirici</p>

          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="/UMUTCANYAVRU.pdf"
              download="Umut_Can_Yavru_CV.pdf"
              type="application/pdf"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition font-semibold"
            >
              <Download size={20} />
              CV İndir
            </a>

            <button onClick={() => scrollToSection("contact")} className="flex items-center gap-2 px-6 py-3 border border-emerald-500 hover:bg-emerald-500/20 rounded-lg transition">
              <Mail size={20} />
              İletişime Geç
            </button>
          </div>
        </section>

        <section id="about" className="min-h-screen flex flex-col justify-center py-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Hakkımda</h2>
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-lg text-slate-300 leading-relaxed">
              2025 yılı Temmuz ayında Tekirdağ Namık Kemal Üniversitesi Bilgisayar Mühendisliği bölümünden
              <span className="text-emerald-400 font-semibold"> 3.44 GNO</span> ile mezun oldum.
              Üniversite eğitimim boyunca yazılım geliştirme alanında hem teorik hem de pratik bilgiler edinmeye odaklandım.
            </p>

            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Öğrencilik hayatım boyunca tamamladığım <span className="text-emerald-400 font-semibold">3 farklı staj</span> sayesinde
              özellikle <span className="text-emerald-400 font-semibold">backend geliştirme</span> alanında yoğun deneyim kazandım.
              Bu süreçte ASP.NET, C#, Python, Entity Framework, SQL, PostgreSQL ve MongoDB gibi teknolojilerle
              katmanlı mimariye sahip uygulamalar geliştirdim.
            </p>

            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Şu anda <span className="text-emerald-400 font-semibold">M&Y Akademi</span> bünyesinde
              <span className="text-emerald-400 font-semibold"> .NET Full Stack Developer</span> eğitimi almaktayım.
              Bu eğitim kapsamında ASP.NET Core, Web API ve Entity Framework Core başta olmak üzere
              modern web uygulamaları geliştirerek full stack bakış açımı güçlendirmekteyim.
            </p>

            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Backend geliştirme alanında kendimi sürekli geliştirerek
              <span className="text-emerald-400 font-semibold"> ölçeklenebilir, güvenli ve sürdürülebilir</span> sistemler tasarlamayı hedefliyorum.
              Takım çalışmasına yatkın, analitik düşünebilen ve çözüm odaklı bir yazılım geliştirici olarak
              bulunduğum projelere ve ekiplere değer katmayı amaçlıyorum.
            </p>
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Yetenekler</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Programlama Dilleri</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">C#</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Python</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">C</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Kotlin</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">SQL</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">MongoDB</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">PostgreSQL</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">React (Temel)</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Teknolojiler</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">ASP.NET / ASP.NET Core</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">MVC Mimari</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Katmanlı Mimari (N-Tier)</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Entity Framework</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Dependency Injection</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Authentication & Authorization</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Odoo</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Git/Github</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">ASP.NET Core Web API</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">LINQ</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">OOP</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Yabancı Dil</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">İngilizce</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Fransızca</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Diğer</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">RESTful API</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Web Tasarımı</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Proje Yönetimi</span>
                <span className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">Takım Çalışması</span>

              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Eğitim</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <GraduationCap className="text-emerald-400" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">Bilgisayar Mühendisliği</h3>
                  <p className="text-emerald-400 mt-1">Tekirdağ Namık Kemal Üniversitesi</p>
                  <p className="text-slate-400 mt-2">2021 - 2025</p>
                  <p className="text-slate-300 mt-3">GNO: <span className="text-emerald-400 font-semibold">3.44</span></p>
                </div>

              </div>
            </div>
          </div>
          <br></br>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <GraduationCap className="text-emerald-400" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">Yönetim Bilişim Sistemleri</h3>
                  <p className="text-emerald-400 mt-1"></p>
                  <p className="text-slate-400 mt-2">2024-Devam Ediyor(Açıköğretim)</p>
                </div>

              </div>
            </div>
          </div>
          <br></br>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <GraduationCap className="text-emerald-400" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">Full Stack .NET Development Eğitimi</h3>
                  <p className="text-emerald-400 mt-1">M&Y Yazılım ve Akademi</p>
                  <p className="text-slate-400 mt-2">2025-Devam Ediyor</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">İş Deneyimi</h2>
          <div className="max-w-4xl mx-auto space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Briefcase className="text-emerald-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Python Developer Stajyeri</h3>
                  <p className="text-emerald-400">Dorak Holding</p>
                  <p className="text-sm text-slate-400 mt-1">Şubat 2025 - Haziran 2025</p>
                  <p className="text-slate-300 mt-3 leading-relaxed">Python tabanlı Odoo ERP sistemi üzerinde geliştirmeler yaptım. Mevcut modüller üzerinde özelleştirme çalışmaları gerçekleştirdim ve iş ihtiyaçlarına yönelik yeni modül geliştirme süreçlerinde aktif rol aldım.

                    XML ve Python kullanarak form, rapor ve iş akışı düzenlemeleri yaptım; kullanıcı deneyimini ve iş süreçlerini iyileştirmeye yönelik çözümler geliştirdim. Backend tarafında iş kuralları, veri işleme ve veritabanı etkileşimlerini kapsayan fonksiyonel ve sürdürülebilir kodlar yazdım.

                    Geliştirme sürecinde, iş birimleriyle iletişim kurarak gereksinim analizi yaptım; mevcut süreçleri inceleyip iyileştirme alanlarını belirledim. Analiz sonuçlarına göre çözümler tasarlayarak sistemin işleyişine katkı sağladım.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Briefcase className="text-emerald-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Full-Stack Developer Stajyer</h3>
                  <p className="text-emerald-400">Tiryaki Agro</p>
                  <p className="text-sm text-slate-400 mt-1">Temmuz 2024 - Eylül 2024</p>
                  <p className="text-slate-300 mt-3 leading-relaxed">ASP.NET teknolojileri kullanarak RESTful API geliştirme süreçlerinde aktif rol aldım. Bu süreçte Entity Framework ile veri modeli tasarımı gerçekleştirdim; CRUD işlemleri, ilişkisel yapıların yönetimi ve performans odaklı veritabanı işlemleri üzerinde çalıştım.

                    Mevcut sistemlerle entegre çalışan backend servislerde yeni özellik geliştirme, kod iyileştirme ve bakım faaliyetlerinde görev aldım.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Briefcase className="text-emerald-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Full-Stack Developer Stajyer</h3>
                  <p className="text-emerald-400">İETT</p>
                  <p className="text-sm text-slate-400 mt-1">Temmuz 2023 - Eylül 2023</p>
                  <p className="text-slate-300 mt-3 leading-relaxed">ASP.NET ile web tabanlı uygulama geliştirme süreçlerine katkı sağladım. SQL
                    veritabanı üzerinde veri sorgulama ve işlem gerçekleştirme çalışmaları yaptım. Entity
                    Framework kullanarak veri modeli oluşturma ve CRUD işlemlerini   gerçekleştirdim.    </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">GitHub Projeleri</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {repos.length === 0 ? (
              <p className="text-slate-400 col-span-3 text-center">Projeler yükleniyor...</p>
            ) : (
              repos.map((repo) => (
                <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-xl transition duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="text-emerald-400" size={20} />
                    <h3 className="font-semibold text-lg">{repo.name}</h3>
                  </div>
                  <p className="text-sm text-slate-400 mt-2 line-clamp-2 min-h-[40px]">{repo.description || "Proje açıklaması yok"}</p>
                  {repo.language && <span className="inline-block mt-4 text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">{repo.language}</span>}
                </a>
              ))
            )}
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">İletişim</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="space-y-6">

                <a href="mailto:umutcanyavru@gmail.com" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition">
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <Mail className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-lg">umutcanyavru@gmail.com</p>
                  </div>
                </a>

                <a href={"https://github.com/" + GITHUB_USERNAME} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition">
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <Github className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>
                    <p className="text-lg">@{GITHUB_USERNAME}</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/umutcanyavru" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition">
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <Linkedin className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">LinkedIn</p>
                    <p className="text-lg">Umut Can Yavru</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <p className="text-center text-slate-400">© 2025 Umut Can Yavru. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}