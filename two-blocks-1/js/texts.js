var texts=[{name:"shuffler_booster_hint",ru:"Нажми, на любой блок для перетасовки всех блоков",en:"Click on any block to shuffle all of the blocks.",de:"Klicke auf einen Block, um alle Blöcke zu mischen.",es:"Haz clic en cualquier bloque para barajar todos los bloques",fr:"Clique sur un bloc pour mélanger tous les blocs",it:"Clicca su un blocco qualsiasi per mischiarli tutti",pt:"Clique em qualquer bloco para embaralhar todos os blocos",tr:"Tüm blokları karıştırmak için herhangi bir bloğun üzerine tıkla",nl:"Klik op een blok om alle blokken door elkaar te schudden",pl:"Kliknij dowolny kwadrat, aby przesunąć wszystkie kwadraty"},{name:"eraser_booster_hint",ru:"Нажми на любой блок для уго удаления",en:"Click on any block to erase it.",de:"Klicke auf einen Block, um ihn zu löschen.",es:"Haz clic en cualquier bloque para borrarlo",fr:"Clique sur un bloc pour l'effacer",it:"Clicca su un blocco qualsiasi per cancellarlo",pt:"Clique em qualquer bloco para apagá-lo",tr:"Silmek istediğin bloğun üzerine tıkla",nl:"Klik op een blok om deze te wissen",pl:"Kliknij na dowolny kwadrat, aby go usunąć"},{name:"magicTool_booster_hint",ru:"Нажми на любой блок для удаления всех блоков такого же цвета",en:"Click on any block to erase all blocks of the same color.",de:"Klicke auf einen Block, um alle Blöcke der gleichen Farbe zu löschen.",es:"Haz clic en cualquier bloque para borrar todos los bloques del mismo color",fr:"Clique sur un bloc pour effacer tous les blocs de la même couleur",it:"Clicca su un blocco qualsiasi per cancellare tutti i blocchi dello stesso colore",pt:"Clique em qualquer bloco para apagar todos os blocos da mesma cor",tr:"Aynı renkten tüm blokları silmek için herhangi bir bloğun üzerine tıkla",nl:"Klik op een blok om alle blokken met dezelfde kleur te wissen",pl:"Kliknij na dowolny kwadrat, aby usunąć wszystkie kwadraty tego samego koloru"},{name:"shuffler_booster_explanation",ru:"Перетасовывает все блоки",en:"Shuffles all blocks.",de:"Mischt alle Blöcke",es:"Baraja todos los bloques",fr:"Mélange tous les blocs",it:"Mischia tutti i blocchi",pt:"Embaralha todos os blocos",tr:"Tüm blokları karıştırır",nl:"Schud alle blokken door elkaar",pl:"Przesuwa wszystkie kwadraty"},{name:"eraser_booster_explanation",ru:"Удаляет один блок",en:"Erases one block.",de:"Löscht einen Block",es:"Borra un bloque",fr:"Efface un bloc",it:"Cancella un blocco",pt:"Apaga um bloco",tr:"Bir bloğu siler",nl:"Wist één blok",pl:"Usuń jeden kwadrat"},{name:"magicTool_booster_explanation",ru:"Удаляет все блоки одно цвета",en:"Clears all blocks of the same color.",de:"Beseitigt alle Blöcke der gleichen Farbe",es:"Borra todos los bloques del mismo color",fr:"Élimine tous les blocs de la même couleur",it:"Elimina tutti i blocchi dello stesso colore",pt:"Elimina todos os blocos da mesma cor",tr:"Aynı renkten tüm blokları temizler",nl:"Wist alle blokken met dezelfde kleur",pl:"Usuwa wszystkie kwadraty tego samego koloru"},{name:"watch_video",ru:"Посомтреть рекламу",en:"Watch an ad.",de:"Sieh Dir die Werbung an",es:"Ve un anuncio",fr:"Regardez une pub",it:"Guarda un video pubblicitario",pt:"Ver um comercial",tr:"Bir reklam izleyerek",nl:"Bekijk een advertentie",pl:"Obejrzyj reklamę,"},{name:"use_n_cons",ru:"Использовать %num_coins% монет",en:"Use %num_coins% coins.",de:"Benutze %num_coins% Münzen",es:"Usar %num_coins% monedas",fr:"Coûte %num_coins% pièces",it:"Utilizza %num_coins% monete",pt:"Utilizar %num_coins% moedas",tr:"%num_coins% para kullan",nl:"Gebruik %num_coins% munten",pl:"Wykorzystaj %num_coins% monet"},{name:"use_coins",ru:"Испотдьзовать монеты",en:"Use coins",de:"Münzen benutzen",es:"¡Usa monedas",fr:"Utiliser des pièces",it:"Utilizza le monete",pt:"Utilizar moedas",tr:"Paraları kullan",nl:"Gebruik munten",pl:"Wykorzystaj monety"},{name:"score",ru:"счет",en:"Score",de:"Punktzahl",es:"Puntuación",fr:"Score",it:"Punteggio",pt:"Pontuação",tr:"Puan",nl:"Score",pl:"Wynik"},{name:"moves",ru:"ходы",en:"Moves",de:"ZÜGE",es:"movimientos",fr:"DÉPLACEMENTS",it:"MOSSE",pt:"JOGADAS",tr:"HAMLELER",nl:"moves",pl:"ruchach"},{name:"coins",ru:"монеты",en:"Coins",de:"Münzen",es:"monedas",fr:"Pièces",it:"Monete",pt:"Moedas",tr:"Jeton",nl:"Munten",pl:"Monety"},{name:"in_n_moves",ru:"За %02d ходов",en:"in %02d moves",de:"in %02d Spielzügen",es:"en %02d movimientos",fr:"en %02d mouvements",it:"in %02d mosse",pt:"em %02d movimentos",tr:"%02d hamlede",nl:"met %02d moves",pl:"w %02d ruchach"},{name:"you_received",ru:"Вы получили",en:"You received",de:"Du erhältst",es:"Has recibido",fr:"Tu as reçu",it:"Hai ricevuto",pt:"Recebeu",tr:"Aldın:",nl:"Je ontving",pl:"Otrzymano"},{name:"level_n",ru:"Уровень %02d",en:"Level %02d",de:"Level %02d",es:"Nivel %02d",fr:"Niveau %02d",it:"Livello %02d",pt:"Nível %02d",tr:"Seviye %02d",nl:"Level %02d",pl:"Poziom %02d"},{name:"level_n_failed",ru:"Уровень %02d потрачен",en:"Level %02d failed!",de:"Level %02d fehlgeschlagen",es:"Nivel %02d no superado",fr:"Niveau %02d échoué",it:"Livello %02d non completato",pt:"O nível %02d falhou",tr:"Seviye %02d başarısız oldu",nl:"Level %02d mislukte",pl:"Nie ukończono poziomu %02d"},{name:"game_over",ru:"Игра окончена",en:"Game Over",de:"Game Over",es:"Se acabó el juego",fr:"Fin",it:"Gioco terminato",pt:"Fim do Jogo",tr:"Oyun Bitti",nl:"Spel afgelopen",pl:"Koniec gry"},{name:"and_get_more_gift",ru:"и получай больше подарков",en:"and get more gifts!",de:"und erhalte mehr Geschenke!",es:"y obtén más regalos!",fr:"et reçois plus de cadeaux !",it:"e ricevi un altro regalo!",pt:"e obter mais presentes!",tr:"ve daha fazla hediye al!",nl:"en krijg nog een cadeau!",pl:"i otrzymać więcej prezentów!"},{name:"come_back_tomorrow",ru:"возвращайся завтра",en:"Come back tomorrow",de:"Komm morgen wieder!",es:"¡Vuelve mañana!",fr:"Revenez demain !",it:"Torna domani!",pt:"Volte amanhã!",tr:"Yarın yine bekleriz!",nl:"Kom morgen terug!",pl:"Wróć jutro!"},{name:"objectives",ru:"Цель:",en:"Objectives:",de:"Ziel:",es:"Meta:",fr:"Objectif :",it:"Obiettivo:",pt:"Objetivo:",tr:"Hedef:",nl:"Doel:",pl:"Cel:"},{name:"watch_video_to_unpack",ru:"Посмотри видео для его распаковки",en:"Watch the video to unpack it.",de:"Sieh dir das Video an, um es auszupacken.",es:"Mira el vídeo para desenvolverlo",fr:"Regarde la vidéo pour le recevoir",it:"Guarda il video per scartarlo",pt:"Veja o vídeo para desembrulhá-lo",tr:"Pakedini açmak için videoyu izle",nl:"Bekijk de video om het uit te pakken",pl:"Obejrzyj wideo, aby rozpakować"},{name:"you_got_gift",ru:"Вы получили подарок",en:"You've got a gift!",de:"Du hast ein Geschenk erhalten.",es:"Tienes un regalo",fr:"Tu as reçu un cadeau",it:"Hai ricevuto un regalo",pt:"Recebeu um presente",tr:"Bir hediyen var",nl:"Je kreeg een cadeau",pl:"Otrzymano prezent"},{name:"watch_video_to_get_it",ru:"Посмотри видео для его получения",en:"Watch the video to get it.",de:"Sieh ein Video an, um es zu öffnen.",es:"Vea el vídeo para conseguirlo.",fr:"Regardez la vidéo pour l'obtenir.",it:"Guarda il video per ottenerlo.",pt:"Assista ao vídeo para obtê-lo.",tr:"bunu elde etmek için videoyu izleyin.",nl:"Bekijk de video om het te krijgen.",pl:"Obejrzyj film, aby je zdobyć."},{name:"double_prize",ru:"Удвой свой результат",en:"double your prize",de:"Verdopple Deinen Gewinn",es:"Dobla tu premio",fr:"Double ton prix",it:"Raddoppia il tuo premio",pt:"Duplique o seu prémio",tr:"Ödülünü ikiye katla",nl:"Verdubbel jouw prijs",pl:"Podwój swoją nagrodę"},{name:"watch_video_to_more",ru:"Посмотри видео для еще одной попытки",en:"Watch the video to get more.",de:"Sieh Dir ein Video an, um mehr zu erhalten.",es:"Mira este vídeo para conseguir más.",fr:"Regardez cette vidéo pour en gagner d'autres.",it:"Guarda il video per ottenerne di più.",pt:"Veja este vídeo para obter mais.",tr:"Daha fazla kazanmak için bu videoyu izle.",nl:"Bekijk deze video om er meer te krijgen",pl:"Obejrzyj to wideo, aby zdobyć więcej."},{name:"get_extra_moves",ru:"получи доп. ходы",en:"Get 5 extra moves!",de:"Erhalte 5 zusätzliche Züge",es:"Consigue 5 jugadas extra",fr:"Reçois 5 mouvements supplémentaires",it:"Ricevi 5 mosse extra",pt:"Obter 5 jogadas extras",tr:"Ekstra 5 hamle daha al",nl:"Krijg 5 extra moves",pl:"Otrzymaj 5 dodatkowych ruchów"},{name:"want_continue",ru:"хочешь продолжить?",en:"Want to continue?",de:"Möchtest Du fortfahren?",es:"¿Quieres continuar?",fr:"Voulez-vous continer ?",it:"Vuoi continuare?",pt:"Queres continuar?",tr:"Devam etmek istiyor musun?",nl:"Wil je verdergaan?",pl:"Chcesz kontynuować?"},{name:"no_more_moves",ru:"нет возможных ходов. Перетасовка..",en:"No more possible moves. Shuffling..",de:"Keine Züge Mehr! Mischen..",es:"¡sin Movimientos. Barajando..",fr:"Plus De Déplacements ! Mélanger",it:"Mosse Terminate! Rimescolamento",pt:"Sem Jogadas! A embaralhar..",tr:"Hamlen Bitti! Karıştırılıyor",nl:"Van Mogelijke Zetten. Wordt geschud",pl:"Brak możliwych ruchów. Przesuwanie"},{name:"out_of_moves",ru:"Конец ходов",en:"Out of moves!",de:"Keine Züge Mehr!",es:"¡sin Movimientos",fr:"Plus De Déplacements !",it:"Mosse Terminate!",pt:"Sem Jogadas!",tr:"Hamlen Bitti!",nl:"Van Mogelijke Zetten",pl:"Brak możliwych ruchów"},{name:"out_of_lives",ru:"Конец жизней",en:"Out of lives!",de:"Keine Leben mehr",es:"No te quedan vidas",fr:"À court de vies",it:"Vite finite",pt:"Sem mais vidas",tr:"Can tükendi",nl:"Geen levens meer",pl:"Brak żyć"},{name:"you_have_no_lives",ru:"Нет жизней. Хочешь их получить?",en:"Out of lives! Want to get more?",de:"Keine Leben mehr. Möchtest Du mehr?",es:"No te quedan vidas. ¿Quieres más?",fr:"À court de vies. Tu en veux plus ?",it:"Vite finite! Vuoi avere di più?",pt:"Sem mais vidas. Quer receber mais?",tr:"Can tükendi. Daha fazlasını mı istiyorsun?",nl:"Geen levens meer. Wil je er meer krijgen?",pl:"Brak żyć. Chcesz otrzymać więcej?"},{name:"you_gained",ru:"вы получили:",en:"You gained:",de:"Du erhältst:",es:"Has ganado:",fr:"Vous avez gagné:",it:"Hai guadagnato:",pt:"Ganhaste:",tr:"Kazancın:",nl:"Je hebt verdiend:",pl:"Udało ci się zdobyć:"},{name:"pause",ru:"пауза",en:"Pause",de:"Pause",es:"Pausa",fr:"Pause",it:"Pausa",pt:"Pausa",tr:"Duraklat",nl:"Pauze",pl:"Zatrzymaj"},{name:"want_more",ru:"хочешь больше?",en:"Want more?",de:"Möchtest Du mehr?",es:"¿Quieres más?",fr:"Tu en veux plus ?",it:"Vuoi avere di più?",pt:"Quer receber mais?",tr:"Daha fazlasını mı istiyorsun?",nl:"Wil je er meer krijgen?",pl:"Chcesz otrzymać więcej?"},{name:"try_again",ru:"попробуй еще!",en:"Try again!",de:"Noch Einmal",es:"Jugar otra vez",fr:"Rejouer",it:"Gioca di nuovo",pt:"Jogar Novamente",tr:"Tekrar Oyna",nl:"Opnieuw spelen",pl:"Zagraj ponownie"},{name:"get_booster",ru:"получить бустер",en:"Get a booster",de:"Erhalte einen Booster",es:"Recibe un potenciador",fr:"Reçois un boost",it:"Ricevi un supporto",pt:"Obter um reforço",tr:"Bir yükseltici al!",nl:"Krijg een booster",pl:"Odbierz wzmacniacz"},{name:"success",ru:"Уровень пройден",en:"Level Passed",de:"Level bestanden",es:"Nivel superado",fr:"Niveau réussi",it:"Livello superato",pt:"Nível Ultrapassado",tr:"Seviye Geçildi",nl:"Niveau gehaald",pl:"Poziom zakończony"},{name:"you_won_gift",ru:"Вы выиграли приз",en:"You won a gift!",de:"Du hast ein Geschenk erhalten!",es:"¡Has ganado un regalo!",fr:"Tu as gagné un cadeau !",it:"Hai vinto un regalo!",pt:"Ganhou um presente!",tr:"Bir hediye kazandın!",nl:"Je hebt een cadeau gewonnen!",pl:"Wygrano prezent!"},{name:"enjoy_your_gift",ru:"Наслаждайся своими подарками",en:"Enjoy your gifts!",de:"Viel Spaß damit!",es:"¡Disfruta de tus regalos!",fr:"Apprécie tes cadeaux !",it:"Goditi i tuoi regali!",pt:"Desfrute dos seus presentes!",tr:"Hediyelerinin tadını çıkar!",nl:"Geniet van je cadeaus!",pl:"Ciesz się swoim prezentem!"},{name:"time_remain",ru:"Target time:",en:"Refill time:",de:"Zeit:",es:"Tiempo:",fr:"Temps :",it:"Tempo:",pt:"Tempo:",tr:"Süre:",nl:"Tijd:",pl:"Czas:"},{name:"tutorial_basic.state-1.top_msg",ru:"Добро пожаловать в игру Two Blocks",en:"Welcome to Two Blocks",de:"Willkommen bei Two Blocks!",es:"Bienvenido a Two Blocks",fr:"Bienvenue sur Two Blocks",it:"Benvenuto su Two Blocks",pt:"Bem-vindo ao Two Blocks",tr:"Two Blocks'a Hoş Geldin",nl:"Welkom bij Two Blocks",pl:"Witaj w Two Blocks"},{name:"tutorial_basic.state-1.bottom_msg",ru:"Соедини два блока для продолжения",en:"Connect the two blocks to continue.",de:"Verbinde die beiden Blöcke, um fortzufahren.",es:"Conecta los dos bloques para continuar",fr:"Relie deux blocs pour continuer",it:"Connetti i due blocchi per continuare",pt:"Ligue os dois blocos para continuar",tr:"Devam etmek için iki bloğu birbirine bağla",nl:"Verbind de twee blokken om door te gaan",pl:"Połącz dwa kwadraty, aby kontynuować"},{name:"tutorial_basic.state-2.top_msg",ru:"Соединения могут быть\nвертикальными...",en:"Connections can also\nbe vertical...",de:"Verbindungen können\nauch vertikal sein...",es:"Las conexiones también\npueden ser verticales...",fr:"Les liens peuvent aussi\nse faire verticalement…",it:"I collegamenti possono\nessere anche verticali…",pt:"As ligações também\npodem ser na vertical...",tr:"Bağlantılar dikey\nde olabilir...",nl:"Verbindingen kunnen\nook verticaal zijn...",pl:"Połączenie może być\nrównież pionowe…"},{name:"tutorial_basic.state-3.top_msg",ru:"...но не диагональными.",en:"...but not diagonal.",de:"...aber nicht diagonal.",es:"... pero no diagonales.",fr:"…mais pas en diagonale.",it:"...ma non diagonali",pt:"…mas não na diagonal.",tr:"… ama köşegen olamaz",nl:"…maar niet diagonaal.",pl:"…ale nie może być na ukos."},{name:"tutorial_basic.state-3.bottom_msg",ru:"Держи, он тебе поможет",en:"Here, this should help.",de:"Hier, das sollte helfen.",es:"Esto puede ayudarte",fr:"Tiens, ça devrait t'aider",it:"Ecco, questo dovrebbe aiutarti",pt:"Aqui, isto deve ajudar",tr:"İşte, bu sana yardımcı olabilir",nl:"Hier, dit moet helpen",pl:"To powinno pomóc"},{name:"tutorial_basic.state-4.top_msg",ru:"Соединения могут быть\nочень длинными!",en:"Connections can be as\nlong as you want!",de:"Verbindungen können so\nlang sein, wie du willst!",es:"¡Las conexiones pueden ser\ntan largas como quieras!",fr:"Les liens peuvent être aussi\nlongs que tu le souhaites !",it:"I collegamenti possono essere\nlunghi quanto vuoi!",pt:"As ligações podem ter o tamanho\nque quiser!",tr:"Bağlantılar istediğin kadar\nuzun olabilir!",nl:"Verbindingen kunnen zo lang\nzijn als je wilt!",pl:"Połączenie może być,\ntak długie, jak tylko chcesz!"},{name:"tutorial_basic.state-4.bottom_msg",ru:"Соедени все блоки",en:"Connect all blocks.",de:"Verbinde alle Blöcke.",es:"Conecta todos los bloques",fr:"Relie tous les blocs",it:"Connetti tutti i blocchi",pt:"Ligar todos os blocos",tr:"Tüm blokları bağla",nl:"Verbind alle blokken",pl:"Połącz wszystkie kwadraty"},{name:"tutorial_basic.state-5.mid_msg",ru:"Отлично!",en:"Awesome!",de:"Wahnsinn!",es:"¡Alucinante!",fr:"Formidable !",it:"Meraviglioso!",pt:"Impressionante!",tr:"Muhteşem!",nl:"Verbazingwekkend!",pl:"Fantastycznie!"},{name:"tutorial_square.state-1.top_msg",ru:"Попробуй сделать красный квадрат",en:"Try to make a red square.",de:"Versuche, ein rotes Quadrat zu bilden.",es:"Trata de formar un cuadrado rojo",fr:"Essaie de créer un carré rouge",it:"Cerca di creare un quadrato rosso",pt:"Tente fazer um quadrado vermelho",tr:"Kırmızı bir kare elde etmeye çalış",nl:"Probeer een rood vierkant te maken",pl:"Spróbuj zrobić czerwony kwadrat"},{name:"tutorial_square.state-1.bottom_msg",ru:"Убедись чтобы он\nбыл замкнутым",en:"Be sure to make\na complete square.",de:"Stelle sicher, dass du\nein ganzes Quadrat bildest.",es:"Asegúrate de formar\nun cuadrado completo",fr:"Assure-toi de\nfermer le carré",it:"Assicurati di creare\nun quadrato completo",pt:"Não se esqueça de fazer\num quadrado completo",tr:"Tam bir kare elde\nettiğinden emin ol",nl:"Zorg ervoor dat je\neen compleet vierkant maakt",pl:"Upewnij się, że masz\ncały kwadrat"},{name:"tutorial_square.state-2.top_msg",ru:"Отлично! Все красные\nблоки были уничтожены",en:"Fantastic! All the red\nblocks disappeared.",de:"Fantastisch! Alle roten\nBlöcke sind verschwunden.",es:"¡Fantástico! Todos los\nbloques rojos han desaparecido.",fr:"Magnifique ! Tous les\nblocs rouges ont disparu.",it:"Fantastico! Tutti i\nblocchi rossi sono scomparsi.",pt:"Fantástico! Todos os\nblocos vermelhos desapareceram.",tr:"Muhteşem! Tüm kırmızı\nbloklar kayboldu.",nl:"Fantastisch! Alle rode\nblokken zijn verdwenen.",pl:"Fantastycznie! Wszystkie\nczerwone kwadraty zniknęły."},{name:"tutorial_square.state-2.bottom_msg",ru:"Сделай еще два квадрата",en:"Make two more squares.",de:"Bilde noch 2 Quadrate",es:"Forma dos cuadrados más",fr:"Crée deux carrés de plus",it:"Crea altri due quadrati",pt:"Fazer mais dois quadrados",tr:"İki kare daha yap",nl:"Maak nog twee vierkanten",pl:"Zrób jeszcze dwa kwadraty"},{name:"tutorial_square.state-3.top_msg",ru:"Вы сделали это!",en:"You got it!",de:"Du hast es geschafft!",es:"¡Lo has logrado!",fr:"Tu as compris !",it:"Ce l'hai fatta!",pt:"Você percebeu!",tr:"Kaptın bu işi!",nl:"Het lukte je!",pl:"Udało ci się!"},{name:"tutorial_square.state-3.bottom_msg",ru:"И еще один.",en:"One more to go.",de:"Noch eins.",es:"Uno más para conseguirlo.",fr:"Plus qu'un.",it:"Ne manca un altro per terminare.",pt:"Falta mais um.",tr:"Bir tane daha kaldı.",nl:"Nog één te gaan.",pl:"Został jeszcze tylko jeden."},{name:"tutorial_square.state-4.mid_msg",ru:"Отлично! Делай как можно большо квадратов",en:"Awesome! just make squares when you in trouble",de:"Wahnsinn! Wenn Du in Schwierigkeiten bist, dann versuche, Quadrate zu bilden.",es:"¡Alucinante! Forma cuadrados solo cuando tengas dificultades.",fr:"Formidable ! Crée tout simplement des carrés quand tu es coincé…",it:"Meraviglioso! Devi soltanto creare dei quadrati quando sei nei guai..",pt:"Impressionante! Basta fazer quadrados quando estiver em apuros..",tr:"Muhteşem! Sorun yaşadığında tek yapman gereken kare yapmak..",nl:"Verbazingwekkend! Maak gewoon vierkanten als je in de problemen komt..",pl:"Fantastycznie! Rób kwadraty, kiedy jesteś w tarapatach.."},{name:"tutorial_ice.msg1",ru:"Соедини фиолетовые блоки за один раз",en:"Connect the purple blocks.",de:"Verbinde alle lila Blöcke.",es:"Conecta los bloques morados.",fr:"Relie les blocs violets.",it:"Collega i blocchi di colore viola.",pt:"Ligar os blocos roxos.",tr:"Mor blokları birbirine bağla.",nl:"Verbind de paarse blokken.",pl:"Połącz fioletowe kwadraty."},{name:"tutorial_ice.msg2",ru:"Вы сделали это нанесши урон немного очистив клетку от грязи",en:"You connected these blocks and applied damage to the dirt under them.",de:"Du hast diese Blöcke verbunden und dem Dreck unter ihnen Schaden zugefügt.",es:"Has conectado estos bloques y has acabado con algo de suciedad bajo estos.",fr:"Tu as relié ces blocs et endommagé la terre en dessous.",it:"Hai collegato questi blocchi e creato danni al terreno presente al di sotto.",pt:"Ligou estes blocos e causou danos à terra por baixo deles.",tr:"Bu blokları bağladın ve altlarındaki pisliğe hasar uygulamış oldun.",nl:"Je verbond deze blokken en je bracht schade toe aan het vuil eronder.",pl:"Udało ci się połączyć te kwadraty i uszkodzić brud znajdujący się poniżej."},{name:"tutorial_ice.msg3",ru:"Продолжайте до полного ее исчезновения",en:"Keep doing new connections above dirt to completely destroy it.",de:"Bilde weitere Verbindungen über Dreck, um ihn komplett zu zerstören.",es:"Sigue estableciendo nuevas conexiones por encima de la suciedad para acabar con ella.",fr:"Continue de créer des liens par-dessus la terre pour la détruire totalement.",it:"Continua a creare nuovi collegamenti sul terreno per distruggerlo completamente.",pt:"Continue a fazer novas ligações acima da terra para destruí-la completamente.",tr:"Tamamen yok etmek için pisliğin üstünde yeni bağlantılar oluşturmaya devam et.",nl:"Blijf nieuwe verbindingen maken boven het vuil om dit geheel te vernietigen.",pl:"Próbuj robić nowe połączenia powyżej tego brudnego miejsca, aby całkowicie się go pozbyć."},{name:"tutorial_ice.msg4",ru:"Давайте двигаться дальше.",en:"Let's try another example.",de:"Lass uns ein weiteres Beispiel ausprobieren.",es:"Vamos a probar otro ejemplo.",fr:"Essayons un autre exemple.",it:"Proviamo un altro esempio.",pt:"Vamos tentar outro exemplo.",tr:"Bir başka örnek daha deneyelim.",nl:"We proberen nog een voorbeeld.",pl:"Spróbujmy na innym przykładzie."},{name:"tutorial_ice.msg5",ru:"Соедините желтые блоки",en:"Connect the yellow blocks.",de:"Verbinde gelbe Blöcke.",es:"Conecta bloques amarillos.",fr:"Relie les blocs jaunes.",it:"Collega i blocchi gialli.",pt:"Ligar os blocos amarelos.",tr:"Sarı blokları birbirine bağla.",nl:"Verbind de gele blokken.",pl:"Połącz żółte kwadraty."},{name:"tutorial_ice.msg6",ru:"Вы сделали это немного разморозив клетку на поле",en:"You connected these blocks and applied damage to the ice above them.",de:"Du hast diese Blöcke verbunden und dem Eis unter ihnen Schaden zugefügt.",es:"Has conectado estos bloques y acabado con algo de hielo bajo estos.",fr:"Tu as relié ces blocs et endommagé la glace en dessous.",it:"Hai collegato questi blocchi e creato danni al ghiaccio che c'era sopra.",pt:"Ligou estes blocos e causou danos ao gelo por cima deles.",tr:"Bu blokları bağladın ve üstlerindeki buza hasar uygulamış oldun.",nl:"Je verbond deze blokken en je bracht schade toe aan ijs erboven.",pl:"Połączyłeś te kwadraty i udało ci się uszkodzić lód znajdujący się powyżej."},{name:"tutorial_ice.msg7",ru:"Продолжайте до ее полоного разморожения",en:"Keep doing new connections under ice to completely destroy it.",de:"Bilde weiter Verbindungen über Eis, um es komplett zu zerstören.",es:"Sigue estableciendo nuevas conexiones por encima del hielo para destruirlo.",fr:"Continue de créer des liens par-dessus la glace pour la détruire totalement.",it:"Continua a creare nuovi collegamenti sotto il ghiaccio per distruggerlo completamente.",pt:"Continue a fazer novas ligações abaixo do gelo para destruí-lo completamente.",tr:"Tamamen yok etmek için buzun altında yeni bağlantılar oluşturmaya devam et.",nl:"Blijf nieuwe verbindingen maken onder het ijs om dit geheel te vernietigen.",pl:"Próbuj robić nowe połączenia pod lodem, aby całkowicie go zniszczyć."},{name:"tutorial_box.msg1",ru:"Соедините красные блоки",en:"Connect the red blocks.",de:"Verbinde die roten Blöcke.",es:"Conecta los bloques rojos.",fr:"Relie les blocs rouges.",it:"Collega i blocchi rossi.",pt:"Ligar os blocos vermelhos.",tr:"Kırmızı blokları birbirine bağla.",nl:"Verbind de rode blokken.",pl:"Połącz czerwone kwadraty."},{name:"tutorial_box.msg2",ru:"Вы сделали это и коробка возле них была уничтодена",en:"Awesome! You connected the red blocks and the box near them was destroyed.",de:"Wahnsinn! Du hast die roten Blöcke verbunden und die Kiste in ihrer Nähe wurde zerstört.",es:"¡Alucinante! Has conectado los bloques rojos y la caja cercana ha sido destruida.",fr:"Formidable ! Tu as relié les blocs rouges et la boîte à côté d'eux à été détruite.",it:"Meraviglioso! Hai collegato i blocchi rossi e la scatola che vi era accanto è stata distrutta.",pt:"Impressionante! Ligou os blocos vermelhos e a caixa perto deles foi destruída.",tr:"Muhteşem! Kırmızı blokları bağladın ve yakınlarındaki kutu imha edildi.",nl:"Verbazingwekkend! Je verbond de rode blokken en de doos ernaast werd vernietigd.",pl:"Fantastycznie! Udało ci się połączyć czerwone kwadraty i pudełko obok nich zostało zniszczone."},{name:"tutorial_box.msg3",ru:"Двигаемся дальше",en:"Let's make it harder.",de:"Machen wir es schwerer.",es:"Vamos a aumentar la dificultad",fr:"Compliquons le tout",it:"Rendiamo il tutto più complicato.",pt:"Vamos complicar mais",tr:"Biraz daha zorlaştıralım",nl:"We maken het nu wat moeilijker",pl:"Spróbujmy czegoś trudniejszego"},{name:"tutorial_box.msg4",ru:"Соедини любые два блока возле кирпичей",en:"Connect any two blocks near the bricks.",de:"Verbinde 2 Blöcke in der Nähe der Ziegelsteine!",es:"Conecta dos bloques cerca de los ladrillos",fr:"Relie deux blocs aléatoires près des briques",it:"Collega due blocchi qualsiasi accanto ai mattoni",pt:"Ligar dois blocos perto dos tijolos",tr:"Tuğlaların yakınında bulunan herhangi iki bloğu birbirine bağla",nl:"Verbind twee blokken naast de stenen",pl:"Połącz dwa dowolne kwadraty  obok cegiełek"},{name:"tutorial_box.msg5",ru:"Вы нанесли урон кирпичям но не унижтожили их. Кирпичи сильнее коробок!",en:"Fantastic! You just hit the bricks but didn't destroy them. The bricks are stronger than the box!",de:"Fantastisch! Du hast die Ziegelsteine getroffen, sie aber nicht zerstört. Diese Ziegelsteine sind stärker als die Kiste!",es:"¡Fantástico! Acabas de golpear los ladrillos, pero no los has destruido. ¡Los ladrillos son más fuertes que la caja!",fr:"Magnifique ! Tu as touché les briques mais elles ne sont pas encore détruites. Les briques sont plus résistantes que la boîte !",it:"Fantastico! Hai soltanto colpito i mattoni ma non li hai distrutti. I mattoni sono più resistenti della scatola!",pt:"Fantástico! Acabou de bater nos tijolos, mas não os destruiu. Os tijolos são mais fortes do que a caixa!",tr:"Muhteşem! Tuğlaları vurdun ama yok etmedin. Tuğlalar kutudan daha kuvvetli!",nl:"Fantastisch! Je raakte de stenen, maar je vernietigde ze niet. De stenen zijn sterker dan de doos!",pl:"Fantastycznie! Udało ci się uderzyć cegiełki, ale nie udało ci się ich zniszczyć. Cegiełki są mocniejsze niż pudełko!"},{name:"tutorial_box.msg6",ru:"Продолжайте соединять блоки для полного уничтожения кирпичей",en:"Try to make more connections around the bricks to completely destroy it.",de:"Versuche mehr Verbindungen um die Ziegelsteine herum zu bilden, um sie komplett zu zerstören.",es:"Trata de establecer más conexiones alrededor de los ladrillos para destruirla por completo.",fr:"Essaie de créer d'autres liens près des briques pour les détruire totalement.",it:"Prova ad effettuare altri collegamenti intorno ai mattoni per distruggerli completamente.",pt:"Tente fazer mais ligações à volta dos tijolos para destruí-los completamente.",tr:"Tamamen yok etmek için tuğlaların etrafında daha fazla bağlantı oluşturmaya çalış.",nl:"Probeer meer verbindingen te maken rond de stenen om het geheel te vernietigen.",pl:"Spróbujmy zrobić więcej połączeń wokół cegiełek, aby je całkowicie zniszczyć."},{name:"tutorial_box.msg7",ru:"Отлично!",en:"Awesome!",de:"Wahnsinn!",es:"¡Alucinante!",fr:"Formidable !",it:"Meraviglioso!",pt:"Impressionante!",tr:"Muhteşem!",nl:"Verbazingwekkend!",pl:"Fantastycznie!"},{name:"tutorial_bomb.state-1.top_msg",ru:"Замкни бирюзовый\nблок фиолетовыми",en:"Trap the cyan block\nwithin a purple square.",de:"Fange den blauen Block\nin einem lila Quadrat ein",es:"Atrapa el bloque cian\nen un cuadrado morado",fr:"Encercle le bloc cyan\ndans un carré violet",it:"Intrappola il blocco turchese\nall'interno di un quadrato viola",pt:"Prender o bloco ciano dentro\nde um quadrado roxo",tr:"Mor karenin içinde açık\nmavi bloğa tuzak kur",nl:"Vang het blauwe blok\nbinneneen paars vierkant",pl:"Spróbuj złapać niebieski\nkwadrat filetowym kwadratem"},{name:"tutorial_bomb.state-2.mid_msg-1",ru:"После соединения\nфиолетовых блоков бирюзовый\nстал бомбой",en:"After you cleared\nthe purple blocks, the cyan block became a bomb!",de:"Nachdem Du die lila\nBlöcke beseitigt hast, wird aus dem blauen Block eine Bombe!",es:"Después de eliminar\nlos bloques morados, ¡el bloque cian se ha\nconvertido en una bomba!",fr:"Après l'élimination de tous\nles blocs violets, le bloc cyan\ndevient une bombe !",it:"Dopo aver eliminato i blocchi viola, il blocco turchese è diventato una bomba!",pt:"Depois de eliminar os blocos\nroxos, o bloco ciano\ntornou-se uma bomba!",tr:"Mor blokları temizledikten\nsonra açık mavi blok bombaya dönüşebilir!",nl:"Nadat je de paarse blokken\nhebt gewist, wordt het\nblauwe blok een bom!",pl:"Po wyczyszczeniu fioletowych\nkwadratów, niebieskie kostki\nstaną się bombami!"},{name:"tutorial_bomb.state-2.mid_msg-2",ru:"Бомбы помогут вам уничтожить больше\nблоко за меньше ходов.",en:"Bombs help you clear more blocks in\nfewer moves! They can\neven clear anchors.",de:"Bomben helfen Dir dabei, mehr Blöcke\nin weniger Zügen zu beseitigen.\nSie können selbst Anker beseitigen.",es:"¡Las bombas te ayudan a eliminar más\nbloques en menos jugadas!\nIncluso pueden eliminar las anclas.",fr:"Les bombes te permettent de détruire\nplus de blocs en moins de mouvements !\nElles peuvent même détruire des ancres.",it:"Le bombe ti aiutano a eliminare tutti\ni blocchi con un minor numero di mosse!\nEsse riescono ad eliminare anche le ancore.",pt:"As bombas ajudam-no a eliminar mais\nblocos com menos jogadas!\nPodem até limpar âncoras.",tr:"Bombalar daha az hamlede daha fazla\nblok temizleyebilmene yardımcı olur!\nDemirleri bile temizleyebilirler.",nl:"Met bommen kun je meer blokken\nwissen met minder moves! Ze kunnen\nzelfs ankers wissen.",pl:"Bomby pomogą ci w usunięciu większej\nilości kwadratów, wykonując mniej ruchów!\nSą one w stanie usunąć nawet kotwice."},{name:"booster_tutorial.eraser.tooltip",ru:"Попробуй новый бустер. Он удаляет один блок",en:"Try the new booster! It removes one block.",de:"Probiere den neuen Booster aus! Er entfernt einen Block.",es:"¡Prueba el nuevo potenciador! Elimina un bloque",fr:"Essaie le nouveau boost ! Il efface un bloc",it:"Prova il nuovo supporto! Rimuove un blocco",pt:"Experimente o novo reforço! Remove um bloco",tr:"Yeni yükselticiyi dene! Bir bloğu ortadan kaldırır",nl:"Probeer de nieuwe booster! Het verwijdert één blok",pl:"Wypróbuj nowy wzmacniacz! Usuwa jeden kwadrat"},{name:"booster_tutorial.magicTool.tooltip",ru:"Попробуй новый бустер. Он удаляет все блоки одного цвета",en:"Try the new booster! It clears all blocks of the same color.",de:"Probiere den neuen Booster aus!",es:"¡Prueba el nuevo potenciador! Elimina todos los bloques del mismo color",fr:"Essaie le nouveau boost ! Il élimine tous les blocs de la même couleur",it:"Prova il nuovo supporto! Elimina tutti i blocchi dello stesso colore",pt:"Experimente o novo reforço! Elimina todos os blocos da mesma cor",tr:"Yeni yükselticiyi dene! Aynı renkten tüm blokları temizler",nl:"Probeer de nieuwe booster!",pl:"Wypróbuj nowy wzmacniacz! Usuwa wszystkie kwadraty tego samego koloru"},{name:"booster_tutorial.shuffler.tooltip",ru:"Попробуй новый бустер. Он перетасовывает все блоки",en:"Try the new booster! It shuffles all blocks.",de:"Probiere den neuen Booster aus!",es:"¡Prueba el nuevo potenciador! Baraja todos los bloques",fr:"Essaie le nouveau boost ! Il mélange tous les blocs",it:"Prova il nuovo supporto! Mischia tutti i blocchi",pt:"Experimente o novo reforço! Embaralha todos os blocos",tr:"Yeni yükselticiyi dene! Tüm blokları karıştırır",nl:"Probeer de nieuwe booster! Het wist alle blokken met dezelfde kleur",pl:"Wypróbuj nowy wzmacniacz! Przesuwa wszystkie kwadraty"},{name:"guess_daily_gift",ru:"Угадай где твой приз!",en:"Guess where your daily gift is!",de:"Rate, wo Dein tägliches Geschenk ist!",es:"¡Adivina dónde está tu regalo diario!",fr:"Devine où est ton cadeau quotidien !",it:"Indovina dove si trova il tuo regalo giornaliero!",pt:"Adivinhe onde está o seu presente diário!",tr:"Günlük hediyenin nerede olduğunu tahmin et!",nl:"Raad waar jouw dagelijkse cadeau is!",pl:"Zgadnij, gdzie znajduje się Twój dzienny prezent!"},{name:"tap_on_cup",ru:"Нажми на чашку для ее отрытия.",en:"Click on one of the cups to open it.",de:"Klicke auf eine der Tassen, um es zu öffnen.",es:"Haz clic en uno de los vasos para abrirlo.",fr:"Clique sur un des verres pour l'ouvrir.",it:"Clicca su una delle tazze per aprirla.",pt:"Clique num dos copos para abri-lo.",tr:"Açmak istediğin kupanın üzerine tıkla.",nl:"Klik op één van de kopjes om het te openen. Het schudt alle blokken door elkaar",pl:"Kliknij na jeden kubek, aby otworzyć."},{name:"tutorial_basic.final_msg-1",ru:"Теперь ты готов окунутся в мир блоков",en:"Now you are ready to dive into the world of Blocks.",de:"Jetzt bist Du bereit, in die Welt der Blöcke zu tauchen.",es:"Ya estás listo para sumergirte en el mundo de Two Blocks.",fr:"Vous êtes maintenant prêt à plonger dans le monde des Blocks.",it:"Ora sei pronto per immergerti nel mondo di Blocks.",pt:"Já está pronto para mergulhar no mundo de Blocks.",tr:"Artık Blokların dünyasına dalmaya hazırsın.",nl:"Je bent er nu klaar voor om in de wereld van Blocks te duiken.",pl:"Teraz jesteś gotów, by wkroczyć do świata Bloków."},{name:"tutorial_basic.final_msg-2",ru:"Желаю удачи!",en:"Good luck!",de:"Viel Glück!",es:"¡Suerte!",fr:"Bonne chance !",it:"Buona fortuna!",pt:"Boa sorte!",tr:"Bol şans!",nl:"Veel succes!",pl:"Powodzenia!"},{name:"tutorial_anchor.msg-1",ru:"Соедини любые два блока",en:"Remove any two blocks. This allows the anchor above them fall to the bottom of the field.",de:"Entferne zwei Blöcke, um den Anker darüber auf den Boden fallen zu lassen.",es:"Elimina dos bloques cualquiera. Esto permite que el ancla sobre ellos caiga al fondo del campo.",fr:"Supprimez deux blocs, n'importe lesquels. Ceci permet à l'ancre placée au-dessus de tomber en bas de la grille.",it:"Rimuovi i blocchi due per volta. Questo consentirà all'ancora sovrastante di cadere sul fondo del campo.",pt:"Remova dois blocos. Isto permite que a âncora por cima deles caia no fundo do campo.",tr:"Tüm blok çiftlerini kaldır. Böylece üstlerindeki çapa alanın altına düşer.",nl:"Verwijder twee willekeurige blokken. Hierdoor kan het anker erboven naar de onderkant van het veld vallen.",pl:"Usuń dowolne dwa bloki. Dzięki temu wisząca nad nimi kotwica opadnie na sam dół planszy."},{name:"tutorial_anchor.msg-2",ru:"Вы сделали это и теперь якорь будет уничтожен",en:"You did it and now the anchor will be destroyed.",de:"Du hast es geschafft und den Anker zerstört!",es:"Lo has hecho y ahora el ancla se destruirá.",fr:"Vous avez réussi et maintenant l'ancre sera détruite.",it:"Ce l'hai fatta e ora l'ancora verrà distrutta.",pt:"Conseguiu e agora a âncora será destruída.",tr:"Başardın ve artık çapa imha edildi.",nl:"Je hebt het gedaan en het anker zal nu worden vernietigd.",pl:"Udało Ci się i teraz kotwica zostanie zniszczona."},{name:"tutorial_anchor.msg-3",ru:"Сделай тоже самое с другими блоками",en:"Now do the same with the other pairs of blocks.",de:"Wiederhole das mit den anderen Blöcken.",es:"Ahora haz lo mismo con los otros pares de bloques.",fr:"Faites maintenant la même chose avec les autres paires de blocks.",it:"Adesso fai la stessa cosa con le altre coppie di blocchi.",pt:"Agora faça o mesmo com os outros pares de blocos.",tr:"Şimdi aynısını diğer blok çiftleriyle yap.",nl:"Do nu hetzelfde met de andere blokparen.",pl:"Teraz zrób to samo z drugą parą bloków."},{name:"tutorial_anchor.msg-4",ru:"Отлично!",en:"Awesome!",de:"Genial!",es:"¡Impresionante!",fr:"Magnifique !",it:"Fantastico!",pt:"Impressionante!",tr:"Muhteşem!",nl:"Geweldig!",pl:"Super!"},{name:"tutorial_ice.msg8",ru:"Отличная работа!",en:"Awesome work!",de:"Gute Arbeit!",es:"¡Impresionante trabajo!",fr:"Beau travail !",it:"Ottimo lavoro!",pt:"Excelente trabalho!",tr:"Muhteşem bir iş çıkardın!",nl:"Geweldig gedaan!",pl:"Doskonała robota!"},{name:"watch_video_to_unpack_gift",ru:"Посмотрите видео для получения подарка",en:"Watch the video to unpack your gift",de:"Sieh das Video an, um das Geschenk auszupacken!",es:"¡Visualiza el vídeo para desenvolver tu regalo!",fr:"Regardez la vidéo pour découvrir votre cadeau !",it:"Guarda il video per scartare il tuo regalo!",pt:"Veja o vídeo para abrir o seu brinde!",tr:"Hediye paketini açmak için videoyu izle!",nl:"Bekijk de video om je geschenk uit te pakken!",pl:"Obejrzyj film, aby odpakować swój prezent!"},{name:"double_your_prize_by_watching",ru:"Удвойте свой выигрыш посмотрев видео",en:"Watch the video to double your prize",de:"Sieh das Video an, um den Preis zu verdoppeln!",es:"¡Visualiza el vídeo para duplicar tu premio!",fr:"Regardez la vidéo pour doubler votre gain !",it:"Guarda il video per raddoppiare il tuo premio!",pt:"Veja o vídeo para duplicar o seu prémio!",tr:"Ödülünü ikiye katlamak için videoyu izle!",nl:"Bekijk de video om je prijs te verdubbelen!",pl:"Obejrzyj film, aby podwoić swoją nagrodę!"},{name:"no_more_video",ru:"Нет видео",en:"No more videos!",de:"Keine Weiteren Videos!",es:"No hay más vídeos",fr:"Plus aucune vidéo",it:"Nessun altro video",pt:"Acabaram-se os vídeos",tr:"Daha fazla video yok",nl:"Geen video's meer",pl:"Brak filmów"},{name:"you_watched_all_video",ru:"Вы посмотрели все видео на сегодня. Возвращайтесь завтра!",en:"You watched all video for today. Come back tomorrow!",de:"Du hast alle Videos für heute gesehen. Komme morgen wieder!",es:"Has visto todos los vídeos de momento, vuelve más tarde.",fr:"Vous avez regardé toutes les vidéos pour le moment, revenez plus tard pour d’autres.",it:"Per ora hai visto tutti i video, torna più tardi o guardane ancora.",pt:"Por agora, assistiu a todos os vídeos, volte mais tarde para assistir a mais",tr:"Şimdilik tüm videoları izledin, daha sonra gel ve daha fazlasını izle",nl:"Je hebt nu alle video's bekeken, kom later terug om er meer te bekijken",pl:"Obejrzałeś wszystkie dostępne filmy, wróć później, żeby obejrzeć więcej."},{name:"daily_gift",ru:"Дневной подарок",en:"Daily gift",de:"Tägliches Geschenk",es:"Regalo diario",fr:"Cadeau du jour",it:"Regalo giornaliero",pt:"Brinde diário",tr:"Günlük hediye",nl:"Dagelijks geschenk",pl:"Codzienny prezent"},{name:"you_completed_all_available_levels",ru:"Вы завершили все доступные уровни. Возвращайтесь когда будут новые обновления!",en:"You completed all available levels for now. Check back for future updates!",de:"Du hast alle verfügbaren Level gelöst! Besuche uns bald wieder!",es:"Has superado los niveles disponibles por ahora. ¡Vuelve para comprobar futuras actualizaciones!",fr:"Vous avez terminé tous les niveaux disponibles pour l'instant. Revenez bientôt pour voir les mises à jour !",it:"Hai completato tutti i livelli per ora. Vieni a dare un' occhiata per aggiornamenti futuri!",pt:"Por agora, completou todos os níveis disponíveis. Esteja atento às atualizações futuras!",tr:"Şimdilik tüm mevcut seviyeleri tamamladın. Gelecekteki güncellemeleri tekrar kontrol et!",nl:"Je hebt alle voor nu beschikbare niveaus voltooid. Kom later terug voor toekomstige updates!",pl:"Ukończyłeś wszystkie dostępne na tę chwilę poziomy. Odwiedzaj nas i sprawdzaj, czy są uaktualnienia!"},{name:"congratulations",ru:"Поздравляем!",en:"Congratulations!",de:"Herzlichen Glückwunsch!",es:"¡Felicidades!",fr:"Félicitations !",it:"Congratulazioni!",pt:"Parabéns!",tr:"Tebrikler!",nl:"Gefeliciteerd!",pl:"Gratulacje!"}];