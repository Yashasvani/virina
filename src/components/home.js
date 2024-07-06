import React, { useState, useEffect } from 'react';
import './home.css';
import localImage from '../images/images.jpeg'
import localImage2 from '../images/image.png'


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'data:image/jpeg;base64,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',
    {localImage2}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <div>
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
    </div>
  );
};

export default Home;
