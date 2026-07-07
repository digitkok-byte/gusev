import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import portrait from './assets/portrait.jpg'
import StaggeredMenu from './components/StaggeredMenu'

const services = [
  { title: 'Коммерческая недвижимость', desc: 'Аренда, купля-продажа, разрешительная документация.' },
  { title: 'Арбитражные споры', desc: 'Ведение дел во всех инстанциях.' },
  { title: 'Сопровождение сделок', desc: 'Проверка контрагента, структура, закрытие.' },
  { title: 'Договорное право', desc: 'Разработка и экспертиза договоров.' },
  { title: 'Строительный подряд', desc: 'Защита в спорах подрядчиков и заказчиков.' },
  { title: 'Регистрация прав', desc: 'Оформление недвижимости и прав собственности.' },
  { title: 'Споры с госорганами', desc: 'Обжалование решений и административная защита.' },
  { title: 'Защита собственников', desc: 'Имущественные и корпоративные интересы.' },
  { title: 'Корпоративные споры', desc: 'Конфликты между участниками общества.' },
  { title: 'Банкротство', desc: 'Сопровождение кредиторов и должников.' },
  { title: 'Защита персональных данных', desc: 'Аудит и работа с Роскомнадзором.' },
  { title: 'Юридический аудит', desc: 'Диагностика рисков перед сделкой.' },
]

const metrics = [
  { num: '[ЗАПОЛНИТЬ]', label: 'лет практики' },
  { num: '[ЗАПОЛНИТЬ]', label: 'завершённых дел' },
  { num: '[ЗАПОЛНИТЬ]', label: 'постоянных клиентов' },
  { num: '[ЗАПОЛНИТЬ]', label: 'судов, где вели дела' },
]

const heroAdvantages = [
  'Первая консультация — бесплатно',
  'Оценка перспектив до начала работы',
  'Фиксированные условия и сроки',
  'Отчётность на каждом этапе',
]

const steps = [
  { num: '01', title: 'Знакомство', desc: 'Обсудим ситуацию, ответим на вопросы, наметим следующий шаг.' },
  { num: '02', title: 'Изучение документов', desc: 'Проанализируем материалы, объясним риски и варианты.' },
  { num: '03', title: 'Предложим стратегию', desc: 'Дадим план с этапами и сроками, прозрачные условия.' },
  { num: '04', title: 'Доведём дело до конца', desc: 'Сопровождаем до результата, держим в курсе.' },
]

const businessFormats = [
  { title: 'Абонентское сопровождение', desc: 'Юрист на постоянной связи, фиксированный ежемесячный объём задач.' },
  { title: 'Разовые проекты', desc: 'Отдельная сделка или спор — под фиксированный результат и бюджет.' },
  { title: 'Проектная поддержка', desc: 'Усиление под крупный кейс: от аудита документов до суда.' },
]

const businessIncludes = [
  'Первичная диагностика бесплатно',
  'Отчёт по каждому этапу',
  'Прозрачная тарификация',
  'Документы и переписка от вашего имени',
]

const credentials = [
  { title: 'Статус', value: '[ЗАПОЛНИТЬ: адвокат / юрист + номер удостоверения]' },
  { title: 'Образование', value: '[ЗАПОЛНИТЬ: вуз, специальность, год выпуска]' },
  { title: 'Квалификация', value: '[ЗАПОЛНИТЬ: сертификаты, курсы повышения]' },
]

const cases = [
  { area: '[ЗАПОЛНИТЬ: тип спора]', court: '[ЗАПОЛНИТЬ: инстанция]', result: '[ЗАПОЛНИТЬ: результат / сумма]' },
  { area: '[ЗАПОЛНИТЬ: тип спора]', court: '[ЗАПОЛНИТЬ: инстанция]', result: '[ЗАПОЛНИТЬ: результат / сумма]' },
  { area: '[ЗАПОЛНИТЬ: тип спора]', court: '[ЗАПОЛНИТЬ: инстанция]', result: '[ЗАПОЛНИТЬ: результат / сумма]' },
]

const reviews = [
  { text: '[ЗАПОЛНИТЬ: текст отзыва клиента]', name: '[ЗАПОЛНИТЬ: имя, роль / компания]' },
  { text: '[ЗАПОЛНИТЬ: текст отзыва клиента]', name: '[ЗАПОЛНИТЬ: имя, роль / компания]' },
]

