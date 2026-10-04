// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Heritage.css";
// import pic7 from "./assets/pic7.jpeg";

// export default function Heritage() {
//   const navigate = useNavigate();
//   const [popup, setPopup] = useState(null);
//   const [popupLanguage, setPopupLanguage] = useState("hindi");
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     comment: ""
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formError, setFormError] = useState("");

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

//   const closePopup = () => {
//     setPopup(null);
//     setFormSubmitted(false);
//     setFormError("");
//     setFormData({ name: "", phone: "", email: "", comment: "" });
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

//   const handleFormChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setFormError("");
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name.trim()) { setFormError("Please enter your name"); return; }
//     if (!formData.phone.trim()) { setFormError("Please enter your phone number"); return; }
//     if (!formData.phone.match(/^[0-9]{10}$/)) { setFormError("Please enter a valid 10-digit phone number"); return; }
//     if (!formData.email.trim()) { setFormError("Please enter your email"); return; }
//     if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setFormError("Please enter a valid email address"); return; }
//     if (!formData.comment.trim()) { setFormError("Please write your comment"); return; }

//     const message = `📝 *New Comment from PanchalVeda Heritage Page*\n\n` +
//       `👤 *Name:* ${formData.name}\n` +
//       `📱 *Phone:* ${formData.phone}\n` +
//       `📧 *Email:* ${formData.email}\n` +
//       `💬 *Comment:* ${formData.comment}\n\n` +
//       `🔗 *Sent from PanchalVeda Heritage Page*`;

//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/918004779751?text=${encodedMessage}`;
//     window.open(whatsappUrl, '_blank');
//     setFormSubmitted(true);
//   };

