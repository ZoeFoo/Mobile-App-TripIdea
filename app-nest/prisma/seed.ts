import { PrismaClient } from '@prisma/client'
import { Transportation } from '../src/transportations/entities/transportation.entity';
const prisma = new PrismaClient()

// Country
const chName_countries = [
    "日本",
    "台灣",
    "韓國",
    "港澳",
    "泰國",
    "新加坡",
    "馬來西亞",
    "德國",
    "義大利",
    "法國",
    "英國",
    "荷蘭",
    "比利時",
    "盧森堡",
    "瑞士",
    "奧地利",
    "島嶼",
    "土耳其",
    "美國",
    "加拿大",
    "中國",
    "澳洲",
    "紐西蘭",
    "冰島",
    "瑞典",
    "挪威",
    "芬蘭",
    "杜拜",
    "跨國",
    "其他國家"
]

const engName_countries = [
    "Japan",
    "Taiwan",
    "South Korea",
    "Hong Kong and Macau",
    "Thailand",
    "Singapore",
    "Malaysia",
    "Germany",
    "Italy",
    "France",
    "United Kingdom",
    "Netherlands",
    "Belgium",
    "Luxembourg",
    "Switzerland",
    "Austria",
    "Islands",
    "Turkey",
    "United States",
    "Canada",
    "China",
    "Australia",
    "New Zealand",
    "Iceland",
    "Sweden",
    "Norway",
    "Finland",
    "Dubai",
    "Cross-border",
    "Other Countries"
]

async function insertCountries() {
    for (let x = 0; x < chName_countries.length; x++) {
        let countryEngName = engName_countries[x];
        let countryChName = chName_countries[x];
        const country = await prisma.country.create({
            data: {
                engName: `${countryEngName}`,
                chName: `${countryChName}`
            },
        })
        console.log({ country })
    }
}


//area
//Japan
const jp_chName_areas = [
    "東京",
    "大阪",
    "關東",
    "關西",
    "北海道",
    "九州",
    "沖繩",
    "中部、北陸",
    "四國、中國",
    "東北"
]

const jp_engName_areas = [
    "Tokyo",
    "Osaka",
    "Kanto",
    "Kansai",
    "Hokkaido",
    "Kyushu",
    "Okinawa",
    "Chubu and Hokuriku",
    "Shikoku and Chugoku",
    "Tohoku"
];

async function insertJPAreas() {
    for (let x = 0; x < jp_chName_areas.length; x++) {
        let jpEngNameAreas = jp_engName_areas[x];
        let jpChNameAreas = jp_chName_areas[x];
        const areaJP = await prisma.area.create({
            data: {
                engName: `${jpEngNameAreas}`,
                chName: `${jpChNameAreas}`,
                countryId: 1
            },
        })
        console.log({ areaJP })
    }
}

//Taiwan
const tw_chName_areas = [
    "北部",
    "中部",
    "南部",
    "東部",
    "外島"
]

const tw_engName_areas = [
    "Northern Taiwan",
    "Central Taiwan",
    "Southern Taiwan",
    "Eastern Taiwan",
    "Outlying Islands"
];

async function insertTWAreas() {
    for (let x = 0; x < tw_chName_areas.length; x++) {
        let twEngNameAreas = tw_engName_areas[x];
        let twChNameAreas = tw_chName_areas[x];
        const areaTW = await prisma.area.create({
            data: {
                engName: `${twEngNameAreas}`,
                chName: `${twChNameAreas}`,
                countryId: 2
            },
        })
        console.log({ areaTW })
    }
}

//South Korea
const sk_chName_areas = [
    "首爾",
    "釜山",
    "濟州島"
]

const sk_engName_areas = [
    "Seoul",
    "Busan",
    "Jeju Island"
];

async function insertSKAreas() {
    for (let x = 0; x < sk_chName_areas.length; x++) {
        let skEngNameAreas = sk_engName_areas[x];
        let skChNameAreas = sk_chName_areas[x];
        const areaSK = await prisma.area.create({
            data: {
                engName: `${skEngNameAreas}`,
                chName: `${skChNameAreas}`,
                countryId: 3
            },
        })
        console.log({ areaSK })
    }
}

//Hong Kong and Macau
const hkm_chName_areas = [
    "香港",
    "澳門"
]

const hkm_engName_areas = [
    "Hong Kong",
    "Macao"
]

async function insertHKMAreas() {
    for (let x = 0; x < hkm_chName_areas.length; x++) {
        let hkmEngNameAreas = hkm_engName_areas[x];
        let hkmChNameAreas = hkm_chName_areas[x];
        const areaHKM = await prisma.area.create({
            data: {
                engName: `${hkmEngNameAreas}`,
                chName: `${hkmChNameAreas}`,
                countryId: 4
            },
        })
        console.log({ areaHKM })
    }
}

//Thailand
const th_chName_areas = [
    "曼谷",
    "芭堤雅",
    "清邁",
    "蘇美島",
    "普吉島",
    "華欣",
    "大城",
    "北碧"
]

const th_engName_areas = [
    "Bangkok",
    "Pattaya",
    "Chiang Mai",
    "Koh Samui",
    "Phuket Island",
    "Hua Hin",
    "Ayutthaya",
    "Nakhon Pathom"
]

async function insertTHAreas() {
    for (let x = 0; x < th_chName_areas.length; x++) {
        let thEngNameAreas = th_engName_areas[x];
        let thChNameAreas = th_chName_areas[x];
        const areaTH = await prisma.area.create({
            data: {
                engName: `${thEngNameAreas}`,
                chName: `${thChNameAreas}`,
                countryId: 5
            },
        })
        console.log({ areaTH })
    }
}

//Singapore
const sg_chName_areas = [
    "市區",
    "聖淘沙"
]

const sg_engName_areas = [
    "City",
    "Sentosa"
]

async function insertSGAreas() {
    for (let x = 0; x < sg_chName_areas.length; x++) {
        let sgEngNameAreas = sg_engName_areas[x];
        let sgChNameAreas = sg_chName_areas[x];
        const areaSG = await prisma.area.create({
            data: {
                engName: `${sgEngNameAreas}`,
                chName: `${sgChNameAreas}`,
                countryId: 6
            },
        })
        console.log({ areaSG })
    }
}

//Malaysia
const my_chName_areas = [
    "吉隆坡",
    "馬六甲",
    "沙巴",
    "山打根"
]

