((function(){ViewSurumNotlariDetayKayitPanel = Ext.extend(Ext.form.FormPanel, {
frame: false,
border: false,
collapsible: false,
autoScroll: true,
monitorValid: true,
padding: 3,

initComponent: function () {

this.surumNotuDetayId = new Ext.form.TextField({
name: 'surumNotuDetayId',
hidden: true
});

this.panelAcilmaZamani = new Ext.form.NumberField({
name: 'panelAcilmaZamani',
fieldLabel: 'panelAcilmaZamani'
});

this.cagriNumarasi = new Ext.form.DisplayField({
fieldLabel: 'Jira Adresi',
anchor: '95%'
});

this.jiraCagriAciklama = new Ext.form.TextArea({
fieldLabel: 'Çağrı Açıklama',
name: 'jiraCagriAciklama',
anchor: '95%',
height: '20%'
});

this.jiraSurumNotu = new Ext.form.TextArea({
fieldLabel: 'Sürüm Notu',
name: 'jiraSurumNotu',
anchor: '95%',
height: '25%'
});

this.cagriKontrolSonucu = new Ext.form.TextArea({
fieldLabel: 'Test Senaryoları',
name: 'cagriKontrolSonucu',
anchor: '95%',
height: '25%'
});

this.beklenenSonuc = new Ext.form.TextArea({
fieldLabel: 'Beklenen Sonuç',
name: 'beklenenSonuc',
anchor: '95%',
height: '25%'
});

this.items = [this.cagriNumarasi, this.jiraCagriAciklama, this.jiraSurumNotu, this.cagriKontrolSonucu, this.beklenenSonuc];

this.btnKaydet = new Ext.Button({
text: "Kaydet",
iconCls: "kaydet",
formBind: true
});

this.btnKapat = new Ext.Button({
text: "Kapat",
iconCls: "kapat",
formBind: true
});

this.btnDosyaEKle = new Ext.Button({
text: "EKlere Göz At",
iconCls: "dosyaKayit16",
formBind: true
});

this.btnOkudum = new Ext.Button({
text: "Okudum/Anladım",
iconCls: "uygulamalar",
formBind: true
});

this.buttons = [this.btnDosyaEKle, this.btnOkudum];
this.buttonAlign = "center";

ViewSurumNotlariDetayKayitPanel.superclass.initComponent.call(this);

}
});
Ext.reg('ViewSurumNotlariDetayKayitPanel', ViewSurumNotlariDetayKayitPanel);
ViewSubMainPanel = Ext.extend(Ext.Panel, {
frame : false,
border : false,
collapsible : false,
autoScroll : true,
monitorValid : true,
layout : 'vbox',
layoutConfig : {
align : 'stretch'
},

initComponent : function() {

this.items = [];

ViewSubMainPanel.superclass.initComponent.call(this);
}
});
Ext.reg('ViewSubMainPanel', ViewSubMainPanel);
ViewSurumTestSorgulamaGridPanel = Ext.extend(Ext.Panel, {
title: "Test Görevlendirme ve Sonuçları",
frame: false,
border: false,
collapsible: false,
autoScroll: false,
monitorValid: true,
layout: 'fit',

initComponent: function () {
this.btnTestSonucEkranAc = new Ext.Button({
text: "Test Sonucu",
iconCls: 'send32'
});

this.btnTestSonucDosyaEKle = new Ext.Button({
text: "Hata Ekleri",
iconCls: "dosyaKayit16"
});

var testRecords = [
"name:id",
"name:tarih; header:Görev Tarihi",
"name:tipi; header:Test Tipi;render:38443",
"name:kullanici; header:Görevli",
"name:testtarih; header:Test Tarihi",
"name:testkullanici; header:Test Eden",
"name:sonuc; render:38442; header:Sonuç",
"name:aciklama; header:Açıklama"
];

this.gridTest = createDynamicEditorGrid({
name: 'gridTest',
frame: false,
iconCls: 'iconCls',
url: '../rest/surumNotlariMerkezdenArama/getSurumTestListesi.ajax',
records: testRecords,
forceFit: true,
start: 0,
limit: 15,
filters: [],
autoLoadStore: false,
paging: true,
hasSelModel: false,
rowNumber: false,
groupButton: false,
groupCollapsed: true,
singleSelect: true,
getRowClass: function (record, rowIndex, rowParams, ds) {
if (rowIndex % 2) {
return 'base-red-row';
} else {
return 'base-green-row';
}
}, bbarLeft: [this.btnTestSonucDosyaEKle, this.btnTestSonucEkranAc]
});

this.items = [this.gridTest];

ViewSurumTestSorgulamaGridPanel.superclass.initComponent.call(this);
}
});
Ext.reg('ViewSurumTestSorgulamaGridPanel', ViewSurumTestSorgulamaGridPanel);
ViewSurumNotlariMerkezdenAramaGridPanel = Ext.extend(Ext.Panel, {
title: "Sürüm Notları",
frame: false,
border: false,
collapsible: false,
autoScroll: false,
monitorValid: true,
layout: 'fit',

initComponent: function () {

var kayitlarRecords = [
"name :id ;",
"name :versiyon; width:40; header:Versiyon; ",
"name :kapatilmaTarihi ; width:55; header:Kapatılma Tarihi;",
"name :modul ; width:70; header:Modül;",
"name :akwebNo ; width:30;header:Akweb;",
"name :kurum ; width:60;header:Kurum;",
"name :cagriBaslik ;",
"name :surumNotu ; width:300 ; header:Sürüm Notu;",
"name :testSonuc ;header:Test Senaryoları; ",
"name :beklenenSonuc;header:Beklenen Sonuç ; ",
"name :ekliDosyaSayisi; width:15  ;header:Ek;",
"name :okuyanKullanici; width:20; xtype: checkcolumn ;header:Okundu",
"name:free; header:;witdh:0"
];

this.btnUpdate = new Ext.Button({
text: "Jira' dan Güncelle",
iconCls: "refresh_blue"
});

this.btnFetch = new Ext.Button({
text: "Merkezden Güncelle",
iconCls: "refresh_blue"
});

this.btnSurumNotuOnayla = new Ext.Button({
text: "Onayla/Yayınla",
iconCls: "kaydet"
});

this.btnSurumNotuOnayKaldir = new Ext.Button({
text: "Onayla Kaldır",
iconCls: "cancel"
});

this.btnDetaylar = new Ext.Button({
text: "Detaylar",
iconCls: "detail"
});

this.btnDosyaEKle = new Ext.Button({
text: "Eklere Göz At",
iconCls: "dosyaKayit16",
formBind: true
});

this.btnOkudum = new Ext.Button({
text: "Okudum",
iconCls: "uygulamalar",
formBind: true
});


this.grid = createDynamicEditorGrid({
//title:'gridTitle', // title of the gird
name: 'grid', // name of the grid
frame: false,
iconCls: 'iconCls', // grid title icon css class
url: '../rest/surumNotlariMerkezdenArama/getSurumNotlariMerkezdenAramaBilgileri.ajax', // url to load the grid with the data
records: kayitlarRecords, // grid records object
forceFit: true, // enable the grid columns fit the width of the grid if false automatically cursors are enabled
start: 0, // pagination start
limit: 45, // pagination limit
filters: [], // custom filters setter
autoLoadStore: false,
paging: true, // enable the grid pagination
hasSelModel: true, // enable the selection model view of the grid
rowNumber: false, // set the list row number
groupButton: false, // if groupCollapsed sets true group button can be use
groupCollapsed: true, // collapsible list style
singleSelect: true,
getRowClass: function (record, rowIndex, rowParams, ds) {
if (rowIndex % 2) {
return 'base-red-row';
} else {
return 'base-green-row';
}
},
tbarLeft: [this.btnDetaylar, this.btnDosyaEKle]
});

this.items = [this.grid];

ViewSurumNotlariMerkezdenAramaGridPanel.superclass.initComponent.call(this);
}
});
Ext.reg('ViewSurumNotlariMerkezdenAramaGridPanel', ViewSurumNotlariMerkezdenAramaGridPanel);
var kullaniciCombo = Ext.extend(Ext.form.ComboBox, {
fieldLabel: 'Kullanıcılar',
selectOnFocus: true,
emptyText: language.UY019,
forceSelection: true,
autoScroll: true,
triggerAction: 'all',
enableKeyEvents: true,
minChars: 2,
mode: 'remote',
editable: true,
pageSize: 15,
allowBlank: false,
anchor : '99%',
listEmptyText: 'Kullanıcı bulunamadı',
initComponent: function () {
var config = {
mode: typeof(this.mode) == 'undefined' ? 'remote' : this.mode,
valueField: 'kullaniciId',
displayField: 'adiSoyadi',

store: typeof(this.store) == 'undefined' ? new Ext.data.JsonStore({
proxy: new Ext.data.HttpProxy({
url: '../rest/kullanicilar/getKurumdakiKullanicilar.ajax',
method: 'GET'
}),
restful: true,
autoLoad: typeof(this.autoLoadStore) == 'undefined' ? false : this.autoLoadStore,
fields: ['kullaniciId', 'adi', 'soyadi', 'adiSoyadi', 'kullaniciKod', 'userName'],
totalProperty: 'totalCount',
root: 'data'

}) : this.store

};

Ext.apply(this, config);
Ext.apply(this.initialConfig, config);
kullaniciCombo.superclass.initComponent.apply(this, arguments);
},
onRender: function () {
kullaniciCombo.superclass.onRender.apply(this, arguments);
}
});

ViewSurumNotlariTestGorevlendirmePanel = Ext.extend(Ext.form.FormPanel, {
frame: false,
border: false,
collapsible: false,
autoScroll: true,
monitorValid: true,
padding: 3,

initComponent: function () {

this.testTipi = new LookUpCombo({
name: 'testTipi',
fieldLabel: 'Test Tipi',
urlSuffix: 38443,
anchor : '99%',
allowBlank: false,
autoLoadStore: true
});

this.kullaniciCombo = new kullaniciCombo();

this.items = [this.testTipi, this.kullaniciCombo];


this.btnTestGorevlendirmeKayit = new Ext.Button({
text: "Kaydet",
iconCls: "kaydet",
formBind: true
});

this.buttons = [this.btnTestGorevlendirmeKayit];
this.buttonAlign = "center";

ViewSurumNotlariTestGorevlendirmePanel.superclass.initComponent.call(this);
}
});
Ext.reg('ViewSurumNotlariTestGorevlendirmePanel', ViewSurumNotlariTestGorevlendirmePanel);
ViewSurumNotlariTestSonucPanel = Ext.extend(Ext.form.FormPanel, {
frame: false,
border: false,
collapsible: false,
autoScroll: true,
monitorValid: true,
padding: 3,

initComponent: function () {
this.testSonucu = new LookUpCombo({
name: 'testSonucu',
fieldLabel: "Sonuç",
urlSuffix: 38442,
anchor: '95%',
value: 1,
autoLoadStore: true,
allowBlank : false
});

this.testAciklama = new Ext.form.TextArea({
name: 'testAciklama',
fieldLabel: "Açıklmaa",
anchor: '95%'
});

this.items = [this.testSonucu, this.testAciklama];

this.btnTestSonucKayit = new Ext.Button({
text: "Kaydet",
iconCls: "kaydet",
formBind: true
});

this.buttons = [this.btnTestSonucKayit];
this.buttonAlign = "center";

ViewSurumNotlariTestSonucPanel.superclass.initComponent.call(this);
}
});
Ext.reg('ViewSurumNotlariTestSonucPanel', ViewSurumNotlariTestSonucPanel);
ViewSurumNotlariMerkezdenAramaFormPanel = Ext.extend(Ext.form.FormPanel, {
//title: "",
frame: true,
border: false,
collapsible: false,
autoScroll: false,
monitorValid: true,

initComponent: function () {
var projeMenuCombo = new Object({
name: 'projeId',
anchor: '%100',
displayField: true,
mode: 'remote',
pageSize: 11,
fields: ['DSC', 'ID'],
valueField: 'ID',
displayField: 'DSC',
url: '../rest/surumNotlariMerkezdenArama/getProjeListesi.ajax',
method: 'GET',
listWidth: 225,
allowBlank: false,
autoLoadStore: true,
autoValue: true,
listEmptyText: 'Proje seçiniz...',
emptyText: 'Proje seçiniz'
});

this.projeMenuCombo = createDynamicCombo(projeMenuCombo);
this.projeMenuCombo.fieldLabel = "Projeler";
this.projeMenuCombo.hiddenName = "projeId";


var versiyonCombo = new Object({
name: 'surumAdi',
anchor: '%100',
displayField: true,
mode: 'remote',
pageSize: 5,
fields: ['DSC', 'ID'],
valueField: 'DSC',
displayField: 'DSC',
url: '../rest/surumNotlariMerkezdenArama/getSurumListesi.ajax',
method: 'GET',
listWidth: 225,
allowBlank: true,
listEmptyText: 'Sürüm seçiniz...',
emptyText: 'Sürüm seçiniz'
});

this.versiyonCombo = createDynamicCombo(versiyonCombo);
this.versiyonCombo.fieldLabel = "Sürüm";
this.versiyonCombo.hiddenName = "surumAdi";

var modullerCombo = new Object({
name: 'modulAdi',
anchor: '%100',
displayField: true,
mode: 'remote',
pageSize: 11,
fields: ['modul'],
valueField: 'modul',
displayField: 'modul',
url: '../rest/surumNotlariMerkezdenArama/getModulListesi.ajax',
method: 'GET',
listWidth: 225,
allowBlank: true,
listEmptyText: 'Modül seçiniz...',
emptyText: 'Modül seçiniz'
});

this.modullerCombo = createDynamicCombo(modullerCombo);
this.modullerCombo.fieldLabel = "Modül";
this.modullerCombo.hiddenName = "modulAdi";

var kurumlarCombo = new Object({
name: 'kurum',
anchor: '%100',
displayField: true,
mode: 'remote',
pageSize: 11,
fields: ['kurum'],
valueField: 'kurum',
displayField: 'kurum',
url: '../rest/surumNotlariMerkezdenArama/getKurumListesi.ajax',
method: 'GET',
listWidth: 225,
allowBlank: true,
listEmptyText: 'Kurum seçiniz...',
emptyText: 'Kurum seçiniz'
});

this.kurumlarCombo = createDynamicCombo(kurumlarCombo);
this.kurumlarCombo.fieldLabel = "Kurum";
this.kurumlarCombo.hiddenName = "kurum";

this.txtAkwebNo = new Ext.form.TextField({
name: 'akwebNo',
fieldLabel: 'Akweb No',
anchor: '100%'
});

this.ulkeId = new LookUpCombo({
urlSuffix: 38759,
autoLoadStore: true,
fieldLabel: 'Ülke',
hiddenName: 'ulkeId',
anchor: '100%'
});

this.tarihAramaBaslangic = new Ext.form.DateField({
hideLabel: true,
name: 'tarihAramaBaslangic',
format: 'd/m/Y',
width: 95,
labelSeparator: ' ',
//allowBlank: false,
//value: dateManuelFatura,
format: 'd/m/Y',
altFormats: 'd/m/Y'
});


this.tarihAramaBitis = new Ext.form.DateField({
hideLabel: true,
name: 'tarihAramaBitis',
format: 'd/m/Y',
width: 95,
labelSeparator: ' ',
//allowBlank: false,
//value: new Date(),
format: 'd/m/Y',
altFormats: 'd/m/Y'
});

this.compTarihAralikArama = new Ext.form.CompositeField({
fieldLabel: 'Tarih',
labelSeparator: ' ',
anchor: '100%',
items: [this.tarihAramaBaslangic, this.tarihAramaBitis]
});

this.surumNotuIcerik = new Ext.form.TextArea({
name: 'surumNotuIcerik',
fieldLabel: 'Sürüm Notunda Arama',
anchor: '100%'
});

this.cmbOkunmaDurumu = new LookUpCombo({
urlSuffix: 66750,
autoLoadStore: true,
fieldLabel: 'Durumu',
hiddenName: 'isOkundu',
anchor: '100%'
});

this.cmbCagriTipi = new LookUpCombo({
urlSuffix: 38640,
autoLoadStore: true,
fieldLabel: 'Çağrı Tipi',
hiddenName: 'cagriTipi',
anchor: '100%'
});

this.flsSetOkuma = new Ext.form.FieldSet({
title: 'Okuma Kriterleri',
anchor: '100%',
items: [this.cmbOkunmaDurumu, this.cmbCagriTipi]
});


this.items = [this.projeMenuCombo, this.versiyonCombo, this.compTarihAralikArama, this.kurumlarCombo, this.ulkeId, this.modullerCombo, this.txtAkwebNo, this.surumNotuIcerik, this.flsSetOkuma];

this.btnAra = new Ext.Button({
text: 'Ara',
iconCls: "search",
formBind: true
});

this.btnReset = new Ext.Button({
text: language.UY027,
iconCls: "refresh",
formBind: false
});

this.buttons = [this.btnAra, this.btnReset];
this.buttonAlign = "center";

ViewSurumNotlariMerkezdenAramaFormPanel.superclass.initComponent.call(this);
}
});
Ext.reg('ViewSurumNotlariMerkezdenAramaFormPanel', ViewSurumNotlariMerkezdenAramaFormPanel);
ViewSurumNotlariMerkezdenAramaMainPanel = Ext.extend(Ext.Panel, {
frame: false,
title: 'Okuma İşlemleri',
border: false,
collapsible: false,
autoScroll: true,
monitorValid: false,
layout: 'fit',
iconCls : 'addEkranKodu',

initComponent: function () {
this.items = [];

ViewSurumNotlariMerkezdenAramaMainPanel.superclass.initComponent.call(this);
}
});
Ext.reg('ViewSurumNotlariMerkezdenAramaMainPanel', ViewSurumNotlariMerkezdenAramaMainPanel);
function CntSurumNotlariDetayKayitPanel() {
this.controller = true;
this.scope = null;
this.view = new ViewSurumNotlariDetayKayitPanel();
this.popUpWindow = new ViewPopUpWindow();
};

CntSurumNotlariDetayKayitPanel.prototype = {
init: function () {
var scope = this.getScope();
this.setHandlers();
return this.getView();
},
setScope: function () {
this.scope = this;
},
getScope: function () {
if (this.scope != null) {
return this.scope;
} else {
this.setScope();
return this.scope;
}
},
getView: function () {
return this.view;
},
getPopUpWindow: function () {
var view = this.getView();

this.popUpWindow.width = 800;
this.popUpWindow.height = 640;
this.popUpWindow.title = "Sürüm Notları Detaylar";
this.popUpWindow.add(view);
return this.popUpWindow;
},
setHandlers: function () {
var view = this.getView();
}
};
function CntSubMainPanel() {
this.controller = true;
this.scope = null;
this.view = new ViewSubMainPanel();
};

CntSubMainPanel.prototype = {
init : function() {
var scope = this.getScope();
this.setHandlers();
return this.getView();
},
setScope : function() {
this.scope = this;
},
getScope : function() {
if (this.scope != null) {
return this.scope;
} else {
this.setScope();
return this.scope;
}
},
getView : function() {
return this.view;
},
setHandlers : function() {
var view = this.getView();
}
};
function CntSurumTestSorgulamaGridPanel() {
this.scope = null;
this.controller = true;
this.view = new ViewSurumTestSorgulamaGridPanel();
};

CntSurumTestSorgulamaGridPanel.prototype = {
init: function () {
this.setScope();
this.setHandlers();
this.setListeners();
this.setViewConfig();

return this;
},
setScope: function () {
this.scope = this;
},
setViewConfig: function () {
var view = this.getView();

},
getScope: function () {
if (this.scope == null)
this.setScope();

return this.scope;
},
getView: function () {
return this.view;
},
setHandlers: function () {

},
setListeners: function () {

}
};
function CntSurumNotlariMerkezdenAramaGridPanel() {
this.scope = null;
this.controller = true;
this.view = new ViewSurumNotlariMerkezdenAramaGridPanel();

}

CntSurumNotlariMerkezdenAramaGridPanel.prototype = {
init: function () {
this.setScope();
this.setHandlers();
this.setListeners();
this.setViewConfig();

return this;
},

setScope: function () {
this.scope = this;
},

setViewConfig: function () {
var view = this.getView();

},

getScope: function () {
if (this.scope == null)
this.setScope();

return this.scope;
},

getView: function () {
return this.view;
},

setHandlers: function () {

},

setListeners: function () {

}
};
function CntSurumNotlariTestGorevlendirmePanel() {
this.controller = true;
this.scope = null;
this.view = new ViewSurumNotlariTestGorevlendirmePanel();
this.popUpWindow = new ViewPopUpWindow();
};

CntSurumNotlariTestGorevlendirmePanel.prototype = {
init: function () {
var scope = this.getScope();
this.setHandlers();
return this.getView();
},
setScope: function () {
this.scope = this;
},
getScope: function () {
if (this.scope != null) {
return this.scope;
} else {
this.setScope();
return this.scope;
}
},
getView: function () {
return this.view;
},
getPopUpWindow: function () {
var view = this.getView();

this.popUpWindow.width = 500;
this.popUpWindow.height = 120;
this.popUpWindow.title = "Test Görevlendirme";
this.popUpWindow.add(view);
return this.popUpWindow;
},
setHandlers: function () {
var view = this.getView();
}
};
function CntSurumNotlariTestSonucPanel() {
this.controller = true;
this.scope = null;
this.view = new ViewSurumNotlariTestSonucPanel();
this.popUpWindow = new ViewPopUpWindow();
};

CntSurumNotlariTestSonucPanel.prototype = {
init: function () {
var scope = this.getScope();
this.setHandlers();
return this.getView();
},
setScope: function () {
this.scope = this;
},
getScope: function () {
if (this.scope != null) {
return this.scope;
} else {
this.setScope();
return this.scope;
}
},
getView: function () {
return this.view;
},
getPopUpWindow: function () {
var view = this.getView();

this.popUpWindow.width = 500;
this.popUpWindow.height = 160;
this.popUpWindow.title = "Test Sonuç Girişi";
this.popUpWindow.add(view);
return this.popUpWindow;
},
setHandlers: function () {
var view = this.getView();
}
};
function CntSurumNotlariMerkezdenAramaFormPanel() {
this.scope = null;
this.controller = true;
this.view = new ViewSurumNotlariMerkezdenAramaFormPanel();

}

CntSurumNotlariMerkezdenAramaFormPanel.prototype = {
init: function () {
this.setScope();
this.setHandlers();
this.setListeners();
this.setViewConfig();

return this;
},

setScope: function () {
this.scope = this;
},

setViewConfig: function () {
var view = this.getView();

},

getScope: function () {
if (this.scope == null)
this.setScope();

return this.scope;
},

getView: function () {
return this.view;
},

setHandlers: function () {

},

setListeners: function () {

}
};
function CntSurumNotlariMerkezdenAramaMainPanel() {
this.menuId = 20135057;
this.scope = null;
this.controller = true;
this.view = new ViewSurumNotlariMerkezdenAramaMainPanel();
this.cntSubMainPanel = new CntSubMainPanel();
this.cntSurumNotlariMerkezdenAramaGridPanel = new CntSurumNotlariMerkezdenAramaGridPanel().init();
this.cntSurumNotlariMerkezdenAramaFormPanel = new CntSurumNotlariMerkezdenAramaFormPanel().init();
this.cntSurumTestSorgulamaGridPanel = new CntSurumTestSorgulamaGridPanel().init();
this.cntSurumNotlariDetayKayitPanel = new CntSurumNotlariDetayKayitPanel();
this.cntSurumNotlariTestGorevlendirmePanel = new CntSurumNotlariTestGorevlendirmePanel();
this.cntSurumNotlariTestSonucPanel = new CntSurumNotlariTestSonucPanel();
};

CntSurumNotlariMerkezdenAramaMainPanel.prototype = {
init: function () {
this.setScope();
this.cntSubMainPanel.init();
this.setHandlers();
this.setListeners();
this.setViewConfig();
return this.getView();
},
getViewSurumNotlariMerkezdenAramaGridPanel: function () {
return this.cntSurumNotlariMerkezdenAramaGridPanel.getView();
},
getViewSurumNotlariDetayKayitPanel: function () {
return this.cntSurumNotlariDetayKayitPanel.getView();
},
getWindowsKayit: function () {
return this.cntSurumNotlariDetayKayitPanel.getPopUpWindow();
},
getWindowsTestGorevlendirmeKayit: function () {
return this.cntSurumNotlariTestGorevlendirmePanel.getPopUpWindow();
},
getWindowsTestSonucKayit: function () {
return this.cntSurumNotlariTestSonucPanel.getPopUpWindow();
},
getviewSurumNotlariMerkezdenAramaFormPanel: function () {
return this.cntSurumNotlariMerkezdenAramaFormPanel.getView();
},
getViewSurumTestSorgulamaGridPanel: function () {
return this.cntSurumTestSorgulamaGridPanel.getView();
},
getViewSurumNotlariTestGorevlendirmePanel: function () {
return this.cntSurumNotlariTestGorevlendirmePanel.getView();
},
getViewSurumNotlariTestSonucPanel: function () {
return this.cntSurumNotlariTestSonucPanel.getView();
},
getViewSubMainPanel: function () {
return this.cntSubMainPanel.getView();
},
setScope: function () {
this.scope = this;
},

setViewConfig: function () {
var view = this.getView();
var viewSurumNotlariMerkezdenAramaFormPanel = this.getviewSurumNotlariMerkezdenAramaFormPanel();
var subMainPanel = this.getViewSubMainPanel();
var viewSurumNotlariMerkezdenAramaGridPanel = this.getViewSurumNotlariMerkezdenAramaGridPanel();
var viewSurumTestSorgulamaGridPanel = this.getViewSurumTestSorgulamaGridPanel();

subMainPanel.add({
flex: 1,
layout: 'fit',
items: [viewSurumNotlariMerkezdenAramaGridPanel]
});

view.add({
layout: "border",
flex: .8,
items: [
{
region: "west",
title: "Arama Ekranı",
width: 340,
height: 500,
maxSize: 340,
minSize: 340,
layout: "fit",
frame: true,
split: true,
collapsible: true,
collapsed: false,
autoScroll: true,
plugins: [Ext.ux.PanelCollapsedTitle],
items: [viewSurumNotlariMerkezdenAramaFormPanel]
},
{
region: "center",
layout: "fit",
items: [subMainPanel]
},
]
});
},
getScope: function () {
if (this.scope == null)
this.setScope();
return this.scope;
},
getView: function () {
return this.view;
},
setHandlers: function () {
var view = this.getView();
var viewSurumNotlariMerkezdenAramaFormPanel = this.getviewSurumNotlariMerkezdenAramaFormPanel();
var viewSurumNotlariMerkezdenAramaGridPanel = this.getViewSurumNotlariMerkezdenAramaGridPanel();
var viewSurumNotlariDetayKayitPanel = this.getViewSurumNotlariDetayKayitPanel();
var viewSurumTestSorgulamaGridPanel = this.getViewSurumTestSorgulamaGridPanel();
var windowsKayit = this.getWindowsKayit();
var viewSurumNotlariTestGorevlendirmePanel = this.getViewSurumNotlariTestGorevlendirmePanel();
var windowsTestKayit = this.getWindowsTestGorevlendirmeKayit();
var viewSurumNotlariTestSonucPanel = this.getViewSurumNotlariTestSonucPanel();
var windowsTestSonucKayit = this.getWindowsTestSonucKayit();

viewSurumNotlariMerkezdenAramaGridPanel.btnDetaylar.handler = function () {

if (!viewSurumNotlariMerkezdenAramaGridPanel.grid.hasSelected()) {
showWarningMsg("Lütfen detaylarını incelemek istediğiniz kaydı seçiniz!");
return;
}

var surumNotuDetay = viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelectedData();
viewSurumNotlariDetayKayitPanel.getForm().reset();
viewSurumNotlariDetayKayitPanel.surumNotuDetayId.setValue(surumNotuDetay.id);
viewSurumNotlariDetayKayitPanel.cagriNumarasi.setValue(surumNotuDetay.cagriJiraAdresi);
viewSurumNotlariDetayKayitPanel.jiraCagriAciklama.setValue(surumNotuDetay.jiraAciklama);
viewSurumNotlariDetayKayitPanel.jiraSurumNotu.setValue(surumNotuDetay.surumNotu);
viewSurumNotlariDetayKayitPanel.cagriKontrolSonucu.setValue(surumNotuDetay.testSonuc);
viewSurumNotlariDetayKayitPanel.beklenenSonuc.setValue(surumNotuDetay.beklenenSonuc);
viewSurumNotlariDetayKayitPanel.panelAcilmaZamani.setValue(new Date().getTime());
windowsKayit.show();
};

viewSurumTestSorgulamaGridPanel.btnTestSonucEkranAc.handler = function () {
if (!viewSurumTestSorgulamaGridPanel.gridTest.getSelectionModel().hasSelection()) {
showWarningMsg("Lütfen önce kaydı seçiniz!");
return;
}

viewSurumNotlariTestSonucPanel.getForm().reset();
windowsTestSonucKayit.show();
};

viewSurumTestSorgulamaGridPanel.btnTestSonucDosyaEKle.handler = function () {

if (!viewSurumTestSorgulamaGridPanel.gridTest.hasSelected()) {
showWarningMsg("Lütfen eklerini incelmek istediğiniz test kaydını seçiniz!");
return;
}

this.cntGenericFileUploadWin = new GenericFileUploaderClass({
title: 'Dosya Ekler',
uploadUrl: '../rest/surumNotlariDosyalar/uploadSurumNotlariDosyalar.ajax',
downloadUrl: '../rest/surumNotlariDosyalar/downloadSurumNotlariDosyalar.ajax',
deleteUrl: '../rest/surumNotlariDosyalar/removeSurumNotlariDosyalar.ajax',
listUrl: '../rest/surumNotlariDosyalar/getSurumNotlariDosyalar.ajax',
isEditable: true
});

var testId = viewSurumTestSorgulamaGridPanel.gridTest.getSelectedData().id;

var viewGenericFileUploadWin = this.cntGenericFileUploadWin.init();

viewGenericFileUploadWin.viewUploadedFilesGrid.addListener('rowclick', function () {
viewGenericFileUploadWin.viewUploadFieldFormPanel.btnDownload.enable();
viewGenericFileUploadWin.viewUploadFieldFormPanel.btnRemove.enable();
});

viewGenericFileUploadWin.viewUploadFieldFormPanel.btnUpload
.tooltip = "Bu özellik sorgulama ekranında <b>kullanılamaz!</b>";

viewGenericFileUploadWin.viewUploadFieldFormPanel.btnRemove
.tooltip = "Bu özellik sorgulama ekranında <b>kullanılamaz!</b>";

viewGenericFileUploadWin.listParams = {
surumNotuDetayId: testId,
tipi: 2
};

viewGenericFileUploadWin.uploadParams = {
surumNotuDetayId: testId,
tipi: 2
};

viewGenericFileUploadWin.show();

};

viewSurumNotlariTestGorevlendirmePanel.btnTestGorevlendirmeKayit.handler = function () {
var ids = new Array();

var selectData = viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelectionModel().getSelections();
for (var i = 0; i < selectData.length; i++) {
ids.push(selectData[i].id);
}

Ext.Ajax.request({
url: "../rest/surumNotlariMerkezdenArama/saveOrUpdateSurumTestGorevlendirme.ajax",
params: {
testTipi: viewSurumNotlariTestGorevlendirmePanel.testTipi.getValue(),
kullaniciId: viewSurumNotlariTestGorevlendirmePanel.kullaniciCombo.getValue(),
ids: ids.toString()
},
success: function (response, options) {
var jsonData = Ext.util.JSON.decode(response.responseText.trim());
if (jsonData.success) {
viewSurumTestSorgulamaGridPanel.gridTest.getStore().load();
windowsTestKayit.hide();
showSuccessMsg();
} else if (!jsonData.success && jsonData.message != "") {
showErrorMsg(jsonData.message);
}
},
failure: function (response, options) {
showErrorMsg();
}
});
};

viewSurumNotlariTestSonucPanel.btnTestSonucKayit.handler = function () {
Ext.Ajax.request({
url: "../rest/surumNotlariMerkezdenArama/saveOrUpdateSurumTestBilgileri.ajax",
params: {
id: viewSurumTestSorgulamaGridPanel.gridTest.getSelectedData().id,
testSonucu: viewSurumNotlariTestSonucPanel.testSonucu.getValue(),
testAciklama: viewSurumNotlariTestSonucPanel.testAciklama.getValue()
},
success: function (response, options) {
var jsonData = Ext.util.JSON.decode(response.responseText.trim());
if (jsonData.success) {
viewSurumTestSorgulamaGridPanel.gridTest.getStore().load();
showSuccessMsg();
windowsTestSonucKayit.hide();
} else if (!jsonData.success && jsonData.message != "") {
showSuccessMsg();
}
},
failure: function (response, options) {
showErrorMsg();
}
});
};

viewSurumNotlariMerkezdenAramaGridPanel.btnSurumNotuOnayla.handler = function () {

if ((!viewSurumNotlariMerkezdenAramaGridPanel.grid.hasSelected())
(viewSurumNotlariMerkezdenAramaFormPanel.versiyonCombo.getValue() === null ||
viewSurumNotlariMerkezdenAramaFormPanel.versiyonCombo.getValue() === "")) {
showWarningMsg("Lütfen onaylamak istediğiniz sürümü  veya sürüm notunu seçiniz!");
return;
}

var surumNotuDetayId;

if (viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelections().length === 1) {
surumNotuDetayId = viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelectedData().id;
} else if (viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelections().length > 1) {
showWarningMsg("Sürüm notu seçerek onaylamak isityorsanız lütfen tek bir kayıt seçiniz!");
return;
}

Ext.Ajax.request({
url: "../rest/surumNotlariMerkezdenArama/approveSurumNotuDetaylar.ajax",
params: {
surumAdi: viewSurumNotlariMerkezdenAramaFormPanel.versiyonCombo.getValue(),
surumNotuDetayId: surumNotuDetayId
},
success: function (response, options) {
var jsonData = Ext.util.JSON.decode(response.responseText.trim());
if (jsonData.success) {
viewSurumNotlariMerkezdenAramaGridPanel.grid.getStore().load();
showSuccessMsg("Kayıt güncellendi.");
} else if (!jsonData.success && jsonData.message != "") {
showErrorMsg(jsonData.message);
}
},
failure: function (response, options) {
showErrorMsg();
}
});

};

viewSurumNotlariMerkezdenAramaGridPanel.btnSurumNotuOnayKaldir.handler = function () {

if ((!viewSurumNotlariMerkezdenAramaGridPanel.grid.hasSelected()) &&
(viewSurumNotlariMerkezdenAramaFormPanel.versiyonCombo.getValue() === null ||
viewSurumNotlariMerkezdenAramaFormPanel.versiyonCombo.getValue() === "")) {
showWarningMsg("Lütfen onayını kaldırmak istediğiniz sürümü  veya sürüm notunu seçiniz!");
return;
}

var surumNotuDetayId;

if (viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelections().length === 1) {
surumNotuDetayId = viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelectedData().id;
} else if (viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelections().length > 1) {
showWarningMsg("Sürüm notu seçerek onay kaldırmak isityorsanız lütfen tek bir kayıt seçiniz!");
return;
}

Ext.Ajax.request({
url: "../rest/surumNotlariMerkezdenArama/disapproveSurumNotuDetaylar.ajax",
params: {
surumAdi: viewSurumNotlariMerkezdenAramaFormPanel.versiyonCombo.getValue(),
surumNotuDetayId: surumNotuDetayId
},
success: function (response, options) {
var jsonData = Ext.util.JSON.decode(response.responseText.trim());
if (jsonData.success) {
viewSurumNotlariMerkezdenAramaGridPanel.grid.getStore().load();
showSuccessMsg("Kayıt güncellendi.");
} else if (!jsonData.success && jsonData.message != "") {
showErrorMsg(jsonData.message);
}
},
failure: function (response, options) {
showErrorMsg();
}
});

};

viewSurumNotlariDetayKayitPanel.btnOkudum.handler = function () {

if (!viewSurumNotlariMerkezdenAramaGridPanel.grid.hasSelected()) {
showWarningMsg("Lütfen okuduğunuz sürüm notunu seçiniz!");
return;
}

if (viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelectedData().okuyanKullanici == null) {
var kelimeSayisi = (((viewSurumNotlariDetayKayitPanel.jiraSurumNotu.getValue()).split(" ")).length);
//Ortalama bir insanın dakikada 200-250 kelime okuyabildiği istatistiği baz alınarak
//alt limite göre ortalama bir okuma süresi hesaplanmıştır
var onGorulenOkumaSuresi = (kelimeSayisi / 200) * 60;

var panelAcikKalmaSuresi =
((new Date().getTime()) - viewSurumNotlariDetayKayitPanel.panelAcilmaZamani.getValue()) / 1000;

if (onGorulenOkumaSuresi > panelAcikKalmaSuresi) {
showWarningMsg("Kelime sayısı :" + kelimeSayisi + ", Okuma Süresi:"
+ panelAcikKalmaSuresi.toFixed(2) + "sn, Beklenen min. Süre : "
+ onGorulenOkumaSuresi.toFixed(2) + "sn");

return;
}
}

var surumNotuDetayId;

if (viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelections().length === 1) {
surumNotuDetayId = viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelectedData().id;
} else if (viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelections().length > 1) {
showWarningMsg("Sürüm notunu okuduğunuz bgilisini paylaşmak isityorsanız lütfen tek bir kayıt seçiniz!");
return;
}

Ext.Ajax.request({
url: "../rest/surumNotlariMerkezdenArama/readSurumNotuDetaylar.ajax",
params: {
surumNotuDetayId: surumNotuDetayId
},
success: function (response, options) {
var jsonData = Ext.util.JSON.decode(response.responseText.trim());
if (jsonData.success) {
viewSurumNotlariMerkezdenAramaGridPanel.grid.getStore().load();
showSuccessMsg("Kayıt güncellendi.");
} else if (!jsonData.success && jsonData.message != "") {
showErrorMsg(jsonData.message);
}
},
failure: function (response, options) {
showErrorMsg();
}
});

};

viewSurumNotlariDetayKayitPanel.btnKaydet.handler = function () {

Ext.Ajax.request({
url: "../rest/surumNotlariMerkezdenArama/updateSurumNotuDetay.ajax",
params: {
surumNotuDetayId: viewSurumNotlariDetayKayitPanel.surumNotuDetayId.getValue(),
jiraAciklama: viewSurumNotlariDetayKayitPanel.jiraCagriAciklama.getValue(),
surumNotu: viewSurumNotlariDetayKayitPanel.jiraSurumNotu.getValue(),
testSonuc: viewSurumNotlariDetayKayitPanel.cagriKontrolSonucu.getValue()
},
success: function (response, options) {
var jsonData = Ext.util.JSON.decode(response.responseText.trim());
if (jsonData.success) {
viewSurumNotlariMerkezdenAramaGridPanel.grid.getStore().load();
windowsKayit.hide();
viewSurumNotlariDetayKayitPanel.getForm().reset();
showSuccessMsg("Kayıt güncellendi.");
} else if (!jsonData.success && jsonData.message != "") {
showErrorMsg(jsonData.message);
}
},
failure: function (response, options) {
showErrorMsg();
}
});

};

viewSurumNotlariMerkezdenAramaGridPanel.btnDosyaEKle.handler = function () {

if (!viewSurumNotlariMerkezdenAramaGridPanel.grid.hasSelected()) {
showWarningMsg("Lütfen eklerini incelmek istediğiniz sürüm notunu seçiniz!");
return;
}

var surumNotuDetayId;

if (viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelections().length === 1) {
surumNotuDetayId = viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelectedData().id;
} else if (viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelections().length > 1) {
showWarningMsg("Sürüm notu seçerek onay kaldırmak isityorsanız lütfen tek bir kayıt seçiniz!");
return;
}

this.cntGenericFileUploadWin = new GenericFileUploaderClass({
title: 'Dosya Ekler',
uploadUrl: '../rest/surumNotlariDosyalar/uploadSurumNotlariDosyalar.ajax',
downloadUrl: '../rest/surumNotlariDosyalar/downloadSurumNotlariDosyalar.ajax',
deleteUrl: '../rest/surumNotlariDosyalar/removeSurumNotlariDosyalar.ajax',
listUrl: '../rest/surumNotlariDosyalar/getSurumNotlariDosyalar.ajax',
isEditable: true
});


var viewGenericFileUploadWin = this.cntGenericFileUploadWin.init();

viewGenericFileUploadWin.viewUploadFieldFormPanel.btnUpload.disable();
viewGenericFileUploadWin.viewUploadFieldFormPanel.btnRemove.disable();

viewGenericFileUploadWin.viewUploadedFilesGrid.addListener('rowclick', function () {
viewGenericFileUploadWin.viewUploadFieldFormPanel.btnDownload.enable();
viewGenericFileUploadWin.viewUploadFieldFormPanel.btnRemove.disable();
});


viewGenericFileUploadWin.viewUploadFieldFormPanel.btnUpload
.tooltip = "Bu özellik sorgulama ekranında <b>kullanılamaz!</b>";

viewGenericFileUploadWin.viewUploadFieldFormPanel.btnRemove
.tooltip = "Bu özellik sorgulama ekranında <b>kullanılamaz!</b>";

viewGenericFileUploadWin.listParams = {
surumNotuDetayId: surumNotuDetayId
};

viewGenericFileUploadWin.uploadParams = {
surumNotuDetayId: surumNotuDetayId
};

viewGenericFileUploadWin.show();

};

viewSurumNotlariDetayKayitPanel.btnDosyaEKle.handler = function () {


this.cntGenericFileUploadWin = new GenericFileUploaderClass({
title: 'Dosya Ekler',
uploadUrl: '../rest/surumNotlariDosyalar/uploadSurumNotlariDosyalar.ajax',
downloadUrl: '../rest/surumNotlariDosyalar/downloadSurumNotlariDosyalar.ajax',
deleteUrl: '../rest/surumNotlariDosyalar/removeSurumNotlariDosyalar.ajax',
listUrl: '../rest/surumNotlariDosyalar/getSurumNotlariDosyalar.ajax',
isEditable: true
});


var viewGenericFileUploadWin = this.cntGenericFileUploadWin.init();

viewGenericFileUploadWin.viewUploadFieldFormPanel.btnUpload.disable();
viewGenericFileUploadWin.viewUploadFieldFormPanel.btnRemove.disable();

viewGenericFileUploadWin.viewUploadedFilesGrid.addListener('rowclick', function () {
viewGenericFileUploadWin.viewUploadFieldFormPanel.btnDownload.enable();
viewGenericFileUploadWin.viewUploadFieldFormPanel.btnRemove.disable();
});


viewGenericFileUploadWin.viewUploadFieldFormPanel.btnUpload
.tooltip = "Bu özellik sorgulama ekranında <b>kullanılamaz!</b>";

viewGenericFileUploadWin.viewUploadFieldFormPanel.btnRemove
.tooltip = "Bu özellik sorgulama ekranında <b>kullanılamaz!</b>";

viewGenericFileUploadWin.listParams = {
surumNotuDetayId: viewSurumNotlariDetayKayitPanel.surumNotuDetayId.getValue()
};

viewGenericFileUploadWin.uploadParams = {
surumNotuDetayId: viewSurumNotlariDetayKayitPanel.surumNotuDetayId.getValue()
};

viewGenericFileUploadWin.show();

};


viewSurumNotlariMerkezdenAramaFormPanel.btnReset.handler = function () {
viewSurumNotlariMerkezdenAramaFormPanel.getForm().reset();
};

viewSurumNotlariMerkezdenAramaFormPanel.btnAra.handler = function () {
viewSurumNotlariMerkezdenAramaGridPanel.grid.getStore().load();
};
},
setListeners: function () {
var view = this.getView();
var viewSurumNotlariMerkezdenAramaFormPanel = this.getviewSurumNotlariMerkezdenAramaFormPanel();
var viewSurumNotlariMerkezdenAramaGridPanel = this.getViewSurumNotlariMerkezdenAramaGridPanel();
var viewSurumNotlariDetayKayitPanel = this.getViewSurumNotlariDetayKayitPanel();
var viewSurumTestSorgulamaGridPanel = this.getViewSurumTestSorgulamaGridPanel();
var windowsKayit = this.getWindowsKayit();

viewSurumNotlariMerkezdenAramaFormPanel.projeMenuCombo.on('change', function (field, newVal, oldVal) {
viewSurumNotlariMerkezdenAramaFormPanel.versiyonCombo.getStore().load();
});

viewSurumNotlariMerkezdenAramaFormPanel.versiyonCombo.getStore().addListener('beforeload', function (store, options) {
options.params.projeId = viewSurumNotlariMerkezdenAramaFormPanel.projeMenuCombo.getValue();
});

viewSurumNotlariMerkezdenAramaGridPanel.grid.getStore().addListener('beforeload', function (store, options) {
options.params.data = Ext.encode(viewSurumNotlariMerkezdenAramaFormPanel.getForm().getValues());
options.params.sadeceYayinlanmisKayitlar = true;
options.params.sahadanSorgulama = true;
});

viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelectionModel().addListener('rowselect', function (selModel, rowIndex, rec) {
viewSurumTestSorgulamaGridPanel.gridTest.getStore().load();
});

viewSurumTestSorgulamaGridPanel.gridTest.getStore().addListener('beforeload', function (store, options) {
options.params.id = viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelectedData().id;
});


viewSurumTestSorgulamaGridPanel.gridTest.getSelectionModel().addListener('rowselect', function (selModel, rowIndex, rec) {
var aciklama = viewSurumTestSorgulamaGridPanel.gridTest.getSelectionModel().getSelected().data.aciklama;
if (aciklama != null && aciklama.length > 20) {
Ext.Msg.alert("Açıklama", aciklama);
}
});

viewSurumNotlariMerkezdenAramaFormPanel.modullerCombo.getStore().addListener('beforeload', function (store, options) {
options.params.data = Ext.encode(viewSurumNotlariMerkezdenAramaFormPanel.getForm().getValues());
});

viewSurumNotlariMerkezdenAramaGridPanel.grid.addListener('rowdblclick', function (selModel, rowIndex, rec) {

var surumNotuDetay = viewSurumNotlariMerkezdenAramaGridPanel.grid.getSelectedData();
viewSurumNotlariDetayKayitPanel.getForm().reset();
viewSurumNotlariDetayKayitPanel.surumNotuDetayId.setValue(surumNotuDetay.id);
viewSurumNotlariDetayKayitPanel.cagriNumarasi.setValue(surumNotuDetay.cagriJiraAdresi);
viewSurumNotlariDetayKayitPanel.jiraCagriAciklama.setValue(surumNotuDetay.jiraAciklama);
viewSurumNotlariDetayKayitPanel.jiraSurumNotu.setValue(surumNotuDetay.surumNotu);
viewSurumNotlariDetayKayitPanel.cagriKontrolSonucu.setValue(surumNotuDetay.testSonuc);
viewSurumNotlariDetayKayitPanel.beklenenSonuc.setValue(surumNotuDetay.beklenenSonuc);
viewSurumNotlariDetayKayitPanel.panelAcilmaZamani.setValue(new Date().getTime());
windowsKayit.show();
});
}
};
return new CntSurumNotlariMerkezdenAramaMainPanel().init();
})());