//   const stories = [
//     {
//       id: "story-panchali",
//       icon: "👑",
//       title: "Draupadi — The Princess of Panchala",
//       badge: "Mythological",
//       color: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
//       description: "The legendary queen whose story is woven into the very fabric of the Panchala region...",
//       image: pic7,
//       english: {
//         title: "Draupadi — The Princess of Panchala",
//         content: [
//           "Draupadi, also known as Panchali, is one of the most iconic and powerful women in Indian mythology. She was the daughter of King Drupada of Panchala, a kingdom that encompassed the region now known as Farrukhabad and its surrounding areas.",
//           "The name 'Panchali' itself means 'one from the land of Panchala.' This connection ties the sacred land of Farrukhabad to one of the most significant figures in the Mahabharata. Draupadi's story is a tale of strength, resilience, dignity, and unwavering faith in righteousness.",
//           "King Drupada performed a powerful yajna (sacrificial ritual) to be blessed with a child who would avenge his humiliation at the hands of Dronacharya. From the sacred fire emerged Draupadi — radiant, fierce, and destined for greatness. Her birth was accompanied by a divine prophecy that she would play a pivotal role in the events of the Kurukshetra war.",
//           "Draupadi's life took an extraordinary turn when she became the wife of all five Pandava brothers. Her marriage was a divine arrangement, a testament to her exceptional character and the unique destiny she carried. Despite the challenges of being married to five husbands, she managed her household with grace and fairness, becoming the heart of the Pandava family.",
//           "One of the most well-known episodes in Indian mythology is Draupadi's disrobing in the royal court of Hastinapur. When Duryodhana and Dushasana attempted to humiliate her, Draupadi's prayers to Lord Krishna saved her honor. Her unwavering faith and dignity in the face of complete humiliation became a symbol of resistance against injustice.",
//           "Throughout the Mahabharata, Draupadi emerges as a woman of extraordinary intelligence, courage, and moral clarity. She was not merely a witness to events — she was an active participant who shaped the course of history. Her voice was heard in the royal court, and her questions about dharma challenged even the wisest elders.",
//           "As a queen, she ruled with wisdom and compassion. As a wife, she was loyal and devoted. As a woman, she stood tall in the face of adversity. Draupadi's story continues to inspire millions of women around the world.",
//           "Farrukhabad, situated in the ancient Panchala region, carries the memory of this legendary princess. The land where Draupadi was born and raised holds a special place in the heart of every devotee. When we walk through the streets of Farrukhabad, we are walking through the very land that was once the kingdom of Panchala — the land of Draupadi."
//         ]
//       },
//       hindi: {
//         title: "द्रौपदी — पांचाल की राजकुमारी",
//         content: [
//           "द्रौपदी, जिन्हें पांचाली के नाम से भी जाना जाता है, भारतीय पौराणिक कथाओं की सबसे प्रतिष्ठित और शक्तिशाली महिलाओं में से एक हैं। वह पांचाल के राजा द्रुपद की पुत्री थीं, जो वर्तमान फर्रुखाबाद और उसके आसपास के क्षेत्र में स्थित था।",
//           "'पांचाली' नाम का अर्थ है 'पांचाल की भूमि से आने वाली'। यह संबंध फर्रुखाबाद की पवित्र भूमि को महाभारत की सबसे महत्वपूर्ण पात्रों में से एक से जोड़ता है। द्रौपदी की कहानी शक्ति, लचीलापन, गरिमा और धर्म में अटूट विश्वास की कहानी है।",
//           "राजा द्रुपद ने द्रोणाचार्य के हाथों अपनी हार का बदला लेने के लिए एक शक्तिशाली यज्ञ किया। यज्ञ की अग्नि से एक दिव्य कन्या प्रकट हुई — द्रौपदी, जो अपनी कांति, शक्ति और अद्वितीय प्रतिभा के लिए प्रसिद्ध थी। उनका जन्म एक दिव्य भविष्यवाणी के साथ हुआ था कि वे कुरुक्षेत्र युद्ध की घटनाओं में महत्वपूर्ण भूमिका निभाएंगी।",
//           "द्रौपदी का जीवन एक असाधारण मोड़ पर आया जब वह पांचों पांडव भाइयों की पत्नी बनीं। उनका विवाह एक दिव्य व्यवस्था थी, जो उनके असाधारण चरित्र और अद्वितीय नियति का प्रमाण था। पांच पतियों की पत्नी होने के बावजूद, उन्होंने अपने घर को शांति और न्याय के साथ चलाया, और पांडव परिवार के केंद्र बिंदु बनीं।",
//           "द्रौपदी का हस्तिनापुर के दरबार में चीरहरण भारतीय पौराणिक कथाओं की सबसे प्रसिद्ध घटनाओं में से एक है। जब दुर्योधन और दुःशासन ने उन्हें अपमानित करने का प्रयास किया, तो द्रौपदी की भगवान कृष्ण में आस्था ने उनकी रक्षा की। अपमान के सामने उनकी अटूट आस्था और गरिमा अन्याय के खिलाफ प्रतिरोध का प्रतीक बन गई।",
//           "महाभारत में द्रौपदी असाधारण बुद्धिमत्ता, साहस और नैतिक स्पष्टता वाली महिला के रूप में उभरीं। वह केवल घटनाओं की गवाह नहीं थीं — वह एक सक्रिय भागीदार थीं जिन्होंने इतिहास की दिशा को आकार दिया। राजसभा में उनकी आवाज सुनी गई, और धर्म के बारे में उनके प्रश्नों ने सबसे बुद्धिमान बुजुर्गों को भी चुनौती दी।",
//           "रानी के रूप में, उन्होंने बुद्धिमानी और करुणा से शासन किया। पत्नी के रूप में, वह वफादार और समर्पित थीं। द्रौपदी की कहानी दुनिया भर की महिलाओं को प्रेरित करती रहती है।",
//           "फर्रुखाबाद, प्राचीन पांचाल क्षेत्र में स्थित, इस पौराणिक राजकुमारी की स्मृति को संजोए हुए है। जिस भूमि पर द्रौपदी का जन्म और पालन-पोषण हुआ, वह हर भक्त के दिल में एक विशेष स्थान रखती है।"
//         ]
//       }
//     },
//     {
//       id: "story-durvasa",
//       icon: "🧘",
//       title: "Durvasa Rishi — The Powerful Ascetic",
//       badge: "Ancient Sage",
//       color: "linear-gradient(135deg, #F59E0B, #D97706)",
//       description: "The great sage who performed intense tapasya on the banks of the Ganga at Panchal Ghat...",
//       image: pic7,
//       english: {
//         title: "Durvasa Rishi — The Powerful Ascetic",
//         content: [
//           "Maharishi Durvasa is one of the most fascinating and formidable figures in Indian spiritual tradition. Known for his intense tapasya (penance), extraordinary spiritual powers, and a temperament that could bless or curse with equal intensity, Durvasa Rishi remains a symbol of the transformative power of disciplined spiritual practice.",
//           "According to local religious tradition, Maharishi Durvasa performed intense penance and spiritual practices right here on the banks of the Ganga at Panchal Ghat in Farrukhabad. This sacred location became his tapasthali — the place where he dedicated himself to the highest forms of spiritual discipline.",
//           "The serene banks of the Ganga, with its constant flow and spiritual energy, provided the ideal environment for a sage seeking ultimate truth. It is here that Durvasa Rishi is believed to have sat in deep meditation, his mind absorbed in the infinite, his heart open to the divine.",
//           "Durvasa Rishi is often remembered for his quick temper and powerful curses. However, a deeper understanding reveals a more complex personality. His anger was not born of ego but of a deep commitment to truth and dharma. He blessed those who were righteous and punished those who strayed from the path of virtue.",
//           "His blessings were equally powerful — they could transform destinies and grant immense spiritual power. His entire being was dedicated to the preservation of dharma, and his actions, though sometimes intense, always served a higher purpose.",
//           "The Puranas and the Mahabharata contain many stories of Durvasa Rishi's encounters with kings, gods, and devotees. One of the most famous is his encounter with King Ambarisha, where his anger was pacified by the king's devotion to Lord Vishnu. Another story speaks of his interaction with Lord Indra, where he taught the king of the gods a lesson about pride and humility.",
//           "These stories are not just tales — they are profound lessons about the importance of humility, devotion, and the power of spiritual practice. They remind us that true strength lies not in external power but in the mastery of the self.",
//           "Durvasa Rishi's life is a testament to the transformative power of tapasya. Through intense discipline, control over the senses, and unwavering focus, he attained spiritual powers that were beyond ordinary comprehension. His life teaches us that spiritual growth requires dedication, patience, and an unwavering commitment to the truth.",
//           "Today, as we stand at Panchal Ghat and look at the gentle flow of the Ganga, we are reminded of the great sage who once sat here in deep meditation. His spirit continues to inspire spiritual seekers from all over the world."
//         ]
//       },
//       hindi: {
//         title: "दुर्वासा ऋषि — शक्तिशाली तपस्वी",
//         content: [
//           "महर्षि दुर्वासा भारतीय आध्यात्मिक परंपरा के सबसे आकर्षक और दुर्जेय व्यक्तियों में से एक हैं। अपनी तीव्र तपस्या, असाधारण आध्यात्मिक शक्तियों और ऐसे स्वभाव के लिए जो समान तीव्रता से आशीर्वाद और शाप दोनों दे सकता था, दुर्वासा ऋषि अनुशासित आध्यात्मिक अभ्यास की परिवर्तनकारी शक्ति का प्रतीक बने हुए हैं।",
//           "स्थानीय धार्मिक परंपरा के अनुसार, महर्षि दुर्वासा ने फर्रुखाबाद के पंचाल घाट पर गंगा के तट पर तीव्र तपस्या और आध्यात्मिक साधना की थी। यह पवित्र स्थान उनकी तपस्थली बना — वह स्थान जहाँ उन्होंने स्वयं को आध्यात्मिक अनुशासन के उच्चतम रूपों के लिए समर्पित किया।",
//           "गंगा के शांत तट, अपने निरंतर प्रवाह और आध्यात्मिक ऊर्जा के साथ, एक ऋषि के लिए आदर्श वातावरण प्रदान करते थे। यहाँ दुर्वासा ऋषि गहन ध्यान में बैठे थे, उनका मन अनंत में लीन था, उनका हृदय दिव्य के लिए खुला था।",
//           "दुर्वासा ऋषि को अक्सर उनके तीव्र स्वभाव और शक्तिशाली शापों के लिए याद किया जाता है। लेकिन गहन दृष्टि से देखें तो उनका व्यक्तित्व अधिक जटिल था। उनका क्रोध अहंकार से नहीं, बल्कि सत्य और धर्म के प्रति गहरी प्रतिबद्धता से पैदा हुआ था। उन्होंने धार्मिक लोगों को आशीर्वाद दिया और पुण्य के मार्ग से भटकने वालों को दंडित किया।",
//           "उनके आशीर्वाद भी समान रूप से शक्तिशाली थे — वे नियति बदल सकते थे और असीम आध्यात्मिक शक्ति प्रदान कर सकते थे। उनका पूरा अस्तित्व धर्म के संरक्षण के लिए समर्पित था।",
//           "पुराणों और महाभारत में दुर्वासा ऋषि के राजाओं, देवताओं और भक्तों के साथ कई कहानियाँ हैं। सबसे प्रसिद्ध में से एक राजा अम्बरीष के साथ उनकी मुठभेड़ है, जहाँ राजा की भगवान विष्णु में भक्ति ने उनके क्रोध को शांत किया।",
//           "ये कहानियाँ केवल कथाएँ नहीं हैं — ये विनम्रता, भक्ति और आध्यात्मिक अभ्यास की शक्ति के महत्व के बारे में गहन सबक हैं।",
//           "दुर्वासा ऋषि का जीवन तपस्या की परिवर्तनकारी शक्ति का प्रमाण है। तीव्र अनुशासन, इंद्रियों पर नियंत्रण और अटूट एकाग्रता के माध्यम से, उन्होंने आध्यात्मिक शक्तियाँ प्राप्त कीं जो सामान्य समझ से परे थीं।",
//           "आज, जब हम पंचाल घाट पर खड़े होकर गंगा के कोमल प्रवाह को देखते हैं, तो हमें उस महान ऋषि की याद आती है जो कभी यहाँ गहन ध्यान में बैठे थे।"
//         ]
//       }
//     },
//     {
//       id: "story-sankisa",
//       icon: "🕊️",
//       title: "Sankisa — The Place of Buddha's Descent",
//       badge: "Buddhist Heritage",
//       color: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
//       description: "The sacred site where Lord Buddha descended from the heavenly realm to Earth...",
//       image: pic7,
//       english: {
//         title: "Sankisa — The Place of Buddha's Descent",
//         content: [
//           "Sankisa, located about 37 kilometers from Farrukhabad, is one of the eight most important pilgrimage sites in Buddhism. According to Buddhist tradition, this is the place where Gautama Buddha descended from the heavenly realm after teaching the Abhidhamma to his mother, Mahamaya.",
//           "The tradition describes a magnificent descent through three celestial stairways—one of gold, one of silver, and one made of jewels. Buddha descended through the central stairway, while Indra and Brahma accompanied him. This extraordinary event is why Sankisa became known as the place of Buddha's descent from the heavenly realm.",
//           "The Farrukhabad district administration records Sankisa as an important ancient city of the Panchala region. The Valmiki Ramayana also refers to Sankasya as the capital of Kushadhwaja, King Janaka's younger brother. This connection shows how the site has been significant across different traditions.",
//           "During the Mauryan period, Emperor Ashoka erected a pillar at Sankisa. The famous Elephant Capital from this pillar is one of the most recognizable archaeological objects associated with the site. The elephant symbolizes the strength and spread of Buddhism during Ashoka's reign.",
//           "Chinese pilgrims Faxian and Xuanzang visited Sankisa centuries ago and recorded it as an important Buddhist pilgrimage centre. Xuanzang referred to the place as Kapitha in his travel records. Their accounts provide valuable historical evidence of Sankisa's importance.",
//           "The Archaeological Survey of India has preserved the ancient remains at Sankisa. The site includes ancient mounds, stupa remains, and various Buddhist artifacts that tell the story of centuries of Buddhist presence in the region.",
//           "Today, Sankisa is a living pilgrimage destination. Buddhist temples and chaityas established by different countries including Myanmar, China, Sri Lanka, Cambodia, and Japan can be found here. Pilgrims from around the world visit to pay their respects and connect with the legacy of Buddha.",
//           "Sankisa represents the beautiful blend of ancient history and living faith. It stands as a testament to India's role in the development and spread of Buddhism across Asia."
//         ]
//       },
//       hindi: {
//         title: "संकिसा — बुद्ध के अवतरण का पवित्र स्थल",
//         content: [
//           "संकिसा, फर्रुखाबाद से लगभग 37 किलोमीटर दूर स्थित, बौद्ध धर्म के आठ सबसे महत्वपूर्ण तीर्थ स्थलों में से एक है। बौद्ध परंपरा के अनुसार, यह वह स्थान है जहाँ गौतम बुद्ध अपनी माता महामाया को अभिधम्म का उपदेश देने के बाद स्वर्गीय लोक से धरती पर उतरे थे।",
//           "बौद्ध परंपरा में वर्णन मिलता है कि बुद्ध के लिए तीन सीढ़ियाँ बनाई गई थीं—एक सोने की, एक चाँदी की और एक रत्नों से बनी हुई। मध्य की सीढ़ी से बुद्ध पृथ्वी की ओर उतरे, जबकि इंद्र और ब्रह्मा उनके साथ थे। इसी कारण संकिसा को 'बुद्ध के अवतरण स्थल' के रूप में श्रद्धा से देखा जाता है।",
//           "फर्रुखाबाद जिला प्रशासन के अनुसार संकिसा पांचाल क्षेत्र का एक प्राचीन नगर था। वाल्मीकि रामायण में संकस्या को राजा जनक के छोटे भाई कुशध्वज की राजधानी के रूप में वर्णित किया गया है। यह संबंध दिखाता है कि यह स्थल विभिन्न परंपराओं में कितना महत्वपूर्ण रहा है।",
//           "मौर्य सम्राट अशोक ने संकिसा में एक स्तंभ स्थापित किया था। इस स्तंभ का प्रसिद्ध हाथी-शीर्ष (Elephant Capital) इस स्थल की सबसे महत्वपूर्ण पुरातात्विक पहचान है। हाथी अशोक के शासनकाल में बौद्ध धर्म की शक्ति और प्रसार का प्रतीक है।",
//           "चीनी यात्री फाहियान और ह्वेनसांग ने सदियों पहले संकिसा की यात्रा की थी और इसे एक महत्वपूर्ण बौद्ध तीर्थ केंद्र के रूप में वर्णित किया था। ह्वेनसांग ने अपने यात्रा वृत्तांत में इस स्थान को कपिथा के रूप में संदर्भित किया।",
//           "भारतीय पुरातत्व सर्वेक्षण (ASI) ने संकिसा में प्राचीन अवशेषों को संरक्षित किया है। इस स्थल में प्राचीन टीले, स्तूप अवशेष और विभिन्न बौद्ध कलाकृतियाँ शामिल हैं जो क्षेत्र में सदियों की बौद्ध उपस्थिति की कहानी बताती हैं।",
//           "आज संकिसा एक जीवित तीर्थ स्थल है। यहाँ म्यांमार, चीन, श्रीलंका, कंबोडिया और जापान जैसे विभिन्न देशों द्वारा बनाए गए बौद्ध मंदिर और चैत्य स्थित हैं। दुनिया भर से तीर्थयात्री अपनी श्रद्धा अर्पित करने और बुद्ध की विरासत से जुड़ने के लिए यहाँ आते हैं।",
//           "संकिसा प्राचीन इतिहास और जीवित आस्था के सुंदर मिश्रण का प्रतिनिधित्व करता है। यह पूरे एशिया में बौद्ध धर्म के विकास और प्रसार में भारत की भूमिका के प्रमाण के रूप में खड़ा है।"
//         ]
//       }
//     },
//     {
//       id: "story-army",
//       icon: "⚔️",
//       title: "Army Cantonment — The Legacy of Valour",
//       badge: "Modern Heritage",
//       color: "linear-gradient(135deg, #DC2626, #991B1B)",
//       description: "The proud military tradition and strategic importance of Farrukhabad's cantonment...",
//       image: pic7,
//       english: {
//         title: "Army Cantonment — The Legacy of Valour",
//         content: [
//           "Farrukhabad has a proud military heritage that dates back to the British colonial era when it served as an important garrison town. The Army Cantonment in Farrukhabad played a significant role in the region's history and continues to be an important military installation.",
//           "The strategic location of Farrukhabad, situated on the banks of the Ganga, made it an ideal location for military operations. The cantonment area became a center for troop movements, logistics, and military administration during the colonial period.",
//           "The cantonment witnessed several historical events, including the 1857 Rebellion (First War of Indian Independence). Local regiments and soldiers played significant roles in various military campaigns, contributing to the rich martial traditions of the region.",
//           "The British established the cantonment in the 19th century as part of their defensive strategy in northern India. The location provided easy access to major waterways and trade routes, making it strategically important.",
//           "After independence, the cantonment became an integral part of India's defense infrastructure. It has housed various military units, training centers, and support facilities that continue to serve the nation's defense needs with dedication and honor.",
//           "The cantonment has also contributed to the local economy and culture. The disciplined military life, varied cultural influences, and the presence of army personnel from different parts of India have created a unique cultural blend in the region.",
//           "The soldiers and officers stationed here have participated in numerous national and international operations, bringing pride to the region. Their stories of bravery and sacrifice are an inspiration to the local community.",
//           "Today, the Army Cantonment in Farrukhabad remains an active military installation, playing a vital role in national security while maintaining its deep-rooted connection with the local population."
//         ]
//       },
//       hindi: {
//         title: "सेना छावनी — वीरता की विरासत",
//         content: [
//           "फर्रुखाबाद की एक गौरवशाली सैन्य विरासत है जो ब्रिटिश औपनिवेशिक युग से शुरू होती है, जब यह एक महत्वपूर्ण गैरीसन शहर था। फर्रुखाबाद में सेना छावनी ने क्षेत्र के इतिहास में महत्वपूर्ण भूमिका निभाई है और आज भी एक महत्वपूर्ण सैन्य स्थापना बनी हुई है।",
//           "गंगा के तट पर स्थित फर्रुखाबाद की सामरिक स्थिति ने इसे सैन्य अभियानों के लिए एक आदर्श स्थान बना दिया। औपनिवेशिक काल के दौरान छावनी क्षेत्र सैन्य अभियानों, रसद और सैन्य प्रशासन का केंद्र बन गया।",
//           "1857 के विद्रोह (प्रथम स्वतंत्रता संग्राम) सहित कई ऐतिहासिक घटनाओं ने इस छावनी को देखा। स्थानीय रेजिमेंटों और सैनिकों ने कई सैन्य अभियानों में महत्वपूर्ण भूमिका निभाई, जिससे क्षेत्र की समृद्ध योद्धा परंपराओं में योगदान मिला।",
//           "ब्रिटिशों ने 19वीं शताब्दी में उत्तरी भारत में अपनी रक्षा रणनीति के हिस्से के रूप में इस छावनी की स्थापना की थी। इस स्थान ने प्रमुख जलमार्गों और व्यापार मार्गों तक आसान पहुँच प्रदान की, जिससे यह सामरिक दृष्टि से महत्वपूर्ण हो गया।",
//           "स्वतंत्रता के बाद, छावनी भारत की रक्षा बुनियादी ढाँचे का एक अभिन्न अंग बन गई। यहाँ विभिन्न सैन्य इकाइयाँ, प्रशिक्षण केंद्र और सहायक सुविधाएँ स्थित हैं जो समर्पण और गौरव के साथ राष्ट्र की रक्षा आवश्यकताओं की सेवा करती हैं।",
//           "छावनी ने स्थानीय अर्थव्यवस्था और संस्कृति में भी योगदान दिया है। अनुशासित सैन्य जीवन, विभिन्न सांस्कृतिक प्रभाव और भारत के विभिन्न भागों से आए सैनिकों की उपस्थिति ने क्षेत्र में एक अनोखी सांस्कृतिक विविधता पैदा की है।",
//           "यहाँ तैनात सैनिकों और अधिकारियों ने कई राष्ट्रीय और अंतर्राष्ट्रीय अभियानों में भाग लिया है, जिससे क्षेत्र को गौरव मिला है। उनके वीरता और बलिदान की कहानियाँ स्थानीय समुदाय के लिए प्रेरणा हैं।",
//           "आज फर्रुखाबाद की सेना छावनी एक सक्रिय सैन्य स्थापना बनी हुई है, जो स्थानीय आबादी के साथ अपने गहरे संबंधों को बनाए रखते हुए राष्ट्रीय सुरक्षा में महत्वपूर्ण भूमिका निभा रही है।"
//         ]
//       }
//     },
//     {
//       id: "story-neemkaroli",
//       icon: "🕉️",
//       title: "Neem Karoli Baba — The Miracle Saint",
//       badge: "Modern Saint",
//       color: "linear-gradient(135deg, #10B981, #059669)",
//       description: "The beloved guru who spread love, compassion, and the message of service across the world...",
//       image: pic7,
//       english: {
//         title: "Neem Karoli Baba — The Miracle Saint",
//         content: [
//           "Neem Karoli Baba, also known as Maharaj-ji, is one of the most beloved spiritual figures of modern times. Though he is widely associated with the state of Rajasthan and the famous Kainchi Dham ashram in Uttarakhand, his spiritual presence and influence have touched the lives of millions across the world.",
//           "Neem Karoli Baba's life and teachings are deeply connected to the spiritual traditions of Uttar Pradesh and the Gangetic plains. His philosophy of love, compassion, and selfless service resonates deeply with the traditions that have flourished along the banks of the Ganga for centuries.",
//           "Like the ancient sages who meditated at Panchal Ghat, Neem Karoli Baba emphasized the importance of devotion, surrender, and service. His famous words — 'Love everyone, serve everyone, remember God' — capture the essence of the spiritual tradition that has been alive in this region for millennia.",
//           "Neem Karoli Baba's teachings are simple yet profound. He taught that love is the highest form of worship and that service to others is service to God. His miracles were not meant to showcase his power but to inspire faith and devotion in his followers.",
//           "He was known to say that the path to God is through love and surrender. He emphasized that material possessions and worldly achievements are meaningless without love and compassion for others. His teachings have inspired countless spiritual seekers, including several prominent Western followers who helped spread his message across the world.",
//           "Neem Karoli Baba's legacy continues to grow, with ashrams and spiritual centers across India and abroad carrying forward his message. His influence can be seen in the lives of his devotees, who continue to practice his teachings of love, service, and devotion.",
//           "His connection to the spiritual traditions of the Gangetic plains reminds us that the wisdom of ancient sages is alive and relevant even in the modern world. The sacred land of Farrukhabad, with its deep spiritual heritage, continues to be a source of inspiration for seekers from all over the world."
//         ]
//       },
//       hindi: {
//         title: "नीम करोली बाबा — चमत्कारी संत",
//         content: [
//           "नीम करोली बाबा, जिन्हें महाराज-जी के नाम से भी जाना जाता है, आधुनिक समय के सबसे प्रिय आध्यात्मिक व्यक्तियों में से एक हैं। हालाँकि वे मुख्यतः राजस्थान और उत्तराखंड के प्रसिद्ध कैंची धाम आश्रम से जुड़े हैं, लेकिन उनकी आध्यात्मिक उपस्थिति और प्रभाव ने दुनिया भर में लाखों लोगों के जीवन को छुआ है।",
//           "नीम करोली बाबा का जीवन और शिक्षाएँ उत्तर प्रदेश और गंगा के मैदानों की आध्यात्मिक परंपराओं से गहराई से जुड़ी हुई हैं। प्रेम, करुणा और निस्वार्थ सेवा का उनका दर्शन उन परंपराओं के साथ गहराई से प्रतिध्वनित होता है जो सदियों से गंगा के तट पर फली-फूली हैं।",
//           "उन प्राचीन ऋषियों की तरह जिन्होंने पंचाल घाट पर ध्यान किया, नीम करोली बाबा ने भक्ति, समर्पण और सेवा के महत्व पर जोर दिया। उनके प्रसिद्ध शब्द — 'सभी से प्रेम करो, सभी की सेवा करो, भगवान को याद रखो' — उस आध्यात्मिक परंपरा का सार हैं जो सहस्राब्दियों से इस क्षेत्र में जीवित है।",
//           "नीम करोली बाबा की शिक्षाएँ सरल लेकिन गहन हैं। उन्होंने सिखाया कि प्रेम पूजा का सर्वोच्च रूप है और दूसरों की सेवा ईश्वर की सेवा है। उनके चमत्कारों का उद्देश्य अपनी शक्ति दिखाना नहीं था, बल्कि अपने अनुयायियों में आस्था और भक्ति जगाना था।",
//           "वे कहा करते थे कि ईश्वर का मार्ग प्रेम और समर्पण के माध्यम से है। उन्होंने इस बात पर जोर दिया कि दूसरों के लिए प्रेम और करुणा के बिना भौतिक संपत्ति और सांसारिक उपलब्धियाँ अर्थहीन हैं।",
//           "नीम करोली बाबा की विरासत बढ़ती जा रही है, भारत और विदेशों में आश्रम और आध्यात्मिक केंद्र उनके संदेश को आगे बढ़ा रहे हैं। उनका प्रभाव उनके भक्तों के जीवन में देखा जा सकता है।",
//           "गंगा के मैदानों की आध्यात्मिक परंपराओं से उनका संबंध हमें याद दिलाता है कि प्राचीन ऋषियों का ज्ञान आधुनिक दुनिया में भी जीवित और प्रासंगिक है।"
//         ]
//       }
//     },
//     {
//       id: "story-shringi",
//       icon: "🔥",
//       title: "Shringi Rishi — The Sage of Divine Power",
//       badge: "Vedic Sage",
//       color: "linear-gradient(135deg, #EF4444, #DC2626)",
//       description: "The legendary sage whose intense tapasya and divine powers are remembered in ancient texts...",
//       image: pic7,
//       english: {
//         title: "Shringi Rishi — The Sage of Divine Power",
//         content: [
//           "Shringi Rishi is a revered figure in Indian mythology, known for his intense tapasya and extraordinary spiritual powers. His story is deeply connected to the ancient traditions of the Gangetic plains and the spiritual heritage of the Panchala region.",
//           "According to ancient texts, Shringi Rishi was born with divine powers and possessed the ability to perform miracles. His intense penance and unwavering devotion to the divine made him one of the most respected sages of his time.",
//           "The region of Farrukhabad, with its deep spiritual roots and connection to ancient sages, holds a special place in the tradition of Shringi Rishi. The sacred banks of the Ganga have witnessed the meditation and penance of countless sages, including Shringi Rishi.",
//           "Shringi Rishi's life exemplifies the power of dedicated spiritual practice. Through years of intense meditation, control over the senses, and unwavering focus on the divine, he attained extraordinary spiritual powers that inspired awe and devotion among his followers.",
//           "His story reminds us that true spiritual growth requires patience, discipline, and unwavering dedication. The path of the sage is not easy, but it leads to the highest forms of knowledge and understanding.",
//           "Shringi Rishi's legacy continues to inspire spiritual seekers even today. His life is a testament to the power of tapasya and the importance of staying true to one's spiritual path.",
//           "The sacred land of Farrukhabad, with its rich heritage of sages and spiritual traditions, carries forward this legacy with pride. As we walk along the banks of the Ganga and visit the sacred sites associated with ancient sages, we are reminded of the profound spiritual wisdom that has been passed down through generations."
//         ]
//       },
//       hindi: {
//         title: "शृंगी ऋषि — दिव्य शक्ति के ऋषि",
//         content: [
//           "शृंगी ऋषि भारतीय पौराणिक कथाओं में एक पूजनीय व्यक्तित्व हैं, जो अपनी तीव्र तपस्या और असाधारण आध्यात्मिक शक्तियों के लिए जाने जाते हैं। उनकी कहानी गंगा के मैदानों की प्राचीन परंपराओं और पांचाल क्षेत्र की आध्यात्मिक विरासत से गहराई से जुड़ी हुई है।",
//           "प्राचीन ग्रंथों के अनुसार, शृंगी ऋषि का जन्म दिव्य शक्तियों के साथ हुआ था और उनमें चमत्कार करने की क्षमता थी। उनकी तीव्र तपस्या और दिव्य के प्रति अटूट भक्ति ने उन्हें अपने समय के सबसे सम्मानित ऋषियों में से एक बना दिया।",
//           "फर्रुखाबाद का क्षेत्र, अपनी गहरी आध्यात्मिक जड़ों और प्राचीन ऋषियों से संबंध के साथ, शृंगी ऋषि की परंपरा में एक विशेष स्थान रखता है। गंगा के पवित्र तटों ने अनगिनत ऋषियों के ध्यान और तपस्या को देखा है, जिनमें शृंगी ऋषि भी शामिल हैं।",
//           "शृंगी ऋषि का जीवन समर्पित आध्यात्मिक अभ्यास की शक्ति का उदाहरण है। वर्षों की तीव्र साधना, इंद्रियों पर नियंत्रण और दिव्य पर अटूट ध्यान के माध्यम से, उन्होंने असाधारण आध्यात्मिक शक्तियाँ प्राप्त कीं जिन्होंने उनके अनुयायियों में विस्मय और भक्ति पैदा की।",
//           "उनकी कहानी हमें याद दिलाती है कि सच्ची आध्यात्मिक वृद्धि के लिए धैर्य, अनुशासन और अटूट समर्पण की आवश्यकता होती है। ऋषि का मार्ग आसान नहीं है, लेकिन यह ज्ञान और समझ के उच्चतम रूपों की ओर ले जाता है।",
//           "शृंगी ऋषि की विरासत आज भी आध्यात्मिक साधकों को प्रेरित करती है। उनका जीवन तपस्या की शक्ति और अपने आध्यात्मिक मार्ग पर सच्चे रहने के महत्व का प्रमाण है।",
//           "फर्रुखाबाद की पवित्र भूमि, अपनी समृद्ध ऋषि परंपराओं के साथ, इस विरासत को गर्व से आगे बढ़ाती है। गंगा के तट पर चलते हुए और प्राचीन ऋषियों से जुड़े पवित्र स्थलों पर जाते हुए, हमें उस गहन आध्यात्मिक ज्ञान की याद आती है जो पीढ़ियों से चला आ रहा है।"
//         ]
//       }
//     }
//   ];

