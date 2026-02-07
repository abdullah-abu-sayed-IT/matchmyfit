const colorThief = new ColorThief();
const uploadGrid = document.getElementById('uploadGrid');
const addMoreBtn = document.getElementById('addMore');
const manualInput = document.getElementById('manualColor');
const manualBtn = document.getElementById('manualAdd');
const seasonSelect = document.getElementById('season');
const skinSelect = document.getElementById('skinTone');
const occasionSelect = document.getElementById('occasion');
const colorListDiv = document.getElementById('colorList');
const bestComboDiv = document.getElementById('bestMatch');
const allPairsDiv = document.getElementById('allPairs');

let colorData = [];
let uploadCount = 0;

// ==================== রঙের নাম ====================
const colorNames = {
  '#000000': 'কালো / Black',
  '#ffffff': 'সাদা / White',
  '#ff0000': 'লাল / Red',
  '#00ff00': 'সবুজ / Green',
  '#0000ff': 'নীল / Blue',
  '#ffff00': 'হলুদ / Yellow',
  '#ff00ff': 'ম্যাজেন্টা / Magenta',
  '#00ffff': 'সায়ান / Cyan',
  '#800080': 'বেগুনি / Purple',
  '#ffa500': 'কমলা / Orange',
  '#808080': 'ধূসর / Gray',
  '#a52a2a': 'বাদামী / Brown',
  '#008080': 'টিল / Teal',
  '#4b0082': 'ইন্ডিগো / Indigo',
  '#32cd32': 'লাইম গ্রিন / Lime Green',
  '#ff69b4': 'হট পিঙ্ক / Hot Pink',
  '#000080': 'নেভি ব্লু / Navy Blue',
  '#f5f5dc': 'বেইজ / Beige',
  '#f0e68c': 'খাকি / Khaki',
  '#8b4513': 'চকলেট ব্রাউন / Chocolate Brown',
  '#cd853f': 'পার্চমেন্ট / Peru',
  '#deb887': 'বার্লি উড / Burlywood',
  '#d2b48c': 'ট্যান / Tan',
  '#bc8f8f': 'রোজি ব্রাউন / Rosy Brown',
  '#b8860b': 'ডার্ক গোল্ডেন রড / DarkGoldenRod',
  '#556b2f': 'ডার্ক অলিভ গ্রিন / DarkOliveGreen',
  '#006400': 'ডার্ক গ্রিন / DarkGreen',
  '#2f4f4f': 'ডার্ক স্লেট গ্রে / DarkSlateGray',
  '#191970': 'মিডনাইট ব্লু / MidnightBlue',
  '#483d8b': 'ডার্ক স্লেট ব্লু / DarkSlateBlue',
  '#6a5acd': 'স্লেট ব্লু / SlateBlue',
  '#7b68ee': 'মিডিয়াম স্লেট ব্লু / MediumSlateBlue',
  '#9370db': 'মিডিয়াম পার্পল / MediumPurple',
  '#ba55d3': 'মিডিয়াম অর্কিড / MediumOrchid',
  '#ff1493': 'ডিপ পিঙ্ক / DeepPink',
  '#db7093': 'পেল ভায়োলেট রেড / PaleVioletRed',
  '#ff6347': 'টমেটো / Tomato',
  '#ff4500': 'অরেঞ্জ রেড / OrangeRed',
  '#ff8c00': 'ডার্ক অরেঞ্জ / DarkOrange',
  '#ffd700': 'গোল্ড / Gold',
  '#daa520': 'গোল্ডেন রড / GoldenRod',
  '#eee8aa': 'পেল গোল্ডেন রড / PaleGoldenRod',
  '#bdb76b': 'ডার্ক খাকি / DarkKhaki',
  '#b0c4de': 'লাইট স্টিল ব্লু / LightSteelBlue',
  '#add8e6': 'লাইট ব্লু / LightBlue',
  '#87ceeb': 'স্কাই ব্লু / SkyBlue',
  '#87cefa': 'লাইট স্কাই ব্লু / LightSkyBlue',
  '#00bfff': 'ডিপ স্কাই ব্লু / DeepSkyBlue',
  '#1e90ff': 'ডজার ব্লু / DodgerBlue',
  '#6495ed': 'কর্নফ্লাওয়ার ব্লু / CornflowerBlue',
  '#4682b4': 'স্টিল ব্লু / SteelBlue',
  '#5f9ea0': 'ক্যাডেট ব্লু / CadetBlue',
  '#20b2aa': 'লাইট সি গ্রিন / LightSeaGreen',
  '#66cdaa': 'মিডিয়াম অ্যাকুয়া মেরিন / MediumAquaMarine',
  '#00fa9a': 'মিডিয়াম স্প্রিং গ্রিন / MediumSpringGreen',
  '#3cb371': 'মিডিয়াম সি গ্রিন / MediumSeaGreen',
  '#2e8b57': 'সি গ্রিন / SeaGreen',
  '#228b22': 'ফরেস্ট গ্রিন / ForestGreen',
  '#9acd32': 'ইয়েলো গ্রিন / YellowGreen',
  '#6b8e23': 'অলিভ ড্র্যাব / OliveDrab',
  '#f08080': 'লাইট করাল / LightCoral',
  '#e9967a': 'ডার্ক সালমন / DarkSalmon',
  '#fa8072': 'সালমন / Salmon',
  '#f4a460': 'স্যান্ডি ব্রাউন / SandyBrown',
  '#8fbc8f': 'ডার্ক সি গ্রিন / DarkSeaGreen',
  '#90ee90': 'লাইট গ্রিন / LightGreen',
  '#98fb98': 'পেল গ্রিন / PaleGreen',
  '#20b2aa': 'লাইট সি গ্রিন / LightSeaGreen',
  '#00ced1': 'ডার্ক টারকোয়াইজ / DarkTurquoise',
  '#40e0d0': 'টারকোয়াইজ / Turquoise',
  '#48d1cc': 'মিডিয়াম টারকোয়াইজ / MediumTurquoise',
  '#00ffff': 'সায়ান / Cyan',
  '#e0ffff': 'লাইট সায়ান / LightCyan',
  '#afeeee': 'পেল টারকোয়াইজ / PaleTurquoise',
  '#7fffd4': 'অ্যাকুয়া মেরিন / AquaMarine',
  '#b0e0e6': 'পাউডার ব্লু / PowderBlue',
  '#5f9ea0': 'ক্যাডেট ব্লু / CadetBlue',
  '#4682b4': 'স্টিল ব্লু / SteelBlue',
  '#6495ed': 'কর্নফ্লাওয়ার ব্লু / CornflowerBlue',
  '#1e90ff': 'ডজার ব্লু / DodgerBlue',
  '#00bfff': 'ডিপ স্কাই ব্লু / DeepSkyBlue',
  '#87cefa': 'লাইট স্কাই ব্লু / LightSkyBlue',
  '#87ceeb': 'স্কাই ব্লু / SkyBlue',
  '#add8e6': 'লাইট ব্লু / LightBlue',
  '#b0c4de': 'লাইট স্টিল ব্লু / LightSteelBlue',
  '#778899': 'লাইট স্লেট গ্রে / LightSlateGray',
  '#708090': 'স্লেট গ্রে / SlateGray',
  '#2f4f4f': 'ডার্ক স্লেট গ্রে / DarkSlateGray',
  '#696969': 'ডিম গ্রে / DimGray',
  '#a9a9a9': 'ডার্ক গ্রে / DarkGray',
  '#c0c0c0': 'সিলভার / Silver',
  '#d3d3d3': 'লাইট গ্রে / LightGray',
  '#dcdcdc': 'গেইনসবরো / Gainsboro',
  '#f5f5f5': 'হোয়াইট স্মোক / WhiteSmoke',
  '#f8f8ff': 'ঘোস্ট হোয়াইট / GhostWhite',
  '#f0fff0': 'হানি ডিউ / HoneyDew',
  '#f5fffa': 'মিন্ট ক্রিম / MintCream',
  '#f0ffff': 'অ্যাজুর / Azure',
  '#f0f8ff': 'আলিস ব্লু / AliceBlue',
  '#e6e6fa': 'ল্যাভেন্ডার / Lavender',
  '#fff0f5': 'ল্যাভেন্ডার ব্লাশ / LavenderBlush',
  '#ffe4e1': 'মিস্টি রোজ / MistyRose',
  '#fff5ee': 'সি শেল / SeaShell',
  '#fdf5e6': 'ওল্ড লেস / OldLace',
  '#faf0e6': 'লিনেন / Linen',
  '#faebd7': 'অ্যান্টিক হোয়াইট / AntiqueWhite',
  '#ffefdb': 'পেপি হোয়াইট / PapayaWhip',
  '#ffe4c4': 'বিস্কুইট / Bisque',
  '#ffdab9': 'পিচ পাফ / PeachPuff',
  '#ffdead': 'নেভাজো হোয়াইট / NavajoWhite',
  '#ffe4b5': 'মোকাসিন / Moccasin',
  '#fff8dc': 'কর্নসিল্ক / Cornsilk',
  '#fffacd': 'লেমন শিফন / LemonChiffon',
  '#fafad2': 'লাইট গোল্ডেন রড ইয়েলো / LightGoldenRodYellow',
  '#ffffe0': 'লাইট ইয়েলো / LightYellow',
  '#fffff0': 'আইভরি / Ivory',
  '#fffaf0': 'ফ্লোরাল হোয়াইট / FloralWhite',
  '#faebd7': 'অ্যান্টিক হোয়াইট / AntiqueWhite',
  // এখানে আরো যোগ করতে পারিস যদি চাস
};

