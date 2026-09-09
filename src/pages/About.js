// // import React, { useState, useEffect } from "react";
// // import "./About.css";
// // import pic7 from "./assets/pic7.jpeg";
// // import akash from "./assets/Akash.jpg";
// // import ayush from "./assets/Ayush.JPG";
// // import abhay from "./assets/Abhay.jpg";
// // /* ADD THIS INSIDE YOUR COMPONENT */

// // // import { useEffect } from "react";



// // export default function About() {
// //   const [popup, setPopup] = useState(null);
// //   const [popupLanguage, setPopupLanguage] = useState("english");

// //   useEffect(() => {

// //   if (popup) {
// //     document.body.style.overflow = "hidden";
// //   } else {
// //     document.body.style.overflow = "auto";
// //   }

// //   return () => {
// //     document.body.style.overflow = "auto";
// //   };

// // }, [popup]);

// //   const closePopup = () => setPopup(null);
// //   const togglePopupLanguage = () => {
// //   setPopupLanguage((prev) =>
// //     prev === "english" ? "hindi" : "english"
// //   );
// // };

// //   const createRipple = (e) => {
// //     const button = e.currentTarget;
// //     const circle = document.createElement("span");
// //     const diameter = Math.max(button.clientWidth, button.clientHeight);
// //     circle.style.width = circle.style.height = `${diameter}px`;
// //     circle.style.left = `${e.clientX - button.offsetLeft - diameter / 2}px`;
// //     circle.style.top = `${e.clientY - button.offsetTop - diameter / 2}px`;
// //     circle.classList.add("ripple");
// //     button.appendChild(circle);
// //     setTimeout(() => circle.remove(), 600);
// //   };

// //   return (
// //     <div className="about-page">

// //       {/* HERO */}
// //       <section className="hero-premium">
// //         <div className="grain-overlay"></div>
// //         <div className="hero-content">
// //           <h1 className="fade-up">
// //             About Panchalveda Namkeen
// //           </h1>
// //           <h3 className="fade-up delay-1">
// //             Crafted in Farrukhabad. Rooted in Tradition.
// //           </h3>
// //           <p className="fade-up delay-2">
// //             Taste of Bharat in Every Bite.
// //           </p>
// //         </div>
// //       </section>

// //       {/* STORY */}
// //       <section className="section-white">
// //         <div className="story-grid">
// //           <div className="story-image-wrapper">
// //             <img src={pic7} alt="Farrukhabadi Namkeen" />
// //             <div className="featured-badge">
// //               📰 Featured in Local Heritage Press
// //             </div>
// //           </div>

// //           <div>
// //             <h2>Farrukhabadi Namkeen</h2>
// //             <h4>A Flavorful Delight Infused with the Aroma of Heeng</h4>
// //             <p>
// //               Originating from Farrukhabad, Uttar Pradesh,
// //               our namkeen carries a legacy shaped by bold spices
// //               and the unmistakable aroma of <strong>heeng</strong>.
// //             </p>
            
// //           </div>
// //         </div>
        
// //       </section>

// //       {/* LEGACY SECTION */}
// //       <section className="legacy-section">
// //         <h2>
// //           “In Farrukhabad, Heeng is not just a spice — it is an identity.”
// //         </h2>
// //         <p>
// //           For generations, this aroma has defined celebrations,
// //           gatherings, and everyday meals.
// //         </p>

// //         <div className="steam-bowl">
// //           <div className="steam"></div>
// //           <div className="steam steam2"></div>
// //           <div className="bowl"></div>
// //         </div>
// //       </section>

// //       {/* MISSION / VISION SECTION */}
// // <section className="section-beige">

// //   <div className="mission-grid">

// //     {/* MISSION */}
// //     <div className="mission-card">
// //       <div className="icon-circle">🎯</div>

// //       <h3>Mission</h3>

// //       <p>
// //         Deliver authentic Indian snacks with uncompromised quality.
// //       </p>

// //       <button
// //         onClick={(e) => {
// //           createRipple(e);
// //           setPopup("mission");
// //         }}
// //         className="premium-btn"
// //       >
// //         View More
// //       </button>
// //     </div>

// //     {/* VISION */}
// //     <div className="mission-card">
// //       <div className="icon-circle">🌟</div>

// //       <h3>Vision</h3>

// //       <p>
// //         Build Panchalveda Namkeen into a globally trusted brand.
// //       </p>

// //       <button
// //         onClick={(e) => {
// //           createRipple(e);
// //           setPopup("vision");
// //         }}
// //         className="premium-btn"
// //       >
// //         View More
// //       </button>
// //     </div>

    

// //     {/* HISTORY */}
// //     <div className="mission-card">
// //       <div className="icon-circle">🏛️</div>

// //       <h3>History</h3>

// //       <p>
// //         Explore the rich journey and legacy of Panchalveda Namkeen.
// //       </p>

// //       <button
// //         onClick={(e) => {
// //           createRipple(e);
// //           setPopup("history");
// //         }}
// //         className="premium-btn"
// //       >
// //         View More
// //       </button>
// //     </div>

// //     {/* ACHIEVEMENTS */}
// //     <div className="mission-card">
// //       <div className="icon-circle">🏆</div>

// //       <h3>Achievements</h3>

// //       <p>
// //         Discover milestones and achievements of our brand.
// //       </p>

// //       <button
// //         onClick={(e) => {
// //           createRipple(e);
// //           setPopup("achievements");
// //         }}
// //         className="premium-btn"
// //       >
// //         View More
// //       </button>
// //     </div>

// //   </div>

// // </section>


// // {/* ================= FULL SCREEN POPUPS ================= */}

// // {/* PREMIUM BLOG POPUP */}
// // {popup && (
// //   <div className="premium-blog-popup">

// //     {/* CLOSE BUTTON */}
// //     <button
// //       className="premium-close-btn"
// //       onClick={() => setPopup(null)}
// //     >
// //       ✕
// //     </button>

// //     {/* BLOG CONTENT */}
// //     <div className="premium-blog-content">
// //       <div className="language-toggle-wrapper">
// //   <button
// //     className="language-toggle-btn"
// //     onClick={togglePopupLanguage}
// //   >
// //     {popupLanguage === "english" ? "हिंदी" : "English"}
// //   </button>
// // </div>

// //       {/* MISSION */}
// //       {popup === "mission" && (
// //   <>
// //     {popupLanguage === "english" ? (
// //       <>
// //         <h1>Our Mission</h1>

// //         <p>
// //           At Panchalveda Namkeen, our mission is to preserve
// //           authentic Indian snacking traditions while
// //           maintaining modern quality standards.
// //         </p>

// //         <p>
// //           We believe taste is not just flavor —
// //           it is emotion, memory, and culture.
// //         </p>
// //       </>
// //     ) : (
// //       <>
// //         <h1>हमारा मिशन</h1>

// //         <p>
// //           पंचाल नमकीन का उद्देश्य भारतीय पारंपरिक स्वाद
// //           और आधुनिक गुणवत्ता को एक साथ प्रस्तुत करना है।
// //         </p>

// //         <p>
// //           हमारे लिए स्वाद केवल फ्लेवर नहीं,
// //           बल्कि भावना, यादें और संस्कृति है।
// //         </p>
// //       </>
// //     )}
// //   </>
// // )}
// //       {/* VISION */}
// //       {popup === "vision" && (
// //   <>
// //     {popupLanguage === "english" ? (
// //       <>
// //         <h1>Our Vision</h1>

// //         <p>
// //           Our vision is to transform Panchalveda Namkeen
// //           into a globally trusted Indian snack brand.
// //         </p>

// //         <p>
// //           We want people across the world to experience
// //           the authentic flavors of Bharat through our
// //           products.
// //         </p>

// //         <p>
// //           Innovation, consistency, and customer trust
// //           remain the foundation of our journey.
// //         </p>
// //       </>
// //     ) : (
// //       <>
// //         <h1>हमारा विज़न</h1>

// //         <p>
// //           हमारा विज़न पंचाल नमकीन को एक
// //           वैश्विक स्तर पर विश्वसनीय भारतीय स्नैक ब्रांड
// //           के रूप में स्थापित करना है।
// //         </p>

// //         <p>
// //           हम चाहते हैं कि दुनिया भर के लोग
// //           हमारे उत्पादों के माध्यम से
// //           भारत के असली स्वाद का अनुभव करें।
// //         </p>

// //         <p>
// //           नवाचार, निरंतर गुणवत्ता और ग्राहकों का विश्वास
// //           हमारी यात्रा की मजबूत नींव हैं।
// //         </p>
// //       </>
// //     )}
// //   </>
  
// // )}

// //     {/* DETAILS */}
// // {popup === "history" && (


// //   <div
// //     style={{
// //       fontSize: "0.88rem", // Reduce overall text size by about 40%
// //       lineHeight: "1.6",
// //     }}
// //   >

// //   <>
// //     {popupLanguage === "english" ? (
      
// //       <>
// //         <h1>Farrukhabadi Namkeen</h1>

// //         <p>
// //           Farrukhabadi Namkeen is known for its powerful flavor profile and
// //           aromatic use of authentic heeng.
// //         </p>

// //         <p>
// //           The bold aroma and crispy texture make it unique from other namkeen
// //           varieties across India.
// //         </p>

// //         <p>
// //           Generations of craftsmanship and traditional recipes have shaped this
// //           flavorful legacy.
// //         </p>

// //         <h2>
// //           Farrukhabadi Namkeen: A Flavorful Delight Infused with the Aroma of
// //           Heeng
// //         </h2>

// //         <p>
// //           India's diverse culinary landscape is a blend of regional flavors,
// //           traditional recipes, and unique ingredients, each region offering
// //           something special.
// //         </p>

// //         <p>
// //           Farrukhabadi Namkeen stands out as a savory snack known for its
// //           distinctive flavor, created by the generous use of authentic heeng
// //           (asafoetida).
// //         </p>

// //         <p>
// //           Originating from the Farrukhabad district of Uttar Pradesh, this
// //           namkeen has become famous for its taste, aroma, and cultural
// //           heritage.
// //         </p>

// //         <h2>The Essence of Farrukhabadi Namkeen</h2>

// //         <p>
// //           What makes Farrukhabadi Namkeen unique is its bold use of heeng,
// //           which gives the snack its signature earthy aroma and unforgettable
// //           taste.
// //         </p>

// //         <p>
// //           In Indian cuisine, heeng is valued for both its rich flavor and
// //           digestive benefits.
// //         </p>

// //         <p>
// //           Whether it is crispy sev, crunchy matthi, or spicy kachori, heeng
// //           remains the ingredient that brings every variety together.
// //         </p>

// //         <h2>Historical Roots and Culinary Heritage</h2>

// //         <p>
// //           The tradition of making Farrukhabadi Namkeen dates back centuries and
// //           is deeply connected to the culture of Farrukhabad.
// //         </p>

// //         <p>
// //           Because Farrukhabad was located on important trade routes, premium
// //           quality asafoetida from Afghanistan and Iran became easily available.
// //         </p>

// //         <p>
// //           This perfect combination of traditional recipes and aromatic heeng
// //           eventually created the famous Farrukhabadi Namkeen enjoyed today.
// //         </p>

// //         <h2>Heeng: The Star Ingredient</h2>

// //         <p>
// //           While heeng is commonly used in Indian tempering, Farrukhabadi
// //           Namkeen makes it the centerpiece of every bite.
// //         </p>

// //         <p>
// //           Carefully selected premium heeng perfectly complements the crunchy
// //           texture, creating a bold flavor that is difficult to match.
// //         </p>

// //         <h2>Popular Varieties</h2>

// //         <ul>
// //           <li>
// //             <strong>Heeng Sev:</strong> Thin, crispy gram-flour strands seasoned
// //             generously with authentic heeng.
// //           </li>

// //           <li>
// //             <strong>Heeng Bhujia:</strong> Slightly thicker than sev with a
// //             stronger, richer flavor.
// //           </li>

// //           <li>
// //             <strong>Heeng Kachori:</strong> Crispy layered kachoris filled with
// //             spicy heeng stuffing.
// //           </li>

// //           <li>
// //             <strong>Chana Dal Namkeen:</strong> Crunchy roasted chana dal
// //             seasoned with salt, pepper, and a touch of heeng.
// //           </li>
// //         </ul>

// //         <p>
// //           Every variety makes a perfect companion for tea or as a delicious
// //           snack during meals.
// //         </p>

// //         <h2>Conclusion</h2>

// //         <p>
// //           Farrukhabadi Namkeen is more than just a snack—it is a culinary
// //           heritage proudly representing the traditions of Farrukhabad.
// //         </p>

// //         <p>
// //           As its popularity continues to grow across India and around the
// //           world, every bite delivers the rich aroma of heeng and the timeless
// //           taste of history.
// //         </p>
// //       </>
// //     ) : (
// //       <>
// //         <h1>फर्रुखाबादी नमकीन</h1>

// //         <p>
// //           फर्रुखाबादी नमकीन अपने शक्तिशाली स्वाद और असली हींग की मनमोहक
// //           सुगंध के लिए प्रसिद्ध है।
// //         </p>

