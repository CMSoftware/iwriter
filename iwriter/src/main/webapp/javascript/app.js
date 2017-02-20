var ThesisProcessor = {
  New: function() {
    alert("New Thesis");
  },
  Save: function() {
    alert("Save Thesis");
  },
  Close: function() {
    alert("Close Thesis");
  },
  Open: function() {
    alert("Open Thesis");
  },
  Export: function() {
    alert("Export Thesis");
  }
}
var TextProcessor = {

}

var ThesisSchema = {
  "cnAbstract":[{"":"", "para":""}],
  "enAbstract":[{"":"", "para":""}],
  "Text":[
    {"Title":"绪论", "id":"00", "sections":[
      {"Title":"研究背景", "id":"01", "paragraphs":[]},
      {"Title":"国内外研究现状", "id":"02", "paragraphs":[]}
    ]},
    {}
  ],
  "acknowledge":[{"":"", "para":""}],
  "References":[],
  "Appendix":[],
  "Attachments":[]
}

require(["dojo/topic"], function(topic) {
    topic.subscribe("doTask", function(command) {
        switch (command) {
            case "Thesis.New":
                ThesisProcessor.New();
                break;
            case "Thesis.Save":
                ThesisProcessor.Save();
                break;
            case "Thesis.Open":
                ThesisProcessor.New();
                break;
            default:
                ThesisProcessor.New();
        }
    });
});
