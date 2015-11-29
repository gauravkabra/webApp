/* Global Variables */
session = {};

session.server = "http://192.168.1.169:8080/api/";

/* Common Functions */

Storage.prototype.setObject = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj))
};

Storage.prototype.getObject = function(key) {
	return JSON.parse(this.getItem(key))
};

function toast(message) {

	if (typeof java !== "undefined") {
		java.toast(message);
	} else
		alert(message);
}

var txtLen = 0, txtVal = 0;
function checkInput(inpBX, inpLen) {
	txtLen = $("#" + inpBX).val().length;
	if (txtLen >= 1) {
		$("#submit-btn").removeClass("disable");
		$("#submit-btn").addClass("enable");
		$("#submit-btn").removeAttr("disabled");
		$("#errorSaleAmount").addClass("hide");
	} else {
		$("#submit-btn").addClass("disable");
		$("#submit-btn").removeClass("enable");
		$("#submit-btn").attr('disabled', 'disabled');
	}
	if (txtLen <= inpLen) {
		return true;
	} else {
		txtVal = $("#" + inpBX).val();
		txtVal = txtVal.substring(0, txtVal.length - 1);
		$("#" + inpBX).val(txtVal);
	}
}

function getDateInFormat(date) {
	var formatedDate = "";
	formatedDate = formatedDate + date.getFullYear();
	formatedDate = formatedDate + '-';
	var month = date.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}
	formatedDate = formatedDate + month;
	formatedDate = formatedDate + '-';
	formatedDate = formatedDate + date.getDate();
	return formatedDate;
}

/* Login Function */
function login(username, password) {
	
	cred = {}
	cred.username = username;
	cred.password = password;

	JSON.stringify(cred)
	console.log("data: "+JSON.stringify(cred));
	console.log("url: "+session.server + "/login");
	
	/* $.ajax({
		url : session.server + "login",
		type : "POST",
		data : JSON.stringify(cred),
		contentType : "application/json",
		dataType : 'json',
		error : function(jqXHR, textStatus, errorThrown) {
				window.alert("Login Failed");
				window.location.replace("login.htm");
			
		},
		success : function(data, textStatus, jqXHR) {
			window.alert("Login successful");
			window.location.replace("index.htm");
			var decryptedString = data.data;
			var decryptedJSON = $.parseJSON(decryptedString);
		}
	}); */
			window.location.replace("final/index.html");
			var decryptedString = data.data;
			var decryptedJSON = $.parseJSON(decryptedString);
}

/* Validations for Login */
function doLogin() {
	if ($('#userId').val() == '' && $('#userPwd').val() == '') {
		window.alert("User Id and password are empty");
	} else if ($('#userId').val() == '') {
		window.alert("User Id is empty");
	} else if ($('#userPwd').val() == '') {
		window.alert("Password is empty");
	} else {
		login($('#userId').val(), $('#userPwd').val());
	}
}

/* Reset */
function doReset() {
	if ($('#uId').val() == '' && $('#rstPwd').val() == ''
			&& $('#cnfRstPwd').val() == '') {
		$("#uId").addClass("error-input");
		$("#rst-usr-err").removeClass("hide");
		$("#rstPwd").addClass("error-input");
		$("#rst-pwd-err").removeClass("hide");
		$("#cnfRstPwd").addClass("error-input");
		$("#rst-cnfpwd-err").removeClass("hide");
	} else if ($('#uId').val() == '') {
		$("#uId").addClass("error-input");
		$("#rst-usr-err").removeClass("hide");
		$("#rstPwd").removeClass("error-input");
		$("#rst-pwd-err").addClass("hide");
		$("#cnfRstPwd").addClass("error-input");
		$("#rst-cnfpwd-err").removeClass("hide");
	} else if ($('#rstPwd').val() == '') {
		$("#uId").removeClass("error-input");
		$("#rst-usr-err").addClass("hide");
		$("#rstPwd").addClass("error-input");
		$("#rst-pwd-err").removeClass("hide");
		$("#rst-cnfpwd-err").addClass("hide");
		$("#cnfRstPwd").removeClass("error-input");
	} else if ($('#cnfRstPwd').val() == '') {
		$("#uId").removeClass("error-input");
		$("#rst-usr-err").addClass("hide");
		$("#rstPwd").removeClass("error-input");
		$("#rst-pwd-err").addClass("hide");
		$("#rst-cnfpwd-err").removeClass("hide");
		$("#cnfRstPwd").addClass("error-input");
	} else if ($('#cnfRstPwd').val() != $('#rstPwd').val()) {
		$("#uId").removeClass("error-input");
		$("#rst-usr-err").addClass("hide");
		$("#rstPwd").removeClass("error-input");
		$("#rst-pwd-err").addClass("hide");
		$("#rst-cnfpwd-err").removeClass("hide");
		$("#cnfRstPwd").addClass("error-input");
	} else {
		resetpwd($('#uId').val(), $('#rstPwd').val());
	}
}

/* Validations for Change password */
function validateChangePwd() {
	if ($('#old-pwd').val() == '' && $('#new-pwd').val() == ''
			&& $('#confirm-pwd').val() == '') {
		$("#old-pwd").addClass("txt-err");
		$("#chg-old-pwd-err").removeClass("hide");
		$("#new-pwd").addClass("txt-err");
		$("#chg-new-pwd-err").removeClass("hide");
		$("#confirm-pwd").addClass("txt-err");
		$("#cnf-pwd-err").removeClass("hide");
	} else if ($('#old-pwd').val() == '') {
		$("#old-pwd").addClass("txt-err");
		$("#chg-old-pwd-err").removeClass("hide");
		$("#new-pwd").removeClass("txt-err");
		$("#chg-new-pwd-err").addClass("hide");
		$("#confirm-pwd").addClass("txt-err");
		$("#cnf-pwd-err").removeClass("hide");
	} else if ($('#new-pwd').val() == '') {
		$("#old-pwd").removeClass("txt-err");
		$("#chg-old-pwd-err").addClass("hide");
		$("#new-pwd").addClass("txt-err");
		$("#chg-new-pwd-err").removeClass("hide");
		$("#cnf-pwd-err").addClass("hide");
		$("#confirm-pwd").removeClass("txt-err");
	} else if ($('#confirm-pwd').val() == '') {
		$("#old-pwd").removeClass("txt-err");
		$("#chg-old-pwd-err").addClass("hide");
		$("#new-pwd").removeClass("txt-err");
		$("#chg-new-pwd-err").addClass("hide");
		$("#cnf-pwd-err").removeClass("hide");
		$("#confirm-pwd").addClass("txt-err");
	} else if ($('#new-pwd').val() != $('#confirm-pwd').val()) {
		$("#old-pwd").removeClass("txt-err");
		$("#chg-old-pwd-err").addClass("hide");
		$("#new-pwd").removeClass("txt-err");
		$("#chg-new-pwd-err").addClass("hide");
		$("#cnf-pwd-err").removeClass("hide");
		$("#confirm-pwd").addClass("txt-err");
	} else {
		sessionStorage.setItem("incoming-request", "changePwd");
		changePwd($('#old-pwd').val(), $('#new-pwd').val(), null, null);
	}
}

