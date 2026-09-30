// Zero to EMT -- NREMT Exam Simulator Question Bank
// Last reviewed: September 2026
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
    q: "You arrive to find an unresponsive adult male. He is not breathing but has a strong carotid pulse. Your first action is:",
    options: [
      "Begin chest compressions right away at 100 per minute",
      "Insert a nasopharyngeal airway before doing anything else",
      "Apply a non-rebreather mask at 15 LPM and reassess",
      "Open the airway using a head-tilt chin-lift"
    ],
    answer: 3,
    explanation: "With a pulse present, open the airway first (head-tilt chin-lift for a non-trauma patient), then give ventilations. Compressions are for a patient without a pulse."
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
      "5 to 6 breaths per minute",
      "16 to 20 breaths per minute",
      "24 to 30 breaths per minute",
      "10 breaths per minute (one every 6 seconds)"
    ],
    answer: 3,
    explanation: "For an adult with a pulse who needs rescue breathing, give one breath every 6 seconds (about 10 per minute). Deliver each breath over about 1 second with visible chest rise. Do not hyperventilate."
  },
  {
    id: "air-004", domain: "airway",
    q: "An OPA is contraindicated in which patient?",
    options: [
      "An unresponsive patient with no gag reflex",
      "A patient with dentures in place",
      "A patient with facial trauma",
      "A semiconscious patient with a gag reflex"
    ],
    answer: 3,
    explanation: "An OPA is only for patients without a gag reflex. A semiconscious patient who responds to pain likely still has a gag reflex and may gag and vomit. Consider an NPA instead."
  },
  {
    id: "air-005", domain: "airway",
    q: "When sizing a nasopharyngeal airway, the correct measurement is:",
    options: [
      "Corner of the mouth to the earlobe",
      "Tip of the nose to the earlobe",
      "Center of the mouth to the angle of the jaw",
      "Bridge of the nose to the chin"
    ],
    answer: 1,
    explanation: "An NPA is sized from the tip of the nose to the earlobe, which estimates the distance from the nostril to the back of the throat. An OPA is sized from the corner of the mouth to the earlobe, or from the center of the lips to the angle of the jaw."
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
    explanation: "A properly fitted non-rebreather mask at 15 LPM delivers approximately 80-95% FiO2, the highest oxygen concentration among the masks EMTs use. Pre-fill the reservoir bag before placing the mask on the patient, and adjust the flow so the bag does not collapse when the patient inhales."
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
    q: "Your COPD patient is in moderate respiratory distress with an SpO2 of 84%. You should:",
    options: [
      "Withhold oxygen -- COPD patients lose their drive to breathe with supplemental O2",
      "Apply oxygen, titrate to an SpO2 of 88-92%, and monitor closely",
      "Apply a non-rebreather at 15 LPM to maximize oxygenation at all costs",
      "Use only a nasal cannula at 1 LPM to avoid hypoxic drive suppression"
    ],
    answer: 1,
    explanation: "The hypoxic drive concern is real but overstated. Never withhold oxygen from a hypoxic patient. In known COPD, titrate to an SpO2 of about 88-92% and watch for worsening drowsiness or slowing breathing, which needs assisted ventilation."
  },
  {
    id: "air-012", domain: "airway",
    q: "During BVM ventilation you notice the chest is not rising. Your first action is:",
    options: [
      "Increase your ventilation pressure and squeeze harder",
      "Reposition the airway and recheck mask seal",
      "Switch to mouth-to-mask ventilation right away",
      "Insert an OPA, then try again"
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
    q: "A patient has an SpO2 of 92% but is breathing at 28 breaths per minute with accessory muscle use. You should:",
    options: [
      "Monitor only, since an SpO2 of 92% is acceptable and reassuring",
      "Apply a nasal cannula at 2 LPM",
      "Place in Fowler's position and reassess in 5 minutes",
      "Apply a non-rebreather and prepare to assist ventilations"
    ],
    answer: 3,
    explanation: "SpO2 alone can be falsely reassuring. A patient working this hard to breathe, with an SpO2 already below 94%, is in significant distress and may decompensate quickly. Give high-concentration oxygen and be ready to assist ventilations. Treat the patient, not the number."
  },
  {
    id: "air-015", domain: "airway",
    q: "An ALS crew has intubated your patient and you are helping during transport when the patient suddenly deteriorates. The DOPE mnemonic for troubleshooting stands for:",
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
      "Gastric inflation from too much ventilation pressure",
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
      "Let them sit in their position of comfort and transport",
      "Laying them supine and inserting an OPA to secure the airway",
      "Performing blind finger sweeps to clear the airway",
      "Applying a non-rebreather and laying them flat for easier airway access"
    ],
    answer: 0,
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
    explanation: "Infants and children with a pulse are ventilated at 20-30 breaths per minute (one breath every 2-3 seconds). Adults get one breath every 6 seconds, about 10 per minute. Use only enough volume to see the chest rise."
  },
  {
    id: "air-019", domain: "airway",
    q: "Which finding is the most immediate, reliable sign that each breath is reaching the lungs?",
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
    q: "A patient is altered after a seizure, with a clenched jaw, snoring respirations, and an intact gag reflex. Which adjunct is most appropriate?",
    options: [
      "An oropharyngeal airway pushed past the tongue",
      "A tongue depressor to hold the jaw open",
      "A bite block placed between the clenched teeth",
      "A nasopharyngeal airway"
    ],
    answer: 3,
    explanation: "An NPA works with a clenched jaw and an intact gag reflex. Forcing anything between clenched teeth risks injury and vomiting. An OPA is only for patients without a gag reflex."
  },
  {
    id: "air-022", domain: "airway",
    q: "A patient is breathing rapidly and shallowly at 30 breaths per minute. Her minute volume compared to a normal patient is:",
    options: [
      "Higher, because respiratory rate is elevated and she is moving more air",
      "The same, because a faster rate makes up for the shallow depth",
      "Potentially lower, because each breath moves so little air",
      "Higher, and she does not need supplemental oxygen"
    ],
    answer: 2,
    explanation: "Minute volume = tidal volume x rate. Rapid shallow breathing increases dead space ventilation -- much of each breath never reaches the alveoli. Despite a high rate, alveolar ventilation may be inadequate. Treat the quality of breathing, not just the rate."
  },
  {
    id: "air-023", domain: "airway",
    q: "An NPA is contraindicated in a patient with:",
    options: [
      "An intact gag reflex that is still active",
      "Suspected basilar skull fracture",
      "A history of nosebleeds (epistaxis)",
      "Facial hair around the nostrils"
    ],
    answer: 1,
    explanation: "An NPA is contraindicated with suspected basilar skull fracture -- there is risk of the tube passing through the fracture into the cranial vault. Signs of basilar skull fracture: Battle's sign, raccoon eyes, CSF from ears or nose, severe head trauma mechanism."
  },
  {
    id: "air-024", domain: "airway",
    q: "Your cardiac arrest patient now has an advanced airway in place, and you are ventilating at 10 breaths per minute. During CPR compressions, you should:",
    options: [
      "Continue compressions without pausing for breaths",
      "Stop compressions during each ventilation",
      "Pause compressions for 10 seconds after every 30 compressions",
      "Ventilate at 30:2 regardless of airway status"
    ],
    answer: 0,
    explanation: "With an advanced airway in place (supraglottic or ET tube), ventilations are delivered asynchronously at 10 breaths per minute without pausing compressions. Without an advanced airway, use 30:2. Minimizing interruptions to compressions is a core CPR principle."
  },
  {
    id: "air-025", domain: "airway",
    q: "Which breath sound indicates lower airway obstruction consistent with bronchospasm?",
    options: [
      "Wheezing",
      "Stridor (a harsh sound on inhalation)",
      "Crackles (wet sounds at the bases)",
      "Rhonchi (rattling sounds from mucus)"
    ],
    answer: 0,
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
      "Cover the stoma and ventilate through the mouth",
      "Apply a non-rebreather over the stoma",
      "Insert an NPA into the stoma",
      "Remove the inner cannula and suction the stoma"
    ],
    answer: 3,
    explanation: "For a tracheostomy with an obstruction, remove the inner cannula (if the tube has one) and suction the stoma. If the airway is still blocked, ventilate with a BVM over the stoma or attached to the tube, follow local protocol or medical direction for tube changes, request ALS, and transport rapidly."
  },
  {
    id: "air-029", domain: "airway",
    q: "The first and most reliable sign that BVM ventilation is effective is:",
    options: [
      "Auscultating over the epigastrium",
      "Watching for bilateral chest rise",
      "Feeling for a pulse at the wrist",
      "Monitoring skin color change"
    ],
    answer: 1,
    explanation: "Bilateral chest rise is the primary field confirmation of effective BVM ventilation. Epigastric sounds indicate gastric inflation. End-tidal CO2 is an excellent additional confirmation where available, and a rising SpO2 confirms oxygenation over time."
  },
  {
    id: "air-030", domain: "airway",
    q: "A patient presents with absent breath sounds on the left, tracheal deviation to the right, and severe respiratory distress after a stab wound to the left chest. This is most consistent with:",
    options: [
      "Left-sided hemothorax with lung collapse",
      "Cardiac tamponade with muffled heart tones",
      "Pulmonary contusion",
      "Left-sided tension pneumothorax"
    ],
    answer: 3,
    explanation: "Tension pneumothorax: absent breath sounds on the affected side, tracheal deviation AWAY from it (a late sign, often absent), severe respiratory distress, and hypotension. This is an immediate life threat. Give high-flow oxygen, assist ventilations as needed, request ALS (needle decompression is an ALS skill), and transport rapidly to a trauma center."
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
      "At least 2.5 inches deep at 60-80 compressions per minute",
      "1.5-2 inches deep at 100-120 per minute",
      "At least 2 inches deep at 100-120 per minute"
    ],
    answer: 3,
    explanation: "Current AHA guidelines: compress at least 2 inches (5 cm) in adults, rate of 100-120 per minute, allow full chest recoil, minimize interruptions. Deeper than 2.4 inches may cause injury. Rate faster than 120 reduces perfusion time."
  },
  {
    id: "card-003", domain: "cardiology",
    q: "An AED analyzes and advises 'no shock recommended.' You should:",
    options: [
      "Resume CPR immediately, starting with compressions, and reanalyze in 2 minutes",
      "Continue to analyze for another 2 minutes before resuming CPR",
      "Assume the patient has a perfusing rhythm and check vital signs",
      "Administer epinephrine and re-analyze"
    ],
    answer: 0,
    explanation: "After 'no shock advised', do not stop to check for a pulse. Resume compressions right away and reanalyze after 2 minutes of CPR. The rhythm is PEA or asystole, which is not shockable."
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
    explanation: "ST elevation in II, III, and aVF indicates an inferior STEMI (usually the right coronary artery). Anterior STEMI involves V1-V4. An inferior MI can involve the right ventricle, which depends on preload, so nitroglycerin can cause severe hypotension. Use caution and follow protocol or medical direction."
  },
  {
    id: "card-005", domain: "cardiology",
    q: "Which is a contraindication to administering nitroglycerin?",
    options: [
      "A systolic blood pressure of 130 mmHg and a heart rate of 90",
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
      "Check for a pulse first, then deliver the shock if none is found",
      "Deliver 2 rescue breaths before the shock",
      "Clear all personnel and deliver the shock immediately",
      "Resume CPR for another 2 minutes and then deliver the shock"
    ],
    answer: 2,
    explanation: "When the AED advises shock, clear all personnel and deliver the shock immediately. Minimize the time from compression pause to shock delivery. Every second of delay reduces defibrillation success. After shock, immediately resume CPR for 2 minutes before reanalyzing."
  },
  {
    id: "card-007", domain: "cardiology",
    q: "A patient in atrial fibrillation with a rapid ventricular response (HR 140, BP 88/60, altered mental status) is unstable. What is the appropriate EMT-B action?",
    options: [
      "Give oxygen, transport rapidly, and request ALS",
      "Unsynchronized defibrillation",
      "Vagal maneuvers",
      "Rate-controlling medications only"
    ],
    answer: 0,
    explanation: "Rapid heart rate with hypotension and altered mental status is unstable. Support the airway and oxygen, transport rapidly, and request ALS, who can perform synchronized cardioversion. An AED is only for pulseless VF or VT."
  },
  {
    id: "card-008", domain: "cardiology",
    q: "The Chain of Survival for out-of-hospital cardiac arrest begins with:",
    options: [
      "Early CPR",
      "Early recognition and activation of EMS",
      "Early defibrillation",
      "Early advanced life support by paramedics on scene"
    ],
    answer: 1,
    explanation: "Chain of Survival (adult out-of-hospital): 1) recognition and activation of the emergency response, 2) early CPR, 3) rapid defibrillation, 4) advanced resuscitation, 5) post-arrest care, 6) recovery. Each link depends on the one before it."
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
    q: "Under standard protocol, with medical direction approval, the maximum number of nitroglycerin doses for chest pain is:",
    options: [
      "Only 1 dose, regardless of how the patient responds",
      "As many as needed until the pain goes away completely",
      "A maximum of 2 doses, regardless of the response",
      "Up to 3 doses, 5 minutes apart, if SBP stays above 90"
    ],
    answer: 3,
    explanation: "Standard protocol allows up to 3 doses of nitroglycerin (0.4 mg SL), 5 minutes apart, if systolic BP stays above 90 and pain persists. Count doses the patient took on their own, and follow local protocol and medical direction."
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
    q: "A patient has a regular pulse of 180 bpm and BP 110/70, and is alert and anxious with no chest pain. The monitor shows a regular, narrow-complex tachycardia. This rhythm is most likely:",
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
    q: "A patient with suspected ACS is alert, has no allergies or bleeding problems, and has not taken any aspirin. What should you give?",
    options: [
      "324 mg of aspirin, chewed (4 baby aspirin)",
      "81 mg of aspirin, swallowed whole with water",
      "650 mg of acetaminophen instead, to avoid stomach upset",
      "A single 200 mg ibuprofen tablet"
    ],
    answer: 0,
    explanation: "Aspirin for suspected ACS: 324 mg chewed (not swallowed whole), if there is no allergy, active bleeding or other contraindication. Acetaminophen and ibuprofen do not work the same way."
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
    explanation: "Women, elderly patients, and diabetics often present with atypical ACS symptoms: fatigue, dyspnea, nausea, and jaw or shoulder pain, sometimes without chest pain. ST depression suggests ischemia and supports treating this as possible ACS."
  },
  {
    id: "card-021", domain: "cardiology",
    q: "A patient with a permanent pacemaker is in cardiac arrest. When using the AED you should:",
    options: [
      "Do not use the AED, because the shock will damage the pacemaker",
      "Use the AED with standard pad placement, directly on top of the device",
      "Place pads at least 1 inch from the pacemaker and shock",
      "Increase energy to compensate for the pacemaker"
    ],
    answer: 2,
    explanation: "Use the AED on patients with pacemakers. Place pads about 1 inch from the device and never directly over it, then follow the AED's prompts."
  },
  {
    id: "card-022", domain: "cardiology",
    q: "After ROSC, the most appropriate first action is:",
    options: [
      "Transport to the nearest emergency department immediately",
      "Resume CPR for 2 more minutes to confirm ROSC",
      "Administer additional epinephrine",
      "Reassess airway, breathing, and pulse, and support oxygenation"
    ],
    answer: 3,
    explanation: "After ROSC, reassess ABCs, support ventilation and oxygenation (SpO2 94-98%, avoid hyperventilation), monitor for re-arrest, and transport. Choose a PCI-capable facility if STEMI is suspected."
  },
  {
    id: "card-023", domain: "cardiology",
    q: "A patient has a BP of 220/120 and a severe headache. She has no neurological deficits. What is the best EMT-B management?",
    options: [
      "Give medication to lower the blood pressure rapidly",
      "Treat it as a normal variation for her age",
      "Keep her calm, monitor, and transport",
      "Assume a hemorrhagic stroke and give her aspirin"
    ],
    answer: 2,
    explanation: "Do not try to lower the BP in the field. Rapid reduction can cause stroke or MI. Keep her calm, monitor, watch for neurological changes, chest pain, or dyspnea, and transport. Hospital staff handle controlled reduction."
  },
  {
    id: "card-024", domain: "cardiology",
    q: "Which finding suggests the chest pain is NOT cardiac in origin?",
    options: [
      "Diaphoresis with cool, clammy skin",
      "Radiation of the pain to the left arm and jaw",
      "Associated nausea and vomiting",
      "Pain reproducible with palpation"
    ],
    answer: 3,
    explanation: "Musculoskeletal or pleuritic chest pain is often reproducible with palpation (touching the chest wall worsens it). Cardiac pain is rarely worsened by palpation. Diaphoresis, radiation, and nausea all suggest cardiac etiology. However, do not rely on single features -- treat as cardiac until proven otherwise."
  },
  {
    id: "card-025", domain: "cardiology",
    q: "A patient is in symptomatic bradycardia (HR 38, BP 78/50, altered mental status). What is the correct EMT action?",
    options: [
      "Begin chest compressions at 100 to 120 per minute right away",
      "Give oxygen and request ALS for atropine or pacing",
      "Give nitroglycerin to improve blood flow to the heart",
      "Observe and reassess in 15 minutes"
    ],
    answer: 1,
    explanation: "A slow rate with hypotension and altered mental status is unstable. Support airway and oxygen, monitor closely, and get ALS for atropine or pacing. Compressions are for pulseless patients, and nitroglycerin would drop the pressure further."
  },
  {
    id: "card-026", domain: "cardiology",
    q: "JVD (jugular venous distension) in a cardiac patient most commonly indicates:",
    options: [
      "Elevated venous pressure, such as from right heart failure",
      "Dehydration and a low circulating blood volume (low preload)",
      "A normal finding in most patients with hypertension",
      "Arterial obstruction"
    ],
    answer: 0,
    explanation: "JVD indicates elevated central venous pressure -- blood is backing up into the jugular veins. Causes: right heart failure, tension pneumothorax, cardiac tamponade, superior vena cava syndrome. In CHF, JVD combined with crackles and edema is classic right + left heart failure."
  },
  {
    id: "card-027", domain: "cardiology",
    q: "The OPQRST mnemonic is used to:",
    options: [
      "Assess a patient's level of consciousness",
      "Characterize a patient's pain",
      "Determine which medication allergies a patient has",
      "Guide compression rate and depth during CPR"
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
      "Giving a fluid bolus",
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
      "Ventricular fibrillation that is too fine to shock",
      "A pacemaker rhythm with loss of capture",
      "Organized electrical activity with no palpable pulse"
    ],
    answer: 3,
    explanation: "PEA: organized electrical activity on the ECG but no mechanical cardiac output (no pulse). The heart is 'talking' electrically but not pumping. Causes are the H's and T's. Treatment: CPR + treat reversible causes. PEA is non-shockable."
  },
  {
    id: "card-030", domain: "cardiology",
    q: "A patient has crushing chest pain that began 2 hours ago and is not relieved by nitroglycerin. He is diaphoretic with BP 90/60. Your most important action is:",
    options: [
      "Give a fourth dose of nitroglycerin and reassess the pain",
      "Establish IV access and run a 500 mL fluid bolus wide open",
      "Transport rapidly to a PCI-capable facility; get a 12-lead en route",
      "Wait on scene for ALS backup to arrive before moving"
    ],
    answer: 2,
    explanation: "This is possible STEMI with early shock. The priority is getting the patient to a PCI-capable facility as fast as possible. Acquire and transmit a 12-lead en route if trained and equipped, and do not delay transport for it. Further nitroglycerin is not appropriate at this blood pressure."
  },
  {
    id: "card-031", domain: "cardiology",
    q: "Synchronized cardioversion differs from defibrillation in that it:",
    options: [
      "Uses higher energy than defibrillation",
      "Times the shock to the R wave",
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
      "Permanent damage to the heart muscle from prolonged lack of blood flow",
      "Chest pain from aortic dissection",
      "Temporary chest pain from ischemia that eases with rest or nitro",
      "Pleuritic chest pain from pericarditis"
    ],
    answer: 2,
    explanation: "Angina is transient chest pain from myocardial ischemia without infarction -- the artery is narrowed but not completely blocked. Stable angina is predictable, relieved by rest or nitro. Unstable angina is unpredictable, occurs at rest, and represents a pre-infarction state requiring urgent treatment."
  },
  {
    id: "card-034", domain: "cardiology",
    q: "A patient in cardiac arrest has been resuscitated. She is now breathing and has a BP of 80/50. Post-ROSC care priorities include:",
    options: [
      "Hyperventilate to correct acidosis, run fluids wide open, transport to nearest ED",
      "Titrate SpO2 to 94-98%, avoid hyperventilation, support BP, consider a PCI center",
      "Maintain SpO2 above 100%, give epinephrine drip, avoid moving the patient",
      "Resume CPR if BP remains below 90 systolic"
    ],
    answer: 1,
    explanation: "Post-ROSC bundle: target SpO2 94-98% (hyperoxia is harmful), ventilate at 10-12/min (avoid hyperventilation -- causes cerebral vasoconstriction), support BP above 90 systolic, 12-lead ECG, transport to PCI-capable facility if STEMI. Temperature management (TTM) initiated in hospital."
  },

  // ============================================================
  // TRAUMA -- 24 questions
  // ============================================================

  {
    id: "tra-001", domain: "trauma",
    q: "A patient has a penetrating abdominal wound with evisceration of bowel. Your treatment is:",
    options: [
      "Gently push the bowel back into the abdomen and cover it",
      "Cover with a dry sterile dressing and apply firm pressure",
      "Cover with a moist sterile dressing, no pressure",
      "Wrap the bowel in a dry towel and leave it exposed to air"
    ],
    answer: 2,
    explanation: "Evisceration treatment: cover with a moist sterile dressing (saline-soaked if available) to prevent desiccation. Do NOT push organs back in -- risk of contamination and further injury. Do NOT apply direct pressure over the organs. Keep the patient warm and transport rapidly."
  },
  {
    id: "tra-002", domain: "trauma",
    q: "The Golden Hour concept in trauma refers to:",
    options: [
      "The strict time limit for all field treatment before transport",
      "A rule that scene time may never exceed 60 minutes",
      "The first hour, when surgical care most improves survival",
      "The time limit for spinal immobilization"
    ],
    answer: 2,
    explanation: "The Golden Hour is a concept, not a strict limit: major trauma patients who reach definitive surgical care within roughly an hour of injury have better survival. It is a reason to keep scene time short (ideally 10 minutes or less for critical patients) and transport promptly."
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
    q: "A tourniquet used for life-threatening bleeding from a patient's arm should be:",
    options: [
      "Applied directly over the wound and tightened for maximum pressure",
      "Placed 2-3 inches above the wound and tightened until bleeding stops",
      "Loosened every 15 minutes to check for tissue damage and restore circulation",
      "Applied over clothing to reduce pain, then covered by a blanket"
    ],
    answer: 1,
    explanation: "Tourniquet application: 2-3 inches above (proximal to) the wound and not over a joint. Tighten until bleeding stops, note the time, and never loosen it in the field."
  },
  {
    id: "tra-005", domain: "trauma",
    q: "A patient has a sucking chest wound (open pneumothorax). Treatment is:",
    options: [
      "Apply a dry gauze dressing over the wound and leave it loose",
      "Apply an occlusive dressing (vented if available) and watch for tension signs",
      "Apply direct pressure over the wound with a bulky dressing",
      "Leave open to allow air to escape"
    ],
    answer: 1,
    explanation: "Open pneumothorax (sucking chest wound): cover with an occlusive dressing, using a vented chest seal if available (some courses teach a three-sided dressing, so follow your protocol). Monitor closely, and if the patient worsens with signs of tension pneumothorax, lift a corner of the seal to release trapped air."
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
      "Skipped if he denies neck and back pain",
      "Applied: ejection is high-risk and a GCS of 14 is altered",
      "Applied only if the patient complains of neck or back pain right now",
      "Skipped, since an alert and oriented patient has no spinal injury"
    ],
    answer: 1,
    explanation: "Ejection is a high-risk mechanism, and a GCS of 14 is an altered mental status, so he cannot be reliably cleared. Apply spinal motion restriction. Current guidance weighs mechanism, symptoms, neurological findings, and mental status together."
  },
  {
    id: "tra-008", domain: "trauma",
    q: "Hemorrhagic shock class III is characterized by:",
    options: [
      "Under 15% blood loss, normal BP, and a slightly elevated HR",
      "30-40% blood loss, marked tachycardia, confusion, low BP",
      "15-30% blood loss, tachycardia, anxiety, narrowed pulse pressure",
      "Over 40% blood loss, profound hypotension, unconsciousness"
    ],
    answer: 1,
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
      "Full spinal immobilization on a backboard before you move him",
      "Open the airway, assess breathing, and ventilate if needed",
      "Establish IV access and run a fluid challenge first",
      "Check pupils and perform a full detailed neuro exam right away"
    ],
    answer: 1,
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
    explanation: "For severe TBI, ventilate at a normal rate (about 10-12 per minute) and avoid hyperventilation, which causes cerebral vasoconstriction and reduces blood flow. Hyperventilate only briefly for active signs of herniation. Avoid hypoxia and hypotension, and if there is no spinal concern, elevate the head about 30 degrees (reverse Trendelenburg if spinal motion restriction is in place)."
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
      "Left-sided rib fractures only, with no internal injury",
      "Splenic laceration with internal hemorrhage",
      "Pulmonary contusion",
      "Left ventricular injury"
    ],
    answer: 1,
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
    explanation: "Rule of Nines (adult): head and neck 9%, each arm 9%, anterior trunk 18%, posterior trunk 18%, each leg 18%, perineum 1%. The BSA estimate helps decide transport destination, such as a burn center."
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
      "Tachycardia and hypotension with cool, clammy, pale skin",
      "Bradycardia and hypotension with warm, dry, flushed skin",
      "Tachycardia and hypertension with a strong bounding pulse",
      "Bradycardia and hypertension"
    ],
    answer: 1,
    explanation: "Neurogenic shock: loss of sympathetic tone from spinal cord injury causes vasodilation (hypotension) and loss of cardiac acceleration (bradycardia). Skin is paradoxically warm, dry, and flushed below the injury due to vasodilation. This distinguishes it from hypovolemic shock (tachycardia, pale, cold, clammy)."
  },
  {
    id: "tra-019", domain: "trauma",
    q: "The most common cause of preventable death in trauma is:",
    options: [
      "Uncontrolled external hemorrhage",
      "Airway obstruction from the tongue or secretions",
      "Tension pneumothorax that goes untreated",
      "Traumatic brain injury with herniation"
    ],
    answer: 0,
    explanation: "Uncontrolled external hemorrhage is the leading preventable cause of trauma death, which is why current guidance puts massive bleeding control first (MARCH or XABCDE) and drove the Stop the Bleed campaign. Airway and breathing remain critical right after."
  },
  {
    id: "tra-020", domain: "trauma",
    q: "A patient has a penetrating eye injury with an impaled object. You should:",
    options: [
      "Remove the object gently so you can assess the eye",
      "Stabilize the object and cover both eyes",
      "Apply light direct pressure over the object",
      "Cover only the injured eye and let him keep looking around"
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
    explanation: "Unstable pelvic fractures can cause massive bleeding into the pelvis. Apply a pelvic binder or sheet wrap, avoid rocking or log rolling, and use a scoop stretcher or minimal-movement lift. PASG is no longer used."
  },
  {
    id: "tra-022", domain: "trauma",
    q: "Compartment syndrome in an extremity presents with:",
    options: [
      "Decreased pain with passive stretch of muscles in the compartment",
      "Warmth and erythema consistent with infection",
      "Pain out of proportion to the injury, worse with passive stretch",
      "Pulselessness as the earliest finding"
    ],
    answer: 2,
    explanation: "Compartment syndrome: pressure builds in a fascial compartment, compressing muscles and nerves. Classic sign: pain out of proportion to injury and severe pain with passive stretch of muscles in the compartment. The 6 P's: Pain, Pressure, Paralysis, Paresthesia, Pallor, Pulselessness (late). Pulselessness is a late and ominous sign."
  },
  {
    id: "tra-023", domain: "trauma",
    q: "During a rapid trauma assessment, you find a patient with decreased breath sounds on the right, trachea deviated left, hypotension, and JVD. You should:",
    options: [
      "Support ventilation and request ALS for chest decompression",
      "Apply a three-sided chest seal and transport with no other steps",
      "Roll the patient right side down to drain a hemothorax",
      "Start CPR immediately, since he is hypotensive"
    ],
    answer: 0,
    explanation: "Tension pneumothorax: decreased breath sounds on the affected side, hypotension, JVD, and tracheal deviation away from it (a late sign that is often absent). Give high-flow oxygen, support ventilation, transport rapidly, and request ALS for needle decompression."
  },
  {
    id: "tra-024", domain: "trauma",
    q: "A patient involved in a high-speed MVA has an abdominal contusion at the seatbelt line. He is hemodynamically stable. You should:",
    options: [
      "Reassure him -- seatbelts prevent serious injury",
      "Suspect hollow organ injury and bleeding; transport to a trauma center",
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
    q: "In the AEIOU-TIPS mnemonic for altered mental status, which letter reminds you to check the blood glucose?",
    options: [
      "I (Insulin)",
      "E (Epilepsy or seizure)",
      "U (Uremia, or kidney failure)",
      "S (Stroke)"
    ],
    answer: 0,
    explanation: "AEIOU-TIPS: Alcohol, Epilepsy, Insulin (low or high blood sugar), Overdose, Uremia (kidney failure), Trauma, Infection, Psychosis, Stroke. The I reminds you to check the blood glucose early, because hypoglycemia is fast to fix and dangerous to miss."
  },
  {
    id: "med-002", domain: "medical",
    q: "A diabetic patient is found unresponsive with a blood glucose of 38 mg/dL. After establishing an airway, you should:",
    options: [
      "Administer oral glucose gel and wait to see whether he wakes up",
      "Give oxygen, manage the airway, and request ALS for glucagon or dextrose",
      "Transport immediately without any glucose treatment, since the airway is the only priority",
      "Administer insulin to stabilize the glucose level"
    ],
    answer: 1,
    explanation: "An unresponsive patient cannot safely receive oral glucose because of the aspiration risk. Manage the airway, give oxygen, and give glucagon only if it is in your scope and protocol; otherwise request ALS for dextrose. Never give insulin."
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
      "Hold the patient down firmly to prevent injury to himself",
      "Insert a bite stick or an airway adjunct to prevent tongue biting",
      "Protect him, keep the airway open, give oxygen, and request ALS",
      "Wait for the seizure to stop by itself before doing anything"
    ],
    answer: 2,
    explanation: "Protect him from injury (remove hazards, do not restrain), keep the airway open, give oxygen, note the time, and request ALS. A seizure lasting more than 5 minutes is status epilepticus and needs a benzodiazepine per protocol. Never put anything in his mouth."
  },
  {
    id: "med-005", domain: "medical",
    q: "A patient has a sudden onset of the worst headache of his life. He is alert, afebrile, with a stiff neck and photophobia. You should suspect:",
    options: [
      "Tension headache from stress and neck strain",
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
      "A severe allergic reaction that stays limited to the skin",
      "Any allergic reaction, however mild, that needs an antihistamine",
      "A severe, life-threatening systemic hypersensitivity reaction",
      "An allergic reaction that causes bronchospasm only, with no other signs"
    ],
    answer: 2,
    explanation: "Anaphylaxis is a severe, rapid-onset systemic hypersensitivity reaction involving multiple organ systems. It can cause airway compromise (angioedema, bronchospasm), cardiovascular collapse (vasodilation, hypotension), and skin manifestations. It is immediately life-threatening and requires epinephrine."
  },
  {
    id: "med-007", domain: "medical",
    q: "The first-line treatment for anaphylaxis is:",
    options: [
      "Epinephrine 0.3 mg IM into the lateral thigh",
      "Diphenhydramine (Benadryl) 50 mg IV as the first drug",
      "Albuterol nebulization for the bronchospasm and wheezing",
      "Corticosteroids IV to reduce airway inflammation"
    ],
    answer: 0,
    explanation: "Epinephrine IM (0.3 mg adult, 0.15 mg for children under about 30 kg) into the lateral thigh is the first and most important treatment for anaphylaxis. Antihistamines, steroids and albuterol are adjuncts only."
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
      "Above 96%, to keep a wide safety margin",
      "88-92%, titrated and monitored closely"
    ],
    answer: 3,
    explanation: "Never withhold oxygen from a hypoxic patient, but in known COPD titrate to about 88-92%. Watch for worsening drowsiness or slowing respirations, and be ready to assist ventilation."
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
    explanation: "Heat stroke: core temperature at or above 104 F (40 C), altered mental status, and hot skin that is often dry. Cool the patient aggressively and transport rapidly."
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
    q: "A patient took 'a handful of pills' 30 minutes ago and is alert. Which action is most appropriate?",
    options: [
      "Induce vomiting to remove the pills before transport",
      "Administer flumazenil to reverse any possible sedation",
      "Consult Poison Control and bring the pill bottles",
      "Perform gastric lavage in the field to remove the pills"
    ],
    answer: 2,
    explanation: "For an overdose: monitor airway, breathing and mental status, bring the containers, and consult Poison Control (1-800-222-1222) or medical direction. Never induce vomiting. Activated charcoal is not routine and only given under protocol."
  },
  {
    id: "med-015", domain: "medical",
    q: "A patient with a history of atrial fibrillation has sudden one-sided weakness and slurred speech that started 45 minutes ago. She is hemodynamically stable. After checking her blood glucose, the most critical time-sensitive intervention is:",
    options: [
      "Administer aspirin immediately",
      "Rapid transport to a stroke center -- thrombolytics have a treatment window",
      "Obtain blood glucose and treat if abnormal",
      "Position supine with legs elevated"
    ],
    answer: 1,
    explanation: "In ischemic stroke, thrombolytics can be given within roughly 3-4.5 hours of last known well at a stroke center. Do not give aspirin until a hemorrhagic stroke is ruled out. Check glucose, note the last known well time, and transport rapidly to a stroke center with pre-notification."
  },
  {
    id: "med-016", domain: "medical",
    q: "Carbon monoxide poisoning is dangerous because CO:",
    options: [
      "Destroys lung tissue on contact, so the lungs cannot work",
      "Causes severe bronchospasm that traps air in the lungs",
      "Has a strong odor that gives an early warning of danger",
      "Binds hemoglobin far more tightly than oxygen does"
    ],
    answer: 3,
    explanation: "CO binds hemoglobin with 200-250x greater affinity than oxygen, forming carboxyhemoglobin and reducing oxygen delivery to tissues. CO is colorless and odorless -- undetectable without a CO monitor. Pulse oximetry reads falsely normal because it cannot distinguish oxyhemoglobin from carboxyhemoglobin."
  },
  {
    id: "med-017", domain: "medical",
    q: "A patient presents with fever, headache, stiff neck, and a petechial rash. You should suspect:",
    options: [
      "Viral meningitis, which is mild, so transport routinely",
      "Allergic reaction, so administer epinephrine right away",
      "Subarachnoid hemorrhage from a ruptured aneurysm",
      "Meningitis -- wear PPE and transport rapidly"
    ],
    answer: 3,
    explanation: "Meningitis signs (fever, headache, nuchal rigidity) plus petechial/purpuric rash suggests meningococcal disease (Neisseria meningitidis) -- a bacterial meningitis that can progress to septic shock in hours. Don full PPE (droplet precautions), rapid transport, notify receiving facility. This is a true emergency."
  },
  {
    id: "med-018", domain: "medical",
    q: "A patient in diabetic ketoacidosis (DKA) will typically display which breathing pattern?",
    options: [
      "Cheyne-Stokes respirations (cycles of fast and slow breathing)",
      "Ataxic breathing (completely irregular)",
      "Biot's respirations (irregular with pauses)",
      "Kussmaul respirations (deep, rapid)"
    ],
    answer: 3,
    explanation: "Kussmaul respirations: deep, rapid, labored breathing -- the body's attempt to blow off CO2 and compensate for metabolic acidosis in DKA. The breath may smell fruity (acetone from ketone production). Other DKA signs: polyuria, polydipsia, nausea, abdominal pain, dehydration."
  },
  {
    id: "med-019", domain: "medical",
    q: "A patient is having an acute asthma attack. Which finding is most concerning for severe, life-threatening status?",
    options: [
      "Silent chest (no wheeze on auscultation)",
      "Loud wheezing that is audible without a stethoscope",
      "SpO2 of 94% on room air while talking in sentences",
      "Respiratory rate of 24"
    ],
    answer: 0,
    explanation: "Silent chest (no wheezing) in an asthma attack indicates minimal air movement -- the patient is moving so little air that there is no turbulence to produce wheeze. This is a pre-arrest finding. Other ominous signs: inability to speak, diaphoresis, altered mental status, accessory muscle use, SpO2 below 90%."
  },
  {
    id: "med-020", domain: "medical",
    q: "A patient presents with crushing substernal chest pain, diaphoresis, and nausea. His 12-lead shows normal sinus rhythm with no ST changes. You should:",
    options: [
      "Rule out ACS, because a normal 12-lead means no heart attack",
      "Treat as musculoskeletal pain and transport non-emergently",
      "Treat as possible ACS; a normal 12-lead does not rule out MI",
      "Wait for troponin results before treating"
    ],
    answer: 2,
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
    q: "A patient who is awake and able to swallow has a blood glucose of 28 mg/dL. After giving oral glucose, she begins to improve but then rapidly deteriorates again. The most likely reason is:",
    options: [
      "The oral glucose was ineffective",
      "She has a long-acting insulin or sulfonylurea overdose causing recurrent hypoglycemia",
      "She is developing DKA",
      "The glucometer reading was inaccurate"
    ],
    answer: 1,
    explanation: "Recurrent hypoglycemia after treatment suggests a long-acting agent (NPH insulin, glargine, sulfonylureas). Transport, recheck glucose often, and request ALS-level care, because she may need repeated treatment and observation."
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
      "Insert an OPA into her mouth to protect the airway",
      "Position laterally, protect the airway, and transport",
      "Give anticonvulsants immediately to prevent another seizure",
      "Restrain her to prevent injury during post-ictal agitation"
    ],
    answer: 1,
    explanation: "Post-ictal state: the patient is exhausted and recovering. Airway management (lateral position to prevent aspiration, suction if needed) is the priority. Do not restrain. Do not insert an OPA unless she is deeply unresponsive with no gag reflex. Protect her from injury and allow recovery. Transport."
  },
  {
    id: "med-026", domain: "medical",
    q: "Which finding is the most sensitive early indicator of adequate cerebral perfusion?",
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
      "Sympathomimetic overdose (cocaine or amphetamines)",
      "Opioid overdose with pinpoint pupils",
      "Beta-blocker or calcium channel blocker overdose",
      "Anticholinergic overdose with hot, dry skin"
    ],
    answer: 2,
    explanation: "Beta-blocker and calcium channel blocker overdoses cause bradycardia and hypotension by blocking the heart's response to stress. EMT care is airway, oxygen, supportive care, and rapid transport with ALS. ALS and hospital care can include atropine, calcium, glucagon, high-dose insulin, and vasopressors."
  },
  {
    id: "med-028", domain: "medical",
    q: "A patient has facial swelling and stridor after starting a new ACE inhibitor medication last week. Which condition is most likely?",
    options: [
      "Anaphylaxis requiring epinephrine",
      "ACE inhibitor-induced angioedema",
      "Allergic contact dermatitis",
      "Ludwig's angina"
    ],
    answer: 1,
    explanation: "ACE inhibitor-induced angioedema can occur weeks to years after starting the medication. It is bradykinin-mediated, so it does not respond well to antihistamines or steroids. Epinephrine may still be tried per local protocol or medical direction when the airway is threatened. The airway is the priority: give oxygen, prepare to assist ventilation, and transport rapidly."
  },
  {
    id: "med-029", domain: "medical",
    q: "A patient is found in a car with the engine running in a closed garage. He is unconscious with SpO2 reading 99%. You should:",
    options: [
      "Trust the SpO2 of 99%, since the reading is reassuring, and monitor",
      "Suspect opioid overdose and administer naloxone immediately",
      "Suspect CO poisoning and give high-flow oxygen",
      "Reassess with a different pulse oximeter before treating"
    ],
    answer: 2,
    explanation: "Classic CO poisoning scenario. SpO2 is falsely normal because the pulse oximeter cannot tell carboxyhemoglobin from oxyhemoglobin. Give high-flow oxygen regardless of the reading, and remove him from the exposure only if it is safe for you to do so."
  },
  {
    id: "med-030", domain: "medical",
    q: "A patient has a unilateral facial droop that involves the forehead on the affected side and has been present, unchanged, for 3 days. He reports no arm weakness, speech change, or other neurological symptoms. This is most consistent with:",
    options: [
      "Ischemic stroke -- activate stroke protocol immediately",
      "Hemorrhagic stroke from a ruptured vessel",
      "Bell's palsy, a peripheral facial nerve problem",
      "TIA with persistent deficits"
    ],
    answer: 2,
    explanation: "Bell's palsy is a peripheral cranial nerve VII palsy: the whole side of the face droops, including the forehead. A stroke usually spares the forehead and often comes with arm weakness or speech changes. Still assess with a stroke scale, and if there is any doubt or the onset is recent, treat it as a stroke."
  },
  {
    id: "med-031", domain: "medical",
    q: "A patient experiencing a panic attack has perioral tingling, carpopedal spasms, and feels she cannot breathe. Her SpO2 is 99% and RR is 28. This is caused by:",
    options: [
      "Hypoxia from blowing off too much oxygen while hyperventilating",
      "Hypercapnia from too little ventilation and CO2 retention",
      "Hypocapnia (low CO2) from hyperventilation, causing alkalosis",
      "Lactic acidosis from muscle strain during the panic attack"
    ],
    answer: 2,
    explanation: "Hyperventilation syndrome: breathing too fast blows off CO2, causing respiratory alkalosis. Low CO2 causes cerebral vasoconstriction (dizziness, perioral tingling) and increased neuromuscular excitability (carpopedal spasm). SpO2 is normal or elevated. Reassure and coach breathing. Rule out organic causes before concluding anxiety."
  },
  {
    id: "med-032", domain: "medical",
    q: "Which of the following best describes the difference between a TIA and an ischemic stroke?",
    options: [
      "TIA involves only motor symptoms; stroke involves only sensory symptoms",
      "A TIA resolves fully; a stroke leaves lasting deficits",
      "A TIA is more dangerous than a stroke because it is a warning",
      "TIA only occurs in patients under 60 and never repeats"
    ],
    answer: 1,
    explanation: "A TIA has stroke symptoms that resolve completely, usually within minutes to an hour, with no permanent injury. It is a warning sign of a later stroke, so every TIA needs transport and evaluation."
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
      "Aortic aneurysm with a tearing pain",
      "Renal colic from kidney stone",
      "Appendicitis with right lower quadrant pain",
      "Bowel obstruction with vomiting"
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
      "Hypertensive urgency, so transport non-emergently",
      "Migraine headache with a visual aura",
      "Eclampsia risk -- seizures possible, transport emergently",
      "Normal third-trimester hypertension that needs no treatment"
    ],
    answer: 2,
    explanation: "Eclampsia is pre-eclampsia plus seizures. Severe pre-eclampsia (BP above 160/110, headache, visual changes) carries a high seizure risk. Keep her in a dim, quiet setting, lay her on her left side, have suction ready, and transport emergently. Request ALS for magnesium per protocol."
  },
  {
    id: "med-037", domain: "medical",
    q: "Which medication treats symptomatic hypoglycemia in a patient who is unresponsive and cannot swallow, when it is in your local protocol?",
    options: [
      "Insulin",
      "Glucagon IM",
      "Oral dextrose gel placed under the tongue",
      "Epinephrine IM"
    ],
    answer: 1,
    explanation: "Glucagon IM (1 mg in adults) stimulates the liver to release glucose. It is used per local protocol when the patient cannot take oral glucose and IV access is not available."
  },
  {
    id: "med-038", domain: "medical",
    q: "A patient is in septic shock with altered mental status, fever of 103 degreesF, BP 82/50, and HR of 128. Prehospital treatment priorities include:",
    options: [
      "Administer broad-spectrum antibiotics in the field",
      "High-flow oxygen, ALS request, and rapid transport",
      "Cool the patient aggressively to normalize temperature",
      "Administer epinephrine to raise the blood pressure right away"
    ],
    answer: 1,
    explanation: "EMT priorities in suspected septic shock: high-flow oxygen, keep the patient warm and supine, request ALS, and transport rapidly with pre-notification. IV fluids and antibiotics are ALS and hospital care."
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
      "Abdominal aortic aneurysm rupture",
      "Bowel obstruction with distension",
      "Acute pancreatitis from gallstones",
      "Mesenteric ischemia from a clot"
    ],
    answer: 0,
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
      "Transport for evaluation of a medication issue or infection",
      "Assist him up and make sure he is stable at home for the night",
      "Call his neurologist and wait for instructions before transporting",
      "Document and clear the scene -- this is a chronic condition"
    ],
    answer: 0,
    explanation: "Acute decompensation of a chronic neurological condition is a red flag. Increased rigidity unresponsive to medications in a Parkinson's patient can indicate: missed doses, medication interaction, urinary tract infection (common cause of AMS in elderly), or neuroleptic malignant syndrome. Transport for evaluation."
  },
  {
    id: "med-044", domain: "medical",
    q: "A patient presents with severe low back pain radiating down the left leg, with numbness and weakness of the left foot. This is most consistent with:",
    options: [
      "Lumbar disc herniation pinching a nerve root",
      "Acute MI with atypical presentation",
      "Renal colic with hematuria",
      "Abdominal aortic aneurysm with a pulsatile mass"
    ],
    answer: 0,
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
    q: "The first arriving unit at a mass casualty incident with many patients should:",
    options: [
      "Begin treating the closest patient",
      "Establish incident command and announce to dispatch",
      "Wait for additional units before taking any action",
      "Contact medical direction for guidance"
    ],
    answer: 1,
    explanation: "The first unit on scene automatically assumes Incident Command. Announce this to dispatch, size up the scene, and call for resources. Begin triage only after command is established."
  },
  {
    id: "ops-002", domain: "operations",
    q: "An adult patient is not breathing after you reposition his airway (START). You should tag him:",
    options: [
      "Red (Immediate)",
      "Yellow (Delayed)",
      "Black (Expectant)",
      "Green (Minor)"
    ],
    answer: 2,
    explanation: "In an MCI with limited resources, an adult who is not breathing after airway repositioning is tagged Black (Expectant). Children use JumpSTART and get 5 rescue breaths first."
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
    explanation: "START: a respiratory rate above 30 is Red (Immediate). This patient's rate of 32 makes him Red on respiratory rate alone."
  },
  {
    id: "ops-004", domain: "operations",
    q: "The Incident Command System (ICS) uses a span of control of:",
    options: [
      "1-2 subordinates per supervisor",
      "3-7 subordinates per supervisor",
      "8-12 subordinates per supervisor",
      "No defined limit"
    ],
    answer: 1,
    explanation: "ICS span of control: 3-7 subordinates per supervisor, optimally 5. This maintains manageable oversight. When a supervisor has too many subordinates, communication breaks down and accountability is lost. ICS expands by adding supervisory levels as an incident grows."
  },
  {
    id: "ops-005", domain: "operations",
    q: "At a hazmat incident, a beginner EMT without hazmat training treats patients in which zone?",
    options: [
      "Hot zone, for immediate patient access",
      "Cold zone, after decontamination",
      "Warm zone, to help run the decontamination corridor",
      "Any zone, as long as you wear appropriate PPE"
    ],
    answer: 1,
    explanation: "Hazmat zones: Hot = contaminated area, entry requires hazmat PPE/SCBA. Warm = decontamination corridor, specialized decon teams. Cold = clean zone where EMTs receive and treat decontaminated patients. EMTs do NOT enter the hot or warm zones without proper hazmat training and equipment."
  },
  {
    id: "ops-006", domain: "operations",
    q: "A patient refuses transport after a fall with a head laceration. He is alert and oriented x4. To complete a proper refusal, you must:",
    options: [
      "Document capacity, risks, alternatives, and a witnessed signature",
      "Get his signature on the form and leave right away, since he is alert",
      "Call his family member and let them make the decision for him",
      "Contact medical direction to override his refusal and force transport"
    ],
    answer: 0,
    explanation: "Informed refusal requires documented decision-making capacity, an explanation of the risks and alternatives, advice to call 911 if symptoms worsen, and a signature with a witness. Contact medical direction per local protocol."
  },
  {
    id: "ops-007", domain: "operations",
    q: "The due regard standard for emergency vehicle operation means:",
    options: [
      "Driving as a reasonable, careful person would",
      "Lights and sirens give you absolute right of way over all traffic",
      "Speed limits and traffic signals do not apply during a response",
      "Emergency drivers cannot be held liable for accidents during response"
    ],
    answer: 0,
    explanation: "Due regard: emergency exemptions from traffic laws come with the condition that the driver exercises the same care a reasonable, careful driver would under the circumstances. Lights and siren REQUEST right of way -- they don't guarantee it. Negligent emergency driving creates personal and agency liability."
  },
  {
    id: "ops-008", domain: "operations",
    q: "A PCR (patient care report) serves which of the following purposes?",
    options: [
      "Medical record and legal document only, with no billing use",
      "Medical, legal, billing, and quality improvement record",
      "Billing record only -- clinical details go in the verbal report",
      "Internal communication between crews on the same shift only"
    ],
    answer: 1,
    explanation: "The PCR serves multiple critical functions: medical record (continuity of care), legal document (admissible in court), billing record (insurance reimbursement), QI/QA tool (system performance), and research data. Complete, accurate, timely documentation is a professional and legal obligation."
  },
  {
    id: "ops-009", domain: "operations",
    q: "Where do most emergency-vehicle collisions occur?",
    options: [
      "Highway driving at high speed",
      "Navigating intersections",
      "Backing into a scene",
      "Driving in adverse weather"
    ],
    answer: 1,
    explanation: "Intersections are the most dangerous point in emergency driving because other drivers do not always yield. Slow to a near stop, make eye contact with other drivers, and confirm all lanes are clear before proceeding."
  },
  {
    id: "ops-010", domain: "operations",
    q: "Medical direction in EMS refers to:",
    options: [
      "The hospital the patient is transported to for definitive care",
      "Physician oversight of EMT practice, both online and offline",
      "The written medical protocols printed in the EMT's manual",
      "The charge nurse who gives orders at the receiving facility"
    ],
    answer: 1,
    explanation: "Medical direction: physicians who oversee EMS systems and providers. Online (direct) = real-time phone/radio communication with a physician. Offline (indirect) = protocols, standing orders, training, and QI review developed by the medical director. EMTs function as an extension of the medical director's license in the field."
  },
  {
    id: "ops-011", domain: "operations",
    q: "Which of the following is an emergency move, appropriate despite potential spinal risk?",
    options: [
      "A patient with a possible ankle fracture on a staircase",
      "A conscious patient sitting in a car after a minor collision, with no hazards",
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
      "Retreat to safety and request law enforcement",
      "Attempt to calm the family member while continuing patient care",
      "Ignore the threat and keep your full focus on the patient",
      "Have your partner physically restrain the family member"
    ],
    answer: 0,
    explanation: "Your safety takes absolute priority. An EMS provider who becomes a victim cannot help the patient. Retreat to a safe location, request law enforcement, and do not re-enter until the scene is secured. No patient care obligation overrides personal safety."
  },
  {
    id: "ops-013", domain: "operations",
    q: "The correct sequence for donning and doffing PPE to prevent self-contamination is:",
    options: [
      "Mask or respirator, gown, eye protection, gloves; gloves come off first",
      "Gown, gloves, mask, eye protection -- remove in reverse",
      "Gloves first when donning, and gloves last when doffing",
      "Any sequence is acceptable as long as you work quickly"
    ],
    answer: 0,
    explanation: "Donning: gown, mask or respirator, eye protection, gloves. Doffing starts with the most contaminated items: gloves, then eye protection, then gown, and the mask last. Wash your hands afterward."
  },
  {
    id: "ops-014", domain: "operations",
    q: "A patient with decision-making capacity refuses to consent to treatment. You should:",
    options: [
      "Treat him anyway -- the medical need overrides his refusal",
      "Respect the refusal and document it thoroughly",
      "Call his family to override the refusal",
      "Contact law enforcement to compel treatment"
    ],
    answer: 1,
    explanation: "Competent adults have the right to refuse any medical treatment, even life-saving treatment. Exceptions: patients who lack decision-making capacity (intoxication, AMS, mental illness with immediate danger). Document the refusal, ensure informed refusal criteria are met, advise to call if symptoms change."
  },
  {
    id: "ops-015", domain: "operations",
    q: "Implied consent allows treatment of an unconscious patient because:",
    options: [
      "Family members can always consent for unconscious adults",
      "EMTs have authority to treat any patient regardless of consent",
      "A reasonable person would consent to life-saving care if able",
      "Unconscious patients lose all of their legal rights"
    ],
    answer: 2,
    explanation: "Implied consent: the legal doctrine that an unconscious patient would consent to emergency treatment if they were able. It allows treatment of unresponsive patients without express consent. Also applies to minors when parents cannot be reached for emergency care."
  },
  {
    id: "ops-016", domain: "operations",
    q: "At a crime scene that law enforcement has made safe, your evidence-preservation priority is:",
    options: [
      "Do not enter the scene until law enforcement clears it",
      "Touch only what care requires and document it",
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
      "Device, flow rate, SpO2 before and after, patient response",
      "'Oxygen applied' is sufficient if the time is recorded",
      "Flow rate and the destination hospital, and nothing else",
      "SpO2 reading and time of application only, with no device"
    ],
    answer: 0,
    explanation: "Complete oxygen documentation: device (NRB, nasal cannula, BVM), flow rate (LPM), baseline SpO2, SpO2 after intervention, and patient response. 'Oxygen applied' is legally and clinically inadequate. Document what you did, why you did it, and what happened as a result."
  },
  {
    id: "ops-018", domain: "operations",
    q: "Which of the following is the correct definition of negligence in EMS?",
    options: [
      "Intentionally harming a patient by acting with malicious intent",
      "Treating a competent patient without any consent at all",
      "Failure to meet the standard of care that causes harm",
      "Abandoning a patient after care has been started"
    ],
    answer: 2,
    explanation: "Negligence requires four elements: duty (you had an obligation to act), breach (you failed to meet the standard of care), causation, and damages (harm resulted). All four must be present."
  },

  // ============================================================
  // SPECIAL POPULATIONS -- 17 questions
  // ============================================================

  {
    id: "spc-001", domain: "special",
    q: "The most important anatomical difference in a pediatric airway compared to an adult is:",
    options: [
      "The pediatric airway is proportionally larger relative to body size",
      "The epiglottis is shorter, stiffer, and less flexible than in adults",
      "The tongue is proportionally larger and the airway is narrower",
      "The trachea is more rigid and much less likely to collapse"
    ],
    answer: 2,
    explanation: "Pediatric airway differences: proportionally larger tongue (most common cause of airway obstruction), smaller and narrower airway (small amounts of edema cause significant obstruction), longer floppy epiglottis, more anterior and superior airway opening. These differences require modified positioning and technique."
  },
  {
    id: "spc-002", domain: "special",
    q: "A 2-year-old is choking and cannot cough. She is conscious. Your treatment is:",
    options: [
      "Five back blows followed by five chest thrusts, like an infant",
      "Blind finger sweeps to remove the object, then back blows",
      "Position her supine and give 2 rescue breaths first",
      "Abdominal thrusts until the object is expelled"
    ],
    answer: 3,
    explanation: "For a conscious choking child over 1 year: abdominal thrusts until the object is expelled or she becomes unresponsive, then start CPR. Infants under 1 year get 5 back blows and 5 chest thrusts. Never do blind finger sweeps."
  },
  {
    id: "spc-003", domain: "special",
    q: "A pregnant patient at 32 weeks is unresponsive after a trauma. When performing CPR you should:",
    options: [
      "Position supine with legs elevated",
      "Perform CPR in a sitting position",
      "Perform CPR normally -- pregnancy does not affect CPR technique",
      "Manually displace the uterus to the left"
    ],
    answer: 3,
    explanation: "In the later half of pregnancy, the uterus can compress the inferior vena cava when the patient lies flat, reducing blood return to the heart. During CPR, manually displace the uterus to the patient's left while giving compressions on a firm surface, and transport promptly."
  },
  {
    id: "spc-004", domain: "special",
    q: "An elderly patient taking warfarin (Coumadin) falls and strikes her head. She has no loss of consciousness and is alert. You should:",
    options: [
      "Transport only if she develops a headache or neurological symptoms",
      "Observe for 30 minutes on scene and transport if symptoms develop",
      "Transport, since warfarin raises the risk of brain bleeding",
      "Advise her to stop taking warfarin and follow up with her doctor"
    ],
    answer: 2,
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
      "Continue stimulation and warming for another 2 minutes",
      "Begin chest compressions immediately at 120 per minute",
      "Administer epinephrine before any other step",
      "Begin positive pressure ventilation with a BVM"
    ],
    answer: 3,
    explanation: "Neonatal resuscitation: if the newborn has a heart rate below 100 or inadequate breathing after warming and stimulation, begin positive pressure ventilation at 40-60 breaths per minute. Start compressions only if the heart rate stays below 60 despite effective ventilation."
  },
  {
    id: "spc-007", domain: "special",
    q: "An infant is found limp and pulseless. The correct CPR compression technique for a single rescuer is:",
    options: [
      "2 fingers on the lower half of the sternum, just below the nipple line",
      "Heel of one hand on the lower sternum",
      "Two thumbs encircling the chest with fingers wrapped around the back (two-rescuer technique)",
      "3 fingers in the center of the chest"
    ],
    answer: 0,
    explanation: "Infant single-rescuer CPR: 2 fingers on the lower half of the sternum, just below the nipple line. Compress about one third of the chest depth (about 1.5 inches) at 100-120 per minute, at a ratio of 30 compressions to 2 breaths."
  },
  {
    id: "spc-008", domain: "special",
    q: "A 14-year-old with a minor, stable laceration does not want her parents called. You should:",
    options: [
      "Honor her refusal -- she is old enough to decide",
      "Try to reach a guardian while continuing care",
      "Leave her with no care until her parents arrive",
      "Leave the scene since she refuses"
    ],
    answer: 1,
    explanation: "Minors generally cannot give informed refusal. Try to reach a parent or guardian while continuing assessment and care, and involve medical direction and law enforcement per protocol. In any true emergency, implied consent applies."
  },
  {
    id: "spc-009", domain: "special",
    q: "Sudden Infant Death Syndrome (SIDS) is most commonly associated with:",
    options: [
      "Formula feeding, which is the only significant risk factor",
      "Prone sleeping position in infants under 1 year",
      "Excessive room temperature and heavy clothing alone",
      "Parental smoking only"
    ],
    answer: 1,
    explanation: "SIDS risk factors: prone (stomach) or side sleeping, soft bedding, co-sleeping, parental smoking, and overheating. Begin resuscitation unless there are obvious signs of death (rigor mortis, dependent lividity), be compassionate with the family, and document the scene conditions."
  },
  {
    id: "spc-010", domain: "special",
    q: "An elderly patient with known dementia is confused. Her caregiver reports she has been much more confused than usual since yesterday. You should:",
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
      "Attempt the move with just your standard crew of two",
      "Have the patient walk down the stairs to reduce the load",
      "Use the standard stretcher since it can support the weight",
      "Request lift assist and use bariatric equipment"
    ],
    answer: 3,
    explanation: "Bariatric patients require additional personnel and specialized equipment. Standard stretchers and stair chairs may not be rated for the weight. Request fire department lift assist. Use bariatric equipment. Moving an inadequately staffed bariatric patient is the most common mechanism of EMS crew injury."
  },
  {
    id: "spc-013", domain: "special",
    q: "A patient with autism spectrum disorder becomes agitated during your assessment. The most effective approach is:",
    options: [
      "Speak calmly, reduce stimulation, and involve a trusted caregiver",
      "Restrain him for safety so you can proceed quickly",
      "Speed up to finish the assessment before the agitation gets worse",
      "Administer midazolam IM to calm him for the assessment"
    ],
    answer: 0,
    explanation: "Patients with ASD may be overwhelmed by lights, sirens, touch, and unfamiliar people. Strategies: calm voice, slow approach, minimize extraneous stimulation, involve a parent or caregiver who knows the patient's communication preferences and triggers. Avoid physical restraint unless safety requires it."
  },
  {
    id: "spc-014", domain: "special",
    q: "Which finding in a pediatric patient is a sign of decompensated shock?",
    options: [
      "Tachycardia with normal blood pressure",
      "Hypotension",
      "Irritability with cool hands and feet",
      "Prolonged capillary refill"
    ],
    answer: 1,
    explanation: "Children compensate for shock by increasing heart rate, so tachycardia, cool extremities, delayed capillary refill and irritability are early (compensated) signs. Hypotension is a late, ominous sign of decompensation."
  },
  {
    id: "spc-015", domain: "special",
    q: "A patient who is deaf is trying to communicate with you during assessment. The most appropriate action is:",
    options: [
      "Speak loudly and clearly -- many deaf patients can lip read",
      "Complete the assessment without communication -- use physical exam only",
      "Wait for a certified interpreter before beginning treatment",
      "Write questions on paper or use an interpreter or smartphone"
    ],
    answer: 3,
    explanation: "Communication with deaf patients: written communication, interpreter (including video remote interpreting apps), lip reading if the patient prefers, picture boards. Do not delay emergency care waiting for an interpreter. A smartphone with a notes app is a quick solution. Some deaf patients speak and lip-read effectively."
  },
  {
    id: "spc-016", domain: "special",
    q: "Gestational age matters in obstetric emergencies because:",
    options: [
      "It has no clinical significance in the prehospital setting",
      "Viability begins around 24 weeks, which affects destination and care planning",
      "It determines which hospital the patient should be transported to regardless of clinical status",
      "All obstetric emergencies are treated identically regardless of gestational age"
    ],
    answer: 1,
    explanation: "Fetal viability generally begins around 24 weeks. Gestational age affects the destination (an obstetric or NICU-capable hospital) and the care plan. The EMT always resuscitates the mother."
  },
  {
    id: "spc-017", domain: "special",
    q: "An elderly patient presents with confusion, urinary incontinence, and repeated falls. These non-specific findings are best described as:",
    options: [
      "Normal aging that needs no evaluation",
      "Early dementia that has not been diagnosed yet",
      "Geriatric syndromes: non-specific signs of acute illness",
      "Diagnosed dementia"
    ],
    answer: 2,
    explanation: "Geriatric syndromes: non-specific presentations (confusion, falls, incontinence, functional decline) that represent the end result of multiple underlying problems in elderly patients. These are often the only signs of serious illness (UTI, MI, pneumonia) in older adults who may not mount typical responses. Always investigate."
  },
];

