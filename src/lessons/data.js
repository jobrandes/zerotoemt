// ─── ALL LESSON AND MODULE DATA ─────────────────────────────────────────────
// Add new lessons here and register them in LESSON_DATA at the bottom

const MODULES = [
  {
    id: 0, code: "START HERE", codeColor: "#e8193c", accentColor: "#e8193c",
    title: "FOUNDATION",
    desc: "How EMS works, your role as an EMT, medical terminology, and legal & ethical principles.",
    lessons: [
      { id: 1, title: "What is EMS?", duration: "~1 hr total" },
      { id: 2, title: "The Human Body: A Quick Tour", duration: "~1 hr total" },
      { id: 3, title: "Medical Terminology 101", duration: "~1 hr total" },
      { id: 4, title: "Anatomy Basics", duration: "~1 hr total" },
      { id: 5, title: "Legal & Ethics", duration: "~1 hr total" },
      { id: 6, title: "Module Quiz", duration: "~1 hr total" },
    ]
  },
  {
    id: 1, code: "NREMT: AIRWAY", codeColor: "#6366f1", accentColor: "#6366f1",
    title: "AIRWAY",
    desc: "Breathing anatomy, airway assessment, BVM, suctioning, and oxygen delivery.",
    lessons: Array.from({length: 7}, (_, i) => ({ id: i+1, title: `Lesson ${i+1}`, duration: "~1.5 hrs total" }))
  },
  {
    id: 2, code: "NREMT: CARDIOLOGY", codeColor: "#f59e0b", accentColor: "#f59e0b",
    title: "CARDIOLOGY",
    desc: "Heart anatomy, CPR, AED, chest pain recognition, cardiac emergencies.",
    lessons: Array.from({length: 7}, (_, i) => ({ id: i+1, title: `Lesson ${i+1}`, duration: "~1.5 hrs total" }))
  },
  {
    id: 3, code: "NREMT: TRAUMA", codeColor: "#ef4444", accentColor: "#ef4444",
    title: "TRAUMA",
    desc: "Bleeding control, shock, burns, fractures, head injuries, trauma assessment.",
    lessons: Array.from({length: 8}, (_, i) => ({ id: i+1, title: `Lesson ${i+1}`, duration: "~2 hrs total" }))
  },
  {
    id: 4, code: "NREMT: MEDICAL", codeColor: "#10b981", accentColor: "#10b981",
    title: "MEDICAL",
    desc: "Diabetic crises, stroke, seizures, allergic reactions, respiratory, MCI basics.",
    lessons: Array.from({length: 8}, (_, i) => ({ id: i+1, title: `Lesson ${i+1}`, duration: "~2 hrs total" }))
  },
  {
    id: 5, code: "NREMT: OPERATIONS", codeColor: "#8b5cf6", accentColor: "#8b5cf6",
    title: "OPERATIONS",
    desc: "Scene safety, ICS, lifting & moving, documentation, MCI basics.",
    lessons: Array.from({length: 6}, (_, i) => ({ id: i+1, title: `Lesson ${i+1}`, duration: "~1.5 hrs total" }))
  },
];

const TOTAL_LESSONS = MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
export { TOTAL_LESSONS };

const L1 = {
  moduleId: 0, id: 1,
  title: "What is EMS?",
  subtitle: "The emergency medical services system and your role in it",
  duration: "8 min",
  dispatch: {
    call: `"Unit 7, respond to 412 Maple Street — 58-year-old male, unresponsive, wife on scene."`,
    time: "2:14 AM", eta: "4 minutes",
    hook: "You're in Ambulance 7. Your partner pulls out of the station. You've never been on a real call. What is your job in the next four minutes?",
    bridge: "You didn't just get in an ambulance. You stepped into one of the most carefully designed emergency response systems in the world. Every person, every piece of equipment, every radio transmission follows a structure. And you are now part of it."
  },
  content: [
    { heading: "EMS Stands For Emergency Medical Services", body: "EMS is the system — not just the people. It includes the 911 dispatch center, the first responders, the EMTs and paramedics, the ambulances, the hospitals, and all the protocols connecting them. When you become an EMT, you're joining this system as a critical link." },
    { heading: "The EMS System Has Levels", body: "Not all EMS providers are the same. There are four national certification levels:\n\n• **Emergency Medical Responder (EMR)** — Basic life-saving skills. Think bystanders, firefighters.\n• **Emergency Medical Technician (EMT)** — That's you. Assessment, basic interventions, transport.\n• **Advanced EMT (AEMT)** — EMT skills plus IV access and some medications.\n• **Paramedic** — The most advanced prehospital provider. Advanced airway, medications, cardiac monitoring." },
    { heading: "Your Scope of Practice", body: "As an EMT, you operate within a defined scope of practice — the specific skills and interventions you're legally allowed to perform. This is set by your state and guided by medical direction from a physician. You cannot go outside this scope, even if you think it might help." },
    { heading: "Medical Direction", body: "Every EMS agency has a Medical Director — a physician who oversees clinical care. They write protocols (offline medical direction) and can give you real-time orders by radio (online medical direction). You act as an extension of that physician in the field." },
    { heading: "The EMT's Core Job", body: "Your job has three parts:\n\n1. **Scene safety** — You can't help anyone if you become a patient.\n2. **Patient assessment** — Find out what's wrong.\n3. **Treatment and transport** — Do what you can, get them to definitive care.\n\nEMTs don't fix everything. You stabilize, treat life threats, and transport to a hospital where definitive care happens." }
  ],
  flashcards: [
    { front: "What does EMS stand for?", back: "Emergency Medical Services" },
    { front: "What are the 4 levels of EMS certification?", back: "EMR → EMT → AEMT → Paramedic" },
    { front: "What is scope of practice?", back: "The specific skills and interventions an EMT is legally authorized to perform" },
    { front: "What is a Medical Director?", back: "A physician who provides medical oversight and protocols for an EMS agency" },
    { front: "What is online medical direction?", back: "Real-time orders given by a physician via radio or phone during a call" },
    { front: "What is offline medical direction?", back: "Pre-written protocols and standing orders that guide EMT actions" },
    { front: "What are the 3 core EMT responsibilities?", back: "Scene safety → Patient assessment → Treatment and transport" },
    { front: "What does an EMT NOT do?", back: "Provide definitive care — EMTs stabilize and transport to the hospital" },
  ],
  quiz: [
    { q: "Which EMS level has the most advanced prehospital skills?", options: ["EMT", "AEMT", "Paramedic", "EMR"], answer: 2, explanation: "Paramedics have the most advanced scope including advanced airways, medications, and cardiac monitoring." },
    { q: "A physician who writes protocols and oversees EMS clinical care is called:", options: ["Charge Nurse", "Medical Director", "EMS Coordinator", "Clinical Supervisor"], answer: 1, explanation: "The Medical Director is the physician responsible for the clinical oversight of an EMS agency." },
    { q: "You're on scene and believe a patient needs a medication you're not trained to give. What do you do?", options: ["Give it anyway — patient safety first", "Call the hospital and ask", "Stay within your scope of practice and contact medical direction", "Ask a bystander for help"], answer: 2, explanation: "EMTs must stay within their scope of practice. If you need guidance, contact medical direction." },
    { q: "What is the FIRST priority on any EMS scene?", options: ["Patient assessment", "Scene safety", "Calling for backup", "Starting treatment"], answer: 1, explanation: "Scene safety always comes first. An injured EMT cannot help anyone." },
    { q: "Standing orders and pre-written protocols are an example of:", options: ["Online medical direction", "Offline medical direction", "Scope expansion", "State legislation"], answer: 1, explanation: "Offline medical direction includes all pre-written protocols guiding field care." },
    { q: "Which of the following is NOT a level of EMS certification?", options: ["EMR", "Paramedic", "Trauma Technician", "AEMT"], answer: 2, explanation: "There is no 'Trauma Technician' in the national EMS certification structure. The four levels are EMR, EMT, AEMT, and Paramedic." },
    { q: "What does EMS stand for?", options: ["Emergency Medicine Services", "Emergency Medical Services", "Emergency Management System", "Emergency Medical Support"], answer: 1, explanation: "EMS stands for Emergency Medical Services — the full system including dispatch, providers, vehicles, and hospitals." },
    { q: "An EMT's primary role is to:", options: ["Provide definitive care at the scene", "Diagnose the patient's condition", "Stabilize, treat life threats, and transport", "Prescribe medications in the field"], answer: 2, explanation: "EMTs stabilize patients and treat immediate life threats, then transport to a hospital for definitive care." },
    { q: "Online medical direction means:", options: ["Written protocols in a manual", "Real-time physician orders via radio or phone", "Online training courses", "State EMS regulations"], answer: 1, explanation: "Online medical direction is real-time — a physician giving you live orders during a call. Offline is the pre-written protocols." },
    { q: "Which level of EMS provider can start IV lines and give some medications?", options: ["EMT", "EMR", "AEMT", "First Responder"], answer: 2, explanation: "AEMTs (Advanced EMTs) have expanded scope including IV access and a limited medication list, beyond basic EMT skills." },
    { q: "Who sets the scope of practice for EMTs?", options: ["The hospital medical director", "The state, guided by medical direction", "The National Registry alone", "The EMT's training program"], answer: 1, explanation: "Scope of practice is defined by state law and guided by the agency's medical director." },
    { q: "If you arrive on scene and see downed power lines near the patient, you should:", options: ["Rush in to help the patient immediately", "Ensure scene safety before approaching", "Call the patient's family first", "Begin treatment from a distance"], answer: 1, explanation: "Scene safety is always first. Downed power lines are a life threat to you. Wait for the utility company to secure the scene." },
    { q: "A Medical Director gives an EMT permission to perform certain skills in advance via written protocols. This is:", options: ["Scope expansion", "Online medical direction", "Offline medical direction", "Standing authorization"], answer: 2, explanation: "Pre-written protocols that authorize specific actions without real-time contact are offline medical direction." },
    { q: "Which statement about EMTs is TRUE?", options: ["EMTs can prescribe medications", "EMTs provide definitive care", "EMTs act as an extension of the physician in the field", "EMTs diagnose medical conditions"], answer: 2, explanation: "EMTs function under physician oversight — they're an extension of the Medical Director in the field." },
    { q: "The EMS system includes which of the following?", options: ["Only the ambulance crew", "Only the hospital", "Dispatch, responders, transport, and hospital", "Only paramedics and nurses"], answer: 2, explanation: "EMS is the full system — 911 dispatch, first responders, EMTs, paramedics, transport, and the receiving hospital." },
  ]
};

