var gitHub =  require('../lib/github_api');
/*
 * GET home page.
 */

exports.index = function(req, res){

  posts =  []

  gitHub.repos(function(repos){
    for (var i = repos.length - 1; i >= 0; i--) {
      post = repos[i];
      gitHub.getPost(post.name, function(content){
        post.content = content;
        console.log(post.content);
        posts.push(post);
        res.render('index', { title: 'Express' , posts: posts });
      });
    };
  });

};