// ==================== ম্যাচিং লজিক ====================
const matchGroups = {
  neutrals: ['#000000', '#ffffff', '#808080', '#c0c0c0', '#f5f5dc', '#d3d3d3', '#e0e0e0'],
  warm: ['#ff0000', '#ff4500', '#ff8c00', '#ffa500', '#ffd700', '#da70d6', '#ff1493', '#c2185b'],
  cool: ['#0000ff', '#00008b', '#000080', '#483d8b', '#6a5acd', '#4169e1', '#00bfff', '#4682b4'],
  earth: ['#8b4513', '#a0522d', '#cd853f', '#deb887', '#d2b48c', '#bc8f8f'],
  vibrant: ['#32cd32', '#00ff7f', '#7cfc00', '#adff2f', '#00fa9a', '#ff69b4'],
  pastel: ['#f8bbd0', '#e1bee7', '#d1c4e9', '#c5cae9', '#bbdefb', '#b3e5fc', '#b2dfdb']
};

function calculateMatchScore(c1, c2, season, skin, occasion) {
  c1 = c1.toLowerCase();
  c2 = c2.toLowerCase();

  let score = 5; // ডিফল্ট

  // নিউট্রাল বোনাস
  if (matchGroups.neutrals.includes(c1) || matchGroups.neutrals.includes(c2)) score += 5;

  // একই গ্রুপ বোনাস
  for (const group in matchGroups) {
    if (matchGroups[group].includes(c1) && matchGroups[group].includes(c2)) score += 4;
  }

  // ওয়ার্ম + কুল পেনাল্টি
  if ((matchGroups.warm.includes(c1) && matchGroups.cool.includes(c2)) ||
      (matchGroups.warm.includes(c2) && matchGroups.cool.includes(c1))) score -= 2;

  // সিজন ফিল্টার
  if (season !== 'all') {
    if (season === 'summer' && (matchGroups.warm.includes(c1) || matchGroups.vibrant.includes(c1))) score += 3;
    if (season === 'winter' && (matchGroups.cool.includes(c1) || matchGroups.neutrals.includes(c1))) score += 3;
    if (season === 'spring' && matchGroups.pastel.includes(c1)) score += 3;
    if (season === 'autumn' && matchGroups.earth.includes(c1)) score += 3;
  }

  // স্কিন টোন বোনাস
  if (skin !== 'all') {
    if (skin === 'fair' && (matchGroups.cool.includes(c1) || matchGroups.pastel.includes(c1))) score += 2;
    if (skin === 'dark' && (matchGroups.warm.includes(c1) || matchGroups.earth.includes(c1))) score += 2;
    if (skin === 'medium' && matchGroups.neutrals.includes(c1)) score += 2;
  }

  // অকেশন বোনাস
  if (occasion !== 'all') {
    if (occasion === 'formal' && matchGroups.neutrals.includes(c1)) score += 3;
    if (occasion === 'party' && matchGroups.vibrant.includes(c1)) score += 3;
    if (occasion === 'wedding' && (matchGroups.pastel.includes(c1) || matchGroups.earth.includes(c1))) score += 2;
    if (occasion === 'date' && matchGroups.warm.includes(c1)) score += 2;
  }

  return Math.max(0, Math.min(10, score)); // 0-10 এর মধ্যে রাখো
}