const my_engName_areas = [
    "Kuala Lumpur",
    "Malacca",
    "Sabah",
    "Sandakan"
]

async function insertMYAreas() {
    for (let x = 0; x < my_chName_areas.length; x++) {
        let myEngNameAreas = my_engName_areas[x];
        let myChNameAreas = my_chName_areas[x];
        const areaMY = await prisma.area.create({
            data: {
                engName: `${myEngNameAreas}`,
                chName: `${myChNameAreas}`,
                countryId: 7
            },
        })
        console.log({ areaMY })
    }
}

//Germany
const de_chName_areas = [
    "柏林",
    "慕尼黑",
    "法蘭克福",
    "紐倫堡",
    "不來梅",
    "科隆",
    "斯圖加特"
]

const de_engName_areas = [
    "Berlin",
    "Munich",
    "Frankfurt",
    "Nuremberg",
    "Bremen",
    "Cologne",
    "Stuttgart"
]

async function insertDEAreas() {
    for (let x = 0; x < de_chName_areas.length; x++) {
        let deEngNameAreas = de_engName_areas[x];
        let deChNameAreas = de_chName_areas[x];
        const areaDE = await prisma.area.create({
            data: {
                engName: `${deEngNameAreas}`,
                chName: `${deChNameAreas}`,
                countryId: 8
            },
        })
        console.log({ areaDE })
    }
}

//Italy
const it_chName_areas = [
    "威尼斯",
    "羅馬",
    "佛羅倫斯",
    "米蘭",
    "維諾那",
    "比薩",
    "阿爾貝羅貝洛"
]

const it_engName_areas = [
    "Venice",
    "Rome",
    "Florence",
    "Milan",
    "Verona",
    "Pisa",
    "Alberobello"
]

async function insertITAreas() {
    for (let x = 0; x < it_chName_areas.length; x++) {
        let itEngNameAreas = it_engName_areas[x];
        let itChNameAreas = it_chName_areas[x];
        const areaIT = await prisma.area.create({
            data: {
                engName: `${itEngNameAreas}`,
                chName: `${itChNameAreas}`,
                countryId: 9
            },
        })
        console.log({ areaIT })
    }
}

//France
const fr_chName_areas = [
    "巴黎",
    "里昂",
    "馬賽",
    "坎城",
    "亞爾"
]

const fr_engName_areas = [
    "Paris",
    "Lyon",
    "Marseille",
    "Cannes",
    "Aix-en-Provence"
]

async function insertFRAreas() {
    for (let x = 0; x < fr_chName_areas.length; x++) {
        let frEngNameAreas = fr_engName_areas[x];
        let frChNameAreas = fr_chName_areas[x];
        const areaFR = await prisma.area.create({
            data: {
                engName: `${frEngNameAreas}`,
                chName: `${frChNameAreas}`,
                countryId: 10
            },
        })
        console.log({ areaFR })
    }
}

//United Kingdom
const uk_chName_areas = [
    "倫敦",
    "利物浦",
    "牛津",
    "劍橋",
    "愛丁堡",
    "史特拉福",
    "巴斯"
]

const uk_engName_areas = [
    "London",
    "Liverpool",
    "Oxford",
    "Cambridge",
    "Edinburgh",
    "Stratford-upon-Avon",
    "Bath"
]

async function insertUKAreas() {
    for (let x = 0; x < uk_chName_areas.length; x++) {
        let ukEngNameAreas = uk_engName_areas[x];
        let ukChNameAreas = uk_chName_areas[x];
        const areaUK = await prisma.area.create({
            data: {
                engName: `${ukEngNameAreas}`,
                chName: `${ukChNameAreas}`,
                countryId: 11
            },
        })
        console.log({ areaUK })
    }
}

//Netherlands
const nl_chName_areas = [
    "阿姆斯特丹",
    "鹿特丹",
    "海牙",
    "羊角村"
]

const nl_engName_areas = [
    "Amsterdam",
    "Rotterdam",
    "The Hague",
    "Giethoorn"
]

async function insertNLAreas() {
    for (let x = 0; x < nl_chName_areas.length; x++) {
        let nlEngNameAreas = nl_engName_areas[x];
        let nlChNameAreas = nl_chName_areas[x];
        const areaNL = await prisma.area.create({
            data: {
                engName: `${nlEngNameAreas}`,
                chName: `${nlChNameAreas}`,
                countryId: 12
            },
        })
        console.log({ areaNL })
    }
}

//Belgium
const be_chName_areas = [
    "布魯塞爾",
    "布魯日",
    "根特"
]

const be_engName_areas = [
    "Brussels",
    "Bruges",
    "Ghent"
]

async function insertBEAreas() {
    for (let x = 0; x < be_chName_areas.length; x++) {
        let beEngNameAreas = be_engName_areas[x];
        let beChNameAreas = be_chName_areas[x];
        const areaBE = await prisma.area.create({
            data: {
                engName: `${beEngNameAreas}`,
                chName: `${beChNameAreas}`,
                countryId: 13
            },
        })
        console.log({ areaBE })
    }
}

//Luxembourg
const lu_chName_areas = [
    "盧森堡市",
    "菲安登",
    "克萊沃"
]

const lu_engName_areas = [
    "Luxembourg City",
    "Vianden",
    "Clervaux"
]

async function insertLUAreas() {
    for (let x = 0; x < lu_chName_areas.length; x++) {
        let luEngNameAreas = lu_engName_areas[x];
        let luChNameAreas = lu_chName_areas[x];
        const areaLU = await prisma.area.create({
            data: {
                engName: `${luEngNameAreas}`,
                chName: `${luChNameAreas}`,
                countryId: 14
            },
        })
        console.log({ areaLU })
    }
}

//Switzerland
const ch_chName_areas = [
    "蘇黎世",
    "伯恩",
    "日內瓦",
    "策馬特",
    "琉森",
    "因特拉肯"
]

const ch_engName_areas = [
    "Zurich",
    "Bern",
    "Geneva",
    "Zermatt",
    "Lucerne",
    "Interlaken"
]

async function insertCHAreas() {
    for (let x = 0; x < ch_chName_areas.length; x++) {
        let chEngNameAreas = ch_engName_areas[x];
        let chChNameAreas = ch_chName_areas[x];
        const areaCH = await prisma.area.create({
            data: {
                engName: `${chEngNameAreas}`,
                chName: `${chChNameAreas}`,
                countryId: 15
            },
        })
        console.log({ areaCH })
    }
}

