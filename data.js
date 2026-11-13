// 东北冬季极寒徒步雪地靴采购深度调研与反软广审查数据库 (2026 冬季刊)
// 目标用户画像：男性 · 180cm / 80kg · 日常运动鞋码 EU 44 (280mm) · 冬季裤码 CN/EU 48 (L/XL)

window.PROCUREMENT_DATA = {
  meta: {
    title: "东北冬季极寒徒步雪地靴采购深度调研与反软广审查报告",
    subtitle: "针对 180cm / 80kg · 日常鞋44码 · 裤48码 男性徒步者的足部热学、防滑与支撑工程选型指南",
    edition: "2026–2027 极寒雪季采购定稿版",
    auditDate: "2026-11-13",
    repoUrl: "https://github.com/VioletWYL/ne-extreme-snowboots-2026",
    liveSiteUrl: "https://violetwyl.github.io/ne-extreme-snowboots-2026/",
    pdfPath: "./report/northeast-extreme-cold-snowboots-2026.pdf",
    pdfFilename: "东北冬季极寒徒步雪地靴采购调研报告_2026.pdf",
    driveFolderUrl: "https://drive.google.com/drive/folders/14e1IK7ikvIhvEkchmJKMrZDSd8NE_-pg",
    driveFileUrl: "https://drive.google.com/file/d/1bcgAdn8xd350iTqEPrt32QaaCgGzbLU3/view?usp=drivesdk",
    stats: {
      totalModels: 10,
      eliminatedModels: 11,
      totalPoolReviews: "36,600+",
      sampledReviewsRead: 375,
      proTestsRead: 24,
      independentOutlets: 14,
      rejectedAdCases: 10
    }
  },

  userProfile: {
    gender: "男",
    heightCm: 180,
    weightKg: 80,
    dailyShoeSize: "EU 44（脚长约 275–280 mm / 常规 US 10）",
    pantSize: "48码（国产 XL / 180/84A–88A，腰围约 84–86 cm）",
    targetTemp: "-20°C 至 -40°C（哈尔滨 / 雪乡羊草山 / 长白山 / 大兴安岭 / 漠河）",
    engineeringNotes: [
      {
        title: "80kg 负重底盘与抗冻传导红线",
        detail: "180cm/80kg 叠加冬季背负（相机/保温壶/冰爪/备用衣约 6–15kg），总落地冲击超 90kg。普通薄底 EVA 棉鞋不仅足弓易塌陷酸痛，且被踩扁的鞋垫会失去静止空气层，东北 -30°C 冻土寒气将在 15 分钟内抽透脚底。必须选择后跟堆叠 ≥30mm、带尼龙/TPU 抗扭片或独立隔冷层（气凝胶/热反射铝箔/EVA壳）的专业靴底。"
      },
      {
        title: "日常 44 码的“防缺血冻伤”黄金选码法则",
        detail: "极寒徒步必须穿重磅美利奴羊毛袜（壁厚 3–4mm，如 Smartwool Mountaineering）甚至双层袜。若按日常正码买 EU 44，厚袜会挤占前掌空间压迫毛细血管——在 -25°C 下末梢血液循环受阻比鞋薄更易引发冻伤！本报告 10 款靴均需放大半码至一码（普遍指向 EU 44.5–45 / US 10.5–12，各品牌楦型差异已在单品卡逐一标定）。"
      },
      {
        title: "裤 48 码裤脚围度 vs 靴筒高度联动工程学",
        detail: "48 码冬季软壳徒步裤常规裤脚周长约 36–40cm，双板滑雪裤/硬壳冲锋裤约 46–50cm。面对 15–20cm 中高帮技术徒步靴（如 SH500、KEEN、LOWA），48 码裤脚可自然罩在靴筒外并配合高筒雪套彻底封死粉雪；面对 >26cm 粗壮毛毡内胆高筒靴（如 SH900、Kamik），修身软壳裤无法外罩，需将裤脚塞入靴筒或外搭加大号雪套。"
      }
    ]
  },

  categories: [
    {
      id: "decathlon",
      name: "迪卡侬系列",
      enName: "DECATHLON / QUECHUA",
      priceBand: "¥209 – ¥799",
      count: 3,
      summary: "依托法国勃朗峰 Quechua 实验室标准化静态/动态双温标测试（ISO 20344），参数诚实无虚标，全国门店与京东自营退换极速，预算百元至七百元内的安心基石。",
      winnerId: "decathlon-sh500-mountain"
    },
    {
      id: "value",
      name: "平价口碑系列",
      enName: "VALUE & REPUTABLE",
      priceBand: "¥460 – ¥1,149",
      count: 4,
      summary: "严选北美与国内专业户外圈经受上万条实购评价及电锯拆解考验的实力派，100% 具备真实防水膜或注塑橡胶壳，彻底剔除南极人/回力/骆驼时装线等无防水假棉鞋。",
      winnerId: "columbia-bugaboot-iii"
    },
    {
      id: "flagship",
      name: "顶级性能系列",
      enName: "FLAGSHIP PERFORMANCE",
      priceBand: "¥1,280 – ¥3,580",
      count: 3,
      summary: "汇聚 NASA 宇航气凝胶、400g 极地锁温配微玻璃纤维冰底、德国精工可换底板楦三大技术巅峰，专为长白山/漠河/大兴安岭极寒长线穿越打造。",
      winnerId: "keen-revel-iv-high"
    }
  ],

  products: [
    // ==================== 第一类：迪卡侬 (3款) ====================
    {
      id: "decathlon-nh100-zip",
      index: 1,
      category: "decathlon",
      categoryLabel: "迪卡侬",
      tierTag: "梯度1 · 百元秒穿脱高帮入门",
      isCategoryWinner: false,
      brand: "DECATHLON 迪卡侬 (QUECHUA)",
      name: "QUECHUA 男士保暖防水侧拉链高帮雪地徒步靴 NH100 High Zip",
      enName: "QUECHUA Men's Waterproof Snow Hiking Boots NH100 High Zip (ex-SH100 Ultra-Warm Zip)",
      sku: "8851794（现行烟熏黑）/ 8558227（前代同构款）",
      msrpPrice: "¥299.9",
      streetPrice: "¥209.8 – ¥269.9",
      priceSortValue: 239,
      image: "./assets/products/decathlon-nh100-zip.jpg",
      imageSourceUrl: "https://contents.mediadecathlon.com/p2904869/k$f242ec5237eca77496a08ec4975de2ec/men-s-waterproof-snow-boots-nh100-high-zip-black-quechua-8851794.jpg?f=1200x0&format=jpg",
      officialUrl: "https://www.decathlon.com.hk/en-HK/p/12-c-men-s-warm-snow-hiking-boots-nh100-high-zip-black-quechua-8851794.html",
      jdUrl: "https://item.jd.com/10168642053343.html",
      taobaoUrl: "https://world.taobao.com/dianpu/59991203.htm",
      buyNote: "京东自营 44/45 码常态现货，认准侧拉链高帮款货号 8851794。",
      specs: {
        insulation: "一体式聚酯保暖太空棉 + 抓绒内衬",
        waterproof: "内置防水透气薄膜 + 拉链内防风挡水布",
        outsole: "Snowcontact 低温防滑橡胶底",
        lugDepth: "4.0 mm",
        weightSingle: "544 g",
        weightNum: 544,
        shaftHeight: "24.0 cm",
        shaftNum: 24.0,
        tempStatic: "-12°C",
        tempStaticNum: -12,
        tempActive: "-21°C",
        tempActiveNum: -21,
        removableLiner: "否（固定内衬）",
        cramponFit: "仅兼容轻型橡胶链条冰爪"
      },
      officialIntro: "迪卡侬入门级高帮防寒雪靴主力款，内置全袜套防水透气薄膜阻隔融雪渗入，内侧全开式长拉链配合防雪挡布实现 3 秒快速穿脱；4mm Snowcontact 橡胶齿纹针对压实积雪路面设计，经实验室认证静态舒适温标 -12°C、动态极限温标 -21°C（注：已纠偏港台站误植 -35°C 的换算录入 Bug）。",
      recommendReason: "¥200 出头价位唯一具备实验室真实温标与全防水薄膜的正规雪地靴，彻底秒杀同价位无防水膜的淘宝爆款大棉鞋。对于预算极严、以哈尔滨/雪乡成熟木栈道和包车游为主，且频繁进出东北暖气房/火炕民宿需要快速穿脱的场景，它是极具性价比的保底通勤之选。",
      fitAdvice: {
        recommendedSize: "EU 45（28.5 cm）",
        thickSockSize: "EU 45（高脚背建议试 46）",
        sizeReason: "无鞋带调节脚背围度，全球 12% 买家反馈偏小、高脚背卡拉链；日常 44 码配重磅羊毛袜必须买 45 码。",
        pant48Fit: "靴筒修身无外凸挂钩，48 码软壳裤/雪裤裤脚可直接轻松罩在靴筒外；进 >25cm 野雪需加雪套防领口灌雪。",
        bestScenes: "中央大街/雪乡景区栈道、包车游短途踩雪、营地民宿周边快穿。",
        avoidScenes: "羊草山等 4 小时以上山地陡坡重装穿越（80kg 体重下软靴筒毫无脚踝抗扭支撑）。"
      },
      consDisclosure: [
        "聚酯软靴筒几乎无侧向抗扭刚度，法国实购买家与 Field & Stream 实测均指出不适合严肃山地崎岖徒步。",
        "无鞋带容积调节，穿超厚羊毛袜时足弓转折处拉链张力大，硬拉易卡顿。",
        "跨雪季频繁弯折后，第二年前掌折痕与拉链根部薄膜存在老化渗水个案；固定内衬多日出汗难速干。"
      ],
      audit: {
        totalReviews: "4,010+ 条",
        platformBreakdown: "迪卡侬全球评价库两代合计 2,010 条（8851794 现款 686 条 4.7★ + 8558227 前代 1,324 条 4.7★，官方统计推荐率 57%）+ 京东自营 2,000+ 条（99%好评）",
        sampledReviews: 28,
        proReviews: 1,
        proSources: "Field & Stream (2026-01 北美踏雪实测)",
        credibilityTier: "Tier 1 媒体实测克重 + Tier 2 欧洲多语种差评穿透",
        adFilteredNote: "纠偏迪卡侬港/台站将 -6°F 误录为 -35°C 的官网参数 Bug，剔除搜狐营销号吹嘘其可走冰面陡坡的伪测评。"
      }
    },

    {
      id: "decathlon-sh500-mountain",
      index: 2,
      category: "decathlon",
      categoryLabel: "迪卡侬",
      tierTag: "梯度2 · 山地技术徒步硬支撑",
      isCategoryWinner: true,
      winnerTitle: "迪卡侬品类 · 终极推荐（徒步向）",
      brand: "DECATHLON 迪卡侬 (QUECHUA)",
      name: "QUECHUA 男款山地保暖防水中帮雪地登山徒步靴 SH500 Mountain Mid",
      enName: "QUECHUA Men's Warm & Waterproof Snow Hiking Boots SH500 Mountain Mid (MH500 Mid)",
      sku: "8665669（烟熏黑主推）/ 8502616（黑红同模款）",
      msrpPrice: "¥499.9 – ¥549.9",
      streetPrice: "¥314.9 – ¥449.9",
      priceSortValue: 399,
      image: "./assets/products/decathlon-sh500-mountain.jpg",
      imageSourceUrl: "https://contents.mediadecathlon.com/p2520577/k$dd3ce5ea3381935f375efe1ca68644cb/men-s-waterproof-snow-boots-sh500-black-quechua-8665669.jpg?f=1200x0&format=jpg",
      officialUrl: "https://www.decathlon.co.uk/p/men-s-waterproof-snow-boots-sh500-black/335920/c382c382c242m8665669",
      jdUrl: "https://www.jd.com/brand/16750ef2ca73f39c27b6f.html",
      taobaoUrl: "https://world.taobao.com/dianpu/59991203.htm",
      buyNote: "认准顶部 2 对橙黑金属快挂钩 + 全包胶防踢鞋头的山地款（8665669），切勿买成平底城市皮靴款 8738058！",
      specs: {
        insulation: "一体式高密抓绒保暖内衬（60% PET + 40% rPET）",
        waterproof: "5–25μm 微孔全袜套防水透气薄膜 + 连体风琴舌",
        outsole: "Snowcontact 山地橡胶底 + 40% PU 抗扭中底",
        lugDepth: "5.0 mm",
        weightSingle: "565 g",
        weightNum: 565,
        shaftHeight: "17.0 cm",
        shaftNum: 17.0,
        tempStatic: "-8°C",
        tempStaticNum: -8,
        tempActive: "-17°C",
        tempActiveNum: -17,
        removableLiner: "否（高透气一体衬）",
        cramponFit: "完美兼容 11–14 齿链式冰爪与踏雪板"
      },
      officialIntro: "专为冬季山地雪坡攀登与中高强度雪野健行研发。鞋面采用 30% 硬质 PU 支撑覆膜与抗撕裂再生织物，前掌配备坚固防撞包胶鞋头，踝部搭载 2 对金属快速锁紧挂钩；40% 聚氨酯高刚性中底结合 5.0mm Snowcontact 山地深耳齿与后跟踏雪板限位槽，认证温标静态 -8°C / 动态 -17°C。",
      recommendReason: "迪卡侬全系唯一真正具备“专业登山鞋抗扭底盘”的冬季战靴！针对 180cm/80kg 健壮体格走东升林场穿越羊草山、长白山林线等连续 4–6 小时高产热徒步路线，笨重棉靴会闷汗湿袜，而 SH500 Mountain Mid 提供精准的侧向防崴脚支撑与轻快步态，不到 450 元即可获得扎实山地防护。",
      fitAdvice: {
        recommendedSize: "EU 45（28.5 cm）",
        thickSockSize: "EU 45（预留 5mm 防下坡顶趾）",
        sizeReason: "前端带无延展性的硬质包胶防撞头，44 码脚穿重磅羊毛袜下陡坡易顶脚趾，选 45 码并用双金属钩锁紧脚踝最稳。",
        pant48Fit: "48 码防风雪裤裤脚完美覆盖 17cm 中帮靴口；进 >15cm 粉雪林区必须强制搭配高筒防水雪套（如 MT500 雪套）防倒灌。",
        bestScenes: "雪谷—羊草山—雪乡高心率徒步穿越、长白山景区与林间徒步、东北冬季自驾（唯一灵巧好开车的迪卡侬冬靴）。",
        avoidScenes: "严禁用于 -15°C 以下长时间原地静止排队（如冰雪大世界夜间排队 1 小时以上必冻脚趾，静止需贴脚底暖贴）。"
      },
      consDisclosure: [
        "静态保暖上限偏低（官标静态 -8°C），Reddit 与印度站买家实测在严寒中停步拍照超 20 分钟脚尖即开始发凉。",
        "Snowcontact 橡胶仅针对雪晶咬合，在镜面黑冰与被游客踩光的冰台阶上无破冰能力，必须外挂金属冰爪。",
        "原厂圆形化纤鞋带表面偏滑，雪地行走必须打双死结；PU 发泡中底闲置 5 年左右存在自然水解寿命边界。"
      ],
      audit: {
        totalReviews: "2,439+ 条",
        platformBreakdown: "迪卡侬全球评价库同模合计 1,939 条（8665669 黑款 913 条 4.5★ + 8502616 红黑款 1,026 条 4.6★，推荐率 79.4%）+ 京东/天猫累计 500+ 条",
        sampledReviews: 32,
        proReviews: 3,
        proSources: "KEEDAN (2026-11)、法国 Les Crins du Barde 长测、法国 Test4Outside 实验室",
        credibilityTier: "Tier 1 欧洲独立户外测试 + Tier 2 全球近两千条长尾追评",
        adFilteredNote: "抓获并剔除搜狐账号 122645099 在 9 月初（哈尔滨 +20°C）伪造“-15°C 雪乡踩雪实测”及捏造“铝箔鞋垫”的 AI 假软文。"
      }
    },

    {
      id: "decathlon-sh900-leather",
      index: 3,
      category: "decathlon",
      categoryLabel: "迪卡侬",
      tierTag: "梯度3 · 极寒深雪可拆羊毛胆旗舰",
      isCategoryWinner: false,
      brand: "DECATHLON 迪卡侬 (QUECHUA)",
      name: "QUECHUA 男士极寒可拆卸羊毛毡内胆防水高帮雪地靴 SH900 / NH900 Leather",
      enName: "QUECHUA Men's Waterproof Winter Snow Boots SH900 / NH900 Leather Lace-Up",
      sku: "8901614（小牛皮压胶升级款）/ 8654793（织物高帮款）",
      msrpPrice: "¥599.9 – ¥899.9",
      streetPrice: "¥499.9 – ¥799.9",
      priceSortValue: 699,
      image: "./assets/products/decathlon-sh900-leather.jpg",
      imageSourceUrl: "https://contents.mediadecathlon.com/p2288986/k$a47bb0b7547660e5a12f84553185ab31/picture.jpg?f=1200x0&format=jpg",
      officialUrl: "https://www.decathlon.ca/en/p/mens-waterproof-winter-boots-sh-900/305000/c247m8901614",
      jdUrl: "https://www.jd.com/brand/1318ccd9d10b9ad763cb.html",
      taobaoUrl: "https://world.taobao.com/dianpu/59991203.htm",
      buyNote: "必认准“黑色一体 EVA 防水下壳 + 6对金属D扣 + 靴口白色可拆毛毡内胆”（货号 8901614 或 8654793），勿买成无内胆款 8546262！",
      specs: {
        insulation: "可拆卸加厚毛毡独立内靴（25% 天然羊毛 + 75% 聚酯）",
        waterproof: "一体注塑 100% 防水 EVA 下壳 + 8901614 壳面压胶密封",
        outsole: "Snowcontact 超深齿雪地橡胶大底",
        lugDepth: "5.5 mm",
        weightSingle: "830 g",
        weightNum: 830,
        shaftHeight: "27.0 cm",
        shaftNum: 27.0,
        tempStatic: "-23°C",
        tempStaticNum: -23,
        tempActive: "-33°C",
        tempActiveNum: -33,
        removableLiner: "是（25% 羊毛毡内靴可拔出晾干）",
        cramponFit: "需选 XL 加大号链式冰爪（EVA 下壳宽大）"
      },
      officialIntro: "迪卡侬抗寒等级天花板（静态舒适 -23°C / 动态舒适 -33°C，加拿大官网公布实验室极限耐受达 -47°C）。采用经典北美极地分体式 Pac-Boot 架构：下半截为 100% 隔水隔冷的发泡 EVA 一体注塑壳（8901614 升级为小牛皮鞋帮及壳面防水压胶），内置可完全拔出的 25% 羊毛混纺加厚毛毡内胆与 5.5mm 全系最深抓地齿。",
      recommendReason: "若东北行程直奔漠河/根河（-35°C）、长白山天池顶寒风口或需在夜间冰雪大世界/雾凇岛静止蹲守数小时，这是百元级唯一能正面硬刚极寒且解决“多日连续徒步汗湿结冰”痛点的利器——每晚把羊毛毡内胆拔出放暖气旁通风晾干，次日清晨永远干爽滚烫！",
      fitAdvice: {
        recommendedSize: "EU 45（28.5 cm）",
        thickSockSize: "EU 45（可容重磅羊毛袜+暖足贴）",
        sizeReason: "独立羊毛毡内胆壁厚达 6–8mm，选 44 码配厚袜会压扁毛毡纤维丧失隔热空气层；选 45 码外用 6 对 D 扣收紧最合理。",
        pant48Fit: "靴口高 27cm 且毛绒领口粗壮！48 码带拉链扩容口的双板雪裤可外罩；常规修身软壳裤无法外罩，应将裤脚塞入靴筒并收紧鞋带。",
        bestScenes: "漠河/北极村/呼伦贝尔 -30°C~-40°C 极寒穿越、齐膝深粉雪趟雪、雾凇与星空长时间静态行摄。",
        avoidScenes: "绝对严禁穿此靴自驾开车（宽大 EVA 胶壳丧失踏板脚感极危险）；不适合乱石山脊高配速攀爬。"
      },
      consDisclosure: [
        "EVA 下壳 100% 不透气，脚汗水汽必然在壳内壁与毛毡外侧冷凝成水珠——每晚必须拔出内胆擦干内壁，否则连续穿 3 天壳底积冰！",
        "鞋壳宽大偏沉（约 830g/只），步态有明显“太空靴/雨靴感”，灵活性远不如 SH500 Mountain Mid。",
        "老织物款 8654793 壳面缝线未压胶（真皮款 8901614 已做壳面压胶，优先买 8901614）；拔脚过猛时内胆偶会随袜子带出半截。"
      ],
      audit: {
        totalReviews: "525+ 条",
        platformBreakdown: "迪卡侬全球评价库 325 条（8901614 加/港站 225 条 4.7★ + 8654793 英/法站 100 条 4.6★）+ 国内电商与门店累计 200+ 条",
        sampledReviews: 18,
        proReviews: 2,
        proSources: "Quechua 勃朗峰热学实验室测试文档、Reddit r/montreal 魁北克严冬实测对比",
        credibilityTier: "Tier 1 官方欧盟法定材料与温标认证 + Tier 2 加拿大寒区真实买家反馈",
        adFilteredNote: "核实纠偏加拿大站正文残留 3.5mm 齿深模板笔误（实为 5.5mm），排雷国内搜索同名混入的 -10°C 薄款 8546262。"
      }
    },

    // ==================== 第二类：平价口碑 (4款) ====================
    {
      id: "columbia-bugaboot-iii",
      index: 4,
      category: "value",
      categoryLabel: "平价口碑",
      tierTag: "千元内全能防护均衡王",
      isCategoryWinner: true,
      winnerTitle: "平价口碑品类 · 终极推荐",
      brand: "Columbia 哥伦比亚",
      name: "Columbia 男款防水 200g 保暖高帮雪地徒步靴 Bugaboot™ III",
      enName: "Columbia Men's Bugaboot™ III Waterproof Snow Boot",
      sku: "1791221（标准楦）/ 1791222（Wide 2E 加宽楦）/ BM3928",
      msrpPrice: "¥1,399（北美 $130）",
      streetPrice: "¥769 – ¥999（大促 ¥580–¥749）",
      priceSortValue: 769,
      image: "./assets/products/columbia-bugaboot-iii.jpg",
      imageSourceUrl: "https://media.columbia.com/i/columbia/1791221_012_f_tt?w=800&fmt=jpg",
      officialUrl: "https://www.columbia.com/p/mens-bugaboot-iii-boot-1791221.html",
      jdUrl: "https://mitem.jd.hk/product/10169684209896.html",
      taobaoUrl: "https://s.taobao.com/search?q=Columbia+Bugaboot+III+1791221",
      buyNote: "京东国际与亚马逊海外购黑五/双11常出 ¥580–¥680 含税神价；宽脚背优先选 1791222 加宽 2E 版！",
      specs: {
        insulation: "200g Aconic 合成保暖棉 + 微抓绒 + 14.2mm 厚鞋舌",
        waterproof: "Omni-Tech™ 防水透气膜 + 一体注塑 TPU/橡胶下壳（涉水 18.3cm）",
        outsole: "Omni-Grip™ 低温抓地橡胶 + 46.9mm 超厚 TechLite™ 中底",
        lugDepth: "5.7 mm（实验室卡尺实测）",
        weightSingle: "737 g（US 9 实测）",
        weightNum: 737,
        shaftHeight: "17.8 cm（7.0 in）",
        shaftNum: 17.8,
        tempStatic: "-12°C",
        tempStaticNum: -12,
        tempActive: "-25°C",
        tempActiveNum: -25,
        removableLiner: "否（配 10.7mm 可拆超厚鞋垫）",
        cramponFit: "兼容 L/XL 码链式冰爪与绑带雪鞋"
      },
      officialIntro: "蝉联 OutdoorGearLab“Best Bang for Your Buck 最佳性价比奖”与 RunRepeat“最佳 200g 保暖冬靴”。上半部采用防水涂层真皮配 Omni-Tech 防水膜，下半部为坚固的一体注塑 TPU 防水保护壳（实测防灌水高度达 18.3cm）；RunRepeat 电锯剖面实测后跟 TechLite 中底堆叠厚达惊人的 46.9mm，-20°C 冰柜冷冻后仅变硬 22%，配合 5.7mm 深齿 Omni-Grip 大底锁温抓地。",
      recommendReason: "平价口碑组当之无愧的“六边形战士”！对于 180cm/80kg 男性，46.9mm 超厚抗冻中底不仅带来顶级缓震，更能彻底阻断东北冻土向脚底抽冷气；下半截注塑硬壳踢冰壳、趟化雪泥水滴水不漏，活动价仅六七百元却拥有媲美千五级冬靴的全面防护力。",
      fitAdvice: {
        recommendedSize: "US 11（EU 45）或 US 10.5/11 Wide",
        thickSockSize: "US 11（标准楦）/ US 11 Wide（宽脚高脚背）",
        sizeReason: "内部 200g 棉与 14.2mm 厚鞋舌挤占大量内腔，尺码公认偏小半码至一码！44 码脚买 US 10 配厚袜必卡脚背，务必升至 US 11 (EU 45)。",
        pant48Fit: "17.8cm 靴筒外径适中，48 码冲锋裤/软壳裤/滑雪裤裤脚均可顺畅套在靴筒外；野雪超 20cm 建议配 40cm 雪套。",
        bestScenes: "长白山北坡/西坡穿越、雪谷—羊草山—雪乡全线、镜泊湖/松花湖环湖徒步、伊春林海行摄。",
        avoidScenes: "-30°C 以下数小时完全静止不动场景（需贴暖足贴补温）；追求越野跑鞋般极软弯折感的人群。"
      },
      consDisclosure: [
        "新鞋弯折刚度极大（RunRepeat 实测需 58.3N 力，比普通徒步靴硬 83%），注塑壳与皮革交界处初期易卡高脚背/脚踝骨，需提前磨合。",
        "标准版 1791221 内部无银点/金点热反射层（部分代购文案虚假宣传有银点，买银点需认准 Plus/Celsius 子型号）。",
        "跨年追评显示若长期在干燥温差大环境闲置 3 年以上，个别批次下部 TPU 壳弯折处可能出现脆化开裂；透气度仅 1/5，需备替换羊毛袜。"
      ],
      audit: {
        totalReviews: "3,850+ 条",
        platformBreakdown: "Amazon 美亚 1,606 条 (4.5★) + Columbia 官网 1,016 条 (4.4★, 含1星70条) + Zappos 533 条 + REI 362 条 (4.2★) + Walmart 135 条 + 京东/天猫跨境 200+ 条",
        sampledReviews: 65,
        proReviews: 4,
        proSources: "RunRepeat 电锯剖面与冰冻测试、OutdoorGearLab 涉水冰浴测试、Switchback Travel、BootsGuru",
        credibilityTier: "Tier 1 实验室破坏性拆解 + Tier 2 北美三千余条跨年实购追评",
        adFilteredNote: "辟谣国内代购将标准版 1791221 冒充 Omni-Heat 热反射银点款的虚假宣传，如实披露新鞋卡脚背硬伤。"
      }
    },

    {
      id: "merrell-thermo-chill-2",
      index: 5,
      category: "value",
      categoryLabel: "平价口碑",
      tierTag: "480g 超轻零磨合快走王",
      isCategoryWinner: false,
      brand: "Merrell 迈乐",
      name: "Merrell 男款轻量防水 200g 保暖中帮冬季徒步靴 Thermo Chill 2 Mid WP",
      enName: "Merrell Men's Thermo Chill 2 Mid Waterproof Winter Hiking Boots (Gen-1: J16589)",
      sku: "J038299（二代黑）/ J00005564（二代棕）/ 初代 J16589",
      msrpPrice: "¥1,099 – ¥1,299（北美 $150）",
      streetPrice: "¥699 – ¥899（大促 ¥529–¥699）",
      priceSortValue: 699,
      image: "./assets/products/merrell-thermo-chill-2.jpg",
      imageSourceUrl: "https://thekit.wolverineworldwide.com/match/media_lookup/MRLM-J00005564-091225-F26-000/?preset=dw-pdp-mobile",
      officialUrl: "https://www.merrell.com/US/en/thermo-chill-2-mid-waterproof/60653M.html",
      jdUrl: "https://search.jd.com/Search?keyword=Merrell%20Thermo%20Chill",
      taobaoUrl: "https://merrell.tmall.com/",
      buyNote: "实测彩蛋：初代 J16589 的松雪陡坡抓地力（OGL 满分 10/10）反而强于二代 J038299，且初代带金属雪套 D 环，遇好价可优先入初代！",
      specs: {
        insulation: "200g 低蓬松度合成保暖棉 + 100% 再生摇粒绒全内衬",
        waterproof: "Merrell 自研防水透气膜 + PU 涂层翻毛皮（涉水 13.3cm）",
        outsole: "Merrell Sticky Rubber 冬季粘性橡胶底 + 尼龙抗扭片",
        lugDepth: "5.0 mm",
        weightSingle: "480 g（全场最轻！）",
        weightNum: 480,
        shaftHeight: "15.2 cm（6.0 in）",
        shaftNum: 15.2,
        tempStatic: "-7°C",
        tempStaticNum: -7,
        tempActive: "-18°C",
        tempActiveNum: -18,
        removableLiner: "否（可拆 EVA 保暖鞋垫）",
        cramponFit: "完美兼容各类轻便链式冰爪"
      },
      officialIntro: "包揽 OutdoorGearLab、Switchback Travel 与 CleverHiker 三家权威媒体“Best Winter Hiking Boot 最佳冬季徒步靴”头衔。延续迈乐王牌登山鞋 Moab 楦型基因，在仅 480g（单只）的四季鞋重量内集成了 PU 涂层防水翻毛皮、防水透气膜、200g 保暖棉、尼龙足弓抗扭片与 5mm 冬季粘性防滑橡胶底。",
      recommendReason: "如果你痛恨传统雪地靴笨重拖沓的“绑沙袋感”，追求日行 15–20 公里的轻快配速与开箱零磨合脚感（OGL 舒适度高达 9.0/10），它是千元内行进体验最接近夏季登山鞋的轻量化标杆。",
      fitAdvice: {
        recommendedSize: "US 10.5（EU 44.5）",
        thickSockSize: "US 11（EU 45，宽脚或配发热鞋垫）",
        sizeReason: "二代仅产标准 M 楦无加宽版，CleverHiker 与 Better Trail 均实测配重磅冬袜时前掌略紧，44 码脚选 US 10.5 或 US 11。",
        pant48Fit: "15.2cm 紧凑中帮可轻松收入任何 48 码徒步裤内；因涉水线仅 13.3cm 且二代取消了鞋头金属 D 环，进深雪必须配带钢丝底带的雪套！",
        bestScenes: "本溪冰瀑/雾凇岛江畔快走、长白山清雪栈道、哈尔滨市区与亚布力周边日间连续轻装快走。",
        avoidScenes: "漠河 -30°C 严寒静态观景及无雪套齐膝深雪（静态下限仅 -7°C，停步久站易冻脚）。"
      },
      consDisclosure: [
        "靴筒偏矮（有效防灌水线仅 13.3cm），不戴雪套踩进 15cm 粉雪必从领口灌雪湿袜；200g 棉底薄，-12°C 以下停步 20 分钟脚趾发凉。",
        "二代改用粗织带鞋眼且原装鞋带偏短约 12cm，REI 多条差评吐槽严寒中拉紧费劲，且取消了初代实用的鞋头金属雪套挂环。",
        "二代宽扁齿块在松软深雪陡坡的咬合力较初代（深V齿）明显退步（OGL 抓地从 10 分降至 7 分）。"
      ],
      audit: {
        totalReviews: "1,570+ 条",
        platformBreakdown: "REI 一二代合计 560+ 条 (4.6★) + DICK'S 336 条 (4.8★) + Walmart 225 条 + Zappos 200+ 条 + Mark's 144 条 + 官网及国内电商 110+ 条",
        sampledReviews: 58,
        proReviews: 5,
        proSources: "OutdoorGearLab 一二代对比、CleverHiker 阿拉斯加实测、Better Trail (2026-09)、Switchback Travel、REI",
        credibilityTier: "Tier 1 北美三大户外实验室共同首推 + Tier 2 跨代际真实差评比对",
        adFilteredNote: "通过交叉比对一二代大底实拍图，揭露了营销文隐瞒的“二代深雪抓地力倒退与简配雪套环”关键细节。"
      }
    },

    {
      id: "kamik-nation-plus",
      index: 6,
      category: "value",
      categoryLabel: "平价口碑",
      tierTag: "极寒深雪可拆胆性价比神靴",
      isCategoryWinner: false,
      brand: "Kamik 卡米克",
      name: "Kamik 男款 -40°C 可拆卸保温内胆高筒防水雪地靴 Nation Plus",
      enName: "Kamik Men's Nation Plus Waterproof Winter Pac Boots",
      sku: "WK2025（加版国际号）/ NK2025（美版号）",
      msrpPrice: "¥899 – ¥1,199（加币 $159.99）",
      streetPrice: "¥620 – ¥799（海外购大促 ¥460–¥599）",
      priceSortValue: 650,
      image: "./assets/products/kamik-nation-plus.jpg",
      imageSourceUrl: "https://www.kamik.com/cdn/shop/files/Product-Image_NATIONPLUS_Nation-Plus-Mens-Black-Winter-Boots_BK2_02_1500x.jpg?v=1785939414",
      officialUrl: "https://www.kamik.com/products/nation-plus-mens-winter-boots",
      jdUrl: "https://search.jd.com/Search?keyword=Kamik%20Nation%20Plus",
      taobaoUrl: "https://s.taobao.com/search?q=Kamik+Nation+Plus",
      buyNote: "批次提示：老库存为 200B 3M Thinsulate 铝箔底内胆，2025–2026 新产批次切换为 145g HEAT-MX 环保内胆，两者均可整胆抽出烘干。",
      specs: {
        insulation: "可拆卸独立保温内胆（200B 3M 新雪丽 或 145g HEAT-MX）",
        waterproof: "全接缝压胶防水真麂皮 + 下半部一体成型防水合成橡胶壳",
        outsole: "SNOWTREAD / GRIP XT 耐严寒自清洁深槽橡胶底",
        lugDepth: "6.0 mm（全场最深齿！）",
        weightSingle: "920 g（US 11 实测）",
        weightNum: 920,
        shaftHeight: "27.9 cm（11.0 in）",
        shaftNum: 27.9,
        tempStatic: "-20°C",
        tempStaticNum: -20,
        tempActive: "-30°C（官标极限 -40°C）",
        tempActiveNum: -30,
        removableLiner: "是（独立内胆可每晚抽放火炕/暖气烘干）",
        cramponFit: "必须配 XL 加大号链式冰爪（橡胶下壳肥大）"
      },
      officialIntro: "创立于 1898 年的加拿大魁北克防寒老牌国民神靴，Switchback Travel“最佳平价男士雪靴”及《纽约时报》Wirecutter 多年冠军。采用全压胶防水麂皮高筒拼接一体成型无缝防水合成橡胶下壳，内置可单独拔出晾干与更换的保温内胆，6.0mm 深槽大底直蹚深粉雪。",
      recommendReason: "不到 Sorel Caribou 或 Baffin 一半的价格（海淘好价仅五百元上下），直接给到 28cm 超高筒免雪套深雪防护与可拆内胆极寒锁温！如果你的行程重头戏在漠河、北红村、呼伦贝尔等 -30°C 极寒区且预算有限，它的保暖安全冗余在平价组一骑绝尘。",
      fitAdvice: {
        recommendedSize: "US 12（官标 EU 45，仅产整码！）",
        thickSockSize: "US 12（强烈建议内垫一双羊毛毡缓震鞋垫）",
        sizeReason: "重点避坑：该靴无半码（仅整码）且厚内胆大幅压缩内腔！44 码瘦脚薄袜选 US 11，配重磅羊毛袜+保暖鞋垫直上 US 12 最稳。",
        pant48Fit: "27.9cm 高筒配 31cm 紧凑领口：48 码宽口滑雪裤可外罩，常规软壳徒步裤可直接塞入高靴筒内拉紧领口，免戴雪套直蹚 20cm 粉雪。",
        bestScenes: "漠河/北极村深雪林海、雪乡夜景与马拉爬犁、查干湖冰面活动、连日农家火炕需抽内胆烘干路线。",
        avoidScenes: "长距离陡峭岩石山脊攀登或日行 20km 快速拉练（分体内胆跟脚性弱）。"
      },
      consDisclosure: [
        "分体式猎鸭靴通病：外靴与独立内胆存在轻微滑动旷量（Better Trail 步行灵活性仅给 2.5/5），后跟提步有轻微晃荡感，不适合陡坡竞速。",
        "OutdoorGearLab 静水浸泡发现若水位漫过 15.9cm 鞋舌缝合处会有渗水；且深色麂皮沾湿后偶有轻微掉色染浅色木地板现象。",
        "内胆底部较薄缺乏足弓支撑，久走冰面脚底偏硬（买 US 12 加垫羊毛毡鞋垫可完美解决）；肥大橡胶头套不进常规 L 码小冰爪，必买 XL 码。"
      ],
      audit: {
        totalReviews: "19,200+ 条",
        platformBreakdown: "Amazon 美亚经典主链历史累计 18,000+ 条及新拆分子链 517 条 (4.3★) + Zappos/Kohl's/Scheels/Walmart 600+ 条 + 跨境电商 100+ 条",
        sampledReviews: 52,
        proReviews: 4,
        proSources: "Switchback Travel、OutdoorGearLab、Better Trail、NYT Wirecutter",
        credibilityTier: "Tier 1 北美四大机构长测 + Tier 2 美亚近两万条历史口碑沉淀",
        adFilteredNote: "现场抓获并拉黑海外联盟洗稿站 Top-Notch Outdoor（该站于 2026年9–10月被迫发布两则撤稿声明承认编造测试员引语并抄袭 OGL）。"
      }
    },

    {
      id: "kailas-n44-flt-mid",
      index: 7,
      category: "value",
      categoryLabel: "平价口碑",
      tierTag: "国产宽楦 Vibram 湿冰止滑代表",
      isCategoryWinner: false,
      brand: "KAILAS 凯乐石",
      name: "凯乐石 男款 N44 FLT MID 冰面止滑加绒保暖雪地徒步鞋",
      enName: "KAILAS Men's N44 FLT MID Waterproof Winter Trekking Shoes",
      sku: "KS2642154（26款男款墨黑）/ KS2542152（25款男款）",
      msrpPrice: "¥1,500 – ¥1,699",
      streetPrice: "日常 ¥1,350 / 大促券后 ¥949 – ¥1,149",
      priceSortValue: 1049,
      image: "./assets/products/kailas-n44-flt-mid.jpg",
      imageSourceUrl: "https://kailasgear.com/cdn/shop/files/dwz_5_._5f79f455-e7b5-4434-a77e-8538153f5345.jpg?v=1755063890&width=800",
      officialUrl: "https://kailasgear.com/products/kailas-n44-flt-mid-waterproof-trekking-shoes-mens",
      jdUrl: "https://item.jd.com/100159551342.html",
      taobaoUrl: "https://s.taobao.com/search?q=%E5%87%AF%E4%B9%90%E7%9F%B3+N44+FLT+MID+%E7%94%B7",
      buyNote: "货号第5位“1”代表男款（KS2642154），“2”为女款；原价 ¥1,350 偏贵，强烈建议蹲守京东/天猫大促券后 ¥950–¥1,100 区间入手！",
      specs: {
        insulation: "亲肤加绒保暖里料 + 38g/m² 蓄热棉层 + 加绒鞋垫",
        waterproof: "FILTER-TEC 全袜套防水透气薄膜 + 无缝 TPU 热切覆膜",
        outsole: "Vibram® Arctic Grip 湿冰止滑微纤维大底 + 中足抗扭片",
        lugDepth: "4.8 mm",
        weightSingle: "550 g",
        weightNum: 550,
        shaftHeight: "15.0 cm",
        shaftNum: 15.0,
        tempStatic: "-10°C",
        tempStaticNum: -10,
        tempActive: "-20°C",
        tempActiveNum: -20,
        removableLiner: "否（加绒可拆鞋垫）",
        cramponFit: "完美兼容 L 码链式冰爪"
      },
      officialIntro: "国产专业户外一线阵营针对冰雪路面打造的轻量化徒步鞋。搭载意大利正品 Vibram® Arctic Grip 冰面止滑大底（嵌入特殊聚合物微纤维摩擦块，针对 0°C 融水湿冰路面提供卓越抓地力），结合 FILTER-TEC 防水透气袜套、ANTI-IMPACT 加厚防撞橡胶鞋头与针对国人脚型研发的亚洲宽楦中底支撑系统。",
      recommendReason: "大促千元档唯一集齐“正品 Vibram Arctic Grip 湿冰底 + 亚洲宽楦舒适包裹 + 京东自营次日达秒退换”的国产正规军！对于不愿折腾海淘、脚掌偏宽怕欧美鞋夹脚，且行程涵盖大量城市结冰人行道与景区冰栈道的 80kg 用户极为省心。",
      fitAdvice: {
        recommendedSize: "EU 45",
        thickSockSize: "EU 45（预留 1cm 空气层配重磅羊毛袜）",
        sizeReason: "亚洲宽楦前掌舒适不挤小脚趾，但加绒内衬与防水袜套吃掉半码内长，44 码脚配厚冬袜必选 EU 45。",
        pant48Fit: "15cm 利落中帮可顺畅藏于任何 48 码软壳裤/冲锋裤裤脚下；进林海深雪区必须外搭高筒雪套。",
        bestScenes: "长白山栈道与冰瀑、大连/本溪/吉林松花江畔微冰步道、频繁进出室内外温差区的轻装一日徒步。",
        avoidScenes: "漠河 -30°C 极寒久站（薄绒蓄热有限）；连续硬黑冰陡坡严禁不戴冰爪裸穿！"
      },
      consDisclosure: [
        "破除门店种草神话：Vibram Arctic Grip 专攻表面带水膜的“湿冰/融冰”，在东北 -25°C 极干硬镜面黑冰陡坡依然会滑，绝不可替代金属冰爪！",
        "浅中帮后跟领口偏低且新鞋海绵偏硬，细脚踝用户若不用“锁跟系法”拉紧顶钩会有轻微不跟脚感。",
        "38g/m² 轻量棉层仅面向动态行进，-25°C 以下静态保暖远不及 400g 级重靴；日常原价 ¥1,350 品牌溢价偏高。"
      ],
      audit: {
        totalReviews: "1,800+ 条",
        platformBreakdown: "京东自营主链 1,000+ 条 (98%好评) + 26款新链 500+ 条 (99%好评) + 天猫官旗及国际官网 300+ 条",
        sampledReviews: 40,
        proReviews: 2,
        proSources: "什么值得买 20+篇凯乐石冰雪鞋全网拆解长文、Vibram Arctic Grip 官方物理边界白皮书",
        credibilityTier: "Tier 1 Vibram 材料学参数 + Tier 2 京东千条实购与值得买百科去水口碑",
        adFilteredNote: "识破全国十余家凯乐石线下门店小红书矩阵“种草官”通稿，并纠偏值得买软文将整双 1120g 误写成单只重量的低级错误；剔除京东聚合页混入的 FUGA 越野跑鞋错图。"
      }
    },

    // ==================== 第三类：顶级性能 (3款) ====================
    {
      id: "salomon-toundra-pro",
      index: 8,
      category: "flagship",
      categoryLabel: "顶级性能",
      tierTag: "宇航气凝胶 · 680g 轻量化极寒长线标杆",
      isCategoryWinner: false,
      brand: "Salomon 萨洛蒙",
      name: "Salomon 男款 Toundra Pro CSWP 宇航气凝胶极寒防水高帮徒步靴",
      enName: "Salomon Men's Toundra Pro ClimaSalomon™ Waterproof Winter Boots",
      sku: "L40472700（经典全黑磁灰 / 北美后缀 LD8639）",
      msrpPrice: "¥2,298（北美 $220）",
      streetPrice: "¥1,280 – ¥1,980",
      priceSortValue: 1580,
      image: "./assets/products/salomon-toundra-pro.jpg",
      imageSourceUrl: "https://cdn.dam.salomon.com/22e9dcc7-ca50-4013-9927-b2f800b8cd9c/L40472700/PNG-2000px-max-72dpi.png?width=1200&fit=cover&optimize=medium&bg-color=f5f5f5&format=pjpg",
      officialUrl: "https://www.salomon.com/en-us/product/toundra-pro-climasalomon-waterproof-ld8639",
      jdUrl: "https://so.jd.com/Search?keyword=Salomon%20Toundra%20Pro%20L40472700",
      taobaoUrl: "https://salomon.tmall.com",
      buyNote: "务必在官方旗舰店或亚马逊海外购自营等带正规电子凭证渠道购买，以完整享受 Salomon 官方 2 年质保！",
      specs: {
        insulation: "NASA 同源 Aspen Aerogels™ SpaceLoft 宇航气凝胶隔热舱 + 毛绒领口",
        waterproof: "ClimaSalomon™ (CSWP) 全靴一体防水袜套（实测涉水深达 21.0cm！）",
        outsole: "Winter Contagrip® 抗极寒冰雪橡胶底 + EnergyCell 高回弹中底",
        lugDepth: "5.0 mm",
        weightSingle: "680 g（-40°C 高筒靴轻量化奇迹）",
        weightNum: 680,
        shaftHeight: "26.7 cm（10.5 in）",
        shaftNum: 26.7,
        tempStatic: "-20°C（官方舒适行进 -30°C）",
        tempStaticNum: -20,
        tempActive: "-40°C",
        tempActiveNum: -40,
        removableLiner: "否（一体竞技剪裁 + 可拆 EVA 鞋垫）",
        cramponFit: "100% 适配 L 码链式冰爪、10/12齿绑带冰爪及踏雪板（带后跟卡棱）"
      },
      officialIntro: "萨洛蒙极寒徒步科技图腾。摒弃臃肿传统棉层，采用为 NASA 宇航服研发的 Aspen Aerogels™ 纳米多孔二氧化硅气凝胶封装舱——在 80kg 体重踩压与紧束鞋带下绝不塌陷损失热阻，实现舒适行进 -30°C、动态极限 -40°C 的惊人保暖，同时单只仅重 680g，OutdoorGearLab 静水测试防水深度高达 21.0cm。",
      recommendReason: "OutdoorGearLab 盛赞为“参测所有冬靴中脚踝支撑锁定最稳固、最具越野跑山基因的极寒战靴”。若你的东北计划是单日 15–25 公里高配速雪原/山脊拉练，单只 680g 能比传统极地靴每天少抬腿数吨负荷，机动性与脚踝安全感无可匹敌！",
      fitAdvice: {
        recommendedSize: "EU 44 2/3（US 10.5 / UK 10）",
        thickSockSize: "EU 45 1/3（US 11 / UK 10.5，宽脚或双层袜必选）",
        sizeReason: "萨洛蒙欧版楦型偏窄长，严禁按正码买 EU 44！标准脚配厚袜选 44 2/3，宽脚掌直接上 45 1/3。",
        pant48Fit: "虽高 26.7cm 但采用流线型竞技收窄靴筒（OGL 实测推荐裤腿外罩），48 码冲锋裤/雪裤裤脚可利落套在靴筒外不鼓包。",
        bestScenes: "长白山林海长距离快速穿越、雪谷—羊草山高速轻装拉练、踏雪板（Snowshoeing）运动。",
        avoidScenes: "超宽肥脚型（易夹小脚趾）；购买无质保水货用于常年每天暴走几百公里的重度磨损劳保场景。"
      },
      consDisclosure: [
        "【核心通病预警】REI (3.9★) 与 Backcountry (19条1星) 集中反映：累计高强度行走 150–350km 后，前掌弯折处 PU 涂层皮革接缝存在开裂刺破防水膜隐患（OGL 做工仅打 6.0/10）——务必保留正规发票利用 2 年官方质保兜底！",
        "Winter Contagrip 大底未添加微玻璃纤维颗粒，纯镜面硬冰摩擦力不及 KEEN Polar Traction 与 Vibram 冰底，冰坡必配冰爪。",
        "原厂圆鞋带结霜后易松脱，需打外科双结；气凝胶舱水汽透过率低，每晚需抽出鞋垫晾干。"
      ],
      audit: {
        totalReviews: "1,305+ 条",
        platformBreakdown: "Amazon 600 条 (4.6★) + Salomon 官网 246 条 (4.1★) + Zappos 200 条 + Backcountry 127 条 (4.0★) + REI 122 条 (3.9★) + 国内跨境 110+ 条",
        sampledReviews: 32,
        proReviews: 3,
        proSources: "OutdoorGearLab (总分 80/100 季军)、CleverHiker、Switchback Travel",
        credibilityTier: "Tier 1 OGL 浸泡与冰浴实测 + Tier 2 100% 穿透北美 1–2 星开裂差评",
        adFilteredNote: "剔除短视频带货号“NASA黑科技永穿不坏、零下40度站桩不冷”话术，基于 Backcountry 19 条 1 星差评锁定前掌折痕耐久边界与质保策略。"
      }
    },

    {
      id: "keen-revel-iv-high",
      index: 9,
      category: "flagship",
      categoryLabel: "顶级性能",
      tierTag: "400g 三维锁温 · 宽楦玻璃纤维冰底全能王",
      isCategoryWinner: true,
      winnerTitle: "顶级性能品类 · 终极推荐（暨全场总冠军）",
      brand: "KEEN 科恩",
      name: "KEEN 男款 Revel IV High Polar 极地四代高帮 400g 冰面防滑徒步雪地靴",
      enName: "KEEN Men's Revel IV High Polar Waterproof Winter Hiking Boot",
      sku: "1023619（军绿棕/黑）/ 1023621（深磁灰/暗红）",
      msrpPrice: "¥1,999 – ¥2,199（北美 $220）",
      streetPrice: "¥1,290 – ¥1,899",
      priceSortValue: 1550,
      image: "./assets/products/keen-revel-iv-high.jpg",
      imageSourceUrl: "https://www.keenfootwear.com/cdn/shop/files/4e411a8a3015ec15b0e723d7257a9e9e852ee1f8_c4b13101-a2ee-4277-a01e-e94ca65313c8.jpg?v=1741898443&width=1200",
      officialUrl: "https://www.keenfootwear.com/products/mens-revel-iv-high-polar-boot-canteen-black",
      jdUrl: "https://so.jd.com/Search?keyword=KEEN%20Revel%20IV%20High%20Polar",
      taobaoUrl: "https://keen.tmall.com",
      buyNote: "【重大防李鬼提醒】认准 High Polar 高帮款（顶部 3 排金属钩，男款唯一真货号 1023619 / 1023621），严防代购拿便宜的 200g 中帮款 Mid Polar（仅 2 排钩）混充！",
      specs: {
        insulation: "400g KEEN.WARM 保暖棉 + 鞋底三层 Heat Trapolator 蜂窝隔热层 + 铝箔鞋垫",
        waterproof: "KEEN.DRY 防水透气膜 + LWG 认证重磅防水牛巴戈真皮",
        outsole: "KEEN.POLAR TRACTION 显微玻璃纤维极地防滑冰底 + 外置抗扭片",
        lugDepth: "5.0 mm",
        weightSingle: "719 g",
        weightNum: 719,
        shaftHeight: "20.3 cm（8.0 in）",
        shaftNum: 20.3,
        tempStatic: "-20°C",
        tempStaticNum: -20,
        tempActive: "-40°C",
        tempActiveNum: -40,
        removableLiner: "否（可拆 Thermal Heat Shield 热反射鞋垫）",
        cramponFit: "自带前掌金属雪套挂环，完美兼容 L/XL 链式冰爪与踏雪板"
      },
      officialIntro: "集结冬季制靴三大核心绝活的全能旗舰：靴身填充厚达 400g 的 KEEN.WARM 再生保温棉，足底独创三层 Heat Trapolator 锁温隔冷夹层与热反射鞋垫彻底阻断冰面抽冷；大底采用混入高密度显微玻璃纤维的 KEEN.POLAR TRACTION 极地冰底，踩上湿滑冰面如微型砂纸刺入冰膜，配合环保防水牛巴戈真皮与家族宽大护趾包头。",
      recommendReason: "最契合中国北方男性脚型（180cm/80kg · 44码脚 · 48码裤）的终极六边形冠军！第一，招牌 Original Fit 解剖学宽楦让五根脚趾穿重磅羊毛袜仍能自由张开促进血液循环，从根源杜绝窄楦挤脚冻疮；第二，牛巴戈真皮彻底规避了 Salomon 合成皮弯折开裂风险；第三，400g+三层隔冷底+玻璃纤维冰底实现从哈尔滨冰面到羊草山深雪一靴通吃！",
      fitAdvice: {
        recommendedSize: "EU 44.5（即 US 11 / UK 10 / 29.0 cm）",
        thickSockSize: "EU 44.5（US 11，注意 KEEN 欧码换算特殊性！）",
        sizeReason: "KEEN 尺码表中 US 10=EU 43，US 10.5=EU 44(28.5cm)，US 11=EU 44.5(29.0cm)。因 400g 棉极厚内长偏短半码，日常 44 码配厚羊毛袜最稳首选 US 11 (EU 44.5)！",
        pant48Fit: "20.3cm 黄金高帮高度与 48 码软壳徒步裤/滑雪裤天作之合，裤脚自然垂覆鞋面；鞋头自带金属雪套 D 环，进 >25cm 深粉雪挂上雪套滴水不进。",
        bestScenes: "长白山全线徒步、雪谷—羊草山—雪乡穿越、老里克湖深雪、哈尔滨/吉林冰面栈道与林海混合全场景。",
        avoidScenes: "需挂载全自动/半自动卡式高山攀冰爪的技术性垂直冰壁（应选硬底高山靴）。"
      },
      consDisclosure: [
        "KEEN 家族传统小瑕疵：穿行 1–2 个雪季后，前掌弯折处橡胶护趾包头边缘可能出现几毫米微开胶（内有完整 KEEN.DRY 防水膜绝不漏水，可用 Aquaseal SR 鞋胶轻松点封）。",
        "新鞋前 10km 若高帮鞋舌折叠翼未理平，偶会顶内侧脚踝骨（穿高筒厚羊毛袜对称展平鞋舌磨合 1–2 次即消失）。",
        "融雪泥水季若长期不给牛巴戈真皮补喷防水剂，表皮吸水后单只会增重约 50–80g。"
      ],
      audit: {
        totalReviews: "1,462+ 条",
        platformBreakdown: "Amazon 470 条 (4.5★) + REI 285 条 (4.2★) + KEEN 官网 265 条 (4.2★) + Zappos 242 条 (4.4★) + 国内天猫/京东/海外购 200+ 条",
        sampledReviews: 30,
        proReviews: 3,
        proSources: "英国《The Great Outdoors (TGO)》杂志 4/5★ 冬季实测 + OGL / CleverHiker 同系拆解对照",
        credibilityTier: "Tier 1 老牌户外刊物实测 + Tier 2 四国官方 SKU 库与千余条实购追评核验",
        adFilteredNote: "穿透美/加/英/日四国官网库纠正全网流传的错误货号 1023620（实为 1023619/1023621），并曝光淘宝代购拿 200g 中帮冒充 400g 高帮的李鬼套路。"
      }
    },

    {
      id: "lowa-tibet-evo-400",
      index: 10,
      category: "flagship",
      categoryLabel: "顶级性能",
      tierTag: "德国精工 · 400g 高山重装可换底统帅",
      isCategoryWinner: false,
      brand: "LOWA 洛瓦",
      name: "LOWA 男款 Tibet Evo 400 GTX 德国制重装极寒冰底登山靴",
      enName: "LOWA Men's Tibet Evo 400 GTX Winter Trekking Boots (ex-Tibet Superwarm GTX)",
      sku: "211732-0997（现款岩板棕）/ 前代 210667-0997",
      msrpPrice: "¥4,280 – ¥4,980（北美 $520 / 欧洲 €399）",
      streetPrice: "¥2,580 – ¥3,580",
      priceSortValue: 2980,
      image: "./assets/products/lowa-tibet-evo-400.jpg",
      imageSourceUrl: "https://us.lowa.com/cdn/shop/files/2117320997_7c8d7596-b064-45b0-bf71-2a3de3b48db9.jpg?v=1791265794&width=1250",
      officialUrl: "https://us.lowa.com/products/tibet-evo-400-gtx",
      jdUrl: "https://so.jd.com/Search?keyword=LOWA%20Tibet%20GTX",
      taobaoUrl: "https://lowa.tmall.com",
      buyNote: "认准 2024+ 升级现款 Tibet Evo 400 GTX (211732-0997)，避免购买库存超过 3 年的老批次以防 PU 中底闲置老化！",
      specs: {
        insulation: "400g PrimaLoft® 顶级拒水棉 + GORE-TEX® Duratherm LXT 极寒膜 + 铝箔鞋垫",
        waterproof: "GORE-TEX® Duratherm + 2.2–2.4mm 头层水牛皮 + 360° 加高橡胶防撞护边",
        outsole: "Vibram® Mottarone Arctic Grip 冰底（板楦冷粘工艺，支持返厂换底！）",
        lugDepth: "5.5 mm",
        weightSingle: "900 g（重装装甲底盘）",
        weightNum: 900,
        shaftHeight: "19.7 cm（7.75 in）",
        shaftNum: 19.7,
        tempStatic: "-22°C",
        tempStaticNum: -22,
        tempActive: "-35°C",
        tempActiveNum: -35,
        removableLiner: "否（德国原产全皮一体重装内腔）",
        cramponFit: "全场最强：通吃链式冰爪、12齿绑带高山冰爪（C1级）及应急后卡冰爪"
      },
      officialIntro: "德国百年制靴巨匠 LOWA 冬季重装皇冠明珠（经典功勋款 Tibet Superwarm GTX 正统进化版）。整张 2.2–2.4mm Heinen Terracare 顶级头层水牛皮最少缝线裁切，外覆 360° 高耸黑胶防撞装甲；内嵌 GORE-TEX Duratherm LXT 与 400g PrimaLoft 双核保暖层，搭载 I-LOCK 专利分区凸轮鞋带锁（前掌放宽防冻脚、脚踝锁死防崴脚）与可返厂换底的 Vibram Mottarone Arctic Grip 冰面重装大底。",
      recommendReason: "民用极寒重装徒步靴的终极天花板！若你身高 180cm/体重 80kg 且需背负 15–25kg 重型摄影器材或冬季露营重装，深入长白山未开发林线、大兴安岭风倒木乱石冰河，唯有其 Flex-4 级高刚性硬质底盘能提供铁轨般的抗扭安全感，且真皮板楦结构一靴可传 8–10 年！",
      fitAdvice: {
        recommendedSize: "EU 45（UK 10.5 / US 11.5）",
        thickSockSize: "EU 45（瘦窄脚单层袜可选 EU 44.5 / UK 10）",
        sizeReason: "老玩家实测：400g PrimaLoft + Duratherm 厚内衬使内腔比四季款 Tibet 小半码！日常 44 码配重磅冬袜必选 EU 45，并用 I-LOCK 分区锁定。",
        pant48Fit: "19.7cm 干练靴筒完美兼容 48 码硬壳冲锋裤/雪裤；深雪重装强烈建议外搭 OR Crocodile 等重装雪套防粉雪兼防冰爪勾破裤腿。",
        bestScenes: "背负 >15kg 重装穿越长白山/大兴安岭复杂冰岩混合地形、严寒林海狩猎/风光摄影长线。",
        avoidScenes: "仅在城市逛街或平坦木栈道休闲游（单只 900g+ 高刚性硬底大材小用且偏沉，出发前需磨合 20km）。"
      },
      consDisclosure: [
        "自重偏大（45码单只超 950g）且 Flex-4 高刚性底盘较硬，平路溜达不如 KEEN/Merrell 轻快柔顺，行前需穿厚袜负重磨合。",
        "Vibram Arctic Grip 止滑块专攻 0°C 湿冰，在东北 -30°C 干硬黑冰陡坡仍须挂金属冰爪，且长期走水泥柏油路会加速聚合物块磨损。",
        "DuraPU 聚氨酯中底虽抗压寿命极长，但若在潮湿环境闲置 5–7 年完全不穿会发生吸湿水解（需干燥收纳、非雪季定期上脚走动活化，支持官方付费换底）。"
      ],
      audit: {
        totalReviews: "450+ 条同底盘体系（极寒400g专款欧美硬核站 20 条 + 国内跨境 30+ 条，Tibet GTX 母本 400+ 条）",
        platformBreakdown: "Altitude Sports / The Last Hunt 8 条 (4.8★) + CampSaver 6 条 (5.0★) + Bergfreunde 4 条 (5.0★) + GOHUNT 2 条 (5.0★) + 京东/天猫跨境 30+ 条（如实呈现 $520 专业高山靴真实小众体量）",
        sampledReviews: 20,
        proReviews: 4,
        proSources: "Allen Outside 蒙大拿深雪负重40英里长测、ActiveGearReview、GOHUNT 刚度拆解、T3 Magazine",
        credibilityTier: "Tier 1 北美高山猎装实测 + Tier 2 100% 全量精读欧美买手站实购评价",
        adFilteredNote: "识破国内软文将 LOWA Nabucco Evo / Renegade Evo Ice（薄绒注塑底，仅抗 -10°C）吹成东北 -35°C 神靴的误导，锁定真 400g 重装板楦旗舰。"
      }
    }
  ],

  eliminatedSummary: [
    {
      model: "网红加绒棉鞋（南极人 / 回力 / 卡帝乐鳄鱼 / 啄木鸟 / 骆驼时装线）",
      reason: "无内置防水透气膜（雪融即渗水冰脚）、公模 TPR 底在 -20°C 玻璃化变硬如溜冰板、内里化纤长毛闷汗结冰。"
    },
    {
      model: "迪卡侬 QUECHUA SH900 Pro Mountain (8526134) & SH900 High Leather (8546262)",
      reason: "顶着 SH900 名号但无独立毛毡内胆，官方静态温标仅 -6°C 与 -10°C，东北停步拍照极易冻脚。"
    },
    {
      model: "TOREAD 探路者 / HUMTTO 悍途 ¥200–¥500 档普通加绒冬靴",
      reason: "多仅具鞋面 DWR 防泼水涂层而无全袜套防水膜，车缝针眼踩雪超 1 小时易渗水，普通 RB 底冰面抓地弱。"
    },
    {
      model: "The North Face 北面 Chilkat V 400 (NF0A5LVZ)",
      reason: "虽综合口碑好，但底部一体 TPU 壳过宽笨重导致步态僵硬，且前壳肥大极难套上常规尺码链式小冰爪，大底不含玻璃纤维。"
    },
    {
      model: "KAILAS 凯乐石 MT5-3 GTX / N53-2",
      reason: "MT5-3 为四季不加绒硬底鞋（冬季穿必冻脚滑倒）；N53-2 虽有冰底但仅薄绒内衬（标 -15°C），不达 -35°C 极寒旗舰保暖量级。"
    },
    {
      model: "LOWA Renegade Evo Ice GTX / Nabucco Evo GTX",
      reason: "德国官网核实仅配薄毛绒内衬（约 100–150g 当量，舒适下限 -10°C~-15°C）且不可换底，被国内营销号严重拔高。"
    },
    {
      model: "Baffin Impact 极地靴",
      reason: "整双重达 3.2kg+、靴高 38cm 如宇航服，毫无脚踝抗扭徒步支撑，仅适合漠河冰钓/静坐看极光，无法用于长距离徒步。"
    }
  ],

  antiAdCases: [
    {
      id: "AD-01",
      sourceType: "国内门户营销号 AI 日更榜",
      target: "搜狐号“户外玩家”（账号 ID：122645099）系列榜单（如 2026-09-10《迪卡侬雪地靴高帮保暖款推荐》、2026-11-11《2026年户外雪地靴排行榜》）",
      evidence: "时间线与物理常识双重穿帮：9月10日（哈尔滨气温尚在 +15°C~+22°C）竟公然编造“上周在哈尔滨雪乡踩进十厘米深雪坑实测”；另一篇正文残留未替换的 AI 占位符“图片”二字，并捏造迪卡侬采用“硫化底+铝箔鞋垫”，且危险诱导读者“结冰台阶无需冰爪”。",
      action: "整号拉黑，零数据采信"
    },
    {
      id: "AD-02",
      sourceType: "电商平台 AI 自动生成导购页",
      target: "淘宝好物网 / 逛一逛专题页（goods.taobao.com/t/xuedixue_8291/* 及 guangtao.taobao.com/topic-200234159）",
      evidence: "网页头图 URL 直接暴露 pc_page_gen_ai.png，标题甚至出现未渲染的变量名《东北零下30℃实测：null高帮雪地靴真的扛冻吗？》，将百元无防水胶水棉鞋强行绑定“-40°C 极寒徒步”关键词赚取联盟佣金。",
      action: "100% 过滤屏蔽"
    },
    {
      id: "AD-03",
      sourceType: "海外亚马逊联盟抄袭洗稿站",
      target: "Top-Notch Outdoor 评测站《Kamik Nation Plus Waterproof Winter Boot Review》",
      evidence: "打着“自费购买实测”旗号挂 Amazon 返利链接，但我们在页首抓获其 2026年9月29日与10月22日被迫发布的两则撤稿声明（承认盗用同行结论并捏造测试员引语），且现存正文仍在逐句洗稿 OutdoorGearLab。",
      action: "剥夺信源资格，仅回溯 OGL 原始数据"
    },
    {
      id: "AD-04",
      sourceType: "社区疑似公关软文参数失真",
      target: "什么值得买社区文《凯乐石N44 FLT MID：冰雪路上的可靠伙伴》(post.smzdm.com/talk/p/an5qo7z2/)",
      evidence: "通篇公关赞美零缺点，且将整双重量“1120g”常识性写错为“单只鞋重约 1120 克”（实测单只约 550g）。",
      action: "纠偏克重数据，改采值得买百科玩家真实痛点“抓湿冰在行、硬冰犯怂”"
    },
    {
      id: "AD-05",
      sourceType: "线下门店矩阵种草帖",
      target: "小红书十余家品牌专柜“门店种草官”9–10月密集通稿",
      evidence: "统一话术推销冬季冰底鞋却绝口不提吊牌价、渠道价差及“湿冰 vs 东北镜面硬黑冰”的止滑物理边界，易误导新手不带冰爪进山摔伤。",
      action: "剥离营销修辞，补充硬冰必配金属冰爪安全红线"
    },
    {
      id: "AD-06",
      sourceType: "海淘代购“高低配混卖”李鬼陷阱",
      target: "部分淘宝代购标题写“KEEN Revel IV Polar -40度极寒靴”却发 200g 中帮款",
      evidence: "穿透美/加/英/日四国官网库查明：真 -40°C 高帮 400g 款为 High Polar（3排金属钩，男款货号 1023619/1023621），而 Mid Polar 仅 200g 保暖棉（2排钩，-32°C），差价数百元且抗寒差一档。",
      action: "在推荐卡醒目标注货号与“数 3 排金属钩”验真铁律"
    },
    {
      id: "AD-07",
      sourceType: "代购文案张冠李戴夸大配置",
      target: "国内跨境店铺宣传 Columbia Bugaboot III 标准版 (1791221) 内含“奥米热反射银点/金点”",
      evidence: "经核对 Columbia 北美官网与 RunRepeat 电锯对半切开实拍图，标准版 1791221 为纯黑色微抓绒+200g保温棉，无反射铝点（Plus / Celsius 版本才有）。",
      action: "如实披露真实内衬结构，拒绝虚假加戏"
    },
    {
      id: "AD-08",
      sourceType: "品牌区域官网自身录入 Bug",
      target: "迪卡侬港/台官网将 NH100 High Zip (8851794) 极限温度标为 -35°C；美站 8785598 混入童装抓绒衣 406g 参数",
      evidence: "交叉比对意大利官网 (-12°C/-21°C) 与法英原始数据，证实港台站系将华氏度 -6°F 换算错植为 -35°C；京东聚合页亦存在将凯乐石 FUGA 跑鞋缩略图串入 N44 的错误。",
      action: "跨 8 国官网勘误修正，全部采用视觉核验真图"
    },
    {
      id: "AD-09",
      sourceType: "短视频带货“黑科技神话”话术",
      target: "抖音/小红书代购短视频吹嘘 Salomon Toundra Pro“NASA气凝胶零下40度站桩不冷、十年穿不坏”",
      evidence: "隐瞒 -40°C 系高强度运动极限温标（静态舒适约 -20°C），且绝口不提 Backcountry 19 条 1 星差评集中的前掌 PU 涂层折痕开裂隐患与无票水货无 2 年质保风险。",
      action: "强制披露开裂通病，限定正规发票质保渠道"
    },
    {
      id: "AD-10",
      sourceType: "公众号软文错配温标拔高",
      target: "国内户外导购软文将 LOWA Renegade Evo Ice / Nabucco Evo GTX 推荐为“东北 -35°C 极寒神靴”",
      evidence: "核查德国 LOWA 官网证实两款仅为 Partelana 薄绒注塑休闲冬靴（舒适下限仅 -10°C~-15°C 且不可换底），真正 400g PrimaLoft 极寒重装款唯有 Tibet Evo 400 GTX。",
      action: "剔除薄绒款，锁定真 400g 板楦旗舰 211732-0997"
    }
  ],

  credibilityFramework: [
    {
      tier: "Tier 1 · 独立实验室破坏性拆解与量化实测（最高权重）",
      sources: "RunRepeat（自费买鞋电锯切开测底厚/烟雾透气/-20°C冷冻硬度）、OutdoorGearLab（静水漫灌深度/冰浴热流失传感器）、Switchback Travel、CleverHiker、Better Trail、NYT Wirecutter、GOHUNT",
      whyTrust: "零品牌送测干预，物理卡尺与传感器数据不可造假，敢于给大牌打出做工 6/10 或步行 2.5/5 的低分。"
    },
    {
      tier: "Tier 2 · 品牌全球工程参数表 & 实购平台 1–3★ 长尾差评/追评",
      sources: "8国迪卡侬官网 / Salomon / KEEN / LOWA / Columbia / Merrell / Kamik / Kailas 官网原始 SKU 库；REI Co-op、Backcountry、Zappos、Amazon、京东自营跨季追评",
      whyTrust: "REI 与 Backcountry 允许穿用退换且保留真实退货原因（直接暴露 Salomon 前掌折痕开裂、Merrell 二代鞋眼卡手等长期痛点）。"
    },
    {
      tier: "Tier 3 · 户外垂直社区实测（交叉降噪采信）",
      sources: "8264户外资料网、Reddit (r/hiking, r/montreal, r/Ultralight)、什么值得买商品百科与多信源对比帖、Field & Stream、TGO Magazine、KEEDAN",
      whyTrust: "提取东北/魁北克/阿拉斯加同纬度严寒使用经验与尺码实测，剔除单一软文吹捧。"
    },
    {
      tier: "Tier 4 · 营销号榜单 / AI 带货页 / 门店通稿（零容忍剔除）",
      sources: "搜狐/百家号日更模板榜、淘宝好物网 AI 生成页、海外洗稿返利站、无货号种草帖",
      whyTrust: "直接列入反软广黑名单并公示证据链，确保本报告推荐结论 0% 商业污染。"
    }
  ],

  essentialKit: [
    {
      item: "袜具系统（决定 40% 保暖成败）",
      spec: "薄款美利奴排汗内袜 + 重磅高筒美利奴羊毛徒步袜（含毛量 ≥70%，如 Smartwool Classic Mountaineering Extra Heavy Crew 或 Darn Tough Heavyweight）",
      budget: "¥129 – ¥260 / 双（至少备 2–3 双轮换，严禁穿纯棉袜，棉袜吸汗结冰必冻脚！）"
    },
    {
      item: "高筒防撕裂防水雪套（Gaiters）",
      spec: "40–45cm 高度、带足底 Hypalon/钢丝耐磨带与前鞋带金属钩（如迪卡侬 MT500 雪套 ¥99.9 或 Outdoor Research Crocodile GTX 雪套）",
      budget: "¥99 – ¥599（搭配 SH500 / Merrell / N44 / KEEN / LOWA 进 >20cm 野雪必戴，完美衔接 48 码裤脚）"
    },
    {
      item: "外挂式不锈钢链条冰爪（保命底线）",
      spec: "11–14 齿 304/420 不锈钢焊接链条弹力硅胶冰爪（如 Kahtoola MICROspikes、凯乐石 T2 或迪卡侬 SH500 防滑冰爪，44–45 码冬靴请买 L 或 XL 码！）",
      budget: "¥69 – ¥499（任何橡胶大底遇到东北镜面硬黑冰陡坡都会滑，随包必带见冰即套！）"
    }
  ]
};
