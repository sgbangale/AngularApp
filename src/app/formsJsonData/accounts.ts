import {
    DynamicFormControlModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicCheckboxModel,
    DynamicFormService,
    DynamicFormGroupModel,
    DynamicRatingModel,
    DynamicSliderModel
} from '@ng-dynamic-forms/core';

/*
paste this after every npm run api in account service
 postApiAccountLoginResponse(params: AccountService.PostApiAccountLoginParams): Observable<HttpResponse<void>> {

    var __headers = new HttpHeaders({
      'Content-Type': 'application/x-www-urlencoded'
    });
    var __body = {
      username: params.username,
      password: params.password,
      grant_type: 'password'

    };
    const formBody = Object.keys(__body).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(__body[key])).join('&');
    let req = new HttpRequest < any > (
      'POST',
      this.rootUrl + `/api/account/login`,
      formBody, {
        headers: __headers

      });

    return this.http.request < any > (req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse < any > ;
        let _body = _resp.body;
        if (_resp.ok) {
          localStorage.clear();
          Object.keys(_body).map(key => localStorage.setItem(key, _body[key]));
        } else {
          localStorage.clear();
        }
        return _resp.clone({
          body: _body
        }) as HttpResponse < any > ;
      })
    );
  }
*/
let UserRegisterModel =[

  new DynamicFormGroupModel({
    id:"user",
    group:[
      new DynamicInputModel({

        id: "email",
        label: "Email",
        placeholder: "Enter email"
    }),
    new DynamicInputModel({

        id: "firstName",
        label: "firstName",
        placeholder: "Enter first name"
    }),
    new DynamicInputModel({

        id: "lastName",
        label: "Last Name",
        placeholder: "Enter last name"
    }),
    new DynamicInputModel({

        id: "password",
        label: "Password",
        placeholder: "Enter password",
        inputType:'password'

    }),
    new DynamicInputModel({

        id: "roleName",
        label: "Role",
        placeholder: "Select Role",
        list:['Admin','Candidate']
    }),
    ]

  })

    
];
let PostApiAccountLoginParams = [

    new DynamicInputModel({

        id: "username",
        label: "User Name",
        maxLength: 20,
        placeholder: "Enter user name",
        required:true
    }),
    new DynamicInputModel({

        id: "password",
        label: "Password",
        placeholder: "Enter password",
        inputType:"password",
        required:true

    })

];


export const Accounts = {
    LoginForm: PostApiAccountLoginParams,
    CreateAccount : UserRegisterModel
  };

  

