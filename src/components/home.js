import React, { useState, useEffect } from 'react';
import './home.css';
import localImage from '../images/images.jpeg';
import localImage2 from '../images/image.png';
import achievementImage1 from '../images/achievement1.png';
import achievementImage2 from '../images/achievement2.png';
import achievementImage3 from '../images/achievement3.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://source.unsplash.com/random/1500x400?sig=1',
    'https://source.unsplash.com/random/1500x400?sig=2',
    'https://source.unsplash.com/random/1500x400?sig=3',
    localImage2
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <header>
        <div className="logo">Virina Foundation</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Health Initiatives</a></li>
            <li><a href="#">Educational Campaigns</a></li>
            <li><a href="#">Skill Development</a></li>
            <li><a href="#">Impact</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <div className="hero">
        <img src={slides[currentSlide]} alt="Hero" />
      </div>

      <div className="mission-banner">
        <h2>Empowering Women through Health, Education, and Employment</h2>
      </div>

      <div className="content">
        <section className="intro-section">
          <h1 className="section-title">Virina Foundation at a Glance</h1>
          <p><strong>The Virina Foundation</strong> is dedicated to empowering women by focusing on health, awareness/education, and employment. Our impactful initiatives have reached thousands of women, making significant strides in various health areas, skill development, and education.</p>
        </section>

        <section className="achievement-section">
          <h2 className="section-title">Key Achievements</h2>
          <div className="achievement-content">
            <div className="achievement-images">
              <img src={achievementImage1} alt="UNESCO Event 1" />
              <img src={achievementImage2} alt="UNESCO Event 2" />
              <img src={achievementImage3} alt="UNESCO Event 3" />
            </div>
            <div className="achievement-text">
              <h3>Participated in UNESCO</h3>
              <p>The Virina Foundation's participation in UNESCO events in Paris, France, three times last year underscores their commitment to women's empowerment and recognition on a global platform. These events allowed them to share their innovative approaches and learn from international best practices.</p>
            </div>
          </div>
        </section>

        <section className="initiatives-section">
          <h2 className="section-title">Initiatives</h2>
          <div className="initiatives-slides">
            <div className="initiative-slide">
              <img src={localImage} alt="Initiative Slide 1" />
              <p>Amenia Mukt Bharat: Promoting anemia awareness and prevention programs, reaching thousands of women with nutritional supplements and education to combat anemia.</p>
            </div>
            <div className="initiative-slide">
              <img src={localImage2} alt="Initiative Slide 2" />
              <p>TB Mukt Bharat: At the forefront of the "TB Mukt Bharat" initiative, reaching thousands of TB patients with essential treatment and awareness programs.</p>
            </div>
            <div className="initiative-slide">
              <img src="https://source.unsplash.com/random/400x300?sig=3" alt="Initiative Slide 3" />
              <p>Family Planning: Provided education and resources to thousands of women, helping them make informed choices about their reproductive health.</p>
            </div>
            <div className="initiative-slide">
              <img src="https://source.unsplash.com/random/400x300?sig=4" alt="Initiative Slide 4" />
              <p>Menstrual Hygiene Management: Reached over 150,000+ women, educating them on menstrual hygiene management. Distributed more than 300,000+ sanitary pads.</p>
            </div>
            <div className="initiative-slide">
              <img src="https://source.unsplash.com/random/400x300?sig=5" alt="Initiative Slide 5" />
              <p>Cancer Mukt Bharat: In collaboration with the Indian Army and AWWA, conducted extensive cancer awareness programs, reaching thousands of Indian Army family members.</p>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <h2 className="section-title">Impact and Statistics</h2>
          <div className="infographics">
            <div className="infographic">
              <img src="https://source.unsplash.com/random/50x50?sig=1" alt="Infographic Icon" />
              <p>Reached over 150,000+ women with menstrual hygiene education.</p>
            </div>
            <div className="infographic">
              <img src="https://source.unsplash.com/random/50x50?sig=2" alt="Infographic Icon" />
              <p>Distributed more than 300,000+ sanitary pads.</p>
            </div>
            <div className="infographic">
              <img src="https://source.unsplash.com/random/50x50?sig=3" alt="Infographic Icon" />
              <p>Conducted cancer awareness programs for thousands of families.</p>
            </div>
            <div className="infographic">
              <img src="https://source.unsplash.com/random/50x50?sig=4" alt="Infographic Icon" />
              <p>Reached 700+ TB patients through the "TB Mukt Bharat" initiative.</p>
            </div>
            <div className="infographic">
              <img src="https://source.unsplash.com/random/50x50?sig=5" alt="Infographic Icon" />
              <p>Implemented anemia prevention programs and family planning education.</p>
            </div>
            <div className="infographic">
              <img src="https://source.unsplash.com/random/50x50?sig=6" alt="Infographic Icon" />
              <p>Trained nearly 900 women in producing high-quality sports goods.</p>
            </div>
            <div className="infographic">
              <img src="https://source.unsplash.com/random/50x50?sig=7" alt="Infographic Icon" />
              <p>Achieved a 30% increase in household incomes for women involved in sports goods production.</p>
            </div>
            <div className="infographic">
              <img src="https://source.unsplash.com/random/50x50?sig=8" alt="Infographic Icon" />
              <p>Empowered incarcerated women to create and sell Rakhees.</p>
            </div>
          </div>
        </section>

        <section className="impact-stories-section">
          <h2 className="section-title">Impact Stories</h2>
          <div className="impact-stories">
            <div className="impact-story">
              <img src="https://source.unsplash.com/random/400x300?sig=6" alt="Impact Story 1" />
              <h3>Gita Chose to Live a Life of Dignity</h3>
              <p>by Shilpi Roy, Churchu, Jharkhand</p>
            </div>
            <div className="impact-story">
              <img src="https://source.unsplash.com/random/400x300?sig=7" alt="Impact Story 2" />
              <h3>Sangita is Smart and so is Her Phone!</h3>
              <p>by Markandeya Mohapatra, Thakurmunda, PRADAN</p>
            </div>
            <div className="impact-story">
              <img src="https://source.unsplash.com/random/400x300?sig=8" alt="Impact Story 3" />
              <h3>Everybody Loves to Make Profit</h3>
              <p>by Shubham Fulmali, Dhamtari, Chhattisgarh</p>
            </div>
            <div className="impact-story">
              <img src="https://source.unsplash.com/random/400x300?sig=9" alt="Impact Story 4" />
              <h3>That's How It Is At 30,000 kms!</h3>
              <p>by Mohini Saha, Narharpur, Chhattisgarh</p>
            </div>
            <div className="impact-story">
              <img src="https://source.unsplash.com/random/400x300?sig=10" alt="Impact Story 5" />
              <h3>A conversation with Meera Devi: A businesswoman</h3>
              <p>by Meghna Mukherjee (MetaMeta Research), Shubham Jain (MetaMeta Research), Vinitika Lal (Pradan)</p>
            </div>
            <div className="impact-story">
              <img src="https://source.unsplash.com/random/400x300?sig=11" alt="Impact Story 6" />
              <h3>All the little wonders!!</h3>
              <p>by Tinit Das, DA, Team Churchu, Hazaribagh</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-buttons">
            <button className="cta-button">Donate</button>
            <button className="cta-button">Get Involved</button>
          </div>
        </section>

        <section className="upcoming-campaigns-section">
          <h2 className="section-title">Upcoming Campaigns</h2>
          <p>Join Us in Making a Difference!</p>
          <ul>
            <li>Campaign in City A - Date</li>
            <li>Campaign in City B - Date</li>
            <li>Campaign in City C - Date</li>
          </ul>
          <div className="cta-buttons">
            <button className="cta-button">Volunteer</button>
          </div>
        </section>

        <section className="testimonials-section">
          <h2 className="section-title">Testimonials</h2>
          <p><strong>"The Virina Foundation has transformed my life. The skills I learned have helped me support my family." - Beneficiary</strong></p>
          <p><strong>"Thanks to the health initiatives, my community is more aware of health issues and how to tackle them." - Community Member</strong></p>
        </section>
      </div>
    </div>
  );
};

export default Home;
