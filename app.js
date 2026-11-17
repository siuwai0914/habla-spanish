(() => {
    'use strict';

    // --- VOCABULARY DATA SETS ---
    const numbersData = [
        { id: 'num-1', english: '1', spanish: 'uno', phonetic: 'OO-noh', group: '1-10' },
        { id: 'num-2', english: '2', spanish: 'dos', phonetic: 'dohs', group: '1-10' },
        { id: 'num-3', english: '3', spanish: 'tres', phonetic: 'trehs', group: '1-10' },
        { id: 'num-4', english: '4', spanish: 'cuatro', phonetic: 'KWAH-troh', group: '1-10' },
        { id: 'num-5', english: '5', spanish: 'cinco', phonetic: 'SEEN-koh', group: '1-10' },
        { id: 'num-6', english: '6', spanish: 'seis', phonetic: 'says', group: '1-10' },
        { id: 'num-7', english: '7', spanish: 'siete', phonetic: 'SYEH-teh', group: '1-10' },
        { id: 'num-8', english: '8', spanish: 'ocho', phonetic: 'OH-choh', group: '1-10' },
        { id: 'num-9', english: '9', spanish: 'nueve', phonetic: 'NWEH-beh', group: '1-10' },
        { id: 'num-10', english: '10', spanish: 'diez', phonetic: 'dyehs', group: '1-10' },
        { id: 'num-11', english: '11', spanish: 'once', phonetic: 'OHN-seh', group: '11-20' },
        { id: 'num-12', english: '12', spanish: 'doce', phonetic: 'DOH-seh', group: '11-20' },
        { id: 'num-13', english: '13', spanish: 'trece', phonetic: 'TREH-seh', group: '11-20' },
        { id: 'num-14', english: '14', spanish: 'catorce', phonetic: 'kah-TOR-seh', group: '11-20' },
        { id: 'num-15', english: '15', spanish: 'quince', phonetic: 'KEEN-seh', group: '11-20' },
        { id: 'num-16', english: '16', spanish: 'dieciséis', phonetic: 'dyeh-see-SAYS', group: '11-20' },
        { id: 'num-17', english: '17', spanish: 'diecisiete', phonetic: 'dyeh-see-SYEH-teh', group: '11-20' },
        { id: 'num-18', english: '18', spanish: 'dieciocho', phonetic: 'dyeh-see-OH-choh', group: '11-20' },
        { id: 'num-19', english: '19', spanish: 'diecinueve', phonetic: 'dyeh-see-NWEH-beh', group: '11-20' },
        { id: 'num-20', english: '20', spanish: 'veinte', phonetic: 'BAYN-teh', group: '11-20' },
        { id: 'num-21', english: '21', spanish: 'veintiuno', phonetic: 'bayn-tee-OO-noh', group: '21-30' },
        { id: 'num-22', english: '22', spanish: 'veintidós', phonetic: 'bayn-tee-DOHS', group: '21-30' },
        { id: 'num-23', english: '23', spanish: 'veintitrés', phonetic: 'bayn-tee-TREHS', group: '21-30' },
        { id: 'num-24', english: '24', spanish: 'veinticuatro', phonetic: 'bayn-tee-KWAH-troh', group: '21-30' },
        { id: 'num-25', english: '25', spanish: 'veinticinco', phonetic: 'bayn-tee-SEEN-koh', group: '21-30' },
        { id: 'num-26', english: '26', spanish: 'veintiséis', phonetic: 'bayn-tee-SAYS', group: '21-30' },
        { id: 'num-27', english: '27', spanish: 'veintisiete', phonetic: 'bayn-tee-SYEH-teh', group: '21-30' },
        { id: 'num-28', english: '28', spanish: 'veintiocho', phonetic: 'bayn-tee-OH-choh', group: '21-30' },
        { id: 'num-29', english: '29', spanish: 'veintinueve', phonetic: 'bayn-tee-NWEH-beh', group: '21-30' },
        { id: 'num-30', english: '30', spanish: 'treinta', phonetic: 'TRAYN-tah', group: '21-30' }
    ];

    const alphabetData = [
        { id: 'let-a', letter: 'A a', name: 'a', phonetic: 'ah', example: 'amigo', meaning: 'friend' },
        { id: 'let-b', letter: 'B b', name: 'be', phonetic: 'beh', example: 'buenos días', meaning: 'good morning' },
        { id: 'let-c', letter: 'C c', name: 'ce', phonetic: 'seh / theh', example: 'casa', meaning: 'house' },
        { id: 'let-d', letter: 'D d', name: 'de', phonetic: 'deh', example: 'desayuno', meaning: 'breakfast' },
        { id: 'let-e', letter: 'E e', name: 'e', phonetic: 'eh', example: 'español', meaning: 'Spanish' },
        { id: 'let-f', letter: 'F f', name: 'efe', phonetic: 'EH-feh', example: 'familia', meaning: 'family' },
        { id: 'let-g', letter: 'G g', name: 'ge', phonetic: 'heh', example: 'gato', meaning: 'cat' },
        { id: 'let-h', letter: 'H h', name: 'hache', phonetic: 'AH-cheh (silent)', example: 'hora', meaning: 'hour / time' },
        { id: 'let-i', letter: 'I i', name: 'i', phonetic: 'ee', example: 'informático', meaning: 'IT specialist' },
        { id: 'let-j', letter: 'J j', name: 'jota', phonetic: 'HOH-tah', example: 'jubilado', meaning: 'retired' },
        { id: 'let-k', letter: 'K k', name: 'ka', phonetic: 'kah', example: 'kilo', meaning: 'kilo' },
        { id: 'let-l', letter: 'L l', name: 'ele', phonetic: 'EH-leh', example: 'libro', meaning: 'book' },
        { id: 'let-m', letter: 'M m', name: 'eme', phonetic: 'EH-meh', example: 'mañana', meaning: 'morning / tomorrow' },
        { id: 'let-n', letter: 'N n', name: 'ene', phonetic: 'EH-neh', example: 'noche', meaning: 'night' },
        { id: 'let-ny', letter: 'Ñ ñ', name: 'eñe', phonetic: 'EH-nyeh', example: 'niño', meaning: 'child / boy' },
        { id: 'let-o', letter: 'O o', name: 'o', phonetic: 'oh', example: 'oficina', meaning: 'office' },
        { id: 'let-p', letter: 'P p', name: 'pe', phonetic: 'peh', example: 'profesor', meaning: 'teacher' },
        { id: 'let-q', letter: 'Q q', name: 'cu', phonetic: 'koo', example: 'queso', meaning: 'cheese' },
        { id: 'let-r', letter: 'R r', name: 'erre', phonetic: 'EH-rreh', example: 'restaurante', meaning: 'restaurant' },
        { id: 'let-s', letter: 'S s', name: 'ese', phonetic: 'EH-seh', example: 'semana', meaning: 'week' },
        { id: 'let-t', letter: 'T t', name: 'te', phonetic: 'teh', example: 'tarde', meaning: 'afternoon' },
        { id: 'let-u', letter: 'U u', name: 'u', phonetic: 'oo', example: 'universidad', meaning: 'university' },
        { id: 'let-v', letter: 'V v', name: 'uve', phonetic: 'OO-beh', example: 'vivir', meaning: 'to live' },
        { id: 'let-w', letter: 'W w', name: 'uve doble', phonetic: 'OO-beh DOH-bleh', example: 'web', meaning: 'web' },
        { id: 'let-x', letter: 'X x', name: 'equis', phonetic: 'EH-kees', example: 'examen', meaning: 'exam' },
        { id: 'let-y', letter: 'Y y', name: 'ye', phonetic: 'yeh', example: 'yo', meaning: 'I' },
        { id: 'let-z', letter: 'Z z', name: 'zeta', phonetic: 'SEH-tah / THEH-tah', example: 'zapato', meaning: 'shoe' }
    ];

    const jobsData = [
        { id: 'job-1', english: 'Shop Assistant', masc: 'dependiente', fem: 'dependienta', icon: 'fa-store' },
        { id: 'job-2', english: 'Chef / Cook', masc: 'cocinero', fem: 'cocinera', icon: 'fa-utensils' },
        { id: 'job-3', english: 'IT Specialist', masc: 'informático', fem: 'informática', icon: 'fa-laptop-code' },
        { id: 'job-4', english: 'Lawyer', masc: 'abogado', fem: 'abogada', icon: 'fa-scale-balanced' },
        { id: 'job-5', english: 'Retired Person', masc: 'jubilado', fem: 'jubilada', icon: 'fa-person-cane' },
        { id: 'job-6', english: 'Teacher / Professor', masc: 'profesor', fem: 'profesora', icon: 'fa-chalkboard-user' },
        { id: 'job-7', english: 'Doctor', masc: 'médico', fem: 'médica', icon: 'fa-stethoscope' },
        { id: 'job-8', english: 'Waiter / Waitress', masc: 'camarero', fem: 'camarera', icon: 'fa-mug-hot' },
        { id: 'job-9', english: 'Nurse', masc: 'enfermero', fem: 'enfermera', icon: 'fa-user-nurse' },
        { id: 'job-10', english: 'Engineer', masc: 'ingeniero', fem: 'ingeniera', icon: 'fa-helmet-safety' },
        { id: 'job-11', english: 'Student', masc: 'estudiante', fem: 'estudiante', icon: 'fa-graduation-cap' },
        { id: 'job-12', english: 'Journalist', masc: 'periodista', fem: 'periodista', icon: 'fa-newspaper' }
    ];

    const verbsData = [
        { id: 'verb-1', spanish: 'desayunar', english: 'to have breakfast', example: 'Desayuno a las siete y media.' },
        { id: 'verb-2', spanish: 'comer', english: 'to eat / have lunch', example: 'Comemos en un restaurante.' },
        { id: 'verb-3', spanish: 'cenar', english: 'to have dinner', example: 'Ceno a las ocho y media.' },
        { id: 'verb-4', spanish: 'merendar', english: 'to have an afternoon snack', example: 'Merendamos con amigos los viernes.' },
        { id: 'verb-5', spanish: 'trabajar', english: 'to work', example: 'Trabajo hasta las seis.' },
        { id: 'verb-6', spanish: 'vivir', english: 'to live', example: 'Vivo en Hong Kong.' }
    ];

    const timeData = [
        { id: 'time-1', spanish: 'por la mañana', english: 'in the morning' },
        { id: 'time-2', spanish: 'a mediodía', english: 'at noon / midday' },
        { id: 'time-3', spanish: 'por la tarde', english: 'in the afternoon' },
        { id: 'time-4', spanish: 'por la noche', english: 'at night / in the evening' },
        { id: 'time-5', spanish: 'los fines de semana', english: 'on weekends' },
        { id: 'time-6', spanish: 'ahora', english: 'now' }
    ];

    const barrioData = [
        { id: 'bar-1', spanish: 'la estación de metro', english: 'subway / metro station', category: 'services', icon: 'fa-train-subway', example: 'Está cerca de la estación de metro.' },
        { id: 'bar-2', spanish: 'el parque', english: 'park', category: 'services', icon: 'fa-tree', example: 'Hay un parque muy grande para hacer ejercicio.' },
        { id: 'bar-3', spanish: 'el cajero automático', english: 'ATM / cash machine', category: 'services', icon: 'fa-money-bill-wave', example: 'Hay un cajero automático en la esquina.' },
        { id: 'bar-4', spanish: 'el colegio / la escuela', english: 'school', category: 'services', icon: 'fa-school', example: 'Hay tres colegios para niños.' },
        { id: 'bar-5', spanish: 'la biblioteca', english: 'library', category: 'services', icon: 'fa-book', example: 'No hay biblioteca para consultar libros.' },
        { id: 'bar-6', spanish: 'el centro comercial', english: 'shopping mall / center', category: 'services', icon: 'fa-bag-shopping', example: 'Vamos al centro comercial para ir de compras.' },
        { id: 'bar-7', spanish: 'la oficina de información', english: 'information office', category: 'services', icon: 'fa-circle-info', example: 'La oficina de información está en el centro.' },
        { id: 'bar-8', spanish: 'la parada de autobús', english: 'bus stop', category: 'services', icon: 'fa-bus', example: 'Hay parada de autobús frente a mi casa.' },
        { id: 'bar-9', spanish: 'el hospital', english: 'hospital', category: 'services', icon: 'fa-hospital', example: 'Hay un centro de salud, pero no hay hospital.' },
        { id: 'bar-10', spanish: 'el cine', english: 'cinema / movie theater', category: 'services', icon: 'fa-film', example: 'Hay un cine con películas actuales.' },
        { id: 'bar-11', spanish: 'el supermercado', english: 'supermarket', category: 'services', icon: 'fa-cart-shopping', example: 'Compro comida en el supermercado.' },
        { id: 'bar-12', spanish: 'el ayuntamiento', english: 'town hall / city hall', category: 'services', icon: 'fa-landmark', example: 'El ayuntamiento está en la Plaza Mayor.' },
        { id: 'bar-13', spanish: 'la tienda', english: 'shop / store', category: 'services', icon: 'fa-store', example: 'Hay pequeñas tiendas de ropa y comida.' },
        { id: 'bar-14', spanish: 'el bar / la terraza', english: 'bar / outdoor café terrace', category: 'services', icon: 'fa-mug-saucer', example: 'Hay terrazas y bares de tapas.' },
        { id: 'bar-15', spanish: 'la farmacia', english: 'pharmacy', category: 'services', icon: 'fa-staff-snake', example: 'Hay tres farmacias en mi barrio.' },
        { id: 'bar-16', spanish: 'el aparcamiento', english: 'parking lot', category: 'services', icon: 'fa-square-parking', example: 'Hay un aparcamiento público.' },
        { id: 'bar-17', spanish: 'el teatro', english: 'theater', category: 'services', icon: 'fa-masks-theater', example: 'En el centro hay muchos teatros.' },
        { id: 'bar-18', spanish: 'el restaurante', english: 'restaurant', category: 'services', icon: 'fa-utensils', example: 'Hay buenos restaurantes en Salamanca.' },
        { id: 'bar-19', spanish: 'el gimnasio', english: 'gym', category: 'services', icon: 'fa-dumbbell', example: 'Voy al gimnasio por la tarde.' },
        { id: 'bar-20', spanish: 'la comisaría', english: 'police station', category: 'services', icon: 'fa-shield-halved', example: 'La comisaría está cerca del parque.' },
        { id: 'bar-21', spanish: 'la estación de bomberos', english: 'fire station', category: 'services', icon: 'fa-fire-extinguisher', example: 'La estación de bomberos es moderna.' },
        { id: 'bar-22', spanish: 'la calle peatonal', english: 'pedestrian street', category: 'services', icon: 'fa-person-walking', example: 'Me gusta pasear por la calle peatonal.' },

        { id: 'bar-23', spanish: 'estrecho / ancho (amplio)', english: 'narrow / wide (spacious)', category: 'adjectives', icon: 'fa-arrows-left-right', example: 'Las calles son estrechas.' },
        { id: 'bar-24', spanish: 'ruidoso / tranquilo', english: 'noisy / quiet & peaceful', category: 'adjectives', icon: 'fa-volume-high', example: 'Es un barrio ruidoso, pero el Retiro es tranquilo.' },
        { id: 'bar-25', spanish: 'barato / caro', english: 'cheap / expensive', category: 'adjectives', icon: 'fa-tags', example: 'Hay cosas baratas y restaurantes caros.' },
        { id: 'bar-26', spanish: 'antiguo / moderno', english: 'old (historic) / modern', category: 'adjectives', icon: 'fa-building-columns', example: 'Hay edificios antiguos y nueva arquitectura.' },
        { id: 'bar-27', spanish: 'bien comunicado', english: 'well-connected (good transport)', category: 'adjectives', icon: 'fa-route', example: 'El barrio está muy bien comunicado.' },
        { id: 'bar-28', spanish: 'el ambiente / la vida nocturna', english: 'atmosphere / nightlife', category: 'adjectives', icon: 'fa-champagne-glasses', example: 'Hay mucho ambiente de día y de noche.' },
        { id: 'bar-29', spanish: 'el mercadillo / de segunda mano', english: 'outdoor market / second-hand', category: 'adjectives', icon: 'fa-shop', example: 'El Rastro es un mercadillo de objetos de segunda mano.' },

        { id: 'bar-30', spanish: 'cerca de / lejos de', english: 'near / far from', category: 'places', icon: 'fa-location-dot', example: 'Está cerca de la Puerta del Sol.' },
        { id: 'bar-31-c', spanish: 'el centro', english: 'center / downtown (Middle)', category: 'places', icon: 'fa-bullseye', example: 'Madrid está en el centro de España.' },
        { id: 'bar-31-n', spanish: 'el norte', english: 'north (Top)', category: 'places', icon: 'fa-arrow-up', example: 'La zona norte es un barrio de negocios.' },
        { id: 'bar-31-s', spanish: 'el sur', english: 'south (Bottom)', category: 'places', icon: 'fa-arrow-down', example: 'Más al sur está el barrio de La Latina.' },
        { id: 'bar-31-e', spanish: 'el este', english: 'east (Right)', category: 'places', icon: 'fa-arrow-right', example: 'En el este está el barrio de Salamanca.' },
        { id: 'bar-31-o', spanish: 'el oeste', english: 'west (Left)', category: 'places', icon: 'fa-arrow-left', example: 'El Parque del Oeste está en el oeste de Madrid.' },
        { id: 'bar-31-ne', spanish: 'el noreste', english: 'northeast (Top-Right)', category: 'places', icon: 'fa-compass', example: 'El aeropuerto está en el noreste de la ciudad.' },
        { id: 'bar-31-no', spanish: 'el noroeste', english: 'northwest (Top-Left)', category: 'places', icon: 'fa-compass', example: 'La universidad está en el noroeste.' },
        { id: 'bar-31-se', spanish: 'el sureste', english: 'southeast (Bottom-Right)', category: 'places', icon: 'fa-compass', example: 'Hay un barrio moderno en el sureste.' },
        { id: 'bar-31-so', spanish: 'el suroeste', english: 'southwest (Bottom-Left)', category: 'places', icon: 'fa-compass', example: 'La Casa de Campo está en el suroeste.' },
        { id: 'bar-32', spanish: 'el centro histórico', english: 'historic center', category: 'places', icon: 'fa-monument', example: 'El centro histórico es muy turístico.' },
        { id: 'bar-33', spanish: 'el barrio residencial', english: 'residential neighborhood', category: 'places', icon: 'fa-house-chimney', example: 'El Retiro es un barrio residencial y elegante.' },
        { id: 'bar-34', spanish: 'el barrio de negocios / financiero', english: 'business / financial district', category: 'places', icon: 'fa-briefcase', example: 'La zona norte es un barrio de negocios.' },
        { id: 'bar-35', spanish: 'el barrio comercial', english: 'shopping district', category: 'places', icon: 'fa-store', example: 'Me interesa el barrio comercial para ir de compras.' },
        { id: 'bar-36', spanish: 'a las afueras', english: 'on the outskirts / suburbs', category: 'places', icon: 'fa-tree-city', example: 'Prefiero vivir en un barrio a las afueras.' }
    ];

    // --- PERSISTENT PREFERENCES & APP STATE ---
    const savedPrefs = JSON.parse(localStorage.getItem('hablaSpanishPrefs') || '{}');

    const state = {
        activeTab: 'numbers',
        speechRate: savedPrefs.speechRate || 0.7,
        preferredVoiceName: savedPrefs.voiceName || '',
        spanishVoices: [],
        selectedVoice: null,
        isPlayingAll: false,
        alphabetPlayMode: 'examples',
        playAllIndex: 0,
        playAllTimeout: null,
        speechTimeout: null,
        currentNumberFilter: 'all',
        currentBarrioFilter: 'all',
        quizScore: savedPrefs.quizScore || 0,
        quizTotal: savedPrefs.quizTotal || 0,
        quizStreak: savedPrefs.quizStreak || 0,
        quizCategory: 'all',
        currentQuizItem: null,
        currentQuizOptions: [],
        quizAnswered: false,
        isReadingCustom: false
    };

    function savePrefs() {
        localStorage.setItem('hablaSpanishPrefs', JSON.stringify({
            speechRate: state.speechRate,
            voiceName: state.selectedVoice ? state.selectedVoice.name : '',
            quizScore: state.quizScore,
            quizTotal: state.quizTotal,
            quizStreak: state.quizStreak
        }));
    }

    // Helper for safe HTML escaping
    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // --- SPEECH SYNTHESIS ---
    function initVoices() {
        if (!('speechSynthesis' in window)) {
            document.getElementById('tts-warning')?.classList.remove('hidden');
            return;
        }

        const load = () => {
            const allVoices = window.speechSynthesis.getVoices();
            state.spanishVoices = allVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith('es'));
            const select = document.getElementById('voice-select');
            if (!select) return;

            if (state.spanishVoices.length > 0) {
                state.spanishVoices.sort((a, b) => {
                    const score = v => (v.name.includes('Google') ? 3 : 0) +
                                       (v.name.includes('Monica') || v.name.includes('Paulina') || v.name.includes('Jorge') ? 2 : 0) +
                                       (v.lang.includes('ES') ? 1 : 0);
                    return score(b) - score(a);
                });

                select.innerHTML = state.spanishVoices
                    .map((v, idx) => `<option value="${idx}">${escapeHtml(v.name)} (${escapeHtml(v.lang)})</option>`)
                    .join('');

                const savedIdx = state.spanishVoices.findIndex(v => v.name === state.preferredVoiceName);
                const chosenIdx = savedIdx >= 0 ? savedIdx : 0;
                select.value = String(chosenIdx);
                state.selectedVoice = state.spanishVoices[chosenIdx];
            } else {
                select.innerHTML = `<option value="">Default Spanish (es-ES)</option>`;
            }
        };

        load();
        window.speechSynthesis.onvoiceschanged = load;
    }

    function setSpeed(rate) {
        state.speechRate = rate;
        savePrefs();
        document.querySelectorAll('.speed-btn').forEach(btn => {
            btn.classList.toggle('active-speed', parseFloat(btn.dataset.speed) === rate);
        });
    }

    function speakText(text, onEndCallback = null, overrideRate = null) {
        if (!('speechSynthesis' in window)) {
            if (onEndCallback) onEndCallback();
            return;
        }

        window.speechSynthesis.cancel();
        clearTimeout(state.speechTimeout);

        state.speechTimeout = setTimeout(() => {
            const cleanText = text.trim().length <= 2 ? `${text.trim()}.` : text.trim();
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = state.selectedVoice ? state.selectedVoice.lang : 'es-ES';
            if (state.selectedVoice) utterance.voice = state.selectedVoice;
            utterance.rate = overrideRate !== null ? overrideRate : state.speechRate;
            utterance.pitch = 1.0;

            utterance.onend = () => { if (onEndCallback) onEndCallback(); };
            utterance.onerror = () => { if (onEndCallback) onEndCallback(); };

            window.speechSynthesis.speak(utterance);
        }, 50);
    }

    function highlightCard(cardId) {
        document.querySelectorAll('.active-audio-card').forEach(el => {
            el.classList.remove('active-audio-card');
        });
        if (cardId) {
            document.getElementById(cardId)?.classList.add('active-audio-card');
        }
    }

    function playSingleItem(text, cardId) {
        stopPlayAll();
        stopCustomParagraph();
        highlightCard(cardId);
        speakText(text, () => highlightCard(null));
    }

    // --- NAVIGATION ---
    function switchTab(tabName) {
        stopPlayAll();
        stopCustomParagraph();
        state.activeTab = tabName;

        document.querySelectorAll('.tab-view').forEach(view => {
            view.classList.toggle('hidden', view.id !== `view-${tabName}`);
        });

        document.querySelectorAll('.nav-tab').forEach(btn => {
            btn.classList.toggle('active-tab', btn.dataset.tab === tabName);
        });

        const playAllBtn = document.getElementById('play-all-btn');
        if (playAllBtn) {
            playAllBtn.classList.toggle('hidden', tabName === 'quiz' || tabName === 'reader');
        }

        if (tabName === 'quiz' && !state.currentQuizItem) {
            initQuizQuestion();
        }
    }

    // --- CUSTOM PARAGRAPH READER ---
    function readCustomParagraph() {
        const input = document.getElementById('custom-spanish-input');
        const status = document.getElementById('reader-status');
        const statusText = document.getElementById('reader-status-text');
        if (!input || !input.value.trim()) return;

        stopPlayAll();
        stopCustomParagraph();

        const sentences = input.value
            .trim()
            .match(/[^.!?]+[.!?]*/g)
            ?.map(s => s.trim())
            .filter(Boolean) || [input.value.trim()];

        state.isReadingCustom = true;
        status?.classList.remove('hidden');

        let idx = 0;
        const speakNextSentence = () => {
            if (!state.isReadingCustom || idx >= sentences.length) {
                stopCustomParagraph();
                return;
            }
            if (statusText) {
                statusText.textContent = `Reading sentence ${idx + 1} of ${sentences.length}...`;
            }
            speakText(sentences[idx], () => {
                idx++;
                setTimeout(speakNextSentence, 250);
            });
        };
        speakNextSentence();
    }

    function stopCustomParagraph() {
        state.isReadingCustom = false;
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        document.getElementById('reader-status')?.classList.add('hidden');
    }

    // --- PLAY ALL SEQUENCE ---
    function getActivePlaylist() {
        if (state.activeTab === 'numbers') {
            const filtered = state.currentNumberFilter === 'all'
                ? numbersData
                : numbersData.filter(n => n.group === state.currentNumberFilter);
            return filtered.map(n => ({ id: n.id, text: n.spanish }));
        }
        if (state.activeTab === 'alphabet') {
            return state.alphabetPlayMode === 'letters'
                ? alphabetData.map(a => ({ id: a.id, text: a.name }))
                : alphabetData.map(a => ({ id: a.id, text: `${a.name}... ${a.example}` }));
        }
        if (state.activeTab === 'jobs') {
            return jobsData.map(j => ({
                id: j.id,
                text: j.masc === j.fem ? j.masc : `${j.masc}, ${j.fem}`
            }));
        }
        if (state.activeTab === 'routines') {
            return [
                ...verbsData.map(v => ({ id: v.id, text: `${v.spanish}. ${v.example}` })),
                ...timeData.map(t => ({ id: t.id, text: t.spanish }))
            ];
        }
        if (state.activeTab === 'barrio') {
            const filtered = state.currentBarrioFilter === 'all'
                ? barrioData
                : barrioData.filter(b => b.category === state.currentBarrioFilter);
            return filtered.map(b => ({ id: b.id, text: b.spanish.replace(/\//g, ', ') }));
        }
        return [];
    }

    function updatePlayAllUI(playing) {
        const btn = document.getElementById('play-all-btn');
        const icon = document.getElementById('play-all-icon');
        const text = document.getElementById('play-all-text');

        const lettersBtn = document.getElementById('play-alphabet-letters-btn');
        const lettersIcon = document.getElementById('play-alphabet-letters-icon');
        const lettersText = document.getElementById('play-alphabet-letters-text');

        const examplesBtn = document.getElementById('play-alphabet-examples-btn');
        const examplesIcon = document.getElementById('play-alphabet-examples-icon');
        const examplesText = document.getElementById('play-alphabet-examples-text');

        if (playing) {
            if (btn) btn.className = 'bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded-xl shadow-sm transition-all flex items-center gap-2 active:scale-95';
            if (icon) icon.className = 'fa-solid fa-circle-stop';
            if (text) text.textContent = 'Stop Playback';

            if (state.activeTab === 'alphabet' && state.alphabetPlayMode === 'letters') {
                if (lettersBtn) lettersBtn.className = 'bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95';
                if (lettersIcon) lettersIcon.className = 'fa-solid fa-circle-stop';
                if (lettersText) lettersText.textContent = 'Stop Letters';
            } else if (state.activeTab === 'alphabet' && state.alphabetPlayMode === 'examples') {
                if (examplesBtn) examplesBtn.className = 'bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95';
                if (examplesIcon) examplesIcon.className = 'fa-solid fa-circle-stop';
                if (examplesText) examplesText.textContent = 'Stop All';
            }
        } else {
            if (btn) btn.className = 'bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded-xl shadow-sm transition-all flex items-center gap-2 active:scale-95';
            if (icon) icon.className = 'fa-solid fa-circle-play';
            if (text) text.textContent = 'Play Section Slowly';

            if (lettersBtn) lettersBtn.className = 'bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95';
            if (lettersIcon) lettersIcon.className = 'fa-solid fa-circle-play';
            if (lettersText) lettersText.textContent = 'Letters Only (A–Z)';

            if (examplesBtn) examplesBtn.className = 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95';
            if (examplesIcon) examplesIcon.className = 'fa-solid fa-circle-play';
            if (examplesText) examplesText.textContent = 'Letters + Examples';
        }
    }

    function startSequence() {
        const list = getActivePlaylist();
        if (list.length === 0) return;
        state.isPlayingAll = true;
        state.playAllIndex = 0;
        updatePlayAllUI(true);
        playNextInSequence(list);
    }

    function playNextInSequence(list) {
        if (!state.isPlayingAll || state.playAllIndex >= list.length) {
            stopPlayAll();
            return;
        }
        const item = list[state.playAllIndex];
        highlightCard(item.id);
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        speakText(item.text, () => {
            if (!state.isPlayingAll) return;
            state.playAllIndex++;
            state.playAllTimeout = setTimeout(() => playNextInSequence(list), 450);
        });
    }

    function stopPlayAll() {
        state.isPlayingAll = false;
        clearTimeout(state.playAllTimeout);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        highlightCard(null);
        updatePlayAllUI(false);
    }

    // --- RENDERING ---
    function renderNumbers() {
        const grid = document.getElementById('numbers-grid');
        if (!grid) return;
        const list = state.currentNumberFilter === 'all'
            ? numbersData
            : numbersData.filter(n => n.group === state.currentNumberFilter);

        grid.innerHTML = list.map(item => `
            <button id="${item.id}" data-speak="${escapeHtml(item.spanish)}" data-card="${item.id}"
                class="speak-trigger bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-4 text-left transition-all shadow-sm hover:shadow flex flex-col justify-between group">
                <div class="flex items-center justify-between w-full mb-2">
                    <span class="text-2xl font-extrabold text-amber-600">${escapeHtml(item.english)}</span>
                    <span class="w-8 h-8 rounded-full bg-amber-50 group-hover:bg-amber-500 text-amber-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                    </span>
                </div>
                <div>
                    <div class="text-base font-bold text-slate-800">${escapeHtml(item.spanish)}</div>
                    <div class="text-[11px] font-medium text-slate-400 mt-0.5">/${escapeHtml(item.phonetic)}/</div>
                </div>
            </button>
        `).join('');
    }

    function renderAlphabet() {
        const grid = document.getElementById('alphabet-grid');
        if (!grid) return;

        grid.innerHTML = alphabetData.map(item => `
            <button id="${item.id}" data-speak="${escapeHtml(`${item.name}... ${item.example}`)}" data-card="${item.id}"
                class="speak-trigger bg-white border border-slate-200 hover:border-purple-400 rounded-2xl p-4 text-left transition-all shadow-sm hover:shadow flex flex-col justify-between group">
                <div class="flex items-center justify-between w-full mb-2">
                    <span class="text-2xl font-extrabold text-purple-600">${escapeHtml(item.letter)}</span>
                    <span class="w-8 h-8 rounded-full bg-purple-50 group-hover:bg-purple-600 text-purple-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                    </span>
                </div>
                <div>
                    <div class="text-sm font-bold text-slate-800">"${escapeHtml(item.name)}" <span class="text-[11px] font-normal text-slate-400">(${escapeHtml(item.phonetic)})</span></div>
                    <div class="text-xs text-slate-600 mt-1.5 pt-1.5 border-t border-slate-100">
                        <span class="font-semibold text-purple-700">${escapeHtml(item.example)}</span> — ${escapeHtml(item.meaning)}
                    </div>
                </div>
            </button>
        `).join('');
    }

    function renderJobs() {
        const grid = document.getElementById('jobs-grid');
        if (!grid) return;

        grid.innerHTML = jobsData.map(item => {
            const isSame = item.masc === item.fem;
            return `
            <div id="${item.id}" class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm transition-all flex flex-col justify-between">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-base shrink-0">
                        <i class="fa-solid ${item.icon}"></i>
                    </div>
                    <div>
                        <h3 class="text-sm font-bold text-slate-800">${escapeHtml(item.english)}</h3>
                        <p class="text-[11px] text-slate-400">${isSame ? 'Invariable form' : 'Masculine / Feminine'}</p>
                    </div>
                </div>
                <div class="flex flex-col gap-1.5">
                    ${isSame ? `
                        <button data-speak="${escapeHtml(`el ${item.masc}, la ${item.fem}`)}" data-card="${item.id}"
                            class="speak-trigger w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-300 text-left flex items-center justify-between text-xs font-semibold text-slate-700 transition-colors">
                            <span>el / la <strong>${escapeHtml(item.masc)}</strong></span>
                            <i class="fa-solid fa-volume-high text-blue-500"></i>
                        </button>
                    ` : `
                        <button data-speak="${escapeHtml(`el ${item.masc}`)}" data-card="${item.id}"
                            class="speak-trigger w-full py-1.5 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-300 text-left flex items-center justify-between text-xs font-semibold text-slate-700 transition-colors">
                            <span><span class="text-blue-600 font-bold">♂</span> el <strong>${escapeHtml(item.masc)}</strong></span>
                            <i class="fa-solid fa-volume-high text-blue-500"></i>
                        </button>
                        <button data-speak="${escapeHtml(`la ${item.fem}`)}" data-card="${item.id}"
                            class="speak-trigger w-full py-1.5 px-3 rounded-xl bg-slate-50 hover:bg-pink-50 border border-slate-200/80 hover:border-pink-300 text-left flex items-center justify-between text-xs font-semibold text-slate-700 transition-colors">
                            <span><span class="text-pink-600 font-bold">♀</span> la <strong>${escapeHtml(item.fem)}</strong></span>
                            <i class="fa-solid fa-volume-high text-pink-500"></i>
                        </button>
                    `}
                </div>
            </div>
            `;
        }).join('');
    }

    function renderRoutines() {
        const verbsGrid = document.getElementById('verbs-grid');
        const timeGrid = document.getElementById('time-grid');

        if (verbsGrid) {
            verbsGrid.innerHTML = verbsData.map(item => `
                <button id="${item.id}" data-speak="${escapeHtml(`${item.spanish}. ${item.example}`)}" data-card="${item.id}"
                    class="speak-trigger bg-white border border-slate-200 hover:border-emerald-400 rounded-2xl p-4 text-left transition-all shadow-sm hover:shadow flex flex-col justify-between group">
                    <div class="flex items-start justify-between w-full mb-2">
                        <div>
                            <div class="text-base font-extrabold text-emerald-700">${escapeHtml(item.spanish)}</div>
                            <div class="text-xs font-medium text-slate-500">${escapeHtml(item.english)}</div>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-emerald-50 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                            <i class="fa-solid fa-volume-high text-xs"></i>
                        </span>
                    </div>
                    <div class="text-xs text-slate-600 bg-slate-50 rounded-xl p-2.5 mt-2 border border-slate-100">
                        "${escapeHtml(item.example)}"
                    </div>
                </button>
            `).join('');
        }

        if (timeGrid) {
            timeGrid.innerHTML = timeData.map(item => `
                <button id="${item.id}" data-speak="${escapeHtml(item.spanish)}" data-card="${item.id}"
                    class="speak-trigger bg-white border border-slate-200 hover:border-emerald-400 rounded-2xl p-3.5 text-left transition-all shadow-sm hover:shadow flex items-center justify-between group">
                    <div>
                        <div class="text-sm font-bold text-slate-800">${escapeHtml(item.spanish)}</div>
                        <div class="text-xs text-slate-500">${escapeHtml(item.english)}</div>
                    </div>
                    <span class="w-8 h-8 rounded-full bg-emerald-50 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                    </span>
                </button>
            `).join('');
        }
    }

    function renderBarrio() {
        const grid = document.getElementById('barrio-grid');
        if (!grid) return;

        const list = state.currentBarrioFilter === 'all'
            ? barrioData
            : barrioData.filter(b => b.category === state.currentBarrioFilter);

        grid.innerHTML = list.map(item => {
            const speakPhrase = item.spanish.replace(/\//g, ', ');
            return `
            <div id="${item.id}" class="bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl p-4 shadow-sm hover:shadow transition-all flex flex-col justify-between">
                <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                        <div class="flex items-center gap-2.5">
                            <div class="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm shrink-0">
                                <i class="fa-solid ${item.icon}"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-extrabold text-slate-800 leading-snug">${escapeHtml(item.spanish)}</h3>
                                <p class="text-xs font-medium text-indigo-600">${escapeHtml(item.english)}</p>
                            </div>
                        </div>
                        <button data-speak="${escapeHtml(speakPhrase)}" data-card="${item.id}" title="Listen to word"
                            class="speak-trigger w-8 h-8 rounded-full bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white flex items-center justify-center transition-colors shrink-0">
                            <i class="fa-solid fa-volume-high text-xs"></i>
                        </button>
                    </div>
                </div>
                <button data-speak="${escapeHtml(item.example)}" data-card="${item.id}"
                    class="speak-trigger mt-2.5 w-full text-left text-xs text-slate-600 bg-slate-50 hover:bg-indigo-50/60 rounded-xl p-2.5 border border-slate-100 flex items-center justify-between gap-2 transition-colors">
                    <span>"${escapeHtml(item.example)}"</span>
                    <i class="fa-solid fa-play text-[10px] text-indigo-400 shrink-0"></i>
                </button>
            </div>
            `;
        }).join('');
    }

    // --- QUIZ LOGIC (Fisher-Yates Shuffle) ---
    function shuffleArray(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function getQuizPool() {
        const pools = {
            numbers: numbersData.map(n => ({ speak: n.spanish, label: `${n.english} (${n.spanish})` })),
            alphabet: alphabetData.map(a => ({ speak: `${a.name}... ${a.example}`, label: `Letter ${a.letter} ("${a.name}")` })),
            jobs: jobsData.map(j => ({ speak: j.masc === j.fem ? `el ${j.masc}` : `el ${j.masc}, la ${j.fem}`, label: `${j.english} (${j.masc})` })),
            routines: [
                ...verbsData.map(v => ({ speak: v.spanish, label: `${v.english} (${v.spanish})` })),
                ...timeData.map(t => ({ speak: t.spanish, label: `${t.english} (${t.spanish})` }))
            ],
            barrio: barrioData.map(b => ({ speak: b.spanish.replace(/\//g, ', '), label: `${b.english} (${b.spanish})` }))
        };

        return state.quizCategory === 'all'
            ? Object.values(pools).flat()
            : pools[state.quizCategory] || [];
    }

    function initQuizQuestion() {
        state.quizAnswered = false;
        document.getElementById('quiz-feedback')?.classList.add('hidden');
        document.getElementById('next-question-btn')?.classList.add('hidden');

        const shuffled = shuffleArray(getQuizPool());
        state.currentQuizItem = shuffled[0];
        state.currentQuizOptions = shuffleArray([state.currentQuizItem, ...shuffled.slice(1, 4)]);

        const optionsContainer = document.getElementById('quiz-options');
        if (optionsContainer) {
            optionsContainer.innerHTML = state.currentQuizOptions.map((opt, idx) => `
                <button data-opt-idx="${idx}"
                    class="quiz-opt-btn p-3.5 rounded-2xl border-2 border-slate-200 hover:border-amber-400 bg-white text-left text-xs sm:text-sm font-semibold text-slate-700 transition-all">
                    <span class="inline-block w-5 h-5 mr-1.5 text-center rounded bg-slate-100 text-[11px] text-slate-500 font-bold">${idx + 1}</span>
                    ${escapeHtml(opt.label)}
                </button>
            `).join('');
        }

        playQuizAudio();
    }

    function playQuizAudio(customRate = null) {
        if (!state.currentQuizItem) return;
        speakText(state.currentQuizItem.speak, null, customRate !== null ? customRate : 0.75);
    }

    function checkQuizAnswer(selectedIdx) {
        if (state.quizAnswered || !state.currentQuizItem) return;
        state.quizAnswered = true;
        state.quizTotal++;

        const chosenOpt = state.currentQuizOptions[selectedIdx];
        const isCorrect = chosenOpt && chosenOpt.label === state.currentQuizItem.label;
        const feedback = document.getElementById('quiz-feedback');
        const nextBtn = document.getElementById('next-question-btn');

        document.querySelectorAll('.quiz-opt-btn').forEach((btn, idx) => {
            btn.disabled = true;
            const opt = state.currentQuizOptions[idx];
            if (opt.label === state.currentQuizItem.label) {
                btn.className = 'quiz-opt-btn p-3.5 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-left text-xs sm:text-sm font-bold text-emerald-800';
            } else if (idx === selectedIdx && !isCorrect) {
                btn.className = 'quiz-opt-btn p-3.5 rounded-2xl border-2 border-rose-500 bg-rose-50 text-left text-xs sm:text-sm font-bold text-rose-800';
            }
        });

        if (isCorrect) {
            state.quizScore++;
            state.quizStreak++;
            if (feedback) {
                feedback.className = 'mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center';
                feedback.innerHTML = `<i class="fa-solid fa-circle-check mr-1"></i> ¡Correcto! It was <strong>${escapeHtml(state.currentQuizItem.label)}</strong>.`;
            }
        } else {
            state.quizStreak = 0;
            if (feedback) {
                feedback.className = 'mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold text-center';
                feedback.innerHTML = `<i class="fa-solid fa-circle-xmark mr-1"></i> Not quite! The correct answer was <strong>${escapeHtml(state.currentQuizItem.label)}</strong>.`;
            }
        }

        updateQuizStatsUI();
        savePrefs();
        nextBtn?.classList.remove('hidden');
    }

    function updateQuizStatsUI() {
        document.getElementById('quiz-score').textContent = `${state.quizScore} / ${state.quizTotal}`;
        document.getElementById('quiz-streak').textContent = `${state.quizStreak} 🔥`;
    }

    // --- EVENT LISTENERS ---
    function bindEvents() {
        // Delegated click handler for dynamically rendered cards & quiz options
        document.addEventListener('click', (e) => {
            const speakBtn = e.target.closest('.speak-trigger');
            if (speakBtn) {
                playSingleItem(speakBtn.dataset.speak, speakBtn.dataset.card);
                return;
            }

            const quizOpt = e.target.closest('.quiz-opt-btn');
            if (quizOpt) {
                checkQuizAnswer(parseInt(quizOpt.dataset.optIdx, 10));
            }
        });

        // Navigation Tabs
        document.getElementById('main-nav')?.addEventListener('click', (e) => {
            const tabBtn = e.target.closest('.nav-tab');
            if (tabBtn) switchTab(tabBtn.dataset.tab);
        });

        // Speed Controls
        document.getElementById('speed-controls')?.addEventListener('click', (e) => {
            const speedBtn = e.target.closest('.speed-btn');
            if (speedBtn) setSpeed(parseFloat(speedBtn.dataset.speed));
        });

        // Voice Selection
        document.getElementById('voice-select')?.addEventListener('change', (e) => {
            const idx = parseInt(e.target.value, 10);
            state.selectedVoice = state.spanishVoices[idx] || state.spanishVoices[0];
            savePrefs();
        });

        // Play All Header Button
        document.getElementById('play-all-btn')?.addEventListener('click', () => {
            if (state.isPlayingAll) {
                stopPlayAll();
            } else {
                if (state.activeTab === 'alphabet') state.alphabetPlayMode = 'examples';
                startSequence();
            }
        });

        // Alphabet Mode Buttons
        document.querySelectorAll('[data-alpha-mode]').forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.alphaMode;
                if (state.isPlayingAll && state.alphabetPlayMode === mode) {
                    stopPlayAll();
                    return;
                }
                stopPlayAll();
                state.alphabetPlayMode = mode;
                startSequence();
            });
        });

        // Number Filters
        document.getElementById('number-filters')?.addEventListener('click', (e) => {
            const btn = e.target.closest('.num-filter-btn');
            if (!btn) return;
            stopPlayAll();
            state.currentNumberFilter = btn.dataset.numFilter;
            document.querySelectorAll('.num-filter-btn').forEach(b => b.classList.remove('active-amber-filter'));
            btn.classList.add('active-amber-filter');
            renderNumbers();
        });

        // Barrio Filters
        document.getElementById('barrio-filters')?.addEventListener('click', (e) => {
            const btn = e.target.closest('.barrio-filter-btn');
            if (!btn) return;
            stopPlayAll();
            state.currentBarrioFilter = btn.dataset.barrioFilter;
            document.querySelectorAll('.barrio-filter-btn').forEach(b => b.classList.remove('active-indigo-filter'));
            btn.classList.add('active-indigo-filter');
            renderBarrio();
        });

        // Custom Text Reader Controls
        document.getElementById('sample-text-btn')?.addEventListener('click', () => {
            const input = document.getElementById('custom-spanish-input');
            if (input) {
                input.value = 'Hola, vivo en un barrio muy tranquilo y bien comunicado. Cerca de mi casa hay un parque grande, una estación de metro y varios restaurantes. Por la mañana desayuno a las ocho y voy a trabajar.';
            }
        });
        document.getElementById('clear-text-btn')?.addEventListener('click', () => {
            stopCustomParagraph();
            const input = document.getElementById('custom-spanish-input');
            if (input) input.value = '';
        });
        document.getElementById('read-paragraph-btn')?.addEventListener('click', readCustomParagraph);
        document.getElementById('stop-paragraph-btn')?.addEventListener('click', stopCustomParagraph);

        // Quiz Controls & Keyboard Shortcuts
        document.getElementById('quiz-categories')?.addEventListener('click', (e) => {
            const btn = e.target.closest('.qcat-btn');
            if (!btn) return;
            state.quizCategory = btn.dataset.qcat;
            document.querySelectorAll('.qcat-btn').forEach(b => b.classList.remove('active-amber-filter'));
            btn.classList.add('active-amber-filter');
            initQuizQuestion();
        });
        document.getElementById('quiz-play-btn')?.addEventListener('click', () => playQuizAudio());
        document.getElementById('quiz-slow-btn')?.addEventListener('click', () => playQuizAudio(0.45));
        document.getElementById('next-question-btn')?.addEventListener('click', initQuizQuestion);

        document.addEventListener('keydown', (e) => {
            if (state.activeTab !== 'quiz') return;
            if (['1', '2', '3', '4'].includes(e.key) && !state.quizAnswered) {
                checkQuizAnswer(parseInt(e.key, 10) - 1);
            } else if (e.key === 'Enter' && state.quizAnswered) {
                initQuizQuestion();
            }
        });
    }

    // --- INITIALIZATION ---
    function initApp() {
        initVoices();
        setSpeed(state.speechRate);
        updateQuizStatsUI();
        renderNumbers();
        renderAlphabet();
        renderJobs();
        renderRoutines();
        renderBarrio();
        bindEvents();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();