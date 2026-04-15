const symptomDatabase = [
    // --- RESPIRATORY ---
    {
        keywords: ['fever', 'cough', 'chills', 'sore throat', 'body ache', 'tired', 'fatigue', 'mucus', 'contact'],
        condition: 'Influenza (Flu)',
        specialty: 'General Practitioner',
        advice: 'Stay hydrated, rest, and monitor your temperature closely.',
        lifestyleAdvice: 'Stay home for at least 24 hours after fever resolves. Avoid contact with others. Maintain 8+ hours of sleep.',
        followUp: ['Do you have a loss of taste or smell?', 'Is your cough dry or producing mucus?', 'Have you been in contact with anyone with flu recently?']
    },
    {
        keywords: ['loss of taste', 'loss of smell', 'dry cough', 'shortness of breath', 'fever', 'difficulty breathing', 'chest pain'],
        condition: 'COVID-19',
        specialty: 'General Practitioner',
        advice: 'Please isolate and consider getting a rapid antigen or PCR test. Monitor your oxygen levels if possible.',
        lifestyleAdvice: 'Strict isolation. Ventilate your room. Use a pulse oximeter twice daily. Increase Vitamin C and D intake.',
        followUp: ['Do you have difficulty breathing at rest?', 'Have you tested positive for COVID-19 before?']
    },
    {
        keywords: ['wheezing', 'shortness of breath', 'chest tightness', 'coughing at night', 'difficulty breathing', 'exercise', 'inhaler'],
        condition: 'Asthma / Bronchospasm',
        specialty: 'Pulmonologist',
        advice: 'Use your rescue inhaler if available. Avoid known environmental triggers.',
        lifestyleAdvice: 'Avoid pets and dust. Keep environment dry and well-ventilated. Do not exercise in very cold air without a mask.',
        followUp: ['Does the wheezing worsen with exercise or at night?', 'Do you have a known inhaler prescription?']
    },
    {
        keywords: ['deep cough', 'yellow mucus', 'green mucus', 'chest pain when breathing', 'shaking chills', 'high fever', 'coughing blood'],
        condition: 'Pneumonia',
        specialty: 'Pulmonologist',
        advice: 'This could indicate a serious lung infection. Please see a doctor for a chest X-ray immediately.',
        lifestyleAdvice: 'Complete your full antibiotic course if prescribed. Use a humidifier. Sit upright to ease breathing.',
        followUp: ['Is your fever above 39°C (102°F)?', 'Are you coughing up blood?']
    },

    // --- CARDIAC (Emergency category) ---
    {
        keywords: ['chest pain', 'shortness of breath', 'arm pain', 'heart palpitations', 'sweating', 'jaw pain', 'left arm', 'cold sweat'],
        condition: 'Cardiovascular Emergency / Possible Angina',
        specialty: 'Cardiologist / Emergency',
        advice: 'These symptoms may indicate a cardiac emergency. Seek immediate medical attention.',
        lifestyleAdvice: 'Do not attempt to drive yourself. Sit quietly and avoid all physical exertion until help arrives.',
        followUp: ['Is the chest pain radiating to your left arm or jaw?', 'Are you experiencing cold sweats?']
    },
    {
        keywords: ['blood pressure', 'hypertension', 'vision change', 'heartbeat', 'nosebleed', 'dizzy', 'medication'],
        condition: 'Hypertension (Elevated Blood Pressure)',
        specialty: 'Cardiologist',
        advice: 'Reduce salt intake. Frequent monitoring is required. Do not stop prescribed medication.',
        lifestyleAdvice: 'Limit sodium to <1500mg/day. Aim for 30 mins of brisk walking daily. Avoid caffeine and smoking.',
        followUp: ['Do you currently take blood pressure medication?', 'When did you last measure your BP?']
    },

    // --- DIGESTIVE ---
    {
        keywords: ['stomach pain', 'gastric', 'cramps', 'diarrhea', 'vomiting', 'nausea', 'bloating', 'blood in stool', 'unusual food'],
        condition: 'Gastroenteritis / Gastritis',
        specialty: 'Gastroenterologist',
        advice: 'Ensure adequate fluid intake. Avoid spicy, oily, or heavy foods for 48 hours.',
        lifestyleAdvice: 'Adopt the BRAT diet (Bananas, Rice, Applesauce, Toast). Avoid dairy and caffeine.',
        followUp: ['Is there blood in your stool?', 'Have you eaten anything unusual in the past 24 hours?']
    },
    {
        keywords: ['heartburn', 'acid reflux', 'burning in chest', 'sour taste', 'difficulty swallowing', 'lying down'],
        condition: 'GERD (Gastroesophageal Reflux Disease)',
        specialty: 'Gastroenterologist',
        advice: 'Avoid eating within 3 hours of bedtime. Use antacids for temporary relief.',
        lifestyleAdvice: 'Sleep with your head elevated. Avoid fatty foods, citrus, and mint. Do not lie down after meals.',
        followUp: ['Does the burning worsen when lying down?', 'Have you noticed any difficulty swallowing?']
    },

    // --- ENDOCRINE ---
    {
        keywords: ['excessive thirst', 'frequent urination', 'fatigue', 'blurry vision', 'weight loss', 'extra hunger', 'slow healing', 'dry mouth', 'tingling', 'numbness', 'family history'],
        condition: 'Possible Diabetes (Type 1 or Type 2)',
        specialty: 'Endocrinologist',
        advice: 'Monitor your blood sugar levels. A clinical HbA1c test and in-person consultation are required.',
        lifestyleAdvice: 'Keep a daily food and sugar log. Avoid sugary drinks. Walk 15 minutes after every major meal.',
        followUp: ['Are your hands or feet tingling or numb?', 'Has anyone in your family been diagnosed with diabetes?']
    },
    {
        keywords: ['weight gain', 'cold intolerance', 'dry skin', 'thinning hair', 'constipation', 'cold feeling'],
        condition: 'Possible Hypothyroidism',
        specialty: 'Endocrinologist',
        advice: 'Your thyroid may be underactive. A TSH blood test is clinically recommended.',
        lifestyleAdvice: 'Limit intake of raw cruciferous vegetables. Manage stress levels. Take any medication on an empty stomach.',
        followUp: ['Do you feel unusually cold even in warm environments?', 'Have you gained weight without a dietary change?']
    },

    // --- NEUROLOGICAL ---
    {
        keywords: ['headache', 'migraine', 'light sensitivity', 'nausea', 'aura', 'throbbing', 'one side', 'localized', 'visual'],
        condition: 'Migraine',
        specialty: 'Neurologist',
        advice: 'Rest in a dark, quiet room. Avoid known triggers such as bright screens and caffeine.',
        lifestyleAdvice: 'Maintain a consistent sleep schedule. Stay hydrated. Keep a migraine trigger diary.',
        followUp: ['Is the headache localized to one side of your head?', 'Do you experience visual disturbances before the headache?']
    },
    {
        keywords: ['face drooping', 'arm weakness', 'speech difficulty', 'numbness on one side'],
        condition: 'Possible Stroke (FAST Criteria)',
        specialty: 'Neurologist / Emergency',
        advice: 'This is a potential neurological emergency. Call emergency services immediately.',
        lifestyleAdvice: 'Note the exact time symptoms started. Do not take aspirin without medical instruction.',
        followUp: []
    },

    // --- URINARY ---
    {
        keywords: ['burning urination', 'pelvic pain', 'cloudy urine', 'blood in urine', 'frequent urge'],
        condition: 'Urinary Tract Infection (UTI)',
        specialty: 'Urologist',
        advice: 'Drink plenty of water. Cranberry juice may help. You may need antibiotics from a GP.',
        lifestyleAdvice: 'Urinate frequently, do not hold it. Avoid alcohol and irritants like spicy food.',
        followUp: ['Do you have pain in your lower back or sides?', 'Is there visible blood in your urine?']
    },
    {
        keywords: ['severe flank pain', 'side pain', 'radiating pain to groin', 'nausea', 'inability to stay still'],
        condition: 'Possible Kidney Stones',
        specialty: 'Urologist',
        advice: 'This pain can be severe. Medical imaging and urgent pain management are needed.',
        lifestyleAdvice: 'Drink 2–3 liters of water per day. Limit high-oxalate foods like spinach and beets.',
        followUp: ['Is the pain coming in waves?', 'Has this happened to you before?']
    },

    // --- DERMATOLOGY ---
    {
        keywords: ['rash', 'itchy', 'redness', 'swelling', 'hives', 'blisters'],
        condition: 'Allergic Reaction / Dermatitis',
        specialty: 'Dermatologist',
        advice: 'Identify and avoid the suspected allergen. Try antihistamines for mild reactions.',
        lifestyleAdvice: 'Use fragrance-free soap. Wear loose cotton clothing. Avoid scratching to prevent infection.',
        followUp: ['Do you have difficulty breathing or throat tightness alongside the rash?', 'Have you recently started a new medication or food?']
    },

    // --- MUSCULOSKELETAL ---
    {
        keywords: ['joint pain', 'stiffness', 'swelling', 'knee pain', 'back pain', 'cracking joints'],
        condition: 'Arthritis / Joint Inflammation',
        specialty: 'Orthopedist',
        advice: 'Apply heat or cold packs to the affected joint. Low-impact exercise may provide relief.',
        lifestyleAdvice: 'Weight management reduces joint stress. Try swimming or yoga. Use ergonomic supports at work.',
        followUp: ['Is the stiffness worse in the mornings?', 'Has the pain spread to multiple joints?']
    },

    // --- MENTAL HEALTH ---
    {
        keywords: ['anxiety', 'panic', 'stress', 'racing heart', 'insomnia', 'worry'],
        condition: 'Anxiety / Stress Disorder',
        specialty: 'Psychiatrist / Counselor',
        advice: 'Practice mindfulness and breathing techniques. Consider speaking with a mental health professional.',
        lifestyleAdvice: 'Limit caffeine and alcohol. Practice deep breathing (4-7-8 method). Establish a consistent bedtime routine.',
        followUp: ['Are you experiencing sudden episodes of intense, overwhelming fear?', 'Is this affecting your daily activities or sleep?']
    },

    // --- HEMATOLOGY ---
    {
        keywords: ['pale skin', 'fatigue', 'dizziness', 'cold hands', 'brittle nails'],
        condition: 'Possible Anemia',
        specialty: 'Hematologist',
        advice: 'Consider iron-rich foods or supplements. A CBC (Complete Blood Count) blood test is recommended.',
        lifestyleAdvice: 'Combine iron-rich foods with Vitamin C for better absorption. Avoid tea or coffee with meals.',
        followUp: ['Are you vegetarian or vegan?', 'Have you noticed any changes in your menstrual cycle?']
    }
];