//Austria
const at_chName_areas = [
    "維也納",
    "薩爾斯堡"
]

const at_engName_areas = [
    "Vienna",
    "Salzburg"
]

async function insertATAreas() {
    for (let x = 0; x < at_chName_areas.length; x++) {
        let atEngNameAreas = at_engName_areas[x];
        let atChNameAreas = at_chName_areas[x];
        const areaAT = await prisma.area.create({
            data: {
                engName: `${atEngNameAreas}`,
                chName: `${atChNameAreas}`,
                countryId: 16
            },
        })
        console.log({ areaAT })
    }
}

//Islands
const il_chName_areas = [
    "民丹島",
    "帛琉",
    "馬爾地夫",
    "關島",
    "夏威夷",
    "長灘島",
    "巴拉望島",
    "薄荷島",
    "宿霧島",
    "峇里島",
    "塞席爾群島"
]

const il_engName_areas = [
    "Minda Nao Island",
    "Palau",
    "Maldives",
    "Guam",
    "Hawaii",
    "Long Beach Island",
    "Palawan Island",
    "Bohol Island",
    "Cebu Island",
    "Bali Island",
    "Seychelles Islands"
]

async function insertILAreas() {
    for (let x = 0; x < il_chName_areas.length; x++) {
        let ilEngNameAreas = il_engName_areas[x];
        let ilChNameAreas = il_chName_areas[x];
        const areaIL = await prisma.area.create({
            data: {
                engName: `${ilEngNameAreas}`,
                chName: `${ilChNameAreas}`,
                countryId: 17
            },
        })
        console.log({ areaIL })
    }
}

//Turkey
const tr_chName_areas = [
    "伊斯坦堡",
    "嘉那卡麗",
    "庫薩達西",
    "巴慕卡麗",
    "安塔利亞",
    "孔亞",
    "卡帕多其亞",
    "安卡拉",
    "蕃紅花城"
]

const tr_engName_areas = [
    "Istanbul",
    "Cappadocia",
    "Kusadasi",
    "Bodrum",
    "Antalya",
    "Konya",
    "Kapadokya",
    "Ankara",
    "Safranbolu"
]

async function insertTRAreas() {
    for (let x = 0; x < tr_chName_areas.length; x++) {
        let trEngNameAreas = tr_engName_areas[x];
        let trChNameAreas = tr_chName_areas[x];
        const areaTR = await prisma.area.create({
            data: {
                engName: `${trEngNameAreas}`,
                chName: `${trChNameAreas}`,
                countryId: 18
            },
        })
        console.log({ areaTR })
    }
}

//United States
const us_chName_areas = [
    "美東",
    "美西"
]

const us_engName_areas = [
    "East Coast USA",
    "West Coast USA"
]

async function insertUSAreas() {
    for (let x = 0; x < us_chName_areas.length; x++) {
        let usEngNameAreas = us_engName_areas[x];
        let usChNameAreas = us_chName_areas[x];
        const areaUS = await prisma.area.create({
            data: {
                engName: `${usEngNameAreas}`,
                chName: `${usChNameAreas}`,
                countryId: 19
            },
        })
        console.log({ areaUS })
    }
}

//Canada
const ca_chName_areas = [
    "溫哥華",
    "多倫多",
    "蒙特婁",
    "魁北克",
    "渥太華",
    "卡加立",
    "尼加拉瀑布",
    "維多利亞"
]

const ca_engName_areas = [
    "Vancouver",
    "Toronto",
    "Montreal",
    "Quebec",
    "Ottawa",
    "Calgary",
    "Niagara Falls",
    "Victoria"
]

async function insertCAAreas() {
    for (let x = 0; x < ca_chName_areas.length; x++) {
        let caEngNameAreas = ca_engName_areas[x];
        let caChNameAreas = ca_chName_areas[x];
        const areaCA = await prisma.area.create({
            data: {
                engName: `${caEngNameAreas}`,
                chName: `${caChNameAreas}`,
                countryId: 20
            },
        })
        console.log({ areaCA })
    }
}

//China
const cn_chName_areas = [
    "東北",
    "華北",
    "華中",
    "華南",
    "自治區"
]

const cn_engName_areas = [
    "Northeast China",
    "North China",
    "Central China",
    "South China",
    "Autonomous Regions"
]

async function insertCNAreas() {
    for (let x = 0; x < cn_chName_areas.length; x++) {
        let cnEngNameAreas = cn_engName_areas[x];
        let cnChNameAreas = cn_chName_areas[x];
        const areaCN = await prisma.area.create({
            data: {
                engName: `${cnEngNameAreas}`,
                chName: `${cnChNameAreas}`,
                countryId: 21
            },
        })
        console.log({ areaCN })
    }
}

//Australia
const au_chName_areas = [
    "悉尼",
    "布里斯班",
    "墨爾本",
    "黃金海岸",
    "凱恩斯",
    "阿德雷德",
    "坎培拉",
    "柏斯"
]

const au_engName_areas = [
    "Sydney",
    "Brisbane",
    "Melbourne",
    "Gold Coast",
    "Cairns",
    "Adelaide",
    "Canberra",
    "Perth"
]

async function insertAUAreas() {
    for (let x = 0; x < au_chName_areas.length; x++) {
        let auEngNameAreas = au_engName_areas[x];
        let auChNameAreas = au_chName_areas[x];
        const areaAU = await prisma.area.create({
            data: {
                engName: `${auEngNameAreas}`,
                chName: `${auChNameAreas}`,
                countryId: 22
            },
        })
        console.log({ areaAU })
    }
}

//New Zealand
const nz_chName_areas = [
    "奧克蘭",
    "基督城",
    "尼爾遜",
    "但尼丁",
    "皇后鎮",
    "漢米彌頓",
    "瓦納卡",
    "威靈頓"
]

const nz_engName_areas = [
    "Auckland",
    "Christchurch",
    "Nelson",
    "Dunedin",
    "Queenstown",
    "Hamilton",
    "Wanaka",
    "Wellington"
]

async function insertNZAreas() {
    for (let x = 0; x < nz_chName_areas.length; x++) {
        let nzEngNameAreas = nz_engName_areas[x];
        let nzChNameAreas = nz_chName_areas[x];
        const areaNZ = await prisma.area.create({
            data: {
                engName: `${nzEngNameAreas}`,
                chName: `${nzChNameAreas}`,
                countryId: 23
            },
        })
        console.log({ areaNZ })
    }
}

