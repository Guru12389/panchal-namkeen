import React, { useState, useEffect } from "react";
import "./About.css";
import pic7 from "./assets/pic7.jpeg";
import akash from "./assets/Akash.jpg";
import ayush from "./assets/Ayush.JPG";
import abhay from "./assets/Abhay.jpg";
/* ADD THIS INSIDE YOUR COMPONENT */

// import { useEffect } from "react";



export default function About() {
  const [popup, setPopup] = useState(null);
  const [popupLanguage, setPopupLanguage] = useState("english");

  useEffect(() => {

  if (popup) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };

}, [popup]);

  const closePopup = () => setPopup(null);
  const togglePopupLanguage = () => {
  setPopupLanguage((prev) =>
    prev === "english" ? "hindi" : "english"
  );
};

  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - diameter / 2}px`;
    circle.style.top = `${e.clientY - button.offsetTop - diameter / 2}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="hero-premium">
        <div className="grain-overlay"></div>
        <div className="hero-content">
          <h1 className="fade-up">
            About Panchalveda Namkeen
          </h1>
          <h3 className="fade-up delay-1">
            Crafted in Farrukhabad. Rooted in Tradition.
          </h3>
          <p className="fade-up delay-2">
            Taste of Bharat in Every Bite.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section-white">
        <div className="story-grid">
          <div className="story-image-wrapper">
            <img src={pic7} alt="Farrukhabadi Namkeen" />
            <div className="featured-badge">
              📰 Featured in Local Heritage Press
            </div>
          </div>

          <div>
            <h2>Farrukhabadi Namkeen</h2>
            <h4>A Flavorful Delight Infused with the Aroma of Heeng</h4>
            <p>
              Originating from Farrukhabad, Uttar Pradesh,
              our namkeen carries a legacy shaped by bold spices
              and the unmistakable aroma of <strong>heeng</strong>.
            </p>
            
          </div>
        </div>
        
      </section>

      {/* LEGACY SECTION */}
      <section className="legacy-section">
        <h2>
          “In Farrukhabad, Heeng is not just a spice — it is an identity.”
        </h2>
        <p>
          For generations, this aroma has defined celebrations,
          gatherings, and everyday meals.
        </p>

        <div className="steam-bowl">
          <div className="steam"></div>
          <div className="steam steam2"></div>
          <div className="bowl"></div>
        </div>
      </section>

      {/* MISSION / VISION SECTION */}
<section className="section-beige">

  <div className="mission-grid">

    {/* MISSION */}
    <div className="mission-card">
      <div className="icon-circle">🎯</div>

      <h3>Mission</h3>

      <p>
        Deliver authentic Indian snacks with uncompromised quality.
      </p>

      <button
        onClick={(e) => {
          createRipple(e);
          setPopup("mission");
        }}
        className="premium-btn"
      >
        View More
      </button>
    </div>

    {/* VISION */}
    <div className="mission-card">
      <div className="icon-circle">🌟</div>

      <h3>Vision</h3>

      <p>
        Build Panchalveda Namkeen into a globally trusted brand.
      </p>

      <button
        onClick={(e) => {
          createRipple(e);
          setPopup("vision");
        }}
        className="premium-btn"
      >
        View More
      </button>
    </div>

    {/* DETAILED */}
    <div className="mission-card">
      <div className="icon-circle">📜</div>

      <h3>Detailed</h3>

      <p>
        Discover our heritage and the role of heeng.
      </p>

      <button
        onClick={(e) => {
          createRipple(e);
          setPopup("details");
        }}
        className="premium-btn"
      >
        View More
      </button>
    </div>

    {/* HISTORY */}
    <div className="mission-card">
      <div className="icon-circle">🏛️</div>

      <h3>History</h3>

      <p>
        Explore the rich journey and legacy of Panchalveda Namkeen.
      </p>

      <button
        onClick={(e) => {
          createRipple(e);
          setPopup("history");
        }}
        className="premium-btn"
      >
        View More
      </button>
    </div>

    {/* ACHIEVEMENTS */}
    <div className="mission-card">
      <div className="icon-circle">🏆</div>

      <h3>Achievements</h3>

      <p>
        Discover milestones and achievements of our brand.
      </p>

      <button
        onClick={(e) => {
          createRipple(e);
          setPopup("achievements");
        }}
        className="premium-btn"
      >
        View More
      </button>
    </div>

  </div>

</section>


{/* ================= FULL SCREEN POPUPS ================= */}

