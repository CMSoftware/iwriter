
require([
    "dojo/dom", "dojo/store/Memory","dijit/tree/ObjectStoreModel", "dijit/Tree"],
    function(dom, Memory, ObjectStoreModel, Tree){
      var Thesis = new Memory({
        data: [
          {id: 'thesis', name: '学位论文', type: 'thesis'},
          {id: 'cover', name: '封面', type: 'chapter', parent: 'thesis'},
          {id: 'cnAbstract', name: '中文摘要', type: 'chapter', parent: 'thesis'},
          {id: 'enAbstract', name: '英文摘要', type: 'chapter', parent: 'thesis'},
          {id: 'text', name: '正文', type: 'chapters', parent: 'thesis'},
          {id: 'chapter00', name: '绪论', type: 'chapter', parent: 'text'},
          {id: 'section0000', name: '研究背景', type: 'section', parent: 'chapter00'},
          {id: 'section0001', name: '国内外研究现状', type: 'section', parent: 'chapter00'},
          {id: 'chapter01', name: '基于XXXX的算法', type: 'chapter', parent: 'text'},
          {id: 'Reference', name: '参考文献', type: 'chapter', parent: 'thesis'},
          {id: 'acknowledge', name: '致谢', type: 'chapter', parent: 'thesis'},
          {id: 'Attachment', name: '论文附件', type: 'chapter', parent: 'thesis'}
        ],
        getChildren: function(object){
            return this.query({parent: object.id});
        }
    });

    // Create the model
    var myThesis = new ObjectStoreModel({
        store: Thesis,
        query: {id: 'thesis'}
    });

    // Create the Tree.
    var tree = new Tree({
        model: myThesis,
        showRoot: false,
        autoExpand: true
    });
    tree.placeAt(dom.byId("schema"));
    tree.startup();
});
