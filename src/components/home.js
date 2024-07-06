import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://source.unsplash.com/random/1500x400?sig=1',
    'https://source.unsplash.com/random/1500x400?sig=2',
    'https://source.unsplash.com/random/1500x400?sig=3'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const toggleSideNav = () => {
    const sideNav = document.getElementById('sideNavMenu');
    sideNav.classList.toggle('open');
    sideNav.classList.toggle('closed');
  };

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
        <div className="mission-statement">
          Empowering Women through Health, Education, and Employment
        </div>
      </div>

      <div className="content">
        <h1 className="section-title">Virina Foundation at a Glance: Empowering Women through Health, Education, and Employment</h1>
        <p>The Virina Foundation is dedicated to empowering women by focusing on health, awareness/education, and employment. Our impactful initiatives have reached thousands of women, making significant strides in various health areas, skill development, and education.</p>

        <h2 className="section-title">Key Achievements</h2>
        <p><strong>Global Participation and Recognition:</strong></p>
        <ul>
          <li>UNESCO Events: Our participation in UNESCO events in Paris, France, three times last year underscores our commitment to women's empowerment and our recognition on a global platform. These events allowed us to share our innovative approaches and learn from international best practices.</li>
        </ul>

        <div className="initiatives-slides">
          <div className="initiative-slide">
            <img src="https://source.unsplash.com/random/400x300?sig=1" alt="Initiative Slide 1" />
            <p>Amenia Mukt Bharat: Promoting anemia awareness and prevention programs, reaching thousands of women with nutritional supplements and education to combat anemia.</p>
          </div>
          <div className="initiative-slide">
            <img src="https://source.unsplash.com/random/400x300?sig=2" alt="Initiative Slide 2" />
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

        <div className="cta-buttons">
          <button>Donate</button>
          <button>Get Involved</button>
        </div>

        <h2 className="section-title">Upcoming Campaigns</h2>
        <p>Join Us in Making a Difference!</p>
        <ul>
          <li>Campaign in City A - Date</li>
          <li>Campaign in City B - Date</li>
          <li>Campaign in City C - Date</li>
        </ul>
        <div className="cta-buttons">
          <button>Volunteer</button>
        </div>

        <h2 className="section-title">Testimonials</h2>
        <p>"The Virina Foundation has transformed my life. The skills I learned have helped me support my family." - Beneficiary</p>
        <p>"Thanks to the health initiatives, my community is more aware of health issues and how to tackle them." - Community Member</p>
      </div>

      <footer>
        <div>Contact Information: Address, Phone Number, Email</div>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">FAQs</a>
        </div>
        <div>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>

      <div className="side-navigation closed" id="sideNavMenu">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Volunteer</a>
        <a href="#">Donate</a>
        <a href="#">Events</a>
      </div>
      <button className="side-navigation" onClick={toggleSideNav}>☰</button>
    </div>
  );
};

export default Home;
