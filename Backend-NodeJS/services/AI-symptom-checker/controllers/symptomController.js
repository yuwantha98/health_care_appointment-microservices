const symptomDatabase = [
    // --- RESPIRATORY ---
    {
        keywords: ['fever', 'cough', 'chills', 'sore throat', 'body ache', 'tired', 'fatigue'],
        condition: 'Influenza (Flu)',
        certainty: '90%',
        specialty: 'General Practitioner',
        advice: 'Stay hydrated, rest, and consider over-the-counter flu medication.',
        lifestyleAdvice: 'Stay home for at least 24 hours after fever is gone. Avoid contact with others. Maintain 8+ hours of sleep.',
        followUp: ['Do you have a loss of taste or smell?', 'Is your cough dry or wet?']
    },
    {
        keywords: ['loss of taste', 'loss of smell', 'dry cough', 'shortness of breath', 'fever'],
        condition: 'COVID-19',
        certainty: '92%',
        specialty: 'General Practitioner',
        advice: 'Please isolate immediately and get a PCR test. Monitor oxygen levels.',
        lifestyleAdvice: 'Strict isolation. Ventilate your room. Use a pulse oximeter twice daily. High vitamin C and D intake.',
        followUp: []
    },
    {
        keywords: ['wheezing', 'shortness of breath', 'chest tightness', 'coughing at night', 'difficulty breathing'],
        condition: 'Asthma',
        certainty: '88%',
        specialty: 'Pulmonologist',
        advice: 'Use your rescue inhaler if you have one. Avoid known triggers like dust or pollen.',
        lifestyleAdvice: 'Avoid pets and dust. Keep your environment dry. Do not exercise in very cold air without a mask.',
        followUp: ['Does the wheezing worsen with exercise?']
    },
    {
        keywords: ['deep cough', 'yellow mucus', 'green mucus', 'chest pain when breathing', 'shaking chills'],
        condition: 'Pneumonia',
        certainty: '85%',
        specialty: 'Pulmonologist',
        advice: 'This could be a serious lung infection. Please see a doctor for a chest X-ray.',
        lifestyleAdvice: 'Complete your full course of antibiotics if prescribed. Use a humidifier. Sit upright to breathe easier.',
        followUp: ['Are you experiencing a very high fever over 102°F?']
    },

    // --- CARDIAC ---
    {
        keywords: ['chest pain', 'shortness of breath', 'arm pain', 'heart palpitations', 'sweating', 'jaw pain'],
        condition: 'Cardiovascular Issue / Angina',
        certainty: '95%',
        specialty: 'Cardiologist',
        advice: 'URGENT: Please seek immediate emergency medical care.',
        lifestyleAdvice: 'Do not attempt to drive yourself. Sit quietly and avoid all physical exertion until help arrives.',
        followUp: []
    },
    {
        keywords: ['blood pressure', 'hypertension', 'vision change', 'heartbeat', 'nosebleed', 'dizzy'],
        condition: 'Hypertension (High Blood Pressure)',
        certainty: '90%',
        specialty: 'Cardiologist',
        advice: 'Reduce salt intake. Frequent monitoring is required.',
        lifestyleAdvice: 'Limit sodium to <1500mg/day. Aim for 30 mins of brisk walking. Avoid caffeine and smoking.',
        followUp: []
    },

    // --- DIGESTIVE ---
    {
        keywords: ['stomach pain', 'gastric', 'cramps', 'diarrhea', 'vomiting', 'nausea', 'bloating'],
        condition: 'Gastroenteritis / Gastritis',
        certainty: '80%',
        specialty: 'Gastroenterologist',
        advice: 'Ensure adequate fluid intake. Avoid spicy or heavy foods.',
        lifestyleAdvice: 'Adopt the BRAT diet (Bananas, Rice, Applesauce, Toast). Avoid dairy and caffeine for 48 hours.',
        followUp: ['Is there blood in your stool?']
    },
    {
        keywords: ['heartburn', 'acid reflux', 'burning in chest', 'sour taste', 'difficulty swallowing'],
        condition: 'GERD (Acid Reflux)',
        certainty: '85%',
        specialty: 'Gastroenterologist',
        advice: 'Avoid eating 3 hours before bed. Try antacids for temporary relief.',
        lifestyleAdvice: 'Sleep with your head elevated. Avoid fatty foods, citrus, and mint. Do not lie down after meals.',
        followUp: []
    },

    // --- ENDOCRINE ---
    {
        keywords: ['excessive thirst', 'frequent urination', 'fatigue', 'blurry vision', 'weight loss', 'extra hunger', 'slow healing', 'dry mouth'],
        condition: 'Diabetes (Type 1 or Type 2)',
        certainty: '92%',
        specialty: 'Endocrinologist',
        advice: 'Monitor your blood sugar levels carefully. You require a clinical HbA1c test and a consultation to determine the type and management plan.',
        lifestyleAdvice: 'Keep a daily food and sugar log. Avoid sugary drinks. Walk 15 mins after every major meal.',
        followUp: ['Are your hands or feet tingling?', 'Is the fatigue constant throughout the day?']
    },
    {
        keywords: ['weight gain', 'cold intolerance', 'dry skin', 'thinning hair', 'constipation'],
        condition: 'Hypothyroidism',
        certainty: '80%',
        specialty: 'Endocrinologist',
        advice: 'Your thyroid may be underactive. A TSH blood test is recommended.',
        lifestyleAdvice: 'Limit intake of raw cruciferous vegetables. Manage stress. Take your medication on an empty stomach.',
        followUp: []
    },

    // --- NEUROLOGICAL ---
    {
        keywords: ['headache', 'migraine', 'light sensitivity', 'nausea', 'aura', 'throbbing'],
        condition: 'Migraine',
        certainty: '85%',
        specialty: 'Neurologist',
        advice: 'Rest in a dark room. Avoid triggers like chocolate or caffeine.',
        lifestyleAdvice: 'Maintain a consistent sleep schedule. Stay hydrated. Keep a migraine trigger diary.',
        followUp: []
    },
    {
        keywords: ['face drooping', 'arm weakness', 'speech difficulty', 'numbness on one side'],
        condition: 'Potential Stroke (FAST)',
        certainty: '99%',
        specialty: 'Neurologist / ER',
        advice: 'EMERGENCY: Call an ambulance immediately. Time is critical.',
        lifestyleAdvice: 'Do not take aspirin without medical instruction. Note the exact time symptoms started.',
        followUp: []
    },

    // --- URINARY ---
    {
        keywords: ['burning urination', 'pelvic pain', 'cloudy urine', 'blood in urine', 'frequent urge'],
        condition: 'Urinary Tract Infection (UTI)',
        certainty: '80%',
        specialty: 'Urologist',
        advice: 'Drink plenty of water/cranberry juice. You may need antibiotics.',
        lifestyleAdvice: 'Urinate frequently and do not hold it. Avoid alcohol and irritants like spicy food.',
        followUp: ['Do you have pain in your lower back or sides?']
    },
    {
        keywords: ['severe flank pain', 'side pain', 'radiating pain to groin', 'nausea', 'inability to stay still'],
        condition: 'Kidney Stones',
        certainty: '85%',
        specialty: 'Urologist',
        advice: 'This pain is often severe. Medical imaging and pain management are needed.',
        lifestyleAdvice: 'Drink 2-3 liters of water per day. Limit high-oxalate foods like spinach and beets.',
        followUp: []
    },

    // --- DERMATOLOGY / OTHER ---
    {
        keywords: ['rash', 'itchy', 'redness', 'swelling', 'hives', 'blisters'],
        condition: 'Allergic Reaction / Dermatitis',
        certainty: '75%',
        specialty: 'Dermatologist',
        advice: 'Avoid the suspected allergen. Try calamine or antihistamines.',
        lifestyleAdvice: 'Use fragrance-free soap. Wear loose cotton clothing. Avoid scratching to prevent infection.',
        followUp: []
    },
    {
        keywords: ['joint pain', 'stiffness', 'swelling', 'knee pain', 'back pain', 'cracking joints'],
        condition: 'Arthritis / Joint Inflammation',
        certainty: '85%',
        specialty: 'Orthopedist',
        advice: 'Apply heat or cold packs. Low-impact exercise may help.',
        lifestyleAdvice: 'Weight management reduces joint stress. Try swimming or yoga. Use ergonomic supports.',
        followUp: []
    },
    {
        keywords: ['anxiety', 'panic', 'stress', 'racing heart', 'insomnia', 'worry'],
        condition: 'Anxiety Disorder',
        certainty: '75%',
        specialty: 'Psychiatrist',
        advice: 'Practice mindfulness. Consider counseling or therapy.',
        lifestyleAdvice: 'Limit caffeine and alcohol. Practice deep breathing (4-7-8 method). Establish a bedtime routine.',
        followUp: ['Are you experiencing sudden episodes of intense fear?']
    },
    {
        keywords: ['pale skin', 'fatigue', 'dizziness', 'cold hands', 'brittle nails'],
        condition: 'Anemia',
        certainty: '80%',
        specialty: 'Hematologist',
        advice: 'Consider iron-rich foods or supplements. A CBC blood test is needed.',
        lifestyleAdvice: 'Combine iron-rich foods with Vitamin C for better absorption. Avoid tea/coffee with meals.',
        followUp: []
    }
];

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
};

