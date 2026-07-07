import { motion } from 'motion/react'
import portrait from './assets/portrait.jpg'

const services = [
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

const heroAdvantages = [
  'Первая консультация — бесплатно',
  'Оценка перспектив до начала работы',
  'Фиксированные условия и сроки',
  'Отчётность на каждом этапе',
]

const steps = [
  { title: 'Знакомство', desc: 'Обсудим ситуацию, ответим на вопросы, наметим следующий шаг.' },
  { title: 'Изучение документов', desc: 'Проанализируем материалы, объясним риски и варианты.' },
  { title: 'Предложим стратегию', desc: 'Дадим план с этапами и сроками, прозрачные условия.' },
  { title: 'Доведём дело до конца', desc: 'Сопровождаем до результата, держим в курсе.' },
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

function App() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <a href="#top" className="logo">Юрист Гусев С.А.</a>
          <nav className="nav-links">
            <a href="#top">Главная</a>
            <a href="#services">Услуги</a>
            <a href="#how">Как работаем</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <div className="nav-actions">
            <a href="#contacts" className="btn primary">Получить консультацию</a>
          </div>
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
              <h1 className="hero-title">Юридическая защита</h1>

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
            <h2>Поможем решить следующие проблемы</h2>
            <p>Формулировки от задач клиента — вы сразу видите, с чем можно прийти.</p>
          </motion.div>

          <div className="services-grid">
            {services.map((s, i) => (
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
        </div>
      </section>

      <section id="how" className="muted">
        <div className="container">
          <motion.div className="section-head" {...fadeUp}>
            <h2>От заявки до результата — четыре шага</h2>
          </motion.div>

          <div className="steps">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                className="step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
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
        <a href="#how">
          <span className="tab-icon" aria-hidden="true">◇</span>
          <span>Как работаем</span>
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