//   return (
//     <div className="heritage-page">

//       {/* ========== HERO SECTION ========== */}
//       <section className="heritage-hero">
//         <div className="heritage-grain-overlay"></div>
//         <div className="heritage-hero-content">
//           <h1 className="fade-up">Heritage of Farrukhabad</h1>
//           <h3 className="fade-up delay-1">Ancient Stories. Sacred Land. Timeless Traditions.</h3>
//           <p className="fade-up delay-2">The land of Panchala — where mythology, spirituality, and history converge.</p>
//         </div>
//       </section>

//       {/* ========== HISTORY OF PLACE ========== */}
//       <section className="history-place-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-tag">🏛️ Heritage</span>
//             <h2 className="section-title">History of <span className="highlight">The Place</span></h2>
//             <div className="section-underline"></div>
//             <p className="section-subtitle">
//               Ancient stories, legendary sages, and timeless traditions rooted in the sacred land of Farrukhabad
//             </p>
//           </div>

//           <div className="history-place-grid">
//             {stories.map((story) => (
//               <div 
//                 key={story.id}
//                 className="history-story-card"
//                 onClick={() => {
//                   setPopup(story.id);
//                   setPopupLanguage("hindi");
//                 }}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     setPopup(story.id);
//                     setPopupLanguage("hindi");
//                   }
//                 }}
//               >
//                 <div className="story-card-image" style={{ background: story.color }}>
//                   <span className="story-icon">{story.icon}</span>
//                   <div className="story-image-shine"></div>
//                 </div>
//                 <div className="story-card-content">
//                   <span className="story-badge">{story.badge}</span>
//                   <h3>{story.title}</h3>
//                   <p>{story.description}</p>
//                   <span className="story-read-more">
//                     Read Full Story 
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M5 12h14M12 5l7 7-7 7"/>
//                     </svg>
//                   </span>
//                 </div>
//                 <div className="story-card-glow"></div>
//                 <div className="story-card-border"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========== BACK TO ABOUT ========== */}
//       <section className="back-to-about-section">
//         <div className="container">
//           <button 
//             className="back-to-about-btn"
//             onClick={() => navigate("/about")}
//           >
//             ← Back to About Page
//           </button>
//         </div>
//       </section>