//Cross-border
const cb_chName_areas = [
    "歐洲",
    "美加",
    "北歐五國",
    "紐澳",
    "新馬",
    "南美洲",
    "美墨",
]

const cb_engName_areas = [
    "Europe",
    "USA & Canada",
    "Nordic Countries",
    "Australia & New Zealand",
    "Singapore & Malaysia",
    "South America",
    "USA & Mexico"
]

async function insertCBAreas() {
    for (let x = 0; x < cb_chName_areas.length; x++) {
        let cbEngNameAreas = cb_engName_areas[x];
        let cbChNameAreas = cb_chName_areas[x];
        const areaCB = await prisma.area.create({
            data: {
                engName: `${cbEngNameAreas}`,
                chName: `${cbChNameAreas}`,
                countryId: 29
            },
        })
        console.log({ areaCB })
    }
}

//Other Countries
const oc_chName_areas = [
    "西班牙",
    "葡萄牙",
    "波蘭",
    "捷克",
    "希臘",
    "梵諦岡",
    "匈牙利",
    "斯洛維尼亞",
    "摩納哥",
    "克羅埃西亞",
    "丹麥",
    "俄羅斯",
    "汶萊",
    "伊朗",
    "埃及",
    "印度",
    "越南",
    "尼泊爾",
    "不丹",
    "巴西",
    "秘魯",
    "智利",
    "阿根廷",
    "古巴",
    "柬埔寨",
    "菲律賓"
]

const oc_engName_areas = [
    "Spain",
    "Portugal",
    "Poland",
    "Czech Republic",
    "Greece",
    "Vatican City",
    "Hungary",
    "Slovenia",
    "Monaco",
    "Croatia",
    "Denmark",
    "Russia",
    "Brunei",
    "Iran",
    "Egypt",
    "India",
    "Vietnam",
    "Nepal",
    "Bhutan",
    "Brazil",
    "Peru",
    "Chile",
    "Argentina",
    "Cuba",
    "Cambodia",
    "Philippines"
]

async function insertOCAreas() {
    for (let x = 0; x < oc_chName_areas.length; x++) {
        let ocEngNameAreas = oc_engName_areas[x];
        let ocChNameAreas = oc_chName_areas[x];
        const areaOC = await prisma.area.create({
            data: {
                engName: `${ocEngNameAreas}`,
                chName: `${ocChNameAreas}`,
                countryId: 30
            },
        })
        console.log({ areaOC })
    }
}


//city
//Japan
//Tokyo
const tk_chName_cities = [
    "池袋",
    "新宿",
    "原宿",
    "表參道",
    "涉谷",
    "六本木",
    "上野",
    "淺草",
    "晴空塔",
    "秋葉原",
    "東京車站",
    "銀座",
    "台場",
    "自由之丘",
    "吉祥寺",
    "中野",
    "迪士尼",
    "東京鐵塔"
]

const tk_engName_cities = [
    "Ikebukuro",
    "Shinjuku",
    "Harajuku",
    "Omotesando",
    "Shibuya",
    "Roppongi",
    "Ueno",
    "Asakusa",
    "Tokyo Skytree",
    "Akihabara",
    "Tokyo Station",
    "Ginza",
    "Odaiba",
    "Jiyugaoka",
    "Kichijoji",
    "Nakano",
    "Disneyland",
    "Tokyo Tower"
]

async function insertTKCities() {
    for (let x = 0; x < tk_chName_cities.length; x++) {
        let tkEngNameCities = tk_engName_cities[x];
        let tkChNameCities = tk_chName_cities[x];
        const cityTK = await prisma.city.create({
            data: {
                engName: `${tkEngNameCities}`,
                chName: `${tkChNameCities}`,
                areaId: 1
            },
        })
        console.log({ cityTK })
    }
}

//Osaka
const ok_chName_cities = [
    "梅田",
    "中之島",
    "心齋橋",
    "道頓堀",
    "難波",
    "天王寺",
    "鶴橋",
    "大阪城",
    "京橋",
    "環球影城",
    "港區",
    "住吉大社",
    "萬博公園"
]

const ok_engName_cities = [
    "Umeda",
    "Nakanoshima",
    "Shinsaibashi",
    "Dotonbori",
    "Namba",
    "Tennoji",
    "Tsuruhashi",
    "Osaka Castle",
    "Kyobashi",
    "Universal Studios",
    "Minato Ward",
    "Sumiyoshi Taisha",
    "Expo '70 Commemorative Park"
]

async function insertOKCities() {
    for (let x = 0; x < ok_chName_cities.length; x++) {
        let okEngNameCities = ok_engName_cities[x];
        let okChNameCities = ok_chName_cities[x];
        const cityOK = await prisma.city.create({
            data: {
                engName: `${okEngNameCities}`,
                chName: `${okChNameCities}`,
                areaId: 2
            },
        })
        console.log({ cityOK })
    }
}

//Kanto
const kt_chName_cities = [
    "箱根",
    "鎌倉",
    "橫濱",
    "靜岡",
    "伊豆半島",
    "濱松",
    "日光",
    "那須高原"
]

const kt_engName_cities = [
    "Hakone",
    "Kamakura",
    "Yokohama",
    "Shizuoka",
    "Izu Peninsula",
    "Hamamatsu",
    "Nikko",
    "Nasu Highlands"
]

async function insertKTCities() {
    for (let x = 0; x < kt_chName_cities.length; x++) {
        let ktEngNameCities = kt_engName_cities[x];
        let ktChNameCities = kt_chName_cities[x];
        const cityKT = await prisma.city.create({
            data: {
                engName: `${ktEngNameCities}`,
                chName: `${ktChNameCities}`,
                areaId: 3
            },
        })

        console.log({ cityKT })
    }
}

//Kansai
const ks_chName_cities = [
    "京都",
    "嵐山",
    "宇治",
    "天橋立",
    "貴船鞍馬",
    "神戶",
    "城崎溫泉",
    "有馬溫泉",
    "奈良"
]

const ks_engName_cities = [
    "Kyoto",
    "Arashiyama",
    "Uji",
    "Amanohashidate",
    "Kifune & Kurama",
    "Kobe",
    "Kinosaki Onsen",
    "Arima Onsen",
    "Nara"
]

