(function () {
  "use strict";

  const boot = window.DATAFLOW_BOOT || {};
  const palettes = {
    Dataflow: ["#1b73e8", "#e34f4f", "#f2b84b", "#3b9564", "#7b61ff", "#2aa6a1"],
    Editorial: ["#202124", "#5f6368", "#d93025", "#f9ab00", "#188038", "#1a73e8"],
    Alpine: ["#006d77", "#83c5be", "#ffddd2", "#e29578", "#264653", "#f4a261"],
    Signal: ["#004e98", "#ff6700", "#c0c0c0", "#3a6ea5", "#ebebeb", "#0f7173"],
    Print: ["#111111", "#555555", "#888888", "#bbbbbb", "#dddddd", "#f2f2f2"],
    Bloom: ["#b71f5c", "#e16462", "#f2bd45", "#2a9d8f", "#2878b5", "#6d5dfc"]
  };

  const translations = {
    de: {
      language: "Sprache", german: "Deutsch", english: "English",
      data: "Daten", visualize: "Visualisieren", annotate: "Beschriften", publish: "Veröffentlichen",
      creating: "Erstellen", demo: "Demo", workflow: "Workflow", saving: "Speichert...", saved: "Gespeichert", ready: "Bereit", localProject: "Lokales Projekt", copied: "Kopiert", notSaved: "Nicht gespeichert",
      uploadData: "Daten hochladen", dropData: "CSV, TSV oder JSON hier ablegen", uploadHint: "Die erste Zeile wird als Spaltenkopf gelesen. JSON sollte ein Array aus Objekten sein.", fileChoose: "Datei auswählen", pasteData: "Direkt einfügen", pasteExample: "Jahr,Produkt,Umsatz\n2024,Atlas,91", importData: "Daten übernehmen", rowsColumns: "{rows} Zeilen, {columns} Spalten",
      passwordProtection: "Passwortschutz", encryptedStored: "Die Daten sind sicher verschlüsselt gespeichert. Methode: {method}.", encryptedWith: "Die Daten sind sicher mit {method} verschlüsselt. Ohne Passwort können Personen mit Webspace-Zugriff die gespeicherten Daten nicht entschlüsseln.", enterPassword: "Passwort eingeben", decryptData: "Daten entschlüsseln", passwordToRemove: "Passwort zum Entfernen", removeProtection: "Passwortschutz entfernen", unencryptedStored: "Die Daten liegen derzeit unverschlüsselt auf dem Server.", setPassword: "Passwort festlegen", confirmPassword: "Passwort wiederholen", encryptData: "Mit Passwort verschlüsseln",
      visualization: "Visualisierung", bar: "Säulen", horizontalBar: "Balken", line: "Linie", area: "Fläche", dot: "Dot-Plot", scatter: "Streudiagramm", pie: "Kreis", dual: "Zwei Y-Achsen", waterfall: "Waterfall", table: "Tabelle", cards: "Kennzahlen", heatmap: "Heatmap", map: "Karte",
      aggregation: "Aggregation", sum: "Summe", average: "Durchschnitt", count: "Anzahl", sorting: "Sortierung", original: "Original", ascending: "Aufsteigend", descending: "Absteigend", category: "X / Kategorie", xValue: "X / Wert", yValue: "Y / Wert", group: "Gruppe / Serie", none: "Keine", label: "Beschriftung", automatic: "Automatisch", columns: "Spalten", tableOptions: "Tabelle", maximumRows: "Maximale Zeilen", sortBy: "Sortieren nach", originalOrder: "Originalreihenfolge", direction: "Richtung", visibleColumns: "Sichtbare Spalten",
      mapType: "Kartentyp", symbolMap: "Symbolkarte", locatorMap: "Locator-Karte", choroplethMap: "Flächenkarte", mapData: "Kartendaten", country: "Land / ISO-M49", countryHint: "Ländernamen müssen den englischen Namen der Weltkarte entsprechen (z. B. Germany) oder als ISO-M49-Code vorliegen (z. B. 276).", latitude: "Latitude", longitude: "Longitude", symbolSize: "Symbolgröße", uniform: "Einheitlich",
      axisLabels: "Achsenbeschriftungen", xAxis: "X-Achse", yAxis: "Y-Achse", columnLabel: "Spaltenlabel", customText: "Eigener Text", xAxisText: "Text unter der X-Achse", yAxisText: "Text an der Y-Achse", xAxisPlaceholder: "z. B. Monat oder Zeitraum", yAxisPlaceholder: "z. B. Umsatz in EUR",
      appearance: "Darstellung", horizontalBars: "Balken horizontal", stackSeries: "Serien stapeln", stackPercent: "Auf 100 % stapeln", showLegend: "Legende anzeigen", showGrid: "Raster anzeigen", showValues: "Werte beschriften", showSymbols: "Punktmarker anzeigen", donut: "Kreis als Donut", smoothLines: "Linien glätten", waterfallTotal: "Gesamtsumme", primaryAxis: "Linke Y-Achse", secondaryAxis: "Rechte Y-Achse", secondaryAxisLabel: "Beschriftung der rechten Y-Achse", columnsAndLine: "Säulen und Linie", twoLines: "Zwei Linien",
      text: "Text", title: "Titel", titleSize: "Titelgröße", description: "Beschreibung", descriptionSize: "Beschreibung Schriftgröße", source: "Quelle", byline: "Byline", theme: "Theme", custom: "Eigene", color: "Farbe", background: "Hintergrund", darkPreview: "Dunkle Vorschau", font: "Schrift", fontSource: "Quelle", systemFont: "Systemschrift", googleFontUrl: "Google Font URL", ownFile: "Eigene Datei", ownFontFile: "Eigene Schriftdatei", active: "Aktiv", format: "Format", width: "Breite", height: "Höhe", padding: "Innenabstand", radius: "Radius",
      projectLink: "Projektlink", linkHint: "Wer diesen Link besitzt, kann das Projekt ansehen und bearbeiten. Es gibt keinen Login und keine Wiederherstellung ohne Link.", copy: "Kopieren", saveNow: "Jetzt speichern", txtLink: "TXT-Link", embed: "Einbetten", copyEmbed: "Embed kopieren", downloadSvg: "SVG herunterladen", downloadPng: "PNG herunterladen", privacy: "Datenschutz", privacyHint: "Die Daten liegen als JSON-Datei auf dem Webspace {domain}. Die zufällige URL ist der Zugriffsschutz; für sensible Daten kann zusätzlich der Passwortschutz unter „Daten“ aktiviert werden.", notSavedYet: "Noch nicht gespeichert",
      noData: "Noch keine Daten geladen.", selectColumn: "Mindestens eine Tabellenspalte auswählen.", previewAfterUpload: "Daten hochladen, dann erscheint hier die Vorschau.", chooseNumeric: "Für diese Visualisierung bitte eine numerische Wertespalte auswählen.", scatterNumeric: "Ein Punktdiagramm benötigt zwei numerische Spalten für X und Y.", choroplethNumeric: "Für eine Flächenkarte bitte eine Länder- und eine numerische Wertespalte auswählen.", mapCoordinates: "Für eine Karte bitte numerische Latitude- und Longitude-Spalten auswählen.", invalidCoordinates: "Die Koordinaten liegen außerhalb der gültigen Bereiche für Latitude und Longitude.", loadingChoropleth: "Flächenkarte wird geladen ...", mapSymbolDescription: "Symbolkarte aus Latitude- und Longitude-Daten", mapLocatorDescription: "Locator-Karte aus Latitude- und Longitude-Daten", mapChoroplethDescription: "Flächenkarte nach Ländern",
      passwordMin: "Bitte ein Passwort mit mindestens 8 Zeichen verwenden.", passwordMismatch: "Die Passwörter stimmen nicht überein.", loadDataFirst: "Bitte zuerst Daten laden.", encryptionFailed: "Die Daten konnten nicht verschlüsselt werden.", decryptFailed: "Das Passwort passt nicht oder die Daten konnten nicht entschlüsselt werden.", removeFailed: "Das Passwort passt nicht. Der Passwortschutz wurde nicht entfernt.", homeConfirm: "Bist du sicher, dass du das aktuelle Projekt und die Projekt-URL gespeichert hast?", decryptBeforeImport: "Bitte die vorhandenen Daten zuerst mit dem Passwort entschlüsseln, bevor neue Daten übernommen werden.", importFailed: "Die Daten konnten nicht gelesen werden. Bitte CSV, TSV oder ein JSON-Array verwenden.", cryptoUnavailable: "WebCrypto ist in diesem Browser oder Kontext nicht verfügbar.", column: "Spalte", row: "Zeile", noGroup: "Ohne Gruppe", value: "Wert", point: "Punkt", unknown: "Unbekannt", createdWith: "Erstellt mit Dataflow", untitledProject: "Unbenanntes Projekt"
    },
    en: {
      language: "Language", german: "Deutsch", english: "English",
      data: "Data", visualize: "Visualize", annotate: "Annotate", publish: "Publish",
      creating: "Create", demo: "Demo", workflow: "Workflow", saving: "Saving...", saved: "Saved", ready: "Ready", localProject: "Local project", copied: "Copied", notSaved: "Not saved",
      uploadData: "Upload data", dropData: "Drop CSV, TSV, or JSON here", uploadHint: "The first row is read as column headers. JSON should be an array of objects.", fileChoose: "Choose file", pasteData: "Paste directly", pasteExample: "Year,Product,Revenue\n2024,Atlas,91", importData: "Import data", rowsColumns: "{rows} rows, {columns} columns",
      passwordProtection: "Password protection", encryptedStored: "The data is securely stored encrypted. Method: {method}.", encryptedWith: "The data is securely encrypted with {method}. Without the password, people with webspace access cannot decrypt the stored data.", enterPassword: "Enter password", decryptData: "Decrypt data", passwordToRemove: "Password to remove protection", removeProtection: "Remove password protection", unencryptedStored: "The data is currently stored unencrypted on the server.", setPassword: "Set password", confirmPassword: "Repeat password", encryptData: "Encrypt with password",
      visualization: "Visualization", bar: "Column", horizontalBar: "Bar", line: "Line", area: "Area", dot: "Dot plot", scatter: "Scatter", pie: "Pie", dual: "Dual axis", waterfall: "Waterfall", table: "Table", cards: "Metrics", heatmap: "Heatmap", map: "Map",
      aggregation: "Aggregation", sum: "Sum", average: "Average", count: "Count", sorting: "Sorting", original: "Original", ascending: "Ascending", descending: "Descending", category: "X / Category", xValue: "X / Value", yValue: "Y / Value", group: "Group / Series", none: "None", label: "Label", automatic: "Automatic", columns: "Columns", tableOptions: "Table", maximumRows: "Maximum rows", sortBy: "Sort by", originalOrder: "Original order", direction: "Direction", visibleColumns: "Visible columns",
      mapType: "Map type", symbolMap: "Symbol map", locatorMap: "Locator map", choroplethMap: "Choropleth map", mapData: "Map data", country: "Country / ISO-M49", countryHint: "Country names must match the English names in the world map (for example, Germany) or use ISO-M49 codes (for example, 276).", latitude: "Latitude", longitude: "Longitude", symbolSize: "Symbol size", uniform: "Uniform",
      axisLabels: "Axis labels", xAxis: "X axis", yAxis: "Y axis", columnLabel: "Column label", customText: "Custom text", xAxisText: "Text below the X axis", yAxisText: "Text beside the Y axis", xAxisPlaceholder: "e.g. month or period", yAxisPlaceholder: "e.g. revenue in EUR",
      appearance: "Appearance", horizontalBars: "Horizontal bars", stackSeries: "Stack series", stackPercent: "Stack to 100%", showLegend: "Show legend", showGrid: "Show grid", showValues: "Show values", showSymbols: "Show point markers", donut: "Show as donut", smoothLines: "Smooth lines", waterfallTotal: "Total", primaryAxis: "Left Y axis", secondaryAxis: "Right Y axis", secondaryAxisLabel: "Right Y-axis label", columnsAndLine: "Columns and line", twoLines: "Two lines",
      text: "Text", title: "Title", titleSize: "Title size", description: "Description", descriptionSize: "Description font size", source: "Source", byline: "Byline", theme: "Theme", custom: "Custom", color: "Color", background: "Background", darkPreview: "Dark preview", font: "Font", fontSource: "Source", systemFont: "System font", googleFontUrl: "Google Font URL", ownFile: "Own file", ownFontFile: "Own font file", active: "Active", format: "Format", width: "Width", height: "Height", padding: "Padding", radius: "Radius",
      projectLink: "Project link", linkHint: "Anyone with this link can view and edit the project. There is no login and no recovery without the link.", copy: "Copy", saveNow: "Save now", txtLink: "TXT link", embed: "Embed", copyEmbed: "Copy embed", downloadSvg: "Download SVG", downloadPng: "Download PNG", privacy: "Privacy", privacyHint: "The data is stored as a JSON file on the webspace {domain}. The random URL protects access; password protection can also be enabled under “Data” for sensitive data.", notSavedYet: "Not saved yet",
      noData: "No data loaded yet.", selectColumn: "Select at least one table column.", previewAfterUpload: "Upload data to see the preview.", chooseNumeric: "Select a numeric value column for this visualization.", scatterNumeric: "A scatter chart needs two numeric columns for X and Y.", choroplethNumeric: "A choropleth map needs a country column and a numeric value column.", mapCoordinates: "A map needs numeric latitude and longitude columns.", invalidCoordinates: "The coordinates are outside the valid latitude and longitude ranges.", loadingChoropleth: "Loading choropleth map ...", mapSymbolDescription: "Symbol map from latitude and longitude data", mapLocatorDescription: "Locator map from latitude and longitude data", mapChoroplethDescription: "Choropleth map by country",
      passwordMin: "Use a password with at least 8 characters.", passwordMismatch: "The passwords do not match.", loadDataFirst: "Load data first.", encryptionFailed: "The data could not be encrypted.", decryptFailed: "The password is incorrect or the data could not be decrypted.", removeFailed: "The password is incorrect. Password protection was not removed.", homeConfirm: "Are you sure you have saved the current project and its project URL?", decryptBeforeImport: "Decrypt the existing data with the password before importing new data.", importFailed: "The data could not be read. Use CSV, TSV, or a JSON array.", cryptoUnavailable: "WebCrypto is not available in this browser or context.", column: "Column", row: "Row", noGroup: "No group", value: "Value", point: "Point", unknown: "Unknown", createdWith: "Created with Dataflow", untitledProject: "Untitled project"
    }
  };

  const sampleRows = [
    { Jahr: "2020", Produkt: "Atlas", Umsatz: 42, Region: "Europa", Ort: "Berlin", Anteil: 18, Lat: 52.52, Lon: 13.405 },
    { Jahr: "2021", Produkt: "Atlas", Umsatz: 58, Region: "Nordamerika", Ort: "New York", Anteil: 24, Lat: 40.713, Lon: -74.006 },
    { Jahr: "2022", Produkt: "Atlas", Umsatz: 64, Region: "Suedamerika", Ort: "Sao Paulo", Anteil: 29, Lat: -23.55, Lon: -46.633 },
    { Jahr: "2023", Produkt: "Atlas", Umsatz: 78, Region: "Afrika", Ort: "Nairobi", Anteil: 35, Lat: -1.286, Lon: 36.817 },
    { Jahr: "2024", Produkt: "Atlas", Umsatz: 91, Region: "Asien", Ort: "Tokio", Anteil: 41, Lat: 35.676, Lon: 139.65 },
    { Jahr: "2020", Produkt: "Pulse", Umsatz: 33, Region: "Europa", Ort: "Berlin", Anteil: 15, Lat: 52.52, Lon: 13.405 },
    { Jahr: "2021", Produkt: "Pulse", Umsatz: 47, Region: "Nordamerika", Ort: "New York", Anteil: 19, Lat: 40.713, Lon: -74.006 },
    { Jahr: "2022", Produkt: "Pulse", Umsatz: 52, Region: "Suedamerika", Ort: "Sao Paulo", Anteil: 21, Lat: -23.55, Lon: -46.633 },
    { Jahr: "2023", Produkt: "Pulse", Umsatz: 73, Region: "Afrika", Ort: "Nairobi", Anteil: 26, Lat: -1.286, Lon: 36.817 },
    { Jahr: "2024", Produkt: "Pulse", Umsatz: 88, Region: "Asien", Ort: "Tokio", Anteil: 31, Lat: 35.676, Lon: 139.65 }
  ];

  const demos = {
    de: [
    {
      meta: {
        title: "Globale Umsätze nach Produkt",
        description: "Fiktive Demo-Daten mit weltweiten Standorten.",
        source: "Quelle: Dataflow Demo",
        byline: "Erstellt mit Dataflow"
      },
      data: {
        rows: sampleRows,
        columns: ["Jahr", "Produkt", "Umsatz", "Region", "Ort", "Anteil", "Lat", "Lon"]
      },
      chart: { type: "map", x: "Ort", y: "Umsatz", group: "Produkt", lat: "Lat", lon: "Lon", label: "Ort" }
    },
    {
      meta: {
        title: "Klinikaufnahmen nach Fachbereich",
        description: "Fiktive Monatswerte für verschiedene Krankenhausbereiche.",
        source: "Quelle: Fiktives Krankenhaus",
        byline: "Erstellt mit Dataflow"
      },
      data: {
        columns: ["Monat", "Fachbereich", "Aufnahmen", "Auslastung"],
        rows: [
          { Monat: "Jan", Fachbereich: "Innere", Aufnahmen: 124, Auslastung: 82 },
          { Monat: "Feb", Fachbereich: "Innere", Aufnahmen: 132, Auslastung: 84 },
          { Monat: "Mrz", Fachbereich: "Innere", Aufnahmen: 148, Auslastung: 88 },
          { Monat: "Jan", Fachbereich: "Chirurgie", Aufnahmen: 96, Auslastung: 76 },
          { Monat: "Feb", Fachbereich: "Chirurgie", Aufnahmen: 105, Auslastung: 79 },
          { Monat: "Mrz", Fachbereich: "Chirurgie", Aufnahmen: 118, Auslastung: 81 },
          { Monat: "Jan", Fachbereich: "Pädiatrie", Aufnahmen: 68, Auslastung: 65 },
          { Monat: "Feb", Fachbereich: "Pädiatrie", Aufnahmen: 74, Auslastung: 69 },
          { Monat: "Mrz", Fachbereich: "Pädiatrie", Aufnahmen: 81, Auslastung: 72 }
        ]
      },
      chart: { type: "bar", x: "Monat", y: "Aufnahmen", group: "Fachbereich", label: "Fachbereich" }
    },
    {
      meta: {
        title: "Energieproduktion nach Quelle",
        description: "Fiktive Jahresdaten für erneuerbare und konventionelle Energieträger.",
        source: "Quelle: Fiktives Energiemonitoring",
        byline: "Erstellt mit Dataflow"
      },
      data: {
        columns: ["Jahr", "Quelle", "GWh", "Kategorie"],
        rows: [
          { Jahr: "2020", Quelle: "Solar", GWh: 320, Kategorie: "Erneuerbar" },
          { Jahr: "2021", Quelle: "Solar", GWh: 410, Kategorie: "Erneuerbar" },
          { Jahr: "2022", Quelle: "Solar", GWh: 520, Kategorie: "Erneuerbar" },
          { Jahr: "2020", Quelle: "Wind", GWh: 680, Kategorie: "Erneuerbar" },
          { Jahr: "2021", Quelle: "Wind", GWh: 740, Kategorie: "Erneuerbar" },
          { Jahr: "2022", Quelle: "Wind", GWh: 810, Kategorie: "Erneuerbar" },
          { Jahr: "2020", Quelle: "Gas", GWh: 590, Kategorie: "Konventionell" },
          { Jahr: "2021", Quelle: "Gas", GWh: 550, Kategorie: "Konventionell" },
          { Jahr: "2022", Quelle: "Gas", GWh: 470, Kategorie: "Konventionell" }
        ]
      },
      chart: { type: "area", x: "Jahr", y: "GWh", group: "Quelle", label: "Quelle" }
    },
    {
      meta: {
        title: "Support-Tickets nach Produkt",
        description: "Fiktive operative Daten für ein SaaS-Support-Team.",
        source: "Quelle: Fiktives Helpdesk-System",
        byline: "Erstellt mit Dataflow"
      },
      data: {
        columns: ["Produkt", "Priorität", "Tickets", "SLA"],
        rows: [
          { Produkt: "Flow CRM", Priorität: "Niedrig", Tickets: 42, SLA: 98 },
          { Produkt: "Flow CRM", Priorität: "Mittel", Tickets: 31, SLA: 94 },
          { Produkt: "Flow CRM", Priorität: "Hoch", Tickets: 12, SLA: 87 },
          { Produkt: "Flow BI", Priorität: "Niedrig", Tickets: 34, SLA: 97 },
          { Produkt: "Flow BI", Priorität: "Mittel", Tickets: 46, SLA: 91 },
          { Produkt: "Flow BI", Priorität: "Hoch", Tickets: 18, SLA: 82 },
          { Produkt: "Flow Ops", Priorität: "Niedrig", Tickets: 28, SLA: 99 },
          { Produkt: "Flow Ops", Priorität: "Mittel", Tickets: 37, SLA: 93 },
          { Produkt: "Flow Ops", Priorität: "Hoch", Tickets: 9, SLA: 90 }
        ]
      },
      chart: { type: "heatmap", x: "Produkt", y: "Tickets", group: "Priorität", label: "Produkt" }
    },
    {
      meta: { title: "Beliebteste Formate", description: "Fiktive Rangfolge der meistgehörten Podcast-Formate.", source: "Quelle: Dataflow Demo", byline: "Erstellt mit Dataflow" },
      data: {
        columns: ["Format", "Hörerinnen und Hörer"],
        rows: [
          { Format: "Nachrichten", "Hörerinnen und Hörer": 82 }, { Format: "Wissen", "Hörerinnen und Hörer": 68 }, { Format: "Comedy", "Hörerinnen und Hörer": 61 }, { Format: "Interview", "Hörerinnen und Hörer": 47 }, { Format: "Kultur", "Hörerinnen und Hörer": 39 }
        ]
      },
      chart: { type: "barHorizontal", x: "Format", y: "Hörerinnen und Hörer", label: "Format", sort: "desc", showLabels: true }
    },
    {
      meta: { title: "Reaktionszeit nach Team", description: "Fiktive durchschnittliche Antwortzeit in Minuten.", source: "Quelle: Fiktiver Servicebericht", byline: "Erstellt mit Dataflow" },
      data: {
        columns: ["Monat", "Team", "Minuten"],
        rows: [
          { Monat: "Jan", Team: "Support", Minuten: 42 }, { Monat: "Jan", Team: "Vertrieb", Minuten: 68 }, { Monat: "Jan", Team: "Erfolg", Minuten: 31 },
          { Monat: "Feb", Team: "Support", Minuten: 37 }, { Monat: "Feb", Team: "Vertrieb", Minuten: 59 }, { Monat: "Feb", Team: "Erfolg", Minuten: 28 },
          { Monat: "Mrz", Team: "Support", Minuten: 35 }, { Monat: "Mrz", Team: "Vertrieb", Minuten: 52 }, { Monat: "Mrz", Team: "Erfolg", Minuten: 26 }
        ]
      },
      chart: { type: "dot", x: "Monat", y: "Minuten", group: "Team", label: "Team", showLegend: true }
    },
    {
      meta: { title: "Vom Umsatz zum Ergebnis", description: "Fiktive monatliche Überleitung zum operativen Ergebnis.", source: "Quelle: Dataflow Demo", byline: "Erstellt mit Dataflow" },
      data: {
        columns: ["Position", "Betrag"],
        rows: [
          { Position: "Umsatz", Betrag: 1240 }, { Position: "Material", Betrag: -410 }, { Position: "Personal", Betrag: -355 }, { Position: "Marketing", Betrag: -96 }, { Position: "Sonstiges", Betrag: -74 }
        ]
      },
      chart: { type: "waterfall", x: "Position", y: "Betrag", label: "Position", showLabels: true, waterfallTotal: true }
    },
    {
      meta: { title: "Reichweite und Conversion", description: "Fiktive Kampagnenwerte mit zwei unterschiedlichen Skalen.", source: "Quelle: Fiktives Marketing-Dashboard", byline: "Erstellt mit Dataflow" },
      data: {
        columns: ["Monat", "Reichweite", "Conversion"],
        rows: [
          { Monat: "Jan", Reichweite: 18200, Conversion: 2.8 }, { Monat: "Feb", Reichweite: 21400, Conversion: 3.1 }, { Monat: "Mrz", Reichweite: 24900, Conversion: 3.6 }, { Monat: "Apr", Reichweite: 27800, Conversion: 4.2 }
        ]
      },
      chart: { type: "dual", x: "Monat", y: "Reichweite", y2: "Conversion", label: "Monat", y2AxisLabel: "Conversion in %", showLegend: true, showLabels: true }
    }
    ],
    en: [
      {
        meta: {
          title: "Global revenue by product",
          description: "Fictional demo data with locations around the world.",
          source: "Source: Dataflow demo",
          byline: "Created with Dataflow"
        },
        data: {
          columns: ["Year", "Product", "Revenue", "Region", "Location", "Share", "Lat", "Lon"],
          rows: [
            { Year: "2020", Product: "Atlas", Revenue: 42, Region: "Europe", Location: "Berlin", Share: 18, Lat: 52.52, Lon: 13.405 },
            { Year: "2021", Product: "Atlas", Revenue: 58, Region: "North America", Location: "New York", Share: 24, Lat: 40.713, Lon: -74.006 },
            { Year: "2022", Product: "Atlas", Revenue: 64, Region: "South America", Location: "Sao Paulo", Share: 29, Lat: -23.55, Lon: -46.633 },
            { Year: "2023", Product: "Atlas", Revenue: 78, Region: "Africa", Location: "Nairobi", Share: 35, Lat: -1.286, Lon: 36.817 },
            { Year: "2024", Product: "Atlas", Revenue: 91, Region: "Asia", Location: "Tokyo", Share: 41, Lat: 35.676, Lon: 139.65 },
            { Year: "2020", Product: "Pulse", Revenue: 33, Region: "Europe", Location: "Berlin", Share: 15, Lat: 52.52, Lon: 13.405 },
            { Year: "2021", Product: "Pulse", Revenue: 47, Region: "North America", Location: "New York", Share: 19, Lat: 40.713, Lon: -74.006 },
            { Year: "2022", Product: "Pulse", Revenue: 52, Region: "South America", Location: "Sao Paulo", Share: 21, Lat: -23.55, Lon: -46.633 },
            { Year: "2023", Product: "Pulse", Revenue: 73, Region: "Africa", Location: "Nairobi", Share: 26, Lat: -1.286, Lon: 36.817 },
            { Year: "2024", Product: "Pulse", Revenue: 88, Region: "Asia", Location: "Tokyo", Share: 31, Lat: 35.676, Lon: 139.65 }
          ]
        },
        chart: { type: "map", x: "Location", y: "Revenue", group: "Product", lat: "Lat", lon: "Lon", label: "Location" }
      },
      {
        meta: {
          title: "Hospital admissions by department",
          description: "Fictional monthly figures for several hospital departments.",
          source: "Source: Fictional hospital",
          byline: "Created with Dataflow"
        },
        data: {
          columns: ["Month", "Department", "Admissions", "Occupancy"],
          rows: [
            { Month: "Jan", Department: "Medicine", Admissions: 124, Occupancy: 82 },
            { Month: "Feb", Department: "Medicine", Admissions: 132, Occupancy: 84 },
            { Month: "Mar", Department: "Medicine", Admissions: 148, Occupancy: 88 },
            { Month: "Jan", Department: "Surgery", Admissions: 96, Occupancy: 76 },
            { Month: "Feb", Department: "Surgery", Admissions: 105, Occupancy: 79 },
            { Month: "Mar", Department: "Surgery", Admissions: 118, Occupancy: 81 },
            { Month: "Jan", Department: "Pediatrics", Admissions: 68, Occupancy: 65 },
            { Month: "Feb", Department: "Pediatrics", Admissions: 74, Occupancy: 69 },
            { Month: "Mar", Department: "Pediatrics", Admissions: 81, Occupancy: 72 }
          ]
        },
        chart: { type: "bar", x: "Month", y: "Admissions", group: "Department", label: "Department" }
      },
      {
        meta: {
          title: "Energy generation by source",
          description: "Fictional annual figures for renewable and conventional energy sources.",
          source: "Source: Fictional energy monitor",
          byline: "Created with Dataflow"
        },
        data: {
          columns: ["Year", "Source", "GWh", "Category"],
          rows: [
            { Year: "2020", Source: "Solar", GWh: 320, Category: "Renewable" },
            { Year: "2021", Source: "Solar", GWh: 410, Category: "Renewable" },
            { Year: "2022", Source: "Solar", GWh: 520, Category: "Renewable" },
            { Year: "2020", Source: "Wind", GWh: 680, Category: "Renewable" },
            { Year: "2021", Source: "Wind", GWh: 740, Category: "Renewable" },
            { Year: "2022", Source: "Wind", GWh: 810, Category: "Renewable" },
            { Year: "2020", Source: "Gas", GWh: 590, Category: "Conventional" },
            { Year: "2021", Source: "Gas", GWh: 550, Category: "Conventional" },
            { Year: "2022", Source: "Gas", GWh: 470, Category: "Conventional" }
          ]
        },
        chart: { type: "area", x: "Year", y: "GWh", group: "Source", label: "Source" }
      },
      {
        meta: {
          title: "Support tickets by product",
          description: "Fictional operational data for a SaaS support team.",
          source: "Source: Fictional help desk system",
          byline: "Created with Dataflow"
        },
        data: {
          columns: ["Product", "Priority", "Tickets", "SLA"],
          rows: [
            { Product: "Flow CRM", Priority: "Low", Tickets: 42, SLA: 98 },
            { Product: "Flow CRM", Priority: "Medium", Tickets: 31, SLA: 94 },
            { Product: "Flow CRM", Priority: "High", Tickets: 12, SLA: 87 },
            { Product: "Flow BI", Priority: "Low", Tickets: 34, SLA: 97 },
            { Product: "Flow BI", Priority: "Medium", Tickets: 46, SLA: 91 },
            { Product: "Flow BI", Priority: "High", Tickets: 18, SLA: 82 },
            { Product: "Flow Ops", Priority: "Low", Tickets: 28, SLA: 99 },
            { Product: "Flow Ops", Priority: "Medium", Tickets: 37, SLA: 93 },
            { Product: "Flow Ops", Priority: "High", Tickets: 9, SLA: 90 }
          ]
        },
      chart: { type: "heatmap", x: "Product", y: "Tickets", group: "Priority", label: "Product" }
    },
    {
      meta: { title: "Most popular formats", description: "Fictional ranking of the most listened-to podcast formats.", source: "Source: Dataflow demo", byline: "Created with Dataflow" },
      data: {
        columns: ["Format", "Listeners"],
        rows: [{ Format: "News", Listeners: 82 }, { Format: "Science", Listeners: 68 }, { Format: "Comedy", Listeners: 61 }, { Format: "Interview", Listeners: 47 }, { Format: "Culture", Listeners: 39 }]
      },
      chart: { type: "barHorizontal", x: "Format", y: "Listeners", label: "Format", sort: "desc", showLabels: true }
    },
    {
      meta: { title: "Response time by team", description: "Fictional average response time in minutes.", source: "Source: Fictional service report", byline: "Created with Dataflow" },
      data: {
        columns: ["Month", "Team", "Minutes"],
        rows: [
          { Month: "Jan", Team: "Support", Minutes: 42 }, { Month: "Jan", Team: "Sales", Minutes: 68 }, { Month: "Jan", Team: "Success", Minutes: 31 },
          { Month: "Feb", Team: "Support", Minutes: 37 }, { Month: "Feb", Team: "Sales", Minutes: 59 }, { Month: "Feb", Team: "Success", Minutes: 28 },
          { Month: "Mar", Team: "Support", Minutes: 35 }, { Month: "Mar", Team: "Sales", Minutes: 52 }, { Month: "Mar", Team: "Success", Minutes: 26 }
        ]
      },
      chart: { type: "dot", x: "Month", y: "Minutes", group: "Team", label: "Team", showLegend: true }
    },
    {
      meta: { title: "From revenue to profit", description: "Fictional monthly bridge to operating profit.", source: "Source: Dataflow demo", byline: "Created with Dataflow" },
      data: {
        columns: ["Item", "Amount"],
        rows: [{ Item: "Revenue", Amount: 1240 }, { Item: "Materials", Amount: -410 }, { Item: "Payroll", Amount: -355 }, { Item: "Marketing", Amount: -96 }, { Item: "Other", Amount: -74 }]
      },
      chart: { type: "waterfall", x: "Item", y: "Amount", label: "Item", showLabels: true, waterfallTotal: true }
    },
    {
      meta: { title: "Reach and conversion", description: "Fictional campaign figures with two different scales.", source: "Source: Fictional marketing dashboard", byline: "Created with Dataflow" },
      data: {
        columns: ["Month", "Reach", "Conversion"],
        rows: [{ Month: "Jan", Reach: 18200, Conversion: 2.8 }, { Month: "Feb", Reach: 21400, Conversion: 3.1 }, { Month: "Mar", Reach: 24900, Conversion: 3.6 }, { Month: "Apr", Reach: 27800, Conversion: 4.2 }]
      },
      chart: { type: "dual", x: "Month", y: "Reach", y2: "Conversion", label: "Month", y2AxisLabel: "Conversion %", showLegend: true, showLabels: true }
    }
    ]
  };

  const defaults = {
    version: 1,
    language: detectLanguage(),
    meta: {
      title: "Unbenanntes Projekt",
      description: "",
      source: "",
      byline: "Erstellt mit Dataflow"
    },
    data: {
      rows: [],
      columns: []
    },
    security: {
      encrypted: false,
      method: "",
      kdf: "",
      iterations: 0,
      salt: "",
      iv: "",
      ciphertext: ""
    },
    chart: {
      type: "bar",
      x: "Jahr",
      y: "Umsatz",
      y2: "",
      group: "Produkt",
      lat: "Lat",
      lon: "Lon",
      label: "Ort",
      aggregate: "sum",
      sort: "none",
      horizontal: false,
      stacked: false,
      stackedPercent: false,
      showLegend: true,
      showGrid: true,
      showLabels: false,
      showSymbols: true,
      waterfallTotal: true,
      xAxisLabelMode: "none",
      xAxisLabel: "",
      yAxisLabelMode: "none",
      yAxisLabel: "",
      y2AxisLabel: "",
      dualMode: "columns-line",
      curve: false,
      donut: true,
      tableLimit: 100,
      tableColumns: null,
      tableSort: "",
      tableSortDirection: "asc",
      mapMode: "symbol",
      mapRegion: ""
    },
    style: {
      palette: "Dataflow",
      customColors: ["#1b73e8", "#e34f4f", "#f2b84b", "#3b9564", "#7b61ff", "#2aa6a1"],
      background: "#ffffff",
      dark: false,
      textColor: "#151515",
      font: "Inter",
      fontMode: "system",
      googleFontUrl: "",
      uploadedFontName: "",
      uploadedFontData: "",
      uploadedFontFormat: "",
      width: 860,
      height: 440,
      titleSize: 28,
      descriptionSize: 16,
      chartPadding: 34,
      rounded: 4
    }
  };

  let state = clone(defaults);
  let token = boot.token || "";
  let activeTab = "upload";
  let saving = false;
  let saveTimer = null;
  let lastSavedAt = "";
  let sessionPassword = "";
  let worldMapData = null;
  let worldMapLoading = false;
  const appBase = boot.base || "./";

  const app = document.getElementById("app");

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function detectLanguage() {
    const browserLanguages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "de"];
    return browserLanguages.some((language) => String(language).toLowerCase().startsWith("en")) ? "en" : "de";
  }

  function language() {
    return state.language === "en" ? "en" : "de";
  }

  function t(key, values = {}) {
    const message = (translations[language()] && translations[language()][key]) || translations.de[key] || key;
    return message.replace(/\{(\w+)\}/g, (match, name) => values[name] === undefined ? match : String(values[name]));
  }

  function languageSwitch() {
    return `<label class="language-switch"><span class="visually-hidden">${esc(t("language"))}</span><select data-language aria-label="${esc(t("language"))}"><option value="de"${language() === "de" ? " selected" : ""}>${esc(t("german"))}</option><option value="en"${language() === "en" ? " selected" : ""}>${esc(t("english"))}</option></select></label>`;
  }

  function localizeProjectDefaults(project) {
    project.meta.title = t("untitledProject");
    project.meta.byline = t("createdWith");
    return project;
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char]));
  }

  function num(value) {
    const parsed = parseNumber(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function parseNumber(value) {
    if (typeof value === "number") return Number.isFinite(value) ? value : Number.NaN;
    const cleaned = String(value ?? "").trim().replace(/\s/g, "").replace(",", ".");
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : Number.NaN;
  }

  function isNumericColumn(column) {
    const rows = state.data.rows.slice(0, 30);
    return rows.length > 0 && rows.some((row) => String(row[column] ?? "").trim() !== "") &&
      rows.every((row) => String(row[column] ?? "").trim() === "" || Number.isFinite(parseNumber(row[column])));
  }

  function columns() {
    return state.data.columns || [];
  }

  function columnOptions(selected, numericOnly) {
    return columns()
      .filter((col) => !numericOnly || isNumericColumn(col))
      .map((col) => `<option value="${esc(col)}"${col === selected ? " selected" : ""}>${esc(col)}</option>`)
      .join("");
  }

  function projectUrl(kind) {
    const base = `${location.origin}${appBase.replace(/\/$/, "")}`;
    if (!token) return location.href;
    if (kind === "embed") return `${base}/embed/${token}`;
    return `${base}/p/${token}`;
  }

  function apiUrl(query) {
    return `${appBase}api.php${query}`;
  }

  function chartColors() {
    if (state.style.palette === "Eigenes") return state.style.customColors || defaults.style.customColors;
    return palettes[state.style.palette] || palettes.Dataflow;
  }

  function fontStack() {
    return `${cssFontName(activeFontName())}, system-ui, sans-serif`;
  }

  function activeFontName() {
    if (state.style.fontMode === "upload" && state.style.uploadedFontName) return state.style.uploadedFontName;
    if (state.style.fontMode === "google") return googleFontFamily(state.style.googleFontUrl) || state.style.font || "Inter";
    return state.style.font || "Inter";
  }

  function cssFontName(name) {
    const safe = String(name || "Inter").replace(/[\\"]/g, "");
    return /[^a-zA-Z0-9_-]/.test(safe) ? `"${safe}"` : safe;
  }

  function applyFontAssets() {
    let uploadStyle = document.getElementById("dataflow-uploaded-font");
    if (state.style.fontMode === "upload" && state.style.uploadedFontData) {
      if (!uploadStyle) {
        uploadStyle = document.createElement("style");
        uploadStyle.id = "dataflow-uploaded-font";
        document.head.appendChild(uploadStyle);
      }
      uploadStyle.textContent = `@font-face{font-family:${cssFontName(activeFontName())};src:url("${state.style.uploadedFontData}") format("${state.style.uploadedFontFormat || "woff2"}");font-weight:100 900;font-style:normal;font-display:swap;}`;
    } else if (uploadStyle) {
      uploadStyle.remove();
    }

    let googleLink = document.getElementById("dataflow-google-font");
    const googleHref = state.style.fontMode === "google" ? googleFontCssUrl(state.style.googleFontUrl) : "";
    if (googleHref) {
      if (!googleLink) {
        googleLink = document.createElement("link");
        googleLink.id = "dataflow-google-font";
        googleLink.rel = "stylesheet";
        document.head.appendChild(googleLink);
      }
      googleLink.href = googleHref;
    } else if (googleLink) {
      googleLink.remove();
    }
  }

  function googleFontFamily(input) {
    const value = String(input || "").trim();
    if (!value) return "";
    try {
      const url = new URL(value.startsWith("http") ? value : `https://${value}`);
      if (url.hostname === "fonts.googleapis.com") {
        const family = url.searchParams.get("family") || "";
        return family.split(":")[0].replace(/\+/g, " ");
      }
      if (url.hostname === "fonts.google.com") {
        const parts = url.pathname.split("/").filter(Boolean);
        const name = parts[0] === "specimen" ? parts[1] : parts.at(-1);
        return decodeURIComponent(String(name || "")).replace(/\+/g, " ");
      }
    } catch (error) {
      return "";
    }
    return "";
  }

  function googleFontCssUrl(input) {
    const family = googleFontFamily(input);
    if (!family) return "";
    try {
      const url = new URL(String(input).startsWith("http") ? input : `https://${input}`);
      if (url.hostname === "fonts.googleapis.com") return url.href;
    } catch (error) {
      return "";
    }
    return `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family).replace(/%20/g, "+")}:wght@400;500;600;700&display=swap`;
  }

  function setStatus(text) {
    const el = document.querySelector("[data-status]");
    if (el) el.textContent = text;
  }

  function currentDomain() {
    return location.host || "dieser Domain";
  }

  function encryptionMethodText() {
    return state.security.method || "AES-GCM 256 Bit mit PBKDF2-SHA-256";
  }

  function cryptoAvailable() {
    return Boolean(window.crypto && window.crypto.subtle && window.TextEncoder);
  }

  function bytesToBase64(bytes) {
    let binary = "";
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  }

  function base64ToBytes(value) {
    return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
  }

  async function deriveEncryptionKey(password, salt, iterations) {
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  }

  async function encryptRows(password) {
    if (!cryptoAvailable()) throw new Error(t("cryptoUnavailable"));
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const iterations = 210000;
    const key = await deriveEncryptionKey(password, salt, iterations);
    const encoded = new TextEncoder().encode(JSON.stringify(state.data));
    const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoded));
    return {
      encrypted: true,
      method: "AES-GCM 256 Bit mit PBKDF2-SHA-256",
      kdf: "PBKDF2-SHA-256",
      iterations,
      salt: bytesToBase64(salt),
      iv: bytesToBase64(iv),
      ciphertext: bytesToBase64(ciphertext)
    };
  }

  async function decryptRows(password) {
    const security = state.security || {};
    const key = await deriveEncryptionKey(password, base64ToBytes(security.salt), Number(security.iterations) || 210000);
    const plain = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: base64ToBytes(security.iv) },
      key,
      base64ToBytes(security.ciphertext)
    );
    return JSON.parse(new TextDecoder().decode(plain));
  }

  async function prepareProjectForSave() {
    const project = clone(state);
    if (state.security.encrypted) {
      if (sessionPassword && state.data.rows.length) {
        project.security = await encryptRows(sessionPassword);
        state.security = clone(project.security);
      }
      project.data = { rows: [], columns: [] };
    }
    return project;
  }

  function render() {
    document.documentElement.lang = language();
    if (boot.home && !token) {
      renderHome();
      return;
    }

    if (boot.embed) {
      renderEmbed();
      return;
    }

    app.innerHTML = `
      <main class="app-shell">
        <header class="topbar">
          <button class="brand brand-button" data-go-home><span class="brand-mark"></span><span>Dataflow</span></button>
          <nav class="tabs" aria-label="${esc(t("workflow"))}">
            ${tabButton("upload", "1", t("data"))}
            ${tabButton("visualize", "2", t("visualize"))}
            ${tabButton("annotate", "3", t("annotate"))}
            ${tabButton("publish", "4", t("publish"))}
          </nav>
          <div class="topbar-actions">${languageSwitch()}<div class="status" data-status>${saving ? t("saving") : statusText()}</div></div>
        </header>
        <div class="workspace">
          <aside class="sidebar">${renderSidebar()}</aside>
          <section class="preview-pane">
            <div class="preview-frame">${renderVisualization()}</div>
          </section>
        </div>
      </main>
    `;

    bindEvents();
  }

  function renderHome() {
    document.documentElement.lang = language();
    app.innerHTML = `
      <main class="start-shell">
        <header class="start-topbar">
          <div class="brand"><span class="brand-mark"></span><span>Dataflow</span></div>
          ${languageSwitch()}
        </header>
        <section class="start-center">
          <button class="start-create" data-start-empty>${esc(t("creating"))}</button>
        </section>
        <button class="start-demo" data-start-demo>${esc(t("demo"))}</button>
      </main>
    `;
    bindHomeEvents();
  }

  function bindHomeEvents() {
    const select = document.querySelector("[data-language]");
    if (select) select.addEventListener("change", () => {
      state.language = select.value === "en" ? "en" : "de";
      renderHome();
    });
    const emptyButton = document.querySelector("[data-start-empty]");
    if (emptyButton) {
      emptyButton.addEventListener("click", () => startProject(false));
    }
    const demoButton = document.querySelector("[data-start-demo]");
    if (demoButton) {
      demoButton.addEventListener("click", () => startProject(true));
    }
  }

  function startProject(useDemo) {
    const selectedLanguage = language();
    boot.home = false;
    token = "";
    state = useDemo ? demoProject() : localizeProjectDefaults(clone(defaults));
    state.language = selectedLanguage;
    activeTab = "upload";
    lastSavedAt = "";
    sessionPassword = "";
    render();
    queueSave();
  }

  function demoProject() {
    const project = clone(defaults);
    const availableDemos = demos[language()] || demos.de;
    const demo = clone(availableDemos[Math.floor(Math.random() * availableDemos.length)]);
    project.meta = Object.assign(project.meta, demo.meta);
    project.data = demo.data;
    project.chart = Object.assign(project.chart, demo.chart);
    return project;
  }

  function renderEmbed() {
    app.innerHTML = `
      <main class="app-shell">
        <div class="workspace">
          <section class="preview-pane">
            <div class="preview-frame">${renderVisualization()}</div>
          </section>
        </div>
      </main>
    `;
  }

  function tabButton(id, step, label) {
    return `<button class="tab ${activeTab === id ? "active" : ""}" data-tab="${id}"><span class="tab-step">${esc(step)}</span><span>${esc(label)}</span></button>`;
  }

  function statusText() {
    if (!token) return t("localProject");
    if (lastSavedAt) return t("saved");
    return t("ready");
  }

  function renderSidebar() {
    return `
      <div class="section ${activeTab === "upload" ? "active" : ""}" data-section="upload">${renderUpload()}</div>
      <div class="section ${activeTab === "visualize" ? "active" : ""}" data-section="visualize">${renderVisualize()}</div>
      <div class="section ${activeTab === "annotate" ? "active" : ""}" data-section="annotate">${renderAnnotate()}</div>
      <div class="section ${activeTab === "publish" ? "active" : ""}" data-section="publish">${renderPublish()}</div>
    `;
  }

  function renderUpload() {
    const rows = state.data.rows || [];
    return `
      <div class="panel">
        <h2 class="panel-title">${esc(t("uploadData"))}</h2>
        <div class="dropzone" data-dropzone>
          <strong>${esc(t("dropData"))}</strong>
          <span class="hint">${esc(t("uploadHint"))}</span>
          <label class="file-select">${esc(t("fileChoose"))}<input type="file" data-file accept=".csv,.tsv,.txt,.json,application/json,text/csv"></label>
        </div>
      </div>
      <div class="panel">
        <label>${esc(t("pasteData"))}
          <textarea data-paste placeholder="${esc(t("pasteExample"))}"></textarea>
        </label>
        <button data-import-paste>${esc(t("importData"))}</button>
      </div>
      <div class="panel">
        <h2 class="panel-title">${esc(t("rowsColumns", { rows: rows.length, columns: columns().length }))}</h2>
        <div class="data-table-wrap">${renderDataTable(rows.slice(0, 50))}</div>
      </div>
      <div class="panel">
        <h2 class="panel-title">${esc(t("passwordProtection"))}</h2>
        ${renderEncryptionPanel()}
      </div>
    `;
  }

  function renderEncryptionPanel() {
    if (state.security.encrypted && !state.data.rows.length) {
      return `
        <div class="notice good">${esc(t("encryptedStored", { method: encryptionMethodText() }))}</div>
        <label>${esc(t("enterPassword"))}<input type="password" data-unlock-password autocomplete="current-password"></label>
        <div class="small-actions">
          <button class="primary" data-unlock-data>${esc(t("decryptData"))}</button>
        </div>
      `;
    }

    if (state.security.encrypted) {
      return `
        <div class="notice good">${esc(t("encryptedWith", { method: encryptionMethodText() }))}</div>
        <label>${esc(t("passwordToRemove"))}<input type="password" data-remove-password autocomplete="current-password"></label>
        <div class="small-actions">
          <button data-remove-encryption>${esc(t("removeProtection"))}</button>
        </div>
      `;
    }

    return `
      <div class="notice">${esc(t("unencryptedStored"))}</div>
      <label>${esc(t("setPassword"))}<input type="password" data-encrypt-password autocomplete="new-password"></label>
      <label>${esc(t("confirmPassword"))}<input type="password" data-encrypt-password-confirm autocomplete="new-password"></label>
      <div class="small-actions">
        <button class="primary" data-encrypt-data>${esc(t("encryptData"))}</button>
      </div>
    `;
  }

  function renderVisualize() {
    const type = state.chart.type;
    const axisTypes = ["bar", "barHorizontal", "line", "area", "dot", "scatter", "dual", "waterfall", "heatmap"];
    return `
      <div class="panel">
        <h2 class="panel-title">${esc(t("visualization"))}</h2>
        <div class="chart-types">
          ${typeButton("bar", t("bar"), iconBars())}
          ${typeButton("barHorizontal", t("horizontalBar"), iconHorizontalBars())}
          ${typeButton("line", t("line"), iconLine())}
          ${typeButton("area", t("area"), iconArea())}
          ${typeButton("dot", t("dot"), iconDot())}
          ${typeButton("scatter", t("scatter"), iconScatter())}
          ${typeButton("pie", t("pie"), iconPie())}
          ${typeButton("dual", t("dual"), iconDualAxis())}
          ${typeButton("waterfall", t("waterfall"), iconWaterfall())}
          ${typeButton("table", t("table"), iconTable())}
          ${typeButton("cards", t("cards"), iconCards())}
          ${typeButton("heatmap", t("heatmap"), iconHeat())}
          ${typeButton("map", t("map"), iconMap())}
        </div>
      </div>
      ${renderVisualizeColumns(type)}
      ${axisTypes.includes(type) ? renderAxisControls() : ""}
      ${renderVisualizeAppearance(type)}
    `;
  }

  function renderVisualizeColumns(type) {
    const aggregation = `<label>${esc(t("aggregation"))}<select data-bind="chart.aggregate">
      ${option("sum", t("sum"), state.chart.aggregate)}
      ${option("avg", t("average"), state.chart.aggregate)}
      ${option("count", t("count"), state.chart.aggregate)}
    </select></label>`;
    const sorting = `<label>${esc(t("sorting"))}<select data-bind="chart.sort">
      ${option("none", t("original"), state.chart.sort)}
      ${option("asc", t("ascending"), state.chart.sort)}
      ${option("desc", t("descending"), state.chart.sort)}
    </select></label>`;
    const category = `<label>${esc(t("category"))}<select data-bind="chart.x">${columnOptions(state.chart.x, false)}</select></label>`;
    const numericX = `<label>${esc(t("xValue"))}<select data-bind="chart.x">${columnOptions(state.chart.x, true)}</select></label>`;
    const value = `<label>${esc(t("yValue"))}<select data-bind="chart.y">${columnOptions(state.chart.y, true)}</select></label>`;
    const secondaryValue = `<label>${esc(t("secondaryAxis"))}<select data-bind="chart.y2">${columnOptions(state.chart.y2, true)}</select></label>`;
    const group = `<label>${esc(t("group"))}<select data-bind="chart.group"><option value="">${esc(t("none"))}</option>${columnOptions(state.chart.group, false)}</select></label>`;
    const label = `<label>${esc(t("label"))}<select data-bind="chart.label"><option value="">${esc(t("automatic"))}</option>${columnOptions(state.chart.label, false)}</select></label>`;

    if (type === "table") {
      const visibleColumns = state.chart.tableColumns;
      return `<div class="panel"><h2 class="panel-title">${esc(t("tableOptions"))}</h2>
        <div class="field-row"><label>${esc(t("maximumRows"))}<input type="number" min="1" max="1000" data-bind="chart.tableLimit" value="${esc(state.chart.tableLimit)}"></label><label>${esc(t("sortBy"))}<select data-bind="chart.tableSort"><option value="">${esc(t("originalOrder"))}</option>${columnOptions(state.chart.tableSort, false)}</select></label></div>
        ${state.chart.tableSort ? `<label>${esc(t("direction"))}<select data-bind="chart.tableSortDirection">${option("asc", t("ascending"), state.chart.tableSortDirection)}${option("desc", t("descending"), state.chart.tableSortDirection)}</select></label>` : ""}
        <div class="table-columns"><span class="hint">${esc(t("visibleColumns"))}</span>${columns().map((column) => `<label class="check-option"><input type="checkbox" data-table-column="${esc(column)}"${!Array.isArray(visibleColumns) || visibleColumns.includes(column) ? " checked" : ""}><span>${esc(column)}</span></label>`).join("")}</div>
      </div>`;
    }
    if (type === "map") {
      const mapMode = `<label>${esc(t("mapType"))}<select data-bind="chart.mapMode">${option("symbol", t("symbolMap"), state.chart.mapMode)}${option("locator", t("locatorMap"), state.chart.mapMode)}${option("choropleth", t("choroplethMap"), state.chart.mapMode)}</select></label>`;
      if (state.chart.mapMode === "choropleth") {
        return `<div class="panel"><h2 class="panel-title">${esc(t("mapData"))}</h2>
          ${mapMode}<div class="field-row"><label>${esc(t("country"))}<select data-bind="chart.mapRegion">${columnOptions(state.chart.mapRegion, false)}</select></label>${value}</div>
          <div class="field-row">${aggregation}${sorting}</div><div class="hint">${esc(t("countryHint"))}</div>
        </div>`;
      }
      return `<div class="panel"><h2 class="panel-title">${esc(t("mapData"))}</h2>
        ${mapMode}<div class="field-row"><label>${esc(t("latitude"))}<select data-bind="chart.lat"><option value="">${esc(t("none"))}</option>${columnOptions(state.chart.lat, true)}</select></label><label>${esc(t("longitude"))}<select data-bind="chart.lon"><option value="">${esc(t("none"))}</option>${columnOptions(state.chart.lon, true)}</select></label></div>
        <div class="field-row">${state.chart.mapMode === "symbol" ? `<label>${esc(t("symbolSize"))}<select data-bind="chart.y"><option value="">${esc(t("uniform"))}</option>${columnOptions(state.chart.y, true)}</select></label>` : ""}${label}</div>
      </div>`;
    }
    if (type === "scatter") {
      return `<div class="panel"><h2 class="panel-title">${esc(t("columns"))}</h2><div class="field-row">${numericX}${value}</div><div class="field-row">${label}</div></div>`;
    }
    if (type === "dual") {
      return `<div class="panel"><h2 class="panel-title">${esc(t("columns"))}</h2>
        <label>${esc(t("category"))}<select data-bind="chart.x">${columnOptions(state.chart.x, false)}</select></label>
        <div class="field-row"><label>${esc(t("primaryAxis"))}<select data-bind="chart.y">${columnOptions(state.chart.y, true)}</select></label>${secondaryValue}</div>
        <div class="field-row">${aggregation}${sorting}</div>
        <label>${esc(t("appearance"))}<select data-bind="chart.dualMode">${option("columns-line", t("columnsAndLine"), state.chart.dualMode)}${option("lines", t("twoLines"), state.chart.dualMode)}</select></label>
        <label>${esc(t("secondaryAxisLabel"))}<input data-bind="chart.y2AxisLabel" value="${esc(state.chart.y2AxisLabel || "")}" placeholder="${esc(state.chart.y2 || "")}"></label>
      </div>`;
    }
    if (type === "pie" || type === "cards" || type === "waterfall") {
      return `<div class="panel"><h2 class="panel-title">${esc(t("columns"))}</h2><div class="field-row">${category}${value}</div><div class="field-row">${aggregation}${sorting}</div></div>`;
    }
    return `<div class="panel"><h2 class="panel-title">${esc(t("columns"))}</h2>
      <div class="field-row">${category}${value}</div>
      <div class="field-row">${group}</div>
      <div class="field-row">${aggregation}${sorting}</div>
    </div>`;
  }

  function renderAxisControls() {
    return `<div class="panel">
      <h2 class="panel-title">${esc(t("axisLabels"))}</h2>
      <div class="field-row">
        <label>${esc(t("xAxis"))}<select data-bind="chart.xAxisLabelMode">
          ${option("none", t("none"), state.chart.xAxisLabelMode)}
          ${option("column", t("columnLabel"), state.chart.xAxisLabelMode)}
          ${option("custom", t("customText"), state.chart.xAxisLabelMode)}
        </select></label>
        <label>${esc(t("yAxis"))}<select data-bind="chart.yAxisLabelMode">
          ${option("none", t("none"), state.chart.yAxisLabelMode)}
          ${option("column", t("columnLabel"), state.chart.yAxisLabelMode)}
          ${option("custom", t("customText"), state.chart.yAxisLabelMode)}
        </select></label>
      </div>
      ${state.chart.xAxisLabelMode === "custom" ? `<label>${esc(t("xAxisText"))}<input data-bind="chart.xAxisLabel" value="${esc(state.chart.xAxisLabel || "")}" placeholder="${esc(t("xAxisPlaceholder"))}"></label>` : ""}
      ${state.chart.yAxisLabelMode === "custom" ? `<label>${esc(t("yAxisText"))}<input data-bind="chart.yAxisLabel" value="${esc(state.chart.yAxisLabel || "")}" placeholder="${esc(t("yAxisPlaceholder"))}"></label>` : ""}
    </div>`;
  }

  function renderVisualizeAppearance(type) {
    const controls = [];
    if (type === "bar") controls.push(toggle("chart.horizontal", t("horizontalBars")), toggle("chart.stacked", t("stackSeries")), !state.chart.horizontal ? toggle("chart.stackedPercent", t("stackPercent")) : "");
    if (["bar", "barHorizontal", "line", "area", "dot", "dual"].includes(type)) controls.push(toggle("chart.showLegend", t("showLegend")));
    if (["bar", "barHorizontal", "line", "area", "dot", "scatter", "dual", "waterfall"].includes(type)) controls.push(toggle("chart.showGrid", t("showGrid")));
    if (["bar", "barHorizontal", "line", "area", "dot", "scatter", "dual", "waterfall", "heatmap"].includes(type)) controls.push(toggle("chart.showLabels", t("showValues")));
    if (["line", "area"].includes(type)) controls.push(toggle("chart.curve", t("smoothLines")), toggle("chart.showSymbols", t("showSymbols")));
    if (type === "waterfall") controls.push(toggle("chart.waterfallTotal", t("waterfallTotal")));
    if (type === "pie") controls.push(toggle("chart.donut", t("donut")));
    return controls.length ? `<div class="panel"><h2 class="panel-title">${esc(t("appearance"))}</h2>${controls.join("")}</div>` : "";
  }

  function renderAnnotate() {
    const paletteEntries = Object.entries(palettes);
    return `
      <div class="panel">
        <h2 class="panel-title">${esc(t("text"))}</h2>
        <label>${esc(t("title"))}<input data-bind="meta.title" value="${esc(state.meta.title)}"></label>
        <label>${esc(t("titleSize"))}<input type="number" min="16" max="54" data-bind="style.titleSize" value="${esc(state.style.titleSize)}"></label>
        <label>${esc(t("description"))}<textarea data-bind="meta.description">${esc(state.meta.description)}</textarea></label>
        <label>${esc(t("descriptionSize"))}<input type="number" min="11" max="32" data-bind="style.descriptionSize" value="${esc(state.style.descriptionSize)}"></label>
        <label>${esc(t("source"))}<input data-bind="meta.source" value="${esc(state.meta.source)}"></label>
        <label>${esc(t("byline"))}<input data-bind="meta.byline" value="${esc(state.meta.byline)}"></label>
      </div>
      <div class="panel">
        <h2 class="panel-title">${esc(t("theme"))}</h2>
        <div class="swatches">
          ${paletteEntries.map(([name, colors]) => `<button title="${esc(name)}" class="swatch ${state.style.palette === name ? "active" : ""}" data-palette="${esc(name)}" style="background: linear-gradient(90deg, ${colors.join(", ")})"></button>`).join("")}
          <button title="${esc(t("custom"))}" class="swatch swatch-custom ${state.style.palette === "Eigenes" ? "active" : ""}" data-palette="Eigenes"><span>${esc(t("custom"))}</span></button>
        </div>
        ${state.style.palette === "Eigenes" ? `<div class="custom-colors">
          ${(state.style.customColors || defaults.style.customColors).map((color, index) => `<label>${esc(t("color"))} ${index + 1}<input type="color" data-custom-color="${index}" value="${esc(color)}"></label>`).join("")}
        </div>` : ""}
        <div class="field-row">
          <label>${esc(t("background"))}<input type="color" data-bind="style.background" value="${esc(state.style.background)}"></label>
          <label>${esc(t("text"))}<input type="color" data-bind="style.textColor" value="${esc(state.style.textColor)}"></label>
        </div>
        ${toggle("style.dark", t("darkPreview"))}
      </div>
      <div class="panel">
        <h2 class="panel-title">${esc(t("font"))}</h2>
        <div class="field-row">
          <label>${esc(t("fontSource"))}<select data-bind="style.fontMode">
            ${option("system", t("systemFont"), state.style.fontMode)}
            ${option("google", t("googleFontUrl"), state.style.fontMode)}
            ${option("upload", t("ownFile"), state.style.fontMode)}
          </select></label>
          ${state.style.fontMode === "system" ? `<label>${esc(t("systemFont"))}<select data-bind="style.font">
            ${option("Inter", "Inter/System", state.style.font)}
            ${option("Georgia", "Georgia", state.style.font)}
            ${option("Arial", "Arial", state.style.font)}
            ${option("Verdana", "Verdana", state.style.font)}
          </select></label>` : ""}
        </div>
        ${state.style.fontMode === "google" ? `<label>${esc(t("googleFontUrl"))}
          <input data-bind="style.googleFontUrl" placeholder="https://fonts.google.com/specimen/Roboto" value="${esc(state.style.googleFontUrl)}">
        </label>` : ""}
        ${state.style.fontMode === "upload" ? `<label>${esc(t("ownFontFile"))}
          <input type="file" data-font-file accept=".woff,.woff2,.ttf,.otf,font/woff,font/woff2,font/ttf,font/otf">
        </label>` : ""}
        <div class="hint">${esc(fontStatusText())}</div>
      </div>
      <div class="panel">
        <h2 class="panel-title">${esc(t("format"))}</h2>
        <div class="field-row">
          <label>${esc(t("width"))}<input type="number" min="320" max="1600" data-bind="style.width" value="${esc(state.style.width)}"></label>
          <label>${esc(t("height"))}<input type="number" min="180" max="1000" data-bind="style.height" value="${esc(state.style.height)}"></label>
        </div>
        <div class="field-row">
          <label>${esc(t("padding"))}<input type="number" min="12" max="80" data-bind="style.chartPadding" value="${esc(state.style.chartPadding)}"></label>
          <label>${esc(t("radius"))}<input type="number" min="0" max="18" data-bind="style.rounded" value="${esc(state.style.rounded)}"></label>
        </div>
      </div>
    `;
  }

  function renderPublish() {
    const link = token ? projectUrl("project") : t("notSavedYet");
    const embed = token ? `<iframe src="${projectUrl("embed")}" width="${state.style.width}" height="${state.style.height + 150}" style="border:0;width:100%;max-width:${state.style.width}px"></iframe>` : "";
    return `
      <div class="panel">
        <h2 class="panel-title">${esc(t("projectLink"))}</h2>
        <div class="notice">${esc(t("linkHint"))}</div>
        <div class="copybox">
          <input readonly value="${esc(link)}" data-project-url>
          <button data-copy="project">${esc(t("copy"))}</button>
        </div>
        <div class="small-actions">
          <button class="primary" data-save-now>${esc(t("saveNow"))}</button>
          ${token ? `<a href="${esc(apiUrl(`?action=link&token=${encodeURIComponent(token)}`))}"><button>${esc(t("txtLink"))}</button></a>` : ""}
        </div>
      </div>
      <div class="panel">
        <h2 class="panel-title">${esc(t("embed"))}</h2>
        <textarea readonly data-embed-code>${esc(embed)}</textarea>
        <div class="small-actions">
          <button data-copy="embed">${esc(t("copyEmbed"))}</button>
          <button data-download-svg>${esc(t("downloadSvg"))}</button>
          <button data-download-png>${esc(t("downloadPng"))}</button>
        </div>
      </div>
      <div class="panel">
        <h2 class="panel-title">${esc(t("privacy"))}</h2>
        <p class="hint">${esc(t("privacyHint", { domain: currentDomain() }))}</p>
      </div>
    `;
  }

  function fontStatusText() {
    if (state.style.fontMode === "upload" && state.style.uploadedFontName) return `${t("active")}: ${state.style.uploadedFontName}`;
    if (state.style.fontMode === "google" && googleFontFamily(state.style.googleFontUrl)) return `${t("active")}: ${googleFontFamily(state.style.googleFontUrl)}`;
    return `${t("active")}: ${activeFontName()}`;
  }

  function renderDataTable(rows, visibleColumns) {
    if (!rows.length) return `<div class="empty-state">${esc(t("noData"))}</div>`;
    const displayColumns = Array.isArray(visibleColumns) ? visibleColumns : columns();
    if (!displayColumns.length) return `<div class="empty-state">${esc(t("selectColumn"))}</div>`;
    return `<table class="data-table"><thead><tr>${displayColumns.map((c) => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${displayColumns.map((c) => `<td>${esc(row[c])}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }

  function typeButton(type, label, icon) {
    return `<button class="type-button ${state.chart.type === type ? "active" : ""}" data-type="${type}">${icon}<span>${label}</span></button>`;
  }

  function option(value, label, selected) {
    return `<option value="${esc(value)}"${value === selected ? " selected" : ""}>${esc(label)}</option>`;
  }

  function toggle(path, label) {
    return `<label class="toggle-line"><span>${esc(label)}</span><input type="checkbox" data-bind="${esc(path)}"${get(path) ? " checked" : ""}></label>`;
  }

  function get(path) {
    return path.split(".").reduce((obj, part) => obj && obj[part], state);
  }

  function set(path, value) {
    const parts = path.split(".");
    let obj = state;
    while (parts.length > 1) obj = obj[parts.shift()];
    obj[parts[0]] = value;
  }

  function bindEvents() {
    document.querySelectorAll("[data-language]").forEach((select) => {
      select.addEventListener("change", () => {
        state.language = select.value === "en" ? "en" : "de";
        render();
        queueSave();
      });
    });

    document.querySelectorAll("[data-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        activeTab = button.dataset.tab;
        render();
      });
    });

    document.querySelectorAll("[data-bind]").forEach((input) => {
      const event = input.type === "checkbox" || input.tagName === "SELECT" || input.type === "color" ? "change" : "input";
      input.addEventListener(event, () => {
        let value = input.type === "checkbox" ? input.checked : input.value;
        if (input.type === "number") value = Number(value);
        set(input.dataset.bind, value);
        if (input.dataset.bind === "style.dark") {
          state.style.textColor = value ? "#f7f7f1" : "#151515";
          state.style.background = value ? "#161819" : "#ffffff";
        }
        if (input.dataset.bind === "style.googleFontUrl") {
          state.style.fontMode = "google";
          state.style.font = googleFontFamily(value) || state.style.font;
        }
        if (input.dataset.bind === "chart.mapMode") normalizeChartColumns();
        updateAndSave(
          input.dataset.bind === "style.fontMode" ||
          input.dataset.bind === "style.googleFontUrl" ||
          input.dataset.bind === "chart.xAxisLabelMode" ||
          input.dataset.bind === "chart.yAxisLabelMode" ||
          input.dataset.bind === "chart.mapMode"
        );
      });
    });

    document.querySelectorAll("[data-custom-color]").forEach((input) => {
      input.addEventListener("change", () => {
        const index = Number(input.dataset.customColor);
        state.style.customColors = state.style.customColors || clone(defaults.style.customColors);
        state.style.customColors[index] = input.value;
        state.style.palette = "Eigenes";
        updateAndSave(true);
      });
    });

    document.querySelectorAll("[data-table-column]").forEach((input) => {
      input.addEventListener("change", () => {
        state.chart.tableColumns = Array.from(document.querySelectorAll("[data-table-column]:checked"))
          .map((entry) => entry.dataset.tableColumn);
        updateAndSave(true);
      });
    });

    document.querySelectorAll("[data-type]").forEach((button) => {
      button.addEventListener("click", () => {
        state.chart.type = button.dataset.type;
        normalizeChartColumns();
        updateAndSave(true);
      });
    });

    document.querySelectorAll("[data-palette]").forEach((button) => {
      button.addEventListener("click", () => {
        state.style.palette = button.dataset.palette;
        if (state.style.palette !== "Eigenes") {
          state.style.customColors = clone(palettes[state.style.palette] || defaults.style.customColors);
        }
        updateAndSave(true);
      });
    });

    const fileInput = document.querySelector("[data-file]");
    if (fileInput) {
      fileInput.addEventListener("change", () => {
        const file = fileInput.files && fileInput.files[0];
        if (file) importFile(file);
      });
    }

    const dropzone = document.querySelector("[data-dropzone]");
    if (dropzone) {
      ["dragenter", "dragover"].forEach((eventName) => dropzone.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropzone.classList.add("drag");
      }));
      ["dragleave", "drop"].forEach((eventName) => dropzone.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropzone.classList.remove("drag");
      }));
      dropzone.addEventListener("drop", (event) => {
        const file = event.dataTransfer.files && event.dataTransfer.files[0];
        if (file) importFile(file);
      });
    }

    const pasteButton = document.querySelector("[data-import-paste]");
    if (pasteButton) {
      pasteButton.addEventListener("click", () => {
        const text = document.querySelector("[data-paste]").value;
        importText(text, "paste.csv");
      });
    }

    const encryptButton = document.querySelector("[data-encrypt-data]");
    if (encryptButton) {
      encryptButton.addEventListener("click", async () => {
        const password = document.querySelector("[data-encrypt-password]").value;
        const passwordConfirm = document.querySelector("[data-encrypt-password-confirm]").value;
        if (!password || password.length < 8) {
          alert(t("passwordMin"));
          return;
        }
        if (password !== passwordConfirm) {
          alert(t("passwordMismatch"));
          return;
        }
        if (!state.data.rows.length) {
          alert(t("loadDataFirst"));
          return;
        }
        try {
          sessionPassword = password;
          state.security = await encryptRows(password);
          await saveProject();
          activeTab = "upload";
          render();
        } catch (error) {
          alert(error.message || t("encryptionFailed"));
        }
      });
    }

    const unlockButton = document.querySelector("[data-unlock-data]");
    if (unlockButton) {
      unlockButton.addEventListener("click", async () => {
        const password = document.querySelector("[data-unlock-password]").value;
        try {
          state.data = await decryptRows(password);
          sessionPassword = password;
          render();
        } catch (error) {
          alert(t("decryptFailed"));
        }
      });
    }

    const removeEncryptionButton = document.querySelector("[data-remove-encryption]");
    if (removeEncryptionButton) {
      removeEncryptionButton.addEventListener("click", async () => {
        const password = document.querySelector("[data-remove-password]").value;
        try {
          await decryptRows(password);
          sessionPassword = "";
          state.security = clone(defaults.security);
          await saveProject();
          activeTab = "upload";
          render();
        } catch (error) {
          alert(t("removeFailed"));
        }
      });
    }

    const saveNow = document.querySelector("[data-save-now]");
    if (saveNow) saveNow.addEventListener("click", () => saveProject(true));

    const homeButton = document.querySelector("[data-go-home]");
    if (homeButton) {
      homeButton.addEventListener("click", () => {
        const ok = confirm(t("homeConfirm"));
        if (ok) location.href = appBase;
      });
    }

    document.querySelectorAll("[data-copy]").forEach((button) => {
      button.addEventListener("click", async () => {
        const value = button.dataset.copy === "embed"
          ? document.querySelector("[data-embed-code]").value
          : document.querySelector("[data-project-url]").value;
        await navigator.clipboard.writeText(value);
        setStatus(t("copied"));
      });
    });

    const svgButton = document.querySelector("[data-download-svg]");
    if (svgButton) svgButton.addEventListener("click", downloadSvg);

    const pngButton = document.querySelector("[data-download-png]");
    if (pngButton) pngButton.addEventListener("click", downloadPng);

    const fontInput = document.querySelector("[data-font-file]");
    if (fontInput) {
      fontInput.addEventListener("change", () => {
        const file = fontInput.files && fontInput.files[0];
        if (file) importFontFile(file);
      });
    }
  }

  function updateAndSave(fullRender) {
    if (fullRender) render();
    else {
      const frame = document.querySelector(".preview-frame");
      if (frame) frame.innerHTML = renderVisualization();
    }
    queueSave();
  }

  function queueSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => saveProject(false), 650);
  }

  async function saveProject() {
    if (boot.embed) return;
    saving = true;
    setStatus(t("saving"));
    try {
      if (!token) {
        const response = await fetch(apiUrl("?action=create"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(await prepareProjectForSave())
        });
        const payload = await response.json();
        if (!payload.ok) throw new Error(payload.error || "Create failed");
        token = payload.token;
        if (!location.search.includes("p=") && !location.pathname.includes("/p/")) {
          history.replaceState(null, "", `${appBase}p/${token}`);
        }
      } else {
        const response = await fetch(apiUrl(`?action=save&token=${encodeURIComponent(token)}`), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(await prepareProjectForSave())
        });
        const payload = await response.json();
        if (!payload.ok) throw new Error(payload.error || "Save failed");
      }
      lastSavedAt = new Date().toISOString();
      setStatus(t("saved"));
    } catch (error) {
      console.error(error);
      setStatus(t("notSaved"));
    } finally {
      saving = false;
    }
  }

  async function loadProject() {
    if (!token) {
      render();
      if (!boot.home) queueSave();
      return;
    }
    try {
      const response = await fetch(apiUrl(`?action=load&token=${encodeURIComponent(token)}`));
      const payload = await response.json();
      if (payload.ok) {
        state = mergeDefaults(payload.project);
        lastSavedAt = state.updatedAt || "";
      }
    } catch (error) {
      console.error(error);
    }
    render();
  }

  function mergeDefaults(project) {
    const merged = clone(defaults);
    return deepMerge(merged, project || {});
  }

  function deepMerge(target, source) {
    Object.keys(source).forEach((key) => {
      if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
        target[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        target[key] = source[key];
      }
    });
    return target;
  }

  function importFile(file) {
    const reader = new FileReader();
    reader.onload = () => importText(String(reader.result || ""), file.name);
    reader.readAsText(file);
  }

  function importFontFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
      const cleanName = file.name.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9 _-]/g, "").trim() || "Dataflow Upload";
      state.style.fontMode = "upload";
      state.style.uploadedFontName = cleanName;
      state.style.uploadedFontData = String(reader.result || "");
      state.style.uploadedFontFormat = fontFormat(file.name, file.type);
      state.style.font = cleanName;
      updateAndSave(true);
    };
    reader.readAsDataURL(file);
  }

  function fontFormat(name, mime) {
    const lower = String(name || mime || "").toLowerCase();
    if (lower.includes("woff2")) return "woff2";
    if (lower.includes("woff")) return "woff";
    if (lower.includes("otf")) return "opentype";
    if (lower.includes("ttf")) return "truetype";
    return "woff2";
  }

  function importText(text, name) {
    if (state.security.encrypted && !sessionPassword) {
      alert(t("decryptBeforeImport"));
      return;
    }
    try {
      const rows = name.toLowerCase().endsWith(".json") ? parseJsonRows(text) : parseDelimited(text);
      if (!rows.length) throw new Error("No rows");
      const cols = Object.keys(rows[0]);
      state.data = { rows, columns: cols };
      autoMapColumns(cols);
      activeTab = "visualize";
      render();
      queueSave();
    } catch (error) {
      alert(t("importFailed"));
    }
  }

  function parseJsonRows(text) {
    const parsed = JSON.parse(text);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((row) => row && typeof row === "object");
  }

  function parseDelimited(text) {
    const delimiter = detectDelimiter(text);
    const rows = [];
    let row = [];
    let cell = "";
    let quoted = false;
    const pushCell = () => {
      row.push(cell);
      cell = "";
    };
    const pushRow = () => {
      if (row.length || cell) {
        pushCell();
        rows.push(row);
      }
      row = [];
    };

    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      const next = text[index + 1];
      if (char === '"' && quoted && next === '"') {
        cell += '"';
        index += 1;
      } else if (char === '"') {
        quoted = !quoted;
      } else if (char === delimiter && !quoted) {
        pushCell();
      } else if ((char === "\n" || char === "\r") && !quoted) {
        if (char === "\r" && next === "\n") index += 1;
        pushRow();
      } else {
        cell += char;
      }
    }
    pushRow();

    const headers = (rows.shift() || []).map((header, index) => header.trim() || `${t("column")} ${index + 1}`);
    return rows
      .filter((items) => items.some((value) => String(value).trim() !== ""))
      .map((items) => Object.fromEntries(headers.map((header, index) => [header, cast(items[index] ?? "")])));
  }

  function detectDelimiter(text) {
    const first = text.split(/\r?\n/).find(Boolean) || "";
    const candidates = [",", ";", "\t"];
    return candidates.sort((a, b) => first.split(b).length - first.split(a).length)[0];
  }

  function cast(value) {
    const trimmed = String(value).trim();
    const normalized = trimmed.replace(/\s/g, "").replace(",", ".");
    return trimmed !== "" && /^-?\d+([.,]\d+)?$/.test(trimmed) ? Number(normalized) : trimmed;
  }

  function autoMapColumns(cols) {
    const numeric = cols.filter(isNumericColumn);
    state.chart.x = cols.find((col) => !numeric.includes(col)) || cols[0] || "";
    state.chart.y = numeric[0] || cols[1] || cols[0] || "";
    state.chart.group = cols.find((col) => col !== state.chart.x && !numeric.includes(col)) || "";
    state.chart.lat = cols.find((col) => /lat|breite/i.test(col)) || "";
    state.chart.lon = cols.find((col) => /lon|lng|laenge|länge/i.test(col)) || "";
    state.chart.label = cols.find((col) => /name|label|ort|stadt|land/i.test(col)) || state.chart.x;
  }

  function normalizeChartColumns() {
    const numeric = columns().filter(isNumericColumn);
    if (["scatter"].includes(state.chart.type)) {
      if (!numeric.includes(state.chart.x)) state.chart.x = numeric[0] || "";
      if (!numeric.includes(state.chart.y) || (state.chart.y === state.chart.x && numeric.length > 1)) {
        state.chart.y = numeric.find((col) => col !== state.chart.x) || numeric[0] || "";
      }
    }
    if (state.chart.type === "dual") {
      if (!numeric.includes(state.chart.y)) state.chart.y = numeric[0] || "";
      if (!numeric.includes(state.chart.y2) || state.chart.y2 === state.chart.y) {
        state.chart.y2 = numeric.find((column) => column !== state.chart.y) || numeric[0] || "";
      }
    }
    if (state.chart.type === "map") {
      if (state.chart.mapMode === "choropleth") {
        if (!columns().includes(state.chart.mapRegion)) state.chart.mapRegion = state.chart.x || columns()[0] || "";
        return;
      }
      if (!numeric.includes(state.chart.y)) state.chart.y = numeric[0] || "";
      if (!numeric.includes(state.chart.lat)) state.chart.lat = columns().find((col) => /lat|breite/i.test(col)) || "";
      if (!numeric.includes(state.chart.lon)) state.chart.lon = columns().find((col) => /lon|lng|laenge|länge/i.test(col)) || "";
    }
  }

  function renderVisualization() {
    applyFontAssets();
    const style = state.style;
    const bg = style.dark ? "#161819" : style.background;
    const text = style.dark ? "#f7f7f1" : style.textColor;
    return `
      <article class="viz-stage ${style.dark ? "dark" : ""}" style="background:${esc(bg)};color:${esc(text)};font-family:${esc(fontStack())}">
        <h1 class="viz-title" style="font-size:${Number(style.titleSize) || 28}px">${esc(state.meta.title)}</h1>
        ${state.meta.description ? `<p class="viz-description" style="font-size:${Number(style.descriptionSize) || 16}px">${esc(state.meta.description)}</p>` : ""}
        <div class="chart-host">${renderChart()}</div>
        <footer class="viz-footer"><span>${esc(state.meta.source)}</span><span>${esc(state.meta.byline)}</span></footer>
      </article>
    `;
  }

  function renderChart() {
    if (!state.data.rows.length) return `<div class="empty-state">${esc(t("previewAfterUpload"))}</div>`;
    const problem = chartDataProblem();
    if (problem) return `<div class="empty-state">${esc(problem)}</div>`;
    if (state.chart.type === "table") return renderTableViz();
    if (state.chart.type === "cards") return renderCards();
    if (state.chart.type === "pie") return renderPie();
    if (state.chart.type === "dual") return renderDualAxis();
    if (state.chart.type === "dot") return renderDotPlot();
    if (state.chart.type === "scatter") return renderScatter();
    if (state.chart.type === "waterfall") return renderWaterfall();
    if (state.chart.type === "heatmap") return renderHeatmap();
    if (state.chart.type === "map") return renderMap();
    return renderXYChart(state.chart.type);
  }

  function chartDataProblem() {
    const numericYTypes = ["bar", "barHorizontal", "line", "area", "dot", "pie", "waterfall", "cards", "heatmap"];
    if (numericYTypes.includes(state.chart.type) && !isNumericColumn(state.chart.y)) {
      return t("chooseNumeric");
    }
    if (state.chart.type === "scatter") {
      if (!isNumericColumn(state.chart.x) || !isNumericColumn(state.chart.y)) {
        return t("scatterNumeric");
      }
    }
    if (state.chart.type === "dual") {
      if (!isNumericColumn(state.chart.y) || !isNumericColumn(state.chart.y2)) return t("chooseNumeric");
    }
    if (state.chart.type === "map" && state.chart.mapMode === "choropleth") {
      if (!columns().includes(state.chart.mapRegion) || !isNumericColumn(state.chart.y)) {
        return t("choroplethNumeric");
      }
      return "";
    }
    if (state.chart.type === "map") {
      if (!isNumericColumn(state.chart.lat) || !isNumericColumn(state.chart.lon)) {
        return t("mapCoordinates");
      }
      const validCoordinates = state.data.rows.some((row) => {
        const lat = parseNumber(row[state.chart.lat]);
        const lon = parseNumber(row[state.chart.lon]);
        return Number.isFinite(lat) && Number.isFinite(lon) && Math.abs(lat) <= 90 && Math.abs(lon) <= 180;
      });
      if (!validCoordinates) return t("invalidCoordinates");
    }
    return "";
  }

  function aggregateRows(options = {}) {
    const { x, y, group, aggregate, sort } = state.chart;
    const useGroup = options.useGroup !== false;
    const map = new Map();
    state.data.rows.forEach((row, index) => {
      const xVal = row[x] ?? `${t("row")} ${index + 1}`;
      const gVal = useGroup && group ? row[group] || t("noGroup") : t("value");
      const key = `${xVal}||${gVal}`;
      const entry = map.get(key) || { x: String(xVal), group: String(gVal), sum: 0, count: 0 };
      entry.sum += aggregate === "count" ? 1 : num(row[y]);
      entry.count += 1;
      map.set(key, entry);
    });
    let data = Array.from(map.values()).map((entry) => ({
      x: entry.x,
      group: entry.group,
      value: aggregate === "avg" ? entry.sum / Math.max(1, entry.count) : entry.sum
    }));
    if (sort !== "none") data = data.sort((a, b) => sort === "asc" ? a.value - b.value : b.value - a.value);
    return data;
  }

  function groupedData() {
    const data = aggregateRows();
    const xValues = unique(data.map((d) => d.x));
    const groups = unique(data.map((d) => d.group));
    const matrix = groups.map((group) => xValues.map((x) => {
      const found = data.find((d) => d.x === x && d.group === group);
      return found ? found.value : 0;
    }));
    return { xValues, groups, matrix };
  }

  function unique(items) {
    return Array.from(new Set(items.map((item) => String(item))));
  }

  function renderXYChart(type) {
    const { xValues, groups, matrix } = groupedData();
    const width = Number(state.style.width) || 860;
    const height = Number(state.style.height) || 440;
    const pad = Number(state.style.chartPadding) || 34;
    const legendHeight = state.chart.showLegend && groups.length > 1 ? 34 : 0;
    const xAxisTitle = axisTitle("x");
    const yAxisTitle = axisTitle("y");
    const yAxisTitleSpace = yAxisTitle ? 28 : 0;
    const xAxisTitleSpace = xAxisTitle ? 24 : 0;
    const plot = {
      x: pad + 38 + yAxisTitleSpace,
      y: 20,
      w: width - pad * 2 - 38 - yAxisTitleSpace,
      h: height - pad - 46 - xAxisTitleSpace - legendHeight
    };
    const totals = xValues.map((_, index) => matrix.reduce((sum, row) => sum + Math.max(0, row[index]), 0));
    const percentStacked = state.chart.stackedPercent && !state.chart.horizontal && type === "bar";
    const displayMatrix = percentStacked ? matrix.map((row) => row.map((value, index) => totals[index] ? value / totals[index] * 100 : 0)) : matrix;
    const max = percentStacked ? 100 : Math.max(1, ...(isStackedSeries() ? totals : displayMatrix.flat()).map(Math.abs));
    const colors = chartColors();
    const fg = state.style.dark ? "#f7f7f1" : state.style.textColor;
    const muted = state.style.dark ? "#8d949b" : "#6b7077";
    const grid = state.chart.showGrid ? gridLines(plot, max, fg, percentStacked) : "";

    let body = "";
    if (type === "bar") body = state.chart.horizontal ? horizontalBars(xValues, groups, matrix, plot, max, colors, fg) : verticalBars(xValues, groups, displayMatrix, plot, max, colors, fg, percentStacked);
    if (type === "barHorizontal") body = horizontalBars(xValues, groups, matrix, plot, max, colors, fg);
    if (type === "line" || type === "area") body = lineChart(type, xValues, groups, matrix, plot, max, colors, fg);

    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(state.meta.title)}">
      ${grid}
      ${axisLabels(xValues, plot, fg, muted, xAxisTitle, yAxisTitle)}
      ${body}
      ${legend(groups, colors, width, height, fg)}
    </svg>`;
  }

  function gridLines(plot, max, fg, percent) {
    let out = "";
    for (let i = 0; i <= 4; i += 1) {
      const y = plot.y + plot.h - (plot.h * i / 4);
      out += `<line x1="${plot.x}" y1="${y}" x2="${plot.x + plot.w}" y2="${y}" stroke="${fg}" opacity="0.12"/>`;
      const value = max * i / 4;
      out += `<text x="${plot.x - 8}" y="${y + 4}" text-anchor="end" font-size="11" fill="${fg}" opacity="0.62">${percent ? `${format(value)} %` : format(value)}</text>`;
    }
    return out;
  }

  function isStackedSeries() {
    return state.chart.stacked || state.chart.stackedPercent;
  }

  function axisTitle(axis) {
    const mode = state.chart[`${axis}AxisLabelMode`];
    if (mode === "column") return String(state.chart[axis] || "");
    if (mode === "custom") return String(state.chart[`${axis}AxisLabel`] || "").trim();
    return "";
  }

  function axisLabels(xValues, plot, fg, muted, xAxisTitle, yAxisTitle) {
    const step = plot.w / Math.max(1, xValues.length);
    const categories = xValues.map((x, index) => {
      const cx = plot.x + step * index + step / 2;
      return `<text x="${cx}" y="${plot.y + plot.h + 24}" text-anchor="middle" font-size="11" fill="${muted}">${esc(shorten(x, 12))}</text>`;
    }).join("");
    const xTitle = xAxisTitle
      ? `<text x="${plot.x + plot.w / 2}" y="${plot.y + plot.h + 48}" text-anchor="middle" font-size="12" font-weight="650" fill="${fg}">${esc(xAxisTitle)}</text>`
      : "";
    const yTitle = yAxisTitle
      ? `<text x="${plot.x - 42}" y="${plot.y + plot.h / 2}" text-anchor="middle" font-size="12" font-weight="650" fill="${fg}" transform="rotate(-90 ${plot.x - 42} ${plot.y + plot.h / 2})">${esc(yAxisTitle)}</text>`
      : "";
    return categories + `<line x1="${plot.x}" y1="${plot.y + plot.h}" x2="${plot.x + plot.w}" y2="${plot.y + plot.h}" stroke="${fg}" opacity="0.25"/>` + xTitle + yTitle;
  }

  function verticalBars(xValues, groups, matrix, plot, max, colors, fg, percent) {
    const step = plot.w / Math.max(1, xValues.length);
    const gap = Math.min(18, step * 0.22);
    let out = "";
    xValues.forEach((_, xi) => {
      let stackedY = plot.y + plot.h;
      groups.forEach((group, gi) => {
        const value = matrix[gi][xi];
        const h = Math.abs(value) / max * plot.h;
        const stacked = isStackedSeries();
        const barW = stacked ? step - gap : (step - gap) / groups.length;
        const x = plot.x + step * xi + gap / 2 + (stacked ? 0 : gi * barW);
        const y = stacked ? stackedY - h : plot.y + plot.h - h;
        stackedY = y;
        out += `<rect x="${x}" y="${y}" width="${Math.max(1, barW - 2)}" height="${h}" rx="${state.style.rounded}" fill="${colors[gi % colors.length]}"><title>${esc(group)}: ${format(value)}</title></rect>`;
        if (state.chart.showLabels) {
          const inside = h >= 22;
          const labelY = inside ? y + Math.min(h - 6, h / 2 + 4) : Math.max(plot.y + 11, y - 4);
          out += `<text x="${x + barW / 2}" y="${labelY}" text-anchor="middle" font-size="11" font-weight="650" fill="${fg}">${percent ? `${format(value)} %` : format(value)}</text>`;
        }
      });
    });
    return out;
  }

  function horizontalBars(xValues, groups, matrix, plot, max, colors, fg) {
    const rows = aggregateRows().slice(0, 28);
    const step = plot.h / Math.max(1, rows.length);
    return rows.map((row, index) => {
      const w = Math.abs(row.value) / max * plot.w;
      const y = plot.y + index * step + 3;
      return `<text x="${plot.x - 8}" y="${y + step / 2 + 4}" text-anchor="end" font-size="11" fill="${fg}" opacity="0.72">${esc(shorten(row.x, 14))}</text>
        <rect x="${plot.x}" y="${y}" width="${w}" height="${Math.max(2, step - 7)}" rx="${state.style.rounded}" fill="${colors[index % colors.length]}"><title>${esc(row.x)}: ${format(row.value)}</title></rect>
        ${state.chart.showLabels ? `<text x="${w > 44 ? plot.x + w - 6 : plot.x + w + 6}" y="${y + step / 2 + 4}" text-anchor="${w > 44 ? "end" : "start"}" font-size="11" font-weight="650" fill="${fg}">${format(row.value)}</text>` : ""}`;
    }).join("");
  }

  function lineChart(type, xValues, groups, matrix, plot, max, colors, fg) {
    const step = plot.w / Math.max(1, xValues.length - 1 || 1);
    return groups.map((group, gi) => {
      const points = matrix[gi].map((value, xi) => {
        const x = plot.x + step * xi;
        const y = plot.y + plot.h - Math.abs(value) / max * plot.h;
        return [x, y, value];
      });
      const d = state.chart.curve ? smoothLinePath(points) : points.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
      const area = type === "area" ? `<path d="${d} L${points[points.length - 1][0]},${plot.y + plot.h} L${points[0][0]},${plot.y + plot.h} Z" fill="${colors[gi % colors.length]}" opacity="0.16"/>` : "";
      const dots = state.chart.showSymbols ? points.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${colors[gi % colors.length]}"><title>${esc(group)}: ${format(p[2])}</title></circle>`).join("") : "";
      const labels = state.chart.showLabels ? points.map((p, index) => lineValueLabel(p, index, points.length, gi, groups.length, plot, fg)).join("") : "";
      return `${area}<path d="${d}" fill="none" stroke="${colors[gi % colors.length]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${dots}${labels}`;
    }).join("");
  }

  function smoothLinePath(points) {
    if (points.length < 3) return points.map((point, index) => `${index ? "L" : "M"}${point[0]},${point[1]}`).join(" ");
    let path = `M${points[0][0]},${points[0][1]}`;
    for (let index = 0; index < points.length - 1; index += 1) {
      const current = points[index];
      const next = points[index + 1];
      const controlX = (current[0] + next[0]) / 2;
      path += ` C${controlX},${current[1]} ${controlX},${next[1]} ${next[0]},${next[1]}`;
    }
    return path;
  }

  function lineValueLabel(point, index, pointCount, groupIndex, groupCount, plot, fg) {
    const verticalOffset = -9 + (groupIndex - (groupCount - 1) / 2) * 14;
    const y = Math.max(plot.y + 12, Math.min(plot.y + plot.h - 8, point[1] + verticalOffset));
    const atStart = index === 0;
    const atEnd = index === pointCount - 1;
    const x = atStart ? point[0] + 6 : atEnd ? point[0] - 6 : point[0];
    const anchor = atStart ? "start" : atEnd ? "end" : "middle";
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="11" font-weight="650" fill="${fg}">${format(point[2])}</text>`;
  }

  function legend(groups, colors, width, height, fg) {
    if (!state.chart.showLegend || groups.length < 2) return "";
    return `<g transform="translate(22 ${height - 22})">${groups.map((group, index) => {
      const x = index * 132;
      return `<rect x="${x}" y="-10" width="11" height="11" fill="${colors[index % colors.length]}" rx="2"/><text x="${x + 17}" y="0" font-size="12" fill="${fg}" opacity="0.72">${esc(shorten(group, 16))}</text>`;
    }).join("")}</g>`;
  }

  function renderPie() {
    const data = aggregateRows({ useGroup: false }).slice(0, 10);
    const width = Number(state.style.width) || 860;
    const height = Number(state.style.height) || 440;
    const radius = Math.min(width, height) * 0.32;
    const cx = width * 0.38;
    const cy = height * 0.5;
    const total = Math.max(1, data.reduce((sum, d) => sum + Math.max(0, d.value), 0));
    const colors = chartColors();
    const fg = state.style.dark ? "#f7f7f1" : state.style.textColor;
    let angle = -Math.PI / 2;
    const slices = data.map((d, index) => {
      const part = Math.max(0, d.value) / total;
      const next = angle + part * Math.PI * 2;
      const path = arcPath(cx, cy, radius, angle, next, state.chart.donut ? radius * 0.58 : 0);
      angle = next;
      return `<path d="${path}" fill="${colors[index % colors.length]}"><title>${esc(d.x)}: ${format(d.value)}</title></path>`;
    }).join("");
    const labels = data.map((d, index) => `<rect x="${width * 0.68}" y="${height * 0.2 + index * 24}" width="12" height="12" rx="2" fill="${colors[index % colors.length]}"/><text x="${width * 0.68 + 18}" y="${height * 0.2 + index * 24 + 11}" font-size="13" fill="${fg}">${esc(shorten(d.x, 22))} ${format(d.value)}</text>`).join("");
    return `<svg viewBox="0 0 ${width} ${height}" role="img">${slices}${labels}</svg>`;
  }

  function aggregateColumnByCategory(column) {
    const values = new Map();
    state.data.rows.forEach((row, index) => {
      const category = String(row[state.chart.x] ?? `${t("row")} ${index + 1}`);
      const entry = values.get(category) || { x: category, sum: 0, count: 0 };
      entry.sum += state.chart.aggregate === "count" ? 1 : num(row[column]);
      entry.count += 1;
      values.set(category, entry);
    });
    const rows = Array.from(values.values()).map((entry) => ({
      x: entry.x,
      value: state.chart.aggregate === "avg" ? entry.sum / Math.max(1, entry.count) : entry.sum
    }));
    if (state.chart.sort === "asc") rows.sort((left, right) => left.value - right.value);
    if (state.chart.sort === "desc") rows.sort((left, right) => right.value - left.value);
    return rows;
  }

  function renderDualAxis() {
    const primary = aggregateColumnByCategory(state.chart.y);
    const secondaryByCategory = new Map(aggregateColumnByCategory(state.chart.y2).map((row) => [row.x, row.value]));
    const width = Number(state.style.width) || 860;
    const height = Number(state.style.height) || 440;
    const xTitle = axisTitle("x");
    const yTitle = axisTitle("y");
    const y2Title = String(state.chart.y2AxisLabel || state.chart.y2 || "");
    const plot = { x: 76 + (yTitle ? 20 : 0), y: 20, w: width - 152 - (yTitle ? 20 : 0) - (y2Title ? 20 : 0), h: height - 78 - (xTitle ? 22 : 0) };
    const primaryValues = primary.map((row) => row.value);
    const secondaryValues = primary.map((row) => secondaryByCategory.get(row.x) || 0);
    const minPrimary = Math.min(0, ...primaryValues);
    const maxPrimary = Math.max(1, ...primaryValues);
    const minSecondary = Math.min(0, ...secondaryValues);
    const maxSecondary = Math.max(1, ...secondaryValues);
    const colors = chartColors();
    const fg = state.style.dark ? "#f7f7f1" : state.style.textColor;
    const muted = state.style.dark ? "#8d949b" : "#6b7077";
    const steps = primary.length;
    const step = plot.w / Math.max(1, steps);
    const grid = state.chart.showGrid ? Array.from({ length: 5 }, (_, index) => {
      const ratio = index / 4;
      const y = plot.y + plot.h - plot.h * ratio;
      const primaryValue = minPrimary + (maxPrimary - minPrimary) * ratio;
      const secondaryValue = minSecondary + (maxSecondary - minSecondary) * ratio;
      return `<line x1="${plot.x}" y1="${y}" x2="${plot.x + plot.w}" y2="${y}" stroke="${fg}" opacity="0.12"/><text x="${plot.x - 8}" y="${y + 4}" text-anchor="end" font-size="11" fill="${muted}">${format(primaryValue)}</text><text x="${plot.x + plot.w + 8}" y="${y + 4}" font-size="11" fill="${muted}">${format(secondaryValue)}</text>`;
    }).join("") : "";
    const columns = state.chart.dualMode === "columns-line" ? primary.map((row, index) => {
      const value = row.value;
      const zeroY = plot.y + plot.h - scaleRange(0, minPrimary, maxPrimary, plot.h);
      const valueY = plot.y + plot.h - scaleRange(value, minPrimary, maxPrimary, plot.h);
      const x = plot.x + index * step + step * 0.22;
      const barWidth = step * 0.56;
      const y = Math.min(zeroY, valueY);
      const barHeight = Math.max(1, Math.abs(valueY - zeroY));
      const label = state.chart.showLabels ? `<text x="${x + barWidth / 2}" y="${value >= 0 ? y - 5 : y + barHeight + 13}" text-anchor="middle" font-size="11" font-weight="650" fill="${fg}">${format(value)}</text>` : "";
      return `<rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="${state.style.rounded}" fill="${colors[0]}"><title>${esc(state.chart.y)}: ${format(value)}</title></rect>${label}`;
    }).join("") : "";
    const linePoints = primary.map((row, index) => {
      const value = secondaryByCategory.get(row.x) || 0;
      return [plot.x + index * step + step / 2, plot.y + plot.h - scaleRange(value, minSecondary, maxSecondary, plot.h), value];
    });
    const primaryLinePoints = primary.map((row, index) => [plot.x + index * step + step / 2, plot.y + plot.h - scaleRange(row.value, minPrimary, maxPrimary, plot.h), row.value]);
    const primaryLine = state.chart.dualMode === "lines" ? dualLine(primaryLinePoints, colors[0], fg, state.chart.y, state.chart.showLabels) : "";
    const secondaryLine = dualLine(linePoints, colors[1 % colors.length], fg, state.chart.y2, state.chart.showLabels);
    const categoryLabels = primary.map((row, index) => `<text x="${plot.x + index * step + step / 2}" y="${plot.y + plot.h + 21}" text-anchor="middle" font-size="11" fill="${muted}">${esc(shorten(row.x, 12))}</text>`).join("");
    const xAxis = `<line x1="${plot.x}" y1="${plot.y + plot.h}" x2="${plot.x + plot.w}" y2="${plot.y + plot.h}" stroke="${fg}" opacity="0.25"/>`;
    const xLabel = xTitle ? `<text x="${plot.x + plot.w / 2}" y="${height - 8}" text-anchor="middle" font-size="12" font-weight="650" fill="${fg}">${esc(xTitle)}</text>` : "";
    const leftLabel = yTitle ? `<text x="18" y="${plot.y + plot.h / 2}" text-anchor="middle" font-size="12" font-weight="650" fill="${fg}" transform="rotate(-90 18 ${plot.y + plot.h / 2})">${esc(yTitle)}</text>` : "";
    const rightLabel = y2Title ? `<text x="${width - 16}" y="${plot.y + plot.h / 2}" text-anchor="middle" font-size="12" font-weight="650" fill="${fg}" transform="rotate(90 ${width - 16} ${plot.y + plot.h / 2})">${esc(y2Title)}</text>` : "";
    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(state.meta.title)}">${grid}${xAxis}${columns}${primaryLine}${secondaryLine}${categoryLabels}${xLabel}${leftLabel}${rightLabel}${legend([state.chart.y, state.chart.y2], colors, width, height, fg)}</svg>`;
  }

  function dualLine(points, color, fg, label, showValues) {
    if (!points.length) return "";
    const d = points.map((point, index) => `${index ? "L" : "M"}${point[0]},${point[1]}`).join(" ");
    const labels = showValues ? points.map((point, index) => `<text x="${point[0]}" y="${Math.max(12, point[1] - 9 - (index % 2) * 12)}" text-anchor="middle" font-size="11" font-weight="650" fill="${fg}">${format(point[2])}</text>`).join("") : "";
    return `<path d="${d}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${points.map((point) => `<circle cx="${point[0]}" cy="${point[1]}" r="4" fill="${color}"><title>${esc(label)}: ${format(point[2])}</title></circle>`).join("")}${labels}`;
  }

  function arcPath(cx, cy, r, start, end, inner) {
    const large = end - start > Math.PI ? 1 : 0;
    const p1 = polar(cx, cy, r, start);
    const p2 = polar(cx, cy, r, end);
    if (!inner) return `M${cx},${cy} L${p1.x},${p1.y} A${r},${r} 0 ${large} 1 ${p2.x},${p2.y} Z`;
    const q1 = polar(cx, cy, inner, end);
    const q2 = polar(cx, cy, inner, start);
    return `M${p1.x},${p1.y} A${r},${r} 0 ${large} 1 ${p2.x},${p2.y} L${q1.x},${q1.y} A${inner},${inner} 0 ${large} 0 ${q2.x},${q2.y} Z`;
  }

  function polar(cx, cy, r, angle) {
    return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r };
  }

  function renderDotPlot() {
    const data = aggregateRows().slice(0, 36);
    const categories = unique(data.map((row) => row.x));
    const groups = unique(data.map((row) => row.group));
    const width = Number(state.style.width) || 860;
    const height = Number(state.style.height) || 440;
    const plot = { x: 124, y: 24, w: width - 154, h: height - 80 };
    const values = data.map((row) => row.value);
    const min = Math.min(0, ...values);
    const max = Math.max(1, ...values);
    const fg = state.style.dark ? "#f7f7f1" : state.style.textColor;
    const muted = state.style.dark ? "#8d949b" : "#6b7077";
    const colors = chartColors();
    const yStep = plot.h / Math.max(1, categories.length);
    const grid = state.chart.showGrid ? gridLinesRange(plot, min, max, fg, "x") : "";
    const points = data.map((row) => {
      const categoryIndex = categories.indexOf(row.x);
      const groupIndex = groups.indexOf(row.group);
      const groupOffset = (groupIndex - (groups.length - 1) / 2) * Math.min(12, yStep / Math.max(2, groups.length));
      const x = plot.x + scaleRange(row.value, min, max, plot.w);
      const y = plot.y + yStep * categoryIndex + yStep / 2 + groupOffset;
      const label = state.chart.showLabels ? `<text x="${x + 8}" y="${y + 4}" font-size="11" font-weight="650" fill="${fg}">${format(row.value)}</text>` : "";
      return `<circle cx="${x}" cy="${y}" r="6" fill="${colors[groupIndex % colors.length]}"><title>${esc(row.x)} / ${esc(row.group)}: ${format(row.value)}</title></circle>${label}`;
    }).join("");
    const categoryLabels = categories.map((category, index) => `<text x="${plot.x - 10}" y="${plot.y + yStep * index + yStep / 2 + 4}" text-anchor="end" font-size="11" fill="${muted}">${esc(shorten(category, 18))}</text>`).join("");
    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(state.meta.title)}">
      ${grid}<line x1="${plot.x}" y1="${plot.y + plot.h}" x2="${plot.x + plot.w}" y2="${plot.y + plot.h}" stroke="${fg}" opacity="0.25"/>
      ${categoryLabels}${points}${legend(groups, colors, width, height, fg)}
    </svg>`;
  }

  function renderWaterfall() {
    const data = aggregateRows({ useGroup: false }).slice(0, 24);
    const width = Number(state.style.width) || 860;
    const height = Number(state.style.height) || 440;
    const plot = { x: 72, y: 20, w: width - 102, h: height - 78 };
    const fg = state.style.dark ? "#f7f7f1" : state.style.textColor;
    const muted = state.style.dark ? "#8d949b" : "#6b7077";
    const colors = chartColors();
    let cumulative = 0;
    const steps = data.map((row) => {
      const start = cumulative;
      cumulative += row.value;
      return { ...row, start, end: cumulative };
    });
    const total = cumulative;
    const allValues = [0, ...steps.flatMap((step) => [step.start, step.end])];
    const min = Math.min(...allValues);
    const max = Math.max(1, ...allValues);
    const items = state.chart.waterfallTotal ? [...steps, { x: t("waterfallTotal"), value: total, start: 0, end: total, total: true }] : steps;
    const stepWidth = plot.w / Math.max(1, items.length);
    const barWidth = Math.max(4, stepWidth * 0.66);
    const grid = state.chart.showGrid ? gridLinesRange(plot, min, max, fg, "y") : "";
    const bars = items.map((step, index) => {
      const x = plot.x + index * stepWidth + (stepWidth - barWidth) / 2;
      const startY = plot.y + plot.h - scaleRange(step.start, min, max, plot.h);
      const endY = plot.y + plot.h - scaleRange(step.end, min, max, plot.h);
      const y = Math.min(startY, endY);
      const h = Math.max(1, Math.abs(endY - startY));
      const fill = step.total ? colors[0] : step.value >= 0 ? colors[3 % colors.length] : colors[1 % colors.length];
      const labelY = step.value >= 0 ? y - 5 : y + h + 13;
      const valueLabel = state.chart.showLabels ? `<text x="${x + barWidth / 2}" y="${Math.max(plot.y + 11, Math.min(plot.y + plot.h - 3, labelY))}" text-anchor="middle" font-size="11" font-weight="650" fill="${fg}">${format(step.total ? step.end : step.value)}</text>` : "";
      const connector = !step.total && index < steps.length - 1 ? `<line x1="${x + barWidth}" y1="${endY}" x2="${plot.x + (index + 1) * stepWidth + (stepWidth - barWidth) / 2}" y2="${endY}" stroke="${muted}" stroke-dasharray="3 3" opacity="0.65"/>` : "";
      return `${connector}<rect x="${x}" y="${y}" width="${barWidth}" height="${h}" rx="${state.style.rounded}" fill="${fill}"><title>${esc(step.x)}: ${format(step.total ? step.end : step.value)}</title></rect>${valueLabel}<text x="${x + barWidth / 2}" y="${plot.y + plot.h + 20}" text-anchor="middle" font-size="11" fill="${muted}">${esc(shorten(step.x, 12))}</text>`;
    }).join("");
    const zeroY = plot.y + plot.h - scaleRange(0, min, max, plot.h);
    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(state.meta.title)}">
      ${grid}<line x1="${plot.x}" y1="${zeroY}" x2="${plot.x + plot.w}" y2="${zeroY}" stroke="${fg}" opacity="0.32"/>${bars}
    </svg>`;
  }

  function scaleRange(value, min, max, size) {
    if (max === min) return size / 2;
    return (value - min) / (max - min) * size;
  }

  function gridLinesRange(plot, min, max, fg, direction) {
    let out = "";
    for (let index = 0; index <= 4; index += 1) {
      const value = min + (max - min) * index / 4;
      if (direction === "x") {
        const x = plot.x + scaleRange(value, min, max, plot.w);
        out += `<line x1="${x}" y1="${plot.y}" x2="${x}" y2="${plot.y + plot.h}" stroke="${fg}" opacity="0.12"/><text x="${x}" y="${plot.y + plot.h + 18}" text-anchor="middle" font-size="11" fill="${fg}" opacity="0.62">${format(value)}</text>`;
      } else {
        const y = plot.y + plot.h - scaleRange(value, min, max, plot.h);
        out += `<line x1="${plot.x}" y1="${y}" x2="${plot.x + plot.w}" y2="${y}" stroke="${fg}" opacity="0.12"/><text x="${plot.x - 8}" y="${y + 4}" text-anchor="end" font-size="11" fill="${fg}" opacity="0.62">${format(value)}</text>`;
      }
    }
    return out;
  }

  function renderScatter() {
    const width = Number(state.style.width) || 860;
    const height = Number(state.style.height) || 440;
    const pad = 56;
    const rows = state.data.rows;
    const xs = rows.map((r) => num(r[state.chart.x]));
    const ys = rows.map((r) => num(r[state.chart.y]));
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const colors = chartColors();
    const fg = state.style.dark ? "#f7f7f1" : state.style.textColor;
    const xAxisTitle = axisTitle("x");
    const yAxisTitle = axisTitle("y");
    const points = rows.map((row, index) => {
      const x = pad + scale(num(row[state.chart.x]), minX, maxX, width - pad * 2);
      const y = height - pad - scale(num(row[state.chart.y]), minY, maxY, height - pad * 2);
      const labelOffsets = [[8, -8, "start"], [-8, -8, "end"], [8, 16, "start"], [-8, 16, "end"]];
      const labelOffset = labelOffsets[index % labelOffsets.length];
      const valueLabel = state.chart.showLabels
        ? `<text x="${x + labelOffset[0]}" y="${Math.max(pad + 11, Math.min(height - pad - 4, y + labelOffset[1]))}" text-anchor="${labelOffset[2]}" font-size="11" font-weight="650" fill="${fg}">${format(row[state.chart.y])}</text>`
        : "";
      return `<circle cx="${x}" cy="${y}" r="6" fill="${colors[index % colors.length]}" opacity="0.78"><title>${esc(row[state.chart.label] || row[state.chart.x])}: ${format(row[state.chart.y])}</title></circle>${valueLabel}`;
    }).join("");
    return `<svg viewBox="0 0 ${width} ${height}" role="img">
      <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="${fg}" opacity="0.25"/>
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" stroke="${fg}" opacity="0.25"/>
      ${xAxisTitle ? `<text x="${width / 2}" y="${height - 16}" text-anchor="middle" font-size="12" font-weight="650" fill="${fg}">${esc(xAxisTitle)}</text>` : ""}
      ${yAxisTitle ? `<text x="18" y="${height / 2}" text-anchor="middle" font-size="12" font-weight="650" fill="${fg}" transform="rotate(-90 18 ${height / 2})">${esc(yAxisTitle)}</text>` : ""}
      ${points}
    </svg>`;
  }

  function renderHeatmap() {
    const { xValues, groups, matrix } = groupedData();
    const width = Number(state.style.width) || 860;
    const height = Number(state.style.height) || 440;
    const pad = 80;
    const cellW = (width - pad - 20) / Math.max(1, xValues.length);
    const cellH = (height - pad - 20) / Math.max(1, groups.length);
    const max = Math.max(1, ...matrix.flat());
    const color = chartColors()[0];
    const fg = state.style.dark ? "#f7f7f1" : state.style.textColor;
    const xAxisTitle = axisTitle("x");
    const yAxisTitle = axisTitle("y");
    const cells = groups.map((group, gi) => matrix[gi].map((value, xi) => {
      const opacity = 0.12 + Math.abs(value) / max * 0.78;
      const valueLabel = state.chart.showLabels
        ? `<text x="${pad + xi * cellW + cellW / 2}" y="${20 + gi * cellH + cellH / 2 + 4}" text-anchor="middle" font-size="10" font-weight="650" fill="${opacity > 0.52 ? "#ffffff" : fg}">${esc(shorten(format(value), 8))}</text>`
        : "";
      return `<rect x="${pad + xi * cellW}" y="${20 + gi * cellH}" width="${Math.max(1, cellW - 2)}" height="${Math.max(1, cellH - 2)}" rx="3" fill="${color}" opacity="${opacity}"><title>${esc(group)} / ${esc(xValues[xi])}: ${format(value)}</title></rect>${valueLabel}`;
    }).join("")).join("");
    const xLabels = xValues.map((x, i) => `<text x="${pad + i * cellW + cellW / 2}" y="${height - (xAxisTitle ? 28 : 10)}" text-anchor="middle" font-size="11" fill="${fg}" opacity="0.68">${esc(shorten(x, 10))}</text>`).join("");
    const yLabels = groups.map((g, i) => `<text x="${pad - 8}" y="${20 + i * cellH + cellH / 2 + 4}" text-anchor="end" font-size="11" fill="${fg}" opacity="0.68">${esc(shorten(g, 12))}</text>`).join("");
    return `<svg viewBox="0 0 ${width} ${height}" role="img">${cells}${xLabels}${yLabels}${xAxisTitle ? `<text x="${width / 2}" y="${height - 8}" text-anchor="middle" font-size="12" font-weight="650" fill="${fg}">${esc(xAxisTitle)}</text>` : ""}${yAxisTitle ? `<text x="18" y="${height / 2}" text-anchor="middle" font-size="12" font-weight="650" fill="${fg}" transform="rotate(-90 18 ${height / 2})">${esc(yAxisTitle)}</text>` : ""}</svg>`;
  }

  function renderMap() {
    const width = Number(state.style.width) || 860;
    const height = Number(state.style.height) || 440;
    const colors = chartColors();
    const fg = state.style.dark ? "#f7f7f1" : state.style.textColor;
    const land = state.style.dark ? "#384247" : "#d8e0d7";
    const coast = state.style.dark ? "#59666d" : "#b9c4b7";
    if (state.chart.mapMode === "choropleth") return renderChoroplethMap(width, height, colors, fg, land, coast);
    const rows = state.data.rows.filter((row) => {
      const lat = parseNumber(row[state.chart.lat]);
      const lon = parseNumber(row[state.chart.lon]);
      return Number.isFinite(lat) && Number.isFinite(lon) && Math.abs(lat) <= 90 && Math.abs(lon) <= 180;
    });
    const lon2Column = columns().find((col) => /lon.*(2|max|end|bis)|lng.*(2|max|end|bis)|longitude.*(2|max|end|bis)/i.test(col));
    const lat2Column = columns().find((col) => /lat.*(2|max|end|bis)|latitude.*(2|max|end|bis)|breite.*(2|max|end|bis)/i.test(col));
    const ranges = state.chart.mapMode === "symbol" && lat2Column && lon2Column ? rows.map((row, index) => {
      const lat1 = parseNumber(row[state.chart.lat]);
      const lon1 = parseNumber(row[state.chart.lon]);
      const lat2 = parseNumber(row[lat2Column]);
      const lon2 = parseNumber(row[lon2Column]);
      const x1 = (Math.min(lon1, lon2) + 180) / 360 * width;
      const x2 = (Math.max(lon1, lon2) + 180) / 360 * width;
      const y1 = (90 - Math.max(lat1, lat2)) / 180 * height;
      const y2 = (90 - Math.min(lat1, lat2)) / 180 * height;
      return `<rect x="${x1}" y="${y1}" width="${Math.max(2, x2 - x1)}" height="${Math.max(2, y2 - y1)}" fill="${colors[index % colors.length]}" opacity="0.18" stroke="${colors[index % colors.length]}" stroke-width="1.6"><title>${esc(row[state.chart.label] || row[state.chart.x])}</title></rect>`;
    }).join("") : "";
    const points = rows.map((row, index) => {
      const lat = parseNumber(row[state.chart.lat]);
      const lon = parseNumber(row[state.chart.lon]);
      const x = (lon + 180) / 360 * width;
      const y = (90 - lat) / 180 * height;
      const value = parseNumber(row[state.chart.y]);
      const r = state.chart.mapMode === "locator" ? 6 : 5 + (Number.isFinite(value) ? Math.sqrt(Math.abs(value)) * 0.8 : 2);
      const label = row[state.chart.label] || row[state.chart.x] || t("point");
      return `<circle cx="${x}" cy="${y}" r="${Math.min(26, r)}" fill="${colors[index % colors.length]}" opacity="0.72" stroke="white" stroke-width="1.5"><title>${esc(label)}${Number.isFinite(value) ? `: ${format(value)}` : ""}</title></circle>`;
    }).join("");
    const mapDescription = state.chart.mapMode === "locator" ? t("mapLocatorDescription") : t("mapSymbolDescription");
    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(mapDescription)}">
      ${mapSvgMetadata(mapDescription)}
      <rect x="0" y="0" width="${width}" height="${height}" fill="${state.style.dark ? "#202629" : "#eef3f5"}"/>
      ${[-120, -60, 0, 60, 120].map((lon) => `<line x1="${(lon + 180) / 360 * width}" y1="0" x2="${(lon + 180) / 360 * width}" y2="${height}" stroke="${fg}" opacity="0.08"/>`).join("")}
      ${[-60, -30, 0, 30, 60].map((lat) => `<line x1="0" y1="${(90 - lat) / 180 * height}" x2="${width}" y2="${(90 - lat) / 180 * height}" stroke="${fg}" opacity="0.08"/>`).join("")}
      ${worldMapShapes(width, height, land, coast)}
      ${ranges}
      ${points}
    </svg>`;
  }

  function renderChoroplethMap(width, height, colors, fg, land, coast) {
    if (!worldMapData) {
      loadWorldMap();
      return `<svg viewBox="0 0 ${width} ${height}" role="img"><rect width="${width}" height="${height}" fill="${state.style.dark ? "#202629" : "#eef3f5"}"/><text x="18" y="28" font-size="13" fill="${fg}" opacity="0.58">${esc(t("loadingChoropleth"))}</text></svg>`;
    }
    const data = choroplethValues();
    const max = Math.max(1, ...Array.from(data.values()).map((entry) => Math.abs(entry.value)));
    const color = colors[0];
    const shapes = worldGeoFeatures(worldMapData, width, height).map((feature) => {
      const entry = data.get(normalizeCountryKey(feature.id)) || data.get(normalizeCountryKey(feature.name));
      const opacity = entry ? 0.18 + Math.abs(entry.value) / max * 0.72 : 1;
      const fill = entry ? color : land;
      const title = entry ? `${feature.name}: ${format(entry.value)}` : feature.name;
      return `<path d="${feature.path}" fill="${fill}" opacity="${opacity}" stroke="${coast}" stroke-width="0.6"><title>${esc(title)}</title></path>`;
    }).join("");
    const mapDescription = t("mapChoroplethDescription");
    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(mapDescription)}">
      ${mapSvgMetadata(mapDescription)}
      <rect x="0" y="0" width="${width}" height="${height}" fill="${state.style.dark ? "#202629" : "#eef3f5"}"/>
      ${shapes}
    </svg>`;
  }

  function mapSvgMetadata(description) {
    return `<title>${esc(state.meta.title)}</title><desc>${esc(description)}</desc>`;
  }

  function choroplethValues() {
    const values = new Map();
    state.data.rows.forEach((row) => {
      const key = normalizeCountryKey(row[state.chart.mapRegion]);
      if (!key) return;
      const entry = values.get(key) || { sum: 0, count: 0, value: 0 };
      entry.sum += state.chart.aggregate === "count" ? 1 : num(row[state.chart.y]);
      entry.count += 1;
      entry.value = state.chart.aggregate === "avg" ? entry.sum / entry.count : entry.sum;
      values.set(key, entry);
    });
    return values;
  }

  function normalizeCountryKey(value) {
    return String(value ?? "").trim().toLocaleLowerCase("en").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/^0+/, "");
  }

  function worldMapShapes(width, height, land, coast) {
    if (!worldMapData) {
      loadWorldMap();
      return "";
    }
    return worldGeoFeatures(worldMapData, width, height)
      .map((feature) => `<path d="${feature.path}" fill="${land}" stroke="${coast}" stroke-width="0.6" opacity="0.9"/>`).join("");
  }

  async function loadWorldMap() {
    if (worldMapData || worldMapLoading) return;
    worldMapLoading = true;
    try {
      const response = await fetch(`${appBase}assets/data/world-countries.geojson`);
      if (!response.ok) throw new Error("World map could not be loaded.");
      worldMapData = await response.json();
      const frame = document.querySelector(".preview-frame");
      if (frame && state.chart.type === "map") frame.innerHTML = renderVisualization();
    } catch (error) {
      console.warn(error);
    } finally {
      worldMapLoading = false;
    }
  }

  function worldGeoFeatures(data, width, height) {
    if (!data || !Array.isArray(data.features)) return [];
    return data.features.map((feature) => ({
      id: String(feature.properties && (feature.properties.ISO_N3_EH || feature.properties.ISO_N3) || ""),
      name: String(feature.properties && feature.properties.NAME_EN || t("unknown")),
      path: geoJsonPath(feature.geometry, width, height)
    })).filter((feature) => feature.path);
  }

  function geoJsonPath(geometry, width, height) {
    if (!geometry) return "";
    const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.type === "MultiPolygon" ? geometry.coordinates : [];
    return polygons.map((polygon) => polygon.map((ring) => {
      return ring.map((point, index) => `${index ? "L" : "M"}${mapX(point[0], width)},${mapY(point[1], height)}`).join("") + "Z";
    }).join("")).join("");
  }

  function mapX(lon, width) {
    return ((lon + 180) / 360) * width;
  }

  function mapY(lat, height) {
    return ((90 - lat) / 180) * height;
  }

  function renderTableViz() {
    const limit = Number(state.chart.tableLimit) || 100;
    return renderDataTable(tableRows().slice(0, limit), state.chart.tableColumns);
  }

  function tableRows() {
    const rows = state.data.rows.slice();
    const column = state.chart.tableSort;
    if (!column || !columns().includes(column)) return rows;
    const direction = state.chart.tableSortDirection === "desc" ? -1 : 1;
    const numeric = isNumericColumn(column);
    return rows.sort((left, right) => {
      if (numeric) return direction * (parseNumber(left[column]) - parseNumber(right[column]));
      return direction * String(left[column] ?? "").localeCompare(String(right[column] ?? ""), language());
    });
  }

  function renderCards() {
    const data = aggregateRows({ useGroup: false }).slice(0, 8);
    const colors = chartColors();
    return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px">${data.map((d, i) => `
      <div style="border-top:4px solid ${colors[i % colors.length]};padding:14px 0;border-bottom:1px solid currentColor">
        <div style="font-size:13px;opacity:.62">${esc(d.x)}</div>
        <div style="font-size:34px;font-weight:760;line-height:1.1">${format(d.value)}</div>
      </div>`).join("")}</div>`;
  }

  function scale(value, min, max, size) {
    if (max === min) return size / 2;
    return (value - min) / (max - min) * size;
  }

  function format(value) {
    return new Intl.NumberFormat(language() === "en" ? "en-US" : "de-DE", { maximumFractionDigits: 2 }).format(num(value));
  }

  function shorten(value, length) {
    const text = String(value ?? "");
    return text.length > length ? `${text.slice(0, length - 1)}...` : text;
  }

  function downloadSvg() {
    const svg = document.querySelector(".chart-host svg");
    if (!svg) return;
    const blob = new Blob([svg.outerHTML], { type: "image/svg+xml" });
    downloadBlob(blob, safeName("dataflow") + ".svg");
  }

  async function downloadPng() {
    const svg = document.querySelector(".chart-host svg");
    if (!svg) return;
    const source = visualizationSvgForExport(svg);
    const img = new Image();
    const url = URL.createObjectURL(new Blob([source], { type: "image/svg+xml" }));
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = Number(state.style.width) || 860;
      canvas.height = (Number(state.style.height) || 440) + exportTextHeight();
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = state.style.dark ? "#161819" : state.style.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => blob && downloadBlob(blob, safeName("dataflow") + ".png"));
    };
    img.src = url;
  }

  function visualizationSvgForExport(chartSvg) {
    const width = Number(state.style.width) || 860;
    const chartHeight = Number(state.style.height) || 440;
    const pad = 32;
    const titleSize = Number(state.style.titleSize) || 28;
    const descriptionSize = Number(state.style.descriptionSize) || 16;
    const descriptionLines = wrapText(state.meta.description || "", 86);
    const headerHeight = exportHeaderHeight();
    const footerGap = 42;
    const footerHeight = 30;
    const height = headerHeight + chartHeight + footerGap + footerHeight + pad;
    const bg = state.style.dark ? "#161819" : state.style.background;
    const fg = state.style.dark ? "#f7f7f1" : state.style.textColor;
    const muted = state.style.dark ? "#b6bcc2" : "#666b73";
    const chartSource = chartSvgForExport(chartSvg, width, chartHeight, headerHeight);
    const footerY = headerHeight + chartHeight + footerGap;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="${esc(bg)}"/>
      <style>text{font-family:${fontStack()};letter-spacing:0}</style>
      <text x="${pad}" y="${pad + titleSize}" font-size="${titleSize}" font-weight="750" fill="${esc(fg)}">${esc(state.meta.title)}</text>
      ${descriptionLines.map((line, index) => `<text x="${pad}" y="${pad + titleSize + 30 + index * (descriptionSize + 6)}" font-size="${descriptionSize}" fill="${esc(muted)}">${esc(line)}</text>`).join("")}
      ${chartSource}
      <text x="${pad}" y="${footerY}" font-size="12" fill="${esc(muted)}">${esc(state.meta.source)}</text>
      <text x="${width - pad}" y="${footerY}" font-size="12" text-anchor="end" fill="${esc(muted)}">${esc(state.meta.byline)}</text>
    </svg>`;
  }

  function exportTextHeight() {
    return exportHeaderHeight() + 42 + 30 + 32;
  }

  function exportHeaderHeight() {
    const titleSize = Number(state.style.titleSize) || 28;
    const descriptionSize = Number(state.style.descriptionSize) || 16;
    const descriptionLines = wrapText(state.meta.description || "", 86);
    return 32 + titleSize + 28 + descriptionLines.length * (descriptionSize + 6) + 18;
  }

  function chartSvgForExport(chartSvg, width, height, y) {
    const cloneSvg = chartSvg.cloneNode(true);
    cloneSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    cloneSvg.setAttribute("x", "0");
    cloneSvg.setAttribute("y", String(y));
    cloneSvg.setAttribute("width", String(width));
    cloneSvg.setAttribute("height", String(height));
    cloneSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    return new XMLSerializer().serializeToString(cloneSvg);
  }

  function wrapText(text, maxLength) {
    const words = String(text || "").split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";
    words.forEach((word) => {
      if ((line + " " + word).trim().length > maxLength && line) {
        lines.push(line);
        line = word;
      } else {
        line = (line + " " + word).trim();
      }
    });
    if (line) lines.push(line);
    return lines.slice(0, 4);
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function safeName(fallback) {
    return (state.meta.title || fallback).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || fallback;
  }

  function iconBars() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/></svg>`; }
  function iconHorizontalBars() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4v16"/><path d="M4 20h16"/><rect x="7" y="6" width="10" height="3"/><rect x="7" y="11" width="6" height="3"/><rect x="7" y="16" width="13" height="3"/></svg>`; }
  function iconLine() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 18 9 11l4 3 7-9"/><path d="M4 20h16"/></svg>`; }
  function iconArea() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 18 9 11l4 3 7-9v15H4Z" fill="currentColor" opacity=".18"/></svg>`; }
  function iconDot() { return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h16v1H4zm0 7h16v1H4zm0 7h16v1H4z" opacity=".25"/><circle cx="9" cy="5.5" r="2"/><circle cx="15" cy="12.5" r="2"/><circle cx="12" cy="19.5" r="2"/></svg>`; }
  function iconScatter() { return `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="15" r="2"/><circle cx="12" cy="9" r="2"/><circle cx="17" cy="13" r="2"/><circle cx="19" cy="5" r="2"/></svg>`; }
  function iconPie() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 1-8 5"/><path d="M12 3v9h9"/></svg>`; }
  function iconDualAxis() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4v16M20 4v16M4 20h16"/><rect x="7" y="11" width="3" height="7" fill="currentColor" opacity=".25"/><rect x="12" y="7" width="3" height="11" fill="currentColor" opacity=".25"/><path d="m6 15 5-6 4 3 4-7"/></svg>`; }
  function iconWaterfall() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="12" width="4" height="7"/><rect x="10" y="7" width="4" height="8"/><rect x="16" y="10" width="4" height="9"/><path d="M8 12h2m4-5h2" stroke-dasharray="2 2"/></svg>`; }
  function iconTable() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="5" width="16" height="14"/><path d="M4 10h16M9 5v14M15 5v14"/></svg>`; }
  function iconCards() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="5" width="7" height="14"/><rect x="13" y="5" width="7" height="14"/></svg>`; }
  function iconHeat() { return `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="5" height="5" opacity=".3"/><rect x="10" y="4" width="5" height="5" opacity=".6"/><rect x="16" y="4" width="5" height="5"/><rect x="4" y="10" width="5" height="5" opacity=".7"/><rect x="10" y="10" width="5" height="5" opacity=".2"/><rect x="16" y="10" width="5" height="5" opacity=".5"/><rect x="4" y="16" width="5" height="5"/><rect x="10" y="16" width="5" height="5" opacity=".5"/><rect x="16" y="16" width="5" height="5" opacity=".25"/></svg>`; }
  function iconMap() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/></svg>`; }

  loadProject();
}());