/* Validations for Change Pin */
function validatePin() {
	if ($('#old-pin').val() == '' && $('#new-pin').val() == ''
			&& $('#confirm-pin').val() == '') {
		$("#old-pin").addClass("txt-err");
		$("#old-pin-err").removeClass("hide");
		$("#new-pin").addClass("txt-err");
		$("#new-pin-err").removeClass("hide");
		$("#confirm-pin").addClass("txt-err");
		$("#confirm-pin-err").removeClass("hide");
	} else if ($('#old-pin').val() == '') {
		$("#old-pin").addClass("txt-err");
		$("#old-pin-err").removeClass("hide");
		$("#new-pin").removeClass("txt-err");
		$("#new-pin-err").addClass("hide");
		$("#confirm-pin").addClass("txt-err");
		$("#confirm-pin-err").removeClass("hide");
	} else if ($('#new-pin').val() == '') {
		$("#old-pin").removeClass("txt-err");
		$("#old-pin-err").addClass("hide");
		$("#new-pin").addClass("txt-err");
		$("#new-pin-err").removeClass("hide");
		$("#confirm-pin-err").addClass("hide");
		$("#confirm-pin").removeClass("txt-err");
	} else if ($('#confirm-pin').val() == '') {
		$("#old-pin").removeClass("txt-err");
		$("#old-pin-err").addClass("hide");
		$("#new-pin").removeClass("txt-err");
		$("#new-pin-err").addClass("hide");
		$("#confirm-pin-err").removeClass("hide");
		$("#confirm-pin").addClass("txt-err");
	} else if ($('#new-pin').val() != $('#confirm-pin').val()) {
		$("#old-pin").removeClass("txt-err");
		$("#old-pin-err").addClass("hide");
		$("#new-pin").removeClass("txt-err");
		$("#new-pin-err").addClass("hide");
		$("#confirm-pin-err").removeClass("hide");
		$("#confirm-pin").addClass("txt-err");
	} else {
		changePin(null, null, changePin$('#old-pin').val(), $('#new-pin').val());
	}
}

/* Change Pin */
function changePin(oldPassword, newPassword, oldPin, newPin) {

	passwordInfo = {}
	passwordInfo.oldPassword = oldPassword;
	passwordInfo.newPassword = newPassword;
	passwordInfo.oldPin = oldPin;
	passwordInfo.newPin = newPin;

	req = {}
	var sessionKey = aes.getSessionKey(32);
	var encryptedSessionKey = aes.getEncryptedSessionKey(sessionKey);
	sessionStorage.setItem("session-key", sessionKey);
	var encryptedData = aes.encode(JSON.stringify(passwordInfo), sessionKey);
	var hmac = aes.getHmac(sessionKey, JSON.stringify(passwordInfo));
	req.data = encryptedData;
	req.sessionToken = encryptedSessionKey;
	req.hmac = hmac;

	$.ajax({
		url : session.server + "/security/verifyPin",
		type : "POST",
		data : JSON.stringify(req),
		contentType : "application/json",
		dataType : 'json',
		headers : {
			"x-session-token" : sessionStorage.getItem("session-token"),
			"x-csrf-token" : sessionStorage.getItem("csrf-token")
		},
		error : function(jqXHR, textStatus, errorThrown) {
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
		},
		success : function(data, textStatus, jqXHR) {
			// Call logout()
			hideshow('login-block', 'chnPin-block');
		}
	});
}

/* Reset Force change password to default */
function resetForceChange() {
	$("#force-rstPwd").removeClass("error-input");
	$("#force-rst-pwd-err").addClass("hide");
	$("#force-cnfRstPwd").removeClass("error-input");
	$("#force-rst-cnfpwd-err").addClass("hide");
	$("#force-setPin").removeClass("error-input");
	$("#force-rst-pin-err").addClass("hide");
	$("#force-cnfPin").removeClass("error-input");
	$("#force-rst-cnfpin-err").addClass("hide");
}

/* Successful read card details */
function transactionCompleted(cardDetails) {
	var data = cardDetails.split(":");

	sessionStorage.setItem("pinRequired", data[2]);
	sessionStorage.setItem("entryMode", data[3]);
	sessionStorage.setItem("cardDetails", data);
	sessionStorage.setItem("printTags", data[10]);
	sessionStorage.setItem("cardType", data[3]);

	var type = sessionStorage.getItem("operation-type");
	var hashPan = aes.getHash(data[7]);
	if (type == 1) {
		$(".status-msg").text(i18n.get('inProgress'));
		$(".rdr-icn").attr('src', 'images/processing.gif');
		sale(sessionStorage.getItem("txn-amount"), data[0], data[1], data[3],
				data[4], hashPan, null);
	} else if (type == 3) {
		$(".status-msg").text(i18n.get('fetchTransactions'));
		$(".rdr-icn").attr('src', 'images/processing.gif');
		search(null, hashPan, null, 1, 3);
	} else if (type == 2) {
		$(".status-msg").text(i18n.get('fetchTransactions'));
		$(".rdr-icn").attr('src', 'images/processing.gif');
		search(null, hashPan, null, 6, 2);
	}
}

// function for EMV()
function goOnline(cardDetails) {

	var data = cardDetails.split(":");

	sessionStorage.setItem("pinRequired", data[2]);
	sessionStorage.setItem("entryMode", data[3]);
	sessionStorage.setItem("cardDetails", data);
	sessionStorage.setItem("printTags", data[10]);
	sessionStorage.setItem("cardType", data[3]);
	sessionStorage.setItem("transSeqNumber", data[8]);

	var type = sessionStorage.getItem("operation-type");
	var hashPan = aes.getHash(data[7]);
	if (type == 1) {
		$(".status-msg").text(i18n.get('inProgress'));
		$(".rdr-icn").attr('src', 'images/processing.gif');
		sale(sessionStorage.getItem("txn-amount"), data[0], data[1], data[3],
				data[4], hashPan, data[9]);
	} else if (type == 3) {
		$(".status-msg").text(i18n.get('fetchTransactions'));
		$(".rdr-icn").attr('src', 'images/processing.gif');
		voidRefundCardResponse();
		search(null, hashPan, null, 1, 3);
	} else if (type == 2) {
		$(".status-msg").text(i18n.get('fetchTransactions'));
		$(".rdr-icn").attr('src', 'images/processing.gif');
		voidRefundCardResponse();
		search(null, hashPan, null, 6, 2);
	}
}

/* Sale Functions */
$('#retailMenuSale').click(function() {
	hideshow('sale-block', 'retail-block');
	resetsale();
});

