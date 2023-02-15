import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  reviews = [
    { "id": 1, "pid": 2, "comment": "good", "user": "django", "rating": 4 },
    { "id": 2, "pid": 2, "comment": "worth", "user": "django", "rating": 5 },
    { "id": 3, "pid": 3, "comment": "best product", "user": "django", "rating": 4 },
    { "id": 4, "pid": 3, "comment": "good", "user": "django", "rating": 3 },
    { "id": 5, "pid": 4, "comment": "worth", "user": "django", "rating": 3 },
    { "id": 6, "pid": 4, "comment": "must buy", "user": "django", "rating": 5 },

  ]

  constructor() { }

  getAllProducts() {

    let tkn = localStorage.getItem("token")
    if (tkn) {
      return fetch("http://127.0.0.1:8000/products/", {
        "method": "GET",
        "headers": {
          "Content-type": "application/json;charset=UTF-8",
          "Authorization": tkn
        }
      })
    }
    else {
      return new Promise((res, rej) => rej("error"))
    }

  }

  getAuthToken() {
    return localStorage.getItem("token")
  }

  getProductDetail(id: any) {

    let tkn = this.getAuthToken()
    if (tkn) {
      return fetch('http://127.0.0.1:8000/products/${id}/', {
        "method": "GET",
        "headers": {
          "Content-type": "application/json;charset=UTF-8",
          "Authorization": tkn
        }
      })
    }
    else {
      return new Promise((res, rej) => rej("error"))
    }

  }
  getProductReviews(id: Number) {
    let tkn = this.getAuthToken()
    if (tkn) {
      return fetch('http://127.0.0.1:8000/products/${id}/get_review/', {
        "method": "GET",
        "headers": {
          "Content-type": "application/json;charset=UTF-8",
          "Authorization": tkn
        }
      })
    }
    else {
      return new Promise((res, rej) => rej("error"))
    }
  }


    addProductReview(data: any, id: any){
      let tkn = localStorage.getItem("token")
      if (tkn) {
        return fetch('http://127.0.0.1:8000/products/${id}/add_review/', {
          "method": "POST",
          "body": JSON.stringify(data),
          "headers": {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": tkn
          }
        })
      }
      else {
        return new Promise((res, rej) => rej("error"))
      }

    }

      //  method Post avumbo link nne shesham method,data(body),Content-type pass cheyanam
      getToken(data: any){
        return fetch("http://127.0.0.1:8000/token",
          {
            "method": "POST",
            "body": JSON.stringify(data),
            "headers": {
              "Content-type": "application/json;charset=UTF-8"
            }
          })
      }
    }
