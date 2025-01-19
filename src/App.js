import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const background = document.querySelector('.parallax-bg');
      if (background) {
        background.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#d4af37", "#8b0000", "#ffffff"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 6,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 2,
              sync: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <div className="app">
      <div className="parallax-bg"></div>
      <div className="content-wrapper">
        <Header />
        <main className="main-content">
          <div className="intro-text">
            <img src="/logo7.png" alt="For The Realm" className="main-logo" />
            <div className="buttons">
              <Button type="primary" link="https://store.yourgame.com">
                Buy Now
              </Button>
              <Button type="secondary" link="https://youtube.com/yourgametrailer">
                Watch Trailer
              </Button>
            </div>
          </div>
        </main>

        <section className="features-section">
          <h2>GAME FEATURES</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Team Based</h3>
              <p>Join forces with other players in strategic team-based gameplay. Coordinate, strategize, and triumph together.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Tab Target Gameplay</h3>
              <p>Master the classic tab-target combat system with modern twists. Strategic targeting and skill execution are key to victory.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚔️</div>
              <h3>Save the Realm</h3>
              <p>Work together with your allies to protect and save the realm from impending doom. Your choices shape the world's fate.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="https://store.steampowered.com/app/your-game" target="_blank" rel="noopener noreferrer">
                Steam Page
              </a>
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              <a href="/terms-of-use" target="_blank" rel="noopener noreferrer">
                Terms of Use
              </a>
            </div>
            <div className="footer-copyright">
              2024 For The Realm. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
