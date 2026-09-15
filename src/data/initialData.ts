import { ServiceItem, ProjectItem, IndustryItem, MaterialItem, SiteSettings, ClientLogo } from '../types';

export const initialSiteSettings: SiteSettings = {
  companyName: "SIGN ONE",
  companyNameAr: "ساين ون",
  tagline: "FROM CONCEPT TO CREATION",
  taglineAr: "من الفكرة إلى الإتقان",
  phone: "+966 56 000 3156",
  whatsapp: "+966560003156",
  emailPrimary: "one@signone.sa",
  emailPR: "pr@signone.sa",
  email: "one@signone.sa",
  address: "Head Office, Macaroni Street, Al-Azizia District, Jeddah, Kingdom of Saudi Arabia",
  addressAr: "المكتب الرئيسي، شارع المكرونة، حي العزيزية، جدة، المملكة العربية السعودية",
  workingHours: "Sunday – Thursday: 8:00 AM – 6:00 PM",
  workingHoursAr: "الأحد – الخميس: ٨:٠٠ ص – ٦:٠٠ م",
  stats: {
    projectsCount: "500+",
    satisfactionRate: "99.4%",
    coverageCities: "13+",
    factoryAreaM2: "3,500 m²"
  },
  logoUrl: "https://signone.sa/wp-content/uploads/2026/06/logo2.png",
  isoCertUrl: "https://signone.sa/wp-content/uploads/2026/06/AQC-IAS-Logo-ISO-9001-1.jpg",
  brochureUrl: "https://signone.sa/wp-content/uploads/2026/06/Signone_Brochure.pdf",
  fenceSolutionsUrl: "https://signone.sa/wp-content/uploads/2026/06/Fence-Solutions-SIGNONE.pdf"
};

