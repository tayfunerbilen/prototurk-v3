export const SIDEBAR_MENU = [
  {
    path: '/',
    title: 'Anasayfa'
  },
  {
    path: '/kesfet',
    title: 'Keşfet'
  },
  {
    path: '/makaleler',
    title: 'Makaleler'
  },
  {
    path: '/soru-cevap',
    title: 'Soru & Cevap'
  },
  {
    path: '/ders-istekleri',
    title: 'Ders İstekleri',
    new: true
  }
]

export const QA_SIDEBAR_MENU = [
  {
    path: '/soru-cevap',
    title: 'Son Sorular'
  },
  {
    path: '/cevaplanmamis-sorular',
    title: 'Cevaplanmamış Sorular'
  },
  {
    path: '/cozulmemis-sorular',
    title: 'Çözülmemiş Sorular'
  },
  {
    path: '/kategoriler',
    title: 'Kategoriler'
  },
  {
    path: '/populer-sorular',
    title: 'Popüler Sorular'
  }
]

export const PROFILE_SIDEBAR_MENU = [
  {
    path: '/profil',
    title: 'Profil'
  },
  {
    path: '/profil/takipciler',
    title: 'Takipçiler'
  },
  {
    path: '/profil/takip-edilenler',
    title: 'Takip Edilenler'
  },
  {
    path: '/profil/sorular',
    title: 'Sorular'
  },
  {
    path: '/profil/cevaplar',
    title: 'Cevaplar'
  },
  {
    path: '/profil/bildirimler',
    title: 'Bildirimler'
  },
  {
    path: '/',
    title: 'Herkese Açık Profilin'
  },
  {
    onClick: () => console.log('logout butonuna basildi'),
    sensitive: true,
    title: 'Çıkış Yap'
  },
]