function proceedSale() {

	if ($("#sale-txt-amount").val() <= 0 && $("#sale-txt-decimal").val() <= 0) {
		$("#errorSaleAmount").removeClass("hide");
		return;
	} else {
		$("#errorSaleAmount").addClass("hide");
	}
	$("#sale-content").addClass("hide-overlay");
	$("#connect-reader").removeClass("hide-overlay");
	$(".status-msg").text(i18n.get('connectingReader'));
	$("#connect-fail-msg").text(i18n.get('connect-fail-msg'));
	amount = $("#sale-txt-amount").val() + "." + $("#sale-txt-decimal").val();
	sessionStorage.setItem("txn-amount", amount);
	sessionStorage.setItem("operation-type", 1);
	java.connect(sessionStorage.getItem("device"));
}

function sale(txnAmount, trackData, maskedTrackData, entryMode, cardSeq,
		maskedPan, printTags) {

	transactionData = {};
	amount = {};
	var amount, currencyCode, currencySymbol;
	amount.amount = amount;
	amount.currencyCode = currencyCode;
	amount.currencySymbol = currencySymbol;
	transactionData.amount = amount;

	cardInfo = {};
	cardInfo.trackData = trackData;
	cardInfo.cardSequenceNumber = "001";
	cardInfo.entryMode = entryMode;
	cardInfo.maskedPan = maskedPan;
	cardInfo.maskedTrack2Data = maskedTrackData;

	if (sessionStorage.getItem("cardType") == "EMV") {
		cardInfo.printTags = {};
		var splitPrintTags = printTags.split("!");
		cardInfo.printTags.pan = maskedPan;
		cardInfo.printTags.applicationIdentifier = splitPrintTags[0];
		cardInfo.printTags.applicationCrypto = splitPrintTags[1];
		cardInfo.printTags.aprName = splitPrintTags[2];
	}

	transactionData.cardInfo = cardInfo;

	terminalInfo = {};
	var entryMode, terminalCapability;
	terminalInfo.entryMode = entryMode;
	terminalInfo.terminalCapability = terminalCapability;
	transactionData.terminalInfo = terminalInfo

	amount.amount = txnAmount;
	amount.currencyCode = "484";
	amount.currencySymbol = "MXN";
	transactionData.amount = amount;
	transactionData.cardInfo = cardInfo;

	terminalInfo.terminalCapability = "2";
	transactionData.terminalInfo = terminalInfo;

	req = {}
	var sessionKey = sessionStorage.getItem("session-key");
	var encryptedData = aes.encode(JSON.stringify(transactionData),
			sessionStorage.getItem("session-key"));
	var hmac = aes.getHmac(sessionKey, JSON.stringify(transactionData));
	req.data = encryptedData;
	req.hmac = hmac;

	$.ajax({
		url : session.server + "/transaction/sale",
		type : "POST",
		data : JSON.stringify(req),
		headers : {
			"x-session-token" : sessionStorage.getItem("session-token"),
			"x-csrf-token" : sessionStorage.getItem("csrf-token")
		},
		contentType : "application/json",
		dataType : 'json',
		error : function(jqXHR, textStatus, errorThrown) {
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
			$("#connect-reader").addClass("hide-overlay");
			$("#sale-content").addClass("hide-overlay");
			$("#sale-block").addClass("hide-overlay");
			$("#retail-block").removeClass("hide-overlay");
		},
		success : function(data, textStatus, jqXHR) {
			var decryptedString = aes.decode(data.data, sessionStorage
					.getItem("session-key"));
			var decryptedJSON = $.parseJSON(decryptedString);
			sessionStorage.setObject("response", decryptedJSON);
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
			sessionStorage.setItem("flow", "sale");
			
			// java method if EMV --> Complete transaction + Seq Number + response issuer
			if (sessionStorage.getItem("cardType") == "EMV") {
					var seqNo = sessionStorage.getItem("transSeqNumber");
					// TODO:
					var response = 0;
					var result = 6;
					var issuerResponse = 1;
					var issuerAuthorisationResponseCode = "0";
					var issuerAuthenticationData = "0";

					java.completeTransaction(seqNo, response, result,
							issuerResponse, issuerAuthorisationResponseCode,
							issuerAuthenticationData);
				} else if (sessionStorage.getItem("cardType") == "MSR") {
					$("#connect-reader").addClass("hide-overlay");
					hideshow('txnsummary-block', 'sale-block');
					showSummary();
				}
		}
	});
}

function voidRefundCardResponse() {

	var seqNo = sessionStorage.getItem("transSeqNumber");
	var response = 0;
	var result = 0;
	var issuerResponse = 0;
	var issuerAuthorisationResponseCode = "0";
	var issuerAuthenticationData = "0";

	java.completeTransaction(seqNo, response, result, issuerResponse,
			issuerAuthorisationResponseCode, issuerAuthenticationData);

}

function transactionProcessed(details) {

	var tranType = sessionStorage.getItem("operation-type");
	if (tranType == 1) {
		if (sessionStorage.getItem("pinRequired") == 'false') {
			signaturePad = new SignaturePad(canvas);
			$("#connect-reader").addClass("hide-overlay");
			hideshow('sign-rcpt-block', 'sale-block');
		} else {
			$("#connect-reader").addClass("hide-overlay");
			hideshow('txnsummary-block', 'sale-block');
			showSummary();
		}

		// New method Success or failure
		var data = details.split(":");
		var transactionResult = data[0];
		var completionAction = data[1];

		if (transactionResult == 0) {
			// TODO: ‘0’ – The transaction was approved
		} else if (transactionResult == 1) {
			// TODO: ‘1’ – The transaction was declined
		}

		if (completionAction == 0) {
			// TODO: ‘0’ – No capture, reversal or advice is required
		} else if (completionAction == 2) {
			// TODO: ‘2’ – A reversal is required
		}
	}
}

function resetsale() {
	$("#sale-content").removeClass("hide-overlay");
	$(".layout-bg").removeClass("no-scroll");
	$("#connect-reader").addClass("hide-overlay");
	$("#submit-btn").addClass('disable');
	$("#submit-btn").removeClass('enable');
	$(".amt-text").val('');
	$(".mxn-text").val('');
	$("#connect-reader .overlay-msg").html("Connecting to Reader...");
	$("#connect-reader .rdr-icn").attr('src', 'images/connect-reader.png');
	$("#connect-fail .overlay-msg").html("Connection Failed...");
	$("#connect-fail .rdr-icn").attr('src', 'images/connect-failiure.png');
	$("#success-page").removeClass("hide-overlay");
	$("#cust-sign-overlay").removeClass("hide-overlay");
	$("#errorSaleAmount").addClass("hide");
	$("#sign-err").addClass("hide");
	$("#sale-action").addClass("hide-overlay");
	$("#sale-action-btns").addClass("hide-overlay");

}

function resetChangePwdFields(){
	$("#old-pwd").val('');
	$("#new-pwd").val('');
	$("#confirm-pwd").val('');
	
	$("#old-pwd").removeClass("txt-err");
	$("#new-pwd").removeClass("txt-err");
	$("#confirm-pwd").removeClass("txt-err");
	
	$(".pwd-text").val('');
	$("#chg-old-pwd-err").addClass("hide");
	$("#chg-new-pwd-err").addClass("hide");
	$("#cnf-pwd-err").addClass("hide");
}

