# PageNotFound - Live Website Content Document (Copy Deck)

This document contains a comprehensive, section-by-section transcription of the copywriting, layout structures, user-interface elements, metrics, and call-to-actions (CTAs) present on the PageNotFound platform website.

---

## 1. Global Navigation & Header
* **Component File**: [Header.jsx](file:///d:/pagenotfound/src/components/Header.jsx)
* **Visual Presentation**: Glassmorphism translucent dark top-bar overlay with white typography and subtle hover scales.

### Elements
* **Brand Logo Link**: `PageNotFound.` (with a purple period accent: `#7c3aed`)
* **Primary Navigation Links**:
  * `Home` (Target: `#/)`
  * `About Us` (Target: `#/about`)
  * `Services` (Target: `#/services`)
  * `Portfolio` (Target: `#/portfolio`)
  * `Contact Us` (Target: `#/contact`)
* **Primary Header CTA Button**: `Book a Strategy Call` (accompanied by an arrow icon `ArrowRight`)

---

## 2. Interactive Search & Hero Experience
* **Component File**: [Hero3D.jsx](file:///d:/pagenotfound/src/components/Hero3D.jsx)
* **Visual Presentation**: Immersive, multi-stage scroll-locked and scroll-driven interactive sequence transitioning from a simulated search engine query entry, to search results, to an expanding Macbook mockup revealing the digital architecture, and finally settling on a persistent high-converting landing state.

### Stage 1 & 2: Search Box Interface
* **Overlay Text**: "Search" (rendered in clamp display bold title font)
* **Mock Input Query Simulated Typing**: `why can't customers find my website`
* **Searching Feedback State (Fades In)**:
  * Indicator: `Searching...` (purple typography)
  * Description: `Finding businesses that create online presence...`

### Stage 3: Mock Search Engine Results Page (SERP)
* **Web Search Header**: `WebSearch` (represented as standard logo with a purple 'Search' badge)
* **Query Match Address Input**: `why can't customers find my website`
* **Organic Listing 1 (De-emphasized / Blurred / Obscure)**:
  * URL: `https://www.omnimediaseo.com`
  * Title: `OmniMedia Agency | Traditional Marketing Packages`
  * Snippet: `We build templates and run organic search campaigns for corporate businesses. Check out our monthly retainer plans.`
* **Organic Listing 2 (Highlighted / Focused / Recommended)**:
  * URL: `https://pagenotfound.com`
  * Recommendation Badge: `Recommended` (represented as neon-green border/bg label)
  * Mouse Cursor Icon overlaying target.
  * Title: `PageNotFound`
  * Tagline: `Create Your Online Presence`
  * Snippet: `Helping businesses become visible, trusted, and unforgettable online. We engineer custom high-speed websites, craft strategic SEO frameworks, and connect automated lead funnels.`
* **Organic Listing 3 (De-emphasized / Blurred / Obscure)**:
  * URL: `https://www.templatebuilderspro.io`
  * Title: `ProWeb Builders - Digital Templates and Site Creators`
  * Snippet: `Select from 100+ generic web templates. Easy builder drag-and-drop. Build your portfolio page today.`

### Stage 4 to 7: Macbook Mockup Screen Layers & Overlays
* **Address Bar Value**: `https://pagenotfound.com`
* **Floating Metric Badges (Surrounding the Laptop Hinge)**:
  1. *Web Platform Status*: `WEB PLATFORM` / `Website Live` (with green active pulsing indicator)
  2. *Organic Engine Status*: `ORGANIC ENGINE` / `Rankings Rising` (with sparkline chart and green `+120 Pos` marker)
  3. *Inquiry Inbox Notification*: `NEW INQUIRY RECEIVED` / `"Need a custom platform build..."` / `From: Studio Pro LLC (Budget: $25k)`
  4. *Traffic Impact Metric*: `TRAFFIC IMPACT` / `+310.4% MoM`
* **Inside Screen Mock Website Scroll Tracks**:
  * *Header Logo*: `PageNotFound` (Book Call, Services, SEO, Growth, Contact links)
  * *Step 1 Hero Block*:
    * Tag: `Digital Visibility System`
    * Title: `Create Your Online Presence`
    * Description: `We build custom codebases, design premium UI/UX, and optimize search engine crawling to help your business get found.`
    * Action Buttons: `Get Started`, `Learn More`
  * *Step 2 Services Grid*:
    * Tag: `OUTCOMES & SOLUTIONS`
    * Title: `What We Actually Do`
    * Service card 1: `High-Speed Code` - `No bulky plugins or page-builder platforms. Pure react frameworks optimized for under 1-second render.`
    * Service card 2: `SEO Crawl Architectures` - `Explicit crawl paths and metadata models matching search index schedules to rank key terms immediately.`
  * *Step 3 Engine Metrics*:
    * Tag: `INDEX METRICS`
    * Title: `SEO Engine Architecture`
    * average Graph Marker: `Average Position Over Time` / `+24.8% Increase` (with green line chart representation)
  * *Step 4 Capture automation*:
    * Tag: `CRM CONNECTIONS`
    * Title: `Lead Pipeline Automation`
    * Form Button: `Submit Project Request`
  * *Step 5 Footer Mock*:
    * Text: `© 2026 PageNotFound. All rights reserved. Terms | Privacy | Sitemap`

### Stage 8: Settle / Scroll-Back Persistent Hero State
* **Badge**: `Create Your Online Presence` (accompanied by star/sparkle icon)
* **Main Headline**:
  ```text
  Your customers are already searching.
  Can they find you?
  ```
* **Supporting Description**: `We help businesses build websites, improve visibility, and generate growth through strategic digital experiences.`
* **CTA Buttons**:
  1. Primary: `Book a Strategy Call` (Target: `#/contact`, purple button background)
  2. Secondary: `View Services` (Target: `#/services`, transparent outline button)

---

## 3. The Silent Struggle (Problem Statement)
* **Component File**: [ProblemSection.jsx](file:///d:/pagenotfound/src/components/ProblemSection.jsx)
* **Visual Presentation**: Dark cinematic parallax background utilizing misty forest imagery overlaid with strong, glowing contrast statements triggered sequentially on scroll.

### Elements
* **Scroll Badge**: `The Silent Struggle` (rendered in purple display type)
* **Statement Pair 1 (Website vs Search)**:
  * Hook: `"You spend $20,000 on a custom visual template..."`
  * Reality (Red glow): `But search engines don't even know you exist.`
* **Statement Pair 2 (Campaigns vs Volume)**:
  * Hook: `"You hire an agency and get lists of target keywords..."`
  * Reality (Amber glow): `But your organic traffic doesn't actually budge.`
* **Statement Pair 3 (Content vs Revenue)**:
  * Hook: `"You write blogs, share posts, and publish code..."`
  * Reality (Pink glow): `But your booking calendar remains completely silent.`
* **Conclusion Narrative**:
  > Digital obscurity is a silent tax on great products. If your target customers are searching for your solutions and finding your competitors instead, you are losing pipeline every day. We started PageNotFound to solve this exact problem: engineering custom code that commands rank and drives active inquiries.

---

## 4. Digital Discovery Journey (3D Flow Ecosystem)
* **Component File**: [DiscoveryJourney.jsx](file:///d:/pagenotfound/src/components/DiscoveryJourney.jsx)
* **Visual Presentation**: Spliscreen structure featuring a left side narration block and a right side 3D Canvas rendering data nodes, glowing pipelines, rising lead notifications, and performance graphs representing a business's digital transition.

### Narrative Left Panel Progression Stages
1. **Invisible Start**
   * Category: `Your Current Website`
   * Description: `A great product hidden on a slow template that search engine crawlers ignore and visitors leave within seconds. You are invisible to the people who need you.`
2. **Fast Code Foundation**
   * Category: `Web Engineering`
   * Description: `A custom-coded React framework built to load in milliseconds. No bloated code. A clean, premium layout that commands immediate trust and loads under 1 second.`
3. **Search Alignment**
   * Category: `SEO Mapping`
   * Description: `We structure your pages and schemas so search engine crawlers understand what you do. Organic search traffic starts flowing cleanly into your site.`
4. **Credibility & Authority**
   * Category: `Visual Presence`
   * Description: `Generous whitespace, premium typography, and structured content assets that build visual trust, converting passive readers into interested prospects.`
5. **Active Lead Funnels**
   * Category: `High-Intent Campaigns`
   * Description: `Laser-focused search campaigns targeting buyers at the exact moment of search. Traffic accelerates, delivering qualified inquiries to your calendar.`
6. **Lead Pipeline Sync**
   * Category: `Automation & CRM`
   * Description: `Connecting your frontend to CRM pipelines and lead sync channels. Spikes in traffic are automatically converted into qualified sales opportunities.`
7. **The Visibility Standard** (Final Centered Stage)
   * Category: `Consolidated Presence` / `Compounding Growth`
   * Title: `Connected & Discovered`
   * Description: `Your business is no longer a hidden island. It is the core of an active, compounding digital engine scaling 24/7.`

### Interactive 3D Canvas Cards Data
* **Card 1: Your Business (Isolated Entity state)**:
  * Info: `ISOLATED ENTITY` / `TRAFFIC: 0/mo` / `LEADS: 0` / `RANKINGS: None`
  * Alert: `No visibility, no customer flow`
* **Card 2: SEO Activation**:
  * Metrics: `Search Engine Rank` / `🏆 #1 Ranking` / `For target buyer keywords`
* **Card 3: Organic Traffic**:
  * Metrics: `Traffic Growth` / `📈 +340%` / `Consistent monthly growth`
* **Card 4: Keyword Visibility**:
  * Metrics: `Indexed Keywords` / `🔑 4.2k active` / `High-intent search volume`
* **Card 5: Instagram Campaign**:
  * Metrics: `Instagram Post` / `🔥 Going Viral` / `❤️ 14.8k Likes`
* **Card 6: Facebook Ads**:
  * Metrics: `Sponsored Reach` / `👥 320 Shares` / `💬 88 Comments`
* **Card 7: LinkedIn Growth**:
  * Metrics: `B2B Authority` / `💼 Authority Article` / `💬 45 Industry Shares`
* **Card 8: Search Engine Ads**:
  * Metrics: `Ad` / `Scale Your Sales Today` / `www.yourbusiness.com/deals`
* **Card 9: Meta Sponsored**:
  * Metrics: `Meta Campaign` / `🎯 Lead Gen Ads` / `📈 CVR: +4.85%`
* **Card 10: Lead Funnel Capture**:
  * Fields: `Name: Jane Doe` / `Email: jane@client.com`
  * Badge: `Strategy Call Booked ✓`
* **Conversions Metrics Card**:
  * Metric: `Conversion Rate (CVR)` / `⚡ 8.42% CVR` / `Industry Benchmark: 2.1%`
* **ROI Analytics Card**:
  * Metric: `Return on Ad Spend` / `📈 +1,240% ROI` / `Compounding growth engine`
* **Mock Webpage Dashboard Panel**:
  * Live status: `CORE METRICS` / `LIVE SYNCING`
  * Values: `ACTIVE USERS: 1,248` / `CONVERSIONS: 384` / `REVENUE: $14.8k`
  * Funnel: `Traffic: 14.8k` | `Leads: 1.2k` | `Customers: 384`
* **Floating Real-Time Lead Bubbles (Animation)**:
  * `New Lead 🎉`
  * `New Inquiry 📬`
  * `Strategy Call Booked 📅`
  * `Demo Scheduled 🚀`

---

## 5. Founder Story & Manifesto
* **Component File**: [ManifestoSection.jsx](file:///d:/pagenotfound/src/components/ManifestoSection.jsx)
* **Visual Presentation**: Pure off-white, light editorial layouts combining structured columns, large quote blocks, and organic parallax imagery.

### Narrative Elements
* **Badge**: `Founder Story`
* **Heading**: `Why We Started PageNotFound.`
* **Core Pillars**:
  1. **The WordPress / Template Trap**
     * Copy: *We saw countless founders build extraordinary products, spend $20,000 on visual mockups, and launch them on bloated WordPress or Webflow templates. To the human eye, it looked gorgeous. To search engine indexing crawlers, it was a slow, unreadable mess of script tags and layout shifts. We started PageNotFound to build custom Web/React spaces from the ground up, designed to be crawled instantly.*
  2. **SEO is Software Engineering**
     * Copy: *Most agencies send lists of target keywords and PDF reports while ignoring broken sitemaps, rendering errors, and poor core web vitals. We believe SEO is a software engineering discipline, not a copy-paste marketing checklist. If your code is fast, clean, and semantically logical, rankings follow naturally.*
  3. **Pipelines Over Spreadsheets**
     * Copy: *We don't sell vanity impressions or search volume spikes that don't convert. We measure success by organic pipeline value, conversion rate optimization, and active sales calls booked. We run lean, custom, and transparent—connecting your web traffic directly to your sales pipeline.*
* **Image Floating Mandate Quote**:
  * Badge: `Our Mandate`
  * Mandate: `"We don't decorate templates. We write high-performance code that connects your brand with active buyers."`

---

## 6. Systematic Roadmap (Our Process)
* **Component File**: [ProcessSection.jsx](file:///d:/pagenotfound/src/components/ProcessSection.jsx)
* **Visual Presentation**: Interactive sidebar timeline tracking user scroll depth, synchronized with live visual diagnostics and active crawl logs.

### Timeline Steps
1. **Phase I: Crawl & Bottleneck Discovery**
   * Action Badge: `Discover`
   * Sub-Heading: `Deconstruct your current organic footprints.`
   * Description: `Before engineering any code, we crawl your current site from scratch. We isolate indexation bottlenecks, rendering errors, slow core web vitals, and crawl sitemap paths to define a clear, custom roadmap.`
   * Deliverables:
     * Full sitemap crawl indexation analysis
     * Search query cluster mapping
     * Competitor structural bottleneck audit
   * Console Log output:
     * `➜ Crawling URL index node [160, 20] ... 200 OK`
     * `➜ Auditing Metadata schemas ... Warning: 1 missing schema`
     * `➜ Bottleneck mapping completed in 104ms.`

2. **Phase II: Conversion-Bound Intent Mapping**
   * Action Badge: `Plan`
   * Sub-Heading: `Tailored structures for active buyers.`
   * Description: `We align your pages not by keyword-stuffing spreadsheets, but by direct user intent. We build detailed search paths connecting buyer queries to customized landing layouts that drive conversions, not vanity impressions.`
   * Deliverables:
     * Structured semantic architecture maps
     * Search funnel intent diagrams
     * Keyword-to-page matching matrices
   * Console Log output:
     * `➜ Grouping search queries into semantic intent trees...`
     * `➜ Mapping nodes to conversion page routers ... Complete`

3. **Phase III: Semantic React Engineering**
   * Action Badge: `Build`
   * Sub-Heading: `Coded for instant page speeds and compliance.`
   * Description: `We write clean, high-performance React code from scratch. By implementing semantic HTML5 structures, dynamic JSON-LD structured schemas, and lightning-fast loading layouts, we make sure search engines read your site with zero friction.`
   * Deliverables:
     * Semantic React DOM components
     * Automatic schema & sitemap injection
     * PageSpeed optimization (LCP under 1.2s)
   * Console Log output:
     * `➜ Dynamic JSON-LD structured schema inject ... Built`
     * `➜ Server-side rendering (SSR) routing static bundles ... Injected`

4. **Phase IV: Automated Growth Scaling**
   * Action Badge: `Scale`
   * Sub-Heading: `Pipeline growth synced automatically.`
   * Description: `We connect your high-performing search pages directly to customer capture pipelines. We sync lead forms, CRM platforms, and database webhooks in real-time, ensuring traffic spikes translate directly into sales calls.`
   * Deliverables:
     * Automated CRM & pipeline bridges
     * Real-time visibility growth tracker
     * Synchronized sales alerts & webhooks
   * Console Log output:
     * `➜ Routing traffic spikes into lead database pipelines...`
     * `➜ Triggering webhooks automation sync... Online`

### Interactive Performance Metrics Shown
* **PageSpeed Lighthouse Score**: `99 PAGESPEED` / `LIGHTHOUSE COMPLIANT`
* **Core Web Vitals**:
  * LCP Speed: `0.8s (EXCELLENT)`
  * Layout Shift: `0.00 (STABLE)`
  * Input Block: `12ms (INSTANT)`
* **Conversion Scaling sparkline metrics**:
  * `Traffic: 4.2x` | `+320% Leads`

---

## 7. Capabilities & Comparison Matrix
* **Component File**: [Services.jsx](file:///d:/pagenotfound/src/components/Services.jsx)
* **Visual Presentation**: Interactive capability card switches displaying deliverables alongside a comprehensive bespoke vs template agency comparison grid.

### Services Catalogue
1. **Search Index Audit & Setup**
   * Tagline: `Search engines must read your code to rank your pages.`
   * Description: `A beautiful site is useless if it is invisible to search engines. We audit your codebase structure and fix rendering bottlenecks so search engines can index your site easily and naturally.`
   * Deliverables:
     * Code and tag layout adjustments for indexing
     * Clean structure mapping for sitemaps and links
     * Fixing hidden rendering blocks that delay crawling
     * Setting up search schemas so search engine crawlers read details
     * Continuous checks to prevent search indexing errors
   * Inquire Button: `Inquire About This Service`

2. **Intent Mapping & Campaigns**
   * Tagline: `Attract active buyers, ignore vanity clicks.`
   * Description: `We design campaigns that target queries representing genuine buying interest. We prioritize bringing you qualified prospects rather than empty clicks.`
   * Deliverables:
     * Direct search-intent query alignment maps
     * High-converting, lightning-fast landing structures
     * Qualified inquiry capture and attribution setup
     * Split-testing pages for optimal conversions
     * Strategic allocation to lower acquisition costs

3. **Custom Brand & Layout Design**
   * Tagline: `Visual layouts that command immediate trust.`
   * Description: `We build custom-designed layouts with rich typography and breathing room that represent your brand as a market authority. No templates, no cookie-cutter presets.`
   * Deliverables:
     * Bespoke logo design and color identities
     * Intuitive navigation patterns and spacing scales
     * Consistent typography rules that guide attention
     * Custom interactive elements that capture focus
     * Figma concepts coded directly into clean React

4. **Sales Pipeline Integrations**
   * Tagline: `Sync web traffic directly to your sales CRM.`
   * Description: `We connect your website forms and touchpoints with your CRM systems and databases. When leads come in, your sales workflow fires off immediately.`
   * Deliverables:
     * Lead forms syncing directly to HubSpot or Salesforce
     * Automated notifications via Slack or email webhooks
     * Analytics reporting mapping calls to source channels
     * Connecting scheduling widgets like Calendly
     * Custom webhooks bridging leads to customer databases

### Agency Comparison Matrix
| Operational Pillar | Traditional Template Agency | PageNotFound Bespoke Pipelines |
| :--- | :--- | :--- |
| **Development Basis** | Heavy template builders with bloated plugins | Custom React code written from scratch |
| **Search Compliance** | Slow indexing and template markup issues | Index-compliant schema and semantic structure |
| **Campaign Goals** | Aiming for search impressions and vanity clicks | Targeting buying queries and pipeline growth |
| **Page Loading Speed** | Slow mobile load times (3 to 6 seconds) | Sub-second speeds that prevent lost leads |
| **Lead Syncing** | Manual downloads and disjointed databases | Automatic real-time sync with CRM platforms |

---

## 8. Portfolio & Case Studies
* **Component File**: [Portfolio.jsx](file:///d:/pagenotfound/src/components/Portfolio.jsx)
* **Visual Presentation**: Filterable case study cards highlighting roles, taglines, project briefs, and key verified results.

### Case Studies
1. **Aether Logistics** (SEO & Tech Engineering)
   * Role: `Crawl Architecture & SEO Engineering`
   * Tagline: `Expanding indexation footprint from legacy fragments to 98% coverage.`
   * Challenge: *Aether Logistics had a custom JS single-page application that rendered client-side. Because crawlers could not load the heavy JS scripts within their CPU cycles, only 12% of regional shipping hubs and routes were indexed, making them invisible for organic B2B freight queries.*
   * Solution: *We rebuilt the site layout using static route generation mapping, fully semantic HTML structures, server-side pre-rendered content, and schema structured injection. We corrected header statuses and established crawler-friendly links across all hub locations.*
   * Verified Outcomes:
     * 98% index coverage achieved in 60 days
     * 340% increase in organic search visibility for B2B route queries
     * 2.4x growth in monthly freight request pipelines
   * Card Action Button: `Request Case Briefing`

2. **Vanguard Legal** (Performance Funnels)
   * Role: `Experience Design & Acquisition Funnels`
   * Tagline: `Attracting premium venture clients through conversion-centered UX design.`
   * Challenge: *Vanguard Legal wanted to acquire boutique startup and legal fund partners from search traffic. However, their legacy landing pages were cluttered, slow-loading, and utilized generic templates, resulting in a high bounce rate and low conversion rates.*
   * Solution: *We engineered a high-end, dark-theme layout with customized type scales and smooth animations, emphasizing corporate authority. We simplified the client onboarding experience into a multi-step intent qualifier form that reduced administrative friction.*
   * Verified Outcomes:
     * Conversion rate increased from 1.1% to 4.6%
     * 58% reduction in cost-per-acquisition (CPA) on search ads
     * 4.2x growth in qualifying founder consultation queries

3. **Kinetix Bio** (Experience & 3D Design)
   * Role: `Bespoke 3D Experience & WebGL`
   * Tagline: `Establishing scientific authority via interactive WebGL interfaces.`
   * Challenge: *As a biotech pioneer, Kinetix Bio struggled to explain their complex protein folding platform to institutional investors and pharma partners without scheduling long technical presentations.*
   * Solution: *We developed an interactive 3D WebGL protein visualizer integrated directly into their website. Users could rotate, interact with, and view molecular structures in real time, demonstrating their technological capabilities visually.*
   * Verified Outcomes:
     * Average session duration increased from 42s to 4m 15s
     * Secured 2 new enterprise biotech institutional partnerships
     * Eliminated visual ambiguity in corporate pitch cycles

---

## 9. Who We Are (Core Philosophy)
* **Component File**: [AboutUs.jsx](file:///d:/pagenotfound/src/components/AboutUs.jsx)
* **Visual Presentation**: Dark thematic layout exploring core values, architectural foundations, and operational mandates.

### Narrative Elements
* **Badge**: `Who We Are`
* **Heading**: `We Are the Link Between Invisibility and Authority.`
* **Introduction**:
  > In a digital universe where billions of queries are submitted every second, most businesses remain hidden behind dead links, slow load times, and poor crawl architectures. We named ourselves **PageNotFound** as a reminder of what happens when strategy and technical execution are ignored. We build the pipelines that make you discoverable.
* **Core Philosophy statement**:
  * Title: `The Digital Landscape is Broken.`
  * Copy: *Most agencies focus on cosmetic template updates that look beautiful to the owner but remain invisible to search engines and users. They buy stock illustrations, write generic content, and run standard ad setups. We believe digital growth is an engineering discipline. A website must load instantly, render clean semantic markup, answer search query intent precisely, and convert visitors into partners without friction.*

### Principles of Execution
* **Absolute Technical Integrity**
  * Copy: *We write performant code, set up rigorous indexation maps, and avoid bulky page-builders that slow down crawls.*
* **Intent-Driven Acquisition**
  * Copy: *We capture demand where it already exists. We target keywords that indicate clear buying signals instead of chasing high-volume vanity traffic.*

### Foundations of Authority
1. **01 / SEARCH INFRASTRUCTURE - Indexation & Crawl**
   * Copy: *Search engines must index your website effectively. We design logical page hierarchies, clean rendering strategies, and correct structured metadata to make indexing seamless.*
2. **02 / VISUAL STORYTELLING - Emotional Coherence**
   * Copy: *A brand's design system represents its digital handshake. We build premium, bespoke layouts, custom assets, and immersive animations that communicate instantly that you are a market leader.*
3. **03 / PERFORMANCE PIPELINES - Direct Attribution**
   * Copy: *Traffic is meaningless without action. We design conversion funnels, load-optimized landing experiences, and solid lead systems so every visitor represents potential growth.*

### Our Approach
* **Pillar Title**: `We Build for Longevity.`
* **Pillar I: No Vanity Metrics**
  * Copy: *We focus on metrics that impact your business—qualified leads, pipeline value, organic market share, and revenue. Impressions alone don't build businesses.*
* **Pillar II: Full Transparency**
  * Copy: *No complex agency reporting. You get access to a clean dashboard displaying indexation rates, organic pipeline, and client acquisition cost. Fully audited.*
* **Action Call**: `Discuss a Partnership` (accompanied by an arrow)

---

## 10. Briefing Center & FAQs
* **Component File**: [ContactUs.jsx](file:///d:/pagenotfound/src/components/ContactUs.jsx)
* **Visual Presentation**: Dynamic form flow structured as a custom requirements builder alongside a detailed corporate FAQ.

### Briefing Builder Fields & Options
* **Header Title**: `Briefing Center` / `Let's Engineer Your Online Presence.`
* **Header Subtitle**: `Skip the generic introductory chat. Complete our Briefing Builder to lay out your scope, target parameters, and timelines.`
* **Step 1: Growth Objectives (Multiple Select)**:
  * Option 1: `Search Indexing (SEO)`
  * Option 2: `Intent Campaigns (PPC)`
  * Option 3: `Design System & Branding`
  * Option 4: `3D WebGL / Experience`
  * Option 5: `Marketing Automation`
* **Step 2: Projected Investment Range (Single Select)**:
  * Option 1: `$5,000 – $10,000`
  * Option 2: `$10,000 – $25,000`
  * Option 3: `$25,000+`
* **Step 3: Timeline Parameters (Single Select)**:
  * Option 1: `Immediate (< 1 month)`
  * Option 2: `Standard (1–3 months)`
  * Option 3: `Planning (3+ months)`
* **Step 4: Strategic Context**:
  * Input 1 (Text): `Full Name` (Placeholder: `John Doe`)
  * Input 2 (Text): `Company / Domain` (Placeholder: `domain.com`)
  * Input 3 (Email): `Work Email` (Placeholder: `john@domain.com`)
  * Input 4 (Textarea): `Describe Your Pipeline Objective` (Placeholder: `Outline the current problems you are facing in search results or organic conversion...`)
* **Submit Action Button**: `Submit Briefing Blueprint` (with send icon)
* **Success Overlay message**:
  * Heading: `Briefing Strategy Initiated`
  * Description: `We have received your custom requirements map. Our digital architecture team will review your objectives and contact you within 24 hours.`

### Corporate FAQs (Clarifications)
1. **Q: Do you work on monthly retainers or fixed project fees?**
   * A: *We offer both options based on your goals. For core infrastructure implementation (e.g. SEO crawls, custom site builds), we structure fixed project milestones. For ongoing optimization, campaign performance, and content hub scaling, we run monthly retainer sprints.*
2. **Q: What is your typical onboarding window?**
   * A: *Due to our technical, template-free approach, we restrict concurrent client intake. Onboarding typically takes 10 to 14 days, starting with a complete crawl audit and conversion tracking verification.*
3. **Q: Do we own the custom codebase and assets?**
   * A: *Yes, absolutely. Once code deliverables are handed over and finalized, your company maintains full intellectual property ownership of the site, custom codebases, scripts, configurations, and creative assets.*
4. **Q: How do you measure and verify campaign results?**
   * A: *We install server-side tracking pipelines connected directly to your CRM. This maps lead conversions directly to search queries and---

## 11. Global Footer
* **Component File**: [Footer.jsx](file:///d:/pagenotfound/src/components/Footer.jsx)
* **Visual Presentation**: Dark theme background with subtle floating stardust canvas particles, detailed navigation columns, and massive low-contrast background brand lettering.

### Elements
* **Brand Logo Link**: `PageNotFound.`
* **Brand Summary Block**: `Engineering structural digital visibility, semantic index architectures, visual systems, and connected pipelines.`
* **Capabilities Sitemap Links**:
  * `Search Architecture` (Target: `#/services`)
  * `Intent Funnels` (Target: `#/services`)
  * `Visual Systems` (Target: `#/services`)
  * `Headless Engineering` (Target: `#/services`)
  * `Operational Sync` (Target: `#/services`)
* **Explore Sitemap Links**:
  * `Discovery Journey` (Target: `#/services`)
  * `Architecture Audit` (Target: `#/about`)
* **External Social Channels**:
  * `LinkedIn` (Target: `https://linkedin.com`)
  * `Twitter` (Target: `https://twitter.com`)
  * `GitHub` (Target: `https://github.com`)
  * `Dribbble` (Target: `https://dribbble.com`)
* **Low-Contrast Giant background Type**: `PAGENOTFOUND`
* **Sub-Bar Copyright info**: `© 2026 PageNotFound. All rights reserved.`
* **Sub-Bar Legal Links**:
  * `Privacy Policy` (Target: `#/)`)
  * `Terms of Service` (Target: `#/)`
