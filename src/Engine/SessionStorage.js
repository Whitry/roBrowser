/**
 * Engine/SessionStorage.js
 *
 * Session Storage
 * Manage session variables
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */

define(function()
{
	"use strict";

	return {

		AuthCode:  0,
		AID:       0,
		UserLevel: 0,
		Sex:       0,
		LangType:  0,

		Character: null,
		Entity:    null,

		AdminList:   [],

		intravision: false,
		moveTarget:  null
	};
});