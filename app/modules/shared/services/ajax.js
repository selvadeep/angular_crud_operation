(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.service:ajaxService
   * @description
   * # companiesService
   * Service of the app
   */

  // angular
  //   .module('balaji')
  //   .service("GuestAjax", function($http, $state, $rootScope, $timeout){

  //   function swalert(errorresponse)
  //   {
  //     swal({
  //    // title: "Success!",
  //     text: errorresponse,
  //     width: 400,
  //     height: 200,
  //     type: "", //success,error
  //     timer: 3000,
  //     showConfirmButton: false
  //   })
  //   }

  //     this.request = function(method, endpoint, data){
  //       var host = 'http://localhost:3000';
  //       // var host = 'http://freshgrc-staging.ap-south-1.elasticbeanstalk.com';
  //       // var apiPath = '/api/v1';
  //       var url = host + endpoint;
  //       // allow_headers: ["accept", "content-type"]
  //       var headers = { 
  //          "Accept": "application/json",
  //         'Access-Control-Allow-Origin' : '*',
  //         'Access-Control-Allow-Methods' : '*',
  //         "Content-Type": 'application/json'
  //       }

  //       return $http({
  //         url: url,
  //         method: method,
  //         withCredentials: true,
  //         headers: headers,
  //         data: data
  //       }).then(function(response) {
  //         return response;
  //       })
  //         .catch(function(response) {
  //           if (response.status == 401) {
  //             $state.go('home');
  //             swal("Authentication is needed to get requested response. This is similar to 403, but in this case, authentication is possible.");               
  //           }
  //    if (response.status == 400) {

  //     swalert("This response means that server could not understand the request due to invalid syntax.");
  //       // alert(response.statusText +  response.data.exception);
  //     }
  //     if (response.status == 402) {
  //     swalert("This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.");
  //     }
  //     if (response.status == 403) {
  //     swalert("Client does not have access rights to the content so server is rejecting to give proper response.");
  //     }
  //     if (response.status == 404) {
  //     swalert("Server can not find requested resource. This response code probably is most famous one due to its frequency to occur in web.");
  //     }
  //     if (response.status == 405) {
  //     swalert("The request method is known by the server but has been disabled and cannot be used. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.");
  //     }
  //     if (response.status == 406) {
  //     swalert("This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.");
  //     }
  //     if (response.status == 407) {
  //     swalert("This is similar to 401 but authentication is needed to be done by a proxy.");
  //     }
  //     if (response.status == 408) {
  //     swalert("The server would like to shut down this unused connection");
  //     }
  //     if (response.status == 409) {
  //     swalert("This response would be sent when a request conflict with current state of server.");
  //     }
  //     if (response.status == 410) {
  //     swalert("This response would be sent when requested content has been deleted from server.");
  //     }
  //     if (response.status == 411) {
  //     swalert("Server rejected the request because the Content-Length header field is not defined and the server requires it.");
  //     }
  //     if (response.status == 412) {
  //     swalert("The client has indicated preconditions in its headers which the server does not meet.");
  //     }
  //     if (response.status == 422) {
  //     swalert("These data's are used.pls change your data's.");
  //     }
  //     if (response.status == 500) {
  //     swalert("The server has encountered a situation it doesn't know how to handle");
  //     }
  //     if (response.status == 501) {
  //     swalert("The request method is not supported by the server and cannot be handled.");
  //     }
  //     if (response.status == 502) {
  //     swalert("The server, while working as a gateway to get a response needed to handle the request, got an invalid response.");
  //     }
  //     if (response.status == 503) {
  //     swalert("Common causes are a server that is down for maintenance or that is overloaded. ");
  //     }
  //     if (response.status == 504) {
  //     swalert("This error response is given when the server is acting as a gateway and cannot get a response in time.");
  //     }
  //     if (response.status == 505) {
  //     swalert("The HTTP version used in the request is not supported by the server.");
  //     }
  //     if (response.status == 506) {
  //     swalert("The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.");
  //     }
  //     if (response.status == 507) {
  //     swalert("The server has an internal configuration error");
  //     }
  //     if (response.status == 511) {
  //     swalert("lient needs to authenticate to gain network access.");
  //     }

  //           $timeout(function() {
  //             $rootScope.GuestAjaxFailed = false;
  //           }, 3000);
  //         }).finally(function() {
  //           // console.log("Completed GuestAjax");
  //         });
  //     };
  //   });

  angular
    .module('balaji')
    .service("UserAjax", function($http, $state, $rootScope, $timeout){

      function swalert(errorresponse)
    {
      swal({
      title: "error",
      text: errorresponse,
      width: 400,
      height: 200,  
      type: "", //success,error
      timer: 3000,
      showConfirmButton: false
    })
    }

    function swalert_for_not_authorised(errorresponse, title)
    {
      swal({
      title: title,
      text: errorresponse,
      width: 400,
      height: 200,  
      type: "", //success,error
      confirmButtonText: "Okay..!",
      closeOnConfirm: false},
      function() {
        window.history.back();
        swal.close();
      });
    
    }

      this.request = function(method, endpoint, data){
         var host = 'http://localhost:3000';
        //var host = 'http://freshgrc-staging.ap-south-1.elasticbeanstalk.com';
        var url = host + endpoint;
        // allow_headers: ["accept", "content-type"]
        var headers = {
           "Accept": "application/json",
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*',
          "Content-Type": 'application/json',
          // 'Access-Token' : $rootScope.current_user.authentication_token,
          // 'Access-Token' : "$2a$10$Z1QJ46AB.9Qx/IDCIWqnTO20HogZNyOl7ztRDwqzl75nFaCbORNSW",
        }
        // debugger
        return $http({
          url: url,
          method: method,
          withCredentials: false,
          headers: headers,
          data: data
        }).then(function(response) {
          if (response.status == 422) {
            $mdToast.show(
              $mdToast.simple()
              .content('You have errors in your submission.')
              .position('top right')
              .hideDelay(2000)
            );
          }
          return response;
        })
          .catch(function(response) {
            console.log(response);
            if (response.status == 401) {
             $state.go($state.previous);
              swalert_for_not_authorised("Authentication is needed to get requested response.", "Not Authorised"); 
            }
     if (response.status == 400) {
      swalert("This response means that server could not understand the request due to invalid syntax.");
        // alert(response.statusText +  response.data.exception);
      }
      if (response.status == 402) {
      swalert("This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.");
      }
      if (response.status == 403) {
      swalert("Client does not have access rights to the content so server is rejecting to give proper response.");
      }
      if (response.status == 404) {
      swalert("Server can not find requested resource. This response code probably is most famous one due to its frequency to occur in web.");
      }
      if (response.status == 405) {
      swalert("The request method is known by the server but has been disabled and cannot be used. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.");
      }
      if (response.status == 406) {
      swalert("This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.");
      }
      if (response.status == 407) {
      swalert("This is similar to 401 but authentication is needed to be done by a proxy.");
      }
      if (response.status == 408) {
      swalert("The server would like to shut down this unused connection");
      }
      if (response.status == 409) {
      swalert("This response would be sent when a request conflict with current state of server.");
      }
      if (response.status == 410) {
      swalert("This response would be sent when requested content has been deleted from server.");
      }
      if (response.status == 411) {
      swalert("Server rejected the request because the Content-Length header field is not defined and the server requires it.");
      }
      if (response.status == 412) {
      swalert("The client has indicated preconditions in its headers which the server does not meet.");
      }
      if (response.status == 500) {
      swalert("The server has encountered a situation it doesn't know how to handle");
      }
      if (response.status == 501) {
      swalert("The request method is not supported by the server and cannot be handled.");
      }
      if (response.status == 502) {
      swalert("The server, while working as a gateway to get a response needed to handle the request, got an invalid response.");
      }
      if (response.status == 503) {
      swalert("Common causes are a server that is down for maintenance or that is overloaded. ");
      }
      if (response.status == 504) {
      swalert("This error response is given when the server is acting as a gateway and cannot get a response in time.");
      }
      if (response.status == 505) {
      swalert("The HTTP version used in the request is not supported by the server.");
      }
      if (response.status == 506) {
      swalert("The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.");
      }
      if (response.status == 507) {
      swalert("The server has an internal configuration error");
      }
      if (response.status == 511) {
      swalert("lient needs to authenticate to gain network access.");
      }


            $timeout(function() {
              $rootScope.UserAjaxFailed = false;
            }, 3000);
          }).finally(function() {
          });
      };
    });

})();


// allow_headers: ["accept", "content-type"]