// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.toggle("dark", savedTheme === "dark");
} else {
  // Check system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  body.classList.toggle("dark", prefersDark);
}

// Toggle theme when button is clicked
themeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const nav = document.querySelector("nav");

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
}

// Tabs
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and panels
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    // Add active class to clicked button and corresponding panel
    button.classList.add("active");
    const tabId = button.dataset.tab;
    document.getElementById(tabId).classList.add("active");
  });
});

// Testimonial Slider
const testimonialTrack = document.querySelector(".testimonial-track");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
const cardCount = testimonialCards.length;

// Update slider position
function updateSlider() {
  testimonialTrack.style.transform = `translateX(-${currentIndex * 33.333}%)`;

  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % cardCount;
  updateSlider();
}

// Previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + cardCount) % cardCount;
  updateSlider();
}

// Event listeners
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

// Auto slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto slide on hover
testimonialTrack.addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

testimonialTrack.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: "smooth",
      });
    }
  });
});

// Add to cart functionality (simplified for demo)
const addToCartButtons = document.querySelectorAll(".pricing-card .button");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const productName =
      this.closest(".pricing-card").querySelector("h3").textContent;
    alert(`${productName} added to cart!`);
  });
});

// Responsive adjustments
function handleResponsiveLayout() {
  const isMobile = window.innerWidth <= 768;

  // Reset nav display when switching between mobile and desktop
  if (!isMobile && nav) {
    nav.style.display = "";
  }
}

// Run on load and resize
window.addEventListener("load", handleResponsiveLayout);
window.addEventListener("resize", handleResponsiveLayout);

// Language switching
const languageSelect = document.getElementById("language-select");
const i18nElements = document.body.querySelectorAll("*");

