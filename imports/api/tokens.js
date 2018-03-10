import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Token = new Mongo.Collection("tokens");

Meteor.methods({
	"token.insert"(token, type) {
		return Token.insert({ token, type });
	},
	"get_long_token"(type){
		return Token.findOne({ type: type });
	}
})