async function insertKSCities() {
    for (let x = 0; x < ks_chName_cities.length; x++) {
        let ksEngNameCities = ks_engName_cities[x];
        let ksChNameCities = ks_chName_cities[x];
        const cityKS = await prisma.city.create({
            data: {
                engName: `${ksEngNameCities}`,
                chName: `${ksChNameCities}`,
                areaId: 4
            },
        })

        console.log({ cityKS })
    }
}

//Hokkaido
const hko_chName_cities = [
    "函館",
    "室蘭",
    "札幌",
    "旭川",
    "帶廣",
    "釧路",
    "登別",
    "網走",
    "稚內"
]

const hko_engName_cities = [
    "Hakodate",
    "Muroran",
    "Sapporo",
    "Asahikawa",
    "Obihiro",
    "Kushiro",
    "Noboribetsu",
    "Abashiri",
    "Wakkanai"
]

async function insertHKOCities() {
    for (let x = 0; x < hko_chName_cities.length; x++) {
        let hkoEngNameCities = hko_engName_cities[x];
        let hkoChNameCities = hko_chName_cities[x];
        const cityHKO = await prisma.city.create({
            data: {
                engName: `${hkoEngNameCities}`,
                chName: `${hkoChNameCities}`,
                areaId: 5
            },
        })

        console.log({ cityHKO })
    }
}

//Kyushu
const ky_chName_cities = [
    "福岡",
    "佐賀",
    "長崎",
    "大分",
    "熊本",
    "鹿兒島",
    "宮崎"
]

const ky_engName_cities = [
    "Fukuoka",
    "Saga",
    "Nagasaki",
    "Oita",
    "Kumamoto",
    "Kagoshima",
    "Miyazaki"
]

async function insertKYCities() {
    for (let x = 0; x < ky_chName_cities.length; x++) {
        let kyEngNameCities = ky_engName_cities[x];
        let kyChNameCities = ky_chName_cities[x];
        const cityKY = await prisma.city.create({
            data: {
                engName: `${kyEngNameCities}`,
                chName: `${kyChNameCities}`,
                areaId: 6
            },
        })

        console.log({ cityKY })
    }
}

//Okinawa
const oka_chName_cities = [
    "那霸",
    "石垣島",
    "宮古島"
]

const oka_engName_cities = [
    "Naha",
    "Ishigaki Island",
    "Miyako Island"
]

async function insertOKYCities() {
    for (let x = 0; x < oka_chName_cities.length; x++) {
        let okaEngNameCities = oka_engName_cities[x];
        let okaChNameCities = oka_chName_cities[x];
        const cityOKA = await prisma.city.create({
            data: {
                engName: `${okaEngNameCities}`,
                chName: `${okaChNameCities}`,
                areaId: 7
            },
        })

        console.log({ cityOKA })
    }
}

//Chubu and Hokuriku
const cah_chName_cities = [
    "名古屋",
    "輕井澤",
    "立山黑部",
    "合掌村",
    "金澤",
    "富士山"
]

const cah_engName_cities = [
    "Karuizawa",
    "Tateyama Kurobe Alpine Route",
    "Shirakawago Village",
    "Kanazawa"
]

async function insertCAHCities() {
    for (let x = 0; x < cah_chName_cities.length; x++) {
        let cahEngNameCities = cah_engName_cities[x];
        let cahChNameCities = cah_chName_cities[x];
        const cityCAH = await prisma.city.create({
            data: {
                engName: `${cahEngNameCities}`,
                chName: `${cahChNameCities}`,
                areaId: 8
            },
        })

        console.log({ cityCAH })
    }
}

//Shikoku and Chugoku
const sac_chName_cities = [
    "岡山",
    "倉敷美觀",
    "廣島",
    "愛媛",
    "香川",
    "高知",
    "德島",
]

const sac_engName_cities = [
    "Okayama",
    "Kurashiki Bikan District",
    "Hiroshima",
    "Ehime",
    "Kagawa",
    "Kochi",
    "Tokushima"
]

async function insertSACCities() {
    for (let x = 0; x < sac_chName_cities.length; x++) {
        let sacEngNameCities = sac_engName_cities[x];
        let sacChNameCities = sac_chName_cities[x];
        const citySAC = await prisma.city.create({
            data: {
                engName: `${sacEngNameCities}`,
                chName: `${sacChNameCities}`,
                areaId: 9
            },
        })

        console.log({ citySAC })
    }
}

//Tohoku
const thk_chName_cities = [
    "仙台",
    "秋田",
    "新潟",
    "山形",
    "青森",
]

const thk_engName_cities = [
    "Sendai",
    "Akita",
    "Niigata",
    "Yamagata",
    "Aomori"
]

async function insertTHKCities() {
    for (let x = 0; x < thk_chName_cities.length; x++) {
        let thkEngNameCities = thk_engName_cities[x];
        let thkChNameCities = thk_chName_cities[x];
        const cityTHK = await prisma.city.create({
            data: {
                engName: `${thkEngNameCities}`,
                chName: `${thkChNameCities}`,
                areaId: 10
            },
        })

        console.log({ cityTHK })
    }
}

//Taiwan
//Northern Taiwan
const nt_chName_cities = [
    "基隆市",
    "台北市",
    "新北市",
    "桃園市",
    "新竹市(縣)",
    "宜蘭縣",
]

const nt_engName_cities = [
    "Keelung City",
    "Taipei City",
    "New Taipei City",
    "Taoyuan City",
    "Hsinchu City/County",
    "Yilan County"
]

async function insertNTCities() {
    for (let x = 0; x < nt_chName_cities.length; x++) {
        let ntEngNameCities = nt_engName_cities[x];
        let ntChNameCities = nt_chName_cities[x];
        const cityNT = await prisma.city.create({
            data: {
                engName: `${ntEngNameCities}`,
                chName: `${ntChNameCities}`,
                areaId: 11
            },
        })

        console.log({ cityNT })
    }
}

//Central Taiwan
const ct_chName_cities = [
    "苗栗縣",
    "台中市",
    "彰化縣",
    "雲林縣",
    "南投縣",
]

const ct_engName_cities = [
    "Miaoli County",
    "Taichung City",
    "Changhua County",
    "Yunlin County",
    "Nantou County"
]

async function insertCTCities() {
    for (let x = 0; x < ct_chName_cities.length; x++) {
        let ctEngNameCities = ct_engName_cities[x];
        let ctChNameCities = ct_chName_cities[x];
        const cityCT = await prisma.city.create({
            data: {
                engName: `${ctEngNameCities}`,
                chName: `${ctChNameCities}`,
                areaId: 12
            },
        })

        console.log({ cityCT })
    }
}

