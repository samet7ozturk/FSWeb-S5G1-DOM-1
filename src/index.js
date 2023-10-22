const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link, index) => {
  const key = `nav-item-${index + 1}`;
  link.textContent = siteContent.nav[key];
  link.setAttribute("class", "italic");
});

const ctaContent = {
  h1: "Bu DOM Mükemmel",
  button: "Başlayın",
};

const ctaText = document.querySelector(".cta-text");
const h1Element = ctaText.querySelector("h1");
const buttonElement = ctaText.querySelector("button");

h1Element.textContent = ctaContent.h1;
buttonElement.textContent = ctaContent.button;

const imgLogo = document.getElementById("logo-img");
imgLogo.setAttribute("src", siteContent.images["logo-img"]);

const imgCta = document.getElementById("cta-img");
imgCta.setAttribute("src", siteContent.images["cta-img"]);

const imgAccent = document.getElementById("middle-img");
imgAccent.setAttribute("src", siteContent.images["accent-img"]);

const contenth = document.querySelectorAll(".text-content h4");

const h4Arr = [];
for (const baslik in siteContent["ana-içerik"]) {
  if (baslik.includes("h4")) {
    h4Arr.push(siteContent["ana-içerik"][baslik]);
  }
}

for (let i = 0; i < contenth.length; i++) {
  contenth[i].textContent = h4Arr[i];
}

const contentp = document.querySelectorAll(".text-content p");

const pArr = [];
for (const paragraf in siteContent["ana-içerik"]) {
  if (paragraf.includes("içeri")) {
    pArr.push(siteContent["ana-içerik"][paragraf]);
  }
}

for (let i = 0; i < contentp.length; i++) {
  contentp[i].textContent = pArr[i];
}

const iletisimh = document.querySelector(".contact h4");
iletisimh.textContent = siteContent.iletisim["iletişim-h4"];

const iletisimp = document.querySelectorAll(".contact p");
const pArr2 = Object.values(siteContent.iletisim);

for (let i = 0; i < iletisimp.length; i++) {
  iletisimp[i].textContent = pArr2[i + 1];
}

const ft = document.querySelector("footer a");
ft.setAttribute("class", "bold");
ft.textContent = siteContent.footer.copyright;