// ─── Emergency Symptom Detection ─────────────────────────────────────────────
const EMERGENCY_SYMPTOMS = [
    'chest pain', 'shortness of breath', 'arm pain', 'jaw pain',
    'face drooping', 'arm weakness', 'speech difficulty', 'numbness on one side',
    'blood in urine', 'coughing up blood', 'severe bleeding',
    'loss of consciousness', 'seizure', 'unresponsive', 'can\'t breathe'
];

// ─── Synonym / Colloquial Mapping ─────────────────────────────────────────────
const synonymMap = {
    'tired': 'fatigue',
    'exhausted': 'fatigue',
    'feeling tired': 'fatigue',
    'weakness': 'fatigue',
    'belly ache': 'stomach pain',
    'gastric pain': 'gastric',
    'tummy ache': 'stomach pain',
    'stomach ache': 'stomach pain',
    'heart pounding': 'heart palpitations',
    'racing heart': 'heart palpitations',
    'vision is fuzzy': 'blurry vision',
    'fuzzy vision': 'blurry vision',
    'cant see clearly': 'blurry vision',
    'breathless': 'shortness of breath',
    'difficulty breathing': 'shortness of breath',
    'itch': 'itchy',
    'sneezing': 'cough',
    'shaking': 'chills',
    'thirst': 'excessive thirst',
    'peeing a lot': 'frequent urination',
    'urination': 'frequent urination',
    'aching': 'pain',
    'sore': 'pain',
    'blur': 'blurry vision',
    'blurry': 'blurry vision',
    'constant thirst': 'excessive thirst',
    'peeing': 'frequent urination',
    'vision change': 'blurry vision',
};

