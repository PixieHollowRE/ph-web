var _gdeFooter = new function () {
  this.setupVars = function () {
    this['runStateFlag'] = 0;
    this['footerFeaturedLinks'] = new Array();
    this['footerLegalLinks'] = new Array();
    this['sitemapRows'] = new Array();
    this['sitemapRow'] = new Array();
    this['settignsObject'] = window[this.getQuery('settings')];
    var protocol = window.location.protocol.toString();
    if (protocol == 'https:') {
      this['secure'] = true;
    } else {
      this['secure'] = false;
    };
    this['isIE6'] = false;
    var JSCO = new Object();
    JSCO.chAppVersion = navigator.appVersion.split('MSIE');
    JSCO.chBrwsrVer = parseFloat(JSCO.chAppVersion[1]);
    if ((JSCO.chBrwsrVer >= 5.5 && JSCO.chBrwsrVer < 7) && (document.body.filters)) {
      this['isIE6'] = true;
    };
  };
  this.setupSettings = function () {
    this.checkVariable('target');
    this.checkVariable('footerVisible', '');
    this.checkVariable('footerDisplayMode', '');
    this.checkVariable('footerStyleSet', 'default');
    this.checkVariable('footerShowTitle', '');
    this.checkVariable('footerShowSiteMap', '');
    this.checkVariable('footerShowFeaturedLinks', '');
    this.checkVariable('footerShowLegal', '');
    this.checkVariable('footerLegalIBATitle', '');
    this.checkVariable('footerLegalSiteMapTitle', '');
    this.checkVariable('footerLegalPrivacyPolicyTitle', '');
    this.checkVariable('footerLegalSafetyTitle', '');
    this.checkVariable('footerLegalIBALink', '');
    this.checkVariable('footerLegalSiteMapLink', '');
    this.checkVariable('footerLegalPrivacyPolicyLink', '');
    this.checkVariable('footerLegalSafetyLink', '');
    this.checkVariable('footerLegalIBATarget', '');
    this.checkVariable('footerLegalSiteMapTarget', '');
    this.checkVariable('footerLegalPrivacyPolicyTarget', '');
    this.checkVariable('footerLegalSafetyTarget', '');
    this.checkVariable('footerLegalCustom');
    this.checkVariable('footerStyleBackgroundColor');
    this.checkVariable('footerStyleBodyTextColor');
    this.checkVariable('footerStyleLegalTextColor');
    this.checkVariable('footerStyleTitleLineColor');
    this.checkVariable('footerStyleBodyLineColor');
    this.checkVariable('footerStyleFeaturedTextColor');
    this.checkVariable('footerStyleFeaturedBackgroundColor');
  };
  this.buildData = function () {
    this.footerFeaturedLinks.push(new Object({
      "name": "FEATURED LINKS:",
      "link": "null",
      "id": "featuredlinks",
      "target": "_self"
    }));
    this.footerFeaturedLinks.push(new Object({
      "name": "Coloring Pages",
      "link": "http://disneyjunior.com/make",
      "id": "null",
      "target": "_self"
    }));
    this.footerFeaturedLinks.push(new Object({
      "name": "Online Games",
      "link": "http://games.disney.com/",
      "id": "null",
      "target": "_self"
    }));
    this.footerFeaturedLinks.push(new Object({
      "name": "Muppets Most Wanted",
      "link": "http://muppets.disney.com/muppets-most-wanted",
      "id": "null",
      "target": "_self"
    }));
    this.footerFeaturedLinks.push(new Object({
      "name": "Maleficent",
      "link": "http://movies.disney.com/maleficent",
      "id": "null",
      "target": "_self"
    }));
    this.footerFeaturedLinks.push(new Object({
      "name": "Frozen DVD",
      "link": "http://movies.disney.com/frozen/products",
      "id": "null",
      "target": "_self"
    }));
    this.footerFeaturedLinks.push(new Object({
      "name": "Club Penguin",
      "link": "http://www.clubpenguin.com/",
      "id": "null",
      "target": "_self"
    }));
    this.footerFeaturedLinks.push(new Object({
      "name": "Disney Gift Card",
      "link": "http://www.disneystore.com/transfer/280559/gift-cards/mn/1001267/?CMP=OTL-Dcom&att=Dcom_HP_Footer_GC",
      "id": "disney_gift_card",
      "target": "_self"
    }));
    this.footerFeaturedLinks.push(new Object({
      "name": "Disney Visa&#174; Card",
      "link": "http://disneyrewards.com/apply/disney-rewards-credit-card?CELL=62FV19 ",
      "id": "visarewards",
      "target": "_self"
    }));
    this.footerLegalLinks.push(new Object({
      "name": "Help & Guest Services",
      "link": "http://disney.go.com/guestservices/",
      "id": "guest_services",
      "target": "_self",
      "cdsEnabled": "false"
    }));
    this.footerLegalLinks.push(new Object({
      "name": "Site Map",
      "link": "http://disney.go.com/sitemap/",
      "id": "site_map",
      "target": "_self",
      "cdsEnabled": "false"
    }));
    this.footerLegalLinks.push(new Object({
      "name": "Terms of Use",
      "link": "http://disneytermsofuse.com",
      "id": "terms",
      "target": "_self",
      "cdsEnabled": "true"
    }));
    this.footerLegalLinks.push(new Object({
      "name": "Legal Notices",
      "link": "http://home.disney.go.com/guestservices/legalnotices%3FppLink=pp_wdig.html",
      "id": "legal_notices",
      "target": "_self",
      "cdsEnabled": "false"
    }));
    this.footerLegalLinks.push(new Object({
      "name": "Privacy Policy",
      "link": "https://disneyprivacycenter.com/",
      "id": "privacy_policy",
      "target": "_self",
      "cdsEnabled": "true"
    }));
    this.footerLegalLinks.push(new Object({
      "name": "Your California Privacy Rights",
      "link": "https://disneyprivacycenter.com/notice-to-california-residents/",
      "id": "privacy_policy_ca",
      "target": "_self",
      "cdsEnabled": "true"
    }));
    this.footerLegalLinks.push(new Object({
      "name": "Children's Online Privacy Policy",
      "link": "https://disneyprivacycenter.com/kids-privacy-policy/english/",
      "id": "privacy_policy_children",
      "target": "_self",
      "cdsEnabled": "true"
    }));
    this.footerLegalLinks.push(new Object({
      "name": "Interest-Based Ads",
      "link": "http://preferences-mgr.truste.com/?type=disneycolor&affiliateId=115",
      "id": "interest_based_ads",
      "target": "_blank",
      "cdsEnabled": "false"
    }));
    this.footerLegalLinks.push(new Object({
      "name": "About Disney",
      "link": "http://thewaltdisneycompany.com/?ppLink=pp_wdig",
      "id": "about_disney",
      "target": "_self",
      "cdsEnabled": "false"
    }));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Games", "http://games.disney.com/", "games", "_self"), this.buildSitemapLinkItem("Mobile Apps", "http://games.disney.com/mobile-apps", "games_mobile_apps", "_self"), this.buildSitemapLinkItem("Fashion Games", "http://games.disney.com/fashion-games", "fashion_games", "_self"), this.buildSitemapLinkItem("Video Games", "http://games.disney.com/video-games", "games_video", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Videos", "http://video.disney.com/", "videos", "_self"), this.buildSitemapLinkItem("Music Videos", "http://music.disney.com/music-videos", "videos_musicvideos", "_self"), this.buildSitemapLinkItem("New Episodes", "http://video.disney.com/shows", "videos_fullepisodes", "_self"), this.buildSitemapLinkItem("Movie Trailers", "http://video.disney.com/movies", "videos_movietrailers", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Mobile Apps", "http://games.disney.com/mobile-apps", "create", "_self"), this.buildSitemapLinkItem("Disney Infinity Toy Box", "http://games.disney.com/disney-infinity-toy-box-app", "create_apps", "_self"), this.buildSitemapLinkItem("Frozen Free Fall", "http://games.disney.com/frozen-free-fall-app", "create_my_creations", "_self"), this.buildSitemapLinkItem("Star Wars: Assault Team", "http://games.disney.com/star-wars-assault-team-app", "create_contests", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("DISNEY JUNIOR", "http://disneyjunior.com/", "disney_junior", "_self"), this.buildSitemapLinkItem("Disney Junior Games", "http://disneyjunior.com/games", "disney_junior_games", "_self"), this.buildSitemapLinkItem("Disney Junior Videos", "http://disneyjunior.com/video", "disney_junior_videos", "_self"), this.buildSitemapLinkItem("Coloring Pages", "http://disneyjunior.com/make", "disney_junior_coloringpages", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Family", "http://spoonful.com", "family", "_self"), this.buildSitemapLinkItem("Kids&#96; Crafts", "http://spoonful.com/crafts", "kids_crafts", "_self"), this.buildSitemapLinkItem("Kids&#96; Recipes", "http://spoonful.com/recipes", "kids_recipes", "_self"), this.buildSitemapLinkItem("Coloring Pages", "http://spoonful.com/coloring-pages", "coloring_pages", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Disney Insider", "http://blogs.disney.com/insider/", "disneyinsider", "_self"), this.buildSitemapLinkItem("News", "http://blogs.disney.com/insider/articles/", "insider_becomeinsider", "_self"), this.buildSitemapLinkItem("OMD", "http://blogs.disney.com/oh-my-disney/", "omd", "_self"), this.buildSitemapLinkItem("Disney Blogs", "http://blogs.disney.com/", "disney_blogs", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Characters & Stars", "http://disney.com", "characters", "_self"), this.buildSitemapLinkItem("Disney Princess", "http://princess.disney.com/", "characters_princess", "_self"), this.buildSitemapLinkItem("Mickey Mouse and Friends", "http://mickey.disney.com/", "characters_classic_characters", "_self"), this.buildSitemapLinkItem("Disney Fairies", "http://fairies.disney.com/", "characters_fairies", "_self"))));
    this.sitemapRows.push(this.sitemapRow);
    this.sitemapRow = new Array();
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Movies", "http://movies.disney.com/", "movies", "_self"), this.buildSitemapLinkItem("New Movies", "http://movies.disney.com/in-theaters", "movies_newmovies", "_self"), this.buildSitemapLinkItem("Blu-ray&trade; and On DVD ", "http://movies.disney.com/watch-at-home", "movies_dvdbluray", "_self"), this.buildSitemapLinkItem("Disney Movie Rewards", "http://disneymovierewards.go.com/", "movies_dmr", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("TV", "http://shows.disney.com/", "television", "_self"), this.buildSitemapLinkItem("Disney Channel", "http://disneychannel.disney.com/", "tvdisneychannel", "_self"), this.buildSitemapLinkItem("Disney XD", "http://disneyxd.disney.com/", "tvxd", "_self"), this.buildSitemapLinkItem("Disney Junior", "http://disneyjunior.com/", "tvdisney_junior", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Music", "http://music.disney.com/", "music", "_self"), this.buildSitemapLinkItem("New Music", "http://music.disney.com/", "music_newmusic", "_self"), this.buildSitemapLinkItem("Radio Disney", "http://music.disney.com/radio-disney", "music_radiodisney", "_self"), this.buildSitemapLinkItem("Listen Online", "http://music.disney.com/radio-disney", "writer", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Live Shows", "http://liveshows.disney.com/", "live_events", "_self"), this.buildSitemapLinkItem("Disney On Broadway", "http://www.disneyonbroadway.com/", "liveevents_broadway", "_self"), this.buildSitemapLinkItem("Disney On Ice", "http://www.disneyonice.com/", "liveevents_onice", "_self"), this.buildSitemapLinkItem("Disney Live!", "http://www.disneylive.com/", "liveevents_live", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Books", "http://books.disney.com/", "books", "_self"), this.buildSitemapLinkItem("All Books", "http://books.disney.com/books/", "all_books", "_self"), this.buildSitemapLinkItem("Disney Digital Books", "http://disneydigitalbooks.go.com/?int_cmp=dcom_cat_Books_Dcom_Footer_DDB", "disney_digital_ books", "_self"), this.buildSitemapLinkItem("Book An Author", "http://books.disney.com/book-an-author/", "book_an_author", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Store", "http://www.disneystore.com/transfer/280559/?CMP=OTL-Dcom:ChromShpIcon", "store", "_self"), this.buildSitemapLinkItem("Shop by Character", "http://www.disneystore.com/transfer/280559/d-characters/mn/1000001/?CMP=OTL-Dcom&att=GlobalFooter_Character", "store_bycharacter", "_self"), this.buildSitemapLinkItem("Shop Personalized Gifts", "http://www.disneystore.com/transfer/280559/mn/1001279/?CMP=OTL-Dcom&att=GlobalFooter_PersonalizedGifts", "store_personalizedgifts", "_self"), this.buildSitemapLinkItem("Shop Sale", "http://www.disneystore.com/transfer/280559/mn/1001152/?CMP=OTL-Dcom&att=GlobalFooter_Sale", "store_shopsale", "_self"))));
    this.sitemapRow.push(this.buildSitemapGroup(new Array(this.buildSitemapLinkItem("Parks and Travel", "http://disneyparks.disney.go.com", "parks", "_self"), this.buildSitemapLinkItem("Walt Disney World Resort", "https://disneyworld.disney.go.com/", "parks_disneyworld", "_self"), this.buildSitemapLinkItem("Disneyland Resort", "https://disneyland.disney.go.com/", "parks_disneyland", "_self"), this.buildSitemapLinkItem("Special Offers", "http://disneyparks.disney.go.com/special-offers-deals-discounts/", "parks_disneycruise", "_self"))));
    this.sitemapRows.push(this.sitemapRow);
  };
  this.isNotBlank = function (v) {
    r = true;
    if (v == null || v == '' || v == undefined || v == 'null' || v == 'undefined') {
      r = false;
    };
    return r;
  };
  this.clearContents = function (obj) {
    while (obj.firstChild) obj.removeChild(obj.firstChild);
  };
  var stripHTML = function (s) {
    var r = s.replace(/(<([^>]+)>)/ig, '');
    return r;
  };
  this.getQuery = function (var_name) {
    var s = document.documentElement.getElementsByTagName('script');
    var scriptIndex;
    for (var i = 1; i < s.length + 1; i++) {
      if (s[s.length - i].getAttribute('src', 0) != null && s[s.length - i].getAttribute('src', 0).indexOf('/globalelements/footer.js') != -1) {
        scriptIndex = i;
      };
    };
    var queryString = s[s.length - scriptIndex].getAttribute('src', 0);
    m = (new RegExp('[?&;]' + var_name + '=([^&;#]*)')).exec(queryString);
    return m ? unescape(m[1]) : null;
  };
  this.checkVariable = function (varName, defaultValue) {
    if (this.isNotBlank(this.settignsObject) && this.isNotBlank(this.settignsObject[varName])) {
      this[varName] = this.settignsObject[varName];
    } else {
      this[varName] = this.getQuery(varName);
      if (this[varName] == null && defaultValue != null && defaultValue != undefined) {
        this[varName] = defaultValue;
      };
    };
  };
  this.buildSitemapGroup = function (items) {
    var sitemapGroup = new Array();
    var itemsLength = items.length;
    for (var i = 0; i < itemsLength; i++) {
      if (i == 0) {
        sitemapGroup.push(items[i]);
      } else {
        sitemapGroup.push(items[i]);
      };
    };
    return sitemapGroup;
  };
  this.buildSitemapLinkItem = function (name, link, id, target) {
    var sitemapLinkObject = new Object();
    sitemapLinkObject.target = target;
    sitemapLinkObject.name = name;
    sitemapLinkObject.link = link;
    sitemapLinkObject.id = id;
    return sitemapLinkObject;
  };
  this.buildSitemapRows = function () {
    var sitemapRowsContents = '';
    var sitemapRowStyle;
    sitemapRowsContents += "<div id='gde_footerSiteMapContainer'>";
    var sitemapRowsLength = this.sitemapRows.length;
    for (var i = 0; i < sitemapRowsLength; i++) {
      if (i == 0) {
        sitemapRowStyle = 'gde_footerSitemapFirstRow';
      } else {
        sitemapRowStyle = 'gde_footerSitemapRow';
      };
      sitemapRowsContents += "<div id='" + sitemapRowStyle + "'>";
      sitemapRowsContents += "<table class='gde_footerSitemapGroup' cellpadding='0' cellspacing='0'>";
      sitemapRowsContents += '<tr>';
      var sitemapRowLength = this.sitemapRows[i].length;
      for (var ii = 0; ii < sitemapRowLength; ii++) {
        sitemapRowsContents += "<td valign='top'>";
        var sitemapItemStyle;
        var sitemapRowCollectionLength = this.sitemapRows[i][ii].length;
        for (var iii = 0; iii < sitemapRowCollectionLength; iii++) {
          var sitemapItemName;
          var sitemapItemTracking;
          var sitemapItemParent;
          if (iii == 0) {
            sitemapItemStyle = 'gde_sitemapItemTitle';
            sitemapItemName = this.sitemapRows[i][ii][iii].name.toUpperCase();
            sitemapItemTracking = '&lid=global_footer/' + this.sitemapRows[i][ii][iii].id + '/' + this.sitemapRows[i][ii][iii].id;
            sitemapItemParent = this.sitemapRows[i][ii][iii].id;
          } else {
            sitemapItemStyle = 'gde_sitemapItem';
            sitemapItemName = this.sitemapRows[i][ii][iii].name;
            sitemapItemTracking = '&lid=global_footer/' + sitemapItemParent + '/' + this.sitemapRows[i][ii][iii].id;
          };
          var linkTarget = '';
          if (this.checkNull(this.sitemapRows[i][ii][iii].target)) {
            linkTarget = "target='" + this.sitemapRows[i][ii][iii].target + "'";
          };
          var sitemapItemLink = this.sitemapRows[i][ii][iii].link;
          sitemapRowsContents += "<span class='" + sitemapItemStyle + "'><a name='" + sitemapItemTracking + "' hr" + "ef='" + sitemapItemLink + "' " + linkTarget + " title='" + stripHTML(this.sitemapRows[i][ii][iii].name) + "'>" + sitemapItemName + "</a></span>";
        };
        sitemapRowsContents += '</td>';
      };
      sitemapRowsContents += '</tr>';
      sitemapRowsContents += '</table>';
      sitemapRowsContents += '</div>';
    };
    sitemapRowsContents += '</div>';
    return sitemapRowsContents;
  };
  this.checkNull = function (v) {
    var r = true;
    if (v == '--' || v == 'null' || v == null || v == '') {
      r = false;
    };
    return r;
  };
  this.buildLegalLinks = function () {
    var legalLinks = "<div class='gde_footerLegalLinks'>";
    var legalLinksSpacer = '&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;';
    var footerLegalLinksLength = this.footerLegalLinks.length;
    var firstLegalFooterItem = true;
    for (var i = 0; i < footerLegalLinksLength; i++) {
      if (this.footerDisplayMode == 'cds' && this.footerLegalLinks[i].cdsEnabled == 'true' || this.footerDisplayMode != 'cds') {
        var legalItemName = this.footerLegalLinks[i].name;
        var legalItemLink = this.footerLegalLinks[i].link;
        var legalItemTarget = '';
        if (this.checkNull(this.footerLegalLinks[i].target)) {
          legalItemTarget = "target='" + this.footerLegalLinks[i].target + "' ";
        };
        if (this.footerLegalLinks[i].id == 'interest_based_ads') {
          if (this.isNotBlank(this.footerLegalIBATitle)) {
            legalItemName = this.footerLegalIBATitle;
          };
          if (this.isNotBlank(this.footerLegalIBALink)) {
            legalItemLink = this.footerLegalIBALink;
          };
          if (this.isNotBlank(this.footerLegalIBATarget)) {
            legalItemTarget = "target='" + this.footerLegalIBATarget + "' ";
          };
        };
        if (this.footerLegalLinks[i].id == 'site_map') {
          if (this.isNotBlank(this.footerLegalSiteMapTitle)) {
            legalItemName = this.footerLegalSiteMapTitle;
          };
          if (this.isNotBlank(this.footerLegalSiteMapLink)) {
            legalItemLink = this.footerLegalSiteMapLink;
          };
          if (this.isNotBlank(this.footerLegalSiteMapTarget)) {
            legalItemTarget = "target='" + this.footerLegalSiteMapTarget + "' ";
          };
        };
        if (this.footerLegalLinks[i].id == 'privacy_policy') {
          if (this.isNotBlank(this.footerLegalPrivacyPolicyTitle)) {
            legalItemName = this.footerLegalPrivacyPolicyTitle;
          };
          if (this.isNotBlank(this.footerLegalPrivacyPolicyLink)) {
            legalItemLink = this.footerLegalPrivacyPolicyLink;
          };
          if (this.isNotBlank(this.footerLegalPrivacyPolicyTarget)) {
            legalItemTarget = "target='" + this.footerLegalPrivacyPolicyTarget + "' ";
          };
        };
        if (this.footerLegalLinks[i].id == 'internet_safety') {
          if (this.isNotBlank(this.footerLegalSafetyTitle)) {
            legalItemName = this.footerLegalSafetyTitle;
          };
          if (this.isNotBlank(this.footerLegalSafetyLink)) {
            legalItemLink = this.footerLegalSafetyLink;
          };
          if (this.isNotBlank(this.footerLegalSafetyTarget)) {
            legalItemTarget = "target='" + this.footerLegalSafetyTarget + "' ";
          };
        };
        if (!firstLegalFooterItem) {
          legalLinks += legalLinksSpacer;
        };
        if (this.isNotBlank(legalItemLink)) {
          legalLinks += "<a name='&lid=global_footer/legal/" + this.footerLegalLinks[i].id + "' hr" + "ef='" + legalItemLink + "' " + legalItemTarget + " title='" + stripHTML(legalItemName) + "'>" + legalItemName + "</a>";
        } else {
          legalLinks += legalItemName;
        };
        firstLegalFooterItem = false;
      };
    };
    if (this.isNotBlank(this.footerLegalCustom)) {
      legalLinks += this.footerLegalCustom;
    };
    legalLinks += '</div>';
    return legalLinks;
  };
  this.buildCopyrightText = function () {
    var copyText = "<div class='gde_footerCopyText'>";
    copyText += '&copy; Disney.  All rights reserved.';
    copyText += '</div>';
    return copyText;
  };
  this.buildLegalBlock = function () {
    var legalContents = '';
    legalContents += "<div id='gde_footerLegalContainer'>";
    legalContents += this.buildLegalLinks();
    legalContents += this.buildCopyrightText();
    legalContents += '</div>';
    if (this.footerDisplayMode != 'cds') {
      legalContents += "<div class='gde_comScoreLogo' id='gde_comScoreLogo'></div>";
    };
    return legalContents;
  };
  this.buildTitleBlock = function () {
    var titleContents = '';
    titleContents += "<div id='gde_footerTitleContainer'>";
    titleContents += '</div>';
    return titleContents;
  };
  this.buildFeaturedBlock = function () {
    var featuredContents = '';
    featuredContents += "<div id='gde_footerFeaturedContainer'>";
    featuredContents += "<table class='gde_footerFeaturedLinks'>";
    featuredContents += '<tr>';
    var footerFeaturedLinksLength = this.footerFeaturedLinks.length;
    for (var fi = 0; fi < footerFeaturedLinksLength; fi++) {
      featuredContents += '<td>';
      if (fi == 0) {
        featuredContents += "<span style='font-weight:bold;'>" + this.footerFeaturedLinks[fi].name + "</span>";
      } else {
        var linkTarget = '';
        if (this.checkNull(this.footerFeaturedLinks[fi].target)) {
          linkTarget = "target='" + this.footerFeaturedLinks[fi].target + "'";
        };
        if (this.footerFeaturedLinks[fi].link == 'null') {
          featuredContents += '<span>' + this.footerFeaturedLinks[fi].name + '</span>'
        } else {
          featuredContents += "<a name='&lid=global_footer/featured/" + this.footerFeaturedLinks[fi].id + "' hr" + "ef='" + this.footerFeaturedLinks[fi].link + "' title='" + stripHTML(this.footerFeaturedLinks[fi].name) + "' " + linkTarget + ">" + this.footerFeaturedLinks[fi].name + "</a>";
        };
      };
      featuredContents += '</td>';
    };
    featuredContents += '</tr>';
    featuredContents += '</table>';
    featuredContents += '</div>';
    return featuredContents;
  };
  this.showFooter = function () {
    document.getElementById('gde_footerContainer').style['visibility'] = 'visible';
  };
  this.hideFooter = function () {
    document.getElementById('gde_footerContainer').style['visibility'] = 'hidden';
  };
  this.buildFooterContents = function () {
    var footerContents = "<div id='gde_footerContainer' style='visibility:hidden;'><div id='gde_footerContents'>";
    footerContents += this.buildTitleBlock();
    footerContents += this.buildSitemapRows();
    footerContents += this.buildFeaturedBlock();
    footerContents += this.buildLegalBlock();
    footerContents += '</div></div>';
    return footerContents;
  };
  this.setFooterDisplayState = function () {
    if (this.footerDisplayMode == 'featuredAndLegal') {
      this.displayTitle(false);
      this.displaySiteMap(false);
      this.displayFeatured(true);
      this.displayLegal(true);
    } else if (this.footerDisplayMode == 'legalAndTitle') {
      this.displayTitle(true);
      this.displaySiteMap(false);
      this.displayFeatured(false);
      this.displayLegal(true);
    } else if (this.footerDisplayMode == 'legalOnly') {
      this.displayTitle(false);
      this.displaySiteMap(false);
      this.displayFeatured(false);
      this.displayLegal(true);
    } else if (this.footerDisplayMode == 'cds') {
      this.displayTitle(false);
      this.displaySiteMap(false);
      this.displayFeatured(false);
      this.displayLegal(true);
    } else {
      this.displayTitle(true);
      this.displaySiteMap(true);
      this.displayFeatured(true);
      this.displayLegal(true);
    };
    if (this.footerShowTitle == 'false') {
      this.displayTitle(false);
    };
    if (this.footerShowSiteMap == 'false') {
      this.displaySiteMap(false);
    };
    if (this.footerShowFeaturedLinks == 'false') {
      this.displayFeatured(false);
    };
    if (this.footerShowLegal == 'false') {
      this.displayLegal(false);
    };
  };
  this.setDisplay = function (targ, mode) {
    document.getElementById(targ).style['display'] = mode;
  };
  this.displayTitle = function (state) {
    if (state) {
      this.setDisplay('gde_footerTitleContainer', 'block');
    } else {
      this.setDisplay('gde_footerTitleContainer', 'none');
    };
  };
  this.displaySiteMap = function (state) {
    if (state) {
      this.setDisplay('gde_footerSiteMapContainer', 'block');
    } else {
      this.setDisplay('gde_footerSiteMapContainer', 'none');
    };
  };
  this.displayFeatured = function (state) {
    if (state) {
      this.setDisplay('gde_footerFeaturedContainer', 'block');
    } else {
      this.setDisplay('gde_footerFeaturedContainer', 'none');
    };
  };
  this.displayLegal = function (state) {
    if (state) {
      this.setDisplay('gde_footerLegalContainer', 'block');
      if (this.footerDisplayMode != 'cds') {
        this.setDisplay('gde_comScoreLogo', 'block');
      };
    } else {
      this.setDisplay('gde_footerLegalContainer', 'none');
      if (this.footerDisplayMode != 'cds') {
        this.setDisplay('gde_comScoreLogo', 'none');
      };
    };
  };
  this.buildFooterStyle = function () {
    var secureString;
    if (_gdeFooter.secure) {
      secureString = 'true';
      cssPath = 'https://home.disney.go.com/globalelements/footer.css';
    } else {
      secureString = 'false';
      cssPath = 'http://cdn3.home.disney.go.com/globalelements/footer.css';
    };
    var queryString = '?secure=' + secureString + '&IE6=' + _gdeFooter.isIE6 + '&styleSet=' + this.footerStyleSet + '&styleBackgroundColor=' + this.footerStyleBackgroundColor + '&styleBodyTextColor=' + this.footerStyleBodyTextColor + '&styleLegalTextColor=' + this.footerStyleLegalTextColor + '&styleTitleLineColor=' + this.footerStyleTitleLineColor + '&styleBodyLineColor=' + this.footerStyleBodyLineColor + '&styleFeaturedTextColor=' + this.footerStyleFeaturedTextColor + '&styleFeaturedBackgroundColor=' + this.footerStyleFeaturedBackgroundColor;
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    css.setAttribute('href', cssPath + queryString);
    css.setAttribute('media', 'screen');
    document.getElementsByTagName('head')[0].appendChild(css);
  };
  this.loadComscoreData = function () {
    var url = '';
    if (_gdeFooter.secure) {
      url = 'https://home.disney.go.com/globalelements/footer/comscore.txt?location=' + location.href;
    } else {
      url = 'http://cdn4.home.disney.go.com/globalelements/footer/comscore.txt?location=' + location.href;
    };
    var js = document.createElement('script');
    js.setAttribute('src', url);
    js.setAttribute('type', 'text/javascript');
    document.body.appendChild(js);
  };
  this.setComscoreDisplay = function (data) {
    var csBlock = document.getElementById('gde_comScoreLogo');
    _gdeFooter.clearContents(csBlock);
    csImageElement = document.createElement('img');
    if (_gdeFooter.secure) {
      csImageElement.setAttribute('src', 'https://s.dolimg.com/en-US/dcom/media/footer/comscore/' + data.image);
    } else {
      csImageElement.setAttribute('src', 'http://a.dolimg.com/en-US/dcom/media/footer/comscore/' + data.image);
    };
    csBlock.appendChild(csImageElement);
    if (data.title != 'null') {
      var csTitleBlock = document.getElementById('gde_footerTitleContainer');
      _gdeFooter.clearContents(csTitleBlock);
      var csTitleElement = document.createTextNode(data.title);
      csTitleBlock.appendChild(csTitleElement);
    };
  };
  this.loadStyle = function (styleName) {
    var url = '';
    if (_gdeFooter.secure) {
      url = 'https://home.disney.go.com/globalelements/footer/style.txt?styleName=' + styleName;
    } else {
      url = 'http://cdn.home.disney.go.com/globalelements/footer/style.txt?styleName=' + styleName;
    };
    var js = document.createElement('script');
    js.setAttribute('src', url);
    js.setAttribute('type', 'text/javascript');
    document.body.appendChild(js);
  };
  this.applyLoadedStyle = function (data) {
    _gdeFooter.setStyle('backgroundColor', data.backgroundColor);
    _gdeFooter.setStyle('bodyTextColor', data.bodyTextColor);
    _gdeFooter.setStyle('legalTextColor', data.legalTextColor);
    _gdeFooter.setStyle('titleLineColor', data.titleLineColor);
    _gdeFooter.setStyle('bodyLineColor', data.bodyLineColor);
    _gdeFooter.setStyle('featuredTextColor', data.featuredTextColor);
    _gdeFooter.setStyle('featuredBackgroundColor', data.featuredBackgroundColor);
    var mediaPath = '';
    if (_gdeFooter.secure) {
      mediaPath = 'https://s.dolimg.com/en-US/dcom/media/footer/sprites/';
    } else {
      mediaPath = 'http://a.dolimg.com/en-US/dcom/media/footer/sprites/';
    };
    if (_gdeFooter.isIE6) {
      _gdeFooter.setCSS('#gde_footerTitleContainer', 'background-image', 'url(' + mediaPath + data.spriteImageGIF + ')');
    } else {
      _gdeFooter.setCSS('#gde_footerTitleContainer', 'background-image', 'url(' + mediaPath + data.spriteImagePNG + ')');
    };
  };
  this.setCSS = function (theClass, element, value) {
    var cssRules;
    for (var S = 0; S < document.styleSheets.length; S++) {
      if (document.styleSheets[S]['rules']) {
        cssRules = 'rules';
      } else if (document.styleSheets[S]['cssRules']) {
        cssRules = 'cssRules';
      } else {};
      if (document.styleSheets[S].insertRule) {
        document.styleSheets[S].insertRule(theClass + '{' + element + ':' + value + ';}', document.styleSheets[S][cssRules].length);
      } else if (document.styleSheets[S].addRule) {
        document.styleSheets[S].addRule(theClass, element + ': ' + value + ';');
      };
    };
  };
  this.setStyle = function (style, color) {
    color = '#' + color;
    switch (style) {
    case 'backgroundColor':
      _gdeFooter.setCSS('#gde_footerContents', 'background-color', color);
      break;
    case 'bodyTextColor':
      _gdeFooter.setCSS('#gde_footerTitleContainer', 'color', color);
      _gdeFooter.setCSS('.gde_footerSitemapGroup a', 'color', color);
      _gdeFooter.setCSS('.gde_footerSitemapGroup a:link', 'color', color);
      _gdeFooter.setCSS('.gde_footerSitemapGroup a:visited', 'color', color);
      _gdeFooter.setCSS('.gde_sitemapItemTitle', 'color', color);
      _gdeFooter.setCSS('.gde_sitemapItem', 'color', color);
      break;
    case 'legalTextColor':
      _gdeFooter.setCSS('#gde_footerLegalContainer', 'color', color);
      _gdeFooter.setCSS('.gde_footerLegalLinks a', 'color', color);
      _gdeFooter.setCSS('.gde_footerLegalLinks a:link', 'color', color);
      _gdeFooter.setCSS('.gde_footerLegalLinks a:visited', 'color', color);
      break;
    case 'titleLineColor':
      _gdeFooter.setCSS('#gde_footerTitleContainer', 'border-bottom', 'solid 1px ' + color);
      break;
    case 'bodyLineColor':
      _gdeFooter.setCSS('#gde_footerSitemapRow', 'border-top', 'solid 1px ' + color);
      break;
    case 'featuredTextColor':
      _gdeFooter.setCSS('.gde_footerFeaturedLinks', 'color', color);
      _gdeFooter.setCSS('.gde_footerFeaturedLinks span', 'color', color);
      _gdeFooter.setCSS('.gde_footerFeaturedLinks a', 'color', color);
      _gdeFooter.setCSS('.gde_footerFeaturedLinks a:link', 'color', color);
      _gdeFooter.setCSS('.gde_footerFeaturedLinks a:visited', 'color', color);
      break;
    case 'featuredBackgroundColor':
      _gdeFooter.setCSS('#gde_footerFeaturedContainer', 'background-color', color);
      break;
    };
  };
  this.buildFooter = function () {
    this.setupVars();
    this.buildData();
    this.setupSettings();
    this.buildFooterStyle();
    if (this.target) {
      document.getElementById(this.target).innerHTML = this.buildFooterContents();
      this.documentLoaded();
    } else {
      document.write(this.buildFooterContents());
      this.checkDOMLoadState();
    };
  };
  this.checkDOMLoadState = function () {
    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', function () {
        _gdeFooter.runStateFlag = 1;
        _gdeFooter.documentLoaded()
      }, false);
    } else if (document.all && !window.opera) {
      var proto = "src='javascript:void(0)'";
      if (_gdeFooter.secure) proto = 'src=//:';
      document.write('<scr' + 'ipt id=loadTagFooter defer ' + proto + '><\/scr' + 'ipt>');
      var loadTagFooter = document.getElementById('loadTagFooter');
      loadTagFooter.onreadystatechange = function () {
        if (this.readyState == 'complete') {
          _gdeFooter.runStateFlag = 1;
          _gdeFooter.documentLoaded();
        };
      };
    };
    var oldOnload = window.onload;
    window.onload = function () {
      if (typeof oldOnload == 'function') {
        oldOnload();
      };
      setTimeout('if (!_gdeFooter.runStateFlag) _gdeFooter.documentLoaded()', 0);
    }
  };
  this.documentLoaded = function () {
    if (this.footerDisplayMode != 'cds') {
      this.loadComscoreData();
    };
    this.setFooterDisplayState();
    if (this.footerVisible != 'false') {
      this.showFooter();
    };
  };
};
_gdeFooter.buildFooter();
