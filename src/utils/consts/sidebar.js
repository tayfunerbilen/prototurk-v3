import {removeUser} from "~/stores/auth/actions.js";
export const SIDEBAR_MENU = [
  {
    path: '/',
    title: "homepage"
  },
  {
    path: '/kesfet',
    title: 'discover'
  },
  {
    path: '/makaleler',
    title: 'articles'
  },
  {
    path: '/soru-cevap',
    title: 'questionAndAnswer'
  },
  {
    path: '/ders-istekleri',
    title: 'courseRequests',
    new: true
  }
]

export const QA_SIDEBAR_MENU = [
  {
    path: '/soru-cevap',
    title: 'finalQuestions'
  },
  {
    path: '/cevaplanmamis-sorular',
    title: 'unansweredQuestions'
  },
  {
    path: '/cozulmemis-sorular',
    title: 'unsolvedQuestions'
  },
  {
    path: '/kategoriler',
    title: 'categories'
  },
  {
    path: '/populer-sorular',
    title: 'popularQuestions'
  }
]

export const PROFILE_SIDEBAR_MENU = [
  {
    path: '/profil',
    title:'profile'
  },
  {
    path: '/profil/takipciler',
    title:'followers'
  },
  {
    path: '/profil/takip-ettiklerin',
    title: 'yourFollowers'
  },
  {
    path: '/profil/sorular',
    title:'questions'
  },
  {
    path: '/profil/cevaplar',
    title:'answers'
  },
  {
    path: '/profil/bildirimler',
    title:'notifications'
  },
  {
    path: '/',
    title: 'yourPublicProfile'
  },
  {
    onClick: () => removeUser(),
    sensitive: true,
    title: 'logout'
  },
]
