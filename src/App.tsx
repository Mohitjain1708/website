import { useEffect, useMemo, useState } from 'react';
import { chapters, heroFacts, mediaReel, moduleCards, propertyName, sources } from './content';
import type { ChapterId, MediaItem, ModuleCard } from './types';

const chapterOrder: ChapterId[] = ['opening', 'scale', 'retail', 'luxury', 'dining', 'entertainment', 'events'];

function App() {
  const [activeChapter, setActiveChapter] = useState<ChapterId>('opening');
  const [activeMediaId, setActiveMediaId] = useState(mediaReel[0].id);
  const [focusedModule, setFocusedModule] = useState<ModuleCard | null>(moduleCards[0]);

  const activeMedia = useMemo(
    () => mediaReel.find((item) => item.id === activeMediaId) ?? mediaReel[0],
    [activeMediaId]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          const nextChapter = visible.target.dataset.chapter as ChapterId | undefined;
          if (nextChapter) {
            setActiveChapter(nextChapter);
          }
        }
      },
      { rootMargin: '-18% 0px -58% 0px', threshold: [0.15, 0.3, 0.55] }
    );

    chapterOrder.forEach((chapter) => {
      const element = document.querySelector<HTMLElement>(`[data-chapter="${chapter}"]`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="deck-shell">
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <div className="ambient grid" aria-hidden="true" />

      <header className="masthead">
        <div>
          <p className="eyebrow">Interactive sales deck</p>
          <h1>{propertyName} as a premium commercial platform.</h1>
          <p className="lede">
            A cinematic, self-directed pitch tool for prospective tenants, sponsors, and event partners. Built to
            create immediate buy-in, move fast on live calls, and stand alone as a link.
          </p>
        </div>

        <div className="masthead-actions">
          <a className="button button-solid" href="#opening">
            Enter the deck
          </a>
          <a className="button button-ghost" href="#events">
            Jump to event platform
          </a>
        </div>
      </header>

      <nav className="chapter-nav" aria-label="Deck chapters">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            className={`chapter-pill ${activeChapter === chapter.id ? 'active' : ''}`}
            onClick={() => {
              document.querySelector<HTMLElement>(`[data-chapter="${chapter.id}"]`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            type="button"
          >
            <span>{chapter.label}</span>
            {chapter.title}
          </button>
        ))}
      </nav>

      <main>
        <section className="hero" id="opening" data-chapter="opening">
          <div className="hero-copy panel">
            <p className="section-kicker">Opening statement</p>
            <h2>Immediate scale. Immediate prestige. Immediate commercial logic.</h2>
            <p>
              {propertyName} is positioned as a world-class retail and lifestyle destination with entertainment,
              dining, luxury, and events all working together. The deck turns that complexity into a clean business
              narrative.
            </p>

            <div className="fact-row" aria-label="Key property facts">
              {heroFacts.map((fact) => (
                <article className="fact-card" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </article>
              ))}
            </div>

            <div className="hero-actions">
              <button className="button button-solid" onClick={() => setActiveMediaId(mediaReel[0].id)} type="button">
                Luxury reel
              </button>
              <button className="button button-soft" onClick={() => setActiveMediaId(mediaReel[1].id)} type="button">
                Attractions reel
              </button>
              <button className="button button-soft" onClick={() => setActiveMediaId(mediaReel[2].id)} type="button">
                Events reel
              </button>
            </div>
          </div>

          <div className="stage panel">
            <VideoStage media={activeMedia} onSelectMedia={setActiveMediaId} />
          </div>
        </section>

        <section className="chapter-grid" data-chapter="scale" id="scale">
          <SectionCopy chapterId="scale" />
          <div className="panel callout">
            <p className="section-kicker">Why this property</p>
            <h3>Scale, access, and audience gravity.</h3>
            <p>
              Downtown Dubai placement, direct connectivity, and adjacency to hospitality create a destination that
              behaves like a city node. That makes it valuable for both routine retail and high-stakes campaign moments.
            </p>
            <div className="mini-grid">
              <div>
                <span>Access</span>
                <strong>Metro, hospitality, parking, walkable adjacency</strong>
              </div>
              <div>
                <span>Audience</span>
                <strong>Residents, tourists, premium shoppers, families</strong>
              </div>
              <div>
                <span>Business use</span>
                <strong>Leasing, sponsorship, launches, and venue bookings</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="chapter-grid" data-chapter="retail" id="retail">
          <SectionCopy chapterId="retail" />
          <div className="panel story-panel">
            <p className="section-kicker">Retail environment</p>
            <h3>Category depth built for flagship, premium, and pop-up conversations.</h3>
            <div className="story-cards">
              <article>
                <span>Flagship energy</span>
                <p>Large-format storytelling and brand theater for retailers who need a statement location.</p>
              </article>
              <article>
                <span>Conversion pressure</span>
                <p>High-intent foot traffic gives retail partners a clear reason to invest in physical presence.</p>
              </article>
              <article>
                <span>Pop-up flexibility</span>
                <p>Short-term campaigns can live inside the same ecosystem without looking temporary or secondary.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="chapter-grid" data-chapter="luxury" id="luxury">
          <SectionCopy chapterId="luxury" />
          <div className="panel media-split">
            <div>
              <p className="section-kicker">Luxury layer</p>
              <h3>Fashion Avenue gives the deck its highest-value visual cue.</h3>
              <p>
                The presentation should not just mention luxury. It should feel luxury: smaller copy blocks, generous
                spacing, restrained chrome, and a direct line to premium service.
              </p>
            </div>
            <div className="stat-stack">
              <article>
                <strong>200+</strong>
                <span>Covetable luxury brands referenced on the public site</span>
              </article>
              <article>
                <strong>VIP</strong>
                <span>Valet, Shop & Drop, concierge-style service language</span>
              </article>
              <article>
                <strong>Premium</strong>
                <span>Hotels and high-value adjacency reinforce the positioning</span>
              </article>
            </div>
          </div>
        </section>

        <section className="chapter-grid" data-chapter="dining" id="dining">
          <SectionCopy chapterId="dining" />
          <div className="panel spotlight">
            <p className="section-kicker">Dining & lifestyle</p>
            <h3>Food is a stay driver, a spend driver, and a sponsorship canvas.</h3>
            <p>
              Dining turns the property into a full-day destination. For partners, that means longer dwell time, more
              chance to activate, and more moments to own around the visitor journey.
            </p>
            <div className="chips">
              <span>200+ dining experiences</span>
              <span>Premium dining at Fashion Avenue</span>
              <span>Time Out Market and lifestyle adjacency</span>
            </div>
          </div>
        </section>

        <section className="chapter-grid" data-chapter="entertainment" id="entertainment">
          <SectionCopy chapterId="entertainment" />
          <div className="panel entertainment-grid">
            <article>
              <span>Dubai Aquarium & Underwater Zoo</span>
              <p>More than 33,000 animals and a major family draw anchor the entertainment mix.</p>
            </article>
            <article>
              <span>Dubai Ice Rink and Reel Cinemas</span>
              <p>Ticketed experiences extend the property beyond retail and into repeat visitation.</p>
            </article>
            <article>
              <span>VR and family experiences</span>
              <p>PlayDXB, KidZania, and adjacent attractions keep the audience multi-generational.</p>
            </article>
          </div>
        </section>

        <section className="chapter-grid" data-chapter="events" id="events">
          <SectionCopy chapterId="events" />
          <div className="panel event-panel">
            <div>
              <p className="section-kicker">Events & platform</p>
              <h3>From one-off activations to a dedicated venue story.</h3>
              <p>
                Dubai Mall Exhibition Center creates a real booking path. The commercial team can sell exhibitions,
                conferences, receptions, and brand moments instead of only selling square footage.
              </p>
            </div>
            <div className="event-metrics">
              <div>
                <strong>9,446 sq. m</strong>
                <span>Flexible exhibition and event space</span>
              </div>
              <div>
                <strong>6,000</strong>
                <span>Guest capacity across four halls</span>
              </div>
              <div>
                <strong>1,600</strong>
                <span>Dedicated parking spaces</span>
              </div>
            </div>
          </div>
        </section>

        <section className="modules" aria-label="Expandable modules">
          <div className="section-heading">
            <p className="section-kicker">Expandable architecture</p>
            <h2>Module-ready from day one.</h2>
            <p>
              Each card below can expand into a deeper path without changing the structure of the core deck. That makes
              the experience easy to extend into a true sales system.
            </p>
          </div>

          <div className="module-grid">
            {moduleCards.map((module) => (
              <button className="module-card panel" key={module.id} onClick={() => setFocusedModule(module)} type="button">
                <span className="module-accent" style={{ backgroundColor: module.accent }} />
                <p className="section-kicker">{module.eyebrow}</p>
                <h3>{module.title}</h3>
                <p>{module.summary}</p>
                <strong>{module.cta}</strong>
              </button>
            ))}
          </div>

          {focusedModule ? <ModuleDrawer module={focusedModule} onClose={() => setFocusedModule(null)} /> : null}
        </section>

        <section className="footer-panel panel">
          <div>
            <p className="section-kicker">Sources</p>
            <ul className="source-list">
              {sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </div>
          <div className="footer-cta">
            <h3>Designed to be sent, screen-shared, and extended.</h3>
            <p>
              The codebase is modular enough to turn each chapter into a deeper landing page or route later, while the
              current experience stays tight and polished.
            </p>
            <div className="hero-actions">
              <a className="button button-solid" href="mailto:enquiry@thedubaimall.com?subject=Dubai%20Mall%20Sales%20Conversation">
                Start a leasing conversation
              </a>
              <a className="button button-ghost" href="https://thedubaimall.com/en/pages/exhibition-center" target="_blank" rel="noreferrer">
                Open public venue page
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionCopy({ chapterId }: { chapterId: ChapterId }) {
  const chapter = chapters.find((item) => item.id === chapterId);

  if (!chapter) {
    return null;
  }

  return (
    <div className="section-copy panel">
      <p className="section-kicker">{chapter.label}</p>
      <h2>{chapter.title}</h2>
      <p>{chapter.copy}</p>
    </div>
  );
}

function VideoStage({ media, onSelectMedia }: { media: MediaItem; onSelectMedia: (id: string) => void }) {
  return (
    <figure className="video-stage">
      <video className="stage-video" autoPlay loop muted playsInline poster={media.poster} preload="metadata">
        <source src={media.videoUrl} type="video/mp4" />
      </video>
      <div className="video-overlay" />
      <figcaption className="video-caption">
        <div>
          <p className="section-kicker">{media.eyebrow}</p>
          <h3>{media.title}</h3>
          <p>{media.description}</p>
        </div>
        <div className="caption-stats">
          {media.stats.map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>
      </figcaption>
      <div className="media-switcher" role="tablist" aria-label="Media reel">
        {mediaReel.map((item) => (
          <button
            key={item.id}
            className={item.id === media.id ? 'active' : ''}
            onClick={() => onSelectMedia(item.id)}
            type="button"
          >
            {item.title}
          </button>
        ))}
      </div>
    </figure>
  );
}

function ModuleDrawer({ module, onClose }: { module: ModuleCard; onClose: () => void }) {
  return (
    <aside className="drawer panel">
      <div className="drawer-head">
        <div>
          <p className="section-kicker">{module.eyebrow}</p>
          <h3>{module.title}</h3>
        </div>
        <button className="drawer-close" onClick={onClose} type="button">
          Close
        </button>
      </div>
      <div className="drawer-body">
        {module.details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
      </div>
    </aside>
  );
}

export default App;