//Southern Taiwan
const st_chName_cities = [
    "嘉義市(縣)",
    "台南市",
    "高雄市",
    "屏東縣",
]

const st_engName_cities = [
    "Chiayi City/County",
    "Tainan City",
    "Kaohsiung City",
    "Pingtung County"
]

async function insertSTCities() {
    for (let x = 0; x < st_chName_cities.length; x++) {
        let stEngNameCities = st_engName_cities[x];
        let stChNameCities = st_chName_cities[x];
        const cityST = await prisma.city.create({
            data: {
                engName: `${stEngNameCities}`,
                chName: `${stChNameCities}`,
                areaId: 13
            },
        })

        console.log({ cityST })
    }
}

//Eastern Taiwan
const et_chName_cities = [
    "花蓮縣",
    "台東縣",
]

const et_engName_cities = [
    "Hualien County",
    "Taitung County"
]


async function insertETCities() {
    for (let x = 0; x < et_chName_cities.length; x++) {
        let etEngNameCities = et_engName_cities[x];
        let etChNameCities = et_chName_cities[x];
        const cityET = await prisma.city.create({
            data: {
                engName: `${etEngNameCities}`,
                chName: `${etChNameCities}`,
                areaId: 14
            },
        })

        console.log({ cityET })
    }
}

//Outlying Islands
const oi_chName_cities = [
    "金門縣",
    "連江縣(馬祖)",
    "澎湖縣",
    "蘭嶼",
    "小琉球",
    "綠島",
]

const oi_engName_cities = [
    "Kinmen County",
    "Lienchiang County (Matsu)",
    "Penghu County",
    "Lanyu",
    "Liuqiu Island",
    "Green Island"
]


async function insertOICities() {
    for (let x = 0; x < oi_chName_cities.length; x++) {
        let oiEngNameCities = oi_engName_cities[x];
        let oiChNameCities = oi_chName_cities[x];
        const cityOI = await prisma.city.create({
            data: {
                engName: `${oiEngNameCities}`,
                chName: `${oiChNameCities}`,
                areaId: 14
            },
        })

        console.log({ cityOI })
    }
}

//United States
//East Coast USA
const ecu_chName_cities = [
    "紐約",
    "波士頓",
    "費城",
    "華盛頓",
    "奧蘭多",
    "邁阿密",
    "芝加哥",
    "休士頓",
]

const ecu_engName_cities = [
    "New York",
    "Boston",
    "Philadelphia",
    "Washington",
    "Orlando",
    "Miami",
    "Chicago",
    "Houston"
]

async function insertECUCities() {
    for (let x = 0; x < ecu_chName_cities.length; x++) {
        let ecuEngNameCities = ecu_engName_cities[x];
        let ecuChNameCities = ecu_chName_cities[x];
        const cityECU = await prisma.city.create({
            data: {
                engName: `${ecuEngNameCities}`,
                chName: `${ecuChNameCities}`,
                areaId: 99
            },
        })

        console.log({ cityECU })
    }
}

//West Coast USA
const wcu_chName_cities = [
    "拉斯維加斯",
    "舊金山",
    "洛杉磯",
    "安那翰",
    "夏威夷",
    "西雅圖",
    "聖地牙哥",
    "鳳凰城",
]

const wcu_engName_cities = [
    "Las Vegas",
    "San Francisco",
    "Los Angeles",
    "Anaheim",
    "Hawaii",
    "Seattle",
    "San Diego",
    "Phoenix"
]

async function insertWCUCities() {
    for (let x = 0; x < wcu_chName_cities.length; x++) {
        let wcuEngNameCities = wcu_engName_cities[x];
        let wcuChNameCities = wcu_chName_cities[x];
        const cityWCU = await prisma.city.create({
            data: {
                engName: `${wcuEngNameCities}`,
                chName: `${wcuChNameCities}`,
                areaId: 100
            },
        })

        console.log({ cityWCU })
    }
}

//China
//Northeast China
const ntc_chName_cities = [
    "東北",
    "哈爾濱",
    "長春",
    "瀋陽",
    "大連",
]

const ntc_engName_cities = [
    "Northeast",
    "Harbin",
    "Changchun",
    "Shenyang",
    "Dalian"
]

async function insertNTCCities() {
    for (let x = 0; x < ntc_chName_cities.length; x++) {
        let ntcEngNameCities = ntc_engName_cities[x];
        let ntcChNameCities = ntc_chName_cities[x];
        const cityNTC = await prisma.city.create({
            data: {
                engName: `${ntcEngNameCities}`,
                chName: `${ntcChNameCities}`,
                areaId: 109
            },
        })

        console.log({ cityNTC })
    }
}

// North China
const nc_chName_cities = [
    "北京",
    "天津",
    "濟南",
    "青島",
    "晉城",
    "鄭州",
    "承德",
]

const nc_engName_cities = [
    "Beijing",
    "Tianjin",
    "Jinan",
    "Qingdao",
    "Jincheng",
    "Zhengzhou",
    "Chengde"
]

async function insertNCCities() {
    for (let x = 0; x < nc_chName_cities.length; x++) {
        let ncEngNameCities = nc_engName_cities[x];
        let ncChNameCities = nc_chName_cities[x];
        const cityNC = await prisma.city.create({
            data: {
                engName: `${ncEngNameCities}`,
                chName: `${ncChNameCities}`,
                areaId: 110
            },
        })

        console.log({ cityNC })
    }
}

//Central China
const cc_chName_cities = [
    "武漢",
    "上海",
    "蘇州",
    "南京",
    "黃山",
    "杭州",
    "南通",
    "石家莊",
]

const cc_engName_cities = [
    "Wuhan",
    "Shanghai",
    "Suzhou",
    "Nanjing",
    "Huangshan",
    "Hangzhou",
    "Nantong",
    "Shijiazhuang",
]

async function insertCCCities() {
    for (let x = 0; x < cc_chName_cities.length; x++) {
        let ccEngNameCities = cc_engName_cities[x];
        let ccChNameCities = cc_chName_cities[x];
        const cityCC = await prisma.city.create({
            data: {
                engName: `${ccEngNameCities}`,
                chName: `${ccChNameCities}`,
                areaId: 111
            },
        })

        console.log({ cityCC })
    }
}

