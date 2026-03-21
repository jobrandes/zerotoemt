// âââ ALL LESSON AND MODULE DATA âââââââââââââââââââââââââââââââââââââââââââââ
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
    call: `"Unit 7, respond to 412 Maple Street â 58-year-old male, unresponsive, wife on scene."`,
    time: "2:14 AM", eta: "4 minutes",
    hook: "You're in Ambulance 7. Your partner pulls out of the station. You've never been on a real call. What is your job in the next four minutes?",
    bridge: "You didn't just get in an ambulance. You stepped into one of the most carefully designed emergency response systems in the world. Every person, every piece of equipment, every radio transmission follows a structure. And you are now part of it."
  },
  content: [
    { heading: "EMS Stands For Emergency Medical Services", body: "EMS is the system â not just the people. It includes the 911 dispatch center, the first responders, the EMTs and paramedics, the ambulances, the hospitals, and all the protocols connecting them. When you become an EMT, you're joining this system as a critical link." },
    { heading: "The EMS System Has Levels", body: "Not all EMS providers are the same. There are four national certification levels:\n\nâ¢ **Emergency Medical Responder (EMR)** â Basic life-saving skills. Think bystanders, firefighters.\nâ¢ **Emergency Medical Technician (EMT)** â That's you. Assessment, basic interventions, transport.\nâ¢ **Advanced EMT (AEMT)** â EMT skills plus IV access and some medications.\nâ¢ **Paramedic** â The most advanced prehospital provider. Advanced airway, medications, cardiac monitoring." },
    { heading: "Your Scope of Practice", body: "As an EMT, you operate within a defined scope of practice â the specific skills and interventions you're legally allowed to perform. This is set by your state and guided by medical direction from a physician. You cannot go outside this scope, even if you think it might help." },
    { heading: "Medical Direction", body: "Every EMS agency has a Medical Director â a physician who oversees clinical care. They write protocols (offline medical direction) and can give you real-time orders by radio (online medical direction). You act as an extension of that physician in the field." },
    { heading: "The EMT's Core Job", body: "Your job has three parts:\n\n1. **Scene safety** â You can't help anyone if you become a patient.\n2. **Patient assessment** â Find out what's wrong.\n3. **Treatment and transport** â Do what you can, get them to definitive care.\n\nEMTs don't fix everything. You stabilize, treat life threats, and transport to a hospital where definitive care happens." }
  ],
  flashcards: [
    { front: "What does EMS stand for?", back: "Emergency Medical Services" },
    { front: "What are the 4 levels of EMS certification?", back: "EMR â EMT â AEMT â Paramedic" },
    { front: "What is scope of practice?", back: "The specific skills and interventions an EMT is legally authorized to perform" },
    { front: "What is a Medical Director?", back: "A physician who provides medical oversight and protocols for an EMS agency" },
    { front: "What is online medical direction?", back: "Real-time orders given by a physician via radio or phone during a call" },
    { front: "What is offline medical direction?", back: "Pre-written protocols and standing orders that guide EMT actions" },
    { front: "What are the 3 core EMT responsibilities?", back: "Scene safety â Patient assessment â Treatment and transport" },
    { front: "What does an EMT NOT do?", back: "Provide definitive care â EMTs stabilize and transport to the hospital" },
  ],
  quiz: [
    { q: "Which EMS level has the most advanced prehospital skills?", options: ["EMT", "AEMT", "Paramedic", "EMR"], answer: 2, explanation: "Paramedics have the most advanced scope including advanced airways, medications, and cardiac monitoring." },
    { q: "A physician who writes protocols and oversees EMS clinical care is called:", options: ["Charge Nurse", "Medical Director", "EMS Coordinator", "Clinical Supervisor"], answer: 1, explanation: "The Medical Director is the physician responsible for the clinical oversight of an EMS agency." },
    { q: "You're on scene and believe a patient needs a medication you're not trained to give. What do you do?", options: ["Give it anyway â patient safety first", "Call the hospital and ask", "Stay within your scope of practice and contact medical direction", "Ask a bystander for help"], answer: 2, explanation: "EMTs must stay within their scope of practice. If you need guidance, contact medical direction." },
    { q: "What is the FIRST priority on any EMS scene?", options: ["Patient assessment", "Scene safety", "Calling for backup", "Starting treatment"], answer: 1, explanation: "Scene safety always comes first. An injured EMT cannot help anyone." },
    { q: "Standing orders and pre-written protocols are an example of:", options: ["Online medical direction", "Offline medical direction", "Scope expansion", "State legislation"], answer: 1, explanation: "Offline medical direction includes all pre-written protocols guiding field care." },
    { q: "Which of the following is NOT a level of EMS certification?", options: ["EMR", "Paramedic", "Trauma Technician", "AEMT"], answer: 2, explanation: "There is no 'Trauma Technician' in the national EMS certification structure. The four levels are EMR, EMT, AEMT, and Paramedic." },
    { q: "What does EMS stand for?", options: ["Emergency Medicine Services", "Emergency Medical Services", "Emergency Management System", "Emergency Medical Support"], answer: 1, explanation: "EMS stands for Emergency Medical Services â the full system including dispatch, providers, vehicles, and hospitals." },
    { q: "An EMT's primary role is to:", options: ["Provide definitive care at the scene", "Diagnose the patient's condition", "Stabilize, treat life threats, and transport", "Prescribe medications in the field"], answer: 2, explanation: "EMTs stabilize patients and treat immediate life threats, then transport to a hospital for definitive care." },
    { q: "Online medical direction means:", options: ["Written protocols in a manual", "Real-time physician orders via radio or phone", "Online training courses", "State EMS regulations"], answer: 1, explanation: "Online medical direction is real-time â a physician giving you live orders during a call. Offline is the pre-written protocols." },
    { q: "Which level of EMS provider can start IV lines and give some medications?", options: ["EMT", "EMR", "AEMT", "First Responder"], answer: 2, explanation: "AEMTs (Advanced EMTs) have expanded scope including IV access and a limited medication list, beyond basic EMT skills." },
    { q: "Who sets the scope of practice for EMTs?", options: ["The hospital medical director", "The state, guided by medical direction", "The National Registry alone", "The EMT's training program"], answer: 1, explanation: "Scope of practice is defined by state law and guided by the agency's medical director." },
    { q: "If you arrive on scene and see downed power lines near the patient, you should:", options: ["Rush in to help the patient immediately", "Ensure scene safety before approaching", "Call the patient's family first", "Begin treatment from a distance"], answer: 1, explanation: "Scene safety is always first. Downed power lines are a life threat to you. Wait for the utility company to secure the scene." },
    { q: "A Medical Director gives an EMT permission to perform certain skills in advance via written protocols. This is:", options: ["Scope expansion", "Online medical direction", "Offline medical direction", "Standing authorization"], answer: 2, explanation: "Pre-written protocols that authorize specific actions without real-time contact are offline medical direction." },
    { q: "Which statement about EMTs is TRUE?", options: ["EMTs can prescribe medications", "EMTs provide definitive care", "EMTs act as an extension of the physician in the field", "EMTs diagnose medical conditions"], answer: 2, explanation: "EMTs function under physician oversight â they're an extension of the Medical Director in the field." },
    { q: "The EMS system includes which of the following?", options: ["Only the ambulance crew", "Only the hospital", "Dispatch, responders, transport, and hospital", "Only paramedics and nurses"], answer: 2, explanation: "EMS is the full system â 911 dispatch, first responders, EMTs, paramedics, transport, and the receiving hospital." },
  ]
};

const L2 = {
  moduleId: 0, id: 2,
  title: "The Human Body: A Quick Tour",
  subtitle: "Body systems, anatomical terms, and why they matter in the field",
  duration: "10 min",
  dispatch: {
    call: `"Unit 3, respond to 891 Oak Drive â 58-year-old male, chest pain, diaphoretic."`,
    time: "11:42 PM", eta: "6 minutes",
    hook: "Your partner asks: 'What's your assessment?' You freeze. You know something is wrong but don't have the words â or the framework â to describe what you're seeing.",
    bridge: "In EMS, communication is care. If you can't describe the body, you can't report on it, document it, or hand it off. This lesson gives you the map."
  },
  content: [
    { heading: "Anatomical Position: The Baseline", body: "All body descriptions in medicine assume the patient is in **anatomical position**: standing upright, facing forward, arms at sides, palms facing forward. Everything â left, right, front, back â is described from this reference. The patient's left is YOUR right when facing them. This trips people up constantly." },
    { heading: "Directional Terms You'll Use Every Day", body: "â¢ **Superior / Inferior** â Above / Below (head is superior to the chest)\nâ¢ **Anterior / Posterior** â Front / Back (chest is anterior, spine is posterior)\nâ¢ **Medial / Lateral** â Toward midline / Away from midline\nâ¢ **Proximal / Distal** â Closer to / Farther from the point of attachment\nâ¢ **Bilateral** â Both sides\n\nExample: 'Pain is in the right upper quadrant, radiating lateral to the flank.'" },
    { heading: "Body Regions and Cavities", body: "The body is divided into cavities that protect organs:\n\nâ¢ **Cranial cavity** â Brain\nâ¢ **Thoracic cavity** â Heart and lungs (protected by the ribcage)\nâ¢ **Abdominal cavity** â Digestive organs, liver, spleen, kidneys\nâ¢ **Pelvic cavity** â Bladder, reproductive organs\n\nThe **diaphragm** separates the thoracic and abdominal cavities. It's also your primary breathing muscle." },
    { heading: "The Major Body Systems", body: "â¢ **Respiratory** â Gets oxygen in, COâ out\nâ¢ **Cardiovascular** â Heart pumps blood carrying oxygen to every cell\nâ¢ **Nervous** â Brain, spinal cord, nerves â control everything\nâ¢ **Musculoskeletal** â Structure and movement\nâ¢ **Integumentary** â Skin (your largest organ, and a vital assessment tool)\nâ¢ **Digestive** â Breaks down food\nâ¢ **Urinary** â Filters waste (kidneys)\nâ¢ **Endocrine** â Hormones (think: diabetic emergencies)\nâ¢ **Immune/Lymphatic** â Defense\nâ¢ **Reproductive** â Relevant for OB emergencies" },
    { heading: "Why This Matters in the Field", body: "Body system knowledge = faster assessment. When a patient says chest pain + shortness of breath, you think cardiovascular AND respiratory simultaneously. When you see swollen ankles and ask about urination frequency, you're thinking cardiovascular failure affecting the kidneys.\n\nYou're not memorizing trivia. You're building a mental model that lets you see connections in a 90-second patient encounter." }
  ],
  flashcards: [
    { front: "What is anatomical position?", back: "Standing upright, facing forward, arms at sides, palms forward â the reference for all body descriptions" },
    { front: "Superior vs Inferior", back: "Superior = above. Inferior = below. The head is superior to the chest." },
    { front: "Anterior vs Posterior", back: "Anterior = front. Posterior = back. Chest is anterior, spine is posterior." },
    { front: "Medial vs Lateral", back: "Medial = toward the midline. Lateral = away from midline." },
    { front: "Proximal vs Distal", back: "Proximal = closer to the point of attachment. Distal = farther away. The wrist is distal to the elbow." },
    { front: "What separates the thoracic and abdominal cavities?", back: "The diaphragm â also the primary breathing muscle." },
    { front: "What organs are in the thoracic cavity?", back: "Heart and lungs" },
    { front: "What body system manages blood sugar emergencies?", back: "Endocrine system (hormones like insulin)" },
    { front: "Why does the EMT need to know body systems?", back: "To quickly identify connections between symptoms and failing systems during patient assessment" },
    { front: "Patient's left vs your left â which is correct on a report?", back: "Always the PATIENT'S left â anatomical position is from the patient's perspective" },
  ],
  quiz: [
    { q: "A patient has pain 'inferior to the umbilicus.' Where is the pain?", options: ["Above the belly button", "Below the belly button", "To the left of the belly button", "Behind the belly button"], answer: 1, explanation: "Inferior means below. The umbilicus is the belly button." },
    { q: "Which cavity contains the heart and lungs?", options: ["Abdominal", "Pelvic", "Cranial", "Thoracic"], answer: 3, explanation: "The thoracic cavity is protected by the ribcage and contains the heart and lungs." },
    { q: "A patient has a wound on the anterior surface of the forearm. Where is the wound?", options: ["Back of the forearm", "Side of the forearm", "Front of the forearm", "Top of the forearm"], answer: 2, explanation: "Anterior = front. In anatomical position, the anterior forearm faces forward (palms out)." },
    { q: "The knee is _______ to the ankle.", options: ["Distal", "Inferior", "Proximal", "Lateral"], answer: 2, explanation: "The knee is closer to the point of attachment (hip) than the ankle â making it proximal to the ankle." },
    { q: "A diabetic patient is unresponsive. Which body system is most likely involved?", options: ["Respiratory", "Musculoskeletal", "Endocrine", "Integumentary"], answer: 2, explanation: "Diabetes is an endocrine disorder â the pancreas fails to regulate insulin/blood sugar properly." },
    { q: "In anatomical position, the patient's palms are facing:", options: ["Backward", "Downward", "Forward", "Inward"], answer: 2, explanation: "Anatomical position = standing upright, facing forward, arms at sides, palms facing forward." },
    { q: "The diaphragm separates which two cavities?", options: ["Cranial and thoracic", "Thoracic and abdominal", "Abdominal and pelvic", "Pelvic and thoracic"], answer: 1, explanation: "The diaphragm is the primary breathing muscle and separates the thoracic (chest) and abdominal cavities." },
    { q: "A patient reports pain on the 'medial' side of the knee. Where is the pain?", options: ["Outside of the knee", "Back of the knee", "Inside of the knee, toward midline", "Front of the knee"], answer: 2, explanation: "Medial = toward the midline of the body. The medial knee is the inner side." },
    { q: "Which body system does skin belong to?", options: ["Musculoskeletal", "Integumentary", "Immune", "Endocrine"], answer: 1, explanation: "Skin is the primary organ of the integumentary system â and one of the most important assessment tools in EMS." },
    { q: "A patient has swollen ankles and is urinating frequently. You suspect:", options: ["Respiratory failure", "Musculoskeletal injury", "Cardiovascular system affecting kidneys", "Nervous system disorder"], answer: 2, explanation: "Swollen ankles from fluid backup + increased urination suggests cardiovascular failure impacting renal (kidney) function." },
    { q: "Which term means 'away from the midline of the body'?", options: ["Medial", "Proximal", "Lateral", "Inferior"], answer: 2, explanation: "Lateral = away from the midline. The ears are lateral to the nose." },
    { q: "The brain is located in which body cavity?", options: ["Thoracic", "Abdominal", "Pelvic", "Cranial"], answer: 3, explanation: "The cranial cavity is formed by the skull and contains the brain." },
    { q: "A patient complains of posterior chest pain. Where is the pain?", options: ["Front of the chest", "Side of the chest", "Back of the chest", "Inside the chest"], answer: 2, explanation: "Posterior = back. Posterior chest pain is pain in the back of the chest â think aortic dissection, pulmonary issues." },
    { q: "Which body system controls heart rate, breathing, and consciousness?", options: ["Endocrine", "Cardiovascular", "Nervous", "Respiratory"], answer: 2, explanation: "The nervous system â brain, spinal cord, nerves â controls and coordinates all body functions including vital signs." },
    { q: "When documenting, you note swelling on the 'right' arm. Whose right do you use?", options: ["Your right when facing the patient", "The patient's right", "Either â both are acceptable", "The closest arm to you"], answer: 1, explanation: "Always the PATIENT's right. All anatomical descriptions are from the patient's perspective in anatomical position." },
  ]
};