const translations = {
  en: {
    "nav.features": "Features",
    "nav.benefits": "Benefits",
    "nav.testimonials": "Testimonials",
    "nav.buyNow": "Buy Now",
    "hero.title": "Experience Authentic Ethiopian Cuisine",
    "hero.description":
      "Adet Shiro is a premium chickpea powder crafted for creating delicious, authentic Ethiopian Shiro Stew.",
    "hero.shopNow": "Shop Now",
    "hero.learnMore": "Learn More",
    "features.title": "Why Choose Adet Shiro?",
    "features.authentic": "100% Authentic",
    "features.authenticDesc":
      "Made with traditional Ethiopian recipes for genuine taste and flavor.",
    "features.quality": "High-Quality Ingredients",
    "features.qualityDesc":
      "Sourced from premium chickpeas and carefully blended spices.",
    "features.versatile": "Versatile Use",
    "features.versatileDesc":
      "Perfect for Shiro Stew and other Ethiopian dishes.",
    "features.flavor": "Rich Flavor",
    "features.flavorDesc":
      "Delivers the authentic taste of Ethiopian cuisine to your kitchen.",
    "benefits.title": "Experience Ethiopian Cuisine",
    "benefits.taste": "Authentic Taste",
    "benefits.tasteDesc":
      "Enjoy the genuine flavors of Ethiopian cuisine in your own home.",
    "benefits.nutritious": "Nutritious Meal",
    "benefits.nutritiousDesc":
      "High in protein and fiber, perfect for a healthy and satisfying meal.",
    "benefits.easy": "Easy Preparation",
    "benefits.easyDesc":
      "Create delicious Shiro Stew quickly and easily with our pre-mixed powder.",
    "benefits.cultural": "Cultural Experience",
    "benefits.culturalDesc":
      "Immerse yourself in Ethiopian culinary traditions with every meal.",
    "product.title": "Product Details",
    "product.ingredients": "Ingredients",
    "product.nutrition": "Nutrition Facts",
    "product.usage": "How to Use",
    "testimonials.title": "What Our Customers Say",
    "pricing.title": "Choose Your Package",
    "pricing.starter": "Starter Pack",
    "pricing.family": "Family Pack",
    "pricing.bulk": "Bulk Order",
    "pricing.popular": "Most Popular",
    "pricing.addToCart": "Add to Cart",
    "cta.title": "Ready to Experience Authentic Ethiopian Cuisine?",
    "cta.description":
      "Join thousands of satisfied customers who have made Adet Shiro an essential part of their kitchen.",
    "cta.button": "Get Your Adet Shiro Today",
    "footer.tagline": "Authentic Ethiopian Chickpea Powder",
    "footer.shop": "Shop",
    "footer.products": "Products",
    "footer.giftSets": "Gift Sets",
    "footer.bulkOrders": "Bulk Orders",
    "footer.learn": "Learn",
    "footer.aboutShiro": "About Shiro",
    "footer.recipes": "Recipes",
    "footer.blog": "Blog",
    "footer.support": "Support",
    "footer.faq": "FAQ",
    "footer.shipping": "Shipping",
    "footer.contactUs": "Contact Us",
    "footer.copyright": "© 2024 Adet Shiro. All rights reserved.",
  },
  am: {
    logo: "አደት ሽሮ",
    "nav.features": "ባህሪያት",
    "nav.benefits": "ጥቅሞች",
    "nav.testimonials": "አስተያየቶች",
    "nav.buyNow": "አሁን ይግዙ",
    "hero.title": "የእውነተኛ ኢትዮጵያዊ ምጥን ሽሮ",
    "hero.description": "አደት ሽሮ ጥዑም ሽሮ ወጥ ለማዘጋጀት የተሰራ ጥራት ያለው የሽምብራ ዱቄት ነው።",
    "hero.shopNow": "አሁን ይግዙ",
    "hero.learnMore": "ተጨማሪ ይወቁ",
    "features.title": "አደት ሽሮን ለምን መምረጥ አለብዎት?",
    "features.authentic": "100% እውነተኛ",
    "features.authenticDesc": "በባህላዊ የኢትዮጵያ የምግብ አሰራር የተዘጋጀ።",
    "features.quality": "ከፍተኛ ጥራት ያላቸው ግብዓቶች የያዘ",
    "features.qualityDesc": "ከጥራት ያለው ሽምብራና በጥንቃቄ ከተቀመሙ ቅመማ ቅመሞች የተዘጋጀ።",
    "features.versatile": "ለጤና ተስማሚ",
    "features.versatileDesc": "ለሽሮ ወጥና ለሌሎች የኢትዮጵያ ምግቦች ተስማሚ።",
    "features.flavor": "ልዩ ጣዕም",
    "features.flavorDesc": "የኢትዮጵያ ምግብ እውነተኛ ጣዕም ወደ ወጥ ቤትዎ ይመልሱ።",
    "benefits.title": "የኢትዮጵያ ምግብ ልምድ",
    "benefits.taste": "እውነተኛ ጣዕም",
    "benefits.tasteDesc": "በራስዎ ቤት ውስጥ እውነተኛ ጣዕም ይቀምሱ።",
    "benefits.nutritious": "영양가 있는 ምግብ",
    "benefits.nutritiousDesc": "ፕሮቲንና ፋይበር የበዛበት፣ ለጤናማና አርኪ ምግብ ተስማሚ።",
    "benefits.easy": "ቀላል አዘገጃጀት",
    "benefits.easyDesc": "በቅድመ-ቅልቅል ዱቄታችን ጣፋጭ የሽሮ ወጥ በፍጥነትና በቀላሉ ያዘጋጁ።",
    "benefits.cultural": "ባህላዊ ልምድ",
    "benefits.culturalDesc": "በእያንዳንዱ ምግብ ውስጥ የኢትዮጵያ የምግብ ባህል ይኑሩ።",
    "product.title": "የምርት ዝርዝሮች",
    "product.ingredients": "ግብዓቶች",
    "product.nutrition": "የአመጋገብ መረጃ",
    "product.usage": "እንዴት እንደሚጠቀሙ",
    "testimonials.title": "ደንበኞቻችን ምን ይላሉ",
    "pricing.title": "የእርስዎን ጥቅል ይምረጡ",
    "pricing.starter": "የጀማሪ ጥቅል",
    "pricing.family": "የቤተሰብ ጥቅል",
    "pricing.bulk": "በጅምላ ማዘዣ",
    "pricing.popular": "በጣም የተወደደ",
    "pricing.addToCart": "ወደ ዘንቢል ጨምር",
    "cta.title": "እውነተኛ የኢትዮጵያ ምግብ ለመቅመስ ዝግጁ ነዎት?",
    "cta.description":
      "አደት ሽሮን በወጥ ቤታቸው አሳሲ አካል ካደረጉ ሺዎች የሚቆጠሩ እርካታ ያገኙ ደንበኞች ጋር ይቀላቀሉ።",
    "cta.button": "የእርስዎን አደት ሽሮ ዛሬ ያግኙ",
    "footer.tagline": "እውነተኛ የኢትዮጵያ የሽምብራ ዱቄት",
    "footer.shop": "መገበያያ",
    "footer.products": "ምርቶች",
    "footer.giftSets": "የስጦታ ጥቅሎች",
    "footer.bulkOrders": "የጅምላ ማዘዣዎች",
    "footer.learn": "ይወቁ",
    "footer.aboutShiro": "ስለ ሽሮ",
    "footer.recipes": "የምግብ አዘገጃጀቶች",
    "footer.blog": "ብሎግ",
    "footer.support": "ድጋፍ",
    "footer.faq": "ተደጋግመው የሚጠየቁ ጥያቄዎች",
    "footer.shipping": "ማድረስ",
    "footer.contactUs": "አግኙን",
    "footer.copyright": "© 2024 አደት ሽሮ። መብቱ በህግ የተጠበቀ ነው።",
  },
  ti: {
    "nav.features": "ባህርያት",
    "nav.benefits": "ጥቕምታት",
    "nav.testimonials": "ናይ ዓማዊል ርእይቶታት",
    "nav.buyNow": "ሕጂ ይግዝኡ",
    "hero.title": "ናይ ሓቂ ኢትዮጵያዊ መግቢ ተመኩሮ",
    "hero.description":
      "አደት ሽሮ ጣዕሚ ዘለዎን ሓቀኛን ኢትዮጵያዊ ሽሮ ወጢ ንምድላው ዝተሰርሐ ዓይነተ-ፍሉይ ናይ ሽምብራ ዱቀት እዩ።",
    "hero.shopNow": "ሕጂ ይግዝኡ",
    "hero.learnMore": "ተወሳኺ ይፈልጡ",
    "features.title": "አደት ሽሮ ንምንታይ ክትመርጹ አለኩም?",
    "features.authentic": "100% ሓቀኛ",
    "features.authenticDesc": "ንሓቀኛ ጣዕምን ሽታን ብባህላዊ ኢትዮጵያዊ ምግቢ ኣሰራርሓ ዝተዳለወ።",
    "features.quality": "ልዑል ጥራት ዘለዎም ጥረ ነገራት",
    "features.qualityDesc": "ካብ ጥራት ዘለዎ ሽምብራን ብጥንቃቐ ካብ ዝተሓዋወሱ ቅመማት ዝተዳለወ።",
    "features.versatile": "ብዙሕ ኣገልግሎት ዝህብ",
    "features.versatileDesc": "ንሽሮ ወጥን ንካልኦት ኢትዮጵያዊ መግብታትን ዝኸውን።",
    "features.flavor": "ሃብታም ጣዕሚ",
    "features.flavorDesc": "ናይ ኢትዮጵያ መግቢ ሓቀኛ ጣዕሚ ናብ ዓሽጋኹም የምጽእ።",
    "benefits.title": "ናይ ኢትዮጵያ መግቢ ተመኩሮ",
    "benefits.taste": "ሓቀኛ ጣዕሚ",
    "benefits.tasteDesc": "ኣብ ገዛኹም ናይ ኢትዮጵያ መግቢ ሓቀኛ ጣዕሚ ተመኩሩ።",
    "benefits.nutritious": "ዝምግብ ምግቢ",
    "benefits.nutritiousDesc": "ፕሮቲንን ፋይበርን ዝበዝሖ፣ ንጥዕናን ዘዕግብን ምግቢ ዝኸውን።",
    "benefits.easy": "ቀሊል ኣሰራርሓ",
    "benefits.easyDesc": "ብቕድም ዝተሓወሰ ዱቀትና ጣዕሚ ዘለዎ ሽሮ ወጢ ብቕልጡፍን ብቐሊሉን የዳልዉ።",
    "benefits.cultural": "ባህላዊ ተመኩሮ",
    "benefits.culturalDesc": "ኣብ ነፍሲ ወከፍ ምግቢ ናይ ኢትዮጵያ ምግቢ ባህሊ ይነብሩ።",
    "product.title": "ናይ ፍርያት ዝርዝራት",
    "product.ingredients": "ጥረ ነገራት",
    "product.nutrition": "ናይ ኣመጋግባ ሓበሬታ",
    "product.usage": "ከመይ ገይርካ ከም እትጥቀመሉ",
    "testimonials.title": "ዓማዊልና እንታይ ይብሉ",
    "pricing.title": "ናትኩም ጥሙር ምረጹ",
    "pricing.starter": "ናይ ጀመርቲ ጥሙር",
    "pricing.family": "ናይ ስድራ ጥሙር",
    "pricing.bulk": "ብዓብዪ መጠን ምእዛዝ",
    "pricing.popular": "ብዝያዳ ዝፍተን",
    "pricing.addToCart": "ናብ ዓረብያ ወስኽ",
    "cta.title": "ሓቀኛ ኢትዮጵያዊ መግቢ ንምምካር ድሉዋት ዲኹም?",
    "cta.description":
      "አደት ሽሮ ኣብ ዓሽጎም ኣገዳሲ ክፋል ዝገበርዎ ኣሽሓት ዝኾኑ ዕጉባት ዓማዊል ተጸንበሩ።",
    "cta.button": "ናትኩም አደት ሽሮ ሎሚ ርኸቡ",
    "footer.tagline": "ሓቀኛ ኢትዮጵያዊ ናይ ሽምብራ ዱቀት",
    "footer.shop": "መደብር",
    "footer.products": "ፍርያት",
    "footer.giftSets": "ናይ ህያብ ጥሙራት",
    "footer.bulkOrders": "ብዓብዪ መጠን ምእዛዝ",
    "footer.learn": "ተማሃሩ",
    "footer.aboutShiro": "ብዛዕባ ሽሮ",
    "footer.recipes": "ናይ ምግቢ ኣሰራርሓታት",
    "footer.blog": "ብሎግ",
    "footer.support": "ደገፍ",
    "footer.faq": "ብተደጋጋሚ ዝሕተቱ ሕቶታት",
    "footer.shipping": "ምልኣኽ",
    "footer.contactUs": "ርኸቡና",
    "footer.copyright": "© 2024 አደት ሽሮ። መሰል ብሕጊ ዝተሓለወ እዩ።",
  },
  om: {
    "nav.features": "Amaloota",
    "nav.benefits": "Faayidaawwan",
    "nav.testimonials": "Ragaalee Maamiltoota",
    "nav.buyNow": "Amma Biti",
    "hero.title": "Nyaata Itoophiyaa Dhugaa Muuxannoo",
    "hero.description":
      "Adet Shiro shunkurtii mi'aawaa fi dhugaa ta'e Shiro Itiyoophiyaa qopheessuuf kan qophaa'e daakuu atara gaarii dha.",
    "hero.shopNow": "Amma Biti",
    "hero.learnMore": "Dabalata Baradhu",
    "features.title": "Maaliif Adet Shiro Filachuu Qabdu?",
    "features.authentic": "100% Dhugaa",
    "features.authenticDesc":
      "Dhandhamaa fi urgaa dhugaa argachuuf seera nyaata aadaa Itoophiyaatiin qophaa'e.",
    "features.quality": "Qabeenya Qulqullina Olaanaa",
    "features.qualityDesc":
      "Ataraa qulqullina qabu fi qayya of-eeggannoon walitti makame irraa qophaa'e.",
    "features.versatile": "Itti Fayyadama Baay'ee",
    "features.versatileDesc":
      "Shiro Ittoo fi nyaata Itoophiyaa biroof mijataa dha.",
    "features.flavor": "Dhandhamaa Badhaadhaa",
    "features.flavorDesc":
      "Dhandhamaa nyaata Itoophiyaa dhugaa gara kutaa nyaataa keessanii fida.",
    "benefits.title": "Nyaata Itoophiyaa Muuxannoo",
    "benefits.taste": "Dhandhamaa Dhugaa",
    "benefits.tasteDesc":
      "Dhandhamaa nyaata Itoophiyaa dhugaa mana keessan keessatti dhugoomsa.",
    "benefits.nutritious": "Nyaata Nyaatamaa",
    "benefits.nutritiousDesc":
      "Protiinoota fi faayibarii guutuu, nyaata fayyaalessa fi quufaa ta'eef mijataa dha.",
    "benefits.easy": "Qopheessuu Salphaadha",
    "benefits.easyDesc":
      "Daakuu keenya duraan walitti makameen Shiro Ittoo mi'aawaa ariitiidhaan fi salphaatti qopheessi.",
    "benefits.cultural": "Muuxannoo Aadaa",
    "benefits.culturalDesc":
      "Nyaata hundumaa keessatti aadaa nyaata Itoophiyaa keessa jiraadhu.",
    "product.title": "Ibsa Oomishaa",
    "product.ingredients": "Qabeenya",
    "product.nutrition": "Odeeffannoo Nyaataa",
    "product.usage": "Akkamitti Akka Itti Fayyadamtan",
    "testimonials.title": "Maamiltonni Keenya Maal Jedhu",
    "pricing.title": "Paakeejii Keessan Filadhaa",
    "pricing.starter": "Paakeejii Jalqabaa",
    "pricing.family": "Paakeejii Maatii",
    "pricing.bulk": "Ajaja Guddaa",
    "pricing.popular": "Kan Irra Jireessaan Jaallatamu",
    "pricing.addToCart": "Gara Gabbatee Itti Dabali",
    "cta.title": "Nyaata Itoophiyaa Dhugaa Muuxachuuf Qophii Dha?",
    "cta.description":
      "Adet Shiro kutaa nyaataa isaanii keessatti qooda murteessaa taasisan kumoota maamiltoota gammadoo waliin ta'aa.",
    "cta.button": "Adet Shiro Keessan Har'a Argadhaa",
    "footer.tagline": "Daakuu Ataraa Itoophiyaa Dhugaa",
    "footer.shop": "Bitaa",
    "footer.products": "Oomishaalee",
    "footer.giftSets": "Kennaa Walitti Qabame",
    "footer.bulkOrders": "Ajaja Guddaa",
    "footer.learn": "Baradhaa",
    "footer.aboutShiro": "Waa'ee Shiro",
    "footer.recipes": "Tartiiba Qophii",
    "footer.blog": "Bulooga",
    "footer.support": "Deeggarsa",
    "footer.faq": "Gaaffilee Yeroo Hedduu Gaafataman",
    "footer.shipping": "Erga",
    "footer.contactUs": "Nu Quunnamaa",
    "footer.copyright": "© 2024 Adet Shiro. Mirgi Hunda Seeraan Kan Eegame.",
  },
};

function changeLanguage(lang) {
  i18nElements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
}

languageSelect.addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});

// Initialize with English
changeLanguage("en");