//       {/* ========== PROFESSIONAL BLOG POPUP ========== */}
//       {popup && (
//         <div className="pro-blog-popup">
//           <button className="pro-popup-close" onClick={closePopup}>
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M18 6L6 18M6 6l12 12"/>
//             </svg>
//           </button>

//           <div className="pro-language-toggle">
//             <button 
//               className={`pro-lang-btn ${popupLanguage === "english" ? "active" : ""}`}
//               onClick={() => setPopupLanguage("english")}
//             >
//               English
//             </button>
//             <button 
//               className={`pro-lang-btn ${popupLanguage === "hindi" ? "active" : ""}`}
//               onClick={() => setPopupLanguage("hindi")}
//             >
//               हिंदी
//             </button>
//           </div>

//           <div className="pro-blog-container">
//             {stories.map((story) => (
//               popup === story.id && (
//                 <div className="pro-blog-content" key={story.id}>
//                   <div className="pro-blog-header">
//                     <div className="pro-blog-icon">{story.icon}</div>
//                     <h1>{popupLanguage === "english" ? story.english.title : story.hindi.title}</h1>
//                     <div className="pro-blog-divider"></div>
//                     <div className="pro-blog-meta">
//                       <span className="pro-meta-badge" style={{ background: story.color }}>
//                         {story.badge}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="pro-blog-hero-image">
//                     <img src={story.image} alt={story.english.title} />
//                     <div className="pro-image-overlay"></div>
//                     <div className="pro-image-caption">
//                       <span>{story.icon}</span>
//                       <p>{popupLanguage === "english" ? story.english.title : story.hindi.title}</p>
//                     </div>
//                   </div>

//                   <div className="pro-blog-body">
//                     {popupLanguage === "english" ? (
//                       <>
//                         <p className="pro-blog-intro">{story.english.content[0]}</p>
//                         {story.english.content.slice(1, -1).map((para, idx) => (
//                           idx === 0 ? (
//                             <div className="pro-blog-highlight" key={idx}>
//                               <span className="pro-highlight-icon">📖</span>
//                               <p>{para}</p>
//                             </div>
//                           ) : (
//                             <p key={idx}>{para}</p>
//                           )
//                         ))}
//                         <div className="pro-blog-quote">
//                           <span className="pro-quote-mark">"</span>
//                           <p>{story.english.content[story.english.content.length - 1]}</p>
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         <p className="pro-blog-intro">{story.hindi.content[0]}</p>
//                         {story.hindi.content.slice(1, -1).map((para, idx) => (
//                           idx === 0 ? (
//                             <div className="pro-blog-highlight" key={idx}>
//                               <span className="pro-highlight-icon">📖</span>
//                               <p>{para}</p>
//                             </div>
//                           ) : (
//                             <p key={idx}>{para}</p>
//                           )
//                         ))}
//                         <div className="pro-blog-quote">
//                           <span className="pro-quote-mark">"</span>
//                           <p>{story.hindi.content[story.hindi.content.length - 1]}</p>
//                         </div>
//                       </>
//                     )}
//                   </div>

//                   {/* Comment Form */}
//                   <div className="pro-comment-form">
//                     <h3>💬 Share Your Thoughts</h3>
//                     <p className="form-subtitle">We'd love to hear your feedback on this story!</p>
//                     <form onSubmit={handleFormSubmit}>
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           name="name"
//                           placeholder="Your Name *"
//                           value={formData.name}
//                           onChange={handleFormChange}
//                           className={formError && !formData.name ? "error" : ""}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <input
//                           type="tel"
//                           name="phone"
//                           placeholder="Phone Number *"
//                           value={formData.phone}
//                           onChange={handleFormChange}
//                           className={formError && !formData.phone ? "error" : ""}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <input
//                           type="email"
//                           name="email"
//                           placeholder="Email Address *"
//                           value={formData.email}
//                           onChange={handleFormChange}
//                           className={formError && !formData.email ? "error" : ""}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <textarea
//                           name="comment"
//                           placeholder="Write your comment here... *"
//                           rows="4"
//                           value={formData.comment}
//                           onChange={handleFormChange}
//                           className={formError && !formData.comment ? "error" : ""}
//                         ></textarea>
//                       </div>
//                       {formError && <p className="form-error">{formError}</p>}
//                       <button type="submit" className="form-submit-btn">
//                         <span>📤</span> Send via WhatsApp
//                       </button>
//                       <p className="form-note">Your comment will be sent to us via WhatsApp</p>
//                     </form>
//                   </div>
//                 </div>
//               )
//             ))}

//             <div className="pro-popup-footer">
//               <button className="pro-back-btn" onClick={closePopup}>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M19 12H5M12 19l-7-7 7-7"/>
//                 </svg>
//                 Back to Heritage
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Heritage.css";
import Cantt from "./assets/Cantt.jpeg";
import draupadi from "./assets/draupadi.png";
import durvasa from "./assets/durbasa.png";
import shringi from "./assets/shringi.png";
import buddha from "./assets/buddha.png";
import neebkarori from "./assets/neebkarori.png";

