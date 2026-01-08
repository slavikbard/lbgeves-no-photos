export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  location: string;
  year: string;
  size: string;
  client: string;
  image: string;
  gallery: string[];
  featured: boolean;
  services: string[];
  challenges: string[];
  solutions: string[];
  designer?: string;
  photographer?: string;
}

export const projects: Project[] = [
  {
    id: 'apartment-finishing-beer-sheva',
    title: 'עבודות גמר בדירה פרטית | באר שבע',
    description: 'עבודות גמר כחלק מפרויקט עיצוב בדירה פרטית בבאר שבע, שבוצעו בהתאמה לתכנון האדריכלי ולרמת גימור גבוהה',
    fullDescription: 'עבודות גמר כחלק מפרויקט עיצוב בדירה פרטית בבאר שבע, שבוצעו בהתאמה לתכנון האדריכלי ולרמת גימור גבוהה. העבודות כללו פתרונות גבס, עבודות חשמל, שפכטל, צבע והתאמה של מערכת ספרינקלרים לעיצוב החדש – תוך תיאום שוטף מול המעצבת וספקי הפרויקט. התוצאה: דירה מעוצבת, נעימה ומעודכנת – עם גימור איכותי, פתרונות מותאמים אישית ותיאום מדויק בין כל מרכיבי הפרויקט.',
    category: 'מגורים',
    location: 'באר שבע',
    year: '2025',
    size: '400 מ"ר',
    client: 'פרטי',
    image: '/gmarbeersheva_(1).jpg',
    gallery: [
'/gmarbeersheva_(1).jpg', '/gmarbeersheva_(2).jpg', '/gmarbeersheva_(3).jpg', '/gmarbeersheva_(4).jpg', '/gmarbeersheva_(5).jpg',  '/gmarbeersheva (6).jpg', '/gmarbeersheva (7).jpg', '/gmarbeersheva (8).jpg', '/gmarbeersheva (9).jpg', '/gmarbeersheva (10).jpg', '/gmarbeersheva (11).jpg', '/gmarbeersheva (12).jpg', '/gmarbeersheva (13).jpg', '/gmarbeersheva (14).jpg', '/gmarbeersheva (15).jpg', '/gmarbeersheva (16).jpg', '/gmarbeersheva (17).jpg', '/gmarbeersheva (18).jpg', '/gmarbeersheva (19).jpg', '/gmarbeersheva (20).jpg', '/gmarbeersheva (21).jpg', '/gmarbeersheva (22).jpg', '/gmarbeersheva (23).jpg', '/gmarbeersheva (24).jpg', '/gmarbeersheva (25).jpg', '/gmarbeersheva (26).jpg', '/gmarbeersheva (27).jpg', '/gmarbeersheva (28).jpg', '/gmarbeersheva (29).jpg', '/gmarbeersheva (30).jpg', '/gmarbeersheva (31).jpg', '/gmarbeersheva (32).jpg', '/gmarbeersheva (33).jpg', '/gmarbeersheva (34).jpg', '/gmarbeersheva (35).jpg', '/gmarbeersheva (36).jpg', '/gmarbeersheva (37).jpg', '/gmarbeersheva (38).jpg', '/gmarbeersheva (39).jpg', '/gmarbeersheva (40).jpg',
    ],
    featured: true,
    services: ['גבס', 'חשמל', 'שפכטל', 'צבע', 'התאמת ספרינקלרים', 'מטבחי רפאל'],
    challenges: [
      'התאמה מדויקת לתכנון האדריכלי',
      'שילוב מערכת ספרינקלרים קיימת עם העיצוב החדש',
      'תיאום שוטף מול המעצבת וספקי הפרויקט',
    ],
    solutions: [
      'עבודה בשיתוף פעולה צמוד עם האדריכלית והמעצבת',
      'גמישות בביצוע והתאמה לצורכי הפרויקט',
      'רמת גימור גבוהה בכל שלב',
    ],
    designer: 'בתאל שיכוורגר (אדריכלית ומעצבת)',
    photographer: 'מאור מויאל',
  },
  {
    id: 'bim-team',
    title: 'BIM TEAM',
    description: 'עבודות גמר מקיפות למתחם משרדים – גבס, צבע, תקרות אקוסטיות ועוד',
    fullDescription: 'ביצוע עבודות גמר במתחם משרדים חדש עבור חברת BIM TEAM, בשטח של כ־400 מ"ר, תוך ליווי צמוד לכל שלבי הבנייה והתאמה מלאה לתכנון האדריכלי. העבודות כללו מגוון מערכות גבס – כולל מחיצות והנמכות דקורטיביות, יישום שפכטל וגימורים ברמה גבוהה, פתרונות צבע מדויקים לכל חלל והתקנת תקרות אקוסטיות מסוגים שונים, לצד עבודות גמר נוספות שבוצעו בהתאם לצורכי השטח והפרויקט. התוצאה היא חלל משרדי מוקפד, פונקציונלי ונעים לעבודה – עם גימור מדויק ועמידה מלאה בדרישות הלקוח והחזון התכנוני.',
    category: 'עסקי',
    location: 'אזור תעשייה עומר',
    year: '2024',
    size: '400 מ"ר',
    client: 'BIM TEAM',
    image: '/bimteam-(10)_optimized.jpg',
    gallery: [
  '/bimteam-(1)_optimized.jpg', '/bimteam-(2)_optimized.jpg', '/bimteam-(3)_optimized.jpg', '/bimteam-(4)_optimized.jpg', '/bimteam-(5)_optimized.jpg', '/bimteam-(6)_optimized.jpg', '/bimteam-(7)_optimized.jpg', '/bimteam-(8)_optimized.jpg', '/bimteam-(9)_optimized.jpg', '/bimteam-(10)_optimized.jpg',
    ],
    featured: true,
    services: ['גבס', 'שפכטל', 'צבע', 'תקרות אקוסטיות', 'עבודות גמר'],
    challenges: [
      'ליווי צמוד לכל שלבי הבנייה',
      'התאמה מלאה לתכנון האדריכלי המורכב',
      'ביצוע מגוון רחב של פתרונות גבס ותקרות',
    ],
    solutions: [
      'תיאום שוטף עם צוות האדריכלות',
      'גמישות בביצוע והתאמה לצורכי הפרויקט',
      'שימוש בטכניקות מתקדמות לגימור מושלם',
    ],
    designer: 'זיו אדריכלים',
    photographer: 'ניצן הפנר',
  },
  {
    id: 'axelrod-group',
    title: 'Axelrod Group',
    description: 'חלל משרדים מעוצב עם פתרונות גמר מדויקים וליווי מקצועי מקצה לקצה',
    fullDescription: 'עבודות גמר במתחם משרדים חדש עבור חברת Axelrod Group, בשטח של כ־250 מ"ר. העבודות כללו שילוב מדויק של פתרונות גבס, תקרות דקורטיביות, יישום שפכטל בגימור חלק, עבודות צבע מוקפדות – לצד ליווי שוטף ותיאום צמוד מול צוות התכנון והעיצוב, לכל אורך שלבי הפרויקט. התוצאה היא סביבת עבודה מודרנית ומוקפדת, עם תכנון פונקציונלי, פתרונות אקוסטיים מדויקים ורמת גימור גבוהה לכל פרט.',
    category: 'עסקי',
    location: 'אזור תעשייה עומר',
    year: '2024',
    size: '250 מ"ר',
    client: 'Axelrod Group',
    image: '/432945154_708137614727639_989807349552420525_n.jpg',
    gallery: [
      '/432945154_708137614727639_989807349552420525_n.jpg',
      '/432947242_3710846665839652_5026148165854929605_n.jpg',
      '/432961566_288777207438002_3989589082024435304_n.jpg',
      '/432970851_392292843748169_4254188102849734756_n.jpg',
      '/432983463_602410975435014_8572049395622787958_n.jpg',
      '/3454353252352525.jpg',
    ],
    featured: true,
    services: ['גבס', 'תקרות דקורטיביות', 'שפכטל', 'צבע', 'עבודות גמר'],
    challenges: [
      'תיאום צמוד עם צוות תכנון ועיצוב',
      'ביצוע מדויק של פרטים אדריכליים מורכבים',
      'שילוב פתרונות אקוסטיים בחלל עבודה פתוח',
    ],
    solutions: [
      'ליווי שוטף לאורך כל שלבי הפרויקט',
      'שימוש בטכניקות מתקדמות לגימור מושלם',
      'תכנון מדויק של פתרונות תקרות וגבס',
    ],
    designer: 'מירי ואטורי',
    photographer: 'אבי קבלו',
  },
  {
    id: 'breakery-bakery',
    title: 'מאפיית Breakery',
    description: 'עבודות גמר למאפיית Breakery – ליווי מלא מהתכנון ועד המפתח',
    fullDescription: 'עבודות גמר למאפיית Breakery החדשה במתחם רסקו סיטי בבאר שבע, שבוצעו תוך ליווי מלא משלב התכנון ועד למסירה. העבודות כללו פירוקים והתאמות, עבודות גבס מעוצבות, מערכות חשמל, התאמות מיזוג, שפכטל וצבע בגימור מוקפד, תקרת עץ דקורטיבית, ריצוף מותאם ועבודות נוספות – כולן בוצעו תוך שיתוף פעולה צמוד עם צוות התכנון, הספקים והנגרות בשטח. התוצאה: מאפייה מעוצבת ומזמינה, עם תכנון מוקפד, חומרים איכותיים וגימור ברמה גבוהה – חוויית חלל שמשלבת פונקציונליות ואסתטיקה.',
    category: 'מסחרי',
    location: 'רסקו סיטי, באר שבע',
    year: '2025',
    size: '200 מ"ר',
    client: 'Breakery',
    image: '/bakery-(1)_optimized.jpg',
    gallery: [
      '/bakery-(1)_optimized.jpg', '/bakery-(2)_optimized.jpg', '/bakery-(3)_optimized.jpg', '/bakery-(4)_optimized.jpg', '/bakery-(5)_optimized.jpg', '/bakery-(6)_optimized.jpg', '/bakery-(7)_optimized.jpg', '/bakery-(8)_optimized.jpg', '/bakery-(9)_optimized.jpg', '/bakery-(10)_optimized.jpg', '/bakery-(11)_optimized.jpg', '/bakery-(12)_optimized.jpg', '/bakery-(13)_optimized.jpg', '/bakery-(14)_optimized.jpg', '/bakery-(15)_optimized.jpg', '/bakery-(16)_optimized.jpg', '/bakery-(17)_optimized.jpg',
    ],
    featured: true,
    services: ['פירוקים והתאמות', 'גבס', 'חשמל', 'התאמות מיזוג', 'שפכטל', 'צבע', 'תקרת עץ דקורטיבית', 'ריצוף'],
    challenges: [
      'ליווי מלא משלב התכנון ועד המסירה',
      'תיאום צמוד בין צוות התכנון, הספקים והנגרות',
      'שילוב פתרונות עיצוביים מורכבים כולל תקרת עץ דקורטיבית',
    ],
    solutions: [
      'שיתוף פעולה צמוד עם הבונות – אדריכלות ועיצוב פנים',
      'עבודה בשיתוף עם מתן נחימוב – נגרות ועיצוב',
      'גימור מוקפד בכל שלב עם חומרים איכותיים',
    ],
    designer: 'הבונות – אדריכלות ועיצוב פנים',
    photographer: 'מאור מויאל',
  },
  {
    id: 'park-penthouse',
    title: 'פנטהאוז שכונת הפארק',
    description: 'פנטהאוז – עבודות גמר בשכונת הפארק, באר שבע',
    fullDescription: 'עבודות גמר לפנטהאוז יוקרתי בשכונת הפארק החדשה בבאר שבע, תוך הקפדה על איכות ביצוע, פרטים מדויקים והתאמה מלאה לתכנון האדריכלי. הפרויקט כלל שיתוף פעולה רציף עם האדריכל, תיאום מול הספקים בשטח וביצוע בגימור גבוה, בהתאם לאופי הדירה והסטנדרט המצופה מפרויקט מגורים מסוג זה. התוצאה: דירת פנטהאוז מעוצבת באווירה נקייה, שקטה ויוקרתית – עם הקפדה על כל פרט וביצוע שמעניק ביטחון, שקט נפשי וסטנדרט שמכבד את התכנון.',
    category: 'מגורים',
    location: 'שכונת הפארק, באר שבע',
    year: '2025',
    size: '250 מ"ר',
    client: 'פרטי',
    image: '/penthouse_(1).jpg',
    gallery: [
      '/penthouse_(1).jpg',
      '/penthouse_(2).jpg',
      '/penthouse_(3).jpg',
      '/penthouse_(4).jpg',
      '/penthouse_(5).jpg',
      '/penthouse (6).jpg', '/penthouse (7).jpg', '/penthouse (8).jpg', '/penthouse (9).jpg', '/penthouse (10).jpg', '/penthouse (11).jpg', '/penthouse (12).jpg', '/penthouse (13).jpg', '/penthouse (14).jpg', '/penthouse (15).jpg', '/penthouse (16).jpg', '/penthouse (17).jpg', '/penthouse (18).jpg', '/penthouse (19).jpg', '/penthouse (20).jpg', '/penthouse (21).jpg', '/penthouse (22).jpg', '/penthouse (23).jpg', '/penthouse (24).jpg', '/penthouse (25).jpg', '/penthouse (26).jpg', '/penthouse (27).jpg', '/penthouse (28).jpg', '/penthouse (29).jpg', '/penthouse (30).jpg', '/penthouse (31).jpg', '/penthouse (32).jpg', '/penthouse (33).jpg', '/penthouse (34).jpg', '/penthouse (35).jpg', '/penthouse (36).jpg', '/penthouse (37).jpg', '/penthouse (38).jpg', '/penthouse (39).jpg', '/penthouse (40).jpg', '/penthouse (41).jpg', '/penthouse (42).jpg', '/penthouse (43).jpg', '/penthouse (44).jpg', '/penthouse (45).jpg', '/penthouse (46).jpg', '/penthouse (47).jpg', '/penthouse (48).jpg', '/penthouse (49).jpg', '/penthouse (50).jpg', '/penthouse (51).jpg', '/penthouse (52).jpg', '/penthouse (53).jpg', '/penthouse (54).jpg', '/penthouse (55).jpg', '/penthouse (56).jpg', '/penthouse (57).jpg', '/penthouse (58).jpg', '/penthouse (59).jpg', '/penthouse (60).jpg', '/penthouse (61).jpg', '/penthouse (62).jpg', '/penthouse (63).jpg', '/penthouse (64).jpg', '/penthouse (65).jpg', '/penthouse (66).jpg', '/penthouse (67).jpg', '/penthouse (68).jpg',
    ],
    featured: true,
    services: ['עבודות חשמל ותאורה', 'פתרונות גבס', 'תקרות מונמכות', 'נישות', 'צבע ושפכטל', 'תיאום ספקים'],
    challenges: [
      'הקפדה על איכות ביצוע ופרטים מדויקים',
      'התאמה מלאה לתכנון האדריכלי',
      'שיתוף פעולה רציף עם האדריכל והספקים',
    ],
    solutions: [
      'עבודות חשמל ותאורה תוך התייחסות לפיזור, עוצמה ועיצוב',
      'פתרונות גבס ייחודיים לפי תכנון',
      'צבע ושפכטל בגימור מוקפד בהתאמה לפלטת החומרים',
    ],
    designer: 'מאיר ליפמן',
    photographer: 'יונתן תמיר',
  },
  {
    id: 'beer-sheva-house',
    title: 'שיפוץ כללי לבית פרטי',
    description: 'שדרוג כולל לבית פרטי בבאר שבע – עבודות פנים וחוץ בליווי תכנון אדריכלי מוקפד',
    fullDescription: 'שדרוג כולל לבית פרטי בבאר שבע, שכלל עבודות פנים וחוץ בליווי תכנון אדריכלי מוקפד. הפרויקט כלל פירוק תשתיות קיימות, עבודות מבניות ושורת עבודות גמר מקיפות, שבוצעו תוך שימת דגש על דיוק, התאמה אישית ואיכות גבוהה לכל אורך הדרך. התוצאה היא בית מחודש, פונקציונלי ומעוצב – עם תשתיות חדשות, פתרונות מותאמים אישית וגימור מוקפד בכל פרט.',
    category: 'מגורים',
    location: 'באר שבע',
    year: '2024',
    size: '180 מ"ר',
    client: 'פרטי',
    image: '/dsc07844_optimized.jpg',
    gallery: [
      '/dsc07844_optimized.jpg',
      '/dsc07849_optimized.jpg',
      '/dsc07854_optimized.jpg',
      '/dsc07859_optimized.jpg',
      '/dsc07864_optimized.jpg',
      '/dsc07867_optimized.jpg', 
      '/dsc07872_optimized.jpg', '/dsc07875_optimized.jpg', '/dsc07880_optimized.jpg', '/dsc07885_optimized.jpg', '/dsc07890-edit_optimized.jpg', '/dsc07900-edit_optimized.jpg', '/dsc07905_optimized.jpg', '/dsc07910_optimized.jpg', '/dsc07915-edit_optimized.jpg', '/dsc07922_optimized.jpg', '/dsc07927_optimized.jpg', '/dsc07932_optimized.jpg', '/dsc07937_optimized.jpg', '/dsc07942_optimized.jpg', '/dsc07947_optimized.jpg', '/dsc07952_optimized.jpg', '/dsc07957_optimized.jpg', '/dsc07962_optimized.jpg', '/dsc07967_optimized.jpg', '/dsc07972_optimized.jpg', '/dsc07977_optimized.jpg', '/dsc07982_optimized.jpg', '/dsc07987_optimized.jpg', '/dsc07992_optimized.jpg', '/dsc08002_optimized.jpg', '/dsc08012_optimized.jpg', '/dsc08015_optimized.jpg', '/dsc08022_optimized.jpg', '/dsc08027_optimized.jpg', '/dsc08032_optimized.jpg', '/dsc08037_optimized.jpg', '/dsc08042_optimized.jpg', '/dsc08047_optimized.jpg', '/dsc08052-edit_optimized.jpg', '/dsc08062-edit_optimized.jpg', '/dsc08067_optimized.jpg', '/dsc08072-edit_optimized.jpg', '/dsc08077_optimized.jpg', '/dsc08082_optimized.jpg', '/dsc08087_optimized.jpg', '/dsc08092_optimized.jpg', '/dsc08095_optimized.jpg', '/dsc08102_optimized.jpg', '/dsc08107_optimized.jpg', '/dsc08110_optimized.jpg', '/dsc08117_optimized.jpg', '/dsc08122_optimized.jpg', '/dsc08191_optimized.jpg',
    ],
    featured: true,
    services: ['פירוקים', 'חיזוק מבנה', 'חשמל תלת פאזי', 'אינסטלציה', 'ריצוף מדוקק', 'מערכות מיזוג', 'אלומיניום', 'מטבח', 'טיח', 'שליכט צבעוני', 'דלתות קו אפס', 'גבס', 'שפכטל', 'צבע'],
    challenges: [
      'פירוק תשתיות קיימות ובניית תשתיות חדשות מהיסוד',
      'תיאום מערך רחב של קבלנים ומקצועות שונים',
      'עמידה בדרישות תכנוניות ואדריכליות מורכבות',
    ],
    solutions: [
      'ליווי צמוד של אדריכלית לכל שלבי הפרויקט',
      'ניהול פרויקט מקצועי ותכנון שלבי מוקפד',
      'שימוש בחומרים ופתרונות איכותיים ומותאמים אישית',
    ],
    designer: 'בתאל שיכוורגר (אדריכלית ומעצבת)',
    photographer: 'מאור מויאל',
  },
  {
    id: 'omer-villa',
    title: 'שדרוג בית פרטי | עומר',
    description: 'שדרוג מלא לבית פרטי בעומר – כולל תשתיות, ניסורי בטון, עבודות גמר ומטבח חדש',
    fullDescription: 'שדרוג מקיף לבית פרטי ביישוב עומר, שבוצע בליווי צוות תכנון מקצועי ותוך התאמה מדויקת לצרכים ולחזון של הדיירים. העבודות כללו פירוקים נרחבים וניסורי בטון מלווים בקונסטרוקטור, החלפה מלאה של תשתיות החשמל והאינסטלציה, התקנת דלתות חדשות, עבודות ריצוף, טיח, גבס, שפכטל וצבע, וכן החלפה של חלונות אלומיניום, דלת כניסה ומטבח. התוצאה היא בית מחודש, בטוח ומעוצב, עם מערכות חדשות, חללים משודרגים ורמת ביצוע גבוהה לכל אורך הדרך.',
    category: 'מגורים',
    location: 'עומר',
    year: '2024',
    size: '300 מ"ר',
    client: 'פרטי',
    image: '/privatehomeomer_(1).jpg',
    gallery: [
      '/privatehomeomer_(1).jpg',
      '/privatehomeomer_(2).jpg',
      '/privatehomeomer_(3).jpg',
      '/privatehomeomer_(4).jpg',
      '/privatehomeomer_(5).jpg',
      '/privatehomeomer (6).jpg', '/privatehomeomer (7).jpg', '/privatehomeomer (8).jpg', '/privatehomeomer (9).jpg', '/privatehomeomer (10).jpg', '/privatehomeomer (11).jpg', '/privatehomeomer (12).jpg', '/privatehomeomer (13).jpg', '/privatehomeomer (14).jpg', '/privatehomeomer (15).jpg', '/privatehomeomer (16).jpg', '/privatehomeomer (17).jpg', '/privatehomeomer (18).jpg',
      
    ],
    featured: true,
    services: ['פירוקים', 'ניסורי בטון בליווי קונסטרוקטור', 'תשתיות חשמל ואינסטלציה', 'ריצוף', 'טיח', 'גבס', 'שפכטל', 'צבע', 'דלתות', 'מטבח', 'אלומיניום', 'דלת כניסה'],
    challenges: [
      'ניסורי בטון וחיזוק מבני תוך שמירה על בטיחות הבית',
      'תיאום מערך רחב של קבלנים ומקצועות',
      'החלפת תשתיות ומערכות קיימות מהיסוד',
    ],
    solutions: [
      'ליווי צמוד של קונסטרוקטור למהלכים המבניים',
      'תכנון אדריכלי מוקפד על ידי טל רובין ובתאל שיכוורגר',
      'ניהול פרויקט מקצועי עם שימוש בחומרים ופתרונות איכותיים',
    ],
    designer: 'טל רובין ובתאל שיכוורגר (אדריכלות ועיצוב פנים)',
    photographer: 'מאור מויאל',
  },
  {
    id: 'private-home-pool-beer-sheva',
    title: 'עבודות גמר בבית פרטי | באר שבע',
    description: 'עבודות גבס וחשמל כחלק מפרויקט עיצוב יוקרתי ומדויק',
    fullDescription: 'במסגרת פרויקט עיצוב לבית פרטי בבאר שבע, ביצענו עבודות גמר מדויקות שכללו פתרונות גבס מעוצבים ועבודות חשמל בהתאמה אישית – כחלק משפה תכנונית אחידה ומוקפדת. העבודות כללו הנמכות גבס דקורטיביות, קיר לקמין גז תוך הקפדה על תקני בטיחות, שילובי תאורה, גימורים מוקפדים בצבע ושפכטל – בשיתוף פעולה צמוד עם המעצבת והספקים בשטח. התוצאה: חלל מעוצב ומואר בקפידה, עם פתרונות מותאמים אישית, דיוק בביצוע והתאמה מושלמת לקונספט התכנוני של הבית.',
    category: 'מגורים',
    location: 'באר שבע',
    year: '2024',
    size: '600 מ"ר',
    client: 'פרטי',
    image: '/privatehomepool_(1).jpg',
    gallery: [
      '/privatehomepool_(1).jpg',
      '/privatehomepool_(2).jpg',
      '/privatehomepool_(3).jpg',
      '/privatehomepool_(4).jpg',
      '/privatehomepool_(5).jpg',
'/privatehomepool (6).jpg', '/privatehomepool (7).jpg', '/privatehomepool (8).jpg', '/privatehomepool (9).jpg', '/privatehomepool (10).jpg', '/privatehomepool (11).jpg', '/privatehomepool (12).jpg', '/privatehomepool (13).jpg', '/privatehomepool (14).jpg', '/privatehomepool (15).jpg', '/privatehomepool (16).jpg', '/privatehomepool (17).jpg', '/privatehomepool (18).jpg', '/privatehomepool (19).jpg', '/privatehomepool (20).jpg', '/privatehomepool (21).jpg', '/privatehomepool (22).jpg', '/privatehomepool (23).jpg', '/privatehomepool (24).jpg', '/privatehomepool (25).jpg', '/privatehomepool (26).jpg', '/privatehomepool (27).jpg', '/privatehomepool (28).jpg', '/privatehomepool (29).jpg', '/privatehomepool (30).jpg', '/privatehomepool (31).jpg', '/privatehomepool (32).jpg', '/privatehomepool (33).jpg', '/privatehomepool (34).jpg', '/privatehomepool (35).jpg', '/privatehomepool (36).jpg', '/privatehomepool (37).jpg', '/privatehomepool (38).jpg', '/privatehomepool (39).jpg', '/privatehomepool (40).jpg', '/privatehomepool (41).jpg', '/privatehomepool (42).jpg', '/privatehomepool (43).jpg', '/privatehomepool (44).jpg', '/privatehomepool (45).jpg', '/privatehomepool (46).jpg', '/privatehomepool (47).jpg', '/privatehomepool (48).jpg', '/privatehomepool (49).jpg', '/privatehomepool (50).jpg', '/privatehomepool (51).jpg', '/privatehomepool (52).jpg', '/privatehomepool (53).jpg', '/privatehomepool (54).jpg', '/privatehomepool (55).jpg', '/privatehomepool (56).jpg', '/privatehomepool (57).jpg', '/privatehomepool (58).jpg', '/privatehomepool (59).jpg', '/privatehomepool (60).jpg', '/privatehomepool (61).jpg', '/privatehomepool (62).jpg', '/privatehomepool (63).jpg', '/privatehomepool (64).jpg', '/privatehomepool (65).jpg', '/privatehomepool (66).jpg', '/privatehomepool (67).jpg', '/privatehomepool (68).jpg', '/privatehomepool (69).jpg', '/privatehomepool (70).jpg', '/privatehomepool (71).jpg', '/privatehomepool (72).jpg', '/privatehomepool (73).jpg', '/privatehomepool (74).jpg', '/privatehomepool (75).jpg', '/privatehomepool (76).jpg', '/privatehomepool (77).jpg', '/privatehomepool (78).jpg', '/privatehomepool (79).jpg', '/privatehomepool (80).jpg', '/privatehomepool (81).jpg', '/privatehomepool (82).jpg', '/privatehomepool (83).jpg', '/privatehomepool (84).jpg', '/privatehomepool (85).jpg', '/privatehomepool (86).jpg', '/privatehomepool (87).jpg', '/privatehomepool (88).jpg', '/privatehomepool (89).jpg', '/privatehomepool (90).jpg',
    ],
    featured: true,
    services: ['גבס', 'חשמל', 'קיר לקמין גז', 'הנמכות דקורטיביות', 'שפכטל', 'צבע', 'תאורה'],
    challenges: [
      'הנמכות גבס דקורטיביות בדיוק גבוה',
      'בניית קיר לקמין גז תוך עמידה בתקני בטיחות',
      'שילוב תאורה מעוצבת ופתרונות חשמל מותאמים',
    ],
    solutions: [
      'שיתוף פעולה צמוד עם המעצבת והספקים',
      'שפה תכנונית אחידה ומוקפדת',
      'התאמה אישית של כל פרט לקונספט העיצובי',
    ],
    designer: 'גל כהן',
    photographer: 'מאור מויאל',
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};