// //         <p>
// //           इसका साहसिक स्वाद और कुरकुरा बनावट इसे भारत के अन्य नमकीनों से
// //           अलग पहचान देता है।
// //         </p>

// //         <p>
// //           पीढ़ियों से चली आ रही शिल्पकला और पारंपरिक रेसिपी ने इसे स्वादिष्ट
// //           विरासत प्रदान की है।
// //         </p>

// //         <h2>हींग की सुगंध से सराबोर स्वादिष्ट आनंद</h2>

// //         <p>
// //           भारत की विविधतापूर्ण पाक-कला क्षेत्रीय स्वादों, पारंपरिक व्यंजनों
// //           और अनोखी सामग्री का अद्भुत मिश्रण है।
// //         </p>

// //         <p>
// //           इसी समृद्ध विरासत में फर्रुखाबादी नमकीन उत्तर प्रदेश के फर्रुखाबाद
// //           जिले से निकला एक ऐसा नमकीन है जो अपने विशिष्ट स्वाद, सुगंध और
// //           सांस्कृतिक धरोहर के लिए पूरे भारत में प्रसिद्ध है।
// //         </p>

// //         <h2>फर्रुखाबादी नमकीन का सार</h2>

// //         <p>
// //           फर्रुखाबादी नमकीन की सबसे बड़ी विशेषता इसमें हींग (असफेटिडा) का
// //           भरपूर उपयोग है।
// //         </p>

// //         <p>
// //           भारतीय पाक-कला में हींग अपनी तीव्र सुगंध, पाचन संबंधी गुणों और
// //           स्वाद को गहराई देने के लिए अत्यंत मूल्यवान मानी जाती है।
// //         </p>

// //         <p>
// //           चाहे कुरकुरा सेव हो, मठरी हो या मसालेदार कचौड़ी, हींग का विशिष्ट
// //           स्वाद हर प्रकार को अनोखा बनाता है।
// //         </p>

// //         <h2>ऐतिहासिक जड़ें और पाक-विरासत</h2>

// //         <p>
// //           फर्रुखाबाद में नमकीन बनाने की परंपरा सदियों पुरानी है और यह जिले
// //           की सांस्कृतिक विरासत से गहराई से जुड़ी हुई है।
// //         </p>

// //         <p>
// //           प्राचीन व्यापार मार्गों पर स्थित होने के कारण अफगानिस्तान और ईरान
// //           से आने वाली उच्च गुणवत्ता वाली हींग यहाँ आसानी से उपलब्ध थी।
// //         </p>

// //         <p>
// //           पारंपरिक रेसिपियों और श्रेष्ठ हींग के मेल ने फर्रुखाबादी नमकीन को
// //           उसकी अनोखी पहचान प्रदान की।
// //         </p>

// //         <h2>हींग: मुख्य नायिका</h2>

// //         <p>
// //           भारतीय रसोई में हींग का उपयोग सामान्यतः तड़के में किया जाता है,
// //           लेकिन फर्रुखाबादी नमकीन में यही इसका सबसे प्रमुख स्वाद बन जाती है।
// //         </p>

// //         <p>
// //           उच्च गुणवत्ता वाली हींग की सुगंध और नमकीन की कुरकुराहट मिलकर ऐसा
// //           स्वाद पैदा करती है जो कहीं और नहीं मिलता।
// //         </p>

// //         <h2>फर्रुखाबादी नमकीन की लोकप्रिय किस्में</h2>

// //         <ul>
// //           <li>
// //             <strong>हींग सेव:</strong> पतले, कुरकुरे बेसन के तार जिनमें
// //             भरपूर मात्रा में हींग का स्वाद होता है।
// //           </li>

// //           <li>
// //             <strong>हींग भुजिया:</strong> सेव से थोड़ी मोटी और अधिक तीखे
// //             स्वाद वाली।
// //           </li>

// //           <li>
// //             <strong>हींग कचौड़ी:</strong> कुरकुरी परतों वाली मसालेदार हींग
// //             से भरी कचौड़ी।
// //           </li>

// //           <li>
// //             <strong>चना दाल नमकीन:</strong> कुरकुरी भुनी चना दाल जिसमें
// //             नमक, काली मिर्च और हल्की हींग का स्वाद होता है।
// //           </li>
// //         </ul>

// //         <p>
// //           ये सभी किस्में चाय के साथ या भोजन के साथ स्वाद बढ़ाने के लिए
// //           उत्तम हैं।
// //         </p>

// //         <h2>निष्कर्ष</h2>

// //         <p>
// //           फर्रुखाबादी नमकीन केवल एक नमकीन नहीं, बल्कि एक समृद्ध पाक-विरासत
// //           है।
// //         </p>

// //         <p>
// //           जैसे-जैसे इसकी लोकप्रियता भारत और विदेशों में बढ़ रही है, यह
// //           फर्रुखाबाद की पाक-गौरव का प्रतीक बनी हुई है और हर कौर में इतिहास
// //           तथा हींग की अनोखी महक का अनुभव कराती है।
// //         </p>
// //       </>
// //     )}
// //   </> </div>
// // )}

    

// //       {/* BACK BUTTON */}
// //       <div className="popup-bottom">

// //         <button
// //           className="back-btn"
// //           onClick={() => setPopup(null)}
// //         >
// //           ← Back
// //         </button>

// //       </div>

// //     </div>

// //   </div>
// // )}
// //       {/* VALUES */}
// //       <section className="section-pattern">
// //         <h2 className="center">Our Core Values</h2>
// //         <div className="values-grid">

// //           <div className="value-pill">
// //             <span>✅ Quality First</span><br></br>
// //             <small>We never compromise on ingredients.</small>
// //           </div>

// //           <div className="value-pill">
// //             <span>🤝 Customer Trust</span><br></br>
// //             <small>Trust built with consistency.</small>
// //           </div>

// //           <div className="value-pill">
// //             <span>🌿Authentic Ingredients</span><br></br>
// //             <small>Pure spices. Pure heritage.</small>
// //           </div>

// //           <div className="value-pill">
// //             <span>❤️ Passion for Taste</span><br></br>
// //             <small>Made with emotion & pride.</small>
// //           </div>

// //         </div>
// //       </section>

// //       {/* TEAM */}
// //       <section className="section-white">
// //         <h2 className="center">Our Team</h2>
// //         <div className="team-grid">

// // <div className="team-card">
// //             <div className="team-img-wrapper">
// //               <img src={abhay} alt="Abhay" />
// //             </div>
// //             <h4>Aradhya Dubey</h4>
// //             <p>Director</p>
// //           </div>

// //           <div className="team-card">
// //             <div className="team-img-wrapper">
// //               <img src={akash} alt="Akash" />
// //             </div>
// //             <h4>Akash Dubey</h4>
// //             <p>Founder & MD</p>
// //             <small>Leading Since 2018</small>
// //           </div>

// //           <div className="team-card">
// //             <div className="team-img-wrapper">
// //               <img src={ayush} alt="Ayush" />
// //             </div>
// //             <h4>Ayush Dubey</h4>
// //             <p>Operations Head</p>
// //           </div>

// //           <div className="team-card">
// //             <div className="team-img-wrapper">
// //               <img src={abhay} alt="Abhay" />
// //             </div>
// //             <h4>Abhay Dubey</h4>
// //             <p>Co-Director</p>
// //           </div>

// //         </div>
// //       </section>

// //       {/* POPUP */}
// //       {popup && (
// //         <div className="popup-overlay" onClick={closePopup}>
// //           <div className="popup-box slide-up" onClick={(e) => e.stopPropagation()}>
// //             <span className="popup-close" onClick={closePopup}>✕</span>

// //             {popup === "mission" && (
// //               <>
// //                 <h2>Our Mission</h2>
// //                 <p>
// //                   Preserve authentic Indian snacking traditions
// //                   while maintaining modern quality standards.
// //                 </p>
// //               </>
// //             )}

// //             {popup === "vision" && (
// //               <>
// //                 <h2>Our Vision</h2>
// //                 <p>
// //                   Take the taste of Bharat from local kitchens to global shelves.
// //                 </p>
// //               </>
// //             )}

// //             {popup === "details" && (
// //               <>
// //                 <h2>Farrukhabadi Namkeen</h2>
// //                 <p>
// //                   Heeng defines our flavor — its aroma binds generations.
// //                 </p>
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //     </div>
// //   );
// // }











// import React, { useState, useEffect } from "react";
// import "./About.css";
// import pic7 from "./assets/pic7.jpeg";
// import sembeej from './assets/SemBeej.png';
// import paneerbhujiya from './assets/PaneerBhujiya.png';
// import gadbad from './assets/Gadbad.png';
// import pic1 from './assets/pic1.jpeg';
// import pic2 from './assets/pic2.jpeg';
// import pic3 from './assets/pic3.jpeg';
// import pic4 from './assets/pic4.jpeg';
// import pic5 from './assets/pic5.jpeg';
// import pic6 from './assets/pic6.jpeg';

// export default function About() {
//   const [popup, setPopup] = useState(null);
//   const [popupLanguage, setPopupLanguage] = useState("english");
//   const [selectedValue, setSelectedValue] = useState(null);

//   useEffect(() => {
//     if (popup) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [popup]);

//   const closePopup = () => setPopup(null);
  
//   const togglePopupLanguage = () => {
//     setPopupLanguage((prev) => prev === "english" ? "hindi" : "english");
//   };

//   const createRipple = (e) => {
//     const button = e.currentTarget;
//     const circle = document.createElement("span");
//     const diameter = Math.max(button.clientWidth, button.clientHeight);
//     circle.style.width = circle.style.height = `${diameter}px`;
//     circle.style.left = `${e.clientX - button.offsetLeft - diameter / 2}px`;
//     circle.style.top = `${e.clientY - button.offsetTop - diameter / 2}px`;
//     circle.classList.add("ripple");
//     button.appendChild(circle);
//     setTimeout(() => circle.remove(), 600);
//   };

//   // Core Values Data
//   const coreValues = [
//     {
//       id: "quality",
//       icon: "✅",
//       title: "Quality First",
//       description: "We never compromise on ingredients. Every batch is crafted with the finest, hand-selected spices and premium raw materials.",
//       longDesc: [
//         "Our commitment to quality begins at the source. We personally visit farms and spice markets to select only the finest ingredients.",
//         "Every batch undergoes rigorous quality testing to ensure consistency, purity, and the authentic taste that our customers have come to love.",
//         "We believe that great taste starts with great ingredients – no artificial flavors, no preservatives, just pure, natural goodness.",
//         "Our quality standards are maintained through every step – from sourcing to production to packaging."
//       ]
//     },
//     {
//       id: "trust",
//       icon: "🤝",
//       title: "Customer Trust",
//       description: "Trust built with consistency, transparency, and years of delivering authentic flavors that never disappoint.",
//       longDesc: [
//         "For over 5 years, we've been building trust with our customers through consistent quality and authentic taste.",
//         "We believe in complete transparency – from our ingredients to our processes, everything is open and honest.",
//         "Our customers are our family, and their satisfaction is our greatest reward.",
//         "We've earned the trust of thousands of families across India who rely on us for their daily snacking needs."
//       ]
//     },
//     {
//       id: "authentic",
//       icon: "🌿",
//       title: "Authentic Ingredients",
//       description: "Pure spices, traditional recipes, and the unmistakable aroma of heeng that defines our heritage.",
//       longDesc: [
//         "Authenticity is at the heart of everything we do. We use traditional recipes that have been perfected over generations.",
//         "Our heeng is sourced from premium suppliers in Afghanistan and Iran, ensuring the highest quality and most authentic aroma.",
//         "We use only pure, natural spices – no adulteration, no shortcuts, just the real taste of Bharat.",
//         "Every product carries the authentic flavor that has made Farrukhabadi namkeen famous across India."
//       ]
//     },
//     {
//       id: "passion",
//       icon: "❤️",
//       title: "Passion for Taste",
//       description: "Made with emotion, pride, and an unwavering dedication to preserving India's rich culinary heritage.",
//       longDesc: [
//         "Our passion for taste drives everything we do. We're not just making namkeen – we're preserving a culinary legacy.",
//         "Every batch is made with love and dedication, ensuring that each bite carries the warmth of tradition.",
//         "We take pride in our craft, constantly innovating while staying true to our roots.",
//         "Our passion is reflected in the smiles of our customers who enjoy our products with their families."
//       ]
//     }
//   ];

