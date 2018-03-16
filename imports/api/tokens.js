import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Token = new Mongo.Collection("tokens");

Meteor.methods({
	"token.insert"(token, type) {
		return Token.insert({ token, type });
	},
	"get_long_token"(type){
		return Token.findOne({ type: type });
	},
	"insert.pages"(name, details){
		return Token.insert({name, details});
	},
	"find.pages"(name){
		return Token.findOne({ name });
	}
})