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

  const demos = [
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
    }
  ];

  const defaults = {
    version: 1,
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
      group: "Produkt",
      lat: "Lat",
      lon: "Lon",
      label: "Ort",
      aggregate: "sum",
      sort: "none",
      horizontal: false,
      stacked: false,
      showLegend: true,
      showGrid: true,
      showLabels: false,
      xAxisLabelMode: "none",
      xAxisLabel: "",
      yAxisLabelMode: "none",
      yAxisLabel: "",
      curve: false,
      donut: true,
      tableLimit: 100
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
  let worldMapTopology = null;
  let worldMapLoading = false;
  const appBase = boot.base || "./";

  const app = document.getElementById("app");

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
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
    if (typeof value === "number") return Number.isFinite(value) ? value : 0;
    const cleaned = String(value ?? "").trim().replace(/\s/g, "").replace(",", ".");
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function isNumericColumn(column) {
    const rows = state.data.rows.slice(0, 30);
    return rows.length > 0 && rows.some((row) => String(row[column] ?? "").trim() !== "") &&
      rows.every((row) => String(row[column] ?? "").trim() === "" || Number.isFinite(num(row[column])));
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
    if (!cryptoAvailable()) throw new Error("WebCrypto ist in diesem Browser oder Kontext nicht verfügbar.");
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
          <nav class="tabs" aria-label="Workflow">
            ${tabButton("upload", "1", "Daten")}
            ${tabButton("visualize", "2", "Visualisieren")}
            ${tabButton("annotate", "3", "Beschriften")}
            ${tabButton("publish", "4", "Veröffentlichen")}
          </nav>
          <div class="status" data-status>${saving ? "Speichert..." : statusText()}</div>
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
    app.innerHTML = `
      <main class="start-shell">
        <header class="start-topbar">
          <div class="brand"><span class="brand-mark"></span><span>Dataflow</span></div>
        </header>
        <section class="start-center">
          <button class="start-create" data-start-empty>Erstellen</button>
        </section>
        <button class="start-demo" data-start-demo>Demo</button>
      </main>
    `;
    bindHomeEvents();
  }

  function bindHomeEvents() {
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
    boot.home = false;
    token = "";
    state = useDemo ? demoProject() : clone(defaults);
    activeTab = "upload";
    lastSavedAt = "";
    sessionPassword = "";
    render();
    queueSave();
  }

  function demoProject() {
    const project = clone(defaults);
    const demo = clone(demos[Math.floor(Math.random() * demos.length)]);
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
    if (!token) return "Lokales Projekt";
    if (lastSavedAt) return "Gespeichert";
    return "Bereit";
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
        <h2 class="panel-title">Daten hochladen</h2>
        <div class="dropzone" data-dropzone>
          <strong>CSV, TSV oder JSON hier ablegen</strong>
          <span class="hint">Die erste Zeile wird als Spaltenkopf gelesen. JSON sollte ein Array aus Objekten sein.</span>
          <input type="file" data-file accept=".csv,.tsv,.txt,.json,application/json,text/csv">
        </div>
      </div>
      <div class="panel">
        <label>Direkt einfügen
          <textarea data-paste placeholder="Jahr,Produkt,Umsatz&#10;2024,Atlas,91"></textarea>
        </label>
        <button data-import-paste>Daten übernehmen</button>
      </div>
      <div class="panel">
        <h2 class="panel-title">${rows.length} Zeilen, ${columns().length} Spalten</h2>
        <div class="data-table-wrap">${renderDataTable(rows.slice(0, 50))}</div>
      </div>
      <div class="panel">
        <h2 class="panel-title">Passwortschutz</h2>
        ${renderEncryptionPanel()}
      </div>
    `;
  }

  function renderEncryptionPanel() {
    if (state.security.encrypted && !state.data.rows.length) {
      return `
        <div class="notice good">Die Daten sind sicher verschlüsselt gespeichert. Methode: ${esc(encryptionMethodText())}.</div>
        <label>Passwort eingeben<input type="password" data-unlock-password autocomplete="current-password"></label>
        <div class="small-actions">
          <button class="primary" data-unlock-data>Daten entschlüsseln</button>
        </div>
      `;
    }

    if (state.security.encrypted) {
      return `
        <div class="notice good">Die Daten sind sicher mit ${esc(encryptionMethodText())} verschlüsselt. Ohne Passwort können Personen mit Webspace-Zugriff die gespeicherten Daten nicht entschlüsseln.</div>
        <label>Passwort zum Entfernen<input type="password" data-remove-password autocomplete="current-password"></label>
        <div class="small-actions">
          <button data-remove-encryption>Passwortschutz entfernen</button>
        </div>
      `;
    }

    return `
      <div class="notice">Die Daten liegen derzeit unverschlüsselt auf dem Server.</div>
      <label>Passwort festlegen<input type="password" data-encrypt-password autocomplete="new-password"></label>
      <label>Passwort wiederholen<input type="password" data-encrypt-password-confirm autocomplete="new-password"></label>
      <div class="small-actions">
        <button class="primary" data-encrypt-data>Mit Passwort verschlüsseln</button>
      </div>
    `;
  }

  function renderVisualize() {
    return `
      <div class="panel">
        <h2 class="panel-title">Visualisierung</h2>
        <div class="chart-types">
          ${typeButton("bar", "Balken", iconBars())}
          ${typeButton("line", "Linie", iconLine())}
          ${typeButton("area", "Fläche", iconArea())}
          ${typeButton("scatter", "Punkte", iconScatter())}
          ${typeButton("pie", "Kreis", iconPie())}
          ${typeButton("table", "Tabelle", iconTable())}
          ${typeButton("cards", "Kennzahlen", iconCards())}
          ${typeButton("heatmap", "Heatmap", iconHeat())}
          ${typeButton("map", "Karte", iconMap())}
        </div>
      </div>
      <div class="panel">
        <h2 class="panel-title">Spalten</h2>
        <div class="field-row">
          <label>X / Kategorie<select data-bind="chart.x">${columnOptions(state.chart.x, false)}</select></label>
          <label>Y / Wert<select data-bind="chart.y">${columnOptions(state.chart.y, true)}</select></label>
        </div>
        <div class="field-row">
          <label>Gruppe / Serie<select data-bind="chart.group"><option value="">Keine</option>${columnOptions(state.chart.group, false)}</select></label>
          <label>Beschriftung<select data-bind="chart.label"><option value="">Automatisch</option>${columnOptions(state.chart.label, false)}</select></label>
        </div>
        <div class="field-row">
          <label>Latitude<select data-bind="chart.lat"><option value="">Keine</option>${columnOptions(state.chart.lat, true)}</select></label>
          <label>Longitude<select data-bind="chart.lon"><option value="">Keine</option>${columnOptions(state.chart.lon, true)}</select></label>
        </div>
        <div class="field-row">
          <label>Aggregation<select data-bind="chart.aggregate">
            ${option("sum", "Summe", state.chart.aggregate)}
            ${option("avg", "Durchschnitt", state.chart.aggregate)}
            ${option("count", "Anzahl", state.chart.aggregate)}
          </select></label>
          <label>Sortierung<select data-bind="chart.sort">
            ${option("none", "Original", state.chart.sort)}
            ${option("asc", "Aufsteigend", state.chart.sort)}
            ${option("desc", "Absteigend", state.chart.sort)}
          </select></label>
        </div>
      </div>
      <div class="panel">
        <h2 class="panel-title">Achsenbeschriftungen</h2>
        <div class="field-row">
          <label>X-Achse<select data-bind="chart.xAxisLabelMode">
            ${option("none", "Keine", state.chart.xAxisLabelMode)}
            ${option("column", "Spaltenlabel", state.chart.xAxisLabelMode)}
            ${option("custom", "Eigener Text", state.chart.xAxisLabelMode)}
          </select></label>
          <label>Y-Achse<select data-bind="chart.yAxisLabelMode">
            ${option("none", "Keine", state.chart.yAxisLabelMode)}
            ${option("column", "Spaltenlabel", state.chart.yAxisLabelMode)}
            ${option("custom", "Eigener Text", state.chart.yAxisLabelMode)}
          </select></label>
        </div>
        ${state.chart.xAxisLabelMode === "custom" ? `<label>Text unter der X-Achse<input data-bind="chart.xAxisLabel" value="${esc(state.chart.xAxisLabel || "")}" placeholder="z. B. Monat oder Zeitraum"></label>` : ""}
        ${state.chart.yAxisLabelMode === "custom" ? `<label>Text an der Y-Achse<input data-bind="chart.yAxisLabel" value="${esc(state.chart.yAxisLabel || "")}" placeholder="z. B. Umsatz in EUR"></label>` : ""}
      </div>
      <div class="panel">
        <h2 class="panel-title">Darstellung</h2>
        ${toggle("chart.horizontal", "Balken horizontal")}
        ${toggle("chart.stacked", "Serien stapeln")}
        ${toggle("chart.showLegend", "Legende anzeigen")}
        ${toggle("chart.showGrid", "Raster anzeigen")}
        ${toggle("chart.showLabels", "Werte beschriften")}
        ${toggle("chart.curve", "Linie glätten")}
        ${toggle("chart.donut", "Kreis als Donut")}
      </div>
    `;
  }

  function renderAnnotate() {
    const paletteEntries = Object.entries(palettes);
    return `
      <div class="panel">
        <h2 class="panel-title">Text</h2>
        <label>Titel<input data-bind="meta.title" value="${esc(state.meta.title)}"></label>
        <label>Titelgröße<input type="number" min="16" max="54" data-bind="style.titleSize" value="${esc(state.style.titleSize)}"></label>
        <label>Beschreibung<textarea data-bind="meta.description">${esc(state.meta.description)}</textarea></label>
        <label>Beschreibung Schriftgröße<input type="number" min="11" max="32" data-bind="style.descriptionSize" value="${esc(state.style.descriptionSize)}"></label>
        <label>Quelle<input data-bind="meta.source" value="${esc(state.meta.source)}"></label>
        <label>Byline<input data-bind="meta.byline" value="${esc(state.meta.byline)}"></label>
      </div>
      <div class="panel">
        <h2 class="panel-title">Theme</h2>
        <div class="swatches">
          ${paletteEntries.map(([name, colors]) => `<button title="${esc(name)}" class="swatch ${state.style.palette === name ? "active" : ""}" data-palette="${esc(name)}" style="background: linear-gradient(90deg, ${colors.join(", ")})"></button>`).join("")}
          <button title="Eigene" class="swatch swatch-custom ${state.style.palette === "Eigenes" ? "active" : ""}" data-palette="Eigenes"><span>Eigene</span></button>
        </div>
        ${state.style.palette === "Eigenes" ? `<div class="custom-colors">
          ${(state.style.customColors || defaults.style.customColors).map((color, index) => `<label>Farbe ${index + 1}<input type="color" data-custom-color="${index}" value="${esc(color)}"></label>`).join("")}
        </div>` : ""}
        <div class="field-row">
          <label>Hintergrund<input type="color" data-bind="style.background" value="${esc(state.style.background)}"></label>
          <label>Text<input type="color" data-bind="style.textColor" value="${esc(state.style.textColor)}"></label>
        </div>
        ${toggle("style.dark", "Dunkle Vorschau")}
      </div>
      <div class="panel">
        <h2 class="panel-title">Schrift</h2>
        <div class="field-row">
          <label>Quelle<select data-bind="style.fontMode">
            ${option("system", "Systemschrift", state.style.fontMode)}
            ${option("google", "Google Font URL", state.style.fontMode)}
            ${option("upload", "Eigene Datei", state.style.fontMode)}
          </select></label>
          ${state.style.fontMode === "system" ? `<label>Systemschrift<select data-bind="style.font">
            ${option("Inter", "Inter/System", state.style.font)}
            ${option("Georgia", "Georgia", state.style.font)}
            ${option("Arial", "Arial", state.style.font)}
            ${option("Verdana", "Verdana", state.style.font)}
          </select></label>` : ""}
        </div>
        ${state.style.fontMode === "google" ? `<label>Google-Font-URL
          <input data-bind="style.googleFontUrl" placeholder="https://fonts.google.com/specimen/Roboto" value="${esc(state.style.googleFontUrl)}">
        </label>` : ""}
        ${state.style.fontMode === "upload" ? `<label>Eigene Schriftdatei
          <input type="file" data-font-file accept=".woff,.woff2,.ttf,.otf,font/woff,font/woff2,font/ttf,font/otf">
        </label>` : ""}
        <div class="hint">${esc(fontStatusText())}</div>
      </div>
      <div class="panel">
        <h2 class="panel-title">Format</h2>
        <div class="field-row">
          <label>Breite<input type="number" min="320" max="1600" data-bind="style.width" value="${esc(state.style.width)}"></label>
          <label>Höhe<input type="number" min="180" max="1000" data-bind="style.height" value="${esc(state.style.height)}"></label>
        </div>
        <div class="field-row">
          <label>Innenabstand<input type="number" min="12" max="80" data-bind="style.chartPadding" value="${esc(state.style.chartPadding)}"></label>
          <label>Radius<input type="number" min="0" max="18" data-bind="style.rounded" value="${esc(state.style.rounded)}"></label>
        </div>
      </div>
    `;
  }

  function renderPublish() {
    const link = token ? projectUrl("project") : "Noch nicht gespeichert";
    const embed = token ? `<iframe src="${projectUrl("embed")}" width="${state.style.width}" height="${state.style.height + 150}" style="border:0;width:100%;max-width:${state.style.width}px"></iframe>` : "";
    return `
      <div class="panel">
        <h2 class="panel-title">Projektlink</h2>
        <div class="notice">Wer diesen Link besitzt, kann das Projekt ansehen und bearbeiten. Es gibt keinen Login und keine Wiederherstellung ohne Link.</div>
        <div class="copybox">
          <input readonly value="${esc(link)}" data-project-url>
          <button data-copy="project">Kopieren</button>
        </div>
        <div class="small-actions">
          <button class="primary" data-save-now>Jetzt speichern</button>
          ${token ? `<a href="${esc(apiUrl(`?action=link&token=${encodeURIComponent(token)}`))}"><button>TXT-Link</button></a>` : ""}
        </div>
      </div>
      <div class="panel">
        <h2 class="panel-title">Einbetten</h2>
        <textarea readonly data-embed-code>${esc(embed)}</textarea>
        <div class="small-actions">
          <button data-copy="embed">Embed kopieren</button>
          <button data-download-svg>SVG herunterladen</button>
          <button data-download-png>PNG herunterladen</button>
        </div>
      </div>
      <div class="panel">
        <h2 class="panel-title">Datenschutz</h2>
        <p class="hint">Die Daten liegen als JSON-Datei auf dem Webspace ${esc(currentDomain())}. Die zufällige URL ist der Zugriffsschutz; für sensible Daten kann zusätzlich der Passwortschutz unter „Daten“ aktiviert werden.</p>
      </div>
    `;
  }

  function fontStatusText() {
    if (state.style.fontMode === "upload" && state.style.uploadedFontName) return `Aktiv: ${state.style.uploadedFontName}`;
    if (state.style.fontMode === "google" && googleFontFamily(state.style.googleFontUrl)) return `Aktiv: ${googleFontFamily(state.style.googleFontUrl)}`;
    return `Aktiv: ${activeFontName()}`;
  }

  function renderDataTable(rows) {
    if (!rows.length) return `<div class="empty-state">Noch keine Daten geladen.</div>`;
    return `<table class="data-table"><thead><tr>${columns().map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${columns().map((c) => `<td>${esc(row[c])}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
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
        updateAndSave(
          input.dataset.bind === "style.fontMode" ||
          input.dataset.bind === "style.googleFontUrl" ||
          input.dataset.bind === "chart.xAxisLabelMode" ||
          input.dataset.bind === "chart.yAxisLabelMode"
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

    document.querySelectorAll("[data-type]").forEach((button) => {
      button.addEventListener("click", () => {
        state.chart.type = button.dataset.type;
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
          alert("Bitte ein Passwort mit mindestens 8 Zeichen verwenden.");
          return;
        }
        if (password !== passwordConfirm) {
          alert("Die Passwörter stimmen nicht überein.");
          return;
        }
        if (!state.data.rows.length) {
          alert("Bitte zuerst Daten laden.");
          return;
        }
        try {
          sessionPassword = password;
          state.security = await encryptRows(password);
          await saveProject();
          activeTab = "upload";
          render();
        } catch (error) {
          alert(error.message || "Die Daten konnten nicht verschlüsselt werden.");
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
          alert("Das Passwort passt nicht oder die Daten konnten nicht entschlüsselt werden.");
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
          alert("Das Passwort passt nicht. Der Passwortschutz wurde nicht entfernt.");
        }
      });
    }

    const saveNow = document.querySelector("[data-save-now]");
    if (saveNow) saveNow.addEventListener("click", () => saveProject(true));

    const homeButton = document.querySelector("[data-go-home]");
    if (homeButton) {
      homeButton.addEventListener("click", () => {
        const ok = confirm("Bist du sicher, dass du das aktuelle Projekt und die Projekt-URL gespeichert hast?");
        if (ok) location.href = appBase;
      });
    }

    document.querySelectorAll("[data-copy]").forEach((button) => {
      button.addEventListener("click", async () => {
        const value = button.dataset.copy === "embed"
          ? document.querySelector("[data-embed-code]").value
          : document.querySelector("[data-project-url]").value;
        await navigator.clipboard.writeText(value);
        setStatus("Kopiert");
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
    setStatus("Speichert...");
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
      setStatus("Gespeichert");
    } catch (error) {
      console.error(error);
      setStatus("Nicht gespeichert");
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
      alert("Bitte die vorhandenen Daten zuerst mit dem Passwort entschlüsseln, bevor neue Daten übernommen werden.");
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
      alert("Die Daten konnten nicht gelesen werden. Bitte CSV, TSV oder ein JSON-Array verwenden.");
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

    const headers = (rows.shift() || []).map((header, index) => header.trim() || `Spalte ${index + 1}`);
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
    if (!state.data.rows.length) return `<div class="empty-state">Daten hochladen, dann erscheint hier die Vorschau.</div>`;
    if (state.chart.type === "table") return renderTableViz();
    if (state.chart.type === "cards") return renderCards();
    if (state.chart.type === "pie") return renderPie();
    if (state.chart.type === "scatter") return renderScatter();
    if (state.chart.type === "heatmap") return renderHeatmap();
    if (state.chart.type === "map") return renderMap();
    return renderXYChart(state.chart.type);
  }

  function aggregateRows() {
    const { x, y, group, aggregate, sort } = state.chart;
    const map = new Map();
    state.data.rows.forEach((row, index) => {
      const xVal = row[x] ?? `Zeile ${index + 1}`;
      const gVal = group ? row[group] || "Ohne Gruppe" : "Wert";
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
    const max = Math.max(1, ...(state.chart.stacked ? totals : matrix.flat()).map(Math.abs));
    const colors = chartColors();
    const fg = state.style.dark ? "#f7f7f1" : state.style.textColor;
    const muted = state.style.dark ? "#8d949b" : "#6b7077";
    const grid = state.chart.showGrid ? gridLines(plot, max, fg) : "";

    let body = "";
    if (type === "bar") body = state.chart.horizontal ? horizontalBars(xValues, groups, matrix, plot, max, colors, fg) : verticalBars(xValues, groups, matrix, plot, max, colors, fg);
    if (type === "line" || type === "area") body = lineChart(type, xValues, groups, matrix, plot, max, colors, fg);

    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(state.meta.title)}">
      ${grid}
      ${axisLabels(xValues, plot, fg, muted, xAxisTitle, yAxisTitle)}
      ${body}
      ${legend(groups, colors, width, height, fg)}
    </svg>`;
  }

  function gridLines(plot, max, fg) {
    let out = "";
    for (let i = 0; i <= 4; i += 1) {
      const y = plot.y + plot.h - (plot.h * i / 4);
      out += `<line x1="${plot.x}" y1="${y}" x2="${plot.x + plot.w}" y2="${y}" stroke="${fg}" opacity="0.12"/>`;
      out += `<text x="${plot.x - 8}" y="${y + 4}" text-anchor="end" font-size="11" fill="${fg}" opacity="0.62">${format(max * i / 4)}</text>`;
    }
    return out;
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

  function verticalBars(xValues, groups, matrix, plot, max, colors, fg) {
    const step = plot.w / Math.max(1, xValues.length);
    const gap = Math.min(18, step * 0.22);
    let out = "";
    xValues.forEach((_, xi) => {
      let stackedY = plot.y + plot.h;
      groups.forEach((group, gi) => {
        const value = matrix[gi][xi];
        const h = Math.abs(value) / max * plot.h;
        const barW = state.chart.stacked ? step - gap : (step - gap) / groups.length;
        const x = plot.x + step * xi + gap / 2 + (state.chart.stacked ? 0 : gi * barW);
        const y = state.chart.stacked ? stackedY - h : plot.y + plot.h - h;
        stackedY = y;
        out += `<rect x="${x}" y="${y}" width="${Math.max(1, barW - 2)}" height="${h}" rx="${state.style.rounded}" fill="${colors[gi % colors.length]}"><title>${esc(group)}: ${format(value)}</title></rect>`;
        if (state.chart.showLabels) {
          const inside = h >= 22;
          const labelY = inside ? y + Math.min(h - 6, h / 2 + 4) : Math.max(plot.y + 11, y - 4);
          out += `<text x="${x + barW / 2}" y="${labelY}" text-anchor="middle" font-size="11" font-weight="650" fill="${fg}">${format(value)}</text>`;
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
      const d = points.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
      const area = type === "area" ? `<path d="${d} L${points[points.length - 1][0]},${plot.y + plot.h} L${points[0][0]},${plot.y + plot.h} Z" fill="${colors[gi % colors.length]}" opacity="0.16"/>` : "";
      const dots = points.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${colors[gi % colors.length]}"><title>${esc(group)}: ${format(p[2])}</title></circle>`).join("");
      const labels = state.chart.showLabels ? points.map((p) => `<text x="${p[0]}" y="${Math.max(plot.y + 11, p[1] - 8)}" text-anchor="middle" font-size="11" font-weight="650" fill="${fg}">${format(p[2])}</text>`).join("") : "";
      return `${area}<path d="${d}" fill="none" stroke="${colors[gi % colors.length]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${dots}${labels}`;
    }).join("");
  }

  function legend(groups, colors, width, height, fg) {
    if (!state.chart.showLegend || groups.length < 2) return "";
    return `<g transform="translate(22 ${height - 22})">${groups.map((group, index) => {
      const x = index * 132;
      return `<rect x="${x}" y="-10" width="11" height="11" fill="${colors[index % colors.length]}" rx="2"/><text x="${x + 17}" y="0" font-size="12" fill="${fg}" opacity="0.72">${esc(shorten(group, 16))}</text>`;
    }).join("")}</g>`;
  }

  function renderPie() {
    const data = aggregateRows().slice(0, 10);
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
      const valueLabel = state.chart.showLabels
        ? `<text x="${x + 8}" y="${Math.max(pad + 11, y - 8)}" font-size="11" font-weight="650" fill="${fg}">${format(row[state.chart.y])}</text>`
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
    const rows = state.data.rows.filter((row) => Number.isFinite(num(row[state.chart.lat])) && Number.isFinite(num(row[state.chart.lon])));
    const lon2Column = columns().find((col) => /lon.*(2|max|end|bis)|lng.*(2|max|end|bis)|longitude.*(2|max|end|bis)/i.test(col));
    const lat2Column = columns().find((col) => /lat.*(2|max|end|bis)|latitude.*(2|max|end|bis)|breite.*(2|max|end|bis)/i.test(col));
    const ranges = lat2Column && lon2Column ? rows.map((row, index) => {
      const lat1 = num(row[state.chart.lat]);
      const lon1 = num(row[state.chart.lon]);
      const lat2 = num(row[lat2Column]);
      const lon2 = num(row[lon2Column]);
      const x1 = (Math.min(lon1, lon2) + 180) / 360 * width;
      const x2 = (Math.max(lon1, lon2) + 180) / 360 * width;
      const y1 = (90 - Math.max(lat1, lat2)) / 180 * height;
      const y2 = (90 - Math.min(lat1, lat2)) / 180 * height;
      return `<rect x="${x1}" y="${y1}" width="${Math.max(2, x2 - x1)}" height="${Math.max(2, y2 - y1)}" fill="${colors[index % colors.length]}" opacity="0.18" stroke="${colors[index % colors.length]}" stroke-width="1.6"><title>${esc(row[state.chart.label] || row[state.chart.x])}</title></rect>`;
    }).join("") : "";
    const points = rows.map((row, index) => {
      const lat = num(row[state.chart.lat]);
      const lon = num(row[state.chart.lon]);
      const x = (lon + 180) / 360 * width;
      const y = (90 - lat) / 180 * height;
      const r = 5 + Math.sqrt(Math.abs(num(row[state.chart.y]))) * 0.8;
      return `<circle cx="${x}" cy="${y}" r="${Math.min(26, r)}" fill="${colors[index % colors.length]}" opacity="0.72" stroke="white" stroke-width="1.5"><title>${esc(row[state.chart.label] || row[state.chart.x])}: ${format(row[state.chart.y])}</title></circle>`;
    }).join("");
    return `<svg viewBox="0 0 ${width} ${height}" role="img">
      <rect x="0" y="0" width="${width}" height="${height}" fill="${state.style.dark ? "#202629" : "#eef3f5"}"/>
      ${[-120, -60, 0, 60, 120].map((lon) => `<line x1="${(lon + 180) / 360 * width}" y1="0" x2="${(lon + 180) / 360 * width}" y2="${height}" stroke="${fg}" opacity="0.08"/>`).join("")}
      ${[-60, -30, 0, 30, 60].map((lat) => `<line x1="0" y1="${(90 - lat) / 180 * height}" x2="${width}" y2="${(90 - lat) / 180 * height}" stroke="${fg}" opacity="0.08"/>`).join("")}
      ${worldMapShapes(width, height, land, coast)}
      <text x="18" y="28" font-size="13" fill="${fg}" opacity="0.58">Symbolkarte aus Latitude/Longitude</text>
      ${ranges}
      ${points}
      <text x="${width - 14}" y="${height - 12}" text-anchor="end" font-size="10" fill="${fg}" opacity="0.5">Kartengrundlage: Natural Earth</text>
    </svg>`;
  }

  function worldMapShapes(width, height, land, coast) {
    if (!worldMapTopology) {
      loadWorldMap();
      return "";
    }
    const paths = worldTopologyPaths(worldMapTopology, width, height);
    return paths.map((path) => `<path d="${path}" fill="${land}" stroke="${coast}" stroke-width="0.6" opacity="0.9"/>`).join("");
  }

  async function loadWorldMap() {
    if (worldMapTopology || worldMapLoading) return;
    worldMapLoading = true;
    try {
      const response = await fetch(`${appBase}assets/data/world-110m.json`);
      if (!response.ok) throw new Error("World map could not be loaded.");
      worldMapTopology = await response.json();
      const frame = document.querySelector(".preview-frame");
      if (frame && state.chart.type === "map") frame.innerHTML = renderVisualization();
    } catch (error) {
      console.warn(error);
    } finally {
      worldMapLoading = false;
    }
  }

  function worldTopologyPaths(topology, width, height) {
    const object = topology.objects && topology.objects.countries;
    if (!object || !Array.isArray(object.geometries)) return [];
    return object.geometries.flatMap((geometry) => {
      if (geometry.type === "Polygon") return polygonPath(geometry.arcs, topology, width, height);
      if (geometry.type === "MultiPolygon") return geometry.arcs.flatMap((polygon) => polygonPath(polygon, topology, width, height));
      return [];
    });
  }

  function polygonPath(rings, topology, width, height) {
    const d = rings.map((ring) => {
      const points = ring.flatMap((arcIndex, index) => {
        const arc = topologyArc(topology, arcIndex);
        return index ? arc.slice(1) : arc;
      });
      return points.map((point, index) => `${index ? "L" : "M"}${mapX(point[0], width)},${mapY(point[1], height)}`).join("") + "Z";
    }).join("");
    return d ? [d] : [];
  }

  function topologyArc(topology, index) {
    const reverse = index < 0;
    const source = topology.arcs[reverse ? ~index : index] || [];
    const scale = topology.transform ? topology.transform.scale : [1, 1];
    const translate = topology.transform ? topology.transform.translate : [0, 0];
    let x = 0;
    let y = 0;
    const points = source.map((point) => {
      x += point[0];
      y += point[1];
      return [x * scale[0] + translate[0], y * scale[1] + translate[1]];
    });
    return reverse ? points.reverse() : points;
  }

  function mapX(lon, width) {
    return ((lon + 180) / 360) * width;
  }

  function mapY(lat, height) {
    return ((90 - lat) / 180) * height;
  }

  function renderTableViz() {
    const limit = Number(state.chart.tableLimit) || 100;
    return renderDataTable(state.data.rows.slice(0, limit));
  }

  function renderCards() {
    const data = aggregateRows().slice(0, 8);
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
    return new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 }).format(num(value));
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
  function iconLine() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 18 9 11l4 3 7-9"/><path d="M4 20h16"/></svg>`; }
  function iconArea() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 18 9 11l4 3 7-9v15H4Z" fill="currentColor" opacity=".18"/></svg>`; }
  function iconScatter() { return `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="15" r="2"/><circle cx="12" cy="9" r="2"/><circle cx="17" cy="13" r="2"/><circle cx="19" cy="5" r="2"/></svg>`; }
  function iconPie() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 1-8 5"/><path d="M12 3v9h9"/></svg>`; }
  function iconTable() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="5" width="16" height="14"/><path d="M4 10h16M9 5v14M15 5v14"/></svg>`; }
  function iconCards() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="5" width="7" height="14"/><rect x="13" y="5" width="7" height="14"/></svg>`; }
  function iconHeat() { return `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="5" height="5" opacity=".3"/><rect x="10" y="4" width="5" height="5" opacity=".6"/><rect x="16" y="4" width="5" height="5"/><rect x="4" y="10" width="5" height="5" opacity=".7"/><rect x="10" y="10" width="5" height="5" opacity=".2"/><rect x="16" y="10" width="5" height="5" opacity=".5"/><rect x="4" y="16" width="5" height="5"/><rect x="10" y="16" width="5" height="5" opacity=".5"/><rect x="16" y="16" width="5" height="5" opacity=".25"/></svg>`; }
  function iconMap() { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/></svg>`; }

  loadProject();
}());