// ==================== নতুন আপলোড বক্স ====================
function addUploadBox() {
  if (uploadCount >= 10) {
    addMoreBtn.style.display = 'none';
    return;
  }

  const index = uploadCount++;
  const box = document.createElement('div');
  box.className = 'upload-box';
  box.innerHTML = `
    <label>ছবি ${index + 1}</label>
    <input type="file" accept="image/*" data-index="${index}" />
    <div class="preview" id="prev${index}"></div>
  `;
  uploadGrid.appendChild(box);

  box.querySelector('input').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.onload = () => {
        document.getElementById(`prev\( {index}`).innerHTML = `<img src=" \){ev.target.result}" alt="ছবি" />`;

        const rgb = colorThief.getColor(img);
        const hex = '#' + rgb.map(x => x.toString(16).padStart(2,'0')).join('').toLowerCase();
        const name = colorNames[hex] || hex.toUpperCase();

        addColorCard(hex, name, 'upload', index);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// প্রথম ৩টা
for (let i = 0; i < 3; i++) addUploadBox();

// আরো যোগ
addMoreBtn.addEventListener('click', addUploadBox);

// ==================== ম্যানুয়াল ====================
manualBtn.addEventListener('click', () => {
  let val = manualInput.value.trim().toLowerCase();
  if (!val) return;

  let hex = val.startsWith('#') ? val : null;

  if (!hex) {
    for (const key in colorNames) {
      if (colorNames[key].toLowerCase().includes(val)) {
        hex = key;
        break;
      }
    }
  }

  if (!hex) {
    alert("দুঃখিত, এই রঙ চিনতে পারিনি। হেক্স কোড বা পরিচিত নাম লিখো।");
    return;
  }

  const name = colorNames[hex] || hex.toUpperCase();
  addColorCard(hex, name, 'manual');
  manualInput.value = '';
});

// ==================== কালার কার্ড যোগ ====================
function addColorCard(hex, name, source, index = null) {
  const card = document.createElement('div');
  card.className = 'color-card';
  card.innerHTML = `
    <div class="color-swatch" style="background:${hex}"></div>
    <div>${source === 'upload' ? 'ছবি ' + (parseInt(index)+1) : 'ম্যানুয়াল'}</div>
    <div class="color-name">${name}</div>
    <div>${hex.toUpperCase()}</div>
  `;
  colorListDiv.appendChild(card);

  colorData.push({ hex, name, source });

  document.getElementById('results').style.display = 'block';
  showBestMatches();
}

// ==================== সেরা ম্যাচ দেখানো ====================
function showBestMatches() {
  if (colorData.length < 2) return;

  const season = document.getElementById('season').value;
  const skin = document.getElementById('skinTone').value;
  const occasion = document.getElementById('occasion').value;

  let bestScore = -1;
  let bestPair = null;
  let pairsHTML = '';

  for (let i = 0; i < colorData.length; i++) {
    for (let j = i + 1; j < colorData.length; j++) {
      const c1 = colorData[i].hex;
      const c2 = colorData[j].hex;
      const score = calculateMatchScore(c1, c2, season, skin, occasion);

      pairsHTML += `
        <div class="pair ${score >= 8 ? 'best' : ''}">
          <div class="colors">
            <div class="swatch" style="background:${c1}"></div>
            <div class="swatch" style="background:${c2}"></div>
          </div>
          <div>
            <span class="score">${score}/10</span>
            ${score >= 8 ? ' – সেরা ম্যাচ!' : ''}
          </div>
        </div>
      `;

      if (score > bestScore) {
        bestScore = score;
        bestPair = [colorData[i], colorData[j]];
      }
    }
  }

  document.getElementById('all-pairs').innerHTML = pairsHTML;

  if (bestPair) {
    bestComboDiv.innerHTML = `
      <div class="best-title">সেরা ম্যাচ (স্কোর ${bestScore}/10)</div>
      <div class="colors">
        <div class="big-swatch" style="background:${bestPair[0].hex}"></div>
        <div class="big-swatch" style="background:${bestPair[1].hex}"></div>
      </div>
      <div class="match-text">
        ${bestPair[0].name} + ${bestPair[1].name}
      </div>
      <small>সিজন: ${season.toUpperCase()} | স্কিন: ${skin.toUpperCase()} | অকেশন: ${occasion.toUpperCase()}</small>
    `;
  }
}

// ফিল্টার চেঞ্জ হলে রি-ক্যালকুলেট
document.querySelectorAll('select').forEach(sel => {
  sel.addEventListener('change', showBestMatches);
});