$('#con-failed-cancel').click(function() {
	$("#connect-fail-btns").addClass("hide-overlay");
	$("#connect-fail").addClass("hide-overlay");
	$("#retail-block").removeClass("hide-overlay");
	$("#sale-content").removeClass("hide-overlay");
});

/* Void Functions */
$('#retailMenuVoid').click(function() {
	sessionStorage.setItem("operation-type", 2);
	resetvoid();
	showConnectReader();
});

/* Refund Functions */
$('#retailMenuRefund').click(function() {
	sessionStorage.setItem("operation-type", 3);
	resetvoid();
	showConnectReader();
});

/* New Flow for Void/Refund */
function showConnectReader() {
	$("#retBlock").addClass("hide-overlay");
	$(".layout-bg").addClass("no-scroll");
	$(".status-msg").html("Connecting to Reader...");
	$(".rdr-icn").attr('src', 'images/connect-reader.png');
	$(".status-msg").text(i18n.get('connectingReader'));
	$("#menu-connect-reader").removeClass("hide-overlay");
	// setTimeout(function(){
	// $("#menu-connect-reader").addClass("hide-overlay");
	// $("#menu-connect-fail").removeClass("hide-overlay");
	// $("#menu-connect-fail-btns").removeClass("hide-overlay");}, 3000);
	java.connect(sessionStorage.getItem("device"));
}

/* Confirm Refund or void */
$('#yes-btn').click(function() {
	var tranId = sessionStorage.getItem("id");
	var tranAmount = sessionStorage.getItem("amount");
	var cardDetails = sessionStorage.getItem("cardDetails");
	if (sessionStorage.getItem("operation-type") == 2) {
		voidTx(tranId, tranAmount, cardDetails);
	} else if (sessionStorage.getItem("operation-type") == 3) {
		refundTx(tranId, tranAmount, cardDetails);
	}
});

$('#no-btn').click(function() {
	$("#searchResultDiv").removeClass("hide-overlay");
	$(".layout-bg").removeClass("no-scroll");
	$("#void-confirm").addClass("hide-overlay");
	$("#void-confirm-btns").addClass("hide-overlay");
});

/* Summary related Functions */
function showSummary() {
	$("#recieptMerchantName").text(i18n.get('recieptMerchantName'));
	$("#merchantAddress1").text(i18n.get('merchantAddress1'));
	$("#merchantAddress2").text(i18n.get('merchantAddress2'));
	$("#lblMerchantName").text(i18n.get('lblMerchantName'));
	$("#lblTerminal").text(i18n.get('lblTerminal'));
	$("#lblTransactionId").text(i18n.get('lblTransactionId'));
	$("#lblDate").text(i18n.get('lblDate'));
	$("#lblBatch").text(i18n.get('lblBatch'));
	$("#lblInvoiceNumber").text(i18n.get('lblInvoiceNumber'));
	$("#lblRRN").text(i18n.get('lblRRN'));
	$("#swiped").text(i18n.get('swiped'));
	$("#lblTotal").text(i18n.get('lblTotal'));
	$("#customerName").text(i18n.get('customerName'));
	$("#terms").text(i18n.get('terms'));
	$("#copy").text(i18n.get('copy'));
	$("#lblrecieptDate").text(i18n.get('lblrecieptDate'));

	$("#lblrecieptMerchantName").text(i18n.get('lblrecieptMerchantName'));
	$("#lblrecieptTransactionId").text(i18n.get('lblrecieptTransactionId'));
	$("#emvTerms").text(i18n.get('emvTerms'));

	var src = sessionStorage.getItem("sign-src");
	$(".cust-sign").attr('src', sessionStorage.getItem("sign-src"));
	if (sessionStorage.getItem("flow") == 'sale'
			&& sessionStorage.getItem("pinRequired") == 'false') {
		$("#cust-sign-img").removeClass("hide");
	} else {
		$("#cust-sign-img").addClass("hide");
	}

	if (sessionStorage.getItem("flow") == 'reprint') {
		$("#success-msg").addClass("hide");
	} else {
		$("#success-msg").removeClass("hide");
	}
	updateSummaryLabels();
	updateSummary();
}

function updateSummary() {
	resp = sessionStorage.getObject("response");
	$("#merchantName").text(resp.merchantName);
	$("#mid").text(resp.mid);
	$("#tid").text(resp.tid);
	$("#transactionId").text(resp.transactionId);
	$("#date").text(resp.date + " " + resp.time);
	$("#rrn").text(resp.rrn);
	if (sessionStorage.getItem("flow") == 'sale') {
		$("#auth").text(resp.authCode);
		$("div#header").html(i18n.get("sale"));
		$("div#type").html(i18n.get("sale"));
	} else if (sessionStorage.getItem("flow") == 'void') {
		$('#auth').hide();
		$('#lblAuth').hide();
		$("div#header").html(i18n.get("void"));
		$("div#type").html(i18n.get("void"));
		$("#trns-details").removeClass("trns-details");
		$("#trns-details").addClass("mercht-details");
	} else if (sessionStorage.getItem("flow") == 'refund') {
		$('#auth').hide();
		$('#lblAuth').hide();
		$("div#header").html(i18n.get("refund"));
		$("div#type").html(i18n.get("refund"));
		$("#trns-details").removeClass("trns-details");
		$("#trns-details").addClass("mercht-details");
	} else if (sessionStorage.getItem("flow") == 'reprint') {
		$("#auth").text(resp.authCode);
		$("div#header").html(i18n.get("rePrint"));
		$("div#type").html(i18n.get("rePrint"));
		$("#cust-sign-img").attr('src', resp.image);
	}
	if (resp.cardType != null) {
		$("#cardType").text(resp.cardType);
	}
	$("#summaryAmount").text(resp.amount + " MXN");
	$("#cardNum").text("XXXX XXXX XXXX " + resp.cardNumber);
	
	if(null !=resp.operatorId)
		$("#operatorId").text(resp.operatorId);
	else
		$("#operatorId").text(resp.merchantName);resp.merchantName
}

function updateSummaryLabels() {
	$("#lblMerchantName").text(i18n.get("merchantName"));
	$("#lblOperatorId").text(i18n.get("operatorId"));
	$("#lblTransactionId").text(i18n.get("transactionId"));
	$("#lblDate").text(i18n.get("date"));
	$("#lblCardType").text(i18n.get("cardType"));
	$("#lblCardNum").text(i18n.get("cardNum"));
	$("#lblType").text(i18n.get("type"));
	$("#lblAmount").text(i18n.get("amount"));
	$("#ok").text(i18n.get("ok"));
	$("#tranSummary").text(i18n.get("tranSummary"));
	$("#sale").text(i18n.get("sale"));
	$("#success").text(i18n.get("success"));
	$("#type").text(i18n.get("sale-u"));
	$("#receipt").text(i18n.get('receipt'));
}

