# dotpinto.github.io

Sito personale e blog realizzato con React e Vite.

## Avvio in locale

```sh
npm install
npm run dev
```

## Personalizzazione

Modifica `src/data/profile.js` per aggiornare nome, bio, posizione, link social
e spunti per gli articoli. Sostituisci il link LinkedIn con quello del tuo
profilo e modifica o rimuovi i testi di esempio prima della pubblicazione.

## Pubblicazione

Il workflow in `.github/workflows/deploy.yml` compila il sito e lo pubblica su
GitHub Pages a ogni push sul branch `main`. Per attivarlo, imposta GitHub Pages
nelle impostazioni del repository su **GitHub Actions**.