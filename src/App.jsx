import { motion } from 'motion/react'
import portrait from './assets/portrait.jpg'

const services = [
  { title: 'Коммерческая недвижимость', desc: 'Аренда, купля-продажа, разрешительная документация.' },
  { title: 'Арбитражные споры', desc: 'Ведение дел в арбитражных судах всех инстанций.' },
  { title: 'Сопровождение сделок', desc: 'Проверка контрагента, структура, безопасное закрытие.' },
  { title: 'Договорное право', desc: 'Разработка и экспертиза договоров под задачи бизнеса.' },
  { title: 'Строительный подряд', desc: 'Сопровождение и защита в строительных спорах.' },
  { title: 'Регистрация прав', desc: 'Регистрация недвижимости и прав собственности.' },
  { title: 'Споры с госорганами', desc: 'Обжалование решений и защита в административных делах.' },
  { title: 'Защита собственников', desc: 'Защита имущественных интересов и корпоративных прав.' },
  { title: 'Корпоративные споры', desc: 'Разрешение конфликтов между участниками общества.' },
  { title: 'Банкротство', desc: 'Сопровождение процедур для кредиторов и должников.' },
  { title: 'Защита персональных данных', desc: 'Аудит, документация и работа с Роскомнадзором.' },
  { title: 'Юридический аудит', desc: 'Диагностика правовых рисков перед сделкой или проектом.' },
]

const consultFeatures = [
  { icon: '?', title: 'Ответим на вопросы', desc: 'Разберём ситуацию, объясним риски и следующие шаги.' },
  { icon: '≡', title: 'Изучим документы', desc: 'Проведём анализ и предложим прозрачные варианты действий.' },
  { icon: '→', title: 'Предложим стратегию', desc: 'Дадим план с фиксированными этапами и сроками.' },
]

const aboutTags = [
  'Регистрационные органы',
  'Арбитражные суды',
  'Судебный учёт',
  'Досудебное урегулирование',
  'Экспертные организации',
  'Профессиональные объединения',
]

