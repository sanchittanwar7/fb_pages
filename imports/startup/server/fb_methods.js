import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'
import Token from '../../api/tokens'

Meteor.methods({
	"get_fb_token"(shortToken) {
		let baseUrl = "https://graph.facebook.com/v2.12/"
		let path = "oauth/access_token?grant_type=fb_exchange_token"
		let clientID = "155683401740536"
		let clientSecret = "11933476b49bb36fea55d12aa82da6ca"
		let apiURL = `${baseUrl}${path}&client_id=${clientID}&client_secret=${clientSecret}&fb_exchange_token=${shortToken}`;
		let res = HTTP.call("get", apiURL)
		console.log(res)
		return res;
	},
	 "get_pages"(name,longToken) {
	 	console.log("longtoken",longToken);
	     let baseUrl = "https://graph.facebook.com/v2.12/"
		let path = 'search?type=page'
		let clientID = "155683401740536"
		let clientSecret = "11933476b49bb36fea55d12aa82da6ca"

		let apiURL = `${baseUrl}${path}&client_id=${clientID}&client_secret=${clientSecret}&q=${name}&oauth_token=${longToken.token.data.access_token}`
		console.log(apiURL);
		let response = HTTP.call("get", apiURL)
		console.log("res : ", response)
		return response;
		
		// console.log("longtoken", longToken)
		// let baseUrl = "https://graph.facebook.com/v2.12/"
		// let path = 'search?type=page'
		// let clientID = "155683401740536"
		// let clientSecret = "11933476b49bb36fea55d12aa82da6ca"
		// console.log("longToken : ", longToken)
		// let apiURL = `${baseUrl}${path}&client_id=${clientID}&client_secret=${clientSecret}&q=${name}&oauth_token=${longToken}`;
		// let response = HTTP.call("get", apiURL)
		// console.log("res : ", response)
		// return response;
	}
});