// ─── Risk Level Calculator ────────────────────────────────────────────────────
const getRiskLevel = (score, totalKeywords, isEmergency) => {
    if (isEmergency) return 'Critical';
    const coverage = score / totalKeywords;
    if (coverage >= 0.65) return 'Urgent';
    if (coverage >= 0.35) return 'Moderate';
    return 'Low';
};

// ─── Recommended Action per Risk Level ───────────────────────────────────────
const getRecommendedAction = (riskLevel) => {
    const actions = {
        Critical: 'Call emergency services immediately (999 / 911). Do NOT attempt to drive yourself. Stay as still as possible.',
        Urgent:   'Visit an emergency room or urgent care clinic within the next 2–4 hours. Do not wait.',
        Moderate: 'Schedule a doctor appointment within the next 24–48 hours. Monitor your symptoms closely.',
        Low:      'Rest, stay hydrated, and observe your symptoms. Consult a GP if they persist for more than 3 days or worsen.'
    };
    return actions[riskLevel] || actions.Low;
};

// ─── Main Analysis Controller ─────────────────────────────────────────────────
const analyzeSymptoms = (req, res) => {
    try {
        const { symptoms } = req.body;

        if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
            return res.status(400).json({ success: false, message: 'Please provide at least one symptom.' });
        }

        // 1. Normalize input + apply synonym expansion
        let inputString = symptoms.join(' ').toLowerCase();
        for (const [colloquial, medical] of Object.entries(synonymMap)) {
            if (inputString.includes(colloquial)) {
                inputString += ' ' + medical;
            }
        }

        // 2. Emergency Detection (runs BEFORE scoring)
        const isEmergency = EMERGENCY_SYMPTOMS.some(s => inputString.includes(s));

        // 3. Score all conditions with Weighted Sensitivity
        const scoredMatches = symptomDatabase.map(entry => {
            let score = 0;
            const matchedKeywords = [];
            
            entry.keywords.forEach(kw => {
                const kwLower = kw.toLowerCase();
                // Check each individual symptom chip for weighted scoring
                symptoms.forEach(s => {
                    const sLower = s.toLowerCase();
                    if (sLower.includes(kwLower)) {
                        // High-Sensitivity: Specific details (multi-word answers from "Yes" clicks)
                        // carry 2x weight to make the AI more decisive.
                        const weight = (s.split(' ').length > 1) ? 2.0 : 1.0;
                        score += weight;
                        if (!matchedKeywords.includes(kw)) matchedKeywords.push(kw);
                    }
                });
            });
            return { ...entry, score, matchedKeywords };
        });

        // Sort descending by score
        scoredMatches.sort((a, b) => b.score - a.score);

        const best       = scoredMatches[0];
        const secondBest = scoredMatches[1];

        if (best.score === 0) {
            // No match found — return a safe, generic response
            return res.status(200).json({
                success: true,
                data: {
                    riskLevel: 'Low',
                    isEmergency: false,
                    possibleConditions: [],
                    recommendedAction: 'We need more information. Please describe your symptoms in more detail or consult a general practitioner.',
                    clinicalAdvice: 'We could not identify a pattern matching your symptoms. Please visit a GP for a proper evaluation.',
                    lifestyleAdvice: 'Monitor your symptoms closely and maintain a health journal.',
                    recommendedSpecialty: 'General Practitioner',
                    isAmbiguous: true,
                    followUpQuestions: [
                        'Are you experiencing any fever or chills?',
                        'Do you have any pain? If so, where?',
                        'How long have you been feeling this way?'
                    ]
                }
            });
        }

        // 4. Build ranked conditions list (top 3 with scores > 0)
        const top3 = scoredMatches
            .filter(m => m.score > 0)
            .slice(0, 3)
            .map((m, idx) => ({
                name: m.condition,
                likelihood: idx === 0 ? 'Most Likely' : (m.score >= best.score - 1 ? 'Possible' : 'Less Likely'),
                specialty: m.specialty,
                score: m.score
            }));

        // 5. Risk Level
        const riskLevel = getRiskLevel(best.score, best.keywords.length, isEmergency);

        // 6. Ambiguity & Follow-up
        const isAmbiguous = (best.score < 5) || (secondBest && (best.score - secondBest.score) <= 2);
        let followUpQuestions = [];

        if (isAmbiguous) {
            // Helper to clean a question for duplicate checking
            const isAnswered = (q) => {
                const cleaned = q.toLowerCase()
                    .replace(/^(is the|does the|do you|has the|have you|is there|when did|are you experiencing|are you also experiencing|are you feeling|do you notice|is your|have you felt|any)\s+/i, '')
                    .replace(/\?$/, '')
                    .trim();
                // Check if the cleaned symptom is ALREADY a substring of any existing symptom
                return symptoms.some(s => s.toLowerCase().includes(cleaned)) || inputString.includes(cleaned);
            };

            // Filter both condition-specific follow-ups and auto-generated ones
            followUpQuestions = (best.followUp && best.followUp.length > 0)
                ? best.followUp.filter(q => !isAnswered(q)).slice(0, 3)
                : best.keywords
                    .filter(kw => !inputString.includes(kw.toLowerCase()))
                    .map(kw => `Are you also experiencing ${kw}?`)
                    .slice(0, 3);
        }

        // Compute a display-friendly match score (capped at 96%)
        const rawPct = Math.round((best.score / best.keywords.length) * 100);
        const matchScore = `${Math.min(rawPct, 96)}%`;

        return res.status(200).json({
            success: true,
            data: {
                riskLevel,
                matchScore,
                isEmergency,
                possibleConditions: top3,
                recommendedAction: getRecommendedAction(riskLevel),
                clinicalAdvice: best.advice,
                lifestyleAdvice: best.lifestyleAdvice || 'Rest, stay hydrated, and monitor your symptoms.',
                recommendedSpecialty: best.specialty,
                isAmbiguous,
                followUpQuestions
            }
        });

    } catch (error) {
        console.error('AI Analysis Error:', error);
        res.status(500).json({ success: false, message: 'Analysis service error. Please try again.' });
    }
};

module.exports = { analyzeSymptoms };