//South China
const sc_chName_cities = [
    "廈門",
    "廣州",
    "海南",
    "澳門",
    "深圳",
    "珠海",
    "貴陽",
    "蕪湖",
    "桂林",
    "三亞",
    "昆明",
    "長沙",
    "南昌",
    "成都",
    "重慶",
]

const sc_engName_cities = [
    "Xiamen",
    "Guangzhou",
    "Hainan",
    "Macao",
    "Shenzhen",
    "Zhuhai",
    "Guiyang",
    "Wuhu",
    "Guilin",
    "Sanya",
    "Kunming",
    "Changsha",
    "Nanchang",
    "Chengdu",
    "Chongqing",
];

async function insertSCCities() {
    for (let x = 0; x < sc_chName_cities.length; x++) {
        let scEngNameCities = sc_engName_cities[x];
        let scChNameCities = sc_chName_cities[x];
        const citySC = await prisma.city.create({
            data: {
                engName: `${scEngNameCities}`,
                chName: `${scChNameCities}`,
                areaId: 112
            },
        })

        console.log({ citySC })
    }
}

//Autonomous Regions
const ar_chName_cities = [
    "寧夏回族自治區",
    "西藏自治區",
    "新疆維吾爾自治區",
    "廣西壯族自治區",
    "內蒙古自治區",
]

const ar_engName_cities = [
    "Ningxia Hui Autonomous Region",
    "Tibet Autonomous Region",
    "Xinjiang Uyghur Autonomous Region",
    "Guangxi Zhuang Autonomous Region",
    "Inner Mongolia Autonomous Region",
];

async function insertARCities() {
    for (let x = 0; x < ar_chName_cities.length; x++) {
        let arEngNameCities = ar_engName_cities[x];
        let arChNameCities = ar_chName_cities[x];
        const cityAR = await prisma.city.create({
            data: {
                engName: `${arEngNameCities}`,
                chName: `${arChNameCities}`,
                areaId: 113
            },
        })

        console.log({ cityAR })
    }
}

//Cross-border
//Europe
const ep_chName_cities = [
    "荷比法",
    "英法",
    "德瑞",
    "奧捷",
    "西葡",
    "中歐",
    "南歐",
    "東歌",
    "西歐",
]

const ep_engName_cities = [
    "Netherlands and Belgium and France",
    "France and United Kingdom",
    "Germany and Switzerland",
    "Austria and Czech Republic",
    "Spain and Portugal",
    "Central Europe",
    "Southern Europe",
    "Eastern Europe",
    "Western Europe",
];

async function insertEPCities() {
    for (let x = 0; x < ep_chName_cities.length; x++) {
        let epEngNameCities = ep_engName_cities[x];
        let epChNameCities = ep_chName_cities[x];
        const cityEP = await prisma.city.create({
            data: {
                engName: `${epEngNameCities}`,
                chName: `${epChNameCities}`,
                areaId: 130
            },
        })

        console.log({ cityEP })
    }
}

//Other Countries
//Spain
const sn_chName_cities = [
    "馬德里",
    "巴塞隆納",
    "瓦倫西亞",
    "塞維爾",
    "托利多",
]

const sn_engName_cities = [
    "Madrid",
    "Barcelona",
    "Valencia",
    "Seville",
    "Toledo",
];

async function insertSNCities() {
    for (let x = 0; x < sn_chName_cities.length; x++) {
        let snEngNameCities = sn_engName_cities[x];
        let snChNameCities = sn_chName_cities[x];
        const citySN = await prisma.city.create({
            data: {
                engName: `${snEngNameCities}`,
                chName: `${snChNameCities}`,
                areaId: 137
            },
        })

        console.log({ citySN })
    }
}

//Portugal
const pt_chName_cities = [
    "里斯本",
    "法羅",
]

const pt_engName_cities = [
    "Lisbon",
    "Faro",
];

async function insertPTCities() {
    for (let x = 0; x < pt_chName_cities.length; x++) {
        let ptEngNameCities = pt_engName_cities[x];
        let ptChNameCities = pt_chName_cities[x];
        const cityPT = await prisma.city.create({
            data: {
                engName: `${ptEngNameCities}`,
                chName: `${ptChNameCities}`,
                areaId: 138
            },
        })

        console.log({ cityPT })
    }
}

//Russia
const rs_chName_cities = [
    "莫斯科",
    "海參威",
    "聖彼得堡",
]

const rs_engName_cities = [
    "Moscow",
    "Vladivostok",
    "Saint Petersburg",
];

async function insertRSCities() {
    for (let x = 0; x < rs_chName_cities.length; x++) {
        let rsEngNameCities = rs_engName_cities[x];
        let rsChNameCities = rs_chName_cities[x];
        const cityRS = await prisma.city.create({
            data: {
                engName: `${rsEngNameCities}`,
                chName: `${rsChNameCities}`,
                areaId: 148
            },
        })

        console.log({ cityRS })
    }
}


//User
const user_nickname = ['alice', 'tom', 'mary', 'peter'];

async function insertUser() {
    for (let x = 0; x < user_nickname.length; x++) {
        let userNickname = user_nickname[x];
        const user = await prisma.user.create({
            data: {
                email: `${userNickname}@email.com`,
                password: "12345678",
                nickname: `${userNickname}`
            }
        })
        console.log(user)
    }
}

//Transportation
const transportation_name = [
    '步行',
    '巴士',
    '計程車',
    '私家車',
    '地鐵',
    '船',
    '游輪',
    '飛機',
    '直昇機',
    '其他',
];

async function insertTransportation() {
    for (let x = 0; x < transportation_name.length; x++) {
        let transportationName = transportation_name[x];
        const transportation = await prisma.transportation.create({
            data: {
                name: `${transportationName}`
            }
        })
        console.log(transportation)
    }
}

//LocationCategory
const locationCategory_name = [
    '戶外',
    '酒店',
    '餐廳',
    '購物',
    '溫泉',
    '海灘',
    '劇院',
    '機場',
    '其他',
];

async function insertlocationCategory() {
    for (let x = 0; x < locationCategory_name.length; x++) {
        let locationCategoryName = locationCategory_name[x];
        const locationCategory = await prisma.locationCategory.create({
            data: {
                name: `${locationCategoryName}`
            }
        })
        console.log(locationCategory)
    }
}

