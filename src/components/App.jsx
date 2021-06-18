import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@fluentui/react-theme-provider";

import { initializeIcons } from "@fluentui/react/lib/Icons";
import "office-ui-fabric-react/dist/css/fabric.css";

import { theme } from "../theme";

import { TimeMapPage } from "./TimeMapPage";
import { PhotoLocatorPage } from "./PhotoLocatorPage";
import { InfoSearchPage } from "./InfoSearchPage";

initializeIcons();

const photos = [
  {
    identifier: "test1", // use uuid
    name: "Fotka jak bič",
    description: "Fotka / popis",
    objects: ["Praděd", "Ovčárna", "Random kopec"],
    img: "01.png",
    created: "2020",
    source: "Nějaká stará bába",
    coordinates: {
      x: 10,
      y: 20,
    },
    link: "https://www.google.com/",
  },
  {
    identifier: "test2",
    name: "Fotka jak bič - druhá",
    description: "Fotka / popis druhá",
    objects: ["Praděd", "Ovčárna", "Random kopec"],
    img: "01.png",
    created: "2018",
    source: "Ještě starší babka",
    coordinates: {
      x: 20,
      y: 30,
    },
    link: "https://www.seznam.com/",
  },
];

const objects = [
  {
    identifier: "test1", // use uuid
    name: "Test object soustava lanovek a železnic",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
    img: ["01.png"],
    yearBuilt: "1950",
    yearPerishFunction: "1970",
    yearPerishPhysical: "1980",
    link: "https://www.google.com/",
  },
  {
    identifier: "test2",
    name: "Another object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
    img: ["01.png"],
  },
  {
    identifier: "test3",
    name: "Third object",
    description:
      "Podkladem byly mapy Stabilního katastru v měřítku 1 : 2 880, Obsah mapy je v podstatě totožný s I. vojenským mapováním, přidány byly pouze výšky trigonometrických bodů (ve vídeňských sázích), avšak zobrazovaná situace se velmi liší. Mapy II. vojenského mapování vznikaly v době nástupu průmyslové revoluce a rozvoje intenzivních forem zemědělství, kdy vzrostla výměra orné půdy za 100 let o 50% a lesní plochy dosáhly u nás historicky nejmenšího rozsahu.",
  },
  {
    identifier: "test4",
    name: "Fourth object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
  {
    identifier: "test5",
    name: "Test object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
  {
    identifier: "test6",
    name: "Another object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
  {
    identifier: "test7",
    name: "Third object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
  {
    identifier: "test8",
    name: "Fourth object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
  {
    identifier: "test9",
    name: "Fourth object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
  {
    identifier: "test10",
    name: "Fourth object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
  {
    identifier: "test11",
    name: "Fourth object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
  {
    identifier: "test12",
    name: "Fourth object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
  {
    identifier: "test13",
    name: "Fourth object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
  {
    identifier: "test14",
    name: "Fourth object",
    annotation:
      "Historická soustava lanovek a železnic pro dopravu vytěženého dříví.",
    description:
      "Po vichřici v roce 1897 zde bylo polámáno 80 tisíc plnometrů dřeva a jelikož neexistoval způsob, jak dřevo dopravit dolů, byla vybudována struktura lanovek a železnic. Tato struktura fungovala až do odsunu německé populace v roce 1945.",
  },
];

function App() {
  return (
    <ThemeProvider applyTo="body" theme={theme}>
      <Router>
        <Switch>
          <Route path="/map">
            <TimeMapPage objects={objects} />
          </Route>
          <Route path="/photolocator">
            <PhotoLocatorPage />
          </Route>
          <Route path="/info">
            <InfoSearchPage objects={objects} photos={photos} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
