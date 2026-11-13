// ==========================================================================
// 东北冬季极寒徒步雪地靴采购深度调研与反软广审查报告 (2026) — Interactive App Logic
// ==========================================================================

(function initProcurementSite() {
  const D = window.PROCUREMENT_DATA;
  if (!D) return;

  // Sync Drive & PDF URLs across header/hero/footer from canonical data.js
  if (D.meta.driveFileUrl) {
    ["btn-drive-pdf", "hero-btn-drive", "footer-drive-pdf"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.href = D.meta.driveFileUrl;
    });
  }

  // ------------------------------------------------------------------------
  // 1. Render Biomechanical Engineering Rules
  // ------------------------------------------------------------------------
  const engContainer = document.getElementById("eng-rules-container");
  if (engContainer) {
    engContainer.innerHTML = D.userProfile.engineeringNotes.map((note, idx) => `
      <article class="eng-rule-card">
        <div class="eng-rule-num">ENGINEERING RULE 0${idx + 1}</div>
        <h3>${note.title}</h3>
        <p>${note.detail}</p>
      </article>
    `).join("");
  }

  // ------------------------------------------------------------------------
  // 2. Interactive Fit & Gear Simulator (180/80 · 鞋44码 · 裤48码)
  // ------------------------------------------------------------------------
  const simScene = document.getElementById("sim-scene");
  const simSock = document.getElementById("sim-sock");
  const simPant = document.getElementById("sim-pant");
  const simBanner = document.getElementById("sim-verdict-banner");
  const simStrip = document.getElementById("sim-boots-strip");

  function updateSimulator() {
    const scene = simScene ? simScene.value : "active";
    const sock = simSock ? simSock.value : "standard";
    const pant = simPant ? simPant.value : "softshell";

    let recommendedIds = [];
    let verdictHeadline = "";
    let verdictDetail = "";

    if (scene === "active") {
      recommendedIds = ["keen-revel-iv-high", "columbia-bugaboot-iii", "decathlon-sh500-mountain", "salomon-toundra-pro"];
      verdictHeadline = "工况匹配结论：【高产热山地穿越】首选 KEEN Revel IV High Polar (1023619) / 平价选 Columbia Bugaboot III / 百元选迪卡侬 SH500 山地款";
      verdictDetail = "连续爬升雪谷—羊草山或长白山林线时，80kg 体重产热量大且侧向防崴脚要求极高。优先选择 17–21cm 具硬质抗扭中底的技术型雪靴，切忌穿宽松无支撑的分体胶壳猎鸭靴爬陡坡。";
    } else if (scene === "deepcold") {
      recommendedIds = ["keen-revel-iv-high", "lowa-tibet-evo-400", "kamik-nation-plus", "decathlon-sh900-leather"];
      verdictHeadline = "工况匹配结论：【-30°C~-40°C 漠河极寒/深雪久站】首选 KEEN Revel IV High (400g) 或 LOWA Tibet Evo 400 / 平价可拆胆选 Kamik Nation Plus 或迪卡侬 SH900 真皮款";
      verdictDetail = "在零下三十余度低活动量行摄或连日宿农家火炕，静态隔冷层厚度与“内胆可拔出烘干”成为核心生命线！严禁穿单薄的 200g 中帮快走靴长时间原地站桩。";
    } else {
      recommendedIds = ["keen-revel-iv-high", "kailas-n44-flt-mid", "merrell-thermo-chill-2", "decathlon-nh100-zip"];
      verdictHeadline = "工况匹配结论：【冰瀑栈道与城市/景区轻装混合】首选 KEEN Revel IV High Polar / 千元国货选凯乐石 N44 湿冰底 / 超轻快走选迈乐 Thermo Chill 2";
      verdictDetail = "频繁进出东北 26°C 暖气室内与室外冰面栈道，兼顾鞋底湿冰防滑颗粒（玻璃纤维冰底 / Vibram Arctic Grip）与轻便灵巧步态最为关键，随身包内常备一副轻便链式冰爪即可无忧通行。";
    }

    const pantTipGlobal = pant === "softshell"
      ? "您当前选择【48码修身软壳裤（裤口约38cm）】：配 ≤21cm 技术靴可自然外罩并加戴高筒雪套；配 27–28cm 高筒毛毡内胆靴（SH900/Kamik）请将裤脚塞入靴筒拉紧！"
      : "您当前选择【48码双板滑雪裤/冲锋裤（裤口约48cm）】：自带内层防雪裙，可外罩全部 10 款雪地靴（含 SH900 与 Kamik 粗靴筒），深粉雪防护力拉满！";

    if (simBanner) {
      simBanner.innerHTML = `
        <div class="sim-result-title">${verdictHeadline}</div>
        <div class="sim-result-body">${verdictDetail}<br/><strong style="color:var(--accent-navy);">${pantTipGlobal}</strong></div>
      `;
    }

    if (simStrip) {
      simStrip.innerHTML = D.products.map(p => {
        const isHit = recommendedIds.includes(p.id);
        const targetSize = sock === "double" ? p.fitAdvice.thickSockSize : p.fitAdvice.recommendedSize;
        let pantAction = "";
        if (pant === "softshell") {
          if (p.specs.shaftNum >= 26.8 && p.id !== "salomon-toundra-pro") {
            pantAction = "48码软壳裤：塞入靴筒收紧";
          } else if (p.specs.shaftNum <= 18.0) {
            pantAction = "48码软壳裤：外罩 + 必戴雪套";
          } else {
            pantAction = "48码软壳裤：自然外罩顺畅";
          }
        } else {
          pantAction = "48码雪裤：防雪裙直接外罩";
        }

        const shortMap = {
          "decathlon-nh100-zip": "NH100 Zip",
          "decathlon-sh500-mountain": "SH500 山地",
          "decathlon-sh900-leather": "SH900 内胆",
          "columbia-bugaboot-iii": "Bugaboot III",
          "merrell-thermo-chill-2": "Thermo Chill 2",
          "kamik-nation-plus": "Nation Plus",
          "kailas-n44-flt-mid": "N44 FLT MID",
          "salomon-toundra-pro": "Toundra Pro",
          "keen-revel-iv-high": "Revel IV High",
          "lowa-tibet-evo-400": "Tibet Evo 400"
        };

        return `
          <a href="#boot-${p.id}" class="sim-mini-boot ${isHit ? 'recommended-now' : ''}" style="text-decoration:none;">
            <div class="b-name">#${p.index} ${p.brand.split(" ")[0]} · ${shortMap[p.id] || p.name}</div>
            <div class="b-size">${targetSize.split("（")[0]}</div>
            <div class="b-pant">${pantAction}</div>
          </a>
        `;
      }).join("");
    }
  }

  if (simScene && simSock && simPant) {
    [simScene, simSock, simPant].forEach(el => el.addEventListener("change", updateSimulator));
    updateSimulator();
  }

  // ------------------------------------------------------------------------
  // 3. Render Three Category Ultimate Picks
  // ------------------------------------------------------------------------
  const championsContainer = document.getElementById("champions-container");
  const winnerIds = ["decathlon-sh500-mountain", "columbia-bugaboot-iii", "keen-revel-iv-high"];
  const winnerVerdicts = {
    "decathlon-sh500-mountain": "迪卡侬全系唯一搭载硬质 PU 抗扭中底、5.0mm 山地深齿与顶部双金属快挂钩的真正登山级冬靴！完美撑住 80kg 负重走羊草山/长白山高产热路线不闷汗。（注：若去漠河 -35°C 静态久站，同预算直接切同门 8901614 真皮可拆羊毛胆 SH900！）",
    "columbia-bugaboot-iii": "OutdoorGearLab“最佳性价比奖”与 RunRepeat“最佳 200g 冬靴”双料得主。电锯实测后跟 TechLite 中底厚达 46.9mm 彻底隔绝冻土抽冷，18.3cm 一体注塑下壳蹚冰水滴水不漏，大促六七百元买到千五级硬核防护。",
    "keen-revel-iv-high": "全场综合总冠军！400g 保暖棉 + 足底三层蜂窝隔冷夹层 + 显微玻璃纤维极地防滑冰底三大绝活合一；家族招牌宽大护趾楦让 44 码脚穿重磅羊毛袜依然五趾舒展不挤血管，环保重磅牛巴戈真皮更彻底规避了合成涂层皮折痕开裂通病！"
  };

  if (championsContainer) {
    championsContainer.innerHTML = winnerIds.map((wid, idx) => {
      const p = D.products.find(item => item.id === wid);
      if (!p) return "";
      const isOverall = wid === "keen-revel-iv-high";
      return `
        <article class="champion-card ${isOverall ? 'overall-crown' : ''}">
          <div class="champion-ribbon">
            <span>★ ${p.winnerTitle}</span>
            <span class="mono">#0${p.index}</span>
          </div>
          <div class="champion-photo-stage js-open-lightbox" data-id="${p.id}" title="点击放大查看官方原图">
            <img src="${p.image}" alt="${p.name}" loading="eager" />
          </div>
          <div class="champion-content">
            <div class="champion-brand">${p.brand} · SKU: ${p.sku.split("（")[0]}</div>
            <h3 class="champion-title">${p.name}</h3>
            <div class="champion-meta-row">
              <span class="champion-price">到手 ${p.streetPrice.split("（")[0]}</span>
              <span>静 ${p.specs.tempStatic.split("（")[0]} / 动 ${p.specs.tempActive.split("（")[0]}</span>
            </div>
            <p class="champion-verdict">${winnerVerdicts[p.id]}</p>
            <div class="champion-fit-pill">
              <strong>44码专属选码：</strong><span class="mono" style="color:var(--accent-vermilion);font-weight:700;">${p.fitAdvice.recommendedSize}</span><br/>
              <span style="color:var(--ink-muted);">已核验 ${p.audit.totalReviews} 评论 · 精读 ${p.audit.sampledReviews}条 + ${p.audit.proReviews}篇测评</span>
            </div>
            <div class="champion-actions">
              <a href="#boot-${p.id}" class="btn btn-outline">查看完整档案 ↓</a>
              <a href="${p.jdUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-navy">京东购买 ↗</a>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // ------------------------------------------------------------------------
  // 4. Render 10-Boot Full Dossier Catalog with Filter / Search / Sort
  // ------------------------------------------------------------------------
  const catalogList = document.getElementById("dossier-catalog-list");
  const filterTabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");

  let activeFilter = "all";
  let searchQuery = "";
  let sortBy = "default";

  function renderCatalog() {
    if (!catalogList) return;

    let list = D.products.filter(p => {
      if (activeFilter === "winners" && !p.isCategoryWinner) return false;
      if (activeFilter !== "all" && activeFilter !== "winners" && p.category !== activeFilter) return false;

      if (searchQuery) {
        const hay = [
          p.brand, p.name, p.enName, p.sku, p.tierTag,
          p.specs.insulation, p.specs.waterproof, p.specs.outsole,
          p.officialIntro, p.recommendReason
        ].join(" ").toLowerCase();
        if (!hay.includes(searchQuery)) return false;
      }
      return true;
    });

    if (sortBy === "price-asc") {
      list.sort((a, b) => a.priceSortValue - b.priceSortValue);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.priceSortValue - a.priceSortValue);
    } else if (sortBy === "warmth") {
      list.sort((a, b) => a.specs.tempActiveNum - b.specs.tempActiveNum);
    } else if (sortBy === "weight") {
      list.sort((a, b) => a.specs.weightNum - b.specs.weightNum);
    } else {
      list.sort((a, b) => a.index - b.index);
    }

    if (list.length === 0) {
      catalogList.innerHTML = `
        <div style="background:#fff;border:1px solid var(--border-strong);border-radius:6px;padding:32px;text-align:center;color:var(--ink-secondary);">
          未找到匹配当前筛选词的雪地靴型号，请点击“全部推荐 (10)”或清空搜索词重试。
        </div>
      `;
      return;
    }

    catalogList.innerHTML = list.map(p => `
      <article id="boot-${p.id}" class="product-dossier ${p.isCategoryWinner ? 'is-winner' : ''}">
        <div class="pd-topbar">
          <div class="pd-badges">
            <span class="badge-index">#${String(p.index).padStart(2, "0")}</span>
            <span class="badge-cat">${p.categoryLabel}</span>
            <span class="badge-tier">${p.tierTag}</span>
            ${p.isCategoryWinner ? `<span class="badge-winner">★ ${p.winnerTitle}</span>` : ""}
          </div>
          <div class="pd-price-cluster">
            <span class="pd-street-price">到手参考价：${p.streetPrice}</span>
            <span class="pd-msrp-price">官方吊牌价：${p.msrpPrice}</span>
          </div>
        </div>

        <div class="pd-main-grid">
          <!-- Left Visual & Purchase Column -->
          <div class="pd-visual-col">
            <div class="pd-image-frame js-open-lightbox" data-id="${p.id}" title="点击放大检视真实官方产品图">
              <img src="${p.image}" alt="${p.brand} ${p.name} 真实产品图" loading="lazy" />
              <span class="zoom-hint">🔍 点击放大真图</span>
            </div>

            <div class="pd-sku-card">
              <div class="pd-sku-row">
                <span class="pd-sku-label">具体型号 / 官网准确货号 (SKU)</span>
                <button type="button" class="copy-sku-btn js-copy-sku" data-sku="${p.sku.split('（')[0].trim()}">复制货号</button>
              </div>
              <div class="pd-sku-val">${p.sku}</div>
            </div>

            <div class="pd-buy-links">
              <a href="${p.officialUrl}" target="_blank" rel="noopener noreferrer" class="buy-link official">
                <span>品牌官网产品页直达</span>
                <span class="mono">Official ↗</span>
              </a>
              <a href="${p.jdUrl}" target="_blank" rel="noopener noreferrer" class="buy-link jd">
                <span>京东自营 / 国际购买链接</span>
                <span class="mono">JD.com ↗</span>
              </a>
              <a href="${p.taobaoUrl}" target="_blank" rel="noopener noreferrer" class="buy-link tb">
                <span>淘宝 / 天猫官方购买链接</span>
                <span class="mono">Taobao/Tmall ↗</span>
              </a>
            </div>

            <div class="pd-buynote">
              <strong>下单验真与防坑指令：</strong>${p.buyNote}
            </div>
          </div>

          <!-- Right Engineering, Fit & Audit Column -->
          <div class="pd-detail-col">
            <div class="pd-title-block">
              <div class="mono" style="font-size:0.78rem;color:var(--accent-navy);font-weight:700;">${p.brand}</div>
              <h3>${p.name}</h3>
              <div class="pd-en-name">${p.enName}</div>
            </div>

            <div class="pd-spec-grid">
              <div class="pd-spec-item">
                <span>核心保暖填充</span>
                <strong>${p.specs.insulation}</strong>
              </div>
              <div class="pd-spec-item">
                <span>防水透气架构</span>
                <strong>${p.specs.waterproof}</strong>
              </div>
              <div class="pd-spec-item">
                <span>大底配方与齿深</span>
                <strong>${p.specs.outsole}（齿深 ${p.specs.lugDepth}）</strong>
              </div>
              <div class="pd-spec-item">
                <span>静态 / 动态参考温标</span>
                <strong class="mono">静 ${p.specs.tempStatic} ｜ 动 ${p.specs.tempActive}</strong>
              </div>
              <div class="pd-spec-item">
                <span>单只重量 / 靴筒高度</span>
                <strong class="mono">${p.specs.weightSingle} ｜ 筒高 ${p.specs.shaftHeight}</strong>
              </div>
              <div class="pd-spec-item">
                <span>可拆内胆 / 冰爪兼容</span>
                <strong>内胆：${p.specs.removableLiner} ｜ ${p.specs.cramponFit}</strong>
              </div>
            </div>

            <div class="pd-prose-block">
              <strong class="sec-tag">【官方介绍】</strong>${p.officialIntro}
            </div>

            <div class="pd-prose-block">
              <strong class="sec-tag">【深度推荐理由】</strong>${p.recommendReason}
            </div>

            <div class="pd-fit-box">
              <div class="pd-fit-headline">
                <span>180cm/80kg · 日常44码脚 · 48码裤 专属适配方案</span>
                <span class="pd-size-highlight">推荐选购：${p.fitAdvice.recommendedSize}</span>
              </div>
              <div class="pd-fit-grid">
                <div><strong>选码依据：</strong>${p.fitAdvice.sizeReason}</div>
                <div><strong>48码雪裤兼容：</strong>${p.fitAdvice.pant48Fit}</div>
                <div><strong>最佳适用工况：</strong>${p.fitAdvice.bestScenes}</div>
                <div><strong>不建议场景：</strong>${p.fitAdvice.avoidScenes}</div>
              </div>
            </div>

            <div class="pd-cons-box">
              <h4>真实差评与物理局限全披露（拒绝报喜不报忧）</h4>
              <ul>
                ${p.consDisclosure.map(c => `<li>${c}</li>`).join("")}
              </ul>
            </div>

            <details class="pd-audit-box" open>
              <summary class="pd-audit-summary">
                <span>✓ 内容与反软广核验通过：全网评论 ${p.audit.totalReviews} ｜ 精读 ${p.audit.sampledReviews} 条实购评价 + ${p.audit.proReviews} 篇独立测评</span>
                <span class="audit-toggle-hint">收起/展开核验台账</span>
              </summary>
              <div class="pd-audit-details">
                <div><strong>各平台评论分布：</strong>${p.audit.platformBreakdown}</div>
                <div><strong>交叉核验专业信源：</strong>${p.audit.proSources}（${p.audit.credibilityTier}）</div>
                <div style="grid-column: 1 / -1;"><strong>反软广与官网勘误记录：</strong>${p.audit.adFilteredNote}</div>
              </div>
            </details>
          </div>
        </div>
      </article>
    `).join("");
  }

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeFilter = tab.getAttribute("data-filter") || "all";
      renderCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      sortBy = e.target.value;
      renderCatalog();
    });
  }

  renderCatalog();

  // Delegated click handler for SKU copy & Image Lightbox
  const lightbox = document.getElementById("img-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxMeta = document.getElementById("lightbox-meta");
  const lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(productId) {
    const p = D.products.find(x => x.id === productId);
    if (!p || !lightbox) return;
    lightboxImg.src = p.image;
    lightboxImg.alt = p.name;
    lightboxTitle.textContent = `${p.brand} · ${p.name}（准确货号：${p.sku}）`;
    lightboxMeta.textContent = `官方图源已视觉核验 ｜ 到手价：${p.streetPrice} ｜ 44码建议选码：${p.fitAdvice.recommendedSize}`;
    lightbox.classList.add("open");
  }

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove("open");
  }

  document.addEventListener("click", e => {
    const copyBtn = e.target.closest(".js-copy-sku");
    if (copyBtn) {
      const sku = copyBtn.getAttribute("data-sku");
      if (sku && navigator.clipboard) {
        navigator.clipboard.writeText(sku).then(() => {
          const prev = copyBtn.textContent;
          copyBtn.textContent = "已复制 ✓";
          setTimeout(() => { copyBtn.textContent = prev; }, 1500);
        });
      }
      return;
    }

    const lbTrigger = e.target.closest(".js-open-lightbox");
    if (lbTrigger) {
      openLightbox(lbTrigger.getAttribute("data-id"));
      return;
    }

    if (e.target === lightbox || e.target === lightboxClose) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLightbox();
  });

  // ------------------------------------------------------------------------
  // 5. Multi-Dimensional Comparison Table (Sortable) & Eliminated Table
  // ------------------------------------------------------------------------
  const matrixTbody = document.getElementById("matrix-tbody");
  let matrixSortCol = "index";
  let matrixSortAsc = true;

  function renderMatrixTable() {
    if (!matrixTbody) return;
    const rows = [...D.products];
    rows.sort((a, b) => {
      let va = a.index;
      let vb = b.index;
      if (matrixSortCol === "price") { va = a.priceSortValue; vb = b.priceSortValue; }
      else if (matrixSortCol === "weight") { va = a.specs.weightNum; vb = b.specs.weightNum; }
      else if (matrixSortCol === "staticTemp") { va = a.specs.tempStaticNum; vb = b.specs.tempStaticNum; }
      else if (matrixSortCol === "activeTemp") { va = a.specs.tempActiveNum; vb = b.specs.tempActiveNum; }
      return matrixSortAsc ? va - vb : vb - va;
    });

    matrixTbody.innerHTML = rows.map(p => `
      <tr class="${p.isCategoryWinner ? 'winner-row' : ''}">
        <td>
          <span class="mono" style="font-weight:700;">#${String(p.index).padStart(2, "0")}</span>
          <span style="font-size:0.74rem;color:var(--accent-navy);font-weight:700;">[${p.categoryLabel}]</span>
          ${p.isCategoryWinner ? `<span style="display:inline-block;background:var(--accent-vermilion);color:#fff;font-size:0.7rem;padding:1px 5px;border-radius:2px;font-weight:700;">★首选</span>` : ""}
          <br/>
          <a href="#boot-${p.id}" style="font-weight:700;color:var(--ink-primary);">${p.brand.split(" ")[0]} · ${p.name.replace(/^DECATHLON |^QUECHUA |^Columbia |^Merrell |^Kamik |^凯乐石 |^Salomon |^KEEN |^LOWA /, "")}</a>
        </td>
        <td class="mono" style="font-size:0.79rem;">${p.sku}</td>
        <td class="mono">
          <strong style="color:var(--accent-vermilion);">${p.streetPrice.split("（")[0]}</strong><br/>
          <span style="color:var(--ink-muted);font-size:0.76rem;">吊牌 ${p.msrpPrice.split("（")[0]}</span>
        </td>
        <td>${p.specs.insulation}<br/><span style="color:var(--ink-muted);font-size:0.76rem;">可拆胆：${p.specs.removableLiner.split("（")[0]}</span></td>
        <td>${p.specs.waterproof}</td>
        <td>${p.specs.outsole}<br/><strong class="mono">齿深 ${p.specs.lugDepth.split("（")[0]}</strong></td>
        <td class="mono">${p.specs.weightSingle.split("（")[0]}<br/>高 ${p.specs.shaftHeight.split("（")[0]}</td>
        <td class="mono">${p.specs.tempStatic.split("（")[0]}</td>
        <td class="mono" style="font-weight:700;color:var(--accent-navy);">${p.specs.tempActive.split("（")[0]}</td>
        <td class="mono" style="font-weight:700;color:var(--accent-vermilion);">${p.fitAdvice.recommendedSize.split("（")[0]}</td>
        <td class="mono" style="font-size:0.78rem;">${p.audit.totalReviews.split("（")[0]}<br/>精读 ${p.audit.sampledReviews}条+${p.audit.proReviews}篇</td>
        <td style="white-space:nowrap;font-size:0.8rem;">
          <a href="${p.officialUrl}" target="_blank" rel="noopener noreferrer">官网↗</a> ·
          <a href="${p.jdUrl}" target="_blank" rel="noopener noreferrer">京东↗</a> ·
          <a href="${p.taobaoUrl}" target="_blank" rel="noopener noreferrer">淘宝↗</a>
        </td>
      </tr>
    `).join("");
  }

  document.querySelectorAll("#comparison-matrix-table th.sortable").forEach(th => {
    th.addEventListener("click", () => {
      const col = th.getAttribute("data-col");
      if (matrixSortCol === col) {
        matrixSortAsc = !matrixSortAsc;
      } else {
        matrixSortCol = col;
        matrixSortAsc = true;
      }
      renderMatrixTable();
    });
  });

  renderMatrixTable();

  const elimTbody = document.getElementById("eliminated-tbody");
  if (elimTbody) {
    elimTbody.innerHTML = D.eliminatedSummary.map(e => `
      <tr>
        <td><strong>${e.model}</strong></td>
        <td>${e.reason}</td>
      </tr>
    `).join("");
  }

  // ------------------------------------------------------------------------
  // 6. Render Forensic Audit & Anti-Ad Tables + Essential Kit
  // ------------------------------------------------------------------------
  const tiersContainer = document.getElementById("credibility-tiers-container");
  if (tiersContainer) {
    tiersContainer.innerHTML = D.credibilityFramework.map((c, idx) => `
      <div class="tier-card ${idx === 3 ? 'tier-blacklist' : ''}">
        <h4>${c.tier}</h4>
        <p><strong>代表渠道：</strong>${c.sources}</p>
        <p style="margin-bottom:0;"><strong>权重逻辑：</strong>${c.whyTrust}</p>
      </div>
    `).join("");
  }

  const auditPerBootTbody = document.getElementById("audit-per-boot-tbody");
  if (auditPerBootTbody) {
    auditPerBootTbody.innerHTML = D.products.map(p => `
      <tr>
        <td>
          <strong>#${p.index} ${p.brand.split(" ")[0]}</strong><br/>
          <span style="font-size:0.8rem;">${p.enName.split("(")[0]}</span><br/>
          <code style="font-size:0.75rem;color:var(--accent-navy);">${p.sku.split("（")[0]}</code>
        </td>
        <td><strong>${p.audit.totalReviews}</strong><br/><span style="font-size:0.8rem;color:var(--ink-secondary);">${p.audit.platformBreakdown}</span></td>
        <td class="mono">精读 <strong>${p.audit.sampledReviews}</strong> 条评价<br/>+ <strong>${p.audit.proReviews}</strong> 篇专业实测</td>
        <td>
          <strong>测评来源：</strong>${p.audit.proSources}<br/>
          <span style="color:var(--accent-pine);font-size:0.82rem;"><strong>排雷记录：</strong>${p.audit.adFilteredNote}</span>
        </td>
      </tr>
    `).join("");
  }

  const antiAdTbody = document.getElementById("anti-ad-tbody");
  if (antiAdTbody) {
    antiAdTbody.innerHTML = D.antiAdCases.map(a => `
      <tr>
        <td class="mono" style="font-weight:700;color:var(--accent-vermilion);">${a.id}</td>
        <td><strong>${a.sourceType}</strong></td>
        <td>${a.target}</td>
        <td>${a.evidence}</td>
        <td><strong style="color:var(--accent-pine);">${a.action}</strong></td>
      </tr>
    `).join("");
  }

  const kitContainer = document.getElementById("kit-container");
  if (kitContainer) {
    kitContainer.innerHTML = D.essentialKit.map((k, idx) => `
      <article class="kit-card">
        <div class="mono" style="font-size:0.75rem;color:var(--accent-vermilion);font-weight:700;margin-bottom:4px;">MANDATORY GEAR 0${idx + 1}</div>
        <h3>${k.item}</h3>
        <p><strong>选型硬指标：</strong>${k.spec}</p>
        <div class="kit-budget">${k.budget}</div>
      </article>
    `).join("");
  }
})();
