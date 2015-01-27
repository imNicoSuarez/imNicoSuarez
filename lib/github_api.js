var request = require('request');


var repos = function(callback){

  var options  = {
    headers: {
              'content-type' : 'application/json',
              'user-agent': 'labxns'
            },
    url:     'https://api.github.com/users/labxns/repos'
  }

  request
    .get(options, function(error, response, body){
    callback(JSON.parse(body));
  });
};


var repoContent = function(repo, callback){
  var options  = {
    headers: {
              'content-type' : 'application/json',
              'user-agent': 'labxns'
            },
    url:     'https://api.github.com/repos/labxns/' + repo + '/contents'
  }

  request
    .get(options, function(error, response, body){
    callback(JSON.parse(body));
  });

};

var getFile = function(repo, fileName, folderName, callback){
  var host = 'https://raw.githubusercontent.com';
  var url  = host + '/LabXNS/' + repo + '/master/' + folderName + '/' + fileName;

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(body);
    }
  });
};

var getTitle = function(repoName, callback){
  var url = 'https://raw.githubusercontent.com/LabXNS/' + repoName + '/master/post/title.txt';

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(body);
    }
  });
}

var getDescription = function(repoName, callback){
  var url = 'https://raw.githubusercontent.com/LabXNS/' + repoName + '/master/post/description.txt';

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(body);
    }
  });
}

var getPost = function(repoName, callback) {
  data = {};
  getDescription(repoName, function(dataDescription){
    data.description = dataDescription;
    getTitle(repoName, function(dataTitle){
      data.title = dataTitle;
      callback(data);
    });
  });

}

var methods = {
  repos : repos,
  repoContent: repoContent,
  getFile: getFile,
  getPost: getPost
};

module.exports = methods;

// repos(function(dataRepos){
//   bodyRepos = JSON.parse(dataRepos);
//  for (var i = bodyRepos.length - 1; i >= 0; i--) {
//    console.log(bodyRepos[i].name);
//    repoContent(bodyRepos[i].name, function(dataContent){
//     bodyContent = JSON.parse(dataContent);
//     console.log(bodyContent);
//    });
//  };
// });

