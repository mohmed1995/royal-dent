/**
 * محتوى وبيانات مركز رويال لطب الفم والأسنان
 * جميع الأرقام والادعاءات الطبية معلّمة بتعليق للمراجعة مع إدارة العيادة
 */

const ROYAL_CONTENT = {
  clinicName: "مركز رويال لطب الفم والأسنان",
  clinicNameEn: "Royal Dental Center",
  tagline: "رعاية طبية متكاملة لابتسامتك في 4 فروع بمحافظتي أسيوط والمنيا",
  mainPhone: "01066726432",
  mainPhoneIntl: "+201066726432",
  mainWhatsapp: "201066726432",

  // مواعيد العمل اليومية المعتمدة
  schedule: {
    timezone: "Africa/Cairo",
    morningShift: { start: "11:00", end: "15:30", label: "الفترة الصباحية (11:00 ص – 3:30 م)" },
    eveningShift: { start: "16:00", end: "22:30", label: "الفترة المسائية (4:00 م – 10:30 م)" },
    days: "يومياً من السبت إلى الجمعة"
  },

  // بيانات الفروع الأربعة
  branches: [
    {
      id: "dairut",
      name: "فرع ديروط",
      badge: "الفرع الرئيسي",
      city: "ديروط",
      address: "ميدان أبو جبل، بجوار فرع فودافون، أعلى صالة الجيم ومطعم التيسير - الدور الثاني",
      phone: "01066726432",
      phoneDisplay: "010 6672 6432",
      phoneIntl: "+201066726432",
      telecom: "فودافون",
      whatsapp: "201066726432",
      mapUrl: "https://maps.google.com/?q=27.5583,30.8144",
      description: "المقر الرئيسي للمركز ويضم عيادات الجراحة والزراعة والتقويم والتشخيص الرقمي."
    },
    {
      id: "assiut",
      name: "فرع مدينة أسيوط",
      badge: "قسم السيدات",
      city: "أسيوط",
      address: "ميدان الزهراء، بجوار عمر أفندي - برج مهران، الدور الثاني",
      phone: "01116596599",
      phoneDisplay: "011 1659 6599",
      phoneIntl: "+201116596599",
      telecom: "اتصالات",
      whatsapp: "201116596599",
      mapUrl: "https://maps.google.com/?q=27.1809,31.1837",
      description: "يتميز بجناح تخصصي مستقل للسيدات بطاقم استشاريات إناث لضمان الخصوصية والراحة التامة."
    },
    {
      id: "qusiya",
      name: "فرع القوصية",
      badge: "عيادات تخصصية",
      city: "القوصية",
      address: "شارع الجلاء، بجوار بنك القاهرة - برج فاطمة الزهراء",
      phone: "01500098392",
      phoneDisplay: "0150 009 8392",
      phoneIntl: "+201500098392",
      telecom: "وي WE",
      whatsapp: "201500098392",
      mapUrl: "https://maps.google.com/?q=27.4419,30.8175",
      description: "خدمات علاج العصب، الحشوات التجميلية، التركيبات الثابتة، والتشخيص الفوري."
    },
    {
      id: "dayrmawas",
      name: "فرع ديرمواس",
      badge: "جنوب المنيا",
      city: "ديرمواس",
      address: "شارع مدرسة التجارة، أعلى مكتبة الإسكندرية وأسواق المهندس",
      phone: "01044820100",
      phoneDisplay: "010 4482 0100",
      phoneIntl: "+201044820100",
      telecom: "فودافون",
      whatsapp: "201044820100",
      mapUrl: "https://maps.google.com/?q=27.6441,30.8465",
      description: "خدمة متكاملة لخدمة أهالي ديرمواس وجنوب المنيا مع أحدث وحدات الفحص والعلاج."
    }
  ],

  // الخدمات الطبية
  services: [
    {
      id: "ortho",
      title: "تقويم الأسنان والفكين",
      shortDesc: "تنسيق اصطفاف الأسنان ومعالجة تزاحم الفكين بأجهزة التقويم الشفاف والمعدني الحديثة.",
      perk: "خطة تقسيط 0% بدون فوائد" // TODO: confirm with clinic
    },
    {
      id: "implant",
      title: "زراعة وجراحة الأسنان",
      shortDesc: "تعويض الأسنان المفقودة بغرسات معتمدة دولياً وتخطيط رقمي مسبق لمسار العصب.",
      perk: "غرسات سويسرية وألمانية معتمدة" // TODO: confirm with clinic
    },
    {
      id: "cosmetic",
      title: "تجميل الأسنان والفينير",
      shortDesc: "تصميم الابتسامة وعدسات الفينير واللومينير بأقل قدر ممكن من إعداد طبقة المينا.",
      perk: "تصميم ابتسامة رقمي DSD" // TODO: confirm with clinic
    },
    {
      id: "endo",
      title: "علاج الجذور والأعصاب",
      shortDesc: "تنظيف وتعقيم قنوات الجذور بأجهزة ميكانيكية متقدمة تهدف لتقليل الانزعاج لأدنى حد.",
      perk: "جلسات علاج دقيقة بتقنيات مهدئة" // TODO: confirm with clinic (بدون ألم)
    },
    {
      id: "pediatric",
      title: "طب أسنان الأطفال",
      shortDesc: "بيئة مخصصة للأطفال وبروتوكول تعامل نفسي مرح يزيل القلق والخوف من عيادة الأسنان.",
      perk: "عيادة صديقة للطفل" // TODO: confirm with clinic
    },
    {
      id: "ladies",
      title: "قسم السيدات المستقل",
      shortDesc: "جناح مخصص بطاقم طبي وتمريضي نسائي بالكامل لراحة وخصوصية المراجعات.",
      perk: "طبيبات واستشاريات متخصصات" // TODO: confirm with clinic
    }
  ],

  // التكنولوجيا والتعقيم
  technologies: [
    {
      id: "cbct",
      name: "الأشعة المقطعية ثلاثية الأبعاد (CBCT)",
      desc: "فحص ميكروني دقيق لعظام الفك ومسار الأعصاب قبل زراعة الأسنان لضمان الدقة وتجنب المضاعفات." // TODO: confirm with clinic
    },
    {
      id: "scanner",
      name: "الماسح الضوئي الفموي الرقمي",
      desc: "أخذ طبعات ومقاسات الأسنان إلكترونياً بدون استخدام معجون الطبعات التقليدي المزعج." // TODO: confirm with clinic
    },
    {
      id: "laser",
      name: "الليزر المائي والأنسجة الرخوة",
      desc: "تجميل اللثة وتطهير الجيوب اللثوية بدقة متناهية مع تعافٍ سريع ونزيف أدنى." // TODO: confirm with clinic
    },
    {
      id: "sterilization",
      name: "منظومة التعقيم المركزي (Class-B)",
      desc: "أجهزة أوتوكلاف متوافقة مع المعايير الطبية للتعقيم الكامل مع تغليف محكم يُفتح أمام المريض." // TODO: confirm with clinic
    }
  ],

  // الإحصائيات المرجعية (تحت المراجعة مع العيادة)
  claims: {
    smilesCount: "+18,000 حالة علاجية مكتملة", // TODO: confirm with clinic
    branchesCount: "4 فروع معتمدة بمحافظتي أسيوط والمنيا",
    installmentOffer: "تقسيط ميسر 0% فوائد على خطط التقويم والزراعة", // TODO: confirm with clinic
    sterilizationStandard: "تعقيم فئة B أوروبية لكل مريض", // TODO: confirm with clinic
    painlessCareText: "عناية طبية مريحة ومهدئة للتوتر", // TODO: confirm with clinic (صياغة معتدلة بدون ادعاء قطعي لـ بدون ألم)
    defaultPromoText: "خصم 25% على الكشف الأولي عند الحجز المسبق عبر الموقع" // TODO: confirm with clinic
  },

  // الحملات الإعلانية المعتمدة
  campaigns: [
    {
      id: "before_after",
      title: "جاهز تبدأ رحلة ابتسامة أحلامك معانا؟",
      badge: "حالة قبل وبعد حقيقية",
      image: "./assets/ad_before_after_journey.jpg",
      serviceTarget: "تجميل الأسنان والفينير",
      desc: "حالة تجميل وتناسق ابتسامة حقيقية نفذت في عيادات رويال."
    },
    {
      id: "ortho_age",
      title: "هل التقويم له سن معين؟",
      badge: "تقويم لكل الأعمار",
      image: "./assets/ad_ortho_age.jpg",
      serviceTarget: "تقويم الأسنان والفكين",
      desc: "خطط تقويم الأسنان والفكين لمختلف الفئات العمرية بأجهزة حديثة."
    },
    {
      id: "gummy_smile",
      title: "الابتسامة اللثوية بتغير شكل ابتسامتك في الصور",
      badge: "تجميل اللثة بالليزر",
      image: "./assets/ad_gummy_smile_laser.jpg",
      serviceTarget: "تجميل الأسنان والفينير",
      desc: "قص وتنسيق اللثة بالليزر المائي بدقة وسرعة تعافٍ دون نزيف."
    },
    {
      id: "fear_solution",
      title: "الخوف من دكتور الأسنان مش هو الحل!!",
      badge: "عناية بدون قلق",
      image: "./assets/ad_fear_solution.jpg",
      serviceTarget: "كشف واستشارة عامة",
      desc: "بروتوكول تهدئة وبيئة علاجية مريحة ومرحبة بكل مريض."
    },
    {
      id: "confident_smile",
      title: "خلّي ضحكتك تعكس ثقتك في كل خطوة",
      badge: "طب أسنان الأطفال والأسرة",
      image: "./assets/ad_confident_smile_kids.jpg",
      serviceTarget: "طب أسنان الأطفال",
      desc: "رعاية وقائية وترحيبية تجعل زيارة الطفل لعيادة الأسنان تجربة ممتعة."
    },
    {
      id: "ladies_clinic",
      title: "جناح السيدات المستقل بمدينة أسيوط",
      badge: "قسم السيدات المستقل",
      image: "./assets/ad_ladies_clinic.jpg",
      serviceTarget: "عيادة السيدات المتخصصة",
      desc: "خصوصية كاملة وطاقم طبي نسائي معتمد بفرع أسيوط."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = ROYAL_CONTENT;
}
