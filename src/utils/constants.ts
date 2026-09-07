import { User } from '../types';

export const fallbackConfig = {
  apiKey: "AIzaSyAl-s-hop58BYlUTX5OHTQndHZeISbswYo",
  authDomain: "m-liju-mla-office-system.firebaseapp.com",
  projectId: "m-liju-mla-office-system",
  storageBucket: "m-liju-mla-office-system.firebasestorage.app",
  messagingSenderId: "828986922400",
  appId: "1:828986922400:web:a2cdfe4b4edcb45d7680c5"
};

export const DEFAULT_CATEGORIES = [
  'CMDRF',
  'NORKA Santhwana',
  'tgrantz',
  'Invitation',
  'Road Complaint',
  'Help Request',
  'Personal Complaint',
  'Confidential Info'
];

export const DEFAULT_DESIGNATIONS = [
  'Citizen',
  'Panchayath President',
  'Panchayath Secretary',
  'Ward Member',
  'Asha Worker',
  'Political Leader',
  'Others'
];

export const INPUT_TYPES = [
  'Letter',
  'Phone Call',
  'Direct Visit',
  'WhatsApp Message',
  'Email',
  'Others'
];

export const LOCAL_BODIES = [
  'Kayamkulam Municipality',
  'Bharanikkavu Panchayath',
  'Chettikulangara Panchayath',
  'Kandalloor Panchayath',
  'Krishnapuram Panchayath',
  'Pathiyoor Panchayath',
  'Devikulangara Panchayath',
  'Other'
];

export const EXT_LINKS: Record<string, string> = {
  'CMDRF': 'https://donation.cmdrf.kerala.gov.in/',
  'NORKA Santhwana': 'https://sso.norkaroots.kerala.gov.in/login?ref=main&client_id=99dd0c83-dad4-4cb7-90e4-19e9f1ffe7e5',
  'tgrantz': 'https://tgrantz.kerala.gov.in/'
};

export const DEFAULT_USERS: User[] = [
  { id: 'admin', name: 'Adv. M Liju MLA', role: 'admin', pass: 'Liju@2026', email: 'mlijumlaofficial@gmail.com', enabled: true, canInput: true, canSeeReports: true, canSeeGlobal: true, canSeeGlobalOverview: true, canSeeDraftsView: true, canEditGlobalOverview: true, canEditOwnInputs: true, canReassign: true, canGenerateUpdationReport: true, canSeeRecentUpdations: true, phone: '', whatsapp: '' }
];

export const MORAL_QUOTES = [
  "അധികാരം ഒരു അവകാശമല്ല, ജനങ്ങളോടുള്ള വലിയ ഉത്തരവാദിത്തമാണ്.",
  "നീതി വൈകിക്കുന്നത് നീതി നിഷേധിക്കുന്നതിന് തുല്യമാണ്.",
  "ജനാധിപത്യം എന്നാൽ ജനങ്ങളുടെ, ജനങ്ങളാൽ, ജനങ്ങൾക്കുവേണ്ടിയുള്ള ഭരണമാണ്.",
  "സത്യസന്ധതയും അർപ്പണബോധവും ഭരണത്തിന്റെ ആണിക്കല്ലാണ്.",
  "ജനസേവനം തന്നെയാണ് ഏറ്റവും വലിയ ഈശ്വരസേവനം.",
  "സമൂഹത്തിലെ ഏറ്റവും ദുർബലനായ മനുഷ്യന്റെ കണ്ണീരൊപ്പുക എന്നതാണ് യഥാർത്ഥ ഭരണം."
];