export default function Heritage() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(null);
  const [popupLanguage, setPopupLanguage] = useState("hindi");
  const [activeFaq, setActiveFaq] = useState(null);
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
    setFormData({ name: "", phone: "", email: "", comment: "" });
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) { setFormError("Please enter your name"); return; }
    if (!formData.phone.trim()) { setFormError("Please enter your phone number"); return; }
    if (!formData.phone.match(/^[0-9]{10}$/)) { setFormError("Please enter a valid 10-digit phone number"); return; }
    if (!formData.email.trim()) { setFormError("Please enter your email"); return; }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setFormError("Please enter a valid email address"); return; }
    if (!formData.comment.trim()) { setFormError("Please write your comment"); return; }

    const message = `📝 *New Comment from PanchalVeda Heritage Page*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `💬 *Comment:* ${formData.comment}\n\n` +
      `🔗 *Sent from PanchalVeda Heritage Page*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918004779751?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the historical significance of Farrukhabad?",
      answer: "Farrukhabad, historically known as the land of Panchala, is a region with a history dating back to remote antiquity. It is mentioned in the Mahabharata as the kingdom of King Drupada, the father of Draupadi. The region is also a significant Buddhist pilgrimage site, being home to Sankisa, where Lord Buddha is believed to have descended from heaven. The district has been a cradle of ancient sages, spiritual traditions, and a rich cultural heritage that spans thousands of years."
    },
    {
      question: "Why is Sankisa important for Buddhists?",
      answer: "Sankisa is one of the eight most important pilgrimage sites in Buddhism. According to tradition, it is the place where Gautama Buddha descended from the Trayastrimsa heaven after teaching the Abhidhamma to his mother, Mahamaya. The site features the famous Elephant Capital erected by Emperor Ashoka and is visited by pilgrims from all over the world, including from Japan, China, and Myanmar."
    },
    {
      question: "Who was Draupadi and how is she connected to Farrukhabad?",
      answer: "Draupadi, also known as Panchali, was the daughter of King Drupada of Panchala. The ancient kingdom of Panchala corresponds to the modern-day Farrukhabad region. She is one of the central figures in the Mahabharata, known for her strength, resilience, and unwavering faith. Her story is deeply woven into the cultural fabric of the land."
    },
    {
      question: "What is the significance of the Ganga at Panchal Ghat?",
      answer: "The Ganga at Panchal Ghat in Farrukhabad is considered highly sacred. It is believed that great sages like Durvasa Rishi and Shringi Rishi performed intense tapasya (penance) on its banks. The serene environment and spiritual energy of the river have made it a center for meditation and spiritual practice for centuries."
    },
    {
      question: "What is the legacy of Neem Karoli Baba in this region?",
      answer: "Neem Karoli Baba, a beloved modern saint, is deeply connected to the spiritual traditions of the Gangetic plains. His teachings of love, service, and devotion resonate with the ancient wisdom of the sages who meditated in this region. His legacy continues to inspire millions across the world."
    }
  ];

  const stories = [
    {
      id: "story-panchali",
      icon: "👑",
      title: "Draupadi — The Princess of Panchala",
      badge: "Historical",
      color: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
      description: "The legendary queen whose story is woven into the very fabric of the Panchala region...",
      image: draupadi,
      english: {
        title: "Draupadi — The Princess of Panchala",
        content: [
          "Draupadi, also known as Panchali, is one of the most iconic and powerful women in Indian mythology. She was the daughter of King Drupada of Panchala, a kingdom that encompassed the region now known as Farrukhabad and its surrounding areas. The name 'Panchali' itself means 'one from the land of Panchala,' tying the sacred land of Farrukhabad to one of the most significant figures in the Mahabharata.",
          "King Drupada performed a powerful yajna (sacrificial ritual) to be blessed with a child who would avenge his humiliation at the hands of Dronacharya. From the sacred fire emerged Draupadi — radiant, fierce, and destined for greatness. Her birth was accompanied by a divine prophecy that she would play a pivotal role in the events of the Kurukshetra war. She was not just a princess; she was a force of destiny.",
          "Draupadi's life took an extraordinary turn when she became the wife of all five Pandava brothers. Her marriage was a divine arrangement, a testament to her exceptional character and the unique destiny she carried. Despite the challenges of being married to five husbands, she managed her household with grace and fairness, becoming the heart of the Pandava family. Her wisdom and foresight often guided the Pandavas through their most difficult times.",
          "One of the most well-known episodes in Indian mythology is Draupadi's disrobing in the royal court of Hastinapur. When Duryodhana and Dushasana attempted to humiliate her, Draupadi's prayers to Lord Krishna saved her honor. Her unwavering faith and dignity in the face of complete humiliation became a symbol of resistance against injustice. This moment is considered a turning point in the Mahabharata, leading directly to the great war.",
          "Throughout the Mahabharata, Draupadi emerges as a woman of extraordinary intelligence, courage, and moral clarity. She was not merely a witness to events — she was an active participant who shaped the course of history. Her voice was heard in the royal court, and her questions about dharma challenged even the wisest elders. She was a philosopher, a queen, and a warrior in her own right.",
          "As a queen, she ruled with wisdom and compassion. As a wife, she was loyal and devoted. As a woman, she stood tall in the face of adversity. Draupadi's story continues to inspire millions of women around the world. She represents the eternal struggle against injustice and the power of unwavering faith.",
          "Farrukhabad, situated in the ancient Panchala region, carries the memory of this legendary princess. The land where Draupadi was born and raised holds a special place in the heart of every devotee. When we walk through the streets of Farrukhabad, we are walking through the very land that was once the kingdom of Panchala — the land of Draupadi. Her legacy is not just a story; it is a living heritage that continues to inspire and guide us."
        ]
      },
      hindi: {
        title: "द्रौपदी — पांचाल की राजकुमारी",
        content: [
          "द्रौपदी, जिन्हें पांचाली के नाम से भी जाना जाता है, भारतीय पौराणिक कथाओं की सबसे प्रतिष्ठित और शक्तिशाली महिलाओं में से एक हैं। वह पांचाल के राजा द्रुपद की पुत्री थीं, जो वर्तमान फर्रुखाबाद और उसके आसपास के क्षेत्र में स्थित था। 'पांचाली' नाम का अर्थ है 'पांचाल की भूमि से आने वाली'। यह संबंध फर्रुखाबाद की पवित्र भूमि को महाभारत की सबसे महत्वपूर्ण पात्रों में से एक से जोड़ता है।",
          "राजा द्रुपद ने द्रोणाचार्य के हाथों अपनी हार का बदला लेने के लिए एक शक्तिशाली यज्ञ किया। यज्ञ की अग्नि से एक दिव्य कन्या प्रकट हुई — द्रौपदी, जो अपनी कांति, शक्ति और अद्वितीय प्रतिभा के लिए प्रसिद्ध थी। उनका जन्म एक दिव्य भविष्यवाणी के साथ हुआ था कि वे कुरुक्षेत्र युद्ध की घटनाओं में महत्वपूर्ण भूमिका निभाएंगी। वह केवल एक राजकुमारी नहीं थीं; वह नियति की एक शक्ति थीं।",
          "द्रौपदी का जीवन एक असाधारण मोड़ पर आया जब वह पांचों पांडव भाइयों की पत्नी बनीं। उनका विवाह एक दिव्य व्यवस्था थी, जो उनके असाधारण चरित्र और अद्वितीय नियति का प्रमाण था। पांच पतियों की पत्नी होने के बावजूद, उन्होंने अपने घर को शांति और न्याय के साथ चलाया, और पांडव परिवार के केंद्र बिंदु बनीं। उनकी बुद्धिमत्ता और दूरदर्शिता ने अक्सर पांडवों को उनके सबसे कठिन समय में मार्गदर्शन किया।",
          "द्रौपदी का हस्तिनापुर के दरबार में चीरहरण भारतीय पौराणिक कथाओं की सबसे प्रसिद्ध घटनाओं में से एक है। जब दुर्योधन और दुःशासन ने उन्हें अपमानित करने का प्रयास किया, तो द्रौपदी की भगवान कृष्ण में आस्था ने उनकी रक्षा की। अपमान के सामने उनकी अटूट आस्था और गरिमा अन्याय के खिलाफ प्रतिरोध का प्रतीक बन गई। इस क्षण को महाभारत में एक महत्वपूर्ण मोड़ माना जाता है, जो सीधे महान युद्ध की ओर ले जाता है।",
          "महाभारत में द्रौपदी असाधारण बुद्धिमत्ता, साहस और नैतिक स्पष्टता वाली महिला के रूप में उभरीं। वह केवल घटनाओं की गवाह नहीं थीं — वह एक सक्रिय भागीदार थीं जिन्होंने इतिहास की दिशा को आकार दिया। राजसभा में उनकी आवाज सुनी गई, और धर्म के बारे में उनके प्रश्नों ने सबसे बुद्धिमान बुजुर्गों को भी चुनौती दी। वह एक दार्शनिक, एक रानी और अपने आप में एक योद्धा थीं।",
          "रानी के रूप में, उन्होंने बुद्धिमानी और करुणा से शासन किया। पत्नी के रूप में, वह वफादार और समर्पित थीं। द्रौपदी की कहानी दुनिया भर की महिलाओं को प्रेरित करती रहती है। वह अन्याय के खिलाफ शाश्वत संघर्ष और अटूट विश्वास की शक्ति का प्रतिनिधित्व करती हैं।",
          "फर्रुखाबाद, प्राचीन पांचाल क्षेत्र में स्थित, इस पौराणिक राजकुमारी की स्मृति को संजोए हुए है। जिस भूमि पर द्रौपदी का जन्म और पालन-पोषण हुआ, वह हर भक्त के दिल में एक विशेष स्थान रखती है। जब हम फर्रुखाबाद की सड़कों पर चलते हैं, तो हम उसी भूमि पर चल रहे होते हैं जो कभी पांचाल साम्राज्य था — द्रौपदी की भूमि। उनकी विरासत केवल एक कहानी नहीं है; यह एक जीवित विरासत है जो हमें प्रेरित और मार्गदर्शन करती रहती है।"
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
      image: durvasa,
      english: {
        title: "Durvasa Rishi — The Powerful Ascetic",
        content: [
          "Maharishi Durvasa is one of the most fascinating and formidable figures in Indian spiritual tradition. Known for his intense tapasya (penance), extraordinary spiritual powers, and a temperament that could bless or curse with equal intensity, Durvasa Rishi remains a symbol of the transformative power of disciplined spiritual practice.",
          "According to local religious tradition, Maharishi Durvasa performed intense penance and spiritual practices right here on the banks of the Ganga at Panchal Ghat in Farrukhabad. This sacred location became his tapasthali — the place where he dedicated himself to the highest forms of spiritual discipline. The serene banks of the Ganga, with its constant flow and spiritual energy, provided the ideal environment for a sage seeking ultimate truth.",
          "Durvasa Rishi is often remembered for his quick temper and powerful curses. However, a deeper understanding reveals a more complex personality. His anger was not born of ego but of a deep commitment to truth and dharma. He blessed those who were righteous and punished those who strayed from the path of virtue. His blessings were equally powerful — they could transform destinies and grant immense spiritual power.",
          "His entire being was dedicated to the preservation of dharma, and his actions, though sometimes intense, always served a higher purpose. The Puranas and the Mahabharata contain many stories of Durvasa Rishi's encounters with kings, gods, and devotees. One of the most famous is his encounter with King Ambarisha, where his anger was pacified by the king's devotion to Lord Vishnu. Another story speaks of his interaction with Lord Indra, where he taught the king of the gods a lesson about pride and humility.",
          "These stories are not just tales — they are profound lessons about the importance of humility, devotion, and the power of spiritual practice. They remind us that true strength lies not in external power but in the mastery of the self. Durvasa Rishi's life is a testament to the transformative power of tapasya. Through intense discipline, control over the senses, and unwavering focus, he attained spiritual powers that were beyond ordinary comprehension.",
          "His life teaches us that spiritual growth requires dedication, patience, and an unwavering commitment to the truth. Today, as we stand at Panchal Ghat and look at the gentle flow of the Ganga, we are reminded of the great sage who once sat here in deep meditation. His spirit continues to inspire spiritual seekers from all over the world.",
          "The land of Farrukhabad, blessed by the presence of such a powerful sage, continues to radiate spiritual energy. It is a place where the ancient wisdom of the sages meets the modern seeker, offering a path to inner peace and self-realization."
        ]
      },
      hindi: {
        title: "दुर्वासा ऋषि — शक्तिशाली तपस्वी",
        content: [
          "महर्षि दुर्वासा भारतीय आध्यात्मिक परंपरा के सबसे आकर्षक और दुर्जेय व्यक्तियों में से एक हैं। अपनी तीव्र तपस्या, असाधारण आध्यात्मिक शक्तियों और ऐसे स्वभाव के लिए जो समान तीव्रता से आशीर्वाद और शाप दोनों दे सकता था, दुर्वासा ऋषि अनुशासित आध्यात्मिक अभ्यास की परिवर्तनकारी शक्ति का प्रतीक बने हुए हैं।",
          "स्थानीय धार्मिक परंपरा के अनुसार, महर्षि दुर्वासा ने फर्रुखाबाद के पंचाल घाट पर गंगा के तट पर तीव्र तपस्या और आध्यात्मिक साधना की थी। यह पवित्र स्थान उनकी तपस्थली बना — वह स्थान जहाँ उन्होंने स्वयं को आध्यात्मिक अनुशासन के उच्चतम रूपों के लिए समर्पित किया। गंगा के शांत तट, अपने निरंतर प्रवाह और आध्यात्मिक ऊर्जा के साथ, एक ऋषि के लिए आदर्श वातावरण प्रदान करते थे।",
          "दुर्वासा ऋषि को अक्सर उनके तीव्र स्वभाव और शक्तिशाली शापों के लिए याद किया जाता है। लेकिन गहन दृष्टि से देखें तो उनका व्यक्तित्व अधिक जटिल था। उनका क्रोध अहंकार से नहीं, बल्कि सत्य और धर्म के प्रति गहरी प्रतिबद्धता से पैदा हुआ था। उन्होंने धार्मिक लोगों को आशीर्वाद दिया और पुण्य के मार्ग से भटकने वालों को दंडित किया। उनके आशीर्वाद भी समान रूप से शक्तिशाली थे — वे नियति बदल सकते थे और असीम आध्यात्मिक शक्ति प्रदान कर सकते थे।",
          "उनका पूरा अस्तित्व धर्म के संरक्षण के लिए समर्पित था, और उनके कार्य, हालांकि कभी-कभी तीव्र, हमेशा एक उच्च उद्देश्य की सेवा करते थे। पुराणों और महाभारत में दुर्वासा ऋषि के राजाओं, देवताओं और भक्तों के साथ कई कहानियाँ हैं। सबसे प्रसिद्ध में से एक राजा अम्बरीष के साथ उनकी मुठभेड़ है, जहाँ राजा की भगवान विष्णु में भक्ति ने उनके क्रोध को शांत किया। एक अन्य कहानी भगवान इंद्र के साथ उनकी बातचीत की है, जहाँ उन्होंने देवताओं के राजा को अहंकार और विनम्रता का पाठ पढ़ाया।",
          "ये कहानियाँ केवल कथाएँ नहीं हैं — ये विनम्रता, भक्ति और आध्यात्मिक अभ्यास की शक्ति के महत्व के बारे में गहन सबक हैं। वे हमें याद दिलाती हैं कि सच्ची शक्ति बाहरी शक्ति में नहीं, बल्कि आत्म-संयम में है। दुर्वासा ऋषि का जीवन तपस्या की परिवर्तनकारी शक्ति का प्रमाण है। तीव्र अनुशासन, इंद्रियों पर नियंत्रण और अटूट एकाग्रता के माध्यम से, उन्होंने आध्यात्मिक शक्तियाँ प्राप्त कीं जो सामान्य समझ से परे थीं।",
          "उनका जीवन हमें सिखाता है कि आध्यात्मिक विकास के लिए समर्पण, धैर्य और सत्य के प्रति अटूट प्रतिबद्धता की आवश्यकता होती है। आज, जब हम पंचाल घाट पर खड़े होकर गंगा के कोमल प्रवाह को देखते हैं, तो हमें उस महान ऋषि की याद आती है जो कभी यहाँ गहन ध्यान में बैठे थे। उनकी आत्मा दुनिया भर के आध्यात्मिक साधकों को प्रेरित करती रहती है।",
          "फर्रुखाबाद की भूमि, ऐसे शक्तिशाली ऋषि की उपस्थिति से धन्य, आध्यात्मिक ऊर्जा का संचार करती रहती है। यह वह स्थान है जहाँ ऋषियों का प्राचीन ज्ञान आधुनिक साधक से मिलता है, और आंतरिक शांति और आत्म-साक्षात्कार का मार्ग प्रदान करता है।"
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
      image: buddha,
      english: {
        title: "Sankisa — The Place of Buddha's Descent",
        content: [
          "Sankisa, located about 37 kilometers from Farrukhabad, is one of the eight most important pilgrimage sites in Buddhism. According to Buddhist tradition, this is the place where Gautama Buddha descended from the heavenly realm after teaching the Abhidhamma to his mother, Mahamaya. This event is one of the most significant in Buddhist cosmology, symbolizing the connection between the divine and the earthly.",
          "The tradition describes a magnificent descent through three celestial stairways—one of gold, one of silver, and one made of jewels. Buddha descended through the central stairway, while Indra and Brahma accompanied him. This extraordinary event is why Sankisa became known as the place of Buddha's descent from the heavenly realm. The site is deeply revered by Buddhists worldwide.",
          "The Farrukhabad district administration records Sankisa as an important ancient city of the Panchala region. The Valmiki Ramayana also refers to Sankasya as the capital of Kushadhwaja, King Janaka's younger brother. This connection shows how the site has been significant across different traditions, bridging the gap between Hindu and Buddhist heritage.",
          "During the Mauryan period, Emperor Ashoka erected a pillar at Sankisa. The famous Elephant Capital from this pillar is one of the most recognizable archaeological objects associated with the site. The elephant symbolizes the strength and spread of Buddhism during Ashoka's reign. This capital is now preserved in the Sarnath Museum and is a masterpiece of Mauryan art.",
          "Chinese pilgrims Faxian and Xuanzang visited Sankisa centuries ago and recorded it as an important Buddhist pilgrimage centre. Xuanzang referred to the place as Kapitha in his travel records. Their accounts provide valuable historical evidence of Sankisa's importance and the vibrant Buddhist community that once flourished here.",
          "The Archaeological Survey of India has preserved the ancient remains at Sankisa. The site includes ancient mounds, stupa remains, and various Buddhist artifacts that tell the story of centuries of Buddhist presence in the region. Excavations have revealed layers of history, from the Mauryan period to the Gupta era.",
          "Today, Sankisa is a living pilgrimage destination. Buddhist temples and chaityas established by different countries including Myanmar, China, Sri Lanka, Cambodia, and Japan can be found here. Pilgrims from around the world visit to pay their respects and connect with the legacy of Buddha. The site stands as a testament to India's role in the development and spread of Buddhism across Asia.",
          "Sankisa represents the beautiful blend of ancient history and living faith. It is a place where the past and present coexist, and where the teachings of Buddha continue to inspire millions. The sacred land of Farrukhabad is proud to be the home of this extraordinary heritage site."
        ]
      },
      hindi: {
        title: "संकिसा — बुद्ध के अवतरण का पवित्र स्थल",
        content: [
          "संकिसा, फर्रुखाबाद से लगभग 37 किलोमीटर दूर स्थित, बौद्ध धर्म के आठ सबसे महत्वपूर्ण तीर्थ स्थलों में से एक है। बौद्ध परंपरा के अनुसार, यह वह स्थान है जहाँ गौतम बुद्ध अपनी माता महामाया को अभिधम्म का उपदेश देने के बाद स्वर्गीय लोक से धरती पर उतरे थे। यह घटना बौद्ध ब्रह्मांड विज्ञान में सबसे महत्वपूर्ण में से एक है, जो दिव्य और सांसारिक के बीच के संबंध का प्रतीक है।",
          "बौद्ध परंपरा में वर्णन मिलता है कि बुद्ध के लिए तीन सीढ़ियाँ बनाई गई थीं—एक सोने की, एक चाँदी की और एक रत्नों से बनी हुई। मध्य की सीढ़ी से बुद्ध पृथ्वी की ओर उतरे, जबकि इंद्र और ब्रह्मा उनके साथ थे। इसी कारण संकिसा को 'बुद्ध के अवतरण स्थल' के रूप में श्रद्धा से देखा जाता है। यह स्थल दुनिया भर के बौद्धों द्वारा गहराई से पूजनीय है।",
          "फर्रुखाबाद जिला प्रशासन के अनुसार संकिसा पांचाल क्षेत्र का एक प्राचीन नगर था। वाल्मीकि रामायण में संकस्या को राजा जनक के छोटे भाई कुशध्वज की राजधानी के रूप में वर्णित किया गया है। यह संबंध दिखाता है कि यह स्थल विभिन्न परंपराओं में कितना महत्वपूर्ण रहा है, जो हिंदू और बौद्ध विरासत के बीच सेतु का काम करता है।",
          "मौर्य सम्राट अशोक ने संकिसा में एक स्तंभ स्थापित किया था। इस स्तंभ का प्रसिद्ध हाथी-शीर्ष (Elephant Capital) इस स्थल की सबसे महत्वपूर्ण पुरातात्विक पहचान है। हाथी अशोक के शासनकाल में बौद्ध धर्म की शक्ति और प्रसार का प्रतीक है। यह शीर्ष अब सारनाथ संग्रहालय में संरक्षित है और मौर्य कला की उत्कृष्ट कृति है।",
          "चीनी यात्री फाहियान और ह्वेनसांग ने सदियों पहले संकिसा की यात्रा की थी और इसे एक महत्वपूर्ण बौद्ध तीर्थ केंद्र के रूप में वर्णित किया था। ह्वेनसांग ने अपने यात्रा वृत्तांत में इस स्थान को कपिथा के रूप में संदर्भित किया। उनके विवरण संकिसा के महत्व और यहाँ कभी फले-फूले बौद्ध समुदाय का बहुमूल्य ऐतिहासिक प्रमाण प्रदान करते हैं।",
          "भारतीय पुरातत्व सर्वेक्षण (ASI) ने संकिसा में प्राचीन अवशेषों को संरक्षित किया है। इस स्थल में प्राचीन टीले, स्तूप अवशेष और विभिन्न बौद्ध कलाकृतियाँ शामिल हैं जो क्षेत्र में सदियों की बौद्ध उपस्थिति की कहानी बताती हैं। उत्खननों ने मौर्य काल से गुप्त काल तक इतिहास की परतों को उजागर किया है।",
          "आज संकिसा एक जीवित तीर्थ स्थल है। यहाँ म्यांमार, चीन, श्रीलंका, कंबोडिया और जापान जैसे विभिन्न देशों द्वारा बनाए गए बौद्ध मंदिर और चैत्य स्थित हैं। दुनिया भर से तीर्थयात्री अपनी श्रद्धा अर्पित करने और बुद्ध की विरासत से जुड़ने के लिए यहाँ आते हैं। यह स्थल पूरे एशिया में बौद्ध धर्म के विकास और प्रसार में भारत की भूमिका के प्रमाण के रूप में खड़ा है।",
          "संकिसा प्राचीन इतिहास और जीवित आस्था के सुंदर मिश्रण का प्रतिनिधित्व करता है। यह वह स्थान है जहाँ अतीत और वर्तमान सह-अस्तित्व में हैं, और जहाँ बुद्ध की शिक्षाएँ लाखों लोगों को प्रेरित करती रहती हैं। फर्रुखाबाद की पवित्र भूमि इस असाधारण विरासत स्थल का घर होने पर गर्व करती है।"
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
      image: Cantt,
      english: {
        title: "Army Cantonment — The Legacy of Valour",
        content: [
          "Farrukhabad has a proud military heritage that dates back to the British colonial era when it served as an important garrison town. The Army Cantonment in Farrukhabad played a significant role in the region's history and continues to be an important military installation. It stands as a symbol of discipline, courage, and sacrifice.",
          "The strategic location of Farrukhabad, situated on the banks of the Ganga, made it an ideal location for military operations. The cantonment area became a center for troop movements, logistics, and military administration during the colonial period. The river provided both a natural defense and a vital supply route.",
          "The cantonment witnessed several historical events, including the 1857 Rebellion (First War of Indian Independence). Local regiments and soldiers played significant roles in various military campaigns, contributing to the rich martial traditions of the region. The stories of bravery and sacrifice from this era are still remembered with pride.",
          "The British established the cantonment in the 19th century as part of their defensive strategy in northern India. The location provided easy access to major waterways and trade routes, making it strategically important. The architecture of the cantonment, with its spacious bungalows and wide roads, still reflects the colonial era.",
          "After independence, the cantonment became an integral part of India's defense infrastructure. It has housed various military units, training centers, and support facilities that continue to serve the nation's defense needs with dedication and honor. The soldiers stationed here have participated in numerous national and international operations.",
          "The cantonment has also contributed to the local economy and culture. The disciplined military life, varied cultural influences, and the presence of army personnel from different parts of India have created a unique cultural blend in the region. The interaction between the military and civilian population has enriched the social fabric of Farrukhabad.",
          "The soldiers and officers stationed here have participated in numerous national and international operations, bringing pride to the region. Their stories of bravery and sacrifice are an inspiration to the local community. The cantonment is not just a military installation; it is a part of the identity of Farrukhabad.",
          "Today, the Army Cantonment in Farrukhabad remains an active military installation, playing a vital role in national security while maintaining its deep-rooted connection with the local population. It is a living testament to the enduring spirit of valour and service."
        ]
      },
      hindi: {
        title: "सेना छावनी — वीरता की विरासत",
        content: [
          "फर्रुखाबाद की एक गौरवशाली सैन्य विरासत है जो ब्रिटिश औपनिवेशिक युग से शुरू होती है, जब यह एक महत्वपूर्ण गैरीसन शहर था। फर्रुखाबाद में सेना छावनी ने क्षेत्र के इतिहास में महत्वपूर्ण भूमिका निभाई है और आज भी एक महत्वपूर्ण सैन्य स्थापना बनी हुई है। यह अनुशासन, साहस और बलिदान का प्रतीक है।",
          "गंगा के तट पर स्थित फर्रुखाबाद की सामरिक स्थिति ने इसे सैन्य अभियानों के लिए एक आदर्श स्थान बना दिया। औपनिवेशिक काल के दौरान छावनी क्षेत्र सैन्य अभियानों, रसद और सैन्य प्रशासन का केंद्र बन गया। नदी ने प्राकृतिक रक्षा और महत्वपूर्ण आपूर्ति मार्ग दोनों प्रदान किए।",
          "1857 के विद्रोह (प्रथम स्वतंत्रता संग्राम) सहित कई ऐतिहासिक घटनाओं ने इस छावनी को देखा। स्थानीय रेजिमेंटों और सैनिकों ने कई सैन्य अभियानों में महत्वपूर्ण भूमिका निभाई, जिससे क्षेत्र की समृद्ध योद्धा परंपराओं में योगदान मिला। इस युग की वीरता और बलिदान की कहानियाँ आज भी गर्व के साथ याद की जाती हैं।",
          "ब्रिटिशों ने 19वीं शताब्दी में उत्तरी भारत में अपनी रक्षा रणनीति के हिस्से के रूप में इस छावनी की स्थापना की थी। इस स्थान ने प्रमुख जलमार्गों और व्यापार मार्गों तक आसान पहुँच प्रदान की, जिससे यह सामरिक दृष्टि से महत्वपूर्ण हो गया। छावनी की वास्तुकला, अपने विशाल बंगलों और चौड़ी सड़कों के साथ, आज भी औपनिवेशिक युग को दर्शाती है।",
          "स्वतंत्रता के बाद, छावनी भारत की रक्षा बुनियादी ढाँचे का एक अभिन्न अंग बन गई। यहाँ विभिन्न सैन्य इकाइयाँ, प्रशिक्षण केंद्र और सहायक सुविधाएँ स्थित हैं जो समर्पण और गौरव के साथ राष्ट्र की रक्षा आवश्यकताओं की सेवा करती हैं। यहाँ तैनात सैनिकों ने कई राष्ट्रीय और अंतर्राष्ट्रीय अभियानों में भाग लिया है।",
          "छावनी ने स्थानीय अर्थव्यवस्था और संस्कृति में भी योगदान दिया है। अनुशासित सैन्य जीवन, विभिन्न सांस्कृतिक प्रभाव और भारत के विभिन्न भागों से आए सैनिकों की उपस्थिति ने क्षेत्र में एक अनोखी सांस्कृतिक विविधता पैदा की है। सैन्य और नागरिक आबादी के बीच बातचीत ने फर्रुखाबाद के सामाजिक ताने-बाने को समृद्ध किया है।",
          "यहाँ तैनात सैनिकों और अधिकारियों ने कई राष्ट्रीय और अंतर्राष्ट्रीय अभियानों में भाग लिया है, जिससे क्षेत्र को गौरव मिला है। उनके वीरता और बलिदान की कहानियाँ स्थानीय समुदाय के लिए प्रेरणा हैं। छावनी केवल एक सैन्य स्थापना नहीं है; यह फर्रुखाबाद की पहचान का एक हिस्सा है।",
          "आज फर्रुखाबाद की सेना छावनी एक सक्रिय सैन्य स्थापना बनी हुई है, जो स्थानीय आबादी के साथ अपने गहरे संबंधों को बनाए रखते हुए राष्ट्रीय सुरक्षा में महत्वपूर्ण भूमिका निभा रही है। यह वीरता और सेवा की स्थायी भावना का जीवित प्रमाण है।"
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
      image: neebkarori,
      english: {
        title: "Neem Karoli Baba — The Miracle Saint",
        content: [
          "Neem Karoli Baba, also known as Maharaj-ji, is one of the most beloved spiritual figures of modern times. Though he is widely associated with the state of Rajasthan and the famous Kainchi Dham ashram in Uttarakhand, his spiritual presence and influence have touched the lives of millions across the world. His teachings of love and service transcend all boundaries.",
          "Neem Karoli Baba's life and teachings are deeply connected to the spiritual traditions of Uttar Pradesh and the Gangetic plains. His philosophy of love, compassion, and selfless service resonates deeply with the traditions that have flourished along the banks of the Ganga for centuries. He often spoke of the importance of simple living and high thinking.",
          "Like the ancient sages who meditated at Panchal Ghat, Neem Karoli Baba emphasized the importance of devotion, surrender, and service. His famous words — 'Love everyone, serve everyone, remember God' — capture the essence of the spiritual tradition that has been alive in this region for millennia. His life was a living example of these principles.",
          "Neem Karoli Baba's teachings are simple yet profound. He taught that love is the highest form of worship and that service to others is service to God. His miracles were not meant to showcase his power but to inspire faith and devotion in his followers. He often said that the greatest miracle is a transformed heart.",
          "He was known to say that the path to God is through love and surrender. He emphasized that material possessions and worldly achievements are meaningless without love and compassion for others. His teachings have inspired countless spiritual seekers, including several prominent Western followers who helped spread his message across the world.",
          "Neem Karoli Baba's legacy continues to grow, with ashrams and spiritual centers across India and abroad carrying forward his message. His influence can be seen in the lives of his devotees, who continue to practice his teachings of love, service, and devotion. The Kainchi Dham ashram, where he spent much of his time, has become a major pilgrimage site.",
          "His connection to the spiritual traditions of the Gangetic plains reminds us that the wisdom of ancient sages is alive and relevant even in the modern world. The sacred land of Farrukhabad, with its deep spiritual heritage, continues to be a source of inspiration for seekers from all over the world.",
          "Neem Karoli Baba's life is a bridge between the ancient and the modern, between the Himalayas and the Gangetic plains. He showed that spirituality is not about renunciation but about embracing life with love and compassion. His legacy is a gift to humanity, and his teachings continue to guide millions on the path of love and service."
        ]
      },
      hindi: {
        title: "नीम करोली बाबा — चमत्कारी संत",
        content: [
          "नीम करोली बाबा, जिन्हें महाराज-जी के नाम से भी जाना जाता है, आधुनिक समय के सबसे प्रिय आध्यात्मिक व्यक्तियों में से एक हैं। हालाँकि वे मुख्यतः राजस्थान और उत्तराखंड के प्रसिद्ध कैंची धाम आश्रम से जुड़े हैं, लेकिन उनकी आध्यात्मिक उपस्थिति और प्रभाव ने दुनिया भर में लाखों लोगों के जीवन को छुआ है। प्रेम और सेवा की उनकी शिक्षाएँ सभी सीमाओं से परे हैं।",
          "नीम करोली बाबा का जीवन और शिक्षाएँ उत्तर प्रदेश और गंगा के मैदानों की आध्यात्मिक परंपराओं से गहराई से जुड़ी हुई हैं। प्रेम, करुणा और निस्वार्थ सेवा का उनका दर्शन उन परंपराओं के साथ गहराई से प्रतिध्वनित होता है जो सदियों से गंगा के तट पर फली-फूली हैं। वे अक्सर सरल जीवन और उच्च विचार के महत्व की बात करते थे।",
          "उन प्राचीन ऋषियों की तरह जिन्होंने पंचाल घाट पर ध्यान किया, नीम करोली बाबा ने भक्ति, समर्पण और सेवा के महत्व पर जोर दिया। उनके प्रसिद्ध शब्द — 'सभी से प्रेम करो, सभी की सेवा करो, भगवान को याद रखो' — उस आध्यात्मिक परंपरा का सार हैं जो सहस्राब्दियों से इस क्षेत्र में जीवित है। उनका जीवन इन सिद्धांतों का जीवंत उदाहरण था।",
          "नीम करोली बाबा की शिक्षाएँ सरल लेकिन गहन हैं। उन्होंने सिखाया कि प्रेम पूजा का सर्वोच्च रूप है और दूसरों की सेवा ईश्वर की सेवा है। उनके चमत्कारों का उद्देश्य अपनी शक्ति दिखाना नहीं था, बल्कि अपने अनुयायियों में आस्था और भक्ति जगाना था। वे अक्सर कहते थे कि सबसे बड़ा चमत्कार एक रूपांतरित हृदय है।",
          "वे कहा करते थे कि ईश्वर का मार्ग प्रेम और समर्पण के माध्यम से है। उन्होंने इस बात पर जोर दिया कि दूसरों के लिए प्रेम और करुणा के बिना भौतिक संपत्ति और सांसारिक उपलब्धियाँ अर्थहीन हैं। उनकी शिक्षाओं ने अनगिनत आध्यात्मिक साधकों को प्रेरित किया है, जिनमें कई प्रमुख पश्चिमी अनुयायी भी शामिल हैं जिन्होंने दुनिया भर में उनका संदेश फैलाने में मदद की।",
          "नीम करोली बाबा की विरासत बढ़ती जा रही है, भारत और विदेशों में आश्रम और आध्यात्मिक केंद्र उनके संदेश को आगे बढ़ा रहे हैं। उनका प्रभाव उनके भक्तों के जीवन में देखा जा सकता है, जो प्रेम, सेवा और भक्ति की उनकी शिक्षाओं का अभ्यास करते रहते हैं। कैंची धाम आश्रम, जहाँ उन्होंने अपना अधिकांश समय बिताया, एक प्रमुख तीर्थ स्थल बन गया है।",
          "गंगा के मैदानों की आध्यात्मिक परंपराओं से उनका संबंध हमें याद दिलाता है कि प्राचीन ऋषियों का ज्ञान आधुनिक दुनिया में भी जीवित और प्रासंगिक है। फर्रुखाबाद की पवित्र भूमि, अपनी गहरी आध्यात्मिक विरासत के साथ, दुनिया भर के साधकों के लिए प्रेरणा का स्रोत बनी हुई है।",
          "नीम करोली बाबा का जीवन प्राचीन और आधुनिक के बीच, हिमालय और गंगा के मैदानों के बीच एक सेतु है। उन्होंने दिखाया कि आध्यात्मिकता त्याग के बारे में नहीं है, बल्कि प्रेम और करुणा के साथ जीवन को अपनाने के बारे में है। उनकी विरासत मानवता के लिए एक उपहार है, और उनकी शिक्षाएँ लाखों लोगों को प्रेम और सेवा के मार्ग पर मार्गदर्शन करती रहती हैं।"
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
      image: shringi,
      english: {
        title: "Shringi Rishi — The Sage of Divine Power",
        content: [
          "Shringi Rishi is a revered figure in Indian mythology, known for his intense tapasya and extraordinary spiritual powers. His story is deeply connected to the ancient traditions of the Gangetic plains and the spiritual heritage of the Panchala region. He is often associated with the power of penance and the ability to influence destiny.",
          "According to ancient texts, Shringi Rishi was born with divine powers and possessed the ability to perform miracles. His intense penance and unwavering devotion to the divine made him one of the most respected sages of his time. He is believed to have performed a yajna that led to the birth of King Dasharatha's sons, including Lord Rama.",
          "The region of Farrukhabad, with its deep spiritual roots and connection to ancient sages, holds a special place in the tradition of Shringi Rishi. The sacred banks of the Ganga have witnessed the meditation and penance of countless sages, including Shringi Rishi. The land itself is said to be infused with the energy of these spiritual practices.",
          "Shringi Rishi's life exemplifies the power of dedicated spiritual practice. Through years of intense meditation, control over the senses, and unwavering focus on the divine, he attained extraordinary spiritual powers that inspired awe and devotion among his followers. His story is a reminder that true power comes from inner strength.",
          "His story reminds us that true spiritual growth requires patience, discipline, and unwavering dedication. The path of the sage is not easy, but it leads to the highest forms of knowledge and understanding. Shringi Rishi's life is a testament to the power of tapasya and the importance of staying true to one's spiritual path.",
          "Shringi Rishi's legacy continues to inspire spiritual seekers even today. His life is a testament to the power of tapasya and the importance of staying true to one's spiritual path. The sacred land of Farrukhabad, with its rich heritage of sages and spiritual traditions, carries forward this legacy with pride.",
          "As we walk along the banks of the Ganga and visit the sacred sites associated with ancient sages, we are reminded of the profound spiritual wisdom that has been passed down through generations. The land of Farrukhabad is not just a place on the map; it is a living spiritual entity that continues to guide and inspire.",
          "Shringi Rishi's story is a reminder that the ancient wisdom of India is timeless. It speaks to the universal human quest for meaning, purpose, and connection with the divine. His legacy is a gift to all of humanity, and his teachings continue to light the path for seekers of truth."
        ]
      },
      hindi: {
        title: "शृंगी ऋषि — दिव्य शक्ति के ऋषि",
        content: [
          "शृंगी ऋषि भारतीय पौराणिक कथाओं में एक पूजनीय व्यक्तित्व हैं, जो अपनी तीव्र तपस्या और असाधारण आध्यात्मिक शक्तियों के लिए जाने जाते हैं। उनकी कहानी गंगा के मैदानों की प्राचीन परंपराओं और पांचाल क्षेत्र की आध्यात्मिक विरासत से गहराई से जुड़ी हुई है। वे अक्सर तपस्या की शक्ति और नियति को प्रभावित करने की क्षमता से जुड़े होते हैं।",
          "प्राचीन ग्रंथों के अनुसार, शृंगी ऋषि का जन्म दिव्य शक्तियों के साथ हुआ था और उनमें चमत्कार करने की क्षमता थी। उनकी तीव्र तपस्या और दिव्य के प्रति अटूट भक्ति ने उन्हें अपने समय के सबसे सम्मानित ऋषियों में से एक बना दिया। माना जाता है कि उन्होंने एक यज्ञ किया था जिसके कारण राजा दशरथ के पुत्रों, जिनमें भगवान राम भी शामिल थे, का जन्म हुआ।",
          "फर्रुखाबाद का क्षेत्र, अपनी गहरी आध्यात्मिक जड़ों और प्राचीन ऋषियों से संबंध के साथ, शृंगी ऋषि की परंपरा में एक विशेष स्थान रखता है। गंगा के पवित्र तटों ने अनगिनत ऋषियों के ध्यान और तपस्या को देखा है, जिनमें शृंगी ऋषि भी शामिल हैं। कहा जाता है कि यह भूमि इन आध्यात्मिक अभ्यासों की ऊर्जा से ओत-प्रोत है।",
          "शृंगी ऋषि का जीवन समर्पित आध्यात्मिक अभ्यास की शक्ति का उदाहरण है। वर्षों की तीव्र साधना, इंद्रियों पर नियंत्रण और दिव्य पर अटूट ध्यान के माध्यम से, उन्होंने असाधारण आध्यात्मिक शक्तियाँ प्राप्त कीं जिन्होंने उनके अनुयायियों में विस्मय और भक्ति पैदा की। उनकी कहानी एक अनुस्मारक है कि सच्ची शक्ति आंतरिक शक्ति से आती है।",
          "उनकी कहानी हमें याद दिलाती है कि सच्ची आध्यात्मिक वृद्धि के लिए धैर्य, अनुशासन और अटूट समर्पण की आवश्यकता होती है। ऋषि का मार्ग आसान नहीं है, लेकिन यह ज्ञान और समझ के उच्चतम रूपों की ओर ले जाता है। शृंगी ऋषि का जीवन तपस्या की शक्ति और अपने आध्यात्मिक मार्ग पर सच्चे रहने के महत्व का प्रमाण है।",
          "शृंगी ऋषि की विरासत आज भी आध्यात्मिक साधकों को प्रेरित करती है। उनका जीवन तपस्या की शक्ति और अपने आध्यात्मिक मार्ग पर सच्चे रहने के महत्व का प्रमाण है। फर्रुखाबाद की पवित्र भूमि, अपनी समृद्ध ऋषि परंपराओं के साथ, इस विरासत को गर्व से आगे बढ़ाती है।",
          "जब हम गंगा के तट पर चलते हैं और प्राचीन ऋषियों से जुड़े पवित्र स्थलों पर जाते हैं, तो हमें उस गहन आध्यात्मिक ज्ञान की याद आती है जो पीढ़ियों से चला आ रहा है। फर्रुखाबाद की भूमि नक्शे पर सिर्फ एक जगह नहीं है; यह एक जीवित आध्यात्मिक इकाई है जो मार्गदर्शन और प्रेरणा देती रहती है।",
          "शृंगी ऋषि की कहानी एक अनुस्मारक है कि भारत का प्राचीन ज्ञान कालातीत है। यह अर्थ, उद्देश्य और दिव्य के साथ संबंध की सार्वभौमिक मानवीय खोज की बात करती है। उनकी विरासत पूरी मानवता के लिए एक उपहार है, और उनकी शिक्षाएँ सत्य के साधकों के लिए मार्ग को प्रकाशित करती रहती हैं।"
        ]
      }
    }
  ];

  return (
    <div className="heritage-page">

      {/* ========== HERO SECTION ========== */}
      <section className="heritage-hero">
        <div className="hero-bg-overlay"></div>
        <div className="hero-grain"></div>
        
        {/* Floating Elements */}
        <div className="floating-element fe-1">📜</div>
        <div className="floating-element fe-2">🕉️</div>
        <div className="floating-element fe-3">✨</div>
        <div className="floating-element fe-4">🧘</div>

        <div className="heritage-hero-content">
          <h1 className="fade-up">Heritage of Farrukhabad</h1>
          <h3 className="fade-up delay-1">Ancient Stories. Sacred Land. Timeless Traditions.</h3>
          <p className="fade-up delay-2">The land of Panchala — where mythology, spirituality, and history converge.</p>
        </div>
      </section>

      {/* ========== QUICK STATS BAR ========== */}
      <section className="quick-stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-icon">📏</span>
              <div className="stat-info">
                <span className="stat-value">2181</span>
                <span className="stat-label">Sq. Km. Area</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">👥</span>
              <div className="stat-info">
                <span className="stat-value">18.85L+</span>
                <span className="stat-label">Population</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🗣️</span>
              <div className="stat-info">
                <span className="stat-value">Hindi</span>
                <span className="stat-label">Language</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🏘️</span>
              <div className="stat-info">
                <span className="stat-value">1007</span>
                <span className="stat-label">Villages</span>
              </div>
            </div>
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

      {/* ========== FAQ SECTION ========== */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">❓ Questions</span>
            <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              Everything you need to know about the rich heritage of Farrukhabad
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BACK TO ABOUT ========== */}
      <section className="back-to-about-section">
        <div className="container">
          <button 
            className="back-to-about-btn"
            onClick={() => navigate("/about")}
          >
            ← Back to About Page
          </button>
        </div>
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
                Back to Heritage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}