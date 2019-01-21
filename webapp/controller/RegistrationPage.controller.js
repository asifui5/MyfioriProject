sap.ui.define([
	"sap/ui/core/mvc/Controller"

], function (Controller) {
	"use strict";

	return Controller.extend("trainingBaseProject.controller.RegistrationPage", {
		onregister: function(){
			this.getOwnerComponent().getRouter().navTo("root2");
		},
		onlogin: function(){
		    this.getOwnerComponent().getRouter().navTo("root3");
			// this.getView().byId("idLoginPage").setVisible(true);
			// this.getView().byId("idMainPage").setVisible(false);
		} ,
		onNavBack: function(){
		
			this.getOwnerComponent().getRouter().navTo("LoginPage");
				this.getView().byId("idLoginPage").setVisible(false);
					this.getView().byId("idMainPage").setVisible(true);
						this.getView().byId("idreg").setVisible(true);
		}

	});
});