export const initialServices: ServiceItem[] = [
  {
    id: "srv-building-signage",
    slug: "building-signage",
    number: "01",
    title: "Building Signage & Facade Integration",
    titleAr: "لوحات المباني والواجهات المعمارية",
    description: "High-impact building crowns, commercial towers, shopping plaza facades, and massive architectural skyline signage engineered for high altitude and wind resistance.",
    descriptionAr: "لوحات متكاملة لقمم الأبراج والمباني الشاهقة، وواجهات المجمعات التجارية، واللوحات الإعلانية الضخمة المصممة لمقاومة الرياح والارتفاعات العالية.",
    longDescription: "Sign One delivers complete building signage systems across Saudi Arabia. From design and structural calculation to manufacturing and high-altitude rigging, our tower crowns and facade signs command visual authority. Every structure complies with SASO and Civil Defense standards.",
    longDescriptionAr: "تقدم ساين ون حلولاً متكاملة للوحات المباني والأبراج في كافة أنحاء المملكة. من التصميم والدراسات الإنشائية إلى التصنيع والتركيب على أيدي فنيي تسلق معتمدين، لتمنح منشأتك حضوراً بصرياً مهيباً وفق أعلى اشتراطات السلامة والدفاع المدني.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/7.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/7.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/1.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/header_back.jpg"
    ],
    materials: ["Structural Steel Sub-Frame", "Heavy Aluminum Returns", "Grade 316 Stainless Steel", "IP68 Certified High-Bay LEDs"],
    materialsAr: ["هياكل حديدية إنشائية مجلفنة", "أجناب ألمنيوم ثقيل معزول", "ستانلس ستيل بحري 316", "إضاءات LED معتمدة بمعيار IP68"],
    applications: ["Commercial Towers", "Corporate Headquarters", "Shopping Centers & Malls", "Hotels & Mixed-Use Plazas"],
    applicationsAr: ["الأبراج التجارية", "المقرات الرئيسية للشركات", "المجمعات ومراكز التسوق", "الفنادق والمشاريع متعددة الاستخدامات"],
    features: [
      "Certified structural engineering & wind load stamped calculations",
      "High-altitude installation by licensed rigging specialists",
      "Samsung / Osram Tier-1 optic LEDs with 50,000+ hours lifespan",
      "Complete SASO & Civil Defense fire-safety approvals"
    ],
    featuresAr: [
      "مخططات وحسابات إنشائية معتمدة لأحمال الرياح والارتفاعات",
      "فريق تركيب متخصص ومرخص لأعمال التسلق ورافعات المشاريع",
      "إضاءات سامسونج وأوسرام أصلية بعمر تشغيلي يتجاوز 50,000 ساعة",
      "مطابقة شاملة لاشتراطات الدفاع المدني وهيئة المواصفات (SASO)"
    ]
  },
  {
    id: "srv-3d-letters",
    slug: "3d-letters",
    number: "02",
    title: "3D Letters & Dimensional Signage",
    titleAr: "حروف بارزة ثلاثية الأبعاد",
    description: "Precision-cut, high-impact dimensional letters crafted from stainless steel, aluminum, brass, or acrylic for corporate facades and interiors.",
    descriptionAr: "حروف بارزة فائقة الدقة والوضوح مصنوعة من الفولاذ المقاوم للصدأ، الألمنيوم، النحاس أو الأكريليك لواجهات الشركات والتصاميم الداخلية.",
    longDescription: "Sign One engineers and manufactures custom 3D letters that elevate physical architectural spaces. Utilizing 5-axis CNC routing and robotic fiber-laser cutters, every stroke delivers millimeter perfection, engineered to withstand the demanding Saudi climate with UV-resistant coatings and weather-sealed returns.",
    longDescriptionAr: "تقوم ساين ون بهندسة وتصنيع حروف ثلاثية الأبعاد مخصصة ترتقي بالمساحات المعمارية والتجارية. بالاعتماد على أحدث مكائن الليزر والقص الرقمي خماسي المحاور، نضمن دقة مليمترية مطلقة ومقاومة فائقة للمناخ الصحراوي ودرجات الحرارة العالية.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp",
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/6.jpg"
    ],
    materials: ["Grade 316 Stainless Steel", "Aircraft-Grade Aluminum", "Cast Acrylic", "Architectural Brass"],
    materialsAr: ["ستانلس ستيل درجة 316", "ألمنيوم عالي الكثافة", "أكريليك مصبوب نقي", "نحاس معماري مصقول"],
    applications: ["Corporate Headquarters", "Luxury Retail Boutiques", "Commercial Plazas", "Interior Reception Walls"],
    applicationsAr: ["المقرات الرئيسية للشركات", "متاجر التجزئة الفاخرة", "المجمعات التجارية", "جدران الاستقبال الداخلية"],
    features: [
      "CNC precision cutting up to 0.1mm tolerance",
      "Corrosion & desert heat resistant finishes",
      "Seamless invisible mounting brackets",
      "Lifetime structural integrity"
    ],
    featuresAr: [
      "قص رقمي بدقة مليمترية تصل إلى 0.1 مم",
      "معالجة متطورة ضد التآكل والحرارة وأشعة الشمس",
      "تثبيت هيكلي مخفي ومتقن",
      "متانة إنشائية تدوم طويلاً"
    ]
  },
  {
    id: "srv-led-channel",
    slug: "led-channel-letters",
    number: "03",
    title: "LED Channel Letters & Illuminated Signs",
    titleAr: "حروف مضيئة وقنوات LED",
    description: "Architectural channel letters with front-lit, reverse halo-lit, or dual-illuminated configurations using energy-efficient Tier-1 Samsung/Osram LEDs.",
    descriptionAr: "حروف مضيئة بقنوات مصممة معمارياً بإضاءة أمامية أو خلفية (هالو) أو مزدوجة باستخدام أحدث رقائق LED الموفرة للطاقة والمعتمدة عالمياً.",
    longDescription: "Illuminated signage is the nocturnal heartbeat of modern brands. Sign One uses automated computerized benders for crisp letter contours, welded aluminum housings for heat dissipation, and Samsung/Osram modules calibrated to exact chromatic temperatures (3000K to 6500K) with 50,000+ hour operating life.",
    longDescriptionAr: "اللوحات المضيئة تمثل البصمة البصرية الليلية للعلامات الرائدة. تستخدم ساين ون ماكينات الثني الآلي لضمان حواف حادة ومتناسقة، مع هياكل ألمنيوم ملحومة لتصريف الحرارة، ووحدات إضاءة متطورة بدرجات حرارة لونية دقيقة وعمر تشغيلي يتجاوز 50,000 ساعة.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp",
      "https://signone.sa/wp-content/uploads/2026/06/6.jpg"
    ],
    materials: ["Formed Aluminum Returns", "High-Transmission Opal Acrylic", "Tier-1 LED Modules IP68", "Mean Well Power Drivers"],
    materialsAr: ["أجناب ألمنيوم مشكلة آلياً", "أكريليك أوبال ناصع عالي النفاذية", "وحدات LED معيار IP68", "محولات طاقة Mean Well المعتمدة"],
    applications: ["Storefronts & Malls", "High-Rise Building Crowns", "Flagship Showrooms", "Hospitality Venues"],
    applicationsAr: ["واجهات المتاجر والمراكز التجارية", "قمم الأبراج والمباني الشاهقة", "صالات العرض الكبرى", "الفنادق والمطاعم الراقية"],
    features: [
      "Automated letter bending for micro-accurate kerning",
      "Uniform light transmission with zero hot spots",
      "IP67 / IP68 dust and moisture sealed modules",
      "Surge-protected Class 2 industrial power supplies"
    ],
    featuresAr: [
      "ثني آلي محوسب لضمان انسيابية الخطوط والشعارات المعقدة",
      "توزيع ضوئي متجانس تماماً بدون أي بقع داكنة",
      "عزل كامل للغبار والرطوبة بمعيار IP67/IP68",
      "محولات كهربائية محمية من تذبذب التيار والحرارة"
    ]
  },
  {
    id: "srv-cladding",
    slug: "aluminum-cladding",
    number: "04",
    title: "Aluminum Cladding (ACP) Installation",
    titleAr: "كلادينج ألمنيوم وواجهات معمارية",
    description: "Premium Aluminum Composite Panel (ACP) and solid cassette cladding solutions with civil defense fire-retardant A2/B1 certifications.",
    descriptionAr: "حلول تكسية متطورة بألواح الألمنيوم المركب (ACP) والواجهات المعدنية المعتمدة من الدفاع المدني بتصنيف مقاومة الحريق A2/B1.",
    longDescription: "Sign One is a recognized specialist in turnkey exterior transformation. We supply, groove, roll, and install fire-rated aluminum composite panels that protect buildings, enhance thermal insulation, and establish iconic architectural brand presence throughout Saudi Arabia.",
    longDescriptionAr: "تعد ساين ون جهة رائدة في تحويل الواجهات المعمارية الخارجية. نقوم بتوريد وتفريز وثني وتركيب ألواح الكلادينج المقاومة للحريق التي تحمي المباني وتعزز العزل الحراري وتمنح المنشآت مظهراً عصرياً مهيباً في شتى مدن المملكة.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/cladding-work-in-saudi-arabia-1200x800-1.webp",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/cladding-work-in-saudi-arabia-1200x800-1.webp",
      "https://signone.sa/wp-content/uploads/2026/06/9.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/2.jpg"
    ],
    materials: ["PVDF Coated A2 Fire-Rated ACP", "Solid 3mm Aluminum Sheets", "Structural Steel Sub-Frames", "Weatherproof Silicone Sealants"],
    materialsAr: ["ألواح كلادينج A2 بطلاء PVDF المقاوم للحريق", "صفائح ألمنيوم مصمتة سماكة 3 مم", "هياكل حديدية إنشائية مجلفنة", "معجون سيليكون إنشائي مقاوم للعوامل الجوية"],
    applications: ["Commercial Towers", "Automotive Dealerships", "Petrol Stations", "Industrial Facilities", "Corporate Complexes"],
    applicationsAr: ["الأبراج التجارية", "وكالات وصالات السيارات", "محطات الوقود النموذجية", "المنشآت الصناعية", "المجمعات المؤسسية"],
    features: [
      "Compliant with Saudi Civil Defense and SASO fire standards",
      "20-year coating warranty against chalking and fading",
      "Complete static wind load engineering calculations",
      "Integrated seamless signage provision"
    ],
    featuresAr: [
      "مطابق لاشتراطات الدفاع المدني وهيئة المواصفات والمقاييس (SASO)",
      "ضمان يصل إلى 20 عاماً على ثبات الألوان ومقاومة العوامل الجوية",
      "حسابات إنشائية دقيقة لأحمال الرياح والارتفاعات",
      "دمج متناسق للوحات الإعلانية مع الواجهة"
    ]
  },
  {
    id: "srv-fence-solutions",
    slug: "fence-solutions",
    number: "05",
    title: "Fence Solutions & Hoarding Systems",
    titleAr: "حلول الأسوار وأسوار المشاريع المؤقتة",
    description: "Engineered temporary fences, branded construction site hoarding, mega project billboards, chain link mesh, and heavy-duty perimeter boundaries.",
    descriptionAr: "أسوار إنشائية مؤقتة، أسوار المشاريع الإعلانية (هوردينج)، لوحات المشاريع الكبرى، شبك السياج الأمني، وأسوار الحماية للمواقع الإنشائية.",
    longDescription: "Sign One provides engineered perimeter fencing and hoarding systems across Saudi Arabia. Whether protecting multi-acre giga projects, securing urban developments, or turning construction sites into massive branding canvases, our fences are built to withstand severe wind loads and desert conditions. Download our specialized Fence Solutions catalog for complete technical details.",
    longDescriptionAr: "تقدم ساين ون حلولاً متكاملة للأسوار الإنشائية والهوردينج الإعلاني في جميع أنحاء المملكة. من تأمين المشاريع الكبرى، وحماية المواقع، إلى تحويل الأسوار المؤقتة إلى واجهات إعلانية عملاقة تعكس هوية المشروع وتتحمل العواصف الرملية والرياح الشديدة. يتوفر كتالوج حلول الأسوار المخصص للتحميل المباشر.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/5.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/5.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/3.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/8.jpg"
    ],
    materials: ["Corrugated Galvanized Iron (CGI) Sheets", "Structural Steel Box Sections", "Heavy Concrete Counterweights", "UV-Resistant Digital Vinyl Overlays"],
    materialsAr: ["ألواح حديد مجلفن مموج (CGI)", "قطاعات فولاذية إنشائية مربعة ومستطيلة", "كتل خرسانية مسلحة لتثبيت القواعد", "طباعة فينيل معالجة ضد أشعة الشمس المباشرة"],
    applications: ["Giga-Project Perimeters", "Commercial Building Construction", "Infrastructure Corridors", "Public Safety & Event Barriers"],
    applicationsAr: ["المشاريع الكبرى والمدن الذكية", "مشاريع المباني والأبراج قيد الإنشاء", "مسارات البنية التحتية", "حواجز الأمان المؤقتة للمؤتمرات والفعاليات"],
    features: [
      "Engineered wind-load resistance with concrete ballast blocks",
      "Full-height continuous seamless graphic branding",
      "Rapid modular assembly, relocation, and site dismantle",
      "Compliant with Saudi municipal & Royal Commission safety specs"
    ],
    featuresAr: [
      "مقاومة عالية للرياح بفضل أوزان وقواعد خرسانية مدروسة",
      "تغطية جرافيكية إعلانية متصلة بدون فواصل بصرية",
      "سرعة التركيب والنقل وإعادة الاستخدام في مواقع جديدة",
      "مطابقة لاشتراطات أمان البلديات والهيئة الملكية"
    ]
  },
  {
    id: "srv-internal-signs",
    slug: "internal-signs",
    number: "06",
    title: "Internal, Door & Room Signage",
    titleAr: "لوحات داخلية ولوحات الغرف والمكاتب",
    description: "Refined architectural door plaques, room numbers, executive desk plates, floor directories, and tactile ADA signs for corporate offices and hotels.",
    descriptionAr: "لوحات أبواب فاخرة، أرقام الغرف والأجنحة، لوحات المكاتب التنفيذية، أدلة الطوابق، ولوحات برايل الإرشادية للمقرات والمنشآت الفندقية.",
    longDescription: "Internal signage defines the interior prestige and operational clarity of modern facilities. Sign One crafts brushed aluminum, tempered glass, acrylic, and brass internal signage systems with interchangeable modular inserts for effortless updates.",
    longDescriptionAr: "تضفي اللوحات الداخلية لمسة من الرقي والأناقة على المكاتب والمستشفيات والفنادق. نصنع أنظمة إرشادية داخلية من الألمنيوم المفرش والزجاج السيكوريت والأكريليك مع إمكانية التحديث السريع لأسماء الموظفين والغرف.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/2.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/2.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp"
    ],
    materials: ["Anodized Aluminum Profiles", "Frosted & Clear Tempered Glass", "Cast Solid Acrylic", "Magnetic Interchangeable Inserts"],
    materialsAr: ["قطاعات ألمنيوم مؤكسدة", "زجاج سيكوريت مصنفر وشفاف", "أكريليك مصبوب عالي الشفافية", "شرائح مغناطيسية سهلة الاستبدال"],
    applications: ["Executive Office Suites", "Hotels & Luxury Resorts", "Medical Clinics & Hospitals", "Educational Campuses"],
    applicationsAr: ["المكاتب والأجنحة التنفيذية", "الفنادق والمنتجعات الفاخرة", "المستشفيات والمراكز الطبية", "الجامعات والمباني الأكاديمية"],
    features: [
      "Modular update system for easy personnel changeover",
      "Anti-glare surface treatments for crisp readability",
      "Concealed anti-theft architectural wall mountings",
      "Compliant with Saudi universal accessibility standards"
    ],
    featuresAr: [
      "نظام شرائح مرن لتحديث أسماء شاغلي المكاتب بسهولة",
      "معالجة مانعة للوهج وانعكاسات الإضاءة الداخلية",
      "تثبيت مخفي ومقاوم للعبث على الجدران والأبواب",
      "متوافقة مع معايير الوصول الشامل ولغة برايل"
    ]
  },
  {
    id: "srv-wayfinding",
    slug: "wayfinding",
    number: "07",
    title: "Road & Facility Directional Signage",
    titleAr: "لوحات إرشادية وتوجيهية للطرق والمنشآت",
    description: "Comprehensive directional signage networks, highway overhead gantries, campus road signs, and parking facility directional monoliths.",
    descriptionAr: "منظومة لوحات توجيهية وإرشادية متكاملة، لوحات الطرق العلوية، لافتات المجمعات والمخططات، ولوحات إرشاد مواقف السيارات.",
    longDescription: "Navigating complex campuses, healthcare centers, and corporate towers requires strategic visual hierarchy. Sign One provides human-centered wayfinding audits, system architecture, and multilingual fabrication adhering to Saudi universal accessibility guidelines.",
    longDescriptionAr: "تتطلب حركة الزوار في المجمعات والمستشفيات والأبراج دراسة هندسية دقيقة للمسارات ونقاط اتخاذ القرار. تقدم ساين ون دراسات المسار وتصنيع أنظمة الإرشاد ثنائية اللغة المتوافقة مع معايير الوصول الشامل بالمملكة.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/8.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/8.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/3.jpg"
    ],
    materials: ["Heavy Anodized Aluminum Extrusions", "High-Intensity Diamond Grade Reflective Sheeting", "Galvanized Steel Tubular Posts", "Weatherproof Powder Coat"],
    materialsAr: ["قطاعات ألمنيوم معمارية مسحوبة", "أفلام عاكسة ماسية عالية الإشعاع", "أعمدة حديد مجلفنة مطابقة لمواصفات النقل", "طلاء حراري مقاوم للعوامل الجوية"],
    applications: ["Industrial Cities & Logistics Parks", "University & Medical Campuses", "Airport & Transit Terminals", "Multi-Level Parking Garages"],
    applicationsAr: ["المدن الصناعية ومناطق الخدمات اللوجستية", "المدن الطبية والجامعات", "المطارات ومحطات النقل العام", "مواقف السيارات متعددة الأدوار"],
    features: [
      "3M Diamond Grade reflective sheeting for maximum night visibility",
      "Engineered foundation anchor cages for wind speed up to 150 km/h",
      "Bilingual Arabic-English typography optimized for legibility",
      "SASO & Ministry of Transport compliant specifications"
    ],
    featuresAr: [
      "أفلام 3M العاكسة الماسية لرؤية فائقة الوضوح ليلاً",
      "أساسات هندسية مدروسة لمقاومة رياح تصل إلى 150 كم/ساعة",
      "طباعة ثنائية اللغة مدروسة لسرعة القراءة أثناء القيادة",
      "مطابقة لاشتراطات وزارة النقل والهيئة السعودية للمواصفات"
    ]
  },
  {
    id: "srv-pylon-totem",
    slug: "pylon-totem-signs",
    number: "08",
    title: "Pylon & Monolith Totem Signs",
    titleAr: "لوحات بيلون وتوتم عملاقة",
    description: "High-visibility freestanding architectural pylons, highway monuments, and multi-tenant commercial directory totems engineered for extreme wind loads.",
    descriptionAr: "لوحات بيلون وتوتم إنشائية قائمة بذاتها، ونصب إعلانية ضخمة على الطرق السريعة ومداخل المجمعات التجارية مصممة لتحمل الرياح العاتية.",
    longDescription: "Pylon signs act as monumental landmarks that guide highway motorists and plaza visitors. Our structural engineering team performs full foundation soil analysis, finite element wind simulation, and structural steel reinforcement to ensure unmatched safety and towering brand authority.",
    longDescriptionAr: "تشكل لوحات التوتم والبيلون معالم معمارية شامخة ترشد قائدي المركبات على الطرق السريعة ومداخل المجمعات. يقوم فريقنا الهندسي بتحليل التربة واختبارات أحمال الرياح والحسابات الإنشائية للأساسات والحديد المجلفن لضمان أعلى مستويات الأمان.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/8.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/8.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/5.jpg"
    ],
    materials: ["Hot-Dip Galvanized Structural Steel", "Heavy Aluminum Skin Paneling", "Internal High-Bay LED Optics", "Anchor Bolt Cage Systems"],
    materialsAr: ["هياكل حديد مجلفنة على الساخن", "تكسيات ألمنيوم ثقيلة سماكة متطورة", "إضاءات LED داخلية ذات تركيز بصري عالي", "أقفاص تثبيت خرسانية مسبقة الصب"],
    applications: ["Shopping Malls & Retail Parks", "Business Districts", "Highway Corridors", "Automotive Centers"],
    applicationsAr: ["المجمعات ومراكز التسوق", "المدن المالية ومناطق الأعمال", "المداخل والشوارع الرئيسية السريعة", "مجمعات صالات السيارات"],
    features: [
      "Certified structural engineering drawings and calculation notes",
      "Multi-tenant illuminated tenant panels with easy access doors",
      "Lightning arrestor and integrated power distribution boards",
      "Reinforced concrete pile foundation design"
    ],
    featuresAr: [
      "مخططات وحسابات إنشائية معتمدة من مكاتب هندسية مرخصة",
      "أبواب صيانة مخفية لتسهيل صيانة الإضاءة والمحولات واستبدال أسماء المستأجرين",
      "تأريض كهربائي وحماية مدمجة من الصواعق",
      "تصميم قواعد خرسانية مسلحة مطابقة للمواصفات السعودية"
    ]
  },
  {
    id: "srv-stainless-metal",
    slug: "stainless-steel-metal-signage",
    number: "09",
    title: "Stainless Steel & Precision Metal Signs",
    titleAr: "لوحات استانلس ستيل ومعادن فاخرة",
    description: "Mirrored, brushed, titanium-gold coated, and chemically etched stainless steel logos for executive boardrooms and prestigious developments.",
    descriptionAr: "شعارات ولوحات من الفولاذ المقاوم للصدأ بتشطيبات برونزية وذهبية وفرشاة ميكانيكية أو نقش كيميائي دقيق لقاعات مجالس الإدارة والمشاريع الراقية.",
    longDescription: "Metal conveys permanence and institutional strength. Sign One crafts brushed, mirror-polished, and PVD titanium-nitride coated stainless steel and brass signage that never tarnishes, embodying the executive luxury demanded by Saudi corporate giants.",
    longDescriptionAr: "المعادن الأصيلة تعكس الرسوخ والمكانة الرفيعة. تقدم ساين ون تشطيبات بالستانلس ستيل المصقول والمفرش والمعالج بطبقات التيتانيوم PVD باللون الذهبي والأسود والنحاسي، بجمالية تدوم للأجيال.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp"
    ],
    materials: ["Titanium Gold Coated Steel", "Brushed Marine Stainless Steel", "Antiqued Architectural Bronze", "Anodized Architectural Alloys"],
    materialsAr: ["ستانلس ستيل مطلي تيتانيوم ذهبي", "ستانلس ستيل بحري مفرش", "برونز معماري معتق", "سبائك ألمنيوم مؤكسدة"],
    applications: ["VIP Entrances", "Board of Directors Chambers", "Diplomatic Quarters", "Law & Financial Firms"],
    applicationsAr: ["مداخل كبار الشخصيات", "قاعات مجالس الإدارة", "الحي الدبلوماسي والسفارات", "المكاتب القانونية والمالية"],
    features: [
      "Chemical acid etching for micro-text crispness",
      "PVD vacuum color deposit with 15-year luster guarantee",
      "Invisible stud welded mounting system",
      "Resistant to high salinity and industrial atmospheres"
    ],
    featuresAr: [
      "نقش كيميائي حمضي للنصوص الدقيقة والشعارات الدبلوماسية",
      "طلاء تفريغ هوائي PVD بضمان بريق ونقاء يدوم طويلاً",
      "نظام تثبيت بالمسامير الملحومة كهربائياً من الخلف دون أي تشويه للوجه",
      "مقاومة عالية للرطوبة الساحلية وأجواء المدن الصناعية"
    ]
  },
  {
    id: "srv-custom-fabrication",
    slug: "custom-fabrication",
    number: "10",
    title: "Custom Architectural Fabrication & Canopies",
    titleAr: "تصنيع معماري مخصص ومظلات",
    description: "Bespoke architectural canopies, entrance portals, sculptural brand monuments, decorative mashrabiya laser-cut screens, and site-specific installations.",
    descriptionAr: "مظلات وبوابات معمارية مخصصة، منحوتات وشعارات معمارية عملاقة، قواطع مشربية مزخرفة مقصوصة بالليزر، وتركيبات مصممة هندسياً حسب الطلب.",
    longDescription: "When an architectural vision defies standard formats, Sign One's specialized fabrication studio steps in. We combine 3D parametric modeling, structural steel fabrication, organic composite curving, and precision powder coating to realize one-of-a-kind physical landmarks.",
    longDescriptionAr: "عندما تتطلب الرؤية المعمارية خروجاً عن القوالب الجاهزة، تتولى ورش التصنيع المتخصصة في ساين ون تجسيدها. نمزج بين النمذجة البارامترية ثلاثية الأبعاد، وتشكيل المعادن الإنشائية، والقص الزخرفي لإنتاج معالم فريدة تنبض بالفخامة.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/9.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/9.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/1.jpg"
    ],
    materials: ["Laser-Cut Aluminum Screens", "Custom GRP / Fiberglass Forms", "Engineered Structural Trussing", "Architectural Cable Suspensions"],
    materialsAr: ["قواطع مشربية مقصوصة بالليزر", "أشكال فايبرجلاس وGRP مخصصة", "جمالونات وهياكل حديدية مدروسة", "كابلات تعليق معمارية مجلفنة"],
    applications: ["Landmark Roundabouts", "Exhibition Pavilions", "Cultural Districts", "Luxury Hotel Plazas"],
    applicationsAr: ["الميادين والدوارات التجميلية", "أجنحة المعارض الدولية", "المناطق الثقافية والتراثية", "ساحات ومداخل الفنادق الكبرى"],
    features: [
      "Parametric engineering and structural load simulations",
      "Custom tooling and mould creation in-house",
      "Full scale mockup review prior to volume fabrication",
      "Turnkey site erection with licensed crane logistics"
    ],
    featuresAr: [
      "محاكاة هندسية بارامترية وحسابات استاتيكية لأحمال الرياح والزلازل",
      "تصنيع قوالب التشكيل داخل مصنعنا لضمان الخصوصية والجودة",
      "تقديم عينات ومجسمات بالحجم الطبيعي للاعتماد قبل الإنتاج الكامل",
      "تركيب ميداني شامل بواسطة رافعات وفنيين معتمدين"
    ]
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: "proj-alula-sc",
    slug: "alula-sports-club-luminous-signage",
    title: "AlUla Sports Club — Luminous 3D Architectural Lion Emblem & Bilingual Signage",
    titleAr: "نادي العلا الرياضي — الشعار المعماري المضيء والحروف البارزة ثلاثية الأبعاد",
    description: "Iconic illuminated gold lion head architectural emblem and front/halo-lit 3D channel letters fabricated for AlUla Club under the heritage guidelines of the Royal Commission for AlUla.",
    descriptionAr: "شعار رأس الأسد المعماري المذهب والمضيء مع حروف ثلاثية الأبعاد بارزة بإضاءة هالو ناصعة لنادي العلا الرياضي، بتنفيذ هندسي فائق يعكس فخامة وجهة العلا التاريخية.",
    category: "Sports & Leisure / Architectural Illumination",
    categoryAr: "أندية رياضية وإضاءة معمارية",
    location: "AlUla / العلا",
    locationAr: "العلا، المملكة العربية السعودية",
    year: "2025",
    client: "AlUla Sports Club & Royal Commission for AlUla (RCU)",
    services: ["3D Letters", "LED Channel Letters", "Stainless Steel & Precision Metal Signs", "Building Signage"],
    materials: ["Titanium Gold Coated Marine Grade 316 Stainless Steel", "Cast High-Transmission Acrylic", "Tier-1 3000K & 6000K LED Modules", "Concealed Standoff Mountings"],
    materialsAr: ["ستانلس ستيل بحري 316 معالج بتيتانيوم ذهبي", "أكريليك مصبوب عالي النفاذية", "وحدات LED سامسونج IP68 مزدوجة الطيف", "تثبيت مخفي معزول إنشائياً"],
    challenge: "Preserving delicate heritage visual guidelines while achieving nocturnal visibility and zero hot spots across intricate lion facial geometry.",
    challengeAr: "الحفاظ على الهوية البصرية التراثية للعلا مع تحقيق إضاءة ليلية متجانسة تماماً دون أي بقع ضوئية على تفاصيل وجه الأسد الدقيقة.",
    solution: "Sub-millimeter 5-axis CNC router carving, hand-buffed titanium finishes, and custom engineered LED prism optics with thermal dissipation channels.",
    solutionAr: "تفريز رقمي دقيق خماسي المحاور، صقل يدوي للتيتانيوم الذهبي، وعدسات LED منشورية تضمن توهجاً هادئاً ومهيباً على الواجهة المعمارية.",
    designDescription: "A regal fusion of heritage Arabic typography and dimensional metallic emblem sculpture.",
    designDescriptionAr: "مزيج ملكي بين خط الثلث العربي المنحوت ومجسم الشعار الذهبي البارز.",
    manufacturingDescription: "Precision CNC fabrication and laser welding in Sign One clean-room facilities.",
    manufacturingDescriptionAr: "قص بالليزر الآلي وتلحيم بالأرجون داخل ورش ساين ون بالرياض.",
    installationDescription: "Architectural anchoring into solid facade with anti-vibration thermal rubber dampers.",
    installationDescriptionAr: "تثبيت إنشائي بمخمدات اهتزاز ومسامير استانلس ستيل غير قابلة للصدأ.",
    featuredImage: "/projects/alula_sc_sign_1789372074734.jpg",
    cutoutImage: "/projects/alula_sc_sign_1789372074734.jpg",
    signType: "Front & Halo-Lit 3D Gold Titanium Emblem",
    signTypeAr: "شعار بارز بتيتانيوم ذهبي بإضاءة هالو ناصعة",
    illuminationColor: "#D4AF37",
    letterDepth: "120 mm",
    hasCutoutMode: true,
    gallery: [
      "/projects/alula_sc_sign_1789372074734.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/1-1.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/header_back.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-dar-global",
    slug: "dar-global-headquarters-curtain-wall-signage",
    title: "DAR GLOBAL — Ultra-Luxury 3D Letters & Globe Emblem on Curtain Glass",
    titleAr: "دار جلوبال للتطوير العقاري — الحروف البارزة وشعار الكرة الأرضية على واجهة الزجاج",
    description: "Pure white 6000K illuminated 3D fabricated channel letters and iconic dimensional globe emblem mounted on structural double-height curtain glass.",
    descriptionAr: "حروف مضيئة ثلاثية الأبعاد وشعار الكرة الأرضية المصنع بستانلس ستيل أبيض ناصع مثبت على واجهة الزجاج الإنشائي لبرج دار جلوبال بالرياض.",
    category: "Corporate & Towers",
    categoryAr: "أبراج تجارية وشركات",
    location: "Olaya Financial District, Riyadh",
    locationAr: "حي العليا المالي، الرياض",
    year: "2025",
    client: "Dar Global Real Estate Development",
    services: ["Building Signage", "3D Letters", "LED Channel Letters"],
    materials: ["Powder-Coated Aluminum Alloy", "UV-Stabilized Opal Cast Acrylic", "Waterproof Samsung LEDs 6000K", "Structural Glass Spider Brackets"],
    materialsAr: ["ألمنيوم مشكل آلياً بطلاء بودرة حراري", "أكريليك أوبال معالج ضد الأشعة فوق البنفسجية", "إضاءات LED مقاومة للماء 6000 كلفن", "كوابيل تثبيت إنشائية للزجاج السيكوريت"],
    challenge: "Mounting high-mass illuminated 3D signage directly to a structural glass curtain wall without penetrating glazing seals or compromising acoustic ratings.",
    challengeAr: "تثبيت حروف بارزة ثقيلة على واجهة زجاجية مزدوجة الارتفاع دون الإخلال بعزل الزجاج الصوتي أو الحراري.",
    solution: "Custom engineered stainless steel glass-clamp spider brackets with load-bearing neoprene isolation pads and concealed perimeter conduits.",
    solutionAr: "كوابيل عنكبوتية من الستانلس ستيل مع وسائد عازلة من النيوبرين ومسارات أسلاك مخفية في فواصل الزجاج الإنشائي.",
    featuredImage: "/projects/dar_global_sign_1789371745942.jpg",
    cutoutImage: "/projects/dar_global_sign_1789371745942.jpg",
    signType: "Front & Halo-Lit 3D Letters on Structural Glass",
    signTypeAr: "حروف مضيئة بارزة مثبتة على واجهة الزجاج الإنشائي",
    illuminationColor: "#FFFFFF",
    letterDepth: "100 mm",
    hasCutoutMode: true,
    gallery: [
      "/projects/dar_global_sign_1789371745942.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/7.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/1.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/header_back.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-imc-hospital-pylon",
    slug: "international-medical-center-imc-pylon-wayfinding",
    title: "International Medical Center (IMC) — Monumental Entrance Pylon & Campus Wayfinding",
    titleAr: "المركز الطبي الدولي (IMC) — صرح التوتم الرئيسي وشبكة الإرشاد الطبي",
    description: "Freestanding brushed architectural aluminum monument totem featuring the iconic navy blue Islamic arch emblem and bilingual emergency campus wayfinding.",
    descriptionAr: "صرح بيلون معماري ضخم قائم بذاته من الألمنيوم المفرش يبرز شعار القوس الإسلامي الكحلي، مع شبكة لوحات توجيهية وإرشادية شاملة لمجمع المستشفى بجدة.",
    category: "Healthcare & Medical Campuses",
    categoryAr: "مستشفيات ومدن طبية",
    location: "Al Ruwais, Jeddah",
    locationAr: "حي الرويس، جدة",
    year: "2025",
    client: "International Medical Center (IMC)",
    services: ["Pylon & Totem Signs", "Wayfinding", "Custom Fabrication", "Stainless Steel & Precision Metal Signs"],
    materials: ["Anodized Architectural Brushed Aluminum", "Deep Blue Translucent Acrylic", "Internal High-Efficiency LED Grid", "Cast Foundation Anchor Cages"],
    materialsAr: ["ألمنيوم معماري مفرش مؤكسد", "أكريليك كحلي معالج عالي النقاء", "شبكة إضاءة داخلية متجانسة", "قفص مسامير وقواعد خرسانية مسلحة"],
    challenge: "Ensuring maximum long-range visual clarity from coastal avenues while resisting marine salt air corrosion and high humidity.",
    challengeAr: "ضمان أعلى درجات الوضوح من مسافات بعيدة لقائدي المركبات مع مقاومة رطوبة وأملاح البحر الأحمر لسنوات طويلة.",
    solution: "Marine-grade 6063-T6 aluminum alloys with clear chemical passivation, internal dehumidification breathers, and modular serviceable panels.",
    solutionAr: "استخدام سبائك ألمنيوم بحرية معالجة كيميائياً، مع فتحات تهوية مانعة لتكثف الرطوبة وأبواب صيانة سريعة.",
    featuredImage: "/projects/imc_pylon_sign_1789372091598.jpg",
    cutoutImage: "/projects/imc_pylon_sign_1789372091598.jpg",
    signType: "Architectural Brushed Aluminum Pylon Monolith",
    signTypeAr: "صرح بيلون معماري من الألمنيوم المفرش وشعار القوس الإسلامي",
    illuminationColor: "#0047AB",
    letterDepth: "300 mm Monolith",
    hasCutoutMode: true,
    gallery: [
      "/projects/imc_pylon_sign_1789372091598.jpg",
      "/projects/imc_emergency_sign_1789372292904.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-modon-authority",
    slug: "modon-authority-stone-perimeter-signage",
    title: "MODON — Saudi Industrial Cities Authority Stone Wall 3D Dimensional Signage",
    titleAr: "الهيئة السعودية للمدن الصناعية (مدن) — لوحة الحجر الطبيعي والحروف البارزة",
    description: "Corporate deep blue powder-coated 3D metal letters and institutional emblem mounted with invisible anchors on natural Riyadh sandstone facade.",
    descriptionAr: "حروف ثلاثية الأبعاد بارزة وشعار هيئة مدن باللون الأزرق المعتمد، مثبتة ببراغي كيميائية مخفية على جدار الحجر الطبيعي بالمنطقة الصناعية.",
    category: "Government & Industrial",
    categoryAr: "هيئات حكومية ومجمعات صناعية",
    location: "Industrial Cities, Central & Eastern Regions",
    locationAr: "المدن الصناعية، المنطقة الوسطى والشرقية",
    year: "2025",
    client: "MODON (Saudi Authority for Industrial Cities and Technology Zones)",
    services: ["Building Signage", "3D Letters", "Custom Fabrication"],
    materials: ["Marine Grade Aluminum Alloy", "Multi-Layer Electrostatic Powder Coating", "Stainless Steel M10 Anchor Pins", "Chemical Resin Anchors"],
    materialsAr: ["سبائك ألمنيوم بحرية سماكة عريضة", "طلاء إلكتروستاتيكي حراري متعدد الطبقات", "مسامير ستانلس ستيل M10 غير ظاهرة", "حقن راتنجي كيميائي معتمد"],
    challenge: "Drilling and securing heavy dimensional letters into porous, uneven natural sandstone without surface cracking or visible fastener heads.",
    challengeAr: "تثبيت حروف معدنية ثقيلة على أسطح حجر الرياض الطبيعي غير المنتظم دون تشقق الحجر أو ظهور أي مسامير تثبيت.",
    solution: "Optical laser alignment with calibrated diamond-core drilling and industrial chemical anchor adhesive for seamless monolithic appearance.",
    solutionAr: "موازنة بصرية بالليزر وثقب ببنطات ألماسية متخصصة مع حقن كيميائي إنشائي يمنح الحروف ثباتاً أبدياً ومظهراً فائق النقاء.",
    featuredImage: "/projects/modon_sign_1789372114515.jpg",
    cutoutImage: "/projects/modon_sign_1789372114515.jpg",
    signType: "3D Powder-Coated Dimensional Letters on Riyadh Sandstone",
    signTypeAr: "حروف بارزة معالجة حرارياً مثبتة كيميائياً على حجر الرياض الطبيعي",
    illuminationColor: "#0066CC",
    letterDepth: "80 mm",
    hasCutoutMode: true,
    gallery: [
      "/projects/modon_sign_1789372114515.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/cladding-work-in-saudi-arabia-1200x800-1.webp",
      "https://signone.sa/wp-content/uploads/2026/06/1.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-29-at-13.13.34.jpeg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-ihcc-parking",
    slug: "ihcc-parking-solutions-perforated-facade",
    title: "IHCC Parking Solutions — Laser-Perforated Architectural Cladding & 3D Letters",
    titleAr: "حلول مواقف IHCC — تكسية الواجهات المعدنية المثقبة والحروف البارزة",
    description: "Engineered white powder-coated perforated metal screen facade cladding paired with bold 3D powder-coated red and graphite dimensional lettering.",
    descriptionAr: "تكسية واجهة مواقف السيارات بألواح معدنية مثقبة بالليزر مطلية بطلاء بودرة أبيض حراري، مع حروف ثلاثية الأبعاد بارزة باللونين الأحمر والرمادي الداكن.",
    category: "Commercial & Cladding",
    categoryAr: "واجهات وكلادينج معدني مثقب",
    location: "Healthcare City, Jeddah",
    locationAr: "المدينة الطبية، جدة",
    year: "2025",
    client: "IHCC (International Hospital Construction Company)",
    services: ["Aluminum Cladding", "Building Signage", "3D Letters", "Custom Fabrication"],
    materials: ["Laser-Perforated Aluminum Cassettes", "PVDF Architectural Powder Coat", "Galvanized Steel Sub-Frame", "Formed 3D Metal Letters"],
    materialsAr: ["كاسيتات ألمنيوم مثقبة بالليزر", "طلاء حراري معتمد PVDF", "هيكل فولاذي مجلفن خلفي", "حروف ثلاثية الأبعاد مشكلة آلياً"],
    challenge: "Harmonizing natural airflow and shade ventilation requirements with bold, unmistakable corporate branding visibility.",
    challengeAr: "الجمع بين متطلبات التهوية الطبيعية لمبنى المواقف وبين تحقيق هوية بصرية قوية وأنيقة لعلامة IHCC.",
    solution: "Custom perforated aperture ratios providing 42% free airflow while creating a dense visual field for front-mounted dimensional typography.",
    solutionAr: "تصميم نمط تثقيب بنسبة تدفق هواء 42% يتيح التبريد الطبيعي ويوفر قاعدة معمارية متماسكة لتثبيت الحروف البارزة.",
    featuredImage: "/projects/ihcc_cladding_sign_1789372153007.jpg",
    cutoutImage: "/projects/ihcc_cladding_sign_1789372153007.jpg",
    signType: "Laser-Perforated Facade Screen with 3D Powder-Coated Metal Letters",
    signTypeAr: "واجهة سكرين معدنية مثقبة بالليزر مع حروف ثلاثية الأبعاد بطلاء بودرة",
    illuminationColor: "#FF2A2A",
    letterDepth: "60 mm",
    hasCutoutMode: true,
    gallery: [
      "/projects/ihcc_cladding_sign_1789372153007.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/cladding-work-in-saudi-arabia-1200x800-1.webp",
      "https://signone.sa/wp-content/uploads/2026/06/9.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/2.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-lifestyle-tower",
    slug: "lifestyle-commercial-tower-rooftop-sky-sign",
    title: "LIFESTYLE Commercial Tower — Rooftop Sky Sign & Halo-Lit High-Altitude Letters",
    titleAr: "برج لايف ستايل التجاري — لوحة تاج البرج الشاهق والإضاءة الليلية الخلفية",
    description: "Towering 3D channel letters installed at skyscraper crown altitude with calibrated reverse halo illumination and integrated commercial leasing typography.",
    descriptionAr: "حروف سكاي لاين ضخمة ثلاثية الأبعاد مثبتة على قمة البرج التجاري، بإضاءة هالو خلفية ناصعة 6500K تتحمل الرياح الشديدة على الارتفاعات العالية.",
    category: "Corporate & Towers",
    categoryAr: "أبراج تجارية وشركات",
    location: "King Fahd Road, Riyadh",
    locationAr: "طريق الملك فهد، الرياض",
    year: "2025",
    client: "Lifestyle Commercial Real Estate",
    services: ["Building Signage", "LED Channel Letters", "Custom Fabrication"],
    materials: ["Welded Structural Aluminum Box Letters", "Marine 316 Backing Plates", "High-Candela Samsung Halo LEDs", "Structural Truss Brackets"],
    materialsAr: ["صناديق حروف ألمنيوم ملحومة بالروبوت", "ألواح تثبيت استانلس ستيل 316", "إضاءات LED سامسونج عالية التدفق الضوئي", "كوابيل تثبيت فولاذية مجلفنة"],
    challenge: "Extreme wind buffeting and building oscillation at 80+ meter rooftop elevations requiring certified structural engineering notes.",
    challengeAr: "مقاومة سرعات الرياح والاهتزازات على ارتفاعات تتجاوز 80 متراً والالتزام التام بحسابات السلامة للدفاع المدني.",
    solution: "Reinforced gusseted back-plates bolted into structural roof beams with dual secondary safety tether cables and surge-protected driver panels.",
    solutionAr: "هياكل حديدية ثقيلة مثبتة بالجسور الخرسانية مع كابلات أمان ثانوية ومحولات كهربائية مركزية في غرف الصيانة المغلقة.",
    featuredImage: "/projects/lifestyle_tower_1789372177376.jpg",
    cutoutImage: "/projects/lifestyle_tower_1789372177376.jpg",
    signType: "High-Altitude Reverse Halo-Lit 3D Skyline Channel Letters",
    signTypeAr: "حروف سكاي لاين بارزة بإضاءة هالو خلفية لقمم الأبراج الشاهقة",
    illuminationColor: "#FFFFFF",
    letterDepth: "150 mm",
    hasCutoutMode: true,
    gallery: [
      "/projects/lifestyle_tower_1789372177376.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/7.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/1.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/header_back.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-caffeine-lab",
    slug: "caffeine-lab-coffee-roasters-storefront",
    title: "Caffeine Lab Coffee Roasters — Luminous 3D Storefront Channel Letters",
    titleAr: "كافيين لاب — حروف الواجهة التجارية المضيئة 3D والتصميم المعماري",
    description: "Crisp illuminated 3D front-lit letters spelling COFFEE and Caffeine Lab Coffee Roasters branding paired with botanical etched facade illustrations.",
    descriptionAr: "حروف مضيئة بارزة ثلاثية الأبعاد لكلمة COFFEE وهوية كافيين لاب، مع لمسات معمارية ورسومات نباتية أنيقة على زجاج الواجهة.",
    category: "Retail & Commercial",
    categoryAr: "تجزئة ومحلات تجارية",
    location: "Al Rawdah, Jeddah",
    locationAr: "حي الروضة، جدة",
    year: "2025",
    client: "Caffeine Lab Specialty Roasteries",
    services: ["3D Letters", "LED Channel Letters", "Illuminated Signage"],
    materials: ["High-Transmission Cast Opal Acrylic", "Matte Black Aluminum Returns", "Warm 3500K Samsung LEDs", "Mean Well Driver Systems"],
    materialsAr: ["أكريليك أوبال عالي النفاذية والصفاء", "أجناب ألمنيوم سوداء مطفية مشكلة بدقة", "إضاءة LED دافئة 3500 كلفن", "محولات كهربائية Mean Well معتمدة"],
    challenge: "Delivering inviting warm illumination that captures sidewalk pedestrian footfall while keeping energy consumption minimal.",
    challengeAr: "تقديم إضاءة دافئة جاذبة للمشاة والسيارات في شارع حيوي مع ترشيد استهلاك الطاقة وتفادي أي وهج مزعج.",
    solution: "Optically tuned LED spacing with wide 160° diffusion lenses behind 4mm cast acrylic faces.",
    solutionAr: "توزيع مدروس لوحدات LED بزاوية انتشار 160 درجة خلف أكريليك أوبال يمنح الحروف توهجاً ناعماً ومريحاً للنظر.",
    featuredImage: "/projects/caffeine_lab_sign_1789372131051.jpg",
    cutoutImage: "/projects/caffeine_lab_sign_1789372131051.jpg",
    signType: "Front-Lit Opal Acrylic 3D Letters with Matte Black Returns",
    signTypeAr: "حروف أكريليك أوبال ناصعة بإضاءة أمامية مع أجناب سوداء مطفية",
    illuminationColor: "#FFC870",
    letterDepth: "80 mm",
    hasCutoutMode: true,
    gallery: [
      "/projects/caffeine_lab_sign_1789372131051.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp",
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/6.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-scoop-beverage",
    slug: "scoop-beverage-mashrabiya-channel-letters",
    title: "SCOOP Beverage — Emerald Green 3D Letters & CNC Wooden Mashrabiya Panel",
    titleAr: "سكوب (ولد النحلة) — الحروف المضيئة بالزمردي ولوحة المشربية الخشبية",
    description: "Vibrant emerald green LED 3D channel letters installed over a precision laser-cut honeycomb wooden mashrabiya lattice panel on stainless steel wall.",
    descriptionAr: "حروف مضيئة بارزة بلون أخضر زمردي نيون مثبتة على لوحة مشربية خشبية مفرزة بنمط خلايا النحل لسلسلة سكوب لتقديم المشروبات.",
    category: "Retail & Commercial",
    categoryAr: "تجزئة ومحلات تجارية",
    location: "Riyadh",
    locationAr: "الرياض",
    year: "2025",
    client: "Walad Al-Nahla Beverage Co.",
    services: ["3D Letters", "LED Channel Letters", "Custom Fabrication"],
    materials: ["Emerald Green Diffusive Acrylic", "Laser-Cut Solid Oak Lattice", "Welded Brushed Steel Backplate", "Sealed IP68 Neon LEDs"],
    materialsAr: ["أكريليك مشتت بلون أخضر زمردي", "مشربية خشب بلوط مفرزة بالليزر", "لوح خلفي من الستانلس ستيل المفرش", "إضاءة نيون LED معزولة IP68"],
    challenge: "Integrating delicate organic wooden lattice patterns with modern bright green LED typography without burning wood edges.",
    challengeAr: "دمج تفاصيل المشربية الخشبية المعقدة مع الحروف المضيئة دون أي احتراق لحواف الخشب أو ظهور أسلاك التغذية.",
    solution: "Sub-millimeter CNC router profiling followed by fine hand sanding and hidden internal conduit channels through the lattice veins.",
    solutionAr: "قص آلي دقيق بماكينات CNC وصنفرة يدوية مع تمرير أسلاك التغذية الكهربائية داخل عروق المشربية الخشبية بشكل مخفي تماماً.",
    featuredImage: "/projects/scoop_mashrabiya_sign_1789372262274.jpg",
    cutoutImage: "/projects/scoop_mashrabiya_sign_1789372262274.jpg",
    signType: "Neon-Green LED Channel Letters over CNC Wood Honeycomb Panel",
    signTypeAr: "حروف LED زمردية مضيئة مركبة على لوح مشربية خشبي مفرز بالليزر",
    illuminationColor: "#10B981",
    letterDepth: "70 mm",
    hasCutoutMode: true,
    gallery: [
      "/projects/scoop_mashrabiya_sign_1789372262274.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp",
      "https://signone.sa/wp-content/uploads/2026/06/1-1.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-babulal-dining",
    slug: "babulal-indian-dining-interior-branding",
    title: "Babulal Indian Dining — Luxury Brass Wall Branding & Sculptural Decor",
    titleAr: "مطعم بابولال — هوية الجدران النحاسية والتشكيلات المعمارية الفاخرة",
    description: "Bespoke brass typography, hand-painted royal violet elephant mural portal, arched doorway cladding, and illuminated spice tube installations.",
    descriptionAr: "تنفيذ علامة بابولال بحروف نحاسية فاخرة، مع إطار جداري منقوش ورسم الفيل الملكي باللون البنفسجي، وتشكيلات أنابيب التوابل الهندسية المضيئة.",
    category: "Retail & Commercial",
    categoryAr: "مطاعم وضيافة راقية",
    location: "Northern Ring Road, Riyadh",
    locationAr: "الطريق الدائري الشمالي، الرياض",
    year: "2024",
    client: "Babulal Hospitality Group",
    services: ["Stainless Steel & Precision Metal Signs", "Internal Signs", "Custom Fabrication"],
    materials: ["PVD Brass & Gold Alloy", "Curved Solid Metal Portal Trim", "Tempered Acrylic Glass Tubes", "Warm Concealed Mood Lighting"],
    materialsAr: ["معادن مطلية تيتانيوم نحاسي PVD", "إطارات معدنية منحنية للأقواس", "أنابيب أكريليك شفافة معالجة", "إضاءات دافئة مخفية متناغمة مع الأجواء"],
    challenge: "Translating authentic South Asian imperial motifs into clean, modern architectural metals suitable for high-traffic luxury hospitality.",
    challengeAr: "ترجمة الزخارف التراثية إلى تشكيلات معدنية حديثة تتحمل التشغيل المستمر لمطعم فاخر وتحافظ على بريقها النحاسي.",
    solution: "Scratch-resistant PVD vacuum metallization and modular installation frames for effortless maintenance.",
    solutionAr: "معالجة حرارية بتقنية PVD المقاومة للخدش والتآكل مع هياكل تثبيت خفيفة وسهلة التنظيف والصيانة.",
    featuredImage: "/projects/babulal_interior_sign_1789372223342.jpg",
    cutoutImage: "/projects/babulal_interior_sign_1789372223342.jpg",
    signType: "Custom Brass Typography, Royal Mural Frame & Architectural Tubes",
    signTypeAr: "خط عربي ولاتيني نحاسي مخصص، مع إطار جداري فاخر وتشكيلات أنابيب التوابل",
    illuminationColor: "#FFB800",
    letterDepth: "40 mm",
    hasCutoutMode: true,
    gallery: [
      "/projects/babulal_interior_sign_1789372223342.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/6.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/1-1.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-giraffe-dining",
    slug: "giraffe-dining-suspended-neon-signage",
    title: "Giraffe Dining — Suspended Industrial Ceiling Neon & 3D Red Letters",
    titleAr: "مطعم قراف — حروف السقف المعلقة والنيون المعماري الأحمر",
    description: "Suspended double-sided red neon typography and fabricated channel letters in both Arabic and English hung from black architectural roof trusses.",
    descriptionAr: "حروف نيون حمراء ثلاثية الأبعاد باللغتين العربية والإنجليزية معلقة بدقة بأسلاك فولاذية على جمالونات السقف الصناعي الأسود لمطعم قراف.",
    category: "Retail & Commercial",
    categoryAr: "مطاعم وضيافة راقية",
    location: "Hospitality Avenue, Riyadh",
    locationAr: "حي الملقا، الرياض",
    year: "2025",
    client: "Giraffe Culinary Experiences",
    services: ["3D Letters", "LED Channel Letters", "Custom Fabrication"],
    materials: ["Flexible High-Lumen Red LED Neon", "Matte Black Extruded Aluminum Chassis", "Aircraft Grade Steel Suspension Wire", "Concealed Conduit Grippers"],
    materialsAr: ["نيون LED أحمر فائق السطوع", "شاسيه ألمنيوم مسحوب أسود مطفي", "وايرات تعليق فولاذية معتمدة", "مثبتات أسلاك ومخامد اهتزاز مخفية"],
    challenge: "Suspension stability and dead-level horizontal alignment across tall open-ceiling industrial dining spaces.",
    challengeAr: "ضمان استواء وثبات الحروف المعلقة في الهواء على ارتفاع 6 أمتار دون أي دوران أو ميلان ناتج عن حركة تيارات الهواء.",
    solution: "Four-point turnbuckle cable rigging with micro-adjustment tensioners and integrated black sleeve wiring.",
    solutionAr: "نظام تعليق رباعي النقاط مع وصلات شد دقيقة ومسارات كابلات كهربائية مغلفة باللون الأسود لتندمج تماماً مع السقف.",
    featuredImage: "/projects/giraffe_neon_sign_1789372240306.jpg",
    cutoutImage: "/projects/giraffe_neon_sign_1789372240306.jpg",
    signType: "Bilingual Suspended Ceiling Red Neon & Fabricated Aluminum Returns",
    signTypeAr: "حروف نيون حمراء معلقة بأسلاك فولاذية باللغتين العربية والإنجليزية",
    illuminationColor: "#FF0033",
    letterDepth: "60 mm",
    hasCutoutMode: true,
    gallery: [
      "/projects/giraffe_neon_sign_1789372240306.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp",
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/6.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-snood-meeting",
    slug: "snood-corporate-meeting-suite-plaque",
    title: "Snood Corporate Suite — Architectural Door Plaque & Islamic Geometric Inlay",
    titleAr: "سنود للاستثمار — لوحة الباب المعمارية بنقوش الزخرفة الإسلامية",
    description: "Brushed stainless steel and black matte cast acrylic door plaque featuring laser-etched Islamic star tessellation and interchangeable room designations.",
    descriptionAr: "لوحة باب تنفيذية مصنعة من الستانلس ستيل المفرش والأكريليك الأسود المطفي بنقوش هندسية إسلامية مفرزة بالليزر لقاعات اجتماعات سنود.",
    category: "Corporate & Towers",
    categoryAr: "لوحات داخلية وتوجيهية",
    location: "Corporate Plaza, Riyadh",
    locationAr: "مجمع المكاتب التنفيذية، الرياض",
    year: "2024",
    client: "Snood Investment & Advisory",
    services: ["Internal Signs", "Stainless Steel & Precision Metal Signs", "Custom Fabrication"],
    materials: ["Marine Grade 316 Brushed Stainless Steel", "Matte Black Cast Acrylic", "Precision Laser Engraving", "Architectural Standoff Fixtures"],
    materialsAr: ["ستانلس ستيل بحري 316 مفرش ناعم", "أكريليك مصبوب أسود مطفي فاخر", "حفر ونقش ليزري عالي الدقة", "مسامير تثبيت معمارية استانلس"],
    challenge: "Executing sub-millimeter geometric Islamic patterns on metallic surfaces without heat distortion.",
    challengeAr: "تنفيذ زخارف النجمة الإسلامية الدقيقة للغاية دون أي تأثر حراري لحواف المعدن أو الأكريليك.",
    solution: "Fiber laser micro-pulsing and multi-layer chemical bonding with tamper-proof blind rear fasteners.",
    solutionAr: "القص بالليزر الليفي النبضي عالي الدقة مع تثبيت خلفي مخفي يمنح اللوحة مظهراً فندقياً تنفيذياً.",
    featuredImage: "/projects/snood_meeting_sign_1789372276846.jpg",
    cutoutImage: "/projects/snood_meeting_sign_1789372276846.jpg",
    signType: "Brushed Marine Stainless Steel & Black Acrylic Laser-Etched Plaque",
    signTypeAr: "لوحة من الألمنيوم والستانلس المفرش مع أكريليك أسود منقوش بالليزر",
    illuminationColor: "#EEEEEE",
    letterDepth: "15 mm Plaque",
    hasCutoutMode: true,
    gallery: [
      "/projects/snood_meeting_sign_1789372276846.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/6.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/1-1.jpg"
    ],
    featured: false,
    published: true,
    isDemo: false
  },
  {
    id: "proj-factory-riyadh",
    slug: "signone-factories-riyadh",
    title: "Sign One Factories & Advanced Manufacturing Complex",
    titleAr: "مجمع مصانع ساين ون المتطورة بالرياض",
    description: "State-of-the-art 3,500 m² integrated signage, cladding, and metal manufacturing facility in Riyadh equipped with automated CNC, robotic laser cutters, and powder coating lines.",
    descriptionAr: "مجمع صناعي متكامل بمساحة 3,500 م² في الرياض لتصنيع اللوحات والكلادينج والمعادن، مجهز بأحدث مكائن CNC والقص بالليزر الآلي وخطوط الطلاء الحراري.",
    category: "Industrial & Manufacturing",
    categoryAr: "مجمعات صناعية وتصنيع",
    location: "Industrial City, Riyadh",
    locationAr: "المدينة الصناعية، الرياض",
    year: "2025",
    client: "Sign One Industrial Division",
    services: ["Building Signage", "Aluminum Cladding", "3D Letters", "Custom Fabrication"],
    materials: ["Heavy Galvanized Structural Steel", "PVDF Cladding Panels", "Industrial Robotic Lasers", "High-Bay LED Systems"],
    materialsAr: ["حديد إنشائي مجلفن على الساخن", "ألواح كلادينج PVDF", "أنظمة قص ليزر صناعية", "إضاءات LED صناعية عالية الكفاءة"],
    challenge: "Integrating multi-discipline production lines (structural steel, acrylic thermoforming, sheet metal benders, and clean-room electrical assembly) under ISO 9001 certified workflows.",
    challengeAr: "دمج خطوط إنتاج متعددة التخصصات (الحديد الإنشائي، التشكيل الحراري للأكريليك، ثني المعادن، وتجميع الدوائر الكهربائية) وفق معايير الجودة ISO 9001.",
    solution: "Custom architectural layout featuring automated overhead cranes, climate-controlled clean assembly zones, and dedicated structural stress test rigs.",
    solutionAr: "تصميم هندسي متطور للمصنع يضم روافع علوية ومناطق تجميع معزولة حرارياً وخالية من الغبار، ومنصات اختبار إجهاد ميكانيكي معتمدة.",
    designDescription: "Monolithic industrial identity showcasing our own facade cladding systems, bold dimensional logos, and sustainable daylight illumination.",
    designDescriptionAr: "واجهة صناعية مهيبة تجسد تقنيات الكلادينج التي نصنعها، مع شعارات ثلاثية الأبعاد بارزة وإضاءة تعكس القوة والجودة السعودية.",
    manufacturingDescription: "End-to-end robotic automation with capacity to handle mega projects across all provinces of the Kingdom.",
    manufacturingDescriptionAr: "أتمتة روبوتية شاملة تلبي متطلبات أضخم المشاريع الإنشائية والتجارية في شتى مناطق المملكة.",
    installationDescription: "Heavy crane logistics and turnkey structural engineering supervision.",
    installationDescriptionAr: "إشراف هندسي متكامل ورافعات ثقيلة لنقل وتركيب الهياكل الضخمة.",
    featuredImage: "https://signone.sa/wp-content/uploads/2026/06/1.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/1.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/1-1.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-29-at-13.13.34.jpeg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-cladding-saudi",
    slug: "aluminum-cladding-commercial-facade",
    title: "Saudi Architectural Aluminum Cladding (ACP) Project",
    titleAr: "مشروع تكسية واجهات الكلادينج المعمارية بالمملكة",
    description: "Premium A2 fire-retardant aluminum composite panel cladding covering modern commercial building facades, structural columns, and entrance portals.",
    descriptionAr: "مشروع تكسية واجهات معمارية كبرى بألواح الكلادينج المركب المقاوم للحريق تصنيف A2، مع تغليف الأعمدة وبوابات المداخل الرئيسية.",
    category: "Commercial & Cladding",
    categoryAr: "واجهات وتكسية كلادينج",
    location: "Riyadh & Central Region",
    locationAr: "الرياض والمنطقة الوسطى",
    year: "2025",
    client: "Commercial Development Authority",
    services: ["Aluminum Cladding", "Custom Fabrication", "Building Signage"],
    materials: ["Fire-Rated ACP Panels A2", "Extruded Aluminum Sub-Structure", "Structural Silicone Glazing", "Thermal Insulation Rockwool"],
    materialsAr: ["ألواح كلادينج A2 مقاومة للحريق", "هياكل فرعية من قطاعات الألمنيوم", "سيليكون إنشائي معتمد", "عازل صوف صخري حراري"],
    challenge: "Ensuring zero-expansion joints and flawless panel alignment under Saudi summer temperatures exceeding 50°C.",
    challengeAr: "ضمان استواء الألواح وتفادي فواصل التمدد الحراري تحت درجات حرارة صيفية تتجاوز 50 درجة مئوية.",
    solution: "Engineered floating sub-frame bracket system allowing thermal expansion while maintaining micron-level laser alignment.",
    solutionAr: "نظام تثبيت هندسي عائم يسمح بالتمدد الحراري الطبيعي مع الحفاظ على موازنة ليزرية دقيقة للغاية لخطوط الواجهة.",
    featuredImage: "https://signone.sa/wp-content/uploads/2026/06/cladding-work-in-saudi-arabia-1200x800-1.webp",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/cladding-work-in-saudi-arabia-1200x800-1.webp",
      "https://signone.sa/wp-content/uploads/2026/06/9.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/2.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-storefront-3d",
    slug: "storefront-3d-channel-letters-illumination",
    title: "Commercial Storefront 3D Channel Letters & Illumination",
    titleAr: "حروف ثلاثية الأبعاد مضيئة وواجهة متجر تجاري",
    description: "High-precision illuminated 3D channel letters featuring crisp front-lit acrylic faces, welded aluminum returns, and balanced nocturnal brightness.",
    descriptionAr: "حروف بارزة ثلاثية الأبعاد مضيئة لواجهة تجارية، بأوجه أكريليك ناصعة وأجناب ألمنيوم ملحومة وتوزيع إضاءة ليلي متناسق وفائق الجاذبية.",
    category: "Retail & Commercial",
    categoryAr: "تجزئة ومحلات تجارية",
    location: "Commercial Avenue, Riyadh",
    locationAr: "شارع تجاري رئيسي، الرياض",
    year: "2025",
    client: "Retail Enterprise Group",
    services: ["3D Letters", "LED Channel Letters", "Illuminated Signage"],
    materials: ["Precision Bended Aluminum Returns", "Cast Opal Acrylic", "Tier-1 Samsung LEDs IP68", "Industrial Mean Well Drivers"],
    materialsAr: ["أجناب ألمنيوم مشكلة آلياً بدقة", "أكريليك أوبال عالي النفاذية", "وحدات LED سامسونج IP68", "محولات طاقة Mean Well المعتمدة"],
    challenge: "Achieving high luminescent output with zero diode spotting across complex custom typography and logos.",
    challengeAr: "تحقيق شدة إضاءة نقية ومتجانسة دون أي ظهور للنقاط الضوئية على خطوط الخط العربي والشعارات الدقيقة.",
    solution: "Computer-calculated LED pitch spacing with wide-angle optical lenses and high-transmittance cast acrylic diffusers.",
    solutionAr: "حساب المسافات الضوئية رقمياً مع عدسات تشتيت عريضة الزاوية تمنح الحروف مظهراً ناصعاً ومريحاً للعين.",
    featuredImage: "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp",
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/6.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-hoarding-fences",
    slug: "perimeter-hoarding-fences-project-branding",
    title: "Perimeter Hoarding Fences & Project Site Branding",
    titleAr: "أسوار المشاريع الإنشائية والهوردينج الإعلاني المتصل",
    description: "Over 2.5 kilometers of engineered temporary project hoarding fences with full-height continuous branding graphics and heavy concrete ballast blocks.",
    descriptionAr: "تنفيذ أكثر من 2.5 كيلومتر من الأسوار الإنشائية المؤقتة والهوردينج الإعلاني المطبوع بالكامل، مع كتل خرسانية مسبقة الصب لمقاومة الرياح.",
    category: "Giga Projects & Construction",
    categoryAr: "مشاريع كبرى وأسوار إنشائية",
    location: "Urban Development Zone, Riyadh",
    locationAr: "منطقة تطوير عمراني كبرى، الرياض",
    year: "2025",
    client: "National Infrastructure Contractor",
    services: ["Fence Solutions", "Custom Fabrication", "Wayfinding"],
    materials: ["Galvanized Corrugated Iron (CGI)", "Reinforced Precast Concrete Blocks", "UV-Cured Vinyl Graphics", "Heavy Steel Frame Bracing"],
    materialsAr: ["ألواح حديد مجلفن مموج عالي المتانة", "كتل خرسانية مسلحة مسبقة الصب", "أفلام فينيل معالجة ضد أشعة الشمس", "تدعيمات فولاذية إنشائية"],
    challenge: "Extreme desert open-plain wind loads that demand structural integrity to prevent fence displacement or deformation.",
    challengeAr: "مقاومة الرياح العاتية في المناطق المفتوحة وضمان بقاء السور مستقيماً ومشدوداً بالكامل دون أي انحناء أو سقوط.",
    solution: "Engineered counterweight concrete footing spacing with calculated shear strength and wind-deflecting structural trussing.",
    solutionAr: "توزيع هندسي دقيق لقواعد الخرسانة مع جمالونات حديدية خلفية تمتص صدمات الرياح وتضمن استقرار السور التام.",
    featuredImage: "https://signone.sa/wp-content/uploads/2026/06/5.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/5.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/3.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/8.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-building-signage-crown",
    slug: "commercial-tower-crown-signage-riyadh",
    title: "Commercial High-Rise Building Signage & Facade Integration",
    titleAr: "لوحات الأبراج التجارية وتيجان المباني الشاهقة بالرياض",
    description: "Monumental building crown identity installed at high altitude with certified structural engineering and high-intensity night skyline illumination.",
    descriptionAr: "هوية إعلانية ومعمارية ضخمة لتاج برج تجاري تم تركيبها على ارتفاعات شاهقة بإشراف هندسي معتمد وإضاءة ليلية ساطعة وواضحة.",
    category: "Corporate & Towers",
    categoryAr: "أبراج تجارية وشركات",
    location: "King Fahd Corridor, Riyadh",
    locationAr: "محور طريق الملك فهد، الرياض",
    year: "2025",
    client: "Real Estate Holding Group",
    services: ["Building Signage", "LED Channel Letters", "Aluminum Cladding"],
    materials: ["Hot-Dip Galvanized Structural Steel", "Marine Grade 316 Stainless Steel", "IP68 High-Bay LEDs", "Weather-Sealed Aluminum Returns"],
    materialsAr: ["حديد إنشائي مجلفن على الساخن", "ستانلس ستيل بحري 316", "إضاءات LED مقاومة للأتربة والماء IP68", "ألمنيوم ثقيل معزول ومقاوم للحرارة"],
    challenge: "High-altitude installation with crane logistics and abseiling crews while ensuring 100% adherence to Civil Defense safety regulations.",
    challengeAr: "أعمال التركيب على ارتفاعات عالية مع تنظيم حركة الرافعات وفنيي التسلق والالتزام التام باشتراطات السلامة المهنية والدفاع المدني.",
    solution: "Modular factory pre-assembly and pre-wired sections allowing rapid overnight crane hoisting and mechanical bolt-locking.",
    solutionAr: "تجهيز وتجميع الهيكل مسبقاً في مصانع ساين ون واختبار التوصيلات الكهربائية قبل الرفع بالونش ليلاً لضمان سرعة التثبيت بأمان.",
    featuredImage: "https://signone.sa/wp-content/uploads/2026/06/7.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/7.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/1.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/header_back.jpg"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-road-pylon-totem",
    slug: "highway-pylon-facility-directional-monolith",
    title: "Highway Directional Pylon & Facility Monoliths",
    titleAr: "أبراج التوتم ولوحات المداخل العملاقة على الطرق السريعة",
    description: "14-meter freestanding monumental pylon structure designed for high-speed highway visual recognition, featuring illuminated directory panels.",
    descriptionAr: "لوحة توتم إنشائية عملاقة بارتفاع 14 متراً مصممة للوضوح الفائق لقائدي المركبات على الطرق السريعة، مع لوحات مضيئة لأسماء المستأجرين والخدمات.",
    category: "Infrastructure & Transportation",
    categoryAr: "طرق وبنية تحتية",
    location: "Western Expressway, Jeddah",
    locationAr: "طريق المطار السريع، جدة",
    year: "2025",
    client: "Commercial Logistics Hub",
    services: ["Pylon & Totem Signs", "Wayfinding", "Custom Fabrication"],
    materials: ["Hot-Dip Galvanized Structural Steel Columns", "Aluminum Skin Cladding", "Internal Modular Lighting", "Reinforced Concrete Foundation"],
    materialsAr: ["أعمدة فولاذية مجلفنة على الساخن", "تكسيات خارجية من الألمنيوم المعماري", "إضاءات LED داخلية قابلة للصيانة", "قواعد خرسانية مسلحة"],
    challenge: "Rigid soil parameters and extreme coastal wind shear calculations requiring custom pile footing design.",
    challengeAr: "طبيعة التربة الساحلية واشتراطات مقاومة رياح البحر القوية، مما استلزم دراسات جيوتقنية وقواعد خرسانية وتدية عميقة.",
    solution: "Finite element load modeling and deep anchor-bolt cage with sealed electrical service hatches for convenient maintenance.",
    solutionAr: "نمذجة إجهادات الرياح بالحاسب الآلي وتثبيت قفص مسامير فائق القوة، مع أبواب صيانة معزولة تمنح وصولاً سهلاً وآمناً للمحولات.",
    featuredImage: "https://signone.sa/wp-content/uploads/2026/06/8.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/8.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/5.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/3.jpg"
    ],
    featured: false,
    published: true,
    isDemo: false
  },
  {
    id: "proj-showroom-branding",
    slug: "retail-showroom-exterior-interior-branding",
    title: "Retail Showroom Exterior & Interior Branding System",
    titleAr: "الهوية المعمارية المتكاملة لمعارض وصالات العرض الكبرى",
    description: "Complete turnkey brand realization including exterior facade cladding, entrance signboards, interior directional signage, and reception metal logo.",
    descriptionAr: "تنفيذ متكامل للهوية يشمل تكسية الواجهات الخارجية، اللوحات الرئيسية للمداخل، المنظومة التوجيهية الداخلية، وشعار الاستقبال المعدني الفاخر.",
    category: "Luxury Retail",
    categoryAr: "صالات عرض وتجزئة",
    location: "Olaya Commercial District, Riyadh",
    locationAr: "حي العليا التجاري، الرياض",
    year: "2024",
    client: "Luxury Goods Retailer",
    services: ["3D Letters", "Internal Signs", "Stainless Steel & Precision Metal Signs", "Aluminum Cladding"],
    materials: ["PVD Titanium Gold Stainless Steel", "Frosted Acrylic Glass", "Brushed Aluminum Profiles", "Warm 3000K Concealed LEDs"],
    materialsAr: ["ستانلس ستيل مطلي تيتانيوم ذهبي PVD", "زجاج وأكريليك مصنفر", "قطاعات ألمنيوم مفرش ناعم", "إضاءات LED دافئة مخفية 3000 كلفن"],
    challenge: "Harmonizing diverse materials (gold titanium metal, ACP facade, and high-clarity acrylic) under a cohesive luxury visual language.",
    challengeAr: "تحقيق تناغم تام بين خامات متعددة (التيتانيوم الذهبي، كلادينج الواجهة، والأكريليك المصنفر) لتقديم تجربة بصرية فائقة الفخامة.",
    solution: "Sub-millimeter CNC fabrication coupled with optical laser leveling during installation to create seamless transitions.",
    solutionAr: "قص دقيق بمكائن CNC وموازنة ليزرية للمفاصل والزوايا لمنح المعرض رونقاً معمارياً استثنائياً يلفت أنظار المتسوقين.",
    featuredImage: "https://signone.sa/wp-content/uploads/2026/06/6.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/6.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/4.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp"
    ],
    featured: false,
    published: true,
    isDemo: false
  },
  {
    id: "proj-canopy-portal",
    slug: "architectural-canopy-cladding-portal",
    title: "Architectural Entrance Canopy & Custom Cladding Portal",
    titleAr: "مظلات المداخل المعمارية وبوابات التكسية المخصصة",
    description: "Striking architectural canopy structure featuring curved aluminum composite cladding, concealed drainage conduits, and integrated downlights.",
    descriptionAr: "مظلة وبوابة مدخل بتصميم معماري انسيابي مكسوة بألواح الكلادينج المنحني، مع مسارات تصريف أمطار مخفية ووحدات إضاءة مدمجة.",
    category: "Architectural Portals",
    categoryAr: "بوابات ومظلات معمارية",
    location: "Commercial Plaza, Eastern Province",
    locationAr: "مجمع تجاري، المنطقة الشرقية",
    year: "2024",
    client: "Commercial Real Estate Fund",
    services: ["Custom Fabrication", "Aluminum Cladding", "Building Signage"],
    materials: ["Structural Steel Box Girders", "Roll-Formed Curved ACP Sheets", "Integrated Downlighting IP65", "EPDM Waterproof Gaskets"],
    materialsAr: ["جسور حديدية إنشائية صندوقية", "ألواح كلادينج منحنية بدقة", "إضاءات سبوت لايت مدمجة IP65", "عوازل مياه ومطاط EPDM عالي الجودة"],
    challenge: "Complex geometric curvature with seamless joint lines while concealing all structural fasteners and drainage channels.",
    challengeAr: "تنفيذ انحناءات هندسية معقدة دون ظهور أي مسامير تثبيت أو مجاري تصريف الأمطار على الواجهة الظاهرة.",
    solution: "3D parametric modeling and CNC grooving in Sign One workshops, enabling factory curving and precision site interlocking.",
    solutionAr: "النمذجة ثلاثية الأبعاد والتفريز المحوسب بورش ساين ون، مما أتاح ثني الألواح وتجميعها في الموقع بسلاسة تامة.",
    featuredImage: "https://signone.sa/wp-content/uploads/2026/06/9.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/9.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/cladding-work-in-saudi-arabia-1200x800-1.webp",
      "https://signone.sa/wp-content/uploads/2026/06/2.jpg"
    ],
    featured: false,
    published: true,
    isDemo: false
  },
  {
    id: "proj-billboard-mega-board",
    slug: "project-billboards-construction-mega-boards",
    title: "Project Mega Boards & Construction Billboards",
    titleAr: "اللوحات الإعلانية العملاقة ولوحات المشاريع الكبرى",
    description: "Engineered mega billboard displays erected across major arterial highways and project boundaries, providing towering promotional visibility.",
    descriptionAr: "لوحات إعلانية ميجا بورد عملاقة مقامة على الطرق الحيوية وأطراف المشاريع الكبرى لتوفير أعلى معدلات الرؤية والانتشار الإعلاني.",
    category: "Outdoor Advertising",
    categoryAr: "إعلانات الطرق واللوحات العملاقة",
    location: "Expansion Corridor, Riyadh",
    locationAr: "طريق الثمامة والمسارات الجديدة، الرياض",
    year: "2025",
    client: "Master Developer Corporation",
    services: ["Fence Solutions", "Building Signage", "Custom Fabrication"],
    materials: ["High-Tensile Galvanized Steel Trusses", "Marine Plywood / CGI Backing", "High-Resolution Outdoor Vinyl", "Solar-Assisted LED Floods"],
    materialsAr: ["جمالونات فولاذية عالية الشد مجلفنة", "خلفيات حديد مجلفن وخشب معالج", "طباعة فينيل خارجية عالية الدقة", "كشافات إضاءة LED مدعومة بأنظمة الطاقة"],
    challenge: "Withstanding severe desert wind pressure on immense uninterrupted graphic surface areas.",
    challengeAr: "تحمل ضغوط الرياح الشديدة على مساحات إعلانية ضخمة مصمتة دون حدوث أي اهتزاز أو تمزق.",
    solution: "Rigid truss cross-bracing and calculated soil friction foundations complying with Ministry of Municipalities safety codes.",
    solutionAr: "تدعيم هندسي متقن بجمالونات ثلاثية وقواعد احتكاك أرضية معتمدة وفق معايير أمان البلديات.",
    featuredImage: "https://signone.sa/wp-content/uploads/2026/06/3.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/3.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/5.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/8.jpg"
    ],
    featured: false,
    published: true,
    isDemo: false
  },
  {
    id: "proj-commercial-plaza",
    slug: "commercial-plaza-entrance-facade-cladding",
    title: "Commercial Plaza Entrance Arch & Facade Cladding",
    titleAr: "قوس مدخل المجمع التجاري وواجهات الكلادينج المضيئة",
    description: "Turnkey exterior cladding renovation and entrance portal transformation for an established retail shopping destination.",
    descriptionAr: "تجديد وتطوير شامل لواجهات وقوس مدخل مجمع تجاري معاصر، شمل التكسية بألواح الكلادينج واللوحات المضيئة وشاشات الترحيب.",
    category: "Commercial Plazas",
    categoryAr: "مجمعات ومراكز تجارية",
    location: "Al Khobar Coastal Road, Eastern Province",
    locationAr: "طريق الكورنيش، الخبر",
    year: "2024",
    client: "Plaza Property Management",
    services: ["Aluminum Cladding", "Building Signage", "LED Channel Letters"],
    materials: ["Metallic Silver & Charcoal ACP", "Polycarbonate Light Panels", "Extruded Aluminum Profiles", "Exterior Grade Silicone"],
    materialsAr: ["كلادينج فضي ميتاليك ورصاصي داكن", "ألواح بولي كربونات مضيئة", "قطاعات ألمنيوم مسحوبة", "سيليكون عالي الجودة ومقاوم للرطوبة"],
    challenge: "Executing exterior renovation while keeping all retail shops and pedestrian entrances open and fully accessible.",
    challengeAr: "تنفيذ أعمال التجديد الخارجي مع بقاء كافة المتاجر والمداخل مفتوحة وآمنة للمتسوقين والزوار طوال فترة المشروع.",
    solution: "Staged sectional execution during off-peak hours with safety protection scaffolding tunnels and dedicated site marshals.",
    solutionAr: "العمل على مراحل متتابعة في أوقات الهدوء وتوفير ممرات حماية مسقوفة للجمهور مع تواجد دائم لمسؤولي السلامة.",
    featuredImage: "https://signone.sa/wp-content/uploads/2026/06/2.jpg",
    gallery: [
      "https://signone.sa/wp-content/uploads/2026/06/2.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/header_back.jpg",
      "https://signone.sa/wp-content/uploads/2026/06/cladding-work-in-saudi-arabia-1200x800-1.webp"
    ],
    featured: false,
    published: true,
    isDemo: false
  }
];

// Real verified client logos hosted on signone.sa
const VERIFIED_CLIENT_IDS = [1, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 17, 20, 21, 22, 27, 29, 34, 35, 36, 39, 40, 41, 42];

export const initialClients: ClientLogo[] = VERIFIED_CLIENT_IDS.map((num, i) => ({
  id: `client-${num}`,
  name: `Client Partner ${i + 1}`,
  nameAr: `شريك النجاح ${i + 1}`,
  logoUrl: `https://signone.sa/wp-content/uploads/2026/06/client${num}.jpg`
}));

export const initialIndustries: IndustryItem[] = [
  {
    id: "ind-corporate",
    slug: "corporate",
    title: "Corporate & Financial Towers",
    titleAr: "الشركات والأبراج المالية",
    description: "Authoritative exterior building crowns, monument entrance signs, and executive boardroom identities that communicate institutional strength.",
    descriptionAr: "شواخص وقمم أبراج مهيبة، وبوابات مداخل رئيسية، وتصاميم لقاعات مجالس الإدارة تعكس الرسوخ والمكانة الرفيعة للشركات.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    challenges: [
      "High altitude wind resistance on commercial towers",
      "Strict LEED environmental and low-energy lighting codes",
      "Executive level finish expectations with zero blemishes"
    ],
    challengesAr: [
      "مقاومة أحمال الرياح الشديدة على الارتفاعات الشاهقة للأبراج",
      "الالتزام بمعايير المباني الخضراء (LEED) وكفاءة استهلاك الطاقة",
      "تشطيبات راقية خالية من أي عيوب تلائم كبرى الشركات"
    ],
    solutions: [
      "Structural FEA wind calculations and stamped engineering certifications",
      "Tier-1 energy-saving LED optics with dimming photocells",
      "Titanium PVD and aerospace grade aluminum fabrication"
    ],
    solutionsAr: [
      "حسابات إنشائية دقيقة واعتمادات هندسية معتمدة من مكاتب استشارية",
      "وحدات LED موفرة للطاقة مع خلايا استشعار ضوئية للإضاءة التلقائية",
      "تشغيل معادن بطلاء التيتانيوم وسبيكة الألمنيوم عالية الكثافة"
    ],
    relatedServices: ["3d-letters", "led-channel-letters", "stainless-steel-metal-signage"]
  },
  {
    id: "ind-retail",
    slug: "retail",
    title: "Retail & Shopping Centers",
    titleAr: "التجزئة والمراكز التجارية",
    description: "High-impact storefront fascias, illuminated channel letters, and mall tenant signage that attract foot traffic and drive brand memorability.",
    descriptionAr: "واجهات متاجر جذابة، وحروف مضيئة متميزة، ولوحات مراكز تجارية مصممة لجذب المتسوقين وترسيخ هوية العلامة التجارية.",
    heroImage: "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp",
    challenges: [
      "Tight landlord opening deadlines and night-only mall installation windows",
      "Accurate brand PMS color matching through day and illuminated night",
      "High durability against customer wear and cleaning detergents"
    ],
    challengesAr: [
      "مواعيد افتتاح حرجة وفرص عمل ليلية محددة داخل المولات",
      "مطابقة درجات ألوان الهوية العالمية (PMS) نهاراً وليلاً بدقة",
      "مقاومة الاحتكاك ومواد التنظيف الدورية في المتاجر النشطة"
    ],
    solutions: [
      "Rapid pre-assembled fabrication reducing on-site installation to hours",
      "Spectrophotometer-verified translucent acrylics and color diffusers",
      "Scratch-resistant protective coatings and solid cast returns"
    ],
    solutionsAr: [
      "تجهيز مسبق كامل بالمصنع يقلص وقت التركيب بالموقع إلى ساعات معدودة",
      "مطابقة ألوان بأجهزة قياس الطيف الضوئي للأكريليك والأفلام",
      "طلاءات خاصة مقاومة للخدش والتآكل اليومي"
    ],
    relatedServices: ["led-channel-letters", "illuminated-signage", "aluminum-cladding"]
  },
  {
    id: "ind-hospitality",
    slug: "hospitality",
    title: "Hospitality & Luxury Resorts",
    titleAr: "الضيافة والمنتجعات الفاخرة",
    description: "Subtle architectural lighting, tactile materials, and heritage-inspired signage that blend seamlessly into 5-star hotel environments.",
    descriptionAr: "إضاءات معمارية ناعمة، ومواد حسية فاخرة، وتصاميم متناغمة مع الهوية التراثية والحديثة للفنادق والمنتجعات ذات الخمس نجوم.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    challenges: [
      "Harmonizing signage with delicate interior and exterior architecture",
      "Strict acoustic, glare, and ambient light restrictions",
      "Custom patina and organic materials requiring hand craftsmanship"
    ],
    challengesAr: [
      "التناغم التام مع الديكورات المعمارية الدقيقة والخامات الطبيعية",
      "تجنب الإبهار الضوئي والوهج والحفاظ على خصوصية الضيوف وراحتهم",
      "تعتيق يدوي ومعالجات حرفية خاصة للنحاس والبرونز والخشب"
    ],
    solutions: [
      "Concealed indirect halo LED diffusion at 2700K warm chromatic balance",
      "Blind mounting into marble, natural stone, and wood paneling",
      "Hand-finished patinated bronze and solid brass fabrication"
    ],
    solutionsAr: [
      "إضاءات خلفية غير مباشرة مخفية بدرجة دفء 2700 كلفن راقية",
      "تثبيت مخفي دون مسامير ظاهرة في الرخام والحجر الطبيعي والأخشاب",
      "معالجة يدوية متقنة للبرونز والنحاس الأصفر المعماري"
    ],
    relatedServices: ["stainless-steel-metal-signage", "wayfinding", "custom-fabrication"]
  },
  {
    id: "ind-healthcare",
    slug: "healthcare",
    title: "Healthcare & Medical Cities",
    titleAr: "الرعاية الصحية والمدن الطبية",
    description: "Clear, reassuring directional signage networks, antimicrobial finishes, and accessible wayfinding compliant with CBAHI and MoH standards.",
    descriptionAr: "أنظمة توجيه واضحة ومطمئنة، وتشطيبات مضادة للميكروبات، ولوحات وصول شامل مطابقة لمعايير وزارة الصحة والمركز السعودي (CBAHI).",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    challenges: [
      "Navigational anxiety for patients under distress",
      "Sanitizer resistance and strict clinical hygiene requirements",
      "Frequent department room changes needing modular updates"
    ],
    challengesAr: [
      "تخفيف توتر المرضى والزوار عبر إرشادات واضحة وسهلة الفهم",
      "تحمل مواد التعقيم الكيميائية الشديدة والمنظفات الطبية",
      "مرونة وسرعة تغيير أسماء الأطباء والأقسام دورياً"
    ],
    solutions: [
      "Bilingual typography with tested legibility ratios and color coding",
      "Non-porous antimicrobial powder coatings and sealed acrylics",
      "Modular slat systems allowing slip-in updates without tools"
    ],
    solutionsAr: [
      "خطوط ثنائية اللغة مدروسة المسافات وترميز لوني موحد للأجنحة",
      "أسطح غير مسامية معالجة ضد البكتيريا وسهلة التعقيم",
      "أنظمة شرائح ألمنيوم معيارية تسمح بالتبديل السريع دون أدوات"
    ],
    relatedServices: ["wayfinding", "illuminated-signage"]
  },
  {
    id: "ind-automotive",
    slug: "automotive",
    title: "Automotive & Dealerships",
    titleAr: "وكالات وصالات السيارات",
    description: "Large-format exterior brand monoliths, highway pylon totems, and showroom cladding engineered to global OEM franchise guidelines.",
    descriptionAr: "أبراج إعلانية عملاقة على الطرق السريعة، وواجهات كلادينج فاخرة مطابقة بدقة لأدلة الهوية المعتمدة من مصنعي السيارات العالميين.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    challenges: [
      "Rigorous global OEM brand audit compliance and tolerance checks",
      "Massive structural foundations required along highway corridors",
      "Extreme temperature cycling on dark exterior cladding panels"
    ],
    challengesAr: [
      "الالتزام الحرفي بالمواصفات القياسية لأدلة الوكالات العالمية",
      "حاجة لوحات الطرق السريعة إلى أساسات إنشائية عملاقة مقاومة للرياح",
      "تحمل الواجهات الخارجية للتمدد والتقلص الحراري في الصيف والشتاء"
    ],
    solutions: [
      "Precision computerized CNC routing guaranteeing exact OEM curves",
      "Deep concrete pile foundations engineered to SASO standards",
      "Floating cassette cladding brackets accommodating thermal expansion"
    ],
    solutionsAr: [
      "قص محوسب فائق الدقة يضمن مطابقة منحنيات الشعار المعتمدة",
      "قواعد خرسانية مسلحة مطابقة للمعايير الإنشائية السعودية",
      "أنظمة تعليق عائمة للكلادينج تمتص التمدد والانكماش الحراري بأمان"
    ],
    relatedServices: ["aluminum-cladding", "pylon-totem-signs", "led-channel-letters"]
  }
];

export const initialMaterials: MaterialItem[] = [
  {
    id: "mat-stainless",
    name: "Grade 316 Stainless Steel",
    nameAr: "ستانلس ستيل درجة 316",
    description: "Marine-grade austenitic chromium-nickel-molybdenum stainless steel offering superior corrosion resistance in high-humidity coastal and industrial atmospheres.",
    descriptionAr: "فولاذ مقاوم للصدأ بحري معالج بالكروم والنيكل والموليبدينوم يوفر حماية فائقة ضد التآكل والرطوبة والأملاح.",
    finish: "Mirror Polish, Satin Brushed, Bead-Blasted, PVD Titanium Gold / Black",
    finishAr: "مرآة مصقولة، فرشاة حريرية، ترميل ناعم، طلاء تيتانيوم ذهبي/أسود بالبخار PVD",
    applications: ["3D Dimensional Letters", "Monumental Totems", "Architectural Logos"],
    applicationsAr: ["حروف ثلاثية الأبعاد", "لوحات تذكارية وتوتم", "شعارات معمارية"],
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mat-aluminum",
    name: "Architectural Grade Aluminum",
    nameAr: "ألمنيوم معماري عالي الكثافة",
    description: "Lightweight, non-magnetic metal with exceptional strength-to-weight ratio, high thermal conductivity for LED cooling, and total rust immunity.",
    descriptionAr: "معدن خفيف الوزن عالي المتانة يتميز بتبديد حراري ممتاز لتبريد وحدات LED ومقاومة مطلقة للصدأ.",
    finish: "Anodized Silver/Bronze, Electrostatic Powder Coat (All RAL Colors)",
    finishAr: "أكسدة أنودية فضية/برونزية، طلاء بودرة حرارية كهروسكونية بجميع ألوان RAL",
    applications: ["Channel Letter Returns", "Custom Lightbox Frames", "Canopy Fascias"],
    applicationsAr: ["أجناب الحروف المضيئة", "إطارات الفوانيس الإعلانية", "واجهات المظلات"],
    image: "https://signone.sa/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-29-at-13.13.34-1.jpeg"
  },
  {
    id: "mat-acp",
    name: "Fire-Rated ACP Cladding (A2/B1)",
    nameAr: "كلادينج مقاوم للحريق معتمد (A2/B1)",
    description: "Engineered composite panels featuring non-combustible mineral core bonded between twin aluminum sheets with 70% Kynar 500 PVDF exterior coating.",
    descriptionAr: "ألواح مركبة تحتوي على حشوة معدنية غير قابلة للاشتعال بين لوحي ألمنيوم مع طلاء PVDF كينار 500 خارجي عالي التحمل.",
    finish: "Solid Matt, Metallic Gloss, Brushed Architectural, Woodgrain Textures",
    finishAr: "مطفي، لامع معدني، مفرش معماري، مظهر أخشاب طبيعية",
    applications: ["Building Envelopes", "Commercial Storefronts", "Pylon Towers"],
    applicationsAr: ["تكسية واجهات المباني", "واجهات المحلات التجارية", "أبراج التوتم والبيلون"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mat-acrylic",
    name: "High-Transmission Cast Acrylic",
    nameAr: "أكريليك مصبوب عالي النقاء",
    description: "Optically pure, weather-resistant polymethyl methacrylate offering 92% light transmittance, zero yellowing, and superior laser cutting precision.",
    descriptionAr: "بولي ميثيل ميثاكريلات نقي مقاوم للعوامل الجوية يوفر نفاذية ضوئية تصل إلى 92% مع ثبات لوني تام ومقاومة للاصفرار.",
    finish: "Opal White, Transparent Tinted, Matte Frost, High-Gloss Colors",
    finishAr: "أوبال مشتت ناصع، ملون شفاف، مصنفر مطفي، ألوان صريحة فائقة اللمعان",
    applications: ["Illuminated Letter Faces", "Internal Diffusers", "Tactile ADA Signage"],
    applicationsAr: ["واجهات الحروف المضيئة", "موزعات الإضاءة الداخلية", "لوحات برايل اللمسية"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mat-led",
    name: "Tier-1 Industrial LED Modules",
    nameAr: "وحدات LED صناعية معتمدة",
    description: "High-output, bin-sorted Samsung and Osram LED modules rated IP68 with integrated beam lenses for homogenous, streak-free illumination.",
    descriptionAr: "رقائق إضاءة عالية الكفاءة من سامسونج وأوسرام مصنفة بمعيار عزل IP68 مع عدسات بصرية مدمجة لتوزيع ضوء متجانس بدون خطوط.",
    finish: "3000K Warm, 4000K Neutral, 6500K Cool White, RGBW Dynamic Color",
    finishAr: "3000 كلفن دافئ، 4000 كلفن محايد، 6500 كلفن أبيض ناصع، وألوان متغيرة RGBW",
    applications: ["Channel Letter Lighting", "Halo Signage Backlights", "Architectural Accents"],
    applicationsAr: ["إضاءة الحروف الداخلية", "التوهج الخلفي (هالو)", "الخطوط المعمارية المضيئة"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "CONSULTATION & DISCOVERY",
    titleAr: "الاستشارة ودراسة الاحتياج",
    description: "We analyze brand identity guidelines, municipal regulations, visual sightlines, and structural scope to define the optimal architectural solution.",
    descriptionAr: "ندرس هوية العلامة التجارية، اشتراطات البلديات، خطوط الرؤية للموقع، والاحتياجات الهيكلية لتحديد الحل المعماري الأمثل."
  },
  {
    step: "02",
    title: "SITE SURVEY & 3D SCANNING",
    titleAr: "المعاينة الميدانية والمسح ثلاثي الأبعاد",
    description: "Our technical field team performs laser distance surveys, structural load checks, and electrical access assessments on-site across the Kingdom.",
    descriptionAr: "يقوم فريقنا الهندسي الميداني بالمسح الليزري للموقع، وفحص الأحمال الإنشائية، ونقاط التغذية الكهربائية في أي مدينة بالمملكة."
  },
  {
    step: "03",
    title: "DESIGN & 3D VISUALIZATION",
    titleAr: "التصميم والنمذجة الواقعية ثلاثية الأبعاد",
    description: "Photorealistic daytime and nighttime digital renderings placed on actual building photography for flawless stakeholder visualization.",
    descriptionAr: "تجسيد واقعي فوتوغرافي للنهار والليل مدمجاً على صور المبنى الفعلية لتمكين أصحاب القرار من معاينة النتيجة قبل التصنيع."
  },
  {
    step: "04",
    title: "STRUCTURAL ENGINEERING",
    titleAr: "الهندسة الإنشائية والمخططات التنفيذية",
    description: "Finite element wind load modeling, foundation cage design, electrical circuit schematics, and stamped municipal approval submissions.",
    descriptionAr: "حسابات أحمال الرياح، وتصميم القواعد الخرسانية، والمخططات الكهربائية التفصيلية، وتجهيز ملفات الاعتماد للجهات المختصة."
  },
  {
    step: "05",
    title: "IN-HOUSE MANUFACTURING",
    titleAr: "التصنيع الآلي في مصنعنا",
    description: "Robotic laser cutting, automated letter bending, certified MIG/TIG welding, electrostatic powder coating, and dust-free assembly.",
    descriptionAr: "القص بالليزر الآلي، الثني المحوسب، اللحام المعتمد، الطلاء بالبودرة الكتروستاتيكياً، والتجميع في بيئة معزولة ونظيفة."
  },
  {
    step: "06",
    title: "PROFESSIONAL INSTALLATION",
    titleAr: "التركيب الاحترافي الميداني",
    description: "Executed by certified rigging and abseiling crews with hydraulic cranes, laser leveling, safety barriers, and site coordination.",
    descriptionAr: "تنفيذ ميداني بأيدي فنيي تسلق وتركيب معتمدين مع رافعات هيدروليكية وموازين ليزرية والتزام صارم بإجراءات السلامة المهنية."
  },
  {
    step: "07",
    title: "QUALITY CONTROL & HANDOVER",
    titleAr: "ضبط الجودة والتسليم والضمان",
    description: "Thermal imaging electrical audit, lux illumination meter testing, as-built documentation, and comprehensive warranty handover.",
    descriptionAr: "فحص الدوائر بكاميرات حرارية، وقياس شدة الإضاءة بأجهزة اللوكس، وتسليم المخططات المنفذة مع شهادات الضمان المعتمدة."
  }
];

export const saudiCoverageCities = [
  { name: "Riyadh", nameAr: "الرياض", role: "Headquarters & Primary Manufacturing", roleAr: "المقر الرئيسي والمصنع المركزي", count: "260+ Projects" },
  { name: "Jeddah", nameAr: "جدة", role: "Western Region Operations Hub", roleAr: "مركز عمليات المنطقة الغربية", count: "120+ Projects" },
  { name: "Al Khobar & Dammam", nameAr: "الخبر والدمام", role: "Eastern Province Industrial & Commercial", roleAr: "عمليات المنطقة الشرقية والصناعية", count: "95+ Projects" },
  { name: "Makkah & Madinah", nameAr: "مكة المكرمة والمدينة المنورة", role: "Hospitality & Transit Terminals", roleAr: "مشاريع الضيافة ومحطات النقل", count: "45+ Projects" },
  { name: "NEOM & Red Sea", nameAr: "نيوم والبحر الأحمر", role: "Giga-Project Architectural Partnerships", roleAr: "المشاريع الكبرى والواجهات المعمارية", count: "Active Partners" }
];
