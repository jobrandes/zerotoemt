// Zero to EMT -- NREMT Exam Simulator Question Bank
// Last reviewed: March 2026
// Aligned to NREMT EMT Practice Analysis content outline
// Domain weights: Medical 27%, Cardiology 20%, Airway 18%, Trauma 14%, Operations 10%, Special 11%
// Pull 120 from this bank per attempt, weighted by domain

export const EXAM_DOMAINS = {
  airway: { label: "Airway", color: "#3b82f6", weight: 0.18, target: 22 },
  cardiology: { label: "Cardiology", color: "#f59e0b", weight: 0.20, target: 24 },
  trauma: { label: "Trauma", color: "#e8193c", weight: 0.14, target: 17 },
  medical: { label: "Medical", color: "#8b5cf6", weight: 0.27, target: 32 },
  operations: { label: "Operations", color: "#0f1f3d", weight: 0.10, target: 13 },
  special: { label: "Special Populations", color: "#16a34a", weight: 0.11, target: 12 },
};

export const EXAM_QUESTIONS = [

  // ============================================================
  // AIRWAY -- 30 questions
  // ============================================================

  {
    id: "air-001", domain: "airway",
    q: "You arrive to find an unresponsive adult male. He is not breathing. Your first action is:",
    options: [
      "Begin chest compressions immediately",
      "Open the airway using a head-tilt chin-lift",
      "Insert a nasopharyngeal airway",
      "Apply a non-rebreather mask at 15 LPM"
    ],
    answer: 1,
    explanation: "For an unresponsive patient, airway opening comes before ventilation assessment. Head-tilt chin-lift is the first maneuver for a non-trauma patient. Once the airway is open, you assess for breathing."
  },
  {
    id: "air-002", domain: "airway",
    q: "A patient with suspected cervical spine injury is unresponsive and not breathing. The correct airway maneuver is:",
    options: [
      "Head-tilt chin-lift -- always used for unresponsive patients",
      "Jaw thrust without head tilt",
      "Nasopharyngeal airway insertion only",
      "Hyperextend the neck to maximize airway opening"
    ],
    answer: 1,
    explanation: "Jaw thrust without head tilt is the preferred maneuver when cervical spine injury is suspected. It opens the airway by displacing the mandible forward without moving the cervical spine."
  },
  {
    id: "air-003", domain: "airway",
    q: "You are ventilating an adult patient with a BVM. The correct rate is:",
    options: [
      "8-10 breaths per minute",
      "10-12 breaths per minute",
      "12-20 breaths per minute",
      "20-24 breaths per minute"
    ],
    answer: 1,
    explanation: "Adult BVM ventilation rate is 10-12 breaths per minute (one breath every 5-6 seconds). Each breath should be delivered over 1 second and produce visible chest rise. Over-ventilation is a common and dangerous error."
  },
  {
    id: "air-004", domain: "airway",
    q: "An OPA is contraindicated in which patient?",
    options: [
      "An unresponsive patient with no gag reflex",
      "A patient with dentures",
      "A semiconscious patient who responds to painful stimuli",
      "A patient with facial trauma"
    ],
    answer: 2,
    explanation: "OPAs are contraindicated in patients with an intact gag reflex. A semiconscious patient who responds to painful stimuli likely has a gag reflex and may vomit if an OPA is inserted. Use an NPA instead."
  },
  {
    id: "air-005", domain: "airway",
    q: "When sizing a nasopharyngeal airway, the correct measurement is:",
    options: [
      "Corner of the mouth to the earlobe",
      "Tip of the nose to the earlobe",
      "Center of the mouth to the angle of the jaw",
      "Nostril to the tragus of the ear"
    ],
    answer: 1,
    explanation: "An NPA is sized from the tip of the nose to the earlobe. This estimates the distance from the nostril to the nasopharynx. An OPA is sized from the corner of the mouth to the earlobe."
  },
  {
    id: "air-006", domain: "airway",
    q: "A patient is breathing at 6 breaths per minute with shallow effort. You should:",
    options: [
      "Apply a non-rebreather mask at 15 LPM and monitor",
      "Apply a nasal cannula and prepare to suction",
      "Assist ventilations with a BVM",
      "Place in recovery position and reassess"
    ],
    answer: 2,
    explanation: "A rate of 6 breaths per minute is inadequate (normal is 12-20). Combined with shallow effort, this patient has inadequate breathing and requires positive pressure ventilation with a BVM. A non-rebreather mask does not assist breathing -- it only delivers oxygen."
  },
  {
    id: "air-007", domain: "airway",
    q: "You hear gurgling sounds when your patient breathes. Your immediate action is:",
    options: [
      "Insert an OPA to maintain the airway",
      "Suction the airway",
      "Roll the patient to the recovery position",
      "Increase oxygen flow rate"
    ],
    answer: 1,
    explanation: "Gurgling indicates fluid in the upper airway. Suction immediately. An OPA will not clear fluid -- it will just hold the airway open while the patient aspirates. Suction first, then consider an airway adjunct."
  },
  {
    id: "air-008", domain: "airway",
    q: "The maximum duration for a single suctioning attempt in an adult is:",
    options: [
      "5 seconds",
      "10 seconds",
      "15 seconds",
      "30 seconds"
    ],
    answer: 2,
    explanation: "Suction for no more than 15 seconds at a time in adults (10 seconds in children, 5 in infants). Prolonged suctioning causes hypoxia. Hyperventilate before and after if needed."
  },
  {
    id: "air-009", domain: "airway",
    q: "A non-rebreather mask at 15 LPM delivers approximately what FiO2?",
    options: [
      "35-50%",
      "50-60%",
      "60-80%",
      "80-95%"
    ],
    answer: 3,
    explanation: "A properly fitted non-rebreather mask at 15 LPM delivers approximately 80-95% FiO2. The reservoir bag must remain at least one-third full during inhalation. This is the highest FiO2 deliverable without intubation or a CPAP device."
  },
  {
    id: "air-010", domain: "airway",
    q: "A nasal cannula at 4 LPM delivers approximately:",
    options: [
      "28%",
      "36%",
      "44%",
      "52%"
    ],
    answer: 1,
    explanation: "A nasal cannula delivers approximately 24% at 1 LPM, increasing by roughly 4% per liter. At 4 LPM, FiO2 is approximately 36%. Maximum flow via nasal cannula is 6 LPM (approximately 44%)."
  },
  {
    id: "air-011", domain: "airway",
    q: "Your COPD patient is in moderate respiratory distress with SpO2 of 88%. You should:",
    options: [
      "Withhold oxygen -- COPD patients lose their drive to breathe with supplemental O2",
      "Apply oxygen to achieve SpO2 of 94-98% and monitor closely",
      "Apply a non-rebreather at 15 LPM to maximize oxygenation",
      "Use only a nasal cannula at 1 LPM to avoid hypoxic drive suppression"
    ],
    answer: 1,
    explanation: "The hypoxic drive concern is real but overstated in the field. A COPD patient with SpO2 of 88% needs oxygen. Target 94-98% with titrated flow. Do not withhold oxygen from a hypoxic patient -- monitor and adjust."
  },
  {
    id: "air-012", domain: "airway",
    q: "During BVM ventilation you notice the chest is not rising. Your first action is:",
    options: [
      "Increase your ventilation pressure",
      "Reposition the airway and recheck mask seal",
      "Switch to mouth-to-mask ventilation",
      "Insert an OPA and attempt again"
    ],
    answer: 1,
    explanation: "No chest rise during BVM almost always means airway positioning or mask seal problems -- not insufficient pressure. Reposition the airway (head-tilt or jaw thrust) and ensure a proper mask seal before increasing pressure, which risks gastric inflation."
  },
  {
    id: "air-013", domain: "airway",
    q: "Stridor in a pediatric patient indicates:",
    options: [
      "Lower airway obstruction -- likely asthma",
      "Upper airway obstruction or narrowing",
      "Fluid in the alveoli",
      "Normal finding in children under 2"
    ],
    answer: 1,
    explanation: "Stridor is a high-pitched inspiratory sound caused by upper airway obstruction or narrowing -- croup, epiglottitis, foreign body, anaphylaxis. It requires immediate attention. Wheezing is lower airway; crackles suggest fluid."
  },
  {
    id: "air-014", domain: "airway",
    q: "A patient has SpO2 of 96% but is breathing at 28 breaths per minute with accessory muscle use. You should:",
    options: [
      "Monitor only -- SpO2 is acceptable",
      "Apply a nasal cannula at 2 LPM",
      "Apply a non-rebreather and prepare to assist ventilations",
      "Place in Fowler's position and reassess in 5 minutes"
    ],
    answer: 2,
    explanation: "SpO2 is a lagging indicator. A patient working this hard to maintain 96% is in significant distress and may decompensate quickly. Treat the patient, not the number. Apply high-flow oxygen and prepare to assist ventilations if they tire."
  },
  {
    id: "air-015", domain: "airway",
    q: "The DOPE mnemonic for deteriorating intubated patients stands for:",
    options: [
      "Displaced tube, Obstruction, Pneumothorax, Equipment failure",
      "Difficult airway, Oxygen failure, Pneumonia, Esophageal placement",
      "Displaced tube, Over-inflation, Patient agitation, Equipment",
      "Dislodged airway, Obstruction, Pulmonary edema, Embolism"
    ],
    answer: 0,
    explanation: "DOPE: Displaced tube (tube moved out of position), Obstruction (secretions, kinking), Pneumothorax (especially tension), Equipment failure (oxygen source, BVM, connections). Systematically work through these when an intubated patient deteriorates."
  },
  {
    id: "air-016", domain: "airway",
    q: "You are ventilating a patient when you notice abdominal distension developing. This indicates:",
    options: [
      "Improved ventilation -- the diaphragm is descending properly",
      "Gastric inflation from excessive ventilation pressure or volume",
      "Internal abdominal bleeding",
      "Normal finding during BVM ventilation"
    ],
    answer: 1,
    explanation: "Gastric inflation occurs when too much pressure forces air into the esophagus and stomach instead of the lungs. It risks regurgitation and aspiration. Correct by repositioning the airway, using smaller tidal volumes (just enough for chest rise), and considering an OPA."
  },
  {
    id: "air-017", domain: "airway",
    q: "A patient with epiglottitis should be treated by:",
    options: [
      "Placing them supine and inserting an OPA",
      "Allowing them to maintain their position of comfort and transporting immediately",
      "Performing blind finger sweeps to clear the airway",
      "Applying a non-rebreather and laying them flat for easier airway access"
    ],
    answer: 1,
    explanation: "Epiglottitis patients are sitting forward in a tripod position to maintain their own airway. Do not agitate them, do not lay them down, do not attempt to examine the throat. Allow position of comfort, high-flow O2, and rapid transport. Agitation can cause complete obstruction."
  },
  {
    id: "air-018", domain: "airway",
    q: "The correct pediatric BVM ventilation rate for an infant is:",
    options: [
      "10-12 breaths per minute",
      "12-16 breaths per minute",
      "20-30 breaths per minute",
      "30-40 breaths per minute"
    ],
    answer: 2,
    explanation: "Infants are ventilated at 20-30 breaths per minute (one breath every 2-3 seconds). Children 1-8 years: 12-20 breaths per minute. Adults: 10-12 breaths per minute. Use only the chest rise visible -- infants need very small tidal volumes."
  },
  {
    id: "air-019", domain: "airway",
    q: "Which finding is most consistent with adequate artificial ventilation?",
    options: [
      "SpO2 rising from 82% to 91%",
      "Audible air movement from the mouth",
      "Visible chest rise with each breath",
      "Patient coughs during ventilation"
    ],
    answer: 2,
    explanation: "Visible chest rise is the primary confirmation that air is entering the lungs. SpO2 is a good secondary confirmation but lags. Audible movement may mean air is escaping around the mask. Coughing suggests the patient may have a gag reflex."
  },
  {
    id: "air-020", domain: "airway",
    q: "A responsive patient with partial airway obstruction who is coughing forcefully should be:",
    options: [
      "Given abdominal thrusts immediately",
      "Encouraged to continue coughing and monitored closely",
      "Placed in Trendelenburg and given back blows",
      "Given high-flow oxygen and transported without intervention"
    ],
    answer: 1,
    explanation: "A patient who is coughing forcefully has a partial obstruction but a patent enough airway to generate effective cough. Forceful coughing is the most effective airway clearance mechanism. Do not interfere. Monitor for complete obstruction -- if the cough becomes weak or silent, intervene."
  },
  {
    id: "air-021", domain: "airway",
    q: "Sellick's maneuver (cricoid pressure) is applied to:",
    options: [
      "Open the airway in unconscious patients",
      "Reduce the risk of gastric regurgitation during ventilation",
      "Stabilize the trachea during suctioning",
      "Identify the correct position for a surgical airway"
    ],
    answer: 1,
    explanation: "Cricoid pressure compresses the esophagus between the cricoid cartilage and the cervical vertebrae, reducing passive regurgitation. Its use is controversial and not universally recommended, but it remains tested on the NREMT."
  },
  {
    id: "air-022", domain: "airway",
    q: "A patient is breathing rapidly and shallowly at 30 breaths per minute. Her minute volume compared to a normal patient is:",
    options: [
      "Higher, because respiratory rate is elevated",
      "Potentially lower, because shallow breaths deliver less tidal volume",
      "The same, because rate compensates for depth",
      "Higher, and she does not need supplemental oxygen"
    ],
    answer: 1,
    explanation: "Minute volume = tidal volume x rate. Rapid shallow breathing increases dead space ventilation -- much of each breath never reaches the alveoli. Despite a high rate, alveolar ventilation may be inadequate. Treat the quality of breathing, not just the rate."
  },
  {
    id: "air-023", domain: "airway",
    q: "An NPA is contraindicated in a patient with:",
    options: [
      "An intact gag reflex",
      "Suspected basilar skull fracture",
      "Facial hair",
      "A history of epistaxis"
    ],
    answer: 1,
    explanation: "An NPA is contraindicated with suspected basilar skull fracture -- there is risk of the tube passing through the fracture into the cranial vault. Signs of basilar skull fracture: Battle's sign, raccoon eyes, CSF from ears or nose, severe head trauma mechanism."
  },
  {
    id: "air-024", domain: "airway",
    q: "You are ventilating a cardiac arrest patient at 10 breaths per minute. During CPR compressions, you should:",
    options: [
      "Stop compressions during each ventilation",
      "Deliver ventilations only during the compression pause",
      "Continue compressions without interruption if an advanced airway is in place",
      "Ventilate at 30:2 regardless of airway status"
    ],
    answer: 2,
    explanation: "With an advanced airway in place (supraglottic or ET tube), ventilations are delivered asynchronously at 10 breaths per minute without pausing compressions. Without an advanced airway, use 30:2. Minimizing interruptions to compressions is a core CPR principle."
  },
  {
    id: "air-025", domain: "airway",
    q: "Which breath sound indicates lower airway obstruction consistent with bronchospasm?",
    options: [
      "Stridor",
      "Wheezing",
      "Crackles",
      "Rhonchi"
    ],
    answer: 1,
    explanation: "Wheezing is a musical high-pitched sound caused by air moving through narrowed lower airways -- bronchospasm in asthma or COPD. Stridor = upper airway. Crackles = fluid in alveoli (pulmonary edema, pneumonia). Rhonchi = secretions in larger airways."
  },
  {
    id: "air-026", domain: "airway",
    q: "A patient has frothy pink sputum and crackles bilaterally. The most likely cause is:",
    options: [
      "Asthma exacerbation",
      "Pulmonary edema",
      "Pneumothorax",
      "Foreign body aspiration"
    ],
    answer: 1,
    explanation: "Frothy pink sputum and bilateral crackles are classic signs of pulmonary edema -- fluid in the alveoli from left heart failure. The pink color comes from red blood cells mixing with the froth. Position upright, high-flow oxygen, rapid transport."
  },
  {
    id: "air-027", domain: "airway",
    q: "You have been ventilating a patient for 3 minutes. The most important thing to reassess is:",
    options: [
      "Your hand position on the BVM",
      "Chest rise and SpO2",
      "The patient's skin color",
      "Your partner's fatigue level"
    ],
    answer: 1,
    explanation: "Chest rise confirms air is entering the lungs. SpO2 confirms oxygenation is improving. These are the primary feedback mechanisms for BVM effectiveness. Reassess continuously -- airway position can shift and mask seal can degrade."
  },
  {
    id: "air-028", domain: "airway",
    q: "A patient with a tracheostomy has a mucus plug causing respiratory distress. Your first action is:",
    options: [
      "Remove the inner cannula if present and suction the stoma",
      "Cover the stoma and ventilate through the mouth",
      "Apply a non-rebreather over the stoma",
      "Insert an NPA into the stoma"
    ],
    answer: 0,
    explanation: "For a tracheostomy with obstruction, remove the inner cannula (if the device has one -- most home trach tubes do) and suction the stoma. If unable to clear, remove the entire tube, suction the stoma, and ventilate via stoma with a pediatric mask or via mouth/nose if the stoma closes."
  },
  {
    id: "air-029", domain: "airway",
    q: "The preferred method to confirm BVM ventilation effectiveness in the field is:",
    options: [
      "Auscultating over the epigastrium",
      "Watching for bilateral chest rise",
      "Checking end-tidal CO2 if available",
      "Monitoring skin color change"
    ],
    answer: 1,
    explanation: "Bilateral chest rise is the primary field confirmation of effective BVM ventilation. Epigastric sounds indicate gastric inflation. End-tidal CO2 is excellent confirmation if available. Skin color is a late and unreliable indicator."
  },
  {
    id: "air-030", domain: "airway",
    q: "A patient presents with absent breath sounds on the left, tracheal deviation to the right, and severe respiratory distress after a stab wound to the left chest. This is most consistent with:",
    options: [
      "Left-sided hemothorax",
      "Left-sided tension pneumothorax",
      "Cardiac tamponade",
      "Pulmonary contusion"
    ],
    answer: 1,
    explanation: "Tension pneumothorax: absent breath sounds on the affected side, tracheal deviation AWAY from the affected side, severe respiratory distress, hypotension. Tracheal deviation is a late sign. This is an immediate life threat requiring needle decompression."
  },

  // ============================================================
  // CARDIOLOGY -- 34 questions
  // ============================================================

  {
    id: "card-001", domain: "cardiology",
    q: "A patient is unresponsive, apneic, and pulseless. Your first action after confirming cardiac arrest is:",
    options: [
      "Attach the AED and analyze",
      "Begin high-quality chest compressions",
      "Establish IV access",
      "Open the airway and give 2 rescue breaths"
    ],
    answer: 1,
    explanation: "High-quality chest compressions are the foundation of CPR and should begin immediately upon confirming cardiac arrest. Compressions circulate oxygenated blood already in the system. The AED should be applied and used as soon as available, but compressions start first."
  },
  {
    id: "card-002", domain: "cardiology",
    q: "High-quality adult CPR compressions should be:",
    options: [
      "At least 2 inches deep at 80-100 compressions per minute",
      "At least 2 inches deep at 100-120 compressions per minute",
      "At least 2.5 inches deep at 60-80 compressions per minute",
      "1.5-2 inches deep at 100-120 compressions per minute"
    ],
    answer: 1,
    explanation: "Current AHA guidelines: compress at least 2 inches (5 cm) in adults, rate of 100-120 per minute, allow full chest recoil, minimize interruptions. Deeper than 2.4 inches may cause injury. Rate faster than 120 reduces perfusion time."
  },
  {
    id: "card-003", domain: "cardiology",
    q: "An AED analyzes and advises 'no shock recommended.' You should:",
    options: [
      "Check for a pulse -- if absent, resume CPR immediately",
      "Continue to analyze for another 2 minutes before resuming CPR",
      "Assume the patient has a perfusing rhythm and check vital signs",
      "Administer epinephrine and re-analyze"
    ],
    answer: 0,
    explanation: "'No shock recommended' means the rhythm is not VF or pulseless VT. In cardiac arrest, this means PEA or asystole. Check for a pulse -- if absent, immediately resume CPR. Do not delay compressions waiting for the AED to reanalyze."
  },
  {
    id: "card-004", domain: "cardiology",
    q: "A patient describes chest pain as pressure radiating to the left arm, diaphoresis, and nausea. His 12-lead shows ST elevation in leads II, III, and aVF. This is most consistent with:",
    options: [
      "Anterior STEMI",
      "Inferior STEMI",
      "Unstable angina",
      "Pulmonary embolism"
    ],
    answer: 1,
    explanation: "ST elevation in leads II, III, and aVF indicates inferior STEMI (right coronary artery occlusion). Anterior STEMI involves V1-V4. Lateral STEMI involves I, aVL, V5-V6. Inferior STEMI requires a right-sided 12-lead to rule out right ventricular involvement before giving nitroglycerin."
  },
  {
    id: "card-005", domain: "cardiology",
    q: "Which is a contraindication to administering nitroglycerin?",
    options: [
      "Systolic BP of 130 mmHg",
      "History of hypertension",
      "Patient took sildenafil (Viagra) 6 hours ago",
      "Current chest pain rated 8/10"
    ],
    answer: 2,
    explanation: "Phosphodiesterase inhibitors (sildenafil, tadalafil, vardenafil) combined with nitrates can cause life-threatening hypotension. Contraindications to nitro: systolic BP below 90, use of PDE-5 inhibitors within 24-48 hours (varies by drug), right ventricular MI, no physician order."
  },
  {
    id: "card-006", domain: "cardiology",
    q: "You arrive to find bystanders performing CPR on a 58-year-old male. The AED is attached and advises shock. You should:",
    options: [
      "Check for a pulse before delivering the shock",
      "Clear all personnel and deliver the shock immediately",
      "Deliver 2 rescue breaths before the shock",
      "Resume CPR for 2 minutes and then shock"
    ],
    answer: 1,
    explanation: "When the AED advises shock, clear all personnel and deliver the shock immediately. Minimize the time from compression pause to shock delivery. Every second of delay reduces defibrillation success. After shock, immediately resume CPR for 2 minutes before reanalyzing."
  },
  {
    id: "card-007", domain: "cardiology",
    q: "A patient in atrial fibrillation with a rapid ventricular response (HR 140, BP 88/60, altered mental status) should be treated with:",
    options: [
      "Synchronized cardioversion",
      "Unsynchronized defibrillation",
      "Vagal maneuvers",
      "Rate-controlling medications only"
    ],
    answer: 0,
    explanation: "Unstable tachycardia with serious signs and symptoms (hypotension, altered mental status, chest pain, signs of shock) requires immediate synchronized cardioversion. Vagal maneuvers and medications are for stable patients. Unsynchronized defibrillation is for VF and pulseless VT."
  },
  {
    id: "card-008", domain: "cardiology",
    q: "The Chain of Survival for out-of-hospital cardiac arrest begins with:",
    options: [
      "Early CPR",
      "Early recognition and activation of EMS",
      "Early defibrillation",
      "Early advanced life support"
    ],
    answer: 1,
    explanation: "The Chain of Survival: 1) Early recognition and activation, 2) Early CPR, 3) Early defibrillation, 4) Early advanced life support, 5) Post-arrest care. Every link matters -- a delay at any point reduces survival."
  },
  {
    id: "card-009", domain: "cardiology",
    q: "A patient with chest pain has a BP of 78/50 and is diaphoretic. After placing him supine and providing oxygen, your priority is:",
    options: [
      "Administer nitroglycerin for the chest pain",
      "Rapid transport -- this patient is in cardiogenic shock",
      "Establish two large-bore IVs and run fluids wide open",
      "Obtain a 12-lead ECG and wait for results before transport"
    ],
    answer: 1,
    explanation: "Cardiogenic shock (pump failure from MI) requires rapid transport to a PCI-capable facility. Nitroglycerin is contraindicated with systolic BP below 90. IV fluids may worsen pulmonary edema. The 12-lead is important but should not delay transport -- transmit en route."
  },
  {
    id: "card-010", domain: "cardiology",
    q: "During CPR, you should minimize interruptions to chest compressions. The maximum pause for rhythm check or shock delivery should be:",
    options: [
      "5 seconds",
      "10 seconds",
      "15 seconds",
      "20 seconds"
    ],
    answer: 1,
    explanation: "Chest compression fraction (time in compressions vs total resuscitation time) should be above 60% ideally 80%+. Pauses for rhythm check, shock delivery, or airway management should be kept under 10 seconds. Pre-charge the defibrillator while compressions continue."
  },
  {
    id: "card-011", domain: "cardiology",
    q: "A patient has a history of CHF and presents with dyspnea, bilateral crackles, and edema. His BP is 160/100. Correct positioning is:",
    options: [
      "Supine with legs elevated",
      "Trendelenburg",
      "Sitting upright (Fowler's)",
      "Left lateral recumbent"
    ],
    answer: 2,
    explanation: "CHF with pulmonary edema: sit the patient upright. This reduces preload by allowing fluid to pool in dependent extremities and lets the diaphragm drop for improved respiratory mechanics. Supine or Trendelenburg worsens pulmonary edema."
  },
  {
    id: "card-012", domain: "cardiology",
    q: "Nitroglycerin can be given a maximum of how many times for chest pain in the prehospital setting?",
    options: [
      "1 tablet, then reassess only",
      "Up to 3 doses, 5 minutes apart, if BP remains above 90 systolic",
      "As many as needed until pain relief",
      "2 doses maximum regardless of response"
    ],
    answer: 1,
    explanation: "Protocol typically allows up to 3 doses of nitroglycerin (0.4 mg SL) every 5 minutes if systolic BP remains above 90 and pain is not relieved. Reassess BP after each dose. Medical direction authorization required in some systems."
  },
  {
    id: "card-013", domain: "cardiology",
    q: "The most common initial rhythm in witnessed cardiac arrest is:",
    options: [
      "Asystole",
      "Pulseless electrical activity",
      "Ventricular fibrillation",
      "Ventricular tachycardia"
    ],
    answer: 2,
    explanation: "Ventricular fibrillation is the most common initial rhythm in witnessed cardiac arrest, particularly from cardiac causes. This is why rapid defibrillation is so critical -- VF is treatable if shocked quickly. Over time without intervention, VF degenerates to asystole."
  },
  {
    id: "card-014", domain: "cardiology",
    q: "A patient has a regular pulse of 180 bpm, BP 110/70, and is alert and anxious but has no chest pain. This rhythm is most likely:",
    options: [
      "Unstable ventricular tachycardia",
      "Stable supraventricular tachycardia",
      "Atrial fibrillation with rapid response",
      "Sinus tachycardia from anxiety"
    ],
    answer: 1,
    explanation: "Regular, narrow-complex tachycardia at 150-200 bpm with stable vital signs suggests SVT. Atrial fibrillation is irregular. Sinus tachycardia is rarely above 150. This patient is stable -- vagal maneuvers may be appropriate per protocol."
  },
  {
    id: "card-015", domain: "cardiology",
    q: "When performing 2-rescuer CPR, compressor and ventilator roles should be switched every:",
    options: [
      "1 minute",
      "2 minutes",
      "5 minutes",
      "10 minutes"
    ],
    answer: 1,
    explanation: "Switch compressor roles every 2 minutes (at each rhythm check) to prevent fatigue. Compression quality degrades rapidly with fatigue, often before the rescuer is aware. Smooth handoffs minimize interruptions."
  },
  {
    id: "card-016", domain: "cardiology",
    q: "A patient has crushing chest pain, diaphoresis, and nausea. He took aspirin before you arrived. You should:",
    options: [
      "Not give additional aspirin since he already took some",
      "Give 324 mg aspirin (4 baby aspirin) if he can chew them and has no contraindications",
      "Give aspirin only if his pain is above 7/10",
      "Withhold aspirin until a 12-lead confirms STEMI"
    ],
    answer: 1,
    explanation: "Aspirin for suspected ACS: 324 mg chewed (not swallowed whole) if no contraindications (allergy, active bleeding, no physician order in some systems). A single dose taken at home is usually sub-therapeutic. Document what he took and when, then give the full dose."
  },
  {
    id: "card-017", domain: "cardiology",
    q: "Cardiac tamponade presents with Beck's triad, which includes:",
    options: [
      "Hypotension, JVD, muffled heart sounds",
      "Hypotension, tracheal deviation, absent breath sounds",
      "Hypertension, bradycardia, irregular respirations",
      "JVD, peripheral edema, crackles"
    ],
    answer: 0,
    explanation: "Beck's triad of cardiac tamponade: hypotension (reduced cardiac output), JVD (impaired venous return to heart), muffled heart sounds (fluid around heart dampens sounds). Mechanism: blood or fluid in the pericardial sac compresses the heart."
  },
  {
    id: "card-018", domain: "cardiology",
    q: "A patient is found unresponsive. You confirm pulselessness and begin CPR. The AED advises no shock. The most likely rhythms are:",
    options: [
      "VF and pulseless VT",
      "PEA and asystole",
      "SVT and sinus tachycardia",
      "Bradycardia and heart block"
    ],
    answer: 1,
    explanation: "AEDs only advise shock for VF and pulseless VT (shockable rhythms). 'No shock advised' in cardiac arrest means PEA (electrical activity without mechanical output) or asystole (no electrical activity). Both are non-shockable and require CPR and treatment of reversible causes."
  },
  {
    id: "card-019", domain: "cardiology",
    q: "The H's and T's of cardiac arrest are used to identify:",
    options: [
      "When to terminate resuscitation",
      "Reversible causes of cardiac arrest",
      "Appropriate shock energy levels",
      "Post-arrest care priorities"
    ],
    answer: 1,
    explanation: "H's: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/hyperkalemia, Hypothermia. T's: Tension pneumothorax, Tamponade, Toxins, Thrombosis (PE and coronary). Identifying and treating these reversible causes is critical in PEA and asystole."
  },
  {
    id: "card-020", domain: "cardiology",
    q: "A 70-year-old woman presents with fatigue, mild dyspnea, and jaw pain. No chest pain. Her 12-lead shows ST depression in V4-V6. This presentation is concerning for:",
    options: [
      "Anxiety and hyperventilation",
      "ACS with atypical presentation",
      "Musculoskeletal chest wall pain",
      "Esophageal spasm"
    ],
    answer: 1,
    explanation: "Women, elderly patients, and diabetics frequently present with atypical ACS symptoms: fatigue, dyspnea, nausea, jaw or shoulder pain -- without classic chest pressure. ST changes confirm cardiac ischemia. Do not dismiss atypical presentations. Treat as ACS."
  },
  {
    id: "card-021", domain: "cardiology",
    q: "A patient with a permanent pacemaker is in cardiac arrest. When using the AED you should:",
    options: [
      "Do not use the AED -- it will damage the pacemaker",
      "Place pads at least 1 inch away from the pacemaker device and use normally",
      "Use the AED normally with standard pad placement",
      "Increase energy to compensate for the pacemaker"
    ],
    answer: 1,
    explanation: "Use the AED on patients with pacemakers. Place pads at least 1 inch (some protocols say 3 inches) from the device. The AED may not recognize pacemaker spikes as a shockable rhythm -- if VF is visible and AED advises no shock, consider overriding per protocol."
  },
  {
    id: "card-022", domain: "cardiology",
    q: "After a successful defibrillation, you have return of spontaneous circulation. Your priority is:",
    options: [
      "Transport to the nearest emergency department",
      "Transport to a PCI-capable facility if STEMI is suspected",
      "Resume CPR for 2 more minutes to confirm ROSC",
      "Administer additional epinephrine"
    ],
    answer: 1,
    explanation: "Post-ROSC care includes: prevent re-arrest, support hemodynamics, and if STEMI is suspected, transport to a PCI-capable facility (cath lab). Time from arrest to balloon is a key outcome predictor. Coordinate with receiving facility during transport."
  },
  {
    id: "card-023", domain: "cardiology",
    q: "A patient has a BP of 220/120 and a severe headache. She has no neurological deficits. This is best described as:",
    options: [
      "Hypertensive emergency -- treat aggressively in the field",
      "Hypertensive urgency -- transport for controlled BP reduction",
      "Normal variation for her age",
      "Hemorrhagic stroke -- treat with aspirin"
    ],
    answer: 1,
    explanation: "Hypertensive urgency: severely elevated BP without end-organ damage (no neuro deficits, no chest pain, no renal failure). Hypertensive emergency: elevated BP WITH end-organ damage. Neither should be rapidly corrected in the field -- rapid BP reduction can cause stroke or MI. Transport for controlled reduction."
  },
  {
    id: "card-024", domain: "cardiology",
    q: "Which finding suggests the chest pain is NOT cardiac in origin?",
    options: [
      "Diaphoresis",
      "Pain reproducible with palpation",
      "Radiation to the left arm",
      "Associated nausea"
    ],
    answer: 1,
    explanation: "Musculoskeletal or pleuritic chest pain is often reproducible with palpation (touching the chest wall worsens it). Cardiac pain is rarely worsened by palpation. Diaphoresis, radiation, and nausea all suggest cardiac etiology. However, do not rely on single features -- treat as cardiac until proven otherwise."
  },
  {
    id: "card-025", domain: "cardiology",
    q: "A patient is in symptomatic bradycardia (HR 38, BP 78/50, altered mental status). First-line treatment is:",
    options: [
      "Transcutaneous pacing",
      "Atropine 0.5 mg IV",
      "Epinephrine 1 mg IV",
      "Synchronized cardioversion"
    ],
    answer: 1,
    explanation: "Atropine 0.5 mg IV is the first-line treatment for symptomatic bradycardia, up to 3 mg total. If atropine is ineffective, transcutaneous pacing is next. Epinephrine is for cardiac arrest. Cardioversion is for tachyarrhythmias."
  },
  {
    id: "card-026", domain: "cardiology",
    q: "JVD (jugular venous distension) in a cardiac patient most commonly indicates:",
    options: [
      "Dehydration and low preload",
      "Elevated venous pressure from right heart failure or obstructed venous return",
      "Normal finding in hypertensive patients",
      "Arterial obstruction"
    ],
    answer: 1,
    explanation: "JVD indicates elevated central venous pressure -- blood is backing up into the jugular veins. Causes: right heart failure, tension pneumothorax, cardiac tamponade, superior vena cava syndrome. In CHF, JVD combined with crackles and edema is classic right + left heart failure."
  },
  {
    id: "card-027", domain: "cardiology",
    q: "The OPQRST mnemonic is used to:",
    options: [
      "Assess level of consciousness",
      "Characterize a patient's pain or chief complaint",
      "Determine medication allergies",
      "Guide CPR quality"
    ],
    answer: 1,
    explanation: "OPQRST: Onset, Provocation/Palliation, Quality, Radiation/Region, Severity, Time. Used for any pain or symptom complaint. Essential for chest pain assessment to characterize the complaint, identify risk factors, and guide treatment decisions."
  },
  {
    id: "card-028", domain: "cardiology",
    q: "A patient in VF has received 3 shocks with no change in rhythm. The most important intervention between shocks is:",
    options: [
      "Increasing the shock energy",
      "High-quality CPR for 2 minutes",
      "Establishing IV access for epinephrine",
      "Reassessing the ECG leads for correct placement"
    ],
    answer: 1,
    explanation: "CPR between shocks perfuses the myocardium and makes subsequent defibrillation more likely to succeed. Two minutes of high-quality CPR after each shock is standard. Epinephrine is important but CPR takes priority. Energy may be escalated per device/protocol."
  },
  {
    id: "card-029", domain: "cardiology",
    q: "Pulseless electrical activity (PEA) is defined as:",
    options: [
      "A flat line on the monitor with no electrical activity",
      "Organized electrical activity on the monitor without a palpable pulse",
      "Ventricular fibrillation that is too fine to shock",
      "A pacemaker rhythm with loss of capture"
    ],
    answer: 1,
    explanation: "PEA: organized electrical activity on the ECG but no mechanical cardiac output (no pulse). The heart is 'talking' electrically but not pumping. Causes are the H's and T's. Treatment: CPR + treat reversible causes. PEA is non-shockable."
  },
  {
    id: "card-030", domain: "cardiology",
    q: "A patient has crushing chest pain that began 2 hours ago and is not relieved by nitroglycerin. He is diaphoretic with BP 90/60. Your most important action is:",
    options: [
      "Give a 4th dose of nitroglycerin",
      "Establish IV access and run a 500 mL fluid bolus",
      "Obtain a 12-lead and transmit to receiving facility while transporting rapidly",
      "Wait on scene for ALS backup"
    ],
    answer: 2,
    explanation: "This patient is in cardiogenic shock from likely STEMI. The priority is getting this patient to a PCI-capable facility as fast as possible. Obtain and transmit a 12-lead en route. Do not delay transport waiting for ALS. Every minute of delay = more myocardium lost."
  },
  {
    id: "card-031", domain: "cardiology",
    q: "Synchronized cardioversion differs from defibrillation in that it:",
    options: [
      "Uses lower energy levels",
      "Delivers the shock in sync with the R wave to avoid the T wave",
      "Is used only for asystole",
      "Does not require the patient to be sedated"
    ],
    answer: 1,
    explanation: "Synchronized cardioversion times the shock to the R wave, avoiding the relative refractory period (T wave). Shocking during the T wave can induce VF ('R on T phenomenon'). Used for unstable tachyarrhythmias with a pulse. Defibrillation is unsynchronized, used for VF/pulseless VT."
  },
  {
    id: "card-032", domain: "cardiology",
    q: "An 80-year-old nursing home patient is found unresponsive with a valid DNR. She has no pulse. You should:",
    options: [
      "Begin CPR until you can contact medical direction",
      "Honor the DNR -- do not begin resuscitation",
      "Begin CPR but withhold defibrillation",
      "Begin CPR because DNRs only apply in hospitals"
    ],
    answer: 1,
    explanation: "A valid DNR (Do Not Resuscitate) order must be honored. Confirm validity (proper form, signatures, patient identity). A valid DNR means no CPR, no defibrillation, no resuscitative measures. Provide comfort care. Contact medical direction and document."
  },
  {
    id: "card-033", domain: "cardiology",
    q: "Which of the following best describes angina pectoris?",
    options: [
      "Permanent myocardial damage from prolonged ischemia",
      "Temporary chest pain from myocardial ischemia that resolves with rest or nitro",
      "Chest pain from aortic dissection",
      "Pleuritic chest pain from pericarditis"
    ],
    answer: 1,
    explanation: "Angina is transient chest pain from myocardial ischemia without infarction -- the artery is narrowed but not completely blocked. Stable angina is predictable, relieved by rest or nitro. Unstable angina is unpredictable, occurs at rest, and represents a pre-infarction state requiring urgent treatment."
  },
  {
    id: "card-034", domain: "cardiology",
    q: "A patient in cardiac arrest has been resuscitated. She is now breathing and has a BP of 80/50. Post-ROSC care priorities include:",
    options: [
      "Maintain SpO2 94-98%, avoid hyperventilation, support BP, transport to PCI center if STEMI suspected",
      "Hyperventilate to correct acidosis, run fluids wide open, transport to nearest ED",
      "Maintain SpO2 above 100%, give epinephrine drip, avoid moving the patient",
      "Resume CPR if BP remains below 90 systolic"
    ],
    answer: 0,
    explanation: "Post-ROSC bundle: target SpO2 94-98% (hyperoxia is harmful), ventilate at 10-12/min (avoid hyperventilation -- causes cerebral vasoconstriction), support BP above 90 systolic, 12-lead ECG, transport to PCI-capable facility if STEMI. Temperature management (TTM) initiated in hospital."
  },

  // ============================================================
  // TRAUMA -- 24 questions
  // ============================================================

  {
    id: "tra-001", domain: "trauma",
    q: "A patient has a penetrating abdominal wound with evisceration of bowel. Your treatment is:",
    options: [
      "Push the bowel back into the abdominal cavity",
      "Cover with a dry sterile dressing and apply firm pressure",
      "Cover with a moist sterile dressing and do not apply pressure",
      "Cover with an occlusive dressing and tape all four sides"
    ],
    answer: 2,
    explanation: "Evisceration treatment: cover with a moist sterile dressing (saline-soaked if available) to prevent desiccation. Do NOT push organs back in -- risk of contamination and further injury. Do NOT apply direct pressure over the organs. Keep the patient warm and transport rapidly."
  },
  {
    id: "tra-002", domain: "trauma",
    q: "The Golden Hour concept in trauma refers to:",
    options: [
      "The time limit for field treatment before transport",
      "The critical window during which definitive surgical care improves survival",
      "The time limit for spinal immobilization",
      "The maximum acceptable scene time for all trauma patients"
    ],
    answer: 1,
    explanation: "The Golden Hour is the concept that major trauma patients who reach definitive surgical care within approximately one hour of injury have significantly better survival rates. This drives the 'load and go' philosophy -- minimize scene time, transport rapidly to a trauma center."
  },
  {
    id: "tra-003", domain: "trauma",
    q: "A patient has a femur fracture. The estimated blood loss from this injury alone can be up to:",
    options: [
      "250 mL",
      "500 mL",
      "1,000-1,500 mL",
      "3,000 mL"
    ],
    answer: 2,
    explanation: "A femur fracture can cause 1,000-1,500 mL of blood loss into the thigh (up to 2,000 mL with an open fracture). Pelvic fractures can cause 2,000-3,000+ mL. These are life-threatening hemorrhages even without visible bleeding."
  },
  {
    id: "tra-004", domain: "trauma",
    q: "A tourniquet applied to a patient's arm should be:",
    options: [
      "Applied directly over the wound for maximum pressure",
      "Applied 2-3 inches proximal to the wound, tightened until bleeding stops, time documented",
      "Loosened every 15 minutes to prevent tissue damage",
      "Applied over clothing to reduce pain"
    ],
    answer: 1,
    explanation: "Tourniquet application: 2-3 inches proximal to the wound (not over a joint), tighten until bleeding stops, document time of application prominently. Do NOT loosen once applied -- re-perfusing injured tissue releases toxins and resumes bleeding. Remove clothing first for proper application."
  },
  {
    id: "tra-005", domain: "trauma",
    q: "A patient has a sucking chest wound (open pneumothorax). Treatment is:",
    options: [
      "Seal all four sides of an occlusive dressing",
      "Apply an occlusive dressing sealed on three sides",
      "Apply a dry sterile dressing and tape all four sides",
      "Leave open to allow air to escape"
    ],
    answer: 1,
    explanation: "Open pneumothorax (sucking chest wound): apply a vented chest seal or three-sided occlusive dressing. The open side allows air to escape during exhalation, preventing tension pneumothorax from developing. A four-sided seal can trap air and cause tension."
  },
  {
    id: "tra-006", domain: "trauma",
    q: "Mechanism of injury is important because it:",
    options: [
      "Determines the treatment protocol without further assessment",
      "Helps predict injuries that may not yet be apparent",
      "Replaces the need for a physical exam",
      "Determines whether spinal precautions are needed in all cases"
    ],
    answer: 1,
    explanation: "MOI helps predict what injuries are likely based on the forces involved. High-energy MOI (high-speed MVA, fall from height, gunshot wound) creates an index of suspicion for serious injuries that may not be obvious initially. It directs your assessment and treatment priorities."
  },
  {
    id: "tra-007", domain: "trauma",
    q: "A patient was ejected from a vehicle in a high-speed collision. He is alert with a GCS of 14. Spinal motion restriction should be:",
    options: [
      "Applied based on mechanism alone",
      "Applied only if the patient complains of neck or back pain",
      "Applied based on assessment findings including mechanism, symptoms, and neuro exam",
      "Skipped -- he is alert and oriented"
    ],
    answer: 2,
    explanation: "Current spinal motion restriction guidelines use a combination of mechanism, pain/tenderness, neuro deficits, altered mental status, and distracting injuries. Ejection from a vehicle is a high-risk mechanism. This patient warrants full spinal precautions based on mechanism even without overt symptoms."
  },
  {
    id: "tra-008", domain: "trauma",
    q: "Hemorrhagic shock class III is characterized by:",
    options: [
      "15% blood loss, normal BP, slightly elevated HR",
      "15-30% blood loss, tachycardia, anxiety",
      "30-40% blood loss, marked tachycardia, altered mental status, significant hypotension",
      "Over 40% blood loss, profound hypotension, unconsciousness"
    ],
    answer: 2,
    explanation: "Hemorrhagic shock classes: Class I (<15%, minimal signs), Class II (15-30%, tachycardia, anxiety), Class III (30-40%, marked tachycardia, AMS, hypotension), Class IV (>40%, profound hypotension, unconsciousness, death imminent). Class III is the tipping point where BP begins to fall."
  },
  {
    id: "tra-009", domain: "trauma",
    q: "A patient has a flail chest. The paradoxical movement you observe is caused by:",
    options: [
      "Air moving in and out of the pleural space",
      "A section of ribs fractured in multiple places moving opposite to the chest wall",
      "Diaphragmatic rupture allowing abdominal contents into the chest",
      "Tension pneumothorax compressing the chest wall"
    ],
    answer: 1,
    explanation: "Flail chest: three or more consecutive ribs each fractured in two or more places, creating a free-floating segment. During inspiration, the chest wall expands but the flail segment moves inward (paradoxical movement). This impairs ventilation and is often associated with pulmonary contusion."
  },
  {
    id: "tra-010", domain: "trauma",
    q: "Cushing's triad (hypertension, bradycardia, irregular respirations) indicates:",
    options: [
      "Neurogenic shock from spinal injury",
      "Increased intracranial pressure with herniation",
      "Anaphylactic shock",
      "Cardiac tamponade"
    ],
    answer: 1,
    explanation: "Cushing's triad is a late sign of severely elevated ICP with brainstem herniation. The body attempts to perfuse the brain despite high ICP by raising MAP (hypertension), which reflexively slows the heart (bradycardia). Irregular respirations (Cheyne-Stokes or ataxic) indicate brainstem compression. This is a pre-terminal finding."
  },
  {
    id: "tra-011", domain: "trauma",
    q: "A 200 lb patient falls 20 feet onto concrete. When you arrive he is unconscious with irregular respirations. Your priority after ensuring scene safety is:",
    options: [
      "Full spinal immobilization before moving",
      "Establish IV access and run a fluid challenge",
      "Open airway, assess breathing, begin BVM if needed -- ABCs first",
      "Check pupils and perform a detailed neuro exam"
    ],
    answer: 2,
    explanation: "ABCs always come first regardless of mechanism. An unconscious patient with irregular respirations has an airway and breathing problem that is immediately life-threatening. Open the airway with jaw thrust (suspected spinal injury), assess breathing, and assist ventilations. Spinal precautions are maintained throughout but do not delay airway management."
  },
  {
    id: "tra-012", domain: "trauma",
    q: "The Glasgow Coma Scale assesses:",
    options: [
      "Pupillary response, verbal output, and motor strength",
      "Eye opening, verbal response, and motor response",
      "Respiratory rate, blood pressure, and pupillary response",
      "Orientation, memory, and judgment"
    ],
    answer: 1,
    explanation: "GCS: Eye opening (4 points: spontaneous/command/pain/none), Verbal response (5 points: oriented/confused/inappropriate words/sounds/none), Motor response (6 points: obeys/localizes/withdraws/flexion/extension/none). Maximum 15, minimum 3. Below 8 = severe TBI, consider advanced airway."
  },
  {
    id: "tra-013", domain: "trauma",
    q: "A patient has a GCS of 7 after head trauma. In addition to airway management, you should:",
    options: [
      "Hyperventilate to reduce ICP",
      "Ventilate at normal rate (10-12/min) unless herniation signs are present",
      "Withhold oxygen to avoid vasoconstriction",
      "Place in Trendelenburg to increase cerebral perfusion"
    ],
    answer: 1,
    explanation: "For severe TBI, ventilate at 10-12/min (normal rate). Hyperventilation causes cerebral vasoconstriction and reduces cerebral blood flow -- harmful unless herniation is occurring (Cushing's triad, blown pupil). Elevate head 30 degrees, avoid hypoxia, avoid hypotension. Trendelenburg increases ICP."
  },
  {
    id: "tra-014", domain: "trauma",
    q: "Which wound is most appropriate for wound packing?",
    options: [
      "A superficial laceration on the forearm",
      "A deep penetrating wound to the groin where a tourniquet cannot be applied",
      "An abdominal evisceration",
      "A puncture wound to the chest"
    ],
    answer: 1,
    explanation: "Wound packing (with hemostatic gauze or plain gauze) is indicated for junctional hemorrhage -- areas where tourniquets cannot be applied (groin, axilla, neck, junctional zones). Pack tightly and apply sustained direct pressure. Not indicated for evisceration or chest wounds."
  },
  {
    id: "tra-015", domain: "trauma",
    q: "A patient has bruising over the left lower ribs and is hypotensive after a bicycle crash. You should suspect:",
    options: [
      "Splenic laceration with internal hemorrhage",
      "Left-sided rib fractures only",
      "Pulmonary contusion",
      "Left ventricular injury"
    ],
    answer: 0,
    explanation: "The spleen is in the left upper quadrant, protected by the left lower ribs. Left lower rib fractures are a classic mechanism for splenic injury. The spleen is highly vascular -- lacerations can cause rapid, life-threatening internal hemorrhage. Hypotension confirms significant blood loss."
  },
  {
    id: "tra-016", domain: "trauma",
    q: "Burns covering the entire anterior trunk of an adult are classified as approximately what percentage of BSA?",
    options: [
      "9%",
      "18%",
      "27%",
      "36%"
    ],
    answer: 1,
    explanation: "Rule of Nines: Head/neck = 9%, each arm = 9%, anterior trunk = 18%, posterior trunk = 18%, each leg = 18%, perineum = 1%. The entire anterior trunk (chest and abdomen) = 18%. Accurate BSA calculation drives fluid resuscitation decisions and transport destination."
  },
  {
    id: "tra-017", domain: "trauma",
    q: "A full-thickness (third-degree) burn is characterized by:",
    options: [
      "Redness and pain",
      "Blisters and intense pain",
      "Dry, waxy, or leathery skin with little or no pain",
      "Superficial redness that blanches with pressure"
    ],
    answer: 2,
    explanation: "Full-thickness burns destroy all skin layers including nerve endings. They appear dry, waxy, white, brown, or charred. The absence of pain is paradoxical but indicates complete nerve destruction. Surrounding partial-thickness areas may be painful. Full-thickness burns do not heal without grafting."
  },
  {
    id: "tra-018", domain: "trauma",
    q: "Neurogenic shock following spinal cord injury is characterized by:",
    options: [
      "Tachycardia and hypotension",
      "Bradycardia and hypotension with warm, dry, flushed skin",
      "Tachycardia and hypertension",
      "Bradycardia and hypertension"
    ],
    answer: 1,
    explanation: "Neurogenic shock: loss of sympathetic tone from spinal cord injury causes vasodilation (hypotension) and loss of cardiac acceleration (bradycardia). Skin is paradoxically warm, dry, and flushed below the injury due to vasodilation. This distinguishes it from hypovolemic shock (tachycardia, pale, cold, clammy)."
  },
  {
    id: "tra-019", domain: "trauma",
    q: "The most common cause of preventable death in trauma is:",
    options: [
      "Airway obstruction",
      "Uncontrolled external hemorrhage",
      "Tension pneumothorax",
      "Traumatic brain injury"
    ],
    answer: 1,
    explanation: "Uncontrolled external hemorrhage is the most common preventable cause of trauma death. This drove the 'Stop the Bleed' campaign and the Hartford Consensus emphasizing tourniquets and wound packing. Hemorrhage control is the highest priority after scene safety and airway in trauma."
  },
  {
    id: "tra-020", domain: "trauma",
    q: "A patient has a penetrating eye injury with an impaled object. You should:",
    options: [
      "Remove the object to assess the eye",
      "Stabilize the object in place and cover both eyes",
      "Apply direct pressure over the object",
      "Cover only the injured eye and transport"
    ],
    answer: 1,
    explanation: "Impaled objects in the eye: never remove, never apply pressure. Stabilize the object with a cup or ring dressing. Cover BOTH eyes -- consensual movement means the good eye moving will move the injured eye too, worsening damage. Transport to an ophthalmology-capable facility."
  },
  {
    id: "tra-021", domain: "trauma",
    q: "An unstable pelvic fracture should be treated by:",
    options: [
      "Log rolling to a long backboard",
      "Applying a pelvic binder or sheet wrap and minimizing movement",
      "Placing in PASG (MAST trousers) and inflating all compartments",
      "Elevating the legs to treat shock"
    ],
    answer: 1,
    explanation: "Unstable pelvic fractures can cause massive hemorrhage into the pelvic cavity. A pelvic binder (or improvised sheet wrap at the level of the greater trochanters) reduces pelvic volume and tamponades bleeding. Log rolling is contraindicated -- it disrupts the clot. Minimize movement."
  },
  {
    id: "tra-022", domain: "trauma",
    q: "Compartment syndrome in an extremity presents with:",
    options: [
      "Decreased pain with passive stretch of muscles in the compartment",
      "Severe pain out of proportion to the injury, especially with passive stretch",
      "Warmth and erythema consistent with infection",
      "Pulselessness as the earliest finding"
    ],
    answer: 1,
    explanation: "Compartment syndrome: pressure builds in a fascial compartment, compressing muscles and nerves. Classic sign: pain out of proportion to injury and severe pain with passive stretch of muscles in the compartment. The 6 P's: Pain, Pressure, Paralysis, Paresthesia, Pallor, Pulselessness (late). Pulselessness is a late and ominous sign."
  },
  {
    id: "tra-023", domain: "trauma",
    q: "During a rapid trauma assessment, you find a patient with decreased breath sounds on the right, trachea deviated left, hypotension, and JVD. You should:",
    options: [
      "Apply a chest seal and transport",
      "Prepare for needle decompression of right chest",
      "Roll the patient right side down to drain a hemothorax",
      "Perform immediate CPR"
    ],
    answer: 1,
    explanation: "Tension pneumothorax: decreased breath sounds on the affected side, tracheal deviation AWAY from the affected side, JVD, hypotension. Treatment is needle decompression (2nd intercostal space, midclavicular line or 4th-5th ICS anterior axillary line) followed by chest seal. This is immediately life-threatening."
  },
  {
    id: "tra-024", domain: "trauma",
    q: "A patient involved in a high-speed MVA has an abdominal contusion at the seatbelt line. He is hemodynamically stable. You should:",
    options: [
      "Reassure him -- seatbelts prevent serious injury",
      "Maintain a high index of suspicion for hollow organ injury and internal bleeding",
      "Focus only on extremity injuries since internal injuries cannot be treated in the field",
      "Delay transport until symptoms develop"
    ],
    answer: 1,
    explanation: "Seatbelt sign (contusion across the abdomen from the belt) indicates significant deceleration force and is associated with hollow organ injuries (bowel, bladder) and chance fractures of the lumbar spine. Hollow organ injuries may not be immediately apparent. Maintain suspicion, monitor vitals, transport."
  },

  // ============================================================
  // MEDICAL -- 45 questions
  // ============================================================

  {
    id: "med-001", domain: "medical",
    q: "A patient is found unconscious. The AEIOU-TIPS mnemonic helps you consider causes of altered mental status. Which letter represents toxic ingestion?",
    options: [
      "A",
      "E",
      "T",
      "I"
    ],
    answer: 2,
    explanation: "AEIOU-TIPS: Alcohol, Epilepsy, Insulin (hypoglycemia), Overdose/Opiates, Uremia (renal failure), Trauma, Infection, Psychiatric, Stroke/Structural. T = Trauma and T in some versions also includes Toxins. Systematic use prevents missing reversible causes."
  },
  {
    id: "med-002", domain: "medical",
    q: "A diabetic patient is found unresponsive with a blood glucose of 38 mg/dL. After establishing an airway, you should:",
    options: [
      "Administer oral glucose gel",
      "Administer glucose per protocol (oral if responsive, IM glucagon or IV dextrose if unresponsive)",
      "Transport immediately without any glucose treatment",
      "Administer insulin to stabilize glucose levels"
    ],
    answer: 1,
    explanation: "An unresponsive patient cannot safely receive oral glucose (aspiration risk). Oral glucose requires ability to swallow. For unresponsive hypoglycemia: IM glucagon or IV dextrose per protocol. Never give oral glucose to an unresponsive patient."
  },
  {
    id: "med-003", domain: "medical",
    q: "The Cincinnati Prehospital Stroke Scale tests:",
    options: [
      "Blood pressure, blood glucose, and level of consciousness",
      "Facial droop, arm drift, and speech abnormality",
      "Pupillary response, grip strength, and gait",
      "Memory, orientation, and calculation"
    ],
    answer: 1,
    explanation: "Cincinnati Prehospital Stroke Scale: Facial droop (ask to smile), Arm drift (close eyes, hold arms out 10 seconds), Speech abnormality (repeat a phrase). One abnormal finding = 72% probability of stroke. Two or three abnormal findings = much higher probability. Activate stroke protocol immediately."
  },
  {
    id: "med-004", domain: "medical",
    q: "A patient with known epilepsy has been seizing for 8 minutes. He is actively convulsing with no response to commands. Your priority is:",
    options: [
      "Restrain the patient to prevent injury",
      "Insert a bite stick or airway adjunct to prevent tongue biting",
      "Protect the patient from injury, maintain airway, administer oxygen, transport",
      "Wait for the seizure to stop before intervening"
    ],
    answer: 2,
    explanation: "Seizure management: protect from injury (remove hazards, pad surroundings), do NOT restrain, do NOT insert anything into the mouth, maintain airway position (lateral if possible), high-flow oxygen, time the seizure, IV diazepam or IM midazolam per protocol for status epilepticus (>5 minutes)."
  },
  {
    id: "med-005", domain: "medical",
    q: "A patient presents with sudden onset of the worst headache of his life. He is alert with a stiff neck and photophobia. You should suspect:",
    options: [
      "Tension headache",
      "Migraine with aura",
      "Subarachnoid hemorrhage",
      "Hypertensive urgency"
    ],
    answer: 2,
    explanation: "'Worst headache of my life' with sudden onset is subarachnoid hemorrhage (ruptured cerebral aneurysm) until proven otherwise. Stiff neck (meningismus) and photophobia add urgency. This is a true neurosurgical emergency. Rapid transport, keep calm, minimize stimulation."
  },
  {
    id: "med-006", domain: "medical",
    q: "Anaphylaxis is best defined as:",
    options: [
      "A severe allergic reaction limited to the skin",
      "A severe, life-threatening systemic hypersensitivity reaction",
      "Any allergic reaction requiring epinephrine",
      "An allergic reaction causing bronchospasm only"
    ],
    answer: 1,
    explanation: "Anaphylaxis is a severe, rapid-onset systemic hypersensitivity reaction involving multiple organ systems. It can cause airway compromise (angioedema, bronchospasm), cardiovascular collapse (vasodilation, hypotension), and skin manifestations. It is immediately life-threatening and requires epinephrine."
  },
  {
    id: "med-007", domain: "medical",
    q: "The first-line treatment for anaphylaxis is:",
    options: [
      "Diphenhydramine (Benadryl) 50 mg IV",
      "Epinephrine 0.3 mg IM (1:1,000) into the lateral thigh",
      "Albuterol nebulization for the bronchospasm",
      "Corticosteroids IV to reduce inflammation"
    ],
    answer: 1,
    explanation: "Epinephrine 0.3 mg IM (1:1,000) into the lateral thigh is the first and most important treatment for anaphylaxis. It counteracts vasodilation, bronchospasm, and angioedema. Antihistamines and corticosteroids are adjuncts -- they are too slow to treat the acute reaction. Do not delay epinephrine."
  },
  {
    id: "med-008", domain: "medical",
    q: "A patient with asthma has been using her albuterol inhaler every 30 minutes for 3 hours with minimal relief. This is called:",
    options: [
      "Mild asthma exacerbation",
      "Status asthmaticus",
      "Exercise-induced asthma",
      "COPD exacerbation"
    ],
    answer: 1,
    explanation: "Status asthmaticus is a prolonged, severe asthma attack that is refractory to initial bronchodilator treatment. It is a life-threatening emergency. Signs of impending respiratory failure: silent chest (no wheezing), inability to speak in full sentences, diaphoresis, altered mental status, cyanosis."
  },
  {
    id: "med-009", domain: "medical",
    q: "A patient with known COPD presents in respiratory distress. His baseline SpO2 is typically 88-92%. Your target SpO2 should be:",
    options: [
      "100% -- always maximize oxygenation",
      "94-98% -- same as all patients",
      "88-92% -- match his baseline",
      "Above 90% -- titrate to just above his normal"
    ],
    answer: 1,
    explanation: "Current evidence supports targeting SpO2 94-98% for most patients including COPD. The 'hypoxic drive' concern is real but overstated -- COPD patients can receive oxygen, but avoid excessive hyperoxia. Titrate flow to achieve 94-98%. A COPD patient with SpO2 of 82% needs oxygen -- do not withhold."
  },
  {
    id: "med-010", domain: "medical",
    q: "Hyperglycemic hyperosmolar state (HHS) differs from diabetic ketoacidosis (DKA) primarily in that:",
    options: [
      "HHS occurs in Type 1 diabetics; DKA occurs in Type 2",
      "HHS has extremely high glucose (often >600), no ketoacidosis, and occurs mainly in Type 2 diabetics",
      "HHS causes seizures; DKA does not",
      "HHS is less serious than DKA"
    ],
    answer: 1,
    explanation: "HHS: very high glucose (>600, sometimes >1000 mg/dL), minimal ketosis, usually Type 2 diabetics, gradual onset, severe dehydration. DKA: moderate glucose elevation, significant ketoacidosis, usually Type 1, faster onset, Kussmaul respirations. Both require IV fluids and hospital care."
  },
  {
    id: "med-011", domain: "medical",
    q: "A patient presents with confusion, fever of 104 degreesF, hot dry skin, and no sweating after working outdoors all day. This is most consistent with:",
    options: [
      "Heat exhaustion",
      "Heat cramps",
      "Heat stroke",
      "Hyperthyroidism"
    ],
    answer: 2,
    explanation: "Heat stroke: high core temperature (above 104 degreesF), altered mental status, hot skin (classically dry in classic heat stroke, may be wet in exertional). Confusion or loss of consciousness is the defining feature. Cool immediately (ice packs to neck/armpits/groin, cool water misting with fanning) and transport rapidly. This is a true emergency."
  },
  {
    id: "med-012", domain: "medical",
    q: "A patient has taken an overdose of opioids and has pinpoint pupils, respiratory depression, and decreased LOC. Treatment is:",
    options: [
      "Activated charcoal to absorb the drug",
      "Naloxone (Narcan) IM or intranasal, airway management",
      "Flumazenil to reverse sedation",
      "Stimulation and position changes to increase respiratory drive"
    ],
    answer: 1,
    explanation: "Opioid toxidrome: miosis (pinpoint pupils), respiratory depression, decreased LOC. Treatment: naloxone to reverse opioid effect, airway management (BVM if respirations inadequate). Flumazenil reverses benzodiazepines, not opioids. Activated charcoal is not indicated for opioids in most prehospital protocols."
  },
  {
    id: "med-013", domain: "medical",
    q: "Which toxidrome is associated with SLUDGEM symptoms (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis, Miosis)?",
    options: [
      "Sympathomimetic (cocaine, amphetamines)",
      "Anticholinergic (antihistamines, atropine)",
      "Cholinergic (organophosphates, nerve agents)",
      "Sedative-hypnotic (benzodiazepines, barbiturates)"
    ],
    answer: 2,
    explanation: "SLUDGEM is the cholinergic toxidrome from organophosphate pesticides or nerve agents. Excess acetylcholine stimulates muscarinic receptors. Treatment: atropine (blocks muscarinic effects), pralidoxime (reactivates acetylcholinesterase). Sympathomimetics: tachycardia, hypertension, mydriasis. Anticholinergic: 'mad as a hatter, dry as a bone, hot as a hare, blind as a bat.'"
  },
  {
    id: "med-014", domain: "medical",
    q: "A patient took 'a handful of pills' 30 minutes ago and is alert. Which intervention is most appropriate in the prehospital setting?",
    options: [
      "Induce vomiting to remove the pills",
      "Administer activated charcoal per protocol if indicated and patient can protect airway",
      "Administer flumazenil to reverse any sedation",
      "Perform gastric lavage in the field"
    ],
    answer: 1,
    explanation: "Activated charcoal may be indicated for recent oral ingestion if the patient is alert and can protect their airway, per protocol and medical direction. Never induce vomiting (risk of aspiration, not recommended by Poison Control). Gastric lavage is a hospital procedure. Flumazenil is only for benzodiazepine overdose."
  },
  {
    id: "med-015", domain: "medical",
    q: "A patient with a history of atrial fibrillation presents with sudden onset one-sided weakness and slurred speech that started 45 minutes ago. She is hemodynamically stable. The most critical time-sensitive intervention is:",
    options: [
      "Administer aspirin immediately",
      "Rapid transport to a stroke center -- thrombolytics have a treatment window",
      "Obtain blood glucose and treat if abnormal",
      "Position supine with legs elevated"
    ],
    answer: 1,
    explanation: "Ischemic stroke: tPA (thrombolytic) can be given within 3-4.5 hours of symptom onset at a stroke center. Every minute of delay = loss of approximately 1.9 million neurons. Rapid transport and pre-notification are critical. Check glucose (hypoglycemia mimics stroke). Do not give aspirin until hemorrhagic stroke is ruled out."
  },
  {
    id: "med-016", domain: "medical",
    q: "Carbon monoxide poisoning is dangerous because CO:",
    options: [
      "Destroys lung tissue on contact",
      "Binds hemoglobin with 200x greater affinity than oxygen, reducing oxygen delivery",
      "Causes severe bronchospasm",
      "Is detectable by smell, allowing early warning"
    ],
    answer: 1,
    explanation: "CO binds hemoglobin with 200-250x greater affinity than oxygen, forming carboxyhemoglobin and reducing oxygen delivery to tissues. CO is colorless and odorless -- undetectable without a CO monitor. Pulse oximetry reads falsely normal because it cannot distinguish oxyhemoglobin from carboxyhemoglobin."
  },
  {
    id: "med-017", domain: "medical",
    q: "A patient presents with fever, headache, stiff neck, and a petechial rash. You should suspect:",
    options: [
      "Viral meningitis -- transport routinely",
      "Bacterial meningitis or meningococcemia -- PPE and rapid transport",
      "Allergic reaction -- administer epinephrine",
      "Subarachnoid hemorrhage"
    ],
    answer: 1,
    explanation: "Meningitis signs (fever, headache, nuchal rigidity) plus petechial/purpuric rash suggests meningococcal disease (Neisseria meningitidis) -- a bacterial meningitis that can progress to septic shock in hours. Don full PPE (droplet precautions), rapid transport, notify receiving facility. This is a true emergency."
  },
  {
    id: "med-018", domain: "medical",
    q: "A patient in diabetic ketoacidosis (DKA) will typically display which breathing pattern?",
    options: [
      "Cheyne-Stokes respirations",
      "Kussmaul respirations (deep, rapid)",
      "Ataxic breathing",
      "Biot's respirations"
    ],
    answer: 1,
    explanation: "Kussmaul respirations: deep, rapid, labored breathing -- the body's attempt to blow off CO2 and compensate for metabolic acidosis in DKA. The breath may smell fruity (acetone from ketone production). Other DKA signs: polyuria, polydipsia, nausea, abdominal pain, dehydration."
  },
  {
    id: "med-019", domain: "medical",
    q: "A patient is having an acute asthma attack. Which finding is most concerning for severe, life-threatening status?",
    options: [
      "Wheezing audible without a stethoscope",
      "SpO2 of 94%",
      "Silent chest (no wheeze on auscultation)",
      "Respiratory rate of 24"
    ],
    answer: 2,
    explanation: "Silent chest (no wheezing) in an asthma attack indicates minimal air movement -- the patient is moving so little air that there is no turbulence to produce wheeze. This is a pre-arrest finding. Other ominous signs: inability to speak, diaphoresis, altered mental status, accessory muscle use, SpO2 below 90%."
  },
  {
    id: "med-020", domain: "medical",
    q: "A patient presents with crushing substernal chest pain, diaphoresis, and nausea. His 12-lead shows normal sinus rhythm with no ST changes. You should:",
    options: [
      "Rule out ACS -- a normal 12-lead means no heart attack",
      "Treat as possible ACS -- a normal prehospital 12-lead does not rule out MI",
      "Treat as musculoskeletal pain and transport non-emergently",
      "Wait for troponin results before treating"
    ],
    answer: 1,
    explanation: "A normal prehospital 12-lead does not rule out NSTEMI or unstable angina. Troponin elevation (the gold-standard MI marker) occurs 3-6 hours after injury and requires a lab draw. Clinical presentation drives prehospital treatment. Treat as ACS: aspirin, oxygen if SpO2 <94%, nitro if appropriate, rapid transport."
  },
  {
    id: "med-021", domain: "medical",
    q: "Which of the following is a sign of right-sided heart failure?",
    options: [
      "Pulmonary edema with bilateral crackles",
      "Peripheral edema, JVD, and ascites",
      "Pink frothy sputum",
      "Severe dyspnea worsened by lying flat"
    ],
    answer: 1,
    explanation: "Right heart failure: the right ventricle cannot pump blood forward into the lungs, causing backup into systemic veins. Signs: peripheral edema (dependent), JVD, hepatomegaly, ascites. Left heart failure backs up into the pulmonary circulation: crackles, pulmonary edema, pink frothy sputum, orthopnea."
  },
  {
    id: "med-022", domain: "medical",
    q: "A patient with altered mental status has a blood glucose of 28 mg/dL. After giving oral glucose, she begins to improve but then rapidly deteriorates again. The most likely reason is:",
    options: [
      "The oral glucose was ineffective",
      "She has a long-acting insulin or sulfonylurea overdose causing recurrent hypoglycemia",
      "She is developing DKA",
      "The glucometer reading was inaccurate"
    ],
    answer: 1,
    explanation: "Recurrent hypoglycemia after treatment suggests a long-acting agent (NPH insulin, glargine, sulfonylurea medications like glipizide). These patients require transport and IV glucose infusion -- a single glucose correction will wear off. Always transport hypoglycemic patients who took long-acting medications."
  },
  {
    id: "med-023", domain: "medical",
    q: "A patient presents with wheezing, urticaria, hypotension, and angioedema after eating shellfish. He is conscious. Treatment priority is:",
    options: [
      "Diphenhydramine IV first -- it is safer than epinephrine",
      "Epinephrine 0.3 mg IM immediately",
      "Establish IV access and run a saline bolus for the hypotension",
      "Albuterol nebulization for the bronchospasm"
    ],
    answer: 1,
    explanation: "This is anaphylaxis. Epinephrine is the only treatment that addresses all components -- bronchospasm, vasodilation, angioedema. Give it first. IV fluids and albuterol are adjuncts. Antihistamines are adjuncts only -- too slow to treat the acute anaphylactic response."
  },
  {
    id: "med-024", domain: "medical",
    q: "Pulmonary embolism classically presents with:",
    options: [
      "Gradual onset dyspnea, bilateral crackles, and peripheral edema",
      "Sudden onset dyspnea, pleuritic chest pain, and tachycardia",
      "Productive cough, fever, and localized crackles",
      "Exertional chest pain relieved by rest"
    ],
    answer: 1,
    explanation: "PE: sudden onset dyspnea, pleuritic chest pain (worsens with inspiration), tachycardia, tachypnea, may have hemoptysis. Risk factors: DVT, immobility, recent surgery, oral contraceptives, malignancy. SpO2 often drops. Diagnosis confirmed in hospital with CT pulmonary angiogram."
  },
  {
    id: "med-025", domain: "medical",
    q: "A patient has a known seizure disorder and is post-ictal. She is breathing and has a pulse. Your priority is:",
    options: [
      "Insert an OPA to protect the airway",
      "Position laterally, protect airway, suction if needed, transport",
      "Give anticonvulsants immediately to prevent another seizure",
      "Restrain her to prevent injury during post-ictal agitation"
    ],
    answer: 1,
    explanation: "Post-ictal state: the patient is exhausted and recovering. Airway management (lateral position to prevent aspiration, suction if needed) is the priority. Do not restrain. Do not insert an OPA unless she is deeply unresponsive with no gag reflex. Protect her from injury and allow recovery. Transport."
  },
  {
    id: "med-026", domain: "medical",
    q: "Which assessment finding most reliably indicates adequate perfusion?",
    options: [
      "Normal blood pressure",
      "Normal mental status",
      "Heart rate below 100",
      "SpO2 above 95%"
    ],
    answer: 1,
    explanation: "Mental status is the most sensitive clinical indicator of cerebral perfusion. The brain is exquisitely sensitive to reduced oxygen delivery -- confusion, agitation, or decreased LOC are early indicators of shock even before BP drops. Blood pressure can be maintained by compensatory mechanisms until late in shock."
  },
  {
    id: "med-027", domain: "medical",
    q: "A patient has taken too much of his blood pressure medication and his BP is 70/40 with HR of 54. This presentation is consistent with:",
    options: [
      "Sympathomimetic overdose",
      "Beta-blocker or calcium channel blocker overdose",
      "Opioid overdose",
      "Anticholinergic overdose"
    ],
    answer: 1,
    explanation: "Beta-blocker and calcium channel blocker overdoses cause bradycardia and hypotension by blocking cardiac chronotropy and inotropy. This is life-threatening. Treatment includes atropine for bradycardia, high-dose insulin therapy, calcium, and vasopressors -- all in-hospital. Field treatment: supportive care, rapid transport."
  },
  {
    id: "med-028", domain: "medical",
    q: "A patient has facial swelling and stridor after starting a new ACE inhibitor medication last week. This is most likely:",
    options: [
      "Anaphylaxis requiring epinephrine",
      "ACE inhibitor-induced angioedema",
      "Allergic contact dermatitis",
      "Ludwig's angina"
    ],
    answer: 1,
    explanation: "ACE inhibitor-induced angioedema can occur weeks to years after starting the medication. It causes facial, tongue, and airway swelling from bradykinin accumulation. It does NOT typically respond to epinephrine, antihistamines, or steroids the way IgE-mediated anaphylaxis does. Airway management is the priority -- this can be rapidly fatal."
  },
  {
    id: "med-029", domain: "medical",
    q: "A patient is found in a car with the engine running in a closed garage. He is unconscious with SpO2 reading 99%. You should:",
    options: [
      "Trust the SpO2 -- the reading is reassuring",
      "Suspect CO poisoning -- SpO2 is unreliable; apply high-flow oxygen and remove from exposure",
      "Suspect opioid overdose and administer naloxone",
      "Reassess with a different pulse ox device"
    ],
    answer: 1,
    explanation: "Classic CO poisoning scenario. SpO2 is falsely normal because the pulse oximeter cannot distinguish oxyhemoglobin from carboxyhemoglobin. Remove from exposure immediately, apply 100% oxygen via non-rebreather (accelerates CO elimination), consider hyperbaric oxygen transport for severe cases."
  },
  {
    id: "med-030", domain: "medical",
    q: "A patient presents with sudden onset of unilateral facial drooping that has been present for 3 days. He has no other neurological symptoms. This is most likely:",
    options: [
      "Ischemic stroke -- activate stroke protocol immediately",
      "Bell's palsy -- peripheral facial nerve palsy, not stroke",
      "Hemorrhagic stroke",
      "TIA with persistent deficits"
    ],
    answer: 1,
    explanation: "Bell's palsy is peripheral cranial nerve VII palsy causing unilateral facial weakness including the forehead (upper and lower face affected). Stroke spares the forehead (central lesion, contralateral upper face preserved). Bell's palsy is gradual, isolated, and not a stroke emergency -- but always confirm with stroke screening."
  },
  {
    id: "med-031", domain: "medical",
    q: "A patient experiencing a panic attack has perioral tingling, carpopedal spasms, and feels she cannot breathe. Her SpO2 is 99% and RR is 28. This is caused by:",
    options: [
      "Hypoxia from hyperventilation",
      "Hypocapnia (low CO2) from hyperventilation causing alkalosis",
      "Hypercapnia from inadequate ventilation",
      "Lactic acidosis"
    ],
    answer: 1,
    explanation: "Hyperventilation syndrome: breathing too fast blows off CO2, causing respiratory alkalosis. Low CO2 causes cerebral vasoconstriction (dizziness, perioral tingling) and increased neuromuscular excitability (carpopedal spasm). SpO2 is normal or elevated. Reassure and coach breathing. Rule out organic causes before concluding anxiety."
  },
  {
    id: "med-032", domain: "medical",
    q: "Which of the following best describes the difference between a TIA and an ischemic stroke?",
    options: [
      "TIA involves only motor symptoms; stroke involves only sensory symptoms",
      "TIA symptoms fully resolve within 24 hours with no permanent injury; stroke causes permanent deficits",
      "TIA is more dangerous than stroke",
      "TIA only occurs in patients under 60"
    ],
    answer: 1,
    explanation: "TIA (transient ischemic attack): stroke symptoms that fully resolve, by definition within 24 hours (usually minutes). No permanent neuronal injury. However, TIA is a major stroke warning -- risk of subsequent stroke is highest in the first 48 hours. Treat TIA with the same urgency as stroke."
  },
  {
    id: "med-033", domain: "medical",
    q: "A patient with hypothyroidism is found unresponsive with a temperature of 92 degreesF, bradycardia of 40, and hypotension. This presentation is consistent with:",
    options: [
      "Thyroid storm",
      "Myxedema coma",
      "Addisonian crisis",
      "Hypothermic cardiac arrest"
    ],
    answer: 1,
    explanation: "Myxedema coma: severe hypothyroidism decompensation with extreme hypothermia, bradycardia, hypotension, altered mental status, hypoventilation. Treatment is supportive -- passive rewarming, airway management, IV fluids. Thyroid storm is the opposite: hyperthyroidism crisis with hyperthermia, tachycardia, agitation."
  },
  {
    id: "med-034", domain: "medical",
    q: "A patient presents with severe flank pain radiating to the groin, nausea, and diaphoresis. He is writhing and cannot find a comfortable position. Most likely diagnosis:",
    options: [
      "Aortic aneurysm",
      "Renal colic from kidney stone",
      "Appendicitis",
      "Ectopic pregnancy"
    ],
    answer: 1,
    explanation: "Renal colic: severe, colicky flank pain radiating to the groin from a ureteral stone. Patients are characteristically restless and cannot find a comfortable position (vs. peritonitis, where patients lie still). Nausea and diaphoresis from severe pain. Hematuria may be present. Most are not life-threatening but require pain management and evaluation."
  },
  {
    id: "med-035", domain: "medical",
    q: "Last Known Well time is critical in stroke management because:",
    options: [
      "It determines whether the patient needs a CT scan",
      "It establishes the clock for thrombolytic eligibility (3-4.5 hour window)",
      "It determines whether the stroke is ischemic or hemorrhagic",
      "It is used to calculate the NIH Stroke Scale"
    ],
    answer: 1,
    explanation: "Last Known Well (LKW) is the last time the patient was confirmed to be at their neurological baseline. Thrombolytics (tPA) can be given within 3-4.5 hours of LKW for ischemic stroke. If the patient woke up with symptoms, LKW is when they went to sleep. Accurate LKW documentation is critical and could determine whether the patient receives treatment."
  },
  {
    id: "med-036", domain: "medical",
    q: "A patient presents with BP 220/130, headache, and visual changes. She has a history of pre-eclampsia in a current pregnancy at 36 weeks. You should suspect:",
    options: [
      "Hypertensive urgency -- transport non-emergently",
      "Eclampsia -- seizure risk is high, transport emergently",
      "Migraine headache",
      "Normal third-trimester hypertension"
    ],
    answer: 1,
    explanation: "Eclampsia = pre-eclampsia plus seizures. Severe pre-eclampsia (BP >160/110, headache, visual changes, epigastric pain after 20 weeks) is a pre-eclamptic emergency with high seizure risk. Left lateral position, high-flow oxygen, IV magnesium per protocol, rapid transport to OB-capable facility."
  },
  {
    id: "med-037", domain: "medical",
    q: "Which medication is used to treat symptomatic hypoglycemia in a patient who cannot receive anything by mouth and IV access cannot be established?",
    options: [
      "Insulin",
      "Glucagon IM",
      "Oral dextrose gel placed under the tongue",
      "Epinephrine IM"
    ],
    answer: 1,
    explanation: "Glucagon IM (1 mg in adults) stimulates hepatic glycogen breakdown, releasing glucose. Used when IV access cannot be established and the patient is unresponsive. Onset 10-20 minutes. Requires adequate hepatic glycogen stores -- may be ineffective in malnourished or alcoholic patients. Oral glucose is only for responsive patients who can swallow."
  },
  {
    id: "med-038", domain: "medical",
    q: "A patient is in septic shock with altered mental status, fever of 103 degreesF, BP 82/50, and HR of 128. Prehospital treatment priorities include:",
    options: [
      "Administer broad-spectrum antibiotics",
      "High-flow oxygen, IV access with fluid resuscitation, rapid transport",
      "Cool the patient aggressively to normalize temperature",
      "Administer epinephrine for the hypotension"
    ],
    answer: 1,
    explanation: "Septic shock prehospital priorities: high-flow oxygen, IV access (two large-bore IVs), fluid resuscitation (30 mL/kg crystalloid is the hospital goal), obtain blood cultures if possible, rapid transport. Early antibiotics are hospital-initiated. Temperature management: treat fever only if severe. Goal is perfusion restoration."
  },
  {
    id: "med-039", domain: "medical",
    q: "A patient was stung by a bee 10 minutes ago and now has urticaria and mild dyspnea. His BP is 118/76. This is classified as:",
    options: [
      "Mild allergic reaction -- antihistamines only",
      "Anaphylaxis -- administer epinephrine",
      "Anaphylactoid reaction -- observe only",
      "Vasovagal reaction -- position supine"
    ],
    answer: 1,
    explanation: "Anaphylaxis diagnostic criteria: acute onset after exposure to allergen with involvement of skin/mucosa AND either respiratory compromise OR reduced BP/syncope. This patient has skin involvement (urticaria) AND respiratory compromise (dyspnea). This is anaphylaxis -- give epinephrine. Dyspnea can progress to airway loss rapidly."
  },
  {
    id: "med-040", domain: "medical",
    q: "A dialysis patient has missed three sessions. He presents with weakness, peaked T waves on ECG, and bradycardia. The most dangerous electrolyte abnormality is:",
    options: [
      "Hyponatremia",
      "Hyperkalemia",
      "Hypocalcemia",
      "Hypomagnesemia"
    ],
    answer: 1,
    explanation: "Dialysis patients accumulate potassium between sessions. Hyperkalemia causes peaked T waves, widened QRS, and ultimately VF or cardiac arrest. Missed dialysis = severe hyperkalemia risk. Treatment in hospital: calcium, sodium bicarbonate, insulin+glucose, kayexalate, emergent dialysis. Field: recognize, transport urgently, cardiac monitoring."
  },
  {
    id: "med-041", domain: "medical",
    q: "A patient presents with severe abdominal pain, a pulsatile abdominal mass, and hypotension. You should suspect:",
    options: [
      "Bowel obstruction",
      "Abdominal aortic aneurysm rupture",
      "Acute pancreatitis",
      "Mesenteric ischemia"
    ],
    answer: 1,
    explanation: "Ruptured AAA classic triad: severe abdominal/back pain, pulsatile abdominal mass, hypotension. This is immediately life-threatening. Do NOT palpate the mass repeatedly. IV access en route, rapid transport to a vascular surgery center. Mortality approaches 90% without emergency surgical repair."
  },
  {
    id: "med-042", domain: "medical",
    q: "SAMPLE history stands for:",
    options: [
      "Symptoms, Allergies, Medications, Prior history, Last intake, Events",
      "Signs, Assessment, Mechanism, Pain, Location, Etiology",
      "Severity, Allergies, Medical history, Pulse, LOC, EMS response",
      "Symptoms, Age, Mechanism, Presentation, Level of consciousness, Events"
    ],
    answer: 0,
    explanation: "SAMPLE: Signs/Symptoms, Allergies, Medications, Pertinent past medical history, Last oral intake, Events leading to the call. This systematic history covers the essential elements for any patient encounter and should be part of every patient contact."
  },
  {
    id: "med-043", domain: "medical",
    q: "A patient with Parkinson's disease falls and cannot get up. His caregiver reports he has been increasingly rigid and unresponsive to his medications. Your assessment reveals no acute injuries. You should:",
    options: [
      "Assist him up and ensure he is stable at home",
      "Transport -- he may have a medication issue or infection causing decompensation",
      "Call his neurologist before transporting",
      "Document and clear the scene -- this is a chronic condition"
    ],
    answer: 1,
    explanation: "Acute decompensation of a chronic neurological condition is a red flag. Increased rigidity unresponsive to medications in a Parkinson's patient can indicate: missed doses, medication interaction, urinary tract infection (common cause of AMS in elderly), or neuroleptic malignant syndrome. Transport for evaluation."
  },
  {
    id: "med-044", domain: "medical",
    q: "A patient presents with severe low back pain radiating down the left leg, with numbness and weakness of the left foot. This is most consistent with:",
    options: [
      "Acute MI with atypical presentation",
      "Lumbar disc herniation with nerve root compression",
      "Renal colic",
      "Abdominal aortic aneurysm"
    ],
    answer: 1,
    explanation: "Disc herniation with radiculopathy: back pain radiating down the leg (sciatica), numbness/tingling, weakness in the extremity in a dermatomal/myotomal pattern. Concerning findings requiring urgent evaluation: bilateral leg weakness, saddle anesthesia, or bowel/bladder dysfunction (cauda equina syndrome -- surgical emergency)."
  },
  {
    id: "med-045", domain: "medical",
    q: "A patient in alcohol withdrawal has a HR of 128, BP 168/104, diaphoresis, and is having visual hallucinations. He last drank 48 hours ago. You should suspect:",
    options: [
      "Alcohol intoxication",
      "Delirium tremens (DTs)",
      "Wernicke's encephalopathy",
      "Methanol poisoning"
    ],
    answer: 1,
    explanation: "Delirium tremens: severe alcohol withdrawal syndrome occurring 24-96 hours after last drink. Autonomic instability (tachycardia, hypertension, diaphoresis), hallucinations (visual, tactile), seizures, and delirium. 5-10% mortality without treatment. This is a medical emergency requiring benzodiazepines and hospital admission."
  },

  // ============================================================
  // OPERATIONS -- 18 questions
  // ============================================================

  {
    id: "ops-001", domain: "operations",
    q: "The first arriving unit at a multi-vehicle crash with multiple patients should:",
    options: [
      "Begin triaging patients immediately",
      "Establish incident command and announce to dispatch",
      "Wait for additional units before taking any action",
      "Contact medical direction for guidance"
    ],
    answer: 1,
    explanation: "First unit on scene automatically assumes Incident Command. Announce to dispatch: 'Unit X is on scene establishing [location] Command.' Size up the incident, call for resources, establish ICS structure. Begin triage only after establishing command -- freelancing creates chaos at MCIs."
  },
  {
    id: "ops-002", domain: "operations",
    q: "START triage: a patient is not breathing after you reposition the airway. You should tag him:",
    options: [
      "Red (Immediate)",
      "Yellow (Delayed)",
      "Black (Expectant)",
      "Green (Minor)"
    ],
    answer: 2,
    explanation: "START triage: if the patient is not breathing after simple airway repositioning, tag Black (Expectant). In an MCI, resources cannot be committed to a patient with unsurvivable injuries. This is the hardest MCI reality. Move to the next patient. (Exception: pediatric START/JumpSTART may differ for children.)"
  },
  {
    id: "ops-003", domain: "operations",
    q: "A patient is breathing at a rate of 32 breaths per minute at an MCI. Using START triage, you assign:",
    options: [
      "Green (Minor)",
      "Yellow (Delayed)",
      "Red (Immediate)",
      "Black (Expectant)"
    ],
    answer: 2,
    explanation: "START triage: respiratory rate >30 or <10 = Red (Immediate). This patient has a rate of 32 -- immediately Red based on respiratory rate alone. No further assessment needed for triage category. Tag and move."
  },
  {
    id: "ops-004", domain: "operations",
    q: "The Incident Command System (ICS) uses a span of control of:",
    options: [
      "2-3 subordinates per supervisor",
      "3-7 subordinates per supervisor",
      "5-10 subordinates per supervisor",
      "No defined limit"
    ],
    answer: 1,
    explanation: "ICS span of control: 3-7 subordinates per supervisor, optimally 5. This maintains manageable oversight. When a supervisor has too many subordinates, communication breaks down and accountability is lost. ICS expands by adding supervisory levels as an incident grows."
  },
  {
    id: "ops-005", domain: "operations",
    q: "At a hazmat incident, EMTs operate in which zone?",
    options: [
      "Hot zone -- immediate patient access",
      "Warm zone -- decontamination corridor",
      "Cold zone -- treatment of decontaminated patients",
      "Any zone with appropriate PPE"
    ],
    answer: 2,
    explanation: "Hazmat zones: Hot = contaminated area, entry requires hazmat PPE/SCBA. Warm = decontamination corridor, specialized decon teams. Cold = clean zone where EMTs receive and treat decontaminated patients. EMTs do NOT enter the hot or warm zones without proper hazmat training and equipment."
  },
  {
    id: "ops-006", domain: "operations",
    q: "A patient refuses transport after a fall with a head laceration. He is alert and oriented x4. To complete a proper refusal, you must:",
    options: [
      "Get his signature and leave",
      "Document capacity assessment, risks explained, alternatives offered, instruction to call if worse, and obtain signature with witness",
      "Call his family member to make the decision",
      "Contact medical direction to override the refusal"
    ],
    answer: 1,
    explanation: "Informed refusal requires: documented decision-making capacity, explanation of risks of refusal, alternatives offered, instructions to call 911 if symptoms worsen, and patient plus witness signatures. A signature alone without documented capacity and risk explanation is legally insufficient."
  },
  {
    id: "ops-007", domain: "operations",
    q: "The due regard standard for emergency vehicle operation means:",
    options: [
      "Lights and sirens provide absolute right of way",
      "Emergency drivers must drive as a reasonable, careful person would under the same circumstances",
      "Speed limits do not apply during emergency response",
      "Emergency drivers cannot be held liable for accidents during response"
    ],
    answer: 1,
    explanation: "Due regard: emergency exemptions from traffic laws come with the condition that the driver exercises the same care a reasonable, careful driver would under the circumstances. Lights and siren REQUEST right of way -- they don't guarantee it. Negligent emergency driving creates personal and agency liability."
  },
  {
    id: "ops-008", domain: "operations",
    q: "A PCR (patient care report) serves which of the following purposes?",
    options: [
      "Medical record and legal document only",
      "Medical record, legal document, billing record, and quality improvement tool",
      "Billing record only -- clinical details go in the verbal report",
      "Internal communication between crews only"
    ],
    answer: 1,
    explanation: "The PCR serves multiple critical functions: medical record (continuity of care), legal document (admissible in court), billing record (insurance reimbursement), QI/QA tool (system performance), and research data. Complete, accurate, timely documentation is a professional and legal obligation."
  },
  {
    id: "ops-009", domain: "operations",
    q: "The most dangerous moment during emergency vehicle operation is:",
    options: [
      "Highway driving at high speed",
      "Navigating intersections",
      "Backing into a scene",
      "Driving in adverse weather"
    ],
    answer: 1,
    explanation: "Intersections are the most lethal moment in emergency driving. Drivers do not always yield even with lights and sirens. Protocol: Reduce speed, Alert drivers, Slow to confirm all lanes are clear before proceeding. Near-stop before entering the intersection. Never assume an intersection is clear."
  },
  {
    id: "ops-010", domain: "operations",
    q: "Medical direction in EMS refers to:",
    options: [
      "The hospital the patient is transported to",
      "Physician oversight of EMT clinical practice, both online and offline",
      "The medical protocols printed in the EMT's manual",
      "The charge nurse at the receiving facility"
    ],
    answer: 1,
    explanation: "Medical direction: physicians who oversee EMS systems and providers. Online (direct) = real-time phone/radio communication with a physician. Offline (indirect) = protocols, standing orders, training, and QI review developed by the medical director. EMTs function as an extension of the medical director's license in the field."
  },
  {
    id: "ops-011", domain: "operations",
    q: "Which of the following is an emergency move, appropriate despite potential spinal risk?",
    options: [
      "A patient with a possible ankle fracture on a staircase",
      "A patient with altered mental status in a car with the airbag deployed",
      "An unconscious patient in a building on fire",
      "A patient with neck pain after a low-speed MVA"
    ],
    answer: 2,
    explanation: "Emergency moves are justified when there is an immediate threat to life: fire, structural collapse, hazardous atmosphere, or inability to provide life-saving care in the current position (e.g., CPR). Move along the long axis of the body. Spinal precautions are secondary to immediate life threats."
  },
  {
    id: "ops-012", domain: "operations",
    q: "A patient's family member is threatening you at a scene. You should:",
    options: [
      "Attempt to calm the family member while continuing patient care",
      "Retreat to a safe location and request law enforcement before continuing",
      "Ignore the threat and focus on the patient",
      "Have your partner restrain the family member"
    ],
    answer: 1,
    explanation: "Your safety takes absolute priority. An EMS provider who becomes a victim cannot help the patient. Retreat to a safe location, request law enforcement, and do not re-enter until the scene is secured. No patient care obligation overrides personal safety."
  },
  {
    id: "ops-013", domain: "operations",
    q: "The correct sequence for donning and doffing PPE to prevent self-contamination is:",
    options: [
      "Gown, gloves, mask, eye protection -- remove in reverse",
      "Mask/respirator, gown, gloves, eye protection -- remove gloves first when doffing",
      "Gloves first (donning), gloves last (doffing)",
      "Any sequence is acceptable if done quickly"
    ],
    answer: 1,
    explanation: "Donning: mask/respirator, gown, eye protection, gloves. Doffing (most contaminated outside): gloves first, eye protection, gown, mask last (least contaminated). Gloves are doffed first because they are the most contaminated surface. Perform hand hygiene at each step. The gloves-off technique: peel one glove and hold in the other, then slide fingers under the second glove."
  },
  {
    id: "ops-014", domain: "operations",
    q: "A patient with decision-making capacity refuses to consent to treatment. You should:",
    options: [
      "Treat him anyway -- the medical need overrides his refusal",
      "Call his family to override the refusal",
      "Respect the refusal, document thoroughly, and ensure he understands the risks",
      "Contact law enforcement to compel treatment"
    ],
    answer: 2,
    explanation: "Competent adults have the right to refuse any medical treatment, even life-saving treatment. Exceptions: patients who lack decision-making capacity (intoxication, AMS, mental illness with immediate danger). Document the refusal, ensure informed refusal criteria are met, advise to call if symptoms change."
  },
  {
    id: "ops-015", domain: "operations",
    q: "Implied consent allows treatment of an unconscious patient because:",
    options: [
      "Family members can consent for unconscious adults",
      "It is assumed a reasonable person would consent to life-saving treatment if able",
      "EMTs have authority to treat any patient regardless of consent",
      "Unconscious patients have no legal rights"
    ],
    answer: 1,
    explanation: "Implied consent: the legal doctrine that an unconscious patient would consent to emergency treatment if they were able. It allows treatment of unresponsive patients without express consent. Also applies to minors when parents cannot be reached for emergency care."
  },
  {
    id: "ops-016", domain: "operations",
    q: "At the scene of a crime, your priorities for evidence preservation include:",
    options: [
      "Do not enter the scene until law enforcement clears it",
      "Touch only what is necessary for patient care and document what was moved",
      "Avoid all contact with the scene to preserve evidence",
      "Secure evidence yourself before treating the patient"
    ],
    answer: 1,
    explanation: "Crime scene: patient care takes priority over evidence preservation once the scene is safe. Disturb as little as possible. Document what was touched or moved and why. Avoid cutting through bullet holes or knife wounds in clothing. Never disturb potential evidence unless required for patient care. Brief law enforcement on scene upon arrival."
  },
  {
    id: "ops-017", domain: "operations",
    q: "A properly written PCR should include which documentation for an oxygen intervention?",
    options: [
      "'Oxygen applied' is sufficient",
      "Device, flow rate, SpO2 before and after, patient response",
      "Flow rate and destination hospital",
      "SpO2 reading and time of application only"
    ],
    answer: 1,
    explanation: "Complete oxygen documentation: device (NRB, nasal cannula, BVM), flow rate (LPM), baseline SpO2, SpO2 after intervention, and patient response. 'Oxygen applied' is legally and clinically inadequate. Document what you did, why you did it, and what happened as a result."
  },
  {
    id: "ops-018", domain: "operations",
    q: "Which of the following is the correct definition of negligence in EMS?",
    options: [
      "Intentionally harming a patient",
      "Treating a patient without consent",
      "Failure to act as a reasonably prudent EMT would under the same circumstances, causing harm",
      "Abandoning a patient after care is initiated"
    ],
    answer: 2,
    explanation: "Negligence requires four elements: Duty (you had an obligation to act), Breach (you failed to meet the standard of care), Causation (the breach caused the harm), and Damages (the patient suffered actual harm). Abandonment is a separate legal concept (ending care without transfer). Treating without consent is battery."
  },

  // ============================================================
  // SPECIAL POPULATIONS -- 17 questions
  // ============================================================

  {
    id: "spc-001", domain: "special",
    q: "The most important anatomical difference in a pediatric airway compared to an adult is:",
    options: [
      "The pediatric airway is larger relative to body size",
      "The tongue is proportionally larger and the airway is narrower",
      "The epiglottis is shorter and less flexible",
      "The trachea is more rigid and less likely to collapse"
    ],
    answer: 1,
    explanation: "Pediatric airway differences: proportionally larger tongue (most common cause of airway obstruction), smaller and narrower airway (small amounts of edema cause significant obstruction), longer floppy epiglottis, more anterior and superior airway opening. These differences require modified positioning and technique."
  },
  {
    id: "spc-002", domain: "special",
    q: "A 2-year-old is choking and cannot cough. She is conscious. Your treatment is:",
    options: [
      "Abdominal thrusts (Heimlich) immediately",
      "Five back blows followed by five chest thrusts, alternating",
      "Blind finger sweeps and back blows",
      "Position supine and give 2 rescue breaths"
    ],
    answer: 1,
    explanation: "For a choking child (1 year to puberty) who is conscious: 5 back blows and 5 abdominal thrusts alternating. Infants under 1 year: 5 back blows and 5 chest thrusts (NOT abdominal thrusts -- risk of organ damage). Continue until object is expelled or patient loses consciousness."
  },
  {
    id: "spc-003", domain: "special",
    q: "A pregnant patient at 32 weeks is unresponsive after a trauma. When performing CPR you should:",
    options: [
      "Position supine with legs elevated",
      "Manually displace the uterus to the left or tilt the backboard 15-30 degrees",
      "Perform CPR in a sitting position",
      "Perform CPR normally -- pregnancy does not affect CPR technique"
    ],
    answer: 1,
    explanation: "The gravid uterus compresses the inferior vena cava in the supine position (supine hypotensive syndrome), reducing venous return and cardiac output. During CPR, manually displace the uterus to the left or tilt the board 15-30 degrees left lateral. This restores venous return and improves CPR effectiveness."
  },
  {
    id: "spc-004", domain: "special",
    q: "An elderly patient taking warfarin (Coumadin) falls and strikes her head. She has no loss of consciousness and is alert. You should:",
    options: [
      "Transport only if she has headache or neurological symptoms",
      "Transport -- anticoagulants significantly increase intracranial hemorrhage risk after head trauma",
      "Observe for 30 minutes on scene and transport if symptoms develop",
      "Advise her to stop warfarin and follow up with her doctor"
    ],
    answer: 1,
    explanation: "Anticoagulated patients (warfarin, NOACs, aspirin) who sustain head trauma have significantly elevated risk of intracranial hemorrhage even from low-energy mechanisms and even without immediate symptoms. The bleed can be slow and present hours later. Transport all anticoagulated patients with head trauma."
  },
  {
    id: "spc-005", domain: "special",
    q: "Normal respiratory rate for a newborn is:",
    options: [
      "12-20 breaths per minute",
      "20-30 breaths per minute",
      "30-60 breaths per minute",
      "60-80 breaths per minute"
    ],
    answer: 2,
    explanation: "Normal vital sign ranges by age: Newborn (0-1 month): RR 30-60, HR 120-160. Infant (1-12 months): RR 25-50, HR 100-160. Toddler (1-3 years): RR 20-30, HR 90-150. School age: RR 15-25, HR 70-120. Adolescent: RR 12-20, HR 60-100."
  },
  {
    id: "spc-006", domain: "special",
    q: "A neonate is born and does not cry immediately. After stimulation and warming, she still has a HR of 80 bpm and weak respiratory effort. You should:",
    options: [
      "Continue stimulation for another 2 minutes",
      "Begin positive pressure ventilation at 40-60 breaths per minute",
      "Begin chest compressions immediately",
      "Administer epinephrine"
    ],
    answer: 1,
    explanation: "Neonatal resuscitation: if the newborn has HR below 100 or inadequate respiratory effort after drying and stimulation, begin positive pressure ventilation (BVM or mask) at 40-60 breaths/min. Chest compressions begin only if HR is below 60 despite 30 seconds of effective ventilation."
  },
  {
    id: "spc-007", domain: "special",
    q: "An infant is found limp and pulseless. The correct CPR compression technique for a single rescuer is:",
    options: [
      "2 fingers on the sternum, one finger-width below the nipple line",
      "Heel of one hand on the lower sternum",
      "Two thumbs encircling the chest with fingers wrapped around the back (two-rescuer technique)",
      "3 fingers in the center of the chest"
    ],
    answer: 0,
    explanation: "Infant single-rescuer CPR: 2 fingers on the sternum, just below the nipple line. Depth: approximately 1.5 inches (4 cm), one-third the chest diameter. Two-rescuer technique uses two thumbs with hands encircling the chest -- preferred when available. Rate: 100-120/min. 30:2 ratio without advanced airway."
  },
  {
    id: "spc-008", domain: "special",
    q: "A 14-year-old refuses treatment for a laceration, stating she does not want her parents called. You should:",
    options: [
      "Honor her refusal -- she is old enough to decide",
      "Treat and transport -- minors cannot independently refuse care",
      "Contact her parents and await their decision before treating",
      "Leave the scene since she refuses"
    ],
    answer: 1,
    explanation: "Minors (under 18 in most states) cannot independently refuse emergency medical care. Parental or guardian consent is required. Exceptions to parental consent requirement: emancipated minors (married, military, financially independent, court-ordered), emergency situations, and certain conditions (STIs, substance abuse, mental health) in some states."
  },
  {
    id: "spc-009", domain: "special",
    q: "Sudden Infant Death Syndrome (SIDS) is most commonly associated with:",
    options: [
      "Prone sleeping position in infants under 1 year",
      "Formula feeding vs. breastfeeding",
      "Excessive room temperature",
      "Parental smoking only"
    ],
    answer: 0,
    explanation: "SIDS risk factors: prone (stomach) or side sleeping, soft bedding, co-sleeping, parental smoking (pre- and postnatal), prematurity. 'Back to Sleep' (supine positioning) significantly reduced SIDS rates. When you arrive to a possible SIDS call, begin resuscitation and document scene conditions for investigation."
  },
  {
    id: "spc-010", domain: "special",
    q: "An elderly patient with dementia is found confused at her baseline. Her caregiver reports she seems more confused than usual. You should:",
    options: [
      "This is her baseline -- no action required",
      "Assess for acute causes of worsening confusion: infection, medication change, metabolic cause",
      "Sedate her for transport safety",
      "Wait for her family before making any assessment"
    ],
    answer: 1,
    explanation: "Acute worsening of baseline dementia (acute-on-chronic confusion) is a common presentation of serious medical illness in elderly patients -- UTI, pneumonia, medication toxicity, metabolic derangement. Never attribute worsening confusion to dementia alone without ruling out acute causes. Assess and transport."
  },
  {
    id: "spc-011", domain: "special",
    q: "Fontanelle (soft spot) assessment in an infant helps evaluate:",
    options: [
      "Respiratory status",
      "Hydration and intracranial pressure",
      "Cardiovascular status",
      "Neurological development"
    ],
    answer: 1,
    explanation: "Anterior fontanelle assessment: Sunken = dehydration. Bulging = elevated ICP (meningitis, hydrocephalus, trauma). Flat and soft = normal. The fontanelle remains open until approximately 18 months. It provides a non-invasive window into ICP in infants."
  },
  {
    id: "spc-012", domain: "special",
    q: "A bariatric patient (350 lbs) needs to be moved from a second-floor bedroom to the ambulance. You should:",
    options: [
      "Attempt the move with your standard crew of two",
      "Request lift assist from fire, use bariatric equipment, and ensure adequate personnel",
      "Have the patient walk down to reduce the load",
      "Use the standard stretcher since it can support the weight"
    ],
    answer: 1,
    explanation: "Bariatric patients require additional personnel and specialized equipment. Standard stretchers and stair chairs may not be rated for the weight. Request fire department lift assist. Use bariatric equipment. Moving an inadequately staffed bariatric patient is the most common mechanism of EMS crew injury."
  },
  {
    id: "spc-013", domain: "special",
    q: "A patient with autism spectrum disorder becomes agitated during your assessment. The most effective approach is:",
    options: [
      "Restrain him for safety and proceed quickly",
      "Speak calmly, reduce stimulation (dim lights, minimize noise), involve a trusted caregiver",
      "Increase pace to complete the assessment before agitation worsens",
      "Administer midazolam IM to facilitate assessment"
    ],
    answer: 1,
    explanation: "Patients with ASD may be overwhelmed by lights, sirens, touch, and unfamiliar people. Strategies: calm voice, slow approach, minimize extraneous stimulation, involve a parent or caregiver who knows the patient's communication preferences and triggers. Avoid physical restraint unless safety requires it."
  },
  {
    id: "spc-014", domain: "special",
    q: "Which finding in a pediatric patient is a sign of decompensated shock?",
    options: [
      "Tachycardia with normal blood pressure",
      "Hypotension",
      "Mottled skin",
      "Prolonged capillary refill"
    ],
    answer: 1,
    explanation: "Children compensate for shock very well by increasing heart rate -- BP is maintained until very late in the shock progression (decompensated). Hypotension in a child is a very late, ominous, pre-arrest sign. Tachycardia, mottling, prolonged cap refill, and altered mental status are EARLY signs of shock in children."
  },
  {
    id: "spc-015", domain: "special",
    q: "A patient who is deaf is trying to communicate with you during assessment. The most appropriate action is:",
    options: [
      "Speak loudly and clearly -- many deaf patients can lip read",
      "Write questions on paper, use an interpreter if available, or use a smartphone",
      "Complete the assessment without communication -- use physical exam only",
      "Wait for a certified interpreter before beginning treatment"
    ],
    answer: 1,
    explanation: "Communication with deaf patients: written communication, interpreter (including video remote interpreting apps), lip reading if the patient prefers, picture boards. Do not delay emergency care waiting for an interpreter. A smartphone with a notes app is a quick solution. Some deaf patients speak and lip-read effectively."
  },
  {
    id: "spc-016", domain: "special",
    q: "Gestational age matters in obstetric emergencies because:",
    options: [
      "It has no clinical significance in the prehospital setting",
      "Viability of the fetus generally begins around 24 weeks, affecting resuscitation decisions",
      "It determines which hospital the patient should be transported to regardless of clinical status",
      "All obstetric emergencies are treated identically regardless of gestational age"
    ],
    answer: 1,
    explanation: "Fetal viability generally begins around 24 weeks gestation. Before viability, maternal survival is the sole focus. After viability, both maternal and fetal outcomes are considered. Gestational age also determines risk of complications: pre-eclampsia and placenta previa are more common in later pregnancy."
  },
  {
    id: "spc-017", domain: "special",
    q: "An elderly patient on multiple medications presents with confusion, urinary incontinence, and falls. These symptoms are collectively known as:",
    options: [
      "Normal aging",
      "Geriatric syndromes -- non-specific presentations of acute illness in elderly patients",
      "Early dementia",
      "Polypharmacy toxicity specifically"
    ],
    answer: 1,
    explanation: "Geriatric syndromes: non-specific presentations (confusion, falls, incontinence, functional decline) that represent the end result of multiple underlying problems in elderly patients. These are often the only signs of serious illness (UTI, MI, pneumonia) in older adults who may not mount typical responses. Always investigate."
  },

];

