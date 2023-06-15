import {removeUser} from "~/stores/auth/actions.js";

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
    path: '/profil/takip-ettiklerin',
    title: 'Takip Ettiklerin'
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
    onClick: () => removeUser(),
    sensitive: true,
    title: 'Çıkış Yap'
  },
]