{/* PREMIUM BLOG POPUP */}
{popup && (
  <div className="premium-blog-popup">

    {/* CLOSE BUTTON */}
    <button
      className="premium-close-btn"
      onClick={() => setPopup(null)}
    >
      ✕
    </button>

    {/* BLOG CONTENT */}
    <div className="premium-blog-content">
      <div className="language-toggle-wrapper">
  <button
    className="language-toggle-btn"
    onClick={togglePopupLanguage}
  >
    {popupLanguage === "english" ? "हिंदी" : "English"}
  </button>
</div>

      {/* MISSION */}
      {popup === "mission" && (
  <>
    {popupLanguage === "english" ? (
      <>
        <h1>Our Mission</h1>

        <p>
          At Panchalveda Namkeen, our mission is to preserve
          authentic Indian snacking traditions while
          maintaining modern quality standards.
        </p>

        <p>
          We believe taste is not just flavor —
          it is emotion, memory, and culture.
        </p>
      </>
    ) : (
      <>
        <h1>हमारा मिशन</h1>

        <p>
          पंचाल नमकीन का उद्देश्य भारतीय पारंपरिक स्वाद
          और आधुनिक गुणवत्ता को एक साथ प्रस्तुत करना है।
        </p>

        <p>
          हमारे लिए स्वाद केवल फ्लेवर नहीं,
          बल्कि भावना, यादें और संस्कृति है।
        </p>
      </>
    )}
  </>
)}
      {/* VISION */}
      {popup === "vision" && (
  <>
    {popupLanguage === "english" ? (
      <>
        <h1>Our Vision</h1>

        <p>
          Our vision is to transform Panchalveda Namkeen
          into a globally trusted Indian snack brand.
        </p>

        <p>
          We want people across the world to experience
          the authentic flavors of Bharat through our
          products.
        </p>

        <p>
          Innovation, consistency, and customer trust
          remain the foundation of our journey.
        </p>
      </>
    ) : (
      <>
        <h1>हमारा विज़न</h1>

        <p>
          हमारा विज़न पंचाल नमकीन को एक
          वैश्विक स्तर पर विश्वसनीय भारतीय स्नैक ब्रांड
          के रूप में स्थापित करना है।
        </p>

        <p>
          हम चाहते हैं कि दुनिया भर के लोग
          हमारे उत्पादों के माध्यम से
          भारत के असली स्वाद का अनुभव करें।
        </p>

        <p>
          नवाचार, निरंतर गुणवत्ता और ग्राहकों का विश्वास
          हमारी यात्रा की मजबूत नींव हैं।
        </p>
      </>
    )}
  </>
  
)}

    {/* DETAILS */}
{popup === "history" && (


  <div
    style={{
      fontSize: "0.88rem", // Reduce overall text size by about 40%
      lineHeight: "1.6",
    }}
  >

  <>
    {popupLanguage === "english" ? (
      
      <>
        <h1>Farrukhabadi Namkeen</h1>

        <p>
          Farrukhabadi Namkeen is known for its powerful flavor profile and
          aromatic use of authentic heeng.
        </p>

        <p>
          The bold aroma and crispy texture make it unique from other namkeen
          varieties across India.
        </p>

        <p>
          Generations of craftsmanship and traditional recipes have shaped this
          flavorful legacy.
        </p>

        <h2>
          Farrukhabadi Namkeen: A Flavorful Delight Infused with the Aroma of
          Heeng
        </h2>

        <p>
          India's diverse culinary landscape is a blend of regional flavors,
          traditional recipes, and unique ingredients, each region offering
          something special.
        </p>

        <p>
          Farrukhabadi Namkeen stands out as a savory snack known for its
          distinctive flavor, created by the generous use of authentic heeng
          (asafoetida).
        </p>

        <p>
          Originating from the Farrukhabad district of Uttar Pradesh, this
          namkeen has become famous for its taste, aroma, and cultural
          heritage.
        </p>

        <h2>The Essence of Farrukhabadi Namkeen</h2>

        <p>
          What makes Farrukhabadi Namkeen unique is its bold use of heeng,
          which gives the snack its signature earthy aroma and unforgettable
          taste.
        </p>

        <p>
          In Indian cuisine, heeng is valued for both its rich flavor and
          digestive benefits.
        </p>

        <p>
          Whether it is crispy sev, crunchy matthi, or spicy kachori, heeng
          remains the ingredient that brings every variety together.
        </p>

        <h2>Historical Roots and Culinary Heritage</h2>

        <p>
          The tradition of making Farrukhabadi Namkeen dates back centuries and
          is deeply connected to the culture of Farrukhabad.
        </p>

        <p>
          Because Farrukhabad was located on important trade routes, premium
          quality asafoetida from Afghanistan and Iran became easily available.
        </p>

        <p>
          This perfect combination of traditional recipes and aromatic heeng
          eventually created the famous Farrukhabadi Namkeen enjoyed today.
        </p>

        <h2>Heeng: The Star Ingredient</h2>

        <p>
          While heeng is commonly used in Indian tempering, Farrukhabadi
          Namkeen makes it the centerpiece of every bite.
        </p>

        <p>
          Carefully selected premium heeng perfectly complements the crunchy
          texture, creating a bold flavor that is difficult to match.
        </p>

        <h2>Popular Varieties</h2>

        <ul>
          <li>
            <strong>Heeng Sev:</strong> Thin, crispy gram-flour strands seasoned
            generously with authentic heeng.
          </li>

          <li>
            <strong>Heeng Bhujia:</strong> Slightly thicker than sev with a
            stronger, richer flavor.
          </li>

          <li>
            <strong>Heeng Kachori:</strong> Crispy layered kachoris filled with
            spicy heeng stuffing.
          </li>

          <li>
            <strong>Chana Dal Namkeen:</strong> Crunchy roasted chana dal
            seasoned with salt, pepper, and a touch of heeng.
          </li>
        </ul>

        <p>
          Every variety makes a perfect companion for tea or as a delicious
          snack during meals.
        </p>

        <h2>Conclusion</h2>

        <p>
          Farrukhabadi Namkeen is more than just a snack—it is a culinary
          heritage proudly representing the traditions of Farrukhabad.
        </p>

        <p>
          As its popularity continues to grow across India and around the
          world, every bite delivers the rich aroma of heeng and the timeless
          taste of history.
        </p>
      </>
    ) : (
      <>
        <h1>फर्रुखाबादी नमकीन</h1>

        <p>
          फर्रुखाबादी नमकीन अपने शक्तिशाली स्वाद और असली हींग की मनमोहक
          सुगंध के लिए प्रसिद्ध है।
        </p>

        <p>
          इसका साहसिक स्वाद और कुरकुरा बनावट इसे भारत के अन्य नमकीनों से
          अलग पहचान देता है।
        </p>

        <p>
          पीढ़ियों से चली आ रही शिल्पकला और पारंपरिक रेसिपी ने इसे स्वादिष्ट
          विरासत प्रदान की है।
        </p>

        <h2>हींग की सुगंध से सराबोर स्वादिष्ट आनंद</h2>

        <p>
          भारत की विविधतापूर्ण पाक-कला क्षेत्रीय स्वादों, पारंपरिक व्यंजनों
          और अनोखी सामग्री का अद्भुत मिश्रण है।
        </p>

        <p>
          इसी समृद्ध विरासत में फर्रुखाबादी नमकीन उत्तर प्रदेश के फर्रुखाबाद
          जिले से निकला एक ऐसा नमकीन है जो अपने विशिष्ट स्वाद, सुगंध और
          सांस्कृतिक धरोहर के लिए पूरे भारत में प्रसिद्ध है।
        </p>

        <h2>फर्रुखाबादी नमकीन का सार</h2>

        <p>
          फर्रुखाबादी नमकीन की सबसे बड़ी विशेषता इसमें हींग (असफेटिडा) का
          भरपूर उपयोग है।
        </p>

        <p>
          भारतीय पाक-कला में हींग अपनी तीव्र सुगंध, पाचन संबंधी गुणों और
          स्वाद को गहराई देने के लिए अत्यंत मूल्यवान मानी जाती है।
        </p>

        <p>
          चाहे कुरकुरा सेव हो, मठरी हो या मसालेदार कचौड़ी, हींग का विशिष्ट
          स्वाद हर प्रकार को अनोखा बनाता है।
        </p>

        <h2>ऐतिहासिक जड़ें और पाक-विरासत</h2>

        <p>
          फर्रुखाबाद में नमकीन बनाने की परंपरा सदियों पुरानी है और यह जिले
          की सांस्कृतिक विरासत से गहराई से जुड़ी हुई है।
        </p>

        <p>
          प्राचीन व्यापार मार्गों पर स्थित होने के कारण अफगानिस्तान और ईरान
          से आने वाली उच्च गुणवत्ता वाली हींग यहाँ आसानी से उपलब्ध थी।
        </p>

        <p>
          पारंपरिक रेसिपियों और श्रेष्ठ हींग के मेल ने फर्रुखाबादी नमकीन को
          उसकी अनोखी पहचान प्रदान की।
        </p>

        <h2>हींग: मुख्य नायिका</h2>

        <p>
          भारतीय रसोई में हींग का उपयोग सामान्यतः तड़के में किया जाता है,
          लेकिन फर्रुखाबादी नमकीन में यही इसका सबसे प्रमुख स्वाद बन जाती है।
        </p>

        <p>
          उच्च गुणवत्ता वाली हींग की सुगंध और नमकीन की कुरकुराहट मिलकर ऐसा
          स्वाद पैदा करती है जो कहीं और नहीं मिलता।
        </p>

        <h2>फर्रुखाबादी नमकीन की लोकप्रिय किस्में</h2>

        <ul>
          <li>
            <strong>हींग सेव:</strong> पतले, कुरकुरे बेसन के तार जिनमें
            भरपूर मात्रा में हींग का स्वाद होता है।
          </li>

          <li>
            <strong>हींग भुजिया:</strong> सेव से थोड़ी मोटी और अधिक तीखे
            स्वाद वाली।
          </li>

          <li>
            <strong>हींग कचौड़ी:</strong> कुरकुरी परतों वाली मसालेदार हींग
            से भरी कचौड़ी।
          </li>

          <li>
            <strong>चना दाल नमकीन:</strong> कुरकुरी भुनी चना दाल जिसमें
            नमक, काली मिर्च और हल्की हींग का स्वाद होता है।
          </li>
        </ul>

        <p>
          ये सभी किस्में चाय के साथ या भोजन के साथ स्वाद बढ़ाने के लिए
          उत्तम हैं।
        </p>

        <h2>निष्कर्ष</h2>

        <p>
          फर्रुखाबादी नमकीन केवल एक नमकीन नहीं, बल्कि एक समृद्ध पाक-विरासत
          है।
        </p>

        <p>
          जैसे-जैसे इसकी लोकप्रियता भारत और विदेशों में बढ़ रही है, यह
          फर्रुखाबाद की पाक-गौरव का प्रतीक बनी हुई है और हर कौर में इतिहास
          तथा हींग की अनोखी महक का अनुभव कराती है।
        </p>
      </>
    )}
  </> </div>
)}

    

      {/* BACK BUTTON */}
      <div className="popup-bottom">

        <button
          className="back-btn"
          onClick={() => setPopup(null)}
        >
          ← Back
        </button>

      </div>

    </div>

  </div>
)}
      {/* VALUES */}
      <section className="section-pattern">
        <h2 className="center">Our Core Values</h2>
        <div className="values-grid">

          <div className="value-pill">
            <span>✅ Quality First</span><br></br>
            <small>We never compromise on ingredients.</small>
          </div>

          <div className="value-pill">
            <span>🤝 Customer Trust</span><br></br>
            <small>Trust built with consistency.</small>
          </div>

          <div className="value-pill">
            <span>🌿Authentic Ingredients</span><br></br>
            <small>Pure spices. Pure heritage.</small>
          </div>

          <div className="value-pill">
            <span>❤️ Passion for Taste</span><br></br>
            <small>Made with emotion & pride.</small>
          </div>

        </div>
      </section>

      {/* TEAM */}
      <section className="section-white">
        <h2 className="center">Our Team</h2>
        <div className="team-grid">

          <div className="team-card">
            <div className="team-img-wrapper">
              <img src={akash} alt="Akash" />
            </div>
            <h4>Akash Dubey</h4>
            <p>Founder & MD</p>
            <small>Leading Since 2018</small>
          </div>

          <div className="team-card">
            <div className="team-img-wrapper">
              <img src={ayush} alt="Ayush" />
            </div>
            <h4>Ayush Dubey</h4>
            <p>Operations Head</p>
          </div>

          <div className="team-card">
            <div className="team-img-wrapper">
              <img src={abhay} alt="Abhay" />
            </div>
            <h4>Abhay Dubey</h4>
            <p>Marketing & Creative</p>
          </div>

        </div>
      </section>

      {/* POPUP */}
      {popup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box slide-up" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={closePopup}>✕</span>

            {popup === "mission" && (
              <>
                <h2>Our Mission</h2>
                <p>
                  Preserve authentic Indian snacking traditions
                  while maintaining modern quality standards.
                </p>
              </>
            )}

            {popup === "vision" && (
              <>
                <h2>Our Vision</h2>
                <p>
                  Take the taste of Bharat from local kitchens to global shelves.
                </p>
              </>
            )}

            {popup === "details" && (
              <>
                <h2>Farrukhabadi Namkeen</h2>
                <p>
                  Heeng defines our flavor — its aroma binds generations.
                </p>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