const heroFeatures = [
  'Сопровождение сложных имущественных вопросов',
  'Сопровождение и анализ до заключения сделки',
  'Понятная стратегия и прозрачные условия',
  'Судебная и досудебная защита',
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

function App() {
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="container top-bar-inner">
            <span>
              Новый разбор: как арендатору защитить бизнес при досрочном расторжении договора{' '}
              <a href="#blog">Читать материал →</a>
            </span>
            <button className="top-bar-close" aria-label="Закрыть">×</button>
          </div>
        </div>
        <div className="container nav">
          <a href="#top" className="logo">Gusev</a>
          <nav className="nav-links">
            <a href="#top">Главная</a>
            <a href="#about">О практике</a>
            <a href="#services">Услуги</a>
            <a href="#contacts">Контакты</a>
            <a href="#blog">Блог</a>
          </nav>
          <a href="#consult" className="btn primary">Получить консультацию</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="chip">Бизнес · Физические лица · Суд</span>
              <h1 className="hero-title">Юридическая защита бизнеса и физических лиц</h1>
              <p className="hero-desc">
                Юридические услуги и консультации: представляем интересы в суде и в досудебном
                урегулировании — от анализа ситуации до результата.
              </p>
              <div className="hero-features">
                {heroFeatures.map((f, i) => (
                  <motion.div
                    key={f}
                    className="hero-feature"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                  >
                    <span className="hero-feature-dot" />
                    <span>{f}</span>
                  </motion.div>
                ))}
              </div>
              <div className="hero-ctas">
                <a href="#consult" className="btn primary">Получить консультацию</a>
                <a href="#services" className="btn outline">Все услуги</a>
              </div>
            </motion.div>
            <motion.div
              className="hero-portrait"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <img src={portrait} alt="Руководитель практики Gusev" />
              <div className="hero-portrait-caption">
                <strong>Руководитель практики</strong>
                <span>Коммерческая недвижимость и арбитраж</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <motion.div className="services-header" {...fadeUp}>
            <div>
              <span className="chip light">Услуги</span>
              <h2 style={{ marginTop: 16 }}>Ключевые услуги</h2>
              <p>Выберите направление — мы оценим перспективы, объясним риски и предложим стратегию.</p>
            </div>
            <a href="#services" className="btn outline on-light">Все услуги</a>
          </motion.div>

          <div className="services-grid">
            {services.map((s, i) => (
              <motion.a
                href="#consult"
                key={s.title}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-card-more">Подробнее</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="consult" id="consult">
        <div className="container">
          <div className="consult-grid">
            <motion.form className="consult-form" onSubmit={(e) => e.preventDefault()} {...fadeUp}>
              <span className="chip light">Первый шаг</span>
              <h2 style={{ marginTop: 16 }}>Получите первичную консультацию</h2>
              <p className="consult-form-desc">
                Опишите ситуацию — оценим перспективы и предложим понятные варианты действий. Без обязательств.
              </p>
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input id="name" type="text" placeholder="Как к вам обращаться" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input id="phone" type="tel" placeholder="+7" />
              </div>
              <div className="form-group">
                <label htmlFor="msg">Комментарий</label>
                <textarea id="msg" placeholder="Коротко о вашей ситуации" />
              </div>
              <label className="form-consent">
                <input type="checkbox" defaultChecked />
                <span>
                  Я соглашаюсь с <a href="#">политикой конфиденциальности</a> и согласен на обработку персональных данных.
                </span>
              </label>
              <button type="submit" className="btn primary on-light" style={{ width: '100%' }}>
                Получить консультацию
              </button>
            </motion.form>

            <motion.div className="consult-features" {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              {consultFeatures.map((f) => (
                <div key={f.title} className="consult-feature">
                  <div className="consult-feature-icon">{f.icon}</div>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="about-grid">
            <motion.div {...fadeUp}>
              <span className="chip light">О практике</span>
              <h2 style={{ marginTop: 16 }}>Системная юридическая помощь бизнесу и собственникам</h2>
              <p className="about-desc">
                Практический опыт взаимодействия с регистрационными и государственными органами.
                Прозрачные условия, отчётность и объяснение рисков — от первичной консультации до результата.
              </p>
              <a href="#consult" className="btn primary on-light">Подробнее о практике</a>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="tags">
                {aboutTags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contacts" id="contacts">
        <div className="container">
          <div className="contacts-grid">
            <motion.div className="contacts-info" {...fadeUp}>
              <span className="chip">Контакты</span>
              <h2 style={{ marginTop: 16, color: '#fff' }}>Обсудим вашу ситуацию</h2>
              <p>
                Расскажите о задаче — на первичной консультации оценим перспективы и предложим следующий шаг.
                Итог дела не гарантируем, но объясним риски и варианты.
              </p>
              <a href="tel:+70000000000">+7 (000) 000-00-00 — уточняется</a>
              <a href="mailto:info@example.com">info@gusev.example — уточняется</a>
              <div style={{ marginTop: 20 }}>
                <a href="#" className="btn outline">VK</a>
              </div>
            </motion.div>

            <motion.form className="contacts-form" onSubmit={(e) => e.preventDefault()} {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="form-group">
                <label htmlFor="c-name">Имя</label>
                <input id="c-name" type="text" placeholder="Как к вам обращаться" />
              </div>
              <div className="form-group">
                <label htmlFor="c-phone">Телефон</label>
                <input id="c-phone" type="tel" placeholder="+7" />
              </div>
              <div className="form-group">
                <label htmlFor="c-msg">О задаче</label>
                <textarea id="c-msg" placeholder="Коротко опишите ситуацию" />
              </div>
              <button type="submit" className="btn primary" style={{ width: '100%' }}>Отправить заявку</button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="footer" id="blog">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">Gusev</div>
              <p className="footer-brief">
                Юридическая практика: коммерческая недвижимость, арбитражные споры и сопровождение бизнеса.
              </p>
            </div>
            <div className="footer-col">
              <h4>Навигация</h4>
              <ul>
                <li><a href="#about">О практике</a></li>
                <li><a href="#contacts">Контакты</a></li>
                <li><a href="#blog">Блог</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Услуги</h4>
              <ul>
                <li><a href="#services">Коммерческая недвижимость</a></li>
                <li><a href="#services">Арбитражные споры</a></li>
                <li><a href="#services">Сопровождение сделок</a></li>
                <li><a href="#services">Договорное право</a></li>
                <li><a href="#services">Все направления</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Документы</h4>
              <ul>
                <li><a href="#">Политика конфиденциальности</a></li>
                <li><a href="#">Согласие на обработку ПДн</a></li>
                <li><a href="#">Условия использования</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Gusev. Юридическая практика.</span>
            <span>Информация на сайте не является публичной офертой.</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