const contactChannels = [
  { label: '8 925 791-04-01', sub: 'Позвонить', href: 'tel:+79257910401' },
  { label: 'WhatsApp', sub: 'Написать в мессенджер', href: 'https://wa.me/79257910401' },
  { label: 'Telegram', sub: 'Быстрый чат', href: 'https://t.me/+79257910401' },
  { label: 'gserezha@bk.ru', sub: 'Электронная почта', href: 'mailto:gserezha@bk.ru' },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

const menuItems = [
  { label: 'Главная', link: '#top', ariaLabel: 'Главная' },
  { label: 'Услуги', link: '#services', ariaLabel: 'Услуги' },
  { label: 'Как работаем', link: '#how', ariaLabel: 'Как работаем' },
  { label: 'Для бизнеса', link: '#business', ariaLabel: 'Для бизнеса' },
  { label: 'Экспертность', link: '#trust', ariaLabel: 'Экспертность' },
  { label: 'Контакты', link: '#contacts', ariaLabel: 'Контакты' },
]

const menuSocials = [
  { label: 'Позвонить · 8 925 791-04-01', link: 'tel:+79257910401' },
  { label: 'WhatsApp', link: 'https://wa.me/79257910401' },
  { label: 'Telegram', link: 'https://t.me/+79257910401' },
  { label: 'gserezha@bk.ru', link: 'mailto:gserezha@bk.ru' },
]

function App() {
  const menuRef = useRef(null)
  const [showAllServices, setShowAllServices] = useState(false)

  const openMenu = (e) => {
    e?.preventDefault?.()
    menuRef.current?.open()
  }

  const visibleServices = showAllServices ? services : services.slice(0, 6)

  return (
    <>
      <header className="header">
        <div className="container nav">
          <a href="#top" className="logo">Юрист Гусев С.А.</a>
          <nav className="nav-links">
            <a href="#top">Главная</a>
            <a href="#services">Услуги</a>
            <a href="#business">О практике</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <div className="nav-actions">
            <button type="button" className="btn ghost menu-trigger" onClick={openMenu} aria-label="Открыть меню">
              <span className="menu-trigger-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              Меню
            </button>
            <a href="#contacts" className="btn primary">Получить консультацию</a>
          </div>
        </div>
      </header>

      <StaggeredMenu
        ref={menuRef}
        hideHeader
        isFixed
        position="right"
        colors={['#141518', '#1f2126']}
        accentColor="#c99b5e"
        items={menuItems}
        socialItems={menuSocials}
        displaySocials
        displayItemNumbering
        logoText="Юрист Гусев С.А."
      />

      <section className="hero" id="top">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="chip">Бизнес · Частные лица · Суд</span>
              <h1 className="hero-title">Юридическая защита — первая консультация бесплатно</h1>
              <p className="hero-desc">
                Разберём ситуацию, оценим перспективы и предложим понятный план действий.
              </p>

              <div className="hero-advantages">
                {heroAdvantages.map((a, i) => (
                  <motion.div
                    key={a}
                    className="hero-advantage"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                  >
                    <span className="hero-advantage-dot" />
                    <span>{a}</span>
                  </motion.div>
                ))}
              </div>

              <div className="hero-ctas">
                <a href="#contacts" className="btn primary">Получить консультацию</a>
              </div>

              <div className="hero-metrics">
                {metrics.map((m) => (
                  <div key={m.label} className="metric">
                    <div className="metric-num">{m.num}</div>
                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hero-portrait"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <img src={portrait} alt="Гусев Сергей — руководитель практики" />
              <div className="hero-portrait-caption">
                <strong>Гусев Сергей</strong>
                <span>Руководитель практики</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <motion.div className="section-head" {...fadeUp}>
            <span className="chip light">Услуги</span>
            <h2>Поможем решить следующие проблемы</h2>
            <p>Формулировки от задач клиента — вы сразу видите, с чем можно прийти.</p>
          </motion.div>

          <div className="services-grid">
            {visibleServices.map((s, i) => (
              <motion.div
                key={s.title}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {services.length > 6 && (
            <div className="services-more">
              <button
                type="button"
                className="btn outline on-light"
                onClick={() => setShowAllServices((v) => !v)}
              >
                {showAllServices ? 'Свернуть' : 'Показать ещё'}
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="how" className="muted">
        <div className="container">
          <motion.div className="section-head" {...fadeUp}>
            <span className="chip light">Как работаем</span>
            <h2>От заявки до результата — четыре шага</h2>
            <p>Прозрачный процесс: вы понимаете, что и когда происходит.</p>
          </motion.div>

          <div className="steps">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="business">
        <div className="container">
          <motion.div className="section-head" {...fadeUp}>
            <span className="chip light">Для бизнеса</span>
            <h2>Юридическое сопровождение компаний</h2>
            <p>Постоянное или проектное сопровождение — с отчётностью и фиксированной стоимостью.</p>
          </motion.div>

          <div className="business-grid">
            {businessFormats.map((f, i) => (
              <motion.div
                key={f.title}
                className="business-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="business-includes" {...fadeUp}>
            <h3 className="business-includes-title">Что входит в работу</h3>
            <div className="tags">
              {businessIncludes.map((b) => (
                <span key={b} className="tag">{b}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="trust" className="dark">
        <div className="container">
          <motion.div className="section-head" {...fadeUp}>
            <span className="chip">Экспертность</span>
            <h2 className="on-dark">Опыт, подтверждённый практикой</h2>
            <p className="on-dark-muted">Разделы ниже заполняются реальными данными.</p>
          </motion.div>

          <div className="trust-block">
            <h3 className="trust-heading">Удостоверения и квалификация</h3>
            <div className="credentials">
              {credentials.map((c) => (
                <div key={c.title} className="credential">
                  <strong>{c.title}</strong>
                  <span>{c.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="trust-block">
            <h3 className="trust-heading">Кейсы</h3>
            <div className="cases-grid">
              {cases.map((c, i) => (
                <div key={i} className="case-card">
                  <div className="case-row">
                    <div className="case-label">Тип спора</div>
                    <div className="case-value">{c.area}</div>
                  </div>
                  <div className="case-row">
                    <div className="case-label">Инстанция</div>
                    <div className="case-value">{c.court}</div>
                  </div>
                  <div className="case-row">
                    <div className="case-label">Результат</div>
                    <div className="case-value">{c.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trust-block">
            <h3 className="trust-heading">Отзывы</h3>
            <div className="reviews-grid">
              {reviews.map((r, i) => (
                <div key={i} className="review-card">
                  <p>«{r.text}»</p>
                  <span>— {r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contacts" id="contacts">
        <div className="container">
          <div className="contacts-grid">
            <motion.div className="contacts-info" {...fadeUp}>
              <span className="chip">Контакты</span>
              <h2 style={{ marginTop: 16, color: '#fff' }}>Оценим перспективы вашего дела</h2>
              <p>
                Ответственно проанализируем исходные данные и дадим оценку перспектив на основе
                судебной практики по схожим делам — чтобы вы понимали вероятный результат.
              </p>
              <div className="contacts-list">
                {contactChannels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="contact-link"
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <strong>{c.label}</strong>
                    <span>{c.sub}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form
              className="contacts-form"
              onSubmit={(e) => e.preventDefault()}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
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
              <button type="submit" className="btn primary" style={{ width: '100%' }}>
                Получить консультацию
              </button>
              <p className="form-note">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">Юрист Гусев С.А.</div>
              <p className="footer-brief">
                Юридическая помощь бизнесу и частным лицам. Первая консультация — бесплатно.
              </p>
            </div>
            <div className="footer-col">
              <h4>Навигация</h4>
              <ul>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#how">Как работаем</a></li>
                <li><a href="#business">Для бизнеса</a></li>
                <li><a href="#trust">Экспертность</a></li>
                <li><a href="#contacts">Контакты</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Контакты</h4>
              <ul>
                <li><a href="tel:+79257910401">8 925 791-04-01</a></li>
                <li><a href="https://wa.me/79257910401" target="_blank" rel="noreferrer">WhatsApp</a></li>
                <li><a href="https://t.me/+79257910401" target="_blank" rel="noreferrer">Telegram</a></li>
                <li><a href="mailto:gserezha@bk.ru">gserezha@bk.ru</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Юрист Гусев С.А.</span>
            <span>Информация на сайте не является публичной офертой.</span>
          </div>
        </div>
      </footer>

      <nav className="mobile-tabbar" aria-label="Быстрая навигация">
        <a href="#top">
          <span className="tab-icon" aria-hidden="true">◉</span>
          <span>Главная</span>
        </a>
        <a href="#services">
          <span className="tab-icon" aria-hidden="true">◈</span>
          <span>Услуги</span>
        </a>
        <a href="#business">
          <span className="tab-icon" aria-hidden="true">◇</span>
          <span>О практике</span>
        </a>
        <a href="#contacts">
          <span className="tab-icon" aria-hidden="true">✉</span>
          <span>Контакты</span>
        </a>
      </nav>
    </>
  )
}

export default App
