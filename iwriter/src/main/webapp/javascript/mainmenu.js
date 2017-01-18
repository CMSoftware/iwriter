
var tlProcessor = {
  id: "tbProcessor",
  dom: NULL,
  OnButtonClick: function(evt) {
    alert(this.innerHTML);
  },
  ShowMenu: function() {
    dom.byId("startMenu").style.visibility = "visible";
  },
  HideMenu: function() {

  },
  OnMenuItemClick: function(evt) {
    var curItem = evt.target.parentNode;
    if(! dojo.hasClass(curItem, "dijitPopupMenuItem")) {
      dom.byId("startMenu").style.visibility = "hidden";
    }
  }
}