/* Receipt Functions */
function chkFlow() {
	var type = sessionStorage.getItem("operation-type");
	if (type == 4)
		showrecieptvoid();
	else
		showreciept();
}

function showreciept() {
	$("#success-page").addClass("hide-overlay");
	$("#printing-overlay").removeClass("hide-overlay");
	updateRecieptDetails();
	setTimeout(function() {
		$("#printing-overlay").addClass("hide-overlay");
		$("#receipt-overlay").removeClass("hide-overlay");
	}, 2000);
	java.generateReceipt();
	setTimeout(function() {
		$("#receipt-overlay").addClass("hide-overlay");
		$("#sale-action").removeClass("hide-overlay");
		$("#sale-action-btns").removeClass("hide-overlay");
	}, 6000);
}

function showrecieptvoid() {
	$("#void-success").addClass("hide-overlay");
	$(".layout-bg").addClass("no-scroll");
	$("#void-printing-overlay").removeClass("hide-overlay");
	setTimeout(function() {
		$("#void-printing-overlay").addClass("hide-overlay");
		$("#void-receipt-overlay").removeClass("hide-overlay");
	}, 2000);
	setTimeout(function() {
		$("#void-receipt-overlay").addClass("hide-overlay");
		$(".layout-bg").removeClass("no-scroll");
		hideshow("retail-landing-block", "voidsuccess-block");
	}, 8000);
}

/* Search criteria */
function searchTransaction() {

	if ($('#rpt-pan').val() > 1 && $('#rpt-pan').val() < 4) {
		$("#reprt-pan-err").removeClass("hide");
		return false;
	} else {
		$("#reprt-pan-err").addClass("hide");
	}
	var selectedDate = $('#prt-rcp-date-pick').val();
	if (selectedDate != '') {
		var parts = selectedDate.split('/');
		var formatDate = parts[2] + '-' + parts[0] + '-' + parts[1];
	} else {
		formatDate = null;
	}
	if ($('#rpt-pan').val() == "") {
		var pan = null;
	} else {
		pan = $('#rpt-pan').val();
	}
	if ($('#reprt-transId').val() == "") {
		var tId = null;
	} else {
		tId = $('#reprt-transId').val();
	}
	
	var transactionType = null;
	var selectedType = $(".cust-drp-dwn").find('[data-bind="label"]').text();
	var operationType = sessionStorage.getItem("operation-type");
	if (selectedType == "Select")
		transactionType = null;
	else if (selectedType == 'Sale' || selectedType == 'Venta')
		transactionType = 1;
	else if (selectedType == 'Refund' || selectedType == 'Reembolso')
		transactionType = 3;
	else if (selectedType == 'Void' || selectedType == 'Vacío')
		transactionType = 2;
	
	if(tId == null && pan == null && formatDate == null && transactionType == null){
		if (sessionStorage.getItem("lang") == 'en')
			toast("Enter atleast one search criteria");
		else
			toast("Introduzca al menos un criterio de búsqueda");
		return;
	}
	sessionStorage.setItem("reprint-trans-type", selectedType);
	search(tId, pan, formatDate, transactionType, operationType);
}

/* Search Functions */
function search(transactionId, maskedPan, date, transType, operationType) {
	req = {}
	if (null != transactionId)
		req.transactionId = transactionId;
	if (null != maskedPan)
		req.maskPan = maskedPan;

	if (null != date)
		req.date = date;

	if (null != transType)
		req.transactionType = transType;

	if (null != operationType)
		req.operationTransaction = operationType;

	req.numOfTransactions = 10;

	request = {}
	var sessionKey = sessionStorage.getItem("session-key");
	var encryptedData = aes.encode(JSON.stringify(req), sessionKey);
	request.data = encryptedData;

	var hmac = aes.getHmac(sessionKey, JSON.stringify(req));

	request.hmac = hmac;

	$.ajax({
				url : session.server + "/transaction/search",
				type : "POST",
				data : JSON.stringify(request),
				contentType : "application/json",
				headers : {
					"x-session-token" : sessionStorage.getItem("session-token"),
					"x-csrf-token" : sessionStorage.getItem("csrf-token")
				},
				dataType : 'json',
				error : function(jqXHR, textStatus, errorThrown) {
					sessionStorage.setItem("csrf-token", jqXHR
							.getResponseHeader("x-csrf-token"));
				},
				success : function(data, textStatus, jqXHR) {
					var decryptedString = aes.decode(data.data, sessionStorage
							.getItem("session-key"));
					var decryptedJSON = $.parseJSON(decryptedString);
					sessionStorage.setItem("csrf-token", jqXHR
							.getResponseHeader("x-csrf-token"));
					sessionStorage.setObject("searchResults", decryptedJSON);
					if (decryptedJSON.code == 220) {
						if (sessionStorage.getItem("lang") == 'en') {
							toast("No transactions found");
						} else {
							toast("No se encontraron transacciones");
						}
						$("#retBlock").removeClass("hide-overlay");
						$(".layout-bg").addClass("no-scroll");
						$("#menu-connect-reader").addClass("hide-overlay");

					} else {
						updateSearchResults();
						var operationTypeNew = sessionStorage
								.getItem("operation-type");
						if (operationTypeNew == 4) {
							hideshow('searchresult-block', 'reprt-search-block');
							$("#searchResultDiv").removeClass("hide-overlay");
							$("#searchResultDiv").removeClass("no-scroll");
							$("#void-confirm").addClass("hide-overlay");
							$("#void-confirm-btns").addClass("hide-overlay");
						} else if (operationTypeNew == 2
								|| operationTypeNew == 3) {
							hideshow('searchresult-block', 'retail-block');
							$("#menu-connect-reader").addClass("hide-overlay");
							$("#menu-connect-fail").addClass("hide-overlay");
							$("#searchResultDiv").removeClass("hide-overlay");
							$("#searchResultDiv").removeClass("no-scroll");
							$("#void-confirm").addClass("hide-overlay");
							$("#void-confirm-btns").addClass("hide-overlay");
						}
					}
				}
			});
}

/* Display Search Results */
function updateSearchResults() {
	$('div#searchResultDiv').empty();
	results = sessionStorage.getObject("searchResults");
	var html = "";
	for (var i = 0; i < results.infos.length; i++) {
		html = html
				+ '<div class="trns-details void-trns-det void-trns-mar" onclick="clicked('
				+ results.infos[i].transactionId
				+ ','
				+ results.infos[i].amount
				+ ')" id="'
				+ results.infos[i].transactionId
				+ '">'
				+ '<a>'
				+ '<div class="row">'
				+ '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 cust-cnt-pad trns-det-head">'
				+ results.infos[i].transactionId
				+ '<span>'
				+ results.infos[i].date
				+ ' '
				+ results.infos[i].time
				+ '</span></div>'
				+ '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 cust-head-pad trns-det-cont">'
				+ results.infos[i].amount + ' MXN</div>' + '</div></a></div>';
	}
	$("#transactions").text(i18n.get('transactions'));
	$('div#searchResultDiv').append(html);
}

