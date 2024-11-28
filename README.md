# Projekt-Dokumentation

Nursiwat Xavier

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 23/08/2024       | 0.0.1   | Ich habe das Projekt angefangen, die HTML/CSS Grundstruktur fertiggestellt und auf GitHub alles eingerichtet. |
| 30/08/2024      | 0.0.2     | Ich habe angefangen mit dem Fangspiel zu implementieren. Ich bin aber nicht weit gekommen, also muss ich dieses Arbeitspaket auf nächste Woche veschieben um daran weiter zu arbeiten.                                                             |
| 06/09/2024      |0.0.3   |  Ich habe die Grundfunktion des Fangspiels fertig implementiert. Der Highscore funktioniert noch nicht, also muss ich das auch auf nächste Woche verschieben.                                                         
|13/09/2024|0.1.0| Fangspiel wurde komplett fertig implementiert. Heisst Highscore, UI wurde noch erstellt. |
|01/11/2024|1.0.0| Beide Spiele wurden komplett fertiggestellt. Die Website wurde deployed und ist zugänglich für alle.|

link: https://dexav.github.io/Sense_Arcade/

## 1 Informieren

### 1.1 Ihr Projekt

Ich werde eine Webapplikation erstellen, wo man 2 Mini-Spiele spielen kann. 

Einer der Spiele ist ein Fang-Spiel. Ein Spiel man auf Bilder drücken muss, die zufällig auf dem Bildschirm erscheinen. 
Das andere Spiel ist ein Reaktion-tester, wo man seine Reaktionszeit herausfinden kann, in dem man auf dem Bildschirm drückt, der nach einer Zeit von Rot auf Grün wechselt. Dazu wird es verschiedene Variationen geben von diesem Reaktion-Spiel.


### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |funktional       | muss | Als User will ich, dass das Fang-Spiel einen Timer hat, der runterzählt, damit man nur in einer bestimmten Zeit spielen kann und nicht unendlich.  |
| 2    |funktional        | muss | Als User will ich, dass im Fang-Spiel die Bilder die aufpoppen, nach einer Zeit mehr wird, damit man nicht warten muss bis man ein Bild gedrückt hat.                         |
|3|qulität|muss|Als User will ich, dass das UI simpel und einfach gestaltet ist, damit auch eine Person die keine Ahnung herausfindet wie man navigiert. |
|4|funktional|muss|Als User will ich, dass im Reaktiontester die Zeit, wo es von Rot auf Grün wechselt, jedes mal anders ist, damit man nicht rechnen kann wann man auf dem Bildschirm drücken muss. |
|5|funktional | muss | Als User will ich, dass es nicht nur einen Test von Rot auf Grün gibt, sondern auch Variationen gibt von diesem Test, damit man sieht wo man am stärksten ist beim Reagieren.|
|6| qualität  | muss | Als User will ich, dass beide Spiele auf einer Seite integriert werden, damit man nicht eine komplett andere Seite öffnen muss, wenn man das andere Spiel spielen will.|



### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Das Fang-Spiel wurde gestartet und das Spiel läuft.             | User spielt das Spiel und klickt auf die Katzen.       |   Es gibt einen Timer der von 30 runterzählt.                |
| 2.1  | Das Fang-Spiel wurde gestartet und das Spiel läfut          |  User spielt das Spiel und klickt auf die Katzen.       | Wenn der Timer bei 20 Sekunden angekommen ist, kommen mehr Katzen auf dem Bildschirm|
| 3.1  | Der Reaktionstester wurde gestartet.             | User hat auf Start gedrückt         | Der rote Bereich wechselt nach 2.3 Sekunden auf grün.                |
| 3.2  | Der Reaktionstester wurde gestartet.             |  User hat auf Start gedrückt       | Der rote Bereich wechselt nach 3.1 Sekunden auf grün.                  |
| 4.1  | Es gibt eine neue Variation von dem Reaktionstester.             | User beginnt die neue Varation.         |  Auf dem roten Bereich wird jetzt nur noch ein Teil der Fläche grün.                 |




## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |   23.08.2024    |  Xavier Nursiwat         | HTML/CSS Grundstruktur erstellen.             | 90 min              |
| 2.A  | 30.08.2024       |Xavier Nursiwat           | Grundfunktion des Fangspiels              | 135 min              |
| 2.B  | 30.08.2024        |Xavier Nursiwat           | Highscore-funktion erstellen             | 45 min              |
| 3.A  | 06.09.2024        | Xavier Nursiwat          |  UI erstellen            | 90 min              |
| 3.B  | 06.09.2024        | Xavier Nursiwat          |  UI/UX optimieren          | 90 min              |
| 4.A  | 13.09.2024        | Xavier Nursiwat          | Grundfunktion Reaktiontester erstellen            | 135 min              |
| 5.A  | 20.09.2024       | Xavier Nursiwat          | Variationen des Reaktionteser erstellen          | 135 min              |
| 6.A  | 20.09.2024       | Xavier Nursiwat          | UI erstellen      | 45 min              |
| 7.A  | 27.09.2024       | Xavier Nursiwat          | Integration  beide Spiele           |135 min               |
| 8.A  |01.11.2024        | Xavier Nursiwat          |  Spiele testen und optimieren            | 180 min              |


Total:  1080 min / 18 h

## 3 Entscheiden
Bild, welches ich benutze habe für das Fangspiel:
https://images.app.goo.gl/hx6ZPRqYJ3jcYf1R7

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |  23.08.2024     |Xavier Nursiwat           | 90 min              |  110 min                 |
| 2.A  |  30.08.2024 + 06/09/2024     | Xavier Nursiwat             | 135min              |    300 min               |
|2.B |  13.09.2024   | Xavier Nursiwat             | 45 min            |    100min               |
| 3.A  | 06.09.2024        | Xavier Nursiwat          | 90 min       |120 min         |
| 3.B  | 06.09.2024        | Xavier Nursiwat          |  90 min     | 90 min              |
| 4.A  | 13.09.2024        | Xavier Nursiwat          |  135 min     | 160 min              |
|6.A  |  27.09.2024        | Xavier Nursiwat          |  45 min     | 60 min              |
| 7.A  | 27.09.2024        | Xavier Nursiwat          |  135 min     | 140 min              |
| 8.A  | 01.11.2024        | Xavier Nursiwat          |  180 min     | 200 min              |





## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |  01.11.2024     | OK          |Xavier Nursiwat        |
| 2.1  |  01.11.2024       | OK         |Xavier Nursiwat        |
| 3.1  |  01.11.2024       |   OK       | Xavier Nursiwat       |
| 3.2  |  01.11.2024      |  OK        | Xavier Nursiwat       |
| 4.1  |  01.11.2024       | NOK         | Xavier Nursiwat       |

Fazit: Man kann beide Spiele ohne Probleme spielen. Da die Variation zum Reaktionstester nicht fertiggestellt wurde, kann man sie daher nicht spielen. 