//   // Achievements Data
//   const achievements = [
//     {
//       id: 1,
//       year: "2018",
//       title: "The Beginning",
//       description: "PanchalVeda Namkeen was founded with a vision to bring authentic Farrukhabadi flavors to every home.",
//       image: pic1,
//       detail: "What started as a small family kitchen in Farrukhabad has grown into a trusted brand, loved by thousands across India. Our journey began with a simple mission – to preserve the authentic taste of Bharat and share it with the world."
//     },
//     {
//       id: 2,
//       year: "2020",
//       title: "Pan-India Expansion",
//       description: "Expanded operations across multiple states, bringing authentic flavors to customers everywhere.",
//       image: pic2,
//       detail: "Despite global challenges, we expanded our reach across India. Our products became available in major cities including Mumbai, Delhi, Kolkata, Chennai, and Bangalore, making authentic Farrukhabadi namkeen accessible to families across the nation."
//     },
//     {
//       id: 3,
//       year: "2022",
//       title: "10,000+ Happy Families",
//       description: "Achieved the milestone of serving over 10,000 satisfied families across India and abroad.",
//       image: pic3,
//       detail: "This milestone is a testament to the trust our customers place in us. Every family that chooses PanchalVeda becomes a part of our extended family. We're proud to be a part of countless celebrations, tea-time conversations, and cherished memories."
//     },
//     {
//       id: 4,
//       year: "2024",
//       title: "Heritage Recognition",
//       description: "Recognized as a preserver of traditional Indian snacking heritage and culinary excellence.",
//       image: pic4,
//       detail: "Our commitment to preserving traditional recipes and authentic flavors has been recognized by culinary experts and heritage food enthusiasts. We continue to honor our roots while embracing innovation to serve the evolving tastes of our customers."
//     }
//   ];

//   return (
//     <div className="about-page">

//       {/* ========== HERO SECTION ========== */}
//       <section className="hero-premium">
//         <div className="grain-overlay"></div>
//         <div className="hero-content">
//           <h1 className="fade-up">About Panchalveda Namkeen</h1>
//           <h3 className="fade-up delay-1">Crafted in Farrukhabad. Rooted in Tradition.</h3>
//           <p className="fade-up delay-2">Taste of Bharat in Every Bite.</p>
//         </div>
//       </section>

//       {/* ========== PANCHAL HISTORY & HERITAGE ========== */}
//       <section className="heritage-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-tag">📜 Heritage</span>
//             <h2 className="section-title">The <span className="highlight">PanchalVeda</span> Story</h2>
//             <div className="section-underline"></div>
//             <p className="section-subtitle">
//               A journey through time, tradition, and the unmistakable aroma of heeng
//             </p>
//           </div>

//           <div className="heritage-grid">
//             <div className="heritage-content">
//               <div className="heritage-text">
//                 <h3>Farrukhabadi Namkeen: A Flavorful Legacy</h3>
//                 <p>
//                   Originating from Farrukhabad, Uttar Pradesh, our namkeen carries a legacy shaped by 
//                   bold spices and the unmistakable aroma of <strong>heeng</strong> (asafoetida). 
//                   For generations, this aroma has defined celebrations, gatherings, and everyday meals.
//                 </p>
//                 <p>
//                   The tradition of making Farrukhabadi Namkeen dates back centuries and is deeply 
//                   connected to the culture of Farrukhabad. Located on important trade routes, 
//                   the region gained access to premium quality asafoetida from Afghanistan and Iran, 
//                   creating the perfect foundation for this culinary masterpiece.
//                 </p>
//                 <p>
//                   <strong>Heeng</strong> is not just a spice in Farrukhabad – it is an identity. 
//                   The bold aroma and crispy texture make it unique from other namkeen varieties 
//                   across India. Generations of craftsmanship and traditional recipes have shaped 
//                   this flavorful legacy that we proudly continue today.
//                 </p>
//                 <div className="heritage-tags">
//                   <span className="heritage-tag">🌿 Authentic Heeng</span>
//                   <span className="heritage-tag">🏛️ 100+ Years Heritage</span>
//                   <span className="heritage-tag">👨‍🍳 Traditional Recipes</span>
//                 </div>
//                 <button 
//                   className="btn-heritage"
//                   onClick={(e) => {
//                     createRipple(e);
//                     setPopup("history");
//                   }}
//                 >
//                   Read Full Story →
//                 </button>
//               </div>
//             </div>
//             <div className="heritage-image-wrapper">
//               <img src={pic7} alt="Farrukhabadi Namkeen Heritage" />
//               <div className="floating-card">
//                 <span className="floating-icon">🏺</span>
//                 <div>
//                   <strong>Since 2018</strong>
//                   <p>Preserving Heritage</p>
//                 </div>
//               </div>
//               <div className="floating-card card-2">
//                 <span className="floating-icon">🌿</span>
//                 <div>
//                   <strong>100% Pure</strong>
//                   <p>Heeng Infused</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== MISSION & VISION (Single Section) ========== */}
//       <section className="mission-vision-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-tag">🎯 Purpose</span>
//             <h2 className="section-title">Our <span className="highlight">Mission</span> & <span className="highlight">Vision</span></h2>
//             <div className="section-underline"></div>
//             <p className="section-subtitle">
//               Driving us forward with purpose and passion
//             </p>
//           </div>

//           <div className="mission-vision-grid">
//             {/* Mission Card */}
//             <div className="mv-card mission-card-full">
//               <div className="mv-icon">🚀</div>
//               <h3>Our Mission</h3>
//               <p className="mv-description">
//                 Deliver authentic Indian snacks with uncompromised quality, preserving 
//                 traditional flavors while maintaining modern standards.
//               </p>
//               <ul className="mv-list">
//                 <li>✓ Preserve authentic Indian snacking traditions</li>
//                 <li>✓ Maintain modern quality standards</li>
//                 <li>✓ Source the finest ingredients</li>
//                 <li>✓ Create memorable taste experiences</li>
//               </ul>
//               <button 
//                 className="mv-btn"
//                 onClick={(e) => {
//                   createRipple(e);
//                   setPopup("mission");
//                 }}
//               >
//                 Learn More →
//               </button>
//             </div>

//             {/* Vision Card */}
//             <div className="mv-card vision-card-full">
//               <div className="mv-icon">🌟</div>
//               <h3>Our Vision</h3>
//               <p className="mv-description">
//                 Transform Panchalveda Namkeen into a globally trusted Indian snack brand, 
//                 bringing the authentic taste of Bharat to every corner of the world.
//               </p>
//               <ul className="mv-list">
//                 <li>✓ Become a global Indian snack brand</li>
//                 <li>✓ Share authentic flavors worldwide</li>
//                 <li>✓ Innovate while preserving tradition</li>
//                 <li>✓ Build lasting customer trust</li>
//               </ul>
//               <button 
//                 className="mv-btn"
//                 onClick={(e) => {
//                   createRipple(e);
//                   setPopup("vision");
//                 }}
//               >
//                 Learn More →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== ACHIEVEMENTS (Blog Style with Images) ========== */}
//       <section className="achievements-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-tag">🏆 Milestones</span>
//             <h2 className="section-title">Our <span className="highlight">Achievements</span></h2>
//             <div className="section-underline"></div>
//             <p className="section-subtitle">
//               Celebrating the journey of excellence and growth
//             </p>
//           </div>

//           <div className="achievements-grid">
//             {achievements.map((achievement, index) => (
//               <div 
//                 key={achievement.id} 
//                 className={`achievement-card ${index % 2 === 1 ? 'reverse' : ''}`}
//               >
//                 <div className="achievement-image-wrapper">
//                   <img src={achievement.image} alt={achievement.title} />
//                   <div className="achievement-year">{achievement.year}</div>
//                 </div>
//                 <div className="achievement-content">
//                   <h3>{achievement.title}</h3>
//                   <p className="achievement-desc">{achievement.description}</p>
//                   <p className="achievement-detail">{achievement.detail}</p>
//                   <button 
//                     className="achievement-btn"
//                     onClick={(e) => {
//                       createRipple(e);
//                       setPopup("achievements");
//                     }}
//                   >
//                     Read Full Story →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========== CORE VALUES (Clickable) ========== */}
//       <section className="values-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-tag">💎 Values</span>
//             <h2 className="section-title">Our <span className="highlight">Core Values</span></h2>
//             <div className="section-underline"></div>
//             <p className="section-subtitle">
//               The principles that guide everything we do
//             </p>
//           </div>

//           <div className="values-grid-modern">
//             {coreValues.map((value) => (
//               <div 
//                 key={value.id}
//                 className="value-card-modern"
//                 onClick={() => setSelectedValue(value)}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') setSelectedValue(value);
//                 }}
//               >
//                 <div className="value-icon">{value.icon}</div>
//                 <h3>{value.title}</h3>
//                 <p>{value.description}</p>
//                 <span className="value-cta">Click to learn more →</span>
//                 <div className="value-glow"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Value Popup */}
//         {selectedValue && (
//           <div className="value-popup-overlay" onClick={() => setSelectedValue(null)}>
//             <div className="value-popup-modal" onClick={(e) => e.stopPropagation()}>
//               <button 
//                 className="value-popup-close" 
//                 onClick={() => setSelectedValue(null)}
//               >
//                 ✕
//               </button>
//               <div className="value-popup-content">
//                 <div className="value-popup-header">
//                   <span className="value-popup-icon">{selectedValue.icon}</span>
//                   <h2>{selectedValue.title}</h2>
//                 </div>
//                 <div className="value-popup-body">
//                   {selectedValue.longDesc.map((text, idx) => (
//                     <p key={idx}>{text}</p>
//                   ))}
//                 </div>
//                 <button 
//                   className="value-popup-btn"
//                   onClick={() => setSelectedValue(null)}
//                 >
//                   Got it! 🙌
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* ========== FULL SCREEN POPUPS ========== */}
//       {popup && (
//         <div className="premium-blog-popup">
//           <button className="premium-close-btn" onClick={closePopup}>✕</button>
          
//           <div className="premium-blog-content">
//             <div className="language-toggle-wrapper">
//               <button className="language-toggle-btn" onClick={togglePopupLanguage}>
//                 {popupLanguage === "english" ? "हिंदी" : "English"}
//               </button>
//             </div>

//             {/* Mission Popup */}
//             {popup === "mission" && (
//               <>
//                 <h1>{popupLanguage === "english" ? "Our Mission" : "हमारा मिशन"}</h1>
//                 {popupLanguage === "english" ? (
//                   <>
//                     <p>At Panchalveda Namkeen, our mission is to preserve authentic Indian snacking traditions while maintaining modern quality standards.</p>
//                     <p>We believe taste is not just flavor — it is emotion, memory, and culture. Every product we create carries the essence of Bharat.</p>
//                     <p>We are committed to using only the finest ingredients, sourced directly from local farmers and spice merchants who share our passion for quality.</p>
//                     <p>Our mission extends beyond business – we aim to create a legacy of authentic taste that future generations will cherish.</p>
//                   </>
//                 ) : (
//                   <>
//                     <p>पंचालवेडा नमकीन का मिशन भारतीय पारंपरिक स्नैकिंग परंपराओं को संरक्षित करना है, साथ ही आधुनिक गुणवत्ता मानकों को बनाए रखना है।</p>
//                     <p>हमारा मानना है कि स्वाद केवल फ्लेवर नहीं है – यह भावना, यादें और संस्कृति है। हमारा हर उत्पाद भारत की आत्मा को समेटे हुए है।</p>
//                     <p>हम केवल बेहतरीन सामग्री का उपयोग करने के लिए प्रतिबद्ध हैं, जो सीधे स्थानीय किसानों और मसाला व्यापारियों से प्राप्त की जाती है।</p>
//                     <p>हमारा मिशन व्यवसाय से परे है – हम एक ऐसी विरासत बनाना चाहते हैं जिसे आने वाली पीढ़ियाँ संजो कर रखेंगी।</p>
//                   </>
//                 )}
//               </>
//             )}

//             {/* Vision Popup */}
//             {popup === "vision" && (
//               <>
//                 <h1>{popupLanguage === "english" ? "Our Vision" : "हमारा विज़न"}</h1>
//                 {popupLanguage === "english" ? (
//                   <>
//                     <p>Our vision is to transform Panchalveda Namkeen into a globally trusted Indian snack brand.</p>
//                     <p>We envision a world where authentic Indian flavors are celebrated on every continent, connecting people through the universal language of taste.</p>
//                     <p>Innovation, consistency, and customer trust remain the foundation of our journey. We strive to constantly improve while honoring our roots.</p>
//                     <p>We aim to create a brand that represents the rich culinary heritage of India on the global stage.</p>
//                   </>
//                 ) : (
//                   <>
//                     <p>हमारा विज़न पंचालवेडा नमकीन को एक वैश्विक स्तर पर विश्वसनीय भारतीय स्नैक ब्रांड के रूप में स्थापित करना है।</p>
//                     <p>हम एक ऐसी दुनिया की कल्पना करते हैं जहाँ भारतीय स्वादों को हर महाद्वीप पर मनाया जाता है, जो लोगों को स्वाद की सार्वभौमिक भाषा के माध्यम से जोड़ता है।</p>
//                     <p>नवाचार, निरंतरता और ग्राहकों का विश्वास हमारी यात्रा की नींव हैं। हम अपनी जड़ों का सम्मान करते हुए लगातार सुधार करने का प्रयास करते हैं।</p>
//                     <p>हम एक ऐसा ब्रांड बनाना चाहते हैं जो भारत की समृद्ध पाक विरासत को वैश्विक मंच पर प्रस्तुत करे।</p>
//                   </>
//                 )}
//               </>
//             )}