function clicked(id, amount) {
	sessionStorage.setItem("id", id);
	sessionStorage.setItem("amount", amount);

	if (sessionStorage.getItem("operation-type") == 4)
		getTransactionById(id);
	else if (sessionStorage.getItem("operation-type") == 2) {
		$("#searchResultDiv").addClass("hide-overlay");
		$(".layout-bg").addClass("no-scroll");
		$("#void-confirm").removeClass("hide-overlay");
		$("#void-confirm-btns").removeClass("hide-overlay");
		$("#confirmation-msg").text(i18n.get('confirmation-msg-void'));
	} else if (sessionStorage.getItem("operation-type") == 3) {
		$("#searchResultDiv").addClass("hide-overlay");
		$(".layout-bg").addClass("no-scroll");
		$("#void-confirm").removeClass("hide-overlay");
		$("#void-confirm-btns").removeClass("hide-overlay");
		$("#confirmation-msg").text(i18n.get('confirmation-msg-refund'));
	}
}

/* Pdf Functions */
function openpdf() {
	java.showPdf();
}

/* Void Flow */
function voidTx(transactionId, tranAmount, cardDetails) {
	voidData = {}
	voidData.transactionId = transactionId;
	
	amount = {}
	amount.amount = tranAmount;
	amount.currencyCode = "484";
	amount.currencySymbol = "MXN";
	voidData.amount = amount;

	var data = cardDetails.split(",");
	cardInfo = {};
	
	cardInfo.trackData = data[0];
	cardInfo.maskedTrack2Data = data[1];
	cardInfo.cardSequenceNumber = data[4];
	cardInfo.entryMode = data[3];
	cardInfo.maskedPan = data[7];
	
	var tags = data[9].split("!");
	
	printTags = {}
	printTags.applicationIdentifier = tags[0];
	printTags.applicationCrypto = tags[1];
	printTags.aprName = tags[2];
	
	cardInfo.printTags = printTags;
	voidData.cardInfo = cardInfo;
	
	request = {}
	var sessionKey = sessionStorage.getItem("session-key");

	var encryptedData = aes.encode(JSON.stringify(voidData), sessionKey);
	request.data = encryptedData;

	var hmac = aes.getHmac(sessionKey, JSON.stringify(voidData));

	request.hmac = hmac;

	$.ajax({
		url : session.server + "/transaction/void",
		type : "POST",
		data : JSON.stringify(request),
		contentType : "application/json",
		headers : {
			"x-session-token" : sessionStorage.getItem("session-token"),
			"x-csrf-token" : sessionStorage.getItem("csrf-token")
		},
		dataType : 'json',
		error : function(jqXHR, textStatus, errorThrown) {
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
			toast("Void Failed");
			$("#void-confirm").addClass("hide-overlay");
			$("#void-confirm-btns").addClass("hide-overlay");
			$("#searchresult-block").addClass("hide-overlay");
			$("#retail-block").removeClass("hide-overlay");
			$("#retBlock").removeClass("hide-overlay");
		},
		success : function(data, textStatus, jqXHR) {
			var decryptedString = aes.decode(data.data, sessionStorage
					.getItem("session-key"));
			var decryptedJSON = $.parseJSON(decryptedString);
			sessionStorage.setObject("response", decryptedJSON);
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
			sessionStorage.setItem("flow", "void");
			$(".layout-bg").removeClass("no-scroll");
			hideshow('txnsummary-block', 'searchresult-block');
			$("#success-page").removeClass("hide-overlay");
			showSummary();
		}
	});
}

/* Refund Flow */
function refundTx(transactionId, amt, cardDetails) {
	voidData = {}
	voidData.transactionId = transactionId;
	
	amount = {}
	amount.amount = amt;
	amount.currencyCode = "484";
	amount.currencySymbol = "MXN";
	voidData.amount = amount;

	var data = cardDetails.split(",");
	cardInfo = {};
	
	cardInfo.trackData = data[0];
	cardInfo.maskedTrack2Data = data[1];
	cardInfo.cardSequenceNumber = data[4];
	cardInfo.entryMode = data[3];
	cardInfo.maskedPan = data[7];
	
	var tags = data[9].split("!");
	
	printTags = {}
	printTags.applicationIdentifier = tags[0];
	printTags.applicationCrypto = tags[1];
	printTags.aprName = tags[2];
	
	cardInfo.printTags = printTags;
	voidData.cardInfo = cardInfo;
	
	request = {}
	var sessionKey = sessionStorage.getItem("session-key");

	var encryptedData = aes.encode(JSON.stringify(voidData), sessionKey);
	request.data = encryptedData;

	var hmac = aes.getHmac(sessionKey, JSON.stringify(voidData));

	request.hmac = hmac;
	
	$.ajax({
		url : session.server + "/transaction/refund",
		type : "POST",
		data : JSON.stringify(request),
		contentType : "application/json",
		headers : {
			"x-session-token" : sessionStorage.getItem("session-token"),
			"x-csrf-token" : sessionStorage.getItem("csrf-token")
		},
		dataType : 'json',
		error : function(jqXHR, textStatus, errorThrown) {
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
		},
		success : function(data, textStatus, jqXHR) {
			var decryptedString = aes.decode(data.data, sessionStorage
					.getItem("session-key"));
			var decryptedJSON = $.parseJSON(decryptedString);
			sessionStorage.setObject("response", decryptedJSON);
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));

			hideshow('txnsummary-block', 'searchresult-block');
			$("#success-page").removeClass("hide-overlay");
			sessionStorage.setItem("flow", "refund");
			$(".layout-bg").removeClass("no-scroll");
			showSummary();
		}
	});
}

/* Reset void flow */
function resetvoid() {
	$(".amt-text").val('');
	$(".datepicker").addClass("hide");
	$("#void-success").removeClass("hide-overlay");
	$("#sale-action").addClass("hide-overlay");
	$("#sale-action-btns").addClass("hide-overlay");
	$("#void-success-header").removeClass("hide");
	var type = sessionStorage.getItem("operation-type");

	if (type == 'Refund')
		$("#void-title").text(i18n.get('refund'));
	else
		$("#void-title").text(i18n.get('void'));
}

function backBtn() {
	var flow = sessionStorage.getItem("operation-type");
	if (flow == 4) {
		hideshow('reprt-search-block', 'searchresult-block');
	} else if (flow == 2 || flow == 3) {
		hideshow('retail-block', 'searchresult-block');
		$("#retBlock").removeClass("hide-overlay");
	}
}

/* RePrint Functions */
$('#retailMenuReprint').click(function() {
	sessionStorage.setItem("operation-type", 4);
});

function promptForPin() {
	$("#confirm-reprint").removeClass("hide-overlay");
	$("#confirm-retail-btns").removeClass("hide-overlay");
	$("#retBlock").addClass("hide-overlay");
}

$('#rej-pin-btn').click(function() {
	$("#confirm-reprint").addClass("hide-overlay");
	$("#confirm-retail-btns").addClass("hide-overlay");
	$("#retBlock").removeClass("hide-overlay");
});

