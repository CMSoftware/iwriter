require([
  "dijit/Menu",
  "dijit/MenuItem", "dijit/CheckedMenuItem", "dijit/MenuSeparator",
  "dijit/PopupMenuItem",
  "dojo/dom", "dojo/query", "dojo/topic"],
  function(Menu, MenuItem, CheckedMenuItem, MenuSeparator, PopupMenuItem, dom) {
  var pMenu;
  pMenu = new Menu({
    visibility: false
  });
  pMenu.addChild(new MenuItem({
    label: "新建",
    iconClass: "dijitEditorIcon dijitEditorIconNew"
  }));
  pMenu.addChild(new MenuItem({
    label: "打开",
    iconClass: "dijitEditorIcon dijitEditorIconOpen"
  }));
  pMenu.addChild(new MenuItem({
    label: "保存",
    iconClass: "dijitEditorIcon dijitEditorIconNew"
  }));
  pMenu.addChild(new MenuSeparator());
  pMenu.addChild(new MenuItem({
    label: "导出",
    iconClass: "dijitEditorIcon dijitEditorIconNew"
  }));

  var pSubMenu = new Menu();
  pMenu.addChild(new PopupMenuItem({
    label: "HHH",
    popup: pSubMenu
  }));
  //pMenu.placeAt(dom.byId("startMenu"));
  //pMenu.startup();
});

require(["dojo/topic", "dojo/dom-class", "dojo/_base/window",
    "dojo/on", "dojo/dom", "dojo/query", "dojo/ready",
    "dijit/registry"], function(topic, domClass, win, on, dom, query, ready, registry) {
  var tlProcessor = {
    id : "tbProcessor",
    OnButtonClick : function(evt) {
      topic.publish("doTask", this.children[0].children[0].getAttribute('id'));
    },
    ShowMenu : function() {
      dom.byId("startMenu").style.visibility = "visible";
    },
    HiddenMenu : function(evt) {
      var idstr = evt.target.getAttribute('id');
      if((idstr !== "MainMenu") && (idstr !== "startMenu")) {
        dom.byId("startMenu").style.visibility = "hidden";
      }
    },
    OnMenuItemClick : function(evt) {
      var curItem = evt.target.parentNode;
      if (!domClass.contains(curItem, "dijitPopupMenuItem")) {
        tlProcessor.HiddenMenu(evt);
        topic.publish("doTask", curItem.id);
      }
    }
  }

  ready(function() {
    query(".dijitMenuItem").on("click", tlProcessor.OnMenuItemClick);
    on(dom.byId("toolbar1"), ".dijitButton:click",
        tlProcessor.OnButtonClick);
    on(dom.byId("MainMenu"), "click", tlProcessor.ShowMenu);
    on(win.body(), "click", tlProcessor.HiddenMenu);
  });
});
