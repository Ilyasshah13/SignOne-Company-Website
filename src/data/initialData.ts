import { ServiceItem, ProjectItem, IndustryItem, MaterialItem, SiteSettings } from '../types';

export const initialSiteSettings: SiteSettings = {
  companyName: "SIGN ONE",
  companyNameAr: "ساين ون",
  tagline: "FROM CONCEPT TO CREATION",
  taglineAr: "من الفكرة إلى الإتقان",
  phone: "+966 500 092 520",
  whatsapp: "+966500092520",
  emailPrimary: "one@signone.sa",
  emailPR: "pr@signone.sa",
  email: "one@signone.sa",
  address: "Prince Fahd Bin Salman Road, Riyadh, Kingdom of Saudi Arabia",
  addressAr: "طريق الأمير فهد بن سلمان، الرياض، المملكة العربية السعودية",
  workingHours: "Sunday – Thursday: 8:00 AM – 6:00 PM",
  workingHoursAr: "الأحد – الخميس: ٨:٠٠ ص – ٦:٠٠ م",
  stats: {
    projectsCount: "500+",
    satisfactionRate: "99.4%",
    coverageCities: "13+",
    factoryAreaM2: "3,500 m²"
  }
};

export const initialServices: ServiceItem[] = [
  {
    id: "srv-3d-letters",
    slug: "3d-letters",
    number: "01",
    title: "3D Letters & Dimensional Signage",
    titleAr: "حروف بارزة ثلاثية الأبعاد",
    description: "Precision-cut, high-impact dimensional letters crafted from stainless steel, aluminum, brass, or acrylic for corporate facades and interiors.",
    descriptionAr: "حروف بارزة فائقة الدقة والوضوح مصنوعة من الفولاذ المقاوم للصدأ، الألمنيوم، النحاس أو الأكريليك لواجهات الشركات والتصاميم الداخلية.",
    longDescription: "Sign One engineers and manufactures custom 3D letters that elevate physical architectural spaces. Utilizing 5-axis CNC routing and robotic fiber-laser cutters, every stroke delivers millimeter perfection, engineered to withstand the demanding Saudi climate with UV-resistant coatings and weather-sealed returns.",
    longDescriptionAr: "تقوم ساين ون بهندسة وتصنيع حروف ثلاثية الأبعاد مخصصة ترتقي بالمساحات المعمارية والتجارية. بالاعتماد على أحدث مكائن الليزر والقص الرقمي خماسي المحاور، نضمن دقة مليمترية مطلقة ومقاومة فائقة للمناخ الصحراوي ودرجات الحرارة العالية.",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
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
    ],
    faqs: [
      {
        question: "What materials do you recommend for outdoor 3D letters in Saudi Arabia?",
        questionAr: "ما هي المواد التي توصون بها للحروف الخارجية في المملكة؟",
        answer: "We recommend Grade 316 Stainless Steel or marine-grade powder-coated Aluminum due to high UV stability and sandstorm resistance.",
        answerAr: "نوصي باستخدام الستانلس ستيل درجة 316 أو الألمنيوم المعالج ببودرة الكتروستاتيكية نظراً لمقاومتهما للحرارة والأشعة فوق البنفسجية والعواصف الرملية."
      },
      {
        question: "Can 3D letters be fitted with concealed halo lighting?",
        questionAr: "هل يمكن تزويد الحروف البارزة بإضاءة هالو مخفية؟",
        answer: "Yes, our engineers incorporate concealed acrylic diffusers and high-output IP67 LEDs on the reverse face for premium halo illumination.",
        answerAr: "نعم، يقوم مهندسونا بتثبيت موجهات إضاءة أكريليكية مخفية ووحدات LED معزولة ومقاومة للماء لإعطاء توهج خلفي فاخر وجذاب."
      }
    ]
  },
  {
    id: "srv-led-channel",
    slug: "led-channel-letters",
    number: "02",
    title: "LED & Front/Back-Lit Channel Letters",
    titleAr: "حروف مضيئة وقنوات LED",
    description: "Architectural channel letters with front-lit, reverse halo-lit, or dual-illuminated configurations using energy-efficient Tier-1 Samsung/Osram LEDs.",
    descriptionAr: "حروف مضيئة بقنوات مصممة معمارياً بإضاءة أمامية أو خلفية (هالو) أو مزدوجة باستخدام أحدث رقائق LED الموفرة للطاقة والمعتمدة عالمياً.",
    longDescription: "Illuminated signage is the nocturnal heartbeat of modern brands. Sign One uses automated computerized benders for crisp letter contours, welded aluminum housings for heat dissipation, and Samsung/Osram modules calibrated to exact chromatic temperatures (3000K to 6500K) with 50,000+ hour operating life.",
    longDescriptionAr: "اللوحات المضيئة تمثل البصمة البصرية الليلية للعلامات الرائدة. تستخدم ساين ون ماكينات الثني الآلي لضمان حواف حادة ومتناسقة، مع هياكل ألمنيوم ملحومة لتصريف الحرارة، ووحدات إضاءة متطورة بدرجات حرارة لونية دقيقة وعمر تشغيلي يتجاوز 50,000 ساعة.",
    heroImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=80"
    ],
    materials: ["Formed Aluminum Returms", "High-Transmission Opal Acrylic", "Tier-1 LED Modules IP68", "Mean Well Power Drivers"],
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
    id: "srv-illuminated-signage",
    slug: "illuminated-signage",
    number: "03",
    title: "Illuminated Signage & Lightboxes",
    titleAr: "لوحات إعلانية وفوانيس مضيئة",
    description: "Architectural lightboxes, edge-lit textile panels, and heavy-duty outdoor fascias engineered with structural durability and crystal-clear graphics.",
    descriptionAr: "لوحات وفوانيس إعلانية مضيئة، وإطارات قماشية فائقة النحافة، وواجهات خارجية متينة مصممة بقوة هندسية ورسومات فائقة النقاء.",
    longDescription: "From slimline architectural fabric lightboxes for luxury interiors to immense monolithic fascia systems, Sign One crafts luminous installations that command attention while meeting stringent Saudi municipal building codes.",
    longDescriptionAr: "من اللوحات القماشية الأنيقة فائقة النحافة للمساحات الداخلية الفاخرة، إلى الواجهات المعمارية الضخمة للأبراج، نصنع حلول إضاءة تخطف الأنظار وتلبي اشتراطات البلديات والدفاع المدني في المملكة.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
    ],
    materials: ["Extruded Aluminum Profiles", "Optically Clear Acrylic", "Silicone Edge Graphics (SEG)", "Diffused LED arrays"],
    materialsAr: ["قطاعات ألمنيوم معمارية مسحوبة", "أكريليك نقي مشتت للضوء", "أقمشة مطبوعة بتقنية SEG", "مصفوفات إضاءة متجانسة"],
    applications: ["Financial Institutions", "Airports & Transit", "Corporate Lobbies", "Commercial Facades"],
    applicationsAr: ["المؤسسات المالية والبنوك", "المطارات ومحطات النقل", "بهو مقرات الشركات", "واجهات المعارض التجارية"],
    features: [
      "Ultra-thin profiles starting at 35mm depth",
      "Quick graphic change-out system for seasonal campaigns",
      "Custom anodized or powder-coated RAL finishes",
      "High CRI (>90) for natural color reproduction"
    ],
    featuresAr: [
      "سماكات نحيفة تبدأ من 35 مم للمساحات المعمارية",
      "نظام تبديل سريع للأقمشة والرسومات للحملات الموسمية",
      "طلاء معتمد بأي لون من درجات RAL العالمية",
      "مؤشر نقاء لوني فائق (CRI > 90) لإبراز تفاصيل الهوية"
    ]
  },
  {
    id: "srv-cladding",
    slug: "aluminum-cladding",
    number: "04",
    title: "Aluminum Cladding & Architectural Facades",
    titleAr: "كلادينج ألمنيوم وواجهات معمارية",
    description: "Premium Aluminum Composite Panel (ACP) and solid cassette cladding solutions with civil defense fire-retardant A2/B1 certifications.",
    descriptionAr: "حلول تكسية متطورة بألواح الألمنيوم المركب (ACP) والواجهات المعدنية المعتمدة من الدفاع المدني بتصنيف مقاومة الحريق A2/B1.",
    longDescription: "Sign One is a recognized specialist in turnkey exterior transformation. We supply, groove, roll, and install fire-rated aluminum composite panels that protect buildings, enhance thermal insulation, and establish iconic architectural brand presence throughout Saudi Arabia.",
    longDescriptionAr: "تعد ساين ون جهة رائدة في تحويل الواجهات المعمارية الخارجية. نقوم بتوريد وتفريز وثني وتركيب ألواح الكلادينج المقاومة للحريق التي تحمي المباني وتعزز العزل الحراري وتمنح المنشآت مظهراً عصرياً مهيباً في شتى مدن المملكة.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
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
    id: "srv-wayfinding",
    slug: "wayfinding",
    number: "05",
    title: "Wayfinding & Environmental Graphics",
    titleAr: "لوحات إرشادية وتوجيهية وتصميم بيئي",
    description: "Comprehensive directional signage networks, tactile ADA signs, and floor-to-floor environmental graphics designed for intuitive navigation.",
    descriptionAr: "منظومة لوحات توجيهية وإرشادية متكاملة، ولوحات برايل اللمسية، ورسومات بيئية لتسهيل حركة الزوار بسلاسة وأناقة داخل المنشآت الكبرى.",
    longDescription: "Navigating complex campuses, healthcare centers, and corporate towers requires strategic visual hierarchy. Sign One provides human-centered wayfinding audits, system architecture, and multilingual fabrication adhering to Saudi universal accessibility guidelines.",
    longDescriptionAr: "تتطلب حركة الزوار في المجمعات والمستشفيات والأبراج دراسة هندسية دقيقة للمسارات ونقاط اتخاذ القرار. تقدم ساين ون دراسات المسار وتصنيع أنظمة الإرشاد ثنائية اللغة المتوافقة مع معايير الوصول الشامل بالمملكة.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    ],
    materials: ["Anodized Aluminum Slats", "Tempered Safety Glass", "Photopolymer Tactile & Braille", "Architectural Wood Veneers"],
    materialsAr: ["قطاعات ألمنيوم مؤكسد قابلة للتبديل", "زجاج سيكوريت مقسى", "بوليمر ضوئي لحروف برايل البارزة", "قشور أخشاب معمارية فاخرة"],
    applications: ["Hospitals & Medical Cities", "Universities & Campuses", "Government Ministries", "Airports & Metros"],
    applicationsAr: ["المدن الطبية والمستشفيات", "الجامعات والمجمعات التعليمية", "الوزارات والهيئات الحكومية", "المطارات ومحطات المترو"],
    features: [
      "Modular slat systems for effortless future room updates",
      "Bilingual Arabic-English typography optimized for legibility",
      "Universal design & Braille tactile compliance",
      "Anti-graffiti and wear-resistant coatings"
    ],
    featuresAr: [
      "أنظمة شرائح مرنة لتسهيل تعديل أسماء المكاتب والعيادات مستقبلاً",
      "طباعة ثنائية اللغة روعي فيها وضوح القراءة من مسافات مختلفة",
      "التوافق التام مع معايير ذوي الإعاقة ولغة برايل",
      "معالجة متطورة ضد الخدش والبصمات ومواد التنظيف"
    ]
  },
  {
    id: "srv-pylon-totem",
    slug: "pylon-totem-signs",
    number: "06",
    title: "Pylon & Monolith Totem Signs",
    titleAr: "لوحات بيلون وتوتم عملاقة",
    description: "High-visibility freestanding architectural pylons, highway monuments, and multi-tenant commercial directory totems engineered for extreme wind loads.",
    descriptionAr: "لوحات بيلون وتوتم إنشائية قائمة بذاتها، ونصب إعلانية ضخمة على الطرق السريعة ومداخل المجمعات التجارية مصممة لتحمل الرياح العاتية.",
    longDescription: "Pylon signs act as monumental landmarks that guide highway motorists and plaza visitors. Our structural engineering team performs full foundation soil analysis, finite element wind simulation, and structural steel reinforcement to ensure unmatched safety and towering brand authority.",
    longDescriptionAr: "تشكل لوحات التوتم والبيلون معالم معمارية شامخة ترشد قائدي المركبات على الطرق السريعة ومداخل المجمعات. يقوم فريقنا الهندسي بتحليل التربة واختبارات أحمال الرياح والحسابات الإنشائية للأساسات والحديد المجلفن لضمان أعلى مستويات الأمان.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
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
    number: "07",
    title: "Stainless Steel & Metal Signage",
    titleAr: "لوحات استانلس ستيل ومعادن فاخرة",
    description: "Mirrored, brushed, titanium-gold coated, and chemically etched stainless steel logos for executive boardrooms and prestigious developments.",
    descriptionAr: "شعارات ولوحات من الفولاذ المقاوم للصدأ بتشطيبات برونزية وذهبية وفرشاة ميكانيكية أو نقش كيميائي دقيق لقاعات مجالس الإدارة والمشاريع الراقية.",
    longDescription: "Metal conveys permanence and institutional strength. Sign One crafts brushed, mirror-polished, and PVD titanium-nitride coated stainless steel and brass signage that never tarnishes, embodying the executive luxury demanded by Saudi corporate giants.",
    longDescriptionAr: "المعادن الأصيلة تعكس الرسوخ والمكانة الرفيعة. تقدم ساين ون تشطيبات بالستانلس ستيل المصقول والمفرش والمعالج بطبقات التيتانيوم PVD باللون الذهبي والأسود والنحاسي، بجمالية تدوم للأجيال.",
    heroImage: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=80"
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
    number: "08",
    title: "Custom Architectural Fabrication",
    titleAr: "تصنيع معماري مخصص وهياكل خاصة",
    description: "Bespoke architectural canopies, sculptural brand monuments, decorative mashrabiya laser-cut screens, and site-specific installations.",
    descriptionAr: "مظلات معمارية مخصصة، منحوتات وشعارات معمارية عملاقة، قواطع مشربية مزخرفة مقصوصة بالليزر، وتركيبات مصممة هندسياً حسب الطلب.",
    longDescription: "When an architectural vision defies standard formats, Sign One's specialized fabrication studio steps in. We combine 3D parametric modeling, structural steel fabrication, organic composite curving, and precision powder coating to realize one-of-a-kind physical landmarks.",
    longDescriptionAr: "عندما تتطلب الرؤية المعمارية خروجاً عن القوالب الجاهزة، تتولى ورش التصنيع المتخصصة في ساين ون تجسيدها. نمزج بين النمذجة البارامترية ثلاثية الأبعاد، وتشكيل المعادن الإنشائية، والقص الزخرفي لإنتاج معالم فريدة تنبض بالفخامة.",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1000&q=80"
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
    id: "proj-01",
    slug: "al-nakheel-commercial-tower",
    title: "Al Nakheel Commercial Tower Facade & Crown",
    titleAr: "واجهة وتاج برج النخيل التجاري",
    description: "Complete architectural identity including sky-high crown LED illumination, A2 fire-rated cladding, and executive entrance portal in Riyadh.",
    descriptionAr: "هوية معمارية متكاملة شملت تاج البرج المضيء على ارتفاع شاهق، وتكسية كلادينج A2 مقاومة للحريق، وبوابة المدخل التنفيذي بالرياض.",
    category: "Corporate",
    categoryAr: "شركات ومقرات",
    location: "King Fahd Road, Riyadh",
    locationAr: "طريق الملك فهد، الرياض",
    year: "2025",
    client: "Al Nakheel Real Estate Investment",
    services: ["Aluminum Cladding", "LED Channel Letters", "Illuminated Signage"],
    materials: ["PVDF A2 Cladding", "Grade 316 Stainless Steel", "Tier-1 Osram LEDs"],
    materialsAr: ["كلادينج A2 بطلاء PVDF", "ستانلس ستيل بحري 316", "وحدات LED أوسرام ألمانية"],
    challenge: "Executing installation at a height of 145 meters while maintaining uninterrupted traffic flow on King Fahd Road and adhering to strict Civil Defense wind load parameters.",
    challengeAr: "تنفيذ أعمال التركيب على ارتفاع 145 متراً مع استمرار الحركة المرورية على طريق الملك فهد والالتزام باشتراطات الدفاع المدني الصارمة لأحمال الرياح.",
    solution: "Custom engineered modular steel cantilever brackets pre-assembled at Sign One's factory, coupled with certified night-shift abseiling rigging teams to install the 22-meter crown logo safely.",
    solutionAr: "تصميم حوامل فولاذية مسبقة الصنع داخل مصنع ساين ون، مع تشغيل فرق تسلق متخصصة ومعتمدة في الورديات الليلية لتركيب شعار التاج بطول 22 متراً بأمان تام.",
    designDescription: "Bold architectural scale complementing the modernist glass curtain wall with crisp neutral 5000K daylight illumination visible across the skyline.",
    designDescriptionAr: "مقياس معماري مهيب ينسجم مع الواجهات الزجاجية الحديثة بإضاءة نقية 5000 كلفن تبرز في سماء العاصمة ليلاً.",
    manufacturingDescription: "Precision robotic laser cut returns with internal thermal heat-sinks engineered specifically for Riyadh summer ambient temperatures exceeding 50°C.",
    manufacturingDescriptionAr: "قص روبوتي دقيق بالليزر مع مشتتات حرارية داخلية مصممة خصيصاً لمقاومة صيف الرياض ودرجات حرارة تتجاوز 50 مئوية.",
    installationDescription: "Rigid anchor testing and load proofing under structural engineering supervision with zero-incident safety record.",
    installationDescriptionAr: "اختبارات شد وتثبيت تحت إشراف مهندسين معتمدين وبسجل أمان خالٍ تماماً من الحوادث.",
    featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-02",
    slug: "diriyah-boutique-luxury-resort",
    title: "Diriyah Heritage Gate Signage & Wayfinding",
    titleAr: "لوحات وإرشادات بوابة الدرعية التراثية",
    description: "Bespoke patinated architectural bronze letters and bilingual stone-inset wayfinding monoliths harmonizing with traditional Najdi architecture.",
    descriptionAr: "حروف من البرونز المعماري المعتق ولوحات إرشادية حجرية ثنائية اللغة تنسجم برقي مع أصالة الطراز النجدي العريق.",
    category: "Hospitality",
    categoryAr: "ضيافة وفنادق",
    location: "Diriyah Historic District, Riyadh",
    locationAr: "حي الدرعية التاريخي، الرياض",
    year: "2024",
    client: "Heritage Tourism Development",
    services: ["Stainless Steel & Metal Signage", "Wayfinding", "Custom Fabrication"],
    materials: ["Aged Architectural Bronze", "Riyadh Sandstone Insets", "Concealed 2700K Warm LEDs"],
    materialsAr: ["برونز معماري معتق", "حجر الرياض الطبيعي المنحوت", "إضاءات دافئة مخفية 2700 كلفن"],
    challenge: "Strict conservation guidelines prohibiting any visible modern fasteners, harsh blue light, or unapproved reflective metals.",
    challengeAr: "معايير تراثية وتنسيقية صارمة تمنع ظهور أي مسامير حديثة أو إضاءات بيضاء باردة أو معادن لامعة غير منسجمة مع البيئة الطينية.",
    solution: "Chemical aging process developed in-house to achieve a rich natural bronze patina, paired with blind rear stone mounts and warm 2700K indirect illumination.",
    solutionAr: "تطوير عملية تعتيق كيميائية داخل ورشنا لإعطاء البرونز لونه الطبيعي الأصيل، مع تثبيت مخفي بالكامل في الحجر الطبيعي وإضاءة دافئة غير مباشرة.",
    featuredImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=85"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-03",
    slug: "jeddah-waterfront-commercial-plaza",
    title: "Jeddah Corniche Waterfront Totem & Pylons",
    titleAr: "أبراج وتوتم كورنيش جدة البحري",
    description: "16-meter marine-grade stainless steel pylon structure engineered to withstand coastal humidity, saline air, and Red Sea wind velocities.",
    descriptionAr: "لوحة بيلون عملاقة بارتفاع 16 متراً مصنعة من الستانلس ستيل البحري المقاوم للرطوبة الساحلية ومعدلات الملوحة وسرعات الرياح العالية للبحر الأحمر.",
    category: "Retail",
    categoryAr: "مجمعات ومراكز تجارية",
    location: "North Corniche, Jeddah",
    locationAr: "الكورنيش الشمالي، جدة",
    year: "2025",
    client: "Red Sea Commercial Centers",
    services: ["Pylon & Totem Signs", "3D Letters", "LED Channel Letters"],
    materials: ["Grade 316L Marine Stainless Steel", "Anodized Heavy Aluminum", "Anti-Corrosion Seals"],
    materialsAr: ["ستانلس ستيل بحري 316L", "ألمنيوم ثقيل مؤكسد", "عوازل مقاومة للملوحة والرطوبة"],
    challenge: "Extreme corrosive maritime environment with high salinity levels requiring double-layer passivation and anti-corrosion barrier engineering.",
    challengeAr: "البيئة البحرية شديدة التآكل بفعل الرطوبة ورذاذ الملح، مما استدعى معالجة كيميائية مزدوجة وحواجز عزل متطورة لمنع الصدأ وتلف الدوائر الإلكترونية.",
    solution: "Grade 316L surgical stainless steel fabrication with electropolished surfaces, airtight IP68 electrical chambers, and concrete deep-pile foundation design.",
    solutionAr: "استخدام ستانلس ستيل بحري 316L مع صقل كهروميكانيكي وغرف تحكم كهربائية معزولة بمعيار IP68، وقواعد خرسانية وتدية عميقة.",
    featuredImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
    ],
    featured: true,
    published: true,
    isDemo: false
  },
  {
    id: "proj-04",
    slug: "saudi-financial-district-flagship",
    title: "King Abdullah Financial District (KAFD) Office Branding",
    titleAr: "الهوية الإعلانية والمعمارية لمكتب مركز الملك عبدالله المالي (KAFD)",
    description: "Mirrored titanium-gold 3D metal logos, slimline architectural LED wall accents, and interactive boardroom environmental graphics.",
    descriptionAr: "شعارات ثلاثية الأبعاد بطلاء التيتانيوم الذهبي العاكس، مع إضاءات جدارية خطية فائقة النحافة ورسومات بيئية لقاعات الاجتماعات التنفيذية.",
    category: "Banking & Finance",
    categoryAr: "بنوك وقطاع مالي",
    location: "KAFD, Riyadh",
    locationAr: "مركز الملك عبدالله المالي (كافد)، الرياض",
    year: "2024",
    client: "Capital Investment Partners",
    services: ["Stainless Steel & Metal Signage", "Illuminated Signage", "3D Letters"],
    materials: ["PVD Titanium Gold Steel", "Diffused Quartz Lightguide", "Low-Iron Crystal Glass"],
    materialsAr: ["ستانلس ستيل مطلي تيتانيوم PVD", "موجهات ضوئية كوارتز ناعمة", "زجاج بلوري فائق النقاء"],
    challenge: "Executing surgical level interior detailing in an ultra-modern LEED Platinum commercial tower with zero tolerance for surface imperfections.",
    challengeAr: "تنفيذ أعمال دقيقة للغاية داخل برج حاصل على تصنيف LEED البلاتيني، مع اشتراط عدم وجود أي خطأ بصري أو تفاوت في المسافات.",
    solution: "Sub-millimeter CNC fabrication coupled with optical laser level alignments during weekend quiet hours, achieving a flawless luxury mirror finish.",
    solutionAr: "تصنيع دقيق بمكائن CNC وموازنة ليزرية متقدمة أسفرت عن تشطيب ذهبي فائق النعومة يعكس فخامة بيئة الأعمال العالمية.",
    featuredImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85"
    ],
    featured: false,
    published: true,
    isDemo: false
  },
  {
    id: "proj-05",
    slug: "khobar-medical-city-wayfinding",
    title: "Al Khobar Specialized Medical City Wayfinding",
    titleAr: "منظومة اللوحات الإرشادية لمدينة الخبر الطبية التخصصية",
    description: "Hospital-wide modular directional signage system covering 8 floors, outpatient clinics, emergency corridors, and parking garages.",
    descriptionAr: "شبكة لوحات توجيهية وإرشادية معيارية تغطي 8 طوابق والعيادات الخارجية وأقسام الطوارئ ومواقف السيارات متعددة الأدوار.",
    category: "Healthcare",
    categoryAr: "رعاية صحية ومستشفيات",
    location: "Dhahran Road, Al Khobar",
    locationAr: "طريق الظهران، الخبر",
    year: "2024",
    client: "Eastern Province Healthcare Group",
    services: ["Wayfinding", "Illuminated Signage", "Custom Fabrication"],
    materials: ["Antimicrobial Anodized Aluminum", "Tactile Braille Photopolymer", "High-Contrast Reflective Film"],
    materialsAr: ["ألمنيوم مؤكسد معالج بمضادات البكتيريا", "بوليمر ضوئي لحروف برايل", "أفلام عاكسة عالية التباين"],
    challenge: "Designing intuitive navigation for stressed patients and visitors across 65,000 square meters of clinical space with 24/7 facility operations.",
    challengeAr: "تصميم نظام مسارات واضح وبديهي للمرضى والزوار عبر مساحة 65 ألف متر مربع مع استمرار عمل المستشفى على مدار 24 ساعة.",
    solution: "Color-coded intuitive zone mapping, modular snap-in directory slats, and universal symbols fully compliant with Saudi Ministry of Health standards.",
    solutionAr: "اعتماد ترميز لوني ذكي للمناطق والعيادات وشرائح ألمنيوم سهلة التحديث متوافقة تماماً مع اشتراطات وزارة الصحة ومعايير سباهي (CBAHI).",
    featuredImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
    ],
    featured: false,
    published: true,
    isDemo: false
  }
];

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
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=85",
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
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80"
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