function confirmReprint() {

	var enteredPin = $("#pin-txtbox").val();
	if (enteredPin == null)
		toast("Enter valid Pin");
	passwordInfo = {}
	passwordInfo.pin = enteredPin.split('');

	req = {}
	var sessionKey = sessionStorage.getItem("session-key");
	var encryptedData = aes.encode(JSON.stringify(passwordInfo),sessionKey);
	var hmac = aes.getHmac(sessionKey, JSON.stringify(passwordInfo));
	req.data = encryptedData;
	req.hmac = hmac;
	
	$.ajax({
		url : session.server + "/security/verifyPin",
		type : "POST",
		data : JSON.stringify(req),
		
		headers : {
			"x-session-token" : sessionStorage.getItem("session-token"),
			"x-csrf-token" : sessionStorage.getItem("csrf-token")
		},
		contentType : "application/json",
		dataType : 'json',
		error : function(jqXHR, textStatus, errorThrown) {
			toast("Invalid Pin");
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
		},
		success : function(data, textStatus, jqXHR) {
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
			$("#confirm-reprint").addClass("hide-overlay");
			$("#confirm-retail-btns").addClass("hide-overlay");
			$("#retBlock").removeClass("hide-overlay");
			hideshow("reprt-search-block", "retail-block");
		}
	});
}

function getTransactionById(transactionId) {
	req = {}
	req.industryType = "retail";
	req.transactionId = transactionId;

	$.ajax({
		url : session.server + "/transaction/" + req.transactionId,
		type : "GET",
		data : JSON.stringify(req),
		contentType : "application/json",
		headers : {
			"x-session-token" : sessionStorage.getItem("session-token"),
			"x-csrf-token" : sessionStorage.getItem("csrf-token")
		},
		dataType : 'json',
		error : function(jqXHR, textStatus, errorThrown) {
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
		},
		success : function(data, textStatus, jqXHR) {
			var decryptedString = aes.decode(data.data, sessionStorage
					.getItem("session-key"));
			var decryptedJSON = $.parseJSON(decryptedString);
			var type = sessionStorage.getItem("reprint-trans-type");

			sessionStorage.setObject("response", decryptedJSON);
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
			sessionStorage.setItem("flow", "reprint");

			hideshow('txnsummary-block', 'searchresult-block');
			$(".layout-bg").removeClass("no-scroll");
			$(".success-title").addClass("hide");
			if (type == 'Refund')
				$("#void-title").text(i18n.get('refund'));
			else
				$("#void-title").text(i18n.get('void'));

			showSummary();
		}
	});
}

/* Receipt Functions */
function updateRecieptDetails() {
	updateRecieptSummaryLabels();

	user = sessionStorage.getObject("user");
	var printTags = sessionStorage.getItem("printTags");
	resp = sessionStorage.getObject("response");

	if (null != user.firstName)
		$("#recieptMerchantName").text(user.firstName);
	if (null != user.merchantStreetAddress1)
		$("#merchantAddress1").text(user.merchantStreetAddress1);
	if (null != user.merchantCity)
		$("#merchantAddress2").text(user.merchantState + user.merchantCity);

	if (null != resp.tid)
		$("#recieptTid").text(resp.tid);
	if (null != resp.transactionId)
		$("#recieptTransactionId").text(resp.transactionId);
	if (null != resp.date && null != resp.time)
		$("#recieptDate").text(resp.date + " " + resp.time);
	if (null != resp.rrn)
		$("#recieptRrn").text(resp.rrn);
	$("#recieptCardType").text(resp.cardType);
	if (null != resp.cardNumber)
		$("#recieptCardNum").text("XXXX XXXX XXXX " + resp.cardNumber);
	if (null != resp.amount)
		$("#recieptAmount").text(resp.amount + " MXN");
	if(null != resp.batchNumber)
		$("#batch").text(resp.batchNumber);
	else
		$("#batch").text("B2547");
	$("#invoiceNumber").text("49");
	$("#auth").text(resp.authCode);
	$('#rePrintcopy').hide();
	$("#cust-sign-img").attr('src', resp.image);
	if (resp.entryMode == "MSR") {
		$('#lblAid').hide();
		$('#aid').hide();
		$('#lblTc').hide();
		$('#tc').hide();
		$('#lblAlabel').hide();
		$('#aLabel').hide();
		$('#lblAprlabel').hide();
		$('#aprLabel').hide();
		$("#swiped").text(i18n.get('swiped'));
		$('#emvTerms').hide();
		$('#signature').show();
	} else if (resp.entryMode == "EMV") {
		if (printTags != null) {
			var tags = printTags.split("!");
			$('#aid').text(tags[0]);
			$('#tc').text(tags[1]);
			$('#aLabel').text(tags[2]);
			$('#aprLabel').text(tags[2]);
		}
		if (sessionStorage.getItem("operation-type") == 4) {
			// TODO: pending with JP
			$('#aid').hide();
			$('#tc').hide();
			$('#aLabel').hide();
			$('#aprLabel').hide();
			$('#lblAid').hide();
			$('#lblTc').hide();
			$('#lblAlabel').hide();
			$('#lblAprlabel').hide();
			$("#cust-sign-img").attr('src', resp.image);
		}
		$('#cust-name').text(resp.cardHolderName);
		$('#terms').hide();
		$("#swiped").text("ICC");
		$('#emvTerms').show();
	}
}

function updateRecieptSummaryLabels() {
	$("#lblTransactionId").text(i18n.get("transactionId"));
	$("#lblDate").text(i18n.get("date"));
	$("#lblBatch").text(i18n.get("Batch"));
	$("#lblrecieptMerchantName").text(i18n.get("lblrecieptMerchantName"));
	$("#lblrecieptTransactionId").text(i18n.get("lblrecieptTransactionId"));
	$("#lblrecieptDate").text(i18n.get("lblrecieptDate"));
	if (sessionStorage.getItem("cardType") == "EMV") {
		$('#lblAid').text("AID:");
		$('#lblTc').text("TC:");
		$('#lblAlabel').text("ALABEL:");
		$('#lblAprlabel').text("APRNAM:");
	}
}

/* Settlement Related */

$('#settle').click(function() {
	$("#success-page").addClass("hide-overlay");
	$("#process-settlement").removeClass("hide-overlay");
	batchSettle();
});

$('#cancel').click(function() {
	hideshow('retail-landing-block', 'batch-settle-block');
}, 3000);

$('#saleCancel').click(function() {
	hideshow('retail-block', 'sale-block');
});