const analyzeSymptoms = (req, res) => {
    try {
        const { symptoms } = req.body;
        
        if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
            return res.status(400).json({ success: false, message: 'Please provide symptoms.' });
        }

        // 1. Normalization & Synonym Mapping
        let inputString = symptoms.join(' ').toLowerCase();
        
        // Specific term mapping for common descriptions
        const expandedSynonyms = {
            ...synonymMap,
            'blur': 'blurry vision',
            'blurry': 'blurry vision',
            'excessive thirst': 'thirst',
            'frequent urination': 'urination',
            'constant thirst': 'thirst',
            'peeing': 'urination',
            'vision change': 'blurry vision',
        };

        for (const [colloquial, medical] of Object.entries(expandedSynonyms)) {
            if (inputString.includes(colloquial)) {
                inputString += ' ' + medical; 
            }
        }

        // 2. Scoring
        let matches = symptomDatabase.map(entry => {
            let score = 0;
            let matchedKeywords = [];
            entry.keywords.forEach(kw => {
                if (inputString.includes(kw.toLowerCase())) {
                    score++;
                    matchedKeywords.push(kw.toLowerCase());
                }
            });
            return { ...entry, score, matchedKeywords };
        });

        matches.sort((a, b) => b.score - a.score);
        const best = matches[0];
        const secondBest = matches[1];

        // 3. Perfect Logic: Dynamic Follow-up Generation
        // If we have a decent match but not 100% sure, ask for the MISSING symptoms of the best match
        let isAmbiguous = false;
        let followUpQuestions = [];

        if (best.score > 0) {
            // Find keywords in the best condition that the user HAVEN'T mentioned yet
            const missingKeywords = best.keywords.filter(kw => 
                !inputString.includes(kw.toLowerCase())
            );

            // Ambiguity trigger: Score is low OR another condition is very close
            // UPDATED: Now triggers follow-ups more often to improve interactivity
            isAmbiguous = (best.score < 5) || 
                         (secondBest && (best.score - secondBest.score) <= 2);

            if (isAmbiguous && missingKeywords.length > 0) {
                // Generate natural language questions for missing symptoms
                followUpQuestions = missingKeywords.slice(0, 3).map(kw => `Are you experiencing ${kw}?`);
            }
        }

        if (best.score > 0) {
            const baseCert = parseInt(best.certainty.replace('%', ''));
            const finalCert = Math.min(99, baseCert + (best.score * 5));

            return res.status(200).json({
                success: true,
                data: {
                    condition: best.condition,
                    certainty: `${finalCert}%`,
                    recommendedSpecialty: best.specialty,
                    advice: best.advice,
                    lifestyleAdvice: best.lifestyleAdvice || 'Stay observant of your symptoms and rest.',
                    isAmbiguous: isAmbiguous,
                    followUpQuestions: followUpQuestions
                }
            });
        } else {
            // Truly unknown path
            return res.status(200).json({
                success: true,
                data: {
                    condition: 'Unknown Condition',
                    certainty: 'Low',
                    recommendedSpecialty: 'General Practitioner',
                    advice: 'We need more information to help narrow this down.',
                    lifestyleAdvice: 'Monitor your symptoms closely and maintain a health journal.',
                    isAmbiguous: true,
                    followUpQuestions: ['Are you experiencing fever?', 'Do you have any pain?', 'Are you feeling tired?']
                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { analyzeSymptoms };