//             {/* History Popup */}
//             {popup === "history" && (
//               <>
//                 <h1>{popupLanguage === "english" ? "PanchalVeda Heritage" : "पंचालवेडा विरासत"}</h1>
//                 {popupLanguage === "english" ? (
//                   <>
//                     <h2>The Legacy of Farrukhabadi Namkeen</h2>
//                     <p>Farrukhabadi Namkeen is known for its powerful flavor profile and aromatic use of authentic heeng. The bold aroma and crispy texture make it unique from other namkeen varieties across India.</p>
//                     <p>Generations of craftsmanship and traditional recipes have shaped this flavorful legacy. The tradition dates back centuries and is deeply connected to the culture of Farrukhabad.</p>
                    
//                     <h2>Heeng: The Star Ingredient</h2>
//                     <p>While heeng is commonly used in Indian tempering, Farrukhabadi Namkeen makes it the centerpiece of every bite. Carefully selected premium heeng perfectly complements the crunchy texture, creating a bold flavor that is difficult to match.</p>
                    
//                     <h2>Popular Varieties</h2>
//                     <ul>
//                       <li><strong>Heeng Sev:</strong> Thin, crispy gram-flour strands seasoned generously with authentic heeng.</li>
//                       <li><strong>Heeng Bhujia:</strong> Slightly thicker than sev with a stronger, richer flavor.</li>
//                       <li><strong>Heeng Kachori:</strong> Crispy layered kachoris filled with spicy heeng stuffing.</li>
//                       <li><strong>Chana Dal Namkeen:</strong> Crunchy roasted chana dal seasoned with salt, pepper, and a touch of heeng.</li>
//                     </ul>
                    
//                     <h2>Conclusion</h2>
//                     <p>Farrukhabadi Namkeen is more than just a snack—it is a culinary heritage proudly representing the traditions of Farrukhabad. As its popularity continues to grow across India and around the world, every bite delivers the rich aroma of heeng and the timeless taste of history.</p>
//                   </>
//                 ) : (
//                   <>
//                     <h2>फर्रुखाबादी नमकीन की विरासत</h2>
//                     <p>फर्रुखाबादी नमकीन अपने शक्तिशाली स्वाद और असली हींग की मनमोहक सुगंध के लिए प्रसिद्ध है। इसका साहसिक स्वाद और कुरकुरा बनावट इसे भारत के अन्य नमकीनों से अलग पहचान देता है।</p>
//                     <p>पीढ़ियों से चली आ रही शिल्पकला और पारंपरिक रेसिपी ने इसे स्वादिष्ट विरासत प्रदान की है। यह परंपरा सदियों पुरानी है और फर्रुखाबाद की संस्कृति से गहराई से जुड़ी हुई है।</p>
                    
//                     <h2>हींग: मुख्य नायिका</h2>
//                     <p>भारतीय रसोई में हींग का उपयोग सामान्यतः तड़के में किया जाता है, लेकिन फर्रुखाबादी नमकीन में यही इसका सबसे प्रमुख स्वाद बन जाती है। उच्च गुणवत्ता वाली हींग की सुगंध और नमकीन की कुरकुराहट मिलकर ऐसा स्वाद पैदा करती है जो कहीं और नहीं मिलता।</p>
                    
//                     <h2>लोकप्रिय किस्में</h2>
//                     <ul>
//                       <li><strong>हींग सेव:</strong> पतले, कुरकुरे बेसन के तार जिनमें भरपूर मात्रा में हींग का स्वाद होता है।</li>
//                       <li><strong>हींग भुजिया:</strong> सेव से थोड़ी मोटी और अधिक तीखे स्वाद वाली।</li>
//                       <li><strong>हींग कचौड़ी:</strong> कुरकुरी परतों वाली मसालेदार हींग से भरी कचौड़ी।</li>
//                       <li><strong>चना दाल नमकीन:</strong> कुरकुरी भुनी चना दाल जिसमें नमक, काली मिर्च और हल्की हींग का स्वाद होता है।</li>
//                     </ul>
                    
//                     <h2>निष्कर्ष</h2>
//                     <p>फर्रुखाबादी नमकीन केवल एक नमकीन नहीं, बल्कि एक समृद्ध पाक-विरासत है। जैसे-जैसे इसकी लोकप्रियता भारत और विदेशों में बढ़ रही है, यह फर्रुखाबाद की पाक-गौरव का प्रतीक बनी हुई है और हर कौर में इतिहास तथा हींग की अनोखी महक का अनुभव कराती है।</p>
//                   </>
//                 )}
//               </>
//             )}

//             {/* Achievements Popup */}
//             {popup === "achievements" && (
//               <>
//                 <h1>{popupLanguage === "english" ? "Our Achievements" : "हमारी उपलब्धियाँ"}</h1>
//                 {popupLanguage === "english" ? (
//                   <>
//                     <p>Since our founding in 2018, PanchalVeda Namkeen has achieved remarkable milestones that reflect our commitment to quality and authenticity.</p>
//                     <p>Starting from a small kitchen in Farrukhabad, we've grown into a trusted brand serving thousands of families across India. Our journey is a testament to the power of passion, dedication, and unwavering commitment to quality.</p>
//                     <p>We've been recognized for our efforts to preserve traditional Indian snacking heritage, and we continue to innovate while staying true to our roots.</p>
//                     <p>Our achievements are not just numbers – they represent the trust and love of thousands of families who enjoy our products every day.</p>
//                   </>
//                 ) : (
//                   <>
//                     <p>2018 में अपनी स्थापना के बाद से, पंचालवेडा नमकीन ने उल्लेखनीय उपलब्धियाँ हासिल की हैं जो गुणवत्ता और प्रामाणिकता के प्रति हमारी प्रतिबद्धता को दर्शाती हैं।</p>
//                     <p>फर्रुखाबाद में एक छोटी रसोई से शुरू करके, हम भारत भर में हजारों परिवारों की सेवा करने वाले एक विश्वसनीय ब्रांड के रूप में विकसित हुए हैं। हमारी यात्रा जुनून, समर्पण और गुणवत्ता के प्रति अटूट प्रतिबद्धता की शक्ति का प्रमाण है।</p>
//                     <p>हमें पारंपरिक भारतीय स्नैकिंग विरासत को संरक्षित करने के प्रयासों के लिए पहचाना गया है, और हम अपनी जड़ों से जुड़े रहते हुए नवाचार जारी रखते हैं।</p>
//                     <p>हमारी उपलब्धियाँ केवल संख्याएँ नहीं हैं – वे हजारों परिवारों के विश्वास और प्यार का प्रतिनिधित्व करती हैं जो हर दिन हमारे उत्पादों का आनंद लेते हैं।</p>
//                   </>
//                 )}
//               </>
//             )}

//             <div className="popup-bottom">
//               <button className="back-btn" onClick={closePopup}>← Back</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import "./About.css";
import pic7 from "./assets/pic7.jpeg";
import sembeej from './assets/SemBeej.png';
import paneerbhujiya from './assets/PaneerBhujiya.png';
import gadbad from './assets/Gadbad.png';
import pic1 from './assets/pic1.jpeg';
import pic2 from './assets/pic2.jpeg';
import pic3 from './assets/pic3.jpeg';
import pic4 from './assets/pic4.jpeg';
import pic5 from './assets/pic5.jpeg';
import pic6 from './assets/pic6.jpeg';