/* Batch Summary */
function batchSummary() {
	req = {}
	req.mid = "mid123";
	req.tid = "tid123";

	request = {}
	var sessionKey = sessionStorage.getItem("session-key");
	var encryptedData = aes.encode(JSON.stringify(req), sessionKey);
	request.data = encryptedData;

	var hmac = aes.getHmac(sessionKey, JSON.stringify(req));

	request.hmac = hmac;

	$
			.ajax({
				url : session.server + "/batch/summary",
				type : "POST",
				data : JSON.stringify(request),
				contentType : "application/json",
				headers : {
					"x-session-token" : sessionStorage.getItem("session-token"),
					"x-csrf-token" : sessionStorage.getItem("csrf-token")
				},
				dataType : 'json',
				error : function(jqXHR, textStatus, errorThrown) {
					sessionStorage.setItem("csrf-token", jqXHR
							.getResponseHeader("x-csrf-token"));
				},
				success : function(data, textStatus, jqXHR) {
					var decryptedString = aes.decode(data.data, sessionStorage
							.getItem("session-key"));
					var decryptedJSON = $.parseJSON(decryptedString);
					sessionStorage.setItem("csrf-token", jqXHR
							.getResponseHeader("x-csrf-token"));
					if (decryptedJSON.code == 220) {
						if (sessionStorage.getItem("lang") == 'en') {
							toast("No transactions To be Settled");
						} else {
							toast("No hay transacciones que se liquidará");
						}
						return;
					}
					hideshow('batch-settle-block', 'retail-landing-block');
					var noOfSale = decryptedJSON.transactionSummaries[0].numberOfTransactions;
					var saleTotal = decryptedJSON.transactionSummaries[0].amount;
					var noOfRefund = decryptedJSON.transactionSummaries[1].numberOfTransactions;
					var refundTotal = decryptedJSON.transactionSummaries[1].amount;
					sessionStorage.setItem("saleTotal", saleTotal);
					sessionStorage.setItem("saleCount", noOfSale);
					sessionStorage.setItem("refundTotal", refundTotal);
					sessionStorage.setItem("refundCount", noOfRefund);
					sessionStorage.setObject("batchSummary", data);

					if (typeof i18n !== "undefined") {
						$("#saleCountLabel").text(i18n.get('saleCountLabel'));
						$("#saleTotalLabel").text(i18n.get('saleTotalLabel'));
						$("#refundCountLabel").text(
								i18n.get('refundCountLabel'));
						$("#refundTotalLabel").text(
								i18n.get('refundTotalLabel'));
						$("#cancel").text(i18n.get('cancel'));
						$("#settleLabel").text(i18n.get('settle'));
						$("#settle").text(i18n.get('settle'));
						$("#overlay-msg")
								.text(i18n.get('processingSettlement'));
						$("title").text(i18n.get('settlementPage'));
						$("#txnSummaryLabel").text(i18n.get('tranSummary'));
						$("#sale").text(i18n.get('sale'));
						$("#refund").text(i18n.get('refund'));
						$("#totalLabel").text(i18n.get('totalLabel'));
					}

					$(".amt-text, .mxn-text").keydown(
							function(e) {
								if (e.which != 8 && e.which != 0
										&& (e.which < 48 || e.which > 57)) {
									return false;
								}
							});

					$("#saleTotal").text(
							sessionStorage.getItem("saleTotal") + " MXN");
					$("#saleCount").text(sessionStorage.getItem("saleCount"));
					$("#refundTotal").text(
							sessionStorage.getItem("refundTotal") + " MXN");
					$("#refundCount").text(
							sessionStorage.getItem("refundCount"));
				}
			});
}

function batchSettle() {

	req = {}
	req.mid = "mid123";
	req.tid = "tid123";

	request = {}
	var sessionKey = sessionStorage.getItem("session-key");
	var encryptedData = aes.encode(JSON.stringify(req), sessionKey);
	request.data = encryptedData;

	var hmac = aes.getHmac(sessionKey, JSON.stringify(req));

	request.hmac = hmac;

	$.ajax({
		url : session.server + "/batch/settle",
		type : "POST",
		data : JSON.stringify(request),
		contentType : "application/json",
		headers : {
			"x-session-token" : sessionStorage.getItem("session-token"),
			"x-csrf-token" : sessionStorage.getItem("csrf-token")
		},
		dataType : 'json',
		error : function(jqXHR, textStatus, errorThrown) {
			hideshow('retail-landing-block', 'batch-settle-block');
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
		},
		success : function(data, textStatus, jqXHR) {
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
			if (sessionStorage.getItem("lang") == 'en') {
				$("#overlay-msg").html("Settlement is Successful!");
			} else {
				$("#overlay-msg").html("La liquidación es exitosa !");
			}

			$("#rdr-icn").attr('src', 'images/success-trns.png');
			setTimeout(function() {
				$("#process-settlement").addClass("hide-overlay");
				hideshow('retail-landing-block', 'batch-settle-block');
			}, 3000);
		}
	});
}

function showprocessing() {
	$("#success-page").addClass("hide-overlay");
	$("#process-settlement").removeClass("hide-overlay");
	setTimeout(function() {
		checkStatus();
	}, 3000);
}

/* Saves signature */
function saveImage(tId, image) {
	req = {};
	req.transactionId = tId;
	req.image = image;

	request = {}
	var sessionKey = sessionStorage.getItem("session-key");
	var encryptedData = aes.encode(JSON.stringify(req), sessionKey);
	request.data = encryptedData;

	var hmac = aes.getHmac(sessionKey, JSON.stringify(req));
	request.hmac = hmac;

	$.ajax({
		url : session.server + "/transaction/saveImage",
		type : "POST",
		data : JSON.stringify(request),
		contentType : "application/json",
		headers : {
			"x-session-token" : sessionStorage.getItem("session-token"),
			"x-csrf-token" : sessionStorage.getItem("csrf-token")
		},
		dataType : 'json',
		error : function(jqXHR, textStatus, errorThrown) {
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
		},
		success : function(data, textStatus, jqXHR) {
			sessionStorage.setItem("csrf-token", jqXHR
					.getResponseHeader("x-csrf-token"));
		}
	});
}

/* Signature Related */
/* Signature and Receipt Script */
function prtReceipt(src) {
	sessionStorage.setItem("sign-src", src);
	hideshow("txnsummary-block", "sign-rcpt-block");
	var saleResponseObj = sessionStorage.getObject("response");
	saveImage(saleResponseObj.transactionId, src);
	// setImage();
	// setTimeout(function(){ $("#printing-overlay").addClass("hide-overlay");
	// $("#receipt-overlay").removeClass("hide-overlay"); },2000);
	showSummary();
	// setTimeout(function(){ hideshow("txnsummary-block","sign-rcpt-block");
	// },8000);
}

/* Log Out */
function logout() {
	req = {}
	var sessionKey = aes.getSessionKey(16);
	var encryptedSessionKey = aes.getEncryptedSessionKey(sessionKey);
	sessionStorage.setItem("session-key", sessionKey);
	$.ajax({
		url : session.server + "/security/logout",
		type : "POST",
		data : JSON.stringify(req),
		headers : {
			"x-session-token" : sessionStorage.getItem("session-token"),
		},
		contentType : "application/json",
		dataType : 'json',
		error : function(jqXHR, textStatus, errorThrown) {
			// toast("Log out failed");
		},
		success : function(data, textStatus, jqXHR) {
			// toast("Log out successfull");
		}
	});
}