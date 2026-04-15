import Image from "next/image";
import {
  AtSign,
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  Clock3,
  Hammer,
  Mail,
  Phone,
  Ruler,
  Sparkles,
  Users,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";

const navigation = [
  { href: "#dla-kogo", label: "Dla kogo" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#proces", label: "Proces" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#faq", label: "FAQ" },
];

const audiences = [
  {
    title: "Właściciele mieszkań i apartamentów",
    description:
      "Dla osób, które oczekują dopracowanego efektu wizualnego i sprawnej realizacji bez chaosu wykonawczego.",
    icon: Users,
  },
  {
    title: "Inwestorzy i nieruchomości na wynajem",
    description:
      "Dla projektów, w których liczy się standard premium, terminowość i kontrola nad jakością na każdym etapie.",
    icon: Ruler,
  },
  {
    title: "Biura i przestrzenie komercyjne",
    description:
      "Dla marek, showroomów i lokali, które chcą budować profesjonalne pierwsze wrażenie przez spójne wnętrze.",
    icon: Building2,
  },
];

const services = [
  {
    title: "Kompleksowy remont wnętrz mieszkalnych",
    description:
      "Mieszkania i apartamenty prowadzone od pierwszych ustaleń aż po oddanie gotowego wnętrza w standardzie premium.",
  },
  {
    title: "Kompleksowy remont wnętrz komercyjnych",
    description:
      "Biura, lokale i przestrzenie użytkowe realizowane kompleksowo, z naciskiem na estetykę, funkcję i sprawną komunikację.",
  },
];

const advantages = [
  {
    title: "Jedna odpowiedzialna ekipa",
    description:
      "Nie rozpraszamy projektu między wiele przypadkowych podwykonawców. Prowadzimy realizację spójnie i odpowiedzialnie.",
  },
  {
    title: "Premium w detalach",
    description:
      "Dbamy o proporcje, linię, światło i wykończenie tak, żeby wnętrze wyglądało dobrze nie tylko na zdjęciach, ale przede wszystkim na żywo.",
  },
  {
    title: "Jasne ustalenia i etapy",
    description:
      "Najpierw doprecyzowujemy zakres i koszt, potem przechodzimy do realizacji. Bez niepotrzebnego chaosu i niedomówień.",
  },
  {
    title: "Doświadczenie na rynku polskim",
    description:
      "Ponad 5 lat pracy i ponad 5000 m² zrealizowanych wnętrz pozwala nam prowadzić realizacje spokojnie i przewidywalnie.",
  },
];

const processSteps = [
  "Klient zostawia zgłoszenie albo dzwoni do nas.",
  "Doprecyzowujemy potrzeby i konsultujemy założenia realizacji.",
  "Uzgadniamy zakres prac oraz koszt wykonania.",
  "Rozpoczynamy prace i prowadzimy realizację zgodnie z ustaleniami.",
  "Oddajemy gotowy efekt końcowy.",
];

const gallery = [
  {
    src: "/assets/aski/case-1.png",
    alt: "Jadalnia premium z wyspą kuchenną i designerskim oświetleniem",
    label: "Realizacja 01",
    className: "col-span-12 md:col-span-7 xl:col-span-5 xl:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/assets/aski/case-2.png",
    alt: "Salon premium z ciemnymi sofami i minimalistycznym stołem",
    label: "Realizacja 02",
    className: "col-span-12 md:col-span-5 xl:col-span-4",
    aspect: "aspect-square",
  },
  {
    src: "/assets/aski/case-3.png",
    alt: "Jasny salon premium z łukową niszą i miękkim światłem",
    label: "Realizacja 03",
    className: "col-span-12 md:col-span-5 xl:col-span-3",
    aspect: "aspect-square",
  },
  {
    src: "/assets/aski/case-4.png",
    alt: "Salon w neutralnych tonach z pionowymi panelami i grafiką",
    label: "Realizacja 04",
    className: "col-span-12 md:col-span-6 xl:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/assets/aski/case-5.png",
    alt: "Sypialnia premium w ciepłym drewnie i z podświetleniem sufitowym",
    label: "Realizacja 05",
    className: "col-span-12 md:col-span-6 xl:col-span-3",
    aspect: "aspect-[4/3]",
  },
];

const stats = [
  { value: "5+", label: "lat na rynku polskim" },
  { value: "5000+", label: "m² zrealizowanych remontów" },
  { value: "2", label: "obszary realizacji: mieszkalne i komercyjne" },
];

const faqs = [
  {
    question: "Czy wykonujecie wstępną wycenę?",
    answer:
      "Tak. Po krótkiej rozmowie i doprecyzowaniu zakresu możemy przygotować wstępne ramy współpracy i kosztów.",
  },
  {
    question: "Czy pracujecie tylko z wnętrzami mieszkalnymi?",
    answer:
      "Nie. Realizujemy zarówno wnętrza mieszkalne, jak i przestrzenie komercyjne, zgodnie z potrzebami konkretnego projektu.",
  },
  {
    question: "Jak wygląda start współpracy?",
    answer:
      "Najpierw zbieramy informacje, konsultujemy potrzeby i dopiero po uzgodnieniu zakresu oraz kosztu przechodzimy do realizacji.",
  },
  {
    question: "Jak szybko odpowiadacie na zgłoszenia?",
    answer:
      "Zależy nam na sprawnej komunikacji, dlatego na nowe zapytania wracamy możliwie szybko, zwykle w ciągu jednego dnia roboczego.",
  },
  {
    question: "Czy mogę zgłosić się z realizacją premium od podstaw?",
    answer:
      "Tak. To najlepszy moment na współpracę, bo wtedy możemy spiąć cały proces i zadbać o końcowy efekt bez kompromisów.",
  },
];

const contactLinks = [
  {
    href: "tel:+48512238946",
    label: "+48 512 238 946",
    description: "Telefon",
    icon: Phone,
  },
  {
    href: "mailto:askistudiopl@gmail.com",
    label: "askistudiopl@gmail.com",
    description: "E-mail",
    icon: Mail,
  },
  {
    href: "https://www.instagram.com/askistudio_pl?igsh=MXJieGcwdXMxZm02dw%3D%3D&utm_source=qr",
    label: "@askistudio_pl",
    description: "Instagram",
    icon: AtSign,
  },
];

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(8,8,9,0.78)] backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between gap-6">
          <a
            href="#start"
            aria-label="ASKI Studio - strona główna"
            className="relative block h-10 w-[180px] overflow-hidden rounded-sm md:w-[220px]"
          >
            <Image
              src="/assets/aski/logo.png"
              alt="ASKI Studio"
              width={688}
              height={351}
              className="h-full w-full object-cover object-left"
              priority
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#kontakt" className="gold-button text-sm">
            <span className="sm:hidden">Kontakt</span>
            <span className="hidden sm:inline">Wypełnij formularz</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main>
        <section id="start" className="section-shell pb-20 pt-14 md:pt-20 lg:pb-28">
          <div className="relative grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <div className="hero-glow" />

            <div className="relative space-y-8">
              <span className="eyebrow">Premiumowe remonty wnętrz</span>
              <div className="space-y-6">
                <h1 className="display-heading text-[clamp(3.6rem,10vw,7.6rem)] leading-[0.88] tracking-[-0.05em] text-white">
                  ASKI
                  <span className="block text-[var(--gold-soft)]">Studio</span>
                </h1>
                <p className="max-w-xl text-lg leading-8 text-white/72 md:text-xl">
                  Realizujemy kompleksowe remonty wnętrz mieszkalnych i
                  komercyjnych dla klientów segmentu middle+ oraz premium, tak
                  żeby efekt końcowy był dopracowany, spokojny wizualnie i
                  gotowy do użytkowania od pierwszego dnia.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#kontakt" className="gold-button">
                  Zapytaj o wycenę
                  <ArrowRight size={18} />
                </a>
                <a href="#realizacje" className="ghost-button">
                  Zobacz realizacje
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Clock3, label: "Kontakt i odpowiedź bez zbędnej zwłoki" },
                  { icon: BadgeCheck, label: "Kompleksowe prowadzenie realizacji" },
                  { icon: Hammer, label: "Dopracowany standard premium" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="surface-panel rounded-[1.5rem] px-4 py-4"
                    >
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(201,164,122,0.28)] bg-[rgba(201,164,122,0.08)] text-[var(--gold-soft)]">
                        <Icon size={18} />
                      </div>
                      <p className="text-sm leading-6 text-white/72">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-[660px]">
              <div className="surface-panel-strong grain absolute inset-x-0 top-0 overflow-hidden rounded-[2rem] p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/assets/aski/case-1.png"
                      alt="Ekskluzywna jadalnia z wyspą kuchenną"
                      fill
                      className="object-cover"
                      priority
                      sizes="(min-width: 1024px) 42vw, 100vw"
                    />
                  </div>
                </div>

                <div className="absolute bottom-7 left-7 max-w-[18rem] rounded-[1.5rem] border border-white/12 bg-black/45 px-5 py-4 backdrop-blur-md">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold-soft)]">
                    ASKI Studio
                  </p>
                  <p className="text-sm leading-6 text-white/76">
                    Remonty, w których materiały, detal i światło pracują na
                    jedno premiumowe wrażenie.
                  </p>
                </div>
              </div>

              <div className="surface-panel float-card absolute -bottom-8 left-0 w-[45%] rounded-[1.6rem] p-3 sm:left-4 sm:w-[40%]">
                <div className="relative overflow-hidden rounded-[1.15rem]">
                  <div className="relative aspect-square">
                    <Image
                      src="/assets/aski/case-3.png"
                      alt="Jasny salon premium"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 18vw, 40vw"
                    />
                  </div>
                </div>
              </div>

              <div className="surface-panel-strong absolute right-0 top-8 max-w-[15rem] rounded-[1.6rem] px-5 py-5 sm:right-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold-soft)]">
                  Rynek PL
                </p>
                <p className="display-heading text-5xl leading-none text-white">
                  5000+
                </p>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  m² zrealizowanych remontów w standardzie premium.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="dla-kogo"
          className="border-y border-white/7 bg-[rgba(255,255,255,0.02)] py-20 lg:py-24"
        >
          <div className="section-shell grid gap-10 xl:grid-cols-[0.72fr_1.28fr]">
            <div className="space-y-5">
              <span className="eyebrow">Dla kogo</span>
              <h2 className="section-title text-white">
                Ten format współpracy działa najlepiej tam, gdzie liczy się
                jakość, serwis i czytelna komunikacja.
              </h2>
              <p className="section-copy max-w-xl">
                Kierujemy ofertę do właścicieli mieszkań, inwestorów,
                właścicieli lokali komercyjnych i klientów, którzy oczekują
                sprawnego prowadzenia remontu bez chaosu.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {audiences.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="surface-panel rounded-[1.75rem] p-6"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(201,164,122,0.28)] bg-[rgba(201,164,122,0.08)] text-[var(--gold-soft)]">
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/68">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="uslugi" className="py-20 lg:py-28">
          <div className="section-shell space-y-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-5">
                <span className="eyebrow">Usługi</span>
                <h2 className="section-title max-w-3xl text-white">
                  Kompleksowy remont bez przypadkowych kompromisów.
                </h2>
              </div>
              <p className="section-copy max-w-lg">
                W ofercie pokazujemy dokładnie to, czym firma zajmuje się na co
                dzień: kompleksowy remont wnętrz mieszkalnych i komercyjnych w
                standardzie premium.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="surface-panel-strong rounded-[2rem] p-8 md:p-10"
                >
                  <span className="mb-8 inline-flex rounded-full border border-[rgba(201,164,122,0.22)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-soft)]">
                    0{index + 1}
                  </span>
                  <h3 className="display-heading mb-4 text-4xl leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mb-8 max-w-xl text-base leading-8 text-white/70">
                    {service.description}
                  </p>
                  <div className="metal-line mb-8" />
                  <div className="flex items-center gap-3 text-sm text-white/64">
                    <Sparkles size={16} className="text-[var(--gold-soft)]" />
                    Zorganizowany proces, estetyczny rezultat i czytelna
                    komunikacja.
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/7 bg-[rgba(255,255,255,0.018)] py-20 lg:py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="space-y-5">
              <span className="eyebrow">Przewagi</span>
              <h2 className="section-title text-white">
                Dlaczego klienci wybierają współpracę z ASKI Studio.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {advantages.map((advantage) => (
                <article
                  key={advantage.title}
                  className="surface-panel rounded-[1.75rem] p-6"
                >
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/68">
                    {advantage.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proces" className="py-20 lg:py-28">
          <div className="section-shell grid gap-10 xl:grid-cols-[0.7fr_1.3fr]">
            <div className="space-y-5">
              <span className="eyebrow">Jak przebiega współpraca</span>
              <h2 className="section-title text-white">
                Pięć prostych etapów od pierwszego kontaktu do oddania wnętrza.
              </h2>
              <p className="section-copy max-w-lg">
                Sekcja odpowiada dokładnie strukturze z briefu: krok po kroku
                pokazuje, jak wygląda współpraca przy kompleksowym remoncie od
                pierwszego kontaktu do oddania gotowego efektu.
              </p>
            </div>

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <article
                  key={step}
                  className="surface-panel grid gap-5 rounded-[1.75rem] p-6 md:grid-cols-[84px_1fr] md:items-center"
                >
                  <div className="display-heading text-5xl text-[var(--gold-soft)]">
                    0{index + 1}
                  </div>
                  <p className="text-base leading-8 text-white/78">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="realizacje"
          className="border-y border-white/7 bg-[rgba(255,255,255,0.02)] py-20 lg:py-28"
        >
          <div className="section-shell space-y-10">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div className="space-y-5">
                <span className="eyebrow">Realizacje i wyniki</span>
                <h2 className="section-title text-white">
                  Prawdziwe wnętrza, które budują zaufanie lepiej niż długie
                  obietnice.
                </h2>
              </div>
              <p className="section-copy max-w-2xl">
                W tej sekcji połączyliśmy dwa elementy z briefu: fotografie
                realizacji oraz konkretne liczby, które pokazują skalę i
                doświadczenie firmy przy remontach wnętrz mieszkalnych i
                komercyjnych.
              </p>
            </div>

            <div className="grid gap-5 xl:grid-cols-[0.78fr_1.22fr]">
              <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                {stats.map((item) => (
                  <article
                    key={item.label}
                    className="surface-panel-strong rounded-[1.8rem] p-6"
                  >
                    <p className="display-heading text-5xl leading-none text-white md:text-6xl">
                      {item.value}
                    </p>
                    <p className="mt-3 max-w-[14rem] text-sm leading-7 text-white/68">
                      {item.label}
                    </p>
                  </article>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-12">
                {gallery.map((item) => (
                  <article
                    key={item.src}
                    className={`${item.className} surface-panel grain overflow-hidden rounded-[1.75rem] p-3`}
                  >
                    <div className={`relative overflow-hidden rounded-[1.2rem] ${item.aspect}`}>
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 24vw, (min-width: 768px) 40vw, 100vw"
                      />
                      <span className="absolute bottom-4 left-4 z-10 rounded-full border border-white/18 bg-black/45 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/78 backdrop-blur-md">
                        {item.label}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-20 lg:py-28">
          <div className="section-shell grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-6">
              <span className="eyebrow">Kontakt</span>
              <h2 className="section-title text-white">
                Zostaw kontakt, a wrócimy z rozmową o Twojej realizacji.
              </h2>
              <p className="section-copy max-w-xl">
                Formularz został przygotowany zgodnie z briefem: imię, telefon i
                e-mail jako minimum, plus pole na kilka słów o projekcie.
              </p>

              <div className="grid gap-4">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="surface-panel flex items-center gap-4 rounded-[1.6rem] px-5 py-4 hover:border-[rgba(201,164,122,0.28)]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(201,164,122,0.28)] bg-[rgba(201,164,122,0.08)] text-[var(--gold-soft)]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                          {item.description}
                        </p>
                        <p className="mt-1 text-base text-white">{item.label}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="surface-panel-strong rounded-[2rem] p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="border-t border-white/7 bg-[rgba(255,255,255,0.018)] py-20 lg:py-24"
        >
          <div className="section-shell grid gap-10 xl:grid-cols-[0.7fr_1.3fr]">
            <div className="space-y-5">
              <span className="eyebrow">FAQ</span>
              <h2 className="section-title text-white">
                Odpowiedzi na pytania, które najczęściej pojawiają się na starcie.
              </h2>
            </div>

            <FaqAccordion items={faqs} />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/7 py-8">
        <div className="section-shell flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-white/70">
            <Image
              src="/assets/aski/logo.png"
              alt="ASKI Studio"
              width={688}
              height={351}
              className="h-7 w-[148px] rounded-sm object-cover object-left opacity-90"
            />
            <span>Premiumowe remonty wnętrz</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+48512238946" className="hover:text-white">
              +48 512 238 946
            </a>
            <a
              href="mailto:askistudiopl@gmail.com"
              className="hover:text-white"
            >
              askistudiopl@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
