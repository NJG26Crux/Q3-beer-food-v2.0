angular.module("app", ["angularMoment"])

  .component('reddit', {

    controller: function() {
      const vm = this

      vm.$onInit = function() {
        vm.sortBy = "None"
        vm.posts = [{
            "title": "Third Post",
            "body": "This is the creative Body of the Third Post.",
            "author": "Roger \"the Bear\" Schmidt",
            "imageUrl": "https://static.pexels.com/photos/297642/pexels-photo-297642.jpeg",
            "comments": ["this is comment 1", "this is comment 2", "this is comment 3"],
            "showComment": false,
            "msgDate": new Date(),
            "votes": 0
          },
          {
            "title": "Ain't no thang but a chicken wang",
            "body": "I just bought a Rattray's Light Bent Apple Pipe of the Year and it is Dope !",
            "author": "Plaid is my Favorite Color",
            "imageUrl": "https://static.pexels.com/photos/6969/sunset-summer-hipster-pipe.jpg",
            "comments": ["this is comment 3", "this is comment 4", "this is comment 5"],
            "showComment": false,
            "msgDate": new Date(),
            "votes": 5
          },
          {
            "imageUrl": "https://static.pexels.com/photos/192473/pexels-photo-192473.jpeg",
            "author": "Too good for my own Shoes",
            "body": "I just got some 4 Aces Pipe Tobacco at Capitol Hill Tobacco ... and it is Ace !",
            "title": "Smoking a Pipe I feel A-1 !",
            "comments": ["this is comment 6", "this is comment 7", "this is comment 8"],
            "showComment": false,
            "msgDate": new Date(),
            "votes": 20
          }
        ]
      }

      vm.submitPost = function() {
        vm.post.comments = [];
        vm.post.showComment = false;
        // vm.post.time = ????
        vm.post.votes = 0;
        vm.post.msgDate = new Date();
        // vm.post.msgDate = new Time();
        vm.posts.unshift(vm.post);
        delete vm.post
        vm.isPostFormOpen = !vm.isPostFormOpen
        console.log(vm.posts);
      }

      vm.postCommand = function(key, postComment) {
        console.log('submitComment Fun Started!');
        // vm.post.comments = [];
        // vm.post.showComment = false;
        // vm.post.time = ????
        // vm.post.votes = 0;
        vm.posts[key].comments.push(vm.newComment[key].comment);
        console.log('comment: ' + JSON.stringify(vm.newComment[key].comment));
        console.log('posts: ' + JSON.stringify(vm.posts[key]));
        delete vm.newComment
        postComment.$setPristine();
        // vm.postComment.$setUntouched()
      }

      vm.myDate = function() {
        var s = 1000;
        var m = s * 60;
        var h = m * 60;
        return function(date) {
          var now = Date.now();
          var d = date.getTime() - now;
          console.log(d);
          if (d > h)
            return '' + d / h + ' hours ago';
          if (d > m)
            return '' + d / m + ' minutes ago';
          if (d > s)
            return '' + d / s + ' seconds ago';
          return '' + d + ' ms ago';
        }
      }

      vm.voteUp = function(key) {
        vm.posts[key].votes ++;
      }

      vm.voteDown = function(key) {
        vm.posts[key].votes --;
      }

      vm.editPost = function(key) {
        $state.go('show-house', {id: houseId})
      }
    },

    templateUrl: 'template-home.html'
  })
