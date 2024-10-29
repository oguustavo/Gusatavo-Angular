angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) {
        $scope.publicacoes = response.data;
    })

  $scope.index = function (id) {
      localStorage.setItem("index", id);
  };
});



angular.module('noticia', []);
angular.module('noticia').controller('RestNot', function ($scope, $http) {
    
    var id = localStorage.getItem("index");

   
    $http.get('https://api-fake-blog.onrender.com/postagem/' + id)
        .then(function(response) {
            $scope.noticia = response.data;
        })

    
    $http.get('https://api-fake-blog.onrender.com/postagens')
        .then(function(response) {
            $scope.outrasPublicacoes = response.data;
        })
});
