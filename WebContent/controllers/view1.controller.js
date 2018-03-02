sap.ui.controller("bookmycric.player.controllers.view1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf views.view1
*/
	onInit: function() {
       var oModel = new sap.ui.model.json.JSONModel();
       oModel.loadData("model/data.json");
       this.getView().setModel(oModel);
       
      
	},

	
	onChange : function(oEvent){
		//debugger;
		
		var selectedPath = oEvent.getSource().getSelectedItem().getBindingContext().getPath();
		
		var oCell = this.getView().byId("idRow")
		oCell.bindElement(selectedPath+"/profile")
		
		
		
		var oSf = this.getView().byId("idSimpleForm");
		
		oSf.bindElement(selectedPath+"/profile/details");
		
		
       var oList = this.getView().byId("idList");
       oList.bindElement(selectedPath+"/profile/details/battingcareer")
		
       
       var oList1 = this.getView().byId("idList1");
       oList1.bindElement(selectedPath+"/profile/details/battingcareer/bowlingCareer")
		
		
		
		
		/*var oTable = this.getView().byId("idTable");
		oTable.bindElement(selectedPath+"/profile/details/battingcareer");
		
		
		var oTable1 = this.getView().byId("idTable1");
		oTable1.bindElement(selectedPath+"/profile/details/battingcareer/bowlingCareer");*/
		
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf views.view1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf views.view1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf views.view1
*/
//	onExit: function() {
//
//	}

});