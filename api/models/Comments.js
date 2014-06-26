/**
 * Comments
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
    id:{
        type: 'integer',
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    text: 'string',
    author: {
            type: 'string',
            required: 'true'
        },
            date: 'DATE'
  }

};
