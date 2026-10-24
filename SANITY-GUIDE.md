# Sanity Guide — Alma Hammar Portfolio

Den här guiden förklarar hur du redigerar innehållet på din portfolio via Sanity Studio.

**Studio-länk:** [hammargraphics.vercel.app/studio](https://hammargraphics.vercel.app/studio)  
Du loggar in med ditt Sanity-konto.

---

## Innehållsförteckning

1. [Lägga till ett nytt projekt](#lägga-till-ett-nytt-projekt)
2. [Redigera ett befintligt projekt](#redigera-ett-befintligt-projekt)
3. [Lägga till bilder i galleriet](#lägga-till-bilder-i-galleriet)
4. [Lägga till video i Motion Design](#lägga-till-video-i-motion-design)
5. [Ändra ordning på projekten](#ändra-ordning-på-projekten)
6. [Uppdatera kontaktuppgifter och CV](#uppdatera-kontaktuppgifter-och-cv)
7. [Uppdatera hero-texten](#uppdatera-hero-texten)

---

## Lägga till ett nytt projekt

1. Gå till `/studio` och klicka på **Project** i vänstermenyn
2. Klicka på **+** längst upp till höger
3. Fyll i:
   - **Title** — projektets namn (visas som hover-text på startsidan)
   - **Slug** — genereras automatiskt från titeln, klicka på "Generate"
   - **Type** — välj `project` för ett vanligt projekt, eller `concept` om det ska hamna under Concepts-sektionen
   - **Description** — en kort beskrivning som visas på projektsidan
   - **Cover image** — den bild som visas på startsidan (välj en bild med bra format)
   - **Card size** — `normal` för stor bild, `small` för en mindre bild i raden
4. Lägg till bilder i galleriet (se nästa avsnitt)
5. Klicka **Publish** uppe till höger

---

## Redigera ett befintligt projekt

1. Klicka på **Project** i vänstermenyn
2. Klicka på det projekt du vill redigera
3. Gör dina ändringar
4. Klicka **Publish** — ändringarna syns direkt på sidan

---

## Lägga till bilder i galleriet

Varje projekt har ett bildgalleri. Varje bild kan ha en bildtext som visas vid hover.

1. Öppna ett projekt i Studio
2. Scrolla ner till **Images**
3. Klicka **Add item**
4. Klicka på bildikonen och ladda upp din bild
5. Fyll i **Caption** — det är texten som visas när man hovrar över bilden på projektsidan
6. Upprepa för fler bilder
7. Klicka **Publish**

---

## Lägga till video i Motion Design

Motion Design-projektet visar en bild som thumbnail — när man klickar öppnas videon i en lightbox.

Videofiler läggs inte upp i Sanity utan sparas direkt i projektkoden. Kontakta Patricia om du vill lägga till en ny video.

Så här fungerar det i dagsläget:

- Videofilen (.mp4) läggs i mappen `public/assets/motion/`
- I Sanity-galleriet för Motion Design-projektet finns ett fält **Video** — skriv in filnamnet (t.ex. `min-video.mp4`)
- I fältet **Image** laddar du upp den thumbnail-bild som ska visas
- **Caption** blir hover-texten

---

## Ändra ordning på projekten

Projekten visas på startsidan i den ordning de skapades i Sanity. För att ändra ordning:

1. Öppna ett projekt
2. Ändra titeln tillfälligt och publicera om → projektet hamnar sist
3. Alternativt: kontakta Patricia för att lägga till ett manuellt sorteringsfält

_(Enklare sortering kan läggas till i schemat vid behov.)_

---

## Uppdatera kontaktuppgifter och CV

1. Klicka på **Site settings** i vänstermenyn
2. Om det inte finns ett dokument ännu, klicka **+** och skapa ett
3. Du kan uppdatera:
   - **Phone** — telefonnummer
   - **Email** — e-postadress
   - **Instagram** — länk till din Instagram (t.ex. `https://instagram.com/hammarensgraf_`)
   - **LinkedIn** — länk till din LinkedIn-profil
   - **CV** — ladda upp en ny PDF-fil
4. Klicka **Publish**

---

## Uppdatera hero-texten

Hero-texten är den text som visas bredvid din bild på startsidan.

1. Klicka på **Site settings**
2. Hitta fältet **Hero text**
3. Redigera texten — du kan använda fetstil, kursivt osv. via verktygsfältet
4. Klicka **Publish**

---

## Tips

- **Drafts** — ändringar sparas automatiskt som utkast. Du måste klicka **Publish** för att de ska synas på sidan.
- **Bilder** — ladda upp bilder i så hög upplösning som möjligt. Sanity komprimerar dem automatiskt för webben.
- **Slug** — ändra inte slug på ett publicerat projekt utan att kontakta Patricia, det kan bryta länken.
- Har du frågor? Kontakta Patricia på [patricia.frykberg@gmail.com](mailto:patricia.frykberg@gmail.com)
