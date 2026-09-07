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
  "അധികാരം ഒരു അവകാശമല്ല, ജനങ്ങളോടുള്ള വലിയ ഉത്തരവാദിത്തമാണ്. - ഇന്ത്യൻ ഭരണഘടന",
  "നീതി വൈകിക്കുന്നത് നീതി നിഷേധിക്കുന്നതിന് തുല്യമാണ്. - വില്യം ഗ്ലാഡ്‌സ്റ്റോൺ",
  "ജനാധിപത്യം എന്നാൽ ജനങ്ങളുടെ, ജനങ്ങളാൽ, ജനങ്ങൾക്കുവേണ്ടിയുള്ള ഭരണമാണ്. - എബ്രഹാം ലിങ്കൺ",
  "സമൂഹത്തിലെ ഏറ്റവും ദുർബലനായ മനുഷ്യന്റെ കണ്ണീരൊപ്പുക എന്നതാണ് യഥാർത്ഥ ഭരണം. - മഹാത്മാഗാന്ധി",
  "നിയമത്തിനു മുന്നിൽ എല്ലാവരും സമന്മാരാണ്. - ആർട്ടിക്കിൾ 14, ഇന്ത്യൻ ഭരണഘടന",
  "ഒരു രാഷ്ട്രത്തിന്റെ മഹത്വം അളക്കേണ്ടത് അവിടുത്തെ ഏറ്റവും സാധാരണക്കാരനായ പൗരന്റെ ജീവിതാവസ്ഥ നോക്കിയാണ്. - ഡോ. ബി.ആർ അംബേദ്കർ",
  "മറ്റുള്ളവർക്ക് വേണ്ടി ജീവിക്കുന്നവരാണ് യഥാർത്ഥത്തിൽ ജീവിക്കുന്നത്. - സ്വാമി വിവേകാനന്ദൻ",
  "സ്വാതന്ത്ര്യം എന്നാൽ ഉത്തരവാദിത്തം കൂടിയാണ്. - നെൽസൺ മണ്ടേല",
  "ഭരണാധികാരിയുടെ ഏറ്റവും വലിയ ഗുണം ജനങ്ങളുടെ വിശ്വാസം ആർജിക്കുക എന്നതാണ്. - മാക്യവെല്ലി",
  "ജനങ്ങൾ ഭയപ്പെടേണ്ടത് സർക്കാരിനെയല്ല, സർക്കാർ ഭയപ്പെടേണ്ടത് ജനങ്ങളെയാണ്. - തോമസ് ജെഫേഴ്സൺ",
  "എല്ലാവർക്കും തുല്യനീതി ഉറപ്പാക്കുന്നതാണ് യഥാർത്ഥ ഭരണം. - എ.പി.ജെ. അബ്ദുൽ കലാം",
  "ഒരു പൗരന്റെ സ്വാതന്ത്ര്യം മറ്റൊരാളുടെ സ്വാതന്ത്ര്യത്തെ ഹനിക്കുന്നതാവരുത്. - ജോൺ സ്റ്റുവർട്ട് മിൽ",
  "അധികാരം ജനങ്ങളെ സേവിക്കാനുള്ള ഒരു ആയുധം മാത്രമാണ്. - നെൽസൺ മണ്ടേല",
  "നിശ്ശബ്ദത പലപ്പോഴും അനീതിക്കുള്ള മൂകാനുവാദമാണ്. - മാർട്ടിൻ ലൂഥർ കിംഗ് ജൂനിയർ",
  "ജനാധിപത്യം വിജയിക്കുന്നത് ഭൂരിപക്ഷത്തിന്റെ ഭരണത്തിലല്ല, ന്യൂനപക്ഷത്തിന്റെ സുരക്ഷയിലാണ്. - ജവഹർലാൽ നെഹ്‌റു",
  "സമൂഹത്തിന്റെ അടിസ്ഥാനം നിയമമല്ല, മറിച്ച് പരസ്പര വിശ്വാസമാണ്. - അരിസ്റ്റോട്ടിൽ",
  "ഏറ്റവും മികച്ച ഭരണാധികാരി താൻ ജനങ്ങളുടെ ദാസനാണെന്ന് തിരിച്ചറിയുന്നവനാണ്. - ലാവോ ത്സു",
  "മനുഷ്യന്റെ അവകാശങ്ങൾ സംരക്ഷിക്കപ്പെടുമ്പോഴാണ് സ്വാതന്ത്ര്യം അർത്ഥപൂർണ്ണമാകുന്നത്. - വിക്ടർ യൂഗോ",
  "വിദ്യാഭ്യാസമാണ് സമൂഹത്തെ മാറ്റാനുള്ള ഏറ്റവും ശക്തമായ ആയുധം. - ഡോ. എസ്. രാധാകൃഷ്ണൻ",
  "നീതിക്കുവേണ്ടിയുള്ള പോരാട്ടത്തിൽ ഒരിക്കലും തളരരുത്. - ഭഗത് സിംഗ്",
  "രാഷ്ട്രീയം എന്നത് പൗരന്മാരുടെ നിത്യജീവിതത്തെ മെച്ചപ്പെടുത്താനുള്ള കലയാണ്. - പ്ലാറ്റോ",
  "ഒരു സമൂഹത്തിന്റെ പുരോഗതി അളക്കേണ്ടത് അവിടുത്തെ സ്ത്രീകളുടെ അവസ്ഥ നോക്കിയാണ്. - സ്വാമി വിവേകാനന്ദൻ"
];