const L2 = {
  moduleId: 0, id: 2,
  title: "The Human Body: A Quick Tour",
  subtitle: "Body systems, anatomical terms, and why they matter in the field",
  duration: "10 min",
  dispatch: {
    call: `"Unit 3, respond to 891 Oak Drive — 58-year-old male, chest pain, diaphoretic."`,
    time: "11:42 PM", eta: "6 minutes",
    hook: "Your partner asks: 'What's your assessment?' You freeze. You know something is wrong but don't have the words — or the framework — to describe what you're seeing.",
    bridge: "In EMS, communication is care. If you can't describe the body, you can't report on it, document it, or hand it off. This lesson gives you the map."
  },
  content: [
    { heading: "Anatomical Position: The Baseline", body: "All body descriptions in medicine assume the patient is in **anatomical position**: standing upright, facing forward, arms at sides, palms facing forward. Everything — left, right, front, back — is described from this reference. The patient's left is YOUR right when facing them. This trips people up constantly." },
    { heading: "Directional Terms You'll Use Every Day", body: "• **Superior / Inferior** — Above / Below (head is superior to the chest)\n• **Anterior / Posterior** — Front / Back (chest is anterior, spine is posterior)\n• **Medial / Lateral** — Toward midline / Away from midline\n• **Proximal / Distal** — Closer to / Farther from the point of attachment\n• **Bilateral** — Both sides\n\nExample: 'Pain is in the right upper quadrant, radiating lateral to the flank.'" },
    { heading: "Body Regions and Cavities", body: "The body is divided into cavities that protect organs:\n\n• **Cranial cavity** — Brain\n• **Thoracic cavity** — Heart and lungs (protected by the ribcage)\n• **Abdominal cavity** — Digestive organs, liver, spleen, kidneys\n• **Pelvic cavity** — Bladder, reproductive organs\n\nThe **diaphragm** separates the thoracic and abdominal cavities. It's also your primary breathing muscle." },
    { heading: "The Major Body Systems", body: "• **Respiratory** — Gets oxygen in, CO₂ out\n• **Cardiovascular** — Heart pumps blood carrying oxygen to every cell\n• **Nervous** — Brain, spinal cord, nerves — control everything\n• **Musculoskeletal** — Structure and movement\n• **Integumentary** — Skin (your largest organ, and a vital assessment tool)\n• **Digestive** — Breaks down food\n• **Urinary** — Filters waste (kidneys)\n• **Endocrine** — Hormones (think: diabetic emergencies)\n• **Immune/Lymphatic** — Defense\n• **Reproductive** — Relevant for OB emergencies" },
    { heading: "Why This Matters in the Field", body: "Body system knowledge = faster assessment. When a patient says chest pain + shortness of breath, you think cardiovascular AND respiratory simultaneously. When you see swollen ankles and ask about urination frequency, you're thinking cardiovascular failure affecting the kidneys.\n\nYou're not memorizing trivia. You're building a mental model that lets you see connections in a 90-second patient encounter." }
  ],
  flashcards: [
    { front: "What is anatomical position?", back: "Standing upright, facing forward, arms at sides, palms forward — the reference for all body descriptions" },
    { front: "Superior vs Inferior", back: "Superior = above. Inferior = below. The head is superior to the chest." },
    { front: "Anterior vs Posterior", back: "Anterior = front. Posterior = back. Chest is anterior, spine is posterior." },
    { front: "Medial vs Lateral", back: "Medial = toward the midline. Lateral = away from midline." },
    { front: "Proximal vs Distal", back: "Proximal = closer to the point of attachment. Distal = farther away. The wrist is distal to the elbow." },
    { front: "What separates the thoracic and abdominal cavities?", back: "The diaphragm — also the primary breathing muscle." },
    { front: "What organs are in the thoracic cavity?", back: "Heart and lungs" },
    { front: "What body system manages blood sugar emergencies?", back: "Endocrine system (hormones like insulin)" },
    { front: "Why does the EMT need to know body systems?", back: "To quickly identify connections between symptoms and failing systems during patient assessment" },
    { front: "Patient's left vs your left — which is correct on a report?", back: "Always the PATIENT'S left — anatomical position is from the patient's perspective" },
  ],
  quiz: [
    { q: "A patient has pain 'inferior to the umbilicus.' Where is the pain?", options: ["Above the belly button", "Below the belly button", "To the left of the belly button", "Behind the belly button"], answer: 1, explanation: "Inferior means below. The umbilicus is the belly button." },
    { q: "Which cavity contains the heart and lungs?", options: ["Abdominal", "Pelvic", "Cranial", "Thoracic"], answer: 3, explanation: "The thoracic cavity is protected by the ribcage and contains the heart and lungs." },
    { q: "A patient has a wound on the anterior surface of the forearm. Where is the wound?", options: ["Back of the forearm", "Side of the forearm", "Front of the forearm", "Top of the forearm"], answer: 2, explanation: "Anterior = front. In anatomical position, the anterior forearm faces forward (palms out)." },
    { q: "The knee is _______ to the ankle.", options: ["Distal", "Inferior", "Proximal", "Lateral"], answer: 2, explanation: "The knee is closer to the point of attachment (hip) than the ankle — making it proximal to the ankle." },
    { q: "A diabetic patient is unresponsive. Which body system is most likely involved?", options: ["Respiratory", "Musculoskeletal", "Endocrine", "Integumentary"], answer: 2, explanation: "Diabetes is an endocrine disorder — the pancreas fails to regulate insulin/blood sugar properly." },
    { q: "In anatomical position, the patient's palms are facing:", options: ["Backward", "Downward", "Forward", "Inward"], answer: 2, explanation: "Anatomical position = standing upright, facing forward, arms at sides, palms facing forward." },
    { q: "The diaphragm separates which two cavities?", options: ["Cranial and thoracic", "Thoracic and abdominal", "Abdominal and pelvic", "Pelvic and thoracic"], answer: 1, explanation: "The diaphragm is the primary breathing muscle and separates the thoracic (chest) and abdominal cavities." },
    { q: "A patient reports pain on the 'medial' side of the knee. Where is the pain?", options: ["Outside of the knee", "Back of the knee", "Inside of the knee, toward midline", "Front of the knee"], answer: 2, explanation: "Medial = toward the midline of the body. The medial knee is the inner side." },
    { q: "Which body system does skin belong to?", options: ["Musculoskeletal", "Integumentary", "Immune", "Endocrine"], answer: 1, explanation: "Skin is the primary organ of the integumentary system — and one of the most important assessment tools in EMS." },
    { q: "A patient has swollen ankles and is urinating frequently. You suspect:", options: ["Respiratory failure", "Musculoskeletal injury", "Cardiovascular system affecting kidneys", "Nervous system disorder"], answer: 2, explanation: "Swollen ankles from fluid backup + increased urination suggests cardiovascular failure impacting renal (kidney) function." },
    { q: "Which term means 'away from the midline of the body'?", options: ["Medial", "Proximal", "Lateral", "Inferior"], answer: 2, explanation: "Lateral = away from the midline. The ears are lateral to the nose." },
    { q: "The brain is located in which body cavity?", options: ["Thoracic", "Abdominal", "Pelvic", "Cranial"], answer: 3, explanation: "The cranial cavity is formed by the skull and contains the brain." },
    { q: "A patient complains of posterior chest pain. Where is the pain?", options: ["Front of the chest", "Side of the chest", "Back of the chest", "Inside the chest"], answer: 2, explanation: "Posterior = back. Posterior chest pain is pain in the back of the chest — think aortic dissection, pulmonary issues." },
    { q: "Which body system controls heart rate, breathing, and consciousness?", options: ["Endocrine", "Cardiovascular", "Nervous", "Respiratory"], answer: 2, explanation: "The nervous system — brain, spinal cord, nerves — controls and coordinates all body functions including vital signs." },
    { q: "When documenting, you note swelling on the 'right' arm. Whose right do you use?", options: ["Your right when facing the patient", "The patient's right", "Either — both are acceptable", "The closest arm to you"], answer: 1, explanation: "Always the PATIENT's right. All anatomical descriptions are from the patient's perspective in anatomical position." },
  ]
};

const L3 = {
  moduleId: 0, id: 3,
  title: "Medical Terminology 101",
  subtitle: "The language of medicine — roots, prefixes, suffixes, and why they save time in the field",
  duration: "10 min",
  dispatch: {
    call: `"Unit 12, respond to 334 Pine Avenue — 71-year-old female, dyspnea, tachycardia, history of hypertension."`,
    time: "3:55 PM", eta: "5 minutes",
    hook: "The dispatcher just rattled off three words you've never heard. You have 5 minutes to prepare. Do you know what's waiting for you?",
    bridge: "Every word in that call is built from parts — and once you know the parts, you can decode almost any medical term on the fly. This isn't memorization. It's learning a system."
  },
  content: [
    {
      heading: "Why Medical Terminology Matters",
      body: "In EMS, you communicate with dispatchers, nurses, doctors, and partners — all in high-stress, time-compressed situations. Medical terminology is the shared language that removes ambiguity.\n\nSaying 'the patient has tachycardia' is faster, more precise, and universally understood than 'the patient's heart is beating really fast.' When seconds matter, precision matters."
    },
    {
      heading: "The Building Blocks: Roots",
      body: "Medical terms are built from Greek and Latin roots. Learn the root, decode the word.\n\n• **cardi** — heart (cardiology, tachycardia)\n• **pulmon** — lung (pulmonary)\n• **neuro** — nerve/brain (neurological)\n• **hepat** — liver (hepatitis)\n• **renal / nephro** — kidney (renal failure, nephrology)\n• **gastr** — stomach (gastric)\n• **derm** — skin (dermatology)\n• **osteo** — bone (osteoporosis)\n• **hem / hemo** — blood (hemorrhage, hematoma)\n• **myо** — muscle (myocardial)"
    },
    {
      heading: "Prefixes: What Comes Before",
      body: "Prefixes modify the root — they tell you quantity, location, or condition.\n\n• **tachy-** — fast (tachycardia = fast heart rate)\n• **brady-** — slow (bradycardia = slow heart rate)\n• **hyper-** — above normal/excess (hypertension = high BP)\n• **hypo-** — below normal/deficient (hypoglycemia = low blood sugar)\n• **dys-** — difficult/abnormal (dyspnea = difficulty breathing)\n• **a- / an-** — without (apnea = without breathing)\n• **bi-** — two (bilateral = both sides)\n• **hemi-** — half (hemiplegia = paralysis of one side)\n• **poly-** — many (polyuria = frequent urination)\n• **sub-** — under (subcutaneous = under the skin)"
    },
    {
      heading: "Suffixes: What Comes After",
      body: "Suffixes tell you what kind of thing you're dealing with — a condition, a procedure, a symptom.\n\n• **-itis** — inflammation (appendicitis, bronchitis)\n• **-emia** — blood condition (hypoglycemia, anemia)\n• **-ectomy** — surgical removal (appendectomy)\n• **-ostomy** — surgical opening (tracheostomy)\n• **-plasty** — surgical repair (rhinoplasty)\n• **-algia** — pain (cardialgia = heart pain)\n• **-pnea** — breathing (apnea, dyspnea, tachypnea)\n• **-plegia** — paralysis (hemiplegia, paraplegia)\n• **-ology** — study of (cardiology, neurology)\n• **-scope / -scopy** — instrument/visual exam (laryngoscope)"
    },
    {
      heading: "Decoding Real EMS Terms",
      body: "Now put it together. You'll hear these on calls:\n\n• **Tachycardia** — tachy (fast) + cardia (heart) = fast heart rate\n• **Dyspnea** — dys (difficulty) + pnea (breathing) = difficulty breathing\n• **Hypertension** — hyper (excess) + tension (pressure) = high blood pressure\n• **Hypoglycemia** — hypo (low) + glyc (sugar) + emia (blood condition) = low blood sugar\n• **Hemiplegia** — hemi (half) + plegia (paralysis) = one-sided paralysis\n• **Myocardial infarction** — myo (muscle) + cardial (heart) + infarction (tissue death) = heart attack\n• **Subcutaneous** — sub (under) + cutaneous (skin) = under the skin\n• **Tachypnea** — tachy (fast) + pnea (breathing) = rapid breathing\n\nYou don't memorize these — you decode them. Every time."
    }
  ],
  flashcards: [
    { front: "What does 'tachy-' mean?", back: "Fast. Tachycardia = fast heart rate. Tachypnea = fast breathing." },
    { front: "What does 'brady-' mean?", back: "Slow. Bradycardia = slow heart rate (below 60 bpm)." },
    { front: "What does 'dyspnea' mean?", back: "Difficulty breathing. Dys- (difficult) + -pnea (breathing)." },
    { front: "What does 'hyper-' mean?", back: "Above normal or excess. Hypertension = high blood pressure." },
    { front: "What does 'hypo-' mean?", back: "Below normal or deficient. Hypoglycemia = low blood sugar." },
    { front: "What does '-itis' mean?", back: "Inflammation. Appendicitis = inflammation of the appendix." },
    { front: "What does 'cardi' refer to?", back: "The heart. Cardiology, tachycardia, myocardial." },
    { front: "What does 'hem/hemo' refer to?", back: "Blood. Hemorrhage = bleeding. Hematoma = blood pooling under skin." },
    { front: "What does 'apnea' mean?", back: "Without breathing. A- (without) + -pnea (breathing)." },
    { front: "What does '-emia' mean?", back: "A blood condition. Hypoglycemia = low blood sugar condition." },
    { front: "What does 'myocardial infarction' mean broken down?", back: "Myo (muscle) + cardial (heart) + infarction (tissue death) = heart attack." },
    { front: "What does 'subcutaneous' mean?", back: "Under the skin. Sub- (under) + cutaneous (skin)." },
    { front: "What does 'hemiplegia' mean?", back: "Paralysis of one side of the body. Hemi- (half) + -plegia (paralysis)." },
    { front: "What does 'pulmon' refer to?", back: "The lungs. Pulmonary edema = fluid in the lungs." },
    { front: "What does '-pnea' mean?", back: "Relating to breathing. Apnea, dyspnea, tachypnea." },
    { front: "What does 'neuro' refer to?", back: "Nerves or the nervous system. Neurological assessment." },
  ],
  quiz: [
    { q: "A patient is described as 'bradycardic.' What does this mean?", options: ["High blood pressure", "Slow heart rate", "Fast heart rate", "Difficulty breathing"], answer: 1, explanation: "Brady- means slow. Bradycardia = slow heart rate, typically below 60 beats per minute." },
    { q: "Which prefix means 'below normal' or 'deficient'?", options: ["Hyper-", "Tachy-", "Hypo-", "Poly-"], answer: 2, explanation: "Hypo- means below normal. Hypoglycemia = low blood sugar. Hypotension = low blood pressure." },
    { q: "A patient has 'dyspnea.' What are they experiencing?", options: ["Chest pain", "Difficulty breathing", "Rapid heart rate", "Low blood sugar"], answer: 1, explanation: "Dys- means difficult or abnormal. -Pnea means breathing. Dyspnea = difficulty breathing." },
    { q: "What does the suffix '-itis' indicate?", options: ["Removal of", "Study of", "Paralysis", "Inflammation"], answer: 3, explanation: "-Itis means inflammation. Appendicitis, bronchitis, hepatitis — all inflammatory conditions." },
    { q: "Breaking it down: what does 'tachypnea' mean?", options: ["Slow breathing", "No breathing", "Rapid breathing", "Difficult breathing"], answer: 2, explanation: "Tachy- (fast) + -pnea (breathing) = rapid breathing. Different from dyspnea which is difficulty breathing." },
    { q: "The root 'hem/hemo' relates to which body substance?", options: ["Bone", "Blood", "Muscle", "Skin"], answer: 1, explanation: "Hem/hemo refers to blood. Hemorrhage = uncontrolled bleeding. Hematoma = blood pooling under tissue." },
    { q: "A patient has 'bilateral' leg swelling. What does bilateral mean?", options: ["Severe", "One-sided", "Both sides", "Sudden onset"], answer: 2, explanation: "Bi- means two. Bilateral = both sides. Important distinction — unilateral swelling vs bilateral has different clinical implications." },
    { q: "What does 'myocardial' refer to?", options: ["Lung muscle", "Heart muscle", "Kidney disease", "Brain tissue"], answer: 1, explanation: "Myo = muscle. Cardial = heart. Myocardial = relating to the heart muscle. As in myocardial infarction (heart attack)." },
    { q: "A patient is 'hypertensive.' What does this mean?", options: ["Low blood pressure", "High blood pressure", "Fast heart rate", "Difficulty breathing"], answer: 1, explanation: "Hyper- = above normal. Tension = pressure. Hypertension = high blood pressure." },
    { q: "What does the prefix 'a-' or 'an-' mean?", options: ["Before", "Without", "Against", "Above"], answer: 1, explanation: "A- or an- means without. Apnea = without breathing. Anemia = without enough red blood cells." },
    { q: "The root 'neuro' refers to:", options: ["Heart", "Kidney", "Nerve/brain", "Lung"], answer: 2, explanation: "Neuro = nerve or nervous system. Neurological assessment checks brain and nerve function." },
    { q: "What does 'subcutaneous' mean?", options: ["Above the skin", "Through the muscle", "Under the skin", "Into the vein"], answer: 2, explanation: "Sub- = under. Cutaneous = skin. Subcutaneous = under the skin. Important for injection routes." },
    { q: "A patient has 'hemiplegia.' What does this describe?", options: ["Full body paralysis", "Paralysis of one side", "Muscle weakness", "Loss of sensation only"], answer: 1, explanation: "Hemi- = half. -Plegia = paralysis. Hemiplegia = paralysis of one side of the body, often from stroke." },
    { q: "The suffix '-ology' means:", options: ["Removal of", "Inflammation of", "Study of", "Disease of"], answer: 2, explanation: "-Ology = study of. Cardiology = study of the heart. Neurology = study of the nervous system." },
    { q: "Dispatch says the patient has 'hypoglycemia.' You should prepare for:", options: ["High blood pressure", "Low blood sugar", "Rapid breathing", "Chest pain"], answer: 1, explanation: "Hypo- (low) + glyc (sugar) + -emia (blood condition) = low blood sugar. This patient may be unconscious or seizing." },
  ]
};

const L4 = {
  moduleId: 0, id: 4,
  title: "Anatomy Basics",
  subtitle: "The skeleton, major organs, and body landmarks every EMT uses on every call",
  duration: "12 min",
  dispatch: {
    call: `"Unit 5, respond to 77 Westfield Road — male, mid-40s, fell from a ladder, complaining of right flank pain and left wrist deformity."`,
    time: "1:18 PM", eta: "3 minutes",
    hook: "Two injuries, two body regions, one patient. You need to locate them precisely, assess them fast, and communicate what you find. Do you know your landmarks?",
    bridge: "Anatomy isn't memorizing a textbook diagram. It's knowing where things live so you can find problems fast, protect the right structures, and tell the hospital exactly what's coming through their door."
  },
  content: [
    {
      heading: "The Skeleton: Your Structural Roadmap",
      body: "The skeleton does three things for you as an EMT:\n\n1. **Protection** — The skull protects the brain. The ribcage protects the heart and lungs. The spine protects the spinal cord.\n2. **Landmarks** — Bony landmarks tell you where organs are. The xiphoid process marks the bottom of the sternum. The iliac crest marks the top of the pelvis.\n3. **Injury clues** — Deformity, crepitus (grinding), and point tenderness over bone = suspect fracture.\n\nKey bones to know: **skull, mandible, clavicle, sternum, ribs, humerus, radius, ulna, femur, tibia, fibula, pelvis, spine.**"
    },
    {
      heading: "The Spine: Handle With Respect",
      body: "The spine has five regions — memorize them top to bottom:\n\n• **Cervical (C1–C7)** — Neck. 7 vertebrae. Most vulnerable. Injury here = potential quadriplegia.\n• **Thoracic (T1–T12)** — Mid-back. Attached to ribs.\n• **Lumbar (L1–L5)** — Lower back. Largest vertebrae. Common injury site.\n• **Sacral** — Fused to the pelvis.\n• **Coccyx** — Tailbone.\n\nIn trauma, assume spinal injury until proven otherwise. Mechanism of injury matters — falls, MVCs, diving accidents."
    },
    {
      heading: "The Thorax: What's Inside the Chest",
      body: "The thoracic cavity is your priority chest real estate:\n\n• **Heart** — Sits slightly left of center, behind the sternum. Protected by the pericardium (fibrous sac).\n• **Lungs** — Fill the rest of the thoracic cavity. Right lung has 3 lobes, left has 2 (heart takes up space).\n• **Great vessels** — Aorta, superior/inferior vena cava — major blood highways.\n• **Trachea** — Airway, runs down the midline, splits into right and left mainstem bronchi at the carina.\n\nKey landmark: the **midclavicular line** (MCL) — used for chest decompression placement."
    },
    {
      heading: "The Abdomen: Four Quadrants",
      body: "The abdomen is divided into four quadrants using the umbilicus as the center point:\n\n• **RUQ (Right Upper Quadrant)** — Liver, gallbladder, part of colon\n• **LUQ (Left Upper Quadrant)** — Stomach, spleen, part of colon\n• **RLQ (Right Lower Quadrant)** — Appendix, small intestine, right ovary (female)\n• **LLQ (Left Lower Quadrant)** — Sigmoid colon, left ovary (female)\n\nThe **flank** is the lateral abdominal region — flank pain with trauma = think kidney injury.\nThe **epigastric** region is between the RUQ and LUQ — often the site of cardiac referred pain."
    },
    {
      heading: "Key Body Landmarks You'll Use on Every Call",
      body: "These are your field reference points:\n\n• **Xiphoid process** — Bottom tip of sternum. CPR landmark — compressions go just above this.\n• **Sternal notch** — Top of sternum. Airway reference point.\n• **Midaxillary line** — Vertical line through the armpit. Used for chest needle placement.\n• **Costal margin** — Lower edge of the ribcage.\n• **Iliac crest** — Top of the hip bone. Pelvic injury landmark.\n• **Femoral triangle** — Groin region. Major femoral artery and nerve run here.\n• **Popliteal fossa** — Back of the knee. Pulse point.\n• **Antecubital fossa** — Inside of the elbow. Where you take a BP and the most common IV site."
    }
  ],
  flashcards: [
    { front: "How many cervical vertebrae are there?", back: "7 — C1 through C7. The neck. Most vulnerable spinal region." },
    { front: "What are the four abdominal quadrants?", back: "RUQ, LUQ, RLQ, LLQ — divided at the umbilicus." },
    { front: "What organ is in the RUQ?", back: "Liver and gallbladder (plus part of the colon)." },
    { front: "What organ is in the LUQ?", back: "Stomach and spleen (plus part of the colon)." },
    { front: "Where is the appendix?", back: "Right Lower Quadrant (RLQ)." },
    { front: "What does the xiphoid process mark?", back: "The bottom tip of the sternum — CPR compressions go just above it." },
    { front: "What is the antecubital fossa?", back: "The inside of the elbow — most common IV site and where you take a blood pressure." },
    { front: "How many lobes does the right lung have vs the left?", back: "Right = 3 lobes. Left = 2 lobes (heart takes up the extra space)." },
    { front: "What is crepitus?", back: "A grinding or crackling sensation/sound felt over bone — sign of a possible fracture." },
    { front: "What does the pericardium do?", back: "It's the fibrous sac surrounding the heart, protecting it." },
    { front: "Flank pain after trauma suggests injury to which organ?", back: "The kidneys — they sit in the flank region posteriorly." },
    { front: "What is the epigastric region?", back: "The area between the RUQ and LUQ, just below the sternum. Cardiac pain often refers here." },
    { front: "What is the femoral triangle?", back: "The groin region where the femoral artery, vein, and nerve run. Major hemorrhage risk in trauma." },
    { front: "What spinal region has the largest vertebrae?", back: "Lumbar (L1–L5) — the lower back. Most common site for back injuries." },
    { front: "What is the popliteal fossa?", back: "The back of the knee — a pulse point used in assessment." },
    { front: "What does the trachea split into?", back: "The right and left mainstem bronchi at a point called the carina." },
  ],
  quiz: [
    { q: "A patient fell and has point tenderness over the right lower quadrant. Which organ should you suspect?", options: ["Liver", "Spleen", "Appendix", "Stomach"], answer: 2, explanation: "The appendix is located in the RLQ. Point tenderness there with guarding is classic appendicitis or trauma to that region." },
    { q: "During CPR, where do you position your hands for chest compressions?", options: ["Directly on the xiphoid process", "Just above the xiphoid process on the lower sternum", "On the left side of the chest over the heart", "On the upper sternum below the clavicle"], answer: 1, explanation: "Compressions go on the lower half of the sternum, just above the xiphoid process. Compressing the xiphoid itself can cause liver injury." },
    { q: "A patient dove headfirst into a shallow pool. Your FIRST concern for spinal injury is:", options: ["Lumbar spine", "Thoracic spine", "Cervical spine", "Sacral spine"], answer: 2, explanation: "Cervical spine (C1-C7) is most vulnerable in diving accidents. Injury here can cause quadriplegia." },
    { q: "Flank pain after an MVC should make you suspect injury to:", options: ["The appendix", "The liver", "The kidneys", "The stomach"], answer: 2, explanation: "The kidneys are retroperitoneal organs that sit in the flank region. Flank pain with trauma = suspect renal injury." },
    { q: "You need to take a blood pressure on your patient. Where do you place the cuff and listen?", options: ["Upper arm, listen at the antecubital fossa", "Forearm, listen at the wrist", "Upper arm, listen at the axilla", "Lower arm, listen at the elbow crease"], answer: 0, explanation: "BP cuff goes on the upper arm; you auscultate (listen) at the antecubital fossa — the inner elbow crease." },
    { q: "The right lung has how many lobes?", options: ["1", "2", "3", "4"], answer: 2, explanation: "The right lung has 3 lobes. The left has only 2 because the heart occupies space on the left side." },
    { q: "A patient has pain in the epigastric region with sweating and nausea. You should think:", options: ["Appendicitis", "Possible cardiac event — referred pain", "Kidney stone", "Bowel obstruction"], answer: 1, explanation: "The epigastric region between the RUQ and LUQ is where cardiac ischemia often refers pain. Never dismiss epigastric pain in adults." },
    { q: "What is crepitus, and what does it suggest?", options: ["Swelling at a joint — suggests infection", "Grinding sensation over bone — suggests fracture", "Popping in a joint — normal finding", "Bruising under the skin — suggests contusion"], answer: 1, explanation: "Crepitus is a grinding or crackling felt (or heard) over bone — a strong indicator of fracture. Document and splint." },
    { q: "The spinal region attached to the ribs is:", options: ["Cervical", "Lumbar", "Sacral", "Thoracic"], answer: 3, explanation: "T1-T12, the thoracic vertebrae, each articulate with a pair of ribs forming the posterior thoracic cage." },
    { q: "Which landmark is used for chest needle decompression placement?", options: ["Midclavicular line, 2nd intercostal space", "Midaxillary line, 1st intercostal space", "Sternal notch", "Xiphoid process level"], answer: 0, explanation: "Needle chest decompression goes in the 2nd intercostal space, midclavicular line — away from vessels and nerves." },
    { q: "The spleen is located in which abdominal quadrant?", options: ["RUQ", "RLQ", "LLQ", "LUQ"], answer: 3, explanation: "The spleen sits in the LUQ. It's highly vascular and ruptures easily in trauma — a major bleeding risk." },
    { q: "A patient has a 'clavicle fracture.' Where is the injury?", options: ["Collarbone", "Kneecap", "Shoulder blade", "Hip bone"], answer: 0, explanation: "The clavicle is the collarbone — it connects the sternum to the shoulder. Common fracture from falls on outstretched arms." },
    { q: "What does the pericardium surround?", options: ["The lungs", "The heart", "The brain", "The kidneys"], answer: 1, explanation: "The pericardium is the fibrous sac that surrounds and protects the heart. Blood in the pericardium = cardiac tamponade." },
    { q: "In trauma, when should you suspect spinal injury?", options: ["Only if the patient reports neck pain", "Only in high-speed MVCs", "Based on mechanism — falls, MVCs, diving, until proven otherwise", "Only if the patient is unconscious"], answer: 2, explanation: "Assume spinal injury based on mechanism of injury, not symptoms alone. Adrenaline can mask pain in trauma." },
    { q: "The femoral triangle in the groin is clinically important because:", options: ["It is the most common fracture site", "The femoral artery runs there — hemorrhage risk", "It contains the appendix", "It is where you check lung sounds"], answer: 1, explanation: "The femoral artery runs through the femoral triangle. Penetrating trauma to the groin can cause life-threatening hemorrhage." },
  ]
};

const L5 = {
  moduleId: 0, id: 5,
  title: "Legal & Ethics",
  subtitle: "Consent, refusals, duty to act, negligence, and the ethical backbone of EMS",
  duration: "11 min",
  dispatch: {
    call: `"Unit 9, respond to 204 Lakeview Drive — 34-year-old male, conscious and alert, refuses transport after a minor MVC. No apparent injuries."`,
    time: "4:32 PM", eta: "4 minutes",
    hook: "He's alert, he's refusing, and he's signing nothing. Do you have to let him go? What happens if he dies an hour later? Are you liable?",
    bridge: "Legal and ethics isn't the boring part of EMS — it's the part that protects your patients when they can't protect themselves, and protects you when things go wrong. Every call has a legal dimension. You need to know the rules before you need them."
  },
  content: [
    {
      heading: "Consent: You Cannot Touch Someone Without It",
      body: "Before you treat any patient, you need consent. There are three types:\n\n• **Expressed consent** — The patient verbally or in writing agrees to treatment. They must be alert, oriented, and an adult (18+) to give it. This is the standard.\n• **Implied consent** — When a patient is unconscious, unresponsive, or otherwise unable to consent, the law assumes they would want treatment. You treat them.\n• **Consent for minors** — A parent or legal guardian must consent. Exception: if a minor is in immediate life threat and no guardian is available, implied consent applies.\n\nKey rule: a **competent adult** always has the right to refuse care — even if it might kill them."
    },
    {
      heading: "Refusal of Care: The Hardest Call",
      body: "A patient can legally refuse treatment if they are:\n1. An adult (18+)\n2. Alert and oriented (knows who they are, where they are, what happened, and the date — A&Ox4)\n3. Informed — they understand the risks of refusing\n\nYour job when a patient refuses:\n• Explain clearly what could happen if they don't get treatment\n• Try to persuade — not coerce\n• Have them sign a **refusal of care form**\n• Document everything in detail\n• Tell them they can call 911 again at any time\n\n**Never abandon a patient who refuses.** Offer alternatives. If you're unsure about their competence, contact medical direction."
    },
    {
      heading: "Duty to Act and Abandonment",
      body: "**Duty to act** — Once you are dispatched and arrive on scene, you have a legal obligation to provide care within your scope of practice. You cannot simply leave.\n\n**Abandonment** — Leaving a patient who needs care without transferring responsibility to someone of equal or higher training is abandonment. This is a serious legal violation.\n\nProper handoff requires:\n• Verbal report to receiving provider\n• Documentation of patient status at time of transfer\n• Transfer to someone with equal or greater training\n\nNote: off-duty EMTs generally have no legal duty to act — but check your state law and your conscience."
    },
    {
      heading: "Negligence: The Four Elements",
      body: "For an EMT to be found negligent, four things must be proven:\n\n1. **Duty** — You had a legal obligation to the patient (you were dispatched)\n2. **Breach** — You failed to meet the standard of care\n3. **Causation** — Your breach caused harm\n4. **Damages** — The patient suffered actual harm\n\nAll four must be present. Missing any one = no negligence finding.\n\n**Standard of care** = what a reasonable EMT with similar training would have done in the same situation. This is your benchmark. Document everything — good documentation is your best legal protection."
    },
    {
      heading: "DNR, Advance Directives, and Special Situations",
      body: "**DNR (Do Not Resuscitate)** — A legal document signed by a patient and physician stating the patient does not want resuscitation. If a valid DNR is present, you must honor it. Know your state's requirements for what makes a DNR valid.\n\n**Advance directives** — Legal documents describing a patient's wishes for care when they can no longer communicate. Treat these with the same weight as a DNR.\n\n**Confidentiality (HIPAA)** — Patient information is private. You cannot share it with family, friends, media, or anyone without the patient's consent — with limited exceptions (law enforcement, mandatory reporting of abuse, communicable disease).\n\n**Mandatory reporting** — EMTs are typically mandated reporters for suspected child abuse, elder abuse, and certain injuries (gunshot wounds, stab wounds). Know your state laws."
    }
  ],
  flashcards: [
    { front: "What is expressed consent?", back: "A competent adult verbally or in writing agreeing to treatment. Must be alert, oriented, and 18+." },
    { front: "What is implied consent?", back: "Legal assumption that an unconscious or incapacitated patient would consent to life-saving treatment." },
    { front: "What does A&Ox4 mean?", back: "Alert and oriented to person, place, time, and event. Required to confirm a patient is competent to refuse." },
    { front: "What are the 4 elements of negligence?", back: "Duty, Breach, Causation, Damages — all four must be proven for negligence." },
    { front: "What is abandonment?", back: "Leaving a patient who needs care without transferring responsibility to someone of equal or higher training." },
    { front: "What is a DNR?", back: "Do Not Resuscitate — a legal document directing EMTs not to perform resuscitation. Must be valid and present." },
    { front: "What is duty to act?", back: "The legal obligation to provide care once dispatched and on scene — you cannot simply leave." },
    { front: "What is the standard of care?", back: "What a reasonable EMT with similar training would do in the same situation — your legal benchmark." },
    { front: "Can a competent adult refuse care?", back: "Yes — always. A competent adult (18+, A&Ox4, informed of risks) has the legal right to refuse treatment." },
    { front: "What is HIPAA in EMS?", back: "Patient health information is confidential. Cannot be shared without consent except in specific legal situations." },
    { front: "What must you do when a patient refuses care?", back: "Explain risks, try to persuade, get a signed refusal form, document thoroughly, tell them to call 911 again if needed." },
    { front: "What makes a refusal legally valid?", back: "Patient is adult (18+), alert and oriented (A&Ox4), and informed of the risks of refusing." },
    { front: "What is an advance directive?", back: "A legal document stating a patient's care wishes when they can no longer communicate them." },
    { front: "What is mandatory reporting?", back: "The legal requirement for EMTs to report suspected child abuse, elder abuse, and certain injuries to authorities." },
    { front: "What are the three types of consent in EMS?", back: "Expressed (patient agrees), Implied (patient unconscious), and Consent for minors (guardian required)." },
    { front: "If all four elements of negligence aren't present, what happens?", back: "No negligence finding — all four (duty, breach, causation, damages) must be proven." },
  ],
  quiz: [
    { q: "A conscious, alert 28-year-old refuses transport after a fall. What must you confirm before accepting the refusal?", options: ["They have insurance", "They are A&Ox4 and understand the risks of refusal", "A family member agrees with the decision", "They are not in pain"], answer: 1, explanation: "A valid refusal requires the patient to be an adult, alert and oriented (A&Ox4), and informed of what could happen if they refuse." },
    { q: "You arrive on scene and the patient is unconscious. You have not been able to reach family. You should:", options: ["Wait for a family member before treating", "Leave and call dispatch for guidance", "Treat under implied consent", "Only treat if they wake up and consent"], answer: 2, explanation: "Implied consent covers unconscious patients — the law assumes they would want life-saving care. Treat immediately." },
    { q: "Which of the following is NOT an element of negligence?", options: ["Duty", "Intent to harm", "Causation", "Damages"], answer: 1, explanation: "Negligence does not require intent. The four elements are duty, breach, causation, and damages — not intent." },
    { q: "You have treated and stabilized a patient and are ready to transfer care at the hospital. Proper transfer requires:", options: ["Leaving the patient in a hospital bed and clearing the call", "A verbal report and documentation to someone of equal or greater training", "Having the patient sign a transfer form", "Notifying the billing department"], answer: 1, explanation: "Proper handoff = verbal report + documentation + transfer to equal or higher level provider. Anything less risks an abandonment claim." },
    { q: "A patient has a valid DNR. They go into cardiac arrest in front of you. You should:", options: ["Begin CPR anyway — the DNR might not be valid", "Honor the DNR and withhold resuscitation", "Contact medical direction before doing anything", "Begin CPR until a physician arrives"], answer: 1, explanation: "A valid DNR is a legal document that must be honored. Beginning CPR against a valid DNR violates the patient's legal rights." },
    { q: "What is abandonment in EMS?", options: ["Refusing to take a non-emergency call", "Leaving a patient who needs care without proper transfer of responsibility", "Asking a patient to sign a refusal form", "Transporting a patient to the wrong hospital"], answer: 1, explanation: "Abandonment = leaving a patient in need without transferring care to someone equally or more qualified. It's a serious legal and ethical violation." },
    { q: "An EMT leaves a call without documenting anything. Later, a negligence claim is filed. Why is this a problem?", options: ["Documentation doesn't affect legal outcomes", "Poor documentation makes it hard to prove standard of care was met", "The patient needed to sign the documentation", "Only paramedics are required to document"], answer: 1, explanation: "Documentation is your legal record. If it isn't written down, it didn't happen in court. Thorough documentation is your best protection." },
    { q: "You suspect a child patient has been physically abused. As an EMT, you are:", options: ["Not required to report unless the parent consents", "A mandatory reporter — required to report to appropriate authorities", "Only required to report if the injuries are severe", "Required to investigate before reporting"], answer: 1, explanation: "EMTs are mandatory reporters for suspected child abuse. You report — you don't investigate. Let trained authorities determine what happened." },
    { q: "A patient tells you personal health information during a call. Later a reporter asks what happened. You should:", options: ["Share the basics — it's public information once on scene", "Share nothing — patient information is confidential under HIPAA", "Only share if the reporter promises not to publish names", "Refer them to your supervisor"], answer: 1, explanation: "HIPAA protects all patient health information. You cannot disclose it to media, family, or others without patient consent or specific legal exceptions." },
    { q: "The 'standard of care' in EMS is best defined as:", options: ["The fastest possible treatment", "Whatever the patient asks for", "What a reasonable EMT with similar training would do in the same situation", "The treatment outlined in the hospital's protocols"], answer: 2, explanation: "Standard of care = reasonable EMT benchmark. It's determined by your training, protocols, and what peers would do in the same situation." },
    { q: "A competent adult patient refuses care. You should NOT:", options: ["Explain the risks of refusing", "Document the refusal thoroughly", "Force treatment because you believe it's best", "Offer to call 911 again if they change their mind"], answer: 2, explanation: "You cannot force treatment on a competent adult. Doing so is battery — unconsented touching — regardless of your intentions." },
    { q: "Duty to act means:", options: ["EMTs must act in any emergency they witness, on or off duty", "Once dispatched and on scene, you have a legal obligation to provide care", "EMTs must always transport patients to the hospital", "EMTs must follow all orders from bystanders"], answer: 1, explanation: "Duty to act applies once you are dispatched and respond. Off-duty EMTs generally don't have a legal duty to act, though state laws vary." },
    { q: "A 16-year-old is unconscious after a car accident. Their parents are unreachable. You should:", options: ["Wait for parental consent before treating", "Treat under implied consent — life threat present", "Transport without treating since consent is not available", "Call the hospital and ask for permission"], answer: 1, explanation: "When a minor faces a life-threatening emergency and guardians are unavailable, implied consent applies. Treat immediately." },
    { q: "Which document states a patient's care wishes when they can no longer communicate?", options: ["A DNR", "A refusal of care form", "An advance directive", "A HIPAA waiver"], answer: 2, explanation: "An advance directive documents the patient's care preferences in advance. A DNR is one specific type of advance directive focused on resuscitation." },
    { q: "For a negligence claim to succeed against an EMT, the plaintiff must prove:", options: ["The EMT made a mistake", "All four elements: duty, breach, causation, and damages", "The patient was harmed during transport", "The EMT violated a protocol"], answer: 1, explanation: "All four elements must be proven. A mistake alone isn't negligence if it didn't cause harm, or if there was no duty established." },
  ]
};

