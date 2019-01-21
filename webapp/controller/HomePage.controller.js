sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/Popover',
	'sap/m/Button'

], function (Controller, Popover, Button) {
	"use strict";

	return Controller.extend("trainingBaseProject.controller.HomePage", {
		onregister: function () {
			this.getOwnerComponent().getRouter().navTo("root2");
			this.getView().byId("idreg").setVisible(true);

		},
	
		onLoginBtn: function () {

			this.getOwnerComponent().getRouter().navTo("root3");

		},
		onForgetPassword: function () {
			this.getOwnerComponent().getRouter().navTo("LoginPage");
		},

		onStakeholders: function (event) {
			alert("cal")
			var that = this;
			var popover = new Popover({
				showHeader: false,
				contentWidth: "150px",
				// contentHeight: "450px",
				placement: sap.m.PlacementType.Bottom,

				content: [
					new Button({
						text: " APMC's  ",
						press: function (oEvent) {

							that.getView().byId("idLoginPage").setVisible(true);

							popover.close();

						},

						type: sap.m.ButtonType.Transparent

					}),
					new Button({
						text: " Farmers ",
						press: function (oEvent) {

							that.getView().byId("idflexCreateNew").setVisible(true);

							popover.close();

						},

						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: " Traders ",
						press: function (oEvent) {

							that.getView().byId("idflexCreateNew").setVisible(true);

							popover.close();

						},

						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: " FPO ",

						press: function (oEvent) {

							that.getView().byId("idflexCreateNew").setVisible(true);

							popover.close();

						},

						type: sap.m.ButtonType.Transparent
					})

				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		}

	});
});