const L3 = {
  moduleId: 0, id: 3,
  title: "Medical Terminology 101",
  subtitle: "The language of medicine â roots, prefixes, suffixes, and why they save time in the field",
  duration: "10 min",
  dispatch: {
    call: `"Unit 12, respond to 334 Pine Avenue â 71-year-old female, dyspnea, tachycardia, history of hypertension."`,
    time: "3:55 PM", eta: "5 minutes",
    hook: "The dispatcher just rattled off three words you've never heard. You have 5 minutes to prepare. Do you know what's waiting for you?",
    bridge: "Every word in that call is built from parts â and once you know the parts, you can decode almost any medical term on the fly. This isn't memorization. It's learning a system."
  },
  content: [
    {
      heading: "Why Medical Terminology Matters",
      body: "In EMS, you communicate with dispatchers, nurses, doctors, and partners â all in high-stress, time-compressed situations. Medical terminology is the shared language that removes ambiguity.\n\nSaying 'the patient has tachycardia' is faster, more precise, and universally understood than 'the patient's heart is beating really fast.' When seconds matter, precision matters."
    },
    {
      heading: "The Building Blocks: Roots",
      body: "Medical terms are built from Greek and Latin roots. Learn the root, decode the word.\n\nâ¢ **cardi** â heart (cardiology, tachycardia)\nâ¢ **pulmon** â lung (pulmonary)\nâ¢ **neuro** â nerve/brain (neurological)\nâ¢ **hepat** â liver (hepatitis)\nâ¢ **renal / nephro** â kidney (renal failure, nephrology)\nâ¢ **gastr** â stomach (gastric)\nâ¢ **derm** â skin (dermatology)\nâ¢ **osteo** â bone (osteoporosis)\nâ¢ **hem / hemo** â blood (hemorrhage, hematoma)\nâ¢ **myÐ¾** â muscle (myocardial)"
    },
    {
      heading: "Prefixes: What Comes Before",
      body: "Prefixes modify the root â they tell you quantity, location, or condition.\n\nâ¢ **tachy-** â fast (tachycardia = fast heart rate)\nâ¢ **brady-** â slow (bradycardia = slow heart rate)\nâ¢ **hyper-** â above normal/excess (hypertension = high BP)\nâ¢ **hypo-** â below normal/deficient (hypoglycemia = low blood sugar)\nâ¢ **dys-** â difficult/abnormal (dyspnea = difficulty breathing)\nâ¢ **a- / an-** â without (apnea = without breathing)\nâ¢ **bi-** â two (bilateral = both sides)\nâ¢ **hemi-** â half (hemiplegia = paralysis of one side)\nâ¢ **poly-** â many (polyuria = frequent urination)\nâ¢ **sub-** â under (subcutaneous = under the skin)"
    },
    {
      heading: "Suffixes: What Comes After",
      body: "Suffixes tell you what kind of thing you're dealing with â a condition, a procedure, a symptom.\n\nâ¢ **-itis** â inflammation (appendicitis, bronchitis)\nâ¢ **-emia** â blood condition (hypoglycemia, anemia)\nâ¢ **-ectomy** â surgical removal (appendectomy)\nâ¢ **-ostomy** â surgical opening (tracheostomy)\nâ¢ **-plasty** â surgical repair (rhinoplasty)\nâ¢ **-algia** â pain (cardialgia = heart pain)\nâ¢ **-pnea** â breathing (apnea, dyspnea, tachypnea)\nâ¢ **-plegia** â paralysis (hemiplegia, paraplegia)\nâ¢ **-ology** â study of (cardiology, neurology)\nâ¢ **-scope / -scopy** â instrument/visual exam (laryngoscope)"
    },
    {
      heading: "Decoding Real EMS Terms",
      body: "Now put it together. You'll hear these on calls:\n\nâ¢ **Tachycardia** â tachy (fast) + cardia (heart) = fast heart rate\nâ¢ **Dyspnea** â dys (difficulty) + pnea (breathing) = difficulty breathing\nâ¢ **Hypertension** â hyper (excess) + tension (pressure) = high blood pressure\nâ¢ **Hypoglycemia** â hypo (low) + glyc (sugar) + emia (blood condition) = low blood sugar\nâ¢ **Hemiplegia** â hemi (half) + plegia (paralysis) = one-sided paralysis\nâ¢ **Myocardial infarction** â myo (muscle) + cardial (heart) + infarction (tissue death) = heart attack\nâ¢ **Subcutaneous** â sub (under) + cutaneous (skin) = under the skin\nâ¢ **Tachypnea** â tachy (fast) + pnea (breathing) = rapid breathing\n\nYou don't memorize these â you decode them. Every time."
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
    { q: "What does the suffix '-itis' indicate?", options: ["Removal of", "Study of", "Paralysis", "Inflammation"], answer: 3, explanation: "-Itis means inflammation. Appendicitis, bronchitis, hepatitis â all inflammatory conditions." },
    { q: "Breaking it down: what does 'tachypnea' mean?", options: ["Slow breathing", "No breathing", "Rapid breathing", "Difficult breathing"], answer: 2, explanation: "Tachy- (fast) + -pnea (breathing) = rapid breathing. Different from dyspnea which is difficulty breathing." },
    { q: "The root 'hem/hemo' relates to which body substance?", options: ["Bone", "Blood", "Muscle", "Skin"], answer: 1, explanation: "Hem/hemo refers to blood. Hemorrhage = uncontrolled bleeding. Hematoma = blood pooling under tissue." },
    { q: "A patient has 'bilateral' leg swelling. What does bilateral mean?", options: ["Severe", "One-sided", "Both sides", "Sudden onset"], answer: 2, explanation: "Bi- means two. Bilateral = both sides. Important distinction â unilateral swelling vs bilateral has different clinical implications." },
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
    call: `"Unit 5, respond to 77 Westfield Road â male, mid-40s, fell from a ladder, complaining of right flank pain and left wrist deformity."`,
    time: "1:18 PM", eta: "3 minutes",
    hook: "Two injuries, two body regions, one patient. You need to locate them precisely, assess them fast, and communicate what you find. Do you know your landmarks?",
    bridge: "Anatomy isn't memorizing a textbook diagram. It's knowing where things live so you can find problems fast, protect the right structures, and tell the hospital exactly what's coming through their door."
  },
  content: [
    {
      heading: "The Skeleton: Your Structural Roadmap",
      body: "The skeleton does three things for you as an EMT:\n\n1. **Protection** â The skull protects the brain. The ribcage protects the heart and lungs. The spine protects the spinal cord.\n2. **Landmarks** â Bony landmarks tell you where organs are. The xiphoid process marks the bottom of the sternum. The iliac crest marks the top of the pelvis.\n3. **Injury clues** â Deformity, crepitus (grinding), and point tenderness over bone = suspect fracture.\n\nKey bones to know: **skull, mandible, clavicle, sternum, ribs, humerus, radius, ulna, femur, tibia, fibula, pelvis, spine.**"
    },
    {
      heading: "The Spine: Handle With Respect",
      body: "The spine has five regions â memorize them top to bottom:\n\nâ¢ **Cervical (C1âC7)** â Neck. 7 vertebrae. Most vulnerable. Injury here = potential quadriplegia.\nâ¢ **Thoracic (T1âT12)** â Mid-back. Attached to ribs.\nâ¢ **Lumbar (L1âL5)** â Lower back. Largest vertebrae. Common injury site.\nâ¢ **Sacral** â Fused to the pelvis.\nâ¢ **Coccyx** â Tailbone.\n\nIn trauma, assume spinal injury until proven otherwise. Mechanism of injury matters â falls, MVCs, diving accidents."
    },
    {
      heading: "The Thorax: What's Inside the Chest",
      body: "The thoracic cavity is your priority chest real estate:\n\nâ¢ **Heart** â Sits slightly left of center, behind the sternum. Protected by the pericardium (fibrous sac).\nâ¢ **Lungs** â Fill the rest of the thoracic cavity. Right lung has 3 lobes, left has 2 (heart takes up space).\nâ¢ **Great vessels** â Aorta, superior/inferior vena cava â major blood highways.\nâ¢ **Trachea** â Airway, runs down the midline, splits into right and left mainstem bronchi at the carina.\n\nKey landmark: the **midclavicular line** (MCL) â used for chest decompression placement."
    },
    {
      heading: "The Abdomen: Four Quadrants",
      body: "The abdomen is divided into four quadrants using the umbilicus as the center point:\n\nâ¢ **RUQ (Right Upper Quadrant)** â Liver, gallbladder, part of colon\nâ¢ **LUQ (Left Upper Quadrant)** â Stomach, spleen, part of colon\nâ¢ **RLQ (Right Lower Quadrant)** â Appendix, small intestine, right ovary (female)\nâ¢ **LLQ (Left Lower Quadrant)** â Sigmoid colon, left ovary (female)\n\nThe **flank** is the lateral abdominal region â flank pain with trauma = think kidney injury.\nThe **epigastric** region is between the RUQ and LUQ â often the site of cardiac referred pain."
    },
    {
      heading: "Key Body Landmarks You'll Use on Every Call",
      body: "These are your field reference points:\n\nâ¢ **Xiphoid process** â Bottom tip of sternum. CPR landmark â compressions go just above this.\nâ¢ **Sternal notch** â Top of sternum. Airway reference point.\nâ¢ **Midaxillary line** â Vertical line through the armpit. Used for chest needle placement.\nâ¢ **Costal margin** â Lower edge of the ribcage.\nâ¢ **Iliac crest** â Top of the hip bone. Pelvic injury landmark.\nâ¢ **Femoral triangle** â Groin region. Major femoral artery and nerve run here.\nâ¢ **Popliteal fossa** â Back of the knee. Pulse point.\nâ¢ **Antecubital fossa** â Inside of the elbow. Where you take a BP and the most common IV site."
    }
  ],
  flashcards: [
    { front: "How many cervical vertebrae are there?", back: "7 â C1 through C7. The neck. Most vulnerable spinal region." },
    { front: "What are the four abdominal quadrants?", back: "RUQ, LUQ, RLQ, LLQ â divided at the umbilicus." },
    { front: "What organ is in the RUQ?", back: "Liver and gallbladder (plus part of the colon)." },
    { front: "What organ is in the LUQ?", back: "Stomach and spleen (plus part of the colon)." },
    { front: "Where is the appendix?", back: "Right Lower Quadrant (RLQ)." },
    { front: "What does the xiphoid process mark?", back: "The bottom tip of the sternum â CPR compressions go just above it." },
    { front: "What is the antecubital fossa?", back: "The inside of the elbow â most common IV site and where you take a blood pressure." },
    { front: "How many lobes does the right lung have vs the left?", back: "Right = 3 lobes. Left = 2 lobes (heart takes up the extra space)." },
    { front: "What is crepitus?", back: "A grinding or crackling sensation/sound felt over bone â sign of a possible fracture." },
    { front: "What does the pericardium do?", back: "It's the fibrous sac surrounding the heart, protecting it." },
    { front: "Flank pain after trauma suggests injury to which organ?", back: "The kidneys â they sit in the flank region posteriorly." },
    { front: "What is the epigastric region?", back: "The area between the RUQ and LUQ, just below the sternum. Cardiac pain often refers here." },
    { front: "What is the femoral triangle?", back: "The groin region where the femoral artery, vein, and nerve run. Major hemorrhage risk in trauma." },
    { front: "What spinal region has the largest vertebrae?", back: "Lumbar (L1âL5) â the lower back. Most common site for back injuries." },
    { front: "What is the popliteal fossa?", back: "The back of the knee â a pulse point used in assessment." },
    { front: "What does the trachea split into?", back: "The right and left mainstem bronchi at a point called the carina." },
  ],
  quiz: [
    { q: "A patient fell and has point tenderness over the right lower quadrant. Which organ should you suspect?", options: ["Liver", "Spleen", "Appendix", "Stomach"], answer: 2, explanation: "The appendix is located in the RLQ. Point tenderness there with guarding is classic appendicitis or trauma to that region." },
    { q: "During CPR, where do you position your hands for chest compressions?", options: ["Directly on the xiphoid process", "Just above the xiphoid process on the lower sternum", "On the left side of the chest over the heart", "On the upper sternum below the clavicle"], answer: 1, explanation: "Compressions go on the lower half of the sternum, just above the xiphoid process. Compressing the xiphoid itself can cause liver injury." },
    { q: "A patient dove headfirst into a shallow pool. Your FIRST concern for spinal injury is:", options: ["Lumbar spine", "Thoracic spine", "Cervical spine", "Sacral spine"], answer: 2, explanation: "Cervical spine (C1-C7) is most vulnerable in diving accidents. Injury here can cause quadriplegia." },
    { q: "Flank pain after an MVC should make you suspect injury to:", options: ["The appendix", "The liver", "The kidneys", "The stomach"], answer: 2, explanation: "The kidneys are retroperitoneal organs that sit in the flank region. Flank pain with trauma = suspect renal injury." },
    { q: "You need to take a blood pressure on your patient. Where do you place the cuff and listen?", options: ["Upper arm, listen at the antecubital fossa", "Forearm, listen at the wrist", "Upper arm, listen at the axilla", "Lower arm, listen at the elbow crease"], answer: 0, explanation: "BP cuff goes on the upper arm; you auscultate (listen) at the antecubital fossa â the inner elbow crease." },
    { q: "The right lung has how many lobes?", options: ["1", "2", "3", "4"], answer: 2, explanation: "The right lung has 3 lobes. The left has only 2 because the heart occupies space on the left side." },
    { q: "A patient has pain in the epigastric region with sweating and nausea. You should think:", options: ["Appendicitis", "Possible cardiac event â referred pain", "Kidney stone", "Bowel obstruction"], answer: 1, explanation: "The epigastric region between the RUQ and LUQ is where cardiac ischemia often refers pain. Never dismiss epigastric pain in adults." },
    { q: "What is crepitus, and what does it suggest?", options: ["Swelling at a joint â suggests infection", "Grinding sensation over bone â suggests fracture", "Popping in a joint â normal finding", "Bruising under the skin â suggests contusion"], answer: 1, explanation: "Crepitus is a grinding or crackling felt (or heard) over bone â a strong indicator of fracture. Document and splint." },
    { q: "The spinal region attached to the ribs is:", options: ["Cervical", "Lumbar", "Sacral", "Thoracic"], answer: 3, explanation: "T1-T12, the thoracic vertebrae, each articulate with a pair of ribs forming the posterior thoracic cage." },
    { q: "Which landmark is used for chest needle decompression placement?", options: ["Midclavicular line, 2nd intercostal space", "Midaxillary line, 1st intercostal space", "Sternal notch", "Xiphoid process level"], answer: 0, explanation: "Needle chest decompression goes in the 2nd intercostal space, midclavicular line â away from vessels and nerves." },
    { q: "The spleen is located in which abdominal quadrant?", options: ["RUQ", "RLQ", "LLQ", "LUQ"], answer: 3, explanation: "The spleen sits in the LUQ. It's highly vascular and ruptures easily in trauma â a major bleeding risk." },
    { q: "A patient has a 'clavicle fracture.' Where is the injury?", options: ["Collarbone", "Kneecap", "Shoulder blade", "Hip bone"], answer: 0, explanation: "The clavicle is the collarbone â it connects the sternum to the shoulder. Common fracture from falls on outstretched arms." },
    { q: "What does the pericardium surround?", options: ["The lungs", "The heart", "The brain", "The kidneys"], answer: 1, explanation: "The pericardium is the fibrous sac that surrounds and protects the heart. Blood in the pericardium = cardiac tamponade." },
    { q: "In trauma, when should you suspect spinal injury?", options: ["Only if the patient reports neck pain", "Only in high-speed MVCs", "Based on mechanism â falls, MVCs, diving, until proven otherwise", "Only if the patient is unconscious"], answer: 2, explanation: "Assume spinal injury based on mechanism of injury, not symptoms alone. Adrenaline can mask pain in trauma." },
    { q: "The femoral triangle in the groin is clinically important because:", options: ["It is the most common fracture site", "The femoral artery runs there â hemorrhage risk", "It contains the appendix", "It is where you check lung sounds"], answer: 1, explanation: "The femoral artery runs through the femoral triangle. Penetrating trauma to the groin can cause life-threatening hemorrhage." },
  ]
};

const L5 = {
  moduleId: 0, id: 5,
  title: "Legal & Ethics",
  subtitle: "Consent, refusals, duty to act, negligence, and the ethical backbone of EMS",
  duration: "11 min",
  dispatch: {
    call: `"Unit 9, respond to 204 Lakeview Drive â 34-year-old male, conscious and alert, refuses transport after a minor MVC. No apparent injuries."`,
    time: "4:32 PM", eta: "4 minutes",
    hook: "He's alert, he's refusing, and he's signing nothing. Do you have to let him go? What happens if he dies an hour later? Are you liable?",
    bridge: "Legal and ethics isn't the boring part of EMS â it's the part that protects your patients when they can't protect themselves, and protects you when things go wrong. Every call has a legal dimension. You need to know the rules before you need them."
  },
  content: [
    {
      heading: "Consent: You Cannot Touch Someone Without It",
      body: "Before you treat any patient, you need consent. There are three types:\n\nâ¢ **Expressed consent** â The patient verbally or in writing agrees to treatment. They must be alert, oriented, and an adult (18+) to give it. This is the standard.\nâ¢ **Implied consent** â When a patient is unconscious, unresponsive, or otherwise unable to consent, the law assumes they would want treatment. You treat them.\nâ¢ **Consent for minors** â A parent or legal guardian must consent. Exception: if a minor is in immediate life threat and no guardian is available, implied consent applies.\n\nKey rule: a **competent adult** always has the right to refuse care â even if it might kill them."
    },
    {
      heading: "Refusal of Care: The Hardest Call",
      body: "A patient can legally refuse treatment if they are:\n1. An adult (18+)\n2. Alert and oriented (knows who they are, where they are, what happened, and the date â A&Ox4)\n3. Informed â they understand the risks of refusing\n\nYour job when a patient refuses:\nâ¢ Explain clearly what could happen if they don't get treatment\nâ¢ Try to persuade â not coerce\nâ¢ Have them sign a **refusal of care form**\nâ¢ Document everything in detail\nâ¢ Tell them they can call 911 again at any time\n\n**Never abandon a patient who refuses.** Offer alternatives. If you're unsure about their competence, contact medical direction."
    },
    {
      heading: "Duty to Act and Abandonment",
      body: "**Duty to act** â Once you are dispatched and arrive on scene, you have a legal obligation to provide care within your scope of practice. You cannot simply leave.\n\n**Abandonment** â Leaving a patient who needs care without transferring responsibility to someone of equal or higher training is abandonment. This is a serious legal violation.\n\nProper handoff requires:\nâ¢ Verbal report to receiving provider\nâ¢ Documentation of patient status at time of transfer\nâ¢ Transfer to someone with equal or greater training\n\nNote: off-duty EMTs generally have no legal duty to act â but check your state law and your conscience."
    },
    {
      heading: "Negligence: The Four Elements",
      body: "For an EMT to be found negligent, four things must be proven:\n\n1. **Duty** â You had a legal obligation to the patient (you were dispatched)\n2. **Breach** â You failed to meet the standard of care\n3. **Causation** â Your breach caused harm\n4. **Damages** â The patient suffered actual harm\n\nAll four must be present. Missing any one = no negligence finding.\n\n**Standard of care** = what a reasonable EMT with similar training would have done in the same situation. This is your benchmark. Document everything â good documentation is your best legal protection."
    },
    {
      heading: "DNR, Advance Directives, and Special Situations",
      body: "**DNR (Do Not Resuscitate)** â A legal document signed by a patient and physician stating the patient does not want resuscitation. If a valid DNR is present, you must honor it. Know your state's requirements for what makes a DNR valid.\n\n**Advance directives** â Legal documents describing a patient's wishes for care when they can no longer communicate. Treat these with the same weight as a DNR.\n\n**Confidentiality (HIPAA)** â Patient information is private. You cannot share it with family, friends, media, or anyone without the patient's consent â with limited exceptions (law enforcement, mandatory reporting of abuse, communicable disease).\n\n**Mandatory reporting** â EMTs are typically mandated reporters for suspected child abuse, elder abuse, and certain injuries (gunshot wounds, stab wounds). Know your state laws."
    }
  ],
  flashcards: [
    { front: "What is expressed consent?", back: "A competent adult verbally or in writing agreeing to treatment. Must be alert, oriented, and 18+." },
    { front: "What is implied consent?", back: "Legal assumption that an unconscious or incapacitated patient would consent to life-saving treatment." },
    { front: "What does A&Ox4 mean?", back: "Alert and oriented to person, place, time, and event. Required to confirm a patient is competent to refuse." },
    { front: "What are the 4 elements of negligence?", back: "Duty, Breach, Causation, Damages â all four must be proven for negligence." },
    { front: "What is abandonment?", back: "Leaving a patient who needs care without transferring responsibility to someone of equal or higher training." },
    { front: "What is a DNR?", back: "Do Not Resuscitate â a legal document directing EMTs not to perform resuscitation. Must be valid and present." },
    { front: "What is duty to act?", back: "The legal obligation to provide care once dispatched and on scene â you cannot simply leave." },
    { front: "What is the standard of care?", back: "What a reasonable EMT with similar training would do in the same situation â your legal benchmark." },
    { front: "Can a competent adult refuse care?", back: "Yes â always. A competent adult (18+, A&Ox4, informed of risks) has the legal right to refuse treatment." },
    { front: "What is HIPAA in EMS?", back: "Patient health information is confidential. Cannot be shared without consent except in specific legal situations." },
    { front: "What must you do when a patient refuses care?", back: "Explain risks, try to persuade, get a signed refusal form, document thoroughly, tell them to call 911 again if needed." },
    { front: "What makes a refusal legally valid?", back: "Patient is adult (18+), alert and oriented (A&Ox4), and informed of the risks of refusing." },
    { front: "What is an advance directive?", back: "A legal document stating a patient's care wishes when they can no longer communicate them." },
    { front: "What is mandatory reporting?", back: "The legal requirement for EMTs to report suspected child abuse, elder abuse, and certain injuries to authorities." },
    { front: "What are the three types of consent in EMS?", back: "Expressed (patient agrees), Implied (patient unconscious), and Consent for minors (guardian required)." },
    { front: "If all four elements of negligence aren't present, what happens?", back: "No negligence finding â all four (duty, breach, causation, damages) must be proven." },
  ],
  quiz: [
    { q: "A conscious, alert 28-year-old refuses transport after a fall. What must you confirm before accepting the refusal?", options: ["They have insurance", "They are A&Ox4 and understand the risks of refusal", "A family member agrees with the decision", "They are not in pain"], answer: 1, explanation: "A valid refusal requires the patient to be an adult, alert and oriented (A&Ox4), and informed of what could happen if they refuse." },
    { q: "You arrive on scene and the patient is unconscious. You have not been able to reach family. You should:", options: ["Wait for a family member before treating", "Leave and call dispatch for guidance", "Treat under implied consent", "Only treat if they wake up and consent"], answer: 2, explanation: "Implied consent covers unconscious patients â the law assumes they would want life-saving care. Treat immediately." },
    { q: "Which of the following is NOT an element of negligence?", options: ["Duty", "Intent to harm", "Causation", "Damages"], answer: 1, explanation: "Negligence does not require intent. The four elements are duty, breach, causation, and damages â not intent." },
    { q: "You have treated and stabilized a patient and are ready to transfer care at the hospital. Proper transfer requires:", options: ["Leaving the patient in a hospital bed and clearing the call", "A verbal report and documentation to someone of equal or greater training", "Having the patient sign a transfer form", "Notifying the billing department"], answer: 1, explanation: "Proper handoff = verbal report + documentation + transfer to equal or higher level provider. Anything less risks an abandonment claim." },
    { q: "A patient has a valid DNR. They go into cardiac arrest in front of you. You should:", options: ["Begin CPR anyway â the DNR might not be valid", "Honor the DNR and withhold resuscitation", "Contact medical direction before doing anything", "Begin CPR until a physician arrives"], answer: 1, explanation: "A valid DNR is a legal document that must be honored. Beginning CPR against a valid DNR violates the patient's legal rights." },
    { q: "What is abandonment in EMS?", options: ["Refusing to take a non-emergency call", "Leaving a patient who needs care without proper transfer of responsibility", "Asking a patient to sign a refusal form", "Transporting a patient to the wrong hospital"], answer: 1, explanation: "Abandonment = leaving a patient in need without transferring care to someone equally or more qualified. It's a serious legal and ethical violation." },
    { q: "An EMT leaves a call without documenting anything. Later, a negligence claim is filed. Why is this a problem?", options: ["Documentation doesn't affect legal outcomes", "Poor documentation makes it hard to prove standard of care was met", "The patient needed to sign the documentation", "Only paramedics are required to document"], answer: 1, explanation: "Documentation is your legal record. If it isn't written down, it didn't happen in court. Thorough documentation is your best protection." },
    { q: "You suspect a child patient has been physically abused. As an EMT, you are:", options: ["Not required to report unless the parent consents", "A mandatory reporter â required to report to appropriate authorities", "Only required to report if the injuries are severe", "Required to investigate before reporting"], answer: 1, explanation: "EMTs are mandatory reporters for suspected child abuse. You report â you don't investigate. Let trained authorities determine what happened." },
    { q: "A patient tells you personal health information during a call. Later a reporter asks what happened. You should:", options: ["Share the basics â it's public information once on scene", "Share nothing â patient information is confidential under HIPAA", "Only share if the reporter promises not to publish names", "Refer them to your supervisor"], answer: 1, explanation: "HIPAA protects all patient health information. You cannot disclose it to media, family, or others without patient consent or specific legal exceptions." },
    { q: "The 'standard of care' in EMS is best defined as:", options: ["The fastest possible treatment", "Whatever the patient asks for", "What a reasonable EMT with similar training would do in the same situation", "The treatment outlined in the hospital's protocols"], answer: 2, explanation: "Standard of care = reasonable EMT benchmark. It's determined by your training, protocols, and what peers would do in the same situation." },
    { q: "A competent adult patient refuses care. You should NOT:", options: ["Explain the risks of refusing", "Document the refusal thoroughly", "Force treatment because you believe it's best", "Offer to call 911 again if they change their mind"], answer: 2, explanation: "You cannot force treatment on a competent adult. Doing so is battery â unconsented touching â regardless of your intentions." },
    { q: "Duty to act means:", options: ["EMTs must act in any emergency they witness, on or off duty", "Once dispatched and on scene, you have a legal obligation to provide care", "EMTs must always transport patients to the hospital", "EMTs must follow all orders from bystanders"], answer: 1, explanation: "Duty to act applies once you are dispatched and respond. Off-duty EMTs generally don't have a legal duty to act, though state laws vary." },
    { q: "A 16-year-old is unconscious after a car accident. Their parents are unreachable. You should:", options: ["Wait for parental consent before treating", "Treat under implied consent â life threat present", "Transport without treating since consent is not available", "Call the hospital and ask for permission"], answer: 1, explanation: "When a minor faces a life-threatening emergency and guardians are unavailable, implied consent applies. Treat immediately." },
    { q: "Which document states a patient's care wishes when they can no longer communicate?", options: ["A DNR", "A refusal of care form", "An advance directive", "A HIPAA waiver"], answer: 2, explanation: "An advance directive documents the patient's care preferences in advance. A DNR is one specific type of advance directive focused on resuscitation." },
    { q: "For a negligence claim to succeed against an EMT, the plaintiff must prove:", options: ["The EMT made a mistake", "All four elements: duty, breach, causation, and damages", "The patient was harmed during transport", "The EMT violated a protocol"], answer: 1, explanation: "All four elements must be proven. A mistake alone isn't negligence if it didn't cause harm, or if there was no duty established." },
  ]
};

// âââ MODULE 0 QUIZ âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
const L6 = {
  moduleId: 0, id: 6,
  title: "Module Quiz",
  subtitle: "Cumulative assessment â everything from Foundation",
  duration: "15 min",
  dispatch: {
    call: `"All units, this is a training assessment. You are about to be evaluated on Module 0: Foundation. This covers EMS systems, anatomy, medical terminology, body systems, and legal/ethical principles."`,
    time: "NOW", eta: "Your call",
    hook: "Five lessons. Everything you've learned in Foundation. Let's find out what stuck â and what needs more work.",
    bridge: "This isn't just a test. It's a map. What you get right tells you what's locked in. What you miss tells you exactly where to go back. Both are useful. Let's go."
  },
  content: [
    {
      heading: "What This Quiz Covers",
      body: "This module quiz pulls from all five Foundation lessons:\n\nâ¢ **Lesson 1** â What is EMS? (system levels, scope, medical direction)\nâ¢ **Lesson 2** â The Human Body (anatomical terms, body systems, cavities)\nâ¢ **Lesson 3** â Medical Terminology (roots, prefixes, suffixes)\nâ¢ **Lesson 4** â Anatomy Basics (skeleton, spine, organs, landmarks)\nâ¢ **Lesson 5** â Legal & Ethics (consent, refusal, negligence, DNR, HIPAA)\n\nYou'll get 10 questions drawn randomly from across all five lessons. Use the AI Tutor after to work on any gaps."
    }
  ],
  flashcards: [
    { front: "What are the 4 levels of EMS certification?", back: "EMR â EMT â AEMT â Paramedic" },
    { front: "What does 'tachy-' mean?", back: "Fast. Tachycardia = fast heart rate. Tachypnea = fast breathing." },
    { front: "What is anatomical position?", back: "Standing upright, facing forward, arms at sides, palms forward." },
    { front: "What are the 4 elements of negligence?", back: "Duty, Breach, Causation, Damages â all four must be proven." },
    { front: "What does the xiphoid process mark?", back: "The bottom tip of the sternum. CPR compressions go just above it." },
    { front: "What is implied consent?", back: "Legal assumption that an unconscious patient would want life-saving treatment." },
    { front: "What does 'hypo-' mean?", back: "Below normal or deficient. Hypoglycemia = low blood sugar." },
    { front: "What are the four abdominal quadrants?", back: "RUQ, LUQ, RLQ, LLQ â divided at the umbilicus." },
    { front: "What is scope of practice?", back: "The specific skills and interventions an EMT is legally authorized to perform." },
    { front: "What does '-itis' mean?", back: "Inflammation. Appendicitis, bronchitis, hepatitis." },
    { front: "What is the antecubital fossa?", back: "Inside of the elbow â most common IV site and BP measurement point." },
    { front: "What is a DNR?", back: "Do Not Resuscitate â a legal document directing EMTs not to perform resuscitation." },
    { front: "What does 'dyspnea' mean?", back: "Difficulty breathing. Dys- (difficult) + -pnea (breathing)." },
    { front: "What is the diaphragm?", back: "Muscle separating thoracic and abdominal cavities â primary breathing muscle." },
    { front: "What is offline medical direction?", back: "Pre-written protocols and standing orders that guide EMT actions." },
    { front: "What does A&Ox4 mean?", back: "Alert and oriented to person, place, time, and event â required for valid refusal." },
  ],
  quiz: [
    // EMS System
    { q: "Which EMS level can start IV lines and give limited medications?", options: ["EMT", "EMR", "AEMT", "Dispatcher"], answer: 2, explanation: "AEMTs have expanded scope beyond basic EMT including IV access and a limited medication list." },
    { q: "Real-time physician orders given via radio during a call are called:", options: ["Offline medical direction", "Standing orders", "Online medical direction", "Protocol override"], answer: 2, explanation: "Online medical direction = live, real-time orders from a physician. Offline = pre-written protocols." },
    { q: "Scene safety is the FIRST priority because:", options: ["Protocols require it", "An injured EMT cannot help anyone", "The hospital requires documentation", "Dispatch always confirms it first"], answer: 1, explanation: "If you become a patient, you help no one. Scene safety before patient contact â always." },
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
    { q: "A 70-year-old unconscious patient with no ID or family present. You should:", options: ["Wait for family consent before treating", "Call medical direction and wait", "Treat under implied consent", "Document and leave â no consent available"], answer: 2, explanation: "Implied consent covers unconscious patients. The law assumes they would want life-saving care. Treat immediately." },
    { q: "Dispatch says: 'Patient is diaphoretic with dyspnea and tachycardia.' You prepare for:", options: ["A broken bone", "A patient who is sweating, has difficulty breathing, and a fast heart rate", "A patient who is confused and combative", "A patient with abdominal pain"], answer: 1, explanation: "Diaphoretic = sweating. Dyspnea = difficulty breathing. Tachycardia = fast heart rate. Classic signs of a serious cardiac or respiratory emergency." },
    { q: "The antecubital fossa is important in EMS because:", options: ["It marks the bottom of the sternum for CPR", "It is where you take a BP and the most common IV site", "It separates the thoracic and abdominal cavities", "It is where the femoral artery runs"], answer: 1, explanation: "The antecubital fossa (inner elbow crease) is where you auscultate for blood pressure and the primary site for IV access." },
    { q: "For a patient refusal to be legally valid, the patient must be:", options: ["Accompanied by a family member", "18+, alert and oriented (A&Ox4), and informed of the risks", "Pain-free and ambulatory", "Cleared by medical direction"], answer: 1, explanation: "Valid refusal requires: adult (18+), alert and oriented to person/place/time/event, and informed of consequences of refusing." },
    { q: "A patient has 'bilateral' arm weakness after a head injury. Bilateral means:", options: ["Severe weakness", "Weakness on one side", "Weakness on both sides", "Weakness that comes and goes"], answer: 2, explanation: "Bi- = two. Bilateral = both sides. This is a significant finding after head trauma suggesting possible spinal cord involvement." },
  ]
};

// âââ MODULE 1 â AIRWAY, LESSON 1 âââââââââââââââââââââââââââââââââââââââââââââ
const M1L1 = {
  moduleId: 1, id: 1,
  title: "Respiratory Anatomy",
  subtitle: "The airway from nose to alveoli â and why every millimeter matters",
  duration: "12 min",
  dispatch: {
    call: `"Unit 2, respond to 1847 Elmwood Avenue â 6-year-old male, found unresponsive by mother, possible choking incident."`,
    time: "8:14 PM", eta: "3 minutes",
    hook: "A child. Unresponsive. Possible airway obstruction. You have 3 minutes and everything you do in the next 10 minutes depends on understanding exactly how air gets in â and what stops it.",
    bridge: "The airway is the first thing you assess on every single patient. Not the second thing. Not after vitals. First. Because without a patent airway, nothing else matters. This lesson gives you the map."
  },
  content: [
    {
      heading: "The Upper Airway",
      body: "The upper airway runs from the nose and mouth down to the larynx:\n\nâ¢ **Nose/Mouth** â Air enters here. The nose filters, warms, and humidifies air. In emergencies, the mouth provides a larger opening.\nâ¢ **Nasopharynx** â Behind the nose. A nasopharyngeal airway (NPA) sits here.\nâ¢ **Oropharynx** â Behind the mouth. An oropharyngeal airway (OPA) sits here.\nâ¢ **Epiglottis** â A leaf-shaped flap that covers the trachea during swallowing. Critical structure â it's what prevents food from entering the lungs.\nâ¢ **Larynx (voice box)** â Where the airway and digestive tract diverge. Contains the vocal cords.\nâ¢ **Glottis** â The opening between the vocal cords. This is what you're targeting when managing an airway."
    },
    {
      heading: "The Lower Airway",
      body: "Below the larynx, air moves through:\n\nâ¢ **Trachea (windpipe)** â About 4-5 inches long, reinforced by C-shaped cartilage rings. Runs down the midline of the neck and chest.\nâ¢ **Carina** â Where the trachea splits into left and right mainstem bronchi. An important landmark â tubes placed too far go into the right mainstem (it's straighter and wider).\nâ¢ **Bronchi** â Left and right mainstem bronchi deliver air to each lung.\nâ¢ **Bronchioles** â Smaller branches within each lung.\nâ¢ **Alveoli** â Tiny air sacs at the end of the bronchioles where gas exchange actually happens. 300 million of them in adult lungs. Oxygen in, COâ out."
    },
    {
      heading: "Gas Exchange: The Whole Point",
      body: "Everything in the respiratory system exists to make gas exchange happen at the alveoli:\n\n1. You breathe in â air travels to alveoli\n2. Oxygen crosses the thin alveolar wall into surrounding capillaries\n3. COâ crosses from capillaries into the alveoli\n4. You breathe out â COâ leaves\n\n**Tidal volume** â The amount of air moved in one normal breath (~500 mL in an adult).\n**Minute volume** â Tidal volume Ã respiratory rate. This is how much air moves through the lungs per minute.\n\nWhen the airway is compromised, gas exchange fails. When gas exchange fails, cells die. Brain cells start dying within 4-6 minutes of oxygen deprivation."
    },
    {
      heading: "Pediatric Airways: Different Rules",
      body: "Children are not small adults when it comes to airways:\n\nâ¢ **Larger tongue relative to airway** â More likely to obstruct.\nâ¢ **Narrowest point is the cricoid cartilage** (subglottic), not the glottis â foreign bodies can wedge here.\nâ¢ **Softer, more pliable trachea** â Can collapse with hyperextension. Use a neutral or sniffing position, not full extension.\nâ¢ **Higher respiratory rate** â Normal infant rate is 30-60 breaths/min. A child breathing at 12 is in trouble.\nâ¢ **Faster decompensation** â Children compensate well until they don't. When they crash, they crash fast.\n\nAlways size your airway adjuncts to the patient."
    },
    {
      heading: "Airway Sounds and What They Tell You",
      body: "Your ears are assessment tools:\n\nâ¢ **Snoring** â Partial upper airway obstruction, usually the tongue. Fix: head-tilt chin-lift or jaw thrust.\nâ¢ **Stridor** â High-pitched sound on inhalation. Partial upper airway obstruction, often at the larynx. Think croup, epiglottitis, foreign body.\nâ¢ **Wheezing** â Musical lower airway sound, usually on exhalation. Bronchospasm â think asthma, COPD, allergic reaction.\nâ¢ **Gurgling** â Fluid in the airway (blood, secretions, vomit). Suction immediately.\nâ¢ **Silent chest** â No air movement at all in a patient in respiratory distress. Critical â complete obstruction or severe bronchospasm.\n\nNo sound from a patient in distress is one of the most dangerous findings in EMS."
    }
  ],
  flashcards: [
    { front: "What is the epiglottis?", back: "A leaf-shaped flap that covers the trachea during swallowing, preventing food/liquid from entering the lungs." },
    { front: "What is the carina?", back: "Where the trachea splits into the left and right mainstem bronchi." },
    { front: "Where does gas exchange occur?", back: "At the alveoli â tiny air sacs at the end of the bronchioles. Oxygen in, COâ out." },
    { front: "What is tidal volume?", back: "The amount of air moved in one normal breath â approximately 500 mL in an adult." },
    { front: "What is the glottis?", back: "The opening between the vocal cords â the target when managing an advanced airway." },
    { front: "What does snoring respirations indicate?", back: "Partial upper airway obstruction, usually the tongue. Needs airway repositioning." },
    { front: "What does stridor indicate?", back: "Partial upper airway obstruction at or near the larynx â high-pitched sound on inhalation." },
    { front: "What does gurgling indicate?", back: "Fluid in the airway (blood, secretions, vomit). Suction immediately." },
    { front: "What does a silent chest mean in a patient in distress?", back: "Complete airway obstruction or severe bronchospasm â critical emergency." },
    { front: "Why is the pediatric airway different?", back: "Larger tongue, softer trachea, narrowest point at cricoid (not glottis), faster decompensation." },
    { front: "What is minute volume?", back: "Tidal volume Ã respiratory rate â total air moved through the lungs per minute." },
    { front: "What is the nasopharynx?", back: "The airway space behind the nose â where an NPA (nasopharyngeal airway) is placed." },
    { front: "What is the oropharynx?", back: "The airway space behind the mouth â where an OPA (oropharyngeal airway) is placed." },
    { front: "How soon do brain cells begin to die without oxygen?", back: "Within 4-6 minutes of oxygen deprivation." },
    { front: "Why might an ET tube go into the right mainstem bronchus?", back: "The right mainstem bronchus is straighter and wider â tubes placed too far will preferentially enter it." },
    { front: "What is wheezing?", back: "A musical lower airway sound on exhalation â indicates bronchospasm (asthma, COPD, allergic reaction)." },
  ],
  quiz: [
    { q: "Where does oxygen actually cross into the bloodstream?", options: ["Trachea", "Bronchi", "Alveoli", "Larynx"], answer: 2, explanation: "Gas exchange happens at the alveoli â 300 million tiny air sacs where Oâ crosses into capillaries and COâ crosses out." },
    { q: "A patient has loud snoring respirations. The MOST likely cause is:", options: ["Fluid in the airway", "Bronchospasm", "The tongue obstructing the upper airway", "A foreign body in the trachea"], answer: 2, explanation: "Snoring = partial upper airway obstruction, almost always the tongue falling back. Fix with head-tilt chin-lift or jaw thrust." },
    { q: "You intubate a patient and hear breath sounds only on the right side. What happened?", options: ["The tube is in the esophagus", "Right-sided pneumothorax", "The tube went into the right mainstem bronchus", "The patient has asthma"], answer: 2, explanation: "The right mainstem bronchus is straighter and wider. A tube placed too far bypasses the carina and only ventilates the right lung. Pull back and reassess." },
    { q: "Stridor in a patient in respiratory distress indicates:", options: ["Lower airway bronchospasm", "Fluid in the lungs", "Partial upper airway obstruction near the larynx", "Complete airway obstruction"], answer: 2, explanation: "Stridor is a high-pitched inspiratory sound caused by partial obstruction at or near the larynx â croup, epiglottitis, foreign body, allergic swelling." },
    { q: "A child's airway is different from an adult's because:", options: ["Children breathe slower than adults", "The narrowest point is at the glottis, not the cricoid", "The tongue is smaller relative to the airway", "They decompensate faster and have softer tracheas"], answer: 3, explanation: "Pediatric airways have larger tongues relative to the space, softer tracheas, narrowest point at the cricoid, and children decompensate rapidly once they start to fail." },
    { q: "What is tidal volume?", options: ["Total lung capacity", "Air moved in one normal breath (~500mL in adults)", "Air remaining after maximum exhalation", "Respiratory rate per minute"], answer: 1, explanation: "Tidal volume is the amount of air in a single normal breath â roughly 500 mL in an adult at rest." },
    { q: "A patient in severe respiratory distress has a completely silent chest. This means:", options: ["The patient is breathing normally", "There is complete airway obstruction or severe bronchospasm â critical", "The patient is unconscious and not breathing", "Breath sounds are just hard to hear"], answer: 1, explanation: "A silent chest in a patient in distress means no air is moving. This is one of the most dangerous findings in EMS â complete obstruction or severe bronchospasm." },
    { q: "The epiglottis serves what function?", options: ["Produces vocal sounds", "Divides the trachea into bronchi", "Covers the trachea during swallowing to prevent aspiration", "Warms and filters incoming air"], answer: 2, explanation: "The epiglottis is a flap that snaps down over the trachea when you swallow, routing food and liquid to the esophagus, not the lungs." },
    { q: "Gurgling sounds in a patient's airway indicate:", options: ["Bronchospasm â give a bronchodilator", "Fluid in the airway â suction immediately", "Normal secretions â no action needed", "Partial obstruction â reposition the airway"], answer: 1, explanation: "Gurgling = fluid (blood, secretions, vomit) in the upper airway. Your immediate action is suctioning before it's aspirated into the lungs." },
    { q: "Brain cells begin to die without oxygen after approximately:", options: ["1-2 minutes", "4-6 minutes", "8-10 minutes", "15-20 minutes"], answer: 1, explanation: "Brain cells start dying within 4-6 minutes of oxygen deprivation. This is why airway management is always the first priority." },
    { q: "The carina is:", options: ["The opening between the vocal cords", "The point where the trachea splits into left and right bronchi", "The bottom of the epiglottis", "The narrowest part of a child's airway"], answer: 1, explanation: "The carina is where the trachea bifurcates into the left and right mainstem bronchi. Tubes placed past the carina go into the right bronchus." },
    { q: "Wheezing on exhalation most likely indicates:", options: ["Upper airway obstruction", "Fluid in the alveoli", "Bronchospasm in the lower airways", "A foreign body in the trachea"], answer: 2, explanation: "Wheezing is a musical expiratory sound from bronchospasm â narrowed lower airways. Think asthma, COPD, anaphylaxis." },
    { q: "When managing a pediatric airway, you should:", options: ["Fully hyperextend the neck like an adult", "Use a neutral or sniffing position â avoid hyperextension", "Always use an adult-sized OPA", "Avoid any airway adjuncts under age 5"], answer: 1, explanation: "Pediatric tracheas are soft and can kink with hyperextension. Use a neutral or gentle sniffing position to keep the airway open." },
    { q: "Minute volume is calculated as:", options: ["Tidal volume Ã· respiratory rate", "Tidal volume Ã respiratory rate", "Respiratory rate Ã· tidal volume", "Tidal volume + dead space"], answer: 1, explanation: "Minute volume = tidal volume Ã respiratory rate. It tells you the total amount of air moving through the lungs each minute." },
    { q: "The nasopharyngeal airway (NPA) is placed:", options: ["In the trachea", "Between the vocal cords", "Through the nose into the nasopharynx", "In the oropharynx behind the tongue"], answer: 2, explanation: "An NPA is a soft rubber tube placed through the nostril into the nasopharynx. It's better tolerated than an OPA in semi-conscious patients." },
  ]
};

// âââ MODULE 1 â AIRWAY, LESSON 2 âââââââââââââââââââââââââââââââââââââââââââââ
const M1L2 = {
  moduleId: 1, id: 2,
  title: "Patient Assessment: Airway",
  subtitle: "How to assess breathing â look, listen, feel, and what it all means",
  duration: "10 min",
  dispatch: {
    call: `"Unit 4, respond to 552 Harbor Blvd â 67-year-old male, found slumped in chair by wife, breathing but unresponsive."`,
    time: "9:22 AM", eta: "5 minutes",
    hook: "He's breathing. But is he breathing well enough? There's a massive difference between 'has a pulse and is breathing' and 'is ventilating adequately.' Your job in the next 60 seconds is to figure out which one this is.",
    bridge: "Airway assessment isn't a checkbox â it's a sequence of questions you answer with your eyes, ears, and hands. This lesson teaches you exactly what to look for and what it means."
  },
  content: [
    {
      heading: "The Sequence: Look, Listen, Feel",
      body: "Every airway assessment follows the same sequence:\n\n**Look** â Is the chest rising and falling? Symmetrically? Are there signs of distress â nasal flaring, retractions (skin pulling in between ribs), accessory muscle use?\n\n**Listen** â Open your ears before your stethoscope. Snoring, stridor, gurgling, wheezing â all tell you something. Listen at the mouth and nose for air movement. Then auscultate.\n\n**Feel** â Hold your hand near the patient's mouth and nose. Do you feel air movement? Is it warm? Any abnormal sounds you can feel?\n\nThis takes about 10 seconds when you're trained. Practice until it's automatic."
    },
    {
      heading: "Respiratory Rate and Quality",
      body: "Count respirations for 30 seconds and multiply by 2. Normal ranges:\n\nâ¢ **Adult:** 12â20 breaths/min\nâ¢ **Child (1-12):** 15â30 breaths/min\nâ¢ **Infant (<1 year):** 25â50 breaths/min\n\nBut rate alone isn't enough. Assess **quality**:\n\nâ¢ **Depth** â Are breaths shallow (barely moving) or deep?\nâ¢ **Effort** â Is breathing labored? Using neck/shoulder muscles?\nâ¢ **Regularity** â Regular rhythm or irregular?\nâ¢ **Symmetry** â Both sides of the chest rising equally?\n\nA patient breathing 22 times per minute with full, easy breaths is fine. A patient breathing 22 times with shallow, labored, asymmetric breaths is in serious trouble."
    },
    {
      heading: "Signs of Adequate vs Inadequate Breathing",
      body: "**Adequate breathing:**\nâ¢ Rate within normal range\nâ¢ Regular rhythm\nâ¢ Equal chest rise bilaterally\nâ¢ Pink, warm, dry skin\nâ¢ Speaking in full sentences\nâ¢ SpOâ â¥ 94%\n\n**Inadequate breathing â intervene now:**\nâ¢ Rate too fast (>30 adult) or too slow (<8 adult)\nâ¢ Shallow, barely visible chest rise\nâ¢ Asymmetric chest movement\nâ¢ Cyanosis (blue lips, fingertips)\nâ¢ Altered mental status\nâ¢ Accessory muscle use\nâ¢ Speaking only in single words or unable to speak\nâ¢ SpOâ < 94%\n\nInadequate breathing = you take over. Adequate breathing = support with oxygen."
    },
    {
      heading: "Pulse Oximetry (SpOâ)",
      body: "The pulse ox clips to a finger and measures oxygen saturation â the percentage of hemoglobin carrying oxygen.\n\n**Normal:** 94-100%\n**Concerning:** 90-93% â supplement oxygen, monitor closely\n**Critical:** <90% â immediate intervention\n\n**Limitations you must know:**\nâ¢ **Carbon monoxide poisoning** â SpOâ reads falsely normal. CO binds hemoglobin just like oxygen. A CO patient can read 100% while dying.\nâ¢ **Poor perfusion** â Cold fingers, shock, poor circulation give unreliable readings.\nâ¢ **Nail polish** â Dark polish blocks the sensor. Remove or use a different site.\nâ¢ **Motion** â Movement causes artifact.\n\nTreat the patient, not the number. If they look bad, they are bad â even with a good SpOâ."
    },
    {
      heading: "Positioning for Airway",
      body: "Position is your first intervention for airway problems:\n\nâ¢ **Head-tilt chin-lift** â Standard maneuver for unconscious patients with no suspected spinal injury. Tilt head back, lift chin forward. Opens the airway by moving the tongue off the posterior pharynx.\n\nâ¢ **Jaw thrust** â For patients with suspected spinal injury. Grip the angles of the jaw and thrust forward without moving the head or neck.\n\nâ¢ **Recovery position** â For unconscious patients who are breathing adequately. Roll to their side so secretions drain out rather than into the airway.\n\nâ¢ **Sniffing position** â For pediatric patients. Slight forward head tilt, like sniffing a flower. Aligns the airway axes.\n\nâ¢ **Sitting up / tripod position** â Patients in respiratory distress naturally assume this. Don't force them supine â you'll make it worse."
    }
  ],
  flashcards: [
    { front: "What is the normal adult respiratory rate?", back: "12-20 breaths per minute" },
    { front: "What SpOâ level is considered critical?", back: "Below 90% â immediate intervention needed" },
    { front: "What is the head-tilt chin-lift used for?", back: "Opening the airway in unconscious patients without suspected spinal injury" },
    { front: "When do you use a jaw thrust instead of head-tilt chin-lift?", back: "When spinal injury is suspected â moves the jaw forward without moving the head/neck" },
    { front: "What does cyanosis look like and what does it mean?", back: "Blue/purple lips and fingertips â indicates severe hypoxia, oxygen not reaching tissues" },
    { front: "Why is SpOâ unreliable in CO poisoning?", back: "CO binds hemoglobin like oxygen â the monitor reads it as normal saturation even while the patient is dying" },
    { front: "What are retractions?", back: "Skin pulling in between ribs during breathing â sign of increased respiratory effort/distress" },
    { front: "What is the normal infant respiratory rate?", back: "25-50 breaths per minute" },
    { front: "What is the recovery position used for?", back: "Unconscious patients breathing adequately â rolled to their side so secretions drain out" },
    { front: "Name 3 signs of inadequate breathing in an adult", back: "Rate <8 or >30, cyanosis, shallow chest rise, SpOâ <94%, accessory muscle use, altered mental status" },
    { front: "What does accessory muscle use look like?", back: "Neck and shoulder muscles visibly working during breathing â sign of increased respiratory effort" },
    { front: "What is tidal volume?", back: "Amount of air in one normal breath â ~500mL in adults" },
    { front: "What is the sniffing position used for?", back: "Pediatric airway management â slight forward head tilt to align airway axes" },
    { front: "What SpOâ is normal?", back: "94-100%" },
    { front: "What does asymmetric chest rise suggest?", back: "One lung not ventilating â could be pneumothorax, hemothorax, or mainstem intubation" },
    { front: "What is the tripod position?", back: "Patient sitting up, leaning forward on hands â self-assumed position of respiratory distress, do not force supine" },
  ],
  quiz: [
    { q: "An adult patient is breathing 8 times per minute with shallow chest rise. You should:", options: ["Monitor and apply oxygen", "Begin assisted ventilations with BVM", "Place in recovery position", "Obtain a pulse ox reading first"], answer: 1, explanation: "A rate of 8 with shallow breathing in an adult is inadequate. Take over ventilations with a BVM â don't wait for more assessment." },
    { q: "A patient's SpOâ reads 99% but you suspect carbon monoxide poisoning. You should:", options: ["Trust the reading â 99% is normal", "Remove the pulse ox â it's broken", "Treat for CO poisoning regardless â SpOâ is falsely normal in CO poisoning", "Give high-flow oxygen only if SpOâ drops"], answer: 2, explanation: "CO binds hemoglobin just like oxygen, so the pulse ox can't distinguish. A CO patient can read 100% while dying. Treat the mechanism, not the number." },
    { q: "You arrive to find an unconscious patient with possible spinal injury. To open the airway you should use:", options: ["Head-tilt chin-lift", "Jaw thrust", "Recovery position", "Hyperextension"], answer: 1, explanation: "Jaw thrust opens the airway by moving the mandible forward without moving the cervical spine â critical when spinal injury is suspected." },
    { q: "A patient in severe respiratory distress is sitting in the tripod position. You should:", options: ["Lay them flat for assessment", "Allow them to remain upright â this position maximizes breathing", "Apply a cervical collar", "Begin CPR"], answer: 1, explanation: "Tripod position (sitting, leaning forward on hands) is self-assumed by patients in severe distress because it maximizes diaphragm movement. Forcing them supine makes breathing worse." },
    { q: "Normal SpOâ range is:", options: ["85-90%", "90-93%", "94-100%", "100% only"], answer: 2, explanation: "Normal SpOâ is 94-100%. Below 94% warrants supplemental oxygen. Below 90% is critical and requires immediate intervention." },
    { q: "You count respirations for 30 seconds and get 6 breaths. The respiratory rate is:", options: ["6 per minute", "12 per minute", "18 per minute", "3 per minute"], answer: 1, explanation: "Count for 30 seconds and multiply by 2. 6 Ã 2 = 12 per minute â the low end of normal for an adult." },
    { q: "Skin pulling in between a child's ribs during breathing is called:", options: ["Cyanosis", "Retractions", "Accessory muscle use", "Paradoxical breathing"], answer: 1, explanation: "Retractions are the visible pulling in of skin between ribs â a sign the patient is working very hard to breathe. Significant in children." },
    { q: "An unconscious patient is breathing adequately. The best position is:", options: ["Supine with head elevated 30 degrees", "Recovery position â on their side", "Prone face down", "Sitting upright"], answer: 1, explanation: "Recovery position (lateral) allows secretions, vomit, and blood to drain away from the airway rather than being aspirated. Use when breathing is adequate and no spinal injury." },
    { q: "Which finding indicates ADEQUATE breathing?", options: ["Cyanosis of the lips", "Speaking in full sentences with SpOâ of 97%", "Respiratory rate of 32 in an adult", "Accessory muscle use at rest"], answer: 1, explanation: "Speaking in full sentences requires adequate air movement and gas exchange. SpOâ of 97% confirms good oxygenation. The other options are all signs of inadequate breathing." },
    { q: "You notice asymmetric chest rise after intubating a patient. Most likely cause:", options: ["The tube is in the esophagus", "The patient has asthma", "Right mainstem intubation â tube too far", "Normal variation"], answer: 2, explanation: "Asymmetric rise after intubation almost always means the tube went too far into the right mainstem bronchus, ventilating only the right lung. Pull back and reassess." },
    { q: "Nail polish can affect pulse oximetry by:", options: ["Causing falsely low readings", "Causing falsely high readings", "Blocking the sensor and giving inaccurate results", "Only affecting fingers â use an ear probe instead"], answer: 2, explanation: "Dark nail polish blocks the light sensor, causing unreliable or absent readings. Remove polish or use an alternative site like the earlobe." },
    { q: "A patient is breathing 26 times per minute with deep, equal chest rise and SpOâ of 96%. You should:", options: ["Begin assisted ventilations immediately", "Apply supplemental oxygen and monitor", "No intervention needed â this is adequate breathing", "Place in recovery position"], answer: 1, explanation: "Rate of 26 is slightly elevated but breathing is deep, symmetric, and SpOâ is good. Supplemental oxygen is appropriate while you investigate the cause of the elevated rate." },
    { q: "The jaw thrust maneuver is performed by:", options: ["Tilting the head back and lifting the chin", "Gripping the angles of the jaw and thrusting it forward without moving the head", "Inserting an OPA to hold the tongue forward", "Applying a cervical collar"], answer: 1, explanation: "Jaw thrust grips the posterior angles of the mandible and thrusts forward, displacing the tongue without requiring cervical spine movement." },
    { q: "What does SpOâ actually measure?", options: ["The amount of oxygen dissolved in plasma", "The percentage of hemoglobin carrying oxygen", "The respiratory rate indirectly", "Carbon dioxide levels in the blood"], answer: 1, explanation: "SpOâ measures oxygen saturation â what percentage of hemoglobin molecules are carrying oxygen. It does NOT measure dissolved Oâ or COâ." },
    { q: "An infant is breathing 55 times per minute. This is:", options: ["Normal â infant rate is 25-50", "Slightly elevated but acceptable", "Abnormal â tachypnea requiring assessment", "Normal â infants breathe faster than children"], answer: 2, explanation: "Normal infant rate is 25-50/min. A rate of 55 is tachypnea â abnormal and requires assessment. In infants, tachypnea often indicates respiratory distress or systemic illness." },
  ]
};

// âââ MODULE 1 â AIRWAY, LESSON 3 âââââââââââââââââââââââââââââââââââââââââââââ
const M1L3 = {
  moduleId: 1, id: 3,
  title: "Airway Adjuncts",
  subtitle: "OPA, NPA, suction â your basic airway toolkit and when to use each",
  duration: "10 min",
  dispatch: {
    call: `"Unit 8, respond to 29 Oak Street â 55-year-old female, seizure, now postictal, snoring respirations, vomit noted around mouth."`,
    time: "2:47 PM", eta: "4 minutes",
    hook: "Postictal, snoring, vomit visible. Three immediate airway threats in one patient. What do you reach for first, and in what order?",
    bridge: "Airway adjuncts are simple tools that make a huge difference. Knowing which one to grab, how to size it, and when NOT to use it separates a good airway manager from a dangerous one."
  },
  content: [
    {
      heading: "Suction: Always First",
      body: "If there's fluid in the airway â blood, vomit, secretions â suction before anything else. You cannot effectively manage an airway full of vomit.\n\n**Rigid (Yankauer) suction** â Hard plastic tip, best for oropharynx. Most common for vomit and thick secretions. Limit suction to 15 seconds in adults, 10 seconds in children.\n\n**Flexible catheter** â Soft, for deeper or narrower spaces. Used through an NPA or ET tube.\n\n**Key rules:**\nâ¢ Suction on the way OUT, not on the way in\nâ¢ Never lose sight of the tip\nâ¢ Watch SpOâ â stop if it drops significantly\nâ¢ Pre-oxygenate when possible before suctioning\nâ¢ If vomiting is ongoing â turn the patient to their side"
    },
    {
      heading: "Oropharyngeal Airway (OPA)",
      body: "The OPA is a curved plastic device that sits in the oropharynx and holds the tongue away from the posterior pharynx.\n\n**Use when:** Patient is unconscious with no gag reflex\n**Never use when:** Patient has a gag reflex â you will induce vomiting\n\n**Sizing:** Measure from the corner of the mouth to the earlobe. Or from the center of the mouth to the angle of the jaw.\n\n**Insertion (adult):** Insert upside down (curve pointing up toward palate), rotate 180Â° as you pass the tongue, seat in position.\n\n**Insertion (pediatric):** Insert right-side up using a tongue depressor â do NOT rotate in children, you can damage soft tissue.\n\nAn OPA does NOT protect the airway from aspiration â it just keeps it open."
    },
    {
      heading: "Nasopharyngeal Airway (NPA)",
      body: "The NPA is a soft rubber tube inserted through the nostril into the nasopharynx.\n\n**Use when:** Patient needs airway support but has a gag reflex, clenched teeth, or you can't use an OPA\n**Avoid when:** Suspected skull base fracture (fluid from ears/nose, raccoon eyes, Battle's sign) â you risk inserting into the cranial vault\n\n**Sizing:** Diameter â as wide as the patient's pinky finger. Length â from the nostril to the earlobe.\n\n**Insertion:** Lubricate generously. Insert with the bevel toward the septum (midline). Advance gently â if resistance, try the other nostril. Never force it.\n\nNPAs are better tolerated in semi-conscious patients and won't trigger vomiting the way an OPA can."
    },
    {
      heading: "Bag-Valve Mask (BVM)",
      body: "The BVM is your most important piece of airway equipment. It delivers positive pressure ventilation â pushing air into the lungs when the patient can't do it themselves.\n\n**Components:** Self-inflating bag + one-way valve + mask + oxygen reservoir\n\n**One-person BVM:** EC clamp technique â middle, ring, pinky fingers grip the jaw (E), thumb and index form a C over the mask. Tilt head, seal mask, squeeze bag with your other hand.\n\n**Two-person BVM:** One provider holds the mask with both hands (both thumbs on top, fingers gripping jaw), second provider squeezes the bag. Better seal, better ventilation. Use two-person whenever possible.\n\n**Ventilation rate:**\nâ¢ Adults: 1 breath every 5-6 seconds (10-12/min)\nâ¢ Children: 1 breath every 3-5 seconds (12-20/min)\n\nCommon mistake: squeezing too hard and too fast. Give just enough volume to see chest rise. Over-ventilation causes gastric distension and reduces venous return."
    },
    {
      heading: "Putting It Together: The Airway Priority Order",
      body: "When you walk up to an airway problem, this is your sequence:\n\n1. **Position** â Open the airway manually (head-tilt chin-lift or jaw thrust)\n2. **Suction** â Clear anything in the way\n3. **Adjunct** â OPA or NPA to maintain the opening\n4. **Oxygen** â Nonrebreather mask if breathing adequately\n5. **BVM** â If breathing is inadequate or absent\n6. **Advanced airway** â Intubation, supraglottic device (paramedic level)\n\nYou don't always need all six steps. A patient who just needs their airway repositioned and an OPA placed doesn't need a BVM. Match your intervention to the problem."
    }
  ],
  flashcards: [
    { front: "What does OPA stand for and what does it do?", back: "Oropharyngeal Airway â holds the tongue away from the posterior pharynx in unconscious patients" },
    { front: "When should you NEVER use an OPA?", back: "When the patient has a gag reflex â you will induce vomiting and aspiration" },
    { front: "How do you size an OPA?", back: "Corner of the mouth to the earlobe, or center of mouth to angle of jaw" },
    { front: "What does NPA stand for and when is it preferred over OPA?", back: "Nasopharyngeal Airway â preferred when patient has a gag reflex, clenched teeth, or is semi-conscious" },
    { front: "When should you avoid an NPA?", back: "Suspected skull base fracture â signs: blood/fluid from ears or nose, raccoon eyes, Battle's sign" },
    { front: "How do you size an NPA?", back: "Diameter = patient's pinky finger width. Length = nostril to earlobe." },
    { front: "What is the Yankauer?", back: "A rigid suction catheter used to suction the oropharynx â best for vomit and thick secretions" },
    { front: "What is the EC clamp technique?", back: "One-person BVM mask hold: E = middle/ring/pinky grip jaw, C = thumb/index seal mask" },
    { front: "Adult BVM ventilation rate?", back: "One breath every 5-6 seconds (10-12 per minute)" },
    { front: "What is Battle's sign?", back: "Bruising behind the ear â sign of basilar skull fracture. Contraindication to NPA." },
    { front: "How long should you suction at one time (adult)?", back: "Maximum 15 seconds â watch SpOâ and stop if it drops" },
    { front: "What are raccoon eyes a sign of?", back: "Periorbital bruising suggesting basilar skull fracture â contraindication to NPA" },
    { front: "What is the adult OPA insertion technique?", back: "Insert upside down (curve up), rotate 180Â° as you pass the tongue, seat in oropharynx" },
    { front: "Why can over-ventilation with BVM be harmful?", back: "Causes gastric distension and reduces venous return â give just enough to see chest rise" },
    { front: "What is the airway priority sequence?", back: "Position â Suction â Adjunct (OPA/NPA) â Oxygen â BVM â Advanced airway" },
    { front: "What is the pediatric OPA insertion technique?", back: "Insert right-side up using a tongue depressor â do NOT rotate (can damage soft tissue)" },
  ],
  quiz: [
    { q: "A 45-year-old is unconscious after a seizure with no gag reflex and vomit in the mouth. Your FIRST action is:", options: ["Insert an OPA", "Begin BVM ventilations", "Suction the oropharynx", "Apply a nonrebreather mask"], answer: 2, explanation: "Suction first â always. You cannot manage an airway full of vomit. Clear it, then proceed to adjunct and oxygenation." },
    { q: "You attempt to insert an OPA and the patient gags violently. You should:", options: ["Push it through quickly â gagging will stop", "Remove the OPA and consider an NPA instead", "Use a smaller OPA size", "Place the patient in Trendelenburg position"], answer: 1, explanation: "A gag reflex is an absolute contraindication to OPA. Remove immediately to prevent vomiting. Consider an NPA which is better tolerated in conscious/semi-conscious patients." },
    { q: "You suspect a basilar skull fracture. The patient needs airway support but has a gag reflex. You should:", options: ["Insert an NPA â it's always safe", "Insert an OPA â gag reflex doesn't matter in emergencies", "Use BVM with mask seal only â NPA is contraindicated", "Delay airway management until CT scan"], answer: 2, explanation: "Basilar skull fracture is a contraindication to NPA â risk of inserting into the cranial vault. Manage the airway with positioning and BVM without an adjunct if possible." },
    { q: "How do you size an OPA?", options: ["From the nose to the earlobe", "From the corner of the mouth to the earlobe", "Same size as the patient's thumb", "Use the largest one that fits"], answer: 1, explanation: "OPA sizing: corner of the mouth to the earlobe. Too small won't lift the tongue; too large can push the epiglottis down." },
    { q: "Two-person BVM ventilation is preferred over one-person because:", options: ["It delivers oxygen faster", "One provider can focus on mask seal while the other squeezes the bag â better seal and ventilation", "It uses less oxygen", "It's required by protocol"], answer: 1, explanation: "Maintaining a perfect mask seal with one hand while squeezing the bag with the other is genuinely difficult. Two-person technique provides a much better seal and more reliable ventilation." },
    { q: "The correct adult BVM ventilation rate is:", options: ["1 breath every 2-3 seconds", "1 breath every 5-6 seconds", "1 breath every 10 seconds", "As fast as possible"], answer: 1, explanation: "Adult ventilation rate: 1 breath every 5-6 seconds (10-12/min). Over-ventilation is a common mistake that causes gastric distension and reduces cardiac output." },
    { q: "Battle's sign is:", options: ["Bruising around both eyes", "Bruising behind the ear", "Blood from the nose", "A midline skull deformity"], answer: 1, explanation: "Battle's sign is ecchymosis (bruising) behind the ear over the mastoid process â a delayed sign of basilar skull fracture. Contraindicates NPA insertion." },
    { q: "When inserting an NPA you meet resistance in one nostril. You should:", options: ["Push harder â resistance is normal", "Remove and try the other nostril", "Use a larger NPA", "Abandon the NPA and use an OPA"], answer: 1, explanation: "Never force an NPA. If you meet resistance, gently remove and try the other nostril. Forcing can cause significant bleeding." },
    { q: "What is the maximum suction time for an adult patient?", options: ["5 seconds", "15 seconds", "30 seconds", "60 seconds"], answer: 1, explanation: "Suction for a maximum of 15 seconds in adults (10 seconds in children). Each second of suctioning also removes oxygen â monitor SpOâ and pre-oxygenate when possible." },
    { q: "You're squeezing the BVM and the patient's abdomen is rising more than the chest. This means:", options: ["Ventilation is working correctly", "Air is going into the stomach â adjust mask seal and head position", "The patient needs a larger mask", "Chest compressions should be started"], answer: 1, explanation: "Abdominal rise means air is entering the stomach (gastric insufflation), not the lungs. Recheck mask seal, head position, and ventilation pressure. Over-vigorous BVM use causes this." },
    { q: "For a pediatric patient, OPA insertion differs from adults because:", options: ["You use a smaller bag-valve mask", "You insert it right-side up using a tongue depressor â never rotate", "The sizing method is different", "You always use NPA instead"], answer: 1, explanation: "In children, the OPA is inserted right-side up (curve pointing down) using a tongue depressor to displace the tongue. Rotating in children can damage the soft palate." },
    { q: "A patient has a gag reflex and clenched teeth. Which airway adjunct is most appropriate?", options: ["OPA â it will fit despite clenched teeth", "NPA â can be placed despite clenched teeth and tolerates gag reflex", "Neither â wait for them to relax", "Intubation is the only option"], answer: 1, explanation: "NPA is the adjunct of choice when the patient has a gag reflex or clenched jaw â it's inserted nasally and doesn't require opening the mouth." },
    { q: "The OPA is inserted upside down in adults and then rotated 180Â°. The purpose of this technique is:", options: ["To avoid the teeth", "To navigate around the tongue without pushing it back into the airway", "Because the curve faces the wrong direction naturally", "To test for a gag reflex"], answer: 1, explanation: "Inserting the OPA upside down and rotating allows you to navigate past the tongue without using it as a ramp, which would push it into the airway. Once past the tongue, the curve guides it into position." },
    { q: "Which statement about the OPA is TRUE?", options: ["It protects against aspiration", "It replaces the need for suction", "It maintains airway patency but does NOT prevent aspiration", "It can be used in any patient regardless of consciousness"], answer: 2, explanation: "The OPA holds the tongue forward and keeps the airway open â it does NOT protect against aspiration. You still need to monitor for vomiting and have suction ready." },
    { q: "The oxygen reservoir bag on a BVM serves what purpose?", options: ["Stores medication for nebulization", "Collects exhaled COâ", "Accumulates oxygen between breaths to deliver higher FiOâ", "Provides a backup air supply if oxygen runs out"], answer: 2, explanation: "The reservoir bag accumulates oxygen from the flow source between breaths. This allows delivery of near 100% oxygen (vs ~21% room air) when connected to high-flow Oâ." },
  ]
};

// âââ MODULE 1 â AIRWAY, LESSON 4 âââââââââââââââââââââââââââââââââââââââââââââ
const M1L4 = {
  moduleId: 1, id: 4,
  title: "Oxygen Delivery",
  subtitle: "Oxygen devices, flow rates, and when to use what â matching the tool to the patient",
  duration: "9 min",
  dispatch: {
    call: `"Unit 6, respond to 4411 Ridgeline Drive â 72-year-old female, history of COPD, shortness of breath for 2 hours, speaking in 2-3 word sentences."`,
    time: "11:05 AM", eta: "6 minutes",
    hook: "COPD patient, 2-3 word sentences. You know she needs oxygen. But how much? The wrong answer could actually make her worse. This is one of EMS's most misunderstood topics.",
    bridge: "Oxygen is a drug. Like every drug, it has indications, contraindications, dosing, and side effects. This lesson teaches you to match the device to the patient â not just grab whatever's closest."
  },
  content: [
    {
      heading: "Oxygen as a Drug",
      body: "Oxygen has a therapeutic window â too little is dangerous, but so is too much in certain patients.\n\n**FiOâ** (Fraction of Inspired Oxygen) â the percentage of oxygen delivered. Room air is 21%. A nonrebreather mask can deliver up to 90-100%.\n\nYour goal in most patients: maintain SpOâ â¥ 94%. In STEMI and stroke patients: maintain SpOâ â¥ 94% but avoid hyperoxia (too much oxygen can cause vasoconstriction).\n\n**The COPD caveat:** Some COPD patients have chronically high COâ and may rely on hypoxic drive to breathe. Flooding them with high-flow oxygen can potentially suppress their drive to breathe. Don't withhold oxygen from a hypoxic COPD patient â but target SpOâ of 88-92% rather than 100%, and monitor closely."
    },
    {
      heading: "Nasal Cannula",
      body: "**What it is:** Two small prongs that sit in the nostrils. Delivers low-flow oxygen.\n\n**Flow rate:** 1-6 L/min\n**FiOâ delivered:** ~24-44% (roughly, add 4% per liter above room air)\n\n**Use when:**\nâ¢ Patient needs mild supplemental oxygen\nâ¢ SpOâ is 90-93% and patient is stable\nâ¢ Patient is speaking and breathing adequately\nâ¢ Patient cannot tolerate a mask\n\n**Limitations:**\nâ¢ Ineffective if patient is mouth breathing\nâ¢ Maximum useful flow is 6 L/min â beyond that, use a mask\nâ¢ Does not protect against aspiration"
    },
    {
      heading: "Nonrebreather Mask (NRB)",
      body: "**What it is:** A mask with a one-way valve and oxygen reservoir bag. Prevents exhaled air from re-entering the bag.\n\n**Flow rate:** 10-15 L/min\n**FiOâ delivered:** 60-90% (reservoir bag must be inflated before placing on patient)\n\n**Use when:**\nâ¢ Patient needs high-flow oxygen\nâ¢ SpOâ < 94% despite nasal cannula\nâ¢ Suspected CO poisoning â always high flow regardless of SpOâ\nâ¢ Chest pain, stroke, severe respiratory distress\nâ¢ Any seriously ill patient\n\n**Key step:** Inflate the reservoir bag BEFORE applying the mask â press your finger over the one-way valve until the bag fills. An empty reservoir bag delivers room air, not oxygen."
    },
    {
      heading: "Simple Face Mask and Partial Rebreather",
      body: "**Simple face mask:**\nâ¢ Flow rate: 6-10 L/min\nâ¢ FiOâ: ~35-60%\nâ¢ Must run at minimum 6 L/min â below this, exhaled COâ accumulates in the mask\nâ¢ Less commonly used in EMS â NRB is usually the better choice for sick patients\n\n**Partial rebreather mask:**\nâ¢ Similar to NRB but without the one-way valve\nâ¢ Allows some exhaled air to mix with reservoir oxygen\nâ¢ FiOâ: ~35-60%\nâ¢ Rarely used in EMS prehospital â you'll mainly see it in hospital\n\n**Venturi mask:**\nâ¢ Delivers precise FiOâ (24%, 28%, 31%, 35%, 40%)\nâ¢ Used for COPD patients who need controlled oxygen delivery\nâ¢ Color-coded adapters set the exact FiOâ\nâ¢ More of a hospital/interfacility tool"
    },
    {
      heading: "Matching Device to Patient",
      body: "**Quick decision guide:**\n\n| Patient situation | Device | Flow |\n|---|---|---|\n| Mild hypoxia, stable, talking | Nasal cannula | 2-4 L/min |\n| Moderate distress, SpOâ 90-93% | Nasal cannula | 4-6 L/min |\n| Serious illness, SpOâ <94% | Nonrebreather | 10-15 L/min |\n| CO poisoning (any SpOâ) | Nonrebreather | 15 L/min |\n| Not breathing / inadequate | BVM | 15 L/min |\n| COPD, target 88-92% | Nasal cannula or Venturi | 2-4 L/min |\n\n**Bottom line:** When in doubt, go higher. You can always back off oxygen. You can't undo hypoxic brain damage."
    }
  ],
  flashcards: [
    { front: "What is FiOâ?", back: "Fraction of Inspired Oxygen â the percentage of oxygen being delivered. Room air = 21%." },
    { front: "What flow rate does a nasal cannula use?", back: "1-6 L/min, delivering approximately 24-44% FiOâ" },
    { front: "What flow rate does a nonrebreather mask use?", back: "10-15 L/min, delivering 60-90% FiOâ" },
    { front: "What is the target SpOâ for most patients?", back: "94% or above" },
    { front: "What is the target SpOâ for COPD patients?", back: "88-92% â avoid hyperoxia which may suppress hypoxic drive" },
    { front: "What is the critical step before applying an NRB mask?", back: "Inflate the reservoir bag first by covering the one-way valve â an empty bag delivers room air" },
    { front: "Why is CO poisoning always treated with high-flow oxygen?", back: "High-flow Oâ displaces CO from hemoglobin faster â SpOâ will read falsely normal, so treat the mechanism not the number" },
    { front: "What is the minimum flow rate for a simple face mask?", back: "6 L/min minimum â below this, exhaled COâ accumulates in the mask" },
    { front: "When should you use a nasal cannula instead of NRB?", back: "Mild hypoxia, stable breathing, SpOâ 90-93%, or patient cannot tolerate a mask" },
    { front: "What is hypoxic drive?", back: "Some COPD patients breathe in response to low Oâ rather than high COâ â high-flow oxygen may suppress this drive" },
    { front: "What device delivers the most precise FiOâ?", back: "Venturi mask â color-coded adapters deliver exact percentages (24%, 28%, 31%, 35%, 40%)" },
    { front: "Room air contains what percentage of oxygen?", back: "21% FiOâ" },
    { front: "A patient with suspected CO poisoning needs:", back: "High-flow oxygen via NRB at 15 L/min regardless of SpOâ reading" },
    { front: "What does a nonrebreather mask's one-way valve do?", back: "Prevents exhaled air from entering the reservoir bag, keeping it filled with pure oxygen" },
    { front: "Nasal cannula is ineffective when:", back: "The patient is breathing exclusively through their mouth â nasal prongs won't deliver oxygen effectively" },
    { front: "When should you use BVM instead of an oxygen mask?", back: "When breathing is absent or inadequate â oxygen masks only work when the patient is breathing on their own" },
  ],
  quiz: [
    { q: "A 72-year-old COPD patient has SpOâ of 86% and is in moderate distress. You should:", options: ["Withhold oxygen â COPD patients shouldn't get Oâ", "Apply NRB at 15 L/min to maximize oxygen delivery", "Apply nasal cannula at 2-4 L/min targeting SpOâ 88-92%", "Only give oxygen if SpOâ drops below 80%"], answer: 2, explanation: "COPD patients who are hypoxic (SpOâ <88%) need oxygen â never withhold it. But target 88-92%, not 100%. Start with a nasal cannula at low flow and titrate." },
    { q: "You apply an NRB mask but the reservoir bag stays deflated. What will the patient receive?", options: ["High-flow oxygen â the mask still works", "Mostly room air â the reservoir isn't filled with oxygen", "No oxygen â the mask is broken", "COâ â the bag collects exhaled air"], answer: 1, explanation: "The reservoir bag must be inflated before application. An empty bag means the patient inhales through the one-way valve directly â mostly room air (21% Oâ). Always inflate first." },
    { q: "Room air contains approximately what percentage of oxygen?", options: ["10%", "21%", "40%", "78%"], answer: 1, explanation: "Room air is approximately 21% oxygen (78% nitrogen, 1% other gases). This is your baseline â any supplemental oxygen device increases FiOâ above this." },
    { q: "A patient with suspected carbon monoxide poisoning has SpOâ of 99%. You should:", options: ["Observe only â SpOâ is normal", "Apply nasal cannula at 2 L/min", "Apply NRB at 15 L/min immediately", "Only treat if patient becomes symptomatic"], answer: 2, explanation: "CO binds hemoglobin and reads as normal SpOâ. Always apply high-flow oxygen to suspected CO poisoning regardless of the reading â it's one of the most dangerous false negatives in EMS." },
    { q: "The maximum useful flow rate for a nasal cannula is:", options: ["2 L/min", "4 L/min", "6 L/min", "10 L/min"], answer: 2, explanation: "Above 6 L/min, a nasal cannula delivers minimal additional benefit and dries out mucous membranes. Switch to a mask for higher flow needs." },
    { q: "Which device delivers the most precise and controlled FiOâ?", options: ["Nonrebreather mask", "Nasal cannula", "Venturi mask", "Simple face mask"], answer: 2, explanation: "Venturi masks use color-coded adapters to deliver exact FiOâ percentages â commonly used for COPD patients needing controlled oxygen. Nasal cannula and NRBs deliver approximate FiOâ." },
    { q: "A patient is not breathing. Which oxygen delivery device do you use?", options: ["Nonrebreather mask", "Nasal cannula", "BVM connected to oxygen", "Venturi mask"], answer: 2, explanation: "Passive oxygen devices (NRB, cannula, masks) only work when the patient is breathing on their own. An apneic patient needs positive pressure ventilation â BVM connected to high-flow Oâ." },
    { q: "The minimum flow rate for a simple face mask is 6 L/min because:", options: ["Lower flows can't penetrate the mask seal", "Below 6 L/min, exhaled COâ accumulates in the mask", "The mask reservoir won't inflate at lower flows", "Lower flows damage the mask valve"], answer: 1, explanation: "Simple face masks have vents but not enough airflow below 6 L/min to flush exhaled COâ. The patient would rebreathe their own COâ, defeating the purpose." },
    { q: "An NRB mask at 15 L/min delivers approximately:", options: ["21% FiOâ", "40% FiOâ", "60-90% FiOâ", "100% FiOâ always"], answer: 2, explanation: "NRB masks deliver 60-90% FiOâ when properly applied with the reservoir inflated. True 100% delivery requires a sealed system â masks always allow some room air entrainment." },
    { q: "A patient is speaking in full sentences with SpOâ of 91%. The most appropriate intervention is:", options: ["No oxygen needed â they're speaking fine", "BVM ventilation", "Nasal cannula at 2-4 L/min", "NRB at 15 L/min immediately"], answer: 2, explanation: "SpOâ of 91% warrants supplemental oxygen. The patient is breathing adequately (full sentences) so a nasal cannula is appropriate. Start at 2-4 L/min and titrate to â¥94%." },
    { q: "Why might high-flow oxygen be harmful to some COPD patients?", options: ["Oxygen is toxic to COPD lung tissue", "Some COPD patients breathe in response to low Oâ â flooding them with Oâ may suppress this drive", "High-flow Oâ worsens bronchospasm", "COPD patients absorb oxygen faster, causing hyperoxia"], answer: 1, explanation: "Some severe COPD patients have adapted to high COâ and rely on hypoxic drive. High Oâ can theoretically suppress breathing. In practice: never withhold Oâ from hypoxic COPD patients â just target 88-92%." },
    { q: "You apply a nasal cannula but the patient is breathing only through their mouth. You should:", options: ["Increase the flow rate to compensate", "Switch to a face mask", "Add a second nasal cannula", "No change needed â nasal cannula still works"], answer: 1, explanation: "Nasal cannula delivers oxygen through the nostrils. If the patient is exclusively mouth-breathing, the prongs deliver little to no benefit. Switch to a face mask." },
    { q: "FiOâ stands for:", options: ["Flow index of oxygen", "Fraction of inspired oxygen", "Fixed inspired oxygenation", "Flow in oxygen"], answer: 1, explanation: "FiOâ = Fraction of Inspired Oxygen â the decimal or percentage of oxygen in the air the patient breathes. Room air FiOâ = 0.21 (21%)." },
    { q: "A STEMI patient is breathing adequately with SpOâ of 98%. Oxygen should be:", options: ["Applied at 15 L/min NRB immediately", "Not applied â target SpOâ â¥94% and avoid hyperoxia in STEMI", "Applied at 2 L/min nasal cannula", "Applied only if SpOâ drops below 90%"], answer: 1, explanation: "Current evidence suggests hyperoxia may worsen outcomes in STEMI by causing coronary vasoconstriction. If SpOâ is already â¥94%, supplemental oxygen is not indicated." },
    { q: "Which oxygen device is MOST appropriate for a seriously ill patient with SpOâ of 88%?", options: ["Room air â avoid oxygen in sick patients", "Nasal cannula at 1 L/min", "Nonrebreather mask at 10-15 L/min", "BVM ventilation"], answer: 2, explanation: "SpOâ of 88% in a seriously ill patient warrants high-flow oxygen via NRB. The patient is breathing so BVM isn't indicated yet. Start with NRB and reassess." },
  ]
};

// âââ MODULE 1 â AIRWAY, LESSON 5 âââââââââââââââââââââââââââââââââââââââââââââ
const M1L5 = {
  moduleId: 1, id: 5,
  title: "Respiratory Emergencies",
  subtitle: "Asthma, COPD, pulmonary edema, pneumothorax â recognizing and managing breathing crises",
  duration: "12 min",
  dispatch: {
    call: `"Unit 3, respond to 1290 Maple Street â 28-year-old female, known asthmatic, severe shortness of breath, not improved with her inhaler, unable to speak in full sentences."`,
    time: "3:15 PM", eta: "4 minutes",
    hook: "Known asthmatic, inhaler not working, speaking in fragments. This is not a routine asthma call. Something has changed. Do you know the difference between a mild asthma attack and a life threat?",
    bridge: "Respiratory emergencies are among the most common â and most mismanaged â calls in EMS. The conditions look similar but have different mechanisms and different treatments. Getting them right starts with recognition."
  },
  content: [
    {
      heading: "Asthma",
      body: "Asthma is reversible bronchospasm â the airways constrict in response to a trigger (allergen, exercise, cold air, infection). The airways swell and produce excess mucus, making exhalation difficult.\n\n**Signs:** Wheezing (expiratory), prolonged exhalation, accessory muscle use, tachycardia, anxiety\n\n**Severe asthma signs â act fast:**\nâ¢ Cannot speak in full sentences\nâ¢ Tripod positioning\nâ¢ Silent chest (no wheeze = no air moving = critical)\nâ¢ Altered mental status\nâ¢ SpOâ < 90% despite oxygen\nâ¢ Diaphoresis (sweating)\n\n**Treatment:** Sitting upright, high-flow Oâ, assisted ventilation if needed, assist with prescribed bronchodilator (albuterol inhaler or nebulizer if your scope allows), rapid transport\n\n**Status asthmaticus** â A severe asthma attack that does not respond to bronchodilators. Life threatening. Rapid transport, consider ALS intercept."
    },
    {
      heading: "COPD",
      body: "COPD (Chronic Obstructive Pulmonary Disease) is a progressive, irreversible disease â usually emphysema, chronic bronchitis, or both. Unlike asthma, the damage is permanent.\n\n**Emphysema** â Alveolar walls break down, reducing surface area for gas exchange. Classic appearance: barrel chest, pursed-lip breathing, pink complexion ('pink puffer').\n\n**Chronic bronchitis** â Chronic airway inflammation and excess mucus. 'Blue bloater' â cyanotic, overweight appearance, productive cough.\n\n**Signs:** Prolonged exhalation, wheezing, barrel chest, accessory muscle use, hypoxia\n\n**Key difference from asthma:** COPD patients have a baseline of chronic respiratory compromise. They may look like they're struggling but be at their normal. Know their baseline if possible.\n\n**Treatment:** Low-flow Oâ (target SpOâ 88-92%), sitting upright, assist with prescribed medications, transport. Avoid hyperoxia."
    },
    {
      heading: "Pulmonary Edema",
      body: "Pulmonary edema is fluid in the alveoli â usually from left heart failure (the left ventricle can't pump effectively, causing fluid backup into the lungs).\n\n**Signs:**\nâ¢ Severe respiratory distress, orthopnea (can't breathe lying flat)\nâ¢ Frothy, pink-tinged sputum (classic)\nâ¢ Crackles/rales on lung auscultation (wet, crackling sounds)\nâ¢ Diaphoresis, cyanosis\nâ¢ JVD (jugular venous distension) â neck veins bulging\nâ¢ Ankle/leg edema (bilateral)\nâ¢ Sitting bolt upright, refusing to lie down\n\n**Think of it as:** The patient is literally drowning in their own fluid.\n\n**Treatment:** Sitting upright (never lie them down), high-flow Oâ, CPAP if available and in scope, rapid transport. These patients deteriorate fast."
    },
    {
      heading: "Pneumothorax",
      body: "A pneumothorax is air in the pleural space (between the lung and chest wall), causing the lung to collapse.\n\n**Simple pneumothorax** â Air enters the pleural space, lung partially collapses. Usually from trauma or spontaneous (tall, thin young adults).\n\n**Tension pneumothorax** â Air accumulates and can't escape. Builds pressure, collapses the lung completely, then pushes the mediastinum to the opposite side, compressing the other lung and the heart. Rapidly fatal.\n\n**Signs of tension pneumothorax:**\nâ¢ Absent breath sounds on affected side\nâ¢ Tracheal deviation (away from affected side â late sign)\nâ¢ JVD\nâ¢ Hypotension\nâ¢ Severe respiratory distress\nâ¢ Shock that doesn't respond to fluids\n\n**Treatment:** High-flow Oâ, rapid transport, ALS intercept for needle decompression. EMTs do not decompress tension pneumo â but you need to recognize it and call for ALS."
    },
    {
      heading: "Differentiating Respiratory Emergencies",
      body: "These four conditions can look similar. Here's how to tell them apart:\n\n| Condition | Key Sound | Key Sign | Clue |\n|---|---|---|---|\n| Asthma | Wheezing (exp.) | Young, known history | Inhaler present |\n| COPD | Wheezing + crackles | Older, smoker | Barrel chest |\n| Pulmonary edema | Crackles/rales | Can't lie flat | Pink frothy sputum |\n| Pneumothorax | Absent on one side | After trauma | Asymmetric chest |\n\n**Universal treatment principles for all respiratory emergencies:**\n1. Position of comfort (usually sitting upright)\n2. High-flow oxygen (except COPD â low flow)\n3. Reassess frequently â these patients can deteriorate fast\n4. Rapid transport â don't delay on scene\n5. ALS intercept if available and patient is critical"
    }
  ],
  flashcards: [
    { front: "What is asthma?", back: "Reversible bronchospasm â airways constrict from a trigger, causing wheezing and expiratory difficulty" },
    { front: "What is status asthmaticus?", back: "A severe asthma attack that does not respond to bronchodilators â life threatening, requires rapid transport" },
    { front: "What is a silent chest in an asthma patient?", back: "No wheezing heard â indicates almost no air is moving. Critical emergency â worse than wheezing" },
    { front: "What does COPD stand for?", back: "Chronic Obstructive Pulmonary Disease â progressive, irreversible airway disease (emphysema and/or chronic bronchitis)" },
    { front: "What is the target SpOâ for COPD patients?", back: "88-92% â avoid hyperoxia which may suppress hypoxic drive" },
    { front: "What is pulmonary edema?", back: "Fluid in the alveoli â usually from left heart failure causing fluid backup into the lungs" },
    { front: "What is the classic sign of pulmonary edema?", back: "Frothy, pink-tinged sputum, crackles/rales, orthopnea, JVD, bilateral ankle edema" },
    { front: "What is orthopnea?", back: "Inability to breathe lying flat â patient insists on sitting upright. Classic sign of pulmonary edema/heart failure" },
    { front: "What is a tension pneumothorax?", back: "Air accumulates in pleural space without escape, collapsing the lung and shifting mediastinum â rapidly fatal" },
    { front: "What are the signs of tension pneumothorax?", back: "Absent breath sounds one side, tracheal deviation (away from injury), JVD, hypotension, severe distress" },
    { front: "What sound do you hear in pulmonary edema?", back: "Crackles/rales â wet, crackling sounds from fluid in the alveoli" },
    { front: "What is tracheal deviation a sign of?", back: "Tension pneumothorax â mediastinum shifts away from the affected (collapsed) lung. Late and serious sign." },
    { front: "What causes emphysema?", back: "Alveolar wall breakdown from COPD â reduces gas exchange surface area. Causes barrel chest and pursed-lip breathing." },
    { front: "What is JVD?", back: "Jugular venous distension â bulging neck veins. Sign of increased venous pressure, seen in tension pneumo and pulmonary edema" },
    { front: "What is the key difference between asthma and COPD?", back: "Asthma is reversible bronchospasm; COPD is irreversible progressive lung damage. COPD patients have chronic baseline compromise." },
    { front: "What position should a pulmonary edema patient be in?", back: "Sitting upright â never lie them down. Lying flat worsens breathing by increasing venous return to the already failing heart." },
  ],
  quiz: [
    { q: "An asthmatic patient has no wheezing on auscultation despite obvious respiratory distress. This means:", options: ["They are improving â wheeze is gone", "Silent chest â critical, almost no air moving", "You need a better stethoscope", "Asthma has resolved â look for another cause"], answer: 1, explanation: "Silence in an asthmatic in distress is a critical sign. Wheezing requires air movement. No wheeze = no air = life threat. This patient needs immediate intervention." },
    { q: "A 68-year-old is sitting bolt upright, sweating, cannot lie flat, has crackles in both lungs and pink frothy sputum. Most likely diagnosis:", options: ["Asthma exacerbation", "Pneumothorax", "Pulmonary edema", "COPD exacerbation"], answer: 2, explanation: "Orthopnea (can't lie flat), diaphoresis, bilateral crackles, and pink frothy sputum are classic pulmonary edema signs â fluid in the alveoli from left heart failure." },
    { q: "After a stab wound to the left chest, a patient develops absent breath sounds on the left, JVD, and hypotension. You suspect:", options: ["Simple pneumothorax", "Tension pneumothorax", "Pulmonary edema", "Hemothorax"], answer: 1, explanation: "Absent breath sounds + JVD + hypotension after penetrating chest trauma = tension pneumothorax. Tracheal deviation is a late sign. This patient needs immediate ALS and transport." },
    { q: "The appropriate oxygen target for a COPD patient in mild distress with SpOâ of 87% is:", options: ["100% via NRB â maximize oxygenation", "Target SpOâ 88-92% via nasal cannula", "No oxygen â COPD patients shouldn't receive supplemental Oâ", "Target SpOâ 94-100% like any other patient"], answer: 1, explanation: "COPD patients who are hypoxic need oxygen â never withhold it. But target 88-92% to avoid suppressing hypoxic drive. Use nasal cannula at 2-4 L/min and titrate." },
    { q: "Which respiratory emergency is characterized by reversible bronchospasm?", options: ["COPD", "Pulmonary edema", "Asthma", "Pneumothorax"], answer: 2, explanation: "Asthma is reversible bronchospasm triggered by allergens, exercise, cold air, or infection. COPD is irreversible. Pulmonary edema is fluid. Pneumothorax is air outside the lung." },
    { q: "Tracheal deviation in a trauma patient indicates:", options: ["Normal finding â trachea can shift", "Tension pneumothorax â mediastinal shift away from collapsed lung", "Simple pneumothorax", "Rib fractures"], answer: 1, explanation: "Tracheal deviation (trachea shifting toward the unaffected side) is a late sign of tension pneumothorax. Don't wait for it to act â treat based on earlier signs." },
    { q: "An asthmatic patient's inhaler has not worked. You should:", options: ["Have them use the inhaler again 3 more times", "Recognize this as potentially status asthmaticus â high-flow Oâ and rapid transport", "Apply nasal cannula and monitor", "Wait 10 minutes before reassessing"], answer: 1, explanation: "Inhaler failure suggests status asthmaticus â a life-threatening emergency. High-flow Oâ, position of comfort, assisted ventilation if inadequate, and rapid transport are priorities." },
    { q: "The 'pink puffer' presentation is associated with:", options: ["Chronic bronchitis", "Pulmonary edema", "Emphysema", "Pneumothorax"], answer: 2, explanation: "The 'pink puffer' is classic emphysema â pink (maintains oxygenation longer), pursed-lip breathing, barrel chest, thin. The 'blue bloater' is chronic bronchitis â cyanotic and productive cough." },
    { q: "You hear crackles in a patient's lower lung fields bilaterally. The most likely cause is:", options: ["Asthma", "Pneumothorax", "Pulmonary edema or fluid in lungs", "Upper airway obstruction"], answer: 2, explanation: "Bilateral crackles (rales) in the lower fields are classic for pulmonary edema â fluid in the alveoli that crackles as air tries to pass through. Unilateral absence suggests pneumothorax." },
    { q: "EMT management of a suspected tension pneumothorax includes:", options: ["Needle decompression at the 2nd intercostal space", "High-flow Oâ, rapid transport, ALS intercept â EMTs do not decompress", "Applying an occlusive dressing to all sides", "Positioning patient on the affected side"], answer: 1, explanation: "EMTs do not perform needle decompression â that's a paramedic/ALS skill. Your job: recognize it, provide high-flow Oâ, call for ALS intercept, and transport immediately." },
    { q: "Which position is best for a patient in respiratory distress who is conscious?", options: ["Supine with legs elevated", "Position of comfort â usually sitting upright", "Recovery position on their side", "Prone (face down)"], answer: 1, explanation: "Sitting upright maximizes diaphragm movement and lung expansion. Conscious patients in distress will naturally find their best position â don't force them supine." },
    { q: "A patient with pulmonary edema is refusing to lie down. You should:", options: ["Insist they lie down for proper assessment", "Restrain them and lay them flat for transport", "Allow them to remain upright â lying flat worsens their condition", "Sedate them before moving"], answer: 2, explanation: "Lying flat increases venous return to the failing heart and worsens pulmonary edema. These patients are refusing for a physiological reason â honor it. Transport sitting upright." },
    { q: "What does CPAP stand for and when is it used?", options: ["Continuous Positive Airway Pressure â for pulmonary edema and COPD exacerbations", "Chest Pressure Airway Protocol â for cardiac arrest", "Controlled Pressure Airway Position â for spinal injuries", "Continuous Pressure Alveolar Protocol â for pneumonia"], answer: 0, explanation: "CPAP (Continuous Positive Airway Pressure) delivers positive pressure to splint open alveoli. Used for pulmonary edema and COPD exacerbations. Not all EMT scopes include CPAP â know your protocols." },
    { q: "A 24-year-old tall thin male develops sudden left-sided chest pain and shortness of breath after lifting weights. Most likely cause:", options: ["Asthma attack", "Spontaneous pneumothorax", "Pulmonary embolism", "COPD exacerbation"], answer: 1, explanation: "Spontaneous pneumothorax classically affects tall thin young males. No trauma required â the apical blebs (air pockets) rupture spontaneously, especially with exertion. Absent left breath sounds confirms it." },
    { q: "Jugular venous distension (JVD) in a respiratory emergency indicates:", options: ["Normal venous anatomy", "Increased venous pressure â seen in tension pneumo and pulmonary edema", "Dehydration", "Hypertension"], answer: 1, explanation: "JVD occurs when venous pressure backs up enough to distend the jugular veins â seen in tension pneumothorax (mediastinal compression) and pulmonary edema/right heart failure." },
  ]
};

// âââ MODULE 1 â AIRWAY, LESSON 6 âââââââââââââââââââââââââââââââââââââââââââââ
const M1L6 = {
  moduleId: 1, id: 6,
  title: "Airway Management in Special Situations",
  subtitle: "Pediatric airways, trauma airways, the vomiting patient, and when things go wrong",
  duration: "11 min",
  dispatch: {
    call: `"Unit 11, respond to I-95 northbound, mile marker 47 â multi-vehicle MVC, multiple patients, one reported unresponsive, trapped."`,
    time: "7:43 PM", eta: "6 minutes",
    hook: "Multi-vehicle MVC, one unresponsive, trapped. Airway management at a trauma scene is completely different from a medical call. How do you manage an airway when you can't move the patient, can't see inside the mouth, and the clock is running?",
    bridge: "The basics get you through 80% of calls. The other 20% are the ones that test you. This lesson covers the hard scenarios â because the hard scenarios are the ones that matter most."
  },
  content: [
    {
      heading: "Trauma Airway Management",
      body: "Trauma changes everything about airway management:\n\n**Spinal precautions** â Always assume cervical spine injury in significant mechanism. Use jaw thrust, not head-tilt chin-lift. Manual cervical stabilization while managing the airway.\n\n**Blood and secretions** â Trauma patients bleed. Suction is not optional â it's constant. Have it ready and running before you need it.\n\n**Facial trauma** â Broken facial bones, torn soft tissue, blood, and edema can make ventilation with a mask nearly impossible. Getting a mask seal may require two people.\n\n**Helmet removal** â Helmets must come off to assess and manage the airway. Two-person technique: one stabilizes the head while the other removes the helmet, then the first takes over stabilization.\n\n**Log roll** â A vomiting trauma patient needs to be rolled to their side as a unit (log roll) to maintain spinal alignment while clearing the airway."
    },
    {
      heading: "The Pediatric Airway in Emergencies",
      body: "Pediatric airway emergencies follow the same principles but with critical differences:\n\n**Croup** â Viral infection causing subglottic edema. Bark-like seal cough, stridor, worse at night. Most cases are mild. Cool/humidified air can help. Position of comfort, Oâ if tolerated.\n\n**Epiglottitis** â Bacterial infection causing severe epiglottic swelling. Fever, drooling, tripod position, muffled 'hot potato' voice, refusal to swallow. DO NOT examine the throat â can cause complete obstruction. Calm, rapid transport, Oâ gently.\n\n**Foreign body obstruction** â Children put things in their mouths. Complete obstruction: silent, unable to cry, cyanotic â back blows and chest thrusts (infant) or abdominal thrusts (child >1 year). Partial obstruction with effective cough: encourage coughing, don't interfere.\n\n**Key rule:** A crying child has a patent airway. A silent child with distress does not."
    },
    {
      heading: "The Actively Vomiting Patient",
      body: "Aspiration of vomit is a leading cause of preventable airway deaths. Here's how to manage it:\n\n**Immediate actions:**\n1. Roll to lateral (recovery) position â if spinal injury suspected, log roll as a unit\n2. Suction â Yankauer, continuously if needed\n3. Do NOT attempt to insert an OPA until vomiting stops and airway is clear\n\n**Sellick's maneuver (cricoid pressure)** â Pressure on the cricoid cartilage during BVM ventilation compresses the esophagus against the spine, reducing gastric insufflation and regurgitation risk. Still used in some systems â know your protocols.\n\n**If they aspirate:** Suction, high-flow Oâ, BVM if breathing is compromised, rapid transport. Document exactly what happened and when."
    },
    {
      heading: "When BVM Ventilation Fails",
      body: "BVM failure is more common than you think. Signs: poor chest rise despite correct technique, rising gastric distension, SpOâ not improving.\n\n**Troubleshoot with DOPE:**\nâ¢ **D**islodgement â Is your mask seal broken? Has an OPA shifted?\nâ¢ **O**bstruction â Is there something in the airway? Suction?\nâ¢ **P**neumothorax â Is air escaping into the pleural space?\nâ¢ **E**quipment â Is your oxygen flowing? Is the BVM intact?\n\n**If seal is the problem:** Switch to two-person BVM technique\n**If obstruction:** Suction, reposition, reassess\n**If you truly can't ventilate:** Consider alternative positioning, consider calling for ALS, maximize efforts and transport immediately\n\nDocumentation of airway difficulties is critical â the hospital needs to know."
    },
    {
      heading: "Documenting Airway Management",
      body: "Your airway documentation protects the patient and protects you.\n\n**Always document:**\nâ¢ Initial airway assessment findings\nâ¢ What interventions were performed and in what order\nâ¢ Patient response to each intervention\nâ¢ SpOâ before and after interventions\nâ¢ Any difficulties encountered\nâ¢ Time of each intervention\n\n**Handoff report (SBAR or your system's format):**\nâ¢ Situation â Why you were called\nâ¢ Background â Relevant history\nâ¢ Assessment â What you found\nâ¢ Recommendation â What you did and what you recommend next\n\nIf airway management was difficult or unsuccessful, say so clearly in your handoff. The receiving team needs to prepare. Never minimize or omit airway problems in documentation."
    }
  ],
  flashcards: [
    { front: "Why do you use jaw thrust instead of head-tilt chin-lift in trauma?", back: "Suspected cervical spine injury â jaw thrust opens airway without moving the neck" },
    { front: "What is croup?", back: "Viral infection causing subglottic edema â bark-like seal cough, stridor, worse at night" },
    { front: "What is epiglottitis and why is it dangerous?", back: "Bacterial infection causing severe epiglottic swelling â can cause complete airway obstruction. Do NOT examine the throat." },
    { front: "How do you recognize complete airway obstruction in an infant?", back: "Silent, cannot cry, cyanotic â perform back blows and chest thrusts immediately" },
    { front: "What is the DOPE mnemonic for BVM failure?", back: "Dislodgement, Obstruction, Pneumothorax, Equipment â troubleshoot BVM failure in this order" },
    { front: "What is Sellick's maneuver?", back: "Cricoid pressure during BVM ventilation â compresses esophagus to reduce gastric insufflation and regurgitation risk" },
    { front: "How do you manage a vomiting trauma patient's airway?", back: "Log roll as a unit (maintain spinal alignment), suction continuously, do not insert OPA until airway is clear" },
    { front: "What is the 'hot potato voice' a sign of?", back: "Epiglottitis â muffled voice from epiglottic swelling. Do not examine the throat." },
    { front: "How is helmet removal performed?", back: "Two-person technique: one stabilizes the head, one removes the helmet, first rescuer takes over stabilization" },
    { front: "What does a crying child tell you about their airway?", back: "A crying child has a patent airway â cry requires air movement. Silence in a distressed child is more dangerous." },
    { front: "What is the two-person BVM technique?", back: "One provider holds mask with both hands (both thumbs on top), second provider squeezes the bag â better seal" },
    { front: "What should you NEVER do with a child suspected of having epiglottitis?", back: "Never examine the throat â stimulation can cause complete laryngospasm and obstruction. Calm transport, Oâ gently." },
    { front: "What is a partial vs complete airway obstruction?", back: "Partial: effective cough, some air movement â encourage coughing. Complete: no sound, no cough, cyanosis â intervene immediately." },
    { front: "What does SBAR stand for in handoff reporting?", back: "Situation, Background, Assessment, Recommendation â structured handoff format" },
    { front: "Name 3 things that make trauma airway management harder than medical", back: "Spinal precautions (no head tilt), blood/secretions requiring constant suction, facial trauma making mask seal difficult" },
    { front: "Where does epiglottitis classically present in children?", back: "High fever, drooling, tripod positioning, stridor, refusal to swallow, muffled voice â rapid progression to obstruction" },
  ],
  quiz: [
    { q: "A trauma patient is vomiting. With suspected spinal injury, you should:", options: ["Suction while keeping patient supine", "Log roll as a unit to the lateral position and suction", "Insert an OPA immediately to protect the airway", "Apply cricoid pressure and continue suctioning"], answer: 1, explanation: "Suspected spinal injury means you maintain spinal alignment during all movements. Log roll the patient as a unit â everyone moves together â to the lateral position so vomit drains out." },
    { q: "A 2-year-old has a barking seal cough and stridor that is worse at night. Most likely diagnosis:", options: ["Epiglottitis", "Foreign body obstruction", "Croup", "Asthma"], answer: 2, explanation: "Classic croup presentation: viral, barking seal cough, stridor, worse at night, usually 6 months-3 years. Cool humidified air can help. Position of comfort, Oâ if tolerated." },
    { q: "A 4-year-old has high fever, is drooling, sitting in tripod position, and has a muffled voice. You suspect epiglottitis. You should:", options: ["Examine the throat with a tongue depressor to confirm", "Have the parent hold the child, apply Oâ gently, calm rapid transport â do not examine throat", "Insert an OPA immediately", "Lay them flat for assessment"], answer: 1, explanation: "NEVER examine the throat in suspected epiglottitis â direct laryngoscopy or even a tongue depressor can trigger complete laryngospasm. Keep the child calm, Oâ gently if tolerated, rapid transport." },
    { q: "You're ventilating with a BVM but the abdomen is rising more than the chest. Using DOPE, your first step is:", options: ["Check for pneumothorax", "Recheck mask seal and airway positioning (Dislodgement)", "Check your oxygen equipment", "Look for airway obstruction"], answer: 1, explanation: "DOPE starts with Dislodgement â is your mask seal broken? Is the head position optimal? Is the OPA in place? Mask seal issues are the most common BVM failure cause." },
    { q: "In trauma, the preferred airway maneuver to avoid cervical spine movement is:", options: ["Head-tilt chin-lift", "Jaw thrust", "Neck extension", "Sniffing position"], answer: 1, explanation: "Jaw thrust opens the airway by moving the mandible forward without extending the neck â essential when cervical spine injury is suspected." },
    { q: "A 10-month-old has a sudden onset of choking and is now silent, cyanotic, and cannot cry. You should:", options: ["Attempt finger sweep to remove the object", "Back blows and chest thrusts", "Abdominal thrusts (Heimlich)", "Immediate BVM ventilation"], answer: 1, explanation: "For infants under 1 year with complete obstruction: 5 back blows and 5 chest thrusts. Abdominal thrusts (Heimlich) are for children over 1 year. Finger sweeps only if you can SEE the object." },
    { q: "Why does facial trauma make BVM ventilation difficult?", options: ["Broken bones can puncture the BVM", "Facial anatomy changes make mask seal nearly impossible", "Trauma patients should not receive positive pressure", "You need a different size mask for trauma"], answer: 1, explanation: "Fractured facial bones, torn tissue, swelling, and blood make achieving an airtight mask seal extremely difficult. Two-person technique and sometimes alternative airways become necessary." },
    { q: "The DOPE mnemonic stands for:", options: ["Dislodgement, Obstruction, Pneumothorax, Equipment", "Delivery, Oxygen, Pressure, Esophagus", "Depth, Output, Position, Entry", "Drainage, Obstruction, Perfusion, Edema"], answer: 0, explanation: "DOPE = Dislodgement, Obstruction, Pneumothorax, Equipment. Use this systematic check when BVM ventilation is not producing adequate chest rise." },
    { q: "Documenting that airway management was difficult is important because:", options: ["It protects you legally but has no clinical value", "The receiving team needs to prepare for a potentially difficult airway", "You only document successful interventions", "Difficulty documentation is optional"], answer: 1, explanation: "If the airway was difficult or interventions failed, the hospital must know. They may need to prepare advanced airway equipment, call anesthesia, or activate a difficult airway protocol." },
    { q: "A child with partial airway obstruction is coughing forcefully. You should:", options: ["Immediately perform abdominal thrusts", "Encourage coughing â an effective cough is the best way to clear a partial obstruction", "Insert fingers to sweep the throat", "Begin back blows"], answer: 1, explanation: "A forceful cough generates more airway pressure than any manual technique. If the child is moving air and coughing effectively, let them work â intervene only if the cough becomes ineffective or the child deteriorates." },
    { q: "What is the purpose of Sellick's maneuver (cricoid pressure)?", options: ["Opens the glottis for easier intubation", "Compresses the esophagus to reduce gastric insufflation and regurgitation risk during BVM", "Stabilizes the cervical spine during airway management", "Prevents laryngospasm during suctioning"], answer: 1, explanation: "Sellick's maneuver applies downward pressure on the cricoid cartilage, compressing the esophagus against the vertebral bodies. This reduces the risk of regurgitation and gastric inflation during BVM ventilation." },
    { q: "Helmet removal at a trauma scene requires:", options: ["One person removing the helmet quickly", "Two-person technique maintaining cervical stabilization throughout", "Cutting the helmet off with trauma shears", "Leaving the helmet on until the hospital removes it"], answer: 1, explanation: "Helmet removal requires two people: one maintains inline cervical stabilization above while the other removes the helmet, then the first rescuer repositions to continue stabilization. The head never loses support." },
    { q: "An unconscious trauma patient with significant facial injuries needs BVM ventilation. Your BEST option is:", options: ["One-person BVM with standard EC clamp", "Two-person BVM â one holds seal with both hands, one squeezes", "Nasal cannula at 6 L/min", "Delay ventilation until ALS arrives"], answer: 1, explanation: "Facial trauma makes mask seal extremely difficult. Two-person BVM dramatically improves seal quality â critical when normal anatomy is disrupted." },
    { q: "A crying child arrives by private car with respiratory distress. The crying tells you:", options: ["The child is in extreme distress â immediate intervention needed", "The airway is patent â air is moving well enough to cry", "The child is faking â reduce urgency", "The child needs sedation before assessment"], answer: 1, explanation: "Crying requires air movement through the airway and vocal cords. A crying child has a functioning, open airway. Silence in a distressed child â especially sudden silence â is the alarming finding." },
    { q: "After managing a difficult airway, your handoff should include:", options: ["Only the final outcome â what worked", "What interventions were tried, what worked, what didn't, and the timeline", "No airway details â the hospital will assess on arrival", "Only the patient's chief complaint and vitals"], answer: 1, explanation: "A complete airway handoff includes what you found, what you tried, what worked, what didn't, and when. This allows the receiving team to prepare appropriately and continues the chain of care." },
  ]
};

// âââ MODULE 1 â AIRWAY, LESSON 7 â MODULE QUIZ âââââââââââââââââââââââââââââââ
const M1L7 = {
  moduleId: 1, id: 7,
  title: "Airway Module Quiz",
  subtitle: "Cumulative assessment â everything from Module 1: Airway",
  duration: "15 min",
  dispatch: {
    call: `"All units, Module 1 Assessment. You will be tested on respiratory anatomy, patient assessment, airway adjuncts, oxygen delivery, respiratory emergencies, and special situation airway management."`,
    time: "NOW", eta: "Your call",
    hook: "Seven lessons. Everything in Airway. Time to find out what stuck â and what needs another pass.",
    bridge: "This quiz pulls from all seven Airway lessons. Ten questions, randomly selected. Use the AI Tutor after to work through anything that trips you up."
  },
  content: [
    {
      heading: "What This Quiz Covers",
      body: "This module quiz covers all of Module 1 â Airway:\n\nâ¢ **Lesson 1** â Respiratory anatomy (upper/lower airway, gas exchange, pediatric differences, airway sounds)\nâ¢ **Lesson 2** â Patient assessment (look/listen/feel, respiratory rate, SpOâ, adequate vs inadequate breathing)\nâ¢ **Lesson 3** â Airway adjuncts (OPA, NPA, suction, BVM technique)\nâ¢ **Lesson 4** â Oxygen delivery (FiOâ, devices, flow rates, COPD caveat)\nâ¢ **Lesson 5** â Respiratory emergencies (asthma, COPD, pulmonary edema, pneumothorax)\nâ¢ **Lesson 6** â Special situations (trauma, pediatric, vomiting patient, DOPE)\n\nYou'll get 10 questions drawn randomly from across all lessons."
    }
  ],
  flashcards: [
    { front: "Where does gas exchange occur?", back: "Alveoli â 300 million tiny air sacs where Oâ crosses into capillaries and COâ crosses out" },
    { front: "Normal adult respiratory rate?", back: "12-20 breaths per minute" },
    { front: "When is jaw thrust used instead of head-tilt chin-lift?", back: "Suspected cervical spine injury â jaw thrust opens airway without moving the neck" },
    { front: "What is the OPA contraindication?", back: "Gag reflex â will trigger vomiting" },
    { front: "NRB mask flow rate and FiOâ?", back: "10-15 L/min delivering 60-90% FiOâ with reservoir inflated" },
    { front: "Silent chest in asthma means:", back: "Critical â almost no air is moving. Worse than wheezing." },
    { front: "Classic signs of pulmonary edema?", back: "Orthopnea, crackles/rales, pink frothy sputum, JVD, bilateral edema, diaphoresis" },
    { front: "DOPE mnemonic?", back: "Dislodgement, Obstruction, Pneumothorax, Equipment â BVM failure troubleshooting" },
    { front: "SpOâ target for COPD?", back: "88-92% â avoid hyperoxia" },
    { front: "Signs of tension pneumothorax?", back: "Absent breath sounds one side, JVD, hypotension, tracheal deviation (late), severe distress" },
    { front: "Adult BVM ventilation rate?", back: "1 breath every 5-6 seconds (10-12/min)" },
    { front: "Croup vs epiglottitis key difference?", back: "Croup: viral, barking cough, treat with comfort. Epiglottitis: bacterial, drooling, DO NOT examine throat." },
    { front: "What does stridor indicate?", back: "Partial upper airway obstruction near the larynx â high-pitched sound on inhalation" },
    { front: "CO poisoning and SpOâ?", back: "SpOâ reads falsely normal â always treat CO with high-flow Oâ regardless of reading" },
    { front: "Infant complete obstruction treatment?", back: "5 back blows + 5 chest thrusts (not abdominal thrusts â for infants under 1 year)" },
  ],
  quiz: [
    { q: "Gas exchange â oxygen entering the bloodstream and COâ leaving â occurs at the:", options: ["Trachea", "Bronchi", "Alveoli", "Larynx"], answer: 2, explanation: "Gas exchange happens at the alveoli â 300 million tiny air sacs in the lungs with walls thin enough for gases to diffuse across." },
    { q: "A patient has stridor on inhalation after eating. This indicates:", options: ["Lower airway bronchospasm", "Partial upper airway obstruction â possible foreign body", "Normal breathing sounds", "Pulmonary edema"], answer: 1, explanation: "Stridor is a high-pitched inspiratory sound from partial upper airway obstruction â near the larynx. After eating suggests possible foreign body. Also consider allergic swelling." },
    { q: "SpOâ reads 99% in a patient you suspect has carbon monoxide poisoning. You should:", options: ["Reassure them â SpOâ is normal", "Apply nasal cannula at 2 L/min", "Apply NRB at 15 L/min â CO poisoning treatment regardless of SpOâ", "Monitor and reassess in 5 minutes"], answer: 2, explanation: "CO binds hemoglobin identically to oxygen â pulse ox cannot distinguish. SpOâ in CO poisoning is meaningless. Always apply high-flow Oâ based on the mechanism." },
    { q: "You attempt to insert an OPA and the patient gags. You should:", options: ["Use a smaller size and try again", "Remove the OPA â gag reflex is a contraindication", "Push through quickly", "Try inserting without rotating"], answer: 1, explanation: "A gag reflex is an absolute contraindication to OPA. Remove it immediately. Consider NPA, which is better tolerated in conscious patients." },
    { q: "A 68-year-old COPD patient is in moderate respiratory distress with SpOâ 86%. Your oxygen target is:", options: ["100% via NRB", "94-100% like any other patient", "88-92% via low-flow nasal cannula", "No oxygen â COPD patients shouldn't get supplemental Oâ"], answer: 2, explanation: "COPD patients who are hypoxic (SpOâ <88%) need oxygen â never withhold it. Target 88-92% to avoid suppressing hypoxic drive." },
    { q: "After trauma, a patient has absent breath sounds on the right, JVD, and is hypotensive. You suspect:", options: ["Pulmonary edema", "Tension pneumothorax", "Hemothorax", "Simple pneumothorax"], answer: 1, explanation: "Absent unilateral breath sounds + JVD + hypotension after trauma = tension pneumothorax. Call ALS, high-flow Oâ, immediate transport â this is rapidly fatal." },
    { q: "A child has a barking cough, stridor, and low-grade fever that is worse at night. Most likely:", options: ["Epiglottitis", "Asthma", "Croup", "Foreign body obstruction"], answer: 2, explanation: "Croup: viral, barking seal cough, stridor, low/no fever, worse at night, 6 months-3 years. Epiglottitis has high fever, drooling, and no barking cough." },
    { q: "BVM ventilation isn't producing chest rise. Using DOPE, you first check:", options: ["For pneumothorax", "Oxygen equipment", "Mask seal and airway positioning (Dislodgement)", "Airway obstruction"], answer: 2, explanation: "DOPE starts with Dislodgement â check mask seal and head/airway positioning first. Most BVM failures are seal problems." },
    { q: "Classic pulmonary edema presentation includes all EXCEPT:", options: ["Orthopnea (can't lie flat)", "Pink frothy sputum", "Bilateral crackles", "Expiratory wheezing"], answer: 3, explanation: "Pulmonary edema presents with orthopnea, pink frothy sputum, crackles/rales (not wheeze). Wheezing suggests bronchospasm (asthma/COPD). Crackles are from fluid in alveoli." },
    { q: "The correct ventilation rate for an adult with a BVM is:", options: ["1 breath every 2-3 seconds", "1 breath every 5-6 seconds", "1 breath every 10 seconds", "As fast as you can"], answer: 1, explanation: "1 breath every 5-6 seconds = 10-12/min for adults. Over-ventilation is dangerous â causes gastric distension and reduces cardiac output." },
    { q: "A patient in respiratory distress spontaneously assumes a tripod position. You should:", options: ["Force them supine for assessment", "Allow them to remain upright â tripod maximizes breathing", "Apply a cervical collar", "Begin CPR"], answer: 1, explanation: "Tripod position is physiologically beneficial â patients assume it because it maximizes diaphragm movement. Honor it. Transport upright." },
    { q: "An infant under 1 year has complete airway obstruction. The correct intervention is:", options: ["Abdominal thrusts (Heimlich)", "Back blows and chest thrusts", "Finger sweep regardless", "Immediate BVM ventilation"], answer: 1, explanation: "Infants under 1 year: 5 back blows + 5 chest thrusts. Abdominal thrusts (Heimlich) are for children over 1 year and adults. Finger sweeps only if you can SEE the object." },
    { q: "The NPA is preferred over the OPA when:", options: ["The patient is completely unconscious", "The patient has a gag reflex or clenched teeth", "The patient has a suspected skull fracture", "The patient is a child under 5"], answer: 1, explanation: "NPA is preferred when the patient has a gag reflex, clenched jaw, or altered consciousness â it's inserted nasally, doesn't require opening the mouth, and is better tolerated." },
    { q: "Wheezing on exhalation is most associated with:", options: ["Upper airway obstruction", "Pulmonary edema", "Bronchospasm (asthma/COPD)", "Pneumothorax"], answer: 2, explanation: "Expiratory wheeze = bronchospasm in the lower airways (asthma, COPD, anaphylaxis). Upper airway obstruction causes stridor (inspiratory). Pulmonary edema causes crackles." },
    { q: "The reservoir bag on an NRB mask must be inflated before application because:", options: ["An empty bag deflects exhaled air", "An uninflated bag delivers mostly room air, not high-concentration oxygen", "The one-way valve won't open without pressure", "It provides a larger breathing space"], answer: 1, explanation: "The reservoir accumulates oxygen between breaths. An empty bag means the patient inhales through the valve into room air (21% Oâ). Always inflate the reservoir first by occluding the one-way valve." },
    { q: "Documenting a difficult airway encounter is important because:", options: ["Only successful interventions need documentation", "The receiving team needs to prepare and the record protects everyone", "It's optional in emergencies", "Airway findings are assessed fresh at the hospital"], answer: 1, explanation: "Complete documentation of airway difficulties allows the receiving team to prepare (advanced airway equipment, anesthesia backup). It also protects you legally and ensures continuity of care." },
    { q: "Why is SpOâ unreliable with dark nail polish?", back: "Dark polish blocks the light sensor, giving inaccurate or absent readings â use an alternate site", options: ["The polish reflects light and gives high readings", "Dark polish blocks the sensor, causing inaccurate results â use an alternate site", "Nail polish has no effect on SpOâ", "Only red polish affects the reading"], answer: 1, explanation: "Pulse oximetry uses light transmission through tissue. Dark nail polish absorbs or blocks the light, making the reading unreliable. Remove polish or clip to earlobe." },
    { q: "A trauma patient with facial injuries needs BVM ventilation. The BEST technique is:", options: ["Standard one-person EC clamp", "Two-person BVM for better mask seal", "Nasal cannula â avoid positive pressure in trauma", "Wait for ALS intubation"], answer: 1, explanation: "Facial trauma disrupts normal anatomy, making one-person mask seal very difficult. Two-person BVM (one holds seal with both hands, one squeezes) dramatically improves ventilation effectiveness." },
    { q: "Frothy pink-tinged sputum in a patient with respiratory distress indicates:", options: ["Active bleeding from the airway", "Pulmonary edema â fluid mixing with air in the alveoli", "Normal secretions during distress", "Asthma with mucus production"], answer: 1, explanation: "Pink frothy sputum is classic pulmonary edema â fluid from the capillaries leaks into alveoli and mixes with air to create pink foam. It's one of the most specific signs of flash pulmonary edema." },
    { q: "The primary difference between a simple and tension pneumothorax is:", options: ["Size of the air collection", "Tension pneumo accumulates air with no escape, causing mediastinal shift and cardiovascular compromise", "Simple pneumo requires surgery, tension does not", "They are treated identically in the field"], answer: 1, explanation: "Simple pneumo: air in pleural space, lung partially collapses. Tension: air accumulates, can't escape â builds pressure, collapses lung completely, shifts mediastinum, compresses heart. Tension is rapidly fatal." },
  ]
};

// âââ MODULE 2 â CARDIOLOGY âââââââââââââââââââââââââââââââââââââââââââââââââââ

// M2L1 + M2L2 patch
const M2L1 = {
  moduleId: 2, id: 1,
  title: "Heart Anatomy & the Cardiac Cycle",
  subtitle: "How the heart is built, how it works, and what happens when it fails",
  duration: "11 min",
  video: {
    youtubeId: "Vi1JK6IYVt8",
    caption: "Meet the heart â 9 min Â· Cardiac anatomy, chambers, valves, and blood flow",
    source: "Khan Academy",
    duration: "9 min video"
  },
  dispatch: {
    call: `"Unit 7, respond to 883 Birchwood Court â 61-year-old male, sudden onset chest pain radiating to the left arm, diaphoretic, nauseous."`,
    time: "10:44 AM", eta: "5 minutes",
    hook: "Chest pain, left arm radiation, sweating, nausea. Every one of those words points to the same organ. But do you know exactly what's happening inside it right now?",
    bridge: "You can't understand cardiac emergencies without understanding the heart. This lesson builds the foundation â anatomy, blood flow, electrical system, and what goes wrong."
  },
  content: [
    { heading: "Heart Anatomy: The Four Chambers", body: "The heart has four chambers divided by the septum:\n\nâ¢ **Right atrium** â Receives deoxygenated blood from the body via the vena cavae\nâ¢ **Right ventricle** â Pumps deoxygenated blood to the lungs via the pulmonary artery\nâ¢ **Left atrium** â Receives oxygenated blood from the lungs via pulmonary veins\nâ¢ **Left ventricle** â Most muscular chamber. Pumps oxygenated blood to the entire body via the aorta\n\nThe left ventricle does the most work â it pumps against systemic resistance. When it fails, you get pulmonary edema. When it's blocked, you get a heart attack." },
    { heading: "The Heart Valves", body: "Four valves keep blood flowing one direction:\n\nâ¢ **Tricuspid** â Right atrium â Right ventricle\nâ¢ **Pulmonic** â Right ventricle â Pulmonary artery\nâ¢ **Mitral** â Left atrium â Left ventricle\nâ¢ **Aortic** â Left ventricle â Aorta\n\n**Systole** = contraction. **Diastole** = relaxation.\n\nThe 'lub-dub' sound is valves closing. Murmurs are turbulent flow through damaged valves." },
    { heading: "The Coronary Arteries", body: "The coronary arteries branch off the aorta and feed the heart muscle itself:\n\nâ¢ **Left Anterior Descending (LAD)** â Supplies front of left ventricle. The 'widow maker' â blockage here is often fatal.\nâ¢ **Left Circumflex (LCx)** â Supplies lateral and posterior left ventricle\nâ¢ **Right Coronary Artery (RCA)** â Supplies right ventricle, inferior left ventricle, and the SA node\n\nWhen a coronary artery is blocked, the muscle it supplies begins to die â myocardial infarction (MI)." },
    { heading: "The Electrical Conduction System", body: "The heart's own electrical system triggers each beat:\n\n1. **SA node** â The pacemaker, right atrium, fires 60-100/min\n2. **AV node** â Receives signal, delays briefly to allow ventricular filling\n3. **Bundle of His** â Carries signal into ventricles\n4. **Bundle branches** â Left and right\n5. **Purkinje fibers** â Final distribution, trigger ventricular contraction\n\nDisruption causes arrhythmias." },
    { heading: "Cardiac Output", body: "**Cardiac output (CO)** = Heart Rate Ã Stroke Volume\n\nNormal CO at rest: ~5 liters/minute. Stroke volume ~70 mL/beat.\n\nWhen cardiac output drops, the body compensates:\nâ¢ Increases heart rate (tachycardia)\nâ¢ Constricts peripheral vessels (pale, cool skin)\nâ¢ Shunts blood to vital organs\n\nTachycardia + pale/cool skin in a chest pain patient = body struggling to maintain perfusion." }
  ],
  flashcards: [
    { front: "Which ventricle is most muscular and why?", back: "Left ventricle â pumps oxygenated blood to the entire body against systemic vascular resistance" },
    { front: "What is the 'widow maker'?", back: "Left anterior descending (LAD) artery â blockage causes massive anterior MI, often fatal" },
    { front: "What is the SA node?", back: "The heart's natural pacemaker in the right atrium â fires 60-100/min in normal sinus rhythm" },
    { front: "Systole vs diastole?", back: "Systole = contraction (heart pumps). Diastole = relaxation (heart fills). BP 120/80 = systolic/diastolic." },
    { front: "What is cardiac output?", back: "Heart Rate Ã Stroke Volume. Normal ~5 L/min at rest." },
    { front: "The four heart valves?", back: "Tricuspid (RAâRV), Pulmonic (RVâPA), Mitral (LAâLV), Aortic (LVâAorta)" },
    { front: "Where does the right ventricle send blood?", back: "To the lungs via the pulmonary artery â to pick up oxygen" },
    { front: "What happens when the LAD is blocked?", back: "Anterior myocardial infarction â front wall of left ventricle begins to die" },
    { front: "What is the AV node?", back: "Receives signal from SA node, delays briefly to allow ventricular filling, then conducts to ventricles" },
    { front: "What causes the 'lub-dub' heart sounds?", back: "Closing of heart valves â lub = mitral/tricuspid, dub = aortic/pulmonic" },
    { front: "What does the RCA supply?", back: "Right ventricle, inferior left ventricle, and the SA node" },
    { front: "Why does the body become tachycardic in cardiac failure?", back: "Compensatory â heart rate increases to maintain cardiac output when stroke volume drops" },
    { front: "What are Purkinje fibers?", back: "Final electrical distribution in ventricles â cause ventricular contraction" },
    { front: "What is a myocardial infarction?", back: "Heart attack â death of heart muscle from blocked coronary artery" },
    { front: "Pale cool skin in a cardiac patient means?", back: "Peripheral vasoconstriction â body shunting blood to vital organs due to low cardiac output" },
    { front: "What is stroke volume?", back: "Amount of blood ejected per beat â approximately 70 mL at rest" },
  ],
  quiz: [
    { q: "The LAD artery is called the 'widow maker' because:", options: ["It is the smallest coronary artery", "Blockage causes massive anterior MI â often rapidly fatal", "It supplies the SA node", "It is impossible to stent"], answer: 1, explanation: "The LAD supplies the anterior wall of the left ventricle â the most critical pumping chamber. Blockage here causes a massive MI with very high mortality." },
    { q: "The SA node's primary function is:", options: ["Connecting atria to ventricles", "Acting as the heart's natural pacemaker at 60-100/min", "Supplying blood to the right ventricle", "Closing the mitral valve"], answer: 1, explanation: "The SA node in the right atrium initiates each heartbeat and sets the rate â this is normal sinus rhythm." },
    { q: "Cardiac output equals:", options: ["BP Ã heart rate", "Heart rate Ã stroke volume", "Stroke volume Ã· heart rate", "Heart rate + stroke volume"], answer: 1, explanation: "CO = Heart Rate Ã Stroke Volume. Normal ~5 L/min. When CO drops the body compensates with tachycardia and vasoconstriction." },
    { q: "Pale cool skin + tachycardia in a chest pain patient indicates:", options: ["Normal response to pain", "Body compensating for decreased cardiac output", "Hypertension", "Respiratory compromise"], answer: 1, explanation: "Tachycardia + peripheral vasoconstriction (pale/cool skin) = body compensating for low cardiac output. The heart is struggling to perfuse vital organs." },
    { q: "Which chamber pumps blood to the lungs?", options: ["Left atrium", "Left ventricle", "Right ventricle", "Right atrium"], answer: 2, explanation: "The right ventricle pumps deoxygenated blood to the lungs via the pulmonary artery for gas exchange." },
    { q: "RCA blockage can cause dangerous bradycardia because:", options: ["It supplies the left ventricle", "It supplies the SA node â ischemia slows the heart's pacemaker", "It controls ventricular contraction speed", "It drains into the right atrium"], answer: 1, explanation: "The RCA supplies the SA node. Blockage can cause SA node ischemia â dangerously slow heart rates." },
    { q: "Diastole refers to:", options: ["Heart contraction", "Heart relaxation â chambers fill with blood", "Aortic valve closing", "SA node firing"], answer: 1, explanation: "Diastole = relaxation phase â chambers relax and fill. The diastolic BP (bottom number) reflects arterial pressure during filling." },
    { q: "The mitral valve is between:", options: ["Right atrium and right ventricle", "Left ventricle and aorta", "Left atrium and left ventricle", "Right ventricle and pulmonary artery"], answer: 2, explanation: "The mitral (bicuspid) valve sits between the left atrium and left ventricle." },
    { q: "Left ventricular failure most likely causes:", options: ["Pulmonary edema â fluid backs up into the lungs", "Liver failure", "Peripheral artery disease", "Kidney stones"], answer: 0, explanation: "Left ventricular failure causes backup into the pulmonary circulation â fluid leaks into alveoli. Classic: orthopnea, crackles, pink frothy sputum." },
    { q: "The AV node delay allows:", options: ["Filtering of abnormal rhythms", "Ventricles to fill before contracting", "Increased blood pressure", "SA node backup activation"], answer: 1, explanation: "AV node delay ensures atria finish contracting and ventricles are full before ventricular contraction â maximizing stroke volume." },
    { q: "Normal resting cardiac output is approximately:", options: ["1-2 L/min", "5 L/min", "10 L/min", "15 L/min"], answer: 1, explanation: "Normal resting CO ~5 L/min. Exercise: up to 25 L/min. Shock: can fall to 1-2 L/min." },
    { q: "Coronary arteries branch off:", options: ["The aortic arch", "Just above the aortic valve", "The diaphragm level", "The pulmonary artery"], answer: 1, explanation: "Coronary arteries originate just above the aortic valve. During diastole blood flows back into the coronary ostia, perfusing the heart muscle." },
    { q: "A heart murmur is caused by:", options: ["Abnormally fast heart rate", "Turbulent blood flow through damaged or narrowed valves", "Electrical conduction abnormalities", "Coronary artery disease"], answer: 1, explanation: "Murmurs are sounds of turbulent flow â usually from stenotic (narrowed) or regurgitant (leaky) valves." },
    { q: "Bundle of His and bundle branches are part of:", options: ["Coronary circulation", "Heart valves", "Electrical conduction system", "Autonomic nervous system"], answer: 2, explanation: "Bundle of His and left/right bundle branches carry electrical impulse from AV node into ventricular myocardium." },
    { q: "Which structure receives deoxygenated blood from the entire body?", options: ["Left atrium", "Left ventricle", "Right atrium", "Pulmonary veins"], answer: 2, explanation: "Right atrium receives all venous blood from the body via the superior and inferior vena cava." },
  ]
};

const M2L2 = {
  moduleId: 2, id: 2,
  title: "Chest Pain Assessment",
  subtitle: "OPQRST, risk stratification, and telling cardiac chest pain from everything else",
  duration: "10 min",
  dispatch: {
    call: `"Unit 2, respond to 1150 Commerce Drive â 54-year-old female, chest tightness during a walk, pressure quality, 8/10, mild shortness of breath."`,
    time: "2:33 PM", eta: "4 minutes",
    hook: "Pressure chest pain in a 54-year-old woman during exertion. Textbook presentation â but women often present differently. What are you looking for?",
    bridge: "Chest pain is one of the most common EMS calls and most dangerous to miss. Your assessment sets everything in motion â hospital preparation, cath lab activation, patient outcome."
  },
  content: [
    { heading: "OPQRST: Your Assessment Tool", body: "Every chest pain assessment follows OPQRST:\n\nâ¢ **O â Onset:** What were you doing when it started? Exertional onset is more concerning.\nâ¢ **P â Provocation/Palliation:** What makes it better or worse? Does rest or nitroglycerin help?\nâ¢ **Q â Quality:** Classic cardiac: pressure, squeezing, heaviness, tightness. Sharp stabbing pain that changes with breathing is less likely cardiac.\nâ¢ **R â Radiation:** Classic cardiac radiates to left arm, jaw, neck, or back.\nâ¢ **S â Severity:** 0-10 scale. Don't anchor on the number â a 4/10 can be a massive MI.\nâ¢ **T â Time:** How long? Prior episodes?" },
    { heading: "Classic vs Atypical Presentations", body: "**Classic ACS (more common in men):**\nâ¢ Crushing, pressure chest pain\nâ¢ Left arm or jaw radiation\nâ¢ Diaphoresis, nausea, shortness of breath\n\n**Atypical (more common in women, diabetics, elderly):**\nâ¢ Epigastric pain or indigestion\nâ¢ Jaw or neck pain without chest pain\nâ¢ Nausea and vomiting only\nâ¢ Fatigue, weakness, lightheadedness\nâ¢ Silent MI â no pain at all\n\nWomen are twice as likely to have atypical presentations. Never dismiss chest-equivalent symptoms in high-risk patients." },
    { heading: "Cardiac Risk Factors", body: "**Modifiable:**\nâ¢ Hypertension, Smoking, High cholesterol\nâ¢ Diabetes, Obesity, Physical inactivity\n\n**Non-modifiable:**\nâ¢ Age (men >45, women >55)\nâ¢ Male sex\nâ¢ Family history (first-degree relative with early cardiac disease)\n\n**Important history:**\nâ¢ Prior MI, angina, stent (PCI), or bypass (CABG)\n\nThe more risk factors, the higher your index of suspicion." },
    { heading: "Differentiating Cardiac from Non-Cardiac", body: "Not all chest pain is cardiac:\n\n| Cause | Key Clues |\n|---|---|\n| ACS/MI | Pressure, radiation, diaphoresis, risk factors |\n| Angina | Same as ACS but resolves with rest/nitro <15 min |\n| Pulmonary embolism | Sudden, pleuritic, after travel/immobility |\n| Aortic dissection | Tearing/ripping pain to back, unequal arm BPs |\n| Pneumothorax | Sudden, one-sided, young thin person or trauma |\n| Musculoskeletal | Reproducible with palpation, positional |\n| GI (GERD) | Related to meals, burning, relieved by antacids |\n\n**Key rule:** When in doubt, treat as cardiac." },
    { heading: "Assessment Priorities on Scene", body: "1. **General impression** â Pale, diaphoretic, anxious = sick\n2. **OPQRST history**\n3. **Vital signs** â BP, HR, RR, SpOâ\n4. **Focused physical exam** â Lung sounds, JVD, edema, skin\n5. **12-lead ECG** â Starts the clock. Transmit if capable.\n6. **Oxygen** â Only if SpOâ <94%\n7. **Aspirin** â 324 mg chewed per protocol\n8. **Transport** â Don't delay for procedures\n9. **Notify hospital** â Activates the cath lab" }
  ],
  flashcards: [
    { front: "What does OPQRST stand for?", back: "Onset, Provocation/Palliation, Quality, Radiation, Severity, Time" },
    { front: "Classic cardiac chest pain quality?", back: "Pressure, squeezing, heaviness, tightness â not usually sharp or stabbing" },
    { front: "Where does cardiac pain classically radiate?", back: "Left arm, jaw, neck, or back" },
    { front: "Why do women have atypical MI presentations?", back: "More commonly present with nausea, fatigue, jaw/back pain â less classic pressure symptoms" },
    { front: "What is a silent MI?", back: "MI with minimal or no chest pain â more common in diabetics and elderly due to neuropathy" },
    { front: "Tearing/ripping pain radiating to the back suggests?", back: "Aortic dissection â BP may differ between arms. Surgical emergency." },
    { front: "What is pleuritic chest pain?", back: "Pain that worsens with breathing or movement â PE, pneumothorax, or musculoskeletal" },
    { front: "Why is early hospital notification important in ACS?", back: "Activates the cath lab â door-to-balloon time starts at first medical contact" },
    { front: "Aspirin dose for chest pain?", back: "324 mg chewed â not swallowed. Per protocol, no allergy, no active GI bleeding." },
    { front: "Non-modifiable cardiac risk factors?", back: "Age, male sex, family history of early cardiac disease" },
    { front: "Angina vs MI â the key difference?", back: "Angina: reversible ischemia, resolves with rest/nitro <15 min. MI: complete blockage, muscle dying." },
    { front: "What skin signs suggest serious cardiac compromise?", back: "Diaphoresis, pallor, cyanosis â poor perfusion or sympathetic activation" },
    { front: "Chest pain reproducible with palpation suggests?", back: "Musculoskeletal â true cardiac pain is not reproduced by pressing on the chest" },
    { front: "What is CABG?", back: "Coronary Artery Bypass Graft â open heart surgery to route blood around blocked arteries" },
    { front: "Chest pain after a long flight worsening with breathing suggests?", back: "Pulmonary embolism â immobility causes DVT that travels to the lungs" },
    { front: "Oxygen for chest pain with SpOâ 98%?", back: "No â hyperoxia may worsen ACS outcomes. Give Oâ only if SpOâ <94%." },
  ],
  quiz: [
    { q: "A 58-year-old diabetic reports 'indigestion' for 2 hours, diaphoretic, no chest pain. You should:", options: ["Treat for GI upset", "Dismiss â no chest pain present", "Treat as possible atypical ACS", "Obtain dietary history first"], answer: 2, explanation: "Diabetic neuropathy blunts pain. Epigastric discomfort + diaphoresis in a diabetic = ACS until proven otherwise." },
    { q: "Most concerning chest pain quality for cardiac origin:", options: ["Sharp, stabbing, worse with deep breath", "Pressure, squeezing, heaviness", "Burning worse after meals", "Aching reproducible with arm movement"], answer: 1, explanation: "Pressure, squeezing, heaviness = classic cardiac. Sharp pleuritic = PE/pneumothorax. Burning = GI. Reproducible = musculoskeletal." },
    { q: "Tearing chest pain to the back + unequal arm BPs suggests:", options: ["Anterior STEMI", "Pulmonary embolism", "Aortic dissection", "Musculoskeletal strain"], answer: 2, explanation: "Tearing/ripping pain radiating to the back + unequal arm pressures = aortic dissection â surgical emergency." },
    { q: "Early hospital notification for suspected STEMI:", options: ["Reserves parking for the ambulance", "Activates the cath lab â door-to-balloon time starts at first medical contact", "Gets billing ready", "Gets permission to transport"], answer: 1, explanation: "Early notification activates the cath lab. Every minute of delay = more dead heart muscle." },
    { q: "Aspirin works in ACS because:", options: ["Reduces fever", "Inhibits platelet aggregation â prevents clot from growing", "Relieves cardiac pain", "Opens blocked arteries"], answer: 1, explanation: "Aspirin inhibits platelet aggregation â platelets are the building blocks of the coronary clot." },
    { q: "52-year-old woman: jaw pain, nausea, fatigue, no chest pain, hypertension + smoking. You should:", options: ["Reassure â no chest pain", "Treat as possible atypical ACS", "Treat for dental emergency", "Give anti-nausea medications"], answer: 1, explanation: "Women commonly present with jaw pain, nausea, and fatigue as MI equivalents. Risk factors + symptoms = cardiac until proven otherwise." },
    { q: "Chest pain worse with breathing or palpation is:", options: ["Classic ACS", "More likely musculoskeletal or pleuritic", "Normal cardiac variation", "Cardiac tamponade sign"], answer: 1, explanation: "True cardiac ischemic pain doesn't change with breathing or palpation. Pleuritic = PE/pneumothorax. Reproducible with palpation = musculoskeletal." },
    { q: "Oxygen in chest pain â give when:", options: ["Always â all cardiac patients need high-flow Oâ", "Only if SpOâ below 94%", "Never â Oâ is harmful in ACS", "Only if patient requests it"], answer: 1, explanation: "Give Oâ only if SpOâ <94%. Hyperoxia causes coronary vasoconstriction and may worsen ACS outcomes." },
    { q: "Cardiac pain most classically radiates to:", options: ["Right arm and shoulder", "Left arm, jaw, or neck", "Lower back and hips", "Abdomen and groin"], answer: 1, explanation: "Cardiac pain follows dermatomes shared with the heart â left arm (ulnar surface), jaw, neck, left shoulder." },
    { q: "A non-modifiable cardiac risk factor:", options: ["Smoking", "Hypertension", "Family history of early cardiac disease", "Obesity"], answer: 2, explanation: "Family history, age, and sex cannot be changed. Smoking, hypertension, and obesity are all modifiable." },
    { q: "Angina vs MI:", options: ["Angina causes permanent damage", "Angina is reversible ischemia resolving with rest/nitro <15 min", "Angina only occurs at rest", "Angina requires emergency surgery"], answer: 1, explanation: "Angina = temporary ischemia, no permanent damage, resolves. MI = complete blockage, ongoing muscle death, doesn't resolve spontaneously." },
    { q: "Most concerning exam finding in cardiac patient:", options: ["Clear lung sounds", "Diaphoresis and JVD with peripheral edema", "BP 130/80", "Regular rate of 72"], answer: 1, explanation: "Diaphoresis = sympathetic activation. JVD + edema = right heart failure or fluid backup. Together = highly concerning." },
    { q: "Known angina patient â pain now severe, not relieved by 3 nitroglycerin:", options: ["Normal variation", "Unstable angina or STEMI â urgent transport", "Give a 4th nitroglycerin", "Likely musculoskeletal"], answer: 1, explanation: "Changing angina (severe, unresponsive to nitro) = unstable angina or STEMI. Acute coronary syndrome â urgent." },
    { q: "Most impactful action for STEMI outcomes:", options: ["Maximum aspirin dose", "Minimizing time from first contact to reperfusion", "Nitroglycerin before transport", "Complete 12-lead before moving patient"], answer: 1, explanation: "Time is muscle. Door-to-balloon time from first medical contact is the key metric. Early notification and rapid transport." },
    { q: "Patient rates chest pain 3/10. You should:", options: ["Consider low priority", "Not anchor on pain score â MI severity doesn't correlate with pain intensity", "Give less aspirin", "Reassess in 10 minutes"], answer: 1, explanation: "Pain scores are subjective and correlate poorly with MI severity. Assess all symptoms and findings together." },
  ]
};


const M2L3 = {
  moduleId: 2, id: 3,
  title: "ACS: Angina, STEMI & NSTEMI",
  subtitle: "The acute coronary syndrome spectrum â recognition and treatment",
  duration: "11 min",
  dispatch: {
    call: `"Unit 5, respond to 334 Industrial Parkway â 49-year-old male, 9/10 crushing chest pressure for 45 minutes, not relieved by rest."`,
    time: "8:18 AM", eta: "3 minutes",
    hook: "45 minutes of crushing pressure not relieved by rest. Heart muscle has been dying for 45 minutes. What are the next 10 minutes going to look like?",
    bridge: "ACS is the umbrella for everything from angina to massive heart attack. Understanding the spectrum determines your treatment."
  },
  content: [
    { heading: "The ACS Spectrum", body: "â¢ **Stable angina** â Predictable with exertion, relieved by rest/nitro <15 min. Warning sign, not emergency.\nâ¢ **Unstable angina** â At rest, new onset, or worsening. Plaque becoming unstable. Emergency.\nâ¢ **NSTEMI** â Partial blockage, elevated troponin, no ST elevation. Serious.\nâ¢ **STEMI** â Complete sudden blockage. ST elevation on ECG. Maximum damage occurring now. Every minute counts." },
    { heading: "Plaque Rupture", body: "1. Atherosclerosis â fatty plaque builds in coronary arteries over years\n2. Plaque rupture â fibrous cap tears\n3. Platelet aggregation â clot forms\n4. Partial blockage â unstable angina/NSTEMI\n5. Complete blockage â STEMI\n\nThis is why aspirin works â inhibits platelet aggregation.\n\nHeart muscle begins dying within 20-40 min of complete occlusion. After 6 hours most damage is done." },
    { heading: "Recognizing STEMI", body: "**Classic symptoms:**\nâ¢ Crushing pressure, severe\nâ¢ Left arm, jaw, neck radiation\nâ¢ Diaphoresis, nausea, vomiting\nâ¢ Sense of impending doom\nâ¢ Does NOT resolve with rest or nitroglycerin\n\n**ECG findings:**\nâ¢ ST elevation in 2+ contiguous leads\nâ¢ Reciprocal ST depression\nâ¢ New left bundle branch block (LBBB)\n\n**Complications:**\nâ¢ Cardiogenic shock\nâ¢ Ventricular fibrillation\nâ¢ Pulmonary edema" },
    { heading: "EMT Treatment of ACS", body: "**Position:** Sitting up or position of comfort\n\n**Oxygen:** Only if SpOâ <94%\n\n**Aspirin:** 324 mg chewed â per protocol, no allergy, no GI bleeding\n\n**Nitroglycerin:** Per protocol IF:\nâ¢ Patient has prescription OR your system carries it\nâ¢ SBP >90 mmHg\nâ¢ No PDE5 inhibitors in past 24-48 hours (Viagra/Cialis/Levitra)\nâ¢ 1 tablet SL every 5 min, up to 3 doses\n\n**12-lead ECG:** ASAP â transmit to hospital\n\n**Transport:** Rapid â notify hospital en route\n\n**Most important:** Early notification activates the cath lab." },
    { heading: "Cardiogenic Shock", body: "Heart muscle damage so extensive the heart can't pump enough to perfuse the body.\n\n**Signs:**\nâ¢ Hypotension (SBP <90)\nâ¢ Tachycardia\nâ¢ Pale, cool, clammy\nâ¢ Altered mental status\nâ¢ Pulmonary edema (crackles)\n\n40-80% mortality even with treatment. Leading cause of death from MI.\n\n**EMT management:**\nâ¢ High-flow oxygen\nâ¢ Rapid transport, ALS intercept\nâ¢ Do NOT give nitroglycerin â SBP already low\nâ¢ Do NOT give fluids â pump failure, not volume problem" }
  ],
  flashcards: [
    { front: "What is ACS?", back: "Acute Coronary Syndrome â umbrella covering unstable angina, NSTEMI, and STEMI" },
    { front: "STEMI vs NSTEMI?", back: "STEMI = complete blockage, ST elevation. NSTEMI = partial blockage, elevated enzymes, no ST elevation." },
    { front: "What causes ACS?", back: "Rupture of atherosclerotic plaque â platelet aggregation â clot â partial or complete coronary occlusion" },
    { front: "Why does aspirin help in ACS?", back: "Inhibits platelet aggregation at the plaque rupture site, preventing clot growth" },
    { front: "Nitroglycerin contraindications?", back: "SBP <90, PDE5 inhibitors in past 24-48 hours (Viagra/Cialis/Levitra)" },
    { front: "What is cardiogenic shock?", back: "Pump failure from MI â heart can't maintain cardiac output. Hypotension, tachycardia, pale/cool/clammy." },
    { front: "Why is early STEMI notification critical?", back: "Activates the cath lab â door-to-balloon must be <90 minutes from first medical contact" },
    { front: "What is unstable angina?", back: "Angina at rest, new onset, or worsening â plaque unstable but no enzyme elevation yet. Emergency." },
    { front: "Aspirin dose for ACS?", back: "324 mg chewed â faster absorption than swallowing" },
    { front: "Cardiogenic shock vs hypovolemic shock â treatment difference?", back: "Cardiogenic = pump failure, NO fluids. Hypovolemic = volume loss, GIVE fluids." },
    { front: "What is a 'sense of impending doom'?", back: "Classic STEMI symptom â patient feels they are about to die. Take it seriously." },
    { front: "STEMI ECG findings?", back: "ST elevation in 2+ contiguous leads, reciprocal depression, or new LBBB" },
    { front: "When does heart muscle begin dying after complete occlusion?", back: "Within 20-40 minutes â by 6 hours most salvageable muscle is gone without reperfusion" },
    { front: "What is atherosclerosis?", back: "Buildup of fatty plaque inside coronary artery walls â underlying cause of ACS" },
    { front: "Door-to-balloon time target for STEMI?", back: "90 minutes from first medical contact to balloon inflation in cath lab" },
    { front: "Nitroglycerin in cardiogenic shock?", back: "NEVER â causes vasodilation that will worsen already dangerous hypotension" },
  ],
  quiz: [
    { q: "Key difference between stable and unstable angina:", options: ["Unstable is more painful", "Unstable occurs at rest or worsens â plaque becoming unstable", "Stable requires transport", "Unstable shows ST elevation"], answer: 1, explanation: "Stable = predictable, same exertion, relieved by rest/nitro. Unstable = new, at rest, or worsening. Active plaque rupture. Emergency." },
    { q: "SBP of 82 â give nitroglycerin?", options: ["Yes", "No â SBP <90 is absolute contraindication", "Yes but half dose", "Only if prescribed"], answer: 1, explanation: "Nitro causes vasodilation, dropping BP. SBP of 82 is already hypotensive â nitro could cause fatal collapse." },
    { q: "Patient took Viagra 6 hours ago, now has chest pain. Nitro is:", options: ["Safe if SBP >90", "Contraindicated â PDE5 + nitro = severe refractory hypotension", "Safe after 4 hours", "Recommended in double dose"], answer: 1, explanation: "PDE5 inhibitors + nitroglycerin = profound, refractory hypotension. Contraindicated for 24h after sildenafil, 48h after tadalafil." },
    { q: "In cardiogenic shock:", options: ["Give 500 mL fluid bolus", "Avoid fluids â pump failure not volume depletion", "Give nitroglycerin", "Apply MAST trousers"], answer: 1, explanation: "Cardiogenic shock is pump failure, not volume deficit. Fluids worsen pulmonary edema. The heart needs the cath lab." },
    { q: "Most time-critical STEMI treatment:", options: ["Aspirin", "IV fluid bolus", "Coronary reperfusion in cath lab within 90 min", "12-lead ECG"], answer: 2, explanation: "Every minute = more dead myocardium. Goal: balloon inflation within 90 min of EMS contact." },
    { q: "Aspirin chewed rather than swallowed because:", options: ["Tastes better", "Faster absorption â buccal absorption begins immediately", "Swallowing contraindicated in chest pain", "Reduces GI side effects"], answer: 1, explanation: "Chewing achieves faster therapeutic platelet inhibition than waiting for GI absorption." },
    { q: "STEMI patient develops hypotension, tachycardia, crackles, clammy skin. This is:", options: ["Vagal response to pain", "Cardiogenic shock", "Anaphylaxis from aspirin", "Normal nitro response"], answer: 1, explanation: "Hypotension + tachycardia + poor perfusion + pulmonary edema in MI = cardiogenic shock. 40-80% mortality." },
    { q: "STEMI stands for:", options: ["Severe Thoracic Emergency MI", "ST Elevation Myocardial Infarction", "Subacute Total Epicardial MI", "Systemic Thrombotic Embolic MI"], answer: 1, explanation: "STEMI = ST Elevation Myocardial Infarction â complete coronary occlusion with ongoing muscle death." },
    { q: "Underlying cause of most ACS:", options: ["Coronary spasm from stress", "Atherosclerotic plaque rupture â platelet clot", "Viral myocarditis", "Hypertensive coronary dissection"], answer: 1, explanation: "Plaque ruptures â platelets aggregate â clot â blockage. Why aspirin and cath lab are the treatments." },
    { q: "Nitroglycerin not working for known angina patient suggests:", options: ["Expired nitro", "Possible STEMI â complete occlusion doesn't respond to nitro", "Give 2 more tablets", "Musculoskeletal pain"], answer: 1, explanation: "Nitro relieves angina by vasodilating partial blockages. No response = possibly complete blockage (STEMI)." },
    { q: "NSTEMI vs STEMI:", options: ["NSTEMI has no symptoms", "NSTEMI = partial blockage, elevated enzymes, no ST elevation", "NSTEMI is always less serious", "NSTEMI has different prehospital treatment"], answer: 1, explanation: "NSTEMI = partial blockage, elevated troponin, no ST elevation. Same prehospital care â distinction made at hospital." },
    { q: "Fluids in cardiogenic shock:", options: ["Raise BP appropriately", "Worsen pulmonary edema â the heart can't handle more volume", "Interact with aspirin", "Take too much time"], answer: 1, explanation: "Cardiogenic shock is pump failure not volume depletion. More fluid = more pulmonary edema." },
    { q: "'Sense of impending doom' during chest pain:", options: ["Unrelated psychiatric symptom", "Classic massive STEMI symptom â take very seriously", "Only in panic attacks", "From hyperventilation"], answer: 1, explanation: "Patients experiencing massive MI often describe profound certainty they are about to die. Well-recognized symptom of severe ischemia." },
    { q: "Primary goal of prehospital STEMI care:", options: ["Complete pain relief before arrival", "Minimize time to reperfusion via early notification and rapid transport", "Stabilize BP with fluids", "Complete past medical history"], answer: 1, explanation: "Time to reperfusion is the only thing limiting infarct size. Recognize it, activate the system, transport fast." },
    { q: "Nitroglycerin protocol: 3 tablets given:", options: ["All at once for severe pain", "One every 5 minutes up to 3 doses, monitoring BP each time", "Only if first tablet shows no response", "Only in hospital"], answer: 1, explanation: "1 tablet SL every 5 minutes up to 3 doses. Check BP before each â stop if SBP drops below 90." },
  ]
};


const M2L4 = {
  moduleId: 2, id: 4,
  title: "Cardiac Arrest & CPR",
  subtitle: "The chain of survival, high-quality CPR, and why the basics save lives",
  duration: "12 min",
  dispatch: {
    call: `"Unit 1, respond to 77 Parkview Avenue â CPR in progress, 68-year-old male, witnessed cardiac arrest, bystander CPR started."`,
    time: "6:55 PM", eta: "4 minutes",
    hook: "Witnessed arrest. Bystander CPR already going. That bystander just doubled his survival odds. When you walk in, what are the next 2 minutes going to look like?",
    bridge: "Cardiac arrest is the ultimate emergency. Scene management, team dynamics, high-quality CPR, rhythm analysis, defibrillation â get this right and people survive."
  },
  content: [
    { heading: "The Chain of Survival", body: "Survival depends on every link:\n\n1. **Early recognition and activation** â Call 911. Every minute without CPR = 7-10% decrease in survival.\n2. **Early CPR** â Bystander CPR doubles or triples survival. Maintains perfusion until defibrillator arrives.\n3. **Early defibrillation** â Only thing that fixes VF/pVT. AED within 3-5 min = 50-70% survival.\n4. **Advanced life support** â Medications, advanced airways (paramedic)\n5. **Post-cardiac arrest care** â ICU, targeted temperature management, cath lab\n\nYour job covers links 1-3 decisively." },
    { heading: "High-Quality CPR", body: "CPR quality determines outcomes. Substandard CPR kills people who would have survived.\n\n**Rate:** 100-120 compressions per minute\n**Depth:** At least 2 inches (5 cm), no more than 2.4 inches\n**Ratio:** 30 compressions : 2 breaths (basic airway)\n**After advanced airway:** Continuous compressions, 1 breath every 6 seconds\n**Minimize interruptions:** No pause >10 seconds\n**Full chest recoil:** Don't lean â prevents venous return\n**Rotate compressors:** Every 2 minutes â fatigue degrades quality within 2 min" },
    { heading: "Shockable vs Non-Shockable Rhythms", body: "**Shockable â defibrillate immediately:**\nâ¢ **Ventricular Fibrillation (VF)** â Chaotic, disorganized. Heart quivers. Most common initial rhythm in witnessed adult arrest.\nâ¢ **Pulseless VT (pVT)** â Fast, organized but ineffective. No pulse.\n\n**Not shockable:**\nâ¢ **Asystole** â Flat line. No electrical activity. CPR only.\nâ¢ **PEA** â Organized rhythm, no mechanical function. Look for reversible causes.\n\nAfter every shock: immediately resume CPR. Do NOT pause to check pulse." },
    { heading: "AED Operation", body: "1. Power on\n2. Attach pads â upper right chest (below clavicle), lower left lateral\n3. Clear â ensure no contact during analysis\n4. Analyze rhythm\n5. If shock advised â 'Clear!' visually confirm, shock\n6. Immediately resume CPR â no pulse check\n7. Reanalyze every 2 minutes\n\n**Pad considerations:**\nâ¢ Pacemaker/ICD â at least 1 inch away\nâ¢ Medication patch â remove and wipe before pads\nâ¢ Wet patient â dry chest first\nâ¢ Child <8 or <25 kg â pediatric pads if available" },
    { heading: "Team CPR", body: "**Compressor:** 100-120/min, 2-inch depth, full recoil, minimize pauses\n**Airway manager:** BVM, OPA/NPA, oxygen, monitors compressions\n**Rotate:** Every 2 minutes during rhythm check\n\n**Scene management:**\nâ¢ Load and go â minimize scene time\nâ¢ Limit interruptions â every pause costs perfusion pressure\nâ¢ Document: time of collapse, CPR start, first shock\n\n**When NOT to resuscitate:** Rigor mortis, dependent lividity, injuries incompatible with life, valid DNR" }
  ],
  flashcards: [
    { front: "5 links in Chain of Survival?", back: "Early recognition/activation â Early CPR â Early defibrillation â ALS â Post-arrest care" },
    { front: "Adult CPR compression rate?", back: "100-120 per minute" },
    { front: "Adult CPR compression depth?", back: "At least 2 inches (5 cm), no more than 2.4 inches" },
    { front: "CPR ratio with basic airway?", back: "30 compressions : 2 breaths" },
    { front: "Two shockable rhythms?", back: "Ventricular fibrillation (VF) and pulseless ventricular tachycardia (pVT)" },
    { front: "Two non-shockable rhythms?", back: "Asystole and PEA (Pulseless Electrical Activity)" },
    { front: "What to do immediately after defibrillation?", back: "Resume CPR immediately â no pulse check" },
    { front: "Why rotate compressors every 2 min?", back: "CPR quality degrades significantly with fatigue â even before the rescuer feels tired" },
    { front: "What is PEA?", back: "Pulseless Electrical Activity â organized rhythm on monitor, no mechanical pumping. Not shockable." },
    { front: "Effect of bystander CPR on survival?", back: "Doubles or triples survival by maintaining perfusion until AED/EMS arrives" },
    { front: "Maximum acceptable CPR pause?", back: "10 seconds â even for pulse checks and rhythm checks" },
    { front: "VF vs asystole?", back: "VF = chaotic electrical activity (shockable). Asystole = no electrical activity (not shockable)." },
    { front: "Why allow full chest recoil?", back: "Leaning prevents venous return, reducing coronary perfusion pressure" },
    { front: "AED pad distance from implanted device?", back: "At least 1 inch from pacemakers and ICDs" },
    { front: "Survival decrease per minute without defibrillation in VF?", back: "7-10% per minute without defibrillation" },
    { front: "Ventilation rate after advanced airway?", back: "Continuous compressions with 1 breath every 6 seconds (10/min)" },
  ],
  quiz: [
    { q: "High-quality CPR compression rate:", options: ["60-80/min", "80-100/min", "100-120/min", "As fast as possible"], answer: 2, explanation: "100-120/min â evidence-based. Under 100 = inadequate perfusion. Over 120 = incomplete recoil." },
    { q: "After defibrillation shock, immediately:", options: ["Check pulse", "Pause 30 seconds", "Resume CPR â no pulse check", "Deliver second shock"], answer: 2, explanation: "After every shock, resume CPR immediately. Heart needs time to recover â even if rhythm converts, won't perfuse for another 1-2 minutes." },
    { q: "Which rhythm should be defibrillated?", options: ["Asystole", "PEA", "Ventricular fibrillation", "Sinus bradycardia"], answer: 2, explanation: "Only VF and pulseless VT are shockable. Asystole and PEA won't benefit from shock." },
    { q: "Bystander CPR before EMS:", options: ["Dangerous without training", "Doubles or triples survival", "Only beneficial if perfect", "Should stop when EMS arrives"], answer: 1, explanation: "Bystander CPR keeps blood circulating to the brain. Even imperfect CPR dramatically improves outcomes." },
    { q: "Rotate compressors every 2 minutes because:", options: ["Protocol requirement", "Quality degrades with fatigue within 2 min even when rescuer feels fine", "Rescuer needs 5 min rest", "Improves patient comfort"], answer: 1, explanation: "Compression depth and rate decline significantly within 1-2 minutes. Rotate to maintain quality." },
    { q: "Full chest recoil is important because:", options: ["Prevents rib fractures", "Allows venous return, maintaining coronary perfusion pressure", "Gives compressor time to reposition", "Less important than depth"], answer: 1, explanation: "Leaning on the chest increases intrathoracic pressure, impedes venous return, reduces coronary perfusion." },
    { q: "AED pad placement:", options: ["Both on left chest", "Upper right chest and lower left lateral", "Both on back", "Upper left and lower right"], answer: 1, explanation: "One below right clavicle, one on lower left lateral chest. Maximizes current through ventricular myocardium." },
    { q: "PEA vs VF:", options: ["Same â both treated with shock", "PEA = organized rhythm, no function, not shockable. VF = chaotic, shockable.", "PEA caused by too much Oâ", "PEA only in children"], answer: 1, explanation: "PEA has organized electrical signal that isn't translating to mechanical contraction. Shocks won't help." },
    { q: "Maximum CPR interruption:", options: ["30 sec", "20 sec", "10 sec", "5 sec"], answer: 2, explanation: "No CPR pause >10 seconds. Every pause allows coronary perfusion pressure to drop toward zero." },
    { q: "Most common initial rhythm in witnessed adult arrest:", options: ["Asystole", "PEA", "Ventricular fibrillation", "Sinus tachycardia"], answer: 2, explanation: "VF is most common initial rhythm in witnessed adult arrest â why rapid defibrillation is critical." },
    { q: "30:2 CPR ratio means:", options: ["30 seconds CPR, 2 min breaks", "30 compressions then 2 ventilations", "30 ventilations then 2 compressions", "30% compression, 2% ventilation"], answer: 1, explanation: "30:2 = 30 compressions then 2 breaths. With advanced airway â compressions continuous." },
    { q: "Pediatric AED use:", options: ["Never use AED on children", "Use pediatric pads/attenuator for <8 years or <25 kg when available", "Adult pads full energy for all children", "Only >12 years"], answer: 1, explanation: "Pediatric pads reduce energy to appropriate level. If unavailable, adult AED is better than no defibrillation." },
    { q: "When NOT to initiate resuscitation:", options: ["Down more than 5 minutes", "Rigor mortis, lividity, injuries incompatible with life, valid DNR", "No bystander CPR before EMS", "Patient over 80"], answer: 1, explanation: "Obvious death signs and valid DNR are legitimate reasons. Duration alone is NOT sufficient." },
    { q: "Advanced airway placed â ventilation changes to:", options: ["30:2 continues", "1 breath every 6 seconds with continuous compressions", "Stop ventilations", "1 breath every 3 seconds"], answer: 1, explanation: "Advanced airway = compressions no longer need to pause for ventilations. 1 breath every 6 seconds continuously." },
    { q: "Chain of Survival concept:", options: ["Each provider performs every skill", "Survival depends on a time-sensitive sequence â each link matters", "Only hospital care matters", "Ambulance crew alone determines survival"], answer: 1, explanation: "Each link (recognition, CPR, defibrillation, ALS, post-arrest care) matters. A weak link breaks the chain." },
  ]
};


const M2L5 = {
  moduleId: 2, id: 5,
  title: "Cardiac Arrhythmias",
  subtitle: "Rhythms that kill, rhythms that warn, and what EMTs do about them",
  duration: "10 min",
  dispatch: {
    call: `"Unit 9, respond to 2201 Elm Street â 72-year-old female, palpitations and near-syncope, lightheaded 20 minutes, history of atrial fibrillation."`,
    time: "3:48 PM", eta: "5 minutes",
    hook: "Palpitations, near-syncope, known AFib. Her heart is misfiring. Too fast, too slow, or chaotically â and does it matter for what you do right now?",
    bridge: "You don't need to read an ECG to manage most arrhythmias. Stable or unstable? What's the rate? Is it perfusing? That's it."
  },
  content: [
    { heading: "Stable vs Unstable Framework", body: "**Stable arrhythmia** â Abnormal rhythm but adequate perfusion:\nâ¢ Alert and oriented\nâ¢ Blood pressure maintained\nâ¢ Mild or no chest pain\nâ¢ No pulmonary edema\nâ Transport, Oâ if needed, IV access, monitor\n\n**Unstable arrhythmia** â Rhythm causing hemodynamic compromise:\nâ¢ Altered mental status\nâ¢ Hypotension (SBP <90)\nâ¢ Chest pain\nâ¢ Shock signs or pulmonary edema\nâ Rapid transport, ALS intercept â needs cardioversion or pacing" },
    { heading: "Tachyarrhythmias", body: "**Sinus tachycardia** â Fast but normal rhythm. Response to something (pain, fever, hypovolemia). Treat the cause.\n\n**Atrial fibrillation (AFib)** â Chaotic atrial activity. Irregularly irregular. Palpitations, lightheadedness. Stroke risk from clot formation. Most common significant arrhythmia.\n\n**SVT (Supraventricular Tachycardia)** â Fast, narrow, regular (150-250/min). Abrupt onset. Vagal maneuvers may terminate it.\n\n**Ventricular Tachycardia (VT)** â Fast, wide-complex. Can have pulse (unstable) or no pulse (cardiac arrest â shock). Wide complex + unstable = treat as VT." },
    { heading: "Bradyarrhythmias", body: "**Sinus bradycardia** â Rate <60. Normal in athletes. Concerning if symptomatic or post-MI.\n\n**Heart blocks:**\nâ¢ **1st degree** â Prolonged PR, every beat conducts. Usually benign.\nâ¢ **2nd degree Mobitz I** â Progressive PR lengthening until a beat drops. Usually not emergency.\nâ¢ **2nd degree Mobitz II** â Random dropped beats. Can progress to complete block. More serious.\nâ¢ **3rd degree (Complete block)** â Atria and ventricles beat independently. Ventricular rate 20-40/min. Life-threatening.\n\n**Symptomatic bradycardia:** Signs: hypotension, AMS, syncope. Needs atropine (ALS) or pacing." },
    { heading: "Atrial Fibrillation", body: "**What happens:** Atria fire chaotically (350-600/min). AV node filters most but rate becomes irregularly irregular.\n\n**Why it matters:**\nâ¢ **Stroke risk** â Blood pools in left atrial appendage, forms clots, embolizes to brain\nâ¢ **Rapid rate** â Can cause hemodynamic instability\nâ¢ **New vs chronic** â New-onset more urgent. Many chronic AFib patients are asymptomatic.\n\n**In the field:** Most AFib is stable. IV access, Oâ if needed, transport. New onset or unstable = urgent.\n\nDon't convert AFib in the field â clot risk." },
    { heading: "What EMTs Do for Arrhythmias", body: "EMT management is about the patient, not fixing the rhythm:\n\n**All arrhythmia patients:**\nâ¢ Stable or unstable?\nâ¢ Oâ if SpOâ <94%\nâ¢ IV access per protocol\nâ¢ Transport with monitoring\nâ¢ ALS if unstable\n\n**Tachyarrhythmia:** Stable = transport/monitor. Unstable = ALS/rapid transport.\n\n**Bradyarrhythmia:** Stable = transport/monitor. Unstable = ALS immediately.\n\n**Your best tool is rapid transport to ALS care â not heroics in the field.**" }
  ],
  flashcards: [
    { front: "What is atrial fibrillation?", back: "Chaotic atrial electrical activity causing irregularly irregular ventricular rate â most common significant arrhythmia" },
    { front: "What makes an arrhythmia 'unstable'?", back: "AMS, hypotension (SBP <90), chest pain, shock, or pulmonary edema CAUSED BY the rhythm" },
    { front: "Defining ECG characteristic of AFib?", back: "Irregularly irregular rhythm â no two R-R intervals are the same" },
    { front: "What is SVT?", back: "Supraventricular Tachycardia â fast (150-250/min), narrow, regular rhythm from above the ventricles" },
    { front: "Complete (3rd degree) heart block?", back: "Atria and ventricles beat independently â ventricular escape 20-40/min. Life-threatening." },
    { front: "Why does AFib cause stroke?", back: "Blood pools in left atrial appendage forming clots that can embolize to the brain" },
    { front: "Sinus tach vs pathological tachycardia?", back: "Sinus tach is a normal response to an underlying cause (fever/pain/hypovolemia) â treat the cause" },
    { front: "Unstable tachyarrhythmia signs?", back: "Hypotension, AMS, chest pain, pulmonary edema from the fast rate" },
    { front: "What is symptomatic bradycardia?", back: "Heart rate too slow for adequate perfusion â hypotension, AMS, syncope. Needs atropine or pacing." },
    { front: "Ventricular tachycardia (VT)?", back: "Fast, wide-complex rhythm from ventricles. With pulse (unstable) or pulseless (cardiac arrest â shock)." },
    { front: "What is a Valsalva maneuver?", back: "Bearing down to stimulate vagus nerve â can terminate SVT by slowing AV conduction" },
    { front: "How does AFib feel to the patient?", back: "Palpitations, racing irregular heartbeat, lightheadedness â or sometimes no symptoms" },
    { front: "Mobitz II 2nd degree heart block?", back: "Random dropped beats without PR prolongation â can progress unpredictably to complete block" },
    { front: "EMT treatment of unstable arrhythmia?", back: "Oâ, IV access, rapid transport, ALS intercept â cardioversion/pacing are ALS interventions" },
    { front: "New vs chronic AFib â urgency?", back: "New-onset more urgent â may be hemodynamically unstable. Chronic patients often asymptomatic." },
    { front: "Irregularly irregular means?", back: "No consistent pattern â beat spacing varies randomly. Hallmark of AFib." },
  ],
  quiz: [
    { q: "AFib patient, alert, BP 130/80, mild palpitations. This is:", options: ["Unstable â defibrillate", "Stable â transport with monitoring", "Emergency requiring cardioversion", "Normal â no treatment"], answer: 1, explanation: "Stable: alert, BP maintained, no hemodynamic compromise. Transport with monitoring. No field cardioversion for stable AFib." },
    { q: "Heart rate 180, confused, BP 72/40, pulmonary edema. This is:", options: ["Stable â transport without urgency", "Unstable â ALS intercept immediately", "Normal â tachycardia expected with low BP", "Stable â give fluids"], answer: 1, explanation: "Unstable tachyarrhythmia: AMS + hypotension + pulmonary edema from the fast rate. Needs cardioversion â ALS immediately." },
    { q: "AFib increases stroke risk because:", options: ["Fast rate damages brain vessels", "Blood pools in left atrial appendage forming clots that embolize to the brain", "AFib causes hypertension", "Irregular rhythm reduces cerebral flow"], answer: 1, explanation: "Atrial fibrillation causes blood to stagnate in the left atrial appendage. Clots form and travel to the brain." },
    { q: "Wide complex tachycardia in unstable patient:", options: ["SVT â try vagal maneuvers", "Sinus tach â treat cause", "VT â ALS for cardioversion", "AFib â rate control"], answer: 2, explanation: "Wide complex + unstable = VT until proven otherwise. Needs synchronized cardioversion (ALS)." },
    { q: "HR 48, asymptomatic, well-trained runner:", options: ["Symptomatic bradycardia â give atropine", "Complete heart block", "Normal athlete sinus bradycardia", "PEA â start CPR"], answer: 2, explanation: "Athletes develop sinus bradycardia from vagal tone. Asymptomatic rate of 48 in a fit person is normal." },
    { q: "Complete (3rd degree) heart block is serious because:", options: ["Causes AFib", "Atria and ventricles beat independently â ventricular escape only 20-40/min", "Only affects pacemaker cells", "Causes immediate arrest"], answer: 1, explanation: "No atrial impulses reach ventricles. Ventricular escape at 20-40/min â far too slow for adequate perfusion." },
    { q: "SVT can sometimes be terminated by:", options: ["Defibrillation", "Aspirin", "Vagal maneuvers (Valsalva)", "Ice on the chest"], answer: 2, explanation: "Vagal maneuvers stimulate the vagus nerve to slow AV node conduction, potentially terminating re-entrant SVT." },
    { q: "Most common significant arrhythmia in EMS:", options: ["Ventricular fibrillation", "Atrial fibrillation", "Complete heart block", "SVT"], answer: 1, explanation: "AFib affects millions of Americans and is extremely common in EMS, especially in elderly patients." },
    { q: "Sinus tachycardia (rate 115) in trauma:", options: ["Primary arrhythmia requiring treatment", "Compensatory response to hemorrhage or pain â treat the cause", "AFib with rapid response", "VT â prepare for defibrillation"], answer: 1, explanation: "Sinus tachycardia in trauma = compensatory hemorrhagic response. Treat the cause, not the rate." },
    { q: "Unstable bradycardia (HR 28, BP 60/40, confused):", options: ["Observation only", "ALS intercept â atropine and possible pacing", "Two fluid boluses", "Defibrillation"], answer: 1, explanation: "Symptomatic bradycardia + hemodynamic compromise needs atropine or pacing â ALS interventions." },
    { q: "AFib 'irregularly irregular' means:", options: ["Every other beat dropped", "No consistent pattern â R-R varies randomly from chaotic atrial firing", "Rate changes with breathing", "Alternate P waves differ"], answer: 1, explanation: "Atria fire 350-600/min chaotically. AV node conducts random impulses â completely unpredictable beat spacing." },
    { q: "EMT management of stable tachyarrhythmia:", options: ["Attempt cardioversion", "Antiarrhythmic medications", "Oâ if needed, IV access, transport with monitoring", "Vagal maneuvers then adenosine"], answer: 2, explanation: "EMTs manage arrhythmias supportively â oxygen, IV, monitoring, transport. Cardioversion and antiarrhythmics are ALS." },
    { q: "Stable AFib patient wants to refuse transport. You should:", options: ["Honor the refusal", "Explain stroke risk â strongly recommend transport, document clearly if refused", "Agree and schedule follow-up", "Defer to medical direction entirely"], answer: 1, explanation: "Even stable AFib warrants evaluation â especially new onset. Stroke risk is significant. Explain, document." },
    { q: "Mobitz II is more concerning than Mobitz I because:", options: ["Faster ventricular rate", "Can progress unpredictably to complete heart block", "Causes AFib", "Only in pediatrics"], answer: 1, explanation: "Mobitz II drops beats randomly without warning and can abruptly progress to complete block." },
    { q: "Why not convert AFib in the field?", options: ["No equipment", "AFib clots can embolize during cardioversion â causing stroke", "Field cardioversion always fails", "AFib resolves spontaneously"], answer: 1, explanation: "Blood pools in atria forming clots. Cardioversion restores atrial contraction â which can eject clots into circulation, causing stroke. Anticoagulation needed first." },
  ]
};


const M2L6 = {
  moduleId: 2, id: 6,
  title: "Heart Failure & Hypertensive Emergencies",
  subtitle: "When the pump fails and when pressure becomes a weapon",
  duration: "10 min",
  video: {
    youtubeId: "2aiRpr5UCZs",
    caption: "What is heart failure? â 7 min Â· Pathophysiology, cardiac output, and compensation",
    source: "Khan Academy",
    duration: "7 min video"
  },
  dispatch: {
    call: `"Unit 14, respond to 5501 Westgate Blvd â 77-year-old male, worsening shortness of breath 3 days, woke gasping last night, sleeping in a recliner. History of CHF."`,
    time: "7:15 AM", eta: "6 minutes",
    hook: "Can't breathe lying flat. Sleeping in a recliner. Three days worsening. CHF decompensating â quietly drowning for 72 hours.",
    bridge: "Heart failure and hypertensive emergencies are among the most common serious cardiac presentations in EMS. Understanding the mechanism helps you manage the patient."
  },
  content: [
    { heading: "Heart Failure: Left vs Right", body: "**Left heart failure (most common):**\nâ¢ LV can't pump effectively â blood backs up into pulmonary circulation â fluid into alveoli â **pulmonary edema**\nâ¢ Signs: dyspnea, orthopnea, PND, crackles, frothy sputum\n\n**Right heart failure:**\nâ¢ RV can't pump â blood backs up into systemic veins\nâ¢ Signs: JVD, bilateral ankle edema, ascites, hepatomegaly\nâ¢ Often caused by left heart failure or COPD (cor pulmonale)\n\n**CHF** = both sides failing\n\n**Ejection fraction (EF)** â % pumped out per beat. Normal >55%. Heart failure with reduced EF <40%." },
    { heading: "Acute Decompensated CHF", body: "**Classic presentation:**\nâ¢ Severe dyspnea, worse lying flat (orthopnea)\nâ¢ Woke up gasping at night (PND)\nâ¢ Sleeping upright in recliner to breathe\nâ¢ Bilateral crackles at bases\nâ¢ Pink frothy sputum (severe)\nâ¢ Marked anxiety â feels like drowning\nâ¢ JVD, bilateral ankle edema, weight gain\nâ¢ Tachycardia, may be hypertensive\n\n**Common decompensation triggers:**\nâ¢ Not taking medications (most common)\nâ¢ Too much sodium/fluid intake\nâ¢ New arrhythmia (especially AFib)\nâ¢ New MI\nâ¢ Infection" },
    { heading: "EMT Management of Acute CHF", body: "Goal: reduce cardiac workload and pulmonary fluid.\n\n1. **Position upright** â Legs dangling if possible (reduces preload)\n2. **High-flow oxygen** â NRB 10-15 L/min, target SpOâ â¥94%\n3. **CPAP** â If in scope. Highly effective â splints alveoli, reduces work of breathing\n4. **IV access** â Per protocol\n5. **Nitroglycerin** â If SBP >100 (CHF protocol) â reduces preload and afterload\n6. **Rapid transport** â Needs diuretics (furosemide) â ALS/hospital\n7. **Do NOT lay flat** â Worsens immediately\n8. **Do NOT give fluids** â They are drowning in fluid" },
    { heading: "Hypertensive Emergencies", body: "High BP becomes emergency when causing end-organ damage.\n\n**Hypertensive urgency:** BP >180/120 without organ damage. Not immediately life-threatening.\n\n**Hypertensive emergency:** High BP WITH organ damage:\nâ¢ **Brain** â Encephalopathy, hemorrhagic stroke\nâ¢ **Heart** â MI, acute CHF, aortic dissection\nâ¢ **Kidneys** â Acute renal failure\nâ¢ **Eyes** â Papilledema\n\n**Classic presentations:**\nâ¢ Severe headache + very high BP\nâ¢ Confusion with extreme hypertension\nâ¢ Chest pain with BP >200 systolic\nâ¢ Visual changes\n\n**EMT management:** Calm environment, position of comfort, Oâ if needed, IV access, rapid transport. Do NOT rapidly lower BP in field." },
    { heading: "CHF vs COPD: Key Differences", body: "| Feature | CHF/Pulmonary Edema | COPD exacerbation |\n|---|---|---|\n| Lung sounds | Crackles (wet) | Wheezing (dry) |\n| History | Cardiac/HTN | Smoking, COPD dx |\n| Position | Orthopnea | Any position |\n| Sputum | Pink, frothy | Colored, thick |\n| Edema | Bilateral ankle | Uncommon |\n| JVD | Often present | Less common |\n\n**Overlap problem:** Many elderly patients have BOTH. Look for the dominant picture. When uncertain: NRB + upright positioning help both." }
  ],
  flashcards: [
    { front: "What is orthopnea?", back: "Inability to breathe lying flat â classic left heart failure. Patient sleeps in chair or recliner." },
    { front: "What is PND?", back: "Paroxysmal Nocturnal Dyspnea â waking gasping from sleep from fluid redistribution when lying flat" },
    { front: "What causes pulmonary edema in left heart failure?", back: "LV fails â blood backs up into pulmonary circulation â fluid leaks into alveoli" },
    { front: "Signs of right heart failure?", back: "JVD, bilateral ankle/leg edema, ascites, hepatomegaly â systemic venous backup" },
    { front: "Most common CHF decompensation trigger?", back: "Non-compliance with medications â patient stops diuretics, ACE inhibitors, or beta blockers" },
    { front: "Why sit a CHF patient bolt upright with legs dangling?", back: "Reduces venous return (preload) to the already overloaded failing heart" },
    { front: "CPAP in CHF?", back: "Splints alveoli open with positive pressure â improves oxygenation and reduces respiratory work" },
    { front: "What is a hypertensive emergency?", back: "Very high BP (>180/120) WITH end-organ damage â brain, heart, kidneys, eyes" },
    { front: "Why NOT rapidly lower BP in hypertensive emergency?", back: "Rapid reduction causes ischemia to organs adapted to high pressure â controlled lowering in hospital is safer" },
    { front: "CHF crackles vs COPD wheezing?", back: "Crackles = wet fluid sound (CHF/pulmonary edema). Wheezing = dry musical bronchospasm (COPD/asthma)." },
    { front: "What is ejection fraction?", back: "Percentage of blood pumped out per beat. Normal >55%. Heart failure <40%." },
    { front: "Why no fluids for CHF pulmonary edema?", back: "Already excess fluid â adding more worsens alveolar flooding" },
    { front: "What is cor pulmonale?", back: "Right heart failure caused by pulmonary hypertension from lung disease (usually COPD)" },
    { front: "Nitroglycerin in CHF works by?", back: "Reducing preload (venous dilation) and afterload (arterial dilation) â decreasing cardiac workload" },
    { front: "Severe headache + BP 220/130 suggests?", back: "Hypertensive emergency â possible encephalopathy or intracranial hemorrhage. Urgent transport." },
    { front: "Common CHF decompensation triggers?", back: "Med non-compliance, excess sodium/fluid, new AFib, new MI, infection" },
  ],
  quiz: [
    { q: "CHF patient with severe dyspnea and crackles. Best position:", options: ["Supine, head elevated 15Â°", "Sitting upright, legs dangling", "Recovery position left side", "Trendelenburg"], answer: 1, explanation: "Upright with legs dangling reduces venous return (preload). Lying flat dramatically worsens pulmonary edema." },
    { q: "CHF patient with bilateral crackles, SpOâ 86%, CPAP available:", options: ["Nasal cannula 2 L/min only", "Apply CPAP â highly effective for CHF", "NRB but avoid CPAP in heart failure", "Wait for ALS"], answer: 1, explanation: "CPAP is one of the most effective prehospital interventions for acute CHF â splints alveoli open, dramatically improves gas exchange." },
    { q: "Right heart failure causes all EXCEPT:", options: ["JVD", "Bilateral ankle edema", "Pulmonary edema", "Ascites"], answer: 2, explanation: "Pulmonary edema = LEFT heart failure (backup into lungs). Right failure = systemic venous backup: JVD, edema, ascites." },
    { q: "77-year-old CHF patient woke at 3 AM gasping. This is called:", options: ["Orthopnea", "PND (Paroxysmal Nocturnal Dyspnea)", "Central sleep apnea", "ARDS"], answer: 1, explanation: "PND â when lying flat, fluid redistributes, increasing pulmonary venous pressure. Patient wakes gasping." },
    { q: "Most common reason CHF patients decompensate:", options: ["New MI", "Exercise", "Non-compliance with medications", "Excessive Oâ"], answer: 2, explanation: "Most CHF decompensations = patients stopping medications (diuretics, ACE inhibitors, beta blockers)." },
    { q: "Hypertensive emergency vs urgency:", options: ["Urgency has higher numbers", "Emergency = high BP + end-organ damage (brain/heart/kidneys)", "Clinically identical", "Emergency only in elderly"], answer: 1, explanation: "Emergency = high BP + organ damage (stroke, encephalopathy, MI, renal failure). Urgency = high BP without damage." },
    { q: "Fluids for CHF patient in pulmonary edema:", options: ["Yes â improves cardiac output", "No â excess fluid, worsens alveolar flooding", "Yes â normal saline only", "Only if BP <90"], answer: 1, explanation: "CHF is excess fluid in wrong place. Adding more worsens pulmonary congestion. Treatment is REMOVING fluid." },
    { q: "Nitroglycerin benefits CHF by:", options: ["Increasing heart rate", "Reducing preload and afterload â decreasing cardiac workload", "Removing fluid from alveoli", "Increasing renal perfusion"], answer: 1, explanation: "Nitro = vasodilator. Dilates veins (preload) and arteries (afterload) â both reduce cardiac work." },
    { q: "BP 230/130 with severe headache and confusion:", options: ["Normal variation", "Hypertensive emergency â possible encephalopathy or ICH", "Hypertensive urgency â outpatient", "Anxiety-related"], answer: 1, explanation: "Neurological symptoms + extreme BP = hypertensive emergency. Urgent transport â do not rapidly lower in field." },
    { q: "Rapid BP reduction in hypertensive emergency is dangerous because:", options: ["High BP is always beneficial", "Organs adapted to high pressure become ischemic if BP drops too quickly", "Field equipment can't safely do it", "BP always normalizes"], answer: 1, explanation: "Chronic hypertension shifts vascular autoregulation â organs need higher pressure to perfuse. Rapid reduction causes relative ischemia." },
    { q: "CHF patient lung sounds are best described as:", options: ["Wheezing throughout", "Stridor", "Crackles â wet crackling from fluid in alveoli", "Silent"], answer: 2, explanation: "Pulmonary edema = crackles (rales) â wet crackling as air moves through fluid-filled alveoli. Not wheezing." },
    { q: "Best differentiator between CHF and COPD exacerbation:", options: ["Identical â impossible to differentiate", "CHF: orthopnea, JVD, bilateral edema, crackles. COPD: wheezing, smoking history, barrel chest.", "COPD always has faster HR", "CHF always occurs at night"], answer: 1, explanation: "Look at the complete picture. CHF: can't lie flat, JVD, ankle swelling, crackles, cardiac history. COPD: wheezing, smoker, barrel chest." },
    { q: "CPAP works in CHF by:", options: ["Delivering bronchodilators", "Positive pressure splinting alveoli open, improving gas exchange", "Suctioning fluid", "Delivering medications transdermally"], answer: 1, explanation: "CPAP positive pressure keeps fluid-flooded alveoli from collapsing, improving surface area for gas exchange." },
    { q: "Most urgent transport needed for:", options: ["Stable CHF, mild exertional dyspnea", "Decompensated CHF, SpOâ 82%, frothy sputum, BP 80/50", "Hypertensive urgency, no symptoms", "Stable AFib, palpitations"], answer: 1, explanation: "SpOâ 82% + frothy sputum + hypotension = critical decompensated CHF with cardiogenic shock. Immediate transport, ALS, CPAP." },
    { q: "Cor pulmonale:", options: ["LV failure from CAD", "RV failure from pulmonary hypertension due to lung disease", "Heart failure from viral myocarditis", "Cardiac tamponade"], answer: 1, explanation: "Cor pulmonale = right heart failure secondary to pulmonary hypertension â most commonly from COPD." },
  ]
};


const M2L7 = {
  moduleId: 2, id: 7,
  title: "Cardiology Module Quiz",
  subtitle: "Cumulative assessment â everything from Module 2: Cardiology",
  duration: "15 min",
  dispatch: {
    call: `"All units, Module 2 Assessment. Cardiology â heart anatomy, chest pain, ACS, CPR, arrhythmias, heart failure, and hypertensive emergencies."`,
    time: "NOW", eta: "Your call",
    hook: "Six lessons of cardiology. The most tested content on the NREMT. Let's see where you stand.",
    bridge: "This quiz pulls from all six Cardiology lessons â 20-question bank, 10 random per session. Know this cold."
  },
  content: [
    { heading: "What This Quiz Covers", body: "Module 2 â Cardiology:\n\nâ¢ **Lesson 1** â Heart anatomy (chambers, valves, coronary arteries, conduction, cardiac output)\nâ¢ **Lesson 2** â Chest pain assessment (OPQRST, risk factors, differentials)\nâ¢ **Lesson 3** â ACS: Angina, STEMI & NSTEMI\nâ¢ **Lesson 4** â Cardiac arrest & CPR (Chain of Survival, high-quality CPR, AED, rhythms)\nâ¢ **Lesson 5** â Cardiac arrhythmias (stable vs unstable, AFib, tachyarrhythmias, bradyarrhythmias)\nâ¢ **Lesson 6** â Heart failure & hypertensive emergencies\n\n10 questions drawn randomly." }
  ],
  flashcards: [
    { front: "Left ventricle's job?", back: "Pump oxygenated blood to entire body via aorta â most muscular chamber" },
    { front: "OPQRST?", back: "Onset, Provocation, Quality, Radiation, Severity, Time" },
    { front: "Two shockable rhythms?", back: "VF (ventricular fibrillation) and pVT (pulseless ventricular tachycardia)" },
    { front: "Adult CPR rate and depth?", back: "100-120/min, at least 2 inches, full recoil, <10 sec pauses" },
    { front: "Nitroglycerin contraindications?", back: "SBP <90, PDE5 inhibitors (Viagra/Cialis/Levitra) in past 24-48 hours" },
    { front: "Signs of cardiogenic shock?", back: "Hypotension, tachycardia, pale/cool/clammy, AMS, pulmonary edema" },
    { front: "AFib characteristic?", back: "Irregularly irregular rhythm" },
    { front: "Orthopnea means?", back: "Cannot breathe lying flat â classic left heart failure" },
    { front: "STEMI treatment priority?", back: "Early hospital notification â door-to-balloon <90 minutes" },
    { front: "Unstable arrhythmia signs?", back: "AMS, hypotension, chest pain, pulmonary edema CAUSED BY the rhythm" },
    { front: "Aspirin dose and method?", back: "324 mg chewed â inhibits platelet aggregation" },
    { front: "CHF â why no fluids?", back: "Already excess fluid â adding more worsens pulmonary edema" },
    { front: "The widow maker?", back: "Left anterior descending (LAD) â blockage = massive anterior MI" },
    { front: "CPR rotation interval?", back: "Every 2 minutes â quality degrades with fatigue" },
    { front: "PEA â shockable?", back: "NOT shockable â organized rhythm, no mechanical function. Find reversible causes." },
  ],
  quiz: [
    { q: "Most muscular heart chamber:", options: ["Right ventricle", "Left ventricle â pumps to entire body against systemic resistance", "Left atrium", "Right atrium"], answer: 1, explanation: "Left ventricle has thickest walls â must pump against systemic vascular resistance." },
    { q: "58-year-old, 3/10 chest pressure, left arm radiation, diaphoresis:", options: ["Lower concern â pain only 3/10", "Treat as ACS â pain score doesn't correlate with MI severity", "Monitor 10 more minutes", "Musculoskeletal â mild pain inconsistent"], answer: 1, explanation: "Diaphoresis + radiation + pressure quality = ACS. Pain scores correlate poorly with MI severity." },
    { q: "High-quality CPR:", options: ["100-120/min, 2+ inches, full recoil, <10 sec pauses", "80-100/min, 1.5 inches, every 5 compressions pause", "120-140/min, max depth, 15 sec checks", "60-80/min, 2 inches, 30 sec breaks"], answer: 0, explanation: "AHA: 100-120/min, at least 2 inches, full recoil, minimize interruptions, rotate every 2 min." },
    { q: "Nitroglycerin CONTRAINDICATED when:", options: ["Patient took aspirin", "SpOâ above 94%", "SBP <90 OR PDE5 inhibitor in past 24-48 hours", "History of AFib"], answer: 2, explanation: "SBP <90 = cardiovascular collapse risk. PDE5 inhibitors + nitro = severe refractory hypotension." },
    { q: "After defibrillation shock:", options: ["Check pulse to assess success", "Deliver second shock", "Resume CPR immediately for 2 minutes", "Stop and assess rhythm"], answer: 2, explanation: "Resume CPR immediately after every shock. Don't check pulse." },
    { q: "CHF patient â best position:", options: ["Supine for venous return", "Trendelenburg", "Sitting upright with legs dangling", "Left lateral recumbent"], answer: 2, explanation: "Upright with legs dependent reduces preload (venous return) to the failing heart." },
    { q: "AFib increases stroke risk because:", options: ["Fast rate damages brain vessels", "Blood pools in left atrial appendage forming clots that embolize to brain", "Causes hypertension", "Reduces cerebral flow directly"], answer: 1, explanation: "Stagnant blood in left atrial appendage â clot â brain embolism â stroke." },
    { q: "Door-to-balloon time goal for STEMI:", options: ["30 minutes", "90 minutes from first medical contact", "2 hours from symptom onset", "4 hours from hospital arrival"], answer: 1, explanation: "AHA: first medical contact to balloon inflation within 90 minutes. Your notification starts the clock." },
    { q: "Cardiogenic vs hypovolemic shock:", options: ["Both treated with aggressive fluids", "Cardiogenic = pump failure, no fluids. Hypovolemic = volume loss, give fluids.", "Cardiogenic has faster HR", "Clinically identical"], answer: 1, explanation: "Cardiogenic shock = pump failure. Fluids worsen pulmonary edema. Needs cath lab, not saline." },
    { q: "Unstable arrhythmia defined by:", options: ["Any rate >100 or <60", "AMS, hypotension, chest pain, or pulmonary edema CAUSED BY the rhythm", "Irregular rhythm regardless of symptoms", "Any rhythm needing medication"], answer: 1, explanation: "Stable vs unstable = hemodynamics. Is the rhythm causing compromise? That's what matters." },
    { q: "CPAP effective in acute CHF because:", options: ["Delivers bronchodilators", "Positive pressure splints alveoli open, improving gas exchange", "Removes fluid mechanically", "Increases cardiac output directly"], answer: 1, explanation: "CPAP keeps fluid-flooded alveoli from collapsing, dramatically improving surface area for gas exchange." },
    { q: "BP 235/130 + severe headache + visual changes:", options: ["Observation, recheck 30 min", "Urgent transport â hypertensive emergency with neurological involvement", "Rapid IV BP reduction in field", "Aspirin and nitroglycerin"], answer: 1, explanation: "Neurological symptoms + extreme BP = hypertensive emergency. Transport urgently â controlled reduction in hospital." },
    { q: "Chain of Survival starts with:", options: ["AED application", "IV access", "Early recognition and calling 911", "Advanced airway"], answer: 2, explanation: "Recognition comes first. Every minute without CPR decreases survival 7-10%. Bystander activation is the foundation." },
    { q: "Plaque rupture in coronary artery leads to:", options: ["Immediate VF", "Platelet aggregation â clot â partial or complete blockage â ACS", "Coronary spasm and vasodilation", "Immediate heart block"], answer: 1, explanation: "Plaque rupture â platelet aggregation â clot. Partial = NSTEMI/unstable angina. Complete = STEMI." },
    { q: "Non-shockable rhythm:", options: ["VF", "Pulseless VT", "PEA", "Ventricular flutter"], answer: 2, explanation: "PEA has organized electrical activity â defibrillation won't help. Find and treat reversible causes." },
    { q: "Diabetic, nausea + epigastric discomfort + diaphoresis, no chest pain:", options: ["GI emergency only", "Clear as non-cardiac", "Possible atypical ACS â diabetics frequently have silent MI", "Hypoglycemia only"], answer: 2, explanation: "Diabetic neuropathy blunts cardiac pain. Epigastric + diaphoresis in diabetic = ACS until proven otherwise." },
    { q: "Right heart failure signs â all EXCEPT:", options: ["JVD", "Bilateral ankle edema", "Crackles throughout both lungs", "Ascites"], answer: 2, explanation: "Bilateral crackles = LEFT failure (pulmonary edema). Right failure = systemic venous backup: JVD, edema, ascites." },
    { q: "Aspirin dose for ACS:", options: ["81 mg swallowed", "324 mg chewed", "650 mg swallowed", "162 mg sublingual"], answer: 1, explanation: "324 mg chewed â faster buccal absorption than swallowing. Inhibits platelet aggregation at rupture site." },
    { q: "After advanced airway during CPR â ventilation changes to:", options: ["30:2 continues", "Continuous compressions, 1 breath every 6 seconds", "Stop ventilations", "2 breaths every 15 compressions"], answer: 1, explanation: "Advanced airway = compressions can be continuous. 1 breath every 6 seconds asynchronously." },
    { q: "Primary EMT role in STEMI:", options: ["Administer thrombolytics", "Perform cardioversion", "Recognize, give aspirin, notify hospital, rapid transport", "Defibrillate for ST changes"], answer: 2, explanation: "EMT STEMI care: recognize, aspirin, hospital notification to activate cath lab, rapid transport. Definitive treatment at hospital." },
  ]
};


const LESSON_DATA = {
  "0-1": L1, "0-2": L2, "0-3": L3, "0-4": L4, "0-5": L5, "0-6": L6,
  "1-1": M1L1, "1-2": M1L2, "1-3": M1L3, "1-4": M1L4, "1-5": M1L5, "1-6": M1L6, "1-7": M1L7,
  "2-1": M2L1, "2-2": M2L2, "2-3": M2L3, "2-4": M2L4, "2-5": M2L5, "2-6": M2L6, "2-7": M2L7
};

export { MODULES, LESSON_DATA };