// ─── MODULE 0 QUIZ ───────────────────────────────────────────────────────────
const L6 = {
  moduleId: 0, id: 6,
  title: "Module Quiz",
  subtitle: "Cumulative assessment — everything from Foundation",
  duration: "15 min",
  dispatch: {
    call: `"All units, this is a training assessment. You are about to be evaluated on Module 0: Foundation. This covers EMS systems, anatomy, medical terminology, body systems, and legal/ethical principles."`,
    time: "NOW", eta: "Your call",
    hook: "Five lessons. Everything you've learned in Foundation. Let's find out what stuck — and what needs more work.",
    bridge: "This isn't just a test. It's a map. What you get right tells you what's locked in. What you miss tells you exactly where to go back. Both are useful. Let's go."
  },
  content: [
    {
      heading: "What This Quiz Covers",
      body: "This module quiz pulls from all five Foundation lessons:\n\n• **Lesson 1** — What is EMS? (system levels, scope, medical direction)\n• **Lesson 2** — The Human Body (anatomical terms, body systems, cavities)\n• **Lesson 3** — Medical Terminology (roots, prefixes, suffixes)\n• **Lesson 4** — Anatomy Basics (skeleton, spine, organs, landmarks)\n• **Lesson 5** — Legal & Ethics (consent, refusal, negligence, DNR, HIPAA)\n\nYou'll get 10 questions drawn randomly from across all five lessons. Use the AI Tutor after to work on any gaps."
    }
  ],
  flashcards: [
    { front: "What are the 4 levels of EMS certification?", back: "EMR → EMT → AEMT → Paramedic" },
    { front: "What does 'tachy-' mean?", back: "Fast. Tachycardia = fast heart rate. Tachypnea = fast breathing." },
    { front: "What is anatomical position?", back: "Standing upright, facing forward, arms at sides, palms forward." },
    { front: "What are the 4 elements of negligence?", back: "Duty, Breach, Causation, Damages — all four must be proven." },
    { front: "What does the xiphoid process mark?", back: "The bottom tip of the sternum. CPR compressions go just above it." },
    { front: "What is implied consent?", back: "Legal assumption that an unconscious patient would want life-saving treatment." },
    { front: "What does 'hypo-' mean?", back: "Below normal or deficient. Hypoglycemia = low blood sugar." },
    { front: "What are the four abdominal quadrants?", back: "RUQ, LUQ, RLQ, LLQ — divided at the umbilicus." },
    { front: "What is scope of practice?", back: "The specific skills and interventions an EMT is legally authorized to perform." },
    { front: "What does '-itis' mean?", back: "Inflammation. Appendicitis, bronchitis, hepatitis." },
    { front: "What is the antecubital fossa?", back: "Inside of the elbow — most common IV site and BP measurement point." },
    { front: "What is a DNR?", back: "Do Not Resuscitate — a legal document directing EMTs not to perform resuscitation." },
    { front: "What does 'dyspnea' mean?", back: "Difficulty breathing. Dys- (difficult) + -pnea (breathing)." },
    { front: "What is the diaphragm?", back: "Muscle separating thoracic and abdominal cavities — primary breathing muscle." },
    { front: "What is offline medical direction?", back: "Pre-written protocols and standing orders that guide EMT actions." },
    { front: "What does A&Ox4 mean?", back: "Alert and oriented to person, place, time, and event — required for valid refusal." },
  ],
  quiz: [
    // EMS System
    { q: "Which EMS level can start IV lines and give limited medications?", options: ["EMT", "EMR", "AEMT", "Dispatcher"], answer: 2, explanation: "AEMTs have expanded scope beyond basic EMT including IV access and a limited medication list." },
    { q: "Real-time physician orders given via radio during a call are called:", options: ["Offline medical direction", "Standing orders", "Online medical direction", "Protocol override"], answer: 2, explanation: "Online medical direction = live, real-time orders from a physician. Offline = pre-written protocols." },
    { q: "Scene safety is the FIRST priority because:", options: ["Protocols require it", "An injured EMT cannot help anyone", "The hospital requires documentation", "Dispatch always confirms it first"], answer: 1, explanation: "If you become a patient, you help no one. Scene safety before patient contact — always." },
    // Anatomy / Body
    { q: "The thoracic cavity is protected by the ribcage and contains:", options: ["Brain and spinal cord", "Digestive organs and kidneys", "Heart and lungs", "Bladder and reproductive organs"], answer: 2, explanation: "The thoracic cavity holds the heart and lungs. The cranial cavity holds the brain." },
    { q: "A wound on the posterior forearm is located:", options: ["Front of the forearm", "Back of the forearm", "Inside of the wrist", "Top of the shoulder"], answer: 1, explanation: "Posterior = back. In anatomical position, the posterior forearm is the back side." },
    { q: "The knee is _______ to the hip.", options: ["Proximal", "Superior", "Distal", "Medial"], answer: 2, explanation: "Distal = farther from the point of attachment. The knee is farther from the body's center than the hip." },
    { q: "Flank pain after trauma suggests injury to:", options: ["The liver", "The appendix", "The kidneys", "The spleen"], answer: 2, explanation: "The kidneys sit in the retroperitoneal flank region. Flank tenderness after trauma = suspect renal injury." },
    // Medical Terminology
    { q: "A patient is described as 'bradycardic and hypotensive.' This means:", options: ["Fast heart, high BP", "Slow heart, low BP", "No breathing, low BP", "Fast heart, low BP"], answer: 1, explanation: "Brady- = slow (heart). Hypo- = below normal. -Tension = pressure. Slow heart rate and low blood pressure." },
    { q: "The suffix '-emia' indicates:", options: ["Inflammation", "Surgical removal", "A blood condition", "Paralysis"], answer: 2, explanation: "-Emia = blood condition. Hypoglycemia = low blood sugar condition. Anemia = low red blood cell condition." },
    { q: "What does 'myocardial infarction' mean broken down?", options: ["Lung infection", "Kidney failure", "Heart muscle tissue death", "Brain bleed"], answer: 2, explanation: "Myo = muscle. Cardial = heart. Infarction = tissue death. Heart attack = death of heart muscle from blocked blood flow." },
    // Legal / Ethics
    { q: "A competent adult refuses care. You should:", options: ["Treat anyway for their safety", "Leave immediately without documentation", "Explain risks, attempt to persuade, document thoroughly, have them sign refusal", "Call police before doing anything"], answer: 2, explanation: "Competent adults have the right to refuse. Your job: inform, persuade (not coerce), document everything, get signature." },
    { q: "Which of the following is NOT an element of negligence?", options: ["Duty", "Intent to harm", "Causation", "Damages"], answer: 1, explanation: "Negligence doesn't require intent. The four elements are duty, breach, causation, and damages." },
    { q: "A valid DNR means you should:", options: ["Begin CPR anyway and reassess", "Contact the hospital first", "Honor it and withhold resuscitation", "Only honor it if a physician is present"], answer: 2, explanation: "A valid DNR is a legal document reflecting the patient's wishes. It must be honored." },
    { q: "HIPAA in EMS means:", options: ["You must report all calls to the state", "Patient information is confidential and cannot be shared without consent", "Patients must sign a waiver before treatment", "All calls must be recorded"], answer: 1, explanation: "HIPAA protects patient health information. You cannot share it with media, family, or others without consent." },
    { q: "Once dispatched and on scene, you have a legal obligation to provide care. This is called:", options: ["Implied consent", "Standard of care", "Duty to act", "Medical oversight"], answer: 2, explanation: "Duty to act = the legal obligation to provide care once you've been dispatched and arrived on scene." },
    // Cross-lesson integration
    { q: "A 70-year-old unconscious patient with no ID or family present. You should:", options: ["Wait for family consent before treating", "Call medical direction and wait", "Treat under implied consent", "Document and leave — no consent available"], answer: 2, explanation: "Implied consent covers unconscious patients. The law assumes they would want life-saving care. Treat immediately." },
    { q: "Dispatch says: 'Patient is diaphoretic with dyspnea and tachycardia.' You prepare for:", options: ["A broken bone", "A patient who is sweating, has difficulty breathing, and a fast heart rate", "A patient who is confused and combative", "A patient with abdominal pain"], answer: 1, explanation: "Diaphoretic = sweating. Dyspnea = difficulty breathing. Tachycardia = fast heart rate. Classic signs of a serious cardiac or respiratory emergency." },
    { q: "The antecubital fossa is important in EMS because:", options: ["It marks the bottom of the sternum for CPR", "It is where you take a BP and the most common IV site", "It separates the thoracic and abdominal cavities", "It is where the femoral artery runs"], answer: 1, explanation: "The antecubital fossa (inner elbow crease) is where you auscultate for blood pressure and the primary site for IV access." },
    { q: "For a patient refusal to be legally valid, the patient must be:", options: ["Accompanied by a family member", "18+, alert and oriented (A&Ox4), and informed of the risks", "Pain-free and ambulatory", "Cleared by medical direction"], answer: 1, explanation: "Valid refusal requires: adult (18+), alert and oriented to person/place/time/event, and informed of consequences of refusing." },
    { q: "A patient has 'bilateral' arm weakness after a head injury. Bilateral means:", options: ["Severe weakness", "Weakness on one side", "Weakness on both sides", "Weakness that comes and goes"], answer: 2, explanation: "Bi- = two. Bilateral = both sides. This is a significant finding after head trauma suggesting possible spinal cord involvement." },
  ]
};