//travelPlan
const travelPlan_AuthorId = [1, 2];
const travelPlan_Name = ["5 day japan trip", "4 day taiwan trip"];
const travelPlan_ReferencePlanId = [null, null];
const travelPlan_StartDay = ["2023-03-25", "2023-03-25"];
const travelPlan_EndDay = ["2023-03-30", "2023-03-29"];
const travelPlan_Thumbnail = [
    "public\travelPlan_thumbnalis\thumbnailFile-1679817189666-608433318.jpeg",
    "public\travelPlan_thumbnalis\thumbnailFile-1679817327581-986833022.jpeg"
];

async function inserTravelPlan() {
    for (let x = 0; x < travelPlan_AuthorId.length; x++) {
        let travelPlanAuthorId = travelPlan_AuthorId[x]
        let travelPlanName = travelPlan_Name[x]
        let travelPlanReferencePlanId = travelPlan_ReferencePlanId[x]
        let travelPlanStartDay = new Date(travelPlan_StartDay[x])
        let travelPlanEndDay = new Date(travelPlan_EndDay[x])
        let travelPlanThumbnail = travelPlan_Thumbnail[x]

        const travelPlan = await prisma.travelPlan.create({
            data: {
                authorId: travelPlanAuthorId,
                name: `${travelPlanName}`,
                referencePlanId: travelPlanReferencePlanId,
                startDay: travelPlanStartDay,
                endDay: travelPlanEndDay,
                thumbnail: `${travelPlanThumbnail}`,
            }
        })
        console.log(travelPlan)
    }
}


//Day
const days_travelPlanId = [1, 2]
const days_totalDay = [[1, 2, 3, 4, 5], [1, 2, 3, 4]]

async function insertDay() {
    for (let x = 0; x < days_travelPlanId.length; x++) {
        let daysTravelPlanId = days_travelPlanId[x]
        let daysTotalDay = days_totalDay[x];
        for (let x = 0; x < daysTotalDay.length; x++) {
            let planDay = x + 1;
            const day = await prisma.day.create({
                data: {
                    travelPlanId: daysTravelPlanId,
                    whichDay: planDay,
                }
            })
            console.log(day)
        }
    }
}

//Location
const location_DayId = [1];
const location_CountryId = [1];
const location_AreaId = [1];
const location_CityId = [9];
const location_LocationName = ["東京鐵塔 (Tokyo Tower)"];
const location_LocationImg = [
    "public\\travelPlanDetail_locationImgs\\locationImgFile-1679838194939-701527447.jpeg",
];
const location_CategoryId = [1]
const location_Address = ["東京都港區芝公園4丁目2−8"];
const location_Tel = [null];
const location_StartTime = ["14:00"];
const location_EndTime = ["16:00"];
const location_TransportationId = [5];
const location_Notes = [
    `都營大江戶線赤羽橋站，步行5分鐘 \n營業時間：09:00–23:00 (周一至周日) \n官網：https://www.tokyotower.co.jp/zh.html`,
];

async function inserLocation() {
    for (let x = 0; x < location_DayId.length; x++) {
        let locationDayId = location_DayId[x]
        let locationCountryId = location_CountryId[x]
        let locationAreaId = location_AreaId[x]
        let locationCityId = location_CityId[x]
        let locationLocationName = location_LocationName[x]
        let locationLocationImg = location_LocationImg[x]
        let locationCategoryId = location_CategoryId[x]
        let locationAddress = location_Address[x]
        let locationTel = location_Tel[x]
        let locationStartTime = location_StartTime[x]
        let locationEndTime = location_EndTime[x]
        let locationTransportationId = location_TransportationId[x]
        let locationNotes = location_Notes[x]
        const location = await prisma.location.create({
            data: {
                dayId: locationDayId,
                countryId: locationCountryId,
                areaId: locationAreaId,
                cityId: locationCityId,
                locationName: `${locationLocationName}`,
                locationImg: `${locationLocationImg}`,
                categoryId: locationCategoryId,
                address: `${locationAddress}`,
                tel: `${locationTel}`,
                startTime: locationStartTime,
                endTime: locationEndTime,
                transportationId: locationTransportationId,
                notes: `${locationNotes}`,
            }
        })
        console.log(location)
    }
}

//Share
const share_travelPlan = [1, 1]
const share_shareUserId = [2, 3]

async function insertShare() {
    for (let x = 0; x < share_travelPlan.length; x++) {
        let shareTravelPlan = share_travelPlan[x]
        let shareShareUserId = share_shareUserId[x]

        const share = await prisma.share.create({
            data: {
                travelPlanId: shareTravelPlan,
                shareUserId: shareShareUserId,
            }
        })
        console.log(share)
    }
}

















async function main() {
    //User
    await insertUser()
    //Country
    await insertCountries()
    //Area
    await insertJPAreas()
    await insertTWAreas()
    await insertSKAreas()
    await insertHKMAreas()
    await insertTHAreas()
    await insertSGAreas()
    await insertMYAreas()
    await insertDEAreas()
    await insertITAreas()
    await insertFRAreas()
    await insertUKAreas()
    await insertNLAreas()
    await insertBEAreas()
    await insertLUAreas()
    await insertCHAreas()
    await insertATAreas()
    await insertILAreas()
    await insertTRAreas()
    await insertUSAreas()
    await insertCAAreas()
    await insertCNAreas()
    await insertAUAreas()
    await insertNZAreas()
    await insertCBAreas()
    await insertOCAreas()
    //City
    //JP City
    await insertTKCities()
    await insertOKCities()
    await insertKTCities()
    await insertKSCities()
    await insertHKOCities()
    await insertKYCities()
    await insertOKYCities()
    await insertCAHCities()
    await insertSACCities()
    await insertTHKCities()
    //TW City
    await insertNTCities()
    await insertCTCities()
    await insertSTCities()
    await insertETCities()
    await insertOICities()
    //US City
    await insertECUCities()
    await insertWCUCities()
    //CH City
    await insertNTCCities()
    await insertNCCities()
    await insertCCCities()
    await insertSCCities()
    await insertARCities()
    //CB City
    await insertEPCities()
    //OC City
    await insertSNCities()
    await insertPTCities()
    await insertRSCities()

    //Transportation
    await insertTransportation()

    //LocationCategory
    await insertlocationCategory()

    //TravelPlan
    await inserTravelPlan()
    //Day
    await insertDay()
    //Location
    await inserLocation()
    //Share
    await insertShare()
}

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })
