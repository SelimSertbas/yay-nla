
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { LanguageType } from "../components/Navbar";

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionaries
const translations: Record<LanguageType, Record<string, string>> = {
  tr: {
    // Turkish translations - Navigation
    news: "Haberler",
    about: "Hakkımızda",
    mission: "Misyonumuz",
    projects: "Projelerimiz",
    donate: "Bağış",
    contact: "İletişim",

    // Footer
    footer_reach_us: "Bize Ulaşın",
    footer_quick_links: "Hızlı Bağlantılar",
    footer_rights: "Tüm hakları saklıdır",

    // Mission Page
    our_mission: "Misyonumuz",
    our_vision: "Vizyonumuz",
    our_values: "Değerlerimiz",
    sustainability: "Sürdürülebilirlik",
    transparency: "Şeffaflık",
    innovation: "Yenilikçilik",
    community_focus: "Toplum Odaklılık",
    our_goals: "Hedeflerimiz",
    nature: "Doğa",
    human: "İnsan",
    agriculture: "Tarım",
    our_principles: "İlkelerimiz",
    environmental_responsibility: "Çevresel Sorumluluk",
    innovation_principle: "İnovasyon",
    social_benefit: "Toplumsal Fayda",
    transparency_principle: "Şeffaflık",
    cooperation: "İşbirliği",
    sustainability_principle: "Sürdürülebilirlik",
    
    // About Us Page
    about_us: "Hakkımızda",
    about_us_description: "Yenişehir Bor Vakfı, doğal kaynakların sürdürülebilir kullanımı ve çevre dostu uygulamaların yaygınlaştırılması için çalışan bir kuruluştur.",
    about_foundation: "Vakfımız Hakkında",
    about_foundation_p1: "Yenişehir Bor Vakfı, 2020 yılında Mersin'in Yenişehir ilçesinde kurulmuş, kâr amacı gütmeyen bir kuruluştur. Doğal kaynakların sürdürülebilir kullanımı ve çevre dostu tarım uygulamalarının yaygınlaşmasını teşvik eden projeler geliştiriyoruz.",
    about_foundation_p2: "Aynı zamanda, eğitim ve sağlık alanlarında ihtiyaç sahiplerine destek olarak, daha adil ve yaşanabilir bir dünya için çalışıyoruz. BORON adını verdiğimiz yenilikçi toprak iyileştirici ürünümüz ile çiftçilerimize kimyasal içermeyen, doğa dostu çözümler sunuyoruz.",
    projects_count: "Proje",
    volunteers_count: "Gönüllü",
    trees_count: "Fidan",
    board_of_directors: "Yönetim Kurulu",
    board_president: "Yönetim Kurulu Başkanı",
    vice_president: "Başkan Yardımcısı",
    founding_board: "Kurucu Mütevelli Heyeti",
    founding_member: "Kurucu Üye",
    
    // Projects Page
    our_projects: "Projelerimiz",
    projects_description: "Yenişehir Bor Vakfı olarak, doğal yaşamı koruma ve toplumsal kalkınmaya katkı sağlamak için çeşitli projeler yürütüyoruz.",
    boron_project: "BORON ile Çevreci Tarım",
    boron_description: "BORON, geliştirdiğimiz tamamen doğal bir toprak iyileştirici üründür. Kimyasal gübre ve ilaçlara gerek kalmadan toprağınızı zenginleştirerek, daha sağlıklı ve verimli ürünler yetiştirmenize olanak tanır.",
    chemical_free: "Kimyasal içermez, %100 doğaldır",
    improves_soil: "Toprak yapısını iyileştirir",
    accelerates_growth: "Bitki gelişimini hızlandırır",
    nature_protection_projects: "Doğal Yaşam Koruma Projelerimiz",
    afforestation: "Ağaçlandırma",
    afforestation_description: "Ülkemizin dört bir yanında ağaçlandırma çalışmaları yapıyor, gelecek nesillere nefes oluyoruz. Bu kapsamda 5000'den fazla fidan diktik ve bakımlarını düzenli olarak sürdürüyoruz.",
    water_resources: "Su Kaynakları Koruma",
    water_resources_description: "Su kaynaklarımızın temizliği ve sürdürülebilirliği için projeler geliştiriyor ve uyguluyoruz. Göl ve nehir temizleme çalışmaları, su tasarrufu eğitimleri düzenliyoruz.",
    wildlife: "Yaban Hayatı",
    wildlife_description: "Nesli tükenmekte olan türlerin korunması ve yaban hayatının sürdürülebilirliği için çalışıyoruz. Yerel ekosistemlerin korunması için farkındalık projeleri yürütüyoruz.",
    education_projects: "Eğitim Projelerimiz",
    student_scholarships: "Öğrenci Bursları",
    scholarship_description: "Her yıl 50'den fazla öğrenciye eğitim bursu sağlayarak, geleceğin liderlerini destekliyoruz. Burslarımız öğrencilerin eğitim masraflarını karşılamaya yardımcı oluyor.",
    academic_year: "Eğitim Yılı",
    student_count: "öğrenci",
    environmental_education: "Çevre Eğitim Programları",
    environmental_education_description: "İlkokul ve ortaokul öğrencilerine yönelik çevre bilinci ve sürdürülebilirlik eğitimleri düzenliyoruz. Öğrencilere doğayı koruma bilinci aşılıyoruz.",
    last_years: "Son 3 Yılda",
    schools_students: "okul, 2500+ öğrenci",
    
    // Donate Page
    donate_title: "Bağış Yapın",
    donate_description: "Sizin desteklerinizle daha yeşil bir dünya ve daha mutlu yarınlar için çalışıyoruz. Bağışlarınız, doğaya ve insana değer katan projelerimize güç katacak.",
    bank_transfer: "Banka Havalesi",
    bank: "Banka",
    account_holder: "Hesap Sahibi",
    iban: "IBAN",
    donation_description: "Açıklama kısmına \"Bağış\" yazmanız yeterlidir.",
    online_donation: "Online Bağış",
    online_donation_description: "Kredi kartı ile güvenli ödeme sistemimiz üzerinden hızlıca bağış yapabilirsiniz.",
    donate_button: "Bağış Yap",
    secure_payment: "256-bit SSL ile güvenli ödeme",
    corporate_supporter: "Kurumsal Destekçi",
    corporate_description: "Şirketiniz ile uzun vadeli işbirliği yaparak projelerimize destek olabilirsiniz.",
    contact_us_button: "İletişime Geçin",
    regular_donation: "Düzenli Bağış",
    regular_donation_description: "Düzenli bağışlarınızla projelerimize sürekli destek olabilirsiniz. Aylık olarak belirleyeceğiniz tutarla, sürdürülebilir çalışmalarımıza ortak olun.",
    automatic_renewal: "Her ay otomatik olarak yenilenen bağış",
    cancel_anytime: "İstediğiniz zaman iptal edebilme esnekliği",
    donation_reports: "Bağış raporları ve özel teşekkür belgesi",
    become_regular_donor: "Düzenli Bağışçı Olun",
    monthly_amount: "Aylık Bağış Tutarı",
    become_regular_button: "Düzenli Bağışçı Ol",
    projects_supported: "Bağışlarınızla Destekleyeceğiniz Projeler",
    tree_planting: "Ağaçlandırma",
    education_scholarships: "Eğitim Bursları",
    clean_water: "Temizlik ve koruma",
    sustainable_farming: "Sürdürülebilir tarım",
    
    // Contact Page
    contact_us: "İletişim",
    contact_description: "Sorularınız, önerileriniz veya destek olmak istediğiniz konularda bizimle iletişime geçebilirsiniz.",
    contact_info: "İletişim Bilgilerimiz",
    email_address: "E-posta Adresimiz",
    phone_number: "Telefon Numaramız",
    address: "Adresimiz",
    follow_us: "Bizi Takip Edin",
    name_surname: "Ad Soyad",
    email: "E-posta",
    subject: "Konu",
    message: "Mesajınız",
    send: "Gönder",
    location: "Konum",
    office_hours: "Çalışma Saatleri",
    monday_friday: "Pazartesi - Cuma",
    saturday: "Cumartesi",
    sunday: "Pazar",
    holidays: "Resmi Tatiller",
    closed: "Kapalı",
    
    // Hero section
    hero_title: "Toprağa Umut, İnsana Destek",
    hero_subtitle: "Doğayı koruyor, yardıma ihtiyacı olan her canlıya umut oluyoruz.",
    our_projects_button: "Projelerimiz",
    support_button: "Destek Ol",
  },
  
  en: {
    // English translations - Navigation
    news: "News",
    about: "About Us",
    mission: "Our Mission",
    projects: "Our Projects",
    donate: "Donate",
    contact: "Contact",
    
    // Footer
    footer_reach_us: "Contact Us",
    footer_quick_links: "Quick Links",
    footer_rights: "All rights reserved",
    
    // Mission Page
    our_mission: "Our Mission",
    our_vision: "Our Vision",
    our_values: "Our Values",
    sustainability: "Sustainability",
    transparency: "Transparency",
    innovation: "Innovation",
    community_focus: "Community Focus",
    our_goals: "Our Goals",
    nature: "Nature",
    human: "Human",
    agriculture: "Agriculture",
    our_principles: "Our Principles",
    environmental_responsibility: "Environmental Responsibility",
    innovation_principle: "Innovation",
    social_benefit: "Social Benefit",
    transparency_principle: "Transparency",
    cooperation: "Cooperation",
    sustainability_principle: "Sustainability",
    
    // About Us Page
    about_us: "About Us",
    about_us_description: "Yenişehir Bor Foundation is an organization working for sustainable use of natural resources and promoting environmentally friendly practices.",
    about_foundation: "About Our Foundation",
    about_foundation_p1: "Yenişehir Bor Foundation is a non-profit organization established in 2020 in the Yenişehir district of Mersin. We develop projects that promote sustainable use of natural resources and environmentally friendly agricultural practices.",
    about_foundation_p2: "At the same time, we are working for a more equitable and livable world by supporting those in need in the fields of education and health. With our innovative soil improver product called BORON, we offer chemical-free, nature-friendly solutions to our farmers.",
    projects_count: "Projects",
    volunteers_count: "Volunteers",
    trees_count: "Trees",
    board_of_directors: "Board of Directors",
    board_president: "Board President",
    vice_president: "Vice President",
    founding_board: "Founding Board",
    founding_member: "Founding Member",
    
    // Projects Page
    our_projects: "Our Projects",
    projects_description: "As Yenişehir Bor Foundation, we carry out various projects to protect natural life and contribute to social development.",
    boron_project: "Eco-Friendly Agriculture with BORON",
    boron_description: "BORON is a completely natural soil improver product that we have developed. It enriches your soil without the need for chemical fertilizers and pesticides, allowing you to grow healthier and more productive crops.",
    chemical_free: "Chemical-free, 100% natural",
    improves_soil: "Improves soil structure",
    accelerates_growth: "Accelerates plant growth",
    nature_protection_projects: "Nature Conservation Projects",
    afforestation: "Afforestation",
    afforestation_description: "We carry out afforestation works across our country, providing oxygen for future generations. In this context, we have planted more than 5000 seedlings and regularly maintain them.",
    water_resources: "Water Resources Protection",
    water_resources_description: "We develop and implement projects for the cleanliness and sustainability of our water resources. We organize lake and river cleaning activities and water conservation trainings.",
    wildlife: "Wildlife",
    wildlife_description: "We work for the protection of endangered species and the sustainability of wildlife. We carry out awareness projects for the protection of local ecosystems.",
    education_projects: "Education Projects",
    student_scholarships: "Student Scholarships",
    scholarship_description: "By providing educational scholarships to more than 50 students every year, we support the leaders of the future. Our scholarships help students cover their educational expenses.",
    academic_year: "Academic Year",
    student_count: "students",
    environmental_education: "Environmental Education Programs",
    environmental_education_description: "We organize environmental awareness and sustainability trainings for primary and secondary school students. We instill awareness of protecting nature in students.",
    last_years: "In the Last 3 Years",
    schools_students: "schools, 2500+ students",
    
    // Donate Page
    donate_title: "Donate",
    donate_description: "With your support, we work for a greener world and happier tomorrows. Your donations will power our projects that add value to nature and people.",
    bank_transfer: "Bank Transfer",
    bank: "Bank",
    account_holder: "Account Holder",
    iban: "IBAN",
    donation_description: "It is enough to write \"Donation\" in the description field.",
    online_donation: "Online Donation",
    online_donation_description: "You can quickly donate through our secure payment system with a credit card.",
    donate_button: "Donate",
    secure_payment: "Secure payment with 256-bit SSL",
    corporate_supporter: "Corporate Supporter",
    corporate_description: "You can support our projects by making a long-term cooperation with your company.",
    contact_us_button: "Contact Us",
    regular_donation: "Regular Donation",
    regular_donation_description: "You can continuously support our projects with your regular donations. Join our sustainable work with the amount you will determine monthly.",
    automatic_renewal: "Automatic monthly renewal donation",
    cancel_anytime: "Flexibility to cancel at any time",
    donation_reports: "Donation reports and special certificate of appreciation",
    become_regular_donor: "Become a Regular Donor",
    monthly_amount: "Monthly Donation Amount",
    become_regular_button: "Become a Regular Donor",
    projects_supported: "Projects You Will Support With Your Donations",
    tree_planting: "Tree Planting",
    education_scholarships: "Education Scholarships",
    clean_water: "Cleaning and protection",
    sustainable_farming: "Sustainable farming",
    
    // Contact Page
    contact_us: "Contact",
    contact_description: "You can contact us for your questions, suggestions or issues you want to support.",
    contact_info: "Contact Information",
    email_address: "Email Address",
    phone_number: "Phone Number",
    address: "Address",
    follow_us: "Follow Us",
    name_surname: "Name Surname",
    email: "Email",
    subject: "Subject",
    message: "Your Message",
    send: "Send",
    location: "Location",
    office_hours: "Office Hours",
    monday_friday: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    holidays: "Public Holidays",
    closed: "Closed",
    
    // Hero section
    hero_title: "Hope for the Soil, Support for People",
    hero_subtitle: "We protect nature and provide hope to every living being in need of help.",
    our_projects_button: "Our Projects",
    support_button: "Support",
  },
  
  ar: {
    // Arabic translations - Navigation
    news: "الأخبار",
    about: "من نحن",
    mission: "مهمتنا",
    projects: "مشاريعنا",
    donate: "تبرع",
    contact: "اتصل بنا",
    
    // Footer
    footer_reach_us: "تواصل معنا",
    footer_quick_links: "روابط سريعة",
    footer_rights: "جميع الحقوق محفوظة",
    
    // Mission Page
    our_mission: "مهمتنا",
    our_vision: "رؤيتنا",
    our_values: "قيمنا",
    sustainability: "الاستدامة",
    transparency: "الشفافية",
    innovation: "الابتكار",
    community_focus: "التركيز على المجتمع",
    our_goals: "أهدافنا",
    nature: "الطبيعة",
    human: "الإنسان",
    agriculture: "الزراعة",
    our_principles: "مبادئنا",
    environmental_responsibility: "المسؤولية البيئية",
    innovation_principle: "الابتكار",
    social_benefit: "المنفعة الاجتماعية",
    transparency_principle: "الشفافية",
    cooperation: "التعاون",
    sustainability_principle: "الاستدامة",
    
    // About Us Page
    about_us: "من نحن",
    about_us_description: "مؤسسة ينيشهير بور هي منظمة تعمل من أجل الاستخدام المستدام للموارد الطبيعية وتعزيز الممارسات الصديقة للبيئة.",
    about_foundation: "عن مؤسستنا",
    about_foundation_p1: "مؤسسة ينيشهير بور هي منظمة غير ربحية تأسست عام 2020 في منطقة ينيشهير بمرسين. نقوم بتطوير مشاريع تعزز الاستخدام المستدام للموارد الطبيعية والممارسات الزراعية الصديقة للبيئة.",
    about_foundation_p2: "في الوقت نفسه، نعمل من أجل عالم أكثر عدالة وصلاحية للعيش من خلال دعم المحتاجين في مجالات التعليم والصحة. من خلال منتجنا المبتكر لتحسين التربة المسمى بورون، نقدم حلولاً خالية من المواد الكيميائية وصديقة للطبيعة لمزارعينا.",
    projects_count: "مشاريع",
    volunteers_count: "متطوعين",
    trees_count: "أشجار",
    board_of_directors: "مجلس الإدارة",
    board_president: "رئيس المجلس",
    vice_president: "نائب الرئيس",
    founding_board: "المجلس التأسيسي",
    founding_member: "عضو مؤسس",
    
    // Projects Page
    our_projects: "مشاريعنا",
    projects_description: "كمؤسسة ينيشهير بور، نقوم بتنفيذ مشاريع متنوعة لحماية الحياة الطبيعية والمساهمة في التنمية الاجتماعية.",
    boron_project: "الزراعة الصديقة للبيئة مع بورون",
    boron_description: "بورون هو منتج محسن للتربة طبيعي تمامًا قمنا بتطويره. يعمل على إثراء التربة دون الحاجة إلى الأسمدة والمبيدات الكيميائية، مما يسمح بزراعة محاصيل أكثر صحة وإنتاجية.",
    chemical_free: "خالٍ من المواد الكيميائية، طبيعي 100٪",
    improves_soil: "يحسن بنية التربة",
    accelerates_growth: "يسرع نمو النبات",
    nature_protection_projects: "مشاريع حماية الطبيعة",
    afforestation: "التشجير",
    afforestation_description: "نقوم بأعمال التشجير في جميع أنحاء بلادنا، مما يوفر الأكسجين للأجيال القادمة. في هذا السياق، قمنا بزراعة أكثر من 5000 شتلة ونقوم بصيانتها بانتظام.",
    water_resources: "حماية موارد المياه",
    water_resources_description: "نقوم بتطوير وتنفيذ مشاريع لنظافة واستدامة مواردنا المائية. ننظم أنشطة تنظيف البحيرات والأنهار ودورات ترشيد استهلاك المياه.",
    wildlife: "الحياة البرية",
    wildlife_description: "نعمل من أجل حماية الأنواع المهددة بالانقراض واستدامة الحياة البرية. نقوم بتنفيذ مشاريع توعية لحماية النظم البيئية المحلية.",
    education_projects: "المشاريع التعليمية",
    student_scholarships: "منح دراسية للطلاب",
    scholarship_description: "من خلال تقديم منح دراسية لأكثر من 50 طالبًا كل عام، ندعم قادة المستقبل. تساعد منحنا الطلاب على تغطية نفقاتهم التعليمية.",
    academic_year: "العام الدراسي",
    student_count: "طلاب",
    environmental_education: "برامج التثقيف البيئي",
    environmental_education_description: "ننظم دورات توعية بيئية واستدامة لطلاب المدارس الابتدائية والثانوية. نغرس الوعي بحماية الطبيعة في الطلاب.",
    last_years: "خلال السنوات الثلاث الماضية",
    schools_students: "مدارس، أكثر من 2500 طالب",
    
    // Donate Page
    donate_title: "تبرع",
    donate_description: "بدعمكم، نعمل من أجل عالم أكثر اخضرارًا وغدًا أكثر سعادة. ستعزز تبرعاتكم مشاريعنا التي تضيف قيمة للطبيعة والإنسان.",
    bank_transfer: "تحويل مصرفي",
    bank: "البنك",
    account_holder: "صاحب الحساب",
    iban: "رقم الحساب الدولي",
    donation_description: "يكفي كتابة \"تبرع\" في حقل الوصف.",
    online_donation: "التبرع عبر الإنترنت",
    online_donation_description: "يمكنك التبرع بسرعة من خلال نظام الدفع الآمن لدينا باستخدام بطاقة الائتمان.",
    donate_button: "تبرع",
    secure_payment: "دفع آمن بتقنية SSL 256 بت",
    corporate_supporter: "داعم مؤسسي",
    corporate_description: "يمكنك دعم مشاريعنا من خلال إجراء تعاون طويل الأمد مع شركتك.",
    contact_us_button: "اتصل بنا",
    regular_donation: "تبرع منتظم",
    regular_donation_description: "يمكنك دعم مشاريعنا باستمرار من خلال تبرعاتك المنتظمة. انضم إلى عملنا المستدام بالمبلغ الذي ستحدده شهريًا.",
    automatic_renewal: "تبرع بتجديد تلقائي شهري",
    cancel_anytime: "المرونة للإلغاء في أي وقت",
    donation_reports: "تقارير التبرع وشهادة تقدير خاصة",
    become_regular_donor: "كن متبرعًا منتظمًا",
    monthly_amount: "مبلغ التبرع الشهري",
    become_regular_button: "كن متبرعًا منتظمًا",
    projects_supported: "المشاريع التي ستدعمها بتبرعاتك",
    tree_planting: "زراعة الأشجار",
    education_scholarships: "المنح التعليمية",
    clean_water: "التنظيف والحماية",
    sustainable_farming: "الزراعة المستدامة",
    
    // Contact Page
    contact_us: "اتصل بنا",
    contact_description: "يمكنك الاتصال بنا لأسئلتك أو اقتراحاتك أو القضايا التي ترغب في دعمها.",
    contact_info: "معلومات الاتصال",
    email_address: "البريد الإلكتروني",
    phone_number: "رقم الهاتف",
    address: "العنوان",
    follow_us: "تابعنا",
    name_surname: "الاسم واللقب",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "رسالتك",
    send: "إرسال",
    location: "الموقع",
    office_hours: "ساعات العمل",
    monday_friday: "الاثنين - الجمعة",
    saturday: "السبت",
    sunday: "الأحد",
    holidays: "العطلات الرسمية",
    closed: "مغلق",
    
    // Hero section
    hero_title: "أمل للتربة، دعم للناس",
    hero_subtitle: "نحن نحمي الطبيعة ونوفر الأمل لكل كائن حي بحاجة إلى المساعدة.",
    our_projects_button: "مشاريعنا",
    support_button: "الدعم",
  },
  
  de: {
    // German translations - Navigation
    news: "Nachrichten",
    about: "Über uns",
    mission: "Unsere Mission",
    projects: "Unsere Projekte",
    donate: "Spenden",
    contact: "Kontakt",
    
    // Footer
    footer_reach_us: "Kontaktieren Sie uns",
    footer_quick_links: "Schnelllinks",
    footer_rights: "Alle Rechte vorbehalten",
    
    // Mission Page
    our_mission: "Unsere Mission",
    our_vision: "Unsere Vision",
    our_values: "Unsere Werte",
    sustainability: "Nachhaltigkeit",
    transparency: "Transparenz",
    innovation: "Innovation",
    community_focus: "Gemeinschaftsfokus",
    our_goals: "Unsere Ziele",
    nature: "Natur",
    human: "Mensch",
    agriculture: "Landwirtschaft",
    our_principles: "Unsere Prinzipien",
    environmental_responsibility: "Umweltverantwortung",
    innovation_principle: "Innovation",
    social_benefit: "Sozialer Nutzen",
    transparency_principle: "Transparenz",
    cooperation: "Kooperation",
    sustainability_principle: "Nachhaltigkeit",
    
    // About Us Page
    about_us: "Über uns",
    about_us_description: "Die Yenişehir Bor Stiftung ist eine Organisation, die für die nachhaltige Nutzung natürlicher Ressourcen und die Förderung umweltfreundlicher Praktiken arbeitet.",
    about_foundation: "Über unsere Stiftung",
    about_foundation_p1: "Die Yenişehir Bor Stiftung ist eine gemeinnützige Organisation, die 2020 im Bezirk Yenişehir von Mersin gegründet wurde. Wir entwickeln Projekte, die die nachhaltige Nutzung natürlicher Ressourcen und umweltfreundliche landwirtschaftliche Praktiken fördern.",
    about_foundation_p2: "Gleichzeitig arbeiten wir für eine gerechtere und lebenswertere Welt, indem wir Bedürftige in den Bereichen Bildung und Gesundheit unterstützen. Mit unserem innovativen Bodenverbesserer BORON bieten wir unseren Landwirten chemiefreie, naturfreundliche Lösungen.",
    projects_count: "Projekte",
    volunteers_count: "Freiwillige",
    trees_count: "Bäume",
    board_of_directors: "Vorstand",
    board_president: "Vorstandsvorsitzender",
    vice_president: "Stellvertretender Vorsitzender",
    founding_board: "Gründungsvorstand",
    founding_member: "Gründungsmitglied",
    
    // Projects Page
    our_projects: "Unsere Projekte",
    projects_description: "Als Yenişehir Bor Stiftung führen wir verschiedene Projekte zum Schutz der Natur und zur Förderung der sozialen Entwicklung durch.",
    boron_project: "Umweltfreundliche Landwirtschaft mit BORON",
    boron_description: "BORON ist ein von uns entwickeltes, vollständig natürliches Bodenverbesserungsmittel. Es reichert Ihren Boden an, ohne dass chemische Düngemittel und Pestizide erforderlich sind, und ermöglicht Ihnen den Anbau gesünderer und produktiverer Pflanzen.",
    chemical_free: "Chemiefrei, 100% natürlich",
    improves_soil: "Verbessert die Bodenstruktur",
    accelerates_growth: "Beschleunigt das Pflanzenwachstum",
    nature_protection_projects: "Naturschutzprojekte",
    afforestation: "Aufforstung",
    afforestation_description: "Wir führen in unserem ganzen Land Aufforstungsarbeiten durch und sorgen so für Sauerstoff für künftige Generationen. In diesem Zusammenhang haben wir mehr als 5000 Setzlinge gepflanzt und pflegen sie regelmäßig.",
    water_resources: "Schutz der Wasserressourcen",
    water_resources_description: "Wir entwickeln und implementieren Projekte für die Sauberkeit und Nachhaltigkeit unserer Wasserressourcen. Wir organisieren Seen- und Flussreinigungsaktionen und Wasserspartrainings.",
    wildlife: "Wildtiere",
    wildlife_description: "Wir arbeiten für den Schutz gefährdeter Arten und die Nachhaltigkeit der Tierwelt. Wir führen Aufklärungsprojekte zum Schutz lokaler Ökosysteme durch.",
    education_projects: "Bildungsprojekte",
    student_scholarships: "Stipendien für Studenten",
    scholarship_description: "Indem wir jedes Jahr mehr als 50 Studenten Bildungsstipendien gewähren, unterstützen wir die Führungskräfte von morgen. Unsere Stipendien helfen den Studenten, ihre Bildungskosten zu decken.",
    academic_year: "Akademisches Jahr",
    student_count: "Studenten",
    environmental_education: "Umweltbildungsprogramme",
    environmental_education_description: "Wir organisieren Umweltbewusstseins- und Nachhaltigkeitsschulungen für Grund- und Sekundarschüler. Wir vermitteln den Schülern ein Bewusstsein für den Schutz der Natur.",
    last_years: "In den letzten 3 Jahren",
    schools_students: "Schulen, 2500+ Schüler",
    
    // Donate Page
    donate_title: "Spenden",
    donate_description: "Mit Ihrer Unterstützung arbeiten wir für eine grünere Welt und glücklichere Zukunft. Ihre Spenden werden unsere Projekte stärken, die der Natur und den Menschen einen Mehrwert bieten.",
    bank_transfer: "Banküberweisung",
    bank: "Bank",
    account_holder: "Kontoinhaber",
    iban: "IBAN",
    donation_description: "Es genügt, im Verwendungszweck \"Spende\" anzugeben.",
    online_donation: "Online-Spende",
    online_donation_description: "Sie können schnell über unser sicheres Zahlungssystem mit Kreditkarte spenden.",
    donate_button: "Spenden",
    secure_payment: "Sichere Zahlung mit 256-Bit-SSL",
    corporate_supporter: "Firmenunterstützer",
    corporate_description: "Sie können unsere Projekte durch eine langfristige Zusammenarbeit mit Ihrem Unternehmen unterstützen.",
    contact_us_button: "Kontaktieren Sie uns",
    regular_donation: "Regelmäßige Spende",
    regular_donation_description: "Sie können unsere Projekte kontinuierlich mit Ihren regelmäßigen Spenden unterstützen. Beteiligen Sie sich an unserer nachhaltigen Arbeit mit einem monatlich von Ihnen festgelegten Betrag.",
    automatic_renewal: "Automatisch verlängerte monatliche Spende",
    cancel_anytime: "Flexibilität, jederzeit zu kündigen",
    donation_reports: "Spendenberichte und besondere Anerkennungsurkunde",
    become_regular_donor: "Werden Sie regelmäßiger Spender",
    monthly_amount: "Monatlicher Spendenbetrag",
    become_regular_button: "Regelmäßiger Spender werden",
    projects_supported: "Projekte, die Sie mit Ihren Spenden unterstützen werden",
    tree_planting: "Baumpflanzung",
    education_scholarships: "Bildungsstipendien",
    clean_water: "Reinigung und Schutz",
    sustainable_farming: "Nachhaltige Landwirtschaft",
    
    // Contact Page
    contact_us: "Kontakt",
    contact_description: "Sie können uns bei Fragen, Anregungen oder Themen, die Sie unterstützen möchten, kontaktieren.",
    contact_info: "Kontaktinformationen",
    email_address: "E-Mail-Adresse",
    phone_number: "Telefonnummer",
    address: "Adresse",
    follow_us: "Folgen Sie uns",
    name_surname: "Name Nachname",
    email: "E-Mail",
    subject: "Betreff",
    message: "Ihre Nachricht",
    send: "Senden",
    location: "Standort",
    office_hours: "Öffnungszeiten",
    monday_friday: "Montag - Freitag",
    saturday: "Samstag",
    sunday: "Sonntag",
    holidays: "Feiertage",
    closed: "Geschlossen",
    
    // Hero section
    hero_title: "Hoffnung für den Boden, Unterstützung für Menschen",
    hero_subtitle: "Wir schützen die Natur und geben jedem hilfsbedürftigen Lebewesen Hoffnung.",
    our_projects_button: "Unsere Projekte",
    support_button: "Unterstützen",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get language from localStorage or default to Turkish
  const [language, setLanguage] = useState<LanguageType>(() => {
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as LanguageType) || "tr";
  });

  // Set the language in localStorage and update HTML attributes when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    console.log(`Language changed to: ${language}`);
  }, [language]);

  // Translate function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
