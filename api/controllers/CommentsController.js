/**
 * CommentsController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/comments/create`
   */
   create: function (req, res) {
    var params = req.params.all();
    Comments.create(params,function(err,comments){
        if(err) res.json(err);
        res.status(201);
        res.json(comments);    
    });  
  },


  /**
   * Action blueprints:
   *    `/comments/destroy`
   */
   destroy: function (req, res) {
        var id = req.param('id');
        if(!id){
            return res.badRequest('No id provided.');
        }
        Comments.findOne(id).done(function(err,result){
              if(err) return res.serverError(err);
              if(!result) return res.notFound();
              Comments.destroy(id,function(err){
                    if(err) res.json(err);
                    return res.json(result);
              });
        });  
  },


  /**
   * Action blueprints:
   *    `/comments/find`
   */
   find: function (req, res) {
    var name = req.param('id');
    if(!name){
        Comments.find().done(function(err,comments){
            if(comments === undefined) return res.notFound();
            res.json(comments);
        });
    }
    else{
        var options = {
            author: req.param('id')
        };
        Comments.find(options,function(err,comments){
            if(comments === undefined) return res.notFound();
            res.json(comments);
        });
    }
  },

  date: function(req,res){
        Comments.find({createdAt: {'>': new Date('1/1/2014'), '<': new Date('6/26/2014')}},function(err,comments){
            if(comments === undefined) return res.notFound();
            res.json(comments);
        });
        
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CommentsController)
   */
  _config: {}

  
};