export const EXAM_META = {
  title: "NREMT EMT Practice Exam",
  totalQuestions: 120,
  timeLimit: 7200, // seconds (2 hours)
  passingScore: 0.80,
  borderlineScore: 0.70,
  lastReviewed: "September 2026",
  version: "1.0",
  disclaimer: "This is a practice tool designed to simulate the NREMT EMT examination format. It is not affiliated with, endorsed by, or approved by the National Registry of Emergency Medical Technicians. Content is for educational purposes only. Always follow the protocols established by your training program and medical director.",
};

// Weighted random selection -- pulls targetCount from each domain
function fisherYates(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildExamDeck(questions, totalCount = 120) {
  const byDomain = {};
  questions.forEach(q => {
    if (!byDomain[q.domain]) byDomain[q.domain] = [];
    byDomain[q.domain].push(q);
  });

  const selected = [];
  Object.entries(EXAM_DOMAINS).forEach(([domain, config]) => {
    const pool = byDomain[domain] || [];
    const shuffled = fisherYates(pool);
    const count = Math.min(config.target, shuffled.length);
    selected.push(...shuffled.slice(0, count));
  });

  // Fill remaining slots if needed
  const remaining = totalCount - selected.length;
  if (remaining > 0) {
    const selectedIds = new Set(selected.map(q => q.id));
    const leftovers = questions
      .filter(q => !selectedIds.has(q.id));
    leftovers.splice(0, leftovers.length, ...fisherYates(leftovers).slice(0, remaining));
    selected.push(...leftovers);
  }

  // Final shuffle, and shuffle each question's options so the correct answer
  // is not always in the same slot (the bank is written with B far too often).
  return fisherYates(selected).map(q => {
    const correctText = q.options[q.answer];
    const opts = fisherYates(q.options);
    return { ...q, options: opts, answer: opts.indexOf(correctText) };
  });
}