export const EXAM_META = {
  title: "NREMT EMT Practice Exam",
  totalQuestions: 120,
  timeLimit: 7200, // seconds (2 hours)
  passingScore: 0.80,
  borderlineScore: 0.70,
  lastReviewed: "March 2026",
  version: "1.0",
  disclaimer: "This is a practice tool designed to simulate the NREMT EMT examination format. It is not affiliated with, endorsed by, or approved by the National Registry of Emergency Medical Technicians. Content is for educational purposes only. Always follow the protocols established by your training program and medical director.",
};

// Weighted random selection -- pulls targetCount from each domain
export function buildExamDeck(questions, totalCount = 120) {
  const byDomain = {};
  questions.forEach(q => {
    if (!byDomain[q.domain]) byDomain[q.domain] = [];
    byDomain[q.domain].push(q);
  });

  const selected = [];
  Object.entries(EXAM_DOMAINS).forEach(([domain, config]) => {
    const pool = byDomain[domain] || [];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const count = Math.min(config.target, shuffled.length);
    selected.push(...shuffled.slice(0, count));
  });

  // Fill remaining slots if needed
  const remaining = totalCount - selected.length;
  if (remaining > 0) {
    const selectedIds = new Set(selected.map(q => q.id));
    const leftovers = questions
      .filter(q => !selectedIds.has(q.id))
      .sort(() => Math.random() - 0.5)
      .slice(0, remaining);
    selected.push(...leftovers);
  }

  // Final shuffle
  return selected.sort(() => Math.random() - 0.5);
}