// ─── MODULE 1 — AIRWAY, LESSON 1 ─────────────────────────────────────────────
const M1L1 = {
  moduleId: 1, id: 1,
  title: "Respiratory Anatomy",
  subtitle: "The airway from nose to alveoli — and why every millimeter matters",
  duration: "12 min",
  dispatch: {
    call: `"Unit 2, respond to 1847 Elmwood Avenue — 6-year-old male, found unresponsive by mother, possible choking incident."`,
    time: "8:14 PM", eta: "3 minutes",
    hook: "A child. Unresponsive. Possible airway obstruction. You have 3 minutes and everything you do in the next 10 minutes depends on understanding exactly how air gets in — and what stops it.",
    bridge: "The airway is the first thing you assess on every single patient. Not the second thing. Not after vitals. First. Because without a patent airway, nothing else matters. This lesson gives you the map."
  },
  content: [
    {
      heading: "The Upper Airway",
      body: "The upper airway runs from the nose and mouth down to the larynx:\n\n• **Nose/Mouth** — Air enters here. The nose filters, warms, and humidifies air. In emergencies, the mouth provides a larger opening.\n• **Nasopharynx** — Behind the nose. A nasopharyngeal airway (NPA) sits here.\n• **Oropharynx** — Behind the mouth. An oropharyngeal airway (OPA) sits here.\n• **Epiglottis** — A leaf-shaped flap that covers the trachea during swallowing. Critical structure — it's what prevents food from entering the lungs.\n• **Larynx (voice box)** — Where the airway and digestive tract diverge. Contains the vocal cords.\n• **Glottis** — The opening between the vocal cords. This is what you're targeting when managing an airway."
    },
    {
      heading: "The Lower Airway",
      body: "Below the larynx, air moves through:\n\n• **Trachea (windpipe)** — About 4-5 inches long, reinforced by C-shaped cartilage rings. Runs down the midline of the neck and chest.\n• **Carina** — Where the trachea splits into left and right mainstem bronchi. An important landmark — tubes placed too far go into the right mainstem (it's straighter and wider).\n• **Bronchi** — Left and right mainstem bronchi deliver air to each lung.\n• **Bronchioles** — Smaller branches within each lung.\n• **Alveoli** — Tiny air sacs at the end of the bronchioles where gas exchange actually happens. 300 million of them in adult lungs. Oxygen in, CO₂ out."
    },
    {
      heading: "Gas Exchange: The Whole Point",
      body: "Everything in the respiratory system exists to make gas exchange happen at the alveoli:\n\n1. You breathe in → air travels to alveoli\n2. Oxygen crosses the thin alveolar wall into surrounding capillaries\n3. CO₂ crosses from capillaries into the alveoli\n4. You breathe out → CO₂ leaves\n\n**Tidal volume** — The amount of air moved in one normal breath (~500 mL in an adult).\n**Minute volume** — Tidal volume × respiratory rate. This is how much air moves through the lungs per minute.\n\nWhen the airway is compromised, gas exchange fails. When gas exchange fails, cells die. Brain cells start dying within 4-6 minutes of oxygen deprivation."
    },
    {
      heading: "Pediatric Airways: Different Rules",
      body: "Children are not small adults when it comes to airways:\n\n• **Larger tongue relative to airway** — More likely to obstruct.\n• **Narrowest point is the cricoid cartilage** (subglottic), not the glottis — foreign bodies can wedge here.\n• **Softer, more pliable trachea** — Can collapse with hyperextension. Use a neutral or sniffing position, not full extension.\n• **Higher respiratory rate** — Normal infant rate is 30-60 breaths/min. A child breathing at 12 is in trouble.\n• **Faster decompensation** — Children compensate well until they don't. When they crash, they crash fast.\n\nAlways size your airway adjuncts to the patient."
    },
    {
      heading: "Airway Sounds and What They Tell You",
      body: "Your ears are assessment tools:\n\n• **Snoring** — Partial upper airway obstruction, usually the tongue. Fix: head-tilt chin-lift or jaw thrust.\n• **Stridor** — High-pitched sound on inhalation. Partial upper airway obstruction, often at the larynx. Think croup, epiglottitis, foreign body.\n• **Wheezing** — Musical lower airway sound, usually on exhalation. Bronchospasm — think asthma, COPD, allergic reaction.\n• **Gurgling** — Fluid in the airway (blood, secretions, vomit). Suction immediately.\n• **Silent chest** — No air movement at all in a patient in respiratory distress. Critical — complete obstruction or severe bronchospasm.\n\nNo sound from a patient in distress is one of the most dangerous findings in EMS."
    }
  ],
  flashcards: [
    { front: "What is the epiglottis?", back: "A leaf-shaped flap that covers the trachea during swallowing, preventing food/liquid from entering the lungs." },
    { front: "What is the carina?", back: "Where the trachea splits into the left and right mainstem bronchi." },
    { front: "Where does gas exchange occur?", back: "At the alveoli — tiny air sacs at the end of the bronchioles. Oxygen in, CO₂ out." },
    { front: "What is tidal volume?", back: "The amount of air moved in one normal breath — approximately 500 mL in an adult." },
    { front: "What is the glottis?", back: "The opening between the vocal cords — the target when managing an advanced airway." },
    { front: "What does snoring respirations indicate?", back: "Partial upper airway obstruction, usually the tongue. Needs airway repositioning." },
    { front: "What does stridor indicate?", back: "Partial upper airway obstruction at or near the larynx — high-pitched sound on inhalation." },
    { front: "What does gurgling indicate?", back: "Fluid in the airway (blood, secretions, vomit). Suction immediately." },
    { front: "What does a silent chest mean in a patient in distress?", back: "Complete airway obstruction or severe bronchospasm — critical emergency." },
    { front: "Why is the pediatric airway different?", back: "Larger tongue, softer trachea, narrowest point at cricoid (not glottis), faster decompensation." },
    { front: "What is minute volume?", back: "Tidal volume × respiratory rate — total air moved through the lungs per minute." },
    { front: "What is the nasopharynx?", back: "The airway space behind the nose — where an NPA (nasopharyngeal airway) is placed." },
    { front: "What is the oropharynx?", back: "The airway space behind the mouth — where an OPA (oropharyngeal airway) is placed." },
    { front: "How soon do brain cells begin to die without oxygen?", back: "Within 4-6 minutes of oxygen deprivation." },
    { front: "Why might an ET tube go into the right mainstem bronchus?", back: "The right mainstem bronchus is straighter and wider — tubes placed too far will preferentially enter it." },
    { front: "What is wheezing?", back: "A musical lower airway sound on exhalation — indicates bronchospasm (asthma, COPD, allergic reaction)." },
  ],
  quiz: [
    { q: "Where does oxygen actually cross into the bloodstream?", options: ["Trachea", "Bronchi", "Alveoli", "Larynx"], answer: 2, explanation: "Gas exchange happens at the alveoli — 300 million tiny air sacs where O₂ crosses into capillaries and CO₂ crosses out." },
    { q: "A patient has loud snoring respirations. The MOST likely cause is:", options: ["Fluid in the airway", "Bronchospasm", "The tongue obstructing the upper airway", "A foreign body in the trachea"], answer: 2, explanation: "Snoring = partial upper airway obstruction, almost always the tongue falling back. Fix with head-tilt chin-lift or jaw thrust." },
    { q: "You intubate a patient and hear breath sounds only on the right side. What happened?", options: ["The tube is in the esophagus", "Right-sided pneumothorax", "The tube went into the right mainstem bronchus", "The patient has asthma"], answer: 2, explanation: "The right mainstem bronchus is straighter and wider. A tube placed too far bypasses the carina and only ventilates the right lung. Pull back and reassess." },
    { q: "Stridor in a patient in respiratory distress indicates:", options: ["Lower airway bronchospasm", "Fluid in the lungs", "Partial upper airway obstruction near the larynx", "Complete airway obstruction"], answer: 2, explanation: "Stridor is a high-pitched inspiratory sound caused by partial obstruction at or near the larynx — croup, epiglottitis, foreign body, allergic swelling." },
    { q: "A child's airway is different from an adult's because:", options: ["Children breathe slower than adults", "The narrowest point is at the glottis, not the cricoid", "The tongue is smaller relative to the airway", "They decompensate faster and have softer tracheas"], answer: 3, explanation: "Pediatric airways have larger tongues relative to the space, softer tracheas, narrowest point at the cricoid, and children decompensate rapidly once they start to fail." },
    { q: "What is tidal volume?", options: ["Total lung capacity", "Air moved in one normal breath (~500mL in adults)", "Air remaining after maximum exhalation", "Respiratory rate per minute"], answer: 1, explanation: "Tidal volume is the amount of air in a single normal breath — roughly 500 mL in an adult at rest." },
    { q: "A patient in severe respiratory distress has a completely silent chest. This means:", options: ["The patient is breathing normally", "There is complete airway obstruction or severe bronchospasm — critical", "The patient is unconscious and not breathing", "Breath sounds are just hard to hear"], answer: 1, explanation: "A silent chest in a patient in distress means no air is moving. This is one of the most dangerous findings in EMS — complete obstruction or severe bronchospasm." },
    { q: "The epiglottis serves what function?", options: ["Produces vocal sounds", "Divides the trachea into bronchi", "Covers the trachea during swallowing to prevent aspiration", "Warms and filters incoming air"], answer: 2, explanation: "The epiglottis is a flap that snaps down over the trachea when you swallow, routing food and liquid to the esophagus, not the lungs." },
    { q: "Gurgling sounds in a patient's airway indicate:", options: ["Bronchospasm — give a bronchodilator", "Fluid in the airway — suction immediately", "Normal secretions — no action needed", "Partial obstruction — reposition the airway"], answer: 1, explanation: "Gurgling = fluid (blood, secretions, vomit) in the upper airway. Your immediate action is suctioning before it's aspirated into the lungs." },
    { q: "Brain cells begin to die without oxygen after approximately:", options: ["1-2 minutes", "4-6 minutes", "8-10 minutes", "15-20 minutes"], answer: 1, explanation: "Brain cells start dying within 4-6 minutes of oxygen deprivation. This is why airway management is always the first priority." },
    { q: "The carina is:", options: ["The opening between the vocal cords", "The point where the trachea splits into left and right bronchi", "The bottom of the epiglottis", "The narrowest part of a child's airway"], answer: 1, explanation: "The carina is where the trachea bifurcates into the left and right mainstem bronchi. Tubes placed past the carina go into the right bronchus." },
    { q: "Wheezing on exhalation most likely indicates:", options: ["Upper airway obstruction", "Fluid in the alveoli", "Bronchospasm in the lower airways", "A foreign body in the trachea"], answer: 2, explanation: "Wheezing is a musical expiratory sound from bronchospasm — narrowed lower airways. Think asthma, COPD, anaphylaxis." },
    { q: "When managing a pediatric airway, you should:", options: ["Fully hyperextend the neck like an adult", "Use a neutral or sniffing position — avoid hyperextension", "Always use an adult-sized OPA", "Avoid any airway adjuncts under age 5"], answer: 1, explanation: "Pediatric tracheas are soft and can kink with hyperextension. Use a neutral or gentle sniffing position to keep the airway open." },
    { q: "Minute volume is calculated as:", options: ["Tidal volume ÷ respiratory rate", "Tidal volume × respiratory rate", "Respiratory rate ÷ tidal volume", "Tidal volume + dead space"], answer: 1, explanation: "Minute volume = tidal volume × respiratory rate. It tells you the total amount of air moving through the lungs each minute." },
    { q: "The nasopharyngeal airway (NPA) is placed:", options: ["In the trachea", "Between the vocal cords", "Through the nose into the nasopharynx", "In the oropharynx behind the tongue"], answer: 2, explanation: "An NPA is a soft rubber tube placed through the nostril into the nasopharynx. It's better tolerated than an OPA in semi-conscious patients." },
  ]
};

const LESSON_DATA = { "0-1": L1, "0-2": L2, "0-3": L3, "0-4": L4, "0-5": L5, "0-6": L6, "1-1": M1L1 };

export { MODULES, LESSON_DATA };