export default function About() {
  const [popup, setPopup] = useState(null);
  const [popupLanguage, setPopupLanguage] = useState("hindi");
  const [selectedValue, setSelectedValue] = useState(null);
  const [activeStory, setActiveStory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

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

  const closePopup = () => {
    setPopup(null);
    setFormSubmitted(false);
    setFormError("");
    setFormData({
      name: "",
      phone: "",
      email: "",
      comment: ""
    });
  };
  
  const togglePopupLanguage = () => {
    setPopupLanguage((prev) => prev === "english" ? "hindi" : "english");
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

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFormError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim()) {
      setFormError("Please enter your name");
      return;
    }
    if (!formData.phone.trim()) {
      setFormError("Please enter your phone number");
      return;
    }
    if (!formData.phone.match(/^[0-9]{10}$/)) {
      setFormError("Please enter a valid 10-digit phone number");
      return;
    }
    if (!formData.email.trim()) {
      setFormError("Please enter your email");
      return;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFormError("Please enter a valid email address");
      return;
    }
    if (!formData.comment.trim()) {
      setFormError("Please write your comment");
      return;
    }

    // Prepare WhatsApp message
    const message = `📝 *New Comment from PanchalVeda Blog*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `💬 *Comment:* ${formData.comment}\n\n` +
      `📖 *Blog:* ${popupLanguage === "english" ? 
        (popup === "story-panchali" ? "Draupadi - The Princess of Panchala" :
         popup === "story-durvasa" ? "Durvasa Rishi - The Powerful Ascetic" :
         popup === "story-sankisa" ? "Sankisa - The Place of Buddha's Descent" :
         popup === "story-army" ? "Army Cantonment - The Legacy of Valour" :
         popup === "story-neemkaroli" ? "Neem Karoli Baba - The Miracle Saint" :
         popup === "story-shringi" ? "Shringi Rishi - The Sage of Divine Power" :
         "PanchalVeda Blog") : 
        (popup === "story-panchali" ? "द्रौपदी - पांचाल की राजकुमारी" :
         popup === "story-durvasa" ? "दुर्वासा ऋषि - शक्तिशाली तपस्वी" :
         popup === "story-sankisa" ? "संकिसा - बुद्ध के अवतरण का पवित्र स्थल" :
         popup === "story-army" ? "सेना छावनी - वीरता की विरासत" :
         popup === "story-neemkaroli" ? "नीम करोली बाबा - चमत्कारी संत" :
         popup === "story-shringi" ? "शृंगी ऋषि - दिव्य शक्ति के ऋषि" :
         "पंचालवेडा ब्लॉग")}\n\n` +
      `🔗 *Sent from PanchalVeda About Page*`;

    // Encode for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918004779751?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  // Core Values Data
  const coreValues = [
    {
      id: "quality",
      icon: "✅",
      title: "Quality First",
      description: "We never compromise on ingredients. Every batch is crafted with the finest, hand-selected spices and premium raw materials.",
      longDesc: [
        "Our commitment to quality begins at the source. We personally visit farms and spice markets to select only the finest ingredients.",
        "Every batch undergoes rigorous quality testing to ensure consistency, purity, and the authentic taste that our customers have come to love.",
        "We believe that great taste starts with great ingredients – no artificial flavors, no preservatives, just pure, natural goodness.",
        "Our quality standards are maintained through every step – from sourcing to production to packaging."
      ]
    },
    {
      id: "trust",
      icon: "🤝",
      title: "Customer Trust",
      description: "Trust built with consistency, transparency, and years of delivering authentic flavors that never disappoint.",
      longDesc: [
        "For over 5 years, we've been building trust with our customers through consistent quality and authentic taste.",
        "We believe in complete transparency – from our ingredients to our processes, everything is open and honest.",
        "Our customers are our family, and their satisfaction is our greatest reward.",
        "We've earned the trust of thousands of families across India who rely on us for their daily snacking needs."
      ]
    },
    {
      id: "authentic",
      icon: "🌿",
      title: "Authentic Ingredients",
      description: "Pure spices, traditional recipes, and the unmistakable aroma of heeng that defines our heritage.",
      longDesc: [
        "Authenticity is at the heart of everything we do. We use traditional recipes that have been perfected over generations.",
        "Our heeng is sourced from premium suppliers in Afghanistan and Iran, ensuring the highest quality and most authentic aroma.",
        "We use only pure, natural spices – no adulteration, no shortcuts, just the real taste of Bharat.",
        "Every product carries the authentic flavor that has made Farrukhabadi namkeen famous across India."
      ]
    },
    {
      id: "passion",
      icon: "❤️",
      title: "Passion for Taste",
      description: "Made with emotion, pride, and an unwavering dedication to preserving India's rich culinary heritage.",
      longDesc: [
        "Our passion for taste drives everything we do. We're not just making namkeen – we're preserving a culinary legacy.",
        "Every batch is made with love and dedication, ensuring that each bite carries the warmth of tradition.",
        "We take pride in our craft, constantly innovating while staying true to our roots.",
        "Our passion is reflected in the smiles of our customers who enjoy our products with their families."
      ]
    }
  ];

  // Achievements Data
  const achievements = [
    {
      id: 1,
      year: "2018",
      title: "The Beginning",
      description: "PanchalVeda Namkeen was founded with a vision to bring authentic Farrukhabadi flavors to every home.",
      image: pic1,
      detail: "What started as a small family kitchen in Farrukhabad has grown into a trusted brand, loved by thousands across India. Our journey began with a simple mission – to preserve the authentic taste of Bharat and share it with the world."
    },
    {
      id: 2,
      year: "2020",
      title: "Pan-India Expansion",
      description: "Expanded operations across multiple states, bringing authentic flavors to customers everywhere.",
      image: pic2,
      detail: "Despite global challenges, we expanded our reach across India. Our products became available in major cities including Mumbai, Delhi, Kolkata, Chennai, and Bangalore, making authentic Farrukhabadi namkeen accessible to families across the nation."
    },
    {
      id: 3,
      year: "2022",
      title: "10,000+ Happy Families",
      description: "Achieved the milestone of serving over 10,000 satisfied families across India and abroad.",
      image: pic3,
      detail: "This milestone is a testament to the trust our customers place in us. Every family that chooses PanchalVeda becomes a part of our extended family. We're proud to be a part of countless celebrations, tea-time conversations, and cherished memories."
    },
    {
      id: 4,
      year: "2024",
      title: "Heritage Recognition",
      description: "Recognized as a preserver of traditional Indian snacking heritage and culinary excellence.",
      image: pic4,
      detail: "Our commitment to preserving traditional recipes and authentic flavors has been recognized by culinary experts and heritage food enthusiasts. We continue to honor our roots while embracing innovation to serve the evolving tastes of our customers."
    }
  ];

  // Story Data - Complete with Full Content
  const stories = [
    {
      id: "story-panchali",
      icon: "👑",
      title: "Draupadi — The Princess of Panchala",
      badge: "Mythological",
      color: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
      description: "The legendary queen whose story is woven into the very fabric of the Panchala region...",
      image: pic7,
      english: {
        title: "Draupadi — The Princess of Panchala",
        content: [
          "Draupadi, also known as Panchali, is one of the most iconic and powerful women in Indian mythology. She was the daughter of King Drupada of Panchala, a kingdom that encompassed the region now known as Farrukhabad and its surrounding areas.",
          "The name 'Panchali' itself means 'one from the land of Panchala.' This connection ties the sacred land of Farrukhabad to one of the most significant figures in the Mahabharata. Draupadi's story is a tale of strength, resilience, dignity, and unwavering faith in righteousness.",
          "King Drupada performed a powerful yajna (sacrificial ritual) to be blessed with a child who would avenge his humiliation at the hands of Dronacharya. From the sacred fire emerged Draupadi — radiant, fierce, and destined for greatness. Her birth was accompanied by a divine prophecy that she would play a pivotal role in the events of the Kurukshetra war.",
          "Draupadi's life took an extraordinary turn when she became the wife of all five Pandava brothers. Her marriage was a divine arrangement, a testament to her exceptional character and the unique destiny she carried. Despite the challenges of being married to five husbands, she managed her household with grace and fairness, becoming the heart of the Pandava family.",
          "One of the most well-known episodes in Indian mythology is Draupadi's disrobing in the royal court of Hastinapur. When Duryodhana and Dushasana attempted to humiliate her, Draupadi's prayers to Lord Krishna saved her honor. Her unwavering faith and dignity in the face of complete humiliation became a symbol of resistance against injustice.",
          "Throughout the Mahabharata, Draupadi emerges as a woman of extraordinary intelligence, courage, and moral clarity. She was not merely a witness to events — she was an active participant who shaped the course of history. Her voice was heard in the royal court, and her questions about dharma challenged even the wisest elders.",
          "As a queen, she ruled with wisdom and compassion. As a wife, she was loyal and devoted. As a woman, she stood tall in the face of adversity. Draupadi's story continues to inspire millions of women around the world.",
          "Farrukhabad, situated in the ancient Panchala region, carries the memory of this legendary princess. The land where Draupadi was born and raised holds a special place in the heart of every devotee. When we walk through the streets of Farrukhabad, we are walking through the very land that was once the kingdom of Panchala — the land of Draupadi."
        ]
      },
      hindi: {
        title: "द्रौपदी — पांचाल की राजकुमारी",
        content: [
          "द्रौपदी, जिन्हें पांचाली के नाम से भी जाना जाता है, भारतीय पौराणिक कथाओं की सबसे प्रतिष्ठित और शक्तिशाली महिलाओं में से एक हैं। वह पांचाल के राजा द्रुपद की पुत्री थीं, जो वर्तमान फर्रुखाबाद और उसके आसपास के क्षेत्र में स्थित था।",
          "'पांचाली' नाम का अर्थ है 'पांचाल की भूमि से आने वाली'। यह संबंध फर्रुखाबाद की पवित्र भूमि को महाभारत की सबसे महत्वपूर्ण पात्रों में से एक से जोड़ता है। द्रौपदी की कहानी शक्ति, लचीलापन, गरिमा और धर्म में अटूट विश्वास की कहानी है।",
          "राजा द्रुपद ने द्रोणाचार्य के हाथों अपनी हार का बदला लेने के लिए एक शक्तिशाली यज्ञ किया। यज्ञ की अग्नि से एक दिव्य कन्या प्रकट हुई — द्रौपदी, जो अपनी कांति, शक्ति और अद्वितीय प्रतिभा के लिए प्रसिद्ध थी। उनका जन्म एक दिव्य भविष्यवाणी के साथ हुआ था कि वे कुरुक्षेत्र युद्ध की घटनाओं में महत्वपूर्ण भूमिका निभाएंगी।",
          "द्रौपदी का जीवन एक असाधारण मोड़ पर आया जब वह पांचों पांडव भाइयों की पत्नी बनीं। उनका विवाह एक दिव्य व्यवस्था थी, जो उनके असाधारण चरित्र और अद्वितीय नियति का प्रमाण था। पांच पतियों की पत्नी होने के बावजूद, उन्होंने अपने घर को शांति और न्याय के साथ चलाया, और पांडव परिवार के केंद्र बिंदु बनीं।",
          "द्रौपदी का हस्तिनापुर के दरबार में चीरहरण भारतीय पौराणिक कथाओं की सबसे प्रसिद्ध घटनाओं में से एक है। जब दुर्योधन और दुःशासन ने उन्हें अपमानित करने का प्रयास किया, तो द्रौपदी की भगवान कृष्ण में आस्था ने उनकी रक्षा की। अपमान के सामने उनकी अटूट आस्था और गरिमा अन्याय के खिलाफ प्रतिरोध का प्रतीक बन गई।",
          "महाभारत में द्रौपदी असाधारण बुद्धिमत्ता, साहस और नैतिक स्पष्टता वाली महिला के रूप में उभरीं। वह केवल घटनाओं की गवाह नहीं थीं — वह एक सक्रिय भागीदार थीं जिन्होंने इतिहास की दिशा को आकार दिया। राजसभा में उनकी आवाज सुनी गई, और धर्म के बारे में उनके प्रश्नों ने सबसे बुद्धिमान बुजुर्गों को भी चुनौती दी।",
          "रानी के रूप में, उन्होंने बुद्धिमानी और करुणा से शासन किया। पत्नी के रूप में, वह वफादार और समर्पित थीं। द्रौपदी की कहानी दुनिया भर की महिलाओं को प्रेरित करती रहती है।",
          "फर्रुखाबाद, प्राचीन पांचाल क्षेत्र में स्थित, इस पौराणिक राजकुमारी की स्मृति को संजोए हुए है। जिस भूमि पर द्रौपदी का जन्म और पालन-पोषण हुआ, वह हर भक्त के दिल में एक विशेष स्थान रखती है।"
        ]
      }
    },
    {
      id: "story-durvasa",
      icon: "🧘",
      title: "Durvasa Rishi — The Powerful Ascetic",
      badge: "Ancient Sage",
      color: "linear-gradient(135deg, #F59E0B, #D97706)",
      description: "The great sage who performed intense tapasya on the banks of the Ganga at Panchal Ghat...",
      image: pic7,
      english: {
        title: "Durvasa Rishi — The Powerful Ascetic",
        content: [
          "Maharishi Durvasa is one of the most fascinating and formidable figures in Indian spiritual tradition. Known for his intense tapasya (penance), extraordinary spiritual powers, and a temperament that could bless or curse with equal intensity, Durvasa Rishi remains a symbol of the transformative power of disciplined spiritual practice.",
          "According to local religious tradition, Maharishi Durvasa performed intense penance and spiritual practices right here on the banks of the Ganga at Panchal Ghat in Farrukhabad. This sacred location became his tapasthali — the place where he dedicated himself to the highest forms of spiritual discipline.",
          "The serene banks of the Ganga, with its constant flow and spiritual energy, provided the ideal environment for a sage seeking ultimate truth. It is here that Durvasa Rishi is believed to have sat in deep meditation, his mind absorbed in the infinite, his heart open to the divine.",
          "Durvasa Rishi is often remembered for his quick temper and powerful curses. However, a deeper understanding reveals a more complex personality. His anger was not born of ego but of a deep commitment to truth and dharma. He blessed those who were righteous and punished those who strayed from the path of virtue.",
          "His blessings were equally powerful — they could transform destinies and grant immense spiritual power. His entire being was dedicated to the preservation of dharma, and his actions, though sometimes intense, always served a higher purpose.",
          "The Puranas and the Mahabharata contain many stories of Durvasa Rishi's encounters with kings, gods, and devotees. One of the most famous is his encounter with King Ambarisha, where his anger was pacified by the king's devotion to Lord Vishnu. Another story speaks of his interaction with Lord Indra, where he taught the king of the gods a lesson about pride and humility.",
          "These stories are not just tales — they are profound lessons about the importance of humility, devotion, and the power of spiritual practice. They remind us that true strength lies not in external power but in the mastery of the self.",
          "Durvasa Rishi's life is a testament to the transformative power of tapasya. Through intense discipline, control over the senses, and unwavering focus, he attained spiritual powers that were beyond ordinary comprehension. His life teaches us that spiritual growth requires dedication, patience, and an unwavering commitment to the truth.",
          "Today, as we stand at Panchal Ghat and look at the gentle flow of the Ganga, we are reminded of the great sage who once sat here in deep meditation. His spirit continues to inspire spiritual seekers from all over the world."
        ]
      },
      hindi: {
        title: "दुर्वासा ऋषि — शक्तिशाली तपस्वी",
        content: [
          "महर्षि दुर्वासा भारतीय आध्यात्मिक परंपरा के सबसे आकर्षक और दुर्जेय व्यक्तियों में से एक हैं। अपनी तीव्र तपस्या, असाधारण आध्यात्मिक शक्तियों और ऐसे स्वभाव के लिए जो समान तीव्रता से आशीर्वाद और शाप दोनों दे सकता था, दुर्वासा ऋषि अनुशासित आध्यात्मिक अभ्यास की परिवर्तनकारी शक्ति का प्रतीक बने हुए हैं।",
          "स्थानीय धार्मिक परंपरा के अनुसार, महर्षि दुर्वासा ने फर्रुखाबाद के पंचाल घाट पर गंगा के तट पर तीव्र तपस्या और आध्यात्मिक साधना की थी। यह पवित्र स्थान उनकी तपस्थली बना — वह स्थान जहाँ उन्होंने स्वयं को आध्यात्मिक अनुशासन के उच्चतम रूपों के लिए समर्पित किया।",
          "गंगा के शांत तट, अपने निरंतर प्रवाह और आध्यात्मिक ऊर्जा के साथ, एक ऋषि के लिए आदर्श वातावरण प्रदान करते थे। यहाँ दुर्वासा ऋषि गहन ध्यान में बैठे थे, उनका मन अनंत में लीन था, उनका हृदय दिव्य के लिए खुला था।",
          "दुर्वासा ऋषि को अक्सर उनके तीव्र स्वभाव और शक्तिशाली शापों के लिए याद किया जाता है। लेकिन गहन दृष्टि से देखें तो उनका व्यक्तित्व अधिक जटिल था। उनका क्रोध अहंकार से नहीं, बल्कि सत्य और धर्म के प्रति गहरी प्रतिबद्धता से पैदा हुआ था। उन्होंने धार्मिक लोगों को आशीर्वाद दिया और पुण्य के मार्ग से भटकने वालों को दंडित किया।",
          "उनके आशीर्वाद भी समान रूप से शक्तिशाली थे — वे नियति बदल सकते थे और असीम आध्यात्मिक शक्ति प्रदान कर सकते थे। उनका पूरा अस्तित्व धर्म के संरक्षण के लिए समर्पित था।",
          "पुराणों और महाभारत में दुर्वासा ऋषि के राजाओं, देवताओं और भक्तों के साथ कई कहानियाँ हैं। सबसे प्रसिद्ध में से एक राजा अम्बरीष के साथ उनकी मुठभेड़ है, जहाँ राजा की भगवान विष्णु में भक्ति ने उनके क्रोध को शांत किया।",
          "ये कहानियाँ केवल कथाएँ नहीं हैं — ये विनम्रता, भक्ति और आध्यात्मिक अभ्यास की शक्ति के महत्व के बारे में गहन सबक हैं।",
          "दुर्वासा ऋषि का जीवन तपस्या की परिवर्तनकारी शक्ति का प्रमाण है। तीव्र अनुशासन, इंद्रियों पर नियंत्रण और अटूट एकाग्रता के माध्यम से, उन्होंने आध्यात्मिक शक्तियाँ प्राप्त कीं जो सामान्य समझ से परे थीं।",
          "आज, जब हम पंचाल घाट पर खड़े होकर गंगा के कोमल प्रवाह को देखते हैं, तो हमें उस महान ऋषि की याद आती है जो कभी यहाँ गहन ध्यान में बैठे थे।"
        ]
      }
    },
    {
      id: "story-sankisa",
      icon: "🕊️",
      title: "Sankisa — The Place of Buddha's Descent",
      badge: "Buddhist Heritage",
      color: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
      description: "The sacred site where Lord Buddha descended from the heavenly realm to Earth...",
      image: pic7,
      english: {
        title: "Sankisa — The Place of Buddha's Descent",
        content: [
          "Sankisa, located about 37 kilometers from Farrukhabad, is one of the eight most important pilgrimage sites in Buddhism. According to Buddhist tradition, this is the place where Gautama Buddha descended from the heavenly realm after teaching the Abhidhamma to his mother, Mahamaya.",
          "The tradition describes a magnificent descent through three celestial stairways—one of gold, one of silver, and one made of jewels. Buddha descended through the central stairway, while Indra and Brahma accompanied him. This extraordinary event is why Sankisa became known as the place of Buddha's descent from the heavenly realm.",
          "The Farrukhabad district administration records Sankisa as an important ancient city of the Panchala region. The Valmiki Ramayana also refers to Sankasya as the capital of Kushadhwaja, King Janaka's younger brother. This connection shows how the site has been significant across different traditions.",
          "During the Mauryan period, Emperor Ashoka erected a pillar at Sankisa. The famous Elephant Capital from this pillar is one of the most recognizable archaeological objects associated with the site. The elephant symbolizes the strength and spread of Buddhism during Ashoka's reign.",
          "Chinese pilgrims Faxian and Xuanzang visited Sankisa centuries ago and recorded it as an important Buddhist pilgrimage centre. Xuanzang referred to the place as Kapitha in his travel records. Their accounts provide valuable historical evidence of Sankisa's importance.",
          "The Archaeological Survey of India has preserved the ancient remains at Sankisa. The site includes ancient mounds, stupa remains, and various Buddhist artifacts that tell the story of centuries of Buddhist presence in the region.",
          "Today, Sankisa is a living pilgrimage destination. Buddhist temples and chaityas established by different countries including Myanmar, China, Sri Lanka, Cambodia, and Japan can be found here. Pilgrims from around the world visit to pay their respects and connect with the legacy of Buddha.",
          "Sankisa represents the beautiful blend of ancient history and living faith. It stands as a testament to India's role in the development and spread of Buddhism across Asia."
        ]
      },
      hindi: {
        title: "संकिसा — बुद्ध के अवतरण का पवित्र स्थल",
        content: [
          "संकिसा, फर्रुखाबाद से लगभग 37 किलोमीटर दूर स्थित, बौद्ध धर्म के आठ सबसे महत्वपूर्ण तीर्थ स्थलों में से एक है। बौद्ध परंपरा के अनुसार, यह वह स्थान है जहाँ गौतम बुद्ध अपनी माता महामाया को अभिधम्म का उपदेश देने के बाद स्वर्गीय लोक से धरती पर उतरे थे।",
          "बौद्ध परंपरा में वर्णन मिलता है कि बुद्ध के लिए तीन सीढ़ियाँ बनाई गई थीं—एक सोने की, एक चाँदी की और एक रत्नों से बनी हुई। मध्य की सीढ़ी से बुद्ध पृथ्वी की ओर उतरे, जबकि इंद्र और ब्रह्मा उनके साथ थे। इसी कारण संकिसा को 'बुद्ध के अवतरण स्थल' के रूप में श्रद्धा से देखा जाता है।",
          "फर्रुखाबाद जिला प्रशासन के अनुसार संकिसा पांचाल क्षेत्र का एक प्राचीन नगर था। वाल्मीकि रामायण में संकस्या को राजा जनक के छोटे भाई कुशध्वज की राजधानी के रूप में वर्णित किया गया है। यह संबंध दिखाता है कि यह स्थल विभिन्न परंपराओं में कितना महत्वपूर्ण रहा है।",
          "मौर्य सम्राट अशोक ने संकिसा में एक स्तंभ स्थापित किया था। इस स्तंभ का प्रसिद्ध हाथी-शीर्ष (Elephant Capital) इस स्थल की सबसे महत्वपूर्ण पुरातात्विक पहचान है। हाथी अशोक के शासनकाल में बौद्ध धर्म की शक्ति और प्रसार का प्रतीक है।",
          "चीनी यात्री फाहियान और ह्वेनसांग ने सदियों पहले संकिसा की यात्रा की थी और इसे एक महत्वपूर्ण बौद्ध तीर्थ केंद्र के रूप में वर्णित किया था। ह्वेनसांग ने अपने यात्रा वृत्तांत में इस स्थान को कपिथा के रूप में संदर्भित किया।",
          "भारतीय पुरातत्व सर्वेक्षण (ASI) ने संकिसा में प्राचीन अवशेषों को संरक्षित किया है। इस स्थल में प्राचीन टीले, स्तूप अवशेष और विभिन्न बौद्ध कलाकृतियाँ शामिल हैं जो क्षेत्र में सदियों की बौद्ध उपस्थिति की कहानी बताती हैं।",
          "आज संकिसा एक जीवित तीर्थ स्थल है। यहाँ म्यांमार, चीन, श्रीलंका, कंबोडिया और जापान जैसे विभिन्न देशों द्वारा बनाए गए बौद्ध मंदिर और चैत्य स्थित हैं। दुनिया भर से तीर्थयात्री अपनी श्रद्धा अर्पित करने और बुद्ध की विरासत से जुड़ने के लिए यहाँ आते हैं।",
          "संकिसा प्राचीन इतिहास और जीवित आस्था के सुंदर मिश्रण का प्रतिनिधित्व करता है। यह पूरे एशिया में बौद्ध धर्म के विकास और प्रसार में भारत की भूमिका के प्रमाण के रूप में खड़ा है।"
        ]
      }
    },
    {
      id: "story-army",
      icon: "⚔️",
      title: "Army Cantonment — The Legacy of Valour",
      badge: "Modern Heritage",
      color: "linear-gradient(135deg, #DC2626, #991B1B)",
      description: "The proud military tradition and strategic importance of Farrukhabad's cantonment...",
      image: pic7,
      english: {
        title: "Army Cantonment — The Legacy of Valour",
        content: [
          "Farrukhabad has a proud military heritage that dates back to the British colonial era when it served as an important garrison town. The Army Cantonment in Farrukhabad played a significant role in the region's history and continues to be an important military installation.",
          "The strategic location of Farrukhabad, situated on the banks of the Ganga, made it an ideal location for military operations. The cantonment area became a center for troop movements, logistics, and military administration during the colonial period.",
          "The cantonment witnessed several historical events, including the 1857 Rebellion (First War of Indian Independence). Local regiments and soldiers played significant roles in various military campaigns, contributing to the rich martial traditions of the region.",
          "The British established the cantonment in the 19th century as part of their defensive strategy in northern India. The location provided easy access to major waterways and trade routes, making it strategically important.",
          "After independence, the cantonment became an integral part of India's defense infrastructure. It has housed various military units, training centers, and support facilities that continue to serve the nation's defense needs with dedication and honor.",
          "The cantonment has also contributed to the local economy and culture. The disciplined military life, varied cultural influences, and the presence of army personnel from different parts of India have created a unique cultural blend in the region.",
          "The soldiers and officers stationed here have participated in numerous national and international operations, bringing pride to the region. Their stories of bravery and sacrifice are an inspiration to the local community.",
          "Today, the Army Cantonment in Farrukhabad remains an active military installation, playing a vital role in national security while maintaining its deep-rooted connection with the local population."
        ]
      },
      hindi: {
        title: "सेना छावनी — वीरता की विरासत",
        content: [
          "फर्रुखाबाद की एक गौरवशाली सैन्य विरासत है जो ब्रिटिश औपनिवेशिक युग से शुरू होती है, जब यह एक महत्वपूर्ण गैरीसन शहर था। फर्रुखाबाद में सेना छावनी ने क्षेत्र के इतिहास में महत्वपूर्ण भूमिका निभाई है और आज भी एक महत्वपूर्ण सैन्य स्थापना बनी हुई है।",
          "गंगा के तट पर स्थित फर्रुखाबाद की सामरिक स्थिति ने इसे सैन्य अभियानों के लिए एक आदर्श स्थान बना दिया। औपनिवेशिक काल के दौरान छावनी क्षेत्र सैन्य अभियानों, रसद और सैन्य प्रशासन का केंद्र बन गया।",
          "1857 के विद्रोह (प्रथम स्वतंत्रता संग्राम) सहित कई ऐतिहासिक घटनाओं ने इस छावनी को देखा। स्थानीय रेजिमेंटों और सैनिकों ने कई सैन्य अभियानों में महत्वपूर्ण भूमिका निभाई, जिससे क्षेत्र की समृद्ध योद्धा परंपराओं में योगदान मिला।",
          "ब्रिटिशों ने 19वीं शताब्दी में उत्तरी भारत में अपनी रक्षा रणनीति के हिस्से के रूप में इस छावनी की स्थापना की थी। इस स्थान ने प्रमुख जलमार्गों और व्यापार मार्गों तक आसान पहुँच प्रदान की, जिससे यह सामरिक दृष्टि से महत्वपूर्ण हो गया।",
          "स्वतंत्रता के बाद, छावनी भारत की रक्षा बुनियादी ढाँचे का एक अभिन्न अंग बन गई। यहाँ विभिन्न सैन्य इकाइयाँ, प्रशिक्षण केंद्र और सहायक सुविधाएँ स्थित हैं जो समर्पण और गौरव के साथ राष्ट्र की रक्षा आवश्यकताओं की सेवा करती हैं।",
          "छावनी ने स्थानीय अर्थव्यवस्था और संस्कृति में भी योगदान दिया है। अनुशासित सैन्य जीवन, विभिन्न सांस्कृतिक प्रभाव और भारत के विभिन्न भागों से आए सैनिकों की उपस्थिति ने क्षेत्र में एक अनोखी सांस्कृतिक विविधता पैदा की है।",
          "यहाँ तैनात सैनिकों और अधिकारियों ने कई राष्ट्रीय और अंतर्राष्ट्रीय अभियानों में भाग लिया है, जिससे क्षेत्र को गौरव मिला है। उनके वीरता और बलिदान की कहानियाँ स्थानीय समुदाय के लिए प्रेरणा हैं।",
          "आज फर्रुखाबाद की सेना छावनी एक सक्रिय सैन्य स्थापना बनी हुई है, जो स्थानीय आबादी के साथ अपने गहरे संबंधों को बनाए रखते हुए राष्ट्रीय सुरक्षा में महत्वपूर्ण भूमिका निभा रही है।"
        ]
      }
    },
    {
      id: "story-neemkaroli",
      icon: "🕉️",
      title: "Neem Karoli Baba — The Miracle Saint",
      badge: "Modern Saint",
      color: "linear-gradient(135deg, #10B981, #059669)",
      description: "The beloved guru who spread love, compassion, and the message of service across the world...",
      image: pic7,
      english: {
        title: "Neem Karoli Baba — The Miracle Saint",
        content: [
          "Neem Karoli Baba, also known as Maharaj-ji, is one of the most beloved spiritual figures of modern times. Though he is widely associated with the state of Rajasthan and the famous Kainchi Dham ashram in Uttarakhand, his spiritual presence and influence have touched the lives of millions across the world.",
          "Neem Karoli Baba's life and teachings are deeply connected to the spiritual traditions of Uttar Pradesh and the Gangetic plains. His philosophy of love, compassion, and selfless service resonates deeply with the traditions that have flourished along the banks of the Ganga for centuries.",
          "Like the ancient sages who meditated at Panchal Ghat, Neem Karoli Baba emphasized the importance of devotion, surrender, and service. His famous words — 'Love everyone, serve everyone, remember God' — capture the essence of the spiritual tradition that has been alive in this region for millennia.",
          "Neem Karoli Baba's teachings are simple yet profound. He taught that love is the highest form of worship and that service to others is service to God. His miracles were not meant to showcase his power but to inspire faith and devotion in his followers.",
          "He was known to say that the path to God is through love and surrender. He emphasized that material possessions and worldly achievements are meaningless without love and compassion for others. His teachings have inspired countless spiritual seekers, including several prominent Western followers who helped spread his message across the world.",
          "Neem Karoli Baba's legacy continues to grow, with ashrams and spiritual centers across India and abroad carrying forward his message. His influence can be seen in the lives of his devotees, who continue to practice his teachings of love, service, and devotion.",
          "His connection to the spiritual traditions of the Gangetic plains reminds us that the wisdom of ancient sages is alive and relevant even in the modern world. The sacred land of Farrukhabad, with its deep spiritual heritage, continues to be a source of inspiration for seekers from all over the world."
        ]
      },
      hindi: {
        title: "नीम करोली बाबा — चमत्कारी संत",
        content: [
          "नीम करोली बाबा, जिन्हें महाराज-जी के नाम से भी जाना जाता है, आधुनिक समय के सबसे प्रिय आध्यात्मिक व्यक्तियों में से एक हैं। हालाँकि वे मुख्यतः राजस्थान और उत्तराखंड के प्रसिद्ध कैंची धाम आश्रम से जुड़े हैं, लेकिन उनकी आध्यात्मिक उपस्थिति और प्रभाव ने दुनिया भर में लाखों लोगों के जीवन को छुआ है।",
          "नीम करोली बाबा का जीवन और शिक्षाएँ उत्तर प्रदेश और गंगा के मैदानों की आध्यात्मिक परंपराओं से गहराई से जुड़ी हुई हैं। प्रेम, करुणा और निस्वार्थ सेवा का उनका दर्शन उन परंपराओं के साथ गहराई से प्रतिध्वनित होता है जो सदियों से गंगा के तट पर फली-फूली हैं।",
          "उन प्राचीन ऋषियों की तरह जिन्होंने पंचाल घाट पर ध्यान किया, नीम करोली बाबा ने भक्ति, समर्पण और सेवा के महत्व पर जोर दिया। उनके प्रसिद्ध शब्द — 'सभी से प्रेम करो, सभी की सेवा करो, भगवान को याद रखो' — उस आध्यात्मिक परंपरा का सार हैं जो सहस्राब्दियों से इस क्षेत्र में जीवित है।",
          "नीम करोली बाबा की शिक्षाएँ सरल लेकिन गहन हैं। उन्होंने सिखाया कि प्रेम पूजा का सर्वोच्च रूप है और दूसरों की सेवा ईश्वर की सेवा है। उनके चमत्कारों का उद्देश्य अपनी शक्ति दिखाना नहीं था, बल्कि अपने अनुयायियों में आस्था और भक्ति जगाना था।",
          "वे कहा करते थे कि ईश्वर का मार्ग प्रेम और समर्पण के माध्यम से है। उन्होंने इस बात पर जोर दिया कि दूसरों के लिए प्रेम और करुणा के बिना भौतिक संपत्ति और सांसारिक उपलब्धियाँ अर्थहीन हैं।",
          "नीम करोली बाबा की विरासत बढ़ती जा रही है, भारत और विदेशों में आश्रम और आध्यात्मिक केंद्र उनके संदेश को आगे बढ़ा रहे हैं। उनका प्रभाव उनके भक्तों के जीवन में देखा जा सकता है।",
          "गंगा के मैदानों की आध्यात्मिक परंपराओं से उनका संबंध हमें याद दिलाता है कि प्राचीन ऋषियों का ज्ञान आधुनिक दुनिया में भी जीवित और प्रासंगिक है।"
        ]
      }
    },
    {
      id: "story-shringi",
      icon: "🔥",
      title: "Shringi Rishi — The Sage of Divine Power",
      badge: "Vedic Sage",
      color: "linear-gradient(135deg, #EF4444, #DC2626)",
      description: "The legendary sage whose intense tapasya and divine powers are remembered in ancient texts...",
      image: pic7,
      english: {
        title: "Shringi Rishi — The Sage of Divine Power",
        content: [
          "Shringi Rishi is a revered figure in Indian mythology, known for his intense tapasya and extraordinary spiritual powers. His story is deeply connected to the ancient traditions of the Gangetic plains and the spiritual heritage of the Panchala region.",
          "According to ancient texts, Shringi Rishi was born with divine powers and possessed the ability to perform miracles. His intense penance and unwavering devotion to the divine made him one of the most respected sages of his time.",
          "The region of Farrukhabad, with its deep spiritual roots and connection to ancient sages, holds a special place in the tradition of Shringi Rishi. The sacred banks of the Ganga have witnessed the meditation and penance of countless sages, including Shringi Rishi.",
          "Shringi Rishi's life exemplifies the power of dedicated spiritual practice. Through years of intense meditation, control over the senses, and unwavering focus on the divine, he attained extraordinary spiritual powers that inspired awe and devotion among his followers.",
          "His story reminds us that true spiritual growth requires patience, discipline, and unwavering dedication. The path of the sage is not easy, but it leads to the highest forms of knowledge and understanding.",
          "Shringi Rishi's legacy continues to inspire spiritual seekers even today. His life is a testament to the power of tapasya and the importance of staying true to one's spiritual path.",
          "The sacred land of Farrukhabad, with its rich heritage of sages and spiritual traditions, carries forward this legacy with pride. As we walk along the banks of the Ganga and visit the sacred sites associated with ancient sages, we are reminded of the profound spiritual wisdom that has been passed down through generations."
        ]
      },
      hindi: {
        title: "शृंगी ऋषि — दिव्य शक्ति के ऋषि",
        content: [
          "शृंगी ऋषि भारतीय पौराणिक कथाओं में एक पूजनीय व्यक्तित्व हैं, जो अपनी तीव्र तपस्या और असाधारण आध्यात्मिक शक्तियों के लिए जाने जाते हैं। उनकी कहानी गंगा के मैदानों की प्राचीन परंपराओं और पांचाल क्षेत्र की आध्यात्मिक विरासत से गहराई से जुड़ी हुई है।",
          "प्राचीन ग्रंथों के अनुसार, शृंगी ऋषि का जन्म दिव्य शक्तियों के साथ हुआ था और उनमें चमत्कार करने की क्षमता थी। उनकी तीव्र तपस्या और दिव्य के प्रति अटूट भक्ति ने उन्हें अपने समय के सबसे सम्मानित ऋषियों में से एक बना दिया।",
          "फर्रुखाबाद का क्षेत्र, अपनी गहरी आध्यात्मिक जड़ों और प्राचीन ऋषियों से संबंध के साथ, शृंगी ऋषि की परंपरा में एक विशेष स्थान रखता है। गंगा के पवित्र तटों ने अनगिनत ऋषियों के ध्यान और तपस्या को देखा है, जिनमें शृंगी ऋषि भी शामिल हैं।",
          "शृंगी ऋषि का जीवन समर्पित आध्यात्मिक अभ्यास की शक्ति का उदाहरण है। वर्षों की तीव्र साधना, इंद्रियों पर नियंत्रण और दिव्य पर अटूट ध्यान के माध्यम से, उन्होंने असाधारण आध्यात्मिक शक्तियाँ प्राप्त कीं जिन्होंने उनके अनुयायियों में विस्मय और भक्ति पैदा की।",
          "उनकी कहानी हमें याद दिलाती है कि सच्ची आध्यात्मिक वृद्धि के लिए धैर्य, अनुशासन और अटूट समर्पण की आवश्यकता होती है। ऋषि का मार्ग आसान नहीं है, लेकिन यह ज्ञान और समझ के उच्चतम रूपों की ओर ले जाता है।",
          "शृंगी ऋषि की विरासत आज भी आध्यात्मिक साधकों को प्रेरित करती है। उनका जीवन तपस्या की शक्ति और अपने आध्यात्मिक मार्ग पर सच्चे रहने के महत्व का प्रमाण है।",
          "फर्रुखाबाद की पवित्र भूमि, अपनी समृद्ध ऋषि परंपराओं के साथ, इस विरासत को गर्व से आगे बढ़ाती है। गंगा के तट पर चलते हुए और प्राचीन ऋषियों से जुड़े पवित्र स्थलों पर जाते हुए, हमें उस गहन आध्यात्मिक ज्ञान की याद आती है जो पीढ़ियों से चला आ रहा है।"
        ]
      }
    }
  ];

  const getStoryContent = (storyId) => {
    return stories.find(s => s.id === storyId);
  };

  return (
    <div className="about-page">

      {/* ========== HERO SECTION ========== */}
      <section className="hero-premium">
        <div className="grain-overlay"></div>
        <div className="hero-content">
          <h1 className="fade-up">About Panchalveda Namkeen</h1>
          <h3 className="fade-up delay-1">Crafted in Farrukhabad. Rooted in Tradition.</h3>
          <p className="fade-up delay-2">Taste of Bharat in Every Bite.</p>
        </div>
      </section>

      {/* ========== PANCHAL HISTORY & HERITAGE ========== */}
      <section className="heritage-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📜 Heritage</span>
            <h2 className="section-title">The <span className="highlight">PanchalVeda</span> Story</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              A journey through time, tradition, and the unmistakable aroma of heeng
            </p>
          </div>

          <div className="heritage-grid">
            <div className="heritage-content">
              <div className="heritage-text">
                <h3>Farrukhabadi Namkeen: A Flavorful Legacy</h3>
                <p>
                  Originating from Farrukhabad, Uttar Pradesh, our namkeen carries a legacy shaped by 
                  bold spices and the unmistakable aroma of <strong>heeng</strong> (asafoetida). 
                  For generations, this aroma has defined celebrations, gatherings, and everyday meals.
                </p>
                <p>
                  The tradition of making Farrukhabadi Namkeen dates back centuries and is deeply 
                  connected to the culture of Farrukhabad. Located on important trade routes, 
                  the region gained access to premium quality asafoetida from Afghanistan and Iran, 
                  creating the perfect foundation for this culinary masterpiece.
                </p>
                <p>
                  <strong>Heeng</strong> is not just a spice in Farrukhabad – it is an identity. 
                  The bold aroma and crispy texture make it unique from other namkeen varieties 
                  across India. Generations of craftsmanship and traditional recipes have shaped 
                  this flavorful legacy that we proudly continue today.
                </p>
                <div className="heritage-tags">
                  <span className="heritage-tag">🌿 Authentic Heeng</span>
                  <span className="heritage-tag">🏛️ 100+ Years Heritage</span>
                  <span className="heritage-tag">👨‍🍳 Traditional Recipes</span>
                </div>
                <button 
                  className="btn-heritage"
                  onClick={(e) => {
                    createRipple(e);
                    setPopup("history");
                  }}
                >
                  Read Full Story →
                </button>
              </div>
            </div>
            <div className="heritage-image-wrapper">
              <img src={pic7} alt="Farrukhabadi Namkeen Heritage" />
              <div className="floating-card card-1">
                <span className="floating-icon">🏺</span>
                <div>
                  <strong>Since 2018</strong>
                  <p>Preserving Heritage</p>
                </div>
              </div>
              <div className="floating-card card-2">
                <span className="floating-icon">🌿</span>
                <div>
                  <strong>100% Pure</strong>
                  <p>Heeng Infused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VISION ========== */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🎯 Purpose</span>
            <h2 className="section-title">Our <span className="highlight">Mission</span> & <span className="highlight">Vision</span></h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              Driving us forward with purpose and passion
            </p>
          </div>

          <div className="mission-vision-grid">
            <div className="mv-card mission-card-full">
              <div className="mv-icon">🚀</div>
              <h3>Our Mission</h3>
              <p className="mv-description">
                Deliver authentic Indian snacks with uncompromised quality, preserving 
                traditional flavors while maintaining modern standards.
              </p>
              <ul className="mv-list">
                <li>✓ Preserve authentic Indian snacking traditions</li>
                <li>✓ Maintain modern quality standards</li>
                <li>✓ Source the finest ingredients</li>
                <li>✓ Create memorable taste experiences</li>
              </ul>
              <button 
                className="mv-btn"
                onClick={(e) => {
                  createRipple(e);
                  setPopup("mission");
                }}
              >
                Learn More →
              </button>
            </div>

            <div className="mv-card vision-card-full">
              <div className="mv-icon">🌟</div>
              <h3>Our Vision</h3>
              <p className="mv-description">
                Transform Panchalveda Namkeen into a globally trusted Indian snack brand, 
                bringing the authentic taste of Bharat to every corner of the world.
              </p>
              <ul className="mv-list">
                <li>✓ Become a global Indian snack brand</li>
                <li>✓ Share authentic flavors worldwide</li>
                <li>✓ Innovate while preserving tradition</li>
                <li>✓ Build lasting customer trust</li>
              </ul>
              <button 
                className="mv-btn"
                onClick={(e) => {
                  createRipple(e);
                  setPopup("vision");
                }}
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ACHIEVEMENTS ========== */}
      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🏆 Milestones</span>
            <h2 className="section-title">Our <span className="highlight">Achievements</span></h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              Celebrating the journey of excellence and growth
            </p>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id} 
                className={`achievement-card ${index % 2 === 1 ? 'reverse' : ''}`}
              >
                <div className="achievement-image-wrapper">
                  <img src={achievement.image} alt={achievement.title} />
                  <div className="achievement-year">{achievement.year}</div>
                </div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p className="achievement-desc">{achievement.description}</p>
                  <p className="achievement-detail">{achievement.detail}</p>
                  <button 
                    className="achievement-btn"
                    onClick={(e) => {
                      createRipple(e);
                      setPopup("achievements");
                    }}
                  >
                    Read Full Story →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HISTORY OF PLACE ========== */}
      <section className="history-place-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🏛️ Heritage</span>
            <h2 className="section-title">History of <span className="highlight">The Place</span></h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              Ancient stories, legendary sages, and timeless traditions rooted in the sacred land of Farrukhabad
            </p>
          </div>

          <div className="history-place-grid">
            {stories.map((story) => (
              <div 
                key={story.id}
                className="history-story-card"
                onClick={() => {
                  setPopup(story.id);
                  setPopupLanguage("hindi");
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setPopup(story.id);
                    setPopupLanguage("hindi");
                  }
                }}
              >
                <div className="story-card-image" style={{ background: story.color }}>
                  <span className="story-icon">{story.icon}</span>
                  <div className="story-image-shine"></div>
                </div>
                <div className="story-card-content">
                  <span className="story-badge">{story.badge}</span>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <span className="story-read-more">
                    Read Full Story 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
                <div className="story-card-glow"></div>
                <div className="story-card-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">💎 Values</span>
            <h2 className="section-title">Our <span className="highlight">Core Values</span></h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="values-grid-modern">
            {coreValues.map((value) => (
              <div 
                key={value.id}
                className="value-card-modern"
                onClick={() => setSelectedValue(value)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setSelectedValue(value);
                }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <span className="value-cta">Click to learn more →</span>
                <div className="value-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {selectedValue && (
          <div className="value-popup-overlay" onClick={() => setSelectedValue(null)}>
            <div className="value-popup-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="value-popup-close" 
                onClick={() => setSelectedValue(null)}
              >
                ✕
              </button>
              <div className="value-popup-content">
                <div className="value-popup-header">
                  <span className="value-popup-icon">{selectedValue.icon}</span>
                  <h2>{selectedValue.title}</h2>
                </div>
                <div className="value-popup-body">
                  {selectedValue.longDesc.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
                <button 
                  className="value-popup-btn"
                  onClick={() => setSelectedValue(null)}
                >
                  Got it! 🙌
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========== PROFESSIONAL BLOG POPUP ========== */}
      {popup && (
        <div className="pro-blog-popup">
          <button className="pro-popup-close" onClick={closePopup}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div className="pro-language-toggle">
            <button 
              className={`pro-lang-btn ${popupLanguage === "english" ? "active" : ""}`}
              onClick={() => setPopupLanguage("english")}
            >
              English
            </button>
            <button 
              className={`pro-lang-btn ${popupLanguage === "hindi" ? "active" : ""}`}
              onClick={() => setPopupLanguage("hindi")}
            >
              हिंदी
            </button>
          </div>

          <div className="pro-blog-container">
            {/* ===== MISSION ===== */}
            {popup === "mission" && (
              <div className="pro-blog-content">
                <div className="pro-blog-header">
                  <div className="pro-blog-icon">🚀</div>
                  <h1>{popupLanguage === "english" ? "Our Mission" : "हमारा मिशन"}</h1>
                  <div className="pro-blog-divider"></div>
                </div>
                <div className="pro-blog-body">
                  {popupLanguage === "english" ? (
                    <>
                      <p className="pro-blog-intro">At Panchalveda Namkeen, our mission is to preserve authentic Indian snacking traditions while maintaining modern quality standards.</p>
                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">✨</span>
                        <p>We believe taste is not just flavor — it is emotion, memory, and culture.</p>
                      </div>
                      <p>We are committed to using only the finest ingredients, sourced directly from local farmers and spice merchants who share our passion for quality.</p>
                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>Our mission extends beyond business – we aim to create a legacy of authentic taste that future generations will cherish.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="pro-blog-intro">पंचालवेडा नमकीन का मिशन भारतीय पारंपरिक स्नैकिंग परंपराओं को संरक्षित करना है, साथ ही आधुनिक गुणवत्ता मानकों को बनाए रखना है।</p>
                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">✨</span>
                        <p>हमारा मानना है कि स्वाद केवल फ्लेवर नहीं है – यह भावना, यादें और संस्कृति है।</p>
                      </div>
                      <p>हम केवल बेहतरीन सामग्री का उपयोग करने के लिए प्रतिबद्ध हैं, जो सीधे स्थानीय किसानों और मसाला व्यापारियों से प्राप्त की जाती है।</p>
                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>हमारा मिशन व्यवसाय से परे है – हम एक ऐसी विरासत बनाना चाहते हैं जिसे आने वाली पीढ़ियाँ संजो कर रखेंगी।</p>
                      </div>
                    </>
                  )}
                  {/* Comment Form */}
                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* ===== VISION ===== */}
            {popup === "vision" && (
              <div className="pro-blog-content">
                <div className="pro-blog-header">
                  <div className="pro-blog-icon">🌟</div>
                  <h1>{popupLanguage === "english" ? "Our Vision" : "हमारा विज़न"}</h1>
                  <div className="pro-blog-divider"></div>
                </div>
                <div className="pro-blog-body">
                  {popupLanguage === "english" ? (
                    <>
                      <p className="pro-blog-intro">Our vision is to transform Panchalveda Namkeen into a globally trusted Indian snack brand.</p>
                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🌍</span>
                        <p>We envision a world where authentic Indian flavors are celebrated on every continent.</p>
                      </div>
                      <p>Innovation, consistency, and customer trust remain the foundation of our journey.</p>
                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>We aim to create a brand that represents the rich culinary heritage of India on the global stage.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="pro-blog-intro">हमारा विज़न पंचालवेडा नमकीन को एक वैश्विक स्तर पर विश्वसनीय भारतीय स्नैक ब्रांड के रूप में स्थापित करना है।</p>
                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🌍</span>
                        <p>हम एक ऐसी दुनिया की कल्पना करते हैं जहाँ भारतीय स्वादों को हर महाद्वीप पर मनाया जाता है।</p>
                      </div>
                      <p>नवाचार, निरंतरता और ग्राहकों का विश्वास हमारी यात्रा की नींव हैं।</p>
                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>हम एक ऐसा ब्रांड बनाना चाहते हैं जो भारत की समृद्ध पाक विरासत को वैश्विक मंच पर प्रस्तुत करे।</p>
                      </div>
                    </>
                  )}
                  {/* Comment Form */}
                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* ===== HISTORY ===== */}
            {popup === "history" && (
              <div className="pro-blog-content">
                <div className="pro-blog-header">
                  <div className="pro-blog-icon">📜</div>
                  <h1>{popupLanguage === "english" ? "PanchalVeda Heritage" : "पंचालवेडा विरासत"}</h1>
                  <div className="pro-blog-divider"></div>
                </div>
                <div className="pro-blog-body">
                  {popupLanguage === "english" ? (
                    <>
                      <p className="pro-blog-intro">Farrukhabadi Namkeen is known for its powerful flavor profile and aromatic use of authentic heeng.</p>
                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🧘</span>
                        <p>Generations of craftsmanship and traditional recipes have shaped this flavorful legacy.</p>
                      </div>
                      <h2 className="pro-blog-subtitle">Heeng: The Star Ingredient</h2>
                      <p>While heeng is commonly used in Indian tempering, Farrukhabadi Namkeen makes it the centerpiece of every bite.</p>
                      <div className="pro-blog-list">
                        <h3>Popular Varieties</h3>
                        <ul>
                          <li><strong>Heeng Sev:</strong> Thin, crispy gram-flour strands seasoned generously with authentic heeng.</li>
                          <li><strong>Heeng Bhujia:</strong> Slightly thicker than sev with a stronger, richer flavor.</li>
                          <li><strong>Heeng Kachori:</strong> Crispy layered kachoris filled with spicy heeng stuffing.</li>
                          <li><strong>Chana Dal Namkeen:</strong> Crunchy roasted chana dal seasoned with salt, pepper, and a touch of heeng.</li>
                        </ul>
                      </div>
                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>Farrukhabadi Namkeen is more than just a snack—it is a culinary heritage proudly representing the traditions of Farrukhabad.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="pro-blog-intro">फर्रुखाबादी नमकीन अपने शक्तिशाली स्वाद और असली हींग की मनमोहक सुगंध के लिए प्रसिद्ध है।</p>
                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🧘</span>
                        <p>पीढ़ियों से चली आ रही शिल्पकला और पारंपरिक रेसिपी ने इसे स्वादिष्ट विरासत प्रदान की है।</p>
                      </div>
                      <h2 className="pro-blog-subtitle">हींग: मुख्य नायिका</h2>
                      <p>भारतीय रसोई में हींग का उपयोग सामान्यतः तड़के में किया जाता है, लेकिन फर्रुखाबादी नमकीन में यही इसका सबसे प्रमुख स्वाद बन जाती है।</p>
                      <div className="pro-blog-list">
                        <h3>लोकप्रिय किस्में</h3>
                        <ul>
                          <li><strong>हींग सेव:</strong> पतले, कुरकुरे बेसन के तार</li>
                          <li><strong>हींग भुजिया:</strong> सेव से थोड़ी मोटी और अधिक तीखी</li>
                          <li><strong>हींग कचौड़ी:</strong> कुरकुरी परतों वाली मसालेदार कचौड़ी</li>
                          <li><strong>चना दाल नमकीन:</strong> कुरकुरी भुनी चना दाल</li>
                        </ul>
                      </div>
                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>फर्रुखाबादी नमकीन केवल एक नमकीन नहीं, बल्कि एक समृद्ध पाक-विरासत है।</p>
                      </div>
                    </>
                  )}
                  {/* Comment Form */}
                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* ===== ACHIEVEMENTS ===== */}
            {popup === "achievements" && (
              <div className="pro-blog-content">
                <div className="pro-blog-header">
                  <div className="pro-blog-icon">🏆</div>
                  <h1>{popupLanguage === "english" ? "Our Achievements" : "हमारी उपलब्धियाँ"}</h1>
                  <div className="pro-blog-divider"></div>
                </div>
                <div className="pro-blog-body">
                  {popupLanguage === "english" ? (
                    <>
                      <p className="pro-blog-intro">Since our founding in 2018, PanchalVeda Namkeen has achieved remarkable milestones.</p>
                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🚀</span>
                        <p>Starting from a small kitchen in Farrukhabad, we've grown into a trusted brand serving thousands of families.</p>
                      </div>
                      <p>We've been recognized for our efforts to preserve traditional Indian snacking heritage.</p>
                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>Our achievements represent the trust and love of thousands of families who enjoy our products every day.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="pro-blog-intro">2018 में अपनी स्थापना के बाद से, पंचालवेडा नमकीन ने उल्लेखनीय उपलब्धियाँ हासिल की हैं।</p>
                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🚀</span>
                        <p>फर्रुखाबाद में एक छोटी रसोई से शुरू करके, हम भारत भर में हजारों परिवारों की सेवा करने वाले एक विश्वसनीय ब्रांड के रूप में विकसित हुए हैं।</p>
                      </div>
                      <p>हमें पारंपरिक भारतीय स्नैकिंग विरासत को संरक्षित करने के प्रयासों के लिए पहचाना गया है।</p>
                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>हमारी उपलब्धियाँ केवल संख्याएँ नहीं हैं – वे हजारों परिवारों के विश्वास और प्यार का प्रतिनिधित्व करती हैं।</p>
                      </div>
                    </>
                  )}
                  {/* Comment Form */}
                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* ===== STORY POPUPS ===== */}
            {stories.map((story) => (
              popup === story.id && (
                <div className="pro-blog-content" key={story.id}>
                  <div className="pro-blog-header">
                    <div className="pro-blog-icon">{story.icon}</div>
                    <h1>{popupLanguage === "english" ? story.english.title : story.hindi.title}</h1>
                    <div className="pro-blog-divider"></div>
                    <div className="pro-blog-meta">
                      <span className="pro-meta-badge" style={{ background: story.color }}>
                        {story.badge}
                      </span>
                    </div>
                  </div>
                  
                  <div className="pro-blog-hero-image">
                    <img src={story.image} alt={story.english.title} />
                    <div className="pro-image-overlay"></div>
                    <div className="pro-image-caption">
                      <span>{story.icon}</span>
                      <p>{popupLanguage === "english" ? story.english.title : story.hindi.title}</p>
                    </div>
                  </div>

                  <div className="pro-blog-body">
                    {popupLanguage === "english" ? (
                      <>
                        <p className="pro-blog-intro">{story.english.content[0]}</p>
                        {story.english.content.slice(1, -1).map((para, idx) => (
                          idx === 0 ? (
                            <div className="pro-blog-highlight" key={idx}>
                              <span className="pro-highlight-icon">📖</span>
                              <p>{para}</p>
                            </div>
                          ) : (
                            <p key={idx}>{para}</p>
                          )
                        ))}
                        <div className="pro-blog-quote">
                          <span className="pro-quote-mark">"</span>
                          <p>{story.english.content[story.english.content.length - 1]}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="pro-blog-intro">{story.hindi.content[0]}</p>
                        {story.hindi.content.slice(1, -1).map((para, idx) => (
                          idx === 0 ? (
                            <div className="pro-blog-highlight" key={idx}>
                              <span className="pro-highlight-icon">📖</span>
                              <p>{para}</p>
                            </div>
                          ) : (
                            <p key={idx}>{para}</p>
                          )
                        ))}
                        <div className="pro-blog-quote">
                          <span className="pro-quote-mark">"</span>
                          <p>{story.hindi.content[story.hindi.content.length - 1]}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Comment Form */}
                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <p className="form-subtitle">We'd love to hear your feedback on this story!</p>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              )
            ))}

            <div className="pro-popup-footer">
              <button className="pro-back-btn" onClick={closePopup}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to About
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}